/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [556],
  {
    54423: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
        WidgetText: "co4IP1iV1813n9UgG3h5f",
        WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
        CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
        Y: "_1FD7rgQVEqkzjDjzYa-1BC",
      };
    },
    13043: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => u });
      var r = n(85556),
        i = n(47427),
        a = n(82493),
        o = n(4030),
        s = n(20417),
        l = n(37563),
        c = n(35643);
      function u(e) {
        const { children: t, navTreeRef: n } = e,
          u = (0, r._T)(e, ["children", "navTreeRef"]),
          d = i.useRef(),
          g = (0, s.BE)(d, n),
          m = (0, l.id)(),
          p = window.__virtual_keyboard_client;
        if (m) {
          const e = window.__nav_tree_root;
          return i.createElement(
            a.Fe,
            Object.assign({}, u, {
              navTreeRef: g,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            i.createElement(
              c.o5,
              { factory: p },
              i.createElement(o.O, null, t),
            ),
          );
        }
        return i.createElement(i.Fragment, null, t);
      }
    },
    89373: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => l });
      var r = n(85556),
        i = n(79545),
        a = n(77581),
        o = n(13557),
        s = n(37563);
      class l {
        BIsSaleActive() {
          const e = Date.now();
          return Boolean(
            e >= this.m_dateSaleStart.getTime() &&
              e < this.m_dateSaleEnd.getTime(),
          );
        }
        GetNumTradingCardsEarned() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.LazyInitTransport();
            const e = { earned_today: 0, earned_lifetime: 0, eresult: 2 },
              t = Date.now(),
              n =
                864e5 *
                  Math.floor((t - this.m_dateSaleStart.getTime()) / 864e5) +
                this.m_dateSaleStart.getTime(),
              r = i.gA.Init(o.GZ);
            let a = yield o.Ts.GetNumTradingCardsEarned(this.m_transport, r),
              s = a.GetEResult();
            return 1 !== s
              ? ((e.eresult = s), e)
              : ((e.earned_lifetime = a.Body().num_trading_cards()),
                r.Body().set_timestamp_start(n / 1e3),
                (a = yield o.Ts.GetNumTradingCardsEarned(this.m_transport, r)),
                (s = a.GetEResult()),
                1 != s
                  ? ((e.eresult = s), e)
                  : ((e.earned_today = a.Body().num_trading_cards()),
                    (e.eresult = 1),
                    e));
          });
        }
        static Get() {
          return (
            l.s_Singleton ||
              ((l.s_Singleton = new l()),
              "dev" == s.De.WEB_UNIVERSE &&
                (window.g_SeasonalSaleStore = l.s_Singleton)),
            l.s_Singleton
          );
        }
        LazyInitTransport() {
          if (!this.m_transport) {
            const e = (0, s.kQ)("loyalty_webapi_token", "application_config");
            "string" == typeof e
              ? (this.m_transport = new a.J(
                  s.De.WEBAPI_BASE_URL,
                  e,
                ).GetServiceTransport())
              : console.error("CSeasonalSaleStore failed to load webapi token");
          }
        }
        constructor() {
          (this.m_transport = void 0),
            (this.m_dateSaleStart = new Date("2023-12-21T18:00:00Z")),
            (this.m_dateSaleEnd = new Date("2024-01-04T18:00:00Z"));
        }
      }
    },
    71472: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ar: () => c,
        Wo: () => u,
        i9: () => s,
        ks: () => a,
        nQ: () => l,
        ni: () => d,
      });
      var r = n(47427),
        i = n(8285);
      function a(e, t) {
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
      function s(e, t, n, r = !1) {
        const i = new URLSearchParams(e.location.search.substring(1));
        i.delete(t),
          o(n) && i.append(t, n),
          r
            ? e.replace(`?${i.toString()}`, Object.assign({}, e.location.state))
            : e.push(`?${i.toString()}`);
      }
      function l(e, t, n) {
        s(e, t, n, !0);
      }
      function c(e, t) {
        const n = (0, i.k6)(),
          l = (0, i.TH)(),
          c = (0, r.useMemo)(() => {
            const n = a(l.search, e);
            return o(n)
              ? o(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [l.search, e, t]),
          u = (0, r.useCallback)(
            (t) => {
              s(n, e, o(t) ? String(t) : null);
            },
            [n, e],
          );
        return [c, u];
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
    86445: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => S });
      var r = n(47427),
        i = n(13043),
        a = n(91618),
        o = n(41130),
        s = n(74840),
        l = n(80886),
        c = n(71472),
        u = n(62613),
        d = n(3613),
        g = n(40735),
        m = n(31846),
        p = n(54423),
        E = n.n(p),
        A = n(37563);
      function S(e) {
        const { appID: t } = e,
          n = (0, g.g)(),
          [p] = (0, c.Ar)("inqueue", "0"),
          [S, v] = (0, r.useState)(!1),
          [h, D] = (0, r.useState)(!1),
          [y] = (0, l.vs)(t, { include_assets: !0 }),
          _ = (0, o.L)(),
          R = r.useRef();
        r.useEffect(() => {
          var e;
          return null === (e = R.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const T = (0, A.id)(),
          { eStoreDiscoveryQueueType: b, storePageFilter: N } =
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
          w = r.useCallback(() => {
            D(!0);
          }, []),
          f = r.useCallback(() => {
            v(!0);
          }, []),
          G = (0, s.ZP)(b, N);
        return n && y
          ? h
            ? null
            : r.createElement(
                i.p,
                {
                  NavigationManager: _,
                  navTreeRef: R,
                  navID: "DiscoveryQueueAppWidget",
                },
                r.createElement(
                  a.s,
                  {
                    focusable: !0,
                    className: E().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: w,
                    onOKButton: f,
                    onOKActionDescription: (0, m.Xx)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, m.Xx)("#Button_Close"),
                  },
                  r.createElement("img", {
                    className: E().WidgetCapsule,
                    src:
                      null == y ? void 0 : y.GetAssets().GetSmallCapsuleURL(),
                  }),
                  r.createElement(
                    "div",
                    { onClick: f, className: E().WidgetText },
                    (0, m.Xx)("#DiscoveryQueue_ResumeWizard"),
                    (null == G ? void 0 : G.length) > 0 && ": " + G,
                  ),
                  !T &&
                    r.createElement(
                      "div",
                      { className: E().CloseButton, onClick: w },
                      r.createElement(u.X, null),
                    ),
                  S &&
                    r.createElement(d.MS, {
                      includeAppID: t,
                      bWizardVisible: S,
                      fnCloseModal: () => v(!1),
                      eStoreDiscoveryQueueType: b,
                      storePageFilter: N,
                    }),
                ),
              )
          : null;
      }
    },
    78862: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => d });
      var r = n(47427),
        i = n(31846),
        a = n(3613),
        o = n(40735),
        s = n(91618),
        l = n(37563),
        c = n(27438),
        u = n(90069);
      function d(e) {
        const t = (0, o.g)(),
          [n, d] = (0, r.useState)(!1),
          g = r.useCallback(() => {
            l.L7.logged_in
              ? d(!0)
              : (0, u.AM)(
                  r.createElement(c.JX, {
                    onOK: () => {
                      window.location.href = `${l.De.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
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
              s.s,
              null,
              r.createElement(
                "a",
                { onClick: g, className: "experiment-button" },
                (0, i.Xx)("#DiscoveryQueue_OpenWizard"),
              ),
              n &&
                r.createElement(a.MS, {
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
    89272: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
  },
]);

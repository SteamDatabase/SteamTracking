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
    66294: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => u });
      var n = r(33940),
        s = r(89526),
        o = r(44026),
        i = r(17589),
        c = r(4306),
        a = r(32765),
        l = r(94952);
      function u(e) {
        const { children: t, navTreeRef: r } = e,
          u = (0, n._T)(e, ["children", "navTreeRef"]),
          g = s.useRef(),
          d = (0, c.BE)(g, r),
          p = (0, a.id)(),
          m = window.__virtual_keyboard_client;
        if (
          ((0, s.useEffect)(() => {
            l.Wz.SetHookFactory(() => m);
          }, [m]),
          p)
        ) {
          const e = window.__nav_tree_root;
          return s.createElement(
            o.Fe,
            Object.assign({}, u, {
              navTreeRef: d,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            s.createElement(i.O, null, t),
          );
        }
        return s.createElement(s.Fragment, null, t);
      }
    },
    5029: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ar: () => l,
        Wo: () => u,
        i9: () => c,
        ks: () => o,
        nQ: () => a,
        ni: () => g,
      });
      var n = r(89526),
        s = r(59934);
      function o(e, t) {
        let r;
        "string" == typeof e
          ? (r = e)
          : "location" in e
          ? (r = e.location.search)
          : "search" in e && (r = e.search);
        const n = new URLSearchParams(r.substring(1));
        if (n.has(t)) {
          const e = n.getAll(t);
          return e[e.length - 1];
        }
      }
      const i = (e) => null != e;
      function c(e, t, r, n = !1) {
        const s = new URLSearchParams(e.location.search.substring(1));
        s.delete(t),
          i(r) && s.append(t, r),
          n
            ? e.replace(`?${s.toString()}`, Object.assign({}, e.location.state))
            : e.push(`?${s.toString()}`);
      }
      function a(e, t, r) {
        c(e, t, r, !0);
      }
      function l(e, t) {
        const r = (0, s.k6)(),
          a = (0, s.TH)(),
          l = (0, n.useMemo)(() => {
            const r = o(a.search, e);
            return i(r)
              ? i(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== r)
                  : t.constructor(r)
                : r
              : t;
          }, [a.search, e, t]),
          u = (0, n.useCallback)(
            (t) => {
              c(r, e, i(t) ? String(t) : null);
            },
            [r, e],
          );
        return [l, u];
      }
      function u(e, t, r = !1) {
        const n = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const r = t[e];
            n.delete(e), i(r) && n.append(e, r);
          }
        r
          ? e.replace(`?${n.toString()}`, Object.assign({}, e.location.state))
          : e.push(`?${n.toString()}`);
      }
      function g(e, t) {
        u(e, t, !0);
      }
    },
    93908: (e, t, r) => {
      "use strict";
      r.d(t, { Mr: () => c, tk: () => a });
      var n = r(89526),
        s = r(701),
        o = r(16826),
        i = r(32765);
      function c() {
        return n.createElement(s.MrB, null);
      }
      function a() {
        return (0, i.id)()
          ? n.createElement(o.tkI, null)
          : n.createElement(s.j5H, null);
      }
    },
    87178: (e, t, r) => {
      "use strict";
      r.d(t, { j: () => i });
      var n = r(33940),
        s = r(89526),
        o = r(4306);
      class i extends s.Component {
        constructor(e) {
          super(e),
            (this.m_refImage = s.createRef()),
            (this.state = { nImage: 0 });
        }
        componentDidUpdate(e) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(e.rgSources) &&
            this.setState({ nImage: 0 });
        }
        get src() {
          let e = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (e = this.props.rgSources[this.state.nImage]),
            e ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage,
              ),
              (e =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            e
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(e) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              e,
              this.props.rgSources[this.state.nImage],
              this.state.nImage,
            );
          let t = this.state.nImage + 1;
          t >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(e),
            t < this.props.rgSources.length && this.setState({ nImage: t });
        }
        render() {
          const e = this.props,
            { src: t, rgSources: r, onIncrementalError: o, onError: i } = e,
            c = (0, n._T)(e, [
              "src",
              "rgSources",
              "onIncrementalError",
              "onError",
            ]),
            a = this.src;
          return s.createElement(
            "img",
            Object.assign({ src: a, ref: this.m_refImage }, c, {
              onError: this.OnImageError,
            }),
          );
        }
      }
      (0, n.gn)([o.ak], i.prototype, "OnImageError", null);
    },
    89350: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => E });
      var n = r(89526),
        s = r(66294),
        o = r(51438),
        i = r(83145),
        c = r(82588),
        a = r(25871),
        l = r(5029),
        u = r(701),
        g = r(49330),
        d = r(35388),
        p = r(14826),
        m = r(47573),
        A = r.n(m),
        h = r(32765);
      function E(e) {
        const { appID: t } = e,
          r = (0, d.g)(),
          [m] = (0, l.Ar)("inqueue", "0"),
          [E, v] = (0, n.useState)(!1),
          [S, D] = (0, n.useState)(!1),
          [I] = (0, a.vs)(t, { include_assets: !0 }),
          y = (0, i.L)(),
          b = n.useRef();
        n.useEffect(() => {
          var e;
          return null === (e = b.current) || void 0 === e
            ? void 0
            : e.Activate(!0);
        }, []);
        const R = (0, h.id)(),
          { eStoreDiscoveryQueueType: f, storePageFilter: N } =
            n.useMemo(() => {
              if ((null == m ? void 0 : m.length) > 0) {
                const e = m.split("_"),
                  t = Number(e[0]);
                let r;
                return (
                  e.length > 1 && (r = (0, c.M_)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: r }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [m]),
          w = n.useCallback(() => {
            D(!0);
          }, []),
          M = n.useCallback(() => {
            v(!0);
          }, []),
          C = (0, c.ZP)(f, N);
        return r && I
          ? S
            ? null
            : n.createElement(
                s.p,
                {
                  NavigationManager: y,
                  navTreeRef: b,
                  navID: "DiscoveryQueueAppWidget",
                },
                n.createElement(
                  o.s,
                  {
                    focusable: !0,
                    className: A().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: w,
                    onOKButton: M,
                    onOKActionDescription: (0, p.Xx)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, p.Xx)("#Button_Close"),
                  },
                  n.createElement("img", {
                    className: A().WidgetCapsule,
                    src:
                      null == I ? void 0 : I.GetAssets().GetSmallCapsuleURL(),
                  }),
                  n.createElement(
                    "div",
                    { onClick: M, className: A().WidgetText },
                    (0, p.Xx)("#DiscoveryQueue_ResumeWizard"),
                    (null == C ? void 0 : C.length) > 0 && ": " + C,
                  ),
                  !R &&
                    n.createElement(
                      "div",
                      { className: A().CloseButton, onClick: w },
                      n.createElement(u.X, null),
                    ),
                  E &&
                    n.createElement(g.MS, {
                      includeAppID: t,
                      bWizardVisible: E,
                      fnCloseModal: () => v(!1),
                      eStoreDiscoveryQueueType: f,
                      storePageFilter: N,
                    }),
                ),
              )
          : null;
      }
    },
    77091: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => g });
      var n = r(89526),
        s = r(14826),
        o = r(49330),
        i = r(35388),
        c = r(51438),
        a = r(32765),
        l = r(99307),
        u = r(57742);
      function g(e) {
        const t = (0, i.g)(),
          [r, g] = (0, n.useState)(!1),
          d = n.useCallback(() => {
            a.L7.logged_in
              ? g(!0)
              : (0, u.AM)(
                  n.createElement(l.JX, {
                    onOK: () => {
                      window.location.href = `${
                        a.De.STORE_BASE_URL
                      }login?redir=${encodeURIComponent(
                        document.location.href,
                      )}`;
                    },
                    strOKButtonText: (0, s.Xx)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, s.Xx)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, s.Xx)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, []);
        return t
          ? n.createElement(
              c.s,
              null,
              n.createElement(
                "a",
                { onClick: d, className: "experiment-button" },
                (0, s.Xx)("#DiscoveryQueue_OpenWizard"),
              ),
              r &&
                n.createElement(o.MS, {
                  bWizardVisible: r,
                  fnCloseModal: () => g(!1),
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
    26121: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5NEMwOTYzRDc4MTFFQUExREZEODRBMDBCNjdENTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5NEMwOTczRDc4MTFFQUExREZEODRBMDBCNjdENTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRDk0QzA5NDNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRDk0QzA5NTNENzgxMUVBQTFERkQ4NEEwMEI2N0Q1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/TXacAAABMSURBVHjaYvz//z8DNQHjyDMQDICGJgDx3f/kA5DeBJhh8f+pB+JBXr4DNFeZSp69CzLwP7UjZdTAkWAgVdMh1XMK1fPyCCwPAQIMAKf/Y+3dveJlAAAAAElFTkSuQmCC";
    },
  },
]);

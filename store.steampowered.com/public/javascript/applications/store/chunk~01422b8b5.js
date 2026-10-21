/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [9438],
    {
      79083: (I, p, r) => {
        "use strict";
        r.d(p, { m: () => l, U: () => E });
        var e = r(7850),
          a = r(36118),
          j = ((d) => (
            (d.k_ECutArrowStyle = "single"),
            (d.k_EDoubleArrowStyle = "double"),
            (d.k_EThickChevron = "chevron"),
            (d.k_EFilledArrow = "filled"),
            (d.k_EPointyArrow = "pointy"),
            d
          ))(j || {}),
          i = ((d) => (
            (d.k_EPillCrumb = "pill"),
            (d.k_ECircularCrumb = "circle"),
            (d.k_ESquareCrumb = "square"),
            d
          ))(i || {});
        function l(d) {
          const { arrowFill: g, arrowStyle: M, direction: A } = d;
          switch (M) {
            default:
            case j.k_ECutArrowStyle: {
              const n = A == "right" ? 0 : 180;
              return (0, e.jsx)(a.uMb, {
                fill: g || "white",
                role: "presentation",
                angle: n,
              });
            }
            case j.k_EDoubleArrowStyle: {
              const n = A == "right" ? 180 : 0;
              return (0, e.jsx)(a.F2T, {
                fill: g || "white",
                role: "presentation",
                angle: n,
              });
            }
            case j.k_EThickChevron: {
              const n = A == "right" ? 0 : 180;
              return (0, e.jsx)(a.l8x, {
                fill: g || "white",
                role: "presentation",
                angle: n,
              });
            }
            case j.k_EFilledArrow: {
              const n = A == "right" ? 90 : 270;
              return (0, e.jsx)(a.V5W, {
                fill: g || "white",
                role: "presentation",
                angle: n,
              });
            }
            case j.k_EPointyArrow:
              return (0, e.jsx)(a.L0X, {
                fill: g || "white",
                role: "presentation",
                direction: A || "left",
              });
          }
        }
        function E(d) {
          const {
              bIsActive: g,
              breadcrumbActiveColor: M,
              breadcrumbColor: A,
              breadcrumbStyle: n,
            } = d,
            P = g ? M || "#FFFFFF" : A || "#606974";
          switch (n) {
            default:
            case i.k_EPillCrumb:
              return (0, e.jsx)(a.IGf, { fill: P, role: "presentation" });
            case i.k_ECircularCrumb:
              return (0, e.jsx)(a.az8, { fill: P, role: "presentation" });
            case i.k_ESquareCrumb:
              return (0, e.jsx)(a.koA, { fill: P, role: "presentation" });
          }
        }
      },
      90405: (I, p, r) => {
        "use strict";
        r.d(p, { K: () => d, _: () => E });
        var e = r(7850),
          a = r(90626),
          j = r(81944),
          i = r(19298);
        const l = a.createContext({ enabled: !0 });
        function E(g) {
          const { enabled: M, children: A } = g,
            n = a.useMemo(() => ({ enabled: M }), [M]);
          return (0, e.jsx)(l.Provider, { value: n, children: A });
        }
        function d(g) {
          const {
              placeholderWidth: M,
              placeholderHeight: A,
              holdGamepadFocus: n = !1,
              onRender: P,
              style: H,
              mode: U = "JustLoad",
              children: k,
              ...K
            } = g,
            L = a.useContext(l),
            [T, D] = a.useState(() => ({
              bRenderChildren: !L.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            w = a.useRef(null),
            z = U === "LoadAndUnload" && L.enabled,
            B = a.useCallback(
              (y) => {
                D((_) => {
                  if (_.bRenderChildren === y || (_.bRenderChildren && !z))
                    return _;
                  let t = 0,
                    o = 0;
                  if (w.current) {
                    const s = w.current.getBoundingClientRect();
                    s && ((t = s.width), (o = s.height));
                  }
                  return (
                    y && P && P(),
                    {
                      bRenderChildren: y,
                      nPrevRenderWidth: t,
                      nPrevRenderHeight: o,
                    }
                  );
                });
              },
              [z, P],
            );
          a.useEffect(() => {
            L.enabled || B(!0);
          }, [L.enabled, B]);
          let O = H;
          if (!T.bRenderChildren) {
            const y = T.nPrevRenderWidth || M,
              _ = T.nPrevRenderHeight || A;
            (_ !== void 0 || y !== void 0) &&
              (O = { ...H, minHeight: _, minWidth: y });
          }
          const F = z ? "repeated" : "once";
          let N = (0, e.jsx)(j.J, {
            containerRef: w,
            style: O,
            ...K,
            onVisibilityChange: B,
            trigger: F,
            children: T.bRenderChildren && k,
          });
          return (
            n &&
              (N = (0, e.jsx)(i.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: N,
              })),
            N
          );
        }
      },
      9941: (I, p, r) => {
        "use strict";
        r.d(p, {
          OE: () => H,
          T6: () => T,
          VU: () => k,
          WA: () => D,
          aL: () => K,
          af: () => L,
          h5: () => z,
          iD: () => U,
          sb: () => P,
        });
        var e = r(7850),
          a = r(90626),
          j = r(69696),
          i = r.n(j),
          l = r(36707),
          E = r(16412),
          d = r(18210),
          g = r(30096),
          M = r(40365),
          A = r(97996);
        const n = "bTrailerCarouselAutoAdvance",
          P = 0,
          H = 1,
          U = 2,
          k = 3,
          K = 4,
          L = 5,
          T = 1e4;
        function D(B) {
          const {
              className: O,
              currentItemKey: F,
              autoAdvanceMsec: N,
              fnAdvance: y,
              enabled: _,
              pauseReason: t,
              countdownToken: o = "#SaleTrailerCarousel_NextGameInSeconds",
            } = B,
            s = a.useMemo(() => {
              const S = (0, A.VY)(n);
              return !S || S?.toLowerCase() === "true";
            }, []),
            [v, f] = a.useState(s),
            c = N !== void 0 ? N : T,
            [u, h] = a.useState(c),
            b = t !== void 0,
            x = w(t),
            C = _ && v && !b && c > 0 && u > 0,
            m = 30;
          (0, g.$$)(
            () => {
              const S = u - m;
              S <= 0 ? (y(), h(c)) : h(Math.max(S, 0));
            },
            m,
            [c],
            C,
          );
          const R = a.useCallback(
            (S) => {
              (0, A.lc)(n, String(S), 365 * 10), f(S), h(c);
            },
            [c],
          );
          return (
            a.useEffect(() => {
              h(c);
            }, [F, c]),
            (0, e.jsxs)("div", {
              className: O,
              children: [
                (0, e.jsxs)("div", {
                  className: (0, l.A)(
                    i().AutoAdvanceContent,
                    (!_ || !v) && i().Disabled,
                    b && i().Paused,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: i().AutoAdvanceLabel,
                      children: !b || !x ? (0, d.Yp)(o, Math.ceil(u / 1e3)) : x,
                    }),
                    (0, e.jsx)("div", {
                      className: i().AutoAdvanceBar,
                      style: {
                        "--auto-advance-ratio": `${100 - (u / c) * 100}%`,
                      },
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: (0, l.A)(i().AutoAdvanceCheckboxCtn),
                  children: (0, e.jsx)(E.Yh, {
                    className: i().AutoAdvanceCheckbox,
                    controlled: !0,
                    checked: v,
                    label: (0, d.we)("#SaleTrailerCarousel_AutoAdvanceEnabled"),
                    onChange: R,
                  }),
                }),
              ],
            })
          );
        }
        function w(B) {
          switch (B) {
            case K:
              return (0, d.we)("#SaleTrailerCarousel_AutoAdvanceVideoPaused");
            case k:
            case L:
              return (0, d.we)("#SaleTrailerCarousel_AutoAdvanceHover");
          }
        }
        function z() {
          const [B, O] = a.useState(!1),
            [F, N] = a.useState(!1);
          a.useEffect(() => {
            const o = () => O(document.hidden);
            return (
              document.addEventListener("visibilitychange", o),
              () => document.removeEventListener("visibilitychange", o)
            );
          }, []);
          const y = a.useCallback((o) => N(!o.isIntersecting), []),
            _ = a.useMemo(() => ({ threshold: 0.5 }), []),
            t = (0, M.BL)(y, _);
          return { bTabHidden: B, bOffscreen: F, refIntersection: t };
        }
      },
      68538: (I, p, r) => {
        "use strict";
        r.d(p, { F: () => B });
        var e = r(7850),
          a = r(54130),
          j = r(19298),
          i = r(65731),
          l = r(90626),
          E = r(36707),
          d = r(18210),
          g = r(3166),
          M = r(94162),
          A = r(9941),
          n = r(47444),
          P = r(90405),
          H = r(11279);
        function U(t) {
          const {
            nSlideIndex: o,
            nStartingSlideIndex: s,
            ref: v,
            children: f,
          } = t;
          return s === void 0
            ? f
            : (0, e.jsx)("div", { ref: o === s ? v : void 0, children: f });
        }
        function k(t) {
          const {
              padded: o,
              gap: s,
              children: v,
              bLazyRenderChildren: f,
              lazyRenderPlaceholderWidth: c,
              lazyRenderPlaceholderHeight: u,
              startingSlide: h,
            } = t,
            b = l.useRef(null),
            x = l.useRef(null),
            C = (0, g.Qn)();
          l.useLayoutEffect(() => {
            !b.current ||
              !x.current ||
              (b.current.scrollLeft +=
                x.current.getBoundingClientRect().left -
                b.current.getBoundingClientRect().left);
          }, [h]);
          const m = l.Children.map(v, (S, W) =>
              f
                ? (0, e.jsx)(P.K, {
                    rootMargin: "0px 50% 0px 50%",
                    horizontal: !0,
                    placeholderWidth: c ?? 1,
                    placeholderHeight: 1,
                    holdGamepadFocus: C,
                    children: (0, e.jsx)(U, {
                      nSlideIndex: W,
                      nStartingSlideIndex: h,
                      ref: x,
                      children: S,
                    }),
                  })
                : (0, e.jsx)(U, {
                    nSlideIndex: W,
                    nStartingSlideIndex: h,
                    ref: x,
                    children: S,
                  }),
            ),
            R = (0, e.jsx)(j.Z, {
              "flow-children": "row",
              style: { gap: s ? s + "px" : void 0 },
              className: (0, E.A)(
                { SaleSectionCarouselPadding: o },
                "ScrollSnapCarousel",
                "SaleSectionCarousel",
                H.ScrollSnapCarousel,
                t.className,
              ),
              ref: b,
              children: m,
            });
          return f
            ? (0, e.jsx)(P.K, {
                rootMargin: "50% 0px 50% 0px",
                horizontal: !1,
                placeholderWidth: 1,
                placeholderHeight: u ?? 1,
                children: R,
              })
            : R;
        }
        var K = r(81944),
          L = r(64238),
          T = r.n(L),
          D = r(79083);
        class w extends l.Component {
          render() {
            const { showArrows: o, arrowFill: s, arrowStyle: v } = this.props,
              f = this.props.visibleSlides,
              c = this.props.totalSlides,
              u = this.props.currentSlide;
            if (f >= c) return null;
            const h = (100 * u) / c,
              b = 100 * (1 - Math.min(u + f, c) / c),
              x = (50 * f) / c,
              C = h + x,
              m = 100 - C;
            return (0, e.jsxs)("div", {
              className: n.pipScrollerContainer,
              children: [
                o &&
                  (0, e.jsx)(i._X, {
                    className: (0, E.A)(
                      n.pipScrollButton,
                      n.left,
                      n.carouselNavButton,
                    ),
                    children: (0, e.jsx)(D.m, {
                      arrowFill: s,
                      arrowStyle: v,
                      direction: "left",
                    }),
                  }),
                (0, e.jsxs)("div", {
                  className: n.pipScroller,
                  children: [
                    (0, e.jsx)("div", { className: n.scrollBackground }),
                    (0, e.jsx)("div", {
                      className: n.scrollForeground,
                      style: { left: h + "%", right: b + "%" },
                    }),
                    (0, e.jsx)("div", {
                      className: n.scrollNavDiv,
                      style: { left: "0%", width: C + "%" },
                      children: (0, e.jsx)(i._X, {
                        className: (0, E.A)(
                          n.carouselNavButton,
                          n.scrollNavButton,
                        ),
                        style: { color: "red" },
                        children: (0, e.jsx)("div", {}),
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: n.scrollNavDiv,
                      style: { right: "0%", width: m + "%" },
                      children: (0, e.jsx)(i.CC, {
                        className: (0, E.A)(
                          n.carouselNavButton,
                          n.scrollNavButton,
                        ),
                        children: (0, e.jsx)("div", {}),
                      }),
                    }),
                  ],
                }),
                o &&
                  (0, e.jsx)(i.CC, {
                    className: (0, E.A)(
                      n.pipScrollButton,
                      n.right,
                      n.carouselNavButton,
                    ),
                    children: (0, e.jsx)(D.m, {
                      arrowFill: s,
                      arrowStyle: v,
                      direction: "right",
                    }),
                  }),
              ],
            });
          }
        }
        const z = (0, i.Yw)(w, (t) => ({
          currentSlide: t.currentSlide,
          totalSlides: t.totalSlides,
          visibleSlides: t.visibleSlides,
        }));
        function B(t) {
          const { bForceSimpleCarousel: o, screenIsWide: s, children: v } = t,
            f = (0, g.Qn)();
          return (s || f) && !o
            ? (0, e.jsx)(O, { ...t, children: v })
            : (0, e.jsx)(k, { ...t, children: v });
        }
        function O(t) {
          const o = (0, g.Qn)(),
            [s, v] = l.useState(!1),
            { bTabHidden: f, bOffscreen: c, refIntersection: u } = (0, A.h5)(),
            h = () => l.Children.count(t.children),
            b = () => Math.min(h(), t.visibleElements),
            x = () =>
              l.Children.map(t.children, (V, Z) => {
                const $ = t.bLazyRenderChildren
                  ? (0, e.jsx)(P.K, {
                      rootMargin: "0px 100% 0px 100%",
                      horizontal: !0,
                      placeholderWidth: t.lazyRenderPlaceholderWidth ?? 1,
                      placeholderHeight: t.lazyRenderPlaceholderHeight ?? 1,
                      holdGamepadFocus: o,
                      children: V,
                    })
                  : V;
                return (0, e.jsx)(
                  i.q7,
                  {
                    className: n.innerSlide,
                    index: Z,
                    role: "listitem",
                    "aria-label": void 0,
                    children: $,
                  },
                  "slide_" + Z,
                );
              }),
            C = h(),
            m = b();
          if (!C || !m) return null;
          const R = m < C,
            S = t.hideArrows || !R,
            W = !R || t.hidePips,
            G = !!t.bAutoAdvance && R && !o;
          let Y;
          s && !(0, M.$W)() ? (Y = A.af) : f ? (Y = A.OE) : c && (Y = A.iD);
          let X = 4 / 3,
            Q = !0;
          t.slideAspectRatio && ((X = t.slideAspectRatio), (Q = !1));
          const J = `items_in_row_${t.visibleElements}`;
          return (0, e.jsx)(j.Z, {
            "flow-children": "row",
            className: (0, E.A)(n.carouselBody, t.className, J),
            navKey: t.navKey,
            ref: u,
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            children: (0, e.jsxs)(i.gi, {
              visibleSlides: t.visibleElements,
              totalSlides: h(),
              naturalSlideWidth: 100 * X,
              naturalSlideHeight: 100,
              step: t.visibleElements,
              infinite: !t.disableEdgeWrap,
              isIntrinsicHeight: Q,
              dragEnabled: !1,
              touchEnabled: !1,
              lockOnWindowScroll: !0,
              orientation: "horizontal",
              disableKeyboard: !0,
              currentSlide: t.startingSlide,
              children: [
                (0, e.jsx)(_, {
                  bHideArrows: S,
                  onSlide: t.onSlide,
                  arrowFill: t.arrowFill,
                  arrowStyle: t.arrowStyle,
                  children: x(),
                }),
                !W &&
                  (t.useTestScrollbar
                    ? (0, e.jsx)(z, { showArrows: S, carouselStore: null })
                    : (0, e.jsx)("div", {
                        className: T()({
                          [n.breadcrumbContainer]: !0,
                          [n.breadcrumbContainerTemplate]:
                            t.className?.includes("template-carousel"),
                        }),
                        children: (0, e.jsx)(F, {
                          ...t,
                          nPageSize: m,
                          children: t.children,
                        }),
                      })),
                G && (0, e.jsx)(y, { pauseReason: Y }),
              ],
            }),
          });
        }
        function F(t) {
          const { nPageSize: o } = t,
            s = l.useContext(i.Yc),
            [v, f] = l.useState(s.state.currentSlide);
          return (
            l.useEffect(
              () =>
                s.subscribe(() => {
                  f(s.state.currentSlide);
                }),
              [s],
            ),
            (0, e.jsx)(e.Fragment, {
              children: l.Children.map(t.children, (c, u) => {
                if (u % o !== 0) return null;
                const h = v >= u && v < u + o;
                return (0, e.jsx)(
                  i.cL,
                  {
                    slide: u,
                    className: n.pip,
                    children: (0, e.jsx)(D.U, { ...t, bIsActive: h }),
                  },
                  u,
                );
              }),
            })
          );
        }
        function N(t) {
          t.current && (window.clearTimeout(t.current), (t.current = null));
        }
        function y(t) {
          const { pauseReason: o } = t,
            s = l.useContext(i.Yc),
            [v, f] = l.useState(s.state.currentSlide),
            [c, u] = l.useState(!0),
            h = l.useRef(null),
            b = l.useRef(s.state.currentSlide);
          l.useEffect(() => {
            const C = () => {
              const m = s.state.currentSlide;
              m !== b.current &&
                ((b.current = m),
                f(m),
                h.current === m
                  ? (h.current = null)
                  : h.current === null && u(!1));
            };
            return s.subscribe(C), () => s.unsubscribe(C);
          }, [s]);
          const x = l.useCallback(() => {
            const {
              currentSlide: C,
              visibleSlides: m,
              totalSlides: R,
            } = s.state;
            let S = 0;
            C + m < R && (S = Math.min(C + m, R - m)),
              S !== C &&
                ((h.current = S), s.setStoreState({ currentSlide: S }));
          }, [s]);
          return (0, e.jsx)(A.WA, {
            className: n.autoAdvanceRow,
            enabled: c,
            currentItemKey: v,
            autoAdvanceMsec: A.T6,
            fnAdvance: x,
            pauseReason: o,
            countdownToken: "#Carousel_AutoAdvanceNextInSeconds",
          });
        }
        function _(t) {
          const {
              bHideArrows: o,
              children: s,
              onSlide: v,
              arrowFill: f,
              arrowStyle: c,
            } = t,
            u = l.useContext(i.Yc),
            h = l.useRef(u.state.currentSlide),
            [b, x] = l.useState(null),
            C = l.useRef(null);
          l.useEffect(() => {
            const R = () => {
              const S = h.current,
                W = u.state.currentSlide;
              v && v(W), x(W > S ? "Right" : W < S ? "Left" : null), N(C);
              const G = 1e3;
              (C.current = window.setTimeout(() => {
                C.current && (x(null), N(C));
              }, G)),
                (h.current = W);
            };
            return (
              u.subscribe(R),
              () => {
                u.unsubscribe(R), N(C);
              }
            );
          }, [u]);
          const m = !!b && "CarouselSliding" + b;
          return (0, e.jsxs)("div", {
            className: (0, E.A)(n.sliderBody, "SliderBody", m),
            children: [
              !o &&
                (0, e.jsx)(i._X, {
                  className: (0, E.A)(
                    n.carouselBtnCtn,
                    n.left,
                    n.carouselNavButton,
                    "CarouselBtnLeft",
                  ),
                  "aria-label": (0, d.we)("#Carousel_Prev"),
                  children: (0, e.jsx)(D.m, {
                    arrowFill: f,
                    arrowStyle: c,
                    direction: "left",
                  }),
                }),
              (0, e.jsx)(i.Ap, {
                className: K.J.GetScrollableClassname(),
                classNameTray: n.slideTrayCustomize,
                classNameAnimation: n.DisableSliderMotion,
                role: "list",
                children: (0, e.jsx)(a.q, { children: s }),
              }),
              !o &&
                (0, e.jsx)(i.CC, {
                  className: (0, E.A)(
                    n.carouselBtnCtn,
                    n.right,
                    n.carouselNavButton,
                    "CarouselBtnRight",
                  ),
                  "aria-label": (0, d.we)("#Carousel_Next"),
                  children: (0, e.jsx)(D.m, {
                    arrowFill: f,
                    arrowStyle: c,
                    direction: "right",
                  }),
                }),
            ],
          });
        }
      },
      69696: (I) => {
        I.exports = {
          AutoAdvanceContent: "_1ot7iONiZzKf4TAHgPi3qY",
          Paused: "XXYx3DB0gLYbEuuCX_8Q7",
          Disabled: "_13IEBrvx5g_lHE4QFLKYgW",
          AutoAdvanceLabel: "_2jjPGobp_uYqLu7LCVWXx8",
          AutoAdvanceBar: "_3ew7tsjPX6rYyFcWm_Ohz8",
          AutoAdvanceCheckbox: "_1YFnAY801Coag4pbippyH6",
          AutoAdvanceCheckboxCtn: "Fy_-Cbz1CV38fntOKZ5Qo",
        };
      },
      47444: (I) => {
        I.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          carouselNavButton: "_13rGo4vexAbY9-CP7FsLOg",
          carouselBtnCtn: "_3zfZ9tkIrSDZdSTv8mvZ3-",
          left: "S8IHdovT5T2iEVg_97xve",
          right: "Cq59o5WQ49zTvvFY56QYS",
          carouselBody: "_3a31O8XB_8lD-yov8FB9-9",
          sliderBody: "_2M3SnYGvMvplWUC8yGhowo",
          slideTrayCustomize: "_2VUpHDtxN8lR1LDahY_cI2",
          breadcrumbContainer: "_3HjnEmKg66o82ah74EIvmq",
          autoAdvanceRow: "_3M0zxbf96I8oQlbNsHboy4",
          breadcrumbContainerTemplate: "_3dMffY_iRZXHjZmXN9aLej",
          pip: "_3Byg6Wc4TX36gkUptUIk72",
          pipList: "LY1m24ODS7AFRuzclt0Sl",
          pipScrollerContainer: "_3SyN-YtXsML6ado0q-Gdve",
          pipScrollButton: "qE43Jfzl0qJX_a6XrMgSr",
          scrollNavDiv: "_95I5gwXXMBghRg-4uNQLr",
          scrollNavButton: "_1cpdoEGU0uiIWbGIU_qMbZ",
          pipScroller: "EMd4F6A8qdMk-l6os415A",
          scrollBackground: "WUHeTNYGQDQQg_jQe-78W",
          scrollForeground: "PQzkJfi8IxzjcFEDG-yv-",
          pipContainer: "_3TKX37FakYHikXh3Wtg2BU",
          pipNumber: "_1u4YJiW1cdufpC_wssM8Us",
          innerSlide: "_3Cc2bMRML2lEkSyi2IAZ9G",
          DisableSliderMotion: "_3J8-bW87K3pb8EpRNYq0JG",
        };
      },
      11279: (I) => {
        I.exports = { ScrollSnapCarousel: "_1nUtBXgWizhgU1jv-8wVC7" };
      },
    },
  ]);
})();

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [27701],
    {
      79014: (A, P, e) => {
        "use strict";
        e.d(P, { A: () => D, i: () => O });
        var t = e(90626);
        function O(c, ...h) {
          const d = [],
            E = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
          let f = 0,
            r;
          for (; (r = E.exec(c)); ) {
            (f += r[0].length), d.push(r[1]);
            const s = parseInt(r[2]),
              a = r[3] || "",
              i = O(a, ...h),
              n = (s >= 1 && s <= h.length ? h[s - 1] : null)
                ? t.cloneElement(h[s - 1], {}, a ? i : null)
                : a;
            d.push(n);
          }
          return d.push(c.substr(f)), t.createElement(t.Fragment, null, ...d);
        }
        function D(c, h = ["b", "i", "br"]) {
          const d = h.join("|"),
            E = [],
            f = new RegExp(
              `(?<before>.*?)<(?<tagname>${d})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
              "gs",
            );
          let r = 0,
            s;
          for (; (s = f.exec(c)); ) {
            if (!s.groups) continue;
            if (!s.groups?.endtag) {
              const o = s.groups.before.length + s.groups.tagname.length + 2;
              (r += o), (f.lastIndex = s.index + o), E.push(s.groups.before);
              const l = s[2],
                v = t.createElement(l);
              E.push(v);
              continue;
            }
            (r += s[0].length), E.push(s.groups.before);
            const a = s.groups.tagname,
              i = s.groups.contents || "";
            let _ = null;
            i && (_ = D(i, h));
            const n = t.createElement(a, {}, _);
            E.push(n);
          }
          return E.push(c.slice(r)), t.createElement(t.Fragment, null, ...E);
        }
      },
      95414: (A, P, e) => {
        "use strict";
        e.d(P, { j: () => i, u: () => _ });
        var t = e(7850),
          O = e(90626),
          D = e(24660),
          c = e(83482),
          h = e(72865),
          d = e(77200),
          E = e(53113),
          f = e(68094),
          r = e(72609),
          s = e(3166);
        function a(n) {
          if (n) {
            if ("appid" in n) return "app";
            if ("bundleid" in n) return "bundle";
            if ("packageid" in n) return "sub";
          }
        }
        function i(n) {
          const {
              id: o,
              hoverClassName: l,
              fnGetIDOverride: v,
              fnHoverState: I,
              disableScreenshots: M,
              children: W,
            } = n,
            g = O.useRef(null),
            z = O.useCallback(
              (b) => {
                const j = a(o);
                j &&
                  (I && I(!0),
                  window.GameHover &&
                    (g.current &&
                      M &&
                      (g.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(v ? v() : g.current, b, "global_hover", {
                      type: j,
                      id: (0, f.G$)(o).id,
                      v6: 1,
                    })));
              },
              [I, v, M, o],
            ),
            K = O.useCallback(
              (b) => {
                a(o) &&
                  (I && b.relatedTarget && I(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      v ? v() : g.current,
                      b,
                      "global_hover",
                    ));
              },
              [o, I, v],
            );
          return (0, t.jsx)("div", {
            ref: g,
            className: l,
            onMouseEnter: z,
            onMouseLeave: K,
            onFocus: z,
            onBlur: K,
            children: W,
          });
        }
        function _(n) {
          const {
              id: o,
              strExtraParams: l,
              fnOnClickOverride: v,
              strOverrideURL: I,
            } = n,
            M = (0, h.n9)(),
            W = (0, d.w)(),
            g = (0, E.NT)(
              I ||
                (o && "creatorid" in o
                  ? (0, c.It)(
                      `${r.TS.STORE_BASE_URL}curator/${((0, f.G$))(o).id}${l ? `?${l}` : ""}`,
                      M,
                      W,
                    )
                  : (0, c.It)(
                      `${r.TS.STORE_BASE_URL}${a(o)}/${((0, f.G$))(o).id}${l ? `?${l}` : ""}`,
                      M,
                      W,
                    )),
            );
          return (0, t.jsx)(i, {
            ...n,
            children: (0, t.jsx)(D.Ii, {
              className: n.className,
              href: v ? void 0 : g,
              target: r.TS.IN_CLIENT || v ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: v,
              children: n.children,
            }),
          });
        }
      },
      81944: (A, P, e) => {
        "use strict";
        e.d(P, { J: () => E });
        var t = e(7850),
          O = e(19298),
          D = e(90626),
          c = e(79089),
          h = e(18938),
          d = e(2259);
        class E extends D.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = D.createRef();
          m_elTracked = null;
          m_bPreviouslyIntersecting = !1;
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
          }
          GetBoundingClientRect() {
            return this.m_refElement.current
              ? this.m_refElement.current.getBoundingClientRect()
              : null;
          }
          DestroyObserver() {
            this.m_observer &&
              (this.m_observer.disconnect(),
              (this.m_observer = null),
              (this.m_elTracked = null));
          }
          componentWillUnmount() {
            this.DestroyObserver();
          }
          componentDidMount() {
            this.UpdateObserver(null);
          }
          componentDidUpdate(r) {
            this.UpdateObserver(r);
          }
          UpdateObserver(r) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              r &&
              (r.rootMargin != this.m_observer.rootMargin ||
                r.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let s = this.m_refElement.current;
            if (
              (this.m_observer &&
                s != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && s)
            ) {
              let i = { root: this.FindScrollableAncestor(s) };
              this.props.rootMargin && (i.rootMargin = this.props.rootMargin),
                this.props.thresholds && (i.threshold = this.props.thresholds),
                (this.m_observer = (0, d.md)(s, this.OnIntersection, i));
            }
            this.m_observer &&
              s &&
              s != this.m_elTracked &&
              (this.m_observer.observe(s), (this.m_elTracked = s));
          }
          FindScrollableAncestor(r) {
            return (0, c.Kf)(r, (s) => {
              const a = this.props.horizontal
                ? window.getComputedStyle(s).overflowX
                : window.getComputedStyle(s).overflowY;
              return !!(
                a == "scroll" ||
                a == "auto" ||
                s.classList.contains(E.GetScrollableClassname())
              );
            });
          }
          HandleRef = (r) => {
            (0, h.cZ)(this.m_refElement, r),
              this.props.containerRef && (0, h.cZ)(this.props.containerRef, r);
          };
          OnIntersection = (r) => {
            let s = !1;
            for (const a of r)
              if (a.isIntersecting) {
                s = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != s &&
              ((this.m_bPreviouslyIntersecting = s),
              this.props.onVisibilityChange && this.props.onVisibilityChange(s),
              s && this.BTriggerOnce() && this.DestroyObserver());
          };
          render() {
            let {
              onVisibilityChange: r,
              rootMargin: s,
              trigger: a,
              horizontal: i,
              containerRef: _,
              ...n
            } = this.props;
            return (0, t.jsx)(O.Z, {
              ref: this.HandleRef,
              ...n,
              children: this.props.children,
            });
          }
        }
      },
      97525: (A, P, e) => {
        "use strict";
        e.d(P, { i: () => f, o: () => r });
        var t = e(7850),
          O = e(64238),
          D = e.n(O),
          c = e(90626),
          h = e(3166),
          d = e(2213),
          E = e.n(d);
        function f(s) {
          const [a, i] = c.useState(!1),
            _ = c.useCallback((o) => i(o && !!s), [s]),
            n = c.useCallback(() => {
              !s || s.length === 0 || (window.location.href = s);
            }, [s]);
          return {
            bShowSeeMoreHint: a,
            panelProps: { onFocusWithin: _, onOptionsButton: n },
          };
        }
        function r(s) {
          const { label: a, shown: i } = s;
          return (0, t.jsxs)("div", {
            className: D()(d.SeeMoreButtonGamepad, i && d.Focused),
            children: [
              (0, t.jsx)("img", {
                src: `${h.TS.IMG_URL}ico_gamepad/shared_button_y.svg`,
                alt: "Y",
              }),
              (0, t.jsx)("div", { children: a }),
            ],
          });
        }
      },
      87249: (A, P, e) => {
        "use strict";
        e.d(P, { C0: () => a, Ck: () => _, mj: () => i });
        var t = e(7850),
          O = e(48156),
          D = e(72609),
          c = e(40358),
          h = e(64238),
          d = e.n(h),
          E = e(90626),
          f = e(25046),
          r = e(73187),
          s = e.n(r),
          a = ((n) => (
            (n[(n.k_ETrailerGrowAmount_None = 0)] =
              "k_ETrailerGrowAmount_None"),
            (n[(n.k_ETrailerGrowAmount_Implicit = 1)] =
              "k_ETrailerGrowAmount_Implicit"),
            (n[(n.k_ETrailerGrowAmount_Medium = 2)] =
              "k_ETrailerGrowAmount_Medium"),
            n
          ))(a || {});
        function i(n) {
          const { id: o, active: l, bIsHoverMode: v, eGrowOnActivate: I } = n,
            { data: M } = (0, c.J$)(o),
            W = E.useRef(0),
            g = E.useRef(null);
          E.useLayoutEffect(() => {
            l && g.current && (g.current.currentTime = W.current);
          }, [l]);
          const z = (Q) => {
              W.current = Q.currentTarget.currentTime;
            },
            K = (0, f.kB)(l ? o : void 0);
          if ((v && D.TS.IN_MOBILE) || !l || !M || !M.visible || !K)
            return null;
          const b = K.filter(
            (Q) => Q.microtrailer && Q.microtrailer.length > 0,
          );
          if (b.length === 0)
            return M &&
              M.related_items?.parent_appid &&
              (M.type == O.uE.ue || M.type == O.uE.Vi)
              ? (0, t.jsx)(i, {
                  ...n,
                  id: { appid: M.related_items.parent_appid },
                })
              : null;
          let j;
          switch (I) {
            case 1:
              j = s().GrowOnHoverImplicit;
              break;
            case 2:
              j = s().GrowOnHoverMedium;
              break;
          }
          const te = b[0];
          return (0, t.jsx)("video", {
            className: d()(s().CapsuleMicroTrailer, j),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: g,
            playsInline: !0,
            onTimeUpdate: z,
            children: (0, t.jsx)(_, { trailer: te }),
          });
        }
        function _(n) {
          const { trailer: o } = n;
          return !o || !o.microtrailer
            ? null
            : (0, t.jsx)(t.Fragment, {
                children: o.microtrailer?.map((l) =>
                  D.TS.IN_CLIENT && l.type == "video/mp4"
                    ? null
                    : (0, t.jsx)(
                        "source",
                        { src: (0, f.M4)(o, l.filename || ""), type: l.type },
                        l.filename,
                      ),
                ),
              });
        }
      },
      22959: (A, P, e) => {
        "use strict";
        e.r(P), e.d(P, { default: () => me });
        var t = e(7850),
          O = e(52438),
          D = e(24660),
          c = e(19298),
          h = e(20169),
          d = e(84346),
          E = e(79014),
          f = e(72609),
          r = e(95414),
          s = e(40358),
          a = e(72865),
          i = e(32994),
          _ = e(90626),
          n = e(18994),
          o = e(83482),
          l = e(87523),
          v = e(19681),
          I = e(68538),
          M = e(90405),
          W = e(77200),
          g = e(36707),
          z = e(30096),
          K = e(3166),
          b = e(98609),
          j = e(21721),
          te = e(97525),
          Q = e(87249),
          oe = e(95995),
          u = e(66139),
          Ee = e.n(u),
          w = e(45931);
        const le = {
          name: "personalcalendarPrefs",
          options: {
            path: "/personalcalendar",
            secure: !0,
            maxAge: 365 * 24 * 60 * 60 * 1e3,
          },
          preferenceControls: { isTechnicallyNecessary: !0 },
        };
        var ie = ((m) => (
          (m[(m.Show = 0)] = "Show"),
          (m[(m.Only = 1)] = "Only"),
          (m[(m.Hide = 2)] = "Hide"),
          m
        ))(ie || {});
        function _e(m) {
          const {
              bShowNewBadge: T,
              bHasFooterActionLegend: S,
              onSeeMore: R,
            } = m,
            B = (0, O.j_)(le),
            y = B ? JSON.parse(B) : void 0,
            J = (0, n.a4)(940),
            V = (0, a.n9)(),
            U = (0, W.w)(),
            N = (0, K.Qn)(),
            L = new Date().getDay(),
            G = 10,
            x = 13 + L,
            $ = 22 - L,
            X = (0, l.GZ)(0, x, $),
            k = (0, l.Gd)(x, $, !0, !0).flat(),
            H = (0, o.It)(`${f.TS.STORE_BASE_URL}personalcalendar`, V, U),
            { bShowSeeMoreHint: ne, panelProps: q } = (0, te.i)(H),
            ee = w.d.Localize("#PersonalCalendar_Explore"),
            re = _.useCallback(() => R?.(H), [R, H]);
          if (!X.data)
            return (0, t.jsx)(c.Z, { className: u.PersonalCalendarWidget });
          let F = X.data.arrAppInfos;
          return (
            y &&
              ((F = F.filter((p) => !y.bHideOwned || !p.bIsOwned)),
              (F = F.filter((p) => !y.bHideEarlyAccess || !p.bIsEarlyAccess)),
              (F = F.filter((p) => {
                switch (y.eWishlistDisplay) {
                  case 0:
                    return !0;
                  case 1:
                    return p.bIsWishlisted;
                  case 2:
                    return !p.bIsWishlisted;
                  default:
                    return !0;
                }
              }))),
            (0, t.jsxs)(c.Z, {
              className: u.PersonalCalendarWidget,
              navEntryPreferPosition: h.iU.PREFERRED_CHILD,
              ...q,
              onOptionsButton: R ? re : q.onOptionsButton,
              onOptionsActionDescription: ee,
              children: [
                (0, t.jsxs)("div", {
                  className: u.TitleSection,
                  children: [
                    (0, t.jsxs)("div", {
                      className: u.TitleSectionLeft,
                      children: [
                        (0, t.jsxs)("div", {
                          className: u.Title,
                          children: [
                            T &&
                              (0, t.jsx)("span", {
                                className: u.NewBadge,
                                children: w.d.Localize("#NewBadge"),
                              }),
                            w.d.Localize("#PersonalCalendar_Title"),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: u.Subtitle,
                          children: w.d.Localize("#PersonalCalendar_Subtitle"),
                        }),
                      ],
                    }),
                    !N &&
                      (0, t.jsx)(ae, { calendarURL: H, location: "desktop" }),
                    N && !S && (0, t.jsx)(te.o, { label: ee, shown: ne }),
                  ],
                }),
                (0, t.jsx)(I.F, {
                  visibleElements: 5,
                  hideArrows: !1,
                  disableEdgeWrap: !0,
                  hidePips: N,
                  screenIsWide: J,
                  startingSlide: G,
                  className: N ? void 0 : "fiveElementEightGap",
                  children: k.map((p, Z) =>
                    (0, t.jsx)(
                      ce,
                      {
                        bInitialFocus: Z === G,
                        nTimestamp: p,
                        nNextTimestamp:
                          Z < k.length - 1 ? k[Z + 1] : p + 1440 * 60,
                        arrAppInfos: F,
                        nRankThreshold: y?.nResultsToShow ?? 100,
                      },
                      p,
                    ),
                  ),
                }),
                !N && (0, t.jsx)(ae, { calendarURL: H, location: "mobile" }),
              ],
            })
          );
        }
        function ae(m) {
          const { calendarURL: T, location: S } = m,
            R = S == "mobile" ? "see_more_mobile" : "see_more_desktop";
          return (0, t.jsx)("div", {
            className: `see_more_link ${R} home_section_button`,
            children: (0, t.jsx)("a", {
              href: T,
              className: "btn_small btn_medium btnv6_white_transparent",
              children: (0, t.jsx)("span", {
                children: w.d.Localize("#PersonalCalendar_Explore"),
              }),
            }),
          });
        }
        function ce(m) {
          const {
              nTimestamp: T,
              nNextTimestamp: S,
              bInitialFocus: R,
              arrAppInfos: B,
              nRankThreshold: y,
            } = m,
            J = (0, a.n9)(),
            V = (0, W.w)(),
            U = (0, o.It)(`${f.TS.STORE_BASE_URL}personalcalendar`, J, V),
            N = { weekday: "short" },
            se = { day: "numeric", month: "numeric" },
            L = new Date(T * 1e3),
            G = new Date(),
            x =
              L.getDate() === G.getDate() &&
              L.getMonth() === G.getMonth() &&
              L.getFullYear() === G.getFullYear(),
            $ = L > G,
            X = L.toLocaleDateString((0, d.J)(), N),
            k = L.toLocaleString((0, d.J)(), se),
            H = B.filter((C) => C.nReleaseDate > T && C.nReleaseDate < S).sort(
              (C, Y) =>
                C.bIsWishlisted && !Y.bIsWishlisted
                  ? -1
                  : Y.bIsWishlisted && !C.bIsWishlisted
                    ? 1
                    : C.nRank - Y.nRank,
            ),
            ne = y ?? 100,
            q = H.filter((C) => C.nRank <= ne).length - 2,
            ee = H.length == 0,
            [re, F] = _.useState(!1),
            p = (0, K.Qn)(),
            Z = _.useRef(null);
          return (
            _.useEffect(() => {
              if (R && p && Z.current) {
                const C = Z.current.closest(".carousel__slide"),
                  Y = Z.current.closest(".carousel__slider-tray-wrapper");
                Y && C && (Y.scrollLeft = C.offsetLeft);
              }
            }, [R, p]),
            (0, t.jsxs)(c.Z, {
              className: (0, g.A)(
                u.PersonalCalendarWidgetDay,
                x && u.TodayCtn,
                $ && u.FutureCtn,
                ee && u.EmptyDayCtn,
              ),
              "flow-children": "column",
              children: [
                (0, t.jsxs)("div", {
                  className: u.DayTitle,
                  children: [
                    !x &&
                      (0, t.jsx)("div", {
                        className: u.DayOfWeek,
                        children: X,
                      }),
                    !x && (0, t.jsx)("div", { className: u.Date, children: k }),
                    x &&
                      (0, t.jsx)("div", {
                        className: u.Today,
                        children: w.d.Localize("#Time_Today"),
                      }),
                  ],
                }),
                (0, t.jsx)(c.Z, {
                  className: u.DayAppContainer,
                  "flow-children": "column",
                  navEntryPreferPosition: h.iU.MAINTAIN_Y,
                  preferredFocus: R && !re,
                  ref: Z,
                  onFocusWithin: () => F(!0),
                  children: (0, t.jsxs)(t.Fragment, {
                    children: [
                      H.slice(0, 2).map((C) =>
                        (0, t.jsx)(de, { nAppID: C.nAppID }, C.nAppID),
                      ),
                      ee &&
                        (0, t.jsx)("div", {
                          className: u.EmptyDay,
                          children: (0, E.i)(
                            w.d.Localize("#PersonalCalendar_EmptyDay"),
                            (0, t.jsx)("a", { href: U }),
                          ),
                        }),
                    ],
                  }),
                }),
                !p &&
                  q > 0 &&
                  (0, t.jsx)(D.Ii, {
                    href: U,
                    className: u.MoreGames,
                    children: w.d.Localize("#PersonalCalendar_More", q),
                  }),
              ],
            })
          );
        }
        function de(m) {
          const T = (0, s.lv)({ appid: m.nAppID }),
            S = (0, n.a4)(940),
            R = (0, K.Qn)(),
            [B, y] = _.useState(!1),
            [J, V] = _.useState(!1),
            U = _.useRef(null),
            N = T.data === null ? void 0 : T.data,
            se = S || R,
            L = (0, v.l)(N, se ? "main_capsule" : "hero_capsule"),
            { data: G } = (0, i.lI)(),
            x = G?.preferences?.disable_microtrailers,
            $ = B || J;
          return (
            _.useEffect(() => {
              if (
                (U.current &&
                  U.current.setAttribute(
                    "data-ds-appid",
                    m.nAppID.toString() ?? "",
                  ),
                window.GDynamicStore && window.$J)
              ) {
                const X = window.$J(U.current);
                window.GDynamicStore.DecorateDynamicItems(X);
              }
            }, [m.nAppID, U]),
            (0, t.jsx)(a.nn, {
              feature: "personalcalendar-homepage",
              children: (0, t.jsx)(c.Z, {
                onGamepadFocus: () => V(!0),
                onGamepadBlur: () => V(!1),
                children: (0, t.jsx)(r.u, {
                  id: { appid: m.nAppID },
                  hoverClassName: u.StoreAppHover,
                  disableScreenshots: !0,
                  children: (0, t.jsx)(oe.A, {
                    appID: m.nAppID,
                    children: (0, t.jsxs)(c.Z, {
                      ref: U,
                      className: (0, g.A)(u.StoreAppCapsule, B && u.Hovered),
                      onMouseOver: () => y(!0),
                      onMouseOut: () => y(!1),
                      children: [
                        (0, t.jsx)("img", {
                          className: u.Image,
                          src: L,
                          alt: "",
                        }),
                        x &&
                          $ &&
                          (0, t.jsx)(ue, {
                            id: { appid: m.nAppID },
                            nIntervalMS: 1e3,
                          }),
                        !x &&
                          (0, t.jsx)(Q.mj, {
                            id: { appid: m.nAppID },
                            active: $,
                            bIsHoverMode: !0,
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }
        function ue(m) {
          const T = (0, j.DT)(m.id) ?? [],
            [S, R] = _.useState(0);
          return (
            (0, z.$$)(() => {
              T.length > 0 && R((S + 1) % T.length);
            }, m.nIntervalMS),
            !T?.length || S == -1
              ? null
              : (0, t.jsx)("div", {
                  className: u.ScreenshotCycler,
                  children: T.map((B, y) =>
                    (0, t.jsx)(
                      "img",
                      {
                        className: (0, g.A)(u.Screenshot, y == S && u.Active),
                        src:
                          b.TS.BASE_URL_SHARED_CDN +
                          "/store_item_assets/" +
                          B.filename,
                        alt: "",
                      },
                      B.filename,
                    ),
                  ),
                })
          );
        }
        function me(m) {
          return f.iA.logged_in
            ? (0, t.jsx)(M.K, {
                placeholderHeight: 390,
                rootMargin: "100% 0px 100% 0px",
                children: (0, t.jsx)(_e, { ...m }),
              })
            : null;
        }
      },
      87523: (A, P, e) => {
        "use strict";
        e.d(P, { Ay: () => d, GZ: () => E, Gd: () => r });
        var t = e(41735),
          O = e.n(t),
          D = e(3166),
          c = e(80902),
          h = e(40497);
        class d {
          static s_PersonalCalendarStore;
          static Get() {
            return (
              d.s_PersonalCalendarStore ||
                ((d.s_PersonalCalendarStore = new d()),
                d.s_PersonalCalendarStore.Init(),
                (window.g_SubscriptionStore = d.s_PersonalCalendarStore)),
              d.s_PersonalCalendarStore
            );
          }
          async GetCalendarRecommendations(a, i, _) {
            const n = new Date();
            n.setDate(n.getDate() + _), n.setHours(0, 0, 0, 0);
            const o = new Date();
            o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0);
            const l = await h.L.fetchQuery(f(a, i, _));
            return (
              (l.arrAppInfos = l.arrAppInfos.filter(
                (v) =>
                  v.nReleaseDate >= o.getTime() / 1e3 &&
                  v.nReleaseDate < n.getTime() / 1e3,
              )),
              l
            );
          }
          Init() {}
        }
        function E(s, a, i) {
          return (0, c.I)(f(s, a, i));
        }
        function f(s, a, i) {
          return {
            queryKey: ["personalcalendar", s, a, i],
            queryFn: async () => {
              const _ = { tag: s, days_backward: a, days_forward: i },
                n = await O().get(
                  `${D.TS.STORE_BASE_URL}personalcalendardata`,
                  { params: _, timeout: 2e4, withCredentials: !0 },
                );
              return {
                arrAppInfos: n.data.arrAppInfos,
                strResultMessage: n.data.strResultMessage,
                bUsesWishlistedGames: n.data.bUsesWishlistedGames,
              };
            },
            placeholderData: (_) => _,
          };
        }
        function r(s, a, i, _) {
          const n = new Date();
          if ((n.setDate(n.getDate() - s), i)) {
            const M = n.getDay() % 7;
            n.setDate(n.getDate() - M), n.setHours(0, 0, 0, 0);
          } else n.setHours(0, 0, 0, 0);
          const o = [],
            l = new Date(n),
            v = Math.ceil((s + a) / 7);
          for (let I = 0; I < v; I++) {
            o.push([]);
            for (let M = 0; M < 7; M++)
              (!_ || (l.getDay() != 0 && l.getDay() != 6)) &&
                o[I].push(Math.floor(l.getTime() / 1e3)),
                l.setDate(l.getDate() + 1),
                l.setHours(0, 0, 0, 0);
          }
          return o;
        }
      },
      19681: (A, P, e) => {
        "use strict";
        e.d(P, { l: () => O });
        var t = e(98609);
        function O(D, c) {
          if (!(!D?.asset_url_format || typeof D[c] != "string"))
            return (
              t.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              D.asset_url_format.replace("${FILENAME}", D[c])
            );
        }
      },
      2213: (A) => {
        A.exports = {
          SeeMoreButtonGamepad: "_3LB60XV--dXt2yYQ6dF5aT",
          Focused: "_3NISN-t8MP65UYQ4p5bNgh",
        };
      },
      73187: (A) => {
        A.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
        };
      },
      66139: (A) => {
        A.exports = {
          "duration-app-launch": "800ms",
          PersonalCalendarWidget: "_326_uhqq2I-hJwNRSqIZK4",
          TitleSection: "_2su8lGbBoTlZdVmMWOxDR3",
          TitleSectionLeft: "_10kzxYP01BOeSD8R135uWX",
          Title: "_3RqS6vEZhqX3_4AIeJFajW",
          Subtitle: "_1qbTrTsvR9qbMi-Navsk-D",
          PersonalCalendarWidgetDay: "tqaXEuWN2wV5_8lmSkMng",
          TodayCtn: "_8UPO4fZBxxerbhcRBpAcc",
          FutureCtn: "_1beaDtCHZ3Kn9oAHWEKXMe",
          DayTitle: "VSMflzbqITft0dYgbLNq1",
          DayOfWeek: "_3cnfRW-1ajM2MW96f4sTXj",
          Date: "_1pMe55FBPBDyaWssCZrawa",
          Today: "_1iXgQQI5ZT9D1DgDCwVW_T",
          DayAppContainer: "_2nBfmktG8nbBOFnhjq6OS5",
          EmptyDay: "_1Vtz51wGyJHD9wpoDFNZ8M",
          MoreGames: "_1wt5Ne6MrJfPVdFz5fGlop",
          StoreAppHover: "_3JFqZ4-_gZl_CQKdNJFdg2",
          StoreAppCapsule: "_2A83UfRXWSLbHFYfDcch9W",
          Hovered: "_2z7ihwH3mo730-p6kXROXX",
          Image: "_3GS5DCQb2y5KKnOB8rHEw5",
          "microtrailer-fade-in": "_3qUTo-Eq8k8fA3-Ajqh5Dy",
          NewBadge: "lX3GvxrkYaEqKJRpIhPsk",
          ScreenshotCycler: "_1lFAPltm4lZIZGtvNVBvpt",
          Screenshot: "_1MSXc0v0S-mTDz8I9uJTni",
          Active: "_3t54Nkge_M_VTM00eQZGbG",
          BackgroundAnimation: "_9w_RZLHWSbY7mGKg8_lq8",
          "ItemFocusAnim-darkerGrey-nocolor": "_2owaON2RMAVAh5SWIZqpcF",
          "ItemFocusAnim-darkerGrey": "T5TTVqu-H2f6LXV_oELfk",
          "ItemFocusAnim-darkGreySettings": "XUwN0D5PCg_KK-TOCFDta",
          "ItemFocusAnim-darkGrey": "R4ALVL6ak2yBIrTQvO8Jg",
          "ItemFocusAnim-grey": "_1oT3pq6sDfx8_WSmWBIG1Z",
          "ItemFocusAnim-translucent-white-10": "_3m1GEnADKZGqAnPgomD5QN",
          "ItemFocusAnim-translucent-white-20": "_2RrDQGgK3xNY28XMkYa68H",
          "ItemFocusAnimBorder-darkGrey": "_38snEWmylibePk914iSE2Y",
          "ItemFocusAnim-green": "_3v-91BC6mitEKHIgk6Qz2p",
          focusAnimation: "_3SxantsMz8K4PnaeHHYVgr",
          hoverAnimation: "Nlqr9db677xuQ--5YelhJ",
        };
      },
    },
  ]);
})();

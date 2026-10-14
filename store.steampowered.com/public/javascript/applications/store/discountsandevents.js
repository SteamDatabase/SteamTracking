/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [44419],
    {
      95414: (R, S, e) => {
        "use strict";
        e.d(S, { j: () => g, u: () => j });
        var t = e(7850),
          P = e(90626),
          v = e(24660),
          E = e(83482),
          b = e(72865),
          T = e(77200),
          C = e(53113),
          B = e(68094),
          l = e(72609),
          n = e(3166);
        function h(a) {
          if (a) {
            if ("appid" in a) return "app";
            if ("bundleid" in a) return "bundle";
            if ("packageid" in a) return "sub";
          }
        }
        function g(a) {
          const {
              id: d,
              hoverClassName: c,
              fnGetIDOverride: O,
              fnHoverState: I,
              disableScreenshots: M,
              children: N,
            } = a,
            u = P.useRef(null),
            Z = P.useCallback(
              (K) => {
                const s = h(d);
                s &&
                  (I && I(!0),
                  window.GameHover &&
                    (u.current &&
                      M &&
                      (u.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(O ? O() : u.current, K, "global_hover", {
                      type: s,
                      id: (0, B.G$)(d).id,
                      v6: 1,
                    })));
              },
              [I, O, M, d],
            ),
            V = P.useCallback(
              (K) => {
                h(d) &&
                  (I && K.relatedTarget && I(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      O ? O() : u.current,
                      K,
                      "global_hover",
                    ));
              },
              [d, I, O],
            );
          return (0, t.jsx)("div", {
            ref: u,
            className: c,
            onMouseEnter: Z,
            onMouseLeave: V,
            onFocus: Z,
            onBlur: V,
            children: N,
          });
        }
        function j(a) {
          const {
              id: d,
              strExtraParams: c,
              fnOnClickOverride: O,
              strOverrideURL: I,
            } = a,
            M = (0, b.n9)(),
            N = (0, T.w)(),
            u = (0, C.NT)(
              I ||
                (d && "creatorid" in d
                  ? (0, E.It)(
                      `${l.TS.STORE_BASE_URL}curator/${((0, B.G$))(d).id}${c ? `?${c}` : ""}`,
                      M,
                      N,
                    )
                  : (0, E.It)(
                      `${l.TS.STORE_BASE_URL}${h(d)}/${((0, B.G$))(d).id}${c ? `?${c}` : ""}`,
                      M,
                      N,
                    )),
            );
          return (0, t.jsx)(g, {
            ...a,
            children: (0, t.jsx)(v.Ii, {
              className: a.className,
              href: O ? void 0 : u,
              target: l.TS.IN_CLIENT || O ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: O,
              children: a.children,
            }),
          });
        }
      },
      81944: (R, S, e) => {
        "use strict";
        e.d(S, { J: () => C });
        var t = e(7850),
          P = e(19298),
          v = e(90626),
          E = e(79089),
          b = e(18938),
          T = e(2259);
        class C extends v.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = v.createRef();
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
          componentDidUpdate(l) {
            this.UpdateObserver(l);
          }
          UpdateObserver(l) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              l &&
              (l.rootMargin != this.m_observer.rootMargin ||
                l.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let n = this.m_refElement.current;
            if (
              (this.m_observer &&
                n != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && n)
            ) {
              let g = { root: this.FindScrollableAncestor(n) };
              this.props.rootMargin && (g.rootMargin = this.props.rootMargin),
                this.props.thresholds && (g.threshold = this.props.thresholds),
                (this.m_observer = (0, T.md)(n, this.OnIntersection, g));
            }
            this.m_observer &&
              n &&
              n != this.m_elTracked &&
              (this.m_observer.observe(n), (this.m_elTracked = n));
          }
          FindScrollableAncestor(l) {
            return (0, E.Kf)(l, (n) => {
              const h = this.props.horizontal
                ? window.getComputedStyle(n).overflowX
                : window.getComputedStyle(n).overflowY;
              return !!(
                h == "scroll" ||
                h == "auto" ||
                n.classList.contains(C.GetScrollableClassname())
              );
            });
          }
          HandleRef = (l) => {
            (0, b.cZ)(this.m_refElement, l),
              this.props.containerRef && (0, b.cZ)(this.props.containerRef, l);
          };
          OnIntersection = (l) => {
            let n = !1;
            for (const h of l)
              if (h.isIntersecting) {
                n = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != n &&
              ((this.m_bPreviouslyIntersecting = n),
              this.props.onVisibilityChange && this.props.onVisibilityChange(n),
              n && this.BTriggerOnce() && this.DestroyObserver());
          };
          render() {
            let {
              onVisibilityChange: l,
              rootMargin: n,
              trigger: h,
              horizontal: g,
              containerRef: j,
              ...a
            } = this.props;
            return (0, t.jsx)(P.Z, {
              ref: this.HandleRef,
              ...a,
              children: this.props.children,
            });
          }
        }
      },
      97525: (R, S, e) => {
        "use strict";
        e.d(S, { i: () => B, o: () => l });
        var t = e(7850),
          P = e(64238),
          v = e.n(P),
          E = e(90626),
          b = e(3166),
          T = e(2213),
          C = e.n(T);
        function B(n) {
          const [h, g] = E.useState(!1),
            j = E.useCallback((d) => g(d && !!n), [n]),
            a = E.useCallback(() => {
              !n || n.length === 0 || (window.location.href = n);
            }, [n]);
          return {
            bShowSeeMoreHint: h,
            panelProps: { onFocusWithin: j, onOptionsButton: a },
          };
        }
        function l(n) {
          const { label: h, shown: g } = n;
          return (0, t.jsxs)("div", {
            className: v()(T.SeeMoreButtonGamepad, g && T.Focused),
            children: [
              (0, t.jsx)("img", {
                src: `${b.TS.IMG_URL}ico_gamepad/shared_button_y.svg`,
                alt: "Y",
              }),
              (0, t.jsx)("div", { children: h }),
            ],
          });
        }
      },
      87249: (R, S, e) => {
        "use strict";
        e.d(S, { C0: () => h, Ck: () => j, mj: () => g });
        var t = e(7850),
          P = e(48156),
          v = e(72609),
          E = e(40358),
          b = e(64238),
          T = e.n(b),
          C = e(90626),
          B = e(25046),
          l = e(73187),
          n = e.n(l),
          h = ((a) => (
            (a[(a.k_ETrailerGrowAmount_None = 0)] =
              "k_ETrailerGrowAmount_None"),
            (a[(a.k_ETrailerGrowAmount_Implicit = 1)] =
              "k_ETrailerGrowAmount_Implicit"),
            (a[(a.k_ETrailerGrowAmount_Medium = 2)] =
              "k_ETrailerGrowAmount_Medium"),
            a
          ))(h || {});
        function g(a) {
          const { id: d, active: c, bIsHoverMode: O, eGrowOnActivate: I } = a,
            { data: M } = (0, E.J$)(d),
            N = C.useRef(0),
            u = C.useRef(null);
          C.useLayoutEffect(() => {
            c && u.current && (u.current.currentTime = N.current);
          }, [c]);
          const Z = (X) => {
              N.current = X.currentTarget.currentTime;
            },
            V = (0, B.kB)(c ? d : void 0);
          if ((O && v.TS.IN_MOBILE) || !c || !M || !M.visible || !V)
            return null;
          const K = V.filter(
            (X) => X.microtrailer && X.microtrailer.length > 0,
          );
          if (K.length === 0)
            return M &&
              M.related_items?.parent_appid &&
              (M.type == P.uE.ue || M.type == P.uE.Vi)
              ? (0, t.jsx)(g, {
                  ...a,
                  id: { appid: M.related_items.parent_appid },
                })
              : null;
          let s;
          switch (I) {
            case 1:
              s = n().GrowOnHoverImplicit;
              break;
            case 2:
              s = n().GrowOnHoverMedium;
              break;
          }
          const w = K[0];
          return (0, t.jsx)("video", {
            className: T()(n().CapsuleMicroTrailer, s),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: u,
            playsInline: !0,
            onTimeUpdate: Z,
            children: (0, t.jsx)(j, { trailer: w }),
          });
        }
        function j(a) {
          const { trailer: d } = a;
          return !d || !d.microtrailer
            ? null
            : (0, t.jsx)(t.Fragment, {
                children: d.microtrailer?.map((c) =>
                  v.TS.IN_CLIENT && c.type == "video/mp4"
                    ? null
                    : (0, t.jsx)(
                        "source",
                        { src: (0, B.M4)(d, c.filename || ""), type: c.type },
                        c.filename,
                      ),
                ),
              });
        }
      },
      19908: (R, S, e) => {
        "use strict";
        e.r(S),
          e.d(S, { BuildDiscountsAndEventsPages: () => re, default: () => xe });
        var t = e(7850),
          P = e(24660),
          v = e(19298),
          E = e(20169),
          b = e(95414),
          T = e(40358),
          C = e(72865),
          B = e(72609),
          l = e(32994),
          n = e(90626),
          h = e(18994),
          g = e(6469),
          j = e(19681),
          a = e(68538),
          d = e(90405),
          c = e(36707),
          O = e(3166),
          I = e(97525),
          M = e(87249),
          N = e(43135),
          u = e(45931),
          Z = e(95995),
          V = e(27894),
          K = e(95242),
          s = e(38939),
          w = e(80902);
        const X = 2e4,
          _e = 300 * 1e3;
        function fe(o, r, _, D = {}) {
          return (0, w.I)(Ee(o, r, _, D));
        }
        function Ee(o, r, _, D = {}) {
          let i = `${B.TS.STORE_BASE_URL}default/discounts_and_events_data/`;
          return (
            _ && (i += `?t=${encodeURIComponent(_)}`),
            {
              queryKey: ["discountsandevents", _ ?? null],
              initialData: o,
              initialDataUpdatedAt: r,
              queryFn: async () => {
                const f = await fetch(i, {
                  credentials: "include",
                  signal: AbortSignal.timeout(X),
                });
                if (!f.ok)
                  throw new Error(
                    `discounts_and_events_data failed: ${f.status}`,
                  );
                const L = await f.json();
                return { items: Array.isArray(L.items) ? L.items : [] };
              },
              staleTime: _e,
              ...D,
            }
          );
        }
        const ne = parseInt(s.strColumnsPerPage),
          ge = 4,
          Me = 2,
          De = 2,
          pe = parseInt(s.strWideScreenMinWidth),
          Pe = parseInt(s.strPlaceholderHeight),
          Oe = parseInt(s.strScrollColumnGap),
          q = "DiscountsAndEventsReady";
        function ee(o) {
          return o.appid ? `app_${o.appid}` : `url_${o.url ?? ""}`;
        }
        function re(o, r, _, D, i) {
          const f = o.filter((m) => m.style === "full"),
            L = o.filter(
              (m) => m.style !== "full" && m.banner === "daily_deal",
            ),
            A = o.filter(
              (m) => m.style !== "full" && m.banner !== "daily_deal",
            ),
            H = [];
          let G = 0,
            U = 0,
            W = 0;
          for (
            ;
            H.length < i && (G < f.length || U < L.length || W < A.length);
          ) {
            const m = [],
              z = U < L.length || W < A.length,
              Y = Math.min(z ? _ : r, f.length - G);
            for (let F = 0; F < Y; F++) {
              const k = f[G++];
              m.push({ key: `full_${ee(k)}`, items: [k] });
            }
            const $ = (r - m.length) * 2,
              p = Math.min(D, $, L.length - U),
              x = L.slice(U, U + p);
            U += p;
            const y = Math.min($ - p, A.length - W);
            x.push(...A.slice(W, W + y)), (W += y);
            for (let F = 0; F < x.length; F += 2) {
              const k = x.slice(F, F + 2);
              m.push({ key: `half_${ee(k[0])}`, items: k });
            }
            H.push(m);
          }
          return H;
        }
        function Ie(o) {
          switch (o.banner) {
            case "weekend_deal":
              return u.d.Localize("#DiscountsAndEvents_Banner_WeekendDeal");
            case "midweek_deal":
              return u.d.Localize("#DiscountsAndEvents_Banner_MidweekDeal");
            case "daily_deal":
              return u.d.Localize("#DiscountsAndEvents_Banner_DailyDeal");
            case "largest_discount":
              return u.d.Localize("#DiscountsAndEvents_Banner_LargestDiscount");
            case "custom":
              return o.title || void 0;
            default:
              return;
          }
        }
        function Te(o) {
          return o.style === "full"
            ? "spotlight"
            : o.banner === "daily_deal"
              ? "daily-deal"
              : "spotlight-specials";
        }
        function Ce(o) {
          const { initialData: r, initialDataUpdatedAt: _, previewTime: D } = o,
            i = (0, h.a4)(pe),
            f = (0, O.Qn)(),
            L = i && !f,
            A = fe(r, _, D),
            H = (0, C.aL)(`${B.TS.STORE_BASE_URL}specials`),
            G = u.d.Localize("#DiscountsAndEvents_SeeMore"),
            { bShowSeeMoreHint: U, panelProps: W } = (0, I.i)(H),
            [m, z] = (0, g.L2)(),
            { rgPages: Y, rgColumns: $ } = n.useMemo(() => {
              let p = A.data?.items ?? [];
              m ||
                (p = p.filter(
                  (y) =>
                    !y.appid ||
                    y.sale_page ||
                    (!z.BIsGameOwned(y.appid) && !z.BIsGameIgnored(y.appid)),
                ));
              const x = re(p, ne, Me, De, ge);
              return { rgPages: x, rgColumns: x.flat() };
            }, [A.data, m, z]);
          return !A.data && A.isError
            ? (0, t.jsx)(Ae, {})
            : A.data
              ? $.length
                ? (0, t.jsxs)(v.Z, {
                    className: (0, c.A)(s.DiscountsAndEvents, q),
                    navEntryPreferPosition: E.iU.PREFERRED_CHILD,
                    ...W,
                    onOptionsActionDescription: G,
                    children: [
                      (0, t.jsxs)(oe, {
                        children: [
                          !f && (0, t.jsx)(ae, { url: H, location: "desktop" }),
                          f && (0, t.jsx)(I.o, { label: G, shown: U }),
                        ],
                      }),
                      (0, t.jsx)(a.F, {
                        visibleElements: 1,
                        disableEdgeWrap: !1,
                        hideArrows: !1,
                        hidePips: f,
                        screenIsWide: i,
                        bForceSimpleCarousel: f,
                        gap: Oe,
                        className: (0, c.A)(s.Carousel, !L && s.Scrolling),
                        children: L
                          ? Y.map((p, x) =>
                              (0, t.jsx)(
                                v.Z,
                                {
                                  className: s.Page,
                                  "flow-children": "row",
                                  role: "list",
                                  "aria-labelledby":
                                    "discounts_and_events_title",
                                  children: p.map((y) =>
                                    (0, t.jsx)(
                                      ie,
                                      { column: y, depth: x + 1 },
                                      y.key,
                                    ),
                                  ),
                                },
                                p[0].key,
                              ),
                            )
                          : $.map((p, x) =>
                              (0, t.jsx)(
                                ie,
                                { column: p, depth: Math.floor(x / ne) + 1 },
                                p.key,
                              ),
                            ),
                      }),
                      !f && (0, t.jsx)(ae, { url: H, location: "mobile" }),
                    ],
                  })
                : null
              : (0, t.jsx)("div", {
                  className: (0, c.A)(s.DiscountsAndEvents, s.Placeholder, q),
                });
        }
        function Ae() {
          return (0, t.jsxs)("div", {
            className: (0, c.A)(s.DiscountsAndEvents, q),
            children: [
              (0, t.jsx)(oe, {}),
              (0, t.jsx)("div", {
                className: s.LoadError,
                children: u.d.Localize("#DiscountsAndEvents_LoadError"),
              }),
            ],
          });
        }
        function oe(o) {
          return (0, t.jsxs)("div", {
            className: s.Header,
            children: [
              (0, t.jsx)("div", {
                className: s.Title,
                id: "discounts_and_events_title",
                role: "heading",
                "aria-level": 2,
                children: u.d.Localize("#DiscountsAndEvents_Title"),
              }),
              o.children,
            ],
          });
        }
        function ae(o) {
          const { url: r, location: _ } = o;
          return (0, t.jsx)("div", {
            className: (0, c.A)(
              s.SeeMore,
              _ == "mobile" ? s.Mobile : s.Desktop,
            ),
            children: (0, t.jsx)("a", {
              href: r,
              className: s.SeeMoreButton,
              children: u.d.Localize("#DiscountsAndEvents_SeeMore"),
            }),
          });
        }
        function ie(o) {
          const { column: r, depth: _ } = o,
            D = r.items[0]?.style === "full";
          return (0, t.jsx)(v.Z, {
            className: (0, c.A)(s.Column, D && s.FullColumn),
            "flow-children": "column",
            navEntryPreferPosition: E.iU.MAINTAIN_Y,
            children: r.items.map((i) =>
              (0, t.jsx)(Se, { item: i, depth: _ }, ee(i)),
            ),
          });
        }
        function Se(o) {
          const { item: r, depth: _ } = o,
            D = r.style === "full",
            i = n.useMemo(
              () => (r.appid ? { appid: r.appid } : void 0),
              [r.appid],
            ),
            f = !!r.url,
            L = r.alt !== void 0,
            A = !!r.image,
            H = !!r.price || !!r.is_free || !!r.discount_text,
            G = !f || !L || !H,
            U = !A,
            W = !H,
            { data: m } = (0, T.J$)(G ? i : void 0),
            { data: z } = (0, T.lv)(U ? i : void 0),
            { data: Y } = (0, T.Q_)(W ? i : void 0),
            { data: $ } = (0, l.lI)(),
            p = $?.preferences?.disable_microtrailers,
            [x, y] = n.useState(!1),
            [F, k] = n.useState(!1),
            le = !!i && !D && !r.sale_page && !p,
            ce = le && (x || F),
            te = Te(r),
            de = (0, C.aL)(r.url, te, _),
            se = z ?? void 0;
          let Q = r.image;
          Q ||
            (Q = D
              ? ((0, j.l)(se, "hero_capsule") ?? (0, j.l)(se, "header"))
              : (0, j.l)(se, "header"));
          const ue = Ie(r),
            ye = r.alt ?? m?.name ?? "";
          if (i && ((!f && m === null) || (!A && z === null))) return null;
          const me = (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: s.ImageCtn,
                children: [
                  Q &&
                    (0, t.jsx)("img", { className: s.Image, src: Q, alt: ye }),
                  le &&
                    (0, t.jsx)(M.mj, { id: i, active: ce, bIsHoverMode: !0 }),
                  ue &&
                    (0, t.jsx)("div", { className: s.Banner, children: ue }),
                ],
              }),
              (0, t.jsx)("div", {
                className: s.PriceRow,
                children: (0, t.jsx)(Le, {
                  item: r,
                  storeItem: m,
                  purchaseOption: Y,
                }),
              }),
            ],
          });
          let J;
          if (de) {
            const he = (0, t.jsx)(P.Ii, {
              href: de,
              className: s.Link,
              children: me,
            });
            J = i
              ? (0, t.jsx)(Z.A, {
                  appID: i.appid,
                  feature: te,
                  depth: _,
                  children: he,
                })
              : he;
          } else
            J = (0, t.jsx)(V.p, {
              storeItem: m,
              feature: te,
              depth: _,
              className: s.Link,
              children: me,
            });
          const ve = (0, t.jsx)(v.Z, {
            className: (0, c.A)(
              s.Capsule,
              D ? s.Full : s.Half,
              r.banner === "daily_deal" && s.DailyDeal,
              ce && s.Hovered,
            ),
            onGamepadFocus: () => k(!0),
            onGamepadBlur: () => k(!1),
            children: i
              ? (0, t.jsx)(b.j, {
                  id: i,
                  hoverClassName: s.HoverSource,
                  fnHoverState: y,
                  disableScreenshots: !0,
                  children: J,
                })
              : (0, t.jsx)("div", { className: s.HoverSource, children: J }),
          });
          return i ? (0, t.jsx)(N.y0, { itemid: i, children: ve }) : ve;
        }
        function Le(o) {
          const { item: r, storeItem: _, purchaseOption: D } = o;
          if (r.discount_text)
            return (0, t.jsx)("div", {
              className: s.DiscountText,
              children: r.discount_text,
            });
          const i = r.price ?? D;
          return i
            ? (0, t.jsx)(K.z, {
                purchaseOption: i,
                size: "large",
                transparentBackground: !0,
              })
            : r.is_free || _?.is_free
              ? (0, t.jsx)("div", {
                  className: s.FreePrice,
                  children: u.d.Localize("#Price_Free"),
                })
              : null;
        }
        function xe(o) {
          return (0, t.jsx)(d.K, {
            placeholderHeight: Pe,
            rootMargin: "100% 0px 100% 0px",
            children: (0, t.jsx)(Ce, { ...o }),
          });
        }
      },
      19681: (R, S, e) => {
        "use strict";
        e.d(S, { l: () => P });
        var t = e(98609);
        function P(v, E) {
          if (!(!v?.asset_url_format || typeof v[E] != "string"))
            return (
              t.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              v.asset_url_format.replace("${FILENAME}", v[E])
            );
        }
      },
      2213: (R) => {
        R.exports = {
          SeeMoreButtonGamepad: "_3LB60XV--dXt2yYQ6dF5aT",
          Focused: "_3NISN-t8MP65UYQ4p5bNgh",
        };
      },
      73187: (R) => {
        R.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
        };
      },
      38939: (R) => {
        R.exports = {
          strColumnsPerPage: "3",
          strWideScreenMinWidth: "911px",
          strPlaceholderHeight: "700px",
          strScrollColumnGap: "12px",
          DiscountsAndEvents: "lFDjxBzZuxTU3aIPVDTK5",
          Placeholder: "_1bvBq34Qcinx24SzYe-cEH",
          Header: "_3iF8zfmD6ZVhOc4gCHV7eD",
          Title: "PMgHw7SIUZWM8LLZTz-9k",
          SeeMore: "_2X_maIcXL1e31--7CCCsRO",
          Desktop: "_2lv_iQqi0RKAjaIjB0AWtT",
          Mobile: "hVyZPMMVUPDYy7m3l_xqD",
          SeeMoreButton: "_2f_EIAuOVG5ZIzYb1sXJlw",
          LoadError: "_3G4EMTjmvFRdxddZE0RnU_",
          Carousel: "h3XQjMcbeK9lnR6q53EsI",
          Scrolling: "WY4yR7C4Ba-5pFJSNEdUk",
          Column: "_14LO-skSyf__YkJybhT_cx",
          Page: "_3gVAXLzTzt5xCjFA1_c9rn",
          FullColumn: "G3-gajXyBqVPe_dLxcra1",
          Capsule: "_1gsW0WuP7ZclL1_ScZlsvo",
          Full: "_1rLVMySkVo7KY7BspVQpxm",
          ImageCtn: "euMu4YQ01S0SrXGZD3sSh",
          PriceRow: "_1-29ksrfQaORRCqN2AVf06",
          Half: "_2Krn_hSFPsQV65KD-NO15-",
          DailyDeal: "_2j75F6fqx57q6RLx94e7KU",
          Banner: "znNVIhFP6KdJlUS2p2B7q",
          Hovered: "_32cspHTgNb5rYPZCHPVTXR",
          Image: "_25rFony2doWngaEeNrbITF",
          HoverSource: "_229f53fK_tl7R6wqc-g2bq",
          Link: "_2V8zu-797jsZm1qtHNFXhS",
          DiscountText: "_2wlqkq-0fkggDE-Kll8Rwd",
          FreePrice: "_3KFNh7n6I49ARX6I0oXdel",
        };
      },
    },
  ]);
})();

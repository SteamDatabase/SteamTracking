/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8415],
    {
      92148: (L, C, b) => {
        b.d(C, { Te: () => I });
        var d = b(90626),
          x = b(72739),
          E = b(59366);
        const _ =
          typeof document != "undefined" ? d.useLayoutEffect : d.useEffect;
        function y(f) {
          const p = d.useReducer(() => ({}), {})[1],
            R = {
              ...f,
              onChange: (T, W) => {
                var M;
                W ? (0, x.flushSync)(p) : p(),
                  (M = f.onChange) == null || M.call(f, T, W);
              },
            },
            [m] = d.useState(() => new E.YV(R));
          return (
            m.setOptions(R),
            _(() => m._didMount(), []),
            _(() => m._willUpdate()),
            m
          );
        }
        function I(f) {
          return y({
            observeElementRect: E.T6,
            observeElementOffset: E.AO,
            scrollToFn: E.Ox,
            ...f,
          });
        }
        function A(f) {
          return y({
            getScrollElement: () =>
              typeof document != "undefined" ? window : null,
            observeElementRect: observeWindowRect,
            observeElementOffset: observeWindowOffset,
            scrollToFn: windowScroll,
            initialOffset: () =>
              typeof document != "undefined" ? window.scrollY : 0,
            ...f,
          });
        }
      },
      59366: (L, C, b) => {
        b.d(C, {
          YV: () => j,
          Ox: () => P,
          ZO: () => M,
          AO: () => T,
          T6: () => f,
        });
        function d(r, l, e) {
          var i;
          let t = (i = e.initialDeps) != null ? i : [],
            s;
          function n() {
            var o, a, c, h;
            let g;
            e.key && (o = e.debug) != null && o.call(e) && (g = Date.now());
            const u = r();
            if (!(u.length !== t.length || u.some((w, O) => t[O] !== w)))
              return s;
            t = u;
            let v;
            if (
              (e.key && (a = e.debug) != null && a.call(e) && (v = Date.now()),
              (s = l(...u)),
              e.key && (c = e.debug) != null && c.call(e))
            ) {
              const w = Math.round((Date.now() - g) * 100) / 100,
                O = Math.round((Date.now() - v) * 100) / 100,
                k = O / 16,
                D = (S, V) => {
                  for (S = String(S); S.length < V; ) S = " " + S;
                  return S;
                };
              console.info(
                `%c\u23F1 ${D(O, 5)} /${D(w, 5)} ms`,
                `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * k, 120))}deg 100% 31%);`,
                e == null ? void 0 : e.key,
              );
            }
            return (
              (h = e == null ? void 0 : e.onChange) == null || h.call(e, s), s
            );
          }
          return (
            (n.updateDeps = (o) => {
              t = o;
            }),
            n
          );
        }
        function x(r, l) {
          if (r === void 0)
            throw new Error(`Unexpected undefined${l ? `: ${l}` : ""}`);
          return r;
        }
        const E = (r, l) => Math.abs(r - l) < 1.01,
          _ = (r, l, e) => {
            let t;
            return function (...s) {
              r.clearTimeout(t), (t = r.setTimeout(() => l.apply(this, s), e));
            };
          },
          y = (r) => {
            const { offsetWidth: l, offsetHeight: e } = r;
            return { width: l, height: e };
          },
          I = (r) => r,
          A = (r) => {
            const l = Math.max(r.startIndex - r.overscan, 0),
              e = Math.min(r.endIndex + r.overscan, r.count - 1),
              t = [];
            for (let s = l; s <= e; s++) t.push(s);
            return t;
          },
          f = (r, l) => {
            const e = r.scrollElement;
            if (!e) return;
            const t = r.targetWindow;
            if (!t) return;
            const s = (i) => {
              const { width: o, height: a } = i;
              l({ width: Math.round(o), height: Math.round(a) });
            };
            if ((s(y(e)), !t.ResizeObserver)) return () => {};
            const n = new t.ResizeObserver((i) => {
              const o = () => {
                const a = i[0];
                if (a != null && a.borderBoxSize) {
                  const c = a.borderBoxSize[0];
                  if (c) {
                    s({ width: c.inlineSize, height: c.blockSize });
                    return;
                  }
                }
                s(y(e));
              };
              r.options.useAnimationFrameWithResizeObserver
                ? requestAnimationFrame(o)
                : o();
            });
            return (
              n.observe(e, { box: "border-box" }),
              () => {
                n.unobserve(e);
              }
            );
          },
          p = { passive: !0 },
          R = (r, l) => {
            const e = r.scrollElement;
            if (!e) return;
            const t = () => {
              l({ width: e.innerWidth, height: e.innerHeight });
            };
            return (
              t(),
              e.addEventListener("resize", t, p),
              () => {
                e.removeEventListener("resize", t);
              }
            );
          },
          m = typeof window == "undefined" ? !0 : "onscrollend" in window,
          T = (r, l) => {
            const e = r.scrollElement;
            if (!e) return;
            const t = r.targetWindow;
            if (!t) return;
            let s = 0;
            const n =
                r.options.useScrollendEvent && m
                  ? () => {}
                  : _(
                      t,
                      () => {
                        l(s, !1);
                      },
                      r.options.isScrollingResetDelay,
                    ),
              i = (h) => () => {
                const { horizontal: g, isRtl: u } = r.options;
                (s = g ? e.scrollLeft * ((u && -1) || 1) : e.scrollTop),
                  n(),
                  l(s, h);
              },
              o = i(!0),
              a = i(!1);
            a(), e.addEventListener("scroll", o, p);
            const c = r.options.useScrollendEvent && m;
            return (
              c && e.addEventListener("scrollend", a, p),
              () => {
                e.removeEventListener("scroll", o),
                  c && e.removeEventListener("scrollend", a);
              }
            );
          },
          W = (r, l) => {
            const e = r.scrollElement;
            if (!e) return;
            const t = r.targetWindow;
            if (!t) return;
            let s = 0;
            const n =
                r.options.useScrollendEvent && m
                  ? () => {}
                  : debounce(
                      t,
                      () => {
                        l(s, !1);
                      },
                      r.options.isScrollingResetDelay,
                    ),
              i = (h) => () => {
                (s = e[r.options.horizontal ? "scrollX" : "scrollY"]),
                  n(),
                  l(s, h);
              },
              o = i(!0),
              a = i(!1);
            a(), e.addEventListener("scroll", o, p);
            const c = r.options.useScrollendEvent && m;
            return (
              c && e.addEventListener("scrollend", a, p),
              () => {
                e.removeEventListener("scroll", o),
                  c && e.removeEventListener("scrollend", a);
              }
            );
          },
          M = (r, l, e) => {
            if (l != null && l.borderBoxSize) {
              const t = l.borderBoxSize[0];
              if (t)
                return Math.round(
                  t[e.options.horizontal ? "inlineSize" : "blockSize"],
                );
            }
            return r[e.options.horizontal ? "offsetWidth" : "offsetHeight"];
          },
          N = (r, { adjustments: l = 0, behavior: e }, t) => {
            var s, n;
            const i = r + l;
            (n = (s = t.scrollElement) == null ? void 0 : s.scrollTo) == null ||
              n.call(s, {
                [t.options.horizontal ? "left" : "top"]: i,
                behavior: e,
              });
          },
          P = (r, { adjustments: l = 0, behavior: e }, t) => {
            var s, n;
            const i = r + l;
            (n = (s = t.scrollElement) == null ? void 0 : s.scrollTo) == null ||
              n.call(s, {
                [t.options.horizontal ? "left" : "top"]: i,
                behavior: e,
              });
          };
        class j {
          constructor(l) {
            (this.unsubs = []),
              (this.scrollElement = null),
              (this.targetWindow = null),
              (this.isScrolling = !1),
              (this.measurementsCache = []),
              (this.itemSizeCache = new Map()),
              (this.pendingMeasuredCacheIndexes = []),
              (this.scrollRect = null),
              (this.scrollOffset = null),
              (this.scrollDirection = null),
              (this.scrollAdjustments = 0),
              (this.elementsCache = new Map()),
              (this.observer = (() => {
                let e = null;
                const t = () =>
                  e ||
                  (!this.targetWindow || !this.targetWindow.ResizeObserver
                    ? null
                    : (e = new this.targetWindow.ResizeObserver((s) => {
                        s.forEach((n) => {
                          const i = () => {
                            this._measureElement(n.target, n);
                          };
                          this.options.useAnimationFrameWithResizeObserver
                            ? requestAnimationFrame(i)
                            : i();
                        });
                      })));
                return {
                  disconnect: () => {
                    var s;
                    (s = t()) == null || s.disconnect(), (e = null);
                  },
                  observe: (s) => {
                    var n;
                    return (n = t()) == null
                      ? void 0
                      : n.observe(s, { box: "border-box" });
                  },
                  unobserve: (s) => {
                    var n;
                    return (n = t()) == null ? void 0 : n.unobserve(s);
                  },
                };
              })()),
              (this.range = null),
              (this.setOptions = (e) => {
                Object.entries(e).forEach(([t, s]) => {
                  typeof s == "undefined" && delete e[t];
                }),
                  (this.options = {
                    debug: !1,
                    initialOffset: 0,
                    overscan: 1,
                    paddingStart: 0,
                    paddingEnd: 0,
                    scrollPaddingStart: 0,
                    scrollPaddingEnd: 0,
                    horizontal: !1,
                    getItemKey: I,
                    rangeExtractor: A,
                    onChange: () => {},
                    measureElement: M,
                    initialRect: { width: 0, height: 0 },
                    scrollMargin: 0,
                    gap: 0,
                    indexAttribute: "data-index",
                    initialMeasurementsCache: [],
                    lanes: 1,
                    isScrollingResetDelay: 150,
                    enabled: !0,
                    isRtl: !1,
                    useScrollendEvent: !1,
                    useAnimationFrameWithResizeObserver: !1,
                    ...e,
                  });
              }),
              (this.notify = (e) => {
                var t, s;
                (s = (t = this.options).onChange) == null || s.call(t, this, e);
              }),
              (this.maybeNotify = d(
                () => (
                  this.calculateRange(),
                  [
                    this.isScrolling,
                    this.range ? this.range.startIndex : null,
                    this.range ? this.range.endIndex : null,
                  ]
                ),
                (e) => {
                  this.notify(e);
                },
                {
                  key: !1,
                  debug: () => this.options.debug,
                  initialDeps: [
                    this.isScrolling,
                    this.range ? this.range.startIndex : null,
                    this.range ? this.range.endIndex : null,
                  ],
                },
              )),
              (this.cleanup = () => {
                this.unsubs.filter(Boolean).forEach((e) => e()),
                  (this.unsubs = []),
                  this.observer.disconnect(),
                  (this.scrollElement = null),
                  (this.targetWindow = null);
              }),
              (this._didMount = () => () => {
                this.cleanup();
              }),
              (this._willUpdate = () => {
                var s;
                var e;
                const t = this.options.enabled
                  ? this.options.getScrollElement()
                  : null;
                if (this.scrollElement !== t) {
                  if ((this.cleanup(), !t)) {
                    this.maybeNotify();
                    return;
                  }
                  (this.scrollElement = t),
                    this.scrollElement && "ownerDocument" in this.scrollElement
                      ? (this.targetWindow =
                          this.scrollElement.ownerDocument.defaultView)
                      : (this.targetWindow =
                          (s =
                            (e = this.scrollElement) == null
                              ? void 0
                              : e.window) != null
                            ? s
                            : null),
                    this.elementsCache.forEach((n) => {
                      this.observer.observe(n);
                    }),
                    this._scrollToOffset(this.getScrollOffset(), {
                      adjustments: void 0,
                      behavior: void 0,
                    }),
                    this.unsubs.push(
                      this.options.observeElementRect(this, (n) => {
                        (this.scrollRect = n), this.maybeNotify();
                      }),
                    ),
                    this.unsubs.push(
                      this.options.observeElementOffset(this, (n, i) => {
                        (this.scrollAdjustments = 0),
                          (this.scrollDirection = i
                            ? this.getScrollOffset() < n
                              ? "forward"
                              : "backward"
                            : null),
                          (this.scrollOffset = n),
                          (this.isScrolling = i),
                          this.maybeNotify();
                      }),
                    );
                }
              }),
              (this.getSize = () => {
                var e;
                return this.options.enabled
                  ? ((this.scrollRect =
                      (e = this.scrollRect) != null
                        ? e
                        : this.options.initialRect),
                    this.scrollRect[
                      this.options.horizontal ? "width" : "height"
                    ])
                  : ((this.scrollRect = null), 0);
              }),
              (this.getScrollOffset = () => {
                var e;
                return this.options.enabled
                  ? ((this.scrollOffset =
                      (e = this.scrollOffset) != null
                        ? e
                        : typeof this.options.initialOffset == "function"
                          ? this.options.initialOffset()
                          : this.options.initialOffset),
                    this.scrollOffset)
                  : ((this.scrollOffset = null), 0);
              }),
              (this.getFurthestMeasurement = (e, t) => {
                const s = new Map(),
                  n = new Map();
                for (let i = t - 1; i >= 0; i--) {
                  const o = e[i];
                  if (s.has(o.lane)) continue;
                  const a = n.get(o.lane);
                  if (
                    (a == null || o.end > a.end
                      ? n.set(o.lane, o)
                      : o.end < a.end && s.set(o.lane, !0),
                    s.size === this.options.lanes)
                  )
                    break;
                }
                return n.size === this.options.lanes
                  ? Array.from(n.values()).sort((i, o) =>
                      i.end === o.end ? i.index - o.index : i.end - o.end,
                    )[0]
                  : void 0;
              }),
              (this.getMeasurementOptions = d(
                () => [
                  this.options.count,
                  this.options.paddingStart,
                  this.options.scrollMargin,
                  this.options.getItemKey,
                  this.options.enabled,
                ],
                (e, t, s, n, i) => (
                  (this.pendingMeasuredCacheIndexes = []),
                  {
                    count: e,
                    paddingStart: t,
                    scrollMargin: s,
                    getItemKey: n,
                    enabled: i,
                  }
                ),
                { key: !1 },
              )),
              (this.getMeasurements = d(
                () => [this.getMeasurementOptions(), this.itemSizeCache],
                (
                  {
                    count: e,
                    paddingStart: t,
                    scrollMargin: s,
                    getItemKey: n,
                    enabled: i,
                  },
                  o,
                ) => {
                  if (!i)
                    return (
                      (this.measurementsCache = []),
                      this.itemSizeCache.clear(),
                      []
                    );
                  this.measurementsCache.length === 0 &&
                    ((this.measurementsCache =
                      this.options.initialMeasurementsCache),
                    this.measurementsCache.forEach((h) => {
                      this.itemSizeCache.set(h.key, h.size);
                    }));
                  const a =
                    this.pendingMeasuredCacheIndexes.length > 0
                      ? Math.min(...this.pendingMeasuredCacheIndexes)
                      : 0;
                  this.pendingMeasuredCacheIndexes = [];
                  const c = this.measurementsCache.slice(0, a);
                  for (let h = a; h < e; h++) {
                    const g = n(h),
                      u =
                        this.options.lanes === 1
                          ? c[h - 1]
                          : this.getFurthestMeasurement(c, h),
                      z = u ? u.end + this.options.gap : t + s,
                      v = o.get(g),
                      w =
                        typeof v == "number" ? v : this.options.estimateSize(h),
                      O = z + w,
                      k = u ? u.lane : h % this.options.lanes;
                    c[h] = {
                      index: h,
                      start: z,
                      size: w,
                      end: O,
                      key: g,
                      lane: k,
                    };
                  }
                  return (this.measurementsCache = c), c;
                },
                { key: !1, debug: () => this.options.debug },
              )),
              (this.calculateRange = d(
                () => [
                  this.getMeasurements(),
                  this.getSize(),
                  this.getScrollOffset(),
                  this.options.lanes,
                ],
                (e, t, s, n) =>
                  (this.range =
                    e.length > 0 && t > 0
                      ? B({
                          measurements: e,
                          outerSize: t,
                          scrollOffset: s,
                          lanes: n,
                        })
                      : null),
                { key: !1, debug: () => this.options.debug },
              )),
              (this.getVirtualIndexes = d(
                () => {
                  let e = null,
                    t = null;
                  const s = this.calculateRange();
                  return (
                    s && ((e = s.startIndex), (t = s.endIndex)),
                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                    [
                      this.options.rangeExtractor,
                      this.options.overscan,
                      this.options.count,
                      e,
                      t,
                    ]
                  );
                },
                (e, t, s, n, i) =>
                  n === null || i === null
                    ? []
                    : e({ startIndex: n, endIndex: i, overscan: t, count: s }),
                { key: !1, debug: () => this.options.debug },
              )),
              (this.indexFromElement = (e) => {
                const t = this.options.indexAttribute,
                  s = e.getAttribute(t);
                return s
                  ? parseInt(s, 10)
                  : (console.warn(
                      `Missing attribute name '${t}={index}' on measured element.`,
                    ),
                    -1);
              }),
              (this._measureElement = (e, t) => {
                const s = this.indexFromElement(e),
                  n = this.measurementsCache[s];
                if (!n) return;
                const i = n.key,
                  o = this.elementsCache.get(i);
                o !== e &&
                  (o && this.observer.unobserve(o),
                  this.observer.observe(e),
                  this.elementsCache.set(i, e)),
                  e.isConnected &&
                    this.resizeItem(s, this.options.measureElement(e, t, this));
              }),
              (this.resizeItem = (e, t) => {
                var o;
                const s = this.measurementsCache[e];
                if (!s) return;
                const n =
                    (o = this.itemSizeCache.get(s.key)) != null ? o : s.size,
                  i = t - n;
                i !== 0 &&
                  ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
                    ? this.shouldAdjustScrollPositionOnItemSizeChange(
                        s,
                        i,
                        this,
                      )
                    : s.start <
                      this.getScrollOffset() + this.scrollAdjustments) &&
                    this._scrollToOffset(this.getScrollOffset(), {
                      adjustments: (this.scrollAdjustments += i),
                      behavior: void 0,
                    }),
                  this.pendingMeasuredCacheIndexes.push(s.index),
                  (this.itemSizeCache = new Map(
                    this.itemSizeCache.set(s.key, t),
                  )),
                  this.notify(!1));
              }),
              (this.measureElement = (e) => {
                if (!e) {
                  this.elementsCache.forEach((t, s) => {
                    t.isConnected ||
                      (this.observer.unobserve(t),
                      this.elementsCache.delete(s));
                  });
                  return;
                }
                this._measureElement(e, void 0);
              }),
              (this.getVirtualItems = d(
                () => [this.getVirtualIndexes(), this.getMeasurements()],
                (e, t) => {
                  const s = [];
                  for (let n = 0, i = e.length; n < i; n++) {
                    const o = e[n],
                      a = t[o];
                    s.push(a);
                  }
                  return s;
                },
                { key: !1, debug: () => this.options.debug },
              )),
              (this.getVirtualItemForOffset = (e) => {
                const t = this.getMeasurements();
                if (t.length !== 0)
                  return x(t[F(0, t.length - 1, (s) => x(t[s]).start, e)]);
              }),
              (this.getOffsetForAlignment = (e, t, s = 0) => {
                const n = this.getSize(),
                  i = this.getScrollOffset();
                t === "auto" && (t = e >= i + n ? "end" : "start"),
                  t === "center" ? (e += (s - n) / 2) : t === "end" && (e -= n);
                const o = this.getTotalSize() + this.options.scrollMargin - n;
                return Math.max(Math.min(o, e), 0);
              }),
              (this.getOffsetForIndex = (e, t = "auto") => {
                e = Math.max(0, Math.min(e, this.options.count - 1));
                const s = this.measurementsCache[e];
                if (!s) return;
                const n = this.getSize(),
                  i = this.getScrollOffset();
                if (t === "auto")
                  if (s.end >= i + n - this.options.scrollPaddingEnd) t = "end";
                  else if (s.start <= i + this.options.scrollPaddingStart)
                    t = "start";
                  else return [i, t];
                const o =
                  t === "end"
                    ? s.end + this.options.scrollPaddingEnd
                    : s.start - this.options.scrollPaddingStart;
                return [this.getOffsetForAlignment(o, t, s.size), t];
              }),
              (this.isDynamicMode = () => this.elementsCache.size > 0),
              (this.scrollToOffset = (
                e,
                { align: t = "start", behavior: s } = {},
              ) => {
                s === "smooth" &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                  this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                    adjustments: void 0,
                    behavior: s,
                  });
              }),
              (this.scrollToIndex = (
                e,
                { align: t = "auto", behavior: s } = {},
              ) => {
                s === "smooth" &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                  (e = Math.max(0, Math.min(e, this.options.count - 1)));
                let n = 0;
                const i = 10,
                  o = (c) => {
                    if (!this.targetWindow) return;
                    const h = this.getOffsetForIndex(e, c);
                    if (!h) {
                      console.warn("Failed to get offset for index:", e);
                      return;
                    }
                    const [g, u] = h;
                    this._scrollToOffset(g, {
                      adjustments: void 0,
                      behavior: s,
                    }),
                      this.targetWindow.requestAnimationFrame(() => {
                        const z = this.getScrollOffset(),
                          v = this.getOffsetForIndex(e, u);
                        if (!v) {
                          console.warn("Failed to get offset for index:", e);
                          return;
                        }
                        E(v[0], z) || a(u);
                      });
                  },
                  a = (c) => {
                    this.targetWindow &&
                      (n++,
                      n < i
                        ? this.targetWindow.requestAnimationFrame(() => o(c))
                        : console.warn(
                            `Failed to scroll to index ${e} after ${i} attempts.`,
                          ));
                  };
                o(t);
              }),
              (this.scrollBy = (e, { behavior: t } = {}) => {
                t === "smooth" &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                  this._scrollToOffset(this.getScrollOffset() + e, {
                    adjustments: void 0,
                    behavior: t,
                  });
              }),
              (this.getTotalSize = () => {
                var n;
                var e;
                const t = this.getMeasurements();
                let s;
                if (t.length === 0) s = this.options.paddingStart;
                else if (this.options.lanes === 1)
                  s =
                    (n = (e = t[t.length - 1]) == null ? void 0 : e.end) != null
                      ? n
                      : 0;
                else {
                  const i = Array(this.options.lanes).fill(null);
                  let o = t.length - 1;
                  for (; o >= 0 && i.some((a) => a === null); ) {
                    const a = t[o];
                    i[a.lane] === null && (i[a.lane] = a.end), o--;
                  }
                  s = Math.max(...i.filter((a) => a !== null));
                }
                return Math.max(
                  s - this.options.scrollMargin + this.options.paddingEnd,
                  0,
                );
              }),
              (this._scrollToOffset = (e, { adjustments: t, behavior: s }) => {
                this.options.scrollToFn(
                  e,
                  { behavior: s, adjustments: t },
                  this,
                );
              }),
              (this.measure = () => {
                (this.itemSizeCache = new Map()), this.notify(!1);
              }),
              this.setOptions(l);
          }
        }
        const F = (r, l, e, t) => {
          for (; r <= l; ) {
            const s = ((r + l) / 2) | 0,
              n = e(s);
            if (n < t) r = s + 1;
            else if (n > t) l = s - 1;
            else return s;
          }
          return r > 0 ? r - 1 : 0;
        };
        function B({
          measurements: r,
          outerSize: l,
          scrollOffset: e,
          lanes: t,
        }) {
          const s = r.length - 1,
            n = (a) => r[a].start;
          if (r.length <= t) return { startIndex: 0, endIndex: s };
          let i = F(0, s, n, e),
            o = i;
          if (t === 1) for (; o < s && r[o].end < e + l; ) o++;
          else if (t > 1) {
            const a = Array(t).fill(0);
            for (; o < s && a.some((h) => h < e + l); ) {
              const h = r[o];
              (a[h.lane] = h.end), o++;
            }
            const c = Array(t).fill(e + l);
            for (; i >= 0 && c.some((h) => h >= e); ) {
              const h = r[i];
              (c[h.lane] = h.start), i--;
            }
            (i = Math.max(0, i - (i % t))),
              (o = Math.min(s, o + (t - 1 - (o % t))));
          }
          return { startIndex: i, endIndex: o };
        }
      },
    },
  ]);
})();

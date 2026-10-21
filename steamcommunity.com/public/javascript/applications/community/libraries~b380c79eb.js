/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [88415],
    {
      92148: (D, C, w) => {
        w.d(C, { Te: () => I });
        var u = w(90626),
          z = w(72739),
          O = w(59366);
        const x = typeof document < "u" ? u.useLayoutEffect : u.useEffect;
        function y(m) {
          const v = u.useReducer(() => ({}), {})[1],
            R = {
              ...m,
              onChange: (T, W) => {
                var M;
                W ? (0, z.flushSync)(v) : v(),
                  (M = m.onChange) == null || M.call(m, T, W);
              },
            },
            [g] = u.useState(() => new O.YV(R));
          return (
            g.setOptions(R),
            x(() => g._didMount(), []),
            x(() => g._willUpdate()),
            g
          );
        }
        function I(m) {
          return y({
            observeElementRect: O.T6,
            observeElementOffset: O.AO,
            scrollToFn: O.Ox,
            ...m,
          });
        }
        function A(m) {
          return y({
            getScrollElement: () => (typeof document < "u" ? window : null),
            observeElementRect: observeWindowRect,
            observeElementOffset: observeWindowOffset,
            scrollToFn: windowScroll,
            initialOffset: () => (typeof document < "u" ? window.scrollY : 0),
            ...m,
          });
        }
      },
      59366: (D, C, w) => {
        w.d(C, {
          YV: () => P,
          Ox: () => L,
          ZO: () => M,
          AO: () => T,
          T6: () => m,
        });
        function u(o, l, e) {
          let s = e.initialDeps ?? [],
            t;
          function n() {
            var i, r, a, c;
            let h;
            e.key && (i = e.debug) != null && i.call(e) && (h = Date.now());
            const d = o();
            if (!(d.length !== s.length || d.some((p, E) => s[E] !== p)))
              return t;
            s = d;
            let b;
            if (
              (e.key && (r = e.debug) != null && r.call(e) && (b = Date.now()),
              (t = l(...d)),
              e.key && (a = e.debug) != null && a.call(e))
            ) {
              const p = Math.round((Date.now() - h) * 100) / 100,
                E = Math.round((Date.now() - b) * 100) / 100,
                k = E / 16,
                _ = (S, B) => {
                  for (S = String(S); S.length < B; ) S = " " + S;
                  return S;
                };
              console.info(
                `%c\u23F1 ${_(E, 5)} /${_(p, 5)} ms`,
                `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * k, 120))}deg 100% 31%);`,
                e?.key,
              );
            }
            return (c = e?.onChange) == null || c.call(e, t), t;
          }
          return (
            (n.updateDeps = (i) => {
              s = i;
            }),
            n
          );
        }
        function z(o, l) {
          if (o === void 0)
            throw new Error(`Unexpected undefined${l ? `: ${l}` : ""}`);
          return o;
        }
        const O = (o, l) => Math.abs(o - l) < 1.01,
          x = (o, l, e) => {
            let s;
            return function (...t) {
              o.clearTimeout(s), (s = o.setTimeout(() => l.apply(this, t), e));
            };
          },
          y = (o) => {
            const { offsetWidth: l, offsetHeight: e } = o;
            return { width: l, height: e };
          },
          I = (o) => o,
          A = (o) => {
            const l = Math.max(o.startIndex - o.overscan, 0),
              e = Math.min(o.endIndex + o.overscan, o.count - 1),
              s = [];
            for (let t = l; t <= e; t++) s.push(t);
            return s;
          },
          m = (o, l) => {
            const e = o.scrollElement;
            if (!e) return;
            const s = o.targetWindow;
            if (!s) return;
            const t = (i) => {
              const { width: r, height: a } = i;
              l({ width: Math.round(r), height: Math.round(a) });
            };
            if ((t(y(e)), !s.ResizeObserver)) return () => {};
            const n = new s.ResizeObserver((i) => {
              const r = () => {
                const a = i[0];
                if (a?.borderBoxSize) {
                  const c = a.borderBoxSize[0];
                  if (c) {
                    t({ width: c.inlineSize, height: c.blockSize });
                    return;
                  }
                }
                t(y(e));
              };
              o.options.useAnimationFrameWithResizeObserver
                ? requestAnimationFrame(r)
                : r();
            });
            return (
              n.observe(e, { box: "border-box" }),
              () => {
                n.unobserve(e);
              }
            );
          },
          v = { passive: !0 },
          R = (o, l) => {
            const e = o.scrollElement;
            if (!e) return;
            const s = () => {
              l({ width: e.innerWidth, height: e.innerHeight });
            };
            return (
              s(),
              e.addEventListener("resize", s, v),
              () => {
                e.removeEventListener("resize", s);
              }
            );
          },
          g = typeof window > "u" ? !0 : "onscrollend" in window,
          T = (o, l) => {
            const e = o.scrollElement;
            if (!e) return;
            const s = o.targetWindow;
            if (!s) return;
            let t = 0;
            const n =
                o.options.useScrollendEvent && g
                  ? () => {}
                  : x(
                      s,
                      () => {
                        l(t, !1);
                      },
                      o.options.isScrollingResetDelay,
                    ),
              i = (h) => () => {
                const { horizontal: d, isRtl: f } = o.options;
                (t = d ? e.scrollLeft * ((f && -1) || 1) : e.scrollTop),
                  n(),
                  l(t, h);
              },
              r = i(!0),
              a = i(!1);
            a(), e.addEventListener("scroll", r, v);
            const c = o.options.useScrollendEvent && g;
            return (
              c && e.addEventListener("scrollend", a, v),
              () => {
                e.removeEventListener("scroll", r),
                  c && e.removeEventListener("scrollend", a);
              }
            );
          },
          W = (o, l) => {
            const e = o.scrollElement;
            if (!e) return;
            const s = o.targetWindow;
            if (!s) return;
            let t = 0;
            const n =
                o.options.useScrollendEvent && g
                  ? () => {}
                  : debounce(
                      s,
                      () => {
                        l(t, !1);
                      },
                      o.options.isScrollingResetDelay,
                    ),
              i = (h) => () => {
                (t = e[o.options.horizontal ? "scrollX" : "scrollY"]),
                  n(),
                  l(t, h);
              },
              r = i(!0),
              a = i(!1);
            a(), e.addEventListener("scroll", r, v);
            const c = o.options.useScrollendEvent && g;
            return (
              c && e.addEventListener("scrollend", a, v),
              () => {
                e.removeEventListener("scroll", r),
                  c && e.removeEventListener("scrollend", a);
              }
            );
          },
          M = (o, l, e) => {
            if (l?.borderBoxSize) {
              const s = l.borderBoxSize[0];
              if (s)
                return Math.round(
                  s[e.options.horizontal ? "inlineSize" : "blockSize"],
                );
            }
            return o[e.options.horizontal ? "offsetWidth" : "offsetHeight"];
          },
          V = (o, { adjustments: l = 0, behavior: e }, s) => {
            var t, n;
            const i = o + l;
            (n = (t = s.scrollElement) == null ? void 0 : t.scrollTo) == null ||
              n.call(t, {
                [s.options.horizontal ? "left" : "top"]: i,
                behavior: e,
              });
          },
          L = (o, { adjustments: l = 0, behavior: e }, s) => {
            var t, n;
            const i = o + l;
            (n = (t = s.scrollElement) == null ? void 0 : t.scrollTo) == null ||
              n.call(t, {
                [s.options.horizontal ? "left" : "top"]: i,
                behavior: e,
              });
          };
        class P {
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
                const s = () =>
                  e ||
                  (!this.targetWindow || !this.targetWindow.ResizeObserver
                    ? null
                    : (e = new this.targetWindow.ResizeObserver((t) => {
                        t.forEach((n) => {
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
                    var t;
                    (t = s()) == null || t.disconnect(), (e = null);
                  },
                  observe: (t) => {
                    var n;
                    return (n = s()) == null
                      ? void 0
                      : n.observe(t, { box: "border-box" });
                  },
                  unobserve: (t) => {
                    var n;
                    return (n = s()) == null ? void 0 : n.unobserve(t);
                  },
                };
              })()),
              (this.range = null),
              (this.setOptions = (e) => {
                Object.entries(e).forEach(([s, t]) => {
                  typeof t > "u" && delete e[s];
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
                var s, t;
                (t = (s = this.options).onChange) == null || t.call(s, this, e);
              }),
              (this.maybeNotify = u(
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
                var e;
                const s = this.options.enabled
                  ? this.options.getScrollElement()
                  : null;
                if (this.scrollElement !== s) {
                  if ((this.cleanup(), !s)) {
                    this.maybeNotify();
                    return;
                  }
                  (this.scrollElement = s),
                    this.scrollElement && "ownerDocument" in this.scrollElement
                      ? (this.targetWindow =
                          this.scrollElement.ownerDocument.defaultView)
                      : (this.targetWindow =
                          ((e = this.scrollElement) == null
                            ? void 0
                            : e.window) ?? null),
                    this.elementsCache.forEach((t) => {
                      this.observer.observe(t);
                    }),
                    this._scrollToOffset(this.getScrollOffset(), {
                      adjustments: void 0,
                      behavior: void 0,
                    }),
                    this.unsubs.push(
                      this.options.observeElementRect(this, (t) => {
                        (this.scrollRect = t), this.maybeNotify();
                      }),
                    ),
                    this.unsubs.push(
                      this.options.observeElementOffset(this, (t, n) => {
                        (this.scrollAdjustments = 0),
                          (this.scrollDirection = n
                            ? this.getScrollOffset() < t
                              ? "forward"
                              : "backward"
                            : null),
                          (this.scrollOffset = t),
                          (this.isScrolling = n),
                          this.maybeNotify();
                      }),
                    );
                }
              }),
              (this.getSize = () =>
                this.options.enabled
                  ? ((this.scrollRect =
                      this.scrollRect ?? this.options.initialRect),
                    this.scrollRect[
                      this.options.horizontal ? "width" : "height"
                    ])
                  : ((this.scrollRect = null), 0)),
              (this.getScrollOffset = () =>
                this.options.enabled
                  ? ((this.scrollOffset =
                      this.scrollOffset ??
                      (typeof this.options.initialOffset == "function"
                        ? this.options.initialOffset()
                        : this.options.initialOffset)),
                    this.scrollOffset)
                  : ((this.scrollOffset = null), 0)),
              (this.getFurthestMeasurement = (e, s) => {
                const t = new Map(),
                  n = new Map();
                for (let i = s - 1; i >= 0; i--) {
                  const r = e[i];
                  if (t.has(r.lane)) continue;
                  const a = n.get(r.lane);
                  if (
                    (a == null || r.end > a.end
                      ? n.set(r.lane, r)
                      : r.end < a.end && t.set(r.lane, !0),
                    t.size === this.options.lanes)
                  )
                    break;
                }
                return n.size === this.options.lanes
                  ? Array.from(n.values()).sort((i, r) =>
                      i.end === r.end ? i.index - r.index : i.end - r.end,
                    )[0]
                  : void 0;
              }),
              (this.getMeasurementOptions = u(
                () => [
                  this.options.count,
                  this.options.paddingStart,
                  this.options.scrollMargin,
                  this.options.getItemKey,
                  this.options.enabled,
                ],
                (e, s, t, n, i) => (
                  (this.pendingMeasuredCacheIndexes = []),
                  {
                    count: e,
                    paddingStart: s,
                    scrollMargin: t,
                    getItemKey: n,
                    enabled: i,
                  }
                ),
                { key: !1 },
              )),
              (this.getMeasurements = u(
                () => [this.getMeasurementOptions(), this.itemSizeCache],
                (
                  {
                    count: e,
                    paddingStart: s,
                    scrollMargin: t,
                    getItemKey: n,
                    enabled: i,
                  },
                  r,
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
                    const d = n(h),
                      f =
                        this.options.lanes === 1
                          ? c[h - 1]
                          : this.getFurthestMeasurement(c, h),
                      b = f ? f.end + this.options.gap : s + t,
                      p = r.get(d),
                      E =
                        typeof p == "number" ? p : this.options.estimateSize(h),
                      k = b + E,
                      _ = f ? f.lane : h % this.options.lanes;
                    c[h] = {
                      index: h,
                      start: b,
                      size: E,
                      end: k,
                      key: d,
                      lane: _,
                    };
                  }
                  return (this.measurementsCache = c), c;
                },
                { key: !1, debug: () => this.options.debug },
              )),
              (this.calculateRange = u(
                () => [
                  this.getMeasurements(),
                  this.getSize(),
                  this.getScrollOffset(),
                  this.options.lanes,
                ],
                (e, s, t, n) =>
                  (this.range =
                    e.length > 0 && s > 0
                      ? j({
                          measurements: e,
                          outerSize: s,
                          scrollOffset: t,
                          lanes: n,
                        })
                      : null),
                { key: !1, debug: () => this.options.debug },
              )),
              (this.getVirtualIndexes = u(
                () => {
                  let e = null,
                    s = null;
                  const t = this.calculateRange();
                  return (
                    t && ((e = t.startIndex), (s = t.endIndex)),
                    this.maybeNotify.updateDeps([this.isScrolling, e, s]),
                    [
                      this.options.rangeExtractor,
                      this.options.overscan,
                      this.options.count,
                      e,
                      s,
                    ]
                  );
                },
                (e, s, t, n, i) =>
                  n === null || i === null
                    ? []
                    : e({ startIndex: n, endIndex: i, overscan: s, count: t }),
                { key: !1, debug: () => this.options.debug },
              )),
              (this.indexFromElement = (e) => {
                const s = this.options.indexAttribute,
                  t = e.getAttribute(s);
                return t
                  ? parseInt(t, 10)
                  : (console.warn(
                      `Missing attribute name '${s}={index}' on measured element.`,
                    ),
                    -1);
              }),
              (this._measureElement = (e, s) => {
                const t = this.indexFromElement(e),
                  n = this.measurementsCache[t];
                if (!n) return;
                const i = n.key,
                  r = this.elementsCache.get(i);
                r !== e &&
                  (r && this.observer.unobserve(r),
                  this.observer.observe(e),
                  this.elementsCache.set(i, e)),
                  e.isConnected &&
                    this.resizeItem(t, this.options.measureElement(e, s, this));
              }),
              (this.resizeItem = (e, s) => {
                const t = this.measurementsCache[e];
                if (!t) return;
                const n = this.itemSizeCache.get(t.key) ?? t.size,
                  i = s - n;
                i !== 0 &&
                  ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
                    ? this.shouldAdjustScrollPositionOnItemSizeChange(
                        t,
                        i,
                        this,
                      )
                    : t.start <
                      this.getScrollOffset() + this.scrollAdjustments) &&
                    this._scrollToOffset(this.getScrollOffset(), {
                      adjustments: (this.scrollAdjustments += i),
                      behavior: void 0,
                    }),
                  this.pendingMeasuredCacheIndexes.push(t.index),
                  (this.itemSizeCache = new Map(
                    this.itemSizeCache.set(t.key, s),
                  )),
                  this.notify(!1));
              }),
              (this.measureElement = (e) => {
                if (!e) {
                  this.elementsCache.forEach((s, t) => {
                    s.isConnected ||
                      (this.observer.unobserve(s),
                      this.elementsCache.delete(t));
                  });
                  return;
                }
                this._measureElement(e, void 0);
              }),
              (this.getVirtualItems = u(
                () => [this.getVirtualIndexes(), this.getMeasurements()],
                (e, s) => {
                  const t = [];
                  for (let n = 0, i = e.length; n < i; n++) {
                    const r = e[n],
                      a = s[r];
                    t.push(a);
                  }
                  return t;
                },
                { key: !1, debug: () => this.options.debug },
              )),
              (this.getVirtualItemForOffset = (e) => {
                const s = this.getMeasurements();
                if (s.length !== 0)
                  return z(s[F(0, s.length - 1, (t) => z(s[t]).start, e)]);
              }),
              (this.getOffsetForAlignment = (e, s, t = 0) => {
                const n = this.getSize(),
                  i = this.getScrollOffset();
                s === "auto" && (s = e >= i + n ? "end" : "start"),
                  s === "center" ? (e += (t - n) / 2) : s === "end" && (e -= n);
                const r = this.getTotalSize() + this.options.scrollMargin - n;
                return Math.max(Math.min(r, e), 0);
              }),
              (this.getOffsetForIndex = (e, s = "auto") => {
                e = Math.max(0, Math.min(e, this.options.count - 1));
                const t = this.measurementsCache[e];
                if (!t) return;
                const n = this.getSize(),
                  i = this.getScrollOffset();
                if (s === "auto")
                  if (t.end >= i + n - this.options.scrollPaddingEnd) s = "end";
                  else if (t.start <= i + this.options.scrollPaddingStart)
                    s = "start";
                  else return [i, s];
                const r =
                  s === "end"
                    ? t.end + this.options.scrollPaddingEnd
                    : t.start - this.options.scrollPaddingStart;
                return [this.getOffsetForAlignment(r, s, t.size), s];
              }),
              (this.isDynamicMode = () => this.elementsCache.size > 0),
              (this.scrollToOffset = (
                e,
                { align: s = "start", behavior: t } = {},
              ) => {
                t === "smooth" &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                  this._scrollToOffset(this.getOffsetForAlignment(e, s), {
                    adjustments: void 0,
                    behavior: t,
                  });
              }),
              (this.scrollToIndex = (
                e,
                { align: s = "auto", behavior: t } = {},
              ) => {
                t === "smooth" &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                  (e = Math.max(0, Math.min(e, this.options.count - 1)));
                let n = 0;
                const i = 10,
                  r = (c) => {
                    if (!this.targetWindow) return;
                    const h = this.getOffsetForIndex(e, c);
                    if (!h) {
                      console.warn("Failed to get offset for index:", e);
                      return;
                    }
                    const [d, f] = h;
                    this._scrollToOffset(d, {
                      adjustments: void 0,
                      behavior: t,
                    }),
                      this.targetWindow.requestAnimationFrame(() => {
                        const b = this.getScrollOffset(),
                          p = this.getOffsetForIndex(e, f);
                        if (!p) {
                          console.warn("Failed to get offset for index:", e);
                          return;
                        }
                        O(p[0], b) || a(f);
                      });
                  },
                  a = (c) => {
                    this.targetWindow &&
                      (n++,
                      n < i
                        ? this.targetWindow.requestAnimationFrame(() => r(c))
                        : console.warn(
                            `Failed to scroll to index ${e} after ${i} attempts.`,
                          ));
                  };
                r(s);
              }),
              (this.scrollBy = (e, { behavior: s } = {}) => {
                s === "smooth" &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                  this._scrollToOffset(this.getScrollOffset() + e, {
                    adjustments: void 0,
                    behavior: s,
                  });
              }),
              (this.getTotalSize = () => {
                var e;
                const s = this.getMeasurements();
                let t;
                if (s.length === 0) t = this.options.paddingStart;
                else if (this.options.lanes === 1)
                  t = ((e = s[s.length - 1]) == null ? void 0 : e.end) ?? 0;
                else {
                  const n = Array(this.options.lanes).fill(null);
                  let i = s.length - 1;
                  for (; i >= 0 && n.some((r) => r === null); ) {
                    const r = s[i];
                    n[r.lane] === null && (n[r.lane] = r.end), i--;
                  }
                  t = Math.max(...n.filter((r) => r !== null));
                }
                return Math.max(
                  t - this.options.scrollMargin + this.options.paddingEnd,
                  0,
                );
              }),
              (this._scrollToOffset = (e, { adjustments: s, behavior: t }) => {
                this.options.scrollToFn(
                  e,
                  { behavior: t, adjustments: s },
                  this,
                );
              }),
              (this.measure = () => {
                (this.itemSizeCache = new Map()), this.notify(!1);
              }),
              this.setOptions(l);
          }
        }
        const F = (o, l, e, s) => {
          for (; o <= l; ) {
            const t = ((o + l) / 2) | 0,
              n = e(t);
            if (n < s) o = t + 1;
            else if (n > s) l = t - 1;
            else return t;
          }
          return o > 0 ? o - 1 : 0;
        };
        function j({
          measurements: o,
          outerSize: l,
          scrollOffset: e,
          lanes: s,
        }) {
          const t = o.length - 1,
            n = (a) => o[a].start;
          if (o.length <= s) return { startIndex: 0, endIndex: t };
          let i = F(0, t, n, e),
            r = i;
          if (s === 1) for (; r < t && o[r].end < e + l; ) r++;
          else if (s > 1) {
            const a = Array(s).fill(0);
            for (; r < t && a.some((h) => h < e + l); ) {
              const h = o[r];
              (a[h.lane] = h.end), r++;
            }
            const c = Array(s).fill(e + l);
            for (; i >= 0 && c.some((h) => h >= e); ) {
              const h = o[i];
              (c[h.lane] = h.start), i--;
            }
            (i = Math.max(0, i - (i % s))),
              (r = Math.min(t, r + (s - 1 - (r % s))));
          }
          return { startIndex: i, endIndex: r };
        }
      },
    },
  ]);
})();

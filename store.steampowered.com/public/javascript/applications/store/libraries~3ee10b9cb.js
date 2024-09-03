/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [576],
  {
    99656: (e, t, s) => {
      s.d(t, { Te: () => y, XW: () => M });
      var n = s(90626),
        i = s(72739);
      function o(e, t, s) {
        let n,
          i = s.initialDeps ?? [];
        return () => {
          var o, l, r, h;
          let a;
          s.key &&
            (null == (o = s.debug) ? void 0 : o.call(s)) &&
            (a = Date.now());
          const c = e();
          if (!(c.length !== i.length || c.some((e, t) => i[t] !== e)))
            return n;
          let d;
          if (
            ((i = c),
            s.key &&
              (null == (l = s.debug) ? void 0 : l.call(s)) &&
              (d = Date.now()),
            (n = t(...c)),
            s.key && (null == (r = s.debug) ? void 0 : r.call(s)))
          ) {
            const e = Math.round(100 * (Date.now() - a)) / 100,
              t = Math.round(100 * (Date.now() - d)) / 100,
              n = t / 16,
              i = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${i(t, 5)} /${i(e, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - 120 * n, 120))}deg 100% 31%);`,
              null == s ? void 0 : s.key,
            );
          }
          return (
            null == (h = null == s ? void 0 : s.onChange) || h.call(s, n), n
          );
        };
      }
      function l(e, t) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (t ? `: ${t}` : ""));
        return e;
      }
      const r = (e, t, s) => {
          let n;
          return function (...i) {
            e.clearTimeout(n), (n = e.setTimeout(() => t.apply(this, i), s));
          };
        },
        h = (e) => e,
        a = (e) => {
          const t = Math.max(e.startIndex - e.overscan, 0),
            s = Math.min(e.endIndex + e.overscan, e.count - 1),
            n = [];
          for (let e = t; e <= s; e++) n.push(e);
          return n;
        },
        c = (e, t) => {
          const s = e.scrollElement;
          if (!s) return;
          const n = e.targetWindow;
          if (!n) return;
          const i = (e) => {
            const { width: s, height: n } = e;
            t({ width: Math.round(s), height: Math.round(n) });
          };
          if ((i(s.getBoundingClientRect()), !n.ResizeObserver))
            return () => {};
          const o = new n.ResizeObserver((e) => {
            const t = e[0];
            if (null == t ? void 0 : t.borderBoxSize) {
              const e = t.borderBoxSize[0];
              if (e)
                return void i({ width: e.inlineSize, height: e.blockSize });
            }
            i(s.getBoundingClientRect());
          });
          return (
            o.observe(s, { box: "border-box" }),
            () => {
              o.unobserve(s);
            }
          );
        },
        d = { passive: !0 },
        u = (e, t) => {
          const s = e.scrollElement;
          if (!s) return;
          const n = () => {
            t({ width: s.innerWidth, height: s.innerHeight });
          };
          return (
            n(),
            s.addEventListener("resize", n, d),
            () => {
              s.removeEventListener("resize", n);
            }
          );
        },
        m = "undefined" == typeof window || "onscrollend" in window,
        f = (e, t) => {
          const s = e.scrollElement;
          if (!s) return;
          const n = e.targetWindow;
          if (!n) return;
          let i = 0;
          const o = m
              ? () => {}
              : r(
                  n,
                  () => {
                    t(i, !1);
                  },
                  e.options.isScrollingResetDelay,
                ),
            l = (n) => () => {
              const { horizontal: l, isRtl: r } = e.options;
              (i = l ? s.scrollLeft * (r ? -1 : 1) : s.scrollTop), o(), t(i, n);
            },
            h = l(!0),
            a = l(!1);
          return (
            a(),
            s.addEventListener("scroll", h, d),
            s.addEventListener("scrollend", a, d),
            () => {
              s.removeEventListener("scroll", h),
                s.removeEventListener("scrollend", a);
            }
          );
        },
        g = (e, t) => {
          const s = e.scrollElement;
          if (!s) return;
          const n = e.targetWindow;
          if (!n) return;
          let i = 0;
          const o = m
              ? () => {}
              : r(
                  n,
                  () => {
                    t(i, !1);
                  },
                  e.options.isScrollingResetDelay,
                ),
            l = (n) => () => {
              (i = s[e.options.horizontal ? "scrollX" : "scrollY"]),
                o(),
                t(i, n);
            },
            h = l(!0),
            a = l(!1);
          return (
            a(),
            s.addEventListener("scroll", h, d),
            s.addEventListener("scrollend", a, d),
            () => {
              s.removeEventListener("scroll", h),
                s.removeEventListener("scrollend", a);
            }
          );
        },
        p = (e, t, s) => {
          if (null == t ? void 0 : t.borderBoxSize) {
            const e = t.borderBoxSize[0];
            if (e) {
              return Math.round(
                e[s.options.horizontal ? "inlineSize" : "blockSize"],
              );
            }
          }
          return Math.round(
            e.getBoundingClientRect()[
              s.options.horizontal ? "width" : "height"
            ],
          );
        },
        v = (e, { adjustments: t = 0, behavior: s }, n) => {
          var i, o;
          const l = e + t;
          null == (o = null == (i = n.scrollElement) ? void 0 : i.scrollTo) ||
            o.call(i, {
              [n.options.horizontal ? "left" : "top"]: l,
              behavior: s,
            });
        },
        b = (e, { adjustments: t = 0, behavior: s }, n) => {
          var i, o;
          const l = e + t;
          null == (o = null == (i = n.scrollElement) ? void 0 : i.scrollTo) ||
            o.call(i, {
              [n.options.horizontal ? "left" : "top"]: l,
              behavior: s,
            });
        };
      class w {
        constructor(e) {
          (this.unsubs = []),
            (this.scrollElement = null),
            (this.targetWindow = null),
            (this.isScrolling = !1),
            (this.scrollToIndexTimeoutId = null),
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
                (this.targetWindow && this.targetWindow.ResizeObserver
                  ? (e = new this.targetWindow.ResizeObserver((e) => {
                      e.forEach((e) => {
                        this._measureElement(e.target, e);
                      });
                    }))
                  : null);
              return {
                disconnect: () => {
                  var e;
                  return null == (e = t()) ? void 0 : e.disconnect();
                },
                observe: (e) => {
                  var s;
                  return null == (s = t())
                    ? void 0
                    : s.observe(e, { box: "border-box" });
                },
                unobserve: (e) => {
                  var s;
                  return null == (s = t()) ? void 0 : s.unobserve(e);
                },
              };
            })()),
            (this.range = null),
            (this.setOptions = (e) => {
              Object.entries(e).forEach(([t, s]) => {
                void 0 === s && delete e[t];
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
                  getItemKey: h,
                  rangeExtractor: a,
                  onChange: () => {},
                  measureElement: p,
                  initialRect: { width: 0, height: 0 },
                  scrollMargin: 0,
                  gap: 0,
                  indexAttribute: "data-index",
                  initialMeasurementsCache: [],
                  lanes: 1,
                  isScrollingResetDelay: 150,
                  enabled: !0,
                  isRtl: !1,
                  ...e,
                });
            }),
            (this.notify = (e) => {
              var t, s;
              null == (s = (t = this.options).onChange) || s.call(t, this, e);
            }),
            (this.maybeNotify = o(
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
                (this.scrollElement = null),
                (this.targetWindow = null),
                this.observer.disconnect(),
                this.elementsCache.clear();
            }),
            (this._didMount = () => () => {
              this.cleanup();
            }),
            (this._willUpdate = () => {
              var e;
              const t = this.options.enabled
                ? this.options.getScrollElement()
                : null;
              if (this.scrollElement !== t) {
                if ((this.cleanup(), !t)) return void this.maybeNotify();
                (this.scrollElement = t),
                  this.scrollElement && "ownerDocument" in this.scrollElement
                    ? (this.targetWindow =
                        this.scrollElement.ownerDocument.defaultView)
                    : (this.targetWindow =
                        (null == (e = this.scrollElement)
                          ? void 0
                          : e.window) ?? null),
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0,
                  }),
                  this.unsubs.push(
                    this.options.observeElementRect(this, (e) => {
                      (this.scrollRect = e), this.maybeNotify();
                    }),
                  ),
                  this.unsubs.push(
                    this.options.observeElementOffset(this, (e, t) => {
                      (this.scrollAdjustments = 0),
                        (this.scrollDirection = t
                          ? this.getScrollOffset() < e
                            ? "forward"
                            : "backward"
                          : null),
                        (this.scrollOffset = e),
                        (this.isScrolling = t),
                        this.maybeNotify();
                    }),
                  );
              }
            }),
            (this.getSize = () =>
              this.options.enabled
                ? ((this.scrollRect =
                    this.scrollRect ?? this.options.initialRect),
                  this.scrollRect[this.options.horizontal ? "width" : "height"])
                : ((this.scrollRect = null), 0)),
            (this.getScrollOffset = () =>
              this.options.enabled
                ? ((this.scrollOffset =
                    this.scrollOffset ??
                    ("function" == typeof this.options.initialOffset
                      ? this.options.initialOffset()
                      : this.options.initialOffset)),
                  this.scrollOffset)
                : ((this.scrollOffset = null), 0)),
            (this.getFurthestMeasurement = (e, t) => {
              const s = new Map(),
                n = new Map();
              for (let i = t - 1; i >= 0; i--) {
                const t = e[i];
                if (s.has(t.lane)) continue;
                const o = n.get(t.lane);
                if (
                  (null == o || t.end > o.end
                    ? n.set(t.lane, t)
                    : t.end < o.end && s.set(t.lane, !0),
                  s.size === this.options.lanes)
                )
                  break;
              }
              return n.size === this.options.lanes
                ? Array.from(n.values()).sort((e, t) =>
                    e.end === t.end ? e.index - t.index : e.end - t.end,
                  )[0]
                : void 0;
            }),
            (this.getMeasurementOptions = o(
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
            (this.getMeasurements = o(
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
                0 === this.measurementsCache.length &&
                  ((this.measurementsCache =
                    this.options.initialMeasurementsCache),
                  this.measurementsCache.forEach((e) => {
                    this.itemSizeCache.set(e.key, e.size);
                  }));
                const l =
                  this.pendingMeasuredCacheIndexes.length > 0
                    ? Math.min(...this.pendingMeasuredCacheIndexes)
                    : 0;
                this.pendingMeasuredCacheIndexes = [];
                const r = this.measurementsCache.slice(0, l);
                for (let i = l; i < e; i++) {
                  const e = n(i),
                    l =
                      1 === this.options.lanes
                        ? r[i - 1]
                        : this.getFurthestMeasurement(r, i),
                    h = l ? l.end + this.options.gap : t + s,
                    a = o.get(e),
                    c = "number" == typeof a ? a : this.options.estimateSize(i),
                    d = h + c,
                    u = l ? l.lane : i % this.options.lanes;
                  r[i] = {
                    index: i,
                    start: h,
                    size: c,
                    end: d,
                    key: e,
                    lane: u,
                  };
                }
                return (this.measurementsCache = r), r;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.calculateRange = o(
              () => [
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
              ],
              (e, t, s) =>
                (this.range =
                  e.length > 0 && t > 0
                    ? (function ({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: s,
                      }) {
                        const n = e.length - 1,
                          i = (t) => e[t].start,
                          o = x(0, n, i, s);
                        let l = o;
                        for (; l < n && e[l].end < s + t; ) l++;
                        return { startIndex: o, endIndex: l };
                      })({ measurements: e, outerSize: t, scrollOffset: s })
                    : null),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getIndexes = o(
              () => [
                this.options.rangeExtractor,
                this.calculateRange(),
                this.options.overscan,
                this.options.count,
              ],
              (e, t, s, n) =>
                null === t
                  ? []
                  : e({
                      startIndex: t.startIndex,
                      endIndex: t.endIndex,
                      overscan: s,
                      count: n,
                    }),
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
              const s = this.measurementsCache[e];
              if (!s) return;
              const n = t - (this.itemSizeCache.get(s.key) ?? s.size);
              0 !== n &&
                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                  ? this.shouldAdjustScrollPositionOnItemSizeChange(s, n, this)
                  : s.start <
                    this.getScrollOffset() + this.scrollAdjustments) &&
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: (this.scrollAdjustments += n),
                    behavior: void 0,
                  }),
                this.pendingMeasuredCacheIndexes.push(s.index),
                (this.itemSizeCache = new Map(
                  this.itemSizeCache.set(s.key, t),
                )),
                this.notify(!1));
            }),
            (this.measureElement = (e) => {
              e
                ? this._measureElement(e, void 0)
                : this.elementsCache.forEach((e, t) => {
                    e.isConnected ||
                      (this.observer.unobserve(e),
                      this.elementsCache.delete(t));
                  });
            }),
            (this.getVirtualItems = o(
              () => [this.getIndexes(), this.getMeasurements()],
              (e, t) => {
                const s = [];
                for (let n = 0, i = e.length; n < i; n++) {
                  const i = t[e[n]];
                  s.push(i);
                }
                return s;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getVirtualItemForOffset = (e) => {
              const t = this.getMeasurements();
              if (0 !== t.length)
                return l(t[x(0, t.length - 1, (e) => l(t[e]).start, e)]);
            }),
            (this.getOffsetForAlignment = (e, t) => {
              const s = this.getSize(),
                n = this.getScrollOffset();
              "auto" === t &&
                (t = e <= n ? "start" : e >= n + s ? "end" : "start"),
                "start" === t ||
                  ("end" === t ? (e -= s) : "center" === t && (e -= s / 2));
              const i = this.options.horizontal
                  ? "scrollWidth"
                  : "scrollHeight",
                o =
                  (this.scrollElement
                    ? "document" in this.scrollElement
                      ? this.scrollElement.document.documentElement[i]
                      : this.scrollElement[i]
                    : 0) - s;
              return Math.max(Math.min(o, e), 0);
            }),
            (this.getOffsetForIndex = (e, t = "auto") => {
              e = Math.max(0, Math.min(e, this.options.count - 1));
              const s = this.measurementsCache[e];
              if (!s) return;
              const n = this.getSize(),
                i = this.getScrollOffset();
              if ("auto" === t)
                if (s.end >= i + n - this.options.scrollPaddingEnd) t = "end";
                else {
                  if (!(s.start <= i + this.options.scrollPaddingStart))
                    return [i, t];
                  t = "start";
                }
              const o =
                "end" === t
                  ? s.end + this.options.scrollPaddingEnd
                  : s.start - this.options.scrollPaddingStart;
              return [this.getOffsetForAlignment(o, t), t];
            }),
            (this.isDynamicMode = () => this.elementsCache.size > 0),
            (this.cancelScrollToIndex = () => {
              null !== this.scrollToIndexTimeoutId &&
                this.targetWindow &&
                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
                (this.scrollToIndexTimeoutId = null));
            }),
            (this.scrollToOffset = (
              e,
              { align: t = "start", behavior: s } = {},
            ) => {
              this.cancelScrollToIndex(),
                "smooth" === s &&
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
              (e = Math.max(0, Math.min(e, this.options.count - 1))),
                this.cancelScrollToIndex(),
                "smooth" === s &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  );
              const n = this.getOffsetForIndex(e, t);
              if (!n) return;
              const [i, o] = n;
              this._scrollToOffset(i, { adjustments: void 0, behavior: s }),
                "smooth" !== s &&
                  this.isDynamicMode() &&
                  this.targetWindow &&
                  (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                    () => {
                      this.scrollToIndexTimeoutId = null;
                      if (this.elementsCache.has(this.options.getItemKey(e))) {
                        const [i] = l(this.getOffsetForIndex(e, o));
                        (t = i),
                          (n = this.getScrollOffset()),
                          Math.abs(t - n) < 1 ||
                            this.scrollToIndex(e, { align: o, behavior: s });
                      } else this.scrollToIndex(e, { align: o, behavior: s });
                      var t, n;
                    },
                  ));
            }),
            (this.scrollBy = (e, { behavior: t } = {}) => {
              this.cancelScrollToIndex(),
                "smooth" === t &&
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
              var e;
              const t = this.getMeasurements();
              let s;
              return (
                (s =
                  0 === t.length
                    ? this.options.paddingStart
                    : 1 === this.options.lanes
                      ? ((null == (e = t[t.length - 1]) ? void 0 : e.end) ?? 0)
                      : Math.max(
                          ...t.slice(-this.options.lanes).map((e) => e.end),
                        )),
                s - this.options.scrollMargin + this.options.paddingEnd
              );
            }),
            (this._scrollToOffset = (e, { adjustments: t, behavior: s }) => {
              this.options.scrollToFn(e, { behavior: s, adjustments: t }, this);
            }),
            (this.measure = () => {
              (this.itemSizeCache = new Map()), this.notify(!1);
            }),
            this.setOptions(e);
        }
      }
      const x = (e, t, s, n) => {
        for (; e <= t; ) {
          const i = ((e + t) / 2) | 0,
            o = s(i);
          if (o < n) e = i + 1;
          else {
            if (!(o > n)) return i;
            t = i - 1;
          }
        }
        return e > 0 ? e - 1 : 0;
      };
      const S =
        "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;
      function E(e) {
        const t = n.useReducer(() => ({}), {})[1],
          s = {
            ...e,
            onChange: (s, n) => {
              var o;
              n ? (0, i.flushSync)(t) : t(),
                null == (o = e.onChange) || o.call(e, s, n);
            },
          },
          [o] = n.useState(() => new w(s));
        return (
          o.setOptions(s),
          n.useEffect(() => o._didMount(), []),
          S(() => o._willUpdate()),
          o
        );
      }
      function y(e) {
        return E({
          observeElementRect: c,
          observeElementOffset: f,
          scrollToFn: b,
          ...e,
        });
      }
      function M(e) {
        return E({
          getScrollElement: () =>
            "undefined" != typeof document ? window : null,
          observeElementRect: u,
          observeElementOffset: g,
          scrollToFn: v,
          initialOffset: () =>
            "undefined" != typeof document ? window.scrollY : 0,
          ...e,
        });
      }
    },
  },
]);

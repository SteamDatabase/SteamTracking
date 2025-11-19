/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [576],
  {
    88268: (e, t, s) => {
      s.d(t, { Te: () => z, XW: () => M });
      var n = s(90626),
        i = s(72739);
      function o(e, t, s) {
        let n,
          i = s.initialDeps ?? [];
        function o() {
          var o, r, l, a;
          let h;
          s.key &&
            (null == (o = s.debug) ? void 0 : o.call(s)) &&
            (h = Date.now());
          const c = e();
          if (!(c.length !== i.length || c.some((e, t) => i[t] !== e)))
            return n;
          let d;
          if (
            ((i = c),
            s.key &&
              (null == (r = s.debug) ? void 0 : r.call(s)) &&
              (d = Date.now()),
            (n = t(...c)),
            s.key && (null == (l = s.debug) ? void 0 : l.call(s)))
          ) {
            const e = Math.round(100 * (Date.now() - h)) / 100,
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
            null == (a = null == s ? void 0 : s.onChange) || a.call(s, n), n
          );
        }
        return (
          (o.updateDeps = (e) => {
            i = e;
          }),
          o
        );
      }
      function r(e, t) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (t ? `: ${t}` : ""));
        return e;
      }
      const l = (e, t, s) => {
          let n;
          return function (...i) {
            e.clearTimeout(n), (n = e.setTimeout(() => t.apply(this, i), s));
          };
        },
        a = (e) => {
          const { offsetWidth: t, offsetHeight: s } = e;
          return { width: t, height: s };
        },
        h = (e) => e,
        c = (e) => {
          const t = Math.max(e.startIndex - e.overscan, 0),
            s = Math.min(e.endIndex + e.overscan, e.count - 1),
            n = [];
          for (let e = t; e <= s; e++) n.push(e);
          return n;
        },
        d = (e, t) => {
          const s = e.scrollElement;
          if (!s) return;
          const n = e.targetWindow;
          if (!n) return;
          const i = (e) => {
            const { width: s, height: n } = e;
            t({ width: Math.round(s), height: Math.round(n) });
          };
          if ((i(a(s)), !n.ResizeObserver)) return () => {};
          const o = new n.ResizeObserver((t) => {
            const n = () => {
              const e = t[0];
              if (null == e ? void 0 : e.borderBoxSize) {
                const t = e.borderBoxSize[0];
                if (t)
                  return void i({ width: t.inlineSize, height: t.blockSize });
              }
              i(a(s));
            };
            e.options.useAnimationFrameWithResizeObserver
              ? requestAnimationFrame(n)
              : n();
          });
          return (
            o.observe(s, { box: "border-box" }),
            () => {
              o.unobserve(s);
            }
          );
        },
        u = { passive: !0 },
        f = (e, t) => {
          const s = e.scrollElement;
          if (!s) return;
          const n = () => {
            t({ width: s.innerWidth, height: s.innerHeight });
          };
          return (
            n(),
            s.addEventListener("resize", n, u),
            () => {
              s.removeEventListener("resize", n);
            }
          );
        },
        m = "undefined" == typeof window || "onscrollend" in window,
        g = (e, t) => {
          const s = e.scrollElement;
          if (!s) return;
          const n = e.targetWindow;
          if (!n) return;
          let i = 0;
          const o =
              e.options.useScrollendEvent && m
                ? () => {}
                : l(
                    n,
                    () => {
                      t(i, !1);
                    },
                    e.options.isScrollingResetDelay,
                  ),
            r = (n) => () => {
              const { horizontal: r, isRtl: l } = e.options;
              (i = r ? s.scrollLeft * (l ? -1 : 1) : s.scrollTop), o(), t(i, n);
            },
            a = r(!0),
            h = r(!1);
          h(), s.addEventListener("scroll", a, u);
          const c = e.options.useScrollendEvent && m;
          return (
            c && s.addEventListener("scrollend", h, u),
            () => {
              s.removeEventListener("scroll", a),
                c && s.removeEventListener("scrollend", h);
            }
          );
        },
        p = (e, t) => {
          const s = e.scrollElement;
          if (!s) return;
          const n = e.targetWindow;
          if (!n) return;
          let i = 0;
          const o =
              e.options.useScrollendEvent && m
                ? () => {}
                : l(
                    n,
                    () => {
                      t(i, !1);
                    },
                    e.options.isScrollingResetDelay,
                  ),
            r = (n) => () => {
              (i = s[e.options.horizontal ? "scrollX" : "scrollY"]),
                o(),
                t(i, n);
            },
            a = r(!0),
            h = r(!1);
          h(), s.addEventListener("scroll", a, u);
          const c = e.options.useScrollendEvent && m;
          return (
            c && s.addEventListener("scrollend", h, u),
            () => {
              s.removeEventListener("scroll", a),
                c && s.removeEventListener("scrollend", h);
            }
          );
        },
        v = (e, t, s) => {
          if (null == t ? void 0 : t.borderBoxSize) {
            const e = t.borderBoxSize[0];
            if (e) {
              return Math.round(
                e[s.options.horizontal ? "inlineSize" : "blockSize"],
              );
            }
          }
          return e[s.options.horizontal ? "offsetWidth" : "offsetHeight"];
        },
        b = (e, { adjustments: t = 0, behavior: s }, n) => {
          var i, o;
          const r = e + t;
          null == (o = null == (i = n.scrollElement) ? void 0 : i.scrollTo) ||
            o.call(i, {
              [n.options.horizontal ? "left" : "top"]: r,
              behavior: s,
            });
        },
        w = (e, { adjustments: t = 0, behavior: s }, n) => {
          var i, o;
          const r = e + t;
          null == (o = null == (i = n.scrollElement) ? void 0 : i.scrollTo) ||
            o.call(i, {
              [n.options.horizontal ? "left" : "top"]: r,
              behavior: s,
            });
        };
      class S {
        constructor(e) {
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
                (this.targetWindow && this.targetWindow.ResizeObserver
                  ? (e = new this.targetWindow.ResizeObserver((e) => {
                      e.forEach((e) => {
                        const t = () => {
                          this._measureElement(e.target, e);
                        };
                        this.options.useAnimationFrameWithResizeObserver
                          ? requestAnimationFrame(t)
                          : t();
                      });
                    }))
                  : null);
              return {
                disconnect: () => {
                  var s;
                  null == (s = t()) || s.disconnect(), (e = null);
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
                  rangeExtractor: c,
                  onChange: () => {},
                  measureElement: v,
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
                this.observer.disconnect(),
                (this.scrollElement = null),
                (this.targetWindow = null);
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
                  this.elementsCache.forEach((e) => {
                    this.observer.observe(e);
                  }),
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
                const r =
                  this.pendingMeasuredCacheIndexes.length > 0
                    ? Math.min(...this.pendingMeasuredCacheIndexes)
                    : 0;
                this.pendingMeasuredCacheIndexes = [];
                const l = this.measurementsCache.slice(0, r);
                for (let i = r; i < e; i++) {
                  const e = n(i),
                    r =
                      1 === this.options.lanes
                        ? l[i - 1]
                        : this.getFurthestMeasurement(l, i),
                    a = r ? r.end + this.options.gap : t + s,
                    h = o.get(e),
                    c = "number" == typeof h ? h : this.options.estimateSize(i),
                    d = a + c,
                    u = r ? r.lane : i % this.options.lanes;
                  l[i] = {
                    index: i,
                    start: a,
                    size: c,
                    end: d,
                    key: e,
                    lane: u,
                  };
                }
                return (this.measurementsCache = l), l;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.calculateRange = o(
              () => [
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
                this.options.lanes,
              ],
              (e, t, s, n) =>
                (this.range =
                  e.length > 0 && t > 0
                    ? (function ({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: s,
                        lanes: n,
                      }) {
                        const i = e.length - 1,
                          o = (t) => e[t].start;
                        if (e.length <= n)
                          return { startIndex: 0, endIndex: i };
                        let r = E(0, i, o, s),
                          l = r;
                        if (1 === n) for (; l < i && e[l].end < s + t; ) l++;
                        else if (n > 1) {
                          const o = Array(n).fill(0);
                          for (; l < i && o.some((e) => e < s + t); ) {
                            const t = e[l];
                            (o[t.lane] = t.end), l++;
                          }
                          const a = Array(n).fill(s + t);
                          for (; r >= 0 && a.some((e) => e >= s); ) {
                            const t = e[r];
                            (a[t.lane] = t.start), r--;
                          }
                          (r = Math.max(0, r - (r % n))),
                            (l = Math.min(i, l + (n - 1 - (l % n))));
                        }
                        return { startIndex: r, endIndex: l };
                      })({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: s,
                        lanes: n,
                      })
                    : null),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getVirtualIndexes = o(
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
                null === n || null === i
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
              () => [this.getVirtualIndexes(), this.getMeasurements()],
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
                return r(t[E(0, t.length - 1, (e) => r(t[e]).start, e)]);
            }),
            (this.getOffsetForAlignment = (e, t, s = 0) => {
              const n = this.getSize(),
                i = this.getScrollOffset();
              "auto" === t && (t = e >= i + n ? "end" : "start"),
                "center" === t ? (e += (s - n) / 2) : "end" === t && (e -= n);
              const o = this.getTotalSize() + this.options.scrollMargin - n;
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
              return [this.getOffsetForAlignment(o, t, s.size), t];
            }),
            (this.isDynamicMode = () => this.elementsCache.size > 0),
            (this.scrollToOffset = (
              e,
              { align: t = "start", behavior: s } = {},
            ) => {
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
              "smooth" === s &&
                this.isDynamicMode() &&
                console.warn(
                  "The `smooth` scroll behavior is not fully supported with dynamic size.",
                ),
                (e = Math.max(0, Math.min(e, this.options.count - 1)));
              let n = 0;
              const i = (t) => {
                  if (!this.targetWindow) return;
                  const n = this.getOffsetForIndex(e, t);
                  if (!n)
                    return void console.warn(
                      "Failed to get offset for index:",
                      e,
                    );
                  const [i, r] = n;
                  this._scrollToOffset(i, { adjustments: void 0, behavior: s }),
                    this.targetWindow.requestAnimationFrame(() => {
                      const t = this.getScrollOffset(),
                        s = this.getOffsetForIndex(e, r);
                      var n, i;
                      s
                        ? ((n = s[0]), (i = t), Math.abs(n - i) < 1.01 || o(r))
                        : console.warn("Failed to get offset for index:", e);
                    });
                },
                o = (t) => {
                  this.targetWindow &&
                    (n++,
                    n < 10
                      ? this.targetWindow.requestAnimationFrame(() => i(t))
                      : console.warn(
                          `Failed to scroll to index ${e} after 10 attempts.`,
                        ));
                };
              i(t);
            }),
            (this.scrollBy = (e, { behavior: t } = {}) => {
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
              if (0 === t.length) s = this.options.paddingStart;
              else if (1 === this.options.lanes)
                s = (null == (e = t[t.length - 1]) ? void 0 : e.end) ?? 0;
              else {
                const e = Array(this.options.lanes).fill(null);
                let n = t.length - 1;
                for (; n >= 0 && e.some((e) => null === e); ) {
                  const s = t[n];
                  null === e[s.lane] && (e[s.lane] = s.end), n--;
                }
                s = Math.max(...e.filter((e) => null !== e));
              }
              return Math.max(
                s - this.options.scrollMargin + this.options.paddingEnd,
                0,
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
      const E = (e, t, s, n) => {
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
      const y =
        "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;
      function x(e) {
        const t = n.useReducer(() => ({}), {})[1],
          s = {
            ...e,
            onChange: (s, n) => {
              var o;
              n ? (0, i.flushSync)(t) : t(),
                null == (o = e.onChange) || o.call(e, s, n);
            },
          },
          [o] = n.useState(() => new S(s));
        return (
          o.setOptions(s),
          y(() => o._didMount(), []),
          y(() => o._willUpdate()),
          o
        );
      }
      function z(e) {
        return x({
          observeElementRect: d,
          observeElementOffset: g,
          scrollToFn: w,
          ...e,
        });
      }
      function M(e) {
        return x({
          getScrollElement: () =>
            "undefined" != typeof document ? window : null,
          observeElementRect: f,
          observeElementOffset: p,
          scrollToFn: b,
          initialOffset: () =>
            "undefined" != typeof document ? window.scrollY : 0,
          ...e,
        });
      }
    },
  },
]);

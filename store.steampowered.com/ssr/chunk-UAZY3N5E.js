import { a as te } from "./chunk-ZZ5A7DLN.js";
import { a as y } from "./chunk-ZVXYUGRN.js";
import { h as W } from "./chunk-J4Q5WQMM.js";
import { b as k } from "./chunk-4FCBNXEL.js";
import { p as D } from "./chunk-ULAVP4UJ.js";
import { a as L } from "./chunk-ZSSATMFM.js";
import { e as S } from "./chunk-2B3UHFKJ.js";
function w(i, r, e) {
  let t = e.initialDeps ?? [],
    n;
  return () => {
    var s, o, l, a;
    let u;
    e.key && (s = e.debug) != null && s.call(e) && (u = Date.now());
    let c = i();
    if (!(c.length !== t.length || c.some((b, g) => t[g] !== b))) return n;
    t = c;
    let m;
    if (
      (e.key && (o = e.debug) != null && o.call(e) && (m = Date.now()),
      (n = r(...c)),
      e.key && (l = e.debug) != null && l.call(e))
    ) {
      let b = Math.round((Date.now() - u) * 100) / 100,
        g = Math.round((Date.now() - m) * 100) / 100,
        E = g / 16,
        z = (p, I) => {
          for (p = String(p); p.length < I; ) p = " " + p;
          return p;
        };
      console.info(
        `%c⏱ ${z(g, 5)} /${z(b, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * E, 120))}deg 100% 31%);`,
        e?.key,
      );
    }
    return (a = e?.onChange) == null || a.call(e, n), n;
  };
}
function O(i, r) {
  if (i === void 0) throw new Error(`Unexpected undefined${r ? `: ${r}` : ""}`);
  return i;
}
var P = (i, r) => Math.abs(i - r) < 1,
  C = (i, r, e) => {
    let t;
    return function (...n) {
      i.clearTimeout(t), (t = i.setTimeout(() => r.apply(this, n), e));
    };
  };
var ne = (i) => i,
  se = (i) => {
    let r = Math.max(i.startIndex - i.overscan, 0),
      e = Math.min(i.endIndex + i.overscan, i.count - 1),
      t = [];
    for (let n = r; n <= e; n++) t.push(n);
    return t;
  },
  N = (i, r) => {
    let e = i.scrollElement;
    if (!e) return;
    let t = i.targetWindow;
    if (!t) return;
    let n = (o) => {
      let { width: l, height: a } = o;
      r({ width: Math.round(l), height: Math.round(a) });
    };
    if ((n(e.getBoundingClientRect()), !t.ResizeObserver)) return () => {};
    let s = new t.ResizeObserver((o) => {
      let l = o[0];
      if (l?.borderBoxSize) {
        let a = l.borderBoxSize[0];
        if (a) {
          n({ width: a.inlineSize, height: a.blockSize });
          return;
        }
      }
      n(e.getBoundingClientRect());
    });
    return (
      s.observe(e, { box: "border-box" }),
      () => {
        s.unobserve(e);
      }
    );
  },
  x = { passive: !0 },
  H = (i, r) => {
    let e = i.scrollElement;
    if (!e) return;
    let t = () => {
      r({ width: e.innerWidth, height: e.innerHeight });
    };
    return (
      t(),
      e.addEventListener("resize", t, x),
      () => {
        e.removeEventListener("resize", t);
      }
    );
  },
  F = typeof window > "u" ? !0 : "onscrollend" in window,
  A = (i, r) => {
    let e = i.scrollElement;
    if (!e) return;
    let t = i.targetWindow;
    if (!t) return;
    let n = 0,
      s = F
        ? () => {}
        : C(
            t,
            () => {
              r(n, !1);
            },
            i.options.isScrollingResetDelay,
          ),
      o = (u) => () => {
        let { horizontal: c, isRtl: f } = i.options;
        (n = c ? e.scrollLeft * ((f && -1) || 1) : e.scrollTop), s(), r(n, u);
      },
      l = o(!0),
      a = o(!1);
    return (
      a(),
      e.addEventListener("scroll", l, x),
      e.addEventListener("scrollend", a, x),
      () => {
        e.removeEventListener("scroll", l),
          e.removeEventListener("scrollend", a);
      }
    );
  },
  B = (i, r) => {
    let e = i.scrollElement;
    if (!e) return;
    let t = i.targetWindow;
    if (!t) return;
    let n = 0,
      s = F
        ? () => {}
        : C(
            t,
            () => {
              r(n, !1);
            },
            i.options.isScrollingResetDelay,
          ),
      o = (u) => () => {
        (n = e[i.options.horizontal ? "scrollX" : "scrollY"]), s(), r(n, u);
      },
      l = o(!0),
      a = o(!1);
    return (
      a(),
      e.addEventListener("scroll", l, x),
      e.addEventListener("scrollend", a, x),
      () => {
        e.removeEventListener("scroll", l),
          e.removeEventListener("scrollend", a);
      }
    );
  },
  ie = (i, r, e) => {
    if (r?.borderBoxSize) {
      let t = r.borderBoxSize[0];
      if (t)
        return Math.round(t[e.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return Math.round(
      i.getBoundingClientRect()[e.options.horizontal ? "width" : "height"],
    );
  },
  j = (i, { adjustments: r = 0, behavior: e }, t) => {
    var n, s;
    let o = i + r;
    (s = (n = t.scrollElement) == null ? void 0 : n.scrollTo) == null ||
      s.call(n, { [t.options.horizontal ? "left" : "top"]: o, behavior: e });
  },
  G = (i, { adjustments: r = 0, behavior: e }, t) => {
    var n, s;
    let o = i + r;
    (s = (n = t.scrollElement) == null ? void 0 : n.scrollTo) == null ||
      s.call(n, { [t.options.horizontal ? "left" : "top"]: o, behavior: e });
  },
  M = class {
    constructor(r) {
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
          let e = null,
            t = () =>
              e ||
              (!this.targetWindow || !this.targetWindow.ResizeObserver
                ? null
                : (e = new this.targetWindow.ResizeObserver((n) => {
                    n.forEach((s) => {
                      this._measureElement(s.target, s);
                    });
                  })));
          return {
            disconnect: () => {
              var n;
              return (n = t()) == null ? void 0 : n.disconnect();
            },
            observe: (n) => {
              var s;
              return (s = t()) == null
                ? void 0
                : s.observe(n, { box: "border-box" });
            },
            unobserve: (n) => {
              var s;
              return (s = t()) == null ? void 0 : s.unobserve(n);
            },
          };
        })()),
        (this.range = null),
        (this.setOptions = (e) => {
          Object.entries(e).forEach(([t, n]) => {
            typeof n > "u" && delete e[t];
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
              getItemKey: ne,
              rangeExtractor: se,
              onChange: () => {},
              measureElement: ie,
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
          var t, n;
          (n = (t = this.options).onChange) == null || n.call(t, this, e);
        }),
        (this.maybeNotify = w(
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
          let t = this.options.enabled ? this.options.getScrollElement() : null;
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
                    ((e = this.scrollElement) == null ? void 0 : e.window) ??
                    null),
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
                this.options.observeElementOffset(this, (n, s) => {
                  (this.scrollAdjustments = 0),
                    (this.scrollDirection = s
                      ? this.getScrollOffset() < n
                        ? "forward"
                        : "backward"
                      : null),
                    (this.scrollOffset = n),
                    (this.isScrolling = s),
                    this.maybeNotify();
                }),
              );
          }
        }),
        (this.getSize = () =>
          this.options.enabled
            ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect),
              this.scrollRect[this.options.horizontal ? "width" : "height"])
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
        (this.getFurthestMeasurement = (e, t) => {
          let n = new Map(),
            s = new Map();
          for (let o = t - 1; o >= 0; o--) {
            let l = e[o];
            if (n.has(l.lane)) continue;
            let a = s.get(l.lane);
            if (
              (a == null || l.end > a.end
                ? s.set(l.lane, l)
                : l.end < a.end && n.set(l.lane, !0),
              n.size === this.options.lanes)
            )
              break;
          }
          return s.size === this.options.lanes
            ? Array.from(s.values()).sort((o, l) =>
                o.end === l.end ? o.index - l.index : o.end - l.end,
              )[0]
            : void 0;
        }),
        (this.getMeasurementOptions = w(
          () => [
            this.options.count,
            this.options.paddingStart,
            this.options.scrollMargin,
            this.options.getItemKey,
            this.options.enabled,
          ],
          (e, t, n, s, o) => (
            (this.pendingMeasuredCacheIndexes = []),
            {
              count: e,
              paddingStart: t,
              scrollMargin: n,
              getItemKey: s,
              enabled: o,
            }
          ),
          { key: !1 },
        )),
        (this.getMeasurements = w(
          () => [this.getMeasurementOptions(), this.itemSizeCache],
          (
            {
              count: e,
              paddingStart: t,
              scrollMargin: n,
              getItemKey: s,
              enabled: o,
            },
            l,
          ) => {
            if (!o)
              return (
                (this.measurementsCache = []), this.itemSizeCache.clear(), []
              );
            this.measurementsCache.length === 0 &&
              ((this.measurementsCache = this.options.initialMeasurementsCache),
              this.measurementsCache.forEach((c) => {
                this.itemSizeCache.set(c.key, c.size);
              }));
            let a =
              this.pendingMeasuredCacheIndexes.length > 0
                ? Math.min(...this.pendingMeasuredCacheIndexes)
                : 0;
            this.pendingMeasuredCacheIndexes = [];
            let u = this.measurementsCache.slice(0, a);
            for (let c = a; c < e; c++) {
              let f = s(c),
                m =
                  this.options.lanes === 1
                    ? u[c - 1]
                    : this.getFurthestMeasurement(u, c),
                b = m ? m.end + this.options.gap : t + n,
                g = l.get(f),
                E = typeof g == "number" ? g : this.options.estimateSize(c),
                z = b + E,
                p = m ? m.lane : c % this.options.lanes;
              u[c] = { index: c, start: b, size: E, end: z, key: f, lane: p };
            }
            return (this.measurementsCache = u), u;
          },
          { key: !1, debug: () => this.options.debug },
        )),
        (this.calculateRange = w(
          () => [
            this.getMeasurements(),
            this.getSize(),
            this.getScrollOffset(),
          ],
          (e, t, n) =>
            (this.range =
              e.length > 0 && t > 0
                ? oe({ measurements: e, outerSize: t, scrollOffset: n })
                : null),
          { key: !1, debug: () => this.options.debug },
        )),
        (this.getIndexes = w(
          () => [
            this.options.rangeExtractor,
            this.calculateRange(),
            this.options.overscan,
            this.options.count,
          ],
          (e, t, n, s) =>
            t === null
              ? []
              : e({
                  startIndex: t.startIndex,
                  endIndex: t.endIndex,
                  overscan: n,
                  count: s,
                }),
          { key: !1, debug: () => this.options.debug },
        )),
        (this.indexFromElement = (e) => {
          let t = this.options.indexAttribute,
            n = e.getAttribute(t);
          return n
            ? parseInt(n, 10)
            : (console.warn(
                `Missing attribute name '${t}={index}' on measured element.`,
              ),
              -1);
        }),
        (this._measureElement = (e, t) => {
          let n = this.indexFromElement(e),
            s = this.measurementsCache[n];
          if (!s) return;
          let o = s.key,
            l = this.elementsCache.get(o);
          l !== e &&
            (l && this.observer.unobserve(l),
            this.observer.observe(e),
            this.elementsCache.set(o, e)),
            e.isConnected &&
              this.resizeItem(n, this.options.measureElement(e, t, this));
        }),
        (this.resizeItem = (e, t) => {
          let n = this.measurementsCache[e];
          if (!n) return;
          let s = this.itemSizeCache.get(n.key) ?? n.size,
            o = t - s;
          o !== 0 &&
            ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
              ? this.shouldAdjustScrollPositionOnItemSizeChange(n, o, this)
              : n.start < this.getScrollOffset() + this.scrollAdjustments) &&
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: (this.scrollAdjustments += o),
                behavior: void 0,
              }),
            this.pendingMeasuredCacheIndexes.push(n.index),
            (this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t))),
            this.notify(!1));
        }),
        (this.measureElement = (e) => {
          if (!e) {
            this.elementsCache.forEach((t, n) => {
              t.isConnected ||
                (this.observer.unobserve(t), this.elementsCache.delete(n));
            });
            return;
          }
          this._measureElement(e, void 0);
        }),
        (this.getVirtualItems = w(
          () => [this.getIndexes(), this.getMeasurements()],
          (e, t) => {
            let n = [];
            for (let s = 0, o = e.length; s < o; s++) {
              let l = e[s],
                a = t[l];
              n.push(a);
            }
            return n;
          },
          { key: !1, debug: () => this.options.debug },
        )),
        (this.getVirtualItemForOffset = (e) => {
          let t = this.getMeasurements();
          if (t.length !== 0)
            return O(t[$(0, t.length - 1, (n) => O(t[n]).start, e)]);
        }),
        (this.getOffsetForAlignment = (e, t) => {
          let n = this.getSize(),
            s = this.getScrollOffset();
          t === "auto" &&
            (e <= s ? (t = "start") : e >= s + n ? (t = "end") : (t = "start")),
            t === "start"
              ? (e = e)
              : t === "end"
                ? (e = e - n)
                : t === "center" && (e = e - n / 2);
          let o = this.options.horizontal ? "scrollWidth" : "scrollHeight",
            a =
              (this.scrollElement
                ? "document" in this.scrollElement
                  ? this.scrollElement.document.documentElement[o]
                  : this.scrollElement[o]
                : 0) - n;
          return Math.max(Math.min(a, e), 0);
        }),
        (this.getOffsetForIndex = (e, t = "auto") => {
          e = Math.max(0, Math.min(e, this.options.count - 1));
          let n = this.measurementsCache[e];
          if (!n) return;
          let s = this.getSize(),
            o = this.getScrollOffset();
          if (t === "auto")
            if (n.end >= o + s - this.options.scrollPaddingEnd) t = "end";
            else if (n.start <= o + this.options.scrollPaddingStart)
              t = "start";
            else return [o, t];
          let l =
            t === "end"
              ? n.end + this.options.scrollPaddingEnd
              : n.start - this.options.scrollPaddingStart;
          return [this.getOffsetForAlignment(l, t), t];
        }),
        (this.isDynamicMode = () => this.elementsCache.size > 0),
        (this.cancelScrollToIndex = () => {
          this.scrollToIndexTimeoutId !== null &&
            this.targetWindow &&
            (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
            (this.scrollToIndexTimeoutId = null));
        }),
        (this.scrollToOffset = (
          e,
          { align: t = "start", behavior: n } = {},
        ) => {
          this.cancelScrollToIndex(),
            n === "smooth" &&
              this.isDynamicMode() &&
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              ),
            this._scrollToOffset(this.getOffsetForAlignment(e, t), {
              adjustments: void 0,
              behavior: n,
            });
        }),
        (this.scrollToIndex = (e, { align: t = "auto", behavior: n } = {}) => {
          (e = Math.max(0, Math.min(e, this.options.count - 1))),
            this.cancelScrollToIndex(),
            n === "smooth" &&
              this.isDynamicMode() &&
              console.warn(
                "The `smooth` scroll behavior is not fully supported with dynamic size.",
              );
          let s = this.getOffsetForIndex(e, t);
          if (!s) return;
          let [o, l] = s;
          this._scrollToOffset(o, { adjustments: void 0, behavior: n }),
            n !== "smooth" &&
              this.isDynamicMode() &&
              this.targetWindow &&
              (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                () => {
                  if (
                    ((this.scrollToIndexTimeoutId = null),
                    this.elementsCache.has(this.options.getItemKey(e)))
                  ) {
                    let [u] = O(this.getOffsetForIndex(e, l));
                    P(u, this.getScrollOffset()) ||
                      this.scrollToIndex(e, { align: l, behavior: n });
                  } else this.scrollToIndex(e, { align: l, behavior: n });
                },
              ));
        }),
        (this.scrollBy = (e, { behavior: t } = {}) => {
          this.cancelScrollToIndex(),
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
          var e;
          let t = this.getMeasurements(),
            n;
          return (
            t.length === 0
              ? (n = this.options.paddingStart)
              : (n =
                  this.options.lanes === 1
                    ? (((e = t[t.length - 1]) == null ? void 0 : e.end) ?? 0)
                    : Math.max(
                        ...t.slice(-this.options.lanes).map((s) => s.end),
                      )),
            n - this.options.scrollMargin + this.options.paddingEnd
          );
        }),
        (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
          this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
        }),
        (this.measure = () => {
          (this.itemSizeCache = new Map()), this.notify(!1);
        }),
        this.setOptions(r);
    }
  },
  $ = (i, r, e, t) => {
    for (; i <= r; ) {
      let n = ((i + r) / 2) | 0,
        s = e(n);
      if (s < t) i = n + 1;
      else if (s > t) r = n - 1;
      else return n;
    }
    return i > 0 ? i - 1 : 0;
  };
function oe({ measurements: i, outerSize: r, scrollOffset: e }) {
  let t = i.length - 1,
    s = $(0, t, (l) => i[l].start, e),
    o = s;
  for (; o < t && i[o].end < e + r; ) o++;
  return { startIndex: s, endIndex: o };
}
var v = S(L()),
  U = S(te());
var re = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function X(i) {
  let r = v.useReducer(() => ({}), {})[1],
    e = {
      ...i,
      onChange: (n, s) => {
        var o;
        s ? (0, U.flushSync)(r) : r(),
          (o = i.onChange) == null || o.call(i, n, s);
      },
    },
    [t] = v.useState(() => new M(e));
  return (
    t.setOptions(e),
    v.useEffect(() => t._didMount(), []),
    re(() => t._willUpdate()),
    t
  );
}
function Y(i) {
  return X({
    observeElementRect: N,
    observeElementOffset: A,
    scrollToFn: G,
    ...i,
  });
}
function q(i) {
  return X({
    getScrollElement: () => (typeof document < "u" ? window : null),
    observeElementRect: H,
    observeElementOffset: B,
    scrollToFn: j,
    initialOffset: () => (typeof document < "u" ? window.scrollY : 0),
    ...i,
  });
}
var d = S(L(), 1);
var h = S(D(), 1),
  le = d.default.memo(function (r) {
    let { virtualizer: e, bDynamic: t, idx: n, rowGap: s, renderItem: o } = r,
      l = d.default.useCallback(
        (a, u, c) => (e.scrollToIndex(n, { align: "center" }), !0),
        [e, n],
      );
    return (0, h.jsx)(y, {
      ref: t ? e.measureElement : void 0,
      "data-index": n,
      fnScrollIntoViewHandler: l,
      scrollIntoViewWhenChildFocused: "force",
      style: { width: "100%", paddingBottom: s },
      children: o(n),
    });
  }),
  Se = d.default.forwardRef(function (r, e) {
    let {
        nRows: t,
        nItemHeight: n,
        nRowGap: s,
        overscan: o,
        renderItem: l,
        bDynamic: a,
        className: u,
        forceVirtualizeType: c,
        initialOffset: f,
        onOffsetChange: m,
        ...b
      } = r,
      [g, E] = (0, d.useState)(c),
      [z, p] = d.default.useState(),
      [I, Q] = d.default.useState(),
      Z = d.default.useCallback(
        (T) => {
          if (!T || c == "window") return;
          let V = W(T, "y");
          (0, d.startTransition)(() => {
            p(V || void 0), Q(T.offsetTop), c || E(V ? "element" : "window");
          });
        },
        [c],
      ),
      ee = k(Z, e),
      _ = {
        nRows: t,
        nItemHeight: n,
        nRowGap: s,
        overscan: o,
        renderItem: l,
        bDynamic: a,
        forceVirtualizeType: c,
        initialOffset: f,
        onOffsetChange: m,
      };
    return (0, h.jsx)(y, {
      className: u,
      ref: ee,
      ...b,
      children: (0, h.jsxs)(d.Suspense, {
        children: [
          g === "element" &&
            (0, h.jsx)(ce, { ..._, nScrollMargin: I || 0, elScrollable: z }),
          g === "window" && (0, h.jsx)(ae, { ..._, nScrollMargin: I }),
        ],
      }),
    });
  });
function ae(i) {
  let {
      nScrollMargin: r,
      nRows: e,
      nItemHeight: t,
      nRowGap: n = 10,
      overscan: s = 6,
      initialOffset: o,
      onOffsetChange: l,
    } = i,
    a = t + n,
    u = q({
      count: e,
      scrollMargin: r,
      estimateSize: d.default.useCallback(() => a, [a]),
      overscan: s,
      initialOffset: o,
      initialRect: { height: 1e3, width: 1e3 },
      observeElementOffset: J,
      observeElementRect: ue,
      onChange(c, f) {
        l?.(c.scrollOffset);
      },
    });
  return (
    d.default.useEffect(() => {
      (0, d.startTransition)(() => {
        u.measure();
      });
    }, [u, a]),
    (0, h.jsx)(K, { ...i, virtualizer: u })
  );
}
function ce(i) {
  let {
      nRows: r,
      nScrollMargin: e,
      elScrollable: t,
      nItemHeight: n,
      nRowGap: s = 10,
      overscan: o = 6,
      initialOffset: l,
      onOffsetChange: a,
    } = i,
    u = n + s,
    c = Y({
      count: r,
      scrollMargin: e - (t?.offsetTop || 0),
      getScrollElement: () => t,
      estimateSize: d.default.useCallback(() => u, [u]),
      overscan: o,
      initialRect: { height: 1e3, width: 1e3 },
      initialOffset: l,
      observeElementOffset: J,
      observeElementRect: de,
      onChange(f, m) {
        a?.(f.scrollOffset);
      },
    });
  return (
    d.default.useEffect(() => {
      (0, d.startTransition)(() => {
        c.measure();
      });
    }, [c, u]),
    (0, h.jsx)(K, { ...i, virtualizer: c })
  );
}
function K(i) {
  let { virtualizer: r, nRowGap: e, renderItem: t, bDynamic: n } = i,
    s = r.getVirtualItems(),
    o = s.length ? s[0].start - r.options.scrollMargin : 0,
    l = Math.max(0, r.getTotalSize());
  return (0, h.jsx)(y, {
    "flow-children": "column",
    navEntryPreferPosition: 3,
    style: { height: `${l}px`, width: "100%", position: "relative" },
    children: (0, h.jsx)("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY( ${o}px )`,
      },
      children: s.map((a) =>
        (0, h.jsx)(
          le,
          {
            virtualizer: r,
            bDynamic: n,
            idx: a.index,
            rowGap: e,
            renderItem: t,
          },
          a.key,
        ),
      ),
    }),
  });
}
function R(i) {
  return (...r) => {
    queueMicrotask(() => {
      (0, d.startTransition)(() => {
        i(...r);
      });
    });
  };
}
function J(i, r) {
  let e = i.scrollElement;
  if (!e) return;
  let t;
  "scrollX" in e
    ? (t = R((o) => r(e[i.options.horizontal ? "scrollX" : "scrollY"], o)))
    : (t = R((o) =>
        r(e[i.options.horizontal ? "scrollLeft" : "scrollTop"], o),
      ));
  let n = () => t(!0),
    s = () => t(!1);
  return (
    s(),
    e.addEventListener("scroll", n, { passive: !0 }),
    e.addEventListener("scrollend", s, { passive: !0 }),
    () => {
      e.removeEventListener("scroll", n), e.removeEventListener("scrollend", s);
    }
  );
}
function ue(i, r) {
  let e = i.scrollElement;
  if (!e) return;
  let t = R(() => r({ width: e.innerWidth, height: e.innerHeight }));
  return (
    t(),
    e.addEventListener("resize", t, { passive: !0 }),
    () => {
      e.removeEventListener("resize", t);
    }
  );
}
function de(i, r) {
  let e = i.scrollElement;
  if (!e) return;
  let t = R((o) =>
    r({ width: Math.round(o.width), height: Math.round(o.height) }),
  );
  t(e.getBoundingClientRect());
  let n = e.ownerDocument.defaultView;
  if (!n?.ResizeObserver) return () => {};
  let s = new n.ResizeObserver((o) => {
    if (o[0]?.borderBoxSize[0]) {
      t({
        width: o[0].borderBoxSize[0].inlineSize,
        height: o[0].borderBoxSize[0].blockSize,
      });
      return;
    }
    t(e.getBoundingClientRect());
  });
  return (
    s.observe(e, { box: "border-box" }),
    () => {
      s.unobserve(e);
    }
  );
}
export { se as a, Y as b, Se as c, J as d, de as e };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8820],
  {
    78534: (e) => {
      e.exports = {
        AppGridItem: "cel2PdHKDqwG7grx5a6sY",
        NoImage: "_1-aFUepeFunSRwprkg4ZsI",
        Capsule: "_3F_x55lWImQOFbb_yVRMD1",
        Loaded: "_2OzGyrFCQHj77yH5m52Ugn",
        Label: "_1Pku-I6P7kUcJWw4BluDFC",
      };
    },
    71960: (e) => {
      e.exports = {
        VirtualizedGridWrapper: "R33oyOEbGLOTun3xj4Y2p",
        VirtualizedGridRow: "_3yp3JSnseRSpM7H2FnoqG9",
      };
    },
    47844: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => g });
      var r = n(85556),
        i = n(47427),
        s = n(37563),
        a = n(13129);
      const o =
        n.p +
        "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
      var l = n(78534),
        c = n(20417),
        u = n(91618),
        d = n(49557),
        m = n(71960);
      function f(e) {
        const {
            idxStart: t,
            idxEnd: n,
            renderItem: r,
            height: s,
            itemWidth: a,
            columnGap: o,
          } = e,
          l = [];
        for (let e = t; e < n; e++) l.push(r(e, a));
        return i.createElement(
          u.s,
          { className: m.VirtualizedGridRow, style: { height: s, gap: o } },
          l,
        );
      }
      function h(e) {
        const {
            nItems: t,
            renderItem: n,
            nAspectRatio: r,
            nColumns: s = 7,
            nColumnGap: a = 10,
            nRowGap: o = 10,
            onWidthChanged: l,
          } = e,
          [u, m] = i.useState(0),
          h = Math.ceil(t / s),
          p = Math.max(0, Math.floor((u - (s - 1) * a) / s)),
          g = Math.floor(p / r),
          v = i.useCallback(
            (e) => {
              var t;
              m(e.borderBoxSize[0].inlineSize),
                l &&
                  l(
                    (null === (t = e.target.ownerDocument.defaultView) ||
                    void 0 === t
                      ? void 0
                      : t.innerWidth) || 0,
                    e.borderBoxSize[0].inlineSize,
                  );
            },
            [l],
          ),
          b = (0, c.yU)(v);
        return i.createElement(d.J, {
          ref: b,
          nRows: h,
          nItemHeight: g,
          nRowGap: o,
          renderItem: (e) =>
            i.createElement(f, {
              key: e,
              idxStart: e * s,
              idxEnd: Math.min(t, (e + 1) * s),
              height: g,
              itemWidth: p,
              columnGap: a,
              renderItem: n,
            }),
        });
      }
      function p(e) {
        const { app: t, width: n, index: r, renderItem: c } = e,
          [u, d] = i.useState(0),
          [m, f] = i.useState(!1),
          h = s.De.STORE_ICON_BASE_URL;
        let p = [
          `${h}${t.appid}/library_600x900.jpg`,
          `${h}${t.appid}/portrait.png`,
          o,
        ];
        e.app.localized_capsule_filename &&
          (p = [`${h}${t.appid}/${e.app.localized_capsule_filename}`, ...p]);
        const g = i.createElement(
          i.Fragment,
          null,
          u < p.length &&
            i.createElement("img", {
              className: l.Capsule,
              onLoad: () => {
                f(!0);
              },
              onError: () => {
                u < p.length && d((e) => e + 1);
              },
              src: p[u],
              alt: t.name,
              loading: "lazy",
            }),
          u == p.length - 1 &&
            i.createElement("div", { className: l.Label }, t.name),
        );
        return c(t, r, {
          className: (0, a.Z)(
            l.AppGridItem,
            u == p.length && l.NoImage,
            m && l.Loaded,
          ),
          style: { width: n },
          fnScrollIntoViewHandler: () => !0,
          children: g,
        });
      }
      function g(e) {
        const { rgApps: t, renderItem: n } = e,
          s = (0, r._T)(e, ["rgApps", "renderItem"]),
          a = i.useCallback(
            (e, r) => {
              const s = t[e];
              return i.createElement(p, {
                key: s.appid,
                app: s,
                width: r,
                index: e,
                renderItem: n,
              });
            },
            [t, n],
          );
        return i.createElement(
          h,
          Object.assign(
            { nItems: t.length, renderItem: a, nAspectRatio: 600 / 900 },
            s,
          ),
        );
      }
    },
    49557: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => T });
      var r = n(85556),
        i = n(47427);
      /**
       * react-virtual
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          s.apply(this, arguments)
        );
      }
      var a = n(42287);
      /**
       * virtual-core
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      /**
       * virtual-core
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
      function l(e, t, n) {
        var r,
          i,
          s = null != (r = n.initialDeps) ? r : [];
        return function () {
          var r;
          n.key && null != n.debug && n.debug() && (r = Date.now());
          var a,
            o = e();
          if (
            !(
              o.length !== s.length ||
              o.some(function (e, t) {
                return s[t] !== e;
              })
            )
          )
            return i;
          if (
            ((s = o),
            n.key && null != n.debug && n.debug() && (a = Date.now()),
            (i = t.apply(void 0, o)),
            n.key && null != n.debug && n.debug())
          ) {
            var l = Math.round(100 * (Date.now() - r)) / 100,
              c = Math.round(100 * (Date.now() - a)) / 100,
              u = c / 16,
              d = function (e, t) {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              "%c⏱ " + d(c, 5) + " /" + d(l, 5) + " ms",
              "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" +
                Math.max(0, Math.min(120 - 120 * u, 120)) +
                "deg 100% 31%);",
              null == n ? void 0 : n.key,
            );
          }
          return null == n || null == n.onChange || n.onChange(i), i;
        };
      }
      function c(e, t) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (t ? ": " + t : ""));
        return e;
      }
      var u = function (e) {
          return e;
        },
        d = function (e) {
          for (
            var t = Math.max(e.startIndex - e.overscan, 0),
              n = Math.min(e.endIndex + e.overscan, e.count - 1),
              r = [],
              i = t;
            i <= n;
            i++
          )
            r.push(i);
          return r;
        },
        m = function (e, t) {
          var n = e.scrollElement;
          if (n) {
            var r = function (e) {
              var n = e.width,
                r = e.height;
              t({ width: Math.round(n), height: Math.round(r) });
            };
            r(n.getBoundingClientRect());
            var i = new ResizeObserver(function (e) {
              var t = e[0];
              if (null != t && t.borderBoxSize) {
                var i = t.borderBoxSize[0];
                if (i)
                  return void r({ width: i.inlineSize, height: i.blockSize });
              }
              r(n.getBoundingClientRect());
            });
            return (
              i.observe(n, { box: "border-box" }),
              function () {
                i.unobserve(n);
              }
            );
          }
        },
        f = function (e, t) {
          var n = e.scrollElement;
          if (n) {
            var r = function () {
              t({ width: n.innerWidth, height: n.innerHeight });
            };
            return (
              r(),
              n.addEventListener("resize", r, { passive: !0 }),
              function () {
                n.removeEventListener("resize", r);
              }
            );
          }
        },
        h = function (e, t) {
          var n = e.scrollElement;
          if (n) {
            var r = function () {
              t(n[e.options.horizontal ? "scrollLeft" : "scrollTop"]);
            };
            return (
              r(),
              n.addEventListener("scroll", r, { passive: !0 }),
              function () {
                n.removeEventListener("scroll", r);
              }
            );
          }
        },
        p = function (e, t) {
          var n = e.scrollElement;
          if (n) {
            var r = function () {
              t(n[e.options.horizontal ? "scrollX" : "scrollY"]);
            };
            return (
              r(),
              n.addEventListener("scroll", r, { passive: !0 }),
              function () {
                n.removeEventListener("scroll", r);
              }
            );
          }
        },
        g = function (e, t, n) {
          if (null != t && t.borderBoxSize) {
            var r = t.borderBoxSize[0];
            if (r)
              return Math.round(
                r[n.options.horizontal ? "inlineSize" : "blockSize"],
              );
          }
          return Math.round(
            e.getBoundingClientRect()[
              n.options.horizontal ? "width" : "height"
            ],
          );
        },
        v = function (e, t, n) {
          var r,
            i,
            s = t.adjustments,
            a = void 0 === s ? 0 : s,
            o = t.behavior,
            l = e + a;
          null == (r = n.scrollElement) ||
            null == r.scrollTo ||
            r.scrollTo(
              (((i = {})[n.options.horizontal ? "left" : "top"] = l),
              (i.behavior = o),
              i),
            );
        },
        b = function (e, t, n) {
          var r,
            i,
            s = t.adjustments,
            a = void 0 === s ? 0 : s,
            o = t.behavior,
            l = e + a;
          null == (r = n.scrollElement) ||
            null == r.scrollTo ||
            r.scrollTo(
              (((i = {})[n.options.horizontal ? "left" : "top"] = l),
              (i.behavior = o),
              i),
            );
        },
        y = function (e) {
          var t,
            n,
            r = this;
          (this.unsubs = []),
            (this.scrollElement = null),
            (this.isScrolling = !1),
            (this.isScrollingTimeoutId = null),
            (this.scrollToIndexTimeoutId = null),
            (this.measurementsCache = []),
            (this.itemSizeCache = new Map()),
            (this.pendingMeasuredCacheIndexes = []),
            (this.scrollDirection = null),
            (this.scrollAdjustments = 0),
            (this.measureElementCache = new Map()),
            (this.observer =
              ((t = null),
              (n = function () {
                return (
                  t ||
                  ("undefined" != typeof ResizeObserver
                    ? (t = new ResizeObserver(function (e) {
                        e.forEach(function (e) {
                          r._measureElement(e.target, e);
                        });
                      }))
                    : null)
                );
              }),
              {
                disconnect: function () {
                  var e;
                  return null == (e = n()) ? void 0 : e.disconnect();
                },
                observe: function (e) {
                  var t;
                  return null == (t = n())
                    ? void 0
                    : t.observe(e, { box: "border-box" });
                },
                unobserve: function (e) {
                  var t;
                  return null == (t = n()) ? void 0 : t.unobserve(e);
                },
              })),
            (this.range = null),
            (this.setOptions = function (e) {
              Object.entries(e).forEach(function (t) {
                var n = t[0];
                void 0 === t[1] && delete e[n];
              }),
                (r.options = o(
                  {
                    debug: !1,
                    initialOffset: 0,
                    overscan: 1,
                    paddingStart: 0,
                    paddingEnd: 0,
                    scrollPaddingStart: 0,
                    scrollPaddingEnd: 0,
                    horizontal: !1,
                    getItemKey: u,
                    rangeExtractor: d,
                    onChange: function () {},
                    measureElement: g,
                    initialRect: { width: 0, height: 0 },
                    scrollMargin: 0,
                    scrollingDelay: 150,
                    indexAttribute: "data-index",
                    initialMeasurementsCache: [],
                    lanes: 1,
                  },
                  e,
                ));
            }),
            (this.notify = function (e) {
              null == r.options.onChange || r.options.onChange(r, e);
            }),
            (this.maybeNotify = l(
              function () {
                return (
                  r.calculateRange(),
                  [
                    r.isScrolling,
                    r.range ? r.range.startIndex : null,
                    r.range ? r.range.endIndex : null,
                  ]
                );
              },
              function (e) {
                r.notify(e);
              },
              {
                key: !1,
                debug: function () {
                  return r.options.debug;
                },
                initialDeps: [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ],
              },
            )),
            (this.cleanup = function () {
              r.unsubs.filter(Boolean).forEach(function (e) {
                return e();
              }),
                (r.unsubs = []),
                (r.scrollElement = null);
            }),
            (this._didMount = function () {
              return (
                r.measureElementCache.forEach(r.observer.observe),
                function () {
                  r.observer.disconnect(), r.cleanup();
                }
              );
            }),
            (this._willUpdate = function () {
              var e = r.options.getScrollElement();
              r.scrollElement !== e &&
                (r.cleanup(),
                (r.scrollElement = e),
                r._scrollToOffset(r.scrollOffset, {
                  adjustments: void 0,
                  behavior: void 0,
                }),
                r.unsubs.push(
                  r.options.observeElementRect(r, function (e) {
                    (r.scrollRect = e), r.maybeNotify();
                  }),
                ),
                r.unsubs.push(
                  r.options.observeElementOffset(r, function (e) {
                    (r.scrollAdjustments = 0),
                      r.scrollOffset !== e &&
                        (null !== r.isScrollingTimeoutId &&
                          (clearTimeout(r.isScrollingTimeoutId),
                          (r.isScrollingTimeoutId = null)),
                        (r.isScrolling = !0),
                        (r.scrollDirection =
                          r.scrollOffset < e ? "forward" : "backward"),
                        (r.scrollOffset = e),
                        r.maybeNotify(),
                        (r.isScrollingTimeoutId = setTimeout(function () {
                          (r.isScrollingTimeoutId = null),
                            (r.isScrolling = !1),
                            (r.scrollDirection = null),
                            r.maybeNotify();
                        }, r.options.scrollingDelay)));
                  }),
                ));
            }),
            (this.getSize = function () {
              return r.scrollRect[r.options.horizontal ? "width" : "height"];
            }),
            (this.memoOptions = l(
              function () {
                return [
                  r.options.count,
                  r.options.paddingStart,
                  r.options.scrollMargin,
                  r.options.getItemKey,
                ];
              },
              function (e, t, n, i) {
                return (
                  (r.pendingMeasuredCacheIndexes = []),
                  { count: e, paddingStart: t, scrollMargin: n, getItemKey: i }
                );
              },
              { key: !1 },
            )),
            (this.getFurthestMeasurement = function (e, t) {
              for (var n = new Map(), i = new Map(), s = t - 1; s >= 0; s--) {
                var a = e[s];
                if (!n.has(a.lane)) {
                  var o = i.get(a.lane);
                  if (
                    (null == o || a.end > o.end
                      ? i.set(a.lane, a)
                      : a.end < o.end && n.set(a.lane, !0),
                    n.size === r.options.lanes)
                  )
                    break;
                }
              }
              return i.size === r.options.lanes
                ? Array.from(i.values()).sort(function (e, t) {
                    return e.end - t.end;
                  })[0]
                : void 0;
            }),
            (this.getMeasurements = l(
              function () {
                return [r.memoOptions(), r.itemSizeCache];
              },
              function (e, t) {
                var n = e.count,
                  i = e.paddingStart,
                  s = e.scrollMargin,
                  a = e.getItemKey,
                  o =
                    r.pendingMeasuredCacheIndexes.length > 0
                      ? Math.min.apply(Math, r.pendingMeasuredCacheIndexes)
                      : 0;
                r.pendingMeasuredCacheIndexes = [];
                for (
                  var l = r.measurementsCache.slice(0, o), c = o;
                  c < n;
                  c++
                ) {
                  var u = a(c),
                    d =
                      1 === r.options.lanes
                        ? l[c - 1]
                        : r.getFurthestMeasurement(l, c),
                    m = d ? d.end : i + s,
                    f = t.get(u),
                    h = "number" == typeof f ? f : r.options.estimateSize(c),
                    p = m + h,
                    g = d ? d.lane : c % r.options.lanes;
                  l[c] = {
                    index: c,
                    start: m,
                    size: h,
                    end: p,
                    key: u,
                    lane: g,
                  };
                }
                return (r.measurementsCache = l), l;
              },
              {
                key: !1,
                debug: function () {
                  return r.options.debug;
                },
              },
            )),
            (this.calculateRange = l(
              function () {
                return [r.getMeasurements(), r.getSize(), r.scrollOffset];
              },
              function (e, t, n) {
                return (r.range =
                  e.length > 0 && t > 0
                    ? (function (e) {
                        var t = e.measurements,
                          n = e.outerSize,
                          r = e.scrollOffset,
                          i = t.length - 1,
                          s = function (e) {
                            return t[e].start;
                          },
                          a = z(0, i, s, r),
                          o = a;
                        for (; o < i && t[o].end < r + n; ) o++;
                        return { startIndex: a, endIndex: o };
                      })({ measurements: e, outerSize: t, scrollOffset: n })
                    : null);
              },
              {
                key: !1,
                debug: function () {
                  return r.options.debug;
                },
              },
            )),
            (this.getIndexes = l(
              function () {
                return [
                  r.options.rangeExtractor,
                  r.calculateRange(),
                  r.options.overscan,
                  r.options.count,
                ];
              },
              function (e, t, n, r) {
                return null === t ? [] : e(o({}, t, { overscan: n, count: r }));
              },
              {
                key: !1,
                debug: function () {
                  return r.options.debug;
                },
              },
            )),
            (this.indexFromElement = function (e) {
              var t = r.options.indexAttribute,
                n = e.getAttribute(t);
              return n
                ? parseInt(n, 10)
                : (console.warn(
                    "Missing attribute name '" +
                      t +
                      "={index}' on measured element.",
                  ),
                  -1);
            }),
            (this._measureElement = function (e, t) {
              var n = r.measurementsCache[r.indexFromElement(e)];
              if (n && e.isConnected) {
                var i = r.measureElementCache.get(n.key);
                i !== e &&
                  (i && r.observer.unobserve(i),
                  r.observer.observe(e),
                  r.measureElementCache.set(n.key, e));
                var s = r.options.measureElement(e, t, r);
                r.resizeItem(n, s);
              } else
                r.measureElementCache.forEach(function (t, n) {
                  t === e &&
                    (r.observer.unobserve(e), r.measureElementCache.delete(n));
                });
            }),
            (this.resizeItem = function (e, t) {
              var n,
                i = t - (null != (n = r.itemSizeCache.get(e.key)) ? n : e.size);
              0 !== i &&
                (e.start < r.scrollOffset &&
                  r._scrollToOffset(r.scrollOffset, {
                    adjustments: (r.scrollAdjustments += i),
                    behavior: void 0,
                  }),
                r.pendingMeasuredCacheIndexes.push(e.index),
                (r.itemSizeCache = new Map(r.itemSizeCache.set(e.key, t))),
                r.notify(!1));
            }),
            (this.measureElement = function (e) {
              e && r._measureElement(e, void 0);
            }),
            (this.getVirtualItems = l(
              function () {
                return [r.getIndexes(), r.getMeasurements()];
              },
              function (e, t) {
                for (var n = [], r = 0, i = e.length; r < i; r++) {
                  var s = t[e[r]];
                  n.push(s);
                }
                return n;
              },
              {
                key: !1,
                debug: function () {
                  return r.options.debug;
                },
              },
            )),
            (this.getVirtualItemForOffset = function (e) {
              var t = r.getMeasurements();
              return c(
                t[
                  z(
                    0,
                    t.length - 1,
                    function (e) {
                      return c(t[e]).start;
                    },
                    e,
                  )
                ],
              );
            }),
            (this.getOffsetForAlignment = function (e, t) {
              var n = r.getSize();
              "auto" === t &&
                (t =
                  e <= r.scrollOffset
                    ? "start"
                    : e >= r.scrollOffset + n
                    ? "end"
                    : "start"),
                "start" === t ||
                  ("end" === t ? (e -= n) : "center" === t && (e -= n / 2));
              var i = r.options.horizontal ? "scrollWidth" : "scrollHeight",
                s =
                  (r.scrollElement
                    ? "document" in r.scrollElement
                      ? r.scrollElement.document.documentElement[i]
                      : r.scrollElement[i]
                    : 0) - r.getSize();
              return Math.max(Math.min(s, e), 0);
            }),
            (this.getOffsetForIndex = function (e, t) {
              void 0 === t && (t = "auto"),
                (e = Math.max(0, Math.min(e, r.options.count - 1)));
              var n = c(r.getMeasurements()[e]);
              if ("auto" === t)
                if (
                  n.end >=
                  r.scrollOffset + r.getSize() - r.options.scrollPaddingEnd
                )
                  t = "end";
                else {
                  if (
                    !(n.start <= r.scrollOffset + r.options.scrollPaddingStart)
                  )
                    return [r.scrollOffset, t];
                  t = "start";
                }
              var i =
                "end" === t
                  ? n.end + r.options.scrollPaddingEnd
                  : n.start - r.options.scrollPaddingStart;
              return [r.getOffsetForAlignment(i, t), t];
            }),
            (this.isDynamicMode = function () {
              return r.measureElementCache.size > 0;
            }),
            (this.cancelScrollToIndex = function () {
              null !== r.scrollToIndexTimeoutId &&
                (clearTimeout(r.scrollToIndexTimeoutId),
                (r.scrollToIndexTimeoutId = null));
            }),
            (this.scrollToOffset = function (e, t) {
              var n = void 0 === t ? {} : t,
                i = n.align,
                s = void 0 === i ? "start" : i,
                a = n.behavior;
              r.cancelScrollToIndex(),
                "smooth" === a &&
                  r.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                r._scrollToOffset(r.getOffsetForAlignment(e, s), {
                  adjustments: void 0,
                  behavior: a,
                });
            }),
            (this.scrollToIndex = function (e, t) {
              var n = void 0 === t ? {} : t,
                i = n.align,
                s = void 0 === i ? "auto" : i,
                a = n.behavior;
              (e = Math.max(0, Math.min(e, r.options.count - 1))),
                r.cancelScrollToIndex(),
                "smooth" === a &&
                  r.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  );
              var o = r.getOffsetForIndex(e, s),
                l = o[0],
                c = o[1];
              r._scrollToOffset(l, { adjustments: void 0, behavior: a }),
                "smooth" !== a &&
                  r.isDynamicMode() &&
                  (r.scrollToIndexTimeoutId = setTimeout(function () {
                    var t, n;
                    if (
                      ((r.scrollToIndexTimeoutId = null),
                      r.measureElementCache.has(r.options.getItemKey(e)))
                    ) {
                      var i = r.getOffsetForIndex(e, c)[0];
                      (t = i),
                        (n = r.scrollOffset),
                        Math.abs(t - n) < 1 ||
                          r.scrollToIndex(e, { align: c, behavior: a });
                    } else r.scrollToIndex(e, { align: c, behavior: a });
                  }));
            }),
            (this.scrollBy = function (e, t) {
              var n = (void 0 === t ? {} : t).behavior;
              r.cancelScrollToIndex(),
                "smooth" === n &&
                  r.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                r._scrollToOffset(r.scrollOffset + e, {
                  adjustments: void 0,
                  behavior: n,
                });
            }),
            (this.getTotalSize = function () {
              var e;
              return (
                ((null == (e = r.getMeasurements()[r.options.count - 1])
                  ? void 0
                  : e.end) || r.options.paddingStart) -
                r.options.scrollMargin +
                r.options.paddingEnd
              );
            }),
            (this._scrollToOffset = function (e, t) {
              var n = t.adjustments,
                i = t.behavior;
              r.options.scrollToFn(e, { behavior: i, adjustments: n }, r);
            }),
            (this.measure = function () {
              (r.itemSizeCache = new Map()), r.notify(!1);
            }),
            this.setOptions(e),
            (this.scrollRect = this.options.initialRect),
            (this.scrollOffset = this.options.initialOffset),
            (this.measurementsCache = this.options.initialMeasurementsCache),
            this.measurementsCache.forEach(function (e) {
              r.itemSizeCache.set(e.key, e.size);
            }),
            this.maybeNotify();
        },
        z = function (e, t, n, r) {
          for (; e <= t; ) {
            var i = ((e + t) / 2) | 0,
              s = n(i);
            if (s < r) e = i + 1;
            else {
              if (!(s > r)) return i;
              t = i - 1;
            }
          }
          return e > 0 ? e - 1 : 0;
        };
      /**
       * react-virtual
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
      var I = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function w(e) {
        var t = i.useReducer(function () {
            return {};
          }, {})[1],
          n = s({}, e, {
            onChange: function (n, r) {
              r ? (0, a.flushSync)(t) : t(),
                null == e.onChange || e.onChange(n, r);
            },
          }),
          r = i.useState(function () {
            return new y(n);
          })[0];
        return (
          r.setOptions(n),
          i.useEffect(function () {
            return r._didMount();
          }, []),
          I(function () {
            return r._willUpdate();
          }),
          r
        );
      }
      var B = n(71960),
        M = n(50423),
        E = n(91618),
        S = n(3783),
        O = n(20417),
        x = n(13129);
      function R(e) {
        const {
            virtualizer: t,
            bDynamic: n,
            idx: r,
            rowGap: s,
            renderItem: a,
          } = e,
          o = i.useCallback(
            (e, n, i) => (t.scrollToIndex(r, { align: "center" }), !0),
            [t, r],
          );
        return i.createElement(
          E.s,
          {
            className: B.VirtualizedListRow,
            ref: n ? t.measureElement : void 0,
            "data-index": r,
            fnScrollIntoViewHandler: o,
            scrollIntoViewWhenChildFocused: !0,
            style: { width: "100%", paddingBottom: s },
          },
          i.cloneElement(a(r), { fnScrollIntoViewHandler: () => !0 }),
        );
      }
      const T = i.forwardRef(function (e, t) {
        const {
            nRows: n,
            nItemHeight: s,
            nRowGap: a,
            renderItem: o,
            bDynamic: l,
            className: c,
          } = e,
          u = (0, r._T)(e, [
            "nRows",
            "nItemHeight",
            "nRowGap",
            "renderItem",
            "bDynamic",
            "className",
          ]),
          [d, m] = i.useState(),
          f = d && (0, M.Et)(d, "y"),
          h = (0, O.BE)(m, t);
        return i.createElement(
          E.s,
          Object.assign(
            { className: (0, x.Z)(B.VirtualizedListOuter, c), ref: h },
            u,
          ),
          f && i.createElement(_, Object.assign({}, e, { elScrollable: f })),
          d &&
            !f &&
            i.createElement(C, Object.assign({}, e, { elContainer: d })),
        );
      });
      function C(e) {
        const { elContainer: t, nRows: n, nItemHeight: r, nRowGap: a = 10 } = e,
          o = r + a,
          l =
            ((c = {
              count: n,
              scrollMargin: null == t ? void 0 : t.offsetTop,
              estimateSize: i.useCallback(() => o, [o]),
              overscan: 6,
            }),
            w(
              s(
                {
                  getScrollElement: function () {
                    return "undefined" != typeof document ? window : null;
                  },
                  observeElementRect: f,
                  observeElementOffset: p,
                  scrollToFn: v,
                  initialOffset:
                    "undefined" != typeof document ? window.scrollY : void 0,
                },
                c,
              ),
            ));
        var c;
        return (
          i.useEffect(() => {
            l.measure();
          }, [l, o]),
          i.createElement(j, Object.assign({}, e, { virtualizer: l }))
        );
      }
      function _(e) {
        const {
            nRows: t,
            elScrollable: n,
            nItemHeight: r,
            nRowGap: a = 10,
          } = e,
          o = r + a,
          l =
            ((c = {
              count: t,
              getScrollElement: () => n,
              estimateSize: i.useCallback(() => o, [o]),
              overscan: 5,
            }),
            w(
              s(
                {
                  observeElementRect: m,
                  observeElementOffset: h,
                  scrollToFn: b,
                },
                c,
              ),
            ));
        var c;
        return (
          i.useEffect(() => {
            l.measure();
          }, [l, o]),
          i.createElement(j, Object.assign({}, e, { virtualizer: l }))
        );
      }
      function j(e) {
        var t, n;
        const { virtualizer: r, nRowGap: s, renderItem: a, bDynamic: o } = e,
          l =
            (null !==
              (n =
                null === (t = r.getVirtualItems()[0]) || void 0 === t
                  ? void 0
                  : t.start) && void 0 !== n
              ? n
              : 0) - r.options.scrollMargin;
        return i.createElement(
          E.s,
          {
            className: B.VirtualizedListWrapper,
            "flow-children": "column",
            navEntryPreferPosition: S.c4.MAINTAIN_Y,
            style: {
              height: r.getTotalSize(),
              width: "100%",
              position: "relative",
            },
          },
          i.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY( ${l}px )`,
              },
            },
            r
              .getVirtualItems()
              .map((e) =>
                i.createElement(R, {
                  key: e.key,
                  virtualizer: r,
                  bDynamic: o,
                  idx: e.index,
                  rowGap: s,
                  renderItem: a,
                }),
              ),
          ),
        );
      }
    },
    75545: (e, t, n) => {
      "use strict";
      n.d(t, { XR: () => u, _c: () => l, kk: () => f });
      var r = n(10059),
        i = n(39087),
        s = n(79545);
      const a = r.Message;
      class o extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.appids || i.aR(o.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: i.FE.readInt32,
                    pbr: i.FE.readPackedInt32,
                    bw: i.Xc.writeRepeatedInt32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new o();
          return o.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateAppList";
        }
      }
      class l extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.appids || i.aR(l.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: i.FE.readInt32,
                    pbr: i.FE.readPackedInt32,
                    bw: i.Xc.writeRepeatedInt32,
                  },
                  private: { n: 2, br: i.FE.readBool, bw: i.Xc.writeBool },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new l();
          return l.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_ToggleAppPrivacy_Request";
        }
      }
      class c extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new c();
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new c();
          return c.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_ToggleAppPrivacy_Response";
        }
      }
      class u extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new u();
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new u();
          return u.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_GetPrivateAppList_Request";
        }
      }
      class d extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.private_apps || i.aR(d.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = { proto: d, fields: { private_apps: { n: 1, c: o } } }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new d();
          return d.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_GetPrivateAppList_Response";
        }
      }
      class m extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.private_apps || i.aR(m.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = { proto: m, fields: { private_apps: { n: 1, c: o } } }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new m();
          return m.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification";
        }
      }
      var f, h;
      !(function (e) {
        (e.ToggleAppPrivacy = function (e, t) {
          return e.SendMsg(
            "AccountPrivateApps.ToggleAppPrivacy#1",
            (0, s.MD)(l, t),
            c,
            { ePrivilege: 1 },
          );
        }),
          (e.GetPrivateAppList = function (e, t) {
            return e.SendMsg(
              "AccountPrivateApps.GetPrivateAppList#1",
              (0, s.MD)(u, t),
              d,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(f || (f = {})),
        (function (e) {
          e.NotifyPrivateAppListChangedHandler = {
            name: "AccountPrivateAppsClient.NotifyPrivateAppListChanged#1",
            request: m,
          };
        })(h || (h = {}));
    },
  },
]);

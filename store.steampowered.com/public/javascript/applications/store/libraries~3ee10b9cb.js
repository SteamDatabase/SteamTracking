/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8820],
  {
    9353: (e, n, t) => {
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
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      t.d(n, { MG: () => b });
      var i = t(89526);
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
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }
                return e;
              }),
          r.apply(this, arguments)
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
      function s(e, n, t) {
        var o,
          i,
          r = null != (o = t.initialDeps) ? o : [];
        return function () {
          var o;
          t.key && null != t.debug && t.debug() && (o = Date.now());
          var s,
            l = e();
          if (
            !(
              l.length !== r.length ||
              l.some(function (e, n) {
                return r[n] !== e;
              })
            )
          )
            return i;
          if (
            ((r = l),
            t.key && null != t.debug && t.debug() && (s = Date.now()),
            (i = n.apply(void 0, l)),
            t.key && null != t.debug && t.debug())
          ) {
            var a = Math.round(100 * (Date.now() - o)) / 100,
              u = Math.round(100 * (Date.now() - s)) / 100,
              c = u / 16,
              d = function (e, n) {
                for (e = String(e); e.length < n; ) e = " " + e;
                return e;
              };
            console.info(
              "%c⏱ " + d(u, 5) + " /" + d(a, 5) + " ms",
              "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" +
                Math.max(0, Math.min(120 - 120 * c, 120)) +
                "deg 100% 31%);",
              null == t ? void 0 : t.key,
            );
          }
          return null == t || null == t.onChange || t.onChange(i), i;
        };
      }
      function l(e, n) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (n ? ": " + n : ""));
        return e;
      }
      var a = function (e) {
          return e;
        },
        u = function (e) {
          for (
            var n = Math.max(e.startIndex - e.overscan, 0),
              t = Math.min(e.endIndex + e.overscan, e.count - 1),
              o = [],
              i = n;
            i <= t;
            i++
          )
            o.push(i);
          return o;
        },
        c = function (e, n) {
          var t = e.scrollElement;
          if (t) {
            var o = function (e) {
              var t = e.width,
                o = e.height;
              n({ width: Math.round(t), height: Math.round(o) });
            };
            o(t.getBoundingClientRect());
            var i = new ResizeObserver(function (e) {
              var n = e[0];
              if (null != n && n.borderBoxSize) {
                var i = n.borderBoxSize[0];
                if (i)
                  return void o({ width: i.inlineSize, height: i.blockSize });
              }
              o(t.getBoundingClientRect());
            });
            return (
              i.observe(t, { box: "border-box" }),
              function () {
                i.unobserve(t);
              }
            );
          }
        },
        d = function (e, n) {
          var t = e.scrollElement;
          if (t) {
            var o = function () {
              n(t[e.options.horizontal ? "scrollLeft" : "scrollTop"]);
            };
            return (
              o(),
              t.addEventListener("scroll", o, { passive: !0 }),
              function () {
                t.removeEventListener("scroll", o);
              }
            );
          }
        },
        f = function (e, n, t) {
          if (null != n && n.borderBoxSize) {
            var o = n.borderBoxSize[0];
            if (o)
              return Math.round(
                o[t.options.horizontal ? "inlineSize" : "blockSize"],
              );
          }
          return Math.round(
            e.getBoundingClientRect()[
              t.options.horizontal ? "width" : "height"
            ],
          );
        },
        h = function (e, n, t) {
          var o,
            i,
            r = n.adjustments,
            s = void 0 === r ? 0 : r,
            l = n.behavior,
            a = e + s;
          null == (o = t.scrollElement) ||
            null == o.scrollTo ||
            o.scrollTo(
              (((i = {})[t.options.horizontal ? "left" : "top"] = a),
              (i.behavior = l),
              i),
            );
        },
        m = function (e) {
          var n,
            t,
            o = this;
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
              ((n = null),
              (t = function () {
                return (
                  n ||
                  ("undefined" != typeof ResizeObserver
                    ? (n = new ResizeObserver(function (e) {
                        e.forEach(function (e) {
                          o._measureElement(e.target, e);
                        });
                      }))
                    : null)
                );
              }),
              {
                disconnect: function () {
                  var e;
                  return null == (e = t()) ? void 0 : e.disconnect();
                },
                observe: function (e) {
                  var n;
                  return null == (n = t())
                    ? void 0
                    : n.observe(e, { box: "border-box" });
                },
                unobserve: function (e) {
                  var n;
                  return null == (n = t()) ? void 0 : n.unobserve(e);
                },
              })),
            (this.range = { startIndex: 0, endIndex: 0 }),
            (this.setOptions = function (e) {
              Object.entries(e).forEach(function (n) {
                var t = n[0];
                void 0 === n[1] && delete e[t];
              }),
                (o.options = r(
                  {
                    debug: !1,
                    initialOffset: 0,
                    overscan: 1,
                    paddingStart: 0,
                    paddingEnd: 0,
                    scrollPaddingStart: 0,
                    scrollPaddingEnd: 0,
                    horizontal: !1,
                    getItemKey: a,
                    rangeExtractor: u,
                    onChange: function () {},
                    measureElement: f,
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
            (this.notify = function () {
              null == o.options.onChange || o.options.onChange(o);
            }),
            (this.cleanup = function () {
              o.unsubs.filter(Boolean).forEach(function (e) {
                return e();
              }),
                (o.unsubs = []),
                (o.scrollElement = null);
            }),
            (this._didMount = function () {
              return (
                o.measureElementCache.forEach(o.observer.observe),
                function () {
                  o.observer.disconnect(), o.cleanup();
                }
              );
            }),
            (this._willUpdate = function () {
              var e = o.options.getScrollElement();
              o.scrollElement !== e &&
                (o.cleanup(),
                (o.scrollElement = e),
                o._scrollToOffset(o.scrollOffset, {
                  adjustments: void 0,
                  behavior: void 0,
                }),
                o.unsubs.push(
                  o.options.observeElementRect(o, function (e) {
                    var n = o.scrollRect;
                    (o.scrollRect = e),
                      (o.options.horizontal
                        ? e.width !== n.width
                        : e.height !== n.height) && o.maybeNotify();
                  }),
                ),
                o.unsubs.push(
                  o.options.observeElementOffset(o, function (e) {
                    (o.scrollAdjustments = 0),
                      o.scrollOffset !== e &&
                        (null !== o.isScrollingTimeoutId &&
                          (clearTimeout(o.isScrollingTimeoutId),
                          (o.isScrollingTimeoutId = null)),
                        (o.isScrolling = !0),
                        (o.scrollDirection =
                          o.scrollOffset < e ? "forward" : "backward"),
                        (o.scrollOffset = e),
                        o.maybeNotify(),
                        (o.isScrollingTimeoutId = setTimeout(function () {
                          (o.isScrollingTimeoutId = null),
                            (o.isScrolling = !1),
                            (o.scrollDirection = null),
                            o.maybeNotify();
                        }, o.options.scrollingDelay)));
                  }),
                ));
            }),
            (this.getSize = function () {
              return o.scrollRect[o.options.horizontal ? "width" : "height"];
            }),
            (this.memoOptions = s(
              function () {
                return [
                  o.options.count,
                  o.options.paddingStart,
                  o.options.scrollMargin,
                  o.options.getItemKey,
                ];
              },
              function (e, n, t, i) {
                return (
                  (o.pendingMeasuredCacheIndexes = []),
                  { count: e, paddingStart: n, scrollMargin: t, getItemKey: i }
                );
              },
              { key: !1 },
            )),
            (this.getFurthestMeasurement = function (e, n) {
              for (var t = new Map(), i = new Map(), r = n - 1; r >= 0; r--) {
                var s = e[r];
                if (!t.has(s.lane)) {
                  var l = i.get(s.lane);
                  if (
                    (null == l || s.end > l.end
                      ? i.set(s.lane, s)
                      : s.end < l.end && t.set(s.lane, !0),
                    t.size === o.options.lanes)
                  )
                    break;
                }
              }
              return i.size === o.options.lanes
                ? Array.from(i.values()).sort(function (e, n) {
                    return e.end - n.end;
                  })[0]
                : void 0;
            }),
            (this.getMeasurements = s(
              function () {
                return [o.memoOptions(), o.itemSizeCache];
              },
              function (e, n) {
                var t = e.count,
                  i = e.paddingStart,
                  r = e.scrollMargin,
                  s = e.getItemKey,
                  l =
                    o.pendingMeasuredCacheIndexes.length > 0
                      ? Math.min.apply(Math, o.pendingMeasuredCacheIndexes)
                      : 0;
                o.pendingMeasuredCacheIndexes = [];
                for (
                  var a = o.measurementsCache.slice(0, l), u = l;
                  u < t;
                  u++
                ) {
                  var c = s(u),
                    d =
                      1 === o.options.lanes
                        ? a[u - 1]
                        : o.getFurthestMeasurement(a, u),
                    f = d ? d.end : i + r,
                    h = n.get(c),
                    m = "number" == typeof h ? h : o.options.estimateSize(u),
                    g = f + m,
                    v = d ? d.lane : u % o.options.lanes;
                  a[u] = {
                    index: u,
                    start: f,
                    size: m,
                    end: g,
                    key: c,
                    lane: v,
                  };
                }
                return (o.measurementsCache = a), a;
              },
              {
                key: !1,
                debug: function () {
                  return o.options.debug;
                },
              },
            )),
            (this.calculateRange = s(
              function () {
                return [o.getMeasurements(), o.getSize(), o.scrollOffset];
              },
              function (e, n, t) {
                return (o.range = (function (e) {
                  var n = e.measurements,
                    t = e.outerSize,
                    o = e.scrollOffset,
                    i = n.length - 1,
                    r = function (e) {
                      return n[e].start;
                    },
                    s = g(0, i, r, o),
                    l = s;
                  for (; l < i && n[l].end < o + t; ) l++;
                  return { startIndex: s, endIndex: l };
                })({ measurements: e, outerSize: n, scrollOffset: t }));
              },
              {
                key: !1,
                debug: function () {
                  return o.options.debug;
                },
              },
            )),
            (this.maybeNotify = s(
              function () {
                var e = o.calculateRange();
                return [e.startIndex, e.endIndex, o.isScrolling];
              },
              function () {
                o.notify();
              },
              {
                key: !1,
                debug: function () {
                  return o.options.debug;
                },
                initialDeps: [
                  this.range.startIndex,
                  this.range.endIndex,
                  this.isScrolling,
                ],
              },
            )),
            (this.getIndexes = s(
              function () {
                return [
                  o.options.rangeExtractor,
                  o.calculateRange(),
                  o.options.overscan,
                  o.options.count,
                  o.getSize(),
                ];
              },
              function (e, n, t, o, i) {
                return 0 === i ? [] : e(r({}, n, { overscan: t, count: o }));
              },
              {
                key: !1,
                debug: function () {
                  return o.options.debug;
                },
              },
            )),
            (this.indexFromElement = function (e) {
              var n = o.options.indexAttribute,
                t = e.getAttribute(n);
              return t
                ? parseInt(t, 10)
                : (console.warn(
                    "Missing attribute name '" +
                      n +
                      "={index}' on measured element.",
                  ),
                  -1);
            }),
            (this._measureElement = function (e, n) {
              var t = o.measurementsCache[o.indexFromElement(e)];
              if (t && e.isConnected) {
                var i = o.measureElementCache.get(t.key);
                i !== e &&
                  (i && o.observer.unobserve(i),
                  o.observer.observe(e),
                  o.measureElementCache.set(t.key, e));
                var r = o.options.measureElement(e, n, o);
                o.resizeItem(t, r);
              } else
                o.measureElementCache.forEach(function (n, t) {
                  n === e &&
                    (o.observer.unobserve(e), o.measureElementCache.delete(t));
                });
            }),
            (this.resizeItem = function (e, n) {
              var t,
                i = n - (null != (t = o.itemSizeCache.get(e.key)) ? t : e.size);
              0 !== i &&
                (e.start < o.scrollOffset &&
                  o._scrollToOffset(o.scrollOffset, {
                    adjustments: (o.scrollAdjustments += i),
                    behavior: void 0,
                  }),
                o.pendingMeasuredCacheIndexes.push(e.index),
                (o.itemSizeCache = new Map(o.itemSizeCache.set(e.key, n))),
                o.notify());
            }),
            (this.measureElement = function (e) {
              e && o._measureElement(e, void 0);
            }),
            (this.getVirtualItems = s(
              function () {
                return [o.getIndexes(), o.getMeasurements()];
              },
              function (e, n) {
                for (var t = [], o = 0, i = e.length; o < i; o++) {
                  var r = n[e[o]];
                  t.push(r);
                }
                return t;
              },
              {
                key: !1,
                debug: function () {
                  return o.options.debug;
                },
              },
            )),
            (this.getVirtualItemForOffset = function (e) {
              var n = o.getMeasurements();
              return l(
                n[
                  g(
                    0,
                    n.length - 1,
                    function (e) {
                      return l(n[e]).start;
                    },
                    e,
                  )
                ],
              );
            }),
            (this.getOffsetForAlignment = function (e, n) {
              var t = o.getSize();
              "auto" === n &&
                (n =
                  e <= o.scrollOffset
                    ? "start"
                    : e >= o.scrollOffset + t
                    ? "end"
                    : "start"),
                "start" === n ||
                  ("end" === n ? (e -= t) : "center" === n && (e -= t / 2));
              var i = o.options.horizontal ? "scrollWidth" : "scrollHeight",
                r =
                  (o.scrollElement
                    ? "document" in o.scrollElement
                      ? o.scrollElement.document.documentElement[i]
                      : o.scrollElement[i]
                    : 0) - o.getSize();
              return Math.max(Math.min(r, e), 0);
            }),
            (this.getOffsetForIndex = function (e, n) {
              void 0 === n && (n = "auto"),
                (e = Math.max(0, Math.min(e, o.options.count - 1)));
              var t = l(o.getMeasurements()[e]);
              if ("auto" === n)
                if (
                  t.end >=
                  o.scrollOffset + o.getSize() - o.options.scrollPaddingEnd
                )
                  n = "end";
                else {
                  if (
                    !(t.start <= o.scrollOffset + o.options.scrollPaddingStart)
                  )
                    return [o.scrollOffset, n];
                  n = "start";
                }
              var i =
                "end" === n
                  ? t.end + o.options.scrollPaddingEnd
                  : t.start - o.options.scrollPaddingStart;
              return [o.getOffsetForAlignment(i, n), n];
            }),
            (this.isDynamicMode = function () {
              return o.measureElementCache.size > 0;
            }),
            (this.cancelScrollToIndex = function () {
              null !== o.scrollToIndexTimeoutId &&
                (clearTimeout(o.scrollToIndexTimeoutId),
                (o.scrollToIndexTimeoutId = null));
            }),
            (this.scrollToOffset = function (e, n) {
              var t = void 0 === n ? {} : n,
                i = t.align,
                r = void 0 === i ? "start" : i,
                s = t.behavior;
              o.cancelScrollToIndex(),
                "smooth" === s &&
                  o.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                o._scrollToOffset(o.getOffsetForAlignment(e, r), {
                  adjustments: void 0,
                  behavior: s,
                });
            }),
            (this.scrollToIndex = function (e, n) {
              var t = void 0 === n ? {} : n,
                i = t.align,
                r = void 0 === i ? "auto" : i,
                s = t.behavior;
              (e = Math.max(0, Math.min(e, o.options.count - 1))),
                o.cancelScrollToIndex(),
                "smooth" === s &&
                  o.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  );
              var l = o.getOffsetForIndex(e, r),
                a = l[0],
                u = l[1];
              o._scrollToOffset(a, { adjustments: void 0, behavior: s }),
                "smooth" !== s &&
                  o.isDynamicMode() &&
                  (o.scrollToIndexTimeoutId = setTimeout(function () {
                    var n, t;
                    if (
                      ((o.scrollToIndexTimeoutId = null),
                      o.measureElementCache.has(o.options.getItemKey(e)))
                    ) {
                      var i = o.getOffsetForIndex(e, u)[0];
                      (n = i),
                        (t = o.scrollOffset),
                        Math.abs(n - t) < 1 ||
                          o.scrollToIndex(e, { align: u, behavior: s });
                    } else o.scrollToIndex(e, { align: u, behavior: s });
                  }));
            }),
            (this.scrollBy = function (e, n) {
              var t = (void 0 === n ? {} : n).behavior;
              o.cancelScrollToIndex(),
                "smooth" === t &&
                  o.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                o._scrollToOffset(o.scrollOffset + e, {
                  adjustments: void 0,
                  behavior: t,
                });
            }),
            (this.getTotalSize = function () {
              var e;
              return (
                ((null == (e = o.getMeasurements()[o.options.count - 1])
                  ? void 0
                  : e.end) || o.options.paddingStart) -
                o.options.scrollMargin +
                o.options.paddingEnd
              );
            }),
            (this._scrollToOffset = function (e, n) {
              var t = n.adjustments,
                i = n.behavior;
              o.options.scrollToFn(e, { behavior: i, adjustments: t }, o);
            }),
            (this.measure = function () {
              (o.itemSizeCache = new Map()), o.notify();
            }),
            this.setOptions(e),
            (this.scrollRect = this.options.initialRect),
            (this.scrollOffset = this.options.initialOffset),
            (this.measurementsCache = this.options.initialMeasurementsCache),
            this.measurementsCache.forEach(function (e) {
              o.itemSizeCache.set(e.key, e.size);
            }),
            this.maybeNotify();
        },
        g = function (e, n, t, o) {
          for (; e <= n; ) {
            var i = ((e + n) / 2) | 0,
              r = t(i);
            if (r < o) e = i + 1;
            else {
              if (!(r > o)) return i;
              n = i - 1;
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
      var v = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function p(e) {
        var n = i.useReducer(function () {
            return {};
          }, {})[1],
          t = o({}, e, {
            onChange: function (t) {
              n(), null == e.onChange || e.onChange(t);
            },
          }),
          r = i.useState(function () {
            return new m(t);
          })[0];
        return (
          r.setOptions(t),
          i.useEffect(function () {
            return r._didMount();
          }, []),
          v(function () {
            return r._willUpdate();
          }),
          r
        );
      }
      function b(e) {
        return p(
          o(
            { observeElementRect: c, observeElementOffset: d, scrollToFn: h },
            e,
          ),
        );
      }
    },
  },
]);

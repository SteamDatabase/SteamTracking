/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [576],
  {
    58632: (e) => {
      var n,
        t = (function () {
          function e(e, n) {
            if ("function" != typeof e)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  e +
                  ".",
              );
            (this._batchLoadFn = e),
              (this._maxBatchSize = (function (e) {
                var n = !e || !1 !== e.batch;
                if (!n) return 1;
                var t = e && e.maxBatchSize;
                if (void 0 === t) return 1 / 0;
                if ("number" != typeof t || t < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + t,
                  );
                return t;
              })(n)),
              (this._batchScheduleFn = (function (e) {
                var n = e && e.batchScheduleFn;
                if (void 0 === n) return r;
                if ("function" != typeof n)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + n,
                  );
                return n;
              })(n)),
              (this._cacheKeyFn = (function (e) {
                var n = e && e.cacheKeyFn;
                if (void 0 === n)
                  return function (e) {
                    return e;
                  };
                if ("function" != typeof n)
                  throw new TypeError("cacheKeyFn must be a function: " + n);
                return n;
              })(n)),
              (this._cacheMap = (function (e) {
                var n = !e || !1 !== e.cache;
                if (!n) return null;
                var t = e && e.cacheMap;
                if (void 0 === t) return new Map();
                if (null !== t) {
                  var r = ["get", "set", "delete", "clear"].filter(
                    function (e) {
                      return t && "function" != typeof t[e];
                    },
                  );
                  if (0 !== r.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + r.join(", "),
                    );
                }
                return t;
              })(n)),
              (this._batch = null),
              (this.name = (function (e) {
                if (e && e.name) return e.name;
                return null;
              })(n));
          }
          var n = e.prototype;
          return (
            (n.load = function (e) {
              if (null == e)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(e) +
                    ".",
                );
              var n = (function (e) {
                  var n = e._batch;
                  if (
                    null !== n &&
                    !n.hasDispatched &&
                    n.keys.length < e._maxBatchSize
                  )
                    return n;
                  var t = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = t),
                    e._batchScheduleFn(function () {
                      !(function (e, n) {
                        if (((n.hasDispatched = !0), 0 === n.keys.length))
                          return void i(n);
                        var t;
                        try {
                          t = e._batchLoadFn(n.keys);
                        } catch (t) {
                          return o(
                            e,
                            n,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(t) +
                                ".",
                            ),
                          );
                        }
                        if (!t || "function" != typeof t.then)
                          return o(
                            e,
                            n,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(t) +
                                ".",
                            ),
                          );
                        t.then(function (e) {
                          if (!s(e))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(e) +
                                ".",
                            );
                          if (e.length !== n.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(n.keys) +
                                "\n\nValues:\n" +
                                String(e),
                            );
                          i(n);
                          for (var t = 0; t < n.callbacks.length; t++) {
                            var r = e[t];
                            r instanceof Error
                              ? n.callbacks[t].reject(r)
                              : n.callbacks[t].resolve(r);
                          }
                        }).catch(function (t) {
                          o(e, n, t);
                        });
                      })(e, t);
                    }),
                    t
                  );
                })(this),
                t = this._cacheMap,
                r = this._cacheKeyFn(e);
              if (t) {
                var a = t.get(r);
                if (a) {
                  var l = n.cacheHits || (n.cacheHits = []);
                  return new Promise(function (e) {
                    l.push(function () {
                      e(a);
                    });
                  });
                }
              }
              n.keys.push(e);
              var c = new Promise(function (e, t) {
                n.callbacks.push({ resolve: e, reject: t });
              });
              return t && t.set(r, c), c;
            }),
            (n.loadMany = function (e) {
              if (!s(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    ".",
                );
              for (var n = [], t = 0; t < e.length; t++)
                n.push(
                  this.load(e[t]).catch(function (e) {
                    return e;
                  }),
                );
              return Promise.all(n);
            }),
            (n.clear = function (e) {
              var n = this._cacheMap;
              if (n) {
                var t = this._cacheKeyFn(e);
                n.delete(t);
              }
              return this;
            }),
            (n.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (n.prime = function (e, n) {
              var t = this._cacheMap;
              if (t) {
                var r,
                  o = this._cacheKeyFn(e);
                if (void 0 === t.get(o))
                  n instanceof Error
                    ? (r = Promise.reject(n)).catch(function () {})
                    : (r = Promise.resolve(n)),
                    t.set(o, r);
              }
              return this;
            }),
            e
          );
        })(),
        r =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (e) {
                n || (n = Promise.resolve()),
                  n.then(function () {
                    process.nextTick(e);
                  });
              }
            : "function" == typeof setImmediate
              ? function (e) {
                  setImmediate(e);
                }
              : function (e) {
                  setTimeout(e);
                };
      function o(e, n, t) {
        i(n);
        for (var r = 0; r < n.keys.length; r++)
          e.clear(n.keys[r]), n.callbacks[r].reject(t);
      }
      function i(e) {
        if (e.cacheHits)
          for (var n = 0; n < e.cacheHits.length; n++) e.cacheHits[n]();
      }
      function s(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "number" == typeof e.length &&
          (0 === e.length ||
            (e.length > 0 &&
              Object.prototype.hasOwnProperty.call(e, e.length - 1)))
        );
      }
      e.exports = t;
    },
    7078: (e, n, t) => {
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
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          r.apply(this, arguments)
        );
      }
      t.d(n, { Te: () => S, XW: () => T });
      var o = t(90626),
        i = t(72739);
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
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                }
                return e;
              }),
          s.apply(this, arguments)
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
      function a(e, n, t) {
        var r,
          o,
          i = null != (r = t.initialDeps) ? r : [];
        return function () {
          var r;
          t.key && null != t.debug && t.debug() && (r = Date.now());
          var s,
            a = e();
          if (
            !(
              a.length !== i.length ||
              a.some(function (e, n) {
                return i[n] !== e;
              })
            )
          )
            return o;
          if (
            ((i = a),
            t.key && null != t.debug && t.debug() && (s = Date.now()),
            (o = n.apply(void 0, a)),
            t.key && null != t.debug && t.debug())
          ) {
            var l = Math.round(100 * (Date.now() - r)) / 100,
              c = Math.round(100 * (Date.now() - s)) / 100,
              u = c / 16,
              f = function (e, n) {
                for (e = String(e); e.length < n; ) e = " " + e;
                return e;
              };
            console.info(
              "%c⏱ " + f(c, 5) + " /" + f(l, 5) + " ms",
              "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" +
                Math.max(0, Math.min(120 - 120 * u, 120)) +
                "deg 100% 31%);",
              null == t ? void 0 : t.key,
            );
          }
          return null == t || null == t.onChange || t.onChange(o), o;
        };
      }
      function l(e, n) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (n ? ": " + n : ""));
        return e;
      }
      var c = function (e) {
          return e;
        },
        u = function (e) {
          for (
            var n = Math.max(e.startIndex - e.overscan, 0),
              t = Math.min(e.endIndex + e.overscan, e.count - 1),
              r = [],
              o = n;
            o <= t;
            o++
          )
            r.push(o);
          return r;
        },
        f = function (e, n) {
          var t = e.scrollElement;
          if (t) {
            var r = function (e) {
              var t = e.width,
                r = e.height;
              n({ width: Math.round(t), height: Math.round(r) });
            };
            r(t.getBoundingClientRect());
            var o = new ResizeObserver(function (e) {
              var n = e[0];
              if (null != n && n.borderBoxSize) {
                var o = n.borderBoxSize[0];
                if (o)
                  return void r({ width: o.inlineSize, height: o.blockSize });
              }
              r(t.getBoundingClientRect());
            });
            return (
              o.observe(t, { box: "border-box" }),
              function () {
                o.unobserve(t);
              }
            );
          }
        },
        h = function (e, n) {
          var t = e.scrollElement;
          if (t) {
            var r = function () {
              n({ width: t.innerWidth, height: t.innerHeight });
            };
            return (
              r(),
              t.addEventListener("resize", r, { passive: !0 }),
              function () {
                t.removeEventListener("resize", r);
              }
            );
          }
        },
        d = function (e, n) {
          var t = e.scrollElement;
          if (t) {
            var r = function () {
              n(t[e.options.horizontal ? "scrollLeft" : "scrollTop"]);
            };
            return (
              r(),
              t.addEventListener("scroll", r, { passive: !0 }),
              function () {
                t.removeEventListener("scroll", r);
              }
            );
          }
        },
        m = function (e, n) {
          var t = e.scrollElement;
          if (t) {
            var r = function () {
              n(t[e.options.horizontal ? "scrollX" : "scrollY"]);
            };
            return (
              r(),
              t.addEventListener("scroll", r, { passive: !0 }),
              function () {
                t.removeEventListener("scroll", r);
              }
            );
          }
        },
        v = function (e, n, t) {
          if (null != n && n.borderBoxSize) {
            var r = n.borderBoxSize[0];
            if (r)
              return Math.round(
                r[t.options.horizontal ? "inlineSize" : "blockSize"],
              );
          }
          return Math.round(
            e.getBoundingClientRect()[
              t.options.horizontal ? "width" : "height"
            ],
          );
        },
        g = function (e, n, t) {
          var r,
            o,
            i = n.adjustments,
            s = void 0 === i ? 0 : i,
            a = n.behavior,
            l = e + s;
          null == (r = t.scrollElement) ||
            null == r.scrollTo ||
            r.scrollTo(
              (((o = {})[t.options.horizontal ? "left" : "top"] = l),
              (o.behavior = a),
              o),
            );
        },
        p = function (e, n, t) {
          var r,
            o,
            i = n.adjustments,
            s = void 0 === i ? 0 : i,
            a = n.behavior,
            l = e + s;
          null == (r = t.scrollElement) ||
            null == r.scrollTo ||
            r.scrollTo(
              (((o = {})[t.options.horizontal ? "left" : "top"] = l),
              (o.behavior = a),
              o),
            );
        },
        b = function (e) {
          var n,
            t,
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
              ((n = null),
              (t = function () {
                return (
                  n ||
                  ("undefined" != typeof ResizeObserver
                    ? (n = new ResizeObserver(function (e) {
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
            (this.range = null),
            (this.setOptions = function (e) {
              Object.entries(e).forEach(function (n) {
                var t = n[0];
                void 0 === n[1] && delete e[t];
              }),
                (r.options = s(
                  {
                    debug: !1,
                    initialOffset: 0,
                    overscan: 1,
                    paddingStart: 0,
                    paddingEnd: 0,
                    scrollPaddingStart: 0,
                    scrollPaddingEnd: 0,
                    horizontal: !1,
                    getItemKey: c,
                    rangeExtractor: u,
                    onChange: function () {},
                    measureElement: v,
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
            (this.maybeNotify = a(
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
            (this.memoOptions = a(
              function () {
                return [
                  r.options.count,
                  r.options.paddingStart,
                  r.options.scrollMargin,
                  r.options.getItemKey,
                ];
              },
              function (e, n, t, o) {
                return (
                  (r.pendingMeasuredCacheIndexes = []),
                  { count: e, paddingStart: n, scrollMargin: t, getItemKey: o }
                );
              },
              { key: !1 },
            )),
            (this.getFurthestMeasurement = function (e, n) {
              for (var t = new Map(), o = new Map(), i = n - 1; i >= 0; i--) {
                var s = e[i];
                if (!t.has(s.lane)) {
                  var a = o.get(s.lane);
                  if (
                    (null == a || s.end > a.end
                      ? o.set(s.lane, s)
                      : s.end < a.end && t.set(s.lane, !0),
                    t.size === r.options.lanes)
                  )
                    break;
                }
              }
              return o.size === r.options.lanes
                ? Array.from(o.values()).sort(function (e, n) {
                    return e.end - n.end;
                  })[0]
                : void 0;
            }),
            (this.getMeasurements = a(
              function () {
                return [r.memoOptions(), r.itemSizeCache];
              },
              function (e, n) {
                var t = e.count,
                  o = e.paddingStart,
                  i = e.scrollMargin,
                  s = e.getItemKey,
                  a =
                    r.pendingMeasuredCacheIndexes.length > 0
                      ? Math.min.apply(Math, r.pendingMeasuredCacheIndexes)
                      : 0;
                r.pendingMeasuredCacheIndexes = [];
                for (
                  var l = r.measurementsCache.slice(0, a), c = a;
                  c < t;
                  c++
                ) {
                  var u = s(c),
                    f =
                      1 === r.options.lanes
                        ? l[c - 1]
                        : r.getFurthestMeasurement(l, c),
                    h = f ? f.end : o + i,
                    d = n.get(u),
                    m = "number" == typeof d ? d : r.options.estimateSize(c),
                    v = h + m,
                    g = f ? f.lane : c % r.options.lanes;
                  l[c] = {
                    index: c,
                    start: h,
                    size: m,
                    end: v,
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
            (this.calculateRange = a(
              function () {
                return [r.getMeasurements(), r.getSize(), r.scrollOffset];
              },
              function (e, n, t) {
                return (r.range =
                  e.length > 0 && n > 0
                    ? (function (e) {
                        var n = e.measurements,
                          t = e.outerSize,
                          r = e.scrollOffset,
                          o = n.length - 1,
                          i = function (e) {
                            return n[e].start;
                          },
                          s = y(0, o, i, r),
                          a = s;
                        for (; a < o && n[a].end < r + t; ) a++;
                        return { startIndex: s, endIndex: a };
                      })({ measurements: e, outerSize: n, scrollOffset: t })
                    : null);
              },
              {
                key: !1,
                debug: function () {
                  return r.options.debug;
                },
              },
            )),
            (this.getIndexes = a(
              function () {
                return [
                  r.options.rangeExtractor,
                  r.calculateRange(),
                  r.options.overscan,
                  r.options.count,
                ];
              },
              function (e, n, t, r) {
                return null === n ? [] : e(s({}, n, { overscan: t, count: r }));
              },
              {
                key: !1,
                debug: function () {
                  return r.options.debug;
                },
              },
            )),
            (this.indexFromElement = function (e) {
              var n = r.options.indexAttribute,
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
              var t = r.measurementsCache[r.indexFromElement(e)];
              if (t && e.isConnected) {
                var o = r.measureElementCache.get(t.key);
                o !== e &&
                  (o && r.observer.unobserve(o),
                  r.observer.observe(e),
                  r.measureElementCache.set(t.key, e));
                var i = r.options.measureElement(e, n, r);
                r.resizeItem(t, i);
              } else
                r.measureElementCache.forEach(function (n, t) {
                  n === e &&
                    (r.observer.unobserve(e), r.measureElementCache.delete(t));
                });
            }),
            (this.resizeItem = function (e, n) {
              var t,
                o = n - (null != (t = r.itemSizeCache.get(e.key)) ? t : e.size);
              0 !== o &&
                (e.start < r.scrollOffset &&
                  r._scrollToOffset(r.scrollOffset, {
                    adjustments: (r.scrollAdjustments += o),
                    behavior: void 0,
                  }),
                r.pendingMeasuredCacheIndexes.push(e.index),
                (r.itemSizeCache = new Map(r.itemSizeCache.set(e.key, n))),
                r.notify(!1));
            }),
            (this.measureElement = function (e) {
              e && r._measureElement(e, void 0);
            }),
            (this.getVirtualItems = a(
              function () {
                return [r.getIndexes(), r.getMeasurements()];
              },
              function (e, n) {
                for (var t = [], r = 0, o = e.length; r < o; r++) {
                  var i = n[e[r]];
                  t.push(i);
                }
                return t;
              },
              {
                key: !1,
                debug: function () {
                  return r.options.debug;
                },
              },
            )),
            (this.getVirtualItemForOffset = function (e) {
              var n = r.getMeasurements();
              return l(
                n[
                  y(
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
              var t = r.getSize();
              "auto" === n &&
                (n =
                  e <= r.scrollOffset
                    ? "start"
                    : e >= r.scrollOffset + t
                      ? "end"
                      : "start"),
                "start" === n ||
                  ("end" === n ? (e -= t) : "center" === n && (e -= t / 2));
              var o = r.options.horizontal ? "scrollWidth" : "scrollHeight",
                i =
                  (r.scrollElement
                    ? "document" in r.scrollElement
                      ? r.scrollElement.document.documentElement[o]
                      : r.scrollElement[o]
                    : 0) - r.getSize();
              return Math.max(Math.min(i, e), 0);
            }),
            (this.getOffsetForIndex = function (e, n) {
              void 0 === n && (n = "auto"),
                (e = Math.max(0, Math.min(e, r.options.count - 1)));
              var t = l(r.getMeasurements()[e]);
              if ("auto" === n)
                if (
                  t.end >=
                  r.scrollOffset + r.getSize() - r.options.scrollPaddingEnd
                )
                  n = "end";
                else {
                  if (
                    !(t.start <= r.scrollOffset + r.options.scrollPaddingStart)
                  )
                    return [r.scrollOffset, n];
                  n = "start";
                }
              var o =
                "end" === n
                  ? t.end + r.options.scrollPaddingEnd
                  : t.start - r.options.scrollPaddingStart;
              return [r.getOffsetForAlignment(o, n), n];
            }),
            (this.isDynamicMode = function () {
              return r.measureElementCache.size > 0;
            }),
            (this.cancelScrollToIndex = function () {
              null !== r.scrollToIndexTimeoutId &&
                (clearTimeout(r.scrollToIndexTimeoutId),
                (r.scrollToIndexTimeoutId = null));
            }),
            (this.scrollToOffset = function (e, n) {
              var t = void 0 === n ? {} : n,
                o = t.align,
                i = void 0 === o ? "start" : o,
                s = t.behavior;
              r.cancelScrollToIndex(),
                "smooth" === s &&
                  r.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                r._scrollToOffset(r.getOffsetForAlignment(e, i), {
                  adjustments: void 0,
                  behavior: s,
                });
            }),
            (this.scrollToIndex = function (e, n) {
              var t = void 0 === n ? {} : n,
                o = t.align,
                i = void 0 === o ? "auto" : o,
                s = t.behavior;
              (e = Math.max(0, Math.min(e, r.options.count - 1))),
                r.cancelScrollToIndex(),
                "smooth" === s &&
                  r.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  );
              var a = r.getOffsetForIndex(e, i),
                l = a[0],
                c = a[1];
              r._scrollToOffset(l, { adjustments: void 0, behavior: s }),
                "smooth" !== s &&
                  r.isDynamicMode() &&
                  (r.scrollToIndexTimeoutId = setTimeout(function () {
                    var n, t;
                    if (
                      ((r.scrollToIndexTimeoutId = null),
                      r.measureElementCache.has(r.options.getItemKey(e)))
                    ) {
                      var o = r.getOffsetForIndex(e, c)[0];
                      (n = o),
                        (t = r.scrollOffset),
                        Math.abs(n - t) < 1 ||
                          r.scrollToIndex(e, { align: c, behavior: s });
                    } else r.scrollToIndex(e, { align: c, behavior: s });
                  }));
            }),
            (this.scrollBy = function (e, n) {
              var t = (void 0 === n ? {} : n).behavior;
              r.cancelScrollToIndex(),
                "smooth" === t &&
                  r.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                r._scrollToOffset(r.scrollOffset + e, {
                  adjustments: void 0,
                  behavior: t,
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
            (this._scrollToOffset = function (e, n) {
              var t = n.adjustments,
                o = n.behavior;
              r.options.scrollToFn(e, { behavior: o, adjustments: t }, r);
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
        y = function (e, n, t, r) {
          for (; e <= n; ) {
            var o = ((e + n) / 2) | 0,
              i = t(o);
            if (i < r) e = o + 1;
            else {
              if (!(i > r)) return o;
              n = o - 1;
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
      var w = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function E(e) {
        var n = o.useReducer(function () {
            return {};
          }, {})[1],
          t = r({}, e, {
            onChange: function (t, r) {
              r ? (0, i.flushSync)(n) : n(),
                null == e.onChange || e.onChange(t, r);
            },
          }),
          s = o.useState(function () {
            return new b(t);
          })[0];
        return (
          s.setOptions(t),
          o.useEffect(function () {
            return s._didMount();
          }, []),
          w(function () {
            return s._willUpdate();
          }),
          s
        );
      }
      function S(e) {
        return E(
          r(
            { observeElementRect: f, observeElementOffset: d, scrollToFn: p },
            e,
          ),
        );
      }
      function T(e) {
        return E(
          r(
            {
              getScrollElement: function () {
                return "undefined" != typeof document ? window : null;
              },
              observeElementRect: h,
              observeElementOffset: m,
              scrollToFn: g,
              initialOffset:
                "undefined" != typeof document ? window.scrollY : void 0,
            },
            e,
          ),
        );
      }
    },
  },
]);

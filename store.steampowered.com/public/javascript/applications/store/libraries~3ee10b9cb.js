/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8820],
  {
    38938: (e) => {
      e.exports = {
        AppGridItem: "appgrid_AppGridItem_3Ti0O",
        NoImage: "appgrid_NoImage_ccEyP",
        Capsule: "appgrid_Capsule_1FHOJ",
        Selectable: "appgrid_Selectable_1coM2",
        Label: "appgrid_Label_1vlhD",
      };
    },
    64666: (e) => {
      e.exports = {
        VirtualizedGridWrapper: "virtualizedgrid_VirtualizedGridWrapper_1FuQ7",
        VirtualizedGridRow: "virtualizedgrid_VirtualizedGridRow_1aH3s",
      };
    },
    401: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => E });
      var o = n(33940),
        r = n(89526),
        i = n(32765),
        s = n(19304);
      const l =
        n.p +
        "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
      var a = n(38938),
        u = n(9353),
        c = n(4306),
        d = n(64666),
        f = n(60161);
      function h(e) {
        const {
            idxStart: t,
            idxEnd: n,
            renderItem: o,
            height: i,
            rowGap: s,
            itemWidth: l,
            columnGap: a,
            position: u,
          } = e,
          c = [];
        for (let e = t; e < n; e++) c.push(o(e, l));
        return r.createElement(
          "div",
          {
            className: d.VirtualizedGridRow,
            style: {
              height: i,
              paddingBottom: s,
              gap: a,
              position: "absolute",
              top: 0,
              left: 0,
              transform: `translateY( ${u}px`,
            },
          },
          c,
        );
      }
      function m(e) {
        const {
            nItems: t,
            renderItem: n,
            nAspectRatio: o,
            nColumns: i = 7,
            nColumnGap: s = 10,
            nRowGap: l = 10,
          } = e,
          a = r.useRef(),
          [u, h] = r.useState(0),
          m = a.current && (0, f.Et)(a.current, "y"),
          v = Math.ceil(t / i),
          b = Math.floor((u - (i - 1) * s) / i),
          E = Math.floor(b / o) + l,
          I = r.useCallback((e) => {
            h(e.borderBoxSize[0].inlineSize);
          }, []),
          y = (0, c.yU)(I),
          z = (0, c.BE)(a, y);
        return r.createElement(
          "div",
          { className: d.VirtualizedGridOuter, ref: z },
          m &&
            r.createElement(g, {
              renderItem: n,
              nItems: t,
              nColumns: i,
              nColumnGap: s,
              nRowGap: l,
              nRows: v,
              elScrollable: m,
              nRowHeight: E,
              nItemWidth: b,
            }),
          a.current &&
            !m &&
            r.createElement(p, {
              renderItem: n,
              nItems: t,
              nColumns: i,
              nColumnGap: s,
              nRowGap: l,
              nRows: v,
              containerRef: a,
              nRowHeight: E,
              nItemWidth: b,
            }),
        );
      }
      function p(e) {
        var t;
        const { containerRef: n, nRows: i, nRowHeight: s } = e,
          l = (0, o._T)(e, ["containerRef", "nRows", "nRowHeight"]),
          a = (0, u.hO)({
            count: i,
            scrollMargin:
              null === (t = n.current) || void 0 === t ? void 0 : t.offsetTop,
            estimateSize: r.useCallback(() => s, [s]),
            overscan: 6,
          });
        return (
          r.useEffect(() => {
            a.measure();
          }, [a, s]),
          r.createElement(v, Object.assign({}, l, { virtualizer: a }))
        );
      }
      function g(e) {
        const { nRows: t, elScrollable: n, nRowHeight: i } = e,
          s = (0, o._T)(e, ["nRows", "elScrollable", "nRowHeight"]),
          l = (0, u.MG)({
            count: t,
            getScrollElement: () => n,
            estimateSize: r.useCallback(() => i, [i]),
            overscan: 5,
          });
        return (
          r.useEffect(() => {
            l.measure();
          }, [l, i]),
          r.createElement(v, Object.assign({}, s, { virtualizer: l }))
        );
      }
      function v(e) {
        const {
            nItems: t,
            nColumns: n,
            nColumnGap: i,
            nRowGap: s,
            nItemWidth: l,
            virtualizer: a,
          } = e,
          u = (0, o._T)(e, [
            "nItems",
            "nColumns",
            "nColumnGap",
            "nRowGap",
            "nItemWidth",
            "virtualizer",
          ]);
        return r.createElement(
          "div",
          {
            className: d.VirtualizedGridWrapper,
            style: {
              height: a.getTotalSize(),
              width: "100%",
              position: "relative",
            },
          },
          a
            .getVirtualItems()
            .map((e) =>
              r.createElement(
                h,
                Object.assign(
                  {
                    key: e.key,
                    idxStart: e.index * n,
                    idxEnd: Math.min(t, (e.index + 1) * n),
                    height: e.size,
                    rowGap: s,
                    itemWidth: l,
                    columnGap: i,
                    position: e.start - a.options.scrollMargin,
                  },
                  u,
                ),
              ),
            ),
        );
      }
      function b(e) {
        const {
            app: t,
            width: n,
            index: o,
            onSelect: u,
            renderChildren: c,
            getClassName: d,
          } = e,
          [f, h] = r.useState(0),
          m = i.De.STORE_ICON_BASE_URL;
        let p = [
          `${m}${t.appid}/library_600x900.jpg`,
          `${m}${t.appid}/portrait.png`,
          l,
        ];
        e.app.localized_capsule_filename &&
          (p = [`${m}${t.appid}/${e.app.localized_capsule_filename}`, ...p]);
        return r.createElement(
          "div",
          {
            className: (0, s.Z)(
              a.AppGridItem,
              f == p.length && a.NoImage,
              !!u && a.Selectable,
              d && d(t, o),
            ),
            style: { width: n },
            onClick: u ? () => u(t, o) : void 0,
          },
          f < p.length &&
            r.createElement("img", {
              className: a.Capsule,
              onError: () => {
                f < p.length && h((e) => e + 1);
              },
              src: p[f],
              alt: t.name,
              loading: "lazy",
            }),
          f == p.length - 1 &&
            r.createElement("div", { className: a.Label }, t.name),
          c && c(t, o),
        );
      }
      function E(e) {
        const {
            rgApps: t,
            onSelect: n,
            renderChildren: i,
            getClassName: s,
          } = e,
          l = (0, o._T)(e, [
            "rgApps",
            "onSelect",
            "renderChildren",
            "getClassName",
          ]),
          a = r.useCallback(
            (e, o) => {
              const l = t[e];
              return r.createElement(b, {
                key: l.appid,
                app: l,
                width: o,
                index: e,
                onSelect: n,
                renderChildren: i,
                getClassName: s,
              });
            },
            [t, n, i, s],
          );
        return r.createElement(
          m,
          Object.assign(
            { nItems: t.length, renderItem: a, nAspectRatio: 600 / 900 },
            l,
          ),
        );
      }
    },
    9353: (e, t, n) => {
      "use strict";
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
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      n.d(t, { MG: () => y, hO: () => z });
      var r = n(89526);
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
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }),
          i.apply(this, arguments)
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
      function s(e, t, n) {
        var o,
          r,
          i = null != (o = n.initialDeps) ? o : [];
        return function () {
          var o;
          n.key && null != n.debug && n.debug() && (o = Date.now());
          var s,
            l = e();
          if (
            !(
              l.length !== i.length ||
              l.some(function (e, t) {
                return i[t] !== e;
              })
            )
          )
            return r;
          if (
            ((i = l),
            n.key && null != n.debug && n.debug() && (s = Date.now()),
            (r = t.apply(void 0, l)),
            n.key && null != n.debug && n.debug())
          ) {
            var a = Math.round(100 * (Date.now() - o)) / 100,
              u = Math.round(100 * (Date.now() - s)) / 100,
              c = u / 16,
              d = function (e, t) {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              "%c⏱ " + d(u, 5) + " /" + d(a, 5) + " ms",
              "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" +
                Math.max(0, Math.min(120 - 120 * c, 120)) +
                "deg 100% 31%);",
              null == n ? void 0 : n.key,
            );
          }
          return null == n || null == n.onChange || n.onChange(r), r;
        };
      }
      function l(e, t) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (t ? ": " + t : ""));
        return e;
      }
      var a = function (e) {
          return e;
        },
        u = function (e) {
          for (
            var t = Math.max(e.startIndex - e.overscan, 0),
              n = Math.min(e.endIndex + e.overscan, e.count - 1),
              o = [],
              r = t;
            r <= n;
            r++
          )
            o.push(r);
          return o;
        },
        c = function (e, t) {
          var n = e.scrollElement;
          if (n) {
            var o = function (e) {
              var n = e.width,
                o = e.height;
              t({ width: Math.round(n), height: Math.round(o) });
            };
            o(n.getBoundingClientRect());
            var r = new ResizeObserver(function (e) {
              var t = e[0];
              if (null != t && t.borderBoxSize) {
                var r = t.borderBoxSize[0];
                if (r)
                  return void o({ width: r.inlineSize, height: r.blockSize });
              }
              o(n.getBoundingClientRect());
            });
            return (
              r.observe(n, { box: "border-box" }),
              function () {
                r.unobserve(n);
              }
            );
          }
        },
        d = function (e, t) {
          var n = e.scrollElement;
          if (n) {
            var o = function () {
              t({ width: n.innerWidth, height: n.innerHeight });
            };
            return (
              o(),
              n.addEventListener("resize", o, { passive: !0 }),
              function () {
                n.removeEventListener("resize", o);
              }
            );
          }
        },
        f = function (e, t) {
          var n = e.scrollElement;
          if (n) {
            var o = function () {
              t(n[e.options.horizontal ? "scrollLeft" : "scrollTop"]);
            };
            return (
              o(),
              n.addEventListener("scroll", o, { passive: !0 }),
              function () {
                n.removeEventListener("scroll", o);
              }
            );
          }
        },
        h = function (e, t) {
          var n = e.scrollElement;
          if (n) {
            var o = function () {
              t(n[e.options.horizontal ? "scrollX" : "scrollY"]);
            };
            return (
              o(),
              n.addEventListener("scroll", o, { passive: !0 }),
              function () {
                n.removeEventListener("scroll", o);
              }
            );
          }
        },
        m = function (e, t, n) {
          if (null != t && t.borderBoxSize) {
            var o = t.borderBoxSize[0];
            if (o)
              return Math.round(
                o[n.options.horizontal ? "inlineSize" : "blockSize"],
              );
          }
          return Math.round(
            e.getBoundingClientRect()[
              n.options.horizontal ? "width" : "height"
            ],
          );
        },
        p = function (e, t, n) {
          var o,
            r,
            i = t.adjustments,
            s = void 0 === i ? 0 : i,
            l = t.behavior,
            a = e + s;
          null == (o = n.scrollElement) ||
            null == o.scrollTo ||
            o.scrollTo(
              (((r = {})[n.options.horizontal ? "left" : "top"] = a),
              (r.behavior = l),
              r),
            );
        },
        g = function (e, t, n) {
          var o,
            r,
            i = t.adjustments,
            s = void 0 === i ? 0 : i,
            l = t.behavior,
            a = e + s;
          null == (o = n.scrollElement) ||
            null == o.scrollTo ||
            o.scrollTo(
              (((r = {})[n.options.horizontal ? "left" : "top"] = a),
              (r.behavior = l),
              r),
            );
        },
        v = function (e) {
          var t,
            n,
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
              ((t = null),
              (n = function () {
                return (
                  t ||
                  ("undefined" != typeof ResizeObserver
                    ? (t = new ResizeObserver(function (e) {
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
            (this.range = { startIndex: 0, endIndex: 0 }),
            (this.setOptions = function (e) {
              Object.entries(e).forEach(function (t) {
                var n = t[0];
                void 0 === t[1] && delete e[n];
              }),
                (o.options = i(
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
                    measureElement: m,
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
                    var t = o.scrollRect;
                    (o.scrollRect = e),
                      (o.options.horizontal
                        ? e.width !== t.width
                        : e.height !== t.height) && o.maybeNotify();
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
              function (e, t, n, r) {
                return (
                  (o.pendingMeasuredCacheIndexes = []),
                  { count: e, paddingStart: t, scrollMargin: n, getItemKey: r }
                );
              },
              { key: !1 },
            )),
            (this.getFurthestMeasurement = function (e, t) {
              for (var n = new Map(), r = new Map(), i = t - 1; i >= 0; i--) {
                var s = e[i];
                if (!n.has(s.lane)) {
                  var l = r.get(s.lane);
                  if (
                    (null == l || s.end > l.end
                      ? r.set(s.lane, s)
                      : s.end < l.end && n.set(s.lane, !0),
                    n.size === o.options.lanes)
                  )
                    break;
                }
              }
              return r.size === o.options.lanes
                ? Array.from(r.values()).sort(function (e, t) {
                    return e.end - t.end;
                  })[0]
                : void 0;
            }),
            (this.getMeasurements = s(
              function () {
                return [o.memoOptions(), o.itemSizeCache];
              },
              function (e, t) {
                var n = e.count,
                  r = e.paddingStart,
                  i = e.scrollMargin,
                  s = e.getItemKey,
                  l =
                    o.pendingMeasuredCacheIndexes.length > 0
                      ? Math.min.apply(Math, o.pendingMeasuredCacheIndexes)
                      : 0;
                o.pendingMeasuredCacheIndexes = [];
                for (
                  var a = o.measurementsCache.slice(0, l), u = l;
                  u < n;
                  u++
                ) {
                  var c = s(u),
                    d =
                      1 === o.options.lanes
                        ? a[u - 1]
                        : o.getFurthestMeasurement(a, u),
                    f = d ? d.end : r + i,
                    h = t.get(c),
                    m = "number" == typeof h ? h : o.options.estimateSize(u),
                    p = f + m,
                    g = d ? d.lane : u % o.options.lanes;
                  a[u] = {
                    index: u,
                    start: f,
                    size: m,
                    end: p,
                    key: c,
                    lane: g,
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
              function (e, t, n) {
                return (o.range = (function (e) {
                  var t = e.measurements,
                    n = e.outerSize,
                    o = e.scrollOffset,
                    r = t.length - 1,
                    i = function (e) {
                      return t[e].start;
                    },
                    s = b(0, r, i, o),
                    l = s;
                  for (; l < r && t[l].end < o + n; ) l++;
                  return { startIndex: s, endIndex: l };
                })({ measurements: e, outerSize: t, scrollOffset: n }));
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
              function (e, t, n, o, r) {
                return 0 === r ? [] : e(i({}, t, { overscan: n, count: o }));
              },
              {
                key: !1,
                debug: function () {
                  return o.options.debug;
                },
              },
            )),
            (this.indexFromElement = function (e) {
              var t = o.options.indexAttribute,
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
              var n = o.measurementsCache[o.indexFromElement(e)];
              if (n && e.isConnected) {
                var r = o.measureElementCache.get(n.key);
                r !== e &&
                  (r && o.observer.unobserve(r),
                  o.observer.observe(e),
                  o.measureElementCache.set(n.key, e));
                var i = o.options.measureElement(e, t, o);
                o.resizeItem(n, i);
              } else
                o.measureElementCache.forEach(function (t, n) {
                  t === e &&
                    (o.observer.unobserve(e), o.measureElementCache.delete(n));
                });
            }),
            (this.resizeItem = function (e, t) {
              var n,
                r = t - (null != (n = o.itemSizeCache.get(e.key)) ? n : e.size);
              0 !== r &&
                (e.start < o.scrollOffset &&
                  o._scrollToOffset(o.scrollOffset, {
                    adjustments: (o.scrollAdjustments += r),
                    behavior: void 0,
                  }),
                o.pendingMeasuredCacheIndexes.push(e.index),
                (o.itemSizeCache = new Map(o.itemSizeCache.set(e.key, t))),
                o.notify());
            }),
            (this.measureElement = function (e) {
              e && o._measureElement(e, void 0);
            }),
            (this.getVirtualItems = s(
              function () {
                return [o.getIndexes(), o.getMeasurements()];
              },
              function (e, t) {
                for (var n = [], o = 0, r = e.length; o < r; o++) {
                  var i = t[e[o]];
                  n.push(i);
                }
                return n;
              },
              {
                key: !1,
                debug: function () {
                  return o.options.debug;
                },
              },
            )),
            (this.getVirtualItemForOffset = function (e) {
              var t = o.getMeasurements();
              return l(
                t[
                  b(
                    0,
                    t.length - 1,
                    function (e) {
                      return l(t[e]).start;
                    },
                    e,
                  )
                ],
              );
            }),
            (this.getOffsetForAlignment = function (e, t) {
              var n = o.getSize();
              "auto" === t &&
                (t =
                  e <= o.scrollOffset
                    ? "start"
                    : e >= o.scrollOffset + n
                    ? "end"
                    : "start"),
                "start" === t ||
                  ("end" === t ? (e -= n) : "center" === t && (e -= n / 2));
              var r = o.options.horizontal ? "scrollWidth" : "scrollHeight",
                i =
                  (o.scrollElement
                    ? "document" in o.scrollElement
                      ? o.scrollElement.document.documentElement[r]
                      : o.scrollElement[r]
                    : 0) - o.getSize();
              return Math.max(Math.min(i, e), 0);
            }),
            (this.getOffsetForIndex = function (e, t) {
              void 0 === t && (t = "auto"),
                (e = Math.max(0, Math.min(e, o.options.count - 1)));
              var n = l(o.getMeasurements()[e]);
              if ("auto" === t)
                if (
                  n.end >=
                  o.scrollOffset + o.getSize() - o.options.scrollPaddingEnd
                )
                  t = "end";
                else {
                  if (
                    !(n.start <= o.scrollOffset + o.options.scrollPaddingStart)
                  )
                    return [o.scrollOffset, t];
                  t = "start";
                }
              var r =
                "end" === t
                  ? n.end + o.options.scrollPaddingEnd
                  : n.start - o.options.scrollPaddingStart;
              return [o.getOffsetForAlignment(r, t), t];
            }),
            (this.isDynamicMode = function () {
              return o.measureElementCache.size > 0;
            }),
            (this.cancelScrollToIndex = function () {
              null !== o.scrollToIndexTimeoutId &&
                (clearTimeout(o.scrollToIndexTimeoutId),
                (o.scrollToIndexTimeoutId = null));
            }),
            (this.scrollToOffset = function (e, t) {
              var n = void 0 === t ? {} : t,
                r = n.align,
                i = void 0 === r ? "start" : r,
                s = n.behavior;
              o.cancelScrollToIndex(),
                "smooth" === s &&
                  o.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                o._scrollToOffset(o.getOffsetForAlignment(e, i), {
                  adjustments: void 0,
                  behavior: s,
                });
            }),
            (this.scrollToIndex = function (e, t) {
              var n = void 0 === t ? {} : t,
                r = n.align,
                i = void 0 === r ? "auto" : r,
                s = n.behavior;
              (e = Math.max(0, Math.min(e, o.options.count - 1))),
                o.cancelScrollToIndex(),
                "smooth" === s &&
                  o.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  );
              var l = o.getOffsetForIndex(e, i),
                a = l[0],
                u = l[1];
              o._scrollToOffset(a, { adjustments: void 0, behavior: s }),
                "smooth" !== s &&
                  o.isDynamicMode() &&
                  (o.scrollToIndexTimeoutId = setTimeout(function () {
                    var t, n;
                    if (
                      ((o.scrollToIndexTimeoutId = null),
                      o.measureElementCache.has(o.options.getItemKey(e)))
                    ) {
                      var r = o.getOffsetForIndex(e, u)[0];
                      (t = r),
                        (n = o.scrollOffset),
                        Math.abs(t - n) < 1 ||
                          o.scrollToIndex(e, { align: u, behavior: s });
                    } else o.scrollToIndex(e, { align: u, behavior: s });
                  }));
            }),
            (this.scrollBy = function (e, t) {
              var n = (void 0 === t ? {} : t).behavior;
              o.cancelScrollToIndex(),
                "smooth" === n &&
                  o.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                o._scrollToOffset(o.scrollOffset + e, {
                  adjustments: void 0,
                  behavior: n,
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
            (this._scrollToOffset = function (e, t) {
              var n = t.adjustments,
                r = t.behavior;
              o.options.scrollToFn(e, { behavior: r, adjustments: n }, o);
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
        b = function (e, t, n, o) {
          for (; e <= t; ) {
            var r = ((e + t) / 2) | 0,
              i = n(r);
            if (i < o) e = r + 1;
            else {
              if (!(i > o)) return r;
              t = r - 1;
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
      var E = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function I(e) {
        var t = r.useReducer(function () {
            return {};
          }, {})[1],
          n = o({}, e, {
            onChange: function (n) {
              t(), null == e.onChange || e.onChange(n);
            },
          }),
          i = r.useState(function () {
            return new v(n);
          })[0];
        return (
          i.setOptions(n),
          r.useEffect(function () {
            return i._didMount();
          }, []),
          E(function () {
            return i._willUpdate();
          }),
          i
        );
      }
      function y(e) {
        return I(
          o(
            { observeElementRect: c, observeElementOffset: f, scrollToFn: g },
            e,
          ),
        );
      }
      function z(e) {
        return I(
          o(
            {
              getScrollElement: function () {
                return "undefined" != typeof document ? window : null;
              },
              observeElementRect: d,
              observeElementOffset: h,
              scrollToFn: p,
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

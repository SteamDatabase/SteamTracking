/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8820],
  {
    78534: (e) => {
      e.exports = {
        AppGridItem: "appgrid_AppGridItem_cel2P",
        NoImage: "appgrid_NoImage_1-aFU",
        Capsule: "appgrid_Capsule_3F_x5",
        Loaded: "appgrid_Loaded_2OzGy",
        Selectable: "appgrid_Selectable_1VYcg",
        Label: "appgrid_Label_1Pku-",
      };
    },
    71960: (e) => {
      e.exports = {
        VirtualizedGridWrapper: "virtualizedgrid_VirtualizedGridWrapper_R33oy",
        VirtualizedGridRow: "virtualizedgrid_VirtualizedGridRow_3yp3J",
      };
    },
    47844: (e, n, t) => {
      "use strict";
      t.d(n, { d: () => E });
      var o = t(85556),
        r = t(47427),
        i = t(37563),
        s = t(13129);
      const l =
        t.p +
        "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
      var a = t(78534),
        u = t(813),
        c = t(20417),
        d = t(71960),
        f = t(50423);
      function m(e) {
        const {
            idxStart: n,
            idxEnd: t,
            renderItem: o,
            height: i,
            rowGap: s,
            itemWidth: l,
            columnGap: a,
            position: u,
          } = e,
          c = [];
        for (let e = n; e < t; e++) c.push(o(e, l));
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
      function h(e) {
        const {
            nItems: n,
            renderItem: t,
            nAspectRatio: o,
            nColumns: i = 7,
            nColumnGap: s = 10,
            nRowGap: l = 10,
            onWidthChanged: a,
          } = e,
          u = r.useRef(null),
          [m, h] = r.useState(0),
          v = u.current && (0, f.Et)(u.current, "y"),
          b = Math.ceil(n / i),
          E = Math.floor((m - (i - 1) * s) / i),
          y = Math.floor(E / o) + l,
          I = r.useCallback((e) => {
            var n;
            h(e.borderBoxSize[0].inlineSize),
              a &&
                a(
                  (null === (n = e.target.ownerDocument.defaultView) ||
                  void 0 === n
                    ? void 0
                    : n.innerWidth) || 0,
                  e.borderBoxSize[0].inlineSize,
                );
          }, []),
          S = (0, c.yU)(I),
          z = (0, c.BE)(u, S);
        return r.createElement(
          "div",
          { className: d.VirtualizedGridOuter, ref: z },
          v &&
            r.createElement(p, {
              renderItem: t,
              nItems: n,
              nColumns: i,
              nColumnGap: s,
              nRowGap: l,
              nRows: b,
              elScrollable: v,
              nRowHeight: y,
              nItemWidth: E,
            }),
          u.current &&
            !v &&
            r.createElement(g, {
              renderItem: t,
              nItems: n,
              nColumns: i,
              nColumnGap: s,
              nRowGap: l,
              nRows: b,
              containerRef: u,
              nRowHeight: y,
              nItemWidth: E,
            }),
        );
      }
      function g(e) {
        var n;
        const { containerRef: t, nRows: i, nRowHeight: s } = e,
          l = (0, o._T)(e, ["containerRef", "nRows", "nRowHeight"]),
          a = (0, u.hO)({
            count: i,
            scrollMargin:
              null === (n = t.current) || void 0 === n ? void 0 : n.offsetTop,
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
      function p(e) {
        const { nRows: n, elScrollable: t, nRowHeight: i } = e,
          s = (0, o._T)(e, ["nRows", "elScrollable", "nRowHeight"]),
          l = (0, u.MG)({
            count: n,
            getScrollElement: () => t,
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
            nItems: n,
            nColumns: t = 0,
            nColumnGap: i = 0,
            nRowGap: s = 0,
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
                m,
                Object.assign(
                  {
                    key: e.key,
                    idxStart: e.index * t,
                    idxEnd: Math.min(n, (e.index + 1) * t),
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
            app: n,
            width: t,
            index: o,
            getOnSelect: u,
            renderChildren: c,
            getClassName: d,
          } = e,
          [f, m] = r.useState(0),
          [h, g] = r.useState(!1),
          p = i.De.STORE_ICON_BASE_URL;
        let v = [
          `${p}${n.appid}/library_600x900.jpg`,
          `${p}${n.appid}/portrait.png`,
          l,
        ];
        e.app.localized_capsule_filename &&
          (v = [`${p}${n.appid}/${e.app.localized_capsule_filename}`, ...v]);
        const b = u && u(n, o);
        return r.createElement(
          "div",
          {
            className: (0, s.Z)(
              a.AppGridItem,
              f == v.length && a.NoImage,
              h && a.Loaded,
              !!b && a.Selectable,
              d && d(n, o),
            ),
            style: { width: t },
            onClick: b,
          },
          f < v.length &&
            r.createElement("img", {
              className: a.Capsule,
              onLoad: () => {
                g(!0);
              },
              onError: () => {
                f < v.length && m((e) => e + 1);
              },
              src: v[f],
              alt: n.name,
              loading: "lazy",
            }),
          f == v.length - 1 &&
            r.createElement("div", { className: a.Label }, n.name),
          c && c(n, o),
        );
      }
      function E(e) {
        const {
            rgApps: n,
            getOnSelect: t,
            renderChildren: i,
            getClassName: s,
          } = e,
          l = (0, o._T)(e, [
            "rgApps",
            "getOnSelect",
            "renderChildren",
            "getClassName",
          ]),
          a = r.useCallback(
            (e, o) => {
              const l = n[e];
              return r.createElement(b, {
                key: l.appid,
                app: l,
                width: o,
                index: e,
                getOnSelect: t,
                renderChildren: i,
                getClassName: s,
              });
            },
            [n, t, i, s],
          );
        return r.createElement(
          h,
          Object.assign(
            { nItems: n.length, renderItem: a, nAspectRatio: 600 / 900 },
            l,
          ),
        );
      }
    },
    813: (e, n, t) => {
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
      t.d(n, { MG: () => S, hO: () => z });
      var r = t(47427),
        i = t(42287);
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
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
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
      function l(e, n, t) {
        var o,
          r,
          i = null != (o = t.initialDeps) ? o : [];
        return function () {
          var o;
          t.key && null != t.debug && t.debug() && (o = Date.now());
          var s,
            l = e();
          if (
            !(
              l.length !== i.length ||
              l.some(function (e, n) {
                return i[n] !== e;
              })
            )
          )
            return r;
          if (
            ((i = l),
            t.key && null != t.debug && t.debug() && (s = Date.now()),
            (r = n.apply(void 0, l)),
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
          return null == t || null == t.onChange || t.onChange(r), r;
        };
      }
      function a(e, n) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (n ? ": " + n : ""));
        return e;
      }
      var u = function (e) {
          return e;
        },
        c = function (e) {
          for (
            var n = Math.max(e.startIndex - e.overscan, 0),
              t = Math.min(e.endIndex + e.overscan, e.count - 1),
              o = [],
              r = n;
            r <= t;
            r++
          )
            o.push(r);
          return o;
        },
        d = function (e, n) {
          var t = e.scrollElement;
          if (t) {
            var o = function (e) {
              var t = e.width,
                o = e.height;
              n({ width: Math.round(t), height: Math.round(o) });
            };
            o(t.getBoundingClientRect());
            var r = new ResizeObserver(function (e) {
              var n = e[0];
              if (null != n && n.borderBoxSize) {
                var r = n.borderBoxSize[0];
                if (r)
                  return void o({ width: r.inlineSize, height: r.blockSize });
              }
              o(t.getBoundingClientRect());
            });
            return (
              r.observe(t, { box: "border-box" }),
              function () {
                r.unobserve(t);
              }
            );
          }
        },
        f = function (e, n) {
          var t = e.scrollElement;
          if (t) {
            var o = function () {
              n({ width: t.innerWidth, height: t.innerHeight });
            };
            return (
              o(),
              t.addEventListener("resize", o, { passive: !0 }),
              function () {
                t.removeEventListener("resize", o);
              }
            );
          }
        },
        m = function (e, n) {
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
        h = function (e, n) {
          var t = e.scrollElement;
          if (t) {
            var o = function () {
              n(t[e.options.horizontal ? "scrollX" : "scrollY"]);
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
        g = function (e, n, t) {
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
        p = function (e, n, t) {
          var o,
            r,
            i = n.adjustments,
            s = void 0 === i ? 0 : i,
            l = n.behavior,
            a = e + s;
          null == (o = t.scrollElement) ||
            null == o.scrollTo ||
            o.scrollTo(
              (((r = {})[t.options.horizontal ? "left" : "top"] = a),
              (r.behavior = l),
              r),
            );
        },
        v = function (e, n, t) {
          var o,
            r,
            i = n.adjustments,
            s = void 0 === i ? 0 : i,
            l = n.behavior,
            a = e + s;
          null == (o = t.scrollElement) ||
            null == o.scrollTo ||
            o.scrollTo(
              (((r = {})[t.options.horizontal ? "left" : "top"] = a),
              (r.behavior = l),
              r),
            );
        },
        b = function (e) {
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
            (this.range = null),
            (this.setOptions = function (e) {
              Object.entries(e).forEach(function (n) {
                var t = n[0];
                void 0 === n[1] && delete e[t];
              }),
                (o.options = s(
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
                    rangeExtractor: c,
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
              null == o.options.onChange || o.options.onChange(o, e);
            }),
            (this.maybeNotify = l(
              function () {
                return (
                  o.calculateRange(),
                  [
                    o.isScrolling,
                    o.range ? o.range.startIndex : null,
                    o.range ? o.range.endIndex : null,
                  ]
                );
              },
              function (e) {
                o.notify(e);
              },
              {
                key: !1,
                debug: function () {
                  return o.options.debug;
                },
                initialDeps: [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ],
              },
            )),
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
                    (o.scrollRect = e), o.maybeNotify();
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
            (this.memoOptions = l(
              function () {
                return [
                  o.options.count,
                  o.options.paddingStart,
                  o.options.scrollMargin,
                  o.options.getItemKey,
                ];
              },
              function (e, n, t, r) {
                return (
                  (o.pendingMeasuredCacheIndexes = []),
                  { count: e, paddingStart: n, scrollMargin: t, getItemKey: r }
                );
              },
              { key: !1 },
            )),
            (this.getFurthestMeasurement = function (e, n) {
              for (var t = new Map(), r = new Map(), i = n - 1; i >= 0; i--) {
                var s = e[i];
                if (!t.has(s.lane)) {
                  var l = r.get(s.lane);
                  if (
                    (null == l || s.end > l.end
                      ? r.set(s.lane, s)
                      : s.end < l.end && t.set(s.lane, !0),
                    t.size === o.options.lanes)
                  )
                    break;
                }
              }
              return r.size === o.options.lanes
                ? Array.from(r.values()).sort(function (e, n) {
                    return e.end - n.end;
                  })[0]
                : void 0;
            }),
            (this.getMeasurements = l(
              function () {
                return [o.memoOptions(), o.itemSizeCache];
              },
              function (e, n) {
                var t = e.count,
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
                  u < t;
                  u++
                ) {
                  var c = s(u),
                    d =
                      1 === o.options.lanes
                        ? a[u - 1]
                        : o.getFurthestMeasurement(a, u),
                    f = d ? d.end : r + i,
                    m = n.get(c),
                    h = "number" == typeof m ? m : o.options.estimateSize(u),
                    g = f + h,
                    p = d ? d.lane : u % o.options.lanes;
                  a[u] = {
                    index: u,
                    start: f,
                    size: h,
                    end: g,
                    key: c,
                    lane: p,
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
            (this.calculateRange = l(
              function () {
                return [o.getMeasurements(), o.getSize(), o.scrollOffset];
              },
              function (e, n, t) {
                return (o.range =
                  e.length > 0 && n > 0
                    ? (function (e) {
                        var n = e.measurements,
                          t = e.outerSize,
                          o = e.scrollOffset,
                          r = n.length - 1,
                          i = function (e) {
                            return n[e].start;
                          },
                          s = E(0, r, i, o),
                          l = s;
                        for (; l < r && n[l].end < o + t; ) l++;
                        return { startIndex: s, endIndex: l };
                      })({ measurements: e, outerSize: n, scrollOffset: t })
                    : null);
              },
              {
                key: !1,
                debug: function () {
                  return o.options.debug;
                },
              },
            )),
            (this.getIndexes = l(
              function () {
                return [
                  o.options.rangeExtractor,
                  o.calculateRange(),
                  o.options.overscan,
                  o.options.count,
                ];
              },
              function (e, n, t, o) {
                return null === n ? [] : e(s({}, n, { overscan: t, count: o }));
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
                var r = o.measureElementCache.get(t.key);
                r !== e &&
                  (r && o.observer.unobserve(r),
                  o.observer.observe(e),
                  o.measureElementCache.set(t.key, e));
                var i = o.options.measureElement(e, n, o);
                o.resizeItem(t, i);
              } else
                o.measureElementCache.forEach(function (n, t) {
                  n === e &&
                    (o.observer.unobserve(e), o.measureElementCache.delete(t));
                });
            }),
            (this.resizeItem = function (e, n) {
              var t,
                r = n - (null != (t = o.itemSizeCache.get(e.key)) ? t : e.size);
              0 !== r &&
                (e.start < o.scrollOffset &&
                  o._scrollToOffset(o.scrollOffset, {
                    adjustments: (o.scrollAdjustments += r),
                    behavior: void 0,
                  }),
                o.pendingMeasuredCacheIndexes.push(e.index),
                (o.itemSizeCache = new Map(o.itemSizeCache.set(e.key, n))),
                o.notify(!1));
            }),
            (this.measureElement = function (e) {
              e && o._measureElement(e, void 0);
            }),
            (this.getVirtualItems = l(
              function () {
                return [o.getIndexes(), o.getMeasurements()];
              },
              function (e, n) {
                for (var t = [], o = 0, r = e.length; o < r; o++) {
                  var i = n[e[o]];
                  t.push(i);
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
              return a(
                n[
                  E(
                    0,
                    n.length - 1,
                    function (e) {
                      return a(n[e]).start;
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
              var r = o.options.horizontal ? "scrollWidth" : "scrollHeight",
                i =
                  (o.scrollElement
                    ? "document" in o.scrollElement
                      ? o.scrollElement.document.documentElement[r]
                      : o.scrollElement[r]
                    : 0) - o.getSize();
              return Math.max(Math.min(i, e), 0);
            }),
            (this.getOffsetForIndex = function (e, n) {
              void 0 === n && (n = "auto"),
                (e = Math.max(0, Math.min(e, o.options.count - 1)));
              var t = a(o.getMeasurements()[e]);
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
              var r =
                "end" === n
                  ? t.end + o.options.scrollPaddingEnd
                  : t.start - o.options.scrollPaddingStart;
              return [o.getOffsetForAlignment(r, n), n];
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
                r = t.align,
                i = void 0 === r ? "start" : r,
                s = t.behavior;
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
            (this.scrollToIndex = function (e, n) {
              var t = void 0 === n ? {} : n,
                r = t.align,
                i = void 0 === r ? "auto" : r,
                s = t.behavior;
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
                    var n, t;
                    if (
                      ((o.scrollToIndexTimeoutId = null),
                      o.measureElementCache.has(o.options.getItemKey(e)))
                    ) {
                      var r = o.getOffsetForIndex(e, u)[0];
                      (n = r),
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
                r = n.behavior;
              o.options.scrollToFn(e, { behavior: r, adjustments: t }, o);
            }),
            (this.measure = function () {
              (o.itemSizeCache = new Map()), o.notify(!1);
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
        E = function (e, n, t, o) {
          for (; e <= n; ) {
            var r = ((e + n) / 2) | 0,
              i = t(r);
            if (i < o) e = r + 1;
            else {
              if (!(i > o)) return r;
              n = r - 1;
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
      var y = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function I(e) {
        var n = r.useReducer(function () {
            return {};
          }, {})[1],
          t = o({}, e, {
            onChange: function (t, o) {
              o ? (0, i.flushSync)(n) : n(),
                null == e.onChange || e.onChange(t, o);
            },
          }),
          s = r.useState(function () {
            return new b(t);
          })[0];
        return (
          s.setOptions(t),
          r.useEffect(function () {
            return s._didMount();
          }, []),
          y(function () {
            return s._willUpdate();
          }),
          s
        );
      }
      function S(e) {
        return I(
          o(
            { observeElementRect: d, observeElementOffset: m, scrollToFn: v },
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
              observeElementRect: f,
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

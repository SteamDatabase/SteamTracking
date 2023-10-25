/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3143],
  {
    97959: (e, t, r) => {
      var i = r(78579)(Object.getPrototypeOf, Object);
      e.exports = i;
    },
    48e3: (e, t, r) => {
      e.exports = r(73539);
    },
    73539: (e) => {
      e.exports = function (e) {
        return e && e.length ? e[0] : void 0;
      };
    },
    82678: (e, t, r) => {
      var i = r(20194),
        n = r(97959),
        a = r(81653),
        s = Function.prototype,
        o = Object.prototype,
        c = s.toString,
        l = o.hasOwnProperty,
        u = c.call(Object);
      e.exports = function (e) {
        if (!a(e) || "[object Object]" != i(e)) return !1;
        var t = n(e);
        if (null === t) return !0;
        var r = l.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && c.call(r) == u;
      };
    },
    58399: (e, t, r) => {
      var i = r(13756),
        n = r(75806),
        a = r(27159);
      e.exports = function (e, t) {
        return e && e.length ? i(e, a(t, 2), n) : void 0;
      };
    },
    73: (e, t, r) => {
      var i = r(13756),
        n = r(27159),
        a = r(30277);
      e.exports = function (e, t) {
        return e && e.length ? i(e, n(t, 2), a) : void 0;
      };
    },
    77434: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => c });
      var i = r(3397),
        n = r(10562),
        a = r(85322),
        s = r(80072),
        o = r(86246),
        c = (0, i.z)({
          chartName: "PieChart",
          GraphicalChild: o.b,
          validateTooltipEventTypes: ["item"],
          defaultTooltipEventType: "item",
          legendContent: "children",
          axisComponents: [
            { axisType: "angleAxis", AxisComp: n.I },
            { axisType: "radiusAxis", AxisComp: a.S },
          ],
          formatAxisMap: s.t9,
          defaultProps: {
            layout: "centric",
            startAngle: 0,
            endAngle: 360,
            cx: "50%",
            cy: "50%",
            innerRadius: 0,
            outerRadius: "80%",
          },
        });
    },
    93950: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => c });
      var i = r(3397),
        n = r(57103),
        a = r(10562),
        s = r(85322),
        o = r(80072),
        c = (0, i.z)({
          chartName: "RadarChart",
          GraphicalChild: n.F,
          axisComponents: [
            { axisType: "angleAxis", AxisComp: a.I },
            { axisType: "radiusAxis", AxisComp: s.S },
          ],
          formatAxisMap: o.t9,
          defaultProps: {
            layout: "centric",
            startAngle: 90,
            endAngle: -270,
            cx: "50%",
            cy: "50%",
            innerRadius: 0,
            outerRadius: "80%",
          },
        });
    },
    86246: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => N });
      var i = r(47184),
        n = r.n(i),
        a = r(80089),
        s = r.n(a),
        o = r(82678),
        c = r.n(o),
        l = r(39277),
        u = r.n(l),
        m = r(51391),
        d = r.n(m),
        y = r(89526),
        p = r(68059),
        f = r(64403),
        b = r.n(f),
        B = r(61452),
        h = r(61001),
        g = r(17995),
        w = r(68451),
        v = r(43774),
        _ = r(34324),
        F = r(32214),
        S = r(9410),
        R = r(59509),
        M = r(80072),
        O = r(16171),
        z = r(37287),
        j = r(78706),
        E = r(33790);
      function A(e) {
        return (
          (A =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          A(e)
        );
      }
      function T() {
        return (
          (T = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          T.apply(this, arguments)
        );
      }
      function U(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(r), !0).forEach(function (t) {
                X(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function P(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, D(i.key), i);
        }
      }
      function k(e, t) {
        return (
          (k = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          k(e, t)
        );
      }
      function W(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = C(e);
          if (t) {
            var n = C(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === A(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return I(e);
          })(this, r);
        };
      }
      function I(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function C(e) {
        return (
          (C = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          C(e)
        );
      }
      function X(e, t, r) {
        return (
          (t = D(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function D(e) {
        var t = (function (e, t) {
          if ("object" !== A(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== A(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === A(t) ? t : String(t);
      }
      var N = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && k(e, t);
        })(o, e);
        var t,
          r,
          i,
          a = W(o);
        function o(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
            X(I((t = a.call(this, e))), "pieRef", null),
            X(I(t), "sectorRefs", []),
            X(I(t), "id", (0, O.EL)("recharts-pie-")),
            X(I(t), "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), u()(e) && e();
            }),
            X(I(t), "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), u()(e) && e();
            }),
            (t.state = {
              isAnimationFinished: !e.isAnimationActive,
              prevIsAnimationActive: e.isAnimationActive,
              prevAnimationId: e.animationId,
              sectorToFocus: 0,
            }),
            t
          );
        }
        return (
          (t = o),
          (i = [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return t.prevIsAnimationActive !== e.isAnimationActive
                  ? {
                      prevIsAnimationActive: e.isAnimationActive,
                      prevAnimationId: e.animationId,
                      curSectors: e.sectors,
                      prevSectors: [],
                      isAnimationFinished: !0,
                    }
                  : e.isAnimationActive && e.animationId !== t.prevAnimationId
                  ? {
                      prevAnimationId: e.animationId,
                      curSectors: e.sectors,
                      prevSectors: t.curSectors,
                      isAnimationFinished: !0,
                    }
                  : e.sectors !== t.curSectors
                  ? { curSectors: e.sectors, isAnimationFinished: !0 }
                  : null;
              },
            },
            {
              key: "getTextAnchor",
              value: function (e, t) {
                return e > t ? "start" : e < t ? "end" : "middle";
              },
            },
            {
              key: "renderLabelLineItem",
              value: function (e, t) {
                return y.isValidElement(e)
                  ? y.cloneElement(e, t)
                  : u()(e)
                  ? e(t)
                  : y.createElement(
                      g.H,
                      T({}, t, {
                        type: "linear",
                        className: "recharts-pie-label-line",
                      }),
                    );
              },
            },
            {
              key: "renderLabelItem",
              value: function (e, t, r) {
                if (y.isValidElement(e)) return y.cloneElement(e, t);
                var i = r;
                return u()(e) && ((i = e(t)), y.isValidElement(i))
                  ? i
                  : y.createElement(
                      w.x,
                      T({}, t, {
                        alignmentBaseline: "middle",
                        className: "recharts-pie-label-text",
                      }),
                      i,
                    );
              },
            },
            {
              key: "renderSectorItem",
              value: function (e, t) {
                return y.isValidElement(e)
                  ? y.cloneElement(e, t)
                  : u()(e)
                  ? e(t)
                  : c()(e)
                  ? y.createElement(h.L, T({ tabIndex: -1 }, t, e))
                  : y.createElement(h.L, T({ tabIndex: -1 }, t));
              },
            },
          ]),
          (r = [
            {
              key: "isActiveIndex",
              value: function (e) {
                var t = this.props.activeIndex;
                return Array.isArray(t) ? -1 !== t.indexOf(e) : e === t;
              },
            },
            {
              key: "hasActiveIndex",
              value: function () {
                var e = this.props.activeIndex;
                return Array.isArray(e) ? 0 !== e.length : e || 0 === e;
              },
            },
            {
              key: "renderLabels",
              value: function (e) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var t = this.props,
                  r = t.label,
                  i = t.labelLine,
                  n = t.dataKey,
                  a = t.valueKey,
                  s = (0, S.L6)(this.props),
                  c = (0, S.L6)(r),
                  l = (0, S.L6)(i),
                  u = (r && r.offsetRadius) || 20,
                  m = e.map(function (e, t) {
                    var m = (e.startAngle + e.endAngle) / 2,
                      p = (0, M.op)(e.cx, e.cy, e.outerRadius + u, m),
                      f = x(
                        x(x(x({}, s), e), {}, { stroke: "none" }, c),
                        {},
                        { index: t, textAnchor: o.getTextAnchor(p.x, e.cx) },
                        p,
                      ),
                      b = x(
                        x(
                          x(x({}, s), e),
                          {},
                          { fill: "none", stroke: e.fill },
                          l,
                        ),
                        {},
                        {
                          index: t,
                          points: [(0, M.op)(e.cx, e.cy, e.outerRadius, m), p],
                          key: "line",
                        },
                      ),
                      h = n;
                    return (
                      d()(n) && d()(a) ? (h = "value") : d()(n) && (h = a),
                      y.createElement(
                        B.m,
                        { key: "label-".concat(t) },
                        i && o.renderLabelLineItem(i, b),
                        o.renderLabelItem(r, f, (0, z.F$)(e, h)),
                      )
                    );
                  });
                return y.createElement(
                  B.m,
                  { className: "recharts-pie-labels" },
                  m,
                );
              },
            },
            {
              key: "renderSectorsStatically",
              value: function (e) {
                var t = this,
                  r = this.props,
                  i = r.activeShape,
                  n = r.blendStroke,
                  a = r.inactiveShape;
                return e.map(function (e, r) {
                  var s = a && t.hasActiveIndex() ? a : null,
                    c = t.isActiveIndex(r) ? i : s,
                    l = x(x({}, e), {}, { stroke: n ? e.fill : e.stroke });
                  return y.createElement(
                    B.m,
                    T(
                      {
                        ref: function (e) {
                          e &&
                            !t.sectorRefs.includes(e) &&
                            t.sectorRefs.push(e);
                        },
                        tabIndex: -1,
                        className: "recharts-pie-sector",
                      },
                      (0, E.bw)(t.props, e, r),
                      { key: "sector-".concat(r) },
                    ),
                    o.renderSectorItem(c, l),
                  );
                });
              },
            },
            {
              key: "renderSectorsWithAnimation",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.sectors,
                  i = t.isAnimationActive,
                  n = t.animationBegin,
                  a = t.animationDuration,
                  o = t.animationEasing,
                  c = t.animationId,
                  l = this.state,
                  u = l.prevSectors,
                  m = l.prevIsAnimationActive;
                return y.createElement(
                  p.ZP,
                  {
                    begin: n,
                    duration: a,
                    isActive: i,
                    easing: o,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(c, "-").concat(m),
                    onAnimationStart: this.handleAnimationStart,
                    onAnimationEnd: this.handleAnimationEnd,
                  },
                  function (t) {
                    var i = t.t,
                      n = [],
                      a = (r && r[0]).startAngle;
                    return (
                      r.forEach(function (e, t) {
                        var r = u && u[t],
                          o = t > 0 ? s()(e, "paddingAngle", 0) : 0;
                        if (r) {
                          var c = (0, O.k4)(
                              r.endAngle - r.startAngle,
                              e.endAngle - e.startAngle,
                            ),
                            l = x(
                              x({}, e),
                              {},
                              { startAngle: a + o, endAngle: a + c(i) + o },
                            );
                          n.push(l), (a = l.endAngle);
                        } else {
                          var m = e.endAngle,
                            d = e.startAngle,
                            y = (0, O.k4)(0, m - d)(i),
                            p = x(
                              x({}, e),
                              {},
                              { startAngle: a + o, endAngle: a + y + o },
                            );
                          n.push(p), (a = p.endAngle);
                        }
                      }),
                      y.createElement(B.m, null, e.renderSectorsStatically(n))
                    );
                  },
                );
              },
            },
            {
              key: "attachKeyboardHandlers",
              value: function (e) {
                var t = this;
                e.onkeydown = function (e) {
                  if (!e.altKey)
                    switch (e.key) {
                      case "ArrowLeft":
                        var r = ++t.state.sectorToFocus % t.sectorRefs.length;
                        t.sectorRefs[r].focus(),
                          t.setState({ sectorToFocus: r });
                        break;
                      case "ArrowRight":
                        var i =
                          --t.state.sectorToFocus < 0
                            ? t.sectorRefs.length - 1
                            : t.state.sectorToFocus % t.sectorRefs.length;
                        t.sectorRefs[i].focus(),
                          t.setState({ sectorToFocus: i });
                        break;
                      case "Escape":
                        t.sectorRefs[t.state.sectorToFocus].blur(),
                          t.setState({ sectorToFocus: 0 });
                    }
                };
              },
            },
            {
              key: "renderSectors",
              value: function () {
                var e = this.props,
                  t = e.sectors,
                  r = e.isAnimationActive,
                  i = this.state.prevSectors;
                return !(r && t && t.length) || (i && n()(i, t))
                  ? this.renderSectorsStatically(t)
                  : this.renderSectorsWithAnimation();
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this.pieRef && this.attachKeyboardHandlers(this.pieRef);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.hide,
                  i = t.sectors,
                  n = t.className,
                  a = t.label,
                  s = t.cx,
                  o = t.cy,
                  c = t.innerRadius,
                  l = t.outerRadius,
                  u = t.isAnimationActive,
                  m = this.state.isAnimationFinished;
                if (
                  r ||
                  !i ||
                  !i.length ||
                  !(0, O.hj)(s) ||
                  !(0, O.hj)(o) ||
                  !(0, O.hj)(c) ||
                  !(0, O.hj)(l)
                )
                  return null;
                var d = b()("recharts-pie", n);
                return y.createElement(
                  B.m,
                  {
                    tabIndex: 0,
                    className: d,
                    ref: function (t) {
                      e.pieRef = t;
                    },
                  },
                  this.renderSectors(),
                  a && this.renderLabels(i),
                  v._.renderCallByParent(this.props, null, !1),
                  (!u || m) && _.e.renderCallByParent(this.props, i, !1),
                );
              },
            },
          ]) && P(t.prototype, r),
          i && P(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(y.PureComponent);
      X(N, "displayName", "Pie"),
        X(N, "defaultProps", {
          stroke: "#fff",
          fill: "#808080",
          legendType: "rect",
          cx: "50%",
          cy: "50%",
          startAngle: 0,
          endAngle: 360,
          innerRadius: 0,
          outerRadius: "80%",
          paddingAngle: 0,
          labelLine: !0,
          hide: !1,
          minAngle: 0,
          isAnimationActive: !R.x.isSsr,
          animationBegin: 400,
          animationDuration: 1500,
          animationEasing: "ease",
          nameKey: "name",
          blendStroke: !1,
        }),
        X(N, "parseDeltaAngle", function (e, t) {
          return (0, O.uY)(t - e) * Math.min(Math.abs(t - e), 360);
        }),
        X(N, "getRealPieData", function (e) {
          var t = e.props,
            r = t.data,
            i = t.children,
            n = (0, S.L6)(e.props),
            a = (0, S.NN)(i, F.b);
          return r && r.length
            ? r.map(function (e, t) {
                return x(x(x({ payload: e }, n), e), a && a[t] && a[t].props);
              })
            : a && a.length
            ? a.map(function (e) {
                return x(x({}, n), e.props);
              })
            : [];
        }),
        X(N, "parseCoordinateOfPie", function (e, t) {
          var r = t.top,
            i = t.left,
            n = t.width,
            a = t.height,
            s = (0, M.$4)(n, a);
          return {
            cx: i + (0, O.h1)(e.props.cx, n, n / 2),
            cy: r + (0, O.h1)(e.props.cy, a, a / 2),
            innerRadius: (0, O.h1)(e.props.innerRadius, s, 0),
            outerRadius: (0, O.h1)(e.props.outerRadius, s, 0.8 * s),
            maxRadius: e.props.maxRadius || Math.sqrt(n * n + a * a) / 2,
          };
        }),
        X(N, "getComposedData", function (e) {
          var t = e.item,
            r = e.offset,
            i = N.getRealPieData(t);
          if (!i || !i.length) return null;
          var n = t.props,
            a = n.cornerRadius,
            s = n.startAngle,
            o = n.endAngle,
            c = n.paddingAngle,
            l = n.dataKey,
            u = n.nameKey,
            m = n.valueKey,
            y = n.tooltipType,
            p = Math.abs(t.props.minAngle),
            f = N.parseCoordinateOfPie(t, r),
            b = N.parseDeltaAngle(s, o),
            B = Math.abs(b),
            h = l;
          d()(l) && d()(m)
            ? ((0, j.Z)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
              ),
              (h = "value"))
            : d()(l) &&
              ((0, j.Z)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
              ),
              (h = m));
          var g,
            w,
            v = i.filter(function (e) {
              return 0 !== (0, z.F$)(e, h, 0);
            }).length,
            _ = B - v * p - (B >= 360 ? v : v - 1) * c,
            F = i.reduce(function (e, t) {
              var r = (0, z.F$)(t, h, 0);
              return e + ((0, O.hj)(r) ? r : 0);
            }, 0);
          F > 0 &&
            (g = i.map(function (e, t) {
              var r,
                i = (0, z.F$)(e, h, 0),
                n = (0, z.F$)(e, u, t),
                o = ((0, O.hj)(i) ? i : 0) / F,
                l =
                  (r = t
                    ? w.endAngle + (0, O.uY)(b) * c * (0 !== i ? 1 : 0)
                    : s) +
                  (0, O.uY)(b) * ((0 !== i ? p : 0) + o * _),
                m = (r + l) / 2,
                d = (f.innerRadius + f.outerRadius) / 2,
                B = [{ name: n, value: i, payload: e, dataKey: h, type: y }],
                g = (0, M.op)(f.cx, f.cy, d, m);
              return (w = x(
                x(
                  x(
                    {
                      percent: o,
                      cornerRadius: a,
                      name: n,
                      tooltipPayload: B,
                      midAngle: m,
                      middleRadius: d,
                      tooltipPosition: g,
                    },
                    e,
                  ),
                  f,
                ),
                {},
                {
                  value: (0, z.F$)(e, h),
                  startAngle: r,
                  endAngle: l,
                  payload: e,
                  paddingAngle: (0, O.uY)(b) * c,
                },
              ));
            }));
          return x(x({}, f), {}, { sectors: g, data: i });
        });
    },
    10562: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => R });
      var i = r(39277),
        n = r.n(i),
        a = r(89526),
        s = r(61452),
        o = r(96963),
        c = r(31234),
        l = r(68451),
        u = r(33790),
        m = r(9410),
        d = r(80072);
      function y(e) {
        return (
          (y =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          y(e)
        );
      }
      function p() {
        return (
          (p = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          p.apply(this, arguments)
        );
      }
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                v(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function B(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, _(i.key), i);
        }
      }
      function h(e, t) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          h(e, t)
        );
      }
      function g(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = w(e);
          if (t) {
            var n = w(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === y(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(this, r);
        };
      }
      function w(e) {
        return (
          (w = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          w(e)
        );
      }
      function v(e, t, r) {
        return (
          (t = _(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function _(e) {
        var t = (function (e, t) {
          if ("object" !== y(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== y(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === y(t) ? t : String(t);
      }
      var F = Math.PI / 180,
        S = 1e-5,
        R = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && h(e, t);
          })(f, e);
          var t,
            r,
            i,
            y = g(f);
          function f() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, f),
              y.apply(this, arguments)
            );
          }
          return (
            (t = f),
            (i = [
              {
                key: "renderTickItem",
                value: function (e, t, r) {
                  return a.isValidElement(e)
                    ? a.cloneElement(e, t)
                    : n()(e)
                    ? e(t)
                    : a.createElement(
                        l.x,
                        p({}, t, {
                          className: "recharts-polar-angle-axis-tick-value",
                        }),
                        r,
                      );
                },
              },
            ]),
            (r = [
              {
                key: "getTickLineCoord",
                value: function (e) {
                  var t = this.props,
                    r = t.cx,
                    i = t.cy,
                    n = t.radius,
                    a = t.orientation,
                    s = t.tickSize || 8,
                    o = (0, d.op)(r, i, n, e.coordinate),
                    c = (0, d.op)(
                      r,
                      i,
                      n + ("inner" === a ? -1 : 1) * s,
                      e.coordinate,
                    );
                  return { x1: o.x, y1: o.y, x2: c.x, y2: c.y };
                },
              },
              {
                key: "getTickTextAnchor",
                value: function (e) {
                  var t = this.props.orientation,
                    r = Math.cos(-e.coordinate * F);
                  return r > S
                    ? "outer" === t
                      ? "start"
                      : "end"
                    : r < -S
                    ? "outer" === t
                      ? "end"
                      : "start"
                    : "middle";
                },
              },
              {
                key: "renderAxisLine",
                value: function () {
                  var e = this.props,
                    t = e.cx,
                    r = e.cy,
                    i = e.radius,
                    n = e.axisLine,
                    s = e.axisLineType,
                    l = b(
                      b({}, (0, m.L6)(this.props)),
                      {},
                      { fill: "none" },
                      (0, m.L6)(n),
                    );
                  if ("circle" === s)
                    return a.createElement(
                      o.o,
                      p({ className: "recharts-polar-angle-axis-line" }, l, {
                        cx: t,
                        cy: r,
                        r: i,
                      }),
                    );
                  var u = this.props.ticks.map(function (e) {
                    return (0, d.op)(t, r, i, e.coordinate);
                  });
                  return a.createElement(
                    c.m,
                    p({ className: "recharts-polar-angle-axis-line" }, l, {
                      points: u,
                    }),
                  );
                },
              },
              {
                key: "renderTicks",
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.ticks,
                    i = t.tick,
                    n = t.tickLine,
                    o = t.tickFormatter,
                    c = t.stroke,
                    l = (0, m.L6)(this.props),
                    d = (0, m.L6)(i),
                    y = b(b({}, l), {}, { fill: "none" }, (0, m.L6)(n)),
                    B = r.map(function (t, r) {
                      var m = e.getTickLineCoord(t),
                        B = b(
                          b(
                            b({ textAnchor: e.getTickTextAnchor(t) }, l),
                            {},
                            { stroke: "none", fill: c },
                            d,
                          ),
                          {},
                          { index: r, payload: t, x: m.x2, y: m.y2 },
                        );
                      return a.createElement(
                        s.m,
                        p(
                          {
                            className: "recharts-polar-angle-axis-tick",
                            key: "tick-".concat(r),
                          },
                          (0, u.bw)(e.props, t, r),
                        ),
                        n &&
                          a.createElement(
                            "line",
                            p(
                              {
                                className:
                                  "recharts-polar-angle-axis-tick-line",
                              },
                              y,
                              m,
                            ),
                          ),
                        i &&
                          f.renderTickItem(i, B, o ? o(t.value, r) : t.value),
                      );
                    });
                  return a.createElement(
                    s.m,
                    { className: "recharts-polar-angle-axis-ticks" },
                    B,
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.ticks,
                    r = e.radius,
                    i = e.axisLine;
                  return r <= 0 || !t || !t.length
                    ? null
                    : a.createElement(
                        s.m,
                        { className: "recharts-polar-angle-axis" },
                        i && this.renderAxisLine(),
                        this.renderTicks(),
                      );
                },
              },
            ]) && B(t.prototype, r),
            i && B(t, i),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            f
          );
        })(a.PureComponent);
      v(R, "displayName", "PolarAngleAxis"),
        v(R, "axisType", "angleAxis"),
        v(R, "defaultProps", {
          type: "category",
          angleAxisId: 0,
          scale: "auto",
          cx: 0,
          cy: 0,
          orientation: "outer",
          axisLine: !0,
          tickLine: !0,
          tickSize: 8,
          tick: !0,
          hide: !1,
          allowDuplicatedCategory: !0,
        });
    },
    83962: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => b });
      var i = r(89526),
        n = r(80072),
        a = r(9410);
      function s(e) {
        return (
          (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          s(e)
        );
      }
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                p(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, f(i.key), i);
        }
      }
      function m(e, t) {
        return (
          (m = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          m(e, t)
        );
      }
      function d(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = y(e);
          if (t) {
            var n = y(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === s(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(this, r);
        };
      }
      function y(e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          y(e)
        );
      }
      function p(e, t, r) {
        return (
          (t = f(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function f(e) {
        var t = (function (e, t) {
          if ("object" !== s(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== s(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === s(t) ? t : String(t);
      }
      var b = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && m(e, t);
        })(y, e);
        var t,
          r,
          s,
          c = d(y);
        function y() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, y),
            c.apply(this, arguments)
          );
        }
        return (
          (t = y),
          (r = [
            {
              key: "getPolygonPath",
              value: function (e) {
                var t = this.props,
                  r = t.cx,
                  i = t.cy,
                  a = t.polarAngles,
                  s = "";
                return (
                  a.forEach(function (t, a) {
                    var o = (0, n.op)(r, i, e, t);
                    s += a
                      ? "L ".concat(o.x, ",").concat(o.y)
                      : "M ".concat(o.x, ",").concat(o.y);
                  }),
                  (s += "Z")
                );
              },
            },
            {
              key: "renderPolarAngles",
              value: function () {
                var e = this.props,
                  t = e.cx,
                  r = e.cy,
                  s = e.innerRadius,
                  c = e.outerRadius,
                  u = e.polarAngles,
                  m = e.radialLines;
                if (!u || !u.length || !m) return null;
                var d = l({ stroke: "#ccc" }, (0, a.L6)(this.props));
                return i.createElement(
                  "g",
                  { className: "recharts-polar-grid-angle" },
                  u.map(function (e, a) {
                    var l = (0, n.op)(t, r, s, e),
                      u = (0, n.op)(t, r, c, e);
                    return i.createElement(
                      "line",
                      o({}, d, {
                        key: "line-".concat(a),
                        x1: l.x,
                        y1: l.y,
                        x2: u.x,
                        y2: u.y,
                      }),
                    );
                  }),
                );
              },
            },
            {
              key: "renderConcentricCircle",
              value: function (e, t, r) {
                var n = this.props,
                  s = n.cx,
                  c = n.cy,
                  u = l(
                    l({ stroke: "#ccc" }, (0, a.L6)(this.props)),
                    {},
                    { fill: "none" },
                    r,
                  );
                return i.createElement(
                  "circle",
                  o({}, u, {
                    className: "recharts-polar-grid-concentric-circle",
                    key: "circle-".concat(t),
                    cx: s,
                    cy: c,
                    r: e,
                  }),
                );
              },
            },
            {
              key: "renderConcentricPolygon",
              value: function (e, t, r) {
                var n = l(
                  l({ stroke: "#ccc" }, (0, a.L6)(this.props)),
                  {},
                  { fill: "none" },
                  r,
                );
                return i.createElement(
                  "path",
                  o({}, n, {
                    className: "recharts-polar-grid-concentric-polygon",
                    key: "path-".concat(t),
                    d: this.getPolygonPath(e),
                  }),
                );
              },
            },
            {
              key: "renderConcentricPath",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.polarRadius,
                  n = t.gridType;
                return r && r.length
                  ? i.createElement(
                      "g",
                      { className: "recharts-polar-grid-concentric" },
                      r.map(function (t, r) {
                        return "circle" === n
                          ? e.renderConcentricCircle(t, r)
                          : e.renderConcentricPolygon(t, r);
                      }),
                    )
                  : null;
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.outerRadius <= 0
                  ? null
                  : i.createElement(
                      "g",
                      { className: "recharts-polar-grid" },
                      this.renderPolarAngles(),
                      this.renderConcentricPath(),
                    );
              },
            },
          ]) && u(t.prototype, r),
          s && u(t, s),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          y
        );
      })(i.PureComponent);
      p(b, "displayName", "PolarGrid"),
        p(b, "defaultProps", {
          cx: 0,
          cy: 0,
          innerRadius: 0,
          outerRadius: 0,
          gridType: "polygon",
          radialLines: !0,
        });
    },
    85322: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => j });
      var i = r(39277),
        n = r.n(i),
        a = r(73),
        s = r.n(a),
        o = r(58399),
        c = r.n(o),
        l = r(89526),
        u = r(68451),
        m = r(43774),
        d = r(61452),
        y = r(80072),
        p = r(33790),
        f = r(9410),
        b = ["cx", "cy", "angle", "ticks", "axisLine"],
        B = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
      function h(e) {
        return (
          (h =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          h(e)
        );
      }
      function g() {
        return (
          (g = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          g.apply(this, arguments)
        );
      }
      function w(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(r), !0).forEach(function (t) {
                O(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function _(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              i,
              n = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      function F(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, z(i.key), i);
        }
      }
      function S(e, t) {
        return (
          (S = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          S(e, t)
        );
      }
      function R(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = M(e);
          if (t) {
            var n = M(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === h(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(this, r);
        };
      }
      function M(e) {
        return (
          (M = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          M(e)
        );
      }
      function O(e, t, r) {
        return (
          (t = z(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function z(e) {
        var t = (function (e, t) {
          if ("object" !== h(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== h(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === h(t) ? t : String(t);
      }
      var j = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && S(e, t);
        })(o, e);
        var t,
          r,
          i,
          a = R(o);
        function o() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
            a.apply(this, arguments)
          );
        }
        return (
          (t = o),
          (i = [
            {
              key: "renderTickItem",
              value: function (e, t, r) {
                return l.isValidElement(e)
                  ? l.cloneElement(e, t)
                  : n()(e)
                  ? e(t)
                  : l.createElement(
                      u.x,
                      g({}, t, {
                        className: "recharts-polar-radius-axis-tick-value",
                      }),
                      r,
                    );
              },
            },
          ]),
          (r = [
            {
              key: "getTickValueCoord",
              value: function (e) {
                var t = e.coordinate,
                  r = this.props,
                  i = r.angle,
                  n = r.cx,
                  a = r.cy;
                return (0, y.op)(n, a, t, i);
              },
            },
            {
              key: "getTickTextAnchor",
              value: function () {
                var e;
                switch (this.props.orientation) {
                  case "left":
                    e = "end";
                    break;
                  case "right":
                    e = "start";
                    break;
                  default:
                    e = "middle";
                }
                return e;
              },
            },
            {
              key: "getViewBox",
              value: function () {
                var e = this.props,
                  t = e.cx,
                  r = e.cy,
                  i = e.angle,
                  n = e.ticks,
                  a = c()(n, function (e) {
                    return e.coordinate || 0;
                  });
                return {
                  cx: t,
                  cy: r,
                  startAngle: i,
                  endAngle: i,
                  innerRadius:
                    s()(n, function (e) {
                      return e.coordinate || 0;
                    }).coordinate || 0,
                  outerRadius: a.coordinate || 0,
                };
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var e = this.props,
                  t = e.cx,
                  r = e.cy,
                  i = e.angle,
                  n = e.ticks,
                  a = e.axisLine,
                  s = _(e, b),
                  o = n.reduce(
                    function (e, t) {
                      return [
                        Math.min(e[0], t.coordinate),
                        Math.max(e[1], t.coordinate),
                      ];
                    },
                    [1 / 0, -1 / 0],
                  ),
                  c = (0, y.op)(t, r, o[0], i),
                  u = (0, y.op)(t, r, o[1], i),
                  m = v(
                    v(v({}, (0, f.L6)(s)), {}, { fill: "none" }, (0, f.L6)(a)),
                    {},
                    { x1: c.x, y1: c.y, x2: u.x, y2: u.y },
                  );
                return l.createElement(
                  "line",
                  g({ className: "recharts-polar-radius-axis-line" }, m),
                );
              },
            },
            {
              key: "renderTicks",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.ticks,
                  i = t.tick,
                  n = t.angle,
                  a = t.tickFormatter,
                  s = t.stroke,
                  c = _(t, B),
                  u = this.getTickTextAnchor(),
                  m = (0, f.L6)(c),
                  y = (0, f.L6)(i),
                  b = r.map(function (t, r) {
                    var c = e.getTickValueCoord(t),
                      f = v(
                        v(
                          v(
                            v(
                              {
                                textAnchor: u,
                                transform: "rotate("
                                  .concat(90 - n, ", ")
                                  .concat(c.x, ", ")
                                  .concat(c.y, ")"),
                              },
                              m,
                            ),
                            {},
                            { stroke: "none", fill: s },
                            y,
                          ),
                          {},
                          { index: r },
                          c,
                        ),
                        {},
                        { payload: t },
                      );
                    return l.createElement(
                      d.m,
                      g(
                        {
                          className: "recharts-polar-radius-axis-tick",
                          key: "tick-".concat(r),
                        },
                        (0, p.bw)(e.props, t, r),
                      ),
                      o.renderTickItem(i, f, a ? a(t.value, r) : t.value),
                    );
                  });
                return l.createElement(
                  d.m,
                  { className: "recharts-polar-radius-axis-ticks" },
                  b,
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.ticks,
                  r = e.axisLine,
                  i = e.tick;
                return t && t.length
                  ? l.createElement(
                      d.m,
                      { className: "recharts-polar-radius-axis" },
                      r && this.renderAxisLine(),
                      i && this.renderTicks(),
                      m._.renderCallByParent(this.props, this.getViewBox()),
                    )
                  : null;
              },
            },
          ]) && F(t.prototype, r),
          i && F(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(l.PureComponent);
      O(j, "displayName", "PolarRadiusAxis"),
        O(j, "axisType", "radiusAxis"),
        O(j, "defaultProps", {
          type: "number",
          radiusAxisId: 0,
          cx: 0,
          cy: 0,
          angle: 0,
          orientation: "right",
          stroke: "#ccc",
          axisLine: !0,
          tick: !0,
          tickCount: 5,
          allowDataOverflow: !1,
          scale: "auto",
          allowDuplicatedCategory: !0,
        });
    },
    57103: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => C });
      var i = r(47184),
        n = r.n(i),
        a = r(39277),
        s = r.n(a),
        o = r(48e3),
        c = r.n(o),
        l = r(51391),
        u = r.n(l),
        m = r(80275),
        d = r.n(m),
        y = r(93706),
        p = r.n(y),
        f = r(89526),
        b = r(68059),
        B = r(64403),
        h = r.n(B),
        g = r(16171),
        w = r(59509),
        v = r(80072),
        _ = r(37287),
        F = r(31234),
        S = r(96963),
        R = r(61452),
        M = r(34324),
        O = r(9410);
      function z(e) {
        return (
          (z =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          z(e)
        );
      }
      function j() {
        return (
          (j = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          j.apply(this, arguments)
        );
      }
      function E(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                W(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function T(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, I(i.key), i);
        }
      }
      function U(e, t) {
        return (
          (U = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          U(e, t)
        );
      }
      function x(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = k(e);
          if (t) {
            var n = k(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === z(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return P(e);
          })(this, r);
        };
      }
      function P(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function k(e) {
        return (
          (k = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          k(e)
        );
      }
      function W(e, t, r) {
        return (
          (t = I(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function I(e) {
        var t = (function (e, t) {
          if ("object" !== z(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== z(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === z(t) ? t : String(t);
      }
      var C = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && U(e, t);
        })(o, e);
        var t,
          r,
          i,
          a = x(o);
        function o() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, o);
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
            r[i] = arguments[i];
          return (
            W(P((e = a.call.apply(a, [this].concat(r)))), "state", {
              isAnimationFinished: !1,
            }),
            W(P(e), "handleAnimationEnd", function () {
              var t = e.props.onAnimationEnd;
              e.setState({ isAnimationFinished: !0 }), s()(t) && t();
            }),
            W(P(e), "handleAnimationStart", function () {
              var t = e.props.onAnimationStart;
              e.setState({ isAnimationFinished: !1 }), s()(t) && t();
            }),
            W(P(e), "handleMouseEnter", function (t) {
              var r = e.props.onMouseEnter;
              r && r(e.props, t);
            }),
            W(P(e), "handleMouseLeave", function (t) {
              var r = e.props.onMouseLeave;
              r && r(e.props, t);
            }),
            e
          );
        }
        return (
          (t = o),
          (i = [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return e.animationId !== t.prevAnimationId
                  ? {
                      prevAnimationId: e.animationId,
                      curPoints: e.points,
                      prevPoints: t.curPoints,
                    }
                  : e.points !== t.curPoints
                  ? { curPoints: e.points }
                  : null;
              },
            },
            {
              key: "renderDotItem",
              value: function (e, t) {
                return f.isValidElement(e)
                  ? f.cloneElement(e, t)
                  : s()(e)
                  ? e(t)
                  : f.createElement(
                      S.o,
                      j({}, t, { className: "recharts-radar-dot" }),
                    );
              },
            },
          ]),
          (r = [
            {
              key: "renderDots",
              value: function (e) {
                var t = this.props,
                  r = t.dot,
                  i = t.dataKey,
                  n = (0, O.L6)(this.props),
                  a = (0, O.L6)(r),
                  s = e.map(function (e, t) {
                    var s = A(
                      A(A({ key: "dot-".concat(t), r: 3 }, n), a),
                      {},
                      { dataKey: i, cx: e.x, cy: e.y, index: t, payload: e },
                    );
                    return o.renderDotItem(r, s);
                  });
                return f.createElement(
                  R.m,
                  { className: "recharts-radar-dots" },
                  s,
                );
              },
            },
            {
              key: "renderPolygonStatically",
              value: function (e) {
                var t,
                  r = this.props,
                  i = r.shape,
                  n = r.dot,
                  a = r.isRange,
                  o = r.baseLinePoints,
                  c = r.connectNulls;
                return (
                  (t = f.isValidElement(i)
                    ? f.cloneElement(i, A(A({}, this.props), {}, { points: e }))
                    : s()(i)
                    ? i(A(A({}, this.props), {}, { points: e }))
                    : f.createElement(
                        F.m,
                        j({}, (0, O.L6)(this.props, !0), {
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          points: e,
                          baseLinePoints: a ? o : null,
                          connectNulls: c,
                        }),
                      )),
                  f.createElement(
                    R.m,
                    { className: "recharts-radar-polygon" },
                    t,
                    n ? this.renderDots(e) : null,
                  )
                );
              },
            },
            {
              key: "renderPolygonWithAnimation",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.points,
                  i = t.isAnimationActive,
                  n = t.animationBegin,
                  a = t.animationDuration,
                  s = t.animationEasing,
                  o = t.animationId,
                  c = this.state.prevPoints;
                return f.createElement(
                  b.ZP,
                  {
                    begin: n,
                    duration: a,
                    isActive: i,
                    easing: s,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "radar-".concat(o),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (t) {
                    var i = t.t,
                      n = c && c.length / r.length,
                      a = r.map(function (e, t) {
                        var r = c && c[Math.floor(t * n)];
                        if (r) {
                          var a = (0, g.k4)(r.x, e.x),
                            s = (0, g.k4)(r.y, e.y);
                          return A(A({}, e), {}, { x: a(i), y: s(i) });
                        }
                        var o = (0, g.k4)(e.cx, e.x),
                          l = (0, g.k4)(e.cy, e.y);
                        return A(A({}, e), {}, { x: o(i), y: l(i) });
                      });
                    return e.renderPolygonStatically(a);
                  },
                );
              },
            },
            {
              key: "renderPolygon",
              value: function () {
                var e = this.props,
                  t = e.points,
                  r = e.isAnimationActive,
                  i = e.isRange,
                  a = this.state.prevPoints;
                return !(r && t && t.length) || i || (a && n()(a, t))
                  ? this.renderPolygonStatically(t)
                  : this.renderPolygonWithAnimation();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.hide,
                  r = e.className,
                  i = e.points,
                  n = e.isAnimationActive;
                if (t || !i || !i.length) return null;
                var a = this.state.isAnimationFinished,
                  s = h()("recharts-radar", r);
                return f.createElement(
                  R.m,
                  { className: s },
                  this.renderPolygon(),
                  (!n || a) && M.e.renderCallByParent(this.props, i),
                );
              },
            },
          ]) && T(t.prototype, r),
          i && T(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(f.PureComponent);
      W(C, "displayName", "Radar"),
        W(C, "defaultProps", {
          angleAxisId: 0,
          radiusAxisId: 0,
          hide: !1,
          activeDot: !0,
          dot: !1,
          legendType: "rect",
          isAnimationActive: !w.x.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        W(C, "getComposedData", function (e) {
          var t = e.radiusAxis,
            r = e.angleAxis,
            i = e.displayedData,
            n = e.dataKey,
            a = e.bandSize,
            s = r.cx,
            o = r.cy,
            l = !1,
            m = [];
          i.forEach(function (e, i) {
            var c = (0, _.F$)(e, r.dataKey, i),
              y = (0, _.F$)(e, n),
              f = r.scale(c) + (a || 0),
              b = p()(y) ? d()(y) : y,
              B = u()(b) ? void 0 : t.scale(b);
            p()(y) && y.length >= 2 && (l = !0),
              m.push(
                A(
                  A({}, (0, v.op)(s, o, B, f)),
                  {},
                  {
                    name: c,
                    value: y,
                    cx: s,
                    cy: o,
                    radius: B,
                    angle: f,
                    payload: e,
                  },
                ),
              );
          });
          var y = [];
          return (
            l &&
              m.forEach(function (e) {
                if (p()(e.value)) {
                  var r = c()(e.value),
                    i = u()(r) ? void 0 : t.scale(r);
                  y.push(
                    A(A({}, e), {}, { radius: i }, (0, v.op)(s, o, i, e.angle)),
                  );
                } else y.push(e);
              }),
            { points: m, isRange: l, baseLinePoints: y }
          );
        });
    },
    31234: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => g });
      var i = r(89526),
        n = r(64403),
        a = r.n(n),
        s = r(9410);
      function o(e) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          o(e)
        );
      }
      var c = ["points", "className", "baseLinePoints", "connectNulls"];
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      function u(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              i,
              n = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      function m(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              ((n = i.key),
              (a = void 0),
              (a = (function (e, t) {
                if ("object" !== o(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var i = r.call(e, t || "default");
                  if ("object" !== o(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(n, "string")),
              "symbol" === o(a) ? a : String(a)),
              i,
            );
        }
        var n, a;
      }
      function d(e, t) {
        return (
          (d = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          d(e, t)
        );
      }
      function y(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            i = p(e);
          if (t) {
            var n = p(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === o(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(this, r);
        };
      }
      function p(e) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          p(e)
        );
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return b(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return b(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return b(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      var B = function (e) {
          return e && e.x === +e.x && e.y === +e.y;
        },
        h = function (e, t) {
          var r = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = [[]];
            return (
              e.forEach(function (e) {
                B(e)
                  ? t[t.length - 1].push(e)
                  : t[t.length - 1].length > 0 && t.push([]);
              }),
              B(e[0]) && t[t.length - 1].push(e[0]),
              t[t.length - 1].length <= 0 && (t = t.slice(0, -1)),
              t
            );
          })(e);
          t &&
            (r = [
              r.reduce(function (e, t) {
                return [].concat(f(e), f(t));
              }, []),
            ]);
          var i = r
            .map(function (e) {
              return e.reduce(function (e, t, r) {
                return ""
                  .concat(e)
                  .concat(0 === r ? "M" : "L")
                  .concat(t.x, ",")
                  .concat(t.y);
              }, "");
            })
            .join("");
          return 1 === r.length ? "".concat(i, "Z") : i;
        },
        g = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && d(e, t);
          })(p, e);
          var t,
            r,
            n,
            o = y(p);
          function p() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, p),
              o.apply(this, arguments)
            );
          }
          return (
            (t = p),
            (r = [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.points,
                    r = e.className,
                    n = e.baseLinePoints,
                    o = e.connectNulls,
                    m = u(e, c);
                  if (!t || !t.length) return null;
                  var d = a()("recharts-polygon", r);
                  if (n && n.length) {
                    var y = m.stroke && "none" !== m.stroke,
                      p = (function (e, t, r) {
                        var i = h(e, r);
                        return ""
                          .concat("Z" === i.slice(-1) ? i.slice(0, -1) : i, "L")
                          .concat(h(t.reverse(), r).slice(1));
                      })(t, n, o);
                    return i.createElement(
                      "g",
                      { className: d },
                      i.createElement(
                        "path",
                        l({}, (0, s.L6)(m, !0), {
                          fill: "Z" === p.slice(-1) ? m.fill : "none",
                          stroke: "none",
                          d: p,
                        }),
                      ),
                      y
                        ? i.createElement(
                            "path",
                            l({}, (0, s.L6)(m, !0), {
                              fill: "none",
                              d: h(t, o),
                            }),
                          )
                        : null,
                      y
                        ? i.createElement(
                            "path",
                            l({}, (0, s.L6)(m, !0), {
                              fill: "none",
                              d: h(n, o),
                            }),
                          )
                        : null,
                    );
                  }
                  var f = h(t, o);
                  return i.createElement(
                    "path",
                    l({}, (0, s.L6)(m, !0), {
                      fill: "Z" === f.slice(-1) ? m.fill : "none",
                      className: d,
                      d: f,
                    }),
                  );
                },
              },
            ]) && m(t.prototype, r),
            n && m(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            p
          );
        })(i.PureComponent);
    },
    18479: (e, t, r) => {
      "use strict";
      r.d(t, {
        $V: () => m,
        Ie: () => u,
        J2: () => H,
        f5: () => V,
        h$: () => l,
        rB: () => T,
        rj: () => X,
        z1: () => I,
        zm: () => x,
      });
      var i = r(45878),
        n = r(43898),
        a = r(67328);
      const s = i.Message;
      var o, c, l, u, m;
      !(function (e) {
        (e[(e.k_ESeason_Invalid = 0)] = "k_ESeason_Invalid"),
          (e[(e.k_ESeason_Spring = 1)] = "k_ESeason_Spring"),
          (e[(e.k_ESeason_Summer = 2)] = "k_ESeason_Summer"),
          (e[(e.k_ESeason_Fall = 3)] = "k_ESeason_Fall"),
          (e[(e.k_ESeason_Winter = 4)] = "k_ESeason_Winter");
      })(o || (o = {})),
        (function (e) {
          (e[(e.k_UserActionEventType_Invalid = 0)] =
            "k_UserActionEventType_Invalid"),
            (e[(e.k_UserActionEventType_GiveawayRegistration = 1)] =
              "k_UserActionEventType_GiveawayRegistration"),
            (e[(e.k_UserActionEventType_PartnerEventPoll = 2)] =
              "k_UserActionEventType_PartnerEventPoll"),
            (e[(e.k_UserActionEventType_UserConsent = 3)] =
              "k_UserActionEventType_UserConsent"),
            (e[(e.k_UserActionEventType_UserFileUpload = 4)] =
              "k_UserActionEventType_UserFileUpload"),
            (e[(e.k_UserActionEventType_MAX = 5)] =
              "k_UserActionEventType_MAX");
        })(c || (c = {})),
        (function (e) {
          (e[(e.k_EYearInReviewPrivacyStateInvalid = 0)] =
            "k_EYearInReviewPrivacyStateInvalid"),
            (e[(e.k_EYearInReviewPrivacyStatePrivate = 1)] =
              "k_EYearInReviewPrivacyStatePrivate"),
            (e[(e.k_EYearInReviewPrivacyStateFriendsOnly = 2)] =
              "k_EYearInReviewPrivacyStateFriendsOnly"),
            (e[(e.k_EYearInReviewPrivacyStatePublic = 3)] =
              "k_EYearInReviewPrivacyStatePublic"),
            (e[(e.k_EYearInReviewPrivacyStateUnlisted = 4)] =
              "k_EYearInReviewPrivacyStateUnlisted");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EYearInReviewAccessSource_Unknown = 0)] =
            "k_EYearInReviewAccessSource_Unknown"),
            (e[(e.k_EYearInReviewAccessSource_IM = 1)] =
              "k_EYearInReviewAccessSource_IM"),
            (e[(e.k_EYearInReviewAccessSource_Homepage = 2)] =
              "k_EYearInReviewAccessSource_Homepage"),
            (e[(e.k_EYearInReviewAccessSource_Mobile = 3)] =
              "k_EYearInReviewAccessSource_Mobile"),
            (e[(e.k_EYearInReviewAccessSource_SocialMedia = 4)] =
              "k_EYearInReviewAccessSource_SocialMedia"),
            (e[(e.k_EYearInReviewAccessSource_Email = 5)] =
              "k_EYearInReviewAccessSource_Email"),
            (e[(e.k_EYearInReviewAccessSource_Blog = 6)] =
              "k_EYearInReviewAccessSource_Blog"),
            (e[(e.k_EYearInReviewAccessSource_StoreMenu = 7)] =
              "k_EYearInReviewAccessSource_StoreMenu"),
            (e[(e.k_EYearInReviewAccessSource_Press = 8)] =
              "k_EYearInReviewAccessSource_Press"),
            (e[(e.k_EYearInReviewAccessSource_FriendsReplay = 9)] =
              "k_EYearInReviewAccessSource_FriendsReplay");
        })(u || (u = {}));
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.total_playtime_seconds || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  total_playtime_seconds: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  total_sessions: {
                    n: 20,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  vr_sessions: {
                    n: 21,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  deck_sessions: {
                    n: 22,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  controller_sessions: {
                    n: 23,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  linux_sessions: {
                    n: 24,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  macos_sessions: {
                    n: 25,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  windows_sessions: {
                    n: 26,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  total_playtime_percentagex100: {
                    n: 27,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  vr_playtime_percentagex100: {
                    n: 28,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  deck_playtime_percentagex100: {
                    n: 29,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  controller_playtime_percentagex100: {
                    n: 30,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  linux_playtime_percentagex100: {
                    n: 31,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  macos_playtime_percentagex100: {
                    n: 32,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  windows_playtime_percentagex100: {
                    n: 33,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStats";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.appid || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStreakGame";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.longest_consecutive_days || n.aR(p.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  longest_consecutive_days: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime_start: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  streak_games: { n: 3, c: y, r: !0, q: !0 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStreak";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.overall_rank || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  overall_rank: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  vr_rank: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  deck_rank: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  controller_rank: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  linux_rank: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  mac_rank: { n: 6, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  windows_rank: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeRanks";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.appid || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  stats: { n: 2, c: d },
                  playtime_streak: { n: 3, c: p },
                  playtime_ranks: { n: 4, c: f },
                  rtime_first_played: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  relative_game_stats: { n: 6, c: d },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGamePlaytimeStats";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.appid || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  new_this_year: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  rtime_first_played_lifetime: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  demo: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  playtest: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                  played_during_early_access: {
                    n: 6,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  played_vr: { n: 7, br: n.FE.readBool, bw: n.Xc.writeBool },
                  played_deck: { n: 8, br: n.FE.readBool, bw: n.Xc.writeBool },
                  played_controller: {
                    n: 9,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  played_linux: {
                    n: 10,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  played_mac: { n: 11, br: n.FE.readBool, bw: n.Xc.writeBool },
                  played_windows: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  total_playtime_percentagex100: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  total_sessions: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime_release_date: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameSummary";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.appid || n.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  total_playtime_percentagex100: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  relative_playtime_percentagex100: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSimpleGameSummary";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  rank: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRank";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.category || n.aR(w.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  category: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  rankings: { n: 2, c: g, r: !0, q: !0 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CRankingCategory";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.overall_ranking || n.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  overall_ranking: { n: 1, c: w },
                  vr_ranking: { n: 2, c: w },
                  deck_ranking: { n: 3, c: w },
                  controller_ranking: { n: 4, c: w },
                  linux_ranking: { n: 5, c: w },
                  mac_ranking: { n: 6, c: w },
                  windows_ranking: { n: 7, c: w },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRankings";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.total_achievements || n.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  total_achievements: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  total_games_with_achievements: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  total_rare_achievements: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserPlaytimeSummaryStats";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.stats || n.aR(F.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { stats: { n: 1, c: S, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserTagStats";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.tag_id || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  tag_id: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  tag_weight: { n: 2, br: n.FE.readFloat, bw: n.Xc.writeFloat },
                  tag_weight_pre_selection: {
                    n: 3,
                    br: n.FE.readFloat,
                    bw: n.Xc.writeFloat,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserTagStats_Tag";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.screenshots_shared || n.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  screenshots_shared: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  gifts_sent: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  loyalty_reactions: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  written_reviews: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  guides_submitted: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  workshop_contributions: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  badges_earned: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  friends_added: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  forum_posts: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  workshop_subscriptions: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  games_played_pct: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  achievements_pct: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_streak_pct: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeByNumbers";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.total_stats || n.aR(M.M()),
            s.initialize(this, e, 0, -1, [2, 5, 6], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  total_stats: { n: 1, c: d },
                  games: { n: 2, c: b, r: !0, q: !0 },
                  playtime_streak: { n: 3, c: p },
                  months: { n: 5, c: O, r: !0, q: !0 },
                  game_summary: { n: 6, c: B, r: !0, q: !0 },
                  demos_played: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_rankings: { n: 8, c: v },
                  playtests_played: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  summary_stats: { n: 10, c: _ },
                  substantial: {
                    n: 11,
                    d: !0,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  tag_stats: { n: 12, c: F },
                  by_numbers: { n: 13, c: R },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserPlaytimeStats";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.rtime_month || n.aR(O.M()),
            s.initialize(this, e, 0, -1, [4, 6], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  rtime_month: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  stats: { n: 2, c: d },
                  playtime_streak: { n: 3, c: p },
                  appid: { n: 4, c: b, r: !0, q: !0 },
                  relative_monthly_stats: { n: 5, c: d },
                  game_summary: { n: 6, c: h, r: !0, q: !0 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMonthlyPlaytimeStats";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.account_id || n.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  account_id: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  playtime_stats: { n: 3, c: M },
                  privacy_state: {
                    n: 4,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserYearInReviewStats";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.from_dbo || n.aR(j.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  from_dbo: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  overall_time_ms: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  dbo_load_ms: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  query_execution_ms: {
                    n: 4,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  message_population_ms: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  dbo_lock_load_ms: {
                    n: 6,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CYearInReviewPerformanceStats";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.statid || n.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  statid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  fieldid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  achievement_name_internal: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  rtime_unlocked: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAchievementDetails";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appid || n.aR(A.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  achievements: { n: 2, c: E, r: !0, q: !0 },
                  all_time_unlocked_achievements: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  unlocked_more_in_future: {
                    n: 4,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = n.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameAchievements";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.steamid || n.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  force_regenerate: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  access_source: {
                    n: 4,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReview_Request";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.stats || n.aR(U.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  stats: { n: 1, c: z },
                  performance_stats: { n: 2, c: j },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReview_Response";
        }
      }
      class x extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.steamid || n.aR(x.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  privacy_state: {
                    n: 3,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_SetUserSharingPermissions_Request";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.privacy_state || n.aR(P.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_SetUserSharingPermissions_Response";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.steamid || n.aR(k.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = n.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserSharingPermissions_Request";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.privacy_state || n.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  generated_value: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  steamid: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  rt_privacy_updated: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserSharingPermissions_Response";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.steamid || n.aR(I.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  total_only: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearAchievements_Request";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.game_achievements || n.aR(C.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  game_achievements: { n: 1, c: A, r: !0, q: !0 },
                  total_achievements: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  total_rare_achievements: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  total_games_with_achievements: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearAchievements_Response";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.steamid || n.aR(X.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Request";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.apps || n.aR(D.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { apps: { n: 1, c: L, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Response";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.image_url || n.aR(N.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  image_url: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  preview_url: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  image_width: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  image_height: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  maybe_inappropriate_sex: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  maybe_inappropriate_violence: {
                    n: 6,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
        }
      }
      class L extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.appid || n.aR(L.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  screenshots: { n: 2, c: N, r: !0, q: !0 },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
        }
      }
      class Y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.steamid || n.aR(Y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  gid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  type: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  jsondata: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = n.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_SetUserActionData_Request";
        }
      }
      class G extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_SetUserActionData_Response";
        }
      }
      class q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.steamid || n.aR(q.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  gid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  type: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserActionData_Request";
        }
      }
      class K extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.jsondata || n.aR(K.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  jsondata: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = n.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserActionData_Response";
        }
      }
      class V extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.steamid || n.aR(V.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  return_private: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetFriendsSharedYearInReview_Request";
        }
      }
      class $ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.steamid || n.aR($.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  privacy_state: {
                    n: 3,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  rt_privacy_updated: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA($.M(), e, t);
        }
        static fromObject(e) {
          return n.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendSharedYearInView";
        }
      }
      class Z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.friend_shares || n.aR(Z.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  friend_shares: { n: 1, c: $, r: !0, q: !0 },
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetFriendsSharedYearInReview_Response";
        }
      }
      class H extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.steamid || n.aR(H.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  language: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReviewShareImage_Request";
        }
      }
      class J extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.images || n.aR(J.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { images: { n: 1, c: Q, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = n.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReviewShareImage_Response";
        }
      }
      class Q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.name || n.aR(Q.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  name: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  url_path: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
        }
      }
      class ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.year || n.aR(ee.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  year: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = n.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(ee.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUpdateProcessingProgress_Request";
        }
      }
      class te extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.year || n.aR(te.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  year: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  month: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  rt_processing_start: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rt_queue_complete: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rt_queue_emptied: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rt_platform_summary: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  accounts_queued: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  largest_account_id: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = n.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(te.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMonthlyProgress";
        }
      }
      class re extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.results || n.aR(re.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { results: { n: 1, c: te, r: !0, q: !0 } },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = n.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(re.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUpdateProcessingProgress_Response";
        }
      }
      !(function (e) {
        (e.GetUserYearInReview = function (e, t) {
          return e.SendMsg(
            "SaleFeature.GetUserYearInReview#1",
            (0, a.MD)(T, t),
            U,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetUserSharingPermissions = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, a.MD)(k, t),
              W,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.SetUserSharingPermissions = function (e, t) {
            return e.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, a.MD)(x, t),
              P,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetUserYearAchievements = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, a.MD)(I, t),
              C,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetUserYearScreenshots = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, a.MD)(X, t),
              D,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetUserActionData = function (e, t) {
            return e.SendMsg(
              "SaleFeature.SetUserActionData#1",
              (0, a.MD)(Y, t),
              G,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetUserActionData = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, a.MD)(q, t),
              K,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetFriendsSharedYearInReview = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, a.MD)(V, t),
              Z,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetUserYearInReviewShareImage = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, a.MD)(H, t),
              J,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetUpdateProcessingProgress = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUpdateProcessingProgress#1",
              (0, a.MD)(ee, t),
              re,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          });
      })(m || (m = {}));
    },
  },
]);

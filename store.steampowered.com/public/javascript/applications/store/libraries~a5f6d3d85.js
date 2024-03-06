/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3143],
  {
    71923: (e, t, r) => {
      e.exports = r(11773);
    },
    11773: (e) => {
      e.exports = function (e) {
        return e && e.length ? e[0] : void 0;
      };
    },
    55353: (e, t, r) => {
      var i = r(17425),
        n = r(6515),
        a = r(60647);
      e.exports = function (e, t) {
        return e && e.length ? i(e, a(t, 2), n) : void 0;
      };
    },
    74310: (e, t, r) => {
      var i = r(17425),
        n = r(60647),
        a = r(66983);
      e.exports = function (e, t) {
        return e && e.length ? i(e, n(t, 2), a) : void 0;
      };
    },
    74436: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => c });
      var i = r(6256),
        n = r(71068),
        a = r(63501),
        s = r(53460),
        o = r(6104),
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
    588: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => c });
      var i = r(6256),
        n = r(50524),
        a = r(71068),
        s = r(63501),
        o = r(53460),
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
    6104: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => C });
      var i,
        n = r(47427),
        a = r(15819),
        s = r(18310),
        o = r.n(s),
        c = r(49198),
        l = r.n(c),
        u = r(38716),
        m = r.n(u),
        d = r(8889),
        y = r.n(d),
        b = r(84148),
        p = r(47430),
        f = r(84223),
        B = r(93998),
        g = r(47094),
        w = r(72961),
        h = r(85674),
        _ = r(94797),
        v = r(77125),
        F = r(53460),
        z = r(76325),
        M = r(70416),
        R = r(90481),
        S = r(81156),
        O = r(37350);
      function j(e) {
        return (
          (j =
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
          j(e)
        );
      }
      function E() {
        return (
          (E = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          E.apply(this, arguments)
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(r), !0).forEach(function (t) {
                I(e, t, r[t]);
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
      function x(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, X(i.key), i);
        }
      }
      function W(e, t) {
        return (
          (W = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          W(e, t)
        );
      }
      function A(e) {
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
            if (t && ("object" === j(t) || "function" == typeof t)) return t;
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
      function I(e, t, r) {
        return (
          (t = X(t)) in e
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
      function X(e) {
        var t = (function (e, t) {
          if ("object" !== j(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== j(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === j(t) ? t : String(t);
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
            t && W(e, t);
        })(c, e);
        var t,
          r,
          i,
          s = A(c);
        function c(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, c),
            I(P((t = s.call(this, e))), "pieRef", null),
            I(P(t), "sectorRefs", []),
            I(P(t), "id", (0, z.EL)("recharts-pie-")),
            I(P(t), "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), y()(e) && e();
            }),
            I(P(t), "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), y()(e) && e();
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
          (t = c),
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
                return n.isValidElement(e)
                  ? n.cloneElement(e, t)
                  : y()(e)
                  ? e(t)
                  : n.createElement(
                      f.H,
                      E({}, t, {
                        type: "linear",
                        className: "recharts-pie-label-line",
                      }),
                    );
              },
            },
            {
              key: "renderLabelItem",
              value: function (e, t, r) {
                if (n.isValidElement(e)) return n.cloneElement(e, t);
                var i = r;
                return y()(e) && ((i = e(t)), n.isValidElement(i))
                  ? i
                  : n.createElement(
                      B.x,
                      E({}, t, {
                        alignmentBaseline: "middle",
                        className: "recharts-pie-label-text",
                      }),
                      i,
                    );
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
                  a = t.dataKey,
                  s = t.valueKey,
                  o = (0, _.L6)(this.props),
                  l = (0, _.L6)(r),
                  u = (0, _.L6)(i),
                  d = (r && r.offsetRadius) || 20,
                  y = e.map(function (e, t) {
                    var y = (e.startAngle + e.endAngle) / 2,
                      b = (0, F.op)(e.cx, e.cy, e.outerRadius + d, y),
                      f = T(
                        T(T(T({}, o), e), {}, { stroke: "none" }, l),
                        {},
                        { index: t, textAnchor: c.getTextAnchor(b.x, e.cx) },
                        b,
                      ),
                      B = T(
                        T(
                          T(T({}, o), e),
                          {},
                          { fill: "none", stroke: e.fill },
                          u,
                        ),
                        {},
                        {
                          index: t,
                          points: [(0, F.op)(e.cx, e.cy, e.outerRadius, y), b],
                          key: "line",
                        },
                      ),
                      g = a;
                    return (
                      m()(a) && m()(s) ? (g = "value") : m()(a) && (g = s),
                      n.createElement(
                        p.m,
                        {
                          key: "label-"
                            .concat(e.startAngle, "-")
                            .concat(e.endAngle),
                        },
                        i && c.renderLabelLineItem(i, B),
                        c.renderLabelItem(r, f, (0, M.F$)(e, g)),
                      )
                    );
                  });
                return n.createElement(
                  p.m,
                  { className: "recharts-pie-labels" },
                  y,
                );
              },
            },
            {
              key: "renderSectorsStatically",
              value: function (e) {
                var t = this,
                  r = this.props,
                  i = r.activeShape,
                  a = r.blendStroke,
                  s = r.inactiveShape;
                return e.map(function (r, o) {
                  if (
                    0 === (null == r ? void 0 : r.startAngle) &&
                    0 === (null == r ? void 0 : r.endAngle) &&
                    1 !== e.length
                  )
                    return null;
                  var c = t.isActiveIndex(o),
                    l = s && t.hasActiveIndex() ? s : null,
                    u = c ? i : l,
                    m = T(
                      T({}, r),
                      {},
                      { stroke: a ? r.fill : r.stroke, tabIndex: -1 },
                    );
                  return n.createElement(
                    p.m,
                    E(
                      {
                        ref: function (e) {
                          e &&
                            !t.sectorRefs.includes(e) &&
                            t.sectorRefs.push(e);
                        },
                        tabIndex: -1,
                        className: "recharts-pie-sector",
                      },
                      (0, S.bw)(t.props, r, o),
                      {
                        key: "sector-"
                          .concat(null == r ? void 0 : r.startAngle, "-")
                          .concat(null == r ? void 0 : r.endAngle, "-")
                          .concat(r.midAngle),
                      },
                    ),
                    n.createElement(
                      O.bn,
                      E({ option: u, isActive: c, shapeType: "sector" }, m),
                    ),
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
                  s = t.animationBegin,
                  c = t.animationDuration,
                  l = t.animationEasing,
                  u = t.animationId,
                  m = this.state,
                  d = m.prevSectors,
                  y = m.prevIsAnimationActive;
                return n.createElement(
                  a.ZP,
                  {
                    begin: s,
                    duration: c,
                    isActive: i,
                    easing: l,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(u, "-").concat(y),
                    onAnimationStart: this.handleAnimationStart,
                    onAnimationEnd: this.handleAnimationEnd,
                  },
                  function (t) {
                    var i = t.t,
                      a = [],
                      s = (r && r[0]).startAngle;
                    return (
                      r.forEach(function (e, t) {
                        var r = d && d[t],
                          n = t > 0 ? o()(e, "paddingAngle", 0) : 0;
                        if (r) {
                          var c = (0, z.k4)(
                              r.endAngle - r.startAngle,
                              e.endAngle - e.startAngle,
                            ),
                            l = T(
                              T({}, e),
                              {},
                              { startAngle: s + n, endAngle: s + c(i) + n },
                            );
                          a.push(l), (s = l.endAngle);
                        } else {
                          var u = e.endAngle,
                            m = e.startAngle,
                            y = (0, z.k4)(0, u - m)(i),
                            b = T(
                              T({}, e),
                              {},
                              { startAngle: s + n, endAngle: s + y + n },
                            );
                          a.push(b), (s = b.endAngle);
                        }
                      }),
                      n.createElement(p.m, null, e.renderSectorsStatically(a))
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
                return !(r && t && t.length) || (i && l()(i, t))
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
                  a = t.className,
                  s = t.label,
                  o = t.cx,
                  c = t.cy,
                  l = t.innerRadius,
                  u = t.outerRadius,
                  m = t.isAnimationActive,
                  d = this.state.isAnimationFinished;
                if (
                  r ||
                  !i ||
                  !i.length ||
                  !(0, z.hj)(o) ||
                  !(0, z.hj)(c) ||
                  !(0, z.hj)(l) ||
                  !(0, z.hj)(u)
                )
                  return null;
                var y = (0, b.Z)("recharts-pie", a);
                return n.createElement(
                  p.m,
                  {
                    tabIndex: this.props.rootTabIndex,
                    className: y,
                    ref: function (t) {
                      e.pieRef = t;
                    },
                  },
                  this.renderSectors(),
                  s && this.renderLabels(i),
                  g._.renderCallByParent(this.props, null, !1),
                  (!m || d) && w.e.renderCallByParent(this.props, i, !1),
                );
              },
            },
          ]) && x(t.prototype, r),
          i && x(t, i),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          c
        );
      })(n.PureComponent);
      (i = C),
        I(C, "displayName", "Pie"),
        I(C, "defaultProps", {
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
          isAnimationActive: !v.x.isSsr,
          animationBegin: 400,
          animationDuration: 1500,
          animationEasing: "ease",
          nameKey: "name",
          blendStroke: !1,
          rootTabIndex: 0,
        }),
        I(C, "parseDeltaAngle", function (e, t) {
          return (0, z.uY)(t - e) * Math.min(Math.abs(t - e), 360);
        }),
        I(C, "getRealPieData", function (e) {
          var t = e.props,
            r = t.data,
            i = t.children,
            n = (0, _.L6)(e.props),
            a = (0, _.NN)(i, h.b);
          return r && r.length
            ? r.map(function (e, t) {
                return T(T(T({ payload: e }, n), e), a && a[t] && a[t].props);
              })
            : a && a.length
            ? a.map(function (e) {
                return T(T({}, n), e.props);
              })
            : [];
        }),
        I(C, "parseCoordinateOfPie", function (e, t) {
          var r = t.top,
            i = t.left,
            n = t.width,
            a = t.height,
            s = (0, F.$4)(n, a);
          return {
            cx: i + (0, z.h1)(e.props.cx, n, n / 2),
            cy: r + (0, z.h1)(e.props.cy, a, a / 2),
            innerRadius: (0, z.h1)(e.props.innerRadius, s, 0),
            outerRadius: (0, z.h1)(e.props.outerRadius, s, 0.8 * s),
            maxRadius: e.props.maxRadius || Math.sqrt(n * n + a * a) / 2,
          };
        }),
        I(C, "getComposedData", function (e) {
          var t = e.item,
            r = e.offset,
            n = i.getRealPieData(t);
          if (!n || !n.length) return null;
          var a = t.props,
            s = a.cornerRadius,
            o = a.startAngle,
            c = a.endAngle,
            l = a.paddingAngle,
            u = a.dataKey,
            d = a.nameKey,
            y = a.valueKey,
            b = a.tooltipType,
            p = Math.abs(t.props.minAngle),
            f = i.parseCoordinateOfPie(t, r),
            B = i.parseDeltaAngle(o, c),
            g = Math.abs(B),
            w = u;
          m()(u) && m()(y)
            ? ((0, R.Z)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
              ),
              (w = "value"))
            : m()(u) &&
              ((0, R.Z)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
              ),
              (w = y));
          var h,
            _,
            v = n.filter(function (e) {
              return 0 !== (0, M.F$)(e, w, 0);
            }).length,
            S = g - v * p - (g >= 360 ? v : v - 1) * l,
            O = n.reduce(function (e, t) {
              var r = (0, M.F$)(t, w, 0);
              return e + ((0, z.hj)(r) ? r : 0);
            }, 0);
          O > 0 &&
            (h = n.map(function (e, t) {
              var r,
                i = (0, M.F$)(e, w, 0),
                n = (0, M.F$)(e, d, t),
                a = ((0, z.hj)(i) ? i : 0) / O,
                c =
                  (r = t
                    ? _.endAngle + (0, z.uY)(B) * l * (0 !== i ? 1 : 0)
                    : o) +
                  (0, z.uY)(B) * ((0 !== i ? p : 0) + a * S),
                u = (r + c) / 2,
                m = (f.innerRadius + f.outerRadius) / 2,
                y = [{ name: n, value: i, payload: e, dataKey: w, type: b }],
                g = (0, F.op)(f.cx, f.cy, m, u);
              return (_ = T(
                T(
                  T(
                    {
                      percent: a,
                      cornerRadius: s,
                      name: n,
                      tooltipPayload: y,
                      midAngle: u,
                      middleRadius: m,
                      tooltipPosition: g,
                    },
                    e,
                  ),
                  f,
                ),
                {},
                {
                  value: (0, M.F$)(e, w),
                  startAngle: r,
                  endAngle: c,
                  payload: e,
                  paddingAngle: (0, z.uY)(B) * l,
                },
              ));
            }));
          return T(T({}, f), {}, { sectors: h, data: n });
        });
    },
    71068: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => M });
      var i = r(47427),
        n = r(8889),
        a = r.n(n),
        s = r(47430),
        o = r(14166),
        c = r(89291),
        l = r(93998),
        u = r(81156),
        m = r(94797),
        d = r(53460);
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
      function b() {
        return (
          (b = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          b.apply(this, arguments)
        );
      }
      function p(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                _(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
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
            Object.defineProperty(e, v(i.key), i);
        }
      }
      function g(e, t) {
        return (
          (g = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          g(e, t)
        );
      }
      function w(e) {
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
            i = h(e);
          if (t) {
            var n = h(this).constructor;
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
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function _(e, t, r) {
        return (
          (t = v(t)) in e
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
      function v(e) {
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
        z = 1e-5,
        M = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && g(e, t);
          })(p, e);
          var t,
            r,
            n,
            y = w(p);
          function p() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, p),
              y.apply(this, arguments)
            );
          }
          return (
            (t = p),
            (n = [
              {
                key: "renderTickItem",
                value: function (e, t, r) {
                  return i.isValidElement(e)
                    ? i.cloneElement(e, t)
                    : a()(e)
                    ? e(t)
                    : i.createElement(
                        l.x,
                        b({}, t, {
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
                  return r > z
                    ? "outer" === t
                      ? "start"
                      : "end"
                    : r < -z
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
                    n = e.radius,
                    a = e.axisLine,
                    s = e.axisLineType,
                    l = f(
                      f({}, (0, m.L6)(this.props)),
                      {},
                      { fill: "none" },
                      (0, m.L6)(a),
                    );
                  if ("circle" === s)
                    return i.createElement(
                      o.o,
                      b({ className: "recharts-polar-angle-axis-line" }, l, {
                        cx: t,
                        cy: r,
                        r: n,
                      }),
                    );
                  var u = this.props.ticks.map(function (e) {
                    return (0, d.op)(t, r, n, e.coordinate);
                  });
                  return i.createElement(
                    c.m,
                    b({ className: "recharts-polar-angle-axis-line" }, l, {
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
                    n = t.tick,
                    a = t.tickLine,
                    o = t.tickFormatter,
                    c = t.stroke,
                    l = (0, m.L6)(this.props),
                    d = (0, m.L6)(n),
                    y = f(f({}, l), {}, { fill: "none" }, (0, m.L6)(a)),
                    B = r.map(function (t, r) {
                      var m = e.getTickLineCoord(t),
                        B = f(
                          f(
                            f({ textAnchor: e.getTickTextAnchor(t) }, l),
                            {},
                            { stroke: "none", fill: c },
                            d,
                          ),
                          {},
                          { index: r, payload: t, x: m.x2, y: m.y2 },
                        );
                      return i.createElement(
                        s.m,
                        b(
                          {
                            className: "recharts-polar-angle-axis-tick",
                            key: "tick-".concat(t.coordinate),
                          },
                          (0, u.bw)(e.props, t, r),
                        ),
                        a &&
                          i.createElement(
                            "line",
                            b(
                              {
                                className:
                                  "recharts-polar-angle-axis-tick-line",
                              },
                              y,
                              m,
                            ),
                          ),
                        n &&
                          p.renderTickItem(n, B, o ? o(t.value, r) : t.value),
                      );
                    });
                  return i.createElement(
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
                    n = e.axisLine;
                  return r <= 0 || !t || !t.length
                    ? null
                    : i.createElement(
                        s.m,
                        { className: "recharts-polar-angle-axis" },
                        n && this.renderAxisLine(),
                        this.renderTicks(),
                      );
                },
              },
            ]) && B(t.prototype, r),
            n && B(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            p
          );
        })(i.PureComponent);
      _(M, "displayName", "PolarAngleAxis"),
        _(M, "axisType", "angleAxis"),
        _(M, "defaultProps", {
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
    1039: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => g });
      var i = r(47427),
        n = r(53460),
        a = r(94797),
        s = [
          "cx",
          "cy",
          "innerRadius",
          "outerRadius",
          "gridType",
          "radialLines",
        ];
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
      function c(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                d(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function d(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
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
            })(e, "string");
            return "symbol" === o(t) ? t : String(t);
          })(t)) in e
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
      var y = function (e, t, r, i) {
          var a = "";
          return (
            i.forEach(function (i, s) {
              var o = (0, n.op)(t, r, e, i);
              a += s
                ? "L ".concat(o.x, ",").concat(o.y)
                : "M ".concat(o.x, ",").concat(o.y);
            }),
            (a += "Z")
          );
        },
        b = function (e) {
          var t = e.cx,
            r = e.cy,
            s = e.innerRadius,
            o = e.outerRadius,
            c = e.polarAngles,
            u = e.radialLines;
          if (!c || !c.length || !u) return null;
          var d = m({ stroke: "#ccc" }, (0, a.L6)(e));
          return i.createElement(
            "g",
            { className: "recharts-polar-grid-angle" },
            c.map(function (e) {
              var a = (0, n.op)(t, r, s, e),
                c = (0, n.op)(t, r, o, e);
              return i.createElement(
                "line",
                l({}, d, {
                  key: "line-".concat(e),
                  x1: a.x,
                  y1: a.y,
                  x2: c.x,
                  y2: c.y,
                }),
              );
            }),
          );
        },
        p = function (e) {
          var t = e.cx,
            r = e.cy,
            n = e.radius,
            s = e.index,
            o = m(m({ stroke: "#ccc" }, (0, a.L6)(e)), {}, { fill: "none" });
          return i.createElement(
            "circle",
            l({}, o, {
              className: "recharts-polar-grid-concentric-circle",
              key: "circle-".concat(s),
              cx: t,
              cy: r,
              r: n,
            }),
          );
        },
        f = function (e) {
          var t = e.radius,
            r = e.index,
            n = m(m({ stroke: "#ccc" }, (0, a.L6)(e)), {}, { fill: "none" });
          return i.createElement(
            "path",
            l({}, n, {
              className: "recharts-polar-grid-concentric-polygon",
              key: "path-".concat(r),
              d: y(t, e.cx, e.cy, e.polarAngles),
            }),
          );
        },
        B = function (e) {
          var t = e.polarRadius,
            r = e.gridType;
          return t && t.length
            ? i.createElement(
                "g",
                { className: "recharts-polar-grid-concentric" },
                t.map(function (t, n) {
                  var a = n;
                  return "circle" === r
                    ? i.createElement(
                        p,
                        l({ key: a }, e, { radius: t, index: n }),
                      )
                    : i.createElement(
                        f,
                        l({ key: a }, e, { radius: t, index: n }),
                      );
                }),
              )
            : null;
        },
        g = function (e) {
          var t = e.cx,
            r = void 0 === t ? 0 : t,
            n = e.cy,
            a = void 0 === n ? 0 : n,
            o = e.innerRadius,
            u = void 0 === o ? 0 : o,
            m = e.outerRadius,
            d = void 0 === m ? 0 : m,
            y = e.gridType,
            p = void 0 === y ? "polygon" : y,
            f = e.radialLines,
            g = void 0 === f || f,
            w = c(e, s);
          return d <= 0
            ? null
            : i.createElement(
                "g",
                { className: "recharts-polar-grid" },
                i.createElement(
                  b,
                  l(
                    {
                      cx: r,
                      cy: a,
                      innerRadius: u,
                      outerRadius: d,
                      gridType: p,
                      radialLines: g,
                    },
                    w,
                  ),
                ),
                i.createElement(
                  B,
                  l(
                    {
                      cx: r,
                      cy: a,
                      innerRadius: u,
                      outerRadius: d,
                      gridType: p,
                      radialLines: g,
                    },
                    w,
                  ),
                ),
              );
        };
      g.displayName = "PolarGrid";
    },
    63501: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => j });
      var i = r(47427),
        n = r(55353),
        a = r.n(n),
        s = r(74310),
        o = r.n(s),
        c = r(8889),
        l = r.n(c),
        u = r(93998),
        m = r(47094),
        d = r(47430),
        y = r(53460),
        b = r(81156),
        p = r(94797),
        f = ["cx", "cy", "angle", "ticks", "axisLine"],
        B = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
      function g(e) {
        return (
          (g =
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
          g(e)
        );
      }
      function w() {
        return (
          (w = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          w.apply(this, arguments)
        );
      }
      function h(e, t) {
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                S(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function v(e, t) {
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
            Object.defineProperty(e, O(i.key), i);
        }
      }
      function z(e, t) {
        return (
          (z = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          z(e, t)
        );
      }
      function M(e) {
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
            i = R(e);
          if (t) {
            var n = R(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === g(t) || "function" == typeof t)) return t;
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
      function R(e) {
        return (
          (R = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          R(e)
        );
      }
      function S(e, t, r) {
        return (
          (t = O(t)) in e
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
      function O(e) {
        var t = (function (e, t) {
          if ("object" !== g(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== g(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === g(t) ? t : String(t);
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
            t && z(e, t);
        })(c, e);
        var t,
          r,
          n,
          s = M(c);
        function c() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, c),
            s.apply(this, arguments)
          );
        }
        return (
          (t = c),
          (n = [
            {
              key: "renderTickItem",
              value: function (e, t, r) {
                return i.isValidElement(e)
                  ? i.cloneElement(e, t)
                  : l()(e)
                  ? e(t)
                  : i.createElement(
                      u.x,
                      w({}, t, {
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
                  s = a()(n, function (e) {
                    return e.coordinate || 0;
                  });
                return {
                  cx: t,
                  cy: r,
                  startAngle: i,
                  endAngle: i,
                  innerRadius:
                    o()(n, function (e) {
                      return e.coordinate || 0;
                    }).coordinate || 0,
                  outerRadius: s.coordinate || 0,
                };
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var e = this.props,
                  t = e.cx,
                  r = e.cy,
                  n = e.angle,
                  a = e.ticks,
                  s = e.axisLine,
                  o = v(e, f),
                  c = a.reduce(
                    function (e, t) {
                      return [
                        Math.min(e[0], t.coordinate),
                        Math.max(e[1], t.coordinate),
                      ];
                    },
                    [1 / 0, -1 / 0],
                  ),
                  l = (0, y.op)(t, r, c[0], n),
                  u = (0, y.op)(t, r, c[1], n),
                  m = _(
                    _(_({}, (0, p.L6)(o)), {}, { fill: "none" }, (0, p.L6)(s)),
                    {},
                    { x1: l.x, y1: l.y, x2: u.x, y2: u.y },
                  );
                return i.createElement(
                  "line",
                  w({ className: "recharts-polar-radius-axis-line" }, m),
                );
              },
            },
            {
              key: "renderTicks",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.ticks,
                  n = t.tick,
                  a = t.angle,
                  s = t.tickFormatter,
                  o = t.stroke,
                  l = v(t, B),
                  u = this.getTickTextAnchor(),
                  m = (0, p.L6)(l),
                  y = (0, p.L6)(n),
                  f = r.map(function (t, r) {
                    var l = e.getTickValueCoord(t),
                      p = _(
                        _(
                          _(
                            _(
                              {
                                textAnchor: u,
                                transform: "rotate("
                                  .concat(90 - a, ", ")
                                  .concat(l.x, ", ")
                                  .concat(l.y, ")"),
                              },
                              m,
                            ),
                            {},
                            { stroke: "none", fill: o },
                            y,
                          ),
                          {},
                          { index: r },
                          l,
                        ),
                        {},
                        { payload: t },
                      );
                    return i.createElement(
                      d.m,
                      w(
                        {
                          className: "recharts-polar-radius-axis-tick",
                          key: "tick-".concat(t.coordinate),
                        },
                        (0, b.bw)(e.props, t, r),
                      ),
                      c.renderTickItem(n, p, s ? s(t.value, r) : t.value),
                    );
                  });
                return i.createElement(
                  d.m,
                  { className: "recharts-polar-radius-axis-ticks" },
                  f,
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.ticks,
                  r = e.axisLine,
                  n = e.tick;
                return t && t.length
                  ? i.createElement(
                      d.m,
                      { className: "recharts-polar-radius-axis" },
                      r && this.renderAxisLine(),
                      n && this.renderTicks(),
                      m._.renderCallByParent(this.props, this.getViewBox()),
                    )
                  : null;
              },
            },
          ]) && F(t.prototype, r),
          n && F(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          c
        );
      })(i.PureComponent);
      S(j, "displayName", "PolarRadiusAxis"),
        S(j, "axisType", "radiusAxis"),
        S(j, "defaultProps", {
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
    50524: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => P });
      var i = r(47427),
        n = r(15819),
        a = r(38716),
        s = r.n(a),
        o = r(54794),
        c = r.n(o),
        l = r(71923),
        u = r.n(l),
        m = r(49198),
        d = r.n(m),
        y = r(8889),
        b = r.n(y),
        p = r(84148),
        f = r(76325),
        B = r(77125),
        g = r(53460),
        w = r(70416),
        h = r(89291),
        _ = r(14166),
        v = r(47430),
        F = r(72961),
        z = r(94797);
      function M(e) {
        return (
          (M =
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
          M(e)
        );
      }
      function R() {
        return (
          (R = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                }
                return e;
              }),
          R.apply(this, arguments)
        );
      }
      function S(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                W(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function j(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, A(i.key), i);
        }
      }
      function E(e, t) {
        return (
          (E = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          E(e, t)
        );
      }
      function U(e) {
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
            i = x(e);
          if (t) {
            var n = x(this).constructor;
            r = Reflect.construct(i, arguments, n);
          } else r = i.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === M(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return T(e);
          })(this, r);
        };
      }
      function T(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function x(e) {
        return (
          (x = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          x(e)
        );
      }
      function W(e, t, r) {
        return (
          (t = A(t)) in e
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
      function A(e) {
        var t = (function (e, t) {
          if ("object" !== M(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== M(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === M(t) ? t : String(t);
      }
      var P = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && E(e, t);
        })(o, e);
        var t,
          r,
          a,
          s = U(o);
        function o() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, o);
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
            r[i] = arguments[i];
          return (
            W(T((e = s.call.apply(s, [this].concat(r)))), "state", {
              isAnimationFinished: !1,
            }),
            W(T(e), "handleAnimationEnd", function () {
              var t = e.props.onAnimationEnd;
              e.setState({ isAnimationFinished: !0 }), b()(t) && t();
            }),
            W(T(e), "handleAnimationStart", function () {
              var t = e.props.onAnimationStart;
              e.setState({ isAnimationFinished: !1 }), b()(t) && t();
            }),
            W(T(e), "handleMouseEnter", function (t) {
              var r = e.props.onMouseEnter;
              r && r(e.props, t);
            }),
            W(T(e), "handleMouseLeave", function (t) {
              var r = e.props.onMouseLeave;
              r && r(e.props, t);
            }),
            e
          );
        }
        return (
          (t = o),
          (a = [
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
                return i.isValidElement(e)
                  ? i.cloneElement(e, t)
                  : b()(e)
                  ? e(t)
                  : i.createElement(
                      _.o,
                      R({}, t, { className: "recharts-radar-dot" }),
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
                  n = t.dataKey,
                  a = (0, z.L6)(this.props),
                  s = (0, z.L6)(r),
                  c = e.map(function (e, t) {
                    var i = O(
                      O(O({ key: "dot-".concat(t), r: 3 }, a), s),
                      {},
                      { dataKey: n, cx: e.x, cy: e.y, index: t, payload: e },
                    );
                    return o.renderDotItem(r, i);
                  });
                return i.createElement(
                  v.m,
                  { className: "recharts-radar-dots" },
                  c,
                );
              },
            },
            {
              key: "renderPolygonStatically",
              value: function (e) {
                var t,
                  r = this.props,
                  n = r.shape,
                  a = r.dot,
                  s = r.isRange,
                  o = r.baseLinePoints,
                  c = r.connectNulls;
                return (
                  (t = i.isValidElement(n)
                    ? i.cloneElement(n, O(O({}, this.props), {}, { points: e }))
                    : b()(n)
                    ? n(O(O({}, this.props), {}, { points: e }))
                    : i.createElement(
                        h.m,
                        R({}, (0, z.L6)(this.props, !0), {
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          points: e,
                          baseLinePoints: s ? o : null,
                          connectNulls: c,
                        }),
                      )),
                  i.createElement(
                    v.m,
                    { className: "recharts-radar-polygon" },
                    t,
                    a ? this.renderDots(e) : null,
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
                  a = t.isAnimationActive,
                  s = t.animationBegin,
                  o = t.animationDuration,
                  c = t.animationEasing,
                  l = t.animationId,
                  u = this.state.prevPoints;
                return i.createElement(
                  n.ZP,
                  {
                    begin: s,
                    duration: o,
                    isActive: a,
                    easing: c,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "radar-".concat(l),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (t) {
                    var i = t.t,
                      n = u && u.length / r.length,
                      a = r.map(function (e, t) {
                        var r = u && u[Math.floor(t * n)];
                        if (r) {
                          var a = (0, f.k4)(r.x, e.x),
                            s = (0, f.k4)(r.y, e.y);
                          return O(O({}, e), {}, { x: a(i), y: s(i) });
                        }
                        var o = (0, f.k4)(e.cx, e.x),
                          c = (0, f.k4)(e.cy, e.y);
                        return O(O({}, e), {}, { x: o(i), y: c(i) });
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
                  n = this.state.prevPoints;
                return !(r && t && t.length) || i || (n && d()(n, t))
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
                  n = e.points,
                  a = e.isAnimationActive;
                if (t || !n || !n.length) return null;
                var s = this.state.isAnimationFinished,
                  o = (0, p.Z)("recharts-radar", r);
                return i.createElement(
                  v.m,
                  { className: o },
                  this.renderPolygon(),
                  (!a || s) && F.e.renderCallByParent(this.props, n),
                );
              },
            },
          ]) && j(t.prototype, r),
          a && j(t, a),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          o
        );
      })(i.PureComponent);
      W(P, "displayName", "Radar"),
        W(P, "defaultProps", {
          angleAxisId: 0,
          radiusAxisId: 0,
          hide: !1,
          activeDot: !0,
          dot: !1,
          legendType: "rect",
          isAnimationActive: !B.x.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        W(P, "getComposedData", function (e) {
          var t = e.radiusAxis,
            r = e.angleAxis,
            i = e.displayedData,
            n = e.dataKey,
            a = e.bandSize,
            o = r.cx,
            l = r.cy,
            m = !1,
            d = [],
            y = "number" !== r.type && null != a ? a : 0;
          i.forEach(function (e, i) {
            var a = (0, w.F$)(e, r.dataKey, i),
              u = (0, w.F$)(e, n),
              b = r.scale(a) + y,
              p = Array.isArray(u) ? c()(u) : u,
              f = s()(p) ? void 0 : t.scale(p);
            Array.isArray(u) && u.length >= 2 && (m = !0),
              d.push(
                O(
                  O({}, (0, g.op)(o, l, f, b)),
                  {},
                  {
                    name: a,
                    value: u,
                    cx: o,
                    cy: l,
                    radius: f,
                    angle: b,
                    payload: e,
                  },
                ),
              );
          });
          var b = [];
          return (
            m &&
              d.forEach(function (e) {
                if (Array.isArray(e.value)) {
                  var r = u()(e.value),
                    i = s()(r) ? void 0 : t.scale(r);
                  b.push(
                    O(O({}, e), {}, { radius: i }, (0, g.op)(o, l, i, e.angle)),
                  );
                } else b.push(e);
              }),
            { points: d, isRange: m, baseLinePoints: b }
          );
        });
    },
    89291: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => y });
      var i = r(47427),
        n = r(84148),
        a = r(94797),
        s = ["points", "className", "baseLinePoints", "connectNulls"];
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
      function l(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return u(e);
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
            if ("string" == typeof e) return u(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return u(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      var m = function (e) {
          return e && e.x === +e.x && e.y === +e.y;
        },
        d = function (e, t) {
          var r = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = [[]];
            return (
              e.forEach(function (e) {
                m(e)
                  ? t[t.length - 1].push(e)
                  : t[t.length - 1].length > 0 && t.push([]);
              }),
              m(e[0]) && t[t.length - 1].push(e[0]),
              t[t.length - 1].length <= 0 && (t = t.slice(0, -1)),
              t
            );
          })(e);
          t &&
            (r = [
              r.reduce(function (e, t) {
                return [].concat(l(e), l(t));
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
        y = function (e) {
          var t = e.points,
            r = e.className,
            l = e.baseLinePoints,
            u = e.connectNulls,
            m = c(e, s);
          if (!t || !t.length) return null;
          var y = (0, n.Z)("recharts-polygon", r);
          if (l && l.length) {
            var b = m.stroke && "none" !== m.stroke,
              p = (function (e, t, r) {
                var i = d(e, r);
                return ""
                  .concat("Z" === i.slice(-1) ? i.slice(0, -1) : i, "L")
                  .concat(d(t.reverse(), r).slice(1));
              })(t, l, u);
            return i.createElement(
              "g",
              { className: y },
              i.createElement(
                "path",
                o({}, (0, a.L6)(m, !0), {
                  fill: "Z" === p.slice(-1) ? m.fill : "none",
                  stroke: "none",
                  d: p,
                }),
              ),
              b
                ? i.createElement(
                    "path",
                    o({}, (0, a.L6)(m, !0), { fill: "none", d: d(t, u) }),
                  )
                : null,
              b
                ? i.createElement(
                    "path",
                    o({}, (0, a.L6)(m, !0), { fill: "none", d: d(l, u) }),
                  )
                : null,
            );
          }
          var f = d(t, u);
          return i.createElement(
            "path",
            o({}, (0, a.L6)(m, !0), {
              fill: "Z" === f.slice(-1) ? m.fill : "none",
              className: y,
              d: f,
            }),
          );
        };
    },
    57335: (e, t, r) => {
      "use strict";
      r.d(t, {
        $V: () => re,
        J2: () => V,
        f5: () => q,
        rB: () => j,
        rj: () => k,
        z1: () => A,
        zm: () => U,
      });
      var i = r(10059),
        n = r(39087),
        a = r(79545);
      const s = i.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.total_playtime_seconds || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
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
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStats";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.appid || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStreakGame";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.longest_consecutive_days || n.aR(l.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
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
                  streak_games: { n: 3, c, r: !0, q: !0 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStreak";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.overall_rank || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
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
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeRanks";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.appid || n.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  stats: { n: 2, c: o },
                  playtime_streak: { n: 3, c: l },
                  playtime_ranks: { n: 4, c: u },
                  rtime_first_played: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  relative_game_stats: { n: 6, c: o },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGamePlaytimeStats";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
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
          return "CGameSummary";
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
          return "CSimpleGameSummary";
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
                  rank: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
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
          return "CGameRank";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.category || n.aR(p.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  category: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  rankings: { n: 2, c: b, r: !0, q: !0 },
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
          return "CRankingCategory";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.overall_ranking || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  overall_ranking: { n: 1, c: p },
                  vr_ranking: { n: 2, c: p },
                  deck_ranking: { n: 3, c: p },
                  controller_ranking: { n: 4, c: p },
                  linux_ranking: { n: 5, c: p },
                  mac_ranking: { n: 6, c: p },
                  windows_ranking: { n: 7, c: p },
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
          return "CGameRankings";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.total_achievements || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
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
          return "CUserPlaytimeSummaryStats";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.stats || n.aR(g.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { stats: { n: 1, c: w, r: !0, q: !0 } },
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
          return "CUserTagStats";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.tag_id || n.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
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
          return "CUserTagStats_Tag";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.screenshots_shared || n.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
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
                  guide_subscribers: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  workshop_subscribers: {
                    n: 12,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  games_played_pct: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  achievements_pct: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_streak_pct: {
                    n: 15,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  games_played_avg: {
                    n: 16,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  achievements_avg: {
                    n: 17,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_streak_avg: {
                    n: 18,
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
          return "CPlaytimeByNumbers";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.total_stats || n.aR(_.M()),
            s.initialize(this, e, 0, -1, [2, 5, 6], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  total_stats: { n: 1, c: o },
                  games: { n: 2, c: m, r: !0, q: !0 },
                  playtime_streak: { n: 3, c: l },
                  months: { n: 5, c: v, r: !0, q: !0 },
                  game_summary: { n: 6, c: d, r: !0, q: !0 },
                  demos_played: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  game_rankings: { n: 8, c: f },
                  playtests_played: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  summary_stats: { n: 10, c: B },
                  substantial: {
                    n: 11,
                    d: !0,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  tag_stats: { n: 12, c: g },
                  by_numbers: { n: 13, c: h },
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
          return "CUserPlaytimeStats";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.rtime_month || n.aR(v.M()),
            s.initialize(this, e, 0, -1, [4, 6], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  rtime_month: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  stats: { n: 2, c: o },
                  playtime_streak: { n: 3, c: l },
                  appid: { n: 4, c: m, r: !0, q: !0 },
                  relative_monthly_stats: { n: 5, c: o },
                  game_summary: { n: 6, c: y, r: !0, q: !0 },
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
          return "CMonthlyPlaytimeStats";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.account_id || n.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  account_id: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  playtime_stats: { n: 3, c: _ },
                  privacy_state: {
                    n: 4,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
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
          return "CUserYearInReviewStats";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.from_dbo || n.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
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
          return "CYearInReviewPerformanceStats";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.statid || n.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
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
          return "CAchievementDetails";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.appid || n.aR(R.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  achievements: { n: 2, c: M, r: !0, q: !0 },
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
          return "CGameAchievements";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.median_achievements || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  median_achievements: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  median_games: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  median_streak: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
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
          return "CGlobalPercentiles";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.new_releases || n.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  new_releases: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  recent_releases: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  classic_releases: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  recent_cutoff_year: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
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
          return "CGlobalPlaytimeDistribution";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.steamid || n.aR(j.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
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
          return "CSaleFeature_GetUserYearInReview_Request";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.stats || n.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  stats: { n: 1, c: F },
                  performance_stats: { n: 2, c: z },
                  percentiles: { n: 3, c: S },
                  distribution: { n: 4, c: O },
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
          return "CSaleFeature_GetUserYearInReview_Response";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.steamid || n.aR(U.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
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
          return "CSaleFeature_SetUserSharingPermissions_Request";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.privacy_state || n.aR(T.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
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
          return "CSaleFeature_SetUserSharingPermissions_Response";
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
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.steamid || n.aR(A.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
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
          return "CSaleFeature_GetUserYearAchievements_Request";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.game_achievements || n.aR(P.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  game_achievements: { n: 1, c: R, r: !0, q: !0 },
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
          return "CSaleFeature_GetUserYearAchievements_Response";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.steamid || n.aR(k.M()),
            s.initialize(this, e, 0, -1, [3], null);
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
          return "CSaleFeature_GetUserYearScreenshots_Request";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.apps || n.aR(I.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { apps: { n: 1, c: C, r: !0, q: !0 } },
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
          return "CSaleFeature_GetUserYearScreenshots_Response";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.image_url || n.aR(X.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
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
                  visibility: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  spoiler_tag: { n: 8, br: n.FE.readBool, bw: n.Xc.writeBool },
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
          return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.appid || n.aR(C.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  screenshots: { n: 2, c: X, r: !0, q: !0 },
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
          return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.steamid || n.aR(D.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
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
          return "CSaleFeature_SetUserActionData_Request";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_SetUserActionData_Response";
        }
      }
      class L extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.steamid || n.aR(L.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
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
          return "CSaleFeature_GetUserActionData_Request";
        }
      }
      class G extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.jsondata || n.aR(G.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  jsondata: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserActionData_Response";
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
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  return_private: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
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
          return "CSaleFeature_GetFriendsSharedYearInReview_Request";
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
          return "CFriendSharedYearInView";
        }
      }
      class K extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.friend_shares || n.aR(K.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  friend_shares: { n: 1, c: Y, r: !0, q: !0 },
                  year: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
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
          return "CSaleFeature_GetFriendsSharedYearInReview_Response";
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
                  language: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CSaleFeature_GetUserYearInReviewShareImage_Request";
        }
      }
      class Z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.images || n.aR(Z.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { images: { n: 1, c: $, r: !0, q: !0 } },
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
          return "CSaleFeature_GetUserYearInReviewShareImage_Response";
        }
      }
      class $ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.name || n.aR($.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  name: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  url_path: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
        }
      }
      class H extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.year || n.aR(H.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  year: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
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
          return "CSaleFeature_GetUpdateProcessingProgress_Request";
        }
      }
      class J extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.year || n.aR(J.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
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
          return "CMonthlyProgress";
        }
      }
      class Q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.results || n.aR(Q.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { results: { n: 1, c: J, r: !0, q: !0 } },
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
          return "CSaleFeature_GetUpdateProcessingProgress_Response";
        }
      }
      class ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.steamid || n.aR(ee.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
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
          return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
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
                  games_played: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  top_played_appid: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  longest_streak_days: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rt_streak_start: {
                    n: 7,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  achievements: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  screenshots: {
                    n: 9,
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
          return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
        }
      }
      var re;
      !(function (e) {
        (e.GetUserYearInReview = function (e, t) {
          return e.SendMsg(
            "SaleFeature.GetUserYearInReview#1",
            (0, a.MD)(j, t),
            E,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetUserSharingPermissions = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, a.MD)(x, t),
              W,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.SetUserSharingPermissions = function (e, t) {
            return e.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, a.MD)(U, t),
              T,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetUserYearAchievements = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, a.MD)(A, t),
              P,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetUserYearScreenshots = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, a.MD)(k, t),
              I,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetUserActionData = function (e, t) {
            return e.SendMsg(
              "SaleFeature.SetUserActionData#1",
              (0, a.MD)(D, t),
              N,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetUserActionData = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, a.MD)(L, t),
              G,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetFriendsSharedYearInReview = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, a.MD)(q, t),
              K,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetUserYearInReviewShareImage = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, a.MD)(V, t),
              Z,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetUpdateProcessingProgress = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUpdateProcessingProgress#1",
              (0, a.MD)(H, t),
              Q,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetYIRCurrentMonthlySummary = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, a.MD)(ee, t),
              te,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(re || (re = {}));
    },
  },
]);

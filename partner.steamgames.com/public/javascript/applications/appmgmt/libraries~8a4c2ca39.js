/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [60462],
    {
      20283: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { y: () => ut });
        var l = r(90626),
          F = r(34164),
          H = r(86356),
          it = r(58782),
          U = r.n(it),
          tt = r(64609),
          G = r.n(tt),
          lt = r(75055),
          ct = r(10800),
          at = r(72040),
          st = r(12244),
          V = r(96714),
          mt = r(93563),
          et = r(59640),
          St = r(61195),
          Ft = r(43998),
          nt = r(68841),
          te = r(53818),
          kt = ["x", "y"];
        function Tt(o) {
          "@babel/helpers - typeof";
          return (
            (Tt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (h) {
                    return typeof h;
                  }
                : function (h) {
                    return h &&
                      typeof Symbol == "function" &&
                      h.constructor === Symbol &&
                      h !== Symbol.prototype
                      ? "symbol"
                      : typeof h;
                  }),
            Tt(o)
          );
        }
        function vt() {
          return (
            (vt = Object.assign
              ? Object.assign.bind()
              : function (o) {
                  for (var h = 1; h < arguments.length; h++) {
                    var O = arguments[h];
                    for (var d in O)
                      Object.prototype.hasOwnProperty.call(O, d) &&
                        (o[d] = O[d]);
                  }
                  return o;
                }),
            vt.apply(this, arguments)
          );
        }
        function I(o, h) {
          var O = Object.keys(o);
          if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(o);
            h &&
              (d = d.filter(function (R) {
                return Object.getOwnPropertyDescriptor(o, R).enumerable;
              })),
              O.push.apply(O, d);
          }
          return O;
        }
        function m(o) {
          for (var h = 1; h < arguments.length; h++) {
            var O = arguments[h] != null ? arguments[h] : {};
            h % 2
              ? I(Object(O), !0).forEach(function (d) {
                  S(o, d, O[d]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    o,
                    Object.getOwnPropertyDescriptors(O),
                  )
                : I(Object(O)).forEach(function (d) {
                    Object.defineProperty(
                      o,
                      d,
                      Object.getOwnPropertyDescriptor(O, d),
                    );
                  });
          }
          return o;
        }
        function S(o, h, O) {
          return (
            (h = g(h)),
            h in o
              ? Object.defineProperty(o, h, {
                  value: O,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (o[h] = O),
            o
          );
        }
        function g(o) {
          var h = y(o, "string");
          return Tt(h) == "symbol" ? h : h + "";
        }
        function y(o, h) {
          if (Tt(o) != "object" || !o) return o;
          var O = o[Symbol.toPrimitive];
          if (O !== void 0) {
            var d = O.call(o, h || "default");
            if (Tt(d) != "object") return d;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (h === "string" ? String : Number)(o);
        }
        function rt(o, h) {
          if (o == null) return {};
          var O = ot(o, h),
            d,
            R;
          if (Object.getOwnPropertySymbols) {
            var Q = Object.getOwnPropertySymbols(o);
            for (R = 0; R < Q.length; R++)
              (d = Q[R]),
                !(h.indexOf(d) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(o, d) &&
                  (O[d] = o[d]);
          }
          return O;
        }
        function ot(o, h) {
          if (o == null) return {};
          var O = {};
          for (var d in o)
            if (Object.prototype.hasOwnProperty.call(o, d)) {
              if (h.indexOf(d) >= 0) continue;
              O[d] = o[d];
            }
          return O;
        }
        function _t(o, h) {
          var O = o.x,
            d = o.y,
            R = rt(o, kt),
            Q = "".concat(O),
            wt = parseInt(Q, 10),
            zt = "".concat(d),
            Vt = parseInt(zt, 10),
            se = "".concat(h.height || R.height),
            K = parseInt(se, 10),
            Z = "".concat(h.width || R.width),
            L = parseInt(Z, 10);
          return m(
            m(m(m(m({}, h), R), wt ? { x: wt } : {}), Vt ? { y: Vt } : {}),
            {},
            { height: K, width: L, name: h.name, radius: h.radius },
          );
        }
        function j(o) {
          return l.createElement(
            te.yp,
            vt(
              {
                shapeType: "rectangle",
                propTransformer: _t,
                activeClassName: "recharts-active-bar",
              },
              o,
            ),
          );
        }
        var N = function (h) {
            var O =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 0;
            return function (d, R) {
              if (typeof h == "number") return h;
              var Q = (0, V.Et)(d) || (0, V.uy)(d);
              return Q ? h(d, R) : (Q || (0, nt.A)(!1), O);
            };
          },
          M = ["value", "background"],
          X;
        function v(o) {
          "@babel/helpers - typeof";
          return (
            (v =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (h) {
                    return typeof h;
                  }
                : function (h) {
                    return h &&
                      typeof Symbol == "function" &&
                      h.constructor === Symbol &&
                      h !== Symbol.prototype
                      ? "symbol"
                      : typeof h;
                  }),
            v(o)
          );
        }
        function f(o, h) {
          if (o == null) return {};
          var O = E(o, h),
            d,
            R;
          if (Object.getOwnPropertySymbols) {
            var Q = Object.getOwnPropertySymbols(o);
            for (R = 0; R < Q.length; R++)
              (d = Q[R]),
                !(h.indexOf(d) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(o, d) &&
                  (O[d] = o[d]);
          }
          return O;
        }
        function E(o, h) {
          if (o == null) return {};
          var O = {};
          for (var d in o)
            if (Object.prototype.hasOwnProperty.call(o, d)) {
              if (h.indexOf(d) >= 0) continue;
              O[d] = o[d];
            }
          return O;
        }
        function _() {
          return (
            (_ = Object.assign
              ? Object.assign.bind()
              : function (o) {
                  for (var h = 1; h < arguments.length; h++) {
                    var O = arguments[h];
                    for (var d in O)
                      Object.prototype.hasOwnProperty.call(O, d) &&
                        (o[d] = O[d]);
                  }
                  return o;
                }),
            _.apply(this, arguments)
          );
        }
        function A(o, h) {
          var O = Object.keys(o);
          if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(o);
            h &&
              (d = d.filter(function (R) {
                return Object.getOwnPropertyDescriptor(o, R).enumerable;
              })),
              O.push.apply(O, d);
          }
          return O;
        }
        function c(o) {
          for (var h = 1; h < arguments.length; h++) {
            var O = arguments[h] != null ? arguments[h] : {};
            h % 2
              ? A(Object(O), !0).forEach(function (d) {
                  bt(o, d, O[d]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    o,
                    Object.getOwnPropertyDescriptors(O),
                  )
                : A(Object(O)).forEach(function (d) {
                    Object.defineProperty(
                      o,
                      d,
                      Object.getOwnPropertyDescriptor(O, d),
                    );
                  });
          }
          return o;
        }
        function P(o, h) {
          if (!(o instanceof h))
            throw new TypeError("Cannot call a class as a function");
        }
        function D(o, h) {
          for (var O = 0; O < h.length; O++) {
            var d = h[O];
            (d.enumerable = d.enumerable || !1),
              (d.configurable = !0),
              "value" in d && (d.writable = !0),
              Object.defineProperty(o, Ut(d.key), d);
          }
        }
        function x(o, h, O) {
          return (
            h && D(o.prototype, h),
            O && D(o, O),
            Object.defineProperty(o, "prototype", { writable: !1 }),
            o
          );
        }
        function k(o, h, O) {
          return (
            (h = q(h)),
            Y(
              o,
              Mt()
                ? Reflect.construct(h, O || [], q(o).constructor)
                : h.apply(o, O),
            )
          );
        }
        function Y(o, h) {
          if (h && (v(h) === "object" || typeof h == "function")) return h;
          if (h !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return J(o);
        }
        function J(o) {
          if (o === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return o;
        }
        function Mt() {
          try {
            var o = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Mt = function () {
            return !!o;
          })();
        }
        function q(o) {
          return (
            (q = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (O) {
                  return O.__proto__ || Object.getPrototypeOf(O);
                }),
            q(o)
          );
        }
        function yt(o, h) {
          if (typeof h != "function" && h !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (o.prototype = Object.create(h && h.prototype, {
            constructor: { value: o, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(o, "prototype", { writable: !1 }),
            h && ft(o, h);
        }
        function ft(o, h) {
          return (
            (ft = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (d, R) {
                  return (d.__proto__ = R), d;
                }),
            ft(o, h)
          );
        }
        function bt(o, h, O) {
          return (
            (h = Ut(h)),
            h in o
              ? Object.defineProperty(o, h, {
                  value: O,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (o[h] = O),
            o
          );
        }
        function Ut(o) {
          var h = Ht(o, "string");
          return v(h) == "symbol" ? h : h + "";
        }
        function Ht(o, h) {
          if (v(o) != "object" || !o) return o;
          var O = o[Symbol.toPrimitive];
          if (O !== void 0) {
            var d = O.call(o, h || "default");
            if (v(d) != "object") return d;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (h === "string" ? String : Number)(o);
        }
        var ut = (function (o) {
          function h() {
            var O;
            P(this, h);
            for (var d = arguments.length, R = new Array(d), Q = 0; Q < d; Q++)
              R[Q] = arguments[Q];
            return (
              (O = k(this, h, [].concat(R))),
              bt(O, "state", { isAnimationFinished: !1 }),
              bt(O, "id", (0, V.NF)("recharts-bar-")),
              bt(O, "handleAnimationEnd", function () {
                var wt = O.props.onAnimationEnd;
                O.setState({ isAnimationFinished: !0 }), wt && wt();
              }),
              bt(O, "handleAnimationStart", function () {
                var wt = O.props.onAnimationStart;
                O.setState({ isAnimationFinished: !1 }), wt && wt();
              }),
              O
            );
          }
          return (
            yt(h, o),
            x(
              h,
              [
                {
                  key: "renderRectanglesStatically",
                  value: function (d) {
                    var R = this,
                      Q = this.props,
                      wt = Q.shape,
                      zt = Q.dataKey,
                      Vt = Q.activeIndex,
                      se = Q.activeBar,
                      K = (0, mt.J9)(this.props, !1);
                    return (
                      d &&
                      d.map(function (Z, L) {
                        var xt = L === Vt,
                          Ot = xt ? se : wt,
                          $t = c(
                            c(c({}, K), Z),
                            {},
                            {
                              isActive: xt,
                              option: Ot,
                              index: L,
                              dataKey: zt,
                              onAnimationStart: R.handleAnimationStart,
                              onAnimationEnd: R.handleAnimationEnd,
                            },
                          );
                        return l.createElement(
                          lt.W,
                          _(
                            { className: "recharts-bar-rectangle" },
                            (0, Ft.XC)(R.props, Z, L),
                            {
                              key: "rectangle-"
                                .concat(Z?.x, "-")
                                .concat(Z?.y, "-")
                                .concat(Z?.value, "-")
                                .concat(L),
                            },
                          ),
                          l.createElement(j, $t),
                        );
                      })
                    );
                  },
                },
                {
                  key: "renderRectanglesWithAnimation",
                  value: function () {
                    var d = this,
                      R = this.props,
                      Q = R.data,
                      wt = R.layout,
                      zt = R.isAnimationActive,
                      Vt = R.animationBegin,
                      se = R.animationDuration,
                      K = R.animationEasing,
                      Z = R.animationId,
                      L = this.state.prevData;
                    return l.createElement(
                      H.Ay,
                      {
                        begin: Vt,
                        duration: se,
                        isActive: zt,
                        easing: K,
                        from: { t: 0 },
                        to: { t: 1 },
                        key: "bar-".concat(Z),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart,
                      },
                      function (xt) {
                        var Ot = xt.t,
                          $t = Q.map(function (Jt, le) {
                            var W = L && L[le];
                            if (W) {
                              var $ = (0, V.Dj)(W.x, Jt.x),
                                Ct = (0, V.Dj)(W.y, Jt.y),
                                Pt = (0, V.Dj)(W.width, Jt.width),
                                ee = (0, V.Dj)(W.height, Jt.height);
                              return c(
                                c({}, Jt),
                                {},
                                {
                                  x: $(Ot),
                                  y: Ct(Ot),
                                  width: Pt(Ot),
                                  height: ee(Ot),
                                },
                              );
                            }
                            if (wt === "horizontal") {
                              var Ie = (0, V.Dj)(0, Jt.height),
                                Ge = Ie(Ot);
                              return c(
                                c({}, Jt),
                                {},
                                { y: Jt.y + Jt.height - Ge, height: Ge },
                              );
                            }
                            var we = (0, V.Dj)(0, Jt.width),
                              We = we(Ot);
                            return c(c({}, Jt), {}, { width: We });
                          });
                        return l.createElement(
                          lt.W,
                          null,
                          d.renderRectanglesStatically($t),
                        );
                      },
                    );
                  },
                },
                {
                  key: "renderRectangles",
                  value: function () {
                    var d = this.props,
                      R = d.data,
                      Q = d.isAnimationActive,
                      wt = this.state.prevData;
                    return Q && R && R.length && (!wt || !U()(wt, R))
                      ? this.renderRectanglesWithAnimation()
                      : this.renderRectanglesStatically(R);
                  },
                },
                {
                  key: "renderBackground",
                  value: function () {
                    var d = this,
                      R = this.props,
                      Q = R.data,
                      wt = R.dataKey,
                      zt = R.activeIndex,
                      Vt = (0, mt.J9)(this.props.background, !1);
                    return Q.map(function (se, K) {
                      var Z = se.value,
                        L = se.background,
                        xt = f(se, M);
                      if (!L) return null;
                      var Ot = c(
                        c(
                          c(c(c({}, xt), {}, { fill: "#eee" }, L), Vt),
                          (0, Ft.XC)(d.props, se, K),
                        ),
                        {},
                        {
                          onAnimationStart: d.handleAnimationStart,
                          onAnimationEnd: d.handleAnimationEnd,
                          dataKey: wt,
                          index: K,
                          className: "recharts-bar-background-rectangle",
                        },
                      );
                      return l.createElement(
                        j,
                        _(
                          {
                            key: "background-bar-".concat(K),
                            option: d.props.background,
                            isActive: K === zt,
                          },
                          Ot,
                        ),
                      );
                    });
                  },
                },
                {
                  key: "renderErrorBar",
                  value: function (d, R) {
                    if (
                      this.props.isAnimationActive &&
                      !this.state.isAnimationFinished
                    )
                      return null;
                    var Q = this.props,
                      wt = Q.data,
                      zt = Q.xAxis,
                      Vt = Q.yAxis,
                      se = Q.layout,
                      K = Q.children,
                      Z = (0, mt.aS)(K, ct.u);
                    if (!Z) return null;
                    var L =
                        se === "vertical" ? wt[0].height / 2 : wt[0].width / 2,
                      xt = function (Jt, le) {
                        var W = Array.isArray(Jt.value)
                          ? Jt.value[1]
                          : Jt.value;
                        return {
                          x: Jt.x,
                          y: Jt.y,
                          value: W,
                          errorVal: (0, St.kr)(Jt, le),
                        };
                      },
                      Ot = {
                        clipPath: d ? "url(#clipPath-".concat(R, ")") : null,
                      };
                    return l.createElement(
                      lt.W,
                      Ot,
                      Z.map(function ($t) {
                        return l.cloneElement($t, {
                          key: "error-bar-"
                            .concat(R, "-")
                            .concat($t.props.dataKey),
                          data: wt,
                          xAxis: zt,
                          yAxis: Vt,
                          layout: se,
                          offset: L,
                          dataPointFormatter: xt,
                        });
                      }),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var d = this.props,
                      R = d.hide,
                      Q = d.data,
                      wt = d.className,
                      zt = d.xAxis,
                      Vt = d.yAxis,
                      se = d.left,
                      K = d.top,
                      Z = d.width,
                      L = d.height,
                      xt = d.isAnimationActive,
                      Ot = d.background,
                      $t = d.id;
                    if (R || !Q || !Q.length) return null;
                    var Jt = this.state.isAnimationFinished,
                      le = (0, F.A)("recharts-bar", wt),
                      W = zt && zt.allowDataOverflow,
                      $ = Vt && Vt.allowDataOverflow,
                      Ct = W || $,
                      Pt = G()($t) ? this.id : $t;
                    return l.createElement(
                      lt.W,
                      { className: le },
                      W || $
                        ? l.createElement(
                            "defs",
                            null,
                            l.createElement(
                              "clipPath",
                              { id: "clipPath-".concat(Pt) },
                              l.createElement("rect", {
                                x: W ? se : se - Z / 2,
                                y: $ ? K : K - L / 2,
                                width: W ? Z : Z * 2,
                                height: $ ? L : L * 2,
                              }),
                            ),
                          )
                        : null,
                      l.createElement(
                        lt.W,
                        {
                          className: "recharts-bar-rectangles",
                          clipPath: Ct
                            ? "url(#clipPath-".concat(Pt, ")")
                            : null,
                        },
                        Ot ? this.renderBackground() : null,
                        this.renderRectangles(),
                      ),
                      this.renderErrorBar(Ct, Pt),
                      (!xt || Jt) && st.Z.renderCallByParent(this.props, Q),
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (d, R) {
                    return d.animationId !== R.prevAnimationId
                      ? {
                          prevAnimationId: d.animationId,
                          curData: d.data,
                          prevData: R.curData,
                        }
                      : d.data !== R.curData
                        ? { curData: d.data }
                        : null;
                  },
                },
              ],
            )
          );
        })(l.PureComponent);
        (X = ut),
          bt(ut, "displayName", "Bar"),
          bt(ut, "defaultProps", {
            xAxisId: 0,
            yAxisId: 0,
            legendType: "rect",
            minPointSize: 0,
            hide: !1,
            data: [],
            layout: "vertical",
            activeBar: !1,
            isAnimationActive: !et.m.isSsr,
            animationBegin: 0,
            animationDuration: 400,
            animationEasing: "ease",
          }),
          bt(ut, "getComposedData", function (o) {
            var h = o.props,
              O = o.item,
              d = o.barPosition,
              R = o.bandSize,
              Q = o.xAxis,
              wt = o.yAxis,
              zt = o.xAxisTicks,
              Vt = o.yAxisTicks,
              se = o.stackedData,
              K = o.dataStartIndex,
              Z = o.displayedData,
              L = o.offset,
              xt = (0, St.xi)(d, O);
            if (!xt) return null;
            var Ot = h.layout,
              $t = O.type.defaultProps,
              Jt = $t !== void 0 ? c(c({}, $t), O.props) : O.props,
              le = Jt.dataKey,
              W = Jt.children,
              $ = Jt.minPointSize,
              Ct = Ot === "horizontal" ? wt : Q,
              Pt = se ? Ct.scale.domain() : null,
              ee = (0, St.DW)({ numericAxis: Ct }),
              Ie = (0, mt.aS)(W, at.f),
              Ge = Z.map(function (we, We) {
                var Je, Xe, hn, bn, mn, Sn;
                se
                  ? (Je = (0, St._f)(se[K + We], Pt))
                  : ((Je = (0, St.kr)(we, le)),
                    Array.isArray(Je) || (Je = [ee, Je]));
                var xn = N($, X.defaultProps.minPointSize)(Je[1], We);
                if (Ot === "horizontal") {
                  var wn,
                    Jn = [wt.scale(Je[0]), wt.scale(Je[1])],
                    jn = Jn[0],
                    Hn = Jn[1];
                  (Xe = (0, St.y2)({
                    axis: Q,
                    ticks: zt,
                    bandSize: R,
                    offset: xt.offset,
                    entry: we,
                    index: We,
                  })),
                    (hn =
                      (wn = Hn ?? jn) !== null && wn !== void 0 ? wn : void 0),
                    (bn = xt.size);
                  var sr = jn - Hn;
                  if (
                    ((mn = Number.isNaN(sr) ? 0 : sr),
                    (Sn = { x: Xe, y: wt.y, width: bn, height: wt.height }),
                    Math.abs(xn) > 0 && Math.abs(mn) < Math.abs(xn))
                  ) {
                    var cr =
                      (0, V.sA)(mn || xn) * (Math.abs(xn) - Math.abs(mn));
                    (hn -= cr), (mn += cr);
                  }
                } else {
                  var ur = [Q.scale(Je[0]), Q.scale(Je[1])],
                    Yn = ur[0],
                    At = ur[1];
                  if (
                    ((Xe = Yn),
                    (hn = (0, St.y2)({
                      axis: wt,
                      ticks: Vt,
                      bandSize: R,
                      offset: xt.offset,
                      entry: we,
                      index: We,
                    })),
                    (bn = At - Yn),
                    (mn = xt.size),
                    (Sn = { x: Q.x, y: hn, width: Q.width, height: mn }),
                    Math.abs(xn) > 0 && Math.abs(bn) < Math.abs(xn))
                  ) {
                    var gt =
                      (0, V.sA)(bn || xn) * (Math.abs(xn) - Math.abs(bn));
                    bn += gt;
                  }
                }
                return c(
                  c(
                    c({}, we),
                    {},
                    {
                      x: Xe,
                      y: hn,
                      width: bn,
                      height: mn,
                      value: se ? Je : Je[1],
                      payload: we,
                      background: Sn,
                    },
                    Ie && Ie[We] && Ie[We].props,
                  ),
                  {},
                  {
                    tooltipPayload: [(0, St.zb)(O, we)],
                    tooltipPosition: { x: Xe + bn / 2, y: hn + mn / 2 },
                  },
                );
              });
            return c({ data: Ge, layout: Ot }, L);
          });
      },
      23884: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { u: () => _ });
        var l = r(90626),
          F = r(3316),
          H = r.n(F),
          it = r(52686),
          U = r.n(it),
          tt = r(34164),
          G = r(80103),
          lt = r(75055),
          ct = r(34656),
          at = r(25068),
          st = r(96714),
          V = r(43998),
          mt = r(93563),
          et = r(81887),
          St = ["viewBox"],
          Ft = ["viewBox"],
          nt = ["ticks"];
        function te(A) {
          "@babel/helpers - typeof";
          return (
            (te =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (c) {
                    return typeof c;
                  }
                : function (c) {
                    return c &&
                      typeof Symbol == "function" &&
                      c.constructor === Symbol &&
                      c !== Symbol.prototype
                      ? "symbol"
                      : typeof c;
                  }),
            te(A)
          );
        }
        function kt() {
          return (
            (kt = Object.assign
              ? Object.assign.bind()
              : function (A) {
                  for (var c = 1; c < arguments.length; c++) {
                    var P = arguments[c];
                    for (var D in P)
                      Object.prototype.hasOwnProperty.call(P, D) &&
                        (A[D] = P[D]);
                  }
                  return A;
                }),
            kt.apply(this, arguments)
          );
        }
        function Tt(A, c) {
          var P = Object.keys(A);
          if (Object.getOwnPropertySymbols) {
            var D = Object.getOwnPropertySymbols(A);
            c &&
              (D = D.filter(function (x) {
                return Object.getOwnPropertyDescriptor(A, x).enumerable;
              })),
              P.push.apply(P, D);
          }
          return P;
        }
        function vt(A) {
          for (var c = 1; c < arguments.length; c++) {
            var P = arguments[c] != null ? arguments[c] : {};
            c % 2
              ? Tt(Object(P), !0).forEach(function (D) {
                  v(A, D, P[D]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    A,
                    Object.getOwnPropertyDescriptors(P),
                  )
                : Tt(Object(P)).forEach(function (D) {
                    Object.defineProperty(
                      A,
                      D,
                      Object.getOwnPropertyDescriptor(P, D),
                    );
                  });
          }
          return A;
        }
        function I(A, c) {
          if (A == null) return {};
          var P = m(A, c),
            D,
            x;
          if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(A);
            for (x = 0; x < k.length; x++)
              (D = k[x]),
                !(c.indexOf(D) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(A, D) &&
                  (P[D] = A[D]);
          }
          return P;
        }
        function m(A, c) {
          if (A == null) return {};
          var P = {};
          for (var D in A)
            if (Object.prototype.hasOwnProperty.call(A, D)) {
              if (c.indexOf(D) >= 0) continue;
              P[D] = A[D];
            }
          return P;
        }
        function S(A, c) {
          if (!(A instanceof c))
            throw new TypeError("Cannot call a class as a function");
        }
        function g(A, c) {
          for (var P = 0; P < c.length; P++) {
            var D = c[P];
            (D.enumerable = D.enumerable || !1),
              (D.configurable = !0),
              "value" in D && (D.writable = !0),
              Object.defineProperty(A, f(D.key), D);
          }
        }
        function y(A, c, P) {
          return (
            c && g(A.prototype, c),
            P && g(A, P),
            Object.defineProperty(A, "prototype", { writable: !1 }),
            A
          );
        }
        function rt(A, c, P) {
          return (
            (c = N(c)),
            ot(
              A,
              j()
                ? Reflect.construct(c, P || [], N(A).constructor)
                : c.apply(A, P),
            )
          );
        }
        function ot(A, c) {
          if (c && (te(c) === "object" || typeof c == "function")) return c;
          if (c !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return _t(A);
        }
        function _t(A) {
          if (A === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return A;
        }
        function j() {
          try {
            var A = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (j = function () {
            return !!A;
          })();
        }
        function N(A) {
          return (
            (N = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (P) {
                  return P.__proto__ || Object.getPrototypeOf(P);
                }),
            N(A)
          );
        }
        function M(A, c) {
          if (typeof c != "function" && c !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (A.prototype = Object.create(c && c.prototype, {
            constructor: { value: A, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(A, "prototype", { writable: !1 }),
            c && X(A, c);
        }
        function X(A, c) {
          return (
            (X = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (D, x) {
                  return (D.__proto__ = x), D;
                }),
            X(A, c)
          );
        }
        function v(A, c, P) {
          return (
            (c = f(c)),
            c in A
              ? Object.defineProperty(A, c, {
                  value: P,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (A[c] = P),
            A
          );
        }
        function f(A) {
          var c = E(A, "string");
          return te(c) == "symbol" ? c : c + "";
        }
        function E(A, c) {
          if (te(A) != "object" || !A) return A;
          var P = A[Symbol.toPrimitive];
          if (P !== void 0) {
            var D = P.call(A, c || "default");
            if (te(D) != "object") return D;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (c === "string" ? String : Number)(A);
        }
        var _ = (function (A) {
          function c(P) {
            var D;
            return (
              S(this, c),
              (D = rt(this, c, [P])),
              (D.state = { fontSize: "", letterSpacing: "" }),
              D
            );
          }
          return (
            M(c, A),
            y(
              c,
              [
                {
                  key: "shouldComponentUpdate",
                  value: function (D, x) {
                    var k = D.viewBox,
                      Y = I(D, St),
                      J = this.props,
                      Mt = J.viewBox,
                      q = I(J, Ft);
                    return (
                      !(0, G.b)(k, Mt) ||
                      !(0, G.b)(Y, q) ||
                      !(0, G.b)(x, this.state)
                    );
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    var D = this.layerReference;
                    if (D) {
                      var x = D.getElementsByClassName(
                        "recharts-cartesian-axis-tick-value",
                      )[0];
                      x &&
                        this.setState({
                          fontSize: window.getComputedStyle(x).fontSize,
                          letterSpacing:
                            window.getComputedStyle(x).letterSpacing,
                        });
                    }
                  },
                },
                {
                  key: "getTickLineCoord",
                  value: function (D) {
                    var x = this.props,
                      k = x.x,
                      Y = x.y,
                      J = x.width,
                      Mt = x.height,
                      q = x.orientation,
                      yt = x.tickSize,
                      ft = x.mirror,
                      bt = x.tickMargin,
                      Ut,
                      Ht,
                      ut,
                      o,
                      h,
                      O,
                      d = ft ? -1 : 1,
                      R = D.tickSize || yt,
                      Q = (0, st.Et)(D.tickCoord) ? D.tickCoord : D.coordinate;
                    switch (q) {
                      case "top":
                        (Ut = Ht = D.coordinate),
                          (o = Y + +!ft * Mt),
                          (ut = o - d * R),
                          (O = ut - d * bt),
                          (h = Q);
                        break;
                      case "left":
                        (ut = o = D.coordinate),
                          (Ht = k + +!ft * J),
                          (Ut = Ht - d * R),
                          (h = Ut - d * bt),
                          (O = Q);
                        break;
                      case "right":
                        (ut = o = D.coordinate),
                          (Ht = k + +ft * J),
                          (Ut = Ht + d * R),
                          (h = Ut + d * bt),
                          (O = Q);
                        break;
                      default:
                        (Ut = Ht = D.coordinate),
                          (o = Y + +ft * Mt),
                          (ut = o + d * R),
                          (O = ut + d * bt),
                          (h = Q);
                        break;
                    }
                    return {
                      line: { x1: Ut, y1: ut, x2: Ht, y2: o },
                      tick: { x: h, y: O },
                    };
                  },
                },
                {
                  key: "getTickTextAnchor",
                  value: function () {
                    var D = this.props,
                      x = D.orientation,
                      k = D.mirror,
                      Y;
                    switch (x) {
                      case "left":
                        Y = k ? "start" : "end";
                        break;
                      case "right":
                        Y = k ? "end" : "start";
                        break;
                      default:
                        Y = "middle";
                        break;
                    }
                    return Y;
                  },
                },
                {
                  key: "getTickVerticalAnchor",
                  value: function () {
                    var D = this.props,
                      x = D.orientation,
                      k = D.mirror,
                      Y = "end";
                    switch (x) {
                      case "left":
                      case "right":
                        Y = "middle";
                        break;
                      case "top":
                        Y = k ? "start" : "end";
                        break;
                      default:
                        Y = k ? "end" : "start";
                        break;
                    }
                    return Y;
                  },
                },
                {
                  key: "renderAxisLine",
                  value: function () {
                    var D = this.props,
                      x = D.x,
                      k = D.y,
                      Y = D.width,
                      J = D.height,
                      Mt = D.orientation,
                      q = D.mirror,
                      yt = D.axisLine,
                      ft = vt(
                        vt(
                          vt({}, (0, mt.J9)(this.props, !1)),
                          (0, mt.J9)(yt, !1),
                        ),
                        {},
                        { fill: "none" },
                      );
                    if (Mt === "top" || Mt === "bottom") {
                      var bt = +(
                        (Mt === "top" && !q) ||
                        (Mt === "bottom" && q)
                      );
                      ft = vt(
                        vt({}, ft),
                        {},
                        { x1: x, y1: k + bt * J, x2: x + Y, y2: k + bt * J },
                      );
                    } else {
                      var Ut = +(
                        (Mt === "left" && !q) ||
                        (Mt === "right" && q)
                      );
                      ft = vt(
                        vt({}, ft),
                        {},
                        { x1: x + Ut * Y, y1: k, x2: x + Ut * Y, y2: k + J },
                      );
                    }
                    return l.createElement(
                      "line",
                      kt({}, ft, {
                        className: (0, tt.A)(
                          "recharts-cartesian-axis-line",
                          U()(yt, "className"),
                        ),
                      }),
                    );
                  },
                },
                {
                  key: "renderTicks",
                  value: function (D, x, k) {
                    var Y = this,
                      J = this.props,
                      Mt = J.tickLine,
                      q = J.stroke,
                      yt = J.tick,
                      ft = J.tickFormatter,
                      bt = J.unit,
                      Ut = (0, et.f)(
                        vt(vt({}, this.props), {}, { ticks: D }),
                        x,
                        k,
                      ),
                      Ht = this.getTickTextAnchor(),
                      ut = this.getTickVerticalAnchor(),
                      o = (0, mt.J9)(this.props, !1),
                      h = (0, mt.J9)(yt, !1),
                      O = vt(
                        vt({}, o),
                        {},
                        { fill: "none" },
                        (0, mt.J9)(Mt, !1),
                      ),
                      d = Ut.map(function (R, Q) {
                        var wt = Y.getTickLineCoord(R),
                          zt = wt.line,
                          Vt = wt.tick,
                          se = vt(
                            vt(
                              vt(
                                vt({ textAnchor: Ht, verticalAnchor: ut }, o),
                                {},
                                { stroke: "none", fill: q },
                                h,
                              ),
                              Vt,
                            ),
                            {},
                            {
                              index: Q,
                              payload: R,
                              visibleTicksCount: Ut.length,
                              tickFormatter: ft,
                            },
                          );
                        return l.createElement(
                          lt.W,
                          kt(
                            {
                              className: "recharts-cartesian-axis-tick",
                              key: "tick-"
                                .concat(R.value, "-")
                                .concat(R.coordinate, "-")
                                .concat(R.tickCoord),
                            },
                            (0, V.XC)(Y.props, R, Q),
                          ),
                          Mt &&
                            l.createElement(
                              "line",
                              kt({}, O, zt, {
                                className: (0, tt.A)(
                                  "recharts-cartesian-axis-tick-line",
                                  U()(Mt, "className"),
                                ),
                              }),
                            ),
                          yt &&
                            c.renderTickItem(
                              yt,
                              se,
                              ""
                                .concat(H()(ft) ? ft(R.value, Q) : R.value)
                                .concat(bt || ""),
                            ),
                        );
                      });
                    return l.createElement(
                      "g",
                      { className: "recharts-cartesian-axis-ticks" },
                      d,
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var D = this,
                      x = this.props,
                      k = x.axisLine,
                      Y = x.width,
                      J = x.height,
                      Mt = x.ticksGenerator,
                      q = x.className,
                      yt = x.hide;
                    if (yt) return null;
                    var ft = this.props,
                      bt = ft.ticks,
                      Ut = I(ft, nt),
                      Ht = bt;
                    return (
                      H()(Mt) &&
                        (Ht = bt && bt.length > 0 ? Mt(this.props) : Mt(Ut)),
                      Y <= 0 || J <= 0 || !Ht || !Ht.length
                        ? null
                        : l.createElement(
                            lt.W,
                            {
                              className: (0, tt.A)(
                                "recharts-cartesian-axis",
                                q,
                              ),
                              ref: function (o) {
                                D.layerReference = o;
                              },
                            },
                            k && this.renderAxisLine(),
                            this.renderTicks(
                              Ht,
                              this.state.fontSize,
                              this.state.letterSpacing,
                            ),
                            at.J.renderCallByParent(this.props),
                          )
                    );
                  },
                },
              ],
              [
                {
                  key: "renderTickItem",
                  value: function (D, x, k) {
                    var Y,
                      J = (0, tt.A)(
                        x.className,
                        "recharts-cartesian-axis-tick-value",
                      );
                    return (
                      l.isValidElement(D)
                        ? (Y = l.cloneElement(
                            D,
                            vt(vt({}, x), {}, { className: J }),
                          ))
                        : H()(D)
                          ? (Y = D(vt(vt({}, x), {}, { className: J })))
                          : (Y = l.createElement(
                              ct.E,
                              kt({}, x, {
                                className: "recharts-cartesian-axis-tick-value",
                              }),
                              k,
                            )),
                      Y
                    );
                  },
                },
              ],
            )
          );
        })(l.Component);
        v(_, "displayName", "CartesianAxis"),
          v(_, "defaultProps", {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            viewBox: { x: 0, y: 0, width: 0, height: 0 },
            orientation: "bottom",
            ticks: [],
            stroke: "#666",
            tickLine: !0,
            axisLine: !0,
            tick: !0,
            mirror: !1,
            minTickGap: 5,
            tickSize: 6,
            tickMargin: 2,
            interval: "preserveEnd",
          });
      },
      58661: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { d: () => N });
        var l = r(90626),
          F = r(3316),
          H = r.n(F),
          it = r(27664),
          U = r(96714),
          tt = r(93563),
          G = r(61195),
          lt = r(81887),
          ct = r(23884),
          at = r(7351),
          st = ["x1", "y1", "x2", "y2", "key"],
          V = ["offset"];
        function mt(M) {
          "@babel/helpers - typeof";
          return (
            (mt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (X) {
                    return typeof X;
                  }
                : function (X) {
                    return X &&
                      typeof Symbol == "function" &&
                      X.constructor === Symbol &&
                      X !== Symbol.prototype
                      ? "symbol"
                      : typeof X;
                  }),
            mt(M)
          );
        }
        function et(M, X) {
          var v = Object.keys(M);
          if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(M);
            X &&
              (f = f.filter(function (E) {
                return Object.getOwnPropertyDescriptor(M, E).enumerable;
              })),
              v.push.apply(v, f);
          }
          return v;
        }
        function St(M) {
          for (var X = 1; X < arguments.length; X++) {
            var v = arguments[X] != null ? arguments[X] : {};
            X % 2
              ? et(Object(v), !0).forEach(function (f) {
                  Ft(M, f, v[f]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    M,
                    Object.getOwnPropertyDescriptors(v),
                  )
                : et(Object(v)).forEach(function (f) {
                    Object.defineProperty(
                      M,
                      f,
                      Object.getOwnPropertyDescriptor(v, f),
                    );
                  });
          }
          return M;
        }
        function Ft(M, X, v) {
          return (
            (X = nt(X)),
            X in M
              ? Object.defineProperty(M, X, {
                  value: v,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (M[X] = v),
            M
          );
        }
        function nt(M) {
          var X = te(M, "string");
          return mt(X) == "symbol" ? X : X + "";
        }
        function te(M, X) {
          if (mt(M) != "object" || !M) return M;
          var v = M[Symbol.toPrimitive];
          if (v !== void 0) {
            var f = v.call(M, X || "default");
            if (mt(f) != "object") return f;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (X === "string" ? String : Number)(M);
        }
        function kt() {
          return (
            (kt = Object.assign
              ? Object.assign.bind()
              : function (M) {
                  for (var X = 1; X < arguments.length; X++) {
                    var v = arguments[X];
                    for (var f in v)
                      Object.prototype.hasOwnProperty.call(v, f) &&
                        (M[f] = v[f]);
                  }
                  return M;
                }),
            kt.apply(this, arguments)
          );
        }
        function Tt(M, X) {
          if (M == null) return {};
          var v = vt(M, X),
            f,
            E;
          if (Object.getOwnPropertySymbols) {
            var _ = Object.getOwnPropertySymbols(M);
            for (E = 0; E < _.length; E++)
              (f = _[E]),
                !(X.indexOf(f) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(M, f) &&
                  (v[f] = M[f]);
          }
          return v;
        }
        function vt(M, X) {
          if (M == null) return {};
          var v = {};
          for (var f in M)
            if (Object.prototype.hasOwnProperty.call(M, f)) {
              if (X.indexOf(f) >= 0) continue;
              v[f] = M[f];
            }
          return v;
        }
        var I = function (X) {
          var v = X.fill;
          if (!v || v === "none") return null;
          var f = X.fillOpacity,
            E = X.x,
            _ = X.y,
            A = X.width,
            c = X.height,
            P = X.ry;
          return l.createElement("rect", {
            x: E,
            y: _,
            ry: P,
            width: A,
            height: c,
            stroke: "none",
            fill: v,
            fillOpacity: f,
            className: "recharts-cartesian-grid-bg",
          });
        };
        function m(M, X) {
          var v;
          if (l.isValidElement(M)) v = l.cloneElement(M, X);
          else if (H()(M)) v = M(X);
          else {
            var f = X.x1,
              E = X.y1,
              _ = X.x2,
              A = X.y2,
              c = X.key,
              P = Tt(X, st),
              D = (0, tt.J9)(P, !1),
              x = D.offset,
              k = Tt(D, V);
            v = l.createElement(
              "line",
              kt({}, k, { x1: f, y1: E, x2: _, y2: A, fill: "none", key: c }),
            );
          }
          return v;
        }
        function S(M) {
          var X = M.x,
            v = M.width,
            f = M.horizontal,
            E = f === void 0 ? !0 : f,
            _ = M.horizontalPoints;
          if (!E || !_ || !_.length) return null;
          var A = _.map(function (c, P) {
            var D = St(
              St({}, M),
              {},
              {
                x1: X,
                y1: c,
                x2: X + v,
                y2: c,
                key: "line-".concat(P),
                index: P,
              },
            );
            return m(E, D);
          });
          return l.createElement(
            "g",
            { className: "recharts-cartesian-grid-horizontal" },
            A,
          );
        }
        function g(M) {
          var X = M.y,
            v = M.height,
            f = M.vertical,
            E = f === void 0 ? !0 : f,
            _ = M.verticalPoints;
          if (!E || !_ || !_.length) return null;
          var A = _.map(function (c, P) {
            var D = St(
              St({}, M),
              {},
              {
                x1: c,
                y1: X,
                x2: c,
                y2: X + v,
                key: "line-".concat(P),
                index: P,
              },
            );
            return m(E, D);
          });
          return l.createElement(
            "g",
            { className: "recharts-cartesian-grid-vertical" },
            A,
          );
        }
        function y(M) {
          var X = M.horizontalFill,
            v = M.fillOpacity,
            f = M.x,
            E = M.y,
            _ = M.width,
            A = M.height,
            c = M.horizontalPoints,
            P = M.horizontal,
            D = P === void 0 ? !0 : P;
          if (!D || !X || !X.length) return null;
          var x = c
            .map(function (Y) {
              return Math.round(Y + E - E);
            })
            .sort(function (Y, J) {
              return Y - J;
            });
          E !== x[0] && x.unshift(0);
          var k = x.map(function (Y, J) {
            var Mt = !x[J + 1],
              q = Mt ? E + A - Y : x[J + 1] - Y;
            if (q <= 0) return null;
            var yt = J % X.length;
            return l.createElement("rect", {
              key: "react-".concat(J),
              y: Y,
              x: f,
              height: q,
              width: _,
              stroke: "none",
              fill: X[yt],
              fillOpacity: v,
              className: "recharts-cartesian-grid-bg",
            });
          });
          return l.createElement(
            "g",
            { className: "recharts-cartesian-gridstripes-horizontal" },
            k,
          );
        }
        function rt(M) {
          var X = M.vertical,
            v = X === void 0 ? !0 : X,
            f = M.verticalFill,
            E = M.fillOpacity,
            _ = M.x,
            A = M.y,
            c = M.width,
            P = M.height,
            D = M.verticalPoints;
          if (!v || !f || !f.length) return null;
          var x = D.map(function (Y) {
            return Math.round(Y + _ - _);
          }).sort(function (Y, J) {
            return Y - J;
          });
          _ !== x[0] && x.unshift(0);
          var k = x.map(function (Y, J) {
            var Mt = !x[J + 1],
              q = Mt ? _ + c - Y : x[J + 1] - Y;
            if (q <= 0) return null;
            var yt = J % f.length;
            return l.createElement("rect", {
              key: "react-".concat(J),
              x: Y,
              y: A,
              width: q,
              height: P,
              stroke: "none",
              fill: f[yt],
              fillOpacity: E,
              className: "recharts-cartesian-grid-bg",
            });
          });
          return l.createElement(
            "g",
            { className: "recharts-cartesian-gridstripes-vertical" },
            k,
          );
        }
        var ot = function (X, v) {
            var f = X.xAxis,
              E = X.width,
              _ = X.height,
              A = X.offset;
            return (0, G.PW)(
              (0, lt.f)(
                St(
                  St(St({}, ct.u.defaultProps), f),
                  {},
                  {
                    ticks: (0, G.Rh)(f, !0),
                    viewBox: { x: 0, y: 0, width: E, height: _ },
                  },
                ),
              ),
              A.left,
              A.left + A.width,
              v,
            );
          },
          _t = function (X, v) {
            var f = X.yAxis,
              E = X.width,
              _ = X.height,
              A = X.offset;
            return (0, G.PW)(
              (0, lt.f)(
                St(
                  St(St({}, ct.u.defaultProps), f),
                  {},
                  {
                    ticks: (0, G.Rh)(f, !0),
                    viewBox: { x: 0, y: 0, width: E, height: _ },
                  },
                ),
              ),
              A.top,
              A.top + A.height,
              v,
            );
          },
          j = {
            horizontal: !0,
            vertical: !0,
            horizontalPoints: [],
            verticalPoints: [],
            stroke: "#ccc",
            fill: "none",
            verticalFill: [],
            horizontalFill: [],
          };
        function N(M) {
          var X,
            v,
            f,
            E,
            _,
            A,
            c = (0, at.yi)(),
            P = (0, at.rY)(),
            D = (0, at.hj)(),
            x = St(
              St({}, M),
              {},
              {
                stroke: (X = M.stroke) !== null && X !== void 0 ? X : j.stroke,
                fill: (v = M.fill) !== null && v !== void 0 ? v : j.fill,
                horizontal:
                  (f = M.horizontal) !== null && f !== void 0
                    ? f
                    : j.horizontal,
                horizontalFill:
                  (E = M.horizontalFill) !== null && E !== void 0
                    ? E
                    : j.horizontalFill,
                vertical:
                  (_ = M.vertical) !== null && _ !== void 0 ? _ : j.vertical,
                verticalFill:
                  (A = M.verticalFill) !== null && A !== void 0
                    ? A
                    : j.verticalFill,
                x: (0, U.Et)(M.x) ? M.x : D.left,
                y: (0, U.Et)(M.y) ? M.y : D.top,
                width: (0, U.Et)(M.width) ? M.width : D.width,
                height: (0, U.Et)(M.height) ? M.height : D.height,
              },
            ),
            k = x.x,
            Y = x.y,
            J = x.width,
            Mt = x.height,
            q = x.syncWithTicks,
            yt = x.horizontalValues,
            ft = x.verticalValues,
            bt = (0, at.pj)(),
            Ut = (0, at.$G)();
          if (
            !(0, U.Et)(J) ||
            J <= 0 ||
            !(0, U.Et)(Mt) ||
            Mt <= 0 ||
            !(0, U.Et)(k) ||
            k !== +k ||
            !(0, U.Et)(Y) ||
            Y !== +Y
          )
            return null;
          var Ht = x.verticalCoordinatesGenerator || ot,
            ut = x.horizontalCoordinatesGenerator || _t,
            o = x.horizontalPoints,
            h = x.verticalPoints;
          if ((!o || !o.length) && H()(ut)) {
            var O = yt && yt.length,
              d = ut(
                {
                  yAxis: Ut
                    ? St(St({}, Ut), {}, { ticks: O ? yt : Ut.ticks })
                    : void 0,
                  width: c,
                  height: P,
                  offset: D,
                },
                O ? !0 : q,
              );
            (0, it.R)(
              Array.isArray(d),
              "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
                mt(d),
                "]",
              ),
            ),
              Array.isArray(d) && (o = d);
          }
          if ((!h || !h.length) && H()(Ht)) {
            var R = ft && ft.length,
              Q = Ht(
                {
                  xAxis: bt
                    ? St(St({}, bt), {}, { ticks: R ? ft : bt.ticks })
                    : void 0,
                  width: c,
                  height: P,
                  offset: D,
                },
                R ? !0 : q,
              );
            (0, it.R)(
              Array.isArray(Q),
              "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
                mt(Q),
                "]",
              ),
            ),
              Array.isArray(Q) && (h = Q);
          }
          return l.createElement(
            "g",
            { className: "recharts-cartesian-grid" },
            l.createElement(I, {
              fill: x.fill,
              fillOpacity: x.fillOpacity,
              x: x.x,
              y: x.y,
              width: x.width,
              height: x.height,
              ry: x.ry,
            }),
            l.createElement(
              S,
              kt({}, x, {
                offset: D,
                horizontalPoints: o,
                xAxis: bt,
                yAxis: Ut,
              }),
            ),
            l.createElement(
              g,
              kt({}, x, { offset: D, verticalPoints: h, xAxis: bt, yAxis: Ut }),
            ),
            l.createElement(y, kt({}, x, { horizontalPoints: o })),
            l.createElement(rt, kt({}, x, { verticalPoints: h })),
          );
        }
        N.displayName = "CartesianGrid";
      },
      10800: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { u: () => _t });
        var l = r(90626),
          F = r(68841),
          H = r(75055),
          it = r(93563),
          U = [
            "offset",
            "layout",
            "width",
            "dataKey",
            "data",
            "dataPointFormatter",
            "xAxis",
            "yAxis",
          ];
        function tt(j) {
          "@babel/helpers - typeof";
          return (
            (tt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (N) {
                    return typeof N;
                  }
                : function (N) {
                    return N &&
                      typeof Symbol == "function" &&
                      N.constructor === Symbol &&
                      N !== Symbol.prototype
                      ? "symbol"
                      : typeof N;
                  }),
            tt(j)
          );
        }
        function G() {
          return (
            (G = Object.assign
              ? Object.assign.bind()
              : function (j) {
                  for (var N = 1; N < arguments.length; N++) {
                    var M = arguments[N];
                    for (var X in M)
                      Object.prototype.hasOwnProperty.call(M, X) &&
                        (j[X] = M[X]);
                  }
                  return j;
                }),
            G.apply(this, arguments)
          );
        }
        function lt(j, N) {
          return mt(j) || V(j, N) || at(j, N) || ct();
        }
        function ct() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function at(j, N) {
          if (j) {
            if (typeof j == "string") return st(j, N);
            var M = Object.prototype.toString.call(j).slice(8, -1);
            if (
              (M === "Object" && j.constructor && (M = j.constructor.name),
              M === "Map" || M === "Set")
            )
              return Array.from(j);
            if (
              M === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)
            )
              return st(j, N);
          }
        }
        function st(j, N) {
          (N == null || N > j.length) && (N = j.length);
          for (var M = 0, X = new Array(N); M < N; M++) X[M] = j[M];
          return X;
        }
        function V(j, N) {
          var M =
            j == null
              ? null
              : (typeof Symbol < "u" && j[Symbol.iterator]) || j["@@iterator"];
          if (M != null) {
            var X,
              v,
              f,
              E,
              _ = [],
              A = !0,
              c = !1;
            try {
              if (((f = (M = M.call(j)).next), N === 0)) {
                if (Object(M) !== M) return;
                A = !1;
              } else
                for (
                  ;
                  !(A = (X = f.call(M)).done) &&
                  (_.push(X.value), _.length !== N);
                  A = !0
                );
            } catch (P) {
              (c = !0), (v = P);
            } finally {
              try {
                if (
                  !A &&
                  M.return != null &&
                  ((E = M.return()), Object(E) !== E)
                )
                  return;
              } finally {
                if (c) throw v;
              }
            }
            return _;
          }
        }
        function mt(j) {
          if (Array.isArray(j)) return j;
        }
        function et(j, N) {
          if (j == null) return {};
          var M = St(j, N),
            X,
            v;
          if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(j);
            for (v = 0; v < f.length; v++)
              (X = f[v]),
                !(N.indexOf(X) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(j, X) &&
                  (M[X] = j[X]);
          }
          return M;
        }
        function St(j, N) {
          if (j == null) return {};
          var M = {};
          for (var X in j)
            if (Object.prototype.hasOwnProperty.call(j, X)) {
              if (N.indexOf(X) >= 0) continue;
              M[X] = j[X];
            }
          return M;
        }
        function Ft(j, N) {
          if (!(j instanceof N))
            throw new TypeError("Cannot call a class as a function");
        }
        function nt(j, N) {
          for (var M = 0; M < N.length; M++) {
            var X = N[M];
            (X.enumerable = X.enumerable || !1),
              (X.configurable = !0),
              "value" in X && (X.writable = !0),
              Object.defineProperty(j, rt(X.key), X);
          }
        }
        function te(j, N, M) {
          return (
            N && nt(j.prototype, N),
            M && nt(j, M),
            Object.defineProperty(j, "prototype", { writable: !1 }),
            j
          );
        }
        function kt(j, N, M) {
          return (
            (N = m(N)),
            Tt(
              j,
              I()
                ? Reflect.construct(N, M || [], m(j).constructor)
                : N.apply(j, M),
            )
          );
        }
        function Tt(j, N) {
          if (N && (tt(N) === "object" || typeof N == "function")) return N;
          if (N !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return vt(j);
        }
        function vt(j) {
          if (j === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return j;
        }
        function I() {
          try {
            var j = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (I = function () {
            return !!j;
          })();
        }
        function m(j) {
          return (
            (m = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (M) {
                  return M.__proto__ || Object.getPrototypeOf(M);
                }),
            m(j)
          );
        }
        function S(j, N) {
          if (typeof N != "function" && N !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (j.prototype = Object.create(N && N.prototype, {
            constructor: { value: j, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(j, "prototype", { writable: !1 }),
            N && g(j, N);
        }
        function g(j, N) {
          return (
            (g = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (X, v) {
                  return (X.__proto__ = v), X;
                }),
            g(j, N)
          );
        }
        function y(j, N, M) {
          return (
            (N = rt(N)),
            N in j
              ? Object.defineProperty(j, N, {
                  value: M,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (j[N] = M),
            j
          );
        }
        function rt(j) {
          var N = ot(j, "string");
          return tt(N) == "symbol" ? N : N + "";
        }
        function ot(j, N) {
          if (tt(j) != "object" || !j) return j;
          var M = j[Symbol.toPrimitive];
          if (M !== void 0) {
            var X = M.call(j, N || "default");
            if (tt(X) != "object") return X;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (N === "string" ? String : Number)(j);
        }
        var _t = (function (j) {
          function N() {
            return Ft(this, N), kt(this, N, arguments);
          }
          return (
            S(N, j),
            te(N, [
              {
                key: "render",
                value: function () {
                  var X = this.props,
                    v = X.offset,
                    f = X.layout,
                    E = X.width,
                    _ = X.dataKey,
                    A = X.data,
                    c = X.dataPointFormatter,
                    P = X.xAxis,
                    D = X.yAxis,
                    x = et(X, U),
                    k = (0, it.J9)(x, !1);
                  this.props.direction === "x" &&
                    P.type !== "number" &&
                    (0, F.A)(!1);
                  var Y = A.map(function (J) {
                    var Mt = c(J, _),
                      q = Mt.x,
                      yt = Mt.y,
                      ft = Mt.value,
                      bt = Mt.errorVal;
                    if (!bt) return null;
                    var Ut = [],
                      Ht,
                      ut;
                    if (Array.isArray(bt)) {
                      var o = lt(bt, 2);
                      (Ht = o[0]), (ut = o[1]);
                    } else Ht = ut = bt;
                    if (f === "vertical") {
                      var h = P.scale,
                        O = yt + v,
                        d = O + E,
                        R = O - E,
                        Q = h(ft - Ht),
                        wt = h(ft + ut);
                      Ut.push({ x1: wt, y1: d, x2: wt, y2: R }),
                        Ut.push({ x1: Q, y1: O, x2: wt, y2: O }),
                        Ut.push({ x1: Q, y1: d, x2: Q, y2: R });
                    } else if (f === "horizontal") {
                      var zt = D.scale,
                        Vt = q + v,
                        se = Vt - E,
                        K = Vt + E,
                        Z = zt(ft - Ht),
                        L = zt(ft + ut);
                      Ut.push({ x1: se, y1: L, x2: K, y2: L }),
                        Ut.push({ x1: Vt, y1: Z, x2: Vt, y2: L }),
                        Ut.push({ x1: se, y1: Z, x2: K, y2: Z });
                    }
                    return l.createElement(
                      H.W,
                      G(
                        {
                          className: "recharts-errorBar",
                          key: "bar-".concat(
                            Ut.map(function (xt) {
                              return ""
                                .concat(xt.x1, "-")
                                .concat(xt.x2, "-")
                                .concat(xt.y1, "-")
                                .concat(xt.y2);
                            }),
                          ),
                        },
                        k,
                      ),
                      Ut.map(function (xt) {
                        return l.createElement(
                          "line",
                          G({}, xt, {
                            key: "line-"
                              .concat(xt.x1, "-")
                              .concat(xt.x2, "-")
                              .concat(xt.y1, "-")
                              .concat(xt.y2),
                          }),
                        );
                      }),
                    );
                  });
                  return l.createElement(
                    H.W,
                    { className: "recharts-errorBars" },
                    Y,
                  );
                },
              },
            ])
          );
        })(l.Component);
        y(_t, "defaultProps", {
          stroke: "black",
          strokeWidth: 1.5,
          width: 5,
          offset: 0,
          layout: "horizontal",
        }),
          y(_t, "displayName", "ErrorBar");
      },
      90865: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { N: () => Mt });
        var l = r(90626),
          F = r(86356),
          H = r(3316),
          it = r.n(H),
          U = r(64609),
          tt = r.n(U),
          G = r(58782),
          lt = r.n(G),
          ct = r(34164),
          at = r(33487),
          st = r(21687),
          V = r(75055),
          mt = r(12244),
          et = r(10800),
          St = r(96714),
          Ft = r(93563),
          nt = r(59640),
          te = r(61195),
          kt = ["type", "layout", "connectNulls", "ref"],
          Tt = ["key"];
        function vt(q) {
          "@babel/helpers - typeof";
          return (
            (vt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (yt) {
                    return typeof yt;
                  }
                : function (yt) {
                    return yt &&
                      typeof Symbol == "function" &&
                      yt.constructor === Symbol &&
                      yt !== Symbol.prototype
                      ? "symbol"
                      : typeof yt;
                  }),
            vt(q)
          );
        }
        function I(q, yt) {
          if (q == null) return {};
          var ft = m(q, yt),
            bt,
            Ut;
          if (Object.getOwnPropertySymbols) {
            var Ht = Object.getOwnPropertySymbols(q);
            for (Ut = 0; Ut < Ht.length; Ut++)
              (bt = Ht[Ut]),
                !(yt.indexOf(bt) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(q, bt) &&
                  (ft[bt] = q[bt]);
          }
          return ft;
        }
        function m(q, yt) {
          if (q == null) return {};
          var ft = {};
          for (var bt in q)
            if (Object.prototype.hasOwnProperty.call(q, bt)) {
              if (yt.indexOf(bt) >= 0) continue;
              ft[bt] = q[bt];
            }
          return ft;
        }
        function S() {
          return (
            (S = Object.assign
              ? Object.assign.bind()
              : function (q) {
                  for (var yt = 1; yt < arguments.length; yt++) {
                    var ft = arguments[yt];
                    for (var bt in ft)
                      Object.prototype.hasOwnProperty.call(ft, bt) &&
                        (q[bt] = ft[bt]);
                  }
                  return q;
                }),
            S.apply(this, arguments)
          );
        }
        function g(q, yt) {
          var ft = Object.keys(q);
          if (Object.getOwnPropertySymbols) {
            var bt = Object.getOwnPropertySymbols(q);
            yt &&
              (bt = bt.filter(function (Ut) {
                return Object.getOwnPropertyDescriptor(q, Ut).enumerable;
              })),
              ft.push.apply(ft, bt);
          }
          return ft;
        }
        function y(q) {
          for (var yt = 1; yt < arguments.length; yt++) {
            var ft = arguments[yt] != null ? arguments[yt] : {};
            yt % 2
              ? g(Object(ft), !0).forEach(function (bt) {
                  k(q, bt, ft[bt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    q,
                    Object.getOwnPropertyDescriptors(ft),
                  )
                : g(Object(ft)).forEach(function (bt) {
                    Object.defineProperty(
                      q,
                      bt,
                      Object.getOwnPropertyDescriptor(ft, bt),
                    );
                  });
          }
          return q;
        }
        function rt(q) {
          return N(q) || j(q) || _t(q) || ot();
        }
        function ot() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function _t(q, yt) {
          if (q) {
            if (typeof q == "string") return M(q, yt);
            var ft = Object.prototype.toString.call(q).slice(8, -1);
            if (
              (ft === "Object" && q.constructor && (ft = q.constructor.name),
              ft === "Map" || ft === "Set")
            )
              return Array.from(q);
            if (
              ft === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ft)
            )
              return M(q, yt);
          }
        }
        function j(q) {
          if (
            (typeof Symbol < "u" && q[Symbol.iterator] != null) ||
            q["@@iterator"] != null
          )
            return Array.from(q);
        }
        function N(q) {
          if (Array.isArray(q)) return M(q);
        }
        function M(q, yt) {
          (yt == null || yt > q.length) && (yt = q.length);
          for (var ft = 0, bt = new Array(yt); ft < yt; ft++) bt[ft] = q[ft];
          return bt;
        }
        function X(q, yt) {
          if (!(q instanceof yt))
            throw new TypeError("Cannot call a class as a function");
        }
        function v(q, yt) {
          for (var ft = 0; ft < yt.length; ft++) {
            var bt = yt[ft];
            (bt.enumerable = bt.enumerable || !1),
              (bt.configurable = !0),
              "value" in bt && (bt.writable = !0),
              Object.defineProperty(q, Y(bt.key), bt);
          }
        }
        function f(q, yt, ft) {
          return (
            yt && v(q.prototype, yt),
            ft && v(q, ft),
            Object.defineProperty(q, "prototype", { writable: !1 }),
            q
          );
        }
        function E(q, yt, ft) {
          return (
            (yt = P(yt)),
            _(
              q,
              c()
                ? Reflect.construct(yt, ft || [], P(q).constructor)
                : yt.apply(q, ft),
            )
          );
        }
        function _(q, yt) {
          if (yt && (vt(yt) === "object" || typeof yt == "function")) return yt;
          if (yt !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return A(q);
        }
        function A(q) {
          if (q === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return q;
        }
        function c() {
          try {
            var q = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (c = function () {
            return !!q;
          })();
        }
        function P(q) {
          return (
            (P = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (ft) {
                  return ft.__proto__ || Object.getPrototypeOf(ft);
                }),
            P(q)
          );
        }
        function D(q, yt) {
          if (typeof yt != "function" && yt !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (q.prototype = Object.create(yt && yt.prototype, {
            constructor: { value: q, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(q, "prototype", { writable: !1 }),
            yt && x(q, yt);
        }
        function x(q, yt) {
          return (
            (x = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (bt, Ut) {
                  return (bt.__proto__ = Ut), bt;
                }),
            x(q, yt)
          );
        }
        function k(q, yt, ft) {
          return (
            (yt = Y(yt)),
            yt in q
              ? Object.defineProperty(q, yt, {
                  value: ft,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (q[yt] = ft),
            q
          );
        }
        function Y(q) {
          var yt = J(q, "string");
          return vt(yt) == "symbol" ? yt : yt + "";
        }
        function J(q, yt) {
          if (vt(q) != "object" || !q) return q;
          var ft = q[Symbol.toPrimitive];
          if (ft !== void 0) {
            var bt = ft.call(q, yt || "default");
            if (vt(bt) != "object") return bt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (yt === "string" ? String : Number)(q);
        }
        var Mt = (function (q) {
          function yt() {
            var ft;
            X(this, yt);
            for (
              var bt = arguments.length, Ut = new Array(bt), Ht = 0;
              Ht < bt;
              Ht++
            )
              Ut[Ht] = arguments[Ht];
            return (
              (ft = E(this, yt, [].concat(Ut))),
              k(ft, "state", { isAnimationFinished: !0, totalLength: 0 }),
              k(ft, "generateSimpleStrokeDasharray", function (ut, o) {
                return "".concat(o, "px ").concat(ut - o, "px");
              }),
              k(ft, "getStrokeDasharray", function (ut, o, h) {
                var O = h.reduce(function (K, Z) {
                  return K + Z;
                });
                if (!O) return ft.generateSimpleStrokeDasharray(o, ut);
                for (
                  var d = Math.floor(ut / O),
                    R = ut % O,
                    Q = o - ut,
                    wt = [],
                    zt = 0,
                    Vt = 0;
                  zt < h.length;
                  Vt += h[zt], ++zt
                )
                  if (Vt + h[zt] > R) {
                    wt = [].concat(rt(h.slice(0, zt)), [R - Vt]);
                    break;
                  }
                var se = wt.length % 2 === 0 ? [0, Q] : [Q];
                return []
                  .concat(rt(yt.repeat(h, d)), rt(wt), se)
                  .map(function (K) {
                    return "".concat(K, "px");
                  })
                  .join(", ");
              }),
              k(ft, "id", (0, St.NF)("recharts-line-")),
              k(ft, "pathRef", function (ut) {
                ft.mainCurve = ut;
              }),
              k(ft, "handleAnimationEnd", function () {
                ft.setState({ isAnimationFinished: !0 }),
                  ft.props.onAnimationEnd && ft.props.onAnimationEnd();
              }),
              k(ft, "handleAnimationStart", function () {
                ft.setState({ isAnimationFinished: !1 }),
                  ft.props.onAnimationStart && ft.props.onAnimationStart();
              }),
              ft
            );
          }
          return (
            D(yt, q),
            f(
              yt,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.isAnimationActive) {
                      var bt = this.getTotalLength();
                      this.setState({ totalLength: bt });
                    }
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    if (this.props.isAnimationActive) {
                      var bt = this.getTotalLength();
                      bt !== this.state.totalLength &&
                        this.setState({ totalLength: bt });
                    }
                  },
                },
                {
                  key: "getTotalLength",
                  value: function () {
                    var bt = this.mainCurve;
                    try {
                      return (
                        (bt && bt.getTotalLength && bt.getTotalLength()) || 0
                      );
                    } catch {
                      return 0;
                    }
                  },
                },
                {
                  key: "renderErrorBar",
                  value: function (bt, Ut) {
                    if (
                      this.props.isAnimationActive &&
                      !this.state.isAnimationFinished
                    )
                      return null;
                    var Ht = this.props,
                      ut = Ht.points,
                      o = Ht.xAxis,
                      h = Ht.yAxis,
                      O = Ht.layout,
                      d = Ht.children,
                      R = (0, Ft.aS)(d, et.u);
                    if (!R) return null;
                    var Q = function (Vt, se) {
                        return {
                          x: Vt.x,
                          y: Vt.y,
                          value: Vt.value,
                          errorVal: (0, te.kr)(Vt.payload, se),
                        };
                      },
                      wt = {
                        clipPath: bt ? "url(#clipPath-".concat(Ut, ")") : null,
                      };
                    return l.createElement(
                      V.W,
                      wt,
                      R.map(function (zt) {
                        return l.cloneElement(zt, {
                          key: "bar-".concat(zt.props.dataKey),
                          data: ut,
                          xAxis: o,
                          yAxis: h,
                          layout: O,
                          dataPointFormatter: Q,
                        });
                      }),
                    );
                  },
                },
                {
                  key: "renderDots",
                  value: function (bt, Ut, Ht) {
                    var ut = this.props.isAnimationActive;
                    if (ut && !this.state.isAnimationFinished) return null;
                    var o = this.props,
                      h = o.dot,
                      O = o.points,
                      d = o.dataKey,
                      R = (0, Ft.J9)(this.props, !1),
                      Q = (0, Ft.J9)(h, !0),
                      wt = O.map(function (Vt, se) {
                        var K = y(
                          y(y({ key: "dot-".concat(se), r: 3 }, R), Q),
                          {},
                          {
                            index: se,
                            cx: Vt.x,
                            cy: Vt.y,
                            value: Vt.value,
                            dataKey: d,
                            payload: Vt.payload,
                            points: O,
                          },
                        );
                        return yt.renderDotItem(h, K);
                      }),
                      zt = {
                        clipPath: bt
                          ? "url(#clipPath-"
                              .concat(Ut ? "" : "dots-")
                              .concat(Ht, ")")
                          : null,
                      };
                    return l.createElement(
                      V.W,
                      S({ className: "recharts-line-dots", key: "dots" }, zt),
                      wt,
                    );
                  },
                },
                {
                  key: "renderCurveStatically",
                  value: function (bt, Ut, Ht, ut) {
                    var o = this.props,
                      h = o.type,
                      O = o.layout,
                      d = o.connectNulls,
                      R = o.ref,
                      Q = I(o, kt),
                      wt = y(
                        y(
                          y({}, (0, Ft.J9)(Q, !0)),
                          {},
                          {
                            fill: "none",
                            className: "recharts-line-curve",
                            clipPath: Ut
                              ? "url(#clipPath-".concat(Ht, ")")
                              : null,
                            points: bt,
                          },
                          ut,
                        ),
                        {},
                        { type: h, layout: O, connectNulls: d },
                      );
                    return l.createElement(
                      at.I,
                      S({}, wt, { pathRef: this.pathRef }),
                    );
                  },
                },
                {
                  key: "renderCurveWithAnimation",
                  value: function (bt, Ut) {
                    var Ht = this,
                      ut = this.props,
                      o = ut.points,
                      h = ut.strokeDasharray,
                      O = ut.isAnimationActive,
                      d = ut.animationBegin,
                      R = ut.animationDuration,
                      Q = ut.animationEasing,
                      wt = ut.animationId,
                      zt = ut.animateNewValues,
                      Vt = ut.width,
                      se = ut.height,
                      K = this.state,
                      Z = K.prevPoints,
                      L = K.totalLength;
                    return l.createElement(
                      F.Ay,
                      {
                        begin: d,
                        duration: R,
                        isActive: O,
                        easing: Q,
                        from: { t: 0 },
                        to: { t: 1 },
                        key: "line-".concat(wt),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart,
                      },
                      function (xt) {
                        var Ot = xt.t;
                        if (Z) {
                          var $t = Z.length / o.length,
                            Jt = o.map(function (Pt, ee) {
                              var Ie = Math.floor(ee * $t);
                              if (Z[Ie]) {
                                var Ge = Z[Ie],
                                  we = (0, St.Dj)(Ge.x, Pt.x),
                                  We = (0, St.Dj)(Ge.y, Pt.y);
                                return y(
                                  y({}, Pt),
                                  {},
                                  { x: we(Ot), y: We(Ot) },
                                );
                              }
                              if (zt) {
                                var Je = (0, St.Dj)(Vt * 2, Pt.x),
                                  Xe = (0, St.Dj)(se / 2, Pt.y);
                                return y(
                                  y({}, Pt),
                                  {},
                                  { x: Je(Ot), y: Xe(Ot) },
                                );
                              }
                              return y(y({}, Pt), {}, { x: Pt.x, y: Pt.y });
                            });
                          return Ht.renderCurveStatically(Jt, bt, Ut);
                        }
                        var le = (0, St.Dj)(0, L),
                          W = le(Ot),
                          $;
                        if (h) {
                          var Ct = ""
                            .concat(h)
                            .split(/[,\s]+/gim)
                            .map(function (Pt) {
                              return parseFloat(Pt);
                            });
                          $ = Ht.getStrokeDasharray(W, L, Ct);
                        } else $ = Ht.generateSimpleStrokeDasharray(L, W);
                        return Ht.renderCurveStatically(o, bt, Ut, {
                          strokeDasharray: $,
                        });
                      },
                    );
                  },
                },
                {
                  key: "renderCurve",
                  value: function (bt, Ut) {
                    var Ht = this.props,
                      ut = Ht.points,
                      o = Ht.isAnimationActive,
                      h = this.state,
                      O = h.prevPoints,
                      d = h.totalLength;
                    return o &&
                      ut &&
                      ut.length &&
                      ((!O && d > 0) || !lt()(O, ut))
                      ? this.renderCurveWithAnimation(bt, Ut)
                      : this.renderCurveStatically(ut, bt, Ut);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var bt,
                      Ut = this.props,
                      Ht = Ut.hide,
                      ut = Ut.dot,
                      o = Ut.points,
                      h = Ut.className,
                      O = Ut.xAxis,
                      d = Ut.yAxis,
                      R = Ut.top,
                      Q = Ut.left,
                      wt = Ut.width,
                      zt = Ut.height,
                      Vt = Ut.isAnimationActive,
                      se = Ut.id;
                    if (Ht || !o || !o.length) return null;
                    var K = this.state.isAnimationFinished,
                      Z = o.length === 1,
                      L = (0, ct.A)("recharts-line", h),
                      xt = O && O.allowDataOverflow,
                      Ot = d && d.allowDataOverflow,
                      $t = xt || Ot,
                      Jt = tt()(se) ? this.id : se,
                      le =
                        (bt = (0, Ft.J9)(ut, !1)) !== null && bt !== void 0
                          ? bt
                          : { r: 3, strokeWidth: 2 },
                      W = le.r,
                      $ = W === void 0 ? 3 : W,
                      Ct = le.strokeWidth,
                      Pt = Ct === void 0 ? 2 : Ct,
                      ee = (0, Ft.sT)(ut) ? ut : {},
                      Ie = ee.clipDot,
                      Ge = Ie === void 0 ? !0 : Ie,
                      we = $ * 2 + Pt;
                    return l.createElement(
                      V.W,
                      { className: L },
                      xt || Ot
                        ? l.createElement(
                            "defs",
                            null,
                            l.createElement(
                              "clipPath",
                              { id: "clipPath-".concat(Jt) },
                              l.createElement("rect", {
                                x: xt ? Q : Q - wt / 2,
                                y: Ot ? R : R - zt / 2,
                                width: xt ? wt : wt * 2,
                                height: Ot ? zt : zt * 2,
                              }),
                            ),
                            !Ge &&
                              l.createElement(
                                "clipPath",
                                { id: "clipPath-dots-".concat(Jt) },
                                l.createElement("rect", {
                                  x: Q - we / 2,
                                  y: R - we / 2,
                                  width: wt + we,
                                  height: zt + we,
                                }),
                              ),
                          )
                        : null,
                      !Z && this.renderCurve($t, Jt),
                      this.renderErrorBar($t, Jt),
                      (Z || ut) && this.renderDots($t, Ge, Jt),
                      (!Vt || K) && mt.Z.renderCallByParent(this.props, o),
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (bt, Ut) {
                    return bt.animationId !== Ut.prevAnimationId
                      ? {
                          prevAnimationId: bt.animationId,
                          curPoints: bt.points,
                          prevPoints: Ut.curPoints,
                        }
                      : bt.points !== Ut.curPoints
                        ? { curPoints: bt.points }
                        : null;
                  },
                },
                {
                  key: "repeat",
                  value: function (bt, Ut) {
                    for (
                      var Ht =
                          bt.length % 2 !== 0 ? [].concat(rt(bt), [0]) : bt,
                        ut = [],
                        o = 0;
                      o < Ut;
                      ++o
                    )
                      ut = [].concat(rt(ut), rt(Ht));
                    return ut;
                  },
                },
                {
                  key: "renderDotItem",
                  value: function (bt, Ut) {
                    var Ht;
                    if (l.isValidElement(bt)) Ht = l.cloneElement(bt, Ut);
                    else if (it()(bt)) Ht = bt(Ut);
                    else {
                      var ut = Ut.key,
                        o = I(Ut, Tt),
                        h = (0, ct.A)(
                          "recharts-line-dot",
                          typeof bt != "boolean" ? bt.className : "",
                        );
                      Ht = l.createElement(
                        st.c,
                        S({ key: ut }, o, { className: h }),
                      );
                    }
                    return Ht;
                  },
                },
              ],
            )
          );
        })(l.PureComponent);
        k(Mt, "displayName", "Line"),
          k(Mt, "defaultProps", {
            xAxisId: 0,
            yAxisId: 0,
            connectNulls: !1,
            activeDot: !0,
            dot: !0,
            legendType: "line",
            stroke: "#3182bd",
            strokeWidth: 1,
            fill: "#fff",
            points: [],
            isAnimationActive: !nt.m.isSsr,
            animateNewValues: !0,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
            hide: !1,
            label: !1,
          }),
          k(Mt, "getComposedData", function (q) {
            var yt = q.props,
              ft = q.xAxis,
              bt = q.yAxis,
              Ut = q.xAxisTicks,
              Ht = q.yAxisTicks,
              ut = q.dataKey,
              o = q.bandSize,
              h = q.displayedData,
              O = q.offset,
              d = yt.layout,
              R = h.map(function (Q, wt) {
                var zt = (0, te.kr)(Q, ut);
                return d === "horizontal"
                  ? {
                      x: (0, te.nb)({
                        axis: ft,
                        ticks: Ut,
                        bandSize: o,
                        entry: Q,
                        index: wt,
                      }),
                      y: tt()(zt) ? null : bt.scale(zt),
                      value: zt,
                      payload: Q,
                    }
                  : {
                      x: tt()(zt) ? null : ft.scale(zt),
                      y: (0, te.nb)({
                        axis: bt,
                        ticks: Ht,
                        bandSize: o,
                        entry: Q,
                        index: wt,
                      }),
                      value: zt,
                      payload: Q,
                    };
              });
            return y({ points: R, layout: d }, O);
          });
      },
      59136: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { e: () => D });
        var l = r(90626),
          F = r(3316),
          H = r.n(F),
          it = r(49556),
          U = r.n(it),
          tt = r(34164),
          G = r(75055),
          lt = r(25068),
          ct = r(83349),
          at = r(96714),
          st = r(12260),
          V = r(27664),
          mt = r(93563),
          et = r(7351);
        function St(x) {
          "@babel/helpers - typeof";
          return (
            (St =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (k) {
                    return typeof k;
                  }
                : function (k) {
                    return k &&
                      typeof Symbol == "function" &&
                      k.constructor === Symbol &&
                      k !== Symbol.prototype
                      ? "symbol"
                      : typeof k;
                  }),
            St(x)
          );
        }
        function Ft(x, k) {
          if (!(x instanceof k))
            throw new TypeError("Cannot call a class as a function");
        }
        function nt(x, k) {
          for (var Y = 0; Y < k.length; Y++) {
            var J = k[Y];
            (J.enumerable = J.enumerable || !1),
              (J.configurable = !0),
              "value" in J && (J.writable = !0),
              Object.defineProperty(x, _t(J.key), J);
          }
        }
        function te(x, k, Y) {
          return (
            k && nt(x.prototype, k),
            Y && nt(x, Y),
            Object.defineProperty(x, "prototype", { writable: !1 }),
            x
          );
        }
        function kt(x, k, Y) {
          return (
            (k = m(k)),
            Tt(
              x,
              I()
                ? Reflect.construct(k, Y || [], m(x).constructor)
                : k.apply(x, Y),
            )
          );
        }
        function Tt(x, k) {
          if (k && (St(k) === "object" || typeof k == "function")) return k;
          if (k !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return vt(x);
        }
        function vt(x) {
          if (x === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return x;
        }
        function I() {
          try {
            var x = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (I = function () {
            return !!x;
          })();
        }
        function m(x) {
          return (
            (m = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (Y) {
                  return Y.__proto__ || Object.getPrototypeOf(Y);
                }),
            m(x)
          );
        }
        function S(x, k) {
          if (typeof k != "function" && k !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (x.prototype = Object.create(k && k.prototype, {
            constructor: { value: x, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(x, "prototype", { writable: !1 }),
            k && g(x, k);
        }
        function g(x, k) {
          return (
            (g = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (J, Mt) {
                  return (J.__proto__ = Mt), J;
                }),
            g(x, k)
          );
        }
        function y(x, k) {
          var Y = Object.keys(x);
          if (Object.getOwnPropertySymbols) {
            var J = Object.getOwnPropertySymbols(x);
            k &&
              (J = J.filter(function (Mt) {
                return Object.getOwnPropertyDescriptor(x, Mt).enumerable;
              })),
              Y.push.apply(Y, J);
          }
          return Y;
        }
        function rt(x) {
          for (var k = 1; k < arguments.length; k++) {
            var Y = arguments[k] != null ? arguments[k] : {};
            k % 2
              ? y(Object(Y), !0).forEach(function (J) {
                  ot(x, J, Y[J]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    x,
                    Object.getOwnPropertyDescriptors(Y),
                  )
                : y(Object(Y)).forEach(function (J) {
                    Object.defineProperty(
                      x,
                      J,
                      Object.getOwnPropertyDescriptor(Y, J),
                    );
                  });
          }
          return x;
        }
        function ot(x, k, Y) {
          return (
            (k = _t(k)),
            k in x
              ? Object.defineProperty(x, k, {
                  value: Y,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (x[k] = Y),
            x
          );
        }
        function _t(x) {
          var k = j(x, "string");
          return St(k) == "symbol" ? k : k + "";
        }
        function j(x, k) {
          if (St(x) != "object" || !x) return x;
          var Y = x[Symbol.toPrimitive];
          if (Y !== void 0) {
            var J = Y.call(x, k || "default");
            if (St(J) != "object") return J;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (k === "string" ? String : Number)(x);
        }
        function N(x, k) {
          return E(x) || f(x, k) || X(x, k) || M();
        }
        function M() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function X(x, k) {
          if (x) {
            if (typeof x == "string") return v(x, k);
            var Y = Object.prototype.toString.call(x).slice(8, -1);
            if (
              (Y === "Object" && x.constructor && (Y = x.constructor.name),
              Y === "Map" || Y === "Set")
            )
              return Array.from(x);
            if (
              Y === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Y)
            )
              return v(x, k);
          }
        }
        function v(x, k) {
          (k == null || k > x.length) && (k = x.length);
          for (var Y = 0, J = new Array(k); Y < k; Y++) J[Y] = x[Y];
          return J;
        }
        function f(x, k) {
          var Y =
            x == null
              ? null
              : (typeof Symbol < "u" && x[Symbol.iterator]) || x["@@iterator"];
          if (Y != null) {
            var J,
              Mt,
              q,
              yt,
              ft = [],
              bt = !0,
              Ut = !1;
            try {
              if (((q = (Y = Y.call(x)).next), k === 0)) {
                if (Object(Y) !== Y) return;
                bt = !1;
              } else
                for (
                  ;
                  !(bt = (J = q.call(Y)).done) &&
                  (ft.push(J.value), ft.length !== k);
                  bt = !0
                );
            } catch (Ht) {
              (Ut = !0), (Mt = Ht);
            } finally {
              try {
                if (
                  !bt &&
                  Y.return != null &&
                  ((yt = Y.return()), Object(yt) !== yt)
                )
                  return;
              } finally {
                if (Ut) throw Mt;
              }
            }
            return ft;
          }
        }
        function E(x) {
          if (Array.isArray(x)) return x;
        }
        function _() {
          return (
            (_ = Object.assign
              ? Object.assign.bind()
              : function (x) {
                  for (var k = 1; k < arguments.length; k++) {
                    var Y = arguments[k];
                    for (var J in Y)
                      Object.prototype.hasOwnProperty.call(Y, J) &&
                        (x[J] = Y[J]);
                  }
                  return x;
                }),
            _.apply(this, arguments)
          );
        }
        var A = function (k, Y) {
            var J;
            return (
              l.isValidElement(k)
                ? (J = l.cloneElement(k, Y))
                : H()(k)
                  ? (J = k(Y))
                  : (J = l.createElement(
                      "line",
                      _({}, Y, { className: "recharts-reference-line-line" }),
                    )),
              J
            );
          },
          c = function (k, Y, J, Mt, q, yt, ft, bt, Ut) {
            var Ht = q.x,
              ut = q.y,
              o = q.width,
              h = q.height;
            if (J) {
              var O = Ut.y,
                d = k.y.apply(O, { position: yt });
              if ((0, ct.R)(Ut, "discard") && !k.y.isInRange(d)) return null;
              var R = [
                { x: Ht + o, y: d },
                { x: Ht, y: d },
              ];
              return bt === "left" ? R.reverse() : R;
            }
            if (Y) {
              var Q = Ut.x,
                wt = k.x.apply(Q, { position: yt });
              if ((0, ct.R)(Ut, "discard") && !k.x.isInRange(wt)) return null;
              var zt = [
                { x: wt, y: ut + h },
                { x: wt, y: ut },
              ];
              return ft === "top" ? zt.reverse() : zt;
            }
            if (Mt) {
              var Vt = Ut.segment,
                se = Vt.map(function (K) {
                  return k.apply(K, { position: yt });
                });
              return (0, ct.R)(Ut, "discard") &&
                U()(se, function (K) {
                  return !k.isInRange(K);
                })
                ? null
                : se;
            }
            return null;
          };
        function P(x) {
          var k = x.x,
            Y = x.y,
            J = x.segment,
            Mt = x.xAxisId,
            q = x.yAxisId,
            yt = x.shape,
            ft = x.className,
            bt = x.alwaysShow,
            Ut = (0, et.Yp)(),
            Ht = (0, et.AF)(Mt),
            ut = (0, et.Nk)(q),
            o = (0, et.sk)();
          if (!Ut || !o) return null;
          (0, V.R)(
            bt === void 0,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
          );
          var h = (0, st.P2)({ x: Ht.scale, y: ut.scale }),
            O = (0, at.vh)(k),
            d = (0, at.vh)(Y),
            R = J && J.length === 2,
            Q = c(h, O, d, R, o, x.position, Ht.orientation, ut.orientation, x);
          if (!Q) return null;
          var wt = N(Q, 2),
            zt = wt[0],
            Vt = zt.x,
            se = zt.y,
            K = wt[1],
            Z = K.x,
            L = K.y,
            xt = (0, ct.R)(x, "hidden") ? "url(#".concat(Ut, ")") : void 0,
            Ot = rt(
              rt({ clipPath: xt }, (0, mt.J9)(x, !0)),
              {},
              { x1: Vt, y1: se, x2: Z, y2: L },
            );
          return l.createElement(
            G.W,
            { className: (0, tt.A)("recharts-reference-line", ft) },
            A(yt, Ot),
            lt.J.renderCallByParent(
              x,
              (0, st.vh)({ x1: Vt, y1: se, x2: Z, y2: L }),
            ),
          );
        }
        var D = (function (x) {
          function k() {
            return Ft(this, k), kt(this, k, arguments);
          }
          return (
            S(k, x),
            te(k, [
              {
                key: "render",
                value: function () {
                  return l.createElement(P, this.props);
                },
              },
            ])
          );
        })(l.Component);
        ot(D, "displayName", "ReferenceLine"),
          ot(D, "defaultProps", {
            isFront: !1,
            ifOverflow: "discard",
            xAxisId: 0,
            yAxisId: 0,
            fill: "none",
            stroke: "#ccc",
            fillOpacity: 1,
            strokeWidth: 1,
            position: "middle",
          });
      },
      90150: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { W: () => I });
        var l = r(90626),
          F = r(34164),
          H = r(7351),
          it = r(23884),
          U = r(61195);
        function tt(m) {
          "@babel/helpers - typeof";
          return (
            (tt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (S) {
                    return typeof S;
                  }
                : function (S) {
                    return S &&
                      typeof Symbol == "function" &&
                      S.constructor === Symbol &&
                      S !== Symbol.prototype
                      ? "symbol"
                      : typeof S;
                  }),
            tt(m)
          );
        }
        function G(m, S) {
          if (!(m instanceof S))
            throw new TypeError("Cannot call a class as a function");
        }
        function lt(m, S) {
          for (var g = 0; g < S.length; g++) {
            var y = S[g];
            (y.enumerable = y.enumerable || !1),
              (y.configurable = !0),
              "value" in y && (y.writable = !0),
              Object.defineProperty(m, te(y.key), y);
          }
        }
        function ct(m, S, g) {
          return (
            S && lt(m.prototype, S),
            g && lt(m, g),
            Object.defineProperty(m, "prototype", { writable: !1 }),
            m
          );
        }
        function at(m, S, g) {
          return (
            (S = et(S)),
            st(
              m,
              mt()
                ? Reflect.construct(S, g || [], et(m).constructor)
                : S.apply(m, g),
            )
          );
        }
        function st(m, S) {
          if (S && (tt(S) === "object" || typeof S == "function")) return S;
          if (S !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return V(m);
        }
        function V(m) {
          if (m === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return m;
        }
        function mt() {
          try {
            var m = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (mt = function () {
            return !!m;
          })();
        }
        function et(m) {
          return (
            (et = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (g) {
                  return g.__proto__ || Object.getPrototypeOf(g);
                }),
            et(m)
          );
        }
        function St(m, S) {
          if (typeof S != "function" && S !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (m.prototype = Object.create(S && S.prototype, {
            constructor: { value: m, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(m, "prototype", { writable: !1 }),
            S && Ft(m, S);
        }
        function Ft(m, S) {
          return (
            (Ft = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (y, rt) {
                  return (y.__proto__ = rt), y;
                }),
            Ft(m, S)
          );
        }
        function nt(m, S, g) {
          return (
            (S = te(S)),
            S in m
              ? Object.defineProperty(m, S, {
                  value: g,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (m[S] = g),
            m
          );
        }
        function te(m) {
          var S = kt(m, "string");
          return tt(S) == "symbol" ? S : S + "";
        }
        function kt(m, S) {
          if (tt(m) != "object" || !m) return m;
          var g = m[Symbol.toPrimitive];
          if (g !== void 0) {
            var y = g.call(m, S || "default");
            if (tt(y) != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (S === "string" ? String : Number)(m);
        }
        function Tt() {
          return (
            (Tt = Object.assign
              ? Object.assign.bind()
              : function (m) {
                  for (var S = 1; S < arguments.length; S++) {
                    var g = arguments[S];
                    for (var y in g)
                      Object.prototype.hasOwnProperty.call(g, y) &&
                        (m[y] = g[y]);
                  }
                  return m;
                }),
            Tt.apply(this, arguments)
          );
        }
        function vt(m) {
          var S = m.xAxisId,
            g = (0, H.yi)(),
            y = (0, H.rY)(),
            rt = (0, H.AF)(S);
          return rt == null
            ? null
            : l.createElement(
                it.u,
                Tt({}, rt, {
                  className: (0, F.A)(
                    "recharts-".concat(rt.axisType, " ").concat(rt.axisType),
                    rt.className,
                  ),
                  viewBox: { x: 0, y: 0, width: g, height: y },
                  ticksGenerator: function (_t) {
                    return (0, U.Rh)(_t, !0);
                  },
                }),
              );
        }
        var I = (function (m) {
          function S() {
            return G(this, S), at(this, S, arguments);
          }
          return (
            St(S, m),
            ct(S, [
              {
                key: "render",
                value: function () {
                  return l.createElement(vt, this.props);
                },
              },
            ])
          );
        })(l.Component);
        nt(I, "displayName", "XAxis"),
          nt(I, "defaultProps", {
            allowDecimals: !0,
            hide: !1,
            orientation: "bottom",
            width: 0,
            height: 30,
            mirror: !1,
            xAxisId: 0,
            tickCount: 5,
            type: "category",
            padding: { left: 0, right: 0 },
            allowDataOverflow: !1,
            scale: "auto",
            reversed: !1,
            allowDuplicatedCategory: !0,
          });
      },
      73077: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { h: () => I });
        var l = r(90626),
          F = r(34164),
          H = r(7351),
          it = r(23884),
          U = r(61195);
        function tt(m) {
          "@babel/helpers - typeof";
          return (
            (tt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (S) {
                    return typeof S;
                  }
                : function (S) {
                    return S &&
                      typeof Symbol == "function" &&
                      S.constructor === Symbol &&
                      S !== Symbol.prototype
                      ? "symbol"
                      : typeof S;
                  }),
            tt(m)
          );
        }
        function G(m, S) {
          if (!(m instanceof S))
            throw new TypeError("Cannot call a class as a function");
        }
        function lt(m, S) {
          for (var g = 0; g < S.length; g++) {
            var y = S[g];
            (y.enumerable = y.enumerable || !1),
              (y.configurable = !0),
              "value" in y && (y.writable = !0),
              Object.defineProperty(m, te(y.key), y);
          }
        }
        function ct(m, S, g) {
          return (
            S && lt(m.prototype, S),
            g && lt(m, g),
            Object.defineProperty(m, "prototype", { writable: !1 }),
            m
          );
        }
        function at(m, S, g) {
          return (
            (S = et(S)),
            st(
              m,
              mt()
                ? Reflect.construct(S, g || [], et(m).constructor)
                : S.apply(m, g),
            )
          );
        }
        function st(m, S) {
          if (S && (tt(S) === "object" || typeof S == "function")) return S;
          if (S !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return V(m);
        }
        function V(m) {
          if (m === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return m;
        }
        function mt() {
          try {
            var m = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (mt = function () {
            return !!m;
          })();
        }
        function et(m) {
          return (
            (et = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (g) {
                  return g.__proto__ || Object.getPrototypeOf(g);
                }),
            et(m)
          );
        }
        function St(m, S) {
          if (typeof S != "function" && S !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (m.prototype = Object.create(S && S.prototype, {
            constructor: { value: m, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(m, "prototype", { writable: !1 }),
            S && Ft(m, S);
        }
        function Ft(m, S) {
          return (
            (Ft = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (y, rt) {
                  return (y.__proto__ = rt), y;
                }),
            Ft(m, S)
          );
        }
        function nt(m, S, g) {
          return (
            (S = te(S)),
            S in m
              ? Object.defineProperty(m, S, {
                  value: g,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (m[S] = g),
            m
          );
        }
        function te(m) {
          var S = kt(m, "string");
          return tt(S) == "symbol" ? S : S + "";
        }
        function kt(m, S) {
          if (tt(m) != "object" || !m) return m;
          var g = m[Symbol.toPrimitive];
          if (g !== void 0) {
            var y = g.call(m, S || "default");
            if (tt(y) != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (S === "string" ? String : Number)(m);
        }
        function Tt() {
          return (
            (Tt = Object.assign
              ? Object.assign.bind()
              : function (m) {
                  for (var S = 1; S < arguments.length; S++) {
                    var g = arguments[S];
                    for (var y in g)
                      Object.prototype.hasOwnProperty.call(g, y) &&
                        (m[y] = g[y]);
                  }
                  return m;
                }),
            Tt.apply(this, arguments)
          );
        }
        var vt = function (S) {
            var g = S.yAxisId,
              y = (0, H.yi)(),
              rt = (0, H.rY)(),
              ot = (0, H.Nk)(g);
            return ot == null
              ? null
              : l.createElement(
                  it.u,
                  Tt({}, ot, {
                    className: (0, F.A)(
                      "recharts-".concat(ot.axisType, " ").concat(ot.axisType),
                      ot.className,
                    ),
                    viewBox: { x: 0, y: 0, width: y, height: rt },
                    ticksGenerator: function (j) {
                      return (0, U.Rh)(j, !0);
                    },
                  }),
                );
          },
          I = (function (m) {
            function S() {
              return G(this, S), at(this, S, arguments);
            }
            return (
              St(S, m),
              ct(S, [
                {
                  key: "render",
                  value: function () {
                    return l.createElement(vt, this.props);
                  },
                },
              ])
            );
          })(l.Component);
        nt(I, "displayName", "YAxis"),
          nt(I, "defaultProps", {
            allowDuplicatedCategory: !0,
            allowDecimals: !0,
            hide: !1,
            orientation: "left",
            width: 60,
            height: 0,
            mirror: !1,
            yAxisId: 0,
            tickCount: 5,
            type: "number",
            padding: { top: 0, bottom: 0 },
            allowDataOverflow: !1,
            scale: "auto",
            reversed: !1,
          });
      },
      81887: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { f: () => vt });
        var l = r(3316),
          F = r.n(l),
          H = r(96714),
          it = r(15654),
          U = r(59640),
          tt = r(12260);
        function G(I, m, S) {
          if (m < 1) return [];
          if (m === 1 && S === void 0) return I;
          for (var g = [], y = 0; y < I.length; y += m)
            if (S === void 0 || S(I[y]) === !0) g.push(I[y]);
            else return;
          return g;
        }
        function lt(I, m, S) {
          var g = { width: I.width + m.width, height: I.height + m.height };
          return (0, tt.bx)(g, S);
        }
        function ct(I, m, S) {
          var g = S === "width",
            y = I.x,
            rt = I.y,
            ot = I.width,
            _t = I.height;
          return m === 1
            ? { start: g ? y : rt, end: g ? y + ot : rt + _t }
            : { start: g ? y + ot : rt + _t, end: g ? y : rt };
        }
        function at(I, m, S, g, y) {
          if (I * m < I * g || I * m > I * y) return !1;
          var rt = S();
          return (
            I * (m - (I * rt) / 2 - g) >= 0 && I * (m + (I * rt) / 2 - y) <= 0
          );
        }
        function st(I, m) {
          return G(I, m + 1);
        }
        function V(I, m, S, g, y) {
          for (
            var rt = (g || []).slice(),
              ot = m.start,
              _t = m.end,
              j = 0,
              N = 1,
              M = ot,
              X = function () {
                var E = g?.[j];
                if (E === void 0) return { v: G(g, N) };
                var _ = j,
                  A,
                  c = function () {
                    return A === void 0 && (A = S(E, _)), A;
                  },
                  P = E.coordinate,
                  D = j === 0 || at(I, P, c, M, _t);
                D || ((j = 0), (M = ot), (N += 1)),
                  D && ((M = P + I * (c() / 2 + y)), (j += N));
              },
              v;
            N <= rt.length;
          )
            if (((v = X()), v)) return v.v;
          return [];
        }
        function mt(I) {
          "@babel/helpers - typeof";
          return (
            (mt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (m) {
                    return typeof m;
                  }
                : function (m) {
                    return m &&
                      typeof Symbol == "function" &&
                      m.constructor === Symbol &&
                      m !== Symbol.prototype
                      ? "symbol"
                      : typeof m;
                  }),
            mt(I)
          );
        }
        function et(I, m) {
          var S = Object.keys(I);
          if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(I);
            m &&
              (g = g.filter(function (y) {
                return Object.getOwnPropertyDescriptor(I, y).enumerable;
              })),
              S.push.apply(S, g);
          }
          return S;
        }
        function St(I) {
          for (var m = 1; m < arguments.length; m++) {
            var S = arguments[m] != null ? arguments[m] : {};
            m % 2
              ? et(Object(S), !0).forEach(function (g) {
                  Ft(I, g, S[g]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    I,
                    Object.getOwnPropertyDescriptors(S),
                  )
                : et(Object(S)).forEach(function (g) {
                    Object.defineProperty(
                      I,
                      g,
                      Object.getOwnPropertyDescriptor(S, g),
                    );
                  });
          }
          return I;
        }
        function Ft(I, m, S) {
          return (
            (m = nt(m)),
            m in I
              ? Object.defineProperty(I, m, {
                  value: S,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (I[m] = S),
            I
          );
        }
        function nt(I) {
          var m = te(I, "string");
          return mt(m) == "symbol" ? m : m + "";
        }
        function te(I, m) {
          if (mt(I) != "object" || !I) return I;
          var S = I[Symbol.toPrimitive];
          if (S !== void 0) {
            var g = S.call(I, m || "default");
            if (mt(g) != "object") return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (m === "string" ? String : Number)(I);
        }
        function kt(I, m, S, g, y) {
          for (
            var rt = (g || []).slice(),
              ot = rt.length,
              _t = m.start,
              j = m.end,
              N = function (v) {
                var f = rt[v],
                  E,
                  _ = function () {
                    return E === void 0 && (E = S(f, v)), E;
                  };
                if (v === ot - 1) {
                  var A = I * (f.coordinate + (I * _()) / 2 - j);
                  rt[v] = f = St(
                    St({}, f),
                    {},
                    { tickCoord: A > 0 ? f.coordinate - A * I : f.coordinate },
                  );
                } else
                  rt[v] = f = St(St({}, f), {}, { tickCoord: f.coordinate });
                var c = at(I, f.tickCoord, _, _t, j);
                c &&
                  ((j = f.tickCoord - I * (_() / 2 + y)),
                  (rt[v] = St(St({}, f), {}, { isShow: !0 })));
              },
              M = ot - 1;
            M >= 0;
            M--
          )
            N(M);
          return rt;
        }
        function Tt(I, m, S, g, y, rt) {
          var ot = (g || []).slice(),
            _t = ot.length,
            j = m.start,
            N = m.end;
          if (rt) {
            var M = g[_t - 1],
              X = S(M, _t - 1),
              v = I * (M.coordinate + (I * X) / 2 - N);
            ot[_t - 1] = M = St(
              St({}, M),
              {},
              { tickCoord: v > 0 ? M.coordinate - v * I : M.coordinate },
            );
            var f = at(
              I,
              M.tickCoord,
              function () {
                return X;
              },
              j,
              N,
            );
            f &&
              ((N = M.tickCoord - I * (X / 2 + y)),
              (ot[_t - 1] = St(St({}, M), {}, { isShow: !0 })));
          }
          for (
            var E = rt ? _t - 1 : _t,
              _ = function (P) {
                var D = ot[P],
                  x,
                  k = function () {
                    return x === void 0 && (x = S(D, P)), x;
                  };
                if (P === 0) {
                  var Y = I * (D.coordinate - (I * k()) / 2 - j);
                  ot[P] = D = St(
                    St({}, D),
                    {},
                    { tickCoord: Y < 0 ? D.coordinate - Y * I : D.coordinate },
                  );
                } else
                  ot[P] = D = St(St({}, D), {}, { tickCoord: D.coordinate });
                var J = at(I, D.tickCoord, k, j, N);
                J &&
                  ((j = D.tickCoord + I * (k() / 2 + y)),
                  (ot[P] = St(St({}, D), {}, { isShow: !0 })));
              },
              A = 0;
            A < E;
            A++
          )
            _(A);
          return ot;
        }
        function vt(I, m, S) {
          var g = I.tick,
            y = I.ticks,
            rt = I.viewBox,
            ot = I.minTickGap,
            _t = I.orientation,
            j = I.interval,
            N = I.tickFormatter,
            M = I.unit,
            X = I.angle;
          if (!y || !y.length || !g) return [];
          if ((0, H.Et)(j) || U.m.isSsr)
            return st(y, typeof j == "number" && (0, H.Et)(j) ? j : 0);
          var v = [],
            f = _t === "top" || _t === "bottom" ? "width" : "height",
            E =
              M && f === "width"
                ? (0, it.Pu)(M, { fontSize: m, letterSpacing: S })
                : { width: 0, height: 0 },
            _ = function (D, x) {
              var k = F()(N) ? N(D.value, x) : D.value;
              return f === "width"
                ? lt((0, it.Pu)(k, { fontSize: m, letterSpacing: S }), E, X)
                : (0, it.Pu)(k, { fontSize: m, letterSpacing: S })[f];
            },
            A =
              y.length >= 2 ? (0, H.sA)(y[1].coordinate - y[0].coordinate) : 1,
            c = ct(rt, A, f);
          return j === "equidistantPreserveStart"
            ? V(A, c, _, y, ot)
            : (j === "preserveStart" || j === "preserveStartEnd"
                ? (v = Tt(A, c, _, y, ot, j === "preserveStartEnd"))
                : (v = kt(A, c, _, y, ot)),
              v.filter(function (P) {
                return P.isShow;
              }));
        }
      },
      61141: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { X: () => Yn });
        var l = r(98403),
          F = r(90626),
          H = r(34164),
          it = r(86356),
          U = r(3316),
          tt = r.n(U),
          G = r(82544),
          lt = r.n(G),
          ct = r(64609),
          at = r.n(ct),
          st = r(27367),
          V = r.n(st),
          mt = r(58782),
          et = r.n(mt),
          St = r(33487),
          Ft = r(21687),
          nt = r(75055),
          te = r(12244),
          kt = r(59640),
          Tt = r(96714),
          vt = r(61195),
          I = r(93563),
          m = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
          S = ["key"],
          g;
        function y(At) {
          "@babel/helpers - typeof";
          return (
            (y =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (gt) {
                    return typeof gt;
                  }
                : function (gt) {
                    return gt &&
                      typeof Symbol == "function" &&
                      gt.constructor === Symbol &&
                      gt !== Symbol.prototype
                      ? "symbol"
                      : typeof gt;
                  }),
            y(At)
          );
        }
        function rt(At, gt) {
          if (At == null) return {};
          var Rt = ot(At, gt),
            It,
            ne;
          if (Object.getOwnPropertySymbols) {
            var xe = Object.getOwnPropertySymbols(At);
            for (ne = 0; ne < xe.length; ne++)
              (It = xe[ne]),
                !(gt.indexOf(It) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(At, It) &&
                  (Rt[It] = At[It]);
          }
          return Rt;
        }
        function ot(At, gt) {
          if (At == null) return {};
          var Rt = {};
          for (var It in At)
            if (Object.prototype.hasOwnProperty.call(At, It)) {
              if (gt.indexOf(It) >= 0) continue;
              Rt[It] = At[It];
            }
          return Rt;
        }
        function _t() {
          return (
            (_t = Object.assign
              ? Object.assign.bind()
              : function (At) {
                  for (var gt = 1; gt < arguments.length; gt++) {
                    var Rt = arguments[gt];
                    for (var It in Rt)
                      Object.prototype.hasOwnProperty.call(Rt, It) &&
                        (At[It] = Rt[It]);
                  }
                  return At;
                }),
            _t.apply(this, arguments)
          );
        }
        function j(At, gt) {
          var Rt = Object.keys(At);
          if (Object.getOwnPropertySymbols) {
            var It = Object.getOwnPropertySymbols(At);
            gt &&
              (It = It.filter(function (ne) {
                return Object.getOwnPropertyDescriptor(At, ne).enumerable;
              })),
              Rt.push.apply(Rt, It);
          }
          return Rt;
        }
        function N(At) {
          for (var gt = 1; gt < arguments.length; gt++) {
            var Rt = arguments[gt] != null ? arguments[gt] : {};
            gt % 2
              ? j(Object(Rt), !0).forEach(function (It) {
                  x(At, It, Rt[It]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    At,
                    Object.getOwnPropertyDescriptors(Rt),
                  )
                : j(Object(Rt)).forEach(function (It) {
                    Object.defineProperty(
                      At,
                      It,
                      Object.getOwnPropertyDescriptor(Rt, It),
                    );
                  });
          }
          return At;
        }
        function M(At, gt) {
          if (!(At instanceof gt))
            throw new TypeError("Cannot call a class as a function");
        }
        function X(At, gt) {
          for (var Rt = 0; Rt < gt.length; Rt++) {
            var It = gt[Rt];
            (It.enumerable = It.enumerable || !1),
              (It.configurable = !0),
              "value" in It && (It.writable = !0),
              Object.defineProperty(At, k(It.key), It);
          }
        }
        function v(At, gt, Rt) {
          return (
            gt && X(At.prototype, gt),
            Rt && X(At, Rt),
            Object.defineProperty(At, "prototype", { writable: !1 }),
            At
          );
        }
        function f(At, gt, Rt) {
          return (
            (gt = c(gt)),
            E(
              At,
              A()
                ? Reflect.construct(gt, Rt || [], c(At).constructor)
                : gt.apply(At, Rt),
            )
          );
        }
        function E(At, gt) {
          if (gt && (y(gt) === "object" || typeof gt == "function")) return gt;
          if (gt !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return _(At);
        }
        function _(At) {
          if (At === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return At;
        }
        function A() {
          try {
            var At = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (A = function () {
            return !!At;
          })();
        }
        function c(At) {
          return (
            (c = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (Rt) {
                  return Rt.__proto__ || Object.getPrototypeOf(Rt);
                }),
            c(At)
          );
        }
        function P(At, gt) {
          if (typeof gt != "function" && gt !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (At.prototype = Object.create(gt && gt.prototype, {
            constructor: { value: At, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(At, "prototype", { writable: !1 }),
            gt && D(At, gt);
        }
        function D(At, gt) {
          return (
            (D = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (It, ne) {
                  return (It.__proto__ = ne), It;
                }),
            D(At, gt)
          );
        }
        function x(At, gt, Rt) {
          return (
            (gt = k(gt)),
            gt in At
              ? Object.defineProperty(At, gt, {
                  value: Rt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (At[gt] = Rt),
            At
          );
        }
        function k(At) {
          var gt = Y(At, "string");
          return y(gt) == "symbol" ? gt : gt + "";
        }
        function Y(At, gt) {
          if (y(At) != "object" || !At) return At;
          var Rt = At[Symbol.toPrimitive];
          if (Rt !== void 0) {
            var It = Rt.call(At, gt || "default");
            if (y(It) != "object") return It;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (gt === "string" ? String : Number)(At);
        }
        var J = (function (At) {
          function gt() {
            var Rt;
            M(this, gt);
            for (
              var It = arguments.length, ne = new Array(It), xe = 0;
              xe < It;
              xe++
            )
              ne[xe] = arguments[xe];
            return (
              (Rt = f(this, gt, [].concat(ne))),
              x(Rt, "state", { isAnimationFinished: !0 }),
              x(Rt, "id", (0, Tt.NF)("recharts-area-")),
              x(Rt, "handleAnimationEnd", function () {
                var Ce = Rt.props.onAnimationEnd;
                Rt.setState({ isAnimationFinished: !0 }), tt()(Ce) && Ce();
              }),
              x(Rt, "handleAnimationStart", function () {
                var Ce = Rt.props.onAnimationStart;
                Rt.setState({ isAnimationFinished: !1 }), tt()(Ce) && Ce();
              }),
              Rt
            );
          }
          return (
            P(gt, At),
            v(
              gt,
              [
                {
                  key: "renderDots",
                  value: function (It, ne, xe) {
                    var Ce = this.props.isAnimationActive,
                      ke = this.state.isAnimationFinished;
                    if (Ce && !ke) return null;
                    var Ke = this.props,
                      Fe = Ke.dot,
                      _e = Ke.points,
                      Re = Ke.dataKey,
                      nn = (0, I.J9)(this.props, !1),
                      un = (0, I.J9)(Fe, !0),
                      An = _e.map(function (tn, Rn) {
                        var En = N(
                          N(N({ key: "dot-".concat(Rn), r: 3 }, nn), un),
                          {},
                          {
                            index: Rn,
                            cx: tn.x,
                            cy: tn.y,
                            dataKey: Re,
                            value: tn.value,
                            payload: tn.payload,
                            points: _e,
                          },
                        );
                        return gt.renderDotItem(Fe, En);
                      }),
                      Pn = {
                        clipPath: It
                          ? "url(#clipPath-"
                              .concat(ne ? "" : "dots-")
                              .concat(xe, ")")
                          : null,
                      };
                    return F.createElement(
                      nt.W,
                      _t({ className: "recharts-area-dots" }, Pn),
                      An,
                    );
                  },
                },
                {
                  key: "renderHorizontalRect",
                  value: function (It) {
                    var ne = this.props,
                      xe = ne.baseLine,
                      Ce = ne.points,
                      ke = ne.strokeWidth,
                      Ke = Ce[0].x,
                      Fe = Ce[Ce.length - 1].x,
                      _e = It * Math.abs(Ke - Fe),
                      Re = lt()(
                        Ce.map(function (nn) {
                          return nn.y || 0;
                        }),
                      );
                    return (
                      (0, Tt.Et)(xe) && typeof xe == "number"
                        ? (Re = Math.max(xe, Re))
                        : xe &&
                          Array.isArray(xe) &&
                          xe.length &&
                          (Re = Math.max(
                            lt()(
                              xe.map(function (nn) {
                                return nn.y || 0;
                              }),
                            ),
                            Re,
                          )),
                      (0, Tt.Et)(Re)
                        ? F.createElement("rect", {
                            x: Ke < Fe ? Ke : Ke - _e,
                            y: 0,
                            width: _e,
                            height: Math.floor(
                              Re + (ke ? parseInt("".concat(ke), 10) : 1),
                            ),
                          })
                        : null
                    );
                  },
                },
                {
                  key: "renderVerticalRect",
                  value: function (It) {
                    var ne = this.props,
                      xe = ne.baseLine,
                      Ce = ne.points,
                      ke = ne.strokeWidth,
                      Ke = Ce[0].y,
                      Fe = Ce[Ce.length - 1].y,
                      _e = It * Math.abs(Ke - Fe),
                      Re = lt()(
                        Ce.map(function (nn) {
                          return nn.x || 0;
                        }),
                      );
                    return (
                      (0, Tt.Et)(xe) && typeof xe == "number"
                        ? (Re = Math.max(xe, Re))
                        : xe &&
                          Array.isArray(xe) &&
                          xe.length &&
                          (Re = Math.max(
                            lt()(
                              xe.map(function (nn) {
                                return nn.x || 0;
                              }),
                            ),
                            Re,
                          )),
                      (0, Tt.Et)(Re)
                        ? F.createElement("rect", {
                            x: 0,
                            y: Ke < Fe ? Ke : Ke - _e,
                            width: Re + (ke ? parseInt("".concat(ke), 10) : 1),
                            height: Math.floor(_e),
                          })
                        : null
                    );
                  },
                },
                {
                  key: "renderClipRect",
                  value: function (It) {
                    var ne = this.props.layout;
                    return ne === "vertical"
                      ? this.renderVerticalRect(It)
                      : this.renderHorizontalRect(It);
                  },
                },
                {
                  key: "renderAreaStatically",
                  value: function (It, ne, xe, Ce) {
                    var ke = this.props,
                      Ke = ke.layout,
                      Fe = ke.type,
                      _e = ke.stroke,
                      Re = ke.connectNulls,
                      nn = ke.isRange,
                      un = ke.ref,
                      An = rt(ke, m);
                    return F.createElement(
                      nt.W,
                      {
                        clipPath: xe ? "url(#clipPath-".concat(Ce, ")") : null,
                      },
                      F.createElement(
                        St.I,
                        _t({}, (0, I.J9)(An, !0), {
                          points: It,
                          connectNulls: Re,
                          type: Fe,
                          baseLine: ne,
                          layout: Ke,
                          stroke: "none",
                          className: "recharts-area-area",
                        }),
                      ),
                      _e !== "none" &&
                        F.createElement(
                          St.I,
                          _t({}, (0, I.J9)(this.props, !1), {
                            className: "recharts-area-curve",
                            layout: Ke,
                            type: Fe,
                            connectNulls: Re,
                            fill: "none",
                            points: It,
                          }),
                        ),
                      _e !== "none" &&
                        nn &&
                        F.createElement(
                          St.I,
                          _t({}, (0, I.J9)(this.props, !1), {
                            className: "recharts-area-curve",
                            layout: Ke,
                            type: Fe,
                            connectNulls: Re,
                            fill: "none",
                            points: ne,
                          }),
                        ),
                    );
                  },
                },
                {
                  key: "renderAreaWithAnimation",
                  value: function (It, ne) {
                    var xe = this,
                      Ce = this.props,
                      ke = Ce.points,
                      Ke = Ce.baseLine,
                      Fe = Ce.isAnimationActive,
                      _e = Ce.animationBegin,
                      Re = Ce.animationDuration,
                      nn = Ce.animationEasing,
                      un = Ce.animationId,
                      An = this.state,
                      Pn = An.prevPoints,
                      tn = An.prevBaseLine;
                    return F.createElement(
                      it.Ay,
                      {
                        begin: _e,
                        duration: Re,
                        isActive: Fe,
                        easing: nn,
                        from: { t: 0 },
                        to: { t: 1 },
                        key: "area-".concat(un),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart,
                      },
                      function (Rn) {
                        var En = Rn.t;
                        if (Pn) {
                          var Tn = Pn.length / ke.length,
                            Mn = ke.map(function (ir, dr) {
                              var lr = Math.floor(dr * Tn);
                              if (Pn[lr]) {
                                var tr = Pn[lr],
                                  er = (0, Tt.Dj)(tr.x, ir.x),
                                  fr = (0, Tt.Dj)(tr.y, ir.y);
                                return N(
                                  N({}, ir),
                                  {},
                                  { x: er(En), y: fr(En) },
                                );
                              }
                              return ir;
                            }),
                            Cn;
                          if ((0, Tt.Et)(Ke) && typeof Ke == "number") {
                            var $n = (0, Tt.Dj)(tn, Ke);
                            Cn = $n(En);
                          } else if (at()(Ke) || V()(Ke)) {
                            var Qn = (0, Tt.Dj)(tn, 0);
                            Cn = Qn(En);
                          } else
                            Cn = Ke.map(function (ir, dr) {
                              var lr = Math.floor(dr * Tn);
                              if (tn[lr]) {
                                var tr = tn[lr],
                                  er = (0, Tt.Dj)(tr.x, ir.x),
                                  fr = (0, Tt.Dj)(tr.y, ir.y);
                                return N(
                                  N({}, ir),
                                  {},
                                  { x: er(En), y: fr(En) },
                                );
                              }
                              return ir;
                            });
                          return xe.renderAreaStatically(Mn, Cn, It, ne);
                        }
                        return F.createElement(
                          nt.W,
                          null,
                          F.createElement(
                            "defs",
                            null,
                            F.createElement(
                              "clipPath",
                              { id: "animationClipPath-".concat(ne) },
                              xe.renderClipRect(En),
                            ),
                          ),
                          F.createElement(
                            nt.W,
                            {
                              clipPath: "url(#animationClipPath-".concat(
                                ne,
                                ")",
                              ),
                            },
                            xe.renderAreaStatically(ke, Ke, It, ne),
                          ),
                        );
                      },
                    );
                  },
                },
                {
                  key: "renderArea",
                  value: function (It, ne) {
                    var xe = this.props,
                      Ce = xe.points,
                      ke = xe.baseLine,
                      Ke = xe.isAnimationActive,
                      Fe = this.state,
                      _e = Fe.prevPoints,
                      Re = Fe.prevBaseLine,
                      nn = Fe.totalLength;
                    return Ke &&
                      Ce &&
                      Ce.length &&
                      ((!_e && nn > 0) || !et()(_e, Ce) || !et()(Re, ke))
                      ? this.renderAreaWithAnimation(It, ne)
                      : this.renderAreaStatically(Ce, ke, It, ne);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var It,
                      ne = this.props,
                      xe = ne.hide,
                      Ce = ne.dot,
                      ke = ne.points,
                      Ke = ne.className,
                      Fe = ne.top,
                      _e = ne.left,
                      Re = ne.xAxis,
                      nn = ne.yAxis,
                      un = ne.width,
                      An = ne.height,
                      Pn = ne.isAnimationActive,
                      tn = ne.id;
                    if (xe || !ke || !ke.length) return null;
                    var Rn = this.state.isAnimationFinished,
                      En = ke.length === 1,
                      Tn = (0, H.A)("recharts-area", Ke),
                      Mn = Re && Re.allowDataOverflow,
                      Cn = nn && nn.allowDataOverflow,
                      $n = Mn || Cn,
                      Qn = at()(tn) ? this.id : tn,
                      ir =
                        (It = (0, I.J9)(Ce, !1)) !== null && It !== void 0
                          ? It
                          : { r: 3, strokeWidth: 2 },
                      dr = ir.r,
                      lr = dr === void 0 ? 3 : dr,
                      tr = ir.strokeWidth,
                      er = tr === void 0 ? 2 : tr,
                      fr = (0, I.sT)(Ce) ? Ce : {},
                      pr = fr.clipDot,
                      Pr = pr === void 0 ? !0 : pr,
                      xr = lr * 2 + er;
                    return F.createElement(
                      nt.W,
                      { className: Tn },
                      Mn || Cn
                        ? F.createElement(
                            "defs",
                            null,
                            F.createElement(
                              "clipPath",
                              { id: "clipPath-".concat(Qn) },
                              F.createElement("rect", {
                                x: Mn ? _e : _e - un / 2,
                                y: Cn ? Fe : Fe - An / 2,
                                width: Mn ? un : un * 2,
                                height: Cn ? An : An * 2,
                              }),
                            ),
                            !Pr &&
                              F.createElement(
                                "clipPath",
                                { id: "clipPath-dots-".concat(Qn) },
                                F.createElement("rect", {
                                  x: _e - xr / 2,
                                  y: Fe - xr / 2,
                                  width: un + xr,
                                  height: An + xr,
                                }),
                              ),
                          )
                        : null,
                      En ? null : this.renderArea($n, Qn),
                      (Ce || En) && this.renderDots($n, Pr, Qn),
                      (!Pn || Rn) && te.Z.renderCallByParent(this.props, ke),
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (It, ne) {
                    return It.animationId !== ne.prevAnimationId
                      ? {
                          prevAnimationId: It.animationId,
                          curPoints: It.points,
                          curBaseLine: It.baseLine,
                          prevPoints: ne.curPoints,
                          prevBaseLine: ne.curBaseLine,
                        }
                      : It.points !== ne.curPoints ||
                          It.baseLine !== ne.curBaseLine
                        ? { curPoints: It.points, curBaseLine: It.baseLine }
                        : null;
                  },
                },
              ],
            )
          );
        })(F.PureComponent);
        (g = J),
          x(J, "displayName", "Area"),
          x(J, "defaultProps", {
            stroke: "#3182bd",
            fill: "#3182bd",
            fillOpacity: 0.6,
            xAxisId: 0,
            yAxisId: 0,
            legendType: "line",
            connectNulls: !1,
            points: [],
            dot: !1,
            activeDot: !0,
            hide: !1,
            isAnimationActive: !kt.m.isSsr,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
          }),
          x(J, "getBaseValue", function (At, gt, Rt, It) {
            var ne = At.layout,
              xe = At.baseValue,
              Ce = gt.props.baseValue,
              ke = Ce ?? xe;
            if ((0, Tt.Et)(ke) && typeof ke == "number") return ke;
            var Ke = ne === "horizontal" ? It : Rt,
              Fe = Ke.scale.domain();
            if (Ke.type === "number") {
              var _e = Math.max(Fe[0], Fe[1]),
                Re = Math.min(Fe[0], Fe[1]);
              return ke === "dataMin"
                ? Re
                : ke === "dataMax" || _e < 0
                  ? _e
                  : Math.max(Math.min(Fe[0], Fe[1]), 0);
            }
            return ke === "dataMin" ? Fe[0] : ke === "dataMax" ? Fe[1] : Fe[0];
          }),
          x(J, "getComposedData", function (At) {
            var gt = At.props,
              Rt = At.item,
              It = At.xAxis,
              ne = At.yAxis,
              xe = At.xAxisTicks,
              Ce = At.yAxisTicks,
              ke = At.bandSize,
              Ke = At.dataKey,
              Fe = At.stackedData,
              _e = At.dataStartIndex,
              Re = At.displayedData,
              nn = At.offset,
              un = gt.layout,
              An = Fe && Fe.length,
              Pn = g.getBaseValue(gt, Rt, It, ne),
              tn = un === "horizontal",
              Rn = !1,
              En = Re.map(function (Mn, Cn) {
                var $n;
                An
                  ? ($n = Fe[_e + Cn])
                  : (($n = (0, vt.kr)(Mn, Ke)),
                    Array.isArray($n) ? (Rn = !0) : ($n = [Pn, $n]));
                var Qn = $n[1] == null || (An && (0, vt.kr)(Mn, Ke) == null);
                return tn
                  ? {
                      x: (0, vt.nb)({
                        axis: It,
                        ticks: xe,
                        bandSize: ke,
                        entry: Mn,
                        index: Cn,
                      }),
                      y: Qn ? null : ne.scale($n[1]),
                      value: $n,
                      payload: Mn,
                    }
                  : {
                      x: Qn ? null : It.scale($n[1]),
                      y: (0, vt.nb)({
                        axis: ne,
                        ticks: Ce,
                        bandSize: ke,
                        entry: Mn,
                        index: Cn,
                      }),
                      value: $n,
                      payload: Mn,
                    };
              }),
              Tn;
            return (
              An || Rn
                ? (Tn = En.map(function (Mn) {
                    var Cn = Array.isArray(Mn.value) ? Mn.value[0] : null;
                    return tn
                      ? {
                          x: Mn.x,
                          y: Cn != null && Mn.y != null ? ne.scale(Cn) : null,
                        }
                      : { x: Cn != null ? It.scale(Cn) : null, y: Mn.y };
                  }))
                : (Tn = tn ? ne.scale(Pn) : It.scale(Pn)),
              N({ points: En, baseLine: Tn, layout: un, isRange: Rn }, nn)
            );
          }),
          x(J, "renderDotItem", function (At, gt) {
            var Rt;
            if (F.isValidElement(At)) Rt = F.cloneElement(At, gt);
            else if (tt()(At)) Rt = At(gt);
            else {
              var It = (0, H.A)(
                  "recharts-area-dot",
                  typeof At != "boolean" ? At.className : "",
                ),
                ne = gt.key,
                xe = rt(gt, S);
              Rt = F.createElement(
                Ft.c,
                _t({}, xe, { key: ne, className: It }),
              );
            }
            return Rt;
          });
        var Mt = r(20283),
          q = r(90865);
        function yt(At) {
          "@babel/helpers - typeof";
          return (
            (yt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (gt) {
                    return typeof gt;
                  }
                : function (gt) {
                    return gt &&
                      typeof Symbol == "function" &&
                      gt.constructor === Symbol &&
                      gt !== Symbol.prototype
                      ? "symbol"
                      : typeof gt;
                  }),
            yt(At)
          );
        }
        function ft(At, gt) {
          if (!(At instanceof gt))
            throw new TypeError("Cannot call a class as a function");
        }
        function bt(At, gt) {
          for (var Rt = 0; Rt < gt.length; Rt++) {
            var It = gt[Rt];
            (It.enumerable = It.enumerable || !1),
              (It.configurable = !0),
              "value" in It && (It.writable = !0),
              Object.defineProperty(At, wt(It.key), It);
          }
        }
        function Ut(At, gt, Rt) {
          return (
            gt && bt(At.prototype, gt),
            Rt && bt(At, Rt),
            Object.defineProperty(At, "prototype", { writable: !1 }),
            At
          );
        }
        function Ht(At, gt, Rt) {
          return (
            (gt = O(gt)),
            ut(
              At,
              h()
                ? Reflect.construct(gt, Rt || [], O(At).constructor)
                : gt.apply(At, Rt),
            )
          );
        }
        function ut(At, gt) {
          if (gt && (yt(gt) === "object" || typeof gt == "function")) return gt;
          if (gt !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return o(At);
        }
        function o(At) {
          if (At === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return At;
        }
        function h() {
          try {
            var At = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (h = function () {
            return !!At;
          })();
        }
        function O(At) {
          return (
            (O = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (Rt) {
                  return Rt.__proto__ || Object.getPrototypeOf(Rt);
                }),
            O(At)
          );
        }
        function d(At, gt) {
          if (typeof gt != "function" && gt !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (At.prototype = Object.create(gt && gt.prototype, {
            constructor: { value: At, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(At, "prototype", { writable: !1 }),
            gt && R(At, gt);
        }
        function R(At, gt) {
          return (
            (R = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (It, ne) {
                  return (It.__proto__ = ne), It;
                }),
            R(At, gt)
          );
        }
        function Q(At, gt, Rt) {
          return (
            (gt = wt(gt)),
            gt in At
              ? Object.defineProperty(At, gt, {
                  value: Rt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (At[gt] = Rt),
            At
          );
        }
        function wt(At) {
          var gt = zt(At, "string");
          return yt(gt) == "symbol" ? gt : gt + "";
        }
        function zt(At, gt) {
          if (yt(At) != "object" || !At) return At;
          var Rt = At[Symbol.toPrimitive];
          if (Rt !== void 0) {
            var It = Rt.call(At, gt || "default");
            if (yt(It) != "object") return It;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (gt === "string" ? String : Number)(At);
        }
        var Vt = (function (At) {
          function gt() {
            return ft(this, gt), Ht(this, gt, arguments);
          }
          return (
            d(gt, At),
            Ut(gt, [
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ])
          );
        })(F.Component);
        Q(Vt, "displayName", "ZAxis"),
          Q(Vt, "defaultProps", {
            zAxisId: 0,
            range: [64, 64],
            scale: "auto",
            type: "number",
          });
        var se = r(10800),
          K = r(72040),
          Z = r(43998),
          L = r(17134),
          xt = r(53818),
          Ot = ["option", "isActive"];
        function $t() {
          return (
            ($t = Object.assign
              ? Object.assign.bind()
              : function (At) {
                  for (var gt = 1; gt < arguments.length; gt++) {
                    var Rt = arguments[gt];
                    for (var It in Rt)
                      Object.prototype.hasOwnProperty.call(Rt, It) &&
                        (At[It] = Rt[It]);
                  }
                  return At;
                }),
            $t.apply(this, arguments)
          );
        }
        function Jt(At, gt) {
          if (At == null) return {};
          var Rt = le(At, gt),
            It,
            ne;
          if (Object.getOwnPropertySymbols) {
            var xe = Object.getOwnPropertySymbols(At);
            for (ne = 0; ne < xe.length; ne++)
              (It = xe[ne]),
                !(gt.indexOf(It) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(At, It) &&
                  (Rt[It] = At[It]);
          }
          return Rt;
        }
        function le(At, gt) {
          if (At == null) return {};
          var Rt = {};
          for (var It in At)
            if (Object.prototype.hasOwnProperty.call(At, It)) {
              if (gt.indexOf(It) >= 0) continue;
              Rt[It] = At[It];
            }
          return Rt;
        }
        function W(At) {
          var gt = At.option,
            Rt = At.isActive,
            It = Jt(At, Ot);
          return typeof gt == "string"
            ? F.createElement(
                xt.yp,
                $t(
                  {
                    option: F.createElement(L.i, $t({ type: gt }, It)),
                    isActive: Rt,
                    shapeType: "symbols",
                  },
                  It,
                ),
              )
            : F.createElement(
                xt.yp,
                $t({ option: gt, isActive: Rt, shapeType: "symbols" }, It),
              );
        }
        var $;
        function Ct(At) {
          "@babel/helpers - typeof";
          return (
            (Ct =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (gt) {
                    return typeof gt;
                  }
                : function (gt) {
                    return gt &&
                      typeof Symbol == "function" &&
                      gt.constructor === Symbol &&
                      gt !== Symbol.prototype
                      ? "symbol"
                      : typeof gt;
                  }),
            Ct(At)
          );
        }
        function Pt() {
          return (
            (Pt = Object.assign
              ? Object.assign.bind()
              : function (At) {
                  for (var gt = 1; gt < arguments.length; gt++) {
                    var Rt = arguments[gt];
                    for (var It in Rt)
                      Object.prototype.hasOwnProperty.call(Rt, It) &&
                        (At[It] = Rt[It]);
                  }
                  return At;
                }),
            Pt.apply(this, arguments)
          );
        }
        function ee(At, gt) {
          var Rt = Object.keys(At);
          if (Object.getOwnPropertySymbols) {
            var It = Object.getOwnPropertySymbols(At);
            gt &&
              (It = It.filter(function (ne) {
                return Object.getOwnPropertyDescriptor(At, ne).enumerable;
              })),
              Rt.push.apply(Rt, It);
          }
          return Rt;
        }
        function Ie(At) {
          for (var gt = 1; gt < arguments.length; gt++) {
            var Rt = arguments[gt] != null ? arguments[gt] : {};
            gt % 2
              ? ee(Object(Rt), !0).forEach(function (It) {
                  wn(At, It, Rt[It]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    At,
                    Object.getOwnPropertyDescriptors(Rt),
                  )
                : ee(Object(Rt)).forEach(function (It) {
                    Object.defineProperty(
                      At,
                      It,
                      Object.getOwnPropertyDescriptor(Rt, It),
                    );
                  });
          }
          return At;
        }
        function Ge(At, gt) {
          if (!(At instanceof gt))
            throw new TypeError("Cannot call a class as a function");
        }
        function we(At, gt) {
          for (var Rt = 0; Rt < gt.length; Rt++) {
            var It = gt[Rt];
            (It.enumerable = It.enumerable || !1),
              (It.configurable = !0),
              "value" in It && (It.writable = !0),
              Object.defineProperty(At, Jn(It.key), It);
          }
        }
        function We(At, gt, Rt) {
          return (
            gt && we(At.prototype, gt),
            Rt && we(At, Rt),
            Object.defineProperty(At, "prototype", { writable: !1 }),
            At
          );
        }
        function Je(At, gt, Rt) {
          return (
            (gt = mn(gt)),
            Xe(
              At,
              bn()
                ? Reflect.construct(gt, Rt || [], mn(At).constructor)
                : gt.apply(At, Rt),
            )
          );
        }
        function Xe(At, gt) {
          if (gt && (Ct(gt) === "object" || typeof gt == "function")) return gt;
          if (gt !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return hn(At);
        }
        function hn(At) {
          if (At === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return At;
        }
        function bn() {
          try {
            var At = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (bn = function () {
            return !!At;
          })();
        }
        function mn(At) {
          return (
            (mn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (Rt) {
                  return Rt.__proto__ || Object.getPrototypeOf(Rt);
                }),
            mn(At)
          );
        }
        function Sn(At, gt) {
          if (typeof gt != "function" && gt !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (At.prototype = Object.create(gt && gt.prototype, {
            constructor: { value: At, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(At, "prototype", { writable: !1 }),
            gt && xn(At, gt);
        }
        function xn(At, gt) {
          return (
            (xn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (It, ne) {
                  return (It.__proto__ = ne), It;
                }),
            xn(At, gt)
          );
        }
        function wn(At, gt, Rt) {
          return (
            (gt = Jn(gt)),
            gt in At
              ? Object.defineProperty(At, gt, {
                  value: Rt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (At[gt] = Rt),
            At
          );
        }
        function Jn(At) {
          var gt = jn(At, "string");
          return Ct(gt) == "symbol" ? gt : gt + "";
        }
        function jn(At, gt) {
          if (Ct(At) != "object" || !At) return At;
          var Rt = At[Symbol.toPrimitive];
          if (Rt !== void 0) {
            var It = Rt.call(At, gt || "default");
            if (Ct(It) != "object") return It;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (gt === "string" ? String : Number)(At);
        }
        var Hn = (function (At) {
          function gt() {
            var Rt;
            Ge(this, gt);
            for (
              var It = arguments.length, ne = new Array(It), xe = 0;
              xe < It;
              xe++
            )
              ne[xe] = arguments[xe];
            return (
              (Rt = Je(this, gt, [].concat(ne))),
              wn(Rt, "state", { isAnimationFinished: !1 }),
              wn(Rt, "handleAnimationEnd", function () {
                Rt.setState({ isAnimationFinished: !0 });
              }),
              wn(Rt, "handleAnimationStart", function () {
                Rt.setState({ isAnimationFinished: !1 });
              }),
              wn(Rt, "id", (0, Tt.NF)("recharts-scatter-")),
              Rt
            );
          }
          return (
            Sn(gt, At),
            We(
              gt,
              [
                {
                  key: "renderSymbolsStatically",
                  value: function (It) {
                    var ne = this,
                      xe = this.props,
                      Ce = xe.shape,
                      ke = xe.activeShape,
                      Ke = xe.activeIndex,
                      Fe = (0, I.J9)(this.props, !1);
                    return It.map(function (_e, Re) {
                      var nn = Ke === Re,
                        un = nn ? ke : Ce,
                        An = Ie(Ie({}, Fe), _e);
                      return F.createElement(
                        nt.W,
                        Pt(
                          {
                            className: "recharts-scatter-symbol",
                            key: "symbol-"
                              .concat(_e?.cx, "-")
                              .concat(_e?.cy, "-")
                              .concat(_e?.size, "-")
                              .concat(Re),
                          },
                          (0, Z.XC)(ne.props, _e, Re),
                          { role: "img" },
                        ),
                        F.createElement(
                          W,
                          Pt(
                            {
                              option: un,
                              isActive: nn,
                              key: "symbol-".concat(Re),
                            },
                            An,
                          ),
                        ),
                      );
                    });
                  },
                },
                {
                  key: "renderSymbolsWithAnimation",
                  value: function () {
                    var It = this,
                      ne = this.props,
                      xe = ne.points,
                      Ce = ne.isAnimationActive,
                      ke = ne.animationBegin,
                      Ke = ne.animationDuration,
                      Fe = ne.animationEasing,
                      _e = ne.animationId,
                      Re = this.state.prevPoints;
                    return F.createElement(
                      it.Ay,
                      {
                        begin: ke,
                        duration: Ke,
                        isActive: Ce,
                        easing: Fe,
                        from: { t: 0 },
                        to: { t: 1 },
                        key: "pie-".concat(_e),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart,
                      },
                      function (nn) {
                        var un = nn.t,
                          An = xe.map(function (Pn, tn) {
                            var Rn = Re && Re[tn];
                            if (Rn) {
                              var En = (0, Tt.Dj)(Rn.cx, Pn.cx),
                                Tn = (0, Tt.Dj)(Rn.cy, Pn.cy),
                                Mn = (0, Tt.Dj)(Rn.size, Pn.size);
                              return Ie(
                                Ie({}, Pn),
                                {},
                                { cx: En(un), cy: Tn(un), size: Mn(un) },
                              );
                            }
                            var Cn = (0, Tt.Dj)(0, Pn.size);
                            return Ie(Ie({}, Pn), {}, { size: Cn(un) });
                          });
                        return F.createElement(
                          nt.W,
                          null,
                          It.renderSymbolsStatically(An),
                        );
                      },
                    );
                  },
                },
                {
                  key: "renderSymbols",
                  value: function () {
                    var It = this.props,
                      ne = It.points,
                      xe = It.isAnimationActive,
                      Ce = this.state.prevPoints;
                    return xe && ne && ne.length && (!Ce || !et()(Ce, ne))
                      ? this.renderSymbolsWithAnimation()
                      : this.renderSymbolsStatically(ne);
                  },
                },
                {
                  key: "renderErrorBar",
                  value: function () {
                    var It = this.props.isAnimationActive;
                    if (It && !this.state.isAnimationFinished) return null;
                    var ne = this.props,
                      xe = ne.points,
                      Ce = ne.xAxis,
                      ke = ne.yAxis,
                      Ke = ne.children,
                      Fe = (0, I.aS)(Ke, se.u);
                    return Fe
                      ? Fe.map(function (_e, Re) {
                          var nn = _e.props,
                            un = nn.direction,
                            An = nn.dataKey;
                          return F.cloneElement(_e, {
                            key: ""
                              .concat(un, "-")
                              .concat(An, "-")
                              .concat(xe[Re]),
                            data: xe,
                            xAxis: Ce,
                            yAxis: ke,
                            layout: un === "x" ? "vertical" : "horizontal",
                            dataPointFormatter: function (tn, Rn) {
                              return {
                                x: tn.cx,
                                y: tn.cy,
                                value: un === "x" ? +tn.node.x : +tn.node.y,
                                errorVal: (0, vt.kr)(tn, Rn),
                              };
                            },
                          });
                        })
                      : null;
                  },
                },
                {
                  key: "renderLine",
                  value: function () {
                    var It = this.props,
                      ne = It.points,
                      xe = It.line,
                      Ce = It.lineType,
                      ke = It.lineJointType,
                      Ke = (0, I.J9)(this.props, !1),
                      Fe = (0, I.J9)(xe, !1),
                      _e,
                      Re;
                    if (Ce === "joint")
                      _e = ne.map(function (Tn) {
                        return { x: Tn.cx, y: Tn.cy };
                      });
                    else if (Ce === "fitting") {
                      var nn = (0, Tt.jG)(ne),
                        un = nn.xmin,
                        An = nn.xmax,
                        Pn = nn.a,
                        tn = nn.b,
                        Rn = function (Mn) {
                          return Pn * Mn + tn;
                        };
                      _e = [
                        { x: un, y: Rn(un) },
                        { x: An, y: Rn(An) },
                      ];
                    }
                    var En = Ie(
                      Ie(
                        Ie({}, Ke),
                        {},
                        { fill: "none", stroke: Ke && Ke.fill },
                        Fe,
                      ),
                      {},
                      { points: _e },
                    );
                    return (
                      F.isValidElement(xe)
                        ? (Re = F.cloneElement(xe, En))
                        : tt()(xe)
                          ? (Re = xe(En))
                          : (Re = F.createElement(
                              St.I,
                              Pt({}, En, { type: ke }),
                            )),
                      F.createElement(
                        nt.W,
                        {
                          className: "recharts-scatter-line",
                          key: "recharts-scatter-line",
                        },
                        Re,
                      )
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var It = this.props,
                      ne = It.hide,
                      xe = It.points,
                      Ce = It.line,
                      ke = It.className,
                      Ke = It.xAxis,
                      Fe = It.yAxis,
                      _e = It.left,
                      Re = It.top,
                      nn = It.width,
                      un = It.height,
                      An = It.id,
                      Pn = It.isAnimationActive;
                    if (ne || !xe || !xe.length) return null;
                    var tn = this.state.isAnimationFinished,
                      Rn = (0, H.A)("recharts-scatter", ke),
                      En = Ke && Ke.allowDataOverflow,
                      Tn = Fe && Fe.allowDataOverflow,
                      Mn = En || Tn,
                      Cn = at()(An) ? this.id : An;
                    return F.createElement(
                      nt.W,
                      {
                        className: Rn,
                        clipPath: Mn ? "url(#clipPath-".concat(Cn, ")") : null,
                      },
                      En || Tn
                        ? F.createElement(
                            "defs",
                            null,
                            F.createElement(
                              "clipPath",
                              { id: "clipPath-".concat(Cn) },
                              F.createElement("rect", {
                                x: En ? _e : _e - nn / 2,
                                y: Tn ? Re : Re - un / 2,
                                width: En ? nn : nn * 2,
                                height: Tn ? un : un * 2,
                              }),
                            ),
                          )
                        : null,
                      Ce && this.renderLine(),
                      this.renderErrorBar(),
                      F.createElement(
                        nt.W,
                        { key: "recharts-scatter-symbols" },
                        this.renderSymbols(),
                      ),
                      (!Pn || tn) && te.Z.renderCallByParent(this.props, xe),
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (It, ne) {
                    return It.animationId !== ne.prevAnimationId
                      ? {
                          prevAnimationId: It.animationId,
                          curPoints: It.points,
                          prevPoints: ne.curPoints,
                        }
                      : It.points !== ne.curPoints
                        ? { curPoints: It.points }
                        : null;
                  },
                },
              ],
            )
          );
        })(F.PureComponent);
        ($ = Hn),
          wn(Hn, "displayName", "Scatter"),
          wn(Hn, "defaultProps", {
            xAxisId: 0,
            yAxisId: 0,
            zAxisId: 0,
            legendType: "circle",
            lineType: "joint",
            lineJointType: "linear",
            data: [],
            shape: "circle",
            hide: !1,
            isAnimationActive: !kt.m.isSsr,
            animationBegin: 0,
            animationDuration: 400,
            animationEasing: "linear",
          }),
          wn(Hn, "getComposedData", function (At) {
            var gt = At.xAxis,
              Rt = At.yAxis,
              It = At.zAxis,
              ne = At.item,
              xe = At.displayedData,
              Ce = At.xAxisTicks,
              ke = At.yAxisTicks,
              Ke = At.offset,
              Fe = ne.props.tooltipType,
              _e = (0, I.aS)(ne.props.children, K.f),
              Re = at()(gt.dataKey) ? ne.props.dataKey : gt.dataKey,
              nn = at()(Rt.dataKey) ? ne.props.dataKey : Rt.dataKey,
              un = It && It.dataKey,
              An = It ? It.range : Vt.defaultProps.range,
              Pn = An && An[0],
              tn = gt.scale.bandwidth ? gt.scale.bandwidth() : 0,
              Rn = Rt.scale.bandwidth ? Rt.scale.bandwidth() : 0,
              En = xe.map(function (Tn, Mn) {
                var Cn = (0, vt.kr)(Tn, Re),
                  $n = (0, vt.kr)(Tn, nn),
                  Qn = (!at()(un) && (0, vt.kr)(Tn, un)) || "-",
                  ir = [
                    {
                      name: at()(gt.dataKey)
                        ? ne.props.name
                        : gt.name || gt.dataKey,
                      unit: gt.unit || "",
                      value: Cn,
                      payload: Tn,
                      dataKey: Re,
                      type: Fe,
                    },
                    {
                      name: at()(Rt.dataKey)
                        ? ne.props.name
                        : Rt.name || Rt.dataKey,
                      unit: Rt.unit || "",
                      value: $n,
                      payload: Tn,
                      dataKey: nn,
                      type: Fe,
                    },
                  ];
                Qn !== "-" &&
                  ir.push({
                    name: It.name || It.dataKey,
                    unit: It.unit || "",
                    value: Qn,
                    payload: Tn,
                    dataKey: un,
                    type: Fe,
                  });
                var dr = (0, vt.nb)({
                    axis: gt,
                    ticks: Ce,
                    bandSize: tn,
                    entry: Tn,
                    index: Mn,
                    dataKey: Re,
                  }),
                  lr = (0, vt.nb)({
                    axis: Rt,
                    ticks: ke,
                    bandSize: Rn,
                    entry: Tn,
                    index: Mn,
                    dataKey: nn,
                  }),
                  tr = Qn !== "-" ? It.scale(Qn) : Pn,
                  er = Math.sqrt(Math.max(tr, 0) / Math.PI);
                return Ie(
                  Ie({}, Tn),
                  {},
                  {
                    cx: dr,
                    cy: lr,
                    x: dr - er,
                    y: lr - er,
                    xAxis: gt,
                    yAxis: Rt,
                    zAxis: It,
                    width: 2 * er,
                    height: 2 * er,
                    size: tr,
                    node: { x: Cn, y: $n, z: Qn },
                    tooltipPayload: ir,
                    tooltipPosition: { x: dr, y: lr },
                    payload: Tn,
                  },
                  _e && _e[Mn] && _e[Mn].props,
                );
              });
            return Ie({ points: En }, Ke);
          });
        var sr = r(90150),
          cr = r(73077),
          ur = r(12260),
          Yn = (0, l.gu)({
            chartName: "ComposedChart",
            GraphicalChild: [q.N, J, Mt.y, Hn],
            axisComponents: [
              { axisType: "xAxis", AxisComp: sr.W },
              { axisType: "yAxis", AxisComp: cr.h },
              { axisType: "zAxis", AxisComp: Vt },
            ],
            formatAxisMap: ur.pr,
          });
      },
      98403: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { gu: () => ra });
        var l = r(90626),
          F = r(64609),
          H = r.n(F),
          it = r(3316),
          U = r.n(it),
          tt = r(50199),
          G = r.n(tt),
          lt = r(52686),
          ct = r.n(lt),
          at = r(97825),
          st = r.n(at),
          V = r(51504),
          mt = r.n(V),
          et = r(34164),
          St = r(68841),
          Ft = r(67125),
          nt = r(75055),
          te = r(30230),
          kt = r(75620),
          Tt = r(21687),
          vt = r(52857),
          I = r(93563),
          m = r(28583),
          S = r(34656),
          g = r(61195),
          y = r(96714);
        function rt(u) {
          "@babel/helpers - typeof";
          return (
            (rt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            rt(u)
          );
        }
        function ot(u, a) {
          var w = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var b = Object.getOwnPropertySymbols(u);
            a &&
              (b = b.filter(function (jt) {
                return Object.getOwnPropertyDescriptor(u, jt).enumerable;
              })),
              w.push.apply(w, b);
          }
          return w;
        }
        function _t(u) {
          for (var a = 1; a < arguments.length; a++) {
            var w = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? ot(Object(w), !0).forEach(function (b) {
                  j(u, b, w[b]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(w),
                  )
                : ot(Object(w)).forEach(function (b) {
                    Object.defineProperty(
                      u,
                      b,
                      Object.getOwnPropertyDescriptor(w, b),
                    );
                  });
          }
          return u;
        }
        function j(u, a, w) {
          return (
            (a = N(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: w,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = w),
            u
          );
        }
        function N(u) {
          var a = M(u, "string");
          return rt(a) == "symbol" ? a : a + "";
        }
        function M(u, a) {
          if (rt(u) != "object" || !u) return u;
          var w = u[Symbol.toPrimitive];
          if (w !== void 0) {
            var b = w.call(u, a || "default");
            if (rt(b) != "object") return b;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var X = ["Webkit", "Moz", "O", "ms"],
          v = function (a, w) {
            if (!a) return null;
            var b = a.replace(/(\w)/, function (Gt) {
                return Gt.toUpperCase();
              }),
              jt = X.reduce(function (Gt, Yt) {
                return _t(_t({}, Gt), {}, j({}, Yt + b, w));
              }, {});
            return (jt[a] = w), jt;
          };
        function f(u) {
          "@babel/helpers - typeof";
          return (
            (f =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            f(u)
          );
        }
        function E() {
          return (
            (E = Object.assign
              ? Object.assign.bind()
              : function (u) {
                  for (var a = 1; a < arguments.length; a++) {
                    var w = arguments[a];
                    for (var b in w)
                      Object.prototype.hasOwnProperty.call(w, b) &&
                        (u[b] = w[b]);
                  }
                  return u;
                }),
            E.apply(this, arguments)
          );
        }
        function _(u, a) {
          var w = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var b = Object.getOwnPropertySymbols(u);
            a &&
              (b = b.filter(function (jt) {
                return Object.getOwnPropertyDescriptor(u, jt).enumerable;
              })),
              w.push.apply(w, b);
          }
          return w;
        }
        function A(u) {
          for (var a = 1; a < arguments.length; a++) {
            var w = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? _(Object(w), !0).forEach(function (b) {
                  ft(u, b, w[b]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(w),
                  )
                : _(Object(w)).forEach(function (b) {
                    Object.defineProperty(
                      u,
                      b,
                      Object.getOwnPropertyDescriptor(w, b),
                    );
                  });
          }
          return u;
        }
        function c(u, a) {
          if (!(u instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function P(u, a) {
          for (var w = 0; w < a.length; w++) {
            var b = a[w];
            (b.enumerable = b.enumerable || !1),
              (b.configurable = !0),
              "value" in b && (b.writable = !0),
              Object.defineProperty(u, bt(b.key), b);
          }
        }
        function D(u, a, w) {
          return (
            a && P(u.prototype, a),
            w && P(u, w),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
        }
        function x(u, a, w) {
          return (
            (a = Mt(a)),
            k(
              u,
              J()
                ? Reflect.construct(a, w || [], Mt(u).constructor)
                : a.apply(u, w),
            )
          );
        }
        function k(u, a) {
          if (a && (f(a) === "object" || typeof a == "function")) return a;
          if (a !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Y(u);
        }
        function Y(u) {
          if (u === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return u;
        }
        function J() {
          try {
            var u = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (J = function () {
            return !!u;
          })();
        }
        function Mt(u) {
          return (
            (Mt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (w) {
                  return w.__proto__ || Object.getPrototypeOf(w);
                }),
            Mt(u)
          );
        }
        function q(u, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (u.prototype = Object.create(a && a.prototype, {
            constructor: { value: u, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            a && yt(u, a);
        }
        function yt(u, a) {
          return (
            (yt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (b, jt) {
                  return (b.__proto__ = jt), b;
                }),
            yt(u, a)
          );
        }
        function ft(u, a, w) {
          return (
            (a = bt(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: w,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = w),
            u
          );
        }
        function bt(u) {
          var a = Ut(u, "string");
          return f(a) == "symbol" ? a : a + "";
        }
        function Ut(u, a) {
          if (f(u) != "object" || !u) return u;
          var w = u[Symbol.toPrimitive];
          if (w !== void 0) {
            var b = w.call(u, a || "default");
            if (f(b) != "object") return b;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var Ht = function (a) {
            var w = a.data,
              b = a.startIndex,
              jt = a.endIndex,
              Gt = a.x,
              Yt = a.width,
              ae = a.travellerWidth;
            if (!w || !w.length) return {};
            var ue = w.length,
              de = (0, m.z)()
                .domain(G()(0, ue))
                .range([Gt, Gt + Yt - ae]),
              ye = de.domain().map(function (Oe) {
                return de(Oe);
              });
            return {
              isTextActive: !1,
              isSlideMoving: !1,
              isTravellerMoving: !1,
              isTravellerFocused: !1,
              startX: de(b),
              endX: de(jt),
              scale: de,
              scaleValues: ye,
            };
          },
          ut = function (a) {
            return a.changedTouches && !!a.changedTouches.length;
          },
          o = (function (u) {
            function a(w) {
              var b;
              return (
                c(this, a),
                (b = x(this, a, [w])),
                ft(b, "handleDrag", function (jt) {
                  b.leaveTimer &&
                    (clearTimeout(b.leaveTimer), (b.leaveTimer = null)),
                    b.state.isTravellerMoving
                      ? b.handleTravellerMove(jt)
                      : b.state.isSlideMoving && b.handleSlideDrag(jt);
                }),
                ft(b, "handleTouchMove", function (jt) {
                  jt.changedTouches != null &&
                    jt.changedTouches.length > 0 &&
                    b.handleDrag(jt.changedTouches[0]);
                }),
                ft(b, "handleDragEnd", function () {
                  b.setState(
                    { isTravellerMoving: !1, isSlideMoving: !1 },
                    function () {
                      var jt = b.props,
                        Gt = jt.endIndex,
                        Yt = jt.onDragEnd,
                        ae = jt.startIndex;
                      Yt?.({ endIndex: Gt, startIndex: ae });
                    },
                  ),
                    b.detachDragEndListener();
                }),
                ft(b, "handleLeaveWrapper", function () {
                  (b.state.isTravellerMoving || b.state.isSlideMoving) &&
                    (b.leaveTimer = window.setTimeout(
                      b.handleDragEnd,
                      b.props.leaveTimeOut,
                    ));
                }),
                ft(b, "handleEnterSlideOrTraveller", function () {
                  b.setState({ isTextActive: !0 });
                }),
                ft(b, "handleLeaveSlideOrTraveller", function () {
                  b.setState({ isTextActive: !1 });
                }),
                ft(b, "handleSlideDragStart", function (jt) {
                  var Gt = ut(jt) ? jt.changedTouches[0] : jt;
                  b.setState({
                    isTravellerMoving: !1,
                    isSlideMoving: !0,
                    slideMoveStartX: Gt.pageX,
                  }),
                    b.attachDragEndListener();
                }),
                (b.travellerDragStartHandlers = {
                  startX: b.handleTravellerDragStart.bind(b, "startX"),
                  endX: b.handleTravellerDragStart.bind(b, "endX"),
                }),
                (b.state = {}),
                b
              );
            }
            return (
              q(a, u),
              D(
                a,
                [
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.leaveTimer &&
                        (clearTimeout(this.leaveTimer),
                        (this.leaveTimer = null)),
                        this.detachDragEndListener();
                    },
                  },
                  {
                    key: "getIndex",
                    value: function (b) {
                      var jt = b.startX,
                        Gt = b.endX,
                        Yt = this.state.scaleValues,
                        ae = this.props,
                        ue = ae.gap,
                        de = ae.data,
                        ye = de.length - 1,
                        Oe = Math.min(jt, Gt),
                        me = Math.max(jt, Gt),
                        Ae = a.getIndexInRange(Yt, Oe),
                        Qe = a.getIndexInRange(Yt, me);
                      return {
                        startIndex: Ae - (Ae % ue),
                        endIndex: Qe === ye ? ye : Qe - (Qe % ue),
                      };
                    },
                  },
                  {
                    key: "getTextOfTick",
                    value: function (b) {
                      var jt = this.props,
                        Gt = jt.data,
                        Yt = jt.tickFormatter,
                        ae = jt.dataKey,
                        ue = (0, g.kr)(Gt[b], ae, b);
                      return U()(Yt) ? Yt(ue, b) : ue;
                    },
                  },
                  {
                    key: "attachDragEndListener",
                    value: function () {
                      window.addEventListener(
                        "mouseup",
                        this.handleDragEnd,
                        !0,
                      ),
                        window.addEventListener(
                          "touchend",
                          this.handleDragEnd,
                          !0,
                        ),
                        window.addEventListener(
                          "mousemove",
                          this.handleDrag,
                          !0,
                        );
                    },
                  },
                  {
                    key: "detachDragEndListener",
                    value: function () {
                      window.removeEventListener(
                        "mouseup",
                        this.handleDragEnd,
                        !0,
                      ),
                        window.removeEventListener(
                          "touchend",
                          this.handleDragEnd,
                          !0,
                        ),
                        window.removeEventListener(
                          "mousemove",
                          this.handleDrag,
                          !0,
                        );
                    },
                  },
                  {
                    key: "handleSlideDrag",
                    value: function (b) {
                      var jt = this.state,
                        Gt = jt.slideMoveStartX,
                        Yt = jt.startX,
                        ae = jt.endX,
                        ue = this.props,
                        de = ue.x,
                        ye = ue.width,
                        Oe = ue.travellerWidth,
                        me = ue.startIndex,
                        Ae = ue.endIndex,
                        Qe = ue.onChange,
                        ze = b.pageX - Gt;
                      ze > 0
                        ? (ze = Math.min(
                            ze,
                            de + ye - Oe - ae,
                            de + ye - Oe - Yt,
                          ))
                        : ze < 0 && (ze = Math.max(ze, de - Yt, de - ae));
                      var De = this.getIndex({
                        startX: Yt + ze,
                        endX: ae + ze,
                      });
                      (De.startIndex !== me || De.endIndex !== Ae) &&
                        Qe &&
                        Qe(De),
                        this.setState({
                          startX: Yt + ze,
                          endX: ae + ze,
                          slideMoveStartX: b.pageX,
                        });
                    },
                  },
                  {
                    key: "handleTravellerDragStart",
                    value: function (b, jt) {
                      var Gt = ut(jt) ? jt.changedTouches[0] : jt;
                      this.setState({
                        isSlideMoving: !1,
                        isTravellerMoving: !0,
                        movingTravellerId: b,
                        brushMoveStartX: Gt.pageX,
                      }),
                        this.attachDragEndListener();
                    },
                  },
                  {
                    key: "handleTravellerMove",
                    value: function (b) {
                      var jt = this.state,
                        Gt = jt.brushMoveStartX,
                        Yt = jt.movingTravellerId,
                        ae = jt.endX,
                        ue = jt.startX,
                        de = this.state[Yt],
                        ye = this.props,
                        Oe = ye.x,
                        me = ye.width,
                        Ae = ye.travellerWidth,
                        Qe = ye.onChange,
                        ze = ye.gap,
                        De = ye.data,
                        he = {
                          startX: this.state.startX,
                          endX: this.state.endX,
                        },
                        Pe = b.pageX - Gt;
                      Pe > 0
                        ? (Pe = Math.min(Pe, Oe + me - Ae - de))
                        : Pe < 0 && (Pe = Math.max(Pe, Oe - de)),
                        (he[Yt] = de + Pe);
                      var fe = this.getIndex(he),
                        pe = fe.startIndex,
                        Et = fe.endIndex,
                        Nt = function () {
                          var oe = De.length - 1;
                          return (
                            (Yt === "startX" &&
                              (ae > ue ? pe % ze === 0 : Et % ze === 0)) ||
                            (ae < ue && Et === oe) ||
                            (Yt === "endX" &&
                              (ae > ue ? Et % ze === 0 : pe % ze === 0)) ||
                            (ae > ue && Et === oe)
                          );
                        };
                      this.setState(
                        ft(ft({}, Yt, de + Pe), "brushMoveStartX", b.pageX),
                        function () {
                          Qe && Nt() && Qe(fe);
                        },
                      );
                    },
                  },
                  {
                    key: "handleTravellerMoveKeyboard",
                    value: function (b, jt) {
                      var Gt = this,
                        Yt = this.state,
                        ae = Yt.scaleValues,
                        ue = Yt.startX,
                        de = Yt.endX,
                        ye = this.state[jt],
                        Oe = ae.indexOf(ye);
                      if (Oe !== -1) {
                        var me = Oe + b;
                        if (!(me === -1 || me >= ae.length)) {
                          var Ae = ae[me];
                          (jt === "startX" && Ae >= de) ||
                            (jt === "endX" && Ae <= ue) ||
                            this.setState(ft({}, jt, Ae), function () {
                              Gt.props.onChange(
                                Gt.getIndex({
                                  startX: Gt.state.startX,
                                  endX: Gt.state.endX,
                                }),
                              );
                            });
                        }
                      }
                    },
                  },
                  {
                    key: "renderBackground",
                    value: function () {
                      var b = this.props,
                        jt = b.x,
                        Gt = b.y,
                        Yt = b.width,
                        ae = b.height,
                        ue = b.fill,
                        de = b.stroke;
                      return l.createElement("rect", {
                        stroke: de,
                        fill: ue,
                        x: jt,
                        y: Gt,
                        width: Yt,
                        height: ae,
                      });
                    },
                  },
                  {
                    key: "renderPanorama",
                    value: function () {
                      var b = this.props,
                        jt = b.x,
                        Gt = b.y,
                        Yt = b.width,
                        ae = b.height,
                        ue = b.data,
                        de = b.children,
                        ye = b.padding,
                        Oe = l.Children.only(de);
                      return Oe
                        ? l.cloneElement(Oe, {
                            x: jt,
                            y: Gt,
                            width: Yt,
                            height: ae,
                            margin: ye,
                            compact: !0,
                            data: ue,
                          })
                        : null;
                    },
                  },
                  {
                    key: "renderTravellerLayer",
                    value: function (b, jt) {
                      var Gt,
                        Yt,
                        ae = this,
                        ue = this.props,
                        de = ue.y,
                        ye = ue.travellerWidth,
                        Oe = ue.height,
                        me = ue.traveller,
                        Ae = ue.ariaLabel,
                        Qe = ue.data,
                        ze = ue.startIndex,
                        De = ue.endIndex,
                        he = Math.max(b, this.props.x),
                        Pe = A(
                          A({}, (0, I.J9)(this.props, !1)),
                          {},
                          { x: he, y: de, width: ye, height: Oe },
                        ),
                        fe =
                          Ae ||
                          "Min value: "
                            .concat(
                              (Gt = Qe[ze]) === null || Gt === void 0
                                ? void 0
                                : Gt.name,
                              ", Max value: ",
                            )
                            .concat(
                              (Yt = Qe[De]) === null || Yt === void 0
                                ? void 0
                                : Yt.name,
                            );
                      return l.createElement(
                        nt.W,
                        {
                          tabIndex: 0,
                          role: "slider",
                          "aria-label": fe,
                          "aria-valuenow": b,
                          className: "recharts-brush-traveller",
                          onMouseEnter: this.handleEnterSlideOrTraveller,
                          onMouseLeave: this.handleLeaveSlideOrTraveller,
                          onMouseDown: this.travellerDragStartHandlers[jt],
                          onTouchStart: this.travellerDragStartHandlers[jt],
                          onKeyDown: function (Et) {
                            ["ArrowLeft", "ArrowRight"].includes(Et.key) &&
                              (Et.preventDefault(),
                              Et.stopPropagation(),
                              ae.handleTravellerMoveKeyboard(
                                Et.key === "ArrowRight" ? 1 : -1,
                                jt,
                              ));
                          },
                          onFocus: function () {
                            ae.setState({ isTravellerFocused: !0 });
                          },
                          onBlur: function () {
                            ae.setState({ isTravellerFocused: !1 });
                          },
                          style: { cursor: "col-resize" },
                        },
                        a.renderTraveller(me, Pe),
                      );
                    },
                  },
                  {
                    key: "renderSlide",
                    value: function (b, jt) {
                      var Gt = this.props,
                        Yt = Gt.y,
                        ae = Gt.height,
                        ue = Gt.stroke,
                        de = Gt.travellerWidth,
                        ye = Math.min(b, jt) + de,
                        Oe = Math.max(Math.abs(jt - b) - de, 0);
                      return l.createElement("rect", {
                        className: "recharts-brush-slide",
                        onMouseEnter: this.handleEnterSlideOrTraveller,
                        onMouseLeave: this.handleLeaveSlideOrTraveller,
                        onMouseDown: this.handleSlideDragStart,
                        onTouchStart: this.handleSlideDragStart,
                        style: { cursor: "move" },
                        stroke: "none",
                        fill: ue,
                        fillOpacity: 0.2,
                        x: ye,
                        y: Yt,
                        width: Oe,
                        height: ae,
                      });
                    },
                  },
                  {
                    key: "renderText",
                    value: function () {
                      var b = this.props,
                        jt = b.startIndex,
                        Gt = b.endIndex,
                        Yt = b.y,
                        ae = b.height,
                        ue = b.travellerWidth,
                        de = b.stroke,
                        ye = this.state,
                        Oe = ye.startX,
                        me = ye.endX,
                        Ae = 5,
                        Qe = { pointerEvents: "none", fill: de };
                      return l.createElement(
                        nt.W,
                        { className: "recharts-brush-texts" },
                        l.createElement(
                          S.E,
                          E(
                            {
                              textAnchor: "end",
                              verticalAnchor: "middle",
                              x: Math.min(Oe, me) - Ae,
                              y: Yt + ae / 2,
                            },
                            Qe,
                          ),
                          this.getTextOfTick(jt),
                        ),
                        l.createElement(
                          S.E,
                          E(
                            {
                              textAnchor: "start",
                              verticalAnchor: "middle",
                              x: Math.max(Oe, me) + ue + Ae,
                              y: Yt + ae / 2,
                            },
                            Qe,
                          ),
                          this.getTextOfTick(Gt),
                        ),
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var b = this.props,
                        jt = b.data,
                        Gt = b.className,
                        Yt = b.children,
                        ae = b.x,
                        ue = b.y,
                        de = b.width,
                        ye = b.height,
                        Oe = b.alwaysShowText,
                        me = this.state,
                        Ae = me.startX,
                        Qe = me.endX,
                        ze = me.isTextActive,
                        De = me.isSlideMoving,
                        he = me.isTravellerMoving,
                        Pe = me.isTravellerFocused;
                      if (
                        !jt ||
                        !jt.length ||
                        !(0, y.Et)(ae) ||
                        !(0, y.Et)(ue) ||
                        !(0, y.Et)(de) ||
                        !(0, y.Et)(ye) ||
                        de <= 0 ||
                        ye <= 0
                      )
                        return null;
                      var fe = (0, et.A)("recharts-brush", Gt),
                        pe = l.Children.count(Yt) === 1,
                        Et = v("userSelect", "none");
                      return l.createElement(
                        nt.W,
                        {
                          className: fe,
                          onMouseLeave: this.handleLeaveWrapper,
                          onTouchMove: this.handleTouchMove,
                          style: Et,
                        },
                        this.renderBackground(),
                        pe && this.renderPanorama(),
                        this.renderSlide(Ae, Qe),
                        this.renderTravellerLayer(Ae, "startX"),
                        this.renderTravellerLayer(Qe, "endX"),
                        (ze || De || he || Pe || Oe) && this.renderText(),
                      );
                    },
                  },
                ],
                [
                  {
                    key: "renderDefaultTraveller",
                    value: function (b) {
                      var jt = b.x,
                        Gt = b.y,
                        Yt = b.width,
                        ae = b.height,
                        ue = b.stroke,
                        de = Math.floor(Gt + ae / 2) - 1;
                      return l.createElement(
                        l.Fragment,
                        null,
                        l.createElement("rect", {
                          x: jt,
                          y: Gt,
                          width: Yt,
                          height: ae,
                          fill: ue,
                          stroke: "none",
                        }),
                        l.createElement("line", {
                          x1: jt + 1,
                          y1: de,
                          x2: jt + Yt - 1,
                          y2: de,
                          fill: "none",
                          stroke: "#fff",
                        }),
                        l.createElement("line", {
                          x1: jt + 1,
                          y1: de + 2,
                          x2: jt + Yt - 1,
                          y2: de + 2,
                          fill: "none",
                          stroke: "#fff",
                        }),
                      );
                    },
                  },
                  {
                    key: "renderTraveller",
                    value: function (b, jt) {
                      var Gt;
                      return (
                        l.isValidElement(b)
                          ? (Gt = l.cloneElement(b, jt))
                          : U()(b)
                            ? (Gt = b(jt))
                            : (Gt = a.renderDefaultTraveller(jt)),
                        Gt
                      );
                    },
                  },
                  {
                    key: "getDerivedStateFromProps",
                    value: function (b, jt) {
                      var Gt = b.data,
                        Yt = b.width,
                        ae = b.x,
                        ue = b.travellerWidth,
                        de = b.updateId,
                        ye = b.startIndex,
                        Oe = b.endIndex;
                      if (Gt !== jt.prevData || de !== jt.prevUpdateId)
                        return A(
                          {
                            prevData: Gt,
                            prevTravellerWidth: ue,
                            prevUpdateId: de,
                            prevX: ae,
                            prevWidth: Yt,
                          },
                          Gt && Gt.length
                            ? Ht({
                                data: Gt,
                                width: Yt,
                                x: ae,
                                travellerWidth: ue,
                                startIndex: ye,
                                endIndex: Oe,
                              })
                            : { scale: null, scaleValues: null },
                        );
                      if (
                        jt.scale &&
                        (Yt !== jt.prevWidth ||
                          ae !== jt.prevX ||
                          ue !== jt.prevTravellerWidth)
                      ) {
                        jt.scale.range([ae, ae + Yt - ue]);
                        var me = jt.scale.domain().map(function (Ae) {
                          return jt.scale(Ae);
                        });
                        return {
                          prevData: Gt,
                          prevTravellerWidth: ue,
                          prevUpdateId: de,
                          prevX: ae,
                          prevWidth: Yt,
                          startX: jt.scale(b.startIndex),
                          endX: jt.scale(b.endIndex),
                          scaleValues: me,
                        };
                      }
                      return null;
                    },
                  },
                  {
                    key: "getIndexInRange",
                    value: function (b, jt) {
                      for (
                        var Gt = b.length, Yt = 0, ae = Gt - 1;
                        ae - Yt > 1;
                      ) {
                        var ue = Math.floor((Yt + ae) / 2);
                        b[ue] > jt ? (ae = ue) : (Yt = ue);
                      }
                      return jt >= b[ae] ? ae : Yt;
                    },
                  },
                ],
              )
            );
          })(l.PureComponent);
        ft(o, "displayName", "Brush"),
          ft(o, "defaultProps", {
            height: 40,
            travellerWidth: 5,
            gap: 1,
            fill: "#fff",
            stroke: "#666",
            padding: { top: 1, right: 1, bottom: 1, left: 1 },
            leaveTimeOut: 1e3,
            alwaysShowText: !1,
          });
        var h = r(15654),
          O = r(11766),
          d = r(25068),
          R = r(83349),
          Q = r(12260),
          wt = r(27664);
        function zt() {
          return (
            (zt = Object.assign
              ? Object.assign.bind()
              : function (u) {
                  for (var a = 1; a < arguments.length; a++) {
                    var w = arguments[a];
                    for (var b in w)
                      Object.prototype.hasOwnProperty.call(w, b) &&
                        (u[b] = w[b]);
                  }
                  return u;
                }),
            zt.apply(this, arguments)
          );
        }
        function Vt(u) {
          "@babel/helpers - typeof";
          return (
            (Vt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            Vt(u)
          );
        }
        function se(u, a) {
          var w = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var b = Object.getOwnPropertySymbols(u);
            a &&
              (b = b.filter(function (jt) {
                return Object.getOwnPropertyDescriptor(u, jt).enumerable;
              })),
              w.push.apply(w, b);
          }
          return w;
        }
        function K(u) {
          for (var a = 1; a < arguments.length; a++) {
            var w = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? se(Object(w), !0).forEach(function (b) {
                  Pt(u, b, w[b]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(w),
                  )
                : se(Object(w)).forEach(function (b) {
                    Object.defineProperty(
                      u,
                      b,
                      Object.getOwnPropertyDescriptor(w, b),
                    );
                  });
          }
          return u;
        }
        function Z(u, a) {
          if (!(u instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function L(u, a) {
          for (var w = 0; w < a.length; w++) {
            var b = a[w];
            (b.enumerable = b.enumerable || !1),
              (b.configurable = !0),
              "value" in b && (b.writable = !0),
              Object.defineProperty(u, ee(b.key), b);
          }
        }
        function xt(u, a, w) {
          return (
            a && L(u.prototype, a),
            w && L(u, w),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
        }
        function Ot(u, a, w) {
          return (
            (a = W(a)),
            $t(
              u,
              le()
                ? Reflect.construct(a, w || [], W(u).constructor)
                : a.apply(u, w),
            )
          );
        }
        function $t(u, a) {
          if (a && (Vt(a) === "object" || typeof a == "function")) return a;
          if (a !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Jt(u);
        }
        function Jt(u) {
          if (u === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return u;
        }
        function le() {
          try {
            var u = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (le = function () {
            return !!u;
          })();
        }
        function W(u) {
          return (
            (W = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (w) {
                  return w.__proto__ || Object.getPrototypeOf(w);
                }),
            W(u)
          );
        }
        function $(u, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (u.prototype = Object.create(a && a.prototype, {
            constructor: { value: u, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            a && Ct(u, a);
        }
        function Ct(u, a) {
          return (
            (Ct = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (b, jt) {
                  return (b.__proto__ = jt), b;
                }),
            Ct(u, a)
          );
        }
        function Pt(u, a, w) {
          return (
            (a = ee(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: w,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = w),
            u
          );
        }
        function ee(u) {
          var a = Ie(u, "string");
          return Vt(a) == "symbol" ? a : a + "";
        }
        function Ie(u, a) {
          if (Vt(u) != "object" || !u) return u;
          var w = u[Symbol.toPrimitive];
          if (w !== void 0) {
            var b = w.call(u, a || "default");
            if (Vt(b) != "object") return b;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var Ge = function (a) {
            var w = a.x,
              b = a.y,
              jt = a.xAxis,
              Gt = a.yAxis,
              Yt = (0, Q.P2)({ x: jt.scale, y: Gt.scale }),
              ae = Yt.apply({ x: w, y: b }, { bandAware: !0 });
            return (0, R.R)(a, "discard") && !Yt.isInRange(ae) ? null : ae;
          },
          we = (function (u) {
            function a() {
              return Z(this, a), Ot(this, a, arguments);
            }
            return (
              $(a, u),
              xt(a, [
                {
                  key: "render",
                  value: function () {
                    var b = this.props,
                      jt = b.x,
                      Gt = b.y,
                      Yt = b.r,
                      ae = b.alwaysShow,
                      ue = b.clipPathId,
                      de = (0, y.vh)(jt),
                      ye = (0, y.vh)(Gt);
                    if (
                      ((0, wt.R)(
                        ae === void 0,
                        'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
                      ),
                      !de || !ye)
                    )
                      return null;
                    var Oe = Ge(this.props);
                    if (!Oe) return null;
                    var me = Oe.x,
                      Ae = Oe.y,
                      Qe = this.props,
                      ze = Qe.shape,
                      De = Qe.className,
                      he = (0, R.R)(this.props, "hidden")
                        ? "url(#".concat(ue, ")")
                        : void 0,
                      Pe = K(
                        K({ clipPath: he }, (0, I.J9)(this.props, !0)),
                        {},
                        { cx: me, cy: Ae },
                      );
                    return l.createElement(
                      nt.W,
                      { className: (0, et.A)("recharts-reference-dot", De) },
                      a.renderDot(ze, Pe),
                      d.J.renderCallByParent(this.props, {
                        x: me - Yt,
                        y: Ae - Yt,
                        width: 2 * Yt,
                        height: 2 * Yt,
                      }),
                    );
                  },
                },
              ])
            );
          })(l.Component);
        Pt(we, "displayName", "ReferenceDot"),
          Pt(we, "defaultProps", {
            isFront: !1,
            ifOverflow: "discard",
            xAxisId: 0,
            yAxisId: 0,
            r: 10,
            fill: "#fff",
            stroke: "#ccc",
            fillOpacity: 1,
            strokeWidth: 1,
          }),
          Pt(we, "renderDot", function (u, a) {
            var w;
            return (
              l.isValidElement(u)
                ? (w = l.cloneElement(u, a))
                : U()(u)
                  ? (w = u(a))
                  : (w = l.createElement(
                      Tt.c,
                      zt({}, a, {
                        cx: a.cx,
                        cy: a.cy,
                        className: "recharts-reference-dot-dot",
                      }),
                    )),
              w
            );
          });
        var We = r(59136);
        function Je() {
          return (
            (Je = Object.assign
              ? Object.assign.bind()
              : function (u) {
                  for (var a = 1; a < arguments.length; a++) {
                    var w = arguments[a];
                    for (var b in w)
                      Object.prototype.hasOwnProperty.call(w, b) &&
                        (u[b] = w[b]);
                  }
                  return u;
                }),
            Je.apply(this, arguments)
          );
        }
        function Xe(u) {
          "@babel/helpers - typeof";
          return (
            (Xe =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            Xe(u)
          );
        }
        function hn(u, a) {
          var w = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var b = Object.getOwnPropertySymbols(u);
            a &&
              (b = b.filter(function (jt) {
                return Object.getOwnPropertyDescriptor(u, jt).enumerable;
              })),
              w.push.apply(w, b);
          }
          return w;
        }
        function bn(u) {
          for (var a = 1; a < arguments.length; a++) {
            var w = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? hn(Object(w), !0).forEach(function (b) {
                  Yn(u, b, w[b]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(w),
                  )
                : hn(Object(w)).forEach(function (b) {
                    Object.defineProperty(
                      u,
                      b,
                      Object.getOwnPropertyDescriptor(w, b),
                    );
                  });
          }
          return u;
        }
        function mn(u, a) {
          if (!(u instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function Sn(u, a) {
          for (var w = 0; w < a.length; w++) {
            var b = a[w];
            (b.enumerable = b.enumerable || !1),
              (b.configurable = !0),
              "value" in b && (b.writable = !0),
              Object.defineProperty(u, At(b.key), b);
          }
        }
        function xn(u, a, w) {
          return (
            a && Sn(u.prototype, a),
            w && Sn(u, w),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
        }
        function wn(u, a, w) {
          return (
            (a = sr(a)),
            Jn(
              u,
              Hn()
                ? Reflect.construct(a, w || [], sr(u).constructor)
                : a.apply(u, w),
            )
          );
        }
        function Jn(u, a) {
          if (a && (Xe(a) === "object" || typeof a == "function")) return a;
          if (a !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return jn(u);
        }
        function jn(u) {
          if (u === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return u;
        }
        function Hn() {
          try {
            var u = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Hn = function () {
            return !!u;
          })();
        }
        function sr(u) {
          return (
            (sr = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (w) {
                  return w.__proto__ || Object.getPrototypeOf(w);
                }),
            sr(u)
          );
        }
        function cr(u, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (u.prototype = Object.create(a && a.prototype, {
            constructor: { value: u, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            a && ur(u, a);
        }
        function ur(u, a) {
          return (
            (ur = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (b, jt) {
                  return (b.__proto__ = jt), b;
                }),
            ur(u, a)
          );
        }
        function Yn(u, a, w) {
          return (
            (a = At(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: w,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = w),
            u
          );
        }
        function At(u) {
          var a = gt(u, "string");
          return Xe(a) == "symbol" ? a : a + "";
        }
        function gt(u, a) {
          if (Xe(u) != "object" || !u) return u;
          var w = u[Symbol.toPrimitive];
          if (w !== void 0) {
            var b = w.call(u, a || "default");
            if (Xe(b) != "object") return b;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var Rt = function (a, w, b, jt, Gt) {
            var Yt = Gt.x1,
              ae = Gt.x2,
              ue = Gt.y1,
              de = Gt.y2,
              ye = Gt.xAxis,
              Oe = Gt.yAxis;
            if (!ye || !Oe) return null;
            var me = (0, Q.P2)({ x: ye.scale, y: Oe.scale }),
              Ae = {
                x: a ? me.x.apply(Yt, { position: "start" }) : me.x.rangeMin,
                y: b ? me.y.apply(ue, { position: "start" }) : me.y.rangeMin,
              },
              Qe = {
                x: w ? me.x.apply(ae, { position: "end" }) : me.x.rangeMax,
                y: jt ? me.y.apply(de, { position: "end" }) : me.y.rangeMax,
              };
            return (0, R.R)(Gt, "discard") &&
              (!me.isInRange(Ae) || !me.isInRange(Qe))
              ? null
              : (0, Q.sl)(Ae, Qe);
          },
          It = (function (u) {
            function a() {
              return mn(this, a), wn(this, a, arguments);
            }
            return (
              cr(a, u),
              xn(a, [
                {
                  key: "render",
                  value: function () {
                    var b = this.props,
                      jt = b.x1,
                      Gt = b.x2,
                      Yt = b.y1,
                      ae = b.y2,
                      ue = b.className,
                      de = b.alwaysShow,
                      ye = b.clipPathId;
                    (0, wt.R)(
                      de === void 0,
                      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
                    );
                    var Oe = (0, y.vh)(jt),
                      me = (0, y.vh)(Gt),
                      Ae = (0, y.vh)(Yt),
                      Qe = (0, y.vh)(ae),
                      ze = this.props.shape;
                    if (!Oe && !me && !Ae && !Qe && !ze) return null;
                    var De = Rt(Oe, me, Ae, Qe, this.props);
                    if (!De && !ze) return null;
                    var he = (0, R.R)(this.props, "hidden")
                      ? "url(#".concat(ye, ")")
                      : void 0;
                    return l.createElement(
                      nt.W,
                      { className: (0, et.A)("recharts-reference-area", ue) },
                      a.renderRect(
                        ze,
                        bn(bn({ clipPath: he }, (0, I.J9)(this.props, !0)), De),
                      ),
                      d.J.renderCallByParent(this.props, De),
                    );
                  },
                },
              ])
            );
          })(l.Component);
        Yn(It, "displayName", "ReferenceArea"),
          Yn(It, "defaultProps", {
            isFront: !1,
            ifOverflow: "discard",
            xAxisId: 0,
            yAxisId: 0,
            r: 10,
            fill: "#ccc",
            fillOpacity: 0.5,
            stroke: "none",
            strokeWidth: 1,
          }),
          Yn(It, "renderRect", function (u, a) {
            var w;
            return (
              l.isValidElement(u)
                ? (w = l.cloneElement(u, a))
                : U()(u)
                  ? (w = u(a))
                  : (w = l.createElement(
                      vt.M,
                      Je({}, a, { className: "recharts-reference-area-rect" }),
                    )),
              w
            );
          });
        function ne(u) {
          return Ke(u) || ke(u) || Ce(u) || xe();
        }
        function xe() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Ce(u, a) {
          if (u) {
            if (typeof u == "string") return Fe(u, a);
            var w = Object.prototype.toString.call(u).slice(8, -1);
            if (
              (w === "Object" && u.constructor && (w = u.constructor.name),
              w === "Map" || w === "Set")
            )
              return Array.from(u);
            if (
              w === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)
            )
              return Fe(u, a);
          }
        }
        function ke(u) {
          if (
            (typeof Symbol < "u" && u[Symbol.iterator] != null) ||
            u["@@iterator"] != null
          )
            return Array.from(u);
        }
        function Ke(u) {
          if (Array.isArray(u)) return Fe(u);
        }
        function Fe(u, a) {
          (a == null || a > u.length) && (a = u.length);
          for (var w = 0, b = new Array(a); w < a; w++) b[w] = u[w];
          return b;
        }
        var _e = function (a, w, b, jt, Gt) {
            var Yt = (0, I.aS)(a, We.e),
              ae = (0, I.aS)(a, we),
              ue = [].concat(ne(Yt), ne(ae)),
              de = (0, I.aS)(a, It),
              ye = "".concat(jt, "Id"),
              Oe = jt[0],
              me = w;
            if (
              (ue.length &&
                (me = ue.reduce(function (ze, De) {
                  if (
                    De.props[ye] === b &&
                    (0, R.R)(De.props, "extendDomain") &&
                    (0, y.Et)(De.props[Oe])
                  ) {
                    var he = De.props[Oe];
                    return [Math.min(ze[0], he), Math.max(ze[1], he)];
                  }
                  return ze;
                }, me)),
              de.length)
            ) {
              var Ae = "".concat(Oe, "1"),
                Qe = "".concat(Oe, "2");
              me = de.reduce(function (ze, De) {
                if (
                  De.props[ye] === b &&
                  (0, R.R)(De.props, "extendDomain") &&
                  (0, y.Et)(De.props[Ae]) &&
                  (0, y.Et)(De.props[Qe])
                ) {
                  var he = De.props[Ae],
                    Pe = De.props[Qe];
                  return [Math.min(ze[0], he, Pe), Math.max(ze[1], he, Pe)];
                }
                return ze;
              }, me);
            }
            return (
              Gt &&
                Gt.length &&
                (me = Gt.reduce(function (ze, De) {
                  return (0, y.Et)(De)
                    ? [Math.min(ze[0], De), Math.max(ze[1], De)]
                    : ze;
                }, me)),
              me
            );
          },
          Re = r(90134),
          nn = r(80103),
          un = r(29570),
          An = r.n(un),
          Pn = new (An())(),
          tn = "recharts.syncMouseEvents",
          Rn = r(43998);
        function En(u) {
          "@babel/helpers - typeof";
          return (
            (En =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            En(u)
          );
        }
        function Tn(u, a) {
          if (!(u instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function Mn(u, a) {
          for (var w = 0; w < a.length; w++) {
            var b = a[w];
            (b.enumerable = b.enumerable || !1),
              (b.configurable = !0),
              "value" in b && (b.writable = !0),
              Object.defineProperty(u, Qn(b.key), b);
          }
        }
        function Cn(u, a, w) {
          return (
            a && Mn(u.prototype, a),
            w && Mn(u, w),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
        }
        function $n(u, a, w) {
          return (
            (a = Qn(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: w,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = w),
            u
          );
        }
        function Qn(u) {
          var a = ir(u, "string");
          return En(a) == "symbol" ? a : a + "";
        }
        function ir(u, a) {
          if (En(u) != "object" || !u) return u;
          var w = u[Symbol.toPrimitive];
          if (w !== void 0) {
            var b = w.call(u, a || "default");
            if (En(b) != "object") return b;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var dr = (function () {
          function u() {
            Tn(this, u),
              $n(this, "activeIndex", 0),
              $n(this, "coordinateList", []),
              $n(this, "layout", "horizontal");
          }
          return Cn(u, [
            {
              key: "setDetails",
              value: function (w) {
                var b,
                  jt = w.coordinateList,
                  Gt = jt === void 0 ? null : jt,
                  Yt = w.container,
                  ae = Yt === void 0 ? null : Yt,
                  ue = w.layout,
                  de = ue === void 0 ? null : ue,
                  ye = w.offset,
                  Oe = ye === void 0 ? null : ye,
                  me = w.mouseHandlerCallback,
                  Ae = me === void 0 ? null : me;
                (this.coordinateList =
                  (b = Gt ?? this.coordinateList) !== null && b !== void 0
                    ? b
                    : []),
                  (this.container = ae ?? this.container),
                  (this.layout = de ?? this.layout),
                  (this.offset = Oe ?? this.offset),
                  (this.mouseHandlerCallback = Ae ?? this.mouseHandlerCallback),
                  (this.activeIndex = Math.min(
                    Math.max(this.activeIndex, 0),
                    this.coordinateList.length - 1,
                  ));
              },
            },
            {
              key: "focus",
              value: function () {
                this.spoofMouse();
              },
            },
            {
              key: "keyboardEvent",
              value: function (w) {
                if (this.coordinateList.length !== 0)
                  switch (w.key) {
                    case "ArrowRight": {
                      if (this.layout !== "horizontal") return;
                      (this.activeIndex = Math.min(
                        this.activeIndex + 1,
                        this.coordinateList.length - 1,
                      )),
                        this.spoofMouse();
                      break;
                    }
                    case "ArrowLeft": {
                      if (this.layout !== "horizontal") return;
                      (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                        this.spoofMouse();
                      break;
                    }
                    default:
                      break;
                  }
              },
            },
            {
              key: "setIndex",
              value: function (w) {
                this.activeIndex = w;
              },
            },
            {
              key: "spoofMouse",
              value: function () {
                var w, b;
                if (
                  this.layout === "horizontal" &&
                  this.coordinateList.length !== 0
                ) {
                  var jt = this.container.getBoundingClientRect(),
                    Gt = jt.x,
                    Yt = jt.y,
                    ae = jt.height,
                    ue = this.coordinateList[this.activeIndex].coordinate,
                    de =
                      ((w = window) === null || w === void 0
                        ? void 0
                        : w.scrollX) || 0,
                    ye =
                      ((b = window) === null || b === void 0
                        ? void 0
                        : b.scrollY) || 0,
                    Oe = Gt + ue + de,
                    me = Yt + this.offset.top + ae / 2 + ye;
                  this.mouseHandlerCallback({ pageX: Oe, pageY: me });
                }
              },
            },
          ]);
        })();
        function lr(u, a, w) {
          if (w === "number" && a === !0 && Array.isArray(u)) {
            var b = u?.[0],
              jt = u?.[1];
            if (b && jt && (0, y.Et)(b) && (0, y.Et)(jt)) return !0;
          }
          return !1;
        }
        var tr = r(53818),
          er = r(33487);
        function fr(u) {
          "@babel/helpers - typeof";
          return (
            (fr =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            fr(u)
          );
        }
        var pr = ["x", "y", "top", "left", "width", "height", "className"];
        function Pr() {
          return (
            (Pr = Object.assign
              ? Object.assign.bind()
              : function (u) {
                  for (var a = 1; a < arguments.length; a++) {
                    var w = arguments[a];
                    for (var b in w)
                      Object.prototype.hasOwnProperty.call(w, b) &&
                        (u[b] = w[b]);
                  }
                  return u;
                }),
            Pr.apply(this, arguments)
          );
        }
        function xr(u, a) {
          var w = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var b = Object.getOwnPropertySymbols(u);
            a &&
              (b = b.filter(function (jt) {
                return Object.getOwnPropertyDescriptor(u, jt).enumerable;
              })),
              w.push.apply(w, b);
          }
          return w;
        }
        function vi(u) {
          for (var a = 1; a < arguments.length; a++) {
            var w = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? xr(Object(w), !0).forEach(function (b) {
                  ii(u, b, w[b]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(w),
                  )
                : xr(Object(w)).forEach(function (b) {
                    Object.defineProperty(
                      u,
                      b,
                      Object.getOwnPropertyDescriptor(w, b),
                    );
                  });
          }
          return u;
        }
        function ii(u, a, w) {
          return (
            (a = Ti(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: w,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = w),
            u
          );
        }
        function Ti(u) {
          var a = Mi(u, "string");
          return fr(a) == "symbol" ? a : a + "";
        }
        function Mi(u, a) {
          if (fr(u) != "object" || !u) return u;
          var w = u[Symbol.toPrimitive];
          if (w !== void 0) {
            var b = w.call(u, a || "default");
            if (fr(b) != "object") return b;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        function Di(u, a) {
          if (u == null) return {};
          var w = ji(u, a),
            b,
            jt;
          if (Object.getOwnPropertySymbols) {
            var Gt = Object.getOwnPropertySymbols(u);
            for (jt = 0; jt < Gt.length; jt++)
              (b = Gt[jt]),
                !(a.indexOf(b) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(u, b) &&
                  (w[b] = u[b]);
          }
          return w;
        }
        function ji(u, a) {
          if (u == null) return {};
          var w = {};
          for (var b in u)
            if (Object.prototype.hasOwnProperty.call(u, b)) {
              if (a.indexOf(b) >= 0) continue;
              w[b] = u[b];
            }
          return w;
        }
        var zr = function (a, w, b, jt, Gt, Yt) {
            return "M"
              .concat(a, ",")
              .concat(Gt, "v")
              .concat(jt, "M")
              .concat(Yt, ",")
              .concat(w, "h")
              .concat(b);
          },
          $r = function (a) {
            var w = a.x,
              b = w === void 0 ? 0 : w,
              jt = a.y,
              Gt = jt === void 0 ? 0 : jt,
              Yt = a.top,
              ae = Yt === void 0 ? 0 : Yt,
              ue = a.left,
              de = ue === void 0 ? 0 : ue,
              ye = a.width,
              Oe = ye === void 0 ? 0 : ye,
              me = a.height,
              Ae = me === void 0 ? 0 : me,
              Qe = a.className,
              ze = Di(a, pr),
              De = vi(
                { x: b, y: Gt, top: ae, left: de, width: Oe, height: Ae },
                ze,
              );
            return !(0, y.Et)(b) ||
              !(0, y.Et)(Gt) ||
              !(0, y.Et)(Oe) ||
              !(0, y.Et)(Ae) ||
              !(0, y.Et)(ae) ||
              !(0, y.Et)(de)
              ? null
              : l.createElement(
                  "path",
                  Pr({}, (0, I.J9)(De, !0), {
                    className: (0, et.A)("recharts-cross", Qe),
                    d: zr(b, Gt, Oe, Ae, ae, de),
                  }),
                );
          };
        function hr(u, a, w, b) {
          var jt = b / 2;
          return {
            stroke: "none",
            fill: "#ccc",
            x: u === "horizontal" ? a.x - jt : w.left + 0.5,
            y: u === "horizontal" ? w.top + 0.5 : a.y - jt,
            width: u === "horizontal" ? b : w.width - 1,
            height: u === "horizontal" ? w.height - 1 : b,
          };
        }
        function Er(u) {
          var a = u.cx,
            w = u.cy,
            b = u.radius,
            jt = u.startAngle,
            Gt = u.endAngle,
            Yt = (0, Re.IZ)(a, w, b, jt),
            ae = (0, Re.IZ)(a, w, b, Gt);
          return {
            points: [Yt, ae],
            cx: a,
            cy: w,
            radius: b,
            startAngle: jt,
            endAngle: Gt,
          };
        }
        var yi = r(24588);
        function Hr(u, a, w) {
          var b, jt, Gt, Yt;
          if (u === "horizontal")
            (b = a.x), (Gt = b), (jt = w.top), (Yt = w.top + w.height);
          else if (u === "vertical")
            (jt = a.y), (Yt = jt), (b = w.left), (Gt = w.left + w.width);
          else if (a.cx != null && a.cy != null)
            if (u === "centric") {
              var ae = a.cx,
                ue = a.cy,
                de = a.innerRadius,
                ye = a.outerRadius,
                Oe = a.angle,
                me = (0, Re.IZ)(ae, ue, de, Oe),
                Ae = (0, Re.IZ)(ae, ue, ye, Oe);
              (b = me.x), (jt = me.y), (Gt = Ae.x), (Yt = Ae.y);
            } else return Er(a);
          return [
            { x: b, y: jt },
            { x: Gt, y: Yt },
          ];
        }
        function Tr(u) {
          "@babel/helpers - typeof";
          return (
            (Tr =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            Tr(u)
          );
        }
        function Vr(u, a) {
          var w = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var b = Object.getOwnPropertySymbols(u);
            a &&
              (b = b.filter(function (jt) {
                return Object.getOwnPropertyDescriptor(u, jt).enumerable;
              })),
              w.push.apply(w, b);
          }
          return w;
        }
        function _r(u) {
          for (var a = 1; a < arguments.length; a++) {
            var w = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? Vr(Object(w), !0).forEach(function (b) {
                  Ci(u, b, w[b]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(w),
                  )
                : Vr(Object(w)).forEach(function (b) {
                    Object.defineProperty(
                      u,
                      b,
                      Object.getOwnPropertyDescriptor(w, b),
                    );
                  });
          }
          return u;
        }
        function Ci(u, a, w) {
          return (
            (a = ai(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: w,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = w),
            u
          );
        }
        function ai(u) {
          var a = oi(u, "string");
          return Tr(a) == "symbol" ? a : a + "";
        }
        function oi(u, a) {
          if (Tr(u) != "object" || !u) return u;
          var w = u[Symbol.toPrimitive];
          if (w !== void 0) {
            var b = w.call(u, a || "default");
            if (Tr(b) != "object") return b;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        function Rr(u) {
          var a,
            w,
            b = u.element,
            jt = u.tooltipEventType,
            Gt = u.isActive,
            Yt = u.activeCoordinate,
            ae = u.activePayload,
            ue = u.offset,
            de = u.activeTooltipIndex,
            ye = u.tooltipAxisBandSize,
            Oe = u.layout,
            me = u.chartName,
            Ae =
              (a = b.props.cursor) !== null && a !== void 0
                ? a
                : (w = b.type.defaultProps) === null || w === void 0
                  ? void 0
                  : w.cursor;
          if (
            !b ||
            !Ae ||
            !Gt ||
            !Yt ||
            (me !== "ScatterChart" && jt !== "axis")
          )
            return null;
          var Qe,
            ze = er.I;
          if (me === "ScatterChart") (Qe = Yt), (ze = $r);
          else if (me === "BarChart") (Qe = hr(Oe, Yt, ue, ye)), (ze = vt.M);
          else if (Oe === "radial") {
            var De = Er(Yt),
              he = De.cx,
              Pe = De.cy,
              fe = De.radius,
              pe = De.startAngle,
              Et = De.endAngle;
            (Qe = {
              cx: he,
              cy: Pe,
              startAngle: pe,
              endAngle: Et,
              innerRadius: fe,
              outerRadius: fe,
            }),
              (ze = yi.h);
          } else (Qe = { points: Hr(Oe, Yt, ue) }), (ze = er.I);
          var Nt = _r(
            _r(
              _r(_r({ stroke: "#ccc", pointerEvents: "none" }, ue), Qe),
              (0, I.J9)(Ae, !1),
            ),
            {},
            {
              payload: ae,
              payloadIndex: de,
              className: (0, et.A)("recharts-tooltip-cursor", Ae.className),
            },
          );
          return (0, l.isValidElement)(Ae)
            ? (0, l.cloneElement)(Ae, Nt)
            : (0, l.createElement)(ze, Nt);
        }
        var Gr = r(7351),
          mi = ["item"],
          Xr = [
            "children",
            "className",
            "width",
            "height",
            "style",
            "compact",
            "title",
            "desc",
          ];
        function vr(u) {
          "@babel/helpers - typeof";
          return (
            (vr =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            vr(u)
          );
        }
        function Mr() {
          return (
            (Mr = Object.assign
              ? Object.assign.bind()
              : function (u) {
                  for (var a = 1; a < arguments.length; a++) {
                    var w = arguments[a];
                    for (var b in w)
                      Object.prototype.hasOwnProperty.call(w, b) &&
                        (u[b] = w[b]);
                  }
                  return u;
                }),
            Mr.apply(this, arguments)
          );
        }
        function ui(u, a) {
          return dt(u) || z(u, a) || He(u, a) || C();
        }
        function C() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function z(u, a) {
          var w =
            u == null
              ? null
              : (typeof Symbol < "u" && u[Symbol.iterator]) || u["@@iterator"];
          if (w != null) {
            var b,
              jt,
              Gt,
              Yt,
              ae = [],
              ue = !0,
              de = !1;
            try {
              if (((Gt = (w = w.call(u)).next), a === 0)) {
                if (Object(w) !== w) return;
                ue = !1;
              } else
                for (
                  ;
                  !(ue = (b = Gt.call(w)).done) &&
                  (ae.push(b.value), ae.length !== a);
                  ue = !0
                );
            } catch (ye) {
              (de = !0), (jt = ye);
            } finally {
              try {
                if (
                  !ue &&
                  w.return != null &&
                  ((Yt = w.return()), Object(Yt) !== Yt)
                )
                  return;
              } finally {
                if (de) throw jt;
              }
            }
            return ae;
          }
        }
        function dt(u) {
          if (Array.isArray(u)) return u;
        }
        function Dt(u, a) {
          if (u == null) return {};
          var w = Lt(u, a),
            b,
            jt;
          if (Object.getOwnPropertySymbols) {
            var Gt = Object.getOwnPropertySymbols(u);
            for (jt = 0; jt < Gt.length; jt++)
              (b = Gt[jt]),
                !(a.indexOf(b) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(u, b) &&
                  (w[b] = u[b]);
          }
          return w;
        }
        function Lt(u, a) {
          if (u == null) return {};
          var w = {};
          for (var b in u)
            if (Object.prototype.hasOwnProperty.call(u, b)) {
              if (a.indexOf(b) >= 0) continue;
              w[b] = u[b];
            }
          return w;
        }
        function qt(u, a) {
          if (!(u instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function ce(u, a) {
          for (var w = 0; w < a.length; w++) {
            var b = a[w];
            (b.enumerable = b.enumerable || !1),
              (b.configurable = !0),
              "value" in b && (b.writable = !0),
              Object.defineProperty(u, Br(b.key), b);
          }
        }
        function be(u, a, w) {
          return (
            a && ce(u.prototype, a),
            w && ce(u, w),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
        }
        function Ee(u, a, w) {
          return (
            (a = ln(a)),
            on(
              u,
              sn()
                ? Reflect.construct(a, w || [], ln(u).constructor)
                : a.apply(u, w),
            )
          );
        }
        function on(u, a) {
          if (a && (vr(a) === "object" || typeof a == "function")) return a;
          if (a !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return rn(u);
        }
        function rn(u) {
          if (u === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return u;
        }
        function sn() {
          try {
            var u = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (sn = function () {
            return !!u;
          })();
        }
        function ln(u) {
          return (
            (ln = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (w) {
                  return w.__proto__ || Object.getPrototypeOf(w);
                }),
            ln(u)
          );
        }
        function Bn(u, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (u.prototype = Object.create(a && a.prototype, {
            constructor: { value: u, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            a && Un(u, a);
        }
        function Un(u, a) {
          return (
            (Un = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (b, jt) {
                  return (b.__proto__ = jt), b;
                }),
            Un(u, a)
          );
        }
        function Nn(u) {
          return Gn(u) || cn(u) || He(u) || Ne();
        }
        function Ne() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function He(u, a) {
          if (u) {
            if (typeof u == "string") return gn(u, a);
            var w = Object.prototype.toString.call(u).slice(8, -1);
            if (
              (w === "Object" && u.constructor && (w = u.constructor.name),
              w === "Map" || w === "Set")
            )
              return Array.from(u);
            if (
              w === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)
            )
              return gn(u, a);
          }
        }
        function cn(u) {
          if (
            (typeof Symbol < "u" && u[Symbol.iterator] != null) ||
            u["@@iterator"] != null
          )
            return Array.from(u);
        }
        function Gn(u) {
          if (Array.isArray(u)) return gn(u);
        }
        function gn(u, a) {
          (a == null || a > u.length) && (a = u.length);
          for (var w = 0, b = new Array(a); w < a; w++) b[w] = u[w];
          return b;
        }
        function In(u, a) {
          var w = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var b = Object.getOwnPropertySymbols(u);
            a &&
              (b = b.filter(function (jt) {
                return Object.getOwnPropertyDescriptor(u, jt).enumerable;
              })),
              w.push.apply(w, b);
          }
          return w;
        }
        function Xt(u) {
          for (var a = 1; a < arguments.length; a++) {
            var w = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? In(Object(w), !0).forEach(function (b) {
                  Le(u, b, w[b]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(w),
                  )
                : In(Object(w)).forEach(function (b) {
                    Object.defineProperty(
                      u,
                      b,
                      Object.getOwnPropertyDescriptor(w, b),
                    );
                  });
          }
          return u;
        }
        function Le(u, a, w) {
          return (
            (a = Br(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: w,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = w),
            u
          );
        }
        function Br(u) {
          var a = Dr(u, "string");
          return vr(a) == "symbol" ? a : a + "";
        }
        function Dr(u, a) {
          if (vr(u) != "object" || !u) return u;
          var w = u[Symbol.toPrimitive];
          if (w !== void 0) {
            var b = w.call(u, a || "default");
            if (vr(b) != "object") return b;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var gi = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
          Nr = { width: "100%", height: "100%" },
          Ii = { x: 0, y: 0 };
        function Yr(u) {
          return u;
        }
        var Oa = function (a, w) {
            return w === "horizontal"
              ? a.x
              : w === "vertical"
                ? a.y
                : w === "centric"
                  ? a.angle
                  : a.radius;
          },
          _i = function (a, w, b, jt) {
            var Gt = w.find(function (ye) {
              return ye && ye.index === b;
            });
            if (Gt) {
              if (a === "horizontal") return { x: Gt.coordinate, y: jt.y };
              if (a === "vertical") return { x: jt.x, y: Gt.coordinate };
              if (a === "centric") {
                var Yt = Gt.coordinate,
                  ae = jt.radius;
                return Xt(
                  Xt(Xt({}, jt), (0, Re.IZ)(jt.cx, jt.cy, ae, Yt)),
                  {},
                  { angle: Yt, radius: ae },
                );
              }
              var ue = Gt.coordinate,
                de = jt.angle;
              return Xt(
                Xt(Xt({}, jt), (0, Re.IZ)(jt.cx, jt.cy, ue, de)),
                {},
                { angle: de, radius: ue },
              );
            }
            return Ii;
          },
          Ri = function (a, w) {
            var b = w.graphicalItems,
              jt = w.dataStartIndex,
              Gt = w.dataEndIndex,
              Yt = (b ?? []).reduce(function (ae, ue) {
                var de = ue.props.data;
                return de && de.length ? [].concat(Nn(ae), Nn(de)) : ae;
              }, []);
            return Yt.length > 0
              ? Yt
              : a && a.length && (0, y.Et)(jt) && (0, y.Et)(Gt)
                ? a.slice(jt, Gt + 1)
                : [];
          };
        function Zr(u) {
          return u === "number" ? [0, "auto"] : void 0;
        }
        var Wi = function (a, w, b, jt) {
            var Gt = a.graphicalItems,
              Yt = a.tooltipAxis,
              ae = Ri(w, a);
            return b < 0 || !Gt || !Gt.length || b >= ae.length
              ? null
              : Gt.reduce(function (ue, de) {
                  var ye,
                    Oe =
                      (ye = de.props.data) !== null && ye !== void 0 ? ye : w;
                  Oe &&
                    a.dataStartIndex + a.dataEndIndex !== 0 &&
                    a.dataEndIndex - a.dataStartIndex >= b &&
                    (Oe = Oe.slice(a.dataStartIndex, a.dataEndIndex + 1));
                  var me;
                  if (Yt.dataKey && !Yt.allowDuplicatedCategory) {
                    var Ae = Oe === void 0 ? ae : Oe;
                    me = (0, y.eP)(Ae, Yt.dataKey, jt);
                  } else me = (Oe && Oe[b]) || ae[b];
                  return me ? [].concat(Nn(ue), [(0, g.zb)(de, me)]) : ue;
                }, []);
          },
          li = function (a, w, b, jt) {
            var Gt = jt || { x: a.chartX, y: a.chartY },
              Yt = Oa(Gt, b),
              ae = a.orderedTooltipTicks,
              ue = a.tooltipAxis,
              de = a.tooltipTicks,
              ye = (0, g.gH)(Yt, ae, de, ue);
            if (ye >= 0 && de) {
              var Oe = de[ye] && de[ye].value,
                me = Wi(a, w, ye, Oe),
                Ae = _i(b, ae, ye, Gt);
              return {
                activeTooltipIndex: ye,
                activeLabel: Oe,
                activePayload: me,
                activeCoordinate: Ae,
              };
            }
            return null;
          },
          Aa = function (a, w) {
            var b = w.axes,
              jt = w.graphicalItems,
              Gt = w.axisType,
              Yt = w.axisIdKey,
              ae = w.stackGroups,
              ue = w.dataStartIndex,
              de = w.dataEndIndex,
              ye = a.layout,
              Oe = a.children,
              me = a.stackOffset,
              Ae = (0, g._L)(ye, Gt);
            return b.reduce(function (Qe, ze) {
              var De,
                he =
                  ze.type.defaultProps !== void 0
                    ? Xt(Xt({}, ze.type.defaultProps), ze.props)
                    : ze.props,
                Pe = he.type,
                fe = he.dataKey,
                pe = he.allowDataOverflow,
                Et = he.allowDuplicatedCategory,
                Nt = he.scale,
                Qt = he.ticks,
                oe = he.includeHidden,
                ie = he[Yt];
              if (Qe[ie]) return Qe;
              var Be = Ri(a.data, {
                  graphicalItems: jt.filter(function (Ze) {
                    var Ln,
                      or =
                        Yt in Ze.props
                          ? Ze.props[Yt]
                          : (Ln = Ze.type.defaultProps) === null ||
                              Ln === void 0
                            ? void 0
                            : Ln[Yt];
                    return or === ie;
                  }),
                  dataStartIndex: ue,
                  dataEndIndex: de,
                }),
                Se = Be.length,
                je,
                Ve,
                qe;
              lr(he.domain, pe, Pe) &&
                ((je = (0, g.AQ)(he.domain, null, pe)),
                Ae &&
                  (Pe === "number" || Nt !== "auto") &&
                  (qe = (0, g.Ay)(Be, fe, "category")));
              var Ue = Zr(Pe);
              if (!je || je.length === 0) {
                var en,
                  an = (en = he.domain) !== null && en !== void 0 ? en : Ue;
                if (fe) {
                  if (((je = (0, g.Ay)(Be, fe, Pe)), Pe === "category" && Ae)) {
                    var pn = (0, y.CG)(je);
                    Et && pn
                      ? ((Ve = je), (je = G()(0, Se)))
                      : Et ||
                        (je = (0, g.KC)(an, je, ze).reduce(function (Ze, Ln) {
                          return Ze.indexOf(Ln) >= 0
                            ? Ze
                            : [].concat(Nn(Ze), [Ln]);
                        }, []));
                  } else if (Pe === "category")
                    Et
                      ? (je = je.filter(function (Ze) {
                          return Ze !== "" && !H()(Ze);
                        }))
                      : (je = (0, g.KC)(an, je, ze).reduce(function (Ze, Ln) {
                          return Ze.indexOf(Ln) >= 0 || Ln === "" || H()(Ln)
                            ? Ze
                            : [].concat(Nn(Ze), [Ln]);
                        }, []));
                  else if (Pe === "number") {
                    var vn = (0, g.A1)(
                      Be,
                      jt.filter(function (Ze) {
                        var Ln,
                          or,
                          kn =
                            Yt in Ze.props
                              ? Ze.props[Yt]
                              : (Ln = Ze.type.defaultProps) === null ||
                                  Ln === void 0
                                ? void 0
                                : Ln[Yt],
                          wr =
                            "hide" in Ze.props
                              ? Ze.props.hide
                              : (or = Ze.type.defaultProps) === null ||
                                  or === void 0
                                ? void 0
                                : or.hide;
                        return kn === ie && (oe || !wr);
                      }),
                      fe,
                      Gt,
                      ye,
                    );
                    vn && (je = vn);
                  }
                  Ae &&
                    (Pe === "number" || Nt !== "auto") &&
                    (qe = (0, g.Ay)(Be, fe, "category"));
                } else
                  Ae
                    ? (je = G()(0, Se))
                    : ae && ae[ie] && ae[ie].hasStack && Pe === "number"
                      ? (je =
                          me === "expand"
                            ? [0, 1]
                            : (0, g.Mk)(ae[ie].stackGroups, ue, de))
                      : (je = (0, g.vf)(
                          Be,
                          jt.filter(function (Ze) {
                            var Ln =
                                Yt in Ze.props
                                  ? Ze.props[Yt]
                                  : Ze.type.defaultProps[Yt],
                              or =
                                "hide" in Ze.props
                                  ? Ze.props.hide
                                  : Ze.type.defaultProps.hide;
                            return Ln === ie && (oe || !or);
                          }),
                          Pe,
                          ye,
                          !0,
                        ));
                if (Pe === "number")
                  (je = _e(Oe, je, ie, Gt, Qt)),
                    an && (je = (0, g.AQ)(an, je, pe));
                else if (Pe === "category" && an) {
                  var Fn = an,
                    ar = je.every(function (Ze) {
                      return Fn.indexOf(Ze) >= 0;
                    });
                  ar && (je = Fn);
                }
              }
              return Xt(
                Xt({}, Qe),
                {},
                Le(
                  {},
                  ie,
                  Xt(
                    Xt({}, he),
                    {},
                    {
                      axisType: Gt,
                      domain: je,
                      categoricalDomain: qe,
                      duplicateDomain: Ve,
                      originalDomain:
                        (De = he.domain) !== null && De !== void 0 ? De : Ue,
                      isCategorical: Ae,
                      layout: ye,
                    },
                  ),
                ),
              );
            }, {});
          },
          ki = function (a, w) {
            var b = w.graphicalItems,
              jt = w.Axis,
              Gt = w.axisType,
              Yt = w.axisIdKey,
              ae = w.stackGroups,
              ue = w.dataStartIndex,
              de = w.dataEndIndex,
              ye = a.layout,
              Oe = a.children,
              me = Ri(a.data, {
                graphicalItems: b,
                dataStartIndex: ue,
                dataEndIndex: de,
              }),
              Ae = me.length,
              Qe = (0, g._L)(ye, Gt),
              ze = -1;
            return b.reduce(function (De, he) {
              var Pe =
                  he.type.defaultProps !== void 0
                    ? Xt(Xt({}, he.type.defaultProps), he.props)
                    : he.props,
                fe = Pe[Yt],
                pe = Zr("number");
              if (!De[fe]) {
                ze++;
                var Et;
                return (
                  Qe
                    ? (Et = G()(0, Ae))
                    : ae && ae[fe] && ae[fe].hasStack
                      ? ((Et = (0, g.Mk)(ae[fe].stackGroups, ue, de)),
                        (Et = _e(Oe, Et, fe, Gt)))
                      : ((Et = (0, g.AQ)(
                          pe,
                          (0, g.vf)(
                            me,
                            b.filter(function (Nt) {
                              var Qt,
                                oe,
                                ie =
                                  Yt in Nt.props
                                    ? Nt.props[Yt]
                                    : (Qt = Nt.type.defaultProps) === null ||
                                        Qt === void 0
                                      ? void 0
                                      : Qt[Yt],
                                Be =
                                  "hide" in Nt.props
                                    ? Nt.props.hide
                                    : (oe = Nt.type.defaultProps) === null ||
                                        oe === void 0
                                      ? void 0
                                      : oe.hide;
                              return ie === fe && !Be;
                            }),
                            "number",
                            ye,
                          ),
                          jt.defaultProps.allowDataOverflow,
                        )),
                        (Et = _e(Oe, Et, fe, Gt))),
                  Xt(
                    Xt({}, De),
                    {},
                    Le(
                      {},
                      fe,
                      Xt(
                        Xt({ axisType: Gt }, jt.defaultProps),
                        {},
                        {
                          hide: !0,
                          orientation: ct()(
                            gi,
                            "".concat(Gt, ".").concat(ze % 2),
                            null,
                          ),
                          domain: Et,
                          originalDomain: pe,
                          isCategorical: Qe,
                          layout: ye,
                        },
                      ),
                    ),
                  )
                );
              }
              return De;
            }, {});
          },
          Pa = function (a, w) {
            var b = w.axisType,
              jt = b === void 0 ? "xAxis" : b,
              Gt = w.AxisComp,
              Yt = w.graphicalItems,
              ae = w.stackGroups,
              ue = w.dataStartIndex,
              de = w.dataEndIndex,
              ye = a.children,
              Oe = "".concat(jt, "Id"),
              me = (0, I.aS)(ye, Gt),
              Ae = {};
            return (
              me && me.length
                ? (Ae = Aa(a, {
                    axes: me,
                    graphicalItems: Yt,
                    axisType: jt,
                    axisIdKey: Oe,
                    stackGroups: ae,
                    dataStartIndex: ue,
                    dataEndIndex: de,
                  }))
                : Yt &&
                  Yt.length &&
                  (Ae = ki(a, {
                    Axis: Gt,
                    graphicalItems: Yt,
                    axisType: jt,
                    axisIdKey: Oe,
                    stackGroups: ae,
                    dataStartIndex: ue,
                    dataEndIndex: de,
                  })),
              Ae
            );
          },
          Lr = function (a) {
            var w = (0, y.lX)(a),
              b = (0, g.Rh)(w, !1, !0);
            return {
              tooltipTicks: b,
              orderedTooltipTicks: st()(b, function (jt) {
                return jt.coordinate;
              }),
              tooltipAxis: w,
              tooltipAxisBandSize: (0, g.Hj)(w, b),
            };
          },
          si = function (a) {
            var w = a.children,
              b = a.defaultShowTooltip,
              jt = (0, I.BU)(w, o),
              Gt = 0,
              Yt = 0;
            return (
              a.data && a.data.length !== 0 && (Yt = a.data.length - 1),
              jt &&
                jt.props &&
                (jt.props.startIndex >= 0 && (Gt = jt.props.startIndex),
                jt.props.endIndex >= 0 && (Yt = jt.props.endIndex)),
              {
                chartX: 0,
                chartY: 0,
                dataStartIndex: Gt,
                dataEndIndex: Yt,
                activeTooltipIndex: -1,
                isTooltipActive: !!b,
              }
            );
          },
          bi = function (a) {
            return !a || !a.length
              ? !1
              : a.some(function (w) {
                  var b = (0, I.Mn)(w && w.type);
                  return b && b.indexOf("Bar") >= 0;
                });
          },
          Ki = function (a) {
            return a === "horizontal"
              ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
              : a === "vertical"
                ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
                : a === "centric"
                  ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
                  : {
                      numericAxisName: "angleAxis",
                      cateAxisName: "radiusAxis",
                    };
          },
          na = function (a, w) {
            var b = a.props,
              jt = a.graphicalItems,
              Gt = a.xAxisMap,
              Yt = Gt === void 0 ? {} : Gt,
              ae = a.yAxisMap,
              ue = ae === void 0 ? {} : ae,
              de = b.width,
              ye = b.height,
              Oe = b.children,
              me = b.margin || {},
              Ae = (0, I.BU)(Oe, o),
              Qe = (0, I.BU)(Oe, kt.s),
              ze = Object.keys(ue).reduce(
                function (Et, Nt) {
                  var Qt = ue[Nt],
                    oe = Qt.orientation;
                  return !Qt.mirror && !Qt.hide
                    ? Xt(Xt({}, Et), {}, Le({}, oe, Et[oe] + Qt.width))
                    : Et;
                },
                { left: me.left || 0, right: me.right || 0 },
              ),
              De = Object.keys(Yt).reduce(
                function (Et, Nt) {
                  var Qt = Yt[Nt],
                    oe = Qt.orientation;
                  return !Qt.mirror && !Qt.hide
                    ? Xt(
                        Xt({}, Et),
                        {},
                        Le({}, oe, ct()(Et, "".concat(oe)) + Qt.height),
                      )
                    : Et;
                },
                { top: me.top || 0, bottom: me.bottom || 0 },
              ),
              he = Xt(Xt({}, De), ze),
              Pe = he.bottom;
            Ae && (he.bottom += Ae.props.height || o.defaultProps.height),
              Qe && w && (he = (0, g.s0)(he, jt, b, w));
            var fe = de - he.left - he.right,
              pe = ye - he.top - he.bottom;
            return Xt(
              Xt({ brushBottom: Pe }, he),
              {},
              { width: Math.max(fe, 0), height: Math.max(pe, 0) },
            );
          },
          Jr = function (a, w) {
            if (w === "xAxis") return a[w].width;
            if (w === "yAxis") return a[w].height;
          },
          ra = function (a) {
            var w = a.chartName,
              b = a.GraphicalChild,
              jt = a.defaultTooltipEventType,
              Gt = jt === void 0 ? "axis" : jt,
              Yt = a.validateTooltipEventTypes,
              ae = Yt === void 0 ? ["axis"] : Yt,
              ue = a.axisComponents,
              de = a.legendContent,
              ye = a.formatAxisMap,
              Oe = a.defaultProps,
              me = function (he, Pe) {
                var fe = Pe.graphicalItems,
                  pe = Pe.stackGroups,
                  Et = Pe.offset,
                  Nt = Pe.updateId,
                  Qt = Pe.dataStartIndex,
                  oe = Pe.dataEndIndex,
                  ie = he.barSize,
                  Be = he.layout,
                  Se = he.barGap,
                  je = he.barCategoryGap,
                  Ve = he.maxBarSize,
                  qe = Ki(Be),
                  Ue = qe.numericAxisName,
                  en = qe.cateAxisName,
                  an = bi(fe),
                  pn = [];
                return (
                  fe.forEach(function (vn, Fn) {
                    var ar = Ri(he.data, {
                        graphicalItems: [vn],
                        dataStartIndex: Qt,
                        dataEndIndex: oe,
                      }),
                      Ze =
                        vn.type.defaultProps !== void 0
                          ? Xt(Xt({}, vn.type.defaultProps), vn.props)
                          : vn.props,
                      Ln = Ze.dataKey,
                      or = Ze.maxBarSize,
                      kn = Ze["".concat(Ue, "Id")],
                      wr = Ze["".concat(en, "Id")],
                      Bi = {},
                      fn = ue.reduce(function (Kr, Cr) {
                        var Ea,
                          ia,
                          Ni = Pe["".concat(Cr.axisType, "Map")],
                          Fi = Ze["".concat(Cr.axisType, "Id")];
                        (Ni && Ni[Fi]) ||
                          Cr.axisType === "zAxis" ||
                          (0, St.A)(!1);
                        var zi = Ni[Fi];
                        return Xt(
                          Xt({}, Kr),
                          {},
                          Le(
                            Le({}, Cr.axisType, zi),
                            "".concat(Cr.axisType, "Ticks"),
                            (0, g.Rh)(zi),
                          ),
                        );
                      }, Bi),
                      Ur = fn[en],
                      jr = fn["".concat(en, "Ticks")],
                      Or =
                        pe &&
                        pe[kn] &&
                        pe[kn].hasStack &&
                        (0, g.kA)(vn, pe[kn].stackGroups),
                      ci = (0, I.Mn)(vn.type).indexOf("Bar") >= 0,
                      Wr = (0, g.Hj)(Ur, jr),
                      Qr = [],
                      fi =
                        an &&
                        (0, g.tA)({
                          barSize: ie,
                          stackGroups: pe,
                          totalSize: Jr(fn, en),
                        });
                    if (ci) {
                      var di,
                        kr,
                        qr = H()(or) ? Ve : or,
                        ti =
                          (di =
                            (kr = (0, g.Hj)(Ur, jr, !0)) !== null &&
                            kr !== void 0
                              ? kr
                              : qr) !== null && di !== void 0
                            ? di
                            : 0;
                      (Qr = (0, g.BX)({
                        barGap: Se,
                        barCategoryGap: je,
                        bandSize: ti !== Wr ? ti : Wr,
                        sizeList: fi[wr],
                        maxBarSize: qr,
                      })),
                        ti !== Wr &&
                          (Qr = Qr.map(function (Kr) {
                            return Xt(
                              Xt({}, Kr),
                              {},
                              {
                                position: Xt(
                                  Xt({}, Kr.position),
                                  {},
                                  { offset: Kr.position.offset - ti / 2 },
                                ),
                              },
                            );
                          }));
                    }
                    var xi = vn && vn.type && vn.type.getComposedData;
                    xi &&
                      pn.push({
                        props: Xt(
                          Xt(
                            {},
                            xi(
                              Xt(
                                Xt({}, fn),
                                {},
                                {
                                  displayedData: ar,
                                  props: he,
                                  dataKey: Ln,
                                  item: vn,
                                  bandSize: Wr,
                                  barPosition: Qr,
                                  offset: Et,
                                  stackedData: Or,
                                  layout: Be,
                                  dataStartIndex: Qt,
                                  dataEndIndex: oe,
                                },
                              ),
                            ),
                          ),
                          {},
                          Le(
                            Le(
                              Le(
                                { key: vn.key || "item-".concat(Fn) },
                                Ue,
                                fn[Ue],
                              ),
                              en,
                              fn[en],
                            ),
                            "animationId",
                            Nt,
                          ),
                        ),
                        childIndex: (0, I.AW)(vn, he.children),
                        item: vn,
                      });
                  }),
                  pn
                );
              },
              Ae = function (he, Pe) {
                var fe = he.props,
                  pe = he.dataStartIndex,
                  Et = he.dataEndIndex,
                  Nt = he.updateId;
                if (!(0, I.Me)({ props: fe })) return null;
                var Qt = fe.children,
                  oe = fe.layout,
                  ie = fe.stackOffset,
                  Be = fe.data,
                  Se = fe.reverseStackOrder,
                  je = Ki(oe),
                  Ve = je.numericAxisName,
                  qe = je.cateAxisName,
                  Ue = (0, I.aS)(Qt, b),
                  en = (0, g.Mn)(
                    Be,
                    Ue,
                    "".concat(Ve, "Id"),
                    "".concat(qe, "Id"),
                    ie,
                    Se,
                  ),
                  an = ue.reduce(function (Ze, Ln) {
                    var or = "".concat(Ln.axisType, "Map");
                    return Xt(
                      Xt({}, Ze),
                      {},
                      Le(
                        {},
                        or,
                        Pa(
                          fe,
                          Xt(
                            Xt({}, Ln),
                            {},
                            {
                              graphicalItems: Ue,
                              stackGroups: Ln.axisType === Ve && en,
                              dataStartIndex: pe,
                              dataEndIndex: Et,
                            },
                          ),
                        ),
                      ),
                    );
                  }, {}),
                  pn = na(
                    Xt(Xt({}, an), {}, { props: fe, graphicalItems: Ue }),
                    Pe?.legendBBox,
                  );
                Object.keys(an).forEach(function (Ze) {
                  an[Ze] = ye(fe, an[Ze], pn, Ze.replace("Map", ""), w);
                });
                var vn = an["".concat(qe, "Map")],
                  Fn = Lr(vn),
                  ar = me(
                    fe,
                    Xt(
                      Xt({}, an),
                      {},
                      {
                        dataStartIndex: pe,
                        dataEndIndex: Et,
                        updateId: Nt,
                        graphicalItems: Ue,
                        stackGroups: en,
                        offset: pn,
                      },
                    ),
                  );
                return Xt(
                  Xt(
                    {
                      formattedGraphicalItems: ar,
                      graphicalItems: Ue,
                      offset: pn,
                      stackGroups: en,
                    },
                    Fn,
                  ),
                  an,
                );
              },
              Qe = (function (De) {
                function he(Pe) {
                  var fe, pe, Et;
                  return (
                    qt(this, he),
                    (Et = Ee(this, he, [Pe])),
                    Le(
                      Et,
                      "eventEmitterSymbol",
                      Symbol("rechartsEventEmitter"),
                    ),
                    Le(Et, "accessibilityManager", new dr()),
                    Le(Et, "handleLegendBBoxUpdate", function (Nt) {
                      if (Nt) {
                        var Qt = Et.state,
                          oe = Qt.dataStartIndex,
                          ie = Qt.dataEndIndex,
                          Be = Qt.updateId;
                        Et.setState(
                          Xt(
                            { legendBBox: Nt },
                            Ae(
                              {
                                props: Et.props,
                                dataStartIndex: oe,
                                dataEndIndex: ie,
                                updateId: Be,
                              },
                              Xt(Xt({}, Et.state), {}, { legendBBox: Nt }),
                            ),
                          ),
                        );
                      }
                    }),
                    Le(Et, "handleReceiveSyncEvent", function (Nt, Qt, oe) {
                      if (Et.props.syncId === Nt) {
                        if (
                          oe === Et.eventEmitterSymbol &&
                          typeof Et.props.syncMethod != "function"
                        )
                          return;
                        Et.applySyncEvent(Qt);
                      }
                    }),
                    Le(Et, "handleBrushChange", function (Nt) {
                      var Qt = Nt.startIndex,
                        oe = Nt.endIndex;
                      if (
                        Qt !== Et.state.dataStartIndex ||
                        oe !== Et.state.dataEndIndex
                      ) {
                        var ie = Et.state.updateId;
                        Et.setState(function () {
                          return Xt(
                            { dataStartIndex: Qt, dataEndIndex: oe },
                            Ae(
                              {
                                props: Et.props,
                                dataStartIndex: Qt,
                                dataEndIndex: oe,
                                updateId: ie,
                              },
                              Et.state,
                            ),
                          );
                        }),
                          Et.triggerSyncEvent({
                            dataStartIndex: Qt,
                            dataEndIndex: oe,
                          });
                      }
                    }),
                    Le(Et, "handleMouseEnter", function (Nt) {
                      var Qt = Et.getMouseInfo(Nt);
                      if (Qt) {
                        var oe = Xt(Xt({}, Qt), {}, { isTooltipActive: !0 });
                        Et.setState(oe), Et.triggerSyncEvent(oe);
                        var ie = Et.props.onMouseEnter;
                        U()(ie) && ie(oe, Nt);
                      }
                    }),
                    Le(Et, "triggeredAfterMouseMove", function (Nt) {
                      var Qt = Et.getMouseInfo(Nt),
                        oe = Qt
                          ? Xt(Xt({}, Qt), {}, { isTooltipActive: !0 })
                          : { isTooltipActive: !1 };
                      Et.setState(oe), Et.triggerSyncEvent(oe);
                      var ie = Et.props.onMouseMove;
                      U()(ie) && ie(oe, Nt);
                    }),
                    Le(Et, "handleItemMouseEnter", function (Nt) {
                      Et.setState(function () {
                        return {
                          isTooltipActive: !0,
                          activeItem: Nt,
                          activePayload: Nt.tooltipPayload,
                          activeCoordinate: Nt.tooltipPosition || {
                            x: Nt.cx,
                            y: Nt.cy,
                          },
                        };
                      });
                    }),
                    Le(Et, "handleItemMouseLeave", function () {
                      Et.setState(function () {
                        return { isTooltipActive: !1 };
                      });
                    }),
                    Le(Et, "handleMouseMove", function (Nt) {
                      Nt.persist(), Et.throttleTriggeredAfterMouseMove(Nt);
                    }),
                    Le(Et, "handleMouseLeave", function (Nt) {
                      Et.throttleTriggeredAfterMouseMove.cancel();
                      var Qt = { isTooltipActive: !1 };
                      Et.setState(Qt), Et.triggerSyncEvent(Qt);
                      var oe = Et.props.onMouseLeave;
                      U()(oe) && oe(Qt, Nt);
                    }),
                    Le(Et, "handleOuterEvent", function (Nt) {
                      var Qt = (0, I.X_)(Nt),
                        oe = ct()(Et.props, "".concat(Qt));
                      if (Qt && U()(oe)) {
                        var ie, Be;
                        /.*touch.*/i.test(Qt)
                          ? (Be = Et.getMouseInfo(Nt.changedTouches[0]))
                          : (Be = Et.getMouseInfo(Nt)),
                          oe((ie = Be) !== null && ie !== void 0 ? ie : {}, Nt);
                      }
                    }),
                    Le(Et, "handleClick", function (Nt) {
                      var Qt = Et.getMouseInfo(Nt);
                      if (Qt) {
                        var oe = Xt(Xt({}, Qt), {}, { isTooltipActive: !0 });
                        Et.setState(oe), Et.triggerSyncEvent(oe);
                        var ie = Et.props.onClick;
                        U()(ie) && ie(oe, Nt);
                      }
                    }),
                    Le(Et, "handleMouseDown", function (Nt) {
                      var Qt = Et.props.onMouseDown;
                      if (U()(Qt)) {
                        var oe = Et.getMouseInfo(Nt);
                        Qt(oe, Nt);
                      }
                    }),
                    Le(Et, "handleMouseUp", function (Nt) {
                      var Qt = Et.props.onMouseUp;
                      if (U()(Qt)) {
                        var oe = Et.getMouseInfo(Nt);
                        Qt(oe, Nt);
                      }
                    }),
                    Le(Et, "handleTouchMove", function (Nt) {
                      Nt.changedTouches != null &&
                        Nt.changedTouches.length > 0 &&
                        Et.throttleTriggeredAfterMouseMove(
                          Nt.changedTouches[0],
                        );
                    }),
                    Le(Et, "handleTouchStart", function (Nt) {
                      Nt.changedTouches != null &&
                        Nt.changedTouches.length > 0 &&
                        Et.handleMouseDown(Nt.changedTouches[0]);
                    }),
                    Le(Et, "handleTouchEnd", function (Nt) {
                      Nt.changedTouches != null &&
                        Nt.changedTouches.length > 0 &&
                        Et.handleMouseUp(Nt.changedTouches[0]);
                    }),
                    Le(Et, "handleDoubleClick", function (Nt) {
                      var Qt = Et.props.onDoubleClick;
                      if (U()(Qt)) {
                        var oe = Et.getMouseInfo(Nt);
                        Qt(oe, Nt);
                      }
                    }),
                    Le(Et, "handleContextMenu", function (Nt) {
                      var Qt = Et.props.onContextMenu;
                      if (U()(Qt)) {
                        var oe = Et.getMouseInfo(Nt);
                        Qt(oe, Nt);
                      }
                    }),
                    Le(Et, "triggerSyncEvent", function (Nt) {
                      Et.props.syncId !== void 0 &&
                        Pn.emit(tn, Et.props.syncId, Nt, Et.eventEmitterSymbol);
                    }),
                    Le(Et, "applySyncEvent", function (Nt) {
                      var Qt = Et.props,
                        oe = Qt.layout,
                        ie = Qt.syncMethod,
                        Be = Et.state.updateId,
                        Se = Nt.dataStartIndex,
                        je = Nt.dataEndIndex;
                      if (
                        Nt.dataStartIndex !== void 0 ||
                        Nt.dataEndIndex !== void 0
                      )
                        Et.setState(
                          Xt(
                            { dataStartIndex: Se, dataEndIndex: je },
                            Ae(
                              {
                                props: Et.props,
                                dataStartIndex: Se,
                                dataEndIndex: je,
                                updateId: Be,
                              },
                              Et.state,
                            ),
                          ),
                        );
                      else if (Nt.activeTooltipIndex !== void 0) {
                        var Ve = Nt.chartX,
                          qe = Nt.chartY,
                          Ue = Nt.activeTooltipIndex,
                          en = Et.state,
                          an = en.offset,
                          pn = en.tooltipTicks;
                        if (!an) return;
                        if (typeof ie == "function") Ue = ie(pn, Nt);
                        else if (ie === "value") {
                          Ue = -1;
                          for (var vn = 0; vn < pn.length; vn++)
                            if (pn[vn].value === Nt.activeLabel) {
                              Ue = vn;
                              break;
                            }
                        }
                        var Fn = Xt(Xt({}, an), {}, { x: an.left, y: an.top }),
                          ar = Math.min(Ve, Fn.x + Fn.width),
                          Ze = Math.min(qe, Fn.y + Fn.height),
                          Ln = pn[Ue] && pn[Ue].value,
                          or = Wi(Et.state, Et.props.data, Ue),
                          kn = pn[Ue]
                            ? {
                                x: oe === "horizontal" ? pn[Ue].coordinate : ar,
                                y: oe === "horizontal" ? Ze : pn[Ue].coordinate,
                              }
                            : Ii;
                        Et.setState(
                          Xt(
                            Xt({}, Nt),
                            {},
                            {
                              activeLabel: Ln,
                              activeCoordinate: kn,
                              activePayload: or,
                              activeTooltipIndex: Ue,
                            },
                          ),
                        );
                      } else Et.setState(Nt);
                    }),
                    Le(Et, "renderCursor", function (Nt) {
                      var Qt,
                        oe = Et.state,
                        ie = oe.isTooltipActive,
                        Be = oe.activeCoordinate,
                        Se = oe.activePayload,
                        je = oe.offset,
                        Ve = oe.activeTooltipIndex,
                        qe = oe.tooltipAxisBandSize,
                        Ue = Et.getTooltipEventType(),
                        en =
                          (Qt = Nt.props.active) !== null && Qt !== void 0
                            ? Qt
                            : ie,
                        an = Et.props.layout,
                        pn = Nt.key || "_recharts-cursor";
                      return l.createElement(Rr, {
                        key: pn,
                        activeCoordinate: Be,
                        activePayload: Se,
                        activeTooltipIndex: Ve,
                        chartName: w,
                        element: Nt,
                        isActive: en,
                        layout: an,
                        offset: je,
                        tooltipAxisBandSize: qe,
                        tooltipEventType: Ue,
                      });
                    }),
                    Le(Et, "renderPolarAxis", function (Nt, Qt, oe) {
                      var ie = ct()(Nt, "type.axisType"),
                        Be = ct()(Et.state, "".concat(ie, "Map")),
                        Se = Nt.type.defaultProps,
                        je =
                          Se !== void 0 ? Xt(Xt({}, Se), Nt.props) : Nt.props,
                        Ve = Be && Be[je["".concat(ie, "Id")]];
                      return (0, l.cloneElement)(
                        Nt,
                        Xt(
                          Xt({}, Ve),
                          {},
                          {
                            className: (0, et.A)(ie, Ve.className),
                            key: Nt.key || "".concat(Qt, "-").concat(oe),
                            ticks: (0, g.Rh)(Ve, !0),
                          },
                        ),
                      );
                    }),
                    Le(Et, "renderPolarGrid", function (Nt) {
                      var Qt = Nt.props,
                        oe = Qt.radialLines,
                        ie = Qt.polarAngles,
                        Be = Qt.polarRadius,
                        Se = Et.state,
                        je = Se.radiusAxisMap,
                        Ve = Se.angleAxisMap,
                        qe = (0, y.lX)(je),
                        Ue = (0, y.lX)(Ve),
                        en = Ue.cx,
                        an = Ue.cy,
                        pn = Ue.innerRadius,
                        vn = Ue.outerRadius;
                      return (0, l.cloneElement)(Nt, {
                        polarAngles: Array.isArray(ie)
                          ? ie
                          : (0, g.Rh)(Ue, !0).map(function (Fn) {
                              return Fn.coordinate;
                            }),
                        polarRadius: Array.isArray(Be)
                          ? Be
                          : (0, g.Rh)(qe, !0).map(function (Fn) {
                              return Fn.coordinate;
                            }),
                        cx: en,
                        cy: an,
                        innerRadius: pn,
                        outerRadius: vn,
                        key: Nt.key || "polar-grid",
                        radialLines: oe,
                      });
                    }),
                    Le(Et, "renderLegend", function () {
                      var Nt = Et.state.formattedGraphicalItems,
                        Qt = Et.props,
                        oe = Qt.children,
                        ie = Qt.width,
                        Be = Qt.height,
                        Se = Et.props.margin || {},
                        je = ie - (Se.left || 0) - (Se.right || 0),
                        Ve = (0, O.g)({
                          children: oe,
                          formattedGraphicalItems: Nt,
                          legendWidth: je,
                          legendContent: de,
                        });
                      if (!Ve) return null;
                      var qe = Ve.item,
                        Ue = Dt(Ve, mi);
                      return (0, l.cloneElement)(
                        qe,
                        Xt(
                          Xt({}, Ue),
                          {},
                          {
                            chartWidth: ie,
                            chartHeight: Be,
                            margin: Se,
                            onBBoxUpdate: Et.handleLegendBBoxUpdate,
                          },
                        ),
                      );
                    }),
                    Le(Et, "renderTooltip", function () {
                      var Nt,
                        Qt = Et.props,
                        oe = Qt.children,
                        ie = Qt.accessibilityLayer,
                        Be = (0, I.BU)(oe, te.m);
                      if (!Be) return null;
                      var Se = Et.state,
                        je = Se.isTooltipActive,
                        Ve = Se.activeCoordinate,
                        qe = Se.activePayload,
                        Ue = Se.activeLabel,
                        en = Se.offset,
                        an =
                          (Nt = Be.props.active) !== null && Nt !== void 0
                            ? Nt
                            : je;
                      return (0, l.cloneElement)(Be, {
                        viewBox: Xt(Xt({}, en), {}, { x: en.left, y: en.top }),
                        active: an,
                        label: Ue,
                        payload: an ? qe : [],
                        coordinate: Ve,
                        accessibilityLayer: ie,
                      });
                    }),
                    Le(Et, "renderBrush", function (Nt) {
                      var Qt = Et.props,
                        oe = Qt.margin,
                        ie = Qt.data,
                        Be = Et.state,
                        Se = Be.offset,
                        je = Be.dataStartIndex,
                        Ve = Be.dataEndIndex,
                        qe = Be.updateId;
                      return (0, l.cloneElement)(Nt, {
                        key: Nt.key || "_recharts-brush",
                        onChange: (0, g.HQ)(
                          Et.handleBrushChange,
                          Nt.props.onChange,
                        ),
                        data: ie,
                        x: (0, y.Et)(Nt.props.x) ? Nt.props.x : Se.left,
                        y: (0, y.Et)(Nt.props.y)
                          ? Nt.props.y
                          : Se.top +
                            Se.height +
                            Se.brushBottom -
                            (oe.bottom || 0),
                        width: (0, y.Et)(Nt.props.width)
                          ? Nt.props.width
                          : Se.width,
                        startIndex: je,
                        endIndex: Ve,
                        updateId: "brush-".concat(qe),
                      });
                    }),
                    Le(Et, "renderReferenceElement", function (Nt, Qt, oe) {
                      if (!Nt) return null;
                      var ie = Et,
                        Be = ie.clipPathId,
                        Se = Et.state,
                        je = Se.xAxisMap,
                        Ve = Se.yAxisMap,
                        qe = Se.offset,
                        Ue = Nt.type.defaultProps || {},
                        en = Nt.props,
                        an = en.xAxisId,
                        pn = an === void 0 ? Ue.xAxisId : an,
                        vn = en.yAxisId,
                        Fn = vn === void 0 ? Ue.yAxisId : vn;
                      return (0, l.cloneElement)(Nt, {
                        key: Nt.key || "".concat(Qt, "-").concat(oe),
                        xAxis: je[pn],
                        yAxis: Ve[Fn],
                        viewBox: {
                          x: qe.left,
                          y: qe.top,
                          width: qe.width,
                          height: qe.height,
                        },
                        clipPathId: Be,
                      });
                    }),
                    Le(Et, "renderActivePoints", function (Nt) {
                      var Qt = Nt.item,
                        oe = Nt.activePoint,
                        ie = Nt.basePoint,
                        Be = Nt.childIndex,
                        Se = Nt.isRange,
                        je = [],
                        Ve = Qt.props.key,
                        qe =
                          Qt.item.type.defaultProps !== void 0
                            ? Xt(
                                Xt({}, Qt.item.type.defaultProps),
                                Qt.item.props,
                              )
                            : Qt.item.props,
                        Ue = qe.activeDot,
                        en = qe.dataKey,
                        an = Xt(
                          Xt(
                            {
                              index: Be,
                              dataKey: en,
                              cx: oe.x,
                              cy: oe.y,
                              r: 4,
                              fill: (0, g.Ps)(Qt.item),
                              strokeWidth: 2,
                              stroke: "#fff",
                              payload: oe.payload,
                              value: oe.value,
                            },
                            (0, I.J9)(Ue, !1),
                          ),
                          (0, Rn._U)(Ue),
                        );
                      return (
                        je.push(
                          he.renderActiveDot(
                            Ue,
                            an,
                            "".concat(Ve, "-activePoint-").concat(Be),
                          ),
                        ),
                        ie
                          ? je.push(
                              he.renderActiveDot(
                                Ue,
                                Xt(Xt({}, an), {}, { cx: ie.x, cy: ie.y }),
                                "".concat(Ve, "-basePoint-").concat(Be),
                              ),
                            )
                          : Se && je.push(null),
                        je
                      );
                    }),
                    Le(Et, "renderGraphicChild", function (Nt, Qt, oe) {
                      var ie = Et.filterFormatItem(Nt, Qt, oe);
                      if (!ie) return null;
                      var Be = Et.getTooltipEventType(),
                        Se = Et.state,
                        je = Se.isTooltipActive,
                        Ve = Se.tooltipAxis,
                        qe = Se.activeTooltipIndex,
                        Ue = Se.activeLabel,
                        en = Et.props.children,
                        an = (0, I.BU)(en, te.m),
                        pn = ie.props,
                        vn = pn.points,
                        Fn = pn.isRange,
                        ar = pn.baseLine,
                        Ze =
                          ie.item.type.defaultProps !== void 0
                            ? Xt(
                                Xt({}, ie.item.type.defaultProps),
                                ie.item.props,
                              )
                            : ie.item.props,
                        Ln = Ze.activeDot,
                        or = Ze.hide,
                        kn = Ze.activeBar,
                        wr = Ze.activeShape,
                        Bi = !!(!or && je && an && (Ln || kn || wr)),
                        fn = {};
                      Be !== "axis" && an && an.props.trigger === "click"
                        ? (fn = {
                            onClick: (0, g.HQ)(
                              Et.handleItemMouseEnter,
                              Nt.props.onClick,
                            ),
                          })
                        : Be !== "axis" &&
                          (fn = {
                            onMouseLeave: (0, g.HQ)(
                              Et.handleItemMouseLeave,
                              Nt.props.onMouseLeave,
                            ),
                            onMouseEnter: (0, g.HQ)(
                              Et.handleItemMouseEnter,
                              Nt.props.onMouseEnter,
                            ),
                          });
                      var Ur = (0, l.cloneElement)(
                        Nt,
                        Xt(Xt({}, ie.props), fn),
                      );
                      function jr(Cr) {
                        return typeof Ve.dataKey == "function"
                          ? Ve.dataKey(Cr.payload)
                          : null;
                      }
                      if (Bi)
                        if (qe >= 0) {
                          var Or, ci;
                          if (Ve.dataKey && !Ve.allowDuplicatedCategory) {
                            var Wr =
                              typeof Ve.dataKey == "function"
                                ? jr
                                : "payload.".concat(Ve.dataKey.toString());
                            (Or = (0, y.eP)(vn, Wr, Ue)),
                              (ci = Fn && ar && (0, y.eP)(ar, Wr, Ue));
                          } else (Or = vn?.[qe]), (ci = Fn && ar && ar[qe]);
                          if (wr || kn) {
                            var Qr =
                              Nt.props.activeIndex !== void 0
                                ? Nt.props.activeIndex
                                : qe;
                            return [
                              (0, l.cloneElement)(
                                Nt,
                                Xt(
                                  Xt(Xt({}, ie.props), fn),
                                  {},
                                  { activeIndex: Qr },
                                ),
                              ),
                              null,
                              null,
                            ];
                          }
                          if (!H()(Or))
                            return [Ur].concat(
                              Nn(
                                Et.renderActivePoints({
                                  item: ie,
                                  activePoint: Or,
                                  basePoint: ci,
                                  childIndex: qe,
                                  isRange: Fn,
                                }),
                              ),
                            );
                        } else {
                          var fi,
                            di =
                              (fi = Et.getItemByXY(
                                Et.state.activeCoordinate,
                              )) !== null && fi !== void 0
                                ? fi
                                : { graphicalItem: Ur },
                            kr = di.graphicalItem,
                            qr = kr.item,
                            ti = qr === void 0 ? Nt : qr,
                            xi = kr.childIndex,
                            Kr = Xt(
                              Xt(Xt({}, ie.props), fn),
                              {},
                              { activeIndex: xi },
                            );
                          return [(0, l.cloneElement)(ti, Kr), null, null];
                        }
                      return Fn ? [Ur, null, null] : [Ur, null];
                    }),
                    Le(Et, "renderCustomized", function (Nt, Qt, oe) {
                      return (0, l.cloneElement)(
                        Nt,
                        Xt(
                          Xt(
                            { key: "recharts-customized-".concat(oe) },
                            Et.props,
                          ),
                          Et.state,
                        ),
                      );
                    }),
                    Le(Et, "renderMap", {
                      CartesianGrid: { handler: Yr, once: !0 },
                      ReferenceArea: { handler: Et.renderReferenceElement },
                      ReferenceLine: { handler: Yr },
                      ReferenceDot: { handler: Et.renderReferenceElement },
                      XAxis: { handler: Yr },
                      YAxis: { handler: Yr },
                      Brush: { handler: Et.renderBrush, once: !0 },
                      Bar: { handler: Et.renderGraphicChild },
                      Line: { handler: Et.renderGraphicChild },
                      Area: { handler: Et.renderGraphicChild },
                      Radar: { handler: Et.renderGraphicChild },
                      RadialBar: { handler: Et.renderGraphicChild },
                      Scatter: { handler: Et.renderGraphicChild },
                      Pie: { handler: Et.renderGraphicChild },
                      Funnel: { handler: Et.renderGraphicChild },
                      Tooltip: { handler: Et.renderCursor, once: !0 },
                      PolarGrid: { handler: Et.renderPolarGrid, once: !0 },
                      PolarAngleAxis: { handler: Et.renderPolarAxis },
                      PolarRadiusAxis: { handler: Et.renderPolarAxis },
                      Customized: { handler: Et.renderCustomized },
                    }),
                    (Et.clipPathId = "".concat(
                      (fe = Pe.id) !== null && fe !== void 0
                        ? fe
                        : (0, y.NF)("recharts"),
                      "-clip",
                    )),
                    (Et.throttleTriggeredAfterMouseMove = mt()(
                      Et.triggeredAfterMouseMove,
                      (pe = Pe.throttleDelay) !== null && pe !== void 0
                        ? pe
                        : 1e3 / 60,
                    )),
                    (Et.state = {}),
                    Et
                  );
                }
                return (
                  Bn(he, De),
                  be(he, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var fe, pe;
                        this.addListener(),
                          this.accessibilityManager.setDetails({
                            container: this.container,
                            offset: {
                              left:
                                (fe = this.props.margin.left) !== null &&
                                fe !== void 0
                                  ? fe
                                  : 0,
                              top:
                                (pe = this.props.margin.top) !== null &&
                                pe !== void 0
                                  ? pe
                                  : 0,
                            },
                            coordinateList: this.state.tooltipTicks,
                            mouseHandlerCallback: this.triggeredAfterMouseMove,
                            layout: this.props.layout,
                          }),
                          this.displayDefaultTooltip();
                      },
                    },
                    {
                      key: "displayDefaultTooltip",
                      value: function () {
                        var fe = this.props,
                          pe = fe.children,
                          Et = fe.data,
                          Nt = fe.height,
                          Qt = fe.layout,
                          oe = (0, I.BU)(pe, te.m);
                        if (oe) {
                          var ie = oe.props.defaultIndex;
                          if (
                            !(
                              typeof ie != "number" ||
                              ie < 0 ||
                              ie > this.state.tooltipTicks.length - 1
                            )
                          ) {
                            var Be =
                                this.state.tooltipTicks[ie] &&
                                this.state.tooltipTicks[ie].value,
                              Se = Wi(this.state, Et, ie, Be),
                              je = this.state.tooltipTicks[ie].coordinate,
                              Ve = (this.state.offset.top + Nt) / 2,
                              qe = Qt === "horizontal",
                              Ue = qe ? { x: je, y: Ve } : { y: je, x: Ve },
                              en = this.state.formattedGraphicalItems.find(
                                function (pn) {
                                  var vn = pn.item;
                                  return vn.type.name === "Scatter";
                                },
                              );
                            en &&
                              ((Ue = Xt(
                                Xt({}, Ue),
                                en.props.points[ie].tooltipPosition,
                              )),
                              (Se = en.props.points[ie].tooltipPayload));
                            var an = {
                              activeTooltipIndex: ie,
                              isTooltipActive: !0,
                              activeLabel: Be,
                              activePayload: Se,
                              activeCoordinate: Ue,
                            };
                            this.setState(an),
                              this.renderCursor(oe),
                              this.accessibilityManager.setIndex(ie);
                          }
                        }
                      },
                    },
                    {
                      key: "getSnapshotBeforeUpdate",
                      value: function (fe, pe) {
                        if (!this.props.accessibilityLayer) return null;
                        if (
                          (this.state.tooltipTicks !== pe.tooltipTicks &&
                            this.accessibilityManager.setDetails({
                              coordinateList: this.state.tooltipTicks,
                            }),
                          this.props.layout !== fe.layout &&
                            this.accessibilityManager.setDetails({
                              layout: this.props.layout,
                            }),
                          this.props.margin !== fe.margin)
                        ) {
                          var Et, Nt;
                          this.accessibilityManager.setDetails({
                            offset: {
                              left:
                                (Et = this.props.margin.left) !== null &&
                                Et !== void 0
                                  ? Et
                                  : 0,
                              top:
                                (Nt = this.props.margin.top) !== null &&
                                Nt !== void 0
                                  ? Nt
                                  : 0,
                            },
                          });
                        }
                        return null;
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function (fe) {
                        (0, I.OV)(
                          [(0, I.BU)(fe.children, te.m)],
                          [(0, I.BU)(this.props.children, te.m)],
                        ) || this.displayDefaultTooltip();
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        this.removeListener(),
                          this.throttleTriggeredAfterMouseMove.cancel();
                      },
                    },
                    {
                      key: "getTooltipEventType",
                      value: function () {
                        var fe = (0, I.BU)(this.props.children, te.m);
                        if (fe && typeof fe.props.shared == "boolean") {
                          var pe = fe.props.shared ? "axis" : "item";
                          return ae.indexOf(pe) >= 0 ? pe : Gt;
                        }
                        return Gt;
                      },
                    },
                    {
                      key: "getMouseInfo",
                      value: function (fe) {
                        if (!this.container) return null;
                        var pe = this.container,
                          Et = pe.getBoundingClientRect(),
                          Nt = (0, h.A3)(Et),
                          Qt = {
                            chartX: Math.round(fe.pageX - Nt.left),
                            chartY: Math.round(fe.pageY - Nt.top),
                          },
                          oe = Et.width / pe.offsetWidth || 1,
                          ie = this.inRange(Qt.chartX, Qt.chartY, oe);
                        if (!ie) return null;
                        var Be = this.state,
                          Se = Be.xAxisMap,
                          je = Be.yAxisMap,
                          Ve = this.getTooltipEventType(),
                          qe = li(
                            this.state,
                            this.props.data,
                            this.props.layout,
                            ie,
                          );
                        if (Ve !== "axis" && Se && je) {
                          var Ue = (0, y.lX)(Se).scale,
                            en = (0, y.lX)(je).scale,
                            an = Ue && Ue.invert ? Ue.invert(Qt.chartX) : null,
                            pn = en && en.invert ? en.invert(Qt.chartY) : null;
                          return Xt(
                            Xt({}, Qt),
                            {},
                            { xValue: an, yValue: pn },
                            qe,
                          );
                        }
                        return qe ? Xt(Xt({}, Qt), qe) : null;
                      },
                    },
                    {
                      key: "inRange",
                      value: function (fe, pe) {
                        var Et =
                            arguments.length > 2 && arguments[2] !== void 0
                              ? arguments[2]
                              : 1,
                          Nt = this.props.layout,
                          Qt = fe / Et,
                          oe = pe / Et;
                        if (Nt === "horizontal" || Nt === "vertical") {
                          var ie = this.state.offset,
                            Be =
                              Qt >= ie.left &&
                              Qt <= ie.left + ie.width &&
                              oe >= ie.top &&
                              oe <= ie.top + ie.height;
                          return Be ? { x: Qt, y: oe } : null;
                        }
                        var Se = this.state,
                          je = Se.angleAxisMap,
                          Ve = Se.radiusAxisMap;
                        if (je && Ve) {
                          var qe = (0, y.lX)(je);
                          return (0, Re.yy)({ x: Qt, y: oe }, qe);
                        }
                        return null;
                      },
                    },
                    {
                      key: "parseEventsOfWrapper",
                      value: function () {
                        var fe = this.props.children,
                          pe = this.getTooltipEventType(),
                          Et = (0, I.BU)(fe, te.m),
                          Nt = {};
                        Et &&
                          pe === "axis" &&
                          (Et.props.trigger === "click"
                            ? (Nt = { onClick: this.handleClick })
                            : (Nt = {
                                onMouseEnter: this.handleMouseEnter,
                                onDoubleClick: this.handleDoubleClick,
                                onMouseMove: this.handleMouseMove,
                                onMouseLeave: this.handleMouseLeave,
                                onTouchMove: this.handleTouchMove,
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd,
                                onContextMenu: this.handleContextMenu,
                              }));
                        var Qt = (0, Rn._U)(this.props, this.handleOuterEvent);
                        return Xt(Xt({}, Qt), Nt);
                      },
                    },
                    {
                      key: "addListener",
                      value: function () {
                        Pn.on(tn, this.handleReceiveSyncEvent);
                      },
                    },
                    {
                      key: "removeListener",
                      value: function () {
                        Pn.removeListener(tn, this.handleReceiveSyncEvent);
                      },
                    },
                    {
                      key: "filterFormatItem",
                      value: function (fe, pe, Et) {
                        for (
                          var Nt = this.state.formattedGraphicalItems,
                            Qt = 0,
                            oe = Nt.length;
                          Qt < oe;
                          Qt++
                        ) {
                          var ie = Nt[Qt];
                          if (
                            ie.item === fe ||
                            ie.props.key === fe.key ||
                            (pe === (0, I.Mn)(ie.item.type) &&
                              Et === ie.childIndex)
                          )
                            return ie;
                        }
                        return null;
                      },
                    },
                    {
                      key: "renderClipPath",
                      value: function () {
                        var fe = this.clipPathId,
                          pe = this.state.offset,
                          Et = pe.left,
                          Nt = pe.top,
                          Qt = pe.height,
                          oe = pe.width;
                        return l.createElement(
                          "defs",
                          null,
                          l.createElement(
                            "clipPath",
                            { id: fe },
                            l.createElement("rect", {
                              x: Et,
                              y: Nt,
                              height: Qt,
                              width: oe,
                            }),
                          ),
                        );
                      },
                    },
                    {
                      key: "getXScales",
                      value: function () {
                        var fe = this.state.xAxisMap;
                        return fe
                          ? Object.entries(fe).reduce(function (pe, Et) {
                              var Nt = ui(Et, 2),
                                Qt = Nt[0],
                                oe = Nt[1];
                              return Xt(Xt({}, pe), {}, Le({}, Qt, oe.scale));
                            }, {})
                          : null;
                      },
                    },
                    {
                      key: "getYScales",
                      value: function () {
                        var fe = this.state.yAxisMap;
                        return fe
                          ? Object.entries(fe).reduce(function (pe, Et) {
                              var Nt = ui(Et, 2),
                                Qt = Nt[0],
                                oe = Nt[1];
                              return Xt(Xt({}, pe), {}, Le({}, Qt, oe.scale));
                            }, {})
                          : null;
                      },
                    },
                    {
                      key: "getXScaleByAxisId",
                      value: function (fe) {
                        var pe;
                        return (pe = this.state.xAxisMap) === null ||
                          pe === void 0 ||
                          (pe = pe[fe]) === null ||
                          pe === void 0
                          ? void 0
                          : pe.scale;
                      },
                    },
                    {
                      key: "getYScaleByAxisId",
                      value: function (fe) {
                        var pe;
                        return (pe = this.state.yAxisMap) === null ||
                          pe === void 0 ||
                          (pe = pe[fe]) === null ||
                          pe === void 0
                          ? void 0
                          : pe.scale;
                      },
                    },
                    {
                      key: "getItemByXY",
                      value: function (fe) {
                        var pe = this.state,
                          Et = pe.formattedGraphicalItems,
                          Nt = pe.activeItem;
                        if (Et && Et.length)
                          for (var Qt = 0, oe = Et.length; Qt < oe; Qt++) {
                            var ie = Et[Qt],
                              Be = ie.props,
                              Se = ie.item,
                              je =
                                Se.type.defaultProps !== void 0
                                  ? Xt(Xt({}, Se.type.defaultProps), Se.props)
                                  : Se.props,
                              Ve = (0, I.Mn)(Se.type);
                            if (Ve === "Bar") {
                              var qe = (Be.data || []).find(function (pn) {
                                return (0, vt.J)(fe, pn);
                              });
                              if (qe) return { graphicalItem: ie, payload: qe };
                            } else if (Ve === "RadialBar") {
                              var Ue = (Be.data || []).find(function (pn) {
                                return (0, Re.yy)(fe, pn);
                              });
                              if (Ue) return { graphicalItem: ie, payload: Ue };
                            } else if (
                              (0, tr.NE)(ie, Nt) ||
                              (0, tr.nZ)(ie, Nt) ||
                              (0, tr.xQ)(ie, Nt)
                            ) {
                              var en = (0, tr.GG)({
                                  graphicalItem: ie,
                                  activeTooltipItem: Nt,
                                  itemData: je.data,
                                }),
                                an =
                                  je.activeIndex === void 0
                                    ? en
                                    : je.activeIndex;
                              return {
                                graphicalItem: Xt(
                                  Xt({}, ie),
                                  {},
                                  { childIndex: an },
                                ),
                                payload: (0, tr.xQ)(ie, Nt)
                                  ? je.data[en]
                                  : ie.props.data[en],
                              };
                            }
                          }
                        return null;
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var fe = this;
                        if (!(0, I.Me)(this)) return null;
                        var pe = this.props,
                          Et = pe.children,
                          Nt = pe.className,
                          Qt = pe.width,
                          oe = pe.height,
                          ie = pe.style,
                          Be = pe.compact,
                          Se = pe.title,
                          je = pe.desc,
                          Ve = Dt(pe, Xr),
                          qe = (0, I.J9)(Ve, !1);
                        if (Be)
                          return l.createElement(
                            Gr.DR,
                            {
                              state: this.state,
                              width: this.props.width,
                              height: this.props.height,
                              clipPathId: this.clipPathId,
                            },
                            l.createElement(
                              Ft.u,
                              Mr({}, qe, {
                                width: Qt,
                                height: oe,
                                title: Se,
                                desc: je,
                              }),
                              this.renderClipPath(),
                              (0, I.ee)(Et, this.renderMap),
                            ),
                          );
                        if (this.props.accessibilityLayer) {
                          var Ue, en;
                          (qe.tabIndex =
                            (Ue = this.props.tabIndex) !== null && Ue !== void 0
                              ? Ue
                              : 0),
                            (qe.role =
                              (en = this.props.role) !== null && en !== void 0
                                ? en
                                : "application"),
                            (qe.onKeyDown = function (pn) {
                              fe.accessibilityManager.keyboardEvent(pn);
                            }),
                            (qe.onFocus = function () {
                              fe.accessibilityManager.focus();
                            });
                        }
                        var an = this.parseEventsOfWrapper();
                        return l.createElement(
                          Gr.DR,
                          {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId,
                          },
                          l.createElement(
                            "div",
                            Mr(
                              {
                                className: (0, et.A)("recharts-wrapper", Nt),
                                style: Xt(
                                  {
                                    position: "relative",
                                    cursor: "default",
                                    width: Qt,
                                    height: oe,
                                  },
                                  ie,
                                ),
                              },
                              an,
                              {
                                ref: function (vn) {
                                  fe.container = vn;
                                },
                              },
                            ),
                            l.createElement(
                              Ft.u,
                              Mr({}, qe, {
                                width: Qt,
                                height: oe,
                                title: Se,
                                desc: je,
                                style: Nr,
                              }),
                              this.renderClipPath(),
                              (0, I.ee)(Et, this.renderMap),
                            ),
                            this.renderLegend(),
                            this.renderTooltip(),
                          ),
                        );
                      },
                    },
                  ])
                );
              })(l.Component);
            Le(Qe, "displayName", w),
              Le(
                Qe,
                "defaultProps",
                Xt(
                  {
                    layout: "horizontal",
                    stackOffset: "none",
                    barCategoryGap: "10%",
                    barGap: 4,
                    margin: { top: 5, right: 5, bottom: 5, left: 5 },
                    reverseStackOrder: !1,
                    syncMethod: "index",
                  },
                  Oe,
                ),
              ),
              Le(Qe, "getDerivedStateFromProps", function (De, he) {
                var Pe = De.dataKey,
                  fe = De.data,
                  pe = De.children,
                  Et = De.width,
                  Nt = De.height,
                  Qt = De.layout,
                  oe = De.stackOffset,
                  ie = De.margin,
                  Be = he.dataStartIndex,
                  Se = he.dataEndIndex;
                if (he.updateId === void 0) {
                  var je = si(De);
                  return Xt(
                    Xt(
                      Xt({}, je),
                      {},
                      { updateId: 0 },
                      Ae(Xt(Xt({ props: De }, je), {}, { updateId: 0 }), he),
                    ),
                    {},
                    {
                      prevDataKey: Pe,
                      prevData: fe,
                      prevWidth: Et,
                      prevHeight: Nt,
                      prevLayout: Qt,
                      prevStackOffset: oe,
                      prevMargin: ie,
                      prevChildren: pe,
                    },
                  );
                }
                if (
                  Pe !== he.prevDataKey ||
                  fe !== he.prevData ||
                  Et !== he.prevWidth ||
                  Nt !== he.prevHeight ||
                  Qt !== he.prevLayout ||
                  oe !== he.prevStackOffset ||
                  !(0, nn.b)(ie, he.prevMargin)
                ) {
                  var Ve = si(De),
                    qe = {
                      chartX: he.chartX,
                      chartY: he.chartY,
                      isTooltipActive: he.isTooltipActive,
                    },
                    Ue = Xt(
                      Xt({}, li(he, fe, Qt)),
                      {},
                      { updateId: he.updateId + 1 },
                    ),
                    en = Xt(Xt(Xt({}, Ve), qe), Ue);
                  return Xt(
                    Xt(Xt({}, en), Ae(Xt({ props: De }, en), he)),
                    {},
                    {
                      prevDataKey: Pe,
                      prevData: fe,
                      prevWidth: Et,
                      prevHeight: Nt,
                      prevLayout: Qt,
                      prevStackOffset: oe,
                      prevMargin: ie,
                      prevChildren: pe,
                    },
                  );
                }
                if (!(0, I.OV)(pe, he.prevChildren)) {
                  var an,
                    pn,
                    vn,
                    Fn,
                    ar = (0, I.BU)(pe, o),
                    Ze =
                      ar &&
                      (an =
                        (pn = ar.props) === null || pn === void 0
                          ? void 0
                          : pn.startIndex) !== null &&
                      an !== void 0
                        ? an
                        : Be,
                    Ln =
                      ar &&
                      (vn =
                        (Fn = ar.props) === null || Fn === void 0
                          ? void 0
                          : Fn.endIndex) !== null &&
                      vn !== void 0
                        ? vn
                        : Se,
                    or = Ze !== Be || Ln !== Se,
                    kn = !H()(fe),
                    wr = kn && !or ? he.updateId : he.updateId + 1;
                  return Xt(
                    Xt(
                      { updateId: wr },
                      Ae(
                        Xt(
                          Xt({ props: De }, he),
                          {},
                          {
                            updateId: wr,
                            dataStartIndex: Ze,
                            dataEndIndex: Ln,
                          },
                        ),
                        he,
                      ),
                    ),
                    {},
                    { prevChildren: pe, dataStartIndex: Ze, dataEndIndex: Ln },
                  );
                }
                return null;
              }),
              Le(Qe, "renderActiveDot", function (De, he, Pe) {
                var fe;
                return (
                  (0, l.isValidElement)(De)
                    ? (fe = (0, l.cloneElement)(De, he))
                    : U()(De)
                      ? (fe = De(he))
                      : (fe = l.createElement(Tt.c, he)),
                  l.createElement(
                    nt.W,
                    { className: "recharts-active-dot", key: Pe },
                    fe,
                  )
                );
              });
            var ze = (0, l.forwardRef)(function (he, Pe) {
              return l.createElement(Qe, Mr({}, he, { ref: Pe }));
            });
            return (ze.displayName = Qe.displayName), ze;
          };
      },
      72040: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { f: () => l });
        var l = function (H) {
          return null;
        };
        l.displayName = "Cell";
      },
      25068: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { J: () => f });
        var l = r(90626),
          F = r(64609),
          H = r.n(F),
          it = r(3316),
          U = r.n(it),
          tt = r(97827),
          G = r.n(tt),
          lt = r(34164),
          ct = r(34656),
          at = r(93563),
          st = r(96714),
          V = r(90134);
        function mt(c) {
          "@babel/helpers - typeof";
          return (
            (mt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (P) {
                    return typeof P;
                  }
                : function (P) {
                    return P &&
                      typeof Symbol == "function" &&
                      P.constructor === Symbol &&
                      P !== Symbol.prototype
                      ? "symbol"
                      : typeof P;
                  }),
            mt(c)
          );
        }
        var et = ["offset"];
        function St(c) {
          return kt(c) || te(c) || nt(c) || Ft();
        }
        function Ft() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function nt(c, P) {
          if (c) {
            if (typeof c == "string") return Tt(c, P);
            var D = Object.prototype.toString.call(c).slice(8, -1);
            if (
              (D === "Object" && c.constructor && (D = c.constructor.name),
              D === "Map" || D === "Set")
            )
              return Array.from(c);
            if (
              D === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)
            )
              return Tt(c, P);
          }
        }
        function te(c) {
          if (
            (typeof Symbol < "u" && c[Symbol.iterator] != null) ||
            c["@@iterator"] != null
          )
            return Array.from(c);
        }
        function kt(c) {
          if (Array.isArray(c)) return Tt(c);
        }
        function Tt(c, P) {
          (P == null || P > c.length) && (P = c.length);
          for (var D = 0, x = new Array(P); D < P; D++) x[D] = c[D];
          return x;
        }
        function vt(c, P) {
          if (c == null) return {};
          var D = I(c, P),
            x,
            k;
          if (Object.getOwnPropertySymbols) {
            var Y = Object.getOwnPropertySymbols(c);
            for (k = 0; k < Y.length; k++)
              (x = Y[k]),
                !(P.indexOf(x) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(c, x) &&
                  (D[x] = c[x]);
          }
          return D;
        }
        function I(c, P) {
          if (c == null) return {};
          var D = {};
          for (var x in c)
            if (Object.prototype.hasOwnProperty.call(c, x)) {
              if (P.indexOf(x) >= 0) continue;
              D[x] = c[x];
            }
          return D;
        }
        function m(c, P) {
          var D = Object.keys(c);
          if (Object.getOwnPropertySymbols) {
            var x = Object.getOwnPropertySymbols(c);
            P &&
              (x = x.filter(function (k) {
                return Object.getOwnPropertyDescriptor(c, k).enumerable;
              })),
              D.push.apply(D, x);
          }
          return D;
        }
        function S(c) {
          for (var P = 1; P < arguments.length; P++) {
            var D = arguments[P] != null ? arguments[P] : {};
            P % 2
              ? m(Object(D), !0).forEach(function (x) {
                  g(c, x, D[x]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    c,
                    Object.getOwnPropertyDescriptors(D),
                  )
                : m(Object(D)).forEach(function (x) {
                    Object.defineProperty(
                      c,
                      x,
                      Object.getOwnPropertyDescriptor(D, x),
                    );
                  });
          }
          return c;
        }
        function g(c, P, D) {
          return (
            (P = y(P)),
            P in c
              ? Object.defineProperty(c, P, {
                  value: D,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (c[P] = D),
            c
          );
        }
        function y(c) {
          var P = rt(c, "string");
          return mt(P) == "symbol" ? P : P + "";
        }
        function rt(c, P) {
          if (mt(c) != "object" || !c) return c;
          var D = c[Symbol.toPrimitive];
          if (D !== void 0) {
            var x = D.call(c, P || "default");
            if (mt(x) != "object") return x;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (P === "string" ? String : Number)(c);
        }
        function ot() {
          return (
            (ot = Object.assign
              ? Object.assign.bind()
              : function (c) {
                  for (var P = 1; P < arguments.length; P++) {
                    var D = arguments[P];
                    for (var x in D)
                      Object.prototype.hasOwnProperty.call(D, x) &&
                        (c[x] = D[x]);
                  }
                  return c;
                }),
            ot.apply(this, arguments)
          );
        }
        var _t = function (P) {
            var D = P.value,
              x = P.formatter,
              k = H()(P.children) ? D : P.children;
            return U()(x) ? x(k) : k;
          },
          j = function (P, D) {
            var x = (0, st.sA)(D - P),
              k = Math.min(Math.abs(D - P), 360);
            return x * k;
          },
          N = function (P, D, x) {
            var k = P.position,
              Y = P.viewBox,
              J = P.offset,
              Mt = P.className,
              q = Y,
              yt = q.cx,
              ft = q.cy,
              bt = q.innerRadius,
              Ut = q.outerRadius,
              Ht = q.startAngle,
              ut = q.endAngle,
              o = q.clockWise,
              h = (bt + Ut) / 2,
              O = j(Ht, ut),
              d = O >= 0 ? 1 : -1,
              R,
              Q;
            k === "insideStart"
              ? ((R = Ht + d * J), (Q = o))
              : k === "insideEnd"
                ? ((R = ut - d * J), (Q = !o))
                : k === "end" && ((R = ut + d * J), (Q = o)),
              (Q = O <= 0 ? Q : !Q);
            var wt = (0, V.IZ)(yt, ft, h, R),
              zt = (0, V.IZ)(yt, ft, h, R + (Q ? 1 : -1) * 359),
              Vt = "M"
                .concat(wt.x, ",")
                .concat(
                  wt.y,
                  `
    A`,
                )
                .concat(h, ",")
                .concat(h, ",0,1,")
                .concat(
                  Q ? 0 : 1,
                  `,
    `,
                )
                .concat(zt.x, ",")
                .concat(zt.y),
              se = H()(P.id) ? (0, st.NF)("recharts-radial-line-") : P.id;
            return l.createElement(
              "text",
              ot({}, x, {
                dominantBaseline: "central",
                className: (0, lt.A)("recharts-radial-bar-label", Mt),
              }),
              l.createElement(
                "defs",
                null,
                l.createElement("path", { id: se, d: Vt }),
              ),
              l.createElement("textPath", { xlinkHref: "#".concat(se) }, D),
            );
          },
          M = function (P) {
            var D = P.viewBox,
              x = P.offset,
              k = P.position,
              Y = D,
              J = Y.cx,
              Mt = Y.cy,
              q = Y.innerRadius,
              yt = Y.outerRadius,
              ft = Y.startAngle,
              bt = Y.endAngle,
              Ut = (ft + bt) / 2;
            if (k === "outside") {
              var Ht = (0, V.IZ)(J, Mt, yt + x, Ut),
                ut = Ht.x,
                o = Ht.y;
              return {
                x: ut,
                y: o,
                textAnchor: ut >= J ? "start" : "end",
                verticalAnchor: "middle",
              };
            }
            if (k === "center")
              return {
                x: J,
                y: Mt,
                textAnchor: "middle",
                verticalAnchor: "middle",
              };
            if (k === "centerTop")
              return {
                x: J,
                y: Mt,
                textAnchor: "middle",
                verticalAnchor: "start",
              };
            if (k === "centerBottom")
              return {
                x: J,
                y: Mt,
                textAnchor: "middle",
                verticalAnchor: "end",
              };
            var h = (q + yt) / 2,
              O = (0, V.IZ)(J, Mt, h, Ut),
              d = O.x,
              R = O.y;
            return {
              x: d,
              y: R,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          },
          X = function (P) {
            var D = P.viewBox,
              x = P.parentViewBox,
              k = P.offset,
              Y = P.position,
              J = D,
              Mt = J.x,
              q = J.y,
              yt = J.width,
              ft = J.height,
              bt = ft >= 0 ? 1 : -1,
              Ut = bt * k,
              Ht = bt > 0 ? "end" : "start",
              ut = bt > 0 ? "start" : "end",
              o = yt >= 0 ? 1 : -1,
              h = o * k,
              O = o > 0 ? "end" : "start",
              d = o > 0 ? "start" : "end";
            if (Y === "top") {
              var R = {
                x: Mt + yt / 2,
                y: q - bt * k,
                textAnchor: "middle",
                verticalAnchor: Ht,
              };
              return S(
                S({}, R),
                x ? { height: Math.max(q - x.y, 0), width: yt } : {},
              );
            }
            if (Y === "bottom") {
              var Q = {
                x: Mt + yt / 2,
                y: q + ft + Ut,
                textAnchor: "middle",
                verticalAnchor: ut,
              };
              return S(
                S({}, Q),
                x
                  ? {
                      height: Math.max(x.y + x.height - (q + ft), 0),
                      width: yt,
                    }
                  : {},
              );
            }
            if (Y === "left") {
              var wt = {
                x: Mt - h,
                y: q + ft / 2,
                textAnchor: O,
                verticalAnchor: "middle",
              };
              return S(
                S({}, wt),
                x ? { width: Math.max(wt.x - x.x, 0), height: ft } : {},
              );
            }
            if (Y === "right") {
              var zt = {
                x: Mt + yt + h,
                y: q + ft / 2,
                textAnchor: d,
                verticalAnchor: "middle",
              };
              return S(
                S({}, zt),
                x
                  ? { width: Math.max(x.x + x.width - zt.x, 0), height: ft }
                  : {},
              );
            }
            var Vt = x ? { width: yt, height: ft } : {};
            return Y === "insideLeft"
              ? S(
                  {
                    x: Mt + h,
                    y: q + ft / 2,
                    textAnchor: d,
                    verticalAnchor: "middle",
                  },
                  Vt,
                )
              : Y === "insideRight"
                ? S(
                    {
                      x: Mt + yt - h,
                      y: q + ft / 2,
                      textAnchor: O,
                      verticalAnchor: "middle",
                    },
                    Vt,
                  )
                : Y === "insideTop"
                  ? S(
                      {
                        x: Mt + yt / 2,
                        y: q + Ut,
                        textAnchor: "middle",
                        verticalAnchor: ut,
                      },
                      Vt,
                    )
                  : Y === "insideBottom"
                    ? S(
                        {
                          x: Mt + yt / 2,
                          y: q + ft - Ut,
                          textAnchor: "middle",
                          verticalAnchor: Ht,
                        },
                        Vt,
                      )
                    : Y === "insideTopLeft"
                      ? S(
                          {
                            x: Mt + h,
                            y: q + Ut,
                            textAnchor: d,
                            verticalAnchor: ut,
                          },
                          Vt,
                        )
                      : Y === "insideTopRight"
                        ? S(
                            {
                              x: Mt + yt - h,
                              y: q + Ut,
                              textAnchor: O,
                              verticalAnchor: ut,
                            },
                            Vt,
                          )
                        : Y === "insideBottomLeft"
                          ? S(
                              {
                                x: Mt + h,
                                y: q + ft - Ut,
                                textAnchor: d,
                                verticalAnchor: Ht,
                              },
                              Vt,
                            )
                          : Y === "insideBottomRight"
                            ? S(
                                {
                                  x: Mt + yt - h,
                                  y: q + ft - Ut,
                                  textAnchor: O,
                                  verticalAnchor: Ht,
                                },
                                Vt,
                              )
                            : G()(Y) &&
                                ((0, st.Et)(Y.x) || (0, st._3)(Y.x)) &&
                                ((0, st.Et)(Y.y) || (0, st._3)(Y.y))
                              ? S(
                                  {
                                    x: Mt + (0, st.F4)(Y.x, yt),
                                    y: q + (0, st.F4)(Y.y, ft),
                                    textAnchor: "end",
                                    verticalAnchor: "end",
                                  },
                                  Vt,
                                )
                              : S(
                                  {
                                    x: Mt + yt / 2,
                                    y: q + ft / 2,
                                    textAnchor: "middle",
                                    verticalAnchor: "middle",
                                  },
                                  Vt,
                                );
          },
          v = function (P) {
            return "cx" in P && (0, st.Et)(P.cx);
          };
        function f(c) {
          var P = c.offset,
            D = P === void 0 ? 5 : P,
            x = vt(c, et),
            k = S({ offset: D }, x),
            Y = k.viewBox,
            J = k.position,
            Mt = k.value,
            q = k.children,
            yt = k.content,
            ft = k.className,
            bt = ft === void 0 ? "" : ft,
            Ut = k.textBreakAll;
          if (
            !Y ||
            (H()(Mt) && H()(q) && !(0, l.isValidElement)(yt) && !U()(yt))
          )
            return null;
          if ((0, l.isValidElement)(yt)) return (0, l.cloneElement)(yt, k);
          var Ht;
          if (U()(yt)) {
            if (((Ht = (0, l.createElement)(yt, k)), (0, l.isValidElement)(Ht)))
              return Ht;
          } else Ht = _t(k);
          var ut = v(Y),
            o = (0, at.J9)(k, !0);
          if (ut && (J === "insideStart" || J === "insideEnd" || J === "end"))
            return N(k, Ht, o);
          var h = ut ? M(k) : X(k);
          return l.createElement(
            ct.E,
            ot({ className: (0, lt.A)("recharts-label", bt) }, o, h, {
              breakAll: Ut,
            }),
            Ht,
          );
        }
        f.displayName = "Label";
        var E = function (P) {
            var D = P.cx,
              x = P.cy,
              k = P.angle,
              Y = P.startAngle,
              J = P.endAngle,
              Mt = P.r,
              q = P.radius,
              yt = P.innerRadius,
              ft = P.outerRadius,
              bt = P.x,
              Ut = P.y,
              Ht = P.top,
              ut = P.left,
              o = P.width,
              h = P.height,
              O = P.clockWise,
              d = P.labelViewBox;
            if (d) return d;
            if ((0, st.Et)(o) && (0, st.Et)(h)) {
              if ((0, st.Et)(bt) && (0, st.Et)(Ut))
                return { x: bt, y: Ut, width: o, height: h };
              if ((0, st.Et)(Ht) && (0, st.Et)(ut))
                return { x: Ht, y: ut, width: o, height: h };
            }
            return (0, st.Et)(bt) && (0, st.Et)(Ut)
              ? { x: bt, y: Ut, width: 0, height: 0 }
              : (0, st.Et)(D) && (0, st.Et)(x)
                ? {
                    cx: D,
                    cy: x,
                    startAngle: Y || k || 0,
                    endAngle: J || k || 0,
                    innerRadius: yt || 0,
                    outerRadius: ft || q || Mt || 0,
                    clockWise: O,
                  }
                : P.viewBox
                  ? P.viewBox
                  : {};
          },
          _ = function (P, D) {
            return P
              ? P === !0
                ? l.createElement(f, { key: "label-implicit", viewBox: D })
                : (0, st.vh)(P)
                  ? l.createElement(f, {
                      key: "label-implicit",
                      viewBox: D,
                      value: P,
                    })
                  : (0, l.isValidElement)(P)
                    ? P.type === f
                      ? (0, l.cloneElement)(P, {
                          key: "label-implicit",
                          viewBox: D,
                        })
                      : l.createElement(f, {
                          key: "label-implicit",
                          content: P,
                          viewBox: D,
                        })
                    : U()(P)
                      ? l.createElement(f, {
                          key: "label-implicit",
                          content: P,
                          viewBox: D,
                        })
                      : G()(P)
                        ? l.createElement(
                            f,
                            ot({ viewBox: D }, P, { key: "label-implicit" }),
                          )
                        : null
              : null;
          },
          A = function (P, D) {
            var x =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0;
            if (!P || (!P.children && x && !P.label)) return null;
            var k = P.children,
              Y = E(P),
              J = (0, at.aS)(k, f).map(function (q, yt) {
                return (0, l.cloneElement)(q, {
                  viewBox: D || Y,
                  key: "label-".concat(yt),
                });
              });
            if (!x) return J;
            var Mt = _(P.label, D || Y);
            return [Mt].concat(St(J));
          };
        (f.parseViewBox = E), (f.renderCallByParent = A);
      },
      12244: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { Z: () => M });
        var l = r(90626),
          F = r(64609),
          H = r.n(F),
          it = r(97827),
          U = r.n(it),
          tt = r(3316),
          G = r.n(tt),
          lt = r(73912),
          ct = r.n(lt),
          at = r(25068),
          st = r(75055),
          V = r(93563),
          mt = r(61195);
        function et(f) {
          "@babel/helpers - typeof";
          return (
            (et =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (E) {
                    return typeof E;
                  }
                : function (E) {
                    return E &&
                      typeof Symbol == "function" &&
                      E.constructor === Symbol &&
                      E !== Symbol.prototype
                      ? "symbol"
                      : typeof E;
                  }),
            et(f)
          );
        }
        var St = ["valueAccessor"],
          Ft = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
        function nt(f) {
          return vt(f) || Tt(f) || kt(f) || te();
        }
        function te() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function kt(f, E) {
          if (f) {
            if (typeof f == "string") return I(f, E);
            var _ = Object.prototype.toString.call(f).slice(8, -1);
            if (
              (_ === "Object" && f.constructor && (_ = f.constructor.name),
              _ === "Map" || _ === "Set")
            )
              return Array.from(f);
            if (
              _ === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
            )
              return I(f, E);
          }
        }
        function Tt(f) {
          if (
            (typeof Symbol < "u" && f[Symbol.iterator] != null) ||
            f["@@iterator"] != null
          )
            return Array.from(f);
        }
        function vt(f) {
          if (Array.isArray(f)) return I(f);
        }
        function I(f, E) {
          (E == null || E > f.length) && (E = f.length);
          for (var _ = 0, A = new Array(E); _ < E; _++) A[_] = f[_];
          return A;
        }
        function m() {
          return (
            (m = Object.assign
              ? Object.assign.bind()
              : function (f) {
                  for (var E = 1; E < arguments.length; E++) {
                    var _ = arguments[E];
                    for (var A in _)
                      Object.prototype.hasOwnProperty.call(_, A) &&
                        (f[A] = _[A]);
                  }
                  return f;
                }),
            m.apply(this, arguments)
          );
        }
        function S(f, E) {
          var _ = Object.keys(f);
          if (Object.getOwnPropertySymbols) {
            var A = Object.getOwnPropertySymbols(f);
            E &&
              (A = A.filter(function (c) {
                return Object.getOwnPropertyDescriptor(f, c).enumerable;
              })),
              _.push.apply(_, A);
          }
          return _;
        }
        function g(f) {
          for (var E = 1; E < arguments.length; E++) {
            var _ = arguments[E] != null ? arguments[E] : {};
            E % 2
              ? S(Object(_), !0).forEach(function (A) {
                  y(f, A, _[A]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    f,
                    Object.getOwnPropertyDescriptors(_),
                  )
                : S(Object(_)).forEach(function (A) {
                    Object.defineProperty(
                      f,
                      A,
                      Object.getOwnPropertyDescriptor(_, A),
                    );
                  });
          }
          return f;
        }
        function y(f, E, _) {
          return (
            (E = rt(E)),
            E in f
              ? Object.defineProperty(f, E, {
                  value: _,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (f[E] = _),
            f
          );
        }
        function rt(f) {
          var E = ot(f, "string");
          return et(E) == "symbol" ? E : E + "";
        }
        function ot(f, E) {
          if (et(f) != "object" || !f) return f;
          var _ = f[Symbol.toPrimitive];
          if (_ !== void 0) {
            var A = _.call(f, E || "default");
            if (et(A) != "object") return A;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (E === "string" ? String : Number)(f);
        }
        function _t(f, E) {
          if (f == null) return {};
          var _ = j(f, E),
            A,
            c;
          if (Object.getOwnPropertySymbols) {
            var P = Object.getOwnPropertySymbols(f);
            for (c = 0; c < P.length; c++)
              (A = P[c]),
                !(E.indexOf(A) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(f, A) &&
                  (_[A] = f[A]);
          }
          return _;
        }
        function j(f, E) {
          if (f == null) return {};
          var _ = {};
          for (var A in f)
            if (Object.prototype.hasOwnProperty.call(f, A)) {
              if (E.indexOf(A) >= 0) continue;
              _[A] = f[A];
            }
          return _;
        }
        var N = function (E) {
          return Array.isArray(E.value) ? ct()(E.value) : E.value;
        };
        function M(f) {
          var E = f.valueAccessor,
            _ = E === void 0 ? N : E,
            A = _t(f, St),
            c = A.data,
            P = A.dataKey,
            D = A.clockWise,
            x = A.id,
            k = A.textBreakAll,
            Y = _t(A, Ft);
          return !c || !c.length
            ? null
            : l.createElement(
                st.W,
                { className: "recharts-label-list" },
                c.map(function (J, Mt) {
                  var q = H()(P) ? _(J, Mt) : (0, mt.kr)(J && J.payload, P),
                    yt = H()(x) ? {} : { id: "".concat(x, "-").concat(Mt) };
                  return l.createElement(
                    at.J,
                    m({}, (0, V.J9)(J, !0), Y, yt, {
                      parentViewBox: J.parentViewBox,
                      value: q,
                      textBreakAll: k,
                      viewBox: at.J.parseViewBox(
                        H()(D) ? J : g(g({}, J), {}, { clockWise: D }),
                      ),
                      key: "label-".concat(Mt),
                      index: Mt,
                    }),
                  );
                }),
              );
        }
        M.displayName = "LabelList";
        function X(f, E) {
          return f
            ? f === !0
              ? l.createElement(M, { key: "labelList-implicit", data: E })
              : l.isValidElement(f) || G()(f)
                ? l.createElement(M, {
                    key: "labelList-implicit",
                    data: E,
                    content: f,
                  })
                : U()(f)
                  ? l.createElement(
                      M,
                      m({ data: E }, f, { key: "labelList-implicit" }),
                    )
                  : null
            : null;
        }
        function v(f, E) {
          var _ =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
          if (!f || (!f.children && _ && !f.label)) return null;
          var A = f.children,
            c = (0, V.aS)(A, M).map(function (D, x) {
              return (0, l.cloneElement)(D, {
                data: E,
                key: "labelList-".concat(x),
              });
            });
          if (!_) return c;
          var P = X(f.label, E);
          return [P].concat(nt(c));
        }
        M.renderCallByParent = v;
      },
      75620: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { s: () => Ht });
        var l = r(90626),
          F = r(3316),
          H = r.n(F),
          it = r(34164),
          U = r(27664),
          tt = r(67125),
          G = r(17134),
          lt = r(43998);
        function ct(ut) {
          "@babel/helpers - typeof";
          return (
            (ct =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      typeof Symbol == "function" &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            ct(ut)
          );
        }
        function at() {
          return (
            (at = Object.assign
              ? Object.assign.bind()
              : function (ut) {
                  for (var o = 1; o < arguments.length; o++) {
                    var h = arguments[o];
                    for (var O in h)
                      Object.prototype.hasOwnProperty.call(h, O) &&
                        (ut[O] = h[O]);
                  }
                  return ut;
                }),
            at.apply(this, arguments)
          );
        }
        function st(ut, o) {
          var h = Object.keys(ut);
          if (Object.getOwnPropertySymbols) {
            var O = Object.getOwnPropertySymbols(ut);
            o &&
              (O = O.filter(function (d) {
                return Object.getOwnPropertyDescriptor(ut, d).enumerable;
              })),
              h.push.apply(h, O);
          }
          return h;
        }
        function V(ut) {
          for (var o = 1; o < arguments.length; o++) {
            var h = arguments[o] != null ? arguments[o] : {};
            o % 2
              ? st(Object(h), !0).forEach(function (O) {
                  m(ut, O, h[O]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    ut,
                    Object.getOwnPropertyDescriptors(h),
                  )
                : st(Object(h)).forEach(function (O) {
                    Object.defineProperty(
                      ut,
                      O,
                      Object.getOwnPropertyDescriptor(h, O),
                    );
                  });
          }
          return ut;
        }
        function mt(ut, o) {
          if (!(ut instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function et(ut, o) {
          for (var h = 0; h < o.length; h++) {
            var O = o[h];
            (O.enumerable = O.enumerable || !1),
              (O.configurable = !0),
              "value" in O && (O.writable = !0),
              Object.defineProperty(ut, S(O.key), O);
          }
        }
        function St(ut, o, h) {
          return (
            o && et(ut.prototype, o),
            h && et(ut, h),
            Object.defineProperty(ut, "prototype", { writable: !1 }),
            ut
          );
        }
        function Ft(ut, o, h) {
          return (
            (o = Tt(o)),
            nt(
              ut,
              kt()
                ? Reflect.construct(o, h || [], Tt(ut).constructor)
                : o.apply(ut, h),
            )
          );
        }
        function nt(ut, o) {
          if (o && (ct(o) === "object" || typeof o == "function")) return o;
          if (o !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return te(ut);
        }
        function te(ut) {
          if (ut === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return ut;
        }
        function kt() {
          try {
            var ut = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (kt = function () {
            return !!ut;
          })();
        }
        function Tt(ut) {
          return (
            (Tt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (h) {
                  return h.__proto__ || Object.getPrototypeOf(h);
                }),
            Tt(ut)
          );
        }
        function vt(ut, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (ut.prototype = Object.create(o && o.prototype, {
            constructor: { value: ut, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(ut, "prototype", { writable: !1 }),
            o && I(ut, o);
        }
        function I(ut, o) {
          return (
            (I = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (O, d) {
                  return (O.__proto__ = d), O;
                }),
            I(ut, o)
          );
        }
        function m(ut, o, h) {
          return (
            (o = S(o)),
            o in ut
              ? Object.defineProperty(ut, o, {
                  value: h,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (ut[o] = h),
            ut
          );
        }
        function S(ut) {
          var o = g(ut, "string");
          return ct(o) == "symbol" ? o : o + "";
        }
        function g(ut, o) {
          if (ct(ut) != "object" || !ut) return ut;
          var h = ut[Symbol.toPrimitive];
          if (h !== void 0) {
            var O = h.call(ut, o || "default");
            if (ct(O) != "object") return O;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (o === "string" ? String : Number)(ut);
        }
        var y = 32,
          rt = (function (ut) {
            function o() {
              return mt(this, o), Ft(this, o, arguments);
            }
            return (
              vt(o, ut),
              St(o, [
                {
                  key: "renderIcon",
                  value: function (O) {
                    var d = this.props.inactiveColor,
                      R = y / 2,
                      Q = y / 6,
                      wt = y / 3,
                      zt = O.inactive ? d : O.color;
                    if (O.type === "plainline")
                      return l.createElement("line", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: zt,
                        strokeDasharray: O.payload.strokeDasharray,
                        x1: 0,
                        y1: R,
                        x2: y,
                        y2: R,
                        className: "recharts-legend-icon",
                      });
                    if (O.type === "line")
                      return l.createElement("path", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: zt,
                        d: "M0,"
                          .concat(R, "h")
                          .concat(
                            wt,
                            `
            A`,
                          )
                          .concat(Q, ",")
                          .concat(Q, ",0,1,1,")
                          .concat(2 * wt, ",")
                          .concat(
                            R,
                            `
            H`,
                          )
                          .concat(y, "M")
                          .concat(2 * wt, ",")
                          .concat(
                            R,
                            `
            A`,
                          )
                          .concat(Q, ",")
                          .concat(Q, ",0,1,1,")
                          .concat(wt, ",")
                          .concat(R),
                        className: "recharts-legend-icon",
                      });
                    if (O.type === "rect")
                      return l.createElement("path", {
                        stroke: "none",
                        fill: zt,
                        d: "M0,"
                          .concat(y / 8, "h")
                          .concat(y, "v")
                          .concat((y * 3) / 4, "h")
                          .concat(-y, "z"),
                        className: "recharts-legend-icon",
                      });
                    if (l.isValidElement(O.legendIcon)) {
                      var Vt = V({}, O);
                      return (
                        delete Vt.legendIcon, l.cloneElement(O.legendIcon, Vt)
                      );
                    }
                    return l.createElement(G.i, {
                      fill: zt,
                      cx: R,
                      cy: R,
                      size: y,
                      sizeType: "diameter",
                      type: O.type,
                    });
                  },
                },
                {
                  key: "renderItems",
                  value: function () {
                    var O = this,
                      d = this.props,
                      R = d.payload,
                      Q = d.iconSize,
                      wt = d.layout,
                      zt = d.formatter,
                      Vt = d.inactiveColor,
                      se = { x: 0, y: 0, width: y, height: y },
                      K = {
                        display: wt === "horizontal" ? "inline-block" : "block",
                        marginRight: 10,
                      },
                      Z = {
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: 4,
                      };
                    return R.map(function (L, xt) {
                      var Ot = L.formatter || zt,
                        $t = (0, it.A)(
                          m(
                            m(
                              { "recharts-legend-item": !0 },
                              "legend-item-".concat(xt),
                              !0,
                            ),
                            "inactive",
                            L.inactive,
                          ),
                        );
                      if (L.type === "none") return null;
                      var Jt = H()(L.value) ? null : L.value;
                      (0, U.R)(
                        !H()(L.value),
                        `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
                      );
                      var le = L.inactive ? Vt : L.color;
                      return l.createElement(
                        "li",
                        at(
                          {
                            className: $t,
                            style: K,
                            key: "legend-item-".concat(xt),
                          },
                          (0, lt.XC)(O.props, L, xt),
                        ),
                        l.createElement(
                          tt.u,
                          { width: Q, height: Q, viewBox: se, style: Z },
                          O.renderIcon(L),
                        ),
                        l.createElement(
                          "span",
                          {
                            className: "recharts-legend-item-text",
                            style: { color: le },
                          },
                          Ot ? Ot(Jt, L, xt) : Jt,
                        ),
                      );
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var O = this.props,
                      d = O.payload,
                      R = O.layout,
                      Q = O.align;
                    if (!d || !d.length) return null;
                    var wt = {
                      padding: 0,
                      margin: 0,
                      textAlign: R === "horizontal" ? Q : "left",
                    };
                    return l.createElement(
                      "ul",
                      { className: "recharts-default-legend", style: wt },
                      this.renderItems(),
                    );
                  },
                },
              ])
            );
          })(l.PureComponent);
        m(rt, "displayName", "Legend"),
          m(rt, "defaultProps", {
            iconSize: 14,
            layout: "horizontal",
            align: "center",
            verticalAlign: "middle",
            inactiveColor: "#ccc",
          });
        var ot = r(96714),
          _t = r(43149);
        function j(ut) {
          "@babel/helpers - typeof";
          return (
            (j =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      typeof Symbol == "function" &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            j(ut)
          );
        }
        var N = ["ref"];
        function M(ut, o) {
          var h = Object.keys(ut);
          if (Object.getOwnPropertySymbols) {
            var O = Object.getOwnPropertySymbols(ut);
            o &&
              (O = O.filter(function (d) {
                return Object.getOwnPropertyDescriptor(ut, d).enumerable;
              })),
              h.push.apply(h, O);
          }
          return h;
        }
        function X(ut) {
          for (var o = 1; o < arguments.length; o++) {
            var h = arguments[o] != null ? arguments[o] : {};
            o % 2
              ? M(Object(h), !0).forEach(function (O) {
                  Y(ut, O, h[O]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    ut,
                    Object.getOwnPropertyDescriptors(h),
                  )
                : M(Object(h)).forEach(function (O) {
                    Object.defineProperty(
                      ut,
                      O,
                      Object.getOwnPropertyDescriptor(h, O),
                    );
                  });
          }
          return ut;
        }
        function v(ut, o) {
          if (!(ut instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function f(ut, o) {
          for (var h = 0; h < o.length; h++) {
            var O = o[h];
            (O.enumerable = O.enumerable || !1),
              (O.configurable = !0),
              "value" in O && (O.writable = !0),
              Object.defineProperty(ut, J(O.key), O);
          }
        }
        function E(ut, o, h) {
          return (
            o && f(ut.prototype, o),
            h && f(ut, h),
            Object.defineProperty(ut, "prototype", { writable: !1 }),
            ut
          );
        }
        function _(ut, o, h) {
          return (
            (o = D(o)),
            A(
              ut,
              P()
                ? Reflect.construct(o, h || [], D(ut).constructor)
                : o.apply(ut, h),
            )
          );
        }
        function A(ut, o) {
          if (o && (j(o) === "object" || typeof o == "function")) return o;
          if (o !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return c(ut);
        }
        function c(ut) {
          if (ut === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return ut;
        }
        function P() {
          try {
            var ut = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (P = function () {
            return !!ut;
          })();
        }
        function D(ut) {
          return (
            (D = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (h) {
                  return h.__proto__ || Object.getPrototypeOf(h);
                }),
            D(ut)
          );
        }
        function x(ut, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (ut.prototype = Object.create(o && o.prototype, {
            constructor: { value: ut, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(ut, "prototype", { writable: !1 }),
            o && k(ut, o);
        }
        function k(ut, o) {
          return (
            (k = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (O, d) {
                  return (O.__proto__ = d), O;
                }),
            k(ut, o)
          );
        }
        function Y(ut, o, h) {
          return (
            (o = J(o)),
            o in ut
              ? Object.defineProperty(ut, o, {
                  value: h,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (ut[o] = h),
            ut
          );
        }
        function J(ut) {
          var o = Mt(ut, "string");
          return j(o) == "symbol" ? o : o + "";
        }
        function Mt(ut, o) {
          if (j(ut) != "object" || !ut) return ut;
          var h = ut[Symbol.toPrimitive];
          if (h !== void 0) {
            var O = h.call(ut, o || "default");
            if (j(O) != "object") return O;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (o === "string" ? String : Number)(ut);
        }
        function q(ut, o) {
          if (ut == null) return {};
          var h = yt(ut, o),
            O,
            d;
          if (Object.getOwnPropertySymbols) {
            var R = Object.getOwnPropertySymbols(ut);
            for (d = 0; d < R.length; d++)
              (O = R[d]),
                !(o.indexOf(O) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(ut, O) &&
                  (h[O] = ut[O]);
          }
          return h;
        }
        function yt(ut, o) {
          if (ut == null) return {};
          var h = {};
          for (var O in ut)
            if (Object.prototype.hasOwnProperty.call(ut, O)) {
              if (o.indexOf(O) >= 0) continue;
              h[O] = ut[O];
            }
          return h;
        }
        function ft(ut) {
          return ut.value;
        }
        function bt(ut, o) {
          if (l.isValidElement(ut)) return l.cloneElement(ut, o);
          if (typeof ut == "function") return l.createElement(ut, o);
          var h = o.ref,
            O = q(o, N);
          return l.createElement(rt, O);
        }
        var Ut = 1,
          Ht = (function (ut) {
            function o() {
              var h;
              v(this, o);
              for (
                var O = arguments.length, d = new Array(O), R = 0;
                R < O;
                R++
              )
                d[R] = arguments[R];
              return (
                (h = _(this, o, [].concat(d))),
                Y(h, "lastBoundingBox", { width: -1, height: -1 }),
                h
              );
            }
            return (
              x(o, ut),
              E(
                o,
                [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.updateBBox();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function () {
                      this.updateBBox();
                    },
                  },
                  {
                    key: "getBBox",
                    value: function () {
                      if (
                        this.wrapperNode &&
                        this.wrapperNode.getBoundingClientRect
                      ) {
                        var O = this.wrapperNode.getBoundingClientRect();
                        return (
                          (O.height = this.wrapperNode.offsetHeight),
                          (O.width = this.wrapperNode.offsetWidth),
                          O
                        );
                      }
                      return null;
                    },
                  },
                  {
                    key: "updateBBox",
                    value: function () {
                      var O = this.props.onBBoxUpdate,
                        d = this.getBBox();
                      d
                        ? (Math.abs(d.width - this.lastBoundingBox.width) >
                            Ut ||
                            Math.abs(d.height - this.lastBoundingBox.height) >
                              Ut) &&
                          ((this.lastBoundingBox.width = d.width),
                          (this.lastBoundingBox.height = d.height),
                          O && O(d))
                        : (this.lastBoundingBox.width !== -1 ||
                            this.lastBoundingBox.height !== -1) &&
                          ((this.lastBoundingBox.width = -1),
                          (this.lastBoundingBox.height = -1),
                          O && O(null));
                    },
                  },
                  {
                    key: "getBBoxSnapshot",
                    value: function () {
                      return this.lastBoundingBox.width >= 0 &&
                        this.lastBoundingBox.height >= 0
                        ? X({}, this.lastBoundingBox)
                        : { width: 0, height: 0 };
                    },
                  },
                  {
                    key: "getDefaultPosition",
                    value: function (O) {
                      var d = this.props,
                        R = d.layout,
                        Q = d.align,
                        wt = d.verticalAlign,
                        zt = d.margin,
                        Vt = d.chartWidth,
                        se = d.chartHeight,
                        K,
                        Z;
                      if (
                        !O ||
                        ((O.left === void 0 || O.left === null) &&
                          (O.right === void 0 || O.right === null))
                      )
                        if (Q === "center" && R === "vertical") {
                          var L = this.getBBoxSnapshot();
                          K = { left: ((Vt || 0) - L.width) / 2 };
                        } else
                          K =
                            Q === "right"
                              ? { right: (zt && zt.right) || 0 }
                              : { left: (zt && zt.left) || 0 };
                      if (
                        !O ||
                        ((O.top === void 0 || O.top === null) &&
                          (O.bottom === void 0 || O.bottom === null))
                      )
                        if (wt === "middle") {
                          var xt = this.getBBoxSnapshot();
                          Z = { top: ((se || 0) - xt.height) / 2 };
                        } else
                          Z =
                            wt === "bottom"
                              ? { bottom: (zt && zt.bottom) || 0 }
                              : { top: (zt && zt.top) || 0 };
                      return X(X({}, K), Z);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var O = this,
                        d = this.props,
                        R = d.content,
                        Q = d.width,
                        wt = d.height,
                        zt = d.wrapperStyle,
                        Vt = d.payloadUniqBy,
                        se = d.payload,
                        K = X(
                          X(
                            {
                              position: "absolute",
                              width: Q || "auto",
                              height: wt || "auto",
                            },
                            this.getDefaultPosition(zt),
                          ),
                          zt,
                        );
                      return l.createElement(
                        "div",
                        {
                          className: "recharts-legend-wrapper",
                          style: K,
                          ref: function (L) {
                            O.wrapperNode = L;
                          },
                        },
                        bt(
                          R,
                          X(
                            X({}, this.props),
                            {},
                            { payload: (0, _t.s)(se, Vt, ft) },
                          ),
                        ),
                      );
                    },
                  },
                ],
                [
                  {
                    key: "getWithHeight",
                    value: function (O, d) {
                      var R = X(X({}, this.defaultProps), O.props),
                        Q = R.layout;
                      return Q === "vertical" && (0, ot.Et)(O.props.height)
                        ? { height: O.props.height }
                        : Q === "horizontal"
                          ? { width: O.props.width || d }
                          : null;
                    },
                  },
                ],
              )
            );
          })(l.PureComponent);
        Y(Ht, "displayName", "Legend"),
          Y(Ht, "defaultProps", {
            iconSize: 14,
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          });
      },
      32671: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { u: () => Tt });
        var l = r(34164),
          F = r(90626),
          H = r(51504),
          it = r.n(H),
          U = r(96714),
          tt = r(27664),
          G = r(93563);
        function lt(vt) {
          "@babel/helpers - typeof";
          return (
            (lt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (I) {
                    return typeof I;
                  }
                : function (I) {
                    return I &&
                      typeof Symbol == "function" &&
                      I.constructor === Symbol &&
                      I !== Symbol.prototype
                      ? "symbol"
                      : typeof I;
                  }),
            lt(vt)
          );
        }
        function ct(vt, I) {
          var m = Object.keys(vt);
          if (Object.getOwnPropertySymbols) {
            var S = Object.getOwnPropertySymbols(vt);
            I &&
              (S = S.filter(function (g) {
                return Object.getOwnPropertyDescriptor(vt, g).enumerable;
              })),
              m.push.apply(m, S);
          }
          return m;
        }
        function at(vt) {
          for (var I = 1; I < arguments.length; I++) {
            var m = arguments[I] != null ? arguments[I] : {};
            I % 2
              ? ct(Object(m), !0).forEach(function (S) {
                  st(vt, S, m[S]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    vt,
                    Object.getOwnPropertyDescriptors(m),
                  )
                : ct(Object(m)).forEach(function (S) {
                    Object.defineProperty(
                      vt,
                      S,
                      Object.getOwnPropertyDescriptor(m, S),
                    );
                  });
          }
          return vt;
        }
        function st(vt, I, m) {
          return (
            (I = V(I)),
            I in vt
              ? Object.defineProperty(vt, I, {
                  value: m,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (vt[I] = m),
            vt
          );
        }
        function V(vt) {
          var I = mt(vt, "string");
          return lt(I) == "symbol" ? I : I + "";
        }
        function mt(vt, I) {
          if (lt(vt) != "object" || !vt) return vt;
          var m = vt[Symbol.toPrimitive];
          if (m !== void 0) {
            var S = m.call(vt, I || "default");
            if (lt(S) != "object") return S;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (I === "string" ? String : Number)(vt);
        }
        function et(vt, I) {
          return kt(vt) || te(vt, I) || Ft(vt, I) || St();
        }
        function St() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Ft(vt, I) {
          if (vt) {
            if (typeof vt == "string") return nt(vt, I);
            var m = Object.prototype.toString.call(vt).slice(8, -1);
            if (
              (m === "Object" && vt.constructor && (m = vt.constructor.name),
              m === "Map" || m === "Set")
            )
              return Array.from(vt);
            if (
              m === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)
            )
              return nt(vt, I);
          }
        }
        function nt(vt, I) {
          (I == null || I > vt.length) && (I = vt.length);
          for (var m = 0, S = new Array(I); m < I; m++) S[m] = vt[m];
          return S;
        }
        function te(vt, I) {
          var m =
            vt == null
              ? null
              : (typeof Symbol < "u" && vt[Symbol.iterator]) ||
                vt["@@iterator"];
          if (m != null) {
            var S,
              g,
              y,
              rt,
              ot = [],
              _t = !0,
              j = !1;
            try {
              if (((y = (m = m.call(vt)).next), I === 0)) {
                if (Object(m) !== m) return;
                _t = !1;
              } else
                for (
                  ;
                  !(_t = (S = y.call(m)).done) &&
                  (ot.push(S.value), ot.length !== I);
                  _t = !0
                );
            } catch (N) {
              (j = !0), (g = N);
            } finally {
              try {
                if (
                  !_t &&
                  m.return != null &&
                  ((rt = m.return()), Object(rt) !== rt)
                )
                  return;
              } finally {
                if (j) throw g;
              }
            }
            return ot;
          }
        }
        function kt(vt) {
          if (Array.isArray(vt)) return vt;
        }
        var Tt = (0, F.forwardRef)(function (vt, I) {
          var m = vt.aspect,
            S = vt.initialDimension,
            g = S === void 0 ? { width: -1, height: -1 } : S,
            y = vt.width,
            rt = y === void 0 ? "100%" : y,
            ot = vt.height,
            _t = ot === void 0 ? "100%" : ot,
            j = vt.minWidth,
            N = j === void 0 ? 0 : j,
            M = vt.minHeight,
            X = vt.maxHeight,
            v = vt.children,
            f = vt.debounce,
            E = f === void 0 ? 0 : f,
            _ = vt.id,
            A = vt.className,
            c = vt.onResize,
            P = vt.style,
            D = P === void 0 ? {} : P,
            x = (0, F.useRef)(null),
            k = (0, F.useRef)();
          (k.current = c),
            (0, F.useImperativeHandle)(I, function () {
              return Object.defineProperty(x.current, "current", {
                get: function () {
                  return (
                    console.warn(
                      "The usage of ref.current.current is deprecated and will no longer be supported.",
                    ),
                    x.current
                  );
                },
                configurable: !0,
              });
            });
          var Y = (0, F.useState)({
              containerWidth: g.width,
              containerHeight: g.height,
            }),
            J = et(Y, 2),
            Mt = J[0],
            q = J[1],
            yt = (0, F.useCallback)(function (bt, Ut) {
              q(function (Ht) {
                var ut = Math.round(bt),
                  o = Math.round(Ut);
                return Ht.containerWidth === ut && Ht.containerHeight === o
                  ? Ht
                  : { containerWidth: ut, containerHeight: o };
              });
            }, []);
          (0, F.useEffect)(
            function () {
              var bt = function (O) {
                var d,
                  R = O[0].contentRect,
                  Q = R.width,
                  wt = R.height;
                yt(Q, wt),
                  (d = k.current) === null || d === void 0 || d.call(k, Q, wt);
              };
              E > 0 && (bt = it()(bt, E, { trailing: !0, leading: !1 }));
              var Ut = new ResizeObserver(bt),
                Ht = x.current.getBoundingClientRect(),
                ut = Ht.width,
                o = Ht.height;
              return (
                yt(ut, o),
                Ut.observe(x.current),
                function () {
                  Ut.disconnect();
                }
              );
            },
            [yt, E],
          );
          var ft = (0, F.useMemo)(
            function () {
              var bt = Mt.containerWidth,
                Ut = Mt.containerHeight;
              if (bt < 0 || Ut < 0) return null;
              (0, tt.R)(
                (0, U._3)(rt) || (0, U._3)(_t),
                `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
                rt,
                _t,
              ),
                (0, tt.R)(
                  !m || m > 0,
                  "The aspect(%s) must be greater than zero.",
                  m,
                );
              var Ht = (0, U._3)(rt) ? bt : rt,
                ut = (0, U._3)(_t) ? Ut : _t;
              m &&
                m > 0 &&
                (Ht ? (ut = Ht / m) : ut && (Ht = ut * m),
                X && ut > X && (ut = X)),
                (0, tt.R)(
                  Ht > 0 || ut > 0,
                  `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
                  Ht,
                  ut,
                  rt,
                  _t,
                  N,
                  M,
                  m,
                );
              var o = !Array.isArray(v) && (0, G.Mn)(v.type).endsWith("Chart");
              return F.Children.map(v, function (h) {
                return F.isValidElement(h)
                  ? (0, F.cloneElement)(
                      h,
                      at(
                        { width: Ht, height: ut },
                        o
                          ? {
                              style: at(
                                {
                                  height: "100%",
                                  width: "100%",
                                  maxHeight: ut,
                                  maxWidth: Ht,
                                },
                                h.props.style,
                              ),
                            }
                          : {},
                      ),
                    )
                  : h;
              });
            },
            [m, v, _t, X, M, N, Mt, rt],
          );
          return F.createElement(
            "div",
            {
              id: _ ? "".concat(_) : void 0,
              className: (0, l.A)("recharts-responsive-container", A),
              style: at(
                at({}, D),
                {},
                {
                  width: rt,
                  height: _t,
                  minWidth: N,
                  minHeight: M,
                  maxHeight: X,
                },
              ),
              ref: x,
            },
            ft,
          );
        });
      },
      34656: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { E: () => ut });
        var l = r(90626),
          F = r(64609),
          H = r.n(F),
          it = r(34164),
          U = r(96714),
          tt = r(59640),
          G = r(93563),
          lt = r(15654);
        function ct(o) {
          "@babel/helpers - typeof";
          return (
            (ct =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (h) {
                    return typeof h;
                  }
                : function (h) {
                    return h &&
                      typeof Symbol == "function" &&
                      h.constructor === Symbol &&
                      h !== Symbol.prototype
                      ? "symbol"
                      : typeof h;
                  }),
            ct(o)
          );
        }
        function at(o, h) {
          return St(o) || et(o, h) || V(o, h) || st();
        }
        function st() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function V(o, h) {
          if (o) {
            if (typeof o == "string") return mt(o, h);
            var O = Object.prototype.toString.call(o).slice(8, -1);
            if (
              (O === "Object" && o.constructor && (O = o.constructor.name),
              O === "Map" || O === "Set")
            )
              return Array.from(o);
            if (
              O === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)
            )
              return mt(o, h);
          }
        }
        function mt(o, h) {
          (h == null || h > o.length) && (h = o.length);
          for (var O = 0, d = new Array(h); O < h; O++) d[O] = o[O];
          return d;
        }
        function et(o, h) {
          var O =
            o == null
              ? null
              : (typeof Symbol < "u" && o[Symbol.iterator]) || o["@@iterator"];
          if (O != null) {
            var d,
              R,
              Q,
              wt,
              zt = [],
              Vt = !0,
              se = !1;
            try {
              if (((Q = (O = O.call(o)).next), h === 0)) {
                if (Object(O) !== O) return;
                Vt = !1;
              } else
                for (
                  ;
                  !(Vt = (d = Q.call(O)).done) &&
                  (zt.push(d.value), zt.length !== h);
                  Vt = !0
                );
            } catch (K) {
              (se = !0), (R = K);
            } finally {
              try {
                if (
                  !Vt &&
                  O.return != null &&
                  ((wt = O.return()), Object(wt) !== wt)
                )
                  return;
              } finally {
                if (se) throw R;
              }
            }
            return zt;
          }
        }
        function St(o) {
          if (Array.isArray(o)) return o;
        }
        function Ft(o, h) {
          if (!(o instanceof h))
            throw new TypeError("Cannot call a class as a function");
        }
        function nt(o, h) {
          for (var O = 0; O < h.length; O++) {
            var d = h[O];
            (d.enumerable = d.enumerable || !1),
              (d.configurable = !0),
              "value" in d && (d.writable = !0),
              Object.defineProperty(o, kt(d.key), d);
          }
        }
        function te(o, h, O) {
          return (
            h && nt(o.prototype, h),
            O && nt(o, O),
            Object.defineProperty(o, "prototype", { writable: !1 }),
            o
          );
        }
        function kt(o) {
          var h = Tt(o, "string");
          return ct(h) == "symbol" ? h : h + "";
        }
        function Tt(o, h) {
          if (ct(o) != "object" || !o) return o;
          var O = o[Symbol.toPrimitive];
          if (O !== void 0) {
            var d = O.call(o, h || "default");
            if (ct(d) != "object") return d;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (h === "string" ? String : Number)(o);
        }
        var vt = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
          I = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
          m = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
          S = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
          g = {
            cm: 96 / 2.54,
            mm: 96 / 25.4,
            pt: 96 / 72,
            pc: 96 / 6,
            in: 96,
            Q: 96 / (2.54 * 40),
            px: 1,
          },
          y = Object.keys(g),
          rt = "NaN";
        function ot(o, h) {
          return o * g[h];
        }
        var _t = (function () {
          function o(h, O) {
            Ft(this, o),
              (this.num = h),
              (this.unit = O),
              (this.num = h),
              (this.unit = O),
              Number.isNaN(h) && (this.unit = ""),
              O !== "" && !m.test(O) && ((this.num = NaN), (this.unit = "")),
              y.includes(O) && ((this.num = ot(h, O)), (this.unit = "px"));
          }
          return te(
            o,
            [
              {
                key: "add",
                value: function (O) {
                  return this.unit !== O.unit
                    ? new o(NaN, "")
                    : new o(this.num + O.num, this.unit);
                },
              },
              {
                key: "subtract",
                value: function (O) {
                  return this.unit !== O.unit
                    ? new o(NaN, "")
                    : new o(this.num - O.num, this.unit);
                },
              },
              {
                key: "multiply",
                value: function (O) {
                  return this.unit !== "" &&
                    O.unit !== "" &&
                    this.unit !== O.unit
                    ? new o(NaN, "")
                    : new o(this.num * O.num, this.unit || O.unit);
                },
              },
              {
                key: "divide",
                value: function (O) {
                  return this.unit !== "" &&
                    O.unit !== "" &&
                    this.unit !== O.unit
                    ? new o(NaN, "")
                    : new o(this.num / O.num, this.unit || O.unit);
                },
              },
              {
                key: "toString",
                value: function () {
                  return "".concat(this.num).concat(this.unit);
                },
              },
              {
                key: "isNaN",
                value: function () {
                  return Number.isNaN(this.num);
                },
              },
            ],
            [
              {
                key: "parse",
                value: function (O) {
                  var d,
                    R = (d = S.exec(O)) !== null && d !== void 0 ? d : [],
                    Q = at(R, 3),
                    wt = Q[1],
                    zt = Q[2];
                  return new o(parseFloat(wt), zt ?? "");
                },
              },
            ],
          );
        })();
        function j(o) {
          if (o.includes(rt)) return rt;
          for (var h = o; h.includes("*") || h.includes("/"); ) {
            var O,
              d = (O = vt.exec(h)) !== null && O !== void 0 ? O : [],
              R = at(d, 4),
              Q = R[1],
              wt = R[2],
              zt = R[3],
              Vt = _t.parse(Q ?? ""),
              se = _t.parse(zt ?? ""),
              K = wt === "*" ? Vt.multiply(se) : Vt.divide(se);
            if (K.isNaN()) return rt;
            h = h.replace(vt, K.toString());
          }
          for (; h.includes("+") || /.-\d+(?:\.\d+)?/.test(h); ) {
            var Z,
              L = (Z = I.exec(h)) !== null && Z !== void 0 ? Z : [],
              xt = at(L, 4),
              Ot = xt[1],
              $t = xt[2],
              Jt = xt[3],
              le = _t.parse(Ot ?? ""),
              W = _t.parse(Jt ?? ""),
              $ = $t === "+" ? le.add(W) : le.subtract(W);
            if ($.isNaN()) return rt;
            h = h.replace(I, $.toString());
          }
          return h;
        }
        var N = /\(([^()]*)\)/;
        function M(o) {
          for (var h = o; h.includes("("); ) {
            var O = N.exec(h),
              d = at(O, 2),
              R = d[1];
            h = h.replace(N, j(R));
          }
          return h;
        }
        function X(o) {
          var h = o.replace(/\s+/g, "");
          return (h = M(h)), (h = j(h)), h;
        }
        function v(o) {
          try {
            return X(o);
          } catch {
            return rt;
          }
        }
        function f(o) {
          var h = v(o.slice(5, -1));
          return h === rt ? "" : h;
        }
        var E = [
            "x",
            "y",
            "lineHeight",
            "capHeight",
            "scaleToFit",
            "textAnchor",
            "verticalAnchor",
            "fill",
          ],
          _ = ["dx", "dy", "angle", "className", "breakAll"];
        function A() {
          return (
            (A = Object.assign
              ? Object.assign.bind()
              : function (o) {
                  for (var h = 1; h < arguments.length; h++) {
                    var O = arguments[h];
                    for (var d in O)
                      Object.prototype.hasOwnProperty.call(O, d) &&
                        (o[d] = O[d]);
                  }
                  return o;
                }),
            A.apply(this, arguments)
          );
        }
        function c(o, h) {
          if (o == null) return {};
          var O = P(o, h),
            d,
            R;
          if (Object.getOwnPropertySymbols) {
            var Q = Object.getOwnPropertySymbols(o);
            for (R = 0; R < Q.length; R++)
              (d = Q[R]),
                !(h.indexOf(d) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(o, d) &&
                  (O[d] = o[d]);
          }
          return O;
        }
        function P(o, h) {
          if (o == null) return {};
          var O = {};
          for (var d in o)
            if (Object.prototype.hasOwnProperty.call(o, d)) {
              if (h.indexOf(d) >= 0) continue;
              O[d] = o[d];
            }
          return O;
        }
        function D(o, h) {
          return Mt(o) || J(o, h) || k(o, h) || x();
        }
        function x() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function k(o, h) {
          if (o) {
            if (typeof o == "string") return Y(o, h);
            var O = Object.prototype.toString.call(o).slice(8, -1);
            if (
              (O === "Object" && o.constructor && (O = o.constructor.name),
              O === "Map" || O === "Set")
            )
              return Array.from(o);
            if (
              O === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)
            )
              return Y(o, h);
          }
        }
        function Y(o, h) {
          (h == null || h > o.length) && (h = o.length);
          for (var O = 0, d = new Array(h); O < h; O++) d[O] = o[O];
          return d;
        }
        function J(o, h) {
          var O =
            o == null
              ? null
              : (typeof Symbol < "u" && o[Symbol.iterator]) || o["@@iterator"];
          if (O != null) {
            var d,
              R,
              Q,
              wt,
              zt = [],
              Vt = !0,
              se = !1;
            try {
              if (((Q = (O = O.call(o)).next), h === 0)) {
                if (Object(O) !== O) return;
                Vt = !1;
              } else
                for (
                  ;
                  !(Vt = (d = Q.call(O)).done) &&
                  (zt.push(d.value), zt.length !== h);
                  Vt = !0
                );
            } catch (K) {
              (se = !0), (R = K);
            } finally {
              try {
                if (
                  !Vt &&
                  O.return != null &&
                  ((wt = O.return()), Object(wt) !== wt)
                )
                  return;
              } finally {
                if (se) throw R;
              }
            }
            return zt;
          }
        }
        function Mt(o) {
          if (Array.isArray(o)) return o;
        }
        var q = /[ \f\n\r\t\v\u2028\u2029]+/,
          yt = function (h) {
            var O = h.children,
              d = h.breakAll,
              R = h.style;
            try {
              var Q = [];
              H()(O) ||
                (d
                  ? (Q = O.toString().split(""))
                  : (Q = O.toString().split(q)));
              var wt = Q.map(function (Vt) {
                  return { word: Vt, width: (0, lt.Pu)(Vt, R).width };
                }),
                zt = d ? 0 : (0, lt.Pu)("\xA0", R).width;
              return { wordsWithComputedWidth: wt, spaceWidth: zt };
            } catch {
              return null;
            }
          },
          ft = function (h, O, d, R, Q) {
            var wt = h.maxLines,
              zt = h.children,
              Vt = h.style,
              se = h.breakAll,
              K = (0, U.Et)(wt),
              Z = zt,
              L = function () {
                var mn =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [];
                return mn.reduce(function (Sn, xn) {
                  var wn = xn.word,
                    Jn = xn.width,
                    jn = Sn[Sn.length - 1];
                  if (jn && (R == null || Q || jn.width + Jn + d < Number(R)))
                    jn.words.push(wn), (jn.width += Jn + d);
                  else {
                    var Hn = { words: [wn], width: Jn };
                    Sn.push(Hn);
                  }
                  return Sn;
                }, []);
              },
              xt = L(O),
              Ot = function (mn) {
                return mn.reduce(function (Sn, xn) {
                  return Sn.width > xn.width ? Sn : xn;
                });
              };
            if (!K) return xt;
            for (
              var $t = "\u2026",
                Jt = function (mn) {
                  var Sn = Z.slice(0, mn),
                    xn = yt({
                      breakAll: se,
                      style: Vt,
                      children: Sn + $t,
                    }).wordsWithComputedWidth,
                    wn = L(xn),
                    Jn = wn.length > wt || Ot(wn).width > Number(R);
                  return [Jn, wn];
                },
                le = 0,
                W = Z.length - 1,
                $ = 0,
                Ct;
              le <= W && $ <= Z.length - 1;
            ) {
              var Pt = Math.floor((le + W) / 2),
                ee = Pt - 1,
                Ie = Jt(ee),
                Ge = D(Ie, 2),
                we = Ge[0],
                We = Ge[1],
                Je = Jt(Pt),
                Xe = D(Je, 1),
                hn = Xe[0];
              if (
                (!we && !hn && (le = Pt + 1),
                we && hn && (W = Pt - 1),
                !we && hn)
              ) {
                Ct = We;
                break;
              }
              $++;
            }
            return Ct || xt;
          },
          bt = function (h) {
            var O = H()(h) ? [] : h.toString().split(q);
            return [{ words: O }];
          },
          Ut = function (h) {
            var O = h.width,
              d = h.scaleToFit,
              R = h.children,
              Q = h.style,
              wt = h.breakAll,
              zt = h.maxLines;
            if ((O || d) && !tt.m.isSsr) {
              var Vt,
                se,
                K = yt({ breakAll: wt, children: R, style: Q });
              if (K) {
                var Z = K.wordsWithComputedWidth,
                  L = K.spaceWidth;
                (Vt = Z), (se = L);
              } else return bt(R);
              return ft(
                { breakAll: wt, children: R, maxLines: zt, style: Q },
                Vt,
                se,
                O,
                d,
              );
            }
            return bt(R);
          },
          Ht = "#808080",
          ut = function (h) {
            var O = h.x,
              d = O === void 0 ? 0 : O,
              R = h.y,
              Q = R === void 0 ? 0 : R,
              wt = h.lineHeight,
              zt = wt === void 0 ? "1em" : wt,
              Vt = h.capHeight,
              se = Vt === void 0 ? "0.71em" : Vt,
              K = h.scaleToFit,
              Z = K === void 0 ? !1 : K,
              L = h.textAnchor,
              xt = L === void 0 ? "start" : L,
              Ot = h.verticalAnchor,
              $t = Ot === void 0 ? "end" : Ot,
              Jt = h.fill,
              le = Jt === void 0 ? Ht : Jt,
              W = c(h, E),
              $ = (0, l.useMemo)(
                function () {
                  return Ut({
                    breakAll: W.breakAll,
                    children: W.children,
                    maxLines: W.maxLines,
                    scaleToFit: Z,
                    style: W.style,
                    width: W.width,
                  });
                },
                [W.breakAll, W.children, W.maxLines, Z, W.style, W.width],
              ),
              Ct = W.dx,
              Pt = W.dy,
              ee = W.angle,
              Ie = W.className,
              Ge = W.breakAll,
              we = c(W, _);
            if (!(0, U.vh)(d) || !(0, U.vh)(Q)) return null;
            var We = d + ((0, U.Et)(Ct) ? Ct : 0),
              Je = Q + ((0, U.Et)(Pt) ? Pt : 0),
              Xe;
            switch ($t) {
              case "start":
                Xe = f("calc(".concat(se, ")"));
                break;
              case "middle":
                Xe = f(
                  "calc("
                    .concat(($.length - 1) / 2, " * -")
                    .concat(zt, " + (")
                    .concat(se, " / 2))"),
                );
                break;
              default:
                Xe = f("calc(".concat($.length - 1, " * -").concat(zt, ")"));
                break;
            }
            var hn = [];
            if (Z) {
              var bn = $[0].width,
                mn = W.width;
              hn.push("scale(".concat(((0, U.Et)(mn) ? mn / bn : 1) / bn, ")"));
            }
            return (
              ee &&
                hn.push(
                  "rotate(".concat(ee, ", ").concat(We, ", ").concat(Je, ")"),
                ),
              hn.length && (we.transform = hn.join(" ")),
              l.createElement(
                "text",
                A({}, (0, G.J9)(we, !0), {
                  x: We,
                  y: Je,
                  className: (0, it.A)("recharts-text", Ie),
                  textAnchor: xt,
                  fill: le.includes("url") ? Ht : le,
                }),
                $.map(function (Sn, xn) {
                  var wn = Sn.words.join(Ge ? "" : " ");
                  return l.createElement(
                    "tspan",
                    {
                      x: We,
                      dy: xn === 0 ? Xe : zt,
                      key: "".concat(wn, "-").concat(xn),
                    },
                    wn,
                  );
                }),
              )
            );
          };
      },
      30230: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { m: () => le });
        var l = r(90626),
          F = r(97825),
          H = r.n(F),
          it = r(64609),
          U = r.n(it),
          tt = r(34164),
          G = r(96714);
        function lt(W) {
          "@babel/helpers - typeof";
          return (
            (lt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function ($) {
                    return typeof $;
                  }
                : function ($) {
                    return $ &&
                      typeof Symbol == "function" &&
                      $.constructor === Symbol &&
                      $ !== Symbol.prototype
                      ? "symbol"
                      : typeof $;
                  }),
            lt(W)
          );
        }
        function ct() {
          return (
            (ct = Object.assign
              ? Object.assign.bind()
              : function (W) {
                  for (var $ = 1; $ < arguments.length; $++) {
                    var Ct = arguments[$];
                    for (var Pt in Ct)
                      Object.prototype.hasOwnProperty.call(Ct, Pt) &&
                        (W[Pt] = Ct[Pt]);
                  }
                  return W;
                }),
            ct.apply(this, arguments)
          );
        }
        function at(W, $) {
          return St(W) || et(W, $) || V(W, $) || st();
        }
        function st() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function V(W, $) {
          if (W) {
            if (typeof W == "string") return mt(W, $);
            var Ct = Object.prototype.toString.call(W).slice(8, -1);
            if (
              (Ct === "Object" && W.constructor && (Ct = W.constructor.name),
              Ct === "Map" || Ct === "Set")
            )
              return Array.from(W);
            if (
              Ct === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ct)
            )
              return mt(W, $);
          }
        }
        function mt(W, $) {
          ($ == null || $ > W.length) && ($ = W.length);
          for (var Ct = 0, Pt = new Array($); Ct < $; Ct++) Pt[Ct] = W[Ct];
          return Pt;
        }
        function et(W, $) {
          var Ct =
            W == null
              ? null
              : (typeof Symbol < "u" && W[Symbol.iterator]) || W["@@iterator"];
          if (Ct != null) {
            var Pt,
              ee,
              Ie,
              Ge,
              we = [],
              We = !0,
              Je = !1;
            try {
              if (((Ie = (Ct = Ct.call(W)).next), $ === 0)) {
                if (Object(Ct) !== Ct) return;
                We = !1;
              } else
                for (
                  ;
                  !(We = (Pt = Ie.call(Ct)).done) &&
                  (we.push(Pt.value), we.length !== $);
                  We = !0
                );
            } catch (Xe) {
              (Je = !0), (ee = Xe);
            } finally {
              try {
                if (
                  !We &&
                  Ct.return != null &&
                  ((Ge = Ct.return()), Object(Ge) !== Ge)
                )
                  return;
              } finally {
                if (Je) throw ee;
              }
            }
            return we;
          }
        }
        function St(W) {
          if (Array.isArray(W)) return W;
        }
        function Ft(W, $) {
          var Ct = Object.keys(W);
          if (Object.getOwnPropertySymbols) {
            var Pt = Object.getOwnPropertySymbols(W);
            $ &&
              (Pt = Pt.filter(function (ee) {
                return Object.getOwnPropertyDescriptor(W, ee).enumerable;
              })),
              Ct.push.apply(Ct, Pt);
          }
          return Ct;
        }
        function nt(W) {
          for (var $ = 1; $ < arguments.length; $++) {
            var Ct = arguments[$] != null ? arguments[$] : {};
            $ % 2
              ? Ft(Object(Ct), !0).forEach(function (Pt) {
                  te(W, Pt, Ct[Pt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    W,
                    Object.getOwnPropertyDescriptors(Ct),
                  )
                : Ft(Object(Ct)).forEach(function (Pt) {
                    Object.defineProperty(
                      W,
                      Pt,
                      Object.getOwnPropertyDescriptor(Ct, Pt),
                    );
                  });
          }
          return W;
        }
        function te(W, $, Ct) {
          return (
            ($ = kt($)),
            $ in W
              ? Object.defineProperty(W, $, {
                  value: Ct,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (W[$] = Ct),
            W
          );
        }
        function kt(W) {
          var $ = Tt(W, "string");
          return lt($) == "symbol" ? $ : $ + "";
        }
        function Tt(W, $) {
          if (lt(W) != "object" || !W) return W;
          var Ct = W[Symbol.toPrimitive];
          if (Ct !== void 0) {
            var Pt = Ct.call(W, $ || "default");
            if (lt(Pt) != "object") return Pt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ($ === "string" ? String : Number)(W);
        }
        function vt(W) {
          return Array.isArray(W) && (0, G.vh)(W[0]) && (0, G.vh)(W[1])
            ? W.join(" ~ ")
            : W;
        }
        var I = function ($) {
          var Ct = $.separator,
            Pt = Ct === void 0 ? " : " : Ct,
            ee = $.contentStyle,
            Ie = ee === void 0 ? {} : ee,
            Ge = $.itemStyle,
            we = Ge === void 0 ? {} : Ge,
            We = $.labelStyle,
            Je = We === void 0 ? {} : We,
            Xe = $.payload,
            hn = $.formatter,
            bn = $.itemSorter,
            mn = $.wrapperClassName,
            Sn = $.labelClassName,
            xn = $.label,
            wn = $.labelFormatter,
            Jn = $.accessibilityLayer,
            jn = Jn === void 0 ? !1 : Jn,
            Hn = function () {
              if (Xe && Xe.length) {
                var ne = { padding: 0, margin: 0 },
                  xe = (bn ? H()(Xe, bn) : Xe).map(function (Ce, ke) {
                    if (Ce.type === "none") return null;
                    var Ke = nt(
                        {
                          display: "block",
                          paddingTop: 4,
                          paddingBottom: 4,
                          color: Ce.color || "#000",
                        },
                        we,
                      ),
                      Fe = Ce.formatter || hn || vt,
                      _e = Ce.value,
                      Re = Ce.name,
                      nn = _e,
                      un = Re;
                    if (Fe && nn != null && un != null) {
                      var An = Fe(_e, Re, Ce, ke, Xe);
                      if (Array.isArray(An)) {
                        var Pn = at(An, 2);
                        (nn = Pn[0]), (un = Pn[1]);
                      } else nn = An;
                    }
                    return l.createElement(
                      "li",
                      {
                        className: "recharts-tooltip-item",
                        key: "tooltip-item-".concat(ke),
                        style: Ke,
                      },
                      (0, G.vh)(un)
                        ? l.createElement(
                            "span",
                            { className: "recharts-tooltip-item-name" },
                            un,
                          )
                        : null,
                      (0, G.vh)(un)
                        ? l.createElement(
                            "span",
                            { className: "recharts-tooltip-item-separator" },
                            Pt,
                          )
                        : null,
                      l.createElement(
                        "span",
                        { className: "recharts-tooltip-item-value" },
                        nn,
                      ),
                      l.createElement(
                        "span",
                        { className: "recharts-tooltip-item-unit" },
                        Ce.unit || "",
                      ),
                    );
                  });
                return l.createElement(
                  "ul",
                  { className: "recharts-tooltip-item-list", style: ne },
                  xe,
                );
              }
              return null;
            },
            sr = nt(
              {
                margin: 0,
                padding: 10,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                whiteSpace: "nowrap",
              },
              Ie,
            ),
            cr = nt({ margin: 0 }, Je),
            ur = !U()(xn),
            Yn = ur ? xn : "",
            At = (0, tt.A)("recharts-default-tooltip", mn),
            gt = (0, tt.A)("recharts-tooltip-label", Sn);
          ur && wn && Xe !== void 0 && Xe !== null && (Yn = wn(xn, Xe));
          var Rt = jn ? { role: "status", "aria-live": "assertive" } : {};
          return l.createElement(
            "div",
            ct({ className: At, style: sr }, Rt),
            l.createElement(
              "p",
              { className: gt, style: cr },
              l.isValidElement(Yn) ? Yn : "".concat(Yn),
            ),
            Hn(),
          );
        };
        function m(W) {
          "@babel/helpers - typeof";
          return (
            (m =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function ($) {
                    return typeof $;
                  }
                : function ($) {
                    return $ &&
                      typeof Symbol == "function" &&
                      $.constructor === Symbol &&
                      $ !== Symbol.prototype
                      ? "symbol"
                      : typeof $;
                  }),
            m(W)
          );
        }
        function S(W, $, Ct) {
          return (
            ($ = g($)),
            $ in W
              ? Object.defineProperty(W, $, {
                  value: Ct,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (W[$] = Ct),
            W
          );
        }
        function g(W) {
          var $ = y(W, "string");
          return m($) == "symbol" ? $ : $ + "";
        }
        function y(W, $) {
          if (m(W) != "object" || !W) return W;
          var Ct = W[Symbol.toPrimitive];
          if (Ct !== void 0) {
            var Pt = Ct.call(W, $ || "default");
            if (m(Pt) != "object") return Pt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ($ === "string" ? String : Number)(W);
        }
        var rt = "recharts-tooltip-wrapper",
          ot = { visibility: "hidden" };
        function _t(W) {
          var $ = W.coordinate,
            Ct = W.translateX,
            Pt = W.translateY;
          return (0, tt.A)(
            rt,
            S(
              S(
                S(
                  S(
                    {},
                    "".concat(rt, "-right"),
                    (0, G.Et)(Ct) && $ && (0, G.Et)($.x) && Ct >= $.x,
                  ),
                  "".concat(rt, "-left"),
                  (0, G.Et)(Ct) && $ && (0, G.Et)($.x) && Ct < $.x,
                ),
                "".concat(rt, "-bottom"),
                (0, G.Et)(Pt) && $ && (0, G.Et)($.y) && Pt >= $.y,
              ),
              "".concat(rt, "-top"),
              (0, G.Et)(Pt) && $ && (0, G.Et)($.y) && Pt < $.y,
            ),
          );
        }
        function j(W) {
          var $ = W.allowEscapeViewBox,
            Ct = W.coordinate,
            Pt = W.key,
            ee = W.offsetTopLeft,
            Ie = W.position,
            Ge = W.reverseDirection,
            we = W.tooltipDimension,
            We = W.viewBox,
            Je = W.viewBoxDimension;
          if (Ie && (0, G.Et)(Ie[Pt])) return Ie[Pt];
          var Xe = Ct[Pt] - we - ee,
            hn = Ct[Pt] + ee;
          if ($[Pt]) return Ge[Pt] ? Xe : hn;
          if (Ge[Pt]) {
            var bn = Xe,
              mn = We[Pt];
            return bn < mn ? Math.max(hn, We[Pt]) : Math.max(Xe, We[Pt]);
          }
          var Sn = hn + we,
            xn = We[Pt] + Je;
          return Sn > xn ? Math.max(Xe, We[Pt]) : Math.max(hn, We[Pt]);
        }
        function N(W) {
          var $ = W.translateX,
            Ct = W.translateY,
            Pt = W.useTranslate3d;
          return {
            transform: Pt
              ? "translate3d(".concat($, "px, ").concat(Ct, "px, 0)")
              : "translate(".concat($, "px, ").concat(Ct, "px)"),
          };
        }
        function M(W) {
          var $ = W.allowEscapeViewBox,
            Ct = W.coordinate,
            Pt = W.offsetTopLeft,
            ee = W.position,
            Ie = W.reverseDirection,
            Ge = W.tooltipBox,
            we = W.useTranslate3d,
            We = W.viewBox,
            Je,
            Xe,
            hn;
          return (
            Ge.height > 0 && Ge.width > 0 && Ct
              ? ((Xe = j({
                  allowEscapeViewBox: $,
                  coordinate: Ct,
                  key: "x",
                  offsetTopLeft: Pt,
                  position: ee,
                  reverseDirection: Ie,
                  tooltipDimension: Ge.width,
                  viewBox: We,
                  viewBoxDimension: We.width,
                })),
                (hn = j({
                  allowEscapeViewBox: $,
                  coordinate: Ct,
                  key: "y",
                  offsetTopLeft: Pt,
                  position: ee,
                  reverseDirection: Ie,
                  tooltipDimension: Ge.height,
                  viewBox: We,
                  viewBoxDimension: We.height,
                })),
                (Je = N({
                  translateX: Xe,
                  translateY: hn,
                  useTranslate3d: we,
                })))
              : (Je = ot),
            {
              cssProperties: Je,
              cssClasses: _t({
                translateX: Xe,
                translateY: hn,
                coordinate: Ct,
              }),
            }
          );
        }
        function X(W) {
          "@babel/helpers - typeof";
          return (
            (X =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function ($) {
                    return typeof $;
                  }
                : function ($) {
                    return $ &&
                      typeof Symbol == "function" &&
                      $.constructor === Symbol &&
                      $ !== Symbol.prototype
                      ? "symbol"
                      : typeof $;
                  }),
            X(W)
          );
        }
        function v(W, $) {
          var Ct = Object.keys(W);
          if (Object.getOwnPropertySymbols) {
            var Pt = Object.getOwnPropertySymbols(W);
            $ &&
              (Pt = Pt.filter(function (ee) {
                return Object.getOwnPropertyDescriptor(W, ee).enumerable;
              })),
              Ct.push.apply(Ct, Pt);
          }
          return Ct;
        }
        function f(W) {
          for (var $ = 1; $ < arguments.length; $++) {
            var Ct = arguments[$] != null ? arguments[$] : {};
            $ % 2
              ? v(Object(Ct), !0).forEach(function (Pt) {
                  Mt(W, Pt, Ct[Pt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    W,
                    Object.getOwnPropertyDescriptors(Ct),
                  )
                : v(Object(Ct)).forEach(function (Pt) {
                    Object.defineProperty(
                      W,
                      Pt,
                      Object.getOwnPropertyDescriptor(Ct, Pt),
                    );
                  });
          }
          return W;
        }
        function E(W, $) {
          if (!(W instanceof $))
            throw new TypeError("Cannot call a class as a function");
        }
        function _(W, $) {
          for (var Ct = 0; Ct < $.length; Ct++) {
            var Pt = $[Ct];
            (Pt.enumerable = Pt.enumerable || !1),
              (Pt.configurable = !0),
              "value" in Pt && (Pt.writable = !0),
              Object.defineProperty(W, q(Pt.key), Pt);
          }
        }
        function A(W, $, Ct) {
          return (
            $ && _(W.prototype, $),
            Ct && _(W, Ct),
            Object.defineProperty(W, "prototype", { writable: !1 }),
            W
          );
        }
        function c(W, $, Ct) {
          return (
            ($ = k($)),
            P(
              W,
              x()
                ? Reflect.construct($, Ct || [], k(W).constructor)
                : $.apply(W, Ct),
            )
          );
        }
        function P(W, $) {
          if ($ && (X($) === "object" || typeof $ == "function")) return $;
          if ($ !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return D(W);
        }
        function D(W) {
          if (W === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return W;
        }
        function x() {
          try {
            var W = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (x = function () {
            return !!W;
          })();
        }
        function k(W) {
          return (
            (k = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (Ct) {
                  return Ct.__proto__ || Object.getPrototypeOf(Ct);
                }),
            k(W)
          );
        }
        function Y(W, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (W.prototype = Object.create($ && $.prototype, {
            constructor: { value: W, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(W, "prototype", { writable: !1 }),
            $ && J(W, $);
        }
        function J(W, $) {
          return (
            (J = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (Pt, ee) {
                  return (Pt.__proto__ = ee), Pt;
                }),
            J(W, $)
          );
        }
        function Mt(W, $, Ct) {
          return (
            ($ = q($)),
            $ in W
              ? Object.defineProperty(W, $, {
                  value: Ct,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (W[$] = Ct),
            W
          );
        }
        function q(W) {
          var $ = yt(W, "string");
          return X($) == "symbol" ? $ : $ + "";
        }
        function yt(W, $) {
          if (X(W) != "object" || !W) return W;
          var Ct = W[Symbol.toPrimitive];
          if (Ct !== void 0) {
            var Pt = Ct.call(W, $ || "default");
            if (X(Pt) != "object") return Pt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ($ === "string" ? String : Number)(W);
        }
        var ft = 1,
          bt = (function (W) {
            function $() {
              var Ct;
              E(this, $);
              for (
                var Pt = arguments.length, ee = new Array(Pt), Ie = 0;
                Ie < Pt;
                Ie++
              )
                ee[Ie] = arguments[Ie];
              return (
                (Ct = c(this, $, [].concat(ee))),
                Mt(Ct, "state", {
                  dismissed: !1,
                  dismissedAtCoordinate: { x: 0, y: 0 },
                  lastBoundingBox: { width: -1, height: -1 },
                }),
                Mt(Ct, "handleKeyDown", function (Ge) {
                  if (Ge.key === "Escape") {
                    var we, We, Je, Xe;
                    Ct.setState({
                      dismissed: !0,
                      dismissedAtCoordinate: {
                        x:
                          (we =
                            (We = Ct.props.coordinate) === null || We === void 0
                              ? void 0
                              : We.x) !== null && we !== void 0
                            ? we
                            : 0,
                        y:
                          (Je =
                            (Xe = Ct.props.coordinate) === null || Xe === void 0
                              ? void 0
                              : Xe.y) !== null && Je !== void 0
                            ? Je
                            : 0,
                      },
                    });
                  }
                }),
                Ct
              );
            }
            return (
              Y($, W),
              A($, [
                {
                  key: "updateBBox",
                  value: function () {
                    if (
                      this.wrapperNode &&
                      this.wrapperNode.getBoundingClientRect
                    ) {
                      var Pt = this.wrapperNode.getBoundingClientRect();
                      (Math.abs(Pt.width - this.state.lastBoundingBox.width) >
                        ft ||
                        Math.abs(
                          Pt.height - this.state.lastBoundingBox.height,
                        ) > ft) &&
                        this.setState({
                          lastBoundingBox: {
                            width: Pt.width,
                            height: Pt.height,
                          },
                        });
                    } else
                      (this.state.lastBoundingBox.width !== -1 ||
                        this.state.lastBoundingBox.height !== -1) &&
                        this.setState({
                          lastBoundingBox: { width: -1, height: -1 },
                        });
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    document.addEventListener("keydown", this.handleKeyDown),
                      this.updateBBox();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    document.removeEventListener("keydown", this.handleKeyDown);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var Pt, ee;
                    this.props.active && this.updateBBox(),
                      this.state.dismissed &&
                        (((Pt = this.props.coordinate) === null || Pt === void 0
                          ? void 0
                          : Pt.x) !== this.state.dismissedAtCoordinate.x ||
                          ((ee = this.props.coordinate) === null ||
                          ee === void 0
                            ? void 0
                            : ee.y) !== this.state.dismissedAtCoordinate.y) &&
                        (this.state.dismissed = !1);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var Pt = this,
                      ee = this.props,
                      Ie = ee.active,
                      Ge = ee.allowEscapeViewBox,
                      we = ee.animationDuration,
                      We = ee.animationEasing,
                      Je = ee.children,
                      Xe = ee.coordinate,
                      hn = ee.hasPayload,
                      bn = ee.isAnimationActive,
                      mn = ee.offset,
                      Sn = ee.position,
                      xn = ee.reverseDirection,
                      wn = ee.useTranslate3d,
                      Jn = ee.viewBox,
                      jn = ee.wrapperStyle,
                      Hn = M({
                        allowEscapeViewBox: Ge,
                        coordinate: Xe,
                        offsetTopLeft: mn,
                        position: Sn,
                        reverseDirection: xn,
                        tooltipBox: this.state.lastBoundingBox,
                        useTranslate3d: wn,
                        viewBox: Jn,
                      }),
                      sr = Hn.cssClasses,
                      cr = Hn.cssProperties,
                      ur = f(
                        f(
                          {
                            transition:
                              bn && Ie
                                ? "transform ".concat(we, "ms ").concat(We)
                                : void 0,
                          },
                          cr,
                        ),
                        {},
                        {
                          pointerEvents: "none",
                          visibility:
                            !this.state.dismissed && Ie && hn
                              ? "visible"
                              : "hidden",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        },
                        jn,
                      );
                    return l.createElement(
                      "div",
                      {
                        tabIndex: -1,
                        className: sr,
                        style: ur,
                        ref: function (At) {
                          Pt.wrapperNode = At;
                        },
                      },
                      Je,
                    );
                  },
                },
              ])
            );
          })(l.PureComponent),
          Ut = r(59640),
          Ht = r(43149);
        function ut(W) {
          "@babel/helpers - typeof";
          return (
            (ut =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function ($) {
                    return typeof $;
                  }
                : function ($) {
                    return $ &&
                      typeof Symbol == "function" &&
                      $.constructor === Symbol &&
                      $ !== Symbol.prototype
                      ? "symbol"
                      : typeof $;
                  }),
            ut(W)
          );
        }
        function o(W, $) {
          var Ct = Object.keys(W);
          if (Object.getOwnPropertySymbols) {
            var Pt = Object.getOwnPropertySymbols(W);
            $ &&
              (Pt = Pt.filter(function (ee) {
                return Object.getOwnPropertyDescriptor(W, ee).enumerable;
              })),
              Ct.push.apply(Ct, Pt);
          }
          return Ct;
        }
        function h(W) {
          for (var $ = 1; $ < arguments.length; $++) {
            var Ct = arguments[$] != null ? arguments[$] : {};
            $ % 2
              ? o(Object(Ct), !0).forEach(function (Pt) {
                  L(W, Pt, Ct[Pt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    W,
                    Object.getOwnPropertyDescriptors(Ct),
                  )
                : o(Object(Ct)).forEach(function (Pt) {
                    Object.defineProperty(
                      W,
                      Pt,
                      Object.getOwnPropertyDescriptor(Ct, Pt),
                    );
                  });
          }
          return W;
        }
        function O(W, $) {
          if (!(W instanceof $))
            throw new TypeError("Cannot call a class as a function");
        }
        function d(W, $) {
          for (var Ct = 0; Ct < $.length; Ct++) {
            var Pt = $[Ct];
            (Pt.enumerable = Pt.enumerable || !1),
              (Pt.configurable = !0),
              "value" in Pt && (Pt.writable = !0),
              Object.defineProperty(W, xt(Pt.key), Pt);
          }
        }
        function R(W, $, Ct) {
          return (
            $ && d(W.prototype, $),
            Ct && d(W, Ct),
            Object.defineProperty(W, "prototype", { writable: !1 }),
            W
          );
        }
        function Q(W, $, Ct) {
          return (
            ($ = se($)),
            wt(
              W,
              Vt()
                ? Reflect.construct($, Ct || [], se(W).constructor)
                : $.apply(W, Ct),
            )
          );
        }
        function wt(W, $) {
          if ($ && (ut($) === "object" || typeof $ == "function")) return $;
          if ($ !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return zt(W);
        }
        function zt(W) {
          if (W === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return W;
        }
        function Vt() {
          try {
            var W = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Vt = function () {
            return !!W;
          })();
        }
        function se(W) {
          return (
            (se = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (Ct) {
                  return Ct.__proto__ || Object.getPrototypeOf(Ct);
                }),
            se(W)
          );
        }
        function K(W, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (W.prototype = Object.create($ && $.prototype, {
            constructor: { value: W, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(W, "prototype", { writable: !1 }),
            $ && Z(W, $);
        }
        function Z(W, $) {
          return (
            (Z = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (Pt, ee) {
                  return (Pt.__proto__ = ee), Pt;
                }),
            Z(W, $)
          );
        }
        function L(W, $, Ct) {
          return (
            ($ = xt($)),
            $ in W
              ? Object.defineProperty(W, $, {
                  value: Ct,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (W[$] = Ct),
            W
          );
        }
        function xt(W) {
          var $ = Ot(W, "string");
          return ut($) == "symbol" ? $ : $ + "";
        }
        function Ot(W, $) {
          if (ut(W) != "object" || !W) return W;
          var Ct = W[Symbol.toPrimitive];
          if (Ct !== void 0) {
            var Pt = Ct.call(W, $ || "default");
            if (ut(Pt) != "object") return Pt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ($ === "string" ? String : Number)(W);
        }
        function $t(W) {
          return W.dataKey;
        }
        function Jt(W, $) {
          return l.isValidElement(W)
            ? l.cloneElement(W, $)
            : typeof W == "function"
              ? l.createElement(W, $)
              : l.createElement(I, $);
        }
        var le = (function (W) {
          function $() {
            return O(this, $), Q(this, $, arguments);
          }
          return (
            K($, W),
            R($, [
              {
                key: "render",
                value: function () {
                  var Pt = this,
                    ee = this.props,
                    Ie = ee.active,
                    Ge = ee.allowEscapeViewBox,
                    we = ee.animationDuration,
                    We = ee.animationEasing,
                    Je = ee.content,
                    Xe = ee.coordinate,
                    hn = ee.filterNull,
                    bn = ee.isAnimationActive,
                    mn = ee.offset,
                    Sn = ee.payload,
                    xn = ee.payloadUniqBy,
                    wn = ee.position,
                    Jn = ee.reverseDirection,
                    jn = ee.useTranslate3d,
                    Hn = ee.viewBox,
                    sr = ee.wrapperStyle,
                    cr = Sn ?? [];
                  hn &&
                    cr.length &&
                    (cr = (0, Ht.s)(
                      Sn.filter(function (Yn) {
                        return (
                          Yn.value != null &&
                          (Yn.hide !== !0 || Pt.props.includeHidden)
                        );
                      }),
                      xn,
                      $t,
                    ));
                  var ur = cr.length > 0;
                  return l.createElement(
                    bt,
                    {
                      allowEscapeViewBox: Ge,
                      animationDuration: we,
                      animationEasing: We,
                      isAnimationActive: bn,
                      active: Ie,
                      coordinate: Xe,
                      hasPayload: ur,
                      offset: mn,
                      position: wn,
                      reverseDirection: Jn,
                      useTranslate3d: jn,
                      viewBox: Hn,
                      wrapperStyle: sr,
                    },
                    Jt(Je, h(h({}, this.props), {}, { payload: cr })),
                  );
                },
              },
            ])
          );
        })(l.PureComponent);
        L(le, "displayName", "Tooltip"),
          L(le, "defaultProps", {
            accessibilityLayer: !1,
            allowEscapeViewBox: { x: !1, y: !1 },
            animationDuration: 400,
            animationEasing: "ease",
            contentStyle: {},
            coordinate: { x: 0, y: 0 },
            cursor: !0,
            cursorStyle: {},
            filterNull: !0,
            isAnimationActive: !Ut.m.isSsr,
            itemStyle: {},
            labelStyle: {},
            offset: 10,
            reverseDirection: { x: !1, y: !1 },
            separator: " : ",
            trigger: "hover",
            useTranslate3d: !1,
            viewBox: { x: 0, y: 0, height: 0, width: 0 },
            wrapperStyle: {},
          });
      },
      75055: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { W: () => lt });
        var l = r(90626),
          F = r(34164),
          H = r(93563),
          it = ["children", "className"];
        function U() {
          return (
            (U = Object.assign
              ? Object.assign.bind()
              : function (ct) {
                  for (var at = 1; at < arguments.length; at++) {
                    var st = arguments[at];
                    for (var V in st)
                      Object.prototype.hasOwnProperty.call(st, V) &&
                        (ct[V] = st[V]);
                  }
                  return ct;
                }),
            U.apply(this, arguments)
          );
        }
        function tt(ct, at) {
          if (ct == null) return {};
          var st = G(ct, at),
            V,
            mt;
          if (Object.getOwnPropertySymbols) {
            var et = Object.getOwnPropertySymbols(ct);
            for (mt = 0; mt < et.length; mt++)
              (V = et[mt]),
                !(at.indexOf(V) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(ct, V) &&
                  (st[V] = ct[V]);
          }
          return st;
        }
        function G(ct, at) {
          if (ct == null) return {};
          var st = {};
          for (var V in ct)
            if (Object.prototype.hasOwnProperty.call(ct, V)) {
              if (at.indexOf(V) >= 0) continue;
              st[V] = ct[V];
            }
          return st;
        }
        var lt = l.forwardRef(function (ct, at) {
          var st = ct.children,
            V = ct.className,
            mt = tt(ct, it),
            et = (0, F.A)("recharts-layer", V);
          return l.createElement(
            "g",
            U({ className: et }, (0, H.J9)(mt, !0), { ref: at }),
            st,
          );
        });
      },
      67125: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { u: () => lt });
        var l = r(90626),
          F = r(34164),
          H = r(93563),
          it = [
            "children",
            "width",
            "height",
            "viewBox",
            "className",
            "style",
            "title",
            "desc",
          ];
        function U() {
          return (
            (U = Object.assign
              ? Object.assign.bind()
              : function (ct) {
                  for (var at = 1; at < arguments.length; at++) {
                    var st = arguments[at];
                    for (var V in st)
                      Object.prototype.hasOwnProperty.call(st, V) &&
                        (ct[V] = st[V]);
                  }
                  return ct;
                }),
            U.apply(this, arguments)
          );
        }
        function tt(ct, at) {
          if (ct == null) return {};
          var st = G(ct, at),
            V,
            mt;
          if (Object.getOwnPropertySymbols) {
            var et = Object.getOwnPropertySymbols(ct);
            for (mt = 0; mt < et.length; mt++)
              (V = et[mt]),
                !(at.indexOf(V) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(ct, V) &&
                  (st[V] = ct[V]);
          }
          return st;
        }
        function G(ct, at) {
          if (ct == null) return {};
          var st = {};
          for (var V in ct)
            if (Object.prototype.hasOwnProperty.call(ct, V)) {
              if (at.indexOf(V) >= 0) continue;
              st[V] = ct[V];
            }
          return st;
        }
        function lt(ct) {
          var at = ct.children,
            st = ct.width,
            V = ct.height,
            mt = ct.viewBox,
            et = ct.className,
            St = ct.style,
            Ft = ct.title,
            nt = ct.desc,
            te = tt(ct, it),
            kt = mt || { width: st, height: V, x: 0, y: 0 },
            Tt = (0, F.A)("recharts-surface", et);
          return l.createElement(
            "svg",
            U({}, (0, H.J9)(te, !0, "svg"), {
              className: Tt,
              width: st,
              height: V,
              style: St,
              viewBox: ""
                .concat(kt.x, " ")
                .concat(kt.y, " ")
                .concat(kt.width, " ")
                .concat(kt.height),
            }),
            l.createElement("title", null, Ft),
            l.createElement("desc", null, nt),
            at,
          );
        }
      },
      7351: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, {
          DR: () => kt,
          pj: () => m,
          rY: () => j,
          yi: () => _t,
          Yp: () => Tt,
          hj: () => ot,
          sk: () => rt,
          AF: () => I,
          Nk: () => y,
          $G: () => g,
        });
        var l = r(90626),
          F = r(68841),
          H = r(81639),
          it = r.n(H),
          U = r(17489),
          tt = r.n(U),
          G = r(81334),
          lt = r.n(G),
          ct = lt()(
            function (N) {
              return { x: N.left, y: N.top, width: N.width, height: N.height };
            },
            function (N) {
              return [
                "l",
                N.left,
                "t",
                N.top,
                "w",
                N.width,
                "h",
                N.height,
              ].join("");
            },
          ),
          at = r(96714);
        function st(N) {
          "@babel/helpers - typeof";
          return (
            (st =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (M) {
                    return typeof M;
                  }
                : function (M) {
                    return M &&
                      typeof Symbol == "function" &&
                      M.constructor === Symbol &&
                      M !== Symbol.prototype
                      ? "symbol"
                      : typeof M;
                  }),
            st(N)
          );
        }
        var V = (0, l.createContext)(void 0),
          mt = (0, l.createContext)(void 0),
          et = (0, l.createContext)(void 0),
          St = (0, l.createContext)({}),
          Ft = (0, l.createContext)(void 0),
          nt = (0, l.createContext)(0),
          te = (0, l.createContext)(0),
          kt = function (M) {
            var X = M.state,
              v = X.xAxisMap,
              f = X.yAxisMap,
              E = X.offset,
              _ = M.clipPathId,
              A = M.children,
              c = M.width,
              P = M.height,
              D = ct(E);
            return l.createElement(
              V.Provider,
              { value: v },
              l.createElement(
                mt.Provider,
                { value: f },
                l.createElement(
                  St.Provider,
                  { value: E },
                  l.createElement(
                    et.Provider,
                    { value: D },
                    l.createElement(
                      Ft.Provider,
                      { value: _ },
                      l.createElement(
                        nt.Provider,
                        { value: P },
                        l.createElement(te.Provider, { value: c }, A),
                      ),
                    ),
                  ),
                ),
              ),
            );
          },
          Tt = function () {
            return (0, l.useContext)(Ft);
          };
        function vt(N) {
          var M = Object.keys(N);
          return M.length === 0
            ? "There are no available ids."
            : "Available ids are: ".concat(M, ".");
        }
        var I = function (M) {
            var X = (0, l.useContext)(V);
            X == null && (0, F.A)(!1);
            var v = X[M];
            return v == null && (0, F.A)(!1), v;
          },
          m = function () {
            var M = (0, l.useContext)(V);
            return (0, at.lX)(M);
          },
          S = function () {
            var M = useContext(mt);
            return getAnyElementOfObject(M);
          },
          g = function () {
            var M = (0, l.useContext)(mt),
              X = it()(M, function (v) {
                return tt()(v.domain, Number.isFinite);
              });
            return X || (0, at.lX)(M);
          },
          y = function (M) {
            var X = (0, l.useContext)(mt);
            X == null && (0, F.A)(!1);
            var v = X[M];
            return v == null && (0, F.A)(!1), v;
          },
          rt = function () {
            var M = (0, l.useContext)(et);
            return M;
          },
          ot = function () {
            return (0, l.useContext)(St);
          },
          _t = function () {
            return (0, l.useContext)(te);
          },
          j = function () {
            return (0, l.useContext)(nt);
          };
      },
      33487: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { I: () => se });
        var l = r(90626);
        function F() {}
        function H(K, Z, L) {
          K._context.bezierCurveTo(
            (2 * K._x0 + K._x1) / 3,
            (2 * K._y0 + K._y1) / 3,
            (K._x0 + 2 * K._x1) / 3,
            (K._y0 + 2 * K._y1) / 3,
            (K._x0 + 4 * K._x1 + Z) / 6,
            (K._y0 + 4 * K._y1 + L) / 6,
          );
        }
        function it(K) {
          this._context = K;
        }
        it.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 3:
                H(this, this._x1, this._y1);
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            }
            (this._line || (this._line !== 0 && this._point === 1)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (K, Z) {
            switch (((K = +K), (Z = +Z), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(K, Z)
                    : this._context.moveTo(K, Z);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3),
                  this._context.lineTo(
                    (5 * this._x0 + this._x1) / 6,
                    (5 * this._y0 + this._y1) / 6,
                  );
              default:
                H(this, K, Z);
                break;
            }
            (this._x0 = this._x1),
              (this._x1 = K),
              (this._y0 = this._y1),
              (this._y1 = Z);
          },
        };
        function U(K) {
          return new it(K);
        }
        function tt(K) {
          this._context = K;
        }
        tt.prototype = {
          areaStart: F,
          areaEnd: F,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1: {
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              }
              case 2: {
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3,
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3,
                  ),
                  this._context.closePath();
                break;
              }
              case 3: {
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
                break;
              }
            }
          },
          point: function (K, Z) {
            switch (((K = +K), (Z = +Z), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = K), (this._y2 = Z);
                break;
              case 1:
                (this._point = 2), (this._x3 = K), (this._y3 = Z);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = K),
                  (this._y4 = Z),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + K) / 6,
                    (this._y0 + 4 * this._y1 + Z) / 6,
                  );
                break;
              default:
                H(this, K, Z);
                break;
            }
            (this._x0 = this._x1),
              (this._x1 = K),
              (this._y0 = this._y1),
              (this._y1 = Z);
          },
        };
        function G(K) {
          return new tt(K);
        }
        function lt(K) {
          this._context = K;
        }
        lt.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (this._line !== 0 && this._point === 3)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (K, Z) {
            switch (((K = +K), (Z = +Z), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var L = (this._x0 + 4 * this._x1 + K) / 6,
                  xt = (this._y0 + 4 * this._y1 + Z) / 6;
                this._line
                  ? this._context.lineTo(L, xt)
                  : this._context.moveTo(L, xt);
                break;
              case 3:
                this._point = 4;
              default:
                H(this, K, Z);
                break;
            }
            (this._x0 = this._x1),
              (this._x1 = K),
              (this._y0 = this._y1),
              (this._y1 = Z);
          },
        };
        function ct(K) {
          return new lt(K);
        }
        class at {
          constructor(Z, L) {
            (this._context = Z), (this._x = L);
          }
          areaStart() {
            this._line = 0;
          }
          areaEnd() {
            this._line = NaN;
          }
          lineStart() {
            this._point = 0;
          }
          lineEnd() {
            (this._line || (this._line !== 0 && this._point === 1)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          }
          point(Z, L) {
            switch (((Z = +Z), (L = +L), this._point)) {
              case 0: {
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(Z, L)
                    : this._context.moveTo(Z, L);
                break;
              }
              case 1:
                this._point = 2;
              default: {
                this._x
                  ? this._context.bezierCurveTo(
                      (this._x0 = (this._x0 + Z) / 2),
                      this._y0,
                      this._x0,
                      L,
                      Z,
                      L,
                    )
                  : this._context.bezierCurveTo(
                      this._x0,
                      (this._y0 = (this._y0 + L) / 2),
                      Z,
                      this._y0,
                      Z,
                      L,
                    );
                break;
              }
            }
            (this._x0 = Z), (this._y0 = L);
          }
        }
        class st {
          constructor(Z) {
            this._context = Z;
          }
          lineStart() {
            this._point = 0;
          }
          lineEnd() {}
          point(Z, L) {
            if (((Z = +Z), (L = +L), this._point === 0)) this._point = 1;
            else {
              const xt = pointRadial(this._x0, this._y0),
                Ot = pointRadial(this._x0, (this._y0 = (this._y0 + L) / 2)),
                $t = pointRadial(Z, this._y0),
                Jt = pointRadial(Z, L);
              this._context.moveTo(...xt),
                this._context.bezierCurveTo(...Ot, ...$t, ...Jt);
            }
            (this._x0 = Z), (this._y0 = L);
          }
        }
        function V(K) {
          return new at(K, !0);
        }
        function mt(K) {
          return new at(K, !1);
        }
        function et(K) {
          return new st(K);
        }
        function St(K) {
          this._context = K;
        }
        St.prototype = {
          areaStart: F,
          areaEnd: F,
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            this._point && this._context.closePath();
          },
          point: function (K, Z) {
            (K = +K),
              (Z = +Z),
              this._point
                ? this._context.lineTo(K, Z)
                : ((this._point = 1), this._context.moveTo(K, Z));
          },
        };
        function Ft(K) {
          return new St(K);
        }
        function nt(K) {
          this._context = K;
        }
        nt.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (this._line || (this._line !== 0 && this._point === 1)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (K, Z) {
            switch (((K = +K), (Z = +Z), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(K, Z)
                    : this._context.moveTo(K, Z);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(K, Z);
                break;
            }
          },
        };
        function te(K) {
          return new nt(K);
        }
        function kt(K) {
          return K < 0 ? -1 : 1;
        }
        function Tt(K, Z, L) {
          var xt = K._x1 - K._x0,
            Ot = Z - K._x1,
            $t = (K._y1 - K._y0) / (xt || (Ot < 0 && -0)),
            Jt = (L - K._y1) / (Ot || (xt < 0 && -0)),
            le = ($t * Ot + Jt * xt) / (xt + Ot);
          return (
            (kt($t) + kt(Jt)) *
              Math.min(Math.abs($t), Math.abs(Jt), 0.5 * Math.abs(le)) || 0
          );
        }
        function vt(K, Z) {
          var L = K._x1 - K._x0;
          return L ? ((3 * (K._y1 - K._y0)) / L - Z) / 2 : Z;
        }
        function I(K, Z, L) {
          var xt = K._x0,
            Ot = K._y0,
            $t = K._x1,
            Jt = K._y1,
            le = ($t - xt) / 3;
          K._context.bezierCurveTo(
            xt + le,
            Ot + le * Z,
            $t - le,
            Jt - le * L,
            $t,
            Jt,
          );
        }
        function m(K) {
          this._context = K;
        }
        m.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                I(this, this._t0, vt(this, this._t0));
                break;
            }
            (this._line || (this._line !== 0 && this._point === 1)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (K, Z) {
            var L = NaN;
            if (((K = +K), (Z = +Z), !(K === this._x1 && Z === this._y1))) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(K, Z)
                      : this._context.moveTo(K, Z);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), I(this, vt(this, (L = Tt(this, K, Z))), L);
                  break;
                default:
                  I(this, this._t0, (L = Tt(this, K, Z)));
                  break;
              }
              (this._x0 = this._x1),
                (this._x1 = K),
                (this._y0 = this._y1),
                (this._y1 = Z),
                (this._t0 = L);
            }
          },
        };
        function S(K) {
          this._context = new g(K);
        }
        (S.prototype = Object.create(m.prototype)).point = function (K, Z) {
          m.prototype.point.call(this, Z, K);
        };
        function g(K) {
          this._context = K;
        }
        g.prototype = {
          moveTo: function (K, Z) {
            this._context.moveTo(Z, K);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (K, Z) {
            this._context.lineTo(Z, K);
          },
          bezierCurveTo: function (K, Z, L, xt, Ot, $t) {
            this._context.bezierCurveTo(Z, K, xt, L, $t, Ot);
          },
        };
        function y(K) {
          return new m(K);
        }
        function rt(K) {
          return new S(K);
        }
        function ot(K) {
          this._context = K;
        }
        ot.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var K = this._x,
              Z = this._y,
              L = K.length;
            if (L)
              if (
                (this._line
                  ? this._context.lineTo(K[0], Z[0])
                  : this._context.moveTo(K[0], Z[0]),
                L === 2)
              )
                this._context.lineTo(K[1], Z[1]);
              else
                for (
                  var xt = _t(K), Ot = _t(Z), $t = 0, Jt = 1;
                  Jt < L;
                  ++$t, ++Jt
                )
                  this._context.bezierCurveTo(
                    xt[0][$t],
                    Ot[0][$t],
                    xt[1][$t],
                    Ot[1][$t],
                    K[Jt],
                    Z[Jt],
                  );
            (this._line || (this._line !== 0 && L === 1)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (K, Z) {
            this._x.push(+K), this._y.push(+Z);
          },
        };
        function _t(K) {
          var Z,
            L = K.length - 1,
            xt,
            Ot = new Array(L),
            $t = new Array(L),
            Jt = new Array(L);
          for (
            Ot[0] = 0, $t[0] = 2, Jt[0] = K[0] + 2 * K[1], Z = 1;
            Z < L - 1;
            ++Z
          )
            (Ot[Z] = 1), ($t[Z] = 4), (Jt[Z] = 4 * K[Z] + 2 * K[Z + 1]);
          for (
            Ot[L - 1] = 2,
              $t[L - 1] = 7,
              Jt[L - 1] = 8 * K[L - 1] + K[L],
              Z = 1;
            Z < L;
            ++Z
          )
            (xt = Ot[Z] / $t[Z - 1]), ($t[Z] -= xt), (Jt[Z] -= xt * Jt[Z - 1]);
          for (Ot[L - 1] = Jt[L - 1] / $t[L - 1], Z = L - 2; Z >= 0; --Z)
            Ot[Z] = (Jt[Z] - Ot[Z + 1]) / $t[Z];
          for ($t[L - 1] = (K[L] + Ot[L - 1]) / 2, Z = 0; Z < L - 1; ++Z)
            $t[Z] = 2 * K[Z + 1] - Ot[Z + 1];
          return [Ot, $t];
        }
        function j(K) {
          return new ot(K);
        }
        function N(K, Z) {
          (this._context = K), (this._t = Z);
        }
        N.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = this._y = NaN), (this._point = 0);
          },
          lineEnd: function () {
            0 < this._t &&
              this._t < 1 &&
              this._point === 2 &&
              this._context.lineTo(this._x, this._y),
              (this._line || (this._line !== 0 && this._point === 1)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (K, Z) {
            switch (((K = +K), (Z = +Z), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(K, Z)
                    : this._context.moveTo(K, Z);
                break;
              case 1:
                this._point = 2;
              default: {
                if (this._t <= 0)
                  this._context.lineTo(this._x, Z), this._context.lineTo(K, Z);
                else {
                  var L = this._x * (1 - this._t) + K * this._t;
                  this._context.lineTo(L, this._y), this._context.lineTo(L, Z);
                }
                break;
              }
            }
            (this._x = K), (this._y = Z);
          },
        };
        function M(K) {
          return new N(K, 0.5);
        }
        function X(K) {
          return new N(K, 0);
        }
        function v(K) {
          return new N(K, 1);
        }
        var f = r(57949),
          E = r(94770),
          _ = r(5823);
        function A(K) {
          return K[0];
        }
        function c(K) {
          return K[1];
        }
        function P(K, Z) {
          var L = (0, E.A)(!0),
            xt = null,
            Ot = te,
            $t = null,
            Jt = (0, _.i)(le);
          (K = typeof K == "function" ? K : K === void 0 ? A : (0, E.A)(K)),
            (Z = typeof Z == "function" ? Z : Z === void 0 ? c : (0, E.A)(Z));
          function le(W) {
            var $,
              Ct = (W = (0, f.A)(W)).length,
              Pt,
              ee = !1,
              Ie;
            for (xt == null && ($t = Ot((Ie = Jt()))), $ = 0; $ <= Ct; ++$)
              !($ < Ct && L((Pt = W[$]), $, W)) === ee &&
                ((ee = !ee) ? $t.lineStart() : $t.lineEnd()),
                ee && $t.point(+K(Pt, $, W), +Z(Pt, $, W));
            if (Ie) return ($t = null), Ie + "" || null;
          }
          return (
            (le.x = function (W) {
              return arguments.length
                ? ((K = typeof W == "function" ? W : (0, E.A)(+W)), le)
                : K;
            }),
            (le.y = function (W) {
              return arguments.length
                ? ((Z = typeof W == "function" ? W : (0, E.A)(+W)), le)
                : Z;
            }),
            (le.defined = function (W) {
              return arguments.length
                ? ((L = typeof W == "function" ? W : (0, E.A)(!!W)), le)
                : L;
            }),
            (le.curve = function (W) {
              return arguments.length
                ? ((Ot = W), xt != null && ($t = Ot(xt)), le)
                : Ot;
            }),
            (le.context = function (W) {
              return arguments.length
                ? (W == null ? (xt = $t = null) : ($t = Ot((xt = W))), le)
                : xt;
            }),
            le
          );
        }
        function D(K, Z, L) {
          var xt = null,
            Ot = (0, E.A)(!0),
            $t = null,
            Jt = te,
            le = null,
            W = (0, _.i)($);
          (K = typeof K == "function" ? K : K === void 0 ? A : (0, E.A)(+K)),
            (Z =
              typeof Z == "function"
                ? Z
                : Z === void 0
                  ? (0, E.A)(0)
                  : (0, E.A)(+Z)),
            (L = typeof L == "function" ? L : L === void 0 ? c : (0, E.A)(+L));
          function $(Pt) {
            var ee,
              Ie,
              Ge,
              we = (Pt = (0, f.A)(Pt)).length,
              We,
              Je = !1,
              Xe,
              hn = new Array(we),
              bn = new Array(we);
            for ($t == null && (le = Jt((Xe = W()))), ee = 0; ee <= we; ++ee) {
              if (!(ee < we && Ot((We = Pt[ee]), ee, Pt)) === Je)
                if ((Je = !Je)) (Ie = ee), le.areaStart(), le.lineStart();
                else {
                  for (
                    le.lineEnd(), le.lineStart(), Ge = ee - 1;
                    Ge >= Ie;
                    --Ge
                  )
                    le.point(hn[Ge], bn[Ge]);
                  le.lineEnd(), le.areaEnd();
                }
              Je &&
                ((hn[ee] = +K(We, ee, Pt)),
                (bn[ee] = +Z(We, ee, Pt)),
                le.point(
                  xt ? +xt(We, ee, Pt) : hn[ee],
                  L ? +L(We, ee, Pt) : bn[ee],
                ));
            }
            if (Xe) return (le = null), Xe + "" || null;
          }
          function Ct() {
            return P().defined(Ot).curve(Jt).context($t);
          }
          return (
            ($.x = function (Pt) {
              return arguments.length
                ? ((K = typeof Pt == "function" ? Pt : (0, E.A)(+Pt)),
                  (xt = null),
                  $)
                : K;
            }),
            ($.x0 = function (Pt) {
              return arguments.length
                ? ((K = typeof Pt == "function" ? Pt : (0, E.A)(+Pt)), $)
                : K;
            }),
            ($.x1 = function (Pt) {
              return arguments.length
                ? ((xt =
                    Pt == null
                      ? null
                      : typeof Pt == "function"
                        ? Pt
                        : (0, E.A)(+Pt)),
                  $)
                : xt;
            }),
            ($.y = function (Pt) {
              return arguments.length
                ? ((Z = typeof Pt == "function" ? Pt : (0, E.A)(+Pt)),
                  (L = null),
                  $)
                : Z;
            }),
            ($.y0 = function (Pt) {
              return arguments.length
                ? ((Z = typeof Pt == "function" ? Pt : (0, E.A)(+Pt)), $)
                : Z;
            }),
            ($.y1 = function (Pt) {
              return arguments.length
                ? ((L =
                    Pt == null
                      ? null
                      : typeof Pt == "function"
                        ? Pt
                        : (0, E.A)(+Pt)),
                  $)
                : L;
            }),
            ($.lineX0 = $.lineY0 =
              function () {
                return Ct().x(K).y(Z);
              }),
            ($.lineY1 = function () {
              return Ct().x(K).y(L);
            }),
            ($.lineX1 = function () {
              return Ct().x(xt).y(Z);
            }),
            ($.defined = function (Pt) {
              return arguments.length
                ? ((Ot = typeof Pt == "function" ? Pt : (0, E.A)(!!Pt)), $)
                : Ot;
            }),
            ($.curve = function (Pt) {
              return arguments.length
                ? ((Jt = Pt), $t != null && (le = Jt($t)), $)
                : Jt;
            }),
            ($.context = function (Pt) {
              return arguments.length
                ? (Pt == null ? ($t = le = null) : (le = Jt(($t = Pt))), $)
                : $t;
            }),
            $
          );
        }
        var x = r(4842),
          k = r.n(x),
          Y = r(3316),
          J = r.n(Y),
          Mt = r(34164),
          q = r(43998),
          yt = r(93563),
          ft = r(96714);
        function bt(K) {
          "@babel/helpers - typeof";
          return (
            (bt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (Z) {
                    return typeof Z;
                  }
                : function (Z) {
                    return Z &&
                      typeof Symbol == "function" &&
                      Z.constructor === Symbol &&
                      Z !== Symbol.prototype
                      ? "symbol"
                      : typeof Z;
                  }),
            bt(K)
          );
        }
        function Ut() {
          return (
            (Ut = Object.assign
              ? Object.assign.bind()
              : function (K) {
                  for (var Z = 1; Z < arguments.length; Z++) {
                    var L = arguments[Z];
                    for (var xt in L)
                      Object.prototype.hasOwnProperty.call(L, xt) &&
                        (K[xt] = L[xt]);
                  }
                  return K;
                }),
            Ut.apply(this, arguments)
          );
        }
        function Ht(K, Z) {
          var L = Object.keys(K);
          if (Object.getOwnPropertySymbols) {
            var xt = Object.getOwnPropertySymbols(K);
            Z &&
              (xt = xt.filter(function (Ot) {
                return Object.getOwnPropertyDescriptor(K, Ot).enumerable;
              })),
              L.push.apply(L, xt);
          }
          return L;
        }
        function ut(K) {
          for (var Z = 1; Z < arguments.length; Z++) {
            var L = arguments[Z] != null ? arguments[Z] : {};
            Z % 2
              ? Ht(Object(L), !0).forEach(function (xt) {
                  o(K, xt, L[xt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    K,
                    Object.getOwnPropertyDescriptors(L),
                  )
                : Ht(Object(L)).forEach(function (xt) {
                    Object.defineProperty(
                      K,
                      xt,
                      Object.getOwnPropertyDescriptor(L, xt),
                    );
                  });
          }
          return K;
        }
        function o(K, Z, L) {
          return (
            (Z = h(Z)),
            Z in K
              ? Object.defineProperty(K, Z, {
                  value: L,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (K[Z] = L),
            K
          );
        }
        function h(K) {
          var Z = O(K, "string");
          return bt(Z) == "symbol" ? Z : Z + "";
        }
        function O(K, Z) {
          if (bt(K) != "object" || !K) return K;
          var L = K[Symbol.toPrimitive];
          if (L !== void 0) {
            var xt = L.call(K, Z || "default");
            if (bt(xt) != "object") return xt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (Z === "string" ? String : Number)(K);
        }
        var d = {
            curveBasisClosed: G,
            curveBasisOpen: ct,
            curveBasis: U,
            curveBumpX: V,
            curveBumpY: mt,
            curveLinearClosed: Ft,
            curveLinear: te,
            curveMonotoneX: y,
            curveMonotoneY: rt,
            curveNatural: j,
            curveStep: M,
            curveStepAfter: v,
            curveStepBefore: X,
          },
          R = function (Z) {
            return Z.x === +Z.x && Z.y === +Z.y;
          },
          Q = function (Z) {
            return Z.x;
          },
          wt = function (Z) {
            return Z.y;
          },
          zt = function (Z, L) {
            if (J()(Z)) return Z;
            var xt = "curve".concat(k()(Z));
            return (xt === "curveMonotone" || xt === "curveBump") && L
              ? d["".concat(xt).concat(L === "vertical" ? "Y" : "X")]
              : d[xt] || te;
          },
          Vt = function (Z) {
            var L = Z.type,
              xt = L === void 0 ? "linear" : L,
              Ot = Z.points,
              $t = Ot === void 0 ? [] : Ot,
              Jt = Z.baseLine,
              le = Z.layout,
              W = Z.connectNulls,
              $ = W === void 0 ? !1 : W,
              Ct = zt(xt, le),
              Pt = $
                ? $t.filter(function (we) {
                    return R(we);
                  })
                : $t,
              ee;
            if (Array.isArray(Jt)) {
              var Ie = $
                  ? Jt.filter(function (we) {
                      return R(we);
                    })
                  : Jt,
                Ge = Pt.map(function (we, We) {
                  return ut(ut({}, we), {}, { base: Ie[We] });
                });
              return (
                le === "vertical"
                  ? (ee = D()
                      .y(wt)
                      .x1(Q)
                      .x0(function (we) {
                        return we.base.x;
                      }))
                  : (ee = D()
                      .x(Q)
                      .y1(wt)
                      .y0(function (we) {
                        return we.base.y;
                      })),
                ee.defined(R).curve(Ct),
                ee(Ge)
              );
            }
            return (
              le === "vertical" && (0, ft.Et)(Jt)
                ? (ee = D().y(wt).x1(Q).x0(Jt))
                : (0, ft.Et)(Jt)
                  ? (ee = D().x(Q).y1(wt).y0(Jt))
                  : (ee = P().x(Q).y(wt)),
              ee.defined(R).curve(Ct),
              ee(Pt)
            );
          },
          se = function (Z) {
            var L = Z.className,
              xt = Z.points,
              Ot = Z.path,
              $t = Z.pathRef;
            if ((!xt || !xt.length) && !Ot) return null;
            var Jt = xt && xt.length ? Vt(Z) : Ot;
            return l.createElement(
              "path",
              Ut({}, (0, yt.J9)(Z, !1), (0, q._U)(Z), {
                className: (0, Mt.A)("recharts-curve", L),
                d: Jt,
                ref: $t,
              }),
            );
          };
      },
      21687: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { c: () => tt });
        var l = r(90626),
          F = r(34164),
          H = r(43998),
          it = r(93563);
        function U() {
          return (
            (U = Object.assign
              ? Object.assign.bind()
              : function (G) {
                  for (var lt = 1; lt < arguments.length; lt++) {
                    var ct = arguments[lt];
                    for (var at in ct)
                      Object.prototype.hasOwnProperty.call(ct, at) &&
                        (G[at] = ct[at]);
                  }
                  return G;
                }),
            U.apply(this, arguments)
          );
        }
        var tt = function (lt) {
          var ct = lt.cx,
            at = lt.cy,
            st = lt.r,
            V = lt.className,
            mt = (0, F.A)("recharts-dot", V);
          return ct === +ct && at === +at && st === +st
            ? l.createElement(
                "circle",
                U({}, (0, it.J9)(lt, !1), (0, H._U)(lt), {
                  className: mt,
                  cx: ct,
                  cy: at,
                  r: st,
                }),
              )
            : null;
        };
      },
      52857: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { J: () => kt, M: () => vt });
        var l = r(90626),
          F = r(34164),
          H = r(86356),
          it = r(93563);
        function U(I) {
          "@babel/helpers - typeof";
          return (
            (U =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (m) {
                    return typeof m;
                  }
                : function (m) {
                    return m &&
                      typeof Symbol == "function" &&
                      m.constructor === Symbol &&
                      m !== Symbol.prototype
                      ? "symbol"
                      : typeof m;
                  }),
            U(I)
          );
        }
        function tt() {
          return (
            (tt = Object.assign
              ? Object.assign.bind()
              : function (I) {
                  for (var m = 1; m < arguments.length; m++) {
                    var S = arguments[m];
                    for (var g in S)
                      Object.prototype.hasOwnProperty.call(S, g) &&
                        (I[g] = S[g]);
                  }
                  return I;
                }),
            tt.apply(this, arguments)
          );
        }
        function G(I, m) {
          return V(I) || st(I, m) || ct(I, m) || lt();
        }
        function lt() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function ct(I, m) {
          if (I) {
            if (typeof I == "string") return at(I, m);
            var S = Object.prototype.toString.call(I).slice(8, -1);
            if (
              (S === "Object" && I.constructor && (S = I.constructor.name),
              S === "Map" || S === "Set")
            )
              return Array.from(I);
            if (
              S === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)
            )
              return at(I, m);
          }
        }
        function at(I, m) {
          (m == null || m > I.length) && (m = I.length);
          for (var S = 0, g = new Array(m); S < m; S++) g[S] = I[S];
          return g;
        }
        function st(I, m) {
          var S =
            I == null
              ? null
              : (typeof Symbol < "u" && I[Symbol.iterator]) || I["@@iterator"];
          if (S != null) {
            var g,
              y,
              rt,
              ot,
              _t = [],
              j = !0,
              N = !1;
            try {
              if (((rt = (S = S.call(I)).next), m === 0)) {
                if (Object(S) !== S) return;
                j = !1;
              } else
                for (
                  ;
                  !(j = (g = rt.call(S)).done) &&
                  (_t.push(g.value), _t.length !== m);
                  j = !0
                );
            } catch (M) {
              (N = !0), (y = M);
            } finally {
              try {
                if (
                  !j &&
                  S.return != null &&
                  ((ot = S.return()), Object(ot) !== ot)
                )
                  return;
              } finally {
                if (N) throw y;
              }
            }
            return _t;
          }
        }
        function V(I) {
          if (Array.isArray(I)) return I;
        }
        function mt(I, m) {
          var S = Object.keys(I);
          if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(I);
            m &&
              (g = g.filter(function (y) {
                return Object.getOwnPropertyDescriptor(I, y).enumerable;
              })),
              S.push.apply(S, g);
          }
          return S;
        }
        function et(I) {
          for (var m = 1; m < arguments.length; m++) {
            var S = arguments[m] != null ? arguments[m] : {};
            m % 2
              ? mt(Object(S), !0).forEach(function (g) {
                  St(I, g, S[g]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    I,
                    Object.getOwnPropertyDescriptors(S),
                  )
                : mt(Object(S)).forEach(function (g) {
                    Object.defineProperty(
                      I,
                      g,
                      Object.getOwnPropertyDescriptor(S, g),
                    );
                  });
          }
          return I;
        }
        function St(I, m, S) {
          return (
            (m = Ft(m)),
            m in I
              ? Object.defineProperty(I, m, {
                  value: S,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (I[m] = S),
            I
          );
        }
        function Ft(I) {
          var m = nt(I, "string");
          return U(m) == "symbol" ? m : m + "";
        }
        function nt(I, m) {
          if (U(I) != "object" || !I) return I;
          var S = I[Symbol.toPrimitive];
          if (S !== void 0) {
            var g = S.call(I, m || "default");
            if (U(g) != "object") return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (m === "string" ? String : Number)(I);
        }
        var te = function (m, S, g, y, rt) {
            var ot = Math.min(Math.abs(g) / 2, Math.abs(y) / 2),
              _t = y >= 0 ? 1 : -1,
              j = g >= 0 ? 1 : -1,
              N = (y >= 0 && g >= 0) || (y < 0 && g < 0) ? 1 : 0,
              M;
            if (ot > 0 && rt instanceof Array) {
              for (var X = [0, 0, 0, 0], v = 0, f = 4; v < f; v++)
                X[v] = rt[v] > ot ? ot : rt[v];
              (M = "M".concat(m, ",").concat(S + _t * X[0])),
                X[0] > 0 &&
                  (M += "A "
                    .concat(X[0], ",")
                    .concat(X[0], ",0,0,")
                    .concat(N, ",")
                    .concat(m + j * X[0], ",")
                    .concat(S)),
                (M += "L ".concat(m + g - j * X[1], ",").concat(S)),
                X[1] > 0 &&
                  (M += "A "
                    .concat(X[1], ",")
                    .concat(X[1], ",0,0,")
                    .concat(
                      N,
                      `,
        `,
                    )
                    .concat(m + g, ",")
                    .concat(S + _t * X[1])),
                (M += "L ".concat(m + g, ",").concat(S + y - _t * X[2])),
                X[2] > 0 &&
                  (M += "A "
                    .concat(X[2], ",")
                    .concat(X[2], ",0,0,")
                    .concat(
                      N,
                      `,
        `,
                    )
                    .concat(m + g - j * X[2], ",")
                    .concat(S + y)),
                (M += "L ".concat(m + j * X[3], ",").concat(S + y)),
                X[3] > 0 &&
                  (M += "A "
                    .concat(X[3], ",")
                    .concat(X[3], ",0,0,")
                    .concat(
                      N,
                      `,
        `,
                    )
                    .concat(m, ",")
                    .concat(S + y - _t * X[3])),
                (M += "Z");
            } else if (ot > 0 && rt === +rt && rt > 0) {
              var E = Math.min(ot, rt);
              M = "M "
                .concat(m, ",")
                .concat(
                  S + _t * E,
                  `
            A `,
                )
                .concat(E, ",")
                .concat(E, ",0,0,")
                .concat(N, ",")
                .concat(m + j * E, ",")
                .concat(
                  S,
                  `
            L `,
                )
                .concat(m + g - j * E, ",")
                .concat(
                  S,
                  `
            A `,
                )
                .concat(E, ",")
                .concat(E, ",0,0,")
                .concat(N, ",")
                .concat(m + g, ",")
                .concat(
                  S + _t * E,
                  `
            L `,
                )
                .concat(m + g, ",")
                .concat(
                  S + y - _t * E,
                  `
            A `,
                )
                .concat(E, ",")
                .concat(E, ",0,0,")
                .concat(N, ",")
                .concat(m + g - j * E, ",")
                .concat(
                  S + y,
                  `
            L `,
                )
                .concat(m + j * E, ",")
                .concat(
                  S + y,
                  `
            A `,
                )
                .concat(E, ",")
                .concat(E, ",0,0,")
                .concat(N, ",")
                .concat(m, ",")
                .concat(S + y - _t * E, " Z");
            } else
              M = "M "
                .concat(m, ",")
                .concat(S, " h ")
                .concat(g, " v ")
                .concat(y, " h ")
                .concat(-g, " Z");
            return M;
          },
          kt = function (m, S) {
            if (!m || !S) return !1;
            var g = m.x,
              y = m.y,
              rt = S.x,
              ot = S.y,
              _t = S.width,
              j = S.height;
            if (Math.abs(_t) > 0 && Math.abs(j) > 0) {
              var N = Math.min(rt, rt + _t),
                M = Math.max(rt, rt + _t),
                X = Math.min(ot, ot + j),
                v = Math.max(ot, ot + j);
              return g >= N && g <= M && y >= X && y <= v;
            }
            return !1;
          },
          Tt = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            radius: 0,
            isAnimationActive: !1,
            isUpdateAnimationActive: !1,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
          },
          vt = function (m) {
            var S = et(et({}, Tt), m),
              g = (0, l.useRef)(),
              y = (0, l.useState)(-1),
              rt = G(y, 2),
              ot = rt[0],
              _t = rt[1];
            (0, l.useEffect)(function () {
              if (g.current && g.current.getTotalLength)
                try {
                  var x = g.current.getTotalLength();
                  x && _t(x);
                } catch {}
            }, []);
            var j = S.x,
              N = S.y,
              M = S.width,
              X = S.height,
              v = S.radius,
              f = S.className,
              E = S.animationEasing,
              _ = S.animationDuration,
              A = S.animationBegin,
              c = S.isAnimationActive,
              P = S.isUpdateAnimationActive;
            if (
              j !== +j ||
              N !== +N ||
              M !== +M ||
              X !== +X ||
              M === 0 ||
              X === 0
            )
              return null;
            var D = (0, F.A)("recharts-rectangle", f);
            return P
              ? l.createElement(
                  H.Ay,
                  {
                    canBegin: ot > 0,
                    from: { width: M, height: X, x: j, y: N },
                    to: { width: M, height: X, x: j, y: N },
                    duration: _,
                    animationEasing: E,
                    isActive: P,
                  },
                  function (x) {
                    var k = x.width,
                      Y = x.height,
                      J = x.x,
                      Mt = x.y;
                    return l.createElement(
                      H.Ay,
                      {
                        canBegin: ot > 0,
                        from: "0px ".concat(ot === -1 ? 1 : ot, "px"),
                        to: "".concat(ot, "px 0px"),
                        attributeName: "strokeDasharray",
                        begin: A,
                        duration: _,
                        isActive: c,
                        easing: E,
                      },
                      l.createElement(
                        "path",
                        tt({}, (0, it.J9)(S, !0), {
                          className: D,
                          d: te(J, Mt, k, Y, v),
                          ref: g,
                        }),
                      ),
                    );
                  },
                )
              : l.createElement(
                  "path",
                  tt({}, (0, it.J9)(S, !0), {
                    className: D,
                    d: te(j, N, M, X, v),
                  }),
                );
          };
      },
      24588: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { h: () => te });
        var l = r(90626),
          F = r(34164),
          H = r(93563),
          it = r(90134),
          U = r(96714);
        function tt(kt) {
          "@babel/helpers - typeof";
          return (
            (tt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (Tt) {
                    return typeof Tt;
                  }
                : function (Tt) {
                    return Tt &&
                      typeof Symbol == "function" &&
                      Tt.constructor === Symbol &&
                      Tt !== Symbol.prototype
                      ? "symbol"
                      : typeof Tt;
                  }),
            tt(kt)
          );
        }
        function G() {
          return (
            (G = Object.assign
              ? Object.assign.bind()
              : function (kt) {
                  for (var Tt = 1; Tt < arguments.length; Tt++) {
                    var vt = arguments[Tt];
                    for (var I in vt)
                      Object.prototype.hasOwnProperty.call(vt, I) &&
                        (kt[I] = vt[I]);
                  }
                  return kt;
                }),
            G.apply(this, arguments)
          );
        }
        function lt(kt, Tt) {
          var vt = Object.keys(kt);
          if (Object.getOwnPropertySymbols) {
            var I = Object.getOwnPropertySymbols(kt);
            Tt &&
              (I = I.filter(function (m) {
                return Object.getOwnPropertyDescriptor(kt, m).enumerable;
              })),
              vt.push.apply(vt, I);
          }
          return vt;
        }
        function ct(kt) {
          for (var Tt = 1; Tt < arguments.length; Tt++) {
            var vt = arguments[Tt] != null ? arguments[Tt] : {};
            Tt % 2
              ? lt(Object(vt), !0).forEach(function (I) {
                  at(kt, I, vt[I]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    kt,
                    Object.getOwnPropertyDescriptors(vt),
                  )
                : lt(Object(vt)).forEach(function (I) {
                    Object.defineProperty(
                      kt,
                      I,
                      Object.getOwnPropertyDescriptor(vt, I),
                    );
                  });
          }
          return kt;
        }
        function at(kt, Tt, vt) {
          return (
            (Tt = st(Tt)),
            Tt in kt
              ? Object.defineProperty(kt, Tt, {
                  value: vt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (kt[Tt] = vt),
            kt
          );
        }
        function st(kt) {
          var Tt = V(kt, "string");
          return tt(Tt) == "symbol" ? Tt : Tt + "";
        }
        function V(kt, Tt) {
          if (tt(kt) != "object" || !kt) return kt;
          var vt = kt[Symbol.toPrimitive];
          if (vt !== void 0) {
            var I = vt.call(kt, Tt || "default");
            if (tt(I) != "object") return I;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (Tt === "string" ? String : Number)(kt);
        }
        var mt = function (Tt, vt) {
            var I = (0, U.sA)(vt - Tt),
              m = Math.min(Math.abs(vt - Tt), 359.999);
            return I * m;
          },
          et = function (Tt) {
            var vt = Tt.cx,
              I = Tt.cy,
              m = Tt.radius,
              S = Tt.angle,
              g = Tt.sign,
              y = Tt.isExternal,
              rt = Tt.cornerRadius,
              ot = Tt.cornerIsExternal,
              _t = rt * (y ? 1 : -1) + m,
              j = Math.asin(rt / _t) / it.Kg,
              N = ot ? S : S + g * j,
              M = (0, it.IZ)(vt, I, _t, N),
              X = (0, it.IZ)(vt, I, m, N),
              v = ot ? S - g * j : S,
              f = (0, it.IZ)(vt, I, _t * Math.cos(j * it.Kg), v);
            return { center: M, circleTangency: X, lineTangency: f, theta: j };
          },
          St = function (Tt) {
            var vt = Tt.cx,
              I = Tt.cy,
              m = Tt.innerRadius,
              S = Tt.outerRadius,
              g = Tt.startAngle,
              y = Tt.endAngle,
              rt = mt(g, y),
              ot = g + rt,
              _t = (0, it.IZ)(vt, I, S, g),
              j = (0, it.IZ)(vt, I, S, ot),
              N = "M "
                .concat(_t.x, ",")
                .concat(
                  _t.y,
                  `
    A `,
                )
                .concat(S, ",")
                .concat(
                  S,
                  `,0,
    `,
                )
                .concat(+(Math.abs(rt) > 180), ",")
                .concat(
                  +(g > ot),
                  `,
    `,
                )
                .concat(j.x, ",")
                .concat(
                  j.y,
                  `
  `,
                );
            if (m > 0) {
              var M = (0, it.IZ)(vt, I, m, g),
                X = (0, it.IZ)(vt, I, m, ot);
              N += "L "
                .concat(X.x, ",")
                .concat(
                  X.y,
                  `
            A `,
                )
                .concat(m, ",")
                .concat(
                  m,
                  `,0,
            `,
                )
                .concat(+(Math.abs(rt) > 180), ",")
                .concat(
                  +(g <= ot),
                  `,
            `,
                )
                .concat(M.x, ",")
                .concat(M.y, " Z");
            } else N += "L ".concat(vt, ",").concat(I, " Z");
            return N;
          },
          Ft = function (Tt) {
            var vt = Tt.cx,
              I = Tt.cy,
              m = Tt.innerRadius,
              S = Tt.outerRadius,
              g = Tt.cornerRadius,
              y = Tt.forceCornerRadius,
              rt = Tt.cornerIsExternal,
              ot = Tt.startAngle,
              _t = Tt.endAngle,
              j = (0, U.sA)(_t - ot),
              N = et({
                cx: vt,
                cy: I,
                radius: S,
                angle: ot,
                sign: j,
                cornerRadius: g,
                cornerIsExternal: rt,
              }),
              M = N.circleTangency,
              X = N.lineTangency,
              v = N.theta,
              f = et({
                cx: vt,
                cy: I,
                radius: S,
                angle: _t,
                sign: -j,
                cornerRadius: g,
                cornerIsExternal: rt,
              }),
              E = f.circleTangency,
              _ = f.lineTangency,
              A = f.theta,
              c = rt ? Math.abs(ot - _t) : Math.abs(ot - _t) - v - A;
            if (c < 0)
              return y
                ? "M "
                    .concat(X.x, ",")
                    .concat(
                      X.y,
                      `
        a`,
                    )
                    .concat(g, ",")
                    .concat(g, ",0,0,1,")
                    .concat(
                      g * 2,
                      `,0
        a`,
                    )
                    .concat(g, ",")
                    .concat(g, ",0,0,1,")
                    .concat(
                      -g * 2,
                      `,0
      `,
                    )
                : St({
                    cx: vt,
                    cy: I,
                    innerRadius: m,
                    outerRadius: S,
                    startAngle: ot,
                    endAngle: _t,
                  });
            var P = "M "
              .concat(X.x, ",")
              .concat(
                X.y,
                `
    A`,
              )
              .concat(g, ",")
              .concat(g, ",0,0,")
              .concat(+(j < 0), ",")
              .concat(M.x, ",")
              .concat(
                M.y,
                `
    A`,
              )
              .concat(S, ",")
              .concat(S, ",0,")
              .concat(+(c > 180), ",")
              .concat(+(j < 0), ",")
              .concat(E.x, ",")
              .concat(
                E.y,
                `
    A`,
              )
              .concat(g, ",")
              .concat(g, ",0,0,")
              .concat(+(j < 0), ",")
              .concat(_.x, ",")
              .concat(
                _.y,
                `
  `,
              );
            if (m > 0) {
              var D = et({
                  cx: vt,
                  cy: I,
                  radius: m,
                  angle: ot,
                  sign: j,
                  isExternal: !0,
                  cornerRadius: g,
                  cornerIsExternal: rt,
                }),
                x = D.circleTangency,
                k = D.lineTangency,
                Y = D.theta,
                J = et({
                  cx: vt,
                  cy: I,
                  radius: m,
                  angle: _t,
                  sign: -j,
                  isExternal: !0,
                  cornerRadius: g,
                  cornerIsExternal: rt,
                }),
                Mt = J.circleTangency,
                q = J.lineTangency,
                yt = J.theta,
                ft = rt ? Math.abs(ot - _t) : Math.abs(ot - _t) - Y - yt;
              if (ft < 0 && g === 0)
                return "".concat(P, "L").concat(vt, ",").concat(I, "Z");
              P += "L"
                .concat(q.x, ",")
                .concat(
                  q.y,
                  `
      A`,
                )
                .concat(g, ",")
                .concat(g, ",0,0,")
                .concat(+(j < 0), ",")
                .concat(Mt.x, ",")
                .concat(
                  Mt.y,
                  `
      A`,
                )
                .concat(m, ",")
                .concat(m, ",0,")
                .concat(+(ft > 180), ",")
                .concat(+(j > 0), ",")
                .concat(x.x, ",")
                .concat(
                  x.y,
                  `
      A`,
                )
                .concat(g, ",")
                .concat(g, ",0,0,")
                .concat(+(j < 0), ",")
                .concat(k.x, ",")
                .concat(k.y, "Z");
            } else P += "L".concat(vt, ",").concat(I, "Z");
            return P;
          },
          nt = {
            cx: 0,
            cy: 0,
            innerRadius: 0,
            outerRadius: 0,
            startAngle: 0,
            endAngle: 0,
            cornerRadius: 0,
            forceCornerRadius: !1,
            cornerIsExternal: !1,
          },
          te = function (Tt) {
            var vt = ct(ct({}, nt), Tt),
              I = vt.cx,
              m = vt.cy,
              S = vt.innerRadius,
              g = vt.outerRadius,
              y = vt.cornerRadius,
              rt = vt.forceCornerRadius,
              ot = vt.cornerIsExternal,
              _t = vt.startAngle,
              j = vt.endAngle,
              N = vt.className;
            if (g < S || _t === j) return null;
            var M = (0, F.A)("recharts-sector", N),
              X = g - S,
              v = (0, U.F4)(y, X, 0, !0),
              f;
            return (
              v > 0 && Math.abs(_t - j) < 360
                ? (f = Ft({
                    cx: I,
                    cy: m,
                    innerRadius: S,
                    outerRadius: g,
                    cornerRadius: Math.min(v, X / 2),
                    forceCornerRadius: rt,
                    cornerIsExternal: ot,
                    startAngle: _t,
                    endAngle: j,
                  }))
                : (f = St({
                    cx: I,
                    cy: m,
                    innerRadius: S,
                    outerRadius: g,
                    startAngle: _t,
                    endAngle: j,
                  })),
              l.createElement(
                "path",
                G({}, (0, H.J9)(vt, !0), { className: M, d: f, role: "img" }),
              )
            );
          };
      },
      17134: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { i: () => Z });
        var l = r(90626),
          F = r(4842),
          H = r.n(F);
        const it = Math.abs,
          U = Math.atan2,
          tt = Math.cos,
          G = Math.max,
          lt = Math.min,
          ct = Math.sin,
          at = Math.sqrt,
          st = 1e-12,
          V = Math.PI,
          mt = V / 2,
          et = 2 * V;
        function St(L) {
          return L > 1 ? 0 : L < -1 ? V : Math.acos(L);
        }
        function Ft(L) {
          return L >= 1 ? mt : L <= -1 ? -mt : Math.asin(L);
        }
        const nt = {
            draw(L, xt) {
              const Ot = at(xt / V);
              L.moveTo(Ot, 0), L.arc(0, 0, Ot, 0, et);
            },
          },
          te = {
            draw(L, xt) {
              const Ot = at(xt / 5) / 2;
              L.moveTo(-3 * Ot, -Ot),
                L.lineTo(-Ot, -Ot),
                L.lineTo(-Ot, -3 * Ot),
                L.lineTo(Ot, -3 * Ot),
                L.lineTo(Ot, -Ot),
                L.lineTo(3 * Ot, -Ot),
                L.lineTo(3 * Ot, Ot),
                L.lineTo(Ot, Ot),
                L.lineTo(Ot, 3 * Ot),
                L.lineTo(-Ot, 3 * Ot),
                L.lineTo(-Ot, Ot),
                L.lineTo(-3 * Ot, Ot),
                L.closePath();
            },
          },
          kt = at(1 / 3),
          Tt = kt * 2,
          vt = {
            draw(L, xt) {
              const Ot = at(xt / Tt),
                $t = Ot * kt;
              L.moveTo(0, -Ot),
                L.lineTo($t, 0),
                L.lineTo(0, Ot),
                L.lineTo(-$t, 0),
                L.closePath();
            },
          },
          I = {
            draw(L, xt) {
              const Ot = at(xt),
                $t = -Ot / 2;
              L.rect($t, $t, Ot, Ot);
            },
          },
          m = 0.8908130915292852,
          S = ct(V / 10) / ct((7 * V) / 10),
          g = ct(et / 10) * S,
          y = -tt(et / 10) * S,
          rt = {
            draw(L, xt) {
              const Ot = at(xt * m),
                $t = g * Ot,
                Jt = y * Ot;
              L.moveTo(0, -Ot), L.lineTo($t, Jt);
              for (let le = 1; le < 5; ++le) {
                const W = (et * le) / 5,
                  $ = tt(W),
                  Ct = ct(W);
                L.lineTo(Ct * Ot, -$ * Ot),
                  L.lineTo($ * $t - Ct * Jt, Ct * $t + $ * Jt);
              }
              L.closePath();
            },
          },
          ot = at(3),
          _t = {
            draw(L, xt) {
              const Ot = -at(xt / (ot * 3));
              L.moveTo(0, Ot * 2),
                L.lineTo(-ot * Ot, -Ot),
                L.lineTo(ot * Ot, -Ot),
                L.closePath();
            },
          },
          j = -0.5,
          N = at(3) / 2,
          M = 1 / at(12),
          X = (M / 2 + 1) * 3,
          v = {
            draw(L, xt) {
              const Ot = at(xt / X),
                $t = Ot / 2,
                Jt = Ot * M,
                le = $t,
                W = Ot * M + Ot,
                $ = -le,
                Ct = W;
              L.moveTo($t, Jt),
                L.lineTo(le, W),
                L.lineTo($, Ct),
                L.lineTo(j * $t - N * Jt, N * $t + j * Jt),
                L.lineTo(j * le - N * W, N * le + j * W),
                L.lineTo(j * $ - N * Ct, N * $ + j * Ct),
                L.lineTo(j * $t + N * Jt, j * Jt - N * $t),
                L.lineTo(j * le + N * W, j * W - N * le),
                L.lineTo(j * $ + N * Ct, j * Ct - N * $),
                L.closePath();
            },
          };
        var f = r(94770),
          E = r(5823);
        const _ = at(3),
          A = {
            draw(L, xt) {
              const Ot = at(xt + lt(xt / 28, 0.75)) * 0.59436,
                $t = Ot / 2,
                Jt = $t * _;
              L.moveTo(0, Ot),
                L.lineTo(0, -Ot),
                L.moveTo(-Jt, -$t),
                L.lineTo(Jt, $t),
                L.moveTo(-Jt, $t),
                L.lineTo(Jt, -$t);
            },
          },
          c = {
            draw(L, xt) {
              const Ot = at(xt) * 0.62625;
              L.moveTo(0, -Ot),
                L.lineTo(Ot, 0),
                L.lineTo(0, Ot),
                L.lineTo(-Ot, 0),
                L.closePath();
            },
          },
          P = {
            draw(L, xt) {
              const Ot = at(xt - lt(xt / 7, 2)) * 0.87559;
              L.moveTo(-Ot, 0),
                L.lineTo(Ot, 0),
                L.moveTo(0, Ot),
                L.lineTo(0, -Ot);
            },
          },
          D = {
            draw(L, xt) {
              const Ot = at(xt) * 0.4431;
              L.moveTo(Ot, Ot),
                L.lineTo(Ot, -Ot),
                L.lineTo(-Ot, -Ot),
                L.lineTo(-Ot, Ot),
                L.closePath();
            },
          },
          x = at(3),
          k = {
            draw(L, xt) {
              const Ot = at(xt) * 0.6824,
                $t = Ot / 2,
                Jt = (Ot * x) / 2;
              L.moveTo(0, -Ot),
                L.lineTo(Jt, $t),
                L.lineTo(-Jt, $t),
                L.closePath();
            },
          },
          Y = {
            draw(L, xt) {
              const Ot = at(xt - lt(xt / 6, 1.7)) * 0.6189;
              L.moveTo(-Ot, -Ot),
                L.lineTo(Ot, Ot),
                L.moveTo(-Ot, Ot),
                L.lineTo(Ot, -Ot);
            },
          },
          J = [nt, te, vt, I, rt, _t, v],
          Mt = [nt, P, Y, k, A, D, c];
        function q(L, xt) {
          let Ot = null,
            $t = (0, E.i)(Jt);
          (L = typeof L == "function" ? L : (0, f.A)(L || nt)),
            (xt =
              typeof xt == "function"
                ? xt
                : (0, f.A)(xt === void 0 ? 64 : +xt));
          function Jt() {
            let le;
            if (
              (Ot || (Ot = le = $t()),
              L.apply(this, arguments).draw(Ot, +xt.apply(this, arguments)),
              le)
            )
              return (Ot = null), le + "" || null;
          }
          return (
            (Jt.type = function (le) {
              return arguments.length
                ? ((L = typeof le == "function" ? le : (0, f.A)(le)), Jt)
                : L;
            }),
            (Jt.size = function (le) {
              return arguments.length
                ? ((xt = typeof le == "function" ? le : (0, f.A)(+le)), Jt)
                : xt;
            }),
            (Jt.context = function (le) {
              return arguments.length ? ((Ot = le ?? null), Jt) : Ot;
            }),
            Jt
          );
        }
        var yt = r(34164),
          ft = r(93563);
        function bt(L) {
          "@babel/helpers - typeof";
          return (
            (bt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (xt) {
                    return typeof xt;
                  }
                : function (xt) {
                    return xt &&
                      typeof Symbol == "function" &&
                      xt.constructor === Symbol &&
                      xt !== Symbol.prototype
                      ? "symbol"
                      : typeof xt;
                  }),
            bt(L)
          );
        }
        var Ut = ["type", "size", "sizeType"];
        function Ht() {
          return (
            (Ht = Object.assign
              ? Object.assign.bind()
              : function (L) {
                  for (var xt = 1; xt < arguments.length; xt++) {
                    var Ot = arguments[xt];
                    for (var $t in Ot)
                      Object.prototype.hasOwnProperty.call(Ot, $t) &&
                        (L[$t] = Ot[$t]);
                  }
                  return L;
                }),
            Ht.apply(this, arguments)
          );
        }
        function ut(L, xt) {
          var Ot = Object.keys(L);
          if (Object.getOwnPropertySymbols) {
            var $t = Object.getOwnPropertySymbols(L);
            xt &&
              ($t = $t.filter(function (Jt) {
                return Object.getOwnPropertyDescriptor(L, Jt).enumerable;
              })),
              Ot.push.apply(Ot, $t);
          }
          return Ot;
        }
        function o(L) {
          for (var xt = 1; xt < arguments.length; xt++) {
            var Ot = arguments[xt] != null ? arguments[xt] : {};
            xt % 2
              ? ut(Object(Ot), !0).forEach(function ($t) {
                  h(L, $t, Ot[$t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    L,
                    Object.getOwnPropertyDescriptors(Ot),
                  )
                : ut(Object(Ot)).forEach(function ($t) {
                    Object.defineProperty(
                      L,
                      $t,
                      Object.getOwnPropertyDescriptor(Ot, $t),
                    );
                  });
          }
          return L;
        }
        function h(L, xt, Ot) {
          return (
            (xt = O(xt)),
            xt in L
              ? Object.defineProperty(L, xt, {
                  value: Ot,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (L[xt] = Ot),
            L
          );
        }
        function O(L) {
          var xt = d(L, "string");
          return bt(xt) == "symbol" ? xt : xt + "";
        }
        function d(L, xt) {
          if (bt(L) != "object" || !L) return L;
          var Ot = L[Symbol.toPrimitive];
          if (Ot !== void 0) {
            var $t = Ot.call(L, xt || "default");
            if (bt($t) != "object") return $t;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (xt === "string" ? String : Number)(L);
        }
        function R(L, xt) {
          if (L == null) return {};
          var Ot = Q(L, xt),
            $t,
            Jt;
          if (Object.getOwnPropertySymbols) {
            var le = Object.getOwnPropertySymbols(L);
            for (Jt = 0; Jt < le.length; Jt++)
              ($t = le[Jt]),
                !(xt.indexOf($t) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(L, $t) &&
                  (Ot[$t] = L[$t]);
          }
          return Ot;
        }
        function Q(L, xt) {
          if (L == null) return {};
          var Ot = {};
          for (var $t in L)
            if (Object.prototype.hasOwnProperty.call(L, $t)) {
              if (xt.indexOf($t) >= 0) continue;
              Ot[$t] = L[$t];
            }
          return Ot;
        }
        var wt = {
            symbolCircle: nt,
            symbolCross: te,
            symbolDiamond: vt,
            symbolSquare: I,
            symbolStar: rt,
            symbolTriangle: _t,
            symbolWye: v,
          },
          zt = Math.PI / 180,
          Vt = function (xt) {
            var Ot = "symbol".concat(H()(xt));
            return wt[Ot] || nt;
          },
          se = function (xt, Ot, $t) {
            if (Ot === "area") return xt;
            switch ($t) {
              case "cross":
                return (5 * xt * xt) / 9;
              case "diamond":
                return (0.5 * xt * xt) / Math.sqrt(3);
              case "square":
                return xt * xt;
              case "star": {
                var Jt = 18 * zt;
                return (
                  1.25 *
                  xt *
                  xt *
                  (Math.tan(Jt) - Math.tan(Jt * 2) * Math.pow(Math.tan(Jt), 2))
                );
              }
              case "triangle":
                return (Math.sqrt(3) * xt * xt) / 4;
              case "wye":
                return ((21 - 10 * Math.sqrt(3)) * xt * xt) / 8;
              default:
                return (Math.PI * xt * xt) / 4;
            }
          },
          K = function (xt, Ot) {
            wt["symbol".concat(H()(xt))] = Ot;
          },
          Z = function (xt) {
            var Ot = xt.type,
              $t = Ot === void 0 ? "circle" : Ot,
              Jt = xt.size,
              le = Jt === void 0 ? 64 : Jt,
              W = xt.sizeType,
              $ = W === void 0 ? "area" : W,
              Ct = R(xt, Ut),
              Pt = o(o({}, Ct), {}, { type: $t, size: le, sizeType: $ }),
              ee = function () {
                var Xe = Vt($t),
                  hn = q()
                    .type(Xe)
                    .size(se(le, $, $t));
                return hn();
              },
              Ie = Pt.className,
              Ge = Pt.cx,
              we = Pt.cy,
              We = (0, ft.J9)(Pt, !0);
            return Ge === +Ge && we === +we && le === +le
              ? l.createElement(
                  "path",
                  Ht({}, We, {
                    className: (0, yt.A)("recharts-symbols", Ie),
                    transform: "translate(".concat(Ge, ", ").concat(we, ")"),
                    d: ee(),
                  }),
                )
              : null;
          };
        Z.registerSymbol = K;
      },
      53818: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, {
          yp: () => Mt,
          GG: () => O,
          NE: () => q,
          nZ: () => yt,
          xQ: () => ft,
        });
        var l = r(90626),
          F = r(3316),
          H = r.n(F),
          it = r(23449),
          U = r.n(it),
          tt = r(23734),
          G = r.n(tt),
          lt = r(58782),
          ct = r.n(lt),
          at = r(52857),
          st = r(34164),
          V = r(86356),
          mt = r(93563);
        function et(d) {
          "@babel/helpers - typeof";
          return (
            (et =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (R) {
                    return typeof R;
                  }
                : function (R) {
                    return R &&
                      typeof Symbol == "function" &&
                      R.constructor === Symbol &&
                      R !== Symbol.prototype
                      ? "symbol"
                      : typeof R;
                  }),
            et(d)
          );
        }
        function St() {
          return (
            (St = Object.assign
              ? Object.assign.bind()
              : function (d) {
                  for (var R = 1; R < arguments.length; R++) {
                    var Q = arguments[R];
                    for (var wt in Q)
                      Object.prototype.hasOwnProperty.call(Q, wt) &&
                        (d[wt] = Q[wt]);
                  }
                  return d;
                }),
            St.apply(this, arguments)
          );
        }
        function Ft(d, R) {
          return vt(d) || Tt(d, R) || te(d, R) || nt();
        }
        function nt() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function te(d, R) {
          if (d) {
            if (typeof d == "string") return kt(d, R);
            var Q = Object.prototype.toString.call(d).slice(8, -1);
            if (
              (Q === "Object" && d.constructor && (Q = d.constructor.name),
              Q === "Map" || Q === "Set")
            )
              return Array.from(d);
            if (
              Q === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q)
            )
              return kt(d, R);
          }
        }
        function kt(d, R) {
          (R == null || R > d.length) && (R = d.length);
          for (var Q = 0, wt = new Array(R); Q < R; Q++) wt[Q] = d[Q];
          return wt;
        }
        function Tt(d, R) {
          var Q =
            d == null
              ? null
              : (typeof Symbol < "u" && d[Symbol.iterator]) || d["@@iterator"];
          if (Q != null) {
            var wt,
              zt,
              Vt,
              se,
              K = [],
              Z = !0,
              L = !1;
            try {
              if (((Vt = (Q = Q.call(d)).next), R === 0)) {
                if (Object(Q) !== Q) return;
                Z = !1;
              } else
                for (
                  ;
                  !(Z = (wt = Vt.call(Q)).done) &&
                  (K.push(wt.value), K.length !== R);
                  Z = !0
                );
            } catch (xt) {
              (L = !0), (zt = xt);
            } finally {
              try {
                if (
                  !Z &&
                  Q.return != null &&
                  ((se = Q.return()), Object(se) !== se)
                )
                  return;
              } finally {
                if (L) throw zt;
              }
            }
            return K;
          }
        }
        function vt(d) {
          if (Array.isArray(d)) return d;
        }
        function I(d, R) {
          var Q = Object.keys(d);
          if (Object.getOwnPropertySymbols) {
            var wt = Object.getOwnPropertySymbols(d);
            R &&
              (wt = wt.filter(function (zt) {
                return Object.getOwnPropertyDescriptor(d, zt).enumerable;
              })),
              Q.push.apply(Q, wt);
          }
          return Q;
        }
        function m(d) {
          for (var R = 1; R < arguments.length; R++) {
            var Q = arguments[R] != null ? arguments[R] : {};
            R % 2
              ? I(Object(Q), !0).forEach(function (wt) {
                  S(d, wt, Q[wt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    d,
                    Object.getOwnPropertyDescriptors(Q),
                  )
                : I(Object(Q)).forEach(function (wt) {
                    Object.defineProperty(
                      d,
                      wt,
                      Object.getOwnPropertyDescriptor(Q, wt),
                    );
                  });
          }
          return d;
        }
        function S(d, R, Q) {
          return (
            (R = g(R)),
            R in d
              ? Object.defineProperty(d, R, {
                  value: Q,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (d[R] = Q),
            d
          );
        }
        function g(d) {
          var R = y(d, "string");
          return et(R) == "symbol" ? R : R + "";
        }
        function y(d, R) {
          if (et(d) != "object" || !d) return d;
          var Q = d[Symbol.toPrimitive];
          if (Q !== void 0) {
            var wt = Q.call(d, R || "default");
            if (et(wt) != "object") return wt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (R === "string" ? String : Number)(d);
        }
        var rt = function (R, Q, wt, zt, Vt) {
            var se = wt - zt,
              K;
            return (
              (K = "M ".concat(R, ",").concat(Q)),
              (K += "L ".concat(R + wt, ",").concat(Q)),
              (K += "L ".concat(R + wt - se / 2, ",").concat(Q + Vt)),
              (K += "L ".concat(R + wt - se / 2 - zt, ",").concat(Q + Vt)),
              (K += "L ".concat(R, ",").concat(Q, " Z")),
              K
            );
          },
          ot = {
            x: 0,
            y: 0,
            upperWidth: 0,
            lowerWidth: 0,
            height: 0,
            isUpdateAnimationActive: !1,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
          },
          _t = function (R) {
            var Q = m(m({}, ot), R),
              wt = (0, l.useRef)(),
              zt = (0, l.useState)(-1),
              Vt = Ft(zt, 2),
              se = Vt[0],
              K = Vt[1];
            (0, l.useEffect)(function () {
              if (wt.current && wt.current.getTotalLength)
                try {
                  var ee = wt.current.getTotalLength();
                  ee && K(ee);
                } catch {}
            }, []);
            var Z = Q.x,
              L = Q.y,
              xt = Q.upperWidth,
              Ot = Q.lowerWidth,
              $t = Q.height,
              Jt = Q.className,
              le = Q.animationEasing,
              W = Q.animationDuration,
              $ = Q.animationBegin,
              Ct = Q.isUpdateAnimationActive;
            if (
              Z !== +Z ||
              L !== +L ||
              xt !== +xt ||
              Ot !== +Ot ||
              $t !== +$t ||
              (xt === 0 && Ot === 0) ||
              $t === 0
            )
              return null;
            var Pt = (0, st.A)("recharts-trapezoid", Jt);
            return Ct
              ? l.createElement(
                  V.Ay,
                  {
                    canBegin: se > 0,
                    from: {
                      upperWidth: 0,
                      lowerWidth: 0,
                      height: $t,
                      x: Z,
                      y: L,
                    },
                    to: {
                      upperWidth: xt,
                      lowerWidth: Ot,
                      height: $t,
                      x: Z,
                      y: L,
                    },
                    duration: W,
                    animationEasing: le,
                    isActive: Ct,
                  },
                  function (ee) {
                    var Ie = ee.upperWidth,
                      Ge = ee.lowerWidth,
                      we = ee.height,
                      We = ee.x,
                      Je = ee.y;
                    return l.createElement(
                      V.Ay,
                      {
                        canBegin: se > 0,
                        from: "0px ".concat(se === -1 ? 1 : se, "px"),
                        to: "".concat(se, "px 0px"),
                        attributeName: "strokeDasharray",
                        begin: $,
                        duration: W,
                        easing: le,
                      },
                      l.createElement(
                        "path",
                        St({}, (0, mt.J9)(Q, !0), {
                          className: Pt,
                          d: rt(We, Je, Ie, Ge, we),
                          ref: wt,
                        }),
                      ),
                    );
                  },
                )
              : l.createElement(
                  "g",
                  null,
                  l.createElement(
                    "path",
                    St({}, (0, mt.J9)(Q, !0), {
                      className: Pt,
                      d: rt(Z, L, xt, Ot, $t),
                    }),
                  ),
                );
          },
          j = r(24588),
          N = r(75055),
          M = r(17134),
          X = [
            "option",
            "shapeType",
            "propTransformer",
            "activeClassName",
            "isActive",
          ];
        function v(d) {
          "@babel/helpers - typeof";
          return (
            (v =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (R) {
                    return typeof R;
                  }
                : function (R) {
                    return R &&
                      typeof Symbol == "function" &&
                      R.constructor === Symbol &&
                      R !== Symbol.prototype
                      ? "symbol"
                      : typeof R;
                  }),
            v(d)
          );
        }
        function f(d, R) {
          if (d == null) return {};
          var Q = E(d, R),
            wt,
            zt;
          if (Object.getOwnPropertySymbols) {
            var Vt = Object.getOwnPropertySymbols(d);
            for (zt = 0; zt < Vt.length; zt++)
              (wt = Vt[zt]),
                !(R.indexOf(wt) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(d, wt) &&
                  (Q[wt] = d[wt]);
          }
          return Q;
        }
        function E(d, R) {
          if (d == null) return {};
          var Q = {};
          for (var wt in d)
            if (Object.prototype.hasOwnProperty.call(d, wt)) {
              if (R.indexOf(wt) >= 0) continue;
              Q[wt] = d[wt];
            }
          return Q;
        }
        function _(d, R) {
          var Q = Object.keys(d);
          if (Object.getOwnPropertySymbols) {
            var wt = Object.getOwnPropertySymbols(d);
            R &&
              (wt = wt.filter(function (zt) {
                return Object.getOwnPropertyDescriptor(d, zt).enumerable;
              })),
              Q.push.apply(Q, wt);
          }
          return Q;
        }
        function A(d) {
          for (var R = 1; R < arguments.length; R++) {
            var Q = arguments[R] != null ? arguments[R] : {};
            R % 2
              ? _(Object(Q), !0).forEach(function (wt) {
                  c(d, wt, Q[wt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    d,
                    Object.getOwnPropertyDescriptors(Q),
                  )
                : _(Object(Q)).forEach(function (wt) {
                    Object.defineProperty(
                      d,
                      wt,
                      Object.getOwnPropertyDescriptor(Q, wt),
                    );
                  });
          }
          return d;
        }
        function c(d, R, Q) {
          return (
            (R = P(R)),
            R in d
              ? Object.defineProperty(d, R, {
                  value: Q,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (d[R] = Q),
            d
          );
        }
        function P(d) {
          var R = D(d, "string");
          return v(R) == "symbol" ? R : R + "";
        }
        function D(d, R) {
          if (v(d) != "object" || !d) return d;
          var Q = d[Symbol.toPrimitive];
          if (Q !== void 0) {
            var wt = Q.call(d, R || "default");
            if (v(wt) != "object") return wt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (R === "string" ? String : Number)(d);
        }
        function x(d, R) {
          return A(A({}, R), d);
        }
        function k(d, R) {
          return d === "symbols";
        }
        function Y(d) {
          var R = d.shapeType,
            Q = d.elementProps;
          switch (R) {
            case "rectangle":
              return l.createElement(at.M, Q);
            case "trapezoid":
              return l.createElement(_t, Q);
            case "sector":
              return l.createElement(j.h, Q);
            case "symbols":
              if (k(R, Q)) return l.createElement(M.i, Q);
              break;
            default:
              return null;
          }
        }
        function J(d) {
          return (0, l.isValidElement)(d) ? d.props : d;
        }
        function Mt(d) {
          var R = d.option,
            Q = d.shapeType,
            wt = d.propTransformer,
            zt = wt === void 0 ? x : wt,
            Vt = d.activeClassName,
            se = Vt === void 0 ? "recharts-active-shape" : Vt,
            K = d.isActive,
            Z = f(d, X),
            L;
          if ((0, l.isValidElement)(R))
            L = (0, l.cloneElement)(R, A(A({}, Z), J(R)));
          else if (H()(R)) L = R(Z);
          else if (U()(R) && !G()(R)) {
            var xt = zt(R, Z);
            L = l.createElement(Y, { shapeType: Q, elementProps: xt });
          } else {
            var Ot = Z;
            L = l.createElement(Y, { shapeType: Q, elementProps: Ot });
          }
          return K ? l.createElement(N.W, { className: se }, L) : L;
        }
        function q(d, R) {
          return R != null && "trapezoids" in d.props;
        }
        function yt(d, R) {
          return R != null && "sectors" in d.props;
        }
        function ft(d, R) {
          return R != null && "points" in d.props;
        }
        function bt(d, R) {
          var Q,
            wt,
            zt =
              d.x ===
                (R == null || (Q = R.labelViewBox) === null || Q === void 0
                  ? void 0
                  : Q.x) || d.x === R.x,
            Vt =
              d.y ===
                (R == null || (wt = R.labelViewBox) === null || wt === void 0
                  ? void 0
                  : wt.y) || d.y === R.y;
          return zt && Vt;
        }
        function Ut(d, R) {
          var Q = d.endAngle === R.endAngle,
            wt = d.startAngle === R.startAngle;
          return Q && wt;
        }
        function Ht(d, R) {
          var Q = d.x === R.x,
            wt = d.y === R.y,
            zt = d.z === R.z;
          return Q && wt && zt;
        }
        function ut(d, R) {
          var Q;
          return (
            q(d, R) ? (Q = bt) : yt(d, R) ? (Q = Ut) : ft(d, R) && (Q = Ht), Q
          );
        }
        function o(d, R) {
          var Q;
          return (
            q(d, R)
              ? (Q = "trapezoids")
              : yt(d, R)
                ? (Q = "sectors")
                : ft(d, R) && (Q = "points"),
            Q
          );
        }
        function h(d, R) {
          if (q(d, R)) {
            var Q;
            return (Q = R.tooltipPayload) === null ||
              Q === void 0 ||
              (Q = Q[0]) === null ||
              Q === void 0 ||
              (Q = Q.payload) === null ||
              Q === void 0
              ? void 0
              : Q.payload;
          }
          if (yt(d, R)) {
            var wt;
            return (wt = R.tooltipPayload) === null ||
              wt === void 0 ||
              (wt = wt[0]) === null ||
              wt === void 0 ||
              (wt = wt.payload) === null ||
              wt === void 0
              ? void 0
              : wt.payload;
          }
          return ft(d, R) ? R.payload : {};
        }
        function O(d) {
          var R = d.activeTooltipItem,
            Q = d.graphicalItem,
            wt = d.itemData,
            zt = o(Q, R),
            Vt = h(Q, R),
            se = wt.filter(function (Z, L) {
              var xt = ct()(Vt, Z),
                Ot = Q.props[zt].filter(function (le) {
                  var W = ut(Q, R);
                  return W(le, R);
                }),
                $t = Q.props[zt].indexOf(Ot[Ot.length - 1]),
                Jt = L === $t;
              return xt && Jt;
            }),
            K = wt.indexOf(se[se.length - 1]);
          return K;
        }
      },
      12260: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, {
          P2: () => I,
          bx: () => S,
          pr: () => te,
          sl: () => kt,
          vh: () => Tt,
        });
        var l = r(90338),
          F = r.n(l),
          H = r(17489),
          it = r.n(H),
          U = r(61195),
          tt = r(93563),
          G = r(96714),
          lt = r(20283);
        function ct(g) {
          "@babel/helpers - typeof";
          return (
            (ct =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (y) {
                    return typeof y;
                  }
                : function (y) {
                    return y &&
                      typeof Symbol == "function" &&
                      y.constructor === Symbol &&
                      y !== Symbol.prototype
                      ? "symbol"
                      : typeof y;
                  }),
            ct(g)
          );
        }
        function at(g, y) {
          if (!(g instanceof y))
            throw new TypeError("Cannot call a class as a function");
        }
        function st(g, y) {
          for (var rt = 0; rt < y.length; rt++) {
            var ot = y[rt];
            (ot.enumerable = ot.enumerable || !1),
              (ot.configurable = !0),
              "value" in ot && (ot.writable = !0),
              Object.defineProperty(g, Ft(ot.key), ot);
          }
        }
        function V(g, y, rt) {
          return (
            y && st(g.prototype, y),
            rt && st(g, rt),
            Object.defineProperty(g, "prototype", { writable: !1 }),
            g
          );
        }
        function mt(g, y) {
          var rt = Object.keys(g);
          if (Object.getOwnPropertySymbols) {
            var ot = Object.getOwnPropertySymbols(g);
            y &&
              (ot = ot.filter(function (_t) {
                return Object.getOwnPropertyDescriptor(g, _t).enumerable;
              })),
              rt.push.apply(rt, ot);
          }
          return rt;
        }
        function et(g) {
          for (var y = 1; y < arguments.length; y++) {
            var rt = arguments[y] != null ? arguments[y] : {};
            y % 2
              ? mt(Object(rt), !0).forEach(function (ot) {
                  St(g, ot, rt[ot]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    g,
                    Object.getOwnPropertyDescriptors(rt),
                  )
                : mt(Object(rt)).forEach(function (ot) {
                    Object.defineProperty(
                      g,
                      ot,
                      Object.getOwnPropertyDescriptor(rt, ot),
                    );
                  });
          }
          return g;
        }
        function St(g, y, rt) {
          return (
            (y = Ft(y)),
            y in g
              ? Object.defineProperty(g, y, {
                  value: rt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (g[y] = rt),
            g
          );
        }
        function Ft(g) {
          var y = nt(g, "string");
          return ct(y) == "symbol" ? y : y + "";
        }
        function nt(g, y) {
          if (ct(g) != "object" || !g) return g;
          var rt = g[Symbol.toPrimitive];
          if (rt !== void 0) {
            var ot = rt.call(g, y || "default");
            if (ct(ot) != "object") return ot;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (y === "string" ? String : Number)(g);
        }
        var te = function (y, rt, ot, _t, j) {
            var N = y.width,
              M = y.height,
              X = y.layout,
              v = y.children,
              f = Object.keys(rt),
              E = {
                left: ot.left,
                leftMirror: ot.left,
                right: N - ot.right,
                rightMirror: N - ot.right,
                top: ot.top,
                topMirror: ot.top,
                bottom: M - ot.bottom,
                bottomMirror: M - ot.bottom,
              },
              _ = !!(0, tt.BU)(v, lt.y);
            return f.reduce(function (A, c) {
              var P = rt[c],
                D = P.orientation,
                x = P.domain,
                k = P.padding,
                Y = k === void 0 ? {} : k,
                J = P.mirror,
                Mt = P.reversed,
                q = "".concat(D).concat(J ? "Mirror" : ""),
                yt,
                ft,
                bt,
                Ut,
                Ht;
              if (
                P.type === "number" &&
                (P.padding === "gap" || P.padding === "no-gap")
              ) {
                var ut = x[1] - x[0],
                  o = 1 / 0,
                  h = P.categoricalDomain.sort(G.ck);
                if (
                  (h.forEach(function (Z, L) {
                    L > 0 && (o = Math.min((Z || 0) - (h[L - 1] || 0), o));
                  }),
                  Number.isFinite(o))
                ) {
                  var O = o / ut,
                    d = P.layout === "vertical" ? ot.height : ot.width;
                  if (
                    (P.padding === "gap" && (yt = (O * d) / 2),
                    P.padding === "no-gap")
                  ) {
                    var R = (0, G.F4)(y.barCategoryGap, O * d),
                      Q = (O * d) / 2;
                    yt = Q - R - ((Q - R) / d) * R;
                  }
                }
              }
              _t === "xAxis"
                ? (ft = [
                    ot.left + (Y.left || 0) + (yt || 0),
                    ot.left + ot.width - (Y.right || 0) - (yt || 0),
                  ])
                : _t === "yAxis"
                  ? (ft =
                      X === "horizontal"
                        ? [
                            ot.top + ot.height - (Y.bottom || 0),
                            ot.top + (Y.top || 0),
                          ]
                        : [
                            ot.top + (Y.top || 0) + (yt || 0),
                            ot.top + ot.height - (Y.bottom || 0) - (yt || 0),
                          ])
                  : (ft = P.range),
                Mt && (ft = [ft[1], ft[0]]);
              var wt = (0, U.W7)(P, j, _),
                zt = wt.scale,
                Vt = wt.realScaleType;
              zt.domain(x).range(ft), (0, U.YB)(zt);
              var se = (0, U.w7)(zt, et(et({}, P), {}, { realScaleType: Vt }));
              _t === "xAxis"
                ? ((Ht = (D === "top" && !J) || (D === "bottom" && J)),
                  (bt = ot.left),
                  (Ut = E[q] - Ht * P.height))
                : _t === "yAxis" &&
                  ((Ht = (D === "left" && !J) || (D === "right" && J)),
                  (bt = E[q] - Ht * P.width),
                  (Ut = ot.top));
              var K = et(
                et(et({}, P), se),
                {},
                {
                  realScaleType: Vt,
                  x: bt,
                  y: Ut,
                  scale: zt,
                  width: _t === "xAxis" ? ot.width : P.width,
                  height: _t === "yAxis" ? ot.height : P.height,
                },
              );
              return (
                (K.bandSize = (0, U.Hj)(K, se)),
                !P.hide && _t === "xAxis"
                  ? (E[q] += (Ht ? -1 : 1) * K.height)
                  : P.hide || (E[q] += (Ht ? -1 : 1) * K.width),
                et(et({}, A), {}, St({}, c, K))
              );
            }, {});
          },
          kt = function (y, rt) {
            var ot = y.x,
              _t = y.y,
              j = rt.x,
              N = rt.y;
            return {
              x: Math.min(ot, j),
              y: Math.min(_t, N),
              width: Math.abs(j - ot),
              height: Math.abs(N - _t),
            };
          },
          Tt = function (y) {
            var rt = y.x1,
              ot = y.y1,
              _t = y.x2,
              j = y.y2;
            return kt({ x: rt, y: ot }, { x: _t, y: j });
          },
          vt = (function () {
            function g(y) {
              at(this, g), (this.scale = y);
            }
            return V(
              g,
              [
                {
                  key: "domain",
                  get: function () {
                    return this.scale.domain;
                  },
                },
                {
                  key: "range",
                  get: function () {
                    return this.scale.range;
                  },
                },
                {
                  key: "rangeMin",
                  get: function () {
                    return this.range()[0];
                  },
                },
                {
                  key: "rangeMax",
                  get: function () {
                    return this.range()[1];
                  },
                },
                {
                  key: "bandwidth",
                  get: function () {
                    return this.scale.bandwidth;
                  },
                },
                {
                  key: "apply",
                  value: function (rt) {
                    var ot =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : {},
                      _t = ot.bandAware,
                      j = ot.position;
                    if (rt !== void 0) {
                      if (j)
                        switch (j) {
                          case "start":
                            return this.scale(rt);
                          case "middle": {
                            var N = this.bandwidth ? this.bandwidth() / 2 : 0;
                            return this.scale(rt) + N;
                          }
                          case "end": {
                            var M = this.bandwidth ? this.bandwidth() : 0;
                            return this.scale(rt) + M;
                          }
                          default:
                            return this.scale(rt);
                        }
                      if (_t) {
                        var X = this.bandwidth ? this.bandwidth() / 2 : 0;
                        return this.scale(rt) + X;
                      }
                      return this.scale(rt);
                    }
                  },
                },
                {
                  key: "isInRange",
                  value: function (rt) {
                    var ot = this.range(),
                      _t = ot[0],
                      j = ot[ot.length - 1];
                    return _t <= j ? rt >= _t && rt <= j : rt >= j && rt <= _t;
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (rt) {
                    return new g(rt);
                  },
                },
              ],
            );
          })();
        St(vt, "EPS", 1e-4);
        var I = function (y) {
          var rt = Object.keys(y).reduce(function (ot, _t) {
            return et(et({}, ot), {}, St({}, _t, vt.create(y[_t])));
          }, {});
          return et(
            et({}, rt),
            {},
            {
              apply: function (_t) {
                var j =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  N = j.bandAware,
                  M = j.position;
                return F()(_t, function (X, v) {
                  return rt[v].apply(X, { bandAware: N, position: M });
                });
              },
              isInRange: function (_t) {
                return it()(_t, function (j, N) {
                  return rt[N].isInRange(j);
                });
              },
            },
          );
        };
        function m(g) {
          return ((g % 180) + 180) % 180;
        }
        var S = function (y) {
          var rt = y.width,
            ot = y.height,
            _t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 0,
            j = m(_t),
            N = (j * Math.PI) / 180,
            M = Math.atan(ot / rt),
            X = N > M && N < Math.PI - M ? ot / Math.sin(N) : rt / Math.cos(N);
          return Math.abs(X);
        };
      },
      61195: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, {
          s0: () => al,
          gH: () => nl,
          YB: () => pl,
          HQ: () => dl,
          xi: () => vl,
          Hj: () => jl,
          BX: () => il,
          tA: () => rl,
          DW: () => wl,
          y2: () => El,
          nb: () => Pl,
          PW: () => cl,
          Ay: () => ga,
          vf: () => ll,
          Mk: () => Ml,
          Ps: () => to,
          Mn: () => Ol,
          kA: () => Sl,
          Rh: () => fl,
          w7: () => Al,
          zb: () => Il,
          kr: () => ni,
          _L: () => sl,
          KC: () => Cl,
          A1: () => ul,
          W7: () => hl,
          AQ: () => Dl,
          _f: () => yl,
        });
        var l = {};
        r.r(l),
          r.d(l, {
            scaleBand: () => F.A,
            scaleDiverging: () => ka,
            scaleDivergingLog: () => Ka,
            scaleDivergingPow: () => ua,
            scaleDivergingSqrt: () => tu,
            scaleDivergingSymlog: () => Fa,
            scaleIdentity: () => pr,
            scaleImplicit: () => Vr.h,
            scaleLinear: () => fr,
            scaleLog: () => hr,
            scaleOrdinal: () => Vr.A,
            scalePoint: () => F.z,
            scalePow: () => Rr,
            scaleQuantile: () => Ee,
            scaleQuantize: () => on,
            scaleRadial: () => vr,
            scaleSequential: () => Na,
            scaleSequentialLog: () => La,
            scaleSequentialPow: () => oa,
            scaleSequentialQuantile: () => Wa,
            scaleSequentialSqrt: () => Qo,
            scaleSequentialSymlog: () => Ua,
            scaleSqrt: () => Gr,
            scaleSymlog: () => Tr,
            scaleThreshold: () => rn,
            scaleTime: () => Zo,
            scaleUtc: () => Jo,
            tickFormat: () => tr,
          });
        var F = r(28583);
        const H = Math.sqrt(50),
          it = Math.sqrt(10),
          U = Math.sqrt(2);
        function tt(t, e, n) {
          const i = (e - t) / Math.max(0, n),
            s = Math.floor(Math.log10(i)),
            p = i / Math.pow(10, s),
            T = p >= H ? 10 : p >= it ? 5 : p >= U ? 2 : 1;
          let B, ht, pt;
          return (
            s < 0
              ? ((pt = Math.pow(10, -s) / T),
                (B = Math.round(t * pt)),
                (ht = Math.round(e * pt)),
                B / pt < t && ++B,
                ht / pt > e && --ht,
                (pt = -pt))
              : ((pt = Math.pow(10, s) * T),
                (B = Math.round(t / pt)),
                (ht = Math.round(e / pt)),
                B * pt < t && ++B,
                ht * pt > e && --ht),
            ht < B && 0.5 <= n && n < 2 ? tt(t, e, n * 2) : [B, ht, pt]
          );
        }
        function G(t, e, n) {
          if (((e = +e), (t = +t), (n = +n), !(n > 0))) return [];
          if (t === e) return [t];
          const i = e < t,
            [s, p, T] = i ? tt(e, t, n) : tt(t, e, n);
          if (!(p >= s)) return [];
          const B = p - s + 1,
            ht = new Array(B);
          if (i)
            if (T < 0) for (let pt = 0; pt < B; ++pt) ht[pt] = (p - pt) / -T;
            else for (let pt = 0; pt < B; ++pt) ht[pt] = (p - pt) * T;
          else if (T < 0) for (let pt = 0; pt < B; ++pt) ht[pt] = (s + pt) / -T;
          else for (let pt = 0; pt < B; ++pt) ht[pt] = (s + pt) * T;
          return ht;
        }
        function lt(t, e, n) {
          return (e = +e), (t = +t), (n = +n), tt(t, e, n)[2];
        }
        function ct(t, e, n) {
          (e = +e), (t = +t), (n = +n);
          const i = e < t,
            s = i ? lt(e, t, n) : lt(t, e, n);
          return (i ? -1 : 1) * (s < 0 ? 1 / -s : s);
        }
        function at(t, e) {
          return t == null || e == null
            ? NaN
            : t < e
              ? -1
              : t > e
                ? 1
                : t >= e
                  ? 0
                  : NaN;
        }
        function st(t, e) {
          return t == null || e == null
            ? NaN
            : e < t
              ? -1
              : e > t
                ? 1
                : e >= t
                  ? 0
                  : NaN;
        }
        function V(t) {
          let e, n, i;
          t.length !== 2
            ? ((e = at),
              (n = (B, ht) => at(t(B), ht)),
              (i = (B, ht) => t(B) - ht))
            : ((e = t === at || t === st ? t : mt), (n = t), (i = t));
          function s(B, ht, pt = 0, Zt = B.length) {
            if (pt < Zt) {
              if (e(ht, ht) !== 0) return Zt;
              do {
                const Kt = (pt + Zt) >>> 1;
                n(B[Kt], ht) < 0 ? (pt = Kt + 1) : (Zt = Kt);
              } while (pt < Zt);
            }
            return pt;
          }
          function p(B, ht, pt = 0, Zt = B.length) {
            if (pt < Zt) {
              if (e(ht, ht) !== 0) return Zt;
              do {
                const Kt = (pt + Zt) >>> 1;
                n(B[Kt], ht) <= 0 ? (pt = Kt + 1) : (Zt = Kt);
              } while (pt < Zt);
            }
            return pt;
          }
          function T(B, ht, pt = 0, Zt = B.length) {
            const Kt = s(B, ht, pt, Zt - 1);
            return Kt > pt && i(B[Kt - 1], ht) > -i(B[Kt], ht) ? Kt - 1 : Kt;
          }
          return { left: s, center: T, right: p };
        }
        function mt() {
          return 0;
        }
        function et(t) {
          return t === null ? NaN : +t;
        }
        function* St(t, e) {
          if (e === void 0)
            for (let n of t) n != null && (n = +n) >= n && (yield n);
          else {
            let n = -1;
            for (let i of t)
              (i = e(i, ++n, t)) != null && (i = +i) >= i && (yield i);
          }
        }
        const Ft = V(at),
          nt = Ft.right,
          te = Ft.left,
          kt = V(et).center,
          Tt = nt;
        function vt(t, e, n) {
          (t.prototype = e.prototype = n), (n.constructor = t);
        }
        function I(t, e) {
          var n = Object.create(t.prototype);
          for (var i in e) n[i] = e[i];
          return n;
        }
        function m() {}
        var S = 0.7,
          g = 1 / S,
          y = "\\s*([+-]?\\d+)\\s*",
          rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          _t = /^#([0-9a-f]{3,8})$/,
          j = new RegExp(`^rgb\\(${y},${y},${y}\\)$`),
          N = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`),
          M = new RegExp(`^rgba\\(${y},${y},${y},${rt}\\)$`),
          X = new RegExp(`^rgba\\(${ot},${ot},${ot},${rt}\\)$`),
          v = new RegExp(`^hsl\\(${rt},${ot},${ot}\\)$`),
          f = new RegExp(`^hsla\\(${rt},${ot},${ot},${rt}\\)$`),
          E = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          };
        vt(m, D, {
          copy(t) {
            return Object.assign(new this.constructor(), this, t);
          },
          displayable() {
            return this.rgb().displayable();
          },
          hex: _,
          formatHex: _,
          formatHex8: A,
          formatHsl: c,
          formatRgb: P,
          toString: P,
        });
        function _() {
          return this.rgb().formatHex();
        }
        function A() {
          return this.rgb().formatHex8();
        }
        function c() {
          return o(this).formatHsl();
        }
        function P() {
          return this.rgb().formatRgb();
        }
        function D(t) {
          var e, n;
          return (
            (t = (t + "").trim().toLowerCase()),
            (e = _t.exec(t))
              ? ((n = e[1].length),
                (e = parseInt(e[1], 16)),
                n === 6
                  ? x(e)
                  : n === 3
                    ? new Mt(
                        ((e >> 8) & 15) | ((e >> 4) & 240),
                        ((e >> 4) & 15) | (e & 240),
                        ((e & 15) << 4) | (e & 15),
                        1,
                      )
                    : n === 8
                      ? k(
                          (e >> 24) & 255,
                          (e >> 16) & 255,
                          (e >> 8) & 255,
                          (e & 255) / 255,
                        )
                      : n === 4
                        ? k(
                            ((e >> 12) & 15) | ((e >> 8) & 240),
                            ((e >> 8) & 15) | ((e >> 4) & 240),
                            ((e >> 4) & 15) | (e & 240),
                            (((e & 15) << 4) | (e & 15)) / 255,
                          )
                        : null)
              : (e = j.exec(t))
                ? new Mt(e[1], e[2], e[3], 1)
                : (e = N.exec(t))
                  ? new Mt(
                      (e[1] * 255) / 100,
                      (e[2] * 255) / 100,
                      (e[3] * 255) / 100,
                      1,
                    )
                  : (e = M.exec(t))
                    ? k(e[1], e[2], e[3], e[4])
                    : (e = X.exec(t))
                      ? k(
                          (e[1] * 255) / 100,
                          (e[2] * 255) / 100,
                          (e[3] * 255) / 100,
                          e[4],
                        )
                      : (e = v.exec(t))
                        ? ut(e[1], e[2] / 100, e[3] / 100, 1)
                        : (e = f.exec(t))
                          ? ut(e[1], e[2] / 100, e[3] / 100, e[4])
                          : E.hasOwnProperty(t)
                            ? x(E[t])
                            : t === "transparent"
                              ? new Mt(NaN, NaN, NaN, 0)
                              : null
          );
        }
        function x(t) {
          return new Mt((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
        }
        function k(t, e, n, i) {
          return i <= 0 && (t = e = n = NaN), new Mt(t, e, n, i);
        }
        function Y(t) {
          return (
            t instanceof m || (t = D(t)),
            t ? ((t = t.rgb()), new Mt(t.r, t.g, t.b, t.opacity)) : new Mt()
          );
        }
        function J(t, e, n, i) {
          return arguments.length === 1 ? Y(t) : new Mt(t, e, n, i ?? 1);
        }
        function Mt(t, e, n, i) {
          (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +i);
        }
        vt(
          Mt,
          J,
          I(m, {
            brighter(t) {
              return (
                (t = t == null ? g : Math.pow(g, t)),
                new Mt(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = t == null ? S : Math.pow(S, t)),
                new Mt(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new Mt(
                Ut(this.r),
                Ut(this.g),
                Ut(this.b),
                bt(this.opacity),
              );
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: q,
            formatHex: q,
            formatHex8: yt,
            formatRgb: ft,
            toString: ft,
          }),
        );
        function q() {
          return `#${Ht(this.r)}${Ht(this.g)}${Ht(this.b)}`;
        }
        function yt() {
          return `#${Ht(this.r)}${Ht(this.g)}${Ht(this.b)}${Ht((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
        }
        function ft() {
          const t = bt(this.opacity);
          return `${t === 1 ? "rgb(" : "rgba("}${Ut(this.r)}, ${Ut(this.g)}, ${Ut(this.b)}${t === 1 ? ")" : `, ${t})`}`;
        }
        function bt(t) {
          return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
        }
        function Ut(t) {
          return Math.max(0, Math.min(255, Math.round(t) || 0));
        }
        function Ht(t) {
          return (t = Ut(t)), (t < 16 ? "0" : "") + t.toString(16);
        }
        function ut(t, e, n, i) {
          return (
            i <= 0
              ? (t = e = n = NaN)
              : n <= 0 || n >= 1
                ? (t = e = NaN)
                : e <= 0 && (t = NaN),
            new O(t, e, n, i)
          );
        }
        function o(t) {
          if (t instanceof O) return new O(t.h, t.s, t.l, t.opacity);
          if ((t instanceof m || (t = D(t)), !t)) return new O();
          if (t instanceof O) return t;
          t = t.rgb();
          var e = t.r / 255,
            n = t.g / 255,
            i = t.b / 255,
            s = Math.min(e, n, i),
            p = Math.max(e, n, i),
            T = NaN,
            B = p - s,
            ht = (p + s) / 2;
          return (
            B
              ? (e === p
                  ? (T = (n - i) / B + (n < i) * 6)
                  : n === p
                    ? (T = (i - e) / B + 2)
                    : (T = (e - n) / B + 4),
                (B /= ht < 0.5 ? p + s : 2 - p - s),
                (T *= 60))
              : (B = ht > 0 && ht < 1 ? 0 : T),
            new O(T, B, ht, t.opacity)
          );
        }
        function h(t, e, n, i) {
          return arguments.length === 1 ? o(t) : new O(t, e, n, i ?? 1);
        }
        function O(t, e, n, i) {
          (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +i);
        }
        vt(
          O,
          h,
          I(m, {
            brighter(t) {
              return (
                (t = t == null ? g : Math.pow(g, t)),
                new O(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = t == null ? S : Math.pow(S, t)),
                new O(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + (this.h < 0) * 360,
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                i = n + (n < 0.5 ? n : 1 - n) * e,
                s = 2 * n - i;
              return new Mt(
                Q(t >= 240 ? t - 240 : t + 120, s, i),
                Q(t, s, i),
                Q(t < 120 ? t + 240 : t - 120, s, i),
                this.opacity,
              );
            },
            clamp() {
              return new O(d(this.h), R(this.s), R(this.l), bt(this.opacity));
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              const t = bt(this.opacity);
              return `${t === 1 ? "hsl(" : "hsla("}${d(this.h)}, ${R(this.s) * 100}%, ${R(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
            },
          }),
        );
        function d(t) {
          return (t = (t || 0) % 360), t < 0 ? t + 360 : t;
        }
        function R(t) {
          return Math.max(0, Math.min(1, t || 0));
        }
        function Q(t, e, n) {
          return (
            (t < 60
              ? e + ((n - e) * t) / 60
              : t < 180
                ? n
                : t < 240
                  ? e + ((n - e) * (240 - t)) / 60
                  : e) * 255
          );
        }
        function wt(t, e, n, i, s) {
          var p = t * t,
            T = p * t;
          return (
            ((1 - 3 * t + 3 * p - T) * e +
              (4 - 6 * p + 3 * T) * n +
              (1 + 3 * t + 3 * p - 3 * T) * i +
              T * s) /
            6
          );
        }
        function zt(t) {
          var e = t.length - 1;
          return function (n) {
            var i =
                n <= 0
                  ? (n = 0)
                  : n >= 1
                    ? ((n = 1), e - 1)
                    : Math.floor(n * e),
              s = t[i],
              p = t[i + 1],
              T = i > 0 ? t[i - 1] : 2 * s - p,
              B = i < e - 1 ? t[i + 2] : 2 * p - s;
            return wt((n - i / e) * e, T, s, p, B);
          };
        }
        function Vt(t) {
          var e = t.length;
          return function (n) {
            var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              s = t[(i + e - 1) % e],
              p = t[i % e],
              T = t[(i + 1) % e],
              B = t[(i + 2) % e];
            return wt((n - i / e) * e, s, p, T, B);
          };
        }
        const se = (t) => () => t;
        function K(t, e) {
          return function (n) {
            return t + n * e;
          };
        }
        function Z(t, e, n) {
          return (
            (t = Math.pow(t, n)),
            (e = Math.pow(e, n) - t),
            (n = 1 / n),
            function (i) {
              return Math.pow(t + i * e, n);
            }
          );
        }
        function L(t, e) {
          var n = e - t;
          return n
            ? K(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
            : constant(isNaN(t) ? e : t);
        }
        function xt(t) {
          return (t = +t) == 1
            ? Ot
            : function (e, n) {
                return n - e ? Z(e, n, t) : se(isNaN(e) ? n : e);
              };
        }
        function Ot(t, e) {
          var n = e - t;
          return n ? K(t, n) : se(isNaN(t) ? e : t);
        }
        const $t = (function t(e) {
          var n = xt(e);
          function i(s, p) {
            var T = n((s = J(s)).r, (p = J(p)).r),
              B = n(s.g, p.g),
              ht = n(s.b, p.b),
              pt = Ot(s.opacity, p.opacity);
            return function (Zt) {
              return (
                (s.r = T(Zt)),
                (s.g = B(Zt)),
                (s.b = ht(Zt)),
                (s.opacity = pt(Zt)),
                s + ""
              );
            };
          }
          return (i.gamma = t), i;
        })(1);
        function Jt(t) {
          return function (e) {
            var n = e.length,
              i = new Array(n),
              s = new Array(n),
              p = new Array(n),
              T,
              B;
            for (T = 0; T < n; ++T)
              (B = J(e[T])),
                (i[T] = B.r || 0),
                (s[T] = B.g || 0),
                (p[T] = B.b || 0);
            return (
              (i = t(i)),
              (s = t(s)),
              (p = t(p)),
              (B.opacity = 1),
              function (ht) {
                return (B.r = i(ht)), (B.g = s(ht)), (B.b = p(ht)), B + "";
              }
            );
          };
        }
        var le = Jt(zt),
          W = Jt(Vt);
        function $(t, e) {
          return (isNumberArray(e) ? numberArray : Ct)(t, e);
        }
        function Ct(t, e) {
          var n = e ? e.length : 0,
            i = t ? Math.min(n, t.length) : 0,
            s = new Array(i),
            p = new Array(n),
            T;
          for (T = 0; T < i; ++T) s[T] = mn(t[T], e[T]);
          for (; T < n; ++T) p[T] = e[T];
          return function (B) {
            for (T = 0; T < i; ++T) p[T] = s[T](B);
            return p;
          };
        }
        function Pt(t, e) {
          var n = new Date();
          return (
            (t = +t),
            (e = +e),
            function (i) {
              return n.setTime(t * (1 - i) + e * i), n;
            }
          );
        }
        function ee(t, e) {
          return (
            (t = +t),
            (e = +e),
            function (n) {
              return t * (1 - n) + e * n;
            }
          );
        }
        function Ie(t, e) {
          var n = {},
            i = {},
            s;
          (t === null || typeof t != "object") && (t = {}),
            (e === null || typeof e != "object") && (e = {});
          for (s in e) s in t ? (n[s] = mn(t[s], e[s])) : (i[s] = e[s]);
          return function (p) {
            for (s in n) i[s] = n[s](p);
            return i;
          };
        }
        var Ge = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          we = new RegExp(Ge.source, "g");
        function We(t) {
          return function () {
            return t;
          };
        }
        function Je(t) {
          return function (e) {
            return t(e) + "";
          };
        }
        function Xe(t, e) {
          var n = (Ge.lastIndex = we.lastIndex = 0),
            i,
            s,
            p,
            T = -1,
            B = [],
            ht = [];
          for (t = t + "", e = e + ""; (i = Ge.exec(t)) && (s = we.exec(e)); )
            (p = s.index) > n &&
              ((p = e.slice(n, p)), B[T] ? (B[T] += p) : (B[++T] = p)),
              (i = i[0]) === (s = s[0])
                ? B[T]
                  ? (B[T] += s)
                  : (B[++T] = s)
                : ((B[++T] = null), ht.push({ i: T, x: ee(i, s) })),
              (n = we.lastIndex);
          return (
            n < e.length &&
              ((p = e.slice(n)), B[T] ? (B[T] += p) : (B[++T] = p)),
            B.length < 2
              ? ht[0]
                ? Je(ht[0].x)
                : We(e)
              : ((e = ht.length),
                function (pt) {
                  for (var Zt = 0, Kt; Zt < e; ++Zt)
                    B[(Kt = ht[Zt]).i] = Kt.x(pt);
                  return B.join("");
                })
          );
        }
        function hn(t, e) {
          e || (e = []);
          var n = t ? Math.min(e.length, t.length) : 0,
            i = e.slice(),
            s;
          return function (p) {
            for (s = 0; s < n; ++s) i[s] = t[s] * (1 - p) + e[s] * p;
            return i;
          };
        }
        function bn(t) {
          return ArrayBuffer.isView(t) && !(t instanceof DataView);
        }
        function mn(t, e) {
          var n = typeof e,
            i;
          return e == null || n === "boolean"
            ? se(e)
            : (n === "number"
                ? ee
                : n === "string"
                  ? (i = D(e))
                    ? ((e = i), $t)
                    : Xe
                  : e instanceof D
                    ? $t
                    : e instanceof Date
                      ? Pt
                      : bn(e)
                        ? hn
                        : Array.isArray(e)
                          ? Ct
                          : (typeof e.valueOf != "function" &&
                                typeof e.toString != "function") ||
                              isNaN(e)
                            ? Ie
                            : ee)(t, e);
        }
        function Sn(t, e) {
          return (
            (t = +t),
            (e = +e),
            function (n) {
              return Math.round(t * (1 - n) + e * n);
            }
          );
        }
        function xn(t) {
          return function () {
            return t;
          };
        }
        function wn(t) {
          return +t;
        }
        var Jn = [0, 1];
        function jn(t) {
          return t;
        }
        function Hn(t, e) {
          return (e -= t = +t)
            ? function (n) {
                return (n - t) / e;
              }
            : xn(isNaN(e) ? NaN : 0.5);
        }
        function sr(t, e) {
          var n;
          return (
            t > e && ((n = t), (t = e), (e = n)),
            function (i) {
              return Math.max(t, Math.min(e, i));
            }
          );
        }
        function cr(t, e, n) {
          var i = t[0],
            s = t[1],
            p = e[0],
            T = e[1];
          return (
            s < i
              ? ((i = Hn(s, i)), (p = n(T, p)))
              : ((i = Hn(i, s)), (p = n(p, T))),
            function (B) {
              return p(i(B));
            }
          );
        }
        function ur(t, e, n) {
          var i = Math.min(t.length, e.length) - 1,
            s = new Array(i),
            p = new Array(i),
            T = -1;
          for (
            t[i] < t[0] &&
            ((t = t.slice().reverse()), (e = e.slice().reverse()));
            ++T < i;
          )
            (s[T] = Hn(t[T], t[T + 1])), (p[T] = n(e[T], e[T + 1]));
          return function (B) {
            var ht = Tt(t, B, 1, i) - 1;
            return p[ht](s[ht](B));
          };
        }
        function Yn(t, e) {
          return e
            .domain(t.domain())
            .range(t.range())
            .interpolate(t.interpolate())
            .clamp(t.clamp())
            .unknown(t.unknown());
        }
        function At() {
          var t = Jn,
            e = Jn,
            n = mn,
            i,
            s,
            p,
            T = jn,
            B,
            ht,
            pt;
          function Zt() {
            var re = Math.min(t.length, e.length);
            return (
              T !== jn && (T = sr(t[0], t[re - 1])),
              (B = re > 2 ? ur : cr),
              (ht = pt = null),
              Kt
            );
          }
          function Kt(re) {
            return re == null || isNaN((re = +re))
              ? p
              : (ht || (ht = B(t.map(i), e, n)))(i(T(re)));
          }
          return (
            (Kt.invert = function (re) {
              return T(s((pt || (pt = B(e, t.map(i), ee)))(re)));
            }),
            (Kt.domain = function (re) {
              return arguments.length
                ? ((t = Array.from(re, wn)), Zt())
                : t.slice();
            }),
            (Kt.range = function (re) {
              return arguments.length
                ? ((e = Array.from(re)), Zt())
                : e.slice();
            }),
            (Kt.rangeRound = function (re) {
              return (e = Array.from(re)), (n = Sn), Zt();
            }),
            (Kt.clamp = function (re) {
              return arguments.length ? ((T = re ? !0 : jn), Zt()) : T !== jn;
            }),
            (Kt.interpolate = function (re) {
              return arguments.length ? ((n = re), Zt()) : n;
            }),
            (Kt.unknown = function (re) {
              return arguments.length ? ((p = re), Kt) : p;
            }),
            function (re, ge) {
              return (i = re), (s = ge), Zt();
            }
          );
        }
        function gt() {
          return At()(jn, jn);
        }
        var Rt = r(34777),
          It =
            /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
        function ne(t) {
          if (!(e = It.exec(t))) throw new Error("invalid format: " + t);
          var e;
          return new xe({
            fill: e[1],
            align: e[2],
            sign: e[3],
            symbol: e[4],
            zero: e[5],
            width: e[6],
            comma: e[7],
            precision: e[8] && e[8].slice(1),
            trim: e[9],
            type: e[10],
          });
        }
        ne.prototype = xe.prototype;
        function xe(t) {
          (this.fill = t.fill === void 0 ? " " : t.fill + ""),
            (this.align = t.align === void 0 ? ">" : t.align + ""),
            (this.sign = t.sign === void 0 ? "-" : t.sign + ""),
            (this.symbol = t.symbol === void 0 ? "" : t.symbol + ""),
            (this.zero = !!t.zero),
            (this.width = t.width === void 0 ? void 0 : +t.width),
            (this.comma = !!t.comma),
            (this.precision = t.precision === void 0 ? void 0 : +t.precision),
            (this.trim = !!t.trim),
            (this.type = t.type === void 0 ? "" : t.type + "");
        }
        xe.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
            (this.comma ? "," : "") +
            (this.precision === void 0
              ? ""
              : "." + Math.max(0, this.precision | 0)) +
            (this.trim ? "~" : "") +
            this.type
          );
        };
        function Ce(t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString("en").replace(/,/g, "")
            : t.toString(10);
        }
        function ke(t, e) {
          if (!isFinite(t) || t === 0) return null;
          var n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
              "e",
            ),
            i = t.slice(0, n);
          return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(n + 1)];
        }
        function Ke(t) {
          return (t = ke(Math.abs(t))), t ? t[1] : NaN;
        }
        function Fe(t, e) {
          return Math.max(
            0,
            Math.max(-8, Math.min(8, Math.floor(Ke(e) / 3))) * 3 -
              Ke(Math.abs(t)),
          );
        }
        function _e(t, e) {
          return function (n, i) {
            for (
              var s = n.length, p = [], T = 0, B = t[0], ht = 0;
              s > 0 &&
              B > 0 &&
              (ht + B + 1 > i && (B = Math.max(1, i - ht)),
              p.push(n.substring((s -= B), s + B)),
              !((ht += B + 1) > i));
            )
              B = t[(T = (T + 1) % t.length)];
            return p.reverse().join(e);
          };
        }
        function Re(t) {
          return function (e) {
            return e.replace(/[0-9]/g, function (n) {
              return t[+n];
            });
          };
        }
        function nn(t) {
          t: for (var e = t.length, n = 1, i = -1, s; n < e; ++n)
            switch (t[n]) {
              case ".":
                i = s = n;
                break;
              case "0":
                i === 0 && (i = n), (s = n);
                break;
              default:
                if (!+t[n]) break t;
                i > 0 && (i = 0);
                break;
            }
          return i > 0 ? t.slice(0, i) + t.slice(s + 1) : t;
        }
        var un;
        function An(t, e) {
          var n = ke(t, e);
          if (!n) return (un = void 0), t.toPrecision(e);
          var i = n[0],
            s = n[1],
            p = s - (un = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1,
            T = i.length;
          return p === T
            ? i
            : p > T
              ? i + new Array(p - T + 1).join("0")
              : p > 0
                ? i.slice(0, p) + "." + i.slice(p)
                : "0." +
                  new Array(1 - p).join("0") +
                  ke(t, Math.max(0, e + p - 1))[0];
        }
        function Pn(t, e) {
          var n = ke(t, e);
          if (!n) return t + "";
          var i = n[0],
            s = n[1];
          return s < 0
            ? "0." + new Array(-s).join("0") + i
            : i.length > s + 1
              ? i.slice(0, s + 1) + "." + i.slice(s + 1)
              : i + new Array(s - i.length + 2).join("0");
        }
        const tn = {
          "%": (t, e) => (t * 100).toFixed(e),
          b: (t) => Math.round(t).toString(2),
          c: (t) => t + "",
          d: Ce,
          e: (t, e) => t.toExponential(e),
          f: (t, e) => t.toFixed(e),
          g: (t, e) => t.toPrecision(e),
          o: (t) => Math.round(t).toString(8),
          p: (t, e) => Pn(t * 100, e),
          r: Pn,
          s: An,
          X: (t) => Math.round(t).toString(16).toUpperCase(),
          x: (t) => Math.round(t).toString(16),
        };
        function Rn(t) {
          return t;
        }
        var En = Array.prototype.map,
          Tn = [
            "y",
            "z",
            "a",
            "f",
            "p",
            "n",
            "\xB5",
            "m",
            "",
            "k",
            "M",
            "G",
            "T",
            "P",
            "E",
            "Z",
            "Y",
          ];
        function Mn(t) {
          var e =
              t.grouping === void 0 || t.thousands === void 0
                ? Rn
                : _e(En.call(t.grouping, Number), t.thousands + ""),
            n = t.currency === void 0 ? "" : t.currency[0] + "",
            i = t.currency === void 0 ? "" : t.currency[1] + "",
            s = t.decimal === void 0 ? "." : t.decimal + "",
            p = t.numerals === void 0 ? Rn : Re(En.call(t.numerals, String)),
            T = t.percent === void 0 ? "%" : t.percent + "",
            B = t.minus === void 0 ? "\u2212" : t.minus + "",
            ht = t.nan === void 0 ? "NaN" : t.nan + "";
          function pt(Kt, re) {
            Kt = ne(Kt);
            var ge = Kt.fill,
              Te = Kt.align,
              Me = Kt.sign,
              dn = Kt.symbol,
              yn = Kt.zero,
              zn = Kt.width,
              Xn = Kt.comma,
              On = Kt.precision,
              nr = Kt.trim,
              Ye = Kt.type;
            Ye === "n"
              ? ((Xn = !0), (Ye = "g"))
              : tn[Ye] || (On === void 0 && (On = 12), (nr = !0), (Ye = "g")),
              (yn || (ge === "0" && Te === "=")) &&
                ((yn = !0), (ge = "0"), (Te = "="));
            var Vn =
                (re && re.prefix !== void 0 ? re.prefix : "") +
                (dn === "$"
                  ? n
                  : dn === "#" && /[boxX]/.test(Ye)
                    ? "0" + Ye.toLowerCase()
                    : ""),
              Ir =
                (dn === "$" ? i : /[%p]/.test(Ye) ? T : "") +
                (re && re.suffix !== void 0 ? re.suffix : ""),
              qi = tn[Ye],
              xa = /[defgprs%]/.test(Ye);
            On =
              On === void 0
                ? 6
                : /[gprs]/.test(Ye)
                  ? Math.max(1, Math.min(21, On))
                  : Math.max(0, Math.min(20, On));
            function ta(_n) {
              var Fr = Vn,
                yr = Ir,
                ri,
                ea,
                Ei;
              if (Ye === "c") (yr = qi(_n) + yr), (_n = "");
              else {
                _n = +_n;
                var wi = _n < 0 || 1 / _n < 0;
                if (
                  ((_n = isNaN(_n) ? ht : qi(Math.abs(_n), On)),
                  nr && (_n = nn(_n)),
                  wi && +_n == 0 && Me !== "+" && (wi = !1),
                  (Fr =
                    (wi
                      ? Me === "("
                        ? Me
                        : B
                      : Me === "-" || Me === "("
                        ? ""
                        : Me) + Fr),
                  (yr =
                    (Ye === "s" && !isNaN(_n) && un !== void 0
                      ? Tn[8 + un / 3]
                      : "") +
                    yr +
                    (wi && Me === "(" ? ")" : "")),
                  xa)
                ) {
                  for (ri = -1, ea = _n.length; ++ri < ea; )
                    if (((Ei = _n.charCodeAt(ri)), 48 > Ei || Ei > 57)) {
                      (yr =
                        (Ei === 46 ? s + _n.slice(ri + 1) : _n.slice(ri)) + yr),
                        (_n = _n.slice(0, ri));
                      break;
                    }
                }
              }
              Xn && !yn && (_n = e(_n, 1 / 0));
              var Si = Fr.length + _n.length + yr.length,
                Sr = Si < zn ? new Array(zn - Si + 1).join(ge) : "";
              switch (
                (Xn &&
                  yn &&
                  ((_n = e(Sr + _n, Sr.length ? zn - yr.length : 1 / 0)),
                  (Sr = "")),
                Te)
              ) {
                case "<":
                  _n = Fr + _n + yr + Sr;
                  break;
                case "=":
                  _n = Fr + Sr + _n + yr;
                  break;
                case "^":
                  _n =
                    Sr.slice(0, (Si = Sr.length >> 1)) +
                    Fr +
                    _n +
                    yr +
                    Sr.slice(Si);
                  break;
                default:
                  _n = Sr + Fr + _n + yr;
                  break;
              }
              return p(_n);
            }
            return (
              (ta.toString = function () {
                return Kt + "";
              }),
              ta
            );
          }
          function Zt(Kt, re) {
            var ge = Math.max(-8, Math.min(8, Math.floor(Ke(re) / 3))) * 3,
              Te = Math.pow(10, -ge),
              Me = pt(((Kt = ne(Kt)), (Kt.type = "f"), Kt), {
                suffix: Tn[8 + ge / 3],
              });
            return function (dn) {
              return Me(Te * dn);
            };
          }
          return { format: pt, formatPrefix: Zt };
        }
        var Cn, $n, Qn;
        ir({ thousands: ",", grouping: [3], currency: ["$", ""] });
        function ir(t) {
          return (Cn = Mn(t)), ($n = Cn.format), (Qn = Cn.formatPrefix), Cn;
        }
        function dr(t, e) {
          return (
            (t = Math.abs(t)),
            (e = Math.abs(e) - t),
            Math.max(0, Ke(e) - Ke(t)) + 1
          );
        }
        function lr(t) {
          return Math.max(0, -Ke(Math.abs(t)));
        }
        function tr(t, e, n, i) {
          var s = ct(t, e, n),
            p;
          switch (((i = ne(i ?? ",f")), i.type)) {
            case "s": {
              var T = Math.max(Math.abs(t), Math.abs(e));
              return (
                i.precision == null &&
                  !isNaN((p = Fe(s, T))) &&
                  (i.precision = p),
                Qn(i, T)
              );
            }
            case "":
            case "e":
            case "g":
            case "p":
            case "r": {
              i.precision == null &&
                !isNaN((p = dr(s, Math.max(Math.abs(t), Math.abs(e))))) &&
                (i.precision = p - (i.type === "e"));
              break;
            }
            case "f":
            case "%": {
              i.precision == null &&
                !isNaN((p = lr(s))) &&
                (i.precision = p - (i.type === "%") * 2);
              break;
            }
          }
          return $n(i);
        }
        function er(t) {
          var e = t.domain;
          return (
            (t.ticks = function (n) {
              var i = e();
              return G(i[0], i[i.length - 1], n ?? 10);
            }),
            (t.tickFormat = function (n, i) {
              var s = e();
              return tr(s[0], s[s.length - 1], n ?? 10, i);
            }),
            (t.nice = function (n) {
              n == null && (n = 10);
              var i = e(),
                s = 0,
                p = i.length - 1,
                T = i[s],
                B = i[p],
                ht,
                pt,
                Zt = 10;
              for (
                B < T &&
                ((pt = T), (T = B), (B = pt), (pt = s), (s = p), (p = pt));
                Zt-- > 0;
              ) {
                if (((pt = lt(T, B, n)), pt === ht))
                  return (i[s] = T), (i[p] = B), e(i);
                if (pt > 0)
                  (T = Math.floor(T / pt) * pt), (B = Math.ceil(B / pt) * pt);
                else if (pt < 0)
                  (T = Math.ceil(T * pt) / pt), (B = Math.floor(B * pt) / pt);
                else break;
                ht = pt;
              }
              return t;
            }),
            t
          );
        }
        function fr() {
          var t = gt();
          return (
            (t.copy = function () {
              return Yn(t, fr());
            }),
            Rt.C.apply(t, arguments),
            er(t)
          );
        }
        function pr(t) {
          var e;
          function n(i) {
            return i == null || isNaN((i = +i)) ? e : i;
          }
          return (
            (n.invert = n),
            (n.domain = n.range =
              function (i) {
                return arguments.length
                  ? ((t = Array.from(i, wn)), n)
                  : t.slice();
              }),
            (n.unknown = function (i) {
              return arguments.length ? ((e = i), n) : e;
            }),
            (n.copy = function () {
              return pr(t).unknown(e);
            }),
            (t = arguments.length ? Array.from(t, wn) : [0, 1]),
            er(n)
          );
        }
        function Pr(t, e) {
          t = t.slice();
          var n = 0,
            i = t.length - 1,
            s = t[n],
            p = t[i],
            T;
          return (
            p < s && ((T = n), (n = i), (i = T), (T = s), (s = p), (p = T)),
            (t[n] = e.floor(s)),
            (t[i] = e.ceil(p)),
            t
          );
        }
        function xr(t) {
          return Math.log(t);
        }
        function vi(t) {
          return Math.exp(t);
        }
        function ii(t) {
          return -Math.log(-t);
        }
        function Ti(t) {
          return -Math.exp(-t);
        }
        function Mi(t) {
          return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
        }
        function Di(t) {
          return t === 10
            ? Mi
            : t === Math.E
              ? Math.exp
              : (e) => Math.pow(t, e);
        }
        function ji(t) {
          return t === Math.E
            ? Math.log
            : (t === 10 && Math.log10) ||
                (t === 2 && Math.log2) ||
                ((t = Math.log(t)), (e) => Math.log(e) / t);
        }
        function zr(t) {
          return (e, n) => -t(-e, n);
        }
        function $r(t) {
          const e = t(xr, vi),
            n = e.domain;
          let i = 10,
            s,
            p;
          function T() {
            return (
              (s = ji(i)),
              (p = Di(i)),
              n()[0] < 0 ? ((s = zr(s)), (p = zr(p)), t(ii, Ti)) : t(xr, vi),
              e
            );
          }
          return (
            (e.base = function (B) {
              return arguments.length ? ((i = +B), T()) : i;
            }),
            (e.domain = function (B) {
              return arguments.length ? (n(B), T()) : n();
            }),
            (e.ticks = (B) => {
              const ht = n();
              let pt = ht[0],
                Zt = ht[ht.length - 1];
              const Kt = Zt < pt;
              Kt && ([pt, Zt] = [Zt, pt]);
              let re = s(pt),
                ge = s(Zt),
                Te,
                Me;
              const dn = B == null ? 10 : +B;
              let yn = [];
              if (!(i % 1) && ge - re < dn) {
                if (((re = Math.floor(re)), (ge = Math.ceil(ge)), pt > 0)) {
                  for (; re <= ge; ++re)
                    for (Te = 1; Te < i; ++Te)
                      if (
                        ((Me = re < 0 ? Te / p(-re) : Te * p(re)), !(Me < pt))
                      ) {
                        if (Me > Zt) break;
                        yn.push(Me);
                      }
                } else
                  for (; re <= ge; ++re)
                    for (Te = i - 1; Te >= 1; --Te)
                      if (
                        ((Me = re > 0 ? Te / p(-re) : Te * p(re)), !(Me < pt))
                      ) {
                        if (Me > Zt) break;
                        yn.push(Me);
                      }
                yn.length * 2 < dn && (yn = G(pt, Zt, dn));
              } else yn = G(re, ge, Math.min(ge - re, dn)).map(p);
              return Kt ? yn.reverse() : yn;
            }),
            (e.tickFormat = (B, ht) => {
              if (
                (B == null && (B = 10),
                ht == null && (ht = i === 10 ? "s" : ","),
                typeof ht != "function" &&
                  (!(i % 1) &&
                    (ht = ne(ht)).precision == null &&
                    (ht.trim = !0),
                  (ht = $n(ht))),
                B === 1 / 0)
              )
                return ht;
              const pt = Math.max(1, (i * B) / e.ticks().length);
              return (Zt) => {
                let Kt = Zt / p(Math.round(s(Zt)));
                return Kt * i < i - 0.5 && (Kt *= i), Kt <= pt ? ht(Zt) : "";
              };
            }),
            (e.nice = () =>
              n(
                Pr(n(), {
                  floor: (B) => p(Math.floor(s(B))),
                  ceil: (B) => p(Math.ceil(s(B))),
                }),
              )),
            e
          );
        }
        function hr() {
          const t = $r(At()).domain([1, 10]);
          return (
            (t.copy = () => Yn(t, hr()).base(t.base())),
            Rt.C.apply(t, arguments),
            t
          );
        }
        function Er(t) {
          return function (e) {
            return Math.sign(e) * Math.log1p(Math.abs(e / t));
          };
        }
        function yi(t) {
          return function (e) {
            return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
          };
        }
        function Hr(t) {
          var e = 1,
            n = t(Er(e), yi(e));
          return (
            (n.constant = function (i) {
              return arguments.length ? t(Er((e = +i)), yi(e)) : e;
            }),
            er(n)
          );
        }
        function Tr() {
          var t = Hr(At());
          return (
            (t.copy = function () {
              return Yn(t, Tr()).constant(t.constant());
            }),
            Rt.C.apply(t, arguments)
          );
        }
        var Vr = r(97458);
        function _r(t) {
          return function (e) {
            return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
          };
        }
        function Ci(t) {
          return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
        }
        function ai(t) {
          return t < 0 ? -t * t : t * t;
        }
        function oi(t) {
          var e = t(jn, jn),
            n = 1;
          function i() {
            return n === 1
              ? t(jn, jn)
              : n === 0.5
                ? t(Ci, ai)
                : t(_r(n), _r(1 / n));
          }
          return (
            (e.exponent = function (s) {
              return arguments.length ? ((n = +s), i()) : n;
            }),
            er(e)
          );
        }
        function Rr() {
          var t = oi(At());
          return (
            (t.copy = function () {
              return Yn(t, Rr()).exponent(t.exponent());
            }),
            Rt.C.apply(t, arguments),
            t
          );
        }
        function Gr() {
          return Rr.apply(null, arguments).exponent(0.5);
        }
        function mi(t) {
          return Math.sign(t) * t * t;
        }
        function Xr(t) {
          return Math.sign(t) * Math.sqrt(Math.abs(t));
        }
        function vr() {
          var t = gt(),
            e = [0, 1],
            n = !1,
            i;
          function s(p) {
            var T = Xr(t(p));
            return isNaN(T) ? i : n ? Math.round(T) : T;
          }
          return (
            (s.invert = function (p) {
              return t.invert(mi(p));
            }),
            (s.domain = function (p) {
              return arguments.length ? (t.domain(p), s) : t.domain();
            }),
            (s.range = function (p) {
              return arguments.length
                ? (t.range((e = Array.from(p, wn)).map(mi)), s)
                : e.slice();
            }),
            (s.rangeRound = function (p) {
              return s.range(p).round(!0);
            }),
            (s.round = function (p) {
              return arguments.length ? ((n = !!p), s) : n;
            }),
            (s.clamp = function (p) {
              return arguments.length ? (t.clamp(p), s) : t.clamp();
            }),
            (s.unknown = function (p) {
              return arguments.length ? ((i = p), s) : i;
            }),
            (s.copy = function () {
              return vr(t.domain(), e).round(n).clamp(t.clamp()).unknown(i);
            }),
            Rt.C.apply(s, arguments),
            er(s)
          );
        }
        function Mr(t, e) {
          let n;
          if (e === void 0)
            for (const i of t)
              i != null && (n < i || (n === void 0 && i >= i)) && (n = i);
          else {
            let i = -1;
            for (let s of t)
              (s = e(s, ++i, t)) != null &&
                (n < s || (n === void 0 && s >= s)) &&
                (n = s);
          }
          return n;
        }
        function ui(t, e) {
          let n;
          if (e === void 0)
            for (const i of t)
              i != null && (n > i || (n === void 0 && i >= i)) && (n = i);
          else {
            let i = -1;
            for (let s of t)
              (s = e(s, ++i, t)) != null &&
                (n > s || (n === void 0 && s >= s)) &&
                (n = s);
          }
          return n;
        }
        function C(t, ...e) {
          if (typeof t[Symbol.iterator] != "function")
            throw new TypeError("values is not iterable");
          t = Array.from(t);
          let [n] = e;
          if ((n && n.length !== 2) || e.length > 1) {
            const i = Uint32Array.from(t, (s, p) => p);
            return (
              e.length > 1
                ? ((e = e.map((s) => t.map(s))),
                  i.sort((s, p) => {
                    for (const T of e) {
                      const B = dt(T[s], T[p]);
                      if (B) return B;
                    }
                  }))
                : ((n = t.map(n)), i.sort((s, p) => dt(n[s], n[p]))),
              permute(t, i)
            );
          }
          return t.sort(z(n));
        }
        function z(t = at) {
          if (t === at) return dt;
          if (typeof t != "function")
            throw new TypeError("compare is not a function");
          return (e, n) => {
            const i = t(e, n);
            return i || i === 0 ? i : (t(n, n) === 0) - (t(e, e) === 0);
          };
        }
        function dt(t, e) {
          return (
            (t == null || !(t >= t)) - (e == null || !(e >= e)) ||
            (t < e ? -1 : t > e ? 1 : 0)
          );
        }
        function Dt(t, e, n = 0, i = 1 / 0, s) {
          if (
            ((e = Math.floor(e)),
            (n = Math.floor(Math.max(0, n))),
            (i = Math.floor(Math.min(t.length - 1, i))),
            !(n <= e && e <= i))
          )
            return t;
          for (s = s === void 0 ? dt : z(s); i > n; ) {
            if (i - n > 600) {
              const ht = i - n + 1,
                pt = e - n + 1,
                Zt = Math.log(ht),
                Kt = 0.5 * Math.exp((2 * Zt) / 3),
                re =
                  0.5 *
                  Math.sqrt((Zt * Kt * (ht - Kt)) / ht) *
                  (pt - ht / 2 < 0 ? -1 : 1),
                ge = Math.max(n, Math.floor(e - (pt * Kt) / ht + re)),
                Te = Math.min(i, Math.floor(e + ((ht - pt) * Kt) / ht + re));
              Dt(t, e, ge, Te, s);
            }
            const p = t[e];
            let T = n,
              B = i;
            for (Lt(t, n, e), s(t[i], p) > 0 && Lt(t, n, i); T < B; ) {
              for (Lt(t, T, B), ++T, --B; s(t[T], p) < 0; ) ++T;
              for (; s(t[B], p) > 0; ) --B;
            }
            s(t[n], p) === 0 ? Lt(t, n, B) : (++B, Lt(t, B, i)),
              B <= e && (n = B + 1),
              e <= B && (i = B - 1);
          }
          return t;
        }
        function Lt(t, e, n) {
          const i = t[e];
          (t[e] = t[n]), (t[n] = i);
        }
        function qt(t, e, n) {
          if (
            ((t = Float64Array.from(St(t, n))),
            !(!(i = t.length) || isNaN((e = +e))))
          ) {
            if (e <= 0 || i < 2) return ui(t);
            if (e >= 1) return Mr(t);
            var i,
              s = (i - 1) * e,
              p = Math.floor(s),
              T = Mr(Dt(t, p).subarray(0, p + 1)),
              B = ui(t.subarray(p + 1));
            return T + (B - T) * (s - p);
          }
        }
        function ce(t, e, n = et) {
          if (!(!(i = t.length) || isNaN((e = +e)))) {
            if (e <= 0 || i < 2) return +n(t[0], 0, t);
            if (e >= 1) return +n(t[i - 1], i - 1, t);
            var i,
              s = (i - 1) * e,
              p = Math.floor(s),
              T = +n(t[p], p, t),
              B = +n(t[p + 1], p + 1, t);
            return T + (B - T) * (s - p);
          }
        }
        function be(t, e, n = number) {
          if (!isNaN((e = +e))) {
            if (
              ((i = Float64Array.from(t, (B, ht) => number(n(t[ht], ht, t)))),
              e <= 0)
            )
              return minIndex(i);
            if (e >= 1) return maxIndex(i);
            var i,
              s = Uint32Array.from(t, (B, ht) => ht),
              p = i.length - 1,
              T = Math.floor(p * e);
            return (
              quickselect(s, T, 0, p, (B, ht) => ascendingDefined(i[B], i[ht])),
              (T = greatest(s.subarray(0, T + 1), (B) => i[B])),
              T >= 0 ? T : -1
            );
          }
        }
        function Ee() {
          var t = [],
            e = [],
            n = [],
            i;
          function s() {
            var T = 0,
              B = Math.max(1, e.length);
            for (n = new Array(B - 1); ++T < B; ) n[T - 1] = ce(t, T / B);
            return p;
          }
          function p(T) {
            return T == null || isNaN((T = +T)) ? i : e[Tt(n, T)];
          }
          return (
            (p.invertExtent = function (T) {
              var B = e.indexOf(T);
              return B < 0
                ? [NaN, NaN]
                : [
                    B > 0 ? n[B - 1] : t[0],
                    B < n.length ? n[B] : t[t.length - 1],
                  ];
            }),
            (p.domain = function (T) {
              if (!arguments.length) return t.slice();
              t = [];
              for (let B of T) B != null && !isNaN((B = +B)) && t.push(B);
              return t.sort(at), s();
            }),
            (p.range = function (T) {
              return arguments.length ? ((e = Array.from(T)), s()) : e.slice();
            }),
            (p.unknown = function (T) {
              return arguments.length ? ((i = T), p) : i;
            }),
            (p.quantiles = function () {
              return n.slice();
            }),
            (p.copy = function () {
              return Ee().domain(t).range(e).unknown(i);
            }),
            Rt.C.apply(p, arguments)
          );
        }
        function on() {
          var t = 0,
            e = 1,
            n = 1,
            i = [0.5],
            s = [0, 1],
            p;
          function T(ht) {
            return ht != null && ht <= ht ? s[Tt(i, ht, 0, n)] : p;
          }
          function B() {
            var ht = -1;
            for (i = new Array(n); ++ht < n; )
              i[ht] = ((ht + 1) * e - (ht - n) * t) / (n + 1);
            return T;
          }
          return (
            (T.domain = function (ht) {
              return arguments.length
                ? (([t, e] = ht), (t = +t), (e = +e), B())
                : [t, e];
            }),
            (T.range = function (ht) {
              return arguments.length
                ? ((n = (s = Array.from(ht)).length - 1), B())
                : s.slice();
            }),
            (T.invertExtent = function (ht) {
              var pt = s.indexOf(ht);
              return pt < 0
                ? [NaN, NaN]
                : pt < 1
                  ? [t, i[0]]
                  : pt >= n
                    ? [i[n - 1], e]
                    : [i[pt - 1], i[pt]];
            }),
            (T.unknown = function (ht) {
              return arguments.length && (p = ht), T;
            }),
            (T.thresholds = function () {
              return i.slice();
            }),
            (T.copy = function () {
              return on().domain([t, e]).range(s).unknown(p);
            }),
            Rt.C.apply(er(T), arguments)
          );
        }
        function rn() {
          var t = [0.5],
            e = [0, 1],
            n,
            i = 1;
          function s(p) {
            return p != null && p <= p ? e[Tt(t, p, 0, i)] : n;
          }
          return (
            (s.domain = function (p) {
              return arguments.length
                ? ((t = Array.from(p)),
                  (i = Math.min(t.length, e.length - 1)),
                  s)
                : t.slice();
            }),
            (s.range = function (p) {
              return arguments.length
                ? ((e = Array.from(p)),
                  (i = Math.min(t.length, e.length - 1)),
                  s)
                : e.slice();
            }),
            (s.invertExtent = function (p) {
              var T = e.indexOf(p);
              return [t[T - 1], t[T]];
            }),
            (s.unknown = function (p) {
              return arguments.length ? ((n = p), s) : n;
            }),
            (s.copy = function () {
              return rn().domain(t).range(e).unknown(n);
            }),
            Rt.C.apply(s, arguments)
          );
        }
        const sn = 1e3,
          ln = sn * 60,
          Bn = ln * 60,
          Un = Bn * 24,
          Nn = Un * 7,
          Ne = Un * 30,
          He = Un * 365,
          cn = new Date(),
          Gn = new Date();
        function gn(t, e, n, i) {
          function s(p) {
            return (
              t((p = arguments.length === 0 ? new Date() : new Date(+p))), p
            );
          }
          return (
            (s.floor = (p) => (t((p = new Date(+p))), p)),
            (s.ceil = (p) => (t((p = new Date(p - 1))), e(p, 1), t(p), p)),
            (s.round = (p) => {
              const T = s(p),
                B = s.ceil(p);
              return p - T < B - p ? T : B;
            }),
            (s.offset = (p, T) => (
              e((p = new Date(+p)), T == null ? 1 : Math.floor(T)), p
            )),
            (s.range = (p, T, B) => {
              const ht = [];
              if (
                ((p = s.ceil(p)),
                (B = B == null ? 1 : Math.floor(B)),
                !(p < T) || !(B > 0))
              )
                return ht;
              let pt;
              do ht.push((pt = new Date(+p))), e(p, B), t(p);
              while (pt < p && p < T);
              return ht;
            }),
            (s.filter = (p) =>
              gn(
                (T) => {
                  if (T >= T) for (; t(T), !p(T); ) T.setTime(T - 1);
                },
                (T, B) => {
                  if (T >= T)
                    if (B < 0) for (; ++B <= 0; ) for (; e(T, -1), !p(T); );
                    else for (; --B >= 0; ) for (; e(T, 1), !p(T); );
                },
              )),
            n &&
              ((s.count = (p, T) => (
                cn.setTime(+p),
                Gn.setTime(+T),
                t(cn),
                t(Gn),
                Math.floor(n(cn, Gn))
              )),
              (s.every = (p) => (
                (p = Math.floor(p)),
                !isFinite(p) || !(p > 0)
                  ? null
                  : p > 1
                    ? s.filter(
                        i
                          ? (T) => i(T) % p === 0
                          : (T) => s.count(0, T) % p === 0,
                      )
                    : s
              ))),
            s
          );
        }
        const In = gn(
          () => {},
          (t, e) => {
            t.setTime(+t + e);
          },
          (t, e) => e - t,
        );
        In.every = (t) => (
          (t = Math.floor(t)),
          !isFinite(t) || !(t > 0)
            ? null
            : t > 1
              ? gn(
                  (e) => {
                    e.setTime(Math.floor(e / t) * t);
                  },
                  (e, n) => {
                    e.setTime(+e + n * t);
                  },
                  (e, n) => (n - e) / t,
                )
              : In
        );
        const Xt = In.range,
          Le = gn(
            (t) => {
              t.setTime(t - t.getMilliseconds());
            },
            (t, e) => {
              t.setTime(+t + e * sn);
            },
            (t, e) => (e - t) / sn,
            (t) => t.getUTCSeconds(),
          ),
          Br = Le.range,
          Dr = gn(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * sn);
            },
            (t, e) => {
              t.setTime(+t + e * ln);
            },
            (t, e) => (e - t) / ln,
            (t) => t.getMinutes(),
          ),
          gi = Dr.range,
          Nr = gn(
            (t) => {
              t.setUTCSeconds(0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * ln);
            },
            (t, e) => (e - t) / ln,
            (t) => t.getUTCMinutes(),
          ),
          Ii = Nr.range,
          Yr = gn(
            (t) => {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  t.getSeconds() * sn -
                  t.getMinutes() * ln,
              );
            },
            (t, e) => {
              t.setTime(+t + e * Bn);
            },
            (t, e) => (e - t) / Bn,
            (t) => t.getHours(),
          ),
          Oa = Yr.range,
          _i = gn(
            (t) => {
              t.setUTCMinutes(0, 0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * Bn);
            },
            (t, e) => (e - t) / Bn,
            (t) => t.getUTCHours(),
          ),
          Ri = _i.range,
          Zr = gn(
            (t) => t.setHours(0, 0, 0, 0),
            (t, e) => t.setDate(t.getDate() + e),
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * ln) /
              Un,
            (t) => t.getDate() - 1,
          ),
          Wi = Zr.range,
          li = gn(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / Un,
            (t) => t.getUTCDate() - 1,
          ),
          Aa = li.range,
          ki = gn(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / Un,
            (t) => Math.floor(t / Un),
          ),
          Pa = ki.range;
        function Lr(t) {
          return gn(
            (e) => {
              e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
                e.setHours(0, 0, 0, 0);
            },
            (e, n) => {
              e.setDate(e.getDate() + n * 7);
            },
            (e, n) =>
              (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * ln) /
              Nn,
          );
        }
        const si = Lr(0),
          bi = Lr(1),
          Ki = Lr(2),
          na = Lr(3),
          Jr = Lr(4),
          ra = Lr(5),
          u = Lr(6),
          a = si.range,
          w = bi.range,
          b = Ki.range,
          jt = na.range,
          Gt = Jr.range,
          Yt = ra.range,
          ae = u.range;
        function ue(t) {
          return gn(
            (e) => {
              e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
                e.setUTCHours(0, 0, 0, 0);
            },
            (e, n) => {
              e.setUTCDate(e.getUTCDate() + n * 7);
            },
            (e, n) => (n - e) / Nn,
          );
        }
        const de = ue(0),
          ye = ue(1),
          Oe = ue(2),
          me = ue(3),
          Ae = ue(4),
          Qe = ue(5),
          ze = ue(6),
          De = de.range,
          he = ye.range,
          Pe = Oe.range,
          fe = me.range,
          pe = Ae.range,
          Et = Qe.range,
          Nt = ze.range,
          Qt = gn(
            (t) => {
              t.setDate(1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setMonth(t.getMonth() + e);
            },
            (t, e) =>
              e.getMonth() -
              t.getMonth() +
              (e.getFullYear() - t.getFullYear()) * 12,
            (t) => t.getMonth(),
          ),
          oe = Qt.range,
          ie = gn(
            (t) => {
              t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCMonth(t.getUTCMonth() + e);
            },
            (t, e) =>
              e.getUTCMonth() -
              t.getUTCMonth() +
              (e.getUTCFullYear() - t.getUTCFullYear()) * 12,
            (t) => t.getUTCMonth(),
          ),
          Be = ie.range,
          Se = gn(
            (t) => {
              t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setFullYear(t.getFullYear() + e);
            },
            (t, e) => e.getFullYear() - t.getFullYear(),
            (t) => t.getFullYear(),
          );
        Se.every = (t) =>
          !isFinite((t = Math.floor(t))) || !(t > 0)
            ? null
            : gn(
                (e) => {
                  e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                    e.setMonth(0, 1),
                    e.setHours(0, 0, 0, 0);
                },
                (e, n) => {
                  e.setFullYear(e.getFullYear() + n * t);
                },
              );
        const je = Se.range,
          Ve = gn(
            (t) => {
              t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCFullYear(t.getUTCFullYear() + e);
            },
            (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
            (t) => t.getUTCFullYear(),
          );
        Ve.every = (t) =>
          !isFinite((t = Math.floor(t))) || !(t > 0)
            ? null
            : gn(
                (e) => {
                  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                    e.setUTCMonth(0, 1),
                    e.setUTCHours(0, 0, 0, 0);
                },
                (e, n) => {
                  e.setUTCFullYear(e.getUTCFullYear() + n * t);
                },
              );
        const qe = Ve.range;
        function Ue(t, e, n, i, s, p) {
          const T = [
            [Le, 1, sn],
            [Le, 5, 5 * sn],
            [Le, 15, 15 * sn],
            [Le, 30, 30 * sn],
            [p, 1, ln],
            [p, 5, 5 * ln],
            [p, 15, 15 * ln],
            [p, 30, 30 * ln],
            [s, 1, Bn],
            [s, 3, 3 * Bn],
            [s, 6, 6 * Bn],
            [s, 12, 12 * Bn],
            [i, 1, Un],
            [i, 2, 2 * Un],
            [n, 1, Nn],
            [e, 1, Ne],
            [e, 3, 3 * Ne],
            [t, 1, He],
          ];
          function B(pt, Zt, Kt) {
            const re = Zt < pt;
            re && ([pt, Zt] = [Zt, pt]);
            const ge =
                Kt && typeof Kt.range == "function" ? Kt : ht(pt, Zt, Kt),
              Te = ge ? ge.range(pt, +Zt + 1) : [];
            return re ? Te.reverse() : Te;
          }
          function ht(pt, Zt, Kt) {
            const re = Math.abs(Zt - pt) / Kt,
              ge = V(([, , dn]) => dn).right(T, re);
            if (ge === T.length) return t.every(ct(pt / He, Zt / He, Kt));
            if (ge === 0) return In.every(Math.max(ct(pt, Zt, Kt), 1));
            const [Te, Me] = T[re / T[ge - 1][2] < T[ge][2] / re ? ge - 1 : ge];
            return Te.every(Me);
          }
          return [B, ht];
        }
        const [en, an] = Ue(Ve, ie, de, ki, _i, Nr),
          [pn, vn] = Ue(Se, Qt, si, Zr, Yr, Dr);
        function Fn(t) {
          if (0 <= t.y && t.y < 100) {
            var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return e.setFullYear(t.y), e;
          }
          return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
        }
        function ar(t) {
          if (0 <= t.y && t.y < 100) {
            var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return e.setUTCFullYear(t.y), e;
          }
          return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
        }
        function Ze(t, e, n) {
          return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
        }
        function Ln(t) {
          var e = t.dateTime,
            n = t.date,
            i = t.time,
            s = t.periods,
            p = t.days,
            T = t.shortDays,
            B = t.months,
            ht = t.shortMonths,
            pt = jr(s),
            Zt = Or(s),
            Kt = jr(p),
            re = Or(p),
            ge = jr(T),
            Te = Or(T),
            Me = jr(B),
            dn = Or(B),
            yn = jr(ht),
            zn = Or(ht),
            Xn = {
              a: Ei,
              A: wi,
              b: Si,
              B: Sr,
              c: null,
              d: wa,
              e: wa,
              f: po,
              g: Eo,
              G: So,
              H: co,
              I: fo,
              j: ho,
              L: Sa,
              m: vo,
              M: yo,
              p: _l,
              q: Rl,
              Q: Ia,
              s: _a,
              S: mo,
              u: go,
              U: bo,
              V: xo,
              w: Oo,
              W: Ao,
              x: null,
              X: null,
              y: Po,
              Y: wo,
              Z: To,
              "%": Ca,
            },
            On = {
              a: Bl,
              A: Nl,
              b: Ll,
              B: Ul,
              c: null,
              d: Ma,
              e: Ma,
              f: Co,
              g: Ko,
              G: zo,
              H: Mo,
              I: Do,
              j: jo,
              L: Da,
              m: Io,
              M: _o,
              p: Wl,
              q: kl,
              Q: Ia,
              s: _a,
              S: Ro,
              u: Bo,
              U: No,
              V: Lo,
              w: Uo,
              W: Wo,
              x: null,
              X: null,
              y: ko,
              Y: Fo,
              Z: $o,
              "%": Ca,
            },
            nr = {
              a: xa,
              A: ta,
              b: _n,
              B: Fr,
              c: yr,
              d: Cr,
              e: Cr,
              f: oo,
              g: qr,
              G: kr,
              H: ia,
              I: ia,
              j: Ea,
              L: zi,
              m: Kr,
              M: Ni,
              p: qi,
              q: xi,
              Q: lo,
              s: so,
              S: Fi,
              u: Wr,
              U: Qr,
              V: fi,
              w: ci,
              W: di,
              x: ri,
              X: ea,
              y: qr,
              Y: kr,
              Z: ti,
              "%": uo,
            };
          (Xn.x = Ye(n, Xn)),
            (Xn.X = Ye(i, Xn)),
            (Xn.c = Ye(e, Xn)),
            (On.x = Ye(n, On)),
            (On.X = Ye(i, On)),
            (On.c = Ye(e, On));
          function Ye($e, Dn) {
            return function (Wn) {
              var ve = [],
                mr = -1,
                Zn = 0,
                gr = $e.length,
                br,
                pi,
                ao;
              for (Wn instanceof Date || (Wn = new Date(+Wn)); ++mr < gr; )
                $e.charCodeAt(mr) === 37 &&
                  (ve.push($e.slice(Zn, mr)),
                  (pi = or[(br = $e.charAt(++mr))]) != null
                    ? (br = $e.charAt(++mr))
                    : (pi = br === "e" ? " " : "0"),
                  (ao = Dn[br]) && (br = ao(Wn, pi)),
                  ve.push(br),
                  (Zn = mr + 1));
              return ve.push($e.slice(Zn, mr)), ve.join("");
            };
          }
          function Vn($e, Dn) {
            return function (Wn) {
              var ve = Ze(1900, void 0, 1),
                mr = Ir(ve, $e, (Wn += ""), 0),
                Zn,
                gr;
              if (mr != Wn.length) return null;
              if ("Q" in ve) return new Date(ve.Q);
              if ("s" in ve)
                return new Date(ve.s * 1e3 + ("L" in ve ? ve.L : 0));
              if (
                (Dn && !("Z" in ve) && (ve.Z = 0),
                "p" in ve && (ve.H = (ve.H % 12) + ve.p * 12),
                ve.m === void 0 && (ve.m = "q" in ve ? ve.q : 0),
                "V" in ve)
              ) {
                if (ve.V < 1 || ve.V > 53) return null;
                "w" in ve || (ve.w = 1),
                  "Z" in ve
                    ? ((Zn = ar(Ze(ve.y, 0, 1))),
                      (gr = Zn.getUTCDay()),
                      (Zn = gr > 4 || gr === 0 ? ye.ceil(Zn) : ye(Zn)),
                      (Zn = li.offset(Zn, (ve.V - 1) * 7)),
                      (ve.y = Zn.getUTCFullYear()),
                      (ve.m = Zn.getUTCMonth()),
                      (ve.d = Zn.getUTCDate() + ((ve.w + 6) % 7)))
                    : ((Zn = Fn(Ze(ve.y, 0, 1))),
                      (gr = Zn.getDay()),
                      (Zn = gr > 4 || gr === 0 ? bi.ceil(Zn) : bi(Zn)),
                      (Zn = Zr.offset(Zn, (ve.V - 1) * 7)),
                      (ve.y = Zn.getFullYear()),
                      (ve.m = Zn.getMonth()),
                      (ve.d = Zn.getDate() + ((ve.w + 6) % 7)));
              } else
                ("W" in ve || "U" in ve) &&
                  ("w" in ve ||
                    (ve.w = "u" in ve ? ve.u % 7 : "W" in ve ? 1 : 0),
                  (gr =
                    "Z" in ve
                      ? ar(Ze(ve.y, 0, 1)).getUTCDay()
                      : Fn(Ze(ve.y, 0, 1)).getDay()),
                  (ve.m = 0),
                  (ve.d =
                    "W" in ve
                      ? ((ve.w + 6) % 7) + ve.W * 7 - ((gr + 5) % 7)
                      : ve.w + ve.U * 7 - ((gr + 6) % 7)));
              return "Z" in ve
                ? ((ve.H += (ve.Z / 100) | 0), (ve.M += ve.Z % 100), ar(ve))
                : Fn(ve);
            };
          }
          function Ir($e, Dn, Wn, ve) {
            for (
              var mr = 0, Zn = Dn.length, gr = Wn.length, br, pi;
              mr < Zn;
            ) {
              if (ve >= gr) return -1;
              if (((br = Dn.charCodeAt(mr++)), br === 37)) {
                if (
                  ((br = Dn.charAt(mr++)),
                  (pi = nr[br in or ? Dn.charAt(mr++) : br]),
                  !pi || (ve = pi($e, Wn, ve)) < 0)
                )
                  return -1;
              } else if (br != Wn.charCodeAt(ve++)) return -1;
            }
            return ve;
          }
          function qi($e, Dn, Wn) {
            var ve = pt.exec(Dn.slice(Wn));
            return ve
              ? (($e.p = Zt.get(ve[0].toLowerCase())), Wn + ve[0].length)
              : -1;
          }
          function xa($e, Dn, Wn) {
            var ve = ge.exec(Dn.slice(Wn));
            return ve
              ? (($e.w = Te.get(ve[0].toLowerCase())), Wn + ve[0].length)
              : -1;
          }
          function ta($e, Dn, Wn) {
            var ve = Kt.exec(Dn.slice(Wn));
            return ve
              ? (($e.w = re.get(ve[0].toLowerCase())), Wn + ve[0].length)
              : -1;
          }
          function _n($e, Dn, Wn) {
            var ve = yn.exec(Dn.slice(Wn));
            return ve
              ? (($e.m = zn.get(ve[0].toLowerCase())), Wn + ve[0].length)
              : -1;
          }
          function Fr($e, Dn, Wn) {
            var ve = Me.exec(Dn.slice(Wn));
            return ve
              ? (($e.m = dn.get(ve[0].toLowerCase())), Wn + ve[0].length)
              : -1;
          }
          function yr($e, Dn, Wn) {
            return Ir($e, e, Dn, Wn);
          }
          function ri($e, Dn, Wn) {
            return Ir($e, n, Dn, Wn);
          }
          function ea($e, Dn, Wn) {
            return Ir($e, i, Dn, Wn);
          }
          function Ei($e) {
            return T[$e.getDay()];
          }
          function wi($e) {
            return p[$e.getDay()];
          }
          function Si($e) {
            return ht[$e.getMonth()];
          }
          function Sr($e) {
            return B[$e.getMonth()];
          }
          function _l($e) {
            return s[+($e.getHours() >= 12)];
          }
          function Rl($e) {
            return 1 + ~~($e.getMonth() / 3);
          }
          function Bl($e) {
            return T[$e.getUTCDay()];
          }
          function Nl($e) {
            return p[$e.getUTCDay()];
          }
          function Ll($e) {
            return ht[$e.getUTCMonth()];
          }
          function Ul($e) {
            return B[$e.getUTCMonth()];
          }
          function Wl($e) {
            return s[+($e.getUTCHours() >= 12)];
          }
          function kl($e) {
            return 1 + ~~($e.getUTCMonth() / 3);
          }
          return {
            format: function ($e) {
              var Dn = Ye(($e += ""), Xn);
              return (
                (Dn.toString = function () {
                  return $e;
                }),
                Dn
              );
            },
            parse: function ($e) {
              var Dn = Vn(($e += ""), !1);
              return (
                (Dn.toString = function () {
                  return $e;
                }),
                Dn
              );
            },
            utcFormat: function ($e) {
              var Dn = Ye(($e += ""), On);
              return (
                (Dn.toString = function () {
                  return $e;
                }),
                Dn
              );
            },
            utcParse: function ($e) {
              var Dn = Vn(($e += ""), !0);
              return (
                (Dn.toString = function () {
                  return $e;
                }),
                Dn
              );
            },
          };
        }
        var or = { "-": "", _: " ", 0: "0" },
          kn = /^\s*\d+/,
          wr = /^%/,
          Bi = /[\\^$*+?|[\]().{}]/g;
        function fn(t, e, n) {
          var i = t < 0 ? "-" : "",
            s = (i ? -t : t) + "",
            p = s.length;
          return i + (p < n ? new Array(n - p + 1).join(e) + s : s);
        }
        function Ur(t) {
          return t.replace(Bi, "\\$&");
        }
        function jr(t) {
          return new RegExp("^(?:" + t.map(Ur).join("|") + ")", "i");
        }
        function Or(t) {
          return new Map(t.map((e, n) => [e.toLowerCase(), n]));
        }
        function ci(t, e, n) {
          var i = kn.exec(e.slice(n, n + 1));
          return i ? ((t.w = +i[0]), n + i[0].length) : -1;
        }
        function Wr(t, e, n) {
          var i = kn.exec(e.slice(n, n + 1));
          return i ? ((t.u = +i[0]), n + i[0].length) : -1;
        }
        function Qr(t, e, n) {
          var i = kn.exec(e.slice(n, n + 2));
          return i ? ((t.U = +i[0]), n + i[0].length) : -1;
        }
        function fi(t, e, n) {
          var i = kn.exec(e.slice(n, n + 2));
          return i ? ((t.V = +i[0]), n + i[0].length) : -1;
        }
        function di(t, e, n) {
          var i = kn.exec(e.slice(n, n + 2));
          return i ? ((t.W = +i[0]), n + i[0].length) : -1;
        }
        function kr(t, e, n) {
          var i = kn.exec(e.slice(n, n + 4));
          return i ? ((t.y = +i[0]), n + i[0].length) : -1;
        }
        function qr(t, e, n) {
          var i = kn.exec(e.slice(n, n + 2));
          return i
            ? ((t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3)), n + i[0].length)
            : -1;
        }
        function ti(t, e, n) {
          var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
          return i
            ? ((t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00"))), n + i[0].length)
            : -1;
        }
        function xi(t, e, n) {
          var i = kn.exec(e.slice(n, n + 1));
          return i ? ((t.q = i[0] * 3 - 3), n + i[0].length) : -1;
        }
        function Kr(t, e, n) {
          var i = kn.exec(e.slice(n, n + 2));
          return i ? ((t.m = i[0] - 1), n + i[0].length) : -1;
        }
        function Cr(t, e, n) {
          var i = kn.exec(e.slice(n, n + 2));
          return i ? ((t.d = +i[0]), n + i[0].length) : -1;
        }
        function Ea(t, e, n) {
          var i = kn.exec(e.slice(n, n + 3));
          return i ? ((t.m = 0), (t.d = +i[0]), n + i[0].length) : -1;
        }
        function ia(t, e, n) {
          var i = kn.exec(e.slice(n, n + 2));
          return i ? ((t.H = +i[0]), n + i[0].length) : -1;
        }
        function Ni(t, e, n) {
          var i = kn.exec(e.slice(n, n + 2));
          return i ? ((t.M = +i[0]), n + i[0].length) : -1;
        }
        function Fi(t, e, n) {
          var i = kn.exec(e.slice(n, n + 2));
          return i ? ((t.S = +i[0]), n + i[0].length) : -1;
        }
        function zi(t, e, n) {
          var i = kn.exec(e.slice(n, n + 3));
          return i ? ((t.L = +i[0]), n + i[0].length) : -1;
        }
        function oo(t, e, n) {
          var i = kn.exec(e.slice(n, n + 6));
          return i ? ((t.L = Math.floor(i[0] / 1e3)), n + i[0].length) : -1;
        }
        function uo(t, e, n) {
          var i = wr.exec(e.slice(n, n + 1));
          return i ? n + i[0].length : -1;
        }
        function lo(t, e, n) {
          var i = kn.exec(e.slice(n));
          return i ? ((t.Q = +i[0]), n + i[0].length) : -1;
        }
        function so(t, e, n) {
          var i = kn.exec(e.slice(n));
          return i ? ((t.s = +i[0]), n + i[0].length) : -1;
        }
        function wa(t, e) {
          return fn(t.getDate(), e, 2);
        }
        function co(t, e) {
          return fn(t.getHours(), e, 2);
        }
        function fo(t, e) {
          return fn(t.getHours() % 12 || 12, e, 2);
        }
        function ho(t, e) {
          return fn(1 + Zr.count(Se(t), t), e, 3);
        }
        function Sa(t, e) {
          return fn(t.getMilliseconds(), e, 3);
        }
        function po(t, e) {
          return Sa(t, e) + "000";
        }
        function vo(t, e) {
          return fn(t.getMonth() + 1, e, 2);
        }
        function yo(t, e) {
          return fn(t.getMinutes(), e, 2);
        }
        function mo(t, e) {
          return fn(t.getSeconds(), e, 2);
        }
        function go(t) {
          var e = t.getDay();
          return e === 0 ? 7 : e;
        }
        function bo(t, e) {
          return fn(si.count(Se(t) - 1, t), e, 2);
        }
        function Ta(t) {
          var e = t.getDay();
          return e >= 4 || e === 0 ? Jr(t) : Jr.ceil(t);
        }
        function xo(t, e) {
          return (
            (t = Ta(t)), fn(Jr.count(Se(t), t) + (Se(t).getDay() === 4), e, 2)
          );
        }
        function Oo(t) {
          return t.getDay();
        }
        function Ao(t, e) {
          return fn(bi.count(Se(t) - 1, t), e, 2);
        }
        function Po(t, e) {
          return fn(t.getFullYear() % 100, e, 2);
        }
        function Eo(t, e) {
          return (t = Ta(t)), fn(t.getFullYear() % 100, e, 2);
        }
        function wo(t, e) {
          return fn(t.getFullYear() % 1e4, e, 4);
        }
        function So(t, e) {
          var n = t.getDay();
          return (
            (t = n >= 4 || n === 0 ? Jr(t) : Jr.ceil(t)),
            fn(t.getFullYear() % 1e4, e, 4)
          );
        }
        function To(t) {
          var e = t.getTimezoneOffset();
          return (
            (e > 0 ? "-" : ((e *= -1), "+")) +
            fn((e / 60) | 0, "0", 2) +
            fn(e % 60, "0", 2)
          );
        }
        function Ma(t, e) {
          return fn(t.getUTCDate(), e, 2);
        }
        function Mo(t, e) {
          return fn(t.getUTCHours(), e, 2);
        }
        function Do(t, e) {
          return fn(t.getUTCHours() % 12 || 12, e, 2);
        }
        function jo(t, e) {
          return fn(1 + li.count(Ve(t), t), e, 3);
        }
        function Da(t, e) {
          return fn(t.getUTCMilliseconds(), e, 3);
        }
        function Co(t, e) {
          return Da(t, e) + "000";
        }
        function Io(t, e) {
          return fn(t.getUTCMonth() + 1, e, 2);
        }
        function _o(t, e) {
          return fn(t.getUTCMinutes(), e, 2);
        }
        function Ro(t, e) {
          return fn(t.getUTCSeconds(), e, 2);
        }
        function Bo(t) {
          var e = t.getUTCDay();
          return e === 0 ? 7 : e;
        }
        function No(t, e) {
          return fn(de.count(Ve(t) - 1, t), e, 2);
        }
        function ja(t) {
          var e = t.getUTCDay();
          return e >= 4 || e === 0 ? Ae(t) : Ae.ceil(t);
        }
        function Lo(t, e) {
          return (
            (t = ja(t)),
            fn(Ae.count(Ve(t), t) + (Ve(t).getUTCDay() === 4), e, 2)
          );
        }
        function Uo(t) {
          return t.getUTCDay();
        }
        function Wo(t, e) {
          return fn(ye.count(Ve(t) - 1, t), e, 2);
        }
        function ko(t, e) {
          return fn(t.getUTCFullYear() % 100, e, 2);
        }
        function Ko(t, e) {
          return (t = ja(t)), fn(t.getUTCFullYear() % 100, e, 2);
        }
        function Fo(t, e) {
          return fn(t.getUTCFullYear() % 1e4, e, 4);
        }
        function zo(t, e) {
          var n = t.getUTCDay();
          return (
            (t = n >= 4 || n === 0 ? Ae(t) : Ae.ceil(t)),
            fn(t.getUTCFullYear() % 1e4, e, 4)
          );
        }
        function $o() {
          return "+0000";
        }
        function Ca() {
          return "%";
        }
        function Ia(t) {
          return +t;
        }
        function _a(t) {
          return Math.floor(+t / 1e3);
        }
        var Oi, Ra, Ho, Ba, Vo;
        Go({
          dateTime: "%x, %X",
          date: "%-m/%-d/%Y",
          time: "%-I:%M:%S %p",
          periods: ["AM", "PM"],
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        });
        function Go(t) {
          return (
            (Oi = Ln(t)),
            (Ra = Oi.format),
            (Ho = Oi.parse),
            (Ba = Oi.utcFormat),
            (Vo = Oi.utcParse),
            Oi
          );
        }
        function Xo(t) {
          return new Date(t);
        }
        function Yo(t) {
          return t instanceof Date ? +t : +new Date(+t);
        }
        function aa(t, e, n, i, s, p, T, B, ht, pt) {
          var Zt = gt(),
            Kt = Zt.invert,
            re = Zt.domain,
            ge = pt(".%L"),
            Te = pt(":%S"),
            Me = pt("%I:%M"),
            dn = pt("%I %p"),
            yn = pt("%a %d"),
            zn = pt("%b %d"),
            Xn = pt("%B"),
            On = pt("%Y");
          function nr(Ye) {
            return (
              ht(Ye) < Ye
                ? ge
                : B(Ye) < Ye
                  ? Te
                  : T(Ye) < Ye
                    ? Me
                    : p(Ye) < Ye
                      ? dn
                      : i(Ye) < Ye
                        ? s(Ye) < Ye
                          ? yn
                          : zn
                        : n(Ye) < Ye
                          ? Xn
                          : On
            )(Ye);
          }
          return (
            (Zt.invert = function (Ye) {
              return new Date(Kt(Ye));
            }),
            (Zt.domain = function (Ye) {
              return arguments.length ? re(Array.from(Ye, Yo)) : re().map(Xo);
            }),
            (Zt.ticks = function (Ye) {
              var Vn = re();
              return t(Vn[0], Vn[Vn.length - 1], Ye ?? 10);
            }),
            (Zt.tickFormat = function (Ye, Vn) {
              return Vn == null ? nr : pt(Vn);
            }),
            (Zt.nice = function (Ye) {
              var Vn = re();
              return (
                (!Ye || typeof Ye.range != "function") &&
                  (Ye = e(Vn[0], Vn[Vn.length - 1], Ye ?? 10)),
                Ye ? re(Pr(Vn, Ye)) : Zt
              );
            }),
            (Zt.copy = function () {
              return Yn(Zt, aa(t, e, n, i, s, p, T, B, ht, pt));
            }),
            Zt
          );
        }
        function Zo() {
          return Rt.C.apply(
            aa(pn, vn, Se, Qt, si, Zr, Yr, Dr, Le, Ra).domain([
              new Date(2e3, 0, 1),
              new Date(2e3, 0, 2),
            ]),
            arguments,
          );
        }
        function Jo() {
          return Rt.C.apply(
            aa(en, an, Ve, ie, de, li, _i, Nr, Le, Ba).domain([
              Date.UTC(2e3, 0, 1),
              Date.UTC(2e3, 0, 2),
            ]),
            arguments,
          );
        }
        function $i() {
          var t = 0,
            e = 1,
            n,
            i,
            s,
            p,
            T = jn,
            B = !1,
            ht;
          function pt(Kt) {
            return Kt == null || isNaN((Kt = +Kt))
              ? ht
              : T(
                  s === 0
                    ? 0.5
                    : ((Kt = (p(Kt) - n) * s),
                      B ? Math.max(0, Math.min(1, Kt)) : Kt),
                );
          }
          (pt.domain = function (Kt) {
            return arguments.length
              ? (([t, e] = Kt),
                (n = p((t = +t))),
                (i = p((e = +e))),
                (s = n === i ? 0 : 1 / (i - n)),
                pt)
              : [t, e];
          }),
            (pt.clamp = function (Kt) {
              return arguments.length ? ((B = !!Kt), pt) : B;
            }),
            (pt.interpolator = function (Kt) {
              return arguments.length ? ((T = Kt), pt) : T;
            });
          function Zt(Kt) {
            return function (re) {
              var ge, Te;
              return arguments.length
                ? (([ge, Te] = re), (T = Kt(ge, Te)), pt)
                : [T(0), T(1)];
            };
          }
          return (
            (pt.range = Zt(mn)),
            (pt.rangeRound = Zt(Sn)),
            (pt.unknown = function (Kt) {
              return arguments.length ? ((ht = Kt), pt) : ht;
            }),
            function (Kt) {
              return (
                (p = Kt),
                (n = Kt(t)),
                (i = Kt(e)),
                (s = n === i ? 0 : 1 / (i - n)),
                pt
              );
            }
          );
        }
        function ei(t, e) {
          return e
            .domain(t.domain())
            .interpolator(t.interpolator())
            .clamp(t.clamp())
            .unknown(t.unknown());
        }
        function Na() {
          var t = er($i()(jn));
          return (
            (t.copy = function () {
              return ei(t, Na());
            }),
            Rt.K.apply(t, arguments)
          );
        }
        function La() {
          var t = $r($i()).domain([1, 10]);
          return (
            (t.copy = function () {
              return ei(t, La()).base(t.base());
            }),
            Rt.K.apply(t, arguments)
          );
        }
        function Ua() {
          var t = Hr($i());
          return (
            (t.copy = function () {
              return ei(t, Ua()).constant(t.constant());
            }),
            Rt.K.apply(t, arguments)
          );
        }
        function oa() {
          var t = oi($i());
          return (
            (t.copy = function () {
              return ei(t, oa()).exponent(t.exponent());
            }),
            Rt.K.apply(t, arguments)
          );
        }
        function Qo() {
          return oa.apply(null, arguments).exponent(0.5);
        }
        function Wa() {
          var t = [],
            e = jn;
          function n(i) {
            if (i != null && !isNaN((i = +i)))
              return e((Tt(t, i, 1) - 1) / (t.length - 1));
          }
          return (
            (n.domain = function (i) {
              if (!arguments.length) return t.slice();
              t = [];
              for (let s of i) s != null && !isNaN((s = +s)) && t.push(s);
              return t.sort(at), n;
            }),
            (n.interpolator = function (i) {
              return arguments.length ? ((e = i), n) : e;
            }),
            (n.range = function () {
              return t.map((i, s) => e(s / (t.length - 1)));
            }),
            (n.quantiles = function (i) {
              return Array.from({ length: i + 1 }, (s, p) => qt(t, p / i));
            }),
            (n.copy = function () {
              return Wa(e).domain(t);
            }),
            Rt.K.apply(n, arguments)
          );
        }
        function qo(t, e) {
          e === void 0 && ((e = t), (t = mn));
          for (
            var n = 0, i = e.length - 1, s = e[0], p = new Array(i < 0 ? 0 : i);
            n < i;
          )
            p[n] = t(s, (s = e[++n]));
          return function (T) {
            var B = Math.max(0, Math.min(i - 1, Math.floor((T *= i))));
            return p[B](T - B);
          };
        }
        function Hi() {
          var t = 0,
            e = 0.5,
            n = 1,
            i = 1,
            s,
            p,
            T,
            B,
            ht,
            pt = jn,
            Zt,
            Kt = !1,
            re;
          function ge(Me) {
            return isNaN((Me = +Me))
              ? re
              : ((Me = 0.5 + ((Me = +Zt(Me)) - p) * (i * Me < i * p ? B : ht)),
                pt(Kt ? Math.max(0, Math.min(1, Me)) : Me));
          }
          (ge.domain = function (Me) {
            return arguments.length
              ? (([t, e, n] = Me),
                (s = Zt((t = +t))),
                (p = Zt((e = +e))),
                (T = Zt((n = +n))),
                (B = s === p ? 0 : 0.5 / (p - s)),
                (ht = p === T ? 0 : 0.5 / (T - p)),
                (i = p < s ? -1 : 1),
                ge)
              : [t, e, n];
          }),
            (ge.clamp = function (Me) {
              return arguments.length ? ((Kt = !!Me), ge) : Kt;
            }),
            (ge.interpolator = function (Me) {
              return arguments.length ? ((pt = Me), ge) : pt;
            });
          function Te(Me) {
            return function (dn) {
              var yn, zn, Xn;
              return arguments.length
                ? (([yn, zn, Xn] = dn), (pt = qo(Me, [yn, zn, Xn])), ge)
                : [pt(0), pt(0.5), pt(1)];
            };
          }
          return (
            (ge.range = Te(mn)),
            (ge.rangeRound = Te(Sn)),
            (ge.unknown = function (Me) {
              return arguments.length ? ((re = Me), ge) : re;
            }),
            function (Me) {
              return (
                (Zt = Me),
                (s = Me(t)),
                (p = Me(e)),
                (T = Me(n)),
                (B = s === p ? 0 : 0.5 / (p - s)),
                (ht = p === T ? 0 : 0.5 / (T - p)),
                (i = p < s ? -1 : 1),
                ge
              );
            }
          );
        }
        function ka() {
          var t = er(Hi()(jn));
          return (
            (t.copy = function () {
              return ei(t, ka());
            }),
            Rt.K.apply(t, arguments)
          );
        }
        function Ka() {
          var t = $r(Hi()).domain([0.1, 1, 10]);
          return (
            (t.copy = function () {
              return ei(t, Ka()).base(t.base());
            }),
            Rt.K.apply(t, arguments)
          );
        }
        function Fa() {
          var t = Hr(Hi());
          return (
            (t.copy = function () {
              return ei(t, Fa()).constant(t.constant());
            }),
            Rt.K.apply(t, arguments)
          );
        }
        function ua() {
          var t = oi(Hi());
          return (
            (t.copy = function () {
              return ei(t, ua()).exponent(t.exponent());
            }),
            Rt.K.apply(t, arguments)
          );
        }
        function tu() {
          return ua.apply(null, arguments).exponent(0.5);
        }
        function Ai(t, e) {
          if ((T = t.length) > 1)
            for (var n = 1, i, s, p = t[e[0]], T, B = p.length; n < T; ++n)
              for (s = p, p = t[e[n]], i = 0; i < B; ++i)
                p[i][1] += p[i][0] = isNaN(s[i][1]) ? s[i][0] : s[i][1];
        }
        function eu(t, e) {
          if ((i = t.length) > 0) {
            for (var n, i, s = 0, p = t[0].length, T; s < p; ++s) {
              for (T = n = 0; n < i; ++n) T += t[n][s][1] || 0;
              if (T) for (n = 0; n < i; ++n) t[n][s][1] /= T;
            }
            Ai(t, e);
          }
        }
        function nu(t, e) {
          if ((s = t.length) > 0) {
            for (var n = 0, i = t[e[0]], s, p = i.length; n < p; ++n) {
              for (var T = 0, B = 0; T < s; ++T) B += t[T][n][1] || 0;
              i[n][1] += i[n][0] = -B / 2;
            }
            Ai(t, e);
          }
        }
        function ru(t, e) {
          if (!(!((T = t.length) > 0) || !((p = (s = t[e[0]]).length) > 0))) {
            for (var n = 0, i = 1, s, p, T; i < p; ++i) {
              for (var B = 0, ht = 0, pt = 0; B < T; ++B) {
                for (
                  var Zt = t[e[B]],
                    Kt = Zt[i][1] || 0,
                    re = Zt[i - 1][1] || 0,
                    ge = (Kt - re) / 2,
                    Te = 0;
                  Te < B;
                  ++Te
                ) {
                  var Me = t[e[Te]],
                    dn = Me[i][1] || 0,
                    yn = Me[i - 1][1] || 0;
                  ge += dn - yn;
                }
                (ht += Kt), (pt += ge * Kt);
              }
              (s[i - 1][1] += s[i - 1][0] = n), ht && (n -= pt / ht);
            }
            (s[i - 1][1] += s[i - 1][0] = n), Ai(t, e);
          }
        }
        var iu = r(57949),
          Vi = r(94770);
        function la(t) {
          for (var e = t.length, n = new Array(e); --e >= 0; ) n[e] = e;
          return n;
        }
        function au(t, e) {
          return t[e];
        }
        function ou(t) {
          const e = [];
          return (e.key = t), e;
        }
        function uu() {
          var t = (0, Vi.A)([]),
            e = la,
            n = Ai,
            i = au;
          function s(p) {
            var T = Array.from(t.apply(this, arguments), ou),
              B,
              ht = T.length,
              pt = -1,
              Zt;
            for (const Kt of p)
              for (B = 0, ++pt; B < ht; ++B)
                (T[B][pt] = [0, +i(Kt, T[B].key, pt, p)]).data = Kt;
            for (B = 0, Zt = (0, iu.A)(e(T)); B < ht; ++B) T[Zt[B]].index = B;
            return n(T, Zt), T;
          }
          return (
            (s.keys = function (p) {
              return arguments.length
                ? ((t = typeof p == "function" ? p : (0, Vi.A)(Array.from(p))),
                  s)
                : t;
            }),
            (s.value = function (p) {
              return arguments.length
                ? ((i = typeof p == "function" ? p : (0, Vi.A)(+p)), s)
                : i;
            }),
            (s.order = function (p) {
              return arguments.length
                ? ((e =
                    p == null
                      ? la
                      : typeof p == "function"
                        ? p
                        : (0, Vi.A)(Array.from(p))),
                  s)
                : e;
            }),
            (s.offset = function (p) {
              return arguments.length ? ((n = p ?? Ai), s) : n;
            }),
            s
          );
        }
        var lu = r(82544),
          Gi = r.n(lu),
          su = r(6702),
          Xi = r.n(su),
          cu = r(64609),
          Ar = r.n(cu),
          fu = r(3316),
          Li = r.n(fu),
          du = r(77837),
          hu = r.n(du),
          pu = r(52686),
          za = r.n(pu),
          vu = r(21205),
          yu = r.n(vu),
          mu = r(27367),
          sa = r.n(mu),
          gu = r(4842),
          bu = r.n(gu),
          xu = r(58782),
          Ou = r.n(xu),
          Au = r(97825),
          Pu = r.n(Au),
          Eu = r(14469),
          Kn = r.n(Eu);
        function wu(t) {
          return Du(t) || Mu(t) || Tu(t) || Su();
        }
        function Su() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Tu(t, e) {
          if (t) {
            if (typeof t == "string") return ca(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            if (
              (n === "Object" && t.constructor && (n = t.constructor.name),
              n === "Map" || n === "Set")
            )
              return Array.from(t);
            if (
              n === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ca(t, e);
          }
        }
        function Mu(t) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function Du(t) {
          if (Array.isArray(t)) return ca(t);
        }
        function ca(t, e) {
          (e == null || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        var ju = function (e) {
            return e;
          },
          $a = { "@@functional/placeholder": !0 },
          Ha = function (e) {
            return e === $a;
          },
          Va = function (e) {
            return function n() {
              return arguments.length === 0 ||
                (arguments.length === 1 &&
                  Ha(arguments.length <= 0 ? void 0 : arguments[0]))
                ? n
                : e.apply(void 0, arguments);
            };
          },
          Cu = function t(e, n) {
            return e === 1
              ? n
              : Va(function () {
                  for (
                    var i = arguments.length, s = new Array(i), p = 0;
                    p < i;
                    p++
                  )
                    s[p] = arguments[p];
                  var T = s.filter(function (B) {
                    return B !== $a;
                  }).length;
                  return T >= e
                    ? n.apply(void 0, s)
                    : t(
                        e - T,
                        Va(function () {
                          for (
                            var B = arguments.length, ht = new Array(B), pt = 0;
                            pt < B;
                            pt++
                          )
                            ht[pt] = arguments[pt];
                          var Zt = s.map(function (Kt) {
                            return Ha(Kt) ? ht.shift() : Kt;
                          });
                          return n.apply(void 0, wu(Zt).concat(ht));
                        }),
                      );
                });
          },
          Yi = function (e) {
            return Cu(e.length, e);
          },
          Zi = function (e, n) {
            for (var i = [], s = e; s < n; ++s) i[s - e] = s;
            return i;
          },
          Ga = Yi(function (t, e) {
            return Array.isArray(e)
              ? e.map(t)
              : Object.keys(e)
                  .map(function (n) {
                    return e[n];
                  })
                  .map(t);
          }),
          Xa = function () {
            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
              n[i] = arguments[i];
            if (!n.length) return ju;
            var s = n.reverse(),
              p = s[0],
              T = s.slice(1);
            return function () {
              return T.reduce(
                function (B, ht) {
                  return ht(B);
                },
                p.apply(void 0, arguments),
              );
            };
          },
          Ji = function (e) {
            return Array.isArray(e)
              ? e.reverse()
              : e.split("").reverse.join("");
          },
          fa = function (e) {
            var n = null,
              i = null;
            return function () {
              for (
                var s = arguments.length, p = new Array(s), T = 0;
                T < s;
                T++
              )
                p[T] = arguments[T];
              return (
                (n &&
                  p.every(function (B, ht) {
                    return B === n[ht];
                  })) ||
                  ((n = p), (i = e.apply(void 0, p))),
                i
              );
            };
          };
        function Iu(t) {
          var e;
          return (
            t === 0
              ? (e = 1)
              : (e = Math.floor(new (Kn())(t).abs().log(10).toNumber()) + 1),
            e
          );
        }
        function _u(t, e, n) {
          for (var i = new (Kn())(t), s = 0, p = []; i.lt(e) && s < 1e5; )
            p.push(i.toNumber()), (i = i.add(n)), s++;
          return p;
        }
        var Ru = Yi(function (t, e, n) {
            var i = +t,
              s = +e;
            return i + n * (s - i);
          }),
          Bu = Yi(function (t, e, n) {
            var i = e - +t;
            return (i = i || 1 / 0), (n - t) / i;
          }),
          Nu = Yi(function (t, e, n) {
            var i = e - +t;
            return (i = i || 1 / 0), Math.max(0, Math.min(1, (n - t) / i));
          });
        const Qi = {
          rangeStep: _u,
          getDigitCount: Iu,
          interpolateNumber: Ru,
          uninterpolateNumber: Bu,
          uninterpolateTruncation: Nu,
        };
        function da(t) {
          return Wu(t) || Uu(t) || Ya(t) || Lu();
        }
        function Lu() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Uu(t) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function Wu(t) {
          if (Array.isArray(t)) return ha(t);
        }
        function hi(t, e) {
          return Fu(t) || Ku(t, e) || Ya(t, e) || ku();
        }
        function ku() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Ya(t, e) {
          if (t) {
            if (typeof t == "string") return ha(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            if (
              (n === "Object" && t.constructor && (n = t.constructor.name),
              n === "Map" || n === "Set")
            )
              return Array.from(t);
            if (
              n === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ha(t, e);
          }
        }
        function ha(t, e) {
          (e == null || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        function Ku(t, e) {
          if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(t)))) {
            var n = [],
              i = !0,
              s = !1,
              p = void 0;
            try {
              for (
                var T = t[Symbol.iterator](), B;
                !(i = (B = T.next()).done) &&
                (n.push(B.value), !(e && n.length === e));
                i = !0
              );
            } catch (ht) {
              (s = !0), (p = ht);
            } finally {
              try {
                !i && T.return != null && T.return();
              } finally {
                if (s) throw p;
              }
            }
            return n;
          }
        }
        function Fu(t) {
          if (Array.isArray(t)) return t;
        }
        function pa(t) {
          var e = hi(t, 2),
            n = e[0],
            i = e[1],
            s = n,
            p = i;
          return n > i && ((s = i), (p = n)), [s, p];
        }
        function va(t, e, n) {
          if (t.lte(0)) return new (Kn())(0);
          var i = Qi.getDigitCount(t.toNumber()),
            s = new (Kn())(10).pow(i),
            p = t.div(s),
            T = i !== 1 ? 0.05 : 0.1,
            B = new (Kn())(Math.ceil(p.div(T).toNumber())).add(n).mul(T),
            ht = B.mul(s);
          return e ? ht : new (Kn())(Math.ceil(ht));
        }
        function Za(t, e, n) {
          var i = 1,
            s = new (Kn())(t);
          if (!s.isint() && n) {
            var p = Math.abs(t);
            p < 1
              ? ((i = new (Kn())(10).pow(Qi.getDigitCount(t) - 1)),
                (s = new (Kn())(Math.floor(s.div(i).toNumber())).mul(i)))
              : p > 1 && (s = new (Kn())(Math.floor(t)));
          } else
            t === 0
              ? (s = new (Kn())(Math.floor((e - 1) / 2)))
              : n || (s = new (Kn())(Math.floor(t)));
          var T = Math.floor((e - 1) / 2),
            B = Xa(
              Ga(function (ht) {
                return s.add(new (Kn())(ht - T).mul(i)).toNumber();
              }),
              Zi,
            );
          return B(0, e);
        }
        function Ja(t, e, n, i) {
          var s =
            arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
          if (!Number.isFinite((e - t) / (n - 1)))
            return {
              step: new (Kn())(0),
              tickMin: new (Kn())(0),
              tickMax: new (Kn())(0),
            };
          var p = va(new (Kn())(e).sub(t).div(n - 1), i, s),
            T;
          t <= 0 && e >= 0
            ? (T = new (Kn())(0))
            : ((T = new (Kn())(t).add(e).div(2)),
              (T = T.sub(new (Kn())(T).mod(p))));
          var B = Math.ceil(T.sub(t).div(p).toNumber()),
            ht = Math.ceil(new (Kn())(e).sub(T).div(p).toNumber()),
            pt = B + ht + 1;
          return pt > n
            ? Ja(t, e, n, i, s + 1)
            : (pt < n &&
                ((ht = e > 0 ? ht + (n - pt) : ht),
                (B = e > 0 ? B : B + (n - pt))),
              {
                step: p,
                tickMin: T.sub(new (Kn())(B).mul(p)),
                tickMax: T.add(new (Kn())(ht).mul(p)),
              });
        }
        function zu(t) {
          var e = hi(t, 2),
            n = e[0],
            i = e[1],
            s =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 6,
            p =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0,
            T = Math.max(s, 2),
            B = pa([n, i]),
            ht = hi(B, 2),
            pt = ht[0],
            Zt = ht[1];
          if (pt === -1 / 0 || Zt === 1 / 0) {
            var Kt =
              Zt === 1 / 0
                ? [pt].concat(
                    da(
                      Zi(0, s - 1).map(function () {
                        return 1 / 0;
                      }),
                    ),
                  )
                : [].concat(
                    da(
                      Zi(0, s - 1).map(function () {
                        return -1 / 0;
                      }),
                    ),
                    [Zt],
                  );
            return n > i ? Ji(Kt) : Kt;
          }
          if (pt === Zt) return Za(pt, s, p);
          var re = Ja(pt, Zt, T, p),
            ge = re.step,
            Te = re.tickMin,
            Me = re.tickMax,
            dn = Qi.rangeStep(Te, Me.add(new (Kn())(0.1).mul(ge)), ge);
          return n > i ? Ji(dn) : dn;
        }
        function $u(t) {
          var e = hi(t, 2),
            n = e[0],
            i = e[1],
            s =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 6,
            p =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0,
            T = Math.max(s, 2),
            B = pa([n, i]),
            ht = hi(B, 2),
            pt = ht[0],
            Zt = ht[1];
          if (pt === -1 / 0 || Zt === 1 / 0) return [n, i];
          if (pt === Zt) return Za(pt, s, p);
          var Kt = va(new (Kn())(Zt).sub(pt).div(T - 1), p, 0),
            re = Xa(
              Ga(function (Te) {
                return new (Kn())(pt).add(new (Kn())(Te).mul(Kt)).toNumber();
              }),
              Zi,
            ),
            ge = re(0, T).filter(function (Te) {
              return Te >= pt && Te <= Zt;
            });
          return n > i ? Ji(ge) : ge;
        }
        function Hu(t, e) {
          var n = hi(t, 2),
            i = n[0],
            s = n[1],
            p =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0,
            T = pa([i, s]),
            B = hi(T, 2),
            ht = B[0],
            pt = B[1];
          if (ht === -1 / 0 || pt === 1 / 0) return [i, s];
          if (ht === pt) return [ht];
          var Zt = Math.max(e, 2),
            Kt = va(new (Kn())(pt).sub(ht).div(Zt - 1), p, 0),
            re = [].concat(
              da(
                Qi.rangeStep(
                  new (Kn())(ht),
                  new (Kn())(pt).sub(new (Kn())(0.99).mul(Kt)),
                  Kt,
                ),
              ),
              [pt],
            );
          return i > s ? Ji(re) : re;
        }
        var Vu = fa(zu),
          Kl = fa($u),
          Gu = fa(Hu),
          Xu = r(10800),
          qn = r(96714),
          ya = r(93563),
          Yu = r(11766);
        function Ui(t) {
          "@babel/helpers - typeof";
          return (
            (Ui =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      typeof Symbol == "function" &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            Ui(t)
          );
        }
        function Qa(t) {
          return qu(t) || Qu(t) || Ju(t) || Zu();
        }
        function Zu() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Ju(t, e) {
          if (t) {
            if (typeof t == "string") return ma(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            if (
              (n === "Object" && t.constructor && (n = t.constructor.name),
              n === "Map" || n === "Set")
            )
              return Array.from(t);
            if (
              n === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ma(t, e);
          }
        }
        function Qu(t) {
          if (
            (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
            t["@@iterator"] != null
          )
            return Array.from(t);
        }
        function qu(t) {
          if (Array.isArray(t)) return ma(t);
        }
        function ma(t, e) {
          (e == null || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        function qa(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
              (i = i.filter(function (s) {
                return Object.getOwnPropertyDescriptor(t, s).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function rr(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e] != null ? arguments[e] : {};
            e % 2
              ? qa(Object(n), !0).forEach(function (i) {
                  Pi(t, i, n[i]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : qa(Object(n)).forEach(function (i) {
                    Object.defineProperty(
                      t,
                      i,
                      Object.getOwnPropertyDescriptor(n, i),
                    );
                  });
          }
          return t;
        }
        function Pi(t, e, n) {
          return (
            (e = tl(e)),
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function tl(t) {
          var e = el(t, "string");
          return Ui(e) == "symbol" ? e : e + "";
        }
        function el(t, e) {
          if (Ui(t) != "object" || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (n !== void 0) {
            var i = n.call(t, e || "default");
            if (Ui(i) != "object") return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (e === "string" ? String : Number)(t);
        }
        function ni(t, e, n) {
          return Ar()(t) || Ar()(e)
            ? n
            : (0, qn.vh)(e)
              ? za()(t, e, n)
              : Li()(e)
                ? e(t)
                : n;
        }
        function ga(t, e, n, i) {
          var s = yu()(t, function (B) {
            return ni(B, e);
          });
          if (n === "number") {
            var p = s.filter(function (B) {
              return (0, qn.Et)(B) || parseFloat(B);
            });
            return p.length ? [Xi()(p), Gi()(p)] : [1 / 0, -1 / 0];
          }
          var T = i
            ? s.filter(function (B) {
                return !Ar()(B);
              })
            : s;
          return T.map(function (B) {
            return (0, qn.vh)(B) || B instanceof Date ? B : "";
          });
        }
        var nl = function (e) {
            var n,
              i =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : [],
              s = arguments.length > 2 ? arguments[2] : void 0,
              p = arguments.length > 3 ? arguments[3] : void 0,
              T = -1,
              B = (n = i?.length) !== null && n !== void 0 ? n : 0;
            if (B <= 1) return 0;
            if (
              p &&
              p.axisType === "angleAxis" &&
              Math.abs(Math.abs(p.range[1] - p.range[0]) - 360) <= 1e-6
            )
              for (var ht = p.range, pt = 0; pt < B; pt++) {
                var Zt = pt > 0 ? s[pt - 1].coordinate : s[B - 1].coordinate,
                  Kt = s[pt].coordinate,
                  re = pt >= B - 1 ? s[0].coordinate : s[pt + 1].coordinate,
                  ge = void 0;
                if ((0, qn.sA)(Kt - Zt) !== (0, qn.sA)(re - Kt)) {
                  var Te = [];
                  if ((0, qn.sA)(re - Kt) === (0, qn.sA)(ht[1] - ht[0])) {
                    ge = re;
                    var Me = Kt + ht[1] - ht[0];
                    (Te[0] = Math.min(Me, (Me + Zt) / 2)),
                      (Te[1] = Math.max(Me, (Me + Zt) / 2));
                  } else {
                    ge = Zt;
                    var dn = re + ht[1] - ht[0];
                    (Te[0] = Math.min(Kt, (dn + Kt) / 2)),
                      (Te[1] = Math.max(Kt, (dn + Kt) / 2));
                  }
                  var yn = [
                    Math.min(Kt, (ge + Kt) / 2),
                    Math.max(Kt, (ge + Kt) / 2),
                  ];
                  if ((e > yn[0] && e <= yn[1]) || (e >= Te[0] && e <= Te[1])) {
                    T = s[pt].index;
                    break;
                  }
                } else {
                  var zn = Math.min(Zt, re),
                    Xn = Math.max(Zt, re);
                  if (e > (zn + Kt) / 2 && e <= (Xn + Kt) / 2) {
                    T = s[pt].index;
                    break;
                  }
                }
              }
            else
              for (var On = 0; On < B; On++)
                if (
                  (On === 0 &&
                    e <= (i[On].coordinate + i[On + 1].coordinate) / 2) ||
                  (On > 0 &&
                    On < B - 1 &&
                    e > (i[On].coordinate + i[On - 1].coordinate) / 2 &&
                    e <= (i[On].coordinate + i[On + 1].coordinate) / 2) ||
                  (On === B - 1 &&
                    e > (i[On].coordinate + i[On - 1].coordinate) / 2)
                ) {
                  T = i[On].index;
                  break;
                }
            return T;
          },
          to = function (e) {
            var n,
              i = e,
              s = i.type.displayName,
              p =
                (n = e.type) !== null && n !== void 0 && n.defaultProps
                  ? rr(rr({}, e.type.defaultProps), e.props)
                  : e.props,
              T = p.stroke,
              B = p.fill,
              ht;
            switch (s) {
              case "Line":
                ht = T;
                break;
              case "Area":
              case "Radar":
                ht = T && T !== "none" ? T : B;
                break;
              default:
                ht = B;
                break;
            }
            return ht;
          },
          rl = function (e) {
            var n = e.barSize,
              i = e.totalSize,
              s = e.stackGroups,
              p = s === void 0 ? {} : s;
            if (!p) return {};
            for (
              var T = {}, B = Object.keys(p), ht = 0, pt = B.length;
              ht < pt;
              ht++
            )
              for (
                var Zt = p[B[ht]].stackGroups,
                  Kt = Object.keys(Zt),
                  re = 0,
                  ge = Kt.length;
                re < ge;
                re++
              ) {
                var Te = Zt[Kt[re]],
                  Me = Te.items,
                  dn = Te.cateAxisId,
                  yn = Me.filter(function (Vn) {
                    return (0, ya.Mn)(Vn.type).indexOf("Bar") >= 0;
                  });
                if (yn && yn.length) {
                  var zn = yn[0].type.defaultProps,
                    Xn =
                      zn !== void 0 ? rr(rr({}, zn), yn[0].props) : yn[0].props,
                    On = Xn.barSize,
                    nr = Xn[dn];
                  T[nr] || (T[nr] = []);
                  var Ye = Ar()(On) ? n : On;
                  T[nr].push({
                    item: yn[0],
                    stackList: yn.slice(1),
                    barSize: Ar()(Ye) ? void 0 : (0, qn.F4)(Ye, i, 0),
                  });
                }
              }
            return T;
          },
          il = function (e) {
            var n = e.barGap,
              i = e.barCategoryGap,
              s = e.bandSize,
              p = e.sizeList,
              T = p === void 0 ? [] : p,
              B = e.maxBarSize,
              ht = T.length;
            if (ht < 1) return null;
            var pt = (0, qn.F4)(n, s, 0, !0),
              Zt,
              Kt = [];
            if (T[0].barSize === +T[0].barSize) {
              var re = !1,
                ge = s / ht,
                Te = T.reduce(function (On, nr) {
                  return On + nr.barSize || 0;
                }, 0);
              (Te += (ht - 1) * pt),
                Te >= s && ((Te -= (ht - 1) * pt), (pt = 0)),
                Te >= s && ge > 0 && ((re = !0), (ge *= 0.9), (Te = ht * ge));
              var Me = ((s - Te) / 2) >> 0,
                dn = { offset: Me - pt, size: 0 };
              Zt = T.reduce(function (On, nr) {
                var Ye = {
                    item: nr.item,
                    position: {
                      offset: dn.offset + dn.size + pt,
                      size: re ? ge : nr.barSize,
                    },
                  },
                  Vn = [].concat(Qa(On), [Ye]);
                return (
                  (dn = Vn[Vn.length - 1].position),
                  nr.stackList &&
                    nr.stackList.length &&
                    nr.stackList.forEach(function (Ir) {
                      Vn.push({ item: Ir, position: dn });
                    }),
                  Vn
                );
              }, Kt);
            } else {
              var yn = (0, qn.F4)(i, s, 0, !0);
              s - 2 * yn - (ht - 1) * pt <= 0 && (pt = 0);
              var zn = (s - 2 * yn - (ht - 1) * pt) / ht;
              zn > 1 && (zn >>= 0);
              var Xn = B === +B ? Math.min(zn, B) : zn;
              Zt = T.reduce(function (On, nr, Ye) {
                var Vn = [].concat(Qa(On), [
                  {
                    item: nr.item,
                    position: {
                      offset: yn + (zn + pt) * Ye + (zn - Xn) / 2,
                      size: Xn,
                    },
                  },
                ]);
                return (
                  nr.stackList &&
                    nr.stackList.length &&
                    nr.stackList.forEach(function (Ir) {
                      Vn.push({
                        item: Ir,
                        position: Vn[Vn.length - 1].position,
                      });
                    }),
                  Vn
                );
              }, Kt);
            }
            return Zt;
          },
          al = function (e, n, i, s) {
            var p = i.children,
              T = i.width,
              B = i.margin,
              ht = T - (B.left || 0) - (B.right || 0),
              pt = (0, Yu.g)({ children: p, legendWidth: ht });
            if (pt) {
              var Zt = s || {},
                Kt = Zt.width,
                re = Zt.height,
                ge = pt.align,
                Te = pt.verticalAlign,
                Me = pt.layout;
              if (
                (Me === "vertical" ||
                  (Me === "horizontal" && Te === "middle")) &&
                ge !== "center" &&
                (0, qn.Et)(e[ge])
              )
                return rr(rr({}, e), {}, Pi({}, ge, e[ge] + (Kt || 0)));
              if (
                (Me === "horizontal" ||
                  (Me === "vertical" && ge === "center")) &&
                Te !== "middle" &&
                (0, qn.Et)(e[Te])
              )
                return rr(rr({}, e), {}, Pi({}, Te, e[Te] + (re || 0)));
            }
            return e;
          },
          ol = function (e, n, i) {
            return Ar()(n)
              ? !0
              : e === "horizontal"
                ? n === "yAxis"
                : e === "vertical" || i === "x"
                  ? n === "xAxis"
                  : i === "y"
                    ? n === "yAxis"
                    : !0;
          },
          eo = function (e, n, i, s, p) {
            var T = n.props.children,
              B = (0, ya.aS)(T, Xu.u).filter(function (pt) {
                return ol(s, p, pt.props.direction);
              });
            if (B && B.length) {
              var ht = B.map(function (pt) {
                return pt.props.dataKey;
              });
              return e.reduce(
                function (pt, Zt) {
                  var Kt = ni(Zt, i);
                  if (Ar()(Kt)) return pt;
                  var re = Array.isArray(Kt) ? [Xi()(Kt), Gi()(Kt)] : [Kt, Kt],
                    ge = ht.reduce(
                      function (Te, Me) {
                        var dn = ni(Zt, Me, 0),
                          yn = re[0] - Math.abs(Array.isArray(dn) ? dn[0] : dn),
                          zn = re[1] + Math.abs(Array.isArray(dn) ? dn[1] : dn);
                        return [Math.min(yn, Te[0]), Math.max(zn, Te[1])];
                      },
                      [1 / 0, -1 / 0],
                    );
                  return [Math.min(ge[0], pt[0]), Math.max(ge[1], pt[1])];
                },
                [1 / 0, -1 / 0],
              );
            }
            return null;
          },
          ul = function (e, n, i, s, p) {
            var T = n
              .map(function (B) {
                return eo(e, B, i, p, s);
              })
              .filter(function (B) {
                return !Ar()(B);
              });
            return T && T.length
              ? T.reduce(
                  function (B, ht) {
                    return [Math.min(B[0], ht[0]), Math.max(B[1], ht[1])];
                  },
                  [1 / 0, -1 / 0],
                )
              : null;
          },
          ll = function (e, n, i, s, p) {
            var T = n.map(function (ht) {
              var pt = ht.props.dataKey;
              return (
                (i === "number" && pt && eo(e, ht, pt, s)) || ga(e, pt, i, p)
              );
            });
            if (i === "number")
              return T.reduce(
                function (ht, pt) {
                  return [Math.min(ht[0], pt[0]), Math.max(ht[1], pt[1])];
                },
                [1 / 0, -1 / 0],
              );
            var B = {};
            return T.reduce(function (ht, pt) {
              for (var Zt = 0, Kt = pt.length; Zt < Kt; Zt++)
                B[pt[Zt]] || ((B[pt[Zt]] = !0), ht.push(pt[Zt]));
              return ht;
            }, []);
          },
          sl = function (e, n) {
            return (
              (e === "horizontal" && n === "xAxis") ||
              (e === "vertical" && n === "yAxis") ||
              (e === "centric" && n === "angleAxis") ||
              (e === "radial" && n === "radiusAxis")
            );
          },
          cl = function (e, n, i, s) {
            if (s)
              return e.map(function (ht) {
                return ht.coordinate;
              });
            var p,
              T,
              B = e.map(function (ht) {
                return (
                  ht.coordinate === n && (p = !0),
                  ht.coordinate === i && (T = !0),
                  ht.coordinate
                );
              });
            return p || B.push(n), T || B.push(i), B;
          },
          fl = function (e, n, i) {
            if (!e) return null;
            var s = e.scale,
              p = e.duplicateDomain,
              T = e.type,
              B = e.range,
              ht = e.realScaleType === "scaleBand" ? s.bandwidth() / 2 : 2,
              pt =
                (n || i) && T === "category" && s.bandwidth
                  ? s.bandwidth() / ht
                  : 0;
            if (
              ((pt =
                e.axisType === "angleAxis" && B?.length >= 2
                  ? (0, qn.sA)(B[0] - B[1]) * 2 * pt
                  : pt),
              n && (e.ticks || e.niceTicks))
            ) {
              var Zt = (e.ticks || e.niceTicks).map(function (Kt) {
                var re = p ? p.indexOf(Kt) : Kt;
                return { coordinate: s(re) + pt, value: Kt, offset: pt };
              });
              return Zt.filter(function (Kt) {
                return !sa()(Kt.coordinate);
              });
            }
            return e.isCategorical && e.categoricalDomain
              ? e.categoricalDomain.map(function (Kt, re) {
                  return {
                    coordinate: s(Kt) + pt,
                    value: Kt,
                    index: re,
                    offset: pt,
                  };
                })
              : s.ticks && !i
                ? s.ticks(e.tickCount).map(function (Kt) {
                    return { coordinate: s(Kt) + pt, value: Kt, offset: pt };
                  })
                : s.domain().map(function (Kt, re) {
                    return {
                      coordinate: s(Kt) + pt,
                      value: p ? p[Kt] : Kt,
                      index: re,
                      offset: pt,
                    };
                  });
          },
          ba = new WeakMap(),
          dl = function (e, n) {
            if (typeof n != "function") return e;
            ba.has(e) || ba.set(e, new WeakMap());
            var i = ba.get(e);
            if (i.has(n)) return i.get(n);
            var s = function () {
              e.apply(void 0, arguments), n.apply(void 0, arguments);
            };
            return i.set(n, s), s;
          },
          hl = function (e, n, i) {
            var s = e.scale,
              p = e.type,
              T = e.layout,
              B = e.axisType;
            if (s === "auto")
              return T === "radial" && B === "radiusAxis"
                ? { scale: F.A(), realScaleType: "band" }
                : T === "radial" && B === "angleAxis"
                  ? { scale: fr(), realScaleType: "linear" }
                  : p === "category" &&
                      n &&
                      (n.indexOf("LineChart") >= 0 ||
                        n.indexOf("AreaChart") >= 0 ||
                        (n.indexOf("ComposedChart") >= 0 && !i))
                    ? { scale: F.z(), realScaleType: "point" }
                    : p === "category"
                      ? { scale: F.A(), realScaleType: "band" }
                      : { scale: fr(), realScaleType: "linear" };
            if (hu()(s)) {
              var ht = "scale".concat(bu()(s));
              return {
                scale: (l[ht] || F.z)(),
                realScaleType: l[ht] ? ht : "point",
              };
            }
            return Li()(s)
              ? { scale: s }
              : { scale: F.z(), realScaleType: "point" };
          },
          no = 1e-4,
          pl = function (e) {
            var n = e.domain();
            if (!(!n || n.length <= 2)) {
              var i = n.length,
                s = e.range(),
                p = Math.min(s[0], s[1]) - no,
                T = Math.max(s[0], s[1]) + no,
                B = e(n[0]),
                ht = e(n[i - 1]);
              (B < p || B > T || ht < p || ht > T) &&
                e.domain([n[0], n[i - 1]]);
            }
          },
          vl = function (e, n) {
            if (!e) return null;
            for (var i = 0, s = e.length; i < s; i++)
              if (e[i].item === n) return e[i].position;
            return null;
          },
          yl = function (e, n) {
            if (!n || n.length !== 2 || !(0, qn.Et)(n[0]) || !(0, qn.Et)(n[1]))
              return e;
            var i = Math.min(n[0], n[1]),
              s = Math.max(n[0], n[1]),
              p = [e[0], e[1]];
            return (
              (!(0, qn.Et)(e[0]) || e[0] < i) && (p[0] = i),
              (!(0, qn.Et)(e[1]) || e[1] > s) && (p[1] = s),
              p[0] > s && (p[0] = s),
              p[1] < i && (p[1] = i),
              p
            );
          },
          ml = function (e) {
            var n = e.length;
            if (!(n <= 0))
              for (var i = 0, s = e[0].length; i < s; ++i)
                for (var p = 0, T = 0, B = 0; B < n; ++B) {
                  var ht = sa()(e[B][i][1]) ? e[B][i][0] : e[B][i][1];
                  ht >= 0
                    ? ((e[B][i][0] = p),
                      (e[B][i][1] = p + ht),
                      (p = e[B][i][1]))
                    : ((e[B][i][0] = T),
                      (e[B][i][1] = T + ht),
                      (T = e[B][i][1]));
                }
          },
          gl = function (e) {
            var n = e.length;
            if (!(n <= 0))
              for (var i = 0, s = e[0].length; i < s; ++i)
                for (var p = 0, T = 0; T < n; ++T) {
                  var B = sa()(e[T][i][1]) ? e[T][i][0] : e[T][i][1];
                  B >= 0
                    ? ((e[T][i][0] = p), (e[T][i][1] = p + B), (p = e[T][i][1]))
                    : ((e[T][i][0] = 0), (e[T][i][1] = 0));
                }
          },
          bl = {
            sign: ml,
            expand: eu,
            none: Ai,
            silhouette: nu,
            wiggle: ru,
            positive: gl,
          },
          xl = function (e, n, i) {
            var s = n.map(function (B) {
                return B.props.dataKey;
              }),
              p = bl[i],
              T = uu()
                .keys(s)
                .value(function (B, ht) {
                  return +ni(B, ht, 0);
                })
                .order(la)
                .offset(p);
            return T(e);
          },
          Ol = function (e, n, i, s, p, T) {
            if (!e) return null;
            var B = T ? n.reverse() : n,
              ht = {},
              pt = B.reduce(function (Kt, re) {
                var ge,
                  Te =
                    (ge = re.type) !== null && ge !== void 0 && ge.defaultProps
                      ? rr(rr({}, re.type.defaultProps), re.props)
                      : re.props,
                  Me = Te.stackId,
                  dn = Te.hide;
                if (dn) return Kt;
                var yn = Te[i],
                  zn = Kt[yn] || { hasStack: !1, stackGroups: {} };
                if ((0, qn.vh)(Me)) {
                  var Xn = zn.stackGroups[Me] || {
                    numericAxisId: i,
                    cateAxisId: s,
                    items: [],
                  };
                  Xn.items.push(re),
                    (zn.hasStack = !0),
                    (zn.stackGroups[Me] = Xn);
                } else
                  zn.stackGroups[(0, qn.NF)("_stackId_")] = {
                    numericAxisId: i,
                    cateAxisId: s,
                    items: [re],
                  };
                return rr(rr({}, Kt), {}, Pi({}, yn, zn));
              }, ht),
              Zt = {};
            return Object.keys(pt).reduce(function (Kt, re) {
              var ge = pt[re];
              if (ge.hasStack) {
                var Te = {};
                ge.stackGroups = Object.keys(ge.stackGroups).reduce(function (
                  Me,
                  dn,
                ) {
                  var yn = ge.stackGroups[dn];
                  return rr(
                    rr({}, Me),
                    {},
                    Pi({}, dn, {
                      numericAxisId: i,
                      cateAxisId: s,
                      items: yn.items,
                      stackedData: xl(e, yn.items, p),
                    }),
                  );
                }, Te);
              }
              return rr(rr({}, Kt), {}, Pi({}, re, ge));
            }, Zt);
          },
          Al = function (e, n) {
            var i = n.realScaleType,
              s = n.type,
              p = n.tickCount,
              T = n.originalDomain,
              B = n.allowDecimals,
              ht = i || n.scale;
            if (ht !== "auto" && ht !== "linear") return null;
            if (
              p &&
              s === "number" &&
              T &&
              (T[0] === "auto" || T[1] === "auto")
            ) {
              var pt = e.domain();
              if (!pt.length) return null;
              var Zt = Vu(pt, p, B);
              return e.domain([Xi()(Zt), Gi()(Zt)]), { niceTicks: Zt };
            }
            if (p && s === "number") {
              var Kt = e.domain(),
                re = Gu(Kt, p, B);
              return { niceTicks: re };
            }
            return null;
          };
        function Pl(t) {
          var e = t.axis,
            n = t.ticks,
            i = t.bandSize,
            s = t.entry,
            p = t.index,
            T = t.dataKey;
          if (e.type === "category") {
            if (
              !e.allowDuplicatedCategory &&
              e.dataKey &&
              !Ar()(s[e.dataKey])
            ) {
              var B = (0, qn.eP)(n, "value", s[e.dataKey]);
              if (B) return B.coordinate + i / 2;
            }
            return n[p] ? n[p].coordinate + i / 2 : null;
          }
          var ht = ni(s, Ar()(T) ? e.dataKey : T);
          return Ar()(ht) ? null : e.scale(ht);
        }
        var El = function (e) {
            var n = e.axis,
              i = e.ticks,
              s = e.offset,
              p = e.bandSize,
              T = e.entry,
              B = e.index;
            if (n.type === "category") return i[B] ? i[B].coordinate + s : null;
            var ht = ni(T, n.dataKey, n.domain[B]);
            return Ar()(ht) ? null : n.scale(ht) - p / 2 + s;
          },
          wl = function (e) {
            var n = e.numericAxis,
              i = n.scale.domain();
            if (n.type === "number") {
              var s = Math.min(i[0], i[1]),
                p = Math.max(i[0], i[1]);
              return s <= 0 && p >= 0 ? 0 : p < 0 ? p : s;
            }
            return i[0];
          },
          Sl = function (e, n) {
            var i,
              s =
                (i = e.type) !== null && i !== void 0 && i.defaultProps
                  ? rr(rr({}, e.type.defaultProps), e.props)
                  : e.props,
              p = s.stackId;
            if ((0, qn.vh)(p)) {
              var T = n[p];
              if (T) {
                var B = T.items.indexOf(e);
                return B >= 0 ? T.stackedData[B] : null;
              }
            }
            return null;
          },
          Tl = function (e) {
            return e.reduce(
              function (n, i) {
                return [
                  Xi()(i.concat([n[0]]).filter(qn.Et)),
                  Gi()(i.concat([n[1]]).filter(qn.Et)),
                ];
              },
              [1 / 0, -1 / 0],
            );
          },
          Ml = function (e, n, i) {
            return Object.keys(e)
              .reduce(
                function (s, p) {
                  var T = e[p],
                    B = T.stackedData,
                    ht = B.reduce(
                      function (pt, Zt) {
                        var Kt = Tl(Zt.slice(n, i + 1));
                        return [Math.min(pt[0], Kt[0]), Math.max(pt[1], Kt[1])];
                      },
                      [1 / 0, -1 / 0],
                    );
                  return [Math.min(ht[0], s[0]), Math.max(ht[1], s[1])];
                },
                [1 / 0, -1 / 0],
              )
              .map(function (s) {
                return s === 1 / 0 || s === -1 / 0 ? 0 : s;
              });
          },
          ro = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
          io = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
          Dl = function (e, n, i) {
            if (Li()(e)) return e(n, i);
            if (!Array.isArray(e)) return n;
            var s = [];
            if ((0, qn.Et)(e[0])) s[0] = i ? e[0] : Math.min(e[0], n[0]);
            else if (ro.test(e[0])) {
              var p = +ro.exec(e[0])[1];
              s[0] = n[0] - p;
            } else Li()(e[0]) ? (s[0] = e[0](n[0])) : (s[0] = n[0]);
            if ((0, qn.Et)(e[1])) s[1] = i ? e[1] : Math.max(e[1], n[1]);
            else if (io.test(e[1])) {
              var T = +io.exec(e[1])[1];
              s[1] = n[1] + T;
            } else Li()(e[1]) ? (s[1] = e[1](n[1])) : (s[1] = n[1]);
            return s;
          },
          jl = function (e, n, i) {
            if (e && e.scale && e.scale.bandwidth) {
              var s = e.scale.bandwidth();
              if (!i || s > 0) return s;
            }
            if (e && n && n.length >= 2) {
              for (
                var p = Pu()(n, function (Kt) {
                    return Kt.coordinate;
                  }),
                  T = 1 / 0,
                  B = 1,
                  ht = p.length;
                B < ht;
                B++
              ) {
                var pt = p[B],
                  Zt = p[B - 1];
                T = Math.min((pt.coordinate || 0) - (Zt.coordinate || 0), T);
              }
              return T === 1 / 0 ? 0 : T;
            }
            return i ? void 0 : 0;
          },
          Cl = function (e, n, i) {
            return !e ||
              !e.length ||
              Ou()(e, za()(i, "type.defaultProps.domain"))
              ? n
              : e;
          },
          Il = function (e, n) {
            var i = e.type.defaultProps
                ? rr(rr({}, e.type.defaultProps), e.props)
                : e.props,
              s = i.dataKey,
              p = i.name,
              T = i.unit,
              B = i.formatter,
              ht = i.tooltipType,
              pt = i.chartType,
              Zt = i.hide;
            return rr(
              rr({}, (0, ya.J9)(e, !1)),
              {},
              {
                dataKey: s,
                unit: T,
                formatter: B,
                name: p || s,
                color: to(e),
                value: ni(n, s),
                type: ht,
                payload: n,
                chartType: pt,
                hide: Zt,
              },
            );
          };
      },
      15654: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { A3: () => S, Pu: () => m });
        var l = r(59640);
        function F(g) {
          "@babel/helpers - typeof";
          return (
            (F =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (y) {
                    return typeof y;
                  }
                : function (y) {
                    return y &&
                      typeof Symbol == "function" &&
                      y.constructor === Symbol &&
                      y !== Symbol.prototype
                      ? "symbol"
                      : typeof y;
                  }),
            F(g)
          );
        }
        function H(g, y) {
          var rt = Object.keys(g);
          if (Object.getOwnPropertySymbols) {
            var ot = Object.getOwnPropertySymbols(g);
            y &&
              (ot = ot.filter(function (_t) {
                return Object.getOwnPropertyDescriptor(g, _t).enumerable;
              })),
              rt.push.apply(rt, ot);
          }
          return rt;
        }
        function it(g) {
          for (var y = 1; y < arguments.length; y++) {
            var rt = arguments[y] != null ? arguments[y] : {};
            y % 2
              ? H(Object(rt), !0).forEach(function (ot) {
                  U(g, ot, rt[ot]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    g,
                    Object.getOwnPropertyDescriptors(rt),
                  )
                : H(Object(rt)).forEach(function (ot) {
                    Object.defineProperty(
                      g,
                      ot,
                      Object.getOwnPropertyDescriptor(rt, ot),
                    );
                  });
          }
          return g;
        }
        function U(g, y, rt) {
          return (
            (y = tt(y)),
            y in g
              ? Object.defineProperty(g, y, {
                  value: rt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (g[y] = rt),
            g
          );
        }
        function tt(g) {
          var y = G(g, "string");
          return F(y) == "symbol" ? y : y + "";
        }
        function G(g, y) {
          if (F(g) != "object" || !g) return g;
          var rt = g[Symbol.toPrimitive];
          if (rt !== void 0) {
            var ot = rt.call(g, y || "default");
            if (F(ot) != "object") return ot;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (y === "string" ? String : Number)(g);
        }
        function lt(g) {
          return V(g) || st(g) || at(g) || ct();
        }
        function ct() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function at(g, y) {
          if (g) {
            if (typeof g == "string") return mt(g, y);
            var rt = Object.prototype.toString.call(g).slice(8, -1);
            if (
              (rt === "Object" && g.constructor && (rt = g.constructor.name),
              rt === "Map" || rt === "Set")
            )
              return Array.from(g);
            if (
              rt === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(rt)
            )
              return mt(g, y);
          }
        }
        function st(g) {
          if (
            (typeof Symbol < "u" && g[Symbol.iterator] != null) ||
            g["@@iterator"] != null
          )
            return Array.from(g);
        }
        function V(g) {
          if (Array.isArray(g)) return mt(g);
        }
        function mt(g, y) {
          (y == null || y > g.length) && (y = g.length);
          for (var rt = 0, ot = new Array(y); rt < y; rt++) ot[rt] = g[rt];
          return ot;
        }
        var et = { widthCache: {}, cacheCount: 0 },
          St = 2e3,
          Ft = {
            position: "absolute",
            top: "-20000px",
            left: 0,
            padding: 0,
            margin: 0,
            border: "none",
            whiteSpace: "pre",
          },
          nt = null,
          te = "recharts_measurement_span";
        function kt(g, y) {
          return nt.indexOf(g) >= 0 && y === +y ? "".concat(y, "px") : y;
        }
        function Tt(g) {
          var y = g.split(""),
            rt = y.reduce(function (ot, _t) {
              return _t === _t.toUpperCase()
                ? [].concat(lt(ot), ["-", _t.toLowerCase()])
                : [].concat(lt(ot), [_t]);
            }, []);
          return rt.join("");
        }
        var vt = function (y) {
          return Object.keys(y).reduce(function (rt, ot) {
            return "".concat(rt).concat(Tt(ot), ":").concat(kt(ot, y[ot]), ";");
          }, "");
        };
        function I(g) {
          var y = it({}, g);
          return (
            Object.keys(y).forEach(function (rt) {
              y[rt] || delete y[rt];
            }),
            y
          );
        }
        var m = function (y) {
            var rt =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            if (y == null || l.m.isSsr) return { width: 0, height: 0 };
            var ot = I(rt),
              _t = JSON.stringify({ text: y, copyStyle: ot });
            if (et.widthCache[_t]) return et.widthCache[_t];
            try {
              var j = document.getElementById(te);
              j ||
                ((j = document.createElement("span")),
                j.setAttribute("id", te),
                j.setAttribute("aria-hidden", "true"),
                document.body.appendChild(j));
              var N = it(it({}, Ft), ot);
              Object.assign(j.style, N), (j.textContent = "".concat(y));
              var M = j.getBoundingClientRect(),
                X = { width: M.width, height: M.height };
              return (
                (et.widthCache[_t] = X),
                ++et.cacheCount > St &&
                  ((et.cacheCount = 0), (et.widthCache = {})),
                X
              );
            } catch {
              return { width: 0, height: 0 };
            }
          },
          S = function (y) {
            return {
              top: y.top + window.scrollY - document.documentElement.clientTop,
              left:
                y.left + window.scrollX - document.documentElement.clientLeft,
            };
          };
      },
      96714: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, {
          CG: () => Tt,
          Dj: () => vt,
          Et: () => mt,
          F4: () => te,
          NF: () => nt,
          _3: () => V,
          ck: () => S,
          eP: () => I,
          jG: () => m,
          lX: () => kt,
          sA: () => st,
          uy: () => et,
          vh: () => St,
        });
        var l = r(77837),
          F = r.n(l),
          H = r(27367),
          it = r.n(H),
          U = r(52686),
          tt = r.n(U),
          G = r(2017),
          lt = r.n(G),
          ct = r(64609),
          at = r.n(ct),
          st = function (y) {
            return y === 0 ? 0 : y > 0 ? 1 : -1;
          },
          V = function (y) {
            return F()(y) && y.indexOf("%") === y.length - 1;
          },
          mt = function (y) {
            return lt()(y) && !it()(y);
          },
          et = function (y) {
            return at()(y);
          },
          St = function (y) {
            return mt(y) || F()(y);
          },
          Ft = 0,
          nt = function (y) {
            var rt = ++Ft;
            return "".concat(y || "").concat(rt);
          },
          te = function (y, rt) {
            var ot =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : 0,
              _t =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : !1;
            if (!mt(y) && !F()(y)) return ot;
            var j;
            if (V(y)) {
              var N = y.indexOf("%");
              j = (rt * parseFloat(y.slice(0, N))) / 100;
            } else j = +y;
            return it()(j) && (j = ot), _t && j > rt && (j = rt), j;
          },
          kt = function (y) {
            if (!y) return null;
            var rt = Object.keys(y);
            return rt && rt.length ? y[rt[0]] : null;
          },
          Tt = function (y) {
            if (!Array.isArray(y)) return !1;
            for (var rt = y.length, ot = {}, _t = 0; _t < rt; _t++)
              if (!ot[y[_t]]) ot[y[_t]] = !0;
              else return !0;
            return !1;
          },
          vt = function (y, rt) {
            return mt(y) && mt(rt)
              ? function (ot) {
                  return y + ot * (rt - y);
                }
              : function () {
                  return rt;
                };
          };
        function I(g, y, rt) {
          return !g || !g.length
            ? null
            : g.find(function (ot) {
                return (
                  ot && (typeof y == "function" ? y(ot) : tt()(ot, y)) === rt
                );
              });
        }
        var m = function (y) {
            if (!y || !y.length) return null;
            for (
              var rt = y.length,
                ot = 0,
                _t = 0,
                j = 0,
                N = 0,
                M = 1 / 0,
                X = -1 / 0,
                v = 0,
                f = 0,
                E = 0;
              E < rt;
              E++
            )
              (v = y[E].cx || 0),
                (f = y[E].cy || 0),
                (ot += v),
                (_t += f),
                (j += v * f),
                (N += v * v),
                (M = Math.min(M, v)),
                (X = Math.max(X, v));
            var _ =
              rt * N !== ot * ot ? (rt * j - ot * _t) / (rt * N - ot * ot) : 0;
            return { xmin: M, xmax: X, a: _, b: (_t - _ * ot) / rt };
          },
          S = function (y, rt) {
            return mt(y) && mt(rt)
              ? y - rt
              : F()(y) && F()(rt)
                ? y.localeCompare(rt)
                : y instanceof Date && rt instanceof Date
                  ? y.getTime() - rt.getTime()
                  : String(y).localeCompare(String(rt));
          };
      },
      59640: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { m: () => F });
        var l = function () {
            return !(
              typeof window < "u" &&
              window.document &&
              window.document.createElement &&
              window.setTimeout
            );
          },
          F = {
            isSsr: l(),
            get: function (it) {
              return F[it];
            },
            set: function (it, U) {
              if (typeof it == "string") F[it] = U;
              else {
                var tt = Object.keys(it);
                tt &&
                  tt.length &&
                  tt.forEach(function (G) {
                    F[G] = it[G];
                  });
              }
            },
          };
      },
      83349: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { R: () => l });
        var l = function (H, it) {
          var U = H.alwaysShow,
            tt = H.ifOverflow;
          return U && (tt = "extendDomain"), tt === it;
        };
      },
      27664: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { R: () => F });
        var l = !1,
          F = function (it, U) {
            for (
              var tt = arguments.length,
                G = new Array(tt > 2 ? tt - 2 : 0),
                lt = 2;
              lt < tt;
              lt++
            )
              G[lt - 2] = arguments[lt];
            if (
              l &&
              typeof console < "u" &&
              console.warn &&
              (U === void 0 &&
                console.warn("LogUtils requires an error message argument"),
              !it)
            )
              if (U === void 0)
                console.warn(
                  "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
                );
              else {
                var ct = 0;
                console.warn(
                  U.replace(/%s/g, function () {
                    return G[ct++];
                  }),
                );
              }
          };
      },
      90134: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { IZ: () => vt, Kg: () => te, yy: () => ot });
        var l = r(64609),
          F = r.n(l),
          H = r(90626),
          it = r(3316),
          U = r.n(it);
        function tt(j) {
          "@babel/helpers - typeof";
          return (
            (tt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (N) {
                    return typeof N;
                  }
                : function (N) {
                    return N &&
                      typeof Symbol == "function" &&
                      N.constructor === Symbol &&
                      N !== Symbol.prototype
                      ? "symbol"
                      : typeof N;
                  }),
            tt(j)
          );
        }
        function G(j, N) {
          var M = Object.keys(j);
          if (Object.getOwnPropertySymbols) {
            var X = Object.getOwnPropertySymbols(j);
            N &&
              (X = X.filter(function (v) {
                return Object.getOwnPropertyDescriptor(j, v).enumerable;
              })),
              M.push.apply(M, X);
          }
          return M;
        }
        function lt(j) {
          for (var N = 1; N < arguments.length; N++) {
            var M = arguments[N] != null ? arguments[N] : {};
            N % 2
              ? G(Object(M), !0).forEach(function (X) {
                  ct(j, X, M[X]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    j,
                    Object.getOwnPropertyDescriptors(M),
                  )
                : G(Object(M)).forEach(function (X) {
                    Object.defineProperty(
                      j,
                      X,
                      Object.getOwnPropertyDescriptor(M, X),
                    );
                  });
          }
          return j;
        }
        function ct(j, N, M) {
          return (
            (N = at(N)),
            N in j
              ? Object.defineProperty(j, N, {
                  value: M,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (j[N] = M),
            j
          );
        }
        function at(j) {
          var N = st(j, "string");
          return tt(N) == "symbol" ? N : N + "";
        }
        function st(j, N) {
          if (tt(j) != "object" || !j) return j;
          var M = j[Symbol.toPrimitive];
          if (M !== void 0) {
            var X = M.call(j, N || "default");
            if (tt(X) != "object") return X;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (N === "string" ? String : Number)(j);
        }
        function V(j, N) {
          return nt(j) || Ft(j, N) || et(j, N) || mt();
        }
        function mt() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function et(j, N) {
          if (j) {
            if (typeof j == "string") return St(j, N);
            var M = Object.prototype.toString.call(j).slice(8, -1);
            if (
              (M === "Object" && j.constructor && (M = j.constructor.name),
              M === "Map" || M === "Set")
            )
              return Array.from(j);
            if (
              M === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)
            )
              return St(j, N);
          }
        }
        function St(j, N) {
          (N == null || N > j.length) && (N = j.length);
          for (var M = 0, X = new Array(N); M < N; M++) X[M] = j[M];
          return X;
        }
        function Ft(j, N) {
          var M =
            j == null
              ? null
              : (typeof Symbol < "u" && j[Symbol.iterator]) || j["@@iterator"];
          if (M != null) {
            var X,
              v,
              f,
              E,
              _ = [],
              A = !0,
              c = !1;
            try {
              if (((f = (M = M.call(j)).next), N === 0)) {
                if (Object(M) !== M) return;
                A = !1;
              } else
                for (
                  ;
                  !(A = (X = f.call(M)).done) &&
                  (_.push(X.value), _.length !== N);
                  A = !0
                );
            } catch (P) {
              (c = !0), (v = P);
            } finally {
              try {
                if (
                  !A &&
                  M.return != null &&
                  ((E = M.return()), Object(E) !== E)
                )
                  return;
              } finally {
                if (c) throw v;
              }
            }
            return _;
          }
        }
        function nt(j) {
          if (Array.isArray(j)) return j;
        }
        var te = Math.PI / 180,
          kt = function (N) {
            return (N * Math.PI) / 180;
          },
          Tt = function (N) {
            return (N * 180) / Math.PI;
          },
          vt = function (N, M, X, v) {
            return {
              x: N + Math.cos(-te * v) * X,
              y: M + Math.sin(-te * v) * X,
            };
          },
          I = function (N, M) {
            var X =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : { top: 0, right: 0, bottom: 0, left: 0 };
            return (
              Math.min(
                Math.abs(N - (X.left || 0) - (X.right || 0)),
                Math.abs(M - (X.top || 0) - (X.bottom || 0)),
              ) / 2
            );
          },
          m = function (N, M, X, v, f) {
            var E = N.width,
              _ = N.height,
              A = N.startAngle,
              c = N.endAngle,
              P = getPercentValue(N.cx, E, E / 2),
              D = getPercentValue(N.cy, _, _ / 2),
              x = I(E, _, X),
              k = getPercentValue(N.innerRadius, x, 0),
              Y = getPercentValue(N.outerRadius, x, x * 0.8),
              J = Object.keys(M);
            return J.reduce(function (Mt, q) {
              var yt = M[q],
                ft = yt.domain,
                bt = yt.reversed,
                Ut;
              if (isNil(yt.range))
                v === "angleAxis"
                  ? (Ut = [A, c])
                  : v === "radiusAxis" && (Ut = [k, Y]),
                  bt && (Ut = [Ut[1], Ut[0]]);
              else {
                Ut = yt.range;
                var Ht = Ut,
                  ut = V(Ht, 2);
                (A = ut[0]), (c = ut[1]);
              }
              var o = parseScale(yt, f),
                h = o.realScaleType,
                O = o.scale;
              O.domain(ft).range(Ut), checkDomainOfScale(O);
              var d = getTicksOfScale(
                  O,
                  lt(lt({}, yt), {}, { realScaleType: h }),
                ),
                R = lt(
                  lt(lt({}, yt), d),
                  {},
                  {
                    range: Ut,
                    radius: Y,
                    realScaleType: h,
                    scale: O,
                    cx: P,
                    cy: D,
                    innerRadius: k,
                    outerRadius: Y,
                    startAngle: A,
                    endAngle: c,
                  },
                );
              return lt(lt({}, Mt), {}, ct({}, q, R));
            }, {});
          },
          S = function (N, M) {
            var X = N.x,
              v = N.y,
              f = M.x,
              E = M.y;
            return Math.sqrt(Math.pow(X - f, 2) + Math.pow(v - E, 2));
          },
          g = function (N, M) {
            var X = N.x,
              v = N.y,
              f = M.cx,
              E = M.cy,
              _ = S({ x: X, y: v }, { x: f, y: E });
            if (_ <= 0) return { radius: _ };
            var A = (X - f) / _,
              c = Math.acos(A);
            return (
              v > E && (c = 2 * Math.PI - c),
              { radius: _, angle: Tt(c), angleInRadian: c }
            );
          },
          y = function (N) {
            var M = N.startAngle,
              X = N.endAngle,
              v = Math.floor(M / 360),
              f = Math.floor(X / 360),
              E = Math.min(v, f);
            return { startAngle: M - E * 360, endAngle: X - E * 360 };
          },
          rt = function (N, M) {
            var X = M.startAngle,
              v = M.endAngle,
              f = Math.floor(X / 360),
              E = Math.floor(v / 360),
              _ = Math.min(f, E);
            return N + _ * 360;
          },
          ot = function (N, M) {
            var X = N.x,
              v = N.y,
              f = g({ x: X, y: v }, M),
              E = f.radius,
              _ = f.angle,
              A = M.innerRadius,
              c = M.outerRadius;
            if (E < A || E > c) return !1;
            if (E === 0) return !0;
            var P = y(M),
              D = P.startAngle,
              x = P.endAngle,
              k = _,
              Y;
            if (D <= x) {
              for (; k > x; ) k -= 360;
              for (; k < D; ) k += 360;
              Y = k >= D && k <= x;
            } else {
              for (; k > D; ) k -= 360;
              for (; k < x; ) k += 360;
              Y = k >= x && k <= D;
            }
            return Y ? lt(lt({}, M), {}, { radius: E, angle: rt(k, M) }) : null;
          },
          _t = function (N) {
            return !isValidElement(N) && !isFunction(N) && typeof N != "boolean"
              ? N.className
              : "";
          };
      },
      93563: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, {
          AW: () => k,
          BU: () => j,
          J9: () => A,
          Me: () => M,
          Mn: () => g,
          OV: () => c,
          X_: () => x,
          aS: () => _t,
          ee: () => D,
          sT: () => f,
        });
        var l = r(52686),
          F = r.n(l),
          H = r(64609),
          it = r.n(H),
          U = r(77837),
          tt = r.n(U),
          G = r(3316),
          lt = r.n(G),
          ct = r(97827),
          at = r.n(ct),
          st = r(90626),
          V = r(98193),
          mt = r(96714),
          et = r(80103),
          St = r(43998),
          Ft = ["children"],
          nt = ["children"];
        function te(Y, J) {
          if (Y == null) return {};
          var Mt = kt(Y, J),
            q,
            yt;
          if (Object.getOwnPropertySymbols) {
            var ft = Object.getOwnPropertySymbols(Y);
            for (yt = 0; yt < ft.length; yt++)
              (q = ft[yt]),
                !(J.indexOf(q) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(Y, q) &&
                  (Mt[q] = Y[q]);
          }
          return Mt;
        }
        function kt(Y, J) {
          if (Y == null) return {};
          var Mt = {};
          for (var q in Y)
            if (Object.prototype.hasOwnProperty.call(Y, q)) {
              if (J.indexOf(q) >= 0) continue;
              Mt[q] = Y[q];
            }
          return Mt;
        }
        function Tt(Y) {
          "@babel/helpers - typeof";
          return (
            (Tt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (J) {
                    return typeof J;
                  }
                : function (J) {
                    return J &&
                      typeof Symbol == "function" &&
                      J.constructor === Symbol &&
                      J !== Symbol.prototype
                      ? "symbol"
                      : typeof J;
                  }),
            Tt(Y)
          );
        }
        var vt = {
            click: "onClick",
            mousedown: "onMouseDown",
            mouseup: "onMouseUp",
            mouseover: "onMouseOver",
            mousemove: "onMouseMove",
            mouseout: "onMouseOut",
            mouseenter: "onMouseEnter",
            mouseleave: "onMouseLeave",
            touchcancel: "onTouchCancel",
            touchend: "onTouchEnd",
            touchmove: "onTouchMove",
            touchstart: "onTouchStart",
            contextmenu: "onContextMenu",
            dblclick: "onDoubleClick",
          },
          I = null,
          m = null,
          S = null,
          g = function (J) {
            return typeof J == "string"
              ? J
              : J
                ? J.displayName || J.name || "Component"
                : "";
          },
          y = null,
          rt = null,
          ot = function Y(J) {
            if (J === y && Array.isArray(rt)) return rt;
            var Mt = [];
            return (
              st.Children.forEach(J, function (q) {
                it()(q) ||
                  ((0, V.isFragment)(q)
                    ? (Mt = Mt.concat(Y(q.props.children)))
                    : Mt.push(q));
              }),
              (rt = Mt),
              (y = J),
              Mt
            );
          };
        function _t(Y, J) {
          var Mt = [],
            q = [];
          return (
            Array.isArray(J)
              ? (q = J.map(function (yt) {
                  return g(yt);
                }))
              : (q = [g(J)]),
            ot(Y).forEach(function (yt) {
              var ft = F()(yt, "type.displayName") || F()(yt, "type.name");
              q.indexOf(ft) !== -1 && Mt.push(yt);
            }),
            Mt
          );
        }
        function j(Y, J) {
          var Mt = _t(Y, J);
          return Mt && Mt[0];
        }
        var N = function (J, Mt) {
            var q = [],
              yt;
            return (
              Array.isArray(Mt)
                ? (yt = Mt.map(function (ft) {
                    return g(ft);
                  }))
                : (yt = [g(Mt)]),
              ot(J).forEach(function (ft) {
                var bt = get(ft, "type.displayName");
                (bt && yt.indexOf(bt) !== -1) || q.push(ft);
              }),
              q
            );
          },
          M = function (J) {
            if (!J || !J.props) return !1;
            var Mt = J.props,
              q = Mt.width,
              yt = Mt.height;
            return !(!(0, mt.Et)(q) || q <= 0 || !(0, mt.Et)(yt) || yt <= 0);
          },
          X = [
            "a",
            "altGlyph",
            "altGlyphDef",
            "altGlyphItem",
            "animate",
            "animateColor",
            "animateMotion",
            "animateTransform",
            "circle",
            "clipPath",
            "color-profile",
            "cursor",
            "defs",
            "desc",
            "ellipse",
            "feBlend",
            "feColormatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
            "filter",
            "font",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-url",
            "foreignObject",
            "g",
            "glyph",
            "glyphRef",
            "hkern",
            "image",
            "line",
            "lineGradient",
            "marker",
            "mask",
            "metadata",
            "missing-glyph",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "script",
            "set",
            "stop",
            "style",
            "svg",
            "switch",
            "symbol",
            "text",
            "textPath",
            "title",
            "tref",
            "tspan",
            "use",
            "view",
            "vkern",
          ],
          v = function (J) {
            return J && J.type && tt()(J.type) && X.indexOf(J.type) >= 0;
          },
          f = function (J) {
            return J && Tt(J) === "object" && "clipDot" in J;
          },
          E = function (J, Mt, q, yt) {
            var ft,
              bt =
                (ft =
                  St.VU === null || St.VU === void 0 ? void 0 : St.VU[yt]) !==
                  null && ft !== void 0
                  ? ft
                  : [];
            return (
              Mt.startsWith("data-") ||
              (!lt()(J) && ((yt && bt.includes(Mt)) || St.QQ.includes(Mt))) ||
              (q && St.j2.includes(Mt))
            );
          },
          _ = function (J) {
            var Mt = [];
            return (
              ot(J).forEach(function (q) {
                v(q) && Mt.push(q);
              }),
              Mt
            );
          },
          A = function (J, Mt, q) {
            if (!J || typeof J == "function" || typeof J == "boolean")
              return null;
            var yt = J;
            if (((0, st.isValidElement)(J) && (yt = J.props), !at()(yt)))
              return null;
            var ft = {};
            return (
              Object.keys(yt).forEach(function (bt) {
                var Ut;
                E(
                  (Ut = yt) === null || Ut === void 0 ? void 0 : Ut[bt],
                  bt,
                  Mt,
                  q,
                ) && (ft[bt] = yt[bt]);
              }),
              ft
            );
          },
          c = function Y(J, Mt) {
            if (J === Mt) return !0;
            var q = st.Children.count(J);
            if (q !== st.Children.count(Mt)) return !1;
            if (q === 0) return !0;
            if (q === 1)
              return P(
                Array.isArray(J) ? J[0] : J,
                Array.isArray(Mt) ? Mt[0] : Mt,
              );
            for (var yt = 0; yt < q; yt++) {
              var ft = J[yt],
                bt = Mt[yt];
              if (Array.isArray(ft) || Array.isArray(bt)) {
                if (!Y(ft, bt)) return !1;
              } else if (!P(ft, bt)) return !1;
            }
            return !0;
          },
          P = function (J, Mt) {
            if (it()(J) && it()(Mt)) return !0;
            if (!it()(J) && !it()(Mt)) {
              var q = J.props || {},
                yt = q.children,
                ft = te(q, Ft),
                bt = Mt.props || {},
                Ut = bt.children,
                Ht = te(bt, nt);
              return yt && Ut
                ? (0, et.b)(ft, Ht) && c(yt, Ut)
                : !yt && !Ut
                  ? (0, et.b)(ft, Ht)
                  : !1;
            }
            return !1;
          },
          D = function (J, Mt) {
            var q = [],
              yt = {};
            return (
              ot(J).forEach(function (ft, bt) {
                if (v(ft)) q.push(ft);
                else if (ft) {
                  var Ut = g(ft.type),
                    Ht = Mt[Ut] || {},
                    ut = Ht.handler,
                    o = Ht.once;
                  if (ut && (!o || !yt[Ut])) {
                    var h = ut(ft, Ut, bt);
                    q.push(h), (yt[Ut] = !0);
                  }
                }
              }),
              q
            );
          },
          x = function (J) {
            var Mt = J && J.type;
            return Mt && vt[Mt] ? vt[Mt] : null;
          },
          k = function (J, Mt) {
            return ot(Mt).indexOf(J);
          };
      },
      80103: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { b: () => l });
        function l(F, H) {
          for (var it in F)
            if (
              {}.hasOwnProperty.call(F, it) &&
              (!{}.hasOwnProperty.call(H, it) || F[it] !== H[it])
            )
              return !1;
          for (var U in H)
            if ({}.hasOwnProperty.call(H, U) && !{}.hasOwnProperty.call(F, U))
              return !1;
          return !0;
        }
      },
      11766: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { g: () => at });
        var l = r(75620),
          F = r(61195),
          H = r(93563);
        function it(st) {
          "@babel/helpers - typeof";
          return (
            (it =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (V) {
                    return typeof V;
                  }
                : function (V) {
                    return V &&
                      typeof Symbol == "function" &&
                      V.constructor === Symbol &&
                      V !== Symbol.prototype
                      ? "symbol"
                      : typeof V;
                  }),
            it(st)
          );
        }
        function U(st, V) {
          var mt = Object.keys(st);
          if (Object.getOwnPropertySymbols) {
            var et = Object.getOwnPropertySymbols(st);
            V &&
              (et = et.filter(function (St) {
                return Object.getOwnPropertyDescriptor(st, St).enumerable;
              })),
              mt.push.apply(mt, et);
          }
          return mt;
        }
        function tt(st) {
          for (var V = 1; V < arguments.length; V++) {
            var mt = arguments[V] != null ? arguments[V] : {};
            V % 2
              ? U(Object(mt), !0).forEach(function (et) {
                  G(st, et, mt[et]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    st,
                    Object.getOwnPropertyDescriptors(mt),
                  )
                : U(Object(mt)).forEach(function (et) {
                    Object.defineProperty(
                      st,
                      et,
                      Object.getOwnPropertyDescriptor(mt, et),
                    );
                  });
          }
          return st;
        }
        function G(st, V, mt) {
          return (
            (V = lt(V)),
            V in st
              ? Object.defineProperty(st, V, {
                  value: mt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (st[V] = mt),
            st
          );
        }
        function lt(st) {
          var V = ct(st, "string");
          return it(V) == "symbol" ? V : V + "";
        }
        function ct(st, V) {
          if (it(st) != "object" || !st) return st;
          var mt = st[Symbol.toPrimitive];
          if (mt !== void 0) {
            var et = mt.call(st, V || "default");
            if (it(et) != "object") return et;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (V === "string" ? String : Number)(st);
        }
        var at = function (V) {
          var mt = V.children,
            et = V.formattedGraphicalItems,
            St = V.legendWidth,
            Ft = V.legendContent,
            nt = (0, H.BU)(mt, l.s);
          if (!nt) return null;
          var te = l.s.defaultProps,
            kt = te !== void 0 ? tt(tt({}, te), nt.props) : {},
            Tt;
          return (
            nt.props && nt.props.payload
              ? (Tt = nt.props && nt.props.payload)
              : Ft === "children"
                ? (Tt = (et || []).reduce(function (vt, I) {
                    var m = I.item,
                      S = I.props,
                      g = S.sectors || S.data || [];
                    return vt.concat(
                      g.map(function (y) {
                        return {
                          type: nt.props.iconType || m.props.legendType,
                          value: y.name,
                          color: y.fill,
                          payload: y,
                        };
                      }),
                    );
                  }, []))
                : (Tt = (et || []).map(function (vt) {
                    var I = vt.item,
                      m = I.type.defaultProps,
                      S = m !== void 0 ? tt(tt({}, m), I.props) : {},
                      g = S.dataKey,
                      y = S.name,
                      rt = S.legendType,
                      ot = S.hide;
                    return {
                      inactive: ot,
                      dataKey: g,
                      type: kt.iconType || rt || "square",
                      color: (0, F.Ps)(I),
                      value: y || g,
                      payload: S,
                    };
                  })),
            tt(
              tt(tt({}, kt), l.s.getWithHeight(nt, St)),
              {},
              { payload: Tt, item: nt },
            )
          );
        };
      },
      43149: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { s: () => U });
        var l = r(17744),
          F = r.n(l),
          H = r(3316),
          it = r.n(H);
        function U(tt, G, lt) {
          return G === !0 ? F()(tt, lt) : it()(G) ? F()(tt, G) : tt;
        }
      },
      43998: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, {
          QQ: () => tt,
          VU: () => lt,
          XC: () => V,
          _U: () => at,
          j2: () => ct,
        });
        var l = r(90626),
          F = r(97827),
          H = r.n(F);
        function it(mt) {
          "@babel/helpers - typeof";
          return (
            (it =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (et) {
                    return typeof et;
                  }
                : function (et) {
                    return et &&
                      typeof Symbol == "function" &&
                      et.constructor === Symbol &&
                      et !== Symbol.prototype
                      ? "symbol"
                      : typeof et;
                  }),
            it(mt)
          );
        }
        var U = ["viewBox", "children"],
          tt = [
            "aria-activedescendant",
            "aria-atomic",
            "aria-autocomplete",
            "aria-busy",
            "aria-checked",
            "aria-colcount",
            "aria-colindex",
            "aria-colspan",
            "aria-controls",
            "aria-current",
            "aria-describedby",
            "aria-details",
            "aria-disabled",
            "aria-errormessage",
            "aria-expanded",
            "aria-flowto",
            "aria-haspopup",
            "aria-hidden",
            "aria-invalid",
            "aria-keyshortcuts",
            "aria-label",
            "aria-labelledby",
            "aria-level",
            "aria-live",
            "aria-modal",
            "aria-multiline",
            "aria-multiselectable",
            "aria-orientation",
            "aria-owns",
            "aria-placeholder",
            "aria-posinset",
            "aria-pressed",
            "aria-readonly",
            "aria-relevant",
            "aria-required",
            "aria-roledescription",
            "aria-rowcount",
            "aria-rowindex",
            "aria-rowspan",
            "aria-selected",
            "aria-setsize",
            "aria-sort",
            "aria-valuemax",
            "aria-valuemin",
            "aria-valuenow",
            "aria-valuetext",
            "className",
            "color",
            "height",
            "id",
            "lang",
            "max",
            "media",
            "method",
            "min",
            "name",
            "style",
            "target",
            "width",
            "role",
            "tabIndex",
            "accentHeight",
            "accumulate",
            "additive",
            "alignmentBaseline",
            "allowReorder",
            "alphabetic",
            "amplitude",
            "arabicForm",
            "ascent",
            "attributeName",
            "attributeType",
            "autoReverse",
            "azimuth",
            "baseFrequency",
            "baselineShift",
            "baseProfile",
            "bbox",
            "begin",
            "bias",
            "by",
            "calcMode",
            "capHeight",
            "clip",
            "clipPath",
            "clipPathUnits",
            "clipRule",
            "colorInterpolation",
            "colorInterpolationFilters",
            "colorProfile",
            "colorRendering",
            "contentScriptType",
            "contentStyleType",
            "cursor",
            "cx",
            "cy",
            "d",
            "decelerate",
            "descent",
            "diffuseConstant",
            "direction",
            "display",
            "divisor",
            "dominantBaseline",
            "dur",
            "dx",
            "dy",
            "edgeMode",
            "elevation",
            "enableBackground",
            "end",
            "exponent",
            "externalResourcesRequired",
            "fill",
            "fillOpacity",
            "fillRule",
            "filter",
            "filterRes",
            "filterUnits",
            "floodColor",
            "floodOpacity",
            "focusable",
            "fontFamily",
            "fontSize",
            "fontSizeAdjust",
            "fontStretch",
            "fontStyle",
            "fontVariant",
            "fontWeight",
            "format",
            "from",
            "fx",
            "fy",
            "g1",
            "g2",
            "glyphName",
            "glyphOrientationHorizontal",
            "glyphOrientationVertical",
            "glyphRef",
            "gradientTransform",
            "gradientUnits",
            "hanging",
            "horizAdvX",
            "horizOriginX",
            "href",
            "ideographic",
            "imageRendering",
            "in2",
            "in",
            "intercept",
            "k1",
            "k2",
            "k3",
            "k4",
            "k",
            "kernelMatrix",
            "kernelUnitLength",
            "kerning",
            "keyPoints",
            "keySplines",
            "keyTimes",
            "lengthAdjust",
            "letterSpacing",
            "lightingColor",
            "limitingConeAngle",
            "local",
            "markerEnd",
            "markerHeight",
            "markerMid",
            "markerStart",
            "markerUnits",
            "markerWidth",
            "mask",
            "maskContentUnits",
            "maskUnits",
            "mathematical",
            "mode",
            "numOctaves",
            "offset",
            "opacity",
            "operator",
            "order",
            "orient",
            "orientation",
            "origin",
            "overflow",
            "overlinePosition",
            "overlineThickness",
            "paintOrder",
            "panose1",
            "pathLength",
            "patternContentUnits",
            "patternTransform",
            "patternUnits",
            "pointerEvents",
            "pointsAtX",
            "pointsAtY",
            "pointsAtZ",
            "preserveAlpha",
            "preserveAspectRatio",
            "primitiveUnits",
            "r",
            "radius",
            "refX",
            "refY",
            "renderingIntent",
            "repeatCount",
            "repeatDur",
            "requiredExtensions",
            "requiredFeatures",
            "restart",
            "result",
            "rotate",
            "rx",
            "ry",
            "seed",
            "shapeRendering",
            "slope",
            "spacing",
            "specularConstant",
            "specularExponent",
            "speed",
            "spreadMethod",
            "startOffset",
            "stdDeviation",
            "stemh",
            "stemv",
            "stitchTiles",
            "stopColor",
            "stopOpacity",
            "strikethroughPosition",
            "strikethroughThickness",
            "string",
            "stroke",
            "strokeDasharray",
            "strokeDashoffset",
            "strokeLinecap",
            "strokeLinejoin",
            "strokeMiterlimit",
            "strokeOpacity",
            "strokeWidth",
            "surfaceScale",
            "systemLanguage",
            "tableValues",
            "targetX",
            "targetY",
            "textAnchor",
            "textDecoration",
            "textLength",
            "textRendering",
            "to",
            "transform",
            "u1",
            "u2",
            "underlinePosition",
            "underlineThickness",
            "unicode",
            "unicodeBidi",
            "unicodeRange",
            "unitsPerEm",
            "vAlphabetic",
            "values",
            "vectorEffect",
            "version",
            "vertAdvY",
            "vertOriginX",
            "vertOriginY",
            "vHanging",
            "vIdeographic",
            "viewTarget",
            "visibility",
            "vMathematical",
            "widths",
            "wordSpacing",
            "writingMode",
            "x1",
            "x2",
            "x",
            "xChannelSelector",
            "xHeight",
            "xlinkActuate",
            "xlinkArcrole",
            "xlinkHref",
            "xlinkRole",
            "xlinkShow",
            "xlinkTitle",
            "xlinkType",
            "xmlBase",
            "xmlLang",
            "xmlns",
            "xmlnsXlink",
            "xmlSpace",
            "y1",
            "y2",
            "y",
            "yChannelSelector",
            "z",
            "zoomAndPan",
            "ref",
            "key",
            "angle",
          ],
          G = ["points", "pathLength"],
          lt = { svg: U, polygon: G, polyline: G },
          ct = [
            "dangerouslySetInnerHTML",
            "onCopy",
            "onCopyCapture",
            "onCut",
            "onCutCapture",
            "onPaste",
            "onPasteCapture",
            "onCompositionEnd",
            "onCompositionEndCapture",
            "onCompositionStart",
            "onCompositionStartCapture",
            "onCompositionUpdate",
            "onCompositionUpdateCapture",
            "onFocus",
            "onFocusCapture",
            "onBlur",
            "onBlurCapture",
            "onChange",
            "onChangeCapture",
            "onBeforeInput",
            "onBeforeInputCapture",
            "onInput",
            "onInputCapture",
            "onReset",
            "onResetCapture",
            "onSubmit",
            "onSubmitCapture",
            "onInvalid",
            "onInvalidCapture",
            "onLoad",
            "onLoadCapture",
            "onError",
            "onErrorCapture",
            "onKeyDown",
            "onKeyDownCapture",
            "onKeyPress",
            "onKeyPressCapture",
            "onKeyUp",
            "onKeyUpCapture",
            "onAbort",
            "onAbortCapture",
            "onCanPlay",
            "onCanPlayCapture",
            "onCanPlayThrough",
            "onCanPlayThroughCapture",
            "onDurationChange",
            "onDurationChangeCapture",
            "onEmptied",
            "onEmptiedCapture",
            "onEncrypted",
            "onEncryptedCapture",
            "onEnded",
            "onEndedCapture",
            "onLoadedData",
            "onLoadedDataCapture",
            "onLoadedMetadata",
            "onLoadedMetadataCapture",
            "onLoadStart",
            "onLoadStartCapture",
            "onPause",
            "onPauseCapture",
            "onPlay",
            "onPlayCapture",
            "onPlaying",
            "onPlayingCapture",
            "onProgress",
            "onProgressCapture",
            "onRateChange",
            "onRateChangeCapture",
            "onSeeked",
            "onSeekedCapture",
            "onSeeking",
            "onSeekingCapture",
            "onStalled",
            "onStalledCapture",
            "onSuspend",
            "onSuspendCapture",
            "onTimeUpdate",
            "onTimeUpdateCapture",
            "onVolumeChange",
            "onVolumeChangeCapture",
            "onWaiting",
            "onWaitingCapture",
            "onAuxClick",
            "onAuxClickCapture",
            "onClick",
            "onClickCapture",
            "onContextMenu",
            "onContextMenuCapture",
            "onDoubleClick",
            "onDoubleClickCapture",
            "onDrag",
            "onDragCapture",
            "onDragEnd",
            "onDragEndCapture",
            "onDragEnter",
            "onDragEnterCapture",
            "onDragExit",
            "onDragExitCapture",
            "onDragLeave",
            "onDragLeaveCapture",
            "onDragOver",
            "onDragOverCapture",
            "onDragStart",
            "onDragStartCapture",
            "onDrop",
            "onDropCapture",
            "onMouseDown",
            "onMouseDownCapture",
            "onMouseEnter",
            "onMouseLeave",
            "onMouseMove",
            "onMouseMoveCapture",
            "onMouseOut",
            "onMouseOutCapture",
            "onMouseOver",
            "onMouseOverCapture",
            "onMouseUp",
            "onMouseUpCapture",
            "onSelect",
            "onSelectCapture",
            "onTouchCancel",
            "onTouchCancelCapture",
            "onTouchEnd",
            "onTouchEndCapture",
            "onTouchMove",
            "onTouchMoveCapture",
            "onTouchStart",
            "onTouchStartCapture",
            "onPointerDown",
            "onPointerDownCapture",
            "onPointerMove",
            "onPointerMoveCapture",
            "onPointerUp",
            "onPointerUpCapture",
            "onPointerCancel",
            "onPointerCancelCapture",
            "onPointerEnter",
            "onPointerEnterCapture",
            "onPointerLeave",
            "onPointerLeaveCapture",
            "onPointerOver",
            "onPointerOverCapture",
            "onPointerOut",
            "onPointerOutCapture",
            "onGotPointerCapture",
            "onGotPointerCaptureCapture",
            "onLostPointerCapture",
            "onLostPointerCaptureCapture",
            "onScroll",
            "onScrollCapture",
            "onWheel",
            "onWheelCapture",
            "onAnimationStart",
            "onAnimationStartCapture",
            "onAnimationEnd",
            "onAnimationEndCapture",
            "onAnimationIteration",
            "onAnimationIterationCapture",
            "onTransitionEnd",
            "onTransitionEndCapture",
          ],
          at = function (et, St) {
            if (!et || typeof et == "function" || typeof et == "boolean")
              return null;
            var Ft = et;
            if (((0, l.isValidElement)(et) && (Ft = et.props), !H()(Ft)))
              return null;
            var nt = {};
            return (
              Object.keys(Ft).forEach(function (te) {
                ct.includes(te) &&
                  (nt[te] =
                    St ||
                    function (kt) {
                      return Ft[te](Ft, kt);
                    });
              }),
              nt
            );
          },
          st = function (et, St, Ft) {
            return function (nt) {
              return et(St, Ft, nt), null;
            };
          },
          V = function (et, St, Ft) {
            if (!H()(et) || it(et) !== "object") return null;
            var nt = null;
            return (
              Object.keys(et).forEach(function (te) {
                var kt = et[te];
                ct.includes(te) &&
                  typeof kt == "function" &&
                  (nt || (nt = {}), (nt[te] = st(kt, St, Ft)));
              }),
              nt
            );
          };
      },
      14469: function (Wt, Bt, r) {
        var l; /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */
        (function (F) {
          "use strict";
          var H = 1e9,
            it = {
              precision: 20,
              rounding: 4,
              toExpNeg: -7,
              toExpPos: 21,
              LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
            },
            U = !0,
            tt = "[DecimalError] ",
            G = tt + "Invalid argument: ",
            lt = tt + "Exponent out of range: ",
            ct = Math.floor,
            at = Math.pow,
            st = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            V,
            mt = 1e7,
            et = 7,
            St = 9007199254740991,
            Ft = ct(St / et),
            nt = {};
          (nt.absoluteValue = nt.abs =
            function () {
              var v = new this.constructor(this);
              return v.s && (v.s = 1), v;
            }),
            (nt.comparedTo = nt.cmp =
              function (v) {
                var f,
                  E,
                  _,
                  A,
                  c = this;
                if (((v = new c.constructor(v)), c.s !== v.s))
                  return c.s || -v.s;
                if (c.e !== v.e) return (c.e > v.e) ^ (c.s < 0) ? 1 : -1;
                for (
                  _ = c.d.length, A = v.d.length, f = 0, E = _ < A ? _ : A;
                  f < E;
                  ++f
                )
                  if (c.d[f] !== v.d[f])
                    return (c.d[f] > v.d[f]) ^ (c.s < 0) ? 1 : -1;
                return _ === A ? 0 : (_ > A) ^ (c.s < 0) ? 1 : -1;
              }),
            (nt.decimalPlaces = nt.dp =
              function () {
                var v = this,
                  f = v.d.length - 1,
                  E = (f - v.e) * et;
                if (((f = v.d[f]), f)) for (; f % 10 == 0; f /= 10) E--;
                return E < 0 ? 0 : E;
              }),
            (nt.dividedBy = nt.div =
              function (v) {
                return vt(this, new this.constructor(v));
              }),
            (nt.dividedToIntegerBy = nt.idiv =
              function (v) {
                var f = this,
                  E = f.constructor;
                return ot(vt(f, new E(v), 0, 1), E.precision);
              }),
            (nt.equals = nt.eq =
              function (v) {
                return !this.cmp(v);
              }),
            (nt.exponent = function () {
              return m(this);
            }),
            (nt.greaterThan = nt.gt =
              function (v) {
                return this.cmp(v) > 0;
              }),
            (nt.greaterThanOrEqualTo = nt.gte =
              function (v) {
                return this.cmp(v) >= 0;
              }),
            (nt.isInteger = nt.isint =
              function () {
                return this.e > this.d.length - 2;
              }),
            (nt.isNegative = nt.isneg =
              function () {
                return this.s < 0;
              }),
            (nt.isPositive = nt.ispos =
              function () {
                return this.s > 0;
              }),
            (nt.isZero = function () {
              return this.s === 0;
            }),
            (nt.lessThan = nt.lt =
              function (v) {
                return this.cmp(v) < 0;
              }),
            (nt.lessThanOrEqualTo = nt.lte =
              function (v) {
                return this.cmp(v) < 1;
              }),
            (nt.logarithm = nt.log =
              function (v) {
                var f,
                  E = this,
                  _ = E.constructor,
                  A = _.precision,
                  c = A + 5;
                if (v === void 0) v = new _(10);
                else if (((v = new _(v)), v.s < 1 || v.eq(V)))
                  throw Error(tt + "NaN");
                if (E.s < 1) throw Error(tt + (E.s ? "NaN" : "-Infinity"));
                return E.eq(V)
                  ? new _(0)
                  : ((U = !1),
                    (f = vt(y(E, c), y(v, c), c)),
                    (U = !0),
                    ot(f, A));
              }),
            (nt.minus = nt.sub =
              function (v) {
                var f = this;
                return (
                  (v = new f.constructor(v)),
                  f.s == v.s ? _t(f, v) : te(f, ((v.s = -v.s), v))
                );
              }),
            (nt.modulo = nt.mod =
              function (v) {
                var f,
                  E = this,
                  _ = E.constructor,
                  A = _.precision;
                if (((v = new _(v)), !v.s)) throw Error(tt + "NaN");
                return E.s
                  ? ((U = !1),
                    (f = vt(E, v, 0, 1).times(v)),
                    (U = !0),
                    E.minus(f))
                  : ot(new _(E), A);
              }),
            (nt.naturalExponential = nt.exp =
              function () {
                return I(this);
              }),
            (nt.naturalLogarithm = nt.ln =
              function () {
                return y(this);
              }),
            (nt.negated = nt.neg =
              function () {
                var v = new this.constructor(this);
                return (v.s = -v.s || 0), v;
              }),
            (nt.plus = nt.add =
              function (v) {
                var f = this;
                return (
                  (v = new f.constructor(v)),
                  f.s == v.s ? te(f, v) : _t(f, ((v.s = -v.s), v))
                );
              }),
            (nt.precision = nt.sd =
              function (v) {
                var f,
                  E,
                  _,
                  A = this;
                if (v !== void 0 && v !== !!v && v !== 1 && v !== 0)
                  throw Error(G + v);
                if (
                  ((f = m(A) + 1),
                  (_ = A.d.length - 1),
                  (E = _ * et + 1),
                  (_ = A.d[_]),
                  _)
                ) {
                  for (; _ % 10 == 0; _ /= 10) E--;
                  for (_ = A.d[0]; _ >= 10; _ /= 10) E++;
                }
                return v && f > E ? f : E;
              }),
            (nt.squareRoot = nt.sqrt =
              function () {
                var v,
                  f,
                  E,
                  _,
                  A,
                  c,
                  P,
                  D = this,
                  x = D.constructor;
                if (D.s < 1) {
                  if (!D.s) return new x(0);
                  throw Error(tt + "NaN");
                }
                for (
                  v = m(D),
                    U = !1,
                    A = Math.sqrt(+D),
                    A == 0 || A == 1 / 0
                      ? ((f = Tt(D.d)),
                        (f.length + v) % 2 == 0 && (f += "0"),
                        (A = Math.sqrt(f)),
                        (v = ct((v + 1) / 2) - (v < 0 || v % 2)),
                        A == 1 / 0
                          ? (f = "5e" + v)
                          : ((f = A.toExponential()),
                            (f = f.slice(0, f.indexOf("e") + 1) + v)),
                        (_ = new x(f)))
                      : (_ = new x(A.toString())),
                    E = x.precision,
                    A = P = E + 3;
                  ;
                )
                  if (
                    ((c = _),
                    (_ = c.plus(vt(D, c, P + 2)).times(0.5)),
                    Tt(c.d).slice(0, P) === (f = Tt(_.d)).slice(0, P))
                  ) {
                    if (((f = f.slice(P - 3, P + 1)), A == P && f == "4999")) {
                      if ((ot(c, E + 1, 0), c.times(c).eq(D))) {
                        _ = c;
                        break;
                      }
                    } else if (f != "9999") break;
                    P += 4;
                  }
                return (U = !0), ot(_, E);
              }),
            (nt.times = nt.mul =
              function (v) {
                var f,
                  E,
                  _,
                  A,
                  c,
                  P,
                  D,
                  x,
                  k,
                  Y = this,
                  J = Y.constructor,
                  Mt = Y.d,
                  q = (v = new J(v)).d;
                if (!Y.s || !v.s) return new J(0);
                for (
                  v.s *= Y.s,
                    E = Y.e + v.e,
                    x = Mt.length,
                    k = q.length,
                    x < k &&
                      ((c = Mt), (Mt = q), (q = c), (P = x), (x = k), (k = P)),
                    c = [],
                    P = x + k,
                    _ = P;
                  _--;
                )
                  c.push(0);
                for (_ = k; --_ >= 0; ) {
                  for (f = 0, A = x + _; A > _; )
                    (D = c[A] + q[_] * Mt[A - _ - 1] + f),
                      (c[A--] = (D % mt) | 0),
                      (f = (D / mt) | 0);
                  c[A] = ((c[A] + f) % mt) | 0;
                }
                for (; !c[--P]; ) c.pop();
                return (
                  f ? ++E : c.shift(),
                  (v.d = c),
                  (v.e = E),
                  U ? ot(v, J.precision) : v
                );
              }),
            (nt.toDecimalPlaces = nt.todp =
              function (v, f) {
                var E = this,
                  _ = E.constructor;
                return (
                  (E = new _(E)),
                  v === void 0
                    ? E
                    : (kt(v, 0, H),
                      f === void 0 ? (f = _.rounding) : kt(f, 0, 8),
                      ot(E, v + m(E) + 1, f))
                );
              }),
            (nt.toExponential = function (v, f) {
              var E,
                _ = this,
                A = _.constructor;
              return (
                v === void 0
                  ? (E = j(_, !0))
                  : (kt(v, 0, H),
                    f === void 0 ? (f = A.rounding) : kt(f, 0, 8),
                    (_ = ot(new A(_), v + 1, f)),
                    (E = j(_, !0, v + 1))),
                E
              );
            }),
            (nt.toFixed = function (v, f) {
              var E,
                _,
                A = this,
                c = A.constructor;
              return v === void 0
                ? j(A)
                : (kt(v, 0, H),
                  f === void 0 ? (f = c.rounding) : kt(f, 0, 8),
                  (_ = ot(new c(A), v + m(A) + 1, f)),
                  (E = j(_.abs(), !1, v + m(_) + 1)),
                  A.isneg() && !A.isZero() ? "-" + E : E);
            }),
            (nt.toInteger = nt.toint =
              function () {
                var v = this,
                  f = v.constructor;
                return ot(new f(v), m(v) + 1, f.rounding);
              }),
            (nt.toNumber = function () {
              return +this;
            }),
            (nt.toPower = nt.pow =
              function (v) {
                var f,
                  E,
                  _,
                  A,
                  c,
                  P,
                  D = this,
                  x = D.constructor,
                  k = 12,
                  Y = +(v = new x(v));
                if (!v.s) return new x(V);
                if (((D = new x(D)), !D.s)) {
                  if (v.s < 1) throw Error(tt + "Infinity");
                  return D;
                }
                if (D.eq(V)) return D;
                if (((_ = x.precision), v.eq(V))) return ot(D, _);
                if (
                  ((f = v.e), (E = v.d.length - 1), (P = f >= E), (c = D.s), P)
                ) {
                  if ((E = Y < 0 ? -Y : Y) <= St) {
                    for (
                      A = new x(V), f = Math.ceil(_ / et + 4), U = !1;
                      E % 2 && ((A = A.times(D)), N(A.d, f)),
                        (E = ct(E / 2)),
                        E !== 0;
                    )
                      (D = D.times(D)), N(D.d, f);
                    return (U = !0), v.s < 0 ? new x(V).div(A) : ot(A, _);
                  }
                } else if (c < 0) throw Error(tt + "NaN");
                return (
                  (c = c < 0 && v.d[Math.max(f, E)] & 1 ? -1 : 1),
                  (D.s = 1),
                  (U = !1),
                  (A = v.times(y(D, _ + k))),
                  (U = !0),
                  (A = I(A)),
                  (A.s = c),
                  A
                );
              }),
            (nt.toPrecision = function (v, f) {
              var E,
                _,
                A = this,
                c = A.constructor;
              return (
                v === void 0
                  ? ((E = m(A)), (_ = j(A, E <= c.toExpNeg || E >= c.toExpPos)))
                  : (kt(v, 1, H),
                    f === void 0 ? (f = c.rounding) : kt(f, 0, 8),
                    (A = ot(new c(A), v, f)),
                    (E = m(A)),
                    (_ = j(A, v <= E || E <= c.toExpNeg, v))),
                _
              );
            }),
            (nt.toSignificantDigits = nt.tosd =
              function (v, f) {
                var E = this,
                  _ = E.constructor;
                return (
                  v === void 0
                    ? ((v = _.precision), (f = _.rounding))
                    : (kt(v, 1, H),
                      f === void 0 ? (f = _.rounding) : kt(f, 0, 8)),
                  ot(new _(E), v, f)
                );
              }),
            (nt.toString =
              nt.valueOf =
              nt.val =
              nt.toJSON =
                function () {
                  var v = this,
                    f = m(v),
                    E = v.constructor;
                  return j(v, f <= E.toExpNeg || f >= E.toExpPos);
                });
          function te(v, f) {
            var E,
              _,
              A,
              c,
              P,
              D,
              x,
              k,
              Y = v.constructor,
              J = Y.precision;
            if (!v.s || !f.s) return f.s || (f = new Y(v)), U ? ot(f, J) : f;
            if (
              ((x = v.d),
              (k = f.d),
              (P = v.e),
              (A = f.e),
              (x = x.slice()),
              (c = P - A),
              c)
            ) {
              for (
                c < 0
                  ? ((_ = x), (c = -c), (D = k.length))
                  : ((_ = k), (A = P), (D = x.length)),
                  P = Math.ceil(J / et),
                  D = P > D ? P + 1 : D + 1,
                  c > D && ((c = D), (_.length = 1)),
                  _.reverse();
                c--;
              )
                _.push(0);
              _.reverse();
            }
            for (
              D = x.length,
                c = k.length,
                D - c < 0 && ((c = D), (_ = k), (k = x), (x = _)),
                E = 0;
              c;
            )
              (E = ((x[--c] = x[c] + k[c] + E) / mt) | 0), (x[c] %= mt);
            for (E && (x.unshift(E), ++A), D = x.length; x[--D] == 0; ) x.pop();
            return (f.d = x), (f.e = A), U ? ot(f, J) : f;
          }
          function kt(v, f, E) {
            if (v !== ~~v || v < f || v > E) throw Error(G + v);
          }
          function Tt(v) {
            var f,
              E,
              _,
              A = v.length - 1,
              c = "",
              P = v[0];
            if (A > 0) {
              for (c += P, f = 1; f < A; f++)
                (_ = v[f] + ""),
                  (E = et - _.length),
                  E && (c += g(E)),
                  (c += _);
              (P = v[f]), (_ = P + ""), (E = et - _.length), E && (c += g(E));
            } else if (P === 0) return "0";
            for (; P % 10 === 0; ) P /= 10;
            return c + P;
          }
          var vt = (function () {
            function v(_, A) {
              var c,
                P = 0,
                D = _.length;
              for (_ = _.slice(); D--; )
                (c = _[D] * A + P), (_[D] = (c % mt) | 0), (P = (c / mt) | 0);
              return P && _.unshift(P), _;
            }
            function f(_, A, c, P) {
              var D, x;
              if (c != P) x = c > P ? 1 : -1;
              else
                for (D = x = 0; D < c; D++)
                  if (_[D] != A[D]) {
                    x = _[D] > A[D] ? 1 : -1;
                    break;
                  }
              return x;
            }
            function E(_, A, c) {
              for (var P = 0; c--; )
                (_[c] -= P),
                  (P = _[c] < A[c] ? 1 : 0),
                  (_[c] = P * mt + _[c] - A[c]);
              for (; !_[0] && _.length > 1; ) _.shift();
            }
            return function (_, A, c, P) {
              var D,
                x,
                k,
                Y,
                J,
                Mt,
                q,
                yt,
                ft,
                bt,
                Ut,
                Ht,
                ut,
                o,
                h,
                O,
                d,
                R,
                Q = _.constructor,
                wt = _.s == A.s ? 1 : -1,
                zt = _.d,
                Vt = A.d;
              if (!_.s) return new Q(_);
              if (!A.s) throw Error(tt + "Division by zero");
              for (
                x = _.e - A.e,
                  d = Vt.length,
                  h = zt.length,
                  q = new Q(wt),
                  yt = q.d = [],
                  k = 0;
                Vt[k] == (zt[k] || 0);
              )
                ++k;
              if (
                (Vt[k] > (zt[k] || 0) && --x,
                c == null
                  ? (Ht = c = Q.precision)
                  : P
                    ? (Ht = c + (m(_) - m(A)) + 1)
                    : (Ht = c),
                Ht < 0)
              )
                return new Q(0);
              if (((Ht = (Ht / et + 2) | 0), (k = 0), d == 1))
                for (Y = 0, Vt = Vt[0], Ht++; (k < h || Y) && Ht--; k++)
                  (ut = Y * mt + (zt[k] || 0)),
                    (yt[k] = (ut / Vt) | 0),
                    (Y = (ut % Vt) | 0);
              else {
                for (
                  Y = (mt / (Vt[0] + 1)) | 0,
                    Y > 1 &&
                      ((Vt = v(Vt, Y)),
                      (zt = v(zt, Y)),
                      (d = Vt.length),
                      (h = zt.length)),
                    o = d,
                    ft = zt.slice(0, d),
                    bt = ft.length;
                  bt < d;
                )
                  ft[bt++] = 0;
                (R = Vt.slice()),
                  R.unshift(0),
                  (O = Vt[0]),
                  Vt[1] >= mt / 2 && ++O;
                do
                  (Y = 0),
                    (D = f(Vt, ft, d, bt)),
                    D < 0
                      ? ((Ut = ft[0]),
                        d != bt && (Ut = Ut * mt + (ft[1] || 0)),
                        (Y = (Ut / O) | 0),
                        Y > 1
                          ? (Y >= mt && (Y = mt - 1),
                            (J = v(Vt, Y)),
                            (Mt = J.length),
                            (bt = ft.length),
                            (D = f(J, ft, Mt, bt)),
                            D == 1 && (Y--, E(J, d < Mt ? R : Vt, Mt)))
                          : (Y == 0 && (D = Y = 1), (J = Vt.slice())),
                        (Mt = J.length),
                        Mt < bt && J.unshift(0),
                        E(ft, J, bt),
                        D == -1 &&
                          ((bt = ft.length),
                          (D = f(Vt, ft, d, bt)),
                          D < 1 && (Y++, E(ft, d < bt ? R : Vt, bt))),
                        (bt = ft.length))
                      : D === 0 && (Y++, (ft = [0])),
                    (yt[k++] = Y),
                    D && ft[0]
                      ? (ft[bt++] = zt[o] || 0)
                      : ((ft = [zt[o]]), (bt = 1));
                while ((o++ < h || ft[0] !== void 0) && Ht--);
              }
              return (
                yt[0] || yt.shift(), (q.e = x), ot(q, P ? c + m(q) + 1 : c)
              );
            };
          })();
          function I(v, f) {
            var E,
              _,
              A,
              c,
              P,
              D,
              x = 0,
              k = 0,
              Y = v.constructor,
              J = Y.precision;
            if (m(v) > 16) throw Error(lt + m(v));
            if (!v.s) return new Y(V);
            for (
              f == null ? ((U = !1), (D = J)) : (D = f), P = new Y(0.03125);
              v.abs().gte(0.1);
            )
              (v = v.times(P)), (k += 5);
            for (
              _ = ((Math.log(at(2, k)) / Math.LN10) * 2 + 5) | 0,
                D += _,
                E = A = c = new Y(V),
                Y.precision = D;
              ;
            ) {
              if (
                ((A = ot(A.times(v), D)),
                (E = E.times(++x)),
                (P = c.plus(vt(A, E, D))),
                Tt(P.d).slice(0, D) === Tt(c.d).slice(0, D))
              ) {
                for (; k--; ) c = ot(c.times(c), D);
                return (Y.precision = J), f == null ? ((U = !0), ot(c, J)) : c;
              }
              c = P;
            }
          }
          function m(v) {
            for (var f = v.e * et, E = v.d[0]; E >= 10; E /= 10) f++;
            return f;
          }
          function S(v, f, E) {
            if (f > v.LN10.sd())
              throw (
                ((U = !0),
                E && (v.precision = E),
                Error(tt + "LN10 precision limit exceeded"))
              );
            return ot(new v(v.LN10), f);
          }
          function g(v) {
            for (var f = ""; v--; ) f += "0";
            return f;
          }
          function y(v, f) {
            var E,
              _,
              A,
              c,
              P,
              D,
              x,
              k,
              Y,
              J = 1,
              Mt = 10,
              q = v,
              yt = q.d,
              ft = q.constructor,
              bt = ft.precision;
            if (q.s < 1) throw Error(tt + (q.s ? "NaN" : "-Infinity"));
            if (q.eq(V)) return new ft(0);
            if ((f == null ? ((U = !1), (k = bt)) : (k = f), q.eq(10)))
              return f == null && (U = !0), S(ft, k);
            if (
              ((k += Mt),
              (ft.precision = k),
              (E = Tt(yt)),
              (_ = E.charAt(0)),
              (c = m(q)),
              Math.abs(c) < 15e14)
            ) {
              for (; (_ < 7 && _ != 1) || (_ == 1 && E.charAt(1) > 3); )
                (q = q.times(v)), (E = Tt(q.d)), (_ = E.charAt(0)), J++;
              (c = m(q)),
                _ > 1
                  ? ((q = new ft("0." + E)), c++)
                  : (q = new ft(_ + "." + E.slice(1)));
            } else
              return (
                (x = S(ft, k + 2, bt).times(c + "")),
                (q = y(new ft(_ + "." + E.slice(1)), k - Mt).plus(x)),
                (ft.precision = bt),
                f == null ? ((U = !0), ot(q, bt)) : q
              );
            for (
              D = P = q = vt(q.minus(V), q.plus(V), k),
                Y = ot(q.times(q), k),
                A = 3;
              ;
            ) {
              if (
                ((P = ot(P.times(Y), k)),
                (x = D.plus(vt(P, new ft(A), k))),
                Tt(x.d).slice(0, k) === Tt(D.d).slice(0, k))
              )
                return (
                  (D = D.times(2)),
                  c !== 0 && (D = D.plus(S(ft, k + 2, bt).times(c + ""))),
                  (D = vt(D, new ft(J), k)),
                  (ft.precision = bt),
                  f == null ? ((U = !0), ot(D, bt)) : D
                );
              (D = x), (A += 2);
            }
          }
          function rt(v, f) {
            var E, _, A;
            for (
              (E = f.indexOf(".")) > -1 && (f = f.replace(".", "")),
                (_ = f.search(/e/i)) > 0
                  ? (E < 0 && (E = _),
                    (E += +f.slice(_ + 1)),
                    (f = f.substring(0, _)))
                  : E < 0 && (E = f.length),
                _ = 0;
              f.charCodeAt(_) === 48;
            )
              ++_;
            for (A = f.length; f.charCodeAt(A - 1) === 48; ) --A;
            if (((f = f.slice(_, A)), f)) {
              if (
                ((A -= _),
                (E = E - _ - 1),
                (v.e = ct(E / et)),
                (v.d = []),
                (_ = (E + 1) % et),
                E < 0 && (_ += et),
                _ < A)
              ) {
                for (_ && v.d.push(+f.slice(0, _)), A -= et; _ < A; )
                  v.d.push(+f.slice(_, (_ += et)));
                (f = f.slice(_)), (_ = et - f.length);
              } else _ -= A;
              for (; _--; ) f += "0";
              if ((v.d.push(+f), U && (v.e > Ft || v.e < -Ft)))
                throw Error(lt + E);
            } else (v.s = 0), (v.e = 0), (v.d = [0]);
            return v;
          }
          function ot(v, f, E) {
            var _,
              A,
              c,
              P,
              D,
              x,
              k,
              Y,
              J = v.d;
            for (P = 1, c = J[0]; c >= 10; c /= 10) P++;
            if (((_ = f - P), _ < 0)) (_ += et), (A = f), (k = J[(Y = 0)]);
            else {
              if (((Y = Math.ceil((_ + 1) / et)), (c = J.length), Y >= c))
                return v;
              for (k = c = J[Y], P = 1; c >= 10; c /= 10) P++;
              (_ %= et), (A = _ - et + P);
            }
            if (
              (E !== void 0 &&
                ((c = at(10, P - A - 1)),
                (D = ((k / c) % 10) | 0),
                (x = f < 0 || J[Y + 1] !== void 0 || k % c),
                (x =
                  E < 4
                    ? (D || x) && (E == 0 || E == (v.s < 0 ? 3 : 2))
                    : D > 5 ||
                      (D == 5 &&
                        (E == 4 ||
                          x ||
                          (E == 6 &&
                            ((_ > 0
                              ? A > 0
                                ? k / at(10, P - A)
                                : 0
                              : J[Y - 1]) %
                              10) &
                              1) ||
                          E == (v.s < 0 ? 8 : 7))))),
              f < 1 || !J[0])
            )
              return (
                x
                  ? ((c = m(v)),
                    (J.length = 1),
                    (f = f - c - 1),
                    (J[0] = at(10, (et - (f % et)) % et)),
                    (v.e = ct(-f / et) || 0))
                  : ((J.length = 1), (J[0] = v.e = v.s = 0)),
                v
              );
            if (
              (_ == 0
                ? ((J.length = Y), (c = 1), Y--)
                : ((J.length = Y + 1),
                  (c = at(10, et - _)),
                  (J[Y] =
                    A > 0 ? (((k / at(10, P - A)) % at(10, A)) | 0) * c : 0)),
              x)
            )
              for (;;)
                if (Y == 0) {
                  (J[0] += c) == mt && ((J[0] = 1), ++v.e);
                  break;
                } else {
                  if (((J[Y] += c), J[Y] != mt)) break;
                  (J[Y--] = 0), (c = 1);
                }
            for (_ = J.length; J[--_] === 0; ) J.pop();
            if (U && (v.e > Ft || v.e < -Ft)) throw Error(lt + m(v));
            return v;
          }
          function _t(v, f) {
            var E,
              _,
              A,
              c,
              P,
              D,
              x,
              k,
              Y,
              J,
              Mt = v.constructor,
              q = Mt.precision;
            if (!v.s || !f.s)
              return f.s ? (f.s = -f.s) : (f = new Mt(v)), U ? ot(f, q) : f;
            if (
              ((x = v.d),
              (J = f.d),
              (_ = f.e),
              (k = v.e),
              (x = x.slice()),
              (P = k - _),
              P)
            ) {
              for (
                Y = P < 0,
                  Y
                    ? ((E = x), (P = -P), (D = J.length))
                    : ((E = J), (_ = k), (D = x.length)),
                  A = Math.max(Math.ceil(q / et), D) + 2,
                  P > A && ((P = A), (E.length = 1)),
                  E.reverse(),
                  A = P;
                A--;
              )
                E.push(0);
              E.reverse();
            } else {
              for (
                A = x.length, D = J.length, Y = A < D, Y && (D = A), A = 0;
                A < D;
                A++
              )
                if (x[A] != J[A]) {
                  Y = x[A] < J[A];
                  break;
                }
              P = 0;
            }
            for (
              Y && ((E = x), (x = J), (J = E), (f.s = -f.s)),
                D = x.length,
                A = J.length - D;
              A > 0;
              --A
            )
              x[D++] = 0;
            for (A = J.length; A > P; ) {
              if (x[--A] < J[A]) {
                for (c = A; c && x[--c] === 0; ) x[c] = mt - 1;
                --x[c], (x[A] += mt);
              }
              x[A] -= J[A];
            }
            for (; x[--D] === 0; ) x.pop();
            for (; x[0] === 0; x.shift()) --_;
            return x[0] ? ((f.d = x), (f.e = _), U ? ot(f, q) : f) : new Mt(0);
          }
          function j(v, f, E) {
            var _,
              A = m(v),
              c = Tt(v.d),
              P = c.length;
            return (
              f
                ? (E && (_ = E - P) > 0
                    ? (c = c.charAt(0) + "." + c.slice(1) + g(_))
                    : P > 1 && (c = c.charAt(0) + "." + c.slice(1)),
                  (c = c + (A < 0 ? "e" : "e+") + A))
                : A < 0
                  ? ((c = "0." + g(-A - 1) + c),
                    E && (_ = E - P) > 0 && (c += g(_)))
                  : A >= P
                    ? ((c += g(A + 1 - P)),
                      E && (_ = E - A - 1) > 0 && (c = c + "." + g(_)))
                    : ((_ = A + 1) < P &&
                        (c = c.slice(0, _) + "." + c.slice(_)),
                      E &&
                        (_ = E - P) > 0 &&
                        (A + 1 === P && (c += "."), (c += g(_)))),
              v.s < 0 ? "-" + c : c
            );
          }
          function N(v, f) {
            if (v.length > f) return (v.length = f), !0;
          }
          function M(v) {
            var f, E, _;
            function A(c) {
              var P = this;
              if (!(P instanceof A)) return new A(c);
              if (((P.constructor = A), c instanceof A)) {
                (P.s = c.s), (P.e = c.e), (P.d = (c = c.d) ? c.slice() : c);
                return;
              }
              if (typeof c == "number") {
                if (c * 0 !== 0) throw Error(G + c);
                if (c > 0) P.s = 1;
                else if (c < 0) (c = -c), (P.s = -1);
                else {
                  (P.s = 0), (P.e = 0), (P.d = [0]);
                  return;
                }
                if (c === ~~c && c < 1e7) {
                  (P.e = 0), (P.d = [c]);
                  return;
                }
                return rt(P, c.toString());
              } else if (typeof c != "string") throw Error(G + c);
              if (
                (c.charCodeAt(0) === 45
                  ? ((c = c.slice(1)), (P.s = -1))
                  : (P.s = 1),
                st.test(c))
              )
                rt(P, c);
              else throw Error(G + c);
            }
            if (
              ((A.prototype = nt),
              (A.ROUND_UP = 0),
              (A.ROUND_DOWN = 1),
              (A.ROUND_CEIL = 2),
              (A.ROUND_FLOOR = 3),
              (A.ROUND_HALF_UP = 4),
              (A.ROUND_HALF_DOWN = 5),
              (A.ROUND_HALF_EVEN = 6),
              (A.ROUND_HALF_CEIL = 7),
              (A.ROUND_HALF_FLOOR = 8),
              (A.clone = M),
              (A.config = A.set = X),
              v === void 0 && (v = {}),
              v)
            )
              for (
                _ = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"],
                  f = 0;
                f < _.length;
              )
                v.hasOwnProperty((E = _[f++])) || (v[E] = this[E]);
            return A.config(v), A;
          }
          function X(v) {
            if (!v || typeof v != "object") throw Error(tt + "Object expected");
            var f,
              E,
              _,
              A = [
                "precision",
                1,
                H,
                "rounding",
                0,
                8,
                "toExpNeg",
                -1 / 0,
                0,
                "toExpPos",
                0,
                1 / 0,
              ];
            for (f = 0; f < A.length; f += 3)
              if ((_ = v[(E = A[f])]) !== void 0)
                if (ct(_) === _ && _ >= A[f + 1] && _ <= A[f + 2]) this[E] = _;
                else throw Error(G + E + ": " + _);
            if ((_ = v[(E = "LN10")]) !== void 0)
              if (_ == Math.LN10) this[E] = new this(_);
              else throw Error(G + E + ": " + _);
            return this;
          }
          (it = M(it)),
            (it.default = it.Decimal = it),
            (V = new it(1)),
            (l = function () {
              return it;
            }.call(Bt, r, Bt, Wt)),
            l !== void 0 && (Wt.exports = l);
        })(this);
      },
      29570: (Wt) => {
        "use strict";
        var Bt = Object.prototype.hasOwnProperty,
          r = "~";
        function l() {}
        Object.create &&
          ((l.prototype = Object.create(null)), new l().__proto__ || (r = !1));
        function F(tt, G, lt) {
          (this.fn = tt), (this.context = G), (this.once = lt || !1);
        }
        function H(tt, G, lt, ct, at) {
          if (typeof lt != "function")
            throw new TypeError("The listener must be a function");
          var st = new F(lt, ct || tt, at),
            V = r ? r + G : G;
          return (
            tt._events[V]
              ? tt._events[V].fn
                ? (tt._events[V] = [tt._events[V], st])
                : tt._events[V].push(st)
              : ((tt._events[V] = st), tt._eventsCount++),
            tt
          );
        }
        function it(tt, G) {
          --tt._eventsCount === 0
            ? (tt._events = new l())
            : delete tt._events[G];
        }
        function U() {
          (this._events = new l()), (this._eventsCount = 0);
        }
        (U.prototype.eventNames = function () {
          var G = [],
            lt,
            ct;
          if (this._eventsCount === 0) return G;
          for (ct in (lt = this._events))
            Bt.call(lt, ct) && G.push(r ? ct.slice(1) : ct);
          return Object.getOwnPropertySymbols
            ? G.concat(Object.getOwnPropertySymbols(lt))
            : G;
        }),
          (U.prototype.listeners = function (G) {
            var lt = r ? r + G : G,
              ct = this._events[lt];
            if (!ct) return [];
            if (ct.fn) return [ct.fn];
            for (var at = 0, st = ct.length, V = new Array(st); at < st; at++)
              V[at] = ct[at].fn;
            return V;
          }),
          (U.prototype.listenerCount = function (G) {
            var lt = r ? r + G : G,
              ct = this._events[lt];
            return ct ? (ct.fn ? 1 : ct.length) : 0;
          }),
          (U.prototype.emit = function (G, lt, ct, at, st, V) {
            var mt = r ? r + G : G;
            if (!this._events[mt]) return !1;
            var et = this._events[mt],
              St = arguments.length,
              Ft,
              nt;
            if (et.fn) {
              switch (
                (et.once && this.removeListener(G, et.fn, void 0, !0), St)
              ) {
                case 1:
                  return et.fn.call(et.context), !0;
                case 2:
                  return et.fn.call(et.context, lt), !0;
                case 3:
                  return et.fn.call(et.context, lt, ct), !0;
                case 4:
                  return et.fn.call(et.context, lt, ct, at), !0;
                case 5:
                  return et.fn.call(et.context, lt, ct, at, st), !0;
                case 6:
                  return et.fn.call(et.context, lt, ct, at, st, V), !0;
              }
              for (nt = 1, Ft = new Array(St - 1); nt < St; nt++)
                Ft[nt - 1] = arguments[nt];
              et.fn.apply(et.context, Ft);
            } else {
              var te = et.length,
                kt;
              for (nt = 0; nt < te; nt++)
                switch (
                  (et[nt].once && this.removeListener(G, et[nt].fn, void 0, !0),
                  St)
                ) {
                  case 1:
                    et[nt].fn.call(et[nt].context);
                    break;
                  case 2:
                    et[nt].fn.call(et[nt].context, lt);
                    break;
                  case 3:
                    et[nt].fn.call(et[nt].context, lt, ct);
                    break;
                  case 4:
                    et[nt].fn.call(et[nt].context, lt, ct, at);
                    break;
                  default:
                    if (!Ft)
                      for (kt = 1, Ft = new Array(St - 1); kt < St; kt++)
                        Ft[kt - 1] = arguments[kt];
                    et[nt].fn.apply(et[nt].context, Ft);
                }
            }
            return !0;
          }),
          (U.prototype.on = function (G, lt, ct) {
            return H(this, G, lt, ct, !1);
          }),
          (U.prototype.once = function (G, lt, ct) {
            return H(this, G, lt, ct, !0);
          }),
          (U.prototype.removeListener = function (G, lt, ct, at) {
            var st = r ? r + G : G;
            if (!this._events[st]) return this;
            if (!lt) return it(this, st), this;
            var V = this._events[st];
            if (V.fn)
              V.fn === lt &&
                (!at || V.once) &&
                (!ct || V.context === ct) &&
                it(this, st);
            else {
              for (var mt = 0, et = [], St = V.length; mt < St; mt++)
                (V[mt].fn !== lt ||
                  (at && !V[mt].once) ||
                  (ct && V[mt].context !== ct)) &&
                  et.push(V[mt]);
              et.length
                ? (this._events[st] = et.length === 1 ? et[0] : et)
                : it(this, st);
            }
            return this;
          }),
          (U.prototype.removeAllListeners = function (G) {
            var lt;
            return (
              G
                ? ((lt = r ? r + G : G), this._events[lt] && it(this, lt))
                : ((this._events = new l()), (this._eventsCount = 0)),
              this
            );
          }),
          (U.prototype.off = U.prototype.removeListener),
          (U.prototype.addListener = U.prototype.on),
          (U.prefixed = r),
          (U.EventEmitter = U),
          (Wt.exports = U);
      },
      34231: (Wt) => {
        function Bt(r, l, F) {
          switch (F.length) {
            case 0:
              return r.call(l);
            case 1:
              return r.call(l, F[0]);
            case 2:
              return r.call(l, F[0], F[1]);
            case 3:
              return r.call(l, F[0], F[1], F[2]);
          }
          return r.apply(l, F);
        }
        Wt.exports = Bt;
      },
      28383: (Wt) => {
        function Bt(r, l) {
          for (var F = -1, H = r == null ? 0 : r.length; ++F < H; )
            if (!l(r[F], F, r)) return !1;
          return !0;
        }
        Wt.exports = Bt;
      },
      77223: (Wt, Bt, r) => {
        var l = r(74021);
        function F(H, it) {
          var U = H == null ? 0 : H.length;
          return !!U && l(H, it, 0) > -1;
        }
        Wt.exports = F;
      },
      64959: (Wt) => {
        function Bt(r, l, F) {
          for (var H = -1, it = r == null ? 0 : r.length; ++H < it; )
            if (F(l, r[H])) return !0;
          return !1;
        }
        Wt.exports = Bt;
      },
      18296: (Wt) => {
        function Bt(r) {
          return r.split("");
        }
        Wt.exports = Bt;
      },
      22503: (Wt, Bt, r) => {
        var l = r(39155);
        function F(H, it) {
          var U = !0;
          return (
            l(H, function (tt, G, lt) {
              return (U = !!it(tt, G, lt)), U;
            }),
            U
          );
        }
        Wt.exports = F;
      },
      16869: (Wt, Bt, r) => {
        var l = r(4036);
        function F(H, it, U) {
          for (var tt = -1, G = H.length; ++tt < G; ) {
            var lt = H[tt],
              ct = it(lt);
            if (ct != null && (at === void 0 ? ct === ct && !l(ct) : U(ct, at)))
              var at = ct,
                st = lt;
          }
          return st;
        }
        Wt.exports = F;
      },
      75509: (Wt) => {
        function Bt(r, l, F, H) {
          for (var it = r.length, U = F + (H ? 1 : -1); H ? U-- : ++U < it; )
            if (l(r[U], U, r)) return U;
          return -1;
        }
        Wt.exports = Bt;
      },
      18174: (Wt, Bt, r) => {
        var l = r(49666),
          F = r(4497);
        function H(it, U, tt, G, lt) {
          var ct = -1,
            at = it.length;
          for (tt || (tt = F), lt || (lt = []); ++ct < at; ) {
            var st = it[ct];
            U > 0 && tt(st)
              ? U > 1
                ? H(st, U - 1, tt, G, lt)
                : l(lt, st)
              : G || (lt[lt.length] = st);
          }
          return lt;
        }
        Wt.exports = H;
      },
      31517: (Wt) => {
        function Bt(r, l) {
          return r > l;
        }
        Wt.exports = Bt;
      },
      74021: (Wt, Bt, r) => {
        var l = r(75509),
          F = r(57929),
          H = r(79989);
        function it(U, tt, G) {
          return tt === tt ? H(U, tt, G) : l(U, F, G);
        }
        Wt.exports = it;
      },
      57929: (Wt) => {
        function Bt(r) {
          return r !== r;
        }
        Wt.exports = Bt;
      },
      40106: (Wt) => {
        function Bt(r, l) {
          return r < l;
        }
        Wt.exports = Bt;
      },
      82401: (Wt, Bt, r) => {
        var l = r(27742),
          F = r(93328),
          H = r(12507),
          it = r(47014),
          U = r(75323),
          tt = r(97371),
          G = r(9756),
          lt = r(91398),
          ct = r(83491);
        function at(st, V, mt) {
          V.length
            ? (V = l(V, function (Ft) {
                return ct(Ft)
                  ? function (nt) {
                      return F(nt, Ft.length === 1 ? Ft[0] : Ft);
                    }
                  : Ft;
              }))
            : (V = [lt]);
          var et = -1;
          V = l(V, tt(H));
          var St = it(st, function (Ft, nt, te) {
            var kt = l(V, function (Tt) {
              return Tt(Ft);
            });
            return { criteria: kt, index: ++et, value: Ft };
          });
          return U(St, function (Ft, nt) {
            return G(Ft, nt, mt);
          });
        }
        Wt.exports = at;
      },
      32849: (Wt) => {
        var Bt = Math.ceil,
          r = Math.max;
        function l(F, H, it, U) {
          for (
            var tt = -1, G = r(Bt((H - F) / (it || 1)), 0), lt = Array(G);
            G--;
          )
            (lt[U ? G : ++tt] = F), (F += it);
          return lt;
        }
        Wt.exports = l;
      },
      5456: (Wt, Bt, r) => {
        var l = r(91398),
          F = r(28979),
          H = r(81271);
        function it(U, tt) {
          return H(F(U, tt, l), U + "");
        }
        Wt.exports = it;
      },
      59576: (Wt, Bt, r) => {
        var l = r(12732),
          F = r(47489),
          H = r(91398),
          it = F
            ? function (U, tt) {
                return F(U, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: l(tt),
                  writable: !0,
                });
              }
            : H;
        Wt.exports = it;
      },
      35270: (Wt) => {
        function Bt(r, l, F) {
          var H = -1,
            it = r.length;
          l < 0 && (l = -l > it ? 0 : it + l),
            (F = F > it ? it : F),
            F < 0 && (F += it),
            (it = l > F ? 0 : (F - l) >>> 0),
            (l >>>= 0);
          for (var U = Array(it); ++H < it; ) U[H] = r[H + l];
          return U;
        }
        Wt.exports = Bt;
      },
      41190: (Wt, Bt, r) => {
        var l = r(39155);
        function F(H, it) {
          var U;
          return (
            l(H, function (tt, G, lt) {
              return (U = it(tt, G, lt)), !U;
            }),
            !!U
          );
        }
        Wt.exports = F;
      },
      75323: (Wt) => {
        function Bt(r, l) {
          var F = r.length;
          for (r.sort(l); F--; ) r[F] = r[F].value;
          return r;
        }
        Wt.exports = Bt;
      },
      38846: (Wt, Bt, r) => {
        var l = r(44658),
          F = /^\s+/;
        function H(it) {
          return it && it.slice(0, l(it) + 1).replace(F, "");
        }
        Wt.exports = H;
      },
      3507: (Wt, Bt, r) => {
        var l = r(99177),
          F = r(77223),
          H = r(64959),
          it = r(5713),
          U = r(23119),
          tt = r(73697),
          G = 200;
        function lt(ct, at, st) {
          var V = -1,
            mt = F,
            et = ct.length,
            St = !0,
            Ft = [],
            nt = Ft;
          if (st) (St = !1), (mt = H);
          else if (et >= G) {
            var te = at ? null : U(ct);
            if (te) return tt(te);
            (St = !1), (mt = it), (nt = new l());
          } else nt = at ? [] : Ft;
          t: for (; ++V < et; ) {
            var kt = ct[V],
              Tt = at ? at(kt) : kt;
            if (((kt = st || kt !== 0 ? kt : 0), St && Tt === Tt)) {
              for (var vt = nt.length; vt--; ) if (nt[vt] === Tt) continue t;
              at && nt.push(Tt), Ft.push(kt);
            } else mt(nt, Tt, st) || (nt !== Ft && nt.push(Tt), Ft.push(kt));
          }
          return Ft;
        }
        Wt.exports = lt;
      },
      30440: (Wt, Bt, r) => {
        var l = r(35270);
        function F(H, it, U) {
          var tt = H.length;
          return (U = U === void 0 ? tt : U), !it && U >= tt ? H : l(H, it, U);
        }
        Wt.exports = F;
      },
      20292: (Wt, Bt, r) => {
        var l = r(4036);
        function F(H, it) {
          if (H !== it) {
            var U = H !== void 0,
              tt = H === null,
              G = H === H,
              lt = l(H),
              ct = it !== void 0,
              at = it === null,
              st = it === it,
              V = l(it);
            if (
              (!at && !V && !lt && H > it) ||
              (lt && ct && st && !at && !V) ||
              (tt && ct && st) ||
              (!U && st) ||
              !G
            )
              return 1;
            if (
              (!tt && !lt && !V && H < it) ||
              (V && U && G && !tt && !lt) ||
              (at && U && G) ||
              (!ct && G) ||
              !st
            )
              return -1;
          }
          return 0;
        }
        Wt.exports = F;
      },
      9756: (Wt, Bt, r) => {
        var l = r(20292);
        function F(H, it, U) {
          for (
            var tt = -1,
              G = H.criteria,
              lt = it.criteria,
              ct = G.length,
              at = U.length;
            ++tt < ct;
          ) {
            var st = l(G[tt], lt[tt]);
            if (st) {
              if (tt >= at) return st;
              var V = U[tt];
              return st * (V == "desc" ? -1 : 1);
            }
          }
          return H.index - it.index;
        }
        Wt.exports = F;
      },
      94829: (Wt, Bt, r) => {
        var l = r(30440),
          F = r(6076),
          H = r(96402),
          it = r(6468);
        function U(tt) {
          return function (G) {
            G = it(G);
            var lt = F(G) ? H(G) : void 0,
              ct = lt ? lt[0] : G.charAt(0),
              at = lt ? l(lt, 1).join("") : G.slice(1);
            return ct[tt]() + at;
          };
        }
        Wt.exports = U;
      },
      25200: (Wt, Bt, r) => {
        var l = r(12507),
          F = r(97244),
          H = r(33640);
        function it(U) {
          return function (tt, G, lt) {
            var ct = Object(tt);
            if (!F(tt)) {
              var at = l(G, 3);
              (tt = H(tt)),
                (G = function (V) {
                  return at(ct[V], V, ct);
                });
            }
            var st = U(tt, G, lt);
            return st > -1 ? ct[at ? tt[st] : st] : void 0;
          };
        }
        Wt.exports = it;
      },
      35966: (Wt, Bt, r) => {
        var l = r(32849),
          F = r(6238),
          H = r(5598);
        function it(U) {
          return function (tt, G, lt) {
            return (
              lt && typeof lt != "number" && F(tt, G, lt) && (G = lt = void 0),
              (tt = H(tt)),
              G === void 0 ? ((G = tt), (tt = 0)) : (G = H(G)),
              (lt = lt === void 0 ? (tt < G ? 1 : -1) : H(lt)),
              l(tt, G, lt, U)
            );
          };
        }
        Wt.exports = it;
      },
      23119: (Wt, Bt, r) => {
        var l = r(64507),
          F = r(7204),
          H = r(73697),
          it = 1 / 0,
          U =
            l && 1 / H(new l([, -0]))[1] == it
              ? function (tt) {
                  return new l(tt);
                }
              : F;
        Wt.exports = U;
      },
      6076: (Wt) => {
        var Bt = "\\ud800-\\udfff",
          r = "\\u0300-\\u036f",
          l = "\\ufe20-\\ufe2f",
          F = "\\u20d0-\\u20ff",
          H = r + l + F,
          it = "\\ufe0e\\ufe0f",
          U = "\\u200d",
          tt = RegExp("[" + U + Bt + H + it + "]");
        function G(lt) {
          return tt.test(lt);
        }
        Wt.exports = G;
      },
      4497: (Wt, Bt, r) => {
        var l = r(38039),
          F = r(69214),
          H = r(83491),
          it = l ? l.isConcatSpreadable : void 0;
        function U(tt) {
          return H(tt) || F(tt) || !!(it && tt && tt[it]);
        }
        Wt.exports = U;
      },
      6238: (Wt, Bt, r) => {
        var l = r(31722),
          F = r(97244),
          H = r(62439),
          it = r(97827);
        function U(tt, G, lt) {
          if (!it(lt)) return !1;
          var ct = typeof G;
          return (
            ct == "number"
              ? F(lt) && H(G, lt.length)
              : ct == "string" && G in lt
          )
            ? l(lt[G], tt)
            : !1;
        }
        Wt.exports = U;
      },
      28979: (Wt, Bt, r) => {
        var l = r(34231),
          F = Math.max;
        function H(it, U, tt) {
          return (
            (U = F(U === void 0 ? it.length - 1 : U, 0)),
            function () {
              for (
                var G = arguments,
                  lt = -1,
                  ct = F(G.length - U, 0),
                  at = Array(ct);
                ++lt < ct;
              )
                at[lt] = G[U + lt];
              lt = -1;
              for (var st = Array(U + 1); ++lt < U; ) st[lt] = G[lt];
              return (st[U] = tt(at)), l(it, this, st);
            }
          );
        }
        Wt.exports = H;
      },
      81271: (Wt, Bt, r) => {
        var l = r(59576),
          F = r(89997),
          H = F(l);
        Wt.exports = H;
      },
      89997: (Wt) => {
        var Bt = 800,
          r = 16,
          l = Date.now;
        function F(H) {
          var it = 0,
            U = 0;
          return function () {
            var tt = l(),
              G = r - (tt - U);
            if (((U = tt), G > 0)) {
              if (++it >= Bt) return arguments[0];
            } else it = 0;
            return H.apply(void 0, arguments);
          };
        }
        Wt.exports = F;
      },
      79989: (Wt) => {
        function Bt(r, l, F) {
          for (var H = F - 1, it = r.length; ++H < it; )
            if (r[H] === l) return H;
          return -1;
        }
        Wt.exports = Bt;
      },
      96402: (Wt, Bt, r) => {
        var l = r(18296),
          F = r(6076),
          H = r(52512);
        function it(U) {
          return F(U) ? H(U) : l(U);
        }
        Wt.exports = it;
      },
      44658: (Wt) => {
        var Bt = /\s/;
        function r(l) {
          for (var F = l.length; F-- && Bt.test(l.charAt(F)); );
          return F;
        }
        Wt.exports = r;
      },
      52512: (Wt) => {
        var Bt = "\\ud800-\\udfff",
          r = "\\u0300-\\u036f",
          l = "\\ufe20-\\ufe2f",
          F = "\\u20d0-\\u20ff",
          H = r + l + F,
          it = "\\ufe0e\\ufe0f",
          U = "[" + Bt + "]",
          tt = "[" + H + "]",
          G = "\\ud83c[\\udffb-\\udfff]",
          lt = "(?:" + tt + "|" + G + ")",
          ct = "[^" + Bt + "]",
          at = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          st = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          V = "\\u200d",
          mt = lt + "?",
          et = "[" + it + "]?",
          St =
            "(?:" + V + "(?:" + [ct, at, st].join("|") + ")" + et + mt + ")*",
          Ft = et + mt + St,
          nt = "(?:" + [ct + tt + "?", tt, at, st, U].join("|") + ")",
          te = RegExp(G + "(?=" + G + ")|" + nt + Ft, "g");
        function kt(Tt) {
          return Tt.match(te) || [];
        }
        Wt.exports = kt;
      },
      12732: (Wt) => {
        function Bt(r) {
          return function () {
            return r;
          };
        }
        Wt.exports = Bt;
      },
      18663: (Wt, Bt, r) => {
        var l = r(97827),
          F = r(26846),
          H = r(52352),
          it = "Expected a function",
          U = Math.max,
          tt = Math.min;
        function G(lt, ct, at) {
          var st,
            V,
            mt,
            et,
            St,
            Ft,
            nt = 0,
            te = !1,
            kt = !1,
            Tt = !0;
          if (typeof lt != "function") throw new TypeError(it);
          (ct = H(ct) || 0),
            l(at) &&
              ((te = !!at.leading),
              (kt = "maxWait" in at),
              (mt = kt ? U(H(at.maxWait) || 0, ct) : mt),
              (Tt = "trailing" in at ? !!at.trailing : Tt));
          function vt(j) {
            var N = st,
              M = V;
            return (st = V = void 0), (nt = j), (et = lt.apply(M, N)), et;
          }
          function I(j) {
            return (nt = j), (St = setTimeout(g, ct)), te ? vt(j) : et;
          }
          function m(j) {
            var N = j - Ft,
              M = j - nt,
              X = ct - N;
            return kt ? tt(X, mt - M) : X;
          }
          function S(j) {
            var N = j - Ft,
              M = j - nt;
            return Ft === void 0 || N >= ct || N < 0 || (kt && M >= mt);
          }
          function g() {
            var j = F();
            if (S(j)) return y(j);
            St = setTimeout(g, m(j));
          }
          function y(j) {
            return (St = void 0), Tt && st ? vt(j) : ((st = V = void 0), et);
          }
          function rt() {
            St !== void 0 && clearTimeout(St),
              (nt = 0),
              (st = Ft = V = St = void 0);
          }
          function ot() {
            return St === void 0 ? et : y(F());
          }
          function _t() {
            var j = F(),
              N = S(j);
            if (((st = arguments), (V = this), (Ft = j), N)) {
              if (St === void 0) return I(Ft);
              if (kt) return clearTimeout(St), (St = setTimeout(g, ct)), vt(Ft);
            }
            return St === void 0 && (St = setTimeout(g, ct)), et;
          }
          return (_t.cancel = rt), (_t.flush = ot), _t;
        }
        Wt.exports = G;
      },
      17489: (Wt, Bt, r) => {
        var l = r(28383),
          F = r(22503),
          H = r(12507),
          it = r(83491),
          U = r(6238);
        function tt(G, lt, ct) {
          var at = it(G) ? l : F;
          return ct && U(G, lt, ct) && (lt = void 0), at(G, H(lt, 3));
        }
        Wt.exports = tt;
      },
      81639: (Wt, Bt, r) => {
        var l = r(25200),
          F = r(45323),
          H = l(F);
        Wt.exports = H;
      },
      45323: (Wt, Bt, r) => {
        var l = r(75509),
          F = r(12507),
          H = r(41703),
          it = Math.max;
        function U(tt, G, lt) {
          var ct = tt == null ? 0 : tt.length;
          if (!ct) return -1;
          var at = lt == null ? 0 : H(lt);
          return at < 0 && (at = it(ct + at, 0)), l(tt, F(G, 3), at);
        }
        Wt.exports = U;
      },
      21205: (Wt, Bt, r) => {
        var l = r(18174),
          F = r(67160);
        function H(it, U) {
          return l(F(it, U), 1);
        }
        Wt.exports = H;
      },
      23734: (Wt, Bt, r) => {
        var l = r(78714),
          F = r(34172),
          H = "[object Boolean]";
        function it(U) {
          return U === !0 || U === !1 || (F(U) && l(U) == H);
        }
        Wt.exports = it;
      },
      58782: (Wt, Bt, r) => {
        var l = r(16536);
        function F(H, it) {
          return l(H, it);
        }
        Wt.exports = F;
      },
      27367: (Wt, Bt, r) => {
        var l = r(2017);
        function F(H) {
          return l(H) && H != +H;
        }
        Wt.exports = F;
      },
      64609: (Wt) => {
        function Bt(r) {
          return r == null;
        }
        Wt.exports = Bt;
      },
      2017: (Wt, Bt, r) => {
        var l = r(78714),
          F = r(34172),
          H = "[object Number]";
        function it(U) {
          return typeof U == "number" || (F(U) && l(U) == H);
        }
        Wt.exports = it;
      },
      73912: (Wt) => {
        function Bt(r) {
          var l = r == null ? 0 : r.length;
          return l ? r[l - 1] : void 0;
        }
        Wt.exports = Bt;
      },
      90338: (Wt, Bt, r) => {
        var l = r(51458),
          F = r(17707),
          H = r(12507);
        function it(U, tt) {
          var G = {};
          return (
            (tt = H(tt, 3)),
            F(U, function (lt, ct, at) {
              l(G, ct, tt(lt, ct, at));
            }),
            G
          );
        }
        Wt.exports = it;
      },
      82544: (Wt, Bt, r) => {
        var l = r(16869),
          F = r(31517),
          H = r(91398);
        function it(U) {
          return U && U.length ? l(U, H, F) : void 0;
        }
        Wt.exports = it;
      },
      6702: (Wt, Bt, r) => {
        var l = r(16869),
          F = r(40106),
          H = r(91398);
        function it(U) {
          return U && U.length ? l(U, H, F) : void 0;
        }
        Wt.exports = it;
      },
      7204: (Wt) => {
        function Bt() {}
        Wt.exports = Bt;
      },
      26846: (Wt, Bt, r) => {
        var l = r(26467),
          F = function () {
            return l.Date.now();
          };
        Wt.exports = F;
      },
      50199: (Wt, Bt, r) => {
        var l = r(35966),
          F = l();
        Wt.exports = F;
      },
      49556: (Wt, Bt, r) => {
        var l = r(17214),
          F = r(12507),
          H = r(41190),
          it = r(83491),
          U = r(6238);
        function tt(G, lt, ct) {
          var at = it(G) ? l : H;
          return ct && U(G, lt, ct) && (lt = void 0), at(G, F(lt, 3));
        }
        Wt.exports = tt;
      },
      97825: (Wt, Bt, r) => {
        var l = r(18174),
          F = r(82401),
          H = r(5456),
          it = r(6238),
          U = H(function (tt, G) {
            if (tt == null) return [];
            var lt = G.length;
            return (
              lt > 1 && it(tt, G[0], G[1])
                ? (G = [])
                : lt > 2 && it(G[0], G[1], G[2]) && (G = [G[0]]),
              F(tt, l(G, 1), [])
            );
          });
        Wt.exports = U;
      },
      51504: (Wt, Bt, r) => {
        var l = r(18663),
          F = r(97827),
          H = "Expected a function";
        function it(U, tt, G) {
          var lt = !0,
            ct = !0;
          if (typeof U != "function") throw new TypeError(H);
          return (
            F(G) &&
              ((lt = "leading" in G ? !!G.leading : lt),
              (ct = "trailing" in G ? !!G.trailing : ct)),
            l(U, tt, { leading: lt, maxWait: tt, trailing: ct })
          );
        }
        Wt.exports = it;
      },
      5598: (Wt, Bt, r) => {
        var l = r(52352),
          F = 1 / 0,
          H = 17976931348623157e292;
        function it(U) {
          if (!U) return U === 0 ? U : 0;
          if (((U = l(U)), U === F || U === -F)) {
            var tt = U < 0 ? -1 : 1;
            return tt * H;
          }
          return U === U ? U : 0;
        }
        Wt.exports = it;
      },
      41703: (Wt, Bt, r) => {
        var l = r(5598);
        function F(H) {
          var it = l(H),
            U = it % 1;
          return it === it ? (U ? it - U : it) : 0;
        }
        Wt.exports = F;
      },
      52352: (Wt, Bt, r) => {
        var l = r(38846),
          F = r(97827),
          H = r(4036),
          it = NaN,
          U = /^[-+]0x[0-9a-f]+$/i,
          tt = /^0b[01]+$/i,
          G = /^0o[0-7]+$/i,
          lt = parseInt;
        function ct(at) {
          if (typeof at == "number") return at;
          if (H(at)) return it;
          if (F(at)) {
            var st = typeof at.valueOf == "function" ? at.valueOf() : at;
            at = F(st) ? st + "" : st;
          }
          if (typeof at != "string") return at === 0 ? at : +at;
          at = l(at);
          var V = tt.test(at);
          return V || G.test(at)
            ? lt(at.slice(2), V ? 2 : 8)
            : U.test(at)
              ? it
              : +at;
        }
        Wt.exports = ct;
      },
      17744: (Wt, Bt, r) => {
        var l = r(12507),
          F = r(3507);
        function H(it, U) {
          return it && it.length ? F(it, l(U, 2)) : [];
        }
        Wt.exports = H;
      },
      4842: (Wt, Bt, r) => {
        var l = r(94829),
          F = l("toUpperCase");
        Wt.exports = F;
      },
      38877: (Wt, Bt) => {
        "use strict";
        var r; /**
         * @license React
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var l = Symbol.for("react.element"),
          F = Symbol.for("react.portal"),
          H = Symbol.for("react.fragment"),
          it = Symbol.for("react.strict_mode"),
          U = Symbol.for("react.profiler"),
          tt = Symbol.for("react.provider"),
          G = Symbol.for("react.context"),
          lt = Symbol.for("react.server_context"),
          ct = Symbol.for("react.forward_ref"),
          at = Symbol.for("react.suspense"),
          st = Symbol.for("react.suspense_list"),
          V = Symbol.for("react.memo"),
          mt = Symbol.for("react.lazy"),
          et = Symbol.for("react.offscreen"),
          St;
        St = Symbol.for("react.module.reference");
        function Ft(nt) {
          if (typeof nt == "object" && nt !== null) {
            var te = nt.$$typeof;
            switch (te) {
              case l:
                switch (((nt = nt.type), nt)) {
                  case H:
                  case U:
                  case it:
                  case at:
                  case st:
                    return nt;
                  default:
                    switch (((nt = nt && nt.$$typeof), nt)) {
                      case lt:
                      case G:
                      case ct:
                      case mt:
                      case V:
                      case tt:
                        return nt;
                      default:
                        return te;
                    }
                }
              case F:
                return te;
            }
          }
        }
        (r = G),
          (r = tt),
          (r = l),
          (r = ct),
          (r = H),
          (r = mt),
          (r = V),
          (r = F),
          (r = U),
          (r = it),
          (r = at),
          (r = st),
          (r = function () {
            return !1;
          }),
          (r = function () {
            return !1;
          }),
          (Bt.isContextConsumer = function (nt) {
            return Ft(nt) === G;
          }),
          (r = function (nt) {
            return Ft(nt) === tt;
          }),
          (r = function (nt) {
            return typeof nt == "object" && nt !== null && nt.$$typeof === l;
          }),
          (r = function (nt) {
            return Ft(nt) === ct;
          }),
          (Bt.isFragment = function (nt) {
            return Ft(nt) === H;
          }),
          (r = function (nt) {
            return Ft(nt) === mt;
          }),
          (r = function (nt) {
            return Ft(nt) === V;
          }),
          (r = function (nt) {
            return Ft(nt) === F;
          }),
          (r = function (nt) {
            return Ft(nt) === U;
          }),
          (r = function (nt) {
            return Ft(nt) === it;
          }),
          (r = function (nt) {
            return Ft(nt) === at;
          }),
          (r = function (nt) {
            return Ft(nt) === st;
          }),
          (r = function (nt) {
            return (
              typeof nt == "string" ||
              typeof nt == "function" ||
              nt === H ||
              nt === U ||
              nt === it ||
              nt === at ||
              nt === st ||
              nt === et ||
              (typeof nt == "object" &&
                nt !== null &&
                (nt.$$typeof === mt ||
                  nt.$$typeof === V ||
                  nt.$$typeof === tt ||
                  nt.$$typeof === G ||
                  nt.$$typeof === ct ||
                  nt.$$typeof === St ||
                  nt.getModuleId !== void 0))
            );
          }),
          (r = Ft);
      },
      98193: (Wt, Bt, r) => {
        "use strict";
        Wt.exports = r(38877);
      },
      86356: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { Ay: () => ui });
        var l = r(90626),
          F = r(61410),
          H = r.n(F);
        const { getOwnPropertyNames: it, getOwnPropertySymbols: U } = Object,
          { hasOwnProperty: tt } = Object.prototype;
        function G(C, z) {
          return function (Dt, Lt, qt) {
            return C(Dt, Lt, qt) && z(Dt, Lt, qt);
          };
        }
        function lt(C) {
          return function (dt, Dt, Lt) {
            if (!dt || !Dt || typeof dt != "object" || typeof Dt != "object")
              return C(dt, Dt, Lt);
            const { cache: qt } = Lt,
              ce = qt.get(dt),
              be = qt.get(Dt);
            if (ce && be) return ce === Dt && be === dt;
            qt.set(dt, Dt), qt.set(Dt, dt);
            const Ee = C(dt, Dt, Lt);
            return qt.delete(dt), qt.delete(Dt), Ee;
          };
        }
        function ct(C) {
          return C?.[Symbol.toStringTag];
        }
        function at(C) {
          return it(C).concat(U(C));
        }
        const st = Object.hasOwn || ((C, z) => tt.call(C, z));
        function V(C, z) {
          return C === z || (!C && !z && C !== C && z !== z);
        }
        const mt = "__v",
          et = "__o",
          St = "_owner",
          { getOwnPropertyDescriptor: Ft, keys: nt } = Object;
        function te(C, z) {
          return (
            C.byteLength === z.byteLength &&
            N(new Uint8Array(C), new Uint8Array(z))
          );
        }
        function kt(C, z, dt) {
          let Dt = C.length;
          if (z.length !== Dt) return !1;
          for (; Dt-- > 0; )
            if (!dt.equals(C[Dt], z[Dt], Dt, Dt, C, z, dt)) return !1;
          return !0;
        }
        function Tt(C, z) {
          return (
            C.byteLength === z.byteLength &&
            N(
              new Uint8Array(C.buffer, C.byteOffset, C.byteLength),
              new Uint8Array(z.buffer, z.byteOffset, z.byteLength),
            )
          );
        }
        function vt(C, z) {
          return V(C.getTime(), z.getTime());
        }
        function I(C, z) {
          return (
            C.name === z.name &&
            C.message === z.message &&
            C.cause === z.cause &&
            C.stack === z.stack
          );
        }
        function m(C, z) {
          return C === z;
        }
        function S(C, z, dt) {
          const Dt = C.size;
          if (Dt !== z.size) return !1;
          if (!Dt) return !0;
          const Lt = new Array(Dt),
            qt = C.entries();
          let ce,
            be,
            Ee = 0;
          for (; (ce = qt.next()) && !ce.done; ) {
            const on = z.entries();
            let rn = !1,
              sn = 0;
            for (; (be = on.next()) && !be.done; ) {
              if (Lt[sn]) {
                sn++;
                continue;
              }
              const ln = ce.value,
                Bn = be.value;
              if (
                dt.equals(ln[0], Bn[0], Ee, sn, C, z, dt) &&
                dt.equals(ln[1], Bn[1], ln[0], Bn[0], C, z, dt)
              ) {
                rn = Lt[sn] = !0;
                break;
              }
              sn++;
            }
            if (!rn) return !1;
            Ee++;
          }
          return !0;
        }
        const g = V;
        function y(C, z, dt) {
          const Dt = nt(C);
          let Lt = Dt.length;
          if (nt(z).length !== Lt) return !1;
          for (; Lt-- > 0; ) if (!X(C, z, dt, Dt[Lt])) return !1;
          return !0;
        }
        function rt(C, z, dt) {
          const Dt = at(C);
          let Lt = Dt.length;
          if (at(z).length !== Lt) return !1;
          let qt, ce, be;
          for (; Lt-- > 0; )
            if (
              ((qt = Dt[Lt]),
              !X(C, z, dt, qt) ||
                ((ce = Ft(C, qt)),
                (be = Ft(z, qt)),
                (ce || be) &&
                  (!ce ||
                    !be ||
                    ce.configurable !== be.configurable ||
                    ce.enumerable !== be.enumerable ||
                    ce.writable !== be.writable)))
            )
              return !1;
          return !0;
        }
        function ot(C, z) {
          return V(C.valueOf(), z.valueOf());
        }
        function _t(C, z) {
          return C.source === z.source && C.flags === z.flags;
        }
        function j(C, z, dt) {
          const Dt = C.size;
          if (Dt !== z.size) return !1;
          if (!Dt) return !0;
          const Lt = new Array(Dt),
            qt = C.values();
          let ce, be;
          for (; (ce = qt.next()) && !ce.done; ) {
            const Ee = z.values();
            let on = !1,
              rn = 0;
            for (; (be = Ee.next()) && !be.done; ) {
              if (
                !Lt[rn] &&
                dt.equals(ce.value, be.value, ce.value, be.value, C, z, dt)
              ) {
                on = Lt[rn] = !0;
                break;
              }
              rn++;
            }
            if (!on) return !1;
          }
          return !0;
        }
        function N(C, z) {
          let dt = C.byteLength;
          if (z.byteLength !== dt || C.byteOffset !== z.byteOffset) return !1;
          for (; dt-- > 0; ) if (C[dt] !== z[dt]) return !1;
          return !0;
        }
        function M(C, z) {
          return (
            C.hostname === z.hostname &&
            C.pathname === z.pathname &&
            C.protocol === z.protocol &&
            C.port === z.port &&
            C.hash === z.hash &&
            C.username === z.username &&
            C.password === z.password
          );
        }
        function X(C, z, dt, Dt) {
          return (Dt === St || Dt === et || Dt === mt) &&
            (C.$$typeof || z.$$typeof)
            ? !0
            : st(z, Dt) && dt.equals(C[Dt], z[Dt], Dt, Dt, C, z, dt);
        }
        const v = "[object ArrayBuffer]",
          f = "[object Arguments]",
          E = "[object Boolean]",
          _ = "[object DataView]",
          A = "[object Date]",
          c = "[object Error]",
          P = "[object Map]",
          D = "[object Number]",
          x = "[object Object]",
          k = "[object RegExp]",
          Y = "[object Set]",
          J = "[object String]",
          Mt = {
            "[object Int8Array]": !0,
            "[object Uint8Array]": !0,
            "[object Uint8ClampedArray]": !0,
            "[object Int16Array]": !0,
            "[object Uint16Array]": !0,
            "[object Int32Array]": !0,
            "[object Uint32Array]": !0,
            "[object Float16Array]": !0,
            "[object Float32Array]": !0,
            "[object Float64Array]": !0,
            "[object BigInt64Array]": !0,
            "[object BigUint64Array]": !0,
          },
          q = "[object URL]",
          yt = Object.prototype.toString;
        function ft({
          areArrayBuffersEqual: C,
          areArraysEqual: z,
          areDataViewsEqual: dt,
          areDatesEqual: Dt,
          areErrorsEqual: Lt,
          areFunctionsEqual: qt,
          areMapsEqual: ce,
          areNumbersEqual: be,
          areObjectsEqual: Ee,
          arePrimitiveWrappersEqual: on,
          areRegExpsEqual: rn,
          areSetsEqual: sn,
          areTypedArraysEqual: ln,
          areUrlsEqual: Bn,
          unknownTagComparators: Un,
        }) {
          return function (Ne, He, cn) {
            if (Ne === He) return !0;
            if (Ne == null || He == null) return !1;
            const Gn = typeof Ne;
            if (Gn !== typeof He) return !1;
            if (Gn !== "object")
              return Gn === "number"
                ? be(Ne, He, cn)
                : Gn === "function"
                  ? qt(Ne, He, cn)
                  : !1;
            const gn = Ne.constructor;
            if (gn !== He.constructor) return !1;
            if (gn === Object) return Ee(Ne, He, cn);
            if (Array.isArray(Ne)) return z(Ne, He, cn);
            if (gn === Date) return Dt(Ne, He, cn);
            if (gn === RegExp) return rn(Ne, He, cn);
            if (gn === Map) return ce(Ne, He, cn);
            if (gn === Set) return sn(Ne, He, cn);
            const In = yt.call(Ne);
            if (In === A) return Dt(Ne, He, cn);
            if (In === k) return rn(Ne, He, cn);
            if (In === P) return ce(Ne, He, cn);
            if (In === Y) return sn(Ne, He, cn);
            if (In === x)
              return (
                typeof Ne.then != "function" &&
                typeof He.then != "function" &&
                Ee(Ne, He, cn)
              );
            if (In === q) return Bn(Ne, He, cn);
            if (In === c) return Lt(Ne, He, cn);
            if (In === f) return Ee(Ne, He, cn);
            if (Mt[In]) return ln(Ne, He, cn);
            if (In === v) return C(Ne, He, cn);
            if (In === _) return dt(Ne, He, cn);
            if (In === E || In === D || In === J) return on(Ne, He, cn);
            if (Un) {
              let Xt = Un[In];
              if (!Xt) {
                const Le = ct(Ne);
                Le && (Xt = Un[Le]);
              }
              if (Xt) return Xt(Ne, He, cn);
            }
            return !1;
          };
        }
        function bt({ circular: C, createCustomConfig: z, strict: dt }) {
          let Dt = {
            areArrayBuffersEqual: te,
            areArraysEqual: dt ? rt : kt,
            areDataViewsEqual: Tt,
            areDatesEqual: vt,
            areErrorsEqual: I,
            areFunctionsEqual: m,
            areMapsEqual: dt ? G(S, rt) : S,
            areNumbersEqual: g,
            areObjectsEqual: dt ? rt : y,
            arePrimitiveWrappersEqual: ot,
            areRegExpsEqual: _t,
            areSetsEqual: dt ? G(j, rt) : j,
            areTypedArraysEqual: dt ? G(N, rt) : N,
            areUrlsEqual: M,
            unknownTagComparators: void 0,
          };
          if ((z && (Dt = Object.assign({}, Dt, z(Dt))), C)) {
            const Lt = lt(Dt.areArraysEqual),
              qt = lt(Dt.areMapsEqual),
              ce = lt(Dt.areObjectsEqual),
              be = lt(Dt.areSetsEqual);
            Dt = Object.assign({}, Dt, {
              areArraysEqual: Lt,
              areMapsEqual: qt,
              areObjectsEqual: ce,
              areSetsEqual: be,
            });
          }
          return Dt;
        }
        function Ut(C) {
          return function (z, dt, Dt, Lt, qt, ce, be) {
            return C(z, dt, be);
          };
        }
        function Ht({
          circular: C,
          comparator: z,
          createState: dt,
          equals: Dt,
          strict: Lt,
        }) {
          if (dt)
            return function (be, Ee) {
              const { cache: on = C ? new WeakMap() : void 0, meta: rn } = dt();
              return z(be, Ee, { cache: on, equals: Dt, meta: rn, strict: Lt });
            };
          if (C)
            return function (be, Ee) {
              return z(be, Ee, {
                cache: new WeakMap(),
                equals: Dt,
                meta: void 0,
                strict: Lt,
              });
            };
          const qt = { cache: void 0, equals: Dt, meta: void 0, strict: Lt };
          return function (be, Ee) {
            return z(be, Ee, qt);
          };
        }
        const ut = zt(),
          o = zt({ strict: !0 }),
          h = zt({ circular: !0 }),
          O = zt({ circular: !0, strict: !0 }),
          d = zt({ createInternalComparator: () => V }),
          R = zt({ strict: !0, createInternalComparator: () => V }),
          Q = zt({ circular: !0, createInternalComparator: () => V }),
          wt = zt({
            circular: !0,
            createInternalComparator: () => V,
            strict: !0,
          });
        function zt(C = {}) {
          const {
              circular: z = !1,
              createInternalComparator: dt,
              createState: Dt,
              strict: Lt = !1,
            } = C,
            qt = bt(C),
            ce = ft(qt),
            be = dt ? dt(ce) : Ut(ce);
          return Ht({
            circular: z,
            comparator: ce,
            createState: Dt,
            equals: be,
            strict: Lt,
          });
        }
        function Vt(C) {
          typeof requestAnimationFrame < "u" && requestAnimationFrame(C);
        }
        function se(C) {
          var z =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 0,
            dt = -1,
            Dt = function Lt(qt) {
              dt < 0 && (dt = qt), qt - dt > z ? (C(qt), (dt = -1)) : Vt(Lt);
            };
          requestAnimationFrame(Dt);
        }
        function K(C) {
          "@babel/helpers - typeof";
          return (
            (K =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (z) {
                    return typeof z;
                  }
                : function (z) {
                    return z &&
                      typeof Symbol == "function" &&
                      z.constructor === Symbol &&
                      z !== Symbol.prototype
                      ? "symbol"
                      : typeof z;
                  }),
            K(C)
          );
        }
        function Z(C) {
          return Jt(C) || $t(C) || xt(C) || L();
        }
        function L() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function xt(C, z) {
          if (C) {
            if (typeof C == "string") return Ot(C, z);
            var dt = Object.prototype.toString.call(C).slice(8, -1);
            if (
              (dt === "Object" && C.constructor && (dt = C.constructor.name),
              dt === "Map" || dt === "Set")
            )
              return Array.from(C);
            if (
              dt === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dt)
            )
              return Ot(C, z);
          }
        }
        function Ot(C, z) {
          (z == null || z > C.length) && (z = C.length);
          for (var dt = 0, Dt = new Array(z); dt < z; dt++) Dt[dt] = C[dt];
          return Dt;
        }
        function $t(C) {
          if (
            (typeof Symbol < "u" && C[Symbol.iterator] != null) ||
            C["@@iterator"] != null
          )
            return Array.from(C);
        }
        function Jt(C) {
          if (Array.isArray(C)) return C;
        }
        function le() {
          var C = {},
            z = function () {
              return null;
            },
            dt = !1,
            Dt = function Lt(qt) {
              if (!dt) {
                if (Array.isArray(qt)) {
                  if (!qt.length) return;
                  var ce = qt,
                    be = Z(ce),
                    Ee = be[0],
                    on = be.slice(1);
                  if (typeof Ee == "number") {
                    se(Lt.bind(null, on), Ee);
                    return;
                  }
                  Lt(Ee), se(Lt.bind(null, on));
                  return;
                }
                K(qt) === "object" && ((C = qt), z(C)),
                  typeof qt == "function" && qt();
              }
            };
          return {
            stop: function () {
              dt = !0;
            },
            start: function (qt) {
              (dt = !1), Dt(qt);
            },
            subscribe: function (qt) {
              return (
                (z = qt),
                function () {
                  z = function () {
                    return null;
                  };
                }
              );
            },
          };
        }
        function W(C) {
          "@babel/helpers - typeof";
          return (
            (W =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (z) {
                    return typeof z;
                  }
                : function (z) {
                    return z &&
                      typeof Symbol == "function" &&
                      z.constructor === Symbol &&
                      z !== Symbol.prototype
                      ? "symbol"
                      : typeof z;
                  }),
            W(C)
          );
        }
        function $(C, z) {
          var dt = Object.keys(C);
          if (Object.getOwnPropertySymbols) {
            var Dt = Object.getOwnPropertySymbols(C);
            z &&
              (Dt = Dt.filter(function (Lt) {
                return Object.getOwnPropertyDescriptor(C, Lt).enumerable;
              })),
              dt.push.apply(dt, Dt);
          }
          return dt;
        }
        function Ct(C) {
          for (var z = 1; z < arguments.length; z++) {
            var dt = arguments[z] != null ? arguments[z] : {};
            z % 2
              ? $(Object(dt), !0).forEach(function (Dt) {
                  Pt(C, Dt, dt[Dt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    C,
                    Object.getOwnPropertyDescriptors(dt),
                  )
                : $(Object(dt)).forEach(function (Dt) {
                    Object.defineProperty(
                      C,
                      Dt,
                      Object.getOwnPropertyDescriptor(dt, Dt),
                    );
                  });
          }
          return C;
        }
        function Pt(C, z, dt) {
          return (
            (z = ee(z)),
            z in C
              ? Object.defineProperty(C, z, {
                  value: dt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (C[z] = dt),
            C
          );
        }
        function ee(C) {
          var z = Ie(C, "string");
          return W(z) === "symbol" ? z : String(z);
        }
        function Ie(C, z) {
          if (W(C) !== "object" || C === null) return C;
          var dt = C[Symbol.toPrimitive];
          if (dt !== void 0) {
            var Dt = dt.call(C, z || "default");
            if (W(Dt) !== "object") return Dt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (z === "string" ? String : Number)(C);
        }
        var Ge = function (z, dt) {
            return [Object.keys(z), Object.keys(dt)].reduce(function (Dt, Lt) {
              return Dt.filter(function (qt) {
                return Lt.includes(qt);
              });
            });
          },
          we = function (z) {
            return z;
          },
          We = function (z) {
            return z.replace(/([A-Z])/g, function (dt) {
              return "-".concat(dt.toLowerCase());
            });
          },
          Je = function () {
            var z;
            (z = console).log.apply(z, arguments);
          },
          Xe = function (z) {
            return function (dt) {
              return Je(z, dt), dt;
            };
          },
          hn = function (z, dt) {
            return function () {
              for (
                var Dt = arguments.length, Lt = new Array(Dt), qt = 0;
                qt < Dt;
                qt++
              )
                Lt[qt] = arguments[qt];
              var ce = dt.apply(void 0, Lt),
                be = z || dt.name || "anonymous function",
                Ee = "(".concat(Lt.map(JSON.stringify).join(", "), ")");
              return (
                Je(
                  ""
                    .concat(be, ": ")
                    .concat(Ee, " => ")
                    .concat(JSON.stringify(ce)),
                ),
                ce
              );
            };
          },
          bn = function (z, dt) {
            return Object.keys(dt).reduce(function (Dt, Lt) {
              return Ct(Ct({}, Dt), {}, Pt({}, Lt, z(Lt, dt[Lt])));
            }, {});
          },
          mn = function (z, dt, Dt) {
            return z
              .map(function (Lt) {
                return "".concat(We(Lt), " ").concat(dt, "ms ").concat(Dt);
              })
              .join(",");
          },
          Sn = !1,
          xn = function (z, dt, Dt, Lt, qt, ce, be, Ee) {
            if (
              Sn &&
              typeof console < "u" &&
              console.warn &&
              (dt === void 0 &&
                console.warn("LogUtils requires an error message argument"),
              !z)
            )
              if (dt === void 0)
                console.warn(
                  "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
                );
              else {
                var on = [Dt, Lt, qt, ce, be, Ee],
                  rn = 0;
                console.warn(
                  dt.replace(/%s/g, function () {
                    return on[rn++];
                  }),
                );
              }
          };
        function wn(C, z) {
          return Hn(C) || jn(C, z) || ur(C, z) || Jn();
        }
        function Jn() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function jn(C, z) {
          var dt =
            C == null
              ? null
              : (typeof Symbol < "u" && C[Symbol.iterator]) || C["@@iterator"];
          if (dt != null) {
            var Dt,
              Lt,
              qt,
              ce,
              be = [],
              Ee = !0,
              on = !1;
            try {
              if (((qt = (dt = dt.call(C)).next), z === 0)) {
                if (Object(dt) !== dt) return;
                Ee = !1;
              } else
                for (
                  ;
                  !(Ee = (Dt = qt.call(dt)).done) &&
                  (be.push(Dt.value), be.length !== z);
                  Ee = !0
                );
            } catch (rn) {
              (on = !0), (Lt = rn);
            } finally {
              try {
                if (
                  !Ee &&
                  dt.return != null &&
                  ((ce = dt.return()), Object(ce) !== ce)
                )
                  return;
              } finally {
                if (on) throw Lt;
              }
            }
            return be;
          }
        }
        function Hn(C) {
          if (Array.isArray(C)) return C;
        }
        function sr(C) {
          return At(C) || Yn(C) || ur(C) || cr();
        }
        function cr() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function ur(C, z) {
          if (C) {
            if (typeof C == "string") return gt(C, z);
            var dt = Object.prototype.toString.call(C).slice(8, -1);
            if (
              (dt === "Object" && C.constructor && (dt = C.constructor.name),
              dt === "Map" || dt === "Set")
            )
              return Array.from(C);
            if (
              dt === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dt)
            )
              return gt(C, z);
          }
        }
        function Yn(C) {
          if (
            (typeof Symbol < "u" && C[Symbol.iterator] != null) ||
            C["@@iterator"] != null
          )
            return Array.from(C);
        }
        function At(C) {
          if (Array.isArray(C)) return gt(C);
        }
        function gt(C, z) {
          (z == null || z > C.length) && (z = C.length);
          for (var dt = 0, Dt = new Array(z); dt < z; dt++) Dt[dt] = C[dt];
          return Dt;
        }
        var Rt = 1e-4,
          It = function (z, dt) {
            return [0, 3 * z, 3 * dt - 6 * z, 3 * z - 3 * dt + 1];
          },
          ne = function (z, dt) {
            return z
              .map(function (Dt, Lt) {
                return Dt * Math.pow(dt, Lt);
              })
              .reduce(function (Dt, Lt) {
                return Dt + Lt;
              });
          },
          xe = function (z, dt) {
            return function (Dt) {
              var Lt = It(z, dt);
              return ne(Lt, Dt);
            };
          },
          Ce = function (z, dt) {
            return function (Dt) {
              var Lt = It(z, dt),
                qt = [].concat(
                  sr(
                    Lt.map(function (ce, be) {
                      return ce * be;
                    }).slice(1),
                  ),
                  [0],
                );
              return ne(qt, Dt);
            };
          },
          ke = function () {
            for (
              var z = arguments.length, dt = new Array(z), Dt = 0;
              Dt < z;
              Dt++
            )
              dt[Dt] = arguments[Dt];
            var Lt = dt[0],
              qt = dt[1],
              ce = dt[2],
              be = dt[3];
            if (dt.length === 1)
              switch (dt[0]) {
                case "linear":
                  (Lt = 0), (qt = 0), (ce = 1), (be = 1);
                  break;
                case "ease":
                  (Lt = 0.25), (qt = 0.1), (ce = 0.25), (be = 1);
                  break;
                case "ease-in":
                  (Lt = 0.42), (qt = 0), (ce = 1), (be = 1);
                  break;
                case "ease-out":
                  (Lt = 0.42), (qt = 0), (ce = 0.58), (be = 1);
                  break;
                case "ease-in-out":
                  (Lt = 0), (qt = 0), (ce = 0.58), (be = 1);
                  break;
                default: {
                  var Ee = dt[0].split("(");
                  if (
                    Ee[0] === "cubic-bezier" &&
                    Ee[1].split(")")[0].split(",").length === 4
                  ) {
                    var on = Ee[1]
                        .split(")")[0]
                        .split(",")
                        .map(function (Ne) {
                          return parseFloat(Ne);
                        }),
                      rn = wn(on, 4);
                    (Lt = rn[0]), (qt = rn[1]), (ce = rn[2]), (be = rn[3]);
                  } else
                    xn(
                      !1,
                      "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",
                      dt,
                    );
                }
              }
            xn(
              [Lt, ce, qt, be].every(function (Ne) {
                return typeof Ne == "number" && Ne >= 0 && Ne <= 1;
              }),
              "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s",
              dt,
            );
            var sn = xe(Lt, ce),
              ln = xe(qt, be),
              Bn = Ce(Lt, ce),
              Un = function (He) {
                return He > 1 ? 1 : He < 0 ? 0 : He;
              },
              Nn = function (He) {
                for (var cn = He > 1 ? 1 : He, Gn = cn, gn = 0; gn < 8; ++gn) {
                  var In = sn(Gn) - cn,
                    Xt = Bn(Gn);
                  if (Math.abs(In - cn) < Rt || Xt < Rt) return ln(Gn);
                  Gn = Un(Gn - In / Xt);
                }
                return ln(Gn);
              };
            return (Nn.isStepper = !1), Nn;
          },
          Ke = function () {
            var z =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {},
              dt = z.stiff,
              Dt = dt === void 0 ? 100 : dt,
              Lt = z.damping,
              qt = Lt === void 0 ? 8 : Lt,
              ce = z.dt,
              be = ce === void 0 ? 17 : ce,
              Ee = function (rn, sn, ln) {
                var Bn = -(rn - sn) * Dt,
                  Un = ln * qt,
                  Nn = ln + ((Bn - Un) * be) / 1e3,
                  Ne = (ln * be) / 1e3 + rn;
                return Math.abs(Ne - sn) < Rt && Math.abs(Nn) < Rt
                  ? [sn, 0]
                  : [Ne, Nn];
              };
            return (Ee.isStepper = !0), (Ee.dt = be), Ee;
          },
          Fe = function () {
            for (
              var z = arguments.length, dt = new Array(z), Dt = 0;
              Dt < z;
              Dt++
            )
              dt[Dt] = arguments[Dt];
            var Lt = dt[0];
            if (typeof Lt == "string")
              switch (Lt) {
                case "ease":
                case "ease-in-out":
                case "ease-out":
                case "ease-in":
                case "linear":
                  return ke(Lt);
                case "spring":
                  return Ke();
                default:
                  if (Lt.split("(")[0] === "cubic-bezier") return ke(Lt);
                  xn(
                    !1,
                    "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",
                    dt,
                  );
              }
            return typeof Lt == "function"
              ? Lt
              : (xn(
                  !1,
                  "[configEasing]: first argument type should be function or string, instead received %s",
                  dt,
                ),
                null);
          };
        function _e(C) {
          "@babel/helpers - typeof";
          return (
            (_e =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (z) {
                    return typeof z;
                  }
                : function (z) {
                    return z &&
                      typeof Symbol == "function" &&
                      z.constructor === Symbol &&
                      z !== Symbol.prototype
                      ? "symbol"
                      : typeof z;
                  }),
            _e(C)
          );
        }
        function Re(C) {
          return An(C) || un(C) || $n(C) || nn();
        }
        function nn() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function un(C) {
          if (
            (typeof Symbol < "u" && C[Symbol.iterator] != null) ||
            C["@@iterator"] != null
          )
            return Array.from(C);
        }
        function An(C) {
          if (Array.isArray(C)) return Qn(C);
        }
        function Pn(C, z) {
          var dt = Object.keys(C);
          if (Object.getOwnPropertySymbols) {
            var Dt = Object.getOwnPropertySymbols(C);
            z &&
              (Dt = Dt.filter(function (Lt) {
                return Object.getOwnPropertyDescriptor(C, Lt).enumerable;
              })),
              dt.push.apply(dt, Dt);
          }
          return dt;
        }
        function tn(C) {
          for (var z = 1; z < arguments.length; z++) {
            var dt = arguments[z] != null ? arguments[z] : {};
            z % 2
              ? Pn(Object(dt), !0).forEach(function (Dt) {
                  Rn(C, Dt, dt[Dt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    C,
                    Object.getOwnPropertyDescriptors(dt),
                  )
                : Pn(Object(dt)).forEach(function (Dt) {
                    Object.defineProperty(
                      C,
                      Dt,
                      Object.getOwnPropertyDescriptor(dt, Dt),
                    );
                  });
          }
          return C;
        }
        function Rn(C, z, dt) {
          return (
            (z = En(z)),
            z in C
              ? Object.defineProperty(C, z, {
                  value: dt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (C[z] = dt),
            C
          );
        }
        function En(C) {
          var z = Tn(C, "string");
          return _e(z) === "symbol" ? z : String(z);
        }
        function Tn(C, z) {
          if (_e(C) !== "object" || C === null) return C;
          var dt = C[Symbol.toPrimitive];
          if (dt !== void 0) {
            var Dt = dt.call(C, z || "default");
            if (_e(Dt) !== "object") return Dt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (z === "string" ? String : Number)(C);
        }
        function Mn(C, z) {
          return dr(C) || ir(C, z) || $n(C, z) || Cn();
        }
        function Cn() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function $n(C, z) {
          if (C) {
            if (typeof C == "string") return Qn(C, z);
            var dt = Object.prototype.toString.call(C).slice(8, -1);
            if (
              (dt === "Object" && C.constructor && (dt = C.constructor.name),
              dt === "Map" || dt === "Set")
            )
              return Array.from(C);
            if (
              dt === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dt)
            )
              return Qn(C, z);
          }
        }
        function Qn(C, z) {
          (z == null || z > C.length) && (z = C.length);
          for (var dt = 0, Dt = new Array(z); dt < z; dt++) Dt[dt] = C[dt];
          return Dt;
        }
        function ir(C, z) {
          var dt =
            C == null
              ? null
              : (typeof Symbol < "u" && C[Symbol.iterator]) || C["@@iterator"];
          if (dt != null) {
            var Dt,
              Lt,
              qt,
              ce,
              be = [],
              Ee = !0,
              on = !1;
            try {
              if (((qt = (dt = dt.call(C)).next), z === 0)) {
                if (Object(dt) !== dt) return;
                Ee = !1;
              } else
                for (
                  ;
                  !(Ee = (Dt = qt.call(dt)).done) &&
                  (be.push(Dt.value), be.length !== z);
                  Ee = !0
                );
            } catch (rn) {
              (on = !0), (Lt = rn);
            } finally {
              try {
                if (
                  !Ee &&
                  dt.return != null &&
                  ((ce = dt.return()), Object(ce) !== ce)
                )
                  return;
              } finally {
                if (on) throw Lt;
              }
            }
            return be;
          }
        }
        function dr(C) {
          if (Array.isArray(C)) return C;
        }
        var lr = function (z, dt, Dt) {
            return z + (dt - z) * Dt;
          },
          tr = function (z) {
            var dt = z.from,
              Dt = z.to;
            return dt !== Dt;
          },
          er = function C(z, dt, Dt) {
            var Lt = bn(function (qt, ce) {
              if (tr(ce)) {
                var be = z(ce.from, ce.to, ce.velocity),
                  Ee = Mn(be, 2),
                  on = Ee[0],
                  rn = Ee[1];
                return tn(tn({}, ce), {}, { from: on, velocity: rn });
              }
              return ce;
            }, dt);
            return Dt < 1
              ? bn(function (qt, ce) {
                  return tr(ce)
                    ? tn(
                        tn({}, ce),
                        {},
                        {
                          velocity: lr(ce.velocity, Lt[qt].velocity, Dt),
                          from: lr(ce.from, Lt[qt].from, Dt),
                        },
                      )
                    : ce;
                }, dt)
              : C(z, Lt, Dt - 1);
          };
        const fr = function (C, z, dt, Dt, Lt) {
          var qt = Ge(C, z),
            ce = qt.reduce(function (Ne, He) {
              return tn(tn({}, Ne), {}, Rn({}, He, [C[He], z[He]]));
            }, {}),
            be = qt.reduce(function (Ne, He) {
              return tn(
                tn({}, Ne),
                {},
                Rn({}, He, { from: C[He], velocity: 0, to: z[He] }),
              );
            }, {}),
            Ee = -1,
            on,
            rn,
            sn = function () {
              return null;
            },
            ln = function () {
              return bn(function (He, cn) {
                return cn.from;
              }, be);
            },
            Bn = function () {
              return !Object.values(be).filter(tr).length;
            },
            Un = function (He) {
              on || (on = He);
              var cn = He - on,
                Gn = cn / dt.dt;
              (be = er(dt, be, Gn)),
                Lt(tn(tn(tn({}, C), z), ln(be))),
                (on = He),
                Bn() || (Ee = requestAnimationFrame(sn));
            },
            Nn = function (He) {
              rn || (rn = He);
              var cn = (He - rn) / Dt,
                Gn = bn(function (In, Xt) {
                  return lr.apply(void 0, Re(Xt).concat([dt(cn)]));
                }, ce);
              if ((Lt(tn(tn(tn({}, C), z), Gn)), cn < 1))
                Ee = requestAnimationFrame(sn);
              else {
                var gn = bn(function (In, Xt) {
                  return lr.apply(void 0, Re(Xt).concat([dt(1)]));
                }, ce);
                Lt(tn(tn(tn({}, C), z), gn));
              }
            };
          return (
            (sn = dt.isStepper ? Un : Nn),
            function () {
              return (
                requestAnimationFrame(sn),
                function () {
                  cancelAnimationFrame(Ee);
                }
              );
            }
          );
        };
        function pr(C) {
          "@babel/helpers - typeof";
          return (
            (pr =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (z) {
                    return typeof z;
                  }
                : function (z) {
                    return z &&
                      typeof Symbol == "function" &&
                      z.constructor === Symbol &&
                      z !== Symbol.prototype
                      ? "symbol"
                      : typeof z;
                  }),
            pr(C)
          );
        }
        var Pr = [
          "children",
          "begin",
          "duration",
          "attributeName",
          "easing",
          "isActive",
          "steps",
          "from",
          "to",
          "canBegin",
          "onAnimationEnd",
          "shouldReAnimate",
          "onAnimationReStart",
        ];
        function xr(C, z) {
          if (C == null) return {};
          var dt = vi(C, z),
            Dt,
            Lt;
          if (Object.getOwnPropertySymbols) {
            var qt = Object.getOwnPropertySymbols(C);
            for (Lt = 0; Lt < qt.length; Lt++)
              (Dt = qt[Lt]),
                !(z.indexOf(Dt) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(C, Dt) &&
                  (dt[Dt] = C[Dt]);
          }
          return dt;
        }
        function vi(C, z) {
          if (C == null) return {};
          var dt = {},
            Dt = Object.keys(C),
            Lt,
            qt;
          for (qt = 0; qt < Dt.length; qt++)
            (Lt = Dt[qt]), !(z.indexOf(Lt) >= 0) && (dt[Lt] = C[Lt]);
          return dt;
        }
        function ii(C) {
          return ji(C) || Di(C) || Mi(C) || Ti();
        }
        function Ti() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Mi(C, z) {
          if (C) {
            if (typeof C == "string") return zr(C, z);
            var dt = Object.prototype.toString.call(C).slice(8, -1);
            if (
              (dt === "Object" && C.constructor && (dt = C.constructor.name),
              dt === "Map" || dt === "Set")
            )
              return Array.from(C);
            if (
              dt === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dt)
            )
              return zr(C, z);
          }
        }
        function Di(C) {
          if (
            (typeof Symbol < "u" && C[Symbol.iterator] != null) ||
            C["@@iterator"] != null
          )
            return Array.from(C);
        }
        function ji(C) {
          if (Array.isArray(C)) return zr(C);
        }
        function zr(C, z) {
          (z == null || z > C.length) && (z = C.length);
          for (var dt = 0, Dt = new Array(z); dt < z; dt++) Dt[dt] = C[dt];
          return Dt;
        }
        function $r(C, z) {
          var dt = Object.keys(C);
          if (Object.getOwnPropertySymbols) {
            var Dt = Object.getOwnPropertySymbols(C);
            z &&
              (Dt = Dt.filter(function (Lt) {
                return Object.getOwnPropertyDescriptor(C, Lt).enumerable;
              })),
              dt.push.apply(dt, Dt);
          }
          return dt;
        }
        function hr(C) {
          for (var z = 1; z < arguments.length; z++) {
            var dt = arguments[z] != null ? arguments[z] : {};
            z % 2
              ? $r(Object(dt), !0).forEach(function (Dt) {
                  Er(C, Dt, dt[Dt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    C,
                    Object.getOwnPropertyDescriptors(dt),
                  )
                : $r(Object(dt)).forEach(function (Dt) {
                    Object.defineProperty(
                      C,
                      Dt,
                      Object.getOwnPropertyDescriptor(dt, Dt),
                    );
                  });
          }
          return C;
        }
        function Er(C, z, dt) {
          return (
            (z = Vr(z)),
            z in C
              ? Object.defineProperty(C, z, {
                  value: dt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (C[z] = dt),
            C
          );
        }
        function yi(C, z) {
          if (!(C instanceof z))
            throw new TypeError("Cannot call a class as a function");
        }
        function Hr(C, z) {
          for (var dt = 0; dt < z.length; dt++) {
            var Dt = z[dt];
            (Dt.enumerable = Dt.enumerable || !1),
              (Dt.configurable = !0),
              "value" in Dt && (Dt.writable = !0),
              Object.defineProperty(C, Vr(Dt.key), Dt);
          }
        }
        function Tr(C, z, dt) {
          return (
            z && Hr(C.prototype, z),
            dt && Hr(C, dt),
            Object.defineProperty(C, "prototype", { writable: !1 }),
            C
          );
        }
        function Vr(C) {
          var z = _r(C, "string");
          return pr(z) === "symbol" ? z : String(z);
        }
        function _r(C, z) {
          if (pr(C) !== "object" || C === null) return C;
          var dt = C[Symbol.toPrimitive];
          if (dt !== void 0) {
            var Dt = dt.call(C, z || "default");
            if (pr(Dt) !== "object") return Dt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (z === "string" ? String : Number)(C);
        }
        function Ci(C, z) {
          if (typeof z != "function" && z !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (C.prototype = Object.create(z && z.prototype, {
            constructor: { value: C, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(C, "prototype", { writable: !1 }),
            z && ai(C, z);
        }
        function ai(C, z) {
          return (
            (ai = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (Dt, Lt) {
                  return (Dt.__proto__ = Lt), Dt;
                }),
            ai(C, z)
          );
        }
        function oi(C) {
          var z = mi();
          return function () {
            var Dt = Xr(C),
              Lt;
            if (z) {
              var qt = Xr(this).constructor;
              Lt = Reflect.construct(Dt, arguments, qt);
            } else Lt = Dt.apply(this, arguments);
            return Rr(this, Lt);
          };
        }
        function Rr(C, z) {
          if (z && (pr(z) === "object" || typeof z == "function")) return z;
          if (z !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Gr(C);
        }
        function Gr(C) {
          if (C === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return C;
        }
        function mi() {
          if (
            typeof Reflect > "u" ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch {
            return !1;
          }
        }
        function Xr(C) {
          return (
            (Xr = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (dt) {
                  return dt.__proto__ || Object.getPrototypeOf(dt);
                }),
            Xr(C)
          );
        }
        var vr = (function (C) {
          Ci(dt, C);
          var z = oi(dt);
          function dt(Dt, Lt) {
            var qt;
            yi(this, dt), (qt = z.call(this, Dt, Lt));
            var ce = qt.props,
              be = ce.isActive,
              Ee = ce.attributeName,
              on = ce.from,
              rn = ce.to,
              sn = ce.steps,
              ln = ce.children,
              Bn = ce.duration;
            if (
              ((qt.handleStyleChange = qt.handleStyleChange.bind(Gr(qt))),
              (qt.changeStyle = qt.changeStyle.bind(Gr(qt))),
              !be || Bn <= 0)
            )
              return (
                (qt.state = { style: {} }),
                typeof ln == "function" && (qt.state = { style: rn }),
                Rr(qt)
              );
            if (sn && sn.length) qt.state = { style: sn[0].style };
            else if (on) {
              if (typeof ln == "function")
                return (qt.state = { style: on }), Rr(qt);
              qt.state = { style: Ee ? Er({}, Ee, on) : on };
            } else qt.state = { style: {} };
            return qt;
          }
          return (
            Tr(dt, [
              {
                key: "componentDidMount",
                value: function () {
                  var Lt = this.props,
                    qt = Lt.isActive,
                    ce = Lt.canBegin;
                  (this.mounted = !0),
                    !(!qt || !ce) && this.runAnimation(this.props);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (Lt) {
                  var qt = this.props,
                    ce = qt.isActive,
                    be = qt.canBegin,
                    Ee = qt.attributeName,
                    on = qt.shouldReAnimate,
                    rn = qt.to,
                    sn = qt.from,
                    ln = this.state.style;
                  if (be) {
                    if (!ce) {
                      var Bn = { style: Ee ? Er({}, Ee, rn) : rn };
                      this.state &&
                        ln &&
                        ((Ee && ln[Ee] !== rn) || (!Ee && ln !== rn)) &&
                        this.setState(Bn);
                      return;
                    }
                    if (!(ut(Lt.to, rn) && Lt.canBegin && Lt.isActive)) {
                      var Un = !Lt.canBegin || !Lt.isActive;
                      this.manager && this.manager.stop(),
                        this.stopJSAnimation && this.stopJSAnimation();
                      var Nn = Un || on ? sn : Lt.to;
                      if (this.state && ln) {
                        var Ne = { style: Ee ? Er({}, Ee, Nn) : Nn };
                        ((Ee && ln[Ee] !== Nn) || (!Ee && ln !== Nn)) &&
                          this.setState(Ne);
                      }
                      this.runAnimation(
                        hr(hr({}, this.props), {}, { from: Nn, begin: 0 }),
                      );
                    }
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                  var Lt = this.props.onAnimationEnd;
                  this.unSubscribe && this.unSubscribe(),
                    this.manager &&
                      (this.manager.stop(), (this.manager = null)),
                    this.stopJSAnimation && this.stopJSAnimation(),
                    Lt && Lt();
                },
              },
              {
                key: "handleStyleChange",
                value: function (Lt) {
                  this.changeStyle(Lt);
                },
              },
              {
                key: "changeStyle",
                value: function (Lt) {
                  this.mounted && this.setState({ style: Lt });
                },
              },
              {
                key: "runJSAnimation",
                value: function (Lt) {
                  var qt = this,
                    ce = Lt.from,
                    be = Lt.to,
                    Ee = Lt.duration,
                    on = Lt.easing,
                    rn = Lt.begin,
                    sn = Lt.onAnimationEnd,
                    ln = Lt.onAnimationStart,
                    Bn = fr(ce, be, Fe(on), Ee, this.changeStyle),
                    Un = function () {
                      qt.stopJSAnimation = Bn();
                    };
                  this.manager.start([ln, rn, Un, Ee, sn]);
                },
              },
              {
                key: "runStepAnimation",
                value: function (Lt) {
                  var qt = this,
                    ce = Lt.steps,
                    be = Lt.begin,
                    Ee = Lt.onAnimationStart,
                    on = ce[0],
                    rn = on.style,
                    sn = on.duration,
                    ln = sn === void 0 ? 0 : sn,
                    Bn = function (Nn, Ne, He) {
                      if (He === 0) return Nn;
                      var cn = Ne.duration,
                        Gn = Ne.easing,
                        gn = Gn === void 0 ? "ease" : Gn,
                        In = Ne.style,
                        Xt = Ne.properties,
                        Le = Ne.onAnimationEnd,
                        Br = He > 0 ? ce[He - 1] : Ne,
                        Dr = Xt || Object.keys(In);
                      if (typeof gn == "function" || gn === "spring")
                        return [].concat(ii(Nn), [
                          qt.runJSAnimation.bind(qt, {
                            from: Br.style,
                            to: In,
                            duration: cn,
                            easing: gn,
                          }),
                          cn,
                        ]);
                      var gi = mn(Dr, cn, gn),
                        Nr = hr(
                          hr(hr({}, Br.style), In),
                          {},
                          { transition: gi },
                        );
                      return [].concat(ii(Nn), [Nr, cn, Le]).filter(we);
                    };
                  return this.manager.start(
                    [Ee].concat(ii(ce.reduce(Bn, [rn, Math.max(ln, be)])), [
                      Lt.onAnimationEnd,
                    ]),
                  );
                },
              },
              {
                key: "runAnimation",
                value: function (Lt) {
                  this.manager || (this.manager = le());
                  var qt = Lt.begin,
                    ce = Lt.duration,
                    be = Lt.attributeName,
                    Ee = Lt.to,
                    on = Lt.easing,
                    rn = Lt.onAnimationStart,
                    sn = Lt.onAnimationEnd,
                    ln = Lt.steps,
                    Bn = Lt.children,
                    Un = this.manager;
                  if (
                    ((this.unSubscribe = Un.subscribe(this.handleStyleChange)),
                    typeof on == "function" ||
                      typeof Bn == "function" ||
                      on === "spring")
                  ) {
                    this.runJSAnimation(Lt);
                    return;
                  }
                  if (ln.length > 1) {
                    this.runStepAnimation(Lt);
                    return;
                  }
                  var Nn = be ? Er({}, be, Ee) : Ee,
                    Ne = mn(Object.keys(Nn), ce, on);
                  Un.start([
                    rn,
                    qt,
                    hr(hr({}, Nn), {}, { transition: Ne }),
                    ce,
                    sn,
                  ]);
                },
              },
              {
                key: "render",
                value: function () {
                  var Lt = this.props,
                    qt = Lt.children,
                    ce = Lt.begin,
                    be = Lt.duration,
                    Ee = Lt.attributeName,
                    on = Lt.easing,
                    rn = Lt.isActive,
                    sn = Lt.steps,
                    ln = Lt.from,
                    Bn = Lt.to,
                    Un = Lt.canBegin,
                    Nn = Lt.onAnimationEnd,
                    Ne = Lt.shouldReAnimate,
                    He = Lt.onAnimationReStart,
                    cn = xr(Lt, Pr),
                    Gn = l.Children.count(qt),
                    gn = this.state.style;
                  if (typeof qt == "function") return qt(gn);
                  if (!rn || Gn === 0 || be <= 0) return qt;
                  var In = function (Le) {
                    var Br = Le.props,
                      Dr = Br.style,
                      gi = Dr === void 0 ? {} : Dr,
                      Nr = Br.className,
                      Ii = (0, l.cloneElement)(
                        Le,
                        hr(
                          hr({}, cn),
                          {},
                          { style: hr(hr({}, gi), gn), className: Nr },
                        ),
                      );
                    return Ii;
                  };
                  return Gn === 1
                    ? In(l.Children.only(qt))
                    : l.createElement(
                        "div",
                        null,
                        l.Children.map(qt, function (Xt) {
                          return In(Xt);
                        }),
                      );
                },
              },
            ]),
            dt
          );
        })(l.PureComponent);
        (vr.displayName = "Animate"),
          (vr.defaultProps = {
            begin: 0,
            duration: 1e3,
            from: "",
            to: "",
            attributeName: "",
            easing: "ease",
            isActive: !0,
            canBegin: !0,
            steps: [],
            onAnimationEnd: function () {},
            onAnimationStart: function () {},
          }),
          (vr.propTypes = {
            from: H().oneOfType([H().object, H().string]),
            to: H().oneOfType([H().object, H().string]),
            attributeName: H().string,
            duration: H().number,
            begin: H().number,
            easing: H().oneOfType([H().string, H().func]),
            steps: H().arrayOf(
              H().shape({
                duration: H().number.isRequired,
                style: H().object.isRequired,
                easing: H().oneOfType([
                  H().oneOf([
                    "ease",
                    "ease-in",
                    "ease-out",
                    "ease-in-out",
                    "linear",
                  ]),
                  H().func,
                ]),
                properties: H().arrayOf("string"),
                onAnimationEnd: H().func,
              }),
            ),
            children: H().oneOfType([H().node, H().func]),
            isActive: H().bool,
            canBegin: H().bool,
            onAnimationEnd: H().func,
            shouldReAnimate: H().bool,
            onAnimationStart: H().func,
            onAnimationReStart: H().func,
          });
        const ui = vr;
      },
      34164: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { A: () => H });
        function l(it) {
          var U,
            tt,
            G = "";
          if (typeof it == "string" || typeof it == "number") G += it;
          else if (typeof it == "object")
            if (Array.isArray(it)) {
              var lt = it.length;
              for (U = 0; U < lt; U++)
                it[U] && (tt = l(it[U])) && (G && (G += " "), (G += tt));
            } else for (tt in it) it[tt] && (G && (G += " "), (G += tt));
          return G;
        }
        function F() {
          for (var it, U, tt = 0, G = "", lt = arguments.length; tt < lt; tt++)
            (it = arguments[tt]) && (U = l(it)) && (G && (G += " "), (G += U));
          return G;
        }
        const H = F;
      },
      28583: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { A: () => it, z: () => tt });
        function l(G, lt, ct) {
          (G = +G),
            (lt = +lt),
            (ct =
              (st = arguments.length) < 2
                ? ((lt = G), (G = 0), 1)
                : st < 3
                  ? 1
                  : +ct);
          for (
            var at = -1,
              st = Math.max(0, Math.ceil((lt - G) / ct)) | 0,
              V = new Array(st);
            ++at < st;
          )
            V[at] = G + at * ct;
          return V;
        }
        var F = r(34777),
          H = r(97458);
        function it() {
          var G = (0, H.A)().unknown(void 0),
            lt = G.domain,
            ct = G.range,
            at = 0,
            st = 1,
            V,
            mt,
            et = !1,
            St = 0,
            Ft = 0,
            nt = 0.5;
          delete G.unknown;
          function te() {
            var kt = lt().length,
              Tt = st < at,
              vt = Tt ? st : at,
              I = Tt ? at : st;
            (V = (I - vt) / Math.max(1, kt - St + Ft * 2)),
              et && (V = Math.floor(V)),
              (vt += (I - vt - V * (kt - St)) * nt),
              (mt = V * (1 - St)),
              et && ((vt = Math.round(vt)), (mt = Math.round(mt)));
            var m = l(kt).map(function (S) {
              return vt + V * S;
            });
            return ct(Tt ? m.reverse() : m);
          }
          return (
            (G.domain = function (kt) {
              return arguments.length ? (lt(kt), te()) : lt();
            }),
            (G.range = function (kt) {
              return arguments.length
                ? (([at, st] = kt), (at = +at), (st = +st), te())
                : [at, st];
            }),
            (G.rangeRound = function (kt) {
              return ([at, st] = kt), (at = +at), (st = +st), (et = !0), te();
            }),
            (G.bandwidth = function () {
              return mt;
            }),
            (G.step = function () {
              return V;
            }),
            (G.round = function (kt) {
              return arguments.length ? ((et = !!kt), te()) : et;
            }),
            (G.padding = function (kt) {
              return arguments.length
                ? ((St = Math.min(1, (Ft = +kt))), te())
                : St;
            }),
            (G.paddingInner = function (kt) {
              return arguments.length ? ((St = Math.min(1, kt)), te()) : St;
            }),
            (G.paddingOuter = function (kt) {
              return arguments.length ? ((Ft = +kt), te()) : Ft;
            }),
            (G.align = function (kt) {
              return arguments.length
                ? ((nt = Math.max(0, Math.min(1, kt))), te())
                : nt;
            }),
            (G.copy = function () {
              return it(lt(), [at, st])
                .round(et)
                .paddingInner(St)
                .paddingOuter(Ft)
                .align(nt);
            }),
            F.C.apply(te(), arguments)
          );
        }
        function U(G) {
          var lt = G.copy;
          return (
            (G.padding = G.paddingOuter),
            delete G.paddingInner,
            delete G.paddingOuter,
            (G.copy = function () {
              return U(lt());
            }),
            G
          );
        }
        function tt() {
          return U(it.apply(null, arguments).paddingInner(1));
        }
      },
      34777: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { C: () => l, K: () => F });
        function l(H, it) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              this.range(H);
              break;
            default:
              this.range(it).domain(H);
              break;
          }
          return this;
        }
        function F(H, it) {
          switch (arguments.length) {
            case 0:
              break;
            case 1: {
              typeof H == "function" ? this.interpolator(H) : this.range(H);
              break;
            }
            default: {
              this.domain(H),
                typeof it == "function"
                  ? this.interpolator(it)
                  : this.range(it);
              break;
            }
          }
          return this;
        }
      },
      97458: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { A: () => ct, h: () => lt });
        class l extends Map {
          constructor(st, V = tt) {
            if (
              (super(),
              Object.defineProperties(this, {
                _intern: { value: new Map() },
                _key: { value: V },
              }),
              st != null)
            )
              for (const [mt, et] of st) this.set(mt, et);
          }
          get(st) {
            return super.get(H(this, st));
          }
          has(st) {
            return super.has(H(this, st));
          }
          set(st, V) {
            return super.set(it(this, st), V);
          }
          delete(st) {
            return super.delete(U(this, st));
          }
        }
        class F extends Set {
          constructor(st, V = tt) {
            if (
              (super(),
              Object.defineProperties(this, {
                _intern: { value: new Map() },
                _key: { value: V },
              }),
              st != null)
            )
              for (const mt of st) this.add(mt);
          }
          has(st) {
            return super.has(H(this, st));
          }
          add(st) {
            return super.add(it(this, st));
          }
          delete(st) {
            return super.delete(U(this, st));
          }
        }
        function H({ _intern: at, _key: st }, V) {
          const mt = st(V);
          return at.has(mt) ? at.get(mt) : V;
        }
        function it({ _intern: at, _key: st }, V) {
          const mt = st(V);
          return at.has(mt) ? at.get(mt) : (at.set(mt, V), V);
        }
        function U({ _intern: at, _key: st }, V) {
          const mt = st(V);
          return at.has(mt) && ((V = at.get(mt)), at.delete(mt)), V;
        }
        function tt(at) {
          return at !== null && typeof at == "object" ? at.valueOf() : at;
        }
        var G = r(34777);
        const lt = Symbol("implicit");
        function ct() {
          var at = new l(),
            st = [],
            V = [],
            mt = lt;
          function et(St) {
            let Ft = at.get(St);
            if (Ft === void 0) {
              if (mt !== lt) return mt;
              at.set(St, (Ft = st.push(St) - 1));
            }
            return V[Ft % V.length];
          }
          return (
            (et.domain = function (St) {
              if (!arguments.length) return st.slice();
              (st = []), (at = new l());
              for (const Ft of St) at.has(Ft) || at.set(Ft, st.push(Ft) - 1);
              return et;
            }),
            (et.range = function (St) {
              return arguments.length ? ((V = Array.from(St)), et) : V.slice();
            }),
            (et.unknown = function (St) {
              return arguments.length ? ((mt = St), et) : mt;
            }),
            (et.copy = function () {
              return ct(st, V).unknown(mt);
            }),
            G.C.apply(et, arguments),
            et
          );
        }
      },
      57949: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { A: () => F });
        var l = Array.prototype.slice;
        function F(H) {
          return typeof H == "object" && "length" in H ? H : Array.from(H);
        }
      },
      94770: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { A: () => l });
        function l(F) {
          return function () {
            return F;
          };
        }
      },
      5823: (Wt, Bt, r) => {
        "use strict";
        r.d(Bt, { i: () => at });
        const l = Math.PI,
          F = 2 * l,
          H = 1e-6,
          it = F - H;
        function U(st) {
          this._ += st[0];
          for (let V = 1, mt = st.length; V < mt; ++V)
            this._ += arguments[V] + st[V];
        }
        function tt(st) {
          let V = Math.floor(st);
          if (!(V >= 0)) throw new Error(`invalid digits: ${st}`);
          if (V > 15) return U;
          const mt = 10 ** V;
          return function (et) {
            this._ += et[0];
            for (let St = 1, Ft = et.length; St < Ft; ++St)
              this._ += Math.round(arguments[St] * mt) / mt + et[St];
          };
        }
        class G {
          constructor(V) {
            (this._x0 = this._y0 = this._x1 = this._y1 = null),
              (this._ = ""),
              (this._append = V == null ? U : tt(V));
          }
          moveTo(V, mt) {
            this
              ._append`M${(this._x0 = this._x1 = +V)},${(this._y0 = this._y1 = +mt)}`;
          }
          closePath() {
            this._x1 !== null &&
              ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
          }
          lineTo(V, mt) {
            this._append`L${(this._x1 = +V)},${(this._y1 = +mt)}`;
          }
          quadraticCurveTo(V, mt, et, St) {
            this._append`Q${+V},${+mt},${(this._x1 = +et)},${(this._y1 = +St)}`;
          }
          bezierCurveTo(V, mt, et, St, Ft, nt) {
            this
              ._append`C${+V},${+mt},${+et},${+St},${(this._x1 = +Ft)},${(this._y1 = +nt)}`;
          }
          arcTo(V, mt, et, St, Ft) {
            if (
              ((V = +V), (mt = +mt), (et = +et), (St = +St), (Ft = +Ft), Ft < 0)
            )
              throw new Error(`negative radius: ${Ft}`);
            let nt = this._x1,
              te = this._y1,
              kt = et - V,
              Tt = St - mt,
              vt = nt - V,
              I = te - mt,
              m = vt * vt + I * I;
            if (this._x1 === null)
              this._append`M${(this._x1 = V)},${(this._y1 = mt)}`;
            else if (m > H)
              if (!(Math.abs(I * kt - Tt * vt) > H) || !Ft)
                this._append`L${(this._x1 = V)},${(this._y1 = mt)}`;
              else {
                let S = et - nt,
                  g = St - te,
                  y = kt * kt + Tt * Tt,
                  rt = S * S + g * g,
                  ot = Math.sqrt(y),
                  _t = Math.sqrt(m),
                  j =
                    Ft *
                    Math.tan((l - Math.acos((y + m - rt) / (2 * ot * _t))) / 2),
                  N = j / _t,
                  M = j / ot;
                Math.abs(N - 1) > H &&
                  this._append`L${V + N * vt},${mt + N * I}`,
                  this
                    ._append`A${Ft},${Ft},0,0,${+(I * S > vt * g)},${(this._x1 = V + M * kt)},${(this._y1 = mt + M * Tt)}`;
              }
          }
          arc(V, mt, et, St, Ft, nt) {
            if (((V = +V), (mt = +mt), (et = +et), (nt = !!nt), et < 0))
              throw new Error(`negative radius: ${et}`);
            let te = et * Math.cos(St),
              kt = et * Math.sin(St),
              Tt = V + te,
              vt = mt + kt,
              I = 1 ^ nt,
              m = nt ? St - Ft : Ft - St;
            this._x1 === null
              ? this._append`M${Tt},${vt}`
              : (Math.abs(this._x1 - Tt) > H || Math.abs(this._y1 - vt) > H) &&
                this._append`L${Tt},${vt}`,
              et &&
                (m < 0 && (m = (m % F) + F),
                m > it
                  ? this
                      ._append`A${et},${et},0,1,${I},${V - te},${mt - kt}A${et},${et},0,1,${I},${(this._x1 = Tt)},${(this._y1 = vt)}`
                  : m > H &&
                    this
                      ._append`A${et},${et},0,${+(m >= l)},${I},${(this._x1 = V + et * Math.cos(Ft))},${(this._y1 = mt + et * Math.sin(Ft))}`);
          }
          rect(V, mt, et, St) {
            this
              ._append`M${(this._x0 = this._x1 = +V)},${(this._y0 = this._y1 = +mt)}h${(et = +et)}v${+St}h${-et}Z`;
          }
          toString() {
            return this._;
          }
        }
        function lt() {
          return new G();
        }
        lt.prototype = G.prototype;
        function ct(st = 3) {
          return new G(+st);
        }
        function at(st) {
          let V = 3;
          return (
            (st.digits = function (mt) {
              if (!arguments.length) return V;
              if (mt == null) V = null;
              else {
                const et = Math.floor(mt);
                if (!(et >= 0)) throw new RangeError(`invalid digits: ${mt}`);
                V = et;
              }
              return st;
            }),
            () => new G(V)
          );
        }
      },
    },
  ]);
})();

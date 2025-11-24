/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5313],
  {
    83478: (e, t, r) => {
      "use strict";
      var n,
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        a = r(90626),
        i = (n = a) && n.__esModule ? n : { default: n };
      t.A = function (e) {
        var t = e.fill,
          r = void 0 === t ? "currentColor" : t,
          n = e.width,
          a = void 0 === n ? 24 : n,
          l = e.height,
          s = void 0 === l ? 24 : l,
          c = e.style,
          u = void 0 === c ? {} : c,
          p = (function (e, t) {
            var r = {};
            for (var n in e)
              t.indexOf(n) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
            return r;
          })(e, ["fill", "width", "height", "style"]);
        return i.default.createElement(
          "svg",
          o(
            {
              viewBox: "0 0 24 24",
              style: o({ fill: r, width: a, height: s }, u),
            },
            p,
          ),
          i.default.createElement("path", {
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
          }),
        );
      };
    },
    50283: (e, t, r) => {
      "use strict";
      var n,
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        a = r(90626),
        i = (n = a) && n.__esModule ? n : { default: n };
      t.A = function (e) {
        var t = e.fill,
          r = void 0 === t ? "currentColor" : t,
          n = e.width,
          a = void 0 === n ? 24 : n,
          l = e.height,
          s = void 0 === l ? 24 : l,
          c = e.style,
          u = void 0 === c ? {} : c,
          p = (function (e, t) {
            var r = {};
            for (var n in e)
              t.indexOf(n) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
            return r;
          })(e, ["fill", "width", "height", "style"]);
        return i.default.createElement(
          "svg",
          o(
            {
              viewBox: "0 0 24 24",
              style: o({ fill: r, width: a, height: s }, u),
            },
            p,
          ),
          i.default.createElement("path", {
            d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
          }),
        );
      };
    },
    76155: (e) => {
      e.exports = function (e, t) {
        for (
          var r = -1, n = null == e ? 0 : e.length;
          ++r < n && !1 !== t(e[r], r, e);
        );
        return e;
      };
    },
    24261: (e, t, r) => {
      var n = r(51458),
        o = r(31722),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, r) {
        var i = e[t];
        (a.call(e, t) && o(i, r) && (void 0 !== r || t in e)) || n(e, t, r);
      };
    },
    41199: (e, t, r) => {
      var n = r(41905),
        o = r(33640);
      e.exports = function (e, t) {
        return e && n(t, o(t), e);
      };
    },
    54900: (e, t, r) => {
      var n = r(41905),
        o = r(73591);
      e.exports = function (e, t) {
        return e && n(t, o(t), e);
      };
    },
    40289: (e, t, r) => {
      var n = r(56643),
        o = r(76155),
        a = r(24261),
        i = r(41199),
        l = r(54900),
        s = r(71236),
        c = r(10149),
        u = r(31285),
        p = r(55366),
        f = r(68240),
        h = r(68767),
        d = r(88599),
        b = r(6247),
        g = r(85353),
        v = r(41927),
        x = r(83491),
        y = r(33934),
        m = r(82052),
        w = r(97827),
        E = r(64406),
        _ = r(33640),
        C = r(73591),
        S = "[object Arguments]",
        j = "[object Function]",
        k = "[object Object]",
        O = {};
      (O[S] =
        O["[object Array]"] =
        O["[object ArrayBuffer]"] =
        O["[object DataView]"] =
        O["[object Boolean]"] =
        O["[object Date]"] =
        O["[object Float32Array]"] =
        O["[object Float64Array]"] =
        O["[object Int8Array]"] =
        O["[object Int16Array]"] =
        O["[object Int32Array]"] =
        O["[object Map]"] =
        O["[object Number]"] =
        O[k] =
        O["[object RegExp]"] =
        O["[object Set]"] =
        O["[object String]"] =
        O["[object Symbol]"] =
        O["[object Uint8Array]"] =
        O["[object Uint8ClampedArray]"] =
        O["[object Uint16Array]"] =
        O["[object Uint32Array]"] =
          !0),
        (O["[object Error]"] = O[j] = O["[object WeakMap]"] = !1),
        (e.exports = function e(t, r, A, M, R, F) {
          var B,
            T = 1 & r,
            P = 2 & r,
            H = 4 & r;
          if ((A && (B = R ? A(t, M, R, F) : A(t)), void 0 !== B)) return B;
          if (!w(t)) return t;
          var z = x(t);
          if (z) {
            if (((B = b(t)), !T)) return c(t, B);
          } else {
            var D = d(t),
              L = D == j || "[object GeneratorFunction]" == D;
            if (y(t)) return s(t, T);
            if (D == k || D == S || (L && !R)) {
              if (((B = P || L ? {} : v(t)), !T))
                return P ? p(t, l(B, t)) : u(t, i(B, t));
            } else {
              if (!O[D]) return R ? t : {};
              B = g(t, D, T);
            }
          }
          F || (F = new n());
          var N = F.get(t);
          if (N) return N;
          F.set(t, B),
            E(t)
              ? t.forEach(function (n) {
                  B.add(e(n, r, A, n, t, F));
                })
              : m(t) &&
                t.forEach(function (n, o) {
                  B.set(o, e(n, r, A, o, t, F));
                });
          var U = z ? void 0 : (H ? (P ? h : f) : P ? C : _)(t);
          return (
            o(U || t, function (n, o) {
              U && (n = t[(o = n)]), a(B, o, e(n, r, A, o, t, F));
            }),
            B
          );
        });
    },
    35898: (e, t, r) => {
      var n = r(97827),
        o = Object.create,
        a = (function () {
          function e() {}
          return function (t) {
            if (!n(t)) return {};
            if (o) return o(t);
            e.prototype = t;
            var r = new e();
            return (e.prototype = void 0), r;
          };
        })();
      e.exports = a;
    },
    39062: (e, t, r) => {
      var n = r(88599),
        o = r(34172);
      e.exports = function (e) {
        return o(e) && "[object Map]" == n(e);
      };
    },
    64356: (e, t, r) => {
      var n = r(88599),
        o = r(34172);
      e.exports = function (e) {
        return o(e) && "[object Set]" == n(e);
      };
    },
    73101: (e, t, r) => {
      var n = r(97827),
        o = r(34149),
        a = r(86651),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!n(e)) return a(e);
        var t = o(e),
          r = [];
        for (var l in e)
          ("constructor" != l || (!t && i.call(e, l))) && r.push(l);
        return r;
      };
    },
    77768: (e, t, r) => {
      var n = r(91398);
      e.exports = function (e) {
        return "function" == typeof e ? e : n;
      };
    },
    43603: (e, t, r) => {
      var n = r(15490);
      e.exports = function (e) {
        var t = new e.constructor(e.byteLength);
        return new n(t).set(new n(e)), t;
      };
    },
    71236: (e, t, r) => {
      e = r.nmd(e);
      var n = r(26467),
        o = t && !t.nodeType && t,
        a = o && e && !e.nodeType && e,
        i = a && a.exports === o ? n.Buffer : void 0,
        l = i ? i.allocUnsafe : void 0;
      e.exports = function (e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = l ? l(r) : new e.constructor(r);
        return e.copy(n), n;
      };
    },
    57803: (e, t, r) => {
      var n = r(43603);
      e.exports = function (e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      };
    },
    90955: (e) => {
      var t = /\w*$/;
      e.exports = function (e) {
        var r = new e.constructor(e.source, t.exec(e));
        return (r.lastIndex = e.lastIndex), r;
      };
    },
    61342: (e, t, r) => {
      var n = r(38039),
        o = n ? n.prototype : void 0,
        a = o ? o.valueOf : void 0;
      e.exports = function (e) {
        return a ? Object(a.call(e)) : {};
      };
    },
    89763: (e, t, r) => {
      var n = r(43603);
      e.exports = function (e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      };
    },
    10149: (e) => {
      e.exports = function (e, t) {
        var r = -1,
          n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
      };
    },
    41905: (e, t, r) => {
      var n = r(24261),
        o = r(51458);
      e.exports = function (e, t, r, a) {
        var i = !r;
        r || (r = {});
        for (var l = -1, s = t.length; ++l < s; ) {
          var c = t[l],
            u = a ? a(r[c], e[c], c, r, e) : void 0;
          void 0 === u && (u = e[c]), i ? o(r, c, u) : n(r, c, u);
        }
        return r;
      };
    },
    31285: (e, t, r) => {
      var n = r(41905),
        o = r(28230);
      e.exports = function (e, t) {
        return n(e, o(e), t);
      };
    },
    55366: (e, t, r) => {
      var n = r(41905),
        o = r(51633);
      e.exports = function (e, t) {
        return n(e, o(e), t);
      };
    },
    68767: (e, t, r) => {
      var n = r(26533),
        o = r(51633),
        a = r(73591);
      e.exports = function (e) {
        return n(e, a, o);
      };
    },
    51633: (e, t, r) => {
      var n = r(49666),
        o = r(89553),
        a = r(28230),
        i = r(16199),
        l = Object.getOwnPropertySymbols
          ? function (e) {
              for (var t = []; e; ) n(t, a(e)), (e = o(e));
              return t;
            }
          : i;
      e.exports = l;
    },
    6247: (e) => {
      var t = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var r = e.length,
          n = new e.constructor(r);
        return (
          r &&
            "string" == typeof e[0] &&
            t.call(e, "index") &&
            ((n.index = e.index), (n.input = e.input)),
          n
        );
      };
    },
    85353: (e, t, r) => {
      var n = r(43603),
        o = r(57803),
        a = r(90955),
        i = r(61342),
        l = r(89763);
      e.exports = function (e, t, r) {
        var s = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return n(e);
          case "[object Boolean]":
          case "[object Date]":
            return new s(+e);
          case "[object DataView]":
            return o(e, r);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return l(e, r);
          case "[object Map]":
          case "[object Set]":
            return new s();
          case "[object Number]":
          case "[object String]":
            return new s(e);
          case "[object RegExp]":
            return a(e);
          case "[object Symbol]":
            return i(e);
        }
      };
    },
    41927: (e, t, r) => {
      var n = r(35898),
        o = r(89553),
        a = r(34149);
      e.exports = function (e) {
        return "function" != typeof e.constructor || a(e) ? {} : n(o(e));
      };
    },
    86651: (e) => {
      e.exports = function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      };
    },
    52305: (e, t, r) => {
      var n = r(40289);
      e.exports = function (e) {
        return n(e, 5);
      };
    },
    62369: (e, t, r) => {
      var n = r(17707),
        o = r(77768);
      e.exports = function (e, t) {
        return e && n(e, o(t));
      };
    },
    82052: (e, t, r) => {
      var n = r(39062),
        o = r(97371),
        a = r(25627),
        i = a && a.isMap,
        l = i ? o(i) : n;
      e.exports = l;
    },
    64406: (e, t, r) => {
      var n = r(64356),
        o = r(97371),
        a = r(25627),
        i = a && a.isSet,
        l = i ? o(i) : n;
      e.exports = l;
    },
    73591: (e, t, r) => {
      var n = r(48353),
        o = r(73101),
        a = r(97244);
      e.exports = function (e) {
        return a(e) ? n(e, !0) : o(e);
      };
    },
    61257: (e, t, r) => {
      "use strict";
      r.d(t, { xk: () => Ra });
      var n = r(90626),
        o = r(85341),
        a = {},
        i = function (e, t, r, n) {
          var o = e + "-" + t + "-" + r + (n ? "-server" : "");
          if (a[o]) return a[o];
          var i = (function (e, t, r, n) {
            if ("undefined" == typeof document && !n) return null;
            var o = n ? new n() : document.createElement("canvas");
            (o.width = 2 * r), (o.height = 2 * r);
            var a = o.getContext("2d");
            return a
              ? ((a.fillStyle = e),
                a.fillRect(0, 0, o.width, o.height),
                (a.fillStyle = t),
                a.fillRect(0, 0, r, r),
                a.translate(r, r),
                a.fillRect(0, 0, r, r),
                o.toDataURL())
              : null;
          })(e, t, r, n);
          return (a[o] = i), i;
        },
        l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = function (e) {
          var t = e.white,
            r = e.grey,
            a = e.size,
            s = e.renderers,
            c = e.borderRadius,
            u = e.boxShadow,
            p = e.children,
            f = (0, o.Ay)({
              default: {
                grid: {
                  borderRadius: c,
                  boxShadow: u,
                  absolute: "0px 0px 0px 0px",
                  background: "url(" + i(t, r, a, s.canvas) + ") center left",
                },
              },
            });
          return (0, n.isValidElement)(p)
            ? n.cloneElement(
                p,
                l({}, p.props, { style: l({}, p.props.style, f.grid) }),
              )
            : n.createElement("div", { style: f.grid });
        };
      s.defaultProps = {
        size: 8,
        white: "transparent",
        grey: "rgba(0,0,0,.08)",
        renderers: {},
      };
      const c = s;
      var u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        p = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      function f(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      const h = (function (e) {
        function t() {
          var e, r, n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
          return (
            (r = n =
              f(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a),
                ),
              )),
            (n.handleChange = function (e) {
              var t = (function (e, t, r, n, o) {
                var a = o.clientWidth,
                  i = o.clientHeight,
                  l = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
                  s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
                  c = l - (o.getBoundingClientRect().left + window.pageXOffset),
                  u = s - (o.getBoundingClientRect().top + window.pageYOffset);
                if ("vertical" === r) {
                  var p = void 0;
                  if (
                    ((p =
                      u < 0 ? 0 : u > i ? 1 : Math.round((100 * u) / i) / 100),
                    t.a !== p)
                  )
                    return { h: t.h, s: t.s, l: t.l, a: p, source: "rgb" };
                } else {
                  var f = void 0;
                  if (
                    n !==
                    (f =
                      c < 0 ? 0 : c > a ? 1 : Math.round((100 * c) / a) / 100)
                  )
                    return { h: t.h, s: t.s, l: t.l, a: f, source: "rgb" };
                }
                return null;
              })(e, n.props.hsl, n.props.direction, n.props.a, n.container);
              t &&
                "function" == typeof n.props.onChange &&
                n.props.onChange(t, e);
            }),
            (n.handleMouseDown = function (e) {
              n.handleChange(e),
                window.addEventListener("mousemove", n.handleChange),
                window.addEventListener("mouseup", n.handleMouseUp);
            }),
            (n.handleMouseUp = function () {
              n.unbindEventListeners();
            }),
            (n.unbindEventListeners = function () {
              window.removeEventListener("mousemove", n.handleChange),
                window.removeEventListener("mouseup", n.handleMouseUp);
            }),
            f(n, r)
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          p(t, [
            {
              key: "componentWillUnmount",
              value: function () {
                this.unbindEventListeners();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.rgb,
                  r = (0, o.Ay)(
                    {
                      default: {
                        alpha: {
                          absolute: "0px 0px 0px 0px",
                          borderRadius: this.props.radius,
                        },
                        checkboard: {
                          absolute: "0px 0px 0px 0px",
                          overflow: "hidden",
                          borderRadius: this.props.radius,
                        },
                        gradient: {
                          absolute: "0px 0px 0px 0px",
                          background:
                            "linear-gradient(to right, rgba(" +
                            t.r +
                            "," +
                            t.g +
                            "," +
                            t.b +
                            ", 0) 0%,\n           rgba(" +
                            t.r +
                            "," +
                            t.g +
                            "," +
                            t.b +
                            ", 1) 100%)",
                          boxShadow: this.props.shadow,
                          borderRadius: this.props.radius,
                        },
                        container: {
                          position: "relative",
                          height: "100%",
                          margin: "0 3px",
                        },
                        pointer: {
                          position: "absolute",
                          left: 100 * t.a + "%",
                        },
                        slider: {
                          width: "4px",
                          borderRadius: "1px",
                          height: "8px",
                          boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                          background: "#fff",
                          marginTop: "1px",
                          transform: "translateX(-2px)",
                        },
                      },
                      vertical: {
                        gradient: {
                          background:
                            "linear-gradient(to bottom, rgba(" +
                            t.r +
                            "," +
                            t.g +
                            "," +
                            t.b +
                            ", 0) 0%,\n           rgba(" +
                            t.r +
                            "," +
                            t.g +
                            "," +
                            t.b +
                            ", 1) 100%)",
                        },
                        pointer: { left: 0, top: 100 * t.a + "%" },
                      },
                      overwrite: u({}, this.props.style),
                    },
                    {
                      vertical: "vertical" === this.props.direction,
                      overwrite: !0,
                    },
                  );
                return n.createElement(
                  "div",
                  { style: r.alpha },
                  n.createElement(
                    "div",
                    { style: r.checkboard },
                    n.createElement(c, { renderers: this.props.renderers }),
                  ),
                  n.createElement("div", { style: r.gradient }),
                  n.createElement(
                    "div",
                    {
                      style: r.container,
                      ref: function (t) {
                        return (e.container = t);
                      },
                      onMouseDown: this.handleMouseDown,
                      onTouchMove: this.handleChange,
                      onTouchStart: this.handleChange,
                    },
                    n.createElement(
                      "div",
                      { style: r.pointer },
                      this.props.pointer
                        ? n.createElement(this.props.pointer, this.props)
                        : n.createElement("div", { style: r.slider }),
                    ),
                  ),
                );
              },
            },
          ]),
          t
        );
      })(n.PureComponent || n.Component);
      var d = (function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      var b = [38, 40],
        g = 1;
      const v = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var r = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (r.handleBlur = function () {
              r.state.blurValue &&
                r.setState({ value: r.state.blurValue, blurValue: null });
            }),
            (r.handleChange = function (e) {
              r.setUpdatedValue(e.target.value, e);
            }),
            (r.handleKeyDown = function (e) {
              var t,
                n = (function (e) {
                  return Number(String(e).replace(/%/g, ""));
                })(e.target.value);
              if (!isNaN(n) && ((t = e.keyCode), b.indexOf(t) > -1)) {
                var o = r.getArrowOffset(),
                  a = 38 === e.keyCode ? n + o : n - o;
                r.setUpdatedValue(a, e);
              }
            }),
            (r.handleDrag = function (e) {
              if (r.props.dragLabel) {
                var t = Math.round(r.props.value + e.movementX);
                t >= 0 &&
                  t <= r.props.dragMax &&
                  r.props.onChange &&
                  r.props.onChange(r.getValueObjectWithLabel(t), e);
              }
            }),
            (r.handleMouseDown = function (e) {
              r.props.dragLabel &&
                (e.preventDefault(),
                r.handleDrag(e),
                window.addEventListener("mousemove", r.handleDrag),
                window.addEventListener("mouseup", r.handleMouseUp));
            }),
            (r.handleMouseUp = function () {
              r.unbindEventListeners();
            }),
            (r.unbindEventListeners = function () {
              window.removeEventListener("mousemove", r.handleDrag),
                window.removeEventListener("mouseup", r.handleMouseUp);
            }),
            (r.state = {
              value: String(e.value).toUpperCase(),
              blurValue: String(e.value).toUpperCase(),
            }),
            (r.inputId = "rc-editable-input-" + g++),
            r
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          d(t, [
            {
              key: "componentDidUpdate",
              value: function (e, t) {
                this.props.value === this.state.value ||
                  (e.value === this.props.value &&
                    t.value === this.state.value) ||
                  (this.input === document.activeElement
                    ? this.setState({
                        blurValue: String(this.props.value).toUpperCase(),
                      })
                    : this.setState({
                        value: String(this.props.value).toUpperCase(),
                        blurValue:
                          !this.state.blurValue &&
                          String(this.props.value).toUpperCase(),
                      }));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.unbindEventListeners();
              },
            },
            {
              key: "getValueObjectWithLabel",
              value: function (e) {
                return (function (e, t, r) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = r),
                    e
                  );
                })({}, this.props.label, e);
              },
            },
            {
              key: "getArrowOffset",
              value: function () {
                return this.props.arrowOffset || 1;
              },
            },
            {
              key: "setUpdatedValue",
              value: function (e, t) {
                var r = this.props.label ? this.getValueObjectWithLabel(e) : e;
                this.props.onChange && this.props.onChange(r, t),
                  this.setState({ value: e });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = (0, o.Ay)(
                    {
                      default: { wrap: { position: "relative" } },
                      "user-override": {
                        wrap:
                          this.props.style && this.props.style.wrap
                            ? this.props.style.wrap
                            : {},
                        input:
                          this.props.style && this.props.style.input
                            ? this.props.style.input
                            : {},
                        label:
                          this.props.style && this.props.style.label
                            ? this.props.style.label
                            : {},
                      },
                      "dragLabel-true": { label: { cursor: "ew-resize" } },
                    },
                    { "user-override": !0 },
                    this.props,
                  );
                return n.createElement(
                  "div",
                  { style: t.wrap },
                  n.createElement("input", {
                    id: this.inputId,
                    style: t.input,
                    ref: function (t) {
                      return (e.input = t);
                    },
                    value: this.state.value,
                    onKeyDown: this.handleKeyDown,
                    onChange: this.handleChange,
                    onBlur: this.handleBlur,
                    placeholder: this.props.placeholder,
                    spellCheck: "false",
                  }),
                  this.props.label && !this.props.hideLabel
                    ? n.createElement(
                        "label",
                        {
                          htmlFor: this.inputId,
                          style: t.label,
                          onMouseDown: this.handleMouseDown,
                        },
                        this.props.label,
                      )
                    : null,
                );
              },
            },
          ]),
          t
        );
      })(n.PureComponent || n.Component);
      var x = (function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      function y(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      const m = (function (e) {
        function t() {
          var e, r, n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
          return (
            (r = n =
              y(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a),
                ),
              )),
            (n.handleChange = function (e) {
              var t = (function (e, t, r, n) {
                var o = n.clientWidth,
                  a = n.clientHeight,
                  i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
                  l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
                  s = i - (n.getBoundingClientRect().left + window.pageXOffset),
                  c = l - (n.getBoundingClientRect().top + window.pageYOffset);
                if ("vertical" === t) {
                  var u = void 0;
                  if (
                    ((u =
                      c < 0
                        ? 359
                        : c > a
                          ? 0
                          : (360 * ((-100 * c) / a + 100)) / 100),
                    r.h !== u)
                  )
                    return { h: u, s: r.s, l: r.l, a: r.a, source: "hsl" };
                } else {
                  var p = void 0;
                  if (
                    ((p =
                      s < 0 ? 0 : s > o ? 359 : (((100 * s) / o) * 360) / 100),
                    r.h !== p)
                  )
                    return { h: p, s: r.s, l: r.l, a: r.a, source: "hsl" };
                }
                return null;
              })(e, n.props.direction, n.props.hsl, n.container);
              t &&
                "function" == typeof n.props.onChange &&
                n.props.onChange(t, e);
            }),
            (n.handleMouseDown = function (e) {
              n.handleChange(e),
                window.addEventListener("mousemove", n.handleChange),
                window.addEventListener("mouseup", n.handleMouseUp);
            }),
            (n.handleMouseUp = function () {
              n.unbindEventListeners();
            }),
            y(n, r)
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          x(t, [
            {
              key: "componentWillUnmount",
              value: function () {
                this.unbindEventListeners();
              },
            },
            {
              key: "unbindEventListeners",
              value: function () {
                window.removeEventListener("mousemove", this.handleChange),
                  window.removeEventListener("mouseup", this.handleMouseUp);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.direction,
                  r = void 0 === t ? "horizontal" : t,
                  a = (0, o.Ay)(
                    {
                      default: {
                        hue: {
                          absolute: "0px 0px 0px 0px",
                          borderRadius: this.props.radius,
                          boxShadow: this.props.shadow,
                        },
                        container: {
                          padding: "0 2px",
                          position: "relative",
                          height: "100%",
                          borderRadius: this.props.radius,
                        },
                        pointer: {
                          position: "absolute",
                          left: (100 * this.props.hsl.h) / 360 + "%",
                        },
                        slider: {
                          marginTop: "1px",
                          width: "4px",
                          borderRadius: "1px",
                          height: "8px",
                          boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                          background: "#fff",
                          transform: "translateX(-2px)",
                        },
                      },
                      vertical: {
                        pointer: {
                          left: "0px",
                          top: (-100 * this.props.hsl.h) / 360 + 100 + "%",
                        },
                      },
                    },
                    { vertical: "vertical" === r },
                  );
                return n.createElement(
                  "div",
                  { style: a.hue },
                  n.createElement(
                    "div",
                    {
                      className: "hue-" + r,
                      style: a.container,
                      ref: function (t) {
                        return (e.container = t);
                      },
                      onMouseDown: this.handleMouseDown,
                      onTouchMove: this.handleChange,
                      onTouchStart: this.handleChange,
                    },
                    n.createElement(
                      "style",
                      null,
                      "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          ",
                    ),
                    n.createElement(
                      "div",
                      { style: a.pointer },
                      this.props.pointer
                        ? n.createElement(this.props.pointer, this.props)
                        : n.createElement("div", { style: a.slider }),
                    ),
                  ),
                );
              },
            },
          ]),
          t
        );
      })(n.PureComponent || n.Component);
      var w = r(61410),
        E = r.n(w);
      const _ = function () {
        (this.__data__ = []), (this.size = 0);
      };
      const C = function (e, t) {
        return e === t || (e != e && t != t);
      };
      const S = function (e, t) {
        for (var r = e.length; r--; ) if (C(e[r][0], t)) return r;
        return -1;
      };
      var j = Array.prototype.splice;
      const k = function (e) {
        var t = this.__data__,
          r = S(t, e);
        return (
          !(r < 0) &&
          (r == t.length - 1 ? t.pop() : j.call(t, r, 1), --this.size, !0)
        );
      };
      const O = function (e) {
        var t = this.__data__,
          r = S(t, e);
        return r < 0 ? void 0 : t[r][1];
      };
      const A = function (e) {
        return S(this.__data__, e) > -1;
      };
      const M = function (e, t) {
        var r = this.__data__,
          n = S(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
      };
      function R(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (R.prototype.clear = _),
        (R.prototype.delete = k),
        (R.prototype.get = O),
        (R.prototype.has = A),
        (R.prototype.set = M);
      const F = R;
      const B = function () {
        (this.__data__ = new F()), (this.size = 0);
      };
      const T = function (e) {
        var t = this.__data__,
          r = t.delete(e);
        return (this.size = t.size), r;
      };
      const P = function (e) {
        return this.__data__.get(e);
      };
      const H = function (e) {
        return this.__data__.has(e);
      };
      const z =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global;
      var D = "object" == typeof self && self && self.Object === Object && self;
      const L = z || D || Function("return this")();
      const N = L.Symbol;
      var U = Object.prototype,
        G = U.hasOwnProperty,
        W = U.toString,
        I = N ? N.toStringTag : void 0;
      const X = function (e) {
        var t = G.call(e, I),
          r = e[I];
        try {
          e[I] = void 0;
          var n = !0;
        } catch (e) {}
        var o = W.call(e);
        return n && (t ? (e[I] = r) : delete e[I]), o;
      };
      var V = Object.prototype.toString;
      const $ = function (e) {
        return V.call(e);
      };
      var q = N ? N.toStringTag : void 0;
      const Y = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : q && q in Object(e)
            ? X(e)
            : $(e);
      };
      const K = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
      const Z = function (e) {
        if (!K(e)) return !1;
        var t = Y(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
      const J = L["__core-js_shared__"];
      var Q,
        ee = (Q = /[^.]+$/.exec((J && J.keys && J.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + Q
          : "";
      const te = function (e) {
        return !!ee && ee in e;
      };
      var re = Function.prototype.toString;
      const ne = function (e) {
        if (null != e) {
          try {
            return re.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
      var oe = /^\[object .+?Constructor\]$/,
        ae = Function.prototype,
        ie = Object.prototype,
        le = ae.toString,
        se = ie.hasOwnProperty,
        ce = RegExp(
          "^" +
            le
              .call(se)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      const ue = function (e) {
        return !(!K(e) || te(e)) && (Z(e) ? ce : oe).test(ne(e));
      };
      const pe = function (e, t) {
        return null == e ? void 0 : e[t];
      };
      const fe = function (e, t) {
        var r = pe(e, t);
        return ue(r) ? r : void 0;
      };
      const he = fe(L, "Map");
      const de = fe(Object, "create");
      const be = function () {
        (this.__data__ = de ? de(null) : {}), (this.size = 0);
      };
      const ge = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
      var ve = Object.prototype.hasOwnProperty;
      const xe = function (e) {
        var t = this.__data__;
        if (de) {
          var r = t[e];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return ve.call(t, e) ? t[e] : void 0;
      };
      var ye = Object.prototype.hasOwnProperty;
      const me = function (e) {
        var t = this.__data__;
        return de ? void 0 !== t[e] : ye.call(t, e);
      };
      const we = function (e, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = de && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
      function Ee(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (Ee.prototype.clear = be),
        (Ee.prototype.delete = ge),
        (Ee.prototype.get = xe),
        (Ee.prototype.has = me),
        (Ee.prototype.set = we);
      const _e = Ee;
      const Ce = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new _e(),
            map: new (he || F)(),
            string: new _e(),
          });
      };
      const Se = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      const je = function (e, t) {
        var r = e.__data__;
        return Se(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
      };
      const ke = function (e) {
        var t = je(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
      const Oe = function (e) {
        return je(this, e).get(e);
      };
      const Ae = function (e) {
        return je(this, e).has(e);
      };
      const Me = function (e, t) {
        var r = je(this, e),
          n = r.size;
        return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
      };
      function Re(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      (Re.prototype.clear = Ce),
        (Re.prototype.delete = ke),
        (Re.prototype.get = Oe),
        (Re.prototype.has = Ae),
        (Re.prototype.set = Me);
      const Fe = Re;
      const Be = function (e, t) {
        var r = this.__data__;
        if (r instanceof F) {
          var n = r.__data__;
          if (!he || n.length < 199)
            return n.push([e, t]), (this.size = ++r.size), this;
          r = this.__data__ = new Fe(n);
        }
        return r.set(e, t), (this.size = r.size), this;
      };
      function Te(e) {
        var t = (this.__data__ = new F(e));
        this.size = t.size;
      }
      (Te.prototype.clear = B),
        (Te.prototype.delete = T),
        (Te.prototype.get = P),
        (Te.prototype.has = H),
        (Te.prototype.set = Be);
      const Pe = Te;
      const He = (function () {
        try {
          var e = fe(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (e) {}
      })();
      const ze = function (e, t, r) {
        "__proto__" == t && He
          ? He(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (e[t] = r);
      };
      const De = function (e, t, r) {
        ((void 0 !== r && !C(e[t], r)) || (void 0 === r && !(t in e))) &&
          ze(e, t, r);
      };
      const Le = (function (e) {
        return function (t, r, n) {
          for (var o = -1, a = Object(t), i = n(t), l = i.length; l--; ) {
            var s = i[e ? l : ++o];
            if (!1 === r(a[s], s, a)) break;
          }
          return t;
        };
      })();
      var Ne =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        Ue =
          Ne &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        Ge = Ue && Ue.exports === Ne ? L.Buffer : void 0,
        We = Ge ? Ge.allocUnsafe : void 0;
      const Ie = function (e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = We ? We(r) : new e.constructor(r);
        return e.copy(n), n;
      };
      const Xe = L.Uint8Array;
      const Ve = function (e) {
        var t = new e.constructor(e.byteLength);
        return new Xe(t).set(new Xe(e)), t;
      };
      const $e = function (e, t) {
        var r = t ? Ve(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      };
      const qe = function (e, t) {
        var r = -1,
          n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
      };
      var Ye = Object.create;
      const Ke = (function () {
        function e() {}
        return function (t) {
          if (!K(t)) return {};
          if (Ye) return Ye(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
      const Ze = function (e, t) {
        return function (r) {
          return e(t(r));
        };
      };
      const Je = Ze(Object.getPrototypeOf, Object);
      var Qe = Object.prototype;
      const et = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || Qe);
      };
      const tt = function (e) {
        return "function" != typeof e.constructor || et(e) ? {} : Ke(Je(e));
      };
      const rt = function (e) {
        return null != e && "object" == typeof e;
      };
      const nt = function (e) {
        return rt(e) && "[object Arguments]" == Y(e);
      };
      var ot = Object.prototype,
        at = ot.hasOwnProperty,
        it = ot.propertyIsEnumerable;
      const lt = nt(
        (function () {
          return arguments;
        })(),
      )
        ? nt
        : function (e) {
            return rt(e) && at.call(e, "callee") && !it.call(e, "callee");
          };
      const st = Array.isArray;
      const ct = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
      const ut = function (e) {
        return null != e && ct(e.length) && !Z(e);
      };
      const pt = function (e) {
        return rt(e) && ut(e);
      };
      const ft = function () {
        return !1;
      };
      var ht =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        dt =
          ht &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        bt = dt && dt.exports === ht ? L.Buffer : void 0;
      const gt = (bt ? bt.isBuffer : void 0) || ft;
      var vt = Function.prototype,
        xt = Object.prototype,
        yt = vt.toString,
        mt = xt.hasOwnProperty,
        wt = yt.call(Object);
      const Et = function (e) {
        if (!rt(e) || "[object Object]" != Y(e)) return !1;
        var t = Je(e);
        if (null === t) return !0;
        var r = mt.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && yt.call(r) == wt;
      };
      var _t = {};
      (_t["[object Float32Array]"] =
        _t["[object Float64Array]"] =
        _t["[object Int8Array]"] =
        _t["[object Int16Array]"] =
        _t["[object Int32Array]"] =
        _t["[object Uint8Array]"] =
        _t["[object Uint8ClampedArray]"] =
        _t["[object Uint16Array]"] =
        _t["[object Uint32Array]"] =
          !0),
        (_t["[object Arguments]"] =
          _t["[object Array]"] =
          _t["[object ArrayBuffer]"] =
          _t["[object Boolean]"] =
          _t["[object DataView]"] =
          _t["[object Date]"] =
          _t["[object Error]"] =
          _t["[object Function]"] =
          _t["[object Map]"] =
          _t["[object Number]"] =
          _t["[object Object]"] =
          _t["[object RegExp]"] =
          _t["[object Set]"] =
          _t["[object String]"] =
          _t["[object WeakMap]"] =
            !1);
      const Ct = function (e) {
        return rt(e) && ct(e.length) && !!_t[Y(e)];
      };
      const St = function (e) {
        return function (t) {
          return e(t);
        };
      };
      var jt =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        kt =
          jt &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        Ot = kt && kt.exports === jt && z.process,
        At = (function () {
          try {
            var e = kt && kt.require && kt.require("util").types;
            return e || (Ot && Ot.binding && Ot.binding("util"));
          } catch (e) {}
        })();
      var Mt = At && At.isTypedArray;
      const Rt = Mt ? St(Mt) : Ct;
      const Ft = function (e, t) {
        if (
          ("constructor" !== t || "function" != typeof e[t]) &&
          "__proto__" != t
        )
          return e[t];
      };
      var Bt = Object.prototype.hasOwnProperty;
      const Tt = function (e, t, r) {
        var n = e[t];
        (Bt.call(e, t) && C(n, r) && (void 0 !== r || t in e)) || ze(e, t, r);
      };
      const Pt = function (e, t, r, n) {
        var o = !r;
        r || (r = {});
        for (var a = -1, i = t.length; ++a < i; ) {
          var l = t[a],
            s = n ? n(r[l], e[l], l, r, e) : void 0;
          void 0 === s && (s = e[l]), o ? ze(r, l, s) : Tt(r, l, s);
        }
        return r;
      };
      const Ht = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      };
      var zt = /^(?:0|[1-9]\d*)$/;
      const Dt = function (e, t) {
        var r = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == r || ("symbol" != r && zt.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
      var Lt = Object.prototype.hasOwnProperty;
      const Nt = function (e, t) {
        var r = st(e),
          n = !r && lt(e),
          o = !r && !n && gt(e),
          a = !r && !n && !o && Rt(e),
          i = r || n || o || a,
          l = i ? Ht(e.length, String) : [],
          s = l.length;
        for (var c in e)
          (!t && !Lt.call(e, c)) ||
            (i &&
              ("length" == c ||
                (o && ("offset" == c || "parent" == c)) ||
                (a &&
                  ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
                Dt(c, s))) ||
            l.push(c);
        return l;
      };
      const Ut = function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      };
      var Gt = Object.prototype.hasOwnProperty;
      const Wt = function (e) {
        if (!K(e)) return Ut(e);
        var t = et(e),
          r = [];
        for (var n in e)
          ("constructor" != n || (!t && Gt.call(e, n))) && r.push(n);
        return r;
      };
      const It = function (e) {
        return ut(e) ? Nt(e, !0) : Wt(e);
      };
      const Xt = function (e) {
        return Pt(e, It(e));
      };
      const Vt = function (e, t, r, n, o, a, i) {
        var l = Ft(e, r),
          s = Ft(t, r),
          c = i.get(s);
        if (c) De(e, r, c);
        else {
          var u = a ? a(l, s, r + "", e, t, i) : void 0,
            p = void 0 === u;
          if (p) {
            var f = st(s),
              h = !f && gt(s),
              d = !f && !h && Rt(s);
            (u = s),
              f || h || d
                ? st(l)
                  ? (u = l)
                  : pt(l)
                    ? (u = qe(l))
                    : h
                      ? ((p = !1), (u = Ie(s, !0)))
                      : d
                        ? ((p = !1), (u = $e(s, !0)))
                        : (u = [])
                : Et(s) || lt(s)
                  ? ((u = l),
                    lt(l) ? (u = Xt(l)) : (K(l) && !Z(l)) || (u = tt(s)))
                  : (p = !1);
          }
          p && (i.set(s, u), o(u, s, n, a, i), i.delete(s)), De(e, r, u);
        }
      };
      const $t = function e(t, r, n, o, a) {
        t !== r &&
          Le(
            r,
            function (i, l) {
              if ((a || (a = new Pe()), K(i))) Vt(t, r, l, n, e, o, a);
              else {
                var s = o ? o(Ft(t, l), i, l + "", t, r, a) : void 0;
                void 0 === s && (s = i), De(t, l, s);
              }
            },
            It,
          );
      };
      const qt = function (e) {
        return e;
      };
      const Yt = function (e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2]);
        }
        return e.apply(t, r);
      };
      var Kt = Math.max;
      const Zt = function (e, t, r) {
        return (
          (t = Kt(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var n = arguments, o = -1, a = Kt(n.length - t, 0), i = Array(a);
              ++o < a;
            )
              i[o] = n[t + o];
            o = -1;
            for (var l = Array(t + 1); ++o < t; ) l[o] = n[o];
            return (l[t] = r(i)), Yt(e, this, l);
          }
        );
      };
      const Jt = function (e) {
        return function () {
          return e;
        };
      };
      const Qt = He
        ? function (e, t) {
            return He(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: Jt(t),
              writable: !0,
            });
          }
        : qt;
      var er = Date.now;
      const tr = (function (e) {
        var t = 0,
          r = 0;
        return function () {
          var n = er(),
            o = 16 - (n - r);
          if (((r = n), o > 0)) {
            if (++t >= 800) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      })(Qt);
      const rr = function (e, t) {
        return tr(Zt(e, t, qt), e + "");
      };
      const nr = function (e, t, r) {
        if (!K(r)) return !1;
        var n = typeof t;
        return (
          !!("number" == n
            ? ut(r) && Dt(t, r.length)
            : "string" == n && t in r) && C(r[t], e)
        );
      };
      const or = (function (e) {
        return rr(function (t, r) {
          var n = -1,
            o = r.length,
            a = o > 1 ? r[o - 1] : void 0,
            i = o > 2 ? r[2] : void 0;
          for (
            a = e.length > 3 && "function" == typeof a ? (o--, a) : void 0,
              i && nr(r[0], r[1], i) && ((a = o < 3 ? void 0 : a), (o = 1)),
              t = Object(t);
            ++n < o;
          ) {
            var l = r[n];
            l && e(t, l, n, a);
          }
          return t;
        });
      })(function (e, t, r) {
        $t(e, t, r);
      });
      var ar = function (e) {
        var t = e.zDepth,
          r = e.radius,
          a = e.background,
          i = e.children,
          l = e.styles,
          s = void 0 === l ? {} : l,
          c = (0, o.Ay)(
            or(
              {
                default: {
                  wrap: { position: "relative", display: "inline-block" },
                  content: { position: "relative" },
                  bg: {
                    absolute: "0px 0px 0px 0px",
                    boxShadow: "0 " + t + "px " + 4 * t + "px rgba(0,0,0,.24)",
                    borderRadius: r,
                    background: a,
                  },
                },
                "zDepth-0": { bg: { boxShadow: "none" } },
                "zDepth-1": {
                  bg: {
                    boxShadow:
                      "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)",
                  },
                },
                "zDepth-2": {
                  bg: {
                    boxShadow:
                      "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)",
                  },
                },
                "zDepth-3": {
                  bg: {
                    boxShadow:
                      "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)",
                  },
                },
                "zDepth-4": {
                  bg: {
                    boxShadow:
                      "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)",
                  },
                },
                "zDepth-5": {
                  bg: {
                    boxShadow:
                      "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)",
                  },
                },
                square: { bg: { borderRadius: "0" } },
                circle: { bg: { borderRadius: "50%" } },
              },
              s,
            ),
            { "zDepth-1": 1 === t },
          );
        return n.createElement(
          "div",
          { style: c.wrap },
          n.createElement("div", { style: c.bg }),
          n.createElement("div", { style: c.content }, i),
        );
      };
      (ar.propTypes = {
        background: E().string,
        zDepth: E().oneOf([0, 1, 2, 3, 4, 5]),
        radius: E().number,
        styles: E().object,
      }),
        (ar.defaultProps = {
          background: "#fff",
          zDepth: 1,
          radius: 2,
          styles: {},
        });
      const ir = ar;
      const lr = function () {
        return L.Date.now();
      };
      var sr = /\s/;
      const cr = function (e) {
        for (var t = e.length; t-- && sr.test(e.charAt(t)); );
        return t;
      };
      var ur = /^\s+/;
      const pr = function (e) {
        return e ? e.slice(0, cr(e) + 1).replace(ur, "") : e;
      };
      const fr = function (e) {
        return "symbol" == typeof e || (rt(e) && "[object Symbol]" == Y(e));
      };
      var hr = /^[-+]0x[0-9a-f]+$/i,
        dr = /^0b[01]+$/i,
        br = /^0o[0-7]+$/i,
        gr = parseInt;
      const vr = function (e) {
        if ("number" == typeof e) return e;
        if (fr(e)) return NaN;
        if (K(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = K(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = pr(e);
        var r = dr.test(e);
        return r || br.test(e)
          ? gr(e.slice(2), r ? 2 : 8)
          : hr.test(e)
            ? NaN
            : +e;
      };
      var xr = Math.max,
        yr = Math.min;
      const mr = function (e, t, r) {
        var n,
          o,
          a,
          i,
          l,
          s,
          c = 0,
          u = !1,
          p = !1,
          f = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function h(t) {
          var r = n,
            a = o;
          return (n = o = void 0), (c = t), (i = e.apply(a, r));
        }
        function d(e) {
          var r = e - s;
          return void 0 === s || r >= t || r < 0 || (p && e - c >= a);
        }
        function b() {
          var e = lr();
          if (d(e)) return g(e);
          l = setTimeout(
            b,
            (function (e) {
              var r = t - (e - s);
              return p ? yr(r, a - (e - c)) : r;
            })(e),
          );
        }
        function g(e) {
          return (l = void 0), f && n ? h(e) : ((n = o = void 0), i);
        }
        function v() {
          var e = lr(),
            r = d(e);
          if (((n = arguments), (o = this), (s = e), r)) {
            if (void 0 === l)
              return (function (e) {
                return (c = e), (l = setTimeout(b, t)), u ? h(e) : i;
              })(s);
            if (p) return clearTimeout(l), (l = setTimeout(b, t)), h(s);
          }
          return void 0 === l && (l = setTimeout(b, t)), i;
        }
        return (
          (t = vr(t) || 0),
          K(r) &&
            ((u = !!r.leading),
            (a = (p = "maxWait" in r) ? xr(vr(r.maxWait) || 0, t) : a),
            (f = "trailing" in r ? !!r.trailing : f)),
          (v.cancel = function () {
            void 0 !== l && clearTimeout(l), (c = 0), (n = s = o = l = void 0);
          }),
          (v.flush = function () {
            return void 0 === l ? i : g(lr());
          }),
          v
        );
      };
      const wr = function (e, t, r) {
        var n = !0,
          o = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return (
          K(r) &&
            ((n = "leading" in r ? !!r.leading : n),
            (o = "trailing" in r ? !!r.trailing : o)),
          mr(e, t, { leading: n, maxWait: t, trailing: o })
        );
      };
      var Er = (function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      var _r = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var r = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (r.handleChange = function (e) {
              "function" == typeof r.props.onChange &&
                r.throttle(
                  r.props.onChange,
                  (function (e, t, r) {
                    var n = r.getBoundingClientRect(),
                      o = n.width,
                      a = n.height,
                      i =
                        "number" == typeof e.pageX
                          ? e.pageX
                          : e.touches[0].pageX,
                      l =
                        "number" == typeof e.pageY
                          ? e.pageY
                          : e.touches[0].pageY,
                      s =
                        i -
                        (r.getBoundingClientRect().left + window.pageXOffset),
                      c =
                        l -
                        (r.getBoundingClientRect().top + window.pageYOffset);
                    s < 0 ? (s = 0) : s > o && (s = o),
                      c < 0 ? (c = 0) : c > a && (c = a);
                    var u = s / o,
                      p = 1 - c / a;
                    return { h: t.h, s: u, v: p, a: t.a, source: "hsv" };
                  })(e, r.props.hsl, r.container),
                  e,
                );
            }),
            (r.handleMouseDown = function (e) {
              r.handleChange(e);
              var t = r.getContainerRenderWindow();
              t.addEventListener("mousemove", r.handleChange),
                t.addEventListener("mouseup", r.handleMouseUp);
            }),
            (r.handleMouseUp = function () {
              r.unbindEventListeners();
            }),
            (r.throttle = wr(function (e, t, r) {
              e(t, r);
            }, 50)),
            r
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          Er(t, [
            {
              key: "componentWillUnmount",
              value: function () {
                this.throttle.cancel(), this.unbindEventListeners();
              },
            },
            {
              key: "getContainerRenderWindow",
              value: function () {
                for (
                  var e = this.container, t = window;
                  !t.document.contains(e) && t.parent !== t;
                )
                  t = t.parent;
                return t;
              },
            },
            {
              key: "unbindEventListeners",
              value: function () {
                var e = this.getContainerRenderWindow();
                e.removeEventListener("mousemove", this.handleChange),
                  e.removeEventListener("mouseup", this.handleMouseUp);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.style || {},
                  r = t.color,
                  a = t.white,
                  i = t.black,
                  l = t.pointer,
                  s = t.circle,
                  c = (0, o.Ay)(
                    {
                      default: {
                        color: {
                          absolute: "0px 0px 0px 0px",
                          background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                          borderRadius: this.props.radius,
                        },
                        white: {
                          absolute: "0px 0px 0px 0px",
                          borderRadius: this.props.radius,
                        },
                        black: {
                          absolute: "0px 0px 0px 0px",
                          boxShadow: this.props.shadow,
                          borderRadius: this.props.radius,
                        },
                        pointer: {
                          position: "absolute",
                          top: -100 * this.props.hsv.v + 100 + "%",
                          left: 100 * this.props.hsv.s + "%",
                          cursor: "default",
                        },
                        circle: {
                          width: "4px",
                          height: "4px",
                          boxShadow:
                            "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
                          borderRadius: "50%",
                          cursor: "hand",
                          transform: "translate(-2px, -2px)",
                        },
                      },
                      custom: {
                        color: r,
                        white: a,
                        black: i,
                        pointer: l,
                        circle: s,
                      },
                    },
                    { custom: !!this.props.style },
                  );
                return n.createElement(
                  "div",
                  {
                    style: c.color,
                    ref: function (t) {
                      return (e.container = t);
                    },
                    onMouseDown: this.handleMouseDown,
                    onTouchMove: this.handleChange,
                    onTouchStart: this.handleChange,
                  },
                  n.createElement(
                    "style",
                    null,
                    "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        ",
                  ),
                  n.createElement(
                    "div",
                    { style: c.white, className: "saturation-white" },
                    n.createElement("div", {
                      style: c.black,
                      className: "saturation-black",
                    }),
                    n.createElement(
                      "div",
                      { style: c.pointer },
                      this.props.pointer
                        ? n.createElement(this.props.pointer, this.props)
                        : n.createElement("div", { style: c.circle }),
                    ),
                  ),
                );
              },
            },
          ]),
          t
        );
      })(n.PureComponent || n.Component);
      const Cr = _r;
      const Sr = function (e, t) {
        for (
          var r = -1, n = null == e ? 0 : e.length;
          ++r < n && !1 !== t(e[r], r, e);
        );
        return e;
      };
      const jr = Ze(Object.keys, Object);
      var kr = Object.prototype.hasOwnProperty;
      const Or = function (e) {
        if (!et(e)) return jr(e);
        var t = [];
        for (var r in Object(e))
          kr.call(e, r) && "constructor" != r && t.push(r);
        return t;
      };
      const Ar = function (e) {
        return ut(e) ? Nt(e) : Or(e);
      };
      const Mr = (function (e, t) {
        return function (r, n) {
          if (null == r) return r;
          if (!ut(r)) return e(r, n);
          for (
            var o = r.length, a = t ? o : -1, i = Object(r);
            (t ? a-- : ++a < o) && !1 !== n(i[a], a, i);
          );
          return r;
        };
      })(function (e, t) {
        return e && Le(e, t, Ar);
      });
      const Rr = function (e) {
        return "function" == typeof e ? e : qt;
      };
      const Fr = function (e, t) {
        return (st(e) ? Sr : Mr)(e, Rr(t));
      };
      function Br(e) {
        return (
          (Br =
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
          Br(e)
        );
      }
      var Tr = /^\s+/,
        Pr = /\s+$/;
      function Hr(e, t) {
        if (((t = t || {}), (e = e || "") instanceof Hr)) return e;
        if (!(this instanceof Hr)) return new Hr(e, t);
        var r = (function (e) {
          var t = { r: 0, g: 0, b: 0 },
            r = 1,
            n = null,
            o = null,
            a = null,
            i = !1,
            l = !1;
          "string" == typeof e &&
            (e = (function (e) {
              e = e.replace(Tr, "").replace(Pr, "").toLowerCase();
              var t,
                r = !1;
              if (Qr[e]) (e = Qr[e]), (r = !0);
              else if ("transparent" == e)
                return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              if ((t = hn.rgb.exec(e))) return { r: t[1], g: t[2], b: t[3] };
              if ((t = hn.rgba.exec(e)))
                return { r: t[1], g: t[2], b: t[3], a: t[4] };
              if ((t = hn.hsl.exec(e))) return { h: t[1], s: t[2], l: t[3] };
              if ((t = hn.hsla.exec(e)))
                return { h: t[1], s: t[2], l: t[3], a: t[4] };
              if ((t = hn.hsv.exec(e))) return { h: t[1], s: t[2], v: t[3] };
              if ((t = hn.hsva.exec(e)))
                return { h: t[1], s: t[2], v: t[3], a: t[4] };
              if ((t = hn.hex8.exec(e)))
                return {
                  r: on(t[1]),
                  g: on(t[2]),
                  b: on(t[3]),
                  a: cn(t[4]),
                  format: r ? "name" : "hex8",
                };
              if ((t = hn.hex6.exec(e)))
                return {
                  r: on(t[1]),
                  g: on(t[2]),
                  b: on(t[3]),
                  format: r ? "name" : "hex",
                };
              if ((t = hn.hex4.exec(e)))
                return {
                  r: on(t[1] + "" + t[1]),
                  g: on(t[2] + "" + t[2]),
                  b: on(t[3] + "" + t[3]),
                  a: cn(t[4] + "" + t[4]),
                  format: r ? "name" : "hex8",
                };
              if ((t = hn.hex3.exec(e)))
                return {
                  r: on(t[1] + "" + t[1]),
                  g: on(t[2] + "" + t[2]),
                  b: on(t[3] + "" + t[3]),
                  format: r ? "name" : "hex",
                };
              return !1;
            })(e));
          "object" == Br(e) &&
            (dn(e.r) && dn(e.g) && dn(e.b)
              ? ((s = e.r),
                (c = e.g),
                (u = e.b),
                (t = {
                  r: 255 * rn(s, 255),
                  g: 255 * rn(c, 255),
                  b: 255 * rn(u, 255),
                }),
                (i = !0),
                (l = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
              : dn(e.h) && dn(e.s) && dn(e.v)
                ? ((n = ln(e.s)),
                  (o = ln(e.v)),
                  (t = (function (e, t, r) {
                    (e = 6 * rn(e, 360)), (t = rn(t, 100)), (r = rn(r, 100));
                    var n = Math.floor(e),
                      o = e - n,
                      a = r * (1 - t),
                      i = r * (1 - o * t),
                      l = r * (1 - (1 - o) * t),
                      s = n % 6,
                      c = [r, i, a, a, l, r][s],
                      u = [l, r, r, i, a, a][s],
                      p = [a, a, l, r, r, i][s];
                    return { r: 255 * c, g: 255 * u, b: 255 * p };
                  })(e.h, n, o)),
                  (i = !0),
                  (l = "hsv"))
                : dn(e.h) &&
                  dn(e.s) &&
                  dn(e.l) &&
                  ((n = ln(e.s)),
                  (a = ln(e.l)),
                  (t = (function (e, t, r) {
                    var n, o, a;
                    function i(e, t, r) {
                      return (
                        r < 0 && (r += 1),
                        r > 1 && (r -= 1),
                        r < 1 / 6
                          ? e + 6 * (t - e) * r
                          : r < 0.5
                            ? t
                            : r < 2 / 3
                              ? e + (t - e) * (2 / 3 - r) * 6
                              : e
                      );
                    }
                    if (
                      ((e = rn(e, 360)),
                      (t = rn(t, 100)),
                      (r = rn(r, 100)),
                      0 === t)
                    )
                      n = o = a = r;
                    else {
                      var l = r < 0.5 ? r * (1 + t) : r + t - r * t,
                        s = 2 * r - l;
                      (n = i(s, l, e + 1 / 3)),
                        (o = i(s, l, e)),
                        (a = i(s, l, e - 1 / 3));
                    }
                    return { r: 255 * n, g: 255 * o, b: 255 * a };
                  })(e.h, n, a)),
                  (i = !0),
                  (l = "hsl")),
            e.hasOwnProperty("a") && (r = e.a));
          var s, c, u;
          return (
            (r = tn(r)),
            {
              ok: i,
              format: e.format || l,
              r: Math.min(255, Math.max(t.r, 0)),
              g: Math.min(255, Math.max(t.g, 0)),
              b: Math.min(255, Math.max(t.b, 0)),
              a: r,
            }
          );
        })(e);
        (this._originalInput = e),
          (this._r = r.r),
          (this._g = r.g),
          (this._b = r.b),
          (this._a = r.a),
          (this._roundA = Math.round(100 * this._a) / 100),
          (this._format = t.format || r.format),
          (this._gradientType = t.gradientType),
          this._r < 1 && (this._r = Math.round(this._r)),
          this._g < 1 && (this._g = Math.round(this._g)),
          this._b < 1 && (this._b = Math.round(this._b)),
          (this._ok = r.ok);
      }
      function zr(e, t, r) {
        (e = rn(e, 255)), (t = rn(t, 255)), (r = rn(r, 255));
        var n,
          o,
          a = Math.max(e, t, r),
          i = Math.min(e, t, r),
          l = (a + i) / 2;
        if (a == i) n = o = 0;
        else {
          var s = a - i;
          switch (((o = l > 0.5 ? s / (2 - a - i) : s / (a + i)), a)) {
            case e:
              n = (t - r) / s + (t < r ? 6 : 0);
              break;
            case t:
              n = (r - e) / s + 2;
              break;
            case r:
              n = (e - t) / s + 4;
          }
          n /= 6;
        }
        return { h: n, s: o, l };
      }
      function Dr(e, t, r) {
        (e = rn(e, 255)), (t = rn(t, 255)), (r = rn(r, 255));
        var n,
          o,
          a = Math.max(e, t, r),
          i = Math.min(e, t, r),
          l = a,
          s = a - i;
        if (((o = 0 === a ? 0 : s / a), a == i)) n = 0;
        else {
          switch (a) {
            case e:
              n = (t - r) / s + (t < r ? 6 : 0);
              break;
            case t:
              n = (r - e) / s + 2;
              break;
            case r:
              n = (e - t) / s + 4;
          }
          n /= 6;
        }
        return { h: n, s: o, v: l };
      }
      function Lr(e, t, r, n) {
        var o = [
          an(Math.round(e).toString(16)),
          an(Math.round(t).toString(16)),
          an(Math.round(r).toString(16)),
        ];
        return n &&
          o[0].charAt(0) == o[0].charAt(1) &&
          o[1].charAt(0) == o[1].charAt(1) &&
          o[2].charAt(0) == o[2].charAt(1)
          ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
          : o.join("");
      }
      function Nr(e, t, r, n) {
        return [
          an(sn(n)),
          an(Math.round(e).toString(16)),
          an(Math.round(t).toString(16)),
          an(Math.round(r).toString(16)),
        ].join("");
      }
      function Ur(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = Hr(e).toHsl();
        return (r.s -= t / 100), (r.s = nn(r.s)), Hr(r);
      }
      function Gr(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = Hr(e).toHsl();
        return (r.s += t / 100), (r.s = nn(r.s)), Hr(r);
      }
      function Wr(e) {
        return Hr(e).desaturate(100);
      }
      function Ir(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = Hr(e).toHsl();
        return (r.l += t / 100), (r.l = nn(r.l)), Hr(r);
      }
      function Xr(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = Hr(e).toRgb();
        return (
          (r.r = Math.max(
            0,
            Math.min(255, r.r - Math.round((-t / 100) * 255)),
          )),
          (r.g = Math.max(
            0,
            Math.min(255, r.g - Math.round((-t / 100) * 255)),
          )),
          (r.b = Math.max(
            0,
            Math.min(255, r.b - Math.round((-t / 100) * 255)),
          )),
          Hr(r)
        );
      }
      function Vr(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = Hr(e).toHsl();
        return (r.l -= t / 100), (r.l = nn(r.l)), Hr(r);
      }
      function $r(e, t) {
        var r = Hr(e).toHsl(),
          n = (r.h + t) % 360;
        return (r.h = n < 0 ? 360 + n : n), Hr(r);
      }
      function qr(e) {
        var t = Hr(e).toHsl();
        return (t.h = (t.h + 180) % 360), Hr(t);
      }
      function Yr(e, t) {
        if (isNaN(t) || t <= 0)
          throw new Error("Argument to polyad must be a positive number");
        for (var r = Hr(e).toHsl(), n = [Hr(e)], o = 360 / t, a = 1; a < t; a++)
          n.push(Hr({ h: (r.h + a * o) % 360, s: r.s, l: r.l }));
        return n;
      }
      function Kr(e) {
        var t = Hr(e).toHsl(),
          r = t.h;
        return [
          Hr(e),
          Hr({ h: (r + 72) % 360, s: t.s, l: t.l }),
          Hr({ h: (r + 216) % 360, s: t.s, l: t.l }),
        ];
      }
      function Zr(e, t, r) {
        (t = t || 6), (r = r || 30);
        var n = Hr(e).toHsl(),
          o = 360 / r,
          a = [Hr(e)];
        for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; )
          (n.h = (n.h + o) % 360), a.push(Hr(n));
        return a;
      }
      function Jr(e, t) {
        t = t || 6;
        for (
          var r = Hr(e).toHsv(), n = r.h, o = r.s, a = r.v, i = [], l = 1 / t;
          t--;
        )
          i.push(Hr({ h: n, s: o, v: a })), (a = (a + l) % 1);
        return i;
      }
      (Hr.prototype = {
        isDark: function () {
          return this.getBrightness() < 128;
        },
        isLight: function () {
          return !this.isDark();
        },
        isValid: function () {
          return this._ok;
        },
        getOriginalInput: function () {
          return this._originalInput;
        },
        getFormat: function () {
          return this._format;
        },
        getAlpha: function () {
          return this._a;
        },
        getBrightness: function () {
          var e = this.toRgb();
          return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
        },
        getLuminance: function () {
          var e,
            t,
            r,
            n = this.toRgb();
          return (
            (e = n.r / 255),
            (t = n.g / 255),
            (r = n.b / 255),
            0.2126 *
              (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) +
              0.7152 *
                (t <= 0.03928
                  ? t / 12.92
                  : Math.pow((t + 0.055) / 1.055, 2.4)) +
              0.0722 *
                (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4))
          );
        },
        setAlpha: function (e) {
          return (
            (this._a = tn(e)),
            (this._roundA = Math.round(100 * this._a) / 100),
            this
          );
        },
        toHsv: function () {
          var e = Dr(this._r, this._g, this._b);
          return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
        },
        toHsvString: function () {
          var e = Dr(this._r, this._g, this._b),
            t = Math.round(360 * e.h),
            r = Math.round(100 * e.s),
            n = Math.round(100 * e.v);
          return 1 == this._a
            ? "hsv(" + t + ", " + r + "%, " + n + "%)"
            : "hsva(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHsl: function () {
          var e = zr(this._r, this._g, this._b);
          return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
        },
        toHslString: function () {
          var e = zr(this._r, this._g, this._b),
            t = Math.round(360 * e.h),
            r = Math.round(100 * e.s),
            n = Math.round(100 * e.l);
          return 1 == this._a
            ? "hsl(" + t + ", " + r + "%, " + n + "%)"
            : "hsla(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHex: function (e) {
          return Lr(this._r, this._g, this._b, e);
        },
        toHexString: function (e) {
          return "#" + this.toHex(e);
        },
        toHex8: function (e) {
          return (function (e, t, r, n, o) {
            var a = [
              an(Math.round(e).toString(16)),
              an(Math.round(t).toString(16)),
              an(Math.round(r).toString(16)),
              an(sn(n)),
            ];
            if (
              o &&
              a[0].charAt(0) == a[0].charAt(1) &&
              a[1].charAt(0) == a[1].charAt(1) &&
              a[2].charAt(0) == a[2].charAt(1) &&
              a[3].charAt(0) == a[3].charAt(1)
            )
              return (
                a[0].charAt(0) +
                a[1].charAt(0) +
                a[2].charAt(0) +
                a[3].charAt(0)
              );
            return a.join("");
          })(this._r, this._g, this._b, this._a, e);
        },
        toHex8String: function (e) {
          return "#" + this.toHex8(e);
        },
        toRgb: function () {
          return {
            r: Math.round(this._r),
            g: Math.round(this._g),
            b: Math.round(this._b),
            a: this._a,
          };
        },
        toRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(this._r) +
                ", " +
                Math.round(this._g) +
                ", " +
                Math.round(this._b) +
                ")"
            : "rgba(" +
                Math.round(this._r) +
                ", " +
                Math.round(this._g) +
                ", " +
                Math.round(this._b) +
                ", " +
                this._roundA +
                ")";
        },
        toPercentageRgb: function () {
          return {
            r: Math.round(100 * rn(this._r, 255)) + "%",
            g: Math.round(100 * rn(this._g, 255)) + "%",
            b: Math.round(100 * rn(this._b, 255)) + "%",
            a: this._a,
          };
        },
        toPercentageRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(100 * rn(this._r, 255)) +
                "%, " +
                Math.round(100 * rn(this._g, 255)) +
                "%, " +
                Math.round(100 * rn(this._b, 255)) +
                "%)"
            : "rgba(" +
                Math.round(100 * rn(this._r, 255)) +
                "%, " +
                Math.round(100 * rn(this._g, 255)) +
                "%, " +
                Math.round(100 * rn(this._b, 255)) +
                "%, " +
                this._roundA +
                ")";
        },
        toName: function () {
          return 0 === this._a
            ? "transparent"
            : !(this._a < 1) && (en[Lr(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
          var t = "#" + Nr(this._r, this._g, this._b, this._a),
            r = t,
            n = this._gradientType ? "GradientType = 1, " : "";
          if (e) {
            var o = Hr(e);
            r = "#" + Nr(o._r, o._g, o._b, o._a);
          }
          return (
            "progid:DXImageTransform.Microsoft.gradient(" +
            n +
            "startColorstr=" +
            t +
            ",endColorstr=" +
            r +
            ")"
          );
        },
        toString: function (e) {
          var t = !!e;
          e = e || this._format;
          var r = !1,
            n = this._a < 1 && this._a >= 0;
          return t ||
            !n ||
            ("hex" !== e &&
              "hex6" !== e &&
              "hex3" !== e &&
              "hex4" !== e &&
              "hex8" !== e &&
              "name" !== e)
            ? ("rgb" === e && (r = this.toRgbString()),
              "prgb" === e && (r = this.toPercentageRgbString()),
              ("hex" !== e && "hex6" !== e) || (r = this.toHexString()),
              "hex3" === e && (r = this.toHexString(!0)),
              "hex4" === e && (r = this.toHex8String(!0)),
              "hex8" === e && (r = this.toHex8String()),
              "name" === e && (r = this.toName()),
              "hsl" === e && (r = this.toHslString()),
              "hsv" === e && (r = this.toHsvString()),
              r || this.toHexString())
            : "name" === e && 0 === this._a
              ? this.toName()
              : this.toRgbString();
        },
        clone: function () {
          return Hr(this.toString());
        },
        _applyModification: function (e, t) {
          var r = e.apply(null, [this].concat([].slice.call(t)));
          return (
            (this._r = r._r),
            (this._g = r._g),
            (this._b = r._b),
            this.setAlpha(r._a),
            this
          );
        },
        lighten: function () {
          return this._applyModification(Ir, arguments);
        },
        brighten: function () {
          return this._applyModification(Xr, arguments);
        },
        darken: function () {
          return this._applyModification(Vr, arguments);
        },
        desaturate: function () {
          return this._applyModification(Ur, arguments);
        },
        saturate: function () {
          return this._applyModification(Gr, arguments);
        },
        greyscale: function () {
          return this._applyModification(Wr, arguments);
        },
        spin: function () {
          return this._applyModification($r, arguments);
        },
        _applyCombination: function (e, t) {
          return e.apply(null, [this].concat([].slice.call(t)));
        },
        analogous: function () {
          return this._applyCombination(Zr, arguments);
        },
        complement: function () {
          return this._applyCombination(qr, arguments);
        },
        monochromatic: function () {
          return this._applyCombination(Jr, arguments);
        },
        splitcomplement: function () {
          return this._applyCombination(Kr, arguments);
        },
        triad: function () {
          return this._applyCombination(Yr, [3]);
        },
        tetrad: function () {
          return this._applyCombination(Yr, [4]);
        },
      }),
        (Hr.fromRatio = function (e, t) {
          if ("object" == Br(e)) {
            var r = {};
            for (var n in e)
              e.hasOwnProperty(n) && (r[n] = "a" === n ? e[n] : ln(e[n]));
            e = r;
          }
          return Hr(e, t);
        }),
        (Hr.equals = function (e, t) {
          return !(!e || !t) && Hr(e).toRgbString() == Hr(t).toRgbString();
        }),
        (Hr.random = function () {
          return Hr.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
          });
        }),
        (Hr.mix = function (e, t, r) {
          r = 0 === r ? 0 : r || 50;
          var n = Hr(e).toRgb(),
            o = Hr(t).toRgb(),
            a = r / 100;
          return Hr({
            r: (o.r - n.r) * a + n.r,
            g: (o.g - n.g) * a + n.g,
            b: (o.b - n.b) * a + n.b,
            a: (o.a - n.a) * a + n.a,
          });
        }),
        (Hr.readability = function (e, t) {
          var r = Hr(e),
            n = Hr(t);
          return (
            (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) /
            (Math.min(r.getLuminance(), n.getLuminance()) + 0.05)
          );
        }),
        (Hr.isReadable = function (e, t, r) {
          var n,
            o,
            a = Hr.readability(e, t);
          switch (
            ((o = !1),
            (n = (function (e) {
              var t, r;
              (t = (
                (e = e || { level: "AA", size: "small" }).level || "AA"
              ).toUpperCase()),
                (r = (e.size || "small").toLowerCase()),
                "AA" !== t && "AAA" !== t && (t = "AA");
              "small" !== r && "large" !== r && (r = "small");
              return { level: t, size: r };
            })(r)).level + n.size)
          ) {
            case "AAsmall":
            case "AAAlarge":
              o = a >= 4.5;
              break;
            case "AAlarge":
              o = a >= 3;
              break;
            case "AAAsmall":
              o = a >= 7;
          }
          return o;
        }),
        (Hr.mostReadable = function (e, t, r) {
          var n,
            o,
            a,
            i,
            l = null,
            s = 0;
          (o = (r = r || {}).includeFallbackColors),
            (a = r.level),
            (i = r.size);
          for (var c = 0; c < t.length; c++)
            (n = Hr.readability(e, t[c])) > s && ((s = n), (l = Hr(t[c])));
          return Hr.isReadable(e, l, { level: a, size: i }) || !o
            ? l
            : ((r.includeFallbackColors = !1),
              Hr.mostReadable(e, ["#fff", "#000"], r));
        });
      var Qr = (Hr.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32",
        }),
        en = (Hr.hexNames = (function (e) {
          var t = {};
          for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
          return t;
        })(Qr));
      function tn(e) {
        return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
      }
      function rn(e, t) {
        (function (e) {
          return (
            "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
          );
        })(e) && (e = "100%");
        var r = (function (e) {
          return "string" == typeof e && -1 != e.indexOf("%");
        })(e);
        return (
          (e = Math.min(t, Math.max(0, parseFloat(e)))),
          r && (e = parseInt(e * t, 10) / 100),
          Math.abs(e - t) < 1e-6 ? 1 : (e % t) / parseFloat(t)
        );
      }
      function nn(e) {
        return Math.min(1, Math.max(0, e));
      }
      function on(e) {
        return parseInt(e, 16);
      }
      function an(e) {
        return 1 == e.length ? "0" + e : "" + e;
      }
      function ln(e) {
        return e <= 1 && (e = 100 * e + "%"), e;
      }
      function sn(e) {
        return Math.round(255 * parseFloat(e)).toString(16);
      }
      function cn(e) {
        return on(e) / 255;
      }
      var un,
        pn,
        fn,
        hn =
          ((pn =
            "[\\s|\\(]+(" +
            (un = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
            ")[,|\\s]+(" +
            un +
            ")[,|\\s]+(" +
            un +
            ")\\s*\\)?"),
          (fn =
            "[\\s|\\(]+(" +
            un +
            ")[,|\\s]+(" +
            un +
            ")[,|\\s]+(" +
            un +
            ")[,|\\s]+(" +
            un +
            ")\\s*\\)?"),
          {
            CSS_UNIT: new RegExp(un),
            rgb: new RegExp("rgb" + pn),
            rgba: new RegExp("rgba" + fn),
            hsl: new RegExp("hsl" + pn),
            hsla: new RegExp("hsla" + fn),
            hsv: new RegExp("hsv" + pn),
            hsva: new RegExp("hsva" + fn),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          });
      function dn(e) {
        return !!hn.CSS_UNIT.exec(e);
      }
      var bn = function (e) {
          var t = 0,
            r = 0;
          return (
            Fr(["r", "g", "b", "a", "h", "s", "l", "v"], function (n) {
              if (
                e[n] &&
                ((t += 1), isNaN(e[n]) || (r += 1), "s" === n || "l" === n)
              ) {
                /^\d+%$/.test(e[n]) && (r += 1);
              }
            }),
            t === r && e
          );
        },
        gn = function (e, t) {
          var r = e.hex ? Hr(e.hex) : Hr(e),
            n = r.toHsl(),
            o = r.toHsv(),
            a = r.toRgb(),
            i = r.toHex();
          return (
            0 === n.s && ((n.h = t || 0), (o.h = t || 0)),
            {
              hsl: n,
              hex: "000000" === i && 0 === a.a ? "transparent" : "#" + i,
              rgb: a,
              hsv: o,
              oldHue: e.h || t || n.h,
              source: e.source,
            }
          );
        },
        vn = function (e) {
          if ("transparent" === e) return !0;
          var t = "#" === String(e).charAt(0) ? 1 : 0;
          return e.length !== 4 + t && e.length < 7 + t && Hr(e).isValid();
        },
        xn = function (e) {
          if (!e) return "#fff";
          var t = gn(e);
          return "transparent" === t.hex
            ? "rgba(0,0,0,0.4)"
            : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128
              ? "#000"
              : "#fff";
        },
        yn = function (e, t) {
          return Hr(t + " (" + e.replace("°", "") + ")")._ok;
        },
        mn =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        wn = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      const En = function (e) {
        var t = (function (t) {
          function r(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            var t = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
            return (
              (t.handleChange = function (e, r) {
                if (bn(e)) {
                  var n = gn(e, e.h || t.state.oldHue);
                  t.setState(n),
                    t.props.onChangeComplete &&
                      t.debounce(t.props.onChangeComplete, n, r),
                    t.props.onChange && t.props.onChange(n, r);
                }
              }),
              (t.handleSwatchHover = function (e, r) {
                if (bn(e)) {
                  var n = gn(e, e.h || t.state.oldHue);
                  t.props.onSwatchHover && t.props.onSwatchHover(n, r);
                }
              }),
              (t.state = mn({}, gn(e.color, 0))),
              (t.debounce = mr(function (e, t, r) {
                e(t, r);
              }, 100)),
              t
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(r, t),
            wn(
              r,
              [
                {
                  key: "render",
                  value: function () {
                    var t = {};
                    return (
                      this.props.onSwatchHover &&
                        (t.onSwatchHover = this.handleSwatchHover),
                      n.createElement(
                        e,
                        mn(
                          {},
                          this.props,
                          this.state,
                          { onChange: this.handleChange },
                          t,
                        ),
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return mn({}, gn(e.color, t.oldHue));
                  },
                },
              ],
            ),
            r
          );
        })(n.PureComponent || n.Component);
        return (
          (t.propTypes = mn({}, e.propTypes)),
          (t.defaultProps = mn({}, e.defaultProps, {
            color: { h: 250, s: 0.5, l: 0.2, a: 1 },
          })),
          t
        );
      };
      var _n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        Cn = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      function Sn(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var jn =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
      const kn = (function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "span";
        return (function (r) {
          function o() {
            var e, t, r;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, o);
            for (var n = arguments.length, a = Array(n), i = 0; i < n; i++)
              a[i] = arguments[i];
            return (
              (t = r =
                Sn(
                  this,
                  (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(
                    e,
                    [this].concat(a),
                  ),
                )),
              (r.state = { focus: !1 }),
              (r.handleFocus = function () {
                return r.setState({ focus: !0 });
              }),
              (r.handleBlur = function () {
                return r.setState({ focus: !1 });
              }),
              Sn(r, t)
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(o, r),
            Cn(o, [
              {
                key: "render",
                value: function () {
                  return n.createElement(
                    t,
                    { onFocus: this.handleFocus, onBlur: this.handleBlur },
                    n.createElement(e, _n({}, this.props, this.state)),
                  );
                },
              },
            ]),
            o
          );
        })(n.Component);
      })(function (e) {
        var t = e.color,
          r = e.style,
          a = e.onClick,
          i = void 0 === a ? function () {} : a,
          l = e.onHover,
          s = e.title,
          u = void 0 === s ? t : s,
          p = e.children,
          f = e.focus,
          h = e.focusStyle,
          d = void 0 === h ? {} : h,
          b = "transparent" === t,
          g = (0, o.Ay)({
            default: {
              swatch: jn(
                {
                  background: t,
                  height: "100%",
                  width: "100%",
                  cursor: "pointer",
                  position: "relative",
                  outline: "none",
                },
                r,
                f ? d : {},
              ),
            },
          }),
          v = {};
        return (
          l &&
            (v.onMouseOver = function (e) {
              return l(t, e);
            }),
          n.createElement(
            "div",
            jn(
              {
                style: g.swatch,
                onClick: function (e) {
                  return i(t, e);
                },
                title: u,
                tabIndex: 0,
                onKeyDown: function (e) {
                  return 13 === e.keyCode && i(t, e);
                },
              },
              v,
            ),
            p,
            b &&
              n.createElement(c, {
                borderRadius: g.swatch.borderRadius,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
              }),
          )
        );
      });
      const On = function (e) {
        var t = e.direction,
          r = (0, o.Ay)(
            {
              default: {
                picker: {
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  transform: "translate(-9px, -1px)",
                  backgroundColor: "rgb(248, 248, 248)",
                  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
                },
              },
              vertical: { picker: { transform: "translate(-3px, -9px)" } },
            },
            { vertical: "vertical" === t },
          );
        return n.createElement("div", { style: r.picker });
      };
      var An =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        Mn = function (e) {
          var t = e.rgb,
            r = e.hsl,
            a = e.width,
            i = e.height,
            l = e.onChange,
            s = e.direction,
            c = e.style,
            u = e.renderers,
            p = e.pointer,
            f = e.className,
            d = void 0 === f ? "" : f,
            b = (0, o.Ay)({
              default: {
                picker: { position: "relative", width: a, height: i },
                alpha: { radius: "2px", style: c },
              },
            });
          return n.createElement(
            "div",
            { style: b.picker, className: "alpha-picker " + d },
            n.createElement(
              h,
              An({}, b.alpha, {
                rgb: t,
                hsl: r,
                pointer: p,
                renderers: u,
                onChange: l,
                direction: s,
              }),
            ),
          );
        };
      Mn.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: On,
      };
      En(Mn);
      const Rn = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; )
          o[r] = t(e[r], r, e);
        return o;
      };
      const Fn = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      };
      const Bn = function (e) {
        return this.__data__.has(e);
      };
      function Tn(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new Fe(); ++t < r; ) this.add(e[t]);
      }
      (Tn.prototype.add = Tn.prototype.push = Fn), (Tn.prototype.has = Bn);
      const Pn = Tn;
      const Hn = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e)) return !0;
        return !1;
      };
      const zn = function (e, t) {
        return e.has(t);
      };
      const Dn = function (e, t, r, n, o, a) {
        var i = 1 & r,
          l = e.length,
          s = t.length;
        if (l != s && !(i && s > l)) return !1;
        var c = a.get(e),
          u = a.get(t);
        if (c && u) return c == t && u == e;
        var p = -1,
          f = !0,
          h = 2 & r ? new Pn() : void 0;
        for (a.set(e, t), a.set(t, e); ++p < l; ) {
          var d = e[p],
            b = t[p];
          if (n) var g = i ? n(b, d, p, t, e, a) : n(d, b, p, e, t, a);
          if (void 0 !== g) {
            if (g) continue;
            f = !1;
            break;
          }
          if (h) {
            if (
              !Hn(t, function (e, t) {
                if (!zn(h, t) && (d === e || o(d, e, r, n, a)))
                  return h.push(t);
              })
            ) {
              f = !1;
              break;
            }
          } else if (d !== b && !o(d, b, r, n, a)) {
            f = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), f;
      };
      const Ln = function (e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, n) {
            r[++t] = [n, e];
          }),
          r
        );
      };
      const Nn = function (e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      };
      var Un = N ? N.prototype : void 0,
        Gn = Un ? Un.valueOf : void 0;
      const Wn = function (e, t, r, n, o, a, i) {
        switch (r) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !a(new Xe(e), new Xe(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return C(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var l = Ln;
          case "[object Set]":
            var s = 1 & n;
            if ((l || (l = Nn), e.size != t.size && !s)) return !1;
            var c = i.get(e);
            if (c) return c == t;
            (n |= 2), i.set(e, t);
            var u = Dn(l(e), l(t), n, o, a, i);
            return i.delete(e), u;
          case "[object Symbol]":
            if (Gn) return Gn.call(e) == Gn.call(t);
        }
        return !1;
      };
      const In = function (e, t) {
        for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
        return e;
      };
      const Xn = function (e, t, r) {
        var n = t(e);
        return st(e) ? n : In(n, r(e));
      };
      const Vn = function (e, t) {
        for (
          var r = -1, n = null == e ? 0 : e.length, o = 0, a = [];
          ++r < n;
        ) {
          var i = e[r];
          t(i, r, e) && (a[o++] = i);
        }
        return a;
      };
      const $n = function () {
        return [];
      };
      var qn = Object.prototype.propertyIsEnumerable,
        Yn = Object.getOwnPropertySymbols;
      const Kn = Yn
        ? function (e) {
            return null == e
              ? []
              : ((e = Object(e)),
                Vn(Yn(e), function (t) {
                  return qn.call(e, t);
                }));
          }
        : $n;
      const Zn = function (e) {
        return Xn(e, Ar, Kn);
      };
      var Jn = Object.prototype.hasOwnProperty;
      const Qn = function (e, t, r, n, o, a) {
        var i = 1 & r,
          l = Zn(e),
          s = l.length;
        if (s != Zn(t).length && !i) return !1;
        for (var c = s; c--; ) {
          var u = l[c];
          if (!(i ? u in t : Jn.call(t, u))) return !1;
        }
        var p = a.get(e),
          f = a.get(t);
        if (p && f) return p == t && f == e;
        var h = !0;
        a.set(e, t), a.set(t, e);
        for (var d = i; ++c < s; ) {
          var b = e[(u = l[c])],
            g = t[u];
          if (n) var v = i ? n(g, b, u, t, e, a) : n(b, g, u, e, t, a);
          if (!(void 0 === v ? b === g || o(b, g, r, n, a) : v)) {
            h = !1;
            break;
          }
          d || (d = "constructor" == u);
        }
        if (h && !d) {
          var x = e.constructor,
            y = t.constructor;
          x == y ||
            !("constructor" in e) ||
            !("constructor" in t) ||
            ("function" == typeof x &&
              x instanceof x &&
              "function" == typeof y &&
              y instanceof y) ||
            (h = !1);
        }
        return a.delete(e), a.delete(t), h;
      };
      const eo = fe(L, "DataView");
      const to = fe(L, "Promise");
      const ro = fe(L, "Set");
      const no = fe(L, "WeakMap");
      var oo = "[object Map]",
        ao = "[object Promise]",
        io = "[object Set]",
        lo = "[object WeakMap]",
        so = "[object DataView]",
        co = ne(eo),
        uo = ne(he),
        po = ne(to),
        fo = ne(ro),
        ho = ne(no),
        bo = Y;
      ((eo && bo(new eo(new ArrayBuffer(1))) != so) ||
        (he && bo(new he()) != oo) ||
        (to && bo(to.resolve()) != ao) ||
        (ro && bo(new ro()) != io) ||
        (no && bo(new no()) != lo)) &&
        (bo = function (e) {
          var t = Y(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? ne(r) : "";
          if (n)
            switch (n) {
              case co:
                return so;
              case uo:
                return oo;
              case po:
                return ao;
              case fo:
                return io;
              case ho:
                return lo;
            }
          return t;
        });
      const go = bo;
      var vo = "[object Arguments]",
        xo = "[object Array]",
        yo = "[object Object]",
        mo = Object.prototype.hasOwnProperty;
      const wo = function (e, t, r, n, o, a) {
        var i = st(e),
          l = st(t),
          s = i ? xo : go(e),
          c = l ? xo : go(t),
          u = (s = s == vo ? yo : s) == yo,
          p = (c = c == vo ? yo : c) == yo,
          f = s == c;
        if (f && gt(e)) {
          if (!gt(t)) return !1;
          (i = !0), (u = !1);
        }
        if (f && !u)
          return (
            a || (a = new Pe()),
            i || Rt(e) ? Dn(e, t, r, n, o, a) : Wn(e, t, s, r, n, o, a)
          );
        if (!(1 & r)) {
          var h = u && mo.call(e, "__wrapped__"),
            d = p && mo.call(t, "__wrapped__");
          if (h || d) {
            var b = h ? e.value() : e,
              g = d ? t.value() : t;
            return a || (a = new Pe()), o(b, g, r, n, a);
          }
        }
        return !!f && (a || (a = new Pe()), Qn(e, t, r, n, o, a));
      };
      const Eo = function e(t, r, n, o, a) {
        return (
          t === r ||
          (null == t || null == r || (!rt(t) && !rt(r))
            ? t != t && r != r
            : wo(t, r, n, o, e, a))
        );
      };
      const _o = function (e, t, r, n) {
        var o = r.length,
          a = o,
          i = !n;
        if (null == e) return !a;
        for (e = Object(e); o--; ) {
          var l = r[o];
          if (i && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
        }
        for (; ++o < a; ) {
          var s = (l = r[o])[0],
            c = e[s],
            u = l[1];
          if (i && l[2]) {
            if (void 0 === c && !(s in e)) return !1;
          } else {
            var p = new Pe();
            if (n) var f = n(c, u, s, e, t, p);
            if (!(void 0 === f ? Eo(u, c, 3, n, p) : f)) return !1;
          }
        }
        return !0;
      };
      const Co = function (e) {
        return e == e && !K(e);
      };
      const So = function (e) {
        for (var t = Ar(e), r = t.length; r--; ) {
          var n = t[r],
            o = e[n];
          t[r] = [n, o, Co(o)];
        }
        return t;
      };
      const jo = function (e, t) {
        return function (r) {
          return null != r && r[e] === t && (void 0 !== t || e in Object(r));
        };
      };
      const ko = function (e) {
        var t = So(e);
        return 1 == t.length && t[0][2]
          ? jo(t[0][0], t[0][1])
          : function (r) {
              return r === e || _o(r, e, t);
            };
      };
      var Oo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Ao = /^\w*$/;
      const Mo = function (e, t) {
        if (st(e)) return !1;
        var r = typeof e;
        return (
          !(
            "number" != r &&
            "symbol" != r &&
            "boolean" != r &&
            null != e &&
            !fr(e)
          ) ||
          Ao.test(e) || !Oo.test(e) ||
          (null != t && e in Object(t))
        );
      };
      function Ro(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var r = function () {
          var n = arguments,
            o = t ? t.apply(this, n) : n[0],
            a = r.cache;
          if (a.has(o)) return a.get(o);
          var i = e.apply(this, n);
          return (r.cache = a.set(o, i) || a), i;
        };
        return (r.cache = new (Ro.Cache || Fe)()), r;
      }
      Ro.Cache = Fe;
      const Fo = Ro;
      var Bo =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        To = /\\(\\)?/g;
      const Po = (function (e) {
        var t = Fo(e, function (e) {
            return 500 === r.size && r.clear(), e;
          }),
          r = t.cache;
        return t;
      })(function (e) {
        var t = [];
        return (
          46 === e.charCodeAt(0) && t.push(""),
          e.replace(Bo, function (e, r, n, o) {
            t.push(n ? o.replace(To, "$1") : r || e);
          }),
          t
        );
      });
      var Ho = N ? N.prototype : void 0,
        zo = Ho ? Ho.toString : void 0;
      const Do = function e(t) {
        if ("string" == typeof t) return t;
        if (st(t)) return Rn(t, e) + "";
        if (fr(t)) return zo ? zo.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -Infinity ? "-0" : r;
      };
      const Lo = function (e) {
        return null == e ? "" : Do(e);
      };
      const No = function (e, t) {
        return st(e) ? e : Mo(e, t) ? [e] : Po(Lo(e));
      };
      const Uo = function (e) {
        if ("string" == typeof e || fr(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
      const Go = function (e, t) {
        for (var r = 0, n = (t = No(t, e)).length; null != e && r < n; )
          e = e[Uo(t[r++])];
        return r && r == n ? e : void 0;
      };
      const Wo = function (e, t, r) {
        var n = null == e ? void 0 : Go(e, t);
        return void 0 === n ? r : n;
      };
      const Io = function (e, t) {
        return null != e && t in Object(e);
      };
      const Xo = function (e, t, r) {
        for (var n = -1, o = (t = No(t, e)).length, a = !1; ++n < o; ) {
          var i = Uo(t[n]);
          if (!(a = null != e && r(e, i))) break;
          e = e[i];
        }
        return a || ++n != o
          ? a
          : !!(o = null == e ? 0 : e.length) &&
              ct(o) &&
              Dt(i, o) &&
              (st(e) || lt(e));
      };
      const Vo = function (e, t) {
        return null != e && Xo(e, t, Io);
      };
      const $o = function (e, t) {
        return Mo(e) && Co(t)
          ? jo(Uo(e), t)
          : function (r) {
              var n = Wo(r, e);
              return void 0 === n && n === t ? Vo(r, e) : Eo(t, n, 3);
            };
      };
      const qo = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
      const Yo = function (e) {
        return function (t) {
          return Go(t, e);
        };
      };
      const Ko = function (e) {
        return Mo(e) ? qo(Uo(e)) : Yo(e);
      };
      const Zo = function (e) {
        return "function" == typeof e
          ? e
          : null == e
            ? qt
            : "object" == typeof e
              ? st(e)
                ? $o(e[0], e[1])
                : ko(e)
              : Ko(e);
      };
      const Jo = function (e, t) {
        var r = -1,
          n = ut(e) ? Array(e.length) : [];
        return (
          Mr(e, function (e, o, a) {
            n[++r] = t(e, o, a);
          }),
          n
        );
      };
      const Qo = function (e, t) {
        return (st(e) ? Rn : Jo)(e, Zo(t, 3));
      };
      const ea = function (e) {
        var t = e.colors,
          r = e.onClick,
          a = e.onSwatchHover,
          i = (0, o.Ay)({
            default: {
              swatches: { marginRight: "-10px" },
              swatch: {
                width: "22px",
                height: "22px",
                float: "left",
                marginRight: "10px",
                marginBottom: "10px",
                borderRadius: "4px",
              },
              clear: { clear: "both" },
            },
          });
        return n.createElement(
          "div",
          { style: i.swatches },
          Qo(t, function (e) {
            return n.createElement(kn, {
              key: e,
              color: e,
              style: i.swatch,
              onClick: r,
              onHover: a,
              focusStyle: { boxShadow: "0 0 4px " + e },
            });
          }),
          n.createElement("div", { style: i.clear }),
        );
      };
      var ta = function (e) {
        var t = e.onChange,
          r = e.onSwatchHover,
          a = e.hex,
          i = e.colors,
          l = e.width,
          s = e.triangle,
          u = e.styles,
          p = void 0 === u ? {} : u,
          f = e.className,
          h = void 0 === f ? "" : f,
          d = "transparent" === a,
          b = function (e, r) {
            vn(e) && t({ hex: e, source: "hex" }, r);
          },
          g = (0, o.Ay)(
            or(
              {
                default: {
                  card: {
                    width: l,
                    background: "#fff",
                    boxShadow: "0 1px rgba(0,0,0,.1)",
                    borderRadius: "6px",
                    position: "relative",
                  },
                  head: {
                    height: "110px",
                    background: a,
                    borderRadius: "6px 6px 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  },
                  body: { padding: "10px" },
                  label: {
                    fontSize: "18px",
                    color: xn(a),
                    position: "relative",
                  },
                  triangle: {
                    width: "0px",
                    height: "0px",
                    borderStyle: "solid",
                    borderWidth: "0 10px 10px 10px",
                    borderColor:
                      "transparent transparent " + a + " transparent",
                    position: "absolute",
                    top: "-10px",
                    left: "50%",
                    marginLeft: "-10px",
                  },
                  input: {
                    width: "100%",
                    fontSize: "12px",
                    color: "#666",
                    border: "0px",
                    outline: "none",
                    height: "22px",
                    boxShadow: "inset 0 0 0 1px #ddd",
                    borderRadius: "4px",
                    padding: "0 7px",
                    boxSizing: "border-box",
                  },
                },
                "hide-triangle": { triangle: { display: "none" } },
              },
              p,
            ),
            { "hide-triangle": "hide" === s },
          );
        return n.createElement(
          "div",
          { style: g.card, className: "block-picker " + h },
          n.createElement("div", { style: g.triangle }),
          n.createElement(
            "div",
            { style: g.head },
            d && n.createElement(c, { borderRadius: "6px 6px 0 0" }),
            n.createElement("div", { style: g.label }, a),
          ),
          n.createElement(
            "div",
            { style: g.body },
            n.createElement(ea, { colors: i, onClick: b, onSwatchHover: r }),
            n.createElement(v, {
              style: { input: g.input },
              value: a,
              onChange: b,
            }),
          ),
        );
      };
      (ta.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        colors: E().arrayOf(E().string),
        triangle: E().oneOf(["top", "hide"]),
        styles: E().object,
      }),
        (ta.defaultProps = {
          width: 170,
          colors: [
            "#D9E3F0",
            "#F47373",
            "#697689",
            "#37D67A",
            "#2CCCE4",
            "#555555",
            "#dce775",
            "#ff8a65",
            "#ba68c8",
          ],
          triangle: "top",
          styles: {},
        });
      En(ta);
      var ra = {
          50: "#ffebee",
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#f44336",
          600: "#e53935",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
          a100: "#ff8a80",
          a200: "#ff5252",
          a400: "#ff1744",
          a700: "#d50000",
        },
        na = {
          50: "#fce4ec",
          100: "#f8bbd0",
          200: "#f48fb1",
          300: "#f06292",
          400: "#ec407a",
          500: "#e91e63",
          600: "#d81b60",
          700: "#c2185b",
          800: "#ad1457",
          900: "#880e4f",
          a100: "#ff80ab",
          a200: "#ff4081",
          a400: "#f50057",
          a700: "#c51162",
        },
        oa = {
          50: "#f3e5f5",
          100: "#e1bee7",
          200: "#ce93d8",
          300: "#ba68c8",
          400: "#ab47bc",
          500: "#9c27b0",
          600: "#8e24aa",
          700: "#7b1fa2",
          800: "#6a1b9a",
          900: "#4a148c",
          a100: "#ea80fc",
          a200: "#e040fb",
          a400: "#d500f9",
          a700: "#aa00ff",
        },
        aa = {
          50: "#ede7f6",
          100: "#d1c4e9",
          200: "#b39ddb",
          300: "#9575cd",
          400: "#7e57c2",
          500: "#673ab7",
          600: "#5e35b1",
          700: "#512da8",
          800: "#4527a0",
          900: "#311b92",
          a100: "#b388ff",
          a200: "#7c4dff",
          a400: "#651fff",
          a700: "#6200ea",
        },
        ia = {
          50: "#e8eaf6",
          100: "#c5cae9",
          200: "#9fa8da",
          300: "#7986cb",
          400: "#5c6bc0",
          500: "#3f51b5",
          600: "#3949ab",
          700: "#303f9f",
          800: "#283593",
          900: "#1a237e",
          a100: "#8c9eff",
          a200: "#536dfe",
          a400: "#3d5afe",
          a700: "#304ffe",
        },
        la = {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
          a100: "#82b1ff",
          a200: "#448aff",
          a400: "#2979ff",
          a700: "#2962ff",
        },
        sa = {
          50: "#e1f5fe",
          100: "#b3e5fc",
          200: "#81d4fa",
          300: "#4fc3f7",
          400: "#29b6f6",
          500: "#03a9f4",
          600: "#039be5",
          700: "#0288d1",
          800: "#0277bd",
          900: "#01579b",
          a100: "#80d8ff",
          a200: "#40c4ff",
          a400: "#00b0ff",
          a700: "#0091ea",
        },
        ca = {
          50: "#e0f7fa",
          100: "#b2ebf2",
          200: "#80deea",
          300: "#4dd0e1",
          400: "#26c6da",
          500: "#00bcd4",
          600: "#00acc1",
          700: "#0097a7",
          800: "#00838f",
          900: "#006064",
          a100: "#84ffff",
          a200: "#18ffff",
          a400: "#00e5ff",
          a700: "#00b8d4",
        },
        ua = {
          50: "#e0f2f1",
          100: "#b2dfdb",
          200: "#80cbc4",
          300: "#4db6ac",
          400: "#26a69a",
          500: "#009688",
          600: "#00897b",
          700: "#00796b",
          800: "#00695c",
          900: "#004d40",
          a100: "#a7ffeb",
          a200: "#64ffda",
          a400: "#1de9b6",
          a700: "#00bfa5",
        },
        pa = {
          50: "#e8f5e9",
          100: "#c8e6c9",
          200: "#a5d6a7",
          300: "#81c784",
          400: "#66bb6a",
          500: "#4caf50",
          600: "#43a047",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
          a100: "#b9f6ca",
          a200: "#69f0ae",
          a400: "#00e676",
          a700: "#00c853",
        },
        fa = {
          50: "#f1f8e9",
          100: "#dcedc8",
          200: "#c5e1a5",
          300: "#aed581",
          400: "#9ccc65",
          500: "#8bc34a",
          600: "#7cb342",
          700: "#689f38",
          800: "#558b2f",
          900: "#33691e",
          a100: "#ccff90",
          a200: "#b2ff59",
          a400: "#76ff03",
          a700: "#64dd17",
        },
        ha = {
          50: "#f9fbe7",
          100: "#f0f4c3",
          200: "#e6ee9c",
          300: "#dce775",
          400: "#d4e157",
          500: "#cddc39",
          600: "#c0ca33",
          700: "#afb42b",
          800: "#9e9d24",
          900: "#827717",
          a100: "#f4ff81",
          a200: "#eeff41",
          a400: "#c6ff00",
          a700: "#aeea00",
        },
        da = {
          50: "#fffde7",
          100: "#fff9c4",
          200: "#fff59d",
          300: "#fff176",
          400: "#ffee58",
          500: "#ffeb3b",
          600: "#fdd835",
          700: "#fbc02d",
          800: "#f9a825",
          900: "#f57f17",
          a100: "#ffff8d",
          a200: "#ffff00",
          a400: "#ffea00",
          a700: "#ffd600",
        },
        ba = {
          50: "#fff8e1",
          100: "#ffecb3",
          200: "#ffe082",
          300: "#ffd54f",
          400: "#ffca28",
          500: "#ffc107",
          600: "#ffb300",
          700: "#ffa000",
          800: "#ff8f00",
          900: "#ff6f00",
          a100: "#ffe57f",
          a200: "#ffd740",
          a400: "#ffc400",
          a700: "#ffab00",
        },
        ga = {
          50: "#fff3e0",
          100: "#ffe0b2",
          200: "#ffcc80",
          300: "#ffb74d",
          400: "#ffa726",
          500: "#ff9800",
          600: "#fb8c00",
          700: "#f57c00",
          800: "#ef6c00",
          900: "#e65100",
          a100: "#ffd180",
          a200: "#ffab40",
          a400: "#ff9100",
          a700: "#ff6d00",
        },
        va = {
          50: "#fbe9e7",
          100: "#ffccbc",
          200: "#ffab91",
          300: "#ff8a65",
          400: "#ff7043",
          500: "#ff5722",
          600: "#f4511e",
          700: "#e64a19",
          800: "#d84315",
          900: "#bf360c",
          a100: "#ff9e80",
          a200: "#ff6e40",
          a400: "#ff3d00",
          a700: "#dd2c00",
        },
        xa = {
          50: "#efebe9",
          100: "#d7ccc8",
          200: "#bcaaa4",
          300: "#a1887f",
          400: "#8d6e63",
          500: "#795548",
          600: "#6d4c41",
          700: "#5d4037",
          800: "#4e342e",
          900: "#3e2723",
        },
        ya = {
          50: "#eceff1",
          100: "#cfd8dc",
          200: "#b0bec5",
          300: "#90a4ae",
          400: "#78909c",
          500: "#607d8b",
          600: "#546e7a",
          700: "#455a64",
          800: "#37474f",
          900: "#263238",
        };
      var ma = function (e) {
        var t = e.color,
          r = e.onClick,
          a = e.onSwatchHover,
          i = e.hover,
          l = e.active,
          s = e.circleSize,
          c = e.circleSpacing,
          u = (0, o.Ay)(
            {
              default: {
                swatch: {
                  width: s,
                  height: s,
                  marginRight: c,
                  marginBottom: c,
                  transform: "scale(1)",
                  transition: "100ms transform ease",
                },
                Swatch: {
                  borderRadius: "50%",
                  background: "transparent",
                  boxShadow: "inset 0 0 0 " + (s / 2 + 1) + "px " + t,
                  transition: "100ms box-shadow ease",
                },
              },
              hover: { swatch: { transform: "scale(1.2)" } },
              active: { Swatch: { boxShadow: "inset 0 0 0 3px " + t } },
            },
            { hover: i, active: l },
          );
        return n.createElement(
          "div",
          { style: u.swatch },
          n.createElement(kn, {
            style: u.Swatch,
            color: t,
            onClick: r,
            onHover: a,
            focusStyle: { boxShadow: u.Swatch.boxShadow + ", 0 0 5px " + t },
          }),
        );
      };
      ma.defaultProps = { circleSize: 28, circleSpacing: 14 };
      const wa = (0, o.H8)(ma);
      var Ea = function (e) {
        var t = e.width,
          r = e.onChange,
          a = e.onSwatchHover,
          i = e.colors,
          l = e.hex,
          s = e.circleSize,
          c = e.styles,
          u = void 0 === c ? {} : c,
          p = e.circleSpacing,
          f = e.className,
          h = void 0 === f ? "" : f,
          d = (0, o.Ay)(
            or(
              {
                default: {
                  card: {
                    width: t,
                    display: "flex",
                    flexWrap: "wrap",
                    marginRight: -p,
                    marginBottom: -p,
                  },
                },
              },
              u,
            ),
          ),
          b = function (e, t) {
            return r({ hex: e, source: "hex" }, t);
          };
        return n.createElement(
          "div",
          { style: d.card, className: "circle-picker " + h },
          Qo(i, function (e) {
            return n.createElement(wa, {
              key: e,
              color: e,
              onClick: b,
              onSwatchHover: a,
              active: l === e.toLowerCase(),
              circleSize: s,
              circleSpacing: p,
            });
          }),
        );
      };
      (Ea.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        circleSize: E().number,
        circleSpacing: E().number,
        styles: E().object,
      }),
        (Ea.defaultProps = {
          width: 252,
          circleSize: 28,
          circleSpacing: 14,
          colors: [
            ra[500],
            na[500],
            oa[500],
            aa[500],
            ia[500],
            la[500],
            sa[500],
            ca[500],
            ua[500],
            pa[500],
            fa[500],
            ha[500],
            da[500],
            ba[500],
            ga[500],
            va[500],
            xa[500],
            ya[500],
          ],
          styles: {},
        });
      En(Ea);
      const _a = function (e) {
        return void 0 === e;
      };
      var Ca = r(50283),
        Sa = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })();
      var ja = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var r = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (r.toggleViews = function () {
              "hex" === r.state.view
                ? r.setState({ view: "rgb" })
                : "rgb" === r.state.view
                  ? r.setState({ view: "hsl" })
                  : "hsl" === r.state.view &&
                    (1 === r.props.hsl.a
                      ? r.setState({ view: "hex" })
                      : r.setState({ view: "rgb" }));
            }),
            (r.handleChange = function (e, t) {
              e.hex
                ? vn(e.hex) &&
                  r.props.onChange({ hex: e.hex, source: "hex" }, t)
                : e.r || e.g || e.b
                  ? r.props.onChange(
                      {
                        r: e.r || r.props.rgb.r,
                        g: e.g || r.props.rgb.g,
                        b: e.b || r.props.rgb.b,
                        source: "rgb",
                      },
                      t,
                    )
                  : e.a
                    ? (e.a < 0 ? (e.a = 0) : e.a > 1 && (e.a = 1),
                      r.props.onChange(
                        {
                          h: r.props.hsl.h,
                          s: r.props.hsl.s,
                          l: r.props.hsl.l,
                          a: Math.round(100 * e.a) / 100,
                          source: "rgb",
                        },
                        t,
                      ))
                    : (e.h || e.s || e.l) &&
                      ("string" == typeof e.s &&
                        e.s.includes("%") &&
                        (e.s = e.s.replace("%", "")),
                      "string" == typeof e.l &&
                        e.l.includes("%") &&
                        (e.l = e.l.replace("%", "")),
                      1 == e.s ? (e.s = 0.01) : 1 == e.l && (e.l = 0.01),
                      r.props.onChange(
                        {
                          h: e.h || r.props.hsl.h,
                          s: Number(_a(e.s) ? r.props.hsl.s : e.s),
                          l: Number(_a(e.l) ? r.props.hsl.l : e.l),
                          source: "hsl",
                        },
                        t,
                      ));
            }),
            (r.showHighlight = function (e) {
              e.currentTarget.style.background = "#eee";
            }),
            (r.hideHighlight = function (e) {
              e.currentTarget.style.background = "transparent";
            }),
            1 !== e.hsl.a && "hex" === e.view
              ? (r.state = { view: "rgb" })
              : (r.state = { view: e.view }),
            r
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          Sa(
            t,
            [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = (0, o.Ay)(
                      {
                        default: {
                          wrap: { paddingTop: "16px", display: "flex" },
                          fields: {
                            flex: "1",
                            display: "flex",
                            marginLeft: "-6px",
                          },
                          field: { paddingLeft: "6px", width: "100%" },
                          alpha: { paddingLeft: "6px", width: "100%" },
                          toggle: {
                            width: "32px",
                            textAlign: "right",
                            position: "relative",
                          },
                          icon: {
                            marginRight: "-4px",
                            marginTop: "12px",
                            cursor: "pointer",
                            position: "relative",
                          },
                          iconHighlight: {
                            position: "absolute",
                            width: "24px",
                            height: "28px",
                            background: "#eee",
                            borderRadius: "4px",
                            top: "10px",
                            left: "12px",
                            display: "none",
                          },
                          input: {
                            fontSize: "11px",
                            color: "#333",
                            width: "100%",
                            borderRadius: "2px",
                            border: "none",
                            boxShadow: "inset 0 0 0 1px #dadada",
                            height: "21px",
                            textAlign: "center",
                          },
                          label: {
                            textTransform: "uppercase",
                            fontSize: "11px",
                            lineHeight: "11px",
                            color: "#969696",
                            textAlign: "center",
                            display: "block",
                            marginTop: "12px",
                          },
                          svg: {
                            fill: "#333",
                            width: "24px",
                            height: "24px",
                            border: "1px transparent solid",
                            borderRadius: "5px",
                          },
                        },
                        disableAlpha: { alpha: { display: "none" } },
                      },
                      this.props,
                      this.state,
                    ),
                    r = void 0;
                  return (
                    "hex" === this.state.view
                      ? (r = n.createElement(
                          "div",
                          { style: t.fields, className: "flexbox-fix" },
                          n.createElement(
                            "div",
                            { style: t.field },
                            n.createElement(v, {
                              style: { input: t.input, label: t.label },
                              label: "hex",
                              value: this.props.hex,
                              onChange: this.handleChange,
                            }),
                          ),
                        ))
                      : "rgb" === this.state.view
                        ? (r = n.createElement(
                            "div",
                            { style: t.fields, className: "flexbox-fix" },
                            n.createElement(
                              "div",
                              { style: t.field },
                              n.createElement(v, {
                                style: { input: t.input, label: t.label },
                                label: "r",
                                value: this.props.rgb.r,
                                onChange: this.handleChange,
                              }),
                            ),
                            n.createElement(
                              "div",
                              { style: t.field },
                              n.createElement(v, {
                                style: { input: t.input, label: t.label },
                                label: "g",
                                value: this.props.rgb.g,
                                onChange: this.handleChange,
                              }),
                            ),
                            n.createElement(
                              "div",
                              { style: t.field },
                              n.createElement(v, {
                                style: { input: t.input, label: t.label },
                                label: "b",
                                value: this.props.rgb.b,
                                onChange: this.handleChange,
                              }),
                            ),
                            n.createElement(
                              "div",
                              { style: t.alpha },
                              n.createElement(v, {
                                style: { input: t.input, label: t.label },
                                label: "a",
                                value: this.props.rgb.a,
                                arrowOffset: 0.01,
                                onChange: this.handleChange,
                              }),
                            ),
                          ))
                        : "hsl" === this.state.view &&
                          (r = n.createElement(
                            "div",
                            { style: t.fields, className: "flexbox-fix" },
                            n.createElement(
                              "div",
                              { style: t.field },
                              n.createElement(v, {
                                style: { input: t.input, label: t.label },
                                label: "h",
                                value: Math.round(this.props.hsl.h),
                                onChange: this.handleChange,
                              }),
                            ),
                            n.createElement(
                              "div",
                              { style: t.field },
                              n.createElement(v, {
                                style: { input: t.input, label: t.label },
                                label: "s",
                                value: Math.round(100 * this.props.hsl.s) + "%",
                                onChange: this.handleChange,
                              }),
                            ),
                            n.createElement(
                              "div",
                              { style: t.field },
                              n.createElement(v, {
                                style: { input: t.input, label: t.label },
                                label: "l",
                                value: Math.round(100 * this.props.hsl.l) + "%",
                                onChange: this.handleChange,
                              }),
                            ),
                            n.createElement(
                              "div",
                              { style: t.alpha },
                              n.createElement(v, {
                                style: { input: t.input, label: t.label },
                                label: "a",
                                value: this.props.hsl.a,
                                arrowOffset: 0.01,
                                onChange: this.handleChange,
                              }),
                            ),
                          )),
                    n.createElement(
                      "div",
                      { style: t.wrap, className: "flexbox-fix" },
                      r,
                      n.createElement(
                        "div",
                        { style: t.toggle },
                        n.createElement(
                          "div",
                          {
                            style: t.icon,
                            onClick: this.toggleViews,
                            ref: function (t) {
                              return (e.icon = t);
                            },
                          },
                          n.createElement(Ca.A, {
                            style: t.svg,
                            onMouseOver: this.showHighlight,
                            onMouseEnter: this.showHighlight,
                            onMouseOut: this.hideHighlight,
                          }),
                        ),
                      ),
                    )
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  return 1 !== e.hsl.a && "hex" === t.view
                    ? { view: "rgb" }
                    : null;
                },
              },
            ],
          ),
          t
        );
      })(n.Component);
      ja.defaultProps = { view: "hex" };
      const ka = ja;
      const Oa = function () {
        var e = (0, o.Ay)({
          default: {
            picker: {
              width: "12px",
              height: "12px",
              borderRadius: "6px",
              transform: "translate(-6px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
            },
          },
        });
        return n.createElement("div", { style: e.picker });
      };
      const Aa = function () {
        var e = (0, o.Ay)({
          default: {
            picker: {
              width: "12px",
              height: "12px",
              borderRadius: "6px",
              boxShadow: "inset 0 0 0 1px #fff",
              transform: "translate(-6px, -6px)",
            },
          },
        });
        return n.createElement("div", { style: e.picker });
      };
      var Ma = function (e) {
        var t = e.width,
          r = e.onChange,
          a = e.disableAlpha,
          i = e.rgb,
          l = e.hsl,
          s = e.hsv,
          u = e.hex,
          p = e.renderers,
          f = e.styles,
          d = void 0 === f ? {} : f,
          b = e.className,
          g = void 0 === b ? "" : b,
          v = e.defaultView,
          x = (0, o.Ay)(
            or(
              {
                default: {
                  picker: {
                    width: t,
                    background: "#fff",
                    borderRadius: "2px",
                    boxShadow:
                      "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                    boxSizing: "initial",
                    fontFamily: "Menlo",
                  },
                  saturation: {
                    width: "100%",
                    paddingBottom: "55%",
                    position: "relative",
                    borderRadius: "2px 2px 0 0",
                    overflow: "hidden",
                  },
                  Saturation: { radius: "2px 2px 0 0" },
                  body: { padding: "16px 16px 12px" },
                  controls: { display: "flex" },
                  color: { width: "32px" },
                  swatch: {
                    marginTop: "6px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "8px",
                    position: "relative",
                    overflow: "hidden",
                  },
                  active: {
                    absolute: "0px 0px 0px 0px",
                    borderRadius: "8px",
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                    background:
                      "rgba(" +
                      i.r +
                      ", " +
                      i.g +
                      ", " +
                      i.b +
                      ", " +
                      i.a +
                      ")",
                    zIndex: "2",
                  },
                  toggles: { flex: "1" },
                  hue: {
                    height: "10px",
                    position: "relative",
                    marginBottom: "8px",
                  },
                  Hue: { radius: "2px" },
                  alpha: { height: "10px", position: "relative" },
                  Alpha: { radius: "2px" },
                },
                disableAlpha: {
                  color: { width: "22px" },
                  alpha: { display: "none" },
                  hue: { marginBottom: "0px" },
                  swatch: { width: "10px", height: "10px", marginTop: "0px" },
                },
              },
              d,
            ),
            { disableAlpha: a },
          );
        return n.createElement(
          "div",
          { style: x.picker, className: "chrome-picker " + g },
          n.createElement(
            "div",
            { style: x.saturation },
            n.createElement(Cr, {
              style: x.Saturation,
              hsl: l,
              hsv: s,
              pointer: Aa,
              onChange: r,
            }),
          ),
          n.createElement(
            "div",
            { style: x.body },
            n.createElement(
              "div",
              { style: x.controls, className: "flexbox-fix" },
              n.createElement(
                "div",
                { style: x.color },
                n.createElement(
                  "div",
                  { style: x.swatch },
                  n.createElement("div", { style: x.active }),
                  n.createElement(c, { renderers: p }),
                ),
              ),
              n.createElement(
                "div",
                { style: x.toggles },
                n.createElement(
                  "div",
                  { style: x.hue },
                  n.createElement(m, {
                    style: x.Hue,
                    hsl: l,
                    pointer: Oa,
                    onChange: r,
                  }),
                ),
                n.createElement(
                  "div",
                  { style: x.alpha },
                  n.createElement(h, {
                    style: x.Alpha,
                    rgb: i,
                    hsl: l,
                    pointer: Oa,
                    renderers: p,
                    onChange: r,
                  }),
                ),
              ),
            ),
            n.createElement(ka, {
              rgb: i,
              hsl: l,
              hex: u,
              view: v,
              onChange: r,
              disableAlpha: a,
            }),
          ),
        );
      };
      (Ma.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        disableAlpha: E().bool,
        styles: E().object,
        defaultView: E().oneOf(["hex", "rgb", "hsl"]),
      }),
        (Ma.defaultProps = { width: 225, disableAlpha: !1, styles: {} });
      const Ra = En(Ma);
      const Fa = function (e) {
        var t = e.color,
          r = e.onClick,
          a = void 0 === r ? function () {} : r,
          i = e.onSwatchHover,
          l = e.active,
          s = (0, o.Ay)(
            {
              default: {
                color: {
                  background: t,
                  width: "15px",
                  height: "15px",
                  float: "left",
                  marginRight: "5px",
                  marginBottom: "5px",
                  position: "relative",
                  cursor: "pointer",
                },
                dot: {
                  absolute: "5px 5px 5px 5px",
                  background: xn(t),
                  borderRadius: "50%",
                  opacity: "0",
                },
              },
              active: { dot: { opacity: "1" } },
              "color-#FFFFFF": {
                color: { boxShadow: "inset 0 0 0 1px #ddd" },
                dot: { background: "#000" },
              },
              transparent: { dot: { background: "#000" } },
            },
            {
              active: l,
              "color-#FFFFFF": "#FFFFFF" === t,
              transparent: "transparent" === t,
            },
          );
        return n.createElement(
          kn,
          {
            style: s.color,
            color: t,
            onClick: a,
            onHover: i,
            focusStyle: { boxShadow: "0 0 4px " + t },
          },
          n.createElement("div", { style: s.dot }),
        );
      };
      const Ba = function (e) {
        var t = e.hex,
          r = e.rgb,
          a = e.onChange,
          i = (0, o.Ay)({
            default: {
              fields: {
                display: "flex",
                paddingBottom: "6px",
                paddingRight: "5px",
                position: "relative",
              },
              active: {
                position: "absolute",
                top: "6px",
                left: "5px",
                height: "9px",
                width: "9px",
                background: t,
              },
              HEXwrap: { flex: "6", position: "relative" },
              HEXinput: {
                width: "80%",
                padding: "0px",
                paddingLeft: "20%",
                border: "none",
                outline: "none",
                background: "none",
                fontSize: "12px",
                color: "#333",
                height: "16px",
              },
              HEXlabel: { display: "none" },
              RGBwrap: { flex: "3", position: "relative" },
              RGBinput: {
                width: "70%",
                padding: "0px",
                paddingLeft: "30%",
                border: "none",
                outline: "none",
                background: "none",
                fontSize: "12px",
                color: "#333",
                height: "16px",
              },
              RGBlabel: {
                position: "absolute",
                top: "3px",
                left: "0px",
                lineHeight: "16px",
                textTransform: "uppercase",
                fontSize: "12px",
                color: "#999",
              },
            },
          }),
          l = function (e, t) {
            e.r || e.g || e.b
              ? a(
                  {
                    r: e.r || r.r,
                    g: e.g || r.g,
                    b: e.b || r.b,
                    source: "rgb",
                  },
                  t,
                )
              : a({ hex: e.hex, source: "hex" }, t);
          };
        return n.createElement(
          "div",
          { style: i.fields, className: "flexbox-fix" },
          n.createElement("div", { style: i.active }),
          n.createElement(v, {
            style: { wrap: i.HEXwrap, input: i.HEXinput, label: i.HEXlabel },
            label: "hex",
            value: t,
            onChange: l,
          }),
          n.createElement(v, {
            style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
            label: "r",
            value: r.r,
            onChange: l,
          }),
          n.createElement(v, {
            style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
            label: "g",
            value: r.g,
            onChange: l,
          }),
          n.createElement(v, {
            style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
            label: "b",
            value: r.b,
            onChange: l,
          }),
        );
      };
      var Ta = function (e) {
        var t = e.onChange,
          r = e.onSwatchHover,
          a = e.colors,
          i = e.hex,
          l = e.rgb,
          s = e.styles,
          c = void 0 === s ? {} : s,
          u = e.className,
          p = void 0 === u ? "" : u,
          f = (0, o.Ay)(
            or(
              {
                default: {
                  Compact: { background: "#f6f6f6", radius: "4px" },
                  compact: {
                    paddingTop: "5px",
                    paddingLeft: "5px",
                    boxSizing: "initial",
                    width: "240px",
                  },
                  clear: { clear: "both" },
                },
              },
              c,
            ),
          ),
          h = function (e, r) {
            e.hex ? vn(e.hex) && t({ hex: e.hex, source: "hex" }, r) : t(e, r);
          };
        return n.createElement(
          ir,
          { style: f.Compact, styles: c },
          n.createElement(
            "div",
            { style: f.compact, className: "compact-picker " + p },
            n.createElement(
              "div",
              null,
              Qo(a, function (e) {
                return n.createElement(Fa, {
                  key: e,
                  color: e,
                  active: e.toLowerCase() === i,
                  onClick: h,
                  onSwatchHover: r,
                });
              }),
              n.createElement("div", { style: f.clear }),
            ),
            n.createElement(Ba, { hex: i, rgb: l, onChange: h }),
          ),
        );
      };
      (Ta.propTypes = { colors: E().arrayOf(E().string), styles: E().object }),
        (Ta.defaultProps = {
          colors: [
            "#4D4D4D",
            "#999999",
            "#FFFFFF",
            "#F44E3B",
            "#FE9200",
            "#FCDC00",
            "#DBDF00",
            "#A4DD00",
            "#68CCCA",
            "#73D8FF",
            "#AEA1FF",
            "#FDA1FF",
            "#333333",
            "#808080",
            "#cccccc",
            "#D33115",
            "#E27300",
            "#FCC400",
            "#B0BC00",
            "#68BC00",
            "#16A5A5",
            "#009CE0",
            "#7B64FF",
            "#FA28FF",
            "#000000",
            "#666666",
            "#B3B3B3",
            "#9F0500",
            "#C45100",
            "#FB9E00",
            "#808900",
            "#194D33",
            "#0C797D",
            "#0062B1",
            "#653294",
            "#AB149E",
          ],
          styles: {},
        });
      En(Ta);
      const Pa = (0, o.H8)(function (e) {
        var t = e.hover,
          r = e.color,
          a = e.onClick,
          i = e.onSwatchHover,
          l = {
            position: "relative",
            zIndex: "2",
            outline: "2px solid #fff",
            boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)",
          },
          s = (0, o.Ay)(
            {
              default: {
                swatch: { width: "25px", height: "25px", fontSize: "0" },
              },
              hover: { swatch: l },
            },
            { hover: t },
          );
        return n.createElement(
          "div",
          { style: s.swatch },
          n.createElement(kn, {
            color: r,
            onClick: a,
            onHover: i,
            focusStyle: l,
          }),
        );
      });
      var Ha = function (e) {
        var t = e.width,
          r = e.colors,
          a = e.onChange,
          i = e.onSwatchHover,
          l = e.triangle,
          s = e.styles,
          c = void 0 === s ? {} : s,
          u = e.className,
          p = void 0 === u ? "" : u,
          f = (0, o.Ay)(
            or(
              {
                default: {
                  card: {
                    width: t,
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.2)",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                    borderRadius: "4px",
                    position: "relative",
                    padding: "5px",
                    display: "flex",
                    flexWrap: "wrap",
                  },
                  triangle: {
                    position: "absolute",
                    border: "7px solid transparent",
                    borderBottomColor: "#fff",
                  },
                  triangleShadow: {
                    position: "absolute",
                    border: "8px solid transparent",
                    borderBottomColor: "rgba(0,0,0,0.15)",
                  },
                },
                "hide-triangle": {
                  triangle: { display: "none" },
                  triangleShadow: { display: "none" },
                },
                "top-left-triangle": {
                  triangle: { top: "-14px", left: "10px" },
                  triangleShadow: { top: "-16px", left: "9px" },
                },
                "top-right-triangle": {
                  triangle: { top: "-14px", right: "10px" },
                  triangleShadow: { top: "-16px", right: "9px" },
                },
                "bottom-left-triangle": {
                  triangle: {
                    top: "35px",
                    left: "10px",
                    transform: "rotate(180deg)",
                  },
                  triangleShadow: {
                    top: "37px",
                    left: "9px",
                    transform: "rotate(180deg)",
                  },
                },
                "bottom-right-triangle": {
                  triangle: {
                    top: "35px",
                    right: "10px",
                    transform: "rotate(180deg)",
                  },
                  triangleShadow: {
                    top: "37px",
                    right: "9px",
                    transform: "rotate(180deg)",
                  },
                },
              },
              c,
            ),
            {
              "hide-triangle": "hide" === l,
              "top-left-triangle": "top-left" === l,
              "top-right-triangle": "top-right" === l,
              "bottom-left-triangle": "bottom-left" === l,
              "bottom-right-triangle": "bottom-right" === l,
            },
          ),
          h = function (e, t) {
            return a({ hex: e, source: "hex" }, t);
          };
        return n.createElement(
          "div",
          { style: f.card, className: "github-picker " + p },
          n.createElement("div", { style: f.triangleShadow }),
          n.createElement("div", { style: f.triangle }),
          Qo(r, function (e) {
            return n.createElement(Pa, {
              color: e,
              key: e,
              onClick: h,
              onSwatchHover: i,
            });
          }),
        );
      };
      (Ha.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        colors: E().arrayOf(E().string),
        triangle: E().oneOf([
          "hide",
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ]),
        styles: E().object,
      }),
        (Ha.defaultProps = {
          width: 200,
          colors: [
            "#B80000",
            "#DB3E00",
            "#FCCB00",
            "#008B02",
            "#006B76",
            "#1273DE",
            "#004DCF",
            "#5300EB",
            "#EB9694",
            "#FAD0C3",
            "#FEF3BD",
            "#C1E1C5",
            "#BEDADC",
            "#C4DEF6",
            "#BED3F3",
            "#D4C4FB",
          ],
          triangle: "top-left",
          styles: {},
        });
      En(Ha);
      const za = function (e) {
        var t = e.direction,
          r = (0, o.Ay)(
            {
              default: {
                picker: {
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  transform: "translate(-9px, -1px)",
                  backgroundColor: "rgb(248, 248, 248)",
                  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
                },
              },
              vertical: { picker: { transform: "translate(-3px, -9px)" } },
            },
            { vertical: "vertical" === t },
          );
        return n.createElement("div", { style: r.picker });
      };
      var Da =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        La = function (e) {
          var t = e.width,
            r = e.height,
            a = e.onChange,
            i = e.hsl,
            l = e.direction,
            s = e.pointer,
            c = e.styles,
            u = void 0 === c ? {} : c,
            p = e.className,
            f = void 0 === p ? "" : p,
            h = (0, o.Ay)(
              or(
                {
                  default: {
                    picker: { position: "relative", width: t, height: r },
                    hue: { radius: "2px" },
                  },
                },
                u,
              ),
            );
          return n.createElement(
            "div",
            { style: h.picker, className: "hue-picker " + f },
            n.createElement(
              m,
              Da({}, h.hue, {
                hsl: i,
                pointer: s,
                onChange: function (e) {
                  return a({ a: 1, h: e.h, l: 0.5, s: 1 });
                },
                direction: l,
              }),
            ),
          );
        };
      (La.propTypes = { styles: E().object }),
        (La.defaultProps = {
          width: "316px",
          height: "16px",
          direction: "horizontal",
          pointer: za,
          styles: {},
        });
      En(La);
      En(function (e) {
        var t = e.onChange,
          r = e.hex,
          a = e.rgb,
          i = e.styles,
          l = void 0 === i ? {} : i,
          s = e.className,
          c = void 0 === s ? "" : s,
          u = (0, o.Ay)(
            or(
              {
                default: {
                  material: {
                    width: "98px",
                    height: "98px",
                    padding: "16px",
                    fontFamily: "Roboto",
                  },
                  HEXwrap: { position: "relative" },
                  HEXinput: {
                    width: "100%",
                    marginTop: "12px",
                    fontSize: "15px",
                    color: "#333",
                    padding: "0px",
                    border: "0px",
                    borderBottom: "2px solid " + r,
                    outline: "none",
                    height: "30px",
                  },
                  HEXlabel: {
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    fontSize: "11px",
                    color: "#999999",
                    textTransform: "capitalize",
                  },
                  Hex: { style: {} },
                  RGBwrap: { position: "relative" },
                  RGBinput: {
                    width: "100%",
                    marginTop: "12px",
                    fontSize: "15px",
                    color: "#333",
                    padding: "0px",
                    border: "0px",
                    borderBottom: "1px solid #eee",
                    outline: "none",
                    height: "30px",
                  },
                  RGBlabel: {
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    fontSize: "11px",
                    color: "#999999",
                    textTransform: "capitalize",
                  },
                  split: {
                    display: "flex",
                    marginRight: "-10px",
                    paddingTop: "11px",
                  },
                  third: { flex: "1", paddingRight: "10px" },
                },
              },
              l,
            ),
          ),
          p = function (e, r) {
            e.hex
              ? vn(e.hex) && t({ hex: e.hex, source: "hex" }, r)
              : (e.r || e.g || e.b) &&
                t(
                  {
                    r: e.r || a.r,
                    g: e.g || a.g,
                    b: e.b || a.b,
                    source: "rgb",
                  },
                  r,
                );
          };
        return n.createElement(
          ir,
          { styles: l },
          n.createElement(
            "div",
            { style: u.material, className: "material-picker " + c },
            n.createElement(v, {
              style: { wrap: u.HEXwrap, input: u.HEXinput, label: u.HEXlabel },
              label: "hex",
              value: r,
              onChange: p,
            }),
            n.createElement(
              "div",
              { style: u.split, className: "flexbox-fix" },
              n.createElement(
                "div",
                { style: u.third },
                n.createElement(v, {
                  style: {
                    wrap: u.RGBwrap,
                    input: u.RGBinput,
                    label: u.RGBlabel,
                  },
                  label: "r",
                  value: a.r,
                  onChange: p,
                }),
              ),
              n.createElement(
                "div",
                { style: u.third },
                n.createElement(v, {
                  style: {
                    wrap: u.RGBwrap,
                    input: u.RGBinput,
                    label: u.RGBlabel,
                  },
                  label: "g",
                  value: a.g,
                  onChange: p,
                }),
              ),
              n.createElement(
                "div",
                { style: u.third },
                n.createElement(v, {
                  style: {
                    wrap: u.RGBwrap,
                    input: u.RGBinput,
                    label: u.RGBlabel,
                  },
                  label: "b",
                  value: a.b,
                  onChange: p,
                }),
              ),
            ),
          ),
        );
      });
      const Na = function (e) {
        var t = e.onChange,
          r = e.rgb,
          a = e.hsv,
          i = e.hex,
          l = (0, o.Ay)({
            default: {
              fields: {
                paddingTop: "5px",
                paddingBottom: "9px",
                width: "80px",
                position: "relative",
              },
              divider: { height: "5px" },
              RGBwrap: { position: "relative" },
              RGBinput: {
                marginLeft: "40%",
                width: "40%",
                height: "18px",
                border: "1px solid #888888",
                boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                marginBottom: "5px",
                fontSize: "13px",
                paddingLeft: "3px",
                marginRight: "10px",
              },
              RGBlabel: {
                left: "0px",
                top: "0px",
                width: "34px",
                textTransform: "uppercase",
                fontSize: "13px",
                height: "18px",
                lineHeight: "22px",
                position: "absolute",
              },
              HEXwrap: { position: "relative" },
              HEXinput: {
                marginLeft: "20%",
                width: "80%",
                height: "18px",
                border: "1px solid #888888",
                boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                marginBottom: "6px",
                fontSize: "13px",
                paddingLeft: "3px",
              },
              HEXlabel: {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "14px",
                textTransform: "uppercase",
                fontSize: "13px",
                height: "18px",
                lineHeight: "22px",
              },
              fieldSymbols: {
                position: "absolute",
                top: "5px",
                right: "-7px",
                fontSize: "13px",
              },
              symbol: {
                height: "20px",
                lineHeight: "22px",
                paddingBottom: "7px",
              },
            },
          }),
          s = function (e, n) {
            e["#"]
              ? vn(e["#"]) && t({ hex: e["#"], source: "hex" }, n)
              : e.r || e.g || e.b
                ? t(
                    {
                      r: e.r || r.r,
                      g: e.g || r.g,
                      b: e.b || r.b,
                      source: "rgb",
                    },
                    n,
                  )
                : (e.h || e.s || e.v) &&
                  t(
                    {
                      h: e.h || a.h,
                      s: e.s || a.s,
                      v: e.v || a.v,
                      source: "hsv",
                    },
                    n,
                  );
          };
        return n.createElement(
          "div",
          { style: l.fields },
          n.createElement(v, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "h",
            value: Math.round(a.h),
            onChange: s,
          }),
          n.createElement(v, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "s",
            value: Math.round(100 * a.s),
            onChange: s,
          }),
          n.createElement(v, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "v",
            value: Math.round(100 * a.v),
            onChange: s,
          }),
          n.createElement("div", { style: l.divider }),
          n.createElement(v, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "r",
            value: r.r,
            onChange: s,
          }),
          n.createElement(v, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "g",
            value: r.g,
            onChange: s,
          }),
          n.createElement(v, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "b",
            value: r.b,
            onChange: s,
          }),
          n.createElement("div", { style: l.divider }),
          n.createElement(v, {
            style: { wrap: l.HEXwrap, input: l.HEXinput, label: l.HEXlabel },
            label: "#",
            value: i.replace("#", ""),
            onChange: s,
          }),
          n.createElement(
            "div",
            { style: l.fieldSymbols },
            n.createElement("div", { style: l.symbol }, "°"),
            n.createElement("div", { style: l.symbol }, "%"),
            n.createElement("div", { style: l.symbol }, "%"),
          ),
        );
      };
      const Ua = function (e) {
        var t = e.hsl,
          r = (0, o.Ay)(
            {
              default: {
                picker: {
                  width: "12px",
                  height: "12px",
                  borderRadius: "6px",
                  boxShadow: "inset 0 0 0 1px #fff",
                  transform: "translate(-6px, -6px)",
                },
              },
              "black-outline": {
                picker: { boxShadow: "inset 0 0 0 1px #000" },
              },
            },
            { "black-outline": t.l > 0.5 },
          );
        return n.createElement("div", { style: r.picker });
      };
      const Ga = function () {
        var e = (0, o.Ay)({
          default: {
            triangle: {
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "4px 0 4px 6px",
              borderColor: "transparent transparent transparent #fff",
              position: "absolute",
              top: "1px",
              left: "1px",
            },
            triangleBorder: {
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "5px 0 5px 8px",
              borderColor: "transparent transparent transparent #555",
            },
            left: {
              Extend: "triangleBorder",
              transform: "translate(-13px, -4px)",
            },
            leftInside: {
              Extend: "triangle",
              transform: "translate(-8px, -5px)",
            },
            right: {
              Extend: "triangleBorder",
              transform: "translate(20px, -14px) rotate(180deg)",
            },
            rightInside: {
              Extend: "triangle",
              transform: "translate(-8px, -5px)",
            },
          },
        });
        return n.createElement(
          "div",
          { style: e.pointer },
          n.createElement(
            "div",
            { style: e.left },
            n.createElement("div", { style: e.leftInside }),
          ),
          n.createElement(
            "div",
            { style: e.right },
            n.createElement("div", { style: e.rightInside }),
          ),
        );
      };
      const Wa = function (e) {
        var t = e.onClick,
          r = e.label,
          a = e.children,
          i = e.active,
          l = (0, o.Ay)(
            {
              default: {
                button: {
                  backgroundImage:
                    "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
                  border: "1px solid #878787",
                  borderRadius: "2px",
                  height: "20px",
                  boxShadow: "0 1px 0 0 #EAEAEA",
                  fontSize: "14px",
                  color: "#000",
                  lineHeight: "20px",
                  textAlign: "center",
                  marginBottom: "10px",
                  cursor: "pointer",
                },
              },
              active: { button: { boxShadow: "0 0 0 1px #878787" } },
            },
            { active: i },
          );
        return n.createElement("div", { style: l.button, onClick: t }, r || a);
      };
      const Ia = function (e) {
        var t = e.rgb,
          r = e.currentColor,
          a = (0, o.Ay)({
            default: {
              swatches: {
                border: "1px solid #B3B3B3",
                borderBottom: "1px solid #F0F0F0",
                marginBottom: "2px",
                marginTop: "1px",
              },
              new: {
                height: "34px",
                background: "rgb(" + t.r + "," + t.g + ", " + t.b + ")",
                boxShadow:
                  "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000",
              },
              current: {
                height: "34px",
                background: r,
                boxShadow:
                  "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000",
              },
              label: { fontSize: "14px", color: "#000", textAlign: "center" },
            },
          });
        return n.createElement(
          "div",
          null,
          n.createElement("div", { style: a.label }, "new"),
          n.createElement(
            "div",
            { style: a.swatches },
            n.createElement("div", { style: a.new }),
            n.createElement("div", { style: a.current }),
          ),
          n.createElement("div", { style: a.label }, "current"),
        );
      };
      var Xa = (function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })();
      var Va = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var r = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (r.state = { currentColor: e.hex }), r;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          Xa(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.styles,
                  r = void 0 === t ? {} : t,
                  a = e.className,
                  i = void 0 === a ? "" : a,
                  l = (0, o.Ay)(
                    or(
                      {
                        default: {
                          picker: {
                            background: "#DCDCDC",
                            borderRadius: "4px",
                            boxShadow:
                              "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                            boxSizing: "initial",
                            width: "513px",
                          },
                          head: {
                            backgroundImage:
                              "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                            borderBottom: "1px solid #B1B1B1",
                            boxShadow:
                              "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                            height: "23px",
                            lineHeight: "24px",
                            borderRadius: "4px 4px 0 0",
                            fontSize: "13px",
                            color: "#4D4D4D",
                            textAlign: "center",
                          },
                          body: { padding: "15px 15px 0", display: "flex" },
                          saturation: {
                            width: "256px",
                            height: "256px",
                            position: "relative",
                            border: "2px solid #B3B3B3",
                            borderBottom: "2px solid #F0F0F0",
                            overflow: "hidden",
                          },
                          hue: {
                            position: "relative",
                            height: "256px",
                            width: "19px",
                            marginLeft: "10px",
                            border: "2px solid #B3B3B3",
                            borderBottom: "2px solid #F0F0F0",
                          },
                          controls: { width: "180px", marginLeft: "10px" },
                          top: { display: "flex" },
                          previews: { width: "60px" },
                          actions: { flex: "1", marginLeft: "20px" },
                        },
                      },
                      r,
                    ),
                  );
                return n.createElement(
                  "div",
                  { style: l.picker, className: "photoshop-picker " + i },
                  n.createElement("div", { style: l.head }, this.props.header),
                  n.createElement(
                    "div",
                    { style: l.body, className: "flexbox-fix" },
                    n.createElement(
                      "div",
                      { style: l.saturation },
                      n.createElement(Cr, {
                        hsl: this.props.hsl,
                        hsv: this.props.hsv,
                        pointer: Ua,
                        onChange: this.props.onChange,
                      }),
                    ),
                    n.createElement(
                      "div",
                      { style: l.hue },
                      n.createElement(m, {
                        direction: "vertical",
                        hsl: this.props.hsl,
                        pointer: Ga,
                        onChange: this.props.onChange,
                      }),
                    ),
                    n.createElement(
                      "div",
                      { style: l.controls },
                      n.createElement(
                        "div",
                        { style: l.top, className: "flexbox-fix" },
                        n.createElement(
                          "div",
                          { style: l.previews },
                          n.createElement(Ia, {
                            rgb: this.props.rgb,
                            currentColor: this.state.currentColor,
                          }),
                        ),
                        n.createElement(
                          "div",
                          { style: l.actions },
                          n.createElement(Wa, {
                            label: "OK",
                            onClick: this.props.onAccept,
                            active: !0,
                          }),
                          n.createElement(Wa, {
                            label: "Cancel",
                            onClick: this.props.onCancel,
                          }),
                          n.createElement(Na, {
                            onChange: this.props.onChange,
                            rgb: this.props.rgb,
                            hsv: this.props.hsv,
                            hex: this.props.hex,
                          }),
                        ),
                      ),
                    ),
                  ),
                );
              },
            },
          ]),
          t
        );
      })(n.Component);
      (Va.propTypes = { header: E().string, styles: E().object }),
        (Va.defaultProps = { header: "Color Picker", styles: {} });
      En(Va);
      const $a = function (e) {
        var t = e.onChange,
          r = e.rgb,
          a = e.hsl,
          i = e.hex,
          l = e.disableAlpha,
          s = (0, o.Ay)(
            {
              default: {
                fields: { display: "flex", paddingTop: "4px" },
                single: { flex: "1", paddingLeft: "6px" },
                alpha: { flex: "1", paddingLeft: "6px" },
                double: { flex: "2" },
                input: {
                  width: "80%",
                  padding: "4px 10% 3px",
                  border: "none",
                  boxShadow: "inset 0 0 0 1px #ccc",
                  fontSize: "11px",
                },
                label: {
                  display: "block",
                  textAlign: "center",
                  fontSize: "11px",
                  color: "#222",
                  paddingTop: "3px",
                  paddingBottom: "4px",
                  textTransform: "capitalize",
                },
              },
              disableAlpha: { alpha: { display: "none" } },
            },
            { disableAlpha: l },
          ),
          c = function (e, n) {
            e.hex
              ? vn(e.hex) && t({ hex: e.hex, source: "hex" }, n)
              : e.r || e.g || e.b
                ? t(
                    {
                      r: e.r || r.r,
                      g: e.g || r.g,
                      b: e.b || r.b,
                      a: r.a,
                      source: "rgb",
                    },
                    n,
                  )
                : e.a &&
                  (e.a < 0 ? (e.a = 0) : e.a > 100 && (e.a = 100),
                  (e.a /= 100),
                  t({ h: a.h, s: a.s, l: a.l, a: e.a, source: "rgb" }, n));
          };
        return n.createElement(
          "div",
          { style: s.fields, className: "flexbox-fix" },
          n.createElement(
            "div",
            { style: s.double },
            n.createElement(v, {
              style: { input: s.input, label: s.label },
              label: "hex",
              value: i.replace("#", ""),
              onChange: c,
            }),
          ),
          n.createElement(
            "div",
            { style: s.single },
            n.createElement(v, {
              style: { input: s.input, label: s.label },
              label: "r",
              value: r.r,
              onChange: c,
              dragLabel: "true",
              dragMax: "255",
            }),
          ),
          n.createElement(
            "div",
            { style: s.single },
            n.createElement(v, {
              style: { input: s.input, label: s.label },
              label: "g",
              value: r.g,
              onChange: c,
              dragLabel: "true",
              dragMax: "255",
            }),
          ),
          n.createElement(
            "div",
            { style: s.single },
            n.createElement(v, {
              style: { input: s.input, label: s.label },
              label: "b",
              value: r.b,
              onChange: c,
              dragLabel: "true",
              dragMax: "255",
            }),
          ),
          n.createElement(
            "div",
            { style: s.alpha },
            n.createElement(v, {
              style: { input: s.input, label: s.label },
              label: "a",
              value: Math.round(100 * r.a),
              onChange: c,
              dragLabel: "true",
              dragMax: "100",
            }),
          ),
        );
      };
      var qa =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        Ya = function (e) {
          var t = e.colors,
            r = e.onClick,
            a = void 0 === r ? function () {} : r,
            i = e.onSwatchHover,
            l = (0, o.Ay)(
              {
                default: {
                  colors: {
                    margin: "0 -10px",
                    padding: "10px 0 0 10px",
                    borderTop: "1px solid #eee",
                    display: "flex",
                    flexWrap: "wrap",
                    position: "relative",
                  },
                  swatchWrap: {
                    width: "16px",
                    height: "16px",
                    margin: "0 10px 10px 0",
                  },
                  swatch: {
                    borderRadius: "3px",
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)",
                  },
                },
                "no-presets": { colors: { display: "none" } },
              },
              { "no-presets": !t || !t.length },
            ),
            s = function (e, t) {
              a({ hex: e, source: "hex" }, t);
            };
          return n.createElement(
            "div",
            { style: l.colors, className: "flexbox-fix" },
            t.map(function (e) {
              var t = "string" == typeof e ? { color: e } : e,
                r = "" + t.color + (t.title || "");
              return n.createElement(
                "div",
                { key: r, style: l.swatchWrap },
                n.createElement(
                  kn,
                  qa({}, t, {
                    style: l.swatch,
                    onClick: s,
                    onHover: i,
                    focusStyle: {
                      boxShadow:
                        "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color,
                    },
                  }),
                ),
              );
            }),
          );
        };
      Ya.propTypes = {
        colors: E().arrayOf(
          E().oneOfType([
            E().string,
            E().shape({ color: E().string, title: E().string }),
          ]),
        ).isRequired,
      };
      const Ka = Ya;
      var Za =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        Ja = function (e) {
          var t = e.width,
            r = e.rgb,
            a = e.hex,
            i = e.hsv,
            l = e.hsl,
            s = e.onChange,
            u = e.onSwatchHover,
            p = e.disableAlpha,
            f = e.presetColors,
            d = e.renderers,
            b = e.styles,
            g = void 0 === b ? {} : b,
            v = e.className,
            x = void 0 === v ? "" : v,
            y = (0, o.Ay)(
              or(
                {
                  default: Za(
                    {
                      picker: {
                        width: t,
                        padding: "10px 10px 0",
                        boxSizing: "initial",
                        background: "#fff",
                        borderRadius: "4px",
                        boxShadow:
                          "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)",
                      },
                      saturation: {
                        width: "100%",
                        paddingBottom: "75%",
                        position: "relative",
                        overflow: "hidden",
                      },
                      Saturation: {
                        radius: "3px",
                        shadow:
                          "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                      },
                      controls: { display: "flex" },
                      sliders: { padding: "4px 0", flex: "1" },
                      color: {
                        width: "24px",
                        height: "24px",
                        position: "relative",
                        marginTop: "4px",
                        marginLeft: "4px",
                        borderRadius: "3px",
                      },
                      activeColor: {
                        absolute: "0px 0px 0px 0px",
                        borderRadius: "2px",
                        background:
                          "rgba(" +
                          r.r +
                          "," +
                          r.g +
                          "," +
                          r.b +
                          "," +
                          r.a +
                          ")",
                        boxShadow:
                          "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                      },
                      hue: {
                        position: "relative",
                        height: "10px",
                        overflow: "hidden",
                      },
                      Hue: {
                        radius: "2px",
                        shadow:
                          "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                      },
                      alpha: {
                        position: "relative",
                        height: "10px",
                        marginTop: "4px",
                        overflow: "hidden",
                      },
                      Alpha: {
                        radius: "2px",
                        shadow:
                          "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                      },
                    },
                    g,
                  ),
                  disableAlpha: {
                    color: { height: "10px" },
                    hue: { height: "10px" },
                    alpha: { display: "none" },
                  },
                },
                g,
              ),
              { disableAlpha: p },
            );
          return n.createElement(
            "div",
            { style: y.picker, className: "sketch-picker " + x },
            n.createElement(
              "div",
              { style: y.saturation },
              n.createElement(Cr, {
                style: y.Saturation,
                hsl: l,
                hsv: i,
                onChange: s,
              }),
            ),
            n.createElement(
              "div",
              { style: y.controls, className: "flexbox-fix" },
              n.createElement(
                "div",
                { style: y.sliders },
                n.createElement(
                  "div",
                  { style: y.hue },
                  n.createElement(m, { style: y.Hue, hsl: l, onChange: s }),
                ),
                n.createElement(
                  "div",
                  { style: y.alpha },
                  n.createElement(h, {
                    style: y.Alpha,
                    rgb: r,
                    hsl: l,
                    renderers: d,
                    onChange: s,
                  }),
                ),
              ),
              n.createElement(
                "div",
                { style: y.color },
                n.createElement(c, null),
                n.createElement("div", { style: y.activeColor }),
              ),
            ),
            n.createElement($a, {
              rgb: r,
              hsl: l,
              hex: a,
              onChange: s,
              disableAlpha: p,
            }),
            n.createElement(Ka, { colors: f, onClick: s, onSwatchHover: u }),
          );
        };
      (Ja.propTypes = {
        disableAlpha: E().bool,
        width: E().oneOfType([E().string, E().number]),
        styles: E().object,
      }),
        (Ja.defaultProps = {
          disableAlpha: !1,
          width: 200,
          styles: {},
          presetColors: [
            "#D0021B",
            "#F5A623",
            "#F8E71C",
            "#8B572A",
            "#7ED321",
            "#417505",
            "#BD10E0",
            "#9013FE",
            "#4A90E2",
            "#50E3C2",
            "#B8E986",
            "#000000",
            "#4A4A4A",
            "#9B9B9B",
            "#FFFFFF",
          ],
        });
      En(Ja);
      const Qa = function (e) {
        var t = e.hsl,
          r = e.offset,
          a = e.onClick,
          i = void 0 === a ? function () {} : a,
          l = e.active,
          s = e.first,
          c = e.last,
          u = (0, o.Ay)(
            {
              default: {
                swatch: {
                  height: "12px",
                  background: "hsl(" + t.h + ", 50%, " + 100 * r + "%)",
                  cursor: "pointer",
                },
              },
              first: { swatch: { borderRadius: "2px 0 0 2px" } },
              last: { swatch: { borderRadius: "0 2px 2px 0" } },
              active: {
                swatch: { transform: "scaleY(1.8)", borderRadius: "3.6px/2px" },
              },
            },
            { active: l, first: s, last: c },
          );
        return n.createElement("div", {
          style: u.swatch,
          onClick: function (e) {
            return i({ h: t.h, s: 0.5, l: r, source: "hsl" }, e);
          },
        });
      };
      const ei = function (e) {
        var t = e.onClick,
          r = e.hsl,
          a = (0, o.Ay)({
            default: {
              swatches: { marginTop: "20px" },
              swatch: {
                boxSizing: "border-box",
                width: "20%",
                paddingRight: "1px",
                float: "left",
              },
              clear: { clear: "both" },
            },
          }),
          i = 0.1;
        return n.createElement(
          "div",
          { style: a.swatches },
          n.createElement(
            "div",
            { style: a.swatch },
            n.createElement(Qa, {
              hsl: r,
              offset: ".80",
              active: Math.abs(r.l - 0.8) < i && Math.abs(r.s - 0.5) < i,
              onClick: t,
              first: !0,
            }),
          ),
          n.createElement(
            "div",
            { style: a.swatch },
            n.createElement(Qa, {
              hsl: r,
              offset: ".65",
              active: Math.abs(r.l - 0.65) < i && Math.abs(r.s - 0.5) < i,
              onClick: t,
            }),
          ),
          n.createElement(
            "div",
            { style: a.swatch },
            n.createElement(Qa, {
              hsl: r,
              offset: ".50",
              active: Math.abs(r.l - 0.5) < i && Math.abs(r.s - 0.5) < i,
              onClick: t,
            }),
          ),
          n.createElement(
            "div",
            { style: a.swatch },
            n.createElement(Qa, {
              hsl: r,
              offset: ".35",
              active: Math.abs(r.l - 0.35) < i && Math.abs(r.s - 0.5) < i,
              onClick: t,
            }),
          ),
          n.createElement(
            "div",
            { style: a.swatch },
            n.createElement(Qa, {
              hsl: r,
              offset: ".20",
              active: Math.abs(r.l - 0.2) < i && Math.abs(r.s - 0.5) < i,
              onClick: t,
              last: !0,
            }),
          ),
          n.createElement("div", { style: a.clear }),
        );
      };
      const ti = function () {
        var e = (0, o.Ay)({
          default: {
            picker: {
              width: "14px",
              height: "14px",
              borderRadius: "6px",
              transform: "translate(-7px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
            },
          },
        });
        return n.createElement("div", { style: e.picker });
      };
      var ri = function (e) {
        var t = e.hsl,
          r = e.onChange,
          a = e.pointer,
          i = e.styles,
          l = void 0 === i ? {} : i,
          s = e.className,
          c = void 0 === s ? "" : s,
          u = (0, o.Ay)(
            or(
              {
                default: {
                  hue: { height: "12px", position: "relative" },
                  Hue: { radius: "2px" },
                },
              },
              l,
            ),
          );
        return n.createElement(
          "div",
          { style: u.wrap || {}, className: "slider-picker " + c },
          n.createElement(
            "div",
            { style: u.hue },
            n.createElement(m, {
              style: u.Hue,
              hsl: t,
              pointer: a,
              onChange: r,
            }),
          ),
          n.createElement(
            "div",
            { style: u.swatches },
            n.createElement(ei, { hsl: t, onClick: r }),
          ),
        );
      };
      (ri.propTypes = { styles: E().object }),
        (ri.defaultProps = { pointer: ti, styles: {} });
      En(ri);
      var ni = r(83478);
      const oi = function (e) {
        var t = e.color,
          r = e.onClick,
          a = void 0 === r ? function () {} : r,
          i = e.onSwatchHover,
          l = e.first,
          s = e.last,
          c = e.active,
          u = (0, o.Ay)(
            {
              default: {
                color: {
                  width: "40px",
                  height: "24px",
                  cursor: "pointer",
                  background: t,
                  marginBottom: "1px",
                },
                check: { color: xn(t), marginLeft: "8px", display: "none" },
              },
              first: {
                color: { overflow: "hidden", borderRadius: "2px 2px 0 0" },
              },
              last: {
                color: { overflow: "hidden", borderRadius: "0 0 2px 2px" },
              },
              active: { check: { display: "block" } },
              "color-#FFFFFF": {
                color: { boxShadow: "inset 0 0 0 1px #ddd" },
                check: { color: "#333" },
              },
              transparent: { check: { color: "#333" } },
            },
            {
              first: l,
              last: s,
              active: c,
              "color-#FFFFFF": "#FFFFFF" === t,
              transparent: "transparent" === t,
            },
          );
        return n.createElement(
          kn,
          {
            color: t,
            style: u.color,
            onClick: a,
            onHover: i,
            focusStyle: { boxShadow: "0 0 4px " + t },
          },
          n.createElement(
            "div",
            { style: u.check },
            n.createElement(ni.A, null),
          ),
        );
      };
      const ai = function (e) {
        var t = e.onClick,
          r = e.onSwatchHover,
          a = e.group,
          i = e.active,
          l = (0, o.Ay)({
            default: {
              group: {
                paddingBottom: "10px",
                width: "40px",
                float: "left",
                marginRight: "10px",
              },
            },
          });
        return n.createElement(
          "div",
          { style: l.group },
          Qo(a, function (e, o) {
            return n.createElement(oi, {
              key: e,
              color: e,
              active: e.toLowerCase() === i,
              first: 0 === o,
              last: o === a.length - 1,
              onClick: t,
              onSwatchHover: r,
            });
          }),
        );
      };
      var ii = function (e) {
        var t = e.width,
          r = e.height,
          a = e.onChange,
          i = e.onSwatchHover,
          l = e.colors,
          s = e.hex,
          c = e.styles,
          u = void 0 === c ? {} : c,
          p = e.className,
          f = void 0 === p ? "" : p,
          h = (0, o.Ay)(
            or(
              {
                default: {
                  picker: { width: t, height: r },
                  overflow: { height: r, overflowY: "scroll" },
                  body: { padding: "16px 0 6px 16px" },
                  clear: { clear: "both" },
                },
              },
              u,
            ),
          ),
          d = function (e, t) {
            return a({ hex: e, source: "hex" }, t);
          };
        return n.createElement(
          "div",
          { style: h.picker, className: "swatches-picker " + f },
          n.createElement(
            ir,
            null,
            n.createElement(
              "div",
              { style: h.overflow },
              n.createElement(
                "div",
                { style: h.body },
                Qo(l, function (e) {
                  return n.createElement(ai, {
                    key: e.toString(),
                    group: e,
                    active: s,
                    onClick: d,
                    onSwatchHover: i,
                  });
                }),
                n.createElement("div", { style: h.clear }),
              ),
            ),
          ),
        );
      };
      (ii.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        height: E().oneOfType([E().string, E().number]),
        colors: E().arrayOf(E().arrayOf(E().string)),
        styles: E().object,
      }),
        (ii.defaultProps = {
          width: 320,
          height: 240,
          colors: [
            [ra[900], ra[700], ra[500], ra[300], ra[100]],
            [na[900], na[700], na[500], na[300], na[100]],
            [oa[900], oa[700], oa[500], oa[300], oa[100]],
            [aa[900], aa[700], aa[500], aa[300], aa[100]],
            [ia[900], ia[700], ia[500], ia[300], ia[100]],
            [la[900], la[700], la[500], la[300], la[100]],
            [sa[900], sa[700], sa[500], sa[300], sa[100]],
            [ca[900], ca[700], ca[500], ca[300], ca[100]],
            [ua[900], ua[700], ua[500], ua[300], ua[100]],
            ["#194D33", pa[700], pa[500], pa[300], pa[100]],
            [fa[900], fa[700], fa[500], fa[300], fa[100]],
            [ha[900], ha[700], ha[500], ha[300], ha[100]],
            [da[900], da[700], da[500], da[300], da[100]],
            [ba[900], ba[700], ba[500], ba[300], ba[100]],
            [ga[900], ga[700], ga[500], ga[300], ga[100]],
            [va[900], va[700], va[500], va[300], va[100]],
            [xa[900], xa[700], xa[500], xa[300], xa[100]],
            [ya[900], ya[700], ya[500], ya[300], ya[100]],
            ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"],
          ],
          styles: {},
        });
      En(ii);
      var li = function (e) {
        var t = e.onChange,
          r = e.onSwatchHover,
          a = e.hex,
          i = e.colors,
          l = e.width,
          s = e.triangle,
          c = e.styles,
          u = void 0 === c ? {} : c,
          p = e.className,
          f = void 0 === p ? "" : p,
          h = (0, o.Ay)(
            or(
              {
                default: {
                  card: {
                    width: l,
                    background: "#fff",
                    border: "0 solid rgba(0,0,0,0.25)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                    borderRadius: "4px",
                    position: "relative",
                  },
                  body: { padding: "15px 9px 9px 15px" },
                  label: { fontSize: "18px", color: "#fff" },
                  triangle: {
                    width: "0px",
                    height: "0px",
                    borderStyle: "solid",
                    borderWidth: "0 9px 10px 9px",
                    borderColor: "transparent transparent #fff transparent",
                    position: "absolute",
                  },
                  triangleShadow: {
                    width: "0px",
                    height: "0px",
                    borderStyle: "solid",
                    borderWidth: "0 9px 10px 9px",
                    borderColor:
                      "transparent transparent rgba(0,0,0,.1) transparent",
                    position: "absolute",
                  },
                  hash: {
                    background: "#F0F0F0",
                    height: "30px",
                    width: "30px",
                    borderRadius: "4px 0 0 4px",
                    float: "left",
                    color: "#98A1A4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  input: {
                    width: "100px",
                    fontSize: "14px",
                    color: "#666",
                    border: "0px",
                    outline: "none",
                    height: "28px",
                    boxShadow: "inset 0 0 0 1px #F0F0F0",
                    boxSizing: "content-box",
                    borderRadius: "0 4px 4px 0",
                    float: "left",
                    paddingLeft: "8px",
                  },
                  swatch: {
                    width: "30px",
                    height: "30px",
                    float: "left",
                    borderRadius: "4px",
                    margin: "0 6px 6px 0",
                  },
                  clear: { clear: "both" },
                },
                "hide-triangle": {
                  triangle: { display: "none" },
                  triangleShadow: { display: "none" },
                },
                "top-left-triangle": {
                  triangle: { top: "-10px", left: "12px" },
                  triangleShadow: { top: "-11px", left: "12px" },
                },
                "top-right-triangle": {
                  triangle: { top: "-10px", right: "12px" },
                  triangleShadow: { top: "-11px", right: "12px" },
                },
              },
              u,
            ),
            {
              "hide-triangle": "hide" === s,
              "top-left-triangle": "top-left" === s,
              "top-right-triangle": "top-right" === s,
            },
          ),
          d = function (e, r) {
            vn(e) && t({ hex: e, source: "hex" }, r);
          };
        return n.createElement(
          "div",
          { style: h.card, className: "twitter-picker " + f },
          n.createElement("div", { style: h.triangleShadow }),
          n.createElement("div", { style: h.triangle }),
          n.createElement(
            "div",
            { style: h.body },
            Qo(i, function (e, t) {
              return n.createElement(kn, {
                key: t,
                color: e,
                hex: e,
                style: h.swatch,
                onClick: d,
                onHover: r,
                focusStyle: { boxShadow: "0 0 4px " + e },
              });
            }),
            n.createElement("div", { style: h.hash }, "#"),
            n.createElement(v, {
              label: null,
              style: { input: h.input },
              value: a.replace("#", ""),
              onChange: d,
            }),
            n.createElement("div", { style: h.clear }),
          ),
        );
      };
      (li.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        triangle: E().oneOf(["hide", "top-left", "top-right"]),
        colors: E().arrayOf(E().string),
        styles: E().object,
      }),
        (li.defaultProps = {
          width: 276,
          colors: [
            "#FF6900",
            "#FCB900",
            "#7BDCB5",
            "#00D084",
            "#8ED1FC",
            "#0693E3",
            "#ABB8C3",
            "#EB144C",
            "#F78DA7",
            "#9900EF",
          ],
          triangle: "top-left",
          styles: {},
        });
      En(li);
      var si = function (e) {
        var t = (0, o.Ay)({
          default: {
            picker: {
              width: "20px",
              height: "20px",
              borderRadius: "22px",
              border: "2px #fff solid",
              transform: "translate(-12px, -13px)",
              background:
                "hsl(" +
                Math.round(e.hsl.h) +
                ", " +
                Math.round(100 * e.hsl.s) +
                "%, " +
                Math.round(100 * e.hsl.l) +
                "%)",
            },
          },
        });
        return n.createElement("div", { style: t.picker });
      };
      (si.propTypes = {
        hsl: E().shape({
          h: E().number,
          s: E().number,
          l: E().number,
          a: E().number,
        }),
      }),
        (si.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
      const ci = si;
      var ui = function (e) {
        var t = (0, o.Ay)({
          default: {
            picker: {
              width: "20px",
              height: "20px",
              borderRadius: "22px",
              transform: "translate(-10px, -7px)",
              background: "hsl(" + Math.round(e.hsl.h) + ", 100%, 50%)",
              border: "2px white solid",
            },
          },
        });
        return n.createElement("div", { style: t.picker });
      };
      (ui.propTypes = {
        hsl: E().shape({
          h: E().number,
          s: E().number,
          l: E().number,
          a: E().number,
        }),
      }),
        (ui.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
      const pi = ui;
      const fi = function (e) {
        var t = e.onChange,
          r = e.rgb,
          a = e.hsl,
          i = e.hex,
          l = e.hsv,
          s = function (e, r) {
            if (e.hex) vn(e.hex) && t({ hex: e.hex, source: "hex" }, r);
            else if (e.rgb) {
              var n = e.rgb.split(",");
              yn(e.rgb, "rgb") &&
                t({ r: n[0], g: n[1], b: n[2], a: 1, source: "rgb" }, r);
            } else if (e.hsv) {
              var o = e.hsv.split(",");
              yn(e.hsv, "hsv") &&
                ((o[2] = o[2].replace("%", "")),
                (o[1] = o[1].replace("%", "")),
                (o[0] = o[0].replace("°", "")),
                1 == o[1] ? (o[1] = 0.01) : 1 == o[2] && (o[2] = 0.01),
                t(
                  {
                    h: Number(o[0]),
                    s: Number(o[1]),
                    v: Number(o[2]),
                    source: "hsv",
                  },
                  r,
                ));
            } else if (e.hsl) {
              var a = e.hsl.split(",");
              yn(e.hsl, "hsl") &&
                ((a[2] = a[2].replace("%", "")),
                (a[1] = a[1].replace("%", "")),
                (a[0] = a[0].replace("°", "")),
                1 == f[1] ? (f[1] = 0.01) : 1 == f[2] && (f[2] = 0.01),
                t(
                  {
                    h: Number(a[0]),
                    s: Number(a[1]),
                    v: Number(a[2]),
                    source: "hsl",
                  },
                  r,
                ));
            }
          },
          c = (0, o.Ay)({
            default: {
              wrap: { display: "flex", height: "100px", marginTop: "4px" },
              fields: { width: "100%" },
              column: {
                paddingTop: "10px",
                display: "flex",
                justifyContent: "space-between",
              },
              double: { padding: "0px 4.4px", boxSizing: "border-box" },
              input: {
                width: "100%",
                height: "38px",
                boxSizing: "border-box",
                padding: "4px 10% 3px",
                textAlign: "center",
                border: "1px solid #dadce0",
                fontSize: "11px",
                textTransform: "lowercase",
                borderRadius: "5px",
                outline: "none",
                fontFamily: "Roboto,Arial,sans-serif",
              },
              input2: {
                height: "38px",
                width: "100%",
                border: "1px solid #dadce0",
                boxSizing: "border-box",
                fontSize: "11px",
                textTransform: "lowercase",
                borderRadius: "5px",
                outline: "none",
                paddingLeft: "10px",
                fontFamily: "Roboto,Arial,sans-serif",
              },
              label: {
                textAlign: "center",
                fontSize: "12px",
                background: "#fff",
                position: "absolute",
                textTransform: "uppercase",
                color: "#3c4043",
                width: "35px",
                top: "-6px",
                left: "0",
                right: "0",
                marginLeft: "auto",
                marginRight: "auto",
                fontFamily: "Roboto,Arial,sans-serif",
              },
              label2: {
                left: "10px",
                textAlign: "center",
                fontSize: "12px",
                background: "#fff",
                position: "absolute",
                textTransform: "uppercase",
                color: "#3c4043",
                width: "32px",
                top: "-6px",
                fontFamily: "Roboto,Arial,sans-serif",
              },
              single: { flexGrow: "1", margin: "0px 4.4px" },
            },
          }),
          u = r.r + ", " + r.g + ", " + r.b,
          p =
            Math.round(a.h) +
            "°, " +
            Math.round(100 * a.s) +
            "%, " +
            Math.round(100 * a.l) +
            "%",
          f =
            Math.round(l.h) +
            "°, " +
            Math.round(100 * l.s) +
            "%, " +
            Math.round(100 * l.v) +
            "%";
        return n.createElement(
          "div",
          { style: c.wrap, className: "flexbox-fix" },
          n.createElement(
            "div",
            { style: c.fields },
            n.createElement(
              "div",
              { style: c.double },
              n.createElement(v, {
                style: { input: c.input, label: c.label },
                label: "hex",
                value: i,
                onChange: s,
              }),
            ),
            n.createElement(
              "div",
              { style: c.column },
              n.createElement(
                "div",
                { style: c.single },
                n.createElement(v, {
                  style: { input: c.input2, label: c.label2 },
                  label: "rgb",
                  value: u,
                  onChange: s,
                }),
              ),
              n.createElement(
                "div",
                { style: c.single },
                n.createElement(v, {
                  style: { input: c.input2, label: c.label2 },
                  label: "hsv",
                  value: f,
                  onChange: s,
                }),
              ),
              n.createElement(
                "div",
                { style: c.single },
                n.createElement(v, {
                  style: { input: c.input2, label: c.label2 },
                  label: "hsl",
                  value: p,
                  onChange: s,
                }),
              ),
            ),
          ),
        );
      };
      var hi = function (e) {
        var t = e.width,
          r = e.onChange,
          a = e.rgb,
          i = e.hsl,
          l = e.hsv,
          s = e.hex,
          c = e.header,
          u = e.styles,
          p = void 0 === u ? {} : u,
          f = e.className,
          h = void 0 === f ? "" : f,
          d = (0, o.Ay)(
            or(
              {
                default: {
                  picker: {
                    width: t,
                    background: "#fff",
                    border: "1px solid #dfe1e5",
                    boxSizing: "initial",
                    display: "flex",
                    flexWrap: "wrap",
                    borderRadius: "8px 8px 0px 0px",
                  },
                  head: {
                    height: "57px",
                    width: "100%",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    paddingLeft: "16px",
                    fontSize: "20px",
                    boxSizing: "border-box",
                    fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif",
                  },
                  saturation: {
                    width: "70%",
                    padding: "0px",
                    position: "relative",
                    overflow: "hidden",
                  },
                  swatch: {
                    width: "30%",
                    height: "228px",
                    padding: "0px",
                    background:
                      "rgba(" + a.r + ", " + a.g + ", " + a.b + ", 1)",
                    position: "relative",
                    overflow: "hidden",
                  },
                  body: { margin: "auto", width: "95%" },
                  controls: {
                    display: "flex",
                    boxSizing: "border-box",
                    height: "52px",
                    paddingTop: "22px",
                  },
                  color: { width: "32px" },
                  hue: {
                    height: "8px",
                    position: "relative",
                    margin: "0px 16px 0px 16px",
                    width: "100%",
                  },
                  Hue: { radius: "2px" },
                },
              },
              p,
            ),
          );
        return n.createElement(
          "div",
          { style: d.picker, className: "google-picker " + h },
          n.createElement("div", { style: d.head }, c),
          n.createElement("div", { style: d.swatch }),
          n.createElement(
            "div",
            { style: d.saturation },
            n.createElement(Cr, { hsl: i, hsv: l, pointer: ci, onChange: r }),
          ),
          n.createElement(
            "div",
            { style: d.body },
            n.createElement(
              "div",
              { style: d.controls, className: "flexbox-fix" },
              n.createElement(
                "div",
                { style: d.hue },
                n.createElement(m, {
                  style: d.Hue,
                  hsl: i,
                  radius: "4px",
                  pointer: pi,
                  onChange: r,
                }),
              ),
            ),
            n.createElement(fi, {
              rgb: a,
              hsl: i,
              hex: s,
              hsv: l,
              onChange: r,
            }),
          ),
        );
      };
      (hi.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        styles: E().object,
        header: E().string,
      }),
        (hi.defaultProps = { width: 652, styles: {}, header: "Color picker" });
      En(hi);
    },
    12838: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.autoprefix = void 0);
      var n,
        o = r(62369),
        a = (n = o) && n.__esModule ? n : { default: n },
        i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
      var l = {
          borderRadius: function (e) {
            return {
              msBorderRadius: e,
              MozBorderRadius: e,
              OBorderRadius: e,
              WebkitBorderRadius: e,
              borderRadius: e,
            };
          },
          boxShadow: function (e) {
            return {
              msBoxShadow: e,
              MozBoxShadow: e,
              OBoxShadow: e,
              WebkitBoxShadow: e,
              boxShadow: e,
            };
          },
          userSelect: function (e) {
            return {
              WebkitTouchCallout: e,
              KhtmlUserSelect: e,
              MozUserSelect: e,
              msUserSelect: e,
              WebkitUserSelect: e,
              userSelect: e,
            };
          },
          flex: function (e) {
            return {
              WebkitBoxFlex: e,
              MozBoxFlex: e,
              WebkitFlex: e,
              msFlex: e,
              flex: e,
            };
          },
          flexBasis: function (e) {
            return { WebkitFlexBasis: e, flexBasis: e };
          },
          justifyContent: function (e) {
            return { WebkitJustifyContent: e, justifyContent: e };
          },
          transition: function (e) {
            return {
              msTransition: e,
              MozTransition: e,
              OTransition: e,
              WebkitTransition: e,
              transition: e,
            };
          },
          transform: function (e) {
            return {
              msTransform: e,
              MozTransform: e,
              OTransform: e,
              WebkitTransform: e,
              transform: e,
            };
          },
          absolute: function (e) {
            var t = e && e.split(" ");
            return {
              position: "absolute",
              top: t && t[0],
              right: t && t[1],
              bottom: t && t[2],
              left: t && t[3],
            };
          },
          extend: function (e, t) {
            var r = t[e];
            return r || { extend: e };
          },
        },
        s = (t.autoprefix = function (e) {
          var t = {};
          return (
            (0, a.default)(e, function (e, r) {
              var n = {};
              (0, a.default)(e, function (e, t) {
                var r = l[t];
                r ? (n = i({}, n, r(e))) : (n[t] = e);
              }),
                (t[r] = n);
            }),
            t
          );
        });
      t.default = s;
    },
    72818: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.active = void 0);
      var n,
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        a = r(90626),
        i = (n = a) && n.__esModule ? n : { default: n };
      function l(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var s = (t.active = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "span";
        return (function (r) {
          function n() {
            var r, a, s;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n);
            for (var c = arguments.length, u = Array(c), p = 0; p < c; p++)
              u[p] = arguments[p];
            return (
              (a = s =
                l(
                  this,
                  (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                    r,
                    [this].concat(u),
                  ),
                )),
              (s.state = { active: !1 }),
              (s.handleMouseDown = function () {
                return s.setState({ active: !0 });
              }),
              (s.handleMouseUp = function () {
                return s.setState({ active: !1 });
              }),
              (s.render = function () {
                return i.default.createElement(
                  t,
                  {
                    onMouseDown: s.handleMouseDown,
                    onMouseUp: s.handleMouseUp,
                  },
                  i.default.createElement(e, o({}, s.props, s.state)),
                );
              }),
              l(s, a)
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(n, r),
            n
          );
        })(i.default.Component);
      });
      t.default = s;
    },
    17516: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.hover = void 0);
      var n,
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        a = r(90626),
        i = (n = a) && n.__esModule ? n : { default: n };
      function l(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var s = (t.hover = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "span";
        return (function (r) {
          function n() {
            var r, a, s;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n);
            for (var c = arguments.length, u = Array(c), p = 0; p < c; p++)
              u[p] = arguments[p];
            return (
              (a = s =
                l(
                  this,
                  (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                    r,
                    [this].concat(u),
                  ),
                )),
              (s.state = { hover: !1 }),
              (s.handleMouseOver = function () {
                return s.setState({ hover: !0 });
              }),
              (s.handleMouseOut = function () {
                return s.setState({ hover: !1 });
              }),
              (s.render = function () {
                return i.default.createElement(
                  t,
                  {
                    onMouseOver: s.handleMouseOver,
                    onMouseOut: s.handleMouseOut,
                  },
                  i.default.createElement(e, o({}, s.props, s.state)),
                );
              }),
              l(s, a)
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(n, r),
            n
          );
        })(i.default.Component);
      });
      t.default = s;
    },
    81335: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.flattenNames = void 0);
      var n = l(r(77837)),
        o = l(r(62369)),
        a = l(r(23449)),
        i = l(r(67160));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (t.flattenNames = function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          r = [];
        return (
          (0, i.default)(t, function (t) {
            Array.isArray(t)
              ? e(t).map(function (e) {
                  return r.push(e);
                })
              : (0, a.default)(t)
                ? (0, o.default)(t, function (e, t) {
                    !0 === e && r.push(t), r.push(t + "-" + e);
                  })
                : (0, n.default)(t) && r.push(t);
          }),
          r
        );
      });
      t.default = s;
    },
    85341: (e, t, r) => {
      "use strict";
      t.H8 = void 0;
      var n = c(r(81335)),
        o = c(r(89433)),
        a = c(r(12838)),
        i = c(r(17516)),
        l = c(r(72818)),
        s = c(r(60363));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i.default, (t.H8 = i.default), l.default, s.default;
      var u = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        var l = (0, n.default)(r),
          s = (0, o.default)(e, l);
        return (0, a.default)(s);
      };
      t.Ay = u;
    },
    60363: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = function (e, t) {
        var r = {},
          n = function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            r[e] = t;
          };
        return (
          0 === e && n("first-child"),
          e === t - 1 && n("last-child"),
          (0 === e || e % 2 == 0) && n("even"),
          1 === Math.abs(e % 2) && n("odd"),
          n("nth-child", e),
          r
        );
      };
    },
    89433: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mergeClasses = void 0);
      var n = i(r(62369)),
        o = i(r(52305)),
        a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          };
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (t.mergeClasses = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = (e.default && (0, o.default)(e.default)) || {};
        return (
          t.map(function (t) {
            var o = e[t];
            return (
              o &&
                (0, n.default)(o, function (e, t) {
                  r[t] || (r[t] = {}), (r[t] = a({}, r[t], o[t]));
                }),
              t
            );
          }),
          r
        );
      });
      t.default = l;
    },
  },
]);

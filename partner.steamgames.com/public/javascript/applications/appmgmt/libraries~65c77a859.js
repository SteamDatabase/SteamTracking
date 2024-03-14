/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [2120],
  {
    61615: (e, t, r) => {
      "use strict";
      var n,
        a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = r(47427),
        i = (n = o) && n.__esModule ? n : { default: n };
      t.Z = function (e) {
        var t = e.fill,
          r = void 0 === t ? "currentColor" : t,
          n = e.width,
          o = void 0 === n ? 24 : n,
          l = e.height,
          s = void 0 === l ? 24 : l,
          c = e.style,
          p = void 0 === c ? {} : c,
          u = (function (e, t) {
            var r = {};
            for (var n in e)
              t.indexOf(n) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
            return r;
          })(e, ["fill", "width", "height", "style"]);
        return i.default.createElement(
          "svg",
          a(
            {
              viewBox: "0 0 24 24",
              style: a({ fill: r, width: o, height: s }, p),
            },
            u,
          ),
          i.default.createElement("path", {
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
          }),
        );
      };
    },
    17523: (e, t, r) => {
      "use strict";
      var n,
        a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = r(47427),
        i = (n = o) && n.__esModule ? n : { default: n };
      t.Z = function (e) {
        var t = e.fill,
          r = void 0 === t ? "currentColor" : t,
          n = e.width,
          o = void 0 === n ? 24 : n,
          l = e.height,
          s = void 0 === l ? 24 : l,
          c = e.style,
          p = void 0 === c ? {} : c,
          u = (function (e, t) {
            var r = {};
            for (var n in e)
              t.indexOf(n) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
            return r;
          })(e, ["fill", "width", "height", "style"]);
        return i.default.createElement(
          "svg",
          a(
            {
              viewBox: "0 0 24 24",
              style: a({ fill: r, width: o, height: s }, p),
            },
            u,
          ),
          i.default.createElement("path", {
            d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
          }),
        );
      };
    },
    78447: (e) => {
      e.exports = function (e, t) {
        for (
          var r = -1, n = null == e ? 0 : e.length;
          ++r < n && !1 !== t(e[r], r, e);

        );
        return e;
      };
    },
    64801: (e, t, r) => {
      var n = r(84423),
        a = r(35800),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, r) {
        var i = e[t];
        (o.call(e, t) && a(i, r) && (void 0 !== r || t in e)) || n(e, t, r);
      };
    },
    52361: (e, t, r) => {
      var n = r(5036),
        a = r(34840);
      e.exports = function (e, t) {
        return e && n(t, a(t), e);
      };
    },
    63959: (e, t, r) => {
      var n = r(5036),
        a = r(61190);
      e.exports = function (e, t) {
        return e && n(t, a(t), e);
      };
    },
    97454: (e, t, r) => {
      var n = r(74814),
        a = r(78447),
        o = r(64801),
        i = r(52361),
        l = r(63959),
        s = r(49615),
        c = r(72458),
        p = r(82620),
        u = r(65237),
        h = r(5547),
        f = r(23810),
        d = r(22926),
        b = r(78758),
        g = r(72650),
        v = r(65211),
        x = r(5370),
        m = r(43800),
        y = r(44358),
        w = r(60486),
        E = r(48918),
        C = r(34840),
        k = r(61190),
        S = "[object Arguments]",
        _ = "[object Function]",
        O = "[object Object]",
        M = {};
      (M[S] =
        M["[object Array]"] =
        M["[object ArrayBuffer]"] =
        M["[object DataView]"] =
        M["[object Boolean]"] =
        M["[object Date]"] =
        M["[object Float32Array]"] =
        M["[object Float64Array]"] =
        M["[object Int8Array]"] =
        M["[object Int16Array]"] =
        M["[object Int32Array]"] =
        M["[object Map]"] =
        M["[object Number]"] =
        M[O] =
        M["[object RegExp]"] =
        M["[object Set]"] =
        M["[object String]"] =
        M["[object Symbol]"] =
        M["[object Uint8Array]"] =
        M["[object Uint8ClampedArray]"] =
        M["[object Uint16Array]"] =
        M["[object Uint32Array]"] =
          !0),
        (M["[object Error]"] = M[_] = M["[object WeakMap]"] = !1),
        (e.exports = function e(t, r, R, j, F, A) {
          var B,
            P = 1 & r,
            T = 2 & r,
            H = 4 & r;
          if ((R && (B = F ? R(t, j, F, A) : R(t)), void 0 !== B)) return B;
          if (!w(t)) return t;
          var L = x(t);
          if (L) {
            if (((B = b(t)), !P)) return c(t, B);
          } else {
            var D = d(t),
              Z = D == _ || "[object GeneratorFunction]" == D;
            if (m(t)) return s(t, P);
            if (D == O || D == S || (Z && !F)) {
              if (((B = T || Z ? {} : v(t)), !P))
                return T ? u(t, l(B, t)) : p(t, i(B, t));
            } else {
              if (!M[D]) return F ? t : {};
              B = g(t, D, P);
            }
          }
          A || (A = new n());
          var z = A.get(t);
          if (z) return z;
          A.set(t, B),
            E(t)
              ? t.forEach(function (n) {
                  B.add(e(n, r, R, n, t, A));
                })
              : y(t) &&
                t.forEach(function (n, a) {
                  B.set(a, e(n, r, R, a, t, A));
                });
          var N = L ? void 0 : (H ? (T ? f : h) : T ? k : C)(t);
          return (
            a(N || t, function (n, a) {
              N && (n = t[(a = n)]), o(B, a, e(n, r, R, a, t, A));
            }),
            B
          );
        });
    },
    65006: (e, t, r) => {
      var n = r(60486),
        a = Object.create,
        o = (function () {
          function e() {}
          return function (t) {
            if (!n(t)) return {};
            if (a) return a(t);
            e.prototype = t;
            var r = new e();
            return (e.prototype = void 0), r;
          };
        })();
      e.exports = o;
    },
    34894: (e, t, r) => {
      var n = r(22926),
        a = r(95753);
      e.exports = function (e) {
        return a(e) && "[object Map]" == n(e);
      };
    },
    67755: (e, t, r) => {
      var n = r(22926),
        a = r(95753);
      e.exports = function (e) {
        return a(e) && "[object Set]" == n(e);
      };
    },
    15126: (e, t, r) => {
      var n = r(60486),
        a = r(66484),
        o = r(66818),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!n(e)) return o(e);
        var t = a(e),
          r = [];
        for (var l in e)
          ("constructor" != l || (!t && i.call(e, l))) && r.push(l);
        return r;
      };
    },
    82827: (e, t, r) => {
      var n = r(7414);
      e.exports = function (e) {
        return "function" == typeof e ? e : n;
      };
    },
    88350: (e, t, r) => {
      var n = r(25449);
      e.exports = function (e) {
        var t = new e.constructor(e.byteLength);
        return new n(t).set(new n(e)), t;
      };
    },
    49615: (e, t, r) => {
      e = r.nmd(e);
      var n = r(49656),
        a = t && !t.nodeType && t,
        o = a && e && !e.nodeType && e,
        i = o && o.exports === a ? n.Buffer : void 0,
        l = i ? i.allocUnsafe : void 0;
      e.exports = function (e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = l ? l(r) : new e.constructor(r);
        return e.copy(n), n;
      };
    },
    41143: (e, t, r) => {
      var n = r(88350);
      e.exports = function (e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      };
    },
    54890: (e) => {
      var t = /\w*$/;
      e.exports = function (e) {
        var r = new e.constructor(e.source, t.exec(e));
        return (r.lastIndex = e.lastIndex), r;
      };
    },
    1371: (e, t, r) => {
      var n = r(99513),
        a = n ? n.prototype : void 0,
        o = a ? a.valueOf : void 0;
      e.exports = function (e) {
        return o ? Object(o.call(e)) : {};
      };
    },
    40868: (e, t, r) => {
      var n = r(88350);
      e.exports = function (e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      };
    },
    72458: (e) => {
      e.exports = function (e, t) {
        var r = -1,
          n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
      };
    },
    5036: (e, t, r) => {
      var n = r(64801),
        a = r(84423);
      e.exports = function (e, t, r, o) {
        var i = !r;
        r || (r = {});
        for (var l = -1, s = t.length; ++l < s; ) {
          var c = t[l],
            p = o ? o(r[c], e[c], c, r, e) : void 0;
          void 0 === p && (p = e[c]), i ? a(r, c, p) : n(r, c, p);
        }
        return r;
      };
    },
    82620: (e, t, r) => {
      var n = r(5036),
        a = r(7501);
      e.exports = function (e, t) {
        return n(e, a(e), t);
      };
    },
    65237: (e, t, r) => {
      var n = r(5036),
        a = r(966);
      e.exports = function (e, t) {
        return n(e, a(e), t);
      };
    },
    23810: (e, t, r) => {
      var n = r(73092),
        a = r(966),
        o = r(61190);
      e.exports = function (e) {
        return n(e, o, a);
      };
    },
    966: (e, t, r) => {
      var n = r(39809),
        a = r(75440),
        o = r(7501),
        i = r(8562),
        l = Object.getOwnPropertySymbols
          ? function (e) {
              for (var t = []; e; ) n(t, o(e)), (e = a(e));
              return t;
            }
          : i;
      e.exports = l;
    },
    78758: (e) => {
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
    72650: (e, t, r) => {
      var n = r(88350),
        a = r(41143),
        o = r(54890),
        i = r(1371),
        l = r(40868);
      e.exports = function (e, t, r) {
        var s = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return n(e);
          case "[object Boolean]":
          case "[object Date]":
            return new s(+e);
          case "[object DataView]":
            return a(e, r);
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
            return o(e);
          case "[object Symbol]":
            return i(e);
        }
      };
    },
    65211: (e, t, r) => {
      var n = r(65006),
        a = r(75440),
        o = r(66484);
      e.exports = function (e) {
        return "function" != typeof e.constructor || o(e) ? {} : n(a(e));
      };
    },
    66818: (e) => {
      e.exports = function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
      };
    },
    64419: (e, t, r) => {
      var n = r(97454);
      e.exports = function (e) {
        return n(e, 5);
      };
    },
    21421: (e, t, r) => {
      var n = r(53120),
        a = r(82827);
      e.exports = function (e, t) {
        return e && n(e, a(t));
      };
    },
    44358: (e, t, r) => {
      var n = r(34894),
        a = r(43630),
        o = r(21971),
        i = o && o.isMap,
        l = i ? a(i) : n;
      e.exports = l;
    },
    48918: (e, t, r) => {
      var n = r(67755),
        a = r(43630),
        o = r(21971),
        i = o && o.isSet,
        l = i ? a(i) : n;
      e.exports = l;
    },
    61190: (e, t, r) => {
      var n = r(93914),
        a = r(15126),
        o = r(1161);
      e.exports = function (e) {
        return o(e) ? n(e, !0) : a(e);
      };
    },
    77266: (e, t, r) => {
      "use strict";
      r.d(t, { AI: () => It });
      var n = r(47427),
        a = r(41321),
        o = {},
        i = function (e, t, r, n) {
          var a = e + "-" + t + "-" + r + (n ? "-server" : "");
          if (o[a]) return o[a];
          var i = (function (e, t, r, n) {
            if ("undefined" == typeof document && !n) return null;
            var a = n ? new n() : document.createElement("canvas");
            (a.width = 2 * r), (a.height = 2 * r);
            var o = a.getContext("2d");
            return o
              ? ((o.fillStyle = e),
                o.fillRect(0, 0, a.width, a.height),
                (o.fillStyle = t),
                o.fillRect(0, 0, r, r),
                o.translate(r, r),
                o.fillRect(0, 0, r, r),
                a.toDataURL())
              : null;
          })(e, t, r, n);
          return (o[a] = i), i;
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
            o = e.size,
            s = e.renderers,
            c = e.borderRadius,
            p = e.boxShadow,
            u = e.children,
            h = (0, a.ZP)({
              default: {
                grid: {
                  borderRadius: c,
                  boxShadow: p,
                  absolute: "0px 0px 0px 0px",
                  background: "url(" + i(t, r, o, s.canvas) + ") center left",
                },
              },
            });
          return (0, n.isValidElement)(u)
            ? n.cloneElement(
                u,
                l({}, u.props, { style: l({}, u.props.style, h.grid) }),
              )
            : n.createElement("div", { style: h.grid });
        };
      s.defaultProps = {
        size: 8,
        white: "transparent",
        grey: "rgba(0,0,0,.08)",
        renderers: {},
      };
      const c = s;
      var p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        u = (function () {
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
      function h(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      const f = (function (e) {
        function t() {
          var e, r, n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var a = arguments.length, o = Array(a), i = 0; i < a; i++)
            o[i] = arguments[i];
          return (
            (r = n =
              h(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(o),
                ),
              )),
            (n.handleChange = function (e) {
              var t = (function (e, t, r, n, a) {
                var o = a.clientWidth,
                  i = a.clientHeight,
                  l = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
                  s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
                  c = l - (a.getBoundingClientRect().left + window.pageXOffset),
                  p = s - (a.getBoundingClientRect().top + window.pageYOffset);
                if ("vertical" === r) {
                  var u = void 0;
                  if (
                    ((u =
                      p < 0 ? 0 : p > i ? 1 : Math.round((100 * p) / i) / 100),
                    t.a !== u)
                  )
                    return { h: t.h, s: t.s, l: t.l, a: u, source: "rgb" };
                } else {
                  var h = void 0;
                  if (
                    n !==
                    (h =
                      c < 0 ? 0 : c > o ? 1 : Math.round((100 * c) / o) / 100)
                  )
                    return { h: t.h, s: t.s, l: t.l, a: h, source: "rgb" };
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
            h(n, r)
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
          u(t, [
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
                  r = (0, a.ZP)(
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
                      overwrite: p({}, this.props.style),
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
                var a = r.getArrowOffset(),
                  o = 38 === e.keyCode ? n + a : n - a;
                r.setUpdatedValue(o, e);
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
                  t = (0, a.ZP)(
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
      function m(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      const y = (function (e) {
        function t() {
          var e, r, n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var a = arguments.length, o = Array(a), i = 0; i < a; i++)
            o[i] = arguments[i];
          return (
            (r = n =
              m(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(o),
                ),
              )),
            (n.handleChange = function (e) {
              var t = (function (e, t, r, n) {
                var a = n.clientWidth,
                  o = n.clientHeight,
                  i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
                  l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
                  s = i - (n.getBoundingClientRect().left + window.pageXOffset),
                  c = l - (n.getBoundingClientRect().top + window.pageYOffset);
                if ("vertical" === t) {
                  var p = void 0;
                  if (
                    ((p =
                      c < 0
                        ? 359
                        : c > o
                          ? 0
                          : (360 * ((-100 * c) / o + 100)) / 100),
                    r.h !== p)
                  )
                    return { h: p, s: r.s, l: r.l, a: r.a, source: "hsl" };
                } else {
                  var u = void 0;
                  if (
                    ((u =
                      s < 0 ? 0 : s > a ? 359 : (((100 * s) / a) * 360) / 100),
                    r.h !== u)
                  )
                    return { h: u, s: r.s, l: r.l, a: r.a, source: "hsl" };
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
            m(n, r)
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
                  o = (0, a.ZP)(
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
                  { style: o.hue },
                  n.createElement(
                    "div",
                    {
                      className: "hue-" + r,
                      style: o.container,
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
                      { style: o.pointer },
                      this.props.pointer
                        ? n.createElement(this.props.pointer, this.props)
                        : n.createElement("div", { style: o.slider }),
                    ),
                  ),
                );
              },
            },
          ]),
          t
        );
      })(n.PureComponent || n.Component);
      var w = r(25816),
        E = r.n(w),
        C = r(41682),
        k = r(70590),
        S = r(35773);
      const _ = function (e, t, r) {
        ((void 0 !== r && !(0, S.Z)(e[t], r)) || (void 0 === r && !(t in e))) &&
          (0, k.Z)(e, t, r);
      };
      var O = r(31812),
        M = r(14293),
        R = r(39994),
        j = r(76740),
        F = r(5620),
        A = r(1662),
        B = r(10339),
        P = r(33700),
        T = r(97703);
      const H = function (e) {
        return (0, T.Z)(e) && (0, P.Z)(e);
      };
      var L = r(73127),
        D = r(43967),
        Z = r(78325),
        z = r(86445),
        N = r(85812);
      const G = function (e, t) {
        if (
          ("constructor" !== t || "function" != typeof e[t]) &&
          "__proto__" != t
        )
          return e[t];
      };
      var U = r(65731),
        W = r(47429);
      const X = function (e) {
        return (0, U.Z)(e, (0, W.Z)(e));
      };
      const I = function (e, t, r, n, a, o, i) {
        var l = G(e, r),
          s = G(t, r),
          c = i.get(s);
        if (c) _(e, r, c);
        else {
          var p = o ? o(l, s, r + "", e, t, i) : void 0,
            u = void 0 === p;
          if (u) {
            var h = (0, B.Z)(s),
              f = !h && (0, L.Z)(s),
              d = !h && !f && (0, N.Z)(s);
            (p = s),
              h || f || d
                ? (0, B.Z)(l)
                  ? (p = l)
                  : H(l)
                    ? (p = (0, j.Z)(l))
                    : f
                      ? ((u = !1), (p = (0, M.Z)(s, !0)))
                      : d
                        ? ((u = !1), (p = (0, R.Z)(s, !0)))
                        : (p = [])
                : (0, z.Z)(s) || (0, A.Z)(s)
                  ? ((p = l),
                    (0, A.Z)(l)
                      ? (p = X(l))
                      : ((0, Z.Z)(l) && !(0, D.Z)(l)) || (p = (0, F.Z)(s)))
                  : (u = !1);
          }
          u && (i.set(s, p), a(p, s, n, o, i), i.delete(s)), _(e, r, p);
        }
      };
      const V = function e(t, r, n, a, o) {
        t !== r &&
          (0, O.Z)(
            r,
            function (i, l) {
              if ((o || (o = new C.Z()), (0, Z.Z)(i))) I(t, r, l, n, e, a, o);
              else {
                var s = a ? a(G(t, l), i, l + "", t, r, o) : void 0;
                void 0 === s && (s = i), _(t, l, s);
              }
            },
            W.Z,
          );
      };
      var Y = r(6841),
        q = r(73380);
      const $ = (function (e) {
        return (0, Y.Z)(function (t, r) {
          var n = -1,
            a = r.length,
            o = a > 1 ? r[a - 1] : void 0,
            i = a > 2 ? r[2] : void 0;
          for (
            o = e.length > 3 && "function" == typeof o ? (a--, o) : void 0,
              i &&
                (0, q.Z)(r[0], r[1], i) &&
                ((o = a < 3 ? void 0 : o), (a = 1)),
              t = Object(t);
            ++n < a;

          ) {
            var l = r[n];
            l && e(t, l, n, o);
          }
          return t;
        });
      })(function (e, t, r) {
        V(e, t, r);
      });
      var K = function (e) {
        var t = e.zDepth,
          r = e.radius,
          o = e.background,
          i = e.children,
          l = e.styles,
          s = void 0 === l ? {} : l,
          c = (0, a.ZP)(
            $(
              {
                default: {
                  wrap: { position: "relative", display: "inline-block" },
                  content: { position: "relative" },
                  bg: {
                    absolute: "0px 0px 0px 0px",
                    boxShadow: "0 " + t + "px " + 4 * t + "px rgba(0,0,0,.24)",
                    borderRadius: r,
                    background: o,
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
      (K.propTypes = {
        background: E().string,
        zDepth: E().oneOf([0, 1, 2, 3, 4, 5]),
        radius: E().number,
        styles: E().object,
      }),
        (K.defaultProps = {
          background: "#fff",
          zDepth: 1,
          radius: 2,
          styles: {},
        });
      const J = K;
      var Q = r(68312);
      const ee = function () {
        return Q.Z.Date.now();
      };
      var te = r(20787),
        re = Math.max,
        ne = Math.min;
      const ae = function (e, t, r) {
        var n,
          a,
          o,
          i,
          l,
          s,
          c = 0,
          p = !1,
          u = !1,
          h = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function f(t) {
          var r = n,
            o = a;
          return (n = a = void 0), (c = t), (i = e.apply(o, r));
        }
        function d(e) {
          var r = e - s;
          return void 0 === s || r >= t || r < 0 || (u && e - c >= o);
        }
        function b() {
          var e = ee();
          if (d(e)) return g(e);
          l = setTimeout(
            b,
            (function (e) {
              var r = t - (e - s);
              return u ? ne(r, o - (e - c)) : r;
            })(e),
          );
        }
        function g(e) {
          return (l = void 0), h && n ? f(e) : ((n = a = void 0), i);
        }
        function v() {
          var e = ee(),
            r = d(e);
          if (((n = arguments), (a = this), (s = e), r)) {
            if (void 0 === l)
              return (function (e) {
                return (c = e), (l = setTimeout(b, t)), p ? f(e) : i;
              })(s);
            if (u) return clearTimeout(l), (l = setTimeout(b, t)), f(s);
          }
          return void 0 === l && (l = setTimeout(b, t)), i;
        }
        return (
          (t = (0, te.Z)(t) || 0),
          (0, Z.Z)(r) &&
            ((p = !!r.leading),
            (o = (u = "maxWait" in r) ? re((0, te.Z)(r.maxWait) || 0, t) : o),
            (h = "trailing" in r ? !!r.trailing : h)),
          (v.cancel = function () {
            void 0 !== l && clearTimeout(l), (c = 0), (n = s = a = l = void 0);
          }),
          (v.flush = function () {
            return void 0 === l ? i : g(ee());
          }),
          v
        );
      };
      const oe = function (e, t, r) {
        var n = !0,
          a = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return (
          (0, Z.Z)(r) &&
            ((n = "leading" in r ? !!r.leading : n),
            (a = "trailing" in r ? !!r.trailing : a)),
          ae(e, t, { leading: n, maxWait: t, trailing: a })
        );
      };
      var ie = (function () {
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
      var le = (function (e) {
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
                      a = n.width,
                      o = n.height,
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
                    s < 0 ? (s = 0) : s > a && (s = a),
                      c < 0 ? (c = 0) : c > o && (c = o);
                    var p = s / a,
                      u = 1 - c / o;
                    return { h: t.h, s: p, v: u, a: t.a, source: "hsv" };
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
            (r.throttle = oe(function (e, t, r) {
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
          ie(t, [
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
                  o = t.white,
                  i = t.black,
                  l = t.pointer,
                  s = t.circle,
                  c = (0, a.ZP)(
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
                        white: o,
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
      const se = le;
      var ce = r(35943),
        pe = r(64796),
        ue = r(97652);
      const he = function (e) {
        return "function" == typeof e ? e : ue.Z;
      };
      const fe = function (e, t) {
        return ((0, B.Z)(e) ? ce.Z : pe.Z)(e, he(t));
      };
      function de(e) {
        return (
          (de =
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
          de(e)
        );
      }
      var be = /^\s+/,
        ge = /\s+$/;
      function ve(e, t) {
        if (((t = t || {}), (e = e || "") instanceof ve)) return e;
        if (!(this instanceof ve)) return new ve(e, t);
        var r = (function (e) {
          var t = { r: 0, g: 0, b: 0 },
            r = 1,
            n = null,
            a = null,
            o = null,
            i = !1,
            l = !1;
          "string" == typeof e &&
            (e = (function (e) {
              e = e.replace(be, "").replace(ge, "").toLowerCase();
              var t,
                r = !1;
              if (Pe[e]) (e = Pe[e]), (r = !0);
              else if ("transparent" == e)
                return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              if ((t = Ve.rgb.exec(e))) return { r: t[1], g: t[2], b: t[3] };
              if ((t = Ve.rgba.exec(e)))
                return { r: t[1], g: t[2], b: t[3], a: t[4] };
              if ((t = Ve.hsl.exec(e))) return { h: t[1], s: t[2], l: t[3] };
              if ((t = Ve.hsla.exec(e)))
                return { h: t[1], s: t[2], l: t[3], a: t[4] };
              if ((t = Ve.hsv.exec(e))) return { h: t[1], s: t[2], v: t[3] };
              if ((t = Ve.hsva.exec(e)))
                return { h: t[1], s: t[2], v: t[3], a: t[4] };
              if ((t = Ve.hex8.exec(e)))
                return {
                  r: Ze(t[1]),
                  g: Ze(t[2]),
                  b: Ze(t[3]),
                  a: Ue(t[4]),
                  format: r ? "name" : "hex8",
                };
              if ((t = Ve.hex6.exec(e)))
                return {
                  r: Ze(t[1]),
                  g: Ze(t[2]),
                  b: Ze(t[3]),
                  format: r ? "name" : "hex",
                };
              if ((t = Ve.hex4.exec(e)))
                return {
                  r: Ze(t[1] + "" + t[1]),
                  g: Ze(t[2] + "" + t[2]),
                  b: Ze(t[3] + "" + t[3]),
                  a: Ue(t[4] + "" + t[4]),
                  format: r ? "name" : "hex8",
                };
              if ((t = Ve.hex3.exec(e)))
                return {
                  r: Ze(t[1] + "" + t[1]),
                  g: Ze(t[2] + "" + t[2]),
                  b: Ze(t[3] + "" + t[3]),
                  format: r ? "name" : "hex",
                };
              return !1;
            })(e));
          "object" == de(e) &&
            (Ye(e.r) && Ye(e.g) && Ye(e.b)
              ? ((s = e.r),
                (c = e.g),
                (p = e.b),
                (t = {
                  r: 255 * Le(s, 255),
                  g: 255 * Le(c, 255),
                  b: 255 * Le(p, 255),
                }),
                (i = !0),
                (l = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
              : Ye(e.h) && Ye(e.s) && Ye(e.v)
                ? ((n = Ne(e.s)),
                  (a = Ne(e.v)),
                  (t = (function (e, t, r) {
                    (e = 6 * Le(e, 360)), (t = Le(t, 100)), (r = Le(r, 100));
                    var n = Math.floor(e),
                      a = e - n,
                      o = r * (1 - t),
                      i = r * (1 - a * t),
                      l = r * (1 - (1 - a) * t),
                      s = n % 6,
                      c = [r, i, o, o, l, r][s],
                      p = [l, r, r, i, o, o][s],
                      u = [o, o, l, r, r, i][s];
                    return { r: 255 * c, g: 255 * p, b: 255 * u };
                  })(e.h, n, a)),
                  (i = !0),
                  (l = "hsv"))
                : Ye(e.h) &&
                  Ye(e.s) &&
                  Ye(e.l) &&
                  ((n = Ne(e.s)),
                  (o = Ne(e.l)),
                  (t = (function (e, t, r) {
                    var n, a, o;
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
                      ((e = Le(e, 360)),
                      (t = Le(t, 100)),
                      (r = Le(r, 100)),
                      0 === t)
                    )
                      n = a = o = r;
                    else {
                      var l = r < 0.5 ? r * (1 + t) : r + t - r * t,
                        s = 2 * r - l;
                      (n = i(s, l, e + 1 / 3)),
                        (a = i(s, l, e)),
                        (o = i(s, l, e - 1 / 3));
                    }
                    return { r: 255 * n, g: 255 * a, b: 255 * o };
                  })(e.h, n, o)),
                  (i = !0),
                  (l = "hsl")),
            e.hasOwnProperty("a") && (r = e.a));
          var s, c, p;
          return (
            (r = He(r)),
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
      function xe(e, t, r) {
        (e = Le(e, 255)), (t = Le(t, 255)), (r = Le(r, 255));
        var n,
          a,
          o = Math.max(e, t, r),
          i = Math.min(e, t, r),
          l = (o + i) / 2;
        if (o == i) n = a = 0;
        else {
          var s = o - i;
          switch (((a = l > 0.5 ? s / (2 - o - i) : s / (o + i)), o)) {
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
        return { h: n, s: a, l };
      }
      function me(e, t, r) {
        (e = Le(e, 255)), (t = Le(t, 255)), (r = Le(r, 255));
        var n,
          a,
          o = Math.max(e, t, r),
          i = Math.min(e, t, r),
          l = o,
          s = o - i;
        if (((a = 0 === o ? 0 : s / o), o == i)) n = 0;
        else {
          switch (o) {
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
        return { h: n, s: a, v: l };
      }
      function ye(e, t, r, n) {
        var a = [
          ze(Math.round(e).toString(16)),
          ze(Math.round(t).toString(16)),
          ze(Math.round(r).toString(16)),
        ];
        return n &&
          a[0].charAt(0) == a[0].charAt(1) &&
          a[1].charAt(0) == a[1].charAt(1) &&
          a[2].charAt(0) == a[2].charAt(1)
          ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
          : a.join("");
      }
      function we(e, t, r, n) {
        return [
          ze(Ge(n)),
          ze(Math.round(e).toString(16)),
          ze(Math.round(t).toString(16)),
          ze(Math.round(r).toString(16)),
        ].join("");
      }
      function Ee(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = ve(e).toHsl();
        return (r.s -= t / 100), (r.s = De(r.s)), ve(r);
      }
      function Ce(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = ve(e).toHsl();
        return (r.s += t / 100), (r.s = De(r.s)), ve(r);
      }
      function ke(e) {
        return ve(e).desaturate(100);
      }
      function Se(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = ve(e).toHsl();
        return (r.l += t / 100), (r.l = De(r.l)), ve(r);
      }
      function _e(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = ve(e).toRgb();
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
          ve(r)
        );
      }
      function Oe(e, t) {
        t = 0 === t ? 0 : t || 10;
        var r = ve(e).toHsl();
        return (r.l -= t / 100), (r.l = De(r.l)), ve(r);
      }
      function Me(e, t) {
        var r = ve(e).toHsl(),
          n = (r.h + t) % 360;
        return (r.h = n < 0 ? 360 + n : n), ve(r);
      }
      function Re(e) {
        var t = ve(e).toHsl();
        return (t.h = (t.h + 180) % 360), ve(t);
      }
      function je(e, t) {
        if (isNaN(t) || t <= 0)
          throw new Error("Argument to polyad must be a positive number");
        for (var r = ve(e).toHsl(), n = [ve(e)], a = 360 / t, o = 1; o < t; o++)
          n.push(ve({ h: (r.h + o * a) % 360, s: r.s, l: r.l }));
        return n;
      }
      function Fe(e) {
        var t = ve(e).toHsl(),
          r = t.h;
        return [
          ve(e),
          ve({ h: (r + 72) % 360, s: t.s, l: t.l }),
          ve({ h: (r + 216) % 360, s: t.s, l: t.l }),
        ];
      }
      function Ae(e, t, r) {
        (t = t || 6), (r = r || 30);
        var n = ve(e).toHsl(),
          a = 360 / r,
          o = [ve(e)];
        for (n.h = (n.h - ((a * t) >> 1) + 720) % 360; --t; )
          (n.h = (n.h + a) % 360), o.push(ve(n));
        return o;
      }
      function Be(e, t) {
        t = t || 6;
        for (
          var r = ve(e).toHsv(), n = r.h, a = r.s, o = r.v, i = [], l = 1 / t;
          t--;

        )
          i.push(ve({ h: n, s: a, v: o })), (o = (o + l) % 1);
        return i;
      }
      (ve.prototype = {
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
            (this._a = He(e)),
            (this._roundA = Math.round(100 * this._a) / 100),
            this
          );
        },
        toHsv: function () {
          var e = me(this._r, this._g, this._b);
          return { h: 360 * e.h, s: e.s, v: e.v, a: this._a };
        },
        toHsvString: function () {
          var e = me(this._r, this._g, this._b),
            t = Math.round(360 * e.h),
            r = Math.round(100 * e.s),
            n = Math.round(100 * e.v);
          return 1 == this._a
            ? "hsv(" + t + ", " + r + "%, " + n + "%)"
            : "hsva(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHsl: function () {
          var e = xe(this._r, this._g, this._b);
          return { h: 360 * e.h, s: e.s, l: e.l, a: this._a };
        },
        toHslString: function () {
          var e = xe(this._r, this._g, this._b),
            t = Math.round(360 * e.h),
            r = Math.round(100 * e.s),
            n = Math.round(100 * e.l);
          return 1 == this._a
            ? "hsl(" + t + ", " + r + "%, " + n + "%)"
            : "hsla(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
        },
        toHex: function (e) {
          return ye(this._r, this._g, this._b, e);
        },
        toHexString: function (e) {
          return "#" + this.toHex(e);
        },
        toHex8: function (e) {
          return (function (e, t, r, n, a) {
            var o = [
              ze(Math.round(e).toString(16)),
              ze(Math.round(t).toString(16)),
              ze(Math.round(r).toString(16)),
              ze(Ge(n)),
            ];
            if (
              a &&
              o[0].charAt(0) == o[0].charAt(1) &&
              o[1].charAt(0) == o[1].charAt(1) &&
              o[2].charAt(0) == o[2].charAt(1) &&
              o[3].charAt(0) == o[3].charAt(1)
            )
              return (
                o[0].charAt(0) +
                o[1].charAt(0) +
                o[2].charAt(0) +
                o[3].charAt(0)
              );
            return o.join("");
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
            r: Math.round(100 * Le(this._r, 255)) + "%",
            g: Math.round(100 * Le(this._g, 255)) + "%",
            b: Math.round(100 * Le(this._b, 255)) + "%",
            a: this._a,
          };
        },
        toPercentageRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(100 * Le(this._r, 255)) +
                "%, " +
                Math.round(100 * Le(this._g, 255)) +
                "%, " +
                Math.round(100 * Le(this._b, 255)) +
                "%)"
            : "rgba(" +
                Math.round(100 * Le(this._r, 255)) +
                "%, " +
                Math.round(100 * Le(this._g, 255)) +
                "%, " +
                Math.round(100 * Le(this._b, 255)) +
                "%, " +
                this._roundA +
                ")";
        },
        toName: function () {
          return 0 === this._a
            ? "transparent"
            : !(this._a < 1) && (Te[ye(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (e) {
          var t = "#" + we(this._r, this._g, this._b, this._a),
            r = t,
            n = this._gradientType ? "GradientType = 1, " : "";
          if (e) {
            var a = ve(e);
            r = "#" + we(a._r, a._g, a._b, a._a);
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
          return ve(this.toString());
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
          return this._applyModification(Se, arguments);
        },
        brighten: function () {
          return this._applyModification(_e, arguments);
        },
        darken: function () {
          return this._applyModification(Oe, arguments);
        },
        desaturate: function () {
          return this._applyModification(Ee, arguments);
        },
        saturate: function () {
          return this._applyModification(Ce, arguments);
        },
        greyscale: function () {
          return this._applyModification(ke, arguments);
        },
        spin: function () {
          return this._applyModification(Me, arguments);
        },
        _applyCombination: function (e, t) {
          return e.apply(null, [this].concat([].slice.call(t)));
        },
        analogous: function () {
          return this._applyCombination(Ae, arguments);
        },
        complement: function () {
          return this._applyCombination(Re, arguments);
        },
        monochromatic: function () {
          return this._applyCombination(Be, arguments);
        },
        splitcomplement: function () {
          return this._applyCombination(Fe, arguments);
        },
        triad: function () {
          return this._applyCombination(je, [3]);
        },
        tetrad: function () {
          return this._applyCombination(je, [4]);
        },
      }),
        (ve.fromRatio = function (e, t) {
          if ("object" == de(e)) {
            var r = {};
            for (var n in e)
              e.hasOwnProperty(n) && (r[n] = "a" === n ? e[n] : Ne(e[n]));
            e = r;
          }
          return ve(e, t);
        }),
        (ve.equals = function (e, t) {
          return !(!e || !t) && ve(e).toRgbString() == ve(t).toRgbString();
        }),
        (ve.random = function () {
          return ve.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
          });
        }),
        (ve.mix = function (e, t, r) {
          r = 0 === r ? 0 : r || 50;
          var n = ve(e).toRgb(),
            a = ve(t).toRgb(),
            o = r / 100;
          return ve({
            r: (a.r - n.r) * o + n.r,
            g: (a.g - n.g) * o + n.g,
            b: (a.b - n.b) * o + n.b,
            a: (a.a - n.a) * o + n.a,
          });
        }),
        (ve.readability = function (e, t) {
          var r = ve(e),
            n = ve(t);
          return (
            (Math.max(r.getLuminance(), n.getLuminance()) + 0.05) /
            (Math.min(r.getLuminance(), n.getLuminance()) + 0.05)
          );
        }),
        (ve.isReadable = function (e, t, r) {
          var n,
            a,
            o = ve.readability(e, t);
          switch (
            ((a = !1),
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
              a = o >= 4.5;
              break;
            case "AAlarge":
              a = o >= 3;
              break;
            case "AAAsmall":
              a = o >= 7;
          }
          return a;
        }),
        (ve.mostReadable = function (e, t, r) {
          var n,
            a,
            o,
            i,
            l = null,
            s = 0;
          (a = (r = r || {}).includeFallbackColors),
            (o = r.level),
            (i = r.size);
          for (var c = 0; c < t.length; c++)
            (n = ve.readability(e, t[c])) > s && ((s = n), (l = ve(t[c])));
          return ve.isReadable(e, l, { level: o, size: i }) || !a
            ? l
            : ((r.includeFallbackColors = !1),
              ve.mostReadable(e, ["#fff", "#000"], r));
        });
      var Pe = (ve.names = {
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
        Te = (ve.hexNames = (function (e) {
          var t = {};
          for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
          return t;
        })(Pe));
      function He(e) {
        return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
      }
      function Le(e, t) {
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
      function De(e) {
        return Math.min(1, Math.max(0, e));
      }
      function Ze(e) {
        return parseInt(e, 16);
      }
      function ze(e) {
        return 1 == e.length ? "0" + e : "" + e;
      }
      function Ne(e) {
        return e <= 1 && (e = 100 * e + "%"), e;
      }
      function Ge(e) {
        return Math.round(255 * parseFloat(e)).toString(16);
      }
      function Ue(e) {
        return Ze(e) / 255;
      }
      var We,
        Xe,
        Ie,
        Ve =
          ((Xe =
            "[\\s|\\(]+(" +
            (We = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
            ")[,|\\s]+(" +
            We +
            ")[,|\\s]+(" +
            We +
            ")\\s*\\)?"),
          (Ie =
            "[\\s|\\(]+(" +
            We +
            ")[,|\\s]+(" +
            We +
            ")[,|\\s]+(" +
            We +
            ")[,|\\s]+(" +
            We +
            ")\\s*\\)?"),
          {
            CSS_UNIT: new RegExp(We),
            rgb: new RegExp("rgb" + Xe),
            rgba: new RegExp("rgba" + Ie),
            hsl: new RegExp("hsl" + Xe),
            hsla: new RegExp("hsla" + Ie),
            hsv: new RegExp("hsv" + Xe),
            hsva: new RegExp("hsva" + Ie),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          });
      function Ye(e) {
        return !!Ve.CSS_UNIT.exec(e);
      }
      var qe = function (e) {
          var t = 0,
            r = 0;
          return (
            fe(["r", "g", "b", "a", "h", "s", "l", "v"], function (n) {
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
        $e = function (e, t) {
          var r = e.hex ? ve(e.hex) : ve(e),
            n = r.toHsl(),
            a = r.toHsv(),
            o = r.toRgb(),
            i = r.toHex();
          return (
            0 === n.s && ((n.h = t || 0), (a.h = t || 0)),
            {
              hsl: n,
              hex: "000000" === i && 0 === o.a ? "transparent" : "#" + i,
              rgb: o,
              hsv: a,
              oldHue: e.h || t || n.h,
              source: e.source,
            }
          );
        },
        Ke = function (e) {
          if ("transparent" === e) return !0;
          var t = "#" === String(e).charAt(0) ? 1 : 0;
          return e.length !== 4 + t && e.length < 7 + t && ve(e).isValid();
        },
        Je = function (e) {
          if (!e) return "#fff";
          var t = $e(e);
          return "transparent" === t.hex
            ? "rgba(0,0,0,0.4)"
            : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128
              ? "#000"
              : "#fff";
        },
        Qe = function (e, t) {
          return ve(t + " (" + e.replace("°", "") + ")")._ok;
        },
        et =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        tt = (function () {
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
      const rt = function (e) {
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
                if (qe(e)) {
                  var n = $e(e, e.h || t.state.oldHue);
                  t.setState(n),
                    t.props.onChangeComplete &&
                      t.debounce(t.props.onChangeComplete, n, r),
                    t.props.onChange && t.props.onChange(n, r);
                }
              }),
              (t.handleSwatchHover = function (e, r) {
                if (qe(e)) {
                  var n = $e(e, e.h || t.state.oldHue);
                  t.props.onSwatchHover && t.props.onSwatchHover(n, r);
                }
              }),
              (t.state = et({}, $e(e.color, 0))),
              (t.debounce = ae(function (e, t, r) {
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
            tt(
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
                        et(
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
                    return et({}, $e(e.color, t.oldHue));
                  },
                },
              ],
            ),
            r
          );
        })(n.PureComponent || n.Component);
        return (
          (t.propTypes = et({}, e.propTypes)),
          (t.defaultProps = et({}, e.defaultProps, {
            color: { h: 250, s: 0.5, l: 0.2, a: 1 },
          })),
          t
        );
      };
      var nt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        at = (function () {
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
      function ot(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var it =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        };
      const lt = (function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "span";
        return (function (r) {
          function a() {
            var e, t, r;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
              o[i] = arguments[i];
            return (
              (t = r =
                ot(
                  this,
                  (e = a.__proto__ || Object.getPrototypeOf(a)).call.apply(
                    e,
                    [this].concat(o),
                  ),
                )),
              (r.state = { focus: !1 }),
              (r.handleFocus = function () {
                return r.setState({ focus: !0 });
              }),
              (r.handleBlur = function () {
                return r.setState({ focus: !1 });
              }),
              ot(r, t)
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
            })(a, r),
            at(a, [
              {
                key: "render",
                value: function () {
                  return n.createElement(
                    t,
                    { onFocus: this.handleFocus, onBlur: this.handleBlur },
                    n.createElement(e, nt({}, this.props, this.state)),
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      })(function (e) {
        var t = e.color,
          r = e.style,
          o = e.onClick,
          i = void 0 === o ? function () {} : o,
          l = e.onHover,
          s = e.title,
          p = void 0 === s ? t : s,
          u = e.children,
          h = e.focus,
          f = e.focusStyle,
          d = void 0 === f ? {} : f,
          b = "transparent" === t,
          g = (0, a.ZP)({
            default: {
              swatch: it(
                {
                  background: t,
                  height: "100%",
                  width: "100%",
                  cursor: "pointer",
                  position: "relative",
                  outline: "none",
                },
                r,
                h ? d : {},
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
            it(
              {
                style: g.swatch,
                onClick: function (e) {
                  return i(t, e);
                },
                title: p,
                tabIndex: 0,
                onKeyDown: function (e) {
                  return 13 === e.keyCode && i(t, e);
                },
              },
              v,
            ),
            u,
            b &&
              n.createElement(c, {
                borderRadius: g.swatch.borderRadius,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
              }),
          )
        );
      });
      const st = function (e) {
        var t = e.direction,
          r = (0, a.ZP)(
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
      var ct =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        pt = function (e) {
          var t = e.rgb,
            r = e.hsl,
            o = e.width,
            i = e.height,
            l = e.onChange,
            s = e.direction,
            c = e.style,
            p = e.renderers,
            u = e.pointer,
            h = e.className,
            d = void 0 === h ? "" : h,
            b = (0, a.ZP)({
              default: {
                picker: { position: "relative", width: o, height: i },
                alpha: { radius: "2px", style: c },
              },
            });
          return n.createElement(
            "div",
            { style: b.picker, className: "alpha-picker " + d },
            n.createElement(
              f,
              ct({}, b.alpha, {
                rgb: t,
                hsl: r,
                pointer: u,
                renderers: p,
                onChange: l,
                direction: s,
              }),
            ),
          );
        };
      pt.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: st,
      };
      rt(pt);
      var ut = r(57350),
        ht = r(63361),
        ft = r(76529);
      const dt = function (e, t) {
        return ((0, B.Z)(e) ? ut.Z : ft.Z)(e, (0, ht.Z)(t, 3));
      };
      const bt = function (e) {
        var t = e.colors,
          r = e.onClick,
          o = e.onSwatchHover,
          i = (0, a.ZP)({
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
          dt(t, function (e) {
            return n.createElement(lt, {
              key: e,
              color: e,
              style: i.swatch,
              onClick: r,
              onHover: o,
              focusStyle: { boxShadow: "0 0 4px " + e },
            });
          }),
          n.createElement("div", { style: i.clear }),
        );
      };
      var gt = function (e) {
        var t = e.onChange,
          r = e.onSwatchHover,
          o = e.hex,
          i = e.colors,
          l = e.width,
          s = e.triangle,
          p = e.styles,
          u = void 0 === p ? {} : p,
          h = e.className,
          f = void 0 === h ? "" : h,
          d = "transparent" === o,
          b = function (e, r) {
            Ke(e) && t({ hex: e, source: "hex" }, r);
          },
          g = (0, a.ZP)(
            $(
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
                    background: o,
                    borderRadius: "6px 6px 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  },
                  body: { padding: "10px" },
                  label: {
                    fontSize: "18px",
                    color: Je(o),
                    position: "relative",
                  },
                  triangle: {
                    width: "0px",
                    height: "0px",
                    borderStyle: "solid",
                    borderWidth: "0 10px 10px 10px",
                    borderColor:
                      "transparent transparent " + o + " transparent",
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
              u,
            ),
            { "hide-triangle": "hide" === s },
          );
        return n.createElement(
          "div",
          { style: g.card, className: "block-picker " + f },
          n.createElement("div", { style: g.triangle }),
          n.createElement(
            "div",
            { style: g.head },
            d && n.createElement(c, { borderRadius: "6px 6px 0 0" }),
            n.createElement("div", { style: g.label }, o),
          ),
          n.createElement(
            "div",
            { style: g.body },
            n.createElement(bt, { colors: i, onClick: b, onSwatchHover: r }),
            n.createElement(v, {
              style: { input: g.input },
              value: o,
              onChange: b,
            }),
          ),
        );
      };
      (gt.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        colors: E().arrayOf(E().string),
        triangle: E().oneOf(["top", "hide"]),
        styles: E().object,
      }),
        (gt.defaultProps = {
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
      rt(gt);
      var vt = {
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
        xt = {
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
        mt = {
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
        yt = {
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
        wt = {
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
        Et = {
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
        Ct = {
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
        kt = {
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
        St = {
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
        _t = {
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
        Ot = {
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
        Mt = {
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
        Rt = {
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
        jt = {
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
        Ft = {
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
        At = {
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
        Bt = {
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
        Pt = {
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
      var Tt = function (e) {
        var t = e.color,
          r = e.onClick,
          o = e.onSwatchHover,
          i = e.hover,
          l = e.active,
          s = e.circleSize,
          c = e.circleSpacing,
          p = (0, a.ZP)(
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
          { style: p.swatch },
          n.createElement(lt, {
            style: p.Swatch,
            color: t,
            onClick: r,
            onHover: o,
            focusStyle: { boxShadow: p.Swatch.boxShadow + ", 0 0 5px " + t },
          }),
        );
      };
      Tt.defaultProps = { circleSize: 28, circleSpacing: 14 };
      const Ht = (0, a.tz)(Tt);
      var Lt = function (e) {
        var t = e.width,
          r = e.onChange,
          o = e.onSwatchHover,
          i = e.colors,
          l = e.hex,
          s = e.circleSize,
          c = e.styles,
          p = void 0 === c ? {} : c,
          u = e.circleSpacing,
          h = e.className,
          f = void 0 === h ? "" : h,
          d = (0, a.ZP)(
            $(
              {
                default: {
                  card: {
                    width: t,
                    display: "flex",
                    flexWrap: "wrap",
                    marginRight: -u,
                    marginBottom: -u,
                  },
                },
              },
              p,
            ),
          ),
          b = function (e, t) {
            return r({ hex: e, source: "hex" }, t);
          };
        return n.createElement(
          "div",
          { style: d.card, className: "circle-picker " + f },
          dt(i, function (e) {
            return n.createElement(Ht, {
              key: e,
              color: e,
              onClick: b,
              onSwatchHover: o,
              active: l === e.toLowerCase(),
              circleSize: s,
              circleSpacing: u,
            });
          }),
        );
      };
      (Lt.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        circleSize: E().number,
        circleSpacing: E().number,
        styles: E().object,
      }),
        (Lt.defaultProps = {
          width: 252,
          circleSize: 28,
          circleSpacing: 14,
          colors: [
            vt[500],
            xt[500],
            mt[500],
            yt[500],
            wt[500],
            Et[500],
            Ct[500],
            kt[500],
            St[500],
            _t[500],
            Ot[500],
            Mt[500],
            Rt[500],
            jt[500],
            Ft[500],
            At[500],
            Bt[500],
            Pt[500],
          ],
          styles: {},
        });
      rt(Lt);
      const Dt = function (e) {
        return void 0 === e;
      };
      var Zt = r(17523),
        zt = (function () {
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
      var Nt = (function (e) {
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
                ? Ke(e.hex) &&
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
                          s: Number(Dt(e.s) ? r.props.hsl.s : e.s),
                          l: Number(Dt(e.l) ? r.props.hsl.l : e.l),
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
          zt(
            t,
            [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = (0, a.ZP)(
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
                          n.createElement(Zt.Z, {
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
      Nt.defaultProps = { view: "hex" };
      const Gt = Nt;
      const Ut = function () {
        var e = (0, a.ZP)({
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
      const Wt = function () {
        var e = (0, a.ZP)({
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
      var Xt = function (e) {
        var t = e.width,
          r = e.onChange,
          o = e.disableAlpha,
          i = e.rgb,
          l = e.hsl,
          s = e.hsv,
          p = e.hex,
          u = e.renderers,
          h = e.styles,
          d = void 0 === h ? {} : h,
          b = e.className,
          g = void 0 === b ? "" : b,
          v = e.defaultView,
          x = (0, a.ZP)(
            $(
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
            { disableAlpha: o },
          );
        return n.createElement(
          "div",
          { style: x.picker, className: "chrome-picker " + g },
          n.createElement(
            "div",
            { style: x.saturation },
            n.createElement(se, {
              style: x.Saturation,
              hsl: l,
              hsv: s,
              pointer: Wt,
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
                  n.createElement(c, { renderers: u }),
                ),
              ),
              n.createElement(
                "div",
                { style: x.toggles },
                n.createElement(
                  "div",
                  { style: x.hue },
                  n.createElement(y, {
                    style: x.Hue,
                    hsl: l,
                    pointer: Ut,
                    onChange: r,
                  }),
                ),
                n.createElement(
                  "div",
                  { style: x.alpha },
                  n.createElement(f, {
                    style: x.Alpha,
                    rgb: i,
                    hsl: l,
                    pointer: Ut,
                    renderers: u,
                    onChange: r,
                  }),
                ),
              ),
            ),
            n.createElement(Gt, {
              rgb: i,
              hsl: l,
              hex: p,
              view: v,
              onChange: r,
              disableAlpha: o,
            }),
          ),
        );
      };
      (Xt.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        disableAlpha: E().bool,
        styles: E().object,
        defaultView: E().oneOf(["hex", "rgb", "hsl"]),
      }),
        (Xt.defaultProps = { width: 225, disableAlpha: !1, styles: {} });
      const It = rt(Xt);
      const Vt = function (e) {
        var t = e.color,
          r = e.onClick,
          o = void 0 === r ? function () {} : r,
          i = e.onSwatchHover,
          l = e.active,
          s = (0, a.ZP)(
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
                  background: Je(t),
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
          lt,
          {
            style: s.color,
            color: t,
            onClick: o,
            onHover: i,
            focusStyle: { boxShadow: "0 0 4px " + t },
          },
          n.createElement("div", { style: s.dot }),
        );
      };
      const Yt = function (e) {
        var t = e.hex,
          r = e.rgb,
          o = e.onChange,
          i = (0, a.ZP)({
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
              ? o(
                  {
                    r: e.r || r.r,
                    g: e.g || r.g,
                    b: e.b || r.b,
                    source: "rgb",
                  },
                  t,
                )
              : o({ hex: e.hex, source: "hex" }, t);
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
      var qt = function (e) {
        var t = e.onChange,
          r = e.onSwatchHover,
          o = e.colors,
          i = e.hex,
          l = e.rgb,
          s = e.styles,
          c = void 0 === s ? {} : s,
          p = e.className,
          u = void 0 === p ? "" : p,
          h = (0, a.ZP)(
            $(
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
          f = function (e, r) {
            e.hex ? Ke(e.hex) && t({ hex: e.hex, source: "hex" }, r) : t(e, r);
          };
        return n.createElement(
          J,
          { style: h.Compact, styles: c },
          n.createElement(
            "div",
            { style: h.compact, className: "compact-picker " + u },
            n.createElement(
              "div",
              null,
              dt(o, function (e) {
                return n.createElement(Vt, {
                  key: e,
                  color: e,
                  active: e.toLowerCase() === i,
                  onClick: f,
                  onSwatchHover: r,
                });
              }),
              n.createElement("div", { style: h.clear }),
            ),
            n.createElement(Yt, { hex: i, rgb: l, onChange: f }),
          ),
        );
      };
      (qt.propTypes = { colors: E().arrayOf(E().string), styles: E().object }),
        (qt.defaultProps = {
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
      rt(qt);
      const $t = (0, a.tz)(function (e) {
        var t = e.hover,
          r = e.color,
          o = e.onClick,
          i = e.onSwatchHover,
          l = {
            position: "relative",
            zIndex: "2",
            outline: "2px solid #fff",
            boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)",
          },
          s = (0, a.ZP)(
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
          n.createElement(lt, {
            color: r,
            onClick: o,
            onHover: i,
            focusStyle: l,
          }),
        );
      });
      var Kt = function (e) {
        var t = e.width,
          r = e.colors,
          o = e.onChange,
          i = e.onSwatchHover,
          l = e.triangle,
          s = e.styles,
          c = void 0 === s ? {} : s,
          p = e.className,
          u = void 0 === p ? "" : p,
          h = (0, a.ZP)(
            $(
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
          f = function (e, t) {
            return o({ hex: e, source: "hex" }, t);
          };
        return n.createElement(
          "div",
          { style: h.card, className: "github-picker " + u },
          n.createElement("div", { style: h.triangleShadow }),
          n.createElement("div", { style: h.triangle }),
          dt(r, function (e) {
            return n.createElement($t, {
              color: e,
              key: e,
              onClick: f,
              onSwatchHover: i,
            });
          }),
        );
      };
      (Kt.propTypes = {
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
        (Kt.defaultProps = {
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
      rt(Kt);
      const Jt = function (e) {
        var t = e.direction,
          r = (0, a.ZP)(
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
      var Qt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        er = function (e) {
          var t = e.width,
            r = e.height,
            o = e.onChange,
            i = e.hsl,
            l = e.direction,
            s = e.pointer,
            c = e.styles,
            p = void 0 === c ? {} : c,
            u = e.className,
            h = void 0 === u ? "" : u,
            f = (0, a.ZP)(
              $(
                {
                  default: {
                    picker: { position: "relative", width: t, height: r },
                    hue: { radius: "2px" },
                  },
                },
                p,
              ),
            );
          return n.createElement(
            "div",
            { style: f.picker, className: "hue-picker " + h },
            n.createElement(
              y,
              Qt({}, f.hue, {
                hsl: i,
                pointer: s,
                onChange: function (e) {
                  return o({ a: 1, h: e.h, l: 0.5, s: 1 });
                },
                direction: l,
              }),
            ),
          );
        };
      (er.propTypes = { styles: E().object }),
        (er.defaultProps = {
          width: "316px",
          height: "16px",
          direction: "horizontal",
          pointer: Jt,
          styles: {},
        });
      rt(er);
      rt(function (e) {
        var t = e.onChange,
          r = e.hex,
          o = e.rgb,
          i = e.styles,
          l = void 0 === i ? {} : i,
          s = e.className,
          c = void 0 === s ? "" : s,
          p = (0, a.ZP)(
            $(
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
          u = function (e, r) {
            e.hex
              ? Ke(e.hex) && t({ hex: e.hex, source: "hex" }, r)
              : (e.r || e.g || e.b) &&
                t(
                  {
                    r: e.r || o.r,
                    g: e.g || o.g,
                    b: e.b || o.b,
                    source: "rgb",
                  },
                  r,
                );
          };
        return n.createElement(
          J,
          { styles: l },
          n.createElement(
            "div",
            { style: p.material, className: "material-picker " + c },
            n.createElement(v, {
              style: { wrap: p.HEXwrap, input: p.HEXinput, label: p.HEXlabel },
              label: "hex",
              value: r,
              onChange: u,
            }),
            n.createElement(
              "div",
              { style: p.split, className: "flexbox-fix" },
              n.createElement(
                "div",
                { style: p.third },
                n.createElement(v, {
                  style: {
                    wrap: p.RGBwrap,
                    input: p.RGBinput,
                    label: p.RGBlabel,
                  },
                  label: "r",
                  value: o.r,
                  onChange: u,
                }),
              ),
              n.createElement(
                "div",
                { style: p.third },
                n.createElement(v, {
                  style: {
                    wrap: p.RGBwrap,
                    input: p.RGBinput,
                    label: p.RGBlabel,
                  },
                  label: "g",
                  value: o.g,
                  onChange: u,
                }),
              ),
              n.createElement(
                "div",
                { style: p.third },
                n.createElement(v, {
                  style: {
                    wrap: p.RGBwrap,
                    input: p.RGBinput,
                    label: p.RGBlabel,
                  },
                  label: "b",
                  value: o.b,
                  onChange: u,
                }),
              ),
            ),
          ),
        );
      });
      const tr = function (e) {
        var t = e.onChange,
          r = e.rgb,
          o = e.hsv,
          i = e.hex,
          l = (0, a.ZP)({
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
              ? Ke(e["#"]) && t({ hex: e["#"], source: "hex" }, n)
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
                      h: e.h || o.h,
                      s: e.s || o.s,
                      v: e.v || o.v,
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
            value: Math.round(o.h),
            onChange: s,
          }),
          n.createElement(v, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "s",
            value: Math.round(100 * o.s),
            onChange: s,
          }),
          n.createElement(v, {
            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
            label: "v",
            value: Math.round(100 * o.v),
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
      const rr = function (e) {
        var t = e.hsl,
          r = (0, a.ZP)(
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
      const nr = function () {
        var e = (0, a.ZP)({
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
      const ar = function (e) {
        var t = e.onClick,
          r = e.label,
          o = e.children,
          i = e.active,
          l = (0, a.ZP)(
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
        return n.createElement("div", { style: l.button, onClick: t }, r || o);
      };
      const or = function (e) {
        var t = e.rgb,
          r = e.currentColor,
          o = (0, a.ZP)({
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
          n.createElement("div", { style: o.label }, "new"),
          n.createElement(
            "div",
            { style: o.swatches },
            n.createElement("div", { style: o.new }),
            n.createElement("div", { style: o.current }),
          ),
          n.createElement("div", { style: o.label }, "current"),
        );
      };
      var ir = (function () {
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
      var lr = (function (e) {
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
          ir(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.styles,
                  r = void 0 === t ? {} : t,
                  o = e.className,
                  i = void 0 === o ? "" : o,
                  l = (0, a.ZP)(
                    $(
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
                      n.createElement(se, {
                        hsl: this.props.hsl,
                        hsv: this.props.hsv,
                        pointer: rr,
                        onChange: this.props.onChange,
                      }),
                    ),
                    n.createElement(
                      "div",
                      { style: l.hue },
                      n.createElement(y, {
                        direction: "vertical",
                        hsl: this.props.hsl,
                        pointer: nr,
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
                          n.createElement(or, {
                            rgb: this.props.rgb,
                            currentColor: this.state.currentColor,
                          }),
                        ),
                        n.createElement(
                          "div",
                          { style: l.actions },
                          n.createElement(ar, {
                            label: "OK",
                            onClick: this.props.onAccept,
                            active: !0,
                          }),
                          n.createElement(ar, {
                            label: "Cancel",
                            onClick: this.props.onCancel,
                          }),
                          n.createElement(tr, {
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
      (lr.propTypes = { header: E().string, styles: E().object }),
        (lr.defaultProps = { header: "Color Picker", styles: {} });
      rt(lr);
      const sr = function (e) {
        var t = e.onChange,
          r = e.rgb,
          o = e.hsl,
          i = e.hex,
          l = e.disableAlpha,
          s = (0, a.ZP)(
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
              ? Ke(e.hex) && t({ hex: e.hex, source: "hex" }, n)
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
                  t({ h: o.h, s: o.s, l: o.l, a: e.a, source: "rgb" }, n));
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
      var cr =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        pr = function (e) {
          var t = e.colors,
            r = e.onClick,
            o = void 0 === r ? function () {} : r,
            i = e.onSwatchHover,
            l = (0, a.ZP)(
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
              o({ hex: e, source: "hex" }, t);
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
                  lt,
                  cr({}, t, {
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
      pr.propTypes = {
        colors: E().arrayOf(
          E().oneOfType([
            E().string,
            E().shape({ color: E().string, title: E().string }),
          ]),
        ).isRequired,
      };
      const ur = pr;
      var hr =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        fr = function (e) {
          var t = e.width,
            r = e.rgb,
            o = e.hex,
            i = e.hsv,
            l = e.hsl,
            s = e.onChange,
            p = e.onSwatchHover,
            u = e.disableAlpha,
            h = e.presetColors,
            d = e.renderers,
            b = e.styles,
            g = void 0 === b ? {} : b,
            v = e.className,
            x = void 0 === v ? "" : v,
            m = (0, a.ZP)(
              $(
                {
                  default: hr(
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
              { disableAlpha: u },
            );
          return n.createElement(
            "div",
            { style: m.picker, className: "sketch-picker " + x },
            n.createElement(
              "div",
              { style: m.saturation },
              n.createElement(se, {
                style: m.Saturation,
                hsl: l,
                hsv: i,
                onChange: s,
              }),
            ),
            n.createElement(
              "div",
              { style: m.controls, className: "flexbox-fix" },
              n.createElement(
                "div",
                { style: m.sliders },
                n.createElement(
                  "div",
                  { style: m.hue },
                  n.createElement(y, { style: m.Hue, hsl: l, onChange: s }),
                ),
                n.createElement(
                  "div",
                  { style: m.alpha },
                  n.createElement(f, {
                    style: m.Alpha,
                    rgb: r,
                    hsl: l,
                    renderers: d,
                    onChange: s,
                  }),
                ),
              ),
              n.createElement(
                "div",
                { style: m.color },
                n.createElement(c, null),
                n.createElement("div", { style: m.activeColor }),
              ),
            ),
            n.createElement(sr, {
              rgb: r,
              hsl: l,
              hex: o,
              onChange: s,
              disableAlpha: u,
            }),
            n.createElement(ur, { colors: h, onClick: s, onSwatchHover: p }),
          );
        };
      (fr.propTypes = {
        disableAlpha: E().bool,
        width: E().oneOfType([E().string, E().number]),
        styles: E().object,
      }),
        (fr.defaultProps = {
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
      rt(fr);
      const dr = function (e) {
        var t = e.hsl,
          r = e.offset,
          o = e.onClick,
          i = void 0 === o ? function () {} : o,
          l = e.active,
          s = e.first,
          c = e.last,
          p = (0, a.ZP)(
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
          style: p.swatch,
          onClick: function (e) {
            return i({ h: t.h, s: 0.5, l: r, source: "hsl" }, e);
          },
        });
      };
      const br = function (e) {
        var t = e.onClick,
          r = e.hsl,
          o = (0, a.ZP)({
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
          { style: o.swatches },
          n.createElement(
            "div",
            { style: o.swatch },
            n.createElement(dr, {
              hsl: r,
              offset: ".80",
              active: Math.abs(r.l - 0.8) < i && Math.abs(r.s - 0.5) < i,
              onClick: t,
              first: !0,
            }),
          ),
          n.createElement(
            "div",
            { style: o.swatch },
            n.createElement(dr, {
              hsl: r,
              offset: ".65",
              active: Math.abs(r.l - 0.65) < i && Math.abs(r.s - 0.5) < i,
              onClick: t,
            }),
          ),
          n.createElement(
            "div",
            { style: o.swatch },
            n.createElement(dr, {
              hsl: r,
              offset: ".50",
              active: Math.abs(r.l - 0.5) < i && Math.abs(r.s - 0.5) < i,
              onClick: t,
            }),
          ),
          n.createElement(
            "div",
            { style: o.swatch },
            n.createElement(dr, {
              hsl: r,
              offset: ".35",
              active: Math.abs(r.l - 0.35) < i && Math.abs(r.s - 0.5) < i,
              onClick: t,
            }),
          ),
          n.createElement(
            "div",
            { style: o.swatch },
            n.createElement(dr, {
              hsl: r,
              offset: ".20",
              active: Math.abs(r.l - 0.2) < i && Math.abs(r.s - 0.5) < i,
              onClick: t,
              last: !0,
            }),
          ),
          n.createElement("div", { style: o.clear }),
        );
      };
      const gr = function () {
        var e = (0, a.ZP)({
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
      var vr = function (e) {
        var t = e.hsl,
          r = e.onChange,
          o = e.pointer,
          i = e.styles,
          l = void 0 === i ? {} : i,
          s = e.className,
          c = void 0 === s ? "" : s,
          p = (0, a.ZP)(
            $(
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
          { style: p.wrap || {}, className: "slider-picker " + c },
          n.createElement(
            "div",
            { style: p.hue },
            n.createElement(y, {
              style: p.Hue,
              hsl: t,
              pointer: o,
              onChange: r,
            }),
          ),
          n.createElement(
            "div",
            { style: p.swatches },
            n.createElement(br, { hsl: t, onClick: r }),
          ),
        );
      };
      (vr.propTypes = { styles: E().object }),
        (vr.defaultProps = { pointer: gr, styles: {} });
      rt(vr);
      var xr = r(61615);
      const mr = function (e) {
        var t = e.color,
          r = e.onClick,
          o = void 0 === r ? function () {} : r,
          i = e.onSwatchHover,
          l = e.first,
          s = e.last,
          c = e.active,
          p = (0, a.ZP)(
            {
              default: {
                color: {
                  width: "40px",
                  height: "24px",
                  cursor: "pointer",
                  background: t,
                  marginBottom: "1px",
                },
                check: { color: Je(t), marginLeft: "8px", display: "none" },
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
          lt,
          {
            color: t,
            style: p.color,
            onClick: o,
            onHover: i,
            focusStyle: { boxShadow: "0 0 4px " + t },
          },
          n.createElement(
            "div",
            { style: p.check },
            n.createElement(xr.Z, null),
          ),
        );
      };
      const yr = function (e) {
        var t = e.onClick,
          r = e.onSwatchHover,
          o = e.group,
          i = e.active,
          l = (0, a.ZP)({
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
          dt(o, function (e, a) {
            return n.createElement(mr, {
              key: e,
              color: e,
              active: e.toLowerCase() === i,
              first: 0 === a,
              last: a === o.length - 1,
              onClick: t,
              onSwatchHover: r,
            });
          }),
        );
      };
      var wr = function (e) {
        var t = e.width,
          r = e.height,
          o = e.onChange,
          i = e.onSwatchHover,
          l = e.colors,
          s = e.hex,
          c = e.styles,
          p = void 0 === c ? {} : c,
          u = e.className,
          h = void 0 === u ? "" : u,
          f = (0, a.ZP)(
            $(
              {
                default: {
                  picker: { width: t, height: r },
                  overflow: { height: r, overflowY: "scroll" },
                  body: { padding: "16px 0 6px 16px" },
                  clear: { clear: "both" },
                },
              },
              p,
            ),
          ),
          d = function (e, t) {
            return o({ hex: e, source: "hex" }, t);
          };
        return n.createElement(
          "div",
          { style: f.picker, className: "swatches-picker " + h },
          n.createElement(
            J,
            null,
            n.createElement(
              "div",
              { style: f.overflow },
              n.createElement(
                "div",
                { style: f.body },
                dt(l, function (e) {
                  return n.createElement(yr, {
                    key: e.toString(),
                    group: e,
                    active: s,
                    onClick: d,
                    onSwatchHover: i,
                  });
                }),
                n.createElement("div", { style: f.clear }),
              ),
            ),
          ),
        );
      };
      (wr.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        height: E().oneOfType([E().string, E().number]),
        colors: E().arrayOf(E().arrayOf(E().string)),
        styles: E().object,
      }),
        (wr.defaultProps = {
          width: 320,
          height: 240,
          colors: [
            [vt[900], vt[700], vt[500], vt[300], vt[100]],
            [xt[900], xt[700], xt[500], xt[300], xt[100]],
            [mt[900], mt[700], mt[500], mt[300], mt[100]],
            [yt[900], yt[700], yt[500], yt[300], yt[100]],
            [wt[900], wt[700], wt[500], wt[300], wt[100]],
            [Et[900], Et[700], Et[500], Et[300], Et[100]],
            [Ct[900], Ct[700], Ct[500], Ct[300], Ct[100]],
            [kt[900], kt[700], kt[500], kt[300], kt[100]],
            [St[900], St[700], St[500], St[300], St[100]],
            ["#194D33", _t[700], _t[500], _t[300], _t[100]],
            [Ot[900], Ot[700], Ot[500], Ot[300], Ot[100]],
            [Mt[900], Mt[700], Mt[500], Mt[300], Mt[100]],
            [Rt[900], Rt[700], Rt[500], Rt[300], Rt[100]],
            [jt[900], jt[700], jt[500], jt[300], jt[100]],
            [Ft[900], Ft[700], Ft[500], Ft[300], Ft[100]],
            [At[900], At[700], At[500], At[300], At[100]],
            [Bt[900], Bt[700], Bt[500], Bt[300], Bt[100]],
            [Pt[900], Pt[700], Pt[500], Pt[300], Pt[100]],
            ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"],
          ],
          styles: {},
        });
      rt(wr);
      var Er = function (e) {
        var t = e.onChange,
          r = e.onSwatchHover,
          o = e.hex,
          i = e.colors,
          l = e.width,
          s = e.triangle,
          c = e.styles,
          p = void 0 === c ? {} : c,
          u = e.className,
          h = void 0 === u ? "" : u,
          f = (0, a.ZP)(
            $(
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
              p,
            ),
            {
              "hide-triangle": "hide" === s,
              "top-left-triangle": "top-left" === s,
              "top-right-triangle": "top-right" === s,
            },
          ),
          d = function (e, r) {
            Ke(e) && t({ hex: e, source: "hex" }, r);
          };
        return n.createElement(
          "div",
          { style: f.card, className: "twitter-picker " + h },
          n.createElement("div", { style: f.triangleShadow }),
          n.createElement("div", { style: f.triangle }),
          n.createElement(
            "div",
            { style: f.body },
            dt(i, function (e, t) {
              return n.createElement(lt, {
                key: t,
                color: e,
                hex: e,
                style: f.swatch,
                onClick: d,
                onHover: r,
                focusStyle: { boxShadow: "0 0 4px " + e },
              });
            }),
            n.createElement("div", { style: f.hash }, "#"),
            n.createElement(v, {
              label: null,
              style: { input: f.input },
              value: o.replace("#", ""),
              onChange: d,
            }),
            n.createElement("div", { style: f.clear }),
          ),
        );
      };
      (Er.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        triangle: E().oneOf(["hide", "top-left", "top-right"]),
        colors: E().arrayOf(E().string),
        styles: E().object,
      }),
        (Er.defaultProps = {
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
      rt(Er);
      var Cr = function (e) {
        var t = (0, a.ZP)({
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
      (Cr.propTypes = {
        hsl: E().shape({
          h: E().number,
          s: E().number,
          l: E().number,
          a: E().number,
        }),
      }),
        (Cr.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
      const kr = Cr;
      var Sr = function (e) {
        var t = (0, a.ZP)({
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
      (Sr.propTypes = {
        hsl: E().shape({
          h: E().number,
          s: E().number,
          l: E().number,
          a: E().number,
        }),
      }),
        (Sr.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
      const _r = Sr;
      const Or = function (e) {
        var t = e.onChange,
          r = e.rgb,
          o = e.hsl,
          i = e.hex,
          l = e.hsv,
          s = function (e, r) {
            if (e.hex) Ke(e.hex) && t({ hex: e.hex, source: "hex" }, r);
            else if (e.rgb) {
              var n = e.rgb.split(",");
              Qe(e.rgb, "rgb") &&
                t({ r: n[0], g: n[1], b: n[2], a: 1, source: "rgb" }, r);
            } else if (e.hsv) {
              var a = e.hsv.split(",");
              Qe(e.hsv, "hsv") &&
                ((a[2] = a[2].replace("%", "")),
                (a[1] = a[1].replace("%", "")),
                (a[0] = a[0].replace("°", "")),
                1 == a[1] ? (a[1] = 0.01) : 1 == a[2] && (a[2] = 0.01),
                t(
                  {
                    h: Number(a[0]),
                    s: Number(a[1]),
                    v: Number(a[2]),
                    source: "hsv",
                  },
                  r,
                ));
            } else if (e.hsl) {
              var o = e.hsl.split(",");
              Qe(e.hsl, "hsl") &&
                ((o[2] = o[2].replace("%", "")),
                (o[1] = o[1].replace("%", "")),
                (o[0] = o[0].replace("°", "")),
                1 == h[1] ? (h[1] = 0.01) : 1 == h[2] && (h[2] = 0.01),
                t(
                  {
                    h: Number(o[0]),
                    s: Number(o[1]),
                    v: Number(o[2]),
                    source: "hsl",
                  },
                  r,
                ));
            }
          },
          c = (0, a.ZP)({
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
          p = r.r + ", " + r.g + ", " + r.b,
          u =
            Math.round(o.h) +
            "°, " +
            Math.round(100 * o.s) +
            "%, " +
            Math.round(100 * o.l) +
            "%",
          h =
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
                  value: p,
                  onChange: s,
                }),
              ),
              n.createElement(
                "div",
                { style: c.single },
                n.createElement(v, {
                  style: { input: c.input2, label: c.label2 },
                  label: "hsv",
                  value: h,
                  onChange: s,
                }),
              ),
              n.createElement(
                "div",
                { style: c.single },
                n.createElement(v, {
                  style: { input: c.input2, label: c.label2 },
                  label: "hsl",
                  value: u,
                  onChange: s,
                }),
              ),
            ),
          ),
        );
      };
      var Mr = function (e) {
        var t = e.width,
          r = e.onChange,
          o = e.rgb,
          i = e.hsl,
          l = e.hsv,
          s = e.hex,
          c = e.header,
          p = e.styles,
          u = void 0 === p ? {} : p,
          h = e.className,
          f = void 0 === h ? "" : h,
          d = (0, a.ZP)(
            $(
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
                      "rgba(" + o.r + ", " + o.g + ", " + o.b + ", 1)",
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
              u,
            ),
          );
        return n.createElement(
          "div",
          { style: d.picker, className: "google-picker " + f },
          n.createElement("div", { style: d.head }, c),
          n.createElement("div", { style: d.swatch }),
          n.createElement(
            "div",
            { style: d.saturation },
            n.createElement(se, { hsl: i, hsv: l, pointer: kr, onChange: r }),
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
                n.createElement(y, {
                  style: d.Hue,
                  hsl: i,
                  radius: "4px",
                  pointer: _r,
                  onChange: r,
                }),
              ),
            ),
            n.createElement(Or, {
              rgb: o,
              hsl: i,
              hex: s,
              hsv: l,
              onChange: r,
            }),
          ),
        );
      };
      (Mr.propTypes = {
        width: E().oneOfType([E().string, E().number]),
        styles: E().object,
        header: E().string,
      }),
        (Mr.defaultProps = { width: 652, styles: {}, header: "Color picker" });
      rt(Mr);
    },
    29073: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.autoprefix = void 0);
      var n,
        a = r(21421),
        o = (n = a) && n.__esModule ? n : { default: n },
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
            (0, o.default)(e, function (e, r) {
              var n = {};
              (0, o.default)(e, function (e, t) {
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
    65337: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.active = void 0);
      var n,
        a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = r(47427),
        i = (n = o) && n.__esModule ? n : { default: n };
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
            var r, o, s;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n);
            for (var c = arguments.length, p = Array(c), u = 0; u < c; u++)
              p[u] = arguments[u];
            return (
              (o = s =
                l(
                  this,
                  (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                    r,
                    [this].concat(p),
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
                  i.default.createElement(e, a({}, s.props, s.state)),
                );
              }),
              l(s, o)
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
    85374: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.hover = void 0);
      var n,
        a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = r(47427),
        i = (n = o) && n.__esModule ? n : { default: n };
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
            var r, o, s;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n);
            for (var c = arguments.length, p = Array(c), u = 0; u < c; u++)
              p[u] = arguments[u];
            return (
              (o = s =
                l(
                  this,
                  (r = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                    r,
                    [this].concat(p),
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
                  i.default.createElement(e, a({}, s.props, s.state)),
                );
              }),
              l(s, o)
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
    77931: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.flattenNames = void 0);
      var n = l(r(30392)),
        a = l(r(21421)),
        o = l(r(38655)),
        i = l(r(81319));
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
              : (0, o.default)(t)
                ? (0, a.default)(t, function (e, t) {
                    !0 === e && r.push(t), r.push(t + "-" + e);
                  })
                : (0, n.default)(t) && r.push(t);
          }),
          r
        );
      });
      t.default = s;
    },
    41321: (e, t, r) => {
      "use strict";
      t.tz = void 0;
      var n = c(r(77931)),
        a = c(r(23090)),
        o = c(r(29073)),
        i = c(r(85374)),
        l = c(r(65337)),
        s = c(r(19369));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i.default, (t.tz = i.default), l.default, s.default;
      var p = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        var l = (0, n.default)(r),
          s = (0, a.default)(e, l);
        return (0, o.default)(s);
      };
      t.ZP = p;
    },
    19369: (e, t) => {
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
    23090: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mergeClasses = void 0);
      var n = i(r(21421)),
        a = i(r(64419)),
        o =
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
          r = (e.default && (0, a.default)(e.default)) || {};
        return (
          t.map(function (t) {
            var a = e[t];
            return (
              a &&
                (0, n.default)(a, function (e, t) {
                  r[t] || (r[t] = {}), (r[t] = o({}, r[t], a[t]));
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

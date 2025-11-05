/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6334],
  {
    17083: (e, t, n) => {
      n.d(t, { N_: () => m, k2: () => v });
      var s = n(92757),
        r = n(42891),
        a = n(90626),
        i = n(29248),
        o = n(58584),
        u = n(81115),
        c = n(68841);
      a.Component;
      a.Component;
      var l = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" == typeof e ? (0, i.yJ)(e, null, null, t) : e;
        },
        h = function (e) {
          return e;
        },
        p = a.forwardRef;
      void 0 === p && (p = h);
      var f = p(function (e, t) {
        var n = e.innerRef,
          s = e.navigate,
          r = e.onClick,
          i = (0, u.A)(e, ["innerRef", "navigate", "onClick"]),
          c = i.target,
          l = (0, o.A)({}, i, {
            onClick: function (e) {
              try {
                r && r(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (c && "_self" !== c) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), s());
            },
          });
        return (l.ref = (h !== p && t) || n), a.createElement("a", l);
      });
      var m = p(function (e, t) {
          var n = e.component,
            r = void 0 === n ? f : n,
            m = e.replace,
            g = e.to,
            y = e.innerRef,
            v = (0, u.A)(e, ["component", "replace", "to", "innerRef"]);
          return a.createElement(s.XZ.Consumer, null, function (e) {
            e || (0, c.A)(!1);
            var n = e.history,
              s = d(l(g, e.location), e.location),
              u = s ? n.createHref(s) : "",
              f = (0, o.A)({}, v, {
                href: u,
                navigate: function () {
                  var t = l(g, e.location),
                    s = (0, i.AO)(e.location) === (0, i.AO)(d(t));
                  (m || s ? n.replace : n.push)(t);
                },
              });
            return (
              h !== p ? (f.ref = t || y) : (f.innerRef = y),
              a.createElement(r, f)
            );
          });
        }),
        g = function (e) {
          return e;
        },
        y = a.forwardRef;
      void 0 === y && (y = g);
      var v = y(function (e, t) {
        var n = e["aria-current"],
          r = void 0 === n ? "page" : n,
          i = e.activeClassName,
          h = void 0 === i ? "active" : i,
          p = e.activeStyle,
          f = e.className,
          v = e.exact,
          b = e.isActive,
          w = e.location,
          _ = e.sensitive,
          k = e.strict,
          P = e.style,
          M = e.to,
          A = e.innerRef,
          x = (0, u.A)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return a.createElement(s.XZ.Consumer, null, function (e) {
          e || (0, c.A)(!1);
          var n = w || e.location,
            i = d(l(M, n), n),
            u = i.pathname,
            I = u && u.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            S = I
              ? (0, s.B6)(n.pathname, {
                  path: I,
                  exact: v,
                  sensitive: _,
                  strict: k,
                })
              : null,
            C = !!(b ? b(S, n) : S),
            O = "function" == typeof f ? f(C) : f,
            R = "function" == typeof P ? P(C) : P;
          C &&
            ((O = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(O, h)),
            (R = (0, o.A)({}, R, p)));
          var V = (0, o.A)(
            { "aria-current": (C && r) || null, className: O, style: R, to: i },
            x,
          );
          return (
            g !== y ? (V.ref = t || A) : (V.innerRef = A), a.createElement(m, V)
          );
        });
      });
    },
    65414: (e, t, n) => {
      n.d(t, { CS: () => Nn, zh: () => wn });
      var s = b(),
        r = (e) => m(e, s),
        a = b();
      r.write = (e) => m(e, a);
      var i = b();
      r.onStart = (e) => m(e, i);
      var o = b();
      r.onFrame = (e) => m(e, o);
      var u = b();
      r.onFinish = (e) => m(e, u);
      var c = [];
      r.setTimeout = (e, t) => {
        const n = r.now() + t,
          s = () => {
            const e = c.findIndex((e) => e.cancel == s);
            ~e && c.splice(e, 1), (p -= ~e ? 1 : 0);
          },
          a = { time: n, handler: e, cancel: s };
        return c.splice(l(n), 0, a), (p += 1), g(), a;
      };
      var l = (e) => ~(~c.findIndex((t) => t.time > e) || ~c.length);
      (r.cancel = (e) => {
        i.delete(e), o.delete(e), u.delete(e), s.delete(e), a.delete(e);
      }),
        (r.sync = (e) => {
          (f = !0), r.batchedUpdates(e), (f = !1);
        }),
        (r.throttle = (e) => {
          let t;
          function n() {
            try {
              e(...t);
            } finally {
              t = null;
            }
          }
          function s(...e) {
            (t = e), r.onStart(n);
          }
          return (
            (s.handler = e),
            (s.cancel = () => {
              i.delete(n), (t = null);
            }),
            s
          );
        });
      var d =
        "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      (r.use = (e) => (d = e)),
        (r.now =
          "undefined" != typeof performance
            ? () => performance.now()
            : Date.now),
        (r.batchedUpdates = (e) => e()),
        (r.catch = console.error),
        (r.frameLoop = "always"),
        (r.advance = () => {
          "demand" !== r.frameLoop
            ? console.warn(
                "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand",
              )
            : v();
        });
      var h = -1,
        p = 0,
        f = !1;
      function m(e, t) {
        f ? (t.delete(e), e(0)) : (t.add(e), g());
      }
      function g() {
        h < 0 && ((h = 0), "demand" !== r.frameLoop && d(y));
      }
      function y() {
        ~h && (d(y), r.batchedUpdates(v));
      }
      function v() {
        const e = h;
        h = r.now();
        const t = l(h);
        t && (w(c.splice(0, t), (e) => e.handler()), (p -= t)),
          p
            ? (i.flush(),
              s.flush(e ? Math.min(64, h - e) : 16.667),
              o.flush(),
              a.flush(),
              u.flush())
            : (h = -1);
      }
      function b() {
        let e = new Set(),
          t = e;
        return {
          add(n) {
            (p += t != e || e.has(n) ? 0 : 1), e.add(n);
          },
          delete: (n) => ((p -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
          flush(n) {
            t.size &&
              ((e = new Set()),
              (p -= t.size),
              w(t, (t) => t(n) && e.add(t)),
              (p += e.size),
              (t = e));
          },
        };
      }
      function w(e, t) {
        e.forEach((e) => {
          try {
            t(e);
          } catch (e) {
            r.catch(e);
          }
        });
      }
      var _ = n(90626),
        k = Object.defineProperty,
        P = {};
      function M() {}
      ((e, t) => {
        for (var n in t) k(e, n, { get: t[n], enumerable: !0 });
      })(P, {
        assign: () => F,
        colors: () => q,
        createStringInterpolator: () => R,
        skipAnimation: () => $,
        to: () => V,
        willAdvance: () => z,
      });
      var A = {
        arr: Array.isArray,
        obj: (e) => !!e && "Object" === e.constructor.name,
        fun: (e) => "function" == typeof e,
        str: (e) => "string" == typeof e,
        num: (e) => "number" == typeof e,
        und: (e) => void 0 === e,
      };
      function x(e, t) {
        if (A.arr(e)) {
          if (!A.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
          return !0;
        }
        return e === t;
      }
      var I = (e, t) => e.forEach(t);
      function S(e, t, n) {
        if (A.arr(e))
          for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s);
      }
      var C = (e) => (A.und(e) ? [] : A.arr(e) ? e : [e]);
      function O(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), I(n, t);
        }
      }
      var R,
        V,
        E = (e, ...t) => O(e, (e) => e(...t)),
        j = () =>
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        q = null,
        $ = !1,
        z = M,
        F = (e) => {
          e.to && (V = e.to),
            e.now && (r.now = e.now),
            void 0 !== e.colors && (q = e.colors),
            null != e.skipAnimation && ($ = e.skipAnimation),
            e.createStringInterpolator && (R = e.createStringInterpolator),
            e.requestAnimationFrame && r.use(e.requestAnimationFrame),
            e.batchedUpdates && (r.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (z = e.willAdvance),
            e.frameLoop && (r.frameLoop = e.frameLoop);
        },
        N = new Set(),
        Q = [],
        T = [],
        U = 0,
        D = {
          get idle() {
            return !N.size && !Q.length;
          },
          start(e) {
            U > e.priority ? (N.add(e), r.onStart(L)) : (B(e), r(W));
          },
          advance: W,
          sort(e) {
            if (U) r.onFrame(() => D.sort(e));
            else {
              const t = Q.indexOf(e);
              ~t && (Q.splice(t, 1), G(e));
            }
          },
          clear() {
            (Q = []), N.clear();
          },
        };
      function L() {
        N.forEach(B), N.clear(), r(W);
      }
      function B(e) {
        Q.includes(e) || G(e);
      }
      function G(e) {
        Q.splice(
          (function (e, t) {
            const n = e.findIndex(t);
            return n < 0 ? e.length : n;
          })(Q, (t) => t.priority > e.priority),
          0,
          e,
        );
      }
      function W(e) {
        const t = T;
        for (let n = 0; n < Q.length; n++) {
          const s = Q[n];
          (U = s.priority), s.idle || (z(s), s.advance(e), s.idle || t.push(s));
        }
        return (U = 0), ((T = Q).length = 0), (Q = t).length > 0;
      }
      var Z = "[-+]?\\d*\\.?\\d+",
        K = Z + "%";
      function X(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      var H = new RegExp("rgb" + X(Z, Z, Z)),
        J = new RegExp("rgba" + X(Z, Z, Z, Z)),
        Y = new RegExp("hsl" + X(Z, K, K)),
        ee = new RegExp("hsla" + X(Z, K, K, Z)),
        te = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ne =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        se = /^#([0-9a-fA-F]{6})$/,
        re = /^#([0-9a-fA-F]{8})$/;
      function ae(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
              ? t
              : n < 2 / 3
                ? e + (t - e) * (2 / 3 - n) * 6
                : e
        );
      }
      function ie(e, t, n) {
        const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
          r = 2 * n - s,
          a = ae(r, s, e + 1 / 3),
          i = ae(r, s, e),
          o = ae(r, s, e - 1 / 3);
        return (
          (Math.round(255 * a) << 24) |
          (Math.round(255 * i) << 16) |
          (Math.round(255 * o) << 8)
        );
      }
      function oe(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function ue(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
      }
      function ce(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
      }
      function le(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
      }
      function de(e) {
        let t = (function (e) {
          let t;
          return "number" == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
              ? e
              : null
            : (t = se.exec(e))
              ? parseInt(t[1] + "ff", 16) >>> 0
              : q && void 0 !== q[e]
                ? q[e]
                : (t = H.exec(e))
                  ? ((oe(t[1]) << 24) |
                      (oe(t[2]) << 16) |
                      (oe(t[3]) << 8) |
                      255) >>>
                    0
                  : (t = J.exec(e))
                    ? ((oe(t[1]) << 24) |
                        (oe(t[2]) << 16) |
                        (oe(t[3]) << 8) |
                        ce(t[4])) >>>
                      0
                    : (t = te.exec(e))
                      ? parseInt(
                          t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff",
                          16,
                        ) >>> 0
                      : (t = re.exec(e))
                        ? parseInt(t[1], 16) >>> 0
                        : (t = ne.exec(e))
                          ? parseInt(
                              t[1] +
                                t[1] +
                                t[2] +
                                t[2] +
                                t[3] +
                                t[3] +
                                t[4] +
                                t[4],
                              16,
                            ) >>> 0
                          : (t = Y.exec(e))
                            ? (255 | ie(ue(t[1]), le(t[2]), le(t[3]))) >>> 0
                            : (t = ee.exec(e))
                              ? (ie(ue(t[1]), le(t[2]), le(t[3])) |
                                  ce(t[4])) >>>
                                0
                              : null;
        })(e);
        if (null === t) return e;
        t = t || 0;
        return `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${(65280 & t) >>> 8}, ${(255 & t) / 255})`;
      }
      var he = (e, t, n) => {
        if (A.fun(e)) return e;
        if (A.arr(e)) return he({ range: e, output: t, extrapolate: n });
        if (A.str(e.output[0])) return R(e);
        const s = e,
          r = s.output,
          a = s.range || [0, 1],
          i = s.extrapolateLeft || s.extrapolate || "extend",
          o = s.extrapolateRight || s.extrapolate || "extend",
          u = s.easing || ((e) => e);
        return (e) => {
          const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
          })(e, a);
          return (function (e, t, n, s, r, a, i, o, u) {
            let c = u ? u(e) : e;
            if (c < t) {
              if ("identity" === i) return c;
              "clamp" === i && (c = t);
            }
            if (c > n) {
              if ("identity" === o) return c;
              "clamp" === o && (c = n);
            }
            if (s === r) return s;
            if (t === n) return e <= t ? s : r;
            t === -1 / 0
              ? (c = -c)
              : n === 1 / 0
                ? (c -= t)
                : (c = (c - t) / (n - t));
            (c = a(c)),
              s === -1 / 0
                ? (c = -c)
                : r === 1 / 0
                  ? (c += s)
                  : (c = c * (r - s) + s);
            return c;
          })(e, a[t], a[t + 1], r[t], r[t + 1], u, i, o, s.map);
        };
      };
      var pe = 1.70158,
        fe = 1.525 * pe,
        me = pe + 1,
        ge = (2 * Math.PI) / 3,
        ye = (2 * Math.PI) / 4.5,
        ve = (e) => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n
            ? t * e * e
            : e < 2 / n
              ? t * (e -= 1.5 / n) * e + 0.75
              : e < 2.5 / n
                ? t * (e -= 2.25 / n) * e + 0.9375
                : t * (e -= 2.625 / n) * e + 0.984375;
        },
        be = {
          linear: (e) => e,
          easeInQuad: (e) => e * e,
          easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
          easeInOutQuad: (e) =>
            e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: (e) => e * e * e,
          easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: (e) =>
            e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: (e) => e * e * e * e,
          easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: (e) =>
            e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: (e) => e * e * e * e * e,
          easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: (e) =>
            e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
          easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
          easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: (e) => (0 === e ? 0 : Math.pow(2, 10 * e - 10)),
          easeOutExpo: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
          easeInOutExpo: (e) =>
            0 === e
              ? 0
              : 1 === e
                ? 1
                : e < 0.5
                  ? Math.pow(2, 20 * e - 10) / 2
                  : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: (e) =>
            e < 0.5
              ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
              : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: (e) => me * e * e * e - pe * e * e,
          easeOutBack: (e) =>
            1 + me * Math.pow(e - 1, 3) + pe * Math.pow(e - 1, 2),
          easeInOutBack: (e) =>
            e < 0.5
              ? (Math.pow(2 * e, 2) * (7.189819 * e - fe)) / 2
              : (Math.pow(2 * e - 2, 2) * ((fe + 1) * (2 * e - 2) + fe) + 2) /
                2,
          easeInElastic: (e) =>
            0 === e
              ? 0
              : 1 === e
                ? 1
                : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ge),
          easeOutElastic: (e) =>
            0 === e
              ? 0
              : 1 === e
                ? 1
                : Math.pow(2, -10 * e) * Math.sin((10 * e - 0.75) * ge) + 1,
          easeInOutElastic: (e) =>
            0 === e
              ? 0
              : 1 === e
                ? 1
                : e < 0.5
                  ? (-Math.pow(2, 20 * e - 10) *
                      Math.sin((20 * e - 11.125) * ye)) /
                    2
                  : (Math.pow(2, -20 * e + 10) *
                      Math.sin((20 * e - 11.125) * ye)) /
                      2 +
                    1,
          easeInBounce: (e) => 1 - ve(1 - e),
          easeOutBounce: ve,
          easeInOutBounce: (e) =>
            e < 0.5 ? (1 - ve(1 - 2 * e)) / 2 : (1 + ve(2 * e - 1)) / 2,
          steps:
            (e, t = "end") =>
            (n) => {
              const s =
                  (n = "end" === t ? Math.min(n, 0.999) : Math.max(n, 0.001)) *
                  e,
                r = "end" === t ? Math.floor(s) : Math.ceil(s);
              return (a = 0), (i = 1), (o = r / e), Math.min(Math.max(o, a), i);
              var a, i, o;
            },
        },
        we = Symbol.for("FluidValue.get"),
        _e = Symbol.for("FluidValue.observers"),
        ke = (e) => Boolean(e && e[we]),
        Pe = (e) => (e && e[we] ? e[we]() : e),
        Me = (e) => e[_e] || null;
      function Ae(e, t) {
        const n = e[_e];
        n &&
          n.forEach((e) => {
            !(function (e, t) {
              e.eventObserved ? e.eventObserved(t) : e(t);
            })(e, t);
          });
      }
      var xe = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Ie(this, e);
          }
        },
        Ie = (e, t) => Re(e, we, t);
      function Se(e, t) {
        if (e[we]) {
          let n = e[_e];
          n || Re(e, _e, (n = new Set())),
            n.has(t) ||
              (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
        }
        return t;
      }
      function Ce(e, t) {
        const n = e[_e];
        if (n && n.has(t)) {
          const s = n.size - 1;
          s ? n.delete(t) : (e[_e] = null),
            e.observerRemoved && e.observerRemoved(s, t);
        }
      }
      var Oe,
        Re = (e, t, n) =>
          Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
          }),
        Ve = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ee =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        je = new RegExp(`(${Ve.source})(%|[a-z]+)`, "i"),
        qe = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        $e = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        ze = (e) => {
          const [t, n] = Fe(e);
          if (!t || j()) return e;
          const s = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(t);
          if (s) return s.trim();
          if (n && n.startsWith("--")) {
            const t = window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(n);
            return t || e;
          }
          return n && $e.test(n) ? ze(n) : n || e;
        },
        Fe = (e) => {
          const t = $e.exec(e);
          if (!t) return [,];
          const [, n, s] = t;
          return [n, s];
        },
        Ne = (e, t, n, s, r) =>
          `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
        Qe = (e) => {
          Oe ||
            (Oe = q
              ? new RegExp(`(${Object.keys(q).join("|")})(?!\\w)`, "g")
              : /^\b$/);
          const t = e.output.map((e) =>
              Pe(e).replace($e, ze).replace(Ee, de).replace(Oe, de),
            ),
            n = t.map((e) => e.match(Ve).map(Number)),
            s = n[0]
              .map((e, t) =>
                n.map((e) => {
                  if (!(t in e))
                    throw Error(
                      'The arity of each "output" value must be equal',
                    );
                  return e[t];
                }),
              )
              .map((t) => he({ ...e, output: t }));
          return (e) => {
            const n =
              !je.test(t[0]) && t.find((e) => je.test(e))?.replace(Ve, "");
            let r = 0;
            return t[0]
              .replace(Ve, () => `${s[r++](e)}${n || ""}`)
              .replace(qe, Ne);
          };
        },
        Te = "react-spring: ",
        Ue = (e) => {
          const t = e;
          let n = !1;
          if ("function" != typeof t)
            throw new TypeError(`${Te}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), (n = !0));
          };
        },
        De = Ue(console.warn);
      var Le = Ue(console.warn);
      function Be(e) {
        return (
          A.str(e) &&
          ("#" == e[0] ||
            /\d/.test(e) ||
            (!j() && $e.test(e)) ||
            e in (q || {}))
        );
      }
      var Ge = j() ? _.useEffect : _.useLayoutEffect,
        We = () => {
          const e = (0, _.useRef)(!1);
          return (
            Ge(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              [],
            ),
            e
          );
        };
      function Ze() {
        const e = (0, _.useState)()[1],
          t = We();
        return () => {
          t.current && e(Math.random());
        };
      }
      var Ke = (e) => (0, _.useEffect)(e, Xe),
        Xe = [];
      function He(e) {
        const t = (0, _.useRef)(void 0);
        return (
          (0, _.useEffect)(() => {
            t.current = e;
          }),
          t.current
        );
      }
      var Je = Symbol.for("Animated:node"),
        Ye = (e) => e && e[Je],
        et = (e, t) => {
          return (
            (n = e),
            (s = Je),
            (r = t),
            Object.defineProperty(n, s, {
              value: r,
              writable: !0,
              configurable: !0,
            })
          );
          var n, s, r;
        },
        tt = (e) => e && e[Je] && e[Je].getPayload(),
        nt = class {
          constructor() {
            et(this, this);
          }
          getPayload() {
            return this.payload || [];
          }
        },
        st = class e extends nt {
          constructor(e) {
            super(),
              (this._value = e),
              (this.done = !0),
              (this.durationProgress = 0),
              A.num(this._value) && (this.lastPosition = this._value);
          }
          static create(t) {
            return new e(t);
          }
          getPayload() {
            return [this];
          }
          getValue() {
            return this._value;
          }
          setValue(e, t) {
            return (
              A.num(e) &&
                ((this.lastPosition = e),
                t &&
                  ((e = Math.round(e / t) * t),
                  this.done && (this.lastPosition = e))),
              this._value !== e && ((this._value = e), !0)
            );
          }
          reset() {
            const { done: e } = this;
            (this.done = !1),
              A.num(this._value) &&
                ((this.elapsedTime = 0),
                (this.durationProgress = 0),
                (this.lastPosition = this._value),
                e && (this.lastVelocity = null),
                (this.v0 = null));
          }
        },
        rt = class e extends st {
          constructor(e) {
            super(0),
              (this._string = null),
              (this._toString = he({ output: [e, e] }));
          }
          static create(t) {
            return new e(t);
          }
          getValue() {
            const e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
          }
          setValue(e) {
            if (A.str(e)) {
              if (e == this._string) return !1;
              (this._string = e), (this._value = 1);
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null;
            }
            return !0;
          }
          reset(e) {
            e && (this._toString = he({ output: [this.getValue(), e] })),
              (this._value = 0),
              super.reset();
          }
        },
        at = { dependencies: null },
        it = class extends nt {
          constructor(e) {
            super(), (this.source = e), this.setValue(e);
          }
          getValue(e) {
            const t = {};
            return (
              S(this.source, (n, s) => {
                var r;
                (r = n) && r[Je] === r
                  ? (t[s] = n.getValue(e))
                  : ke(n)
                    ? (t[s] = Pe(n))
                    : e || (t[s] = n);
              }),
              t
            );
          }
          setValue(e) {
            (this.source = e), (this.payload = this._makePayload(e));
          }
          reset() {
            this.payload && I(this.payload, (e) => e.reset());
          }
          _makePayload(e) {
            if (e) {
              const t = new Set();
              return S(e, this._addToPayload, t), Array.from(t);
            }
          }
          _addToPayload(e) {
            at.dependencies && ke(e) && at.dependencies.add(e);
            const t = tt(e);
            t && I(t, (e) => this.add(e));
          }
        },
        ot = class e extends it {
          constructor(e) {
            super(e);
          }
          static create(t) {
            return new e(t);
          }
          getValue() {
            return this.source.map((e) => e.getValue());
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length
              ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
              : (super.setValue(e.map(ut)), !0);
          }
        };
      function ut(e) {
        return (Be(e) ? rt : st).create(e);
      }
      function ct(e) {
        const t = Ye(e);
        return t ? t.constructor : A.arr(e) ? ot : Be(e) ? rt : st;
      }
      var lt = (e, t) => {
          const n = !A.fun(e) || (e.prototype && e.prototype.isReactComponent);
          return (0, _.forwardRef)((s, a) => {
            const i = (0, _.useRef)(null),
              o =
                n &&
                (0, _.useCallback)(
                  (e) => {
                    i.current = (function (e, t) {
                      e && (A.fun(e) ? e(t) : (e.current = t));
                      return t;
                    })(a, e);
                  },
                  [a],
                ),
              [u, c] = (function (e, t) {
                const n = new Set();
                (at.dependencies = n),
                  e.style &&
                    (e = { ...e, style: t.createAnimatedStyle(e.style) });
                return (e = new it(e)), (at.dependencies = null), [e, n];
              })(s, t),
              l = Ze(),
              d = () => {
                const e = i.current;
                if (n && !e) return;
                !1 === (!!e && t.applyAnimatedValues(e, u.getValue(!0))) && l();
              },
              h = new dt(d, c),
              p = (0, _.useRef)(void 0);
            Ge(
              () => (
                (p.current = h),
                I(c, (e) => Se(e, h)),
                () => {
                  p.current &&
                    (I(p.current.deps, (e) => Ce(e, p.current)),
                    r.cancel(p.current.update));
                }
              ),
            ),
              (0, _.useEffect)(d, []),
              Ke(() => () => {
                const e = p.current;
                I(e.deps, (t) => Ce(t, e));
              });
            const f = t.getComponentProps(u.getValue());
            return _.createElement(e, { ...f, ref: o });
          });
        },
        dt = class {
          constructor(e, t) {
            (this.update = e), (this.deps = t);
          }
          eventObserved(e) {
            "change" == e.type && r.write(this.update);
          }
        };
      var ht = Symbol.for("AnimatedComponent"),
        pt = (e) =>
          A.str(e)
            ? e
            : e && A.str(e.displayName)
              ? e.displayName
              : (A.fun(e) && e.name) || null;
      function ft(e, ...t) {
        return A.fun(e) ? e(...t) : e;
      }
      var mt = (e, t) =>
          !0 === e || !!(t && e && (A.fun(e) ? e(t) : C(e).includes(t))),
        gt = (e, t) => (A.obj(e) ? t && e[t] : e),
        yt = (e, t) =>
          !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        vt = (e) => e,
        bt = (e, t = vt) => {
          let n = wt;
          e.default &&
            !0 !== e.default &&
            ((e = e.default), (n = Object.keys(e)));
          const s = {};
          for (const r of n) {
            const n = t(e[r], r);
            A.und(n) || (s[r] = n);
          }
          return s;
        },
        wt = [
          "config",
          "onProps",
          "onStart",
          "onChange",
          "onPause",
          "onResume",
          "onRest",
        ],
        _t = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1,
        };
      function kt(e) {
        const t = (function (e) {
          const t = {};
          let n = 0;
          if (
            (S(e, (e, s) => {
              _t[s] || ((t[s] = e), n++);
            }),
            n)
          )
            return t;
        })(e);
        if (t) {
          const n = { to: t };
          return S(e, (e, s) => s in t || (n[s] = e)), n;
        }
        return { ...e };
      }
      function Pt(e) {
        return (
          (e = Pe(e)),
          A.arr(e)
            ? e.map(Pt)
            : Be(e)
              ? P.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
              : e
        );
      }
      function Mt(e) {
        for (const t in e) return !0;
        return !1;
      }
      function At(e) {
        return A.fun(e) || (A.arr(e) && A.obj(e[0]));
      }
      function xt(e, t) {
        e.ref?.delete(e), t?.delete(e);
      }
      function It(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), (e.ref = t));
      }
      var St = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: be.linear,
          clamp: !1,
        },
        Ct = class {
          constructor() {
            (this.velocity = 0), Object.assign(this, St);
          }
        };
      function Ot(e, t) {
        if (A.und(t.decay)) {
          const n = !A.und(t.tension) || !A.und(t.friction);
          (!n && A.und(t.frequency) && A.und(t.damping) && A.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0);
        } else e.duration = void 0;
      }
      var Rt = [],
        Vt = class {
          constructor() {
            (this.changed = !1),
              (this.values = Rt),
              (this.toValues = null),
              (this.fromValues = Rt),
              (this.config = new Ct()),
              (this.immediate = !1);
          }
        };
      function Et(
        e,
        { key: t, props: n, defaultProps: s, state: a, actions: i },
      ) {
        return new Promise((o, u) => {
          let c,
            l,
            d = mt(n.cancel ?? s?.cancel, t);
          if (d) f();
          else {
            A.und(n.pause) || (a.paused = mt(n.pause, t));
            let e = s?.pause;
            !0 !== e && (e = a.paused || mt(e, t)),
              (c = ft(n.delay || 0, t)),
              e ? (a.resumeQueue.add(p), i.pause()) : (i.resume(), p());
          }
          function h() {
            a.resumeQueue.add(p),
              a.timeouts.delete(l),
              l.cancel(),
              (c = l.time - r.now());
          }
          function p() {
            c > 0 && !P.skipAnimation
              ? ((a.delayed = !0),
                (l = r.setTimeout(f, c)),
                a.pauseQueue.add(h),
                a.timeouts.add(l))
              : f();
          }
          function f() {
            a.delayed && (a.delayed = !1),
              a.pauseQueue.delete(h),
              a.timeouts.delete(l),
              e <= (a.cancelId || 0) && (d = !0);
            try {
              i.start({ ...n, callId: e, cancel: d }, o);
            } catch (e) {
              u(e);
            }
          }
        });
      }
      var jt = (e, t) =>
          1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? zt(e.get())
              : t.every((e) => e.noop)
                ? qt(e.get())
                : $t(
                    e.get(),
                    t.every((e) => e.finished),
                  ),
        qt = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        $t = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        zt = (e) => ({ value: e, cancelled: !0, finished: !1 });
      function Ft(e, t, n, s) {
        const { callId: a, parentId: i, onRest: o } = t,
          { asyncTo: u, promise: c } = n;
        return i || e !== u || t.reset
          ? (n.promise = (async () => {
              (n.asyncId = a), (n.asyncTo = e);
              const l = bt(t, (e, t) => ("onRest" === t ? void 0 : e));
              let d, h;
              const p = new Promise((e, t) => ((d = e), (h = t))),
                f = (e) => {
                  const t =
                    (a <= (n.cancelId || 0) && zt(s)) ||
                    (a !== n.asyncId && $t(s, !1));
                  if (t) throw ((e.result = t), h(e), e);
                },
                m = (e, t) => {
                  const r = new Qt(),
                    i = new Tt();
                  return (async () => {
                    if (P.skipAnimation)
                      throw (Nt(n), (i.result = $t(s, !1)), h(i), i);
                    f(r);
                    const o = A.obj(e) ? { ...e } : { ...t, to: e };
                    (o.parentId = a),
                      S(l, (e, t) => {
                        A.und(o[t]) && (o[t] = e);
                      });
                    const u = await s.start(o);
                    return (
                      f(r),
                      n.paused &&
                        (await new Promise((e) => {
                          n.resumeQueue.add(e);
                        })),
                      u
                    );
                  })();
                };
              let g;
              if (P.skipAnimation) return Nt(n), $t(s, !1);
              try {
                let t;
                (t = A.arr(e)
                  ? (async (e) => {
                      for (const t of e) await m(t);
                    })(e)
                  : Promise.resolve(e(m, s.stop.bind(s)))),
                  await Promise.all([t.then(d), p]),
                  (g = $t(s.get(), !0, !1));
              } catch (e) {
                if (e instanceof Qt) g = e.result;
                else {
                  if (!(e instanceof Tt)) throw e;
                  g = e.result;
                }
              } finally {
                a == n.asyncId &&
                  ((n.asyncId = i),
                  (n.asyncTo = i ? u : void 0),
                  (n.promise = i ? c : void 0));
              }
              return (
                A.fun(o) &&
                  r.batchedUpdates(() => {
                    o(g, s, s.item);
                  }),
                g
              );
            })())
          : c;
      }
      function Nt(e, t) {
        O(e.timeouts, (e) => e.cancel()),
          e.pauseQueue.clear(),
          e.resumeQueue.clear(),
          (e.asyncId = e.asyncTo = e.promise = void 0),
          t && (e.cancelId = t);
      }
      var Qt = class extends Error {
          constructor() {
            super(
              "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
            );
          }
        },
        Tt = class extends Error {
          constructor() {
            super("SkipAnimationSignal");
          }
        },
        Ut = (e) => e instanceof Lt,
        Dt = 1,
        Lt = class extends xe {
          constructor() {
            super(...arguments), (this.id = Dt++), (this._priority = 0);
          }
          get priority() {
            return this._priority;
          }
          set priority(e) {
            this._priority != e &&
              ((this._priority = e), this._onPriorityChange(e));
          }
          get() {
            const e = Ye(this);
            return e && e.getValue();
          }
          to(...e) {
            return P.to(this, e);
          }
          interpolate(...e) {
            return (
              De(
                `${Te}The "interpolate" function is deprecated in v9 (use "to" instead)`,
              ),
              P.to(this, e)
            );
          }
          toJSON() {
            return this.get();
          }
          observerAdded(e) {
            1 == e && this._attach();
          }
          observerRemoved(e) {
            0 == e && this._detach();
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            Ae(this, { type: "change", parent: this, value: e, idle: t });
          }
          _onPriorityChange(e) {
            this.idle || D.sort(this),
              Ae(this, { type: "priority", parent: this, priority: e });
          }
        },
        Bt = Symbol.for("SpringPhase"),
        Gt = (e) => (1 & e[Bt]) > 0,
        Wt = (e) => (2 & e[Bt]) > 0,
        Zt = (e) => (4 & e[Bt]) > 0,
        Kt = (e, t) => (t ? (e[Bt] |= 3) : (e[Bt] &= -3)),
        Xt = (e, t) => (t ? (e[Bt] |= 4) : (e[Bt] &= -5)),
        Ht = class extends Lt {
          constructor(e, t) {
            if (
              (super(),
              (this.animation = new Vt()),
              (this.defaultProps = {}),
              (this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._pendingCalls = new Set()),
              (this._lastCallId = 0),
              (this._lastToId = 0),
              (this._memoizedDuration = 0),
              !A.und(e) || !A.und(t))
            ) {
              const n = A.obj(e) ? { ...e } : { ...t, from: e };
              A.und(n.default) && (n.default = !0), this.start(n);
            }
          }
          get idle() {
            return !(Wt(this) || this._state.asyncTo) || Zt(this);
          }
          get goal() {
            return Pe(this.animation.to);
          }
          get velocity() {
            const e = Ye(this);
            return e instanceof st
              ? e.lastVelocity || 0
              : e.getPayload().map((e) => e.lastVelocity || 0);
          }
          get hasAnimated() {
            return Gt(this);
          }
          get isAnimating() {
            return Wt(this);
          }
          get isPaused() {
            return Zt(this);
          }
          get isDelayed() {
            return this._state.delayed;
          }
          advance(e) {
            let t = !0,
              n = !1;
            const s = this.animation;
            let { toValues: r } = s;
            const { config: a } = s,
              i = tt(s.to);
            !i && ke(s.to) && (r = C(Pe(s.to))),
              s.values.forEach((o, u) => {
                if (o.done) return;
                const c =
                  o.constructor == rt ? 1 : i ? i[u].lastPosition : r[u];
                let l = s.immediate,
                  d = c;
                if (!l) {
                  if (((d = o.lastPosition), a.tension <= 0))
                    return void (o.done = !0);
                  let t = (o.elapsedTime += e);
                  const n = s.fromValues[u],
                    r =
                      null != o.v0
                        ? o.v0
                        : (o.v0 = A.arr(a.velocity)
                            ? a.velocity[u]
                            : a.velocity);
                  let i;
                  const h =
                    a.precision ||
                    (n == c ? 0.005 : Math.min(1, 0.001 * Math.abs(c - n)));
                  if (A.und(a.duration))
                    if (a.decay) {
                      const e = !0 === a.decay ? 0.998 : a.decay,
                        s = Math.exp(-(1 - e) * t);
                      (d = n + (r / (1 - e)) * (1 - s)),
                        (l = Math.abs(o.lastPosition - d) <= h),
                        (i = r * s);
                    } else {
                      i = null == o.lastVelocity ? r : o.lastVelocity;
                      const t = a.restVelocity || h / 10,
                        s = a.clamp ? 0 : a.bounce,
                        u = !A.und(s),
                        p = n == c ? o.v0 > 0 : n < c;
                      let f,
                        m = !1;
                      const g = 1,
                        y = Math.ceil(e / g);
                      for (
                        let e = 0;
                        e < y &&
                        ((f = Math.abs(i) > t),
                        f || ((l = Math.abs(c - d) <= h), !l));
                        ++e
                      ) {
                        u &&
                          ((m = d == c || d > c == p),
                          m && ((i = -i * s), (d = c)));
                        (i +=
                          ((1e-6 * -a.tension * (d - c) +
                            0.001 * -a.friction * i) /
                            a.mass) *
                          g),
                          (d += i * g);
                      }
                    }
                  else {
                    let s = 1;
                    a.duration > 0 &&
                      (this._memoizedDuration !== a.duration &&
                        ((this._memoizedDuration = a.duration),
                        o.durationProgress > 0 &&
                          ((o.elapsedTime = a.duration * o.durationProgress),
                          (t = o.elapsedTime += e))),
                      (s = (a.progress || 0) + t / this._memoizedDuration),
                      (s = s > 1 ? 1 : s < 0 ? 0 : s),
                      (o.durationProgress = s)),
                      (d = n + a.easing(s) * (c - n)),
                      (i = (d - o.lastPosition) / e),
                      (l = 1 == s);
                  }
                  (o.lastVelocity = i),
                    Number.isNaN(d) &&
                      (console.warn("Got NaN while animating:", this),
                      (l = !0));
                }
                i && !i[u].done && (l = !1),
                  l ? (o.done = !0) : (t = !1),
                  o.setValue(d, a.round) && (n = !0);
              });
            const o = Ye(this),
              u = o.getValue();
            if (t) {
              const e = Pe(s.to);
              (u === e && !n) || a.decay
                ? n && a.decay && this._onChange(u)
                : (o.setValue(e), this._onChange(e)),
                this._stop();
            } else n && this._onChange(u);
          }
          set(e) {
            return (
              r.batchedUpdates(() => {
                this._stop(), this._focus(e), this._set(e);
              }),
              this
            );
          }
          pause() {
            this._update({ pause: !0 });
          }
          resume() {
            this._update({ pause: !1 });
          }
          finish() {
            if (Wt(this)) {
              const { to: e, config: t } = this.animation;
              r.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop();
              });
            }
            return this;
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this;
          }
          start(e, t) {
            let n;
            return (
              A.und(e)
                ? ((n = this.queue || []), (this.queue = []))
                : (n = [A.obj(e) ? e : { ...t, to: e }]),
              Promise.all(n.map((e) => this._update(e))).then((e) =>
                jt(this, e),
              )
            );
          }
          stop(e) {
            const { to: t } = this.animation;
            return (
              this._focus(this.get()),
              Nt(this._state, e && this._lastCallId),
              r.batchedUpdates(() => this._stop(t, e)),
              this
            );
          }
          reset() {
            this._update({ reset: !0 });
          }
          eventObserved(e) {
            "change" == e.type
              ? this._start()
              : "priority" == e.type && (this.priority = e.priority + 1);
          }
          _prepareNode(e) {
            const t = this.key || "";
            let { to: n, from: s } = e;
            (n = A.obj(n) ? n[t] : n),
              (null == n || At(n)) && (n = void 0),
              (s = A.obj(s) ? s[t] : s),
              null == s && (s = void 0);
            const r = { to: n, from: s };
            return (
              Gt(this) ||
                (e.reverse && ([n, s] = [s, n]),
                (s = Pe(s)),
                A.und(s) ? Ye(this) || this._set(n) : this._set(s)),
              r
            );
          }
          _update({ ...e }, t) {
            const { key: n, defaultProps: s } = this;
            e.default &&
              Object.assign(
                s,
                bt(e, (e, t) => (/^on/.test(t) ? gt(e, n) : e)),
              ),
              rn(this, e, "onProps"),
              an(this, "onProps", e, this);
            const r = this._prepareNode(e);
            if (Object.isFrozen(this))
              throw Error(
                "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?",
              );
            const a = this._state;
            return Et(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: s,
              state: a,
              actions: {
                pause: () => {
                  Zt(this) ||
                    (Xt(this, !0),
                    E(a.pauseQueue),
                    an(
                      this,
                      "onPause",
                      $t(this, Jt(this, this.animation.to)),
                      this,
                    ));
                },
                resume: () => {
                  Zt(this) &&
                    (Xt(this, !1),
                    Wt(this) && this._resume(),
                    E(a.resumeQueue),
                    an(
                      this,
                      "onResume",
                      $t(this, Jt(this, this.animation.to)),
                      this,
                    ));
                },
                start: this._merge.bind(this, r),
              },
            }).then((n) => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = Yt(e);
                if (t) return this._update(t, !0);
              }
              return n;
            });
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(zt(this));
            const s = !A.und(e.to),
              a = !A.und(e.from);
            if (s || a) {
              if (!(t.callId > this._lastToId)) return n(zt(this));
              this._lastToId = t.callId;
            }
            const { key: i, defaultProps: o, animation: u } = this,
              { to: c, from: l } = u;
            let { to: d = c, from: h = l } = e;
            !a || s || (t.default && !A.und(d)) || (d = h),
              t.reverse && ([d, h] = [h, d]);
            const p = !x(h, l);
            p && (u.from = h), (h = Pe(h));
            const f = !x(d, c);
            f && this._focus(d);
            const m = At(t.to),
              { config: g } = u,
              { decay: y, velocity: v } = g;
            (s || a) && (g.velocity = 0),
              t.config &&
                !m &&
                (function (e, t, n) {
                  n && (Ot((n = { ...n }), t), (t = { ...n, ...t })),
                    Ot(e, t),
                    Object.assign(e, t);
                  for (const t in St) null == e[t] && (e[t] = St[t]);
                  let { frequency: s, damping: r } = e;
                  const { mass: a } = e;
                  A.und(s) ||
                    (s < 0.01 && (s = 0.01),
                    r < 0 && (r = 0),
                    (e.tension = Math.pow((2 * Math.PI) / s, 2) * a),
                    (e.friction = (4 * Math.PI * r * a) / s));
                })(
                  g,
                  ft(t.config, i),
                  t.config !== o.config ? ft(o.config, i) : void 0,
                );
            let b = Ye(this);
            if (!b || A.und(d)) return n($t(this, !0));
            const w = A.und(t.reset)
                ? a && !t.default
                : !A.und(h) && mt(t.reset, i),
              _ = w ? h : this.get(),
              k = Pt(d),
              P = A.num(k) || A.arr(k) || Be(k),
              M = !m && (!P || mt(o.immediate || t.immediate, i));
            if (f) {
              const e = ct(d);
              if (e !== b.constructor) {
                if (!M)
                  throw Error(
                    `Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`,
                  );
                b = this._set(k);
              }
            }
            const S = b.constructor;
            let O = ke(d),
              R = !1;
            if (!O) {
              const e = w || (!Gt(this) && p);
              (f || e) && ((R = x(Pt(_), k)), (O = !R)),
                ((x(u.immediate, M) || M) &&
                  x(g.decay, y) &&
                  x(g.velocity, v)) ||
                  (O = !0);
            }
            if (
              (R &&
                Wt(this) &&
                (u.changed && !w ? (O = !0) : O || this._stop(c)),
              !m &&
                ((O || ke(c)) &&
                  ((u.values = b.getPayload()),
                  (u.toValues = ke(d) ? null : S == rt ? [1] : C(k))),
                u.immediate != M && ((u.immediate = M), M || w || this._set(c)),
                O))
            ) {
              const { onRest: e } = u;
              I(sn, (e) => rn(this, t, e));
              const s = $t(this, Jt(this, c));
              E(this._pendingCalls, s),
                this._pendingCalls.add(n),
                u.changed &&
                  r.batchedUpdates(() => {
                    (u.changed = !w),
                      e?.(s, this),
                      w ? ft(o.onRest, s) : u.onStart?.(s, this);
                  });
            }
            w && this._set(_),
              m
                ? n(Ft(t.to, t, this._state, this))
                : O
                  ? this._start()
                  : Wt(this) && !f
                    ? this._pendingCalls.add(n)
                    : n(qt(_));
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to &&
              (Me(this) && this._detach(),
              (t.to = e),
              Me(this) && this._attach());
          }
          _attach() {
            let e = 0;
            const { to: t } = this.animation;
            ke(t) && (Se(t, this), Ut(t) && (e = t.priority + 1)),
              (this.priority = e);
          }
          _detach() {
            const { to: e } = this.animation;
            ke(e) && Ce(e, this);
          }
          _set(e, t = !0) {
            const n = Pe(e);
            if (!A.und(n)) {
              const e = Ye(this);
              if (!e || !x(n, e.getValue())) {
                const s = ct(n);
                e && e.constructor == s ? e.setValue(n) : et(this, s.create(n)),
                  e &&
                    r.batchedUpdates(() => {
                      this._onChange(n, t);
                    });
              }
            }
            return Ye(this);
          }
          _onStart() {
            const e = this.animation;
            e.changed ||
              ((e.changed = !0),
              an(this, "onStart", $t(this, Jt(this, e.to)), this));
          }
          _onChange(e, t) {
            t || (this._onStart(), ft(this.animation.onChange, e, this)),
              ft(this.defaultProps.onChange, e, this),
              super._onChange(e, t);
          }
          _start() {
            const e = this.animation;
            Ye(this).reset(Pe(e.to)),
              e.immediate ||
                (e.fromValues = e.values.map((e) => e.lastPosition)),
              Wt(this) || (Kt(this, !0), Zt(this) || this._resume());
          }
          _resume() {
            P.skipAnimation ? this.finish() : D.start(this);
          }
          _stop(e, t) {
            if (Wt(this)) {
              Kt(this, !1);
              const n = this.animation;
              I(n.values, (e) => {
                e.done = !0;
              }),
                n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
                Ae(this, { type: "idle", parent: this });
              const s = t
                ? zt(this.get())
                : $t(this.get(), Jt(this, e ?? n.to));
              E(this._pendingCalls, s),
                n.changed && ((n.changed = !1), an(this, "onRest", s, this));
            }
          }
        };
      function Jt(e, t) {
        const n = Pt(t);
        return x(Pt(e.get()), n);
      }
      function Yt(e, t = e.loop, n = e.to) {
        const s = ft(t);
        if (s) {
          const r = !0 !== s && kt(s),
            a = (r || e).reverse,
            i = !r || r.reset;
          return en({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || At(n) ? n : void 0,
            from: i ? e.from : void 0,
            reset: i,
            ...r,
          });
        }
      }
      function en(e) {
        const { to: t, from: n } = (e = kt(e)),
          s = new Set();
        return (
          A.obj(t) && nn(t, s),
          A.obj(n) && nn(n, s),
          (e.keys = s.size ? Array.from(s) : null),
          e
        );
      }
      function tn(e) {
        const t = en(e);
        return A.und(t.default) && (t.default = bt(t)), t;
      }
      function nn(e, t) {
        S(e, (e, n) => null != e && t.add(n));
      }
      var sn = ["onStart", "onRest", "onChange", "onPause", "onResume"];
      function rn(e, t, n) {
        e.animation[n] = t[n] !== yt(t, n) ? gt(t[n], e.key) : void 0;
      }
      function an(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n);
      }
      var on = ["onStart", "onChange", "onRest"],
        un = 1,
        cn = class {
          constructor(e, t) {
            (this.id = un++),
              (this.springs = {}),
              (this.queue = []),
              (this._lastAsyncId = 0),
              (this._active = new Set()),
              (this._changed = new Set()),
              (this._started = !1),
              (this._state = {
                paused: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._events = {
                onStart: new Map(),
                onChange: new Map(),
                onRest: new Map(),
              }),
              (this._onFrame = this._onFrame.bind(this)),
              t && (this._flush = t),
              e && this.start({ default: !0, ...e });
          }
          get idle() {
            return (
              !this._state.asyncTo &&
              Object.values(this.springs).every(
                (e) => e.idle && !e.isDelayed && !e.isPaused,
              )
            );
          }
          get item() {
            return this._item;
          }
          set item(e) {
            this._item = e;
          }
          get() {
            const e = {};
            return this.each((t, n) => (e[n] = t.get())), e;
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              A.und(n) || this.springs[t].set(n);
            }
          }
          update(e) {
            return e && this.queue.push(en(e)), this;
          }
          start(e) {
            let { queue: t } = this;
            return (
              e ? (t = C(e).map(en)) : (this.queue = []),
              this._flush ? this._flush(this, t) : (gn(this, t), ln(this, t))
            );
          }
          stop(e, t) {
            if ((e !== !!e && (t = e), t)) {
              const n = this.springs;
              I(C(t), (t) => n[t].stop(!!e));
            } else
              Nt(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
            return this;
          }
          pause(e) {
            if (A.und(e)) this.start({ pause: !0 });
            else {
              const t = this.springs;
              I(C(e), (e) => t[e].pause());
            }
            return this;
          }
          resume(e) {
            if (A.und(e)) this.start({ pause: !1 });
            else {
              const t = this.springs;
              I(C(e), (e) => t[e].resume());
            }
            return this;
          }
          each(e) {
            S(this.springs, e);
          }
          _onFrame() {
            const { onStart: e, onChange: t, onRest: n } = this._events,
              s = this._active.size > 0,
              r = this._changed.size > 0;
            ((s && !this._started) || (r && !this._started)) &&
              ((this._started = !0),
              O(e, ([e, t]) => {
                (t.value = this.get()), e(t, this, this._item);
              }));
            const a = !s && this._started,
              i = r || (a && n.size) ? this.get() : null;
            r &&
              t.size &&
              O(t, ([e, t]) => {
                (t.value = i), e(t, this, this._item);
              }),
              a &&
                ((this._started = !1),
                O(n, ([e, t]) => {
                  (t.value = i), e(t, this, this._item);
                }));
          }
          eventObserved(e) {
            if ("change" == e.type)
              this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent);
            }
            r.onFrame(this._onFrame);
          }
        };
      function ln(e, t) {
        return Promise.all(t.map((t) => dn(e, t))).then((t) => jt(e, t));
      }
      async function dn(e, t, n) {
        const { keys: s, to: a, from: i, loop: o, onRest: u, onResolve: c } = t,
          l = A.obj(t.default) && t.default;
        o && (t.loop = !1),
          !1 === a && (t.to = null),
          !1 === i && (t.from = null);
        const d = A.arr(a) || A.fun(a) ? a : void 0;
        d
          ? ((t.to = void 0), (t.onRest = void 0), l && (l.onRest = void 0))
          : I(on, (n) => {
              const s = t[n];
              if (A.fun(s)) {
                const r = e._events[n];
                (t[n] = ({ finished: e, cancelled: t }) => {
                  const n = r.get(s);
                  n
                    ? (e || (n.finished = !1), t && (n.cancelled = !0))
                    : r.set(s, {
                        value: null,
                        finished: e || !1,
                        cancelled: t || !1,
                      });
                }),
                  l && (l[n] = t[n]);
              }
            });
        const h = e._state;
        t.pause === !h.paused
          ? ((h.paused = t.pause), E(t.pause ? h.pauseQueue : h.resumeQueue))
          : h.paused && (t.pause = !0);
        const p = (s || Object.keys(e.springs)).map((n) =>
            e.springs[n].start(t),
          ),
          f = !0 === t.cancel || !0 === yt(t, "cancel");
        (d || (f && h.asyncId)) &&
          p.push(
            Et(++e._lastAsyncId, {
              props: t,
              state: h,
              actions: {
                pause: M,
                resume: M,
                start(t, n) {
                  f
                    ? (Nt(h, e._lastAsyncId), n(zt(e)))
                    : ((t.onRest = u), n(Ft(d, t, h, e)));
                },
              },
            }),
          ),
          h.paused &&
            (await new Promise((e) => {
              h.resumeQueue.add(e);
            }));
        const m = jt(e, await Promise.all(p));
        if (o && m.finished && (!n || !m.noop)) {
          const n = Yt(t, o, a);
          if (n) return gn(e, [n]), dn(e, n, !0);
        }
        return c && r.batchedUpdates(() => c(m, e, e.item)), m;
      }
      function hn(e, t) {
        const n = { ...e.springs };
        return (
          t &&
            I(C(t), (e) => {
              A.und(e.keys) && (e = en(e)),
                A.obj(e.to) || (e = { ...e, to: void 0 }),
                mn(n, e, (e) => fn(e));
            }),
          pn(e, n),
          n
        );
      }
      function pn(e, t) {
        S(t, (t, n) => {
          e.springs[n] || ((e.springs[n] = t), Se(t, e));
        });
      }
      function fn(e, t) {
        const n = new Ht();
        return (n.key = e), t && Se(n, t), n;
      }
      function mn(e, t, n) {
        t.keys &&
          I(t.keys, (s) => {
            (e[s] || (e[s] = n(s)))._prepareNode(t);
          });
      }
      function gn(e, t) {
        I(t, (t) => {
          mn(e.springs, t, (t) => fn(t, e));
        });
      }
      var yn = _.createContext({ pause: !1, immediate: !1 }),
        vn = () => {
          const e = [],
            t = function (t) {
              Le(
                `${Te}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
              );
              const s = [];
              return (
                I(e, (e, r) => {
                  if (A.und(t)) s.push(e.start());
                  else {
                    const a = n(t, e, r);
                    a && s.push(e.start(a));
                  }
                }),
                s
              );
            };
          (t.current = e),
            (t.add = function (t) {
              e.includes(t) || e.push(t);
            }),
            (t.delete = function (t) {
              const n = e.indexOf(t);
              ~n && e.splice(n, 1);
            }),
            (t.pause = function () {
              return I(e, (e) => e.pause(...arguments)), this;
            }),
            (t.resume = function () {
              return I(e, (e) => e.resume(...arguments)), this;
            }),
            (t.set = function (t) {
              I(e, (e, n) => {
                const s = A.fun(t) ? t(n, e) : t;
                s && e.set(s);
              });
            }),
            (t.start = function (t) {
              const n = [];
              return (
                I(e, (e, s) => {
                  if (A.und(t)) n.push(e.start());
                  else {
                    const r = this._getProps(t, e, s);
                    r && n.push(e.start(r));
                  }
                }),
                n
              );
            }),
            (t.stop = function () {
              return I(e, (e) => e.stop(...arguments)), this;
            }),
            (t.update = function (t) {
              return I(e, (e, n) => e.update(this._getProps(t, e, n))), this;
            });
          const n = function (e, t, n) {
            return A.fun(e) ? e(n, t) : e;
          };
          return (t._getProps = n), t;
        };
      function bn(e, t, n) {
        const s = A.fun(t) && t;
        s && !n && (n = []);
        const r = (0, _.useMemo)(
            () => (s || 3 == arguments.length ? vn() : void 0),
            [],
          ),
          a = (0, _.useRef)(0),
          i = Ze(),
          o = (0, _.useMemo)(
            () => ({
              ctrls: [],
              queue: [],
              flush(e, t) {
                const n = hn(e, t);
                return a.current > 0 &&
                  !o.queue.length &&
                  !Object.keys(n).some((t) => !e.springs[t])
                  ? ln(e, t)
                  : new Promise((s) => {
                      pn(e, n),
                        o.queue.push(() => {
                          s(ln(e, t));
                        }),
                        i();
                    });
              },
            }),
            [],
          ),
          u = (0, _.useRef)([...o.ctrls]),
          c = (0, _.useRef)([]),
          l = He(e) || 0;
        function d(e, n) {
          for (let r = e; r < n; r++) {
            const e = u.current[r] || (u.current[r] = new cn(null, o.flush)),
              n = s ? s(r, e) : t[r];
            n && (c.current[r] = tn(n));
          }
        }
        (0, _.useMemo)(() => {
          I(u.current.slice(e, l), (e) => {
            xt(e, r), e.stop(!0);
          }),
            (u.current.length = e),
            d(l, e);
        }, [e]),
          (0, _.useMemo)(() => {
            d(0, Math.min(l, e));
          }, n);
        const h = u.current.map((e, t) => hn(e, c.current[t])),
          p = (0, _.useContext)(yn),
          f = He(p),
          m = p !== f && Mt(p);
        Ge(() => {
          a.current++, (o.ctrls = u.current);
          const { queue: e } = o;
          e.length && ((o.queue = []), I(e, (e) => e())),
            I(u.current, (e, t) => {
              r?.add(e), m && e.start({ default: p });
              const n = c.current[t];
              n && (It(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
            });
        }),
          Ke(() => () => {
            I(o.ctrls, (e) => e.stop(!0));
          });
        const g = h.map((e) => ({ ...e }));
        return r ? [g, r] : g;
      }
      function wn(e, t) {
        const n = A.fun(e),
          [[s], r] = bn(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [s, r] : s;
      }
      var _n = class extends Lt {
        constructor(e, t) {
          super(),
            (this.source = e),
            (this.idle = !0),
            (this._active = new Set()),
            (this.calc = he(...t));
          const n = this._get(),
            s = ct(n);
          et(this, s.create(n));
        }
        advance(e) {
          const t = this._get();
          x(t, this.get()) ||
            (Ye(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && Pn(this._active) && Mn(this);
        }
        _get() {
          const e = A.arr(this.source)
            ? this.source.map(Pe)
            : C(Pe(this.source));
          return this.calc(...e);
        }
        _start() {
          this.idle &&
            !Pn(this._active) &&
            ((this.idle = !1),
            I(tt(this), (e) => {
              e.done = !1;
            }),
            P.skipAnimation
              ? (r.batchedUpdates(() => this.advance()), Mn(this))
              : D.start(this));
        }
        _attach() {
          let e = 1;
          I(C(this.source), (t) => {
            ke(t) && Se(t, this),
              Ut(t) &&
                (t.idle || this._active.add(t),
                (e = Math.max(e, t.priority + 1)));
          }),
            (this.priority = e),
            this._start();
        }
        _detach() {
          I(C(this.source), (e) => {
            ke(e) && Ce(e, this);
          }),
            this._active.clear(),
            Mn(this);
        }
        eventObserved(e) {
          "change" == e.type
            ? e.idle
              ? this.advance()
              : (this._active.add(e.parent), this._start())
            : "idle" == e.type
              ? this._active.delete(e.parent)
              : "priority" == e.type &&
                (this.priority = C(this.source).reduce(
                  (e, t) => Math.max(e, (Ut(t) ? t.priority : 0) + 1),
                  0,
                ));
        }
      };
      function kn(e) {
        return !1 !== e.idle;
      }
      function Pn(e) {
        return !e.size || Array.from(e).every(kn);
      }
      function Mn(e) {
        e.idle ||
          ((e.idle = !0),
          I(tt(e), (e) => {
            e.done = !0;
          }),
          Ae(e, { type: "idle", parent: e }));
      }
      P.assign({ createStringInterpolator: Qe, to: (e, t) => new _n(e, t) });
      D.advance;
      var An = n(72739),
        xn = /^--/;
      function In(e, t) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : "number" != typeof t ||
              0 === t ||
              xn.test(e) ||
              (Cn.hasOwnProperty(e) && Cn[e])
            ? ("" + t).trim()
            : t + "px";
      }
      var Sn = {};
      var Cn = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        On = ["Webkit", "Ms", "Moz", "O"];
      Cn = Object.keys(Cn).reduce(
        (e, t) => (
          On.forEach(
            (n) =>
              (e[
                ((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)
              ] = e[t]),
          ),
          e
        ),
        Cn,
      );
      var Rn = /^(matrix|translate|scale|rotate|skew)/,
        Vn = /^(translate)/,
        En = /^(rotate|skew)/,
        jn = (e, t) => (A.num(e) && 0 !== e ? e + t : e),
        qn = (e, t) =>
          A.arr(e)
            ? e.every((e) => qn(e, t))
            : A.num(e)
              ? e === t
              : parseFloat(e) === t,
        $n = class extends it {
          constructor({ x: e, y: t, z: n, ...s }) {
            const r = [],
              a = [];
            (e || t || n) &&
              (r.push([e || 0, t || 0, n || 0]),
              a.push((e) => [
                `translate3d(${e.map((e) => jn(e, "px")).join(",")})`,
                qn(e, 0),
              ])),
              S(s, (e, t) => {
                if ("transform" === t)
                  r.push([e || ""]), a.push((e) => [e, "" === e]);
                else if (Rn.test(t)) {
                  if ((delete s[t], A.und(e))) return;
                  const n = Vn.test(t) ? "px" : En.test(t) ? "deg" : "";
                  r.push(C(e)),
                    a.push(
                      "rotate3d" === t
                        ? ([e, t, s, r]) => [
                            `rotate3d(${e},${t},${s},${jn(r, n)})`,
                            qn(r, 0),
                          ]
                        : (e) => [
                            `${t}(${e.map((e) => jn(e, n)).join(",")})`,
                            qn(e, t.startsWith("scale") ? 1 : 0),
                          ],
                    );
                }
              }),
              r.length && (s.transform = new zn(r, a)),
              super(s);
          }
        },
        zn = class extends xe {
          constructor(e, t) {
            super(),
              (this.inputs = e),
              (this.transforms = t),
              (this._value = null);
          }
          get() {
            return this._value || (this._value = this._get());
          }
          _get() {
            let e = "",
              t = !0;
            return (
              I(this.inputs, (n, s) => {
                const r = Pe(n[0]),
                  [a, i] = this.transforms[s](A.arr(r) ? r : n.map(Pe));
                (e += " " + a), (t = t && i);
              }),
              t ? "none" : e
            );
          }
          observerAdded(e) {
            1 == e && I(this.inputs, (e) => I(e, (e) => ke(e) && Se(e, this)));
          }
          observerRemoved(e) {
            0 == e && I(this.inputs, (e) => I(e, (e) => ke(e) && Ce(e, this)));
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Ae(this, e);
          }
        };
      P.assign({
        batchedUpdates: An.unstable_batchedUpdates,
        createStringInterpolator: Qe,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
      });
      var Fn = ((
          e,
          {
            applyAnimatedValues: t = () => !1,
            createAnimatedStyle: n = (e) => new it(e),
            getComponentProps: s = (e) => e,
          } = {},
        ) => {
          const r = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: s,
            },
            a = (e) => {
              const t = pt(e) || "Anonymous";
              return (
                ((e = A.str(e)
                  ? a[e] || (a[e] = lt(e, r))
                  : e[ht] || (e[ht] = lt(e, r))).displayName =
                  `Animated(${t})`),
                e
              );
            };
          return (
            S(e, (t, n) => {
              A.arr(e) && (n = pt(t)), (a[n] = a(t));
            }),
            { animated: a }
          );
        })(
          [
            "a",
            "abbr",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "base",
            "bdi",
            "bdo",
            "big",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "cite",
            "code",
            "col",
            "colgroup",
            "data",
            "datalist",
            "dd",
            "del",
            "details",
            "dfn",
            "dialog",
            "div",
            "dl",
            "dt",
            "em",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "iframe",
            "img",
            "input",
            "ins",
            "kbd",
            "keygen",
            "label",
            "legend",
            "li",
            "link",
            "main",
            "map",
            "mark",
            "menu",
            "menuitem",
            "meta",
            "meter",
            "nav",
            "noscript",
            "object",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "param",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "script",
            "section",
            "select",
            "small",
            "source",
            "span",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "title",
            "tr",
            "track",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
            "circle",
            "clipPath",
            "defs",
            "ellipse",
            "foreignObject",
            "g",
            "image",
            "line",
            "linearGradient",
            "mask",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "stop",
            "svg",
            "text",
            "tspan",
          ],
          {
            applyAnimatedValues: function (e, t) {
              if (!e.nodeType || !e.setAttribute) return !1;
              const n =
                  "filter" === e.nodeName ||
                  (e.parentNode && "filter" === e.parentNode.nodeName),
                {
                  className: s,
                  style: r,
                  children: a,
                  scrollTop: i,
                  scrollLeft: o,
                  viewBox: u,
                  ...c
                } = t,
                l = Object.values(c),
                d = Object.keys(c).map((t) =>
                  n || e.hasAttribute(t)
                    ? t
                    : Sn[t] ||
                      (Sn[t] = t.replace(
                        /([A-Z])/g,
                        (e) => "-" + e.toLowerCase(),
                      )),
                );
              void 0 !== a && (e.textContent = a);
              for (const t in r)
                if (r.hasOwnProperty(t)) {
                  const n = In(t, r[t]);
                  xn.test(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
                }
              d.forEach((t, n) => {
                e.setAttribute(t, l[n]);
              }),
                void 0 !== s && (e.className = s),
                void 0 !== i && (e.scrollTop = i),
                void 0 !== o && (e.scrollLeft = o),
                void 0 !== u && e.setAttribute("viewBox", u);
            },
            createAnimatedStyle: (e) => new $n(e),
            getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
          },
        ),
        Nn = Fn.animated;
    },
  },
]);

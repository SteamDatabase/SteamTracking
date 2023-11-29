/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [744],
  {
    68598: (t) => {
      var e = {
        px: {
          px: 1,
          cm: 96 / 2.54,
          mm: 96 / 25.4,
          in: 96,
          pt: 96 / 72,
          pc: 16,
        },
        cm: {
          px: 2.54 / 96,
          cm: 1,
          mm: 0.1,
          in: 2.54,
          pt: 2.54 / 72,
          pc: 2.54 / 6,
        },
        mm: {
          px: 25.4 / 96,
          cm: 10,
          mm: 1,
          in: 25.4,
          pt: 25.4 / 72,
          pc: 25.4 / 6,
        },
        in: {
          px: 1 / 96,
          cm: 1 / 2.54,
          mm: 1 / 25.4,
          in: 1,
          pt: 1 / 72,
          pc: 1 / 6,
        },
        pt: { px: 0.75, cm: 72 / 2.54, mm: 72 / 25.4, in: 72, pt: 1, pc: 12 },
        pc: {
          px: 6 / 96,
          cm: 6 / 2.54,
          mm: 6 / 25.4,
          in: 6,
          pt: 6 / 72,
          pc: 1,
        },
        deg: { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 },
        grad: { deg: 400 / 360, grad: 1, rad: 200 / Math.PI, turn: 400 },
        rad: {
          deg: Math.PI / 180,
          grad: Math.PI / 200,
          rad: 1,
          turn: 2 * Math.PI,
        },
        turn: { deg: 1 / 360, grad: 1 / 400, rad: 0.5 / Math.PI, turn: 1 },
        s: { s: 1, ms: 0.001 },
        ms: { s: 1e3, ms: 1 },
        Hz: { Hz: 1, kHz: 1e3 },
        kHz: { Hz: 0.001, kHz: 1 },
        dpi: { dpi: 1, dpcm: 1 / 2.54, dppx: 1 / 96 },
        dpcm: { dpi: 2.54, dpcm: 1, dppx: 2.54 / 96 },
        dppx: { dpi: 96, dpcm: 96 / 2.54, dppx: 1 },
      };
      t.exports = function (t, r, n, i) {
        if (!e.hasOwnProperty(n)) throw new Error("Cannot convert to " + n);
        if (!e[n].hasOwnProperty(r))
          throw new Error("Cannot convert from " + r + " to " + n);
        var o = e[n][r] * t;
        return !1 !== i
          ? ((i = Math.pow(10, parseInt(i) || 5)), Math.round(o * i) / i)
          : o;
      };
    },
    26058: function (t, e, r) {
      var n;
      /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */ !(function (
        i,
      ) {
        "use strict";
        var o,
          a = 1e9,
          u = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
          },
          c = !0,
          l = "[DecimalError] ",
          s = l + "Invalid argument: ",
          f = l + "Exponent out of range: ",
          p = Math.floor,
          h = Math.pow,
          d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          y = 1e7,
          v = 7,
          m = 9007199254740991,
          g = p(m / v),
          b = {};
        function x(t, e) {
          var r,
            n,
            i,
            o,
            a,
            u,
            l,
            s,
            f = t.constructor,
            p = f.precision;
          if (!t.s || !e.s) return e.s || (e = new f(t)), c ? M(e, p) : e;
          if (
            ((l = t.d),
            (s = e.d),
            (a = t.e),
            (i = e.e),
            (l = l.slice()),
            (o = a - i))
          ) {
            for (
              o < 0
                ? ((n = l), (o = -o), (u = s.length))
                : ((n = s), (i = a), (u = l.length)),
                o > (u = (a = Math.ceil(p / v)) > u ? a + 1 : u + 1) &&
                  ((o = u), (n.length = 1)),
                n.reverse();
              o--;

            )
              n.push(0);
            n.reverse();
          }
          for (
            (u = l.length) - (o = s.length) < 0 &&
              ((o = u), (n = s), (s = l), (l = n)),
              r = 0;
            o;

          )
            (r = ((l[--o] = l[o] + s[o] + r) / y) | 0), (l[o] %= y);
          for (r && (l.unshift(r), ++i), u = l.length; 0 == l[--u]; ) l.pop();
          return (e.d = l), (e.e = i), c ? M(e, p) : e;
        }
        function w(t, e, r) {
          if (t !== ~~t || t < e || t > r) throw Error(s + t);
        }
        function O(t) {
          var e,
            r,
            n,
            i = t.length - 1,
            o = "",
            a = t[0];
          if (i > 0) {
            for (o += a, e = 1; e < i; e++)
              (n = t[e] + ""), (r = v - n.length) && (o += k(r)), (o += n);
            (a = t[e]), (r = v - (n = a + "").length) && (o += k(r));
          } else if (0 === a) return "0";
          for (; a % 10 == 0; ) a /= 10;
          return o + a;
        }
        (b.absoluteValue = b.abs =
          function () {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
          }),
          (b.comparedTo = b.cmp =
            function (t) {
              var e,
                r,
                n,
                i,
                o = this;
              if (((t = new o.constructor(t)), o.s !== t.s)) return o.s || -t.s;
              if (o.e !== t.e) return (o.e > t.e) ^ (o.s < 0) ? 1 : -1;
              for (
                e = 0, r = (n = o.d.length) < (i = t.d.length) ? n : i;
                e < r;
                ++e
              )
                if (o.d[e] !== t.d[e])
                  return (o.d[e] > t.d[e]) ^ (o.s < 0) ? 1 : -1;
              return n === i ? 0 : (n > i) ^ (o.s < 0) ? 1 : -1;
            }),
          (b.decimalPlaces = b.dp =
            function () {
              var t = this,
                e = t.d.length - 1,
                r = (e - t.e) * v;
              if ((e = t.d[e])) for (; e % 10 == 0; e /= 10) r--;
              return r < 0 ? 0 : r;
            }),
          (b.dividedBy = b.div =
            function (t) {
              return S(this, new this.constructor(t));
            }),
          (b.dividedToIntegerBy = b.idiv =
            function (t) {
              var e = this.constructor;
              return M(S(this, new e(t), 0, 1), e.precision);
            }),
          (b.equals = b.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (b.exponent = function () {
            return _(this);
          }),
          (b.greaterThan = b.gt =
            function (t) {
              return this.cmp(t) > 0;
            }),
          (b.greaterThanOrEqualTo = b.gte =
            function (t) {
              return this.cmp(t) >= 0;
            }),
          (b.isInteger = b.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (b.isNegative = b.isneg =
            function () {
              return this.s < 0;
            }),
          (b.isPositive = b.ispos =
            function () {
              return this.s > 0;
            }),
          (b.isZero = function () {
            return 0 === this.s;
          }),
          (b.lessThan = b.lt =
            function (t) {
              return this.cmp(t) < 0;
            }),
          (b.lessThanOrEqualTo = b.lte =
            function (t) {
              return this.cmp(t) < 1;
            }),
          (b.logarithm = b.log =
            function (t) {
              var e,
                r = this,
                n = r.constructor,
                i = n.precision,
                a = i + 5;
              if (void 0 === t) t = new n(10);
              else if ((t = new n(t)).s < 1 || t.eq(o)) throw Error(l + "NaN");
              if (r.s < 1) throw Error(l + (r.s ? "NaN" : "-Infinity"));
              return r.eq(o)
                ? new n(0)
                : ((c = !1), (e = S(A(r, a), A(t, a), a)), (c = !0), M(e, i));
            }),
          (b.minus = b.sub =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? T(e, t) : x(e, ((t.s = -t.s), t))
              );
            }),
          (b.modulo = b.mod =
            function (t) {
              var e,
                r = this,
                n = r.constructor,
                i = n.precision;
              if (!(t = new n(t)).s) throw Error(l + "NaN");
              return r.s
                ? ((c = !1), (e = S(r, t, 0, 1).times(t)), (c = !0), r.minus(e))
                : M(new n(r), i);
            }),
          (b.naturalExponential = b.exp =
            function () {
              return j(this);
            }),
          (b.naturalLogarithm = b.ln =
            function () {
              return A(this);
            }),
          (b.negated = b.neg =
            function () {
              var t = new this.constructor(this);
              return (t.s = -t.s || 0), t;
            }),
          (b.plus = b.add =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? x(e, t) : T(e, ((t.s = -t.s), t))
              );
            }),
          (b.precision = b.sd =
            function (t) {
              var e,
                r,
                n,
                i = this;
              if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
                throw Error(s + t);
              if (
                ((e = _(i) + 1),
                (r = (n = i.d.length - 1) * v + 1),
                (n = i.d[n]))
              ) {
                for (; n % 10 == 0; n /= 10) r--;
                for (n = i.d[0]; n >= 10; n /= 10) r++;
              }
              return t && e > r ? e : r;
            }),
          (b.squareRoot = b.sqrt =
            function () {
              var t,
                e,
                r,
                n,
                i,
                o,
                a,
                u = this,
                s = u.constructor;
              if (u.s < 1) {
                if (!u.s) return new s(0);
                throw Error(l + "NaN");
              }
              for (
                t = _(u),
                  c = !1,
                  0 == (i = Math.sqrt(+u)) || i == 1 / 0
                    ? (((e = O(u.d)).length + t) % 2 == 0 && (e += "0"),
                      (i = Math.sqrt(e)),
                      (t = p((t + 1) / 2) - (t < 0 || t % 2)),
                      (n = new s(
                        (e =
                          i == 1 / 0
                            ? "5e" + t
                            : (e = i.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1,
                              ) + t),
                      )))
                    : (n = new s(i.toString())),
                  i = a = (r = s.precision) + 3;
                ;

              )
                if (
                  ((n = (o = n).plus(S(u, o, a + 2)).times(0.5)),
                  O(o.d).slice(0, a) === (e = O(n.d)).slice(0, a))
                ) {
                  if (((e = e.slice(a - 3, a + 1)), i == a && "4999" == e)) {
                    if ((M(o, r + 1, 0), o.times(o).eq(u))) {
                      n = o;
                      break;
                    }
                  } else if ("9999" != e) break;
                  a += 4;
                }
              return (c = !0), M(n, r);
            }),
          (b.times = b.mul =
            function (t) {
              var e,
                r,
                n,
                i,
                o,
                a,
                u,
                l,
                s,
                f = this,
                p = f.constructor,
                h = f.d,
                d = (t = new p(t)).d;
              if (!f.s || !t.s) return new p(0);
              for (
                t.s *= f.s,
                  r = f.e + t.e,
                  (l = h.length) < (s = d.length) &&
                    ((o = h), (h = d), (d = o), (a = l), (l = s), (s = a)),
                  o = [],
                  n = a = l + s;
                n--;

              )
                o.push(0);
              for (n = s; --n >= 0; ) {
                for (e = 0, i = l + n; i > n; )
                  (u = o[i] + d[n] * h[i - n - 1] + e),
                    (o[i--] = u % y | 0),
                    (e = (u / y) | 0);
                o[i] = (o[i] + e) % y | 0;
              }
              for (; !o[--a]; ) o.pop();
              return (
                e ? ++r : o.shift(),
                (t.d = o),
                (t.e = r),
                c ? M(t, p.precision) : t
              );
            }),
          (b.toDecimalPlaces = b.todp =
            function (t, e) {
              var r = this,
                n = r.constructor;
              return (
                (r = new n(r)),
                void 0 === t
                  ? r
                  : (w(t, 0, a),
                    void 0 === e ? (e = n.rounding) : w(e, 0, 8),
                    M(r, t + _(r) + 1, e))
              );
            }),
          (b.toExponential = function (t, e) {
            var r,
              n = this,
              i = n.constructor;
            return (
              void 0 === t
                ? (r = C(n, !0))
                : (w(t, 0, a),
                  void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                  (r = C((n = M(new i(n), t + 1, e)), !0, t + 1))),
              r
            );
          }),
          (b.toFixed = function (t, e) {
            var r,
              n,
              i = this,
              o = i.constructor;
            return void 0 === t
              ? C(i)
              : (w(t, 0, a),
                void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                (r = C(
                  (n = M(new o(i), t + _(i) + 1, e)).abs(),
                  !1,
                  t + _(n) + 1,
                )),
                i.isneg() && !i.isZero() ? "-" + r : r);
          }),
          (b.toInteger = b.toint =
            function () {
              var t = this,
                e = t.constructor;
              return M(new e(t), _(t) + 1, e.rounding);
            }),
          (b.toNumber = function () {
            return +this;
          }),
          (b.toPower = b.pow =
            function (t) {
              var e,
                r,
                n,
                i,
                a,
                u,
                s = this,
                f = s.constructor,
                h = +(t = new f(t));
              if (!t.s) return new f(o);
              if (!(s = new f(s)).s) {
                if (t.s < 1) throw Error(l + "Infinity");
                return s;
              }
              if (s.eq(o)) return s;
              if (((n = f.precision), t.eq(o))) return M(s, n);
              if (((u = (e = t.e) >= (r = t.d.length - 1)), (a = s.s), u)) {
                if ((r = h < 0 ? -h : h) <= m) {
                  for (
                    i = new f(o), e = Math.ceil(n / v + 4), c = !1;
                    r % 2 && I((i = i.times(s)).d, e), 0 !== (r = p(r / 2));

                  )
                    I((s = s.times(s)).d, e);
                  return (c = !0), t.s < 0 ? new f(o).div(i) : M(i, n);
                }
              } else if (a < 0) throw Error(l + "NaN");
              return (
                (a = a < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
                (s.s = 1),
                (c = !1),
                (i = t.times(A(s, n + 12))),
                (c = !0),
                ((i = j(i)).s = a),
                i
              );
            }),
          (b.toPrecision = function (t, e) {
            var r,
              n,
              i = this,
              o = i.constructor;
            return (
              void 0 === t
                ? (n = C(i, (r = _(i)) <= o.toExpNeg || r >= o.toExpPos))
                : (w(t, 1, a),
                  void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                  (n = C(
                    (i = M(new o(i), t, e)),
                    t <= (r = _(i)) || r <= o.toExpNeg,
                    t,
                  ))),
              n
            );
          }),
          (b.toSignificantDigits = b.tosd =
            function (t, e) {
              var r = this.constructor;
              return (
                void 0 === t
                  ? ((t = r.precision), (e = r.rounding))
                  : (w(t, 1, a), void 0 === e ? (e = r.rounding) : w(e, 0, 8)),
                M(new r(this), t, e)
              );
            }),
          (b.toString =
            b.valueOf =
            b.val =
            b.toJSON =
              function () {
                var t = this,
                  e = _(t),
                  r = t.constructor;
                return C(t, e <= r.toExpNeg || e >= r.toExpPos);
              });
        var S = (function () {
          function t(t, e) {
            var r,
              n = 0,
              i = t.length;
            for (t = t.slice(); i--; )
              (r = t[i] * e + n), (t[i] = r % y | 0), (n = (r / y) | 0);
            return n && t.unshift(n), t;
          }
          function e(t, e, r, n) {
            var i, o;
            if (r != n) o = r > n ? 1 : -1;
            else
              for (i = o = 0; i < r; i++)
                if (t[i] != e[i]) {
                  o = t[i] > e[i] ? 1 : -1;
                  break;
                }
            return o;
          }
          function r(t, e, r) {
            for (var n = 0; r--; )
              (t[r] -= n),
                (n = t[r] < e[r] ? 1 : 0),
                (t[r] = n * y + t[r] - e[r]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (n, i, o, a) {
            var u,
              c,
              s,
              f,
              p,
              h,
              d,
              m,
              g,
              b,
              x,
              w,
              O,
              S,
              j,
              P,
              k,
              A,
              E = n.constructor,
              T = n.s == i.s ? 1 : -1,
              C = n.d,
              I = i.d;
            if (!n.s) return new E(n);
            if (!i.s) throw Error(l + "Division by zero");
            for (
              c = n.e - i.e,
                k = I.length,
                j = C.length,
                m = (d = new E(T)).d = [],
                s = 0;
              I[s] == (C[s] || 0);

            )
              ++s;
            if (
              (I[s] > (C[s] || 0) && --c,
              (w =
                null == o ? (o = E.precision) : a ? o + (_(n) - _(i)) + 1 : o) <
                0)
            )
              return new E(0);
            if (((w = (w / v + 2) | 0), (s = 0), 1 == k))
              for (f = 0, I = I[0], w++; (s < j || f) && w--; s++)
                (O = f * y + (C[s] || 0)),
                  (m[s] = (O / I) | 0),
                  (f = O % I | 0);
            else {
              for (
                (f = (y / (I[0] + 1)) | 0) > 1 &&
                  ((I = t(I, f)),
                  (C = t(C, f)),
                  (k = I.length),
                  (j = C.length)),
                  S = k,
                  b = (g = C.slice(0, k)).length;
                b < k;

              )
                g[b++] = 0;
              (A = I.slice()).unshift(0), (P = I[0]), I[1] >= y / 2 && ++P;
              do {
                (f = 0),
                  (u = e(I, g, k, b)) < 0
                    ? ((x = g[0]),
                      k != b && (x = x * y + (g[1] || 0)),
                      (f = (x / P) | 0) > 1
                        ? (f >= y && (f = y - 1),
                          1 ==
                            (u = e(
                              (p = t(I, f)),
                              g,
                              (h = p.length),
                              (b = g.length),
                            )) && (f--, r(p, k < h ? A : I, h)))
                        : (0 == f && (u = f = 1), (p = I.slice())),
                      (h = p.length) < b && p.unshift(0),
                      r(g, p, b),
                      -1 == u &&
                        (u = e(I, g, k, (b = g.length))) < 1 &&
                        (f++, r(g, k < b ? A : I, b)),
                      (b = g.length))
                    : 0 === u && (f++, (g = [0])),
                  (m[s++] = f),
                  u && g[0] ? (g[b++] = C[S] || 0) : ((g = [C[S]]), (b = 1));
              } while ((S++ < j || void 0 !== g[0]) && w--);
            }
            return m[0] || m.shift(), (d.e = c), M(d, a ? o + _(d) + 1 : o);
          };
        })();
        function j(t, e) {
          var r,
            n,
            i,
            a,
            u,
            l = 0,
            s = 0,
            p = t.constructor,
            d = p.precision;
          if (_(t) > 16) throw Error(f + _(t));
          if (!t.s) return new p(o);
          for (
            null == e ? ((c = !1), (u = d)) : (u = e), a = new p(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(a)), (s += 5);
          for (
            u += ((Math.log(h(2, s)) / Math.LN10) * 2 + 5) | 0,
              r = n = i = new p(o),
              p.precision = u;
            ;

          ) {
            if (
              ((n = M(n.times(t), u)),
              (r = r.times(++l)),
              O((a = i.plus(S(n, r, u))).d).slice(0, u) === O(i.d).slice(0, u))
            ) {
              for (; s--; ) i = M(i.times(i), u);
              return (p.precision = d), null == e ? ((c = !0), M(i, d)) : i;
            }
            i = a;
          }
        }
        function _(t) {
          for (var e = t.e * v, r = t.d[0]; r >= 10; r /= 10) e++;
          return e;
        }
        function P(t, e, r) {
          if (e > t.LN10.sd())
            throw (
              ((c = !0),
              r && (t.precision = r),
              Error(l + "LN10 precision limit exceeded"))
            );
          return M(new t(t.LN10), e);
        }
        function k(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function A(t, e) {
          var r,
            n,
            i,
            a,
            u,
            s,
            f,
            p,
            h,
            d = 1,
            y = t,
            v = y.d,
            m = y.constructor,
            g = m.precision;
          if (y.s < 1) throw Error(l + (y.s ? "NaN" : "-Infinity"));
          if (y.eq(o)) return new m(0);
          if ((null == e ? ((c = !1), (p = g)) : (p = e), y.eq(10)))
            return null == e && (c = !0), P(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (n = (r = O(v)).charAt(0)),
            (a = _(y)),
            !(Math.abs(a) < 15e14))
          )
            return (
              (f = P(m, p + 2, g).times(a + "")),
              (y = A(new m(n + "." + r.slice(1)), p - 10).plus(f)),
              (m.precision = g),
              null == e ? ((c = !0), M(y, g)) : y
            );
          for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
            (n = (r = O((y = y.times(t)).d)).charAt(0)), d++;
          for (
            a = _(y),
              n > 1
                ? ((y = new m("0." + r)), a++)
                : (y = new m(n + "." + r.slice(1))),
              s = u = y = S(y.minus(o), y.plus(o), p),
              h = M(y.times(y), p),
              i = 3;
            ;

          ) {
            if (
              ((u = M(u.times(h), p)),
              O((f = s.plus(S(u, new m(i), p))).d).slice(0, p) ===
                O(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== a && (s = s.plus(P(m, p + 2, g).times(a + ""))),
                (s = S(s, new m(d), p)),
                (m.precision = g),
                null == e ? ((c = !0), M(s, g)) : s
              );
            (s = f), (i += 2);
          }
        }
        function E(t, e) {
          var r, n, i;
          for (
            (r = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
              (n = e.search(/e/i)) > 0
                ? (r < 0 && (r = n),
                  (r += +e.slice(n + 1)),
                  (e = e.substring(0, n)))
                : r < 0 && (r = e.length),
              n = 0;
            48 === e.charCodeAt(n);

          )
            ++n;
          for (i = e.length; 48 === e.charCodeAt(i - 1); ) --i;
          if ((e = e.slice(n, i))) {
            if (
              ((i -= n),
              (r = r - n - 1),
              (t.e = p(r / v)),
              (t.d = []),
              (n = (r + 1) % v),
              r < 0 && (n += v),
              n < i)
            ) {
              for (n && t.d.push(+e.slice(0, n)), i -= v; n < i; )
                t.d.push(+e.slice(n, (n += v)));
              (e = e.slice(n)), (n = v - e.length);
            } else n -= i;
            for (; n--; ) e += "0";
            if ((t.d.push(+e), c && (t.e > g || t.e < -g))) throw Error(f + r);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function M(t, e, r) {
          var n,
            i,
            o,
            a,
            u,
            l,
            s,
            d,
            m = t.d;
          for (a = 1, o = m[0]; o >= 10; o /= 10) a++;
          if ((n = e - a) < 0) (n += v), (i = e), (s = m[(d = 0)]);
          else {
            if ((d = Math.ceil((n + 1) / v)) >= (o = m.length)) return t;
            for (s = o = m[d], a = 1; o >= 10; o /= 10) a++;
            i = (n %= v) - v + a;
          }
          if (
            (void 0 !== r &&
              ((u = (s / (o = h(10, a - i - 1))) % 10 | 0),
              (l = e < 0 || void 0 !== m[d + 1] || s % o),
              (l =
                r < 4
                  ? (u || l) && (0 == r || r == (t.s < 0 ? 3 : 2))
                  : u > 5 ||
                    (5 == u &&
                      (4 == r ||
                        l ||
                        (6 == r &&
                          (n > 0 ? (i > 0 ? s / h(10, a - i) : 0) : m[d - 1]) %
                            10 &
                            1) ||
                        r == (t.s < 0 ? 8 : 7))))),
            e < 1 || !m[0])
          )
            return (
              l
                ? ((o = _(t)),
                  (m.length = 1),
                  (e = e - o - 1),
                  (m[0] = h(10, (v - (e % v)) % v)),
                  (t.e = p(-e / v) || 0))
                : ((m.length = 1), (m[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == n
              ? ((m.length = d), (o = 1), d--)
              : ((m.length = d + 1),
                (o = h(10, v - n)),
                (m[d] = i > 0 ? ((s / h(10, a - i)) % h(10, i) | 0) * o : 0)),
            l)
          )
            for (;;) {
              if (0 == d) {
                (m[0] += o) == y && ((m[0] = 1), ++t.e);
                break;
              }
              if (((m[d] += o), m[d] != y)) break;
              (m[d--] = 0), (o = 1);
            }
          for (n = m.length; 0 === m[--n]; ) m.pop();
          if (c && (t.e > g || t.e < -g)) throw Error(f + _(t));
          return t;
        }
        function T(t, e) {
          var r,
            n,
            i,
            o,
            a,
            u,
            l,
            s,
            f,
            p,
            h = t.constructor,
            d = h.precision;
          if (!t.s || !e.s)
            return e.s ? (e.s = -e.s) : (e = new h(t)), c ? M(e, d) : e;
          if (
            ((l = t.d),
            (p = e.d),
            (n = e.e),
            (s = t.e),
            (l = l.slice()),
            (a = s - n))
          ) {
            for (
              (f = a < 0)
                ? ((r = l), (a = -a), (u = p.length))
                : ((r = p), (n = s), (u = l.length)),
                a > (i = Math.max(Math.ceil(d / v), u) + 2) &&
                  ((a = i), (r.length = 1)),
                r.reverse(),
                i = a;
              i--;

            )
              r.push(0);
            r.reverse();
          } else {
            for (
              (f = (i = l.length) < (u = p.length)) && (u = i), i = 0;
              i < u;
              i++
            )
              if (l[i] != p[i]) {
                f = l[i] < p[i];
                break;
              }
            a = 0;
          }
          for (
            f && ((r = l), (l = p), (p = r), (e.s = -e.s)),
              u = l.length,
              i = p.length - u;
            i > 0;
            --i
          )
            l[u++] = 0;
          for (i = p.length; i > a; ) {
            if (l[--i] < p[i]) {
              for (o = i; o && 0 === l[--o]; ) l[o] = y - 1;
              --l[o], (l[i] += y);
            }
            l[i] -= p[i];
          }
          for (; 0 === l[--u]; ) l.pop();
          for (; 0 === l[0]; l.shift()) --n;
          return l[0] ? ((e.d = l), (e.e = n), c ? M(e, d) : e) : new h(0);
        }
        function C(t, e, r) {
          var n,
            i = _(t),
            o = O(t.d),
            a = o.length;
          return (
            e
              ? (r && (n = r - a) > 0
                  ? (o = o.charAt(0) + "." + o.slice(1) + k(n))
                  : a > 1 && (o = o.charAt(0) + "." + o.slice(1)),
                (o = o + (i < 0 ? "e" : "e+") + i))
              : i < 0
              ? ((o = "0." + k(-i - 1) + o),
                r && (n = r - a) > 0 && (o += k(n)))
              : i >= a
              ? ((o += k(i + 1 - a)),
                r && (n = r - i - 1) > 0 && (o = o + "." + k(n)))
              : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)),
                r &&
                  (n = r - a) > 0 &&
                  (i + 1 === a && (o += "."), (o += k(n)))),
            t.s < 0 ? "-" + o : o
          );
        }
        function I(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function N(t) {
          if (!t || "object" != typeof t) throw Error(l + "Object expected");
          var e,
            r,
            n,
            i = [
              "precision",
              1,
              a,
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
          for (e = 0; e < i.length; e += 3)
            if (void 0 !== (n = t[(r = i[e])])) {
              if (!(p(n) === n && n >= i[e + 1] && n <= i[e + 2]))
                throw Error(s + r + ": " + n);
              this[r] = n;
            }
          if (void 0 !== (n = t[(r = "LN10")])) {
            if (n != Math.LN10) throw Error(s + r + ": " + n);
            this[r] = new this(n);
          }
          return this;
        }
        (u = (function t(e) {
          var r, n, i;
          function o(t) {
            var e = this;
            if (!(e instanceof o)) return new o(t);
            if (((e.constructor = o), t instanceof o))
              return (
                (e.s = t.s), (e.e = t.e), void (e.d = (t = t.d) ? t.slice() : t)
              );
            if ("number" == typeof t) {
              if (0 * t != 0) throw Error(s + t);
              if (t > 0) e.s = 1;
              else {
                if (!(t < 0)) return (e.s = 0), (e.e = 0), void (e.d = [0]);
                (t = -t), (e.s = -1);
              }
              return t === ~~t && t < 1e7
                ? ((e.e = 0), void (e.d = [t]))
                : E(e, t.toString());
            }
            if ("string" != typeof t) throw Error(s + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (e.s = -1))
                : (e.s = 1),
              !d.test(t))
            )
              throw Error(s + t);
            E(e, t);
          }
          if (
            ((o.prototype = b),
            (o.ROUND_UP = 0),
            (o.ROUND_DOWN = 1),
            (o.ROUND_CEIL = 2),
            (o.ROUND_FLOOR = 3),
            (o.ROUND_HALF_UP = 4),
            (o.ROUND_HALF_DOWN = 5),
            (o.ROUND_HALF_EVEN = 6),
            (o.ROUND_HALF_CEIL = 7),
            (o.ROUND_HALF_FLOOR = 8),
            (o.clone = t),
            (o.config = o.set = N),
            void 0 === e && (e = {}),
            e)
          )
            for (
              i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"],
                r = 0;
              r < i.length;

            )
              e.hasOwnProperty((n = i[r++])) || (e[n] = this[n]);
          return o.config(e), o;
        })(u)),
          (u.default = u.Decimal = u),
          (o = new u(1)),
          void 0 ===
            (n = function () {
              return u;
            }.call(e, r, e, t)) || (t.exports = n);
      })();
    },
    33034: (t) => {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function i(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function o(t, e, n, o, a) {
        if ("function" != typeof n)
          throw new TypeError("The listener must be a function");
        var u = new i(n, o || t, a),
          c = r ? r + e : e;
        return (
          t._events[c]
            ? t._events[c].fn
              ? (t._events[c] = [t._events[c], u])
              : t._events[c].push(u)
            : ((t._events[c] = u), t._eventsCount++),
          t
        );
      }
      function a(t, e) {
        0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
      }
      function u() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (u.prototype.eventNames = function () {
          var t,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (t = this._events))
            e.call(t, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (u.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, o = n.length, a = new Array(o); i < o; i++)
            a[i] = n[i].fn;
          return a;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (u.prototype.emit = function (t, e, n, i, o, a) {
          var u = r ? r + t : t;
          if (!this._events[u]) return !1;
          var c,
            l,
            s = this._events[u],
            f = arguments.length;
          if (s.fn) {
            switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
              case 1:
                return s.fn.call(s.context), !0;
              case 2:
                return s.fn.call(s.context, e), !0;
              case 3:
                return s.fn.call(s.context, e, n), !0;
              case 4:
                return s.fn.call(s.context, e, n, i), !0;
              case 5:
                return s.fn.call(s.context, e, n, i, o), !0;
              case 6:
                return s.fn.call(s.context, e, n, i, o, a), !0;
            }
            for (l = 1, c = new Array(f - 1); l < f; l++)
              c[l - 1] = arguments[l];
            s.fn.apply(s.context, c);
          } else {
            var p,
              h = s.length;
            for (l = 0; l < h; l++)
              switch (
                (s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f)
              ) {
                case 1:
                  s[l].fn.call(s[l].context);
                  break;
                case 2:
                  s[l].fn.call(s[l].context, e);
                  break;
                case 3:
                  s[l].fn.call(s[l].context, e, n);
                  break;
                case 4:
                  s[l].fn.call(s[l].context, e, n, i);
                  break;
                default:
                  if (!c)
                    for (p = 1, c = new Array(f - 1); p < f; p++)
                      c[p - 1] = arguments[p];
                  s[l].fn.apply(s[l].context, c);
              }
          }
          return !0;
        }),
        (u.prototype.on = function (t, e, r) {
          return o(this, t, e, r, !1);
        }),
        (u.prototype.once = function (t, e, r) {
          return o(this, t, e, r, !0);
        }),
        (u.prototype.removeListener = function (t, e, n, i) {
          var o = r ? r + t : t;
          if (!this._events[o]) return this;
          if (!e) return a(this, o), this;
          var u = this._events[o];
          if (u.fn)
            u.fn !== e ||
              (i && !u.once) ||
              (n && u.context !== n) ||
              a(this, o);
          else {
            for (var c = 0, l = [], s = u.length; c < s; c++)
              (u[c].fn !== e ||
                (i && !u[c].once) ||
                (n && u[c].context !== n)) &&
                l.push(u[c]);
            l.length
              ? (this._events[o] = 1 === l.length ? l[0] : l)
              : a(this, o);
          }
          return this;
        }),
        (u.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = r ? r + t : t), this._events[e] && a(this, e))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.addListener = u.prototype.on),
        (u.prefixed = r),
        (u.EventEmitter = u),
        (t.exports = u);
    },
    90929: (t) => {
      t.exports = function (t, e, r) {
        switch (r.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, r[0]);
          case 2:
            return t.call(e, r[0], r[1]);
          case 3:
            return t.call(e, r[0], r[1], r[2]);
        }
        return t.apply(e, r);
      };
    },
    10835: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
          if (!e(t[r], r, t)) return !1;
        return !0;
      };
    },
    1418: (t, e, r) => {
      var n = r(10031);
      t.exports = function (t, e) {
        return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1;
      };
    },
    36867: (t) => {
      t.exports = function (t, e, r) {
        for (var n = -1, i = null == t ? 0 : t.length; ++n < i; )
          if (r(e, t[n])) return !0;
        return !1;
      };
    },
    49333: (t) => {
      t.exports = function (t) {
        return t.split("");
      };
    },
    37258: (t, e, r) => {
      var n = r(5534);
      t.exports = function (t, e) {
        var r = !0;
        return (
          n(t, function (t, n, i) {
            return (r = !!e(t, n, i));
          }),
          r
        );
      };
    },
    13756: (t, e, r) => {
      var n = r(81878);
      t.exports = function (t, e, r) {
        for (var i = -1, o = t.length; ++i < o; ) {
          var a = t[i],
            u = e(a);
          if (null != u && (void 0 === c ? u == u && !n(u) : r(u, c)))
            var c = u,
              l = a;
        }
        return l;
      };
    },
    3670: (t) => {
      t.exports = function (t, e, r, n) {
        for (var i = t.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
          if (e(t[o], o, t)) return o;
        return -1;
      };
    },
    22153: (t, e, r) => {
      var n = r(52824),
        i = r(76648);
      t.exports = function t(e, r, o, a, u) {
        var c = -1,
          l = e.length;
        for (o || (o = i), u || (u = []); ++c < l; ) {
          var s = e[c];
          r > 0 && o(s)
            ? r > 1
              ? t(s, r - 1, o, a, u)
              : n(u, s)
            : a || (u[u.length] = s);
        }
        return u;
      };
    },
    75806: (t) => {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    10031: (t, e, r) => {
      var n = r(3670),
        i = r(148),
        o = r(60218);
      t.exports = function (t, e, r) {
        return e == e ? o(t, e, r) : n(t, i, r);
      };
    },
    148: (t) => {
      t.exports = function (t) {
        return t != t;
      };
    },
    30277: (t) => {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    95222: (t, e, r) => {
      var n = r(57041),
        i = r(51845),
        o = r(27159),
        a = r(20472),
        u = r(43032),
        c = r(2723),
        l = r(97099),
        s = r(41549),
        f = r(93706);
      t.exports = function (t, e, r) {
        e = e.length
          ? n(e, function (t) {
              return f(t)
                ? function (e) {
                    return i(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [s];
        var p = -1;
        e = n(e, c(o));
        var h = a(t, function (t, r, i) {
          return {
            criteria: n(e, function (e) {
              return e(t);
            }),
            index: ++p,
            value: t,
          };
        });
        return u(h, function (t, e) {
          return l(t, e, r);
        });
      };
    },
    68313: (t) => {
      var e = Math.ceil,
        r = Math.max;
      t.exports = function (t, n, i, o) {
        for (var a = -1, u = r(e((n - t) / (i || 1)), 0), c = Array(u); u--; )
          (c[o ? u : ++a] = t), (t += i);
        return c;
      };
    },
    10059: (t, e, r) => {
      var n = r(41549),
        i = r(53039),
        o = r(47209);
      t.exports = function (t, e) {
        return o(i(t, e, n), t + "");
      };
    },
    86920: (t, e, r) => {
      var n = r(80446),
        i = r(88689),
        o = r(41549),
        a = i
          ? function (t, e) {
              return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: n(e),
                writable: !0,
              });
            }
          : o;
      t.exports = a;
    },
    38163: (t) => {
      t.exports = function (t, e, r) {
        var n = -1,
          i = t.length;
        e < 0 && (e = -e > i ? 0 : i + e),
          (r = r > i ? i : r) < 0 && (r += i),
          (i = e > r ? 0 : (r - e) >>> 0),
          (e >>>= 0);
        for (var o = Array(i); ++n < i; ) o[n] = t[n + e];
        return o;
      };
    },
    27338: (t, e, r) => {
      var n = r(5534);
      t.exports = function (t, e) {
        var r;
        return (
          n(t, function (t, n, i) {
            return !(r = e(t, n, i));
          }),
          !!r
        );
      };
    },
    43032: (t) => {
      t.exports = function (t, e) {
        var r = t.length;
        for (t.sort(e); r--; ) t[r] = t[r].value;
        return t;
      };
    },
    12383: (t, e, r) => {
      var n = r(38725),
        i = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, n(t) + 1).replace(i, "") : t;
      };
    },
    88373: (t, e, r) => {
      var n = r(74868),
        i = r(1418),
        o = r(36867),
        a = r(67446),
        u = r(74533),
        c = r(76680);
      t.exports = function (t, e, r) {
        var l = -1,
          s = i,
          f = t.length,
          p = !0,
          h = [],
          d = h;
        if (r) (p = !1), (s = o);
        else if (f >= 200) {
          var y = e ? null : u(t);
          if (y) return c(y);
          (p = !1), (s = a), (d = new n());
        } else d = e ? [] : h;
        t: for (; ++l < f; ) {
          var v = t[l],
            m = e ? e(v) : v;
          if (((v = r || 0 !== v ? v : 0), p && m == m)) {
            for (var g = d.length; g--; ) if (d[g] === m) continue t;
            e && d.push(m), h.push(v);
          } else s(d, m, r) || (d !== h && d.push(m), h.push(v));
        }
        return h;
      };
    },
    26253: (t, e, r) => {
      var n = r(38163);
      t.exports = function (t, e, r) {
        var i = t.length;
        return (r = void 0 === r ? i : r), !e && r >= i ? t : n(t, e, r);
      };
    },
    37487: (t, e, r) => {
      var n = r(81878);
      t.exports = function (t, e) {
        if (t !== e) {
          var r = void 0 !== t,
            i = null === t,
            o = t == t,
            a = n(t),
            u = void 0 !== e,
            c = null === e,
            l = e == e,
            s = n(e);
          if (
            (!c && !s && !a && t > e) ||
            (a && u && l && !c && !s) ||
            (i && u && l) ||
            (!r && l) ||
            !o
          )
            return 1;
          if (
            (!i && !a && !s && t < e) ||
            (s && r && o && !i && !a) ||
            (c && r && o) ||
            (!u && o) ||
            !l
          )
            return -1;
        }
        return 0;
      };
    },
    97099: (t, e, r) => {
      var n = r(37487);
      t.exports = function (t, e, r) {
        for (
          var i = -1,
            o = t.criteria,
            a = e.criteria,
            u = o.length,
            c = r.length;
          ++i < u;

        ) {
          var l = n(o[i], a[i]);
          if (l) return i >= c ? l : l * ("desc" == r[i] ? -1 : 1);
        }
        return t.index - e.index;
      };
    },
    30847: (t, e, r) => {
      var n = r(26253),
        i = r(22773),
        o = r(88042),
        a = r(33270);
      t.exports = function (t) {
        return function (e) {
          e = a(e);
          var r = i(e) ? o(e) : void 0,
            u = r ? r[0] : e.charAt(0),
            c = r ? n(r, 1).join("") : e.slice(1);
          return u[t]() + c;
        };
      };
    },
    56717: (t, e, r) => {
      var n = r(27159),
        i = r(51528),
        o = r(23150);
      t.exports = function (t) {
        return function (e, r, a) {
          var u = Object(e);
          if (!i(e)) {
            var c = n(r, 3);
            (e = o(e)),
              (r = function (t) {
                return c(u[t], t, u);
              });
          }
          var l = t(e, r, a);
          return l > -1 ? u[c ? e[l] : l] : void 0;
        };
      };
    },
    21381: (t, e, r) => {
      var n = r(68313),
        i = r(38360),
        o = r(38024);
      t.exports = function (t) {
        return function (e, r, a) {
          return (
            a && "number" != typeof a && i(e, r, a) && (r = a = void 0),
            (e = o(e)),
            void 0 === r ? ((r = e), (e = 0)) : (r = o(r)),
            (a = void 0 === a ? (e < r ? 1 : -1) : o(a)),
            n(e, r, a, t)
          );
        };
      };
    },
    74533: (t, e, r) => {
      var n = r(80476),
        i = r(72055),
        o = r(76680),
        a =
          n && 1 / o(new n([, -0]))[1] == 1 / 0
            ? function (t) {
                return new n(t);
              }
            : i;
      t.exports = a;
    },
    22773: (t) => {
      var e = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    76648: (t, e, r) => {
      var n = r(44937),
        i = r(67016),
        o = r(93706),
        a = n ? n.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return o(t) || i(t) || !!(a && t && t[a]);
      };
    },
    38360: (t, e, r) => {
      var n = r(1316),
        i = r(51528),
        o = r(49699),
        a = r(23619);
      t.exports = function (t, e, r) {
        if (!a(r)) return !1;
        var u = typeof e;
        return (
          !!("number" == u
            ? i(r) && o(e, r.length)
            : "string" == u && e in r) && n(r[e], t)
        );
      };
    },
    53039: (t, e, r) => {
      var n = r(90929),
        i = Math.max;
      t.exports = function (t, e, r) {
        return (
          (e = i(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u);
              ++a < u;

            )
              c[a] = o[e + a];
            a = -1;
            for (var l = Array(e + 1); ++a < e; ) l[a] = o[a];
            return (l[e] = r(c)), n(t, this, l);
          }
        );
      };
    },
    47209: (t, e, r) => {
      var n = r(86920),
        i = r(10832)(n);
      t.exports = i;
    },
    10832: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var r = 0,
          n = 0;
        return function () {
          var i = e(),
            o = 16 - (i - n);
          if (((n = i), o > 0)) {
            if (++r >= 800) return arguments[0];
          } else r = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    60218: (t) => {
      t.exports = function (t, e, r) {
        for (var n = r - 1, i = t.length; ++n < i; ) if (t[n] === e) return n;
        return -1;
      };
    },
    88042: (t, e, r) => {
      var n = r(49333),
        i = r(22773),
        o = r(35642);
      t.exports = function (t) {
        return i(t) ? o(t) : n(t);
      };
    },
    38725: (t) => {
      var e = /\s/;
      t.exports = function (t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)); );
        return r;
      };
    },
    35642: (t) => {
      var e = "\\ud800-\\udfff",
        r = "[" + e + "]",
        n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^" + e + "]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + n + "|" + i + ")" + "?",
        l = "[\\ufe0e\\ufe0f]?",
        s =
          l + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")" + l + c + ")*"),
        f = "(?:" + [o + n + "?", n, a, u, r].join("|") + ")",
        p = RegExp(i + "(?=" + i + ")|" + f + s, "g");
      t.exports = function (t) {
        return t.match(p) || [];
      };
    },
    80446: (t) => {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    76897: (t, e, r) => {
      var n = r(23619),
        i = r(98253),
        o = r(95053),
        a = Math.max,
        u = Math.min;
      t.exports = function (t, e, r) {
        var c,
          l,
          s,
          f,
          p,
          h,
          d = 0,
          y = !1,
          v = !1,
          m = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function g(e) {
          var r = c,
            n = l;
          return (c = l = void 0), (d = e), (f = t.apply(n, r));
        }
        function b(t) {
          var r = t - h;
          return void 0 === h || r >= e || r < 0 || (v && t - d >= s);
        }
        function x() {
          var t = i();
          if (b(t)) return w(t);
          p = setTimeout(
            x,
            (function (t) {
              var r = e - (t - h);
              return v ? u(r, s - (t - d)) : r;
            })(t),
          );
        }
        function w(t) {
          return (p = void 0), m && c ? g(t) : ((c = l = void 0), f);
        }
        function O() {
          var t = i(),
            r = b(t);
          if (((c = arguments), (l = this), (h = t), r)) {
            if (void 0 === p)
              return (function (t) {
                return (d = t), (p = setTimeout(x, e)), y ? g(t) : f;
              })(h);
            if (v) return clearTimeout(p), (p = setTimeout(x, e)), g(h);
          }
          return void 0 === p && (p = setTimeout(x, e)), f;
        }
        return (
          (e = o(e) || 0),
          n(r) &&
            ((y = !!r.leading),
            (s = (v = "maxWait" in r) ? a(o(r.maxWait) || 0, e) : s),
            (m = "trailing" in r ? !!r.trailing : m)),
          (O.cancel = function () {
            void 0 !== p && clearTimeout(p), (d = 0), (c = h = l = p = void 0);
          }),
          (O.flush = function () {
            return void 0 === p ? f : w(i());
          }),
          O
        );
      };
    },
    70826: (t, e, r) => {
      var n = r(10835),
        i = r(37258),
        o = r(27159),
        a = r(93706),
        u = r(38360);
      t.exports = function (t, e, r) {
        var c = a(t) ? n : i;
        return r && u(t, e, r) && (e = void 0), c(t, o(e, 3));
      };
    },
    92210: (t, e, r) => {
      var n = r(56717)(r(2261));
      t.exports = n;
    },
    2261: (t, e, r) => {
      var n = r(3670),
        i = r(27159),
        o = r(28306),
        a = Math.max;
      t.exports = function (t, e, r) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == r ? 0 : o(r);
        return c < 0 && (c = a(u + c, 0)), n(t, i(e, 3), c);
      };
    },
    22610: (t, e, r) => {
      var n = r(22153),
        i = r(34118);
      t.exports = function (t, e) {
        return n(i(t, e), 1);
      };
    },
    23079: (t, e, r) => {
      var n = r(20194),
        i = r(81653);
      t.exports = function (t) {
        return !0 === t || !1 === t || (i(t) && "[object Boolean]" == n(t));
      };
    },
    47184: (t, e, r) => {
      var n = r(95372);
      t.exports = function (t, e) {
        return n(t, e);
      };
    },
    35813: (t, e, r) => {
      var n = r(47315);
      t.exports = function (t) {
        return n(t) && t != +t;
      };
    },
    51391: (t) => {
      t.exports = function (t) {
        return null == t;
      };
    },
    47315: (t, e, r) => {
      var n = r(20194),
        i = r(81653);
      t.exports = function (t) {
        return "number" == typeof t || (i(t) && "[object Number]" == n(t));
      };
    },
    80275: (t) => {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    40508: (t, e, r) => {
      var n = r(88039),
        i = r(29415),
        o = r(27159);
      t.exports = function (t, e) {
        var r = {};
        return (
          (e = o(e, 3)),
          i(t, function (t, i, o) {
            n(r, i, e(t, i, o));
          }),
          r
        );
      };
    },
    14019: (t, e, r) => {
      var n = r(13756),
        i = r(75806),
        o = r(41549);
      t.exports = function (t) {
        return t && t.length ? n(t, o, i) : void 0;
      };
    },
    73398: (t, e, r) => {
      var n = r(13756),
        i = r(30277),
        o = r(41549);
      t.exports = function (t) {
        return t && t.length ? n(t, o, i) : void 0;
      };
    },
    72055: (t) => {
      t.exports = function () {};
    },
    98253: (t, e, r) => {
      var n = r(158);
      t.exports = function () {
        return n.Date.now();
      };
    },
    58120: (t, e, r) => {
      var n = r(21381)();
      t.exports = n;
    },
    60479: (t, e, r) => {
      var n = r(99280),
        i = r(27159),
        o = r(27338),
        a = r(93706),
        u = r(38360);
      t.exports = function (t, e, r) {
        var c = a(t) ? n : o;
        return r && u(t, e, r) && (e = void 0), c(t, i(e, 3));
      };
    },
    65853: (t, e, r) => {
      var n = r(22153),
        i = r(95222),
        o = r(10059),
        a = r(38360),
        u = o(function (t, e) {
          if (null == t) return [];
          var r = e.length;
          return (
            r > 1 && a(t, e[0], e[1])
              ? (e = [])
              : r > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
            i(t, n(e, 1), [])
          );
        });
      t.exports = u;
    },
    38172: (t, e, r) => {
      var n = r(76897),
        i = r(23619);
      t.exports = function (t, e, r) {
        var o = !0,
          a = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (
          i(r) &&
            ((o = "leading" in r ? !!r.leading : o),
            (a = "trailing" in r ? !!r.trailing : a)),
          n(t, e, { leading: o, maxWait: e, trailing: a })
        );
      };
    },
    38024: (t, e, r) => {
      var n = r(95053),
        i = 1 / 0;
      t.exports = function (t) {
        return t
          ? (t = n(t)) === i || t === -1 / 0
            ? 17976931348623157e292 * (t < 0 ? -1 : 1)
            : t == t
            ? t
            : 0
          : 0 === t
          ? t
          : 0;
      };
    },
    28306: (t, e, r) => {
      var n = r(38024);
      t.exports = function (t) {
        var e = n(t),
          r = e % 1;
        return e == e ? (r ? e - r : e) : 0;
      };
    },
    95053: (t, e, r) => {
      var n = r(12383),
        i = r(23619),
        o = r(81878),
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (o(t)) return NaN;
        if (i(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = i(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = n(t);
        var r = u.test(t);
        return r || c.test(t) ? l(t.slice(2), r ? 2 : 8) : a.test(t) ? NaN : +t;
      };
    },
    80971: (t, e, r) => {
      var n = r(27159),
        i = r(88373);
      t.exports = function (t, e) {
        return t && t.length ? i(t, n(e, 2)) : [];
      };
    },
    43483: (t, e, r) => {
      var n = r(30847)("toUpperCase");
      t.exports = n;
    },
    59069: (t, e, r) => {
      var n = r(50027),
        i = r(46714),
        o = r(16895);
      function a(t) {
        return this instanceof a ? ((this.nodes = n(t)), this) : new a(t);
      }
      (a.prototype.toString = function () {
        return Array.isArray(this.nodes) ? o(this.nodes) : "";
      }),
        (a.prototype.walk = function (t, e) {
          return i(this.nodes, t, e), this;
        }),
        (a.unit = r(32280)),
        (a.walk = i),
        (a.stringify = o),
        (t.exports = a);
    },
    50027: (t) => {
      var e = "(".charCodeAt(0),
        r = ")".charCodeAt(0),
        n = "'".charCodeAt(0),
        i = '"'.charCodeAt(0),
        o = "\\".charCodeAt(0),
        a = "/".charCodeAt(0),
        u = ",".charCodeAt(0),
        c = ":".charCodeAt(0),
        l = "*".charCodeAt(0);
      t.exports = function (t) {
        for (
          var s,
            f,
            p,
            h,
            d,
            y,
            v,
            m,
            g = [],
            b = t,
            x = 0,
            w = b.charCodeAt(x),
            O = b.length,
            S = [{ nodes: g }],
            j = 0,
            _ = "",
            P = "",
            k = "";
          x < O;

        )
          if (w <= 32) {
            s = x;
            do {
              (s += 1), (w = b.charCodeAt(s));
            } while (w <= 32);
            (h = b.slice(x, s)),
              (p = g[g.length - 1]),
              w === r && j
                ? (k = h)
                : p && "div" === p.type
                ? (p.after = h)
                : w === u || w === c || (w === a && b.charCodeAt(s + 1) !== l)
                ? (P = h)
                : g.push({ type: "space", sourceIndex: x, value: h }),
              (x = s);
          } else if (w === n || w === i) {
            (s = x),
              (h = {
                type: "string",
                sourceIndex: x,
                quote: (f = w === n ? "'" : '"'),
              });
            do {
              if (((d = !1), ~(s = b.indexOf(f, s + 1))))
                for (y = s; b.charCodeAt(y - 1) === o; ) (y -= 1), (d = !d);
              else (s = (b += f).length - 1), (h.unclosed = !0);
            } while (d);
            (h.value = b.slice(x + 1, s)),
              g.push(h),
              (x = s + 1),
              (w = b.charCodeAt(x));
          } else if (w === a && b.charCodeAt(x + 1) === l)
            (h = { type: "comment", sourceIndex: x }),
              -1 === (s = b.indexOf("*/", x)) &&
                ((h.unclosed = !0), (s = b.length)),
              (h.value = b.slice(x + 2, s)),
              g.push(h),
              (x = s + 2),
              (w = b.charCodeAt(x));
          else if (w === a || w === u || w === c)
            (h = b[x]),
              g.push({
                type: "div",
                sourceIndex: x - P.length,
                value: h,
                before: P,
                after: "",
              }),
              (P = ""),
              (x += 1),
              (w = b.charCodeAt(x));
          else if (e === w) {
            s = x;
            do {
              (s += 1), (w = b.charCodeAt(s));
            } while (w <= 32);
            if (
              ((h = {
                type: "function",
                sourceIndex: x - _.length,
                value: _,
                before: b.slice(x + 1, s),
              }),
              (x = s),
              "url" === _ && w !== n && w !== i)
            ) {
              s -= 1;
              do {
                if (((d = !1), ~(s = b.indexOf(")", s + 1))))
                  for (y = s; b.charCodeAt(y - 1) === o; ) (y -= 1), (d = !d);
                else (s = (b += ")").length - 1), (h.unclosed = !0);
              } while (d);
              v = s;
              do {
                (v -= 1), (w = b.charCodeAt(v));
              } while (w <= 32);
              (h.nodes =
                x !== v + 1
                  ? [{ type: "word", sourceIndex: x, value: b.slice(x, v + 1) }]
                  : []),
                h.unclosed && v + 1 !== s
                  ? ((h.after = ""),
                    h.nodes.push({
                      type: "space",
                      sourceIndex: v + 1,
                      value: b.slice(v + 1, s),
                    }))
                  : (h.after = b.slice(v + 1, s)),
                (x = s + 1),
                (w = b.charCodeAt(x)),
                g.push(h);
            } else
              (j += 1),
                (h.after = ""),
                g.push(h),
                S.push(h),
                (g = h.nodes = []),
                (m = h);
            _ = "";
          } else if (r === w && j)
            (x += 1),
              (w = b.charCodeAt(x)),
              (m.after = k),
              (k = ""),
              (j -= 1),
              S.pop(),
              (g = (m = S[j]).nodes);
          else {
            s = x;
            do {
              w === o && (s += 1), (s += 1), (w = b.charCodeAt(s));
            } while (
              s < O &&
              !(
                w <= 32 ||
                w === n ||
                w === i ||
                w === u ||
                w === c ||
                w === a ||
                w === e ||
                (w === r && j)
              )
            );
            (h = b.slice(x, s)),
              e === w
                ? (_ = h)
                : g.push({ type: "word", sourceIndex: x, value: h }),
              (x = s);
          }
        for (x = S.length - 1; x; x -= 1) S[x].unclosed = !0;
        return S[0].nodes;
      };
    },
    16895: (t) => {
      function e(t, e) {
        var n,
          i,
          o = t.type,
          a = t.value;
        return e && void 0 !== (i = e(t))
          ? i
          : "word" === o || "space" === o
          ? a
          : "string" === o
          ? (n = t.quote || "") + a + (t.unclosed ? "" : n)
          : "comment" === o
          ? "/*" + a + (t.unclosed ? "" : "*/")
          : "div" === o
          ? (t.before || "") + a + (t.after || "")
          : Array.isArray(t.nodes)
          ? ((n = r(t.nodes)),
            "function" !== o
              ? n
              : a +
                "(" +
                (t.before || "") +
                n +
                (t.after || "") +
                (t.unclosed ? "" : ")"))
          : a;
      }
      function r(t, r) {
        var n, i;
        if (Array.isArray(t)) {
          for (n = "", i = t.length - 1; ~i; i -= 1) n = e(t[i], r) + n;
          return n;
        }
        return e(t, r);
      }
      t.exports = r;
    },
    32280: (t) => {
      var e = "-".charCodeAt(0),
        r = "+".charCodeAt(0),
        n = ".".charCodeAt(0),
        i = "e".charCodeAt(0),
        o = "E".charCodeAt(0);
      t.exports = function (t) {
        for (var a, u = 0, c = t.length, l = !1, s = -1, f = !1; u < c; ) {
          if ((a = t.charCodeAt(u)) >= 48 && a <= 57) f = !0;
          else if (a === i || a === o) {
            if (s > -1) break;
            s = u;
          } else if (a === n) {
            if (l) break;
            l = !0;
          } else {
            if (a !== r && a !== e) break;
            if (0 !== u) break;
          }
          u += 1;
        }
        return (
          s + 1 === u && u--, !!f && { number: t.slice(0, u), unit: t.slice(u) }
        );
      };
    },
    46714: (t) => {
      t.exports = function t(e, r, n) {
        var i, o, a, u;
        for (i = 0, o = e.length; i < o; i += 1)
          (a = e[i]),
            n || (u = r(a, i, e)),
            !1 !== u &&
              "function" === a.type &&
              Array.isArray(a.nodes) &&
              t(a.nodes, r, n),
            n && r(a, i, e);
      };
    },
    5722: (t, e, r) => {
      "use strict";
      r.d(e, { ZP: () => ue, bO: () => et });
      var n = r(89526),
        i = r(2652),
        o = r.n(i),
        a = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty;
      function l(t, e) {
        return function (r, n, i) {
          return t(r, n, i) && e(r, n, i);
        };
      }
      function s(t) {
        return function (e, r, n) {
          if (!e || !r || "object" != typeof e || "object" != typeof r)
            return t(e, r, n);
          var i = n.cache,
            o = i.get(e),
            a = i.get(r);
          if (o && a) return o === r && a === e;
          i.set(e, r), i.set(r, e);
          var u = t(e, r, n);
          return i.delete(e), i.delete(r), u;
        };
      }
      function f(t) {
        return a(t).concat(u(t));
      }
      var p =
        Object.hasOwn ||
        function (t, e) {
          return c.call(t, e);
        };
      function h(t, e) {
        return t || e ? t === e : t === e || (t != t && e != e);
      }
      var d = "_owner",
        y = Object.getOwnPropertyDescriptor,
        v = Object.keys;
      function m(t, e, r) {
        var n = t.length;
        if (e.length !== n) return !1;
        for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
        return !0;
      }
      function g(t, e) {
        return h(t.getTime(), e.getTime());
      }
      function b(t, e, r) {
        if (t.size !== e.size) return !1;
        for (
          var n, i, o = {}, a = t.entries(), u = 0;
          (n = a.next()) && !n.done;

        ) {
          for (
            var c = e.entries(), l = !1, s = 0;
            (i = c.next()) && !i.done;

          ) {
            var f = n.value,
              p = f[0],
              h = f[1],
              d = i.value,
              y = d[0],
              v = d[1];
            l ||
              o[s] ||
              !(l =
                r.equals(p, y, u, s, t, e, r) &&
                r.equals(h, v, p, y, t, e, r)) ||
              (o[s] = !0),
              s++;
          }
          if (!l) return !1;
          u++;
        }
        return !0;
      }
      function x(t, e, r) {
        var n,
          i = v(t),
          o = i.length;
        if (v(e).length !== o) return !1;
        for (; o-- > 0; ) {
          if (
            (n = i[o]) === d &&
            (t.$$typeof || e.$$typeof) &&
            t.$$typeof !== e.$$typeof
          )
            return !1;
          if (!p(e, n) || !r.equals(t[n], e[n], n, n, t, e, r)) return !1;
        }
        return !0;
      }
      function w(t, e, r) {
        var n,
          i,
          o,
          a = f(t),
          u = a.length;
        if (f(e).length !== u) return !1;
        for (; u-- > 0; ) {
          if (
            (n = a[u]) === d &&
            (t.$$typeof || e.$$typeof) &&
            t.$$typeof !== e.$$typeof
          )
            return !1;
          if (!p(e, n)) return !1;
          if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
          if (
            ((i = y(t, n)),
            (o = y(e, n)),
            (i || o) &&
              (!i ||
                !o ||
                i.configurable !== o.configurable ||
                i.enumerable !== o.enumerable ||
                i.writable !== o.writable))
          )
            return !1;
        }
        return !0;
      }
      function O(t, e) {
        return h(t.valueOf(), e.valueOf());
      }
      function S(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function j(t, e, r) {
        if (t.size !== e.size) return !1;
        for (var n, i, o = {}, a = t.values(); (n = a.next()) && !n.done; ) {
          for (var u = e.values(), c = !1, l = 0; (i = u.next()) && !i.done; )
            c ||
              o[l] ||
              !(c = r.equals(n.value, i.value, n.value, i.value, t, e, r)) ||
              (o[l] = !0),
              l++;
          if (!c) return !1;
        }
        return !0;
      }
      function _(t, e) {
        var r = t.length;
        if (e.length !== r) return !1;
        for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var P = "[object Arguments]",
        k = "[object Boolean]",
        A = "[object Date]",
        E = "[object Map]",
        M = "[object Number]",
        T = "[object Object]",
        C = "[object RegExp]",
        I = "[object Set]",
        N = "[object String]",
        D = Array.isArray,
        R =
          "function" == typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView
            : null,
        L = Object.assign,
        B = Object.prototype.toString.call.bind(Object.prototype.toString);
      var F = $();
      $({ strict: !0 }),
        $({ circular: !0 }),
        $({ circular: !0, strict: !0 }),
        $({
          createInternalComparator: function () {
            return h;
          },
        }),
        $({
          strict: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        $({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        $({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
          strict: !0,
        });
      function $(t) {
        void 0 === t && (t = {});
        var e,
          r = t.circular,
          n = void 0 !== r && r,
          i = t.createInternalComparator,
          o = t.createState,
          a = t.strict,
          u = void 0 !== a && a,
          c = (function (t) {
            var e = t.circular,
              r = t.createCustomConfig,
              n = t.strict,
              i = {
                areArraysEqual: n ? w : m,
                areDatesEqual: g,
                areMapsEqual: n ? l(b, w) : b,
                areObjectsEqual: n ? w : x,
                arePrimitiveWrappersEqual: O,
                areRegExpsEqual: S,
                areSetsEqual: n ? l(j, w) : j,
                areTypedArraysEqual: n ? w : _,
              };
            if ((r && (i = L({}, i, r(i))), e)) {
              var o = s(i.areArraysEqual),
                a = s(i.areMapsEqual),
                u = s(i.areObjectsEqual),
                c = s(i.areSetsEqual);
              i = L({}, i, {
                areArraysEqual: o,
                areMapsEqual: a,
                areObjectsEqual: u,
                areSetsEqual: c,
              });
            }
            return i;
          })(t),
          f = (function (t) {
            var e = t.areArraysEqual,
              r = t.areDatesEqual,
              n = t.areMapsEqual,
              i = t.areObjectsEqual,
              o = t.arePrimitiveWrappersEqual,
              a = t.areRegExpsEqual,
              u = t.areSetsEqual,
              c = t.areTypedArraysEqual;
            return function (t, l, s) {
              if (t === l) return !0;
              if (
                null == t ||
                null == l ||
                "object" != typeof t ||
                "object" != typeof l
              )
                return t != t && l != l;
              var f = t.constructor;
              if (f !== l.constructor) return !1;
              if (f === Object) return i(t, l, s);
              if (D(t)) return e(t, l, s);
              if (null != R && R(t)) return c(t, l, s);
              if (f === Date) return r(t, l, s);
              if (f === RegExp) return a(t, l, s);
              if (f === Map) return n(t, l, s);
              if (f === Set) return u(t, l, s);
              var p = B(t);
              return p === A
                ? r(t, l, s)
                : p === C
                ? a(t, l, s)
                : p === E
                ? n(t, l, s)
                : p === I
                ? u(t, l, s)
                : p === T
                ? "function" != typeof t.then &&
                  "function" != typeof l.then &&
                  i(t, l, s)
                : p === P
                ? i(t, l, s)
                : (p === k || p === M || p === N) && o(t, l, s);
            };
          })(c);
        return (function (t) {
          var e = t.circular,
            r = t.comparator,
            n = t.createState,
            i = t.equals,
            o = t.strict;
          if (n)
            return function (t, a) {
              var u = n(),
                c = u.cache,
                l = void 0 === c ? (e ? new WeakMap() : void 0) : c,
                s = u.meta;
              return r(t, a, { cache: l, equals: i, meta: s, strict: o });
            };
          if (e)
            return function (t, e) {
              return r(t, e, {
                cache: new WeakMap(),
                equals: i,
                meta: void 0,
                strict: o,
              });
            };
          var a = { cache: void 0, equals: i, meta: void 0, strict: o };
          return function (t, e) {
            return r(t, e, a);
          };
        })({
          circular: n,
          comparator: f,
          createState: o,
          equals: i
            ? i(f)
            : ((e = f),
              function (t, r, n, i, o, a, u) {
                return e(t, r, u);
              }),
          strict: u,
        });
      }
      function z(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = -1;
        requestAnimationFrame(function n(i) {
          r < 0 && (r = i),
            i - r > e
              ? (t(i), (r = -1))
              : (function (t) {
                  "undefined" != typeof requestAnimationFrame &&
                    requestAnimationFrame(t);
                })(n);
        });
      }
      function U(t) {
        return (
          (U =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          U(t)
        );
      }
      function q(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return V(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return V(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function V(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function W() {
        var t = function () {
            return null;
          },
          e = !1,
          r = function r(n) {
            if (!e) {
              if (Array.isArray(n)) {
                if (!n.length) return;
                var i = q(n),
                  o = i[0],
                  a = i.slice(1);
                return "number" == typeof o
                  ? void z(r.bind(null, a), o)
                  : (r(o), void z(r.bind(null, a)));
              }
              "object" === U(n) && t(n), "function" == typeof n && n();
            }
          };
        return {
          stop: function () {
            e = !0;
          },
          start: function (t) {
            (e = !1), r(t);
          },
          subscribe: function (e) {
            return (
              (t = e),
              function () {
                t = function () {
                  return null;
                };
              }
            );
          },
        };
      }
      function H(t) {
        return (
          (H =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          H(t)
        );
      }
      function G(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? G(Object(r), !0).forEach(function (e) {
                Z(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : G(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function Z(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== H(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== H(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === H(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var X = ["Webkit", "Moz", "O", "ms"],
        K = ["-webkit-", "-moz-", "-o-", "-ms-"],
        J = ["transform", "transformOrigin", "transition"],
        Q = function (t) {
          return t;
        },
        tt = function (t, e) {
          return Object.keys(e).reduce(function (r, n) {
            return Y(Y({}, r), {}, Z({}, n, t(n, e[n])));
          }, {});
        },
        et = function (t) {
          return Object.keys(t).reduce(function (t, e) {
            return Y(
              Y({}, t),
              (function (t, e) {
                if (-1 === J.indexOf(t))
                  return Z({}, t, Number.isNaN(e) ? 0 : e);
                var r = "transition" === t,
                  n = t.replace(/(\w)/, function (t) {
                    return t.toUpperCase();
                  }),
                  i = e;
                return X.reduce(function (t, o, a) {
                  return (
                    r &&
                      (i = e.replace(
                        /(transform|transform-origin)/gim,
                        "".concat(K[a], "$1"),
                      )),
                    Y(Y({}, t), {}, Z({}, o + n, i))
                  );
                }, {});
              })(e, t[e]),
            );
          }, t);
        },
        rt = function (t, e, r) {
          return t
            .map(function (t) {
              return ""
                .concat(
                  ((n = t),
                  n.replace(/([A-Z])/g, function (t) {
                    return "-".concat(t.toLowerCase());
                  })),
                  " ",
                )
                .concat(e, "ms ")
                .concat(r);
              var n;
            })
            .join(",");
        };
      function nt(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = o.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          ot(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function it(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return at(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          ot(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ot(t, e) {
        if (t) {
          if ("string" == typeof t) return at(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? at(t, e)
              : void 0
          );
        }
      }
      function at(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var ut = 1e-4,
        ct = function (t, e) {
          return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
        },
        lt = function (t, e) {
          return t
            .map(function (t, r) {
              return t * Math.pow(e, r);
            })
            .reduce(function (t, e) {
              return t + e;
            });
        },
        st = function (t, e) {
          return function (r) {
            var n = ct(t, e);
            return lt(n, r);
          };
        },
        ft = function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          var n = e[0],
            i = e[1],
            o = e[2],
            a = e[3];
          if (1 === e.length)
            switch (e[0]) {
              case "linear":
                (n = 0), (i = 0), (o = 1), (a = 1);
                break;
              case "ease":
                (n = 0.25), (i = 0.1), (o = 0.25), (a = 1);
                break;
              case "ease-in":
                (n = 0.42), (i = 0), (o = 1), (a = 1);
                break;
              case "ease-out":
                (n = 0.42), (i = 0), (o = 0.58), (a = 1);
                break;
              case "ease-in-out":
                (n = 0), (i = 0), (o = 0.58), (a = 1);
                break;
              default:
                var u = e[0].split("(");
                if (
                  "cubic-bezier" === u[0] &&
                  4 === u[1].split(")")[0].split(",").length
                ) {
                  var c = nt(
                    u[1]
                      .split(")")[0]
                      .split(",")
                      .map(function (t) {
                        return parseFloat(t);
                      }),
                    4,
                  );
                  (n = c[0]), (i = c[1]), (o = c[2]), (a = c[3]);
                }
            }
          [n, o, i, a].every(function (t) {
            return "number" == typeof t && t >= 0 && t <= 1;
          });
          var l,
            s,
            f = st(n, o),
            p = st(i, a),
            h =
              ((l = n),
              (s = o),
              function (t) {
                var e = ct(l, s),
                  r = [].concat(
                    it(
                      e
                        .map(function (t, e) {
                          return t * e;
                        })
                        .slice(1),
                    ),
                    [0],
                  );
                return lt(r, t);
              }),
            d = function (t) {
              for (var e, r = t > 1 ? 1 : t, n = r, i = 0; i < 8; ++i) {
                var o = f(n) - r,
                  a = h(n);
                if (Math.abs(o - r) < ut || a < ut) return p(n);
                n = (e = n - o / a) > 1 ? 1 : e < 0 ? 0 : e;
              }
              return p(n);
            };
          return (d.isStepper = !1), d;
        },
        pt = function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          var n = e[0];
          if ("string" == typeof n)
            switch (n) {
              case "ease":
              case "ease-in-out":
              case "ease-out":
              case "ease-in":
              case "linear":
                return ft(n);
              case "spring":
                return (function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = t.stiff,
                    r = void 0 === e ? 100 : e,
                    n = t.damping,
                    i = void 0 === n ? 8 : n,
                    o = t.dt,
                    a = void 0 === o ? 17 : o,
                    u = function (t, e, n) {
                      var o = n + ((-(t - e) * r - n * i) * a) / 1e3,
                        u = (n * a) / 1e3 + t;
                      return Math.abs(u - e) < ut && Math.abs(o) < ut
                        ? [e, 0]
                        : [u, o];
                    };
                  return (u.isStepper = !0), (u.dt = a), u;
                })();
              default:
                if ("cubic-bezier" === n.split("(")[0]) return ft(n);
            }
          return "function" == typeof n ? n : null;
        };
      function ht(t) {
        return (
          (ht =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ht(t)
        );
      }
      function dt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return xt(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          bt(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function yt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function vt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? yt(Object(r), !0).forEach(function (e) {
                mt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : yt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function mt(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== ht(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== ht(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === ht(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function gt(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = o.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          bt(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function bt(t, e) {
        if (t) {
          if ("string" == typeof t) return xt(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? xt(t, e)
              : void 0
          );
        }
      }
      function xt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var wt = function (t, e, r) {
          return t + (e - t) * r;
        },
        Ot = function (t) {
          return t.from !== t.to;
        },
        St = function t(e, r, n) {
          var i = tt(function (t, r) {
            if (Ot(r)) {
              var n = gt(e(r.from, r.to, r.velocity), 2),
                i = n[0],
                o = n[1];
              return vt(vt({}, r), {}, { from: i, velocity: o });
            }
            return r;
          }, r);
          return n < 1
            ? tt(function (t, e) {
                return Ot(e)
                  ? vt(
                      vt({}, e),
                      {},
                      {
                        velocity: wt(e.velocity, i[t].velocity, n),
                        from: wt(e.from, i[t].from, n),
                      },
                    )
                  : e;
              }, r)
            : t(e, i, n - 1);
        };
      const jt = function (t, e, r, n, i) {
        var o,
          a,
          u,
          c,
          l =
            ((o = t),
            (a = e),
            [Object.keys(o), Object.keys(a)].reduce(function (t, e) {
              return t.filter(function (t) {
                return e.includes(t);
              });
            })),
          s = l.reduce(function (r, n) {
            return vt(vt({}, r), {}, mt({}, n, [t[n], e[n]]));
          }, {}),
          f = l.reduce(function (r, n) {
            return vt(
              vt({}, r),
              {},
              mt({}, n, { from: t[n], velocity: 0, to: e[n] }),
            );
          }, {}),
          p = -1,
          h = function () {
            return null;
          };
        return (
          (h = r.isStepper
            ? function (n) {
                u || (u = n);
                var o = (n - u) / r.dt;
                (f = St(r, f, o)),
                  i(
                    vt(
                      vt(vt({}, t), e),
                      tt(function (t, e) {
                        return e.from;
                      }, f),
                    ),
                  ),
                  (u = n),
                  Object.values(f).filter(Ot).length &&
                    (p = requestAnimationFrame(h));
              }
            : function (o) {
                c || (c = o);
                var a = (o - c) / n,
                  u = tt(function (t, e) {
                    return wt.apply(void 0, dt(e).concat([r(a)]));
                  }, s);
                if ((i(vt(vt(vt({}, t), e), u)), a < 1))
                  p = requestAnimationFrame(h);
                else {
                  var l = tt(function (t, e) {
                    return wt.apply(void 0, dt(e).concat([r(1)]));
                  }, s);
                  i(vt(vt(vt({}, t), e), l));
                }
              }),
          function () {
            return (
              requestAnimationFrame(h),
              function () {
                cancelAnimationFrame(p);
              }
            );
          }
        );
      };
      function _t(t) {
        return (
          (_t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          _t(t)
        );
      }
      var Pt = [
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
      function kt(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function At(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Et(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return Et(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Et(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Et(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function Mt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Tt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Mt(Object(r), !0).forEach(function (e) {
                Ct(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Mt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function Ct(t, e, r) {
        return (
          (e = Nt(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function It(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Nt(n.key), n);
        }
      }
      function Nt(t) {
        var e = (function (t, e) {
          if ("object" !== _t(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== _t(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === _t(e) ? e : String(e);
      }
      function Dt(t, e) {
        return (
          (Dt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Dt(t, e)
        );
      }
      function Rt(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Ft(t);
          if (e) {
            var i = Ft(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return Lt(this, r);
        };
      }
      function Lt(t, e) {
        if (e && ("object" === _t(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return Bt(t);
      }
      function Bt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function Ft(t) {
        return (
          (Ft = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ft(t)
        );
      }
      var $t = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && Dt(t, e);
        })(a, t);
        var e,
          r,
          i,
          o = Rt(a);
        function a(t, e) {
          var r;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          var n = (r = o.call(this, t, e)).props,
            i = n.isActive,
            u = n.attributeName,
            c = n.from,
            l = n.to,
            s = n.steps,
            f = n.children,
            p = n.duration;
          if (
            ((r.handleStyleChange = r.handleStyleChange.bind(Bt(r))),
            (r.changeStyle = r.changeStyle.bind(Bt(r))),
            !i || p <= 0)
          )
            return (
              (r.state = { style: {} }),
              "function" == typeof f && (r.state = { style: l }),
              Lt(r)
            );
          if (s && s.length) r.state = { style: s[0].style };
          else if (c) {
            if ("function" == typeof f) return (r.state = { style: c }), Lt(r);
            r.state = { style: u ? Ct({}, u, c) : c };
          } else r.state = { style: {} };
          return r;
        }
        return (
          (e = a),
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                var t = this.props,
                  e = t.isActive,
                  r = t.canBegin;
                (this.mounted = !0), e && r && this.runAnimation(this.props);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                var e = this.props,
                  r = e.isActive,
                  n = e.canBegin,
                  i = e.attributeName,
                  o = e.shouldReAnimate,
                  a = e.to,
                  u = e.from,
                  c = this.state.style;
                if (n)
                  if (r) {
                    if (!(F(t.to, a) && t.canBegin && t.isActive)) {
                      var l = !t.canBegin || !t.isActive;
                      this.manager && this.manager.stop(),
                        this.stopJSAnimation && this.stopJSAnimation();
                      var s = l || o ? u : t.to;
                      if (this.state && c) {
                        var f = { style: i ? Ct({}, i, s) : s };
                        ((i && [i] !== s) || (!i && c !== s)) &&
                          this.setState(f);
                      }
                      this.runAnimation(
                        Tt(Tt({}, this.props), {}, { from: s, begin: 0 }),
                      );
                    }
                  } else {
                    var p = { style: i ? Ct({}, i, a) : a };
                    this.state &&
                      c &&
                      ((i && c[i] !== a) || (!i && c !== a)) &&
                      this.setState(p);
                  }
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.mounted = !1;
                var t = this.props.onAnimationEnd;
                this.unSubscribe && this.unSubscribe(),
                  this.manager && (this.manager.stop(), (this.manager = null)),
                  this.stopJSAnimation && this.stopJSAnimation(),
                  t && t();
              },
            },
            {
              key: "handleStyleChange",
              value: function (t) {
                this.changeStyle(t);
              },
            },
            {
              key: "changeStyle",
              value: function (t) {
                this.mounted && this.setState({ style: t });
              },
            },
            {
              key: "runJSAnimation",
              value: function (t) {
                var e = this,
                  r = t.from,
                  n = t.to,
                  i = t.duration,
                  o = t.easing,
                  a = t.begin,
                  u = t.onAnimationEnd,
                  c = t.onAnimationStart,
                  l = jt(r, n, pt(o), i, this.changeStyle);
                this.manager.start([
                  c,
                  a,
                  function () {
                    e.stopJSAnimation = l();
                  },
                  i,
                  u,
                ]);
              },
            },
            {
              key: "runStepAnimation",
              value: function (t) {
                var e = this,
                  r = t.steps,
                  n = t.begin,
                  i = t.onAnimationStart,
                  o = r[0],
                  a = o.style,
                  u = o.duration,
                  c = void 0 === u ? 0 : u;
                return this.manager.start(
                  [i].concat(
                    At(
                      r.reduce(
                        function (t, n, i) {
                          if (0 === i) return t;
                          var o = n.duration,
                            a = n.easing,
                            u = void 0 === a ? "ease" : a,
                            c = n.style,
                            l = n.properties,
                            s = n.onAnimationEnd,
                            f = i > 0 ? r[i - 1] : n,
                            p = l || Object.keys(c);
                          if ("function" == typeof u || "spring" === u)
                            return [].concat(At(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: c,
                                duration: o,
                                easing: u,
                              }),
                              o,
                            ]);
                          var h = rt(p, o, u),
                            d = Tt(
                              Tt(Tt({}, f.style), c),
                              {},
                              { transition: h },
                            );
                          return [].concat(At(t), [d, o, s]).filter(Q);
                        },
                        [a, Math.max(c, n)],
                      ),
                    ),
                    [t.onAnimationEnd],
                  ),
                );
              },
            },
            {
              key: "runAnimation",
              value: function (t) {
                this.manager || (this.manager = W());
                var e = t.begin,
                  r = t.duration,
                  n = t.attributeName,
                  i = t.to,
                  o = t.easing,
                  a = t.onAnimationStart,
                  u = t.onAnimationEnd,
                  c = t.steps,
                  l = t.children,
                  s = this.manager;
                if (
                  ((this.unSubscribe = s.subscribe(this.handleStyleChange)),
                  "function" != typeof o &&
                    "function" != typeof l &&
                    "spring" !== o)
                )
                  if (c.length > 1) this.runStepAnimation(t);
                  else {
                    var f = n ? Ct({}, n, i) : i,
                      p = rt(Object.keys(f), r, o);
                    s.start([a, e, Tt(Tt({}, f), {}, { transition: p }), r, u]);
                  }
                else this.runJSAnimation(t);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.children,
                  r = (t.begin, t.duration),
                  i = (t.attributeName, t.easing, t.isActive),
                  o =
                    (t.steps,
                    t.from,
                    t.to,
                    t.canBegin,
                    t.onAnimationEnd,
                    t.shouldReAnimate,
                    t.onAnimationReStart,
                    kt(t, Pt)),
                  a = n.Children.count(e),
                  u = et(this.state.style);
                if ("function" == typeof e) return e(u);
                if (!i || 0 === a || r <= 0) return e;
                var c = function (t) {
                  var e = t.props,
                    r = e.style,
                    i = void 0 === r ? {} : r,
                    a = e.className;
                  return (0, n.cloneElement)(
                    t,
                    Tt(
                      Tt({}, o),
                      {},
                      { style: Tt(Tt({}, i), u), className: a },
                    ),
                  );
                };
                return 1 === a
                  ? c(n.Children.only(e))
                  : n.createElement(
                      "div",
                      null,
                      n.Children.map(e, function (t) {
                        return c(t);
                      }),
                    );
              },
            },
          ]) && It(e.prototype, r),
          i && It(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(n.PureComponent);
      ($t.displayName = "Animate"),
        ($t.defaultProps = {
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
        ($t.propTypes = {
          from: o().oneOfType([o().object, o().string]),
          to: o().oneOfType([o().object, o().string]),
          attributeName: o().string,
          duration: o().number,
          begin: o().number,
          easing: o().oneOfType([o().string, o().func]),
          steps: o().arrayOf(
            o().shape({
              duration: o().number.isRequired,
              style: o().object.isRequired,
              easing: o().oneOfType([
                o().oneOf([
                  "ease",
                  "ease-in",
                  "ease-out",
                  "ease-in-out",
                  "linear",
                ]),
                o().func,
              ]),
              properties: o().arrayOf("string"),
              onAnimationEnd: o().func,
            }),
          ),
          children: o().oneOfType([o().node, o().func]),
          isActive: o().bool,
          canBegin: o().bool,
          onAnimationEnd: o().func,
          shouldReAnimate: o().bool,
          onAnimationStart: o().func,
          onAnimationReStart: o().func,
        });
      const zt = $t;
      var Ut = r(32873),
        qt = r(24561),
        Vt = ["children", "appearOptions", "enterOptions", "leaveOptions"];
      function Wt(t) {
        return (
          (Wt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Wt(t)
        );
      }
      function Ht() {
        return (
          (Ht = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          Ht.apply(this, arguments)
        );
      }
      function Gt(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function Yt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Zt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Yt(Object(r), !0).forEach(function (e) {
                ee(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Yt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function Xt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, re(n.key), n);
        }
      }
      function Kt(t, e) {
        return (
          (Kt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Kt(t, e)
        );
      }
      function Jt(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = te(t);
          if (e) {
            var i = te(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === Wt(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return Qt(t);
          })(this, r);
        };
      }
      function Qt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function te(t) {
        return (
          (te = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          te(t)
        );
      }
      function ee(t, e, r) {
        return (
          (e = re(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function re(t) {
        var e = (function (t, e) {
          if ("object" !== Wt(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== Wt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === Wt(e) ? e : String(e);
      }
      void 0 === Number.isFinite &&
        (Number.isFinite = function (t) {
          return "number" == typeof t && isFinite(t);
        });
      var ne = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.steps,
            r = t.duration;
          return e && e.length
            ? e.reduce(function (t, e) {
                return (
                  t +
                  (Number.isFinite(e.duration) && e.duration > 0
                    ? e.duration
                    : 0)
                );
              }, 0)
            : Number.isFinite(r)
            ? r
            : 0;
        },
        ie = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Kt(t, e);
          })(a, t);
          var e,
            r,
            i,
            o = Jt(a);
          function a() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              ee(Qt((t = o.call(this))), "handleEnter", function (e, r) {
                var n = t.props,
                  i = n.appearOptions,
                  o = n.enterOptions;
                t.handleStyleActive(r ? i : o);
              }),
              ee(Qt(t), "handleExit", function () {
                var e = t.props.leaveOptions;
                t.handleStyleActive(e);
              }),
              (t.state = { isActive: !1 }),
              t
            );
          }
          return (
            (e = a),
            (r = [
              {
                key: "handleStyleActive",
                value: function (t) {
                  if (t) {
                    var e = t.onAnimationEnd
                      ? function () {
                          t.onAnimationEnd();
                        }
                      : null;
                    this.setState(
                      Zt(Zt({}, t), {}, { onAnimationEnd: e, isActive: !0 }),
                    );
                  }
                },
              },
              {
                key: "parseTimeout",
                value: function () {
                  var t = this.props,
                    e = t.appearOptions,
                    r = t.enterOptions,
                    n = t.leaveOptions;
                  return ne(e) + ne(r) + ne(n);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    r = e.children,
                    i =
                      (e.appearOptions,
                      e.enterOptions,
                      e.leaveOptions,
                      Gt(e, Vt));
                  return n.createElement(
                    qt.ZP,
                    Ht({}, i, {
                      onEnter: this.handleEnter,
                      onExit: this.handleExit,
                      timeout: this.parseTimeout(),
                    }),
                    function () {
                      return n.createElement(zt, t.state, n.Children.only(r));
                    },
                  );
                },
              },
            ]) && Xt(e.prototype, r),
            i && Xt(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(n.Component);
      ie.propTypes = {
        appearOptions: o().object,
        enterOptions: o().object,
        leaveOptions: o().object,
        children: o().element,
      };
      const oe = ie;
      function ae(t) {
        var e = t.component,
          r = t.children,
          i = t.appear,
          o = t.enter,
          a = t.leave;
        return n.createElement(
          Ut.Z,
          { component: e },
          n.Children.map(r, function (t, e) {
            return n.createElement(
              oe,
              {
                appearOptions: i,
                enterOptions: o,
                leaveOptions: a,
                key: "child-".concat(e),
              },
              t,
            );
          }),
        );
      }
      (ae.propTypes = {
        appear: o().object,
        enter: o().object,
        leave: o().object,
        children: o().oneOfType([o().array, o().element]),
        component: o().any,
      }),
        (ae.defaultProps = { component: "span" });
      const ue = zt;
    },
    75018: (t, e, r) => {
      "use strict";
      r.d(e, { $: () => B });
      var n = r(51391),
        i = r.n(n),
        o = r(47184),
        a = r.n(o),
        u = r(39277),
        c = r.n(u),
        l = r(93706),
        s = r.n(l),
        f = r(89526),
        p = r(64403),
        h = r.n(p),
        d = r(5722),
        y = r(33951),
        v = r(61452),
        m = r(65370),
        g = r(32214),
        b = r(34324),
        x = r(16171),
        w = r(9410),
        O = r(59509),
        S = r(71298),
        j = r(33790),
        _ = ["value", "background"];
      function P(t) {
        return (
          (P =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          P(t)
        );
      }
      function k(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function A() {
        return (
          (A = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          A.apply(this, arguments)
        );
      }
      function E(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function M(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? E(Object(r), !0).forEach(function (e) {
                R(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function T(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, L(n.key), n);
        }
      }
      function C(t, e) {
        return (
          (C = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          C(t, e)
        );
      }
      function I(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = D(t);
          if (e) {
            var i = D(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === P(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return N(t);
          })(this, r);
        };
      }
      function N(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function D(t) {
        return (
          (D = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          D(t)
        );
      }
      function R(t, e, r) {
        return (
          (e = L(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function L(t) {
        var e = (function (t, e) {
          if ("object" !== P(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== P(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === P(e) ? e : String(e);
      }
      var B = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && C(t, e);
        })(u, t);
        var e,
          r,
          n,
          o = I(u);
        function u() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, u);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            R(N((t = o.call.apply(o, [this].concat(r)))), "state", {
              isAnimationFinished: !1,
            }),
            R(N(t), "id", (0, x.EL)("recharts-bar-")),
            R(N(t), "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), e && e();
            }),
            R(N(t), "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), e && e();
            }),
            t
          );
        }
        return (
          (e = u),
          (n = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curData: t.data,
                      prevData: e.curData,
                    }
                  : t.data !== e.curData
                  ? { curData: t.data }
                  : null;
              },
            },
            {
              key: "renderRectangle",
              value: function (t, e) {
                return f.isValidElement(t)
                  ? f.cloneElement(t, e)
                  : c()(t)
                  ? t(e)
                  : f.createElement(y.A, e);
              },
            },
          ]),
          (r = [
            {
              key: "renderRectanglesStatically",
              value: function (t) {
                var e = this,
                  r = this.props.shape,
                  n = (0, w.L6)(this.props);
                return (
                  t &&
                  t.map(function (t, i) {
                    var o = M(M(M({}, n), t), {}, { index: i });
                    return f.createElement(
                      v.m,
                      A(
                        { className: "recharts-bar-rectangle" },
                        (0, j.bw)(e.props, t, i),
                        { key: "rectangle-".concat(i), role: "img" },
                      ),
                      u.renderRectangle(r, o),
                    );
                  })
                );
              },
            },
            {
              key: "renderRectanglesWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.data,
                  n = e.layout,
                  i = e.isAnimationActive,
                  o = e.animationBegin,
                  a = e.animationDuration,
                  u = e.animationEasing,
                  c = e.animationId,
                  l = this.state.prevData;
                return f.createElement(
                  d.ZP,
                  {
                    begin: o,
                    duration: a,
                    isActive: i,
                    easing: u,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "bar-".concat(c),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (e) {
                    var i = e.t,
                      o = r.map(function (t, e) {
                        var r = l && l[e];
                        if (r) {
                          var o = (0, x.k4)(r.x, t.x),
                            a = (0, x.k4)(r.y, t.y),
                            u = (0, x.k4)(r.width, t.width),
                            c = (0, x.k4)(r.height, t.height);
                          return M(
                            M({}, t),
                            {},
                            { x: o(i), y: a(i), width: u(i), height: c(i) },
                          );
                        }
                        if ("horizontal" === n) {
                          var s = (0, x.k4)(0, t.height)(i);
                          return M(
                            M({}, t),
                            {},
                            { y: t.y + t.height - s, height: s },
                          );
                        }
                        var f = (0, x.k4)(0, t.width)(i);
                        return M(M({}, t), {}, { width: f });
                      });
                    return f.createElement(
                      v.m,
                      null,
                      t.renderRectanglesStatically(o),
                    );
                  },
                );
              },
            },
            {
              key: "renderRectangles",
              value: function () {
                var t = this.props,
                  e = t.data,
                  r = t.isAnimationActive,
                  n = this.state.prevData;
                return !(r && e && e.length) || (n && a()(n, e))
                  ? this.renderRectanglesStatically(e)
                  : this.renderRectanglesWithAnimation();
              },
            },
            {
              key: "renderBackground",
              value: function () {
                var t = this,
                  e = this.props.data,
                  r = (0, w.L6)(this.props.background);
                return e.map(function (e, n) {
                  e.value;
                  var i = e.background,
                    o = k(e, _);
                  if (!i) return null;
                  var a = M(
                    M(
                      M(M(M({}, o), {}, { fill: "#eee" }, i), r),
                      (0, j.bw)(t.props, e, n),
                    ),
                    {},
                    {
                      index: n,
                      key: "background-bar-".concat(n),
                      className: "recharts-bar-background-rectangle",
                    },
                  );
                  return u.renderRectangle(t.props.background, a);
                });
              },
            },
            {
              key: "renderErrorBar",
              value: function (t, e) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var r = this.props,
                  n = r.data,
                  i = r.xAxis,
                  o = r.yAxis,
                  a = r.layout,
                  u = r.children,
                  c = (0, w.NN)(u, m.W);
                if (!c) return null;
                var l = "vertical" === a ? n[0].height / 2 : n[0].width / 2;
                function s(t, e) {
                  return {
                    x: t.x,
                    y: t.y,
                    value: t.value,
                    errorVal: (0, S.F$)(t, e),
                  };
                }
                var p = {
                  clipPath: t ? "url(#clipPath-".concat(e, ")") : null,
                };
                return f.createElement(
                  v.m,
                  p,
                  c.map(function (t, e) {
                    return f.cloneElement(t, {
                      key: "error-bar-".concat(e),
                      data: n,
                      xAxis: i,
                      yAxis: o,
                      layout: a,
                      offset: l,
                      dataPointFormatter: s,
                    });
                  }),
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.hide,
                  r = t.data,
                  n = t.className,
                  o = t.xAxis,
                  a = t.yAxis,
                  u = t.left,
                  c = t.top,
                  l = t.width,
                  s = t.height,
                  p = t.isAnimationActive,
                  d = t.background,
                  y = t.id;
                if (e || !r || !r.length) return null;
                var m = this.state.isAnimationFinished,
                  g = h()("recharts-bar", n),
                  x = (o && o.allowDataOverflow) || (a && a.allowDataOverflow),
                  w = i()(y) ? this.id : y;
                return f.createElement(
                  v.m,
                  { className: g },
                  x
                    ? f.createElement(
                        "defs",
                        null,
                        f.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(w) },
                          f.createElement("rect", {
                            x: u,
                            y: c,
                            width: l,
                            height: s,
                          }),
                        ),
                      )
                    : null,
                  f.createElement(
                    v.m,
                    {
                      className: "recharts-bar-rectangles",
                      clipPath: x ? "url(#clipPath-".concat(w, ")") : null,
                    },
                    d ? this.renderBackground() : null,
                    this.renderRectangles(),
                  ),
                  this.renderErrorBar(x, w),
                  (!p || m) && b.e.renderCallByParent(this.props, r),
                );
              },
            },
          ]) && T(e.prototype, r),
          n && T(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          u
        );
      })(f.PureComponent);
      R(B, "displayName", "Bar"),
        R(B, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          legendType: "rect",
          minPointSize: 0,
          hide: !1,
          data: [],
          layout: "vertical",
          isAnimationActive: !O.x.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "ease",
        }),
        R(B, "getComposedData", function (t) {
          var e = t.props,
            r = t.item,
            n = t.barPosition,
            i = t.bandSize,
            o = t.xAxis,
            a = t.yAxis,
            u = t.xAxisTicks,
            c = t.yAxisTicks,
            l = t.stackedData,
            f = t.dataStartIndex,
            p = t.displayedData,
            h = t.offset,
            d = (0, S.Bu)(n, r);
          if (!d) return null;
          var y = e.layout,
            v = r.props,
            m = v.dataKey,
            b = v.children,
            O = v.minPointSize,
            j = "horizontal" === y ? a : o,
            _ = l ? j.scale.domain() : null,
            P = (0, S.Yj)({ numericAxis: j }),
            k = (0, w.NN)(b, g.b),
            A = p.map(function (t, e) {
              var n, p, h, v, g, b;
              if (
                (l
                  ? (n = (0, S.Vv)(l[f + e], _))
                  : ((n = (0, S.F$)(t, m)), s()(n) || (n = [P, n])),
                "horizontal" === y)
              ) {
                var w,
                  j = [a.scale(n[0]), a.scale(n[1])],
                  A = j[0],
                  E = j[1];
                (p = (0, S.Fy)({
                  axis: o,
                  ticks: u,
                  bandSize: i,
                  offset: d.offset,
                  entry: t,
                  index: e,
                })),
                  (h =
                    null !== (w = null != E ? E : A) && void 0 !== w
                      ? w
                      : void 0),
                  (v = d.size);
                var T = A - E;
                if (
                  ((g = Number.isNaN(T) ? 0 : T),
                  (b = { x: p, y: a.y, width: v, height: a.height }),
                  Math.abs(O) > 0 && Math.abs(g) < Math.abs(O))
                ) {
                  var C = (0, x.uY)(g || O) * (Math.abs(O) - Math.abs(g));
                  (h -= C), (g += C);
                }
              } else {
                var I = [o.scale(n[0]), o.scale(n[1])],
                  N = I[0],
                  D = I[1];
                if (
                  ((p = N),
                  (h = (0, S.Fy)({
                    axis: a,
                    ticks: c,
                    bandSize: i,
                    offset: d.offset,
                    entry: t,
                    index: e,
                  })),
                  (v = D - N),
                  (g = d.size),
                  (b = { x: o.x, y: h, width: o.width, height: g }),
                  Math.abs(O) > 0 && Math.abs(v) < Math.abs(O))
                )
                  v += (0, x.uY)(v || O) * (Math.abs(O) - Math.abs(v));
              }
              return M(
                M(
                  M({}, t),
                  {},
                  {
                    x: p,
                    y: h,
                    width: v,
                    height: g,
                    value: l ? n : n[1],
                    payload: t,
                    background: b,
                  },
                  k && k[e] && k[e].props,
                ),
                {},
                {
                  tooltipPayload: [(0, S.Qo)(r, t)],
                  tooltipPosition: { x: p + v / 2, y: h + g / 2 },
                },
              );
            });
          return M({ data: A, layout: y }, h);
        });
    },
    65370: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => f });
      var n = r(89526),
        i = r(61452),
        o = r(9410),
        a = [
          "offset",
          "layout",
          "width",
          "dataKey",
          "data",
          "dataPointFormatter",
          "xAxis",
          "yAxis",
        ];
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          u.apply(this, arguments)
        );
      }
      function c(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = o.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return l(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return l(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function s(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function f(t) {
        var e = t.offset,
          r = t.layout,
          l = t.width,
          f = t.dataKey,
          p = t.data,
          h = t.dataPointFormatter,
          d = t.xAxis,
          y = t.yAxis,
          v = s(t, a),
          m = (0, o.L6)(v),
          g = p.map(function (t, o) {
            var a = h(t, f),
              s = a.x,
              p = a.y,
              v = a.value,
              g = a.errorVal;
            if (!g) return null;
            var b,
              x,
              w = [];
            if (Array.isArray(g)) {
              var O = c(g, 2);
              (b = O[0]), (x = O[1]);
            } else b = x = g;
            if ("vertical" === r) {
              var S = d.scale,
                j = p + e,
                _ = j + l,
                P = j - l,
                k = S(v - b),
                A = S(v + x);
              w.push({ x1: A, y1: _, x2: A, y2: P }),
                w.push({ x1: k, y1: j, x2: A, y2: j }),
                w.push({ x1: k, y1: _, x2: k, y2: P });
            } else if ("horizontal" === r) {
              var E = y.scale,
                M = s + e,
                T = M - l,
                C = M + l,
                I = E(v - b),
                N = E(v + x);
              w.push({ x1: T, y1: N, x2: C, y2: N }),
                w.push({ x1: M, y1: I, x2: M, y2: N }),
                w.push({ x1: T, y1: I, x2: C, y2: I });
            }
            return n.createElement(
              i.m,
              u({ className: "recharts-errorBar", key: "bar-".concat(o) }, m),
              w.map(function (t, e) {
                return n.createElement(
                  "line",
                  u({}, t, { key: "line-".concat(e) }),
                );
              }),
            );
          });
        return n.createElement(i.m, { className: "recharts-errorBars" }, g);
      }
      (f.defaultProps = {
        stroke: "black",
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: "horizontal",
      }),
        (f.displayName = "ErrorBar");
    },
    52339: (t, e, r) => {
      "use strict";
      r.d(e, { x: () => L });
      var n = r(47184),
        i = r.n(n),
        o = r(39277),
        a = r.n(o),
        u = r(51391),
        c = r.n(u),
        l = r(89526),
        s = r(5722),
        f = r(64403),
        p = r.n(f),
        h = r(17995),
        d = r(96963),
        y = r(61452),
        v = r(34324),
        m = r(65370),
        g = r(16171),
        b = r(9410),
        x = r(59509),
        w = r(71298),
        O = ["type", "layout", "connectNulls", "ref"];
      function S(t) {
        return (
          (S =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          S(t)
        );
      }
      function j(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function _() {
        return (
          (_ = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          _.apply(this, arguments)
        );
      }
      function P(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? P(Object(r), !0).forEach(function (e) {
                D(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function A(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return E(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return E(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return E(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function E(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function M(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, R(n.key), n);
        }
      }
      function T(t, e) {
        return (
          (T = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          T(t, e)
        );
      }
      function C(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = N(t);
          if (e) {
            var i = N(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === S(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return I(t);
          })(this, r);
        };
      }
      function I(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function N(t) {
        return (
          (N = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          N(t)
        );
      }
      function D(t, e, r) {
        return (
          (e = R(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function R(t) {
        var e = (function (t, e) {
          if ("object" !== S(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== S(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === S(e) ? e : String(e);
      }
      var L = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && T(t, e);
        })(u, t);
        var e,
          r,
          n,
          o = C(u);
        function u() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, u);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            D(I((t = o.call.apply(o, [this].concat(r)))), "state", {
              isAnimationFinished: !0,
              totalLength: 0,
            }),
            D(I(t), "getStrokeDasharray", function (t, e, r) {
              for (
                var n = r.reduce(function (t, e) {
                    return t + e;
                  }),
                  i = Math.floor(t / n),
                  o = t % n,
                  a = e - t,
                  c = [],
                  l = 0,
                  s = 0;
                ;
                s += r[l], ++l
              )
                if (s + r[l] > o) {
                  c = [].concat(A(r.slice(0, l)), [o - s]);
                  break;
                }
              var f = c.length % 2 == 0 ? [0, a] : [a];
              return []
                .concat(A(u.repeat(r, i)), A(c), f)
                .map(function (t) {
                  return "".concat(t, "px");
                })
                .join(", ");
            }),
            D(I(t), "id", (0, g.EL)("recharts-line-")),
            D(I(t), "pathRef", function (e) {
              t.mainCurve = e;
            }),
            D(I(t), "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 }),
                t.props.onAnimationEnd && t.props.onAnimationEnd();
            }),
            D(I(t), "handleAnimationStart", function () {
              t.setState({ isAnimationFinished: !1 }),
                t.props.onAnimationStart && t.props.onAnimationStart();
            }),
            t
          );
        }
        return (
          (e = u),
          (n = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curPoints: t.points,
                      prevPoints: e.curPoints,
                    }
                  : t.points !== e.curPoints
                  ? { curPoints: t.points }
                  : null;
              },
            },
            {
              key: "repeat",
              value: function (t, e) {
                for (
                  var r = t.length % 2 != 0 ? [].concat(A(t), [0]) : t,
                    n = [],
                    i = 0;
                  i < e;
                  ++i
                )
                  n = [].concat(A(n), A(r));
                return n;
              },
            },
            {
              key: "renderDotItem",
              value: function (t, e) {
                var r;
                if (l.isValidElement(t)) r = l.cloneElement(t, e);
                else if (a()(t)) r = t(e);
                else {
                  var n = p()("recharts-line-dot", t ? t.className : "");
                  r = l.createElement(d.o, _({}, e, { className: n }));
                }
                return r;
              },
            },
          ]),
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                if (this.props.isAnimationActive) {
                  var t = this.getTotalLength();
                  this.setState({ totalLength: t });
                }
              },
            },
            {
              key: "getTotalLength",
              value: function () {
                var t = this.mainCurve;
                try {
                  return (t && t.getTotalLength && t.getTotalLength()) || 0;
                } catch (t) {
                  return 0;
                }
              },
            },
            {
              key: "renderErrorBar",
              value: function (t, e) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var r = this.props,
                  n = r.points,
                  i = r.xAxis,
                  o = r.yAxis,
                  a = r.layout,
                  u = r.children,
                  c = (0, b.NN)(u, m.W);
                if (!c) return null;
                function s(t, e) {
                  return {
                    x: t.x,
                    y: t.y,
                    value: t.value,
                    errorVal: (0, w.F$)(t.payload, e),
                  };
                }
                var f = {
                  clipPath: t ? "url(#clipPath-".concat(e, ")") : null,
                };
                return l.createElement(
                  y.m,
                  f,
                  c.map(function (t, e) {
                    return l.cloneElement(t, {
                      key: "bar-".concat(e),
                      data: n,
                      xAxis: i,
                      yAxis: o,
                      layout: a,
                      dataPointFormatter: s,
                    });
                  }),
                );
              },
            },
            {
              key: "renderDots",
              value: function (t, e) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var r = this.props,
                  n = r.dot,
                  i = r.points,
                  o = r.dataKey,
                  a = (0, b.L6)(this.props),
                  c = (0, b.L6)(n, !0),
                  s = i.map(function (t, e) {
                    var r = k(
                      k(k({ key: "dot-".concat(e), r: 3 }, a), c),
                      {},
                      {
                        value: t.value,
                        dataKey: o,
                        cx: t.x,
                        cy: t.y,
                        index: e,
                        payload: t.payload,
                      },
                    );
                    return u.renderDotItem(n, r);
                  }),
                  f = { clipPath: t ? "url(#clipPath-".concat(e, ")") : null };
                return l.createElement(
                  y.m,
                  _({ className: "recharts-line-dots", key: "dots" }, f, {
                    role: "img",
                  }),
                  s,
                );
              },
            },
            {
              key: "renderCurveStatically",
              value: function (t, e, r, n) {
                var i = this.props,
                  o = i.type,
                  a = i.layout,
                  u = i.connectNulls,
                  c = (i.ref, j(i, O)),
                  s = k(
                    k(
                      k({}, (0, b.L6)(c, !0)),
                      {},
                      {
                        fill: "none",
                        className: "recharts-line-curve",
                        clipPath: e ? "url(#clipPath-".concat(r, ")") : null,
                        points: t,
                      },
                      n,
                    ),
                    {},
                    { type: o, layout: a, connectNulls: u },
                  );
                return l.createElement(
                  h.H,
                  _({}, s, { pathRef: this.pathRef }),
                );
              },
            },
            {
              key: "renderCurveWithAnimation",
              value: function (t, e) {
                var r = this,
                  n = this.props,
                  i = n.points,
                  o = n.strokeDasharray,
                  a = n.isAnimationActive,
                  u = n.animationBegin,
                  c = n.animationDuration,
                  f = n.animationEasing,
                  p = n.animationId,
                  h = n.animateNewValues,
                  d = n.width,
                  y = n.height,
                  v = this.state,
                  m = v.prevPoints,
                  b = v.totalLength;
                return l.createElement(
                  s.ZP,
                  {
                    begin: u,
                    duration: c,
                    isActive: a,
                    easing: f,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "line-".concat(p),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (n) {
                    var a = n.t;
                    if (m) {
                      var u = m.length / i.length,
                        c = i.map(function (t, e) {
                          var r = Math.floor(e * u);
                          if (m[r]) {
                            var n = m[r],
                              i = (0, g.k4)(n.x, t.x),
                              o = (0, g.k4)(n.y, t.y);
                            return k(k({}, t), {}, { x: i(a), y: o(a) });
                          }
                          if (h) {
                            var c = (0, g.k4)(2 * d, t.x),
                              l = (0, g.k4)(y / 2, t.y);
                            return k(k({}, t), {}, { x: c(a), y: l(a) });
                          }
                          return k(k({}, t), {}, { x: t.x, y: t.y });
                        });
                      return r.renderCurveStatically(c, t, e);
                    }
                    var l,
                      s = (0, g.k4)(0, b)(a);
                    if (o) {
                      var f = ""
                        .concat(o)
                        .split(/[,\s]+/gim)
                        .map(function (t) {
                          return parseFloat(t);
                        });
                      l = r.getStrokeDasharray(s, b, f);
                    } else l = "".concat(s, "px ").concat(b - s, "px");
                    return r.renderCurveStatically(i, t, e, {
                      strokeDasharray: l,
                    });
                  },
                );
              },
            },
            {
              key: "renderCurve",
              value: function (t, e) {
                var r = this.props,
                  n = r.points,
                  o = r.isAnimationActive,
                  a = this.state,
                  u = a.prevPoints,
                  c = a.totalLength;
                return o && n && n.length && ((!u && c > 0) || !i()(u, n))
                  ? this.renderCurveWithAnimation(t, e)
                  : this.renderCurveStatically(n, t, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.hide,
                  r = t.dot,
                  n = t.points,
                  i = t.className,
                  o = t.xAxis,
                  a = t.yAxis,
                  u = t.top,
                  s = t.left,
                  f = t.width,
                  h = t.height,
                  d = t.isAnimationActive,
                  m = t.id;
                if (e || !n || !n.length) return null;
                var g = this.state.isAnimationFinished,
                  b = 1 === n.length,
                  x = p()("recharts-line", i),
                  w = (o && o.allowDataOverflow) || (a && a.allowDataOverflow),
                  O = c()(m) ? this.id : m;
                return l.createElement(
                  y.m,
                  { className: x },
                  w
                    ? l.createElement(
                        "defs",
                        null,
                        l.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(O) },
                          l.createElement("rect", {
                            x: s,
                            y: u,
                            width: f,
                            height: h,
                          }),
                        ),
                      )
                    : null,
                  !b && this.renderCurve(w, O),
                  this.renderErrorBar(w, O),
                  (b || r) && this.renderDots(w, O),
                  (!d || g) && v.e.renderCallByParent(this.props, n),
                );
              },
            },
          ]) && M(e.prototype, r),
          n && M(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          u
        );
      })(l.PureComponent);
      D(L, "displayName", "Line"),
        D(L, "defaultProps", {
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
          isAnimationActive: !x.x.isSsr,
          animateNewValues: !0,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
          hide: !1,
          label: !1,
        }),
        D(L, "getComposedData", function (t) {
          var e = t.props,
            r = t.xAxis,
            n = t.yAxis,
            i = t.xAxisTicks,
            o = t.yAxisTicks,
            a = t.dataKey,
            u = t.bandSize,
            l = t.displayedData,
            s = t.offset,
            f = e.layout;
          return k(
            {
              points: l.map(function (t, e) {
                var l = (0, w.F$)(t, a);
                return "horizontal" === f
                  ? {
                      x: (0, w.Hv)({
                        axis: r,
                        ticks: i,
                        bandSize: u,
                        entry: t,
                        index: e,
                      }),
                      y: c()(l) ? null : n.scale(l),
                      value: l,
                      payload: t,
                    }
                  : {
                      x: c()(l) ? null : r.scale(l),
                      y: (0, w.Hv)({
                        axis: n,
                        ticks: o,
                        bandSize: u,
                        entry: t,
                        index: e,
                      }),
                      value: l,
                      payload: t,
                    };
              }),
              layout: f,
            },
            s,
          );
        });
    },
    48586: (t, e, r) => {
      "use strict";
      r.d(e, { d: () => A });
      var n = r(60479),
        i = r.n(n),
        o = r(39277),
        a = r.n(o),
        u = r(89526),
        c = r(64403),
        l = r.n(c),
        s = r(61452),
        f = r(43774),
        p = r(94694),
        h = r(16171),
        d = r(87210),
        y = r(78706),
        v = r(9410);
      function m(t) {
        return (
          (m =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          m(t)
        );
      }
      var g = [
        "isFront",
        "ifOverflow",
        "xAxisId",
        "yAxisId",
        "position",
        "fill",
        "fillOpacity",
        "stroke",
        "strokeWidth",
      ];
      function b(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = o.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return x(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return x(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function x(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function w(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function O(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? w(Object(r), !0).forEach(function (e) {
                S(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function S(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== m(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== m(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === m(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function j(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function _() {
        return (
          (_ = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          _.apply(this, arguments)
        );
      }
      var P = function (t, e) {
          return u.isValidElement(t)
            ? u.cloneElement(t, e)
            : a()(t)
            ? t(e)
            : u.createElement(
                "line",
                _({}, e, { className: "recharts-reference-line-line" }),
              );
        },
        k = function (t, e, r, n, o) {
          var a = o.viewBox,
            u = a.x,
            c = a.y,
            l = a.width,
            s = a.height,
            f = o.position;
          if (r) {
            var h = o.y,
              d = o.yAxis.orientation,
              y = t.y.apply(h, { position: f });
            if ((0, p.B)(o, "discard") && !t.y.isInRange(y)) return null;
            var v = [
              { x: u + l, y },
              { x: u, y },
            ];
            return "left" === d ? v.reverse() : v;
          }
          if (e) {
            var m = o.x,
              g = o.xAxis.orientation,
              b = t.x.apply(m, { position: f });
            if ((0, p.B)(o, "discard") && !t.x.isInRange(b)) return null;
            var x = [
              { x: b, y: c + s },
              { x: b, y: c },
            ];
            return "top" === g ? x.reverse() : x;
          }
          if (n) {
            var w = o.segment.map(function (e) {
              return t.apply(e, { position: f });
            });
            return (0, p.B)(o, "discard") &&
              i()(w, function (e) {
                return !t.isInRange(e);
              })
              ? null
              : w;
          }
          return null;
        };
      function A(t) {
        var e = t.isFront,
          r = void 0 !== e && e,
          n = t.ifOverflow,
          i = void 0 === n ? "discard" : n,
          o = t.xAxisId,
          a = void 0 === o ? 0 : o,
          c = t.yAxisId,
          m = void 0 === c ? 0 : c,
          x = t.position,
          w = void 0 === x ? "middle" : x,
          S = t.fill,
          _ = void 0 === S ? "none" : S,
          A = t.fillOpacity,
          E = void 0 === A ? 1 : A,
          M = t.stroke,
          T = void 0 === M ? "#ccc" : M,
          C = t.strokeWidth,
          I = O(
            {
              isFront: r,
              ifOverflow: i,
              xAxisId: a,
              yAxisId: m,
              fill: _,
              stroke: T,
              fillOpacity: E,
              strokeWidth: void 0 === C ? 1 : C,
              position: w,
            },
            j(t, g),
          ),
          N = I.x,
          D = I.y,
          R = I.segment,
          L = I.xAxis,
          B = I.yAxis,
          F = I.shape,
          $ = I.className,
          z = I.alwaysShow,
          U = I.clipPathId;
        (0, y.Z)(
          void 0 === z,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var q = (0, d.Ky)({ x: L.scale, y: B.scale }),
          V = (0, h.P2)(N),
          W = (0, h.P2)(D),
          H = R && 2 === R.length,
          G = k(q, V, W, H, I);
        if (!G) return null;
        var Y = b(G, 2),
          Z = Y[0],
          X = Z.x,
          K = Z.y,
          J = Y[1],
          Q = J.x,
          tt = J.y,
          et = O(
            O(
              {
                clipPath: (0, p.B)(I, "hidden")
                  ? "url(#".concat(U, ")")
                  : void 0,
              },
              (0, v.L6)(I, !0),
            ),
            {},
            { x1: X, y1: K, x2: Q, y2: tt },
          );
        return u.createElement(
          s.m,
          { className: l()("recharts-reference-line", $) },
          P(F, et),
          f._.renderCallByParent(I, (0, d._b)({ x1: X, y1: K, x2: Q, y2: tt })),
        );
      }
      A.displayName = "ReferenceLine";
    },
    23007: (t, e, r) => {
      "use strict";
      r.d(e, { K: () => n });
      var n = function () {
        return null;
      };
      (n.displayName = "XAxis"),
        (n.defaultProps = {
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
    58104: (t, e, r) => {
      "use strict";
      r.d(e, { B: () => n });
      var n = function () {
        return null;
      };
      (n.displayName = "YAxis"),
        (n.defaultProps = {
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
    79756: (t, e, r) => {
      "use strict";
      r.d(e, { z: () => We });
      var n = r(70826),
        i = r.n(n),
        o = r(92210),
        a = r.n(o),
        u = r(39277),
        c = r.n(u),
        l = r(38172),
        s = r.n(l),
        f = r(65853),
        p = r.n(f),
        h = r(80089),
        d = r.n(h),
        y = r(58120),
        v = r.n(y),
        m = r(51391),
        g = r.n(m),
        b = r(23079),
        x = r.n(b),
        w = r(93706),
        O = r.n(w),
        S = r(89526),
        j = r(64403),
        _ = r.n(j),
        P = r(93386),
        k = r(61452),
        A = r(57317),
        E = r(98241),
        M = r(17995),
        T = r(16171),
        C = r(9410);
      function I(t) {
        return (
          (I =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          I(t)
        );
      }
      function N() {
        return (
          (N = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          N.apply(this, arguments)
        );
      }
      function D(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, F(n.key), n);
        }
      }
      function R(t, e) {
        return (
          (R = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          R(t, e)
        );
      }
      function L(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = B(t);
          if (e) {
            var i = B(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === I(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(this, r);
        };
      }
      function B(t) {
        return (
          (B = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          B(t)
        );
      }
      function F(t) {
        var e = (function (t, e) {
          if ("object" !== I(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== I(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === I(e) ? e : String(e);
      }
      var $,
        z,
        U,
        q = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && R(t, e);
          })(o, t);
          var e,
            r,
            n,
            i = L(o);
          function o() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o),
              i.apply(this, arguments)
            );
          }
          return (
            (e = o),
            (n = [
              {
                key: "getPath",
                value: function (t, e, r, n, i, o) {
                  return "M"
                    .concat(t, ",")
                    .concat(i, "v")
                    .concat(n, "M")
                    .concat(o, ",")
                    .concat(e, "h")
                    .concat(r);
                },
              },
            ]),
            (r = [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    r = t.y,
                    n = t.width,
                    i = t.height,
                    a = t.top,
                    u = t.left,
                    c = t.className;
                  return (0, T.hj)(e) &&
                    (0, T.hj)(r) &&
                    (0, T.hj)(n) &&
                    (0, T.hj)(i) &&
                    (0, T.hj)(a) &&
                    (0, T.hj)(u)
                    ? S.createElement(
                        "path",
                        N({}, (0, C.L6)(this.props, !0), {
                          className: _()("recharts-cross", c),
                          d: o.getPath(e, r, n, i, a, u),
                        }),
                      )
                    : null;
                },
              },
            ]) && D(e.prototype, r),
            n && D(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            o
          );
        })(S.PureComponent);
      ($ = q),
        (U = { x: 0, y: 0, top: 0, left: 0, width: 0, height: 0 }),
        (z = F((z = "defaultProps"))) in $
          ? Object.defineProperty($, z, {
              value: U,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : ($[z] = U);
      var V = r(80072);
      function W(t) {
        return (
          (W =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          W(t)
        );
      }
      function H() {
        return (
          (H = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          H.apply(this, arguments)
        );
      }
      function G(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, K(n.key), n);
        }
      }
      function Y(t, e) {
        return (
          (Y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Y(t, e)
        );
      }
      function Z(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = X(t);
          if (e) {
            var i = X(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === W(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(this, r);
        };
      }
      function X(t) {
        return (
          (X = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          X(t)
        );
      }
      function K(t) {
        var e = (function (t, e) {
          if ("object" !== W(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== W(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === W(e) ? e : String(e);
      }
      var J = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.radius,
            i = t.angle,
            o = t.sign,
            a = t.isExternal,
            u = t.cornerRadius,
            c = t.cornerIsExternal,
            l = u * (a ? 1 : -1) + n,
            s = Math.asin(u / l) / V.Wk,
            f = c ? i : i + o * s,
            p = c ? i - o * s : i;
          return {
            center: (0, V.op)(e, r, l, f),
            circleTangency: (0, V.op)(e, r, n, f),
            lineTangency: (0, V.op)(e, r, l * Math.cos(s * V.Wk), p),
            theta: s,
          };
        },
        Q = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.innerRadius,
            i = t.outerRadius,
            o = t.startAngle,
            a = (function (t, e) {
              return (0, T.uY)(e - t) * Math.min(Math.abs(e - t), 359.999);
            })(o, t.endAngle),
            u = o + a,
            c = (0, V.op)(e, r, i, o),
            l = (0, V.op)(e, r, i, u),
            s = "M "
              .concat(c.x, ",")
              .concat(c.y, "\n    A ")
              .concat(i, ",")
              .concat(i, ",0,\n    ")
              .concat(+(Math.abs(a) > 180), ",")
              .concat(+(o > u), ",\n    ")
              .concat(l.x, ",")
              .concat(l.y, "\n  ");
          if (n > 0) {
            var f = (0, V.op)(e, r, n, o),
              p = (0, V.op)(e, r, n, u);
            s += "L "
              .concat(p.x, ",")
              .concat(p.y, "\n            A ")
              .concat(n, ",")
              .concat(n, ",0,\n            ")
              .concat(+(Math.abs(a) > 180), ",")
              .concat(+(o <= u), ",\n            ")
              .concat(f.x, ",")
              .concat(f.y, " Z");
          } else s += "L ".concat(e, ",").concat(r, " Z");
          return s;
        },
        tt = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Y(t, e);
          })(o, t);
          var e,
            r,
            n,
            i = Z(o);
          function o() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o),
              i.apply(this, arguments)
            );
          }
          return (
            (e = o),
            (r = [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.cx,
                    r = t.cy,
                    n = t.innerRadius,
                    i = t.outerRadius,
                    o = t.cornerRadius,
                    a = t.forceCornerRadius,
                    u = t.cornerIsExternal,
                    c = t.startAngle,
                    l = t.endAngle,
                    s = t.className;
                  if (i < n || c === l) return null;
                  var f,
                    p = _()("recharts-sector", s),
                    h = i - n,
                    d = (0, T.h1)(o, h, 0, !0);
                  return (
                    (f =
                      d > 0 && Math.abs(c - l) < 360
                        ? (function (t) {
                            var e = t.cx,
                              r = t.cy,
                              n = t.innerRadius,
                              i = t.outerRadius,
                              o = t.cornerRadius,
                              a = t.forceCornerRadius,
                              u = t.cornerIsExternal,
                              c = t.startAngle,
                              l = t.endAngle,
                              s = (0, T.uY)(l - c),
                              f = J({
                                cx: e,
                                cy: r,
                                radius: i,
                                angle: c,
                                sign: s,
                                cornerRadius: o,
                                cornerIsExternal: u,
                              }),
                              p = f.circleTangency,
                              h = f.lineTangency,
                              d = f.theta,
                              y = J({
                                cx: e,
                                cy: r,
                                radius: i,
                                angle: l,
                                sign: -s,
                                cornerRadius: o,
                                cornerIsExternal: u,
                              }),
                              v = y.circleTangency,
                              m = y.lineTangency,
                              g = y.theta,
                              b = u ? Math.abs(c - l) : Math.abs(c - l) - d - g;
                            if (b < 0)
                              return a
                                ? "M "
                                    .concat(h.x, ",")
                                    .concat(h.y, "\n        a")
                                    .concat(o, ",")
                                    .concat(o, ",0,0,1,")
                                    .concat(2 * o, ",0\n        a")
                                    .concat(o, ",")
                                    .concat(o, ",0,0,1,")
                                    .concat(2 * -o, ",0\n      ")
                                : Q({
                                    cx: e,
                                    cy: r,
                                    innerRadius: n,
                                    outerRadius: i,
                                    startAngle: c,
                                    endAngle: l,
                                  });
                            var x = "M "
                              .concat(h.x, ",")
                              .concat(h.y, "\n    A")
                              .concat(o, ",")
                              .concat(o, ",0,0,")
                              .concat(+(s < 0), ",")
                              .concat(p.x, ",")
                              .concat(p.y, "\n    A")
                              .concat(i, ",")
                              .concat(i, ",0,")
                              .concat(+(b > 180), ",")
                              .concat(+(s < 0), ",")
                              .concat(v.x, ",")
                              .concat(v.y, "\n    A")
                              .concat(o, ",")
                              .concat(o, ",0,0,")
                              .concat(+(s < 0), ",")
                              .concat(m.x, ",")
                              .concat(m.y, "\n  ");
                            if (n > 0) {
                              var w = J({
                                  cx: e,
                                  cy: r,
                                  radius: n,
                                  angle: c,
                                  sign: s,
                                  isExternal: !0,
                                  cornerRadius: o,
                                  cornerIsExternal: u,
                                }),
                                O = w.circleTangency,
                                S = w.lineTangency,
                                j = w.theta,
                                _ = J({
                                  cx: e,
                                  cy: r,
                                  radius: n,
                                  angle: l,
                                  sign: -s,
                                  isExternal: !0,
                                  cornerRadius: o,
                                  cornerIsExternal: u,
                                }),
                                P = _.circleTangency,
                                k = _.lineTangency,
                                A = _.theta,
                                E = u
                                  ? Math.abs(c - l)
                                  : Math.abs(c - l) - j - A;
                              if (E < 0 && 0 === o)
                                return ""
                                  .concat(x, "L")
                                  .concat(e, ",")
                                  .concat(r, "Z");
                              x += "L"
                                .concat(k.x, ",")
                                .concat(k.y, "\n      A")
                                .concat(o, ",")
                                .concat(o, ",0,0,")
                                .concat(+(s < 0), ",")
                                .concat(P.x, ",")
                                .concat(P.y, "\n      A")
                                .concat(n, ",")
                                .concat(n, ",0,")
                                .concat(+(E > 180), ",")
                                .concat(+(s > 0), ",")
                                .concat(O.x, ",")
                                .concat(O.y, "\n      A")
                                .concat(o, ",")
                                .concat(o, ",0,0,")
                                .concat(+(s < 0), ",")
                                .concat(S.x, ",")
                                .concat(S.y, "Z");
                            } else x += "L".concat(e, ",").concat(r, "Z");
                            return x;
                          })({
                            cx: e,
                            cy: r,
                            innerRadius: n,
                            outerRadius: i,
                            cornerRadius: Math.min(d, h / 2),
                            forceCornerRadius: a,
                            cornerIsExternal: u,
                            startAngle: c,
                            endAngle: l,
                          })
                        : Q({
                            cx: e,
                            cy: r,
                            innerRadius: n,
                            outerRadius: i,
                            startAngle: c,
                            endAngle: l,
                          })),
                    S.createElement(
                      "path",
                      H({}, (0, C.L6)(this.props, !0), {
                        className: p,
                        d: f,
                        role: "img",
                      }),
                    )
                  );
                },
              },
            ]) && G(e.prototype, r),
            n && G(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            o
          );
        })(S.PureComponent);
      !(function (t, e, r) {
        (e = K(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r);
      })(tt, "defaultProps", {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1,
      });
      var et = r(96963),
        rt = r(33951),
        nt = r(68201),
        it = r(99875),
        ot = r(68451),
        at = r(43774),
        ut = r(59509),
        ct = r(33790),
        lt = ["viewBox"],
        st = ["viewBox"],
        ft = ["ticks"];
      function pt(t) {
        return (
          (pt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          pt(t)
        );
      }
      function ht() {
        return (
          (ht = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          ht.apply(this, arguments)
        );
      }
      function dt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function yt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? dt(Object(r), !0).forEach(function (e) {
                wt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : dt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function vt(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function mt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Ot(n.key), n);
        }
      }
      function gt(t, e) {
        return (
          (gt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          gt(t, e)
        );
      }
      function bt(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = xt(t);
          if (e) {
            var i = xt(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === pt(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(this, r);
        };
      }
      function xt(t) {
        return (
          (xt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          xt(t)
        );
      }
      function wt(t, e, r) {
        return (
          (e = Ot(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function Ot(t) {
        var e = (function (t, e) {
          if ("object" !== pt(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== pt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === pt(e) ? e : String(e);
      }
      var St = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && gt(t, e);
        })(o, t);
        var e,
          r,
          n,
          i = bt(o);
        function o(t) {
          var e;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
            ((e = i.call(this, t)).state = { fontSize: "", letterSpacing: "" }),
            e
          );
        }
        return (
          (e = o),
          (n = [
            {
              key: "getTicks",
              value: function (t, e, r) {
                var n = t.tick,
                  i = t.ticks,
                  a = t.viewBox,
                  u = t.minTickGap,
                  c = t.orientation,
                  l = t.interval,
                  s = t.tickFormatter,
                  f = t.unit;
                return i && i.length && n
                  ? (0, T.hj)(l) || ut.x.isSsr
                    ? o.getNumberIntervalTicks(
                        i,
                        "number" == typeof l && (0, T.hj)(l) ? l : 0,
                      )
                    : "preserveStartEnd" === l
                    ? o.getTicksStart(
                        {
                          ticks: i,
                          tickFormatter: s,
                          viewBox: a,
                          orientation: c,
                          minTickGap: u,
                          unit: f,
                          fontSize: e,
                          letterSpacing: r,
                        },
                        !0,
                      )
                    : "preserveStart" === l
                    ? o.getTicksStart({
                        ticks: i,
                        tickFormatter: s,
                        viewBox: a,
                        orientation: c,
                        minTickGap: u,
                        unit: f,
                        fontSize: e,
                        letterSpacing: r,
                      })
                    : o.getTicksEnd({
                        ticks: i,
                        tickFormatter: s,
                        viewBox: a,
                        orientation: c,
                        minTickGap: u,
                        unit: f,
                        fontSize: e,
                        letterSpacing: r,
                      })
                  : [];
              },
            },
            {
              key: "getNumberIntervalTicks",
              value: function (t, e) {
                return t.filter(function (t, r) {
                  return r % (e + 1) == 0;
                });
              },
            },
            {
              key: "getTicksStart",
              value: function (t, e) {
                var r,
                  n,
                  i = t.ticks,
                  o = t.tickFormatter,
                  a = t.viewBox,
                  u = t.orientation,
                  l = t.minTickGap,
                  s = t.unit,
                  f = t.fontSize,
                  p = t.letterSpacing,
                  h = a.x,
                  d = a.y,
                  y = a.width,
                  v = a.height,
                  m = "top" === u || "bottom" === u ? "width" : "height",
                  g = (i || []).slice(),
                  b =
                    s && "width" === m
                      ? (0, it.xE)(s, { fontSize: f, letterSpacing: p })[m]
                      : 0,
                  x = g.length,
                  w = x >= 2 ? (0, T.uY)(g[1].coordinate - g[0].coordinate) : 1;
                if (
                  (1 === w
                    ? ((r = "width" === m ? h : d),
                      (n = "width" === m ? h + y : d + v))
                    : ((r = "width" === m ? h + y : d + v),
                      (n = "width" === m ? h : d)),
                  e)
                ) {
                  var O = i[x - 1],
                    S = c()(o) ? o(O.value, x - 1) : O.value,
                    j = (0, it.xE)(S, { fontSize: f, letterSpacing: p })[m] + b,
                    _ = w * (O.coordinate + (w * j) / 2 - n);
                  (g[x - 1] = O =
                    yt(
                      yt({}, O),
                      {},
                      {
                        tickCoord: _ > 0 ? O.coordinate - _ * w : O.coordinate,
                      },
                    )),
                    w * (O.tickCoord - (w * j) / 2 - r) >= 0 &&
                      w * (O.tickCoord + (w * j) / 2 - n) <= 0 &&
                      ((n = O.tickCoord - w * (j / 2 + l)),
                      (g[x - 1] = yt(yt({}, O), {}, { isShow: !0 })));
                }
                for (var P = e ? x - 1 : x, k = 0; k < P; k++) {
                  var A = g[k],
                    E = c()(o) ? o(A.value, k) : A.value,
                    M = (0, it.xE)(E, { fontSize: f, letterSpacing: p })[m] + b;
                  if (0 === k) {
                    var C = w * (A.coordinate - (w * M) / 2 - r);
                    g[k] = A = yt(
                      yt({}, A),
                      {},
                      {
                        tickCoord: C < 0 ? A.coordinate - C * w : A.coordinate,
                      },
                    );
                  } else
                    g[k] = A = yt(yt({}, A), {}, { tickCoord: A.coordinate });
                  w * (A.tickCoord - (w * M) / 2 - r) >= 0 &&
                    w * (A.tickCoord + (w * M) / 2 - n) <= 0 &&
                    ((r = A.tickCoord + w * (M / 2 + l)),
                    (g[k] = yt(yt({}, A), {}, { isShow: !0 })));
                }
                return g.filter(function (t) {
                  return t.isShow;
                });
              },
            },
            {
              key: "getTicksEnd",
              value: function (t) {
                var e,
                  r,
                  n = t.ticks,
                  i = t.tickFormatter,
                  o = t.viewBox,
                  a = t.orientation,
                  u = t.minTickGap,
                  l = t.unit,
                  s = t.fontSize,
                  f = t.letterSpacing,
                  p = o.x,
                  h = o.y,
                  d = o.width,
                  y = o.height,
                  v = "top" === a || "bottom" === a ? "width" : "height",
                  m =
                    l && "width" === v
                      ? (0, it.xE)(l, { fontSize: s, letterSpacing: f })[v]
                      : 0,
                  g = (n || []).slice(),
                  b = g.length,
                  x = b >= 2 ? (0, T.uY)(g[1].coordinate - g[0].coordinate) : 1;
                1 === x
                  ? ((e = "width" === v ? p : h),
                    (r = "width" === v ? p + d : h + y))
                  : ((e = "width" === v ? p + d : h + y),
                    (r = "width" === v ? p : h));
                for (var w = b - 1; w >= 0; w--) {
                  var O = g[w],
                    S = c()(i) ? i(O.value, b - w - 1) : O.value,
                    j = (0, it.xE)(S, { fontSize: s, letterSpacing: f })[v] + m;
                  if (w === b - 1) {
                    var _ = x * (O.coordinate + (x * j) / 2 - r);
                    g[w] = O = yt(
                      yt({}, O),
                      {},
                      {
                        tickCoord: _ > 0 ? O.coordinate - _ * x : O.coordinate,
                      },
                    );
                  } else
                    g[w] = O = yt(yt({}, O), {}, { tickCoord: O.coordinate });
                  x * (O.tickCoord - (x * j) / 2 - e) >= 0 &&
                    x * (O.tickCoord + (x * j) / 2 - r) <= 0 &&
                    ((r = O.tickCoord - x * (j / 2 + u)),
                    (g[w] = yt(yt({}, O), {}, { isShow: !0 })));
                }
                return g.filter(function (t) {
                  return t.isShow;
                });
              },
            },
            {
              key: "renderTickItem",
              value: function (t, e, r) {
                return S.isValidElement(t)
                  ? S.cloneElement(t, e)
                  : c()(t)
                  ? t(e)
                  : S.createElement(
                      ot.x,
                      ht({}, e, {
                        className: "recharts-cartesian-axis-tick-value",
                      }),
                      r,
                    );
              },
            },
          ]),
          (r = [
            {
              key: "shouldComponentUpdate",
              value: function (t, e) {
                var r = t.viewBox,
                  n = vt(t, lt),
                  i = this.props,
                  o = i.viewBox,
                  a = vt(i, st);
                return (
                  !(0, nt.w)(r, o) ||
                  !(0, nt.w)(n, a) ||
                  !(0, nt.w)(e, this.state)
                );
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                var t = this.layerReference;
                if (t) {
                  var e = t.getElementsByClassName(
                    "recharts-cartesian-axis-tick-value",
                  )[0];
                  e &&
                    this.setState({
                      fontSize: window.getComputedStyle(e).fontSize,
                      letterSpacing: window.getComputedStyle(e).letterSpacing,
                    });
                }
              },
            },
            {
              key: "getTickLineCoord",
              value: function (t) {
                var e,
                  r,
                  n,
                  i,
                  o,
                  a,
                  u = this.props,
                  c = u.x,
                  l = u.y,
                  s = u.width,
                  f = u.height,
                  p = u.orientation,
                  h = u.tickSize,
                  d = u.mirror,
                  y = u.tickMargin,
                  v = d ? -1 : 1,
                  m = t.tickSize || h,
                  g = (0, T.hj)(t.tickCoord) ? t.tickCoord : t.coordinate;
                switch (p) {
                  case "top":
                    (e = r = t.coordinate),
                      (a = (n = (i = l + +!d * f) - v * m) - v * y),
                      (o = g);
                    break;
                  case "left":
                    (n = i = t.coordinate),
                      (o = (e = (r = c + +!d * s) - v * m) - v * y),
                      (a = g);
                    break;
                  case "right":
                    (n = i = t.coordinate),
                      (o = (e = (r = c + +d * s) + v * m) + v * y),
                      (a = g);
                    break;
                  default:
                    (e = r = t.coordinate),
                      (a = (n = (i = l + +d * f) + v * m) + v * y),
                      (o = g);
                }
                return {
                  line: { x1: e, y1: n, x2: r, y2: i },
                  tick: { x: o, y: a },
                };
              },
            },
            {
              key: "getTickTextAnchor",
              value: function () {
                var t,
                  e = this.props,
                  r = e.orientation,
                  n = e.mirror;
                switch (r) {
                  case "left":
                    t = n ? "start" : "end";
                    break;
                  case "right":
                    t = n ? "end" : "start";
                    break;
                  default:
                    t = "middle";
                }
                return t;
              },
            },
            {
              key: "getTickVerticalAnchor",
              value: function () {
                var t = this.props,
                  e = t.orientation,
                  r = t.mirror,
                  n = "end";
                switch (e) {
                  case "left":
                  case "right":
                    n = "middle";
                    break;
                  case "top":
                    n = r ? "start" : "end";
                    break;
                  default:
                    n = r ? "end" : "start";
                }
                return n;
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var t = this.props,
                  e = t.x,
                  r = t.y,
                  n = t.width,
                  i = t.height,
                  o = t.orientation,
                  a = t.mirror,
                  u = t.axisLine,
                  c = yt(
                    yt(yt({}, (0, C.L6)(this.props)), (0, C.L6)(u)),
                    {},
                    { fill: "none" },
                  );
                if ("top" === o || "bottom" === o) {
                  var l = +(("top" === o && !a) || ("bottom" === o && a));
                  c = yt(
                    yt({}, c),
                    {},
                    { x1: e, y1: r + l * i, x2: e + n, y2: r + l * i },
                  );
                } else {
                  var s = +(("left" === o && !a) || ("right" === o && a));
                  c = yt(
                    yt({}, c),
                    {},
                    { x1: e + s * n, y1: r, x2: e + s * n, y2: r + i },
                  );
                }
                return S.createElement(
                  "line",
                  ht({}, c, {
                    className: _()(
                      "recharts-cartesian-axis-line",
                      d()(u, "className"),
                    ),
                  }),
                );
              },
            },
            {
              key: "renderTicks",
              value: function (t, e, r) {
                var n = this,
                  i = this.props,
                  a = i.tickLine,
                  u = i.stroke,
                  l = i.tick,
                  s = i.tickFormatter,
                  f = i.unit,
                  p = o.getTicks(
                    yt(yt({}, this.props), {}, { ticks: t }),
                    e,
                    r,
                  ),
                  h = this.getTickTextAnchor(),
                  y = this.getTickVerticalAnchor(),
                  v = (0, C.L6)(this.props),
                  m = (0, C.L6)(l),
                  g = yt(yt({}, v), {}, { fill: "none" }, (0, C.L6)(a)),
                  b = p.map(function (t, e) {
                    var r = n.getTickLineCoord(t),
                      i = r.line,
                      b = r.tick,
                      x = yt(
                        yt(
                          yt(
                            yt({ textAnchor: h, verticalAnchor: y }, v),
                            {},
                            { stroke: "none", fill: u },
                            m,
                          ),
                          b,
                        ),
                        {},
                        {
                          index: e,
                          payload: t,
                          visibleTicksCount: p.length,
                          tickFormatter: s,
                        },
                      );
                    return S.createElement(
                      k.m,
                      ht(
                        {
                          className: "recharts-cartesian-axis-tick",
                          key: "tick-".concat(e),
                        },
                        (0, ct.bw)(n.props, t, e),
                      ),
                      a &&
                        S.createElement(
                          "line",
                          ht({}, g, i, {
                            className: _()(
                              "recharts-cartesian-axis-tick-line",
                              d()(a, "className"),
                            ),
                          }),
                        ),
                      l &&
                        o.renderTickItem(
                          l,
                          x,
                          ""
                            .concat(c()(s) ? s(t.value, e) : t.value)
                            .concat(f || ""),
                        ),
                    );
                  });
                return S.createElement(
                  "g",
                  { className: "recharts-cartesian-axis-ticks" },
                  b,
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.axisLine,
                  n = e.width,
                  i = e.height,
                  o = e.ticksGenerator,
                  a = e.className;
                if (e.hide) return null;
                var u = this.props,
                  l = u.ticks,
                  s = vt(u, ft),
                  f = l;
                return (
                  c()(o) && (f = l && l.length > 0 ? o(this.props) : o(s)),
                  n <= 0 || i <= 0 || !f || !f.length
                    ? null
                    : S.createElement(
                        k.m,
                        {
                          className: _()("recharts-cartesian-axis", a),
                          ref: function (e) {
                            t.layerReference = e;
                          },
                        },
                        r && this.renderAxisLine(),
                        this.renderTicks(
                          f,
                          this.state.fontSize,
                          this.state.letterSpacing,
                        ),
                        at._.renderCallByParent(this.props),
                      )
                );
              },
            },
          ]) && mt(e.prototype, r),
          n && mt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          o
        );
      })(S.Component);
      wt(St, "displayName", "CartesianAxis"),
        wt(St, "defaultProps", {
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
      var jt = r(2514),
        _t = r(71298);
      function Pt(t) {
        return (
          (Pt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Pt(t)
        );
      }
      function kt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function At(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? kt(Object(r), !0).forEach(function (e) {
                Et(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : kt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function Et(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== Pt(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== Pt(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === Pt(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var Mt = ["Webkit", "Moz", "O", "ms"];
      function Tt(t) {
        return (
          (Tt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Tt(t)
        );
      }
      function Ct() {
        return (
          (Ct = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          Ct.apply(this, arguments)
        );
      }
      function It(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Nt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? It(Object(r), !0).forEach(function (e) {
                $t(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : It(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function Dt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, zt(n.key), n);
        }
      }
      function Rt(t, e) {
        return (
          (Rt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Rt(t, e)
        );
      }
      function Lt(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Ft(t);
          if (e) {
            var i = Ft(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === Tt(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return Bt(t);
          })(this, r);
        };
      }
      function Bt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function Ft(t) {
        return (
          (Ft = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ft(t)
        );
      }
      function $t(t, e, r) {
        return (
          (e = zt(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function zt(t) {
        var e = (function (t, e) {
          if ("object" !== Tt(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== Tt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === Tt(e) ? e : String(e);
      }
      var Ut = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        qt = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Rt(t, e);
          })(o, t);
          var e,
            r,
            n,
            i = Lt(o);
          function o(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o),
              $t(Bt((e = i.call(this, t))), "handleDrag", function (t) {
                e.leaveTimer &&
                  (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
                  e.state.isTravellerMoving
                    ? e.handleTravellerMove(t)
                    : e.state.isSlideMoving && e.handleSlideDrag(t);
              }),
              $t(Bt(e), "handleTouchMove", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  e.handleDrag(t.changedTouches[0]);
              }),
              $t(Bt(e), "handleDragEnd", function () {
                e.setState({ isTravellerMoving: !1, isSlideMoving: !1 }),
                  e.detachDragEndListener();
              }),
              $t(Bt(e), "handleLeaveWrapper", function () {
                (e.state.isTravellerMoving || e.state.isSlideMoving) &&
                  (e.leaveTimer = window.setTimeout(
                    e.handleDragEnd,
                    e.props.leaveTimeOut,
                  ));
              }),
              $t(Bt(e), "handleEnterSlideOrTraveller", function () {
                e.setState({ isTextActive: !0 });
              }),
              $t(Bt(e), "handleLeaveSlideOrTraveller", function () {
                e.setState({ isTextActive: !1 });
              }),
              $t(Bt(e), "handleSlideDragStart", function (t) {
                var r = Ut(t) ? t.changedTouches[0] : t;
                e.setState({
                  isTravellerMoving: !1,
                  isSlideMoving: !0,
                  slideMoveStartX: r.pageX,
                }),
                  e.attachDragEndListener();
              }),
              (e.travellerDragStartHandlers = {
                startX: e.handleTravellerDragStart.bind(Bt(e), "startX"),
                endX: e.handleTravellerDragStart.bind(Bt(e), "endX"),
              }),
              (e.state = {}),
              e
            );
          }
          return (
            (e = o),
            (r = [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.leaveTimer &&
                    (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                    this.detachDragEndListener();
                },
              },
              {
                key: "getIndex",
                value: function (t) {
                  var e = t.startX,
                    r = t.endX,
                    n = this.state.scaleValues,
                    i = this.props,
                    a = i.gap,
                    u = i.data.length - 1,
                    c = Math.min(e, r),
                    l = Math.max(e, r),
                    s = o.getIndexInRange(n, c),
                    f = o.getIndexInRange(n, l);
                  return {
                    startIndex: s - (s % a),
                    endIndex: f === u ? u : f - (f % a),
                  };
                },
              },
              {
                key: "getTextOfTick",
                value: function (t) {
                  var e = this.props,
                    r = e.data,
                    n = e.tickFormatter,
                    i = e.dataKey,
                    o = (0, _t.F$)(r[t], i, t);
                  return c()(n) ? n(o, t) : o;
                },
              },
              {
                key: "attachDragEndListener",
                value: function () {
                  window.addEventListener("mouseup", this.handleDragEnd, !0),
                    window.addEventListener("touchend", this.handleDragEnd, !0),
                    window.addEventListener("mousemove", this.handleDrag, !0);
                },
              },
              {
                key: "detachDragEndListener",
                value: function () {
                  window.removeEventListener("mouseup", this.handleDragEnd, !0),
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
                value: function (t) {
                  var e = this.state,
                    r = e.slideMoveStartX,
                    n = e.startX,
                    i = e.endX,
                    o = this.props,
                    a = o.x,
                    u = o.width,
                    c = o.travellerWidth,
                    l = o.startIndex,
                    s = o.endIndex,
                    f = o.onChange,
                    p = t.pageX - r;
                  p > 0
                    ? (p = Math.min(p, a + u - c - i, a + u - c - n))
                    : p < 0 && (p = Math.max(p, a - n, a - i));
                  var h = this.getIndex({ startX: n + p, endX: i + p });
                  (h.startIndex === l && h.endIndex === s) || !f || f(h),
                    this.setState({
                      startX: n + p,
                      endX: i + p,
                      slideMoveStartX: t.pageX,
                    });
                },
              },
              {
                key: "handleTravellerDragStart",
                value: function (t, e) {
                  var r = Ut(e) ? e.changedTouches[0] : e;
                  this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: t,
                    brushMoveStartX: r.pageX,
                  }),
                    this.attachDragEndListener();
                },
              },
              {
                key: "handleTravellerMove",
                value: function (t) {
                  var e,
                    r = this.state,
                    n = r.brushMoveStartX,
                    i = r.movingTravellerId,
                    o = r.endX,
                    a = r.startX,
                    u = this.state[i],
                    c = this.props,
                    l = c.x,
                    s = c.width,
                    f = c.travellerWidth,
                    p = c.onChange,
                    h = c.gap,
                    d = c.data,
                    y = { startX: this.state.startX, endX: this.state.endX },
                    v = t.pageX - n;
                  v > 0
                    ? (v = Math.min(v, l + s - f - u))
                    : v < 0 && (v = Math.max(v, l - u)),
                    (y[i] = u + v);
                  var m = this.getIndex(y),
                    g = m.startIndex,
                    b = m.endIndex;
                  this.setState(
                    ($t((e = {}), i, u + v),
                    $t(e, "brushMoveStartX", t.pageX),
                    e),
                    function () {
                      var t;
                      p &&
                        ((t = d.length - 1),
                        (("startX" === i &&
                          (o > a ? g % h == 0 : b % h == 0)) ||
                          (o < a && b === t) ||
                          ("endX" === i && (o > a ? b % h == 0 : g % h == 0)) ||
                          (o > a && b === t)) &&
                          p(m));
                    },
                  );
                },
              },
              {
                key: "renderBackground",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    r = t.y,
                    n = t.width,
                    i = t.height,
                    o = t.fill,
                    a = t.stroke;
                  return S.createElement("rect", {
                    stroke: a,
                    fill: o,
                    x: e,
                    y: r,
                    width: n,
                    height: i,
                  });
                },
              },
              {
                key: "renderPanorama",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    r = t.y,
                    n = t.width,
                    i = t.height,
                    o = t.data,
                    a = t.children,
                    u = t.padding,
                    c = S.Children.only(a);
                  return c
                    ? S.cloneElement(c, {
                        x: e,
                        y: r,
                        width: n,
                        height: i,
                        margin: u,
                        compact: !0,
                        data: o,
                      })
                    : null;
                },
              },
              {
                key: "renderTravellerLayer",
                value: function (t, e) {
                  var r = this.props,
                    n = r.y,
                    i = r.travellerWidth,
                    a = r.height,
                    u = r.traveller,
                    c = Math.max(t, this.props.x),
                    l = Nt(
                      Nt({}, (0, C.L6)(this.props)),
                      {},
                      { x: c, y: n, width: i, height: a },
                    );
                  return S.createElement(
                    k.m,
                    {
                      className: "recharts-brush-traveller",
                      onMouseEnter: this.handleEnterSlideOrTraveller,
                      onMouseLeave: this.handleLeaveSlideOrTraveller,
                      onMouseDown: this.travellerDragStartHandlers[e],
                      onTouchStart: this.travellerDragStartHandlers[e],
                      style: { cursor: "col-resize" },
                    },
                    o.renderTraveller(u, l),
                  );
                },
              },
              {
                key: "renderSlide",
                value: function (t, e) {
                  var r = this.props,
                    n = r.y,
                    i = r.height,
                    o = r.stroke,
                    a = r.travellerWidth,
                    u = Math.min(t, e) + a,
                    c = Math.max(Math.abs(e - t) - a, 0);
                  return S.createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: { cursor: "move" },
                    stroke: "none",
                    fill: o,
                    fillOpacity: 0.2,
                    x: u,
                    y: n,
                    width: c,
                    height: i,
                  });
                },
              },
              {
                key: "renderText",
                value: function () {
                  var t = this.props,
                    e = t.startIndex,
                    r = t.endIndex,
                    n = t.y,
                    i = t.height,
                    o = t.travellerWidth,
                    a = t.stroke,
                    u = this.state,
                    c = u.startX,
                    l = u.endX,
                    s = { pointerEvents: "none", fill: a };
                  return S.createElement(
                    k.m,
                    { className: "recharts-brush-texts" },
                    S.createElement(
                      ot.x,
                      Ct(
                        {
                          textAnchor: "end",
                          verticalAnchor: "middle",
                          x: Math.min(c, l) - 5,
                          y: n + i / 2,
                        },
                        s,
                      ),
                      this.getTextOfTick(e),
                    ),
                    S.createElement(
                      ot.x,
                      Ct(
                        {
                          textAnchor: "start",
                          verticalAnchor: "middle",
                          x: Math.max(c, l) + o + 5,
                          y: n + i / 2,
                        },
                        s,
                      ),
                      this.getTextOfTick(r),
                    ),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.data,
                    r = t.className,
                    n = t.children,
                    i = t.x,
                    o = t.y,
                    a = t.width,
                    u = t.height,
                    c = t.alwaysShowText,
                    l = this.state,
                    s = l.startX,
                    f = l.endX,
                    p = l.isTextActive,
                    h = l.isSlideMoving,
                    d = l.isTravellerMoving;
                  if (
                    !e ||
                    !e.length ||
                    !(0, T.hj)(i) ||
                    !(0, T.hj)(o) ||
                    !(0, T.hj)(a) ||
                    !(0, T.hj)(u) ||
                    a <= 0 ||
                    u <= 0
                  )
                    return null;
                  var y = _()("recharts-brush", r),
                    v = 1 === S.Children.count(n),
                    m = (function (t, e) {
                      if (!t) return null;
                      var r = t.replace(/(\w)/, function (t) {
                          return t.toUpperCase();
                        }),
                        n = Mt.reduce(function (t, n) {
                          return At(At({}, t), {}, Et({}, n + r, e));
                        }, {});
                      return (n[t] = e), n;
                    })("userSelect", "none");
                  return S.createElement(
                    k.m,
                    {
                      className: y,
                      onMouseLeave: this.handleLeaveWrapper,
                      onTouchMove: this.handleTouchMove,
                      style: m,
                    },
                    this.renderBackground(),
                    v && this.renderPanorama(),
                    this.renderSlide(s, f),
                    this.renderTravellerLayer(s, "startX"),
                    this.renderTravellerLayer(f, "endX"),
                    (p || h || d || c) && this.renderText(),
                  );
                },
              },
            ]),
            (n = [
              {
                key: "renderDefaultTraveller",
                value: function (t) {
                  var e = t.x,
                    r = t.y,
                    n = t.width,
                    i = t.height,
                    o = t.stroke,
                    a = Math.floor(r + i / 2) - 1;
                  return S.createElement(
                    S.Fragment,
                    null,
                    S.createElement("rect", {
                      x: e,
                      y: r,
                      width: n,
                      height: i,
                      fill: o,
                      stroke: "none",
                    }),
                    S.createElement("line", {
                      x1: e + 1,
                      y1: a,
                      x2: e + n - 1,
                      y2: a,
                      fill: "none",
                      stroke: "#fff",
                    }),
                    S.createElement("line", {
                      x1: e + 1,
                      y1: a + 2,
                      x2: e + n - 1,
                      y2: a + 2,
                      fill: "none",
                      stroke: "#fff",
                    }),
                  );
                },
              },
              {
                key: "renderTraveller",
                value: function (t, e) {
                  return S.isValidElement(t)
                    ? S.cloneElement(t, e)
                    : c()(t)
                    ? t(e)
                    : o.renderDefaultTraveller(e);
                },
              },
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  var r = t.data,
                    n = t.width,
                    i = t.x,
                    o = t.travellerWidth,
                    a = t.updateId,
                    u = t.startIndex,
                    c = t.endIndex;
                  if (r !== e.prevData || a !== e.prevUpdateId)
                    return Nt(
                      {
                        prevData: r,
                        prevTravellerWidth: o,
                        prevUpdateId: a,
                        prevX: i,
                        prevWidth: n,
                      },
                      r && r.length
                        ? (function (t) {
                            var e = t.data,
                              r = t.startIndex,
                              n = t.endIndex,
                              i = t.x,
                              o = t.width,
                              a = t.travellerWidth;
                            if (!e || !e.length) return {};
                            var u = e.length,
                              c = (0, jt.x)()
                                .domain(v()(0, u))
                                .range([i, i + o - a]),
                              l = c.domain().map(function (t) {
                                return c(t);
                              });
                            return {
                              isTextActive: !1,
                              isSlideMoving: !1,
                              isTravellerMoving: !1,
                              startX: c(r),
                              endX: c(n),
                              scale: c,
                              scaleValues: l,
                            };
                          })({
                            data: r,
                            width: n,
                            x: i,
                            travellerWidth: o,
                            startIndex: u,
                            endIndex: c,
                          })
                        : { scale: null, scaleValues: null },
                    );
                  if (
                    e.scale &&
                    (n !== e.prevWidth ||
                      i !== e.prevX ||
                      o !== e.prevTravellerWidth)
                  ) {
                    e.scale.range([i, i + n - o]);
                    var l = e.scale.domain().map(function (t) {
                      return e.scale(t);
                    });
                    return {
                      prevData: r,
                      prevTravellerWidth: o,
                      prevUpdateId: a,
                      prevX: i,
                      prevWidth: n,
                      startX: e.scale(t.startIndex),
                      endX: e.scale(t.endIndex),
                      scaleValues: l,
                    };
                  }
                  return null;
                },
              },
              {
                key: "getIndexInRange",
                value: function (t, e) {
                  for (var r = 0, n = t.length - 1; n - r > 1; ) {
                    var i = Math.floor((r + n) / 2);
                    t[i] > e ? (n = i) : (r = i);
                  }
                  return e >= t[n] ? n : r;
                },
              },
            ]),
            r && Dt(e.prototype, r),
            n && Dt(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            o
          );
        })(S.PureComponent);
      $t(qt, "displayName", "Brush"),
        $t(qt, "defaultProps", {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: "#fff",
          stroke: "#666",
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1,
        });
      var Vt = r(94694),
        Wt = r(87210),
        Ht = r(78706);
      function Gt(t) {
        return (
          (Gt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Gt(t)
        );
      }
      function Yt() {
        return (
          (Yt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          Yt.apply(this, arguments)
        );
      }
      function Zt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Xt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Zt(Object(r), !0).forEach(function (e) {
                Kt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Zt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function Kt(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== Gt(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== Gt(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === Gt(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function Jt(t) {
        var e = t.x,
          r = t.y,
          n = t.r,
          i = t.alwaysShow,
          o = t.clipPathId,
          a = (0, T.P2)(e),
          u = (0, T.P2)(r);
        if (
          ((0, Ht.Z)(
            void 0 === i,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
          ),
          !a || !u)
        )
          return null;
        var c = (function (t) {
          var e = t.x,
            r = t.y,
            n = t.xAxis,
            i = t.yAxis,
            o = (0, Wt.Ky)({ x: n.scale, y: i.scale }),
            a = o.apply({ x: e, y: r }, { bandAware: !0 });
          return (0, Vt.B)(t, "discard") && !o.isInRange(a) ? null : a;
        })(t);
        if (!c) return null;
        var l = c.x,
          s = c.y,
          f = t.shape,
          p = t.className,
          h = Xt(
            Xt(
              {
                clipPath: (0, Vt.B)(t, "hidden")
                  ? "url(#".concat(o, ")")
                  : void 0,
              },
              (0, C.L6)(t, !0),
            ),
            {},
            { cx: l, cy: s },
          );
        return S.createElement(
          k.m,
          { className: _()("recharts-reference-dot", p) },
          Jt.renderDot(f, h),
          at._.renderCallByParent(t, {
            x: l - n,
            y: s - n,
            width: 2 * n,
            height: 2 * n,
          }),
        );
      }
      (Jt.displayName = "ReferenceDot"),
        (Jt.defaultProps = {
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
        (Jt.renderDot = function (t, e) {
          return S.isValidElement(t)
            ? S.cloneElement(t, e)
            : c()(t)
            ? t(e)
            : S.createElement(
                et.o,
                Yt({}, e, {
                  cx: e.cx,
                  cy: e.cy,
                  className: "recharts-reference-dot-dot",
                }),
              );
        });
      var Qt = r(48586);
      function te(t) {
        return (
          (te =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          te(t)
        );
      }
      var ee = [
        "isFront",
        "ifOverflow",
        "xAxisId",
        "yAxisId",
        "r",
        "fill",
        "fillOpacity",
        "stroke",
        "strokeWidth",
      ];
      function re() {
        return (
          (re = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          re.apply(this, arguments)
        );
      }
      function ne(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ie(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ne(Object(r), !0).forEach(function (e) {
                oe(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ne(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function oe(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== te(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== te(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === te(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function ae(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function ue(t) {
        var e = t.isFront,
          r = void 0 !== e && e,
          n = t.ifOverflow,
          i = void 0 === n ? "discard" : n,
          o = t.xAxisId,
          a = void 0 === o ? 0 : o,
          u = t.yAxisId,
          c = void 0 === u ? 0 : u,
          l = t.r,
          s = void 0 === l ? 10 : l,
          f = t.fill,
          p = void 0 === f ? "#ccc" : f,
          h = t.fillOpacity,
          d = void 0 === h ? 0.5 : h,
          y = t.stroke,
          v = void 0 === y ? "none" : y,
          m = t.strokeWidth,
          g = ie(
            {
              isFront: r,
              ifOverflow: i,
              xAxisId: a,
              yAxisId: c,
              r: s,
              fill: p,
              fillOpacity: d,
              stroke: v,
              strokeWidth: void 0 === m ? 1 : m,
            },
            ae(t, ee),
          ),
          b = g.x1,
          x = g.x2,
          w = g.y1,
          O = g.y2,
          j = g.className,
          P = g.alwaysShow,
          A = g.clipPathId;
        (0, Ht.Z)(
          void 0 === P,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var E = (0, T.P2)(b),
          M = (0, T.P2)(x),
          I = (0, T.P2)(w),
          N = (0, T.P2)(O),
          D = g.shape;
        if (!(E || M || I || N || D)) return null;
        var R = (function (t, e, r, n, i) {
          var o = i.x1,
            a = i.x2,
            u = i.y1,
            c = i.y2,
            l = i.xAxis,
            s = i.yAxis;
          if (!l || !s) return null;
          var f = (0, Wt.Ky)({ x: l.scale, y: s.scale }),
            p = {
              x: t ? f.x.apply(o, { position: "start" }) : f.x.rangeMin,
              y: r ? f.y.apply(u, { position: "start" }) : f.y.rangeMin,
            },
            h = {
              x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
              y: n ? f.y.apply(c, { position: "end" }) : f.y.rangeMax,
            };
          return !(0, Vt.B)(i, "discard") || (f.isInRange(p) && f.isInRange(h))
            ? (0, Wt.O1)(p, h)
            : null;
        })(E, M, I, N, g);
        if (!R && !D) return null;
        var L = (0, Vt.B)(g, "hidden") ? "url(#".concat(A, ")") : void 0;
        return S.createElement(
          k.m,
          { className: _()("recharts-reference-area", j) },
          ue.renderRect(D, ie(ie({ clipPath: L }, (0, C.L6)(g, !0)), R)),
          at._.renderCallByParent(g, R),
        );
      }
      function ce(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return le(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return le(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return le(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function le(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      (ue.displayName = "ReferenceArea"),
        (ue.renderRect = function (t, e) {
          return S.isValidElement(t)
            ? S.cloneElement(t, e)
            : c()(t)
            ? t(e)
            : S.createElement(
                rt.A,
                re({}, e, { className: "recharts-reference-area-rect" }),
              );
        });
      var se = function (t, e, r, n, i) {
          var o = (0, C.NN)(t, Qt.d),
            a = (0, C.NN)(t, Jt),
            u = [].concat(ce(o), ce(a)),
            c = (0, C.NN)(t, ue),
            l = "".concat(n, "Id"),
            s = n[0],
            f = e;
          if (
            (u.length &&
              (f = u.reduce(function (t, e) {
                if (
                  e.props[l] === r &&
                  (0, Vt.B)(e.props, "extendDomain") &&
                  (0, T.hj)(e.props[s])
                ) {
                  var n = e.props[s];
                  return [Math.min(t[0], n), Math.max(t[1], n)];
                }
                return t;
              }, f)),
            c.length)
          ) {
            var p = "".concat(s, "1"),
              h = "".concat(s, "2");
            f = c.reduce(function (t, e) {
              if (
                e.props[l] === r &&
                (0, Vt.B)(e.props, "extendDomain") &&
                (0, T.hj)(e.props[p]) &&
                (0, T.hj)(e.props[h])
              ) {
                var n = e.props[p],
                  i = e.props[h];
                return [Math.min(t[0], n, i), Math.max(t[1], n, i)];
              }
              return t;
            }, f);
          }
          return (
            i &&
              i.length &&
              (f = i.reduce(function (t, e) {
                return (0, T.hj)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        fe = r(33034),
        pe = new (r.n(fe)())();
      pe.setMaxListeners && pe.setMaxListeners(10);
      var he = "recharts.syncMouseEvents",
        de = ["item"],
        ye = [
          "children",
          "className",
          "width",
          "height",
          "style",
          "compact",
          "title",
          "desc",
        ];
      function ve(t) {
        return (
          (ve =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ve(t)
        );
      }
      function me(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = o.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          Pe(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ge() {
        return (
          (ge = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          ge.apply(this, arguments)
        );
      }
      function be(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function xe(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Te(n.key), n);
        }
      }
      function we(t, e) {
        return (
          (we = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          we(t, e)
        );
      }
      function Oe(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = je(t);
          if (e) {
            var i = je(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === ve(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return Se(t);
          })(this, r);
        };
      }
      function Se(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function je(t) {
        return (
          (je = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          je(t)
        );
      }
      function _e(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ke(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          Pe(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Pe(t, e) {
        if (t) {
          if ("string" == typeof t) return ke(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? ke(t, e)
              : void 0
          );
        }
      }
      function ke(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function Ae(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Ee(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ae(Object(r), !0).forEach(function (e) {
                Me(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Ae(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function Me(t, e, r) {
        return (
          (e = Te(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function Te(t) {
        var e = (function (t, e) {
          if ("object" !== ve(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== ve(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === ve(e) ? e : String(e);
      }
      var Ce = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
        Ie = { x: 0, y: 0 },
        Ne = Number.isFinite ? Number.isFinite : isFinite,
        De =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame
            : "function" == typeof setImmediate
            ? setImmediate
            : setTimeout,
        Re =
          "function" == typeof cancelAnimationFrame
            ? cancelAnimationFrame
            : "function" == typeof clearImmediate
            ? clearImmediate
            : clearTimeout,
        Le = function (t, e, r) {
          var n = e.graphicalItems,
            i = e.dataStartIndex,
            o = e.dataEndIndex,
            a = (n || []).reduce(function (t, e) {
              var r = e.props.data;
              return r && r.length ? [].concat(_e(t), _e(r)) : t;
            }, []);
          return a && a.length > 0
            ? a
            : r && r.props && r.props.data && r.props.data.length > 0
            ? r.props.data
            : t && t.length && (0, T.hj)(i) && (0, T.hj)(o)
            ? t.slice(i, o + 1)
            : [];
        };
      function Be(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var Fe = function (t, e, r, n) {
          var i = t.graphicalItems,
            o = t.tooltipAxis,
            a = Le(e, t);
          return r < 0 || !i || !i.length || r >= a.length
            ? null
            : i.reduce(function (t, e) {
                if (e.props.hide) return t;
                var i,
                  u = e.props.data;
                if (o.dataKey && !o.allowDuplicatedCategory) {
                  var c = void 0 === u ? a : u;
                  i = (0, T.Ap)(c, o.dataKey, n);
                } else i = (u && u[r]) || a[r];
                return i ? [].concat(_e(t), [(0, _t.Qo)(e, i)]) : t;
              }, []);
        },
        $e = function (t, e, r, n) {
          var i = n || { x: t.chartX, y: t.chartY },
            o = (function (t, e) {
              return "horizontal" === e
                ? t.x
                : "vertical" === e
                ? t.y
                : "centric" === e
                ? t.angle
                : t.radius;
            })(i, r),
            a = t.orderedTooltipTicks,
            u = t.tooltipAxis,
            c = t.tooltipTicks,
            l = (0, _t.VO)(o, a, c, u);
          if (l >= 0 && c) {
            var s = c[l] && c[l].value,
              f = Fe(t, e, l, s),
              p = (function (t, e, r, n) {
                var i = e.find(function (t) {
                  return t && t.index === r;
                });
                if (i) {
                  if ("horizontal" === t) return { x: i.coordinate, y: n.y };
                  if ("vertical" === t) return { x: n.x, y: i.coordinate };
                  if ("centric" === t) {
                    var o = i.coordinate,
                      a = n.radius;
                    return Ee(
                      Ee(Ee({}, n), (0, V.op)(n.cx, n.cy, a, o)),
                      {},
                      { angle: o, radius: a },
                    );
                  }
                  var u = i.coordinate,
                    c = n.angle;
                  return Ee(
                    Ee(Ee({}, n), (0, V.op)(n.cx, n.cy, u, c)),
                    {},
                    { angle: c, radius: u },
                  );
                }
                return Ie;
              })(r, a, l, i);
            return {
              activeTooltipIndex: l,
              activeLabel: s,
              activePayload: f,
              activeCoordinate: p,
            };
          }
          return null;
        },
        ze = function (t, e) {
          var r = e.axes,
            n = e.graphicalItems,
            i = e.axisType,
            o = e.axisIdKey,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            l = t.layout,
            s = t.children,
            f = t.stackOffset,
            p = (0, _t.NA)(l, i);
          return r.reduce(function (e, r) {
            var h,
              d = r.props,
              y = d.type,
              m = d.dataKey,
              b = d.allowDataOverflow,
              x = d.allowDuplicatedCategory,
              w = d.scale,
              O = d.ticks,
              S = r.props[o];
            if (e[S]) return e;
            var j,
              _,
              P,
              k = Le(t.data, {
                graphicalItems: n.filter(function (t) {
                  return t.props[o] === S;
                }),
                dataStartIndex: u,
                dataEndIndex: c,
              }),
              A = k.length;
            (function (t, e, r) {
              if ("number" === r && !0 === e && Array.isArray(t)) {
                var n = null == t ? void 0 : t[0],
                  i = null == t ? void 0 : t[1];
                if (n && i && (0, T.hj)(n) && (0, T.hj)(i)) return !0;
              }
              return !1;
            })(r.props.domain, b, y) &&
              ((j = (0, _t.LG)(r.props.domain, null, b)),
              !p ||
                ("number" !== y && "auto" === w) ||
                (P = (0, _t.gF)(k, m, "category")));
            var E = Be(y);
            if (!j || 0 === j.length) {
              var M,
                C = null !== (M = r.props.domain) && void 0 !== M ? M : E;
              if (m) {
                if (((j = (0, _t.gF)(k, m, y)), "category" === y && p)) {
                  var I = (0, T.bv)(j);
                  x && I
                    ? ((_ = j), (j = v()(0, A)))
                    : x ||
                      (j = (0, _t.ko)(C, j, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(_e(t), [e]);
                      }, []));
                } else if ("category" === y)
                  j = x
                    ? j.filter(function (t) {
                        return "" !== t && !g()(t);
                      })
                    : (0, _t.ko)(C, j, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || "" === e || g()(e)
                          ? t
                          : [].concat(_e(t), [e]);
                      }, []);
                else if ("number" === y) {
                  var N = (0, _t.ZI)(
                    k,
                    n.filter(function (t) {
                      return t.props[o] === S && !t.props.hide;
                    }),
                    m,
                    i,
                    l,
                  );
                  N && (j = N);
                }
                !p ||
                  ("number" !== y && "auto" === w) ||
                  (P = (0, _t.gF)(k, m, "category"));
              } else
                j = p
                  ? v()(0, A)
                  : a && a[S] && a[S].hasStack && "number" === y
                  ? "expand" === f
                    ? [0, 1]
                    : (0, _t.EB)(a[S].stackGroups, u, c)
                  : (0, _t.s6)(
                      k,
                      n.filter(function (t) {
                        return t.props[o] === S && !t.props.hide;
                      }),
                      y,
                      l,
                      !0,
                    );
              if ("number" === y)
                (j = se(s, j, S, i, O)), C && (j = (0, _t.LG)(C, j, b));
              else if ("category" === y && C) {
                var D = C;
                j.every(function (t) {
                  return D.indexOf(t) >= 0;
                }) && (j = D);
              }
            }
            return Ee(
              Ee({}, e),
              {},
              Me(
                {},
                S,
                Ee(
                  Ee({}, r.props),
                  {},
                  {
                    axisType: i,
                    domain: j,
                    categoricalDomain: P,
                    duplicateDomain: _,
                    originalDomain:
                      null !== (h = r.props.domain) && void 0 !== h ? h : E,
                    isCategorical: p,
                    layout: l,
                  },
                ),
              ),
            );
          }, {});
        },
        Ue = function (t, e) {
          var r = e.axisType,
            n = void 0 === r ? "xAxis" : r,
            i = e.AxisComp,
            o = e.graphicalItems,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            l = t.children,
            s = "".concat(n, "Id"),
            f = (0, C.NN)(l, i),
            p = {};
          return (
            f && f.length
              ? (p = ze(t, {
                  axes: f,
                  graphicalItems: o,
                  axisType: n,
                  axisIdKey: s,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                }))
              : o &&
                o.length &&
                (p = (function (t, e) {
                  var r = e.graphicalItems,
                    n = e.Axis,
                    i = e.axisType,
                    o = e.axisIdKey,
                    a = e.stackGroups,
                    u = e.dataStartIndex,
                    c = e.dataEndIndex,
                    l = t.layout,
                    s = t.children,
                    f = Le(t.data, {
                      graphicalItems: r,
                      dataStartIndex: u,
                      dataEndIndex: c,
                    }),
                    p = f.length,
                    h = (0, _t.NA)(l, i),
                    y = -1;
                  return r.reduce(function (t, e) {
                    var m,
                      g = e.props[o],
                      b = Be("number");
                    return t[g]
                      ? t
                      : (y++,
                        h
                          ? (m = v()(0, p))
                          : a && a[g] && a[g].hasStack
                          ? ((m = (0, _t.EB)(a[g].stackGroups, u, c)),
                            (m = se(s, m, g, i)))
                          : ((m = (0, _t.LG)(
                              b,
                              (0, _t.s6)(
                                f,
                                r.filter(function (t) {
                                  return t.props[o] === g && !t.props.hide;
                                }),
                                "number",
                                l,
                              ),
                              n.defaultProps.allowDataOverflow,
                            )),
                            (m = se(s, m, g, i))),
                        Ee(
                          Ee({}, t),
                          {},
                          Me(
                            {},
                            g,
                            Ee(
                              Ee({ axisType: i }, n.defaultProps),
                              {},
                              {
                                hide: !0,
                                orientation: d()(
                                  Ce,
                                  "".concat(i, ".").concat(y % 2),
                                  null,
                                ),
                                domain: m,
                                originalDomain: b,
                                isCategorical: h,
                                layout: l,
                              },
                            ),
                          ),
                        ));
                  }, {});
                })(t, {
                  Axis: i,
                  graphicalItems: o,
                  axisType: n,
                  axisIdKey: s,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                })),
            p
          );
        },
        qe = function (t) {
          var e,
            r,
            n = t.children,
            i = t.defaultShowTooltip,
            o = (0, C.sP)(n, qt);
          return {
            chartX: 0,
            chartY: 0,
            dataStartIndex: (o && o.props && o.props.startIndex) || 0,
            dataEndIndex:
              void 0 !==
              (null == o || null === (e = o.props) || void 0 === e
                ? void 0
                : e.endIndex)
                ? null == o || null === (r = o.props) || void 0 === r
                  ? void 0
                  : r.endIndex
                : (t.data && t.data.length - 1) || 0,
            activeTooltipIndex: -1,
            isTooltipActive: !g()(i) && i,
          };
        },
        Ve = function (t) {
          return "horizontal" === t
            ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
            : "vertical" === t
            ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
            : "centric" === t
            ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
            : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
        },
        We = function (t) {
          var e,
            r = t.chartName,
            n = t.GraphicalChild,
            o = t.defaultTooltipEventType,
            u = void 0 === o ? "axis" : o,
            l = t.validateTooltipEventTypes,
            f = void 0 === l ? ["axis"] : l,
            h = t.axisComponents,
            y = t.legendContent,
            v = t.formatAxisMap,
            m = t.defaultProps,
            b = function (t, e) {
              var r = e.graphicalItems,
                n = e.stackGroups,
                i = e.offset,
                o = e.updateId,
                a = e.dataStartIndex,
                u = e.dataEndIndex,
                c = t.barSize,
                l = t.layout,
                s = t.barGap,
                f = t.barCategoryGap,
                p = t.maxBarSize,
                d = Ve(l),
                y = d.numericAxisName,
                v = d.cateAxisName,
                m = (function (t) {
                  return (
                    !(!t || !t.length) &&
                    t.some(function (t) {
                      var e = (0, C.Gf)(t && t.type);
                      return e && e.indexOf("Bar") >= 0;
                    })
                  );
                })(r),
                b = m && (0, _t.pt)({ barSize: c, stackGroups: n }),
                x = [];
              return (
                r.forEach(function (r, c) {
                  var d = Le(t.data, { dataStartIndex: a, dataEndIndex: u }, r),
                    m = r.props,
                    w = m.dataKey,
                    O = m.maxBarSize,
                    S = r.props["".concat(y, "Id")],
                    j = r.props["".concat(v, "Id")],
                    _ = h.reduce(function (t, n) {
                      var i,
                        o = e["".concat(n.axisType, "Map")],
                        a = r.props["".concat(n.axisType, "Id")],
                        u = o && o[a];
                      return Ee(
                        Ee({}, t),
                        {},
                        (Me((i = {}), n.axisType, u),
                        Me(i, "".concat(n.axisType, "Ticks"), (0, _t.uY)(u)),
                        i),
                      );
                    }, {}),
                    P = _[v],
                    k = _["".concat(v, "Ticks")],
                    A =
                      n &&
                      n[S] &&
                      n[S].hasStack &&
                      (0, _t.O3)(r, n[S].stackGroups),
                    E = (0, C.Gf)(r.type).indexOf("Bar") >= 0,
                    M = (0, _t.zT)(P, k),
                    T = [];
                  if (E) {
                    var I,
                      N,
                      D = g()(O) ? p : O,
                      R =
                        null !==
                          (I =
                            null !== (N = (0, _t.zT)(P, k, !0)) && void 0 !== N
                              ? N
                              : D) && void 0 !== I
                          ? I
                          : 0;
                    (T = (0, _t.qz)({
                      barGap: s,
                      barCategoryGap: f,
                      bandSize: R !== M ? R : M,
                      sizeList: b[j],
                      maxBarSize: D,
                    })),
                      R !== M &&
                        (T = T.map(function (t) {
                          return Ee(
                            Ee({}, t),
                            {},
                            {
                              position: Ee(
                                Ee({}, t.position),
                                {},
                                { offset: t.position.offset - R / 2 },
                              ),
                            },
                          );
                        }));
                  }
                  var L,
                    B = r && r.type && r.type.getComposedData;
                  B &&
                    x.push({
                      props: Ee(
                        Ee(
                          {},
                          B(
                            Ee(
                              Ee({}, _),
                              {},
                              {
                                displayedData: d,
                                props: t,
                                dataKey: w,
                                item: r,
                                bandSize: M,
                                barPosition: T,
                                offset: i,
                                stackedData: A,
                                layout: l,
                                dataStartIndex: a,
                                dataEndIndex: u,
                              },
                            ),
                          ),
                        ),
                        {},
                        ((L = { key: r.key || "item-".concat(c) }),
                        Me(L, y, _[y]),
                        Me(L, v, _[v]),
                        Me(L, "animationId", o),
                        L),
                      ),
                      childIndex: (0, C.$R)(r, t.children),
                      item: r,
                    });
                }),
                x
              );
            },
            w = function (t, e) {
              var i = t.props,
                o = t.dataStartIndex,
                a = t.dataEndIndex,
                u = t.updateId;
              if (!(0, C.TT)({ props: i })) return null;
              var c = i.children,
                l = i.layout,
                s = i.stackOffset,
                f = i.data,
                y = i.reverseStackOrder,
                m = Ve(l),
                g = m.numericAxisName,
                x = m.cateAxisName,
                w = (0, C.NN)(c, n),
                O = (0, _t.wh)(
                  f,
                  w,
                  "".concat(g, "Id"),
                  "".concat(x, "Id"),
                  s,
                  y,
                ),
                S = h.reduce(function (t, e) {
                  var r = "".concat(e.axisType, "Map");
                  return Ee(
                    Ee({}, t),
                    {},
                    Me(
                      {},
                      r,
                      Ue(
                        i,
                        Ee(
                          Ee({}, e),
                          {},
                          {
                            graphicalItems: w,
                            stackGroups: e.axisType === g && O,
                            dataStartIndex: o,
                            dataEndIndex: a,
                          },
                        ),
                      ),
                    ),
                  );
                }, {}),
                j = (function (t, e) {
                  var r = t.props,
                    n = t.graphicalItems,
                    i = t.xAxisMap,
                    o = void 0 === i ? {} : i,
                    a = t.yAxisMap,
                    u = void 0 === a ? {} : a,
                    c = r.width,
                    l = r.height,
                    s = r.children,
                    f = r.margin || {},
                    p = (0, C.sP)(s, qt),
                    h = (0, C.sP)(s, E.D),
                    y = Object.keys(u).reduce(
                      function (t, e) {
                        var r = u[e],
                          n = r.orientation;
                        return r.mirror || r.hide
                          ? t
                          : Ee(Ee({}, t), {}, Me({}, n, t[n] + r.width));
                      },
                      { left: f.left || 0, right: f.right || 0 },
                    ),
                    v = Object.keys(o).reduce(
                      function (t, e) {
                        var r = o[e],
                          n = r.orientation;
                        return r.mirror || r.hide
                          ? t
                          : Ee(
                              Ee({}, t),
                              {},
                              Me({}, n, d()(t, "".concat(n)) + r.height),
                            );
                      },
                      { top: f.top || 0, bottom: f.bottom || 0 },
                    ),
                    m = Ee(Ee({}, v), y),
                    g = m.bottom;
                  return (
                    p && (m.bottom += p.props.height || qt.defaultProps.height),
                    h && e && (m = (0, _t.By)(m, n, r, e)),
                    Ee(
                      Ee({ brushBottom: g }, m),
                      {},
                      {
                        width: c - m.left - m.right,
                        height: l - m.top - m.bottom,
                      },
                    )
                  );
                })(
                  Ee(Ee({}, S), {}, { props: i, graphicalItems: w }),
                  null == e ? void 0 : e.legendBBox,
                );
              Object.keys(S).forEach(function (t) {
                S[t] = v(i, S[t], j, t.replace("Map", ""), r);
              });
              var _,
                P,
                k,
                A = S["".concat(x, "Map")],
                M =
                  ((_ = A),
                  (P = (0, T.Kt)(_)),
                  {
                    tooltipTicks: (k = (0, _t.uY)(P, !1, !0)),
                    orderedTooltipTicks: p()(k, function (t) {
                      return t.coordinate;
                    }),
                    tooltipAxis: P,
                    tooltipAxisBandSize: (0, _t.zT)(P, k),
                  }),
                I = b(
                  i,
                  Ee(
                    Ee({}, S),
                    {},
                    {
                      dataStartIndex: o,
                      dataEndIndex: a,
                      updateId: u,
                      graphicalItems: w,
                      stackGroups: O,
                      offset: j,
                    },
                  ),
                );
              return Ee(
                Ee(
                  {
                    formattedGraphicalItems: I,
                    graphicalItems: w,
                    offset: j,
                    stackGroups: O,
                  },
                  M,
                ),
                S,
              );
            };
          return (
            (e = (function (t) {
              !(function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && we(t, e);
              })(p, t);
              var e,
                n,
                o,
                l = Oe(p);
              function p(t) {
                var e;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, p),
                  Me(Se((e = l.call(this, t))), "clearDeferId", function () {
                    !g()(e.deferId) && Re && Re(e.deferId), (e.deferId = null);
                  }),
                  Me(Se(e), "handleLegendBBoxUpdate", function (t) {
                    if (t) {
                      var r = e.state,
                        n = r.dataStartIndex,
                        i = r.dataEndIndex,
                        o = r.updateId;
                      e.setState(
                        Ee(
                          { legendBBox: t },
                          w(
                            {
                              props: e.props,
                              dataStartIndex: n,
                              dataEndIndex: i,
                              updateId: o,
                            },
                            Ee(Ee({}, e.state), {}, { legendBBox: t }),
                          ),
                        ),
                      );
                    }
                  }),
                  Me(Se(e), "handleReceiveSyncEvent", function (t, r, n) {
                    e.props.syncId === t &&
                      r !== e.uniqueChartId &&
                      (e.clearDeferId(),
                      (e.deferId = De && De(e.applySyncEvent.bind(Se(e), n))));
                  }),
                  Me(Se(e), "handleBrushChange", function (t) {
                    var r = t.startIndex,
                      n = t.endIndex;
                    if (
                      r !== e.state.dataStartIndex ||
                      n !== e.state.dataEndIndex
                    ) {
                      var i = e.state.updateId;
                      e.setState(function () {
                        return Ee(
                          { dataStartIndex: r, dataEndIndex: n },
                          w(
                            {
                              props: e.props,
                              dataStartIndex: r,
                              dataEndIndex: n,
                              updateId: i,
                            },
                            e.state,
                          ),
                        );
                      }),
                        e.triggerSyncEvent({
                          dataStartIndex: r,
                          dataEndIndex: n,
                        });
                    }
                  }),
                  Me(Se(e), "handleMouseEnter", function (t) {
                    var r = e.props.onMouseEnter,
                      n = e.getMouseInfo(t);
                    if (n) {
                      var i = Ee(Ee({}, n), {}, { isTooltipActive: !0 });
                      e.setState(i), e.triggerSyncEvent(i), c()(r) && r(i, t);
                    }
                  }),
                  Me(Se(e), "triggeredAfterMouseMove", function (t) {
                    var r = e.props.onMouseMove,
                      n = e.getMouseInfo(t),
                      i = n
                        ? Ee(Ee({}, n), {}, { isTooltipActive: !0 })
                        : { isTooltipActive: !1 };
                    e.setState(i), e.triggerSyncEvent(i), c()(r) && r(i, t);
                  }),
                  Me(Se(e), "handleItemMouseEnter", function (t) {
                    e.setState(function () {
                      return {
                        isTooltipActive: !0,
                        activeItem: t,
                        activePayload: t.tooltipPayload,
                        activeCoordinate: t.tooltipPosition || {
                          x: t.cx,
                          y: t.cy,
                        },
                      };
                    });
                  }),
                  Me(Se(e), "handleItemMouseLeave", function () {
                    e.setState(function () {
                      return { isTooltipActive: !1 };
                    });
                  }),
                  Me(Se(e), "handleMouseMove", function (t) {
                    t && c()(t.persist) && t.persist(),
                      e.triggeredAfterMouseMove(t);
                  }),
                  Me(Se(e), "handleMouseLeave", function (t) {
                    var r = e.props.onMouseLeave,
                      n = { isTooltipActive: !1 };
                    e.setState(n),
                      e.triggerSyncEvent(n),
                      c()(r) && r(n, t),
                      e.cancelThrottledTriggerAfterMouseMove();
                  }),
                  Me(Se(e), "handleOuterEvent", function (t) {
                    var r = (0, C.Bh)(t),
                      n = d()(e.props, "".concat(r));
                    r &&
                      c()(n) &&
                      n(
                        /.*touch.*/i.test(r)
                          ? e.getMouseInfo(t.changedTouches[0])
                          : e.getMouseInfo(t),
                        t,
                      );
                  }),
                  Me(Se(e), "handleClick", function (t) {
                    var r = e.props.onClick,
                      n = e.getMouseInfo(t);
                    if (n) {
                      var i = Ee(Ee({}, n), {}, { isTooltipActive: !0 });
                      e.setState(i), e.triggerSyncEvent(i), c()(r) && r(i, t);
                    }
                  }),
                  Me(Se(e), "handleMouseDown", function (t) {
                    var r = e.props.onMouseDown;
                    c()(r) && r(e.getMouseInfo(t), t);
                  }),
                  Me(Se(e), "handleMouseUp", function (t) {
                    var r = e.props.onMouseUp;
                    c()(r) && r(e.getMouseInfo(t), t);
                  }),
                  Me(Se(e), "handleTouchMove", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      e.handleMouseMove(t.changedTouches[0]);
                  }),
                  Me(Se(e), "handleTouchStart", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      e.handleMouseDown(t.changedTouches[0]);
                  }),
                  Me(Se(e), "handleTouchEnd", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      e.handleMouseUp(t.changedTouches[0]);
                  }),
                  Me(Se(e), "verticalCoordinatesGenerator", function (t) {
                    var e = t.xAxis,
                      r = t.width,
                      n = t.height,
                      i = t.offset;
                    return (0, _t.Rf)(
                      St.getTicks(
                        Ee(
                          Ee(Ee({}, St.defaultProps), e),
                          {},
                          {
                            ticks: (0, _t.uY)(e, !0),
                            viewBox: { x: 0, y: 0, width: r, height: n },
                          },
                        ),
                      ),
                      i.left,
                      i.left + i.width,
                    );
                  }),
                  Me(Se(e), "horizontalCoordinatesGenerator", function (t) {
                    var e = t.yAxis,
                      r = t.width,
                      n = t.height,
                      i = t.offset;
                    return (0, _t.Rf)(
                      St.getTicks(
                        Ee(
                          Ee(Ee({}, St.defaultProps), e),
                          {},
                          {
                            ticks: (0, _t.uY)(e, !0),
                            viewBox: { x: 0, y: 0, width: r, height: n },
                          },
                        ),
                      ),
                      i.top,
                      i.top + i.height,
                    );
                  }),
                  Me(Se(e), "axesTicksGenerator", function (t) {
                    return (0, _t.uY)(t, !0);
                  }),
                  Me(Se(e), "renderCursor", function (t) {
                    var n = e.state,
                      i = n.isTooltipActive,
                      o = n.activeCoordinate,
                      a = n.activePayload,
                      u = n.offset,
                      c = n.activeTooltipIndex,
                      l = e.getTooltipEventType();
                    if (
                      !t ||
                      !t.props.cursor ||
                      !i ||
                      !o ||
                      ("ScatterChart" !== r && "axis" !== l)
                    )
                      return null;
                    var s,
                      f = e.props.layout,
                      p = M.H;
                    if ("ScatterChart" === r) (s = o), (p = q);
                    else if ("BarChart" === r)
                      (s = e.getCursorRectangle()), (p = rt.A);
                    else if ("radial" === f) {
                      var h = e.getCursorPoints(),
                        d = h.cx,
                        y = h.cy,
                        v = h.radius;
                      (s = {
                        cx: d,
                        cy: y,
                        startAngle: h.startAngle,
                        endAngle: h.endAngle,
                        innerRadius: v,
                        outerRadius: v,
                      }),
                        (p = tt);
                    } else (s = { points: e.getCursorPoints() }), (p = M.H);
                    var m = t.key || "_recharts-cursor",
                      g = Ee(
                        Ee(
                          Ee(
                            Ee({ stroke: "#ccc", pointerEvents: "none" }, u),
                            s,
                          ),
                          (0, C.L6)(t.props.cursor),
                        ),
                        {},
                        {
                          payload: a,
                          payloadIndex: c,
                          key: m,
                          className: "recharts-tooltip-cursor",
                        },
                      );
                    return (0, S.isValidElement)(t.props.cursor)
                      ? (0, S.cloneElement)(t.props.cursor, g)
                      : (0, S.createElement)(p, g);
                  }),
                  Me(Se(e), "renderPolarAxis", function (t, r, n) {
                    var i = d()(t, "type.axisType"),
                      o = d()(e.state, "".concat(i, "Map")),
                      a = o && o[t.props["".concat(i, "Id")]];
                    return (0, S.cloneElement)(
                      t,
                      Ee(
                        Ee({}, a),
                        {},
                        {
                          className: i,
                          key: t.key || "".concat(r, "-").concat(n),
                          ticks: (0, _t.uY)(a, !0),
                        },
                      ),
                    );
                  }),
                  Me(Se(e), "renderXAxis", function (t, r, n) {
                    var i = e.state.xAxisMap[t.props.xAxisId];
                    return e.renderAxis(i, t, r, n);
                  }),
                  Me(Se(e), "renderYAxis", function (t, r, n) {
                    var i = e.state.yAxisMap[t.props.yAxisId];
                    return e.renderAxis(i, t, r, n);
                  }),
                  Me(Se(e), "renderGrid", function (t) {
                    var r = e.state,
                      n = r.xAxisMap,
                      o = r.yAxisMap,
                      u = r.offset,
                      c = e.props,
                      l = c.width,
                      s = c.height,
                      f = (0, T.Kt)(n),
                      p =
                        a()(o, function (t) {
                          return i()(t.domain, Ne);
                        }) || (0, T.Kt)(o),
                      h = t.props || {};
                    return (0, S.cloneElement)(t, {
                      key: t.key || "grid",
                      x: (0, T.hj)(h.x) ? h.x : u.left,
                      y: (0, T.hj)(h.y) ? h.y : u.top,
                      width: (0, T.hj)(h.width) ? h.width : u.width,
                      height: (0, T.hj)(h.height) ? h.height : u.height,
                      xAxis: f,
                      yAxis: p,
                      offset: u,
                      chartWidth: l,
                      chartHeight: s,
                      verticalCoordinatesGenerator:
                        h.verticalCoordinatesGenerator ||
                        e.verticalCoordinatesGenerator,
                      horizontalCoordinatesGenerator:
                        h.horizontalCoordinatesGenerator ||
                        e.horizontalCoordinatesGenerator,
                    });
                  }),
                  Me(Se(e), "renderPolarGrid", function (t) {
                    var r = t.props,
                      n = r.radialLines,
                      i = r.polarAngles,
                      o = r.polarRadius,
                      a = e.state,
                      u = a.radiusAxisMap,
                      c = a.angleAxisMap,
                      l = (0, T.Kt)(u),
                      s = (0, T.Kt)(c),
                      f = s.cx,
                      p = s.cy,
                      h = s.innerRadius,
                      d = s.outerRadius;
                    return (0, S.cloneElement)(t, {
                      polarAngles: O()(i)
                        ? i
                        : (0, _t.uY)(s, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      polarRadius: O()(o)
                        ? o
                        : (0, _t.uY)(l, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      cx: f,
                      cy: p,
                      innerRadius: h,
                      outerRadius: d,
                      key: t.key || "polar-grid",
                      radialLines: n,
                    });
                  }),
                  Me(Se(e), "renderLegend", function () {
                    var t = e.state.formattedGraphicalItems,
                      r = e.props,
                      n = r.children,
                      i = r.width,
                      o = r.height,
                      a = e.props.margin || {},
                      u = i - (a.left || 0) - (a.right || 0),
                      c = (0, _t.zp)({
                        children: n,
                        formattedGraphicalItems: t,
                        legendWidth: u,
                        legendContent: y,
                      });
                    if (!c) return null;
                    var l = c.item,
                      s = be(c, de);
                    return (0, S.cloneElement)(
                      l,
                      Ee(
                        Ee({}, s),
                        {},
                        {
                          chartWidth: i,
                          chartHeight: o,
                          margin: a,
                          ref: function (t) {
                            e.legendInstance = t;
                          },
                          onBBoxUpdate: e.handleLegendBBoxUpdate,
                        },
                      ),
                    );
                  }),
                  Me(Se(e), "renderTooltip", function () {
                    var t = e.props.children,
                      r = (0, C.sP)(t, A.u);
                    if (!r) return null;
                    var n = e.state,
                      i = n.isTooltipActive,
                      o = n.activeCoordinate,
                      a = n.activePayload,
                      u = n.activeLabel,
                      c = n.offset;
                    return (0, S.cloneElement)(r, {
                      viewBox: Ee(Ee({}, c), {}, { x: c.left, y: c.top }),
                      active: i,
                      label: u,
                      payload: i ? a : [],
                      coordinate: o,
                    });
                  }),
                  Me(Se(e), "renderBrush", function (t) {
                    var r = e.props,
                      n = r.margin,
                      i = r.data,
                      o = e.state,
                      a = o.offset,
                      u = o.dataStartIndex,
                      c = o.dataEndIndex,
                      l = o.updateId;
                    return (0, S.cloneElement)(t, {
                      key: t.key || "_recharts-brush",
                      onChange: (0, _t.DO)(
                        e.handleBrushChange,
                        null,
                        t.props.onChange,
                      ),
                      data: i,
                      x: (0, T.hj)(t.props.x) ? t.props.x : a.left,
                      y: (0, T.hj)(t.props.y)
                        ? t.props.y
                        : a.top + a.height + a.brushBottom - (n.bottom || 0),
                      width: (0, T.hj)(t.props.width) ? t.props.width : a.width,
                      startIndex: u,
                      endIndex: c,
                      updateId: "brush-".concat(l),
                    });
                  }),
                  Me(Se(e), "renderReferenceElement", function (t, r, n) {
                    if (!t) return null;
                    var i = Se(e).clipPathId,
                      o = e.state,
                      a = o.xAxisMap,
                      u = o.yAxisMap,
                      c = o.offset,
                      l = t.props,
                      s = l.xAxisId,
                      f = l.yAxisId;
                    return (0, S.cloneElement)(t, {
                      key: t.key || "".concat(r, "-").concat(n),
                      xAxis: a[null != s ? s : 0],
                      yAxis: u[null != f ? f : 0],
                      viewBox: {
                        x: c.left,
                        y: c.top,
                        width: c.width,
                        height: c.height,
                      },
                      clipPathId: i,
                    });
                  }),
                  Me(Se(e), "renderActivePoints", function (t) {
                    var e = t.item,
                      r = t.activePoint,
                      n = t.basePoint,
                      i = t.childIndex,
                      o = t.isRange,
                      a = [],
                      u = e.props.key,
                      c = e.item.props,
                      l = c.activeDot,
                      s = Ee(
                        Ee(
                          {
                            index: i,
                            dataKey: c.dataKey,
                            cx: r.x,
                            cy: r.y,
                            r: 4,
                            fill: (0, _t.fk)(e.item),
                            strokeWidth: 2,
                            stroke: "#fff",
                            payload: r.payload,
                            value: r.value,
                            key: "".concat(u, "-activePoint-").concat(i),
                          },
                          (0, C.L6)(l),
                        ),
                        (0, ct.Ym)(l),
                      );
                    return (
                      a.push(p.renderActiveDot(l, s)),
                      n
                        ? a.push(
                            p.renderActiveDot(
                              l,
                              Ee(
                                Ee({}, s),
                                {},
                                {
                                  cx: n.x,
                                  cy: n.y,
                                  key: "".concat(u, "-basePoint-").concat(i),
                                },
                              ),
                            ),
                          )
                        : o && a.push(null),
                      a
                    );
                  }),
                  Me(Se(e), "renderGraphicChild", function (t, r, n) {
                    var i = e.filterFormatItem(t, r, n);
                    if (!i) return null;
                    var o = e.getTooltipEventType(),
                      a = e.state,
                      u = a.isTooltipActive,
                      c = a.tooltipAxis,
                      l = a.activeTooltipIndex,
                      s = a.activeLabel,
                      f = e.props.children,
                      p = (0, C.sP)(f, A.u),
                      h = i.props,
                      d = h.points,
                      y = h.isRange,
                      v = h.baseLine,
                      m = i.item.props,
                      b = m.activeDot,
                      x = !m.hide && u && p && b && l >= 0,
                      w = {};
                    "axis" !== o && p && "click" === p.props.trigger
                      ? (w = {
                          onClick: (0, _t.DO)(
                            e.handleItemMouseEnter,
                            null,
                            t.props.onCLick,
                          ),
                        })
                      : "axis" !== o &&
                        (w = {
                          onMouseLeave: (0, _t.DO)(
                            e.handleItemMouseLeave,
                            null,
                            t.props.onMouseLeave,
                          ),
                          onMouseEnter: (0, _t.DO)(
                            e.handleItemMouseEnter,
                            null,
                            t.props.onMouseEnter,
                          ),
                        });
                    var O = (0, S.cloneElement)(t, Ee(Ee({}, i.props), w));
                    if (x) {
                      var j, _;
                      if (c.dataKey && !c.allowDuplicatedCategory) {
                        var P =
                          "function" == typeof c.dataKey
                            ? function (t) {
                                return "function" == typeof c.dataKey
                                  ? c.dataKey(t.payload)
                                  : null;
                              }
                            : "payload.".concat(c.dataKey.toString());
                        (j = (0, T.Ap)(d, P, s)),
                          (_ = y && v && (0, T.Ap)(v, P, s));
                      } else (j = d[l]), (_ = y && v && v[l]);
                      if (!g()(j))
                        return [O].concat(
                          _e(
                            e.renderActivePoints({
                              item: i,
                              activePoint: j,
                              basePoint: _,
                              childIndex: l,
                              isRange: y,
                            }),
                          ),
                        );
                    }
                    return y ? [O, null, null] : [O, null];
                  }),
                  Me(Se(e), "renderCustomized", function (t, r, n) {
                    return (0, S.cloneElement)(
                      t,
                      Ee(
                        Ee({ key: "recharts-customized-".concat(n) }, e.props),
                        e.state,
                      ),
                    );
                  }),
                  (e.uniqueChartId = g()(t.id) ? (0, T.EL)("recharts") : t.id),
                  (e.clipPathId = "".concat(e.uniqueChartId, "-clip")),
                  t.throttleDelay &&
                    (e.triggeredAfterMouseMove = s()(
                      e.triggeredAfterMouseMove,
                      t.throttleDelay,
                    )),
                  (e.state = {}),
                  e
                );
              }
              return (
                (e = p),
                (n = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      g()(this.props.syncId) || this.addListener();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (t) {
                      g()(t.syncId) &&
                        !g()(this.props.syncId) &&
                        this.addListener(),
                        !g()(t.syncId) &&
                          g()(this.props.syncId) &&
                          this.removeListener();
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.clearDeferId(),
                        g()(this.props.syncId) || this.removeListener(),
                        this.cancelThrottledTriggerAfterMouseMove();
                    },
                  },
                  {
                    key: "cancelThrottledTriggerAfterMouseMove",
                    value: function () {
                      "function" ==
                        typeof this.triggeredAfterMouseMove.cancel &&
                        this.triggeredAfterMouseMove.cancel();
                    },
                  },
                  {
                    key: "getTooltipEventType",
                    value: function () {
                      var t = (0, C.sP)(this.props.children, A.u);
                      if (t && x()(t.props.shared)) {
                        var e = t.props.shared ? "axis" : "item";
                        return f.indexOf(e) >= 0 ? e : u;
                      }
                      return u;
                    },
                  },
                  {
                    key: "getMouseInfo",
                    value: function (t) {
                      if (!this.container) return null;
                      var e = (0, it.os)(this.container),
                        r = (0, it.IR)(t, e),
                        n = this.inRange(r.chartX, r.chartY);
                      if (!n) return null;
                      var i = this.state,
                        o = i.xAxisMap,
                        a = i.yAxisMap;
                      if ("axis" !== this.getTooltipEventType() && o && a) {
                        var u = (0, T.Kt)(o).scale,
                          c = (0, T.Kt)(a).scale,
                          l = u && u.invert ? u.invert(r.chartX) : null,
                          s = c && c.invert ? c.invert(r.chartY) : null;
                        return Ee(Ee({}, r), {}, { xValue: l, yValue: s });
                      }
                      var f = $e(
                        this.state,
                        this.props.data,
                        this.props.layout,
                        n,
                      );
                      return f ? Ee(Ee({}, r), f) : null;
                    },
                  },
                  {
                    key: "getCursorRectangle",
                    value: function () {
                      var t = this.props.layout,
                        e = this.state,
                        r = e.activeCoordinate,
                        n = e.offset,
                        i = e.tooltipAxisBandSize,
                        o = i / 2;
                      return {
                        stroke: "none",
                        fill: "#ccc",
                        x: "horizontal" === t ? r.x - o : n.left + 0.5,
                        y: "horizontal" === t ? n.top + 0.5 : r.y - o,
                        width: "horizontal" === t ? i : n.width - 1,
                        height: "horizontal" === t ? n.height - 1 : i,
                      };
                    },
                  },
                  {
                    key: "getCursorPoints",
                    value: function () {
                      var t,
                        e,
                        r,
                        n,
                        i = this.props.layout,
                        o = this.state,
                        a = o.activeCoordinate,
                        u = o.offset;
                      if ("horizontal" === i)
                        (r = t = a.x), (e = u.top), (n = u.top + u.height);
                      else if ("vertical" === i)
                        (n = e = a.y), (t = u.left), (r = u.left + u.width);
                      else if (!g()(a.cx) || !g()(a.cy)) {
                        if ("centric" !== i) {
                          var c = a.cx,
                            l = a.cy,
                            s = a.radius,
                            f = a.startAngle,
                            p = a.endAngle;
                          return {
                            points: [
                              (0, V.op)(c, l, s, f),
                              (0, V.op)(c, l, s, p),
                            ],
                            cx: c,
                            cy: l,
                            radius: s,
                            startAngle: f,
                            endAngle: p,
                          };
                        }
                        var h = a.cx,
                          d = a.cy,
                          y = a.innerRadius,
                          v = a.outerRadius,
                          m = a.angle,
                          b = (0, V.op)(h, d, y, m),
                          x = (0, V.op)(h, d, v, m);
                        (t = b.x), (e = b.y), (r = x.x), (n = x.y);
                      }
                      return [
                        { x: t, y: e },
                        { x: r, y: n },
                      ];
                    },
                  },
                  {
                    key: "inRange",
                    value: function (t, e) {
                      var r = this.props.layout;
                      if ("horizontal" === r || "vertical" === r) {
                        var n = this.state.offset;
                        return t >= n.left &&
                          t <= n.left + n.width &&
                          e >= n.top &&
                          e <= n.top + n.height
                          ? { x: t, y: e }
                          : null;
                      }
                      var i = this.state,
                        o = i.angleAxisMap,
                        a = i.radiusAxisMap;
                      if (o && a) {
                        var u = (0, T.Kt)(o);
                        return (0, V.z3)({ x: t, y: e }, u);
                      }
                      return null;
                    },
                  },
                  {
                    key: "parseEventsOfWrapper",
                    value: function () {
                      var t = this.props.children,
                        e = this.getTooltipEventType(),
                        r = (0, C.sP)(t, A.u),
                        n = {};
                      return (
                        r &&
                          "axis" === e &&
                          (n =
                            "click" === r.props.trigger
                              ? { onClick: this.handleClick }
                              : {
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseMove: this.handleMouseMove,
                                  onMouseLeave: this.handleMouseLeave,
                                  onTouchMove: this.handleTouchMove,
                                  onTouchStart: this.handleTouchStart,
                                  onTouchEnd: this.handleTouchEnd,
                                }),
                        Ee(
                          Ee({}, (0, ct.Ym)(this.props, this.handleOuterEvent)),
                          n,
                        )
                      );
                    },
                  },
                  {
                    key: "addListener",
                    value: function () {
                      pe.on(he, this.handleReceiveSyncEvent),
                        pe.setMaxListeners &&
                          pe._maxListeners &&
                          pe.setMaxListeners(pe._maxListeners + 1);
                    },
                  },
                  {
                    key: "removeListener",
                    value: function () {
                      pe.removeListener(he, this.handleReceiveSyncEvent),
                        pe.setMaxListeners &&
                          pe._maxListeners &&
                          pe.setMaxListeners(pe._maxListeners - 1);
                    },
                  },
                  {
                    key: "triggerSyncEvent",
                    value: function (t) {
                      var e = this.props.syncId;
                      g()(e) || pe.emit(he, e, this.uniqueChartId, t);
                    },
                  },
                  {
                    key: "applySyncEvent",
                    value: function (t) {
                      var e = this.props,
                        r = e.layout,
                        n = e.syncMethod,
                        i = this.state.updateId,
                        o = t.dataStartIndex,
                        a = t.dataEndIndex;
                      if (g()(t.dataStartIndex) && g()(t.dataEndIndex))
                        if (g()(t.activeTooltipIndex)) this.setState(t);
                        else {
                          var u = t.chartX,
                            c = t.chartY,
                            l = t.activeTooltipIndex,
                            s = this.state,
                            f = s.offset,
                            p = s.tooltipTicks;
                          if (!f) return;
                          if ("function" == typeof n) l = n(p, t);
                          else if ("value" === n) {
                            l = -1;
                            for (var h = 0; h < p.length; h++)
                              if (p[h].value === t.activeLabel) {
                                l = h;
                                break;
                              }
                          }
                          var d = Ee(Ee({}, f), {}, { x: f.left, y: f.top }),
                            y = Math.min(u, d.x + d.width),
                            v = Math.min(c, d.y + d.height),
                            m = p[l] && p[l].value,
                            b = Fe(this.state, this.props.data, l),
                            x = p[l]
                              ? {
                                  x: "horizontal" === r ? p[l].coordinate : y,
                                  y: "horizontal" === r ? v : p[l].coordinate,
                                }
                              : Ie;
                          this.setState(
                            Ee(
                              Ee({}, t),
                              {},
                              {
                                activeLabel: m,
                                activeCoordinate: x,
                                activePayload: b,
                                activeTooltipIndex: l,
                              },
                            ),
                          );
                        }
                      else
                        this.setState(
                          Ee(
                            { dataStartIndex: o, dataEndIndex: a },
                            w(
                              {
                                props: this.props,
                                dataStartIndex: o,
                                dataEndIndex: a,
                                updateId: i,
                              },
                              this.state,
                            ),
                          ),
                        );
                    },
                  },
                  {
                    key: "filterFormatItem",
                    value: function (t, e, r) {
                      for (
                        var n = this.state.formattedGraphicalItems,
                          i = 0,
                          o = n.length;
                        i < o;
                        i++
                      ) {
                        var a = n[i];
                        if (
                          a.item === t ||
                          a.props.key === t.key ||
                          (e === (0, C.Gf)(a.item.type) && r === a.childIndex)
                        )
                          return a;
                      }
                      return null;
                    },
                  },
                  {
                    key: "renderAxis",
                    value: function (t, e, r, n) {
                      var i = this.props,
                        o = i.width,
                        a = i.height;
                      return S.createElement(
                        St,
                        ge({}, t, {
                          className: "recharts-"
                            .concat(t.axisType, " ")
                            .concat(t.axisType),
                          key: e.key || "".concat(r, "-").concat(n),
                          viewBox: { x: 0, y: 0, width: o, height: a },
                          ticksGenerator: this.axesTicksGenerator,
                        }),
                      );
                    },
                  },
                  {
                    key: "renderClipPath",
                    value: function () {
                      var t = this.clipPathId,
                        e = this.state.offset,
                        r = e.left,
                        n = e.top,
                        i = e.height,
                        o = e.width;
                      return S.createElement(
                        "defs",
                        null,
                        S.createElement(
                          "clipPath",
                          { id: t },
                          S.createElement("rect", {
                            x: r,
                            y: n,
                            height: i,
                            width: o,
                          }),
                        ),
                      );
                    },
                  },
                  {
                    key: "getXScales",
                    value: function () {
                      var t = this.state.xAxisMap;
                      return t
                        ? Object.entries(t).reduce(function (t, e) {
                            var r = me(e, 2),
                              n = r[0],
                              i = r[1];
                            return Ee(Ee({}, t), {}, Me({}, n, i.scale));
                          }, {})
                        : null;
                    },
                  },
                  {
                    key: "getYScales",
                    value: function () {
                      var t = this.state.yAxisMap;
                      return t
                        ? Object.entries(t).reduce(function (t, e) {
                            var r = me(e, 2),
                              n = r[0],
                              i = r[1];
                            return Ee(Ee({}, t), {}, Me({}, n, i.scale));
                          }, {})
                        : null;
                    },
                  },
                  {
                    key: "getXScaleByAxisId",
                    value: function (t) {
                      var e, r;
                      return null === (e = this.state.xAxisMap) ||
                        void 0 === e ||
                        null === (r = e[t]) ||
                        void 0 === r
                        ? void 0
                        : r.scale;
                    },
                  },
                  {
                    key: "getYScaleByAxisId",
                    value: function (t) {
                      var e, r;
                      return null === (e = this.state.yAxisMap) ||
                        void 0 === e ||
                        null === (r = e[t]) ||
                        void 0 === r
                        ? void 0
                        : r.scale;
                    },
                  },
                  {
                    key: "getItemByXY",
                    value: function (t) {
                      var e = this.state.formattedGraphicalItems;
                      if (e && e.length)
                        for (var r = 0, n = e.length; r < n; r++) {
                          var i = e[r],
                            o = i.props,
                            a = i.item,
                            u = (0, C.Gf)(a.type);
                          if ("Bar" === u) {
                            var c = (o.data || []).find(function (e) {
                              return (0, rt.X)(t, e);
                            });
                            if (c) return { graphicalItem: i, payload: c };
                          } else if ("RadialBar" === u) {
                            var l = (o.data || []).find(function (e) {
                              return (0, V.z3)(t, e);
                            });
                            if (l) return { graphicalItem: i, payload: l };
                          }
                        }
                      return null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = this;
                      if (!(0, C.TT)(this)) return null;
                      var e = this.props,
                        r = e.children,
                        n = e.className,
                        i = e.width,
                        o = e.height,
                        a = e.style,
                        u = e.compact,
                        c = e.title,
                        l = e.desc,
                        s = be(e, ye),
                        f = (0, C.L6)(s),
                        p = {
                          CartesianGrid: { handler: this.renderGrid, once: !0 },
                          ReferenceArea: {
                            handler: this.renderReferenceElement,
                          },
                          ReferenceLine: {
                            handler: this.renderReferenceElement,
                          },
                          ReferenceDot: {
                            handler: this.renderReferenceElement,
                          },
                          XAxis: { handler: this.renderXAxis },
                          YAxis: { handler: this.renderYAxis },
                          Brush: { handler: this.renderBrush, once: !0 },
                          Bar: { handler: this.renderGraphicChild },
                          Line: { handler: this.renderGraphicChild },
                          Area: { handler: this.renderGraphicChild },
                          Radar: { handler: this.renderGraphicChild },
                          RadialBar: { handler: this.renderGraphicChild },
                          Scatter: { handler: this.renderGraphicChild },
                          Pie: { handler: this.renderGraphicChild },
                          Funnel: { handler: this.renderGraphicChild },
                          Tooltip: { handler: this.renderCursor, once: !0 },
                          PolarGrid: {
                            handler: this.renderPolarGrid,
                            once: !0,
                          },
                          PolarAngleAxis: { handler: this.renderPolarAxis },
                          PolarRadiusAxis: { handler: this.renderPolarAxis },
                          Customized: { handler: this.renderCustomized },
                        };
                      if (u)
                        return S.createElement(
                          P.T,
                          ge({}, f, { width: i, height: o, title: c, desc: l }),
                          this.renderClipPath(),
                          (0, C.eu)(r, p),
                        );
                      var h = this.parseEventsOfWrapper();
                      return S.createElement(
                        "div",
                        ge(
                          {
                            className: _()("recharts-wrapper", n),
                            style: Ee(
                              {
                                position: "relative",
                                cursor: "default",
                                width: i,
                                height: o,
                              },
                              a,
                            ),
                          },
                          h,
                          {
                            ref: function (e) {
                              t.container = e;
                            },
                            role: "region",
                          },
                        ),
                        S.createElement(
                          P.T,
                          ge({}, f, { width: i, height: o, title: c, desc: l }),
                          this.renderClipPath(),
                          (0, C.eu)(r, p),
                        ),
                        this.renderLegend(),
                        this.renderTooltip(),
                      );
                    },
                  },
                ]) && xe(e.prototype, n),
                o && xe(e, o),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                p
              );
            })(S.Component)),
            Me(e, "displayName", r),
            Me(
              e,
              "defaultProps",
              Ee(
                {
                  layout: "horizontal",
                  stackOffset: "none",
                  barCategoryGap: "10%",
                  barGap: 4,
                  margin: { top: 5, right: 5, bottom: 5, left: 5 },
                  reverseStackOrder: !1,
                  syncMethod: "index",
                },
                m,
              ),
            ),
            Me(e, "getDerivedStateFromProps", function (t, e) {
              var r = t.data,
                n = t.children,
                i = t.width,
                o = t.height,
                a = t.layout,
                u = t.stackOffset,
                c = t.margin;
              if (g()(e.updateId)) {
                var l = qe(t);
                return Ee(
                  Ee(
                    Ee({}, l),
                    {},
                    { updateId: 0 },
                    w(Ee(Ee({ props: t }, l), {}, { updateId: 0 }), e),
                  ),
                  {},
                  {
                    prevData: r,
                    prevWidth: i,
                    prevHeight: o,
                    prevLayout: a,
                    prevStackOffset: u,
                    prevMargin: c,
                    prevChildren: n,
                  },
                );
              }
              if (
                r !== e.prevData ||
                i !== e.prevWidth ||
                o !== e.prevHeight ||
                a !== e.prevLayout ||
                u !== e.prevStackOffset ||
                !(0, nt.w)(c, e.prevMargin)
              ) {
                var s = qe(t),
                  f = {
                    chartX: e.chartX,
                    chartY: e.chartY,
                    isTooltipActive: e.isTooltipActive,
                  },
                  p = Ee(Ee({}, $e(e, r, a)), {}, { updateId: e.updateId + 1 }),
                  h = Ee(Ee(Ee({}, s), f), p);
                return Ee(
                  Ee(Ee({}, h), w(Ee({ props: t }, h), e)),
                  {},
                  {
                    prevData: r,
                    prevWidth: i,
                    prevHeight: o,
                    prevLayout: a,
                    prevStackOffset: u,
                    prevMargin: c,
                    prevChildren: n,
                  },
                );
              }
              if (!(0, C.rL)(n, e.prevChildren)) {
                var d = !g()(r) ? e.updateId : e.updateId + 1;
                return Ee(
                  Ee(
                    { updateId: d },
                    w(Ee(Ee({ props: t }, e), {}, { updateId: d }), e),
                  ),
                  {},
                  { prevChildren: n },
                );
              }
              return null;
            }),
            Me(e, "renderActiveDot", function (t, e) {
              var r;
              return (
                (r = (0, S.isValidElement)(t)
                  ? (0, S.cloneElement)(t, e)
                  : c()(t)
                  ? t(e)
                  : S.createElement(et.o, e)),
                S.createElement(
                  k.m,
                  { className: "recharts-active-dot", key: e.key },
                  r,
                )
              );
            }),
            e
          );
        };
    },
    32214: (t, e, r) => {
      "use strict";
      r.d(e, { b: () => n });
      var n = function (t) {
        return null;
      };
      n.displayName = "Cell";
    },
    43774: (t, e, r) => {
      "use strict";
      r.d(e, { _: () => A });
      var n = r(23619),
        i = r.n(n),
        o = r(39277),
        a = r.n(o),
        u = r(51391),
        c = r.n(u),
        l = r(89526),
        s = r(64403),
        f = r.n(s),
        p = r(68451),
        h = r(9410),
        d = r(16171),
        y = r(80072);
      function v(t) {
        return (
          (v =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          v(t)
        );
      }
      function m(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return g(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return g(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return g(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function b(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(r), !0).forEach(function (e) {
                w(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function w(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== v(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== v(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === v(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function O() {
        return (
          (O = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          O.apply(this, arguments)
        );
      }
      var S = function (t) {
          var e = t.value,
            r = t.formatter,
            n = c()(t.children) ? e : t.children;
          return a()(r) ? r(n) : n;
        },
        j = function (t, e, r) {
          var n,
            i,
            o = t.position,
            a = t.viewBox,
            u = t.offset,
            s = t.className,
            p = a,
            h = p.cx,
            v = p.cy,
            m = p.innerRadius,
            g = p.outerRadius,
            b = p.startAngle,
            x = p.endAngle,
            w = p.clockWise,
            S = (m + g) / 2,
            j = (function (t, e) {
              return (0, d.uY)(e - t) * Math.min(Math.abs(e - t), 360);
            })(b, x),
            _ = j >= 0 ? 1 : -1;
          "insideStart" === o
            ? ((n = b + _ * u), (i = w))
            : "insideEnd" === o
            ? ((n = x - _ * u), (i = !w))
            : "end" === o && ((n = x + _ * u), (i = w)),
            (i = j <= 0 ? i : !i);
          var P = (0, y.op)(h, v, S, n),
            k = (0, y.op)(h, v, S, n + 359 * (i ? 1 : -1)),
            A = "M"
              .concat(P.x, ",")
              .concat(P.y, "\n    A")
              .concat(S, ",")
              .concat(S, ",0,1,")
              .concat(i ? 0 : 1, ",\n    ")
              .concat(k.x, ",")
              .concat(k.y),
            E = c()(t.id) ? (0, d.EL)("recharts-radial-line-") : t.id;
          return l.createElement(
            "text",
            O({}, r, {
              dominantBaseline: "central",
              className: f()("recharts-radial-bar-label", s),
            }),
            l.createElement(
              "defs",
              null,
              l.createElement("path", { id: E, d: A }),
            ),
            l.createElement("textPath", { xlinkHref: "#".concat(E) }, e),
          );
        },
        _ = function (t) {
          var e = t.viewBox,
            r = t.offset,
            n = t.position,
            i = e,
            o = i.cx,
            a = i.cy,
            u = i.innerRadius,
            c = i.outerRadius,
            l = (i.startAngle + i.endAngle) / 2;
          if ("outside" === n) {
            var s = (0, y.op)(o, a, c + r, l),
              f = s.x;
            return {
              x: f,
              y: s.y,
              textAnchor: f >= o ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === n)
            return {
              x: o,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === n)
            return {
              x: o,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === n)
            return { x: o, y: a, textAnchor: "middle", verticalAnchor: "end" };
          var p = (u + c) / 2,
            h = (0, y.op)(o, a, p, l);
          return {
            x: h.x,
            y: h.y,
            textAnchor: "middle",
            verticalAnchor: "middle",
          };
        },
        P = function (t) {
          var e = t.viewBox,
            r = t.parentViewBox,
            n = t.offset,
            o = t.position,
            a = e,
            u = a.x,
            c = a.y,
            l = a.width,
            s = a.height,
            f = s >= 0 ? 1 : -1,
            p = f * n,
            h = f > 0 ? "end" : "start",
            y = f > 0 ? "start" : "end",
            v = l >= 0 ? 1 : -1,
            m = v * n,
            g = v > 0 ? "end" : "start",
            b = v > 0 ? "start" : "end";
          if ("top" === o)
            return x(
              x(
                {},
                {
                  x: u + l / 2,
                  y: c - f * n,
                  textAnchor: "middle",
                  verticalAnchor: h,
                },
              ),
              r ? { height: Math.max(c - r.y, 0), width: l } : {},
            );
          if ("bottom" === o)
            return x(
              x(
                {},
                {
                  x: u + l / 2,
                  y: c + s + p,
                  textAnchor: "middle",
                  verticalAnchor: y,
                },
              ),
              r
                ? { height: Math.max(r.y + r.height - (c + s), 0), width: l }
                : {},
            );
          if ("left" === o) {
            var w = {
              x: u - m,
              y: c + s / 2,
              textAnchor: g,
              verticalAnchor: "middle",
            };
            return x(
              x({}, w),
              r ? { width: Math.max(w.x - r.x, 0), height: s } : {},
            );
          }
          if ("right" === o) {
            var O = {
              x: u + l + m,
              y: c + s / 2,
              textAnchor: b,
              verticalAnchor: "middle",
            };
            return x(
              x({}, O),
              r ? { width: Math.max(r.x + r.width - O.x, 0), height: s } : {},
            );
          }
          var S = r ? { width: l, height: s } : {};
          return "insideLeft" === o
            ? x(
                {
                  x: u + m,
                  y: c + s / 2,
                  textAnchor: b,
                  verticalAnchor: "middle",
                },
                S,
              )
            : "insideRight" === o
            ? x(
                {
                  x: u + l - m,
                  y: c + s / 2,
                  textAnchor: g,
                  verticalAnchor: "middle",
                },
                S,
              )
            : "insideTop" === o
            ? x(
                {
                  x: u + l / 2,
                  y: c + p,
                  textAnchor: "middle",
                  verticalAnchor: y,
                },
                S,
              )
            : "insideBottom" === o
            ? x(
                {
                  x: u + l / 2,
                  y: c + s - p,
                  textAnchor: "middle",
                  verticalAnchor: h,
                },
                S,
              )
            : "insideTopLeft" === o
            ? x({ x: u + m, y: c + p, textAnchor: b, verticalAnchor: y }, S)
            : "insideTopRight" === o
            ? x({ x: u + l - m, y: c + p, textAnchor: g, verticalAnchor: y }, S)
            : "insideBottomLeft" === o
            ? x({ x: u + m, y: c + s - p, textAnchor: b, verticalAnchor: h }, S)
            : "insideBottomRight" === o
            ? x(
                {
                  x: u + l - m,
                  y: c + s - p,
                  textAnchor: g,
                  verticalAnchor: h,
                },
                S,
              )
            : i()(o) &&
              ((0, d.hj)(o.x) || (0, d.hU)(o.x)) &&
              ((0, d.hj)(o.y) || (0, d.hU)(o.y))
            ? x(
                {
                  x: u + (0, d.h1)(o.x, l),
                  y: c + (0, d.h1)(o.y, s),
                  textAnchor: "end",
                  verticalAnchor: "end",
                },
                S,
              )
            : x(
                {
                  x: u + l / 2,
                  y: c + s / 2,
                  textAnchor: "middle",
                  verticalAnchor: "middle",
                },
                S,
              );
        },
        k = function (t) {
          return "cx" in t && (0, d.hj)(t.cx);
        };
      function A(t) {
        var e,
          r = t.viewBox,
          n = t.position,
          i = t.value,
          o = t.children,
          u = t.content,
          s = t.className,
          d = void 0 === s ? "" : s,
          y = t.textBreakAll;
        if (!r || (c()(i) && c()(o) && !(0, l.isValidElement)(u) && !a()(u)))
          return null;
        if ((0, l.isValidElement)(u)) return (0, l.cloneElement)(u, t);
        if (a()(u)) {
          if (((e = (0, l.createElement)(u, t)), (0, l.isValidElement)(e)))
            return e;
        } else e = S(t);
        var v = k(r),
          m = (0, h.L6)(t, !0);
        if (v && ("insideStart" === n || "insideEnd" === n || "end" === n))
          return j(t, e, m);
        var g = v ? _(t) : P(t);
        return l.createElement(
          p.x,
          O({ className: f()("recharts-label", d) }, m, g, { breakAll: y }),
          e,
        );
      }
      (A.displayName = "Label"), (A.defaultProps = { offset: 5 });
      var E = function (t) {
        var e = t.cx,
          r = t.cy,
          n = t.angle,
          i = t.startAngle,
          o = t.endAngle,
          a = t.r,
          u = t.radius,
          c = t.innerRadius,
          l = t.outerRadius,
          s = t.x,
          f = t.y,
          p = t.top,
          h = t.left,
          y = t.width,
          v = t.height,
          m = t.clockWise,
          g = t.labelViewBox;
        if (g) return g;
        if ((0, d.hj)(y) && (0, d.hj)(v)) {
          if ((0, d.hj)(s) && (0, d.hj)(f))
            return { x: s, y: f, width: y, height: v };
          if ((0, d.hj)(p) && (0, d.hj)(h))
            return { x: p, y: h, width: y, height: v };
        }
        return (0, d.hj)(s) && (0, d.hj)(f)
          ? { x: s, y: f, width: 0, height: 0 }
          : (0, d.hj)(e) && (0, d.hj)(r)
          ? {
              cx: e,
              cy: r,
              startAngle: i || n || 0,
              endAngle: o || n || 0,
              innerRadius: c || 0,
              outerRadius: l || u || a || 0,
              clockWise: m,
            }
          : t.viewBox
          ? t.viewBox
          : {};
      };
      (A.parseViewBox = E),
        (A.renderCallByParent = function (t, e) {
          var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && r && !t.label)) return null;
          var n = t.children,
            o = E(t),
            u = (0, h.NN)(n, A).map(function (t, r) {
              return (0, l.cloneElement)(t, {
                viewBox: e || o,
                key: "label-".concat(r),
              });
            });
          if (!r) return u;
          var c = (function (t, e) {
            return t
              ? !0 === t
                ? l.createElement(A, { key: "label-implicit", viewBox: e })
                : (0, d.P2)(t)
                ? l.createElement(A, {
                    key: "label-implicit",
                    viewBox: e,
                    value: t,
                  })
                : (0, l.isValidElement)(t)
                ? t.type === A
                  ? (0, l.cloneElement)(t, {
                      key: "label-implicit",
                      viewBox: e,
                    })
                  : l.createElement(A, {
                      key: "label-implicit",
                      content: t,
                      viewBox: e,
                    })
                : a()(t)
                ? l.createElement(A, {
                    key: "label-implicit",
                    content: t,
                    viewBox: e,
                  })
                : i()(t)
                ? l.createElement(
                    A,
                    O({ viewBox: e }, t, { key: "label-implicit" }),
                  )
                : null
              : null;
          })(t.label, e || o);
          return [c].concat(m(u));
        });
    },
    34324: (t, e, r) => {
      "use strict";
      r.d(e, { e: () => A });
      var n = r(23619),
        i = r.n(n),
        o = r(39277),
        a = r.n(o),
        u = r(51391),
        c = r.n(u),
        l = r(80275),
        s = r.n(l),
        f = r(93706),
        p = r.n(f),
        h = r(89526),
        d = r(43774),
        y = r(61452),
        v = r(9410),
        m = r(71298);
      function g(t) {
        return (
          (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          g(t)
        );
      }
      var b = [
        "data",
        "valueAccessor",
        "dataKey",
        "clockWise",
        "id",
        "textBreakAll",
      ];
      function x(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return w(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return w(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return w(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function w(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function O() {
        return (
          (O = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          O.apply(this, arguments)
        );
      }
      function S(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? S(Object(r), !0).forEach(function (e) {
                _(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function _(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== g(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== g(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === g(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function P(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      var k = {
        valueAccessor: function (t) {
          return p()(t.value) ? s()(t.value) : t.value;
        },
      };
      function A(t) {
        var e = t.data,
          r = t.valueAccessor,
          n = t.dataKey,
          i = t.clockWise,
          o = t.id,
          a = t.textBreakAll,
          u = P(t, b);
        return e && e.length
          ? h.createElement(
              y.m,
              { className: "recharts-label-list" },
              e.map(function (t, e) {
                var l = c()(n) ? r(t, e) : (0, m.F$)(t && t.payload, n),
                  s = c()(o) ? {} : { id: "".concat(o, "-").concat(e) };
                return h.createElement(
                  d._,
                  O({}, (0, v.L6)(t, !0), u, s, {
                    parentViewBox: t.parentViewBox,
                    index: e,
                    value: l,
                    textBreakAll: a,
                    viewBox: d._.parseViewBox(
                      c()(i) ? t : j(j({}, t), {}, { clockWise: i }),
                    ),
                    key: "label-".concat(e),
                  }),
                );
              }),
            )
          : null;
      }
      (A.displayName = "LabelList"),
        (A.renderCallByParent = function (t, e) {
          var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && r && !t.label)) return null;
          var n = t.children,
            o = (0, v.NN)(n, A).map(function (t, r) {
              return (0, h.cloneElement)(t, {
                data: e,
                key: "labelList-".concat(r),
              });
            });
          return r
            ? [
                (function (t, e) {
                  return t
                    ? !0 === t
                      ? h.createElement(A, {
                          key: "labelList-implicit",
                          data: e,
                        })
                      : h.isValidElement(t) || a()(t)
                      ? h.createElement(A, {
                          key: "labelList-implicit",
                          data: e,
                          content: t,
                        })
                      : i()(t)
                      ? h.createElement(
                          A,
                          O({ data: e }, t, { key: "labelList-implicit" }),
                        )
                      : null
                    : null;
                })(t.label, e),
              ].concat(x(o))
            : o;
        }),
        (A.defaultProps = k);
    },
    98241: (t, e, r) => {
      "use strict";
      r.d(e, { D: () => F });
      var n = r(39277),
        i = r.n(n),
        o = r(80971),
        a = r.n(o),
        u = r(89526),
        c = r(64403),
        l = r.n(c),
        s = r(93386),
        f = r(16667),
        p = r(33790);
      function h(t) {
        return (
          (h =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          h(t)
        );
      }
      function d() {
        return (
          (d = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          d.apply(this, arguments)
        );
      }
      function y(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function v(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, w(n.key), n);
        }
      }
      function m(t, e) {
        return (
          (m = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          m(t, e)
        );
      }
      function g(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = b(t);
          if (e) {
            var i = b(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === h(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(this, r);
        };
      }
      function b(t) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          b(t)
        );
      }
      function x(t, e, r) {
        return (
          (e = w(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function w(t) {
        var e = (function (t, e) {
          if ("object" !== h(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== h(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === h(e) ? e : String(e);
      }
      var O = 32,
        S = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && m(t, e);
          })(o, t);
          var e,
            r,
            n,
            i = g(o);
          function o() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o),
              i.apply(this, arguments)
            );
          }
          return (
            (e = o),
            (r = [
              {
                key: "renderIcon",
                value: function (t) {
                  var e = this.props.inactiveColor,
                    r = 16,
                    n = O / 6,
                    i = O / 3,
                    o = t.inactive ? e : t.color;
                  if ("plainline" === t.type)
                    return u.createElement("line", {
                      strokeWidth: 4,
                      fill: "none",
                      stroke: o,
                      strokeDasharray: t.payload.strokeDasharray,
                      x1: 0,
                      y1: r,
                      x2: O,
                      y2: r,
                      className: "recharts-legend-icon",
                    });
                  if ("line" === t.type)
                    return u.createElement("path", {
                      strokeWidth: 4,
                      fill: "none",
                      stroke: o,
                      d: "M0,"
                        .concat(r, "h")
                        .concat(i, "\n            A")
                        .concat(n, ",")
                        .concat(n, ",0,1,1,")
                        .concat(2 * i, ",")
                        .concat(r, "\n            H")
                        .concat(O, "M")
                        .concat(2 * i, ",")
                        .concat(r, "\n            A")
                        .concat(n, ",")
                        .concat(n, ",0,1,1,")
                        .concat(i, ",")
                        .concat(r),
                      className: "recharts-legend-icon",
                    });
                  if ("rect" === t.type)
                    return u.createElement("path", {
                      stroke: "none",
                      fill: o,
                      d: "M0,"
                        .concat(4, "h")
                        .concat(O, "v")
                        .concat(24, "h")
                        .concat(-32, "z"),
                      className: "recharts-legend-icon",
                    });
                  if (u.isValidElement(t.legendIcon)) {
                    var a = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? y(Object(r), !0).forEach(function (e) {
                              x(t, e, r[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(r),
                            )
                          : y(Object(r)).forEach(function (e) {
                              Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(r, e),
                              );
                            });
                      }
                      return t;
                    })({}, t);
                    return delete a.legendIcon, u.cloneElement(t.legendIcon, a);
                  }
                  return u.createElement(f.v, {
                    fill: o,
                    cx: r,
                    cy: r,
                    size: O,
                    sizeType: "diameter",
                    type: t.type,
                  });
                },
              },
              {
                key: "renderItems",
                value: function () {
                  var t = this,
                    e = this.props,
                    r = e.payload,
                    n = e.iconSize,
                    i = e.layout,
                    o = e.formatter,
                    a = e.inactiveColor,
                    c = { x: 0, y: 0, width: O, height: O },
                    f = {
                      display: "horizontal" === i ? "inline-block" : "block",
                      marginRight: 10,
                    },
                    h = {
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: 4,
                    };
                  return r.map(function (e, r) {
                    var i,
                      y = e.formatter || o,
                      v = l()(
                        (x(
                          (i = { "recharts-legend-item": !0 }),
                          "legend-item-".concat(r),
                          !0,
                        ),
                        x(i, "inactive", e.inactive),
                        i),
                      );
                    if ("none" === e.type) return null;
                    var m = e.inactive ? a : e.color;
                    return u.createElement(
                      "li",
                      d(
                        {
                          className: v,
                          style: f,
                          key: "legend-item-".concat(r),
                        },
                        (0, p.bw)(t.props, e, r),
                      ),
                      u.createElement(
                        s.T,
                        { width: n, height: n, viewBox: c, style: h },
                        t.renderIcon(e),
                      ),
                      u.createElement(
                        "span",
                        {
                          className: "recharts-legend-item-text",
                          style: { color: m },
                        },
                        y ? y(e.value, e, r) : e.value,
                      ),
                    );
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.payload,
                    r = t.layout,
                    n = t.align;
                  if (!e || !e.length) return null;
                  var i = {
                    padding: 0,
                    margin: 0,
                    textAlign: "horizontal" === r ? n : "left",
                  };
                  return u.createElement(
                    "ul",
                    { className: "recharts-default-legend", style: i },
                    this.renderItems(),
                  );
                },
              },
            ]),
            r && v(e.prototype, r),
            n && v(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            o
          );
        })(u.PureComponent);
      x(S, "displayName", "Legend"),
        x(S, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "middle",
          inactiveColor: "#ccc",
        });
      var j = r(16171);
      function _(t) {
        return (
          (_ =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          _(t)
        );
      }
      var P = ["ref"];
      function k(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(r), !0).forEach(function (e) {
                N(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function E(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, D(n.key), n);
        }
      }
      function M(t, e) {
        return (
          (M = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          M(t, e)
        );
      }
      function T(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = I(t);
          if (e) {
            var i = I(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === _(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return C(t);
          })(this, r);
        };
      }
      function C(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function I(t) {
        return (
          (I = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          I(t)
        );
      }
      function N(t, e, r) {
        return (
          (e = D(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function D(t) {
        var e = (function (t, e) {
          if ("object" !== _(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== _(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === _(e) ? e : String(e);
      }
      function R(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function L(t) {
        return t.value;
      }
      function B(t, e) {
        return !0 === t ? a()(e, L) : i()(t) ? a()(e, t) : e;
      }
      var F = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && M(t, e);
        })(a, t);
        var e,
          r,
          n,
          o = T(a);
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            N(C((t = o.call.apply(o, [this].concat(r)))), "state", {
              boxWidth: -1,
              boxHeight: -1,
            }),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "getWithHeight",
              value: function (t, e) {
                var r = t.props.layout;
                return "vertical" === r && (0, j.hj)(t.props.height)
                  ? { height: t.props.height }
                  : "horizontal" === r
                  ? { width: t.props.width || e }
                  : null;
              },
            },
          ]),
          (r = [
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
                return this.wrapperNode &&
                  this.wrapperNode.getBoundingClientRect
                  ? this.wrapperNode.getBoundingClientRect()
                  : null;
              },
            },
            {
              key: "getBBoxSnapshot",
              value: function () {
                var t = this.state,
                  e = t.boxWidth,
                  r = t.boxHeight;
                return e >= 0 && r >= 0 ? { width: e, height: r } : null;
              },
            },
            {
              key: "getDefaultPosition",
              value: function (t) {
                var e,
                  r,
                  n = this.props,
                  i = n.layout,
                  o = n.align,
                  a = n.verticalAlign,
                  u = n.margin,
                  c = n.chartWidth,
                  l = n.chartHeight;
                return (
                  (t &&
                    ((void 0 !== t.left && null !== t.left) ||
                      (void 0 !== t.right && null !== t.right))) ||
                    (e =
                      "center" === o && "vertical" === i
                        ? {
                            left:
                              ((c || 0) -
                                (this.getBBoxSnapshot() || { width: 0 })
                                  .width) /
                              2,
                          }
                        : "right" === o
                        ? { right: (u && u.right) || 0 }
                        : { left: (u && u.left) || 0 }),
                  (t &&
                    ((void 0 !== t.top && null !== t.top) ||
                      (void 0 !== t.bottom && null !== t.bottom))) ||
                    (r =
                      "middle" === a
                        ? {
                            top:
                              ((l || 0) -
                                (this.getBBoxSnapshot() || { height: 0 })
                                  .height) /
                              2,
                          }
                        : "bottom" === a
                        ? { bottom: (u && u.bottom) || 0 }
                        : { top: (u && u.top) || 0 }),
                  A(A({}, e), r)
                );
              },
            },
            {
              key: "updateBBox",
              value: function () {
                var t = this.state,
                  e = t.boxWidth,
                  r = t.boxHeight,
                  n = this.props.onBBoxUpdate;
                if (
                  this.wrapperNode &&
                  this.wrapperNode.getBoundingClientRect
                ) {
                  var i = this.wrapperNode.getBoundingClientRect();
                  (Math.abs(i.width - e) > 1 || Math.abs(i.height - r) > 1) &&
                    this.setState(
                      { boxWidth: i.width, boxHeight: i.height },
                      function () {
                        n && n(i);
                      },
                    );
                } else
                  (-1 === e && -1 === r) ||
                    this.setState({ boxWidth: -1, boxHeight: -1 }, function () {
                      n && n(null);
                    });
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.content,
                  n = e.width,
                  o = e.height,
                  a = e.wrapperStyle,
                  c = e.payloadUniqBy,
                  l = e.payload,
                  s = A(
                    A(
                      {
                        position: "absolute",
                        width: n || "auto",
                        height: o || "auto",
                      },
                      this.getDefaultPosition(a),
                    ),
                    a,
                  );
                return u.createElement(
                  "div",
                  {
                    className: "recharts-legend-wrapper",
                    style: s,
                    ref: function (e) {
                      t.wrapperNode = e;
                    },
                  },
                  (function (t, e) {
                    if (u.isValidElement(t)) return u.cloneElement(t, e);
                    if (i()(t)) return u.createElement(t, e);
                    e.ref;
                    var r = R(e, P);
                    return u.createElement(S, r);
                  })(r, A(A({}, this.props), {}, { payload: B(c, l) })),
                );
              },
            },
          ]) && E(e.prototype, r),
          n && E(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(u.PureComponent);
      N(F, "displayName", "Legend"),
        N(F, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
        });
    },
    68451: (t, e, r) => {
      "use strict";
      r.d(e, { x: () => I });
      var n = r(51391),
        i = r.n(n),
        o = r(89526),
        a = r(55502),
        u = r.n(a),
        c = r(64403),
        l = r.n(c),
        s = r(16171),
        f = r(59509),
        p = r(9410),
        h = r(99875),
        d = [
          "dx",
          "dy",
          "textAnchor",
          "verticalAnchor",
          "scaleToFit",
          "angle",
          "lineHeight",
          "capHeight",
          "className",
          "breakAll",
        ];
      function y(t) {
        return (
          (y =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          y(t)
        );
      }
      function v() {
        return (
          (v = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          v.apply(this, arguments)
        );
      }
      function m(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function g(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, A(n.key), n);
        }
      }
      function b(t, e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          b(t, e)
        );
      }
      function x(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = O(t);
          if (e) {
            var i = O(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === y(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return w(t);
          })(this, r);
        };
      }
      function w(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function O(t) {
        return (
          (O = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          O(t)
        );
      }
      function S(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = o.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return j(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return j(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function j(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function _(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _(Object(r), !0).forEach(function (e) {
                k(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : _(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function k(t, e, r) {
        return (
          (e = A(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function A(t) {
        var e = (function (t, e) {
          if ("object" !== y(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== y(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === y(e) ? e : String(e);
      }
      var E = /[ \f\n\r\t\v\u2028\u2029]+/,
        M = function (t) {
          try {
            var e = [];
            return (
              i()(t.children) ||
                (e = t.breakAll
                  ? t.children.toString().split("")
                  : t.children.toString().split(E)),
              {
                wordsWithComputedWidth: e.map(function (e) {
                  return { word: e, width: (0, h.xE)(e, t.style).width };
                }),
                spaceWidth: t.breakAll ? 0 : (0, h.xE)(" ", t.style).width,
              }
            );
          } catch (t) {
            return null;
          }
        },
        T = function (t) {
          return [{ words: i()(t) ? [] : t.toString().split(E) }];
        },
        C = function (t, e) {
          if ((t.width || t.scaleToFit) && !f.x.isSsr && e) {
            var r = M(t);
            return r
              ? (function (t, e, r, n, i) {
                  var o = (0, s.hj)(t.maxLines),
                    a = t.children,
                    u = function () {
                      return (
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : []
                      ).reduce(function (t, e) {
                        var o = e.word,
                          a = e.width,
                          u = t[t.length - 1];
                        if (u && (null == n || i || u.width + a + r < n))
                          u.words.push(o), (u.width += a + r);
                        else {
                          var c = { words: [o], width: a };
                          t.push(c);
                        }
                        return t;
                      }, []);
                    },
                    c = u(e);
                  if (!o) return c;
                  for (
                    var l,
                      f = function (e) {
                        var r = a.slice(0, e),
                          i = M(
                            P(P({}, t), {}, { children: r + "…" }),
                          ).wordsWithComputedWidth,
                          o = u(i),
                          c =
                            o.length > t.maxLines ||
                            (function (t) {
                              return t.reduce(function (t, e) {
                                return t.width > e.width ? t : e;
                              });
                            })(o).width > n;
                        return [c, o];
                      },
                      p = 0,
                      h = a.length - 1,
                      d = 0;
                    p <= h && d <= a.length - 1;

                  ) {
                    var y = Math.floor((p + h) / 2),
                      v = S(f(y - 1), 2),
                      m = v[0],
                      g = v[1],
                      b = S(f(y), 1)[0];
                    if (
                      (m || b || (p = y + 1), m && b && (h = y - 1), !m && b)
                    ) {
                      l = g;
                      break;
                    }
                    d++;
                  }
                  return l || c;
                })(
                  t,
                  r.wordsWithComputedWidth,
                  r.spaceWidth,
                  t.width,
                  t.scaleToFit,
                )
              : T(t.children);
          }
          return T(t.children);
        },
        I = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && b(t, e);
          })(a, t);
          var e,
            r,
            n,
            i = x(a);
          function a() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
              r[n] = arguments[n];
            return (
              k(w((t = i.call.apply(i, [this].concat(r)))), "state", {}), t
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  if (
                    t.width !== e.prevWidth ||
                    t.scaleToFit !== e.prevScaleToFit ||
                    t.children !== e.prevChildren ||
                    t.style !== e.prevStyle ||
                    t.breakAll !== e.prevBreakAll
                  ) {
                    var r =
                      t.children !== e.prevChildren ||
                      t.style !== e.prevStyle ||
                      t.breakAll !== e.prevBreakAll;
                    return {
                      prevWidth: t.width,
                      prevScaleToFit: t.scaleToFit,
                      prevChildren: t.children,
                      prevStyle: t.style,
                      wordsByLines: C(t, r),
                    };
                  }
                  return null;
                },
              },
            ]),
            (r = [
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.dx,
                    r = t.dy,
                    n = t.textAnchor,
                    i = t.verticalAnchor,
                    c = t.scaleToFit,
                    f = t.angle,
                    h = t.lineHeight,
                    y = t.capHeight,
                    g = t.className,
                    b = t.breakAll,
                    x = m(t, d),
                    w = this.state.wordsByLines;
                  if (!(0, s.P2)(x.x) || !(0, s.P2)(x.y)) return null;
                  var O,
                    S = x.x + ((0, s.hj)(e) ? e : 0),
                    j = x.y + ((0, s.hj)(r) ? r : 0);
                  switch (i) {
                    case "start":
                      O = u()("calc(".concat(y, ")"));
                      break;
                    case "middle":
                      O = u()(
                        "calc("
                          .concat((w.length - 1) / 2, " * -")
                          .concat(h, " + (")
                          .concat(y, " / 2))"),
                      );
                      break;
                    default:
                      O = u()(
                        "calc(".concat(w.length - 1, " * -").concat(h, ")"),
                      );
                  }
                  var _ = [];
                  if (c) {
                    var P = w[0].width,
                      k = this.props.width;
                    _.push(
                      "scale(".concat(((0, s.hj)(k) ? k / P : 1) / P, ")"),
                    );
                  }
                  return (
                    f &&
                      _.push(
                        "rotate("
                          .concat(f, ", ")
                          .concat(S, ", ")
                          .concat(j, ")"),
                      ),
                    _.length && (x.transform = _.join(" ")),
                    o.createElement(
                      "text",
                      v({}, (0, p.L6)(x, !0), {
                        x: S,
                        y: j,
                        className: l()("recharts-text", g),
                        textAnchor: n,
                        fill: x.fill.includes("url")
                          ? a.defaultProps.fill
                          : x.fill,
                      }),
                      w.map(function (t, e) {
                        return o.createElement(
                          "tspan",
                          { x: S, dy: 0 === e ? O : h, key: e },
                          t.words.join(b ? "" : " "),
                        );
                      }),
                    )
                  );
                },
              },
            ]) && g(e.prototype, r),
            n && g(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(o.Component);
      k(I, "defaultProps", {
        x: 0,
        y: 0,
        lineHeight: "1em",
        capHeight: "0.71em",
        scaleToFit: !1,
        textAnchor: "start",
        verticalAnchor: "end",
        fill: "#808080",
      });
    },
    57317: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => V });
      var n = r(51391),
        i = r.n(n),
        o = r(39277),
        a = r.n(o),
        u = r(80971),
        c = r.n(u),
        l = r(89526),
        s = r(5722),
        f = r(64403),
        p = r.n(f),
        h = r(65853),
        d = r.n(h),
        y = r(93706),
        v = r.n(y),
        m = r(16171);
      function g(t) {
        return (
          (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          g(t)
        );
      }
      function b(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = o.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return x(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return x(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function x(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function w(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function O(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? w(Object(r), !0).forEach(function (e) {
                k(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function S(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, A(n.key), n);
        }
      }
      function j(t, e) {
        return (
          (j = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          j(t, e)
        );
      }
      function _(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = P(t);
          if (e) {
            var i = P(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === g(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(this, r);
        };
      }
      function P(t) {
        return (
          (P = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          P(t)
        );
      }
      function k(t, e, r) {
        return (
          (e = A(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function A(t) {
        var e = (function (t, e) {
          if ("object" !== g(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== g(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === g(e) ? e : String(e);
      }
      function E(t) {
        return v()(t) && (0, m.P2)(t[0]) && (0, m.P2)(t[1]) ? t.join(" ~ ") : t;
      }
      var M = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && j(t, e);
        })(a, t);
        var e,
          r,
          n,
          o = _(a);
        function a() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            o.apply(this, arguments)
          );
        }
        return (
          (e = a),
          (r = [
            {
              key: "renderContent",
              value: function () {
                var t = this.props,
                  e = t.payload,
                  r = t.separator,
                  n = t.formatter,
                  i = t.itemStyle,
                  o = t.itemSorter;
                if (e && e.length) {
                  var a = (o ? d()(e, o) : e).map(function (t, o) {
                    if ("none" === t.type) return null;
                    var a = O(
                        {
                          display: "block",
                          paddingTop: 4,
                          paddingBottom: 4,
                          color: t.color || "#000",
                        },
                        i,
                      ),
                      u = t.formatter || n || E,
                      c = t.value,
                      s = t.name;
                    if (u && null != c && null != s) {
                      var f = u(c, s, t, o, e);
                      if (Array.isArray(f)) {
                        var p = b(f, 2);
                        (c = p[0]), (s = p[1]);
                      } else c = f;
                    }
                    return l.createElement(
                      "li",
                      {
                        className: "recharts-tooltip-item",
                        key: "tooltip-item-".concat(o),
                        style: a,
                      },
                      (0, m.P2)(s)
                        ? l.createElement(
                            "span",
                            { className: "recharts-tooltip-item-name" },
                            s,
                          )
                        : null,
                      (0, m.P2)(s)
                        ? l.createElement(
                            "span",
                            { className: "recharts-tooltip-item-separator" },
                            r,
                          )
                        : null,
                      l.createElement(
                        "span",
                        { className: "recharts-tooltip-item-value" },
                        c,
                      ),
                      l.createElement(
                        "span",
                        { className: "recharts-tooltip-item-unit" },
                        t.unit || "",
                      ),
                    );
                  });
                  return l.createElement(
                    "ul",
                    {
                      className: "recharts-tooltip-item-list",
                      style: { padding: 0, margin: 0 },
                    },
                    a,
                  );
                }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.wrapperClassName,
                  r = t.contentStyle,
                  n = t.labelClassName,
                  o = t.labelStyle,
                  a = t.label,
                  u = t.labelFormatter,
                  c = t.payload,
                  s = O(
                    {
                      margin: 0,
                      padding: 10,
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                      whiteSpace: "nowrap",
                    },
                    r,
                  ),
                  f = O({ margin: 0 }, o),
                  h = !i()(a),
                  d = h ? a : "",
                  y = p()("recharts-default-tooltip", e),
                  v = p()("recharts-tooltip-label", n);
                return (
                  h && u && null != c && (d = u(a, c)),
                  l.createElement(
                    "div",
                    { className: y, style: s },
                    l.createElement(
                      "p",
                      { className: v, style: f },
                      l.isValidElement(d) ? d : "".concat(d),
                    ),
                    this.renderContent(),
                  )
                );
              },
            },
          ]) && S(e.prototype, r),
          n && S(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(l.PureComponent);
      k(M, "displayName", "DefaultTooltipContent"),
        k(M, "defaultProps", {
          separator: " : ",
          contentStyle: {},
          itemStyle: {},
          labelStyle: {},
        });
      var T = r(59509);
      function C(t) {
        return (
          (C =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          C(t)
        );
      }
      function I(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function N(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? I(Object(r), !0).forEach(function (e) {
                $(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function D(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, z(n.key), n);
        }
      }
      function R(t, e) {
        return (
          (R = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          R(t, e)
        );
      }
      function L(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = F(t);
          if (e) {
            var i = F(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === C(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return B(t);
          })(this, r);
        };
      }
      function B(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function F(t) {
        return (
          (F = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          F(t)
        );
      }
      function $(t, e, r) {
        return (
          (e = z(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function z(t) {
        var e = (function (t, e) {
          if ("object" !== C(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== C(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === C(e) ? e : String(e);
      }
      var U = "recharts-tooltip-wrapper";
      function q(t) {
        return t.dataKey;
      }
      var V = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && R(t, e);
        })(u, t);
        var e,
          r,
          n,
          o = L(u);
        function u() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, u);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            $(B((t = o.call.apply(o, [this].concat(r)))), "state", {
              boxWidth: -1,
              boxHeight: -1,
              dismissed: !1,
              dismissedAtCoordinate: { x: 0, y: 0 },
            }),
            $(B(t), "getTranslate", function (e) {
              var r = e.key,
                n = e.tooltipDimension,
                i = e.viewBoxDimension,
                o = t.props,
                a = o.allowEscapeViewBox,
                u = o.reverseDirection,
                c = o.coordinate,
                l = o.offset,
                s = o.position,
                f = o.viewBox;
              if (s && (0, m.hj)(s[r])) return s[r];
              var p = c[r] - n - l,
                h = c[r] + l;
              return a[r]
                ? u[r]
                  ? p
                  : h
                : u[r]
                ? p < f[r]
                  ? Math.max(h, f[r])
                  : Math.max(p, f[r])
                : h + n > f[r] + i
                ? Math.max(p, f[r])
                : Math.max(h, f[r]);
            }),
            t
          );
        }
        return (
          (e = u),
          (r = [
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
              key: "updateBBox",
              value: function () {
                var t = this.state,
                  e = t.boxWidth,
                  r = t.boxHeight;
                if (
                  (t.dismissed
                    ? (this.wrapperNode.blur(),
                      (this.props.coordinate.x ===
                        this.state.dismissedAtCoordinate.x &&
                        this.props.coordinate.y ===
                          this.state.dismissedAtCoordinate.y) ||
                        this.setState({ dismissed: !1 }))
                    : this.wrapperNode.focus({ preventScroll: !0 }),
                  this.wrapperNode && this.wrapperNode.getBoundingClientRect)
                ) {
                  var n = this.wrapperNode.getBoundingClientRect();
                  (Math.abs(n.width - e) > 1 || Math.abs(n.height - r) > 1) &&
                    this.setState({ boxWidth: n.width, boxHeight: n.height });
                } else
                  (-1 === e && -1 === r) ||
                    this.setState({ boxWidth: -1, boxHeight: -1 });
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e,
                  r,
                  n = this,
                  o = this.props,
                  u = o.payload,
                  f = o.isAnimationActive,
                  h = o.animationDuration,
                  d = o.animationEasing,
                  y = o.filterNull,
                  v = (function (t, e) {
                    return !0 === t ? c()(e, q) : a()(t) ? c()(e, t) : e;
                  })(
                    o.payloadUniqBy,
                    y && u && u.length
                      ? u.filter(function (t) {
                          return !i()(t.value);
                        })
                      : u,
                  ),
                  g = v && v.length,
                  b = this.props,
                  x = b.content,
                  w = b.viewBox,
                  O = b.coordinate,
                  S = b.position,
                  j = b.active,
                  _ = b.wrapperStyle,
                  P = N(
                    {
                      pointerEvents: "none",
                      visibility:
                        !this.state.dismissed && j && g ? "visible" : "hidden",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    },
                    _,
                  );
                if (S && (0, m.hj)(S.x) && (0, m.hj)(S.y)) (e = S.x), (r = S.y);
                else {
                  var k = this.state,
                    A = k.boxWidth,
                    E = k.boxHeight;
                  A > 0 && E > 0 && O
                    ? ((e = this.getTranslate({
                        key: "x",
                        tooltipDimension: A,
                        viewBoxDimension: w.width,
                      })),
                      (r = this.getTranslate({
                        key: "y",
                        tooltipDimension: E,
                        viewBoxDimension: w.height,
                      })))
                    : (P.visibility = "hidden");
                }
                (P = N(
                  N(
                    {},
                    (0, s.bO)({
                      transform: this.props.useTranslate3d
                        ? "translate3d(".concat(e, "px, ").concat(r, "px, 0)")
                        : "translate(".concat(e, "px, ").concat(r, "px)"),
                    }),
                  ),
                  P,
                )),
                  f &&
                    j &&
                    (P = N(
                      N(
                        {},
                        (0, s.bO)({
                          transition: "transform ".concat(h, "ms ").concat(d),
                        }),
                      ),
                      P,
                    ));
                var T = p()(
                  U,
                  ($(
                    (t = {}),
                    "".concat(U, "-right"),
                    (0, m.hj)(e) && O && (0, m.hj)(O.x) && e >= O.x,
                  ),
                  $(
                    t,
                    "".concat(U, "-left"),
                    (0, m.hj)(e) && O && (0, m.hj)(O.x) && e < O.x,
                  ),
                  $(
                    t,
                    "".concat(U, "-bottom"),
                    (0, m.hj)(r) && O && (0, m.hj)(O.y) && r >= O.y,
                  ),
                  $(
                    t,
                    "".concat(U, "-top"),
                    (0, m.hj)(r) && O && (0, m.hj)(O.y) && r < O.y,
                  ),
                  t),
                );
                return l.createElement(
                  "div",
                  {
                    tabIndex: -1,
                    role: "dialog",
                    onKeyDown: function (t) {
                      "Escape" === t.key &&
                        n.setState({
                          dismissed: !0,
                          dismissedAtCoordinate: N(
                            N({}, n.state.dismissedAtCoordinate),
                            {},
                            {
                              x: n.props.coordinate.x,
                              y: n.props.coordinate.y,
                            },
                          ),
                        });
                    },
                    className: T,
                    style: P,
                    ref: function (t) {
                      n.wrapperNode = t;
                    },
                  },
                  (function (t, e) {
                    return l.isValidElement(t)
                      ? l.cloneElement(t, e)
                      : a()(t)
                      ? l.createElement(t, e)
                      : l.createElement(M, e);
                  })(x, N(N({}, this.props), {}, { payload: v })),
                );
              },
            },
          ]) && D(e.prototype, r),
          n && D(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          u
        );
      })(l.PureComponent);
      $(V, "displayName", "Tooltip"),
        $(V, "defaultProps", {
          active: !1,
          allowEscapeViewBox: { x: !1, y: !1 },
          reverseDirection: { x: !1, y: !1 },
          offset: 10,
          viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
          coordinate: { x: 0, y: 0 },
          cursorStyle: {},
          separator: " : ",
          wrapperStyle: {},
          contentStyle: {},
          itemStyle: {},
          labelStyle: {},
          cursor: !0,
          trigger: "hover",
          isAnimationActive: !T.x.isSsr,
          animationEasing: "ease",
          animationDuration: 400,
          filterNull: !0,
          useTranslate3d: !1,
        });
    },
    61452: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => s });
      var n = r(89526),
        i = r(64403),
        o = r.n(i),
        a = r(9410),
        u = ["children", "className"];
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          c.apply(this, arguments)
        );
      }
      function l(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      var s = n.forwardRef(function (t, e) {
        var r = t.children,
          i = t.className,
          s = l(t, u),
          f = o()("recharts-layer", i);
        return n.createElement(
          "g",
          c({ className: f }, (0, a.L6)(s, !0), { ref: e }),
          r,
        );
      });
    },
    93386: (t, e, r) => {
      "use strict";
      r.d(e, { T: () => s });
      var n = r(89526),
        i = r(64403),
        o = r.n(i),
        a = r(9410),
        u = ["children", "width", "height", "viewBox", "className", "style"];
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          c.apply(this, arguments)
        );
      }
      function l(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      function s(t) {
        var e = t.children,
          r = t.width,
          i = t.height,
          s = t.viewBox,
          f = t.className,
          p = t.style,
          h = l(t, u),
          d = s || { width: r, height: i, x: 0, y: 0 },
          y = o()("recharts-surface", f);
        return n.createElement(
          "svg",
          c({}, (0, a.L6)(h, !0, "svg"), {
            className: y,
            width: r,
            height: i,
            style: p,
            viewBox: ""
              .concat(d.x, " ")
              .concat(d.y, " ")
              .concat(d.width, " ")
              .concat(d.height),
          }),
          n.createElement("title", null, t.title),
          n.createElement("desc", null, t.desc),
          e,
        );
      }
    },
    17995: (t, e, r) => {
      "use strict";
      r.d(e, { H: () => tt });
      var n = r(93706),
        i = r.n(n),
        o = r(43483),
        a = r.n(o),
        u = r(39277),
        c = r.n(u),
        l = r(89526);
      function s() {}
      function f(t, e, r) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + e) / 6,
          (t._y0 + 4 * t._y1 + r) / 6,
        );
      }
      function p(t) {
        this._context = t;
      }
      function h(t) {
        this._context = t;
      }
      function d(t) {
        this._context = t;
      }
      function y(t) {
        this._context = t;
      }
      function v(t) {
        this._context = t;
      }
      function m(t) {
        return new v(t);
      }
      function g(t) {
        return t < 0 ? -1 : 1;
      }
      function b(t, e, r) {
        var n = t._x1 - t._x0,
          i = e - t._x1,
          o = (t._y1 - t._y0) / (n || (i < 0 && -0)),
          a = (r - t._y1) / (i || (n < 0 && -0)),
          u = (o * i + a * n) / (n + i);
        return (
          (g(o) + g(a)) *
            Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0
        );
      }
      function x(t, e) {
        var r = t._x1 - t._x0;
        return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e;
      }
      function w(t, e, r) {
        var n = t._x0,
          i = t._y0,
          o = t._x1,
          a = t._y1,
          u = (o - n) / 3;
        t._context.bezierCurveTo(n + u, i + u * e, o - u, a - u * r, o, a);
      }
      function O(t) {
        this._context = t;
      }
      function S(t) {
        this._context = new j(t);
      }
      function j(t) {
        this._context = t;
      }
      function _(t) {
        this._context = t;
      }
      function P(t) {
        var e,
          r,
          n = t.length - 1,
          i = new Array(n),
          o = new Array(n),
          a = new Array(n);
        for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e)
          (i[e] = 1), (o[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
        for (
          i[n - 1] = 2, o[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1;
          e < n;
          ++e
        )
          (r = i[e] / o[e - 1]), (o[e] -= r), (a[e] -= r * a[e - 1]);
        for (i[n - 1] = a[n - 1] / o[n - 1], e = n - 2; e >= 0; --e)
          i[e] = (a[e] - i[e + 1]) / o[e];
        for (o[n - 1] = (t[n] + i[n - 1]) / 2, e = 0; e < n - 1; ++e)
          o[e] = 2 * t[e + 1] - i[e + 1];
        return [i, o];
      }
      function k(t, e) {
        (this._context = t), (this._t = e);
      }
      (p.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              f(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
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
              f(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        },
      }),
        (h.prototype = {
          areaStart: s,
          areaEnd: s,
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
              case 1:
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              case 2:
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
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
            }
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = t), (this._y2 = e);
                break;
              case 1:
                (this._point = 2), (this._x3 = t), (this._y3 = e);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = t),
                  (this._y4 = e),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + t) / 6,
                    (this._y0 + 4 * this._y1 + e) / 6,
                  );
                break;
              default:
                f(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        }),
        (d.prototype = {
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
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + t) / 6,
                  n = (this._y0 + 4 * this._y1 + e) / 6;
                this._line
                  ? this._context.lineTo(r, n)
                  : this._context.moveTo(r, n);
                break;
              case 3:
                this._point = 4;
              default:
                f(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        }),
        (y.prototype = {
          areaStart: s,
          areaEnd: s,
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            this._point && this._context.closePath();
          },
          point: function (t, e) {
            (t = +t),
              (e = +e),
              this._point
                ? this._context.lineTo(t, e)
                : ((this._point = 1), this._context.moveTo(t, e));
          },
        }),
        (v.prototype = {
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
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(t, e);
            }
          },
        }),
        (O.prototype = {
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
                w(this, this._t0, x(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            var r = NaN;
            if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), w(this, x(this, (r = b(this, t, e))), r);
                  break;
                default:
                  w(this, this._t0, (r = b(this, t, e)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e),
                (this._t0 = r);
            }
          },
        }),
        ((S.prototype = Object.create(O.prototype)).point = function (t, e) {
          O.prototype.point.call(this, e, t);
        }),
        (j.prototype = {
          moveTo: function (t, e) {
            this._context.moveTo(e, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, e) {
            this._context.lineTo(e, t);
          },
          bezierCurveTo: function (t, e, r, n, i, o) {
            this._context.bezierCurveTo(e, t, n, r, o, i);
          },
        }),
        (_.prototype = {
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
            var t = this._x,
              e = this._y,
              r = t.length;
            if (r)
              if (
                (this._line
                  ? this._context.lineTo(t[0], e[0])
                  : this._context.moveTo(t[0], e[0]),
                2 === r)
              )
                this._context.lineTo(t[1], e[1]);
              else
                for (var n = P(t), i = P(e), o = 0, a = 1; a < r; ++o, ++a)
                  this._context.bezierCurveTo(
                    n[0][o],
                    i[0][o],
                    n[1][o],
                    i[1][o],
                    t[a],
                    e[a],
                  );
            (this._line || (0 !== this._line && 1 === r)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, e) {
            this._x.push(+t), this._y.push(+e);
          },
        }),
        (k.prototype = {
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
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (t, e) {
            switch (((t = +t), (e = +e), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, e)
                    : this._context.moveTo(t, e);
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0)
                  this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                else {
                  var r = this._x * (1 - this._t) + t * this._t;
                  this._context.lineTo(r, this._y), this._context.lineTo(r, e);
                }
            }
            (this._x = t), (this._y = e);
          },
        });
      var A = r(62478),
        E = r(24792),
        M = r(88097);
      function T(t) {
        return t[0];
      }
      function C(t) {
        return t[1];
      }
      function I(t, e) {
        var r = (0, E.Z)(!0),
          n = null,
          i = m,
          o = null,
          a = (0, M.d)(u);
        function u(u) {
          var c,
            l,
            s,
            f = (u = (0, A.Z)(u)).length,
            p = !1;
          for (null == n && (o = i((s = a()))), c = 0; c <= f; ++c)
            !(c < f && r((l = u[c]), c, u)) === p &&
              ((p = !p) ? o.lineStart() : o.lineEnd()),
              p && o.point(+t(l, c, u), +e(l, c, u));
          if (s) return (o = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? T : (0, E.Z)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? C : (0, E.Z)(e)),
          (u.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, E.Z)(+e)), u)
              : t;
          }),
          (u.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, E.Z)(+t)), u)
              : e;
          }),
          (u.defined = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : (0, E.Z)(!!t)), u)
              : r;
          }),
          (u.curve = function (t) {
            return arguments.length ? ((i = t), null != n && (o = i(n)), u) : i;
          }),
          (u.context = function (t) {
            return arguments.length
              ? (null == t ? (n = o = null) : (o = i((n = t))), u)
              : n;
          }),
          u
        );
      }
      function N(t, e, r) {
        var n = null,
          i = (0, E.Z)(!0),
          o = null,
          a = m,
          u = null,
          c = (0, M.d)(l);
        function l(l) {
          var s,
            f,
            p,
            h,
            d,
            y = (l = (0, A.Z)(l)).length,
            v = !1,
            m = new Array(y),
            g = new Array(y);
          for (null == o && (u = a((d = c()))), s = 0; s <= y; ++s) {
            if (!(s < y && i((h = l[s]), s, l)) === v)
              if ((v = !v)) (f = s), u.areaStart(), u.lineStart();
              else {
                for (u.lineEnd(), u.lineStart(), p = s - 1; p >= f; --p)
                  u.point(m[p], g[p]);
                u.lineEnd(), u.areaEnd();
              }
            v &&
              ((m[s] = +t(h, s, l)),
              (g[s] = +e(h, s, l)),
              u.point(n ? +n(h, s, l) : m[s], r ? +r(h, s, l) : g[s]));
          }
          if (d) return (u = null), d + "" || null;
        }
        function s() {
          return I().defined(i).curve(a).context(o);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? T : (0, E.Z)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
              ? (0, E.Z)(0)
              : (0, E.Z)(+e)),
          (r = "function" == typeof r ? r : void 0 === r ? C : (0, E.Z)(+r)),
          (l.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, E.Z)(+e)), (n = null), l)
              : t;
          }),
          (l.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, E.Z)(+e)), l)
              : t;
          }),
          (l.x1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, E.Z)(+t)),
                l)
              : n;
          }),
          (l.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, E.Z)(+t)), (r = null), l)
              : e;
          }),
          (l.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, E.Z)(+t)), l)
              : e;
          }),
          (l.y1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, E.Z)(+t)),
                l)
              : r;
          }),
          (l.lineX0 = l.lineY0 =
            function () {
              return s().x(t).y(e);
            }),
          (l.lineY1 = function () {
            return s().x(t).y(r);
          }),
          (l.lineX1 = function () {
            return s().x(n).y(e);
          }),
          (l.defined = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : (0, E.Z)(!!t)), l)
              : i;
          }),
          (l.curve = function (t) {
            return arguments.length ? ((a = t), null != o && (u = a(o)), l) : a;
          }),
          (l.context = function (t) {
            return arguments.length
              ? (null == t ? (o = u = null) : (u = a((o = t))), l)
              : o;
          }),
          l
        );
      }
      var D = r(64403),
        R = r.n(D),
        L = r(33790),
        B = r(9410),
        F = r(16171);
      function $(t) {
        return (
          ($ =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          $(t)
        );
      }
      function z() {
        return (
          (z = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          z.apply(this, arguments)
        );
      }
      function U(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function q(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? U(Object(r), !0).forEach(function (e) {
                Y(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : U(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function V(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Z(n.key), n);
        }
      }
      function W(t, e) {
        return (
          (W = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          W(t, e)
        );
      }
      function H(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = G(t);
          if (e) {
            var i = G(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === $(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(this, r);
        };
      }
      function G(t) {
        return (
          (G = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          G(t)
        );
      }
      function Y(t, e, r) {
        return (
          (e = Z(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function Z(t) {
        var e = (function (t, e) {
          if ("object" !== $(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== $(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === $(e) ? e : String(e);
      }
      var X = {
          curveBasisClosed: function (t) {
            return new h(t);
          },
          curveBasisOpen: function (t) {
            return new d(t);
          },
          curveBasis: function (t) {
            return new p(t);
          },
          curveLinearClosed: function (t) {
            return new y(t);
          },
          curveLinear: m,
          curveMonotoneX: function (t) {
            return new O(t);
          },
          curveMonotoneY: function (t) {
            return new S(t);
          },
          curveNatural: function (t) {
            return new _(t);
          },
          curveStep: function (t) {
            return new k(t, 0.5);
          },
          curveStepAfter: function (t) {
            return new k(t, 1);
          },
          curveStepBefore: function (t) {
            return new k(t, 0);
          },
        },
        K = function (t) {
          return t.x === +t.x && t.y === +t.y;
        },
        J = function (t) {
          return t.x;
        },
        Q = function (t) {
          return t.y;
        },
        tt = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && W(t, e);
          })(u, t);
          var e,
            r,
            n,
            o = H(u);
          function u() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, u),
              o.apply(this, arguments)
            );
          }
          return (
            (e = u),
            (r = [
              {
                key: "getPath",
                value: function () {
                  var t,
                    e = this.props,
                    r = e.type,
                    n = e.points,
                    o = e.baseLine,
                    u = e.layout,
                    l = e.connectNulls,
                    s = (function (t, e) {
                      if (c()(t)) return t;
                      var r = "curve".concat(a()(t));
                      return "curveMonotone" === r && e
                        ? X["".concat(r).concat("vertical" === e ? "Y" : "X")]
                        : X[r] || m;
                    })(r, u),
                    f = l
                      ? n.filter(function (t) {
                          return K(t);
                        })
                      : n;
                  if (i()(o)) {
                    var p = l
                        ? o.filter(function (t) {
                            return K(t);
                          })
                        : o,
                      h = f.map(function (t, e) {
                        return q(q({}, t), {}, { base: p[e] });
                      });
                    return (
                      (t =
                        "vertical" === u
                          ? N()
                              .y(Q)
                              .x1(J)
                              .x0(function (t) {
                                return t.base.x;
                              })
                          : N()
                              .x(J)
                              .y1(Q)
                              .y0(function (t) {
                                return t.base.y;
                              }))
                        .defined(K)
                        .curve(s),
                      t(h)
                    );
                  }
                  return (
                    (t =
                      "vertical" === u && (0, F.hj)(o)
                        ? N().y(Q).x1(J).x0(o)
                        : (0, F.hj)(o)
                        ? N().x(J).y1(Q).y0(o)
                        : I().x(J).y(Q))
                      .defined(K)
                      .curve(s),
                    t(f)
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.className,
                    r = t.points,
                    n = t.path,
                    i = t.pathRef;
                  if (!((r && r.length) || n)) return null;
                  var o = r && r.length ? this.getPath() : n;
                  return l.createElement(
                    "path",
                    z({}, (0, B.L6)(this.props), (0, L.Ym)(this.props), {
                      className: R()("recharts-curve", e),
                      d: o,
                      ref: i,
                    }),
                  );
                },
              },
            ]) && V(e.prototype, r),
            n && V(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            u
          );
        })(l.PureComponent);
      Y(tt, "defaultProps", { type: "linear", points: [], connectNulls: !1 });
    },
    96963: (t, e, r) => {
      "use strict";
      r.d(e, { o: () => d });
      var n = r(89526),
        i = r(64403),
        o = r.n(i),
        a = r(33790),
        u = r(9410);
      function c(t) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          c(t)
        );
      }
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          l.apply(this, arguments)
        );
      }
      function s(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(
              t,
              ((i = n.key),
              (o = void 0),
              (o = (function (t, e) {
                if ("object" !== c(t) || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(t, e || "default");
                  if ("object" !== c(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === e ? String : Number)(t);
              })(i, "string")),
              "symbol" === c(o) ? o : String(o)),
              n,
            );
        }
        var i, o;
      }
      function f(t, e) {
        return (
          (f = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          f(t, e)
        );
      }
      function p(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = h(t);
          if (e) {
            var i = h(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === c(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(this, r);
        };
      }
      function h(t) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          h(t)
        );
      }
      var d = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && f(t, e);
        })(h, t);
        var e,
          r,
          i,
          c = p(h);
        function h() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, h),
            c.apply(this, arguments)
          );
        }
        return (
          (e = h),
          (r = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  r = t.cy,
                  i = t.r,
                  c = t.className,
                  s = o()("recharts-dot", c);
                return e === +e && r === +r && i === +i
                  ? n.createElement(
                      "circle",
                      l({}, (0, u.L6)(this.props), (0, a.Ym)(this.props), {
                        className: s,
                        cx: e,
                        cy: r,
                        r: i,
                      }),
                    )
                  : null;
              },
            },
          ]) && s(e.prototype, r),
          i && s(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          h
        );
      })(n.PureComponent);
    },
    33951: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => b, X: () => g });
      var n = r(89526),
        i = r(64403),
        o = r.n(i),
        a = r(5722),
        u = r(9410);
      function c(t) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          c(t)
        );
      }
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          l.apply(this, arguments)
        );
      }
      function s(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, v(n.key), n);
        }
      }
      function f(t, e) {
        return (
          (f = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          f(t, e)
        );
      }
      function p(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = d(t);
          if (e) {
            var i = d(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === c(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return h(t);
          })(this, r);
        };
      }
      function h(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function d(t) {
        return (
          (d = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          d(t)
        );
      }
      function y(t, e, r) {
        return (
          (e = v(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function v(t) {
        var e = (function (t, e) {
          if ("object" !== c(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== c(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === c(e) ? e : String(e);
      }
      var m = function (t, e, r, n, i) {
          var o,
            a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
            u = n >= 0 ? 1 : -1,
            c = r >= 0 ? 1 : -1,
            l = (n >= 0 && r >= 0) || (n < 0 && r < 0) ? 1 : 0;
          if (a > 0 && i instanceof Array) {
            for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
              s[f] = i[f] > a ? a : i[f];
            (o = "M".concat(t, ",").concat(e + u * s[0])),
              s[0] > 0 &&
                (o += "A "
                  .concat(s[0], ",")
                  .concat(s[0], ",0,0,")
                  .concat(l, ",")
                  .concat(t + c * s[0], ",")
                  .concat(e)),
              (o += "L ".concat(t + r - c * s[1], ",").concat(e)),
              s[1] > 0 &&
                (o += "A "
                  .concat(s[1], ",")
                  .concat(s[1], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + r, ",")
                  .concat(e + u * s[1])),
              (o += "L ".concat(t + r, ",").concat(e + n - u * s[2])),
              s[2] > 0 &&
                (o += "A "
                  .concat(s[2], ",")
                  .concat(s[2], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + r - c * s[2], ",")
                  .concat(e + n)),
              (o += "L ".concat(t + c * s[3], ",").concat(e + n)),
              s[3] > 0 &&
                (o += "A "
                  .concat(s[3], ",")
                  .concat(s[3], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t, ",")
                  .concat(e + n - u * s[3])),
              (o += "Z");
          } else if (a > 0 && i === +i && i > 0) {
            var p = Math.min(a, i);
            o = "M "
              .concat(t, ",")
              .concat(e + u * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + c * p, ",")
              .concat(e, "\n            L ")
              .concat(t + r - c * p, ",")
              .concat(e, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + r, ",")
              .concat(e + u * p, "\n            L ")
              .concat(t + r, ",")
              .concat(e + n - u * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + r - c * p, ",")
              .concat(e + n, "\n            L ")
              .concat(t + c * p, ",")
              .concat(e + n, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t, ",")
              .concat(e + n - u * p, " Z");
          } else
            o = "M "
              .concat(t, ",")
              .concat(e, " h ")
              .concat(r, " v ")
              .concat(n, " h ")
              .concat(-r, " Z");
          return o;
        },
        g = function (t, e) {
          if (!t || !e) return !1;
          var r = t.x,
            n = t.y,
            i = e.x,
            o = e.y,
            a = e.width,
            u = e.height;
          if (Math.abs(a) > 0 && Math.abs(u) > 0) {
            var c = Math.min(i, i + a),
              l = Math.max(i, i + a),
              s = Math.min(o, o + u),
              f = Math.max(o, o + u);
            return r >= c && r <= l && n >= s && n <= f;
          }
          return !1;
        },
        b = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && f(t, e);
          })(d, t);
          var e,
            r,
            i,
            c = p(d);
          function d() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, d);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
              r[n] = arguments[n];
            return (
              y(h((t = c.call.apply(c, [this].concat(r)))), "state", {
                totalLength: -1,
              }),
              t
            );
          }
          return (
            (e = d),
            (r = [
              {
                key: "componentDidMount",
                value: function () {
                  if (this.node && this.node.getTotalLength)
                    try {
                      var t = this.node.getTotalLength();
                      t && this.setState({ totalLength: t });
                    } catch (t) {}
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    r = e.x,
                    i = e.y,
                    c = e.width,
                    s = e.height,
                    f = e.radius,
                    p = e.className,
                    h = this.state.totalLength,
                    d = this.props,
                    y = d.animationEasing,
                    v = d.animationDuration,
                    g = d.animationBegin,
                    b = d.isAnimationActive,
                    x = d.isUpdateAnimationActive;
                  if (
                    r !== +r ||
                    i !== +i ||
                    c !== +c ||
                    s !== +s ||
                    0 === c ||
                    0 === s
                  )
                    return null;
                  var w = o()("recharts-rectangle", p);
                  return x
                    ? n.createElement(
                        a.ZP,
                        {
                          canBegin: h > 0,
                          from: { width: c, height: s, x: r, y: i },
                          to: { width: c, height: s, x: r, y: i },
                          duration: v,
                          animationEasing: y,
                          isActive: x,
                        },
                        function (e) {
                          var r = e.width,
                            i = e.height,
                            o = e.x,
                            c = e.y;
                          return n.createElement(
                            a.ZP,
                            {
                              canBegin: h > 0,
                              from: "0px ".concat(-1 === h ? 1 : h, "px"),
                              to: "".concat(h, "px 0px"),
                              attributeName: "strokeDasharray",
                              begin: g,
                              duration: v,
                              isActive: b,
                              easing: y,
                            },
                            n.createElement(
                              "path",
                              l({}, (0, u.L6)(t.props, !0), {
                                className: w,
                                d: m(o, c, r, i, f),
                                ref: function (e) {
                                  t.node = e;
                                },
                              }),
                            ),
                          );
                        },
                      )
                    : n.createElement(
                        "path",
                        l({}, (0, u.L6)(this.props, !0), {
                          className: w,
                          d: m(r, i, c, s, f),
                        }),
                      );
                },
              },
            ]) && s(e.prototype, r),
            i && s(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            d
          );
        })(n.PureComponent);
      y(b, "defaultProps", {
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
      });
    },
    16667: (t, e, r) => {
      "use strict";
      r.d(e, { v: () => q });
      var n = r(43483),
        i = r.n(n),
        o = r(89526);
      Math.abs, Math.atan2;
      const a = Math.cos,
        u = (Math.max, Math.min, Math.sin),
        c = Math.sqrt,
        l = Math.PI,
        s = 2 * l;
      const f = {
          draw(t, e) {
            const r = c(e / l);
            t.moveTo(r, 0), t.arc(0, 0, r, 0, s);
          },
        },
        p = {
          draw(t, e) {
            const r = c(e / 5) / 2;
            t.moveTo(-3 * r, -r),
              t.lineTo(-r, -r),
              t.lineTo(-r, -3 * r),
              t.lineTo(r, -3 * r),
              t.lineTo(r, -r),
              t.lineTo(3 * r, -r),
              t.lineTo(3 * r, r),
              t.lineTo(r, r),
              t.lineTo(r, 3 * r),
              t.lineTo(-r, 3 * r),
              t.lineTo(-r, r),
              t.lineTo(-3 * r, r),
              t.closePath();
          },
        },
        h = c(1 / 3),
        d = 2 * h,
        y = {
          draw(t, e) {
            const r = c(e / d),
              n = r * h;
            t.moveTo(0, -r),
              t.lineTo(n, 0),
              t.lineTo(0, r),
              t.lineTo(-n, 0),
              t.closePath();
          },
        },
        v = {
          draw(t, e) {
            const r = c(e),
              n = -r / 2;
            t.rect(n, n, r, r);
          },
        },
        m = u(l / 10) / u((7 * l) / 10),
        g = u(s / 10) * m,
        b = -a(s / 10) * m,
        x = {
          draw(t, e) {
            const r = c(0.8908130915292852 * e),
              n = g * r,
              i = b * r;
            t.moveTo(0, -r), t.lineTo(n, i);
            for (let e = 1; e < 5; ++e) {
              const o = (s * e) / 5,
                c = a(o),
                l = u(o);
              t.lineTo(l * r, -c * r), t.lineTo(c * n - l * i, l * n + c * i);
            }
            t.closePath();
          },
        },
        w = c(3),
        O = {
          draw(t, e) {
            const r = -c(e / (3 * w));
            t.moveTo(0, 2 * r),
              t.lineTo(-w * r, -r),
              t.lineTo(w * r, -r),
              t.closePath();
          },
        },
        S = -0.5,
        j = c(3) / 2,
        _ = 1 / c(12),
        P = 3 * (_ / 2 + 1),
        k = {
          draw(t, e) {
            const r = c(e / P),
              n = r / 2,
              i = r * _,
              o = n,
              a = r * _ + r,
              u = -o,
              l = a;
            t.moveTo(n, i),
              t.lineTo(o, a),
              t.lineTo(u, l),
              t.lineTo(S * n - j * i, j * n + S * i),
              t.lineTo(S * o - j * a, j * o + S * a),
              t.lineTo(S * u - j * l, j * u + S * l),
              t.lineTo(S * n + j * i, S * i - j * n),
              t.lineTo(S * o + j * a, S * a - j * o),
              t.lineTo(S * u + j * l, S * l - j * u),
              t.closePath();
          },
        };
      var A = r(24792),
        E = r(88097);
      c(3), c(3);
      var M = r(64403),
        T = r.n(M),
        C = r(9410);
      function I(t) {
        return (
          (I =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          I(t)
        );
      }
      function N() {
        return (
          (N = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          N.apply(this, arguments)
        );
      }
      function D(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, $(n.key), n);
        }
      }
      function R(t, e) {
        return (
          (R = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          R(t, e)
        );
      }
      function L(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = B(t);
          if (e) {
            var i = B(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === I(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t);
          })(this, r);
        };
      }
      function B(t) {
        return (
          (B = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          B(t)
        );
      }
      function F(t, e, r) {
        return (
          (e = $(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function $(t) {
        var e = (function (t, e) {
          if ("object" !== I(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== I(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === I(e) ? e : String(e);
      }
      var z = {
          symbolCircle: f,
          symbolCross: p,
          symbolDiamond: y,
          symbolSquare: v,
          symbolStar: x,
          symbolTriangle: O,
          symbolWye: k,
        },
        U = Math.PI / 180,
        q = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && R(t, e);
          })(u, t);
          var e,
            r,
            n,
            a = L(u);
          function u() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, u),
              a.apply(this, arguments)
            );
          }
          return (
            (e = u),
            (r = [
              {
                key: "getPath",
                value: function () {
                  var t = this.props,
                    e = t.size,
                    r = t.sizeType,
                    n = t.type,
                    o = (function (t) {
                      var e = "symbol".concat(i()(t));
                      return z[e] || f;
                    })(n),
                    a = (function (t, e) {
                      let r = null,
                        n = (0, E.d)(i);
                      function i() {
                        let i;
                        if (
                          (r || (r = i = n()),
                          t
                            .apply(this, arguments)
                            .draw(r, +e.apply(this, arguments)),
                          i)
                        )
                          return (r = null), i + "" || null;
                      }
                      return (
                        (t = "function" == typeof t ? t : (0, A.Z)(t || f)),
                        (e =
                          "function" == typeof e
                            ? e
                            : (0, A.Z)(void 0 === e ? 64 : +e)),
                        (i.type = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : (0, A.Z)(e)),
                              i)
                            : t;
                        }),
                        (i.size = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : (0, A.Z)(+t)),
                              i)
                            : e;
                        }),
                        (i.context = function (t) {
                          return arguments.length
                            ? ((r = null == t ? null : t), i)
                            : r;
                        }),
                        i
                      );
                    })()
                      .type(o)
                      .size(
                        (function (t, e, r) {
                          if ("area" === e) return t;
                          switch (r) {
                            case "cross":
                              return (5 * t * t) / 9;
                            case "diamond":
                              return (0.5 * t * t) / Math.sqrt(3);
                            case "square":
                              return t * t;
                            case "star":
                              var n = 18 * U;
                              return (
                                1.25 *
                                t *
                                t *
                                (Math.tan(n) -
                                  Math.tan(2 * n) * Math.pow(Math.tan(n), 2))
                              );
                            case "triangle":
                              return (Math.sqrt(3) * t * t) / 4;
                            case "wye":
                              return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
                            default:
                              return (Math.PI * t * t) / 4;
                          }
                        })(e, r, n),
                      );
                  return a();
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.className,
                    r = t.cx,
                    n = t.cy,
                    i = t.size,
                    a = (0, C.L6)(this.props, !0);
                  return r === +r && n === +n && i === +i
                    ? o.createElement(
                        "path",
                        N({}, a, {
                          className: T()("recharts-symbols", e),
                          transform: "translate("
                            .concat(r, ", ")
                            .concat(n, ")"),
                          d: this.getPath(),
                        }),
                      )
                    : null;
                },
              },
            ]),
            r && D(e.prototype, r),
            n && D(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            u
          );
        })(o.PureComponent);
      F(q, "defaultProps", { type: "circle", size: 64, sizeType: "area" }),
        F(q, "registerSymbol", function (t, e) {
          z["symbol".concat(i()(t))] = e;
        });
    },
    87210: (t, e, r) => {
      "use strict";
      r.d(e, { Ky: () => w, O1: () => g, _b: () => b, t9: () => m });
      var n = r(70826),
        i = r.n(n),
        o = r(40508),
        a = r.n(o),
        u = r(71298),
        c = r(9410),
        l = r(16171),
        s = r(75018);
      function f(t) {
        return (
          (f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          f(t)
        );
      }
      function p(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, v(n.key), n);
        }
      }
      function h(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(r), !0).forEach(function (e) {
                y(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function y(t, e, r) {
        return (
          (e = v(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function v(t) {
        var e = (function (t, e) {
          if ("object" !== f(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== f(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === f(e) ? e : String(e);
      }
      var m = function (t, e, r, n, i) {
          var o = t.width,
            a = t.height,
            f = t.layout,
            p = t.children,
            h = Object.keys(e),
            v = {
              left: r.left,
              leftMirror: r.left,
              right: o - r.right,
              rightMirror: o - r.right,
              top: r.top,
              topMirror: r.top,
              bottom: a - r.bottom,
              bottomMirror: a - r.bottom,
            },
            m = !!(0, c.sP)(p, s.$);
          return h.reduce(function (o, a) {
            var c,
              s,
              p,
              h,
              g,
              b = e[a],
              x = b.orientation,
              w = b.domain,
              O = b.padding,
              S = void 0 === O ? {} : O,
              j = b.mirror,
              _ = b.reversed,
              P = "".concat(x).concat(j ? "Mirror" : "");
            if (
              "number" === b.type &&
              ("gap" === b.padding || "no-gap" === b.padding)
            ) {
              var k = w[1] - w[0],
                A = 1 / 0,
                E = b.categoricalDomain.sort();
              E.forEach(function (t, e) {
                e > 0 && (A = Math.min((t || 0) - (E[e - 1] || 0), A));
              });
              var M = A / k,
                T = "vertical" === b.layout ? r.height : r.width;
              if (
                ("gap" === b.padding && (c = (M * T) / 2),
                "no-gap" === b.padding)
              ) {
                var C = (0, l.h1)(t.barCategoryGap, M * T),
                  I = (M * T) / 2;
                c = I - C - ((I - C) / T) * C;
              }
            }
            (s =
              "xAxis" === n
                ? [
                    r.left + (S.left || 0) + (c || 0),
                    r.left + r.width - (S.right || 0) - (c || 0),
                  ]
                : "yAxis" === n
                ? "horizontal" === f
                  ? [r.top + r.height - (S.bottom || 0), r.top + (S.top || 0)]
                  : [
                      r.top + (S.top || 0) + (c || 0),
                      r.top + r.height - (S.bottom || 0) - (c || 0),
                    ]
                : b.range),
              _ && (s = [s[1], s[0]]);
            var N = (0, u.Hq)(b, i, m),
              D = N.scale,
              R = N.realScaleType;
            D.domain(w).range(s), (0, u.zF)(D);
            var L = (0, u.g$)(D, d(d({}, b), {}, { realScaleType: R }));
            "xAxis" === n
              ? ((g = ("top" === x && !j) || ("bottom" === x && j)),
                (p = r.left),
                (h = v[P] - g * b.height))
              : "yAxis" === n &&
                ((g = ("left" === x && !j) || ("right" === x && j)),
                (p = v[P] - g * b.width),
                (h = r.top));
            var B = d(
              d(d({}, b), L),
              {},
              {
                realScaleType: R,
                x: p,
                y: h,
                scale: D,
                width: "xAxis" === n ? r.width : b.width,
                height: "yAxis" === n ? r.height : b.height,
              },
            );
            return (
              (B.bandSize = (0, u.zT)(B, L)),
              b.hide || "xAxis" !== n
                ? b.hide || (v[P] += (g ? -1 : 1) * B.width)
                : (v[P] += (g ? -1 : 1) * B.height),
              d(d({}, o), {}, y({}, a, B))
            );
          }, {});
        },
        g = function (t, e) {
          var r = t.x,
            n = t.y,
            i = e.x,
            o = e.y;
          return {
            x: Math.min(r, i),
            y: Math.min(n, o),
            width: Math.abs(i - r),
            height: Math.abs(o - n),
          };
        },
        b = function (t) {
          var e = t.x1,
            r = t.y1,
            n = t.x2,
            i = t.y2;
          return g({ x: e, y: r }, { x: n, y: i });
        },
        x = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.scale = e);
          }
          var e, r, n;
          return (
            (e = t),
            (r = [
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
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = e.bandAware,
                    n = e.position;
                  if (void 0 !== t) {
                    if (n)
                      switch (n) {
                        case "start":
                        default:
                          return this.scale(t);
                        case "middle":
                          var i = this.bandwidth ? this.bandwidth() / 2 : 0;
                          return this.scale(t) + i;
                        case "end":
                          var o = this.bandwidth ? this.bandwidth() : 0;
                          return this.scale(t) + o;
                      }
                    if (r) {
                      var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(t) + a;
                    }
                    return this.scale(t);
                  }
                },
              },
              {
                key: "isInRange",
                value: function (t) {
                  var e = this.range(),
                    r = e[0],
                    n = e[e.length - 1];
                  return r <= n ? t >= r && t <= n : t >= n && t <= r;
                },
              },
            ]),
            (n = [
              {
                key: "create",
                value: function (e) {
                  return new t(e);
                },
              },
            ]),
            r && p(e.prototype, r),
            n && p(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
      y(x, "EPS", 1e-4);
      var w = function (t) {
        var e = Object.keys(t).reduce(function (e, r) {
          return d(d({}, e), {}, y({}, r, x.create(t[r])));
        }, {});
        return d(
          d({}, e),
          {},
          {
            apply: function (t) {
              var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = r.bandAware,
                i = r.position;
              return a()(t, function (t, r) {
                return e[r].apply(t, { bandAware: n, position: i });
              });
            },
            isInRange: function (t) {
              return i()(t, function (t, r) {
                return e[r].isInRange(t);
              });
            },
          },
        );
      };
    },
    71298: (t, e, r) => {
      "use strict";
      r.d(e, {
        By: () => Li,
        VO: () => Ci,
        zF: () => Gi,
        DO: () => Vi,
        Bu: () => Yi,
        zT: () => co,
        qz: () => Ri,
        pt: () => Di,
        Yj: () => ro,
        Fy: () => eo,
        Hv: () => to,
        Rf: () => Ui,
        gF: () => Ti,
        s6: () => $i,
        EB: () => io,
        zp: () => Ni,
        fk: () => Ii,
        wh: () => Ji,
        O3: () => no,
        uY: () => qi,
        g$: () => Qi,
        Qo: () => so,
        F$: () => Mi,
        NA: () => zi,
        ko: () => lo,
        ZI: () => Fi,
        Hq: () => Wi,
        LG: () => uo,
        Vv: () => Zi,
      });
      var n = {};
      r.r(n),
        r.d(n, {
          scaleBand: () => A.Z,
          scaleDiverging: () => Ln,
          scaleDivergingLog: () => Bn,
          scaleDivergingPow: () => $n,
          scaleDivergingSqrt: () => zn,
          scaleDivergingSymlog: () => Fn,
          scaleIdentity: () => Et,
          scaleImplicit: () => qt.O,
          scaleLinear: () => At,
          scaleLog: () => Bt,
          scaleOrdinal: () => qt.Z,
          scalePoint: () => A.x,
          scalePow: () => Yt,
          scaleQuantile: () => ae,
          scaleQuantize: () => ue,
          scaleRadial: () => Kt,
          scaleSequential: () => Mn,
          scaleSequentialLog: () => Tn,
          scaleSequentialPow: () => In,
          scaleSequentialQuantile: () => Dn,
          scaleSequentialSqrt: () => Nn,
          scaleSequentialSymlog: () => Cn,
          scaleSqrt: () => Zt,
          scaleSymlog: () => Ut,
          scaleThreshold: () => ce,
          scaleTime: () => Pn,
          scaleUtc: () => kn,
          tickFormat: () => Pt,
        });
      var i = r(47184),
        o = r.n(i),
        a = r(65853),
        u = r.n(a),
        c = r(35813),
        l = r.n(c),
        s = r(43483),
        f = r.n(s),
        p = r(72139),
        h = r.n(p),
        d = r(93706),
        y = r.n(d),
        v = r(14019),
        m = r.n(v),
        g = r(73398),
        b = r.n(g),
        x = r(22610),
        w = r.n(x),
        O = r(39277),
        S = r.n(O),
        j = r(80089),
        _ = r.n(j),
        P = r(51391),
        k = r.n(P),
        A = r(2514);
      const E = Math.sqrt(50),
        M = Math.sqrt(10),
        T = Math.sqrt(2);
      function C(t, e, r) {
        const n = (e - t) / Math.max(0, r),
          i = Math.floor(Math.log10(n)),
          o = n / Math.pow(10, i),
          a = o >= E ? 10 : o >= M ? 5 : o >= T ? 2 : 1;
        let u, c, l;
        return (
          i < 0
            ? ((l = Math.pow(10, -i) / a),
              (u = Math.round(t * l)),
              (c = Math.round(e * l)),
              u / l < t && ++u,
              c / l > e && --c,
              (l = -l))
            : ((l = Math.pow(10, i) * a),
              (u = Math.round(t / l)),
              (c = Math.round(e / l)),
              u * l < t && ++u,
              c * l > e && --c),
          c < u && 0.5 <= r && r < 2 ? C(t, e, 2 * r) : [u, c, l]
        );
      }
      function I(t, e, r) {
        if (!((r = +r) > 0)) return [];
        if ((t = +t) === (e = +e)) return [t];
        const n = e < t,
          [i, o, a] = n ? C(e, t, r) : C(t, e, r);
        if (!(o >= i)) return [];
        const u = o - i + 1,
          c = new Array(u);
        if (n)
          if (a < 0) for (let t = 0; t < u; ++t) c[t] = (o - t) / -a;
          else for (let t = 0; t < u; ++t) c[t] = (o - t) * a;
        else if (a < 0) for (let t = 0; t < u; ++t) c[t] = (i + t) / -a;
        else for (let t = 0; t < u; ++t) c[t] = (i + t) * a;
        return c;
      }
      function N(t, e, r) {
        return C((t = +t), (e = +e), (r = +r))[2];
      }
      function D(t, e, r) {
        r = +r;
        const n = (e = +e) < (t = +t),
          i = n ? N(e, t, r) : N(t, e, r);
        return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
      }
      function R(t, e) {
        return null == t || null == e
          ? NaN
          : t < e
          ? -1
          : t > e
          ? 1
          : t >= e
          ? 0
          : NaN;
      }
      function L(t, e) {
        return null == t || null == e
          ? NaN
          : e < t
          ? -1
          : e > t
          ? 1
          : e >= t
          ? 0
          : NaN;
      }
      function B(t) {
        let e, r, n;
        function i(t, n, i = 0, o = t.length) {
          if (i < o) {
            if (0 !== e(n, n)) return o;
            do {
              const e = (i + o) >>> 1;
              r(t[e], n) < 0 ? (i = e + 1) : (o = e);
            } while (i < o);
          }
          return i;
        }
        return (
          2 !== t.length
            ? ((e = R), (r = (e, r) => R(t(e), r)), (n = (e, r) => t(e) - r))
            : ((e = t === R || t === L ? t : F), (r = t), (n = t)),
          {
            left: i,
            center: function (t, e, r = 0, o = t.length) {
              const a = i(t, e, r, o - 1);
              return a > r && n(t[a - 1], e) > -n(t[a], e) ? a - 1 : a;
            },
            right: function (t, n, i = 0, o = t.length) {
              if (i < o) {
                if (0 !== e(n, n)) return o;
                do {
                  const e = (i + o) >>> 1;
                  r(t[e], n) <= 0 ? (i = e + 1) : (o = e);
                } while (i < o);
              }
              return i;
            },
          }
        );
      }
      function F() {
        return 0;
      }
      function $(t) {
        return null === t ? NaN : +t;
      }
      const z = B(R),
        U = z.right,
        q = (z.left, B($).center, U);
      var V = r(12997),
        W = r(6063);
      function H(t, e) {
        var r,
          n = e ? e.length : 0,
          i = t ? Math.min(n, t.length) : 0,
          o = new Array(i),
          a = new Array(n);
        for (r = 0; r < i; ++r) o[r] = Q(t[r], e[r]);
        for (; r < n; ++r) a[r] = e[r];
        return function (t) {
          for (r = 0; r < i; ++r) a[r] = o[r](t);
          return a;
        };
      }
      function G(t, e) {
        var r = new Date();
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return r.setTime(t * (1 - n) + e * n), r;
          }
        );
      }
      var Y = r(58983);
      function Z(t, e) {
        var r,
          n = {},
          i = {};
        for (r in ((null !== t && "object" == typeof t) || (t = {}),
        (null !== e && "object" == typeof e) || (e = {}),
        e))
          r in t ? (n[r] = Q(t[r], e[r])) : (i[r] = e[r]);
        return function (t) {
          for (r in n) i[r] = n[r](t);
          return i;
        };
      }
      var X = r(78308),
        K = r(49879);
      function J(t, e) {
        e || (e = []);
        var r,
          n = t ? Math.min(e.length, t.length) : 0,
          i = e.slice();
        return function (o) {
          for (r = 0; r < n; ++r) i[r] = t[r] * (1 - o) + e[r] * o;
          return i;
        };
      }
      function Q(t, e) {
        var r,
          n,
          i = typeof e;
        return null == e || "boolean" === i
          ? (0, K.Z)(e)
          : ("number" === i
              ? Y.Z
              : "string" === i
              ? (r = (0, V.ZP)(e))
                ? ((e = r), W.ZP)
                : X.Z
              : e instanceof V.ZP
              ? W.ZP
              : e instanceof Date
              ? G
              : ((n = e),
                !ArrayBuffer.isView(n) || n instanceof DataView
                  ? Array.isArray(e)
                    ? H
                    : ("function" != typeof e.valueOf &&
                        "function" != typeof e.toString) ||
                      isNaN(e)
                    ? Z
                    : Y.Z
                  : J))(t, e);
      }
      function tt(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (r) {
            return Math.round(t * (1 - r) + e * r);
          }
        );
      }
      function et(t) {
        return +t;
      }
      var rt = [0, 1];
      function nt(t) {
        return t;
      }
      function it(t, e) {
        return (e -= t = +t)
          ? function (r) {
              return (r - t) / e;
            }
          : ((r = isNaN(e) ? NaN : 0.5),
            function () {
              return r;
            });
        var r;
      }
      function ot(t, e, r) {
        var n = t[0],
          i = t[1],
          o = e[0],
          a = e[1];
        return (
          i < n
            ? ((n = it(i, n)), (o = r(a, o)))
            : ((n = it(n, i)), (o = r(o, a))),
          function (t) {
            return o(n(t));
          }
        );
      }
      function at(t, e, r) {
        var n = Math.min(t.length, e.length) - 1,
          i = new Array(n),
          o = new Array(n),
          a = -1;
        for (
          t[n] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < n;

        )
          (i[a] = it(t[a], t[a + 1])), (o[a] = r(e[a], e[a + 1]));
        return function (e) {
          var r = q(t, e, 1, n) - 1;
          return o[r](i[r](e));
        };
      }
      function ut(t, e) {
        return e
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function ct() {
        var t,
          e,
          r,
          n,
          i,
          o,
          a = rt,
          u = rt,
          c = Q,
          l = nt;
        function s() {
          var t,
            e,
            r,
            c = Math.min(a.length, u.length);
          return (
            l !== nt &&
              ((t = a[0]),
              (e = a[c - 1]),
              t > e && ((r = t), (t = e), (e = r)),
              (l = function (r) {
                return Math.max(t, Math.min(e, r));
              })),
            (n = c > 2 ? at : ot),
            (i = o = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e = +e))
            ? r
            : (i || (i = n(a.map(t), u, c)))(t(l(e)));
        }
        return (
          (f.invert = function (r) {
            return l(e((o || (o = n(u, a.map(t), Y.Z)))(r)));
          }),
          (f.domain = function (t) {
            return arguments.length
              ? ((a = Array.from(t, et)), s())
              : a.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((u = Array.from(t)), s()) : u.slice();
          }),
          (f.rangeRound = function (t) {
            return (u = Array.from(t)), (c = tt), s();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((l = !!t || nt), s()) : l !== nt;
          }),
          (f.interpolate = function (t) {
            return arguments.length ? ((c = t), s()) : c;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((r = t), f) : r;
          }),
          function (r, n) {
            return (t = r), (e = n), s();
          }
        );
      }
      function lt() {
        return ct()(nt, nt);
      }
      var st,
        ft = r(24701),
        pt =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function ht(t) {
        if (!(e = pt.exec(t))) throw new Error("invalid format: " + t);
        var e;
        return new dt({
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
      function dt(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      function yt(t, e) {
        if (
          (r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e",
          )) < 0
        )
          return null;
        var r,
          n = t.slice(0, r);
        return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)];
      }
      function vt(t) {
        return (t = yt(Math.abs(t))) ? t[1] : NaN;
      }
      function mt(t, e) {
        var r = yt(t, e);
        if (!r) return t + "";
        var n = r[0],
          i = r[1];
        return i < 0
          ? "0." + new Array(-i).join("0") + n
          : n.length > i + 1
          ? n.slice(0, i + 1) + "." + n.slice(i + 1)
          : n + new Array(i - n.length + 2).join("0");
      }
      (ht.prototype = dt.prototype),
        (dt.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      const gt = {
        "%": (t, e) => (100 * t).toFixed(e),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: function (t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString("en").replace(/,/g, "")
            : t.toString(10);
        },
        e: (t, e) => t.toExponential(e),
        f: (t, e) => t.toFixed(e),
        g: (t, e) => t.toPrecision(e),
        o: (t) => Math.round(t).toString(8),
        p: (t, e) => mt(100 * t, e),
        r: mt,
        s: function (t, e) {
          var r = yt(t, e);
          if (!r) return t + "";
          var n = r[0],
            i = r[1],
            o = i - (st = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            a = n.length;
          return o === a
            ? n
            : o > a
            ? n + new Array(o - a + 1).join("0")
            : o > 0
            ? n.slice(0, o) + "." + n.slice(o)
            : "0." +
              new Array(1 - o).join("0") +
              yt(t, Math.max(0, e + o - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function bt(t) {
        return t;
      }
      var xt,
        wt,
        Ot,
        St = Array.prototype.map,
        jt = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "µ",
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
      function _t(t) {
        var e,
          r,
          n =
            void 0 === t.grouping || void 0 === t.thousands
              ? bt
              : ((e = St.call(t.grouping, Number)),
                (r = t.thousands + ""),
                function (t, n) {
                  for (
                    var i = t.length, o = [], a = 0, u = e[0], c = 0;
                    i > 0 &&
                    u > 0 &&
                    (c + u + 1 > n && (u = Math.max(1, n - c)),
                    o.push(t.substring((i -= u), i + u)),
                    !((c += u + 1) > n));

                  )
                    u = e[(a = (a + 1) % e.length)];
                  return o.reverse().join(r);
                }),
          i = void 0 === t.currency ? "" : t.currency[0] + "",
          o = void 0 === t.currency ? "" : t.currency[1] + "",
          a = void 0 === t.decimal ? "." : t.decimal + "",
          u =
            void 0 === t.numerals
              ? bt
              : (function (t) {
                  return function (e) {
                    return e.replace(/[0-9]/g, function (e) {
                      return t[+e];
                    });
                  };
                })(St.call(t.numerals, String)),
          c = void 0 === t.percent ? "%" : t.percent + "",
          l = void 0 === t.minus ? "−" : t.minus + "",
          s = void 0 === t.nan ? "NaN" : t.nan + "";
        function f(t) {
          var e = (t = ht(t)).fill,
            r = t.align,
            f = t.sign,
            p = t.symbol,
            h = t.zero,
            d = t.width,
            y = t.comma,
            v = t.precision,
            m = t.trim,
            g = t.type;
          "n" === g
            ? ((y = !0), (g = "g"))
            : gt[g] || (void 0 === v && (v = 12), (m = !0), (g = "g")),
            (h || ("0" === e && "=" === r)) && ((h = !0), (e = "0"), (r = "="));
          var b =
              "$" === p
                ? i
                : "#" === p && /[boxX]/.test(g)
                ? "0" + g.toLowerCase()
                : "",
            x = "$" === p ? o : /[%p]/.test(g) ? c : "",
            w = gt[g],
            O = /[defgprs%]/.test(g);
          function S(t) {
            var i,
              o,
              c,
              p = b,
              S = x;
            if ("c" === g) (S = w(t) + S), (t = "");
            else {
              var j = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? s : w(Math.abs(t), v)),
                m &&
                  (t = (function (t) {
                    t: for (var e, r = t.length, n = 1, i = -1; n < r; ++n)
                      switch (t[n]) {
                        case ".":
                          i = e = n;
                          break;
                        case "0":
                          0 === i && (i = n), (e = n);
                          break;
                        default:
                          if (!+t[n]) break t;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                  })(t)),
                j && 0 == +t && "+" !== f && (j = !1),
                (p =
                  (j ? ("(" === f ? f : l) : "-" === f || "(" === f ? "" : f) +
                  p),
                (S =
                  ("s" === g ? jt[8 + st / 3] : "") +
                  S +
                  (j && "(" === f ? ")" : "")),
                O)
              )
                for (i = -1, o = t.length; ++i < o; )
                  if (48 > (c = t.charCodeAt(i)) || c > 57) {
                    (S = (46 === c ? a + t.slice(i + 1) : t.slice(i)) + S),
                      (t = t.slice(0, i));
                    break;
                  }
            }
            y && !h && (t = n(t, 1 / 0));
            var _ = p.length + t.length + S.length,
              P = _ < d ? new Array(d - _ + 1).join(e) : "";
            switch (
              (y &&
                h &&
                ((t = n(P + t, P.length ? d - S.length : 1 / 0)), (P = "")),
              r)
            ) {
              case "<":
                t = p + t + S + P;
                break;
              case "=":
                t = p + P + t + S;
                break;
              case "^":
                t = P.slice(0, (_ = P.length >> 1)) + p + t + S + P.slice(_);
                break;
              default:
                t = P + p + t + S;
            }
            return u(t);
          }
          return (
            (v =
              void 0 === v
                ? 6
                : /[gprs]/.test(g)
                ? Math.max(1, Math.min(21, v))
                : Math.max(0, Math.min(20, v))),
            (S.toString = function () {
              return t + "";
            }),
            S
          );
        }
        return {
          format: f,
          formatPrefix: function (t, e) {
            var r = f((((t = ht(t)).type = "f"), t)),
              n = 3 * Math.max(-8, Math.min(8, Math.floor(vt(e) / 3))),
              i = Math.pow(10, -n),
              o = jt[8 + n / 3];
            return function (t) {
              return r(i * t) + o;
            };
          },
        };
      }
      function Pt(t, e, r, n) {
        var i,
          o = D(t, e, r);
        switch ((n = ht(null == n ? ",f" : n)).type) {
          case "s":
            var a = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != n.precision ||
                isNaN(
                  (i = (function (t, e) {
                    return Math.max(
                      0,
                      3 * Math.max(-8, Math.min(8, Math.floor(vt(e) / 3))) -
                        vt(Math.abs(t)),
                    );
                  })(o, a)),
                ) ||
                (n.precision = i),
              Ot(n, a)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != n.precision ||
              isNaN(
                (i = (function (t, e) {
                  return (
                    (t = Math.abs(t)),
                    (e = Math.abs(e) - t),
                    Math.max(0, vt(e) - vt(t)) + 1
                  );
                })(o, Math.max(Math.abs(t), Math.abs(e)))),
              ) ||
              (n.precision = i - ("e" === n.type));
            break;
          case "f":
          case "%":
            null != n.precision ||
              isNaN(
                (i = (function (t) {
                  return Math.max(0, -vt(Math.abs(t)));
                })(o)),
              ) ||
              (n.precision = i - 2 * ("%" === n.type));
        }
        return wt(n);
      }
      function kt(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var r = e();
            return I(r[0], r[r.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, r) {
            var n = e();
            return Pt(n[0], n[n.length - 1], null == t ? 10 : t, r);
          }),
          (t.nice = function (r) {
            null == r && (r = 10);
            var n,
              i,
              o = e(),
              a = 0,
              u = o.length - 1,
              c = o[a],
              l = o[u],
              s = 10;
            for (
              l < c && ((i = c), (c = l), (l = i), (i = a), (a = u), (u = i));
              s-- > 0;

            ) {
              if ((i = N(c, l, r)) === n) return (o[a] = c), (o[u] = l), e(o);
              if (i > 0)
                (c = Math.floor(c / i) * i), (l = Math.ceil(l / i) * i);
              else {
                if (!(i < 0)) break;
                (c = Math.ceil(c * i) / i), (l = Math.floor(l * i) / i);
              }
              n = i;
            }
            return t;
          }),
          t
        );
      }
      function At() {
        var t = lt();
        return (
          (t.copy = function () {
            return ut(t, At());
          }),
          ft.o.apply(t, arguments),
          kt(t)
        );
      }
      function Et(t) {
        var e;
        function r(t) {
          return null == t || isNaN((t = +t)) ? e : t;
        }
        return (
          (r.invert = r),
          (r.domain = r.range =
            function (e) {
              return arguments.length
                ? ((t = Array.from(e, et)), r)
                : t.slice();
            }),
          (r.unknown = function (t) {
            return arguments.length ? ((e = t), r) : e;
          }),
          (r.copy = function () {
            return Et(t).unknown(e);
          }),
          (t = arguments.length ? Array.from(t, et) : [0, 1]),
          kt(r)
        );
      }
      function Mt(t, e) {
        var r,
          n = 0,
          i = (t = t.slice()).length - 1,
          o = t[n],
          a = t[i];
        return (
          a < o && ((r = n), (n = i), (i = r), (r = o), (o = a), (a = r)),
          (t[n] = e.floor(o)),
          (t[i] = e.ceil(a)),
          t
        );
      }
      function Tt(t) {
        return Math.log(t);
      }
      function Ct(t) {
        return Math.exp(t);
      }
      function It(t) {
        return -Math.log(-t);
      }
      function Nt(t) {
        return -Math.exp(-t);
      }
      function Dt(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function Rt(t) {
        return (e, r) => -t(-e, r);
      }
      function Lt(t) {
        const e = t(Tt, Ct),
          r = e.domain;
        let n,
          i,
          o = 10;
        function a() {
          return (
            (n = (function (t) {
              return t === Math.E
                ? Math.log
                : (10 === t && Math.log10) ||
                    (2 === t && Math.log2) ||
                    ((t = Math.log(t)), (e) => Math.log(e) / t);
            })(o)),
            (i = (function (t) {
              return 10 === t
                ? Dt
                : t === Math.E
                ? Math.exp
                : (e) => Math.pow(t, e);
            })(o)),
            r()[0] < 0 ? ((n = Rt(n)), (i = Rt(i)), t(It, Nt)) : t(Tt, Ct),
            e
          );
        }
        return (
          (e.base = function (t) {
            return arguments.length ? ((o = +t), a()) : o;
          }),
          (e.domain = function (t) {
            return arguments.length ? (r(t), a()) : r();
          }),
          (e.ticks = (t) => {
            const e = r();
            let a = e[0],
              u = e[e.length - 1];
            const c = u < a;
            c && ([a, u] = [u, a]);
            let l,
              s,
              f = n(a),
              p = n(u);
            const h = null == t ? 10 : +t;
            let d = [];
            if (!(o % 1) && p - f < h) {
              if (((f = Math.floor(f)), (p = Math.ceil(p)), a > 0)) {
                for (; f <= p; ++f)
                  for (l = 1; l < o; ++l)
                    if (((s = f < 0 ? l / i(-f) : l * i(f)), !(s < a))) {
                      if (s > u) break;
                      d.push(s);
                    }
              } else
                for (; f <= p; ++f)
                  for (l = o - 1; l >= 1; --l)
                    if (((s = f > 0 ? l / i(-f) : l * i(f)), !(s < a))) {
                      if (s > u) break;
                      d.push(s);
                    }
              2 * d.length < h && (d = I(a, u, h));
            } else d = I(f, p, Math.min(p - f, h)).map(i);
            return c ? d.reverse() : d;
          }),
          (e.tickFormat = (t, r) => {
            if (
              (null == t && (t = 10),
              null == r && (r = 10 === o ? "s" : ","),
              "function" != typeof r &&
                (o % 1 || null != (r = ht(r)).precision || (r.trim = !0),
                (r = wt(r))),
              t === 1 / 0)
            )
              return r;
            const a = Math.max(1, (o * t) / e.ticks().length);
            return (t) => {
              let e = t / i(Math.round(n(t)));
              return e * o < o - 0.5 && (e *= o), e <= a ? r(t) : "";
            };
          }),
          (e.nice = () =>
            r(
              Mt(r(), {
                floor: (t) => i(Math.floor(n(t))),
                ceil: (t) => i(Math.ceil(n(t))),
              }),
            )),
          e
        );
      }
      function Bt() {
        const t = Lt(ct()).domain([1, 10]);
        return (
          (t.copy = () => ut(t, Bt()).base(t.base())),
          ft.o.apply(t, arguments),
          t
        );
      }
      function Ft(t) {
        return function (e) {
          return Math.sign(e) * Math.log1p(Math.abs(e / t));
        };
      }
      function $t(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function zt(t) {
        var e = 1,
          r = t(Ft(e), $t(e));
        return (
          (r.constant = function (r) {
            return arguments.length ? t(Ft((e = +r)), $t(e)) : e;
          }),
          kt(r)
        );
      }
      function Ut() {
        var t = zt(ct());
        return (
          (t.copy = function () {
            return ut(t, Ut()).constant(t.constant());
          }),
          ft.o.apply(t, arguments)
        );
      }
      (xt = _t({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (wt = xt.format),
        (Ot = xt.formatPrefix);
      var qt = r(63051);
      function Vt(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function Wt(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function Ht(t) {
        return t < 0 ? -t * t : t * t;
      }
      function Gt(t) {
        var e = t(nt, nt),
          r = 1;
        return (
          (e.exponent = function (e) {
            return arguments.length
              ? 1 === (r = +e)
                ? t(nt, nt)
                : 0.5 === r
                ? t(Wt, Ht)
                : t(Vt(r), Vt(1 / r))
              : r;
          }),
          kt(e)
        );
      }
      function Yt() {
        var t = Gt(ct());
        return (
          (t.copy = function () {
            return ut(t, Yt()).exponent(t.exponent());
          }),
          ft.o.apply(t, arguments),
          t
        );
      }
      function Zt() {
        return Yt.apply(null, arguments).exponent(0.5);
      }
      function Xt(t) {
        return Math.sign(t) * t * t;
      }
      function Kt() {
        var t,
          e = lt(),
          r = [0, 1],
          n = !1;
        function i(r) {
          var i = (function (t) {
            return Math.sign(t) * Math.sqrt(Math.abs(t));
          })(e(r));
          return isNaN(i) ? t : n ? Math.round(i) : i;
        }
        return (
          (i.invert = function (t) {
            return e.invert(Xt(t));
          }),
          (i.domain = function (t) {
            return arguments.length ? (e.domain(t), i) : e.domain();
          }),
          (i.range = function (t) {
            return arguments.length
              ? (e.range((r = Array.from(t, et)).map(Xt)), i)
              : r.slice();
          }),
          (i.rangeRound = function (t) {
            return i.range(t).round(!0);
          }),
          (i.round = function (t) {
            return arguments.length ? ((n = !!t), i) : n;
          }),
          (i.clamp = function (t) {
            return arguments.length ? (e.clamp(t), i) : e.clamp();
          }),
          (i.unknown = function (e) {
            return arguments.length ? ((t = e), i) : t;
          }),
          (i.copy = function () {
            return Kt(e.domain(), r).round(n).clamp(e.clamp()).unknown(t);
          }),
          ft.o.apply(i, arguments),
          kt(i)
        );
      }
      function Jt(t, e) {
        let r;
        if (void 0 === e)
          for (const e of t)
            null != e && (r < e || (void 0 === r && e >= e)) && (r = e);
        else {
          let n = -1;
          for (let i of t)
            null != (i = e(i, ++n, t)) &&
              (r < i || (void 0 === r && i >= i)) &&
              (r = i);
        }
        return r;
      }
      function Qt(t, e) {
        let r;
        if (void 0 === e)
          for (const e of t)
            null != e && (r > e || (void 0 === r && e >= e)) && (r = e);
        else {
          let n = -1;
          for (let i of t)
            null != (i = e(i, ++n, t)) &&
              (r > i || (void 0 === r && i >= i)) &&
              (r = i);
        }
        return r;
      }
      function te(t = R) {
        if (t === R) return ee;
        if ("function" != typeof t)
          throw new TypeError("compare is not a function");
        return (e, r) => {
          const n = t(e, r);
          return n || 0 === n ? n : (0 === t(r, r)) - (0 === t(e, e));
        };
      }
      function ee(t, e) {
        return (
          (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
          (t < e ? -1 : t > e ? 1 : 0)
        );
      }
      function re(t, e, r = 0, n = 1 / 0, i) {
        if (
          ((e = Math.floor(e)),
          (r = Math.floor(Math.max(0, r))),
          (n = Math.floor(Math.min(t.length - 1, n))),
          !(r <= e && e <= n))
        )
          return t;
        for (i = void 0 === i ? ee : te(i); n > r; ) {
          if (n - r > 600) {
            const o = n - r + 1,
              a = e - r + 1,
              u = Math.log(o),
              c = 0.5 * Math.exp((2 * u) / 3),
              l =
                0.5 *
                Math.sqrt((u * c * (o - c)) / o) *
                (a - o / 2 < 0 ? -1 : 1);
            re(
              t,
              e,
              Math.max(r, Math.floor(e - (a * c) / o + l)),
              Math.min(n, Math.floor(e + ((o - a) * c) / o + l)),
              i,
            );
          }
          const o = t[e];
          let a = r,
            u = n;
          for (ne(t, r, e), i(t[n], o) > 0 && ne(t, r, n); a < u; ) {
            for (ne(t, a, u), ++a, --u; i(t[a], o) < 0; ) ++a;
            for (; i(t[u], o) > 0; ) --u;
          }
          0 === i(t[r], o) ? ne(t, r, u) : (++u, ne(t, u, n)),
            u <= e && (r = u + 1),
            e <= u && (n = u - 1);
        }
        return t;
      }
      function ne(t, e, r) {
        const n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function ie(t, e, r) {
        if (
          ((t = Float64Array.from(
            (function* (t, e) {
              if (void 0 === e)
                for (let e of t) null != e && (e = +e) >= e && (yield e);
              else {
                let r = -1;
                for (let n of t)
                  null != (n = e(n, ++r, t)) && (n = +n) >= n && (yield n);
              }
            })(t, r),
          )),
          (n = t.length) && !isNaN((e = +e)))
        ) {
          if (e <= 0 || n < 2) return Qt(t);
          if (e >= 1) return Jt(t);
          var n,
            i = (n - 1) * e,
            o = Math.floor(i),
            a = Jt(re(t, o).subarray(0, o + 1));
          return a + (Qt(t.subarray(o + 1)) - a) * (i - o);
        }
      }
      function oe(t, e, r = $) {
        if ((n = t.length) && !isNaN((e = +e))) {
          if (e <= 0 || n < 2) return +r(t[0], 0, t);
          if (e >= 1) return +r(t[n - 1], n - 1, t);
          var n,
            i = (n - 1) * e,
            o = Math.floor(i),
            a = +r(t[o], o, t);
          return a + (+r(t[o + 1], o + 1, t) - a) * (i - o);
        }
      }
      function ae() {
        var t,
          e = [],
          r = [],
          n = [];
        function i() {
          var t = 0,
            i = Math.max(1, r.length);
          for (n = new Array(i - 1); ++t < i; ) n[t - 1] = oe(e, t / i);
          return o;
        }
        function o(e) {
          return null == e || isNaN((e = +e)) ? t : r[q(n, e)];
        }
        return (
          (o.invertExtent = function (t) {
            var i = r.indexOf(t);
            return i < 0
              ? [NaN, NaN]
              : [
                  i > 0 ? n[i - 1] : e[0],
                  i < n.length ? n[i] : e[e.length - 1],
                ];
          }),
          (o.domain = function (t) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let r of t) null == r || isNaN((r = +r)) || e.push(r);
            return e.sort(R), i();
          }),
          (o.range = function (t) {
            return arguments.length ? ((r = Array.from(t)), i()) : r.slice();
          }),
          (o.unknown = function (e) {
            return arguments.length ? ((t = e), o) : t;
          }),
          (o.quantiles = function () {
            return n.slice();
          }),
          (o.copy = function () {
            return ae().domain(e).range(r).unknown(t);
          }),
          ft.o.apply(o, arguments)
        );
      }
      function ue() {
        var t,
          e = 0,
          r = 1,
          n = 1,
          i = [0.5],
          o = [0, 1];
        function a(e) {
          return null != e && e <= e ? o[q(i, e, 0, n)] : t;
        }
        function u() {
          var t = -1;
          for (i = new Array(n); ++t < n; )
            i[t] = ((t + 1) * r - (t - n) * e) / (n + 1);
          return a;
        }
        return (
          (a.domain = function (t) {
            return arguments.length
              ? (([e, r] = t), (e = +e), (r = +r), u())
              : [e, r];
          }),
          (a.range = function (t) {
            return arguments.length
              ? ((n = (o = Array.from(t)).length - 1), u())
              : o.slice();
          }),
          (a.invertExtent = function (t) {
            var a = o.indexOf(t);
            return a < 0
              ? [NaN, NaN]
              : a < 1
              ? [e, i[0]]
              : a >= n
              ? [i[n - 1], r]
              : [i[a - 1], i[a]];
          }),
          (a.unknown = function (e) {
            return arguments.length ? ((t = e), a) : a;
          }),
          (a.thresholds = function () {
            return i.slice();
          }),
          (a.copy = function () {
            return ue().domain([e, r]).range(o).unknown(t);
          }),
          ft.o.apply(kt(a), arguments)
        );
      }
      function ce() {
        var t,
          e = [0.5],
          r = [0, 1],
          n = 1;
        function i(i) {
          return null != i && i <= i ? r[q(e, i, 0, n)] : t;
        }
        return (
          (i.domain = function (t) {
            return arguments.length
              ? ((e = Array.from(t)), (n = Math.min(e.length, r.length - 1)), i)
              : e.slice();
          }),
          (i.range = function (t) {
            return arguments.length
              ? ((r = Array.from(t)), (n = Math.min(e.length, r.length - 1)), i)
              : r.slice();
          }),
          (i.invertExtent = function (t) {
            var n = r.indexOf(t);
            return [e[n - 1], e[n]];
          }),
          (i.unknown = function (e) {
            return arguments.length ? ((t = e), i) : t;
          }),
          (i.copy = function () {
            return ce().domain(e).range(r).unknown(t);
          }),
          ft.o.apply(i, arguments)
        );
      }
      const le = 1e3,
        se = 6e4,
        fe = 36e5,
        pe = 864e5,
        he = 6048e5,
        de = 2592e6,
        ye = 31536e6,
        ve = new Date(),
        me = new Date();
      function ge(t, e, r, n) {
        function i(e) {
          return t((e = 0 === arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (i.floor = (e) => (t((e = new Date(+e))), e)),
          (i.ceil = (r) => (t((r = new Date(r - 1))), e(r, 1), t(r), r)),
          (i.round = (t) => {
            const e = i(t),
              r = i.ceil(t);
            return t - e < r - t ? e : r;
          }),
          (i.offset = (t, r) => (
            e((t = new Date(+t)), null == r ? 1 : Math.floor(r)), t
          )),
          (i.range = (r, n, o) => {
            const a = [];
            if (
              ((r = i.ceil(r)),
              (o = null == o ? 1 : Math.floor(o)),
              !(r < n && o > 0))
            )
              return a;
            let u;
            do {
              a.push((u = new Date(+r))), e(r, o), t(r);
            } while (u < r && r < n);
            return a;
          }),
          (i.filter = (r) =>
            ge(
              (e) => {
                if (e >= e) for (; t(e), !r(e); ) e.setTime(e - 1);
              },
              (t, n) => {
                if (t >= t)
                  if (n < 0) for (; ++n <= 0; ) for (; e(t, -1), !r(t); );
                  else for (; --n >= 0; ) for (; e(t, 1), !r(t); );
              },
            )),
          r &&
            ((i.count = (e, n) => (
              ve.setTime(+e),
              me.setTime(+n),
              t(ve),
              t(me),
              Math.floor(r(ve, me))
            )),
            (i.every = (t) => (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? i.filter(
                      n ? (e) => n(e) % t == 0 : (e) => i.count(0, e) % t == 0,
                    )
                  : i
                : null
            ))),
          i
        );
      }
      const be = ge(
        () => {},
        (t, e) => {
          t.setTime(+t + e);
        },
        (t, e) => e - t,
      );
      be.every = (t) => (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? ge(
                (e) => {
                  e.setTime(Math.floor(e / t) * t);
                },
                (e, r) => {
                  e.setTime(+e + r * t);
                },
                (e, r) => (r - e) / t,
              )
            : be
          : null
      );
      be.range;
      const xe = ge(
          (t) => {
            t.setTime(t - t.getMilliseconds());
          },
          (t, e) => {
            t.setTime(+t + e * le);
          },
          (t, e) => (e - t) / le,
          (t) => t.getUTCSeconds(),
        ),
        we =
          (xe.range,
          ge(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * le);
            },
            (t, e) => {
              t.setTime(+t + e * se);
            },
            (t, e) => (e - t) / se,
            (t) => t.getMinutes(),
          )),
        Oe =
          (we.range,
          ge(
            (t) => {
              t.setUTCSeconds(0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * se);
            },
            (t, e) => (e - t) / se,
            (t) => t.getUTCMinutes(),
          )),
        Se =
          (Oe.range,
          ge(
            (t) => {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  t.getSeconds() * le -
                  t.getMinutes() * se,
              );
            },
            (t, e) => {
              t.setTime(+t + e * fe);
            },
            (t, e) => (e - t) / fe,
            (t) => t.getHours(),
          )),
        je =
          (Se.range,
          ge(
            (t) => {
              t.setUTCMinutes(0, 0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * fe);
            },
            (t, e) => (e - t) / fe,
            (t) => t.getUTCHours(),
          )),
        _e =
          (je.range,
          ge(
            (t) => t.setHours(0, 0, 0, 0),
            (t, e) => t.setDate(t.getDate() + e),
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * se) /
              pe,
            (t) => t.getDate() - 1,
          )),
        Pe =
          (_e.range,
          ge(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / pe,
            (t) => t.getUTCDate() - 1,
          )),
        ke =
          (Pe.range,
          ge(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / pe,
            (t) => Math.floor(t / pe),
          ));
      ke.range;
      function Ae(t) {
        return ge(
          (e) => {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
              e.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setDate(t.getDate() + 7 * e);
          },
          (t, e) =>
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * se) / he,
        );
      }
      const Ee = Ae(0),
        Me = Ae(1),
        Te = Ae(2),
        Ce = Ae(3),
        Ie = Ae(4),
        Ne = Ae(5),
        De = Ae(6);
      Ee.range, Me.range, Te.range, Ce.range, Ie.range, Ne.range, De.range;
      function Re(t) {
        return ge(
          (e) => {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
              e.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          (t, e) => (e - t) / he,
        );
      }
      const Le = Re(0),
        Be = Re(1),
        Fe = Re(2),
        $e = Re(3),
        ze = Re(4),
        Ue = Re(5),
        qe = Re(6),
        Ve =
          (Le.range,
          Be.range,
          Fe.range,
          $e.range,
          ze.range,
          Ue.range,
          qe.range,
          ge(
            (t) => {
              t.setDate(1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setMonth(t.getMonth() + e);
            },
            (t, e) =>
              e.getMonth() -
              t.getMonth() +
              12 * (e.getFullYear() - t.getFullYear()),
            (t) => t.getMonth(),
          )),
        We =
          (Ve.range,
          ge(
            (t) => {
              t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCMonth(t.getUTCMonth() + e);
            },
            (t, e) =>
              e.getUTCMonth() -
              t.getUTCMonth() +
              12 * (e.getUTCFullYear() - t.getUTCFullYear()),
            (t) => t.getUTCMonth(),
          )),
        He =
          (We.range,
          ge(
            (t) => {
              t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setFullYear(t.getFullYear() + e);
            },
            (t, e) => e.getFullYear() - t.getFullYear(),
            (t) => t.getFullYear(),
          ));
      He.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? ge(
              (e) => {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                  e.setMonth(0, 1),
                  e.setHours(0, 0, 0, 0);
              },
              (e, r) => {
                e.setFullYear(e.getFullYear() + r * t);
              },
            )
          : null;
      He.range;
      const Ge = ge(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear(),
      );
      Ge.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? ge(
              (e) => {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                  e.setUTCMonth(0, 1),
                  e.setUTCHours(0, 0, 0, 0);
              },
              (e, r) => {
                e.setUTCFullYear(e.getUTCFullYear() + r * t);
              },
            )
          : null;
      Ge.range;
      function Ye(t, e, r, n, i, o) {
        const a = [
          [xe, 1, le],
          [xe, 5, 5e3],
          [xe, 15, 15e3],
          [xe, 30, 3e4],
          [o, 1, se],
          [o, 5, 3e5],
          [o, 15, 9e5],
          [o, 30, 18e5],
          [i, 1, fe],
          [i, 3, 108e5],
          [i, 6, 216e5],
          [i, 12, 432e5],
          [n, 1, pe],
          [n, 2, 1728e5],
          [r, 1, he],
          [e, 1, de],
          [e, 3, 7776e6],
          [t, 1, ye],
        ];
        function u(e, r, n) {
          const i = Math.abs(r - e) / n,
            o = B(([, , t]) => t).right(a, i);
          if (o === a.length) return t.every(D(e / ye, r / ye, n));
          if (0 === o) return be.every(Math.max(D(e, r, n), 1));
          const [u, c] = a[i / a[o - 1][2] < a[o][2] / i ? o - 1 : o];
          return u.every(c);
        }
        return [
          function (t, e, r) {
            const n = e < t;
            n && ([t, e] = [e, t]);
            const i = r && "function" == typeof r.range ? r : u(t, e, r),
              o = i ? i.range(t, +e + 1) : [];
            return n ? o.reverse() : o;
          },
          u,
        ];
      }
      const [Ze, Xe] = Ye(Ge, We, Le, ke, je, Oe),
        [Ke, Je] = Ye(He, Ve, Ee, _e, Se, we);
      function Qe(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function tr(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function er(t, e, r) {
        return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
      }
      var rr,
        nr,
        ir,
        or = { "-": "", _: " ", 0: "0" },
        ar = /^\s*\d+/,
        ur = /^%/,
        cr = /[\\^$*+?|[\]().{}]/g;
      function lr(t, e, r) {
        var n = t < 0 ? "-" : "",
          i = (n ? -t : t) + "",
          o = i.length;
        return n + (o < r ? new Array(r - o + 1).join(e) + i : i);
      }
      function sr(t) {
        return t.replace(cr, "\\$&");
      }
      function fr(t) {
        return new RegExp("^(?:" + t.map(sr).join("|") + ")", "i");
      }
      function pr(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function hr(t, e, r) {
        var n = ar.exec(e.slice(r, r + 1));
        return n ? ((t.w = +n[0]), r + n[0].length) : -1;
      }
      function dr(t, e, r) {
        var n = ar.exec(e.slice(r, r + 1));
        return n ? ((t.u = +n[0]), r + n[0].length) : -1;
      }
      function yr(t, e, r) {
        var n = ar.exec(e.slice(r, r + 2));
        return n ? ((t.U = +n[0]), r + n[0].length) : -1;
      }
      function vr(t, e, r) {
        var n = ar.exec(e.slice(r, r + 2));
        return n ? ((t.V = +n[0]), r + n[0].length) : -1;
      }
      function mr(t, e, r) {
        var n = ar.exec(e.slice(r, r + 2));
        return n ? ((t.W = +n[0]), r + n[0].length) : -1;
      }
      function gr(t, e, r) {
        var n = ar.exec(e.slice(r, r + 4));
        return n ? ((t.y = +n[0]), r + n[0].length) : -1;
      }
      function br(t, e, r) {
        var n = ar.exec(e.slice(r, r + 2));
        return n
          ? ((t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
          : -1;
      }
      function xr(t, e, r) {
        var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
        return n
          ? ((t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
          : -1;
      }
      function wr(t, e, r) {
        var n = ar.exec(e.slice(r, r + 1));
        return n ? ((t.q = 3 * n[0] - 3), r + n[0].length) : -1;
      }
      function Or(t, e, r) {
        var n = ar.exec(e.slice(r, r + 2));
        return n ? ((t.m = n[0] - 1), r + n[0].length) : -1;
      }
      function Sr(t, e, r) {
        var n = ar.exec(e.slice(r, r + 2));
        return n ? ((t.d = +n[0]), r + n[0].length) : -1;
      }
      function jr(t, e, r) {
        var n = ar.exec(e.slice(r, r + 3));
        return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1;
      }
      function _r(t, e, r) {
        var n = ar.exec(e.slice(r, r + 2));
        return n ? ((t.H = +n[0]), r + n[0].length) : -1;
      }
      function Pr(t, e, r) {
        var n = ar.exec(e.slice(r, r + 2));
        return n ? ((t.M = +n[0]), r + n[0].length) : -1;
      }
      function kr(t, e, r) {
        var n = ar.exec(e.slice(r, r + 2));
        return n ? ((t.S = +n[0]), r + n[0].length) : -1;
      }
      function Ar(t, e, r) {
        var n = ar.exec(e.slice(r, r + 3));
        return n ? ((t.L = +n[0]), r + n[0].length) : -1;
      }
      function Er(t, e, r) {
        var n = ar.exec(e.slice(r, r + 6));
        return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
      }
      function Mr(t, e, r) {
        var n = ur.exec(e.slice(r, r + 1));
        return n ? r + n[0].length : -1;
      }
      function Tr(t, e, r) {
        var n = ar.exec(e.slice(r));
        return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
      }
      function Cr(t, e, r) {
        var n = ar.exec(e.slice(r));
        return n ? ((t.s = +n[0]), r + n[0].length) : -1;
      }
      function Ir(t, e) {
        return lr(t.getDate(), e, 2);
      }
      function Nr(t, e) {
        return lr(t.getHours(), e, 2);
      }
      function Dr(t, e) {
        return lr(t.getHours() % 12 || 12, e, 2);
      }
      function Rr(t, e) {
        return lr(1 + _e.count(He(t), t), e, 3);
      }
      function Lr(t, e) {
        return lr(t.getMilliseconds(), e, 3);
      }
      function Br(t, e) {
        return Lr(t, e) + "000";
      }
      function Fr(t, e) {
        return lr(t.getMonth() + 1, e, 2);
      }
      function $r(t, e) {
        return lr(t.getMinutes(), e, 2);
      }
      function zr(t, e) {
        return lr(t.getSeconds(), e, 2);
      }
      function Ur(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function qr(t, e) {
        return lr(Ee.count(He(t) - 1, t), e, 2);
      }
      function Vr(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? Ie(t) : Ie.ceil(t);
      }
      function Wr(t, e) {
        return (
          (t = Vr(t)), lr(Ie.count(He(t), t) + (4 === He(t).getDay()), e, 2)
        );
      }
      function Hr(t) {
        return t.getDay();
      }
      function Gr(t, e) {
        return lr(Me.count(He(t) - 1, t), e, 2);
      }
      function Yr(t, e) {
        return lr(t.getFullYear() % 100, e, 2);
      }
      function Zr(t, e) {
        return lr((t = Vr(t)).getFullYear() % 100, e, 2);
      }
      function Xr(t, e) {
        return lr(t.getFullYear() % 1e4, e, 4);
      }
      function Kr(t, e) {
        var r = t.getDay();
        return lr(
          (t = r >= 4 || 0 === r ? Ie(t) : Ie.ceil(t)).getFullYear() % 1e4,
          e,
          4,
        );
      }
      function Jr(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          lr((e / 60) | 0, "0", 2) +
          lr(e % 60, "0", 2)
        );
      }
      function Qr(t, e) {
        return lr(t.getUTCDate(), e, 2);
      }
      function tn(t, e) {
        return lr(t.getUTCHours(), e, 2);
      }
      function en(t, e) {
        return lr(t.getUTCHours() % 12 || 12, e, 2);
      }
      function rn(t, e) {
        return lr(1 + Pe.count(Ge(t), t), e, 3);
      }
      function nn(t, e) {
        return lr(t.getUTCMilliseconds(), e, 3);
      }
      function on(t, e) {
        return nn(t, e) + "000";
      }
      function an(t, e) {
        return lr(t.getUTCMonth() + 1, e, 2);
      }
      function un(t, e) {
        return lr(t.getUTCMinutes(), e, 2);
      }
      function cn(t, e) {
        return lr(t.getUTCSeconds(), e, 2);
      }
      function ln(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function sn(t, e) {
        return lr(Le.count(Ge(t) - 1, t), e, 2);
      }
      function fn(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? ze(t) : ze.ceil(t);
      }
      function pn(t, e) {
        return (
          (t = fn(t)), lr(ze.count(Ge(t), t) + (4 === Ge(t).getUTCDay()), e, 2)
        );
      }
      function hn(t) {
        return t.getUTCDay();
      }
      function dn(t, e) {
        return lr(Be.count(Ge(t) - 1, t), e, 2);
      }
      function yn(t, e) {
        return lr(t.getUTCFullYear() % 100, e, 2);
      }
      function vn(t, e) {
        return lr((t = fn(t)).getUTCFullYear() % 100, e, 2);
      }
      function mn(t, e) {
        return lr(t.getUTCFullYear() % 1e4, e, 4);
      }
      function gn(t, e) {
        var r = t.getUTCDay();
        return lr(
          (t = r >= 4 || 0 === r ? ze(t) : ze.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4,
        );
      }
      function bn() {
        return "+0000";
      }
      function xn() {
        return "%";
      }
      function wn(t) {
        return +t;
      }
      function On(t) {
        return Math.floor(+t / 1e3);
      }
      function Sn(t) {
        return new Date(t);
      }
      function jn(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function _n(t, e, r, n, i, o, a, u, c, l) {
        var s = lt(),
          f = s.invert,
          p = s.domain,
          h = l(".%L"),
          d = l(":%S"),
          y = l("%I:%M"),
          v = l("%I %p"),
          m = l("%a %d"),
          g = l("%b %d"),
          b = l("%B"),
          x = l("%Y");
        function w(t) {
          return (
            c(t) < t
              ? h
              : u(t) < t
              ? d
              : a(t) < t
              ? y
              : o(t) < t
              ? v
              : n(t) < t
              ? i(t) < t
                ? m
                : g
              : r(t) < t
              ? b
              : x
          )(t);
        }
        return (
          (s.invert = function (t) {
            return new Date(f(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? p(Array.from(t, jn)) : p().map(Sn);
          }),
          (s.ticks = function (e) {
            var r = p();
            return t(r[0], r[r.length - 1], null == e ? 10 : e);
          }),
          (s.tickFormat = function (t, e) {
            return null == e ? w : l(e);
          }),
          (s.nice = function (t) {
            var r = p();
            return (
              (t && "function" == typeof t.range) ||
                (t = e(r[0], r[r.length - 1], null == t ? 10 : t)),
              t ? p(Mt(r, t)) : s
            );
          }),
          (s.copy = function () {
            return ut(s, _n(t, e, r, n, i, o, a, u, c, l));
          }),
          s
        );
      }
      function Pn() {
        return ft.o.apply(
          _n(Ke, Je, He, Ve, Ee, _e, Se, we, xe, nr).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function kn() {
        return ft.o.apply(
          _n(Ze, Xe, Ge, We, Le, Pe, je, Oe, xe, ir).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function An() {
        var t,
          e,
          r,
          n,
          i,
          o = 0,
          a = 1,
          u = nt,
          c = !1;
        function l(e) {
          return null == e || isNaN((e = +e))
            ? i
            : u(
                0 === r
                  ? 0.5
                  : ((e = (n(e) - t) * r), c ? Math.max(0, Math.min(1, e)) : e),
              );
        }
        function s(t) {
          return function (e) {
            var r, n;
            return arguments.length
              ? (([r, n] = e), (u = t(r, n)), l)
              : [u(0), u(1)];
          };
        }
        return (
          (l.domain = function (i) {
            return arguments.length
              ? (([o, a] = i),
                (t = n((o = +o))),
                (e = n((a = +a))),
                (r = t === e ? 0 : 1 / (e - t)),
                l)
              : [o, a];
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((c = !!t), l) : c;
          }),
          (l.interpolator = function (t) {
            return arguments.length ? ((u = t), l) : u;
          }),
          (l.range = s(Q)),
          (l.rangeRound = s(tt)),
          (l.unknown = function (t) {
            return arguments.length ? ((i = t), l) : i;
          }),
          function (i) {
            return (
              (n = i),
              (t = i(o)),
              (e = i(a)),
              (r = t === e ? 0 : 1 / (e - t)),
              l
            );
          }
        );
      }
      function En(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function Mn() {
        var t = kt(An()(nt));
        return (
          (t.copy = function () {
            return En(t, Mn());
          }),
          ft.O.apply(t, arguments)
        );
      }
      function Tn() {
        var t = Lt(An()).domain([1, 10]);
        return (
          (t.copy = function () {
            return En(t, Tn()).base(t.base());
          }),
          ft.O.apply(t, arguments)
        );
      }
      function Cn() {
        var t = zt(An());
        return (
          (t.copy = function () {
            return En(t, Cn()).constant(t.constant());
          }),
          ft.O.apply(t, arguments)
        );
      }
      function In() {
        var t = Gt(An());
        return (
          (t.copy = function () {
            return En(t, In()).exponent(t.exponent());
          }),
          ft.O.apply(t, arguments)
        );
      }
      function Nn() {
        return In.apply(null, arguments).exponent(0.5);
      }
      function Dn() {
        var t = [],
          e = nt;
        function r(r) {
          if (null != r && !isNaN((r = +r)))
            return e((q(t, r, 1) - 1) / (t.length - 1));
        }
        return (
          (r.domain = function (e) {
            if (!arguments.length) return t.slice();
            t = [];
            for (let r of e) null == r || isNaN((r = +r)) || t.push(r);
            return t.sort(R), r;
          }),
          (r.interpolator = function (t) {
            return arguments.length ? ((e = t), r) : e;
          }),
          (r.range = function () {
            return t.map((r, n) => e(n / (t.length - 1)));
          }),
          (r.quantiles = function (e) {
            return Array.from({ length: e + 1 }, (r, n) => ie(t, n / e));
          }),
          (r.copy = function () {
            return Dn(e).domain(t);
          }),
          ft.O.apply(r, arguments)
        );
      }
      function Rn() {
        var t,
          e,
          r,
          n,
          i,
          o,
          a,
          u = 0,
          c = 0.5,
          l = 1,
          s = 1,
          f = nt,
          p = !1;
        function h(t) {
          return isNaN((t = +t))
            ? a
            : ((t = 0.5 + ((t = +o(t)) - e) * (s * t < s * e ? n : i)),
              f(p ? Math.max(0, Math.min(1, t)) : t));
        }
        function d(t) {
          return function (e) {
            var r, n, i;
            return arguments.length
              ? (([r, n, i] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = Q));
                  for (
                    var r = 0,
                      n = e.length - 1,
                      i = e[0],
                      o = new Array(n < 0 ? 0 : n);
                    r < n;

                  )
                    o[r] = t(i, (i = e[++r]));
                  return function (t) {
                    var e = Math.max(0, Math.min(n - 1, Math.floor((t *= n))));
                    return o[e](t - e);
                  };
                })(t, [r, n, i])),
                h)
              : [f(0), f(0.5), f(1)];
          };
        }
        return (
          (h.domain = function (a) {
            return arguments.length
              ? (([u, c, l] = a),
                (t = o((u = +u))),
                (e = o((c = +c))),
                (r = o((l = +l))),
                (n = t === e ? 0 : 0.5 / (e - t)),
                (i = e === r ? 0 : 0.5 / (r - e)),
                (s = e < t ? -1 : 1),
                h)
              : [u, c, l];
          }),
          (h.clamp = function (t) {
            return arguments.length ? ((p = !!t), h) : p;
          }),
          (h.interpolator = function (t) {
            return arguments.length ? ((f = t), h) : f;
          }),
          (h.range = d(Q)),
          (h.rangeRound = d(tt)),
          (h.unknown = function (t) {
            return arguments.length ? ((a = t), h) : a;
          }),
          function (a) {
            return (
              (o = a),
              (t = a(u)),
              (e = a(c)),
              (r = a(l)),
              (n = t === e ? 0 : 0.5 / (e - t)),
              (i = e === r ? 0 : 0.5 / (r - e)),
              (s = e < t ? -1 : 1),
              h
            );
          }
        );
      }
      function Ln() {
        var t = kt(Rn()(nt));
        return (
          (t.copy = function () {
            return En(t, Ln());
          }),
          ft.O.apply(t, arguments)
        );
      }
      function Bn() {
        var t = Lt(Rn()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return En(t, Bn()).base(t.base());
          }),
          ft.O.apply(t, arguments)
        );
      }
      function Fn() {
        var t = zt(Rn());
        return (
          (t.copy = function () {
            return En(t, Fn()).constant(t.constant());
          }),
          ft.O.apply(t, arguments)
        );
      }
      function $n() {
        var t = Gt(Rn());
        return (
          (t.copy = function () {
            return En(t, $n()).exponent(t.exponent());
          }),
          ft.O.apply(t, arguments)
        );
      }
      function zn() {
        return $n.apply(null, arguments).exponent(0.5);
      }
      function Un(t, e) {
        if ((i = t.length) > 1)
          for (var r, n, i, o = 1, a = t[e[0]], u = a.length; o < i; ++o)
            for (n = a, a = t[e[o]], r = 0; r < u; ++r)
              a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
      }
      !(function (t) {
        (rr = (function (t) {
          var e = t.dateTime,
            r = t.date,
            n = t.time,
            i = t.periods,
            o = t.days,
            a = t.shortDays,
            u = t.months,
            c = t.shortMonths,
            l = fr(i),
            s = pr(i),
            f = fr(o),
            p = pr(o),
            h = fr(a),
            d = pr(a),
            y = fr(u),
            v = pr(u),
            m = fr(c),
            g = pr(c),
            b = {
              a: function (t) {
                return a[t.getDay()];
              },
              A: function (t) {
                return o[t.getDay()];
              },
              b: function (t) {
                return c[t.getMonth()];
              },
              B: function (t) {
                return u[t.getMonth()];
              },
              c: null,
              d: Ir,
              e: Ir,
              f: Br,
              g: Zr,
              G: Kr,
              H: Nr,
              I: Dr,
              j: Rr,
              L: Lr,
              m: Fr,
              M: $r,
              p: function (t) {
                return i[+(t.getHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getMonth() / 3);
              },
              Q: wn,
              s: On,
              S: zr,
              u: Ur,
              U: qr,
              V: Wr,
              w: Hr,
              W: Gr,
              x: null,
              X: null,
              y: Yr,
              Y: Xr,
              Z: Jr,
              "%": xn,
            },
            x = {
              a: function (t) {
                return a[t.getUTCDay()];
              },
              A: function (t) {
                return o[t.getUTCDay()];
              },
              b: function (t) {
                return c[t.getUTCMonth()];
              },
              B: function (t) {
                return u[t.getUTCMonth()];
              },
              c: null,
              d: Qr,
              e: Qr,
              f: on,
              g: vn,
              G: gn,
              H: tn,
              I: en,
              j: rn,
              L: nn,
              m: an,
              M: un,
              p: function (t) {
                return i[+(t.getUTCHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getUTCMonth() / 3);
              },
              Q: wn,
              s: On,
              S: cn,
              u: ln,
              U: sn,
              V: pn,
              w: hn,
              W: dn,
              x: null,
              X: null,
              y: yn,
              Y: mn,
              Z: bn,
              "%": xn,
            },
            w = {
              a: function (t, e, r) {
                var n = h.exec(e.slice(r));
                return n
                  ? ((t.w = d.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              A: function (t, e, r) {
                var n = f.exec(e.slice(r));
                return n
                  ? ((t.w = p.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              b: function (t, e, r) {
                var n = m.exec(e.slice(r));
                return n
                  ? ((t.m = g.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              B: function (t, e, r) {
                var n = y.exec(e.slice(r));
                return n
                  ? ((t.m = v.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              c: function (t, r, n) {
                return j(t, e, r, n);
              },
              d: Sr,
              e: Sr,
              f: Er,
              g: br,
              G: gr,
              H: _r,
              I: _r,
              j: jr,
              L: Ar,
              m: Or,
              M: Pr,
              p: function (t, e, r) {
                var n = l.exec(e.slice(r));
                return n
                  ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              q: wr,
              Q: Tr,
              s: Cr,
              S: kr,
              u: dr,
              U: yr,
              V: vr,
              w: hr,
              W: mr,
              x: function (t, e, n) {
                return j(t, r, e, n);
              },
              X: function (t, e, r) {
                return j(t, n, e, r);
              },
              y: br,
              Y: gr,
              Z: xr,
              "%": Mr,
            };
          function O(t, e) {
            return function (r) {
              var n,
                i,
                o,
                a = [],
                u = -1,
                c = 0,
                l = t.length;
              for (r instanceof Date || (r = new Date(+r)); ++u < l; )
                37 === t.charCodeAt(u) &&
                  (a.push(t.slice(c, u)),
                  null != (i = or[(n = t.charAt(++u))])
                    ? (n = t.charAt(++u))
                    : (i = "e" === n ? " " : "0"),
                  (o = e[n]) && (n = o(r, i)),
                  a.push(n),
                  (c = u + 1));
              return a.push(t.slice(c, u)), a.join("");
            };
          }
          function S(t, e) {
            return function (r) {
              var n,
                i,
                o = er(1900, void 0, 1);
              if (j(o, t, (r += ""), 0) != r.length) return null;
              if ("Q" in o) return new Date(o.Q);
              if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
              if (
                (e && !("Z" in o) && (o.Z = 0),
                "p" in o && (o.H = (o.H % 12) + 12 * o.p),
                void 0 === o.m && (o.m = "q" in o ? o.q : 0),
                "V" in o)
              ) {
                if (o.V < 1 || o.V > 53) return null;
                "w" in o || (o.w = 1),
                  "Z" in o
                    ? ((i = (n = tr(er(o.y, 0, 1))).getUTCDay()),
                      (n = i > 4 || 0 === i ? Be.ceil(n) : Be(n)),
                      (n = Pe.offset(n, 7 * (o.V - 1))),
                      (o.y = n.getUTCFullYear()),
                      (o.m = n.getUTCMonth()),
                      (o.d = n.getUTCDate() + ((o.w + 6) % 7)))
                    : ((i = (n = Qe(er(o.y, 0, 1))).getDay()),
                      (n = i > 4 || 0 === i ? Me.ceil(n) : Me(n)),
                      (n = _e.offset(n, 7 * (o.V - 1))),
                      (o.y = n.getFullYear()),
                      (o.m = n.getMonth()),
                      (o.d = n.getDate() + ((o.w + 6) % 7)));
              } else
                ("W" in o || "U" in o) &&
                  ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0),
                  (i =
                    "Z" in o
                      ? tr(er(o.y, 0, 1)).getUTCDay()
                      : Qe(er(o.y, 0, 1)).getDay()),
                  (o.m = 0),
                  (o.d =
                    "W" in o
                      ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                      : o.w + 7 * o.U - ((i + 6) % 7)));
              return "Z" in o
                ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), tr(o))
                : Qe(o);
            };
          }
          function j(t, e, r, n) {
            for (var i, o, a = 0, u = e.length, c = r.length; a < u; ) {
              if (n >= c) return -1;
              if (37 === (i = e.charCodeAt(a++))) {
                if (
                  ((i = e.charAt(a++)),
                  !(o = w[i in or ? e.charAt(a++) : i]) || (n = o(t, r, n)) < 0)
                )
                  return -1;
              } else if (i != r.charCodeAt(n++)) return -1;
            }
            return n;
          }
          return (
            (b.x = O(r, b)),
            (b.X = O(n, b)),
            (b.c = O(e, b)),
            (x.x = O(r, x)),
            (x.X = O(n, x)),
            (x.c = O(e, x)),
            {
              format: function (t) {
                var e = O((t += ""), b);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              parse: function (t) {
                var e = S((t += ""), !1);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              utcFormat: function (t) {
                var e = O((t += ""), x);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              utcParse: function (t) {
                var e = S((t += ""), !0);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
            }
          );
        })(t)),
          (nr = rr.format),
          rr.parse,
          (ir = rr.utcFormat),
          rr.utcParse;
      })({
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
      var qn = r(62478),
        Vn = r(24792);
      function Wn(t) {
        for (var e = t.length, r = new Array(e); --e >= 0; ) r[e] = e;
        return r;
      }
      function Hn(t, e) {
        return t[e];
      }
      function Gn(t) {
        const e = [];
        return (e.key = t), e;
      }
      var Yn = r(26058),
        Zn = r.n(Yn);
      function Xn(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Kn(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return Kn(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Kn(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Kn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var Jn = function (t) {
          return t;
        },
        Qn = { "@@functional/placeholder": !0 },
        ti = function (t) {
          return t === Qn;
        },
        ei = function (t) {
          return function e() {
            return 0 === arguments.length ||
              (1 === arguments.length &&
                ti(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t.apply(void 0, arguments);
          };
        },
        ri = function t(e, r) {
          return 1 === e
            ? r
            : ei(function () {
                for (
                  var n = arguments.length, i = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  i[o] = arguments[o];
                var a = i.filter(function (t) {
                  return t !== Qn;
                }).length;
                return a >= e
                  ? r.apply(void 0, i)
                  : t(
                      e - a,
                      ei(function () {
                        for (
                          var t = arguments.length, e = new Array(t), n = 0;
                          n < t;
                          n++
                        )
                          e[n] = arguments[n];
                        var o = i.map(function (t) {
                          return ti(t) ? e.shift() : t;
                        });
                        return r.apply(void 0, Xn(o).concat(e));
                      }),
                    );
              });
        },
        ni = function (t) {
          return ri(t.length, t);
        },
        ii = function (t, e) {
          for (var r = [], n = t; n < e; ++n) r[n - t] = n;
          return r;
        },
        oi = ni(function (t, e) {
          return Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map(function (t) {
                  return e[t];
                })
                .map(t);
        }),
        ai = function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          if (!e.length) return Jn;
          var n = e.reverse(),
            i = n[0],
            o = n.slice(1);
          return function () {
            return o.reduce(
              function (t, e) {
                return e(t);
              },
              i.apply(void 0, arguments),
            );
          };
        },
        ui = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        ci = function (t) {
          var e = null,
            r = null;
          return function () {
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
              i[o] = arguments[o];
            return e &&
              i.every(function (t, r) {
                return t === e[r];
              })
              ? r
              : ((e = i), (r = t.apply(void 0, i)));
          };
        };
      const li = {
        rangeStep: function (t, e, r) {
          for (var n = new (Zn())(t), i = 0, o = []; n.lt(e) && i < 1e5; )
            o.push(n.toNumber()), (n = n.add(r)), i++;
          return o;
        },
        getDigitCount: function (t) {
          return 0 === t
            ? 1
            : Math.floor(new (Zn())(t).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: ni(function (t, e, r) {
          var n = +t;
          return n + r * (+e - n);
        }),
        uninterpolateNumber: ni(function (t, e, r) {
          var n = e - +t;
          return (r - t) / (n = n || 1 / 0);
        }),
        uninterpolateTruncation: ni(function (t, e, r) {
          var n = e - +t;
          return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - t) / n));
        }),
      };
      function si(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return hi(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          pi(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function fi(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, u = t[Symbol.iterator]();
                !(n = (a = u.next()).done) &&
                (r.push(a.value), !e || r.length !== e);
                n = !0
              );
            } catch (t) {
              (i = !0), (o = t);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(t, e) ||
          pi(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function pi(t, e) {
        if (t) {
          if ("string" == typeof t) return hi(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? hi(t, e)
              : void 0
          );
        }
      }
      function hi(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function di(t) {
        var e = fi(t, 2),
          r = e[0],
          n = e[1],
          i = r,
          o = n;
        return r > n && ((i = n), (o = r)), [i, o];
      }
      function yi(t, e, r) {
        if (t.lte(0)) return new (Zn())(0);
        var n = li.getDigitCount(t.toNumber()),
          i = new (Zn())(10).pow(n),
          o = t.div(i),
          a = 1 !== n ? 0.05 : 0.1,
          u = new (Zn())(Math.ceil(o.div(a).toNumber())).add(r).mul(a).mul(i);
        return e ? u : new (Zn())(Math.ceil(u));
      }
      function vi(t, e, r) {
        var n = 1,
          i = new (Zn())(t);
        if (!i.isint() && r) {
          var o = Math.abs(t);
          o < 1
            ? ((n = new (Zn())(10).pow(li.getDigitCount(t) - 1)),
              (i = new (Zn())(Math.floor(i.div(n).toNumber())).mul(n)))
            : o > 1 && (i = new (Zn())(Math.floor(t)));
        } else
          0 === t
            ? (i = new (Zn())(Math.floor((e - 1) / 2)))
            : r || (i = new (Zn())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return ai(
          oi(function (t) {
            return i.add(new (Zn())(t - a).mul(n)).toNumber();
          }),
          ii,
        )(0, e);
      }
      function mi(t, e, r, n) {
        var i =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((e - t) / (r - 1)))
          return {
            step: new (Zn())(0),
            tickMin: new (Zn())(0),
            tickMax: new (Zn())(0),
          };
        var o,
          a = yi(new (Zn())(e).sub(t).div(r - 1), n, i);
        o =
          t <= 0 && e >= 0
            ? new (Zn())(0)
            : (o = new (Zn())(t).add(e).div(2)).sub(new (Zn())(o).mod(a));
        var u = Math.ceil(o.sub(t).div(a).toNumber()),
          c = Math.ceil(new (Zn())(e).sub(o).div(a).toNumber()),
          l = u + c + 1;
        return l > r
          ? mi(t, e, r, n, i + 1)
          : (l < r &&
              ((c = e > 0 ? c + (r - l) : c), (u = e > 0 ? u : u + (r - l))),
            {
              step: a,
              tickMin: o.sub(new (Zn())(u).mul(a)),
              tickMax: o.add(new (Zn())(c).mul(a)),
            });
      }
      var gi = ci(function (t) {
          var e = fi(t, 2),
            r = e[0],
            n = e[1],
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 6,
            o =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = Math.max(i, 2),
            u = fi(di([r, n]), 2),
            c = u[0],
            l = u[1];
          if (c === -1 / 0 || l === 1 / 0) {
            var s =
              l === 1 / 0
                ? [c].concat(
                    si(
                      ii(0, i - 1).map(function () {
                        return 1 / 0;
                      }),
                    ),
                  )
                : [].concat(
                    si(
                      ii(0, i - 1).map(function () {
                        return -1 / 0;
                      }),
                    ),
                    [l],
                  );
            return r > n ? ui(s) : s;
          }
          if (c === l) return vi(c, i, o);
          var f = mi(c, l, a, o),
            p = f.step,
            h = f.tickMin,
            d = f.tickMax,
            y = li.rangeStep(h, d.add(new (Zn())(0.1).mul(p)), p);
          return r > n ? ui(y) : y;
        }),
        bi =
          (ci(function (t) {
            var e = fi(t, 2),
              r = e[0],
              n = e[1],
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 6,
              o =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Math.max(i, 2),
              u = fi(di([r, n]), 2),
              c = u[0],
              l = u[1];
            if (c === -1 / 0 || l === 1 / 0) return [r, n];
            if (c === l) return vi(c, i, o);
            var s = yi(new (Zn())(l).sub(c).div(a - 1), o, 0),
              f = ai(
                oi(function (t) {
                  return new (Zn())(c).add(new (Zn())(t).mul(s)).toNumber();
                }),
                ii,
              )(0, a).filter(function (t) {
                return t >= c && t <= l;
              });
            return r > n ? ui(f) : f;
          }),
          ci(function (t, e) {
            var r = fi(t, 2),
              n = r[0],
              i = r[1],
              o =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = fi(di([n, i]), 2),
              u = a[0],
              c = a[1];
            if (u === -1 / 0 || c === 1 / 0) return [n, i];
            if (u === c) return [u];
            var l = Math.max(e, 2),
              s = yi(new (Zn())(c).sub(u).div(l - 1), o, 0),
              f = [].concat(
                si(
                  li.rangeStep(
                    new (Zn())(u),
                    new (Zn())(c).sub(new (Zn())(0.99).mul(s)),
                    s,
                  ),
                ),
                [c],
              );
            return n > i ? ui(f) : f;
          })),
        xi = r(65370),
        wi = r(98241),
        Oi = r(16171),
        Si = r(9410);
      function ji(t) {
        return (
          (ji =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ji(t)
        );
      }
      function _i(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Pi(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return Pi(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Pi(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Pi(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function ki(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Ai(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ki(Object(r), !0).forEach(function (e) {
                Ei(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ki(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function Ei(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== ji(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== ji(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === ji(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function Mi(t, e, r) {
        return k()(t) || k()(e)
          ? r
          : (0, Oi.P2)(e)
          ? _()(t, e, r)
          : S()(e)
          ? e(t)
          : r;
      }
      function Ti(t, e, r, n) {
        var i = w()(t, function (t) {
          return Mi(t, e);
        });
        if ("number" === r) {
          var o = i.filter(function (t) {
            return (0, Oi.hj)(t) || parseFloat(t);
          });
          return o.length ? [b()(o), m()(o)] : [1 / 0, -1 / 0];
        }
        return (
          n
            ? i.filter(function (t) {
                return !k()(t);
              })
            : i
        ).map(function (t) {
          return (0, Oi.P2)(t) || t instanceof Date ? t : "";
        });
      }
      var Ci = function (t) {
          var e,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = -1,
            a =
              null !== (e = null == r ? void 0 : r.length) && void 0 !== e
                ? e
                : 0;
          if (a <= 1) return 0;
          if (
            i &&
            "angleAxis" === i.axisType &&
            Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6
          )
            for (var u = i.range, c = 0; c < a; c++) {
              var l = c > 0 ? n[c - 1].coordinate : n[a - 1].coordinate,
                s = n[c].coordinate,
                f = c >= a - 1 ? n[0].coordinate : n[c + 1].coordinate,
                p = void 0;
              if ((0, Oi.uY)(s - l) !== (0, Oi.uY)(f - s)) {
                var h = [];
                if ((0, Oi.uY)(f - s) === (0, Oi.uY)(u[1] - u[0])) {
                  p = f;
                  var d = s + u[1] - u[0];
                  (h[0] = Math.min(d, (d + l) / 2)),
                    (h[1] = Math.max(d, (d + l) / 2));
                } else {
                  p = l;
                  var y = f + u[1] - u[0];
                  (h[0] = Math.min(s, (y + s) / 2)),
                    (h[1] = Math.max(s, (y + s) / 2));
                }
                var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
                if ((t > v[0] && t <= v[1]) || (t >= h[0] && t <= h[1])) {
                  o = n[c].index;
                  break;
                }
              } else {
                var m = Math.min(l, f),
                  g = Math.max(l, f);
                if (t > (m + s) / 2 && t <= (g + s) / 2) {
                  o = n[c].index;
                  break;
                }
              }
            }
          else
            for (var b = 0; b < a; b++)
              if (
                (0 === b && t <= (r[b].coordinate + r[b + 1].coordinate) / 2) ||
                (b > 0 &&
                  b < a - 1 &&
                  t > (r[b].coordinate + r[b - 1].coordinate) / 2 &&
                  t <= (r[b].coordinate + r[b + 1].coordinate) / 2) ||
                (b === a - 1 && t > (r[b].coordinate + r[b - 1].coordinate) / 2)
              ) {
                o = r[b].index;
                break;
              }
          return o;
        },
        Ii = function (t) {
          var e,
            r = t.type.displayName,
            n = t.props,
            i = n.stroke,
            o = n.fill;
          switch (r) {
            case "Line":
              e = i;
              break;
            case "Area":
            case "Radar":
              e = i && "none" !== i ? i : o;
              break;
            default:
              e = o;
          }
          return e;
        },
        Ni = function (t) {
          var e,
            r = t.children,
            n = t.formattedGraphicalItems,
            i = t.legendWidth,
            o = t.legendContent,
            a = (0, Si.sP)(r, wi.D);
          return a
            ? ((e =
                a.props && a.props.payload
                  ? a.props && a.props.payload
                  : "children" === o
                  ? (n || []).reduce(function (t, e) {
                      var r = e.item,
                        n = e.props,
                        i = n.sectors || n.data || [];
                      return t.concat(
                        i.map(function (t) {
                          return {
                            type: a.props.iconType || r.props.legendType,
                            value: t.name,
                            color: t.fill,
                            payload: t,
                          };
                        }),
                      );
                    }, [])
                  : (n || []).map(function (t) {
                      var e = t.item,
                        r = e.props,
                        n = r.dataKey,
                        i = r.name,
                        o = r.legendType;
                      return {
                        inactive: r.hide,
                        dataKey: n,
                        type: a.props.iconType || o || "square",
                        color: Ii(e),
                        value: i || n,
                        payload: e.props,
                      };
                    })),
              Ai(
                Ai(Ai({}, a.props), wi.D.getWithHeight(a, i)),
                {},
                { payload: e, item: a },
              ))
            : null;
        },
        Di = function (t) {
          var e = t.barSize,
            r = t.stackGroups,
            n = void 0 === r ? {} : r;
          if (!n) return {};
          for (var i = {}, o = Object.keys(n), a = 0, u = o.length; a < u; a++)
            for (
              var c = n[o[a]].stackGroups,
                l = Object.keys(c),
                s = 0,
                f = l.length;
              s < f;
              s++
            ) {
              var p = c[l[s]],
                h = p.items,
                d = p.cateAxisId,
                y = h.filter(function (t) {
                  return (0, Si.Gf)(t.type).indexOf("Bar") >= 0;
                });
              if (y && y.length) {
                var v = y[0].props.barSize,
                  m = y[0].props[d];
                i[m] || (i[m] = []),
                  i[m].push({
                    item: y[0],
                    stackList: y.slice(1),
                    barSize: k()(v) ? e : v,
                  });
              }
            }
          return i;
        },
        Ri = function (t) {
          var e = t.barGap,
            r = t.barCategoryGap,
            n = t.bandSize,
            i = t.sizeList,
            o = void 0 === i ? [] : i,
            a = t.maxBarSize,
            u = o.length;
          if (u < 1) return null;
          var c,
            l = (0, Oi.h1)(e, n, 0, !0);
          if (o[0].barSize === +o[0].barSize) {
            var s = !1,
              f = n / u,
              p = o.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (p += (u - 1) * l) >= n && ((p -= (u - 1) * l), (l = 0)),
              p >= n && f > 0 && ((s = !0), (p = u * (f *= 0.9)));
            var h = { offset: (((n - p) / 2) >> 0) - l, size: 0 };
            c = o.reduce(function (t, e) {
              var r = [].concat(_i(t), [
                {
                  item: e.item,
                  position: {
                    offset: h.offset + h.size + l,
                    size: s ? f : e.barSize,
                  },
                },
              ]);
              return (
                (h = r[r.length - 1].position),
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    r.push({ item: t, position: h });
                  }),
                r
              );
            }, []);
          } else {
            var d = (0, Oi.h1)(r, n, 0, !0);
            n - 2 * d - (u - 1) * l <= 0 && (l = 0);
            var y = (n - 2 * d - (u - 1) * l) / u;
            y > 1 && (y >>= 0);
            var v = a === +a ? Math.min(y, a) : y;
            c = o.reduce(function (t, e, r) {
              var n = [].concat(_i(t), [
                {
                  item: e.item,
                  position: { offset: d + (y + l) * r + (y - v) / 2, size: v },
                },
              ]);
              return (
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    n.push({ item: t, position: n[n.length - 1].position });
                  }),
                n
              );
            }, []);
          }
          return c;
        },
        Li = function (t, e, r, n) {
          var i = r.children,
            o = r.width,
            a = r.margin,
            u = o - (a.left || 0) - (a.right || 0),
            c = Ni({ children: i, legendWidth: u }),
            l = t;
          if (c) {
            var s = n || {},
              f = c.align,
              p = c.verticalAlign,
              h = c.layout;
            ("vertical" === h || ("horizontal" === h && "middle" === p)) &&
              (0, Oi.hj)(t[f]) &&
              (l = Ai(Ai({}, t), {}, Ei({}, f, l[f] + (s.width || 0)))),
              ("horizontal" === h || ("vertical" === h && "center" === f)) &&
                (0, Oi.hj)(t[p]) &&
                (l = Ai(Ai({}, t), {}, Ei({}, p, l[p] + (s.height || 0))));
          }
          return l;
        },
        Bi = function (t, e, r, n, i) {
          var o = e.props.children,
            a = (0, Si.NN)(o, xi.W).filter(function (t) {
              return (function (t, e, r) {
                return (
                  !!k()(e) ||
                  ("horizontal" === t
                    ? "yAxis" === e
                    : "vertical" === t || "x" === r
                    ? "xAxis" === e
                    : "y" !== r || "yAxis" === e)
                );
              })(n, i, t.props.direction);
            });
          if (a && a.length) {
            var u = a.map(function (t) {
              return t.props.dataKey;
            });
            return t.reduce(
              function (t, e) {
                var n = Mi(e, r, 0),
                  i = y()(n) ? [b()(n), m()(n)] : [n, n],
                  o = u.reduce(
                    function (t, r) {
                      var n = Mi(e, r, 0),
                        o = i[0] - Math.abs(y()(n) ? n[0] : n),
                        a = i[1] + Math.abs(y()(n) ? n[1] : n);
                      return [Math.min(o, t[0]), Math.max(a, t[1])];
                    },
                    [1 / 0, -1 / 0],
                  );
                return [Math.min(o[0], t[0]), Math.max(o[1], t[1])];
              },
              [1 / 0, -1 / 0],
            );
          }
          return null;
        },
        Fi = function (t, e, r, n, i) {
          var o = e
            .map(function (e) {
              return Bi(t, e, r, i, n);
            })
            .filter(function (t) {
              return !k()(t);
            });
          return o && o.length
            ? o.reduce(
                function (t, e) {
                  return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                },
                [1 / 0, -1 / 0],
              )
            : null;
        },
        $i = function (t, e, r, n, i) {
          var o = e.map(function (e) {
            var o = e.props.dataKey;
            return ("number" === r && o && Bi(t, e, o, n)) || Ti(t, o, r, i);
          });
          if ("number" === r)
            return o.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0],
            );
          var a = {};
          return o.reduce(function (t, e) {
            for (var r = 0, n = e.length; r < n; r++)
              a[e[r]] || ((a[e[r]] = !0), t.push(e[r]));
            return t;
          }, []);
        },
        zi = function (t, e) {
          return (
            ("horizontal" === t && "xAxis" === e) ||
            ("vertical" === t && "yAxis" === e) ||
            ("centric" === t && "angleAxis" === e) ||
            ("radial" === t && "radiusAxis" === e)
          );
        },
        Ui = function (t, e, r) {
          var n,
            i,
            o = t.map(function (t) {
              return (
                t.coordinate === e && (n = !0),
                t.coordinate === r && (i = !0),
                t.coordinate
              );
            });
          return n || o.push(e), i || o.push(r), o;
        },
        qi = function (t, e, r) {
          if (!t) return null;
          var n = t.scale,
            i = t.duplicateDomain,
            o = t.type,
            a = t.range,
            u = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
            c =
              (e || r) && "category" === o && n.bandwidth
                ? n.bandwidth() / u
                : 0;
          return (
            (c =
              "angleAxis" === t.axisType ? 2 * (0, Oi.uY)(a[0] - a[1]) * c : c),
            e && (t.ticks || t.niceTicks)
              ? (t.ticks || t.niceTicks).map(function (t) {
                  var e = i ? i.indexOf(t) : t;
                  return { coordinate: n(e) + c, value: t, offset: c };
                })
              : t.isCategorical && t.categoricalDomain
              ? t.categoricalDomain.map(function (t, e) {
                  return {
                    coordinate: n(t) + c,
                    value: t,
                    index: e,
                    offset: c,
                  };
                })
              : n.ticks && !r
              ? n.ticks(t.tickCount).map(function (t) {
                  return { coordinate: n(t) + c, value: t, offset: c };
                })
              : n.domain().map(function (t, e) {
                  return {
                    coordinate: n(t) + c,
                    value: i ? i[t] : t,
                    index: e,
                    offset: c,
                  };
                })
          );
        },
        Vi = function (t, e, r) {
          var n;
          return (
            S()(r) ? (n = r) : S()(e) && (n = e),
            S()(t) || n
              ? function (e, r, i, o) {
                  S()(t) && t(e, r, i, o), S()(n) && n(e, r, i, o);
                }
              : null
          );
        },
        Wi = function (t, e, r) {
          var i = t.scale,
            o = t.type,
            a = t.layout,
            u = t.axisType;
          if ("auto" === i)
            return "radial" === a && "radiusAxis" === u
              ? { scale: A.Z(), realScaleType: "band" }
              : "radial" === a && "angleAxis" === u
              ? { scale: At(), realScaleType: "linear" }
              : "category" === o &&
                e &&
                (e.indexOf("LineChart") >= 0 ||
                  e.indexOf("AreaChart") >= 0 ||
                  (e.indexOf("ComposedChart") >= 0 && !r))
              ? { scale: A.x(), realScaleType: "point" }
              : "category" === o
              ? { scale: A.Z(), realScaleType: "band" }
              : { scale: At(), realScaleType: "linear" };
          if (h()(i)) {
            var c = "scale".concat(f()(i));
            return {
              scale: (n[c] || A.x)(),
              realScaleType: n[c] ? c : "point",
            };
          }
          return S()(i)
            ? { scale: i }
            : { scale: A.x(), realScaleType: "point" };
        },
        Hi = 1e-4,
        Gi = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var r = e.length,
              n = t.range(),
              i = Math.min(n[0], n[1]) - Hi,
              o = Math.max(n[0], n[1]) + Hi,
              a = t(e[0]),
              u = t(e[r - 1]);
            (a < i || a > o || u < i || u > o) && t.domain([e[0], e[r - 1]]);
          }
        },
        Yi = function (t, e) {
          if (!t) return null;
          for (var r = 0, n = t.length; r < n; r++)
            if (t[r].item === e) return t[r].position;
          return null;
        },
        Zi = function (t, e) {
          if (!e || 2 !== e.length || !(0, Oi.hj)(e[0]) || !(0, Oi.hj)(e[1]))
            return t;
          var r = Math.min(e[0], e[1]),
            n = Math.max(e[0], e[1]),
            i = [t[0], t[1]];
          return (
            (!(0, Oi.hj)(t[0]) || t[0] < r) && (i[0] = r),
            (!(0, Oi.hj)(t[1]) || t[1] > n) && (i[1] = n),
            i[0] > n && (i[0] = n),
            i[1] < r && (i[1] = r),
            i
          );
        },
        Xi = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var i = 0, o = 0, a = 0; a < e; ++a) {
                  var u = l()(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                  u >= 0
                    ? ((t[a][r][0] = i), (t[a][r][1] = i + u), (i = t[a][r][1]))
                    : ((t[a][r][0] = o),
                      (t[a][r][1] = o + u),
                      (o = t[a][r][1]));
                }
          },
          expand: function (t, e) {
            if ((n = t.length) > 0) {
              for (var r, n, i, o = 0, a = t[0].length; o < a; ++o) {
                for (i = r = 0; r < n; ++r) i += t[r][o][1] || 0;
                if (i) for (r = 0; r < n; ++r) t[r][o][1] /= i;
              }
              Un(t, e);
            }
          },
          none: Un,
          silhouette: function (t, e) {
            if ((r = t.length) > 0) {
              for (var r, n = 0, i = t[e[0]], o = i.length; n < o; ++n) {
                for (var a = 0, u = 0; a < r; ++a) u += t[a][n][1] || 0;
                i[n][1] += i[n][0] = -u / 2;
              }
              Un(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((i = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
              for (var r, n, i, o = 0, a = 1; a < n; ++a) {
                for (var u = 0, c = 0, l = 0; u < i; ++u) {
                  for (
                    var s = t[e[u]],
                      f = s[a][1] || 0,
                      p = (f - (s[a - 1][1] || 0)) / 2,
                      h = 0;
                    h < u;
                    ++h
                  ) {
                    var d = t[e[h]];
                    p += (d[a][1] || 0) - (d[a - 1][1] || 0);
                  }
                  (c += f), (l += p * f);
                }
                (r[a - 1][1] += r[a - 1][0] = o), c && (o -= l / c);
              }
              (r[a - 1][1] += r[a - 1][0] = o), Un(t, e);
            }
          },
          positive: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var i = 0, o = 0; o < e; ++o) {
                  var a = l()(t[o][r][1]) ? t[o][r][0] : t[o][r][1];
                  a >= 0
                    ? ((t[o][r][0] = i), (t[o][r][1] = i + a), (i = t[o][r][1]))
                    : ((t[o][r][0] = 0), (t[o][r][1] = 0));
                }
          },
        },
        Ki = function (t, e, r) {
          var n = e.map(function (t) {
              return t.props.dataKey;
            }),
            i = (function () {
              var t = (0, Vn.Z)([]),
                e = Wn,
                r = Un,
                n = Hn;
              function i(i) {
                var o,
                  a,
                  u = Array.from(t.apply(this, arguments), Gn),
                  c = u.length,
                  l = -1;
                for (const t of i)
                  for (o = 0, ++l; o < c; ++o)
                    (u[o][l] = [0, +n(t, u[o].key, l, i)]).data = t;
                for (o = 0, a = (0, qn.Z)(e(u)); o < c; ++o) u[a[o]].index = o;
                return r(u, a), u;
              }
              return (
                (i.keys = function (e) {
                  return arguments.length
                    ? ((t =
                        "function" == typeof e ? e : (0, Vn.Z)(Array.from(e))),
                      i)
                    : t;
                }),
                (i.value = function (t) {
                  return arguments.length
                    ? ((n = "function" == typeof t ? t : (0, Vn.Z)(+t)), i)
                    : n;
                }),
                (i.order = function (t) {
                  return arguments.length
                    ? ((e =
                        null == t
                          ? Wn
                          : "function" == typeof t
                          ? t
                          : (0, Vn.Z)(Array.from(t))),
                      i)
                    : e;
                }),
                (i.offset = function (t) {
                  return arguments.length ? ((r = null == t ? Un : t), i) : r;
                }),
                i
              );
            })()
              .keys(n)
              .value(function (t, e) {
                return +Mi(t, e, 0);
              })
              .order(Wn)
              .offset(Xi[r]);
          return i(t);
        },
        Ji = function (t, e, r, n, i, o) {
          if (!t) return null;
          var a = (o ? e.reverse() : e).reduce(function (t, e) {
            var i = e.props,
              o = i.stackId;
            if (i.hide) return t;
            var a = e.props[r],
              u = t[a] || { hasStack: !1, stackGroups: {} };
            if ((0, Oi.P2)(o)) {
              var c = u.stackGroups[o] || {
                numericAxisId: r,
                cateAxisId: n,
                items: [],
              };
              c.items.push(e), (u.hasStack = !0), (u.stackGroups[o] = c);
            } else
              u.stackGroups[(0, Oi.EL)("_stackId_")] = {
                numericAxisId: r,
                cateAxisId: n,
                items: [e],
              };
            return Ai(Ai({}, t), {}, Ei({}, a, u));
          }, {});
          return Object.keys(a).reduce(function (e, o) {
            var u = a[o];
            return (
              u.hasStack &&
                (u.stackGroups = Object.keys(u.stackGroups).reduce(function (
                  e,
                  o,
                ) {
                  var a = u.stackGroups[o];
                  return Ai(
                    Ai({}, e),
                    {},
                    Ei({}, o, {
                      numericAxisId: r,
                      cateAxisId: n,
                      items: a.items,
                      stackedData: Ki(t, a.items, i),
                    }),
                  );
                }, {})),
              Ai(Ai({}, e), {}, Ei({}, o, u))
            );
          }, {});
        },
        Qi = function (t, e) {
          var r = e.realScaleType,
            n = e.type,
            i = e.tickCount,
            o = e.originalDomain,
            a = e.allowDecimals,
            u = r || e.scale;
          if ("auto" !== u && "linear" !== u) return null;
          if (
            i &&
            "number" === n &&
            o &&
            ("auto" === o[0] || "auto" === o[1])
          ) {
            var c = t.domain();
            if (!c.length) return null;
            var l = gi(c, i, a);
            return t.domain([b()(l), m()(l)]), { niceTicks: l };
          }
          if (i && "number" === n) {
            var s = t.domain();
            return { niceTicks: bi(s, i, a) };
          }
          return null;
        },
        to = function (t) {
          var e = t.axis,
            r = t.ticks,
            n = t.bandSize,
            i = t.entry,
            o = t.index,
            a = t.dataKey;
          if ("category" === e.type) {
            if (!e.allowDuplicatedCategory && e.dataKey && !k()(i[e.dataKey])) {
              var u = (0, Oi.Ap)(r, "value", i[e.dataKey]);
              if (u) return u.coordinate + n / 2;
            }
            return r[o] ? r[o].coordinate + n / 2 : null;
          }
          var c = Mi(i, k()(a) ? e.dataKey : a);
          return k()(c) ? null : e.scale(c);
        },
        eo = function (t) {
          var e = t.axis,
            r = t.ticks,
            n = t.offset,
            i = t.bandSize,
            o = t.entry,
            a = t.index;
          if ("category" === e.type) return r[a] ? r[a].coordinate + n : null;
          var u = Mi(o, e.dataKey, e.domain[a]);
          return k()(u) ? null : e.scale(u) - i / 2 + n;
        },
        ro = function (t) {
          var e = t.numericAxis,
            r = e.scale.domain();
          if ("number" === e.type) {
            var n = Math.min(r[0], r[1]),
              i = Math.max(r[0], r[1]);
            return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
          }
          return r[0];
        },
        no = function (t, e) {
          var r = t.props.stackId;
          if ((0, Oi.P2)(r)) {
            var n = e[r];
            if (n && n.items.length) {
              for (var i = -1, o = 0, a = n.items.length; o < a; o++)
                if (n.items[o] === t) {
                  i = o;
                  break;
                }
              return i >= 0 ? n.stackedData[i] : null;
            }
          }
          return null;
        },
        io = function (t, e, r) {
          return Object.keys(t)
            .reduce(
              function (n, i) {
                var o = t[i].stackedData.reduce(
                  function (t, n) {
                    var i = n.slice(e, r + 1).reduce(
                      function (t, e) {
                        return [
                          b()(e.concat([t[0]]).filter(Oi.hj)),
                          m()(e.concat([t[1]]).filter(Oi.hj)),
                        ];
                      },
                      [1 / 0, -1 / 0],
                    );
                    return [Math.min(t[0], i[0]), Math.max(t[1], i[1])];
                  },
                  [1 / 0, -1 / 0],
                );
                return [Math.min(o[0], n[0]), Math.max(o[1], n[1])];
              },
              [1 / 0, -1 / 0],
            )
            .map(function (t) {
              return t === 1 / 0 || t === -1 / 0 ? 0 : t;
            });
        },
        oo = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        ao = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        uo = function (t, e, r) {
          if (S()(t)) return t(e, r);
          if (!y()(t)) return e;
          var n = [];
          if ((0, Oi.hj)(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
          else if (oo.test(t[0])) {
            var i = +oo.exec(t[0])[1];
            n[0] = e[0] - i;
          } else S()(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
          if ((0, Oi.hj)(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
          else if (ao.test(t[1])) {
            var o = +ao.exec(t[1])[1];
            n[1] = e[1] + o;
          } else S()(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
          return n;
        },
        co = function (t, e, r) {
          if (t && t.scale && t.scale.bandwidth) {
            var n = t.scale.bandwidth();
            if (!r || n > 0) return n;
          }
          if (t && e && e.length >= 2) {
            for (
              var i = u()(e, function (t) {
                  return t.coordinate;
                }),
                o = 1 / 0,
                a = 1,
                c = i.length;
              a < c;
              a++
            ) {
              var l = i[a],
                s = i[a - 1];
              o = Math.min((l.coordinate || 0) - (s.coordinate || 0), o);
            }
            return o === 1 / 0 ? 0 : o;
          }
          return r ? void 0 : 0;
        },
        lo = function (t, e, r) {
          return t && t.length
            ? o()(t, _()(r, "type.defaultProps.domain"))
              ? e
              : t
            : e;
        },
        so = function (t, e) {
          var r = t.props,
            n = r.dataKey,
            i = r.name,
            o = r.unit,
            a = r.formatter,
            u = r.tooltipType,
            c = r.chartType;
          return Ai(
            Ai({}, (0, Si.L6)(t)),
            {},
            {
              dataKey: n,
              unit: o,
              formatter: a,
              name: i || n,
              color: Ii(t),
              value: Mi(e, n),
              type: u,
              payload: e,
              chartType: c,
            },
          );
        };
    },
    99875: (t, e, r) => {
      "use strict";
      r.d(e, { IR: () => m, os: () => v, xE: () => y });
      var n = r(59509);
      function i(t) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          i(t)
        );
      }
      function o(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(r), !0).forEach(function (e) {
                u(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function u(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== i(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== i(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === i(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function c(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return l(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return l(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return l(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var s = { widthCache: {}, cacheCount: 0 },
        f = {
          position: "absolute",
          top: "-20000px",
          left: 0,
          padding: 0,
          margin: 0,
          border: "none",
          whiteSpace: "pre",
        },
        p = [
          "minWidth",
          "maxWidth",
          "width",
          "minHeight",
          "maxHeight",
          "height",
          "top",
          "left",
          "fontSize",
          "lineHeight",
          "padding",
          "margin",
          "paddingLeft",
          "paddingRight",
          "paddingTop",
          "paddingBottom",
          "marginLeft",
          "marginRight",
          "marginTop",
          "marginBottom",
        ],
        h = "recharts_measurement_span";
      var d = function (t) {
          return Object.keys(t).reduce(function (e, r) {
            return ""
              .concat(e)
              .concat(
                ((o = r),
                o
                  .split("")
                  .reduce(function (t, e) {
                    return e === e.toUpperCase()
                      ? [].concat(c(t), ["-", e.toLowerCase()])
                      : [].concat(c(t), [e]);
                  }, [])
                  .join("")),
                ":",
              )
              .concat(
                ((n = r),
                (i = t[r]),
                p.indexOf(n) >= 0 && i === +i ? "".concat(i, "px") : i),
                ";",
              );
            var n, i, o;
          }, "");
        },
        y = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null == t || n.x.isSsr) return { width: 0, height: 0 };
          var r = "".concat(t),
            i = d(e),
            o = "".concat(r, "-").concat(i);
          if (s.widthCache[o]) return s.widthCache[o];
          try {
            var u = document.getElementById(h);
            u ||
              ((u = document.createElement("span")).setAttribute("id", h),
              u.setAttribute("aria-hidden", "true"),
              document.body.appendChild(u));
            var c = a(a({}, f), e);
            Object.keys(c).map(function (t) {
              return (u.style[t] = c[t]), t;
            }),
              (u.textContent = r);
            var l = u.getBoundingClientRect(),
              p = { width: l.width, height: l.height };
            return (
              (s.widthCache[o] = p),
              ++s.cacheCount > 2e3 && ((s.cacheCount = 0), (s.widthCache = {})),
              p
            );
          } catch (t) {
            return { width: 0, height: 0 };
          }
        },
        v = function (t) {
          var e = t.ownerDocument.documentElement,
            r = { top: 0, left: 0 };
          return (
            void 0 !== t.getBoundingClientRect &&
              (r = t.getBoundingClientRect()),
            {
              top: r.top + window.pageYOffset - e.clientTop,
              left: r.left + window.pageXOffset - e.clientLeft,
            }
          );
        },
        m = function (t, e) {
          return {
            chartX: Math.round(t.pageX - e.left),
            chartY: Math.round(t.pageY - e.top),
          };
        };
    },
    16171: (t, e, r) => {
      "use strict";
      r.d(e, {
        Ap: () => S,
        EL: () => g,
        Kt: () => x,
        P2: () => v,
        bv: () => w,
        h1: () => b,
        hU: () => d,
        hj: () => y,
        k4: () => O,
        uY: () => h,
        wr: () => j,
      });
      var n = r(80089),
        i = r.n(n),
        o = r(93706),
        a = r.n(o),
        u = r(35813),
        c = r.n(u),
        l = r(47315),
        s = r.n(l),
        f = r(72139),
        p = r.n(f),
        h = function (t) {
          return 0 === t ? 0 : t > 0 ? 1 : -1;
        },
        d = function (t) {
          return p()(t) && t.indexOf("%") === t.length - 1;
        },
        y = function (t) {
          return s()(t) && !c()(t);
        },
        v = function (t) {
          return y(t) || p()(t);
        },
        m = 0,
        g = function (t) {
          var e = ++m;
          return "".concat(t || "").concat(e);
        },
        b = function (t, e) {
          var r,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!y(t) && !p()(t)) return n;
          if (d(t)) {
            var o = t.indexOf("%");
            r = (e * parseFloat(t.slice(0, o))) / 100;
          } else r = +t;
          return c()(r) && (r = n), i && r > e && (r = e), r;
        },
        x = function (t) {
          if (!t) return null;
          var e = Object.keys(t);
          return e && e.length ? t[e[0]] : null;
        },
        w = function (t) {
          if (!a()(t)) return !1;
          for (var e = t.length, r = {}, n = 0; n < e; n++) {
            if (r[t[n]]) return !0;
            r[t[n]] = !0;
          }
          return !1;
        },
        O = function (t, e) {
          return y(t) && y(e)
            ? function (r) {
                return t + r * (e - t);
              }
            : function () {
                return e;
              };
        };
      function S(t, e, r) {
        return t && t.length
          ? t.find(function (t) {
              return t && ("function" == typeof e ? e(t) : i()(t, e)) === r;
            })
          : null;
      }
      var j = function (t) {
        if (!t || !t.length) return null;
        for (
          var e = t.length,
            r = 0,
            n = 0,
            i = 0,
            o = 0,
            a = 1 / 0,
            u = -1 / 0,
            c = 0,
            l = 0,
            s = 0;
          s < e;
          s++
        )
          (r += c = t[s].cx || 0),
            (n += l = t[s].cy || 0),
            (i += c * l),
            (o += c * c),
            (a = Math.min(a, c)),
            (u = Math.max(u, c));
        var f = e * o != r * r ? (e * i - r * n) / (e * o - r * r) : 0;
        return { xmin: a, xmax: u, a: f, b: (n - f * r) / e };
      };
    },
    59509: (t, e, r) => {
      "use strict";
      r.d(e, { x: () => n });
      var n = {
        isSsr: !(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement &&
          window.setTimeout
        ),
        get: function (t) {
          return n[t];
        },
        set: function (t, e) {
          if ("string" == typeof t) n[t] = e;
          else {
            var r = Object.keys(t);
            r &&
              r.length &&
              r.forEach(function (e) {
                n[e] = t[e];
              });
          }
        },
      };
    },
    94694: (t, e, r) => {
      "use strict";
      r.d(e, { B: () => n });
      var n = function (t, e) {
        var r = t.alwaysShow,
          n = t.ifOverflow;
        return r && (n = "extendDomain"), n === e;
      };
    },
    78706: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      var n = function (t, e) {
        for (
          var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
          i < r;
          i++
        )
          n[i - 2] = arguments[i];
      };
    },
    80072: (t, e, r) => {
      "use strict";
      r.d(e, { Wk: () => u, op: () => l, z3: () => p });
      r(51391);
      function n(t) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          n(t)
        );
      }
      function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(r), !0).forEach(function (e) {
                a(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function a(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== n(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var i = r.call(t, e || "default");
                if ("object" !== n(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === n(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var u = Math.PI / 180,
        c = function (t) {
          return (180 * t) / Math.PI;
        },
        l = function (t, e, r, n) {
          return { x: t + Math.cos(-u * n) * r, y: e + Math.sin(-u * n) * r };
        },
        s = function (t, e) {
          var r,
            n,
            i,
            o,
            a,
            u,
            l = t.x,
            s = t.y,
            f = e.cx,
            p = e.cy,
            h =
              ((n = { x: f, y: p }),
              (i = (r = { x: l, y: s }).x),
              (o = r.y),
              (a = n.x),
              (u = n.y),
              Math.sqrt(Math.pow(i - a, 2) + Math.pow(o - u, 2)));
          if (h <= 0) return { radius: h };
          var d = (l - f) / h,
            y = Math.acos(d);
          return (
            s > p && (y = 2 * Math.PI - y),
            { radius: h, angle: c(y), angleInRadian: y }
          );
        },
        f = function (t, e) {
          var r = e.startAngle,
            n = e.endAngle,
            i = Math.floor(r / 360),
            o = Math.floor(n / 360);
          return t + 360 * Math.min(i, o);
        },
        p = function (t, e) {
          var r = t.x,
            n = t.y,
            i = s({ x: r, y: n }, e),
            a = i.radius,
            u = i.angle,
            c = e.innerRadius,
            l = e.outerRadius;
          if (a < c || a > l) return !1;
          if (0 === a) return !0;
          var p,
            h = (function (t) {
              var e = t.startAngle,
                r = t.endAngle,
                n = Math.floor(e / 360),
                i = Math.floor(r / 360),
                o = Math.min(n, i);
              return { startAngle: e - 360 * o, endAngle: r - 360 * o };
            })(e),
            d = h.startAngle,
            y = h.endAngle,
            v = u;
          if (d <= y) {
            for (; v > y; ) v -= 360;
            for (; v < d; ) v += 360;
            p = v >= d && v <= y;
          } else {
            for (; v > d; ) v -= 360;
            for (; v < y; ) v += 360;
            p = v >= y && v <= d;
          }
          return p ? o(o({}, e), {}, { radius: a, angle: f(v, e) }) : null;
        };
    },
    9410: (t, e, r) => {
      "use strict";
      r.d(e, {
        $R: () => B,
        Bh: () => L,
        Gf: () => j,
        L6: () => I,
        NN: () => A,
        TT: () => M,
        eu: () => R,
        rL: () => N,
        sP: () => E,
      });
      var n = r(23619),
        i = r.n(n),
        o = r(39277),
        a = r.n(o),
        u = r(72139),
        c = r.n(u),
        l = r(80089),
        s = r.n(l),
        f = r(51391),
        p = r.n(f),
        h = r(93706),
        d = r.n(h),
        y = r(89526),
        v = r(338),
        m = r(16171),
        g = r(68201),
        b = r(33790),
        x = ["children"],
        w = ["children"];
      function O(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
        }
        return i;
      }
      var S = {
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
        },
        j = function (t) {
          return "string" == typeof t
            ? t
            : t
            ? t.displayName || t.name || "Component"
            : "";
        },
        _ = null,
        P = null,
        k = function t(e) {
          if (e === _ && d()(P)) return P;
          var r = [];
          return (
            y.Children.forEach(e, function (e) {
              p()(e) ||
                ((0, v.isFragment)(e)
                  ? (r = r.concat(t(e.props.children)))
                  : r.push(e));
            }),
            (P = r),
            (_ = e),
            r
          );
        };
      function A(t, e) {
        var r = [],
          n = [];
        return (
          (n = d()(e)
            ? e.map(function (t) {
                return j(t);
              })
            : [j(e)]),
          k(t).forEach(function (t) {
            var e = s()(t, "type.displayName") || s()(t, "type.name");
            -1 !== n.indexOf(e) && r.push(t);
          }),
          r
        );
      }
      function E(t, e) {
        var r = A(t, e);
        return r && r[0];
      }
      var M = function (t) {
          if (!t || !t.props) return !1;
          var e = t.props,
            r = e.width,
            n = e.height;
          return !(!(0, m.hj)(r) || r <= 0 || !(0, m.hj)(n) || n <= 0);
        },
        T = [
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
        C = function (t) {
          return t && t.type && c()(t.type) && T.indexOf(t.type) >= 0;
        },
        I = function (t, e, r) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var n = t;
          if (((0, y.isValidElement)(t) && (n = t.props), !i()(n))) return null;
          var o = {};
          return (
            Object.keys(n).forEach(function (t) {
              var i;
              (function (t, e, r, n) {
                var i,
                  o =
                    null !==
                      (i =
                        null === b.ry || void 0 === b.ry ? void 0 : b.ry[n]) &&
                    void 0 !== i
                      ? i
                      : [];
                return (
                  (!a()(t) && ((n && o.includes(e)) || b.Yh.includes(e))) ||
                  (r && b.nv.includes(e))
                );
              })(null === (i = n) || void 0 === i ? void 0 : i[t], t, e, r) &&
                (o[t] = n[t]);
            }),
            o
          );
        },
        N = function t(e, r) {
          if (e === r) return !0;
          var n = y.Children.count(e);
          if (n !== y.Children.count(r)) return !1;
          if (0 === n) return !0;
          if (1 === n) return D(d()(e) ? e[0] : e, d()(r) ? r[0] : r);
          for (var i = 0; i < n; i++) {
            var o = e[i],
              a = r[i];
            if (d()(o) || d()(a)) {
              if (!t(o, a)) return !1;
            } else if (!D(o, a)) return !1;
          }
          return !0;
        },
        D = function (t, e) {
          if (p()(t) && p()(e)) return !0;
          if (!p()(t) && !p()(e)) {
            var r = t.props || {},
              n = r.children,
              i = O(r, x),
              o = e.props || {},
              a = o.children,
              u = O(o, w);
            return n && a
              ? (0, g.w)(i, u) && N(n, a)
              : !n && !a && (0, g.w)(i, u);
          }
          return !1;
        },
        R = function (t, e) {
          var r = [],
            n = {};
          return (
            k(t).forEach(function (t, i) {
              if (C(t)) r.push(t);
              else if (t) {
                var o = j(t.type),
                  a = e[o] || {},
                  u = a.handler,
                  c = a.once;
                if (u && (!c || !n[o])) {
                  var l = u(t, o, i);
                  r.push(l), (n[o] = !0);
                }
              }
            }),
            r
          );
        },
        L = function (t) {
          var e = t && t.type;
          return e && S[e] ? S[e] : null;
        },
        B = function (t, e) {
          return k(e).indexOf(t);
        };
    },
    68201: (t, e, r) => {
      "use strict";
      function n(t, e) {
        for (var r in t)
          if (
            {}.hasOwnProperty.call(t, r) &&
            (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r])
          )
            return !1;
        for (var n in e)
          if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n))
            return !1;
        return !0;
      }
      r.d(e, { w: () => n });
    },
    33790: (t, e, r) => {
      "use strict";
      r.d(e, {
        Yh: () => u,
        Ym: () => f,
        bw: () => p,
        nv: () => s,
        ry: () => l,
      });
      var n = r(23619),
        i = r.n(n),
        o = r(89526);
      function a(t) {
        return (
          (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          a(t)
        );
      }
      var u = [
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
        c = ["points", "pathLength"],
        l = { svg: ["viewBox", "children"], polygon: c, polyline: c },
        s = [
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
        f = function (t, e) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var r = t;
          if (((0, o.isValidElement)(t) && (r = t.props), !i()(r))) return null;
          var n = {};
          return (
            Object.keys(r).forEach(function (t) {
              s.includes(t) &&
                (n[t] =
                  e ||
                  function (e) {
                    return r[t](r, e);
                  });
            }),
            n
          );
        },
        p = function (t, e, r) {
          if (!i()(t) || "object" !== a(t)) return null;
          var n = null;
          return (
            Object.keys(t).forEach(function (i) {
              var o = t[i];
              s.includes(i) &&
                "function" == typeof o &&
                (n || (n = {}),
                (n[i] = (function (t, e, r) {
                  return function (n) {
                    return t(e, r, n), null;
                  };
                })(o, e, r)));
            }),
            n
          );
        };
    },
    55502: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = u(r(59069)),
        i = r(3459),
        o = u(r(60699)),
        a = u(r(15205));
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var c = /((?:\-[a-z]+\-)?calc)/;
      (e.default = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
        return (0, n.default)(t)
          .walk(function (t) {
            if ("function" === t.type && c.test(t.value)) {
              var r = n.default.stringify(t.nodes);
              if (!(r.indexOf("constant") >= 0 || r.indexOf("env") >= 0)) {
                var u = i.parser.parse(r),
                  l = (0, o.default)(u, e);
                (t.type = "word"), (t.value = (0, a.default)(t.value, l, e));
              }
            }
          }, !0)
          .toString();
      }),
        (t.exports = e.default);
    },
    87773: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n,
        i = r(68598),
        o = (n = i) && n.__esModule ? n : { default: n };
      (e.default = function (t, e, r) {
        switch (t.type) {
          case "LengthValue":
          case "AngleValue":
          case "TimeValue":
          case "FrequencyValue":
          case "ResolutionValue":
            return (function (t, e, r) {
              e.type === t.type &&
                (e = {
                  type: t.type,
                  value: (0, o.default)(e.value, e.unit, t.unit, r),
                  unit: t.unit,
                });
              return { left: t, right: e };
            })(t, e, r);
          default:
            return { left: t, right: e };
        }
      }),
        (t.exports = e.default);
    },
    60699: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.flip = l);
      var n,
        i = r(87773),
        o = (n = i) && n.__esModule ? n : { default: n };
      function a(t, e) {
        return "MathExpression" === t.type
          ? (function (t, e) {
              switch (
                ((t = (function (t, e) {
                  var r = (0, o.default)(t.left, t.right, e),
                    n = a(r.left, e),
                    i = a(r.right, e);
                  "MathExpression" === n.type &&
                    "MathExpression" === i.type &&
                    (("/" === n.operator && "*" === i.operator) ||
                      ("-" === n.operator && "+" === i.operator) ||
                      ("*" === n.operator && "/" === i.operator) ||
                      ("+" === n.operator && "-" === i.operator)) &&
                    (u(n.right, i.right)
                      ? (r = (0, o.default)(n.left, i.left, e))
                      : u(n.right, i.left) &&
                        (r = (0, o.default)(n.left, i.right, e)),
                    (n = a(r.left, e)),
                    (i = a(r.right, e)));
                  return (t.left = n), (t.right = i), t;
                })(t, e)),
                t.operator)
              ) {
                case "+":
                case "-":
                  return (function (t, e) {
                    var r = t,
                      n = r.left,
                      i = r.right,
                      o = r.operator;
                    if ("CssVariable" === n.type || "CssVariable" === i.type)
                      return t;
                    if (0 === i.value) return n;
                    if (0 === n.value && "+" === o) return i;
                    if (0 === n.value && "-" === o) return s(i);
                    n.type === i.type &&
                      c(n.type) &&
                      ((t = Object.assign({}, n)).value =
                        "+" === o ? n.value + i.value : n.value - i.value);
                    if (
                      c(n.type) &&
                      ("+" === i.operator || "-" === i.operator) &&
                      "MathExpression" === i.type
                    ) {
                      if (n.type === i.left.type)
                        return (
                          ((t = Object.assign({}, t)).left = a(
                            {
                              type: "MathExpression",
                              operator: o,
                              left: n,
                              right: i.left,
                            },
                            e,
                          )),
                          (t.right = i.right),
                          (t.operator = "-" === o ? l(i.operator) : i.operator),
                          a(t, e)
                        );
                      if (n.type === i.right.type)
                        return (
                          ((t = Object.assign({}, t)).left = a(
                            {
                              type: "MathExpression",
                              operator: "-" === o ? l(i.operator) : i.operator,
                              left: n,
                              right: i.right,
                            },
                            e,
                          )),
                          (t.right = i.left),
                          a(t, e)
                        );
                    }
                    if (
                      "MathExpression" === n.type &&
                      ("+" === n.operator || "-" === n.operator) &&
                      c(i.type)
                    ) {
                      if (i.type === n.left.type)
                        return (
                          ((t = Object.assign({}, n)).left = a(
                            {
                              type: "MathExpression",
                              operator: o,
                              left: n.left,
                              right: i,
                            },
                            e,
                          )),
                          a(t, e)
                        );
                      if (i.type === n.right.type)
                        return (
                          (t = Object.assign({}, n)),
                          "-" === n.operator
                            ? ((t.right = a(
                                {
                                  type: "MathExpression",
                                  operator: "-" === o ? "+" : "-",
                                  left: i,
                                  right: n.right,
                                },
                                e,
                              )),
                              (t.operator = "-" === o ? "-" : "+"))
                            : (t.right = a(
                                {
                                  type: "MathExpression",
                                  operator: o,
                                  left: n.right,
                                  right: i,
                                },
                                e,
                              )),
                          t.right.value < 0 &&
                            ((t.right.value *= -1),
                            (t.operator = "-" === t.operator ? "+" : "-")),
                          a(t, e)
                        );
                    }
                    return t;
                  })(t, e);
                case "/":
                  return (function (t, e) {
                    if (!c(t.right.type)) return t;
                    if ("Value" !== t.right.type)
                      throw new Error(
                        'Cannot divide by "' +
                          t.right.unit +
                          '", number expected',
                      );
                    if (0 === t.right.value)
                      throw new Error("Cannot divide by zero");
                    if ("MathExpression" === t.left.type)
                      return c(t.left.left.type) && c(t.left.right.type)
                        ? ((t.left.left.value /= t.right.value),
                          (t.left.right.value /= t.right.value),
                          a(t.left, e))
                        : t;
                    if (c(t.left.type))
                      return (t.left.value /= t.right.value), t.left;
                    return t;
                  })(t, e);
                case "*":
                  return (function (t) {
                    if (
                      "MathExpression" === t.left.type &&
                      "Value" === t.right.type
                    ) {
                      if (c(t.left.left.type) && c(t.left.right.type))
                        return (
                          (t.left.left.value *= t.right.value),
                          (t.left.right.value *= t.right.value),
                          t.left
                        );
                    } else {
                      if (c(t.left.type) && "Value" === t.right.type)
                        return (t.left.value *= t.right.value), t.left;
                      if (
                        "Value" === t.left.type &&
                        "MathExpression" === t.right.type
                      ) {
                        if (c(t.right.left.type) && c(t.right.right.type))
                          return (
                            (t.right.left.value *= t.left.value),
                            (t.right.right.value *= t.left.value),
                            t.right
                          );
                      } else if ("Value" === t.left.type && c(t.right.type))
                        return (t.right.value *= t.left.value), t.right;
                    }
                    return t;
                  })(t);
              }
              return t;
            })(t, e)
          : "Calc" === t.type
          ? a(t.value, e)
          : t;
      }
      function u(t, e) {
        return t.type === e.type && t.value === e.value;
      }
      function c(t) {
        switch (t) {
          case "LengthValue":
          case "AngleValue":
          case "TimeValue":
          case "FrequencyValue":
          case "ResolutionValue":
          case "EmValue":
          case "ExValue":
          case "ChValue":
          case "RemValue":
          case "VhValue":
          case "VwValue":
          case "VminValue":
          case "VmaxValue":
          case "PercentageValue":
          case "Value":
            return !0;
        }
        return !1;
      }
      function l(t) {
        return "+" === t ? "-" : "+";
      }
      function s(t) {
        return (
          c(t.type)
            ? (t.value = -t.value)
            : "MathExpression" == t.type &&
              ((t.left = s(t.left)), (t.right = s(t.right))),
          t
        );
      }
      e.default = a;
    },
    15205: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e, r) {
          var n = a(e, r);
          return "MathExpression" === e.type && (n = t + "(" + n + ")"), n;
        });
      var n = r(60699),
        i = { "*": 0, "/": 0, "+": 1, "-": 1 };
      function o(t, e) {
        if (!1 !== e) {
          var r = Math.pow(10, e);
          return Math.round(t * r) / r;
        }
        return t;
      }
      function a(t, e) {
        switch (t.type) {
          case "MathExpression":
            var r = t.left,
              u = t.right,
              c = t.operator,
              l = "";
            return (
              "MathExpression" === r.type && i[c] < i[r.operator]
                ? (l += "(" + a(r, e) + ")")
                : (l += a(r, e)),
              (l += " " + t.operator + " "),
              "MathExpression" === u.type && i[c] < i[u.operator]
                ? (l += "(" + a(u, e) + ")")
                : "MathExpression" === u.type &&
                  "-" === c &&
                  ["+", "-"].includes(u.operator)
                ? ((u.operator = (0, n.flip)(u.operator)), (l += a(u, e)))
                : (l += a(u, e)),
              l
            );
          case "Value":
            return o(t.value, e);
          case "CssVariable":
            return t.fallback
              ? "var(" + t.value + ", " + a(t.fallback, e) + ")"
              : "var(" + t.value + ")";
          case "Calc":
            return t.prefix
              ? "-" + t.prefix + "-calc(" + a(t.value, e) + ")"
              : "calc(" + a(t.value, e) + ")";
          default:
            return o(t.value, e) + t.unit;
        }
      }
      t.exports = e.default;
    },
    3459: (t, e) => {
      var r = (function () {
        function t(t, e) {
          var r;
          if (
            (Object.defineProperty(this, "name", {
              enumerable: !1,
              writable: !1,
              value: "JisonParserError",
            }),
            null == t && (t = "???"),
            Object.defineProperty(this, "message", {
              enumerable: !1,
              writable: !0,
              value: t,
            }),
            (this.hash = e),
            e && e.exception instanceof Error)
          ) {
            var n = e.exception;
            (this.message = n.message || t), (r = n.stack);
          }
          r ||
            (Error.hasOwnProperty("captureStackTrace")
              ? Error.captureStackTrace(this, this.constructor)
              : (r = new Error(t).stack)),
            r &&
              Object.defineProperty(this, "stack", {
                enumerable: !1,
                writable: !1,
                value: r,
              });
        }
        function e(t, e, r) {
          r = r || 0;
          for (var n = 0; n < e; n++) this.push(t), (t += r);
        }
        function r(t, e) {
          for (e += t = this.length - t; t < e; t++) this.push(this[t]);
        }
        function n(t) {
          for (var e = [], r = 0, n = t.length; r < n; r++) {
            var i = t[r];
            "function" == typeof i ? (r++, i.apply(e, t[r])) : e.push(i);
          }
          return e;
        }
        "function" == typeof Object.setPrototypeOf
          ? Object.setPrototypeOf(t.prototype, Error.prototype)
          : (t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.name = "JisonParserError");
        var i = {
          trace: function () {},
          JisonParserError: t,
          yy: {},
          options: {
            type: "lalr",
            hasPartialLrUpgradeOnConflict: !0,
            errorRecoveryTokenDiscardCount: 3,
          },
          symbols_: {
            $accept: 0,
            $end: 1,
            ADD: 3,
            ANGLE: 16,
            CHS: 22,
            COMMA: 14,
            CSS_CPROP: 13,
            CSS_VAR: 12,
            DIV: 6,
            EMS: 20,
            EOF: 1,
            EXS: 21,
            FREQ: 18,
            LENGTH: 15,
            LPAREN: 7,
            MUL: 5,
            NESTED_CALC: 9,
            NUMBER: 11,
            PERCENTAGE: 28,
            PREFIX: 10,
            REMS: 23,
            RES: 19,
            RPAREN: 8,
            SUB: 4,
            TIME: 17,
            VHS: 24,
            VMAXS: 27,
            VMINS: 26,
            VWS: 25,
            css_value: 33,
            css_variable: 32,
            error: 2,
            expression: 29,
            math_expression: 30,
            value: 31,
          },
          terminals_: {
            1: "EOF",
            2: "error",
            3: "ADD",
            4: "SUB",
            5: "MUL",
            6: "DIV",
            7: "LPAREN",
            8: "RPAREN",
            9: "NESTED_CALC",
            10: "PREFIX",
            11: "NUMBER",
            12: "CSS_VAR",
            13: "CSS_CPROP",
            14: "COMMA",
            15: "LENGTH",
            16: "ANGLE",
            17: "TIME",
            18: "FREQ",
            19: "RES",
            20: "EMS",
            21: "EXS",
            22: "CHS",
            23: "REMS",
            24: "VHS",
            25: "VWS",
            26: "VMINS",
            27: "VMAXS",
            28: "PERCENTAGE",
          },
          TERROR: 2,
          EOF: 1,
          originalQuoteName: null,
          originalParseError: null,
          cleanupAfterParse: null,
          constructParseErrorInfo: null,
          yyMergeLocationInfo: null,
          __reentrant_call_depth: 0,
          __error_infos: [],
          __error_recovery_infos: [],
          quoteName: function (t) {
            return '"' + t + '"';
          },
          getSymbolName: function (t) {
            if (this.terminals_[t]) return this.terminals_[t];
            var e = this.symbols_;
            for (var r in e) if (e[r] === t) return r;
            return null;
          },
          describeSymbol: function (t) {
            if (
              t !== this.EOF &&
              this.terminal_descriptions_ &&
              this.terminal_descriptions_[t]
            )
              return this.terminal_descriptions_[t];
            if (t === this.EOF) return "end of input";
            var e = this.getSymbolName(t);
            return e ? this.quoteName(e) : null;
          },
          collect_expected_token_set: function (t, e) {
            var r = this.TERROR,
              n = [],
              i = {};
            if (!e && this.state_descriptions_ && this.state_descriptions_[t])
              return [this.state_descriptions_[t]];
            for (var o in this.table[t])
              if ((o = +o) !== r) {
                var a = e ? o : this.describeSymbol(o);
                a && !i[a] && (n.push(a), (i[a] = !0));
              }
            return n;
          },
          productions_: (function (t) {
            for (
              var e = [], r = t.pop, n = t.rule, i = 0, o = r.length;
              i < o;
              i++
            )
              e.push([r[i], n[i]]);
            return e;
          })({
            pop: n([29, e, [30, 10], 31, 31, 32, 32, e, [33, 15]]),
            rule: n([2, e, [3, 5], 4, 7, e, [1, 4], 2, 4, 6, e, [1, 14], 2]),
          }),
          performAction: function (t, e, r) {
            var n = this.yy;
            n.parser, n.lexer;
            switch (t) {
              case 0:
              case 6:
                /*! Production::    math_expression : LPAREN math_expression RPAREN */
                this.$ = r[e - 1];
                break;
              case 1:
                /*! Production::    expression : math_expression EOF */
                return (this.$ = r[e - 1]), r[e - 1];
              case 2:
              /*! Production::    math_expression : math_expression ADD math_expression */ case 3:
              /*! Production::    math_expression : math_expression SUB math_expression */ case 4:
              /*! Production::    math_expression : math_expression MUL math_expression */ case 5:
                /*! Production::    math_expression : math_expression DIV math_expression */
                this.$ = {
                  type: "MathExpression",
                  operator: r[e - 1],
                  left: r[e - 2],
                  right: r[e],
                };
                break;
              case 7:
                /*! Production::    math_expression : NESTED_CALC LPAREN math_expression RPAREN */
                this.$ = { type: "Calc", value: r[e - 1] };
                break;
              case 8:
                /*! Production::    math_expression : SUB PREFIX SUB NESTED_CALC LPAREN math_expression RPAREN */
                this.$ = { type: "Calc", value: r[e - 1], prefix: r[e - 5] };
                break;
              case 9:
              /*! Production::    math_expression : css_variable */ case 10:
              /*! Production::    math_expression : css_value */ case 11:
                /*! Production::    math_expression : value */
                this.$ = r[e];
                break;
              case 12:
                /*! Production::    value : NUMBER */
                this.$ = { type: "Value", value: parseFloat(r[e]) };
                break;
              case 13:
                /*! Production::    value : SUB NUMBER */
                this.$ = { type: "Value", value: -1 * parseFloat(r[e]) };
                break;
              case 14:
                /*! Production::    css_variable : CSS_VAR LPAREN CSS_CPROP RPAREN */
                this.$ = { type: "CssVariable", value: r[e - 1] };
                break;
              case 15:
                /*! Production::    css_variable : CSS_VAR LPAREN CSS_CPROP COMMA math_expression RPAREN */
                this.$ = {
                  type: "CssVariable",
                  value: r[e - 3],
                  fallback: r[e - 1],
                };
                break;
              case 16:
                /*! Production::    css_value : LENGTH */
                this.$ = {
                  type: "LengthValue",
                  value: parseFloat(r[e]),
                  unit: /[a-z]+/.exec(r[e])[0],
                };
                break;
              case 17:
                /*! Production::    css_value : ANGLE */
                this.$ = {
                  type: "AngleValue",
                  value: parseFloat(r[e]),
                  unit: /[a-z]+/.exec(r[e])[0],
                };
                break;
              case 18:
                /*! Production::    css_value : TIME */
                this.$ = {
                  type: "TimeValue",
                  value: parseFloat(r[e]),
                  unit: /[a-z]+/.exec(r[e])[0],
                };
                break;
              case 19:
                /*! Production::    css_value : FREQ */
                this.$ = {
                  type: "FrequencyValue",
                  value: parseFloat(r[e]),
                  unit: /[a-z]+/.exec(r[e])[0],
                };
                break;
              case 20:
                /*! Production::    css_value : RES */
                this.$ = {
                  type: "ResolutionValue",
                  value: parseFloat(r[e]),
                  unit: /[a-z]+/.exec(r[e])[0],
                };
                break;
              case 21:
                /*! Production::    css_value : EMS */
                this.$ = {
                  type: "EmValue",
                  value: parseFloat(r[e]),
                  unit: "em",
                };
                break;
              case 22:
                /*! Production::    css_value : EXS */
                this.$ = {
                  type: "ExValue",
                  value: parseFloat(r[e]),
                  unit: "ex",
                };
                break;
              case 23:
                /*! Production::    css_value : CHS */
                this.$ = {
                  type: "ChValue",
                  value: parseFloat(r[e]),
                  unit: "ch",
                };
                break;
              case 24:
                /*! Production::    css_value : REMS */
                this.$ = {
                  type: "RemValue",
                  value: parseFloat(r[e]),
                  unit: "rem",
                };
                break;
              case 25:
                /*! Production::    css_value : VHS */
                this.$ = {
                  type: "VhValue",
                  value: parseFloat(r[e]),
                  unit: "vh",
                };
                break;
              case 26:
                /*! Production::    css_value : VWS */
                this.$ = {
                  type: "VwValue",
                  value: parseFloat(r[e]),
                  unit: "vw",
                };
                break;
              case 27:
                /*! Production::    css_value : VMINS */
                this.$ = {
                  type: "VminValue",
                  value: parseFloat(r[e]),
                  unit: "vmin",
                };
                break;
              case 28:
                /*! Production::    css_value : VMAXS */
                this.$ = {
                  type: "VmaxValue",
                  value: parseFloat(r[e]),
                  unit: "vmax",
                };
                break;
              case 29:
                /*! Production::    css_value : PERCENTAGE */
                this.$ = {
                  type: "PercentageValue",
                  value: parseFloat(r[e]),
                  unit: "%",
                };
                break;
              case 30:
                /*! Production::    css_value : SUB css_value */
                var i = r[e];
                (i.value *= -1), (this.$ = i);
            }
          },
          table: (function (t) {
            for (
              var e = [],
                r = t.len,
                n = t.symbol,
                i = t.type,
                o = t.state,
                a = t.mode,
                u = t.goto,
                c = 0,
                l = r.length;
              c < l;
              c++
            ) {
              for (var s = r[c], f = {}, p = 0; p < s; p++) {
                var h = n.shift();
                switch (i.shift()) {
                  case 2:
                    f[h] = [a.shift(), u.shift()];
                    break;
                  case 0:
                    f[h] = o.shift();
                    break;
                  default:
                    f[h] = [3];
                }
              }
              e.push(f);
            }
            return e;
          })({
            len: n([
              24,
              1,
              5,
              23,
              1,
              18,
              e,
              [0, 3],
              1,
              e,
              [0, 16],
              e,
              [23, 4],
              r,
              [28, 3],
              0,
              0,
              16,
              1,
              6,
              6,
              e,
              [0, 3],
              5,
              1,
              2,
              r,
              [37, 3],
              r,
              [20, 3],
              5,
              0,
              0,
            ]),
            symbol: n([
              4,
              7,
              9,
              11,
              12,
              e,
              [15, 19, 1],
              1,
              1,
              e,
              [3, 4, 1],
              r,
              [30, 19],
              r,
              [29, 4],
              7,
              4,
              10,
              11,
              r,
              [22, 14],
              r,
              [19, 3],
              r,
              [43, 22],
              r,
              [23, 69],
              r,
              [139, 4],
              8,
              r,
              [51, 24],
              4,
              r,
              [138, 15],
              13,
              r,
              [186, 5],
              8,
              r,
              [6, 6],
              r,
              [5, 5],
              9,
              8,
              14,
              r,
              [159, 47],
              r,
              [60, 10],
            ]),
            type: n([
              e,
              [2, 19],
              e,
              [0, 5],
              1,
              e,
              [2, 24],
              e,
              [0, 4],
              r,
              [22, 19],
              r,
              [43, 42],
              r,
              [23, 70],
              r,
              [28, 25],
              r,
              [45, 25],
              r,
              [113, 54],
            ]),
            state: n([
              1,
              2,
              8,
              6,
              7,
              30,
              r,
              [4, 3],
              33,
              37,
              r,
              [5, 3],
              38,
              r,
              [4, 3],
              39,
              r,
              [4, 3],
              40,
              r,
              [4, 3],
              42,
              r,
              [21, 4],
              50,
              r,
              [5, 3],
              51,
              r,
              [4, 3],
            ]),
            mode: n([e, [1, 179], e, [2, 3], r, [5, 5], r, [6, 4], e, [1, 57]]),
            goto: n([
              5,
              3,
              4,
              24,
              e,
              [9, 15, 1],
              e,
              [25, 5, 1],
              r,
              [24, 19],
              31,
              35,
              32,
              34,
              r,
              [18, 14],
              36,
              r,
              [38, 19],
              r,
              [19, 57],
              r,
              [118, 4],
              41,
              r,
              [24, 19],
              43,
              35,
              r,
              [16, 14],
              44,
              e,
              [2, 3],
              28,
              29,
              2,
              e,
              [3, 3],
              28,
              29,
              3,
              r,
              [53, 4],
              e,
              [45, 5, 1],
              r,
              [100, 42],
              52,
              r,
              [5, 4],
              53,
            ]),
          }),
          defaultActions: (function (t) {
            for (
              var e = {}, r = t.idx, n = t.goto, i = 0, o = r.length;
              i < o;
              i++
            ) {
              e[r[i]] = n[i];
            }
            return e;
          })({
            idx: n([
              6,
              7,
              8,
              e,
              [10, 16, 1],
              33,
              34,
              39,
              40,
              41,
              45,
              47,
              52,
              53,
            ]),
            goto: n([
              9,
              10,
              11,
              e,
              [16, 14, 1],
              12,
              1,
              30,
              13,
              e,
              [4, 4, 1],
              14,
              15,
              8,
            ]),
          }),
          parseError: function (t, e, r) {
            if (!e.recoverable)
              throw (
                ("function" == typeof this.trace && this.trace(t),
                r || (r = this.JisonParserError),
                new r(t, e))
              );
            "function" == typeof this.trace && this.trace(t), e.destroy();
          },
          parse: function (t) {
            var e,
              r = this,
              n = new Array(128),
              i = new Array(128),
              o = new Array(128),
              a = this.table,
              u = 0,
              c = 0,
              l = (this.TERROR, this.EOF),
              s = (this.options.errorRecoveryTokenDiscardCount, [0, 54]);
            e = this.__lexer__
              ? this.__lexer__
              : (this.__lexer__ = Object.create(this.lexer));
            var f = {
              parseError: void 0,
              quoteName: void 0,
              lexer: void 0,
              parser: void 0,
              pre_parse: void 0,
              post_parse: void 0,
              pre_lex: void 0,
              post_lex: void 0,
            };
            function p() {
              var t = e.fastLex();
              return "number" != typeof t && (t = r.symbols_[t] || t), t || l;
            }
            "function" != typeof assert || assert,
              (this.yyGetSharedState = function () {
                return f;
              }),
              (function (t, e) {
                for (var r in e)
                  void 0 === t[r] &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    (t[r] = e[r]);
              })(f, this.yy),
              (f.lexer = e),
              (f.parser = this),
              "function" == typeof f.parseError
                ? (this.parseError = function (t, e, r) {
                    return (
                      r || (r = this.JisonParserError),
                      f.parseError.call(this, t, e, r)
                    );
                  })
                : (this.parseError = this.originalParseError),
              "function" == typeof f.quoteName
                ? (this.quoteName = function (t) {
                    return f.quoteName.call(this, t);
                  })
                : (this.quoteName = this.originalQuoteName),
              (this.cleanupAfterParse = function (t, r, a) {
                var c, l;
                r &&
                  ((f.post_parse || this.post_parse) &&
                    (l = this.constructParseErrorInfo(null, null, null, !1)),
                  f.post_parse &&
                    void 0 !== (c = f.post_parse.call(this, f, t, l)) &&
                    (t = c),
                  this.post_parse &&
                    void 0 !== (c = this.post_parse.call(this, f, t, l)) &&
                    (t = c),
                  l && l.destroy && l.destroy());
                if (this.__reentrant_call_depth > 1) return t;
                if (
                  (e.cleanupAfterLex && e.cleanupAfterLex(a),
                  f &&
                    ((f.lexer = void 0),
                    (f.parser = void 0),
                    e.yy === f && (e.yy = void 0)),
                  (f = void 0),
                  (this.parseError = this.originalParseError),
                  (this.quoteName = this.originalQuoteName),
                  (n.length = 0),
                  (i.length = 0),
                  (o.length = 0),
                  (u = 0),
                  !a)
                ) {
                  for (var s = this.__error_infos.length - 1; s >= 0; s--) {
                    var p = this.__error_infos[s];
                    p && "function" == typeof p.destroy && p.destroy();
                  }
                  this.__error_infos.length = 0;
                }
                return t;
              }),
              (this.constructParseErrorInfo = function (t, r, a, l) {
                var s = {
                  errStr: t,
                  exception: r,
                  text: e.match,
                  value: e.yytext,
                  token: this.describeSymbol(c) || c,
                  token_id: c,
                  line: e.yylineno,
                  expected: a,
                  recoverable: l,
                  state: h,
                  action: d,
                  new_state: x,
                  symbol_stack: n,
                  state_stack: i,
                  value_stack: o,
                  stack_pointer: u,
                  yy: f,
                  lexer: e,
                  parser: this,
                  destroy: function () {
                    var t = !!this.recoverable;
                    for (var e in this)
                      this.hasOwnProperty(e) &&
                        "object" == typeof e &&
                        (this[e] = void 0);
                    this.recoverable = t;
                  },
                };
                return this.__error_infos.push(s), s;
              });
            var h,
              d,
              y,
              v,
              m,
              g,
              b,
              x,
              w = function () {
                var t = e.lex();
                return "number" != typeof t && (t = r.symbols_[t] || t), t || l;
              },
              O = { $: !0, _$: void 0, yy: f },
              S = !1;
            try {
              if (
                (this.__reentrant_call_depth++,
                e.setInput(t, f),
                "function" == typeof e.canIUse)
              )
                e.canIUse().fastLex && (w = p);
              for (
                o[u] = null,
                  i[u] = 0,
                  n[u] = 0,
                  ++u,
                  this.pre_parse && this.pre_parse.call(this, f),
                  f.pre_parse && f.pre_parse.call(this, f),
                  x = i[u - 1];
                ;

              ) {
                if (((h = x), this.defaultActions[h]))
                  (d = 2), (x = this.defaultActions[h]);
                else if (
                  (c || (c = w()),
                  (v = (a[h] && a[h][c]) || s),
                  (x = v[1]),
                  !(d = v[0]))
                ) {
                  var j,
                    _ = this.describeSymbol(c) || c,
                    P = this.collect_expected_token_set(h);
                  (j =
                    "number" == typeof e.yylineno
                      ? "Parse error on line " + (e.yylineno + 1) + ": "
                      : "Parse error: "),
                    "function" == typeof e.showPosition &&
                      (j += "\n" + e.showPosition(69, 10) + "\n"),
                    P.length
                      ? (j +=
                          "Expecting " + P.join(", ") + ", got unexpected " + _)
                      : (j += "Unexpected " + _),
                    (m = this.constructParseErrorInfo(j, null, P, !1)),
                    void 0 !==
                      (y = this.parseError(
                        m.errStr,
                        m,
                        this.JisonParserError,
                      )) && (S = y);
                  break;
                }
                switch (d) {
                  default:
                    if (d instanceof Array) {
                      (m = this.constructParseErrorInfo(
                        "Parse Error: multiple actions possible at state: " +
                          h +
                          ", token: " +
                          c,
                        null,
                        null,
                        !1,
                      )),
                        void 0 !==
                          (y = this.parseError(
                            m.errStr,
                            m,
                            this.JisonParserError,
                          )) && (S = y);
                      break;
                    }
                    (m = this.constructParseErrorInfo(
                      "Parsing halted. No viable error recovery approach available due to internal system failure.",
                      null,
                      null,
                      !1,
                    )),
                      void 0 !==
                        (y = this.parseError(
                          m.errStr,
                          m,
                          this.JisonParserError,
                        )) && (S = y);
                    break;
                  case 1:
                    (n[u] = c), (o[u] = e.yytext), (i[u] = x), ++u, (c = 0);
                    continue;
                  case 2:
                    if (
                      ((g = (b = this.productions_[x - 1])[1]),
                      void 0 !== (y = this.performAction.call(O, x, u - 1, o)))
                    ) {
                      S = y;
                      break;
                    }
                    u -= g;
                    var k = b[0];
                    (n[u] = k),
                      (o[u] = O.$),
                      (x = a[i[u - 1]][k]),
                      (i[u] = x),
                      ++u;
                    continue;
                  case 3:
                    -2 !== u && ((S = !0), u--, void 0 !== o[u] && (S = o[u]));
                }
                break;
              }
            } catch (t) {
              if (t instanceof this.JisonParserError) throw t;
              if (
                e &&
                "function" == typeof e.JisonLexerError &&
                t instanceof e.JisonLexerError
              )
                throw t;
              (m = this.constructParseErrorInfo(
                "Parsing aborted due to exception.",
                t,
                null,
                !1,
              )),
                (S = !1),
                void 0 !==
                  (y = this.parseError(m.errStr, m, this.JisonParserError)) &&
                  (S = y);
            } finally {
              (S = this.cleanupAfterParse(S, !0, !0)),
                this.__reentrant_call_depth--;
            }
            return S;
          },
        };
        (i.originalParseError = i.parseError),
          (i.originalQuoteName = i.quoteName);
        var o = (function () {
          function t(t, e) {
            var r;
            if (
              (Object.defineProperty(this, "name", {
                enumerable: !1,
                writable: !1,
                value: "JisonLexerError",
              }),
              null == t && (t = "???"),
              Object.defineProperty(this, "message", {
                enumerable: !1,
                writable: !0,
                value: t,
              }),
              (this.hash = e),
              e && e.exception instanceof Error)
            ) {
              var n = e.exception;
              (this.message = n.message || t), (r = n.stack);
            }
            r ||
              (Error.hasOwnProperty("captureStackTrace")
                ? Error.captureStackTrace(this, this.constructor)
                : (r = new Error(t).stack)),
              r &&
                Object.defineProperty(this, "stack", {
                  enumerable: !1,
                  writable: !1,
                  value: r,
                });
          }
          "function" == typeof Object.setPrototypeOf
            ? Object.setPrototypeOf(t.prototype, Error.prototype)
            : (t.prototype = Object.create(Error.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.name = "JisonLexerError");
          var e = {
            EOF: 1,
            ERROR: 2,
            __currentRuleSet__: null,
            __error_infos: [],
            __decompressed: !1,
            done: !1,
            _backtrack: !1,
            _input: "",
            _more: !1,
            _signaled_error_token: !1,
            conditionStack: [],
            match: "",
            matched: "",
            matches: !1,
            yytext: "",
            offset: 0,
            yyleng: 0,
            yylineno: 0,
            yylloc: null,
            constructLexErrorInfo: function (t, e, r) {
              if (
                ((t = "" + t),
                null == r && (r = !(t.indexOf("\n") > 0 && t.indexOf("^") > 0)),
                this.yylloc && r)
              )
                if ("function" == typeof this.prettyPrintRange) {
                  this.prettyPrintRange(this.yylloc);
                  /\n\s*$/.test(t) || (t += "\n"),
                    (t +=
                      "\n  Erroneous area:\n" +
                      this.prettyPrintRange(this.yylloc));
                } else if ("function" == typeof this.showPosition) {
                  var n = this.showPosition();
                  n &&
                    (t.length && "\n" !== t[t.length - 1] && "\n" !== n[0]
                      ? (t += "\n" + n)
                      : (t += n));
                }
              var i = {
                errStr: t,
                recoverable: !!e,
                text: this.match,
                token: null,
                line: this.yylineno,
                loc: this.yylloc,
                yy: this.yy,
                lexer: this,
                destroy: function () {
                  var t = !!this.recoverable;
                  for (var e in this)
                    this.hasOwnProperty(e) &&
                      "object" == typeof e &&
                      (this[e] = void 0);
                  this.recoverable = t;
                },
              };
              return this.__error_infos.push(i), i;
            },
            parseError: function (t, e, r) {
              if ((r || (r = this.JisonLexerError), this.yy)) {
                if (
                  this.yy.parser &&
                  "function" == typeof this.yy.parser.parseError
                )
                  return (
                    this.yy.parser.parseError.call(this, t, e, r) || this.ERROR
                  );
                if ("function" == typeof this.yy.parseError)
                  return this.yy.parseError.call(this, t, e, r) || this.ERROR;
              }
              throw new r(t, e);
            },
            yyerror: function (t) {
              var e = "";
              this.yylloc && (e = " on line " + (this.yylineno + 1));
              var r = this.constructLexErrorInfo(
                  "Lexical error" + e + ": " + t,
                  this.options.lexerErrorsAreRecoverable,
                ),
                n = Array.prototype.slice.call(arguments, 1);
              return (
                n.length && (r.extra_error_attributes = n),
                this.parseError(r.errStr, r, this.JisonLexerError) || this.ERROR
              );
            },
            cleanupAfterLex: function (t) {
              if ((this.setInput("", {}), !t)) {
                for (var e = this.__error_infos.length - 1; e >= 0; e--) {
                  var r = this.__error_infos[e];
                  r && "function" == typeof r.destroy && r.destroy();
                }
                this.__error_infos.length = 0;
              }
              return this;
            },
            clear: function () {
              (this.yytext = ""),
                (this.yyleng = 0),
                (this.match = ""),
                (this.matches = !1),
                (this._more = !1),
                (this._backtrack = !1);
              var t = this.yylloc ? this.yylloc.last_column : 0;
              this.yylloc = {
                first_line: this.yylineno + 1,
                first_column: t,
                last_line: this.yylineno + 1,
                last_column: t,
                range: [this.offset, this.offset],
              };
            },
            setInput: function (t, e) {
              if (((this.yy = e || this.yy || {}), !this.__decompressed)) {
                for (var r = this.rules, n = 0, i = r.length; n < i; n++) {
                  "number" == typeof (p = r[n]) && (r[n] = r[p]);
                }
                var o = this.conditions;
                for (var a in o) {
                  var u = o[a],
                    c = u.rules,
                    l = ((i = c.length), new Array(i + 1)),
                    s = new Array(i + 1);
                  for (n = 0; n < i; n++) {
                    var f = c[n],
                      p = r[f];
                    (l[n + 1] = p), (s[n + 1] = f);
                  }
                  (u.rules = s), (u.__rule_regexes = l), (u.__rule_count = i);
                }
                this.__decompressed = !0;
              }
              return (
                (this._input = t || ""),
                this.clear(),
                (this._signaled_error_token = !1),
                (this.done = !1),
                (this.yylineno = 0),
                (this.matched = ""),
                (this.conditionStack = ["INITIAL"]),
                (this.__currentRuleSet__ = null),
                (this.yylloc = {
                  first_line: 1,
                  first_column: 0,
                  last_line: 1,
                  last_column: 0,
                  range: [0, 0],
                }),
                (this.offset = 0),
                this
              );
            },
            editRemainingInput: function (t, e) {
              var r = t.call(this, this._input, e);
              return (
                "string" != typeof r
                  ? r && (this._input = "" + r)
                  : (this._input = r),
                this
              );
            },
            input: function () {
              if (!this._input) return null;
              var t = this._input[0];
              (this.yytext += t),
                this.yyleng++,
                this.offset++,
                (this.match += t),
                (this.matched += t);
              var e = 1,
                r = !1;
              if ("\n" === t) r = !0;
              else if ("\r" === t) {
                r = !0;
                var n = this._input[1];
                "\n" === n &&
                  (e++,
                  (t += n),
                  (this.yytext += n),
                  this.yyleng++,
                  this.offset++,
                  (this.match += n),
                  (this.matched += n),
                  this.yylloc.range[1]++);
              }
              return (
                r
                  ? (this.yylineno++,
                    this.yylloc.last_line++,
                    (this.yylloc.last_column = 0))
                  : this.yylloc.last_column++,
                this.yylloc.range[1]++,
                (this._input = this._input.slice(e)),
                t
              );
            },
            unput: function (t) {
              var e = t.length,
                r = t.split(/(?:\r\n?|\n)/g);
              if (
                ((this._input = t + this._input),
                (this.yytext = this.yytext.substr(0, this.yytext.length - e)),
                (this.yyleng = this.yytext.length),
                (this.offset -= e),
                (this.match = this.match.substr(0, this.match.length - e)),
                (this.matched = this.matched.substr(
                  0,
                  this.matched.length - e,
                )),
                r.length > 1)
              ) {
                (this.yylineno -= r.length - 1),
                  (this.yylloc.last_line = this.yylineno + 1);
                var n = this.match,
                  i = n.split(/(?:\r\n?|\n)/g);
                1 === i.length &&
                  (i = (n = this.matched).split(/(?:\r\n?|\n)/g)),
                  (this.yylloc.last_column = i[i.length - 1].length);
              } else this.yylloc.last_column -= e;
              return (
                (this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng),
                (this.done = !1),
                this
              );
            },
            more: function () {
              return (this._more = !0), this;
            },
            reject: function () {
              if (this.options.backtrack_lexer) this._backtrack = !0;
              else {
                var t = "";
                this.yylloc && (t = " on line " + (this.yylineno + 1));
                var e = this.constructLexErrorInfo(
                  "Lexical error" +
                    t +
                    ": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).",
                  !1,
                );
                this._signaled_error_token =
                  this.parseError(e.errStr, e, this.JisonLexerError) ||
                  this.ERROR;
              }
              return this;
            },
            less: function (t) {
              return this.unput(this.match.slice(t));
            },
            pastInput: function (t, e) {
              var r = this.matched.substring(
                0,
                this.matched.length - this.match.length,
              );
              t < 0 ? (t = r.length) : t || (t = 20),
                e < 0 ? (e = r.length) : e || (e = 1);
              var n = (r = r.substr(2 * -t - 2))
                .replace(/\r\n|\r/g, "\n")
                .split("\n");
              return (
                (r = (n = n.slice(-e)).join("\n")).length > t &&
                  (r = "..." + r.substr(-t)),
                r
              );
            },
            upcomingInput: function (t, e) {
              var r = this.match;
              t < 0 ? (t = r.length + this._input.length) : t || (t = 20),
                e < 0 ? (e = t) : e || (e = 1),
                r.length < 2 * t + 2 &&
                  (r += this._input.substring(0, 2 * t + 2));
              var n = r.replace(/\r\n|\r/g, "\n").split("\n");
              return (
                (r = (n = n.slice(0, e)).join("\n")).length > t &&
                  (r = r.substring(0, t) + "..."),
                r
              );
            },
            showPosition: function (t, e) {
              var r = this.pastInput(t).replace(/\s/g, " "),
                n = new Array(r.length + 1).join("-");
              return (
                r + this.upcomingInput(e).replace(/\s/g, " ") + "\n" + n + "^"
              );
            },
            deriveLocationInfo: function (t, e, r, n) {
              var i = {
                first_line: 1,
                first_column: 0,
                last_line: 1,
                last_column: 0,
                range: [0, 0],
              };
              return (
                t &&
                  ((i.first_line = 0 | t.first_line),
                  (i.last_line = 0 | t.last_line),
                  (i.first_column = 0 | t.first_column),
                  (i.last_column = 0 | t.last_column),
                  t.range &&
                    ((i.range[0] = 0 | t.range[0]),
                    (i.range[1] = 0 | t.range[1]))),
                (i.first_line <= 0 || i.last_line < i.first_line) &&
                  (i.first_line <= 0 &&
                    e &&
                    ((i.first_line = 0 | e.last_line),
                    (i.first_column = 0 | e.last_column),
                    e.range && (i.range[0] = 0 | t.range[1])),
                  (i.last_line <= 0 || i.last_line < i.first_line) &&
                    r &&
                    ((i.last_line = 0 | r.first_line),
                    (i.last_column = 0 | r.first_column),
                    r.range && (i.range[1] = 0 | t.range[0])),
                  i.first_line <= 0 &&
                    n &&
                    (i.last_line <= 0 || n.last_line <= i.last_line) &&
                    ((i.first_line = 0 | n.first_line),
                    (i.first_column = 0 | n.first_column),
                    n.range && (i.range[0] = 0 | n.range[0])),
                  i.last_line <= 0 &&
                    n &&
                    (i.first_line <= 0 || n.first_line >= i.first_line) &&
                    ((i.last_line = 0 | n.last_line),
                    (i.last_column = 0 | n.last_column),
                    n.range && (i.range[1] = 0 | n.range[1]))),
                i.last_line <= 0 &&
                  (i.first_line <= 0
                    ? ((i.first_line = this.yylloc.first_line),
                      (i.last_line = this.yylloc.last_line),
                      (i.first_column = this.yylloc.first_column),
                      (i.last_column = this.yylloc.last_column),
                      (i.range[0] = this.yylloc.range[0]),
                      (i.range[1] = this.yylloc.range[1]))
                    : ((i.last_line = this.yylloc.last_line),
                      (i.last_column = this.yylloc.last_column),
                      (i.range[1] = this.yylloc.range[1]))),
                i.first_line <= 0 &&
                  ((i.first_line = i.last_line),
                  (i.first_column = 0),
                  (i.range[1] = i.range[0])),
                i.first_column < 0 && (i.first_column = 0),
                i.last_column < 0 &&
                  (i.last_column = i.first_column > 0 ? i.first_column : 80),
                i
              );
            },
            prettyPrintRange: function (t, e, r) {
              t = this.deriveLocationInfo(t, e, r);
              var n = (this.matched + this._input).split("\n"),
                i = Math.max(1, e ? e.first_line : t.first_line - 3),
                o = Math.max(1, r ? r.last_line : t.last_line + 1),
                a = (1 + Math.log10(1 | o)) | 0,
                u = new Array(a).join(" "),
                c = [],
                l = n.slice(i - 1, o + 1).map(function (e, r) {
                  var n = r + i,
                    o = (u + n).substr(-a) + ": " + e,
                    l = new Array(a + 1).join("^"),
                    s = 3,
                    f = 0;
                  (n === t.first_line
                    ? ((s += t.first_column),
                      (f = Math.max(
                        2,
                        (n === t.last_line ? t.last_column : e.length) -
                          t.first_column +
                          1,
                      )))
                    : n === t.last_line
                    ? (f = Math.max(2, t.last_column + 1))
                    : n > t.first_line &&
                      n < t.last_line &&
                      (f = Math.max(2, e.length + 1)),
                  f) &&
                    ((o +=
                      "\n" +
                      l +
                      new Array(s).join(".") +
                      new Array(f).join("^")),
                    e.trim().length > 0 && c.push(r));
                  return (o = o.replace(/\t/g, " "));
                });
              if (c.length > 4) {
                var s = c[1] + 1,
                  f = c[c.length - 2] - 1,
                  p = new Array(a + 1).join(" ") + "  (...continued...)";
                (p +=
                  "\n" + new Array(a + 1).join("-") + "  (---------------)"),
                  l.splice(s, f - s + 1, p);
              }
              return l.join("\n");
            },
            describeYYLLOC: function (t, e) {
              var r,
                n = t.first_line,
                i = t.last_line,
                o = t.first_column,
                a = t.last_column;
              if (
                (0 === i - n
                  ? ((r = "line " + n + ", "),
                    (r +=
                      a - o <= 1 ? "column " + o : "columns " + o + " .. " + a))
                  : (r =
                      "lines " +
                      n +
                      "(column " +
                      o +
                      ") .. " +
                      i +
                      "(column " +
                      a +
                      ")"),
                t.range && e)
              ) {
                var u = t.range[0],
                  c = t.range[1] - 1;
                r +=
                  c <= u
                    ? " {String Offset: " + u + "}"
                    : " {String Offset range: " + u + " .. " + c + "}";
              }
              return r;
            },
            test_match: function (t, e) {
              var r, n, i, o, a;
              if (
                (this.options.backtrack_lexer &&
                  (i = {
                    yylineno: this.yylineno,
                    yylloc: {
                      first_line: this.yylloc.first_line,
                      last_line: this.yylloc.last_line,
                      first_column: this.yylloc.first_column,
                      last_column: this.yylloc.last_column,
                      range: this.yylloc.range.slice(0),
                    },
                    yytext: this.yytext,
                    match: this.match,
                    matches: this.matches,
                    matched: this.matched,
                    yyleng: this.yyleng,
                    offset: this.offset,
                    _more: this._more,
                    _input: this._input,
                    yy: this.yy,
                    conditionStack: this.conditionStack.slice(0),
                    done: this.done,
                  }),
                (a = (o = t[0]).length),
                (n = o.split(/(?:\r\n?|\n)/g)).length > 1
                  ? ((this.yylineno += n.length - 1),
                    (this.yylloc.last_line = this.yylineno + 1),
                    (this.yylloc.last_column = n[n.length - 1].length))
                  : (this.yylloc.last_column += a),
                (this.yytext += o),
                (this.match += o),
                (this.matched += o),
                (this.matches = t),
                (this.yyleng = this.yytext.length),
                (this.yylloc.range[1] += a),
                (this.offset += a),
                (this._more = !1),
                (this._backtrack = !1),
                (this._input = this._input.slice(a)),
                (r = this.performAction.call(
                  this,
                  this.yy,
                  e,
                  this.conditionStack[this.conditionStack.length - 1],
                )),
                this.done && this._input && (this.done = !1),
                r)
              )
                return r;
              if (this._backtrack) {
                for (var u in i) this[u] = i[u];
                return (this.__currentRuleSet__ = null), !1;
              }
              return (
                !!this._signaled_error_token &&
                ((r = this._signaled_error_token),
                (this._signaled_error_token = !1),
                r)
              );
            },
            next: function () {
              if (this.done) return this.clear(), this.EOF;
              var t, e, r, n;
              this._input || (this.done = !0), this._more || this.clear();
              var i = this.__currentRuleSet__;
              if (
                !(
                  i ||
                  ((i = this.__currentRuleSet__ = this._currentRules()) &&
                    i.rules)
                )
              ) {
                var o = "";
                this.options.trackPosition &&
                  (o = " on line " + (this.yylineno + 1));
                var a = this.constructLexErrorInfo(
                  "Internal lexer engine error" +
                    o +
                    ': The lex grammar programmer pushed a non-existing condition name "' +
                    this.topState() +
                    '"; this is a fatal error and should be reported to the application programmer team!',
                  !1,
                );
                return (
                  this.parseError(a.errStr, a, this.JisonLexerError) ||
                  this.ERROR
                );
              }
              for (
                var u = i.rules,
                  c = i.__rule_regexes,
                  l = i.__rule_count,
                  s = 1;
                s <= l;
                s++
              )
                if (
                  (r = this._input.match(c[s])) &&
                  (!e || r[0].length > e[0].length)
                ) {
                  if (((e = r), (n = s), this.options.backtrack_lexer)) {
                    if (!1 !== (t = this.test_match(r, u[s]))) return t;
                    if (this._backtrack) {
                      e = void 0;
                      continue;
                    }
                    return !1;
                  }
                  if (!this.options.flex) break;
                }
              if (e) return !1 !== (t = this.test_match(e, u[n])) && t;
              if (this._input) {
                o = "";
                this.options.trackPosition &&
                  (o = " on line " + (this.yylineno + 1));
                a = this.constructLexErrorInfo(
                  "Lexical error" + o + ": Unrecognized text.",
                  this.options.lexerErrorsAreRecoverable,
                );
                var f = this._input,
                  p = this.topState(),
                  h = this.conditionStack.length;
                return (
                  (t =
                    this.parseError(a.errStr, a, this.JisonLexerError) ||
                    this.ERROR) === this.ERROR &&
                    (this.matches ||
                      f !== this._input ||
                      p !== this.topState() ||
                      h !== this.conditionStack.length ||
                      this.input()),
                  t
                );
              }
              return (this.done = !0), this.clear(), this.EOF;
            },
            lex: function () {
              var t;
              for (
                "function" == typeof this.pre_lex &&
                  (t = this.pre_lex.call(this, 0)),
                  "function" == typeof this.options.pre_lex &&
                    (t = this.options.pre_lex.call(this, t) || t),
                  this.yy &&
                    "function" == typeof this.yy.pre_lex &&
                    (t = this.yy.pre_lex.call(this, t) || t);
                !t;

              )
                t = this.next();
              return (
                this.yy &&
                  "function" == typeof this.yy.post_lex &&
                  (t = this.yy.post_lex.call(this, t) || t),
                "function" == typeof this.options.post_lex &&
                  (t = this.options.post_lex.call(this, t) || t),
                "function" == typeof this.post_lex &&
                  (t = this.post_lex.call(this, t) || t),
                t
              );
            },
            fastLex: function () {
              for (var t; !t; ) t = this.next();
              return t;
            },
            canIUse: function () {
              return {
                fastLex:
                  !(
                    "function" == typeof this.pre_lex ||
                    "function" == typeof this.options.pre_lex ||
                    (this.yy && "function" == typeof this.yy.pre_lex) ||
                    (this.yy && "function" == typeof this.yy.post_lex) ||
                    "function" == typeof this.options.post_lex ||
                    "function" == typeof this.post_lex
                  ) && "function" == typeof this.fastLex,
              };
            },
            begin: function (t) {
              return this.pushState(t);
            },
            pushState: function (t) {
              return (
                this.conditionStack.push(t),
                (this.__currentRuleSet__ = null),
                this
              );
            },
            popState: function () {
              return this.conditionStack.length - 1 > 0
                ? ((this.__currentRuleSet__ = null), this.conditionStack.pop())
                : this.conditionStack[0];
            },
            topState: function (t) {
              return (t = this.conditionStack.length - 1 - Math.abs(t || 0)) >=
                0
                ? this.conditionStack[t]
                : "INITIAL";
            },
            _currentRules: function () {
              return this.conditionStack.length &&
                this.conditionStack[this.conditionStack.length - 1]
                ? this.conditions[
                    this.conditionStack[this.conditionStack.length - 1]
                  ]
                : this.conditions.INITIAL;
            },
            stateStackSize: function () {
              return this.conditionStack.length;
            },
            options: { trackPosition: !0 },
            JisonLexerError: t,
            performAction: function (t, e, r) {
              if (1 !== e) return this.simpleCaseActionClusters[e];
            },
            simpleCaseActionClusters: {
              /*! Conditions:: INITIAL */
              /*! Rule::       (--[0-9a-z-A-Z-]*) */
              0: 13,
              /*! Conditions:: INITIAL */
              /*! Rule::       \* */
              2: 5,
              /*! Conditions:: INITIAL */
              /*! Rule::       \/ */
              3: 6,
              /*! Conditions:: INITIAL */
              /*! Rule::       \+ */
              4: 3,
              /*! Conditions:: INITIAL */
              /*! Rule::       - */
              5: 4,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)px\b */
              6: 15,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)cm\b */
              7: 15,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)mm\b */
              8: 15,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)in\b */
              9: 15,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)pt\b */
              10: 15,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)pc\b */
              11: 15,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)deg\b */
              12: 16,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)grad\b */
              13: 16,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)rad\b */
              14: 16,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)turn\b */
              15: 16,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)s\b */
              16: 17,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ms\b */
              17: 17,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)Hz\b */
              18: 18,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)kHz\b */
              19: 18,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dpi\b */
              20: 19,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dpcm\b */
              21: 19,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)dppx\b */
              22: 19,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)em\b */
              23: 20,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ex\b */
              24: 21,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)ch\b */
              25: 22,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)rem\b */
              26: 23,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vw\b */
              27: 25,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vh\b */
              28: 24,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vmin\b */
              29: 26,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)vmax\b */
              30: 27,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)% */
              31: 28,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([0-9]+(\.[0-9]*)?|\.[0-9]+)\b */
              32: 11,
              /*! Conditions:: INITIAL */
              /*! Rule::       (calc) */
              33: 9,
              /*! Conditions:: INITIAL */
              /*! Rule::       (var) */
              34: 12,
              /*! Conditions:: INITIAL */
              /*! Rule::       ([a-z]+) */
              35: 10,
              /*! Conditions:: INITIAL */
              /*! Rule::       \( */
              36: 7,
              /*! Conditions:: INITIAL */
              /*! Rule::       \) */
              37: 8,
              /*! Conditions:: INITIAL */
              /*! Rule::       , */
              38: 14,
              /*! Conditions:: INITIAL */
              /*! Rule::       $ */
              39: 1,
            },
            rules: [
              /^(?:(--[\d\-A-Za-z]*))/,
              /^(?:\s+)/,
              /^(?:\*)/,
              /^(?:\/)/,
              /^(?:\+)/,
              /^(?:-)/,
              /^(?:(\d+(\.\d*)?|\.\d+)px\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)in\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)s\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)em\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,
              /^(?:(\d+(\.\d*)?|\.\d+)%)/,
              /^(?:(\d+(\.\d*)?|\.\d+)\b)/,
              /^(?:(calc))/,
              /^(?:(var))/,
              /^(?:([a-z]+))/,
              /^(?:\()/,
              /^(?:\))/,
              /^(?:,)/,
              /^(?:$)/,
            ],
            conditions: {
              INITIAL: {
                rules: [
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
                  33, 34, 35, 36, 37, 38, 39,
                ],
                inclusive: !0,
              },
            },
          };
          return e;
        })();
        function a() {
          this.yy = {};
        }
        return (i.lexer = o), (a.prototype = i), (i.Parser = a), new a();
      })();
      (e.parser = r),
        (e.Parser = r.Parser),
        (e.parse = function () {
          return r.parse.apply(r, arguments);
        });
    },
    12997: (t, e, r) => {
      "use strict";
      function n(t, e, r) {
        (t.prototype = e.prototype = r), (r.constructor = t);
      }
      function i(t, e) {
        var r = Object.create(t.prototype);
        for (var n in e) r[n] = e[n];
        return r;
      }
      function o() {}
      r.d(e, { ZP: () => w, B8: () => j });
      var a = 0.7,
        u = 1 / a,
        c = "\\s*([+-]?\\d+)\\s*",
        l = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        s = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        f = /^#([0-9a-f]{3,8})$/,
        p = new RegExp(`^rgb\\(${c},${c},${c}\\)$`),
        h = new RegExp(`^rgb\\(${s},${s},${s}\\)$`),
        d = new RegExp(`^rgba\\(${c},${c},${c},${l}\\)$`),
        y = new RegExp(`^rgba\\(${s},${s},${s},${l}\\)$`),
        v = new RegExp(`^hsl\\(${l},${s},${s}\\)$`),
        m = new RegExp(`^hsla\\(${l},${s},${s},${l}\\)$`),
        g = {
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
      function b() {
        return this.rgb().formatHex();
      }
      function x() {
        return this.rgb().formatRgb();
      }
      function w(t) {
        var e, r;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = f.exec(t))
            ? ((r = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === r
                ? O(e)
                : 3 === r
                ? new _(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1,
                  )
                : 8 === r
                ? S(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255,
                  )
                : 4 === r
                ? S(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255,
                  )
                : null)
            : (e = p.exec(t))
            ? new _(e[1], e[2], e[3], 1)
            : (e = h.exec(t))
            ? new _(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1,
              )
            : (e = d.exec(t))
            ? S(e[1], e[2], e[3], e[4])
            : (e = y.exec(t))
            ? S(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4],
              )
            : (e = v.exec(t))
            ? T(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = m.exec(t))
            ? T(e[1], e[2] / 100, e[3] / 100, e[4])
            : g.hasOwnProperty(t)
            ? O(g[t])
            : "transparent" === t
            ? new _(NaN, NaN, NaN, 0)
            : null
        );
      }
      function O(t) {
        return new _((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function S(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN), new _(t, e, r, n);
      }
      function j(t, e, r, n) {
        return 1 === arguments.length
          ? ((i = t) instanceof o || (i = w(i)),
            i ? new _((i = i.rgb()).r, i.g, i.b, i.opacity) : new _())
          : new _(t, e, r, null == n ? 1 : n);
        var i;
      }
      function _(t, e, r, n) {
        (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
      }
      function P() {
        return `#${M(this.r)}${M(this.g)}${M(this.b)}`;
      }
      function k() {
        const t = A(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${E(this.r)}, ${E(this.g)}, ${E(
          this.b,
        )}${1 === t ? ")" : `, ${t})`}`;
      }
      function A(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function E(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function M(t) {
        return ((t = E(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function T(t, e, r, n) {
        return (
          n <= 0
            ? (t = e = r = NaN)
            : r <= 0 || r >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new I(t, e, r, n)
        );
      }
      function C(t) {
        if (t instanceof I) return new I(t.h, t.s, t.l, t.opacity);
        if ((t instanceof o || (t = w(t)), !t)) return new I();
        if (t instanceof I) return t;
        var e = (t = t.rgb()).r / 255,
          r = t.g / 255,
          n = t.b / 255,
          i = Math.min(e, r, n),
          a = Math.max(e, r, n),
          u = NaN,
          c = a - i,
          l = (a + i) / 2;
        return (
          c
            ? ((u =
                e === a
                  ? (r - n) / c + 6 * (r < n)
                  : r === a
                  ? (n - e) / c + 2
                  : (e - r) / c + 4),
              (c /= l < 0.5 ? a + i : 2 - a - i),
              (u *= 60))
            : (c = l > 0 && l < 1 ? 0 : u),
          new I(u, c, l, t.opacity)
        );
      }
      function I(t, e, r, n) {
        (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
      }
      function N(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function D(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function R(t, e, r) {
        return (
          255 *
          (t < 60
            ? e + ((r - e) * t) / 60
            : t < 180
            ? r
            : t < 240
            ? e + ((r - e) * (240 - t)) / 60
            : e)
        );
      }
      n(o, w, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: b,
        formatHex: b,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return C(this).formatHsl();
        },
        formatRgb: x,
        toString: x,
      }),
        n(
          _,
          j,
          i(o, {
            brighter(t) {
              return (
                (t = null == t ? u : Math.pow(u, t)),
                new _(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? a : Math.pow(a, t)),
                new _(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new _(E(this.r), E(this.g), E(this.b), A(this.opacity));
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
            hex: P,
            formatHex: P,
            formatHex8: function () {
              return `#${M(this.r)}${M(this.g)}${M(this.b)}${M(
                255 * (isNaN(this.opacity) ? 1 : this.opacity),
              )}`;
            },
            formatRgb: k,
            toString: k,
          }),
        ),
        n(
          I,
          function (t, e, r, n) {
            return 1 === arguments.length
              ? C(t)
              : new I(t, e, r, null == n ? 1 : n);
          },
          i(o, {
            brighter(t) {
              return (
                (t = null == t ? u : Math.pow(u, t)),
                new I(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? a : Math.pow(a, t)),
                new I(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < 0.5 ? r : 1 - r) * e,
                i = 2 * r - n;
              return new _(
                R(t >= 240 ? t - 240 : t + 120, i, n),
                R(t, i, n),
                R(t < 120 ? t + 240 : t - 120, i, n),
                this.opacity,
              );
            },
            clamp() {
              return new I(N(this.h), D(this.s), D(this.l), A(this.opacity));
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
              const t = A(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${N(this.h)}, ${
                100 * D(this.s)
              }%, ${100 * D(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          }),
        );
    },
    49879: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      const n = (t) => () => t;
    },
    58983: (t, e, r) => {
      "use strict";
      function n(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (r) {
            return t * (1 - r) + e * r;
          }
        );
      }
      r.d(e, { Z: () => n });
    },
    6063: (t, e, r) => {
      "use strict";
      r.d(e, { ZP: () => l });
      var n = r(12997);
      function i(t, e, r, n, i) {
        var o = t * t,
          a = o * t;
        return (
          ((1 - 3 * t + 3 * o - a) * e +
            (4 - 6 * o + 3 * a) * r +
            (1 + 3 * t + 3 * o - 3 * a) * n +
            a * i) /
          6
        );
      }
      var o = r(49879);
      function a(t, e) {
        return function (r) {
          return t + r * e;
        };
      }
      function u(t) {
        return 1 == (t = +t)
          ? c
          : function (e, r) {
              return r - e
                ? (function (t, e, r) {
                    return (
                      (t = Math.pow(t, r)),
                      (e = Math.pow(e, r) - t),
                      (r = 1 / r),
                      function (n) {
                        return Math.pow(t + n * e, r);
                      }
                    );
                  })(e, r, t)
                : (0, o.Z)(isNaN(e) ? r : e);
            };
      }
      function c(t, e) {
        var r = e - t;
        return r ? a(t, r) : (0, o.Z)(isNaN(t) ? e : t);
      }
      const l = (function t(e) {
        var r = u(e);
        function i(t, e) {
          var i = r((t = (0, n.B8)(t)).r, (e = (0, n.B8)(e)).r),
            o = r(t.g, e.g),
            a = r(t.b, e.b),
            u = c(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = i(e)),
              (t.g = o(e)),
              (t.b = a(e)),
              (t.opacity = u(e)),
              t + ""
            );
          };
        }
        return (i.gamma = t), i;
      })(1);
      function s(t) {
        return function (e) {
          var r,
            i,
            o = e.length,
            a = new Array(o),
            u = new Array(o),
            c = new Array(o);
          for (r = 0; r < o; ++r)
            (i = (0, n.B8)(e[r])),
              (a[r] = i.r || 0),
              (u[r] = i.g || 0),
              (c[r] = i.b || 0);
          return (
            (a = t(a)),
            (u = t(u)),
            (c = t(c)),
            (i.opacity = 1),
            function (t) {
              return (i.r = a(t)), (i.g = u(t)), (i.b = c(t)), i + "";
            }
          );
        };
      }
      s(function (t) {
        var e = t.length - 1;
        return function (r) {
          var n =
              r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), e - 1) : Math.floor(r * e),
            o = t[n],
            a = t[n + 1],
            u = n > 0 ? t[n - 1] : 2 * o - a,
            c = n < e - 1 ? t[n + 2] : 2 * a - o;
          return i((r - n / e) * e, u, o, a, c);
        };
      }),
        s(function (t) {
          var e = t.length;
          return function (r) {
            var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
              o = t[(n + e - 1) % e],
              a = t[n % e],
              u = t[(n + 1) % e],
              c = t[(n + 2) % e];
            return i((r - n / e) * e, o, a, u, c);
          };
        });
    },
    78308: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => a });
      var n = r(58983),
        i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        o = new RegExp(i.source, "g");
      function a(t, e) {
        var r,
          a,
          u,
          c = (i.lastIndex = o.lastIndex = 0),
          l = -1,
          s = [],
          f = [];
        for (t += "", e += ""; (r = i.exec(t)) && (a = o.exec(e)); )
          (u = a.index) > c &&
            ((u = e.slice(c, u)), s[l] ? (s[l] += u) : (s[++l] = u)),
            (r = r[0]) === (a = a[0])
              ? s[l]
                ? (s[l] += a)
                : (s[++l] = a)
              : ((s[++l] = null), f.push({ i: l, x: (0, n.Z)(r, a) })),
            (c = o.lastIndex);
        return (
          c < e.length && ((u = e.slice(c)), s[l] ? (s[l] += u) : (s[++l] = u)),
          s.length < 2
            ? f[0]
              ? (function (t) {
                  return function (e) {
                    return t(e) + "";
                  };
                })(f[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(e)
            : ((e = f.length),
              function (t) {
                for (var r, n = 0; n < e; ++n) s[(r = f[n]).i] = r.x(t);
                return s.join("");
              })
        );
      }
    },
    2514: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => o, x: () => u });
      var n = r(24701),
        i = r(63051);
      function o() {
        var t,
          e,
          r = (0, i.Z)().unknown(void 0),
          a = r.domain,
          u = r.range,
          c = 0,
          l = 1,
          s = !1,
          f = 0,
          p = 0,
          h = 0.5;
        function d() {
          var r = a().length,
            n = l < c,
            i = n ? l : c,
            o = n ? c : l;
          (t = (o - i) / Math.max(1, r - f + 2 * p)),
            s && (t = Math.floor(t)),
            (i += (o - i - t * (r - f)) * h),
            (e = t * (1 - f)),
            s && ((i = Math.round(i)), (e = Math.round(e)));
          var d = (function (t, e, r) {
            (t = +t),
              (e = +e),
              (r =
                (i = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : i < 3
                  ? 1
                  : +r);
            for (
              var n = -1,
                i = 0 | Math.max(0, Math.ceil((e - t) / r)),
                o = new Array(i);
              ++n < i;

            )
              o[n] = t + n * r;
            return o;
          })(r).map(function (e) {
            return i + t * e;
          });
          return u(n ? d.reverse() : d);
        }
        return (
          delete r.unknown,
          (r.domain = function (t) {
            return arguments.length ? (a(t), d()) : a();
          }),
          (r.range = function (t) {
            return arguments.length
              ? (([c, l] = t), (c = +c), (l = +l), d())
              : [c, l];
          }),
          (r.rangeRound = function (t) {
            return ([c, l] = t), (c = +c), (l = +l), (s = !0), d();
          }),
          (r.bandwidth = function () {
            return e;
          }),
          (r.step = function () {
            return t;
          }),
          (r.round = function (t) {
            return arguments.length ? ((s = !!t), d()) : s;
          }),
          (r.padding = function (t) {
            return arguments.length ? ((f = Math.min(1, (p = +t))), d()) : f;
          }),
          (r.paddingInner = function (t) {
            return arguments.length ? ((f = Math.min(1, t)), d()) : f;
          }),
          (r.paddingOuter = function (t) {
            return arguments.length ? ((p = +t), d()) : p;
          }),
          (r.align = function (t) {
            return arguments.length
              ? ((h = Math.max(0, Math.min(1, t))), d())
              : h;
          }),
          (r.copy = function () {
            return o(a(), [c, l])
              .round(s)
              .paddingInner(f)
              .paddingOuter(p)
              .align(h);
          }),
          n.o.apply(d(), arguments)
        );
      }
      function a(t) {
        var e = t.copy;
        return (
          (t.padding = t.paddingOuter),
          delete t.paddingInner,
          delete t.paddingOuter,
          (t.copy = function () {
            return a(e());
          }),
          t
        );
      }
      function u() {
        return a(o.apply(null, arguments).paddingInner(1));
      }
    },
    24701: (t, e, r) => {
      "use strict";
      function n(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(e).domain(t);
        }
        return this;
      }
      function i(t, e) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" == typeof t ? this.interpolator(t) : this.range(t);
            break;
          default:
            this.domain(t),
              "function" == typeof e ? this.interpolator(e) : this.range(e);
        }
        return this;
      }
      r.d(e, { O: () => i, o: () => n });
    },
    63051: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => s, O: () => l });
      class n extends Map {
        constructor(t, e = u) {
          if (
            (super(),
            Object.defineProperties(this, {
              _intern: { value: new Map() },
              _key: { value: e },
            }),
            null != t)
          )
            for (const [e, r] of t) this.set(e, r);
        }
        get(t) {
          return super.get(i(this, t));
        }
        has(t) {
          return super.has(i(this, t));
        }
        set(t, e) {
          return super.set(o(this, t), e);
        }
        delete(t) {
          return super.delete(a(this, t));
        }
      }
      Set;
      function i({ _intern: t, _key: e }, r) {
        const n = e(r);
        return t.has(n) ? t.get(n) : r;
      }
      function o({ _intern: t, _key: e }, r) {
        const n = e(r);
        return t.has(n) ? t.get(n) : (t.set(n, r), r);
      }
      function a({ _intern: t, _key: e }, r) {
        const n = e(r);
        return t.has(n) && ((r = t.get(n)), t.delete(n)), r;
      }
      function u(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
      }
      var c = r(24701);
      const l = Symbol("implicit");
      function s() {
        var t = new n(),
          e = [],
          r = [],
          i = l;
        function o(n) {
          let o = t.get(n);
          if (void 0 === o) {
            if (i !== l) return i;
            t.set(n, (o = e.push(n) - 1));
          }
          return r[o % r.length];
        }
        return (
          (o.domain = function (r) {
            if (!arguments.length) return e.slice();
            (e = []), (t = new n());
            for (const n of r) t.has(n) || t.set(n, e.push(n) - 1);
            return o;
          }),
          (o.range = function (t) {
            return arguments.length ? ((r = Array.from(t)), o) : r.slice();
          }),
          (o.unknown = function (t) {
            return arguments.length ? ((i = t), o) : i;
          }),
          (o.copy = function () {
            return s(e, r).unknown(i);
          }),
          c.o.apply(o, arguments),
          o
        );
      }
    },
    62478: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      Array.prototype.slice;
      function n(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
    },
    24792: (t, e, r) => {
      "use strict";
      function n(t) {
        return function () {
          return t;
        };
      }
      r.d(e, { Z: () => n });
    },
    88097: (t, e, r) => {
      "use strict";
      r.d(e, { d: () => l });
      const n = Math.PI,
        i = 2 * n,
        o = 1e-6,
        a = i - o;
      function u(t) {
        this._ += t[0];
        for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e];
      }
      class c {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == t
                ? u
                : (function (t) {
                    let e = Math.floor(t);
                    if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
                    if (e > 15) return u;
                    const r = 10 ** e;
                    return function (t) {
                      this._ += t[0];
                      for (let e = 1, n = t.length; e < n; ++e)
                        this._ += Math.round(arguments[e] * r) / r + t[e];
                    };
                  })(t));
        }
        moveTo(t, e) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(t, e) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
        }
        quadraticCurveTo(t, e, r, n) {
          this._append`Q${+t},${+e},${(this._x1 = +r)},${(this._y1 = +n)}`;
        }
        bezierCurveTo(t, e, r, n, i, o) {
          this._append`C${+t},${+e},${+r},${+n},${(this._x1 = +i)},${(this._y1 =
            +o)}`;
        }
        arcTo(t, e, r, i, a) {
          if (((t = +t), (e = +e), (r = +r), (i = +i), (a = +a) < 0))
            throw new Error(`negative radius: ${a}`);
          let u = this._x1,
            c = this._y1,
            l = r - t,
            s = i - e,
            f = u - t,
            p = c - e,
            h = f * f + p * p;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
          else if (h > o)
            if (Math.abs(p * l - s * f) > o && a) {
              let d = r - u,
                y = i - c,
                v = l * l + s * s,
                m = d * d + y * y,
                g = Math.sqrt(v),
                b = Math.sqrt(h),
                x =
                  a * Math.tan((n - Math.acos((v + h - m) / (2 * g * b))) / 2),
                w = x / b,
                O = x / g;
              Math.abs(w - 1) > o && this._append`L${t + w * f},${e + w * p}`,
                this._append`A${a},${a},0,0,${+(p * d > f * y)},${(this._x1 =
                  t + O * l)},${(this._y1 = e + O * s)}`;
            } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
          else;
        }
        arc(t, e, r, u, c, l) {
          if (((t = +t), (e = +e), (l = !!l), (r = +r) < 0))
            throw new Error(`negative radius: ${r}`);
          let s = r * Math.cos(u),
            f = r * Math.sin(u),
            p = t + s,
            h = e + f,
            d = 1 ^ l,
            y = l ? u - c : c - u;
          null === this._x1
            ? this._append`M${p},${h}`
            : (Math.abs(this._x1 - p) > o || Math.abs(this._y1 - h) > o) &&
              this._append`L${p},${h}`,
            r &&
              (y < 0 && (y = (y % i) + i),
              y > a
                ? this._append`A${r},${r},0,1,${d},${t - s},${
                    e - f
                  }A${r},${r},0,1,${d},${(this._x1 = p)},${(this._y1 = h)}`
                : y > o &&
                  this._append`A${r},${r},0,${+(y >= n)},${d},${(this._x1 =
                    t + r * Math.cos(c))},${(this._y1 = e + r * Math.sin(c))}`);
        }
        rect(t, e, r, n) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
            +e)}h${(r = +r)}v${+n}h${-r}Z`;
        }
        toString() {
          return this._;
        }
      }
      function l(t) {
        let e = 3;
        return (
          (t.digits = function (r) {
            if (!arguments.length) return e;
            if (null == r) e = null;
            else {
              const t = Math.floor(r);
              if (!(t >= 0)) throw new RangeError(`invalid digits: ${r}`);
              e = t;
            }
            return t;
          }),
          () => new c(e)
        );
      }
      c.prototype;
    },
  },
]);

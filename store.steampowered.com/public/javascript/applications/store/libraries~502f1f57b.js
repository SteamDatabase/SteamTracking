/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3807],
  {
    41721: function (t, e, n) {
      var r;
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
          var n,
            r,
            i,
            o,
            a,
            u,
            l,
            s,
            f = t.constructor,
            p = f.precision;
          if (!t.s || !e.s) return e.s || (e = new f(t)), c ? T(e, p) : e;
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
                ? ((r = l), (o = -o), (u = s.length))
                : ((r = s), (i = a), (u = l.length)),
                o > (u = (a = Math.ceil(p / v)) > u ? a + 1 : u + 1) &&
                  ((o = u), (r.length = 1)),
                r.reverse();
              o--;

            )
              r.push(0);
            r.reverse();
          }
          for (
            (u = l.length) - (o = s.length) < 0 &&
              ((o = u), (r = s), (s = l), (l = r)),
              n = 0;
            o;

          )
            (n = ((l[--o] = l[o] + s[o] + n) / y) | 0), (l[o] %= y);
          for (n && (l.unshift(n), ++i), u = l.length; 0 == l[--u]; ) l.pop();
          return (e.d = l), (e.e = i), c ? T(e, p) : e;
        }
        function w(t, e, n) {
          if (t !== ~~t || t < e || t > n) throw Error(s + t);
        }
        function O(t) {
          var e,
            n,
            r,
            i = t.length - 1,
            o = "",
            a = t[0];
          if (i > 0) {
            for (o += a, e = 1; e < i; e++)
              (r = t[e] + ""), (n = v - r.length) && (o += P(n)), (o += r);
            (a = t[e]), (n = v - (r = a + "").length) && (o += P(n));
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
                n,
                r,
                i,
                o = this;
              if (((t = new o.constructor(t)), o.s !== t.s)) return o.s || -t.s;
              if (o.e !== t.e) return (o.e > t.e) ^ (o.s < 0) ? 1 : -1;
              for (
                e = 0, n = (r = o.d.length) < (i = t.d.length) ? r : i;
                e < n;
                ++e
              )
                if (o.d[e] !== t.d[e])
                  return (o.d[e] > t.d[e]) ^ (o.s < 0) ? 1 : -1;
              return r === i ? 0 : (r > i) ^ (o.s < 0) ? 1 : -1;
            }),
          (b.decimalPlaces = b.dp =
            function () {
              var t = this,
                e = t.d.length - 1,
                n = (e - t.e) * v;
              if ((e = t.d[e])) for (; e % 10 == 0; e /= 10) n--;
              return n < 0 ? 0 : n;
            }),
          (b.dividedBy = b.div =
            function (t) {
              return j(this, new this.constructor(t));
            }),
          (b.dividedToIntegerBy = b.idiv =
            function (t) {
              var e = this.constructor;
              return T(j(this, new e(t), 0, 1), e.precision);
            }),
          (b.equals = b.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (b.exponent = function () {
            return E(this);
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
                n = this,
                r = n.constructor,
                i = r.precision,
                a = i + 5;
              if (void 0 === t) t = new r(10);
              else if ((t = new r(t)).s < 1 || t.eq(o)) throw Error(l + "NaN");
              if (n.s < 1) throw Error(l + (n.s ? "NaN" : "-Infinity"));
              return n.eq(o)
                ? new r(0)
                : ((c = !1), (e = j(k(n, a), k(t, a), a)), (c = !0), T(e, i));
            }),
          (b.minus = b.sub =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? _(e, t) : x(e, ((t.s = -t.s), t))
              );
            }),
          (b.modulo = b.mod =
            function (t) {
              var e,
                n = this,
                r = n.constructor,
                i = r.precision;
              if (!(t = new r(t)).s) throw Error(l + "NaN");
              return n.s
                ? ((c = !1), (e = j(n, t, 0, 1).times(t)), (c = !0), n.minus(e))
                : T(new r(n), i);
            }),
          (b.naturalExponential = b.exp =
            function () {
              return S(this);
            }),
          (b.naturalLogarithm = b.ln =
            function () {
              return k(this);
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
                e.s == t.s ? x(e, t) : _(e, ((t.s = -t.s), t))
              );
            }),
          (b.precision = b.sd =
            function (t) {
              var e,
                n,
                r,
                i = this;
              if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
                throw Error(s + t);
              if (
                ((e = E(i) + 1),
                (n = (r = i.d.length - 1) * v + 1),
                (r = i.d[r]))
              ) {
                for (; r % 10 == 0; r /= 10) n--;
                for (r = i.d[0]; r >= 10; r /= 10) n++;
              }
              return t && e > n ? e : n;
            }),
          (b.squareRoot = b.sqrt =
            function () {
              var t,
                e,
                n,
                r,
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
                t = E(u),
                  c = !1,
                  0 == (i = Math.sqrt(+u)) || i == 1 / 0
                    ? (((e = O(u.d)).length + t) % 2 == 0 && (e += "0"),
                      (i = Math.sqrt(e)),
                      (t = p((t + 1) / 2) - (t < 0 || t % 2)),
                      (r = new s(
                        (e =
                          i == 1 / 0
                            ? "5e" + t
                            : (e = i.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1,
                              ) + t),
                      )))
                    : (r = new s(i.toString())),
                  i = a = (n = s.precision) + 3;
                ;

              )
                if (
                  ((r = (o = r).plus(j(u, o, a + 2)).times(0.5)),
                  O(o.d).slice(0, a) === (e = O(r.d)).slice(0, a))
                ) {
                  if (((e = e.slice(a - 3, a + 1)), i == a && "4999" == e)) {
                    if ((T(o, n + 1, 0), o.times(o).eq(u))) {
                      r = o;
                      break;
                    }
                  } else if ("9999" != e) break;
                  a += 4;
                }
              return (c = !0), T(r, n);
            }),
          (b.times = b.mul =
            function (t) {
              var e,
                n,
                r,
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
                  n = f.e + t.e,
                  (l = h.length) < (s = d.length) &&
                    ((o = h), (h = d), (d = o), (a = l), (l = s), (s = a)),
                  o = [],
                  r = a = l + s;
                r--;

              )
                o.push(0);
              for (r = s; --r >= 0; ) {
                for (e = 0, i = l + r; i > r; )
                  (u = o[i] + d[r] * h[i - r - 1] + e),
                    (o[i--] = u % y | 0),
                    (e = (u / y) | 0);
                o[i] = (o[i] + e) % y | 0;
              }
              for (; !o[--a]; ) o.pop();
              return (
                e ? ++n : o.shift(),
                (t.d = o),
                (t.e = n),
                c ? T(t, p.precision) : t
              );
            }),
          (b.toDecimalPlaces = b.todp =
            function (t, e) {
              var n = this,
                r = n.constructor;
              return (
                (n = new r(n)),
                void 0 === t
                  ? n
                  : (w(t, 0, a),
                    void 0 === e ? (e = r.rounding) : w(e, 0, 8),
                    T(n, t + E(n) + 1, e))
              );
            }),
          (b.toExponential = function (t, e) {
            var n,
              r = this,
              i = r.constructor;
            return (
              void 0 === t
                ? (n = C(r, !0))
                : (w(t, 0, a),
                  void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                  (n = C((r = T(new i(r), t + 1, e)), !0, t + 1))),
              n
            );
          }),
          (b.toFixed = function (t, e) {
            var n,
              r,
              i = this,
              o = i.constructor;
            return void 0 === t
              ? C(i)
              : (w(t, 0, a),
                void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                (n = C(
                  (r = T(new o(i), t + E(i) + 1, e)).abs(),
                  !1,
                  t + E(r) + 1,
                )),
                i.isneg() && !i.isZero() ? "-" + n : n);
          }),
          (b.toInteger = b.toint =
            function () {
              var t = this,
                e = t.constructor;
              return T(new e(t), E(t) + 1, e.rounding);
            }),
          (b.toNumber = function () {
            return +this;
          }),
          (b.toPower = b.pow =
            function (t) {
              var e,
                n,
                r,
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
              if (((r = f.precision), t.eq(o))) return T(s, r);
              if (((u = (e = t.e) >= (n = t.d.length - 1)), (a = s.s), u)) {
                if ((n = h < 0 ? -h : h) <= m) {
                  for (
                    i = new f(o), e = Math.ceil(r / v + 4), c = !1;
                    n % 2 && N((i = i.times(s)).d, e), 0 !== (n = p(n / 2));

                  )
                    N((s = s.times(s)).d, e);
                  return (c = !0), t.s < 0 ? new f(o).div(i) : T(i, r);
                }
              } else if (a < 0) throw Error(l + "NaN");
              return (
                (a = a < 0 && 1 & t.d[Math.max(e, n)] ? -1 : 1),
                (s.s = 1),
                (c = !1),
                (i = t.times(k(s, r + 12))),
                (c = !0),
                ((i = S(i)).s = a),
                i
              );
            }),
          (b.toPrecision = function (t, e) {
            var n,
              r,
              i = this,
              o = i.constructor;
            return (
              void 0 === t
                ? (r = C(i, (n = E(i)) <= o.toExpNeg || n >= o.toExpPos))
                : (w(t, 1, a),
                  void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                  (r = C(
                    (i = T(new o(i), t, e)),
                    t <= (n = E(i)) || n <= o.toExpNeg,
                    t,
                  ))),
              r
            );
          }),
          (b.toSignificantDigits = b.tosd =
            function (t, e) {
              var n = this.constructor;
              return (
                void 0 === t
                  ? ((t = n.precision), (e = n.rounding))
                  : (w(t, 1, a), void 0 === e ? (e = n.rounding) : w(e, 0, 8)),
                T(new n(this), t, e)
              );
            }),
          (b.toString =
            b.valueOf =
            b.val =
            b.toJSON =
              function () {
                var t = this,
                  e = E(t),
                  n = t.constructor;
                return C(t, e <= n.toExpNeg || e >= n.toExpPos);
              });
        var j = (function () {
          function t(t, e) {
            var n,
              r = 0,
              i = t.length;
            for (t = t.slice(); i--; )
              (n = t[i] * e + r), (t[i] = n % y | 0), (r = (n / y) | 0);
            return r && t.unshift(r), t;
          }
          function e(t, e, n, r) {
            var i, o;
            if (n != r) o = n > r ? 1 : -1;
            else
              for (i = o = 0; i < n; i++)
                if (t[i] != e[i]) {
                  o = t[i] > e[i] ? 1 : -1;
                  break;
                }
            return o;
          }
          function n(t, e, n) {
            for (var r = 0; n--; )
              (t[n] -= r),
                (r = t[n] < e[n] ? 1 : 0),
                (t[n] = r * y + t[n] - e[n]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (r, i, o, a) {
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
              j,
              S,
              A,
              P,
              k,
              M = r.constructor,
              _ = r.s == i.s ? 1 : -1,
              C = r.d,
              N = i.d;
            if (!r.s) return new M(r);
            if (!i.s) throw Error(l + "Division by zero");
            for (
              c = r.e - i.e,
                P = N.length,
                S = C.length,
                m = (d = new M(_)).d = [],
                s = 0;
              N[s] == (C[s] || 0);

            )
              ++s;
            if (
              (N[s] > (C[s] || 0) && --c,
              (w =
                null == o ? (o = M.precision) : a ? o + (E(r) - E(i)) + 1 : o) <
                0)
            )
              return new M(0);
            if (((w = (w / v + 2) | 0), (s = 0), 1 == P))
              for (f = 0, N = N[0], w++; (s < S || f) && w--; s++)
                (O = f * y + (C[s] || 0)),
                  (m[s] = (O / N) | 0),
                  (f = O % N | 0);
            else {
              for (
                (f = (y / (N[0] + 1)) | 0) > 1 &&
                  ((N = t(N, f)),
                  (C = t(C, f)),
                  (P = N.length),
                  (S = C.length)),
                  j = P,
                  b = (g = C.slice(0, P)).length;
                b < P;

              )
                g[b++] = 0;
              (k = N.slice()).unshift(0), (A = N[0]), N[1] >= y / 2 && ++A;
              do {
                (f = 0),
                  (u = e(N, g, P, b)) < 0
                    ? ((x = g[0]),
                      P != b && (x = x * y + (g[1] || 0)),
                      (f = (x / A) | 0) > 1
                        ? (f >= y && (f = y - 1),
                          1 ==
                            (u = e(
                              (p = t(N, f)),
                              g,
                              (h = p.length),
                              (b = g.length),
                            )) && (f--, n(p, P < h ? k : N, h)))
                        : (0 == f && (u = f = 1), (p = N.slice())),
                      (h = p.length) < b && p.unshift(0),
                      n(g, p, b),
                      -1 == u &&
                        (u = e(N, g, P, (b = g.length))) < 1 &&
                        (f++, n(g, P < b ? k : N, b)),
                      (b = g.length))
                    : 0 === u && (f++, (g = [0])),
                  (m[s++] = f),
                  u && g[0] ? (g[b++] = C[j] || 0) : ((g = [C[j]]), (b = 1));
              } while ((j++ < S || void 0 !== g[0]) && w--);
            }
            return m[0] || m.shift(), (d.e = c), T(d, a ? o + E(d) + 1 : o);
          };
        })();
        function S(t, e) {
          var n,
            r,
            i,
            a,
            u,
            l = 0,
            s = 0,
            p = t.constructor,
            d = p.precision;
          if (E(t) > 16) throw Error(f + E(t));
          if (!t.s) return new p(o);
          for (
            null == e ? ((c = !1), (u = d)) : (u = e), a = new p(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(a)), (s += 5);
          for (
            u += ((Math.log(h(2, s)) / Math.LN10) * 2 + 5) | 0,
              n = r = i = new p(o),
              p.precision = u;
            ;

          ) {
            if (
              ((r = T(r.times(t), u)),
              (n = n.times(++l)),
              O((a = i.plus(j(r, n, u))).d).slice(0, u) === O(i.d).slice(0, u))
            ) {
              for (; s--; ) i = T(i.times(i), u);
              return (p.precision = d), null == e ? ((c = !0), T(i, d)) : i;
            }
            i = a;
          }
        }
        function E(t) {
          for (var e = t.e * v, n = t.d[0]; n >= 10; n /= 10) e++;
          return e;
        }
        function A(t, e, n) {
          if (e > t.LN10.sd())
            throw (
              ((c = !0),
              n && (t.precision = n),
              Error(l + "LN10 precision limit exceeded"))
            );
          return T(new t(t.LN10), e);
        }
        function P(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function k(t, e) {
          var n,
            r,
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
            return null == e && (c = !0), A(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (r = (n = O(v)).charAt(0)),
            (a = E(y)),
            !(Math.abs(a) < 15e14))
          )
            return (
              (f = A(m, p + 2, g).times(a + "")),
              (y = k(new m(r + "." + n.slice(1)), p - 10).plus(f)),
              (m.precision = g),
              null == e ? ((c = !0), T(y, g)) : y
            );
          for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
            (r = (n = O((y = y.times(t)).d)).charAt(0)), d++;
          for (
            a = E(y),
              r > 1
                ? ((y = new m("0." + n)), a++)
                : (y = new m(r + "." + n.slice(1))),
              s = u = y = j(y.minus(o), y.plus(o), p),
              h = T(y.times(y), p),
              i = 3;
            ;

          ) {
            if (
              ((u = T(u.times(h), p)),
              O((f = s.plus(j(u, new m(i), p))).d).slice(0, p) ===
                O(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== a && (s = s.plus(A(m, p + 2, g).times(a + ""))),
                (s = j(s, new m(d), p)),
                (m.precision = g),
                null == e ? ((c = !0), T(s, g)) : s
              );
            (s = f), (i += 2);
          }
        }
        function M(t, e) {
          var n, r, i;
          for (
            (n = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
              (r = e.search(/e/i)) > 0
                ? (n < 0 && (n = r),
                  (n += +e.slice(r + 1)),
                  (e = e.substring(0, r)))
                : n < 0 && (n = e.length),
              r = 0;
            48 === e.charCodeAt(r);

          )
            ++r;
          for (i = e.length; 48 === e.charCodeAt(i - 1); ) --i;
          if ((e = e.slice(r, i))) {
            if (
              ((i -= r),
              (n = n - r - 1),
              (t.e = p(n / v)),
              (t.d = []),
              (r = (n + 1) % v),
              n < 0 && (r += v),
              r < i)
            ) {
              for (r && t.d.push(+e.slice(0, r)), i -= v; r < i; )
                t.d.push(+e.slice(r, (r += v)));
              (e = e.slice(r)), (r = v - e.length);
            } else r -= i;
            for (; r--; ) e += "0";
            if ((t.d.push(+e), c && (t.e > g || t.e < -g))) throw Error(f + n);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function T(t, e, n) {
          var r,
            i,
            o,
            a,
            u,
            l,
            s,
            d,
            m = t.d;
          for (a = 1, o = m[0]; o >= 10; o /= 10) a++;
          if ((r = e - a) < 0) (r += v), (i = e), (s = m[(d = 0)]);
          else {
            if ((d = Math.ceil((r + 1) / v)) >= (o = m.length)) return t;
            for (s = o = m[d], a = 1; o >= 10; o /= 10) a++;
            i = (r %= v) - v + a;
          }
          if (
            (void 0 !== n &&
              ((u = (s / (o = h(10, a - i - 1))) % 10 | 0),
              (l = e < 0 || void 0 !== m[d + 1] || s % o),
              (l =
                n < 4
                  ? (u || l) && (0 == n || n == (t.s < 0 ? 3 : 2))
                  : u > 5 ||
                    (5 == u &&
                      (4 == n ||
                        l ||
                        (6 == n &&
                          (r > 0 ? (i > 0 ? s / h(10, a - i) : 0) : m[d - 1]) %
                            10 &
                            1) ||
                        n == (t.s < 0 ? 8 : 7))))),
            e < 1 || !m[0])
          )
            return (
              l
                ? ((o = E(t)),
                  (m.length = 1),
                  (e = e - o - 1),
                  (m[0] = h(10, (v - (e % v)) % v)),
                  (t.e = p(-e / v) || 0))
                : ((m.length = 1), (m[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == r
              ? ((m.length = d), (o = 1), d--)
              : ((m.length = d + 1),
                (o = h(10, v - r)),
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
          for (r = m.length; 0 === m[--r]; ) m.pop();
          if (c && (t.e > g || t.e < -g)) throw Error(f + E(t));
          return t;
        }
        function _(t, e) {
          var n,
            r,
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
            return e.s ? (e.s = -e.s) : (e = new h(t)), c ? T(e, d) : e;
          if (
            ((l = t.d),
            (p = e.d),
            (r = e.e),
            (s = t.e),
            (l = l.slice()),
            (a = s - r))
          ) {
            for (
              (f = a < 0)
                ? ((n = l), (a = -a), (u = p.length))
                : ((n = p), (r = s), (u = l.length)),
                a > (i = Math.max(Math.ceil(d / v), u) + 2) &&
                  ((a = i), (n.length = 1)),
                n.reverse(),
                i = a;
              i--;

            )
              n.push(0);
            n.reverse();
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
            f && ((n = l), (l = p), (p = n), (e.s = -e.s)),
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
          for (; 0 === l[0]; l.shift()) --r;
          return l[0] ? ((e.d = l), (e.e = r), c ? T(e, d) : e) : new h(0);
        }
        function C(t, e, n) {
          var r,
            i = E(t),
            o = O(t.d),
            a = o.length;
          return (
            e
              ? (n && (r = n - a) > 0
                  ? (o = o.charAt(0) + "." + o.slice(1) + P(r))
                  : a > 1 && (o = o.charAt(0) + "." + o.slice(1)),
                (o = o + (i < 0 ? "e" : "e+") + i))
              : i < 0
                ? ((o = "0." + P(-i - 1) + o),
                  n && (r = n - a) > 0 && (o += P(r)))
                : i >= a
                  ? ((o += P(i + 1 - a)),
                    n && (r = n - i - 1) > 0 && (o = o + "." + P(r)))
                  : ((r = i + 1) < a && (o = o.slice(0, r) + "." + o.slice(r)),
                    n &&
                      (r = n - a) > 0 &&
                      (i + 1 === a && (o += "."), (o += P(r)))),
            t.s < 0 ? "-" + o : o
          );
        }
        function N(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function D(t) {
          if (!t || "object" != typeof t) throw Error(l + "Object expected");
          var e,
            n,
            r,
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
            if (void 0 !== (r = t[(n = i[e])])) {
              if (!(p(r) === r && r >= i[e + 1] && r <= i[e + 2]))
                throw Error(s + n + ": " + r);
              this[n] = r;
            }
          if (void 0 !== (r = t[(n = "LN10")])) {
            if (r != Math.LN10) throw Error(s + n + ": " + r);
            this[n] = new this(r);
          }
          return this;
        }
        (u = (function t(e) {
          var n, r, i;
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
                : M(e, t.toString());
            }
            if ("string" != typeof t) throw Error(s + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (e.s = -1))
                : (e.s = 1),
              !d.test(t))
            )
              throw Error(s + t);
            M(e, t);
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
            (o.config = o.set = D),
            void 0 === e && (e = {}),
            e)
          )
            for (
              i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"],
                n = 0;
              n < i.length;

            )
              e.hasOwnProperty((r = i[n++])) || (e[r] = this[r]);
          return o.config(e), o;
        })(u)),
          (u.default = u.Decimal = u),
          (o = new u(1)),
          void 0 ===
            (r = function () {
              return u;
            }.call(e, n, e, t)) || (t.exports = r);
      })();
    },
    84682: (t) => {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function i(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function o(t, e, r, o, a) {
        if ("function" != typeof r)
          throw new TypeError("The listener must be a function");
        var u = new i(r, o || t, a),
          c = n ? n + e : e;
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
        0 == --t._eventsCount ? (t._events = new r()) : delete t._events[e];
      }
      function u() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (u.prototype.eventNames = function () {
          var t,
            r,
            i = [];
          if (0 === this._eventsCount) return i;
          for (r in (t = this._events))
            e.call(t, r) && i.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (u.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, o = r.length, a = new Array(o); i < o; i++)
            a[i] = r[i].fn;
          return a;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (u.prototype.emit = function (t, e, r, i, o, a) {
          var u = n ? n + t : t;
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
                return s.fn.call(s.context, e, r), !0;
              case 4:
                return s.fn.call(s.context, e, r, i), !0;
              case 5:
                return s.fn.call(s.context, e, r, i, o), !0;
              case 6:
                return s.fn.call(s.context, e, r, i, o, a), !0;
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
                  s[l].fn.call(s[l].context, e, r);
                  break;
                case 4:
                  s[l].fn.call(s[l].context, e, r, i);
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
        (u.prototype.on = function (t, e, n) {
          return o(this, t, e, n, !1);
        }),
        (u.prototype.once = function (t, e, n) {
          return o(this, t, e, n, !0);
        }),
        (u.prototype.removeListener = function (t, e, r, i) {
          var o = n ? n + t : t;
          if (!this._events[o]) return this;
          if (!e) return a(this, o), this;
          var u = this._events[o];
          if (u.fn)
            u.fn !== e ||
              (i && !u.once) ||
              (r && u.context !== r) ||
              a(this, o);
          else {
            for (var c = 0, l = [], s = u.length; c < s; c++)
              (u[c].fn !== e ||
                (i && !u[c].once) ||
                (r && u[c].context !== r)) &&
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
              ? ((e = n ? n + t : t), this._events[e] && a(this, e))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.addListener = u.prototype.on),
        (u.prefixed = n),
        (u.EventEmitter = u),
        (t.exports = u);
    },
    62902: (t) => {
      t.exports = function (t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      };
    },
    63889: (t) => {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (!e(t[n], n, t)) return !1;
        return !0;
      };
    },
    9357: (t, e, n) => {
      var r = n(94025);
      t.exports = function (t, e) {
        return !!(null == t ? 0 : t.length) && r(t, e, 0) > -1;
      };
    },
    82629: (t) => {
      t.exports = function (t, e, n) {
        for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
          if (n(e, t[r])) return !0;
        return !1;
      };
    },
    68447: (t) => {
      t.exports = function (t) {
        return t.split("");
      };
    },
    27157: (t, e, n) => {
      var r = n(12761);
      t.exports = function (t, e) {
        var n = !0;
        return (
          r(t, function (t, r, i) {
            return (n = !!e(t, r, i));
          }),
          n
        );
      };
    },
    17425: (t, e, n) => {
      var r = n(59123);
      t.exports = function (t, e, n) {
        for (var i = -1, o = t.length; ++i < o; ) {
          var a = t[i],
            u = e(a);
          if (null != u && (void 0 === c ? u == u && !r(u) : n(u, c)))
            var c = u,
              l = a;
        }
        return l;
      };
    },
    59861: (t) => {
      t.exports = function (t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
          if (e(t[o], o, t)) return o;
        return -1;
      };
    },
    85720: (t, e, n) => {
      var r = n(39809),
        i = n(79020);
      t.exports = function t(e, n, o, a, u) {
        var c = -1,
          l = e.length;
        for (o || (o = i), u || (u = []); ++c < l; ) {
          var s = e[c];
          n > 0 && o(s)
            ? n > 1
              ? t(s, n - 1, o, a, u)
              : r(u, s)
            : a || (u[u.length] = s);
        }
        return u;
      };
    },
    6515: (t) => {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    94025: (t, e, n) => {
      var r = n(59861),
        i = n(50254),
        o = n(62095);
      t.exports = function (t, e, n) {
        return e == e ? o(t, e, n) : r(t, i, n);
      };
    },
    50254: (t) => {
      t.exports = function (t) {
        return t != t;
      };
    },
    66983: (t) => {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    79971: (t, e, n) => {
      var r = n(366),
        i = n(16986),
        o = n(60647),
        a = n(3007),
        u = n(40429),
        c = n(43630),
        l = n(23208),
        s = n(7414),
        f = n(5370);
      t.exports = function (t, e, n) {
        e = e.length
          ? r(e, function (t) {
              return f(t)
                ? function (e) {
                    return i(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [s];
        var p = -1;
        e = r(e, c(o));
        var h = a(t, function (t, n, i) {
          return {
            criteria: r(e, function (e) {
              return e(t);
            }),
            index: ++p,
            value: t,
          };
        });
        return u(h, function (t, e) {
          return l(t, e, n);
        });
      };
    },
    12397: (t) => {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function (t, r, i, o) {
        for (var a = -1, u = n(e((r - t) / (i || 1)), 0), c = Array(u); u--; )
          (c[o ? u : ++a] = t), (t += i);
        return c;
      };
    },
    52162: (t, e, n) => {
      var r = n(7414),
        i = n(89369),
        o = n(22997);
      t.exports = function (t, e) {
        return o(i(t, e, r), t + "");
      };
    },
    94304: (t, e, n) => {
      var r = n(10693),
        i = n(83881),
        o = n(7414),
        a = i
          ? function (t, e) {
              return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0,
              });
            }
          : o;
      t.exports = a;
    },
    66426: (t) => {
      t.exports = function (t, e, n) {
        var r = -1,
          i = t.length;
        e < 0 && (e = -e > i ? 0 : i + e),
          (n = n > i ? i : n) < 0 && (n += i),
          (i = e > n ? 0 : (n - e) >>> 0),
          (e >>>= 0);
        for (var o = Array(i); ++r < i; ) o[r] = t[r + e];
        return o;
      };
    },
    68578: (t, e, n) => {
      var r = n(12761);
      t.exports = function (t, e) {
        var n;
        return (
          r(t, function (t, r, i) {
            return !(n = e(t, r, i));
          }),
          !!n
        );
      };
    },
    40429: (t) => {
      t.exports = function (t, e) {
        var n = t.length;
        for (t.sort(e); n--; ) t[n] = t[n].value;
        return t;
      };
    },
    83147: (t, e, n) => {
      var r = n(24839),
        i = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, r(t) + 1).replace(i, "") : t;
      };
    },
    94744: (t, e, n) => {
      var r = n(99026),
        i = n(9357),
        o = n(82629),
        a = n(85664),
        u = n(87527),
        c = n(50037);
      t.exports = function (t, e, n) {
        var l = -1,
          s = i,
          f = t.length,
          p = !0,
          h = [],
          d = h;
        if (n) (p = !1), (s = o);
        else if (f >= 200) {
          var y = e ? null : u(t);
          if (y) return c(y);
          (p = !1), (s = a), (d = new r());
        } else d = e ? [] : h;
        t: for (; ++l < f; ) {
          var v = t[l],
            m = e ? e(v) : v;
          if (((v = n || 0 !== v ? v : 0), p && m == m)) {
            for (var g = d.length; g--; ) if (d[g] === m) continue t;
            e && d.push(m), h.push(v);
          } else s(d, m, n) || (d !== h && d.push(m), h.push(v));
        }
        return h;
      };
    },
    90023: (t, e, n) => {
      var r = n(66426);
      t.exports = function (t, e, n) {
        var i = t.length;
        return (n = void 0 === n ? i : n), !e && n >= i ? t : r(t, e, n);
      };
    },
    3808: (t, e, n) => {
      var r = n(59123);
      t.exports = function (t, e) {
        if (t !== e) {
          var n = void 0 !== t,
            i = null === t,
            o = t == t,
            a = r(t),
            u = void 0 !== e,
            c = null === e,
            l = e == e,
            s = r(e);
          if (
            (!c && !s && !a && t > e) ||
            (a && u && l && !c && !s) ||
            (i && u && l) ||
            (!n && l) ||
            !o
          )
            return 1;
          if (
            (!i && !a && !s && t < e) ||
            (s && n && o && !i && !a) ||
            (c && n && o) ||
            (!u && o) ||
            !l
          )
            return -1;
        }
        return 0;
      };
    },
    23208: (t, e, n) => {
      var r = n(3808);
      t.exports = function (t, e, n) {
        for (
          var i = -1,
            o = t.criteria,
            a = e.criteria,
            u = o.length,
            c = n.length;
          ++i < u;

        ) {
          var l = r(o[i], a[i]);
          if (l) return i >= c ? l : l * ("desc" == n[i] ? -1 : 1);
        }
        return t.index - e.index;
      };
    },
    12133: (t, e, n) => {
      var r = n(90023),
        i = n(32799),
        o = n(79525),
        a = n(92938);
      t.exports = function (t) {
        return function (e) {
          e = a(e);
          var n = i(e) ? o(e) : void 0,
            u = n ? n[0] : e.charAt(0),
            c = n ? r(n, 1).join("") : e.slice(1);
          return u[t]() + c;
        };
      };
    },
    51897: (t, e, n) => {
      var r = n(60647),
        i = n(1161),
        o = n(34840);
      t.exports = function (t) {
        return function (e, n, a) {
          var u = Object(e);
          if (!i(e)) {
            var c = r(n, 3);
            (e = o(e)),
              (n = function (t) {
                return c(u[t], t, u);
              });
          }
          var l = t(e, n, a);
          return l > -1 ? u[c ? e[l] : l] : void 0;
        };
      };
    },
    97506: (t, e, n) => {
      var r = n(12397),
        i = n(41757),
        o = n(69419);
      t.exports = function (t) {
        return function (e, n, a) {
          return (
            a && "number" != typeof a && i(e, n, a) && (n = a = void 0),
            (e = o(e)),
            void 0 === n ? ((n = e), (e = 0)) : (n = o(n)),
            (a = void 0 === a ? (e < n ? 1 : -1) : o(a)),
            r(e, n, a, t)
          );
        };
      };
    },
    87527: (t, e, n) => {
      var r = n(5851),
        i = n(76016),
        o = n(50037),
        a =
          r && 1 / o(new r([, -0]))[1] == 1 / 0
            ? function (t) {
                return new r(t);
              }
            : i;
      t.exports = a;
    },
    32799: (t) => {
      var e = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    79020: (t, e, n) => {
      var r = n(99513),
        i = n(88636),
        o = n(5370),
        a = r ? r.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return o(t) || i(t) || !!(a && t && t[a]);
      };
    },
    41757: (t, e, n) => {
      var r = n(35800),
        i = n(1161),
        o = n(11874),
        a = n(60486);
      t.exports = function (t, e, n) {
        if (!a(n)) return !1;
        var u = typeof e;
        return (
          !!("number" == u
            ? i(n) && o(e, n.length)
            : "string" == u && e in n) && r(n[e], t)
        );
      };
    },
    89369: (t, e, n) => {
      var r = n(62902),
        i = Math.max;
      t.exports = function (t, e, n) {
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
            return (l[e] = n(c)), r(t, this, l);
          }
        );
      };
    },
    22997: (t, e, n) => {
      var r = n(94304),
        i = n(77164)(r);
      t.exports = i;
    },
    77164: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var n = 0,
          r = 0;
        return function () {
          var i = e(),
            o = 16 - (i - r);
          if (((r = i), o > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    62095: (t) => {
      t.exports = function (t, e, n) {
        for (var r = n - 1, i = t.length; ++r < i; ) if (t[r] === e) return r;
        return -1;
      };
    },
    79525: (t, e, n) => {
      var r = n(68447),
        i = n(32799),
        o = n(28356);
      t.exports = function (t) {
        return i(t) ? o(t) : r(t);
      };
    },
    24839: (t) => {
      var e = /\s/;
      t.exports = function (t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)); );
        return n;
      };
    },
    28356: (t) => {
      var e = "\\ud800-\\udfff",
        n = "[" + e + "]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^" + e + "]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + i + ")" + "?",
        l = "[\\ufe0e\\ufe0f]?",
        s =
          l + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")" + l + c + ")*"),
        f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
        p = RegExp(i + "(?=" + i + ")|" + f + s, "g");
      t.exports = function (t) {
        return t.match(p) || [];
      };
    },
    10693: (t) => {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    76964: (t, e, n) => {
      var r = n(60486),
        i = n(76824),
        o = n(61056),
        a = Math.max,
        u = Math.min;
      t.exports = function (t, e, n) {
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
          var n = c,
            r = l;
          return (c = l = void 0), (d = e), (f = t.apply(r, n));
        }
        function b(t) {
          var n = t - h;
          return void 0 === h || n >= e || n < 0 || (v && t - d >= s);
        }
        function x() {
          var t = i();
          if (b(t)) return w(t);
          p = setTimeout(
            x,
            (function (t) {
              var n = e - (t - h);
              return v ? u(n, s - (t - d)) : n;
            })(t),
          );
        }
        function w(t) {
          return (p = void 0), m && c ? g(t) : ((c = l = void 0), f);
        }
        function O() {
          var t = i(),
            n = b(t);
          if (((c = arguments), (l = this), (h = t), n)) {
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
          r(n) &&
            ((y = !!n.leading),
            (s = (v = "maxWait" in n) ? a(o(n.maxWait) || 0, e) : s),
            (m = "trailing" in n ? !!n.trailing : m)),
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
    55084: (t, e, n) => {
      var r = n(63889),
        i = n(27157),
        o = n(60647),
        a = n(5370),
        u = n(41757);
      t.exports = function (t, e, n) {
        var c = a(t) ? r : i;
        return n && u(t, e, n) && (e = void 0), c(t, o(e, 3));
      };
    },
    29200: (t, e, n) => {
      var r = n(51897)(n(29156));
      t.exports = r;
    },
    29156: (t, e, n) => {
      var r = n(59861),
        i = n(60647),
        o = n(41151),
        a = Math.max;
      t.exports = function (t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
      };
    },
    6392: (t, e, n) => {
      var r = n(85720),
        i = n(81319);
      t.exports = function (t, e) {
        return r(i(t, e), 1);
      };
    },
    62588: (t, e, n) => {
      var r = n(66203),
        i = n(95753);
      t.exports = function (t) {
        return !0 === t || !1 === t || (i(t) && "[object Boolean]" == r(t));
      };
    },
    49198: (t, e, n) => {
      var r = n(10358);
      t.exports = function (t, e) {
        return r(t, e);
      };
    },
    98176: (t, e, n) => {
      var r = n(554);
      t.exports = function (t) {
        return r(t) && t != +t;
      };
    },
    38716: (t) => {
      t.exports = function (t) {
        return null == t;
      };
    },
    554: (t, e, n) => {
      var r = n(66203),
        i = n(95753);
      t.exports = function (t) {
        return "number" == typeof t || (i(t) && "[object Number]" == r(t));
      };
    },
    54794: (t) => {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    11217: (t, e, n) => {
      var r = n(84423),
        i = n(53120),
        o = n(60647);
      t.exports = function (t, e) {
        var n = {};
        return (
          (e = o(e, 3)),
          i(t, function (t, i, o) {
            r(n, i, e(t, i, o));
          }),
          n
        );
      };
    },
    24149: (t, e, n) => {
      var r = n(17425),
        i = n(6515),
        o = n(7414);
      t.exports = function (t) {
        return t && t.length ? r(t, o, i) : void 0;
      };
    },
    65793: (t, e, n) => {
      var r = n(17425),
        i = n(66983),
        o = n(7414);
      t.exports = function (t) {
        return t && t.length ? r(t, o, i) : void 0;
      };
    },
    76016: (t) => {
      t.exports = function () {};
    },
    76824: (t, e, n) => {
      var r = n(49656);
      t.exports = function () {
        return r.Date.now();
      };
    },
    76072: (t, e, n) => {
      var r = n(97506)();
      t.exports = r;
    },
    45446: (t, e, n) => {
      var r = n(13412),
        i = n(60647),
        o = n(68578),
        a = n(5370),
        u = n(41757);
      t.exports = function (t, e, n) {
        var c = a(t) ? r : o;
        return n && u(t, e, n) && (e = void 0), c(t, i(e, 3));
      };
    },
    2045: (t, e, n) => {
      var r = n(85720),
        i = n(79971),
        o = n(52162),
        a = n(41757),
        u = o(function (t, e) {
          if (null == t) return [];
          var n = e.length;
          return (
            n > 1 && a(t, e[0], e[1])
              ? (e = [])
              : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
            i(t, r(e, 1), [])
          );
        });
      t.exports = u;
    },
    48679: (t, e, n) => {
      var r = n(76964),
        i = n(60486);
      t.exports = function (t, e, n) {
        var o = !0,
          a = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (
          i(n) &&
            ((o = "leading" in n ? !!n.leading : o),
            (a = "trailing" in n ? !!n.trailing : a)),
          r(t, e, { leading: o, maxWait: e, trailing: a })
        );
      };
    },
    69419: (t, e, n) => {
      var r = n(61056),
        i = 1 / 0;
      t.exports = function (t) {
        return t
          ? (t = r(t)) === i || t === -1 / 0
            ? 17976931348623157e292 * (t < 0 ? -1 : 1)
            : t == t
              ? t
              : 0
          : 0 === t
            ? t
            : 0;
      };
    },
    41151: (t, e, n) => {
      var r = n(69419);
      t.exports = function (t) {
        var e = r(t),
          n = e % 1;
        return e == e ? (n ? e - n : e) : 0;
      };
    },
    61056: (t, e, n) => {
      var r = n(83147),
        i = n(60486),
        o = n(59123),
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
        t = r(t);
        var n = u.test(t);
        return n || c.test(t) ? l(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t;
      };
    },
    87518: (t, e, n) => {
      var r = n(60647),
        i = n(94744);
      t.exports = function (t, e) {
        return t && t.length ? i(t, r(e, 2)) : [];
      };
    },
    70758: (t, e, n) => {
      var r = n(12133)("toUpperCase");
      t.exports = r;
    },
    36904: (t, e, n) => {
      "use strict";
      function r() {
        var t = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state,
        );
        null != t && this.setState(t);
      }
      function i(t) {
        this.setState(
          function (e) {
            var n = this.constructor.getDerivedStateFromProps(t, e);
            return null != n ? n : null;
          }.bind(this),
        );
      }
      function o(t, e) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = t),
            (this.state = e),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      function a(t) {
        var e = t.prototype;
        if (!e || !e.isReactComponent)
          throw new Error("Can only polyfill class components");
        if (
          "function" != typeof t.getDerivedStateFromProps &&
          "function" != typeof e.getSnapshotBeforeUpdate
        )
          return t;
        var n = null,
          a = null,
          u = null;
        if (
          ("function" == typeof e.componentWillMount
            ? (n = "componentWillMount")
            : "function" == typeof e.UNSAFE_componentWillMount &&
              (n = "UNSAFE_componentWillMount"),
          "function" == typeof e.componentWillReceiveProps
            ? (a = "componentWillReceiveProps")
            : "function" == typeof e.UNSAFE_componentWillReceiveProps &&
              (a = "UNSAFE_componentWillReceiveProps"),
          "function" == typeof e.componentWillUpdate
            ? (u = "componentWillUpdate")
            : "function" == typeof e.UNSAFE_componentWillUpdate &&
              (u = "UNSAFE_componentWillUpdate"),
          null !== n || null !== a || null !== u)
        ) {
          var c = t.displayName || t.name,
            l =
              "function" == typeof t.getDerivedStateFromProps
                ? "getDerivedStateFromProps()"
                : "getSnapshotBeforeUpdate()";
          throw Error(
            "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
              c +
              " uses " +
              l +
              " but also contains the following legacy lifecycles:" +
              (null !== n ? "\n  " + n : "") +
              (null !== a ? "\n  " + a : "") +
              (null !== u ? "\n  " + u : "") +
              "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",
          );
        }
        if (
          ("function" == typeof t.getDerivedStateFromProps &&
            ((e.componentWillMount = r), (e.componentWillReceiveProps = i)),
          "function" == typeof e.getSnapshotBeforeUpdate)
        ) {
          if ("function" != typeof e.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
            );
          e.componentWillUpdate = o;
          var s = e.componentDidUpdate;
          e.componentDidUpdate = function (t, e, n) {
            var r = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : n;
            s.call(this, t, e, r);
          };
        }
        return t;
      }
      n.r(e),
        n.d(e, { polyfill: () => a }),
        (r.__suppressDeprecationWarning = !0),
        (i.__suppressDeprecationWarning = !0),
        (o.__suppressDeprecationWarning = !0);
    },
    15819: (t, e, n) => {
      "use strict";
      n.d(e, { ZP: () => ae, bO: () => et });
      var r = n(47427),
        i = n(25816),
        o = n.n(i),
        a = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty;
      function l(t, e) {
        return function (n, r, i) {
          return t(n, r, i) && e(n, r, i);
        };
      }
      function s(t) {
        return function (e, n, r) {
          if (!e || !n || "object" != typeof e || "object" != typeof n)
            return t(e, n, r);
          var i = r.cache,
            o = i.get(e),
            a = i.get(n);
          if (o && a) return o === n && a === e;
          i.set(e, n), i.set(n, e);
          var u = t(e, n, r);
          return i.delete(e), i.delete(n), u;
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
      function m(t, e, n) {
        var r = t.length;
        if (e.length !== r) return !1;
        for (; r-- > 0; ) if (!n.equals(t[r], e[r], r, r, t, e, n)) return !1;
        return !0;
      }
      function g(t, e) {
        return h(t.getTime(), e.getTime());
      }
      function b(t, e, n) {
        if (t.size !== e.size) return !1;
        for (
          var r, i, o = {}, a = t.entries(), u = 0;
          (r = a.next()) && !r.done;

        ) {
          for (
            var c = e.entries(), l = !1, s = 0;
            (i = c.next()) && !i.done;

          ) {
            var f = r.value,
              p = f[0],
              h = f[1],
              d = i.value,
              y = d[0],
              v = d[1];
            l ||
              o[s] ||
              !(l =
                n.equals(p, y, u, s, t, e, n) &&
                n.equals(h, v, p, y, t, e, n)) ||
              (o[s] = !0),
              s++;
          }
          if (!l) return !1;
          u++;
        }
        return !0;
      }
      function x(t, e, n) {
        var r,
          i = v(t),
          o = i.length;
        if (v(e).length !== o) return !1;
        for (; o-- > 0; ) {
          if (
            (r = i[o]) === d &&
            (t.$$typeof || e.$$typeof) &&
            t.$$typeof !== e.$$typeof
          )
            return !1;
          if (!p(e, r) || !n.equals(t[r], e[r], r, r, t, e, n)) return !1;
        }
        return !0;
      }
      function w(t, e, n) {
        var r,
          i,
          o,
          a = f(t),
          u = a.length;
        if (f(e).length !== u) return !1;
        for (; u-- > 0; ) {
          if (
            (r = a[u]) === d &&
            (t.$$typeof || e.$$typeof) &&
            t.$$typeof !== e.$$typeof
          )
            return !1;
          if (!p(e, r)) return !1;
          if (!n.equals(t[r], e[r], r, r, t, e, n)) return !1;
          if (
            ((i = y(t, r)),
            (o = y(e, r)),
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
      function j(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function S(t, e, n) {
        if (t.size !== e.size) return !1;
        for (var r, i, o = {}, a = t.values(); (r = a.next()) && !r.done; ) {
          for (var u = e.values(), c = !1, l = 0; (i = u.next()) && !i.done; )
            c ||
              o[l] ||
              !(c = n.equals(r.value, i.value, r.value, i.value, t, e, n)) ||
              (o[l] = !0),
              l++;
          if (!c) return !1;
        }
        return !0;
      }
      function E(t, e) {
        var n = t.length;
        if (e.length !== n) return !1;
        for (; n-- > 0; ) if (t[n] !== e[n]) return !1;
        return !0;
      }
      var A = "[object Arguments]",
        P = "[object Boolean]",
        k = "[object Date]",
        M = "[object Map]",
        T = "[object Number]",
        _ = "[object Object]",
        C = "[object RegExp]",
        N = "[object Set]",
        D = "[object String]",
        I = Array.isArray,
        B =
          "function" == typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView
            : null,
        L = Object.assign,
        R = Object.prototype.toString.call.bind(Object.prototype.toString);
      var z = U();
      U({ strict: !0 }),
        U({ circular: !0 }),
        U({ circular: !0, strict: !0 }),
        U({
          createInternalComparator: function () {
            return h;
          },
        }),
        U({
          strict: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        U({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        U({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
          strict: !0,
        });
      function U(t) {
        void 0 === t && (t = {});
        var e,
          n = t.circular,
          r = void 0 !== n && n,
          i = t.createInternalComparator,
          o = t.createState,
          a = t.strict,
          u = void 0 !== a && a,
          c = (function (t) {
            var e = t.circular,
              n = t.createCustomConfig,
              r = t.strict,
              i = {
                areArraysEqual: r ? w : m,
                areDatesEqual: g,
                areMapsEqual: r ? l(b, w) : b,
                areObjectsEqual: r ? w : x,
                arePrimitiveWrappersEqual: O,
                areRegExpsEqual: j,
                areSetsEqual: r ? l(S, w) : S,
                areTypedArraysEqual: r ? w : E,
              };
            if ((n && (i = L({}, i, n(i))), e)) {
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
              n = t.areDatesEqual,
              r = t.areMapsEqual,
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
              if (I(t)) return e(t, l, s);
              if (null != B && B(t)) return c(t, l, s);
              if (f === Date) return n(t, l, s);
              if (f === RegExp) return a(t, l, s);
              if (f === Map) return r(t, l, s);
              if (f === Set) return u(t, l, s);
              var p = R(t);
              return p === k
                ? n(t, l, s)
                : p === C
                  ? a(t, l, s)
                  : p === M
                    ? r(t, l, s)
                    : p === N
                      ? u(t, l, s)
                      : p === _
                        ? "function" != typeof t.then &&
                          "function" != typeof l.then &&
                          i(t, l, s)
                        : p === A
                          ? i(t, l, s)
                          : (p === P || p === T || p === D) && o(t, l, s);
            };
          })(c);
        return (function (t) {
          var e = t.circular,
            n = t.comparator,
            r = t.createState,
            i = t.equals,
            o = t.strict;
          if (r)
            return function (t, a) {
              var u = r(),
                c = u.cache,
                l = void 0 === c ? (e ? new WeakMap() : void 0) : c,
                s = u.meta;
              return n(t, a, { cache: l, equals: i, meta: s, strict: o });
            };
          if (e)
            return function (t, e) {
              return n(t, e, {
                cache: new WeakMap(),
                equals: i,
                meta: void 0,
                strict: o,
              });
            };
          var a = { cache: void 0, equals: i, meta: void 0, strict: o };
          return function (t, e) {
            return n(t, e, a);
          };
        })({
          circular: r,
          comparator: f,
          createState: o,
          equals: i
            ? i(f)
            : ((e = f),
              function (t, n, r, i, o, a, u) {
                return e(t, n, u);
              }),
          strict: u,
        });
      }
      function F(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = -1;
        requestAnimationFrame(function r(i) {
          n < 0 && (n = i),
            i - n > e
              ? (t(i), (n = -1))
              : (function (t) {
                  "undefined" != typeof requestAnimationFrame &&
                    requestAnimationFrame(t);
                })(r);
        });
      }
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
      function W(t) {
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
            if ("string" == typeof t) return Z(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Z(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Z(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function q() {
        var t = function () {
            return null;
          },
          e = !1,
          n = function n(r) {
            if (!e) {
              if (Array.isArray(r)) {
                if (!r.length) return;
                var i = W(r),
                  o = i[0],
                  a = i.slice(1);
                return "number" == typeof o
                  ? void F(n.bind(null, a), o)
                  : (n(o), void F(n.bind(null, a)));
              }
              "object" === $(r) && t(r), "function" == typeof r && r();
            }
          };
        return {
          stop: function () {
            e = !0;
          },
          start: function (t) {
            (e = !1), n(t);
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
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function X(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? G(Object(n), !0).forEach(function (e) {
                Y(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : G(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Y(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== H(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== H(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === H(e) ? e : String(e);
          })(e)) in t
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
      var V = ["Webkit", "Moz", "O", "ms"],
        K = ["-webkit-", "-moz-", "-o-", "-ms-"],
        J = ["transform", "transformOrigin", "transition"],
        Q = function (t) {
          return t;
        },
        tt = function (t, e) {
          return Object.keys(e).reduce(function (n, r) {
            return X(X({}, n), {}, Y({}, r, t(r, e[r])));
          }, {});
        },
        et = function (t) {
          return Object.keys(t).reduce(function (t, e) {
            return X(
              X({}, t),
              (function (t, e) {
                if (-1 === J.indexOf(t))
                  return Y({}, t, Number.isNaN(e) ? 0 : e);
                var n = "transition" === t,
                  r = t.replace(/(\w)/, function (t) {
                    return t.toUpperCase();
                  }),
                  i = e;
                return V.reduce(function (t, o, a) {
                  return (
                    n &&
                      (i = e.replace(
                        /(transform|transform-origin)/gim,
                        "".concat(K[a], "$1"),
                      )),
                    X(X({}, t), {}, Y({}, o + r, i))
                  );
                }, {});
              })(e, t[e]),
            );
          }, t);
        },
        nt = function (t, e, n) {
          return t
            .map(function (t) {
              return ""
                .concat(
                  ((r = t),
                  r.replace(/([A-Z])/g, function (t) {
                    return "-".concat(t.toLowerCase());
                  })),
                  " ",
                )
                .concat(e, "ms ")
                .concat(n);
              var r;
            })
            .join(",");
        };
      function rt(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
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
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? at(t, e)
                : void 0
          );
        }
      }
      function at(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var ut = 1e-4,
        ct = function (t, e) {
          return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
        },
        lt = function (t, e) {
          return t
            .map(function (t, n) {
              return t * Math.pow(e, n);
            })
            .reduce(function (t, e) {
              return t + e;
            });
        },
        st = function (t, e) {
          return function (n) {
            var r = ct(t, e);
            return lt(r, n);
          };
        },
        ft = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3];
          if (1 === e.length)
            switch (e[0]) {
              case "linear":
                (r = 0), (i = 0), (o = 1), (a = 1);
                break;
              case "ease":
                (r = 0.25), (i = 0.1), (o = 0.25), (a = 1);
                break;
              case "ease-in":
                (r = 0.42), (i = 0), (o = 1), (a = 1);
                break;
              case "ease-out":
                (r = 0.42), (i = 0), (o = 0.58), (a = 1);
                break;
              case "ease-in-out":
                (r = 0), (i = 0), (o = 0.58), (a = 1);
                break;
              default:
                var u = e[0].split("(");
                if (
                  "cubic-bezier" === u[0] &&
                  4 === u[1].split(")")[0].split(",").length
                ) {
                  var c = rt(
                    u[1]
                      .split(")")[0]
                      .split(",")
                      .map(function (t) {
                        return parseFloat(t);
                      }),
                    4,
                  );
                  (r = c[0]), (i = c[1]), (o = c[2]), (a = c[3]);
                }
            }
          [r, o, i, a].every(function (t) {
            return "number" == typeof t && t >= 0 && t <= 1;
          });
          var l,
            s,
            f = st(r, o),
            p = st(i, a),
            h =
              ((l = r),
              (s = o),
              function (t) {
                var e = ct(l, s),
                  n = [].concat(
                    it(
                      e
                        .map(function (t, e) {
                          return t * e;
                        })
                        .slice(1),
                    ),
                    [0],
                  );
                return lt(n, t);
              }),
            d = function (t) {
              for (var e, n = t > 1 ? 1 : t, r = n, i = 0; i < 8; ++i) {
                var o = f(r) - n,
                  a = h(r);
                if (Math.abs(o - n) < ut || a < ut) return p(r);
                r = (e = r - o / a) > 1 ? 1 : e < 0 ? 0 : e;
              }
              return p(r);
            };
          return (d.isStepper = !1), d;
        },
        pt = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          var r = e[0];
          if ("string" == typeof r)
            switch (r) {
              case "ease":
              case "ease-in-out":
              case "ease-out":
              case "ease-in":
              case "linear":
                return ft(r);
              case "spring":
                return (function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = t.stiff,
                    n = void 0 === e ? 100 : e,
                    r = t.damping,
                    i = void 0 === r ? 8 : r,
                    o = t.dt,
                    a = void 0 === o ? 17 : o,
                    u = function (t, e, r) {
                      var o = r + ((-(t - e) * n - r * i) * a) / 1e3,
                        u = (r * a) / 1e3 + t;
                      return Math.abs(u - e) < ut && Math.abs(o) < ut
                        ? [e, 0]
                        : [u, o];
                    };
                  return (u.isStepper = !0), (u.dt = a), u;
                })();
              default:
                if ("cubic-bezier" === r.split("(")[0]) return ft(r);
            }
          return "function" == typeof r ? r : null;
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
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function vt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? yt(Object(n), !0).forEach(function (e) {
                mt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : yt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function mt(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== ht(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== ht(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === ht(e) ? e : String(e);
          })(e)) in t
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
      function gt(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
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
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? xt(t, e)
                : void 0
          );
        }
      }
      function xt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var wt = function (t, e, n) {
          return t + (e - t) * n;
        },
        Ot = function (t) {
          return t.from !== t.to;
        },
        jt = function t(e, n, r) {
          var i = tt(function (t, n) {
            if (Ot(n)) {
              var r = gt(e(n.from, n.to, n.velocity), 2),
                i = r[0],
                o = r[1];
              return vt(vt({}, n), {}, { from: i, velocity: o });
            }
            return n;
          }, n);
          return r < 1
            ? tt(function (t, e) {
                return Ot(e)
                  ? vt(
                      vt({}, e),
                      {},
                      {
                        velocity: wt(e.velocity, i[t].velocity, r),
                        from: wt(e.from, i[t].from, r),
                      },
                    )
                  : e;
              }, n)
            : t(e, i, r - 1);
        };
      const St = function (t, e, n, r, i) {
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
          s = l.reduce(function (n, r) {
            return vt(vt({}, n), {}, mt({}, r, [t[r], e[r]]));
          }, {}),
          f = l.reduce(function (n, r) {
            return vt(
              vt({}, n),
              {},
              mt({}, r, { from: t[r], velocity: 0, to: e[r] }),
            );
          }, {}),
          p = -1,
          h = function () {
            return null;
          };
        return (
          (h = n.isStepper
            ? function (r) {
                u || (u = r);
                var o = (r - u) / n.dt;
                (f = jt(n, f, o)),
                  i(
                    vt(
                      vt(vt({}, t), e),
                      tt(function (t, e) {
                        return e.from;
                      }, f),
                    ),
                  ),
                  (u = r),
                  Object.values(f).filter(Ot).length &&
                    (p = requestAnimationFrame(h));
              }
            : function (o) {
                c || (c = o);
                var a = (o - c) / r,
                  u = tt(function (t, e) {
                    return wt.apply(void 0, dt(e).concat([n(a)]));
                  }, s);
                if ((i(vt(vt(vt({}, t), e), u)), a < 1))
                  p = requestAnimationFrame(h);
                else {
                  var l = tt(function (t, e) {
                    return wt.apply(void 0, dt(e).concat([n(1)]));
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
      function Et(t) {
        return (
          (Et =
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
          Et(t)
        );
      }
      var At = [
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
      function Pt(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function kt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Mt(t);
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
            if ("string" == typeof t) return Mt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Mt(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Mt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Tt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _t(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Tt(Object(n), !0).forEach(function (e) {
                Ct(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Tt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Ct(t, e, n) {
        return (
          (e = Dt(e)) in t
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
      function Nt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Dt(r.key), r);
        }
      }
      function Dt(t) {
        var e = (function (t, e) {
          if ("object" !== Et(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== Et(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === Et(e) ? e : String(e);
      }
      function It(t, e) {
        return (
          (It = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          It(t, e)
        );
      }
      function Bt(t) {
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
          var n,
            r = zt(t);
          if (e) {
            var i = zt(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Lt(this, n);
        };
      }
      function Lt(t, e) {
        if (e && ("object" === Et(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return Rt(t);
      }
      function Rt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function zt(t) {
        return (
          (zt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          zt(t)
        );
      }
      var Ut = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && It(t, e);
        })(a, t);
        var e,
          n,
          i,
          o = Bt(a);
        function a(t, e) {
          var n;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          var r = (n = o.call(this, t, e)).props,
            i = r.isActive,
            u = r.attributeName,
            c = r.from,
            l = r.to,
            s = r.steps,
            f = r.children,
            p = r.duration;
          if (
            ((n.handleStyleChange = n.handleStyleChange.bind(Rt(n))),
            (n.changeStyle = n.changeStyle.bind(Rt(n))),
            !i || p <= 0)
          )
            return (
              (n.state = { style: {} }),
              "function" == typeof f && (n.state = { style: l }),
              Lt(n)
            );
          if (s && s.length) n.state = { style: s[0].style };
          else if (c) {
            if ("function" == typeof f) return (n.state = { style: c }), Lt(n);
            n.state = { style: u ? Ct({}, u, c) : c };
          } else n.state = { style: {} };
          return n;
        }
        return (
          (e = a),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                var t = this.props,
                  e = t.isActive,
                  n = t.canBegin;
                (this.mounted = !0), e && n && this.runAnimation(this.props);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                var e = this.props,
                  n = e.isActive,
                  r = e.canBegin,
                  i = e.attributeName,
                  o = e.shouldReAnimate,
                  a = e.to,
                  u = e.from,
                  c = this.state.style;
                if (r)
                  if (n) {
                    if (!(z(t.to, a) && t.canBegin && t.isActive)) {
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
                        _t(_t({}, this.props), {}, { from: s, begin: 0 }),
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
                  n = t.from,
                  r = t.to,
                  i = t.duration,
                  o = t.easing,
                  a = t.begin,
                  u = t.onAnimationEnd,
                  c = t.onAnimationStart,
                  l = St(n, r, pt(o), i, this.changeStyle);
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
                  n = t.steps,
                  r = t.begin,
                  i = t.onAnimationStart,
                  o = n[0],
                  a = o.style,
                  u = o.duration,
                  c = void 0 === u ? 0 : u;
                return this.manager.start(
                  [i].concat(
                    kt(
                      n.reduce(
                        function (t, r, i) {
                          if (0 === i) return t;
                          var o = r.duration,
                            a = r.easing,
                            u = void 0 === a ? "ease" : a,
                            c = r.style,
                            l = r.properties,
                            s = r.onAnimationEnd,
                            f = i > 0 ? n[i - 1] : r,
                            p = l || Object.keys(c);
                          if ("function" == typeof u || "spring" === u)
                            return [].concat(kt(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: c,
                                duration: o,
                                easing: u,
                              }),
                              o,
                            ]);
                          var h = nt(p, o, u),
                            d = _t(
                              _t(_t({}, f.style), c),
                              {},
                              { transition: h },
                            );
                          return [].concat(kt(t), [d, o, s]).filter(Q);
                        },
                        [a, Math.max(c, r)],
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
                this.manager || (this.manager = q());
                var e = t.begin,
                  n = t.duration,
                  r = t.attributeName,
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
                    var f = r ? Ct({}, r, i) : i,
                      p = nt(Object.keys(f), n, o);
                    s.start([a, e, _t(_t({}, f), {}, { transition: p }), n, u]);
                  }
                else this.runJSAnimation(t);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.children,
                  n = (t.begin, t.duration),
                  i = (t.attributeName, t.easing, t.isActive),
                  o =
                    (t.steps,
                    t.from,
                    t.to,
                    t.canBegin,
                    t.onAnimationEnd,
                    t.shouldReAnimate,
                    t.onAnimationReStart,
                    Pt(t, At)),
                  a = r.Children.count(e),
                  u = et(this.state.style);
                if ("function" == typeof e) return e(u);
                if (!i || 0 === a || n <= 0) return e;
                var c = function (t) {
                  var e = t.props,
                    n = e.style,
                    i = void 0 === n ? {} : n,
                    a = e.className;
                  return (0, r.cloneElement)(
                    t,
                    _t(
                      _t({}, o),
                      {},
                      { style: _t(_t({}, i), u), className: a },
                    ),
                  );
                };
                return 1 === a
                  ? c(r.Children.only(e))
                  : r.createElement(
                      "div",
                      null,
                      r.Children.map(e, function (t) {
                        return c(t);
                      }),
                    );
              },
            },
          ]) && Nt(e.prototype, n),
          i && Nt(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(r.PureComponent);
      (Ut.displayName = "Animate"),
        (Ut.defaultProps = {
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
        (Ut.propTypes = {
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
      const Ft = Ut;
      var $t = n(91514),
        Wt = ["children", "appearOptions", "enterOptions", "leaveOptions"];
      function Zt(t) {
        return (
          (Zt =
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
          Zt(t)
        );
      }
      function qt() {
        return (
          (qt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          qt.apply(this, arguments)
        );
      }
      function Ht(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function Gt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Xt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Gt(Object(n), !0).forEach(function (e) {
                te(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Gt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Yt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, ee(r.key), r);
        }
      }
      function Vt(t, e) {
        return (
          (Vt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Vt(t, e)
        );
      }
      function Kt(t) {
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
          var n,
            r = Qt(t);
          if (e) {
            var i = Qt(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === Zt(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return Jt(t);
          })(this, n);
        };
      }
      function Jt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function Qt(t) {
        return (
          (Qt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Qt(t)
        );
      }
      function te(t, e, n) {
        return (
          (e = ee(e)) in t
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
      function ee(t) {
        var e = (function (t, e) {
          if ("object" !== Zt(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== Zt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === Zt(e) ? e : String(e);
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
            n = t.duration;
          return e && e.length
            ? e.reduce(function (t, e) {
                return (
                  t +
                  (Number.isFinite(e.duration) && e.duration > 0
                    ? e.duration
                    : 0)
                );
              }, 0)
            : Number.isFinite(n)
              ? n
              : 0;
        },
        re = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Vt(t, e);
          })(a, t);
          var e,
            n,
            i,
            o = Kt(a);
          function a() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              te(Jt((t = o.call(this))), "handleEnter", function (e, n) {
                var r = t.props,
                  i = r.appearOptions,
                  o = r.enterOptions;
                t.handleStyleActive(n ? i : o);
              }),
              te(Jt(t), "handleExit", function () {
                var e = t.props.leaveOptions;
                t.handleStyleActive(e);
              }),
              (t.state = { isActive: !1 }),
              t
            );
          }
          return (
            (e = a),
            (n = [
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
                      Xt(Xt({}, t), {}, { onAnimationEnd: e, isActive: !0 }),
                    );
                  }
                },
              },
              {
                key: "parseTimeout",
                value: function () {
                  var t = this.props,
                    e = t.appearOptions,
                    n = t.enterOptions,
                    r = t.leaveOptions;
                  return ne(e) + ne(n) + ne(r);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.children,
                    i =
                      (e.appearOptions,
                      e.enterOptions,
                      e.leaveOptions,
                      Ht(e, Wt));
                  return r.createElement(
                    $t.Transition,
                    qt({}, i, {
                      onEnter: this.handleEnter,
                      onExit: this.handleExit,
                      timeout: this.parseTimeout(),
                    }),
                    function () {
                      return r.createElement(Ft, t.state, r.Children.only(n));
                    },
                  );
                },
              },
            ]) && Yt(e.prototype, n),
            i && Yt(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(r.Component);
      re.propTypes = {
        appearOptions: o().object,
        enterOptions: o().object,
        leaveOptions: o().object,
        children: o().element,
      };
      const ie = re;
      function oe(t) {
        var e = t.component,
          n = t.children,
          i = t.appear,
          o = t.enter,
          a = t.leave;
        return r.createElement(
          $t.TransitionGroup,
          { component: e },
          r.Children.map(n, function (t, e) {
            return r.createElement(
              ie,
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
      (oe.propTypes = {
        appear: o().object,
        enter: o().object,
        leave: o().object,
        children: o().oneOfType([o().array, o().element]),
        component: o().any,
      }),
        (oe.defaultProps = { component: "span" });
      const ae = Ft;
    },
    39199: (t, e, n) => {
      "use strict";
      var r = n(32224);
      (e.__esModule = !0),
        (e.default = function (t, e) {
          t.classList
            ? t.classList.add(e)
            : (0, i.default)(t, e) ||
              ("string" == typeof t.className
                ? (t.className = t.className + " " + e)
                : t.setAttribute(
                    "class",
                    ((t.className && t.className.baseVal) || "") + " " + e,
                  ));
        });
      var i = r(n(86582));
      t.exports = e.default;
    },
    86582: (t, e) => {
      "use strict";
      (e.__esModule = !0),
        (e.default = function (t, e) {
          return t.classList
            ? !!e && t.classList.contains(e)
            : -1 !==
                (" " + (t.className.baseVal || t.className) + " ").indexOf(
                  " " + e + " ",
                );
        }),
        (t.exports = e.default);
    },
    68281: (t) => {
      "use strict";
      function e(t, e) {
        return t
          .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      t.exports = function (t, n) {
        t.classList
          ? t.classList.remove(n)
          : "string" == typeof t.className
            ? (t.className = e(t.className, n))
            : t.setAttribute(
                "class",
                e((t.className && t.className.baseVal) || "", n),
              );
      };
    },
    50268: (t, e, n) => {
      "use strict";
      (e.__esModule = !0), (e.default = void 0);
      !(function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              var r =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(t, n)
                  : {};
              r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
            }
        e.default = t;
      })(n(25816));
      var r = u(n(39199)),
        i = u(n(68281)),
        o = u(n(47427)),
        a = u(n(65403));
      n(1042);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function c() {
        return (
          (c =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          c.apply(this, arguments)
        );
      }
      var l = function (t, e) {
          return (
            t &&
            e &&
            e.split(" ").forEach(function (e) {
              return (0, r.default)(t, e);
            })
          );
        },
        s = function (t, e) {
          return (
            t &&
            e &&
            e.split(" ").forEach(function (e) {
              return (0, i.default)(t, e);
            })
          );
        },
        f = (function (t) {
          var e, n;
          function r() {
            for (
              var e, n = arguments.length, r = new Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r)) || this).onEnter =
                function (t, n) {
                  var r = e.getClassNames(n ? "appear" : "enter").className;
                  e.removeClasses(t, "exit"),
                    l(t, r),
                    e.props.onEnter && e.props.onEnter(t, n);
                }),
              (e.onEntering = function (t, n) {
                var r = e.getClassNames(n ? "appear" : "enter").activeClassName;
                e.reflowAndAddClass(t, r),
                  e.props.onEntering && e.props.onEntering(t, n);
              }),
              (e.onEntered = function (t, n) {
                var r = e.getClassNames("appear").doneClassName,
                  i = e.getClassNames("enter").doneClassName,
                  o = n ? r + " " + i : i;
                e.removeClasses(t, n ? "appear" : "enter"),
                  l(t, o),
                  e.props.onEntered && e.props.onEntered(t, n);
              }),
              (e.onExit = function (t) {
                var n = e.getClassNames("exit").className;
                e.removeClasses(t, "appear"),
                  e.removeClasses(t, "enter"),
                  l(t, n),
                  e.props.onExit && e.props.onExit(t);
              }),
              (e.onExiting = function (t) {
                var n = e.getClassNames("exit").activeClassName;
                e.reflowAndAddClass(t, n),
                  e.props.onExiting && e.props.onExiting(t);
              }),
              (e.onExited = function (t) {
                var n = e.getClassNames("exit").doneClassName;
                e.removeClasses(t, "exit"),
                  l(t, n),
                  e.props.onExited && e.props.onExited(t);
              }),
              (e.getClassNames = function (t) {
                var n = e.props.classNames,
                  r = "string" == typeof n,
                  i = r ? (r && n ? n + "-" : "") + t : n[t];
                return {
                  className: i,
                  activeClassName: r ? i + "-active" : n[t + "Active"],
                  doneClassName: r ? i + "-done" : n[t + "Done"],
                };
              }),
              e
            );
          }
          (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n);
          var i = r.prototype;
          return (
            (i.removeClasses = function (t, e) {
              var n = this.getClassNames(e),
                r = n.className,
                i = n.activeClassName,
                o = n.doneClassName;
              r && s(t, r), i && s(t, i), o && s(t, o);
            }),
            (i.reflowAndAddClass = function (t, e) {
              e && (t && t.scrollTop, l(t, e));
            }),
            (i.render = function () {
              var t = c({}, this.props);
              return (
                delete t.classNames,
                o.default.createElement(
                  a.default,
                  c({}, t, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited,
                  }),
                )
              );
            }),
            r
          );
        })(o.default.Component);
      (f.defaultProps = { classNames: "" }), (f.propTypes = {});
      var p = f;
      (e.default = p), (t.exports = e.default);
    },
    35994: (t, e, n) => {
      "use strict";
      (e.__esModule = !0), (e.default = void 0);
      a(n(25816));
      var r = a(n(47427)),
        i = n(42287),
        o = a(n(1802));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var u = (function (t) {
        var e, n;
        function a() {
          for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(r)) || this).handleEnter =
              function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return e.handleLifecycle("onEnter", 0, n);
              }),
            (e.handleEntering = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle("onEntering", 0, n);
            }),
            (e.handleEntered = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle("onEntered", 0, n);
            }),
            (e.handleExit = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle("onExit", 1, n);
            }),
            (e.handleExiting = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle("onExiting", 1, n);
            }),
            (e.handleExited = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle("onExited", 1, n);
            }),
            e
          );
        }
        (n = t),
          ((e = a).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
        var u = a.prototype;
        return (
          (u.handleLifecycle = function (t, e, n) {
            var o,
              a = this.props.children,
              u = r.default.Children.toArray(a)[e];
            u.props[t] && (o = u.props)[t].apply(o, n),
              this.props[t] && this.props[t]((0, i.findDOMNode)(this));
          }),
          (u.render = function () {
            var t = this.props,
              e = t.children,
              n = t.in,
              i = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
              })(t, ["children", "in"]),
              a = r.default.Children.toArray(e),
              u = a[0],
              c = a[1];
            return (
              delete i.onEnter,
              delete i.onEntering,
              delete i.onEntered,
              delete i.onExit,
              delete i.onExiting,
              delete i.onExited,
              r.default.createElement(
                o.default,
                i,
                n
                  ? r.default.cloneElement(u, {
                      key: "first",
                      onEnter: this.handleEnter,
                      onEntering: this.handleEntering,
                      onEntered: this.handleEntered,
                    })
                  : r.default.cloneElement(c, {
                      key: "second",
                      onEnter: this.handleExit,
                      onEntering: this.handleExiting,
                      onEntered: this.handleExited,
                    }),
              )
            );
          }),
          a
        );
      })(r.default.Component);
      u.propTypes = {};
      var c = u;
      (e.default = c), (t.exports = e.default);
    },
    65403: (t, e, n) => {
      "use strict";
      (e.__esModule = !0),
        (e.default =
          e.EXITING =
          e.ENTERED =
          e.ENTERING =
          e.EXITED =
          e.UNMOUNTED =
            void 0);
      var r = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(t, n)
                    : {};
                r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
              }
          return (e.default = t), e;
        })(n(25816)),
        i = u(n(47427)),
        o = u(n(42287)),
        a = n(36904);
      n(1042);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var c = "unmounted";
      e.UNMOUNTED = c;
      var l = "exited";
      e.EXITED = l;
      var s = "entering";
      e.ENTERING = s;
      var f = "entered";
      e.ENTERED = f;
      var p = "exiting";
      e.EXITING = p;
      var h = (function (t) {
        var e, n;
        function r(e, n) {
          var r;
          r = t.call(this, e, n) || this;
          var i,
            o = n.transitionGroup,
            a = o && !o.isMounting ? e.enter : e.appear;
          return (
            (r.appearStatus = null),
            e.in
              ? a
                ? ((i = l), (r.appearStatus = s))
                : (i = f)
              : (i = e.unmountOnExit || e.mountOnEnter ? c : l),
            (r.state = { status: i }),
            (r.nextCallback = null),
            r
          );
        }
        (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
        var a = r.prototype;
        return (
          (a.getChildContext = function () {
            return { transitionGroup: null };
          }),
          (r.getDerivedStateFromProps = function (t, e) {
            return t.in && e.status === c ? { status: l } : null;
          }),
          (a.componentDidMount = function () {
            this.updateStatus(!0, this.appearStatus);
          }),
          (a.componentDidUpdate = function (t) {
            var e = null;
            if (t !== this.props) {
              var n = this.state.status;
              this.props.in
                ? n !== s && n !== f && (e = s)
                : (n !== s && n !== f) || (e = p);
            }
            this.updateStatus(!1, e);
          }),
          (a.componentWillUnmount = function () {
            this.cancelNextCallback();
          }),
          (a.getTimeouts = function () {
            var t,
              e,
              n,
              r = this.props.timeout;
            return (
              (t = e = n = r),
              null != r &&
                "number" != typeof r &&
                ((t = r.exit),
                (e = r.enter),
                (n = void 0 !== r.appear ? r.appear : e)),
              { exit: t, enter: e, appear: n }
            );
          }),
          (a.updateStatus = function (t, e) {
            if ((void 0 === t && (t = !1), null !== e)) {
              this.cancelNextCallback();
              var n = o.default.findDOMNode(this);
              e === s ? this.performEnter(n, t) : this.performExit(n);
            } else
              this.props.unmountOnExit &&
                this.state.status === l &&
                this.setState({ status: c });
          }),
          (a.performEnter = function (t, e) {
            var n = this,
              r = this.props.enter,
              i = this.context.transitionGroup
                ? this.context.transitionGroup.isMounting
                : e,
              o = this.getTimeouts(),
              a = i ? o.appear : o.enter;
            e || r
              ? (this.props.onEnter(t, i),
                this.safeSetState({ status: s }, function () {
                  n.props.onEntering(t, i),
                    n.onTransitionEnd(t, a, function () {
                      n.safeSetState({ status: f }, function () {
                        n.props.onEntered(t, i);
                      });
                    });
                }))
              : this.safeSetState({ status: f }, function () {
                  n.props.onEntered(t);
                });
          }),
          (a.performExit = function (t) {
            var e = this,
              n = this.props.exit,
              r = this.getTimeouts();
            n
              ? (this.props.onExit(t),
                this.safeSetState({ status: p }, function () {
                  e.props.onExiting(t),
                    e.onTransitionEnd(t, r.exit, function () {
                      e.safeSetState({ status: l }, function () {
                        e.props.onExited(t);
                      });
                    });
                }))
              : this.safeSetState({ status: l }, function () {
                  e.props.onExited(t);
                });
          }),
          (a.cancelNextCallback = function () {
            null !== this.nextCallback &&
              (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (a.safeSetState = function (t, e) {
            (e = this.setNextCallback(e)), this.setState(t, e);
          }),
          (a.setNextCallback = function (t) {
            var e = this,
              n = !0;
            return (
              (this.nextCallback = function (r) {
                n && ((n = !1), (e.nextCallback = null), t(r));
              }),
              (this.nextCallback.cancel = function () {
                n = !1;
              }),
              this.nextCallback
            );
          }),
          (a.onTransitionEnd = function (t, e, n) {
            this.setNextCallback(n);
            var r = null == e && !this.props.addEndListener;
            t && !r
              ? (this.props.addEndListener &&
                  this.props.addEndListener(t, this.nextCallback),
                null != e && setTimeout(this.nextCallback, e))
              : setTimeout(this.nextCallback, 0);
          }),
          (a.render = function () {
            var t = this.state.status;
            if (t === c) return null;
            var e = this.props,
              n = e.children,
              r = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
              })(e, ["children"]);
            if (
              (delete r.in,
              delete r.mountOnEnter,
              delete r.unmountOnExit,
              delete r.appear,
              delete r.enter,
              delete r.exit,
              delete r.timeout,
              delete r.addEndListener,
              delete r.onEnter,
              delete r.onEntering,
              delete r.onEntered,
              delete r.onExit,
              delete r.onExiting,
              delete r.onExited,
              "function" == typeof n)
            )
              return n(t, r);
            var o = i.default.Children.only(n);
            return i.default.cloneElement(o, r);
          }),
          r
        );
      })(i.default.Component);
      function d() {}
      (h.contextTypes = { transitionGroup: r.object }),
        (h.childContextTypes = { transitionGroup: function () {} }),
        (h.propTypes = {}),
        (h.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: d,
          onEntering: d,
          onEntered: d,
          onExit: d,
          onExiting: d,
          onExited: d,
        }),
        (h.UNMOUNTED = 0),
        (h.EXITED = 1),
        (h.ENTERING = 2),
        (h.ENTERED = 3),
        (h.EXITING = 4);
      var y = (0, a.polyfill)(h);
      e.default = y;
    },
    1802: (t, e, n) => {
      "use strict";
      (e.__esModule = !0), (e.default = void 0);
      var r = u(n(25816)),
        i = u(n(47427)),
        o = n(36904),
        a = n(51117);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function c() {
        return (
          (c =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          c.apply(this, arguments)
        );
      }
      function l(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      var s =
          Object.values ||
          function (t) {
            return Object.keys(t).map(function (e) {
              return t[e];
            });
          },
        f = (function (t) {
          var e, n;
          function r(e, n) {
            var r,
              i = (r = t.call(this, e, n) || this).handleExited.bind(l(l(r)));
            return (r.state = { handleExited: i, firstRender: !0 }), r;
          }
          (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n);
          var o = r.prototype;
          return (
            (o.getChildContext = function () {
              return { transitionGroup: { isMounting: !this.appeared } };
            }),
            (o.componentDidMount = function () {
              (this.appeared = !0), (this.mounted = !0);
            }),
            (o.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (r.getDerivedStateFromProps = function (t, e) {
              var n = e.children,
                r = e.handleExited;
              return {
                children: e.firstRender
                  ? (0, a.getInitialChildMapping)(t, r)
                  : (0, a.getNextChildMapping)(t, n, r),
                firstRender: !1,
              };
            }),
            (o.handleExited = function (t, e) {
              var n = (0, a.getChildMapping)(this.props.children);
              t.key in n ||
                (t.props.onExited && t.props.onExited(e),
                this.mounted &&
                  this.setState(function (e) {
                    var n = c({}, e.children);
                    return delete n[t.key], { children: n };
                  }));
            }),
            (o.render = function () {
              var t = this.props,
                e = t.component,
                n = t.childFactory,
                r = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    i = {},
                    o = Object.keys(t);
                  for (r = 0; r < o.length; r++)
                    (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                  return i;
                })(t, ["component", "childFactory"]),
                o = s(this.state.children).map(n);
              return (
                delete r.appear,
                delete r.enter,
                delete r.exit,
                null === e ? o : i.default.createElement(e, r, o)
              );
            }),
            r
          );
        })(i.default.Component);
      (f.childContextTypes = { transitionGroup: r.default.object.isRequired }),
        (f.propTypes = {}),
        (f.defaultProps = {
          component: "div",
          childFactory: function (t) {
            return t;
          },
        });
      var p = (0, o.polyfill)(f);
      (e.default = p), (t.exports = e.default);
    },
    91514: (t, e, n) => {
      "use strict";
      var r = u(n(50268)),
        i = u(n(35994)),
        o = u(n(1802)),
        a = u(n(65403));
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      t.exports = {
        Transition: a.default,
        TransitionGroup: o.default,
        ReplaceTransition: i.default,
        CSSTransition: r.default,
      };
    },
    51117: (t, e, n) => {
      "use strict";
      (e.__esModule = !0),
        (e.getChildMapping = i),
        (e.mergeChildMappings = o),
        (e.getInitialChildMapping = function (t, e) {
          return i(t.children, function (n) {
            return (0, r.cloneElement)(n, {
              onExited: e.bind(null, n),
              in: !0,
              appear: a(n, "appear", t),
              enter: a(n, "enter", t),
              exit: a(n, "exit", t),
            });
          });
        }),
        (e.getNextChildMapping = function (t, e, n) {
          var u = i(t.children),
            c = o(e, u);
          return (
            Object.keys(c).forEach(function (i) {
              var o = c[i];
              if ((0, r.isValidElement)(o)) {
                var l = i in e,
                  s = i in u,
                  f = e[i],
                  p = (0, r.isValidElement)(f) && !f.props.in;
                !s || (l && !p)
                  ? s || !l || p
                    ? s &&
                      l &&
                      (0, r.isValidElement)(f) &&
                      (c[i] = (0, r.cloneElement)(o, {
                        onExited: n.bind(null, o),
                        in: f.props.in,
                        exit: a(o, "exit", t),
                        enter: a(o, "enter", t),
                      }))
                    : (c[i] = (0, r.cloneElement)(o, { in: !1 }))
                  : (c[i] = (0, r.cloneElement)(o, {
                      onExited: n.bind(null, o),
                      in: !0,
                      exit: a(o, "exit", t),
                      enter: a(o, "enter", t),
                    }));
              }
            }),
            c
          );
        });
      var r = n(47427);
      function i(t, e) {
        var n = Object.create(null);
        return (
          t &&
            r.Children.map(t, function (t) {
              return t;
            }).forEach(function (t) {
              n[t.key] = (function (t) {
                return e && (0, r.isValidElement)(t) ? e(t) : t;
              })(t);
            }),
          n
        );
      }
      function o(t, e) {
        function n(n) {
          return n in e ? e[n] : t[n];
        }
        (t = t || {}), (e = e || {});
        var r,
          i = Object.create(null),
          o = [];
        for (var a in t)
          a in e ? o.length && ((i[a] = o), (o = [])) : o.push(a);
        var u = {};
        for (var c in e) {
          if (i[c])
            for (r = 0; r < i[c].length; r++) {
              var l = i[c][r];
              u[i[c][r]] = n(l);
            }
          u[c] = n(c);
        }
        for (r = 0; r < o.length; r++) u[o[r]] = n(o[r]);
        return u;
      }
      function a(t, e, n) {
        return null != n[e] ? n[e] : t.props[e];
      }
    },
    1042: (t, e, n) => {
      "use strict";
      (e.__esModule = !0), (e.classNamesShape = e.timeoutsShape = void 0);
      var r;
      (r = n(25816)) && r.__esModule;
      e.timeoutsShape = null;
      e.classNamesShape = null;
    },
    28531: (t, e, n) => {
      "use strict";
      n.d(e, { $: () => $ });
      var r = n(47427),
        i = n(84148),
        o = n(15819),
        a = n(49198),
        u = n.n(a),
        c = n(38716),
        l = n.n(c),
        s = n(47430),
        f = n(85458),
        p = n(85674),
        h = n(72961),
        d = n(76325),
        y = n(94797),
        v = n(77125),
        m = n(70416),
        g = n(81156),
        b = n(37350);
      function x(t) {
        return (
          (x =
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
          x(t)
        );
      }
      var w = ["x", "y"];
      function O() {
        return (
          (O = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          O.apply(this, arguments)
        );
      }
      function j(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? j(Object(n), !0).forEach(function (e) {
                E(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : j(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function E(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== x(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== x(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === x(e) ? e : String(e);
          })(e)) in t
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
      function A(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function P(t, e) {
        var n = t.x,
          r = t.y,
          i = A(t, w),
          o = "".concat(n),
          a = parseInt(o, 10),
          u = "".concat(r),
          c = parseInt(u, 10),
          l = "".concat(e.height || i.height),
          s = parseInt(l, 10),
          f = "".concat(e.width || i.width),
          p = parseInt(f, 10);
        return S(
          S(S(S(S({}, e), i), a ? { x: a } : {}), c ? { y: c } : {}),
          {},
          { height: s, width: p, name: e.name, radius: e.radius },
        );
      }
      function k(t) {
        return r.createElement(
          b.bn,
          O(
            {
              shapeType: "rectangle",
              propTransformer: P,
              activeClassName: "recharts-active-bar",
            },
            t,
          ),
        );
      }
      var M = ["value", "background"];
      function T(t) {
        return (
          (T =
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
          T(t)
        );
      }
      function _(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          C.apply(this, arguments)
        );
      }
      function N(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(n), !0).forEach(function (e) {
                U(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : N(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function I(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, F(r.key), r);
        }
      }
      function B(t, e) {
        return (
          (B = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          B(t, e)
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
          var n,
            r = z(t);
          if (e) {
            var i = z(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === T(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return R(t);
          })(this, n);
        };
      }
      function R(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function z(t) {
        return (
          (z = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          z(t)
        );
      }
      function U(t, e, n) {
        return (
          (e = F(e)) in t
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
      function F(t) {
        var e = (function (t, e) {
          if ("object" !== T(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== T(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === T(e) ? e : String(e);
      }
      var $ = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && B(t, e);
        })(p, t);
        var e,
          n,
          a,
          c = L(p);
        function p() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, p);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            U(R((t = c.call.apply(c, [this].concat(n)))), "state", {
              isAnimationFinished: !1,
            }),
            U(R(t), "id", (0, d.EL)("recharts-bar-")),
            U(R(t), "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), e && e();
            }),
            U(R(t), "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), e && e();
            }),
            t
          );
        }
        return (
          (e = p),
          (a = [
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
          ]),
          (n = [
            {
              key: "renderRectanglesStatically",
              value: function (t) {
                var e = this,
                  n = this.props,
                  i = n.shape,
                  o = n.dataKey,
                  a = n.activeIndex,
                  u = n.activeBar,
                  c = (0, y.L6)(this.props);
                return (
                  t &&
                  t.map(function (t, n) {
                    var l = n === a,
                      f = l ? u : i,
                      p = D(
                        D(D({}, c), t),
                        {},
                        {
                          isActive: l,
                          option: f,
                          index: n,
                          dataKey: o,
                          onAnimationStart: e.handleAnimationStart,
                          onAnimationEnd: e.handleAnimationEnd,
                        },
                      );
                    return r.createElement(
                      s.m,
                      C(
                        { className: "recharts-bar-rectangle" },
                        (0, g.bw)(e.props, t, n),
                        {
                          key: "rectangle-"
                            .concat(null == t ? void 0 : t.x, "-")
                            .concat(null == t ? void 0 : t.y, "-")
                            .concat(null == t ? void 0 : t.value),
                        },
                      ),
                      r.createElement(k, p),
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
                  n = e.data,
                  i = e.layout,
                  a = e.isAnimationActive,
                  u = e.animationBegin,
                  c = e.animationDuration,
                  l = e.animationEasing,
                  f = e.animationId,
                  p = this.state.prevData;
                return r.createElement(
                  o.ZP,
                  {
                    begin: u,
                    duration: c,
                    isActive: a,
                    easing: l,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "bar-".concat(f),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (e) {
                    var o = e.t,
                      a = n.map(function (t, e) {
                        var n = p && p[e];
                        if (n) {
                          var r = (0, d.k4)(n.x, t.x),
                            a = (0, d.k4)(n.y, t.y),
                            u = (0, d.k4)(n.width, t.width),
                            c = (0, d.k4)(n.height, t.height);
                          return D(
                            D({}, t),
                            {},
                            { x: r(o), y: a(o), width: u(o), height: c(o) },
                          );
                        }
                        if ("horizontal" === i) {
                          var l = (0, d.k4)(0, t.height)(o);
                          return D(
                            D({}, t),
                            {},
                            { y: t.y + t.height - l, height: l },
                          );
                        }
                        var s = (0, d.k4)(0, t.width)(o);
                        return D(D({}, t), {}, { width: s });
                      });
                    return r.createElement(
                      s.m,
                      null,
                      t.renderRectanglesStatically(a),
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
                  n = t.isAnimationActive,
                  r = this.state.prevData;
                return !(n && e && e.length) || (r && u()(r, e))
                  ? this.renderRectanglesStatically(e)
                  : this.renderRectanglesWithAnimation();
              },
            },
            {
              key: "renderBackground",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.data,
                  i = e.dataKey,
                  o = e.activeIndex,
                  a = (0, y.L6)(this.props.background);
                return n.map(function (e, n) {
                  e.value;
                  var u = e.background,
                    c = _(e, M);
                  if (!u) return null;
                  var l = D(
                    D(
                      D(D(D({}, c), {}, { fill: "#eee" }, u), a),
                      (0, g.bw)(t.props, e, n),
                    ),
                    {},
                    {
                      onAnimationStart: t.handleAnimationStart,
                      onAnimationEnd: t.handleAnimationEnd,
                      dataKey: i,
                      index: n,
                      key: "background-bar-".concat(n),
                      className: "recharts-bar-background-rectangle",
                    },
                  );
                  return r.createElement(
                    k,
                    C({ option: t.props.background, isActive: n === o }, l),
                  );
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
                var n = this.props,
                  i = n.data,
                  o = n.xAxis,
                  a = n.yAxis,
                  u = n.layout,
                  c = n.children,
                  l = (0, y.NN)(c, f.W);
                if (!l) return null;
                var p = "vertical" === u ? i[0].height / 2 : i[0].width / 2,
                  h = function (t, e) {
                    var n = Array.isArray(t.value) ? t.value[1] : t.value;
                    return {
                      x: t.x,
                      y: t.y,
                      value: n,
                      errorVal: (0, m.F$)(t, e),
                    };
                  },
                  d = { clipPath: t ? "url(#clipPath-".concat(e, ")") : null };
                return r.createElement(
                  s.m,
                  d,
                  l.map(function (t) {
                    return r.cloneElement(t, {
                      key: "error-bar-".concat(e, "-").concat(t.props.dataKey),
                      data: i,
                      xAxis: o,
                      yAxis: a,
                      layout: u,
                      offset: p,
                      dataPointFormatter: h,
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
                  n = t.data,
                  o = t.className,
                  a = t.xAxis,
                  u = t.yAxis,
                  c = t.left,
                  f = t.top,
                  p = t.width,
                  d = t.height,
                  y = t.isAnimationActive,
                  v = t.background,
                  m = t.id;
                if (e || !n || !n.length) return null;
                var g = this.state.isAnimationFinished,
                  b = (0, i.Z)("recharts-bar", o),
                  x = a && a.allowDataOverflow,
                  w = u && u.allowDataOverflow,
                  O = x || w,
                  j = l()(m) ? this.id : m;
                return r.createElement(
                  s.m,
                  { className: b },
                  x || w
                    ? r.createElement(
                        "defs",
                        null,
                        r.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(j) },
                          r.createElement("rect", {
                            x: x ? c : c - p / 2,
                            y: w ? f : f - d / 2,
                            width: x ? p : 2 * p,
                            height: w ? d : 2 * d,
                          }),
                        ),
                      )
                    : null,
                  r.createElement(
                    s.m,
                    {
                      className: "recharts-bar-rectangles",
                      clipPath: O ? "url(#clipPath-".concat(j, ")") : null,
                    },
                    v ? this.renderBackground() : null,
                    this.renderRectangles(),
                  ),
                  this.renderErrorBar(O, j),
                  (!y || g) && h.e.renderCallByParent(this.props, n),
                );
              },
            },
          ]) && I(e.prototype, n),
          a && I(e, a),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          p
        );
      })(r.PureComponent);
      U($, "displayName", "Bar"),
        U($, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          legendType: "rect",
          minPointSize: 0,
          hide: !1,
          data: [],
          layout: "vertical",
          activeBar: !0,
          isAnimationActive: !v.x.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "ease",
        }),
        U($, "getComposedData", function (t) {
          var e = t.props,
            n = t.item,
            r = t.barPosition,
            i = t.bandSize,
            o = t.xAxis,
            a = t.yAxis,
            u = t.xAxisTicks,
            c = t.yAxisTicks,
            l = t.stackedData,
            s = t.dataStartIndex,
            f = t.displayedData,
            h = t.offset,
            v = (0, m.Bu)(r, n);
          if (!v) return null;
          var g = e.layout,
            b = n.props,
            x = b.dataKey,
            w = b.children,
            O = b.minPointSize,
            j = "horizontal" === g ? a : o,
            S = l ? j.scale.domain() : null,
            E = (0, m.Yj)({ numericAxis: j }),
            A = (0, y.NN)(w, p.b),
            P = f.map(function (t, e) {
              var r, f, p, h, y, b;
              if (
                (l
                  ? (r = (0, m.Vv)(l[s + e], S))
                  : ((r = (0, m.F$)(t, x)), Array.isArray(r) || (r = [E, r])),
                "horizontal" === g)
              ) {
                var w,
                  j = [a.scale(r[0]), a.scale(r[1])],
                  P = j[0],
                  k = j[1];
                (f = (0, m.Fy)({
                  axis: o,
                  ticks: u,
                  bandSize: i,
                  offset: v.offset,
                  entry: t,
                  index: e,
                })),
                  (p =
                    null !== (w = null != k ? k : P) && void 0 !== w
                      ? w
                      : void 0),
                  (h = v.size);
                var M = P - k;
                if (
                  ((y = Number.isNaN(M) ? 0 : M),
                  (b = { x: f, y: a.y, width: h, height: a.height }),
                  Math.abs(O) > 0 && Math.abs(y) < Math.abs(O))
                ) {
                  var T = (0, d.uY)(y || O) * (Math.abs(O) - Math.abs(y));
                  (p -= T), (y += T);
                }
              } else {
                var _ = [o.scale(r[0]), o.scale(r[1])],
                  C = _[0],
                  N = _[1];
                if (
                  ((f = C),
                  (p = (0, m.Fy)({
                    axis: a,
                    ticks: c,
                    bandSize: i,
                    offset: v.offset,
                    entry: t,
                    index: e,
                  })),
                  (h = N - C),
                  (y = v.size),
                  (b = { x: o.x, y: p, width: o.width, height: y }),
                  Math.abs(O) > 0 && Math.abs(h) < Math.abs(O))
                )
                  h += (0, d.uY)(h || O) * (Math.abs(O) - Math.abs(h));
              }
              return D(
                D(
                  D({}, t),
                  {},
                  {
                    x: f,
                    y: p,
                    width: h,
                    height: y,
                    value: l ? r : r[1],
                    payload: t,
                    background: b,
                  },
                  A && A[e] && A[e].props,
                ),
                {},
                {
                  tooltipPayload: [(0, m.Qo)(n, t)],
                  tooltipPosition: { x: f + h / 2, y: p + y / 2 },
                },
              );
            });
          return D({ data: P, layout: g }, h);
        });
    },
    48359: (t, e, n) => {
      "use strict";
      n.d(e, { q: () => w });
      var r = n(47427),
        i = n(8889),
        o = n.n(i),
        a = n(76325),
        u = n(94797),
        c = ["x1", "y1", "x2", "y2", "key"],
        l = ["offset"];
      function s(t) {
        return (
          (s =
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
          s(t)
        );
      }
      function f() {
        return (
          (f = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          f.apply(this, arguments)
        );
      }
      function p(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(n), !0).forEach(function (e) {
                b(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function y(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, x(r.key), r);
        }
      }
      function v(t, e) {
        return (
          (v = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          v(t, e)
        );
      }
      function m(t) {
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
          var n,
            r = g(t);
          if (e) {
            var i = g(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === s(e) || "function" == typeof e)) return e;
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
          })(this, n);
        };
      }
      function g(t) {
        return (
          (g = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          g(t)
        );
      }
      function b(t, e, n) {
        return (
          (e = x(e)) in t
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
      function x(t) {
        var e = (function (t, e) {
          if ("object" !== s(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== s(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === s(e) ? e : String(e);
      }
      var w = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && v(t, e);
        })(h, t);
        var e,
          n,
          i,
          s = m(h);
        function h() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, h),
            s.apply(this, arguments)
          );
        }
        return (
          (e = h),
          (i = [
            {
              key: "renderLineItem",
              value: function (t, e) {
                var n;
                if (r.isValidElement(t)) n = r.cloneElement(t, e);
                else if (o()(t)) n = t(e);
                else {
                  var i = e.x1,
                    a = e.y1,
                    s = e.x2,
                    h = e.y2,
                    d = e.key,
                    y = p(e, c),
                    v = (0, u.L6)(y),
                    m = (v.offset, p(v, l));
                  n = r.createElement(
                    "line",
                    f({}, m, {
                      x1: i,
                      y1: a,
                      x2: s,
                      y2: h,
                      fill: "none",
                      key: d,
                    }),
                  );
                }
                return n;
              },
            },
          ]),
          (n = [
            {
              key: "renderHorizontal",
              value: function (t) {
                var e = this,
                  n = this.props,
                  i = n.x,
                  o = n.width,
                  a = n.horizontal;
                if (!t || !t.length) return null;
                var u = t.map(function (t, n) {
                  var r = d(
                    d({}, e.props),
                    {},
                    {
                      x1: i,
                      y1: t,
                      x2: i + o,
                      y2: t,
                      key: "line-".concat(n),
                      index: n,
                    },
                  );
                  return h.renderLineItem(a, r);
                });
                return r.createElement(
                  "g",
                  { className: "recharts-cartesian-grid-horizontal" },
                  u,
                );
              },
            },
            {
              key: "renderVertical",
              value: function (t) {
                var e = this,
                  n = this.props,
                  i = n.y,
                  o = n.height,
                  a = n.vertical;
                if (!t || !t.length) return null;
                var u = t.map(function (t, n) {
                  var r = d(
                    d({}, e.props),
                    {},
                    {
                      x1: t,
                      y1: i,
                      x2: t,
                      y2: i + o,
                      key: "line-".concat(n),
                      index: n,
                    },
                  );
                  return h.renderLineItem(a, r);
                });
                return r.createElement(
                  "g",
                  { className: "recharts-cartesian-grid-vertical" },
                  u,
                );
              },
            },
            {
              key: "renderVerticalStripes",
              value: function (t) {
                var e = this.props.verticalFill;
                if (!e || !e.length) return null;
                var n = this.props,
                  i = n.fillOpacity,
                  o = n.x,
                  a = n.y,
                  u = n.width,
                  c = n.height,
                  l = t
                    .map(function (t) {
                      return Math.round(t + o - o);
                    })
                    .sort(function (t, e) {
                      return t - e;
                    });
                o !== l[0] && l.unshift(0);
                var s = l.map(function (t, n) {
                  var s = l[n + 1] ? l[n + 1] - t : o + u - t;
                  if (s <= 0) return null;
                  var f = n % e.length;
                  return r.createElement("rect", {
                    key: "react-".concat(n),
                    x: t,
                    y: a,
                    width: s,
                    height: c,
                    stroke: "none",
                    fill: e[f],
                    fillOpacity: i,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return r.createElement(
                  "g",
                  { className: "recharts-cartesian-gridstripes-vertical" },
                  s,
                );
              },
            },
            {
              key: "renderHorizontalStripes",
              value: function (t) {
                var e = this.props.horizontalFill;
                if (!e || !e.length) return null;
                var n = this.props,
                  i = n.fillOpacity,
                  o = n.x,
                  a = n.y,
                  u = n.width,
                  c = n.height,
                  l = t
                    .map(function (t) {
                      return Math.round(t + a - a);
                    })
                    .sort(function (t, e) {
                      return t - e;
                    });
                a !== l[0] && l.unshift(0);
                var s = l.map(function (t, n) {
                  var s = l[n + 1] ? l[n + 1] - t : a + c - t;
                  if (s <= 0) return null;
                  var f = n % e.length;
                  return r.createElement("rect", {
                    key: "react-".concat(n),
                    y: t,
                    x: o,
                    height: s,
                    width: u,
                    stroke: "none",
                    fill: e[f],
                    fillOpacity: i,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return r.createElement(
                  "g",
                  { className: "recharts-cartesian-gridstripes-horizontal" },
                  s,
                );
              },
            },
            {
              key: "renderBackground",
              value: function () {
                var t = this.props.fill;
                if (!t || "none" === t) return null;
                var e = this.props,
                  n = e.fillOpacity,
                  i = e.x,
                  o = e.y,
                  a = e.width,
                  u = e.height;
                return r.createElement("rect", {
                  x: i,
                  y: o,
                  width: a,
                  height: u,
                  stroke: "none",
                  fill: t,
                  fillOpacity: n,
                  className: "recharts-cartesian-grid-bg",
                });
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.x,
                  n = t.y,
                  i = t.width,
                  u = t.height,
                  c = t.horizontal,
                  l = t.vertical,
                  s = t.horizontalCoordinatesGenerator,
                  f = t.verticalCoordinatesGenerator,
                  p = t.xAxis,
                  h = t.yAxis,
                  y = t.offset,
                  v = t.chartWidth,
                  m = t.chartHeight,
                  g = t.syncWithTicks,
                  b = t.horizontalValues,
                  x = t.verticalValues;
                if (
                  !(0, a.hj)(i) ||
                  i <= 0 ||
                  !(0, a.hj)(u) ||
                  u <= 0 ||
                  !(0, a.hj)(e) ||
                  e !== +e ||
                  !(0, a.hj)(n) ||
                  n !== +n
                )
                  return null;
                var w = this.props,
                  O = w.horizontalPoints,
                  j = w.verticalPoints;
                if ((!O || !O.length) && o()(s)) {
                  var S = b && b.length;
                  O = s(
                    {
                      yAxis: h
                        ? d(d({}, h), {}, { ticks: S ? b : h.ticks })
                        : void 0,
                      width: v,
                      height: m,
                      offset: y,
                    },
                    !!S || g,
                  );
                }
                if ((!j || !j.length) && o()(f)) {
                  var E = x && x.length;
                  j = f(
                    {
                      xAxis: p
                        ? d(d({}, p), {}, { ticks: E ? x : p.ticks })
                        : void 0,
                      width: v,
                      height: m,
                      offset: y,
                    },
                    !!E || g,
                  );
                }
                return r.createElement(
                  "g",
                  { className: "recharts-cartesian-grid" },
                  this.renderBackground(),
                  c && this.renderHorizontal(O),
                  l && this.renderVertical(j),
                  c && this.renderHorizontalStripes(O),
                  l && this.renderVerticalStripes(j),
                );
              },
            },
          ]) && y(e.prototype, n),
          i && y(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          h
        );
      })(r.PureComponent);
      b(w, "displayName", "CartesianGrid"),
        b(w, "defaultProps", {
          horizontal: !0,
          vertical: !0,
          horizontalPoints: [],
          verticalPoints: [],
          stroke: "#ccc",
          fill: "none",
          verticalFill: [],
          horizontalFill: [],
        });
    },
    85458: (t, e, n) => {
      "use strict";
      n.d(e, { W: () => f });
      var r = n(47427),
        i = n(47430),
        o = n(94797),
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
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
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
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
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
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
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
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function s(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function f(t) {
        var e = t.offset,
          n = t.layout,
          l = t.width,
          f = t.dataKey,
          p = t.data,
          h = t.dataPointFormatter,
          d = t.xAxis,
          y = t.yAxis,
          v = s(t, a),
          m = (0, o.L6)(v),
          g = p.map(function (t) {
            var o = h(t, f),
              a = o.x,
              s = o.y,
              p = o.value,
              v = o.errorVal;
            if (!v) return null;
            var g,
              b,
              x = [];
            if (Array.isArray(v)) {
              var w = c(v, 2);
              (g = w[0]), (b = w[1]);
            } else g = b = v;
            if ("vertical" === n) {
              var O = d.scale,
                j = s + e,
                S = j + l,
                E = j - l,
                A = O(p - g),
                P = O(p + b);
              x.push({ x1: P, y1: S, x2: P, y2: E }),
                x.push({ x1: A, y1: j, x2: P, y2: j }),
                x.push({ x1: A, y1: S, x2: A, y2: E });
            } else if ("horizontal" === n) {
              var k = y.scale,
                M = a + e,
                T = M - l,
                _ = M + l,
                C = k(p - g),
                N = k(p + b);
              x.push({ x1: T, y1: N, x2: _, y2: N }),
                x.push({ x1: M, y1: C, x2: M, y2: N }),
                x.push({ x1: T, y1: C, x2: _, y2: C });
            }
            return r.createElement(
              i.m,
              u(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    x.map(function (t) {
                      return ""
                        .concat(t.x1, "-")
                        .concat(t.x2, "-")
                        .concat(t.y1, "-")
                        .concat(t.y2);
                    }),
                  ),
                },
                m,
              ),
              x.map(function (t) {
                return r.createElement(
                  "line",
                  u({}, t, {
                    key: "line-"
                      .concat(t.x1, "-")
                      .concat(t.x2, "-")
                      .concat(t.y1, "-")
                      .concat(t.y2),
                  }),
                );
              }),
            );
          });
        return r.createElement(i.m, { className: "recharts-errorBars" }, g);
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
    52942: (t, e, n) => {
      "use strict";
      n.d(e, { x: () => B });
      var r = n(47427),
        i = n(15819),
        o = n(8889),
        a = n.n(o),
        u = n(38716),
        c = n.n(u),
        l = n(49198),
        s = n.n(l),
        f = n(84148),
        p = n(84223),
        h = n(14166),
        d = n(47430),
        y = n(72961),
        v = n(85458),
        m = n(76325),
        g = n(94797),
        b = n(77125),
        x = n(70416),
        w = ["type", "layout", "connectNulls", "ref"];
      function O(t) {
        return (
          (O =
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
          O(t)
        );
      }
      function j(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function S() {
        return (
          (S = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          S.apply(this, arguments)
        );
      }
      function E(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? E(Object(n), !0).forEach(function (e) {
                D(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : E(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function P(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return k(t);
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
            if ("string" == typeof t) return k(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return k(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function k(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function M(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, I(r.key), r);
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
          var n,
            r = N(t);
          if (e) {
            var i = N(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === O(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return C(t);
          })(this, n);
        };
      }
      function C(t) {
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
      function D(t, e, n) {
        return (
          (e = I(e)) in t
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
      function I(t) {
        var e = (function (t, e) {
          if ("object" !== O(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== O(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === O(e) ? e : String(e);
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
            e && T(t, e);
        })(l, t);
        var e,
          n,
          o,
          u = _(l);
        function l() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, l);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            D(C((t = u.call.apply(u, [this].concat(n)))), "state", {
              isAnimationFinished: !0,
              totalLength: 0,
            }),
            D(C(t), "generateSimpleStrokeDasharray", function (t, e) {
              return "".concat(e, "px ").concat(t - e, "px");
            }),
            D(C(t), "getStrokeDasharray", function (e, n, r) {
              var i = r.reduce(function (t, e) {
                return t + e;
              });
              if (!i) return t.generateSimpleStrokeDasharray(n, e);
              for (
                var o = Math.floor(e / i),
                  a = e % i,
                  u = n - e,
                  c = [],
                  s = 0,
                  f = 0;
                s < r.length;
                f += r[s], ++s
              )
                if (f + r[s] > a) {
                  c = [].concat(P(r.slice(0, s)), [a - f]);
                  break;
                }
              var p = c.length % 2 == 0 ? [0, u] : [u];
              return []
                .concat(P(l.repeat(r, o)), P(c), p)
                .map(function (t) {
                  return "".concat(t, "px");
                })
                .join(", ");
            }),
            D(C(t), "id", (0, m.EL)("recharts-line-")),
            D(C(t), "pathRef", function (e) {
              t.mainCurve = e;
            }),
            D(C(t), "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 }),
                t.props.onAnimationEnd && t.props.onAnimationEnd();
            }),
            D(C(t), "handleAnimationStart", function () {
              t.setState({ isAnimationFinished: !1 }),
                t.props.onAnimationStart && t.props.onAnimationStart();
            }),
            t
          );
        }
        return (
          (e = l),
          (o = [
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
                  var n = t.length % 2 != 0 ? [].concat(P(t), [0]) : t,
                    r = [],
                    i = 0;
                  i < e;
                  ++i
                )
                  r = [].concat(P(r), P(n));
                return r;
              },
            },
            {
              key: "renderDotItem",
              value: function (t, e) {
                var n;
                if (r.isValidElement(t)) n = r.cloneElement(t, e);
                else if (a()(t)) n = t(e);
                else {
                  var i = (0, f.Z)("recharts-line-dot", t ? t.className : "");
                  n = r.createElement(h.o, S({}, e, { className: i }));
                }
                return n;
              },
            },
          ]),
          (n = [
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
              key: "componentDidUpdate",
              value: function () {
                if (this.props.isAnimationActive) {
                  var t = this.getTotalLength();
                  t !== this.state.totalLength &&
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
                var n = this.props,
                  i = n.points,
                  o = n.xAxis,
                  a = n.yAxis,
                  u = n.layout,
                  c = n.children,
                  l = (0, g.NN)(c, v.W);
                if (!l) return null;
                var s = function (t, e) {
                    return {
                      x: t.x,
                      y: t.y,
                      value: t.value,
                      errorVal: (0, x.F$)(t.payload, e),
                    };
                  },
                  f = { clipPath: t ? "url(#clipPath-".concat(e, ")") : null };
                return r.createElement(
                  d.m,
                  f,
                  l.map(function (t) {
                    return r.cloneElement(t, {
                      key: "bar-".concat(t.props.dataKey),
                      data: i,
                      xAxis: o,
                      yAxis: a,
                      layout: u,
                      dataPointFormatter: s,
                    });
                  }),
                );
              },
            },
            {
              key: "renderDots",
              value: function (t, e, n) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var i = this.props,
                  o = i.dot,
                  a = i.points,
                  u = i.dataKey,
                  c = (0, g.L6)(this.props),
                  s = (0, g.L6)(o, !0),
                  f = a.map(function (t, e) {
                    var n = A(
                      A(A({ key: "dot-".concat(e), r: 3 }, c), s),
                      {},
                      {
                        value: t.value,
                        dataKey: u,
                        cx: t.x,
                        cy: t.y,
                        index: e,
                        payload: t.payload,
                      },
                    );
                    return l.renderDotItem(o, n);
                  }),
                  p = {
                    clipPath: t
                      ? "url(#clipPath-".concat(e ? "" : "dots-").concat(n, ")")
                      : null,
                  };
                return r.createElement(
                  d.m,
                  S({ className: "recharts-line-dots", key: "dots" }, p),
                  f,
                );
              },
            },
            {
              key: "renderCurveStatically",
              value: function (t, e, n, i) {
                var o = this.props,
                  a = o.type,
                  u = o.layout,
                  c = o.connectNulls,
                  l = (o.ref, j(o, w)),
                  s = A(
                    A(
                      A({}, (0, g.L6)(l, !0)),
                      {},
                      {
                        fill: "none",
                        className: "recharts-line-curve",
                        clipPath: e ? "url(#clipPath-".concat(n, ")") : null,
                        points: t,
                      },
                      i,
                    ),
                    {},
                    { type: a, layout: u, connectNulls: c },
                  );
                return r.createElement(
                  p.H,
                  S({}, s, { pathRef: this.pathRef }),
                );
              },
            },
            {
              key: "renderCurveWithAnimation",
              value: function (t, e) {
                var n = this,
                  o = this.props,
                  a = o.points,
                  u = o.strokeDasharray,
                  c = o.isAnimationActive,
                  l = o.animationBegin,
                  s = o.animationDuration,
                  f = o.animationEasing,
                  p = o.animationId,
                  h = o.animateNewValues,
                  d = o.width,
                  y = o.height,
                  v = this.state,
                  g = v.prevPoints,
                  b = v.totalLength;
                return r.createElement(
                  i.ZP,
                  {
                    begin: l,
                    duration: s,
                    isActive: c,
                    easing: f,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "line-".concat(p),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (r) {
                    var i = r.t;
                    if (g) {
                      var o = g.length / a.length,
                        c = a.map(function (t, e) {
                          var n = Math.floor(e * o);
                          if (g[n]) {
                            var r = g[n],
                              a = (0, m.k4)(r.x, t.x),
                              u = (0, m.k4)(r.y, t.y);
                            return A(A({}, t), {}, { x: a(i), y: u(i) });
                          }
                          if (h) {
                            var c = (0, m.k4)(2 * d, t.x),
                              l = (0, m.k4)(y / 2, t.y);
                            return A(A({}, t), {}, { x: c(i), y: l(i) });
                          }
                          return A(A({}, t), {}, { x: t.x, y: t.y });
                        });
                      return n.renderCurveStatically(c, t, e);
                    }
                    var l,
                      s = (0, m.k4)(0, b)(i);
                    if (u) {
                      var f = ""
                        .concat(u)
                        .split(/[,\s]+/gim)
                        .map(function (t) {
                          return parseFloat(t);
                        });
                      l = n.getStrokeDasharray(s, b, f);
                    } else l = n.generateSimpleStrokeDasharray(b, s);
                    return n.renderCurveStatically(a, t, e, {
                      strokeDasharray: l,
                    });
                  },
                );
              },
            },
            {
              key: "renderCurve",
              value: function (t, e) {
                var n = this.props,
                  r = n.points,
                  i = n.isAnimationActive,
                  o = this.state,
                  a = o.prevPoints,
                  u = o.totalLength;
                return i && r && r.length && ((!a && u > 0) || !s()(a, r))
                  ? this.renderCurveWithAnimation(t, e)
                  : this.renderCurveStatically(r, t, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  n = e.hide,
                  i = e.dot,
                  o = e.points,
                  a = e.className,
                  u = e.xAxis,
                  l = e.yAxis,
                  s = e.top,
                  p = e.left,
                  h = e.width,
                  v = e.height,
                  m = e.isAnimationActive,
                  b = e.id;
                if (n || !o || !o.length) return null;
                var x = this.state.isAnimationFinished,
                  w = 1 === o.length,
                  O = (0, f.Z)("recharts-line", a),
                  j = u && u.allowDataOverflow,
                  S = l && l.allowDataOverflow,
                  E = j || S,
                  A = c()(b) ? this.id : b,
                  P =
                    null !== (t = (0, g.L6)(i)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = P.r,
                  M = void 0 === k ? 3 : k,
                  T = P.strokeWidth,
                  _ = void 0 === T ? 2 : T,
                  C = ((0, g.$k)(i) ? i : {}).clipDot,
                  N = void 0 === C || C,
                  D = 2 * M + _;
                return r.createElement(
                  d.m,
                  { className: O },
                  j || S
                    ? r.createElement(
                        "defs",
                        null,
                        r.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(A) },
                          r.createElement("rect", {
                            x: j ? p : p - h / 2,
                            y: S ? s : s - v / 2,
                            width: j ? h : 2 * h,
                            height: S ? v : 2 * v,
                          }),
                        ),
                        !N &&
                          r.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(A) },
                            r.createElement("rect", {
                              x: p - D / 2,
                              y: s - D / 2,
                              width: h + D,
                              height: v + D,
                            }),
                          ),
                      )
                    : null,
                  !w && this.renderCurve(E, A),
                  this.renderErrorBar(E, A),
                  (w || i) && this.renderDots(E, N, A),
                  (!m || x) && y.e.renderCallByParent(this.props, o),
                );
              },
            },
          ]) && M(e.prototype, n),
          o && M(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          l
        );
      })(r.PureComponent);
      D(B, "displayName", "Line"),
        D(B, "defaultProps", {
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
          isAnimationActive: !b.x.isSsr,
          animateNewValues: !0,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
          hide: !1,
          label: !1,
        }),
        D(B, "getComposedData", function (t) {
          var e = t.props,
            n = t.xAxis,
            r = t.yAxis,
            i = t.xAxisTicks,
            o = t.yAxisTicks,
            a = t.dataKey,
            u = t.bandSize,
            l = t.displayedData,
            s = t.offset,
            f = e.layout;
          return A(
            {
              points: l.map(function (t, e) {
                var l = (0, x.F$)(t, a);
                return "horizontal" === f
                  ? {
                      x: (0, x.Hv)({
                        axis: n,
                        ticks: i,
                        bandSize: u,
                        entry: t,
                        index: e,
                      }),
                      y: c()(l) ? null : r.scale(l),
                      value: l,
                      payload: t,
                    }
                  : {
                      x: c()(l) ? null : n.scale(l),
                      y: (0, x.Hv)({
                        axis: r,
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
    84965: (t, e, n) => {
      "use strict";
      n.d(e, { d: () => E });
      var r = n(47427),
        i = n(8889),
        o = n.n(i),
        a = n(45446),
        u = n.n(a),
        c = n(84148),
        l = n(47430),
        s = n(47094),
        f = n(75658),
        p = n(76325),
        h = n(52871),
        d = n(90481),
        y = n(94797);
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
      function m(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(n), !0).forEach(function (e) {
                b(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : m(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function b(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== v(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== v(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === v(e) ? e : String(e);
          })(e)) in t
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
      function x(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
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
            if ("string" == typeof t) return w(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return w(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function w(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function O() {
        return (
          (O = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          O.apply(this, arguments)
        );
      }
      var j = function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : o()(t)
              ? t(e)
              : r.createElement(
                  "line",
                  O({}, e, { className: "recharts-reference-line-line" }),
                );
        },
        S = function (t, e, n, r, i) {
          var o = i.viewBox,
            a = o.x,
            c = o.y,
            l = o.width,
            s = o.height,
            p = i.position;
          if (n) {
            var h = i.y,
              d = i.yAxis.orientation,
              y = t.y.apply(h, { position: p });
            if ((0, f.B)(i, "discard") && !t.y.isInRange(y)) return null;
            var v = [
              { x: a + l, y },
              { x: a, y },
            ];
            return "left" === d ? v.reverse() : v;
          }
          if (e) {
            var m = i.x,
              g = i.xAxis.orientation,
              b = t.x.apply(m, { position: p });
            if ((0, f.B)(i, "discard") && !t.x.isInRange(b)) return null;
            var x = [
              { x: b, y: c + s },
              { x: b, y: c },
            ];
            return "top" === g ? x.reverse() : x;
          }
          if (r) {
            var w = i.segment.map(function (e) {
              return t.apply(e, { position: p });
            });
            return (0, f.B)(i, "discard") &&
              u()(w, function (e) {
                return !t.isInRange(e);
              })
              ? null
              : w;
          }
          return null;
        };
      function E(t) {
        var e = t.x,
          n = t.y,
          i = t.segment,
          o = t.xAxis,
          a = t.yAxis,
          u = t.shape,
          v = t.className,
          m = t.alwaysShow,
          b = t.clipPathId;
        (0, d.Z)(
          void 0 === m,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var w = (0, h.Ky)({ x: o.scale, y: a.scale }),
          O = (0, p.P2)(e),
          E = (0, p.P2)(n),
          A = i && 2 === i.length,
          P = S(w, O, E, A, t);
        if (!P) return null;
        var k = x(P, 2),
          M = k[0],
          T = M.x,
          _ = M.y,
          C = k[1],
          N = C.x,
          D = C.y,
          I = g(
            g(
              {
                clipPath: (0, f.B)(t, "hidden")
                  ? "url(#".concat(b, ")")
                  : void 0,
              },
              (0, y.L6)(t, !0),
            ),
            {},
            { x1: T, y1: _, x2: N, y2: D },
          );
        return r.createElement(
          l.m,
          { className: (0, c.Z)("recharts-reference-line", v) },
          j(u, I),
          s._.renderCallByParent(t, (0, h._b)({ x1: T, y1: _, x2: N, y2: D })),
        );
      }
      (E.displayName = "ReferenceLine"),
        (E.defaultProps = {
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
    90291: (t, e, n) => {
      "use strict";
      n.d(e, { K: () => r });
      var r = function () {
        return null;
      };
      (r.displayName = "XAxis"),
        (r.defaultProps = {
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
    56886: (t, e, n) => {
      "use strict";
      n.d(e, { B: () => r });
      var r = function () {
        return null;
      };
      (r.displayName = "YAxis"),
        (r.defaultProps = {
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
    22559: (t, e, n) => {
      "use strict";
      n.d(e, { c: () => ht });
      var r,
        i = n(6256),
        o = n(47427),
        a = n(84148),
        u = n(15819),
        c = n(8889),
        l = n.n(c),
        s = n(24149),
        f = n.n(s),
        p = n(38716),
        h = n.n(p),
        d = n(98176),
        y = n.n(d),
        v = n(49198),
        m = n.n(v),
        g = n(84223),
        b = n(14166),
        x = n(47430),
        w = n(72961),
        O = n(77125),
        j = n(76325),
        S = n(70416),
        E = n(94797),
        A = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"];
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
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function M() {
        return (
          (M = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          M.apply(this, arguments)
        );
      }
      function T(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? T(Object(n), !0).forEach(function (e) {
                L(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : T(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function C(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, R(r.key), r);
        }
      }
      function N(t, e) {
        return (
          (N = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          N(t, e)
        );
      }
      function D(t) {
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
          var n,
            r = B(t);
          if (e) {
            var i = B(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === P(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return I(t);
          })(this, n);
        };
      }
      function I(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
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
      function L(t, e, n) {
        return (
          (e = R(e)) in t
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
      function R(t) {
        var e = (function (t, e) {
          if ("object" !== P(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== P(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === P(e) ? e : String(e);
      }
      var z = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && N(t, e);
        })(c, t);
        var e,
          n,
          r,
          i = D(c);
        function c() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, c);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            L(I((t = i.call.apply(i, [this].concat(n)))), "state", {
              isAnimationFinished: !0,
            }),
            L(I(t), "id", (0, j.EL)("recharts-area-")),
            L(I(t), "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), l()(e) && e();
            }),
            L(I(t), "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), l()(e) && e();
            }),
            t
          );
        }
        return (
          (e = c),
          (r = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curPoints: t.points,
                      curBaseLine: t.baseLine,
                      prevPoints: e.curPoints,
                      prevBaseLine: e.curBaseLine,
                    }
                  : t.points !== e.curPoints || t.baseLine !== e.curBaseLine
                    ? { curPoints: t.points, curBaseLine: t.baseLine }
                    : null;
              },
            },
          ]),
          (n = [
            {
              key: "renderDots",
              value: function (t, e, n) {
                var r = this.props.isAnimationActive,
                  i = this.state.isAnimationFinished;
                if (r && !i) return null;
                var a = this.props,
                  u = a.dot,
                  l = a.points,
                  s = a.dataKey,
                  f = (0, E.L6)(this.props),
                  p = (0, E.L6)(u, !0),
                  h = l.map(function (t, e) {
                    var n = _(
                      _(_({ key: "dot-".concat(e), r: 3 }, f), p),
                      {},
                      {
                        dataKey: s,
                        cx: t.x,
                        cy: t.y,
                        index: e,
                        value: t.value,
                        payload: t.payload,
                      },
                    );
                    return c.renderDotItem(u, n);
                  }),
                  d = {
                    clipPath: t
                      ? "url(#clipPath-".concat(e ? "" : "dots-").concat(n, ")")
                      : null,
                  };
                return o.createElement(
                  x.m,
                  M({ className: "recharts-area-dots" }, d),
                  h,
                );
              },
            },
            {
              key: "renderHorizontalRect",
              value: function (t) {
                var e = this.props,
                  n = e.baseLine,
                  r = e.points,
                  i = e.strokeWidth,
                  a = r[0].x,
                  u = r[r.length - 1].x,
                  c = t * Math.abs(a - u),
                  l = f()(
                    r.map(function (t) {
                      return t.y || 0;
                    }),
                  );
                return (
                  (0, j.hj)(n) && "number" == typeof n
                    ? (l = Math.max(n, l))
                    : n &&
                      Array.isArray(n) &&
                      n.length &&
                      (l = Math.max(
                        f()(
                          n.map(function (t) {
                            return t.y || 0;
                          }),
                        ),
                        l,
                      )),
                  (0, j.hj)(l)
                    ? o.createElement("rect", {
                        x: a < u ? a : a - c,
                        y: 0,
                        width: c,
                        height: Math.floor(
                          l + (i ? parseInt("".concat(i), 10) : 1),
                        ),
                      })
                    : null
                );
              },
            },
            {
              key: "renderVerticalRect",
              value: function (t) {
                var e = this.props,
                  n = e.baseLine,
                  r = e.points,
                  i = e.strokeWidth,
                  a = r[0].y,
                  u = r[r.length - 1].y,
                  c = t * Math.abs(a - u),
                  l = f()(
                    r.map(function (t) {
                      return t.x || 0;
                    }),
                  );
                return (
                  (0, j.hj)(n) && "number" == typeof n
                    ? (l = Math.max(n, l))
                    : n &&
                      Array.isArray(n) &&
                      n.length &&
                      (l = Math.max(
                        f()(
                          n.map(function (t) {
                            return t.x || 0;
                          }),
                        ),
                        l,
                      )),
                  (0, j.hj)(l)
                    ? o.createElement("rect", {
                        x: 0,
                        y: a < u ? a : a - c,
                        width: l + (i ? parseInt("".concat(i), 10) : 1),
                        height: Math.floor(c),
                      })
                    : null
                );
              },
            },
            {
              key: "renderClipRect",
              value: function (t) {
                return "vertical" === this.props.layout
                  ? this.renderVerticalRect(t)
                  : this.renderHorizontalRect(t);
              },
            },
            {
              key: "renderAreaStatically",
              value: function (t, e, n, r) {
                var i = this.props,
                  a = i.layout,
                  u = i.type,
                  c = i.stroke,
                  l = i.connectNulls,
                  s = i.isRange,
                  f = (i.ref, k(i, A));
                return o.createElement(
                  x.m,
                  { clipPath: n ? "url(#clipPath-".concat(r, ")") : null },
                  o.createElement(
                    g.H,
                    M({}, (0, E.L6)(f, !0), {
                      points: t,
                      connectNulls: l,
                      type: u,
                      baseLine: e,
                      layout: a,
                      stroke: "none",
                      className: "recharts-area-area",
                    }),
                  ),
                  "none" !== c &&
                    o.createElement(
                      g.H,
                      M({}, (0, E.L6)(this.props), {
                        className: "recharts-area-curve",
                        layout: a,
                        type: u,
                        connectNulls: l,
                        fill: "none",
                        points: t,
                      }),
                    ),
                  "none" !== c &&
                    s &&
                    o.createElement(
                      g.H,
                      M({}, (0, E.L6)(this.props), {
                        className: "recharts-area-curve",
                        layout: a,
                        type: u,
                        connectNulls: l,
                        fill: "none",
                        points: e,
                      }),
                    ),
                );
              },
            },
            {
              key: "renderAreaWithAnimation",
              value: function (t, e) {
                var n = this,
                  r = this.props,
                  i = r.points,
                  a = r.baseLine,
                  c = r.isAnimationActive,
                  l = r.animationBegin,
                  s = r.animationDuration,
                  f = r.animationEasing,
                  p = r.animationId,
                  d = this.state,
                  v = d.prevPoints,
                  m = d.prevBaseLine;
                return o.createElement(
                  u.ZP,
                  {
                    begin: l,
                    duration: s,
                    isActive: c,
                    easing: f,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "area-".concat(p),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (r) {
                    var u = r.t;
                    if (v) {
                      var c,
                        l = v.length / i.length,
                        s = i.map(function (t, e) {
                          var n = Math.floor(e * l);
                          if (v[n]) {
                            var r = v[n],
                              i = (0, j.k4)(r.x, t.x),
                              o = (0, j.k4)(r.y, t.y);
                            return _(_({}, t), {}, { x: i(u), y: o(u) });
                          }
                          return t;
                        });
                      return (
                        (c =
                          (0, j.hj)(a) && "number" == typeof a
                            ? (0, j.k4)(m, a)(u)
                            : h()(a) || y()(a)
                              ? (0, j.k4)(m, 0)(u)
                              : a.map(function (t, e) {
                                  var n = Math.floor(e * l);
                                  if (m[n]) {
                                    var r = m[n],
                                      i = (0, j.k4)(r.x, t.x),
                                      o = (0, j.k4)(r.y, t.y);
                                    return _(
                                      _({}, t),
                                      {},
                                      { x: i(u), y: o(u) },
                                    );
                                  }
                                  return t;
                                })),
                        n.renderAreaStatically(s, c, t, e)
                      );
                    }
                    return o.createElement(
                      x.m,
                      null,
                      o.createElement(
                        "defs",
                        null,
                        o.createElement(
                          "clipPath",
                          { id: "animationClipPath-".concat(e) },
                          n.renderClipRect(u),
                        ),
                      ),
                      o.createElement(
                        x.m,
                        { clipPath: "url(#animationClipPath-".concat(e, ")") },
                        n.renderAreaStatically(i, a, t, e),
                      ),
                    );
                  },
                );
              },
            },
            {
              key: "renderArea",
              value: function (t, e) {
                var n = this.props,
                  r = n.points,
                  i = n.baseLine,
                  o = n.isAnimationActive,
                  a = this.state,
                  u = a.prevPoints,
                  c = a.prevBaseLine,
                  l = a.totalLength;
                return o &&
                  r &&
                  r.length &&
                  ((!u && l > 0) || !m()(u, r) || !m()(c, i))
                  ? this.renderAreaWithAnimation(t, e)
                  : this.renderAreaStatically(r, i, t, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  n = e.hide,
                  r = e.dot,
                  i = e.points,
                  u = e.className,
                  c = e.top,
                  l = e.left,
                  s = e.xAxis,
                  f = e.yAxis,
                  p = e.width,
                  d = e.height,
                  y = e.isAnimationActive,
                  v = e.id;
                if (n || !i || !i.length) return null;
                var m = this.state.isAnimationFinished,
                  g = 1 === i.length,
                  b = (0, a.Z)("recharts-area", u),
                  O = s && s.allowDataOverflow,
                  j = f && f.allowDataOverflow,
                  S = O || j,
                  A = h()(v) ? this.id : v,
                  P =
                    null !== (t = (0, E.L6)(r)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = P.r,
                  M = void 0 === k ? 3 : k,
                  T = P.strokeWidth,
                  _ = void 0 === T ? 2 : T,
                  C = ((0, E.$k)(r) ? r : {}).clipDot,
                  N = void 0 === C || C,
                  D = 2 * M + _;
                return o.createElement(
                  x.m,
                  { className: b },
                  O || j
                    ? o.createElement(
                        "defs",
                        null,
                        o.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(A) },
                          o.createElement("rect", {
                            x: O ? l : l - p / 2,
                            y: j ? c : c - d / 2,
                            width: O ? p : 2 * p,
                            height: j ? d : 2 * d,
                          }),
                        ),
                        !N &&
                          o.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(A) },
                            o.createElement("rect", {
                              x: l - D / 2,
                              y: c - D / 2,
                              width: p + D,
                              height: d + D,
                            }),
                          ),
                      )
                    : null,
                  g ? null : this.renderArea(S, A),
                  (r || g) && this.renderDots(S, N, A),
                  (!y || m) && w.e.renderCallByParent(this.props, i),
                );
              },
            },
          ]) && C(e.prototype, n),
          r && C(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          c
        );
      })(o.PureComponent);
      (r = z),
        L(z, "displayName", "Area"),
        L(z, "defaultProps", {
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
          isAnimationActive: !O.x.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        L(z, "getBaseValue", function (t, e, n, r) {
          var i = t.layout,
            o = t.baseValue,
            a = e.props.baseValue,
            u = null != a ? a : o;
          if ((0, j.hj)(u) && "number" == typeof u) return u;
          var c = "horizontal" === i ? r : n,
            l = c.scale.domain();
          if ("number" === c.type) {
            var s = Math.max(l[0], l[1]),
              f = Math.min(l[0], l[1]);
            return "dataMin" === u
              ? f
              : "dataMax" === u || s < 0
                ? s
                : Math.max(Math.min(l[0], l[1]), 0);
          }
          return "dataMin" === u ? l[0] : "dataMax" === u ? l[1] : l[0];
        }),
        L(z, "getComposedData", function (t) {
          var e,
            n = t.props,
            i = t.item,
            o = t.xAxis,
            a = t.yAxis,
            u = t.xAxisTicks,
            c = t.yAxisTicks,
            l = t.bandSize,
            s = t.dataKey,
            f = t.stackedData,
            p = t.dataStartIndex,
            h = t.displayedData,
            d = t.offset,
            y = n.layout,
            v = f && f.length,
            m = r.getBaseValue(n, i, o, a),
            g = "horizontal" === y,
            b = !1,
            x = h.map(function (t, e) {
              var n;
              v
                ? (n = f[p + e])
                : ((n = (0, S.F$)(t, s)),
                  Array.isArray(n) ? (b = !0) : (n = [m, n]));
              var r = null == n[1] || (v && null == (0, S.F$)(t, s));
              return g
                ? {
                    x: (0, S.Hv)({
                      axis: o,
                      ticks: u,
                      bandSize: l,
                      entry: t,
                      index: e,
                    }),
                    y: r ? null : a.scale(n[1]),
                    value: n,
                    payload: t,
                  }
                : {
                    x: r ? null : o.scale(n[1]),
                    y: (0, S.Hv)({
                      axis: a,
                      ticks: c,
                      bandSize: l,
                      entry: t,
                      index: e,
                    }),
                    value: n,
                    payload: t,
                  };
            });
          return (
            (e =
              v || b
                ? x.map(function (t) {
                    var e = Array.isArray(t.value) ? t.value[0] : null;
                    return g
                      ? {
                          x: t.x,
                          y: null != e && null != t.y ? a.scale(e) : null,
                        }
                      : { x: null != e ? o.scale(e) : null, y: t.y };
                  })
                : g
                  ? a.scale(m)
                  : o.scale(m)),
            _({ points: x, baseLine: e, layout: y, isRange: b }, d)
          );
        }),
        L(z, "renderDotItem", function (t, e) {
          return o.isValidElement(t)
            ? o.cloneElement(t, e)
            : l()(t)
              ? t(e)
              : o.createElement(
                  b.o,
                  M({}, e, { className: "recharts-area-dot" }),
                );
        });
      var U = n(28531),
        F = n(52942),
        $ = function () {
          return null;
        };
      ($.displayName = "ZAxis"),
        ($.defaultProps = {
          zAxisId: 0,
          range: [64, 64],
          scale: "auto",
          type: "number",
        });
      var W = n(85458),
        Z = n(85674),
        q = n(81156),
        H = n(58054),
        G = n(37350),
        X = ["option", "isActive"];
      function Y() {
        return (
          (Y = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Y.apply(this, arguments)
        );
      }
      function V(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function K(t) {
        var e = t.option,
          n = t.isActive,
          r = V(t, X);
        return "string" == typeof e
          ? o.createElement(
              G.bn,
              Y(
                {
                  option: o.createElement(H.v, Y({ type: e }, r)),
                  isActive: n,
                  shapeType: "symbols",
                },
                r,
              ),
            )
          : o.createElement(
              G.bn,
              Y({ option: e, isActive: n, shapeType: "symbols" }, r),
            );
      }
      function J(t) {
        return (
          (J =
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
          J(t)
        );
      }
      function Q() {
        return (
          (Q = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Q.apply(this, arguments)
        );
      }
      function tt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function et(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tt(Object(n), !0).forEach(function (e) {
                ut(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : tt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function nt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, ct(r.key), r);
        }
      }
      function rt(t, e) {
        return (
          (rt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          rt(t, e)
        );
      }
      function it(t) {
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
          var n,
            r = at(t);
          if (e) {
            var i = at(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === J(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return ot(t);
          })(this, n);
        };
      }
      function ot(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function at(t) {
        return (
          (at = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          at(t)
        );
      }
      function ut(t, e, n) {
        return (
          (e = ct(e)) in t
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
      function ct(t) {
        var e = (function (t, e) {
          if ("object" !== J(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== J(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === J(e) ? e : String(e);
      }
      var lt = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && rt(t, e);
        })(c, t);
        var e,
          n,
          r,
          i = it(c);
        function c() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, c);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            ut(ot((t = i.call.apply(i, [this].concat(n)))), "state", {
              isAnimationFinished: !1,
            }),
            ut(ot(t), "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 });
            }),
            ut(ot(t), "handleAnimationStart", function () {
              t.setState({ isAnimationFinished: !1 });
            }),
            ut(ot(t), "id", (0, j.EL)("recharts-scatter-")),
            t
          );
        }
        return (
          (e = c),
          (r = [
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
          ]),
          (n = [
            {
              key: "renderSymbolsStatically",
              value: function (t) {
                var e = this,
                  n = this.props,
                  r = n.shape,
                  i = n.activeShape,
                  a = n.activeIndex,
                  u = (0, E.L6)(this.props);
                return t.map(function (t, n) {
                  var c = a === n,
                    l = c ? i : r,
                    s = et(et({ key: "symbol-".concat(n) }, u), t);
                  return o.createElement(
                    x.m,
                    Q(
                      { className: "recharts-scatter-symbol" },
                      (0, q.bw)(e.props, t, n),
                      {
                        key: "symbol-"
                          .concat(null == t ? void 0 : t.cx, "-")
                          .concat(null == t ? void 0 : t.cy, "-")
                          .concat(null == t ? void 0 : t.size),
                        role: "img",
                      },
                    ),
                    o.createElement(K, Q({ option: l, isActive: c }, s)),
                  );
                });
              },
            },
            {
              key: "renderSymbolsWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.points,
                  r = e.isAnimationActive,
                  i = e.animationBegin,
                  a = e.animationDuration,
                  c = e.animationEasing,
                  l = e.animationId,
                  s = this.state.prevPoints;
                return o.createElement(
                  u.ZP,
                  {
                    begin: i,
                    duration: a,
                    isActive: r,
                    easing: c,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(l),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (e) {
                    var r = e.t,
                      i = n.map(function (t, e) {
                        var n = s && s[e];
                        if (n) {
                          var i = (0, j.k4)(n.cx, t.cx),
                            o = (0, j.k4)(n.cy, t.cy),
                            a = (0, j.k4)(n.size, t.size);
                          return et(
                            et({}, t),
                            {},
                            { cx: i(r), cy: o(r), size: a(r) },
                          );
                        }
                        var u = (0, j.k4)(0, t.size);
                        return et(et({}, t), {}, { size: u(r) });
                      });
                    return o.createElement(
                      x.m,
                      null,
                      t.renderSymbolsStatically(i),
                    );
                  },
                );
              },
            },
            {
              key: "renderSymbols",
              value: function () {
                var t = this.props,
                  e = t.points,
                  n = t.isAnimationActive,
                  r = this.state.prevPoints;
                return !(n && e && e.length) || (r && m()(r, e))
                  ? this.renderSymbolsStatically(e)
                  : this.renderSymbolsWithAnimation();
              },
            },
            {
              key: "renderErrorBar",
              value: function () {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var t = this.props,
                  e = t.points,
                  n = t.xAxis,
                  r = t.yAxis,
                  i = t.children,
                  a = (0, E.NN)(i, W.W);
                return a
                  ? a.map(function (t, i) {
                      var a = t.props,
                        u = a.direction,
                        c = a.dataKey;
                      return o.cloneElement(t, {
                        key: "".concat(u, "-").concat(c, "-").concat(e[i]),
                        data: e,
                        xAxis: n,
                        yAxis: r,
                        layout: "x" === u ? "vertical" : "horizontal",
                        dataPointFormatter: function (t, e) {
                          return {
                            x: t.cx,
                            y: t.cy,
                            value: "x" === u ? +t.node.x : +t.node.y,
                            errorVal: (0, S.F$)(t, e),
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
                var t,
                  e,
                  n = this.props,
                  r = n.points,
                  i = n.line,
                  a = n.lineType,
                  u = n.lineJointType,
                  c = (0, E.L6)(this.props),
                  s = (0, E.L6)(i);
                if ("joint" === a)
                  t = r.map(function (t) {
                    return { x: t.cx, y: t.cy };
                  });
                else if ("fitting" === a) {
                  var f = (0, j.wr)(r),
                    p = f.xmin,
                    h = f.xmax,
                    d = f.a,
                    y = f.b,
                    v = function (t) {
                      return d * t + y;
                    };
                  t = [
                    { x: p, y: v(p) },
                    { x: h, y: v(h) },
                  ];
                }
                var m = et(
                  et(et({}, c), {}, { fill: "none", stroke: c && c.fill }, s),
                  {},
                  { points: t },
                );
                return (
                  (e = o.isValidElement(i)
                    ? o.cloneElement(i, m)
                    : l()(i)
                      ? i(m)
                      : o.createElement(g.H, Q({}, m, { type: u }))),
                  o.createElement(
                    x.m,
                    {
                      className: "recharts-scatter-line",
                      key: "recharts-scatter-line",
                    },
                    e,
                  )
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.hide,
                  n = t.points,
                  r = t.line,
                  i = t.className,
                  u = t.xAxis,
                  c = t.yAxis,
                  l = t.left,
                  s = t.top,
                  f = t.width,
                  p = t.height,
                  d = t.id,
                  y = t.isAnimationActive;
                if (e || !n || !n.length) return null;
                var v = this.state.isAnimationFinished,
                  m = (0, a.Z)("recharts-scatter", i),
                  g = u && u.allowDataOverflow,
                  b = c && c.allowDataOverflow,
                  O = g || b,
                  j = h()(d) ? this.id : d;
                return o.createElement(
                  x.m,
                  {
                    className: m,
                    clipPath: O ? "url(#clipPath-".concat(j, ")") : null,
                  },
                  g || b
                    ? o.createElement(
                        "defs",
                        null,
                        o.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(j) },
                          o.createElement("rect", {
                            x: g ? l : l - f / 2,
                            y: b ? s : s - p / 2,
                            width: g ? f : 2 * f,
                            height: b ? p : 2 * p,
                          }),
                        ),
                      )
                    : null,
                  r && this.renderLine(),
                  this.renderErrorBar(),
                  o.createElement(
                    x.m,
                    { key: "recharts-scatter-symbols" },
                    this.renderSymbols(),
                  ),
                  (!y || v) && w.e.renderCallByParent(this.props, n),
                );
              },
            },
          ]) && nt(e.prototype, n),
          r && nt(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          c
        );
      })(o.PureComponent);
      ut(lt, "displayName", "Scatter"),
        ut(lt, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          zAxisId: 0,
          legendType: "circle",
          lineType: "joint",
          lineJointType: "linear",
          data: [],
          shape: "circle",
          hide: !1,
          isAnimationActive: !O.x.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "linear",
        }),
        ut(lt, "getComposedData", function (t) {
          var e = t.xAxis,
            n = t.yAxis,
            r = t.zAxis,
            i = t.item,
            o = t.displayedData,
            a = t.xAxisTicks,
            u = t.yAxisTicks,
            c = t.offset,
            l = i.props.tooltipType,
            s = (0, E.NN)(i.props.children, Z.b),
            f = h()(e.dataKey) ? i.props.dataKey : e.dataKey,
            p = h()(n.dataKey) ? i.props.dataKey : n.dataKey,
            d = r && r.dataKey,
            y = r ? r.range : $.defaultProps.range,
            v = y && y[0],
            m = e.scale.bandwidth ? e.scale.bandwidth() : 0,
            g = n.scale.bandwidth ? n.scale.bandwidth() : 0,
            b = o.map(function (t, o) {
              var c = (0, S.F$)(t, f),
                y = (0, S.F$)(t, p),
                b = (!h()(d) && (0, S.F$)(t, d)) || "-",
                x = [
                  {
                    name: h()(e.dataKey) ? i.props.name : e.name || e.dataKey,
                    unit: e.unit || "",
                    value: c,
                    payload: t,
                    dataKey: f,
                    type: l,
                  },
                  {
                    name: h()(n.dataKey) ? i.props.name : n.name || n.dataKey,
                    unit: n.unit || "",
                    value: y,
                    payload: t,
                    dataKey: p,
                    type: l,
                  },
                ];
              "-" !== b &&
                x.push({
                  name: r.name || r.dataKey,
                  unit: r.unit || "",
                  value: b,
                  payload: t,
                  dataKey: d,
                  type: l,
                });
              var w = (0, S.Hv)({
                  axis: e,
                  ticks: a,
                  bandSize: m,
                  entry: t,
                  index: o,
                  dataKey: f,
                }),
                O = (0, S.Hv)({
                  axis: n,
                  ticks: u,
                  bandSize: g,
                  entry: t,
                  index: o,
                  dataKey: p,
                }),
                j = "-" !== b ? r.scale(b) : v,
                E = Math.sqrt(Math.max(j, 0) / Math.PI);
              return et(
                et({}, t),
                {},
                {
                  cx: w,
                  cy: O,
                  x: w - E,
                  y: O - E,
                  xAxis: e,
                  yAxis: n,
                  zAxis: r,
                  width: 2 * E,
                  height: 2 * E,
                  size: j,
                  node: { x: c, y, z: b },
                  tooltipPayload: x,
                  tooltipPosition: { x: w, y: O },
                  payload: t,
                },
                s && s[o] && s[o].props,
              );
            });
          return et({ points: b }, c);
        });
      var st = n(90291),
        ft = n(56886),
        pt = n(52871),
        ht = (0, i.z)({
          chartName: "ComposedChart",
          GraphicalChild: [F.x, z, U.$, lt],
          axisComponents: [
            { axisType: "xAxis", AxisComp: st.K },
            { axisType: "yAxis", AxisComp: ft.B },
            { axisType: "zAxis", AxisComp: $ },
          ],
          formatAxisMap: pt.t9,
        });
    },
    6256: (t, e, n) => {
      "use strict";
      n.d(e, { z: () => He });
      var r = n(47427),
        i = n(38716),
        o = n.n(i),
        a = n(8889),
        u = n.n(a),
        c = n(76072),
        l = n.n(c),
        s = n(18310),
        f = n.n(s),
        p = n(2045),
        h = n.n(p),
        d = n(48679),
        y = n.n(d),
        v = n(29200),
        m = n.n(v),
        g = n(55084),
        b = n.n(g),
        x = n(84148),
        w = n(7716),
        O = n(76325),
        j = n(12605),
        S = n(77125),
        E = n(52871);
      function A(t, e, n) {
        if (e < 1) return [];
        if (1 === e && void 0 === n) return t;
        for (var r = [], i = 0; i < t.length; i += e) {
          if (void 0 !== n && !0 !== n(t[i])) return;
          r.push(t[i]);
        }
        return r;
      }
      function P(t, e, n, r, i) {
        if (t * e < t * r || t * e > t * i) return !1;
        var o = n();
        return t * (e - (t * o) / 2 - r) >= 0 && t * (e + (t * o) / 2 - i) <= 0;
      }
      function k(t) {
        return (
          (k =
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
          k(t)
        );
      }
      function M(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? M(Object(n), !0).forEach(function (e) {
                _(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : M(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function _(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== k(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== k(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === k(e) ? e : String(e);
          })(e)) in t
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
      function C(t, e, n) {
        var r = t.tick,
          i = t.ticks,
          o = t.viewBox,
          a = t.minTickGap,
          c = t.orientation,
          l = t.interval,
          s = t.tickFormatter,
          f = t.unit,
          p = t.angle;
        if (!i || !i.length || !r) return [];
        if ((0, O.hj)(l) || S.x.isSsr)
          return (function (t, e) {
            return A(t, e + 1);
          })(i, "number" == typeof l && (0, O.hj)(l) ? l : 0);
        var h = [],
          d = "top" === c || "bottom" === c ? "width" : "height",
          y =
            f && "width" === d
              ? (0, j.xE)(f, { fontSize: e, letterSpacing: n })
              : { width: 0, height: 0 },
          v = function (t, r) {
            var i = u()(s) ? s(t.value, r) : t.value;
            return "width" === d
              ? (function (t, e, n) {
                  var r = {
                    width: t.width + e.width,
                    height: t.height + e.height,
                  };
                  return (0, E.xE)(r, n);
                })((0, j.xE)(i, { fontSize: e, letterSpacing: n }), y, p)
              : (0, j.xE)(i, { fontSize: e, letterSpacing: n })[d];
          },
          m = i.length >= 2 ? (0, O.uY)(i[1].coordinate - i[0].coordinate) : 1,
          g = (function (t, e, n) {
            var r = "width" === n,
              i = t.x,
              o = t.y,
              a = t.width,
              u = t.height;
            return 1 === e
              ? { start: r ? i : o, end: r ? i + a : o + u }
              : { start: r ? i + a : o + u, end: r ? i : o };
          })(o, m, d);
        return "equidistantPreserveStart" === l
          ? (function (t, e, n, r, i) {
              for (
                var o,
                  a = (r || []).slice(),
                  u = e.start,
                  c = e.end,
                  l = 0,
                  s = 1,
                  f = u,
                  p = function () {
                    var e = null == r ? void 0 : r[l];
                    if (void 0 === e) return { v: A(r, s) };
                    var o,
                      a = l,
                      p = function () {
                        return void 0 === o && (o = n(e, a)), o;
                      },
                      h = e.coordinate,
                      d = 0 === l || P(t, h, p, f, c);
                    d || ((l = 0), (f = u), (s += 1)),
                      d && ((f = h + t * (p() / 2 + i)), (l += s));
                  };
                s <= a.length;

              )
                if ((o = p())) return o.v;
              return [];
            })(m, g, v, i, a)
          : ((h =
              "preserveStart" === l || "preserveStartEnd" === l
                ? (function (t, e, n, r, i, o) {
                    var a = (r || []).slice(),
                      u = a.length,
                      c = e.start,
                      l = e.end;
                    if (o) {
                      var s = r[u - 1],
                        f = n(s, u - 1),
                        p = t * (s.coordinate + (t * f) / 2 - l);
                      (a[u - 1] = s =
                        T(
                          T({}, s),
                          {},
                          {
                            tickCoord:
                              p > 0 ? s.coordinate - p * t : s.coordinate,
                          },
                        )),
                        P(
                          t,
                          s.tickCoord,
                          function () {
                            return f;
                          },
                          c,
                          l,
                        ) &&
                          ((l = s.tickCoord - t * (f / 2 + i)),
                          (a[u - 1] = T(T({}, s), {}, { isShow: !0 })));
                    }
                    for (
                      var h = o ? u - 1 : u,
                        d = function (e) {
                          var r,
                            o = a[e],
                            u = function () {
                              return void 0 === r && (r = n(o, e)), r;
                            };
                          if (0 === e) {
                            var s = t * (o.coordinate - (t * u()) / 2 - c);
                            a[e] = o = T(
                              T({}, o),
                              {},
                              {
                                tickCoord:
                                  s < 0 ? o.coordinate - s * t : o.coordinate,
                              },
                            );
                          } else
                            a[e] = o = T(
                              T({}, o),
                              {},
                              { tickCoord: o.coordinate },
                            );
                          P(t, o.tickCoord, u, c, l) &&
                            ((c = o.tickCoord + t * (u() / 2 + i)),
                            (a[e] = T(T({}, o), {}, { isShow: !0 })));
                        },
                        y = 0;
                      y < h;
                      y++
                    )
                      d(y);
                    return a;
                  })(m, g, v, i, a, "preserveStartEnd" === l)
                : (function (t, e, n, r, i) {
                    for (
                      var o = (r || []).slice(),
                        a = o.length,
                        u = e.start,
                        c = e.end,
                        l = function (e) {
                          var r,
                            l = o[e],
                            s = function () {
                              return void 0 === r && (r = n(l, e)), r;
                            };
                          if (e === a - 1) {
                            var f = t * (l.coordinate + (t * s()) / 2 - c);
                            o[e] = l = T(
                              T({}, l),
                              {},
                              {
                                tickCoord:
                                  f > 0 ? l.coordinate - f * t : l.coordinate,
                              },
                            );
                          } else
                            o[e] = l = T(
                              T({}, l),
                              {},
                              { tickCoord: l.coordinate },
                            );
                          P(t, l.tickCoord, s, u, c) &&
                            ((c = l.tickCoord - t * (s() / 2 + i)),
                            (o[e] = T(T({}, l), {}, { isShow: !0 })));
                        },
                        s = a - 1;
                      s >= 0;
                      s--
                    )
                      l(s);
                    return o;
                  })(m, g, v, i, a)),
            h.filter(function (t) {
              return t.isShow;
            }));
      }
      var N = n(82440),
        D = n(47430),
        I = n(72236),
        B = n(88579),
        L = n(14166),
        R = n(83821),
        z = n(94797),
        U = n(31917),
        F = n(93998),
        $ = n(47094),
        W = n(81156),
        Z = ["viewBox"],
        q = ["viewBox"],
        H = ["ticks"];
      function G(t) {
        return (
          (G =
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
          G(t)
        );
      }
      function X() {
        return (
          (X = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          X.apply(this, arguments)
        );
      }
      function Y(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function V(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Y(Object(n), !0).forEach(function (e) {
                nt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Y(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function K(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function J(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, rt(r.key), r);
        }
      }
      function Q(t, e) {
        return (
          (Q = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Q(t, e)
        );
      }
      function tt(t) {
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
          var n,
            r = et(t);
          if (e) {
            var i = et(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === G(e) || "function" == typeof e)) return e;
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
          })(this, n);
        };
      }
      function et(t) {
        return (
          (et = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          et(t)
        );
      }
      function nt(t, e, n) {
        return (
          (e = rt(e)) in t
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
      function rt(t) {
        var e = (function (t, e) {
          if ("object" !== G(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== G(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === G(e) ? e : String(e);
      }
      var it = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && Q(t, e);
        })(a, t);
        var e,
          n,
          i,
          o = tt(a);
        function a(t) {
          var e;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            ((e = o.call(this, t)).state = { fontSize: "", letterSpacing: "" }),
            e
          );
        }
        return (
          (e = a),
          (i = [
            {
              key: "renderTickItem",
              value: function (t, e, n) {
                return r.isValidElement(t)
                  ? r.cloneElement(t, e)
                  : u()(t)
                    ? t(e)
                    : r.createElement(
                        F.x,
                        X({}, e, {
                          className: "recharts-cartesian-axis-tick-value",
                        }),
                        n,
                      );
              },
            },
          ]),
          (n = [
            {
              key: "shouldComponentUpdate",
              value: function (t, e) {
                var n = t.viewBox,
                  r = K(t, Z),
                  i = this.props,
                  o = i.viewBox,
                  a = K(i, q);
                return (
                  !(0, U.w)(n, o) || !(0, U.w)(r, a) || !(0, U.w)(e, this.state)
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
                  n,
                  r,
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
                  g = (0, O.hj)(t.tickCoord) ? t.tickCoord : t.coordinate;
                switch (p) {
                  case "top":
                    (e = n = t.coordinate),
                      (a = (r = (i = l + +!d * f) - v * m) - v * y),
                      (o = g);
                    break;
                  case "left":
                    (r = i = t.coordinate),
                      (o = (e = (n = c + +!d * s) - v * m) - v * y),
                      (a = g);
                    break;
                  case "right":
                    (r = i = t.coordinate),
                      (o = (e = (n = c + +d * s) + v * m) + v * y),
                      (a = g);
                    break;
                  default:
                    (e = n = t.coordinate),
                      (a = (r = (i = l + +d * f) + v * m) + v * y),
                      (o = g);
                }
                return {
                  line: { x1: e, y1: r, x2: n, y2: i },
                  tick: { x: o, y: a },
                };
              },
            },
            {
              key: "getTickTextAnchor",
              value: function () {
                var t,
                  e = this.props,
                  n = e.orientation,
                  r = e.mirror;
                switch (n) {
                  case "left":
                    t = r ? "start" : "end";
                    break;
                  case "right":
                    t = r ? "end" : "start";
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
                  n = t.mirror,
                  r = "end";
                switch (e) {
                  case "left":
                  case "right":
                    r = "middle";
                    break;
                  case "top":
                    r = n ? "start" : "end";
                    break;
                  default:
                    r = n ? "end" : "start";
                }
                return r;
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var t = this.props,
                  e = t.x,
                  n = t.y,
                  i = t.width,
                  o = t.height,
                  a = t.orientation,
                  u = t.mirror,
                  c = t.axisLine,
                  l = V(
                    V(V({}, (0, z.L6)(this.props)), (0, z.L6)(c)),
                    {},
                    { fill: "none" },
                  );
                if ("top" === a || "bottom" === a) {
                  var s = +(("top" === a && !u) || ("bottom" === a && u));
                  l = V(
                    V({}, l),
                    {},
                    { x1: e, y1: n + s * o, x2: e + i, y2: n + s * o },
                  );
                } else {
                  var p = +(("left" === a && !u) || ("right" === a && u));
                  l = V(
                    V({}, l),
                    {},
                    { x1: e + p * i, y1: n, x2: e + p * i, y2: n + o },
                  );
                }
                return r.createElement(
                  "line",
                  X({}, l, {
                    className: (0, x.Z)(
                      "recharts-cartesian-axis-line",
                      f()(c, "className"),
                    ),
                  }),
                );
              },
            },
            {
              key: "renderTicks",
              value: function (t, e, n) {
                var i = this,
                  o = this.props,
                  c = o.tickLine,
                  l = o.stroke,
                  s = o.tick,
                  p = o.tickFormatter,
                  h = o.unit,
                  d = C(V(V({}, this.props), {}, { ticks: t }), e, n),
                  y = this.getTickTextAnchor(),
                  v = this.getTickVerticalAnchor(),
                  m = (0, z.L6)(this.props),
                  g = (0, z.L6)(s),
                  b = V(V({}, m), {}, { fill: "none" }, (0, z.L6)(c)),
                  w = d.map(function (t, e) {
                    var n = i.getTickLineCoord(t),
                      o = n.line,
                      w = n.tick,
                      O = V(
                        V(
                          V(
                            V({ textAnchor: y, verticalAnchor: v }, m),
                            {},
                            { stroke: "none", fill: l },
                            g,
                          ),
                          w,
                        ),
                        {},
                        {
                          index: e,
                          payload: t,
                          visibleTicksCount: d.length,
                          tickFormatter: p,
                        },
                      );
                    return r.createElement(
                      D.m,
                      X(
                        {
                          className: "recharts-cartesian-axis-tick",
                          key: "tick-"
                            .concat(t.value, "-")
                            .concat(t.coordinate, "-")
                            .concat(t.tickCoord),
                        },
                        (0, W.bw)(i.props, t, e),
                      ),
                      c &&
                        r.createElement(
                          "line",
                          X({}, b, o, {
                            className: (0, x.Z)(
                              "recharts-cartesian-axis-tick-line",
                              f()(c, "className"),
                            ),
                          }),
                        ),
                      s &&
                        a.renderTickItem(
                          s,
                          O,
                          ""
                            .concat(u()(p) ? p(t.value, e) : t.value)
                            .concat(h || ""),
                        ),
                    );
                  });
                return r.createElement(
                  "g",
                  { className: "recharts-cartesian-axis-ticks" },
                  w,
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.axisLine,
                  i = e.width,
                  o = e.height,
                  a = e.ticksGenerator,
                  c = e.className;
                if (e.hide) return null;
                var l = this.props,
                  s = l.ticks,
                  f = K(l, H),
                  p = s;
                return (
                  u()(a) && (p = s && s.length > 0 ? a(this.props) : a(f)),
                  i <= 0 || o <= 0 || !p || !p.length
                    ? null
                    : r.createElement(
                        D.m,
                        {
                          className: (0, x.Z)("recharts-cartesian-axis", c),
                          ref: function (e) {
                            t.layerReference = e;
                          },
                        },
                        n && this.renderAxisLine(),
                        this.renderTicks(
                          p,
                          this.state.fontSize,
                          this.state.letterSpacing,
                        ),
                        $._.renderCallByParent(this.props),
                      )
                );
              },
            },
          ]) && J(e.prototype, n),
          i && J(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(r.Component);
      nt(it, "displayName", "CartesianAxis"),
        nt(it, "defaultProps", {
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
      var ot = n(9756),
        at = n(70416);
      function ut(t) {
        return (
          (ut =
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
          ut(t)
        );
      }
      function ct(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function lt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ct(Object(n), !0).forEach(function (e) {
                st(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : ct(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function st(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== ut(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== ut(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === ut(e) ? e : String(e);
          })(e)) in t
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
      var ft = ["Webkit", "Moz", "O", "ms"];
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
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          ht.apply(this, arguments)
        );
      }
      function dt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function yt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? dt(Object(n), !0).forEach(function (e) {
                wt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : dt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function vt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Ot(r.key), r);
        }
      }
      function mt(t, e) {
        return (
          (mt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          mt(t, e)
        );
      }
      function gt(t) {
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
          var n,
            r = xt(t);
          if (e) {
            var i = xt(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === pt(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return bt(t);
          })(this, n);
        };
      }
      function bt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
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
      function wt(t, e, n) {
        return (
          (e = Ot(e)) in t
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
      function Ot(t) {
        var e = (function (t, e) {
          if ("object" !== pt(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== pt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === pt(e) ? e : String(e);
      }
      var jt = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        St = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && mt(t, e);
          })(a, t);
          var e,
            n,
            i,
            o = gt(a);
          function a(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              wt(bt((e = o.call(this, t))), "handleDrag", function (t) {
                e.leaveTimer &&
                  (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
                  e.state.isTravellerMoving
                    ? e.handleTravellerMove(t)
                    : e.state.isSlideMoving && e.handleSlideDrag(t);
              }),
              wt(bt(e), "handleTouchMove", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  e.handleDrag(t.changedTouches[0]);
              }),
              wt(bt(e), "handleDragEnd", function () {
                e.setState(
                  { isTravellerMoving: !1, isSlideMoving: !1 },
                  function () {
                    var t = e.props,
                      n = t.endIndex,
                      r = t.onDragEnd,
                      i = t.startIndex;
                    null == r || r({ endIndex: n, startIndex: i });
                  },
                ),
                  e.detachDragEndListener();
              }),
              wt(bt(e), "handleLeaveWrapper", function () {
                (e.state.isTravellerMoving || e.state.isSlideMoving) &&
                  (e.leaveTimer = window.setTimeout(
                    e.handleDragEnd,
                    e.props.leaveTimeOut,
                  ));
              }),
              wt(bt(e), "handleEnterSlideOrTraveller", function () {
                e.setState({ isTextActive: !0 });
              }),
              wt(bt(e), "handleLeaveSlideOrTraveller", function () {
                e.setState({ isTextActive: !1 });
              }),
              wt(bt(e), "handleSlideDragStart", function (t) {
                var n = jt(t) ? t.changedTouches[0] : t;
                e.setState({
                  isTravellerMoving: !1,
                  isSlideMoving: !0,
                  slideMoveStartX: n.pageX,
                }),
                  e.attachDragEndListener();
              }),
              (e.travellerDragStartHandlers = {
                startX: e.handleTravellerDragStart.bind(bt(e), "startX"),
                endX: e.handleTravellerDragStart.bind(bt(e), "endX"),
              }),
              (e.state = {}),
              e
            );
          }
          return (
            (e = a),
            (i = [
              {
                key: "renderDefaultTraveller",
                value: function (t) {
                  var e = t.x,
                    n = t.y,
                    i = t.width,
                    o = t.height,
                    a = t.stroke,
                    u = Math.floor(n + o / 2) - 1;
                  return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("rect", {
                      x: e,
                      y: n,
                      width: i,
                      height: o,
                      fill: a,
                      stroke: "none",
                    }),
                    r.createElement("line", {
                      x1: e + 1,
                      y1: u,
                      x2: e + i - 1,
                      y2: u,
                      fill: "none",
                      stroke: "#fff",
                    }),
                    r.createElement("line", {
                      x1: e + 1,
                      y1: u + 2,
                      x2: e + i - 1,
                      y2: u + 2,
                      fill: "none",
                      stroke: "#fff",
                    }),
                  );
                },
              },
              {
                key: "renderTraveller",
                value: function (t, e) {
                  return r.isValidElement(t)
                    ? r.cloneElement(t, e)
                    : u()(t)
                      ? t(e)
                      : a.renderDefaultTraveller(e);
                },
              },
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  var n = t.data,
                    r = t.width,
                    i = t.x,
                    o = t.travellerWidth,
                    a = t.updateId,
                    u = t.startIndex,
                    c = t.endIndex;
                  if (n !== e.prevData || a !== e.prevUpdateId)
                    return yt(
                      {
                        prevData: n,
                        prevTravellerWidth: o,
                        prevUpdateId: a,
                        prevX: i,
                        prevWidth: r,
                      },
                      n && n.length
                        ? (function (t) {
                            var e = t.data,
                              n = t.startIndex,
                              r = t.endIndex,
                              i = t.x,
                              o = t.width,
                              a = t.travellerWidth;
                            if (!e || !e.length) return {};
                            var u = e.length,
                              c = (0, ot.x)()
                                .domain(l()(0, u))
                                .range([i, i + o - a]),
                              s = c.domain().map(function (t) {
                                return c(t);
                              });
                            return {
                              isTextActive: !1,
                              isSlideMoving: !1,
                              isTravellerMoving: !1,
                              isTravellerFocused: !1,
                              startX: c(n),
                              endX: c(r),
                              scale: c,
                              scaleValues: s,
                            };
                          })({
                            data: n,
                            width: r,
                            x: i,
                            travellerWidth: o,
                            startIndex: u,
                            endIndex: c,
                          })
                        : { scale: null, scaleValues: null },
                    );
                  if (
                    e.scale &&
                    (r !== e.prevWidth ||
                      i !== e.prevX ||
                      o !== e.prevTravellerWidth)
                  ) {
                    e.scale.range([i, i + r - o]);
                    var s = e.scale.domain().map(function (t) {
                      return e.scale(t);
                    });
                    return {
                      prevData: n,
                      prevTravellerWidth: o,
                      prevUpdateId: a,
                      prevX: i,
                      prevWidth: r,
                      startX: e.scale(t.startIndex),
                      endX: e.scale(t.endIndex),
                      scaleValues: s,
                    };
                  }
                  return null;
                },
              },
              {
                key: "getIndexInRange",
                value: function (t, e) {
                  for (var n = 0, r = t.length - 1; r - n > 1; ) {
                    var i = Math.floor((n + r) / 2);
                    t[i] > e ? (r = i) : (n = i);
                  }
                  return e >= t[r] ? r : n;
                },
              },
            ]),
            (n = [
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
                    n = t.endX,
                    r = this.state.scaleValues,
                    i = this.props,
                    o = i.gap,
                    u = i.data.length - 1,
                    c = Math.min(e, n),
                    l = Math.max(e, n),
                    s = a.getIndexInRange(r, c),
                    f = a.getIndexInRange(r, l);
                  return {
                    startIndex: s - (s % o),
                    endIndex: f === u ? u : f - (f % o),
                  };
                },
              },
              {
                key: "getTextOfTick",
                value: function (t) {
                  var e = this.props,
                    n = e.data,
                    r = e.tickFormatter,
                    i = e.dataKey,
                    o = (0, at.F$)(n[t], i, t);
                  return u()(r) ? r(o, t) : o;
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
                    n = e.slideMoveStartX,
                    r = e.startX,
                    i = e.endX,
                    o = this.props,
                    a = o.x,
                    u = o.width,
                    c = o.travellerWidth,
                    l = o.startIndex,
                    s = o.endIndex,
                    f = o.onChange,
                    p = t.pageX - n;
                  p > 0
                    ? (p = Math.min(p, a + u - c - i, a + u - c - r))
                    : p < 0 && (p = Math.max(p, a - r, a - i));
                  var h = this.getIndex({ startX: r + p, endX: i + p });
                  (h.startIndex === l && h.endIndex === s) || !f || f(h),
                    this.setState({
                      startX: r + p,
                      endX: i + p,
                      slideMoveStartX: t.pageX,
                    });
                },
              },
              {
                key: "handleTravellerDragStart",
                value: function (t, e) {
                  var n = jt(e) ? e.changedTouches[0] : e;
                  this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: t,
                    brushMoveStartX: n.pageX,
                  }),
                    this.attachDragEndListener();
                },
              },
              {
                key: "handleTravellerMove",
                value: function (t) {
                  var e,
                    n = this.state,
                    r = n.brushMoveStartX,
                    i = n.movingTravellerId,
                    o = n.endX,
                    a = n.startX,
                    u = this.state[i],
                    c = this.props,
                    l = c.x,
                    s = c.width,
                    f = c.travellerWidth,
                    p = c.onChange,
                    h = c.gap,
                    d = c.data,
                    y = { startX: this.state.startX, endX: this.state.endX },
                    v = t.pageX - r;
                  v > 0
                    ? (v = Math.min(v, l + s - f - u))
                    : v < 0 && (v = Math.max(v, l - u)),
                    (y[i] = u + v);
                  var m = this.getIndex(y),
                    g = m.startIndex,
                    b = m.endIndex;
                  this.setState(
                    (wt((e = {}), i, u + v),
                    wt(e, "brushMoveStartX", t.pageX),
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
                key: "handleTravellerMoveKeyboard",
                value: function (t, e) {
                  var n = this,
                    r = this.state,
                    i = r.scaleValues,
                    o = r.startX,
                    a = r.endX,
                    u = this.state[e],
                    c = i.indexOf(u);
                  if (-1 !== c) {
                    var l = c + t;
                    if (!(-1 === l || l >= i.length)) {
                      var s = i[l];
                      ("startX" === e && s >= a) ||
                        ("endX" === e && s <= o) ||
                        this.setState(wt({}, e, s), function () {
                          n.props.onChange(
                            n.getIndex({
                              startX: n.state.startX,
                              endX: n.state.endX,
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
                  var t = this.props,
                    e = t.x,
                    n = t.y,
                    i = t.width,
                    o = t.height,
                    a = t.fill,
                    u = t.stroke;
                  return r.createElement("rect", {
                    stroke: u,
                    fill: a,
                    x: e,
                    y: n,
                    width: i,
                    height: o,
                  });
                },
              },
              {
                key: "renderPanorama",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    n = t.y,
                    i = t.width,
                    o = t.height,
                    a = t.data,
                    u = t.children,
                    c = t.padding,
                    l = r.Children.only(u);
                  return l
                    ? r.cloneElement(l, {
                        x: e,
                        y: n,
                        width: i,
                        height: o,
                        margin: c,
                        compact: !0,
                        data: a,
                      })
                    : null;
                },
              },
              {
                key: "renderTravellerLayer",
                value: function (t, e) {
                  var n = this,
                    i = this.props,
                    o = i.y,
                    u = i.travellerWidth,
                    c = i.height,
                    l = i.traveller,
                    s = i.ariaLabel,
                    f = i.data,
                    p = i.startIndex,
                    h = i.endIndex,
                    d = Math.max(t, this.props.x),
                    y = yt(
                      yt({}, (0, z.L6)(this.props)),
                      {},
                      { x: d, y: o, width: u, height: c },
                    ),
                    v =
                      s ||
                      "Min value: "
                        .concat(f[p].name, ", Max value: ")
                        .concat(f[h].name);
                  return r.createElement(
                    D.m,
                    {
                      tabIndex: 0,
                      role: "slider",
                      "aria-label": v,
                      "aria-valuenow": t,
                      className: "recharts-brush-traveller",
                      onMouseEnter: this.handleEnterSlideOrTraveller,
                      onMouseLeave: this.handleLeaveSlideOrTraveller,
                      onMouseDown: this.travellerDragStartHandlers[e],
                      onTouchStart: this.travellerDragStartHandlers[e],
                      onKeyDown: function (t) {
                        ["ArrowLeft", "ArrowRight"].includes(t.key) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          n.handleTravellerMoveKeyboard(
                            "ArrowRight" === t.key ? 1 : -1,
                            e,
                          ));
                      },
                      onFocus: function () {
                        n.setState({ isTravellerFocused: !0 });
                      },
                      onBlur: function () {
                        n.setState({ isTravellerFocused: !1 });
                      },
                      style: { cursor: "col-resize" },
                    },
                    a.renderTraveller(l, y),
                  );
                },
              },
              {
                key: "renderSlide",
                value: function (t, e) {
                  var n = this.props,
                    i = n.y,
                    o = n.height,
                    a = n.stroke,
                    u = n.travellerWidth,
                    c = Math.min(t, e) + u,
                    l = Math.max(Math.abs(e - t) - u, 0);
                  return r.createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: { cursor: "move" },
                    stroke: "none",
                    fill: a,
                    fillOpacity: 0.2,
                    x: c,
                    y: i,
                    width: l,
                    height: o,
                  });
                },
              },
              {
                key: "renderText",
                value: function () {
                  var t = this.props,
                    e = t.startIndex,
                    n = t.endIndex,
                    i = t.y,
                    o = t.height,
                    a = t.travellerWidth,
                    u = t.stroke,
                    c = this.state,
                    l = c.startX,
                    s = c.endX,
                    f = { pointerEvents: "none", fill: u };
                  return r.createElement(
                    D.m,
                    { className: "recharts-brush-texts" },
                    r.createElement(
                      F.x,
                      ht(
                        {
                          textAnchor: "end",
                          verticalAnchor: "middle",
                          x: Math.min(l, s) - 5,
                          y: i + o / 2,
                        },
                        f,
                      ),
                      this.getTextOfTick(e),
                    ),
                    r.createElement(
                      F.x,
                      ht(
                        {
                          textAnchor: "start",
                          verticalAnchor: "middle",
                          x: Math.max(l, s) + a + 5,
                          y: i + o / 2,
                        },
                        f,
                      ),
                      this.getTextOfTick(n),
                    ),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.data,
                    n = t.className,
                    i = t.children,
                    o = t.x,
                    a = t.y,
                    u = t.width,
                    c = t.height,
                    l = t.alwaysShowText,
                    s = this.state,
                    f = s.startX,
                    p = s.endX,
                    h = s.isTextActive,
                    d = s.isSlideMoving,
                    y = s.isTravellerMoving,
                    v = s.isTravellerFocused;
                  if (
                    !e ||
                    !e.length ||
                    !(0, O.hj)(o) ||
                    !(0, O.hj)(a) ||
                    !(0, O.hj)(u) ||
                    !(0, O.hj)(c) ||
                    u <= 0 ||
                    c <= 0
                  )
                    return null;
                  var m = (0, x.Z)("recharts-brush", n),
                    g = 1 === r.Children.count(i),
                    b = (function (t, e) {
                      if (!t) return null;
                      var n = t.replace(/(\w)/, function (t) {
                          return t.toUpperCase();
                        }),
                        r = ft.reduce(function (t, r) {
                          return lt(lt({}, t), {}, st({}, r + n, e));
                        }, {});
                      return (r[t] = e), r;
                    })("userSelect", "none");
                  return r.createElement(
                    D.m,
                    {
                      className: m,
                      onMouseLeave: this.handleLeaveWrapper,
                      onTouchMove: this.handleTouchMove,
                      style: b,
                    },
                    this.renderBackground(),
                    g && this.renderPanorama(),
                    this.renderSlide(f, p),
                    this.renderTravellerLayer(f, "startX"),
                    this.renderTravellerLayer(p, "endX"),
                    (h || d || y || v || l) && this.renderText(),
                  );
                },
              },
            ]) && vt(e.prototype, n),
            i && vt(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(r.PureComponent);
      wt(St, "displayName", "Brush"),
        wt(St, "defaultProps", {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: "#fff",
          stroke: "#666",
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1,
        });
      var Et = n(52255),
        At = n(75658),
        Pt = n(90481);
      function kt(t) {
        return (
          (kt =
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
          kt(t)
        );
      }
      function Mt() {
        return (
          (Mt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Mt.apply(this, arguments)
        );
      }
      function Tt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _t(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Tt(Object(n), !0).forEach(function (e) {
                Ct(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Tt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Ct(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== kt(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== kt(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === kt(e) ? e : String(e);
          })(e)) in t
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
      function Nt(t) {
        var e = t.x,
          n = t.y,
          i = t.r,
          o = t.alwaysShow,
          a = t.clipPathId,
          u = (0, O.P2)(e),
          c = (0, O.P2)(n);
        if (
          ((0, Pt.Z)(
            void 0 === o,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
          ),
          !u || !c)
        )
          return null;
        var l = (function (t) {
          var e = t.x,
            n = t.y,
            r = t.xAxis,
            i = t.yAxis,
            o = (0, E.Ky)({ x: r.scale, y: i.scale }),
            a = o.apply({ x: e, y: n }, { bandAware: !0 });
          return (0, At.B)(t, "discard") && !o.isInRange(a) ? null : a;
        })(t);
        if (!l) return null;
        var s = l.x,
          f = l.y,
          p = t.shape,
          h = t.className,
          d = _t(
            _t(
              {
                clipPath: (0, At.B)(t, "hidden")
                  ? "url(#".concat(a, ")")
                  : void 0,
              },
              (0, z.L6)(t, !0),
            ),
            {},
            { cx: s, cy: f },
          );
        return r.createElement(
          D.m,
          { className: (0, x.Z)("recharts-reference-dot", h) },
          Nt.renderDot(p, d),
          $._.renderCallByParent(t, {
            x: s - i,
            y: f - i,
            width: 2 * i,
            height: 2 * i,
          }),
        );
      }
      (Nt.displayName = "ReferenceDot"),
        (Nt.defaultProps = {
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
        (Nt.renderDot = function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : u()(t)
              ? t(e)
              : r.createElement(
                  L.o,
                  Mt({}, e, {
                    cx: e.cx,
                    cy: e.cy,
                    className: "recharts-reference-dot-dot",
                  }),
                );
        });
      var Dt = n(84965);
      function It(t) {
        return (
          (It =
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
          It(t)
        );
      }
      function Bt() {
        return (
          (Bt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Bt.apply(this, arguments)
        );
      }
      function Lt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Rt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Lt(Object(n), !0).forEach(function (e) {
                zt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Lt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function zt(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== It(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== It(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === It(e) ? e : String(e);
          })(e)) in t
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
      function Ut(t) {
        var e = t.x1,
          n = t.x2,
          i = t.y1,
          o = t.y2,
          a = t.className,
          u = t.alwaysShow,
          c = t.clipPathId;
        (0, Pt.Z)(
          void 0 === u,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var l = (0, O.P2)(e),
          s = (0, O.P2)(n),
          f = (0, O.P2)(i),
          p = (0, O.P2)(o),
          h = t.shape;
        if (!(l || s || f || p || h)) return null;
        var d = (function (t, e, n, r, i) {
          var o = i.x1,
            a = i.x2,
            u = i.y1,
            c = i.y2,
            l = i.xAxis,
            s = i.yAxis;
          if (!l || !s) return null;
          var f = (0, E.Ky)({ x: l.scale, y: s.scale }),
            p = {
              x: t ? f.x.apply(o, { position: "start" }) : f.x.rangeMin,
              y: n ? f.y.apply(u, { position: "start" }) : f.y.rangeMin,
            },
            h = {
              x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
              y: r ? f.y.apply(c, { position: "end" }) : f.y.rangeMax,
            };
          return !(0, At.B)(i, "discard") || (f.isInRange(p) && f.isInRange(h))
            ? (0, E.O1)(p, h)
            : null;
        })(l, s, f, p, t);
        if (!d && !h) return null;
        var y = (0, At.B)(t, "hidden") ? "url(#".concat(c, ")") : void 0;
        return r.createElement(
          D.m,
          { className: (0, x.Z)("recharts-reference-area", a) },
          Ut.renderRect(h, Rt(Rt({ clipPath: y }, (0, z.L6)(t, !0)), d)),
          $._.renderCallByParent(t, d),
        );
      }
      function Ft(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return $t(t);
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
            if ("string" == typeof t) return $t(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return $t(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function $t(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      (Ut.displayName = "ReferenceArea"),
        (Ut.defaultProps = {
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
        (Ut.renderRect = function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : u()(t)
              ? t(e)
              : r.createElement(
                  R.A,
                  Bt({}, e, { className: "recharts-reference-area-rect" }),
                );
        });
      var Wt = function (t, e, n, r, i) {
          var o = (0, z.NN)(t, Dt.d),
            a = (0, z.NN)(t, Nt),
            u = [].concat(Ft(o), Ft(a)),
            c = (0, z.NN)(t, Ut),
            l = "".concat(r, "Id"),
            s = r[0],
            f = e;
          if (
            (u.length &&
              (f = u.reduce(function (t, e) {
                if (
                  e.props[l] === n &&
                  (0, At.B)(e.props, "extendDomain") &&
                  (0, O.hj)(e.props[s])
                ) {
                  var r = e.props[s];
                  return [Math.min(t[0], r), Math.max(t[1], r)];
                }
                return t;
              }, f)),
            c.length)
          ) {
            var p = "".concat(s, "1"),
              h = "".concat(s, "2");
            f = c.reduce(function (t, e) {
              if (
                e.props[l] === n &&
                (0, At.B)(e.props, "extendDomain") &&
                (0, O.hj)(e.props[p]) &&
                (0, O.hj)(e.props[h])
              ) {
                var r = e.props[p],
                  i = e.props[h];
                return [Math.min(t[0], r, i), Math.max(t[1], r, i)];
              }
              return t;
            }, f);
          }
          return (
            i &&
              i.length &&
              (f = i.reduce(function (t, e) {
                return (0, O.hj)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        Zt = n(53460),
        qt = n(84682),
        Ht = new (n.n(qt)())(),
        Gt = "recharts.syncMouseEvents";
      function Xt(t) {
        return (
          (Xt =
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
          Xt(t)
        );
      }
      function Yt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Kt(r.key), r);
        }
      }
      function Vt(t, e, n) {
        return (
          (e = Kt(e)) in t
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
      function Kt(t) {
        var e = (function (t, e) {
          if ("object" !== Xt(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== Xt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === Xt(e) ? e : String(e);
      }
      var Jt = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            Vt(this, "activeIndex", 0),
            Vt(this, "coordinateList", []),
            Vt(this, "layout", "horizontal");
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: "setDetails",
              value: function (t) {
                var e = t.coordinateList,
                  n = void 0 === e ? [] : e,
                  r = t.container,
                  i = void 0 === r ? null : r,
                  o = t.layout,
                  a = void 0 === o ? null : o,
                  u = t.offset,
                  c = void 0 === u ? null : u,
                  l = t.mouseHandlerCallback,
                  s = void 0 === l ? null : l;
                (this.coordinateList = null != n ? n : this.coordinateList),
                  (this.container = null != i ? i : this.container),
                  (this.layout = null != a ? a : this.layout),
                  (this.offset = null != c ? c : this.offset),
                  (this.mouseHandlerCallback =
                    null != s ? s : this.mouseHandlerCallback),
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
              value: function (t) {
                if (0 !== this.coordinateList.length)
                  switch (t.key) {
                    case "ArrowRight":
                      if ("horizontal" !== this.layout) return;
                      (this.activeIndex = Math.min(
                        this.activeIndex + 1,
                        this.coordinateList.length - 1,
                      )),
                        this.spoofMouse();
                      break;
                    case "ArrowLeft":
                      if ("horizontal" !== this.layout) return;
                      (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                        this.spoofMouse();
                  }
              },
            },
            {
              key: "spoofMouse",
              value: function () {
                var t, e;
                if (
                  "horizontal" === this.layout &&
                  0 !== this.coordinateList.length
                ) {
                  var n = this.container.getBoundingClientRect(),
                    r = n.x,
                    i = n.y,
                    o = n.height,
                    a = this.coordinateList[this.activeIndex].coordinate,
                    u =
                      (null === (t = window) || void 0 === t
                        ? void 0
                        : t.scrollX) || 0,
                    c =
                      (null === (e = window) || void 0 === e
                        ? void 0
                        : e.scrollY) || 0,
                    l = r + a + u,
                    s = i + this.offset.top + o / 2 + c;
                  this.mouseHandlerCallback({ pageX: l, pageY: s });
                }
              },
            },
          ]) && Yt(e.prototype, n),
          r && Yt(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })();
      var Qt = n(37350),
        te = n(84223);
      function ee(t) {
        return (
          (ee =
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
          ee(t)
        );
      }
      var ne = ["x", "y", "top", "left", "width", "height", "className"];
      function re() {
        return (
          (re = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          re.apply(this, arguments)
        );
      }
      function ie(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function oe(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== ee(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== ee(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === ee(e) ? e : String(e);
          })(e)) in t
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
      function ae(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var ue = function (t, e, n, r, i, o) {
          return "M"
            .concat(t, ",")
            .concat(i, "v")
            .concat(r, "M")
            .concat(o, ",")
            .concat(e, "h")
            .concat(n);
        },
        ce = function (t) {
          var e = t.x,
            n = void 0 === e ? 0 : e,
            i = t.y,
            o = void 0 === i ? 0 : i,
            a = t.top,
            u = void 0 === a ? 0 : a,
            c = t.left,
            l = void 0 === c ? 0 : c,
            s = t.width,
            f = void 0 === s ? 0 : s,
            p = t.height,
            h = void 0 === p ? 0 : p,
            d = t.className,
            y = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? ie(Object(n), !0).forEach(function (e) {
                      oe(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : ie(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e),
                        );
                      });
              }
              return t;
            })({ x: n, y: o, top: u, left: l, width: f, height: h }, ae(t, ne));
          return (0, O.hj)(n) &&
            (0, O.hj)(o) &&
            (0, O.hj)(f) &&
            (0, O.hj)(h) &&
            (0, O.hj)(u) &&
            (0, O.hj)(l)
            ? r.createElement(
                "path",
                re({}, (0, z.L6)(y, !0), {
                  className: (0, x.Z)("recharts-cross", d),
                  d: ue(n, o, f, h, u, l),
                }),
              )
            : null;
        };
      function le(t) {
        var e = t.cx,
          n = t.cy,
          r = t.radius,
          i = t.startAngle,
          o = t.endAngle;
        return {
          points: [(0, Zt.op)(e, n, r, i), (0, Zt.op)(e, n, r, o)],
          cx: e,
          cy: n,
          radius: r,
          startAngle: i,
          endAngle: o,
        };
      }
      var se = n(55287);
      function fe(t, e, n) {
        var r, i, o, a;
        if ("horizontal" === t)
          (o = r = e.x), (i = n.top), (a = n.top + n.height);
        else if ("vertical" === t)
          (a = i = e.y), (r = n.left), (o = n.left + n.width);
        else if (null != e.cx && null != e.cy) {
          if ("centric" !== t) return le(e);
          var u = e.cx,
            c = e.cy,
            l = e.innerRadius,
            s = e.outerRadius,
            f = e.angle,
            p = (0, Zt.op)(u, c, l, f),
            h = (0, Zt.op)(u, c, s, f);
          (r = p.x), (i = p.y), (o = h.x), (a = h.y);
        }
        return [
          { x: r, y: i },
          { x: o, y: a },
        ];
      }
      function pe(t) {
        return (
          (pe =
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
          pe(t)
        );
      }
      function he(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function de(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? he(Object(n), !0).forEach(function (e) {
                ye(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : he(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function ye(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== pe(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== pe(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === pe(e) ? e : String(e);
          })(e)) in t
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
      function ve(t) {
        var e,
          n = t.element,
          i = t.tooltipEventType,
          o = t.isActive,
          a = t.activeCoordinate,
          u = t.activePayload,
          c = t.offset,
          l = t.activeTooltipIndex,
          s = t.tooltipAxisBandSize,
          f = t.layout,
          p = t.chartName;
        if (
          !n ||
          !n.props.cursor ||
          !o ||
          !a ||
          ("ScatterChart" !== p && "axis" !== i)
        )
          return null;
        var h = te.H;
        if ("ScatterChart" === p) (e = a), (h = ce);
        else if ("BarChart" === p)
          (e = (function (t, e, n, r) {
            var i = r / 2;
            return {
              stroke: "none",
              fill: "#ccc",
              x: "horizontal" === t ? e.x - i : n.left + 0.5,
              y: "horizontal" === t ? n.top + 0.5 : e.y - i,
              width: "horizontal" === t ? r : n.width - 1,
              height: "horizontal" === t ? n.height - 1 : r,
            };
          })(f, a, c, s)),
            (h = R.A);
        else if ("radial" === f) {
          var d = le(a),
            y = d.cx,
            v = d.cy,
            m = d.radius;
          (e = {
            cx: y,
            cy: v,
            startAngle: d.startAngle,
            endAngle: d.endAngle,
            innerRadius: m,
            outerRadius: m,
          }),
            (h = se.L);
        } else (e = { points: fe(f, a, c) }), (h = te.H);
        var g = de(
          de(
            de(de({ stroke: "#ccc", pointerEvents: "none" }, c), e),
            (0, z.L6)(n.props.cursor),
          ),
          {},
          { payload: u, payloadIndex: l, className: "recharts-tooltip-cursor" },
        );
        return (0, r.isValidElement)(n.props.cursor)
          ? (0, r.cloneElement)(n.props.cursor, g)
          : (0, r.createElement)(h, g);
      }
      var me = ["item"],
        ge = [
          "children",
          "className",
          "width",
          "height",
          "style",
          "compact",
          "title",
          "desc",
        ];
      function be(t) {
        return (
          (be =
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
          be(t)
        );
      }
      function xe(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(t, e) ||
          Me(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function we() {
        return (
          (we = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          we.apply(this, arguments)
        );
      }
      function Oe(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function je(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, De(r.key), r);
        }
      }
      function Se(t, e) {
        return (
          (Se = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Se(t, e)
        );
      }
      function Ee(t) {
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
          var n,
            r = Pe(t);
          if (e) {
            var i = Pe(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === be(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return Ae(t);
          })(this, n);
        };
      }
      function Ae(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function Pe(t) {
        return (
          (Pe = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Pe(t)
        );
      }
      function ke(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Te(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          Me(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Me(t, e) {
        if (t) {
          if ("string" == typeof t) return Te(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Te(t, e)
                : void 0
          );
        }
      }
      function Te(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function _e(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ce(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _e(Object(n), !0).forEach(function (e) {
                Ne(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : _e(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Ne(t, e, n) {
        return (
          (e = De(e)) in t
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
      function De(t) {
        var e = (function (t, e) {
          if ("object" !== be(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== be(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === be(e) ? e : String(e);
      }
      var Ie = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
        Be = { width: "100%", height: "100%" },
        Le = { x: 0, y: 0 },
        Re = function (t, e) {
          var n = e.graphicalItems,
            r = e.dataStartIndex,
            i = e.dataEndIndex,
            o = (null != n ? n : []).reduce(function (t, e) {
              var n = e.props.data;
              return n && n.length ? [].concat(ke(t), ke(n)) : t;
            }, []);
          return o.length > 0
            ? o
            : t && t.length && (0, O.hj)(r) && (0, O.hj)(i)
              ? t.slice(r, i + 1)
              : [];
        };
      function ze(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var Ue = function (t, e, n, r) {
          var i = t.graphicalItems,
            o = t.tooltipAxis,
            a = Re(e, t);
          return n < 0 || !i || !i.length || n >= a.length
            ? null
            : i.reduce(function (i, u) {
                var c;
                if (u.props.hide) return i;
                var l,
                  s = null !== (c = u.props.data) && void 0 !== c ? c : e;
                if (
                  (s &&
                    t.dataStartIndex + t.dataEndIndex !== 0 &&
                    (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
                  o.dataKey && !o.allowDuplicatedCategory)
                ) {
                  var f = void 0 === s ? a : s;
                  l = (0, O.Ap)(f, o.dataKey, r);
                } else l = (s && s[n]) || a[n];
                return l ? [].concat(ke(i), [(0, at.Qo)(u, l)]) : i;
              }, []);
        },
        Fe = function (t, e, n, r) {
          var i = r || { x: t.chartX, y: t.chartY },
            o = (function (t, e) {
              return "horizontal" === e
                ? t.x
                : "vertical" === e
                  ? t.y
                  : "centric" === e
                    ? t.angle
                    : t.radius;
            })(i, n),
            a = t.orderedTooltipTicks,
            u = t.tooltipAxis,
            c = t.tooltipTicks,
            l = (0, at.VO)(o, a, c, u);
          if (l >= 0 && c) {
            var s = c[l] && c[l].value,
              f = Ue(t, e, l, s),
              p = (function (t, e, n, r) {
                var i = e.find(function (t) {
                  return t && t.index === n;
                });
                if (i) {
                  if ("horizontal" === t) return { x: i.coordinate, y: r.y };
                  if ("vertical" === t) return { x: r.x, y: i.coordinate };
                  if ("centric" === t) {
                    var o = i.coordinate,
                      a = r.radius;
                    return Ce(
                      Ce(Ce({}, r), (0, Zt.op)(r.cx, r.cy, a, o)),
                      {},
                      { angle: o, radius: a },
                    );
                  }
                  var u = i.coordinate,
                    c = r.angle;
                  return Ce(
                    Ce(Ce({}, r), (0, Zt.op)(r.cx, r.cy, u, c)),
                    {},
                    { angle: c, radius: u },
                  );
                }
                return Le;
              })(n, a, l, i);
            return {
              activeTooltipIndex: l,
              activeLabel: s,
              activePayload: f,
              activeCoordinate: p,
            };
          }
          return null;
        },
        $e = function (t, e) {
          var n = e.axes,
            r = e.graphicalItems,
            i = e.axisType,
            a = e.axisIdKey,
            u = e.stackGroups,
            c = e.dataStartIndex,
            s = e.dataEndIndex,
            f = t.layout,
            p = t.children,
            h = t.stackOffset,
            d = (0, at.NA)(f, i);
          return n.reduce(function (e, n) {
            var y,
              v = n.props,
              m = v.type,
              g = v.dataKey,
              b = v.allowDataOverflow,
              x = v.allowDuplicatedCategory,
              w = v.scale,
              j = v.ticks,
              S = v.includeHidden,
              E = n.props[a];
            if (e[E]) return e;
            var A,
              P,
              k,
              M = Re(t.data, {
                graphicalItems: r.filter(function (t) {
                  return t.props[a] === E;
                }),
                dataStartIndex: c,
                dataEndIndex: s,
              }),
              T = M.length;
            (function (t, e, n) {
              if ("number" === n && !0 === e && Array.isArray(t)) {
                var r = null == t ? void 0 : t[0],
                  i = null == t ? void 0 : t[1];
                if (r && i && (0, O.hj)(r) && (0, O.hj)(i)) return !0;
              }
              return !1;
            })(n.props.domain, b, m) &&
              ((A = (0, at.LG)(n.props.domain, null, b)),
              !d ||
                ("number" !== m && "auto" === w) ||
                (k = (0, at.gF)(M, g, "category")));
            var _ = ze(m);
            if (!A || 0 === A.length) {
              var C,
                N = null !== (C = n.props.domain) && void 0 !== C ? C : _;
              if (g) {
                if (((A = (0, at.gF)(M, g, m)), "category" === m && d)) {
                  var D = (0, O.bv)(A);
                  x && D
                    ? ((P = A), (A = l()(0, T)))
                    : x ||
                      (A = (0, at.ko)(N, A, n).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(ke(t), [e]);
                      }, []));
                } else if ("category" === m)
                  A = x
                    ? A.filter(function (t) {
                        return "" !== t && !o()(t);
                      })
                    : (0, at.ko)(N, A, n).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || "" === e || o()(e)
                          ? t
                          : [].concat(ke(t), [e]);
                      }, []);
                else if ("number" === m) {
                  var I = (0, at.ZI)(
                    M,
                    r.filter(function (t) {
                      return t.props[a] === E && (S || !t.props.hide);
                    }),
                    g,
                    i,
                    f,
                  );
                  I && (A = I);
                }
                !d ||
                  ("number" !== m && "auto" === w) ||
                  (k = (0, at.gF)(M, g, "category"));
              } else
                A = d
                  ? l()(0, T)
                  : u && u[E] && u[E].hasStack && "number" === m
                    ? "expand" === h
                      ? [0, 1]
                      : (0, at.EB)(u[E].stackGroups, c, s)
                    : (0, at.s6)(
                        M,
                        r.filter(function (t) {
                          return t.props[a] === E && (S || !t.props.hide);
                        }),
                        m,
                        f,
                        !0,
                      );
              if ("number" === m)
                (A = Wt(p, A, E, i, j)), N && (A = (0, at.LG)(N, A, b));
              else if ("category" === m && N) {
                var B = N;
                A.every(function (t) {
                  return B.indexOf(t) >= 0;
                }) && (A = B);
              }
            }
            return Ce(
              Ce({}, e),
              {},
              Ne(
                {},
                E,
                Ce(
                  Ce({}, n.props),
                  {},
                  {
                    axisType: i,
                    domain: A,
                    categoricalDomain: k,
                    duplicateDomain: P,
                    originalDomain:
                      null !== (y = n.props.domain) && void 0 !== y ? y : _,
                    isCategorical: d,
                    layout: f,
                  },
                ),
              ),
            );
          }, {});
        },
        We = function (t, e) {
          var n = e.axisType,
            r = void 0 === n ? "xAxis" : n,
            i = e.AxisComp,
            o = e.graphicalItems,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            s = t.children,
            p = "".concat(r, "Id"),
            h = (0, z.NN)(s, i),
            d = {};
          return (
            h && h.length
              ? (d = $e(t, {
                  axes: h,
                  graphicalItems: o,
                  axisType: r,
                  axisIdKey: p,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                }))
              : o &&
                o.length &&
                (d = (function (t, e) {
                  var n = e.graphicalItems,
                    r = e.Axis,
                    i = e.axisType,
                    o = e.axisIdKey,
                    a = e.stackGroups,
                    u = e.dataStartIndex,
                    c = e.dataEndIndex,
                    s = t.layout,
                    p = t.children,
                    h = Re(t.data, {
                      graphicalItems: n,
                      dataStartIndex: u,
                      dataEndIndex: c,
                    }),
                    d = h.length,
                    y = (0, at.NA)(s, i),
                    v = -1;
                  return n.reduce(function (t, e) {
                    var m,
                      g = e.props[o],
                      b = ze("number");
                    return t[g]
                      ? t
                      : (v++,
                        y
                          ? (m = l()(0, d))
                          : a && a[g] && a[g].hasStack
                            ? ((m = (0, at.EB)(a[g].stackGroups, u, c)),
                              (m = Wt(p, m, g, i)))
                            : ((m = (0, at.LG)(
                                b,
                                (0, at.s6)(
                                  h,
                                  n.filter(function (t) {
                                    return t.props[o] === g && !t.props.hide;
                                  }),
                                  "number",
                                  s,
                                ),
                                r.defaultProps.allowDataOverflow,
                              )),
                              (m = Wt(p, m, g, i))),
                        Ce(
                          Ce({}, t),
                          {},
                          Ne(
                            {},
                            g,
                            Ce(
                              Ce({ axisType: i }, r.defaultProps),
                              {},
                              {
                                hide: !0,
                                orientation: f()(
                                  Ie,
                                  "".concat(i, ".").concat(v % 2),
                                  null,
                                ),
                                domain: m,
                                originalDomain: b,
                                isCategorical: y,
                                layout: s,
                              },
                            ),
                          ),
                        ));
                  }, {});
                })(t, {
                  Axis: i,
                  graphicalItems: o,
                  axisType: r,
                  axisIdKey: p,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                })),
            d
          );
        },
        Ze = function (t) {
          var e = t.children,
            n = t.defaultShowTooltip,
            r = (0, z.sP)(e, St),
            i = 0,
            o = 0;
          return (
            t.data && 0 !== t.data.length && (o = t.data.length - 1),
            r &&
              r.props &&
              (r.props.startIndex >= 0 && (i = r.props.startIndex),
              r.props.endIndex >= 0 && (o = r.props.endIndex)),
            {
              chartX: 0,
              chartY: 0,
              dataStartIndex: i,
              dataEndIndex: o,
              activeTooltipIndex: -1,
              isTooltipActive: Boolean(n),
            }
          );
        },
        qe = function (t) {
          return "horizontal" === t
            ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
            : "vertical" === t
              ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
              : "centric" === t
                ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
                : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
        },
        He = function (t) {
          var e,
            n = t.chartName,
            i = t.GraphicalChild,
            a = t.defaultTooltipEventType,
            c = void 0 === a ? "axis" : a,
            l = t.validateTooltipEventTypes,
            s = void 0 === l ? ["axis"] : l,
            p = t.axisComponents,
            d = t.legendContent,
            v = t.formatAxisMap,
            g = t.defaultProps,
            S = function (t, e) {
              var n = e.graphicalItems,
                r = e.stackGroups,
                i = e.offset,
                a = e.updateId,
                u = e.dataStartIndex,
                c = e.dataEndIndex,
                l = t.barSize,
                s = t.layout,
                f = t.barGap,
                h = t.barCategoryGap,
                d = t.maxBarSize,
                y = qe(s),
                v = y.numericAxisName,
                m = y.cateAxisName,
                g = (function (t) {
                  return (
                    !(!t || !t.length) &&
                    t.some(function (t) {
                      var e = (0, z.Gf)(t && t.type);
                      return e && e.indexOf("Bar") >= 0;
                    })
                  );
                })(n),
                b = g && (0, at.pt)({ barSize: l, stackGroups: r }),
                x = [];
              return (
                n.forEach(function (n, l) {
                  var y = Re(t.data, {
                      graphicalItems: [n],
                      dataStartIndex: u,
                      dataEndIndex: c,
                    }),
                    g = n.props,
                    O = g.dataKey,
                    j = g.maxBarSize,
                    S = n.props["".concat(v, "Id")],
                    E = n.props["".concat(m, "Id")],
                    A = p.reduce(function (t, r) {
                      var i,
                        o = e["".concat(r.axisType, "Map")],
                        a = n.props["".concat(r.axisType, "Id")];
                      (o && o[a]) || "zAxis" === r.axisType || (0, w.Z)(!1);
                      var u = o[a];
                      return Ce(
                        Ce({}, t),
                        {},
                        (Ne((i = {}), r.axisType, u),
                        Ne(i, "".concat(r.axisType, "Ticks"), (0, at.uY)(u)),
                        i),
                      );
                    }, {}),
                    P = A[m],
                    k = A["".concat(m, "Ticks")],
                    M =
                      r &&
                      r[S] &&
                      r[S].hasStack &&
                      (0, at.O3)(n, r[S].stackGroups),
                    T = (0, z.Gf)(n.type).indexOf("Bar") >= 0,
                    _ = (0, at.zT)(P, k),
                    C = [];
                  if (T) {
                    var N,
                      D,
                      I = o()(j) ? d : j,
                      B =
                        null !==
                          (N =
                            null !== (D = (0, at.zT)(P, k, !0)) && void 0 !== D
                              ? D
                              : I) && void 0 !== N
                          ? N
                          : 0;
                    (C = (0, at.qz)({
                      barGap: f,
                      barCategoryGap: h,
                      bandSize: B !== _ ? B : _,
                      sizeList: b[E],
                      maxBarSize: I,
                    })),
                      B !== _ &&
                        (C = C.map(function (t) {
                          return Ce(
                            Ce({}, t),
                            {},
                            {
                              position: Ce(
                                Ce({}, t.position),
                                {},
                                { offset: t.position.offset - B / 2 },
                              ),
                            },
                          );
                        }));
                  }
                  var L,
                    R = n && n.type && n.type.getComposedData;
                  R &&
                    x.push({
                      props: Ce(
                        Ce(
                          {},
                          R(
                            Ce(
                              Ce({}, A),
                              {},
                              {
                                displayedData: y,
                                props: t,
                                dataKey: O,
                                item: n,
                                bandSize: _,
                                barPosition: C,
                                offset: i,
                                stackedData: M,
                                layout: s,
                                dataStartIndex: u,
                                dataEndIndex: c,
                              },
                            ),
                          ),
                        ),
                        {},
                        ((L = { key: n.key || "item-".concat(l) }),
                        Ne(L, v, A[v]),
                        Ne(L, m, A[m]),
                        Ne(L, "animationId", a),
                        L),
                      ),
                      childIndex: (0, z.$R)(n, t.children),
                      item: n,
                    });
                }),
                x
              );
            },
            E = function (t, e) {
              var r = t.props,
                o = t.dataStartIndex,
                a = t.dataEndIndex,
                u = t.updateId;
              if (!(0, z.TT)({ props: r })) return null;
              var c = r.children,
                l = r.layout,
                s = r.stackOffset,
                d = r.data,
                y = r.reverseStackOrder,
                m = qe(l),
                g = m.numericAxisName,
                b = m.cateAxisName,
                x = (0, z.NN)(c, i),
                w = (0, at.wh)(
                  d,
                  x,
                  "".concat(g, "Id"),
                  "".concat(b, "Id"),
                  s,
                  y,
                ),
                j = p.reduce(function (t, e) {
                  var n = "".concat(e.axisType, "Map");
                  return Ce(
                    Ce({}, t),
                    {},
                    Ne(
                      {},
                      n,
                      We(
                        r,
                        Ce(
                          Ce({}, e),
                          {},
                          {
                            graphicalItems: x,
                            stackGroups: e.axisType === g && w,
                            dataStartIndex: o,
                            dataEndIndex: a,
                          },
                        ),
                      ),
                    ),
                  );
                }, {}),
                E = (function (t, e) {
                  var n = t.props,
                    r = t.graphicalItems,
                    i = t.xAxisMap,
                    o = void 0 === i ? {} : i,
                    a = t.yAxisMap,
                    u = void 0 === a ? {} : a,
                    c = n.width,
                    l = n.height,
                    s = n.children,
                    p = n.margin || {},
                    h = (0, z.sP)(s, St),
                    d = (0, z.sP)(s, B.D),
                    y = Object.keys(u).reduce(
                      function (t, e) {
                        var n = u[e],
                          r = n.orientation;
                        return n.mirror || n.hide
                          ? t
                          : Ce(Ce({}, t), {}, Ne({}, r, t[r] + n.width));
                      },
                      { left: p.left || 0, right: p.right || 0 },
                    ),
                    v = Object.keys(o).reduce(
                      function (t, e) {
                        var n = o[e],
                          r = n.orientation;
                        return n.mirror || n.hide
                          ? t
                          : Ce(
                              Ce({}, t),
                              {},
                              Ne({}, r, f()(t, "".concat(r)) + n.height),
                            );
                      },
                      { top: p.top || 0, bottom: p.bottom || 0 },
                    ),
                    m = Ce(Ce({}, v), y),
                    g = m.bottom;
                  h && (m.bottom += h.props.height || St.defaultProps.height),
                    d && e && (m = (0, at.By)(m, r, n, e));
                  var b = c - m.left - m.right,
                    x = l - m.top - m.bottom;
                  return Ce(
                    Ce({ brushBottom: g }, m),
                    {},
                    { width: Math.max(b, 0), height: Math.max(x, 0) },
                  );
                })(
                  Ce(Ce({}, j), {}, { props: r, graphicalItems: x }),
                  null == e ? void 0 : e.legendBBox,
                );
              Object.keys(j).forEach(function (t) {
                j[t] = v(r, j[t], E, t.replace("Map", ""), n);
              });
              var A,
                P,
                k,
                M = j["".concat(b, "Map")],
                T =
                  ((A = M),
                  (P = (0, O.Kt)(A)),
                  {
                    tooltipTicks: (k = (0, at.uY)(P, !1, !0)),
                    orderedTooltipTicks: h()(k, function (t) {
                      return t.coordinate;
                    }),
                    tooltipAxis: P,
                    tooltipAxisBandSize: (0, at.zT)(P, k),
                  }),
                _ = S(
                  r,
                  Ce(
                    Ce({}, j),
                    {},
                    {
                      dataStartIndex: o,
                      dataEndIndex: a,
                      updateId: u,
                      graphicalItems: x,
                      stackGroups: w,
                      offset: E,
                    },
                  ),
                );
              return Ce(
                Ce(
                  {
                    formattedGraphicalItems: _,
                    graphicalItems: x,
                    offset: E,
                    stackGroups: w,
                  },
                  T,
                ),
                j,
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
                  e && Se(t, e);
              })(p, t);
              var e,
                i,
                a,
                l = Ee(p);
              function p(t) {
                var e, i, a;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, p),
                  Ne(
                    Ae((a = l.call(this, t))),
                    "eventEmitterSymbol",
                    Symbol("rechartsEventEmitter"),
                  ),
                  Ne(Ae(a), "accessibilityManager", new Jt()),
                  Ne(Ae(a), "handleLegendBBoxUpdate", function (t) {
                    if (t) {
                      var e = a.state,
                        n = e.dataStartIndex,
                        r = e.dataEndIndex,
                        i = e.updateId;
                      a.setState(
                        Ce(
                          { legendBBox: t },
                          E(
                            {
                              props: a.props,
                              dataStartIndex: n,
                              dataEndIndex: r,
                              updateId: i,
                            },
                            Ce(Ce({}, a.state), {}, { legendBBox: t }),
                          ),
                        ),
                      );
                    }
                  }),
                  Ne(Ae(a), "handleReceiveSyncEvent", function (t, e, n) {
                    if (a.props.syncId === t) {
                      if (
                        n === a.eventEmitterSymbol &&
                        "function" != typeof a.props.syncMethod
                      )
                        return;
                      a.applySyncEvent(e);
                    }
                  }),
                  Ne(Ae(a), "handleBrushChange", function (t) {
                    var e = t.startIndex,
                      n = t.endIndex;
                    if (
                      e !== a.state.dataStartIndex ||
                      n !== a.state.dataEndIndex
                    ) {
                      var r = a.state.updateId;
                      a.setState(function () {
                        return Ce(
                          { dataStartIndex: e, dataEndIndex: n },
                          E(
                            {
                              props: a.props,
                              dataStartIndex: e,
                              dataEndIndex: n,
                              updateId: r,
                            },
                            a.state,
                          ),
                        );
                      }),
                        a.triggerSyncEvent({
                          dataStartIndex: e,
                          dataEndIndex: n,
                        });
                    }
                  }),
                  Ne(Ae(a), "handleMouseEnter", function (t) {
                    var e = a.getMouseInfo(t);
                    if (e) {
                      var n = Ce(Ce({}, e), {}, { isTooltipActive: !0 });
                      a.setState(n), a.triggerSyncEvent(n);
                      var r = a.props.onMouseEnter;
                      u()(r) && r(n, t);
                    }
                  }),
                  Ne(Ae(a), "triggeredAfterMouseMove", function (t) {
                    var e = a.getMouseInfo(t),
                      n = e
                        ? Ce(Ce({}, e), {}, { isTooltipActive: !0 })
                        : { isTooltipActive: !1 };
                    a.setState(n), a.triggerSyncEvent(n);
                    var r = a.props.onMouseMove;
                    u()(r) && r(n, t);
                  }),
                  Ne(Ae(a), "handleItemMouseEnter", function (t) {
                    a.setState(function () {
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
                  Ne(Ae(a), "handleItemMouseLeave", function () {
                    a.setState(function () {
                      return { isTooltipActive: !1 };
                    });
                  }),
                  Ne(Ae(a), "handleMouseMove", function (t) {
                    t.persist(), a.throttleTriggeredAfterMouseMove(t);
                  }),
                  Ne(Ae(a), "handleMouseLeave", function (t) {
                    var e = { isTooltipActive: !1 };
                    a.setState(e), a.triggerSyncEvent(e);
                    var n = a.props.onMouseLeave;
                    u()(n) && n(e, t);
                  }),
                  Ne(Ae(a), "handleOuterEvent", function (t) {
                    var e,
                      n = (0, z.Bh)(t),
                      r = f()(a.props, "".concat(n));
                    n &&
                      u()(r) &&
                      r(
                        null !==
                          (e = /.*touch.*/i.test(n)
                            ? a.getMouseInfo(t.changedTouches[0])
                            : a.getMouseInfo(t)) && void 0 !== e
                          ? e
                          : {},
                        t,
                      );
                  }),
                  Ne(Ae(a), "handleClick", function (t) {
                    var e = a.getMouseInfo(t);
                    if (e) {
                      var n = Ce(Ce({}, e), {}, { isTooltipActive: !0 });
                      a.setState(n), a.triggerSyncEvent(n);
                      var r = a.props.onClick;
                      u()(r) && r(n, t);
                    }
                  }),
                  Ne(Ae(a), "handleMouseDown", function (t) {
                    var e = a.props.onMouseDown;
                    u()(e) && e(a.getMouseInfo(t), t);
                  }),
                  Ne(Ae(a), "handleMouseUp", function (t) {
                    var e = a.props.onMouseUp;
                    u()(e) && e(a.getMouseInfo(t), t);
                  }),
                  Ne(Ae(a), "handleTouchMove", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                  }),
                  Ne(Ae(a), "handleTouchStart", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.handleMouseDown(t.changedTouches[0]);
                  }),
                  Ne(Ae(a), "handleTouchEnd", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.handleMouseUp(t.changedTouches[0]);
                  }),
                  Ne(Ae(a), "triggerSyncEvent", function (t) {
                    void 0 !== a.props.syncId &&
                      Ht.emit(Gt, a.props.syncId, t, a.eventEmitterSymbol);
                  }),
                  Ne(Ae(a), "applySyncEvent", function (t) {
                    var e = a.props,
                      n = e.layout,
                      r = e.syncMethod,
                      i = a.state.updateId,
                      o = t.dataStartIndex,
                      u = t.dataEndIndex;
                    if (
                      void 0 !== t.dataStartIndex ||
                      void 0 !== t.dataEndIndex
                    )
                      a.setState(
                        Ce(
                          { dataStartIndex: o, dataEndIndex: u },
                          E(
                            {
                              props: a.props,
                              dataStartIndex: o,
                              dataEndIndex: u,
                              updateId: i,
                            },
                            a.state,
                          ),
                        ),
                      );
                    else if (void 0 !== t.activeTooltipIndex) {
                      var c = t.chartX,
                        l = t.chartY,
                        s = t.activeTooltipIndex,
                        f = a.state,
                        p = f.offset,
                        h = f.tooltipTicks;
                      if (!p) return;
                      if ("function" == typeof r) s = r(h, t);
                      else if ("value" === r) {
                        s = -1;
                        for (var d = 0; d < h.length; d++)
                          if (h[d].value === t.activeLabel) {
                            s = d;
                            break;
                          }
                      }
                      var y = Ce(Ce({}, p), {}, { x: p.left, y: p.top }),
                        v = Math.min(c, y.x + y.width),
                        m = Math.min(l, y.y + y.height),
                        g = h[s] && h[s].value,
                        b = Ue(a.state, a.props.data, s),
                        x = h[s]
                          ? {
                              x: "horizontal" === n ? h[s].coordinate : v,
                              y: "horizontal" === n ? m : h[s].coordinate,
                            }
                          : Le;
                      a.setState(
                        Ce(
                          Ce({}, t),
                          {},
                          {
                            activeLabel: g,
                            activeCoordinate: x,
                            activePayload: b,
                            activeTooltipIndex: s,
                          },
                        ),
                      );
                    } else a.setState(t);
                  }),
                  Ne(Ae(a), "verticalCoordinatesGenerator", function (t, e) {
                    var n = t.xAxis,
                      r = t.width,
                      i = t.height,
                      o = t.offset;
                    return (0, at.Rf)(
                      C(
                        Ce(
                          Ce(Ce({}, it.defaultProps), n),
                          {},
                          {
                            ticks: (0, at.uY)(n, !0),
                            viewBox: { x: 0, y: 0, width: r, height: i },
                          },
                        ),
                      ),
                      o.left,
                      o.left + o.width,
                      e,
                    );
                  }),
                  Ne(Ae(a), "horizontalCoordinatesGenerator", function (t, e) {
                    var n = t.yAxis,
                      r = t.width,
                      i = t.height,
                      o = t.offset;
                    return (0, at.Rf)(
                      C(
                        Ce(
                          Ce(Ce({}, it.defaultProps), n),
                          {},
                          {
                            ticks: (0, at.uY)(n, !0),
                            viewBox: { x: 0, y: 0, width: r, height: i },
                          },
                        ),
                      ),
                      o.top,
                      o.top + o.height,
                      e,
                    );
                  }),
                  Ne(Ae(a), "axesTicksGenerator", function (t) {
                    return (0, at.uY)(t, !0);
                  }),
                  Ne(Ae(a), "renderCursor", function (t) {
                    var e,
                      i = a.state,
                      o = i.isTooltipActive,
                      u = i.activeCoordinate,
                      c = i.activePayload,
                      l = i.offset,
                      s = i.activeTooltipIndex,
                      f = i.tooltipAxisBandSize,
                      p = a.getTooltipEventType(),
                      h = null !== (e = t.props.active) && void 0 !== e ? e : o,
                      d = a.props.layout,
                      y = t.key || "_recharts-cursor";
                    return r.createElement(ve, {
                      key: y,
                      activeCoordinate: u,
                      activePayload: c,
                      activeTooltipIndex: s,
                      chartName: n,
                      element: t,
                      isActive: h,
                      layout: d,
                      offset: l,
                      tooltipAxisBandSize: f,
                      tooltipEventType: p,
                    });
                  }),
                  Ne(Ae(a), "renderPolarAxis", function (t, e, n) {
                    var i = f()(t, "type.axisType"),
                      o = f()(a.state, "".concat(i, "Map")),
                      u = o && o[t.props["".concat(i, "Id")]];
                    return (0, r.cloneElement)(
                      t,
                      Ce(
                        Ce({}, u),
                        {},
                        {
                          className: i,
                          key: t.key || "".concat(e, "-").concat(n),
                          ticks: (0, at.uY)(u, !0),
                        },
                      ),
                    );
                  }),
                  Ne(Ae(a), "renderXAxis", function (t, e, n) {
                    var r = a.state.xAxisMap[t.props.xAxisId];
                    return a.renderAxis(r, t, e, n);
                  }),
                  Ne(Ae(a), "renderYAxis", function (t, e, n) {
                    var r = a.state.yAxisMap[t.props.yAxisId];
                    return a.renderAxis(r, t, e, n);
                  }),
                  Ne(Ae(a), "renderGrid", function (t) {
                    var e = a.state,
                      n = e.xAxisMap,
                      i = e.yAxisMap,
                      o = e.offset,
                      u = a.props,
                      c = u.width,
                      l = u.height,
                      s = (0, O.Kt)(n),
                      f =
                        m()(i, function (t) {
                          return b()(t.domain, Number.isFinite);
                        }) || (0, O.Kt)(i),
                      p = t.props || {};
                    return (0, r.cloneElement)(t, {
                      key: t.key || "grid",
                      x: (0, O.hj)(p.x) ? p.x : o.left,
                      y: (0, O.hj)(p.y) ? p.y : o.top,
                      width: (0, O.hj)(p.width) ? p.width : o.width,
                      height: (0, O.hj)(p.height) ? p.height : o.height,
                      xAxis: s,
                      yAxis: f,
                      offset: o,
                      chartWidth: c,
                      chartHeight: l,
                      verticalCoordinatesGenerator:
                        p.verticalCoordinatesGenerator ||
                        a.verticalCoordinatesGenerator,
                      horizontalCoordinatesGenerator:
                        p.horizontalCoordinatesGenerator ||
                        a.horizontalCoordinatesGenerator,
                    });
                  }),
                  Ne(Ae(a), "renderPolarGrid", function (t) {
                    var e = t.props,
                      n = e.radialLines,
                      i = e.polarAngles,
                      o = e.polarRadius,
                      u = a.state,
                      c = u.radiusAxisMap,
                      l = u.angleAxisMap,
                      s = (0, O.Kt)(c),
                      f = (0, O.Kt)(l),
                      p = f.cx,
                      h = f.cy,
                      d = f.innerRadius,
                      y = f.outerRadius;
                    return (0, r.cloneElement)(t, {
                      polarAngles: Array.isArray(i)
                        ? i
                        : (0, at.uY)(f, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      polarRadius: Array.isArray(o)
                        ? o
                        : (0, at.uY)(s, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      cx: p,
                      cy: h,
                      innerRadius: d,
                      outerRadius: y,
                      key: t.key || "polar-grid",
                      radialLines: n,
                    });
                  }),
                  Ne(Ae(a), "renderLegend", function () {
                    var t = a.state.formattedGraphicalItems,
                      e = a.props,
                      n = e.children,
                      i = e.width,
                      o = e.height,
                      u = a.props.margin || {},
                      c = i - (u.left || 0) - (u.right || 0),
                      l = (0, Et.z)({
                        children: n,
                        formattedGraphicalItems: t,
                        legendWidth: c,
                        legendContent: d,
                      });
                    if (!l) return null;
                    var s = l.item,
                      f = Oe(l, me);
                    return (0, r.cloneElement)(
                      s,
                      Ce(
                        Ce({}, f),
                        {},
                        {
                          chartWidth: i,
                          chartHeight: o,
                          margin: u,
                          onBBoxUpdate: a.handleLegendBBoxUpdate,
                        },
                      ),
                    );
                  }),
                  Ne(Ae(a), "renderTooltip", function () {
                    var t,
                      e = a.props.children,
                      n = (0, z.sP)(e, I.u);
                    if (!n) return null;
                    var i = a.state,
                      o = i.isTooltipActive,
                      u = i.activeCoordinate,
                      c = i.activePayload,
                      l = i.activeLabel,
                      s = i.offset,
                      f = null !== (t = n.props.active) && void 0 !== t ? t : o;
                    return (0, r.cloneElement)(n, {
                      viewBox: Ce(Ce({}, s), {}, { x: s.left, y: s.top }),
                      active: f,
                      label: l,
                      payload: f ? c : [],
                      coordinate: u,
                    });
                  }),
                  Ne(Ae(a), "renderBrush", function (t) {
                    var e = a.props,
                      n = e.margin,
                      i = e.data,
                      o = a.state,
                      u = o.offset,
                      c = o.dataStartIndex,
                      l = o.dataEndIndex,
                      s = o.updateId;
                    return (0, r.cloneElement)(t, {
                      key: t.key || "_recharts-brush",
                      onChange: (0, at.DO)(
                        a.handleBrushChange,
                        t.props.onChange,
                      ),
                      data: i,
                      x: (0, O.hj)(t.props.x) ? t.props.x : u.left,
                      y: (0, O.hj)(t.props.y)
                        ? t.props.y
                        : u.top + u.height + u.brushBottom - (n.bottom || 0),
                      width: (0, O.hj)(t.props.width) ? t.props.width : u.width,
                      startIndex: c,
                      endIndex: l,
                      updateId: "brush-".concat(s),
                    });
                  }),
                  Ne(Ae(a), "renderReferenceElement", function (t, e, n) {
                    if (!t) return null;
                    var i = Ae(a).clipPathId,
                      o = a.state,
                      u = o.xAxisMap,
                      c = o.yAxisMap,
                      l = o.offset,
                      s = t.props,
                      f = s.xAxisId,
                      p = s.yAxisId;
                    return (0, r.cloneElement)(t, {
                      key: t.key || "".concat(e, "-").concat(n),
                      xAxis: u[f],
                      yAxis: c[p],
                      viewBox: {
                        x: l.left,
                        y: l.top,
                        width: l.width,
                        height: l.height,
                      },
                      clipPathId: i,
                    });
                  }),
                  Ne(Ae(a), "renderActivePoints", function (t) {
                    var e = t.item,
                      n = t.activePoint,
                      r = t.basePoint,
                      i = t.childIndex,
                      o = t.isRange,
                      a = [],
                      u = e.props.key,
                      c = e.item.props,
                      l = c.activeDot,
                      s = Ce(
                        Ce(
                          {
                            index: i,
                            dataKey: c.dataKey,
                            cx: n.x,
                            cy: n.y,
                            r: 4,
                            fill: (0, at.fk)(e.item),
                            strokeWidth: 2,
                            stroke: "#fff",
                            payload: n.payload,
                            value: n.value,
                            key: "".concat(u, "-activePoint-").concat(i),
                          },
                          (0, z.L6)(l),
                        ),
                        (0, W.Ym)(l),
                      );
                    return (
                      a.push(p.renderActiveDot(l, s)),
                      r
                        ? a.push(
                            p.renderActiveDot(
                              l,
                              Ce(
                                Ce({}, s),
                                {},
                                {
                                  cx: r.x,
                                  cy: r.y,
                                  key: "".concat(u, "-basePoint-").concat(i),
                                },
                              ),
                            ),
                          )
                        : o && a.push(null),
                      a
                    );
                  }),
                  Ne(Ae(a), "renderGraphicChild", function (t, e, n) {
                    var i = a.filterFormatItem(t, e, n);
                    if (!i) return null;
                    var u = a.getTooltipEventType(),
                      c = a.state,
                      l = c.isTooltipActive,
                      s = c.tooltipAxis,
                      f = c.activeTooltipIndex,
                      p = c.activeLabel,
                      h = a.props.children,
                      d = (0, z.sP)(h, I.u),
                      y = i.props,
                      v = y.points,
                      m = y.isRange,
                      g = y.baseLine,
                      b = i.item.props,
                      x = b.activeDot,
                      w = b.hide,
                      j = b.activeBar,
                      S = b.activeShape,
                      E = Boolean(!w && l && d && (x || j || S)),
                      A = {};
                    "axis" !== u && d && "click" === d.props.trigger
                      ? (A = {
                          onClick: (0, at.DO)(
                            a.handleItemMouseEnter,
                            t.props.onClick,
                          ),
                        })
                      : "axis" !== u &&
                        (A = {
                          onMouseLeave: (0, at.DO)(
                            a.handleItemMouseLeave,
                            t.props.onMouseLeave,
                          ),
                          onMouseEnter: (0, at.DO)(
                            a.handleItemMouseEnter,
                            t.props.onMouseEnter,
                          ),
                        });
                    var P = (0, r.cloneElement)(t, Ce(Ce({}, i.props), A));
                    if (E) {
                      if (!(f >= 0)) {
                        var k,
                          M = (
                            null !==
                              (k = a.getItemByXY(a.state.activeCoordinate)) &&
                            void 0 !== k
                              ? k
                              : { graphicalItem: P }
                          ).graphicalItem,
                          T = M.item,
                          _ = void 0 === T ? t : T,
                          C = M.childIndex,
                          N = Ce(
                            Ce(Ce({}, i.props), A),
                            {},
                            { activeIndex: C },
                          );
                        return [(0, r.cloneElement)(_, N), null, null];
                      }
                      var D, B;
                      if (s.dataKey && !s.allowDuplicatedCategory) {
                        var L =
                          "function" == typeof s.dataKey
                            ? function (t) {
                                return "function" == typeof s.dataKey
                                  ? s.dataKey(t.payload)
                                  : null;
                              }
                            : "payload.".concat(s.dataKey.toString());
                        (D = (0, O.Ap)(v, L, p)),
                          (B = m && g && (0, O.Ap)(g, L, p));
                      } else
                        (D = null == v ? void 0 : v[f]), (B = m && g && g[f]);
                      if (S || j) {
                        var R =
                          void 0 !== t.props.activeIndex
                            ? t.props.activeIndex
                            : f;
                        return [
                          (0, r.cloneElement)(
                            t,
                            Ce(Ce(Ce({}, i.props), A), {}, { activeIndex: R }),
                          ),
                          null,
                          null,
                        ];
                      }
                      if (!o()(D))
                        return [P].concat(
                          ke(
                            a.renderActivePoints({
                              item: i,
                              activePoint: D,
                              basePoint: B,
                              childIndex: f,
                              isRange: m,
                            }),
                          ),
                        );
                    }
                    return m ? [P, null, null] : [P, null];
                  }),
                  Ne(Ae(a), "renderCustomized", function (t, e, n) {
                    return (0, r.cloneElement)(
                      t,
                      Ce(
                        Ce({ key: "recharts-customized-".concat(n) }, a.props),
                        a.state,
                      ),
                    );
                  }),
                  Ne(Ae(a), "renderMap", {
                    CartesianGrid: { handler: a.renderGrid, once: !0 },
                    ReferenceArea: { handler: a.renderReferenceElement },
                    ReferenceLine: { handler: a.renderReferenceElement },
                    ReferenceDot: { handler: a.renderReferenceElement },
                    XAxis: { handler: a.renderXAxis },
                    YAxis: { handler: a.renderYAxis },
                    Brush: { handler: a.renderBrush, once: !0 },
                    Bar: { handler: a.renderGraphicChild },
                    Line: { handler: a.renderGraphicChild },
                    Area: { handler: a.renderGraphicChild },
                    Radar: { handler: a.renderGraphicChild },
                    RadialBar: { handler: a.renderGraphicChild },
                    Scatter: { handler: a.renderGraphicChild },
                    Pie: { handler: a.renderGraphicChild },
                    Funnel: { handler: a.renderGraphicChild },
                    Tooltip: { handler: a.renderCursor, once: !0 },
                    PolarGrid: { handler: a.renderPolarGrid, once: !0 },
                    PolarAngleAxis: { handler: a.renderPolarAxis },
                    PolarRadiusAxis: { handler: a.renderPolarAxis },
                    Customized: { handler: a.renderCustomized },
                  }),
                  (a.clipPathId = "".concat(
                    null !== (e = t.id) && void 0 !== e
                      ? e
                      : (0, O.EL)("recharts"),
                    "-clip",
                  )),
                  (a.throttleTriggeredAfterMouseMove = y()(
                    a.triggeredAfterMouseMove,
                    null !== (i = t.throttleDelay) && void 0 !== i
                      ? i
                      : 1e3 / 60,
                  )),
                  (a.state = {}),
                  a
                );
              }
              return (
                (e = p),
                (i = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var t, e;
                      this.addListener(),
                        this.accessibilityManager.setDetails({
                          container: this.container,
                          offset: {
                            left:
                              null !== (t = this.props.margin.left) &&
                              void 0 !== t
                                ? t
                                : 0,
                            top:
                              null !== (e = this.props.margin.top) &&
                              void 0 !== e
                                ? e
                                : 0,
                          },
                          coordinateList: this.state.tooltipTicks,
                          mouseHandlerCallback: this.triggeredAfterMouseMove,
                          layout: this.props.layout,
                        });
                    },
                  },
                  {
                    key: "getSnapshotBeforeUpdate",
                    value: function (t, e) {
                      return this.props.accessibilityLayer
                        ? (this.state.tooltipTicks !== e.tooltipTicks &&
                            this.accessibilityManager.setDetails({
                              coordinateList: this.state.tooltipTicks,
                            }),
                          this.props.layout !== t.layout &&
                            this.accessibilityManager.setDetails({
                              layout: this.props.layout,
                            }),
                          this.props.margin !== t.margin &&
                            this.accessibilityManager.setDetails({
                              offset: {
                                left:
                                  null !== (n = this.props.margin.left) &&
                                  void 0 !== n
                                    ? n
                                    : 0,
                                top:
                                  null !== (r = this.props.margin.top) &&
                                  void 0 !== r
                                    ? r
                                    : 0,
                              },
                            }),
                          null)
                        : null;
                      var n, r;
                    },
                  },
                  { key: "componentDidUpdate", value: function () {} },
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
                      var t = (0, z.sP)(this.props.children, I.u);
                      if (t && "boolean" == typeof t.props.shared) {
                        var e = t.props.shared ? "axis" : "item";
                        return s.indexOf(e) >= 0 ? e : c;
                      }
                      return c;
                    },
                  },
                  {
                    key: "getMouseInfo",
                    value: function (t) {
                      if (!this.container) return null;
                      var e = this.container,
                        n = e.getBoundingClientRect(),
                        r = (0, j.os)(n),
                        i = {
                          chartX: Math.round(t.pageX - r.left),
                          chartY: Math.round(t.pageY - r.top),
                        },
                        o = n.width / e.offsetWidth || 1,
                        a = this.inRange(i.chartX, i.chartY, o);
                      if (!a) return null;
                      var u = this.state,
                        c = u.xAxisMap,
                        l = u.yAxisMap;
                      if ("axis" !== this.getTooltipEventType() && c && l) {
                        var s = (0, O.Kt)(c).scale,
                          f = (0, O.Kt)(l).scale,
                          p = s && s.invert ? s.invert(i.chartX) : null,
                          h = f && f.invert ? f.invert(i.chartY) : null;
                        return Ce(Ce({}, i), {}, { xValue: p, yValue: h });
                      }
                      var d = Fe(
                        this.state,
                        this.props.data,
                        this.props.layout,
                        a,
                      );
                      return d ? Ce(Ce({}, i), d) : null;
                    },
                  },
                  {
                    key: "inRange",
                    value: function (t, e) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 1,
                        r = this.props.layout,
                        i = t / n,
                        o = e / n;
                      if ("horizontal" === r || "vertical" === r) {
                        var a = this.state.offset;
                        return i >= a.left &&
                          i <= a.left + a.width &&
                          o >= a.top &&
                          o <= a.top + a.height
                          ? { x: i, y: o }
                          : null;
                      }
                      var u = this.state,
                        c = u.angleAxisMap,
                        l = u.radiusAxisMap;
                      if (c && l) {
                        var s = (0, O.Kt)(c);
                        return (0, Zt.z3)({ x: i, y: o }, s);
                      }
                      return null;
                    },
                  },
                  {
                    key: "parseEventsOfWrapper",
                    value: function () {
                      var t = this.props.children,
                        e = this.getTooltipEventType(),
                        n = (0, z.sP)(t, I.u),
                        r = {};
                      return (
                        n &&
                          "axis" === e &&
                          (r =
                            "click" === n.props.trigger
                              ? { onClick: this.handleClick }
                              : {
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseMove: this.handleMouseMove,
                                  onMouseLeave: this.handleMouseLeave,
                                  onTouchMove: this.handleTouchMove,
                                  onTouchStart: this.handleTouchStart,
                                  onTouchEnd: this.handleTouchEnd,
                                }),
                        Ce(
                          Ce({}, (0, W.Ym)(this.props, this.handleOuterEvent)),
                          r,
                        )
                      );
                    },
                  },
                  {
                    key: "addListener",
                    value: function () {
                      Ht.on(Gt, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "removeListener",
                    value: function () {
                      Ht.removeListener(Gt, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "filterFormatItem",
                    value: function (t, e, n) {
                      for (
                        var r = this.state.formattedGraphicalItems,
                          i = 0,
                          o = r.length;
                        i < o;
                        i++
                      ) {
                        var a = r[i];
                        if (
                          a.item === t ||
                          a.props.key === t.key ||
                          (e === (0, z.Gf)(a.item.type) && n === a.childIndex)
                        )
                          return a;
                      }
                      return null;
                    },
                  },
                  {
                    key: "renderAxis",
                    value: function (t, e, n, i) {
                      var o = this.props,
                        a = o.width,
                        u = o.height;
                      return r.createElement(
                        it,
                        we({}, t, {
                          className: (0, x.Z)(
                            "recharts-"
                              .concat(t.axisType, " ")
                              .concat(t.axisType),
                            t.className,
                          ),
                          key: e.key || "".concat(n, "-").concat(i),
                          viewBox: { x: 0, y: 0, width: a, height: u },
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
                        n = e.left,
                        i = e.top,
                        o = e.height,
                        a = e.width;
                      return r.createElement(
                        "defs",
                        null,
                        r.createElement(
                          "clipPath",
                          { id: t },
                          r.createElement("rect", {
                            x: n,
                            y: i,
                            height: o,
                            width: a,
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
                            var n = xe(e, 2),
                              r = n[0],
                              i = n[1];
                            return Ce(Ce({}, t), {}, Ne({}, r, i.scale));
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
                            var n = xe(e, 2),
                              r = n[0],
                              i = n[1];
                            return Ce(Ce({}, t), {}, Ne({}, r, i.scale));
                          }, {})
                        : null;
                    },
                  },
                  {
                    key: "getXScaleByAxisId",
                    value: function (t) {
                      var e;
                      return null === (e = this.state.xAxisMap) ||
                        void 0 === e ||
                        null === (e = e[t]) ||
                        void 0 === e
                        ? void 0
                        : e.scale;
                    },
                  },
                  {
                    key: "getYScaleByAxisId",
                    value: function (t) {
                      var e;
                      return null === (e = this.state.yAxisMap) ||
                        void 0 === e ||
                        null === (e = e[t]) ||
                        void 0 === e
                        ? void 0
                        : e.scale;
                    },
                  },
                  {
                    key: "getItemByXY",
                    value: function (t) {
                      var e = this.state,
                        n = e.formattedGraphicalItems,
                        r = e.activeItem;
                      if (n && n.length)
                        for (var i = 0, o = n.length; i < o; i++) {
                          var a = n[i],
                            u = a.props,
                            c = a.item,
                            l = (0, z.Gf)(c.type);
                          if ("Bar" === l) {
                            var s = (u.data || []).find(function (e) {
                              return (0, R.X)(t, e);
                            });
                            if (s) return { graphicalItem: a, payload: s };
                          } else if ("RadialBar" === l) {
                            var f = (u.data || []).find(function (e) {
                              return (0, Zt.z3)(t, e);
                            });
                            if (f) return { graphicalItem: a, payload: f };
                          } else if (
                            (0, Qt.lT)(a, r) ||
                            (0, Qt.V$)(a, r) ||
                            (0, Qt.w7)(a, r)
                          ) {
                            var p = (0, Qt.a3)({
                                graphicalItem: a,
                                activeTooltipItem: r,
                                itemData: c.props.data,
                              }),
                              h =
                                void 0 === c.props.activeIndex
                                  ? p
                                  : c.props.activeIndex;
                            return {
                              graphicalItem: Ce(
                                Ce({}, a),
                                {},
                                { childIndex: h },
                              ),
                              payload: (0, Qt.w7)(a, r)
                                ? c.props.data[p]
                                : a.props.data[p],
                            };
                          }
                        }
                      return null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = this;
                      if (!(0, z.TT)(this)) return null;
                      var e,
                        n,
                        i = this.props,
                        o = i.children,
                        a = i.className,
                        u = i.width,
                        c = i.height,
                        l = i.style,
                        s = i.compact,
                        f = i.title,
                        p = i.desc,
                        h = Oe(i, ge),
                        d = (0, z.L6)(h);
                      if (s)
                        return r.createElement(
                          N.T,
                          we({}, d, { width: u, height: c, title: f, desc: p }),
                          this.renderClipPath(),
                          (0, z.eu)(o, this.renderMap),
                        );
                      this.props.accessibilityLayer &&
                        ((d.tabIndex =
                          null !== (e = this.props.tabIndex) && void 0 !== e
                            ? e
                            : 0),
                        (d.role =
                          null !== (n = this.props.role) && void 0 !== n
                            ? n
                            : "img"),
                        (d.onKeyDown = function (e) {
                          t.accessibilityManager.keyboardEvent(e);
                        }),
                        (d.onFocus = function () {
                          t.accessibilityManager.focus();
                        }));
                      var y = this.parseEventsOfWrapper();
                      return r.createElement(
                        "div",
                        we(
                          {
                            className: (0, x.Z)("recharts-wrapper", a),
                            style: Ce(
                              {
                                position: "relative",
                                cursor: "default",
                                width: u,
                                height: c,
                              },
                              l,
                            ),
                          },
                          y,
                          {
                            ref: function (e) {
                              t.container = e;
                            },
                            role: "region",
                          },
                        ),
                        r.createElement(
                          N.T,
                          we({}, d, {
                            width: u,
                            height: c,
                            title: f,
                            desc: p,
                            style: Be,
                          }),
                          this.renderClipPath(),
                          (0, z.eu)(o, this.renderMap),
                        ),
                        this.renderLegend(),
                        this.renderTooltip(),
                      );
                    },
                  },
                ]),
                i && je(e.prototype, i),
                a && je(e, a),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                p
              );
            })(r.Component)),
            Ne(e, "displayName", n),
            Ne(
              e,
              "defaultProps",
              Ce(
                {
                  layout: "horizontal",
                  stackOffset: "none",
                  barCategoryGap: "10%",
                  barGap: 4,
                  margin: { top: 5, right: 5, bottom: 5, left: 5 },
                  reverseStackOrder: !1,
                  syncMethod: "index",
                },
                g,
              ),
            ),
            Ne(e, "getDerivedStateFromProps", function (t, e) {
              var n = t.dataKey,
                r = t.data,
                i = t.children,
                a = t.width,
                u = t.height,
                c = t.layout,
                l = t.stackOffset,
                s = t.margin,
                f = e.dataStartIndex,
                p = e.dataEndIndex;
              if (void 0 === e.updateId) {
                var h = Ze(t);
                return Ce(
                  Ce(
                    Ce({}, h),
                    {},
                    { updateId: 0 },
                    E(Ce(Ce({ props: t }, h), {}, { updateId: 0 }), e),
                  ),
                  {},
                  {
                    prevDataKey: n,
                    prevData: r,
                    prevWidth: a,
                    prevHeight: u,
                    prevLayout: c,
                    prevStackOffset: l,
                    prevMargin: s,
                    prevChildren: i,
                  },
                );
              }
              if (
                n !== e.prevDataKey ||
                r !== e.prevData ||
                a !== e.prevWidth ||
                u !== e.prevHeight ||
                c !== e.prevLayout ||
                l !== e.prevStackOffset ||
                !(0, U.w)(s, e.prevMargin)
              ) {
                var d = Ze(t),
                  y = {
                    chartX: e.chartX,
                    chartY: e.chartY,
                    isTooltipActive: e.isTooltipActive,
                  },
                  v = Ce(Ce({}, Fe(e, r, c)), {}, { updateId: e.updateId + 1 }),
                  m = Ce(Ce(Ce({}, d), y), v);
                return Ce(
                  Ce(Ce({}, m), E(Ce({ props: t }, m), e)),
                  {},
                  {
                    prevDataKey: n,
                    prevData: r,
                    prevWidth: a,
                    prevHeight: u,
                    prevLayout: c,
                    prevStackOffset: l,
                    prevMargin: s,
                    prevChildren: i,
                  },
                );
              }
              if (!(0, z.rL)(i, e.prevChildren)) {
                var g,
                  b,
                  x,
                  w,
                  O = (0, z.sP)(i, St),
                  j =
                    O &&
                    null !==
                      (g =
                        null === (b = O.props) || void 0 === b
                          ? void 0
                          : b.startIndex) &&
                    void 0 !== g
                      ? g
                      : f,
                  S =
                    O &&
                    null !==
                      (x =
                        null === (w = O.props) || void 0 === w
                          ? void 0
                          : w.endIndex) &&
                    void 0 !== x
                      ? x
                      : p,
                  A = j !== f || S !== p,
                  P = !o()(r) && !A ? e.updateId : e.updateId + 1;
                return Ce(
                  Ce(
                    { updateId: P },
                    E(
                      Ce(
                        Ce({ props: t }, e),
                        {},
                        { updateId: P, dataStartIndex: j, dataEndIndex: S },
                      ),
                      e,
                    ),
                  ),
                  {},
                  { prevChildren: i, dataStartIndex: j, dataEndIndex: S },
                );
              }
              return null;
            }),
            Ne(e, "renderActiveDot", function (t, e) {
              var n;
              return (
                (n = (0, r.isValidElement)(t)
                  ? (0, r.cloneElement)(t, e)
                  : u()(t)
                    ? t(e)
                    : r.createElement(L.o, e)),
                r.createElement(
                  D.m,
                  { className: "recharts-active-dot", key: e.key },
                  n,
                )
              );
            }),
            e
          );
        };
    },
    85674: (t, e, n) => {
      "use strict";
      n.d(e, { b: () => r });
      var r = function (t) {
        return null;
      };
      r.displayName = "Cell";
    },
    47094: (t, e, n) => {
      "use strict";
      n.d(e, { _: () => M });
      var r = n(47427),
        i = n(38716),
        o = n.n(i),
        a = n(8889),
        u = n.n(a),
        c = n(60486),
        l = n.n(c),
        s = n(84148),
        f = n(93998),
        p = n(94797),
        h = n(76325),
        d = n(53460);
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
      var v = ["offset"];
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
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
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
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function b(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function x(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(n), !0).forEach(function (e) {
                O(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : x(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function O(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== y(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== y(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === y(e) ? e : String(e);
          })(e)) in t
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
      function j() {
        return (
          (j = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          j.apply(this, arguments)
        );
      }
      var S = function (t) {
          var e = t.value,
            n = t.formatter,
            r = o()(t.children) ? e : t.children;
          return u()(n) ? n(r) : r;
        },
        E = function (t, e, n) {
          var i,
            a,
            u = t.position,
            c = t.viewBox,
            l = t.offset,
            f = t.className,
            p = c,
            y = p.cx,
            v = p.cy,
            m = p.innerRadius,
            g = p.outerRadius,
            b = p.startAngle,
            x = p.endAngle,
            w = p.clockWise,
            O = (m + g) / 2,
            S = (function (t, e) {
              return (0, h.uY)(e - t) * Math.min(Math.abs(e - t), 360);
            })(b, x),
            E = S >= 0 ? 1 : -1;
          "insideStart" === u
            ? ((i = b + E * l), (a = w))
            : "insideEnd" === u
              ? ((i = x - E * l), (a = !w))
              : "end" === u && ((i = x + E * l), (a = w)),
            (a = S <= 0 ? a : !a);
          var A = (0, d.op)(y, v, O, i),
            P = (0, d.op)(y, v, O, i + 359 * (a ? 1 : -1)),
            k = "M"
              .concat(A.x, ",")
              .concat(A.y, "\n    A")
              .concat(O, ",")
              .concat(O, ",0,1,")
              .concat(a ? 0 : 1, ",\n    ")
              .concat(P.x, ",")
              .concat(P.y),
            M = o()(t.id) ? (0, h.EL)("recharts-radial-line-") : t.id;
          return r.createElement(
            "text",
            j({}, n, {
              dominantBaseline: "central",
              className: (0, s.Z)("recharts-radial-bar-label", f),
            }),
            r.createElement(
              "defs",
              null,
              r.createElement("path", { id: M, d: k }),
            ),
            r.createElement("textPath", { xlinkHref: "#".concat(M) }, e),
          );
        },
        A = function (t) {
          var e = t.viewBox,
            n = t.offset,
            r = t.position,
            i = e,
            o = i.cx,
            a = i.cy,
            u = i.innerRadius,
            c = i.outerRadius,
            l = (i.startAngle + i.endAngle) / 2;
          if ("outside" === r) {
            var s = (0, d.op)(o, a, c + n, l),
              f = s.x;
            return {
              x: f,
              y: s.y,
              textAnchor: f >= o ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === r)
            return {
              x: o,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === r)
            return {
              x: o,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === r)
            return { x: o, y: a, textAnchor: "middle", verticalAnchor: "end" };
          var p = (u + c) / 2,
            h = (0, d.op)(o, a, p, l);
          return {
            x: h.x,
            y: h.y,
            textAnchor: "middle",
            verticalAnchor: "middle",
          };
        },
        P = function (t) {
          var e = t.viewBox,
            n = t.parentViewBox,
            r = t.offset,
            i = t.position,
            o = e,
            a = o.x,
            u = o.y,
            c = o.width,
            s = o.height,
            f = s >= 0 ? 1 : -1,
            p = f * r,
            d = f > 0 ? "end" : "start",
            y = f > 0 ? "start" : "end",
            v = c >= 0 ? 1 : -1,
            m = v * r,
            g = v > 0 ? "end" : "start",
            b = v > 0 ? "start" : "end";
          if ("top" === i)
            return w(
              w(
                {},
                {
                  x: a + c / 2,
                  y: u - f * r,
                  textAnchor: "middle",
                  verticalAnchor: d,
                },
              ),
              n ? { height: Math.max(u - n.y, 0), width: c } : {},
            );
          if ("bottom" === i)
            return w(
              w(
                {},
                {
                  x: a + c / 2,
                  y: u + s + p,
                  textAnchor: "middle",
                  verticalAnchor: y,
                },
              ),
              n
                ? { height: Math.max(n.y + n.height - (u + s), 0), width: c }
                : {},
            );
          if ("left" === i) {
            var x = {
              x: a - m,
              y: u + s / 2,
              textAnchor: g,
              verticalAnchor: "middle",
            };
            return w(
              w({}, x),
              n ? { width: Math.max(x.x - n.x, 0), height: s } : {},
            );
          }
          if ("right" === i) {
            var O = {
              x: a + c + m,
              y: u + s / 2,
              textAnchor: b,
              verticalAnchor: "middle",
            };
            return w(
              w({}, O),
              n ? { width: Math.max(n.x + n.width - O.x, 0), height: s } : {},
            );
          }
          var j = n ? { width: c, height: s } : {};
          return "insideLeft" === i
            ? w(
                {
                  x: a + m,
                  y: u + s / 2,
                  textAnchor: b,
                  verticalAnchor: "middle",
                },
                j,
              )
            : "insideRight" === i
              ? w(
                  {
                    x: a + c - m,
                    y: u + s / 2,
                    textAnchor: g,
                    verticalAnchor: "middle",
                  },
                  j,
                )
              : "insideTop" === i
                ? w(
                    {
                      x: a + c / 2,
                      y: u + p,
                      textAnchor: "middle",
                      verticalAnchor: y,
                    },
                    j,
                  )
                : "insideBottom" === i
                  ? w(
                      {
                        x: a + c / 2,
                        y: u + s - p,
                        textAnchor: "middle",
                        verticalAnchor: d,
                      },
                      j,
                    )
                  : "insideTopLeft" === i
                    ? w(
                        {
                          x: a + m,
                          y: u + p,
                          textAnchor: b,
                          verticalAnchor: y,
                        },
                        j,
                      )
                    : "insideTopRight" === i
                      ? w(
                          {
                            x: a + c - m,
                            y: u + p,
                            textAnchor: g,
                            verticalAnchor: y,
                          },
                          j,
                        )
                      : "insideBottomLeft" === i
                        ? w(
                            {
                              x: a + m,
                              y: u + s - p,
                              textAnchor: b,
                              verticalAnchor: d,
                            },
                            j,
                          )
                        : "insideBottomRight" === i
                          ? w(
                              {
                                x: a + c - m,
                                y: u + s - p,
                                textAnchor: g,
                                verticalAnchor: d,
                              },
                              j,
                            )
                          : l()(i) &&
                              ((0, h.hj)(i.x) || (0, h.hU)(i.x)) &&
                              ((0, h.hj)(i.y) || (0, h.hU)(i.y))
                            ? w(
                                {
                                  x: a + (0, h.h1)(i.x, c),
                                  y: u + (0, h.h1)(i.y, s),
                                  textAnchor: "end",
                                  verticalAnchor: "end",
                                },
                                j,
                              )
                            : w(
                                {
                                  x: a + c / 2,
                                  y: u + s / 2,
                                  textAnchor: "middle",
                                  verticalAnchor: "middle",
                                },
                                j,
                              );
        },
        k = function (t) {
          return "cx" in t && (0, h.hj)(t.cx);
        };
      function M(t) {
        var e,
          n = t.offset,
          i = w({ offset: void 0 === n ? 5 : n }, b(t, v)),
          a = i.viewBox,
          c = i.position,
          l = i.value,
          h = i.children,
          d = i.content,
          y = i.className,
          m = void 0 === y ? "" : y,
          g = i.textBreakAll;
        if (!a || (o()(l) && o()(h) && !(0, r.isValidElement)(d) && !u()(d)))
          return null;
        if ((0, r.isValidElement)(d)) return (0, r.cloneElement)(d, i);
        if (u()(d)) {
          if (((e = (0, r.createElement)(d, i)), (0, r.isValidElement)(e)))
            return e;
        } else e = S(i);
        var x = k(a),
          O = (0, p.L6)(i, !0);
        if (x && ("insideStart" === c || "insideEnd" === c || "end" === c))
          return E(i, e, O);
        var M = x ? A(i) : P(i);
        return r.createElement(
          f.x,
          j({ className: (0, s.Z)("recharts-label", m) }, O, M, {
            breakAll: g,
          }),
          e,
        );
      }
      M.displayName = "Label";
      var T = function (t) {
        var e = t.cx,
          n = t.cy,
          r = t.angle,
          i = t.startAngle,
          o = t.endAngle,
          a = t.r,
          u = t.radius,
          c = t.innerRadius,
          l = t.outerRadius,
          s = t.x,
          f = t.y,
          p = t.top,
          d = t.left,
          y = t.width,
          v = t.height,
          m = t.clockWise,
          g = t.labelViewBox;
        if (g) return g;
        if ((0, h.hj)(y) && (0, h.hj)(v)) {
          if ((0, h.hj)(s) && (0, h.hj)(f))
            return { x: s, y: f, width: y, height: v };
          if ((0, h.hj)(p) && (0, h.hj)(d))
            return { x: p, y: d, width: y, height: v };
        }
        return (0, h.hj)(s) && (0, h.hj)(f)
          ? { x: s, y: f, width: 0, height: 0 }
          : (0, h.hj)(e) && (0, h.hj)(n)
            ? {
                cx: e,
                cy: n,
                startAngle: i || r || 0,
                endAngle: o || r || 0,
                innerRadius: c || 0,
                outerRadius: l || u || a || 0,
                clockWise: m,
              }
            : t.viewBox
              ? t.viewBox
              : {};
      };
      (M.parseViewBox = T),
        (M.renderCallByParent = function (t, e) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && n && !t.label)) return null;
          var i = t.children,
            o = T(t),
            a = (0, p.NN)(i, M).map(function (t, n) {
              return (0, r.cloneElement)(t, {
                viewBox: e || o,
                key: "label-".concat(n),
              });
            });
          if (!n) return a;
          var c = (function (t, e) {
            return t
              ? !0 === t
                ? r.createElement(M, { key: "label-implicit", viewBox: e })
                : (0, h.P2)(t)
                  ? r.createElement(M, {
                      key: "label-implicit",
                      viewBox: e,
                      value: t,
                    })
                  : (0, r.isValidElement)(t)
                    ? t.type === M
                      ? (0, r.cloneElement)(t, {
                          key: "label-implicit",
                          viewBox: e,
                        })
                      : r.createElement(M, {
                          key: "label-implicit",
                          content: t,
                          viewBox: e,
                        })
                    : u()(t)
                      ? r.createElement(M, {
                          key: "label-implicit",
                          content: t,
                          viewBox: e,
                        })
                      : l()(t)
                        ? r.createElement(
                            M,
                            j({ viewBox: e }, t, { key: "label-implicit" }),
                          )
                        : null
              : null;
          })(t.label, e || o);
          return [c].concat(m(a));
        });
    },
    72961: (t, e, n) => {
      "use strict";
      n.d(e, { e: () => P });
      var r = n(47427),
        i = n(38716),
        o = n.n(i),
        a = n(60486),
        u = n.n(a),
        c = n(8889),
        l = n.n(c),
        s = n(54794),
        f = n.n(s),
        p = n(47094),
        h = n(47430),
        d = n(94797),
        y = n(70416);
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
      var m = ["valueAccessor"],
        g = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
      function b(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return x(t);
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
            if ("string" == typeof t) return x(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return x(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function x(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function w() {
        return (
          (w = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          w.apply(this, arguments)
        );
      }
      function O(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(Object(n), !0).forEach(function (e) {
                S(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : O(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function S(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== v(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== v(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === v(e) ? e : String(e);
          })(e)) in t
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
      function E(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var A = function (t) {
        return Array.isArray(t.value) ? f()(t.value) : t.value;
      };
      function P(t) {
        var e = t.valueAccessor,
          n = void 0 === e ? A : e,
          i = E(t, m),
          a = i.data,
          u = i.dataKey,
          c = i.clockWise,
          l = i.id,
          s = i.textBreakAll,
          f = E(i, g);
        return a && a.length
          ? r.createElement(
              h.m,
              { className: "recharts-label-list" },
              a.map(function (t, e) {
                var i = o()(u) ? n(t, e) : (0, y.F$)(t && t.payload, u),
                  a = o()(l) ? {} : { id: "".concat(l, "-").concat(e) };
                return r.createElement(
                  p._,
                  w({}, (0, d.L6)(t, !0), f, a, {
                    parentViewBox: t.parentViewBox,
                    value: i,
                    textBreakAll: s,
                    viewBox: p._.parseViewBox(
                      o()(c) ? t : j(j({}, t), {}, { clockWise: c }),
                    ),
                    key: "label-".concat(e),
                    index: e,
                  }),
                );
              }),
            )
          : null;
      }
      (P.displayName = "LabelList"),
        (P.renderCallByParent = function (t, e) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && n && !t.label)) return null;
          var i = t.children,
            o = (0, d.NN)(i, P).map(function (t, n) {
              return (0, r.cloneElement)(t, {
                data: e,
                key: "labelList-".concat(n),
              });
            });
          return n
            ? [
                (function (t, e) {
                  return t
                    ? !0 === t
                      ? r.createElement(P, {
                          key: "labelList-implicit",
                          data: e,
                        })
                      : r.isValidElement(t) || l()(t)
                        ? r.createElement(P, {
                            key: "labelList-implicit",
                            data: e,
                            content: t,
                          })
                        : u()(t)
                          ? r.createElement(
                              P,
                              w({ data: e }, t, { key: "labelList-implicit" }),
                            )
                          : null
                    : null;
                })(t.label, e),
              ].concat(b(o))
            : o;
        });
    },
    88579: (t, e, n) => {
      "use strict";
      n.d(e, { D: () => L });
      var r = n(47427),
        i = n(8889),
        o = n.n(i),
        a = n(84148),
        u = n(90481),
        c = n(82440),
        l = n(58054),
        s = n(81156);
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
      function p() {
        return (
          (p = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          p.apply(this, arguments)
        );
      }
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, b(r.key), r);
        }
      }
      function y(t, e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          y(t, e)
        );
      }
      function v(t) {
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
          var n,
            r = m(t);
          if (e) {
            var i = m(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === f(e) || "function" == typeof e)) return e;
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
          })(this, n);
        };
      }
      function m(t) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          m(t)
        );
      }
      function g(t, e, n) {
        return (
          (e = b(e)) in t
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
      function b(t) {
        var e = (function (t, e) {
          if ("object" !== f(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== f(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === f(e) ? e : String(e);
      }
      var x = 32,
        w = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && y(t, e);
          })(m, t);
          var e,
            n,
            i,
            f = v(m);
          function m() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, m),
              f.apply(this, arguments)
            );
          }
          return (
            (e = m),
            (n = [
              {
                key: "renderIcon",
                value: function (t) {
                  var e = this.props.inactiveColor,
                    n = 16,
                    i = x / 6,
                    o = x / 3,
                    a = t.inactive ? e : t.color;
                  if ("plainline" === t.type)
                    return r.createElement("line", {
                      strokeWidth: 4,
                      fill: "none",
                      stroke: a,
                      strokeDasharray: t.payload.strokeDasharray,
                      x1: 0,
                      y1: n,
                      x2: x,
                      y2: n,
                      className: "recharts-legend-icon",
                    });
                  if ("line" === t.type)
                    return r.createElement("path", {
                      strokeWidth: 4,
                      fill: "none",
                      stroke: a,
                      d: "M0,"
                        .concat(n, "h")
                        .concat(o, "\n            A")
                        .concat(i, ",")
                        .concat(i, ",0,1,1,")
                        .concat(2 * o, ",")
                        .concat(n, "\n            H")
                        .concat(x, "M")
                        .concat(2 * o, ",")
                        .concat(n, "\n            A")
                        .concat(i, ",")
                        .concat(i, ",0,1,1,")
                        .concat(o, ",")
                        .concat(n),
                      className: "recharts-legend-icon",
                    });
                  if ("rect" === t.type)
                    return r.createElement("path", {
                      stroke: "none",
                      fill: a,
                      d: "M0,"
                        .concat(4, "h")
                        .concat(x, "v")
                        .concat(24, "h")
                        .concat(-32, "z"),
                      className: "recharts-legend-icon",
                    });
                  if (r.isValidElement(t.legendIcon)) {
                    var u = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? h(Object(n), !0).forEach(function (e) {
                              g(t, e, n[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                t,
                                Object.getOwnPropertyDescriptors(n),
                              )
                            : h(Object(n)).forEach(function (e) {
                                Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(n, e),
                                );
                              });
                      }
                      return t;
                    })({}, t);
                    return delete u.legendIcon, r.cloneElement(t.legendIcon, u);
                  }
                  return r.createElement(l.v, {
                    fill: a,
                    cx: n,
                    cy: n,
                    size: x,
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
                    n = e.payload,
                    i = e.iconSize,
                    l = e.layout,
                    f = e.formatter,
                    h = e.inactiveColor,
                    d = { x: 0, y: 0, width: x, height: x },
                    y = {
                      display: "horizontal" === l ? "inline-block" : "block",
                      marginRight: 10,
                    },
                    v = {
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: 4,
                    };
                  return n.map(function (e, n) {
                    var l,
                      m = e.formatter || f,
                      b = (0, a.Z)(
                        (g(
                          (l = { "recharts-legend-item": !0 }),
                          "legend-item-".concat(n),
                          !0,
                        ),
                        g(l, "inactive", e.inactive),
                        l),
                      );
                    if ("none" === e.type) return null;
                    var x = o()(e.value) ? null : e.value;
                    (0, u.Z)(
                      !o()(e.value),
                      'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>',
                    );
                    var w = e.inactive ? h : e.color;
                    return r.createElement(
                      "li",
                      p(
                        {
                          className: b,
                          style: y,
                          key: "legend-item-".concat(n),
                        },
                        (0, s.bw)(t.props, e, n),
                      ),
                      r.createElement(
                        c.T,
                        { width: i, height: i, viewBox: d, style: v },
                        t.renderIcon(e),
                      ),
                      r.createElement(
                        "span",
                        {
                          className: "recharts-legend-item-text",
                          style: { color: w },
                        },
                        m ? m(x, e, n) : x,
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
                    n = t.layout,
                    i = t.align;
                  if (!e || !e.length) return null;
                  var o = {
                    padding: 0,
                    margin: 0,
                    textAlign: "horizontal" === n ? i : "left",
                  };
                  return r.createElement(
                    "ul",
                    { className: "recharts-default-legend", style: o },
                    this.renderItems(),
                  );
                },
              },
            ]),
            n && d(e.prototype, n),
            i && d(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            m
          );
        })(r.PureComponent);
      g(w, "displayName", "Legend"),
        g(w, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "middle",
          inactiveColor: "#ccc",
        });
      var O = n(76325),
        j = n(60674);
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
      var E = ["ref"];
      function A(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(n), !0).forEach(function (e) {
                N(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : A(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function k(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, D(r.key), r);
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
          var n,
            r = C(t);
          if (e) {
            var i = C(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === S(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return _(t);
          })(this, n);
        };
      }
      function _(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function C(t) {
        return (
          (C = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          C(t)
        );
      }
      function N(t, e, n) {
        return (
          (e = D(e)) in t
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
      function D(t) {
        var e = (function (t, e) {
          if ("object" !== S(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== S(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === S(e) ? e : String(e);
      }
      function I(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function B(t) {
        return t.value;
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
            e && M(t, e);
        })(a, t);
        var e,
          n,
          i,
          o = T(a);
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            N(_((t = o.call.apply(o, [this].concat(n)))), "lastBoundingBox", {
              width: -1,
              height: -1,
            }),
            t
          );
        }
        return (
          (e = a),
          (i = [
            {
              key: "getWithHeight",
              value: function (t, e) {
                var n = t.props.layout;
                return "vertical" === n && (0, O.hj)(t.props.height)
                  ? { height: t.props.height }
                  : "horizontal" === n
                    ? { width: t.props.width || e }
                    : null;
              },
            },
          ]),
          (n = [
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
              key: "updateBBox",
              value: function () {
                var t = this.props.onBBoxUpdate;
                if (
                  this.wrapperNode &&
                  this.wrapperNode.getBoundingClientRect
                ) {
                  var e = this.wrapperNode.getBoundingClientRect();
                  (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
                    Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
                    ((this.lastBoundingBox.width = e.width),
                    (this.lastBoundingBox.height = e.height),
                    t && t(e));
                } else
                  (-1 === this.lastBoundingBox.width &&
                    -1 === this.lastBoundingBox.height) ||
                    ((this.lastBoundingBox.width = -1),
                    (this.lastBoundingBox.height = -1),
                    t && t(null));
              },
            },
            {
              key: "getBBoxSnapshot",
              value: function () {
                return this.lastBoundingBox.width >= 0 &&
                  this.lastBoundingBox.height >= 0
                  ? P({}, this.lastBoundingBox)
                  : { width: 0, height: 0 };
              },
            },
            {
              key: "getDefaultPosition",
              value: function (t) {
                var e,
                  n,
                  r = this.props,
                  i = r.layout,
                  o = r.align,
                  a = r.verticalAlign,
                  u = r.margin,
                  c = r.chartWidth,
                  l = r.chartHeight;
                return (
                  (t &&
                    ((void 0 !== t.left && null !== t.left) ||
                      (void 0 !== t.right && null !== t.right))) ||
                    (e =
                      "center" === o && "vertical" === i
                        ? {
                            left: ((c || 0) - this.getBBoxSnapshot().width) / 2,
                          }
                        : "right" === o
                          ? { right: (u && u.right) || 0 }
                          : { left: (u && u.left) || 0 }),
                  (t &&
                    ((void 0 !== t.top && null !== t.top) ||
                      (void 0 !== t.bottom && null !== t.bottom))) ||
                    (n =
                      "middle" === a
                        ? {
                            top: ((l || 0) - this.getBBoxSnapshot().height) / 2,
                          }
                        : "bottom" === a
                          ? { bottom: (u && u.bottom) || 0 }
                          : { top: (u && u.top) || 0 }),
                  P(P({}, e), n)
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.content,
                  i = e.width,
                  o = e.height,
                  a = e.wrapperStyle,
                  u = e.payloadUniqBy,
                  c = e.payload,
                  l = P(
                    P(
                      {
                        position: "absolute",
                        width: i || "auto",
                        height: o || "auto",
                      },
                      this.getDefaultPosition(a),
                    ),
                    a,
                  );
                return r.createElement(
                  "div",
                  {
                    className: "recharts-legend-wrapper",
                    style: l,
                    ref: function (e) {
                      t.wrapperNode = e;
                    },
                  },
                  (function (t, e) {
                    if (r.isValidElement(t)) return r.cloneElement(t, e);
                    if ("function" == typeof t) return r.createElement(t, e);
                    e.ref;
                    var n = I(e, E);
                    return r.createElement(w, n);
                  })(
                    n,
                    P(P({}, this.props), {}, { payload: (0, j.z)(c, u, B) }),
                  ),
                );
              },
            },
          ]) && k(e.prototype, n),
          i && k(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(r.PureComponent);
      N(L, "displayName", "Legend"),
        N(L, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
        });
    },
    8114: (t, e, n) => {
      "use strict";
      n.d(e, { h: () => m });
      var r = n(84148),
        i = n(47427),
        o = n(48679),
        a = n.n(o),
        u = n(5502),
        c = n(76325),
        l = n(90481),
        s = n(94797);
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
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(n), !0).forEach(function (e) {
                d(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : p(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function d(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== f(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== f(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === f(e) ? e : String(e);
          })(e)) in t
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
      function y(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
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
            if ("string" == typeof t) return v(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return v(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var m = (0, i.forwardRef)(function (t, e) {
        var n = t.aspect,
          o = t.initialDimension,
          f = void 0 === o ? { width: -1, height: -1 } : o,
          p = t.width,
          d = void 0 === p ? "100%" : p,
          v = t.height,
          m = void 0 === v ? "100%" : v,
          g = t.minWidth,
          b = void 0 === g ? 0 : g,
          x = t.minHeight,
          w = t.maxHeight,
          O = t.children,
          j = t.debounce,
          S = void 0 === j ? 0 : j,
          E = t.id,
          A = t.className,
          P = t.onResize,
          k = t.style,
          M = void 0 === k ? {} : k,
          T = (0, i.useRef)(null),
          _ = (0, i.useRef)();
        (_.current = P),
          (0, i.useImperativeHandle)(e, function () {
            return Object.assign(T.current, {
              get current() {
                return (
                  console.warn(
                    "The usage of ref.current.current is deprecated and will no longer be supported.",
                  ),
                  T.current
                );
              },
            });
          });
        var C = y(
            (0, i.useState)({
              containerWidth: f.width,
              containerHeight: f.height,
            }),
            2,
          ),
          N = C[0],
          D = C[1],
          I = (0, i.useCallback)(function (t, e) {
            D(function (n) {
              var r = Math.round(t),
                i = Math.round(e);
              return n.containerWidth === r && n.containerHeight === i
                ? n
                : { containerWidth: r, containerHeight: i };
            });
          }, []);
        (0, i.useEffect)(
          function () {
            var t = function (t) {
              var e,
                n = t[0].contentRect,
                r = n.width,
                i = n.height;
              I(r, i),
                null === (e = _.current) || void 0 === e || e.call(_, r, i);
            };
            S > 0 && (t = a()(t, S, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              n = T.current.getBoundingClientRect(),
              r = n.width,
              i = n.height;
            return (
              I(r, i),
              e.observe(T.current),
              function () {
                e.disconnect();
              }
            );
          },
          [I, S],
        );
        var B = (0, i.useMemo)(
          function () {
            var t = N.containerWidth,
              e = N.containerHeight;
            if (t < 0 || e < 0) return null;
            (0, l.Z)(
              (0, c.hU)(d) || (0, c.hU)(m),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              d,
              m,
            ),
              (0, l.Z)(
                !n || n > 0,
                "The aspect(%s) must be greater than zero.",
                n,
              );
            var r = (0, c.hU)(d) ? t : d,
              o = (0, c.hU)(m) ? e : m;
            n &&
              n > 0 &&
              (r ? (o = r / n) : o && (r = o * n), w && o > w && (o = w)),
              (0, l.Z)(
                r > 0 || o > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                r,
                o,
                d,
                m,
                b,
                x,
                n,
              );
            var a =
              !Array.isArray(O) &&
              (0, u.isElement)(O) &&
              (0, s.Gf)(O.type).endsWith("Chart");
            return i.Children.map(O, function (t) {
              return (0, u.isElement)(t)
                ? (0, i.cloneElement)(
                    t,
                    h(
                      { width: r, height: o },
                      a
                        ? {
                            style: h(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: o,
                                maxWidth: r,
                              },
                              t.props.style,
                            ),
                          }
                        : {},
                    ),
                  )
                : t;
            });
          },
          [n, O, m, w, x, b, N, d],
        );
        return i.createElement(
          "div",
          {
            id: E ? "".concat(E) : void 0,
            className: (0, r.Z)("recharts-responsive-container", A),
            style: h(
              h({}, M),
              {},
              { width: d, height: m, minWidth: b, minHeight: x, maxHeight: w },
            ),
            ref: T,
          },
          B,
        );
      });
    },
    93998: (t, e, n) => {
      "use strict";
      n.d(e, { x: () => R });
      var r = n(47427),
        i = n(38716),
        o = n.n(i),
        a = n(84148),
        u = n(76325),
        c = n(77125),
        l = n(94797),
        s = n(12605);
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
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
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
            if ("string" == typeof t) return h(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return h(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function d(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              t,
              ((i = r.key),
              (o = void 0),
              (o = (function (t, e) {
                if ("object" !== f(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(t, e || "default");
                  if ("object" !== f(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === e ? String : Number)(t);
              })(i, "string")),
              "symbol" === f(o) ? o : String(o)),
              r,
            );
        }
        var i, o;
      }
      var y = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        v = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        m = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
        g = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
        b = {
          cm: 96 / 2.54,
          mm: 96 / 25.4,
          pt: 96 / 72,
          pc: 16,
          in: 96,
          Q: 96 / 101.6,
          px: 1,
        },
        x = Object.keys(b),
        w = "NaN";
      var O = (function () {
        function t(e, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.num = e),
            (this.unit = n),
            (this.num = e),
            (this.unit = n),
            Number.isNaN(e) && (this.unit = ""),
            "" === n || m.test(n) || ((this.num = NaN), (this.unit = "")),
            x.includes(n) &&
              ((this.num = (function (t, e) {
                return t * b[e];
              })(e, n)),
              (this.unit = "px"));
        }
        var e, n, r;
        return (
          (e = t),
          (r = [
            {
              key: "parse",
              value: function (e) {
                var n,
                  r = p(null !== (n = g.exec(e)) && void 0 !== n ? n : [], 3),
                  i = r[1],
                  o = r[2];
                return new t(parseFloat(i), null != o ? o : "");
              },
            },
          ]),
          (n = [
            {
              key: "add",
              value: function (e) {
                return this.unit !== e.unit
                  ? new t(NaN, "")
                  : new t(this.num + e.num, this.unit);
              },
            },
            {
              key: "subtract",
              value: function (e) {
                return this.unit !== e.unit
                  ? new t(NaN, "")
                  : new t(this.num - e.num, this.unit);
              },
            },
            {
              key: "multiply",
              value: function (e) {
                return "" !== this.unit && "" !== e.unit && this.unit !== e.unit
                  ? new t(NaN, "")
                  : new t(this.num * e.num, this.unit || e.unit);
              },
            },
            {
              key: "divide",
              value: function (e) {
                return "" !== this.unit && "" !== e.unit && this.unit !== e.unit
                  ? new t(NaN, "")
                  : new t(this.num / e.num, this.unit || e.unit);
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
          ]) && d(e.prototype, n),
          r && d(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })();
      function j(t) {
        if (t.includes(w)) return w;
        for (var e = t; e.includes("*") || e.includes("/"); ) {
          var n,
            r = p(null !== (n = y.exec(e)) && void 0 !== n ? n : [], 4),
            i = r[1],
            o = r[2],
            a = r[3],
            u = O.parse(null != i ? i : ""),
            c = O.parse(null != a ? a : ""),
            l = "*" === o ? u.multiply(c) : u.divide(c);
          if (l.isNaN()) return w;
          e = e.replace(y, l.toString());
        }
        for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
          var s,
            f = p(null !== (s = v.exec(e)) && void 0 !== s ? s : [], 4),
            h = f[1],
            d = f[2],
            m = f[3],
            g = O.parse(null != h ? h : ""),
            b = O.parse(null != m ? m : ""),
            x = "+" === d ? g.add(b) : g.subtract(b);
          if (x.isNaN()) return w;
          e = e.replace(v, x.toString());
        }
        return e;
      }
      var S = /\(([^()]*)\)/;
      function E(t) {
        var e = t.replace(/\s+/g, "");
        return (
          (e = (function (t) {
            for (var e = t; e.includes("("); ) {
              var n = p(S.exec(e), 2)[1];
              e = e.replace(S, j(n));
            }
            return e;
          })(e)),
          (e = j(e))
        );
      }
      function A(t) {
        var e = (function (t) {
          try {
            return E(t);
          } catch (t) {
            return w;
          }
        })(t.slice(5, -1));
        return e === w ? "" : e;
      }
      var P = [
          "x",
          "y",
          "lineHeight",
          "capHeight",
          "scaleToFit",
          "textAnchor",
          "verticalAnchor",
          "fill",
        ],
        k = ["dx", "dy", "angle", "className", "breakAll"];
      function M() {
        return (
          (M = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          M.apply(this, arguments)
        );
      }
      function T(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function _(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
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
            if ("string" == typeof t) return C(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return C(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function C(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var N = /[ \f\n\r\t\v\u2028\u2029]+/,
        D = function (t) {
          var e = t.children,
            n = t.breakAll,
            r = t.style;
          try {
            var i = [];
            return (
              o()(e) ||
                (i = n ? e.toString().split("") : e.toString().split(N)),
              {
                wordsWithComputedWidth: i.map(function (t) {
                  return { word: t, width: (0, s.xE)(t, r).width };
                }),
                spaceWidth: n ? 0 : (0, s.xE)(" ", r).width,
              }
            );
          } catch (t) {
            return null;
          }
        },
        I = function (t) {
          return [{ words: o()(t) ? [] : t.toString().split(N) }];
        },
        B = function (t) {
          var e = t.width,
            n = t.scaleToFit,
            r = t.children,
            i = t.style,
            o = t.breakAll,
            a = t.maxLines;
          if ((e || n) && !c.x.isSsr) {
            var l = D({ breakAll: o, children: r, style: i });
            return l
              ? (function (t, e, n, r, i) {
                  var o = t.maxLines,
                    a = t.children,
                    c = t.style,
                    l = t.breakAll,
                    s = (0, u.hj)(o),
                    f = a,
                    p = function () {
                      return (
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : []
                      ).reduce(function (t, e) {
                        var o = e.word,
                          a = e.width,
                          u = t[t.length - 1];
                        if (
                          u &&
                          (null == r || i || u.width + a + n < Number(r))
                        )
                          u.words.push(o), (u.width += a + n);
                        else {
                          var c = { words: [o], width: a };
                          t.push(c);
                        }
                        return t;
                      }, []);
                    },
                    h = p(e);
                  if (!s) return h;
                  for (
                    var d,
                      y = function (t) {
                        var e = f.slice(0, t),
                          n = D({
                            breakAll: l,
                            style: c,
                            children: e + "…",
                          }).wordsWithComputedWidth,
                          i = p(n),
                          a =
                            i.length > o ||
                            (function (t) {
                              return t.reduce(function (t, e) {
                                return t.width > e.width ? t : e;
                              });
                            })(i).width > Number(r);
                        return [a, i];
                      },
                      v = 0,
                      m = f.length - 1,
                      g = 0;
                    v <= m && g <= f.length - 1;

                  ) {
                    var b = Math.floor((v + m) / 2),
                      x = _(y(b - 1), 2),
                      w = x[0],
                      O = x[1],
                      j = _(y(b), 1)[0];
                    if (
                      (w || j || (v = b + 1), w && j && (m = b - 1), !w && j)
                    ) {
                      d = O;
                      break;
                    }
                    g++;
                  }
                  return d || h;
                })(
                  { breakAll: o, children: r, maxLines: a, style: i },
                  l.wordsWithComputedWidth,
                  l.spaceWidth,
                  e,
                  n,
                )
              : I(r);
          }
          return I(r);
        },
        L = "#808080",
        R = function (t) {
          var e = t.x,
            n = void 0 === e ? 0 : e,
            i = t.y,
            o = void 0 === i ? 0 : i,
            c = t.lineHeight,
            s = void 0 === c ? "1em" : c,
            f = t.capHeight,
            p = void 0 === f ? "0.71em" : f,
            h = t.scaleToFit,
            d = void 0 !== h && h,
            y = t.textAnchor,
            v = void 0 === y ? "start" : y,
            m = t.verticalAnchor,
            g = void 0 === m ? "end" : m,
            b = t.fill,
            x = void 0 === b ? L : b,
            w = T(t, P),
            O = (0, r.useMemo)(
              function () {
                return B({
                  breakAll: w.breakAll,
                  children: w.children,
                  maxLines: w.maxLines,
                  scaleToFit: d,
                  style: w.style,
                  width: w.width,
                });
              },
              [w.breakAll, w.children, w.maxLines, d, w.style, w.width],
            ),
            j = w.dx,
            S = w.dy,
            E = w.angle,
            _ = w.className,
            C = w.breakAll,
            N = T(w, k);
          if (!(0, u.P2)(n) || !(0, u.P2)(o)) return null;
          var D,
            I = n + ((0, u.hj)(j) ? j : 0),
            R = o + ((0, u.hj)(S) ? S : 0);
          switch (g) {
            case "start":
              D = A("calc(".concat(p, ")"));
              break;
            case "middle":
              D = A(
                "calc("
                  .concat((O.length - 1) / 2, " * -")
                  .concat(s, " + (")
                  .concat(p, " / 2))"),
              );
              break;
            default:
              D = A("calc(".concat(O.length - 1, " * -").concat(s, ")"));
          }
          var z = [];
          if (d) {
            var U = O[0].width,
              F = w.width;
            z.push("scale(".concat(((0, u.hj)(F) ? F / U : 1) / U, ")"));
          }
          return (
            E &&
              z.push("rotate(".concat(E, ", ").concat(I, ", ").concat(R, ")")),
            z.length && (N.transform = z.join(" ")),
            r.createElement(
              "text",
              M({}, (0, l.L6)(N, !0), {
                x: I,
                y: R,
                className: (0, a.Z)("recharts-text", _),
                textAnchor: v,
                fill: x.includes("url") ? L : x,
              }),
              O.map(function (t, e) {
                var n = t.words.join(C ? "" : " ");
                return r.createElement(
                  "tspan",
                  { x: I, dy: 0 === e ? D : s, key: n },
                  n,
                );
              }),
            )
          );
        };
    },
    72236: (t, e, n) => {
      "use strict";
      n.d(e, { u: () => Y });
      var r = n(47427),
        i = n(2045),
        o = n.n(i),
        a = n(38716),
        u = n.n(a),
        c = n(84148),
        l = n(76325);
      function s(t) {
        return (
          (s =
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
          s(t)
        );
      }
      function f(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
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
            if ("string" == typeof t) return p(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return p(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function p(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(n), !0).forEach(function (e) {
                y(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function y(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== s(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== s(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === s(e) ? e : String(e);
          })(e)) in t
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
      function v(t) {
        return Array.isArray(t) && (0, l.P2)(t[0]) && (0, l.P2)(t[1])
          ? t.join(" ~ ")
          : t;
      }
      var m = function (t) {
          var e = t.separator,
            n = void 0 === e ? " : " : e,
            i = t.contentStyle,
            a = void 0 === i ? {} : i,
            s = t.itemStyle,
            p = void 0 === s ? {} : s,
            h = t.labelStyle,
            y = void 0 === h ? {} : h,
            m = t.payload,
            g = t.formatter,
            b = t.itemSorter,
            x = t.wrapperClassName,
            w = t.labelClassName,
            O = t.label,
            j = t.labelFormatter,
            S = d(
              {
                margin: 0,
                padding: 10,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                whiteSpace: "nowrap",
              },
              a,
            ),
            E = d({ margin: 0 }, y),
            A = !u()(O),
            P = A ? O : "",
            k = (0, c.Z)("recharts-default-tooltip", x),
            M = (0, c.Z)("recharts-tooltip-label", w);
          return (
            A && j && null != m && (P = j(O, m)),
            r.createElement(
              "div",
              { className: k, style: S },
              r.createElement(
                "p",
                { className: M, style: E },
                r.isValidElement(P) ? P : "".concat(P),
              ),
              (function () {
                if (m && m.length) {
                  var t = (b ? o()(m, b) : m).map(function (t, e) {
                    if ("none" === t.type) return null;
                    var i = d(
                        {
                          display: "block",
                          paddingTop: 4,
                          paddingBottom: 4,
                          color: t.color || "#000",
                        },
                        p,
                      ),
                      o = t.formatter || g || v,
                      a = t.value,
                      u = t.name,
                      c = a,
                      s = u;
                    if (o && null != c && null != s) {
                      var h = o(a, u, t, e, m);
                      if (Array.isArray(h)) {
                        var y = f(h, 2);
                        (c = y[0]), (s = y[1]);
                      } else c = h;
                    }
                    return r.createElement(
                      "li",
                      {
                        className: "recharts-tooltip-item",
                        key: "tooltip-item-".concat(e),
                        style: i,
                      },
                      (0, l.P2)(s)
                        ? r.createElement(
                            "span",
                            { className: "recharts-tooltip-item-name" },
                            s,
                          )
                        : null,
                      (0, l.P2)(s)
                        ? r.createElement(
                            "span",
                            { className: "recharts-tooltip-item-separator" },
                            n,
                          )
                        : null,
                      r.createElement(
                        "span",
                        { className: "recharts-tooltip-item-value" },
                        c,
                      ),
                      r.createElement(
                        "span",
                        { className: "recharts-tooltip-item-unit" },
                        t.unit || "",
                      ),
                    );
                  });
                  return r.createElement(
                    "ul",
                    {
                      className: "recharts-tooltip-item-list",
                      style: { padding: 0, margin: 0 },
                    },
                    t,
                  );
                }
                return null;
              })(),
            )
          );
        },
        g = n(15819);
      function b(t) {
        return (
          (b =
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
          b(t)
        );
      }
      function x(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== b(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== b(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === b(e) ? e : String(e);
          })(e)) in t
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
      var w = "recharts-tooltip-wrapper",
        O = { visibility: "hidden" };
      function j(t) {
        var e,
          n = t.coordinate,
          r = t.translateX,
          i = t.translateY;
        return (0, c.Z)(
          w,
          (x(
            (e = {}),
            "".concat(w, "-right"),
            (0, l.hj)(r) && n && (0, l.hj)(n.x) && r >= n.x,
          ),
          x(
            e,
            "".concat(w, "-left"),
            (0, l.hj)(r) && n && (0, l.hj)(n.x) && r < n.x,
          ),
          x(
            e,
            "".concat(w, "-bottom"),
            (0, l.hj)(i) && n && (0, l.hj)(n.y) && i >= n.y,
          ),
          x(
            e,
            "".concat(w, "-top"),
            (0, l.hj)(i) && n && (0, l.hj)(n.y) && i < n.y,
          ),
          e),
        );
      }
      function S(t) {
        var e = t.allowEscapeViewBox,
          n = t.coordinate,
          r = t.key,
          i = t.offsetTopLeft,
          o = t.position,
          a = t.reverseDirection,
          u = t.tooltipDimension,
          c = t.viewBox,
          s = t.viewBoxDimension;
        if (o && (0, l.hj)(o[r])) return o[r];
        var f = n[r] - u - i,
          p = n[r] + i;
        return e[r]
          ? a[r]
            ? f
            : p
          : a[r]
            ? f < c[r]
              ? Math.max(p, c[r])
              : Math.max(f, c[r])
            : p + u > c[r] + s
              ? Math.max(f, c[r])
              : Math.max(p, c[r]);
      }
      function E(t) {
        var e,
          n,
          r,
          i = t.allowEscapeViewBox,
          o = t.coordinate,
          a = t.offsetTopLeft,
          u = t.position,
          c = t.reverseDirection,
          l = t.tooltipBox,
          s = t.useTranslate3d,
          f = t.viewBox;
        return (
          (e =
            l.height > 0 && l.width > 0 && o
              ? (function (t) {
                  var e = t.translateX,
                    n = t.translateY,
                    r = t.useTranslate3d;
                  return (0, g.bO)({
                    transform: r
                      ? "translate3d(".concat(e, "px, ").concat(n, "px, 0)")
                      : "translate(".concat(e, "px, ").concat(n, "px)"),
                  });
                })({
                  translateX: (n = S({
                    allowEscapeViewBox: i,
                    coordinate: o,
                    key: "x",
                    offsetTopLeft: a,
                    position: u,
                    reverseDirection: c,
                    tooltipDimension: l.width,
                    viewBox: f,
                    viewBoxDimension: f.width,
                  })),
                  translateY: (r = S({
                    allowEscapeViewBox: i,
                    coordinate: o,
                    key: "y",
                    offsetTopLeft: a,
                    position: u,
                    reverseDirection: c,
                    tooltipDimension: l.height,
                    viewBox: f,
                    viewBoxDimension: f.height,
                  })),
                  useTranslate3d: s,
                })
              : O),
          {
            cssProperties: e,
            cssClasses: j({ translateX: n, translateY: r, coordinate: o }),
          }
        );
      }
      function A(t) {
        return (
          (A =
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
          A(t)
        );
      }
      function P(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? P(Object(n), !0).forEach(function (e) {
                D(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : P(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function M(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, I(r.key), r);
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
          var n,
            r = N(t);
          if (e) {
            var i = N(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === A(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return C(t);
          })(this, n);
        };
      }
      function C(t) {
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
      function D(t, e, n) {
        return (
          (e = I(e)) in t
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
      function I(t) {
        var e = (function (t, e) {
          if ("object" !== A(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== A(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === A(e) ? e : String(e);
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
              e && T(t, e);
          })(a, t);
          var e,
            n,
            i,
            o = _(a);
          function a() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              D(C((t = o.call.apply(o, [this].concat(n)))), "state", {
                dismissed: !1,
                dismissedAtCoordinate: { x: 0, y: 0 },
              }),
              D(C(t), "lastBoundingBox", { width: -1, height: -1 }),
              D(C(t), "handleKeyDown", function (e) {
                var n, r, i, o;
                "Escape" === e.key &&
                  t.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: {
                      x:
                        null !==
                          (n =
                            null === (r = t.props.coordinate) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0,
                      y:
                        null !==
                          (i =
                            null === (o = t.props.coordinate) || void 0 === o
                              ? void 0
                              : o.y) && void 0 !== i
                          ? i
                          : 0,
                    },
                  });
              }),
              t
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: "updateBBox",
                value: function () {
                  if (
                    this.wrapperNode &&
                    this.wrapperNode.getBoundingClientRect
                  ) {
                    var t = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(t.width - this.lastBoundingBox.width) > 1 ||
                      Math.abs(t.height - this.lastBoundingBox.height) > 1) &&
                      ((this.lastBoundingBox.width = t.width),
                      (this.lastBoundingBox.height = t.height));
                  } else
                    (-1 === this.lastBoundingBox.width &&
                      -1 === this.lastBoundingBox.height) ||
                      ((this.lastBoundingBox.width = -1),
                      (this.lastBoundingBox.height = -1));
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
                  var t, e;
                  this.props.active && this.updateBBox(),
                    this.state.dismissed &&
                      (((null === (t = this.props.coordinate) || void 0 === t
                        ? void 0
                        : t.x) === this.state.dismissedAtCoordinate.x &&
                        (null === (e = this.props.coordinate) || void 0 === e
                          ? void 0
                          : e.y) === this.state.dismissedAtCoordinate.y) ||
                        (this.state.dismissed = !1));
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.active,
                    i = e.allowEscapeViewBox,
                    o = e.animationDuration,
                    a = e.animationEasing,
                    u = e.children,
                    c = e.coordinate,
                    l = e.hasPayload,
                    s = e.isAnimationActive,
                    f = e.offset,
                    p = e.position,
                    h = e.reverseDirection,
                    d = e.useTranslate3d,
                    y = e.viewBox,
                    v = e.wrapperStyle,
                    m = E({
                      allowEscapeViewBox: i,
                      coordinate: c,
                      offsetTopLeft: f,
                      position: p,
                      reverseDirection: h,
                      tooltipBox: {
                        height: this.lastBoundingBox.height,
                        width: this.lastBoundingBox.width,
                      },
                      useTranslate3d: d,
                      viewBox: y,
                    }),
                    b = m.cssClasses,
                    x = m.cssProperties,
                    w = k(
                      k(
                        k(
                          {},
                          s &&
                            n &&
                            (0, g.bO)({
                              transition: "transform "
                                .concat(o, "ms ")
                                .concat(a),
                            }),
                        ),
                        x,
                      ),
                      {},
                      {
                        pointerEvents: "none",
                        visibility:
                          !this.state.dismissed && n && l
                            ? "visible"
                            : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      },
                      v,
                    );
                  return r.createElement(
                    "div",
                    {
                      tabIndex: -1,
                      role: "dialog",
                      className: b,
                      style: w,
                      ref: function (e) {
                        t.wrapperNode = e;
                      },
                    },
                    u,
                  );
                },
              },
            ]) && M(e.prototype, n),
            i && M(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(r.PureComponent),
        L = n(77125),
        R = n(60674);
      function z(t) {
        return (
          (z =
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
          z(t)
        );
      }
      function U(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function F(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? U(Object(n), !0).forEach(function (e) {
                H(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : U(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function $(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, G(r.key), r);
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
          var n,
            r = q(t);
          if (e) {
            var i = q(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === z(e) || "function" == typeof e)) return e;
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
          })(this, n);
        };
      }
      function q(t) {
        return (
          (q = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          q(t)
        );
      }
      function H(t, e, n) {
        return (
          (e = G(e)) in t
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
      function G(t) {
        var e = (function (t, e) {
          if ("object" !== z(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== z(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === z(e) ? e : String(e);
      }
      function X(t) {
        return t.dataKey;
      }
      var Y = (function (t) {
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
        })(a, t);
        var e,
          n,
          i,
          o = Z(a);
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
          (n = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.active,
                  n = t.allowEscapeViewBox,
                  i = t.animationDuration,
                  o = t.animationEasing,
                  a = t.content,
                  u = t.coordinate,
                  c = t.filterNull,
                  l = t.isAnimationActive,
                  s = t.offset,
                  f = t.payload,
                  p = t.payloadUniqBy,
                  h = t.position,
                  d = t.reverseDirection,
                  y = t.useTranslate3d,
                  v = t.viewBox,
                  g = t.wrapperStyle,
                  b = null != f ? f : [];
                c &&
                  b.length &&
                  (b = (0, R.z)(
                    f.filter(function (t) {
                      return null != t.value;
                    }),
                    p,
                    X,
                  ));
                var x = b.length > 0;
                return r.createElement(
                  B,
                  {
                    allowEscapeViewBox: n,
                    animationDuration: i,
                    animationEasing: o,
                    isAnimationActive: l,
                    active: e,
                    coordinate: u,
                    hasPayload: x,
                    offset: s,
                    position: h,
                    reverseDirection: d,
                    useTranslate3d: y,
                    viewBox: v,
                    wrapperStyle: g,
                  },
                  (function (t, e) {
                    return r.isValidElement(t)
                      ? r.cloneElement(t, e)
                      : "function" == typeof t
                        ? r.createElement(t, e)
                        : r.createElement(m, e);
                  })(a, F(F({}, this.props), {}, { payload: b })),
                );
              },
            },
          ]) && $(e.prototype, n),
          i && $(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(r.PureComponent);
      H(Y, "displayName", "Tooltip"),
        H(Y, "defaultProps", {
          allowEscapeViewBox: { x: !1, y: !1 },
          animationDuration: 400,
          animationEasing: "ease",
          contentStyle: {},
          coordinate: { x: 0, y: 0 },
          cursor: !0,
          cursorStyle: {},
          filterNull: !0,
          isAnimationActive: !L.x.isSsr,
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
    47430: (t, e, n) => {
      "use strict";
      n.d(e, { m: () => l });
      var r = n(47427),
        i = n(84148),
        o = n(94797),
        a = ["children", "className"];
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          u.apply(this, arguments)
        );
      }
      function c(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var l = r.forwardRef(function (t, e) {
        var n = t.children,
          l = t.className,
          s = c(t, a),
          f = (0, i.Z)("recharts-layer", l);
        return r.createElement(
          "g",
          u({ className: f }, (0, o.L6)(s, !0), { ref: e }),
          n,
        );
      });
    },
    82440: (t, e, n) => {
      "use strict";
      n.d(e, { T: () => l });
      var r = n(47427),
        i = n(84148),
        o = n(94797),
        a = [
          "children",
          "width",
          "height",
          "viewBox",
          "className",
          "style",
          "title",
          "desc",
        ];
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          u.apply(this, arguments)
        );
      }
      function c(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function l(t) {
        var e = t.children,
          n = t.width,
          l = t.height,
          s = t.viewBox,
          f = t.className,
          p = t.style,
          h = t.title,
          d = t.desc,
          y = c(t, a),
          v = s || { width: n, height: l, x: 0, y: 0 },
          m = (0, i.Z)("recharts-surface", f);
        return r.createElement(
          "svg",
          u({}, (0, o.L6)(y, !0, "svg"), {
            className: m,
            width: n,
            height: l,
            style: p,
            viewBox: ""
              .concat(v.x, " ")
              .concat(v.y, " ")
              .concat(v.width, " ")
              .concat(v.height),
          }),
          r.createElement("title", null, h),
          r.createElement("desc", null, d),
          e,
        );
      }
    },
    84223: (t, e, n) => {
      "use strict";
      n.d(e, { H: () => X });
      var r = n(47427);
      function i() {}
      function o(t, e, n) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + e) / 6,
          (t._y0 + 4 * t._y1 + n) / 6,
        );
      }
      function a(t) {
        this._context = t;
      }
      function u(t) {
        this._context = t;
      }
      function c(t) {
        this._context = t;
      }
      (a.prototype = {
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
              o(this, this._x1, this._y1);
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
              o(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        },
      }),
        (u.prototype = {
          areaStart: i,
          areaEnd: i,
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
                o(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        }),
        (c.prototype = {
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
                var n = (this._x0 + 4 * this._x1 + t) / 6,
                  r = (this._y0 + 4 * this._y1 + e) / 6;
                this._line
                  ? this._context.lineTo(n, r)
                  : this._context.moveTo(n, r);
                break;
              case 3:
                this._point = 4;
              default:
                o(this, t, e);
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = e);
          },
        });
      class l {
        constructor(t, e) {
          (this._context = t), (this._x = e);
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
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        }
        point(t, e) {
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
              this._x
                ? this._context.bezierCurveTo(
                    (this._x0 = (this._x0 + t) / 2),
                    this._y0,
                    this._x0,
                    e,
                    t,
                    e,
                  )
                : this._context.bezierCurveTo(
                    this._x0,
                    (this._y0 = (this._y0 + e) / 2),
                    t,
                    this._y0,
                    t,
                    e,
                  );
          }
          (this._x0 = t), (this._y0 = e);
        }
      }
      function s(t) {
        this._context = t;
      }
      function f(t) {
        this._context = t;
      }
      function p(t) {
        return new f(t);
      }
      function h(t) {
        return t < 0 ? -1 : 1;
      }
      function d(t, e, n) {
        var r = t._x1 - t._x0,
          i = e - t._x1,
          o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
          a = (n - t._y1) / (i || (r < 0 && -0)),
          u = (o * i + a * r) / (r + i);
        return (
          (h(o) + h(a)) *
            Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0
        );
      }
      function y(t, e) {
        var n = t._x1 - t._x0;
        return n ? ((3 * (t._y1 - t._y0)) / n - e) / 2 : e;
      }
      function v(t, e, n) {
        var r = t._x0,
          i = t._y0,
          o = t._x1,
          a = t._y1,
          u = (o - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * e, o - u, a - u * n, o, a);
      }
      function m(t) {
        this._context = t;
      }
      function g(t) {
        this._context = new b(t);
      }
      function b(t) {
        this._context = t;
      }
      function x(t) {
        this._context = t;
      }
      function w(t) {
        var e,
          n,
          r = t.length - 1,
          i = new Array(r),
          o = new Array(r),
          a = new Array(r);
        for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e)
          (i[e] = 1), (o[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
        for (
          i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], e = 1;
          e < r;
          ++e
        )
          (n = i[e] / o[e - 1]), (o[e] -= n), (a[e] -= n * a[e - 1]);
        for (i[r - 1] = a[r - 1] / o[r - 1], e = r - 2; e >= 0; --e)
          i[e] = (a[e] - i[e + 1]) / o[e];
        for (o[r - 1] = (t[r] + i[r - 1]) / 2, e = 0; e < r - 1; ++e)
          o[e] = 2 * t[e + 1] - i[e + 1];
        return [i, o];
      }
      function O(t, e) {
        (this._context = t), (this._t = e);
      }
      (s.prototype = {
        areaStart: i,
        areaEnd: i,
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
        (f.prototype = {
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
        (m.prototype = {
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
                v(this, this._t0, y(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, e) {
            var n = NaN;
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
                  (this._point = 3), v(this, y(this, (n = d(this, t, e))), n);
                  break;
                default:
                  v(this, this._t0, (n = d(this, t, e)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e),
                (this._t0 = n);
            }
          },
        }),
        ((g.prototype = Object.create(m.prototype)).point = function (t, e) {
          m.prototype.point.call(this, e, t);
        }),
        (b.prototype = {
          moveTo: function (t, e) {
            this._context.moveTo(e, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, e) {
            this._context.lineTo(e, t);
          },
          bezierCurveTo: function (t, e, n, r, i, o) {
            this._context.bezierCurveTo(e, t, r, n, o, i);
          },
        }),
        (x.prototype = {
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
              n = t.length;
            if (n)
              if (
                (this._line
                  ? this._context.lineTo(t[0], e[0])
                  : this._context.moveTo(t[0], e[0]),
                2 === n)
              )
                this._context.lineTo(t[1], e[1]);
              else
                for (var r = w(t), i = w(e), o = 0, a = 1; a < n; ++o, ++a)
                  this._context.bezierCurveTo(
                    r[0][o],
                    i[0][o],
                    r[1][o],
                    i[1][o],
                    t[a],
                    e[a],
                  );
            (this._line || (0 !== this._line && 1 === n)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, e) {
            this._x.push(+t), this._y.push(+e);
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
                  var n = this._x * (1 - this._t) + t * this._t;
                  this._context.lineTo(n, this._y), this._context.lineTo(n, e);
                }
            }
            (this._x = t), (this._y = e);
          },
        });
      var j = n(70479),
        S = n(22015),
        E = n(79221);
      function A(t) {
        return t[0];
      }
      function P(t) {
        return t[1];
      }
      function k(t, e) {
        var n = (0, S.Z)(!0),
          r = null,
          i = p,
          o = null,
          a = (0, E.d)(u);
        function u(u) {
          var c,
            l,
            s,
            f = (u = (0, j.Z)(u)).length,
            p = !1;
          for (null == r && (o = i((s = a()))), c = 0; c <= f; ++c)
            !(c < f && n((l = u[c]), c, u)) === p &&
              ((p = !p) ? o.lineStart() : o.lineEnd()),
              p && o.point(+t(l, c, u), +e(l, c, u));
          if (s) return (o = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? A : (0, S.Z)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? P : (0, S.Z)(e)),
          (u.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, S.Z)(+e)), u)
              : t;
          }),
          (u.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, S.Z)(+t)), u)
              : e;
          }),
          (u.defined = function (t) {
            return arguments.length
              ? ((n = "function" == typeof t ? t : (0, S.Z)(!!t)), u)
              : n;
          }),
          (u.curve = function (t) {
            return arguments.length ? ((i = t), null != r && (o = i(r)), u) : i;
          }),
          (u.context = function (t) {
            return arguments.length
              ? (null == t ? (r = o = null) : (o = i((r = t))), u)
              : r;
          }),
          u
        );
      }
      function M(t, e, n) {
        var r = null,
          i = (0, S.Z)(!0),
          o = null,
          a = p,
          u = null,
          c = (0, E.d)(l);
        function l(l) {
          var s,
            f,
            p,
            h,
            d,
            y = (l = (0, j.Z)(l)).length,
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
              u.point(r ? +r(h, s, l) : m[s], n ? +n(h, s, l) : g[s]));
          }
          if (d) return (u = null), d + "" || null;
        }
        function s() {
          return k().defined(i).curve(a).context(o);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? A : (0, S.Z)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
                ? (0, S.Z)(0)
                : (0, S.Z)(+e)),
          (n = "function" == typeof n ? n : void 0 === n ? P : (0, S.Z)(+n)),
          (l.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, S.Z)(+e)), (r = null), l)
              : t;
          }),
          (l.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, S.Z)(+e)), l)
              : t;
          }),
          (l.x1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, S.Z)(+t)),
                l)
              : r;
          }),
          (l.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, S.Z)(+t)), (n = null), l)
              : e;
          }),
          (l.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, S.Z)(+t)), l)
              : e;
          }),
          (l.y1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, S.Z)(+t)),
                l)
              : n;
          }),
          (l.lineX0 = l.lineY0 =
            function () {
              return s().x(t).y(e);
            }),
          (l.lineY1 = function () {
            return s().x(t).y(n);
          }),
          (l.lineX1 = function () {
            return s().x(r).y(e);
          }),
          (l.defined = function (t) {
            return arguments.length
              ? ((i = "function" == typeof t ? t : (0, S.Z)(!!t)), l)
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
      var T = n(70758),
        _ = n.n(T),
        C = n(8889),
        N = n.n(C),
        D = n(84148),
        I = n(81156),
        B = n(94797),
        L = n(76325);
      function R(t) {
        return (
          (R =
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
          R(t)
        );
      }
      function z() {
        return (
          (z = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          z.apply(this, arguments)
        );
      }
      function U(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function F(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? U(Object(n), !0).forEach(function (e) {
                $(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : U(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function $(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== R(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== R(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === R(e) ? e : String(e);
          })(e)) in t
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
      var W = {
          curveBasisClosed: function (t) {
            return new u(t);
          },
          curveBasisOpen: function (t) {
            return new c(t);
          },
          curveBasis: function (t) {
            return new a(t);
          },
          curveBumpX: function (t) {
            return new l(t, !0);
          },
          curveBumpY: function (t) {
            return new l(t, !1);
          },
          curveLinearClosed: function (t) {
            return new s(t);
          },
          curveLinear: p,
          curveMonotoneX: function (t) {
            return new m(t);
          },
          curveMonotoneY: function (t) {
            return new g(t);
          },
          curveNatural: function (t) {
            return new x(t);
          },
          curveStep: function (t) {
            return new O(t, 0.5);
          },
          curveStepAfter: function (t) {
            return new O(t, 1);
          },
          curveStepBefore: function (t) {
            return new O(t, 0);
          },
        },
        Z = function (t) {
          return t.x === +t.x && t.y === +t.y;
        },
        q = function (t) {
          return t.x;
        },
        H = function (t) {
          return t.y;
        },
        G = function (t) {
          var e,
            n = t.type,
            r = void 0 === n ? "linear" : n,
            i = t.points,
            o = void 0 === i ? [] : i,
            a = t.baseLine,
            u = t.layout,
            c = t.connectNulls,
            l = void 0 !== c && c,
            s = (function (t, e) {
              if (N()(t)) return t;
              var n = "curve".concat(_()(t));
              return ("curveMonotone" !== n && "curveBump" !== n) || !e
                ? W[n] || p
                : W["".concat(n).concat("vertical" === e ? "Y" : "X")];
            })(r, u),
            f = l
              ? o.filter(function (t) {
                  return Z(t);
                })
              : o;
          if (Array.isArray(a)) {
            var h = l
                ? a.filter(function (t) {
                    return Z(t);
                  })
                : a,
              d = f.map(function (t, e) {
                return F(F({}, t), {}, { base: h[e] });
              });
            return (
              (e =
                "vertical" === u
                  ? M()
                      .y(H)
                      .x1(q)
                      .x0(function (t) {
                        return t.base.x;
                      })
                  : M()
                      .x(q)
                      .y1(H)
                      .y0(function (t) {
                        return t.base.y;
                      }))
                .defined(Z)
                .curve(s),
              e(d)
            );
          }
          return (
            (e =
              "vertical" === u && (0, L.hj)(a)
                ? M().y(H).x1(q).x0(a)
                : (0, L.hj)(a)
                  ? M().x(q).y1(H).y0(a)
                  : k().x(q).y(H))
              .defined(Z)
              .curve(s),
            e(f)
          );
        },
        X = function (t) {
          var e = t.className,
            n = t.points,
            i = t.path,
            o = t.pathRef;
          if (!((n && n.length) || i)) return null;
          var a = n && n.length ? G(t) : i;
          return r.createElement(
            "path",
            z({}, (0, B.L6)(t), (0, I.Ym)(t), {
              className: (0, D.Z)("recharts-curve", e),
              d: a,
              ref: o,
            }),
          );
        };
    },
    14166: (t, e, n) => {
      "use strict";
      n.d(e, { o: () => c });
      var r = n(47427),
        i = n(84148),
        o = n(81156),
        a = n(94797);
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          u.apply(this, arguments)
        );
      }
      var c = function (t) {
        var e = t.cx,
          n = t.cy,
          c = t.r,
          l = t.className,
          s = (0, i.Z)("recharts-dot", l);
        return e === +e && n === +n && c === +c
          ? r.createElement(
              "circle",
              u({}, (0, a.L6)(t), (0, o.Ym)(t), {
                className: s,
                cx: e,
                cy: n,
                r: c,
              }),
            )
          : null;
      };
    },
    83821: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => m, X: () => y });
      var r = n(47427),
        i = n(84148),
        o = n(15819),
        a = n(94797);
      function u(t) {
        return (
          (u =
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
          u(t)
        );
      }
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          c.apply(this, arguments)
        );
      }
      function l(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
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
            if ("string" == typeof t) return s(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return s(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function f(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(n), !0).forEach(function (e) {
                h(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function h(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== u(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== u(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === u(e) ? e : String(e);
          })(e)) in t
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
      var d = function (t, e, n, r, i) {
          var o,
            a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
            u = r >= 0 ? 1 : -1,
            c = n >= 0 ? 1 : -1,
            l = (r >= 0 && n >= 0) || (r < 0 && n < 0) ? 1 : 0;
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
              (o += "L ".concat(t + n - c * s[1], ",").concat(e)),
              s[1] > 0 &&
                (o += "A "
                  .concat(s[1], ",")
                  .concat(s[1], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + n, ",")
                  .concat(e + u * s[1])),
              (o += "L ".concat(t + n, ",").concat(e + r - u * s[2])),
              s[2] > 0 &&
                (o += "A "
                  .concat(s[2], ",")
                  .concat(s[2], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + n - c * s[2], ",")
                  .concat(e + r)),
              (o += "L ".concat(t + c * s[3], ",").concat(e + r)),
              s[3] > 0 &&
                (o += "A "
                  .concat(s[3], ",")
                  .concat(s[3], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t, ",")
                  .concat(e + r - u * s[3])),
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
              .concat(t + n - c * p, ",")
              .concat(e, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + n, ",")
              .concat(e + u * p, "\n            L ")
              .concat(t + n, ",")
              .concat(e + r - u * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + n - c * p, ",")
              .concat(e + r, "\n            L ")
              .concat(t + c * p, ",")
              .concat(e + r, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t, ",")
              .concat(e + r - u * p, " Z");
          } else
            o = "M "
              .concat(t, ",")
              .concat(e, " h ")
              .concat(n, " v ")
              .concat(r, " h ")
              .concat(-n, " Z");
          return o;
        },
        y = function (t, e) {
          if (!t || !e) return !1;
          var n = t.x,
            r = t.y,
            i = e.x,
            o = e.y,
            a = e.width,
            u = e.height;
          if (Math.abs(a) > 0 && Math.abs(u) > 0) {
            var c = Math.min(i, i + a),
              l = Math.max(i, i + a),
              s = Math.min(o, o + u),
              f = Math.max(o, o + u);
            return n >= c && n <= l && r >= s && r <= f;
          }
          return !1;
        },
        v = {
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
        m = function (t) {
          var e = p(p({}, v), t),
            n = (0, r.useRef)(),
            u = l((0, r.useState)(-1), 2),
            s = u[0],
            f = u[1];
          (0, r.useEffect)(function () {
            if (n.current && n.current.getTotalLength)
              try {
                var t = n.current.getTotalLength();
                t && f(t);
              } catch (t) {}
          }, []);
          var h = e.x,
            y = e.y,
            m = e.width,
            g = e.height,
            b = e.radius,
            x = e.className,
            w = e.animationEasing,
            O = e.animationDuration,
            j = e.animationBegin,
            S = e.isAnimationActive,
            E = e.isUpdateAnimationActive;
          if (
            h !== +h ||
            y !== +y ||
            m !== +m ||
            g !== +g ||
            0 === m ||
            0 === g
          )
            return null;
          var A = (0, i.Z)("recharts-rectangle", x);
          return E
            ? r.createElement(
                o.ZP,
                {
                  canBegin: s > 0,
                  from: { width: m, height: g, x: h, y },
                  to: { width: m, height: g, x: h, y },
                  duration: O,
                  animationEasing: w,
                  isActive: E,
                },
                function (t) {
                  var i = t.width,
                    u = t.height,
                    l = t.x,
                    f = t.y;
                  return r.createElement(
                    o.ZP,
                    {
                      canBegin: s > 0,
                      from: "0px ".concat(-1 === s ? 1 : s, "px"),
                      to: "".concat(s, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: j,
                      duration: O,
                      isActive: S,
                      easing: w,
                    },
                    r.createElement(
                      "path",
                      c({}, (0, a.L6)(e, !0), {
                        className: A,
                        d: d(l, f, i, u, b),
                        ref: n,
                      }),
                    ),
                  );
                },
              )
            : r.createElement(
                "path",
                c({}, (0, a.L6)(e, !0), { className: A, d: d(h, y, m, g, b) }),
              );
        };
    },
    55287: (t, e, n) => {
      "use strict";
      n.d(e, { L: () => v });
      var r = n(47427),
        i = n(84148),
        o = n(94797),
        a = n(53460),
        u = n(76325);
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
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          l.apply(this, arguments)
        );
      }
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                p(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function p(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== c(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== c(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === c(e) ? e : String(e);
          })(e)) in t
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
      var h = function (t) {
          var e = t.cx,
            n = t.cy,
            r = t.radius,
            i = t.angle,
            o = t.sign,
            u = t.isExternal,
            c = t.cornerRadius,
            l = t.cornerIsExternal,
            s = c * (u ? 1 : -1) + r,
            f = Math.asin(c / s) / a.Wk,
            p = l ? i : i + o * f,
            h = l ? i - o * f : i;
          return {
            center: (0, a.op)(e, n, s, p),
            circleTangency: (0, a.op)(e, n, r, p),
            lineTangency: (0, a.op)(e, n, s * Math.cos(f * a.Wk), h),
            theta: f,
          };
        },
        d = function (t) {
          var e = t.cx,
            n = t.cy,
            r = t.innerRadius,
            i = t.outerRadius,
            o = t.startAngle,
            c = (function (t, e) {
              return (0, u.uY)(e - t) * Math.min(Math.abs(e - t), 359.999);
            })(o, t.endAngle),
            l = o + c,
            s = (0, a.op)(e, n, i, o),
            f = (0, a.op)(e, n, i, l),
            p = "M "
              .concat(s.x, ",")
              .concat(s.y, "\n    A ")
              .concat(i, ",")
              .concat(i, ",0,\n    ")
              .concat(+(Math.abs(c) > 180), ",")
              .concat(+(o > l), ",\n    ")
              .concat(f.x, ",")
              .concat(f.y, "\n  ");
          if (r > 0) {
            var h = (0, a.op)(e, n, r, o),
              d = (0, a.op)(e, n, r, l);
            p += "L "
              .concat(d.x, ",")
              .concat(d.y, "\n            A ")
              .concat(r, ",")
              .concat(r, ",0,\n            ")
              .concat(+(Math.abs(c) > 180), ",")
              .concat(+(o <= l), ",\n            ")
              .concat(h.x, ",")
              .concat(h.y, " Z");
          } else p += "L ".concat(e, ",").concat(n, " Z");
          return p;
        },
        y = {
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
        v = function (t) {
          var e = f(f({}, y), t),
            n = e.cx,
            a = e.cy,
            c = e.innerRadius,
            s = e.outerRadius,
            p = e.cornerRadius,
            v = e.forceCornerRadius,
            m = e.cornerIsExternal,
            g = e.startAngle,
            b = e.endAngle,
            x = e.className;
          if (s < c || g === b) return null;
          var w,
            O = (0, i.Z)("recharts-sector", x),
            j = s - c,
            S = (0, u.h1)(p, j, 0, !0);
          return (
            (w =
              S > 0 && Math.abs(g - b) < 360
                ? (function (t) {
                    var e = t.cx,
                      n = t.cy,
                      r = t.innerRadius,
                      i = t.outerRadius,
                      o = t.cornerRadius,
                      a = t.forceCornerRadius,
                      c = t.cornerIsExternal,
                      l = t.startAngle,
                      s = t.endAngle,
                      f = (0, u.uY)(s - l),
                      p = h({
                        cx: e,
                        cy: n,
                        radius: i,
                        angle: l,
                        sign: f,
                        cornerRadius: o,
                        cornerIsExternal: c,
                      }),
                      y = p.circleTangency,
                      v = p.lineTangency,
                      m = p.theta,
                      g = h({
                        cx: e,
                        cy: n,
                        radius: i,
                        angle: s,
                        sign: -f,
                        cornerRadius: o,
                        cornerIsExternal: c,
                      }),
                      b = g.circleTangency,
                      x = g.lineTangency,
                      w = g.theta,
                      O = c ? Math.abs(l - s) : Math.abs(l - s) - m - w;
                    if (O < 0)
                      return a
                        ? "M "
                            .concat(v.x, ",")
                            .concat(v.y, "\n        a")
                            .concat(o, ",")
                            .concat(o, ",0,0,1,")
                            .concat(2 * o, ",0\n        a")
                            .concat(o, ",")
                            .concat(o, ",0,0,1,")
                            .concat(2 * -o, ",0\n      ")
                        : d({
                            cx: e,
                            cy: n,
                            innerRadius: r,
                            outerRadius: i,
                            startAngle: l,
                            endAngle: s,
                          });
                    var j = "M "
                      .concat(v.x, ",")
                      .concat(v.y, "\n    A")
                      .concat(o, ",")
                      .concat(o, ",0,0,")
                      .concat(+(f < 0), ",")
                      .concat(y.x, ",")
                      .concat(y.y, "\n    A")
                      .concat(i, ",")
                      .concat(i, ",0,")
                      .concat(+(O > 180), ",")
                      .concat(+(f < 0), ",")
                      .concat(b.x, ",")
                      .concat(b.y, "\n    A")
                      .concat(o, ",")
                      .concat(o, ",0,0,")
                      .concat(+(f < 0), ",")
                      .concat(x.x, ",")
                      .concat(x.y, "\n  ");
                    if (r > 0) {
                      var S = h({
                          cx: e,
                          cy: n,
                          radius: r,
                          angle: l,
                          sign: f,
                          isExternal: !0,
                          cornerRadius: o,
                          cornerIsExternal: c,
                        }),
                        E = S.circleTangency,
                        A = S.lineTangency,
                        P = S.theta,
                        k = h({
                          cx: e,
                          cy: n,
                          radius: r,
                          angle: s,
                          sign: -f,
                          isExternal: !0,
                          cornerRadius: o,
                          cornerIsExternal: c,
                        }),
                        M = k.circleTangency,
                        T = k.lineTangency,
                        _ = k.theta,
                        C = c ? Math.abs(l - s) : Math.abs(l - s) - P - _;
                      if (C < 0 && 0 === o)
                        return "".concat(j, "L").concat(e, ",").concat(n, "Z");
                      j += "L"
                        .concat(T.x, ",")
                        .concat(T.y, "\n      A")
                        .concat(o, ",")
                        .concat(o, ",0,0,")
                        .concat(+(f < 0), ",")
                        .concat(M.x, ",")
                        .concat(M.y, "\n      A")
                        .concat(r, ",")
                        .concat(r, ",0,")
                        .concat(+(C > 180), ",")
                        .concat(+(f > 0), ",")
                        .concat(E.x, ",")
                        .concat(E.y, "\n      A")
                        .concat(o, ",")
                        .concat(o, ",0,0,")
                        .concat(+(f < 0), ",")
                        .concat(A.x, ",")
                        .concat(A.y, "Z");
                    } else j += "L".concat(e, ",").concat(n, "Z");
                    return j;
                  })({
                    cx: n,
                    cy: a,
                    innerRadius: c,
                    outerRadius: s,
                    cornerRadius: Math.min(S, j / 2),
                    forceCornerRadius: v,
                    cornerIsExternal: m,
                    startAngle: g,
                    endAngle: b,
                  })
                : d({
                    cx: n,
                    cy: a,
                    innerRadius: c,
                    outerRadius: s,
                    startAngle: g,
                    endAngle: b,
                  })),
            r.createElement(
              "path",
              l({}, (0, o.L6)(e, !0), { className: O, d: w, role: "img" }),
            )
          );
        };
    },
    58054: (t, e, n) => {
      "use strict";
      n.d(e, { v: () => F });
      var r = n(47427),
        i = n(70758),
        o = n.n(i);
      Math.abs, Math.atan2;
      const a = Math.cos,
        u = (Math.max, Math.min, Math.sin),
        c = Math.sqrt,
        l = Math.PI,
        s = 2 * l;
      const f = {
          draw(t, e) {
            const n = c(e / l);
            t.moveTo(n, 0), t.arc(0, 0, n, 0, s);
          },
        },
        p = {
          draw(t, e) {
            const n = c(e / 5) / 2;
            t.moveTo(-3 * n, -n),
              t.lineTo(-n, -n),
              t.lineTo(-n, -3 * n),
              t.lineTo(n, -3 * n),
              t.lineTo(n, -n),
              t.lineTo(3 * n, -n),
              t.lineTo(3 * n, n),
              t.lineTo(n, n),
              t.lineTo(n, 3 * n),
              t.lineTo(-n, 3 * n),
              t.lineTo(-n, n),
              t.lineTo(-3 * n, n),
              t.closePath();
          },
        },
        h = c(1 / 3),
        d = 2 * h,
        y = {
          draw(t, e) {
            const n = c(e / d),
              r = n * h;
            t.moveTo(0, -n),
              t.lineTo(r, 0),
              t.lineTo(0, n),
              t.lineTo(-r, 0),
              t.closePath();
          },
        },
        v = {
          draw(t, e) {
            const n = c(e),
              r = -n / 2;
            t.rect(r, r, n, n);
          },
        },
        m = u(l / 10) / u((7 * l) / 10),
        g = u(s / 10) * m,
        b = -a(s / 10) * m,
        x = {
          draw(t, e) {
            const n = c(0.8908130915292852 * e),
              r = g * n,
              i = b * n;
            t.moveTo(0, -n), t.lineTo(r, i);
            for (let e = 1; e < 5; ++e) {
              const o = (s * e) / 5,
                c = a(o),
                l = u(o);
              t.lineTo(l * n, -c * n), t.lineTo(c * r - l * i, l * r + c * i);
            }
            t.closePath();
          },
        },
        w = c(3),
        O = {
          draw(t, e) {
            const n = -c(e / (3 * w));
            t.moveTo(0, 2 * n),
              t.lineTo(-w * n, -n),
              t.lineTo(w * n, -n),
              t.closePath();
          },
        },
        j = -0.5,
        S = c(3) / 2,
        E = 1 / c(12),
        A = 3 * (E / 2 + 1),
        P = {
          draw(t, e) {
            const n = c(e / A),
              r = n / 2,
              i = n * E,
              o = r,
              a = n * E + n,
              u = -o,
              l = a;
            t.moveTo(r, i),
              t.lineTo(o, a),
              t.lineTo(u, l),
              t.lineTo(j * r - S * i, S * r + j * i),
              t.lineTo(j * o - S * a, S * o + j * a),
              t.lineTo(j * u - S * l, S * u + j * l),
              t.lineTo(j * r + S * i, j * i - S * r),
              t.lineTo(j * o + S * a, j * a - S * o),
              t.lineTo(j * u + S * l, j * l - S * u),
              t.closePath();
          },
        };
      var k = n(22015),
        M = n(79221);
      c(3), c(3);
      var T = n(84148),
        _ = n(94797);
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
      var N = ["type", "size", "sizeType"];
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          D.apply(this, arguments)
        );
      }
      function I(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function B(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? I(Object(n), !0).forEach(function (e) {
                L(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : I(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function L(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== C(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== C(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === C(e) ? e : String(e);
          })(e)) in t
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
      function R(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var z = {
          symbolCircle: f,
          symbolCross: p,
          symbolDiamond: y,
          symbolSquare: v,
          symbolStar: x,
          symbolTriangle: O,
          symbolWye: P,
        },
        U = Math.PI / 180,
        F = function (t) {
          var e,
            n,
            i = t.type,
            a = void 0 === i ? "circle" : i,
            u = t.size,
            c = void 0 === u ? 64 : u,
            l = t.sizeType,
            s = void 0 === l ? "area" : l,
            p = B(B({}, R(t, N)), {}, { type: a, size: c, sizeType: s }),
            h = p.className,
            d = p.cx,
            y = p.cy,
            v = (0, _.L6)(p, !0);
          return d === +d && y === +y && c === +c
            ? r.createElement(
                "path",
                D({}, v, {
                  className: (0, T.Z)("recharts-symbols", h),
                  transform: "translate(".concat(d, ", ").concat(y, ")"),
                  d:
                    ((e = (function (t) {
                      var e = "symbol".concat(o()(t));
                      return z[e] || f;
                    })(a)),
                    (n = (function (t, e) {
                      let n = null,
                        r = (0, M.d)(i);
                      function i() {
                        let i;
                        if (
                          (n || (n = i = r()),
                          t
                            .apply(this, arguments)
                            .draw(n, +e.apply(this, arguments)),
                          i)
                        )
                          return (n = null), i + "" || null;
                      }
                      return (
                        (t = "function" == typeof t ? t : (0, k.Z)(t || f)),
                        (e =
                          "function" == typeof e
                            ? e
                            : (0, k.Z)(void 0 === e ? 64 : +e)),
                        (i.type = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : (0, k.Z)(e)),
                              i)
                            : t;
                        }),
                        (i.size = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : (0, k.Z)(+t)),
                              i)
                            : e;
                        }),
                        (i.context = function (t) {
                          return arguments.length
                            ? ((n = null == t ? null : t), i)
                            : n;
                        }),
                        i
                      );
                    })()
                      .type(e)
                      .size(
                        (function (t, e, n) {
                          if ("area" === e) return t;
                          switch (n) {
                            case "cross":
                              return (5 * t * t) / 9;
                            case "diamond":
                              return (0.5 * t * t) / Math.sqrt(3);
                            case "square":
                              return t * t;
                            case "star":
                              var r = 18 * U;
                              return (
                                1.25 *
                                t *
                                t *
                                (Math.tan(r) -
                                  Math.tan(2 * r) * Math.pow(Math.tan(r), 2))
                              );
                            case "triangle":
                              return (Math.sqrt(3) * t * t) / 4;
                            case "wye":
                              return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
                            default:
                              return (Math.PI * t * t) / 4;
                          }
                        })(c, s, a),
                      )),
                    n()),
                }),
              )
            : null;
        };
      F.registerSymbol = function (t, e) {
        z["symbol".concat(o()(t))] = e;
      };
    },
    37350: (t, e, n) => {
      "use strict";
      n.d(e, {
        bn: () => L,
        a3: () => Z,
        lT: () => R,
        V$: () => z,
        w7: () => U,
      });
      var r = n(47427),
        i = n(8889),
        o = n.n(i),
        a = n(38655),
        u = n.n(a),
        c = n(62588),
        l = n.n(c),
        s = n(49198),
        f = n.n(s),
        p = n(83821),
        h = n(84148),
        d = n(15819),
        y = n(94797);
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
      function m() {
        return (
          (m = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          m.apply(this, arguments)
        );
      }
      function g(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
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
            if ("string" == typeof t) return b(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return b(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function x(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(n), !0).forEach(function (e) {
                O(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : x(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function O(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== v(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== v(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === v(e) ? e : String(e);
          })(e)) in t
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
      var j = function (t, e, n, r, i) {
          var o,
            a = n - r;
          return (
            (o = "M ".concat(t, ",").concat(e)),
            (o += "L ".concat(t + n, ",").concat(e)),
            (o += "L ".concat(t + n - a / 2, ",").concat(e + i)),
            (o += "L ".concat(t + n - a / 2 - r, ",").concat(e + i)),
            (o += "L ".concat(t, ",").concat(e, " Z"))
          );
        },
        S = {
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
        E = function (t) {
          var e = w(w({}, S), t),
            n = (0, r.useRef)(),
            i = g((0, r.useState)(-1), 2),
            o = i[0],
            a = i[1];
          (0, r.useEffect)(function () {
            if (n.current && n.current.getTotalLength)
              try {
                var t = n.current.getTotalLength();
                t && a(t);
              } catch (t) {}
          }, []);
          var u = e.x,
            c = e.y,
            l = e.upperWidth,
            s = e.lowerWidth,
            f = e.height,
            p = e.className,
            v = e.animationEasing,
            b = e.animationDuration,
            x = e.animationBegin,
            O = e.isUpdateAnimationActive;
          if (
            u !== +u ||
            c !== +c ||
            l !== +l ||
            s !== +s ||
            f !== +f ||
            (0 === l && 0 === s) ||
            0 === f
          )
            return null;
          var E = (0, h.Z)("recharts-trapezoid", p);
          return O
            ? r.createElement(
                d.ZP,
                {
                  canBegin: o > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: f, x: u, y: c },
                  to: { upperWidth: l, lowerWidth: s, height: f, x: u, y: c },
                  duration: b,
                  animationEasing: v,
                  isActive: O,
                },
                function (t) {
                  var i = t.upperWidth,
                    a = t.lowerWidth,
                    u = t.height,
                    c = t.x,
                    l = t.y;
                  return r.createElement(
                    d.ZP,
                    {
                      canBegin: o > 0,
                      from: "0px ".concat(-1 === o ? 1 : o, "px"),
                      to: "".concat(o, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: x,
                      duration: b,
                      easing: v,
                    },
                    r.createElement(
                      "path",
                      m({}, (0, y.L6)(e, !0), {
                        className: E,
                        d: j(c, l, i, a, u),
                        ref: n,
                      }),
                    ),
                  );
                },
              )
            : r.createElement(
                "g",
                null,
                r.createElement(
                  "path",
                  m({}, (0, y.L6)(e, !0), {
                    className: E,
                    d: j(u, c, l, s, f),
                  }),
                ),
              );
        },
        A = n(55287),
        P = n(47430),
        k = n(58054),
        M = [
          "option",
          "shapeType",
          "propTransformer",
          "activeClassName",
          "isActive",
        ];
      function T(t) {
        return (
          (T =
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
          T(t)
        );
      }
      function _(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function C(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function N(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? C(Object(n), !0).forEach(function (e) {
                D(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : C(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function D(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== T(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== T(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === T(e) ? e : String(e);
          })(e)) in t
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
      function I(t, e) {
        return N(N({}, e), t);
      }
      function B(t) {
        var e = t.shapeType,
          n = t.elementProps;
        switch (e) {
          case "rectangle":
            return r.createElement(p.A, n);
          case "trapezoid":
            return r.createElement(E, n);
          case "sector":
            return r.createElement(A.L, n);
          case "symbols":
            if (
              (function (t, e) {
                return "symbols" === t;
              })(e)
            )
              return r.createElement(k.v, n);
            break;
          default:
            return null;
        }
      }
      function L(t) {
        var e,
          n = t.option,
          i = t.shapeType,
          a = t.propTransformer,
          c = void 0 === a ? I : a,
          s = t.activeClassName,
          f = void 0 === s ? "recharts-active-shape" : s,
          p = t.isActive,
          h = _(t, M);
        if ((0, r.isValidElement)(n))
          e = (0, r.cloneElement)(
            n,
            N(
              N({}, h),
              (function (t) {
                return (0, r.isValidElement)(t) ? t.props : t;
              })(n),
            ),
          );
        else if (o()(n)) e = n(h);
        else if (u()(n) && !l()(n)) {
          var d = c(n, h);
          e = r.createElement(B, { shapeType: i, elementProps: d });
        } else {
          var y = h;
          e = r.createElement(B, { shapeType: i, elementProps: y });
        }
        return p ? r.createElement(P.m, { className: f }, e) : e;
      }
      function R(t, e) {
        return null != e && "trapezoids" in t.props;
      }
      function z(t, e) {
        return null != e && "sectors" in t.props;
      }
      function U(t, e) {
        return null != e && "points" in t.props;
      }
      function F(t, e) {
        var n,
          r,
          i =
            t.x ===
              (null == e || null === (n = e.labelViewBox) || void 0 === n
                ? void 0
                : n.x) || t.x === e.x,
          o =
            t.y ===
              (null == e || null === (r = e.labelViewBox) || void 0 === r
                ? void 0
                : r.y) || t.y === e.y;
        return i && o;
      }
      function $(t, e) {
        var n = t.endAngle === e.endAngle,
          r = t.startAngle === e.startAngle;
        return n && r;
      }
      function W(t, e) {
        var n = t.x === e.x,
          r = t.y === e.y,
          i = t.z === e.z;
        return n && r && i;
      }
      function Z(t) {
        var e = t.activeTooltipItem,
          n = t.graphicalItem,
          r = t.itemData,
          i = (function (t, e) {
            var n;
            return (
              R(t, e)
                ? (n = "trapezoids")
                : z(t, e)
                  ? (n = "sectors")
                  : U(t, e) && (n = "points"),
              n
            );
          })(n, e),
          o = (function (t, e) {
            var n, r;
            return R(t, e)
              ? null === (n = e.tooltipPayload) ||
                void 0 === n ||
                null === (n = n[0]) ||
                void 0 === n ||
                null === (n = n.payload) ||
                void 0 === n
                ? void 0
                : n.payload
              : z(t, e)
                ? null === (r = e.tooltipPayload) ||
                  void 0 === r ||
                  null === (r = r[0]) ||
                  void 0 === r ||
                  null === (r = r.payload) ||
                  void 0 === r
                  ? void 0
                  : r.payload
                : U(t, e)
                  ? e.payload
                  : {};
          })(n, e),
          a = r.filter(function (t, r) {
            var a = f()(o, t),
              u = n.props[i].filter(function (t) {
                var r = (function (t, e) {
                  var n;
                  return (
                    R(t, e) ? (n = F) : z(t, e) ? (n = $) : U(t, e) && (n = W),
                    n
                  );
                })(n, e);
                return r(t, e);
              }),
              c = n.props[i].indexOf(u[u.length - 1]);
            return a && r === c;
          });
        return r.indexOf(a[a.length - 1]);
      }
    },
    52871: (t, e, n) => {
      "use strict";
      n.d(e, {
        Ky: () => w,
        O1: () => g,
        _b: () => b,
        t9: () => m,
        xE: () => O,
      });
      var r = n(11217),
        i = n.n(r),
        o = n(55084),
        a = n.n(o),
        u = n(70416),
        c = n(94797),
        l = n(76325),
        s = n(28531);
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
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, v(r.key), r);
        }
      }
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(n), !0).forEach(function (e) {
                y(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function y(t, e, n) {
        return (
          (e = v(e)) in t
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
      function v(t) {
        var e = (function (t, e) {
          if ("object" !== f(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== f(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === f(e) ? e : String(e);
      }
      var m = function (t, e, n, r, i) {
          var o = t.width,
            a = t.height,
            f = t.layout,
            p = t.children,
            h = Object.keys(e),
            v = {
              left: n.left,
              leftMirror: n.left,
              right: o - n.right,
              rightMirror: o - n.right,
              top: n.top,
              topMirror: n.top,
              bottom: a - n.bottom,
              bottomMirror: a - n.bottom,
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
              j = void 0 === O ? {} : O,
              S = b.mirror,
              E = b.reversed,
              A = "".concat(x).concat(S ? "Mirror" : "");
            if (
              "number" === b.type &&
              ("gap" === b.padding || "no-gap" === b.padding)
            ) {
              var P = w[1] - w[0],
                k = 1 / 0,
                M = b.categoricalDomain.sort();
              M.forEach(function (t, e) {
                e > 0 && (k = Math.min((t || 0) - (M[e - 1] || 0), k));
              });
              var T = k / P,
                _ = "vertical" === b.layout ? n.height : n.width;
              if (
                ("gap" === b.padding && (c = (T * _) / 2),
                "no-gap" === b.padding)
              ) {
                var C = (0, l.h1)(t.barCategoryGap, T * _),
                  N = (T * _) / 2;
                c = N - C - ((N - C) / _) * C;
              }
            }
            (s =
              "xAxis" === r
                ? [
                    n.left + (j.left || 0) + (c || 0),
                    n.left + n.width - (j.right || 0) - (c || 0),
                  ]
                : "yAxis" === r
                  ? "horizontal" === f
                    ? [n.top + n.height - (j.bottom || 0), n.top + (j.top || 0)]
                    : [
                        n.top + (j.top || 0) + (c || 0),
                        n.top + n.height - (j.bottom || 0) - (c || 0),
                      ]
                  : b.range),
              E && (s = [s[1], s[0]]);
            var D = (0, u.Hq)(b, i, m),
              I = D.scale,
              B = D.realScaleType;
            I.domain(w).range(s), (0, u.zF)(I);
            var L = (0, u.g$)(I, d(d({}, b), {}, { realScaleType: B }));
            "xAxis" === r
              ? ((g = ("top" === x && !S) || ("bottom" === x && S)),
                (p = n.left),
                (h = v[A] - g * b.height))
              : "yAxis" === r &&
                ((g = ("left" === x && !S) || ("right" === x && S)),
                (p = v[A] - g * b.width),
                (h = n.top));
            var R = d(
              d(d({}, b), L),
              {},
              {
                realScaleType: B,
                x: p,
                y: h,
                scale: I,
                width: "xAxis" === r ? n.width : b.width,
                height: "yAxis" === r ? n.height : b.height,
              },
            );
            return (
              (R.bandSize = (0, u.zT)(R, L)),
              b.hide || "xAxis" !== r
                ? b.hide || (v[A] += (g ? -1 : 1) * R.width)
                : (v[A] += (g ? -1 : 1) * R.height),
              d(d({}, o), {}, y({}, a, R))
            );
          }, {});
        },
        g = function (t, e) {
          var n = t.x,
            r = t.y,
            i = e.x,
            o = e.y;
          return {
            x: Math.min(n, i),
            y: Math.min(r, o),
            width: Math.abs(i - n),
            height: Math.abs(o - r),
          };
        },
        b = function (t) {
          var e = t.x1,
            n = t.y1,
            r = t.x2,
            i = t.y2;
          return g({ x: e, y: n }, { x: r, y: i });
        },
        x = (function () {
          function t(e) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.scale = e);
          }
          var e, n, r;
          return (
            (e = t),
            (n = [
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
                    n = e.bandAware,
                    r = e.position;
                  if (void 0 !== t) {
                    if (r)
                      switch (r) {
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
                    if (n) {
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
                    n = e[0],
                    r = e[e.length - 1];
                  return n <= r ? t >= n && t <= r : t >= r && t <= n;
                },
              },
            ]),
            (r = [
              {
                key: "create",
                value: function (e) {
                  return new t(e);
                },
              },
            ]),
            n && p(e.prototype, n),
            r && p(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
      y(x, "EPS", 1e-4);
      var w = function (t) {
        var e = Object.keys(t).reduce(function (e, n) {
          return d(d({}, e), {}, y({}, n, x.create(t[n])));
        }, {});
        return d(
          d({}, e),
          {},
          {
            apply: function (t) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = n.bandAware,
                o = n.position;
              return i()(t, function (t, n) {
                return e[n].apply(t, { bandAware: r, position: o });
              });
            },
            isInRange: function (t) {
              return a()(t, function (t, n) {
                return e[n].isInRange(t);
              });
            },
          },
        );
      };
      var O = function (t) {
        var e = t.width,
          n = t.height,
          r = (function (t) {
            return ((t % 180) + 180) % 180;
          })(
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ),
          i = (r * Math.PI) / 180,
          o = Math.atan(n / e),
          a = i > o && i < Math.PI - o ? n / Math.sin(i) : e / Math.cos(i);
        return Math.abs(a);
      };
    },
    70416: (t, e, n) => {
      "use strict";
      n.d(e, {
        By: () => wo,
        VO: () => mo,
        zF: () => Co,
        DO: () => Mo,
        Bu: () => No,
        zT: () => Go,
        qz: () => xo,
        pt: () => bo,
        Yj: () => Fo,
        Fy: () => Uo,
        Hv: () => zo,
        Rf: () => Ao,
        gF: () => vo,
        s6: () => So,
        EB: () => Wo,
        fk: () => go,
        wh: () => Lo,
        O3: () => $o,
        uY: () => Po,
        g$: () => Ro,
        Qo: () => Yo,
        F$: () => yo,
        NA: () => Eo,
        ko: () => Xo,
        ZI: () => jo,
        Hq: () => To,
        LG: () => Ho,
        Vv: () => Do,
      });
      var r = {};
      n.r(r),
        n.d(r, {
          scaleBand: () => i.Z,
          scaleDiverging: () => Qr,
          scaleDivergingLog: () => ti,
          scaleDivergingPow: () => ni,
          scaleDivergingSqrt: () => ri,
          scaleDivergingSymlog: () => ei,
          scaleIdentity: () => qt,
          scaleImplicit: () => oe.O,
          scaleLinear: () => Zt,
          scaleLog: () => te,
          scaleOrdinal: () => oe.Z,
          scalePoint: () => i.x,
          scalePow: () => se,
          scaleQuantile: () => Oe,
          scaleQuantize: () => je,
          scaleRadial: () => he,
          scaleSequential: () => Hr,
          scaleSequentialLog: () => Gr,
          scaleSequentialPow: () => Yr,
          scaleSequentialQuantile: () => Kr,
          scaleSequentialSqrt: () => Vr,
          scaleSequentialSymlog: () => Xr,
          scaleSqrt: () => fe,
          scaleSymlog: () => ie,
          scaleThreshold: () => Se,
          scaleTime: () => $r,
          scaleUtc: () => Wr,
          tickFormat: () => $t,
        });
      var i = n(9756);
      const o = Math.sqrt(50),
        a = Math.sqrt(10),
        u = Math.sqrt(2);
      function c(t, e, n) {
        const r = (e - t) / Math.max(0, n),
          i = Math.floor(Math.log10(r)),
          l = r / Math.pow(10, i),
          s = l >= o ? 10 : l >= a ? 5 : l >= u ? 2 : 1;
        let f, p, h;
        return (
          i < 0
            ? ((h = Math.pow(10, -i) / s),
              (f = Math.round(t * h)),
              (p = Math.round(e * h)),
              f / h < t && ++f,
              p / h > e && --p,
              (h = -h))
            : ((h = Math.pow(10, i) * s),
              (f = Math.round(t / h)),
              (p = Math.round(e / h)),
              f * h < t && ++f,
              p * h > e && --p),
          p < f && 0.5 <= n && n < 2 ? c(t, e, 2 * n) : [f, p, h]
        );
      }
      function l(t, e, n) {
        if (!((n = +n) > 0)) return [];
        if ((t = +t) === (e = +e)) return [t];
        const r = e < t,
          [i, o, a] = r ? c(e, t, n) : c(t, e, n);
        if (!(o >= i)) return [];
        const u = o - i + 1,
          l = new Array(u);
        if (r)
          if (a < 0) for (let t = 0; t < u; ++t) l[t] = (o - t) / -a;
          else for (let t = 0; t < u; ++t) l[t] = (o - t) * a;
        else if (a < 0) for (let t = 0; t < u; ++t) l[t] = (i + t) / -a;
        else for (let t = 0; t < u; ++t) l[t] = (i + t) * a;
        return l;
      }
      function s(t, e, n) {
        return c((t = +t), (e = +e), (n = +n))[2];
      }
      function f(t, e, n) {
        n = +n;
        const r = (e = +e) < (t = +t),
          i = r ? s(e, t, n) : s(t, e, n);
        return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
      }
      function p(t, e) {
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
      function h(t, e) {
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
      function d(t) {
        let e, n, r;
        function i(t, r, i = 0, o = t.length) {
          if (i < o) {
            if (0 !== e(r, r)) return o;
            do {
              const e = (i + o) >>> 1;
              n(t[e], r) < 0 ? (i = e + 1) : (o = e);
            } while (i < o);
          }
          return i;
        }
        return (
          2 !== t.length
            ? ((e = p), (n = (e, n) => p(t(e), n)), (r = (e, n) => t(e) - n))
            : ((e = t === p || t === h ? t : y), (n = t), (r = t)),
          {
            left: i,
            center: function (t, e, n = 0, o = t.length) {
              const a = i(t, e, n, o - 1);
              return a > n && r(t[a - 1], e) > -r(t[a], e) ? a - 1 : a;
            },
            right: function (t, r, i = 0, o = t.length) {
              if (i < o) {
                if (0 !== e(r, r)) return o;
                do {
                  const e = (i + o) >>> 1;
                  n(t[e], r) <= 0 ? (i = e + 1) : (o = e);
                } while (i < o);
              }
              return i;
            },
          }
        );
      }
      function y() {
        return 0;
      }
      function v(t) {
        return null === t ? NaN : +t;
      }
      const m = d(p),
        g = m.right,
        b = (m.left, d(v).center, g);
      function x(t, e, n) {
        (t.prototype = e.prototype = n), (n.constructor = t);
      }
      function w(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n;
      }
      function O() {}
      var j = 0.7,
        S = 1 / j,
        E = "\\s*([+-]?\\d+)\\s*",
        A = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        P = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        k = /^#([0-9a-f]{3,8})$/,
        M = new RegExp(`^rgb\\(${E},${E},${E}\\)$`),
        T = new RegExp(`^rgb\\(${P},${P},${P}\\)$`),
        _ = new RegExp(`^rgba\\(${E},${E},${E},${A}\\)$`),
        C = new RegExp(`^rgba\\(${P},${P},${P},${A}\\)$`),
        N = new RegExp(`^hsl\\(${A},${P},${P}\\)$`),
        D = new RegExp(`^hsla\\(${A},${P},${P},${A}\\)$`),
        I = {
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
      function B() {
        return this.rgb().formatHex();
      }
      function L() {
        return this.rgb().formatRgb();
      }
      function R(t) {
        var e, n;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = k.exec(t))
            ? ((n = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === n
                ? z(e)
                : 3 === n
                  ? new $(
                      ((e >> 8) & 15) | ((e >> 4) & 240),
                      ((e >> 4) & 15) | (240 & e),
                      ((15 & e) << 4) | (15 & e),
                      1,
                    )
                  : 8 === n
                    ? U(
                        (e >> 24) & 255,
                        (e >> 16) & 255,
                        (e >> 8) & 255,
                        (255 & e) / 255,
                      )
                    : 4 === n
                      ? U(
                          ((e >> 12) & 15) | ((e >> 8) & 240),
                          ((e >> 8) & 15) | ((e >> 4) & 240),
                          ((e >> 4) & 15) | (240 & e),
                          (((15 & e) << 4) | (15 & e)) / 255,
                        )
                      : null)
            : (e = M.exec(t))
              ? new $(e[1], e[2], e[3], 1)
              : (e = T.exec(t))
                ? new $(
                    (255 * e[1]) / 100,
                    (255 * e[2]) / 100,
                    (255 * e[3]) / 100,
                    1,
                  )
                : (e = _.exec(t))
                  ? U(e[1], e[2], e[3], e[4])
                  : (e = C.exec(t))
                    ? U(
                        (255 * e[1]) / 100,
                        (255 * e[2]) / 100,
                        (255 * e[3]) / 100,
                        e[4],
                      )
                    : (e = N.exec(t))
                      ? X(e[1], e[2] / 100, e[3] / 100, 1)
                      : (e = D.exec(t))
                        ? X(e[1], e[2] / 100, e[3] / 100, e[4])
                        : I.hasOwnProperty(t)
                          ? z(I[t])
                          : "transparent" === t
                            ? new $(NaN, NaN, NaN, 0)
                            : null
        );
      }
      function z(t) {
        return new $((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function U(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new $(t, e, n, r);
      }
      function F(t, e, n, r) {
        return 1 === arguments.length
          ? ((i = t) instanceof O || (i = R(i)),
            i ? new $((i = i.rgb()).r, i.g, i.b, i.opacity) : new $())
          : new $(t, e, n, null == r ? 1 : r);
        var i;
      }
      function $(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function W() {
        return `#${G(this.r)}${G(this.g)}${G(this.b)}`;
      }
      function Z() {
        const t = q(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${H(this.r)}, ${H(this.g)}, ${H(this.b)}${1 === t ? ")" : `, ${t})`}`;
      }
      function q(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function H(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function G(t) {
        return ((t = H(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function X(t, e, n, r) {
        return (
          r <= 0
            ? (t = e = n = NaN)
            : n <= 0 || n >= 1
              ? (t = e = NaN)
              : e <= 0 && (t = NaN),
          new V(t, e, n, r)
        );
      }
      function Y(t) {
        if (t instanceof V) return new V(t.h, t.s, t.l, t.opacity);
        if ((t instanceof O || (t = R(t)), !t)) return new V();
        if (t instanceof V) return t;
        var e = (t = t.rgb()).r / 255,
          n = t.g / 255,
          r = t.b / 255,
          i = Math.min(e, n, r),
          o = Math.max(e, n, r),
          a = NaN,
          u = o - i,
          c = (o + i) / 2;
        return (
          u
            ? ((a =
                e === o
                  ? (n - r) / u + 6 * (n < r)
                  : n === o
                    ? (r - e) / u + 2
                    : (e - n) / u + 4),
              (u /= c < 0.5 ? o + i : 2 - o - i),
              (a *= 60))
            : (u = c > 0 && c < 1 ? 0 : a),
          new V(a, u, c, t.opacity)
        );
      }
      function V(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function K(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function J(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function Q(t, e, n) {
        return (
          255 *
          (t < 60
            ? e + ((n - e) * t) / 60
            : t < 180
              ? n
              : t < 240
                ? e + ((n - e) * (240 - t)) / 60
                : e)
        );
      }
      function tt(t, e, n, r, i) {
        var o = t * t,
          a = o * t;
        return (
          ((1 - 3 * t + 3 * o - a) * e +
            (4 - 6 * o + 3 * a) * n +
            (1 + 3 * t + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      x(O, R, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: B,
        formatHex: B,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return Y(this).formatHsl();
        },
        formatRgb: L,
        toString: L,
      }),
        x(
          $,
          F,
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? S : Math.pow(S, t)),
                new $(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? j : Math.pow(j, t)),
                new $(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new $(H(this.r), H(this.g), H(this.b), q(this.opacity));
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
            hex: W,
            formatHex: W,
            formatHex8: function () {
              return `#${G(this.r)}${G(this.g)}${G(this.b)}${G(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
            },
            formatRgb: Z,
            toString: Z,
          }),
        ),
        x(
          V,
          function (t, e, n, r) {
            return 1 === arguments.length
              ? Y(t)
              : new V(t, e, n, null == r ? 1 : r);
          },
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? S : Math.pow(S, t)),
                new V(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? j : Math.pow(j, t)),
                new V(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * e,
                i = 2 * n - r;
              return new $(
                Q(t >= 240 ? t - 240 : t + 120, i, r),
                Q(t, i, r),
                Q(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity,
              );
            },
            clamp() {
              return new V(K(this.h), J(this.s), J(this.l), q(this.opacity));
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
              const t = q(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${K(this.h)}, ${100 * J(this.s)}%, ${100 * J(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          }),
        );
      const et = (t) => () => t;
      function nt(t, e) {
        return function (n) {
          return t + n * e;
        };
      }
      function rt(t) {
        return 1 == (t = +t)
          ? it
          : function (e, n) {
              return n - e
                ? (function (t, e, n) {
                    return (
                      (t = Math.pow(t, n)),
                      (e = Math.pow(e, n) - t),
                      (n = 1 / n),
                      function (r) {
                        return Math.pow(t + r * e, n);
                      }
                    );
                  })(e, n, t)
                : et(isNaN(e) ? n : e);
            };
      }
      function it(t, e) {
        var n = e - t;
        return n ? nt(t, n) : et(isNaN(t) ? e : t);
      }
      const ot = (function t(e) {
        var n = rt(e);
        function r(t, e) {
          var r = n((t = F(t)).r, (e = F(e)).r),
            i = n(t.g, e.g),
            o = n(t.b, e.b),
            a = it(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = r(e)),
              (t.g = i(e)),
              (t.b = o(e)),
              (t.opacity = a(e)),
              t + ""
            );
          };
        }
        return (r.gamma = t), r;
      })(1);
      function at(t) {
        return function (e) {
          var n,
            r,
            i = e.length,
            o = new Array(i),
            a = new Array(i),
            u = new Array(i);
          for (n = 0; n < i; ++n)
            (r = F(e[n])),
              (o[n] = r.r || 0),
              (a[n] = r.g || 0),
              (u[n] = r.b || 0);
          return (
            (o = t(o)),
            (a = t(a)),
            (u = t(u)),
            (r.opacity = 1),
            function (t) {
              return (r.r = o(t)), (r.g = a(t)), (r.b = u(t)), r + "";
            }
          );
        };
      }
      at(function (t) {
        var e = t.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            i = t[r],
            o = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * i - o,
            u = r < e - 1 ? t[r + 2] : 2 * o - i;
          return tt((n - r / e) * e, a, i, o, u);
        };
      }),
        at(function (t) {
          var e = t.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              i = t[(r + e - 1) % e],
              o = t[r % e],
              a = t[(r + 1) % e],
              u = t[(r + 2) % e];
            return tt((n - r / e) * e, i, o, a, u);
          };
        });
      function ut(t, e) {
        var n,
          r = e ? e.length : 0,
          i = t ? Math.min(r, t.length) : 0,
          o = new Array(i),
          a = new Array(r);
        for (n = 0; n < i; ++n) o[n] = yt(t[n], e[n]);
        for (; n < r; ++n) a[n] = e[n];
        return function (t) {
          for (n = 0; n < i; ++n) a[n] = o[n](t);
          return a;
        };
      }
      function ct(t, e) {
        var n = new Date();
        return (
          (t = +t),
          (e = +e),
          function (r) {
            return n.setTime(t * (1 - r) + e * r), n;
          }
        );
      }
      function lt(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return t * (1 - n) + e * n;
          }
        );
      }
      function st(t, e) {
        var n,
          r = {},
          i = {};
        for (n in ((null !== t && "object" == typeof t) || (t = {}),
        (null !== e && "object" == typeof e) || (e = {}),
        e))
          n in t ? (r[n] = yt(t[n], e[n])) : (i[n] = e[n]);
        return function (t) {
          for (n in r) i[n] = r[n](t);
          return i;
        };
      }
      var ft = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        pt = new RegExp(ft.source, "g");
      function ht(t, e) {
        var n,
          r,
          i,
          o = (ft.lastIndex = pt.lastIndex = 0),
          a = -1,
          u = [],
          c = [];
        for (t += "", e += ""; (n = ft.exec(t)) && (r = pt.exec(e)); )
          (i = r.index) > o &&
            ((i = e.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)),
            (n = n[0]) === (r = r[0])
              ? u[a]
                ? (u[a] += r)
                : (u[++a] = r)
              : ((u[++a] = null), c.push({ i: a, x: lt(n, r) })),
            (o = pt.lastIndex);
        return (
          o < e.length && ((i = e.slice(o)), u[a] ? (u[a] += i) : (u[++a] = i)),
          u.length < 2
            ? c[0]
              ? (function (t) {
                  return function (e) {
                    return t(e) + "";
                  };
                })(c[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(e)
            : ((e = c.length),
              function (t) {
                for (var n, r = 0; r < e; ++r) u[(n = c[r]).i] = n.x(t);
                return u.join("");
              })
        );
      }
      function dt(t, e) {
        e || (e = []);
        var n,
          r = t ? Math.min(e.length, t.length) : 0,
          i = e.slice();
        return function (o) {
          for (n = 0; n < r; ++n) i[n] = t[n] * (1 - o) + e[n] * o;
          return i;
        };
      }
      function yt(t, e) {
        var n,
          r,
          i = typeof e;
        return null == e || "boolean" === i
          ? et(e)
          : ("number" === i
              ? lt
              : "string" === i
                ? (n = R(e))
                  ? ((e = n), ot)
                  : ht
                : e instanceof R
                  ? ot
                  : e instanceof Date
                    ? ct
                    : ((r = e),
                      !ArrayBuffer.isView(r) || r instanceof DataView
                        ? Array.isArray(e)
                          ? ut
                          : ("function" != typeof e.valueOf &&
                                "function" != typeof e.toString) ||
                              isNaN(e)
                            ? st
                            : lt
                        : dt))(t, e);
      }
      function vt(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return Math.round(t * (1 - n) + e * n);
          }
        );
      }
      function mt(t) {
        return +t;
      }
      var gt = [0, 1];
      function bt(t) {
        return t;
      }
      function xt(t, e) {
        return (e -= t = +t)
          ? function (n) {
              return (n - t) / e;
            }
          : ((n = isNaN(e) ? NaN : 0.5),
            function () {
              return n;
            });
        var n;
      }
      function wt(t, e, n) {
        var r = t[0],
          i = t[1],
          o = e[0],
          a = e[1];
        return (
          i < r
            ? ((r = xt(i, r)), (o = n(a, o)))
            : ((r = xt(r, i)), (o = n(o, a))),
          function (t) {
            return o(r(t));
          }
        );
      }
      function Ot(t, e, n) {
        var r = Math.min(t.length, e.length) - 1,
          i = new Array(r),
          o = new Array(r),
          a = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < r;

        )
          (i[a] = xt(t[a], t[a + 1])), (o[a] = n(e[a], e[a + 1]));
        return function (e) {
          var n = b(t, e, 1, r) - 1;
          return o[n](i[n](e));
        };
      }
      function jt(t, e) {
        return e
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function St() {
        var t,
          e,
          n,
          r,
          i,
          o,
          a = gt,
          u = gt,
          c = yt,
          l = bt;
        function s() {
          var t,
            e,
            n,
            c = Math.min(a.length, u.length);
          return (
            l !== bt &&
              ((t = a[0]),
              (e = a[c - 1]),
              t > e && ((n = t), (t = e), (e = n)),
              (l = function (n) {
                return Math.max(t, Math.min(e, n));
              })),
            (r = c > 2 ? Ot : wt),
            (i = o = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e = +e))
            ? n
            : (i || (i = r(a.map(t), u, c)))(t(l(e)));
        }
        return (
          (f.invert = function (n) {
            return l(e((o || (o = r(u, a.map(t), lt)))(n)));
          }),
          (f.domain = function (t) {
            return arguments.length
              ? ((a = Array.from(t, mt)), s())
              : a.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((u = Array.from(t)), s()) : u.slice();
          }),
          (f.rangeRound = function (t) {
            return (u = Array.from(t)), (c = vt), s();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((l = !!t || bt), s()) : l !== bt;
          }),
          (f.interpolate = function (t) {
            return arguments.length ? ((c = t), s()) : c;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((n = t), f) : n;
          }),
          function (n, r) {
            return (t = n), (e = r), s();
          }
        );
      }
      function Et() {
        return St()(bt, bt);
      }
      var At,
        Pt = n(80560),
        kt =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function Mt(t) {
        if (!(e = kt.exec(t))) throw new Error("invalid format: " + t);
        var e;
        return new Tt({
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
      function Tt(t) {
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
      function _t(t, e) {
        if (
          (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e",
          )) < 0
        )
          return null;
        var n,
          r = t.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
      }
      function Ct(t) {
        return (t = _t(Math.abs(t))) ? t[1] : NaN;
      }
      function Nt(t, e) {
        var n = _t(t, e);
        if (!n) return t + "";
        var r = n[0],
          i = n[1];
        return i < 0
          ? "0." + new Array(-i).join("0") + r
          : r.length > i + 1
            ? r.slice(0, i + 1) + "." + r.slice(i + 1)
            : r + new Array(i - r.length + 2).join("0");
      }
      (Mt.prototype = Tt.prototype),
        (Tt.prototype.toString = function () {
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
      const Dt = {
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
        p: (t, e) => Nt(100 * t, e),
        r: Nt,
        s: function (t, e) {
          var n = _t(t, e);
          if (!n) return t + "";
          var r = n[0],
            i = n[1],
            o = i - (At = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            a = r.length;
          return o === a
            ? r
            : o > a
              ? r + new Array(o - a + 1).join("0")
              : o > 0
                ? r.slice(0, o) + "." + r.slice(o)
                : "0." +
                  new Array(1 - o).join("0") +
                  _t(t, Math.max(0, e + o - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function It(t) {
        return t;
      }
      var Bt,
        Lt,
        Rt,
        zt = Array.prototype.map,
        Ut = [
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
      function Ft(t) {
        var e,
          n,
          r =
            void 0 === t.grouping || void 0 === t.thousands
              ? It
              : ((e = zt.call(t.grouping, Number)),
                (n = t.thousands + ""),
                function (t, r) {
                  for (
                    var i = t.length, o = [], a = 0, u = e[0], c = 0;
                    i > 0 &&
                    u > 0 &&
                    (c + u + 1 > r && (u = Math.max(1, r - c)),
                    o.push(t.substring((i -= u), i + u)),
                    !((c += u + 1) > r));

                  )
                    u = e[(a = (a + 1) % e.length)];
                  return o.reverse().join(n);
                }),
          i = void 0 === t.currency ? "" : t.currency[0] + "",
          o = void 0 === t.currency ? "" : t.currency[1] + "",
          a = void 0 === t.decimal ? "." : t.decimal + "",
          u =
            void 0 === t.numerals
              ? It
              : (function (t) {
                  return function (e) {
                    return e.replace(/[0-9]/g, function (e) {
                      return t[+e];
                    });
                  };
                })(zt.call(t.numerals, String)),
          c = void 0 === t.percent ? "%" : t.percent + "",
          l = void 0 === t.minus ? "−" : t.minus + "",
          s = void 0 === t.nan ? "NaN" : t.nan + "";
        function f(t) {
          var e = (t = Mt(t)).fill,
            n = t.align,
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
            : Dt[g] || (void 0 === v && (v = 12), (m = !0), (g = "g")),
            (h || ("0" === e && "=" === n)) && ((h = !0), (e = "0"), (n = "="));
          var b =
              "$" === p
                ? i
                : "#" === p && /[boxX]/.test(g)
                  ? "0" + g.toLowerCase()
                  : "",
            x = "$" === p ? o : /[%p]/.test(g) ? c : "",
            w = Dt[g],
            O = /[defgprs%]/.test(g);
          function j(t) {
            var i,
              o,
              c,
              p = b,
              j = x;
            if ("c" === g) (j = w(t) + j), (t = "");
            else {
              var S = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? s : w(Math.abs(t), v)),
                m &&
                  (t = (function (t) {
                    t: for (var e, n = t.length, r = 1, i = -1; r < n; ++r)
                      switch (t[r]) {
                        case ".":
                          i = e = r;
                          break;
                        case "0":
                          0 === i && (i = r), (e = r);
                          break;
                        default:
                          if (!+t[r]) break t;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                  })(t)),
                S && 0 == +t && "+" !== f && (S = !1),
                (p =
                  (S ? ("(" === f ? f : l) : "-" === f || "(" === f ? "" : f) +
                  p),
                (j =
                  ("s" === g ? Ut[8 + At / 3] : "") +
                  j +
                  (S && "(" === f ? ")" : "")),
                O)
              )
                for (i = -1, o = t.length; ++i < o; )
                  if (48 > (c = t.charCodeAt(i)) || c > 57) {
                    (j = (46 === c ? a + t.slice(i + 1) : t.slice(i)) + j),
                      (t = t.slice(0, i));
                    break;
                  }
            }
            y && !h && (t = r(t, 1 / 0));
            var E = p.length + t.length + j.length,
              A = E < d ? new Array(d - E + 1).join(e) : "";
            switch (
              (y &&
                h &&
                ((t = r(A + t, A.length ? d - j.length : 1 / 0)), (A = "")),
              n)
            ) {
              case "<":
                t = p + t + j + A;
                break;
              case "=":
                t = p + A + t + j;
                break;
              case "^":
                t = A.slice(0, (E = A.length >> 1)) + p + t + j + A.slice(E);
                break;
              default:
                t = A + p + t + j;
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
            (j.toString = function () {
              return t + "";
            }),
            j
          );
        }
        return {
          format: f,
          formatPrefix: function (t, e) {
            var n = f((((t = Mt(t)).type = "f"), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(Ct(e) / 3))),
              i = Math.pow(10, -r),
              o = Ut[8 + r / 3];
            return function (t) {
              return n(i * t) + o;
            };
          },
        };
      }
      function $t(t, e, n, r) {
        var i,
          o = f(t, e, n);
        switch ((r = Mt(null == r ? ",f" : r)).type) {
          case "s":
            var a = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != r.precision ||
                isNaN(
                  (i = (function (t, e) {
                    return Math.max(
                      0,
                      3 * Math.max(-8, Math.min(8, Math.floor(Ct(e) / 3))) -
                        Ct(Math.abs(t)),
                    );
                  })(o, a)),
                ) ||
                (r.precision = i),
              Rt(r, a)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != r.precision ||
              isNaN(
                (i = (function (t, e) {
                  return (
                    (t = Math.abs(t)),
                    (e = Math.abs(e) - t),
                    Math.max(0, Ct(e) - Ct(t)) + 1
                  );
                })(o, Math.max(Math.abs(t), Math.abs(e)))),
              ) ||
              (r.precision = i - ("e" === r.type));
            break;
          case "f":
          case "%":
            null != r.precision ||
              isNaN(
                (i = (function (t) {
                  return Math.max(0, -Ct(Math.abs(t)));
                })(o)),
              ) ||
              (r.precision = i - 2 * ("%" === r.type));
        }
        return Lt(r);
      }
      function Wt(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var n = e();
            return l(n[0], n[n.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, n) {
            var r = e();
            return $t(r[0], r[r.length - 1], null == t ? 10 : t, n);
          }),
          (t.nice = function (n) {
            null == n && (n = 10);
            var r,
              i,
              o = e(),
              a = 0,
              u = o.length - 1,
              c = o[a],
              l = o[u],
              f = 10;
            for (
              l < c && ((i = c), (c = l), (l = i), (i = a), (a = u), (u = i));
              f-- > 0;

            ) {
              if ((i = s(c, l, n)) === r) return (o[a] = c), (o[u] = l), e(o);
              if (i > 0)
                (c = Math.floor(c / i) * i), (l = Math.ceil(l / i) * i);
              else {
                if (!(i < 0)) break;
                (c = Math.ceil(c * i) / i), (l = Math.floor(l * i) / i);
              }
              r = i;
            }
            return t;
          }),
          t
        );
      }
      function Zt() {
        var t = Et();
        return (
          (t.copy = function () {
            return jt(t, Zt());
          }),
          Pt.o.apply(t, arguments),
          Wt(t)
        );
      }
      function qt(t) {
        var e;
        function n(t) {
          return null == t || isNaN((t = +t)) ? e : t;
        }
        return (
          (n.invert = n),
          (n.domain = n.range =
            function (e) {
              return arguments.length
                ? ((t = Array.from(e, mt)), n)
                : t.slice();
            }),
          (n.unknown = function (t) {
            return arguments.length ? ((e = t), n) : e;
          }),
          (n.copy = function () {
            return qt(t).unknown(e);
          }),
          (t = arguments.length ? Array.from(t, mt) : [0, 1]),
          Wt(n)
        );
      }
      function Ht(t, e) {
        var n,
          r = 0,
          i = (t = t.slice()).length - 1,
          o = t[r],
          a = t[i];
        return (
          a < o && ((n = r), (r = i), (i = n), (n = o), (o = a), (a = n)),
          (t[r] = e.floor(o)),
          (t[i] = e.ceil(a)),
          t
        );
      }
      function Gt(t) {
        return Math.log(t);
      }
      function Xt(t) {
        return Math.exp(t);
      }
      function Yt(t) {
        return -Math.log(-t);
      }
      function Vt(t) {
        return -Math.exp(-t);
      }
      function Kt(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function Jt(t) {
        return (e, n) => -t(-e, n);
      }
      function Qt(t) {
        const e = t(Gt, Xt),
          n = e.domain;
        let r,
          i,
          o = 10;
        function a() {
          return (
            (r = (function (t) {
              return t === Math.E
                ? Math.log
                : (10 === t && Math.log10) ||
                    (2 === t && Math.log2) ||
                    ((t = Math.log(t)), (e) => Math.log(e) / t);
            })(o)),
            (i = (function (t) {
              return 10 === t
                ? Kt
                : t === Math.E
                  ? Math.exp
                  : (e) => Math.pow(t, e);
            })(o)),
            n()[0] < 0 ? ((r = Jt(r)), (i = Jt(i)), t(Yt, Vt)) : t(Gt, Xt),
            e
          );
        }
        return (
          (e.base = function (t) {
            return arguments.length ? ((o = +t), a()) : o;
          }),
          (e.domain = function (t) {
            return arguments.length ? (n(t), a()) : n();
          }),
          (e.ticks = (t) => {
            const e = n();
            let a = e[0],
              u = e[e.length - 1];
            const c = u < a;
            c && ([a, u] = [u, a]);
            let s,
              f,
              p = r(a),
              h = r(u);
            const d = null == t ? 10 : +t;
            let y = [];
            if (!(o % 1) && h - p < d) {
              if (((p = Math.floor(p)), (h = Math.ceil(h)), a > 0)) {
                for (; p <= h; ++p)
                  for (s = 1; s < o; ++s)
                    if (((f = p < 0 ? s / i(-p) : s * i(p)), !(f < a))) {
                      if (f > u) break;
                      y.push(f);
                    }
              } else
                for (; p <= h; ++p)
                  for (s = o - 1; s >= 1; --s)
                    if (((f = p > 0 ? s / i(-p) : s * i(p)), !(f < a))) {
                      if (f > u) break;
                      y.push(f);
                    }
              2 * y.length < d && (y = l(a, u, d));
            } else y = l(p, h, Math.min(h - p, d)).map(i);
            return c ? y.reverse() : y;
          }),
          (e.tickFormat = (t, n) => {
            if (
              (null == t && (t = 10),
              null == n && (n = 10 === o ? "s" : ","),
              "function" != typeof n &&
                (o % 1 || null != (n = Mt(n)).precision || (n.trim = !0),
                (n = Lt(n))),
              t === 1 / 0)
            )
              return n;
            const a = Math.max(1, (o * t) / e.ticks().length);
            return (t) => {
              let e = t / i(Math.round(r(t)));
              return e * o < o - 0.5 && (e *= o), e <= a ? n(t) : "";
            };
          }),
          (e.nice = () =>
            n(
              Ht(n(), {
                floor: (t) => i(Math.floor(r(t))),
                ceil: (t) => i(Math.ceil(r(t))),
              }),
            )),
          e
        );
      }
      function te() {
        const t = Qt(St()).domain([1, 10]);
        return (
          (t.copy = () => jt(t, te()).base(t.base())),
          Pt.o.apply(t, arguments),
          t
        );
      }
      function ee(t) {
        return function (e) {
          return Math.sign(e) * Math.log1p(Math.abs(e / t));
        };
      }
      function ne(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function re(t) {
        var e = 1,
          n = t(ee(e), ne(e));
        return (
          (n.constant = function (n) {
            return arguments.length ? t(ee((e = +n)), ne(e)) : e;
          }),
          Wt(n)
        );
      }
      function ie() {
        var t = re(St());
        return (
          (t.copy = function () {
            return jt(t, ie()).constant(t.constant());
          }),
          Pt.o.apply(t, arguments)
        );
      }
      (Bt = Ft({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (Lt = Bt.format),
        (Rt = Bt.formatPrefix);
      var oe = n(54328);
      function ae(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function ue(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function ce(t) {
        return t < 0 ? -t * t : t * t;
      }
      function le(t) {
        var e = t(bt, bt),
          n = 1;
        return (
          (e.exponent = function (e) {
            return arguments.length
              ? 1 === (n = +e)
                ? t(bt, bt)
                : 0.5 === n
                  ? t(ue, ce)
                  : t(ae(n), ae(1 / n))
              : n;
          }),
          Wt(e)
        );
      }
      function se() {
        var t = le(St());
        return (
          (t.copy = function () {
            return jt(t, se()).exponent(t.exponent());
          }),
          Pt.o.apply(t, arguments),
          t
        );
      }
      function fe() {
        return se.apply(null, arguments).exponent(0.5);
      }
      function pe(t) {
        return Math.sign(t) * t * t;
      }
      function he() {
        var t,
          e = Et(),
          n = [0, 1],
          r = !1;
        function i(n) {
          var i = (function (t) {
            return Math.sign(t) * Math.sqrt(Math.abs(t));
          })(e(n));
          return isNaN(i) ? t : r ? Math.round(i) : i;
        }
        return (
          (i.invert = function (t) {
            return e.invert(pe(t));
          }),
          (i.domain = function (t) {
            return arguments.length ? (e.domain(t), i) : e.domain();
          }),
          (i.range = function (t) {
            return arguments.length
              ? (e.range((n = Array.from(t, mt)).map(pe)), i)
              : n.slice();
          }),
          (i.rangeRound = function (t) {
            return i.range(t).round(!0);
          }),
          (i.round = function (t) {
            return arguments.length ? ((r = !!t), i) : r;
          }),
          (i.clamp = function (t) {
            return arguments.length ? (e.clamp(t), i) : e.clamp();
          }),
          (i.unknown = function (e) {
            return arguments.length ? ((t = e), i) : t;
          }),
          (i.copy = function () {
            return he(e.domain(), n).round(r).clamp(e.clamp()).unknown(t);
          }),
          Pt.o.apply(i, arguments),
          Wt(i)
        );
      }
      function de(t, e) {
        let n;
        if (void 0 === e)
          for (const e of t)
            null != e && (n < e || (void 0 === n && e >= e)) && (n = e);
        else {
          let r = -1;
          for (let i of t)
            null != (i = e(i, ++r, t)) &&
              (n < i || (void 0 === n && i >= i)) &&
              (n = i);
        }
        return n;
      }
      function ye(t, e) {
        let n;
        if (void 0 === e)
          for (const e of t)
            null != e && (n > e || (void 0 === n && e >= e)) && (n = e);
        else {
          let r = -1;
          for (let i of t)
            null != (i = e(i, ++r, t)) &&
              (n > i || (void 0 === n && i >= i)) &&
              (n = i);
        }
        return n;
      }
      function ve(t = p) {
        if (t === p) return me;
        if ("function" != typeof t)
          throw new TypeError("compare is not a function");
        return (e, n) => {
          const r = t(e, n);
          return r || 0 === r ? r : (0 === t(n, n)) - (0 === t(e, e));
        };
      }
      function me(t, e) {
        return (
          (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
          (t < e ? -1 : t > e ? 1 : 0)
        );
      }
      function ge(t, e, n = 0, r = 1 / 0, i) {
        if (
          ((e = Math.floor(e)),
          (n = Math.floor(Math.max(0, n))),
          (r = Math.floor(Math.min(t.length - 1, r))),
          !(n <= e && e <= r))
        )
          return t;
        for (i = void 0 === i ? me : ve(i); r > n; ) {
          if (r - n > 600) {
            const o = r - n + 1,
              a = e - n + 1,
              u = Math.log(o),
              c = 0.5 * Math.exp((2 * u) / 3),
              l =
                0.5 *
                Math.sqrt((u * c * (o - c)) / o) *
                (a - o / 2 < 0 ? -1 : 1);
            ge(
              t,
              e,
              Math.max(n, Math.floor(e - (a * c) / o + l)),
              Math.min(r, Math.floor(e + ((o - a) * c) / o + l)),
              i,
            );
          }
          const o = t[e];
          let a = n,
            u = r;
          for (be(t, n, e), i(t[r], o) > 0 && be(t, n, r); a < u; ) {
            for (be(t, a, u), ++a, --u; i(t[a], o) < 0; ) ++a;
            for (; i(t[u], o) > 0; ) --u;
          }
          0 === i(t[n], o) ? be(t, n, u) : (++u, be(t, u, r)),
            u <= e && (n = u + 1),
            e <= u && (r = u - 1);
        }
        return t;
      }
      function be(t, e, n) {
        const r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      function xe(t, e, n) {
        if (
          ((t = Float64Array.from(
            (function* (t, e) {
              if (void 0 === e)
                for (let e of t) null != e && (e = +e) >= e && (yield e);
              else {
                let n = -1;
                for (let r of t)
                  null != (r = e(r, ++n, t)) && (r = +r) >= r && (yield r);
              }
            })(t, n),
          )),
          (r = t.length) && !isNaN((e = +e)))
        ) {
          if (e <= 0 || r < 2) return ye(t);
          if (e >= 1) return de(t);
          var r,
            i = (r - 1) * e,
            o = Math.floor(i),
            a = de(ge(t, o).subarray(0, o + 1));
          return a + (ye(t.subarray(o + 1)) - a) * (i - o);
        }
      }
      function we(t, e, n = v) {
        if ((r = t.length) && !isNaN((e = +e))) {
          if (e <= 0 || r < 2) return +n(t[0], 0, t);
          if (e >= 1) return +n(t[r - 1], r - 1, t);
          var r,
            i = (r - 1) * e,
            o = Math.floor(i),
            a = +n(t[o], o, t);
          return a + (+n(t[o + 1], o + 1, t) - a) * (i - o);
        }
      }
      function Oe() {
        var t,
          e = [],
          n = [],
          r = [];
        function i() {
          var t = 0,
            i = Math.max(1, n.length);
          for (r = new Array(i - 1); ++t < i; ) r[t - 1] = we(e, t / i);
          return o;
        }
        function o(e) {
          return null == e || isNaN((e = +e)) ? t : n[b(r, e)];
        }
        return (
          (o.invertExtent = function (t) {
            var i = n.indexOf(t);
            return i < 0
              ? [NaN, NaN]
              : [
                  i > 0 ? r[i - 1] : e[0],
                  i < r.length ? r[i] : e[e.length - 1],
                ];
          }),
          (o.domain = function (t) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let n of t) null == n || isNaN((n = +n)) || e.push(n);
            return e.sort(p), i();
          }),
          (o.range = function (t) {
            return arguments.length ? ((n = Array.from(t)), i()) : n.slice();
          }),
          (o.unknown = function (e) {
            return arguments.length ? ((t = e), o) : t;
          }),
          (o.quantiles = function () {
            return r.slice();
          }),
          (o.copy = function () {
            return Oe().domain(e).range(n).unknown(t);
          }),
          Pt.o.apply(o, arguments)
        );
      }
      function je() {
        var t,
          e = 0,
          n = 1,
          r = 1,
          i = [0.5],
          o = [0, 1];
        function a(e) {
          return null != e && e <= e ? o[b(i, e, 0, r)] : t;
        }
        function u() {
          var t = -1;
          for (i = new Array(r); ++t < r; )
            i[t] = ((t + 1) * n - (t - r) * e) / (r + 1);
          return a;
        }
        return (
          (a.domain = function (t) {
            return arguments.length
              ? (([e, n] = t), (e = +e), (n = +n), u())
              : [e, n];
          }),
          (a.range = function (t) {
            return arguments.length
              ? ((r = (o = Array.from(t)).length - 1), u())
              : o.slice();
          }),
          (a.invertExtent = function (t) {
            var a = o.indexOf(t);
            return a < 0
              ? [NaN, NaN]
              : a < 1
                ? [e, i[0]]
                : a >= r
                  ? [i[r - 1], n]
                  : [i[a - 1], i[a]];
          }),
          (a.unknown = function (e) {
            return arguments.length ? ((t = e), a) : a;
          }),
          (a.thresholds = function () {
            return i.slice();
          }),
          (a.copy = function () {
            return je().domain([e, n]).range(o).unknown(t);
          }),
          Pt.o.apply(Wt(a), arguments)
        );
      }
      function Se() {
        var t,
          e = [0.5],
          n = [0, 1],
          r = 1;
        function i(i) {
          return null != i && i <= i ? n[b(e, i, 0, r)] : t;
        }
        return (
          (i.domain = function (t) {
            return arguments.length
              ? ((e = Array.from(t)), (r = Math.min(e.length, n.length - 1)), i)
              : e.slice();
          }),
          (i.range = function (t) {
            return arguments.length
              ? ((n = Array.from(t)), (r = Math.min(e.length, n.length - 1)), i)
              : n.slice();
          }),
          (i.invertExtent = function (t) {
            var r = n.indexOf(t);
            return [e[r - 1], e[r]];
          }),
          (i.unknown = function (e) {
            return arguments.length ? ((t = e), i) : t;
          }),
          (i.copy = function () {
            return Se().domain(e).range(n).unknown(t);
          }),
          Pt.o.apply(i, arguments)
        );
      }
      const Ee = 1e3,
        Ae = 6e4,
        Pe = 36e5,
        ke = 864e5,
        Me = 6048e5,
        Te = 2592e6,
        _e = 31536e6,
        Ce = new Date(),
        Ne = new Date();
      function De(t, e, n, r) {
        function i(e) {
          return t((e = 0 === arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (i.floor = (e) => (t((e = new Date(+e))), e)),
          (i.ceil = (n) => (t((n = new Date(n - 1))), e(n, 1), t(n), n)),
          (i.round = (t) => {
            const e = i(t),
              n = i.ceil(t);
            return t - e < n - t ? e : n;
          }),
          (i.offset = (t, n) => (
            e((t = new Date(+t)), null == n ? 1 : Math.floor(n)), t
          )),
          (i.range = (n, r, o) => {
            const a = [];
            if (
              ((n = i.ceil(n)),
              (o = null == o ? 1 : Math.floor(o)),
              !(n < r && o > 0))
            )
              return a;
            let u;
            do {
              a.push((u = new Date(+n))), e(n, o), t(n);
            } while (u < n && n < r);
            return a;
          }),
          (i.filter = (n) =>
            De(
              (e) => {
                if (e >= e) for (; t(e), !n(e); ) e.setTime(e - 1);
              },
              (t, r) => {
                if (t >= t)
                  if (r < 0) for (; ++r <= 0; ) for (; e(t, -1), !n(t); );
                  else for (; --r >= 0; ) for (; e(t, 1), !n(t); );
              },
            )),
          n &&
            ((i.count = (e, r) => (
              Ce.setTime(+e),
              Ne.setTime(+r),
              t(Ce),
              t(Ne),
              Math.floor(n(Ce, Ne))
            )),
            (i.every = (t) => (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? i.filter(
                      r ? (e) => r(e) % t == 0 : (e) => i.count(0, e) % t == 0,
                    )
                  : i
                : null
            ))),
          i
        );
      }
      const Ie = De(
        () => {},
        (t, e) => {
          t.setTime(+t + e);
        },
        (t, e) => e - t,
      );
      Ie.every = (t) => (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? De(
                (e) => {
                  e.setTime(Math.floor(e / t) * t);
                },
                (e, n) => {
                  e.setTime(+e + n * t);
                },
                (e, n) => (n - e) / t,
              )
            : Ie
          : null
      );
      Ie.range;
      const Be = De(
          (t) => {
            t.setTime(t - t.getMilliseconds());
          },
          (t, e) => {
            t.setTime(+t + e * Ee);
          },
          (t, e) => (e - t) / Ee,
          (t) => t.getUTCSeconds(),
        ),
        Le =
          (Be.range,
          De(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ee);
            },
            (t, e) => {
              t.setTime(+t + e * Ae);
            },
            (t, e) => (e - t) / Ae,
            (t) => t.getMinutes(),
          )),
        Re =
          (Le.range,
          De(
            (t) => {
              t.setUTCSeconds(0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * Ae);
            },
            (t, e) => (e - t) / Ae,
            (t) => t.getUTCMinutes(),
          )),
        ze =
          (Re.range,
          De(
            (t) => {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  t.getSeconds() * Ee -
                  t.getMinutes() * Ae,
              );
            },
            (t, e) => {
              t.setTime(+t + e * Pe);
            },
            (t, e) => (e - t) / Pe,
            (t) => t.getHours(),
          )),
        Ue =
          (ze.range,
          De(
            (t) => {
              t.setUTCMinutes(0, 0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * Pe);
            },
            (t, e) => (e - t) / Pe,
            (t) => t.getUTCHours(),
          )),
        Fe =
          (Ue.range,
          De(
            (t) => t.setHours(0, 0, 0, 0),
            (t, e) => t.setDate(t.getDate() + e),
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Ae) /
              ke,
            (t) => t.getDate() - 1,
          )),
        $e =
          (Fe.range,
          De(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / ke,
            (t) => t.getUTCDate() - 1,
          )),
        We =
          ($e.range,
          De(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / ke,
            (t) => Math.floor(t / ke),
          ));
      We.range;
      function Ze(t) {
        return De(
          (e) => {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
              e.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setDate(t.getDate() + 7 * e);
          },
          (t, e) =>
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Ae) / Me,
        );
      }
      const qe = Ze(0),
        He = Ze(1),
        Ge = Ze(2),
        Xe = Ze(3),
        Ye = Ze(4),
        Ve = Ze(5),
        Ke = Ze(6);
      qe.range, He.range, Ge.range, Xe.range, Ye.range, Ve.range, Ke.range;
      function Je(t) {
        return De(
          (e) => {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
              e.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          (t, e) => (e - t) / Me,
        );
      }
      const Qe = Je(0),
        tn = Je(1),
        en = Je(2),
        nn = Je(3),
        rn = Je(4),
        on = Je(5),
        an = Je(6),
        un =
          (Qe.range,
          tn.range,
          en.range,
          nn.range,
          rn.range,
          on.range,
          an.range,
          De(
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
        cn =
          (un.range,
          De(
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
        ln =
          (cn.range,
          De(
            (t) => {
              t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setFullYear(t.getFullYear() + e);
            },
            (t, e) => e.getFullYear() - t.getFullYear(),
            (t) => t.getFullYear(),
          ));
      ln.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? De(
              (e) => {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                  e.setMonth(0, 1),
                  e.setHours(0, 0, 0, 0);
              },
              (e, n) => {
                e.setFullYear(e.getFullYear() + n * t);
              },
            )
          : null;
      ln.range;
      const sn = De(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear(),
      );
      sn.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? De(
              (e) => {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                  e.setUTCMonth(0, 1),
                  e.setUTCHours(0, 0, 0, 0);
              },
              (e, n) => {
                e.setUTCFullYear(e.getUTCFullYear() + n * t);
              },
            )
          : null;
      sn.range;
      function fn(t, e, n, r, i, o) {
        const a = [
          [Be, 1, Ee],
          [Be, 5, 5e3],
          [Be, 15, 15e3],
          [Be, 30, 3e4],
          [o, 1, Ae],
          [o, 5, 3e5],
          [o, 15, 9e5],
          [o, 30, 18e5],
          [i, 1, Pe],
          [i, 3, 108e5],
          [i, 6, 216e5],
          [i, 12, 432e5],
          [r, 1, ke],
          [r, 2, 1728e5],
          [n, 1, Me],
          [e, 1, Te],
          [e, 3, 7776e6],
          [t, 1, _e],
        ];
        function u(e, n, r) {
          const i = Math.abs(n - e) / r,
            o = d(([, , t]) => t).right(a, i);
          if (o === a.length) return t.every(f(e / _e, n / _e, r));
          if (0 === o) return Ie.every(Math.max(f(e, n, r), 1));
          const [u, c] = a[i / a[o - 1][2] < a[o][2] / i ? o - 1 : o];
          return u.every(c);
        }
        return [
          function (t, e, n) {
            const r = e < t;
            r && ([t, e] = [e, t]);
            const i = n && "function" == typeof n.range ? n : u(t, e, n),
              o = i ? i.range(t, +e + 1) : [];
            return r ? o.reverse() : o;
          },
          u,
        ];
      }
      const [pn, hn] = fn(sn, cn, Qe, We, Ue, Re),
        [dn, yn] = fn(ln, un, qe, Fe, ze, Le);
      function vn(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function mn(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function gn(t, e, n) {
        return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
      }
      var bn,
        xn,
        wn,
        On = { "-": "", _: " ", 0: "0" },
        jn = /^\s*\d+/,
        Sn = /^%/,
        En = /[\\^$*+?|[\]().{}]/g;
      function An(t, e, n) {
        var r = t < 0 ? "-" : "",
          i = (r ? -t : t) + "",
          o = i.length;
        return r + (o < n ? new Array(n - o + 1).join(e) + i : i);
      }
      function Pn(t) {
        return t.replace(En, "\\$&");
      }
      function kn(t) {
        return new RegExp("^(?:" + t.map(Pn).join("|") + ")", "i");
      }
      function Mn(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function Tn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 1));
        return r ? ((t.w = +r[0]), n + r[0].length) : -1;
      }
      function _n(t, e, n) {
        var r = jn.exec(e.slice(n, n + 1));
        return r ? ((t.u = +r[0]), n + r[0].length) : -1;
      }
      function Cn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 2));
        return r ? ((t.U = +r[0]), n + r[0].length) : -1;
      }
      function Nn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 2));
        return r ? ((t.V = +r[0]), n + r[0].length) : -1;
      }
      function Dn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 2));
        return r ? ((t.W = +r[0]), n + r[0].length) : -1;
      }
      function In(t, e, n) {
        var r = jn.exec(e.slice(n, n + 4));
        return r ? ((t.y = +r[0]), n + r[0].length) : -1;
      }
      function Bn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 2));
        return r
          ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
          : -1;
      }
      function Ln(t, e, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return r
          ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
          : -1;
      }
      function Rn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 1));
        return r ? ((t.q = 3 * r[0] - 3), n + r[0].length) : -1;
      }
      function zn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 2));
        return r ? ((t.m = r[0] - 1), n + r[0].length) : -1;
      }
      function Un(t, e, n) {
        var r = jn.exec(e.slice(n, n + 2));
        return r ? ((t.d = +r[0]), n + r[0].length) : -1;
      }
      function Fn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), n + r[0].length) : -1;
      }
      function $n(t, e, n) {
        var r = jn.exec(e.slice(n, n + 2));
        return r ? ((t.H = +r[0]), n + r[0].length) : -1;
      }
      function Wn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 2));
        return r ? ((t.M = +r[0]), n + r[0].length) : -1;
      }
      function Zn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 2));
        return r ? ((t.S = +r[0]), n + r[0].length) : -1;
      }
      function qn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 3));
        return r ? ((t.L = +r[0]), n + r[0].length) : -1;
      }
      function Hn(t, e, n) {
        var r = jn.exec(e.slice(n, n + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
      }
      function Gn(t, e, n) {
        var r = Sn.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1;
      }
      function Xn(t, e, n) {
        var r = jn.exec(e.slice(n));
        return r ? ((t.Q = +r[0]), n + r[0].length) : -1;
      }
      function Yn(t, e, n) {
        var r = jn.exec(e.slice(n));
        return r ? ((t.s = +r[0]), n + r[0].length) : -1;
      }
      function Vn(t, e) {
        return An(t.getDate(), e, 2);
      }
      function Kn(t, e) {
        return An(t.getHours(), e, 2);
      }
      function Jn(t, e) {
        return An(t.getHours() % 12 || 12, e, 2);
      }
      function Qn(t, e) {
        return An(1 + Fe.count(ln(t), t), e, 3);
      }
      function tr(t, e) {
        return An(t.getMilliseconds(), e, 3);
      }
      function er(t, e) {
        return tr(t, e) + "000";
      }
      function nr(t, e) {
        return An(t.getMonth() + 1, e, 2);
      }
      function rr(t, e) {
        return An(t.getMinutes(), e, 2);
      }
      function ir(t, e) {
        return An(t.getSeconds(), e, 2);
      }
      function or(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function ar(t, e) {
        return An(qe.count(ln(t) - 1, t), e, 2);
      }
      function ur(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? Ye(t) : Ye.ceil(t);
      }
      function cr(t, e) {
        return (
          (t = ur(t)), An(Ye.count(ln(t), t) + (4 === ln(t).getDay()), e, 2)
        );
      }
      function lr(t) {
        return t.getDay();
      }
      function sr(t, e) {
        return An(He.count(ln(t) - 1, t), e, 2);
      }
      function fr(t, e) {
        return An(t.getFullYear() % 100, e, 2);
      }
      function pr(t, e) {
        return An((t = ur(t)).getFullYear() % 100, e, 2);
      }
      function hr(t, e) {
        return An(t.getFullYear() % 1e4, e, 4);
      }
      function dr(t, e) {
        var n = t.getDay();
        return An(
          (t = n >= 4 || 0 === n ? Ye(t) : Ye.ceil(t)).getFullYear() % 1e4,
          e,
          4,
        );
      }
      function yr(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          An((e / 60) | 0, "0", 2) +
          An(e % 60, "0", 2)
        );
      }
      function vr(t, e) {
        return An(t.getUTCDate(), e, 2);
      }
      function mr(t, e) {
        return An(t.getUTCHours(), e, 2);
      }
      function gr(t, e) {
        return An(t.getUTCHours() % 12 || 12, e, 2);
      }
      function br(t, e) {
        return An(1 + $e.count(sn(t), t), e, 3);
      }
      function xr(t, e) {
        return An(t.getUTCMilliseconds(), e, 3);
      }
      function wr(t, e) {
        return xr(t, e) + "000";
      }
      function Or(t, e) {
        return An(t.getUTCMonth() + 1, e, 2);
      }
      function jr(t, e) {
        return An(t.getUTCMinutes(), e, 2);
      }
      function Sr(t, e) {
        return An(t.getUTCSeconds(), e, 2);
      }
      function Er(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function Ar(t, e) {
        return An(Qe.count(sn(t) - 1, t), e, 2);
      }
      function Pr(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? rn(t) : rn.ceil(t);
      }
      function kr(t, e) {
        return (
          (t = Pr(t)), An(rn.count(sn(t), t) + (4 === sn(t).getUTCDay()), e, 2)
        );
      }
      function Mr(t) {
        return t.getUTCDay();
      }
      function Tr(t, e) {
        return An(tn.count(sn(t) - 1, t), e, 2);
      }
      function _r(t, e) {
        return An(t.getUTCFullYear() % 100, e, 2);
      }
      function Cr(t, e) {
        return An((t = Pr(t)).getUTCFullYear() % 100, e, 2);
      }
      function Nr(t, e) {
        return An(t.getUTCFullYear() % 1e4, e, 4);
      }
      function Dr(t, e) {
        var n = t.getUTCDay();
        return An(
          (t = n >= 4 || 0 === n ? rn(t) : rn.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4,
        );
      }
      function Ir() {
        return "+0000";
      }
      function Br() {
        return "%";
      }
      function Lr(t) {
        return +t;
      }
      function Rr(t) {
        return Math.floor(+t / 1e3);
      }
      function zr(t) {
        return new Date(t);
      }
      function Ur(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function Fr(t, e, n, r, i, o, a, u, c, l) {
        var s = Et(),
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
                    : r(t) < t
                      ? i(t) < t
                        ? m
                        : g
                      : n(t) < t
                        ? b
                        : x
          )(t);
        }
        return (
          (s.invert = function (t) {
            return new Date(f(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? p(Array.from(t, Ur)) : p().map(zr);
          }),
          (s.ticks = function (e) {
            var n = p();
            return t(n[0], n[n.length - 1], null == e ? 10 : e);
          }),
          (s.tickFormat = function (t, e) {
            return null == e ? w : l(e);
          }),
          (s.nice = function (t) {
            var n = p();
            return (
              (t && "function" == typeof t.range) ||
                (t = e(n[0], n[n.length - 1], null == t ? 10 : t)),
              t ? p(Ht(n, t)) : s
            );
          }),
          (s.copy = function () {
            return jt(s, Fr(t, e, n, r, i, o, a, u, c, l));
          }),
          s
        );
      }
      function $r() {
        return Pt.o.apply(
          Fr(dn, yn, ln, un, qe, Fe, ze, Le, Be, xn).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function Wr() {
        return Pt.o.apply(
          Fr(pn, hn, sn, cn, Qe, $e, Ue, Re, Be, wn).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function Zr() {
        var t,
          e,
          n,
          r,
          i,
          o = 0,
          a = 1,
          u = bt,
          c = !1;
        function l(e) {
          return null == e || isNaN((e = +e))
            ? i
            : u(
                0 === n
                  ? 0.5
                  : ((e = (r(e) - t) * n), c ? Math.max(0, Math.min(1, e)) : e),
              );
        }
        function s(t) {
          return function (e) {
            var n, r;
            return arguments.length
              ? (([n, r] = e), (u = t(n, r)), l)
              : [u(0), u(1)];
          };
        }
        return (
          (l.domain = function (i) {
            return arguments.length
              ? (([o, a] = i),
                (t = r((o = +o))),
                (e = r((a = +a))),
                (n = t === e ? 0 : 1 / (e - t)),
                l)
              : [o, a];
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((c = !!t), l) : c;
          }),
          (l.interpolator = function (t) {
            return arguments.length ? ((u = t), l) : u;
          }),
          (l.range = s(yt)),
          (l.rangeRound = s(vt)),
          (l.unknown = function (t) {
            return arguments.length ? ((i = t), l) : i;
          }),
          function (i) {
            return (
              (r = i),
              (t = i(o)),
              (e = i(a)),
              (n = t === e ? 0 : 1 / (e - t)),
              l
            );
          }
        );
      }
      function qr(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function Hr() {
        var t = Wt(Zr()(bt));
        return (
          (t.copy = function () {
            return qr(t, Hr());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function Gr() {
        var t = Qt(Zr()).domain([1, 10]);
        return (
          (t.copy = function () {
            return qr(t, Gr()).base(t.base());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function Xr() {
        var t = re(Zr());
        return (
          (t.copy = function () {
            return qr(t, Xr()).constant(t.constant());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function Yr() {
        var t = le(Zr());
        return (
          (t.copy = function () {
            return qr(t, Yr()).exponent(t.exponent());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function Vr() {
        return Yr.apply(null, arguments).exponent(0.5);
      }
      function Kr() {
        var t = [],
          e = bt;
        function n(n) {
          if (null != n && !isNaN((n = +n)))
            return e((b(t, n, 1) - 1) / (t.length - 1));
        }
        return (
          (n.domain = function (e) {
            if (!arguments.length) return t.slice();
            t = [];
            for (let n of e) null == n || isNaN((n = +n)) || t.push(n);
            return t.sort(p), n;
          }),
          (n.interpolator = function (t) {
            return arguments.length ? ((e = t), n) : e;
          }),
          (n.range = function () {
            return t.map((n, r) => e(r / (t.length - 1)));
          }),
          (n.quantiles = function (e) {
            return Array.from({ length: e + 1 }, (n, r) => xe(t, r / e));
          }),
          (n.copy = function () {
            return Kr(e).domain(t);
          }),
          Pt.O.apply(n, arguments)
        );
      }
      function Jr() {
        var t,
          e,
          n,
          r,
          i,
          o,
          a,
          u = 0,
          c = 0.5,
          l = 1,
          s = 1,
          f = bt,
          p = !1;
        function h(t) {
          return isNaN((t = +t))
            ? a
            : ((t = 0.5 + ((t = +o(t)) - e) * (s * t < s * e ? r : i)),
              f(p ? Math.max(0, Math.min(1, t)) : t));
        }
        function d(t) {
          return function (e) {
            var n, r, i;
            return arguments.length
              ? (([n, r, i] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = yt));
                  for (
                    var n = 0,
                      r = e.length - 1,
                      i = e[0],
                      o = new Array(r < 0 ? 0 : r);
                    n < r;

                  )
                    o[n] = t(i, (i = e[++n]));
                  return function (t) {
                    var e = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
                    return o[e](t - e);
                  };
                })(t, [n, r, i])),
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
                (n = o((l = +l))),
                (r = t === e ? 0 : 0.5 / (e - t)),
                (i = e === n ? 0 : 0.5 / (n - e)),
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
          (h.range = d(yt)),
          (h.rangeRound = d(vt)),
          (h.unknown = function (t) {
            return arguments.length ? ((a = t), h) : a;
          }),
          function (a) {
            return (
              (o = a),
              (t = a(u)),
              (e = a(c)),
              (n = a(l)),
              (r = t === e ? 0 : 0.5 / (e - t)),
              (i = e === n ? 0 : 0.5 / (n - e)),
              (s = e < t ? -1 : 1),
              h
            );
          }
        );
      }
      function Qr() {
        var t = Wt(Jr()(bt));
        return (
          (t.copy = function () {
            return qr(t, Qr());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function ti() {
        var t = Qt(Jr()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return qr(t, ti()).base(t.base());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function ei() {
        var t = re(Jr());
        return (
          (t.copy = function () {
            return qr(t, ei()).constant(t.constant());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function ni() {
        var t = le(Jr());
        return (
          (t.copy = function () {
            return qr(t, ni()).exponent(t.exponent());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function ri() {
        return ni.apply(null, arguments).exponent(0.5);
      }
      function ii(t, e) {
        if ((i = t.length) > 1)
          for (var n, r, i, o = 1, a = t[e[0]], u = a.length; o < i; ++o)
            for (r = a, a = t[e[o]], n = 0; n < u; ++n)
              a[n][1] += a[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
      }
      !(function (t) {
        (bn = (function (t) {
          var e = t.dateTime,
            n = t.date,
            r = t.time,
            i = t.periods,
            o = t.days,
            a = t.shortDays,
            u = t.months,
            c = t.shortMonths,
            l = kn(i),
            s = Mn(i),
            f = kn(o),
            p = Mn(o),
            h = kn(a),
            d = Mn(a),
            y = kn(u),
            v = Mn(u),
            m = kn(c),
            g = Mn(c),
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
              d: Vn,
              e: Vn,
              f: er,
              g: pr,
              G: dr,
              H: Kn,
              I: Jn,
              j: Qn,
              L: tr,
              m: nr,
              M: rr,
              p: function (t) {
                return i[+(t.getHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getMonth() / 3);
              },
              Q: Lr,
              s: Rr,
              S: ir,
              u: or,
              U: ar,
              V: cr,
              w: lr,
              W: sr,
              x: null,
              X: null,
              y: fr,
              Y: hr,
              Z: yr,
              "%": Br,
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
              d: vr,
              e: vr,
              f: wr,
              g: Cr,
              G: Dr,
              H: mr,
              I: gr,
              j: br,
              L: xr,
              m: Or,
              M: jr,
              p: function (t) {
                return i[+(t.getUTCHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getUTCMonth() / 3);
              },
              Q: Lr,
              s: Rr,
              S: Sr,
              u: Er,
              U: Ar,
              V: kr,
              w: Mr,
              W: Tr,
              x: null,
              X: null,
              y: _r,
              Y: Nr,
              Z: Ir,
              "%": Br,
            },
            w = {
              a: function (t, e, n) {
                var r = h.exec(e.slice(n));
                return r
                  ? ((t.w = d.get(r[0].toLowerCase())), n + r[0].length)
                  : -1;
              },
              A: function (t, e, n) {
                var r = f.exec(e.slice(n));
                return r
                  ? ((t.w = p.get(r[0].toLowerCase())), n + r[0].length)
                  : -1;
              },
              b: function (t, e, n) {
                var r = m.exec(e.slice(n));
                return r
                  ? ((t.m = g.get(r[0].toLowerCase())), n + r[0].length)
                  : -1;
              },
              B: function (t, e, n) {
                var r = y.exec(e.slice(n));
                return r
                  ? ((t.m = v.get(r[0].toLowerCase())), n + r[0].length)
                  : -1;
              },
              c: function (t, n, r) {
                return S(t, e, n, r);
              },
              d: Un,
              e: Un,
              f: Hn,
              g: Bn,
              G: In,
              H: $n,
              I: $n,
              j: Fn,
              L: qn,
              m: zn,
              M: Wn,
              p: function (t, e, n) {
                var r = l.exec(e.slice(n));
                return r
                  ? ((t.p = s.get(r[0].toLowerCase())), n + r[0].length)
                  : -1;
              },
              q: Rn,
              Q: Xn,
              s: Yn,
              S: Zn,
              u: _n,
              U: Cn,
              V: Nn,
              w: Tn,
              W: Dn,
              x: function (t, e, r) {
                return S(t, n, e, r);
              },
              X: function (t, e, n) {
                return S(t, r, e, n);
              },
              y: Bn,
              Y: In,
              Z: Ln,
              "%": Gn,
            };
          function O(t, e) {
            return function (n) {
              var r,
                i,
                o,
                a = [],
                u = -1,
                c = 0,
                l = t.length;
              for (n instanceof Date || (n = new Date(+n)); ++u < l; )
                37 === t.charCodeAt(u) &&
                  (a.push(t.slice(c, u)),
                  null != (i = On[(r = t.charAt(++u))])
                    ? (r = t.charAt(++u))
                    : (i = "e" === r ? " " : "0"),
                  (o = e[r]) && (r = o(n, i)),
                  a.push(r),
                  (c = u + 1));
              return a.push(t.slice(c, u)), a.join("");
            };
          }
          function j(t, e) {
            return function (n) {
              var r,
                i,
                o = gn(1900, void 0, 1);
              if (S(o, t, (n += ""), 0) != n.length) return null;
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
                    ? ((i = (r = mn(gn(o.y, 0, 1))).getUTCDay()),
                      (r = i > 4 || 0 === i ? tn.ceil(r) : tn(r)),
                      (r = $e.offset(r, 7 * (o.V - 1))),
                      (o.y = r.getUTCFullYear()),
                      (o.m = r.getUTCMonth()),
                      (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                    : ((i = (r = vn(gn(o.y, 0, 1))).getDay()),
                      (r = i > 4 || 0 === i ? He.ceil(r) : He(r)),
                      (r = Fe.offset(r, 7 * (o.V - 1))),
                      (o.y = r.getFullYear()),
                      (o.m = r.getMonth()),
                      (o.d = r.getDate() + ((o.w + 6) % 7)));
              } else
                ("W" in o || "U" in o) &&
                  ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0),
                  (i =
                    "Z" in o
                      ? mn(gn(o.y, 0, 1)).getUTCDay()
                      : vn(gn(o.y, 0, 1)).getDay()),
                  (o.m = 0),
                  (o.d =
                    "W" in o
                      ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                      : o.w + 7 * o.U - ((i + 6) % 7)));
              return "Z" in o
                ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), mn(o))
                : vn(o);
            };
          }
          function S(t, e, n, r) {
            for (var i, o, a = 0, u = e.length, c = n.length; a < u; ) {
              if (r >= c) return -1;
              if (37 === (i = e.charCodeAt(a++))) {
                if (
                  ((i = e.charAt(a++)),
                  !(o = w[i in On ? e.charAt(a++) : i]) || (r = o(t, n, r)) < 0)
                )
                  return -1;
              } else if (i != n.charCodeAt(r++)) return -1;
            }
            return r;
          }
          return (
            (b.x = O(n, b)),
            (b.X = O(r, b)),
            (b.c = O(e, b)),
            (x.x = O(n, x)),
            (x.X = O(r, x)),
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
                var e = j((t += ""), !1);
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
                var e = j((t += ""), !0);
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
          (xn = bn.format),
          bn.parse,
          (wn = bn.utcFormat),
          bn.utcParse;
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
      var oi = n(70479),
        ai = n(22015);
      function ui(t) {
        for (var e = t.length, n = new Array(e); --e >= 0; ) n[e] = e;
        return n;
      }
      function ci(t, e) {
        return t[e];
      }
      function li(t) {
        const e = [];
        return (e.key = t), e;
      }
      var si = n(24149),
        fi = n.n(si),
        pi = n(65793),
        hi = n.n(pi),
        di = n(38716),
        yi = n.n(di),
        vi = n(8889),
        mi = n.n(vi),
        gi = n(30392),
        bi = n.n(gi),
        xi = n(18310),
        wi = n.n(xi),
        Oi = n(6392),
        ji = n.n(Oi),
        Si = n(98176),
        Ei = n.n(Si),
        Ai = n(70758),
        Pi = n.n(Ai),
        ki = n(49198),
        Mi = n.n(ki),
        Ti = n(2045),
        _i = n.n(Ti),
        Ci = n(41721),
        Ni = n.n(Ci);
      function Di(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Ii(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return Ii(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ii(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Ii(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var Bi = function (t) {
          return t;
        },
        Li = { "@@functional/placeholder": !0 },
        Ri = function (t) {
          return t === Li;
        },
        zi = function (t) {
          return function e() {
            return 0 === arguments.length ||
              (1 === arguments.length &&
                Ri(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t.apply(void 0, arguments);
          };
        },
        Ui = function t(e, n) {
          return 1 === e
            ? n
            : zi(function () {
                for (
                  var r = arguments.length, i = new Array(r), o = 0;
                  o < r;
                  o++
                )
                  i[o] = arguments[o];
                var a = i.filter(function (t) {
                  return t !== Li;
                }).length;
                return a >= e
                  ? n.apply(void 0, i)
                  : t(
                      e - a,
                      zi(function () {
                        for (
                          var t = arguments.length, e = new Array(t), r = 0;
                          r < t;
                          r++
                        )
                          e[r] = arguments[r];
                        var o = i.map(function (t) {
                          return Ri(t) ? e.shift() : t;
                        });
                        return n.apply(void 0, Di(o).concat(e));
                      }),
                    );
              });
        },
        Fi = function (t) {
          return Ui(t.length, t);
        },
        $i = function (t, e) {
          for (var n = [], r = t; r < e; ++r) n[r - t] = r;
          return n;
        },
        Wi = Fi(function (t, e) {
          return Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map(function (t) {
                  return e[t];
                })
                .map(t);
        }),
        Zi = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          if (!e.length) return Bi;
          var r = e.reverse(),
            i = r[0],
            o = r.slice(1);
          return function () {
            return o.reduce(
              function (t, e) {
                return e(t);
              },
              i.apply(void 0, arguments),
            );
          };
        },
        qi = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        Hi = function (t) {
          var e = null,
            n = null;
          return function () {
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return e &&
              i.every(function (t, n) {
                return t === e[n];
              })
              ? n
              : ((e = i), (n = t.apply(void 0, i)));
          };
        };
      const Gi = {
        rangeStep: function (t, e, n) {
          for (var r = new (Ni())(t), i = 0, o = []; r.lt(e) && i < 1e5; )
            o.push(r.toNumber()), (r = r.add(n)), i++;
          return o;
        },
        getDigitCount: function (t) {
          return 0 === t
            ? 1
            : Math.floor(new (Ni())(t).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: Fi(function (t, e, n) {
          var r = +t;
          return r + n * (+e - r);
        }),
        uninterpolateNumber: Fi(function (t, e, n) {
          var r = e - +t;
          return (n - t) / (r = r || 1 / 0);
        }),
        uninterpolateTruncation: Fi(function (t, e, n) {
          var r = e - +t;
          return (r = r || 1 / 0), Math.max(0, Math.min(1, (n - t) / r));
        }),
      };
      function Xi(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Ki(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          Vi(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Yi(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
              return;
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, u = t[Symbol.iterator]();
                !(r = (a = u.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (t) {
              (i = !0), (o = t);
            } finally {
              try {
                r || null == u.return || u.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(t, e) ||
          Vi(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Vi(t, e) {
        if (t) {
          if ("string" == typeof t) return Ki(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Ki(t, e)
                : void 0
          );
        }
      }
      function Ki(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Ji(t) {
        var e = Yi(t, 2),
          n = e[0],
          r = e[1],
          i = n,
          o = r;
        return n > r && ((i = r), (o = n)), [i, o];
      }
      function Qi(t, e, n) {
        if (t.lte(0)) return new (Ni())(0);
        var r = Gi.getDigitCount(t.toNumber()),
          i = new (Ni())(10).pow(r),
          o = t.div(i),
          a = 1 !== r ? 0.05 : 0.1,
          u = new (Ni())(Math.ceil(o.div(a).toNumber())).add(n).mul(a).mul(i);
        return e ? u : new (Ni())(Math.ceil(u));
      }
      function to(t, e, n) {
        var r = 1,
          i = new (Ni())(t);
        if (!i.isint() && n) {
          var o = Math.abs(t);
          o < 1
            ? ((r = new (Ni())(10).pow(Gi.getDigitCount(t) - 1)),
              (i = new (Ni())(Math.floor(i.div(r).toNumber())).mul(r)))
            : o > 1 && (i = new (Ni())(Math.floor(t)));
        } else
          0 === t
            ? (i = new (Ni())(Math.floor((e - 1) / 2)))
            : n || (i = new (Ni())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return Zi(
          Wi(function (t) {
            return i.add(new (Ni())(t - a).mul(r)).toNumber();
          }),
          $i,
        )(0, e);
      }
      function eo(t, e, n, r) {
        var i =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((e - t) / (n - 1)))
          return {
            step: new (Ni())(0),
            tickMin: new (Ni())(0),
            tickMax: new (Ni())(0),
          };
        var o,
          a = Qi(new (Ni())(e).sub(t).div(n - 1), r, i);
        o =
          t <= 0 && e >= 0
            ? new (Ni())(0)
            : (o = new (Ni())(t).add(e).div(2)).sub(new (Ni())(o).mod(a));
        var u = Math.ceil(o.sub(t).div(a).toNumber()),
          c = Math.ceil(new (Ni())(e).sub(o).div(a).toNumber()),
          l = u + c + 1;
        return l > n
          ? eo(t, e, n, r, i + 1)
          : (l < n &&
              ((c = e > 0 ? c + (n - l) : c), (u = e > 0 ? u : u + (n - l))),
            {
              step: a,
              tickMin: o.sub(new (Ni())(u).mul(a)),
              tickMax: o.add(new (Ni())(c).mul(a)),
            });
      }
      var no = Hi(function (t) {
          var e = Yi(t, 2),
            n = e[0],
            r = e[1],
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 6,
            o =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = Math.max(i, 2),
            u = Yi(Ji([n, r]), 2),
            c = u[0],
            l = u[1];
          if (c === -1 / 0 || l === 1 / 0) {
            var s =
              l === 1 / 0
                ? [c].concat(
                    Xi(
                      $i(0, i - 1).map(function () {
                        return 1 / 0;
                      }),
                    ),
                  )
                : [].concat(
                    Xi(
                      $i(0, i - 1).map(function () {
                        return -1 / 0;
                      }),
                    ),
                    [l],
                  );
            return n > r ? qi(s) : s;
          }
          if (c === l) return to(c, i, o);
          var f = eo(c, l, a, o),
            p = f.step,
            h = f.tickMin,
            d = f.tickMax,
            y = Gi.rangeStep(h, d.add(new (Ni())(0.1).mul(p)), p);
          return n > r ? qi(y) : y;
        }),
        ro =
          (Hi(function (t) {
            var e = Yi(t, 2),
              n = e[0],
              r = e[1],
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 6,
              o =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Math.max(i, 2),
              u = Yi(Ji([n, r]), 2),
              c = u[0],
              l = u[1];
            if (c === -1 / 0 || l === 1 / 0) return [n, r];
            if (c === l) return to(c, i, o);
            var s = Qi(new (Ni())(l).sub(c).div(a - 1), o, 0),
              f = Zi(
                Wi(function (t) {
                  return new (Ni())(c).add(new (Ni())(t).mul(s)).toNumber();
                }),
                $i,
              )(0, a).filter(function (t) {
                return t >= c && t <= l;
              });
            return n > r ? qi(f) : f;
          }),
          Hi(function (t, e) {
            var n = Yi(t, 2),
              r = n[0],
              i = n[1],
              o =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Yi(Ji([r, i]), 2),
              u = a[0],
              c = a[1];
            if (u === -1 / 0 || c === 1 / 0) return [r, i];
            if (u === c) return [u];
            var l = Math.max(e, 2),
              s = Qi(new (Ni())(c).sub(u).div(l - 1), o, 0),
              f = [].concat(
                Xi(
                  Gi.rangeStep(
                    new (Ni())(u),
                    new (Ni())(c).sub(new (Ni())(0.99).mul(s)),
                    s,
                  ),
                ),
                [c],
              );
            return r > i ? qi(f) : f;
          })),
        io = n(85458),
        oo = n(76325),
        ao = n(94797),
        uo = n(52255);
      function co(t) {
        return (
          (co =
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
          co(t)
        );
      }
      function lo(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function so(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? lo(Object(n), !0).forEach(function (e) {
                fo(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : lo(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function fo(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== co(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== co(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === co(e) ? e : String(e);
          })(e)) in t
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
      function po(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ho(t);
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
            if ("string" == typeof t) return ho(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ho(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ho(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function yo(t, e, n) {
        return yi()(t) || yi()(e)
          ? n
          : (0, oo.P2)(e)
            ? wi()(t, e, n)
            : mi()(e)
              ? e(t)
              : n;
      }
      function vo(t, e, n, r) {
        var i = ji()(t, function (t) {
          return yo(t, e);
        });
        if ("number" === n) {
          var o = i.filter(function (t) {
            return (0, oo.hj)(t) || parseFloat(t);
          });
          return o.length ? [hi()(o), fi()(o)] : [1 / 0, -1 / 0];
        }
        return (
          r
            ? i.filter(function (t) {
                return !yi()(t);
              })
            : i
        ).map(function (t) {
          return (0, oo.P2)(t) || t instanceof Date ? t : "";
        });
      }
      var mo = function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = -1,
            a =
              null !== (e = null == n ? void 0 : n.length) && void 0 !== e
                ? e
                : 0;
          if (a <= 1) return 0;
          if (
            i &&
            "angleAxis" === i.axisType &&
            Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6
          )
            for (var u = i.range, c = 0; c < a; c++) {
              var l = c > 0 ? r[c - 1].coordinate : r[a - 1].coordinate,
                s = r[c].coordinate,
                f = c >= a - 1 ? r[0].coordinate : r[c + 1].coordinate,
                p = void 0;
              if ((0, oo.uY)(s - l) !== (0, oo.uY)(f - s)) {
                var h = [];
                if ((0, oo.uY)(f - s) === (0, oo.uY)(u[1] - u[0])) {
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
                  o = r[c].index;
                  break;
                }
              } else {
                var m = Math.min(l, f),
                  g = Math.max(l, f);
                if (t > (m + s) / 2 && t <= (g + s) / 2) {
                  o = r[c].index;
                  break;
                }
              }
            }
          else
            for (var b = 0; b < a; b++)
              if (
                (0 === b && t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
                (b > 0 &&
                  b < a - 1 &&
                  t > (n[b].coordinate + n[b - 1].coordinate) / 2 &&
                  t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
                (b === a - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2)
              ) {
                o = n[b].index;
                break;
              }
          return o;
        },
        go = function (t) {
          var e,
            n = t.type.displayName,
            r = t.props,
            i = r.stroke,
            o = r.fill;
          switch (n) {
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
        bo = function (t) {
          var e = t.barSize,
            n = t.stackGroups,
            r = void 0 === n ? {} : n;
          if (!r) return {};
          for (var i = {}, o = Object.keys(r), a = 0, u = o.length; a < u; a++)
            for (
              var c = r[o[a]].stackGroups,
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
                  return (0, ao.Gf)(t.type).indexOf("Bar") >= 0;
                });
              if (y && y.length) {
                var v = y[0].props.barSize,
                  m = y[0].props[d];
                i[m] || (i[m] = []),
                  i[m].push({
                    item: y[0],
                    stackList: y.slice(1),
                    barSize: yi()(v) ? e : v,
                  });
              }
            }
          return i;
        },
        xo = function (t) {
          var e = t.barGap,
            n = t.barCategoryGap,
            r = t.bandSize,
            i = t.sizeList,
            o = void 0 === i ? [] : i,
            a = t.maxBarSize,
            u = o.length;
          if (u < 1) return null;
          var c,
            l = (0, oo.h1)(e, r, 0, !0),
            s = [];
          if (o[0].barSize === +o[0].barSize) {
            var f = !1,
              p = r / u,
              h = o.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (h += (u - 1) * l) >= r && ((h -= (u - 1) * l), (l = 0)),
              h >= r && p > 0 && ((f = !0), (h = u * (p *= 0.9)));
            var d = { offset: (((r - h) / 2) >> 0) - l, size: 0 };
            c = o.reduce(function (t, e) {
              var n = {
                  item: e.item,
                  position: {
                    offset: d.offset + d.size + l,
                    size: f ? p : e.barSize,
                  },
                },
                r = [].concat(po(t), [n]);
              return (
                (d = r[r.length - 1].position),
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    r.push({ item: t, position: d });
                  }),
                r
              );
            }, s);
          } else {
            var y = (0, oo.h1)(n, r, 0, !0);
            r - 2 * y - (u - 1) * l <= 0 && (l = 0);
            var v = (r - 2 * y - (u - 1) * l) / u;
            v > 1 && (v >>= 0);
            var m = a === +a ? Math.min(v, a) : v;
            c = o.reduce(function (t, e, n) {
              var r = [].concat(po(t), [
                {
                  item: e.item,
                  position: { offset: y + (v + l) * n + (v - m) / 2, size: m },
                },
              ]);
              return (
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    r.push({ item: t, position: r[r.length - 1].position });
                  }),
                r
              );
            }, s);
          }
          return c;
        },
        wo = function (t, e, n, r) {
          var i = n.children,
            o = n.width,
            a = n.margin,
            u = o - (a.left || 0) - (a.right || 0),
            c = (0, uo.z)({ children: i, legendWidth: u });
          if (c) {
            var l = r || {},
              s = l.width,
              f = l.height,
              p = c.align,
              h = c.verticalAlign,
              d = c.layout;
            if (
              ("vertical" === d || ("horizontal" === d && "middle" === h)) &&
              "center" !== p &&
              (0, oo.hj)(t[p])
            )
              return so(so({}, t), {}, fo({}, p, t[p] + (s || 0)));
            if (
              ("horizontal" === d || ("vertical" === d && "center" === p)) &&
              "middle" !== h &&
              (0, oo.hj)(t[h])
            )
              return so(so({}, t), {}, fo({}, h, t[h] + (f || 0)));
          }
          return t;
        },
        Oo = function (t, e, n, r, i) {
          var o = e.props.children,
            a = (0, ao.NN)(o, io.W).filter(function (t) {
              return (function (t, e, n) {
                return (
                  !!yi()(e) ||
                  ("horizontal" === t
                    ? "yAxis" === e
                    : "vertical" === t || "x" === n
                      ? "xAxis" === e
                      : "y" !== n || "yAxis" === e)
                );
              })(r, i, t.props.direction);
            });
          if (a && a.length) {
            var u = a.map(function (t) {
              return t.props.dataKey;
            });
            return t.reduce(
              function (t, e) {
                var r = yo(e, n, 0),
                  i = Array.isArray(r) ? [hi()(r), fi()(r)] : [r, r],
                  o = u.reduce(
                    function (t, n) {
                      var r = yo(e, n, 0),
                        o = i[0] - Math.abs(Array.isArray(r) ? r[0] : r),
                        a = i[1] + Math.abs(Array.isArray(r) ? r[1] : r);
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
        jo = function (t, e, n, r, i) {
          var o = e
            .map(function (e) {
              return Oo(t, e, n, i, r);
            })
            .filter(function (t) {
              return !yi()(t);
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
        So = function (t, e, n, r, i) {
          var o = e.map(function (e) {
            var o = e.props.dataKey;
            return ("number" === n && o && Oo(t, e, o, r)) || vo(t, o, n, i);
          });
          if ("number" === n)
            return o.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0],
            );
          var a = {};
          return o.reduce(function (t, e) {
            for (var n = 0, r = e.length; n < r; n++)
              a[e[n]] || ((a[e[n]] = !0), t.push(e[n]));
            return t;
          }, []);
        },
        Eo = function (t, e) {
          return (
            ("horizontal" === t && "xAxis" === e) ||
            ("vertical" === t && "yAxis" === e) ||
            ("centric" === t && "angleAxis" === e) ||
            ("radial" === t && "radiusAxis" === e)
          );
        },
        Ao = function (t, e, n, r) {
          if (r)
            return t.map(function (t) {
              return t.coordinate;
            });
          var i,
            o,
            a = t.map(function (t) {
              return (
                t.coordinate === e && (i = !0),
                t.coordinate === n && (o = !0),
                t.coordinate
              );
            });
          return i || a.push(e), o || a.push(n), a;
        },
        Po = function (t, e, n) {
          if (!t) return null;
          var r = t.scale,
            i = t.duplicateDomain,
            o = t.type,
            a = t.range,
            u = "scaleBand" === t.realScaleType ? r.bandwidth() / 2 : 2,
            c =
              (e || n) && "category" === o && r.bandwidth
                ? r.bandwidth() / u
                : 0;
          return (
            (c =
              "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2
                ? 2 * (0, oo.uY)(a[0] - a[1]) * c
                : c),
            e && (t.ticks || t.niceTicks)
              ? (t.ticks || t.niceTicks)
                  .map(function (t) {
                    var e = i ? i.indexOf(t) : t;
                    return { coordinate: r(e) + c, value: t, offset: c };
                  })
                  .filter(function (t) {
                    return !Ei()(t.coordinate);
                  })
              : t.isCategorical && t.categoricalDomain
                ? t.categoricalDomain.map(function (t, e) {
                    return {
                      coordinate: r(t) + c,
                      value: t,
                      index: e,
                      offset: c,
                    };
                  })
                : r.ticks && !n
                  ? r.ticks(t.tickCount).map(function (t) {
                      return { coordinate: r(t) + c, value: t, offset: c };
                    })
                  : r.domain().map(function (t, e) {
                      return {
                        coordinate: r(t) + c,
                        value: i ? i[t] : t,
                        index: e,
                        offset: c,
                      };
                    })
          );
        },
        ko = new WeakMap(),
        Mo = function (t, e) {
          if ("function" != typeof e) return t;
          ko.has(t) || ko.set(t, new WeakMap());
          var n = ko.get(t);
          if (n.has(e)) return n.get(e);
          var r = function () {
            t.apply(void 0, arguments), e.apply(void 0, arguments);
          };
          return n.set(e, r), r;
        },
        To = function (t, e, n) {
          var o = t.scale,
            a = t.type,
            u = t.layout,
            c = t.axisType;
          if ("auto" === o)
            return "radial" === u && "radiusAxis" === c
              ? { scale: i.Z(), realScaleType: "band" }
              : "radial" === u && "angleAxis" === c
                ? { scale: Zt(), realScaleType: "linear" }
                : "category" === a &&
                    e &&
                    (e.indexOf("LineChart") >= 0 ||
                      e.indexOf("AreaChart") >= 0 ||
                      (e.indexOf("ComposedChart") >= 0 && !n))
                  ? { scale: i.x(), realScaleType: "point" }
                  : "category" === a
                    ? { scale: i.Z(), realScaleType: "band" }
                    : { scale: Zt(), realScaleType: "linear" };
          if (bi()(o)) {
            var l = "scale".concat(Pi()(o));
            return {
              scale: (r[l] || i.x)(),
              realScaleType: r[l] ? l : "point",
            };
          }
          return mi()(o)
            ? { scale: o }
            : { scale: i.x(), realScaleType: "point" };
        },
        _o = 1e-4,
        Co = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var n = e.length,
              r = t.range(),
              i = Math.min(r[0], r[1]) - _o,
              o = Math.max(r[0], r[1]) + _o,
              a = t(e[0]),
              u = t(e[n - 1]);
            (a < i || a > o || u < i || u > o) && t.domain([e[0], e[n - 1]]);
          }
        },
        No = function (t, e) {
          if (!t) return null;
          for (var n = 0, r = t.length; n < r; n++)
            if (t[n].item === e) return t[n].position;
          return null;
        },
        Do = function (t, e) {
          if (!e || 2 !== e.length || !(0, oo.hj)(e[0]) || !(0, oo.hj)(e[1]))
            return t;
          var n = Math.min(e[0], e[1]),
            r = Math.max(e[0], e[1]),
            i = [t[0], t[1]];
          return (
            (!(0, oo.hj)(t[0]) || t[0] < n) && (i[0] = n),
            (!(0, oo.hj)(t[1]) || t[1] > r) && (i[1] = r),
            i[0] > r && (i[0] = r),
            i[1] < n && (i[1] = n),
            i
          );
        },
        Io = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var i = 0, o = 0, a = 0; a < e; ++a) {
                  var u = Ei()(t[a][n][1]) ? t[a][n][0] : t[a][n][1];
                  u >= 0
                    ? ((t[a][n][0] = i), (t[a][n][1] = i + u), (i = t[a][n][1]))
                    : ((t[a][n][0] = o),
                      (t[a][n][1] = o + u),
                      (o = t[a][n][1]));
                }
          },
          expand: function (t, e) {
            if ((r = t.length) > 0) {
              for (var n, r, i, o = 0, a = t[0].length; o < a; ++o) {
                for (i = n = 0; n < r; ++n) i += t[n][o][1] || 0;
                if (i) for (n = 0; n < r; ++n) t[n][o][1] /= i;
              }
              ii(t, e);
            }
          },
          none: ii,
          silhouette: function (t, e) {
            if ((n = t.length) > 0) {
              for (var n, r = 0, i = t[e[0]], o = i.length; r < o; ++r) {
                for (var a = 0, u = 0; a < n; ++a) u += t[a][r][1] || 0;
                i[r][1] += i[r][0] = -u / 2;
              }
              ii(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((i = t.length) > 0 && (r = (n = t[e[0]]).length) > 0) {
              for (var n, r, i, o = 0, a = 1; a < r; ++a) {
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
                (n[a - 1][1] += n[a - 1][0] = o), c && (o -= l / c);
              }
              (n[a - 1][1] += n[a - 1][0] = o), ii(t, e);
            }
          },
          positive: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var i = 0, o = 0; o < e; ++o) {
                  var a = Ei()(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
                  a >= 0
                    ? ((t[o][n][0] = i), (t[o][n][1] = i + a), (i = t[o][n][1]))
                    : ((t[o][n][0] = 0), (t[o][n][1] = 0));
                }
          },
        },
        Bo = function (t, e, n) {
          var r = e.map(function (t) {
              return t.props.dataKey;
            }),
            i = Io[n],
            o = (function () {
              var t = (0, ai.Z)([]),
                e = ui,
                n = ii,
                r = ci;
              function i(i) {
                var o,
                  a,
                  u = Array.from(t.apply(this, arguments), li),
                  c = u.length,
                  l = -1;
                for (const t of i)
                  for (o = 0, ++l; o < c; ++o)
                    (u[o][l] = [0, +r(t, u[o].key, l, i)]).data = t;
                for (o = 0, a = (0, oi.Z)(e(u)); o < c; ++o) u[a[o]].index = o;
                return n(u, a), u;
              }
              return (
                (i.keys = function (e) {
                  return arguments.length
                    ? ((t =
                        "function" == typeof e ? e : (0, ai.Z)(Array.from(e))),
                      i)
                    : t;
                }),
                (i.value = function (t) {
                  return arguments.length
                    ? ((r = "function" == typeof t ? t : (0, ai.Z)(+t)), i)
                    : r;
                }),
                (i.order = function (t) {
                  return arguments.length
                    ? ((e =
                        null == t
                          ? ui
                          : "function" == typeof t
                            ? t
                            : (0, ai.Z)(Array.from(t))),
                      i)
                    : e;
                }),
                (i.offset = function (t) {
                  return arguments.length ? ((n = null == t ? ii : t), i) : n;
                }),
                i
              );
            })()
              .keys(r)
              .value(function (t, e) {
                return +yo(t, e, 0);
              })
              .order(ui)
              .offset(i);
          return o(t);
        },
        Lo = function (t, e, n, r, i, o) {
          if (!t) return null;
          var a = (o ? e.reverse() : e).reduce(function (t, e) {
            var i = e.props,
              o = i.stackId;
            if (i.hide) return t;
            var a = e.props[n],
              u = t[a] || { hasStack: !1, stackGroups: {} };
            if ((0, oo.P2)(o)) {
              var c = u.stackGroups[o] || {
                numericAxisId: n,
                cateAxisId: r,
                items: [],
              };
              c.items.push(e), (u.hasStack = !0), (u.stackGroups[o] = c);
            } else
              u.stackGroups[(0, oo.EL)("_stackId_")] = {
                numericAxisId: n,
                cateAxisId: r,
                items: [e],
              };
            return so(so({}, t), {}, fo({}, a, u));
          }, {});
          return Object.keys(a).reduce(function (e, o) {
            var u = a[o];
            if (u.hasStack) {
              u.stackGroups = Object.keys(u.stackGroups).reduce(function (
                e,
                o,
              ) {
                var a = u.stackGroups[o];
                return so(
                  so({}, e),
                  {},
                  fo({}, o, {
                    numericAxisId: n,
                    cateAxisId: r,
                    items: a.items,
                    stackedData: Bo(t, a.items, i),
                  }),
                );
              }, {});
            }
            return so(so({}, e), {}, fo({}, o, u));
          }, {});
        },
        Ro = function (t, e) {
          var n = e.realScaleType,
            r = e.type,
            i = e.tickCount,
            o = e.originalDomain,
            a = e.allowDecimals,
            u = n || e.scale;
          if ("auto" !== u && "linear" !== u) return null;
          if (
            i &&
            "number" === r &&
            o &&
            ("auto" === o[0] || "auto" === o[1])
          ) {
            var c = t.domain();
            if (!c.length) return null;
            var l = no(c, i, a);
            return t.domain([hi()(l), fi()(l)]), { niceTicks: l };
          }
          if (i && "number" === r) {
            var s = t.domain();
            return { niceTicks: ro(s, i, a) };
          }
          return null;
        },
        zo = function (t) {
          var e = t.axis,
            n = t.ticks,
            r = t.bandSize,
            i = t.entry,
            o = t.index,
            a = t.dataKey;
          if ("category" === e.type) {
            if (
              !e.allowDuplicatedCategory &&
              e.dataKey &&
              !yi()(i[e.dataKey])
            ) {
              var u = (0, oo.Ap)(n, "value", i[e.dataKey]);
              if (u) return u.coordinate + r / 2;
            }
            return n[o] ? n[o].coordinate + r / 2 : null;
          }
          var c = yo(i, yi()(a) ? e.dataKey : a);
          return yi()(c) ? null : e.scale(c);
        },
        Uo = function (t) {
          var e = t.axis,
            n = t.ticks,
            r = t.offset,
            i = t.bandSize,
            o = t.entry,
            a = t.index;
          if ("category" === e.type) return n[a] ? n[a].coordinate + r : null;
          var u = yo(o, e.dataKey, e.domain[a]);
          return yi()(u) ? null : e.scale(u) - i / 2 + r;
        },
        Fo = function (t) {
          var e = t.numericAxis,
            n = e.scale.domain();
          if ("number" === e.type) {
            var r = Math.min(n[0], n[1]),
              i = Math.max(n[0], n[1]);
            return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
          }
          return n[0];
        },
        $o = function (t, e) {
          var n = t.props.stackId;
          if ((0, oo.P2)(n)) {
            var r = e[n];
            if (r) {
              var i = r.items.indexOf(t);
              return i >= 0 ? r.stackedData[i] : null;
            }
          }
          return null;
        },
        Wo = function (t, e, n) {
          return Object.keys(t)
            .reduce(
              function (r, i) {
                var o = t[i].stackedData.reduce(
                  function (t, r) {
                    var i = r.slice(e, n + 1).reduce(
                      function (t, e) {
                        return [
                          hi()(e.concat([t[0]]).filter(oo.hj)),
                          fi()(e.concat([t[1]]).filter(oo.hj)),
                        ];
                      },
                      [1 / 0, -1 / 0],
                    );
                    return [Math.min(t[0], i[0]), Math.max(t[1], i[1])];
                  },
                  [1 / 0, -1 / 0],
                );
                return [Math.min(o[0], r[0]), Math.max(o[1], r[1])];
              },
              [1 / 0, -1 / 0],
            )
            .map(function (t) {
              return t === 1 / 0 || t === -1 / 0 ? 0 : t;
            });
        },
        Zo = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        qo = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        Ho = function (t, e, n) {
          if (mi()(t)) return t(e, n);
          if (!Array.isArray(t)) return e;
          var r = [];
          if ((0, oo.hj)(t[0])) r[0] = n ? t[0] : Math.min(t[0], e[0]);
          else if (Zo.test(t[0])) {
            var i = +Zo.exec(t[0])[1];
            r[0] = e[0] - i;
          } else mi()(t[0]) ? (r[0] = t[0](e[0])) : (r[0] = e[0]);
          if ((0, oo.hj)(t[1])) r[1] = n ? t[1] : Math.max(t[1], e[1]);
          else if (qo.test(t[1])) {
            var o = +qo.exec(t[1])[1];
            r[1] = e[1] + o;
          } else mi()(t[1]) ? (r[1] = t[1](e[1])) : (r[1] = e[1]);
          return r;
        },
        Go = function (t, e, n) {
          if (t && t.scale && t.scale.bandwidth) {
            var r = t.scale.bandwidth();
            if (!n || r > 0) return r;
          }
          if (t && e && e.length >= 2) {
            for (
              var i = _i()(e, function (t) {
                  return t.coordinate;
                }),
                o = 1 / 0,
                a = 1,
                u = i.length;
              a < u;
              a++
            ) {
              var c = i[a],
                l = i[a - 1];
              o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o);
            }
            return o === 1 / 0 ? 0 : o;
          }
          return n ? void 0 : 0;
        },
        Xo = function (t, e, n) {
          return t && t.length
            ? Mi()(t, wi()(n, "type.defaultProps.domain"))
              ? e
              : t
            : e;
        },
        Yo = function (t, e) {
          var n = t.props,
            r = n.dataKey,
            i = n.name,
            o = n.unit,
            a = n.formatter,
            u = n.tooltipType,
            c = n.chartType;
          return so(
            so({}, (0, ao.L6)(t)),
            {},
            {
              dataKey: r,
              unit: o,
              formatter: a,
              name: i || r,
              color: go(t),
              value: yo(e, r),
              type: u,
              payload: e,
              chartType: c,
            },
          );
        };
    },
    12605: (t, e, n) => {
      "use strict";
      n.d(e, { os: () => p, xE: () => f });
      var r = n(77125);
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
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                u(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function u(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== i(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== i(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === i(e) ? e : String(e);
          })(e)) in t
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
      var c = { widthCache: {}, cacheCount: 0 },
        l = {
          position: "absolute",
          top: "-20000px",
          left: 0,
          padding: 0,
          margin: 0,
          border: "none",
          whiteSpace: "pre",
        },
        s = "recharts_measurement_span";
      var f = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null == t || r.x.isSsr) return { width: 0, height: 0 };
          var n,
            i =
              ((n = a({}, e)),
              Object.keys(n).forEach(function (t) {
                n[t] || delete n[t];
              }),
              n),
            o = JSON.stringify({ text: t, copyStyle: i });
          if (c.widthCache[o]) return c.widthCache[o];
          try {
            var u = document.getElementById(s);
            u ||
              ((u = document.createElement("span")).setAttribute("id", s),
              u.setAttribute("aria-hidden", "true"),
              document.body.appendChild(u));
            var f = a(a({}, l), i);
            Object.assign(u.style, f), (u.textContent = "".concat(t));
            var p = u.getBoundingClientRect(),
              h = { width: p.width, height: p.height };
            return (
              (c.widthCache[o] = h),
              ++c.cacheCount > 2e3 && ((c.cacheCount = 0), (c.widthCache = {})),
              h
            );
          } catch (t) {
            return { width: 0, height: 0 };
          }
        },
        p = function (t) {
          return {
            top: t.top + window.scrollY - document.documentElement.clientTop,
            left: t.left + window.scrollX - document.documentElement.clientLeft,
          };
        };
    },
    76325: (t, e, n) => {
      "use strict";
      n.d(e, {
        Ap: () => w,
        EL: () => v,
        Kt: () => g,
        P2: () => d,
        bv: () => b,
        h1: () => m,
        hU: () => p,
        hj: () => h,
        k4: () => x,
        uY: () => f,
        wr: () => O,
      });
      var r = n(30392),
        i = n.n(r),
        o = n(98176),
        a = n.n(o),
        u = n(18310),
        c = n.n(u),
        l = n(554),
        s = n.n(l),
        f = function (t) {
          return 0 === t ? 0 : t > 0 ? 1 : -1;
        },
        p = function (t) {
          return i()(t) && t.indexOf("%") === t.length - 1;
        },
        h = function (t) {
          return s()(t) && !a()(t);
        },
        d = function (t) {
          return h(t) || i()(t);
        },
        y = 0,
        v = function (t) {
          var e = ++y;
          return "".concat(t || "").concat(e);
        },
        m = function (t, e) {
          var n,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!h(t) && !i()(t)) return r;
          if (p(t)) {
            var u = t.indexOf("%");
            n = (e * parseFloat(t.slice(0, u))) / 100;
          } else n = +t;
          return a()(n) && (n = r), o && n > e && (n = e), n;
        },
        g = function (t) {
          if (!t) return null;
          var e = Object.keys(t);
          return e && e.length ? t[e[0]] : null;
        },
        b = function (t) {
          if (!Array.isArray(t)) return !1;
          for (var e = t.length, n = {}, r = 0; r < e; r++) {
            if (n[t[r]]) return !0;
            n[t[r]] = !0;
          }
          return !1;
        },
        x = function (t, e) {
          return h(t) && h(e)
            ? function (n) {
                return t + n * (e - t);
              }
            : function () {
                return e;
              };
        };
      function w(t, e, n) {
        return t && t.length
          ? t.find(function (t) {
              return t && ("function" == typeof e ? e(t) : c()(t, e)) === n;
            })
          : null;
      }
      var O = function (t) {
        if (!t || !t.length) return null;
        for (
          var e = t.length,
            n = 0,
            r = 0,
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
          (n += c = t[s].cx || 0),
            (r += l = t[s].cy || 0),
            (i += c * l),
            (o += c * c),
            (a = Math.min(a, c)),
            (u = Math.max(u, c));
        var f = e * o != n * n ? (e * i - n * r) / (e * o - n * n) : 0;
        return { xmin: a, xmax: u, a: f, b: (r - f * n) / e };
      };
    },
    77125: (t, e, n) => {
      "use strict";
      n.d(e, { x: () => r });
      var r = {
        isSsr: !(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement &&
          window.setTimeout
        ),
        get: function (t) {
          return r[t];
        },
        set: function (t, e) {
          if ("string" == typeof t) r[t] = e;
          else {
            var n = Object.keys(t);
            n &&
              n.length &&
              n.forEach(function (e) {
                r[e] = t[e];
              });
          }
        },
      };
    },
    75658: (t, e, n) => {
      "use strict";
      n.d(e, { B: () => r });
      var r = function (t, e) {
        var n = t.alwaysShow,
          r = t.ifOverflow;
        return n && (r = "extendDomain"), r === e;
      };
    },
    90481: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => r });
      var r = function (t, e) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
          i < n;
          i++
        )
          r[i - 2] = arguments[i];
      };
    },
    53460: (t, e, n) => {
      "use strict";
      n.d(e, {
        $4: () => v,
        Wk: () => h,
        op: () => y,
        t9: () => m,
        z3: () => x,
      });
      var r = n(38716),
        i = n.n(r),
        o = n(76325),
        a = n(70416);
      function u(t) {
        return (
          (u =
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
          u(t)
        );
      }
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function s(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== u(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== u(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === u(e) ? e : String(e);
          })(e)) in t
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
      function f(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (i = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
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
            if ("string" == typeof t) return p(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return p(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function p(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var h = Math.PI / 180,
        d = function (t) {
          return (180 * t) / Math.PI;
        },
        y = function (t, e, n, r) {
          return { x: t + Math.cos(-h * r) * n, y: e + Math.sin(-h * r) * n };
        },
        v = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { top: 0, right: 0, bottom: 0, left: 0 };
          return (
            Math.min(
              Math.abs(t - (n.left || 0) - (n.right || 0)),
              Math.abs(e - (n.top || 0) - (n.bottom || 0)),
            ) / 2
          );
        },
        m = function (t, e, n, r, u) {
          var c = t.width,
            p = t.height,
            h = t.startAngle,
            d = t.endAngle,
            y = (0, o.h1)(t.cx, c, c / 2),
            m = (0, o.h1)(t.cy, p, p / 2),
            g = v(c, p, n),
            b = (0, o.h1)(t.innerRadius, g, 0),
            x = (0, o.h1)(t.outerRadius, g, 0.8 * g);
          return Object.keys(e).reduce(function (t, n) {
            var o,
              c = e[n],
              p = c.domain,
              v = c.reversed;
            if (i()(c.range))
              "angleAxis" === r
                ? (o = [h, d])
                : "radiusAxis" === r && (o = [b, x]),
                v && (o = [o[1], o[0]]);
            else {
              var g = f((o = c.range), 2);
              (h = g[0]), (d = g[1]);
            }
            var w = (0, a.Hq)(c, u),
              O = w.realScaleType,
              j = w.scale;
            j.domain(p).range(o), (0, a.zF)(j);
            var S = (0, a.g$)(j, l(l({}, c), {}, { realScaleType: O })),
              E = l(
                l(l({}, c), S),
                {},
                {
                  range: o,
                  radius: x,
                  realScaleType: O,
                  scale: j,
                  cx: y,
                  cy: m,
                  innerRadius: b,
                  outerRadius: x,
                  startAngle: h,
                  endAngle: d,
                },
              );
            return l(l({}, t), {}, s({}, n, E));
          }, {});
        },
        g = function (t, e) {
          var n,
            r,
            i,
            o,
            a,
            u,
            c = t.x,
            l = t.y,
            s = e.cx,
            f = e.cy,
            p =
              ((r = { x: s, y: f }),
              (i = (n = { x: c, y: l }).x),
              (o = n.y),
              (a = r.x),
              (u = r.y),
              Math.sqrt(Math.pow(i - a, 2) + Math.pow(o - u, 2)));
          if (p <= 0) return { radius: p };
          var h = (c - s) / p,
            y = Math.acos(h);
          return (
            l > f && (y = 2 * Math.PI - y),
            { radius: p, angle: d(y), angleInRadian: y }
          );
        },
        b = function (t, e) {
          var n = e.startAngle,
            r = e.endAngle,
            i = Math.floor(n / 360),
            o = Math.floor(r / 360);
          return t + 360 * Math.min(i, o);
        },
        x = function (t, e) {
          var n = t.x,
            r = t.y,
            i = g({ x: n, y: r }, e),
            o = i.radius,
            a = i.angle,
            u = e.innerRadius,
            c = e.outerRadius;
          if (o < u || o > c) return !1;
          if (0 === o) return !0;
          var s,
            f = (function (t) {
              var e = t.startAngle,
                n = t.endAngle,
                r = Math.floor(e / 360),
                i = Math.floor(n / 360),
                o = Math.min(r, i);
              return { startAngle: e - 360 * o, endAngle: n - 360 * o };
            })(e),
            p = f.startAngle,
            h = f.endAngle,
            d = a;
          if (p <= h) {
            for (; d > h; ) d -= 360;
            for (; d < p; ) d += 360;
            s = d >= p && d <= h;
          } else {
            for (; d > p; ) d -= 360;
            for (; d < h; ) d += 360;
            s = d >= h && d <= p;
          }
          return s ? l(l({}, e), {}, { radius: o, angle: b(d, e) }) : null;
        };
    },
    94797: (t, e, n) => {
      "use strict";
      n.d(e, {
        $R: () => R,
        $k: () => C,
        Bh: () => L,
        Gf: () => j,
        L6: () => N,
        NN: () => P,
        TT: () => M,
        eu: () => B,
        rL: () => D,
        sP: () => k,
      });
      var r = n(18310),
        i = n.n(r),
        o = n(38716),
        a = n.n(o),
        u = n(30392),
        c = n.n(u),
        l = n(8889),
        s = n.n(l),
        f = n(60486),
        p = n.n(f),
        h = n(47427),
        d = n(5502),
        y = n(76325),
        v = n(31917),
        m = n(81156),
        g = ["children"],
        b = ["children"];
      function x(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      function w(t) {
        return (
          (w =
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
          w(t)
        );
      }
      var O = {
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
        S = null,
        E = null,
        A = function t(e) {
          if (e === S && Array.isArray(E)) return E;
          var n = [];
          return (
            h.Children.forEach(e, function (e) {
              a()(e) ||
                ((0, d.isFragment)(e)
                  ? (n = n.concat(t(e.props.children)))
                  : n.push(e));
            }),
            (E = n),
            (S = e),
            n
          );
        };
      function P(t, e) {
        var n = [],
          r = [];
        return (
          (r = Array.isArray(e)
            ? e.map(function (t) {
                return j(t);
              })
            : [j(e)]),
          A(t).forEach(function (t) {
            var e = i()(t, "type.displayName") || i()(t, "type.name");
            -1 !== r.indexOf(e) && n.push(t);
          }),
          n
        );
      }
      function k(t, e) {
        var n = P(t, e);
        return n && n[0];
      }
      var M = function (t) {
          if (!t || !t.props) return !1;
          var e = t.props,
            n = e.width,
            r = e.height;
          return !(!(0, y.hj)(n) || n <= 0 || !(0, y.hj)(r) || r <= 0);
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
        _ = function (t) {
          return t && t.type && c()(t.type) && T.indexOf(t.type) >= 0;
        },
        C = function (t) {
          return t && "object" === w(t) && "cx" in t && "cy" in t && "r" in t;
        },
        N = function (t, e, n) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var r = t;
          if (((0, h.isValidElement)(t) && (r = t.props), !p()(r))) return null;
          var i = {};
          return (
            Object.keys(r).forEach(function (t) {
              var o;
              (function (t, e, n, r) {
                var i,
                  o =
                    null !==
                      (i =
                        null === m.ry || void 0 === m.ry ? void 0 : m.ry[r]) &&
                    void 0 !== i
                      ? i
                      : [];
                return (
                  (!s()(t) && ((r && o.includes(e)) || m.Yh.includes(e))) ||
                  (n && m.nv.includes(e))
                );
              })(null === (o = r) || void 0 === o ? void 0 : o[t], t, e, n) &&
                (i[t] = r[t]);
            }),
            i
          );
        },
        D = function t(e, n) {
          if (e === n) return !0;
          var r = h.Children.count(e);
          if (r !== h.Children.count(n)) return !1;
          if (0 === r) return !0;
          if (1 === r)
            return I(Array.isArray(e) ? e[0] : e, Array.isArray(n) ? n[0] : n);
          for (var i = 0; i < r; i++) {
            var o = e[i],
              a = n[i];
            if (Array.isArray(o) || Array.isArray(a)) {
              if (!t(o, a)) return !1;
            } else if (!I(o, a)) return !1;
          }
          return !0;
        },
        I = function (t, e) {
          if (a()(t) && a()(e)) return !0;
          if (!a()(t) && !a()(e)) {
            var n = t.props || {},
              r = n.children,
              i = x(n, g),
              o = e.props || {},
              u = o.children,
              c = x(o, b);
            return r && u
              ? (0, v.w)(i, c) && D(r, u)
              : !r && !u && (0, v.w)(i, c);
          }
          return !1;
        },
        B = function (t, e) {
          var n = [],
            r = {};
          return (
            A(t).forEach(function (t, i) {
              if (_(t)) n.push(t);
              else if (t) {
                var o = j(t.type),
                  a = e[o] || {},
                  u = a.handler,
                  c = a.once;
                if (u && (!c || !r[o])) {
                  var l = u(t, o, i);
                  n.push(l), (r[o] = !0);
                }
              }
            }),
            n
          );
        },
        L = function (t) {
          var e = t && t.type;
          return e && O[e] ? O[e] : null;
        },
        R = function (t, e) {
          return A(e).indexOf(t);
        };
    },
    31917: (t, e, n) => {
      "use strict";
      function r(t, e) {
        for (var n in t)
          if (
            {}.hasOwnProperty.call(t, n) &&
            (!{}.hasOwnProperty.call(e, n) || t[n] !== e[n])
          )
            return !1;
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r) && !{}.hasOwnProperty.call(t, r))
            return !1;
        return !0;
      }
      n.d(e, { w: () => r });
    },
    52255: (t, e, n) => {
      "use strict";
      n.d(e, { z: () => s });
      var r = n(88579),
        i = n(70416),
        o = n(94797);
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
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                l(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function l(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== a(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== a(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === a(e) ? e : String(e);
          })(e)) in t
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
      var s = function (t) {
        var e,
          n = t.children,
          a = t.formattedGraphicalItems,
          u = t.legendWidth,
          l = t.legendContent,
          s = (0, o.sP)(n, r.D);
        return s
          ? ((e =
              s.props && s.props.payload
                ? s.props && s.props.payload
                : "children" === l
                  ? (a || []).reduce(function (t, e) {
                      var n = e.item,
                        r = e.props,
                        i = r.sectors || r.data || [];
                      return t.concat(
                        i.map(function (t) {
                          return {
                            type: s.props.iconType || n.props.legendType,
                            value: t.name,
                            color: t.fill,
                            payload: t,
                          };
                        }),
                      );
                    }, [])
                  : (a || []).map(function (t) {
                      var e = t.item,
                        n = e.props,
                        r = n.dataKey,
                        o = n.name,
                        a = n.legendType;
                      return {
                        inactive: n.hide,
                        dataKey: r,
                        type: s.props.iconType || a || "square",
                        color: (0, i.fk)(e),
                        value: o || r,
                        payload: e.props,
                      };
                    })),
            c(
              c(c({}, s.props), r.D.getWithHeight(s, u)),
              {},
              { payload: e, item: s },
            ))
          : null;
      };
    },
    60674: (t, e, n) => {
      "use strict";
      n.d(e, { z: () => u });
      var r = n(87518),
        i = n.n(r),
        o = n(8889),
        a = n.n(o);
      function u(t, e, n) {
        return !0 === e ? i()(t, n) : a()(e) ? i()(t, e) : t;
      }
    },
    81156: (t, e, n) => {
      "use strict";
      n.d(e, {
        Yh: () => u,
        Ym: () => f,
        bw: () => p,
        nv: () => s,
        ry: () => l,
      });
      var r = n(47427),
        i = n(60486),
        o = n.n(i);
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
          var n = t;
          if (((0, r.isValidElement)(t) && (n = t.props), !o()(n))) return null;
          var i = {};
          return (
            Object.keys(n).forEach(function (t) {
              s.includes(t) &&
                (i[t] =
                  e ||
                  function (e) {
                    return n[t](n, e);
                  });
            }),
            i
          );
        },
        p = function (t, e, n) {
          if (!o()(t) || "object" !== a(t)) return null;
          var r = null;
          return (
            Object.keys(t).forEach(function (i) {
              var o = t[i];
              s.includes(i) &&
                "function" == typeof o &&
                (r || (r = {}),
                (r[i] = (function (t, e, n) {
                  return function (r) {
                    return t(e, n, r), null;
                  };
                })(o, e, n)));
            }),
            r
          );
        };
    },
    22025: (t, e) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        u = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        l = n ? Symbol.for("react.context") : 60110,
        s = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        d = n ? Symbol.for("react.suspense_list") : 60120,
        y = n ? Symbol.for("react.memo") : 60115,
        v = n ? Symbol.for("react.lazy") : 60116,
        m = n ? Symbol.for("react.block") : 60121,
        g = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        x = n ? Symbol.for("react.scope") : 60119;
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function w(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case r:
              switch ((t = t.type)) {
                case s:
                case f:
                case o:
                case u:
                case a:
                case h:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case p:
                    case v:
                    case y:
                    case c:
                      return t;
                    default:
                      return e;
                  }
              }
            case i:
              return e;
          }
        }
      }
      function O(t) {
        return w(t) === f;
      }
      (e.isElement = function (t) {
        return "object" == typeof t && null !== t && t.$$typeof === r;
      }),
        (e.isFragment = function (t) {
          return w(t) === o;
        });
    },
    5502: (t, e, n) => {
      "use strict";
      t.exports = n(22025);
    },
    32224: (t) => {
      (t.exports = function (t) {
        return t && t.__esModule ? t : { default: t };
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    84148: (t, e, n) => {
      "use strict";
      function r(t) {
        var e,
          n,
          i = "";
        if ("string" == typeof t || "number" == typeof t) i += t;
        else if ("object" == typeof t)
          if (Array.isArray(t)) {
            var o = t.length;
            for (e = 0; e < o; e++)
              t[e] && (n = r(t[e])) && (i && (i += " "), (i += n));
          } else for (n in t) t[n] && (i && (i += " "), (i += n));
        return i;
      }
      n.d(e, { Z: () => i });
      const i = function () {
        for (var t, e, n = 0, i = "", o = arguments.length; n < o; n++)
          (t = arguments[n]) && (e = r(t)) && (i && (i += " "), (i += e));
        return i;
      };
    },
    9756: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => o, x: () => u });
      var r = n(80560),
        i = n(54328);
      function o() {
        var t,
          e,
          n = (0, i.Z)().unknown(void 0),
          a = n.domain,
          u = n.range,
          c = 0,
          l = 1,
          s = !1,
          f = 0,
          p = 0,
          h = 0.5;
        function d() {
          var n = a().length,
            r = l < c,
            i = r ? l : c,
            o = r ? c : l;
          (t = (o - i) / Math.max(1, n - f + 2 * p)),
            s && (t = Math.floor(t)),
            (i += (o - i - t * (n - f)) * h),
            (e = t * (1 - f)),
            s && ((i = Math.round(i)), (e = Math.round(e)));
          var d = (function (t, e, n) {
            (t = +t),
              (e = +e),
              (n =
                (i = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : i < 3
                    ? 1
                    : +n);
            for (
              var r = -1,
                i = 0 | Math.max(0, Math.ceil((e - t) / n)),
                o = new Array(i);
              ++r < i;

            )
              o[r] = t + r * n;
            return o;
          })(n).map(function (e) {
            return i + t * e;
          });
          return u(r ? d.reverse() : d);
        }
        return (
          delete n.unknown,
          (n.domain = function (t) {
            return arguments.length ? (a(t), d()) : a();
          }),
          (n.range = function (t) {
            return arguments.length
              ? (([c, l] = t), (c = +c), (l = +l), d())
              : [c, l];
          }),
          (n.rangeRound = function (t) {
            return ([c, l] = t), (c = +c), (l = +l), (s = !0), d();
          }),
          (n.bandwidth = function () {
            return e;
          }),
          (n.step = function () {
            return t;
          }),
          (n.round = function (t) {
            return arguments.length ? ((s = !!t), d()) : s;
          }),
          (n.padding = function (t) {
            return arguments.length ? ((f = Math.min(1, (p = +t))), d()) : f;
          }),
          (n.paddingInner = function (t) {
            return arguments.length ? ((f = Math.min(1, t)), d()) : f;
          }),
          (n.paddingOuter = function (t) {
            return arguments.length ? ((p = +t), d()) : p;
          }),
          (n.align = function (t) {
            return arguments.length
              ? ((h = Math.max(0, Math.min(1, t))), d())
              : h;
          }),
          (n.copy = function () {
            return o(a(), [c, l])
              .round(s)
              .paddingInner(f)
              .paddingOuter(p)
              .align(h);
          }),
          r.o.apply(d(), arguments)
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
    80560: (t, e, n) => {
      "use strict";
      function r(t, e) {
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
      n.d(e, { O: () => i, o: () => r });
    },
    54328: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => s, O: () => l });
      class r extends Map {
        constructor(t, e = u) {
          if (
            (super(),
            Object.defineProperties(this, {
              _intern: { value: new Map() },
              _key: { value: e },
            }),
            null != t)
          )
            for (const [e, n] of t) this.set(e, n);
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
      function i({ _intern: t, _key: e }, n) {
        const r = e(n);
        return t.has(r) ? t.get(r) : n;
      }
      function o({ _intern: t, _key: e }, n) {
        const r = e(n);
        return t.has(r) ? t.get(r) : (t.set(r, n), n);
      }
      function a({ _intern: t, _key: e }, n) {
        const r = e(n);
        return t.has(r) && ((n = t.get(r)), t.delete(r)), n;
      }
      function u(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
      }
      var c = n(80560);
      const l = Symbol("implicit");
      function s() {
        var t = new r(),
          e = [],
          n = [],
          i = l;
        function o(r) {
          let o = t.get(r);
          if (void 0 === o) {
            if (i !== l) return i;
            t.set(r, (o = e.push(r) - 1));
          }
          return n[o % n.length];
        }
        return (
          (o.domain = function (n) {
            if (!arguments.length) return e.slice();
            (e = []), (t = new r());
            for (const r of n) t.has(r) || t.set(r, e.push(r) - 1);
            return o;
          }),
          (o.range = function (t) {
            return arguments.length ? ((n = Array.from(t)), o) : n.slice();
          }),
          (o.unknown = function (t) {
            return arguments.length ? ((i = t), o) : i;
          }),
          (o.copy = function () {
            return s(e, n).unknown(i);
          }),
          c.o.apply(o, arguments),
          o
        );
      }
    },
    70479: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => r });
      Array.prototype.slice;
      function r(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
    },
    22015: (t, e, n) => {
      "use strict";
      function r(t) {
        return function () {
          return t;
        };
      }
      n.d(e, { Z: () => r });
    },
    79221: (t, e, n) => {
      "use strict";
      n.d(e, { d: () => l });
      const r = Math.PI,
        i = 2 * r,
        o = 1e-6,
        a = i - o;
      function u(t) {
        this._ += t[0];
        for (let e = 1, n = t.length; e < n; ++e) this._ += arguments[e] + t[e];
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
                    const n = 10 ** e;
                    return function (t) {
                      this._ += t[0];
                      for (let e = 1, r = t.length; e < r; ++e)
                        this._ += Math.round(arguments[e] * n) / n + t[e];
                    };
                  })(t));
        }
        moveTo(t, e) {
          this
            ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(t, e) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
        }
        quadraticCurveTo(t, e, n, r) {
          this._append`Q${+t},${+e},${(this._x1 = +n)},${(this._y1 = +r)}`;
        }
        bezierCurveTo(t, e, n, r, i, o) {
          this
            ._append`C${+t},${+e},${+n},${+r},${(this._x1 = +i)},${(this._y1 = +o)}`;
        }
        arcTo(t, e, n, i, a) {
          if (((t = +t), (e = +e), (n = +n), (i = +i), (a = +a) < 0))
            throw new Error(`negative radius: ${a}`);
          let u = this._x1,
            c = this._y1,
            l = n - t,
            s = i - e,
            f = u - t,
            p = c - e,
            h = f * f + p * p;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
          else if (h > o)
            if (Math.abs(p * l - s * f) > o && a) {
              let d = n - u,
                y = i - c,
                v = l * l + s * s,
                m = d * d + y * y,
                g = Math.sqrt(v),
                b = Math.sqrt(h),
                x =
                  a * Math.tan((r - Math.acos((v + h - m) / (2 * g * b))) / 2),
                w = x / b,
                O = x / g;
              Math.abs(w - 1) > o && this._append`L${t + w * f},${e + w * p}`,
                this
                  ._append`A${a},${a},0,0,${+(p * d > f * y)},${(this._x1 = t + O * l)},${(this._y1 = e + O * s)}`;
            } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
          else;
        }
        arc(t, e, n, u, c, l) {
          if (((t = +t), (e = +e), (l = !!l), (n = +n) < 0))
            throw new Error(`negative radius: ${n}`);
          let s = n * Math.cos(u),
            f = n * Math.sin(u),
            p = t + s,
            h = e + f,
            d = 1 ^ l,
            y = l ? u - c : c - u;
          null === this._x1
            ? this._append`M${p},${h}`
            : (Math.abs(this._x1 - p) > o || Math.abs(this._y1 - h) > o) &&
              this._append`L${p},${h}`,
            n &&
              (y < 0 && (y = (y % i) + i),
              y > a
                ? this
                    ._append`A${n},${n},0,1,${d},${t - s},${e - f}A${n},${n},0,1,${d},${(this._x1 = p)},${(this._y1 = h)}`
                : y > o &&
                  this
                    ._append`A${n},${n},0,${+(y >= r)},${d},${(this._x1 = t + n * Math.cos(c))},${(this._y1 = e + n * Math.sin(c))}`);
        }
        rect(t, e, n, r) {
          this
            ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}h${(n = +n)}v${+r}h${-n}Z`;
        }
        toString() {
          return this._;
        }
      }
      function l(t) {
        let e = 3;
        return (
          (t.digits = function (n) {
            if (!arguments.length) return e;
            if (null == n) e = null;
            else {
              const t = Math.floor(n);
              if (!(t >= 0)) throw new RangeError(`invalid digits: ${n}`);
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [744],
  {
    41721: function (t, e, n) {
      var r;
      /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */ !(function (
        o,
      ) {
        "use strict";
        var i,
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
            o,
            i,
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
            (o = e.e),
            (l = l.slice()),
            (i = a - o))
          ) {
            for (
              i < 0
                ? ((r = l), (i = -i), (u = s.length))
                : ((r = s), (o = a), (u = l.length)),
                i > (u = (a = Math.ceil(p / v)) > u ? a + 1 : u + 1) &&
                  ((i = u), (r.length = 1)),
                r.reverse();
              i--;

            )
              r.push(0);
            r.reverse();
          }
          for (
            (u = l.length) - (i = s.length) < 0 &&
              ((i = u), (r = s), (s = l), (l = r)),
              n = 0;
            i;

          )
            (n = ((l[--i] = l[i] + s[i] + n) / y) | 0), (l[i] %= y);
          for (n && (l.unshift(n), ++o), u = l.length; 0 == l[--u]; ) l.pop();
          return (e.d = l), (e.e = o), c ? T(e, p) : e;
        }
        function w(t, e, n) {
          if (t !== ~~t || t < e || t > n) throw Error(s + t);
        }
        function O(t) {
          var e,
            n,
            r,
            o = t.length - 1,
            i = "",
            a = t[0];
          if (o > 0) {
            for (i += a, e = 1; e < o; e++)
              (r = t[e] + ""), (n = v - r.length) && (i += A(n)), (i += r);
            (a = t[e]), (n = v - (r = a + "").length) && (i += A(n));
          } else if (0 === a) return "0";
          for (; a % 10 == 0; ) a /= 10;
          return i + a;
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
                o,
                i = this;
              if (((t = new i.constructor(t)), i.s !== t.s)) return i.s || -t.s;
              if (i.e !== t.e) return (i.e > t.e) ^ (i.s < 0) ? 1 : -1;
              for (
                e = 0, n = (r = i.d.length) < (o = t.d.length) ? r : o;
                e < n;
                ++e
              )
                if (i.d[e] !== t.d[e])
                  return (i.d[e] > t.d[e]) ^ (i.s < 0) ? 1 : -1;
              return r === o ? 0 : (r > o) ^ (i.s < 0) ? 1 : -1;
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
              return S(this, new this.constructor(t));
            }),
          (b.dividedToIntegerBy = b.idiv =
            function (t) {
              var e = this.constructor;
              return T(S(this, new e(t), 0, 1), e.precision);
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
                o = r.precision,
                a = o + 5;
              if (void 0 === t) t = new r(10);
              else if ((t = new r(t)).s < 1 || t.eq(i)) throw Error(l + "NaN");
              if (n.s < 1) throw Error(l + (n.s ? "NaN" : "-Infinity"));
              return n.eq(i)
                ? new r(0)
                : ((c = !1), (e = S(k(n, a), k(t, a), a)), (c = !0), T(e, o));
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
                o = r.precision;
              if (!(t = new r(t)).s) throw Error(l + "NaN");
              return n.s
                ? ((c = !1), (e = S(n, t, 0, 1).times(t)), (c = !0), n.minus(e))
                : T(new r(n), o);
            }),
          (b.naturalExponential = b.exp =
            function () {
              return j(this);
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
                o = this;
              if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
                throw Error(s + t);
              if (
                ((e = E(o) + 1),
                (n = (r = o.d.length - 1) * v + 1),
                (r = o.d[r]))
              ) {
                for (; r % 10 == 0; r /= 10) n--;
                for (r = o.d[0]; r >= 10; r /= 10) n++;
              }
              return t && e > n ? e : n;
            }),
          (b.squareRoot = b.sqrt =
            function () {
              var t,
                e,
                n,
                r,
                o,
                i,
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
                  0 == (o = Math.sqrt(+u)) || o == 1 / 0
                    ? (((e = O(u.d)).length + t) % 2 == 0 && (e += "0"),
                      (o = Math.sqrt(e)),
                      (t = p((t + 1) / 2) - (t < 0 || t % 2)),
                      (r = new s(
                        (e =
                          o == 1 / 0
                            ? "5e" + t
                            : (e = o.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1,
                              ) + t),
                      )))
                    : (r = new s(o.toString())),
                  o = a = (n = s.precision) + 3;
                ;

              )
                if (
                  ((r = (i = r).plus(S(u, i, a + 2)).times(0.5)),
                  O(i.d).slice(0, a) === (e = O(r.d)).slice(0, a))
                ) {
                  if (((e = e.slice(a - 3, a + 1)), o == a && "4999" == e)) {
                    if ((T(i, n + 1, 0), i.times(i).eq(u))) {
                      r = i;
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
                o,
                i,
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
                    ((i = h), (h = d), (d = i), (a = l), (l = s), (s = a)),
                  i = [],
                  r = a = l + s;
                r--;

              )
                i.push(0);
              for (r = s; --r >= 0; ) {
                for (e = 0, o = l + r; o > r; )
                  (u = i[o] + d[r] * h[o - r - 1] + e),
                    (i[o--] = u % y | 0),
                    (e = (u / y) | 0);
                i[o] = (i[o] + e) % y | 0;
              }
              for (; !i[--a]; ) i.pop();
              return (
                e ? ++n : i.shift(),
                (t.d = i),
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
              o = r.constructor;
            return (
              void 0 === t
                ? (n = C(r, !0))
                : (w(t, 0, a),
                  void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                  (n = C((r = T(new o(r), t + 1, e)), !0, t + 1))),
              n
            );
          }),
          (b.toFixed = function (t, e) {
            var n,
              r,
              o = this,
              i = o.constructor;
            return void 0 === t
              ? C(o)
              : (w(t, 0, a),
                void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                (n = C(
                  (r = T(new i(o), t + E(o) + 1, e)).abs(),
                  !1,
                  t + E(r) + 1,
                )),
                o.isneg() && !o.isZero() ? "-" + n : n);
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
                o,
                a,
                u,
                s = this,
                f = s.constructor,
                h = +(t = new f(t));
              if (!t.s) return new f(i);
              if (!(s = new f(s)).s) {
                if (t.s < 1) throw Error(l + "Infinity");
                return s;
              }
              if (s.eq(i)) return s;
              if (((r = f.precision), t.eq(i))) return T(s, r);
              if (((u = (e = t.e) >= (n = t.d.length - 1)), (a = s.s), u)) {
                if ((n = h < 0 ? -h : h) <= m) {
                  for (
                    o = new f(i), e = Math.ceil(r / v + 4), c = !1;
                    n % 2 && N((o = o.times(s)).d, e), 0 !== (n = p(n / 2));

                  )
                    N((s = s.times(s)).d, e);
                  return (c = !0), t.s < 0 ? new f(i).div(o) : T(o, r);
                }
              } else if (a < 0) throw Error(l + "NaN");
              return (
                (a = a < 0 && 1 & t.d[Math.max(e, n)] ? -1 : 1),
                (s.s = 1),
                (c = !1),
                (o = t.times(k(s, r + 12))),
                (c = !0),
                ((o = j(o)).s = a),
                o
              );
            }),
          (b.toPrecision = function (t, e) {
            var n,
              r,
              o = this,
              i = o.constructor;
            return (
              void 0 === t
                ? (r = C(o, (n = E(o)) <= i.toExpNeg || n >= i.toExpPos))
                : (w(t, 1, a),
                  void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                  (r = C(
                    (o = T(new i(o), t, e)),
                    t <= (n = E(o)) || n <= i.toExpNeg,
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
        var S = (function () {
          function t(t, e) {
            var n,
              r = 0,
              o = t.length;
            for (t = t.slice(); o--; )
              (n = t[o] * e + r), (t[o] = n % y | 0), (r = (n / y) | 0);
            return r && t.unshift(r), t;
          }
          function e(t, e, n, r) {
            var o, i;
            if (n != r) i = n > r ? 1 : -1;
            else
              for (o = i = 0; o < n; o++)
                if (t[o] != e[o]) {
                  i = t[o] > e[o] ? 1 : -1;
                  break;
                }
            return i;
          }
          function n(t, e, n) {
            for (var r = 0; n--; )
              (t[n] -= r),
                (r = t[n] < e[n] ? 1 : 0),
                (t[n] = r * y + t[n] - e[n]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (r, o, i, a) {
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
              A,
              k,
              M = r.constructor,
              _ = r.s == o.s ? 1 : -1,
              C = r.d,
              N = o.d;
            if (!r.s) return new M(r);
            if (!o.s) throw Error(l + "Division by zero");
            for (
              c = r.e - o.e,
                A = N.length,
                j = C.length,
                m = (d = new M(_)).d = [],
                s = 0;
              N[s] == (C[s] || 0);

            )
              ++s;
            if (
              (N[s] > (C[s] || 0) && --c,
              (w =
                null == i ? (i = M.precision) : a ? i + (E(r) - E(o)) + 1 : i) <
                0)
            )
              return new M(0);
            if (((w = (w / v + 2) | 0), (s = 0), 1 == A))
              for (f = 0, N = N[0], w++; (s < j || f) && w--; s++)
                (O = f * y + (C[s] || 0)),
                  (m[s] = (O / N) | 0),
                  (f = O % N | 0);
            else {
              for (
                (f = (y / (N[0] + 1)) | 0) > 1 &&
                  ((N = t(N, f)),
                  (C = t(C, f)),
                  (A = N.length),
                  (j = C.length)),
                  S = A,
                  b = (g = C.slice(0, A)).length;
                b < A;

              )
                g[b++] = 0;
              (k = N.slice()).unshift(0), (P = N[0]), N[1] >= y / 2 && ++P;
              do {
                (f = 0),
                  (u = e(N, g, A, b)) < 0
                    ? ((x = g[0]),
                      A != b && (x = x * y + (g[1] || 0)),
                      (f = (x / P) | 0) > 1
                        ? (f >= y && (f = y - 1),
                          1 ==
                            (u = e(
                              (p = t(N, f)),
                              g,
                              (h = p.length),
                              (b = g.length),
                            )) && (f--, n(p, A < h ? k : N, h)))
                        : (0 == f && (u = f = 1), (p = N.slice())),
                      (h = p.length) < b && p.unshift(0),
                      n(g, p, b),
                      -1 == u &&
                        (u = e(N, g, A, (b = g.length))) < 1 &&
                        (f++, n(g, A < b ? k : N, b)),
                      (b = g.length))
                    : 0 === u && (f++, (g = [0])),
                  (m[s++] = f),
                  u && g[0] ? (g[b++] = C[S] || 0) : ((g = [C[S]]), (b = 1));
              } while ((S++ < j || void 0 !== g[0]) && w--);
            }
            return m[0] || m.shift(), (d.e = c), T(d, a ? i + E(d) + 1 : i);
          };
        })();
        function j(t, e) {
          var n,
            r,
            o,
            a,
            u,
            l = 0,
            s = 0,
            p = t.constructor,
            d = p.precision;
          if (E(t) > 16) throw Error(f + E(t));
          if (!t.s) return new p(i);
          for (
            null == e ? ((c = !1), (u = d)) : (u = e), a = new p(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(a)), (s += 5);
          for (
            u += ((Math.log(h(2, s)) / Math.LN10) * 2 + 5) | 0,
              n = r = o = new p(i),
              p.precision = u;
            ;

          ) {
            if (
              ((r = T(r.times(t), u)),
              (n = n.times(++l)),
              O((a = o.plus(S(r, n, u))).d).slice(0, u) === O(o.d).slice(0, u))
            ) {
              for (; s--; ) o = T(o.times(o), u);
              return (p.precision = d), null == e ? ((c = !0), T(o, d)) : o;
            }
            o = a;
          }
        }
        function E(t) {
          for (var e = t.e * v, n = t.d[0]; n >= 10; n /= 10) e++;
          return e;
        }
        function P(t, e, n) {
          if (e > t.LN10.sd())
            throw (
              ((c = !0),
              n && (t.precision = n),
              Error(l + "LN10 precision limit exceeded"))
            );
          return T(new t(t.LN10), e);
        }
        function A(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function k(t, e) {
          var n,
            r,
            o,
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
          if (y.eq(i)) return new m(0);
          if ((null == e ? ((c = !1), (p = g)) : (p = e), y.eq(10)))
            return null == e && (c = !0), P(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (r = (n = O(v)).charAt(0)),
            (a = E(y)),
            !(Math.abs(a) < 15e14))
          )
            return (
              (f = P(m, p + 2, g).times(a + "")),
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
              s = u = y = S(y.minus(i), y.plus(i), p),
              h = T(y.times(y), p),
              o = 3;
            ;

          ) {
            if (
              ((u = T(u.times(h), p)),
              O((f = s.plus(S(u, new m(o), p))).d).slice(0, p) ===
                O(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== a && (s = s.plus(P(m, p + 2, g).times(a + ""))),
                (s = S(s, new m(d), p)),
                (m.precision = g),
                null == e ? ((c = !0), T(s, g)) : s
              );
            (s = f), (o += 2);
          }
        }
        function M(t, e) {
          var n, r, o;
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
          for (o = e.length; 48 === e.charCodeAt(o - 1); ) --o;
          if ((e = e.slice(r, o))) {
            if (
              ((o -= r),
              (n = n - r - 1),
              (t.e = p(n / v)),
              (t.d = []),
              (r = (n + 1) % v),
              n < 0 && (r += v),
              r < o)
            ) {
              for (r && t.d.push(+e.slice(0, r)), o -= v; r < o; )
                t.d.push(+e.slice(r, (r += v)));
              (e = e.slice(r)), (r = v - e.length);
            } else r -= o;
            for (; r--; ) e += "0";
            if ((t.d.push(+e), c && (t.e > g || t.e < -g))) throw Error(f + n);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function T(t, e, n) {
          var r,
            o,
            i,
            a,
            u,
            l,
            s,
            d,
            m = t.d;
          for (a = 1, i = m[0]; i >= 10; i /= 10) a++;
          if ((r = e - a) < 0) (r += v), (o = e), (s = m[(d = 0)]);
          else {
            if ((d = Math.ceil((r + 1) / v)) >= (i = m.length)) return t;
            for (s = i = m[d], a = 1; i >= 10; i /= 10) a++;
            o = (r %= v) - v + a;
          }
          if (
            (void 0 !== n &&
              ((u = (s / (i = h(10, a - o - 1))) % 10 | 0),
              (l = e < 0 || void 0 !== m[d + 1] || s % i),
              (l =
                n < 4
                  ? (u || l) && (0 == n || n == (t.s < 0 ? 3 : 2))
                  : u > 5 ||
                    (5 == u &&
                      (4 == n ||
                        l ||
                        (6 == n &&
                          (r > 0 ? (o > 0 ? s / h(10, a - o) : 0) : m[d - 1]) %
                            10 &
                            1) ||
                        n == (t.s < 0 ? 8 : 7))))),
            e < 1 || !m[0])
          )
            return (
              l
                ? ((i = E(t)),
                  (m.length = 1),
                  (e = e - i - 1),
                  (m[0] = h(10, (v - (e % v)) % v)),
                  (t.e = p(-e / v) || 0))
                : ((m.length = 1), (m[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == r
              ? ((m.length = d), (i = 1), d--)
              : ((m.length = d + 1),
                (i = h(10, v - r)),
                (m[d] = o > 0 ? ((s / h(10, a - o)) % h(10, o) | 0) * i : 0)),
            l)
          )
            for (;;) {
              if (0 == d) {
                (m[0] += i) == y && ((m[0] = 1), ++t.e);
                break;
              }
              if (((m[d] += i), m[d] != y)) break;
              (m[d--] = 0), (i = 1);
            }
          for (r = m.length; 0 === m[--r]; ) m.pop();
          if (c && (t.e > g || t.e < -g)) throw Error(f + E(t));
          return t;
        }
        function _(t, e) {
          var n,
            r,
            o,
            i,
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
                a > (o = Math.max(Math.ceil(d / v), u) + 2) &&
                  ((a = o), (n.length = 1)),
                n.reverse(),
                o = a;
              o--;

            )
              n.push(0);
            n.reverse();
          } else {
            for (
              (f = (o = l.length) < (u = p.length)) && (u = o), o = 0;
              o < u;
              o++
            )
              if (l[o] != p[o]) {
                f = l[o] < p[o];
                break;
              }
            a = 0;
          }
          for (
            f && ((n = l), (l = p), (p = n), (e.s = -e.s)),
              u = l.length,
              o = p.length - u;
            o > 0;
            --o
          )
            l[u++] = 0;
          for (o = p.length; o > a; ) {
            if (l[--o] < p[o]) {
              for (i = o; i && 0 === l[--i]; ) l[i] = y - 1;
              --l[i], (l[o] += y);
            }
            l[o] -= p[o];
          }
          for (; 0 === l[--u]; ) l.pop();
          for (; 0 === l[0]; l.shift()) --r;
          return l[0] ? ((e.d = l), (e.e = r), c ? T(e, d) : e) : new h(0);
        }
        function C(t, e, n) {
          var r,
            o = E(t),
            i = O(t.d),
            a = i.length;
          return (
            e
              ? (n && (r = n - a) > 0
                  ? (i = i.charAt(0) + "." + i.slice(1) + A(r))
                  : a > 1 && (i = i.charAt(0) + "." + i.slice(1)),
                (i = i + (o < 0 ? "e" : "e+") + o))
              : o < 0
                ? ((i = "0." + A(-o - 1) + i),
                  n && (r = n - a) > 0 && (i += A(r)))
                : o >= a
                  ? ((i += A(o + 1 - a)),
                    n && (r = n - o - 1) > 0 && (i = i + "." + A(r)))
                  : ((r = o + 1) < a && (i = i.slice(0, r) + "." + i.slice(r)),
                    n &&
                      (r = n - a) > 0 &&
                      (o + 1 === a && (i += "."), (i += A(r)))),
            t.s < 0 ? "-" + i : i
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
            o = [
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
          for (e = 0; e < o.length; e += 3)
            if (void 0 !== (r = t[(n = o[e])])) {
              if (!(p(r) === r && r >= o[e + 1] && r <= o[e + 2]))
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
          var n, r, o;
          function i(t) {
            var e = this;
            if (!(e instanceof i)) return new i(t);
            if (((e.constructor = i), t instanceof i))
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
            ((i.prototype = b),
            (i.ROUND_UP = 0),
            (i.ROUND_DOWN = 1),
            (i.ROUND_CEIL = 2),
            (i.ROUND_FLOOR = 3),
            (i.ROUND_HALF_UP = 4),
            (i.ROUND_HALF_DOWN = 5),
            (i.ROUND_HALF_EVEN = 6),
            (i.ROUND_HALF_CEIL = 7),
            (i.ROUND_HALF_FLOOR = 8),
            (i.clone = t),
            (i.config = i.set = D),
            void 0 === e && (e = {}),
            e)
          )
            for (
              o = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"],
                n = 0;
              n < o.length;

            )
              e.hasOwnProperty((r = o[n++])) || (e[r] = this[r]);
          return i.config(e), i;
        })(u)),
          (u.default = u.Decimal = u),
          (i = new u(1)),
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
      function o(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function i(t, e, r, i, a) {
        if ("function" != typeof r)
          throw new TypeError("The listener must be a function");
        var u = new o(r, i || t, a),
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
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (t = this._events))
            e.call(t, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(t))
            : o;
        }),
        (u.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, a = new Array(i); o < i; o++)
            a[o] = r[o].fn;
          return a;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (u.prototype.emit = function (t, e, r, o, i, a) {
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
                return s.fn.call(s.context, e, r, o), !0;
              case 5:
                return s.fn.call(s.context, e, r, o, i), !0;
              case 6:
                return s.fn.call(s.context, e, r, o, i, a), !0;
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
                  s[l].fn.call(s[l].context, e, r, o);
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
          return i(this, t, e, n, !1);
        }),
        (u.prototype.once = function (t, e, n) {
          return i(this, t, e, n, !0);
        }),
        (u.prototype.removeListener = function (t, e, r, o) {
          var i = n ? n + t : t;
          if (!this._events[i]) return this;
          if (!e) return a(this, i), this;
          var u = this._events[i];
          if (u.fn)
            u.fn !== e ||
              (o && !u.once) ||
              (r && u.context !== r) ||
              a(this, i);
          else {
            for (var c = 0, l = [], s = u.length; c < s; c++)
              (u[c].fn !== e ||
                (o && !u[c].once) ||
                (r && u[c].context !== r)) &&
                l.push(u[c]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : a(this, i);
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
        for (var r = -1, o = null == t ? 0 : t.length; ++r < o; )
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
          r(t, function (t, r, o) {
            return (n = !!e(t, r, o));
          }),
          n
        );
      };
    },
    17425: (t, e, n) => {
      var r = n(59123);
      t.exports = function (t, e, n) {
        for (var o = -1, i = t.length; ++o < i; ) {
          var a = t[o],
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
        for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (e(t[i], i, t)) return i;
        return -1;
      };
    },
    85720: (t, e, n) => {
      var r = n(39809),
        o = n(79020);
      t.exports = function t(e, n, i, a, u) {
        var c = -1,
          l = e.length;
        for (i || (i = o), u || (u = []); ++c < l; ) {
          var s = e[c];
          n > 0 && i(s)
            ? n > 1
              ? t(s, n - 1, i, a, u)
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
        o = n(50254),
        i = n(62095);
      t.exports = function (t, e, n) {
        return e == e ? i(t, e, n) : r(t, o, n);
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
        o = n(16986),
        i = n(60647),
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
                    return o(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [s];
        var p = -1;
        e = r(e, c(i));
        var h = a(t, function (t, n, o) {
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
      t.exports = function (t, r, o, i) {
        for (var a = -1, u = n(e((r - t) / (o || 1)), 0), c = Array(u); u--; )
          (c[i ? u : ++a] = t), (t += o);
        return c;
      };
    },
    52162: (t, e, n) => {
      var r = n(7414),
        o = n(89369),
        i = n(22997);
      t.exports = function (t, e) {
        return i(o(t, e, r), t + "");
      };
    },
    94304: (t, e, n) => {
      var r = n(10693),
        o = n(83881),
        i = n(7414),
        a = o
          ? function (t, e) {
              return o(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0,
              });
            }
          : i;
      t.exports = a;
    },
    66426: (t) => {
      t.exports = function (t, e, n) {
        var r = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = e > n ? 0 : (n - e) >>> 0),
          (e >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = t[r + e];
        return i;
      };
    },
    68578: (t, e, n) => {
      var r = n(12761);
      t.exports = function (t, e) {
        var n;
        return (
          r(t, function (t, r, o) {
            return !(n = e(t, r, o));
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
        o = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, r(t) + 1).replace(o, "") : t;
      };
    },
    94744: (t, e, n) => {
      var r = n(99026),
        o = n(9357),
        i = n(82629),
        a = n(85664),
        u = n(87527),
        c = n(50037);
      t.exports = function (t, e, n) {
        var l = -1,
          s = o,
          f = t.length,
          p = !0,
          h = [],
          d = h;
        if (n) (p = !1), (s = i);
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
        var o = t.length;
        return (n = void 0 === n ? o : n), !e && n >= o ? t : r(t, e, n);
      };
    },
    3808: (t, e, n) => {
      var r = n(59123);
      t.exports = function (t, e) {
        if (t !== e) {
          var n = void 0 !== t,
            o = null === t,
            i = t == t,
            a = r(t),
            u = void 0 !== e,
            c = null === e,
            l = e == e,
            s = r(e);
          if (
            (!c && !s && !a && t > e) ||
            (a && u && l && !c && !s) ||
            (o && u && l) ||
            (!n && l) ||
            !i
          )
            return 1;
          if (
            (!o && !a && !s && t < e) ||
            (s && n && i && !o && !a) ||
            (c && n && i) ||
            (!u && i) ||
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
          var o = -1,
            i = t.criteria,
            a = e.criteria,
            u = i.length,
            c = n.length;
          ++o < u;

        ) {
          var l = r(i[o], a[o]);
          if (l) return o >= c ? l : l * ("desc" == n[o] ? -1 : 1);
        }
        return t.index - e.index;
      };
    },
    12133: (t, e, n) => {
      var r = n(90023),
        o = n(32799),
        i = n(79525),
        a = n(92938);
      t.exports = function (t) {
        return function (e) {
          e = a(e);
          var n = o(e) ? i(e) : void 0,
            u = n ? n[0] : e.charAt(0),
            c = n ? r(n, 1).join("") : e.slice(1);
          return u[t]() + c;
        };
      };
    },
    51897: (t, e, n) => {
      var r = n(60647),
        o = n(1161),
        i = n(34840);
      t.exports = function (t) {
        return function (e, n, a) {
          var u = Object(e);
          if (!o(e)) {
            var c = r(n, 3);
            (e = i(e)),
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
        o = n(41757),
        i = n(69419);
      t.exports = function (t) {
        return function (e, n, a) {
          return (
            a && "number" != typeof a && o(e, n, a) && (n = a = void 0),
            (e = i(e)),
            void 0 === n ? ((n = e), (e = 0)) : (n = i(n)),
            (a = void 0 === a ? (e < n ? 1 : -1) : i(a)),
            r(e, n, a, t)
          );
        };
      };
    },
    87527: (t, e, n) => {
      var r = n(5851),
        o = n(76016),
        i = n(50037),
        a =
          r && 1 / i(new r([, -0]))[1] == 1 / 0
            ? function (t) {
                return new r(t);
              }
            : o;
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
        o = n(88636),
        i = n(5370),
        a = r ? r.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return i(t) || o(t) || !!(a && t && t[a]);
      };
    },
    41757: (t, e, n) => {
      var r = n(35800),
        o = n(1161),
        i = n(11874),
        a = n(60486);
      t.exports = function (t, e, n) {
        if (!a(n)) return !1;
        var u = typeof e;
        return (
          !!("number" == u
            ? o(n) && i(e, n.length)
            : "string" == u && e in n) && r(n[e], t)
        );
      };
    },
    89369: (t, e, n) => {
      var r = n(62902),
        o = Math.max;
      t.exports = function (t, e, n) {
        return (
          (e = o(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var i = arguments, a = -1, u = o(i.length - e, 0), c = Array(u);
              ++a < u;

            )
              c[a] = i[e + a];
            a = -1;
            for (var l = Array(e + 1); ++a < e; ) l[a] = i[a];
            return (l[e] = n(c)), r(t, this, l);
          }
        );
      };
    },
    22997: (t, e, n) => {
      var r = n(94304),
        o = n(77164)(r);
      t.exports = o;
    },
    77164: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var n = 0,
          r = 0;
        return function () {
          var o = e(),
            i = 16 - (o - r);
          if (((r = o), i > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    62095: (t) => {
      t.exports = function (t, e, n) {
        for (var r = n - 1, o = t.length; ++r < o; ) if (t[r] === e) return r;
        return -1;
      };
    },
    79525: (t, e, n) => {
      var r = n(68447),
        o = n(32799),
        i = n(28356);
      t.exports = function (t) {
        return o(t) ? i(t) : r(t);
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
        o = "\\ud83c[\\udffb-\\udfff]",
        i = "[^" + e + "]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + o + ")" + "?",
        l = "[\\ufe0e\\ufe0f]?",
        s =
          l + c + ("(?:\\u200d(?:" + [i, a, u].join("|") + ")" + l + c + ")*"),
        f = "(?:" + [i + r + "?", r, a, u, n].join("|") + ")",
        p = RegExp(o + "(?=" + o + ")|" + f + s, "g");
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
        o = n(76824),
        i = n(61056),
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
          var t = o();
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
          var t = o(),
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
          (e = i(e) || 0),
          r(n) &&
            ((y = !!n.leading),
            (s = (v = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : s),
            (m = "trailing" in n ? !!n.trailing : m)),
          (O.cancel = function () {
            void 0 !== p && clearTimeout(p), (d = 0), (c = h = l = p = void 0);
          }),
          (O.flush = function () {
            return void 0 === p ? f : w(o());
          }),
          O
        );
      };
    },
    55084: (t, e, n) => {
      var r = n(63889),
        o = n(27157),
        i = n(60647),
        a = n(5370),
        u = n(41757);
      t.exports = function (t, e, n) {
        var c = a(t) ? r : o;
        return n && u(t, e, n) && (e = void 0), c(t, i(e, 3));
      };
    },
    29200: (t, e, n) => {
      var r = n(51897)(n(29156));
      t.exports = r;
    },
    29156: (t, e, n) => {
      var r = n(59861),
        o = n(60647),
        i = n(41151),
        a = Math.max;
      t.exports = function (t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : i(n);
        return c < 0 && (c = a(u + c, 0)), r(t, o(e, 3), c);
      };
    },
    6392: (t, e, n) => {
      var r = n(85720),
        o = n(81319);
      t.exports = function (t, e) {
        return r(o(t, e), 1);
      };
    },
    62588: (t, e, n) => {
      var r = n(66203),
        o = n(95753);
      t.exports = function (t) {
        return !0 === t || !1 === t || (o(t) && "[object Boolean]" == r(t));
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
        o = n(95753);
      t.exports = function (t) {
        return "number" == typeof t || (o(t) && "[object Number]" == r(t));
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
        o = n(53120),
        i = n(60647);
      t.exports = function (t, e) {
        var n = {};
        return (
          (e = i(e, 3)),
          o(t, function (t, o, i) {
            r(n, o, e(t, o, i));
          }),
          n
        );
      };
    },
    24149: (t, e, n) => {
      var r = n(17425),
        o = n(6515),
        i = n(7414);
      t.exports = function (t) {
        return t && t.length ? r(t, i, o) : void 0;
      };
    },
    65793: (t, e, n) => {
      var r = n(17425),
        o = n(66983),
        i = n(7414);
      t.exports = function (t) {
        return t && t.length ? r(t, i, o) : void 0;
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
        o = n(60647),
        i = n(68578),
        a = n(5370),
        u = n(41757);
      t.exports = function (t, e, n) {
        var c = a(t) ? r : i;
        return n && u(t, e, n) && (e = void 0), c(t, o(e, 3));
      };
    },
    2045: (t, e, n) => {
      var r = n(85720),
        o = n(79971),
        i = n(52162),
        a = n(41757),
        u = i(function (t, e) {
          if (null == t) return [];
          var n = e.length;
          return (
            n > 1 && a(t, e[0], e[1])
              ? (e = [])
              : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
            o(t, r(e, 1), [])
          );
        });
      t.exports = u;
    },
    48679: (t, e, n) => {
      var r = n(76964),
        o = n(60486);
      t.exports = function (t, e, n) {
        var i = !0,
          a = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (
          o(n) &&
            ((i = "leading" in n ? !!n.leading : i),
            (a = "trailing" in n ? !!n.trailing : a)),
          r(t, e, { leading: i, maxWait: e, trailing: a })
        );
      };
    },
    69419: (t, e, n) => {
      var r = n(61056),
        o = 1 / 0;
      t.exports = function (t) {
        return t
          ? (t = r(t)) === o || t === -1 / 0
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
        o = n(60486),
        i = n(59123),
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = u.test(t);
        return n || c.test(t) ? l(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t;
      };
    },
    87518: (t, e, n) => {
      var r = n(60647),
        o = n(94744);
      t.exports = function (t, e) {
        return t && t.length ? o(t, r(e, 2)) : [];
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
      function o(t) {
        this.setState(
          function (e) {
            var n = this.constructor.getDerivedStateFromProps(t, e);
            return null != n ? n : null;
          }.bind(this),
        );
      }
      function i(t, e) {
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
            ((e.componentWillMount = r), (e.componentWillReceiveProps = o)),
          "function" == typeof e.getSnapshotBeforeUpdate)
        ) {
          if ("function" != typeof e.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
            );
          e.componentWillUpdate = i;
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
        (o.__suppressDeprecationWarning = !0),
        (i.__suppressDeprecationWarning = !0);
    },
    15819: (t, e, n) => {
      "use strict";
      n.d(e, { ZP: () => ae, bO: () => et });
      var r = n(47427),
        o = n(25816),
        i = n.n(o),
        a = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty;
      function l(t, e) {
        return function (n, r, o) {
          return t(n, r, o) && e(n, r, o);
        };
      }
      function s(t) {
        return function (e, n, r) {
          if (!e || !n || "object" != typeof e || "object" != typeof n)
            return t(e, n, r);
          var o = r.cache,
            i = o.get(e),
            a = o.get(n);
          if (i && a) return i === n && a === e;
          o.set(e, n), o.set(n, e);
          var u = t(e, n, r);
          return o.delete(e), o.delete(n), u;
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
          var r, o, i = {}, a = t.entries(), u = 0;
          (r = a.next()) && !r.done;

        ) {
          for (
            var c = e.entries(), l = !1, s = 0;
            (o = c.next()) && !o.done;

          ) {
            var f = r.value,
              p = f[0],
              h = f[1],
              d = o.value,
              y = d[0],
              v = d[1];
            l ||
              i[s] ||
              !(l =
                n.equals(p, y, u, s, t, e, n) &&
                n.equals(h, v, p, y, t, e, n)) ||
              (i[s] = !0),
              s++;
          }
          if (!l) return !1;
          u++;
        }
        return !0;
      }
      function x(t, e, n) {
        var r,
          o = v(t),
          i = o.length;
        if (v(e).length !== i) return !1;
        for (; i-- > 0; ) {
          if (
            (r = o[i]) === d &&
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
          o,
          i,
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
            ((o = y(t, r)),
            (i = y(e, r)),
            (o || i) &&
              (!o ||
                !i ||
                o.configurable !== i.configurable ||
                o.enumerable !== i.enumerable ||
                o.writable !== i.writable))
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
      function j(t, e, n) {
        if (t.size !== e.size) return !1;
        for (var r, o, i = {}, a = t.values(); (r = a.next()) && !r.done; ) {
          for (var u = e.values(), c = !1, l = 0; (o = u.next()) && !o.done; )
            c ||
              i[l] ||
              !(c = n.equals(r.value, o.value, r.value, o.value, t, e, n)) ||
              (i[l] = !0),
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
      var P = "[object Arguments]",
        A = "[object Boolean]",
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
      var U = z();
      z({ strict: !0 }),
        z({ circular: !0 }),
        z({ circular: !0, strict: !0 }),
        z({
          createInternalComparator: function () {
            return h;
          },
        }),
        z({
          strict: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        z({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        z({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
          strict: !0,
        });
      function z(t) {
        void 0 === t && (t = {});
        var e,
          n = t.circular,
          r = void 0 !== n && n,
          o = t.createInternalComparator,
          i = t.createState,
          a = t.strict,
          u = void 0 !== a && a,
          c = (function (t) {
            var e = t.circular,
              n = t.createCustomConfig,
              r = t.strict,
              o = {
                areArraysEqual: r ? w : m,
                areDatesEqual: g,
                areMapsEqual: r ? l(b, w) : b,
                areObjectsEqual: r ? w : x,
                arePrimitiveWrappersEqual: O,
                areRegExpsEqual: S,
                areSetsEqual: r ? l(j, w) : j,
                areTypedArraysEqual: r ? w : E,
              };
            if ((n && (o = L({}, o, n(o))), e)) {
              var i = s(o.areArraysEqual),
                a = s(o.areMapsEqual),
                u = s(o.areObjectsEqual),
                c = s(o.areSetsEqual);
              o = L({}, o, {
                areArraysEqual: i,
                areMapsEqual: a,
                areObjectsEqual: u,
                areSetsEqual: c,
              });
            }
            return o;
          })(t),
          f = (function (t) {
            var e = t.areArraysEqual,
              n = t.areDatesEqual,
              r = t.areMapsEqual,
              o = t.areObjectsEqual,
              i = t.arePrimitiveWrappersEqual,
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
              if (f === Object) return o(t, l, s);
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
                          o(t, l, s)
                        : p === P
                          ? o(t, l, s)
                          : (p === A || p === T || p === D) && i(t, l, s);
            };
          })(c);
        return (function (t) {
          var e = t.circular,
            n = t.comparator,
            r = t.createState,
            o = t.equals,
            i = t.strict;
          if (r)
            return function (t, a) {
              var u = r(),
                c = u.cache,
                l = void 0 === c ? (e ? new WeakMap() : void 0) : c,
                s = u.meta;
              return n(t, a, { cache: l, equals: o, meta: s, strict: i });
            };
          if (e)
            return function (t, e) {
              return n(t, e, {
                cache: new WeakMap(),
                equals: o,
                meta: void 0,
                strict: i,
              });
            };
          var a = { cache: void 0, equals: o, meta: void 0, strict: i };
          return function (t, e) {
            return n(t, e, a);
          };
        })({
          circular: r,
          comparator: f,
          createState: i,
          equals: o
            ? o(f)
            : ((e = f),
              function (t, n, r, o, i, a, u) {
                return e(t, n, u);
              }),
          strict: u,
        });
      }
      function $(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = -1;
        requestAnimationFrame(function r(o) {
          n < 0 && (n = o),
            o - n > e
              ? (t(o), (n = -1))
              : (function (t) {
                  "undefined" != typeof requestAnimationFrame &&
                    requestAnimationFrame(t);
                })(r);
        });
      }
      function F(t) {
        return (
          (F =
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
          F(t)
        );
      }
      function Z(t) {
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
            if ("string" == typeof t) return W(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return W(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function W(t, e) {
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
                var o = Z(r),
                  i = o[0],
                  a = o.slice(1);
                return "number" == typeof i
                  ? void $(n.bind(null, a), i)
                  : (n(i), void $(n.bind(null, a)));
              }
              "object" === F(r) && t(r), "function" == typeof r && r();
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
      function X(t, e) {
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
      function Y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? X(Object(n), !0).forEach(function (e) {
                H(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : X(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function H(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== G(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== G(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === G(e) ? e : String(e);
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
            return Y(Y({}, n), {}, H({}, r, t(r, e[r])));
          }, {});
        },
        et = function (t) {
          return Object.keys(t).reduce(function (t, e) {
            return Y(
              Y({}, t),
              (function (t, e) {
                if (-1 === J.indexOf(t))
                  return H({}, t, Number.isNaN(e) ? 0 : e);
                var n = "transition" === t,
                  r = t.replace(/(\w)/, function (t) {
                    return t.toUpperCase();
                  }),
                  o = e;
                return V.reduce(function (t, i, a) {
                  return (
                    n &&
                      (o = e.replace(
                        /(transform|transform-origin)/gim,
                        "".concat(K[a], "$1"),
                      )),
                    Y(Y({}, t), {}, H({}, i + r, o))
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          it(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ot(t) {
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
          it(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function it(t, e) {
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
            o = e[1],
            i = e[2],
            a = e[3];
          if (1 === e.length)
            switch (e[0]) {
              case "linear":
                (r = 0), (o = 0), (i = 1), (a = 1);
                break;
              case "ease":
                (r = 0.25), (o = 0.1), (i = 0.25), (a = 1);
                break;
              case "ease-in":
                (r = 0.42), (o = 0), (i = 1), (a = 1);
                break;
              case "ease-out":
                (r = 0.42), (o = 0), (i = 0.58), (a = 1);
                break;
              case "ease-in-out":
                (r = 0), (o = 0), (i = 0.58), (a = 1);
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
                  (r = c[0]), (o = c[1]), (i = c[2]), (a = c[3]);
                }
            }
          [r, i, o, a].every(function (t) {
            return "number" == typeof t && t >= 0 && t <= 1;
          });
          var l,
            s,
            f = st(r, i),
            p = st(o, a),
            h =
              ((l = r),
              (s = i),
              function (t) {
                var e = ct(l, s),
                  n = [].concat(
                    ot(
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
              for (var e, n = t > 1 ? 1 : t, r = n, o = 0; o < 8; ++o) {
                var i = f(r) - n,
                  a = h(r);
                if (Math.abs(i - n) < ut || a < ut) return p(r);
                r = (e = r - i / a) > 1 ? 1 : e < 0 ? 0 : e;
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
                    o = void 0 === r ? 8 : r,
                    i = t.dt,
                    a = void 0 === i ? 17 : i,
                    u = function (t, e, r) {
                      var i = r + ((-(t - e) * n - r * o) * a) / 1e3,
                        u = (r * a) / 1e3 + t;
                      return Math.abs(u - e) < ut && Math.abs(i) < ut
                        ? [e, 0]
                        : [u, i];
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
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
        St = function t(e, n, r) {
          var o = tt(function (t, n) {
            if (Ot(n)) {
              var r = gt(e(n.from, n.to, n.velocity), 2),
                o = r[0],
                i = r[1];
              return vt(vt({}, n), {}, { from: o, velocity: i });
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
                        velocity: wt(e.velocity, o[t].velocity, r),
                        from: wt(e.from, o[t].from, r),
                      },
                    )
                  : e;
              }, n)
            : t(e, o, r - 1);
        };
      const jt = function (t, e, n, r, o) {
        var i,
          a,
          u,
          c,
          l =
            ((i = t),
            (a = e),
            [Object.keys(i), Object.keys(a)].reduce(function (t, e) {
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
                var i = (r - u) / n.dt;
                (f = St(n, f, i)),
                  o(
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
            : function (i) {
                c || (c = i);
                var a = (i - c) / r,
                  u = tt(function (t, e) {
                    return wt.apply(void 0, dt(e).concat([n(a)]));
                  }, s);
                if ((o(vt(vt(vt({}, t), e), u)), a < 1))
                  p = requestAnimationFrame(h);
                else {
                  var l = tt(function (t, e) {
                    return wt.apply(void 0, dt(e).concat([n(1)]));
                  }, s);
                  o(vt(vt(vt({}, t), e), l));
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
      function At(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
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
            r = Ut(t);
          if (e) {
            var o = Ut(this).constructor;
            n = Reflect.construct(r, arguments, o);
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
      function Ut(t) {
        return (
          (Ut = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ut(t)
        );
      }
      var zt = (function (t) {
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
          o,
          i = Bt(a);
        function a(t, e) {
          var n;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          var r = (n = i.call(this, t, e)).props,
            o = r.isActive,
            u = r.attributeName,
            c = r.from,
            l = r.to,
            s = r.steps,
            f = r.children,
            p = r.duration;
          if (
            ((n.handleStyleChange = n.handleStyleChange.bind(Rt(n))),
            (n.changeStyle = n.changeStyle.bind(Rt(n))),
            !o || p <= 0)
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
                  o = e.attributeName,
                  i = e.shouldReAnimate,
                  a = e.to,
                  u = e.from,
                  c = this.state.style;
                if (r)
                  if (n) {
                    if (!(U(t.to, a) && t.canBegin && t.isActive)) {
                      var l = !t.canBegin || !t.isActive;
                      this.manager && this.manager.stop(),
                        this.stopJSAnimation && this.stopJSAnimation();
                      var s = l || i ? u : t.to;
                      if (this.state && c) {
                        var f = { style: o ? Ct({}, o, s) : s };
                        ((o && [o] !== s) || (!o && c !== s)) &&
                          this.setState(f);
                      }
                      this.runAnimation(
                        _t(_t({}, this.props), {}, { from: s, begin: 0 }),
                      );
                    }
                  } else {
                    var p = { style: o ? Ct({}, o, a) : a };
                    this.state &&
                      c &&
                      ((o && c[o] !== a) || (!o && c !== a)) &&
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
                  o = t.duration,
                  i = t.easing,
                  a = t.begin,
                  u = t.onAnimationEnd,
                  c = t.onAnimationStart,
                  l = jt(n, r, pt(i), o, this.changeStyle);
                this.manager.start([
                  c,
                  a,
                  function () {
                    e.stopJSAnimation = l();
                  },
                  o,
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
                  o = t.onAnimationStart,
                  i = n[0],
                  a = i.style,
                  u = i.duration,
                  c = void 0 === u ? 0 : u;
                return this.manager.start(
                  [o].concat(
                    kt(
                      n.reduce(
                        function (t, r, o) {
                          if (0 === o) return t;
                          var i = r.duration,
                            a = r.easing,
                            u = void 0 === a ? "ease" : a,
                            c = r.style,
                            l = r.properties,
                            s = r.onAnimationEnd,
                            f = o > 0 ? n[o - 1] : r,
                            p = l || Object.keys(c);
                          if ("function" == typeof u || "spring" === u)
                            return [].concat(kt(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: c,
                                duration: i,
                                easing: u,
                              }),
                              i,
                            ]);
                          var h = nt(p, i, u),
                            d = _t(
                              _t(_t({}, f.style), c),
                              {},
                              { transition: h },
                            );
                          return [].concat(kt(t), [d, i, s]).filter(Q);
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
                  o = t.to,
                  i = t.easing,
                  a = t.onAnimationStart,
                  u = t.onAnimationEnd,
                  c = t.steps,
                  l = t.children,
                  s = this.manager;
                if (
                  ((this.unSubscribe = s.subscribe(this.handleStyleChange)),
                  "function" != typeof i &&
                    "function" != typeof l &&
                    "spring" !== i)
                )
                  if (c.length > 1) this.runStepAnimation(t);
                  else {
                    var f = r ? Ct({}, r, o) : o,
                      p = nt(Object.keys(f), n, i);
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
                  o = (t.attributeName, t.easing, t.isActive),
                  i =
                    (t.steps,
                    t.from,
                    t.to,
                    t.canBegin,
                    t.onAnimationEnd,
                    t.shouldReAnimate,
                    t.onAnimationReStart,
                    At(t, Pt)),
                  a = r.Children.count(e),
                  u = et(this.state.style);
                if ("function" == typeof e) return e(u);
                if (!o || 0 === a || n <= 0) return e;
                var c = function (t) {
                  var e = t.props,
                    n = e.style,
                    o = void 0 === n ? {} : n,
                    a = e.className;
                  return (0, r.cloneElement)(
                    t,
                    _t(
                      _t({}, i),
                      {},
                      { style: _t(_t({}, o), u), className: a },
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
          o && Nt(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(r.PureComponent);
      (zt.displayName = "Animate"),
        (zt.defaultProps = {
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
        (zt.propTypes = {
          from: i().oneOfType([i().object, i().string]),
          to: i().oneOfType([i().object, i().string]),
          attributeName: i().string,
          duration: i().number,
          begin: i().number,
          easing: i().oneOfType([i().string, i().func]),
          steps: i().arrayOf(
            i().shape({
              duration: i().number.isRequired,
              style: i().object.isRequired,
              easing: i().oneOfType([
                i().oneOf([
                  "ease",
                  "ease-in",
                  "ease-out",
                  "ease-in-out",
                  "linear",
                ]),
                i().func,
              ]),
              properties: i().arrayOf("string"),
              onAnimationEnd: i().func,
            }),
          ),
          children: i().oneOfType([i().node, i().func]),
          isActive: i().bool,
          canBegin: i().bool,
          onAnimationEnd: i().func,
          shouldReAnimate: i().bool,
          onAnimationStart: i().func,
          onAnimationReStart: i().func,
        });
      const $t = zt;
      var Ft = n(91514),
        Zt = ["children", "appearOptions", "enterOptions", "leaveOptions"];
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
      function Gt(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function Xt(t, e) {
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
      function Yt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Xt(Object(n), !0).forEach(function (e) {
                te(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Xt(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Ht(t, e) {
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
            var o = Qt(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === Wt(e) || "function" == typeof e)) return e;
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
          if ("object" !== Wt(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== Wt(r)) return r;
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
            o,
            i = Kt(a);
          function a() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              te(Jt((t = i.call(this))), "handleEnter", function (e, n) {
                var r = t.props,
                  o = r.appearOptions,
                  i = r.enterOptions;
                t.handleStyleActive(n ? o : i);
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
                      Yt(Yt({}, t), {}, { onAnimationEnd: e, isActive: !0 }),
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
                    o =
                      (e.appearOptions,
                      e.enterOptions,
                      e.leaveOptions,
                      Gt(e, Zt));
                  return r.createElement(
                    Ft.Transition,
                    qt({}, o, {
                      onEnter: this.handleEnter,
                      onExit: this.handleExit,
                      timeout: this.parseTimeout(),
                    }),
                    function () {
                      return r.createElement($t, t.state, r.Children.only(n));
                    },
                  );
                },
              },
            ]) && Ht(e.prototype, n),
            o && Ht(e, o),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(r.Component);
      re.propTypes = {
        appearOptions: i().object,
        enterOptions: i().object,
        leaveOptions: i().object,
        children: i().element,
      };
      const oe = re;
      function ie(t) {
        var e = t.component,
          n = t.children,
          o = t.appear,
          i = t.enter,
          a = t.leave;
        return r.createElement(
          Ft.TransitionGroup,
          { component: e },
          r.Children.map(n, function (t, e) {
            return r.createElement(
              oe,
              {
                appearOptions: o,
                enterOptions: i,
                leaveOptions: a,
                key: "child-".concat(e),
              },
              t,
            );
          }),
        );
      }
      (ie.propTypes = {
        appear: i().object,
        enter: i().object,
        leave: i().object,
        children: i().oneOfType([i().array, i().element]),
        component: i().any,
      }),
        (ie.defaultProps = { component: "span" });
      const ae = $t;
    },
    39199: (t, e, n) => {
      "use strict";
      var r = n(32224);
      (e.__esModule = !0),
        (e.default = function (t, e) {
          t.classList
            ? t.classList.add(e)
            : (0, o.default)(t, e) ||
              ("string" == typeof t.className
                ? (t.className = t.className + " " + e)
                : t.setAttribute(
                    "class",
                    ((t.className && t.className.baseVal) || "") + " " + e,
                  ));
        });
      var o = r(n(86582));
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
        o = u(n(68281)),
        i = u(n(47427)),
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
              return (0, o.default)(t, e);
            })
          );
        },
        f = (function (t) {
          var e, n;
          function r() {
            for (
              var e, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
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
                  o = e.getClassNames("enter").doneClassName,
                  i = n ? r + " " + o : o;
                e.removeClasses(t, n ? "appear" : "enter"),
                  l(t, i),
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
                  o = r ? (r && n ? n + "-" : "") + t : n[t];
                return {
                  className: o,
                  activeClassName: r ? o + "-active" : n[t + "Active"],
                  doneClassName: r ? o + "-done" : n[t + "Done"],
                };
              }),
              e
            );
          }
          (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n);
          var o = r.prototype;
          return (
            (o.removeClasses = function (t, e) {
              var n = this.getClassNames(e),
                r = n.className,
                o = n.activeClassName,
                i = n.doneClassName;
              r && s(t, r), o && s(t, o), i && s(t, i);
            }),
            (o.reflowAndAddClass = function (t, e) {
              e && (t && t.scrollTop, l(t, e));
            }),
            (o.render = function () {
              var t = c({}, this.props);
              return (
                delete t.classNames,
                i.default.createElement(
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
        })(i.default.Component);
      (f.defaultProps = { classNames: "" }), (f.propTypes = {});
      var p = f;
      (e.default = p), (t.exports = e.default);
    },
    35994: (t, e, n) => {
      "use strict";
      (e.__esModule = !0), (e.default = void 0);
      a(n(25816));
      var r = a(n(47427)),
        o = n(42287),
        i = a(n(1802));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var u = (function (t) {
        var e, n;
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
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
            var i,
              a = this.props.children,
              u = r.default.Children.toArray(a)[e];
            u.props[t] && (i = u.props)[t].apply(i, n),
              this.props[t] && this.props[t]((0, o.findDOMNode)(this));
          }),
          (u.render = function () {
            var t = this.props,
              e = t.children,
              n = t.in,
              o = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(t, ["children", "in"]),
              a = r.default.Children.toArray(e),
              u = a[0],
              c = a[1];
            return (
              delete o.onEnter,
              delete o.onEntering,
              delete o.onEntered,
              delete o.onExit,
              delete o.onExiting,
              delete o.onExited,
              r.default.createElement(
                i.default,
                o,
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
        o = u(n(47427)),
        i = u(n(42287)),
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
          var o,
            i = n.transitionGroup,
            a = i && !i.isMounting ? e.enter : e.appear;
          return (
            (r.appearStatus = null),
            e.in
              ? a
                ? ((o = l), (r.appearStatus = s))
                : (o = f)
              : (o = e.unmountOnExit || e.mountOnEnter ? c : l),
            (r.state = { status: o }),
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
              var n = i.default.findDOMNode(this);
              e === s ? this.performEnter(n, t) : this.performExit(n);
            } else
              this.props.unmountOnExit &&
                this.state.status === l &&
                this.setState({ status: c });
          }),
          (a.performEnter = function (t, e) {
            var n = this,
              r = this.props.enter,
              o = this.context.transitionGroup
                ? this.context.transitionGroup.isMounting
                : e,
              i = this.getTimeouts(),
              a = o ? i.appear : i.enter;
            e || r
              ? (this.props.onEnter(t, o),
                this.safeSetState({ status: s }, function () {
                  n.props.onEntering(t, o),
                    n.onTransitionEnd(t, a, function () {
                      n.safeSetState({ status: f }, function () {
                        n.props.onEntered(t, o);
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
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
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
            var i = o.default.Children.only(n);
            return o.default.cloneElement(i, r);
          }),
          r
        );
      })(o.default.Component);
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
        o = u(n(47427)),
        i = n(36904),
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
              o = (r = t.call(this, e, n) || this).handleExited.bind(l(l(r)));
            return (r.state = { handleExited: o, firstRender: !0 }), r;
          }
          (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n);
          var i = r.prototype;
          return (
            (i.getChildContext = function () {
              return { transitionGroup: { isMounting: !this.appeared } };
            }),
            (i.componentDidMount = function () {
              (this.appeared = !0), (this.mounted = !0);
            }),
            (i.componentWillUnmount = function () {
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
            (i.handleExited = function (t, e) {
              var n = (0, a.getChildMapping)(this.props.children);
              t.key in n ||
                (t.props.onExited && t.props.onExited(e),
                this.mounted &&
                  this.setState(function (e) {
                    var n = c({}, e.children);
                    return delete n[t.key], { children: n };
                  }));
            }),
            (i.render = function () {
              var t = this.props,
                e = t.component,
                n = t.childFactory,
                r = (function (t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = {},
                    i = Object.keys(t);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                  return o;
                })(t, ["component", "childFactory"]),
                i = s(this.state.children).map(n);
              return (
                delete r.appear,
                delete r.enter,
                delete r.exit,
                null === e ? i : o.default.createElement(e, r, i)
              );
            }),
            r
          );
        })(o.default.Component);
      (f.childContextTypes = { transitionGroup: r.default.object.isRequired }),
        (f.propTypes = {}),
        (f.defaultProps = {
          component: "div",
          childFactory: function (t) {
            return t;
          },
        });
      var p = (0, i.polyfill)(f);
      (e.default = p), (t.exports = e.default);
    },
    91514: (t, e, n) => {
      "use strict";
      var r = u(n(50268)),
        o = u(n(35994)),
        i = u(n(1802)),
        a = u(n(65403));
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      t.exports = {
        Transition: a.default,
        TransitionGroup: i.default,
        ReplaceTransition: o.default,
        CSSTransition: r.default,
      };
    },
    51117: (t, e, n) => {
      "use strict";
      (e.__esModule = !0),
        (e.getChildMapping = o),
        (e.mergeChildMappings = i),
        (e.getInitialChildMapping = function (t, e) {
          return o(t.children, function (n) {
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
          var u = o(t.children),
            c = i(e, u);
          return (
            Object.keys(c).forEach(function (o) {
              var i = c[o];
              if ((0, r.isValidElement)(i)) {
                var l = o in e,
                  s = o in u,
                  f = e[o],
                  p = (0, r.isValidElement)(f) && !f.props.in;
                !s || (l && !p)
                  ? s || !l || p
                    ? s &&
                      l &&
                      (0, r.isValidElement)(f) &&
                      (c[o] = (0, r.cloneElement)(i, {
                        onExited: n.bind(null, i),
                        in: f.props.in,
                        exit: a(i, "exit", t),
                        enter: a(i, "enter", t),
                      }))
                    : (c[o] = (0, r.cloneElement)(i, { in: !1 }))
                  : (c[o] = (0, r.cloneElement)(i, {
                      onExited: n.bind(null, i),
                      in: !0,
                      exit: a(i, "exit", t),
                      enter: a(i, "enter", t),
                    }));
              }
            }),
            c
          );
        });
      var r = n(47427);
      function o(t, e) {
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
      function i(t, e) {
        function n(n) {
          return n in e ? e[n] : t[n];
        }
        (t = t || {}), (e = e || {});
        var r,
          o = Object.create(null),
          i = [];
        for (var a in t)
          a in e ? i.length && ((o[a] = i), (i = [])) : i.push(a);
        var u = {};
        for (var c in e) {
          if (o[c])
            for (r = 0; r < o[c].length; r++) {
              var l = o[c][r];
              u[o[c][r]] = n(l);
            }
          u[c] = n(c);
        }
        for (r = 0; r < i.length; r++) u[i[r]] = n(i[r]);
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
      n.d(e, { $: () => F });
      var r = n(47427),
        o = n(84148),
        i = n(15819),
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
        m = n(91140),
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
      function S(t, e) {
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
            ? S(Object(n), !0).forEach(function (e) {
                E(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : S(Object(n)).forEach(function (e) {
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
      function P(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function A(t, e) {
        var n = t.x,
          r = t.y,
          o = P(t, w),
          i = "".concat(n),
          a = parseInt(i, 10),
          u = "".concat(r),
          c = parseInt(u, 10),
          l = "".concat(e.height || o.height),
          s = parseInt(l, 10),
          f = "".concat(e.width || o.width),
          p = parseInt(f, 10);
        return j(
          j(j(j(j({}, e), o), a ? { x: a } : {}), c ? { y: c } : {}),
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
              propTransformer: A,
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
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
                z(t, e, n[e]);
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
            Object.defineProperty(t, $(r.key), r);
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
            r = U(t);
          if (e) {
            var o = U(this).constructor;
            n = Reflect.construct(r, arguments, o);
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
      function U(t) {
        return (
          (U = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          U(t)
        );
      }
      function z(t, e, n) {
        return (
          (e = $(e)) in t
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
      function $(t) {
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
            z(R((t = c.call.apply(c, [this].concat(n)))), "state", {
              isAnimationFinished: !1,
            }),
            z(R(t), "id", (0, d.EL)("recharts-bar-")),
            z(R(t), "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), e && e();
            }),
            z(R(t), "handleAnimationStart", function () {
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
                  o = n.shape,
                  i = n.dataKey,
                  a = n.activeIndex,
                  u = n.activeBar,
                  c = (0, y.L6)(this.props);
                return (
                  t &&
                  t.map(function (t, n) {
                    var l = n === a,
                      f = l ? u : o,
                      p = D(
                        D(D({}, c), t),
                        {},
                        {
                          isActive: l,
                          option: f,
                          index: n,
                          dataKey: i,
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
                  o = e.layout,
                  a = e.isAnimationActive,
                  u = e.animationBegin,
                  c = e.animationDuration,
                  l = e.animationEasing,
                  f = e.animationId,
                  p = this.state.prevData;
                return r.createElement(
                  i.ZP,
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
                    var i = e.t,
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
                            { x: r(i), y: a(i), width: u(i), height: c(i) },
                          );
                        }
                        if ("horizontal" === o) {
                          var l = (0, d.k4)(0, t.height)(i);
                          return D(
                            D({}, t),
                            {},
                            { y: t.y + t.height - l, height: l },
                          );
                        }
                        var s = (0, d.k4)(0, t.width)(i);
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
                  o = e.dataKey,
                  i = e.activeIndex,
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
                      dataKey: o,
                      index: n,
                      key: "background-bar-".concat(n),
                      className: "recharts-bar-background-rectangle",
                    },
                  );
                  return r.createElement(
                    k,
                    C({ option: t.props.background, isActive: n === i }, l),
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
                  o = n.data,
                  i = n.xAxis,
                  a = n.yAxis,
                  u = n.layout,
                  c = n.children,
                  l = (0, y.NN)(c, f.W);
                if (!l) return null;
                var p = "vertical" === u ? o[0].height / 2 : o[0].width / 2,
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
                      data: o,
                      xAxis: i,
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
                  i = t.className,
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
                  b = (0, o.Z)("recharts-bar", i),
                  x = a && a.allowDataOverflow,
                  w = u && u.allowDataOverflow,
                  O = x || w,
                  S = l()(m) ? this.id : m;
                return r.createElement(
                  s.m,
                  { className: b },
                  x || w
                    ? r.createElement(
                        "defs",
                        null,
                        r.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(S) },
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
                      clipPath: O ? "url(#clipPath-".concat(S, ")") : null,
                    },
                    v ? this.renderBackground() : null,
                    this.renderRectangles(),
                  ),
                  this.renderErrorBar(O, S),
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
      z(F, "displayName", "Bar"),
        z(F, "defaultProps", {
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
        z(F, "getComposedData", function (t) {
          var e = t.props,
            n = t.item,
            r = t.barPosition,
            o = t.bandSize,
            i = t.xAxis,
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
            S = "horizontal" === g ? a : i,
            j = l ? S.scale.domain() : null,
            E = (0, m.Yj)({ numericAxis: S }),
            P = (0, y.NN)(w, p.b),
            A = f.map(function (t, e) {
              var r, f, p, h, y, b;
              if (
                (l
                  ? (r = (0, m.Vv)(l[s + e], j))
                  : ((r = (0, m.F$)(t, x)), Array.isArray(r) || (r = [E, r])),
                "horizontal" === g)
              ) {
                var w,
                  S = [a.scale(r[0]), a.scale(r[1])],
                  A = S[0],
                  k = S[1];
                (f = (0, m.Fy)({
                  axis: i,
                  ticks: u,
                  bandSize: o,
                  offset: v.offset,
                  entry: t,
                  index: e,
                })),
                  (p =
                    null !== (w = null != k ? k : A) && void 0 !== w
                      ? w
                      : void 0),
                  (h = v.size);
                var M = A - k;
                if (
                  ((y = Number.isNaN(M) ? 0 : M),
                  (b = { x: f, y: a.y, width: h, height: a.height }),
                  Math.abs(O) > 0 && Math.abs(y) < Math.abs(O))
                ) {
                  var T = (0, d.uY)(y || O) * (Math.abs(O) - Math.abs(y));
                  (p -= T), (y += T);
                }
              } else {
                var _ = [i.scale(r[0]), i.scale(r[1])],
                  C = _[0],
                  N = _[1];
                if (
                  ((f = C),
                  (p = (0, m.Fy)({
                    axis: a,
                    ticks: c,
                    bandSize: o,
                    offset: v.offset,
                    entry: t,
                    index: e,
                  })),
                  (h = N - C),
                  (y = v.size),
                  (b = { x: i.x, y: p, width: i.width, height: y }),
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
                  P && P[e] && P[e].props,
                ),
                {},
                {
                  tooltipPayload: [(0, m.Qo)(n, t)],
                  tooltipPosition: { x: f + h / 2, y: p + y / 2 },
                },
              );
            });
          return D({ data: A, layout: g }, h);
        });
    },
    85458: (t, e, n) => {
      "use strict";
      n.d(e, { W: () => f });
      var r = n(47427),
        o = n(47430),
        i = n(94797),
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
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
          m = (0, i.L6)(v),
          g = p.map(function (t) {
            var i = h(t, f),
              a = i.x,
              s = i.y,
              p = i.value,
              v = i.errorVal;
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
                S = s + e,
                j = S + l,
                E = S - l,
                P = O(p - g),
                A = O(p + b);
              x.push({ x1: A, y1: j, x2: A, y2: E }),
                x.push({ x1: P, y1: S, x2: A, y2: S }),
                x.push({ x1: P, y1: j, x2: P, y2: E });
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
              o.m,
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
        return r.createElement(o.m, { className: "recharts-errorBars" }, g);
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
        o = n(15819),
        i = n(8889),
        a = n.n(i),
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
        x = n(91140),
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
      function S(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
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
      function P(t) {
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
      function A(t) {
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
            var o = N(this).constructor;
            n = Reflect.construct(r, arguments, o);
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
          i,
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
              var o = r.reduce(function (t, e) {
                return t + e;
              });
              if (!o) return t.generateSimpleStrokeDasharray(n, e);
              for (
                var i = Math.floor(e / o),
                  a = e % o,
                  u = n - e,
                  c = [],
                  s = 0,
                  f = 0;
                s < r.length;
                f += r[s], ++s
              )
                if (f + r[s] > a) {
                  c = [].concat(A(r.slice(0, s)), [a - f]);
                  break;
                }
              var p = c.length % 2 == 0 ? [0, u] : [u];
              return []
                .concat(A(l.repeat(r, i)), A(c), p)
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
          (i = [
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
                  var n = t.length % 2 != 0 ? [].concat(A(t), [0]) : t,
                    r = [],
                    o = 0;
                  o < e;
                  ++o
                )
                  r = [].concat(A(r), A(n));
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
                  var o = (0, f.Z)("recharts-line-dot", t ? t.className : "");
                  n = r.createElement(h.o, j({}, e, { className: o }));
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
                  o = n.points,
                  i = n.xAxis,
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
                      data: o,
                      xAxis: i,
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
                var o = this.props,
                  i = o.dot,
                  a = o.points,
                  u = o.dataKey,
                  c = (0, g.L6)(this.props),
                  s = (0, g.L6)(i, !0),
                  f = a.map(function (t, e) {
                    var n = P(
                      P(P({ key: "dot-".concat(e), r: 3 }, c), s),
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
                    return l.renderDotItem(i, n);
                  }),
                  p = {
                    clipPath: t
                      ? "url(#clipPath-".concat(e ? "" : "dots-").concat(n, ")")
                      : null,
                  };
                return r.createElement(
                  d.m,
                  j({ className: "recharts-line-dots", key: "dots" }, p),
                  f,
                );
              },
            },
            {
              key: "renderCurveStatically",
              value: function (t, e, n, o) {
                var i = this.props,
                  a = i.type,
                  u = i.layout,
                  c = i.connectNulls,
                  l = (i.ref, S(i, w)),
                  s = P(
                    P(
                      P({}, (0, g.L6)(l, !0)),
                      {},
                      {
                        fill: "none",
                        className: "recharts-line-curve",
                        clipPath: e ? "url(#clipPath-".concat(n, ")") : null,
                        points: t,
                      },
                      o,
                    ),
                    {},
                    { type: a, layout: u, connectNulls: c },
                  );
                return r.createElement(
                  p.H,
                  j({}, s, { pathRef: this.pathRef }),
                );
              },
            },
            {
              key: "renderCurveWithAnimation",
              value: function (t, e) {
                var n = this,
                  i = this.props,
                  a = i.points,
                  u = i.strokeDasharray,
                  c = i.isAnimationActive,
                  l = i.animationBegin,
                  s = i.animationDuration,
                  f = i.animationEasing,
                  p = i.animationId,
                  h = i.animateNewValues,
                  d = i.width,
                  y = i.height,
                  v = this.state,
                  g = v.prevPoints,
                  b = v.totalLength;
                return r.createElement(
                  o.ZP,
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
                    var o = r.t;
                    if (g) {
                      var i = g.length / a.length,
                        c = a.map(function (t, e) {
                          var n = Math.floor(e * i);
                          if (g[n]) {
                            var r = g[n],
                              a = (0, m.k4)(r.x, t.x),
                              u = (0, m.k4)(r.y, t.y);
                            return P(P({}, t), {}, { x: a(o), y: u(o) });
                          }
                          if (h) {
                            var c = (0, m.k4)(2 * d, t.x),
                              l = (0, m.k4)(y / 2, t.y);
                            return P(P({}, t), {}, { x: c(o), y: l(o) });
                          }
                          return P(P({}, t), {}, { x: t.x, y: t.y });
                        });
                      return n.renderCurveStatically(c, t, e);
                    }
                    var l,
                      s = (0, m.k4)(0, b)(o);
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
                  o = n.isAnimationActive,
                  i = this.state,
                  a = i.prevPoints,
                  u = i.totalLength;
                return o && r && r.length && ((!a && u > 0) || !s()(a, r))
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
                  o = e.dot,
                  i = e.points,
                  a = e.className,
                  u = e.xAxis,
                  l = e.yAxis,
                  s = e.top,
                  p = e.left,
                  h = e.width,
                  v = e.height,
                  m = e.isAnimationActive,
                  b = e.id;
                if (n || !i || !i.length) return null;
                var x = this.state.isAnimationFinished,
                  w = 1 === i.length,
                  O = (0, f.Z)("recharts-line", a),
                  S = u && u.allowDataOverflow,
                  j = l && l.allowDataOverflow,
                  E = S || j,
                  P = c()(b) ? this.id : b,
                  A =
                    null !== (t = (0, g.L6)(o)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = A.r,
                  M = void 0 === k ? 3 : k,
                  T = A.strokeWidth,
                  _ = void 0 === T ? 2 : T,
                  C = ((0, g.$k)(o) ? o : {}).clipDot,
                  N = void 0 === C || C,
                  D = 2 * M + _;
                return r.createElement(
                  d.m,
                  { className: O },
                  S || j
                    ? r.createElement(
                        "defs",
                        null,
                        r.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(P) },
                          r.createElement("rect", {
                            x: S ? p : p - h / 2,
                            y: j ? s : s - v / 2,
                            width: S ? h : 2 * h,
                            height: j ? v : 2 * v,
                          }),
                        ),
                        !N &&
                          r.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(P) },
                            r.createElement("rect", {
                              x: p - D / 2,
                              y: s - D / 2,
                              width: h + D,
                              height: v + D,
                            }),
                          ),
                      )
                    : null,
                  !w && this.renderCurve(E, P),
                  this.renderErrorBar(E, P),
                  (w || o) && this.renderDots(E, N, P),
                  (!m || x) && y.e.renderCallByParent(this.props, i),
                );
              },
            },
          ]) && M(e.prototype, n),
          i && M(e, i),
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
            o = t.xAxisTicks,
            i = t.yAxisTicks,
            a = t.dataKey,
            u = t.bandSize,
            l = t.displayedData,
            s = t.offset,
            f = e.layout;
          return P(
            {
              points: l.map(function (t, e) {
                var l = (0, x.F$)(t, a);
                return "horizontal" === f
                  ? {
                      x: (0, x.Hv)({
                        axis: n,
                        ticks: o,
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
                        ticks: i,
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
        o = n(8889),
        i = n.n(o),
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
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
      var S = function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : i()(t)
              ? t(e)
              : r.createElement(
                  "line",
                  O({}, e, { className: "recharts-reference-line-line" }),
                );
        },
        j = function (t, e, n, r, o) {
          var i = o.viewBox,
            a = i.x,
            c = i.y,
            l = i.width,
            s = i.height,
            p = o.position;
          if (n) {
            var h = o.y,
              d = o.yAxis.orientation,
              y = t.y.apply(h, { position: p });
            if ((0, f.B)(o, "discard") && !t.y.isInRange(y)) return null;
            var v = [
              { x: a + l, y },
              { x: a, y },
            ];
            return "left" === d ? v.reverse() : v;
          }
          if (e) {
            var m = o.x,
              g = o.xAxis.orientation,
              b = t.x.apply(m, { position: p });
            if ((0, f.B)(o, "discard") && !t.x.isInRange(b)) return null;
            var x = [
              { x: b, y: c + s },
              { x: b, y: c },
            ];
            return "top" === g ? x.reverse() : x;
          }
          if (r) {
            var w = o.segment.map(function (e) {
              return t.apply(e, { position: p });
            });
            return (0, f.B)(o, "discard") &&
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
          o = t.segment,
          i = t.xAxis,
          a = t.yAxis,
          u = t.shape,
          v = t.className,
          m = t.alwaysShow,
          b = t.clipPathId;
        (0, d.Z)(
          void 0 === m,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var w = (0, h.Ky)({ x: i.scale, y: a.scale }),
          O = (0, p.P2)(e),
          E = (0, p.P2)(n),
          P = o && 2 === o.length,
          A = j(w, O, E, P, t);
        if (!A) return null;
        var k = x(A, 2),
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
          S(u, I),
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
    6256: (t, e, n) => {
      "use strict";
      n.d(e, { z: () => Ge });
      var r = n(47427),
        o = n(38716),
        i = n.n(o),
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
        S = n(12605),
        j = n(77125),
        E = n(52871);
      function P(t, e, n) {
        if (e < 1) return [];
        if (1 === e && void 0 === n) return t;
        for (var r = [], o = 0; o < t.length; o += e) {
          if (void 0 !== n && !0 !== n(t[o])) return;
          r.push(t[o]);
        }
        return r;
      }
      function A(t, e, n, r, o) {
        if (t * e < t * r || t * e > t * o) return !1;
        var i = n();
        return t * (e - (t * i) / 2 - r) >= 0 && t * (e + (t * i) / 2 - o) <= 0;
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
          o = t.ticks,
          i = t.viewBox,
          a = t.minTickGap,
          c = t.orientation,
          l = t.interval,
          s = t.tickFormatter,
          f = t.unit,
          p = t.angle;
        if (!o || !o.length || !r) return [];
        if ((0, O.hj)(l) || j.x.isSsr)
          return (function (t, e) {
            return P(t, e + 1);
          })(o, "number" == typeof l && (0, O.hj)(l) ? l : 0);
        var h = [],
          d = "top" === c || "bottom" === c ? "width" : "height",
          y =
            f && "width" === d
              ? (0, S.xE)(f, { fontSize: e, letterSpacing: n })
              : { width: 0, height: 0 },
          v = function (t, r) {
            var o = u()(s) ? s(t.value, r) : t.value;
            return "width" === d
              ? (function (t, e, n) {
                  var r = {
                    width: t.width + e.width,
                    height: t.height + e.height,
                  };
                  return (0, E.xE)(r, n);
                })((0, S.xE)(o, { fontSize: e, letterSpacing: n }), y, p)
              : (0, S.xE)(o, { fontSize: e, letterSpacing: n })[d];
          },
          m = o.length >= 2 ? (0, O.uY)(o[1].coordinate - o[0].coordinate) : 1,
          g = (function (t, e, n) {
            var r = "width" === n,
              o = t.x,
              i = t.y,
              a = t.width,
              u = t.height;
            return 1 === e
              ? { start: r ? o : i, end: r ? o + a : i + u }
              : { start: r ? o + a : i + u, end: r ? o : i };
          })(i, m, d);
        return "equidistantPreserveStart" === l
          ? (function (t, e, n, r, o) {
              for (
                var i,
                  a = (r || []).slice(),
                  u = e.start,
                  c = e.end,
                  l = 0,
                  s = 1,
                  f = u,
                  p = function () {
                    var e = null == r ? void 0 : r[l];
                    if (void 0 === e) return { v: P(r, s) };
                    var i,
                      a = l,
                      p = function () {
                        return void 0 === i && (i = n(e, a)), i;
                      },
                      h = e.coordinate,
                      d = 0 === l || A(t, h, p, f, c);
                    d || ((l = 0), (f = u), (s += 1)),
                      d && ((f = h + t * (p() / 2 + o)), (l += s));
                  };
                s <= a.length;

              )
                if ((i = p())) return i.v;
              return [];
            })(m, g, v, o, a)
          : ((h =
              "preserveStart" === l || "preserveStartEnd" === l
                ? (function (t, e, n, r, o, i) {
                    var a = (r || []).slice(),
                      u = a.length,
                      c = e.start,
                      l = e.end;
                    if (i) {
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
                        A(
                          t,
                          s.tickCoord,
                          function () {
                            return f;
                          },
                          c,
                          l,
                        ) &&
                          ((l = s.tickCoord - t * (f / 2 + o)),
                          (a[u - 1] = T(T({}, s), {}, { isShow: !0 })));
                    }
                    for (
                      var h = i ? u - 1 : u,
                        d = function (e) {
                          var r,
                            i = a[e],
                            u = function () {
                              return void 0 === r && (r = n(i, e)), r;
                            };
                          if (0 === e) {
                            var s = t * (i.coordinate - (t * u()) / 2 - c);
                            a[e] = i = T(
                              T({}, i),
                              {},
                              {
                                tickCoord:
                                  s < 0 ? i.coordinate - s * t : i.coordinate,
                              },
                            );
                          } else
                            a[e] = i = T(
                              T({}, i),
                              {},
                              { tickCoord: i.coordinate },
                            );
                          A(t, i.tickCoord, u, c, l) &&
                            ((c = i.tickCoord + t * (u() / 2 + o)),
                            (a[e] = T(T({}, i), {}, { isShow: !0 })));
                        },
                        y = 0;
                      y < h;
                      y++
                    )
                      d(y);
                    return a;
                  })(m, g, v, o, a, "preserveStartEnd" === l)
                : (function (t, e, n, r, o) {
                    for (
                      var i = (r || []).slice(),
                        a = i.length,
                        u = e.start,
                        c = e.end,
                        l = function (e) {
                          var r,
                            l = i[e],
                            s = function () {
                              return void 0 === r && (r = n(l, e)), r;
                            };
                          if (e === a - 1) {
                            var f = t * (l.coordinate + (t * s()) / 2 - c);
                            i[e] = l = T(
                              T({}, l),
                              {},
                              {
                                tickCoord:
                                  f > 0 ? l.coordinate - f * t : l.coordinate,
                              },
                            );
                          } else
                            i[e] = l = T(
                              T({}, l),
                              {},
                              { tickCoord: l.coordinate },
                            );
                          A(t, l.tickCoord, s, u, c) &&
                            ((c = l.tickCoord - t * (s() / 2 + o)),
                            (i[e] = T(T({}, l), {}, { isShow: !0 })));
                        },
                        s = a - 1;
                      s >= 0;
                      s--
                    )
                      l(s);
                    return i;
                  })(m, g, v, o, a)),
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
        U = n(94797),
        z = n(31917),
        $ = n(93998),
        F = n(47094),
        Z = n(81156),
        W = ["viewBox"],
        q = ["viewBox"],
        G = ["ticks"];
      function X(t) {
        return (
          (X =
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
          X(t)
        );
      }
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
      function H(t, e) {
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
            ? H(Object(n), !0).forEach(function (e) {
                nt(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : H(Object(n)).forEach(function (e) {
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
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
            var o = et(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === X(e) || "function" == typeof e)) return e;
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
          if ("object" !== X(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== X(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === X(e) ? e : String(e);
      }
      var ot = (function (t) {
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
          o,
          i = tt(a);
        function a(t) {
          var e;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            ((e = i.call(this, t)).state = { fontSize: "", letterSpacing: "" }),
            e
          );
        }
        return (
          (e = a),
          (o = [
            {
              key: "renderTickItem",
              value: function (t, e, n) {
                return r.isValidElement(t)
                  ? r.cloneElement(t, e)
                  : u()(t)
                    ? t(e)
                    : r.createElement(
                        $.x,
                        Y({}, e, {
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
                  r = K(t, W),
                  o = this.props,
                  i = o.viewBox,
                  a = K(o, q);
                return (
                  !(0, z.w)(n, i) || !(0, z.w)(r, a) || !(0, z.w)(e, this.state)
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
                  o,
                  i,
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
                      (a = (r = (o = l + +!d * f) - v * m) - v * y),
                      (i = g);
                    break;
                  case "left":
                    (r = o = t.coordinate),
                      (i = (e = (n = c + +!d * s) - v * m) - v * y),
                      (a = g);
                    break;
                  case "right":
                    (r = o = t.coordinate),
                      (i = (e = (n = c + +d * s) + v * m) + v * y),
                      (a = g);
                    break;
                  default:
                    (e = n = t.coordinate),
                      (a = (r = (o = l + +d * f) + v * m) + v * y),
                      (i = g);
                }
                return {
                  line: { x1: e, y1: r, x2: n, y2: o },
                  tick: { x: i, y: a },
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
                  o = t.width,
                  i = t.height,
                  a = t.orientation,
                  u = t.mirror,
                  c = t.axisLine,
                  l = V(
                    V(V({}, (0, U.L6)(this.props)), (0, U.L6)(c)),
                    {},
                    { fill: "none" },
                  );
                if ("top" === a || "bottom" === a) {
                  var s = +(("top" === a && !u) || ("bottom" === a && u));
                  l = V(
                    V({}, l),
                    {},
                    { x1: e, y1: n + s * i, x2: e + o, y2: n + s * i },
                  );
                } else {
                  var p = +(("left" === a && !u) || ("right" === a && u));
                  l = V(
                    V({}, l),
                    {},
                    { x1: e + p * o, y1: n, x2: e + p * o, y2: n + i },
                  );
                }
                return r.createElement(
                  "line",
                  Y({}, l, {
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
                var o = this,
                  i = this.props,
                  c = i.tickLine,
                  l = i.stroke,
                  s = i.tick,
                  p = i.tickFormatter,
                  h = i.unit,
                  d = C(V(V({}, this.props), {}, { ticks: t }), e, n),
                  y = this.getTickTextAnchor(),
                  v = this.getTickVerticalAnchor(),
                  m = (0, U.L6)(this.props),
                  g = (0, U.L6)(s),
                  b = V(V({}, m), {}, { fill: "none" }, (0, U.L6)(c)),
                  w = d.map(function (t, e) {
                    var n = o.getTickLineCoord(t),
                      i = n.line,
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
                      Y(
                        {
                          className: "recharts-cartesian-axis-tick",
                          key: "tick-"
                            .concat(t.value, "-")
                            .concat(t.coordinate, "-")
                            .concat(t.tickCoord),
                        },
                        (0, Z.bw)(o.props, t, e),
                      ),
                      c &&
                        r.createElement(
                          "line",
                          Y({}, b, i, {
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
                  o = e.width,
                  i = e.height,
                  a = e.ticksGenerator,
                  c = e.className;
                if (e.hide) return null;
                var l = this.props,
                  s = l.ticks,
                  f = K(l, G),
                  p = s;
                return (
                  u()(a) && (p = s && s.length > 0 ? a(this.props) : a(f)),
                  o <= 0 || i <= 0 || !p || !p.length
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
                        F._.renderCallByParent(this.props),
                      )
                );
              },
            },
          ]) && J(e.prototype, n),
          o && J(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(r.Component);
      nt(ot, "displayName", "CartesianAxis"),
        nt(ot, "defaultProps", {
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
      var it = n(9756),
        at = n(91140);
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
            var o = xt(this).constructor;
            n = Reflect.construct(r, arguments, o);
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
      var St = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        jt = (function (t) {
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
            o,
            i = gt(a);
          function a(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              wt(bt((e = i.call(this, t))), "handleDrag", function (t) {
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
                      o = t.startIndex;
                    null == r || r({ endIndex: n, startIndex: o });
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
                var n = St(t) ? t.changedTouches[0] : t;
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
            (o = [
              {
                key: "renderDefaultTraveller",
                value: function (t) {
                  var e = t.x,
                    n = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.stroke,
                    u = Math.floor(n + i / 2) - 1;
                  return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement("rect", {
                      x: e,
                      y: n,
                      width: o,
                      height: i,
                      fill: a,
                      stroke: "none",
                    }),
                    r.createElement("line", {
                      x1: e + 1,
                      y1: u,
                      x2: e + o - 1,
                      y2: u,
                      fill: "none",
                      stroke: "#fff",
                    }),
                    r.createElement("line", {
                      x1: e + 1,
                      y1: u + 2,
                      x2: e + o - 1,
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
                    o = t.x,
                    i = t.travellerWidth,
                    a = t.updateId,
                    u = t.startIndex,
                    c = t.endIndex;
                  if (n !== e.prevData || a !== e.prevUpdateId)
                    return yt(
                      {
                        prevData: n,
                        prevTravellerWidth: i,
                        prevUpdateId: a,
                        prevX: o,
                        prevWidth: r,
                      },
                      n && n.length
                        ? (function (t) {
                            var e = t.data,
                              n = t.startIndex,
                              r = t.endIndex,
                              o = t.x,
                              i = t.width,
                              a = t.travellerWidth;
                            if (!e || !e.length) return {};
                            var u = e.length,
                              c = (0, it.x)()
                                .domain(l()(0, u))
                                .range([o, o + i - a]),
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
                            x: o,
                            travellerWidth: i,
                            startIndex: u,
                            endIndex: c,
                          })
                        : { scale: null, scaleValues: null },
                    );
                  if (
                    e.scale &&
                    (r !== e.prevWidth ||
                      o !== e.prevX ||
                      i !== e.prevTravellerWidth)
                  ) {
                    e.scale.range([o, o + r - i]);
                    var s = e.scale.domain().map(function (t) {
                      return e.scale(t);
                    });
                    return {
                      prevData: n,
                      prevTravellerWidth: i,
                      prevUpdateId: a,
                      prevX: o,
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
                    var o = Math.floor((n + r) / 2);
                    t[o] > e ? (r = o) : (n = o);
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
                    o = this.props,
                    i = o.gap,
                    u = o.data.length - 1,
                    c = Math.min(e, n),
                    l = Math.max(e, n),
                    s = a.getIndexInRange(r, c),
                    f = a.getIndexInRange(r, l);
                  return {
                    startIndex: s - (s % i),
                    endIndex: f === u ? u : f - (f % i),
                  };
                },
              },
              {
                key: "getTextOfTick",
                value: function (t) {
                  var e = this.props,
                    n = e.data,
                    r = e.tickFormatter,
                    o = e.dataKey,
                    i = (0, at.F$)(n[t], o, t);
                  return u()(r) ? r(i, t) : i;
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
                    o = e.endX,
                    i = this.props,
                    a = i.x,
                    u = i.width,
                    c = i.travellerWidth,
                    l = i.startIndex,
                    s = i.endIndex,
                    f = i.onChange,
                    p = t.pageX - n;
                  p > 0
                    ? (p = Math.min(p, a + u - c - o, a + u - c - r))
                    : p < 0 && (p = Math.max(p, a - r, a - o));
                  var h = this.getIndex({ startX: r + p, endX: o + p });
                  (h.startIndex === l && h.endIndex === s) || !f || f(h),
                    this.setState({
                      startX: r + p,
                      endX: o + p,
                      slideMoveStartX: t.pageX,
                    });
                },
              },
              {
                key: "handleTravellerDragStart",
                value: function (t, e) {
                  var n = St(e) ? e.changedTouches[0] : e;
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
                    o = n.movingTravellerId,
                    i = n.endX,
                    a = n.startX,
                    u = this.state[o],
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
                    (y[o] = u + v);
                  var m = this.getIndex(y),
                    g = m.startIndex,
                    b = m.endIndex;
                  this.setState(
                    (wt((e = {}), o, u + v),
                    wt(e, "brushMoveStartX", t.pageX),
                    e),
                    function () {
                      var t;
                      p &&
                        ((t = d.length - 1),
                        (("startX" === o &&
                          (i > a ? g % h == 0 : b % h == 0)) ||
                          (i < a && b === t) ||
                          ("endX" === o && (i > a ? b % h == 0 : g % h == 0)) ||
                          (i > a && b === t)) &&
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
                    o = r.scaleValues,
                    i = r.startX,
                    a = r.endX,
                    u = this.state[e],
                    c = o.indexOf(u);
                  if (-1 !== c) {
                    var l = c + t;
                    if (!(-1 === l || l >= o.length)) {
                      var s = o[l];
                      ("startX" === e && s >= a) ||
                        ("endX" === e && s <= i) ||
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
                    o = t.width,
                    i = t.height,
                    a = t.fill,
                    u = t.stroke;
                  return r.createElement("rect", {
                    stroke: u,
                    fill: a,
                    x: e,
                    y: n,
                    width: o,
                    height: i,
                  });
                },
              },
              {
                key: "renderPanorama",
                value: function () {
                  var t = this.props,
                    e = t.x,
                    n = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.data,
                    u = t.children,
                    c = t.padding,
                    l = r.Children.only(u);
                  return l
                    ? r.cloneElement(l, {
                        x: e,
                        y: n,
                        width: o,
                        height: i,
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
                    o = this.props,
                    i = o.y,
                    u = o.travellerWidth,
                    c = o.height,
                    l = o.traveller,
                    s = o.ariaLabel,
                    f = o.data,
                    p = o.startIndex,
                    h = o.endIndex,
                    d = Math.max(t, this.props.x),
                    y = yt(
                      yt({}, (0, U.L6)(this.props)),
                      {},
                      { x: d, y: i, width: u, height: c },
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
                    o = n.y,
                    i = n.height,
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
                    y: o,
                    width: l,
                    height: i,
                  });
                },
              },
              {
                key: "renderText",
                value: function () {
                  var t = this.props,
                    e = t.startIndex,
                    n = t.endIndex,
                    o = t.y,
                    i = t.height,
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
                      $.x,
                      ht(
                        {
                          textAnchor: "end",
                          verticalAnchor: "middle",
                          x: Math.min(l, s) - 5,
                          y: o + i / 2,
                        },
                        f,
                      ),
                      this.getTextOfTick(e),
                    ),
                    r.createElement(
                      $.x,
                      ht(
                        {
                          textAnchor: "start",
                          verticalAnchor: "middle",
                          x: Math.max(l, s) + a + 5,
                          y: o + i / 2,
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
                    o = t.children,
                    i = t.x,
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
                    !(0, O.hj)(i) ||
                    !(0, O.hj)(a) ||
                    !(0, O.hj)(u) ||
                    !(0, O.hj)(c) ||
                    u <= 0 ||
                    c <= 0
                  )
                    return null;
                  var m = (0, x.Z)("recharts-brush", n),
                    g = 1 === r.Children.count(o),
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
            o && vt(e, o),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(r.PureComponent);
      wt(jt, "displayName", "Brush"),
        wt(jt, "defaultProps", {
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
        Pt = n(75658),
        At = n(90481);
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
          o = t.r,
          i = t.alwaysShow,
          a = t.clipPathId,
          u = (0, O.P2)(e),
          c = (0, O.P2)(n);
        if (
          ((0, At.Z)(
            void 0 === i,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
          ),
          !u || !c)
        )
          return null;
        var l = (function (t) {
          var e = t.x,
            n = t.y,
            r = t.xAxis,
            o = t.yAxis,
            i = (0, E.Ky)({ x: r.scale, y: o.scale }),
            a = i.apply({ x: e, y: n }, { bandAware: !0 });
          return (0, Pt.B)(t, "discard") && !i.isInRange(a) ? null : a;
        })(t);
        if (!l) return null;
        var s = l.x,
          f = l.y,
          p = t.shape,
          h = t.className,
          d = _t(
            _t(
              {
                clipPath: (0, Pt.B)(t, "hidden")
                  ? "url(#".concat(a, ")")
                  : void 0,
              },
              (0, U.L6)(t, !0),
            ),
            {},
            { cx: s, cy: f },
          );
        return r.createElement(
          D.m,
          { className: (0, x.Z)("recharts-reference-dot", h) },
          Nt.renderDot(p, d),
          F._.renderCallByParent(t, {
            x: s - o,
            y: f - o,
            width: 2 * o,
            height: 2 * o,
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
                Ut(t, e, n[e]);
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
      function Ut(t, e, n) {
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
      function zt(t) {
        var e = t.x1,
          n = t.x2,
          o = t.y1,
          i = t.y2,
          a = t.className,
          u = t.alwaysShow,
          c = t.clipPathId;
        (0, At.Z)(
          void 0 === u,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var l = (0, O.P2)(e),
          s = (0, O.P2)(n),
          f = (0, O.P2)(o),
          p = (0, O.P2)(i),
          h = t.shape;
        if (!(l || s || f || p || h)) return null;
        var d = (function (t, e, n, r, o) {
          var i = o.x1,
            a = o.x2,
            u = o.y1,
            c = o.y2,
            l = o.xAxis,
            s = o.yAxis;
          if (!l || !s) return null;
          var f = (0, E.Ky)({ x: l.scale, y: s.scale }),
            p = {
              x: t ? f.x.apply(i, { position: "start" }) : f.x.rangeMin,
              y: n ? f.y.apply(u, { position: "start" }) : f.y.rangeMin,
            },
            h = {
              x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
              y: r ? f.y.apply(c, { position: "end" }) : f.y.rangeMax,
            };
          return !(0, Pt.B)(o, "discard") || (f.isInRange(p) && f.isInRange(h))
            ? (0, E.O1)(p, h)
            : null;
        })(l, s, f, p, t);
        if (!d && !h) return null;
        var y = (0, Pt.B)(t, "hidden") ? "url(#".concat(c, ")") : void 0;
        return r.createElement(
          D.m,
          { className: (0, x.Z)("recharts-reference-area", a) },
          zt.renderRect(h, Rt(Rt({ clipPath: y }, (0, U.L6)(t, !0)), d)),
          F._.renderCallByParent(t, d),
        );
      }
      function $t(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Ft(t);
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
            if ("string" == typeof t) return Ft(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ft(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Ft(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      (zt.displayName = "ReferenceArea"),
        (zt.defaultProps = {
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
        (zt.renderRect = function (t, e) {
          return r.isValidElement(t)
            ? r.cloneElement(t, e)
            : u()(t)
              ? t(e)
              : r.createElement(
                  R.A,
                  Bt({}, e, { className: "recharts-reference-area-rect" }),
                );
        });
      var Zt = function (t, e, n, r, o) {
          var i = (0, U.NN)(t, Dt.d),
            a = (0, U.NN)(t, Nt),
            u = [].concat($t(i), $t(a)),
            c = (0, U.NN)(t, zt),
            l = "".concat(r, "Id"),
            s = r[0],
            f = e;
          if (
            (u.length &&
              (f = u.reduce(function (t, e) {
                if (
                  e.props[l] === n &&
                  (0, Pt.B)(e.props, "extendDomain") &&
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
                (0, Pt.B)(e.props, "extendDomain") &&
                (0, O.hj)(e.props[p]) &&
                (0, O.hj)(e.props[h])
              ) {
                var r = e.props[p],
                  o = e.props[h];
                return [Math.min(t[0], r, o), Math.max(t[1], r, o)];
              }
              return t;
            }, f);
          }
          return (
            o &&
              o.length &&
              (f = o.reduce(function (t, e) {
                return (0, O.hj)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        Wt = n(53460),
        qt = n(84682),
        Gt = new (n.n(qt)())(),
        Xt = "recharts.syncMouseEvents";
      function Yt(t) {
        return (
          (Yt =
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
          Yt(t)
        );
      }
      function Ht(t, e) {
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
          if ("object" !== Yt(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== Yt(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === Yt(e) ? e : String(e);
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
                  o = void 0 === r ? null : r,
                  i = t.layout,
                  a = void 0 === i ? null : i,
                  u = t.offset,
                  c = void 0 === u ? null : u,
                  l = t.mouseHandlerCallback,
                  s = void 0 === l ? null : l;
                (this.coordinateList = null != n ? n : this.coordinateList),
                  (this.container = null != o ? o : this.container),
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
                    o = n.y,
                    i = n.height,
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
                    s = o + this.offset.top + i / 2 + c;
                  this.mouseHandlerCallback({ pageX: l, pageY: s });
                }
              },
            },
          ]) && Ht(e.prototype, n),
          r && Ht(e, r),
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
      function oe(t, e) {
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
      function ie(t, e, n) {
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var ue = function (t, e, n, r, o, i) {
          return "M"
            .concat(t, ",")
            .concat(o, "v")
            .concat(r, "M")
            .concat(i, ",")
            .concat(e, "h")
            .concat(n);
        },
        ce = function (t) {
          var e = t.x,
            n = void 0 === e ? 0 : e,
            o = t.y,
            i = void 0 === o ? 0 : o,
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
                  ? oe(Object(n), !0).forEach(function (e) {
                      ie(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n),
                      )
                    : oe(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e),
                        );
                      });
              }
              return t;
            })({ x: n, y: i, top: u, left: l, width: f, height: h }, ae(t, ne));
          return (0, O.hj)(n) &&
            (0, O.hj)(i) &&
            (0, O.hj)(f) &&
            (0, O.hj)(h) &&
            (0, O.hj)(u) &&
            (0, O.hj)(l)
            ? r.createElement(
                "path",
                re({}, (0, U.L6)(y, !0), {
                  className: (0, x.Z)("recharts-cross", d),
                  d: ue(n, i, f, h, u, l),
                }),
              )
            : null;
        };
      function le(t) {
        var e = t.cx,
          n = t.cy,
          r = t.radius,
          o = t.startAngle,
          i = t.endAngle;
        return {
          points: [(0, Wt.op)(e, n, r, o), (0, Wt.op)(e, n, r, i)],
          cx: e,
          cy: n,
          radius: r,
          startAngle: o,
          endAngle: i,
        };
      }
      var se = n(55287);
      function fe(t, e, n) {
        var r, o, i, a;
        if ("horizontal" === t)
          (i = r = e.x), (o = n.top), (a = n.top + n.height);
        else if ("vertical" === t)
          (a = o = e.y), (r = n.left), (i = n.left + n.width);
        else if (null != e.cx && null != e.cy) {
          if ("centric" !== t) return le(e);
          var u = e.cx,
            c = e.cy,
            l = e.innerRadius,
            s = e.outerRadius,
            f = e.angle,
            p = (0, Wt.op)(u, c, l, f),
            h = (0, Wt.op)(u, c, s, f);
          (r = p.x), (o = p.y), (i = h.x), (a = h.y);
        }
        return [
          { x: r, y: o },
          { x: i, y: a },
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
          o = t.tooltipEventType,
          i = t.isActive,
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
          !i ||
          !a ||
          ("ScatterChart" !== p && "axis" !== o)
        )
          return null;
        var h = te.H;
        if ("ScatterChart" === p) (e = a), (h = ce);
        else if ("BarChart" === p)
          (e = (function (t, e, n, r) {
            var o = r / 2;
            return {
              stroke: "none",
              fill: "#ccc",
              x: "horizontal" === t ? e.x - o : n.left + 0.5,
              y: "horizontal" === t ? n.top + 0.5 : e.y - o,
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
            (0, U.L6)(n.props.cursor),
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function Se(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, De(r.key), r);
        }
      }
      function je(t, e) {
        return (
          (je = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          je(t, e)
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
            r = Ae(t);
          if (e) {
            var o = Ae(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === be(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return Pe(t);
          })(this, n);
        };
      }
      function Pe(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function Ae(t) {
        return (
          (Ae = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ae(t)
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
            o = e.dataEndIndex,
            i = (null != n ? n : []).reduce(function (t, e) {
              var n = e.props.data;
              return n && n.length ? [].concat(ke(t), ke(n)) : t;
            }, []);
          return i.length > 0
            ? i
            : t && t.length && (0, O.hj)(r) && (0, O.hj)(o)
              ? t.slice(r, o + 1)
              : [];
        };
      function Ue(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var ze = function (t, e, n, r) {
          var o = t.graphicalItems,
            i = t.tooltipAxis,
            a = Re(e, t);
          return n < 0 || !o || !o.length || n >= a.length
            ? null
            : o.reduce(function (o, u) {
                var c;
                if (u.props.hide) return o;
                var l,
                  s = null !== (c = u.props.data) && void 0 !== c ? c : e;
                if (
                  (s &&
                    t.dataStartIndex + t.dataEndIndex !== 0 &&
                    (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
                  i.dataKey && !i.allowDuplicatedCategory)
                ) {
                  var f = void 0 === s ? a : s;
                  l = (0, O.Ap)(f, i.dataKey, r);
                } else l = (s && s[n]) || a[n];
                return l ? [].concat(ke(o), [(0, at.Qo)(u, l)]) : o;
              }, []);
        },
        $e = function (t, e, n, r) {
          var o = r || { x: t.chartX, y: t.chartY },
            i = (function (t, e) {
              return "horizontal" === e
                ? t.x
                : "vertical" === e
                  ? t.y
                  : "centric" === e
                    ? t.angle
                    : t.radius;
            })(o, n),
            a = t.orderedTooltipTicks,
            u = t.tooltipAxis,
            c = t.tooltipTicks,
            l = (0, at.VO)(i, a, c, u);
          if (l >= 0 && c) {
            var s = c[l] && c[l].value,
              f = ze(t, e, l, s),
              p = (function (t, e, n, r) {
                var o = e.find(function (t) {
                  return t && t.index === n;
                });
                if (o) {
                  if ("horizontal" === t) return { x: o.coordinate, y: r.y };
                  if ("vertical" === t) return { x: r.x, y: o.coordinate };
                  if ("centric" === t) {
                    var i = o.coordinate,
                      a = r.radius;
                    return Ce(
                      Ce(Ce({}, r), (0, Wt.op)(r.cx, r.cy, a, i)),
                      {},
                      { angle: i, radius: a },
                    );
                  }
                  var u = o.coordinate,
                    c = r.angle;
                  return Ce(
                    Ce(Ce({}, r), (0, Wt.op)(r.cx, r.cy, u, c)),
                    {},
                    { angle: c, radius: u },
                  );
                }
                return Le;
              })(n, a, l, o);
            return {
              activeTooltipIndex: l,
              activeLabel: s,
              activePayload: f,
              activeCoordinate: p,
            };
          }
          return null;
        },
        Fe = function (t, e) {
          var n = e.axes,
            r = e.graphicalItems,
            o = e.axisType,
            a = e.axisIdKey,
            u = e.stackGroups,
            c = e.dataStartIndex,
            s = e.dataEndIndex,
            f = t.layout,
            p = t.children,
            h = t.stackOffset,
            d = (0, at.NA)(f, o);
          return n.reduce(function (e, n) {
            var y,
              v = n.props,
              m = v.type,
              g = v.dataKey,
              b = v.allowDataOverflow,
              x = v.allowDuplicatedCategory,
              w = v.scale,
              S = v.ticks,
              j = v.includeHidden,
              E = n.props[a];
            if (e[E]) return e;
            var P,
              A,
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
                  o = null == t ? void 0 : t[1];
                if (r && o && (0, O.hj)(r) && (0, O.hj)(o)) return !0;
              }
              return !1;
            })(n.props.domain, b, m) &&
              ((P = (0, at.LG)(n.props.domain, null, b)),
              !d ||
                ("number" !== m && "auto" === w) ||
                (k = (0, at.gF)(M, g, "category")));
            var _ = Ue(m);
            if (!P || 0 === P.length) {
              var C,
                N = null !== (C = n.props.domain) && void 0 !== C ? C : _;
              if (g) {
                if (((P = (0, at.gF)(M, g, m)), "category" === m && d)) {
                  var D = (0, O.bv)(P);
                  x && D
                    ? ((A = P), (P = l()(0, T)))
                    : x ||
                      (P = (0, at.ko)(N, P, n).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(ke(t), [e]);
                      }, []));
                } else if ("category" === m)
                  P = x
                    ? P.filter(function (t) {
                        return "" !== t && !i()(t);
                      })
                    : (0, at.ko)(N, P, n).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || "" === e || i()(e)
                          ? t
                          : [].concat(ke(t), [e]);
                      }, []);
                else if ("number" === m) {
                  var I = (0, at.ZI)(
                    M,
                    r.filter(function (t) {
                      return t.props[a] === E && (j || !t.props.hide);
                    }),
                    g,
                    o,
                    f,
                  );
                  I && (P = I);
                }
                !d ||
                  ("number" !== m && "auto" === w) ||
                  (k = (0, at.gF)(M, g, "category"));
              } else
                P = d
                  ? l()(0, T)
                  : u && u[E] && u[E].hasStack && "number" === m
                    ? "expand" === h
                      ? [0, 1]
                      : (0, at.EB)(u[E].stackGroups, c, s)
                    : (0, at.s6)(
                        M,
                        r.filter(function (t) {
                          return t.props[a] === E && (j || !t.props.hide);
                        }),
                        m,
                        f,
                        !0,
                      );
              if ("number" === m)
                (P = Zt(p, P, E, o, S)), N && (P = (0, at.LG)(N, P, b));
              else if ("category" === m && N) {
                var B = N;
                P.every(function (t) {
                  return B.indexOf(t) >= 0;
                }) && (P = B);
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
                    axisType: o,
                    domain: P,
                    categoricalDomain: k,
                    duplicateDomain: A,
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
        Ze = function (t, e) {
          var n = e.axisType,
            r = void 0 === n ? "xAxis" : n,
            o = e.AxisComp,
            i = e.graphicalItems,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            s = t.children,
            p = "".concat(r, "Id"),
            h = (0, U.NN)(s, o),
            d = {};
          return (
            h && h.length
              ? (d = Fe(t, {
                  axes: h,
                  graphicalItems: i,
                  axisType: r,
                  axisIdKey: p,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                }))
              : i &&
                i.length &&
                (d = (function (t, e) {
                  var n = e.graphicalItems,
                    r = e.Axis,
                    o = e.axisType,
                    i = e.axisIdKey,
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
                    y = (0, at.NA)(s, o),
                    v = -1;
                  return n.reduce(function (t, e) {
                    var m,
                      g = e.props[i],
                      b = Ue("number");
                    return t[g]
                      ? t
                      : (v++,
                        y
                          ? (m = l()(0, d))
                          : a && a[g] && a[g].hasStack
                            ? ((m = (0, at.EB)(a[g].stackGroups, u, c)),
                              (m = Zt(p, m, g, o)))
                            : ((m = (0, at.LG)(
                                b,
                                (0, at.s6)(
                                  h,
                                  n.filter(function (t) {
                                    return t.props[i] === g && !t.props.hide;
                                  }),
                                  "number",
                                  s,
                                ),
                                r.defaultProps.allowDataOverflow,
                              )),
                              (m = Zt(p, m, g, o))),
                        Ce(
                          Ce({}, t),
                          {},
                          Ne(
                            {},
                            g,
                            Ce(
                              Ce({ axisType: o }, r.defaultProps),
                              {},
                              {
                                hide: !0,
                                orientation: f()(
                                  Ie,
                                  "".concat(o, ".").concat(v % 2),
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
                  Axis: o,
                  graphicalItems: i,
                  axisType: r,
                  axisIdKey: p,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                })),
            d
          );
        },
        We = function (t) {
          var e = t.children,
            n = t.defaultShowTooltip,
            r = (0, U.sP)(e, jt),
            o = 0,
            i = 0;
          return (
            t.data && 0 !== t.data.length && (i = t.data.length - 1),
            r &&
              r.props &&
              (r.props.startIndex >= 0 && (o = r.props.startIndex),
              r.props.endIndex >= 0 && (i = r.props.endIndex)),
            {
              chartX: 0,
              chartY: 0,
              dataStartIndex: o,
              dataEndIndex: i,
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
        Ge = function (t) {
          var e,
            n = t.chartName,
            o = t.GraphicalChild,
            a = t.defaultTooltipEventType,
            c = void 0 === a ? "axis" : a,
            l = t.validateTooltipEventTypes,
            s = void 0 === l ? ["axis"] : l,
            p = t.axisComponents,
            d = t.legendContent,
            v = t.formatAxisMap,
            g = t.defaultProps,
            j = function (t, e) {
              var n = e.graphicalItems,
                r = e.stackGroups,
                o = e.offset,
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
                      var e = (0, U.Gf)(t && t.type);
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
                    S = g.maxBarSize,
                    j = n.props["".concat(v, "Id")],
                    E = n.props["".concat(m, "Id")],
                    P = p.reduce(function (t, r) {
                      var o,
                        i = e["".concat(r.axisType, "Map")],
                        a = n.props["".concat(r.axisType, "Id")];
                      (i && i[a]) || "zAxis" === r.axisType || (0, w.Z)(!1);
                      var u = i[a];
                      return Ce(
                        Ce({}, t),
                        {},
                        (Ne((o = {}), r.axisType, u),
                        Ne(o, "".concat(r.axisType, "Ticks"), (0, at.uY)(u)),
                        o),
                      );
                    }, {}),
                    A = P[m],
                    k = P["".concat(m, "Ticks")],
                    M =
                      r &&
                      r[j] &&
                      r[j].hasStack &&
                      (0, at.O3)(n, r[j].stackGroups),
                    T = (0, U.Gf)(n.type).indexOf("Bar") >= 0,
                    _ = (0, at.zT)(A, k),
                    C = [];
                  if (T) {
                    var N,
                      D,
                      I = i()(S) ? d : S,
                      B =
                        null !==
                          (N =
                            null !== (D = (0, at.zT)(A, k, !0)) && void 0 !== D
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
                              Ce({}, P),
                              {},
                              {
                                displayedData: y,
                                props: t,
                                dataKey: O,
                                item: n,
                                bandSize: _,
                                barPosition: C,
                                offset: o,
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
                        Ne(L, v, P[v]),
                        Ne(L, m, P[m]),
                        Ne(L, "animationId", a),
                        L),
                      ),
                      childIndex: (0, U.$R)(n, t.children),
                      item: n,
                    });
                }),
                x
              );
            },
            E = function (t, e) {
              var r = t.props,
                i = t.dataStartIndex,
                a = t.dataEndIndex,
                u = t.updateId;
              if (!(0, U.TT)({ props: r })) return null;
              var c = r.children,
                l = r.layout,
                s = r.stackOffset,
                d = r.data,
                y = r.reverseStackOrder,
                m = qe(l),
                g = m.numericAxisName,
                b = m.cateAxisName,
                x = (0, U.NN)(c, o),
                w = (0, at.wh)(
                  d,
                  x,
                  "".concat(g, "Id"),
                  "".concat(b, "Id"),
                  s,
                  y,
                ),
                S = p.reduce(function (t, e) {
                  var n = "".concat(e.axisType, "Map");
                  return Ce(
                    Ce({}, t),
                    {},
                    Ne(
                      {},
                      n,
                      Ze(
                        r,
                        Ce(
                          Ce({}, e),
                          {},
                          {
                            graphicalItems: x,
                            stackGroups: e.axisType === g && w,
                            dataStartIndex: i,
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
                    o = t.xAxisMap,
                    i = void 0 === o ? {} : o,
                    a = t.yAxisMap,
                    u = void 0 === a ? {} : a,
                    c = n.width,
                    l = n.height,
                    s = n.children,
                    p = n.margin || {},
                    h = (0, U.sP)(s, jt),
                    d = (0, U.sP)(s, B.D),
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
                    v = Object.keys(i).reduce(
                      function (t, e) {
                        var n = i[e],
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
                  h && (m.bottom += h.props.height || jt.defaultProps.height),
                    d && e && (m = (0, at.By)(m, r, n, e));
                  var b = c - m.left - m.right,
                    x = l - m.top - m.bottom;
                  return Ce(
                    Ce({ brushBottom: g }, m),
                    {},
                    { width: Math.max(b, 0), height: Math.max(x, 0) },
                  );
                })(
                  Ce(Ce({}, S), {}, { props: r, graphicalItems: x }),
                  null == e ? void 0 : e.legendBBox,
                );
              Object.keys(S).forEach(function (t) {
                S[t] = v(r, S[t], E, t.replace("Map", ""), n);
              });
              var P,
                A,
                k,
                M = S["".concat(b, "Map")],
                T =
                  ((P = M),
                  (A = (0, O.Kt)(P)),
                  {
                    tooltipTicks: (k = (0, at.uY)(A, !1, !0)),
                    orderedTooltipTicks: h()(k, function (t) {
                      return t.coordinate;
                    }),
                    tooltipAxis: A,
                    tooltipAxisBandSize: (0, at.zT)(A, k),
                  }),
                _ = j(
                  r,
                  Ce(
                    Ce({}, S),
                    {},
                    {
                      dataStartIndex: i,
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
                  e && je(t, e);
              })(p, t);
              var e,
                o,
                a,
                l = Ee(p);
              function p(t) {
                var e, o, a;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, p),
                  Ne(
                    Pe((a = l.call(this, t))),
                    "eventEmitterSymbol",
                    Symbol("rechartsEventEmitter"),
                  ),
                  Ne(Pe(a), "accessibilityManager", new Jt()),
                  Ne(Pe(a), "handleLegendBBoxUpdate", function (t) {
                    if (t) {
                      var e = a.state,
                        n = e.dataStartIndex,
                        r = e.dataEndIndex,
                        o = e.updateId;
                      a.setState(
                        Ce(
                          { legendBBox: t },
                          E(
                            {
                              props: a.props,
                              dataStartIndex: n,
                              dataEndIndex: r,
                              updateId: o,
                            },
                            Ce(Ce({}, a.state), {}, { legendBBox: t }),
                          ),
                        ),
                      );
                    }
                  }),
                  Ne(Pe(a), "handleReceiveSyncEvent", function (t, e, n) {
                    if (a.props.syncId === t) {
                      if (
                        n === a.eventEmitterSymbol &&
                        "function" != typeof a.props.syncMethod
                      )
                        return;
                      a.applySyncEvent(e);
                    }
                  }),
                  Ne(Pe(a), "handleBrushChange", function (t) {
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
                  Ne(Pe(a), "handleMouseEnter", function (t) {
                    var e = a.getMouseInfo(t);
                    if (e) {
                      var n = Ce(Ce({}, e), {}, { isTooltipActive: !0 });
                      a.setState(n), a.triggerSyncEvent(n);
                      var r = a.props.onMouseEnter;
                      u()(r) && r(n, t);
                    }
                  }),
                  Ne(Pe(a), "triggeredAfterMouseMove", function (t) {
                    var e = a.getMouseInfo(t),
                      n = e
                        ? Ce(Ce({}, e), {}, { isTooltipActive: !0 })
                        : { isTooltipActive: !1 };
                    a.setState(n), a.triggerSyncEvent(n);
                    var r = a.props.onMouseMove;
                    u()(r) && r(n, t);
                  }),
                  Ne(Pe(a), "handleItemMouseEnter", function (t) {
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
                  Ne(Pe(a), "handleItemMouseLeave", function () {
                    a.setState(function () {
                      return { isTooltipActive: !1 };
                    });
                  }),
                  Ne(Pe(a), "handleMouseMove", function (t) {
                    t.persist(), a.throttleTriggeredAfterMouseMove(t);
                  }),
                  Ne(Pe(a), "handleMouseLeave", function (t) {
                    var e = { isTooltipActive: !1 };
                    a.setState(e), a.triggerSyncEvent(e);
                    var n = a.props.onMouseLeave;
                    u()(n) && n(e, t);
                  }),
                  Ne(Pe(a), "handleOuterEvent", function (t) {
                    var e,
                      n = (0, U.Bh)(t),
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
                  Ne(Pe(a), "handleClick", function (t) {
                    var e = a.getMouseInfo(t);
                    if (e) {
                      var n = Ce(Ce({}, e), {}, { isTooltipActive: !0 });
                      a.setState(n), a.triggerSyncEvent(n);
                      var r = a.props.onClick;
                      u()(r) && r(n, t);
                    }
                  }),
                  Ne(Pe(a), "handleMouseDown", function (t) {
                    var e = a.props.onMouseDown;
                    u()(e) && e(a.getMouseInfo(t), t);
                  }),
                  Ne(Pe(a), "handleMouseUp", function (t) {
                    var e = a.props.onMouseUp;
                    u()(e) && e(a.getMouseInfo(t), t);
                  }),
                  Ne(Pe(a), "handleTouchMove", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                  }),
                  Ne(Pe(a), "handleTouchStart", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.handleMouseDown(t.changedTouches[0]);
                  }),
                  Ne(Pe(a), "handleTouchEnd", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.handleMouseUp(t.changedTouches[0]);
                  }),
                  Ne(Pe(a), "triggerSyncEvent", function (t) {
                    void 0 !== a.props.syncId &&
                      Gt.emit(Xt, a.props.syncId, t, a.eventEmitterSymbol);
                  }),
                  Ne(Pe(a), "applySyncEvent", function (t) {
                    var e = a.props,
                      n = e.layout,
                      r = e.syncMethod,
                      o = a.state.updateId,
                      i = t.dataStartIndex,
                      u = t.dataEndIndex;
                    if (
                      void 0 !== t.dataStartIndex ||
                      void 0 !== t.dataEndIndex
                    )
                      a.setState(
                        Ce(
                          { dataStartIndex: i, dataEndIndex: u },
                          E(
                            {
                              props: a.props,
                              dataStartIndex: i,
                              dataEndIndex: u,
                              updateId: o,
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
                        b = ze(a.state, a.props.data, s),
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
                  Ne(Pe(a), "verticalCoordinatesGenerator", function (t, e) {
                    var n = t.xAxis,
                      r = t.width,
                      o = t.height,
                      i = t.offset;
                    return (0, at.Rf)(
                      C(
                        Ce(
                          Ce(Ce({}, ot.defaultProps), n),
                          {},
                          {
                            ticks: (0, at.uY)(n, !0),
                            viewBox: { x: 0, y: 0, width: r, height: o },
                          },
                        ),
                      ),
                      i.left,
                      i.left + i.width,
                      e,
                    );
                  }),
                  Ne(Pe(a), "horizontalCoordinatesGenerator", function (t, e) {
                    var n = t.yAxis,
                      r = t.width,
                      o = t.height,
                      i = t.offset;
                    return (0, at.Rf)(
                      C(
                        Ce(
                          Ce(Ce({}, ot.defaultProps), n),
                          {},
                          {
                            ticks: (0, at.uY)(n, !0),
                            viewBox: { x: 0, y: 0, width: r, height: o },
                          },
                        ),
                      ),
                      i.top,
                      i.top + i.height,
                      e,
                    );
                  }),
                  Ne(Pe(a), "axesTicksGenerator", function (t) {
                    return (0, at.uY)(t, !0);
                  }),
                  Ne(Pe(a), "renderCursor", function (t) {
                    var e,
                      o = a.state,
                      i = o.isTooltipActive,
                      u = o.activeCoordinate,
                      c = o.activePayload,
                      l = o.offset,
                      s = o.activeTooltipIndex,
                      f = o.tooltipAxisBandSize,
                      p = a.getTooltipEventType(),
                      h = null !== (e = t.props.active) && void 0 !== e ? e : i,
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
                  Ne(Pe(a), "renderPolarAxis", function (t, e, n) {
                    var o = f()(t, "type.axisType"),
                      i = f()(a.state, "".concat(o, "Map")),
                      u = i && i[t.props["".concat(o, "Id")]];
                    return (0, r.cloneElement)(
                      t,
                      Ce(
                        Ce({}, u),
                        {},
                        {
                          className: o,
                          key: t.key || "".concat(e, "-").concat(n),
                          ticks: (0, at.uY)(u, !0),
                        },
                      ),
                    );
                  }),
                  Ne(Pe(a), "renderXAxis", function (t, e, n) {
                    var r = a.state.xAxisMap[t.props.xAxisId];
                    return a.renderAxis(r, t, e, n);
                  }),
                  Ne(Pe(a), "renderYAxis", function (t, e, n) {
                    var r = a.state.yAxisMap[t.props.yAxisId];
                    return a.renderAxis(r, t, e, n);
                  }),
                  Ne(Pe(a), "renderGrid", function (t) {
                    var e = a.state,
                      n = e.xAxisMap,
                      o = e.yAxisMap,
                      i = e.offset,
                      u = a.props,
                      c = u.width,
                      l = u.height,
                      s = (0, O.Kt)(n),
                      f =
                        m()(o, function (t) {
                          return b()(t.domain, Number.isFinite);
                        }) || (0, O.Kt)(o),
                      p = t.props || {};
                    return (0, r.cloneElement)(t, {
                      key: t.key || "grid",
                      x: (0, O.hj)(p.x) ? p.x : i.left,
                      y: (0, O.hj)(p.y) ? p.y : i.top,
                      width: (0, O.hj)(p.width) ? p.width : i.width,
                      height: (0, O.hj)(p.height) ? p.height : i.height,
                      xAxis: s,
                      yAxis: f,
                      offset: i,
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
                  Ne(Pe(a), "renderPolarGrid", function (t) {
                    var e = t.props,
                      n = e.radialLines,
                      o = e.polarAngles,
                      i = e.polarRadius,
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
                      polarAngles: Array.isArray(o)
                        ? o
                        : (0, at.uY)(f, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      polarRadius: Array.isArray(i)
                        ? i
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
                  Ne(Pe(a), "renderLegend", function () {
                    var t = a.state.formattedGraphicalItems,
                      e = a.props,
                      n = e.children,
                      o = e.width,
                      i = e.height,
                      u = a.props.margin || {},
                      c = o - (u.left || 0) - (u.right || 0),
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
                          chartWidth: o,
                          chartHeight: i,
                          margin: u,
                          onBBoxUpdate: a.handleLegendBBoxUpdate,
                        },
                      ),
                    );
                  }),
                  Ne(Pe(a), "renderTooltip", function () {
                    var t,
                      e = a.props.children,
                      n = (0, U.sP)(e, I.u);
                    if (!n) return null;
                    var o = a.state,
                      i = o.isTooltipActive,
                      u = o.activeCoordinate,
                      c = o.activePayload,
                      l = o.activeLabel,
                      s = o.offset,
                      f = null !== (t = n.props.active) && void 0 !== t ? t : i;
                    return (0, r.cloneElement)(n, {
                      viewBox: Ce(Ce({}, s), {}, { x: s.left, y: s.top }),
                      active: f,
                      label: l,
                      payload: f ? c : [],
                      coordinate: u,
                    });
                  }),
                  Ne(Pe(a), "renderBrush", function (t) {
                    var e = a.props,
                      n = e.margin,
                      o = e.data,
                      i = a.state,
                      u = i.offset,
                      c = i.dataStartIndex,
                      l = i.dataEndIndex,
                      s = i.updateId;
                    return (0, r.cloneElement)(t, {
                      key: t.key || "_recharts-brush",
                      onChange: (0, at.DO)(
                        a.handleBrushChange,
                        t.props.onChange,
                      ),
                      data: o,
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
                  Ne(Pe(a), "renderReferenceElement", function (t, e, n) {
                    if (!t) return null;
                    var o = Pe(a).clipPathId,
                      i = a.state,
                      u = i.xAxisMap,
                      c = i.yAxisMap,
                      l = i.offset,
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
                      clipPathId: o,
                    });
                  }),
                  Ne(Pe(a), "renderActivePoints", function (t) {
                    var e = t.item,
                      n = t.activePoint,
                      r = t.basePoint,
                      o = t.childIndex,
                      i = t.isRange,
                      a = [],
                      u = e.props.key,
                      c = e.item.props,
                      l = c.activeDot,
                      s = Ce(
                        Ce(
                          {
                            index: o,
                            dataKey: c.dataKey,
                            cx: n.x,
                            cy: n.y,
                            r: 4,
                            fill: (0, at.fk)(e.item),
                            strokeWidth: 2,
                            stroke: "#fff",
                            payload: n.payload,
                            value: n.value,
                            key: "".concat(u, "-activePoint-").concat(o),
                          },
                          (0, U.L6)(l),
                        ),
                        (0, Z.Ym)(l),
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
                                  key: "".concat(u, "-basePoint-").concat(o),
                                },
                              ),
                            ),
                          )
                        : i && a.push(null),
                      a
                    );
                  }),
                  Ne(Pe(a), "renderGraphicChild", function (t, e, n) {
                    var o = a.filterFormatItem(t, e, n);
                    if (!o) return null;
                    var u = a.getTooltipEventType(),
                      c = a.state,
                      l = c.isTooltipActive,
                      s = c.tooltipAxis,
                      f = c.activeTooltipIndex,
                      p = c.activeLabel,
                      h = a.props.children,
                      d = (0, U.sP)(h, I.u),
                      y = o.props,
                      v = y.points,
                      m = y.isRange,
                      g = y.baseLine,
                      b = o.item.props,
                      x = b.activeDot,
                      w = b.hide,
                      S = b.activeBar,
                      j = b.activeShape,
                      E = Boolean(!w && l && d && (x || S || j)),
                      P = {};
                    "axis" !== u && d && "click" === d.props.trigger
                      ? (P = {
                          onClick: (0, at.DO)(
                            a.handleItemMouseEnter,
                            t.props.onClick,
                          ),
                        })
                      : "axis" !== u &&
                        (P = {
                          onMouseLeave: (0, at.DO)(
                            a.handleItemMouseLeave,
                            t.props.onMouseLeave,
                          ),
                          onMouseEnter: (0, at.DO)(
                            a.handleItemMouseEnter,
                            t.props.onMouseEnter,
                          ),
                        });
                    var A = (0, r.cloneElement)(t, Ce(Ce({}, o.props), P));
                    if (E) {
                      if (!(f >= 0)) {
                        var k,
                          M = (
                            null !==
                              (k = a.getItemByXY(a.state.activeCoordinate)) &&
                            void 0 !== k
                              ? k
                              : { graphicalItem: A }
                          ).graphicalItem,
                          T = M.item,
                          _ = void 0 === T ? t : T,
                          C = M.childIndex,
                          N = Ce(
                            Ce(Ce({}, o.props), P),
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
                      if (j || S) {
                        var R =
                          void 0 !== t.props.activeIndex
                            ? t.props.activeIndex
                            : f;
                        return [
                          (0, r.cloneElement)(
                            t,
                            Ce(Ce(Ce({}, o.props), P), {}, { activeIndex: R }),
                          ),
                          null,
                          null,
                        ];
                      }
                      if (!i()(D))
                        return [A].concat(
                          ke(
                            a.renderActivePoints({
                              item: o,
                              activePoint: D,
                              basePoint: B,
                              childIndex: f,
                              isRange: m,
                            }),
                          ),
                        );
                    }
                    return m ? [A, null, null] : [A, null];
                  }),
                  Ne(Pe(a), "renderCustomized", function (t, e, n) {
                    return (0, r.cloneElement)(
                      t,
                      Ce(
                        Ce({ key: "recharts-customized-".concat(n) }, a.props),
                        a.state,
                      ),
                    );
                  }),
                  Ne(Pe(a), "renderMap", {
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
                    null !== (o = t.throttleDelay) && void 0 !== o
                      ? o
                      : 1e3 / 60,
                  )),
                  (a.state = {}),
                  a
                );
              }
              return (
                (e = p),
                (o = [
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
                      var t = (0, U.sP)(this.props.children, I.u);
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
                        r = (0, S.os)(n),
                        o = {
                          chartX: Math.round(t.pageX - r.left),
                          chartY: Math.round(t.pageY - r.top),
                        },
                        i = n.width / e.offsetWidth || 1,
                        a = this.inRange(o.chartX, o.chartY, i);
                      if (!a) return null;
                      var u = this.state,
                        c = u.xAxisMap,
                        l = u.yAxisMap;
                      if ("axis" !== this.getTooltipEventType() && c && l) {
                        var s = (0, O.Kt)(c).scale,
                          f = (0, O.Kt)(l).scale,
                          p = s && s.invert ? s.invert(o.chartX) : null,
                          h = f && f.invert ? f.invert(o.chartY) : null;
                        return Ce(Ce({}, o), {}, { xValue: p, yValue: h });
                      }
                      var d = $e(
                        this.state,
                        this.props.data,
                        this.props.layout,
                        a,
                      );
                      return d ? Ce(Ce({}, o), d) : null;
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
                        o = t / n,
                        i = e / n;
                      if ("horizontal" === r || "vertical" === r) {
                        var a = this.state.offset;
                        return o >= a.left &&
                          o <= a.left + a.width &&
                          i >= a.top &&
                          i <= a.top + a.height
                          ? { x: o, y: i }
                          : null;
                      }
                      var u = this.state,
                        c = u.angleAxisMap,
                        l = u.radiusAxisMap;
                      if (c && l) {
                        var s = (0, O.Kt)(c);
                        return (0, Wt.z3)({ x: o, y: i }, s);
                      }
                      return null;
                    },
                  },
                  {
                    key: "parseEventsOfWrapper",
                    value: function () {
                      var t = this.props.children,
                        e = this.getTooltipEventType(),
                        n = (0, U.sP)(t, I.u),
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
                          Ce({}, (0, Z.Ym)(this.props, this.handleOuterEvent)),
                          r,
                        )
                      );
                    },
                  },
                  {
                    key: "addListener",
                    value: function () {
                      Gt.on(Xt, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "removeListener",
                    value: function () {
                      Gt.removeListener(Xt, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "filterFormatItem",
                    value: function (t, e, n) {
                      for (
                        var r = this.state.formattedGraphicalItems,
                          o = 0,
                          i = r.length;
                        o < i;
                        o++
                      ) {
                        var a = r[o];
                        if (
                          a.item === t ||
                          a.props.key === t.key ||
                          (e === (0, U.Gf)(a.item.type) && n === a.childIndex)
                        )
                          return a;
                      }
                      return null;
                    },
                  },
                  {
                    key: "renderAxis",
                    value: function (t, e, n, o) {
                      var i = this.props,
                        a = i.width,
                        u = i.height;
                      return r.createElement(
                        ot,
                        we({}, t, {
                          className: (0, x.Z)(
                            "recharts-"
                              .concat(t.axisType, " ")
                              .concat(t.axisType),
                            t.className,
                          ),
                          key: e.key || "".concat(n, "-").concat(o),
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
                        o = e.top,
                        i = e.height,
                        a = e.width;
                      return r.createElement(
                        "defs",
                        null,
                        r.createElement(
                          "clipPath",
                          { id: t },
                          r.createElement("rect", {
                            x: n,
                            y: o,
                            height: i,
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
                              o = n[1];
                            return Ce(Ce({}, t), {}, Ne({}, r, o.scale));
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
                              o = n[1];
                            return Ce(Ce({}, t), {}, Ne({}, r, o.scale));
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
                        for (var o = 0, i = n.length; o < i; o++) {
                          var a = n[o],
                            u = a.props,
                            c = a.item,
                            l = (0, U.Gf)(c.type);
                          if ("Bar" === l) {
                            var s = (u.data || []).find(function (e) {
                              return (0, R.X)(t, e);
                            });
                            if (s) return { graphicalItem: a, payload: s };
                          } else if ("RadialBar" === l) {
                            var f = (u.data || []).find(function (e) {
                              return (0, Wt.z3)(t, e);
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
                      if (!(0, U.TT)(this)) return null;
                      var e,
                        n,
                        o = this.props,
                        i = o.children,
                        a = o.className,
                        u = o.width,
                        c = o.height,
                        l = o.style,
                        s = o.compact,
                        f = o.title,
                        p = o.desc,
                        h = Oe(o, ge),
                        d = (0, U.L6)(h);
                      if (s)
                        return r.createElement(
                          N.T,
                          we({}, d, { width: u, height: c, title: f, desc: p }),
                          this.renderClipPath(),
                          (0, U.eu)(i, this.renderMap),
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
                          (0, U.eu)(i, this.renderMap),
                        ),
                        this.renderLegend(),
                        this.renderTooltip(),
                      );
                    },
                  },
                ]),
                o && Se(e.prototype, o),
                a && Se(e, a),
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
                o = t.children,
                a = t.width,
                u = t.height,
                c = t.layout,
                l = t.stackOffset,
                s = t.margin,
                f = e.dataStartIndex,
                p = e.dataEndIndex;
              if (void 0 === e.updateId) {
                var h = We(t);
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
                    prevChildren: o,
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
                !(0, z.w)(s, e.prevMargin)
              ) {
                var d = We(t),
                  y = {
                    chartX: e.chartX,
                    chartY: e.chartY,
                    isTooltipActive: e.isTooltipActive,
                  },
                  v = Ce(Ce({}, $e(e, r, c)), {}, { updateId: e.updateId + 1 }),
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
                    prevChildren: o,
                  },
                );
              }
              if (!(0, U.rL)(o, e.prevChildren)) {
                var g,
                  b,
                  x,
                  w,
                  O = (0, U.sP)(o, jt),
                  S =
                    O &&
                    null !==
                      (g =
                        null === (b = O.props) || void 0 === b
                          ? void 0
                          : b.startIndex) &&
                    void 0 !== g
                      ? g
                      : f,
                  j =
                    O &&
                    null !==
                      (x =
                        null === (w = O.props) || void 0 === w
                          ? void 0
                          : w.endIndex) &&
                    void 0 !== x
                      ? x
                      : p,
                  P = S !== f || j !== p,
                  A = !i()(r) && !P ? e.updateId : e.updateId + 1;
                return Ce(
                  Ce(
                    { updateId: A },
                    E(
                      Ce(
                        Ce({ props: t }, e),
                        {},
                        { updateId: A, dataStartIndex: S, dataEndIndex: j },
                      ),
                      e,
                    ),
                  ),
                  {},
                  { prevChildren: o, dataStartIndex: S, dataEndIndex: j },
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
        o = n(38716),
        i = n.n(o),
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
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
      var j = function (t) {
          var e = t.value,
            n = t.formatter,
            r = i()(t.children) ? e : t.children;
          return u()(n) ? n(r) : r;
        },
        E = function (t, e, n) {
          var o,
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
            j = (function (t, e) {
              return (0, h.uY)(e - t) * Math.min(Math.abs(e - t), 360);
            })(b, x),
            E = j >= 0 ? 1 : -1;
          "insideStart" === u
            ? ((o = b + E * l), (a = w))
            : "insideEnd" === u
              ? ((o = x - E * l), (a = !w))
              : "end" === u && ((o = x + E * l), (a = w)),
            (a = j <= 0 ? a : !a);
          var P = (0, d.op)(y, v, O, o),
            A = (0, d.op)(y, v, O, o + 359 * (a ? 1 : -1)),
            k = "M"
              .concat(P.x, ",")
              .concat(P.y, "\n    A")
              .concat(O, ",")
              .concat(O, ",0,1,")
              .concat(a ? 0 : 1, ",\n    ")
              .concat(A.x, ",")
              .concat(A.y),
            M = i()(t.id) ? (0, h.EL)("recharts-radial-line-") : t.id;
          return r.createElement(
            "text",
            S({}, n, {
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
        P = function (t) {
          var e = t.viewBox,
            n = t.offset,
            r = t.position,
            o = e,
            i = o.cx,
            a = o.cy,
            u = o.innerRadius,
            c = o.outerRadius,
            l = (o.startAngle + o.endAngle) / 2;
          if ("outside" === r) {
            var s = (0, d.op)(i, a, c + n, l),
              f = s.x;
            return {
              x: f,
              y: s.y,
              textAnchor: f >= i ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === r)
            return {
              x: i,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === r)
            return {
              x: i,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === r)
            return { x: i, y: a, textAnchor: "middle", verticalAnchor: "end" };
          var p = (u + c) / 2,
            h = (0, d.op)(i, a, p, l);
          return {
            x: h.x,
            y: h.y,
            textAnchor: "middle",
            verticalAnchor: "middle",
          };
        },
        A = function (t) {
          var e = t.viewBox,
            n = t.parentViewBox,
            r = t.offset,
            o = t.position,
            i = e,
            a = i.x,
            u = i.y,
            c = i.width,
            s = i.height,
            f = s >= 0 ? 1 : -1,
            p = f * r,
            d = f > 0 ? "end" : "start",
            y = f > 0 ? "start" : "end",
            v = c >= 0 ? 1 : -1,
            m = v * r,
            g = v > 0 ? "end" : "start",
            b = v > 0 ? "start" : "end";
          if ("top" === o)
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
          if ("bottom" === o)
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
          if ("left" === o) {
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
          if ("right" === o) {
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
          var S = n ? { width: c, height: s } : {};
          return "insideLeft" === o
            ? w(
                {
                  x: a + m,
                  y: u + s / 2,
                  textAnchor: b,
                  verticalAnchor: "middle",
                },
                S,
              )
            : "insideRight" === o
              ? w(
                  {
                    x: a + c - m,
                    y: u + s / 2,
                    textAnchor: g,
                    verticalAnchor: "middle",
                  },
                  S,
                )
              : "insideTop" === o
                ? w(
                    {
                      x: a + c / 2,
                      y: u + p,
                      textAnchor: "middle",
                      verticalAnchor: y,
                    },
                    S,
                  )
                : "insideBottom" === o
                  ? w(
                      {
                        x: a + c / 2,
                        y: u + s - p,
                        textAnchor: "middle",
                        verticalAnchor: d,
                      },
                      S,
                    )
                  : "insideTopLeft" === o
                    ? w(
                        {
                          x: a + m,
                          y: u + p,
                          textAnchor: b,
                          verticalAnchor: y,
                        },
                        S,
                      )
                    : "insideTopRight" === o
                      ? w(
                          {
                            x: a + c - m,
                            y: u + p,
                            textAnchor: g,
                            verticalAnchor: y,
                          },
                          S,
                        )
                      : "insideBottomLeft" === o
                        ? w(
                            {
                              x: a + m,
                              y: u + s - p,
                              textAnchor: b,
                              verticalAnchor: d,
                            },
                            S,
                          )
                        : "insideBottomRight" === o
                          ? w(
                              {
                                x: a + c - m,
                                y: u + s - p,
                                textAnchor: g,
                                verticalAnchor: d,
                              },
                              S,
                            )
                          : l()(o) &&
                              ((0, h.hj)(o.x) || (0, h.hU)(o.x)) &&
                              ((0, h.hj)(o.y) || (0, h.hU)(o.y))
                            ? w(
                                {
                                  x: a + (0, h.h1)(o.x, c),
                                  y: u + (0, h.h1)(o.y, s),
                                  textAnchor: "end",
                                  verticalAnchor: "end",
                                },
                                S,
                              )
                            : w(
                                {
                                  x: a + c / 2,
                                  y: u + s / 2,
                                  textAnchor: "middle",
                                  verticalAnchor: "middle",
                                },
                                S,
                              );
        },
        k = function (t) {
          return "cx" in t && (0, h.hj)(t.cx);
        };
      function M(t) {
        var e,
          n = t.offset,
          o = w({ offset: void 0 === n ? 5 : n }, b(t, v)),
          a = o.viewBox,
          c = o.position,
          l = o.value,
          h = o.children,
          d = o.content,
          y = o.className,
          m = void 0 === y ? "" : y,
          g = o.textBreakAll;
        if (!a || (i()(l) && i()(h) && !(0, r.isValidElement)(d) && !u()(d)))
          return null;
        if ((0, r.isValidElement)(d)) return (0, r.cloneElement)(d, o);
        if (u()(d)) {
          if (((e = (0, r.createElement)(d, o)), (0, r.isValidElement)(e)))
            return e;
        } else e = j(o);
        var x = k(a),
          O = (0, p.L6)(o, !0);
        if (x && ("insideStart" === c || "insideEnd" === c || "end" === c))
          return E(o, e, O);
        var M = x ? P(o) : A(o);
        return r.createElement(
          f.x,
          S({ className: (0, s.Z)("recharts-label", m) }, O, M, {
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
          o = t.startAngle,
          i = t.endAngle,
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
                startAngle: o || r || 0,
                endAngle: i || r || 0,
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
          var o = t.children,
            i = T(t),
            a = (0, p.NN)(o, M).map(function (t, n) {
              return (0, r.cloneElement)(t, {
                viewBox: e || i,
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
                            S({ viewBox: e }, t, { key: "label-implicit" }),
                          )
                        : null
              : null;
          })(t.label, e || i);
          return [c].concat(m(a));
        });
    },
    72961: (t, e, n) => {
      "use strict";
      n.d(e, { e: () => A });
      var r = n(47427),
        o = n(38716),
        i = n.n(o),
        a = n(60486),
        u = n.n(a),
        c = n(8889),
        l = n.n(c),
        s = n(54794),
        f = n.n(s),
        p = n(47094),
        h = n(47430),
        d = n(94797),
        y = n(91140);
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
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(Object(n), !0).forEach(function (e) {
                j(t, e, n[e]);
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
      function j(t, e, n) {
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var P = function (t) {
        return Array.isArray(t.value) ? f()(t.value) : t.value;
      };
      function A(t) {
        var e = t.valueAccessor,
          n = void 0 === e ? P : e,
          o = E(t, m),
          a = o.data,
          u = o.dataKey,
          c = o.clockWise,
          l = o.id,
          s = o.textBreakAll,
          f = E(o, g);
        return a && a.length
          ? r.createElement(
              h.m,
              { className: "recharts-label-list" },
              a.map(function (t, e) {
                var o = i()(u) ? n(t, e) : (0, y.F$)(t && t.payload, u),
                  a = i()(l) ? {} : { id: "".concat(l, "-").concat(e) };
                return r.createElement(
                  p._,
                  w({}, (0, d.L6)(t, !0), f, a, {
                    parentViewBox: t.parentViewBox,
                    value: o,
                    textBreakAll: s,
                    viewBox: p._.parseViewBox(
                      i()(c) ? t : S(S({}, t), {}, { clockWise: c }),
                    ),
                    key: "label-".concat(e),
                    index: e,
                  }),
                );
              }),
            )
          : null;
      }
      (A.displayName = "LabelList"),
        (A.renderCallByParent = function (t, e) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && n && !t.label)) return null;
          var o = t.children,
            i = (0, d.NN)(o, A).map(function (t, n) {
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
                      ? r.createElement(A, {
                          key: "labelList-implicit",
                          data: e,
                        })
                      : r.isValidElement(t) || l()(t)
                        ? r.createElement(A, {
                            key: "labelList-implicit",
                            data: e,
                            content: t,
                          })
                        : u()(t)
                          ? r.createElement(
                              A,
                              w({ data: e }, t, { key: "labelList-implicit" }),
                            )
                          : null
                    : null;
                })(t.label, e),
              ].concat(b(i))
            : i;
        });
    },
    88579: (t, e, n) => {
      "use strict";
      n.d(e, { D: () => L });
      var r = n(47427),
        o = n(8889),
        i = n.n(o),
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
            var o = m(this).constructor;
            n = Reflect.construct(r, arguments, o);
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
            o,
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
                    o = x / 6,
                    i = x / 3,
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
                        .concat(i, "\n            A")
                        .concat(o, ",")
                        .concat(o, ",0,1,1,")
                        .concat(2 * i, ",")
                        .concat(n, "\n            H")
                        .concat(x, "M")
                        .concat(2 * i, ",")
                        .concat(n, "\n            A")
                        .concat(o, ",")
                        .concat(o, ",0,1,1,")
                        .concat(i, ",")
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
                    o = e.iconSize,
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
                    var x = i()(e.value) ? null : e.value;
                    (0, u.Z)(
                      !i()(e.value),
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
                        { width: o, height: o, viewBox: d, style: v },
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
                    o = t.align;
                  if (!e || !e.length) return null;
                  var i = {
                    padding: 0,
                    margin: 0,
                    textAlign: "horizontal" === n ? o : "left",
                  };
                  return r.createElement(
                    "ul",
                    { className: "recharts-default-legend", style: i },
                    this.renderItems(),
                  );
                },
              },
            ]),
            n && d(e.prototype, n),
            o && d(e, o),
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
        S = n(60674);
      function j(t) {
        return (
          (j =
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
          j(t)
        );
      }
      var E = ["ref"];
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
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? P(Object(n), !0).forEach(function (e) {
                N(t, e, n[e]);
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
            var o = C(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === j(e) || "function" == typeof e)) return e;
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
          if ("object" !== j(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== j(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === j(e) ? e : String(e);
      }
      function I(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
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
          o,
          i = T(a);
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            N(_((t = i.call.apply(i, [this].concat(n)))), "lastBoundingBox", {
              width: -1,
              height: -1,
            }),
            t
          );
        }
        return (
          (e = a),
          (o = [
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
                  ? A({}, this.lastBoundingBox)
                  : { width: 0, height: 0 };
              },
            },
            {
              key: "getDefaultPosition",
              value: function (t) {
                var e,
                  n,
                  r = this.props,
                  o = r.layout,
                  i = r.align,
                  a = r.verticalAlign,
                  u = r.margin,
                  c = r.chartWidth,
                  l = r.chartHeight;
                return (
                  (t &&
                    ((void 0 !== t.left && null !== t.left) ||
                      (void 0 !== t.right && null !== t.right))) ||
                    (e =
                      "center" === i && "vertical" === o
                        ? {
                            left: ((c || 0) - this.getBBoxSnapshot().width) / 2,
                          }
                        : "right" === i
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
                  A(A({}, e), n)
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.content,
                  o = e.width,
                  i = e.height,
                  a = e.wrapperStyle,
                  u = e.payloadUniqBy,
                  c = e.payload,
                  l = A(
                    A(
                      {
                        position: "absolute",
                        width: o || "auto",
                        height: i || "auto",
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
                    A(A({}, this.props), {}, { payload: (0, S.z)(c, u, B) }),
                  ),
                );
              },
            },
          ]) && k(e.prototype, n),
          o && k(e, o),
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
    93998: (t, e, n) => {
      "use strict";
      n.d(e, { x: () => R });
      var r = n(47427),
        o = n(38716),
        i = n.n(o),
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
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
              ((o = r.key),
              (i = void 0),
              (i = (function (t, e) {
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
              })(o, "string")),
              "symbol" === f(i) ? i : String(i)),
              r,
            );
        }
        var o, i;
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
                  o = r[1],
                  i = r[2];
                return new t(parseFloat(o), null != i ? i : "");
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
      function S(t) {
        if (t.includes(w)) return w;
        for (var e = t; e.includes("*") || e.includes("/"); ) {
          var n,
            r = p(null !== (n = y.exec(e)) && void 0 !== n ? n : [], 4),
            o = r[1],
            i = r[2],
            a = r[3],
            u = O.parse(null != o ? o : ""),
            c = O.parse(null != a ? a : ""),
            l = "*" === i ? u.multiply(c) : u.divide(c);
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
      var j = /\(([^()]*)\)/;
      function E(t) {
        var e = t.replace(/\s+/g, "");
        return (
          (e = (function (t) {
            for (var e = t; e.includes("("); ) {
              var n = p(j.exec(e), 2)[1];
              e = e.replace(j, S(n));
            }
            return e;
          })(e)),
          (e = S(e))
        );
      }
      function P(t) {
        var e = (function (t) {
          try {
            return E(t);
          } catch (t) {
            return w;
          }
        })(t.slice(5, -1));
        return e === w ? "" : e;
      }
      var A = [
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
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
            var o = [];
            return (
              i()(e) ||
                (o = n ? e.toString().split("") : e.toString().split(N)),
              {
                wordsWithComputedWidth: o.map(function (t) {
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
          return [{ words: i()(t) ? [] : t.toString().split(N) }];
        },
        B = function (t) {
          var e = t.width,
            n = t.scaleToFit,
            r = t.children,
            o = t.style,
            i = t.breakAll,
            a = t.maxLines;
          if ((e || n) && !c.x.isSsr) {
            var l = D({ breakAll: i, children: r, style: o });
            return l
              ? (function (t, e, n, r, o) {
                  var i = t.maxLines,
                    a = t.children,
                    c = t.style,
                    l = t.breakAll,
                    s = (0, u.hj)(i),
                    f = a,
                    p = function () {
                      return (
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : []
                      ).reduce(function (t, e) {
                        var i = e.word,
                          a = e.width,
                          u = t[t.length - 1];
                        if (
                          u &&
                          (null == r || o || u.width + a + n < Number(r))
                        )
                          u.words.push(i), (u.width += a + n);
                        else {
                          var c = { words: [i], width: a };
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
                          o = p(n),
                          a =
                            o.length > i ||
                            (function (t) {
                              return t.reduce(function (t, e) {
                                return t.width > e.width ? t : e;
                              });
                            })(o).width > Number(r);
                        return [a, o];
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
                      S = _(y(b), 1)[0];
                    if (
                      (w || S || (v = b + 1), w && S && (m = b - 1), !w && S)
                    ) {
                      d = O;
                      break;
                    }
                    g++;
                  }
                  return d || h;
                })(
                  { breakAll: i, children: r, maxLines: a, style: o },
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
            o = t.y,
            i = void 0 === o ? 0 : o,
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
            w = T(t, A),
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
            S = w.dx,
            j = w.dy,
            E = w.angle,
            _ = w.className,
            C = w.breakAll,
            N = T(w, k);
          if (!(0, u.P2)(n) || !(0, u.P2)(i)) return null;
          var D,
            I = n + ((0, u.hj)(S) ? S : 0),
            R = i + ((0, u.hj)(j) ? j : 0);
          switch (g) {
            case "start":
              D = P("calc(".concat(p, ")"));
              break;
            case "middle":
              D = P(
                "calc("
                  .concat((O.length - 1) / 2, " * -")
                  .concat(s, " + (")
                  .concat(p, " / 2))"),
              );
              break;
            default:
              D = P("calc(".concat(O.length - 1, " * -").concat(s, ")"));
          }
          var U = [];
          if (d) {
            var z = O[0].width,
              $ = w.width;
            U.push("scale(".concat(((0, u.hj)($) ? $ / z : 1) / z, ")"));
          }
          return (
            E &&
              U.push("rotate(".concat(E, ", ").concat(I, ", ").concat(R, ")")),
            U.length && (N.transform = U.join(" ")),
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
      n.d(e, { u: () => H });
      var r = n(47427),
        o = n(2045),
        i = n.n(o),
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
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
            o = t.contentStyle,
            a = void 0 === o ? {} : o,
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
            S = t.labelFormatter,
            j = d(
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
            P = !u()(O),
            A = P ? O : "",
            k = (0, c.Z)("recharts-default-tooltip", x),
            M = (0, c.Z)("recharts-tooltip-label", w);
          return (
            P && S && null != m && (A = S(O, m)),
            r.createElement(
              "div",
              { className: k, style: j },
              r.createElement(
                "p",
                { className: M, style: E },
                r.isValidElement(A) ? A : "".concat(A),
              ),
              (function () {
                if (m && m.length) {
                  var t = (b ? i()(m, b) : m).map(function (t, e) {
                    if ("none" === t.type) return null;
                    var o = d(
                        {
                          display: "block",
                          paddingTop: 4,
                          paddingBottom: 4,
                          color: t.color || "#000",
                        },
                        p,
                      ),
                      i = t.formatter || g || v,
                      a = t.value,
                      u = t.name,
                      c = a,
                      s = u;
                    if (i && null != c && null != s) {
                      var h = i(a, u, t, e, m);
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
                        style: o,
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
      function S(t) {
        var e,
          n = t.coordinate,
          r = t.translateX,
          o = t.translateY;
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
            (0, l.hj)(o) && n && (0, l.hj)(n.y) && o >= n.y,
          ),
          x(
            e,
            "".concat(w, "-top"),
            (0, l.hj)(o) && n && (0, l.hj)(n.y) && o < n.y,
          ),
          e),
        );
      }
      function j(t) {
        var e = t.allowEscapeViewBox,
          n = t.coordinate,
          r = t.key,
          o = t.offsetTopLeft,
          i = t.position,
          a = t.reverseDirection,
          u = t.tooltipDimension,
          c = t.viewBox,
          s = t.viewBoxDimension;
        if (i && (0, l.hj)(i[r])) return i[r];
        var f = n[r] - u - o,
          p = n[r] + o;
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
          o = t.allowEscapeViewBox,
          i = t.coordinate,
          a = t.offsetTopLeft,
          u = t.position,
          c = t.reverseDirection,
          l = t.tooltipBox,
          s = t.useTranslate3d,
          f = t.viewBox;
        return (
          (e =
            l.height > 0 && l.width > 0 && i
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
                  translateX: (n = j({
                    allowEscapeViewBox: o,
                    coordinate: i,
                    key: "x",
                    offsetTopLeft: a,
                    position: u,
                    reverseDirection: c,
                    tooltipDimension: l.width,
                    viewBox: f,
                    viewBoxDimension: f.width,
                  })),
                  translateY: (r = j({
                    allowEscapeViewBox: o,
                    coordinate: i,
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
            cssClasses: S({ translateX: n, translateY: r, coordinate: i }),
          }
        );
      }
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
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(n), !0).forEach(function (e) {
                D(t, e, n[e]);
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
            var o = N(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === P(e) || "function" == typeof e)) return e;
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
            o,
            i = _(a);
          function a() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              D(C((t = i.call.apply(i, [this].concat(n)))), "state", {
                dismissed: !1,
                dismissedAtCoordinate: { x: 0, y: 0 },
              }),
              D(C(t), "lastBoundingBox", { width: -1, height: -1 }),
              D(C(t), "handleKeyDown", function (e) {
                var n, r, o, i;
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
                          (o =
                            null === (i = t.props.coordinate) || void 0 === i
                              ? void 0
                              : i.y) && void 0 !== o
                          ? o
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
                    o = e.allowEscapeViewBox,
                    i = e.animationDuration,
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
                      allowEscapeViewBox: o,
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
                                .concat(i, "ms ")
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
            o && M(e, o),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(r.PureComponent),
        L = n(77125),
        R = n(60674);
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
      function z(t, e) {
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
      function $(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? z(Object(n), !0).forEach(function (e) {
                G(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : z(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function F(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, X(r.key), r);
        }
      }
      function Z(t, e) {
        return (
          (Z = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Z(t, e)
        );
      }
      function W(t) {
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
            var o = q(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === U(e) || "function" == typeof e)) return e;
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
      function G(t, e, n) {
        return (
          (e = X(e)) in t
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
      function X(t) {
        var e = (function (t, e) {
          if ("object" !== U(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" !== U(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === U(e) ? e : String(e);
      }
      function Y(t) {
        return t.dataKey;
      }
      var H = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && Z(t, e);
        })(a, t);
        var e,
          n,
          o,
          i = W(a);
        function a() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            i.apply(this, arguments)
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
                  o = t.animationDuration,
                  i = t.animationEasing,
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
                    Y,
                  ));
                var x = b.length > 0;
                return r.createElement(
                  B,
                  {
                    allowEscapeViewBox: n,
                    animationDuration: o,
                    animationEasing: i,
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
                  })(a, $($({}, this.props), {}, { payload: b })),
                );
              },
            },
          ]) && F(e.prototype, n),
          o && F(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(r.PureComponent);
      G(H, "displayName", "Tooltip"),
        G(H, "defaultProps", {
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
        o = n(84148),
        i = n(94797),
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var l = r.forwardRef(function (t, e) {
        var n = t.children,
          l = t.className,
          s = c(t, a),
          f = (0, o.Z)("recharts-layer", l);
        return r.createElement(
          "g",
          u({ className: f }, (0, i.L6)(s, !0), { ref: e }),
          n,
        );
      });
    },
    82440: (t, e, n) => {
      "use strict";
      n.d(e, { T: () => l });
      var r = n(47427),
        o = n(84148),
        i = n(94797),
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
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
          m = (0, o.Z)("recharts-surface", f);
        return r.createElement(
          "svg",
          u({}, (0, i.L6)(y, !0, "svg"), {
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
      n.d(e, { H: () => Y });
      var r = n(47427);
      function o() {}
      function i(t, e, n) {
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
              i(this, this._x1, this._y1);
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
              i(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        },
      }),
        (u.prototype = {
          areaStart: o,
          areaEnd: o,
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
                i(this, t, e);
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
                i(this, t, e);
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
          o = e - t._x1,
          i = (t._y1 - t._y0) / (r || (o < 0 && -0)),
          a = (n - t._y1) / (o || (r < 0 && -0)),
          u = (i * o + a * r) / (r + o);
        return (
          (h(i) + h(a)) *
            Math.min(Math.abs(i), Math.abs(a), 0.5 * Math.abs(u)) || 0
        );
      }
      function y(t, e) {
        var n = t._x1 - t._x0;
        return n ? ((3 * (t._y1 - t._y0)) / n - e) / 2 : e;
      }
      function v(t, e, n) {
        var r = t._x0,
          o = t._y0,
          i = t._x1,
          a = t._y1,
          u = (i - r) / 3;
        t._context.bezierCurveTo(r + u, o + u * e, i - u, a - u * n, i, a);
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
          o = new Array(r),
          i = new Array(r),
          a = new Array(r);
        for (o[0] = 0, i[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e)
          (o[e] = 1), (i[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
        for (
          o[r - 1] = 2, i[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], e = 1;
          e < r;
          ++e
        )
          (n = o[e] / i[e - 1]), (i[e] -= n), (a[e] -= n * a[e - 1]);
        for (o[r - 1] = a[r - 1] / i[r - 1], e = r - 2; e >= 0; --e)
          o[e] = (a[e] - o[e + 1]) / i[e];
        for (i[r - 1] = (t[r] + o[r - 1]) / 2, e = 0; e < r - 1; ++e)
          i[e] = 2 * t[e + 1] - o[e + 1];
        return [o, i];
      }
      function O(t, e) {
        (this._context = t), (this._t = e);
      }
      (s.prototype = {
        areaStart: o,
        areaEnd: o,
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
          bezierCurveTo: function (t, e, n, r, o, i) {
            this._context.bezierCurveTo(e, t, r, n, i, o);
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
                for (var r = w(t), o = w(e), i = 0, a = 1; a < n; ++i, ++a)
                  this._context.bezierCurveTo(
                    r[0][i],
                    o[0][i],
                    r[1][i],
                    o[1][i],
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
      var S = n(70479),
        j = n(22015),
        E = n(79221);
      function P(t) {
        return t[0];
      }
      function A(t) {
        return t[1];
      }
      function k(t, e) {
        var n = (0, j.Z)(!0),
          r = null,
          o = p,
          i = null,
          a = (0, E.d)(u);
        function u(u) {
          var c,
            l,
            s,
            f = (u = (0, S.Z)(u)).length,
            p = !1;
          for (null == r && (i = o((s = a()))), c = 0; c <= f; ++c)
            !(c < f && n((l = u[c]), c, u)) === p &&
              ((p = !p) ? i.lineStart() : i.lineEnd()),
              p && i.point(+t(l, c, u), +e(l, c, u));
          if (s) return (i = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? P : (0, j.Z)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? A : (0, j.Z)(e)),
          (u.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.Z)(+e)), u)
              : t;
          }),
          (u.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.Z)(+t)), u)
              : e;
          }),
          (u.defined = function (t) {
            return arguments.length
              ? ((n = "function" == typeof t ? t : (0, j.Z)(!!t)), u)
              : n;
          }),
          (u.curve = function (t) {
            return arguments.length ? ((o = t), null != r && (i = o(r)), u) : o;
          }),
          (u.context = function (t) {
            return arguments.length
              ? (null == t ? (r = i = null) : (i = o((r = t))), u)
              : r;
          }),
          u
        );
      }
      function M(t, e, n) {
        var r = null,
          o = (0, j.Z)(!0),
          i = null,
          a = p,
          u = null,
          c = (0, E.d)(l);
        function l(l) {
          var s,
            f,
            p,
            h,
            d,
            y = (l = (0, S.Z)(l)).length,
            v = !1,
            m = new Array(y),
            g = new Array(y);
          for (null == i && (u = a((d = c()))), s = 0; s <= y; ++s) {
            if (!(s < y && o((h = l[s]), s, l)) === v)
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
          return k().defined(o).curve(a).context(i);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? P : (0, j.Z)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
                ? (0, j.Z)(0)
                : (0, j.Z)(+e)),
          (n = "function" == typeof n ? n : void 0 === n ? A : (0, j.Z)(+n)),
          (l.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.Z)(+e)), (r = null), l)
              : t;
          }),
          (l.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, j.Z)(+e)), l)
              : t;
          }),
          (l.x1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, j.Z)(+t)),
                l)
              : r;
          }),
          (l.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.Z)(+t)), (n = null), l)
              : e;
          }),
          (l.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, j.Z)(+t)), l)
              : e;
          }),
          (l.y1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, j.Z)(+t)),
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
              ? ((o = "function" == typeof t ? t : (0, j.Z)(!!t)), l)
              : o;
          }),
          (l.curve = function (t) {
            return arguments.length ? ((a = t), null != i && (u = a(i)), l) : a;
          }),
          (l.context = function (t) {
            return arguments.length
              ? (null == t ? (i = u = null) : (u = a((i = t))), l)
              : i;
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
      function U() {
        return (
          (U = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          U.apply(this, arguments)
        );
      }
      function z(t, e) {
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
      function $(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? z(Object(n), !0).forEach(function (e) {
                F(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : z(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function F(t, e, n) {
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
      var Z = {
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
        W = function (t) {
          return t.x === +t.x && t.y === +t.y;
        },
        q = function (t) {
          return t.x;
        },
        G = function (t) {
          return t.y;
        },
        X = function (t) {
          var e,
            n = t.type,
            r = void 0 === n ? "linear" : n,
            o = t.points,
            i = void 0 === o ? [] : o,
            a = t.baseLine,
            u = t.layout,
            c = t.connectNulls,
            l = void 0 !== c && c,
            s = (function (t, e) {
              if (N()(t)) return t;
              var n = "curve".concat(_()(t));
              return ("curveMonotone" !== n && "curveBump" !== n) || !e
                ? Z[n] || p
                : Z["".concat(n).concat("vertical" === e ? "Y" : "X")];
            })(r, u),
            f = l
              ? i.filter(function (t) {
                  return W(t);
                })
              : i;
          if (Array.isArray(a)) {
            var h = l
                ? a.filter(function (t) {
                    return W(t);
                  })
                : a,
              d = f.map(function (t, e) {
                return $($({}, t), {}, { base: h[e] });
              });
            return (
              (e =
                "vertical" === u
                  ? M()
                      .y(G)
                      .x1(q)
                      .x0(function (t) {
                        return t.base.x;
                      })
                  : M()
                      .x(q)
                      .y1(G)
                      .y0(function (t) {
                        return t.base.y;
                      }))
                .defined(W)
                .curve(s),
              e(d)
            );
          }
          return (
            (e =
              "vertical" === u && (0, L.hj)(a)
                ? M().y(G).x1(q).x0(a)
                : (0, L.hj)(a)
                  ? M().x(q).y1(G).y0(a)
                  : k().x(q).y(G))
              .defined(W)
              .curve(s),
            e(f)
          );
        },
        Y = function (t) {
          var e = t.className,
            n = t.points,
            o = t.path,
            i = t.pathRef;
          if (!((n && n.length) || o)) return null;
          var a = n && n.length ? X(t) : o;
          return r.createElement(
            "path",
            U({}, (0, B.L6)(t), (0, I.Ym)(t), {
              className: (0, D.Z)("recharts-curve", e),
              d: a,
              ref: i,
            }),
          );
        };
    },
    14166: (t, e, n) => {
      "use strict";
      n.d(e, { o: () => c });
      var r = n(47427),
        o = n(84148),
        i = n(81156),
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
          s = (0, o.Z)("recharts-dot", l);
        return e === +e && n === +n && c === +c
          ? r.createElement(
              "circle",
              u({}, (0, a.L6)(t), (0, i.Ym)(t), {
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
        o = n(84148),
        i = n(15819),
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
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
      var d = function (t, e, n, r, o) {
          var i,
            a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
            u = r >= 0 ? 1 : -1,
            c = n >= 0 ? 1 : -1,
            l = (r >= 0 && n >= 0) || (r < 0 && n < 0) ? 1 : 0;
          if (a > 0 && o instanceof Array) {
            for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
              s[f] = o[f] > a ? a : o[f];
            (i = "M".concat(t, ",").concat(e + u * s[0])),
              s[0] > 0 &&
                (i += "A "
                  .concat(s[0], ",")
                  .concat(s[0], ",0,0,")
                  .concat(l, ",")
                  .concat(t + c * s[0], ",")
                  .concat(e)),
              (i += "L ".concat(t + n - c * s[1], ",").concat(e)),
              s[1] > 0 &&
                (i += "A "
                  .concat(s[1], ",")
                  .concat(s[1], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + n, ",")
                  .concat(e + u * s[1])),
              (i += "L ".concat(t + n, ",").concat(e + r - u * s[2])),
              s[2] > 0 &&
                (i += "A "
                  .concat(s[2], ",")
                  .concat(s[2], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + n - c * s[2], ",")
                  .concat(e + r)),
              (i += "L ".concat(t + c * s[3], ",").concat(e + r)),
              s[3] > 0 &&
                (i += "A "
                  .concat(s[3], ",")
                  .concat(s[3], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t, ",")
                  .concat(e + r - u * s[3])),
              (i += "Z");
          } else if (a > 0 && o === +o && o > 0) {
            var p = Math.min(a, o);
            i = "M "
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
            i = "M "
              .concat(t, ",")
              .concat(e, " h ")
              .concat(n, " v ")
              .concat(r, " h ")
              .concat(-n, " Z");
          return i;
        },
        y = function (t, e) {
          if (!t || !e) return !1;
          var n = t.x,
            r = t.y,
            o = e.x,
            i = e.y,
            a = e.width,
            u = e.height;
          if (Math.abs(a) > 0 && Math.abs(u) > 0) {
            var c = Math.min(o, o + a),
              l = Math.max(o, o + a),
              s = Math.min(i, i + u),
              f = Math.max(i, i + u);
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
            S = e.animationBegin,
            j = e.isAnimationActive,
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
          var P = (0, o.Z)("recharts-rectangle", x);
          return E
            ? r.createElement(
                i.ZP,
                {
                  canBegin: s > 0,
                  from: { width: m, height: g, x: h, y },
                  to: { width: m, height: g, x: h, y },
                  duration: O,
                  animationEasing: w,
                  isActive: E,
                },
                function (t) {
                  var o = t.width,
                    u = t.height,
                    l = t.x,
                    f = t.y;
                  return r.createElement(
                    i.ZP,
                    {
                      canBegin: s > 0,
                      from: "0px ".concat(-1 === s ? 1 : s, "px"),
                      to: "".concat(s, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: S,
                      duration: O,
                      isActive: j,
                      easing: w,
                    },
                    r.createElement(
                      "path",
                      c({}, (0, a.L6)(e, !0), {
                        className: P,
                        d: d(l, f, o, u, b),
                        ref: n,
                      }),
                    ),
                  );
                },
              )
            : r.createElement(
                "path",
                c({}, (0, a.L6)(e, !0), { className: P, d: d(h, y, m, g, b) }),
              );
        };
    },
    55287: (t, e, n) => {
      "use strict";
      n.d(e, { L: () => v });
      var r = n(47427),
        o = n(84148),
        i = n(94797),
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
            o = t.angle,
            i = t.sign,
            u = t.isExternal,
            c = t.cornerRadius,
            l = t.cornerIsExternal,
            s = c * (u ? 1 : -1) + r,
            f = Math.asin(c / s) / a.Wk,
            p = l ? o : o + i * f,
            h = l ? o - i * f : o;
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
            o = t.outerRadius,
            i = t.startAngle,
            c = (function (t, e) {
              return (0, u.uY)(e - t) * Math.min(Math.abs(e - t), 359.999);
            })(i, t.endAngle),
            l = i + c,
            s = (0, a.op)(e, n, o, i),
            f = (0, a.op)(e, n, o, l),
            p = "M "
              .concat(s.x, ",")
              .concat(s.y, "\n    A ")
              .concat(o, ",")
              .concat(o, ",0,\n    ")
              .concat(+(Math.abs(c) > 180), ",")
              .concat(+(i > l), ",\n    ")
              .concat(f.x, ",")
              .concat(f.y, "\n  ");
          if (r > 0) {
            var h = (0, a.op)(e, n, r, i),
              d = (0, a.op)(e, n, r, l);
            p += "L "
              .concat(d.x, ",")
              .concat(d.y, "\n            A ")
              .concat(r, ",")
              .concat(r, ",0,\n            ")
              .concat(+(Math.abs(c) > 180), ",")
              .concat(+(i <= l), ",\n            ")
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
            O = (0, o.Z)("recharts-sector", x),
            S = s - c,
            j = (0, u.h1)(p, S, 0, !0);
          return (
            (w =
              j > 0 && Math.abs(g - b) < 360
                ? (function (t) {
                    var e = t.cx,
                      n = t.cy,
                      r = t.innerRadius,
                      o = t.outerRadius,
                      i = t.cornerRadius,
                      a = t.forceCornerRadius,
                      c = t.cornerIsExternal,
                      l = t.startAngle,
                      s = t.endAngle,
                      f = (0, u.uY)(s - l),
                      p = h({
                        cx: e,
                        cy: n,
                        radius: o,
                        angle: l,
                        sign: f,
                        cornerRadius: i,
                        cornerIsExternal: c,
                      }),
                      y = p.circleTangency,
                      v = p.lineTangency,
                      m = p.theta,
                      g = h({
                        cx: e,
                        cy: n,
                        radius: o,
                        angle: s,
                        sign: -f,
                        cornerRadius: i,
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
                            .concat(i, ",")
                            .concat(i, ",0,0,1,")
                            .concat(2 * i, ",0\n        a")
                            .concat(i, ",")
                            .concat(i, ",0,0,1,")
                            .concat(2 * -i, ",0\n      ")
                        : d({
                            cx: e,
                            cy: n,
                            innerRadius: r,
                            outerRadius: o,
                            startAngle: l,
                            endAngle: s,
                          });
                    var S = "M "
                      .concat(v.x, ",")
                      .concat(v.y, "\n    A")
                      .concat(i, ",")
                      .concat(i, ",0,0,")
                      .concat(+(f < 0), ",")
                      .concat(y.x, ",")
                      .concat(y.y, "\n    A")
                      .concat(o, ",")
                      .concat(o, ",0,")
                      .concat(+(O > 180), ",")
                      .concat(+(f < 0), ",")
                      .concat(b.x, ",")
                      .concat(b.y, "\n    A")
                      .concat(i, ",")
                      .concat(i, ",0,0,")
                      .concat(+(f < 0), ",")
                      .concat(x.x, ",")
                      .concat(x.y, "\n  ");
                    if (r > 0) {
                      var j = h({
                          cx: e,
                          cy: n,
                          radius: r,
                          angle: l,
                          sign: f,
                          isExternal: !0,
                          cornerRadius: i,
                          cornerIsExternal: c,
                        }),
                        E = j.circleTangency,
                        P = j.lineTangency,
                        A = j.theta,
                        k = h({
                          cx: e,
                          cy: n,
                          radius: r,
                          angle: s,
                          sign: -f,
                          isExternal: !0,
                          cornerRadius: i,
                          cornerIsExternal: c,
                        }),
                        M = k.circleTangency,
                        T = k.lineTangency,
                        _ = k.theta,
                        C = c ? Math.abs(l - s) : Math.abs(l - s) - A - _;
                      if (C < 0 && 0 === i)
                        return "".concat(S, "L").concat(e, ",").concat(n, "Z");
                      S += "L"
                        .concat(T.x, ",")
                        .concat(T.y, "\n      A")
                        .concat(i, ",")
                        .concat(i, ",0,0,")
                        .concat(+(f < 0), ",")
                        .concat(M.x, ",")
                        .concat(M.y, "\n      A")
                        .concat(r, ",")
                        .concat(r, ",0,")
                        .concat(+(C > 180), ",")
                        .concat(+(f > 0), ",")
                        .concat(E.x, ",")
                        .concat(E.y, "\n      A")
                        .concat(i, ",")
                        .concat(i, ",0,0,")
                        .concat(+(f < 0), ",")
                        .concat(P.x, ",")
                        .concat(P.y, "Z");
                    } else S += "L".concat(e, ",").concat(n, "Z");
                    return S;
                  })({
                    cx: n,
                    cy: a,
                    innerRadius: c,
                    outerRadius: s,
                    cornerRadius: Math.min(j, S / 2),
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
              l({}, (0, i.L6)(e, !0), { className: O, d: w, role: "img" }),
            )
          );
        };
    },
    58054: (t, e, n) => {
      "use strict";
      n.d(e, { v: () => $ });
      var r = n(47427),
        o = n(70758),
        i = n.n(o);
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
              o = b * n;
            t.moveTo(0, -n), t.lineTo(r, o);
            for (let e = 1; e < 5; ++e) {
              const i = (s * e) / 5,
                c = a(i),
                l = u(i);
              t.lineTo(l * n, -c * n), t.lineTo(c * r - l * o, l * r + c * o);
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
        S = -0.5,
        j = c(3) / 2,
        E = 1 / c(12),
        P = 3 * (E / 2 + 1),
        A = {
          draw(t, e) {
            const n = c(e / P),
              r = n / 2,
              o = n * E,
              i = r,
              a = n * E + n,
              u = -i,
              l = a;
            t.moveTo(r, o),
              t.lineTo(i, a),
              t.lineTo(u, l),
              t.lineTo(S * r - j * o, j * r + S * o),
              t.lineTo(S * i - j * a, j * i + S * a),
              t.lineTo(S * u - j * l, j * u + S * l),
              t.lineTo(S * r + j * o, S * o - j * r),
              t.lineTo(S * i + j * a, S * a - j * i),
              t.lineTo(S * u + j * l, S * l - j * u),
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      var U = {
          symbolCircle: f,
          symbolCross: p,
          symbolDiamond: y,
          symbolSquare: v,
          symbolStar: x,
          symbolTriangle: O,
          symbolWye: A,
        },
        z = Math.PI / 180,
        $ = function (t) {
          var e,
            n,
            o = t.type,
            a = void 0 === o ? "circle" : o,
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
                      var e = "symbol".concat(i()(t));
                      return U[e] || f;
                    })(a)),
                    (n = (function (t, e) {
                      let n = null,
                        r = (0, M.d)(o);
                      function o() {
                        let o;
                        if (
                          (n || (n = o = r()),
                          t
                            .apply(this, arguments)
                            .draw(n, +e.apply(this, arguments)),
                          o)
                        )
                          return (n = null), o + "" || null;
                      }
                      return (
                        (t = "function" == typeof t ? t : (0, k.Z)(t || f)),
                        (e =
                          "function" == typeof e
                            ? e
                            : (0, k.Z)(void 0 === e ? 64 : +e)),
                        (o.type = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : (0, k.Z)(e)),
                              o)
                            : t;
                        }),
                        (o.size = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : (0, k.Z)(+t)),
                              o)
                            : e;
                        }),
                        (o.context = function (t) {
                          return arguments.length
                            ? ((n = null == t ? null : t), o)
                            : n;
                        }),
                        o
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
                              var r = 18 * z;
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
      $.registerSymbol = function (t, e) {
        U["symbol".concat(i()(t))] = e;
      };
    },
    37350: (t, e, n) => {
      "use strict";
      n.d(e, {
        bn: () => L,
        a3: () => W,
        lT: () => R,
        V$: () => U,
        w7: () => z,
      });
      var r = n(47427),
        o = n(8889),
        i = n.n(o),
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (u.push(r.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
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
      var S = function (t, e, n, r, o) {
          var i,
            a = n - r;
          return (
            (i = "M ".concat(t, ",").concat(e)),
            (i += "L ".concat(t + n, ",").concat(e)),
            (i += "L ".concat(t + n - a / 2, ",").concat(e + o)),
            (i += "L ".concat(t + n - a / 2 - r, ",").concat(e + o)),
            (i += "L ".concat(t, ",").concat(e, " Z"))
          );
        },
        j = {
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
          var e = w(w({}, j), t),
            n = (0, r.useRef)(),
            o = g((0, r.useState)(-1), 2),
            i = o[0],
            a = o[1];
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
                  canBegin: i > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: f, x: u, y: c },
                  to: { upperWidth: l, lowerWidth: s, height: f, x: u, y: c },
                  duration: b,
                  animationEasing: v,
                  isActive: O,
                },
                function (t) {
                  var o = t.upperWidth,
                    a = t.lowerWidth,
                    u = t.height,
                    c = t.x,
                    l = t.y;
                  return r.createElement(
                    d.ZP,
                    {
                      canBegin: i > 0,
                      from: "0px ".concat(-1 === i ? 1 : i, "px"),
                      to: "".concat(i, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: x,
                      duration: b,
                      easing: v,
                    },
                    r.createElement(
                      "path",
                      m({}, (0, y.L6)(e, !0), {
                        className: E,
                        d: S(c, l, o, a, u),
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
                    d: S(u, c, l, s, f),
                  }),
                ),
              );
        },
        P = n(55287),
        A = n(47430),
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
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
            return r.createElement(P.L, n);
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
          o = t.shapeType,
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
        else if (i()(n)) e = n(h);
        else if (u()(n) && !l()(n)) {
          var d = c(n, h);
          e = r.createElement(B, { shapeType: o, elementProps: d });
        } else {
          var y = h;
          e = r.createElement(B, { shapeType: o, elementProps: y });
        }
        return p ? r.createElement(A.m, { className: f }, e) : e;
      }
      function R(t, e) {
        return null != e && "trapezoids" in t.props;
      }
      function U(t, e) {
        return null != e && "sectors" in t.props;
      }
      function z(t, e) {
        return null != e && "points" in t.props;
      }
      function $(t, e) {
        var n,
          r,
          o =
            t.x ===
              (null == e || null === (n = e.labelViewBox) || void 0 === n
                ? void 0
                : n.x) || t.x === e.x,
          i =
            t.y ===
              (null == e || null === (r = e.labelViewBox) || void 0 === r
                ? void 0
                : r.y) || t.y === e.y;
        return o && i;
      }
      function F(t, e) {
        var n = t.endAngle === e.endAngle,
          r = t.startAngle === e.startAngle;
        return n && r;
      }
      function Z(t, e) {
        var n = t.x === e.x,
          r = t.y === e.y,
          o = t.z === e.z;
        return n && r && o;
      }
      function W(t) {
        var e = t.activeTooltipItem,
          n = t.graphicalItem,
          r = t.itemData,
          o = (function (t, e) {
            var n;
            return (
              R(t, e)
                ? (n = "trapezoids")
                : U(t, e)
                  ? (n = "sectors")
                  : z(t, e) && (n = "points"),
              n
            );
          })(n, e),
          i = (function (t, e) {
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
              : U(t, e)
                ? null === (r = e.tooltipPayload) ||
                  void 0 === r ||
                  null === (r = r[0]) ||
                  void 0 === r ||
                  null === (r = r.payload) ||
                  void 0 === r
                  ? void 0
                  : r.payload
                : z(t, e)
                  ? e.payload
                  : {};
          })(n, e),
          a = r.filter(function (t, r) {
            var a = f()(i, t),
              u = n.props[o].filter(function (t) {
                var r = (function (t, e) {
                  var n;
                  return (
                    R(t, e) ? (n = $) : U(t, e) ? (n = F) : z(t, e) && (n = Z),
                    n
                  );
                })(n, e);
                return r(t, e);
              }),
              c = n.props[o].indexOf(u[u.length - 1]);
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
        o = n.n(r),
        i = n(55084),
        a = n.n(i),
        u = n(91140),
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
      var m = function (t, e, n, r, o) {
          var i = t.width,
            a = t.height,
            f = t.layout,
            p = t.children,
            h = Object.keys(e),
            v = {
              left: n.left,
              leftMirror: n.left,
              right: i - n.right,
              rightMirror: i - n.right,
              top: n.top,
              topMirror: n.top,
              bottom: a - n.bottom,
              bottomMirror: a - n.bottom,
            },
            m = !!(0, c.sP)(p, s.$);
          return h.reduce(function (i, a) {
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
              E = b.reversed,
              P = "".concat(x).concat(j ? "Mirror" : "");
            if (
              "number" === b.type &&
              ("gap" === b.padding || "no-gap" === b.padding)
            ) {
              var A = w[1] - w[0],
                k = 1 / 0,
                M = b.categoricalDomain.sort();
              M.forEach(function (t, e) {
                e > 0 && (k = Math.min((t || 0) - (M[e - 1] || 0), k));
              });
              var T = k / A,
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
                    n.left + (S.left || 0) + (c || 0),
                    n.left + n.width - (S.right || 0) - (c || 0),
                  ]
                : "yAxis" === r
                  ? "horizontal" === f
                    ? [n.top + n.height - (S.bottom || 0), n.top + (S.top || 0)]
                    : [
                        n.top + (S.top || 0) + (c || 0),
                        n.top + n.height - (S.bottom || 0) - (c || 0),
                      ]
                  : b.range),
              E && (s = [s[1], s[0]]);
            var D = (0, u.Hq)(b, o, m),
              I = D.scale,
              B = D.realScaleType;
            I.domain(w).range(s), (0, u.zF)(I);
            var L = (0, u.g$)(I, d(d({}, b), {}, { realScaleType: B }));
            "xAxis" === r
              ? ((g = ("top" === x && !j) || ("bottom" === x && j)),
                (p = n.left),
                (h = v[P] - g * b.height))
              : "yAxis" === r &&
                ((g = ("left" === x && !j) || ("right" === x && j)),
                (p = v[P] - g * b.width),
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
                ? b.hide || (v[P] += (g ? -1 : 1) * R.width)
                : (v[P] += (g ? -1 : 1) * R.height),
              d(d({}, i), {}, y({}, a, R))
            );
          }, {});
        },
        g = function (t, e) {
          var n = t.x,
            r = t.y,
            o = e.x,
            i = e.y;
          return {
            x: Math.min(n, o),
            y: Math.min(r, i),
            width: Math.abs(o - n),
            height: Math.abs(i - r),
          };
        },
        b = function (t) {
          var e = t.x1,
            n = t.y1,
            r = t.x2,
            o = t.y2;
          return g({ x: e, y: n }, { x: r, y: o });
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
                          var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                          return this.scale(t) + o;
                        case "end":
                          var i = this.bandwidth ? this.bandwidth() : 0;
                          return this.scale(t) + i;
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
                i = n.position;
              return o()(t, function (t, n) {
                return e[n].apply(t, { bandAware: r, position: i });
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
          o = (r * Math.PI) / 180,
          i = Math.atan(n / e),
          a = o > i && o < Math.PI - i ? n / Math.sin(o) : e / Math.cos(o);
        return Math.abs(a);
      };
    },
    91140: (t, e, n) => {
      "use strict";
      n.d(e, {
        By: () => Io,
        VO: () => _o,
        zF: () => Go,
        DO: () => Zo,
        Bu: () => Xo,
        zT: () => ui,
        qz: () => Do,
        pt: () => No,
        Yj: () => ei,
        Fy: () => ti,
        Hv: () => Qo,
        Rf: () => zo,
        gF: () => To,
        s6: () => Ro,
        EB: () => ri,
        fk: () => Co,
        wh: () => Ko,
        O3: () => ni,
        uY: () => $o,
        g$: () => Jo,
        Qo: () => li,
        F$: () => Mo,
        NA: () => Uo,
        ko: () => ci,
        ZI: () => Lo,
        Hq: () => Wo,
        LG: () => ai,
        Vv: () => Yo,
      });
      var r = {};
      n.r(r),
        n.d(r, {
          scaleBand: () => o.Z,
          scaleDiverging: () => hr,
          scaleDivergingLog: () => dr,
          scaleDivergingPow: () => vr,
          scaleDivergingSqrt: () => mr,
          scaleDivergingSymlog: () => yr,
          scaleIdentity: () => it,
          scaleImplicit: () => bt.O,
          scaleLinear: () => ot,
          scaleLog: () => dt,
          scaleOrdinal: () => bt.Z,
          scalePoint: () => o.x,
          scalePow: () => jt,
          scaleQuantile: () => Bt,
          scaleQuantize: () => Lt,
          scaleRadial: () => At,
          scaleSequential: () => ar,
          scaleSequentialLog: () => ur,
          scaleSequentialPow: () => lr,
          scaleSequentialQuantile: () => fr,
          scaleSequentialSqrt: () => sr,
          scaleSequentialSymlog: () => cr,
          scaleSqrt: () => Et,
          scaleSymlog: () => gt,
          scaleThreshold: () => Rt,
          scaleTime: () => nr,
          scaleUtc: () => rr,
          tickFormat: () => nt,
        });
      var o = n(9756);
      const i = Math.sqrt(50),
        a = Math.sqrt(10),
        u = Math.sqrt(2);
      function c(t, e, n) {
        const r = (e - t) / Math.max(0, n),
          o = Math.floor(Math.log10(r)),
          l = r / Math.pow(10, o),
          s = l >= i ? 10 : l >= a ? 5 : l >= u ? 2 : 1;
        let f, p, h;
        return (
          o < 0
            ? ((h = Math.pow(10, -o) / s),
              (f = Math.round(t * h)),
              (p = Math.round(e * h)),
              f / h < t && ++f,
              p / h > e && --p,
              (h = -h))
            : ((h = Math.pow(10, o) * s),
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
          [o, i, a] = r ? c(e, t, n) : c(t, e, n);
        if (!(i >= o)) return [];
        const u = i - o + 1,
          l = new Array(u);
        if (r)
          if (a < 0) for (let t = 0; t < u; ++t) l[t] = (i - t) / -a;
          else for (let t = 0; t < u; ++t) l[t] = (i - t) * a;
        else if (a < 0) for (let t = 0; t < u; ++t) l[t] = (o + t) / -a;
        else for (let t = 0; t < u; ++t) l[t] = (o + t) * a;
        return l;
      }
      function s(t, e, n) {
        return c((t = +t), (e = +e), (n = +n))[2];
      }
      function f(t, e, n) {
        n = +n;
        const r = (e = +e) < (t = +t),
          o = r ? s(e, t, n) : s(t, e, n);
        return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
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
        function o(t, r, o = 0, i = t.length) {
          if (o < i) {
            if (0 !== e(r, r)) return i;
            do {
              const e = (o + i) >>> 1;
              n(t[e], r) < 0 ? (o = e + 1) : (i = e);
            } while (o < i);
          }
          return o;
        }
        return (
          2 !== t.length
            ? ((e = p), (n = (e, n) => p(t(e), n)), (r = (e, n) => t(e) - n))
            : ((e = t === p || t === h ? t : y), (n = t), (r = t)),
          {
            left: o,
            center: function (t, e, n = 0, i = t.length) {
              const a = o(t, e, n, i - 1);
              return a > n && r(t[a - 1], e) > -r(t[a], e) ? a - 1 : a;
            },
            right: function (t, r, o = 0, i = t.length) {
              if (o < i) {
                if (0 !== e(r, r)) return i;
                do {
                  const e = (o + i) >>> 1;
                  n(t[e], r) <= 0 ? (o = e + 1) : (i = e);
                } while (o < i);
              }
              return o;
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
      var x = n(30598),
        w = n(48623);
      function O(t, e) {
        var n,
          r = e ? e.length : 0,
          o = t ? Math.min(r, t.length) : 0,
          i = new Array(o),
          a = new Array(r);
        for (n = 0; n < o; ++n) i[n] = M(t[n], e[n]);
        for (; n < r; ++n) a[n] = e[n];
        return function (t) {
          for (n = 0; n < o; ++n) a[n] = i[n](t);
          return a;
        };
      }
      function S(t, e) {
        var n = new Date();
        return (
          (t = +t),
          (e = +e),
          function (r) {
            return n.setTime(t * (1 - r) + e * r), n;
          }
        );
      }
      var j = n(21669);
      function E(t, e) {
        var n,
          r = {},
          o = {};
        for (n in ((null !== t && "object" == typeof t) || (t = {}),
        (null !== e && "object" == typeof e) || (e = {}),
        e))
          n in t ? (r[n] = M(t[n], e[n])) : (o[n] = e[n]);
        return function (t) {
          for (n in r) o[n] = r[n](t);
          return o;
        };
      }
      var P = n(34242),
        A = n(65043);
      function k(t, e) {
        e || (e = []);
        var n,
          r = t ? Math.min(e.length, t.length) : 0,
          o = e.slice();
        return function (i) {
          for (n = 0; n < r; ++n) o[n] = t[n] * (1 - i) + e[n] * i;
          return o;
        };
      }
      function M(t, e) {
        var n,
          r,
          o = typeof e;
        return null == e || "boolean" === o
          ? (0, A.Z)(e)
          : ("number" === o
              ? j.Z
              : "string" === o
                ? (n = (0, x.ZP)(e))
                  ? ((e = n), w.ZP)
                  : P.Z
                : e instanceof x.ZP
                  ? w.ZP
                  : e instanceof Date
                    ? S
                    : ((r = e),
                      !ArrayBuffer.isView(r) || r instanceof DataView
                        ? Array.isArray(e)
                          ? O
                          : ("function" != typeof e.valueOf &&
                                "function" != typeof e.toString) ||
                              isNaN(e)
                            ? E
                            : j.Z
                        : k))(t, e);
      }
      function T(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return Math.round(t * (1 - n) + e * n);
          }
        );
      }
      function _(t) {
        return +t;
      }
      var C = [0, 1];
      function N(t) {
        return t;
      }
      function D(t, e) {
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
      function I(t, e, n) {
        var r = t[0],
          o = t[1],
          i = e[0],
          a = e[1];
        return (
          o < r
            ? ((r = D(o, r)), (i = n(a, i)))
            : ((r = D(r, o)), (i = n(i, a))),
          function (t) {
            return i(r(t));
          }
        );
      }
      function B(t, e, n) {
        var r = Math.min(t.length, e.length) - 1,
          o = new Array(r),
          i = new Array(r),
          a = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < r;

        )
          (o[a] = D(t[a], t[a + 1])), (i[a] = n(e[a], e[a + 1]));
        return function (e) {
          var n = b(t, e, 1, r) - 1;
          return i[n](o[n](e));
        };
      }
      function L(t, e) {
        return e
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function R() {
        var t,
          e,
          n,
          r,
          o,
          i,
          a = C,
          u = C,
          c = M,
          l = N;
        function s() {
          var t,
            e,
            n,
            c = Math.min(a.length, u.length);
          return (
            l !== N &&
              ((t = a[0]),
              (e = a[c - 1]),
              t > e && ((n = t), (t = e), (e = n)),
              (l = function (n) {
                return Math.max(t, Math.min(e, n));
              })),
            (r = c > 2 ? B : I),
            (o = i = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e = +e))
            ? n
            : (o || (o = r(a.map(t), u, c)))(t(l(e)));
        }
        return (
          (f.invert = function (n) {
            return l(e((i || (i = r(u, a.map(t), j.Z)))(n)));
          }),
          (f.domain = function (t) {
            return arguments.length ? ((a = Array.from(t, _)), s()) : a.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((u = Array.from(t)), s()) : u.slice();
          }),
          (f.rangeRound = function (t) {
            return (u = Array.from(t)), (c = T), s();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((l = !!t || N), s()) : l !== N;
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
      function U() {
        return R()(N, N);
      }
      var z,
        $ = n(80560),
        F =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function Z(t) {
        if (!(e = F.exec(t))) throw new Error("invalid format: " + t);
        var e;
        return new W({
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
      function W(t) {
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
      function q(t, e) {
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
      function G(t) {
        return (t = q(Math.abs(t))) ? t[1] : NaN;
      }
      function X(t, e) {
        var n = q(t, e);
        if (!n) return t + "";
        var r = n[0],
          o = n[1];
        return o < 0
          ? "0." + new Array(-o).join("0") + r
          : r.length > o + 1
            ? r.slice(0, o + 1) + "." + r.slice(o + 1)
            : r + new Array(o - r.length + 2).join("0");
      }
      (Z.prototype = W.prototype),
        (W.prototype.toString = function () {
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
      const Y = {
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
        p: (t, e) => X(100 * t, e),
        r: X,
        s: function (t, e) {
          var n = q(t, e);
          if (!n) return t + "";
          var r = n[0],
            o = n[1],
            i = o - (z = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
            a = r.length;
          return i === a
            ? r
            : i > a
              ? r + new Array(i - a + 1).join("0")
              : i > 0
                ? r.slice(0, i) + "." + r.slice(i)
                : "0." +
                  new Array(1 - i).join("0") +
                  q(t, Math.max(0, e + i - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function H(t) {
        return t;
      }
      var V,
        K,
        J,
        Q = Array.prototype.map,
        tt = [
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
      function et(t) {
        var e,
          n,
          r =
            void 0 === t.grouping || void 0 === t.thousands
              ? H
              : ((e = Q.call(t.grouping, Number)),
                (n = t.thousands + ""),
                function (t, r) {
                  for (
                    var o = t.length, i = [], a = 0, u = e[0], c = 0;
                    o > 0 &&
                    u > 0 &&
                    (c + u + 1 > r && (u = Math.max(1, r - c)),
                    i.push(t.substring((o -= u), o + u)),
                    !((c += u + 1) > r));

                  )
                    u = e[(a = (a + 1) % e.length)];
                  return i.reverse().join(n);
                }),
          o = void 0 === t.currency ? "" : t.currency[0] + "",
          i = void 0 === t.currency ? "" : t.currency[1] + "",
          a = void 0 === t.decimal ? "." : t.decimal + "",
          u =
            void 0 === t.numerals
              ? H
              : (function (t) {
                  return function (e) {
                    return e.replace(/[0-9]/g, function (e) {
                      return t[+e];
                    });
                  };
                })(Q.call(t.numerals, String)),
          c = void 0 === t.percent ? "%" : t.percent + "",
          l = void 0 === t.minus ? "−" : t.minus + "",
          s = void 0 === t.nan ? "NaN" : t.nan + "";
        function f(t) {
          var e = (t = Z(t)).fill,
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
            : Y[g] || (void 0 === v && (v = 12), (m = !0), (g = "g")),
            (h || ("0" === e && "=" === n)) && ((h = !0), (e = "0"), (n = "="));
          var b =
              "$" === p
                ? o
                : "#" === p && /[boxX]/.test(g)
                  ? "0" + g.toLowerCase()
                  : "",
            x = "$" === p ? i : /[%p]/.test(g) ? c : "",
            w = Y[g],
            O = /[defgprs%]/.test(g);
          function S(t) {
            var o,
              i,
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
                    t: for (var e, n = t.length, r = 1, o = -1; r < n; ++r)
                      switch (t[r]) {
                        case ".":
                          o = e = r;
                          break;
                        case "0":
                          0 === o && (o = r), (e = r);
                          break;
                        default:
                          if (!+t[r]) break t;
                          o > 0 && (o = 0);
                      }
                    return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
                  })(t)),
                j && 0 == +t && "+" !== f && (j = !1),
                (p =
                  (j ? ("(" === f ? f : l) : "-" === f || "(" === f ? "" : f) +
                  p),
                (S =
                  ("s" === g ? tt[8 + z / 3] : "") +
                  S +
                  (j && "(" === f ? ")" : "")),
                O)
              )
                for (o = -1, i = t.length; ++o < i; )
                  if (48 > (c = t.charCodeAt(o)) || c > 57) {
                    (S = (46 === c ? a + t.slice(o + 1) : t.slice(o)) + S),
                      (t = t.slice(0, o));
                    break;
                  }
            }
            y && !h && (t = r(t, 1 / 0));
            var E = p.length + t.length + S.length,
              P = E < d ? new Array(d - E + 1).join(e) : "";
            switch (
              (y &&
                h &&
                ((t = r(P + t, P.length ? d - S.length : 1 / 0)), (P = "")),
              n)
            ) {
              case "<":
                t = p + t + S + P;
                break;
              case "=":
                t = p + P + t + S;
                break;
              case "^":
                t = P.slice(0, (E = P.length >> 1)) + p + t + S + P.slice(E);
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
            var n = f((((t = Z(t)).type = "f"), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(G(e) / 3))),
              o = Math.pow(10, -r),
              i = tt[8 + r / 3];
            return function (t) {
              return n(o * t) + i;
            };
          },
        };
      }
      function nt(t, e, n, r) {
        var o,
          i = f(t, e, n);
        switch ((r = Z(null == r ? ",f" : r)).type) {
          case "s":
            var a = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != r.precision ||
                isNaN(
                  (o = (function (t, e) {
                    return Math.max(
                      0,
                      3 * Math.max(-8, Math.min(8, Math.floor(G(e) / 3))) -
                        G(Math.abs(t)),
                    );
                  })(i, a)),
                ) ||
                (r.precision = o),
              J(r, a)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != r.precision ||
              isNaN(
                (o = (function (t, e) {
                  return (
                    (t = Math.abs(t)),
                    (e = Math.abs(e) - t),
                    Math.max(0, G(e) - G(t)) + 1
                  );
                })(i, Math.max(Math.abs(t), Math.abs(e)))),
              ) ||
              (r.precision = o - ("e" === r.type));
            break;
          case "f":
          case "%":
            null != r.precision ||
              isNaN(
                (o = (function (t) {
                  return Math.max(0, -G(Math.abs(t)));
                })(i)),
              ) ||
              (r.precision = o - 2 * ("%" === r.type));
        }
        return K(r);
      }
      function rt(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var n = e();
            return l(n[0], n[n.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, n) {
            var r = e();
            return nt(r[0], r[r.length - 1], null == t ? 10 : t, n);
          }),
          (t.nice = function (n) {
            null == n && (n = 10);
            var r,
              o,
              i = e(),
              a = 0,
              u = i.length - 1,
              c = i[a],
              l = i[u],
              f = 10;
            for (
              l < c && ((o = c), (c = l), (l = o), (o = a), (a = u), (u = o));
              f-- > 0;

            ) {
              if ((o = s(c, l, n)) === r) return (i[a] = c), (i[u] = l), e(i);
              if (o > 0)
                (c = Math.floor(c / o) * o), (l = Math.ceil(l / o) * o);
              else {
                if (!(o < 0)) break;
                (c = Math.ceil(c * o) / o), (l = Math.floor(l * o) / o);
              }
              r = o;
            }
            return t;
          }),
          t
        );
      }
      function ot() {
        var t = U();
        return (
          (t.copy = function () {
            return L(t, ot());
          }),
          $.o.apply(t, arguments),
          rt(t)
        );
      }
      function it(t) {
        var e;
        function n(t) {
          return null == t || isNaN((t = +t)) ? e : t;
        }
        return (
          (n.invert = n),
          (n.domain = n.range =
            function (e) {
              return arguments.length ? ((t = Array.from(e, _)), n) : t.slice();
            }),
          (n.unknown = function (t) {
            return arguments.length ? ((e = t), n) : e;
          }),
          (n.copy = function () {
            return it(t).unknown(e);
          }),
          (t = arguments.length ? Array.from(t, _) : [0, 1]),
          rt(n)
        );
      }
      function at(t, e) {
        var n,
          r = 0,
          o = (t = t.slice()).length - 1,
          i = t[r],
          a = t[o];
        return (
          a < i && ((n = r), (r = o), (o = n), (n = i), (i = a), (a = n)),
          (t[r] = e.floor(i)),
          (t[o] = e.ceil(a)),
          t
        );
      }
      function ut(t) {
        return Math.log(t);
      }
      function ct(t) {
        return Math.exp(t);
      }
      function lt(t) {
        return -Math.log(-t);
      }
      function st(t) {
        return -Math.exp(-t);
      }
      function ft(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function pt(t) {
        return (e, n) => -t(-e, n);
      }
      function ht(t) {
        const e = t(ut, ct),
          n = e.domain;
        let r,
          o,
          i = 10;
        function a() {
          return (
            (r = (function (t) {
              return t === Math.E
                ? Math.log
                : (10 === t && Math.log10) ||
                    (2 === t && Math.log2) ||
                    ((t = Math.log(t)), (e) => Math.log(e) / t);
            })(i)),
            (o = (function (t) {
              return 10 === t
                ? ft
                : t === Math.E
                  ? Math.exp
                  : (e) => Math.pow(t, e);
            })(i)),
            n()[0] < 0 ? ((r = pt(r)), (o = pt(o)), t(lt, st)) : t(ut, ct),
            e
          );
        }
        return (
          (e.base = function (t) {
            return arguments.length ? ((i = +t), a()) : i;
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
            if (!(i % 1) && h - p < d) {
              if (((p = Math.floor(p)), (h = Math.ceil(h)), a > 0)) {
                for (; p <= h; ++p)
                  for (s = 1; s < i; ++s)
                    if (((f = p < 0 ? s / o(-p) : s * o(p)), !(f < a))) {
                      if (f > u) break;
                      y.push(f);
                    }
              } else
                for (; p <= h; ++p)
                  for (s = i - 1; s >= 1; --s)
                    if (((f = p > 0 ? s / o(-p) : s * o(p)), !(f < a))) {
                      if (f > u) break;
                      y.push(f);
                    }
              2 * y.length < d && (y = l(a, u, d));
            } else y = l(p, h, Math.min(h - p, d)).map(o);
            return c ? y.reverse() : y;
          }),
          (e.tickFormat = (t, n) => {
            if (
              (null == t && (t = 10),
              null == n && (n = 10 === i ? "s" : ","),
              "function" != typeof n &&
                (i % 1 || null != (n = Z(n)).precision || (n.trim = !0),
                (n = K(n))),
              t === 1 / 0)
            )
              return n;
            const a = Math.max(1, (i * t) / e.ticks().length);
            return (t) => {
              let e = t / o(Math.round(r(t)));
              return e * i < i - 0.5 && (e *= i), e <= a ? n(t) : "";
            };
          }),
          (e.nice = () =>
            n(
              at(n(), {
                floor: (t) => o(Math.floor(r(t))),
                ceil: (t) => o(Math.ceil(r(t))),
              }),
            )),
          e
        );
      }
      function dt() {
        const t = ht(R()).domain([1, 10]);
        return (
          (t.copy = () => L(t, dt()).base(t.base())), $.o.apply(t, arguments), t
        );
      }
      function yt(t) {
        return function (e) {
          return Math.sign(e) * Math.log1p(Math.abs(e / t));
        };
      }
      function vt(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function mt(t) {
        var e = 1,
          n = t(yt(e), vt(e));
        return (
          (n.constant = function (n) {
            return arguments.length ? t(yt((e = +n)), vt(e)) : e;
          }),
          rt(n)
        );
      }
      function gt() {
        var t = mt(R());
        return (
          (t.copy = function () {
            return L(t, gt()).constant(t.constant());
          }),
          $.o.apply(t, arguments)
        );
      }
      (V = et({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (K = V.format),
        (J = V.formatPrefix);
      var bt = n(54328);
      function xt(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function wt(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function Ot(t) {
        return t < 0 ? -t * t : t * t;
      }
      function St(t) {
        var e = t(N, N),
          n = 1;
        return (
          (e.exponent = function (e) {
            return arguments.length
              ? 1 === (n = +e)
                ? t(N, N)
                : 0.5 === n
                  ? t(wt, Ot)
                  : t(xt(n), xt(1 / n))
              : n;
          }),
          rt(e)
        );
      }
      function jt() {
        var t = St(R());
        return (
          (t.copy = function () {
            return L(t, jt()).exponent(t.exponent());
          }),
          $.o.apply(t, arguments),
          t
        );
      }
      function Et() {
        return jt.apply(null, arguments).exponent(0.5);
      }
      function Pt(t) {
        return Math.sign(t) * t * t;
      }
      function At() {
        var t,
          e = U(),
          n = [0, 1],
          r = !1;
        function o(n) {
          var o = (function (t) {
            return Math.sign(t) * Math.sqrt(Math.abs(t));
          })(e(n));
          return isNaN(o) ? t : r ? Math.round(o) : o;
        }
        return (
          (o.invert = function (t) {
            return e.invert(Pt(t));
          }),
          (o.domain = function (t) {
            return arguments.length ? (e.domain(t), o) : e.domain();
          }),
          (o.range = function (t) {
            return arguments.length
              ? (e.range((n = Array.from(t, _)).map(Pt)), o)
              : n.slice();
          }),
          (o.rangeRound = function (t) {
            return o.range(t).round(!0);
          }),
          (o.round = function (t) {
            return arguments.length ? ((r = !!t), o) : r;
          }),
          (o.clamp = function (t) {
            return arguments.length ? (e.clamp(t), o) : e.clamp();
          }),
          (o.unknown = function (e) {
            return arguments.length ? ((t = e), o) : t;
          }),
          (o.copy = function () {
            return At(e.domain(), n).round(r).clamp(e.clamp()).unknown(t);
          }),
          $.o.apply(o, arguments),
          rt(o)
        );
      }
      function kt(t, e) {
        let n;
        if (void 0 === e)
          for (const e of t)
            null != e && (n < e || (void 0 === n && e >= e)) && (n = e);
        else {
          let r = -1;
          for (let o of t)
            null != (o = e(o, ++r, t)) &&
              (n < o || (void 0 === n && o >= o)) &&
              (n = o);
        }
        return n;
      }
      function Mt(t, e) {
        let n;
        if (void 0 === e)
          for (const e of t)
            null != e && (n > e || (void 0 === n && e >= e)) && (n = e);
        else {
          let r = -1;
          for (let o of t)
            null != (o = e(o, ++r, t)) &&
              (n > o || (void 0 === n && o >= o)) &&
              (n = o);
        }
        return n;
      }
      function Tt(t = p) {
        if (t === p) return _t;
        if ("function" != typeof t)
          throw new TypeError("compare is not a function");
        return (e, n) => {
          const r = t(e, n);
          return r || 0 === r ? r : (0 === t(n, n)) - (0 === t(e, e));
        };
      }
      function _t(t, e) {
        return (
          (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
          (t < e ? -1 : t > e ? 1 : 0)
        );
      }
      function Ct(t, e, n = 0, r = 1 / 0, o) {
        if (
          ((e = Math.floor(e)),
          (n = Math.floor(Math.max(0, n))),
          (r = Math.floor(Math.min(t.length - 1, r))),
          !(n <= e && e <= r))
        )
          return t;
        for (o = void 0 === o ? _t : Tt(o); r > n; ) {
          if (r - n > 600) {
            const i = r - n + 1,
              a = e - n + 1,
              u = Math.log(i),
              c = 0.5 * Math.exp((2 * u) / 3),
              l =
                0.5 *
                Math.sqrt((u * c * (i - c)) / i) *
                (a - i / 2 < 0 ? -1 : 1);
            Ct(
              t,
              e,
              Math.max(n, Math.floor(e - (a * c) / i + l)),
              Math.min(r, Math.floor(e + ((i - a) * c) / i + l)),
              o,
            );
          }
          const i = t[e];
          let a = n,
            u = r;
          for (Nt(t, n, e), o(t[r], i) > 0 && Nt(t, n, r); a < u; ) {
            for (Nt(t, a, u), ++a, --u; o(t[a], i) < 0; ) ++a;
            for (; o(t[u], i) > 0; ) --u;
          }
          0 === o(t[n], i) ? Nt(t, n, u) : (++u, Nt(t, u, r)),
            u <= e && (n = u + 1),
            e <= u && (r = u - 1);
        }
        return t;
      }
      function Nt(t, e, n) {
        const r = t[e];
        (t[e] = t[n]), (t[n] = r);
      }
      function Dt(t, e, n) {
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
          if (e <= 0 || r < 2) return Mt(t);
          if (e >= 1) return kt(t);
          var r,
            o = (r - 1) * e,
            i = Math.floor(o),
            a = kt(Ct(t, i).subarray(0, i + 1));
          return a + (Mt(t.subarray(i + 1)) - a) * (o - i);
        }
      }
      function It(t, e, n = v) {
        if ((r = t.length) && !isNaN((e = +e))) {
          if (e <= 0 || r < 2) return +n(t[0], 0, t);
          if (e >= 1) return +n(t[r - 1], r - 1, t);
          var r,
            o = (r - 1) * e,
            i = Math.floor(o),
            a = +n(t[i], i, t);
          return a + (+n(t[i + 1], i + 1, t) - a) * (o - i);
        }
      }
      function Bt() {
        var t,
          e = [],
          n = [],
          r = [];
        function o() {
          var t = 0,
            o = Math.max(1, n.length);
          for (r = new Array(o - 1); ++t < o; ) r[t - 1] = It(e, t / o);
          return i;
        }
        function i(e) {
          return null == e || isNaN((e = +e)) ? t : n[b(r, e)];
        }
        return (
          (i.invertExtent = function (t) {
            var o = n.indexOf(t);
            return o < 0
              ? [NaN, NaN]
              : [
                  o > 0 ? r[o - 1] : e[0],
                  o < r.length ? r[o] : e[e.length - 1],
                ];
          }),
          (i.domain = function (t) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let n of t) null == n || isNaN((n = +n)) || e.push(n);
            return e.sort(p), o();
          }),
          (i.range = function (t) {
            return arguments.length ? ((n = Array.from(t)), o()) : n.slice();
          }),
          (i.unknown = function (e) {
            return arguments.length ? ((t = e), i) : t;
          }),
          (i.quantiles = function () {
            return r.slice();
          }),
          (i.copy = function () {
            return Bt().domain(e).range(n).unknown(t);
          }),
          $.o.apply(i, arguments)
        );
      }
      function Lt() {
        var t,
          e = 0,
          n = 1,
          r = 1,
          o = [0.5],
          i = [0, 1];
        function a(e) {
          return null != e && e <= e ? i[b(o, e, 0, r)] : t;
        }
        function u() {
          var t = -1;
          for (o = new Array(r); ++t < r; )
            o[t] = ((t + 1) * n - (t - r) * e) / (r + 1);
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
              ? ((r = (i = Array.from(t)).length - 1), u())
              : i.slice();
          }),
          (a.invertExtent = function (t) {
            var a = i.indexOf(t);
            return a < 0
              ? [NaN, NaN]
              : a < 1
                ? [e, o[0]]
                : a >= r
                  ? [o[r - 1], n]
                  : [o[a - 1], o[a]];
          }),
          (a.unknown = function (e) {
            return arguments.length ? ((t = e), a) : a;
          }),
          (a.thresholds = function () {
            return o.slice();
          }),
          (a.copy = function () {
            return Lt().domain([e, n]).range(i).unknown(t);
          }),
          $.o.apply(rt(a), arguments)
        );
      }
      function Rt() {
        var t,
          e = [0.5],
          n = [0, 1],
          r = 1;
        function o(o) {
          return null != o && o <= o ? n[b(e, o, 0, r)] : t;
        }
        return (
          (o.domain = function (t) {
            return arguments.length
              ? ((e = Array.from(t)), (r = Math.min(e.length, n.length - 1)), o)
              : e.slice();
          }),
          (o.range = function (t) {
            return arguments.length
              ? ((n = Array.from(t)), (r = Math.min(e.length, n.length - 1)), o)
              : n.slice();
          }),
          (o.invertExtent = function (t) {
            var r = n.indexOf(t);
            return [e[r - 1], e[r]];
          }),
          (o.unknown = function (e) {
            return arguments.length ? ((t = e), o) : t;
          }),
          (o.copy = function () {
            return Rt().domain(e).range(n).unknown(t);
          }),
          $.o.apply(o, arguments)
        );
      }
      const Ut = 1e3,
        zt = 6e4,
        $t = 36e5,
        Ft = 864e5,
        Zt = 6048e5,
        Wt = 2592e6,
        qt = 31536e6,
        Gt = new Date(),
        Xt = new Date();
      function Yt(t, e, n, r) {
        function o(e) {
          return t((e = 0 === arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (o.floor = (e) => (t((e = new Date(+e))), e)),
          (o.ceil = (n) => (t((n = new Date(n - 1))), e(n, 1), t(n), n)),
          (o.round = (t) => {
            const e = o(t),
              n = o.ceil(t);
            return t - e < n - t ? e : n;
          }),
          (o.offset = (t, n) => (
            e((t = new Date(+t)), null == n ? 1 : Math.floor(n)), t
          )),
          (o.range = (n, r, i) => {
            const a = [];
            if (
              ((n = o.ceil(n)),
              (i = null == i ? 1 : Math.floor(i)),
              !(n < r && i > 0))
            )
              return a;
            let u;
            do {
              a.push((u = new Date(+n))), e(n, i), t(n);
            } while (u < n && n < r);
            return a;
          }),
          (o.filter = (n) =>
            Yt(
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
            ((o.count = (e, r) => (
              Gt.setTime(+e),
              Xt.setTime(+r),
              t(Gt),
              t(Xt),
              Math.floor(n(Gt, Xt))
            )),
            (o.every = (t) => (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? o.filter(
                      r ? (e) => r(e) % t == 0 : (e) => o.count(0, e) % t == 0,
                    )
                  : o
                : null
            ))),
          o
        );
      }
      const Ht = Yt(
        () => {},
        (t, e) => {
          t.setTime(+t + e);
        },
        (t, e) => e - t,
      );
      Ht.every = (t) => (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? Yt(
                (e) => {
                  e.setTime(Math.floor(e / t) * t);
                },
                (e, n) => {
                  e.setTime(+e + n * t);
                },
                (e, n) => (n - e) / t,
              )
            : Ht
          : null
      );
      Ht.range;
      const Vt = Yt(
          (t) => {
            t.setTime(t - t.getMilliseconds());
          },
          (t, e) => {
            t.setTime(+t + e * Ut);
          },
          (t, e) => (e - t) / Ut,
          (t) => t.getUTCSeconds(),
        ),
        Kt =
          (Vt.range,
          Yt(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ut);
            },
            (t, e) => {
              t.setTime(+t + e * zt);
            },
            (t, e) => (e - t) / zt,
            (t) => t.getMinutes(),
          )),
        Jt =
          (Kt.range,
          Yt(
            (t) => {
              t.setUTCSeconds(0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * zt);
            },
            (t, e) => (e - t) / zt,
            (t) => t.getUTCMinutes(),
          )),
        Qt =
          (Jt.range,
          Yt(
            (t) => {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  t.getSeconds() * Ut -
                  t.getMinutes() * zt,
              );
            },
            (t, e) => {
              t.setTime(+t + e * $t);
            },
            (t, e) => (e - t) / $t,
            (t) => t.getHours(),
          )),
        te =
          (Qt.range,
          Yt(
            (t) => {
              t.setUTCMinutes(0, 0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * $t);
            },
            (t, e) => (e - t) / $t,
            (t) => t.getUTCHours(),
          )),
        ee =
          (te.range,
          Yt(
            (t) => t.setHours(0, 0, 0, 0),
            (t, e) => t.setDate(t.getDate() + e),
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * zt) /
              Ft,
            (t) => t.getDate() - 1,
          )),
        ne =
          (ee.range,
          Yt(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / Ft,
            (t) => t.getUTCDate() - 1,
          )),
        re =
          (ne.range,
          Yt(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / Ft,
            (t) => Math.floor(t / Ft),
          ));
      re.range;
      function oe(t) {
        return Yt(
          (e) => {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
              e.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setDate(t.getDate() + 7 * e);
          },
          (t, e) =>
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * zt) / Zt,
        );
      }
      const ie = oe(0),
        ae = oe(1),
        ue = oe(2),
        ce = oe(3),
        le = oe(4),
        se = oe(5),
        fe = oe(6);
      ie.range, ae.range, ue.range, ce.range, le.range, se.range, fe.range;
      function pe(t) {
        return Yt(
          (e) => {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
              e.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          (t, e) => (e - t) / Zt,
        );
      }
      const he = pe(0),
        de = pe(1),
        ye = pe(2),
        ve = pe(3),
        me = pe(4),
        ge = pe(5),
        be = pe(6),
        xe =
          (he.range,
          de.range,
          ye.range,
          ve.range,
          me.range,
          ge.range,
          be.range,
          Yt(
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
        we =
          (xe.range,
          Yt(
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
        Oe =
          (we.range,
          Yt(
            (t) => {
              t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setFullYear(t.getFullYear() + e);
            },
            (t, e) => e.getFullYear() - t.getFullYear(),
            (t) => t.getFullYear(),
          ));
      Oe.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? Yt(
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
      Oe.range;
      const Se = Yt(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear(),
      );
      Se.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? Yt(
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
      Se.range;
      function je(t, e, n, r, o, i) {
        const a = [
          [Vt, 1, Ut],
          [Vt, 5, 5e3],
          [Vt, 15, 15e3],
          [Vt, 30, 3e4],
          [i, 1, zt],
          [i, 5, 3e5],
          [i, 15, 9e5],
          [i, 30, 18e5],
          [o, 1, $t],
          [o, 3, 108e5],
          [o, 6, 216e5],
          [o, 12, 432e5],
          [r, 1, Ft],
          [r, 2, 1728e5],
          [n, 1, Zt],
          [e, 1, Wt],
          [e, 3, 7776e6],
          [t, 1, qt],
        ];
        function u(e, n, r) {
          const o = Math.abs(n - e) / r,
            i = d(([, , t]) => t).right(a, o);
          if (i === a.length) return t.every(f(e / qt, n / qt, r));
          if (0 === i) return Ht.every(Math.max(f(e, n, r), 1));
          const [u, c] = a[o / a[i - 1][2] < a[i][2] / o ? i - 1 : i];
          return u.every(c);
        }
        return [
          function (t, e, n) {
            const r = e < t;
            r && ([t, e] = [e, t]);
            const o = n && "function" == typeof n.range ? n : u(t, e, n),
              i = o ? o.range(t, +e + 1) : [];
            return r ? i.reverse() : i;
          },
          u,
        ];
      }
      const [Ee, Pe] = je(Se, we, he, re, te, Jt),
        [Ae, ke] = je(Oe, xe, ie, ee, Qt, Kt);
      function Me(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function Te(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function _e(t, e, n) {
        return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
      }
      var Ce,
        Ne,
        De,
        Ie = { "-": "", _: " ", 0: "0" },
        Be = /^\s*\d+/,
        Le = /^%/,
        Re = /[\\^$*+?|[\]().{}]/g;
      function Ue(t, e, n) {
        var r = t < 0 ? "-" : "",
          o = (r ? -t : t) + "",
          i = o.length;
        return r + (i < n ? new Array(n - i + 1).join(e) + o : o);
      }
      function ze(t) {
        return t.replace(Re, "\\$&");
      }
      function $e(t) {
        return new RegExp("^(?:" + t.map(ze).join("|") + ")", "i");
      }
      function Fe(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function Ze(t, e, n) {
        var r = Be.exec(e.slice(n, n + 1));
        return r ? ((t.w = +r[0]), n + r[0].length) : -1;
      }
      function We(t, e, n) {
        var r = Be.exec(e.slice(n, n + 1));
        return r ? ((t.u = +r[0]), n + r[0].length) : -1;
      }
      function qe(t, e, n) {
        var r = Be.exec(e.slice(n, n + 2));
        return r ? ((t.U = +r[0]), n + r[0].length) : -1;
      }
      function Ge(t, e, n) {
        var r = Be.exec(e.slice(n, n + 2));
        return r ? ((t.V = +r[0]), n + r[0].length) : -1;
      }
      function Xe(t, e, n) {
        var r = Be.exec(e.slice(n, n + 2));
        return r ? ((t.W = +r[0]), n + r[0].length) : -1;
      }
      function Ye(t, e, n) {
        var r = Be.exec(e.slice(n, n + 4));
        return r ? ((t.y = +r[0]), n + r[0].length) : -1;
      }
      function He(t, e, n) {
        var r = Be.exec(e.slice(n, n + 2));
        return r
          ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
          : -1;
      }
      function Ve(t, e, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return r
          ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
          : -1;
      }
      function Ke(t, e, n) {
        var r = Be.exec(e.slice(n, n + 1));
        return r ? ((t.q = 3 * r[0] - 3), n + r[0].length) : -1;
      }
      function Je(t, e, n) {
        var r = Be.exec(e.slice(n, n + 2));
        return r ? ((t.m = r[0] - 1), n + r[0].length) : -1;
      }
      function Qe(t, e, n) {
        var r = Be.exec(e.slice(n, n + 2));
        return r ? ((t.d = +r[0]), n + r[0].length) : -1;
      }
      function tn(t, e, n) {
        var r = Be.exec(e.slice(n, n + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), n + r[0].length) : -1;
      }
      function en(t, e, n) {
        var r = Be.exec(e.slice(n, n + 2));
        return r ? ((t.H = +r[0]), n + r[0].length) : -1;
      }
      function nn(t, e, n) {
        var r = Be.exec(e.slice(n, n + 2));
        return r ? ((t.M = +r[0]), n + r[0].length) : -1;
      }
      function rn(t, e, n) {
        var r = Be.exec(e.slice(n, n + 2));
        return r ? ((t.S = +r[0]), n + r[0].length) : -1;
      }
      function on(t, e, n) {
        var r = Be.exec(e.slice(n, n + 3));
        return r ? ((t.L = +r[0]), n + r[0].length) : -1;
      }
      function an(t, e, n) {
        var r = Be.exec(e.slice(n, n + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
      }
      function un(t, e, n) {
        var r = Le.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1;
      }
      function cn(t, e, n) {
        var r = Be.exec(e.slice(n));
        return r ? ((t.Q = +r[0]), n + r[0].length) : -1;
      }
      function ln(t, e, n) {
        var r = Be.exec(e.slice(n));
        return r ? ((t.s = +r[0]), n + r[0].length) : -1;
      }
      function sn(t, e) {
        return Ue(t.getDate(), e, 2);
      }
      function fn(t, e) {
        return Ue(t.getHours(), e, 2);
      }
      function pn(t, e) {
        return Ue(t.getHours() % 12 || 12, e, 2);
      }
      function hn(t, e) {
        return Ue(1 + ee.count(Oe(t), t), e, 3);
      }
      function dn(t, e) {
        return Ue(t.getMilliseconds(), e, 3);
      }
      function yn(t, e) {
        return dn(t, e) + "000";
      }
      function vn(t, e) {
        return Ue(t.getMonth() + 1, e, 2);
      }
      function mn(t, e) {
        return Ue(t.getMinutes(), e, 2);
      }
      function gn(t, e) {
        return Ue(t.getSeconds(), e, 2);
      }
      function bn(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function xn(t, e) {
        return Ue(ie.count(Oe(t) - 1, t), e, 2);
      }
      function wn(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? le(t) : le.ceil(t);
      }
      function On(t, e) {
        return (
          (t = wn(t)), Ue(le.count(Oe(t), t) + (4 === Oe(t).getDay()), e, 2)
        );
      }
      function Sn(t) {
        return t.getDay();
      }
      function jn(t, e) {
        return Ue(ae.count(Oe(t) - 1, t), e, 2);
      }
      function En(t, e) {
        return Ue(t.getFullYear() % 100, e, 2);
      }
      function Pn(t, e) {
        return Ue((t = wn(t)).getFullYear() % 100, e, 2);
      }
      function An(t, e) {
        return Ue(t.getFullYear() % 1e4, e, 4);
      }
      function kn(t, e) {
        var n = t.getDay();
        return Ue(
          (t = n >= 4 || 0 === n ? le(t) : le.ceil(t)).getFullYear() % 1e4,
          e,
          4,
        );
      }
      function Mn(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          Ue((e / 60) | 0, "0", 2) +
          Ue(e % 60, "0", 2)
        );
      }
      function Tn(t, e) {
        return Ue(t.getUTCDate(), e, 2);
      }
      function _n(t, e) {
        return Ue(t.getUTCHours(), e, 2);
      }
      function Cn(t, e) {
        return Ue(t.getUTCHours() % 12 || 12, e, 2);
      }
      function Nn(t, e) {
        return Ue(1 + ne.count(Se(t), t), e, 3);
      }
      function Dn(t, e) {
        return Ue(t.getUTCMilliseconds(), e, 3);
      }
      function In(t, e) {
        return Dn(t, e) + "000";
      }
      function Bn(t, e) {
        return Ue(t.getUTCMonth() + 1, e, 2);
      }
      function Ln(t, e) {
        return Ue(t.getUTCMinutes(), e, 2);
      }
      function Rn(t, e) {
        return Ue(t.getUTCSeconds(), e, 2);
      }
      function Un(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function zn(t, e) {
        return Ue(he.count(Se(t) - 1, t), e, 2);
      }
      function $n(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? me(t) : me.ceil(t);
      }
      function Fn(t, e) {
        return (
          (t = $n(t)), Ue(me.count(Se(t), t) + (4 === Se(t).getUTCDay()), e, 2)
        );
      }
      function Zn(t) {
        return t.getUTCDay();
      }
      function Wn(t, e) {
        return Ue(de.count(Se(t) - 1, t), e, 2);
      }
      function qn(t, e) {
        return Ue(t.getUTCFullYear() % 100, e, 2);
      }
      function Gn(t, e) {
        return Ue((t = $n(t)).getUTCFullYear() % 100, e, 2);
      }
      function Xn(t, e) {
        return Ue(t.getUTCFullYear() % 1e4, e, 4);
      }
      function Yn(t, e) {
        var n = t.getUTCDay();
        return Ue(
          (t = n >= 4 || 0 === n ? me(t) : me.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4,
        );
      }
      function Hn() {
        return "+0000";
      }
      function Vn() {
        return "%";
      }
      function Kn(t) {
        return +t;
      }
      function Jn(t) {
        return Math.floor(+t / 1e3);
      }
      function Qn(t) {
        return new Date(t);
      }
      function tr(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function er(t, e, n, r, o, i, a, u, c, l) {
        var s = U(),
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
                  : i(t) < t
                    ? v
                    : r(t) < t
                      ? o(t) < t
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
            return arguments.length ? p(Array.from(t, tr)) : p().map(Qn);
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
              t ? p(at(n, t)) : s
            );
          }),
          (s.copy = function () {
            return L(s, er(t, e, n, r, o, i, a, u, c, l));
          }),
          s
        );
      }
      function nr() {
        return $.o.apply(
          er(Ae, ke, Oe, xe, ie, ee, Qt, Kt, Vt, Ne).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function rr() {
        return $.o.apply(
          er(Ee, Pe, Se, we, he, ne, te, Jt, Vt, De).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function or() {
        var t,
          e,
          n,
          r,
          o,
          i = 0,
          a = 1,
          u = N,
          c = !1;
        function l(e) {
          return null == e || isNaN((e = +e))
            ? o
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
          (l.domain = function (o) {
            return arguments.length
              ? (([i, a] = o),
                (t = r((i = +i))),
                (e = r((a = +a))),
                (n = t === e ? 0 : 1 / (e - t)),
                l)
              : [i, a];
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((c = !!t), l) : c;
          }),
          (l.interpolator = function (t) {
            return arguments.length ? ((u = t), l) : u;
          }),
          (l.range = s(M)),
          (l.rangeRound = s(T)),
          (l.unknown = function (t) {
            return arguments.length ? ((o = t), l) : o;
          }),
          function (o) {
            return (
              (r = o),
              (t = o(i)),
              (e = o(a)),
              (n = t === e ? 0 : 1 / (e - t)),
              l
            );
          }
        );
      }
      function ir(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function ar() {
        var t = rt(or()(N));
        return (
          (t.copy = function () {
            return ir(t, ar());
          }),
          $.O.apply(t, arguments)
        );
      }
      function ur() {
        var t = ht(or()).domain([1, 10]);
        return (
          (t.copy = function () {
            return ir(t, ur()).base(t.base());
          }),
          $.O.apply(t, arguments)
        );
      }
      function cr() {
        var t = mt(or());
        return (
          (t.copy = function () {
            return ir(t, cr()).constant(t.constant());
          }),
          $.O.apply(t, arguments)
        );
      }
      function lr() {
        var t = St(or());
        return (
          (t.copy = function () {
            return ir(t, lr()).exponent(t.exponent());
          }),
          $.O.apply(t, arguments)
        );
      }
      function sr() {
        return lr.apply(null, arguments).exponent(0.5);
      }
      function fr() {
        var t = [],
          e = N;
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
            return Array.from({ length: e + 1 }, (n, r) => Dt(t, r / e));
          }),
          (n.copy = function () {
            return fr(e).domain(t);
          }),
          $.O.apply(n, arguments)
        );
      }
      function pr() {
        var t,
          e,
          n,
          r,
          o,
          i,
          a,
          u = 0,
          c = 0.5,
          l = 1,
          s = 1,
          f = N,
          p = !1;
        function h(t) {
          return isNaN((t = +t))
            ? a
            : ((t = 0.5 + ((t = +i(t)) - e) * (s * t < s * e ? r : o)),
              f(p ? Math.max(0, Math.min(1, t)) : t));
        }
        function d(t) {
          return function (e) {
            var n, r, o;
            return arguments.length
              ? (([n, r, o] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = M));
                  for (
                    var n = 0,
                      r = e.length - 1,
                      o = e[0],
                      i = new Array(r < 0 ? 0 : r);
                    n < r;

                  )
                    i[n] = t(o, (o = e[++n]));
                  return function (t) {
                    var e = Math.max(0, Math.min(r - 1, Math.floor((t *= r))));
                    return i[e](t - e);
                  };
                })(t, [n, r, o])),
                h)
              : [f(0), f(0.5), f(1)];
          };
        }
        return (
          (h.domain = function (a) {
            return arguments.length
              ? (([u, c, l] = a),
                (t = i((u = +u))),
                (e = i((c = +c))),
                (n = i((l = +l))),
                (r = t === e ? 0 : 0.5 / (e - t)),
                (o = e === n ? 0 : 0.5 / (n - e)),
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
          (h.range = d(M)),
          (h.rangeRound = d(T)),
          (h.unknown = function (t) {
            return arguments.length ? ((a = t), h) : a;
          }),
          function (a) {
            return (
              (i = a),
              (t = a(u)),
              (e = a(c)),
              (n = a(l)),
              (r = t === e ? 0 : 0.5 / (e - t)),
              (o = e === n ? 0 : 0.5 / (n - e)),
              (s = e < t ? -1 : 1),
              h
            );
          }
        );
      }
      function hr() {
        var t = rt(pr()(N));
        return (
          (t.copy = function () {
            return ir(t, hr());
          }),
          $.O.apply(t, arguments)
        );
      }
      function dr() {
        var t = ht(pr()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return ir(t, dr()).base(t.base());
          }),
          $.O.apply(t, arguments)
        );
      }
      function yr() {
        var t = mt(pr());
        return (
          (t.copy = function () {
            return ir(t, yr()).constant(t.constant());
          }),
          $.O.apply(t, arguments)
        );
      }
      function vr() {
        var t = St(pr());
        return (
          (t.copy = function () {
            return ir(t, vr()).exponent(t.exponent());
          }),
          $.O.apply(t, arguments)
        );
      }
      function mr() {
        return vr.apply(null, arguments).exponent(0.5);
      }
      function gr(t, e) {
        if ((o = t.length) > 1)
          for (var n, r, o, i = 1, a = t[e[0]], u = a.length; i < o; ++i)
            for (r = a, a = t[e[i]], n = 0; n < u; ++n)
              a[n][1] += a[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
      }
      !(function (t) {
        (Ce = (function (t) {
          var e = t.dateTime,
            n = t.date,
            r = t.time,
            o = t.periods,
            i = t.days,
            a = t.shortDays,
            u = t.months,
            c = t.shortMonths,
            l = $e(o),
            s = Fe(o),
            f = $e(i),
            p = Fe(i),
            h = $e(a),
            d = Fe(a),
            y = $e(u),
            v = Fe(u),
            m = $e(c),
            g = Fe(c),
            b = {
              a: function (t) {
                return a[t.getDay()];
              },
              A: function (t) {
                return i[t.getDay()];
              },
              b: function (t) {
                return c[t.getMonth()];
              },
              B: function (t) {
                return u[t.getMonth()];
              },
              c: null,
              d: sn,
              e: sn,
              f: yn,
              g: Pn,
              G: kn,
              H: fn,
              I: pn,
              j: hn,
              L: dn,
              m: vn,
              M: mn,
              p: function (t) {
                return o[+(t.getHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getMonth() / 3);
              },
              Q: Kn,
              s: Jn,
              S: gn,
              u: bn,
              U: xn,
              V: On,
              w: Sn,
              W: jn,
              x: null,
              X: null,
              y: En,
              Y: An,
              Z: Mn,
              "%": Vn,
            },
            x = {
              a: function (t) {
                return a[t.getUTCDay()];
              },
              A: function (t) {
                return i[t.getUTCDay()];
              },
              b: function (t) {
                return c[t.getUTCMonth()];
              },
              B: function (t) {
                return u[t.getUTCMonth()];
              },
              c: null,
              d: Tn,
              e: Tn,
              f: In,
              g: Gn,
              G: Yn,
              H: _n,
              I: Cn,
              j: Nn,
              L: Dn,
              m: Bn,
              M: Ln,
              p: function (t) {
                return o[+(t.getUTCHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getUTCMonth() / 3);
              },
              Q: Kn,
              s: Jn,
              S: Rn,
              u: Un,
              U: zn,
              V: Fn,
              w: Zn,
              W: Wn,
              x: null,
              X: null,
              y: qn,
              Y: Xn,
              Z: Hn,
              "%": Vn,
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
                return j(t, e, n, r);
              },
              d: Qe,
              e: Qe,
              f: an,
              g: He,
              G: Ye,
              H: en,
              I: en,
              j: tn,
              L: on,
              m: Je,
              M: nn,
              p: function (t, e, n) {
                var r = l.exec(e.slice(n));
                return r
                  ? ((t.p = s.get(r[0].toLowerCase())), n + r[0].length)
                  : -1;
              },
              q: Ke,
              Q: cn,
              s: ln,
              S: rn,
              u: We,
              U: qe,
              V: Ge,
              w: Ze,
              W: Xe,
              x: function (t, e, r) {
                return j(t, n, e, r);
              },
              X: function (t, e, n) {
                return j(t, r, e, n);
              },
              y: He,
              Y: Ye,
              Z: Ve,
              "%": un,
            };
          function O(t, e) {
            return function (n) {
              var r,
                o,
                i,
                a = [],
                u = -1,
                c = 0,
                l = t.length;
              for (n instanceof Date || (n = new Date(+n)); ++u < l; )
                37 === t.charCodeAt(u) &&
                  (a.push(t.slice(c, u)),
                  null != (o = Ie[(r = t.charAt(++u))])
                    ? (r = t.charAt(++u))
                    : (o = "e" === r ? " " : "0"),
                  (i = e[r]) && (r = i(n, o)),
                  a.push(r),
                  (c = u + 1));
              return a.push(t.slice(c, u)), a.join("");
            };
          }
          function S(t, e) {
            return function (n) {
              var r,
                o,
                i = _e(1900, void 0, 1);
              if (j(i, t, (n += ""), 0) != n.length) return null;
              if ("Q" in i) return new Date(i.Q);
              if ("s" in i) return new Date(1e3 * i.s + ("L" in i ? i.L : 0));
              if (
                (e && !("Z" in i) && (i.Z = 0),
                "p" in i && (i.H = (i.H % 12) + 12 * i.p),
                void 0 === i.m && (i.m = "q" in i ? i.q : 0),
                "V" in i)
              ) {
                if (i.V < 1 || i.V > 53) return null;
                "w" in i || (i.w = 1),
                  "Z" in i
                    ? ((o = (r = Te(_e(i.y, 0, 1))).getUTCDay()),
                      (r = o > 4 || 0 === o ? de.ceil(r) : de(r)),
                      (r = ne.offset(r, 7 * (i.V - 1))),
                      (i.y = r.getUTCFullYear()),
                      (i.m = r.getUTCMonth()),
                      (i.d = r.getUTCDate() + ((i.w + 6) % 7)))
                    : ((o = (r = Me(_e(i.y, 0, 1))).getDay()),
                      (r = o > 4 || 0 === o ? ae.ceil(r) : ae(r)),
                      (r = ee.offset(r, 7 * (i.V - 1))),
                      (i.y = r.getFullYear()),
                      (i.m = r.getMonth()),
                      (i.d = r.getDate() + ((i.w + 6) % 7)));
              } else
                ("W" in i || "U" in i) &&
                  ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0),
                  (o =
                    "Z" in i
                      ? Te(_e(i.y, 0, 1)).getUTCDay()
                      : Me(_e(i.y, 0, 1)).getDay()),
                  (i.m = 0),
                  (i.d =
                    "W" in i
                      ? ((i.w + 6) % 7) + 7 * i.W - ((o + 5) % 7)
                      : i.w + 7 * i.U - ((o + 6) % 7)));
              return "Z" in i
                ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), Te(i))
                : Me(i);
            };
          }
          function j(t, e, n, r) {
            for (var o, i, a = 0, u = e.length, c = n.length; a < u; ) {
              if (r >= c) return -1;
              if (37 === (o = e.charCodeAt(a++))) {
                if (
                  ((o = e.charAt(a++)),
                  !(i = w[o in Ie ? e.charAt(a++) : o]) || (r = i(t, n, r)) < 0)
                )
                  return -1;
              } else if (o != n.charCodeAt(r++)) return -1;
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
          (Ne = Ce.format),
          Ce.parse,
          (De = Ce.utcFormat),
          Ce.utcParse;
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
      var br = n(70479),
        xr = n(22015);
      function wr(t) {
        for (var e = t.length, n = new Array(e); --e >= 0; ) n[e] = e;
        return n;
      }
      function Or(t, e) {
        return t[e];
      }
      function Sr(t) {
        const e = [];
        return (e.key = t), e;
      }
      var jr = n(24149),
        Er = n.n(jr),
        Pr = n(65793),
        Ar = n.n(Pr),
        kr = n(38716),
        Mr = n.n(kr),
        Tr = n(8889),
        _r = n.n(Tr),
        Cr = n(30392),
        Nr = n.n(Cr),
        Dr = n(18310),
        Ir = n.n(Dr),
        Br = n(6392),
        Lr = n.n(Br),
        Rr = n(98176),
        Ur = n.n(Rr),
        zr = n(70758),
        $r = n.n(zr),
        Fr = n(49198),
        Zr = n.n(Fr),
        Wr = n(2045),
        qr = n.n(Wr),
        Gr = n(41721),
        Xr = n.n(Gr);
      function Yr(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Hr(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return Hr(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Hr(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Hr(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var Vr = function (t) {
          return t;
        },
        Kr = { "@@functional/placeholder": !0 },
        Jr = function (t) {
          return t === Kr;
        },
        Qr = function (t) {
          return function e() {
            return 0 === arguments.length ||
              (1 === arguments.length &&
                Jr(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t.apply(void 0, arguments);
          };
        },
        to = function t(e, n) {
          return 1 === e
            ? n
            : Qr(function () {
                for (
                  var r = arguments.length, o = new Array(r), i = 0;
                  i < r;
                  i++
                )
                  o[i] = arguments[i];
                var a = o.filter(function (t) {
                  return t !== Kr;
                }).length;
                return a >= e
                  ? n.apply(void 0, o)
                  : t(
                      e - a,
                      Qr(function () {
                        for (
                          var t = arguments.length, e = new Array(t), r = 0;
                          r < t;
                          r++
                        )
                          e[r] = arguments[r];
                        var i = o.map(function (t) {
                          return Jr(t) ? e.shift() : t;
                        });
                        return n.apply(void 0, Yr(i).concat(e));
                      }),
                    );
              });
        },
        eo = function (t) {
          return to(t.length, t);
        },
        no = function (t, e) {
          for (var n = [], r = t; r < e; ++r) n[r - t] = r;
          return n;
        },
        ro = eo(function (t, e) {
          return Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map(function (t) {
                  return e[t];
                })
                .map(t);
        }),
        oo = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          if (!e.length) return Vr;
          var r = e.reverse(),
            o = r[0],
            i = r.slice(1);
          return function () {
            return i.reduce(
              function (t, e) {
                return e(t);
              },
              o.apply(void 0, arguments),
            );
          };
        },
        io = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        ao = function (t) {
          var e = null,
            n = null;
          return function () {
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return e &&
              o.every(function (t, n) {
                return t === e[n];
              })
              ? n
              : ((e = o), (n = t.apply(void 0, o)));
          };
        };
      const uo = {
        rangeStep: function (t, e, n) {
          for (var r = new (Xr())(t), o = 0, i = []; r.lt(e) && o < 1e5; )
            i.push(r.toNumber()), (r = r.add(n)), o++;
          return i;
        },
        getDigitCount: function (t) {
          return 0 === t
            ? 1
            : Math.floor(new (Xr())(t).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: eo(function (t, e, n) {
          var r = +t;
          return r + n * (+e - r);
        }),
        uninterpolateNumber: eo(function (t, e, n) {
          var r = e - +t;
          return (n - t) / (r = r || 1 / 0);
        }),
        uninterpolateTruncation: eo(function (t, e, n) {
          var r = e - +t;
          return (r = r || 1 / 0), Math.max(0, Math.min(1, (n - t) / r));
        }),
      };
      function co(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return fo(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          so(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function lo(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, u = t[Symbol.iterator]();
                !(r = (a = u.next()).done) &&
                (n.push(a.value), !e || n.length !== e);
                r = !0
              );
            } catch (t) {
              (o = !0), (i = t);
            } finally {
              try {
                r || null == u.return || u.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(t, e) ||
          so(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function so(t, e) {
        if (t) {
          if ("string" == typeof t) return fo(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? fo(t, e)
                : void 0
          );
        }
      }
      function fo(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function po(t) {
        var e = lo(t, 2),
          n = e[0],
          r = e[1],
          o = n,
          i = r;
        return n > r && ((o = r), (i = n)), [o, i];
      }
      function ho(t, e, n) {
        if (t.lte(0)) return new (Xr())(0);
        var r = uo.getDigitCount(t.toNumber()),
          o = new (Xr())(10).pow(r),
          i = t.div(o),
          a = 1 !== r ? 0.05 : 0.1,
          u = new (Xr())(Math.ceil(i.div(a).toNumber())).add(n).mul(a).mul(o);
        return e ? u : new (Xr())(Math.ceil(u));
      }
      function yo(t, e, n) {
        var r = 1,
          o = new (Xr())(t);
        if (!o.isint() && n) {
          var i = Math.abs(t);
          i < 1
            ? ((r = new (Xr())(10).pow(uo.getDigitCount(t) - 1)),
              (o = new (Xr())(Math.floor(o.div(r).toNumber())).mul(r)))
            : i > 1 && (o = new (Xr())(Math.floor(t)));
        } else
          0 === t
            ? (o = new (Xr())(Math.floor((e - 1) / 2)))
            : n || (o = new (Xr())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return oo(
          ro(function (t) {
            return o.add(new (Xr())(t - a).mul(r)).toNumber();
          }),
          no,
        )(0, e);
      }
      function vo(t, e, n, r) {
        var o =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((e - t) / (n - 1)))
          return {
            step: new (Xr())(0),
            tickMin: new (Xr())(0),
            tickMax: new (Xr())(0),
          };
        var i,
          a = ho(new (Xr())(e).sub(t).div(n - 1), r, o);
        i =
          t <= 0 && e >= 0
            ? new (Xr())(0)
            : (i = new (Xr())(t).add(e).div(2)).sub(new (Xr())(i).mod(a));
        var u = Math.ceil(i.sub(t).div(a).toNumber()),
          c = Math.ceil(new (Xr())(e).sub(i).div(a).toNumber()),
          l = u + c + 1;
        return l > n
          ? vo(t, e, n, r, o + 1)
          : (l < n &&
              ((c = e > 0 ? c + (n - l) : c), (u = e > 0 ? u : u + (n - l))),
            {
              step: a,
              tickMin: i.sub(new (Xr())(u).mul(a)),
              tickMax: i.add(new (Xr())(c).mul(a)),
            });
      }
      var mo = ao(function (t) {
          var e = lo(t, 2),
            n = e[0],
            r = e[1],
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 6,
            i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = Math.max(o, 2),
            u = lo(po([n, r]), 2),
            c = u[0],
            l = u[1];
          if (c === -1 / 0 || l === 1 / 0) {
            var s =
              l === 1 / 0
                ? [c].concat(
                    co(
                      no(0, o - 1).map(function () {
                        return 1 / 0;
                      }),
                    ),
                  )
                : [].concat(
                    co(
                      no(0, o - 1).map(function () {
                        return -1 / 0;
                      }),
                    ),
                    [l],
                  );
            return n > r ? io(s) : s;
          }
          if (c === l) return yo(c, o, i);
          var f = vo(c, l, a, i),
            p = f.step,
            h = f.tickMin,
            d = f.tickMax,
            y = uo.rangeStep(h, d.add(new (Xr())(0.1).mul(p)), p);
          return n > r ? io(y) : y;
        }),
        go =
          (ao(function (t) {
            var e = lo(t, 2),
              n = e[0],
              r = e[1],
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 6,
              i =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Math.max(o, 2),
              u = lo(po([n, r]), 2),
              c = u[0],
              l = u[1];
            if (c === -1 / 0 || l === 1 / 0) return [n, r];
            if (c === l) return yo(c, o, i);
            var s = ho(new (Xr())(l).sub(c).div(a - 1), i, 0),
              f = oo(
                ro(function (t) {
                  return new (Xr())(c).add(new (Xr())(t).mul(s)).toNumber();
                }),
                no,
              )(0, a).filter(function (t) {
                return t >= c && t <= l;
              });
            return n > r ? io(f) : f;
          }),
          ao(function (t, e) {
            var n = lo(t, 2),
              r = n[0],
              o = n[1],
              i =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = lo(po([r, o]), 2),
              u = a[0],
              c = a[1];
            if (u === -1 / 0 || c === 1 / 0) return [r, o];
            if (u === c) return [u];
            var l = Math.max(e, 2),
              s = ho(new (Xr())(c).sub(u).div(l - 1), i, 0),
              f = [].concat(
                co(
                  uo.rangeStep(
                    new (Xr())(u),
                    new (Xr())(c).sub(new (Xr())(0.99).mul(s)),
                    s,
                  ),
                ),
                [c],
              );
            return r > o ? io(f) : f;
          })),
        bo = n(85458),
        xo = n(76325),
        wo = n(94797),
        Oo = n(52255);
      function So(t) {
        return (
          (So =
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
          So(t)
        );
      }
      function jo(t, e) {
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
      function Eo(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? jo(Object(n), !0).forEach(function (e) {
                Po(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : jo(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Po(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== So(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== So(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === So(e) ? e : String(e);
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
      function Ao(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ko(t);
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
            if ("string" == typeof t) return ko(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ko(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ko(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Mo(t, e, n) {
        return Mr()(t) || Mr()(e)
          ? n
          : (0, xo.P2)(e)
            ? Ir()(t, e, n)
            : _r()(e)
              ? e(t)
              : n;
      }
      function To(t, e, n, r) {
        var o = Lr()(t, function (t) {
          return Mo(t, e);
        });
        if ("number" === n) {
          var i = o.filter(function (t) {
            return (0, xo.hj)(t) || parseFloat(t);
          });
          return i.length ? [Ar()(i), Er()(i)] : [1 / 0, -1 / 0];
        }
        return (
          r
            ? o.filter(function (t) {
                return !Mr()(t);
              })
            : o
        ).map(function (t) {
          return (0, xo.P2)(t) || t instanceof Date ? t : "";
        });
      }
      var _o = function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            r = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 ? arguments[3] : void 0,
            i = -1,
            a =
              null !== (e = null == n ? void 0 : n.length) && void 0 !== e
                ? e
                : 0;
          if (a <= 1) return 0;
          if (
            o &&
            "angleAxis" === o.axisType &&
            Math.abs(Math.abs(o.range[1] - o.range[0]) - 360) <= 1e-6
          )
            for (var u = o.range, c = 0; c < a; c++) {
              var l = c > 0 ? r[c - 1].coordinate : r[a - 1].coordinate,
                s = r[c].coordinate,
                f = c >= a - 1 ? r[0].coordinate : r[c + 1].coordinate,
                p = void 0;
              if ((0, xo.uY)(s - l) !== (0, xo.uY)(f - s)) {
                var h = [];
                if ((0, xo.uY)(f - s) === (0, xo.uY)(u[1] - u[0])) {
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
                  i = r[c].index;
                  break;
                }
              } else {
                var m = Math.min(l, f),
                  g = Math.max(l, f);
                if (t > (m + s) / 2 && t <= (g + s) / 2) {
                  i = r[c].index;
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
                i = n[b].index;
                break;
              }
          return i;
        },
        Co = function (t) {
          var e,
            n = t.type.displayName,
            r = t.props,
            o = r.stroke,
            i = r.fill;
          switch (n) {
            case "Line":
              e = o;
              break;
            case "Area":
            case "Radar":
              e = o && "none" !== o ? o : i;
              break;
            default:
              e = i;
          }
          return e;
        },
        No = function (t) {
          var e = t.barSize,
            n = t.stackGroups,
            r = void 0 === n ? {} : n;
          if (!r) return {};
          for (var o = {}, i = Object.keys(r), a = 0, u = i.length; a < u; a++)
            for (
              var c = r[i[a]].stackGroups,
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
                  return (0, wo.Gf)(t.type).indexOf("Bar") >= 0;
                });
              if (y && y.length) {
                var v = y[0].props.barSize,
                  m = y[0].props[d];
                o[m] || (o[m] = []),
                  o[m].push({
                    item: y[0],
                    stackList: y.slice(1),
                    barSize: Mr()(v) ? e : v,
                  });
              }
            }
          return o;
        },
        Do = function (t) {
          var e = t.barGap,
            n = t.barCategoryGap,
            r = t.bandSize,
            o = t.sizeList,
            i = void 0 === o ? [] : o,
            a = t.maxBarSize,
            u = i.length;
          if (u < 1) return null;
          var c,
            l = (0, xo.h1)(e, r, 0, !0),
            s = [];
          if (i[0].barSize === +i[0].barSize) {
            var f = !1,
              p = r / u,
              h = i.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (h += (u - 1) * l) >= r && ((h -= (u - 1) * l), (l = 0)),
              h >= r && p > 0 && ((f = !0), (h = u * (p *= 0.9)));
            var d = { offset: (((r - h) / 2) >> 0) - l, size: 0 };
            c = i.reduce(function (t, e) {
              var n = {
                  item: e.item,
                  position: {
                    offset: d.offset + d.size + l,
                    size: f ? p : e.barSize,
                  },
                },
                r = [].concat(Ao(t), [n]);
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
            var y = (0, xo.h1)(n, r, 0, !0);
            r - 2 * y - (u - 1) * l <= 0 && (l = 0);
            var v = (r - 2 * y - (u - 1) * l) / u;
            v > 1 && (v >>= 0);
            var m = a === +a ? Math.min(v, a) : v;
            c = i.reduce(function (t, e, n) {
              var r = [].concat(Ao(t), [
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
        Io = function (t, e, n, r) {
          var o = n.children,
            i = n.width,
            a = n.margin,
            u = i - (a.left || 0) - (a.right || 0),
            c = (0, Oo.z)({ children: o, legendWidth: u });
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
              (0, xo.hj)(t[p])
            )
              return Eo(Eo({}, t), {}, Po({}, p, t[p] + (s || 0)));
            if (
              ("horizontal" === d || ("vertical" === d && "center" === p)) &&
              "middle" !== h &&
              (0, xo.hj)(t[h])
            )
              return Eo(Eo({}, t), {}, Po({}, h, t[h] + (f || 0)));
          }
          return t;
        },
        Bo = function (t, e, n, r, o) {
          var i = e.props.children,
            a = (0, wo.NN)(i, bo.W).filter(function (t) {
              return (function (t, e, n) {
                return (
                  !!Mr()(e) ||
                  ("horizontal" === t
                    ? "yAxis" === e
                    : "vertical" === t || "x" === n
                      ? "xAxis" === e
                      : "y" !== n || "yAxis" === e)
                );
              })(r, o, t.props.direction);
            });
          if (a && a.length) {
            var u = a.map(function (t) {
              return t.props.dataKey;
            });
            return t.reduce(
              function (t, e) {
                var r = Mo(e, n, 0),
                  o = Array.isArray(r) ? [Ar()(r), Er()(r)] : [r, r],
                  i = u.reduce(
                    function (t, n) {
                      var r = Mo(e, n, 0),
                        i = o[0] - Math.abs(Array.isArray(r) ? r[0] : r),
                        a = o[1] + Math.abs(Array.isArray(r) ? r[1] : r);
                      return [Math.min(i, t[0]), Math.max(a, t[1])];
                    },
                    [1 / 0, -1 / 0],
                  );
                return [Math.min(i[0], t[0]), Math.max(i[1], t[1])];
              },
              [1 / 0, -1 / 0],
            );
          }
          return null;
        },
        Lo = function (t, e, n, r, o) {
          var i = e
            .map(function (e) {
              return Bo(t, e, n, o, r);
            })
            .filter(function (t) {
              return !Mr()(t);
            });
          return i && i.length
            ? i.reduce(
                function (t, e) {
                  return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                },
                [1 / 0, -1 / 0],
              )
            : null;
        },
        Ro = function (t, e, n, r, o) {
          var i = e.map(function (e) {
            var i = e.props.dataKey;
            return ("number" === n && i && Bo(t, e, i, r)) || To(t, i, n, o);
          });
          if ("number" === n)
            return i.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0],
            );
          var a = {};
          return i.reduce(function (t, e) {
            for (var n = 0, r = e.length; n < r; n++)
              a[e[n]] || ((a[e[n]] = !0), t.push(e[n]));
            return t;
          }, []);
        },
        Uo = function (t, e) {
          return (
            ("horizontal" === t && "xAxis" === e) ||
            ("vertical" === t && "yAxis" === e) ||
            ("centric" === t && "angleAxis" === e) ||
            ("radial" === t && "radiusAxis" === e)
          );
        },
        zo = function (t, e, n, r) {
          if (r)
            return t.map(function (t) {
              return t.coordinate;
            });
          var o,
            i,
            a = t.map(function (t) {
              return (
                t.coordinate === e && (o = !0),
                t.coordinate === n && (i = !0),
                t.coordinate
              );
            });
          return o || a.push(e), i || a.push(n), a;
        },
        $o = function (t, e, n) {
          if (!t) return null;
          var r = t.scale,
            o = t.duplicateDomain,
            i = t.type,
            a = t.range,
            u = "scaleBand" === t.realScaleType ? r.bandwidth() / 2 : 2,
            c =
              (e || n) && "category" === i && r.bandwidth
                ? r.bandwidth() / u
                : 0;
          return (
            (c =
              "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2
                ? 2 * (0, xo.uY)(a[0] - a[1]) * c
                : c),
            e && (t.ticks || t.niceTicks)
              ? (t.ticks || t.niceTicks)
                  .map(function (t) {
                    var e = o ? o.indexOf(t) : t;
                    return { coordinate: r(e) + c, value: t, offset: c };
                  })
                  .filter(function (t) {
                    return !Ur()(t.coordinate);
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
                        value: o ? o[t] : t,
                        index: e,
                        offset: c,
                      };
                    })
          );
        },
        Fo = new WeakMap(),
        Zo = function (t, e) {
          if ("function" != typeof e) return t;
          Fo.has(t) || Fo.set(t, new WeakMap());
          var n = Fo.get(t);
          if (n.has(e)) return n.get(e);
          var r = function () {
            t.apply(void 0, arguments), e.apply(void 0, arguments);
          };
          return n.set(e, r), r;
        },
        Wo = function (t, e, n) {
          var i = t.scale,
            a = t.type,
            u = t.layout,
            c = t.axisType;
          if ("auto" === i)
            return "radial" === u && "radiusAxis" === c
              ? { scale: o.Z(), realScaleType: "band" }
              : "radial" === u && "angleAxis" === c
                ? { scale: ot(), realScaleType: "linear" }
                : "category" === a &&
                    e &&
                    (e.indexOf("LineChart") >= 0 ||
                      e.indexOf("AreaChart") >= 0 ||
                      (e.indexOf("ComposedChart") >= 0 && !n))
                  ? { scale: o.x(), realScaleType: "point" }
                  : "category" === a
                    ? { scale: o.Z(), realScaleType: "band" }
                    : { scale: ot(), realScaleType: "linear" };
          if (Nr()(i)) {
            var l = "scale".concat($r()(i));
            return {
              scale: (r[l] || o.x)(),
              realScaleType: r[l] ? l : "point",
            };
          }
          return _r()(i)
            ? { scale: i }
            : { scale: o.x(), realScaleType: "point" };
        },
        qo = 1e-4,
        Go = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var n = e.length,
              r = t.range(),
              o = Math.min(r[0], r[1]) - qo,
              i = Math.max(r[0], r[1]) + qo,
              a = t(e[0]),
              u = t(e[n - 1]);
            (a < o || a > i || u < o || u > i) && t.domain([e[0], e[n - 1]]);
          }
        },
        Xo = function (t, e) {
          if (!t) return null;
          for (var n = 0, r = t.length; n < r; n++)
            if (t[n].item === e) return t[n].position;
          return null;
        },
        Yo = function (t, e) {
          if (!e || 2 !== e.length || !(0, xo.hj)(e[0]) || !(0, xo.hj)(e[1]))
            return t;
          var n = Math.min(e[0], e[1]),
            r = Math.max(e[0], e[1]),
            o = [t[0], t[1]];
          return (
            (!(0, xo.hj)(t[0]) || t[0] < n) && (o[0] = n),
            (!(0, xo.hj)(t[1]) || t[1] > r) && (o[1] = r),
            o[0] > r && (o[0] = r),
            o[1] < n && (o[1] = n),
            o
          );
        },
        Ho = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var o = 0, i = 0, a = 0; a < e; ++a) {
                  var u = Ur()(t[a][n][1]) ? t[a][n][0] : t[a][n][1];
                  u >= 0
                    ? ((t[a][n][0] = o), (t[a][n][1] = o + u), (o = t[a][n][1]))
                    : ((t[a][n][0] = i),
                      (t[a][n][1] = i + u),
                      (i = t[a][n][1]));
                }
          },
          expand: function (t, e) {
            if ((r = t.length) > 0) {
              for (var n, r, o, i = 0, a = t[0].length; i < a; ++i) {
                for (o = n = 0; n < r; ++n) o += t[n][i][1] || 0;
                if (o) for (n = 0; n < r; ++n) t[n][i][1] /= o;
              }
              gr(t, e);
            }
          },
          none: gr,
          silhouette: function (t, e) {
            if ((n = t.length) > 0) {
              for (var n, r = 0, o = t[e[0]], i = o.length; r < i; ++r) {
                for (var a = 0, u = 0; a < n; ++a) u += t[a][r][1] || 0;
                o[r][1] += o[r][0] = -u / 2;
              }
              gr(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((o = t.length) > 0 && (r = (n = t[e[0]]).length) > 0) {
              for (var n, r, o, i = 0, a = 1; a < r; ++a) {
                for (var u = 0, c = 0, l = 0; u < o; ++u) {
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
                (n[a - 1][1] += n[a - 1][0] = i), c && (i -= l / c);
              }
              (n[a - 1][1] += n[a - 1][0] = i), gr(t, e);
            }
          },
          positive: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var n = 0, r = t[0].length; n < r; ++n)
                for (var o = 0, i = 0; i < e; ++i) {
                  var a = Ur()(t[i][n][1]) ? t[i][n][0] : t[i][n][1];
                  a >= 0
                    ? ((t[i][n][0] = o), (t[i][n][1] = o + a), (o = t[i][n][1]))
                    : ((t[i][n][0] = 0), (t[i][n][1] = 0));
                }
          },
        },
        Vo = function (t, e, n) {
          var r = e.map(function (t) {
              return t.props.dataKey;
            }),
            o = Ho[n],
            i = (function () {
              var t = (0, xr.Z)([]),
                e = wr,
                n = gr,
                r = Or;
              function o(o) {
                var i,
                  a,
                  u = Array.from(t.apply(this, arguments), Sr),
                  c = u.length,
                  l = -1;
                for (const t of o)
                  for (i = 0, ++l; i < c; ++i)
                    (u[i][l] = [0, +r(t, u[i].key, l, o)]).data = t;
                for (i = 0, a = (0, br.Z)(e(u)); i < c; ++i) u[a[i]].index = i;
                return n(u, a), u;
              }
              return (
                (o.keys = function (e) {
                  return arguments.length
                    ? ((t =
                        "function" == typeof e ? e : (0, xr.Z)(Array.from(e))),
                      o)
                    : t;
                }),
                (o.value = function (t) {
                  return arguments.length
                    ? ((r = "function" == typeof t ? t : (0, xr.Z)(+t)), o)
                    : r;
                }),
                (o.order = function (t) {
                  return arguments.length
                    ? ((e =
                        null == t
                          ? wr
                          : "function" == typeof t
                            ? t
                            : (0, xr.Z)(Array.from(t))),
                      o)
                    : e;
                }),
                (o.offset = function (t) {
                  return arguments.length ? ((n = null == t ? gr : t), o) : n;
                }),
                o
              );
            })()
              .keys(r)
              .value(function (t, e) {
                return +Mo(t, e, 0);
              })
              .order(wr)
              .offset(o);
          return i(t);
        },
        Ko = function (t, e, n, r, o, i) {
          if (!t) return null;
          var a = (i ? e.reverse() : e).reduce(function (t, e) {
            var o = e.props,
              i = o.stackId;
            if (o.hide) return t;
            var a = e.props[n],
              u = t[a] || { hasStack: !1, stackGroups: {} };
            if ((0, xo.P2)(i)) {
              var c = u.stackGroups[i] || {
                numericAxisId: n,
                cateAxisId: r,
                items: [],
              };
              c.items.push(e), (u.hasStack = !0), (u.stackGroups[i] = c);
            } else
              u.stackGroups[(0, xo.EL)("_stackId_")] = {
                numericAxisId: n,
                cateAxisId: r,
                items: [e],
              };
            return Eo(Eo({}, t), {}, Po({}, a, u));
          }, {});
          return Object.keys(a).reduce(function (e, i) {
            var u = a[i];
            if (u.hasStack) {
              u.stackGroups = Object.keys(u.stackGroups).reduce(function (
                e,
                i,
              ) {
                var a = u.stackGroups[i];
                return Eo(
                  Eo({}, e),
                  {},
                  Po({}, i, {
                    numericAxisId: n,
                    cateAxisId: r,
                    items: a.items,
                    stackedData: Vo(t, a.items, o),
                  }),
                );
              }, {});
            }
            return Eo(Eo({}, e), {}, Po({}, i, u));
          }, {});
        },
        Jo = function (t, e) {
          var n = e.realScaleType,
            r = e.type,
            o = e.tickCount,
            i = e.originalDomain,
            a = e.allowDecimals,
            u = n || e.scale;
          if ("auto" !== u && "linear" !== u) return null;
          if (
            o &&
            "number" === r &&
            i &&
            ("auto" === i[0] || "auto" === i[1])
          ) {
            var c = t.domain();
            if (!c.length) return null;
            var l = mo(c, o, a);
            return t.domain([Ar()(l), Er()(l)]), { niceTicks: l };
          }
          if (o && "number" === r) {
            var s = t.domain();
            return { niceTicks: go(s, o, a) };
          }
          return null;
        },
        Qo = function (t) {
          var e = t.axis,
            n = t.ticks,
            r = t.bandSize,
            o = t.entry,
            i = t.index,
            a = t.dataKey;
          if ("category" === e.type) {
            if (
              !e.allowDuplicatedCategory &&
              e.dataKey &&
              !Mr()(o[e.dataKey])
            ) {
              var u = (0, xo.Ap)(n, "value", o[e.dataKey]);
              if (u) return u.coordinate + r / 2;
            }
            return n[i] ? n[i].coordinate + r / 2 : null;
          }
          var c = Mo(o, Mr()(a) ? e.dataKey : a);
          return Mr()(c) ? null : e.scale(c);
        },
        ti = function (t) {
          var e = t.axis,
            n = t.ticks,
            r = t.offset,
            o = t.bandSize,
            i = t.entry,
            a = t.index;
          if ("category" === e.type) return n[a] ? n[a].coordinate + r : null;
          var u = Mo(i, e.dataKey, e.domain[a]);
          return Mr()(u) ? null : e.scale(u) - o / 2 + r;
        },
        ei = function (t) {
          var e = t.numericAxis,
            n = e.scale.domain();
          if ("number" === e.type) {
            var r = Math.min(n[0], n[1]),
              o = Math.max(n[0], n[1]);
            return r <= 0 && o >= 0 ? 0 : o < 0 ? o : r;
          }
          return n[0];
        },
        ni = function (t, e) {
          var n = t.props.stackId;
          if ((0, xo.P2)(n)) {
            var r = e[n];
            if (r) {
              var o = r.items.indexOf(t);
              return o >= 0 ? r.stackedData[o] : null;
            }
          }
          return null;
        },
        ri = function (t, e, n) {
          return Object.keys(t)
            .reduce(
              function (r, o) {
                var i = t[o].stackedData.reduce(
                  function (t, r) {
                    var o = r.slice(e, n + 1).reduce(
                      function (t, e) {
                        return [
                          Ar()(e.concat([t[0]]).filter(xo.hj)),
                          Er()(e.concat([t[1]]).filter(xo.hj)),
                        ];
                      },
                      [1 / 0, -1 / 0],
                    );
                    return [Math.min(t[0], o[0]), Math.max(t[1], o[1])];
                  },
                  [1 / 0, -1 / 0],
                );
                return [Math.min(i[0], r[0]), Math.max(i[1], r[1])];
              },
              [1 / 0, -1 / 0],
            )
            .map(function (t) {
              return t === 1 / 0 || t === -1 / 0 ? 0 : t;
            });
        },
        oi = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        ii = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        ai = function (t, e, n) {
          if (_r()(t)) return t(e, n);
          if (!Array.isArray(t)) return e;
          var r = [];
          if ((0, xo.hj)(t[0])) r[0] = n ? t[0] : Math.min(t[0], e[0]);
          else if (oi.test(t[0])) {
            var o = +oi.exec(t[0])[1];
            r[0] = e[0] - o;
          } else _r()(t[0]) ? (r[0] = t[0](e[0])) : (r[0] = e[0]);
          if ((0, xo.hj)(t[1])) r[1] = n ? t[1] : Math.max(t[1], e[1]);
          else if (ii.test(t[1])) {
            var i = +ii.exec(t[1])[1];
            r[1] = e[1] + i;
          } else _r()(t[1]) ? (r[1] = t[1](e[1])) : (r[1] = e[1]);
          return r;
        },
        ui = function (t, e, n) {
          if (t && t.scale && t.scale.bandwidth) {
            var r = t.scale.bandwidth();
            if (!n || r > 0) return r;
          }
          if (t && e && e.length >= 2) {
            for (
              var o = qr()(e, function (t) {
                  return t.coordinate;
                }),
                i = 1 / 0,
                a = 1,
                u = o.length;
              a < u;
              a++
            ) {
              var c = o[a],
                l = o[a - 1];
              i = Math.min((c.coordinate || 0) - (l.coordinate || 0), i);
            }
            return i === 1 / 0 ? 0 : i;
          }
          return n ? void 0 : 0;
        },
        ci = function (t, e, n) {
          return t && t.length
            ? Zr()(t, Ir()(n, "type.defaultProps.domain"))
              ? e
              : t
            : e;
        },
        li = function (t, e) {
          var n = t.props,
            r = n.dataKey,
            o = n.name,
            i = n.unit,
            a = n.formatter,
            u = n.tooltipType,
            c = n.chartType;
          return Eo(
            Eo({}, (0, wo.L6)(t)),
            {},
            {
              dataKey: r,
              unit: i,
              formatter: a,
              name: o || r,
              color: Co(t),
              value: Mo(e, r),
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
      function o(t) {
        return (
          (o =
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
          o(t)
        );
      }
      function i(t, e) {
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
            ? i(Object(n), !0).forEach(function (e) {
                u(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (e) {
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
              if ("object" !== o(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === o(e) ? e : String(e);
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
            o =
              ((n = a({}, e)),
              Object.keys(n).forEach(function (t) {
                n[t] || delete n[t];
              }),
              n),
            i = JSON.stringify({ text: t, copyStyle: o });
          if (c.widthCache[i]) return c.widthCache[i];
          try {
            var u = document.getElementById(s);
            u ||
              ((u = document.createElement("span")).setAttribute("id", s),
              u.setAttribute("aria-hidden", "true"),
              document.body.appendChild(u));
            var f = a(a({}, l), o);
            Object.assign(u.style, f), (u.textContent = "".concat(t));
            var p = u.getBoundingClientRect(),
              h = { width: p.width, height: p.height };
            return (
              (c.widthCache[i] = h),
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
        o = n.n(r),
        i = n(98176),
        a = n.n(i),
        u = n(18310),
        c = n.n(u),
        l = n(554),
        s = n.n(l),
        f = function (t) {
          return 0 === t ? 0 : t > 0 ? 1 : -1;
        },
        p = function (t) {
          return o()(t) && t.indexOf("%") === t.length - 1;
        },
        h = function (t) {
          return s()(t) && !a()(t);
        },
        d = function (t) {
          return h(t) || o()(t);
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
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!h(t) && !o()(t)) return r;
          if (p(t)) {
            var u = t.indexOf("%");
            n = (e * parseFloat(t.slice(0, u))) / 100;
          } else n = +t;
          return a()(n) && (n = r), i && n > e && (n = e), n;
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
            o = 0,
            i = 0,
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
            (o += c * l),
            (i += c * c),
            (a = Math.min(a, c)),
            (u = Math.max(u, c));
        var f = e * i != n * n ? (e * o - n * r) / (e * i - n * n) : 0;
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
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o];
      };
    },
    53460: (t, e, n) => {
      "use strict";
      n.d(e, { Wk: () => u, op: () => l, z3: () => p });
      n(38716);
      function r(t) {
        return (
          (r =
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
          r(t)
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
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                a(t, e, n[e]);
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
      function a(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== r(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(t, e || "default");
                if ("object" !== r(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === r(e) ? e : String(e);
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
      var u = Math.PI / 180,
        c = function (t) {
          return (180 * t) / Math.PI;
        },
        l = function (t, e, n, r) {
          return { x: t + Math.cos(-u * r) * n, y: e + Math.sin(-u * r) * n };
        },
        s = function (t, e) {
          var n,
            r,
            o,
            i,
            a,
            u,
            l = t.x,
            s = t.y,
            f = e.cx,
            p = e.cy,
            h =
              ((r = { x: f, y: p }),
              (o = (n = { x: l, y: s }).x),
              (i = n.y),
              (a = r.x),
              (u = r.y),
              Math.sqrt(Math.pow(o - a, 2) + Math.pow(i - u, 2)));
          if (h <= 0) return { radius: h };
          var d = (l - f) / h,
            y = Math.acos(d);
          return (
            s > p && (y = 2 * Math.PI - y),
            { radius: h, angle: c(y), angleInRadian: y }
          );
        },
        f = function (t, e) {
          var n = e.startAngle,
            r = e.endAngle,
            o = Math.floor(n / 360),
            i = Math.floor(r / 360);
          return t + 360 * Math.min(o, i);
        },
        p = function (t, e) {
          var n = t.x,
            r = t.y,
            o = s({ x: n, y: r }, e),
            a = o.radius,
            u = o.angle,
            c = e.innerRadius,
            l = e.outerRadius;
          if (a < c || a > l) return !1;
          if (0 === a) return !0;
          var p,
            h = (function (t) {
              var e = t.startAngle,
                n = t.endAngle,
                r = Math.floor(e / 360),
                o = Math.floor(n / 360),
                i = Math.min(r, o);
              return { startAngle: e - 360 * i, endAngle: n - 360 * i };
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
          return p ? i(i({}, e), {}, { radius: a, angle: f(v, e) }) : null;
        };
    },
    94797: (t, e, n) => {
      "use strict";
      n.d(e, {
        $R: () => R,
        $k: () => C,
        Bh: () => L,
        Gf: () => S,
        L6: () => N,
        NN: () => A,
        TT: () => M,
        eu: () => B,
        rL: () => D,
        sP: () => k,
      });
      var r = n(18310),
        o = n.n(r),
        i = n(38716),
        a = n.n(i),
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
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
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
        S = function (t) {
          return "string" == typeof t
            ? t
            : t
              ? t.displayName || t.name || "Component"
              : "";
        },
        j = null,
        E = null,
        P = function t(e) {
          if (e === j && Array.isArray(E)) return E;
          var n = [];
          return (
            h.Children.forEach(e, function (e) {
              a()(e) ||
                ((0, d.isFragment)(e)
                  ? (n = n.concat(t(e.props.children)))
                  : n.push(e));
            }),
            (E = n),
            (j = e),
            n
          );
        };
      function A(t, e) {
        var n = [],
          r = [];
        return (
          (r = Array.isArray(e)
            ? e.map(function (t) {
                return S(t);
              })
            : [S(e)]),
          P(t).forEach(function (t) {
            var e = o()(t, "type.displayName") || o()(t, "type.name");
            -1 !== r.indexOf(e) && n.push(t);
          }),
          n
        );
      }
      function k(t, e) {
        var n = A(t, e);
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
          var o = {};
          return (
            Object.keys(r).forEach(function (t) {
              var i;
              (function (t, e, n, r) {
                var o,
                  i =
                    null !==
                      (o =
                        null === m.ry || void 0 === m.ry ? void 0 : m.ry[r]) &&
                    void 0 !== o
                      ? o
                      : [];
                return (
                  (!s()(t) && ((r && i.includes(e)) || m.Yh.includes(e))) ||
                  (n && m.nv.includes(e))
                );
              })(null === (i = r) || void 0 === i ? void 0 : i[t], t, e, n) &&
                (o[t] = r[t]);
            }),
            o
          );
        },
        D = function t(e, n) {
          if (e === n) return !0;
          var r = h.Children.count(e);
          if (r !== h.Children.count(n)) return !1;
          if (0 === r) return !0;
          if (1 === r)
            return I(Array.isArray(e) ? e[0] : e, Array.isArray(n) ? n[0] : n);
          for (var o = 0; o < r; o++) {
            var i = e[o],
              a = n[o];
            if (Array.isArray(i) || Array.isArray(a)) {
              if (!t(i, a)) return !1;
            } else if (!I(i, a)) return !1;
          }
          return !0;
        },
        I = function (t, e) {
          if (a()(t) && a()(e)) return !0;
          if (!a()(t) && !a()(e)) {
            var n = t.props || {},
              r = n.children,
              o = x(n, g),
              i = e.props || {},
              u = i.children,
              c = x(i, b);
            return r && u
              ? (0, v.w)(o, c) && D(r, u)
              : !r && !u && (0, v.w)(o, c);
          }
          return !1;
        },
        B = function (t, e) {
          var n = [],
            r = {};
          return (
            P(t).forEach(function (t, o) {
              if (_(t)) n.push(t);
              else if (t) {
                var i = S(t.type),
                  a = e[i] || {},
                  u = a.handler,
                  c = a.once;
                if (u && (!c || !r[i])) {
                  var l = u(t, i, o);
                  n.push(l), (r[i] = !0);
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
          return P(e).indexOf(t);
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
        o = n(91140),
        i = n(94797);
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
          s = (0, i.sP)(n, r.D);
        return s
          ? ((e =
              s.props && s.props.payload
                ? s.props && s.props.payload
                : "children" === l
                  ? (a || []).reduce(function (t, e) {
                      var n = e.item,
                        r = e.props,
                        o = r.sectors || r.data || [];
                      return t.concat(
                        o.map(function (t) {
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
                        i = n.name,
                        a = n.legendType;
                      return {
                        inactive: n.hide,
                        dataKey: r,
                        type: s.props.iconType || a || "square",
                        color: (0, o.fk)(e),
                        value: i || r,
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
        o = n.n(r),
        i = n(8889),
        a = n.n(i);
      function u(t, e, n) {
        return !0 === e ? o()(t, n) : a()(e) ? o()(t, e) : t;
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
        o = n(60486),
        i = n.n(o);
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
          if (((0, r.isValidElement)(t) && (n = t.props), !i()(n))) return null;
          var o = {};
          return (
            Object.keys(n).forEach(function (t) {
              s.includes(t) &&
                (o[t] =
                  e ||
                  function (e) {
                    return n[t](n, e);
                  });
            }),
            o
          );
        },
        p = function (t, e, n) {
          if (!i()(t) || "object" !== a(t)) return null;
          var r = null;
          return (
            Object.keys(t).forEach(function (o) {
              var i = t[o];
              s.includes(o) &&
                "function" == typeof i &&
                (r || (r = {}),
                (r[o] = (function (t, e, n) {
                  return function (r) {
                    return t(e, n, r), null;
                  };
                })(i, e, n)));
            }),
            r
          );
        };
    },
    22025: (t, e) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
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
                case i:
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
            case o:
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
          return w(t) === i;
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
          o = "";
        if ("string" == typeof t || "number" == typeof t) o += t;
        else if ("object" == typeof t)
          if (Array.isArray(t)) {
            var i = t.length;
            for (e = 0; e < i; e++)
              t[e] && (n = r(t[e])) && (o && (o += " "), (o += n));
          } else for (n in t) t[n] && (o && (o += " "), (o += n));
        return o;
      }
      n.d(e, { Z: () => o });
      const o = function () {
        for (var t, e, n = 0, o = "", i = arguments.length; n < i; n++)
          (t = arguments[n]) && (e = r(t)) && (o && (o += " "), (o += e));
        return o;
      };
    },
    30598: (t, e, n) => {
      "use strict";
      function r(t, e, n) {
        (t.prototype = e.prototype = n), (n.constructor = t);
      }
      function o(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n;
      }
      function i() {}
      n.d(e, { ZP: () => w, B8: () => j });
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
        var e, n;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = f.exec(t))
            ? ((n = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === n
                ? O(e)
                : 3 === n
                  ? new E(
                      ((e >> 8) & 15) | ((e >> 4) & 240),
                      ((e >> 4) & 15) | (240 & e),
                      ((15 & e) << 4) | (15 & e),
                      1,
                    )
                  : 8 === n
                    ? S(
                        (e >> 24) & 255,
                        (e >> 16) & 255,
                        (e >> 8) & 255,
                        (255 & e) / 255,
                      )
                    : 4 === n
                      ? S(
                          ((e >> 12) & 15) | ((e >> 8) & 240),
                          ((e >> 8) & 15) | ((e >> 4) & 240),
                          ((e >> 4) & 15) | (240 & e),
                          (((15 & e) << 4) | (15 & e)) / 255,
                        )
                      : null)
            : (e = p.exec(t))
              ? new E(e[1], e[2], e[3], 1)
              : (e = h.exec(t))
                ? new E(
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
                      ? _(e[1], e[2] / 100, e[3] / 100, 1)
                      : (e = m.exec(t))
                        ? _(e[1], e[2] / 100, e[3] / 100, e[4])
                        : g.hasOwnProperty(t)
                          ? O(g[t])
                          : "transparent" === t
                            ? new E(NaN, NaN, NaN, 0)
                            : null
        );
      }
      function O(t) {
        return new E((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function S(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new E(t, e, n, r);
      }
      function j(t, e, n, r) {
        return 1 === arguments.length
          ? ((o = t) instanceof i || (o = w(o)),
            o ? new E((o = o.rgb()).r, o.g, o.b, o.opacity) : new E())
          : new E(t, e, n, null == r ? 1 : r);
        var o;
      }
      function E(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function P() {
        return `#${T(this.r)}${T(this.g)}${T(this.b)}`;
      }
      function A() {
        const t = k(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${M(this.r)}, ${M(this.g)}, ${M(this.b)}${1 === t ? ")" : `, ${t})`}`;
      }
      function k(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function M(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function T(t) {
        return ((t = M(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function _(t, e, n, r) {
        return (
          r <= 0
            ? (t = e = n = NaN)
            : n <= 0 || n >= 1
              ? (t = e = NaN)
              : e <= 0 && (t = NaN),
          new N(t, e, n, r)
        );
      }
      function C(t) {
        if (t instanceof N) return new N(t.h, t.s, t.l, t.opacity);
        if ((t instanceof i || (t = w(t)), !t)) return new N();
        if (t instanceof N) return t;
        var e = (t = t.rgb()).r / 255,
          n = t.g / 255,
          r = t.b / 255,
          o = Math.min(e, n, r),
          a = Math.max(e, n, r),
          u = NaN,
          c = a - o,
          l = (a + o) / 2;
        return (
          c
            ? ((u =
                e === a
                  ? (n - r) / c + 6 * (n < r)
                  : n === a
                    ? (r - e) / c + 2
                    : (e - n) / c + 4),
              (c /= l < 0.5 ? a + o : 2 - a - o),
              (u *= 60))
            : (c = l > 0 && l < 1 ? 0 : u),
          new N(u, c, l, t.opacity)
        );
      }
      function N(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function D(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function I(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function B(t, e, n) {
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
      r(i, w, {
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
        r(
          E,
          j,
          o(i, {
            brighter(t) {
              return (
                (t = null == t ? u : Math.pow(u, t)),
                new E(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? a : Math.pow(a, t)),
                new E(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new E(M(this.r), M(this.g), M(this.b), k(this.opacity));
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
              return `#${T(this.r)}${T(this.g)}${T(this.b)}${T(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
            },
            formatRgb: A,
            toString: A,
          }),
        ),
        r(
          N,
          function (t, e, n, r) {
            return 1 === arguments.length
              ? C(t)
              : new N(t, e, n, null == r ? 1 : r);
          },
          o(i, {
            brighter(t) {
              return (
                (t = null == t ? u : Math.pow(u, t)),
                new N(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? a : Math.pow(a, t)),
                new N(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * e,
                o = 2 * n - r;
              return new E(
                B(t >= 240 ? t - 240 : t + 120, o, r),
                B(t, o, r),
                B(t < 120 ? t + 240 : t - 120, o, r),
                this.opacity,
              );
            },
            clamp() {
              return new N(D(this.h), I(this.s), I(this.l), k(this.opacity));
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
              const t = k(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${D(this.h)}, ${100 * I(this.s)}%, ${100 * I(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          }),
        );
    },
    65043: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => r });
      const r = (t) => () => t;
    },
    21669: (t, e, n) => {
      "use strict";
      function r(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return t * (1 - n) + e * n;
          }
        );
      }
      n.d(e, { Z: () => r });
    },
    48623: (t, e, n) => {
      "use strict";
      n.d(e, { ZP: () => l });
      var r = n(30598);
      function o(t, e, n, r, o) {
        var i = t * t,
          a = i * t;
        return (
          ((1 - 3 * t + 3 * i - a) * e +
            (4 - 6 * i + 3 * a) * n +
            (1 + 3 * t + 3 * i - 3 * a) * r +
            a * o) /
          6
        );
      }
      var i = n(65043);
      function a(t, e) {
        return function (n) {
          return t + n * e;
        };
      }
      function u(t) {
        return 1 == (t = +t)
          ? c
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
                : (0, i.Z)(isNaN(e) ? n : e);
            };
      }
      function c(t, e) {
        var n = e - t;
        return n ? a(t, n) : (0, i.Z)(isNaN(t) ? e : t);
      }
      const l = (function t(e) {
        var n = u(e);
        function o(t, e) {
          var o = n((t = (0, r.B8)(t)).r, (e = (0, r.B8)(e)).r),
            i = n(t.g, e.g),
            a = n(t.b, e.b),
            u = c(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = o(e)),
              (t.g = i(e)),
              (t.b = a(e)),
              (t.opacity = u(e)),
              t + ""
            );
          };
        }
        return (o.gamma = t), o;
      })(1);
      function s(t) {
        return function (e) {
          var n,
            o,
            i = e.length,
            a = new Array(i),
            u = new Array(i),
            c = new Array(i);
          for (n = 0; n < i; ++n)
            (o = (0, r.B8)(e[n])),
              (a[n] = o.r || 0),
              (u[n] = o.g || 0),
              (c[n] = o.b || 0);
          return (
            (a = t(a)),
            (u = t(u)),
            (c = t(c)),
            (o.opacity = 1),
            function (t) {
              return (o.r = a(t)), (o.g = u(t)), (o.b = c(t)), o + "";
            }
          );
        };
      }
      s(function (t) {
        var e = t.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            i = t[r],
            a = t[r + 1],
            u = r > 0 ? t[r - 1] : 2 * i - a,
            c = r < e - 1 ? t[r + 2] : 2 * a - i;
          return o((n - r / e) * e, u, i, a, c);
        };
      }),
        s(function (t) {
          var e = t.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              i = t[(r + e - 1) % e],
              a = t[r % e],
              u = t[(r + 1) % e],
              c = t[(r + 2) % e];
            return o((n - r / e) * e, i, a, u, c);
          };
        });
    },
    34242: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => a });
      var r = n(21669),
        o = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        i = new RegExp(o.source, "g");
      function a(t, e) {
        var n,
          a,
          u,
          c = (o.lastIndex = i.lastIndex = 0),
          l = -1,
          s = [],
          f = [];
        for (t += "", e += ""; (n = o.exec(t)) && (a = i.exec(e)); )
          (u = a.index) > c &&
            ((u = e.slice(c, u)), s[l] ? (s[l] += u) : (s[++l] = u)),
            (n = n[0]) === (a = a[0])
              ? s[l]
                ? (s[l] += a)
                : (s[++l] = a)
              : ((s[++l] = null), f.push({ i: l, x: (0, r.Z)(n, a) })),
            (c = i.lastIndex);
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
                for (var n, r = 0; r < e; ++r) s[(n = f[r]).i] = n.x(t);
                return s.join("");
              })
        );
      }
    },
    9756: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => i, x: () => u });
      var r = n(80560),
        o = n(54328);
      function i() {
        var t,
          e,
          n = (0, o.Z)().unknown(void 0),
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
            o = r ? l : c,
            i = r ? c : l;
          (t = (i - o) / Math.max(1, n - f + 2 * p)),
            s && (t = Math.floor(t)),
            (o += (i - o - t * (n - f)) * h),
            (e = t * (1 - f)),
            s && ((o = Math.round(o)), (e = Math.round(e)));
          var d = (function (t, e, n) {
            (t = +t),
              (e = +e),
              (n =
                (o = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : o < 3
                    ? 1
                    : +n);
            for (
              var r = -1,
                o = 0 | Math.max(0, Math.ceil((e - t) / n)),
                i = new Array(o);
              ++r < o;

            )
              i[r] = t + r * n;
            return i;
          })(n).map(function (e) {
            return o + t * e;
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
            return i(a(), [c, l])
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
        return a(i.apply(null, arguments).paddingInner(1));
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
      function o(t, e) {
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
      n.d(e, { O: () => o, o: () => r });
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
          return super.get(o(this, t));
        }
        has(t) {
          return super.has(o(this, t));
        }
        set(t, e) {
          return super.set(i(this, t), e);
        }
        delete(t) {
          return super.delete(a(this, t));
        }
      }
      function o({ _intern: t, _key: e }, n) {
        const r = e(n);
        return t.has(r) ? t.get(r) : n;
      }
      function i({ _intern: t, _key: e }, n) {
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
          o = l;
        function i(r) {
          let i = t.get(r);
          if (void 0 === i) {
            if (o !== l) return o;
            t.set(r, (i = e.push(r) - 1));
          }
          return n[i % n.length];
        }
        return (
          (i.domain = function (n) {
            if (!arguments.length) return e.slice();
            (e = []), (t = new r());
            for (const r of n) t.has(r) || t.set(r, e.push(r) - 1);
            return i;
          }),
          (i.range = function (t) {
            return arguments.length ? ((n = Array.from(t)), i) : n.slice();
          }),
          (i.unknown = function (t) {
            return arguments.length ? ((o = t), i) : o;
          }),
          (i.copy = function () {
            return s(e, n).unknown(o);
          }),
          c.o.apply(i, arguments),
          i
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
        o = 2 * r,
        i = 1e-6,
        a = o - i;
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
        bezierCurveTo(t, e, n, r, o, i) {
          this
            ._append`C${+t},${+e},${+n},${+r},${(this._x1 = +o)},${(this._y1 = +i)}`;
        }
        arcTo(t, e, n, o, a) {
          if (((t = +t), (e = +e), (n = +n), (o = +o), (a = +a) < 0))
            throw new Error(`negative radius: ${a}`);
          let u = this._x1,
            c = this._y1,
            l = n - t,
            s = o - e,
            f = u - t,
            p = c - e,
            h = f * f + p * p;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
          else if (h > i)
            if (Math.abs(p * l - s * f) > i && a) {
              let d = n - u,
                y = o - c,
                v = l * l + s * s,
                m = d * d + y * y,
                g = Math.sqrt(v),
                b = Math.sqrt(h),
                x =
                  a * Math.tan((r - Math.acos((v + h - m) / (2 * g * b))) / 2),
                w = x / b,
                O = x / g;
              Math.abs(w - 1) > i && this._append`L${t + w * f},${e + w * p}`,
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
            : (Math.abs(this._x1 - p) > i || Math.abs(this._y1 - h) > i) &&
              this._append`L${p},${h}`,
            n &&
              (y < 0 && (y = (y % o) + o),
              y > a
                ? this
                    ._append`A${n},${n},0,1,${d},${t - s},${e - f}A${n},${n},0,1,${d},${(this._x1 = p)},${(this._y1 = h)}`
                : y > i &&
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

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3807],
  {
    41721: function (t, e, r) {
      var n;
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
          b = p(m / v),
          g = {};
        function x(t, e) {
          var r,
            n,
            o,
            i,
            a,
            u,
            l,
            s,
            f = t.constructor,
            p = f.precision;
          if (!t.s || !e.s) return e.s || (e = new f(t)), c ? _(e, p) : e;
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
                ? ((n = l), (i = -i), (u = s.length))
                : ((n = s), (o = a), (u = l.length)),
                i > (u = (a = Math.ceil(p / v)) > u ? a + 1 : u + 1) &&
                  ((i = u), (n.length = 1)),
                n.reverse();
              i--;

            )
              n.push(0);
            n.reverse();
          }
          for (
            (u = l.length) - (i = s.length) < 0 &&
              ((i = u), (n = s), (s = l), (l = n)),
              r = 0;
            i;

          )
            (r = ((l[--i] = l[i] + s[i] + r) / y) | 0), (l[i] %= y);
          for (r && (l.unshift(r), ++o), u = l.length; 0 == l[--u]; ) l.pop();
          return (e.d = l), (e.e = o), c ? _(e, p) : e;
        }
        function w(t, e, r) {
          if (t !== ~~t || t < e || t > r) throw Error(s + t);
        }
        function O(t) {
          var e,
            r,
            n,
            o = t.length - 1,
            i = "",
            a = t[0];
          if (o > 0) {
            for (i += a, e = 1; e < o; e++)
              (n = t[e] + ""), (r = v - n.length) && (i += P(r)), (i += n);
            (a = t[e]), (r = v - (n = a + "").length) && (i += P(r));
          } else if (0 === a) return "0";
          for (; a % 10 == 0; ) a /= 10;
          return i + a;
        }
        (g.absoluteValue = g.abs =
          function () {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
          }),
          (g.comparedTo = g.cmp =
            function (t) {
              var e,
                r,
                n,
                o,
                i = this;
              if (((t = new i.constructor(t)), i.s !== t.s)) return i.s || -t.s;
              if (i.e !== t.e) return (i.e > t.e) ^ (i.s < 0) ? 1 : -1;
              for (
                e = 0, r = (n = i.d.length) < (o = t.d.length) ? n : o;
                e < r;
                ++e
              )
                if (i.d[e] !== t.d[e])
                  return (i.d[e] > t.d[e]) ^ (i.s < 0) ? 1 : -1;
              return n === o ? 0 : (n > o) ^ (i.s < 0) ? 1 : -1;
            }),
          (g.decimalPlaces = g.dp =
            function () {
              var t = this,
                e = t.d.length - 1,
                r = (e - t.e) * v;
              if ((e = t.d[e])) for (; e % 10 == 0; e /= 10) r--;
              return r < 0 ? 0 : r;
            }),
          (g.dividedBy = g.div =
            function (t) {
              return j(this, new this.constructor(t));
            }),
          (g.dividedToIntegerBy = g.idiv =
            function (t) {
              var e = this.constructor;
              return _(j(this, new e(t), 0, 1), e.precision);
            }),
          (g.equals = g.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (g.exponent = function () {
            return A(this);
          }),
          (g.greaterThan = g.gt =
            function (t) {
              return this.cmp(t) > 0;
            }),
          (g.greaterThanOrEqualTo = g.gte =
            function (t) {
              return this.cmp(t) >= 0;
            }),
          (g.isInteger = g.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (g.isNegative = g.isneg =
            function () {
              return this.s < 0;
            }),
          (g.isPositive = g.ispos =
            function () {
              return this.s > 0;
            }),
          (g.isZero = function () {
            return 0 === this.s;
          }),
          (g.lessThan = g.lt =
            function (t) {
              return this.cmp(t) < 0;
            }),
          (g.lessThanOrEqualTo = g.lte =
            function (t) {
              return this.cmp(t) < 1;
            }),
          (g.logarithm = g.log =
            function (t) {
              var e,
                r = this,
                n = r.constructor,
                o = n.precision,
                a = o + 5;
              if (void 0 === t) t = new n(10);
              else if ((t = new n(t)).s < 1 || t.eq(i)) throw Error(l + "NaN");
              if (r.s < 1) throw Error(l + (r.s ? "NaN" : "-Infinity"));
              return r.eq(i)
                ? new n(0)
                : ((c = !1), (e = j(k(r, a), k(t, a), a)), (c = !0), _(e, o));
            }),
          (g.minus = g.sub =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? T(e, t) : x(e, ((t.s = -t.s), t))
              );
            }),
          (g.modulo = g.mod =
            function (t) {
              var e,
                r = this,
                n = r.constructor,
                o = n.precision;
              if (!(t = new n(t)).s) throw Error(l + "NaN");
              return r.s
                ? ((c = !1), (e = j(r, t, 0, 1).times(t)), (c = !0), r.minus(e))
                : _(new n(r), o);
            }),
          (g.naturalExponential = g.exp =
            function () {
              return S(this);
            }),
          (g.naturalLogarithm = g.ln =
            function () {
              return k(this);
            }),
          (g.negated = g.neg =
            function () {
              var t = new this.constructor(this);
              return (t.s = -t.s || 0), t;
            }),
          (g.plus = g.add =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? x(e, t) : T(e, ((t.s = -t.s), t))
              );
            }),
          (g.precision = g.sd =
            function (t) {
              var e,
                r,
                n,
                o = this;
              if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
                throw Error(s + t);
              if (
                ((e = A(o) + 1),
                (r = (n = o.d.length - 1) * v + 1),
                (n = o.d[n]))
              ) {
                for (; n % 10 == 0; n /= 10) r--;
                for (n = o.d[0]; n >= 10; n /= 10) r++;
              }
              return t && e > r ? e : r;
            }),
          (g.squareRoot = g.sqrt =
            function () {
              var t,
                e,
                r,
                n,
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
                t = A(u),
                  c = !1,
                  0 == (o = Math.sqrt(+u)) || o == 1 / 0
                    ? (((e = O(u.d)).length + t) % 2 == 0 && (e += "0"),
                      (o = Math.sqrt(e)),
                      (t = p((t + 1) / 2) - (t < 0 || t % 2)),
                      (n = new s(
                        (e =
                          o == 1 / 0
                            ? "5e" + t
                            : (e = o.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1,
                              ) + t),
                      )))
                    : (n = new s(o.toString())),
                  o = a = (r = s.precision) + 3;
                ;

              )
                if (
                  ((n = (i = n).plus(j(u, i, a + 2)).times(0.5)),
                  O(i.d).slice(0, a) === (e = O(n.d)).slice(0, a))
                ) {
                  if (((e = e.slice(a - 3, a + 1)), o == a && "4999" == e)) {
                    if ((_(i, r + 1, 0), i.times(i).eq(u))) {
                      n = i;
                      break;
                    }
                  } else if ("9999" != e) break;
                  a += 4;
                }
              return (c = !0), _(n, r);
            }),
          (g.times = g.mul =
            function (t) {
              var e,
                r,
                n,
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
                  r = f.e + t.e,
                  (l = h.length) < (s = d.length) &&
                    ((i = h), (h = d), (d = i), (a = l), (l = s), (s = a)),
                  i = [],
                  n = a = l + s;
                n--;

              )
                i.push(0);
              for (n = s; --n >= 0; ) {
                for (e = 0, o = l + n; o > n; )
                  (u = i[o] + d[n] * h[o - n - 1] + e),
                    (i[o--] = u % y | 0),
                    (e = (u / y) | 0);
                i[o] = (i[o] + e) % y | 0;
              }
              for (; !i[--a]; ) i.pop();
              return (
                e ? ++r : i.shift(),
                (t.d = i),
                (t.e = r),
                c ? _(t, p.precision) : t
              );
            }),
          (g.toDecimalPlaces = g.todp =
            function (t, e) {
              var r = this,
                n = r.constructor;
              return (
                (r = new n(r)),
                void 0 === t
                  ? r
                  : (w(t, 0, a),
                    void 0 === e ? (e = n.rounding) : w(e, 0, 8),
                    _(r, t + A(r) + 1, e))
              );
            }),
          (g.toExponential = function (t, e) {
            var r,
              n = this,
              o = n.constructor;
            return (
              void 0 === t
                ? (r = C(n, !0))
                : (w(t, 0, a),
                  void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                  (r = C((n = _(new o(n), t + 1, e)), !0, t + 1))),
              r
            );
          }),
          (g.toFixed = function (t, e) {
            var r,
              n,
              o = this,
              i = o.constructor;
            return void 0 === t
              ? C(o)
              : (w(t, 0, a),
                void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                (r = C(
                  (n = _(new i(o), t + A(o) + 1, e)).abs(),
                  !1,
                  t + A(n) + 1,
                )),
                o.isneg() && !o.isZero() ? "-" + r : r);
          }),
          (g.toInteger = g.toint =
            function () {
              var t = this,
                e = t.constructor;
              return _(new e(t), A(t) + 1, e.rounding);
            }),
          (g.toNumber = function () {
            return +this;
          }),
          (g.toPower = g.pow =
            function (t) {
              var e,
                r,
                n,
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
              if (((n = f.precision), t.eq(i))) return _(s, n);
              if (((u = (e = t.e) >= (r = t.d.length - 1)), (a = s.s), u)) {
                if ((r = h < 0 ? -h : h) <= m) {
                  for (
                    o = new f(i), e = Math.ceil(n / v + 4), c = !1;
                    r % 2 && N((o = o.times(s)).d, e), 0 !== (r = p(r / 2));

                  )
                    N((s = s.times(s)).d, e);
                  return (c = !0), t.s < 0 ? new f(i).div(o) : _(o, n);
                }
              } else if (a < 0) throw Error(l + "NaN");
              return (
                (a = a < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
                (s.s = 1),
                (c = !1),
                (o = t.times(k(s, n + 12))),
                (c = !0),
                ((o = S(o)).s = a),
                o
              );
            }),
          (g.toPrecision = function (t, e) {
            var r,
              n,
              o = this,
              i = o.constructor;
            return (
              void 0 === t
                ? (n = C(o, (r = A(o)) <= i.toExpNeg || r >= i.toExpPos))
                : (w(t, 1, a),
                  void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                  (n = C(
                    (o = _(new i(o), t, e)),
                    t <= (r = A(o)) || r <= i.toExpNeg,
                    t,
                  ))),
              n
            );
          }),
          (g.toSignificantDigits = g.tosd =
            function (t, e) {
              var r = this.constructor;
              return (
                void 0 === t
                  ? ((t = r.precision), (e = r.rounding))
                  : (w(t, 1, a), void 0 === e ? (e = r.rounding) : w(e, 0, 8)),
                _(new r(this), t, e)
              );
            }),
          (g.toString =
            g.valueOf =
            g.val =
            g.toJSON =
              function () {
                var t = this,
                  e = A(t),
                  r = t.constructor;
                return C(t, e <= r.toExpNeg || e >= r.toExpPos);
              });
        var j = (function () {
          function t(t, e) {
            var r,
              n = 0,
              o = t.length;
            for (t = t.slice(); o--; )
              (r = t[o] * e + n), (t[o] = r % y | 0), (n = (r / y) | 0);
            return n && t.unshift(n), t;
          }
          function e(t, e, r, n) {
            var o, i;
            if (r != n) i = r > n ? 1 : -1;
            else
              for (o = i = 0; o < r; o++)
                if (t[o] != e[o]) {
                  i = t[o] > e[o] ? 1 : -1;
                  break;
                }
            return i;
          }
          function r(t, e, r) {
            for (var n = 0; r--; )
              (t[r] -= n),
                (n = t[r] < e[r] ? 1 : 0),
                (t[r] = n * y + t[r] - e[r]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (n, o, i, a) {
            var u,
              c,
              s,
              f,
              p,
              h,
              d,
              m,
              b,
              g,
              x,
              w,
              O,
              j,
              S,
              E,
              P,
              k,
              M = n.constructor,
              T = n.s == o.s ? 1 : -1,
              C = n.d,
              N = o.d;
            if (!n.s) return new M(n);
            if (!o.s) throw Error(l + "Division by zero");
            for (
              c = n.e - o.e,
                P = N.length,
                S = C.length,
                m = (d = new M(T)).d = [],
                s = 0;
              N[s] == (C[s] || 0);

            )
              ++s;
            if (
              (N[s] > (C[s] || 0) && --c,
              (w =
                null == i ? (i = M.precision) : a ? i + (A(n) - A(o)) + 1 : i) <
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
                  g = (b = C.slice(0, P)).length;
                g < P;

              )
                b[g++] = 0;
              (k = N.slice()).unshift(0), (E = N[0]), N[1] >= y / 2 && ++E;
              do {
                (f = 0),
                  (u = e(N, b, P, g)) < 0
                    ? ((x = b[0]),
                      P != g && (x = x * y + (b[1] || 0)),
                      (f = (x / E) | 0) > 1
                        ? (f >= y && (f = y - 1),
                          1 ==
                            (u = e(
                              (p = t(N, f)),
                              b,
                              (h = p.length),
                              (g = b.length),
                            )) && (f--, r(p, P < h ? k : N, h)))
                        : (0 == f && (u = f = 1), (p = N.slice())),
                      (h = p.length) < g && p.unshift(0),
                      r(b, p, g),
                      -1 == u &&
                        (u = e(N, b, P, (g = b.length))) < 1 &&
                        (f++, r(b, P < g ? k : N, g)),
                      (g = b.length))
                    : 0 === u && (f++, (b = [0])),
                  (m[s++] = f),
                  u && b[0] ? (b[g++] = C[j] || 0) : ((b = [C[j]]), (g = 1));
              } while ((j++ < S || void 0 !== b[0]) && w--);
            }
            return m[0] || m.shift(), (d.e = c), _(d, a ? i + A(d) + 1 : i);
          };
        })();
        function S(t, e) {
          var r,
            n,
            o,
            a,
            u,
            l = 0,
            s = 0,
            p = t.constructor,
            d = p.precision;
          if (A(t) > 16) throw Error(f + A(t));
          if (!t.s) return new p(i);
          for (
            null == e ? ((c = !1), (u = d)) : (u = e), a = new p(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(a)), (s += 5);
          for (
            u += ((Math.log(h(2, s)) / Math.LN10) * 2 + 5) | 0,
              r = n = o = new p(i),
              p.precision = u;
            ;

          ) {
            if (
              ((n = _(n.times(t), u)),
              (r = r.times(++l)),
              O((a = o.plus(j(n, r, u))).d).slice(0, u) === O(o.d).slice(0, u))
            ) {
              for (; s--; ) o = _(o.times(o), u);
              return (p.precision = d), null == e ? ((c = !0), _(o, d)) : o;
            }
            o = a;
          }
        }
        function A(t) {
          for (var e = t.e * v, r = t.d[0]; r >= 10; r /= 10) e++;
          return e;
        }
        function E(t, e, r) {
          if (e > t.LN10.sd())
            throw (
              ((c = !0),
              r && (t.precision = r),
              Error(l + "LN10 precision limit exceeded"))
            );
          return _(new t(t.LN10), e);
        }
        function P(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function k(t, e) {
          var r,
            n,
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
            b = m.precision;
          if (y.s < 1) throw Error(l + (y.s ? "NaN" : "-Infinity"));
          if (y.eq(i)) return new m(0);
          if ((null == e ? ((c = !1), (p = b)) : (p = e), y.eq(10)))
            return null == e && (c = !0), E(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (n = (r = O(v)).charAt(0)),
            (a = A(y)),
            !(Math.abs(a) < 15e14))
          )
            return (
              (f = E(m, p + 2, b).times(a + "")),
              (y = k(new m(n + "." + r.slice(1)), p - 10).plus(f)),
              (m.precision = b),
              null == e ? ((c = !0), _(y, b)) : y
            );
          for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
            (n = (r = O((y = y.times(t)).d)).charAt(0)), d++;
          for (
            a = A(y),
              n > 1
                ? ((y = new m("0." + r)), a++)
                : (y = new m(n + "." + r.slice(1))),
              s = u = y = j(y.minus(i), y.plus(i), p),
              h = _(y.times(y), p),
              o = 3;
            ;

          ) {
            if (
              ((u = _(u.times(h), p)),
              O((f = s.plus(j(u, new m(o), p))).d).slice(0, p) ===
                O(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== a && (s = s.plus(E(m, p + 2, b).times(a + ""))),
                (s = j(s, new m(d), p)),
                (m.precision = b),
                null == e ? ((c = !0), _(s, b)) : s
              );
            (s = f), (o += 2);
          }
        }
        function M(t, e) {
          var r, n, o;
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
          for (o = e.length; 48 === e.charCodeAt(o - 1); ) --o;
          if ((e = e.slice(n, o))) {
            if (
              ((o -= n),
              (r = r - n - 1),
              (t.e = p(r / v)),
              (t.d = []),
              (n = (r + 1) % v),
              r < 0 && (n += v),
              n < o)
            ) {
              for (n && t.d.push(+e.slice(0, n)), o -= v; n < o; )
                t.d.push(+e.slice(n, (n += v)));
              (e = e.slice(n)), (n = v - e.length);
            } else n -= o;
            for (; n--; ) e += "0";
            if ((t.d.push(+e), c && (t.e > b || t.e < -b))) throw Error(f + r);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function _(t, e, r) {
          var n,
            o,
            i,
            a,
            u,
            l,
            s,
            d,
            m = t.d;
          for (a = 1, i = m[0]; i >= 10; i /= 10) a++;
          if ((n = e - a) < 0) (n += v), (o = e), (s = m[(d = 0)]);
          else {
            if ((d = Math.ceil((n + 1) / v)) >= (i = m.length)) return t;
            for (s = i = m[d], a = 1; i >= 10; i /= 10) a++;
            o = (n %= v) - v + a;
          }
          if (
            (void 0 !== r &&
              ((u = (s / (i = h(10, a - o - 1))) % 10 | 0),
              (l = e < 0 || void 0 !== m[d + 1] || s % i),
              (l =
                r < 4
                  ? (u || l) && (0 == r || r == (t.s < 0 ? 3 : 2))
                  : u > 5 ||
                    (5 == u &&
                      (4 == r ||
                        l ||
                        (6 == r &&
                          (n > 0 ? (o > 0 ? s / h(10, a - o) : 0) : m[d - 1]) %
                            10 &
                            1) ||
                        r == (t.s < 0 ? 8 : 7))))),
            e < 1 || !m[0])
          )
            return (
              l
                ? ((i = A(t)),
                  (m.length = 1),
                  (e = e - i - 1),
                  (m[0] = h(10, (v - (e % v)) % v)),
                  (t.e = p(-e / v) || 0))
                : ((m.length = 1), (m[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == n
              ? ((m.length = d), (i = 1), d--)
              : ((m.length = d + 1),
                (i = h(10, v - n)),
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
          for (n = m.length; 0 === m[--n]; ) m.pop();
          if (c && (t.e > b || t.e < -b)) throw Error(f + A(t));
          return t;
        }
        function T(t, e) {
          var r,
            n,
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
            return e.s ? (e.s = -e.s) : (e = new h(t)), c ? _(e, d) : e;
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
                a > (o = Math.max(Math.ceil(d / v), u) + 2) &&
                  ((a = o), (r.length = 1)),
                r.reverse(),
                o = a;
              o--;

            )
              r.push(0);
            r.reverse();
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
            f && ((r = l), (l = p), (p = r), (e.s = -e.s)),
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
          for (; 0 === l[0]; l.shift()) --n;
          return l[0] ? ((e.d = l), (e.e = n), c ? _(e, d) : e) : new h(0);
        }
        function C(t, e, r) {
          var n,
            o = A(t),
            i = O(t.d),
            a = i.length;
          return (
            e
              ? (r && (n = r - a) > 0
                  ? (i = i.charAt(0) + "." + i.slice(1) + P(n))
                  : a > 1 && (i = i.charAt(0) + "." + i.slice(1)),
                (i = i + (o < 0 ? "e" : "e+") + o))
              : o < 0
              ? ((i = "0." + P(-o - 1) + i),
                r && (n = r - a) > 0 && (i += P(n)))
              : o >= a
              ? ((i += P(o + 1 - a)),
                r && (n = r - o - 1) > 0 && (i = i + "." + P(n)))
              : ((n = o + 1) < a && (i = i.slice(0, n) + "." + i.slice(n)),
                r &&
                  (n = r - a) > 0 &&
                  (o + 1 === a && (i += "."), (i += P(n)))),
            t.s < 0 ? "-" + i : i
          );
        }
        function N(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function D(t) {
          if (!t || "object" != typeof t) throw Error(l + "Object expected");
          var e,
            r,
            n,
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
            if (void 0 !== (n = t[(r = o[e])])) {
              if (!(p(n) === n && n >= o[e + 1] && n <= o[e + 2]))
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
          var r, n, o;
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
            ((i.prototype = g),
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
                r = 0;
              r < o.length;

            )
              e.hasOwnProperty((n = o[r++])) || (e[n] = this[n]);
          return i.config(e), i;
        })(u)),
          (u.default = u.Decimal = u),
          (i = new u(1)),
          void 0 ===
            (n = function () {
              return u;
            }.call(e, r, e, t)) || (t.exports = n);
      })();
    },
    2610: (t, e, r) => {
      "use strict";
      var n = r(32224);
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
      var o = n(r(2142));
      t.exports = e.default;
    },
    2142: (t, e) => {
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
    40441: (t) => {
      "use strict";
      function e(t, e) {
        return t
          .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      t.exports = function (t, r) {
        t.classList
          ? t.classList.remove(r)
          : "string" == typeof t.className
          ? (t.className = e(t.className, r))
          : t.setAttribute(
              "class",
              e((t.className && t.className.baseVal) || "", r),
            );
      };
    },
    84682: (t) => {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function o(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function i(t, e, n, i, a) {
        if ("function" != typeof n)
          throw new TypeError("The listener must be a function");
        var u = new o(n, i || t, a),
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
            o = [];
          if (0 === this._eventsCount) return o;
          for (n in (t = this._events))
            e.call(t, n) && o.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(t))
            : o;
        }),
        (u.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var o = 0, i = n.length, a = new Array(i); o < i; o++)
            a[o] = n[o].fn;
          return a;
        }),
        (u.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (u.prototype.emit = function (t, e, n, o, i, a) {
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
                return s.fn.call(s.context, e, n, o), !0;
              case 5:
                return s.fn.call(s.context, e, n, o, i), !0;
              case 6:
                return s.fn.call(s.context, e, n, o, i, a), !0;
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
                  s[l].fn.call(s[l].context, e, n, o);
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
          return i(this, t, e, r, !1);
        }),
        (u.prototype.once = function (t, e, r) {
          return i(this, t, e, r, !0);
        }),
        (u.prototype.removeListener = function (t, e, n, o) {
          var i = r ? r + t : t;
          if (!this._events[i]) return this;
          if (!e) return a(this, i), this;
          var u = this._events[i];
          if (u.fn)
            u.fn !== e ||
              (o && !u.once) ||
              (n && u.context !== n) ||
              a(this, i);
          else {
            for (var c = 0, l = [], s = u.length; c < s; c++)
              (u[c].fn !== e ||
                (o && !u[c].once) ||
                (n && u[c].context !== n)) &&
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
    83146: (t, e, r) => {
      var n = r(77568)(r(49656), "DataView");
      t.exports = n;
    },
    43541: (t, e, r) => {
      var n = r(28201),
        o = r(72546),
        i = r(39571),
        a = r(1273),
        u = r(88925);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    53619: (t, e, r) => {
      var n = r(54471),
        o = r(54782),
        i = r(33998),
        a = r(48351),
        u = r(76476);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    16265: (t, e, r) => {
      var n = r(77568)(r(49656), "Map");
      t.exports = n;
    },
    3914: (t, e, r) => {
      var n = r(93554),
        o = r(55349),
        i = r(69550),
        a = r(53393),
        u = r(1757);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    44394: (t, e, r) => {
      var n = r(77568)(r(49656), "Promise");
      t.exports = n;
    },
    5851: (t, e, r) => {
      var n = r(77568)(r(49656), "Set");
      t.exports = n;
    },
    99026: (t, e, r) => {
      var n = r(3914),
        o = r(7072),
        i = r(23766);
      function a(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.__data__ = new n(); ++e < r; ) this.add(t[e]);
      }
      (a.prototype.add = a.prototype.push = o),
        (a.prototype.has = i),
        (t.exports = a);
    },
    74814: (t, e, r) => {
      var n = r(53619),
        o = r(8209),
        i = r(72797),
        a = r(1789),
        u = r(9384),
        c = r(57086);
      function l(t) {
        var e = (this.__data__ = new n(t));
        this.size = e.size;
      }
      (l.prototype.clear = o),
        (l.prototype.delete = i),
        (l.prototype.get = a),
        (l.prototype.has = u),
        (l.prototype.set = c),
        (t.exports = l);
    },
    99513: (t, e, r) => {
      var n = r(49656).Symbol;
      t.exports = n;
    },
    25449: (t, e, r) => {
      var n = r(49656).Uint8Array;
      t.exports = n;
    },
    87674: (t, e, r) => {
      var n = r(77568)(r(49656), "WeakMap");
      t.exports = n;
    },
    62902: (t) => {
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
    63889: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
          if (!e(t[r], r, t)) return !1;
        return !0;
      };
    },
    66655: (t) => {
      t.exports = function (t, e) {
        for (
          var r = -1, n = null == t ? 0 : t.length, o = 0, i = [];
          ++r < n;

        ) {
          var a = t[r];
          e(a, r, t) && (i[o++] = a);
        }
        return i;
      };
    },
    9357: (t, e, r) => {
      var n = r(94025);
      t.exports = function (t, e) {
        return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1;
      };
    },
    82629: (t) => {
      t.exports = function (t, e, r) {
        for (var n = -1, o = null == t ? 0 : t.length; ++n < o; )
          if (r(e, t[n])) return !0;
        return !1;
      };
    },
    93914: (t, e, r) => {
      var n = r(51080),
        o = r(88636),
        i = r(5370),
        a = r(43800),
        u = r(11874),
        c = r(85946),
        l = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var r = i(t),
          s = !r && o(t),
          f = !r && !s && a(t),
          p = !r && !s && !f && c(t),
          h = r || s || f || p,
          d = h ? n(t.length, String) : [],
          y = d.length;
        for (var v in t)
          (!e && !l.call(t, v)) ||
            (h &&
              ("length" == v ||
                (f && ("offset" == v || "parent" == v)) ||
                (p &&
                  ("buffer" == v || "byteLength" == v || "byteOffset" == v)) ||
                u(v, y))) ||
            d.push(v);
        return d;
      };
    },
    366: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n; )
          o[r] = e(t[r], r, t);
        return o;
      };
    },
    39809: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
        return t;
      };
    },
    13412: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
          if (e(t[r], r, t)) return !0;
        return !1;
      };
    },
    68447: (t) => {
      t.exports = function (t) {
        return t.split("");
      };
    },
    32749: (t, e, r) => {
      var n = r(35800);
      t.exports = function (t, e) {
        for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
        return -1;
      };
    },
    84423: (t, e, r) => {
      var n = r(83881);
      t.exports = function (t, e, r) {
        "__proto__" == e && n
          ? n(t, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (t[e] = r);
      };
    },
    12761: (t, e, r) => {
      var n = r(53120),
        o = r(52037)(n);
      t.exports = o;
    },
    27157: (t, e, r) => {
      var n = r(12761);
      t.exports = function (t, e) {
        var r = !0;
        return (
          n(t, function (t, n, o) {
            return (r = !!e(t, n, o));
          }),
          r
        );
      };
    },
    17425: (t, e, r) => {
      var n = r(59123);
      t.exports = function (t, e, r) {
        for (var o = -1, i = t.length; ++o < i; ) {
          var a = t[o],
            u = e(a);
          if (null != u && (void 0 === c ? u == u && !n(u) : r(u, c)))
            var c = u,
              l = a;
        }
        return l;
      };
    },
    59861: (t) => {
      t.exports = function (t, e, r, n) {
        for (var o = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
          if (e(t[i], i, t)) return i;
        return -1;
      };
    },
    85720: (t, e, r) => {
      var n = r(39809),
        o = r(79020);
      t.exports = function t(e, r, i, a, u) {
        var c = -1,
          l = e.length;
        for (i || (i = o), u || (u = []); ++c < l; ) {
          var s = e[c];
          r > 0 && i(s)
            ? r > 1
              ? t(s, r - 1, i, a, u)
              : n(u, s)
            : a || (u[u.length] = s);
        }
        return u;
      };
    },
    684: (t, e, r) => {
      var n = r(94397)();
      t.exports = n;
    },
    53120: (t, e, r) => {
      var n = r(684),
        o = r(34840);
      t.exports = function (t, e) {
        return t && n(t, e, o);
      };
    },
    16986: (t, e, r) => {
      var n = r(76621),
        o = r(83347);
      t.exports = function (t, e) {
        for (var r = 0, i = (e = n(e, t)).length; null != t && r < i; )
          t = t[o(e[r++])];
        return r && r == i ? t : void 0;
      };
    },
    73092: (t, e, r) => {
      var n = r(39809),
        o = r(5370);
      t.exports = function (t, e, r) {
        var i = e(t);
        return o(t) ? i : n(i, r(t));
      };
    },
    66203: (t, e, r) => {
      var n = r(99513),
        o = r(2572),
        i = r(92910),
        a = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : a && a in Object(t)
          ? o(t)
          : i(t);
      };
    },
    6515: (t) => {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    92217: (t) => {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    94025: (t, e, r) => {
      var n = r(59861),
        o = r(50254),
        i = r(62095);
      t.exports = function (t, e, r) {
        return e == e ? i(t, e, r) : n(t, o, r);
      };
    },
    74930: (t, e, r) => {
      var n = r(66203),
        o = r(95753);
      t.exports = function (t) {
        return o(t) && "[object Arguments]" == n(t);
      };
    },
    10358: (t, e, r) => {
      var n = r(36629),
        o = r(95753);
      t.exports = function t(e, r, i, a, u) {
        return (
          e === r ||
          (null == e || null == r || (!o(e) && !o(r))
            ? e != e && r != r
            : n(e, r, i, a, t, u))
        );
      };
    },
    36629: (t, e, r) => {
      var n = r(74814),
        o = r(91141),
        i = r(60047),
        a = r(11022),
        u = r(22926),
        c = r(5370),
        l = r(43800),
        s = r(85946),
        f = "[object Arguments]",
        p = "[object Array]",
        h = "[object Object]",
        d = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, r, y, v, m) {
        var b = c(t),
          g = c(e),
          x = b ? p : u(t),
          w = g ? p : u(e),
          O = (x = x == f ? h : x) == h,
          j = (w = w == f ? h : w) == h,
          S = x == w;
        if (S && l(t)) {
          if (!l(e)) return !1;
          (b = !0), (O = !1);
        }
        if (S && !O)
          return (
            m || (m = new n()),
            b || s(t) ? o(t, e, r, y, v, m) : i(t, e, x, r, y, v, m)
          );
        if (!(1 & r)) {
          var A = O && d.call(t, "__wrapped__"),
            E = j && d.call(e, "__wrapped__");
          if (A || E) {
            var P = A ? t.value() : t,
              k = E ? e.value() : e;
            return m || (m = new n()), v(P, k, r, y, m);
          }
        }
        return !!S && (m || (m = new n()), a(t, e, r, y, v, m));
      };
    },
    72163: (t, e, r) => {
      var n = r(74814),
        o = r(10358);
      t.exports = function (t, e, r, i) {
        var a = r.length,
          u = a,
          c = !i;
        if (null == t) return !u;
        for (t = Object(t); a--; ) {
          var l = r[a];
          if (c && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
        }
        for (; ++a < u; ) {
          var s = (l = r[a])[0],
            f = t[s],
            p = l[1];
          if (c && l[2]) {
            if (void 0 === f && !(s in t)) return !1;
          } else {
            var h = new n();
            if (i) var d = i(f, p, s, t, e, h);
            if (!(void 0 === d ? o(p, f, 3, i, h) : d)) return !1;
          }
        }
        return !0;
      };
    },
    50254: (t) => {
      t.exports = function (t) {
        return t != t;
      };
    },
    8852: (t, e, r) => {
      var n = r(8889),
        o = r(44932),
        i = r(60486),
        a = r(97235),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        l = Object.prototype,
        s = c.toString,
        f = l.hasOwnProperty,
        p = RegExp(
          "^" +
            s
              .call(f)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      t.exports = function (t) {
        return !(!i(t) || o(t)) && (n(t) ? p : u).test(a(t));
      };
    },
    55077: (t, e, r) => {
      var n = r(66203),
        o = r(94839),
        i = r(95753),
        a = {};
      (a["[object Float32Array]"] =
        a["[object Float64Array]"] =
        a["[object Int8Array]"] =
        a["[object Int16Array]"] =
        a["[object Int32Array]"] =
        a["[object Uint8Array]"] =
        a["[object Uint8ClampedArray]"] =
        a["[object Uint16Array]"] =
        a["[object Uint32Array]"] =
          !0),
        (a["[object Arguments]"] =
          a["[object Array]"] =
          a["[object ArrayBuffer]"] =
          a["[object Boolean]"] =
          a["[object DataView]"] =
          a["[object Date]"] =
          a["[object Error]"] =
          a["[object Function]"] =
          a["[object Map]"] =
          a["[object Number]"] =
          a["[object Object]"] =
          a["[object RegExp]"] =
          a["[object Set]"] =
          a["[object String]"] =
          a["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return i(t) && o(t.length) && !!a[n(t)];
        });
    },
    60647: (t, e, r) => {
      var n = r(31551),
        o = r(71160),
        i = r(7414),
        a = r(5370),
        u = r(47305);
      t.exports = function (t) {
        return "function" == typeof t
          ? t
          : null == t
          ? i
          : "object" == typeof t
          ? a(t)
            ? o(t[0], t[1])
            : n(t)
          : u(t);
      };
    },
    95571: (t, e, r) => {
      var n = r(66484),
        o = r(75784),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!n(t)) return o(t);
        var e = [];
        for (var r in Object(t))
          i.call(t, r) && "constructor" != r && e.push(r);
        return e;
      };
    },
    66983: (t) => {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    3007: (t, e, r) => {
      var n = r(12761),
        o = r(1161);
      t.exports = function (t, e) {
        var r = -1,
          i = o(t) ? Array(t.length) : [];
        return (
          n(t, function (t, n, o) {
            i[++r] = e(t, n, o);
          }),
          i
        );
      };
    },
    31551: (t, e, r) => {
      var n = r(72163),
        o = r(48181),
        i = r(52225);
      t.exports = function (t) {
        var e = o(t);
        return 1 == e.length && e[0][2]
          ? i(e[0][0], e[0][1])
          : function (r) {
              return r === t || n(r, t, e);
            };
      };
    },
    71160: (t, e, r) => {
      var n = r(10358),
        o = r(18310),
        i = r(61156),
        a = r(69002),
        u = r(32923),
        c = r(52225),
        l = r(83347);
      t.exports = function (t, e) {
        return a(t) && u(e)
          ? c(l(t), e)
          : function (r) {
              var a = o(r, t);
              return void 0 === a && a === e ? i(r, t) : n(e, a, 3);
            };
      };
    },
    79971: (t, e, r) => {
      var n = r(366),
        o = r(16986),
        i = r(60647),
        a = r(3007),
        u = r(40429),
        c = r(43630),
        l = r(23208),
        s = r(7414),
        f = r(5370);
      t.exports = function (t, e, r) {
        e = e.length
          ? n(e, function (t) {
              return f(t)
                ? function (e) {
                    return o(e, 1 === t.length ? t[0] : t);
                  }
                : t;
            })
          : [s];
        var p = -1;
        e = n(e, c(i));
        var h = a(t, function (t, r, o) {
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
    28873: (t) => {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    97844: (t, e, r) => {
      var n = r(16986);
      t.exports = function (t) {
        return function (e) {
          return n(e, t);
        };
      };
    },
    12397: (t) => {
      var e = Math.ceil,
        r = Math.max;
      t.exports = function (t, n, o, i) {
        for (var a = -1, u = r(e((n - t) / (o || 1)), 0), c = Array(u); u--; )
          (c[i ? u : ++a] = t), (t += o);
        return c;
      };
    },
    52162: (t, e, r) => {
      var n = r(7414),
        o = r(89369),
        i = r(22997);
      t.exports = function (t, e) {
        return i(o(t, e, n), t + "");
      };
    },
    94304: (t, e, r) => {
      var n = r(10693),
        o = r(83881),
        i = r(7414),
        a = o
          ? function (t, e) {
              return o(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: n(e),
                writable: !0,
              });
            }
          : i;
      t.exports = a;
    },
    66426: (t) => {
      t.exports = function (t, e, r) {
        var n = -1,
          o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e),
          (r = r > o ? o : r) < 0 && (r += o),
          (o = e > r ? 0 : (r - e) >>> 0),
          (e >>>= 0);
        for (var i = Array(o); ++n < o; ) i[n] = t[n + e];
        return i;
      };
    },
    68578: (t, e, r) => {
      var n = r(12761);
      t.exports = function (t, e) {
        var r;
        return (
          n(t, function (t, n, o) {
            return !(r = e(t, n, o));
          }),
          !!r
        );
      };
    },
    40429: (t) => {
      t.exports = function (t, e) {
        var r = t.length;
        for (t.sort(e); r--; ) t[r] = t[r].value;
        return t;
      };
    },
    51080: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
        return n;
      };
    },
    33370: (t, e, r) => {
      var n = r(99513),
        o = r(366),
        i = r(5370),
        a = r(59123),
        u = n ? n.prototype : void 0,
        c = u ? u.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return o(e, t) + "";
        if (a(e)) return c ? c.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -Infinity ? "-0" : r;
      };
    },
    83147: (t, e, r) => {
      var n = r(24839),
        o = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, n(t) + 1).replace(o, "") : t;
      };
    },
    43630: (t) => {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    94744: (t, e, r) => {
      var n = r(99026),
        o = r(9357),
        i = r(82629),
        a = r(85664),
        u = r(87527),
        c = r(50037);
      t.exports = function (t, e, r) {
        var l = -1,
          s = o,
          f = t.length,
          p = !0,
          h = [],
          d = h;
        if (r) (p = !1), (s = i);
        else if (f >= 200) {
          var y = e ? null : u(t);
          if (y) return c(y);
          (p = !1), (s = a), (d = new n());
        } else d = e ? [] : h;
        t: for (; ++l < f; ) {
          var v = t[l],
            m = e ? e(v) : v;
          if (((v = r || 0 !== v ? v : 0), p && m == m)) {
            for (var b = d.length; b--; ) if (d[b] === m) continue t;
            e && d.push(m), h.push(v);
          } else s(d, m, r) || (d !== h && d.push(m), h.push(v));
        }
        return h;
      };
    },
    85664: (t) => {
      t.exports = function (t, e) {
        return t.has(e);
      };
    },
    76621: (t, e, r) => {
      var n = r(5370),
        o = r(69002),
        i = r(92018),
        a = r(92938);
      t.exports = function (t, e) {
        return n(t) ? t : o(t, e) ? [t] : i(a(t));
      };
    },
    90023: (t, e, r) => {
      var n = r(66426);
      t.exports = function (t, e, r) {
        var o = t.length;
        return (r = void 0 === r ? o : r), !e && r >= o ? t : n(t, e, r);
      };
    },
    3808: (t, e, r) => {
      var n = r(59123);
      t.exports = function (t, e) {
        if (t !== e) {
          var r = void 0 !== t,
            o = null === t,
            i = t == t,
            a = n(t),
            u = void 0 !== e,
            c = null === e,
            l = e == e,
            s = n(e);
          if (
            (!c && !s && !a && t > e) ||
            (a && u && l && !c && !s) ||
            (o && u && l) ||
            (!r && l) ||
            !i
          )
            return 1;
          if (
            (!o && !a && !s && t < e) ||
            (s && r && i && !o && !a) ||
            (c && r && i) ||
            (!u && i) ||
            !l
          )
            return -1;
        }
        return 0;
      };
    },
    23208: (t, e, r) => {
      var n = r(3808);
      t.exports = function (t, e, r) {
        for (
          var o = -1,
            i = t.criteria,
            a = e.criteria,
            u = i.length,
            c = r.length;
          ++o < u;

        ) {
          var l = n(i[o], a[o]);
          if (l) return o >= c ? l : l * ("desc" == r[o] ? -1 : 1);
        }
        return t.index - e.index;
      };
    },
    41326: (t, e, r) => {
      var n = r(49656)["__core-js_shared__"];
      t.exports = n;
    },
    52037: (t, e, r) => {
      var n = r(1161);
      t.exports = function (t, e) {
        return function (r, o) {
          if (null == r) return r;
          if (!n(r)) return t(r, o);
          for (
            var i = r.length, a = e ? i : -1, u = Object(r);
            (e ? a-- : ++a < i) && !1 !== o(u[a], a, u);

          );
          return r;
        };
      };
    },
    94397: (t) => {
      t.exports = function (t) {
        return function (e, r, n) {
          for (var o = -1, i = Object(e), a = n(e), u = a.length; u--; ) {
            var c = a[t ? u : ++o];
            if (!1 === r(i[c], c, i)) break;
          }
          return e;
        };
      };
    },
    12133: (t, e, r) => {
      var n = r(90023),
        o = r(32799),
        i = r(79525),
        a = r(92938);
      t.exports = function (t) {
        return function (e) {
          e = a(e);
          var r = o(e) ? i(e) : void 0,
            u = r ? r[0] : e.charAt(0),
            c = r ? n(r, 1).join("") : e.slice(1);
          return u[t]() + c;
        };
      };
    },
    51897: (t, e, r) => {
      var n = r(60647),
        o = r(1161),
        i = r(34840);
      t.exports = function (t) {
        return function (e, r, a) {
          var u = Object(e);
          if (!o(e)) {
            var c = n(r, 3);
            (e = i(e)),
              (r = function (t) {
                return c(u[t], t, u);
              });
          }
          var l = t(e, r, a);
          return l > -1 ? u[c ? e[l] : l] : void 0;
        };
      };
    },
    97506: (t, e, r) => {
      var n = r(12397),
        o = r(41757),
        i = r(69419);
      t.exports = function (t) {
        return function (e, r, a) {
          return (
            a && "number" != typeof a && o(e, r, a) && (r = a = void 0),
            (e = i(e)),
            void 0 === r ? ((r = e), (e = 0)) : (r = i(r)),
            (a = void 0 === a ? (e < r ? 1 : -1) : i(a)),
            n(e, r, a, t)
          );
        };
      };
    },
    87527: (t, e, r) => {
      var n = r(5851),
        o = r(76016),
        i = r(50037),
        a =
          n && 1 / i(new n([, -0]))[1] == 1 / 0
            ? function (t) {
                return new n(t);
              }
            : o;
      t.exports = a;
    },
    83881: (t, e, r) => {
      var n = r(77568),
        o = (function () {
          try {
            var t = n(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      t.exports = o;
    },
    91141: (t, e, r) => {
      var n = r(99026),
        o = r(13412),
        i = r(85664);
      t.exports = function (t, e, r, a, u, c) {
        var l = 1 & r,
          s = t.length,
          f = e.length;
        if (s != f && !(l && f > s)) return !1;
        var p = c.get(t),
          h = c.get(e);
        if (p && h) return p == e && h == t;
        var d = -1,
          y = !0,
          v = 2 & r ? new n() : void 0;
        for (c.set(t, e), c.set(e, t); ++d < s; ) {
          var m = t[d],
            b = e[d];
          if (a) var g = l ? a(b, m, d, e, t, c) : a(m, b, d, t, e, c);
          if (void 0 !== g) {
            if (g) continue;
            y = !1;
            break;
          }
          if (v) {
            if (
              !o(e, function (t, e) {
                if (!i(v, e) && (m === t || u(m, t, r, a, c))) return v.push(e);
              })
            ) {
              y = !1;
              break;
            }
          } else if (m !== b && !u(m, b, r, a, c)) {
            y = !1;
            break;
          }
        }
        return c.delete(t), c.delete(e), y;
      };
    },
    60047: (t, e, r) => {
      var n = r(99513),
        o = r(25449),
        i = r(35800),
        a = r(91141),
        u = r(66634),
        c = r(50037),
        l = n ? n.prototype : void 0,
        s = l ? l.valueOf : void 0;
      t.exports = function (t, e, r, n, l, f, p) {
        switch (r) {
          case "[object DataView]":
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            (t = t.buffer), (e = e.buffer);
          case "[object ArrayBuffer]":
            return !(t.byteLength != e.byteLength || !f(new o(t), new o(e)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return i(+t, +e);
          case "[object Error]":
            return t.name == e.name && t.message == e.message;
          case "[object RegExp]":
          case "[object String]":
            return t == e + "";
          case "[object Map]":
            var h = u;
          case "[object Set]":
            var d = 1 & n;
            if ((h || (h = c), t.size != e.size && !d)) return !1;
            var y = p.get(t);
            if (y) return y == e;
            (n |= 2), p.set(t, e);
            var v = a(h(t), h(e), n, l, f, p);
            return p.delete(t), v;
          case "[object Symbol]":
            if (s) return s.call(t) == s.call(e);
        }
        return !1;
      };
    },
    11022: (t, e, r) => {
      var n = r(5547),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, r, i, a, u) {
        var c = 1 & r,
          l = n(t),
          s = l.length;
        if (s != n(e).length && !c) return !1;
        for (var f = s; f--; ) {
          var p = l[f];
          if (!(c ? p in e : o.call(e, p))) return !1;
        }
        var h = u.get(t),
          d = u.get(e);
        if (h && d) return h == e && d == t;
        var y = !0;
        u.set(t, e), u.set(e, t);
        for (var v = c; ++f < s; ) {
          var m = t[(p = l[f])],
            b = e[p];
          if (i) var g = c ? i(b, m, p, e, t, u) : i(m, b, p, t, e, u);
          if (!(void 0 === g ? m === b || a(m, b, r, i, u) : g)) {
            y = !1;
            break;
          }
          v || (v = "constructor" == p);
        }
        if (y && !v) {
          var x = t.constructor,
            w = e.constructor;
          x == w ||
            !("constructor" in t) ||
            !("constructor" in e) ||
            ("function" == typeof x &&
              x instanceof x &&
              "function" == typeof w &&
              w instanceof w) ||
            (y = !1);
        }
        return u.delete(t), u.delete(e), y;
      };
    },
    32790: (t, e, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      t.exports = n;
    },
    5547: (t, e, r) => {
      var n = r(73092),
        o = r(7501),
        i = r(34840);
      t.exports = function (t) {
        return n(t, i, o);
      };
    },
    38828: (t, e, r) => {
      var n = r(90151);
      t.exports = function (t, e) {
        var r = t.__data__;
        return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      };
    },
    48181: (t, e, r) => {
      var n = r(32923),
        o = r(34840);
      t.exports = function (t) {
        for (var e = o(t), r = e.length; r--; ) {
          var i = e[r],
            a = t[i];
          e[r] = [i, a, n(a)];
        }
        return e;
      };
    },
    77568: (t, e, r) => {
      var n = r(8852),
        o = r(91741);
      t.exports = function (t, e) {
        var r = o(t, e);
        return n(r) ? r : void 0;
      };
    },
    75440: (t, e, r) => {
      var n = r(65938)(Object.getPrototypeOf, Object);
      t.exports = n;
    },
    2572: (t, e, r) => {
      var n = r(99513),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        u = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        var e = i.call(t, u),
          r = t[u];
        try {
          t[u] = void 0;
          var n = !0;
        } catch (t) {}
        var o = a.call(t);
        return n && (e ? (t[u] = r) : delete t[u]), o;
      };
    },
    7501: (t, e, r) => {
      var n = r(66655),
        o = r(8562),
        i = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  n(a(t), function (e) {
                    return i.call(t, e);
                  }));
            }
          : o;
      t.exports = u;
    },
    22926: (t, e, r) => {
      var n = r(83146),
        o = r(16265),
        i = r(44394),
        a = r(5851),
        u = r(87674),
        c = r(66203),
        l = r(97235),
        s = "[object Map]",
        f = "[object Promise]",
        p = "[object Set]",
        h = "[object WeakMap]",
        d = "[object DataView]",
        y = l(n),
        v = l(o),
        m = l(i),
        b = l(a),
        g = l(u),
        x = c;
      ((n && x(new n(new ArrayBuffer(1))) != d) ||
        (o && x(new o()) != s) ||
        (i && x(i.resolve()) != f) ||
        (a && x(new a()) != p) ||
        (u && x(new u()) != h)) &&
        (x = function (t) {
          var e = c(t),
            r = "[object Object]" == e ? t.constructor : void 0,
            n = r ? l(r) : "";
          if (n)
            switch (n) {
              case y:
                return d;
              case v:
                return s;
              case m:
                return f;
              case b:
                return p;
              case g:
                return h;
            }
          return e;
        }),
        (t.exports = x);
    },
    91741: (t) => {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    47460: (t, e, r) => {
      var n = r(76621),
        o = r(88636),
        i = r(5370),
        a = r(11874),
        u = r(94839),
        c = r(83347);
      t.exports = function (t, e, r) {
        for (var l = -1, s = (e = n(e, t)).length, f = !1; ++l < s; ) {
          var p = c(e[l]);
          if (!(f = null != t && r(t, p))) break;
          t = t[p];
        }
        return f || ++l != s
          ? f
          : !!(s = null == t ? 0 : t.length) &&
              u(s) &&
              a(p, s) &&
              (i(t) || o(t));
      };
    },
    32799: (t) => {
      var e = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    28201: (t, e, r) => {
      var n = r(2416);
      t.exports = function () {
        (this.__data__ = n ? n(null) : {}), (this.size = 0);
      };
    },
    72546: (t) => {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    39571: (t, e, r) => {
      var n = r(2416),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (n) {
          var r = e[t];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return o.call(e, t) ? e[t] : void 0;
      };
    },
    1273: (t, e, r) => {
      var n = r(2416),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : o.call(e, t);
      };
    },
    88925: (t, e, r) => {
      var n = r(2416);
      t.exports = function (t, e) {
        var r = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
    },
    79020: (t, e, r) => {
      var n = r(99513),
        o = r(88636),
        i = r(5370),
        a = n ? n.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return i(t) || o(t) || !!(a && t && t[a]);
      };
    },
    11874: (t) => {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, r) {
        var n = typeof t;
        return (
          !!(r = null == r ? 9007199254740991 : r) &&
          ("number" == n || ("symbol" != n && e.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < r
        );
      };
    },
    41757: (t, e, r) => {
      var n = r(35800),
        o = r(1161),
        i = r(11874),
        a = r(60486);
      t.exports = function (t, e, r) {
        if (!a(r)) return !1;
        var u = typeof e;
        return (
          !!("number" == u
            ? o(r) && i(e, r.length)
            : "string" == u && e in r) && n(r[e], t)
        );
      };
    },
    69002: (t, e, r) => {
      var n = r(5370),
        o = r(59123),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      t.exports = function (t, e) {
        if (n(t)) return !1;
        var r = typeof t;
        return (
          !(
            "number" != r &&
            "symbol" != r &&
            "boolean" != r &&
            null != t &&
            !o(t)
          ) ||
          a.test(t) ||
          !i.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    90151: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    44932: (t, e, r) => {
      var n,
        o = r(41326),
        i = (n = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + n
          : "";
      t.exports = function (t) {
        return !!i && i in t;
      };
    },
    66484: (t) => {
      var e = Object.prototype;
      t.exports = function (t) {
        var r = t && t.constructor;
        return t === (("function" == typeof r && r.prototype) || e);
      };
    },
    32923: (t, e, r) => {
      var n = r(60486);
      t.exports = function (t) {
        return t == t && !n(t);
      };
    },
    54471: (t) => {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    54782: (t, e, r) => {
      var n = r(32749),
        o = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return (
          !(r < 0) &&
          (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, !0)
        );
      };
    },
    33998: (t, e, r) => {
      var n = r(32749);
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return r < 0 ? void 0 : e[r][1];
      };
    },
    48351: (t, e, r) => {
      var n = r(32749);
      t.exports = function (t) {
        return n(this.__data__, t) > -1;
      };
    },
    76476: (t, e, r) => {
      var n = r(32749);
      t.exports = function (t, e) {
        var r = this.__data__,
          o = n(r, t);
        return o < 0 ? (++this.size, r.push([t, e])) : (r[o][1] = e), this;
      };
    },
    93554: (t, e, r) => {
      var n = r(43541),
        o = r(53619),
        i = r(16265);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new n(),
            map: new (i || o)(),
            string: new n(),
          });
      };
    },
    55349: (t, e, r) => {
      var n = r(38828);
      t.exports = function (t) {
        var e = n(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    69550: (t, e, r) => {
      var n = r(38828);
      t.exports = function (t) {
        return n(this, t).get(t);
      };
    },
    53393: (t, e, r) => {
      var n = r(38828);
      t.exports = function (t) {
        return n(this, t).has(t);
      };
    },
    1757: (t, e, r) => {
      var n = r(38828);
      t.exports = function (t, e) {
        var r = n(this, t),
          o = r.size;
        return r.set(t, e), (this.size += r.size == o ? 0 : 1), this;
      };
    },
    66634: (t) => {
      t.exports = function (t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t, n) {
            r[++e] = [n, t];
          }),
          r
        );
      };
    },
    52225: (t) => {
      t.exports = function (t, e) {
        return function (r) {
          return null != r && r[t] === e && (void 0 !== e || t in Object(r));
        };
      };
    },
    93326: (t, e, r) => {
      var n = r(73621);
      t.exports = function (t) {
        var e = n(t, function (t) {
            return 500 === r.size && r.clear(), t;
          }),
          r = e.cache;
        return e;
      };
    },
    2416: (t, e, r) => {
      var n = r(77568)(Object, "create");
      t.exports = n;
    },
    75784: (t, e, r) => {
      var n = r(65938)(Object.keys, Object);
      t.exports = n;
    },
    21971: (t, e, r) => {
      t = r.nmd(t);
      var n = r(32790),
        o = e && !e.nodeType && e,
        i = o && t && !t.nodeType && t,
        a = i && i.exports === o && n.process,
        u = (function () {
          try {
            var t = i && i.require && i.require("util").types;
            return t || (a && a.binding && a.binding("util"));
          } catch (t) {}
        })();
      t.exports = u;
    },
    92910: (t) => {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    65938: (t) => {
      t.exports = function (t, e) {
        return function (r) {
          return t(e(r));
        };
      };
    },
    89369: (t, e, r) => {
      var n = r(62902),
        o = Math.max;
      t.exports = function (t, e, r) {
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
            return (l[e] = r(c)), n(t, this, l);
          }
        );
      };
    },
    49656: (t, e, r) => {
      var n = r(32790),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = n || o || Function("return this")();
      t.exports = i;
    },
    7072: (t) => {
      t.exports = function (t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this;
      };
    },
    23766: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    50037: (t) => {
      t.exports = function (t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t) {
            r[++e] = t;
          }),
          r
        );
      };
    },
    22997: (t, e, r) => {
      var n = r(94304),
        o = r(77164)(n);
      t.exports = o;
    },
    77164: (t) => {
      var e = Date.now;
      t.exports = function (t) {
        var r = 0,
          n = 0;
        return function () {
          var o = e(),
            i = 16 - (o - n);
          if (((n = o), i > 0)) {
            if (++r >= 800) return arguments[0];
          } else r = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    8209: (t, e, r) => {
      var n = r(53619);
      t.exports = function () {
        (this.__data__ = new n()), (this.size = 0);
      };
    },
    72797: (t) => {
      t.exports = function (t) {
        var e = this.__data__,
          r = e.delete(t);
        return (this.size = e.size), r;
      };
    },
    1789: (t) => {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    9384: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    57086: (t, e, r) => {
      var n = r(53619),
        o = r(16265),
        i = r(3914);
      t.exports = function (t, e) {
        var r = this.__data__;
        if (r instanceof n) {
          var a = r.__data__;
          if (!o || a.length < 199)
            return a.push([t, e]), (this.size = ++r.size), this;
          r = this.__data__ = new i(a);
        }
        return r.set(t, e), (this.size = r.size), this;
      };
    },
    62095: (t) => {
      t.exports = function (t, e, r) {
        for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
        return -1;
      };
    },
    79525: (t, e, r) => {
      var n = r(68447),
        o = r(32799),
        i = r(28356);
      t.exports = function (t) {
        return o(t) ? i(t) : n(t);
      };
    },
    92018: (t, e, r) => {
      var n = r(93326),
        o =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        a = n(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(o, function (t, r, n, o) {
              e.push(n ? o.replace(i, "$1") : r || t);
            }),
            e
          );
        });
      t.exports = a;
    },
    83347: (t, e, r) => {
      var n = r(59123);
      t.exports = function (t) {
        if ("string" == typeof t || n(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -Infinity ? "-0" : e;
      };
    },
    97235: (t) => {
      var e = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return e.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      };
    },
    24839: (t) => {
      var e = /\s/;
      t.exports = function (t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)); );
        return r;
      };
    },
    28356: (t) => {
      var e = "\\ud800-\\udfff",
        r = "[" + e + "]",
        n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        o = "\\ud83c[\\udffb-\\udfff]",
        i = "[^" + e + "]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + n + "|" + o + ")" + "?",
        l = "[\\ufe0e\\ufe0f]?",
        s =
          l + c + ("(?:\\u200d(?:" + [i, a, u].join("|") + ")" + l + c + ")*"),
        f = "(?:" + [i + n + "?", n, a, u, r].join("|") + ")",
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
    76964: (t, e, r) => {
      var n = r(60486),
        o = r(76824),
        i = r(61056),
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
        function b(e) {
          var r = c,
            n = l;
          return (c = l = void 0), (d = e), (f = t.apply(n, r));
        }
        function g(t) {
          var r = t - h;
          return void 0 === h || r >= e || r < 0 || (v && t - d >= s);
        }
        function x() {
          var t = o();
          if (g(t)) return w(t);
          p = setTimeout(
            x,
            (function (t) {
              var r = e - (t - h);
              return v ? u(r, s - (t - d)) : r;
            })(t),
          );
        }
        function w(t) {
          return (p = void 0), m && c ? b(t) : ((c = l = void 0), f);
        }
        function O() {
          var t = o(),
            r = g(t);
          if (((c = arguments), (l = this), (h = t), r)) {
            if (void 0 === p)
              return (function (t) {
                return (d = t), (p = setTimeout(x, e)), y ? b(t) : f;
              })(h);
            if (v) return clearTimeout(p), (p = setTimeout(x, e)), b(h);
          }
          return void 0 === p && (p = setTimeout(x, e)), f;
        }
        return (
          (e = i(e) || 0),
          n(r) &&
            ((y = !!r.leading),
            (s = (v = "maxWait" in r) ? a(i(r.maxWait) || 0, e) : s),
            (m = "trailing" in r ? !!r.trailing : m)),
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
    35800: (t) => {
      t.exports = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    55084: (t, e, r) => {
      var n = r(63889),
        o = r(27157),
        i = r(60647),
        a = r(5370),
        u = r(41757);
      t.exports = function (t, e, r) {
        var c = a(t) ? n : o;
        return r && u(t, e, r) && (e = void 0), c(t, i(e, 3));
      };
    },
    29200: (t, e, r) => {
      var n = r(51897)(r(29156));
      t.exports = n;
    },
    29156: (t, e, r) => {
      var n = r(59861),
        o = r(60647),
        i = r(41151),
        a = Math.max;
      t.exports = function (t, e, r) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == r ? 0 : i(r);
        return c < 0 && (c = a(u + c, 0)), n(t, o(e, 3), c);
      };
    },
    6392: (t, e, r) => {
      var n = r(85720),
        o = r(81319);
      t.exports = function (t, e) {
        return n(o(t, e), 1);
      };
    },
    18310: (t, e, r) => {
      var n = r(16986);
      t.exports = function (t, e, r) {
        var o = null == t ? void 0 : n(t, e);
        return void 0 === o ? r : o;
      };
    },
    61156: (t, e, r) => {
      var n = r(92217),
        o = r(47460);
      t.exports = function (t, e) {
        return null != t && o(t, e, n);
      };
    },
    7414: (t) => {
      t.exports = function (t) {
        return t;
      };
    },
    88636: (t, e, r) => {
      var n = r(74930),
        o = r(95753),
        i = Object.prototype,
        a = i.hasOwnProperty,
        u = i.propertyIsEnumerable,
        c = n(
          (function () {
            return arguments;
          })(),
        )
          ? n
          : function (t) {
              return o(t) && a.call(t, "callee") && !u.call(t, "callee");
            };
      t.exports = c;
    },
    5370: (t) => {
      var e = Array.isArray;
      t.exports = e;
    },
    1161: (t, e, r) => {
      var n = r(8889),
        o = r(94839);
      t.exports = function (t) {
        return null != t && o(t.length) && !n(t);
      };
    },
    62588: (t, e, r) => {
      var n = r(66203),
        o = r(95753);
      t.exports = function (t) {
        return !0 === t || !1 === t || (o(t) && "[object Boolean]" == n(t));
      };
    },
    43800: (t, e, r) => {
      t = r.nmd(t);
      var n = r(49656),
        o = r(88240),
        i = e && !e.nodeType && e,
        a = i && t && !t.nodeType && t,
        u = a && a.exports === i ? n.Buffer : void 0,
        c = (u ? u.isBuffer : void 0) || o;
      t.exports = c;
    },
    49198: (t, e, r) => {
      var n = r(10358);
      t.exports = function (t, e) {
        return n(t, e);
      };
    },
    8889: (t, e, r) => {
      var n = r(66203),
        o = r(60486);
      t.exports = function (t) {
        if (!o(t)) return !1;
        var e = n(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    94839: (t) => {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    98176: (t, e, r) => {
      var n = r(554);
      t.exports = function (t) {
        return n(t) && t != +t;
      };
    },
    38716: (t) => {
      t.exports = function (t) {
        return null == t;
      };
    },
    554: (t, e, r) => {
      var n = r(66203),
        o = r(95753);
      t.exports = function (t) {
        return "number" == typeof t || (o(t) && "[object Number]" == n(t));
      };
    },
    60486: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    95753: (t) => {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    38655: (t, e, r) => {
      var n = r(66203),
        o = r(75440),
        i = r(95753),
        a = Function.prototype,
        u = Object.prototype,
        c = a.toString,
        l = u.hasOwnProperty,
        s = c.call(Object);
      t.exports = function (t) {
        if (!i(t) || "[object Object]" != n(t)) return !1;
        var e = o(t);
        if (null === e) return !0;
        var r = l.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && c.call(r) == s;
      };
    },
    30392: (t, e, r) => {
      var n = r(66203),
        o = r(5370),
        i = r(95753);
      t.exports = function (t) {
        return (
          "string" == typeof t || (!o(t) && i(t) && "[object String]" == n(t))
        );
      };
    },
    59123: (t, e, r) => {
      var n = r(66203),
        o = r(95753);
      t.exports = function (t) {
        return "symbol" == typeof t || (o(t) && "[object Symbol]" == n(t));
      };
    },
    85946: (t, e, r) => {
      var n = r(55077),
        o = r(43630),
        i = r(21971),
        a = i && i.isTypedArray,
        u = a ? o(a) : n;
      t.exports = u;
    },
    34840: (t, e, r) => {
      var n = r(93914),
        o = r(95571),
        i = r(1161);
      t.exports = function (t) {
        return i(t) ? n(t) : o(t);
      };
    },
    54794: (t) => {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    81319: (t, e, r) => {
      var n = r(366),
        o = r(60647),
        i = r(3007),
        a = r(5370);
      t.exports = function (t, e) {
        return (a(t) ? n : i)(t, o(e, 3));
      };
    },
    11217: (t, e, r) => {
      var n = r(84423),
        o = r(53120),
        i = r(60647);
      t.exports = function (t, e) {
        var r = {};
        return (
          (e = i(e, 3)),
          o(t, function (t, o, i) {
            n(r, o, e(t, o, i));
          }),
          r
        );
      };
    },
    24149: (t, e, r) => {
      var n = r(17425),
        o = r(6515),
        i = r(7414);
      t.exports = function (t) {
        return t && t.length ? n(t, i, o) : void 0;
      };
    },
    73621: (t, e, r) => {
      var n = r(3914);
      function o(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError("Expected a function");
        var r = function () {
          var n = arguments,
            o = e ? e.apply(this, n) : n[0],
            i = r.cache;
          if (i.has(o)) return i.get(o);
          var a = t.apply(this, n);
          return (r.cache = i.set(o, a) || i), a;
        };
        return (r.cache = new (o.Cache || n)()), r;
      }
      (o.Cache = n), (t.exports = o);
    },
    65793: (t, e, r) => {
      var n = r(17425),
        o = r(66983),
        i = r(7414);
      t.exports = function (t) {
        return t && t.length ? n(t, i, o) : void 0;
      };
    },
    76016: (t) => {
      t.exports = function () {};
    },
    76824: (t, e, r) => {
      var n = r(49656);
      t.exports = function () {
        return n.Date.now();
      };
    },
    47305: (t, e, r) => {
      var n = r(28873),
        o = r(97844),
        i = r(69002),
        a = r(83347);
      t.exports = function (t) {
        return i(t) ? n(a(t)) : o(t);
      };
    },
    76072: (t, e, r) => {
      var n = r(97506)();
      t.exports = n;
    },
    45446: (t, e, r) => {
      var n = r(13412),
        o = r(60647),
        i = r(68578),
        a = r(5370),
        u = r(41757);
      t.exports = function (t, e, r) {
        var c = a(t) ? n : i;
        return r && u(t, e, r) && (e = void 0), c(t, o(e, 3));
      };
    },
    2045: (t, e, r) => {
      var n = r(85720),
        o = r(79971),
        i = r(52162),
        a = r(41757),
        u = i(function (t, e) {
          if (null == t) return [];
          var r = e.length;
          return (
            r > 1 && a(t, e[0], e[1])
              ? (e = [])
              : r > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
            o(t, n(e, 1), [])
          );
        });
      t.exports = u;
    },
    8562: (t) => {
      t.exports = function () {
        return [];
      };
    },
    88240: (t) => {
      t.exports = function () {
        return !1;
      };
    },
    48679: (t, e, r) => {
      var n = r(76964),
        o = r(60486);
      t.exports = function (t, e, r) {
        var i = !0,
          a = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (
          o(r) &&
            ((i = "leading" in r ? !!r.leading : i),
            (a = "trailing" in r ? !!r.trailing : a)),
          n(t, e, { leading: i, maxWait: e, trailing: a })
        );
      };
    },
    69419: (t, e, r) => {
      var n = r(61056),
        o = 1 / 0;
      t.exports = function (t) {
        return t
          ? (t = n(t)) === o || t === -1 / 0
            ? 17976931348623157e292 * (t < 0 ? -1 : 1)
            : t == t
            ? t
            : 0
          : 0 === t
          ? t
          : 0;
      };
    },
    41151: (t, e, r) => {
      var n = r(69419);
      t.exports = function (t) {
        var e = n(t),
          r = e % 1;
        return e == e ? (r ? e - r : e) : 0;
      };
    },
    61056: (t, e, r) => {
      var n = r(83147),
        o = r(60486),
        i = r(59123),
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
        t = n(t);
        var r = u.test(t);
        return r || c.test(t) ? l(t.slice(2), r ? 2 : 8) : a.test(t) ? NaN : +t;
      };
    },
    92938: (t, e, r) => {
      var n = r(33370);
      t.exports = function (t) {
        return null == t ? "" : n(t);
      };
    },
    87518: (t, e, r) => {
      var n = r(60647),
        o = r(94744);
      t.exports = function (t, e) {
        return t && t.length ? o(t, n(e, 2)) : [];
      };
    },
    70758: (t, e, r) => {
      var n = r(12133)("toUpperCase");
      t.exports = n;
    },
    36904: (t, e, r) => {
      "use strict";
      function n() {
        var t = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state,
        );
        null != t && this.setState(t);
      }
      function o(t) {
        this.setState(
          function (e) {
            var r = this.constructor.getDerivedStateFromProps(t, e);
            return null != r ? r : null;
          }.bind(this),
        );
      }
      function i(t, e) {
        try {
          var r = this.props,
            n = this.state;
          (this.props = t),
            (this.state = e),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(r, n));
        } finally {
          (this.props = r), (this.state = n);
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
        var r = null,
          a = null,
          u = null;
        if (
          ("function" == typeof e.componentWillMount
            ? (r = "componentWillMount")
            : "function" == typeof e.UNSAFE_componentWillMount &&
              (r = "UNSAFE_componentWillMount"),
          "function" == typeof e.componentWillReceiveProps
            ? (a = "componentWillReceiveProps")
            : "function" == typeof e.UNSAFE_componentWillReceiveProps &&
              (a = "UNSAFE_componentWillReceiveProps"),
          "function" == typeof e.componentWillUpdate
            ? (u = "componentWillUpdate")
            : "function" == typeof e.UNSAFE_componentWillUpdate &&
              (u = "UNSAFE_componentWillUpdate"),
          null !== r || null !== a || null !== u)
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
              (null !== r ? "\n  " + r : "") +
              (null !== a ? "\n  " + a : "") +
              (null !== u ? "\n  " + u : "") +
              "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",
          );
        }
        if (
          ("function" == typeof t.getDerivedStateFromProps &&
            ((e.componentWillMount = n), (e.componentWillReceiveProps = o)),
          "function" == typeof e.getSnapshotBeforeUpdate)
        ) {
          if ("function" != typeof e.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
            );
          e.componentWillUpdate = i;
          var s = e.componentDidUpdate;
          e.componentDidUpdate = function (t, e, r) {
            var n = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : r;
            s.call(this, t, e, n);
          };
        }
        return t;
      }
      r.r(e),
        r.d(e, { polyfill: () => a }),
        (n.__suppressDeprecationWarning = !0),
        (o.__suppressDeprecationWarning = !0),
        (i.__suppressDeprecationWarning = !0);
    },
    15819: (t, e, r) => {
      "use strict";
      r.d(e, { ZP: () => ae, bO: () => et });
      var n = r(47427),
        o = r(25816),
        i = r.n(o),
        a = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty;
      function l(t, e) {
        return function (r, n, o) {
          return t(r, n, o) && e(r, n, o);
        };
      }
      function s(t) {
        return function (e, r, n) {
          if (!e || !r || "object" != typeof e || "object" != typeof r)
            return t(e, r, n);
          var o = n.cache,
            i = o.get(e),
            a = o.get(r);
          if (i && a) return i === r && a === e;
          o.set(e, r), o.set(r, e);
          var u = t(e, r, n);
          return o.delete(e), o.delete(r), u;
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
      function b(t, e) {
        return h(t.getTime(), e.getTime());
      }
      function g(t, e, r) {
        if (t.size !== e.size) return !1;
        for (
          var n, o, i = {}, a = t.entries(), u = 0;
          (n = a.next()) && !n.done;

        ) {
          for (
            var c = e.entries(), l = !1, s = 0;
            (o = c.next()) && !o.done;

          ) {
            var f = n.value,
              p = f[0],
              h = f[1],
              d = o.value,
              y = d[0],
              v = d[1];
            l ||
              i[s] ||
              !(l =
                r.equals(p, y, u, s, t, e, r) &&
                r.equals(h, v, p, y, t, e, r)) ||
              (i[s] = !0),
              s++;
          }
          if (!l) return !1;
          u++;
        }
        return !0;
      }
      function x(t, e, r) {
        var n,
          o = v(t),
          i = o.length;
        if (v(e).length !== i) return !1;
        for (; i-- > 0; ) {
          if (
            (n = o[i]) === d &&
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
          o,
          i,
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
            ((o = y(t, n)),
            (i = y(e, n)),
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
      function j(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function S(t, e, r) {
        if (t.size !== e.size) return !1;
        for (var n, o, i = {}, a = t.values(); (n = a.next()) && !n.done; ) {
          for (var u = e.values(), c = !1, l = 0; (o = u.next()) && !o.done; )
            c ||
              i[l] ||
              !(c = r.equals(n.value, o.value, n.value, o.value, t, e, r)) ||
              (i[l] = !0),
              l++;
          if (!c) return !1;
        }
        return !0;
      }
      function A(t, e) {
        var r = t.length;
        if (e.length !== r) return !1;
        for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var E = "[object Arguments]",
        P = "[object Boolean]",
        k = "[object Date]",
        M = "[object Map]",
        _ = "[object Number]",
        T = "[object Object]",
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
          r = t.circular,
          n = void 0 !== r && r,
          o = t.createInternalComparator,
          i = t.createState,
          a = t.strict,
          u = void 0 !== a && a,
          c = (function (t) {
            var e = t.circular,
              r = t.createCustomConfig,
              n = t.strict,
              o = {
                areArraysEqual: n ? w : m,
                areDatesEqual: b,
                areMapsEqual: n ? l(g, w) : g,
                areObjectsEqual: n ? w : x,
                arePrimitiveWrappersEqual: O,
                areRegExpsEqual: j,
                areSetsEqual: n ? l(S, w) : S,
                areTypedArraysEqual: n ? w : A,
              };
            if ((r && (o = L({}, o, r(o))), e)) {
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
              r = t.areDatesEqual,
              n = t.areMapsEqual,
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
              if (f === Date) return r(t, l, s);
              if (f === RegExp) return a(t, l, s);
              if (f === Map) return n(t, l, s);
              if (f === Set) return u(t, l, s);
              var p = R(t);
              return p === k
                ? r(t, l, s)
                : p === C
                ? a(t, l, s)
                : p === M
                ? n(t, l, s)
                : p === N
                ? u(t, l, s)
                : p === T
                ? "function" != typeof t.then &&
                  "function" != typeof l.then &&
                  o(t, l, s)
                : p === E
                ? o(t, l, s)
                : (p === P || p === _ || p === D) && i(t, l, s);
            };
          })(c);
        return (function (t) {
          var e = t.circular,
            r = t.comparator,
            n = t.createState,
            o = t.equals,
            i = t.strict;
          if (n)
            return function (t, a) {
              var u = n(),
                c = u.cache,
                l = void 0 === c ? (e ? new WeakMap() : void 0) : c,
                s = u.meta;
              return r(t, a, { cache: l, equals: o, meta: s, strict: i });
            };
          if (e)
            return function (t, e) {
              return r(t, e, {
                cache: new WeakMap(),
                equals: o,
                meta: void 0,
                strict: i,
              });
            };
          var a = { cache: void 0, equals: o, meta: void 0, strict: i };
          return function (t, e) {
            return r(t, e, a);
          };
        })({
          circular: n,
          comparator: f,
          createState: i,
          equals: o
            ? o(f)
            : ((e = f),
              function (t, r, n, o, i, a, u) {
                return e(t, r, u);
              }),
          strict: u,
        });
      }
      function F(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = -1;
        requestAnimationFrame(function n(o) {
          r < 0 && (r = o),
            o - r > e
              ? (t(o), (r = -1))
              : (function (t) {
                  "undefined" != typeof requestAnimationFrame &&
                    requestAnimationFrame(t);
                })(n);
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function q() {
        var t = function () {
            return null;
          },
          e = !1,
          r = function r(n) {
            if (!e) {
              if (Array.isArray(n)) {
                if (!n.length) return;
                var o = W(n),
                  i = o[0],
                  a = o.slice(1);
                return "number" == typeof i
                  ? void F(r.bind(null, a), i)
                  : (r(i), void F(r.bind(null, a)));
              }
              "object" === $(n) && t(n), "function" == typeof n && n();
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
      function H(t, e) {
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
      function V(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? H(Object(r), !0).forEach(function (e) {
                X(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : H(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function X(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== G(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== G(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === G(e) ? e : String(e);
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
      var Y = ["Webkit", "Moz", "O", "ms"],
        K = ["-webkit-", "-moz-", "-o-", "-ms-"],
        J = ["transform", "transformOrigin", "transition"],
        Q = function (t) {
          return t;
        },
        tt = function (t, e) {
          return Object.keys(e).reduce(function (r, n) {
            return V(V({}, r), {}, X({}, n, t(n, e[n])));
          }, {});
        },
        et = function (t) {
          return Object.keys(t).reduce(function (t, e) {
            return V(
              V({}, t),
              (function (t, e) {
                if (-1 === J.indexOf(t))
                  return X({}, t, Number.isNaN(e) ? 0 : e);
                var r = "transition" === t,
                  n = t.replace(/(\w)/, function (t) {
                    return t.toUpperCase();
                  }),
                  o = e;
                return Y.reduce(function (t, i, a) {
                  return (
                    r &&
                      (o = e.replace(
                        /(transform|transform-origin)/gim,
                        "".concat(K[a], "$1"),
                      )),
                    V(V({}, t), {}, X({}, i + n, o))
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
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
            o = e[1],
            i = e[2],
            a = e[3];
          if (1 === e.length)
            switch (e[0]) {
              case "linear":
                (n = 0), (o = 0), (i = 1), (a = 1);
                break;
              case "ease":
                (n = 0.25), (o = 0.1), (i = 0.25), (a = 1);
                break;
              case "ease-in":
                (n = 0.42), (o = 0), (i = 1), (a = 1);
                break;
              case "ease-out":
                (n = 0.42), (o = 0), (i = 0.58), (a = 1);
                break;
              case "ease-in-out":
                (n = 0), (o = 0), (i = 0.58), (a = 1);
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
                  (n = c[0]), (o = c[1]), (i = c[2]), (a = c[3]);
                }
            }
          [n, i, o, a].every(function (t) {
            return "number" == typeof t && t >= 0 && t <= 1;
          });
          var l,
            s,
            f = st(n, i),
            p = st(o, a),
            h =
              ((l = n),
              (s = i),
              function (t) {
                var e = ct(l, s),
                  r = [].concat(
                    ot(
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
              for (var e, r = t > 1 ? 1 : t, n = r, o = 0; o < 8; ++o) {
                var i = f(n) - r,
                  a = h(n);
                if (Math.abs(i - r) < ut || a < ut) return p(n);
                n = (e = n - i / a) > 1 ? 1 : e < 0 ? 0 : e;
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
                    o = void 0 === n ? 8 : n,
                    i = t.dt,
                    a = void 0 === i ? 17 : i,
                    u = function (t, e, n) {
                      var i = n + ((-(t - e) * r - n * o) * a) / 1e3,
                        u = (n * a) / 1e3 + t;
                      return Math.abs(u - e) < ut && Math.abs(i) < ut
                        ? [e, 0]
                        : [u, i];
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
          gt(t) ||
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
      function bt(t, e) {
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          gt(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function gt(t, e) {
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
        jt = function t(e, r, n) {
          var o = tt(function (t, r) {
            if (Ot(r)) {
              var n = bt(e(r.from, r.to, r.velocity), 2),
                o = n[0],
                i = n[1];
              return vt(vt({}, r), {}, { from: o, velocity: i });
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
                        velocity: wt(e.velocity, o[t].velocity, n),
                        from: wt(e.from, o[t].from, n),
                      },
                    )
                  : e;
              }, r)
            : t(e, o, n - 1);
        };
      const St = function (t, e, r, n, o) {
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
                var i = (n - u) / r.dt;
                (f = jt(r, f, i)),
                  o(
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
            : function (i) {
                c || (c = i);
                var a = (i - c) / n,
                  u = tt(function (t, e) {
                    return wt.apply(void 0, dt(e).concat([r(a)]));
                  }, s);
                if ((o(vt(vt(vt({}, t), e), u)), a < 1))
                  p = requestAnimationFrame(h);
                else {
                  var l = tt(function (t, e) {
                    return wt.apply(void 0, dt(e).concat([r(1)]));
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
      function At(t) {
        return (
          (At =
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
          At(t)
        );
      }
      var Et = [
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
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function _t(t, e) {
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
            ? _t(Object(r), !0).forEach(function (e) {
                Ct(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : _t(Object(r)).forEach(function (e) {
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
          (e = Dt(e)) in t
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
      function Nt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Dt(n.key), n);
        }
      }
      function Dt(t) {
        var e = (function (t, e) {
          if ("object" !== At(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== At(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === At(e) ? e : String(e);
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
          var r,
            n = zt(t);
          if (e) {
            var o = zt(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Lt(this, r);
        };
      }
      function Lt(t, e) {
        if (e && ("object" === At(e) || "function" == typeof e)) return e;
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
          r,
          o,
          i = Bt(a);
        function a(t, e) {
          var r;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          var n = (r = i.call(this, t, e)).props,
            o = n.isActive,
            u = n.attributeName,
            c = n.from,
            l = n.to,
            s = n.steps,
            f = n.children,
            p = n.duration;
          if (
            ((r.handleStyleChange = r.handleStyleChange.bind(Rt(r))),
            (r.changeStyle = r.changeStyle.bind(Rt(r))),
            !o || p <= 0)
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
                  o = e.attributeName,
                  i = e.shouldReAnimate,
                  a = e.to,
                  u = e.from,
                  c = this.state.style;
                if (n)
                  if (r) {
                    if (!(z(t.to, a) && t.canBegin && t.isActive)) {
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
                        Tt(Tt({}, this.props), {}, { from: s, begin: 0 }),
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
                  r = t.from,
                  n = t.to,
                  o = t.duration,
                  i = t.easing,
                  a = t.begin,
                  u = t.onAnimationEnd,
                  c = t.onAnimationStart,
                  l = St(r, n, pt(i), o, this.changeStyle);
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
                  r = t.steps,
                  n = t.begin,
                  o = t.onAnimationStart,
                  i = r[0],
                  a = i.style,
                  u = i.duration,
                  c = void 0 === u ? 0 : u;
                return this.manager.start(
                  [o].concat(
                    kt(
                      r.reduce(
                        function (t, n, o) {
                          if (0 === o) return t;
                          var i = n.duration,
                            a = n.easing,
                            u = void 0 === a ? "ease" : a,
                            c = n.style,
                            l = n.properties,
                            s = n.onAnimationEnd,
                            f = o > 0 ? r[o - 1] : n,
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
                          var h = rt(p, i, u),
                            d = Tt(
                              Tt(Tt({}, f.style), c),
                              {},
                              { transition: h },
                            );
                          return [].concat(kt(t), [d, i, s]).filter(Q);
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
                this.manager || (this.manager = q());
                var e = t.begin,
                  r = t.duration,
                  n = t.attributeName,
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
                    var f = n ? Ct({}, n, o) : o,
                      p = rt(Object.keys(f), r, i);
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
                  o = (t.attributeName, t.easing, t.isActive),
                  i =
                    (t.steps,
                    t.from,
                    t.to,
                    t.canBegin,
                    t.onAnimationEnd,
                    t.shouldReAnimate,
                    t.onAnimationReStart,
                    Pt(t, Et)),
                  a = n.Children.count(e),
                  u = et(this.state.style);
                if ("function" == typeof e) return e(u);
                if (!o || 0 === a || r <= 0) return e;
                var c = function (t) {
                  var e = t.props,
                    r = e.style,
                    o = void 0 === r ? {} : r,
                    a = e.className;
                  return (0, n.cloneElement)(
                    t,
                    Tt(
                      Tt({}, i),
                      {},
                      { style: Tt(Tt({}, o), u), className: a },
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
          ]) && Nt(e.prototype, r),
          o && Nt(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(n.PureComponent);
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
      const Ft = Ut;
      var $t = r(91514),
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
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          qt.apply(this, arguments)
        );
      }
      function Gt(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function Ht(t, e) {
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
      function Vt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ht(Object(r), !0).forEach(function (e) {
                te(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Ht(Object(r)).forEach(function (e) {
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
            Object.defineProperty(t, ee(n.key), n);
        }
      }
      function Yt(t, e) {
        return (
          (Yt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Yt(t, e)
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
          var r,
            n = Qt(t);
          if (e) {
            var o = Qt(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === Zt(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return Jt(t);
          })(this, r);
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
      function te(t, e, r) {
        return (
          (e = ee(e)) in t
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
      function ee(t) {
        var e = (function (t, e) {
          if ("object" !== Zt(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== Zt(n)) return n;
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
      var re = function () {
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
        ne = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Yt(t, e);
          })(a, t);
          var e,
            r,
            o,
            i = Kt(a);
          function a() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              te(Jt((t = i.call(this))), "handleEnter", function (e, r) {
                var n = t.props,
                  o = n.appearOptions,
                  i = n.enterOptions;
                t.handleStyleActive(r ? o : i);
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
                      Vt(Vt({}, t), {}, { onAnimationEnd: e, isActive: !0 }),
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
                  return re(e) + re(r) + re(n);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    r = e.children,
                    o =
                      (e.appearOptions,
                      e.enterOptions,
                      e.leaveOptions,
                      Gt(e, Wt));
                  return n.createElement(
                    $t.Transition,
                    qt({}, o, {
                      onEnter: this.handleEnter,
                      onExit: this.handleExit,
                      timeout: this.parseTimeout(),
                    }),
                    function () {
                      return n.createElement(Ft, t.state, n.Children.only(r));
                    },
                  );
                },
              },
            ]) && Xt(e.prototype, r),
            o && Xt(e, o),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(n.Component);
      ne.propTypes = {
        appearOptions: i().object,
        enterOptions: i().object,
        leaveOptions: i().object,
        children: i().element,
      };
      const oe = ne;
      function ie(t) {
        var e = t.component,
          r = t.children,
          o = t.appear,
          i = t.enter,
          a = t.leave;
        return n.createElement(
          $t.TransitionGroup,
          { component: e },
          n.Children.map(r, function (t, e) {
            return n.createElement(
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
      const ae = Ft;
    },
    50268: (t, e, r) => {
      "use strict";
      (e.__esModule = !0), (e.default = void 0);
      !(function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
              var n =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(t, r)
                  : {};
              n.get || n.set ? Object.defineProperty(e, r, n) : (e[r] = t[r]);
            }
        e.default = t;
      })(r(25816));
      var n = u(r(2610)),
        o = u(r(40441)),
        i = u(r(47427)),
        a = u(r(65403));
      r(1042);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function c() {
        return (
          (c =
            Object.assign ||
            function (t) {
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
      var l = function (t, e) {
          return (
            t &&
            e &&
            e.split(" ").forEach(function (e) {
              return (0, n.default)(t, e);
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
          var e, r;
          function n() {
            for (
              var e, r = arguments.length, n = new Array(r), o = 0;
              o < r;
              o++
            )
              n[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(n)) || this).onEnter =
                function (t, r) {
                  var n = e.getClassNames(r ? "appear" : "enter").className;
                  e.removeClasses(t, "exit"),
                    l(t, n),
                    e.props.onEnter && e.props.onEnter(t, r);
                }),
              (e.onEntering = function (t, r) {
                var n = e.getClassNames(r ? "appear" : "enter").activeClassName;
                e.reflowAndAddClass(t, n),
                  e.props.onEntering && e.props.onEntering(t, r);
              }),
              (e.onEntered = function (t, r) {
                var n = e.getClassNames("appear").doneClassName,
                  o = e.getClassNames("enter").doneClassName,
                  i = r ? n + " " + o : o;
                e.removeClasses(t, r ? "appear" : "enter"),
                  l(t, i),
                  e.props.onEntered && e.props.onEntered(t, r);
              }),
              (e.onExit = function (t) {
                var r = e.getClassNames("exit").className;
                e.removeClasses(t, "appear"),
                  e.removeClasses(t, "enter"),
                  l(t, r),
                  e.props.onExit && e.props.onExit(t);
              }),
              (e.onExiting = function (t) {
                var r = e.getClassNames("exit").activeClassName;
                e.reflowAndAddClass(t, r),
                  e.props.onExiting && e.props.onExiting(t);
              }),
              (e.onExited = function (t) {
                var r = e.getClassNames("exit").doneClassName;
                e.removeClasses(t, "exit"),
                  l(t, r),
                  e.props.onExited && e.props.onExited(t);
              }),
              (e.getClassNames = function (t) {
                var r = e.props.classNames,
                  n = "string" == typeof r,
                  o = n ? (n && r ? r + "-" : "") + t : r[t];
                return {
                  className: o,
                  activeClassName: n ? o + "-active" : r[t + "Active"],
                  doneClassName: n ? o + "-done" : r[t + "Done"],
                };
              }),
              e
            );
          }
          (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var o = n.prototype;
          return (
            (o.removeClasses = function (t, e) {
              var r = this.getClassNames(e),
                n = r.className,
                o = r.activeClassName,
                i = r.doneClassName;
              n && s(t, n), o && s(t, o), i && s(t, i);
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
            n
          );
        })(i.default.Component);
      (f.defaultProps = { classNames: "" }), (f.propTypes = {});
      var p = f;
      (e.default = p), (t.exports = e.default);
    },
    35994: (t, e, r) => {
      "use strict";
      (e.__esModule = !0), (e.default = void 0);
      a(r(25816));
      var n = a(r(47427)),
        o = r(42287),
        i = a(r(1802));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var u = (function (t) {
        var e, r;
        function a() {
          for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            ((e = t.call.apply(t, [this].concat(n)) || this).handleEnter =
              function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n];
                return e.handleLifecycle("onEnter", 0, r);
              }),
            (e.handleEntering = function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return e.handleLifecycle("onEntering", 0, r);
            }),
            (e.handleEntered = function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return e.handleLifecycle("onEntered", 0, r);
            }),
            (e.handleExit = function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return e.handleLifecycle("onExit", 1, r);
            }),
            (e.handleExiting = function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return e.handleLifecycle("onExiting", 1, r);
            }),
            (e.handleExited = function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return e.handleLifecycle("onExited", 1, r);
            }),
            e
          );
        }
        (r = t),
          ((e = a).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = r);
        var u = a.prototype;
        return (
          (u.handleLifecycle = function (t, e, r) {
            var i,
              a = this.props.children,
              u = n.default.Children.toArray(a)[e];
            u.props[t] && (i = u.props)[t].apply(i, r),
              this.props[t] && this.props[t]((0, o.findDOMNode)(this));
          }),
          (u.render = function () {
            var t = this.props,
              e = t.children,
              r = t.in,
              o = (function (t, e) {
                if (null == t) return {};
                var r,
                  n,
                  o = {},
                  i = Object.keys(t);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                return o;
              })(t, ["children", "in"]),
              a = n.default.Children.toArray(e),
              u = a[0],
              c = a[1];
            return (
              delete o.onEnter,
              delete o.onEntering,
              delete o.onEntered,
              delete o.onExit,
              delete o.onExiting,
              delete o.onExited,
              n.default.createElement(
                i.default,
                o,
                r
                  ? n.default.cloneElement(u, {
                      key: "first",
                      onEnter: this.handleEnter,
                      onEntering: this.handleEntering,
                      onEntered: this.handleEntered,
                    })
                  : n.default.cloneElement(c, {
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
      })(n.default.Component);
      u.propTypes = {};
      var c = u;
      (e.default = c), (t.exports = e.default);
    },
    65403: (t, e, r) => {
      "use strict";
      (e.__esModule = !0),
        (e.default =
          e.EXITING =
          e.ENTERED =
          e.ENTERING =
          e.EXITED =
          e.UNMOUNTED =
            void 0);
      var n = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t)
              if (Object.prototype.hasOwnProperty.call(t, r)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(t, r)
                    : {};
                n.get || n.set ? Object.defineProperty(e, r, n) : (e[r] = t[r]);
              }
          return (e.default = t), e;
        })(r(25816)),
        o = u(r(47427)),
        i = u(r(42287)),
        a = r(36904);
      r(1042);
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
        var e, r;
        function n(e, r) {
          var n;
          n = t.call(this, e, r) || this;
          var o,
            i = r.transitionGroup,
            a = i && !i.isMounting ? e.enter : e.appear;
          return (
            (n.appearStatus = null),
            e.in
              ? a
                ? ((o = l), (n.appearStatus = s))
                : (o = f)
              : (o = e.unmountOnExit || e.mountOnEnter ? c : l),
            (n.state = { status: o }),
            (n.nextCallback = null),
            n
          );
        }
        (r = t),
          ((e = n).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = r);
        var a = n.prototype;
        return (
          (a.getChildContext = function () {
            return { transitionGroup: null };
          }),
          (n.getDerivedStateFromProps = function (t, e) {
            return t.in && e.status === c ? { status: l } : null;
          }),
          (a.componentDidMount = function () {
            this.updateStatus(!0, this.appearStatus);
          }),
          (a.componentDidUpdate = function (t) {
            var e = null;
            if (t !== this.props) {
              var r = this.state.status;
              this.props.in
                ? r !== s && r !== f && (e = s)
                : (r !== s && r !== f) || (e = p);
            }
            this.updateStatus(!1, e);
          }),
          (a.componentWillUnmount = function () {
            this.cancelNextCallback();
          }),
          (a.getTimeouts = function () {
            var t,
              e,
              r,
              n = this.props.timeout;
            return (
              (t = e = r = n),
              null != n &&
                "number" != typeof n &&
                ((t = n.exit),
                (e = n.enter),
                (r = void 0 !== n.appear ? n.appear : e)),
              { exit: t, enter: e, appear: r }
            );
          }),
          (a.updateStatus = function (t, e) {
            if ((void 0 === t && (t = !1), null !== e)) {
              this.cancelNextCallback();
              var r = i.default.findDOMNode(this);
              e === s ? this.performEnter(r, t) : this.performExit(r);
            } else
              this.props.unmountOnExit &&
                this.state.status === l &&
                this.setState({ status: c });
          }),
          (a.performEnter = function (t, e) {
            var r = this,
              n = this.props.enter,
              o = this.context.transitionGroup
                ? this.context.transitionGroup.isMounting
                : e,
              i = this.getTimeouts(),
              a = o ? i.appear : i.enter;
            e || n
              ? (this.props.onEnter(t, o),
                this.safeSetState({ status: s }, function () {
                  r.props.onEntering(t, o),
                    r.onTransitionEnd(t, a, function () {
                      r.safeSetState({ status: f }, function () {
                        r.props.onEntered(t, o);
                      });
                    });
                }))
              : this.safeSetState({ status: f }, function () {
                  r.props.onEntered(t);
                });
          }),
          (a.performExit = function (t) {
            var e = this,
              r = this.props.exit,
              n = this.getTimeouts();
            r
              ? (this.props.onExit(t),
                this.safeSetState({ status: p }, function () {
                  e.props.onExiting(t),
                    e.onTransitionEnd(t, n.exit, function () {
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
              r = !0;
            return (
              (this.nextCallback = function (n) {
                r && ((r = !1), (e.nextCallback = null), t(n));
              }),
              (this.nextCallback.cancel = function () {
                r = !1;
              }),
              this.nextCallback
            );
          }),
          (a.onTransitionEnd = function (t, e, r) {
            this.setNextCallback(r);
            var n = null == e && !this.props.addEndListener;
            t && !n
              ? (this.props.addEndListener &&
                  this.props.addEndListener(t, this.nextCallback),
                null != e && setTimeout(this.nextCallback, e))
              : setTimeout(this.nextCallback, 0);
          }),
          (a.render = function () {
            var t = this.state.status;
            if (t === c) return null;
            var e = this.props,
              r = e.children,
              n = (function (t, e) {
                if (null == t) return {};
                var r,
                  n,
                  o = {},
                  i = Object.keys(t);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                return o;
              })(e, ["children"]);
            if (
              (delete n.in,
              delete n.mountOnEnter,
              delete n.unmountOnExit,
              delete n.appear,
              delete n.enter,
              delete n.exit,
              delete n.timeout,
              delete n.addEndListener,
              delete n.onEnter,
              delete n.onEntering,
              delete n.onEntered,
              delete n.onExit,
              delete n.onExiting,
              delete n.onExited,
              "function" == typeof r)
            )
              return r(t, n);
            var i = o.default.Children.only(r);
            return o.default.cloneElement(i, n);
          }),
          n
        );
      })(o.default.Component);
      function d() {}
      (h.contextTypes = { transitionGroup: n.object }),
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
    1802: (t, e, r) => {
      "use strict";
      (e.__esModule = !0), (e.default = void 0);
      var n = u(r(25816)),
        o = u(r(47427)),
        i = r(36904),
        a = r(51117);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function c() {
        return (
          (c =
            Object.assign ||
            function (t) {
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
          var e, r;
          function n(e, r) {
            var n,
              o = (n = t.call(this, e, r) || this).handleExited.bind(l(l(n)));
            return (n.state = { handleExited: o, firstRender: !0 }), n;
          }
          (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var i = n.prototype;
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
            (n.getDerivedStateFromProps = function (t, e) {
              var r = e.children,
                n = e.handleExited;
              return {
                children: e.firstRender
                  ? (0, a.getInitialChildMapping)(t, n)
                  : (0, a.getNextChildMapping)(t, r, n),
                firstRender: !1,
              };
            }),
            (i.handleExited = function (t, e) {
              var r = (0, a.getChildMapping)(this.props.children);
              t.key in r ||
                (t.props.onExited && t.props.onExited(e),
                this.mounted &&
                  this.setState(function (e) {
                    var r = c({}, e.children);
                    return delete r[t.key], { children: r };
                  }));
            }),
            (i.render = function () {
              var t = this.props,
                e = t.component,
                r = t.childFactory,
                n = (function (t, e) {
                  if (null == t) return {};
                  var r,
                    n,
                    o = {},
                    i = Object.keys(t);
                  for (n = 0; n < i.length; n++)
                    (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                  return o;
                })(t, ["component", "childFactory"]),
                i = s(this.state.children).map(r);
              return (
                delete n.appear,
                delete n.enter,
                delete n.exit,
                null === e ? i : o.default.createElement(e, n, i)
              );
            }),
            n
          );
        })(o.default.Component);
      (f.childContextTypes = { transitionGroup: n.default.object.isRequired }),
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
    91514: (t, e, r) => {
      "use strict";
      var n = u(r(50268)),
        o = u(r(35994)),
        i = u(r(1802)),
        a = u(r(65403));
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      t.exports = {
        Transition: a.default,
        TransitionGroup: i.default,
        ReplaceTransition: o.default,
        CSSTransition: n.default,
      };
    },
    51117: (t, e, r) => {
      "use strict";
      (e.__esModule = !0),
        (e.getChildMapping = o),
        (e.mergeChildMappings = i),
        (e.getInitialChildMapping = function (t, e) {
          return o(t.children, function (r) {
            return (0, n.cloneElement)(r, {
              onExited: e.bind(null, r),
              in: !0,
              appear: a(r, "appear", t),
              enter: a(r, "enter", t),
              exit: a(r, "exit", t),
            });
          });
        }),
        (e.getNextChildMapping = function (t, e, r) {
          var u = o(t.children),
            c = i(e, u);
          return (
            Object.keys(c).forEach(function (o) {
              var i = c[o];
              if ((0, n.isValidElement)(i)) {
                var l = o in e,
                  s = o in u,
                  f = e[o],
                  p = (0, n.isValidElement)(f) && !f.props.in;
                !s || (l && !p)
                  ? s || !l || p
                    ? s &&
                      l &&
                      (0, n.isValidElement)(f) &&
                      (c[o] = (0, n.cloneElement)(i, {
                        onExited: r.bind(null, i),
                        in: f.props.in,
                        exit: a(i, "exit", t),
                        enter: a(i, "enter", t),
                      }))
                    : (c[o] = (0, n.cloneElement)(i, { in: !1 }))
                  : (c[o] = (0, n.cloneElement)(i, {
                      onExited: r.bind(null, i),
                      in: !0,
                      exit: a(i, "exit", t),
                      enter: a(i, "enter", t),
                    }));
              }
            }),
            c
          );
        });
      var n = r(47427);
      function o(t, e) {
        var r = Object.create(null);
        return (
          t &&
            n.Children.map(t, function (t) {
              return t;
            }).forEach(function (t) {
              r[t.key] = (function (t) {
                return e && (0, n.isValidElement)(t) ? e(t) : t;
              })(t);
            }),
          r
        );
      }
      function i(t, e) {
        function r(r) {
          return r in e ? e[r] : t[r];
        }
        (t = t || {}), (e = e || {});
        var n,
          o = Object.create(null),
          i = [];
        for (var a in t)
          a in e ? i.length && ((o[a] = i), (i = [])) : i.push(a);
        var u = {};
        for (var c in e) {
          if (o[c])
            for (n = 0; n < o[c].length; n++) {
              var l = o[c][n];
              u[o[c][n]] = r(l);
            }
          u[c] = r(c);
        }
        for (n = 0; n < i.length; n++) u[i[n]] = r(i[n]);
        return u;
      }
      function a(t, e, r) {
        return null != r[e] ? r[e] : t.props[e];
      }
    },
    1042: (t, e, r) => {
      "use strict";
      (e.__esModule = !0), (e.classNamesShape = e.timeoutsShape = void 0);
      var n;
      (n = r(25816)) && n.__esModule;
      e.timeoutsShape = null;
      e.classNamesShape = null;
    },
    28531: (t, e, r) => {
      "use strict";
      r.d(e, { $: () => $ });
      var n = r(47427),
        o = r(84148),
        i = r(15819),
        a = r(49198),
        u = r.n(a),
        c = r(38716),
        l = r.n(c),
        s = r(47430),
        f = r(85458),
        p = r(85674),
        h = r(72961),
        d = r(76325),
        y = r(94797),
        v = r(77125),
        m = r(70416),
        b = r(81156),
        g = r(37350);
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
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          O.apply(this, arguments)
        );
      }
      function j(t, e) {
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
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? j(Object(r), !0).forEach(function (e) {
                A(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function A(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== x(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== x(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === x(e) ? e : String(e);
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
      function E(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function P(t, e) {
        var r = t.x,
          n = t.y,
          o = E(t, w),
          i = "".concat(r),
          a = parseInt(i, 10),
          u = "".concat(n),
          c = parseInt(u, 10),
          l = "".concat(e.height || o.height),
          s = parseInt(l, 10),
          f = "".concat(e.width || o.width),
          p = parseInt(f, 10);
        return S(
          S(S(S(S({}, e), o), a ? { x: a } : {}), c ? { y: c } : {}),
          {},
          { height: s, width: p, name: e.name, radius: e.radius },
        );
      }
      function k(t) {
        return n.createElement(
          g.bn,
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
      function T(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          C.apply(this, arguments)
        );
      }
      function N(t, e) {
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
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(r), !0).forEach(function (e) {
                U(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : N(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function I(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, F(n.key), n);
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
          var r,
            n = z(t);
          if (e) {
            var o = z(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === _(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return R(t);
          })(this, r);
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
      function U(t, e, r) {
        return (
          (e = F(e)) in t
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
      function F(t) {
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
          r,
          a,
          c = L(p);
        function p() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, p);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            U(R((t = c.call.apply(c, [this].concat(r)))), "state", {
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
          (r = [
            {
              key: "renderRectanglesStatically",
              value: function (t) {
                var e = this,
                  r = this.props,
                  o = r.shape,
                  i = r.dataKey,
                  a = r.activeIndex,
                  u = r.activeBar,
                  c = (0, y.L6)(this.props);
                return (
                  t &&
                  t.map(function (t, r) {
                    var l = r === a,
                      f = l ? u : o,
                      p = D(
                        D(D({}, c), t),
                        {},
                        {
                          isActive: l,
                          option: f,
                          index: r,
                          dataKey: i,
                          onAnimationStart: e.handleAnimationStart,
                          onAnimationEnd: e.handleAnimationEnd,
                        },
                      );
                    return n.createElement(
                      s.m,
                      C(
                        { className: "recharts-bar-rectangle" },
                        (0, b.bw)(e.props, t, r),
                        {
                          key: "rectangle-"
                            .concat(null == t ? void 0 : t.x, "-")
                            .concat(null == t ? void 0 : t.y, "-")
                            .concat(null == t ? void 0 : t.value),
                        },
                      ),
                      n.createElement(k, p),
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
                  o = e.layout,
                  a = e.isAnimationActive,
                  u = e.animationBegin,
                  c = e.animationDuration,
                  l = e.animationEasing,
                  f = e.animationId,
                  p = this.state.prevData;
                return n.createElement(
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
                      a = r.map(function (t, e) {
                        var r = p && p[e];
                        if (r) {
                          var n = (0, d.k4)(r.x, t.x),
                            a = (0, d.k4)(r.y, t.y),
                            u = (0, d.k4)(r.width, t.width),
                            c = (0, d.k4)(r.height, t.height);
                          return D(
                            D({}, t),
                            {},
                            { x: n(i), y: a(i), width: u(i), height: c(i) },
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
                    return n.createElement(
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
                  r = t.isAnimationActive,
                  n = this.state.prevData;
                return !(r && e && e.length) || (n && u()(n, e))
                  ? this.renderRectanglesStatically(e)
                  : this.renderRectanglesWithAnimation();
              },
            },
            {
              key: "renderBackground",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.data,
                  o = e.dataKey,
                  i = e.activeIndex,
                  a = (0, y.L6)(this.props.background);
                return r.map(function (e, r) {
                  e.value;
                  var u = e.background,
                    c = T(e, M);
                  if (!u) return null;
                  var l = D(
                    D(
                      D(D(D({}, c), {}, { fill: "#eee" }, u), a),
                      (0, b.bw)(t.props, e, r),
                    ),
                    {},
                    {
                      onAnimationStart: t.handleAnimationStart,
                      onAnimationEnd: t.handleAnimationEnd,
                      dataKey: o,
                      index: r,
                      key: "background-bar-".concat(r),
                      className: "recharts-bar-background-rectangle",
                    },
                  );
                  return n.createElement(
                    k,
                    C({ option: t.props.background, isActive: r === i }, l),
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
                var r = this.props,
                  o = r.data,
                  i = r.xAxis,
                  a = r.yAxis,
                  u = r.layout,
                  c = r.children,
                  l = (0, y.NN)(c, f.W);
                if (!l) return null;
                var p = "vertical" === u ? o[0].height / 2 : o[0].width / 2,
                  h = function (t, e) {
                    var r = Array.isArray(t.value) ? t.value[1] : t.value;
                    return {
                      x: t.x,
                      y: t.y,
                      value: r,
                      errorVal: (0, m.F$)(t, e),
                    };
                  },
                  d = { clipPath: t ? "url(#clipPath-".concat(e, ")") : null };
                return n.createElement(
                  s.m,
                  d,
                  l.map(function (t) {
                    return n.cloneElement(t, {
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
                  r = t.data,
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
                if (e || !r || !r.length) return null;
                var b = this.state.isAnimationFinished,
                  g = (0, o.Z)("recharts-bar", i),
                  x = a && a.allowDataOverflow,
                  w = u && u.allowDataOverflow,
                  O = x || w,
                  j = l()(m) ? this.id : m;
                return n.createElement(
                  s.m,
                  { className: g },
                  x || w
                    ? n.createElement(
                        "defs",
                        null,
                        n.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(j) },
                          n.createElement("rect", {
                            x: x ? c : c - p / 2,
                            y: w ? f : f - d / 2,
                            width: x ? p : 2 * p,
                            height: w ? d : 2 * d,
                          }),
                        ),
                      )
                    : null,
                  n.createElement(
                    s.m,
                    {
                      className: "recharts-bar-rectangles",
                      clipPath: O ? "url(#clipPath-".concat(j, ")") : null,
                    },
                    v ? this.renderBackground() : null,
                    this.renderRectangles(),
                  ),
                  this.renderErrorBar(O, j),
                  (!y || b) && h.e.renderCallByParent(this.props, r),
                );
              },
            },
          ]) && I(e.prototype, r),
          a && I(e, a),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          p
        );
      })(n.PureComponent);
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
            r = t.item,
            n = t.barPosition,
            o = t.bandSize,
            i = t.xAxis,
            a = t.yAxis,
            u = t.xAxisTicks,
            c = t.yAxisTicks,
            l = t.stackedData,
            s = t.dataStartIndex,
            f = t.displayedData,
            h = t.offset,
            v = (0, m.Bu)(n, r);
          if (!v) return null;
          var b = e.layout,
            g = r.props,
            x = g.dataKey,
            w = g.children,
            O = g.minPointSize,
            j = "horizontal" === b ? a : i,
            S = l ? j.scale.domain() : null,
            A = (0, m.Yj)({ numericAxis: j }),
            E = (0, y.NN)(w, p.b),
            P = f.map(function (t, e) {
              var n, f, p, h, y, g;
              if (
                (l
                  ? (n = (0, m.Vv)(l[s + e], S))
                  : ((n = (0, m.F$)(t, x)), Array.isArray(n) || (n = [A, n])),
                "horizontal" === b)
              ) {
                var w,
                  j = [a.scale(n[0]), a.scale(n[1])],
                  P = j[0],
                  k = j[1];
                (f = (0, m.Fy)({
                  axis: i,
                  ticks: u,
                  bandSize: o,
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
                  (g = { x: f, y: a.y, width: h, height: a.height }),
                  Math.abs(O) > 0 && Math.abs(y) < Math.abs(O))
                ) {
                  var _ = (0, d.uY)(y || O) * (Math.abs(O) - Math.abs(y));
                  (p -= _), (y += _);
                }
              } else {
                var T = [i.scale(n[0]), i.scale(n[1])],
                  C = T[0],
                  N = T[1];
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
                  (g = { x: i.x, y: p, width: i.width, height: y }),
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
                    value: l ? n : n[1],
                    payload: t,
                    background: g,
                  },
                  E && E[e] && E[e].props,
                ),
                {},
                {
                  tooltipPayload: [(0, m.Qo)(r, t)],
                  tooltipPosition: { x: f + h / 2, y: p + y / 2 },
                },
              );
            });
          return D({ data: P, layout: b }, h);
        });
    },
    48359: (t, e, r) => {
      "use strict";
      r.d(e, { q: () => w });
      var n = r(47427),
        o = r(8889),
        i = r.n(o),
        a = r(76325),
        u = r(94797),
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
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          f.apply(this, arguments)
        );
      }
      function p(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
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
                g(t, e, r[e]);
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
      function y(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, x(n.key), n);
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
          var r,
            n = b(t);
          if (e) {
            var o = b(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
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
      function g(t, e, r) {
        return (
          (e = x(e)) in t
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
      function x(t) {
        var e = (function (t, e) {
          if ("object" !== s(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== s(n)) return n;
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
          r,
          o,
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
          (o = [
            {
              key: "renderLineItem",
              value: function (t, e) {
                var r;
                if (n.isValidElement(t)) r = n.cloneElement(t, e);
                else if (i()(t)) r = t(e);
                else {
                  var o = e.x1,
                    a = e.y1,
                    s = e.x2,
                    h = e.y2,
                    d = e.key,
                    y = p(e, c),
                    v = (0, u.L6)(y),
                    m = (v.offset, p(v, l));
                  r = n.createElement(
                    "line",
                    f({}, m, {
                      x1: o,
                      y1: a,
                      x2: s,
                      y2: h,
                      fill: "none",
                      key: d,
                    }),
                  );
                }
                return r;
              },
            },
          ]),
          (r = [
            {
              key: "renderHorizontal",
              value: function (t) {
                var e = this,
                  r = this.props,
                  o = r.x,
                  i = r.width,
                  a = r.horizontal;
                if (!t || !t.length) return null;
                var u = t.map(function (t, r) {
                  var n = d(
                    d({}, e.props),
                    {},
                    {
                      x1: o,
                      y1: t,
                      x2: o + i,
                      y2: t,
                      key: "line-".concat(r),
                      index: r,
                    },
                  );
                  return h.renderLineItem(a, n);
                });
                return n.createElement(
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
                  r = this.props,
                  o = r.y,
                  i = r.height,
                  a = r.vertical;
                if (!t || !t.length) return null;
                var u = t.map(function (t, r) {
                  var n = d(
                    d({}, e.props),
                    {},
                    {
                      x1: t,
                      y1: o,
                      x2: t,
                      y2: o + i,
                      key: "line-".concat(r),
                      index: r,
                    },
                  );
                  return h.renderLineItem(a, n);
                });
                return n.createElement(
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
                var r = this.props,
                  o = r.fillOpacity,
                  i = r.x,
                  a = r.y,
                  u = r.width,
                  c = r.height,
                  l = t
                    .map(function (t) {
                      return Math.round(t + i - i);
                    })
                    .sort(function (t, e) {
                      return t - e;
                    });
                i !== l[0] && l.unshift(0);
                var s = l.map(function (t, r) {
                  var s = l[r + 1] ? l[r + 1] - t : i + u - t;
                  if (s <= 0) return null;
                  var f = r % e.length;
                  return n.createElement("rect", {
                    key: "react-".concat(r),
                    x: t,
                    y: a,
                    width: s,
                    height: c,
                    stroke: "none",
                    fill: e[f],
                    fillOpacity: o,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return n.createElement(
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
                var r = this.props,
                  o = r.fillOpacity,
                  i = r.x,
                  a = r.y,
                  u = r.width,
                  c = r.height,
                  l = t
                    .map(function (t) {
                      return Math.round(t + a - a);
                    })
                    .sort(function (t, e) {
                      return t - e;
                    });
                a !== l[0] && l.unshift(0);
                var s = l.map(function (t, r) {
                  var s = l[r + 1] ? l[r + 1] - t : a + c - t;
                  if (s <= 0) return null;
                  var f = r % e.length;
                  return n.createElement("rect", {
                    key: "react-".concat(r),
                    y: t,
                    x: i,
                    height: s,
                    width: u,
                    stroke: "none",
                    fill: e[f],
                    fillOpacity: o,
                    className: "recharts-cartesian-grid-bg",
                  });
                });
                return n.createElement(
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
                  r = e.fillOpacity,
                  o = e.x,
                  i = e.y,
                  a = e.width,
                  u = e.height;
                return n.createElement("rect", {
                  x: o,
                  y: i,
                  width: a,
                  height: u,
                  stroke: "none",
                  fill: t,
                  fillOpacity: r,
                  className: "recharts-cartesian-grid-bg",
                });
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.x,
                  r = t.y,
                  o = t.width,
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
                  b = t.syncWithTicks,
                  g = t.horizontalValues,
                  x = t.verticalValues;
                if (
                  !(0, a.hj)(o) ||
                  o <= 0 ||
                  !(0, a.hj)(u) ||
                  u <= 0 ||
                  !(0, a.hj)(e) ||
                  e !== +e ||
                  !(0, a.hj)(r) ||
                  r !== +r
                )
                  return null;
                var w = this.props,
                  O = w.horizontalPoints,
                  j = w.verticalPoints;
                if ((!O || !O.length) && i()(s)) {
                  var S = g && g.length;
                  O = s(
                    {
                      yAxis: h
                        ? d(d({}, h), {}, { ticks: S ? g : h.ticks })
                        : void 0,
                      width: v,
                      height: m,
                      offset: y,
                    },
                    !!S || b,
                  );
                }
                if ((!j || !j.length) && i()(f)) {
                  var A = x && x.length;
                  j = f(
                    {
                      xAxis: p
                        ? d(d({}, p), {}, { ticks: A ? x : p.ticks })
                        : void 0,
                      width: v,
                      height: m,
                      offset: y,
                    },
                    !!A || b,
                  );
                }
                return n.createElement(
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
          ]) && y(e.prototype, r),
          o && y(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          h
        );
      })(n.PureComponent);
      g(w, "displayName", "CartesianGrid"),
        g(w, "defaultProps", {
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
    85458: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => f });
      var n = r(47427),
        o = r(47430),
        i = r(94797),
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
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
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
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
          m = (0, i.L6)(v),
          b = p.map(function (t) {
            var i = h(t, f),
              a = i.x,
              s = i.y,
              p = i.value,
              v = i.errorVal;
            if (!v) return null;
            var b,
              g,
              x = [];
            if (Array.isArray(v)) {
              var w = c(v, 2);
              (b = w[0]), (g = w[1]);
            } else b = g = v;
            if ("vertical" === r) {
              var O = d.scale,
                j = s + e,
                S = j + l,
                A = j - l,
                E = O(p - b),
                P = O(p + g);
              x.push({ x1: P, y1: S, x2: P, y2: A }),
                x.push({ x1: E, y1: j, x2: P, y2: j }),
                x.push({ x1: E, y1: S, x2: E, y2: A });
            } else if ("horizontal" === r) {
              var k = y.scale,
                M = a + e,
                _ = M - l,
                T = M + l,
                C = k(p - b),
                N = k(p + g);
              x.push({ x1: _, y1: N, x2: T, y2: N }),
                x.push({ x1: M, y1: C, x2: M, y2: N }),
                x.push({ x1: _, y1: C, x2: T, y2: C });
            }
            return n.createElement(
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
                return n.createElement(
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
        return n.createElement(o.m, { className: "recharts-errorBars" }, b);
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
    52942: (t, e, r) => {
      "use strict";
      r.d(e, { x: () => B });
      var n = r(47427),
        o = r(15819),
        i = r(8889),
        a = r.n(i),
        u = r(38716),
        c = r.n(u),
        l = r(49198),
        s = r.n(l),
        f = r(84148),
        p = r(84223),
        h = r(14166),
        d = r(47430),
        y = r(72961),
        v = r(85458),
        m = r(76325),
        b = r(94797),
        g = r(77125),
        x = r(70416),
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
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function S() {
        return (
          (S = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          S.apply(this, arguments)
        );
      }
      function A(t, e) {
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
      function E(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(r), !0).forEach(function (e) {
                D(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : A(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function M(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, I(n.key), n);
        }
      }
      function _(t, e) {
        return (
          (_ = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          _(t, e)
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
            n = N(t);
          if (e) {
            var o = N(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === O(e) || "function" == typeof e)) return e;
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
          (e = I(e)) in t
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
      function I(t) {
        var e = (function (t, e) {
          if ("object" !== O(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== O(n)) return n;
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
            e && _(t, e);
        })(l, t);
        var e,
          r,
          i,
          u = T(l);
        function l() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, l);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            D(C((t = u.call.apply(u, [this].concat(r)))), "state", {
              isAnimationFinished: !0,
              totalLength: 0,
            }),
            D(C(t), "generateSimpleStrokeDasharray", function (t, e) {
              return "".concat(e, "px ").concat(t - e, "px");
            }),
            D(C(t), "getStrokeDasharray", function (e, r, n) {
              var o = n.reduce(function (t, e) {
                return t + e;
              });
              if (!o) return t.generateSimpleStrokeDasharray(r, e);
              for (
                var i = Math.floor(e / o),
                  a = e % o,
                  u = r - e,
                  c = [],
                  s = 0,
                  f = 0;
                s < n.length;
                f += n[s], ++s
              )
                if (f + n[s] > a) {
                  c = [].concat(P(n.slice(0, s)), [a - f]);
                  break;
                }
              var p = c.length % 2 == 0 ? [0, u] : [u];
              return []
                .concat(P(l.repeat(n, i)), P(c), p)
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
                  var r = t.length % 2 != 0 ? [].concat(P(t), [0]) : t,
                    n = [],
                    o = 0;
                  o < e;
                  ++o
                )
                  n = [].concat(P(n), P(r));
                return n;
              },
            },
            {
              key: "renderDotItem",
              value: function (t, e) {
                var r;
                if (n.isValidElement(t)) r = n.cloneElement(t, e);
                else if (a()(t)) r = t(e);
                else {
                  var o = (0, f.Z)("recharts-line-dot", t ? t.className : "");
                  r = n.createElement(h.o, S({}, e, { className: o }));
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
                var r = this.props,
                  o = r.points,
                  i = r.xAxis,
                  a = r.yAxis,
                  u = r.layout,
                  c = r.children,
                  l = (0, b.NN)(c, v.W);
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
                return n.createElement(
                  d.m,
                  f,
                  l.map(function (t) {
                    return n.cloneElement(t, {
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
              value: function (t, e, r) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var o = this.props,
                  i = o.dot,
                  a = o.points,
                  u = o.dataKey,
                  c = (0, b.L6)(this.props),
                  s = (0, b.L6)(i, !0),
                  f = a.map(function (t, e) {
                    var r = E(
                      E(E({ key: "dot-".concat(e), r: 3 }, c), s),
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
                    return l.renderDotItem(i, r);
                  }),
                  p = {
                    clipPath: t
                      ? "url(#clipPath-".concat(e ? "" : "dots-").concat(r, ")")
                      : null,
                  };
                return n.createElement(
                  d.m,
                  S({ className: "recharts-line-dots", key: "dots" }, p),
                  f,
                );
              },
            },
            {
              key: "renderCurveStatically",
              value: function (t, e, r, o) {
                var i = this.props,
                  a = i.type,
                  u = i.layout,
                  c = i.connectNulls,
                  l = (i.ref, j(i, w)),
                  s = E(
                    E(
                      E({}, (0, b.L6)(l, !0)),
                      {},
                      {
                        fill: "none",
                        className: "recharts-line-curve",
                        clipPath: e ? "url(#clipPath-".concat(r, ")") : null,
                        points: t,
                      },
                      o,
                    ),
                    {},
                    { type: a, layout: u, connectNulls: c },
                  );
                return n.createElement(
                  p.H,
                  S({}, s, { pathRef: this.pathRef }),
                );
              },
            },
            {
              key: "renderCurveWithAnimation",
              value: function (t, e) {
                var r = this,
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
                  b = v.prevPoints,
                  g = v.totalLength;
                return n.createElement(
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
                  function (n) {
                    var o = n.t;
                    if (b) {
                      var i = b.length / a.length,
                        c = a.map(function (t, e) {
                          var r = Math.floor(e * i);
                          if (b[r]) {
                            var n = b[r],
                              a = (0, m.k4)(n.x, t.x),
                              u = (0, m.k4)(n.y, t.y);
                            return E(E({}, t), {}, { x: a(o), y: u(o) });
                          }
                          if (h) {
                            var c = (0, m.k4)(2 * d, t.x),
                              l = (0, m.k4)(y / 2, t.y);
                            return E(E({}, t), {}, { x: c(o), y: l(o) });
                          }
                          return E(E({}, t), {}, { x: t.x, y: t.y });
                        });
                      return r.renderCurveStatically(c, t, e);
                    }
                    var l,
                      s = (0, m.k4)(0, g)(o);
                    if (u) {
                      var f = ""
                        .concat(u)
                        .split(/[,\s]+/gim)
                        .map(function (t) {
                          return parseFloat(t);
                        });
                      l = r.getStrokeDasharray(s, g, f);
                    } else l = r.generateSimpleStrokeDasharray(g, s);
                    return r.renderCurveStatically(a, t, e, {
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
                  i = this.state,
                  a = i.prevPoints,
                  u = i.totalLength;
                return o && n && n.length && ((!a && u > 0) || !s()(a, n))
                  ? this.renderCurveWithAnimation(t, e)
                  : this.renderCurveStatically(n, t, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  r = e.hide,
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
                  g = e.id;
                if (r || !i || !i.length) return null;
                var x = this.state.isAnimationFinished,
                  w = 1 === i.length,
                  O = (0, f.Z)("recharts-line", a),
                  j = u && u.allowDataOverflow,
                  S = l && l.allowDataOverflow,
                  A = j || S,
                  E = c()(g) ? this.id : g,
                  P =
                    null !== (t = (0, b.L6)(o)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = P.r,
                  M = void 0 === k ? 3 : k,
                  _ = P.strokeWidth,
                  T = void 0 === _ ? 2 : _,
                  C = ((0, b.$k)(o) ? o : {}).clipDot,
                  N = void 0 === C || C,
                  D = 2 * M + T;
                return n.createElement(
                  d.m,
                  { className: O },
                  j || S
                    ? n.createElement(
                        "defs",
                        null,
                        n.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(E) },
                          n.createElement("rect", {
                            x: j ? p : p - h / 2,
                            y: S ? s : s - v / 2,
                            width: j ? h : 2 * h,
                            height: S ? v : 2 * v,
                          }),
                        ),
                        !N &&
                          n.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(E) },
                            n.createElement("rect", {
                              x: p - D / 2,
                              y: s - D / 2,
                              width: h + D,
                              height: v + D,
                            }),
                          ),
                      )
                    : null,
                  !w && this.renderCurve(A, E),
                  this.renderErrorBar(A, E),
                  (w || o) && this.renderDots(A, N, E),
                  (!m || x) && y.e.renderCallByParent(this.props, i),
                );
              },
            },
          ]) && M(e.prototype, r),
          i && M(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          l
        );
      })(n.PureComponent);
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
          isAnimationActive: !g.x.isSsr,
          animateNewValues: !0,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
          hide: !1,
          label: !1,
        }),
        D(B, "getComposedData", function (t) {
          var e = t.props,
            r = t.xAxis,
            n = t.yAxis,
            o = t.xAxisTicks,
            i = t.yAxisTicks,
            a = t.dataKey,
            u = t.bandSize,
            l = t.displayedData,
            s = t.offset,
            f = e.layout;
          return E(
            {
              points: l.map(function (t, e) {
                var l = (0, x.F$)(t, a);
                return "horizontal" === f
                  ? {
                      x: (0, x.Hv)({
                        axis: r,
                        ticks: o,
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
                      y: (0, x.Hv)({
                        axis: n,
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
    84965: (t, e, r) => {
      "use strict";
      r.d(e, { d: () => A });
      var n = r(47427),
        o = r(8889),
        i = r.n(o),
        a = r(45446),
        u = r.n(a),
        c = r(84148),
        l = r(47430),
        s = r(47094),
        f = r(75658),
        p = r(76325),
        h = r(52871),
        d = r(90481),
        y = r(94797);
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
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(r), !0).forEach(function (e) {
                g(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function g(t, e, r) {
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
      function x(t, e) {
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
      var j = function (t, e) {
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : i()(t)
            ? t(e)
            : n.createElement(
                "line",
                O({}, e, { className: "recharts-reference-line-line" }),
              );
        },
        S = function (t, e, r, n, o) {
          var i = o.viewBox,
            a = i.x,
            c = i.y,
            l = i.width,
            s = i.height,
            p = o.position;
          if (r) {
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
              b = o.xAxis.orientation,
              g = t.x.apply(m, { position: p });
            if ((0, f.B)(o, "discard") && !t.x.isInRange(g)) return null;
            var x = [
              { x: g, y: c + s },
              { x: g, y: c },
            ];
            return "top" === b ? x.reverse() : x;
          }
          if (n) {
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
      function A(t) {
        var e = t.x,
          r = t.y,
          o = t.segment,
          i = t.xAxis,
          a = t.yAxis,
          u = t.shape,
          v = t.className,
          m = t.alwaysShow,
          g = t.clipPathId;
        (0, d.Z)(
          void 0 === m,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var w = (0, h.Ky)({ x: i.scale, y: a.scale }),
          O = (0, p.P2)(e),
          A = (0, p.P2)(r),
          E = o && 2 === o.length,
          P = S(w, O, A, E, t);
        if (!P) return null;
        var k = x(P, 2),
          M = k[0],
          _ = M.x,
          T = M.y,
          C = k[1],
          N = C.x,
          D = C.y,
          I = b(
            b(
              {
                clipPath: (0, f.B)(t, "hidden")
                  ? "url(#".concat(g, ")")
                  : void 0,
              },
              (0, y.L6)(t, !0),
            ),
            {},
            { x1: _, y1: T, x2: N, y2: D },
          );
        return n.createElement(
          l.m,
          { className: (0, c.Z)("recharts-reference-line", v) },
          j(u, I),
          s._.renderCallByParent(t, (0, h._b)({ x1: _, y1: T, x2: N, y2: D })),
        );
      }
      (A.displayName = "ReferenceLine"),
        (A.defaultProps = {
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
    90291: (t, e, r) => {
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
    56886: (t, e, r) => {
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
    22559: (t, e, r) => {
      "use strict";
      r.d(e, { c: () => ht });
      var n,
        o = r(11914),
        i = r(47427),
        a = r(84148),
        u = r(15819),
        c = r(8889),
        l = r.n(c),
        s = r(24149),
        f = r.n(s),
        p = r(38716),
        h = r.n(p),
        d = r(98176),
        y = r.n(d),
        v = r(49198),
        m = r.n(v),
        b = r(84223),
        g = r(14166),
        x = r(47430),
        w = r(72961),
        O = r(77125),
        j = r(76325),
        S = r(70416),
        A = r(94797),
        E = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"];
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
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function M() {
        return (
          (M = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          M.apply(this, arguments)
        );
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
      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _(Object(r), !0).forEach(function (e) {
                L(t, e, r[e]);
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
      function C(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, R(n.key), n);
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
          var r,
            n = B(t);
          if (e) {
            var o = B(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === P(e) || "function" == typeof e)) return e;
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
      function L(t, e, r) {
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
          r,
          n,
          o = D(c);
        function c() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, c);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            L(I((t = o.call.apply(o, [this].concat(r)))), "state", {
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
          (n = [
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
          (r = [
            {
              key: "renderDots",
              value: function (t, e, r) {
                var n = this.props.isAnimationActive,
                  o = this.state.isAnimationFinished;
                if (n && !o) return null;
                var a = this.props,
                  u = a.dot,
                  l = a.points,
                  s = a.dataKey,
                  f = (0, A.L6)(this.props),
                  p = (0, A.L6)(u, !0),
                  h = l.map(function (t, e) {
                    var r = T(
                      T(T({ key: "dot-".concat(e), r: 3 }, f), p),
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
                    return c.renderDotItem(u, r);
                  }),
                  d = {
                    clipPath: t
                      ? "url(#clipPath-".concat(e ? "" : "dots-").concat(r, ")")
                      : null,
                  };
                return i.createElement(
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
                  r = e.baseLine,
                  n = e.points,
                  o = e.strokeWidth,
                  a = n[0].x,
                  u = n[n.length - 1].x,
                  c = t * Math.abs(a - u),
                  l = f()(
                    n.map(function (t) {
                      return t.y || 0;
                    }),
                  );
                return (
                  (0, j.hj)(r) && "number" == typeof r
                    ? (l = Math.max(r, l))
                    : r &&
                      Array.isArray(r) &&
                      r.length &&
                      (l = Math.max(
                        f()(
                          r.map(function (t) {
                            return t.y || 0;
                          }),
                        ),
                        l,
                      )),
                  (0, j.hj)(l)
                    ? i.createElement("rect", {
                        x: a < u ? a : a - c,
                        y: 0,
                        width: c,
                        height: Math.floor(
                          l + (o ? parseInt("".concat(o), 10) : 1),
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
                  r = e.baseLine,
                  n = e.points,
                  o = e.strokeWidth,
                  a = n[0].y,
                  u = n[n.length - 1].y,
                  c = t * Math.abs(a - u),
                  l = f()(
                    n.map(function (t) {
                      return t.x || 0;
                    }),
                  );
                return (
                  (0, j.hj)(r) && "number" == typeof r
                    ? (l = Math.max(r, l))
                    : r &&
                      Array.isArray(r) &&
                      r.length &&
                      (l = Math.max(
                        f()(
                          r.map(function (t) {
                            return t.x || 0;
                          }),
                        ),
                        l,
                      )),
                  (0, j.hj)(l)
                    ? i.createElement("rect", {
                        x: 0,
                        y: a < u ? a : a - c,
                        width: l + (o ? parseInt("".concat(o), 10) : 1),
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
              value: function (t, e, r, n) {
                var o = this.props,
                  a = o.layout,
                  u = o.type,
                  c = o.stroke,
                  l = o.connectNulls,
                  s = o.isRange,
                  f = (o.ref, k(o, E));
                return i.createElement(
                  x.m,
                  { clipPath: r ? "url(#clipPath-".concat(n, ")") : null },
                  i.createElement(
                    b.H,
                    M({}, (0, A.L6)(f, !0), {
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
                    i.createElement(
                      b.H,
                      M({}, (0, A.L6)(this.props), {
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
                    i.createElement(
                      b.H,
                      M({}, (0, A.L6)(this.props), {
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
                var r = this,
                  n = this.props,
                  o = n.points,
                  a = n.baseLine,
                  c = n.isAnimationActive,
                  l = n.animationBegin,
                  s = n.animationDuration,
                  f = n.animationEasing,
                  p = n.animationId,
                  d = this.state,
                  v = d.prevPoints,
                  m = d.prevBaseLine;
                return i.createElement(
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
                  function (n) {
                    var u = n.t;
                    if (v) {
                      var c,
                        l = v.length / o.length,
                        s = o.map(function (t, e) {
                          var r = Math.floor(e * l);
                          if (v[r]) {
                            var n = v[r],
                              o = (0, j.k4)(n.x, t.x),
                              i = (0, j.k4)(n.y, t.y);
                            return T(T({}, t), {}, { x: o(u), y: i(u) });
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
                                var r = Math.floor(e * l);
                                if (m[r]) {
                                  var n = m[r],
                                    o = (0, j.k4)(n.x, t.x),
                                    i = (0, j.k4)(n.y, t.y);
                                  return T(T({}, t), {}, { x: o(u), y: i(u) });
                                }
                                return t;
                              })),
                        r.renderAreaStatically(s, c, t, e)
                      );
                    }
                    return i.createElement(
                      x.m,
                      null,
                      i.createElement(
                        "defs",
                        null,
                        i.createElement(
                          "clipPath",
                          { id: "animationClipPath-".concat(e) },
                          r.renderClipRect(u),
                        ),
                      ),
                      i.createElement(
                        x.m,
                        { clipPath: "url(#animationClipPath-".concat(e, ")") },
                        r.renderAreaStatically(o, a, t, e),
                      ),
                    );
                  },
                );
              },
            },
            {
              key: "renderArea",
              value: function (t, e) {
                var r = this.props,
                  n = r.points,
                  o = r.baseLine,
                  i = r.isAnimationActive,
                  a = this.state,
                  u = a.prevPoints,
                  c = a.prevBaseLine,
                  l = a.totalLength;
                return i &&
                  n &&
                  n.length &&
                  ((!u && l > 0) || !m()(u, n) || !m()(c, o))
                  ? this.renderAreaWithAnimation(t, e)
                  : this.renderAreaStatically(n, o, t, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  r = e.hide,
                  n = e.dot,
                  o = e.points,
                  u = e.className,
                  c = e.top,
                  l = e.left,
                  s = e.xAxis,
                  f = e.yAxis,
                  p = e.width,
                  d = e.height,
                  y = e.isAnimationActive,
                  v = e.id;
                if (r || !o || !o.length) return null;
                var m = this.state.isAnimationFinished,
                  b = 1 === o.length,
                  g = (0, a.Z)("recharts-area", u),
                  O = s && s.allowDataOverflow,
                  j = f && f.allowDataOverflow,
                  S = O || j,
                  E = h()(v) ? this.id : v,
                  P =
                    null !== (t = (0, A.L6)(n)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = P.r,
                  M = void 0 === k ? 3 : k,
                  _ = P.strokeWidth,
                  T = void 0 === _ ? 2 : _,
                  C = ((0, A.$k)(n) ? n : {}).clipDot,
                  N = void 0 === C || C,
                  D = 2 * M + T;
                return i.createElement(
                  x.m,
                  { className: g },
                  O || j
                    ? i.createElement(
                        "defs",
                        null,
                        i.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(E) },
                          i.createElement("rect", {
                            x: O ? l : l - p / 2,
                            y: j ? c : c - d / 2,
                            width: O ? p : 2 * p,
                            height: j ? d : 2 * d,
                          }),
                        ),
                        !N &&
                          i.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(E) },
                            i.createElement("rect", {
                              x: l - D / 2,
                              y: c - D / 2,
                              width: p + D,
                              height: d + D,
                            }),
                          ),
                      )
                    : null,
                  b ? null : this.renderArea(S, E),
                  (n || b) && this.renderDots(S, N, E),
                  (!y || m) && w.e.renderCallByParent(this.props, o),
                );
              },
            },
          ]) && C(e.prototype, r),
          n && C(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          c
        );
      })(i.PureComponent);
      (n = z),
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
        L(z, "getBaseValue", function (t, e, r, n) {
          var o = t.layout,
            i = t.baseValue,
            a = e.props.baseValue,
            u = null != a ? a : i;
          if ((0, j.hj)(u) && "number" == typeof u) return u;
          var c = "horizontal" === o ? n : r,
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
            r = t.props,
            o = t.item,
            i = t.xAxis,
            a = t.yAxis,
            u = t.xAxisTicks,
            c = t.yAxisTicks,
            l = t.bandSize,
            s = t.dataKey,
            f = t.stackedData,
            p = t.dataStartIndex,
            h = t.displayedData,
            d = t.offset,
            y = r.layout,
            v = f && f.length,
            m = n.getBaseValue(r, o, i, a),
            b = "horizontal" === y,
            g = !1,
            x = h.map(function (t, e) {
              var r;
              v
                ? (r = f[p + e])
                : ((r = (0, S.F$)(t, s)),
                  Array.isArray(r) ? (g = !0) : (r = [m, r]));
              var n = null == r[1] || (v && null == (0, S.F$)(t, s));
              return b
                ? {
                    x: (0, S.Hv)({
                      axis: i,
                      ticks: u,
                      bandSize: l,
                      entry: t,
                      index: e,
                    }),
                    y: n ? null : a.scale(r[1]),
                    value: r,
                    payload: t,
                  }
                : {
                    x: n ? null : i.scale(r[1]),
                    y: (0, S.Hv)({
                      axis: a,
                      ticks: c,
                      bandSize: l,
                      entry: t,
                      index: e,
                    }),
                    value: r,
                    payload: t,
                  };
            });
          return (
            (e =
              v || g
                ? x.map(function (t) {
                    var e = Array.isArray(t.value) ? t.value[0] : null;
                    return b
                      ? {
                          x: t.x,
                          y: null != e && null != t.y ? a.scale(e) : null,
                        }
                      : { x: null != e ? i.scale(e) : null, y: t.y };
                  })
                : b
                ? a.scale(m)
                : i.scale(m)),
            T({ points: x, baseLine: e, layout: y, isRange: g }, d)
          );
        }),
        L(z, "renderDotItem", function (t, e) {
          return i.isValidElement(t)
            ? i.cloneElement(t, e)
            : l()(t)
            ? t(e)
            : i.createElement(
                g.o,
                M({}, e, { className: "recharts-area-dot" }),
              );
        });
      var U = r(28531),
        F = r(52942),
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
      var W = r(85458),
        Z = r(85674),
        q = r(81156),
        G = r(58054),
        H = r(37350),
        V = ["option", "isActive"];
      function X() {
        return (
          (X = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          X.apply(this, arguments)
        );
      }
      function Y(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function K(t) {
        var e = t.option,
          r = t.isActive,
          n = Y(t, V);
        return "string" == typeof e
          ? i.createElement(
              H.bn,
              X(
                {
                  option: i.createElement(G.v, X({ type: e }, n)),
                  isActive: r,
                  shapeType: "symbols",
                },
                n,
              ),
            )
          : i.createElement(
              H.bn,
              X({ option: e, isActive: r, shapeType: "symbols" }, n),
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
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          Q.apply(this, arguments)
        );
      }
      function tt(t, e) {
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
      function et(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? tt(Object(r), !0).forEach(function (e) {
                ut(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function rt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, ct(n.key), n);
        }
      }
      function nt(t, e) {
        return (
          (nt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          nt(t, e)
        );
      }
      function ot(t) {
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
            n = at(t);
          if (e) {
            var o = at(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === J(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return it(t);
          })(this, r);
        };
      }
      function it(t) {
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
      function ut(t, e, r) {
        return (
          (e = ct(e)) in t
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
      function ct(t) {
        var e = (function (t, e) {
          if ("object" !== J(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== J(n)) return n;
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
            e && nt(t, e);
        })(c, t);
        var e,
          r,
          n,
          o = ot(c);
        function c() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, c);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            ut(it((t = o.call.apply(o, [this].concat(r)))), "state", {
              isAnimationFinished: !1,
            }),
            ut(it(t), "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 });
            }),
            ut(it(t), "handleAnimationStart", function () {
              t.setState({ isAnimationFinished: !1 });
            }),
            ut(it(t), "id", (0, j.EL)("recharts-scatter-")),
            t
          );
        }
        return (
          (e = c),
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
          ]),
          (r = [
            {
              key: "renderSymbolsStatically",
              value: function (t) {
                var e = this,
                  r = this.props,
                  n = r.shape,
                  o = r.activeShape,
                  a = r.activeIndex,
                  u = (0, A.L6)(this.props);
                return t.map(function (t, r) {
                  var c = a === r,
                    l = c ? o : n,
                    s = et(et({ key: "symbol-".concat(r) }, u), t);
                  return i.createElement(
                    x.m,
                    Q(
                      { className: "recharts-scatter-symbol" },
                      (0, q.bw)(e.props, t, r),
                      {
                        key: "symbol-"
                          .concat(null == t ? void 0 : t.cx, "-")
                          .concat(null == t ? void 0 : t.cy, "-")
                          .concat(null == t ? void 0 : t.size),
                        role: "img",
                      },
                    ),
                    i.createElement(K, Q({ option: l, isActive: c }, s)),
                  );
                });
              },
            },
            {
              key: "renderSymbolsWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.points,
                  n = e.isAnimationActive,
                  o = e.animationBegin,
                  a = e.animationDuration,
                  c = e.animationEasing,
                  l = e.animationId,
                  s = this.state.prevPoints;
                return i.createElement(
                  u.ZP,
                  {
                    begin: o,
                    duration: a,
                    isActive: n,
                    easing: c,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(l),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (e) {
                    var n = e.t,
                      o = r.map(function (t, e) {
                        var r = s && s[e];
                        if (r) {
                          var o = (0, j.k4)(r.cx, t.cx),
                            i = (0, j.k4)(r.cy, t.cy),
                            a = (0, j.k4)(r.size, t.size);
                          return et(
                            et({}, t),
                            {},
                            { cx: o(n), cy: i(n), size: a(n) },
                          );
                        }
                        var u = (0, j.k4)(0, t.size);
                        return et(et({}, t), {}, { size: u(n) });
                      });
                    return i.createElement(
                      x.m,
                      null,
                      t.renderSymbolsStatically(o),
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
                  r = t.isAnimationActive,
                  n = this.state.prevPoints;
                return !(r && e && e.length) || (n && m()(n, e))
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
                  r = t.xAxis,
                  n = t.yAxis,
                  o = t.children,
                  a = (0, A.NN)(o, W.W);
                return a
                  ? a.map(function (t, o) {
                      var a = t.props,
                        u = a.direction,
                        c = a.dataKey;
                      return i.cloneElement(t, {
                        key: "".concat(u, "-").concat(c, "-").concat(e[o]),
                        data: e,
                        xAxis: r,
                        yAxis: n,
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
                  r = this.props,
                  n = r.points,
                  o = r.line,
                  a = r.lineType,
                  u = r.lineJointType,
                  c = (0, A.L6)(this.props),
                  s = (0, A.L6)(o);
                if ("joint" === a)
                  t = n.map(function (t) {
                    return { x: t.cx, y: t.cy };
                  });
                else if ("fitting" === a) {
                  var f = (0, j.wr)(n),
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
                  (e = i.isValidElement(o)
                    ? i.cloneElement(o, m)
                    : l()(o)
                    ? o(m)
                    : i.createElement(b.H, Q({}, m, { type: u }))),
                  i.createElement(
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
                  r = t.points,
                  n = t.line,
                  o = t.className,
                  u = t.xAxis,
                  c = t.yAxis,
                  l = t.left,
                  s = t.top,
                  f = t.width,
                  p = t.height,
                  d = t.id,
                  y = t.isAnimationActive;
                if (e || !r || !r.length) return null;
                var v = this.state.isAnimationFinished,
                  m = (0, a.Z)("recharts-scatter", o),
                  b = u && u.allowDataOverflow,
                  g = c && c.allowDataOverflow,
                  O = b || g,
                  j = h()(d) ? this.id : d;
                return i.createElement(
                  x.m,
                  {
                    className: m,
                    clipPath: O ? "url(#clipPath-".concat(j, ")") : null,
                  },
                  b || g
                    ? i.createElement(
                        "defs",
                        null,
                        i.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(j) },
                          i.createElement("rect", {
                            x: b ? l : l - f / 2,
                            y: g ? s : s - p / 2,
                            width: b ? f : 2 * f,
                            height: g ? p : 2 * p,
                          }),
                        ),
                      )
                    : null,
                  n && this.renderLine(),
                  this.renderErrorBar(),
                  i.createElement(
                    x.m,
                    { key: "recharts-scatter-symbols" },
                    this.renderSymbols(),
                  ),
                  (!y || v) && w.e.renderCallByParent(this.props, r),
                );
              },
            },
          ]) && rt(e.prototype, r),
          n && rt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          c
        );
      })(i.PureComponent);
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
            r = t.yAxis,
            n = t.zAxis,
            o = t.item,
            i = t.displayedData,
            a = t.xAxisTicks,
            u = t.yAxisTicks,
            c = t.offset,
            l = o.props.tooltipType,
            s = (0, A.NN)(o.props.children, Z.b),
            f = h()(e.dataKey) ? o.props.dataKey : e.dataKey,
            p = h()(r.dataKey) ? o.props.dataKey : r.dataKey,
            d = n && n.dataKey,
            y = n ? n.range : $.defaultProps.range,
            v = y && y[0],
            m = e.scale.bandwidth ? e.scale.bandwidth() : 0,
            b = r.scale.bandwidth ? r.scale.bandwidth() : 0,
            g = i.map(function (t, i) {
              var c = (0, S.F$)(t, f),
                y = (0, S.F$)(t, p),
                g = (!h()(d) && (0, S.F$)(t, d)) || "-",
                x = [
                  {
                    name: h()(e.dataKey) ? o.props.name : e.name || e.dataKey,
                    unit: e.unit || "",
                    value: c,
                    payload: t,
                    dataKey: f,
                    type: l,
                  },
                  {
                    name: h()(r.dataKey) ? o.props.name : r.name || r.dataKey,
                    unit: r.unit || "",
                    value: y,
                    payload: t,
                    dataKey: p,
                    type: l,
                  },
                ];
              "-" !== g &&
                x.push({
                  name: n.name || n.dataKey,
                  unit: n.unit || "",
                  value: g,
                  payload: t,
                  dataKey: d,
                  type: l,
                });
              var w = (0, S.Hv)({
                  axis: e,
                  ticks: a,
                  bandSize: m,
                  entry: t,
                  index: i,
                  dataKey: f,
                }),
                O = (0, S.Hv)({
                  axis: r,
                  ticks: u,
                  bandSize: b,
                  entry: t,
                  index: i,
                  dataKey: p,
                }),
                j = "-" !== g ? n.scale(g) : v,
                A = Math.sqrt(Math.max(j, 0) / Math.PI);
              return et(
                et({}, t),
                {},
                {
                  cx: w,
                  cy: O,
                  x: w - A,
                  y: O - A,
                  xAxis: e,
                  yAxis: r,
                  zAxis: n,
                  width: 2 * A,
                  height: 2 * A,
                  size: j,
                  node: { x: c, y, z: g },
                  tooltipPayload: x,
                  tooltipPosition: { x: w, y: O },
                  payload: t,
                },
                s && s[i] && s[i].props,
              );
            });
          return et({ points: g }, c);
        });
      var st = r(90291),
        ft = r(56886),
        pt = r(52871),
        ht = (0, o.z)({
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
    11914: (t, e, r) => {
      "use strict";
      r.d(e, { z: () => Fe });
      var n = r(47427),
        o = r(38716),
        i = r.n(o),
        a = r(8889),
        u = r.n(a),
        c = r(76072),
        l = r.n(c),
        s = r(18310),
        f = r.n(s),
        p = r(2045),
        h = r.n(p),
        d = r(48679),
        y = r.n(d),
        v = r(29200),
        m = r.n(v),
        b = r(55084),
        g = r.n(b),
        x = r(84148),
        w = r(7716),
        O = r(53460);
      function j(t) {
        var e = t.cx,
          r = t.cy,
          n = t.radius,
          o = t.startAngle,
          i = t.endAngle;
        return {
          points: [(0, O.op)(e, r, n, o), (0, O.op)(e, r, n, i)],
          cx: e,
          cy: r,
          radius: n,
          startAngle: o,
          endAngle: i,
        };
      }
      var S = r(76325),
        A = r(12605),
        E = r(77125),
        P = r(52871);
      function k(t, e, r) {
        if (e < 1) return [];
        if (1 === e && void 0 === r) return t;
        for (var n = [], o = 0; o < t.length; o += e) {
          if (void 0 !== r && !0 !== r(t[o])) return;
          n.push(t[o]);
        }
        return n;
      }
      function M(t, e, r, n, o) {
        if (t * e < t * n || t * e > t * o) return !1;
        var i = r();
        return t * (e - (t * i) / 2 - n) >= 0 && t * (e + (t * i) / 2 - o) <= 0;
      }
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
      function T(t, e) {
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
      function C(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? T(Object(r), !0).forEach(function (e) {
                N(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : T(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function N(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== _(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== _(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === _(e) ? e : String(e);
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
      function D(t, e, r) {
        var n = t.tick,
          o = t.ticks,
          i = t.viewBox,
          a = t.minTickGap,
          c = t.orientation,
          l = t.interval,
          s = t.tickFormatter,
          f = t.unit,
          p = t.angle;
        if (!o || !o.length || !n) return [];
        if ((0, S.hj)(l) || E.x.isSsr)
          return (function (t, e) {
            return k(t, e + 1);
          })(o, "number" == typeof l && (0, S.hj)(l) ? l : 0);
        var h = [],
          d = "top" === c || "bottom" === c ? "width" : "height",
          y =
            f && "width" === d
              ? (0, A.xE)(f, { fontSize: e, letterSpacing: r })
              : { width: 0, height: 0 },
          v = function (t, n) {
            var o = u()(s) ? s(t.value, n) : t.value;
            return "width" === d
              ? (function (t, e, r) {
                  var n = {
                    width: t.width + e.width,
                    height: t.height + e.height,
                  };
                  return (0, P.xE)(n, r);
                })((0, A.xE)(o, { fontSize: e, letterSpacing: r }), y, p)
              : (0, A.xE)(o, { fontSize: e, letterSpacing: r })[d];
          },
          m = o.length >= 2 ? (0, S.uY)(o[1].coordinate - o[0].coordinate) : 1,
          b = (function (t, e, r) {
            var n = "width" === r,
              o = t.x,
              i = t.y,
              a = t.width,
              u = t.height;
            return 1 === e
              ? { start: n ? o : i, end: n ? o + a : i + u }
              : { start: n ? o + a : i + u, end: n ? o : i };
          })(i, m, d);
        return "equidistantPreserveStart" === l
          ? (function (t, e, r, n, o) {
              for (
                var i,
                  a = (n || []).slice(),
                  u = e.start,
                  c = e.end,
                  l = 0,
                  s = 1,
                  f = u,
                  p = function () {
                    var e = null == n ? void 0 : n[l];
                    if (void 0 === e) return { v: k(n, s) };
                    var i,
                      a = l,
                      p = function () {
                        return void 0 === i && (i = r(e, a)), i;
                      },
                      h = e.coordinate,
                      d = 0 === l || M(t, h, p, f, c);
                    d || ((l = 0), (f = u), (s += 1)),
                      d && ((f = h + t * (p() / 2 + o)), (l += s));
                  };
                s <= a.length;

              )
                if ((i = p())) return i.v;
              return [];
            })(m, b, v, o, a)
          : ((h =
              "preserveStart" === l || "preserveStartEnd" === l
                ? (function (t, e, r, n, o, i) {
                    var a = (n || []).slice(),
                      u = a.length,
                      c = e.start,
                      l = e.end;
                    if (i) {
                      var s = n[u - 1],
                        f = r(s, u - 1),
                        p = t * (s.coordinate + (t * f) / 2 - l);
                      (a[u - 1] = s =
                        C(
                          C({}, s),
                          {},
                          {
                            tickCoord:
                              p > 0 ? s.coordinate - p * t : s.coordinate,
                          },
                        )),
                        M(
                          t,
                          s.tickCoord,
                          function () {
                            return f;
                          },
                          c,
                          l,
                        ) &&
                          ((l = s.tickCoord - t * (f / 2 + o)),
                          (a[u - 1] = C(C({}, s), {}, { isShow: !0 })));
                    }
                    for (
                      var h = i ? u - 1 : u,
                        d = function (e) {
                          var n,
                            i = a[e],
                            u = function () {
                              return void 0 === n && (n = r(i, e)), n;
                            };
                          if (0 === e) {
                            var s = t * (i.coordinate - (t * u()) / 2 - c);
                            a[e] = i = C(
                              C({}, i),
                              {},
                              {
                                tickCoord:
                                  s < 0 ? i.coordinate - s * t : i.coordinate,
                              },
                            );
                          } else
                            a[e] = i = C(
                              C({}, i),
                              {},
                              { tickCoord: i.coordinate },
                            );
                          M(t, i.tickCoord, u, c, l) &&
                            ((c = i.tickCoord + t * (u() / 2 + o)),
                            (a[e] = C(C({}, i), {}, { isShow: !0 })));
                        },
                        y = 0;
                      y < h;
                      y++
                    )
                      d(y);
                    return a;
                  })(m, b, v, o, a, "preserveStartEnd" === l)
                : (function (t, e, r, n, o) {
                    for (
                      var i = (n || []).slice(),
                        a = i.length,
                        u = e.start,
                        c = e.end,
                        l = function (e) {
                          var n,
                            l = i[e],
                            s = function () {
                              return void 0 === n && (n = r(l, e)), n;
                            };
                          if (e === a - 1) {
                            var f = t * (l.coordinate + (t * s()) / 2 - c);
                            i[e] = l = C(
                              C({}, l),
                              {},
                              {
                                tickCoord:
                                  f > 0 ? l.coordinate - f * t : l.coordinate,
                              },
                            );
                          } else
                            i[e] = l = C(
                              C({}, l),
                              {},
                              { tickCoord: l.coordinate },
                            );
                          M(t, l.tickCoord, s, u, c) &&
                            ((c = l.tickCoord - t * (s() / 2 + o)),
                            (i[e] = C(C({}, l), {}, { isShow: !0 })));
                        },
                        s = a - 1;
                      s >= 0;
                      s--
                    )
                      l(s);
                    return i;
                  })(m, b, v, o, a)),
            h.filter(function (t) {
              return t.isShow;
            }));
      }
      var I = r(82440),
        B = r(47430),
        L = r(72236),
        R = r(88579),
        z = r(84223),
        U = r(94797);
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
      var $ = ["x", "y", "top", "left", "width", "height", "className"];
      function W() {
        return (
          (W = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          W.apply(this, arguments)
        );
      }
      function Z(t, e) {
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
      function q(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== F(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== F(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === F(e) ? e : String(e);
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
      function G(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      var H = function (t, e, r, n, o, i) {
          return "M"
            .concat(t, ",")
            .concat(o, "v")
            .concat(n, "M")
            .concat(i, ",")
            .concat(e, "h")
            .concat(r);
        },
        V = function (t) {
          var e = t.x,
            r = void 0 === e ? 0 : e,
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
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? Z(Object(r), !0).forEach(function (e) {
                      q(t, e, r[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r),
                    )
                  : Z(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e),
                      );
                    });
              }
              return t;
            })({ x: r, y: i, top: u, left: l, width: f, height: h }, G(t, $));
          return (0, S.hj)(r) &&
            (0, S.hj)(i) &&
            (0, S.hj)(f) &&
            (0, S.hj)(h) &&
            (0, S.hj)(u) &&
            (0, S.hj)(l)
            ? n.createElement(
                "path",
                W({}, (0, U.L6)(y, !0), {
                  className: (0, x.Z)("recharts-cross", d),
                  d: H(r, i, f, h, u, l),
                }),
              )
            : null;
        },
        X = r(55287),
        Y = r(14166),
        K = r(83821),
        J = r(31917),
        Q = r(93998),
        tt = r(47094),
        et = r(81156),
        rt = ["viewBox"],
        nt = ["viewBox"],
        ot = ["ticks"];
      function it(t) {
        return (
          (it =
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
          it(t)
        );
      }
      function at() {
        return (
          (at = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          at.apply(this, arguments)
        );
      }
      function ut(t, e) {
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
      function ct(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ut(Object(r), !0).forEach(function (e) {
                dt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ut(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function lt(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function st(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, yt(n.key), n);
        }
      }
      function ft(t, e) {
        return (
          (ft = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          ft(t, e)
        );
      }
      function pt(t) {
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
            n = ht(t);
          if (e) {
            var o = ht(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === it(e) || "function" == typeof e)) return e;
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
      function ht(t) {
        return (
          (ht = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ht(t)
        );
      }
      function dt(t, e, r) {
        return (
          (e = yt(e)) in t
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
      function yt(t) {
        var e = (function (t, e) {
          if ("object" !== it(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== it(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === it(e) ? e : String(e);
      }
      var vt = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && ft(t, e);
        })(a, t);
        var e,
          r,
          o,
          i = pt(a);
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
              value: function (t, e, r) {
                return n.isValidElement(t)
                  ? n.cloneElement(t, e)
                  : u()(t)
                  ? t(e)
                  : n.createElement(
                      Q.x,
                      at({}, e, {
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
                  n = lt(t, rt),
                  o = this.props,
                  i = o.viewBox,
                  a = lt(o, nt);
                return (
                  !(0, J.w)(r, i) || !(0, J.w)(n, a) || !(0, J.w)(e, this.state)
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
                  b = (0, S.hj)(t.tickCoord) ? t.tickCoord : t.coordinate;
                switch (p) {
                  case "top":
                    (e = r = t.coordinate),
                      (a = (n = (o = l + +!d * f) - v * m) - v * y),
                      (i = b);
                    break;
                  case "left":
                    (n = o = t.coordinate),
                      (i = (e = (r = c + +!d * s) - v * m) - v * y),
                      (a = b);
                    break;
                  case "right":
                    (n = o = t.coordinate),
                      (i = (e = (r = c + +d * s) + v * m) + v * y),
                      (a = b);
                    break;
                  default:
                    (e = r = t.coordinate),
                      (a = (n = (o = l + +d * f) + v * m) + v * y),
                      (i = b);
                }
                return {
                  line: { x1: e, y1: n, x2: r, y2: o },
                  tick: { x: i, y: a },
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
                  o = t.width,
                  i = t.height,
                  a = t.orientation,
                  u = t.mirror,
                  c = t.axisLine,
                  l = ct(
                    ct(ct({}, (0, U.L6)(this.props)), (0, U.L6)(c)),
                    {},
                    { fill: "none" },
                  );
                if ("top" === a || "bottom" === a) {
                  var s = +(("top" === a && !u) || ("bottom" === a && u));
                  l = ct(
                    ct({}, l),
                    {},
                    { x1: e, y1: r + s * i, x2: e + o, y2: r + s * i },
                  );
                } else {
                  var p = +(("left" === a && !u) || ("right" === a && u));
                  l = ct(
                    ct({}, l),
                    {},
                    { x1: e + p * o, y1: r, x2: e + p * o, y2: r + i },
                  );
                }
                return n.createElement(
                  "line",
                  at({}, l, {
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
              value: function (t, e, r) {
                var o = this,
                  i = this.props,
                  c = i.tickLine,
                  l = i.stroke,
                  s = i.tick,
                  p = i.tickFormatter,
                  h = i.unit,
                  d = D(ct(ct({}, this.props), {}, { ticks: t }), e, r),
                  y = this.getTickTextAnchor(),
                  v = this.getTickVerticalAnchor(),
                  m = (0, U.L6)(this.props),
                  b = (0, U.L6)(s),
                  g = ct(ct({}, m), {}, { fill: "none" }, (0, U.L6)(c)),
                  w = d.map(function (t, e) {
                    var r = o.getTickLineCoord(t),
                      i = r.line,
                      w = r.tick,
                      O = ct(
                        ct(
                          ct(
                            ct({ textAnchor: y, verticalAnchor: v }, m),
                            {},
                            { stroke: "none", fill: l },
                            b,
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
                    return n.createElement(
                      B.m,
                      at(
                        {
                          className: "recharts-cartesian-axis-tick",
                          key: "tick-"
                            .concat(t.value, "-")
                            .concat(t.coordinate, "-")
                            .concat(t.tickCoord),
                        },
                        (0, et.bw)(o.props, t, e),
                      ),
                      c &&
                        n.createElement(
                          "line",
                          at({}, g, i, {
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
                return n.createElement(
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
                  r = e.axisLine,
                  o = e.width,
                  i = e.height,
                  a = e.ticksGenerator,
                  c = e.className;
                if (e.hide) return null;
                var l = this.props,
                  s = l.ticks,
                  f = lt(l, ot),
                  p = s;
                return (
                  u()(a) && (p = s && s.length > 0 ? a(this.props) : a(f)),
                  o <= 0 || i <= 0 || !p || !p.length
                    ? null
                    : n.createElement(
                        B.m,
                        {
                          className: (0, x.Z)("recharts-cartesian-axis", c),
                          ref: function (e) {
                            t.layerReference = e;
                          },
                        },
                        r && this.renderAxisLine(),
                        this.renderTicks(
                          p,
                          this.state.fontSize,
                          this.state.letterSpacing,
                        ),
                        tt._.renderCallByParent(this.props),
                      )
                );
              },
            },
          ]) && st(e.prototype, r),
          o && st(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(n.Component);
      dt(vt, "displayName", "CartesianAxis"),
        dt(vt, "defaultProps", {
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
      var mt = r(9756),
        bt = r(70416);
      function gt(t) {
        return (
          (gt =
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
          gt(t)
        );
      }
      function xt(t, e) {
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
      function wt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? xt(Object(r), !0).forEach(function (e) {
                Ot(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : xt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function Ot(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== gt(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== gt(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === gt(e) ? e : String(e);
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
      var jt = ["Webkit", "Moz", "O", "ms"];
      function St(t) {
        return (
          (St =
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
          St(t)
        );
      }
      function At() {
        return (
          (At = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          At.apply(this, arguments)
        );
      }
      function Et(t, e) {
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
      function Pt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Et(Object(r), !0).forEach(function (e) {
                Nt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Et(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function kt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Dt(n.key), n);
        }
      }
      function Mt(t, e) {
        return (
          (Mt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Mt(t, e)
        );
      }
      function _t(t) {
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
            n = Ct(t);
          if (e) {
            var o = Ct(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === St(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return Tt(t);
          })(this, r);
        };
      }
      function Tt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function Ct(t) {
        return (
          (Ct = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ct(t)
        );
      }
      function Nt(t, e, r) {
        return (
          (e = Dt(e)) in t
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
      function Dt(t) {
        var e = (function (t, e) {
          if ("object" !== St(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== St(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === St(e) ? e : String(e);
      }
      var It = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        Bt = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && Mt(t, e);
          })(a, t);
          var e,
            r,
            o,
            i = _t(a);
          function a(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              Nt(Tt((e = i.call(this, t))), "handleDrag", function (t) {
                e.leaveTimer &&
                  (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
                  e.state.isTravellerMoving
                    ? e.handleTravellerMove(t)
                    : e.state.isSlideMoving && e.handleSlideDrag(t);
              }),
              Nt(Tt(e), "handleTouchMove", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  e.handleDrag(t.changedTouches[0]);
              }),
              Nt(Tt(e), "handleDragEnd", function () {
                e.setState(
                  { isTravellerMoving: !1, isSlideMoving: !1 },
                  function () {
                    var t = e.props,
                      r = t.endIndex,
                      n = t.onDragEnd,
                      o = t.startIndex;
                    null == n || n({ endIndex: r, startIndex: o });
                  },
                ),
                  e.detachDragEndListener();
              }),
              Nt(Tt(e), "handleLeaveWrapper", function () {
                (e.state.isTravellerMoving || e.state.isSlideMoving) &&
                  (e.leaveTimer = window.setTimeout(
                    e.handleDragEnd,
                    e.props.leaveTimeOut,
                  ));
              }),
              Nt(Tt(e), "handleEnterSlideOrTraveller", function () {
                e.setState({ isTextActive: !0 });
              }),
              Nt(Tt(e), "handleLeaveSlideOrTraveller", function () {
                e.setState({ isTextActive: !1 });
              }),
              Nt(Tt(e), "handleSlideDragStart", function (t) {
                var r = It(t) ? t.changedTouches[0] : t;
                e.setState({
                  isTravellerMoving: !1,
                  isSlideMoving: !0,
                  slideMoveStartX: r.pageX,
                }),
                  e.attachDragEndListener();
              }),
              (e.travellerDragStartHandlers = {
                startX: e.handleTravellerDragStart.bind(Tt(e), "startX"),
                endX: e.handleTravellerDragStart.bind(Tt(e), "endX"),
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
                    r = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.stroke,
                    u = Math.floor(r + i / 2) - 1;
                  return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement("rect", {
                      x: e,
                      y: r,
                      width: o,
                      height: i,
                      fill: a,
                      stroke: "none",
                    }),
                    n.createElement("line", {
                      x1: e + 1,
                      y1: u,
                      x2: e + o - 1,
                      y2: u,
                      fill: "none",
                      stroke: "#fff",
                    }),
                    n.createElement("line", {
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
                  return n.isValidElement(t)
                    ? n.cloneElement(t, e)
                    : u()(t)
                    ? t(e)
                    : a.renderDefaultTraveller(e);
                },
              },
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  var r = t.data,
                    n = t.width,
                    o = t.x,
                    i = t.travellerWidth,
                    a = t.updateId,
                    u = t.startIndex,
                    c = t.endIndex;
                  if (r !== e.prevData || a !== e.prevUpdateId)
                    return Pt(
                      {
                        prevData: r,
                        prevTravellerWidth: i,
                        prevUpdateId: a,
                        prevX: o,
                        prevWidth: n,
                      },
                      r && r.length
                        ? (function (t) {
                            var e = t.data,
                              r = t.startIndex,
                              n = t.endIndex,
                              o = t.x,
                              i = t.width,
                              a = t.travellerWidth;
                            if (!e || !e.length) return {};
                            var u = e.length,
                              c = (0, mt.x)()
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
                              startX: c(r),
                              endX: c(n),
                              scale: c,
                              scaleValues: s,
                            };
                          })({
                            data: r,
                            width: n,
                            x: o,
                            travellerWidth: i,
                            startIndex: u,
                            endIndex: c,
                          })
                        : { scale: null, scaleValues: null },
                    );
                  if (
                    e.scale &&
                    (n !== e.prevWidth ||
                      o !== e.prevX ||
                      i !== e.prevTravellerWidth)
                  ) {
                    e.scale.range([o, o + n - i]);
                    var s = e.scale.domain().map(function (t) {
                      return e.scale(t);
                    });
                    return {
                      prevData: r,
                      prevTravellerWidth: i,
                      prevUpdateId: a,
                      prevX: o,
                      prevWidth: n,
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
                  for (var r = 0, n = t.length - 1; n - r > 1; ) {
                    var o = Math.floor((r + n) / 2);
                    t[o] > e ? (n = o) : (r = o);
                  }
                  return e >= t[n] ? n : r;
                },
              },
            ]),
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
                    o = this.props,
                    i = o.gap,
                    u = o.data.length - 1,
                    c = Math.min(e, r),
                    l = Math.max(e, r),
                    s = a.getIndexInRange(n, c),
                    f = a.getIndexInRange(n, l);
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
                    r = e.data,
                    n = e.tickFormatter,
                    o = e.dataKey,
                    i = (0, bt.F$)(r[t], o, t);
                  return u()(n) ? n(i, t) : i;
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
                    o = e.endX,
                    i = this.props,
                    a = i.x,
                    u = i.width,
                    c = i.travellerWidth,
                    l = i.startIndex,
                    s = i.endIndex,
                    f = i.onChange,
                    p = t.pageX - r;
                  p > 0
                    ? (p = Math.min(p, a + u - c - o, a + u - c - n))
                    : p < 0 && (p = Math.max(p, a - n, a - o));
                  var h = this.getIndex({ startX: n + p, endX: o + p });
                  (h.startIndex === l && h.endIndex === s) || !f || f(h),
                    this.setState({
                      startX: n + p,
                      endX: o + p,
                      slideMoveStartX: t.pageX,
                    });
                },
              },
              {
                key: "handleTravellerDragStart",
                value: function (t, e) {
                  var r = It(e) ? e.changedTouches[0] : e;
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
                    o = r.movingTravellerId,
                    i = r.endX,
                    a = r.startX,
                    u = this.state[o],
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
                    (y[o] = u + v);
                  var m = this.getIndex(y),
                    b = m.startIndex,
                    g = m.endIndex;
                  this.setState(
                    (Nt((e = {}), o, u + v),
                    Nt(e, "brushMoveStartX", t.pageX),
                    e),
                    function () {
                      var t;
                      p &&
                        ((t = d.length - 1),
                        (("startX" === o &&
                          (i > a ? b % h == 0 : g % h == 0)) ||
                          (i < a && g === t) ||
                          ("endX" === o && (i > a ? g % h == 0 : b % h == 0)) ||
                          (i > a && g === t)) &&
                          p(m));
                    },
                  );
                },
              },
              {
                key: "handleTravellerMoveKeyboard",
                value: function (t, e) {
                  var r = this,
                    n = this.state,
                    o = n.scaleValues,
                    i = n.startX,
                    a = n.endX,
                    u = this.state[e],
                    c = o.indexOf(u);
                  if (-1 !== c) {
                    var l = c + t;
                    if (!(-1 === l || l >= o.length)) {
                      var s = o[l];
                      ("startX" === e && s >= a) ||
                        ("endX" === e && s <= i) ||
                        this.setState(Nt({}, e, s), function () {
                          r.props.onChange(
                            r.getIndex({
                              startX: r.state.startX,
                              endX: r.state.endX,
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
                    r = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.fill,
                    u = t.stroke;
                  return n.createElement("rect", {
                    stroke: u,
                    fill: a,
                    x: e,
                    y: r,
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
                    r = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.data,
                    u = t.children,
                    c = t.padding,
                    l = n.Children.only(u);
                  return l
                    ? n.cloneElement(l, {
                        x: e,
                        y: r,
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
                  var r = this,
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
                    y = Pt(
                      Pt({}, (0, U.L6)(this.props)),
                      {},
                      { x: d, y: i, width: u, height: c },
                    ),
                    v =
                      s ||
                      "Min value: "
                        .concat(f[p].name, ", Max value: ")
                        .concat(f[h].name);
                  return n.createElement(
                    B.m,
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
                          r.handleTravellerMoveKeyboard(
                            "ArrowRight" === t.key ? 1 : -1,
                            e,
                          ));
                      },
                      onFocus: function () {
                        r.setState({ isTravellerFocused: !0 });
                      },
                      onBlur: function () {
                        r.setState({ isTravellerFocused: !1 });
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
                  var r = this.props,
                    o = r.y,
                    i = r.height,
                    a = r.stroke,
                    u = r.travellerWidth,
                    c = Math.min(t, e) + u,
                    l = Math.max(Math.abs(e - t) - u, 0);
                  return n.createElement("rect", {
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
                    r = t.endIndex,
                    o = t.y,
                    i = t.height,
                    a = t.travellerWidth,
                    u = t.stroke,
                    c = this.state,
                    l = c.startX,
                    s = c.endX,
                    f = { pointerEvents: "none", fill: u };
                  return n.createElement(
                    B.m,
                    { className: "recharts-brush-texts" },
                    n.createElement(
                      Q.x,
                      At(
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
                    n.createElement(
                      Q.x,
                      At(
                        {
                          textAnchor: "start",
                          verticalAnchor: "middle",
                          x: Math.max(l, s) + a + 5,
                          y: o + i / 2,
                        },
                        f,
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
                    !(0, S.hj)(i) ||
                    !(0, S.hj)(a) ||
                    !(0, S.hj)(u) ||
                    !(0, S.hj)(c) ||
                    u <= 0 ||
                    c <= 0
                  )
                    return null;
                  var m = (0, x.Z)("recharts-brush", r),
                    b = 1 === n.Children.count(o),
                    g = (function (t, e) {
                      if (!t) return null;
                      var r = t.replace(/(\w)/, function (t) {
                          return t.toUpperCase();
                        }),
                        n = jt.reduce(function (t, n) {
                          return wt(wt({}, t), {}, Ot({}, n + r, e));
                        }, {});
                      return (n[t] = e), n;
                    })("userSelect", "none");
                  return n.createElement(
                    B.m,
                    {
                      className: m,
                      onMouseLeave: this.handleLeaveWrapper,
                      onTouchMove: this.handleTouchMove,
                      style: g,
                    },
                    this.renderBackground(),
                    b && this.renderPanorama(),
                    this.renderSlide(f, p),
                    this.renderTravellerLayer(f, "startX"),
                    this.renderTravellerLayer(p, "endX"),
                    (h || d || y || v || l) && this.renderText(),
                  );
                },
              },
            ]) && kt(e.prototype, r),
            o && kt(e, o),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(n.PureComponent);
      Nt(Bt, "displayName", "Brush"),
        Nt(Bt, "defaultProps", {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: "#fff",
          stroke: "#666",
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1,
        });
      var Lt = r(52255),
        Rt = r(75658),
        zt = r(90481);
      function Ut(t) {
        return (
          (Ut =
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
          Ut(t)
        );
      }
      function Ft() {
        return (
          (Ft = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          Ft.apply(this, arguments)
        );
      }
      function $t(t, e) {
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
      function Wt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? $t(Object(r), !0).forEach(function (e) {
                Zt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : $t(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function Zt(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== Ut(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== Ut(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === Ut(e) ? e : String(e);
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
      function qt(t) {
        var e = t.x,
          r = t.y,
          o = t.r,
          i = t.alwaysShow,
          a = t.clipPathId,
          u = (0, S.P2)(e),
          c = (0, S.P2)(r);
        if (
          ((0, zt.Z)(
            void 0 === i,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
          ),
          !u || !c)
        )
          return null;
        var l = (function (t) {
          var e = t.x,
            r = t.y,
            n = t.xAxis,
            o = t.yAxis,
            i = (0, P.Ky)({ x: n.scale, y: o.scale }),
            a = i.apply({ x: e, y: r }, { bandAware: !0 });
          return (0, Rt.B)(t, "discard") && !i.isInRange(a) ? null : a;
        })(t);
        if (!l) return null;
        var s = l.x,
          f = l.y,
          p = t.shape,
          h = t.className,
          d = Wt(
            Wt(
              {
                clipPath: (0, Rt.B)(t, "hidden")
                  ? "url(#".concat(a, ")")
                  : void 0,
              },
              (0, U.L6)(t, !0),
            ),
            {},
            { cx: s, cy: f },
          );
        return n.createElement(
          B.m,
          { className: (0, x.Z)("recharts-reference-dot", h) },
          qt.renderDot(p, d),
          tt._.renderCallByParent(t, {
            x: s - o,
            y: f - o,
            width: 2 * o,
            height: 2 * o,
          }),
        );
      }
      (qt.displayName = "ReferenceDot"),
        (qt.defaultProps = {
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
        (qt.renderDot = function (t, e) {
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : u()(t)
            ? t(e)
            : n.createElement(
                Y.o,
                Ft({}, e, {
                  cx: e.cx,
                  cy: e.cy,
                  className: "recharts-reference-dot-dot",
                }),
              );
        });
      var Gt = r(84965);
      function Ht(t) {
        return (
          (Ht =
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
          Ht(t)
        );
      }
      function Vt() {
        return (
          (Vt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          Vt.apply(this, arguments)
        );
      }
      function Xt(t, e) {
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
      function Yt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Xt(Object(r), !0).forEach(function (e) {
                Kt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Xt(Object(r)).forEach(function (e) {
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
              if ("object" !== Ht(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== Ht(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === Ht(e) ? e : String(e);
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
        var e = t.x1,
          r = t.x2,
          o = t.y1,
          i = t.y2,
          a = t.className,
          u = t.alwaysShow,
          c = t.clipPathId;
        (0, zt.Z)(
          void 0 === u,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var l = (0, S.P2)(e),
          s = (0, S.P2)(r),
          f = (0, S.P2)(o),
          p = (0, S.P2)(i),
          h = t.shape;
        if (!(l || s || f || p || h)) return null;
        var d = (function (t, e, r, n, o) {
          var i = o.x1,
            a = o.x2,
            u = o.y1,
            c = o.y2,
            l = o.xAxis,
            s = o.yAxis;
          if (!l || !s) return null;
          var f = (0, P.Ky)({ x: l.scale, y: s.scale }),
            p = {
              x: t ? f.x.apply(i, { position: "start" }) : f.x.rangeMin,
              y: r ? f.y.apply(u, { position: "start" }) : f.y.rangeMin,
            },
            h = {
              x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
              y: n ? f.y.apply(c, { position: "end" }) : f.y.rangeMax,
            };
          return !(0, Rt.B)(o, "discard") || (f.isInRange(p) && f.isInRange(h))
            ? (0, P.O1)(p, h)
            : null;
        })(l, s, f, p, t);
        if (!d && !h) return null;
        var y = (0, Rt.B)(t, "hidden") ? "url(#".concat(c, ")") : void 0;
        return n.createElement(
          B.m,
          { className: (0, x.Z)("recharts-reference-area", a) },
          Jt.renderRect(h, Yt(Yt({ clipPath: y }, (0, U.L6)(t, !0)), d)),
          tt._.renderCallByParent(t, d),
        );
      }
      function Qt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return te(t);
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
            if ("string" == typeof t) return te(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return te(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function te(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      (Jt.displayName = "ReferenceArea"),
        (Jt.defaultProps = {
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
        (Jt.renderRect = function (t, e) {
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : u()(t)
            ? t(e)
            : n.createElement(
                K.A,
                Vt({}, e, { className: "recharts-reference-area-rect" }),
              );
        });
      var ee = function (t, e, r, n, o) {
          var i = (0, U.NN)(t, Gt.d),
            a = (0, U.NN)(t, qt),
            u = [].concat(Qt(i), Qt(a)),
            c = (0, U.NN)(t, Jt),
            l = "".concat(n, "Id"),
            s = n[0],
            f = e;
          if (
            (u.length &&
              (f = u.reduce(function (t, e) {
                if (
                  e.props[l] === r &&
                  (0, Rt.B)(e.props, "extendDomain") &&
                  (0, S.hj)(e.props[s])
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
                (0, Rt.B)(e.props, "extendDomain") &&
                (0, S.hj)(e.props[p]) &&
                (0, S.hj)(e.props[h])
              ) {
                var n = e.props[p],
                  o = e.props[h];
                return [Math.min(t[0], n, o), Math.max(t[1], n, o)];
              }
              return t;
            }, f);
          }
          return (
            o &&
              o.length &&
              (f = o.reduce(function (t, e) {
                return (0, S.hj)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        re = r(84682),
        ne = new (r.n(re)())(),
        oe = "recharts.syncMouseEvents";
      function ie(t) {
        return (
          (ie =
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
          ie(t)
        );
      }
      function ae(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, ce(n.key), n);
        }
      }
      function ue(t, e, r) {
        return (
          (e = ce(e)) in t
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
      function ce(t) {
        var e = (function (t, e) {
          if ("object" !== ie(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== ie(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === ie(e) ? e : String(e);
      }
      var le = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            ue(this, "activeIndex", 0),
            ue(this, "coordinateList", []),
            ue(this, "layout", "horizontal");
        }
        var e, r, n;
        return (
          (e = t),
          (r = [
            {
              key: "setDetails",
              value: function (t) {
                var e = t.coordinateList,
                  r = void 0 === e ? [] : e,
                  n = t.container,
                  o = void 0 === n ? null : n,
                  i = t.layout,
                  a = void 0 === i ? null : i,
                  u = t.offset,
                  c = void 0 === u ? null : u,
                  l = t.mouseHandlerCallback,
                  s = void 0 === l ? null : l;
                (this.coordinateList = null != r ? r : this.coordinateList),
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
                  var r = this.container.getBoundingClientRect(),
                    n = r.x,
                    o = r.y,
                    i = r.height,
                    a = this.coordinateList[this.activeIndex].coordinate,
                    u =
                      (null === (t = window) || void 0 === t
                        ? void 0
                        : t.scrollX) || 0,
                    c =
                      (null === (e = window) || void 0 === e
                        ? void 0
                        : e.scrollY) || 0,
                    l = n + a + u,
                    s = o + this.offset.top + i / 2 + c;
                  this.mouseHandlerCallback({ pageX: l, pageY: s });
                }
              },
            },
          ]) && ae(e.prototype, r),
          n && ae(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })();
      var se = r(37350);
      function fe(t, e, r) {
        var n, o, i, a;
        if ("horizontal" === t)
          (i = n = e.x), (o = r.top), (a = r.top + r.height);
        else if ("vertical" === t)
          (a = o = e.y), (n = r.left), (i = r.left + r.width);
        else if (null != e.cx && null != e.cy) {
          if ("centric" !== t) return j(e);
          var u = e.cx,
            c = e.cy,
            l = e.innerRadius,
            s = e.outerRadius,
            f = e.angle,
            p = (0, O.op)(u, c, l, f),
            h = (0, O.op)(u, c, s, f);
          (n = p.x), (o = p.y), (i = h.x), (a = h.y);
        }
        return [
          { x: n, y: o },
          { x: i, y: a },
        ];
      }
      var pe = ["item"],
        he = [
          "children",
          "className",
          "width",
          "height",
          "style",
          "compact",
          "title",
          "desc",
        ];
      function de(t) {
        return (
          (de =
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
          de(t)
        );
      }
      function ye(t, e) {
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return u;
            }
          })(t, e) ||
          Se(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ve() {
        return (
          (ve = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          ve.apply(this, arguments)
        );
      }
      function me(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function be(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Me(n.key), n);
        }
      }
      function ge(t, e) {
        return (
          (ge = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          ge(t, e)
        );
      }
      function xe(t) {
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
            n = Oe(t);
          if (e) {
            var o = Oe(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === de(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return we(t);
          })(this, r);
        };
      }
      function we(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function Oe(t) {
        return (
          (Oe = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Oe(t)
        );
      }
      function je(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Ae(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          Se(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Se(t, e) {
        if (t) {
          if ("string" == typeof t) return Ae(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Ae(t, e)
              : void 0
          );
        }
      }
      function Ae(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function Ee(t, e) {
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
      function Pe(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ee(Object(r), !0).forEach(function (e) {
                ke(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Ee(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function ke(t, e, r) {
        return (
          (e = Me(e)) in t
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
      function Me(t) {
        var e = (function (t, e) {
          if ("object" !== de(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== de(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === de(e) ? e : String(e);
      }
      var _e = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
        Te = { width: "100%", height: "100%" },
        Ce = { x: 0, y: 0 },
        Ne = function (t, e) {
          var r = e.graphicalItems,
            n = e.dataStartIndex,
            o = e.dataEndIndex,
            i = (null != r ? r : []).reduce(function (t, e) {
              var r = e.props.data;
              return r && r.length ? [].concat(je(t), je(r)) : t;
            }, []);
          return i.length > 0
            ? i
            : t && t.length && (0, S.hj)(n) && (0, S.hj)(o)
            ? t.slice(n, o + 1)
            : [];
        };
      function De(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var Ie = function (t, e, r, n) {
          var o = t.graphicalItems,
            i = t.tooltipAxis,
            a = Ne(e, t);
          return r < 0 || !o || !o.length || r >= a.length
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
                  l = (0, S.Ap)(f, i.dataKey, n);
                } else l = (s && s[r]) || a[r];
                return l ? [].concat(je(o), [(0, bt.Qo)(u, l)]) : o;
              }, []);
        },
        Be = function (t, e, r, n) {
          var o = n || { x: t.chartX, y: t.chartY },
            i = (function (t, e) {
              return "horizontal" === e
                ? t.x
                : "vertical" === e
                ? t.y
                : "centric" === e
                ? t.angle
                : t.radius;
            })(o, r),
            a = t.orderedTooltipTicks,
            u = t.tooltipAxis,
            c = t.tooltipTicks,
            l = (0, bt.VO)(i, a, c, u);
          if (l >= 0 && c) {
            var s = c[l] && c[l].value,
              f = Ie(t, e, l, s),
              p = (function (t, e, r, n) {
                var o = e.find(function (t) {
                  return t && t.index === r;
                });
                if (o) {
                  if ("horizontal" === t) return { x: o.coordinate, y: n.y };
                  if ("vertical" === t) return { x: n.x, y: o.coordinate };
                  if ("centric" === t) {
                    var i = o.coordinate,
                      a = n.radius;
                    return Pe(
                      Pe(Pe({}, n), (0, O.op)(n.cx, n.cy, a, i)),
                      {},
                      { angle: i, radius: a },
                    );
                  }
                  var u = o.coordinate,
                    c = n.angle;
                  return Pe(
                    Pe(Pe({}, n), (0, O.op)(n.cx, n.cy, u, c)),
                    {},
                    { angle: c, radius: u },
                  );
                }
                return Ce;
              })(r, a, l, o);
            return {
              activeTooltipIndex: l,
              activeLabel: s,
              activePayload: f,
              activeCoordinate: p,
            };
          }
          return null;
        },
        Le = function (t, e) {
          var r = e.axes,
            n = e.graphicalItems,
            o = e.axisType,
            a = e.axisIdKey,
            u = e.stackGroups,
            c = e.dataStartIndex,
            s = e.dataEndIndex,
            f = t.layout,
            p = t.children,
            h = t.stackOffset,
            d = (0, bt.NA)(f, o);
          return r.reduce(function (e, r) {
            var y,
              v = r.props,
              m = v.type,
              b = v.dataKey,
              g = v.allowDataOverflow,
              x = v.allowDuplicatedCategory,
              w = v.scale,
              O = v.ticks,
              j = v.includeHidden,
              A = r.props[a];
            if (e[A]) return e;
            var E,
              P,
              k,
              M = Ne(t.data, {
                graphicalItems: n.filter(function (t) {
                  return t.props[a] === A;
                }),
                dataStartIndex: c,
                dataEndIndex: s,
              }),
              _ = M.length;
            (function (t, e, r) {
              if ("number" === r && !0 === e && Array.isArray(t)) {
                var n = null == t ? void 0 : t[0],
                  o = null == t ? void 0 : t[1];
                if (n && o && (0, S.hj)(n) && (0, S.hj)(o)) return !0;
              }
              return !1;
            })(r.props.domain, g, m) &&
              ((E = (0, bt.LG)(r.props.domain, null, g)),
              !d ||
                ("number" !== m && "auto" === w) ||
                (k = (0, bt.gF)(M, b, "category")));
            var T = De(m);
            if (!E || 0 === E.length) {
              var C,
                N = null !== (C = r.props.domain) && void 0 !== C ? C : T;
              if (b) {
                if (((E = (0, bt.gF)(M, b, m)), "category" === m && d)) {
                  var D = (0, S.bv)(E);
                  x && D
                    ? ((P = E), (E = l()(0, _)))
                    : x ||
                      (E = (0, bt.ko)(N, E, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(je(t), [e]);
                      }, []));
                } else if ("category" === m)
                  E = x
                    ? E.filter(function (t) {
                        return "" !== t && !i()(t);
                      })
                    : (0, bt.ko)(N, E, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || "" === e || i()(e)
                          ? t
                          : [].concat(je(t), [e]);
                      }, []);
                else if ("number" === m) {
                  var I = (0, bt.ZI)(
                    M,
                    n.filter(function (t) {
                      return t.props[a] === A && (j || !t.props.hide);
                    }),
                    b,
                    o,
                    f,
                  );
                  I && (E = I);
                }
                !d ||
                  ("number" !== m && "auto" === w) ||
                  (k = (0, bt.gF)(M, b, "category"));
              } else
                E = d
                  ? l()(0, _)
                  : u && u[A] && u[A].hasStack && "number" === m
                  ? "expand" === h
                    ? [0, 1]
                    : (0, bt.EB)(u[A].stackGroups, c, s)
                  : (0, bt.s6)(
                      M,
                      n.filter(function (t) {
                        return t.props[a] === A && (j || !t.props.hide);
                      }),
                      m,
                      f,
                      !0,
                    );
              if ("number" === m)
                (E = ee(p, E, A, o, O)), N && (E = (0, bt.LG)(N, E, g));
              else if ("category" === m && N) {
                var B = N;
                E.every(function (t) {
                  return B.indexOf(t) >= 0;
                }) && (E = B);
              }
            }
            return Pe(
              Pe({}, e),
              {},
              ke(
                {},
                A,
                Pe(
                  Pe({}, r.props),
                  {},
                  {
                    axisType: o,
                    domain: E,
                    categoricalDomain: k,
                    duplicateDomain: P,
                    originalDomain:
                      null !== (y = r.props.domain) && void 0 !== y ? y : T,
                    isCategorical: d,
                    layout: f,
                  },
                ),
              ),
            );
          }, {});
        },
        Re = function (t, e) {
          var r = e.axisType,
            n = void 0 === r ? "xAxis" : r,
            o = e.AxisComp,
            i = e.graphicalItems,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            s = t.children,
            p = "".concat(n, "Id"),
            h = (0, U.NN)(s, o),
            d = {};
          return (
            h && h.length
              ? (d = Le(t, {
                  axes: h,
                  graphicalItems: i,
                  axisType: n,
                  axisIdKey: p,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                }))
              : i &&
                i.length &&
                (d = (function (t, e) {
                  var r = e.graphicalItems,
                    n = e.Axis,
                    o = e.axisType,
                    i = e.axisIdKey,
                    a = e.stackGroups,
                    u = e.dataStartIndex,
                    c = e.dataEndIndex,
                    s = t.layout,
                    p = t.children,
                    h = Ne(t.data, {
                      graphicalItems: r,
                      dataStartIndex: u,
                      dataEndIndex: c,
                    }),
                    d = h.length,
                    y = (0, bt.NA)(s, o),
                    v = -1;
                  return r.reduce(function (t, e) {
                    var m,
                      b = e.props[i],
                      g = De("number");
                    return t[b]
                      ? t
                      : (v++,
                        y
                          ? (m = l()(0, d))
                          : a && a[b] && a[b].hasStack
                          ? ((m = (0, bt.EB)(a[b].stackGroups, u, c)),
                            (m = ee(p, m, b, o)))
                          : ((m = (0, bt.LG)(
                              g,
                              (0, bt.s6)(
                                h,
                                r.filter(function (t) {
                                  return t.props[i] === b && !t.props.hide;
                                }),
                                "number",
                                s,
                              ),
                              n.defaultProps.allowDataOverflow,
                            )),
                            (m = ee(p, m, b, o))),
                        Pe(
                          Pe({}, t),
                          {},
                          ke(
                            {},
                            b,
                            Pe(
                              Pe({ axisType: o }, n.defaultProps),
                              {},
                              {
                                hide: !0,
                                orientation: f()(
                                  _e,
                                  "".concat(o, ".").concat(v % 2),
                                  null,
                                ),
                                domain: m,
                                originalDomain: g,
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
                  axisType: n,
                  axisIdKey: p,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                })),
            d
          );
        },
        ze = function (t) {
          var e = t.children,
            r = t.defaultShowTooltip,
            n = (0, U.sP)(e, Bt),
            o = 0,
            i = 0;
          return (
            t.data && 0 !== t.data.length && (i = t.data.length - 1),
            n &&
              n.props &&
              (n.props.startIndex >= 0 && (o = n.props.startIndex),
              n.props.endIndex >= 0 && (i = n.props.endIndex)),
            {
              chartX: 0,
              chartY: 0,
              dataStartIndex: o,
              dataEndIndex: i,
              activeTooltipIndex: -1,
              isTooltipActive: Boolean(r),
            }
          );
        },
        Ue = function (t) {
          return "horizontal" === t
            ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
            : "vertical" === t
            ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
            : "centric" === t
            ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
            : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
        },
        Fe = function (t) {
          var e,
            r = t.chartName,
            o = t.GraphicalChild,
            a = t.defaultTooltipEventType,
            c = void 0 === a ? "axis" : a,
            l = t.validateTooltipEventTypes,
            s = void 0 === l ? ["axis"] : l,
            p = t.axisComponents,
            d = t.legendContent,
            v = t.formatAxisMap,
            b = t.defaultProps,
            E = function (t, e) {
              var r = e.graphicalItems,
                n = e.stackGroups,
                o = e.offset,
                a = e.updateId,
                u = e.dataStartIndex,
                c = e.dataEndIndex,
                l = t.barSize,
                s = t.layout,
                f = t.barGap,
                h = t.barCategoryGap,
                d = t.maxBarSize,
                y = Ue(s),
                v = y.numericAxisName,
                m = y.cateAxisName,
                b = (function (t) {
                  return (
                    !(!t || !t.length) &&
                    t.some(function (t) {
                      var e = (0, U.Gf)(t && t.type);
                      return e && e.indexOf("Bar") >= 0;
                    })
                  );
                })(r),
                g = b && (0, bt.pt)({ barSize: l, stackGroups: n }),
                x = [];
              return (
                r.forEach(function (r, l) {
                  var y = Ne(t.data, {
                      graphicalItems: [r],
                      dataStartIndex: u,
                      dataEndIndex: c,
                    }),
                    b = r.props,
                    O = b.dataKey,
                    j = b.maxBarSize,
                    S = r.props["".concat(v, "Id")],
                    A = r.props["".concat(m, "Id")],
                    E = p.reduce(function (t, n) {
                      var o,
                        i = e["".concat(n.axisType, "Map")],
                        a = r.props["".concat(n.axisType, "Id")];
                      (i && i[a]) || "zAxis" === n.axisType || (0, w.Z)(!1);
                      var u = i[a];
                      return Pe(
                        Pe({}, t),
                        {},
                        (ke((o = {}), n.axisType, u),
                        ke(o, "".concat(n.axisType, "Ticks"), (0, bt.uY)(u)),
                        o),
                      );
                    }, {}),
                    P = E[m],
                    k = E["".concat(m, "Ticks")],
                    M =
                      n &&
                      n[S] &&
                      n[S].hasStack &&
                      (0, bt.O3)(r, n[S].stackGroups),
                    _ = (0, U.Gf)(r.type).indexOf("Bar") >= 0,
                    T = (0, bt.zT)(P, k),
                    C = [];
                  if (_) {
                    var N,
                      D,
                      I = i()(j) ? d : j,
                      B =
                        null !==
                          (N =
                            null !== (D = (0, bt.zT)(P, k, !0)) && void 0 !== D
                              ? D
                              : I) && void 0 !== N
                          ? N
                          : 0;
                    (C = (0, bt.qz)({
                      barGap: f,
                      barCategoryGap: h,
                      bandSize: B !== T ? B : T,
                      sizeList: g[A],
                      maxBarSize: I,
                    })),
                      B !== T &&
                        (C = C.map(function (t) {
                          return Pe(
                            Pe({}, t),
                            {},
                            {
                              position: Pe(
                                Pe({}, t.position),
                                {},
                                { offset: t.position.offset - B / 2 },
                              ),
                            },
                          );
                        }));
                  }
                  var L,
                    R = r && r.type && r.type.getComposedData;
                  R &&
                    x.push({
                      props: Pe(
                        Pe(
                          {},
                          R(
                            Pe(
                              Pe({}, E),
                              {},
                              {
                                displayedData: y,
                                props: t,
                                dataKey: O,
                                item: r,
                                bandSize: T,
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
                        ((L = { key: r.key || "item-".concat(l) }),
                        ke(L, v, E[v]),
                        ke(L, m, E[m]),
                        ke(L, "animationId", a),
                        L),
                      ),
                      childIndex: (0, U.$R)(r, t.children),
                      item: r,
                    });
                }),
                x
              );
            },
            P = function (t, e) {
              var n = t.props,
                i = t.dataStartIndex,
                a = t.dataEndIndex,
                u = t.updateId;
              if (!(0, U.TT)({ props: n })) return null;
              var c = n.children,
                l = n.layout,
                s = n.stackOffset,
                d = n.data,
                y = n.reverseStackOrder,
                m = Ue(l),
                b = m.numericAxisName,
                g = m.cateAxisName,
                x = (0, U.NN)(c, o),
                w = (0, bt.wh)(
                  d,
                  x,
                  "".concat(b, "Id"),
                  "".concat(g, "Id"),
                  s,
                  y,
                ),
                O = p.reduce(function (t, e) {
                  var r = "".concat(e.axisType, "Map");
                  return Pe(
                    Pe({}, t),
                    {},
                    ke(
                      {},
                      r,
                      Re(
                        n,
                        Pe(
                          Pe({}, e),
                          {},
                          {
                            graphicalItems: x,
                            stackGroups: e.axisType === b && w,
                            dataStartIndex: i,
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
                    o = t.xAxisMap,
                    i = void 0 === o ? {} : o,
                    a = t.yAxisMap,
                    u = void 0 === a ? {} : a,
                    c = r.width,
                    l = r.height,
                    s = r.children,
                    p = r.margin || {},
                    h = (0, U.sP)(s, Bt),
                    d = (0, U.sP)(s, R.D),
                    y = Object.keys(u).reduce(
                      function (t, e) {
                        var r = u[e],
                          n = r.orientation;
                        return r.mirror || r.hide
                          ? t
                          : Pe(Pe({}, t), {}, ke({}, n, t[n] + r.width));
                      },
                      { left: p.left || 0, right: p.right || 0 },
                    ),
                    v = Object.keys(i).reduce(
                      function (t, e) {
                        var r = i[e],
                          n = r.orientation;
                        return r.mirror || r.hide
                          ? t
                          : Pe(
                              Pe({}, t),
                              {},
                              ke({}, n, f()(t, "".concat(n)) + r.height),
                            );
                      },
                      { top: p.top || 0, bottom: p.bottom || 0 },
                    ),
                    m = Pe(Pe({}, v), y),
                    b = m.bottom;
                  h && (m.bottom += h.props.height || Bt.defaultProps.height),
                    d && e && (m = (0, bt.By)(m, n, r, e));
                  var g = c - m.left - m.right,
                    x = l - m.top - m.bottom;
                  return Pe(
                    Pe({ brushBottom: b }, m),
                    {},
                    { width: Math.max(g, 0), height: Math.max(x, 0) },
                  );
                })(
                  Pe(Pe({}, O), {}, { props: n, graphicalItems: x }),
                  null == e ? void 0 : e.legendBBox,
                );
              Object.keys(O).forEach(function (t) {
                O[t] = v(n, O[t], j, t.replace("Map", ""), r);
              });
              var A,
                P,
                k,
                M = O["".concat(g, "Map")],
                _ =
                  ((A = M),
                  (P = (0, S.Kt)(A)),
                  {
                    tooltipTicks: (k = (0, bt.uY)(P, !1, !0)),
                    orderedTooltipTicks: h()(k, function (t) {
                      return t.coordinate;
                    }),
                    tooltipAxis: P,
                    tooltipAxisBandSize: (0, bt.zT)(P, k),
                  }),
                T = E(
                  n,
                  Pe(
                    Pe({}, O),
                    {},
                    {
                      dataStartIndex: i,
                      dataEndIndex: a,
                      updateId: u,
                      graphicalItems: x,
                      stackGroups: w,
                      offset: j,
                    },
                  ),
                );
              return Pe(
                Pe(
                  {
                    formattedGraphicalItems: T,
                    graphicalItems: x,
                    offset: j,
                    stackGroups: w,
                  },
                  _,
                ),
                O,
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
                  e && ge(t, e);
              })(p, t);
              var e,
                o,
                a,
                l = xe(p);
              function p(t) {
                var e, o, a;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, p),
                  ke(
                    we((a = l.call(this, t))),
                    "eventEmitterSymbol",
                    Symbol("rechartsEventEmitter"),
                  ),
                  ke(we(a), "accessibilityManager", new le()),
                  ke(we(a), "handleLegendBBoxUpdate", function (t) {
                    if (t) {
                      var e = a.state,
                        r = e.dataStartIndex,
                        n = e.dataEndIndex,
                        o = e.updateId;
                      a.setState(
                        Pe(
                          { legendBBox: t },
                          P(
                            {
                              props: a.props,
                              dataStartIndex: r,
                              dataEndIndex: n,
                              updateId: o,
                            },
                            Pe(Pe({}, a.state), {}, { legendBBox: t }),
                          ),
                        ),
                      );
                    }
                  }),
                  ke(we(a), "handleReceiveSyncEvent", function (t, e, r) {
                    if (a.props.syncId === t) {
                      if (
                        r === a.eventEmitterSymbol &&
                        "function" != typeof a.props.syncMethod
                      )
                        return;
                      a.applySyncEvent(e);
                    }
                  }),
                  ke(we(a), "handleBrushChange", function (t) {
                    var e = t.startIndex,
                      r = t.endIndex;
                    if (
                      e !== a.state.dataStartIndex ||
                      r !== a.state.dataEndIndex
                    ) {
                      var n = a.state.updateId;
                      a.setState(function () {
                        return Pe(
                          { dataStartIndex: e, dataEndIndex: r },
                          P(
                            {
                              props: a.props,
                              dataStartIndex: e,
                              dataEndIndex: r,
                              updateId: n,
                            },
                            a.state,
                          ),
                        );
                      }),
                        a.triggerSyncEvent({
                          dataStartIndex: e,
                          dataEndIndex: r,
                        });
                    }
                  }),
                  ke(we(a), "handleMouseEnter", function (t) {
                    var e = a.getMouseInfo(t);
                    if (e) {
                      var r = Pe(Pe({}, e), {}, { isTooltipActive: !0 });
                      a.setState(r), a.triggerSyncEvent(r);
                      var n = a.props.onMouseEnter;
                      u()(n) && n(r, t);
                    }
                  }),
                  ke(we(a), "triggeredAfterMouseMove", function (t) {
                    var e = a.getMouseInfo(t),
                      r = e
                        ? Pe(Pe({}, e), {}, { isTooltipActive: !0 })
                        : { isTooltipActive: !1 };
                    a.setState(r), a.triggerSyncEvent(r);
                    var n = a.props.onMouseMove;
                    u()(n) && n(r, t);
                  }),
                  ke(we(a), "handleItemMouseEnter", function (t) {
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
                  ke(we(a), "handleItemMouseLeave", function () {
                    a.setState(function () {
                      return { isTooltipActive: !1 };
                    });
                  }),
                  ke(we(a), "handleMouseMove", function (t) {
                    t.persist(), a.throttleTriggeredAfterMouseMove(t);
                  }),
                  ke(we(a), "handleMouseLeave", function (t) {
                    var e = { isTooltipActive: !1 };
                    a.setState(e), a.triggerSyncEvent(e);
                    var r = a.props.onMouseLeave;
                    u()(r) && r(e, t);
                  }),
                  ke(we(a), "handleOuterEvent", function (t) {
                    var e,
                      r = (0, U.Bh)(t),
                      n = f()(a.props, "".concat(r));
                    r &&
                      u()(n) &&
                      n(
                        null !==
                          (e = /.*touch.*/i.test(r)
                            ? a.getMouseInfo(t.changedTouches[0])
                            : a.getMouseInfo(t)) && void 0 !== e
                          ? e
                          : {},
                        t,
                      );
                  }),
                  ke(we(a), "handleClick", function (t) {
                    var e = a.getMouseInfo(t);
                    if (e) {
                      var r = Pe(Pe({}, e), {}, { isTooltipActive: !0 });
                      a.setState(r), a.triggerSyncEvent(r);
                      var n = a.props.onClick;
                      u()(n) && n(r, t);
                    }
                  }),
                  ke(we(a), "handleMouseDown", function (t) {
                    var e = a.props.onMouseDown;
                    u()(e) && e(a.getMouseInfo(t), t);
                  }),
                  ke(we(a), "handleMouseUp", function (t) {
                    var e = a.props.onMouseUp;
                    u()(e) && e(a.getMouseInfo(t), t);
                  }),
                  ke(we(a), "handleTouchMove", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                  }),
                  ke(we(a), "handleTouchStart", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.handleMouseDown(t.changedTouches[0]);
                  }),
                  ke(we(a), "handleTouchEnd", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      a.handleMouseUp(t.changedTouches[0]);
                  }),
                  ke(we(a), "triggerSyncEvent", function (t) {
                    void 0 !== a.props.syncId &&
                      ne.emit(oe, a.props.syncId, t, a.eventEmitterSymbol);
                  }),
                  ke(we(a), "applySyncEvent", function (t) {
                    var e = a.props,
                      r = e.layout,
                      n = e.syncMethod,
                      o = a.state.updateId,
                      i = t.dataStartIndex,
                      u = t.dataEndIndex;
                    if (
                      void 0 !== t.dataStartIndex ||
                      void 0 !== t.dataEndIndex
                    )
                      a.setState(
                        Pe(
                          { dataStartIndex: i, dataEndIndex: u },
                          P(
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
                      if ("function" == typeof n) s = n(h, t);
                      else if ("value" === n) {
                        s = -1;
                        for (var d = 0; d < h.length; d++)
                          if (h[d].value === t.activeLabel) {
                            s = d;
                            break;
                          }
                      }
                      var y = Pe(Pe({}, p), {}, { x: p.left, y: p.top }),
                        v = Math.min(c, y.x + y.width),
                        m = Math.min(l, y.y + y.height),
                        b = h[s] && h[s].value,
                        g = Ie(a.state, a.props.data, s),
                        x = h[s]
                          ? {
                              x: "horizontal" === r ? h[s].coordinate : v,
                              y: "horizontal" === r ? m : h[s].coordinate,
                            }
                          : Ce;
                      a.setState(
                        Pe(
                          Pe({}, t),
                          {},
                          {
                            activeLabel: b,
                            activeCoordinate: x,
                            activePayload: g,
                            activeTooltipIndex: s,
                          },
                        ),
                      );
                    } else a.setState(t);
                  }),
                  ke(we(a), "verticalCoordinatesGenerator", function (t, e) {
                    var r = t.xAxis,
                      n = t.width,
                      o = t.height,
                      i = t.offset;
                    return (0, bt.Rf)(
                      D(
                        Pe(
                          Pe(Pe({}, vt.defaultProps), r),
                          {},
                          {
                            ticks: (0, bt.uY)(r, !0),
                            viewBox: { x: 0, y: 0, width: n, height: o },
                          },
                        ),
                      ),
                      i.left,
                      i.left + i.width,
                      e,
                    );
                  }),
                  ke(we(a), "horizontalCoordinatesGenerator", function (t, e) {
                    var r = t.yAxis,
                      n = t.width,
                      o = t.height,
                      i = t.offset;
                    return (0, bt.Rf)(
                      D(
                        Pe(
                          Pe(Pe({}, vt.defaultProps), r),
                          {},
                          {
                            ticks: (0, bt.uY)(r, !0),
                            viewBox: { x: 0, y: 0, width: n, height: o },
                          },
                        ),
                      ),
                      i.top,
                      i.top + i.height,
                      e,
                    );
                  }),
                  ke(we(a), "axesTicksGenerator", function (t) {
                    return (0, bt.uY)(t, !0);
                  }),
                  ke(we(a), "renderCursor", function (t) {
                    var e,
                      o = a.state,
                      i = o.isTooltipActive,
                      u = o.activeCoordinate,
                      c = o.activePayload,
                      l = o.offset,
                      s = o.activeTooltipIndex,
                      f = o.tooltipAxisBandSize,
                      p = a.getTooltipEventType(),
                      h = null !== (e = t.props.active) && void 0 !== e ? e : i;
                    if (
                      !t ||
                      !t.props.cursor ||
                      !h ||
                      !u ||
                      ("ScatterChart" !== r && "axis" !== p)
                    )
                      return null;
                    var d,
                      y = a.props.layout,
                      v = z.H;
                    if ("ScatterChart" === r) (d = u), (v = V);
                    else if ("BarChart" === r)
                      (d = (function (t, e, r, n) {
                        var o = n / 2;
                        return {
                          stroke: "none",
                          fill: "#ccc",
                          x: "horizontal" === t ? e.x - o : r.left + 0.5,
                          y: "horizontal" === t ? r.top + 0.5 : e.y - o,
                          width: "horizontal" === t ? n : r.width - 1,
                          height: "horizontal" === t ? r.height - 1 : n,
                        };
                      })(y, u, l, f)),
                        (v = K.A);
                    else if ("radial" === y) {
                      var m = j(u),
                        b = m.cx,
                        g = m.cy,
                        x = m.radius;
                      (d = {
                        cx: b,
                        cy: g,
                        startAngle: m.startAngle,
                        endAngle: m.endAngle,
                        innerRadius: x,
                        outerRadius: x,
                      }),
                        (v = X.L);
                    } else (d = { points: fe(y, u, l) }), (v = z.H);
                    var w = t.key || "_recharts-cursor",
                      O = Pe(
                        Pe(
                          Pe(
                            Pe({ stroke: "#ccc", pointerEvents: "none" }, l),
                            d,
                          ),
                          (0, U.L6)(t.props.cursor),
                        ),
                        {},
                        {
                          payload: c,
                          payloadIndex: s,
                          key: w,
                          className: "recharts-tooltip-cursor",
                        },
                      );
                    return (0, n.isValidElement)(t.props.cursor)
                      ? (0, n.cloneElement)(t.props.cursor, O)
                      : (0, n.createElement)(v, O);
                  }),
                  ke(we(a), "renderPolarAxis", function (t, e, r) {
                    var o = f()(t, "type.axisType"),
                      i = f()(a.state, "".concat(o, "Map")),
                      u = i && i[t.props["".concat(o, "Id")]];
                    return (0, n.cloneElement)(
                      t,
                      Pe(
                        Pe({}, u),
                        {},
                        {
                          className: o,
                          key: t.key || "".concat(e, "-").concat(r),
                          ticks: (0, bt.uY)(u, !0),
                        },
                      ),
                    );
                  }),
                  ke(we(a), "renderXAxis", function (t, e, r) {
                    var n = a.state.xAxisMap[t.props.xAxisId];
                    return a.renderAxis(n, t, e, r);
                  }),
                  ke(we(a), "renderYAxis", function (t, e, r) {
                    var n = a.state.yAxisMap[t.props.yAxisId];
                    return a.renderAxis(n, t, e, r);
                  }),
                  ke(we(a), "renderGrid", function (t) {
                    var e = a.state,
                      r = e.xAxisMap,
                      o = e.yAxisMap,
                      i = e.offset,
                      u = a.props,
                      c = u.width,
                      l = u.height,
                      s = (0, S.Kt)(r),
                      f =
                        m()(o, function (t) {
                          return g()(t.domain, Number.isFinite);
                        }) || (0, S.Kt)(o),
                      p = t.props || {};
                    return (0, n.cloneElement)(t, {
                      key: t.key || "grid",
                      x: (0, S.hj)(p.x) ? p.x : i.left,
                      y: (0, S.hj)(p.y) ? p.y : i.top,
                      width: (0, S.hj)(p.width) ? p.width : i.width,
                      height: (0, S.hj)(p.height) ? p.height : i.height,
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
                  ke(we(a), "renderPolarGrid", function (t) {
                    var e = t.props,
                      r = e.radialLines,
                      o = e.polarAngles,
                      i = e.polarRadius,
                      u = a.state,
                      c = u.radiusAxisMap,
                      l = u.angleAxisMap,
                      s = (0, S.Kt)(c),
                      f = (0, S.Kt)(l),
                      p = f.cx,
                      h = f.cy,
                      d = f.innerRadius,
                      y = f.outerRadius;
                    return (0, n.cloneElement)(t, {
                      polarAngles: Array.isArray(o)
                        ? o
                        : (0, bt.uY)(f, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      polarRadius: Array.isArray(i)
                        ? i
                        : (0, bt.uY)(s, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      cx: p,
                      cy: h,
                      innerRadius: d,
                      outerRadius: y,
                      key: t.key || "polar-grid",
                      radialLines: r,
                    });
                  }),
                  ke(we(a), "renderLegend", function () {
                    var t = a.state.formattedGraphicalItems,
                      e = a.props,
                      r = e.children,
                      o = e.width,
                      i = e.height,
                      u = a.props.margin || {},
                      c = o - (u.left || 0) - (u.right || 0),
                      l = (0, Lt.z)({
                        children: r,
                        formattedGraphicalItems: t,
                        legendWidth: c,
                        legendContent: d,
                      });
                    if (!l) return null;
                    var s = l.item,
                      f = me(l, pe);
                    return (0, n.cloneElement)(
                      s,
                      Pe(
                        Pe({}, f),
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
                  ke(we(a), "renderTooltip", function () {
                    var t,
                      e = a.props.children,
                      r = (0, U.sP)(e, L.u);
                    if (!r) return null;
                    var o = a.state,
                      i = o.isTooltipActive,
                      u = o.activeCoordinate,
                      c = o.activePayload,
                      l = o.activeLabel,
                      s = o.offset,
                      f = null !== (t = r.props.active) && void 0 !== t ? t : i;
                    return (0, n.cloneElement)(r, {
                      viewBox: Pe(Pe({}, s), {}, { x: s.left, y: s.top }),
                      active: f,
                      label: l,
                      payload: f ? c : [],
                      coordinate: u,
                    });
                  }),
                  ke(we(a), "renderBrush", function (t) {
                    var e = a.props,
                      r = e.margin,
                      o = e.data,
                      i = a.state,
                      u = i.offset,
                      c = i.dataStartIndex,
                      l = i.dataEndIndex,
                      s = i.updateId;
                    return (0, n.cloneElement)(t, {
                      key: t.key || "_recharts-brush",
                      onChange: (0, bt.DO)(
                        a.handleBrushChange,
                        t.props.onChange,
                      ),
                      data: o,
                      x: (0, S.hj)(t.props.x) ? t.props.x : u.left,
                      y: (0, S.hj)(t.props.y)
                        ? t.props.y
                        : u.top + u.height + u.brushBottom - (r.bottom || 0),
                      width: (0, S.hj)(t.props.width) ? t.props.width : u.width,
                      startIndex: c,
                      endIndex: l,
                      updateId: "brush-".concat(s),
                    });
                  }),
                  ke(we(a), "renderReferenceElement", function (t, e, r) {
                    if (!t) return null;
                    var o = we(a).clipPathId,
                      i = a.state,
                      u = i.xAxisMap,
                      c = i.yAxisMap,
                      l = i.offset,
                      s = t.props,
                      f = s.xAxisId,
                      p = s.yAxisId;
                    return (0, n.cloneElement)(t, {
                      key: t.key || "".concat(e, "-").concat(r),
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
                  ke(we(a), "renderActivePoints", function (t) {
                    var e = t.item,
                      r = t.activePoint,
                      n = t.basePoint,
                      o = t.childIndex,
                      i = t.isRange,
                      a = [],
                      u = e.props.key,
                      c = e.item.props,
                      l = c.activeDot,
                      s = Pe(
                        Pe(
                          {
                            index: o,
                            dataKey: c.dataKey,
                            cx: r.x,
                            cy: r.y,
                            r: 4,
                            fill: (0, bt.fk)(e.item),
                            strokeWidth: 2,
                            stroke: "#fff",
                            payload: r.payload,
                            value: r.value,
                            key: "".concat(u, "-activePoint-").concat(o),
                          },
                          (0, U.L6)(l),
                        ),
                        (0, et.Ym)(l),
                      );
                    return (
                      a.push(p.renderActiveDot(l, s)),
                      n
                        ? a.push(
                            p.renderActiveDot(
                              l,
                              Pe(
                                Pe({}, s),
                                {},
                                {
                                  cx: n.x,
                                  cy: n.y,
                                  key: "".concat(u, "-basePoint-").concat(o),
                                },
                              ),
                            ),
                          )
                        : i && a.push(null),
                      a
                    );
                  }),
                  ke(we(a), "renderGraphicChild", function (t, e, r) {
                    var o = a.filterFormatItem(t, e, r);
                    if (!o) return null;
                    var u = a.getTooltipEventType(),
                      c = a.state,
                      l = c.isTooltipActive,
                      s = c.tooltipAxis,
                      f = c.activeTooltipIndex,
                      p = c.activeLabel,
                      h = a.props.children,
                      d = (0, U.sP)(h, L.u),
                      y = o.props,
                      v = y.points,
                      m = y.isRange,
                      b = y.baseLine,
                      g = o.item.props,
                      x = g.activeDot,
                      w = g.hide,
                      O = g.activeBar,
                      j = g.activeShape,
                      A = Boolean(!w && l && d && (x || O || j)),
                      E = {};
                    "axis" !== u && d && "click" === d.props.trigger
                      ? (E = {
                          onClick: (0, bt.DO)(
                            a.handleItemMouseEnter,
                            t.props.onClick,
                          ),
                        })
                      : "axis" !== u &&
                        (E = {
                          onMouseLeave: (0, bt.DO)(
                            a.handleItemMouseLeave,
                            t.props.onMouseLeave,
                          ),
                          onMouseEnter: (0, bt.DO)(
                            a.handleItemMouseEnter,
                            t.props.onMouseEnter,
                          ),
                        });
                    var P = (0, n.cloneElement)(t, Pe(Pe({}, o.props), E));
                    if (A) {
                      if (!(f >= 0)) {
                        var k,
                          M = (
                            null !==
                              (k = a.getItemByXY(a.state.activeCoordinate)) &&
                            void 0 !== k
                              ? k
                              : { graphicalItem: P }
                          ).graphicalItem,
                          _ = M.item,
                          T = void 0 === _ ? t : _,
                          C = M.childIndex,
                          N = Pe(
                            Pe(Pe({}, o.props), E),
                            {},
                            { activeIndex: C },
                          );
                        return [(0, n.cloneElement)(T, N), null, null];
                      }
                      var D, I;
                      if (s.dataKey && !s.allowDuplicatedCategory) {
                        var B =
                          "function" == typeof s.dataKey
                            ? function (t) {
                                return "function" == typeof s.dataKey
                                  ? s.dataKey(t.payload)
                                  : null;
                              }
                            : "payload.".concat(s.dataKey.toString());
                        (D = (0, S.Ap)(v, B, p)),
                          (I = m && b && (0, S.Ap)(b, B, p));
                      } else
                        (D = null == v ? void 0 : v[f]), (I = m && b && b[f]);
                      if (j || O) {
                        var R =
                          void 0 !== t.props.activeIndex
                            ? t.props.activeIndex
                            : f;
                        return [
                          (0, n.cloneElement)(
                            t,
                            Pe(Pe(Pe({}, o.props), E), {}, { activeIndex: R }),
                          ),
                          null,
                          null,
                        ];
                      }
                      if (!i()(D))
                        return [P].concat(
                          je(
                            a.renderActivePoints({
                              item: o,
                              activePoint: D,
                              basePoint: I,
                              childIndex: f,
                              isRange: m,
                            }),
                          ),
                        );
                    }
                    return m ? [P, null, null] : [P, null];
                  }),
                  ke(we(a), "renderCustomized", function (t, e, r) {
                    return (0, n.cloneElement)(
                      t,
                      Pe(
                        Pe({ key: "recharts-customized-".concat(r) }, a.props),
                        a.state,
                      ),
                    );
                  }),
                  ke(we(a), "renderMap", {
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
                      : (0, S.EL)("recharts"),
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
                                  null !== (r = this.props.margin.left) &&
                                  void 0 !== r
                                    ? r
                                    : 0,
                                top:
                                  null !== (n = this.props.margin.top) &&
                                  void 0 !== n
                                    ? n
                                    : 0,
                              },
                            }),
                          null)
                        : null;
                      var r, n;
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
                      var t = (0, U.sP)(this.props.children, L.u);
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
                        r = e.getBoundingClientRect(),
                        n = (0, A.os)(r),
                        o = {
                          chartX: Math.round(t.pageX - n.left),
                          chartY: Math.round(t.pageY - n.top),
                        },
                        i = r.width / e.offsetWidth || 1,
                        a = this.inRange(o.chartX, o.chartY, i);
                      if (!a) return null;
                      var u = this.state,
                        c = u.xAxisMap,
                        l = u.yAxisMap;
                      if ("axis" !== this.getTooltipEventType() && c && l) {
                        var s = (0, S.Kt)(c).scale,
                          f = (0, S.Kt)(l).scale,
                          p = s && s.invert ? s.invert(o.chartX) : null,
                          h = f && f.invert ? f.invert(o.chartY) : null;
                        return Pe(Pe({}, o), {}, { xValue: p, yValue: h });
                      }
                      var d = Be(
                        this.state,
                        this.props.data,
                        this.props.layout,
                        a,
                      );
                      return d ? Pe(Pe({}, o), d) : null;
                    },
                  },
                  {
                    key: "inRange",
                    value: function (t, e) {
                      var r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 1,
                        n = this.props.layout,
                        o = t / r,
                        i = e / r;
                      if ("horizontal" === n || "vertical" === n) {
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
                        var s = (0, S.Kt)(c);
                        return (0, O.z3)({ x: o, y: i }, s);
                      }
                      return null;
                    },
                  },
                  {
                    key: "parseEventsOfWrapper",
                    value: function () {
                      var t = this.props.children,
                        e = this.getTooltipEventType(),
                        r = (0, U.sP)(t, L.u),
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
                        Pe(
                          Pe({}, (0, et.Ym)(this.props, this.handleOuterEvent)),
                          n,
                        )
                      );
                    },
                  },
                  {
                    key: "addListener",
                    value: function () {
                      ne.on(oe, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "removeListener",
                    value: function () {
                      ne.removeListener(oe, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "filterFormatItem",
                    value: function (t, e, r) {
                      for (
                        var n = this.state.formattedGraphicalItems,
                          o = 0,
                          i = n.length;
                        o < i;
                        o++
                      ) {
                        var a = n[o];
                        if (
                          a.item === t ||
                          a.props.key === t.key ||
                          (e === (0, U.Gf)(a.item.type) && r === a.childIndex)
                        )
                          return a;
                      }
                      return null;
                    },
                  },
                  {
                    key: "renderAxis",
                    value: function (t, e, r, o) {
                      var i = this.props,
                        a = i.width,
                        u = i.height;
                      return n.createElement(
                        vt,
                        ve({}, t, {
                          className: (0, x.Z)(
                            "recharts-"
                              .concat(t.axisType, " ")
                              .concat(t.axisType),
                            t.className,
                          ),
                          key: e.key || "".concat(r, "-").concat(o),
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
                        r = e.left,
                        o = e.top,
                        i = e.height,
                        a = e.width;
                      return n.createElement(
                        "defs",
                        null,
                        n.createElement(
                          "clipPath",
                          { id: t },
                          n.createElement("rect", {
                            x: r,
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
                            var r = ye(e, 2),
                              n = r[0],
                              o = r[1];
                            return Pe(Pe({}, t), {}, ke({}, n, o.scale));
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
                            var r = ye(e, 2),
                              n = r[0],
                              o = r[1];
                            return Pe(Pe({}, t), {}, ke({}, n, o.scale));
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
                        r = e.formattedGraphicalItems,
                        n = e.activeItem;
                      if (r && r.length)
                        for (var o = 0, i = r.length; o < i; o++) {
                          var a = r[o],
                            u = a.props,
                            c = a.item,
                            l = (0, U.Gf)(c.type);
                          if ("Bar" === l) {
                            var s = (u.data || []).find(function (e) {
                              return (0, K.X)(t, e);
                            });
                            if (s) return { graphicalItem: a, payload: s };
                          } else if ("RadialBar" === l) {
                            var f = (u.data || []).find(function (e) {
                              return (0, O.z3)(t, e);
                            });
                            if (f) return { graphicalItem: a, payload: f };
                          } else if (
                            (0, se.lT)(a, n) ||
                            (0, se.V$)(a, n) ||
                            (0, se.w7)(a, n)
                          ) {
                            var p = (0, se.a3)({
                                graphicalItem: a,
                                activeTooltipItem: n,
                                itemData: c.props.data,
                              }),
                              h =
                                void 0 === c.props.activeIndex
                                  ? p
                                  : c.props.activeIndex;
                            return {
                              graphicalItem: Pe(
                                Pe({}, a),
                                {},
                                { childIndex: h },
                              ),
                              payload: (0, se.w7)(a, n)
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
                        r,
                        o = this.props,
                        i = o.children,
                        a = o.className,
                        u = o.width,
                        c = o.height,
                        l = o.style,
                        s = o.compact,
                        f = o.title,
                        p = o.desc,
                        h = me(o, he),
                        d = (0, U.L6)(h);
                      if (s)
                        return n.createElement(
                          I.T,
                          ve({}, d, { width: u, height: c, title: f, desc: p }),
                          this.renderClipPath(),
                          (0, U.eu)(i, this.renderMap),
                        );
                      this.props.accessibilityLayer &&
                        ((d.tabIndex =
                          null !== (e = this.props.tabIndex) && void 0 !== e
                            ? e
                            : 0),
                        (d.role =
                          null !== (r = this.props.role) && void 0 !== r
                            ? r
                            : "img"),
                        (d.onKeyDown = function (e) {
                          t.accessibilityManager.keyboardEvent(e);
                        }),
                        (d.onFocus = function () {
                          t.accessibilityManager.focus();
                        }));
                      var y = this.parseEventsOfWrapper();
                      return n.createElement(
                        "div",
                        ve(
                          {
                            className: (0, x.Z)("recharts-wrapper", a),
                            style: Pe(
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
                        n.createElement(
                          I.T,
                          ve({}, d, {
                            width: u,
                            height: c,
                            title: f,
                            desc: p,
                            style: Te,
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
                o && be(e.prototype, o),
                a && be(e, a),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                p
              );
            })(n.Component)),
            ke(e, "displayName", r),
            ke(
              e,
              "defaultProps",
              Pe(
                {
                  layout: "horizontal",
                  stackOffset: "none",
                  barCategoryGap: "10%",
                  barGap: 4,
                  margin: { top: 5, right: 5, bottom: 5, left: 5 },
                  reverseStackOrder: !1,
                  syncMethod: "index",
                },
                b,
              ),
            ),
            ke(e, "getDerivedStateFromProps", function (t, e) {
              var r = t.dataKey,
                n = t.data,
                o = t.children,
                a = t.width,
                u = t.height,
                c = t.layout,
                l = t.stackOffset,
                s = t.margin;
              if (void 0 === e.updateId) {
                var f = ze(t);
                return Pe(
                  Pe(
                    Pe({}, f),
                    {},
                    { updateId: 0 },
                    P(Pe(Pe({ props: t }, f), {}, { updateId: 0 }), e),
                  ),
                  {},
                  {
                    prevDataKey: r,
                    prevData: n,
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
                r !== e.prevDataKey ||
                n !== e.prevData ||
                a !== e.prevWidth ||
                u !== e.prevHeight ||
                c !== e.prevLayout ||
                l !== e.prevStackOffset ||
                !(0, J.w)(s, e.prevMargin)
              ) {
                var p = ze(t),
                  h = {
                    chartX: e.chartX,
                    chartY: e.chartY,
                    isTooltipActive: e.isTooltipActive,
                  },
                  d = Pe(Pe({}, Be(e, n, c)), {}, { updateId: e.updateId + 1 }),
                  y = Pe(Pe(Pe({}, p), h), d);
                return Pe(
                  Pe(Pe({}, y), P(Pe({ props: t }, y), e)),
                  {},
                  {
                    prevDataKey: r,
                    prevData: n,
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
                var v = !i()(n) ? e.updateId : e.updateId + 1;
                return Pe(
                  Pe(
                    { updateId: v },
                    P(Pe(Pe({ props: t }, e), {}, { updateId: v }), e),
                  ),
                  {},
                  { prevChildren: o },
                );
              }
              return null;
            }),
            ke(e, "renderActiveDot", function (t, e) {
              var r;
              return (
                (r = (0, n.isValidElement)(t)
                  ? (0, n.cloneElement)(t, e)
                  : u()(t)
                  ? t(e)
                  : n.createElement(Y.o, e)),
                n.createElement(
                  B.m,
                  { className: "recharts-active-dot", key: e.key },
                  r,
                )
              );
            }),
            e
          );
        };
    },
    85674: (t, e, r) => {
      "use strict";
      r.d(e, { b: () => n });
      var n = function (t) {
        return null;
      };
      n.displayName = "Cell";
    },
    47094: (t, e, r) => {
      "use strict";
      r.d(e, { _: () => M });
      var n = r(47427),
        o = r(38716),
        i = r.n(o),
        a = r(8889),
        u = r.n(a),
        c = r(60486),
        l = r.n(c),
        s = r(84148),
        f = r(93998),
        p = r(94797),
        h = r(76325),
        d = r(53460);
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
            if (Array.isArray(t)) return b(t);
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
            if ("string" == typeof t) return b(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return b(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function g(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function x(t, e) {
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
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(r), !0).forEach(function (e) {
                O(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function O(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== y(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== y(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === y(e) ? e : String(e);
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
      function j() {
        return (
          (j = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          j.apply(this, arguments)
        );
      }
      var S = function (t) {
          var e = t.value,
            r = t.formatter,
            n = i()(t.children) ? e : t.children;
          return u()(r) ? r(n) : n;
        },
        A = function (t, e, r) {
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
            b = p.outerRadius,
            g = p.startAngle,
            x = p.endAngle,
            w = p.clockWise,
            O = (m + b) / 2,
            S = (function (t, e) {
              return (0, h.uY)(e - t) * Math.min(Math.abs(e - t), 360);
            })(g, x),
            A = S >= 0 ? 1 : -1;
          "insideStart" === u
            ? ((o = g + A * l), (a = w))
            : "insideEnd" === u
            ? ((o = x - A * l), (a = !w))
            : "end" === u && ((o = x + A * l), (a = w)),
            (a = S <= 0 ? a : !a);
          var E = (0, d.op)(y, v, O, o),
            P = (0, d.op)(y, v, O, o + 359 * (a ? 1 : -1)),
            k = "M"
              .concat(E.x, ",")
              .concat(E.y, "\n    A")
              .concat(O, ",")
              .concat(O, ",0,1,")
              .concat(a ? 0 : 1, ",\n    ")
              .concat(P.x, ",")
              .concat(P.y),
            M = i()(t.id) ? (0, h.EL)("recharts-radial-line-") : t.id;
          return n.createElement(
            "text",
            j({}, r, {
              dominantBaseline: "central",
              className: (0, s.Z)("recharts-radial-bar-label", f),
            }),
            n.createElement(
              "defs",
              null,
              n.createElement("path", { id: M, d: k }),
            ),
            n.createElement("textPath", { xlinkHref: "#".concat(M) }, e),
          );
        },
        E = function (t) {
          var e = t.viewBox,
            r = t.offset,
            n = t.position,
            o = e,
            i = o.cx,
            a = o.cy,
            u = o.innerRadius,
            c = o.outerRadius,
            l = (o.startAngle + o.endAngle) / 2;
          if ("outside" === n) {
            var s = (0, d.op)(i, a, c + r, l),
              f = s.x;
            return {
              x: f,
              y: s.y,
              textAnchor: f >= i ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === n)
            return {
              x: i,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === n)
            return {
              x: i,
              y: a,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === n)
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
        P = function (t) {
          var e = t.viewBox,
            r = t.parentViewBox,
            n = t.offset,
            o = t.position,
            i = e,
            a = i.x,
            u = i.y,
            c = i.width,
            s = i.height,
            f = s >= 0 ? 1 : -1,
            p = f * n,
            d = f > 0 ? "end" : "start",
            y = f > 0 ? "start" : "end",
            v = c >= 0 ? 1 : -1,
            m = v * n,
            b = v > 0 ? "end" : "start",
            g = v > 0 ? "start" : "end";
          if ("top" === o)
            return w(
              w(
                {},
                {
                  x: a + c / 2,
                  y: u - f * n,
                  textAnchor: "middle",
                  verticalAnchor: d,
                },
              ),
              r ? { height: Math.max(u - r.y, 0), width: c } : {},
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
              r
                ? { height: Math.max(r.y + r.height - (u + s), 0), width: c }
                : {},
            );
          if ("left" === o) {
            var x = {
              x: a - m,
              y: u + s / 2,
              textAnchor: b,
              verticalAnchor: "middle",
            };
            return w(
              w({}, x),
              r ? { width: Math.max(x.x - r.x, 0), height: s } : {},
            );
          }
          if ("right" === o) {
            var O = {
              x: a + c + m,
              y: u + s / 2,
              textAnchor: g,
              verticalAnchor: "middle",
            };
            return w(
              w({}, O),
              r ? { width: Math.max(r.x + r.width - O.x, 0), height: s } : {},
            );
          }
          var j = r ? { width: c, height: s } : {};
          return "insideLeft" === o
            ? w(
                {
                  x: a + m,
                  y: u + s / 2,
                  textAnchor: g,
                  verticalAnchor: "middle",
                },
                j,
              )
            : "insideRight" === o
            ? w(
                {
                  x: a + c - m,
                  y: u + s / 2,
                  textAnchor: b,
                  verticalAnchor: "middle",
                },
                j,
              )
            : "insideTop" === o
            ? w(
                {
                  x: a + c / 2,
                  y: u + p,
                  textAnchor: "middle",
                  verticalAnchor: y,
                },
                j,
              )
            : "insideBottom" === o
            ? w(
                {
                  x: a + c / 2,
                  y: u + s - p,
                  textAnchor: "middle",
                  verticalAnchor: d,
                },
                j,
              )
            : "insideTopLeft" === o
            ? w({ x: a + m, y: u + p, textAnchor: g, verticalAnchor: y }, j)
            : "insideTopRight" === o
            ? w({ x: a + c - m, y: u + p, textAnchor: b, verticalAnchor: y }, j)
            : "insideBottomLeft" === o
            ? w({ x: a + m, y: u + s - p, textAnchor: g, verticalAnchor: d }, j)
            : "insideBottomRight" === o
            ? w(
                {
                  x: a + c - m,
                  y: u + s - p,
                  textAnchor: b,
                  verticalAnchor: d,
                },
                j,
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
          r = t.offset,
          o = w({ offset: void 0 === r ? 5 : r }, g(t, v)),
          a = o.viewBox,
          c = o.position,
          l = o.value,
          h = o.children,
          d = o.content,
          y = o.className,
          m = void 0 === y ? "" : y,
          b = o.textBreakAll;
        if (!a || (i()(l) && i()(h) && !(0, n.isValidElement)(d) && !u()(d)))
          return null;
        if ((0, n.isValidElement)(d)) return (0, n.cloneElement)(d, o);
        if (u()(d)) {
          if (((e = (0, n.createElement)(d, o)), (0, n.isValidElement)(e)))
            return e;
        } else e = S(o);
        var x = k(a),
          O = (0, p.L6)(o, !0);
        if (x && ("insideStart" === c || "insideEnd" === c || "end" === c))
          return A(o, e, O);
        var M = x ? E(o) : P(o);
        return n.createElement(
          f.x,
          j({ className: (0, s.Z)("recharts-label", m) }, O, M, {
            breakAll: b,
          }),
          e,
        );
      }
      M.displayName = "Label";
      var _ = function (t) {
        var e = t.cx,
          r = t.cy,
          n = t.angle,
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
          b = t.labelViewBox;
        if (b) return b;
        if ((0, h.hj)(y) && (0, h.hj)(v)) {
          if ((0, h.hj)(s) && (0, h.hj)(f))
            return { x: s, y: f, width: y, height: v };
          if ((0, h.hj)(p) && (0, h.hj)(d))
            return { x: p, y: d, width: y, height: v };
        }
        return (0, h.hj)(s) && (0, h.hj)(f)
          ? { x: s, y: f, width: 0, height: 0 }
          : (0, h.hj)(e) && (0, h.hj)(r)
          ? {
              cx: e,
              cy: r,
              startAngle: o || n || 0,
              endAngle: i || n || 0,
              innerRadius: c || 0,
              outerRadius: l || u || a || 0,
              clockWise: m,
            }
          : t.viewBox
          ? t.viewBox
          : {};
      };
      (M.parseViewBox = _),
        (M.renderCallByParent = function (t, e) {
          var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && r && !t.label)) return null;
          var o = t.children,
            i = _(t),
            a = (0, p.NN)(o, M).map(function (t, r) {
              return (0, n.cloneElement)(t, {
                viewBox: e || i,
                key: "label-".concat(r),
              });
            });
          if (!r) return a;
          var c = (function (t, e) {
            return t
              ? !0 === t
                ? n.createElement(M, { key: "label-implicit", viewBox: e })
                : (0, h.P2)(t)
                ? n.createElement(M, {
                    key: "label-implicit",
                    viewBox: e,
                    value: t,
                  })
                : (0, n.isValidElement)(t)
                ? t.type === M
                  ? (0, n.cloneElement)(t, {
                      key: "label-implicit",
                      viewBox: e,
                    })
                  : n.createElement(M, {
                      key: "label-implicit",
                      content: t,
                      viewBox: e,
                    })
                : u()(t)
                ? n.createElement(M, {
                    key: "label-implicit",
                    content: t,
                    viewBox: e,
                  })
                : l()(t)
                ? n.createElement(
                    M,
                    j({ viewBox: e }, t, { key: "label-implicit" }),
                  )
                : null
              : null;
          })(t.label, e || i);
          return [c].concat(m(a));
        });
    },
    72961: (t, e, r) => {
      "use strict";
      r.d(e, { e: () => P });
      var n = r(47427),
        o = r(38716),
        i = r.n(o),
        a = r(60486),
        u = r.n(a),
        c = r(8889),
        l = r.n(c),
        s = r(54794),
        f = r.n(s),
        p = r(47094),
        h = r(47430),
        d = r(94797),
        y = r(70416);
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
        b = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
      function g(t) {
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function w() {
        return (
          (w = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          w.apply(this, arguments)
        );
      }
      function O(t, e) {
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
            ? O(Object(r), !0).forEach(function (e) {
                S(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (e) {
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
      function A(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      var E = function (t) {
        return Array.isArray(t.value) ? f()(t.value) : t.value;
      };
      function P(t) {
        var e = t.valueAccessor,
          r = void 0 === e ? E : e,
          o = A(t, m),
          a = o.data,
          u = o.dataKey,
          c = o.clockWise,
          l = o.id,
          s = o.textBreakAll,
          f = A(o, b);
        return a && a.length
          ? n.createElement(
              h.m,
              { className: "recharts-label-list" },
              a.map(function (t, e) {
                var o = i()(u) ? r(t, e) : (0, y.F$)(t && t.payload, u),
                  a = i()(l) ? {} : { id: "".concat(l, "-").concat(e) };
                return n.createElement(
                  p._,
                  w({}, (0, d.L6)(t, !0), f, a, {
                    parentViewBox: t.parentViewBox,
                    value: o,
                    textBreakAll: s,
                    viewBox: p._.parseViewBox(
                      i()(c) ? t : j(j({}, t), {}, { clockWise: c }),
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
          var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && r && !t.label)) return null;
          var o = t.children,
            i = (0, d.NN)(o, P).map(function (t, r) {
              return (0, n.cloneElement)(t, {
                data: e,
                key: "labelList-".concat(r),
              });
            });
          return r
            ? [
                (function (t, e) {
                  return t
                    ? !0 === t
                      ? n.createElement(P, {
                          key: "labelList-implicit",
                          data: e,
                        })
                      : n.isValidElement(t) || l()(t)
                      ? n.createElement(P, {
                          key: "labelList-implicit",
                          data: e,
                          content: t,
                        })
                      : u()(t)
                      ? n.createElement(
                          P,
                          w({ data: e }, t, { key: "labelList-implicit" }),
                        )
                      : null
                    : null;
                })(t.label, e),
              ].concat(g(i))
            : i;
        });
    },
    88579: (t, e, r) => {
      "use strict";
      r.d(e, { D: () => L });
      var n = r(47427),
        o = r(8889),
        i = r.n(o),
        a = r(84148),
        u = r(90481),
        c = r(82440),
        l = r(58054),
        s = r(81156);
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
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          p.apply(this, arguments)
        );
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
      function d(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, g(n.key), n);
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
          var r,
            n = m(t);
          if (e) {
            var o = m(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
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
          })(this, r);
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
      function b(t, e, r) {
        return (
          (e = g(e)) in t
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
      function g(t) {
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
            r,
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
            (r = [
              {
                key: "renderIcon",
                value: function (t) {
                  var e = this.props.inactiveColor,
                    r = 16,
                    o = x / 6,
                    i = x / 3,
                    a = t.inactive ? e : t.color;
                  if ("plainline" === t.type)
                    return n.createElement("line", {
                      strokeWidth: 4,
                      fill: "none",
                      stroke: a,
                      strokeDasharray: t.payload.strokeDasharray,
                      x1: 0,
                      y1: r,
                      x2: x,
                      y2: r,
                      className: "recharts-legend-icon",
                    });
                  if ("line" === t.type)
                    return n.createElement("path", {
                      strokeWidth: 4,
                      fill: "none",
                      stroke: a,
                      d: "M0,"
                        .concat(r, "h")
                        .concat(i, "\n            A")
                        .concat(o, ",")
                        .concat(o, ",0,1,1,")
                        .concat(2 * i, ",")
                        .concat(r, "\n            H")
                        .concat(x, "M")
                        .concat(2 * i, ",")
                        .concat(r, "\n            A")
                        .concat(o, ",")
                        .concat(o, ",0,1,1,")
                        .concat(i, ",")
                        .concat(r),
                      className: "recharts-legend-icon",
                    });
                  if ("rect" === t.type)
                    return n.createElement("path", {
                      stroke: "none",
                      fill: a,
                      d: "M0,"
                        .concat(4, "h")
                        .concat(x, "v")
                        .concat(24, "h")
                        .concat(-32, "z"),
                      className: "recharts-legend-icon",
                    });
                  if (n.isValidElement(t.legendIcon)) {
                    var u = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? h(Object(r), !0).forEach(function (e) {
                              b(t, e, r[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(r),
                            )
                          : h(Object(r)).forEach(function (e) {
                              Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(r, e),
                              );
                            });
                      }
                      return t;
                    })({}, t);
                    return delete u.legendIcon, n.cloneElement(t.legendIcon, u);
                  }
                  return n.createElement(l.v, {
                    fill: a,
                    cx: r,
                    cy: r,
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
                    r = e.payload,
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
                  return r.map(function (e, r) {
                    var l,
                      m = e.formatter || f,
                      g = (0, a.Z)(
                        (b(
                          (l = { "recharts-legend-item": !0 }),
                          "legend-item-".concat(r),
                          !0,
                        ),
                        b(l, "inactive", e.inactive),
                        l),
                      );
                    if ("none" === e.type) return null;
                    var x = i()(e.value) ? null : e.value;
                    (0, u.Z)(
                      !i()(e.value),
                      'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>',
                    );
                    var w = e.inactive ? h : e.color;
                    return n.createElement(
                      "li",
                      p(
                        {
                          className: g,
                          style: y,
                          key: "legend-item-".concat(r),
                        },
                        (0, s.bw)(t.props, e, r),
                      ),
                      n.createElement(
                        c.T,
                        { width: o, height: o, viewBox: d, style: v },
                        t.renderIcon(e),
                      ),
                      n.createElement(
                        "span",
                        {
                          className: "recharts-legend-item-text",
                          style: { color: w },
                        },
                        m ? m(x, e, r) : x,
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
                    o = t.align;
                  if (!e || !e.length) return null;
                  var i = {
                    padding: 0,
                    margin: 0,
                    textAlign: "horizontal" === r ? o : "left",
                  };
                  return n.createElement(
                    "ul",
                    { className: "recharts-default-legend", style: i },
                    this.renderItems(),
                  );
                },
              },
            ]),
            r && d(e.prototype, r),
            o && d(e, o),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            m
          );
        })(n.PureComponent);
      b(w, "displayName", "Legend"),
        b(w, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "middle",
          inactiveColor: "#ccc",
        });
      var O = r(76325),
        j = r(60674);
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
      var A = ["ref"];
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
      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? E(Object(r), !0).forEach(function (e) {
                N(t, e, r[e]);
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
      function k(t, e) {
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
            n = C(t);
          if (e) {
            var o = C(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === S(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return T(t);
          })(this, r);
        };
      }
      function T(t) {
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
      function I(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
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
          r,
          o,
          i = _(a);
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            N(T((t = i.call.apply(i, [this].concat(r)))), "lastBoundingBox", {
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
                var r = t.props.layout;
                return "vertical" === r && (0, O.hj)(t.props.height)
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
                  r,
                  n = this.props,
                  o = n.layout,
                  i = n.align,
                  a = n.verticalAlign,
                  u = n.margin,
                  c = n.chartWidth,
                  l = n.chartHeight;
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
                    (r =
                      "middle" === a
                        ? {
                            top: ((l || 0) - this.getBBoxSnapshot().height) / 2,
                          }
                        : "bottom" === a
                        ? { bottom: (u && u.bottom) || 0 }
                        : { top: (u && u.top) || 0 }),
                  P(P({}, e), r)
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.content,
                  o = e.width,
                  i = e.height,
                  a = e.wrapperStyle,
                  u = e.payloadUniqBy,
                  c = e.payload,
                  l = P(
                    P(
                      {
                        position: "absolute",
                        width: o || "auto",
                        height: i || "auto",
                      },
                      this.getDefaultPosition(a),
                    ),
                    a,
                  );
                return n.createElement(
                  "div",
                  {
                    className: "recharts-legend-wrapper",
                    style: l,
                    ref: function (e) {
                      t.wrapperNode = e;
                    },
                  },
                  (function (t, e) {
                    if (n.isValidElement(t)) return n.cloneElement(t, e);
                    if ("function" == typeof t) return n.createElement(t, e);
                    e.ref;
                    var r = I(e, A);
                    return n.createElement(w, r);
                  })(
                    r,
                    P(P({}, this.props), {}, { payload: (0, j.z)(c, u, B) }),
                  ),
                );
              },
            },
          ]) && k(e.prototype, r),
          o && k(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(n.PureComponent);
      N(L, "displayName", "Legend"),
        N(L, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
        });
    },
    8114: (t, e, r) => {
      "use strict";
      r.d(e, { h: () => m });
      var n = r(84148),
        o = r(47427),
        i = r(48679),
        a = r.n(i),
        u = r(5502),
        c = r(76325),
        l = r(90481),
        s = r(94797);
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
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(r), !0).forEach(function (e) {
                d(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function d(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== f(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== f(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === f(e) ? e : String(e);
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
      function y(t, e) {
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
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
            if ("string" == typeof t) return v(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var m = (0, o.forwardRef)(function (t, e) {
        var r = t.aspect,
          i = t.initialDimension,
          f = void 0 === i ? { width: -1, height: -1 } : i,
          p = t.width,
          d = void 0 === p ? "100%" : p,
          v = t.height,
          m = void 0 === v ? "100%" : v,
          b = t.minWidth,
          g = void 0 === b ? 0 : b,
          x = t.minHeight,
          w = t.maxHeight,
          O = t.children,
          j = t.debounce,
          S = void 0 === j ? 0 : j,
          A = t.id,
          E = t.className,
          P = t.onResize,
          k = t.style,
          M = void 0 === k ? {} : k,
          _ = (0, o.useRef)(null),
          T = (0, o.useRef)();
        (T.current = P),
          (0, o.useImperativeHandle)(e, function () {
            return _;
          });
        var C = y(
            (0, o.useState)({
              containerWidth: f.width,
              containerHeight: f.height,
            }),
            2,
          ),
          N = C[0],
          D = C[1],
          I = (0, o.useCallback)(function (t, e) {
            D(function (r) {
              var n = Math.round(t),
                o = Math.round(e);
              return r.containerWidth === n && r.containerHeight === o
                ? r
                : { containerWidth: n, containerHeight: o };
            });
          }, []);
        (0, o.useEffect)(
          function () {
            var t = function (t) {
              var e,
                r = t[0].contentRect,
                n = r.width,
                o = r.height;
              I(n, o),
                null === (e = T.current) || void 0 === e || e.call(T, n, o);
            };
            S > 0 && (t = a()(t, S, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              r = _.current.getBoundingClientRect(),
              n = r.width,
              o = r.height;
            return (
              I(n, o),
              e.observe(_.current),
              function () {
                e.disconnect();
              }
            );
          },
          [I, S],
        );
        var B = (0, o.useMemo)(
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
                !r || r > 0,
                "The aspect(%s) must be greater than zero.",
                r,
              );
            var n = (0, c.hU)(d) ? t : d,
              i = (0, c.hU)(m) ? e : m;
            r &&
              r > 0 &&
              (n ? (i = n / r) : i && (n = i * r), w && i > w && (i = w)),
              (0, l.Z)(
                n > 0 || i > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                n,
                i,
                d,
                m,
                g,
                x,
                r,
              );
            var a =
              !Array.isArray(O) &&
              (0, u.isElement)(O) &&
              (0, s.Gf)(O.type).endsWith("Chart");
            return o.Children.map(O, function (t) {
              return (0, u.isElement)(t)
                ? (0, o.cloneElement)(
                    t,
                    h(
                      { width: n, height: i },
                      a
                        ? {
                            style: h(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: i,
                                maxWidth: n,
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
          [r, O, m, w, x, g, N, d],
        );
        return o.createElement(
          "div",
          {
            id: A ? "".concat(A) : void 0,
            className: (0, n.Z)("recharts-responsive-container", E),
            style: h(
              h({}, M),
              {},
              { width: d, height: m, minWidth: g, minHeight: x, maxHeight: w },
            ),
            ref: _,
          },
          B,
        );
      });
    },
    93998: (t, e, r) => {
      "use strict";
      r.d(e, { x: () => R });
      var n = r(47427),
        o = r(38716),
        i = r.n(o),
        a = r(84148),
        u = r(76325),
        c = r(77125),
        l = r(94797),
        s = r(12605);
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
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function d(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(
              t,
              ((o = n.key),
              (i = void 0),
              (i = (function (t, e) {
                if ("object" !== f(t) || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(t, e || "default");
                  if ("object" !== f(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === e ? String : Number)(t);
              })(o, "string")),
              "symbol" === f(i) ? i : String(i)),
              n,
            );
        }
        var o, i;
      }
      var y = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        v = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        m = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
        b = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
        g = {
          cm: 96 / 2.54,
          mm: 96 / 25.4,
          pt: 96 / 72,
          pc: 16,
          in: 96,
          Q: 96 / 101.6,
          px: 1,
        },
        x = Object.keys(g),
        w = "NaN";
      var O = (function () {
        function t(e, r) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.num = e),
            (this.unit = r),
            (this.num = e),
            (this.unit = r),
            Number.isNaN(e) && (this.unit = ""),
            "" === r || m.test(r) || ((this.num = NaN), (this.unit = "")),
            x.includes(r) &&
              ((this.num = (function (t, e) {
                return t * g[e];
              })(e, r)),
              (this.unit = "px"));
        }
        var e, r, n;
        return (
          (e = t),
          (n = [
            {
              key: "parse",
              value: function (e) {
                var r,
                  n = p(null !== (r = b.exec(e)) && void 0 !== r ? r : [], 3),
                  o = n[1],
                  i = n[2];
                return new t(parseFloat(o), null != i ? i : "");
              },
            },
          ]),
          (r = [
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
          ]) && d(e.prototype, r),
          n && d(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })();
      function j(t) {
        if (t.includes(w)) return w;
        for (var e = t; e.includes("*") || e.includes("/"); ) {
          var r,
            n = p(null !== (r = y.exec(e)) && void 0 !== r ? r : [], 4),
            o = n[1],
            i = n[2],
            a = n[3],
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
            b = O.parse(null != h ? h : ""),
            g = O.parse(null != m ? m : ""),
            x = "+" === d ? b.add(g) : b.subtract(g);
          if (x.isNaN()) return w;
          e = e.replace(v, x.toString());
        }
        return e;
      }
      var S = /\(([^()]*)\)/;
      function A(t) {
        var e = t.replace(/\s+/g, "");
        return (
          (e = (function (t) {
            for (var e = t; e.includes("("); ) {
              var r = p(S.exec(e), 2)[1];
              e = e.replace(S, j(r));
            }
            return e;
          })(e)),
          (e = j(e))
        );
      }
      function E(t) {
        var e = (function (t) {
          try {
            return A(t);
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
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          M.apply(this, arguments)
        );
      }
      function _(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function T(t, e) {
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var N = /[ \f\n\r\t\v\u2028\u2029]+/,
        D = function (t) {
          var e = t.children,
            r = t.breakAll,
            n = t.style;
          try {
            var o = [];
            return (
              i()(e) ||
                (o = r ? e.toString().split("") : e.toString().split(N)),
              {
                wordsWithComputedWidth: o.map(function (t) {
                  return { word: t, width: (0, s.xE)(t, n).width };
                }),
                spaceWidth: r ? 0 : (0, s.xE)(" ", n).width,
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
            r = t.scaleToFit,
            n = t.children,
            o = t.style,
            i = t.breakAll,
            a = t.maxLines;
          if ((e || r) && !c.x.isSsr) {
            var l = D({ breakAll: i, children: n, style: o });
            return l
              ? (function (t, e, r, n, o) {
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
                          (null == n || o || u.width + a + r < Number(n))
                        )
                          u.words.push(i), (u.width += a + r);
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
                          r = D({
                            breakAll: l,
                            style: c,
                            children: e + "…",
                          }).wordsWithComputedWidth,
                          o = p(r),
                          a =
                            o.length > i ||
                            (function (t) {
                              return t.reduce(function (t, e) {
                                return t.width > e.width ? t : e;
                              });
                            })(o).width > Number(n);
                        return [a, o];
                      },
                      v = 0,
                      m = f.length - 1,
                      b = 0;
                    v <= m && b <= f.length - 1;

                  ) {
                    var g = Math.floor((v + m) / 2),
                      x = T(y(g - 1), 2),
                      w = x[0],
                      O = x[1],
                      j = T(y(g), 1)[0];
                    if (
                      (w || j || (v = g + 1), w && j && (m = g - 1), !w && j)
                    ) {
                      d = O;
                      break;
                    }
                    b++;
                  }
                  return d || h;
                })(
                  { breakAll: i, children: n, maxLines: a, style: o },
                  l.wordsWithComputedWidth,
                  l.spaceWidth,
                  e,
                  r,
                )
              : I(n);
          }
          return I(n);
        },
        L = "#808080",
        R = function (t) {
          var e = t.x,
            r = void 0 === e ? 0 : e,
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
            b = void 0 === m ? "end" : m,
            g = t.fill,
            x = void 0 === g ? L : g,
            w = _(t, P),
            O = (0, n.useMemo)(
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
            A = w.angle,
            T = w.className,
            C = w.breakAll,
            N = _(w, k);
          if (!(0, u.P2)(r) || !(0, u.P2)(i)) return null;
          var D,
            I = r + ((0, u.hj)(j) ? j : 0),
            R = i + ((0, u.hj)(S) ? S : 0);
          switch (b) {
            case "start":
              D = E("calc(".concat(p, ")"));
              break;
            case "middle":
              D = E(
                "calc("
                  .concat((O.length - 1) / 2, " * -")
                  .concat(s, " + (")
                  .concat(p, " / 2))"),
              );
              break;
            default:
              D = E("calc(".concat(O.length - 1, " * -").concat(s, ")"));
          }
          var z = [];
          if (d) {
            var U = O[0].width,
              F = w.width;
            z.push("scale(".concat(((0, u.hj)(F) ? F / U : 1) / U, ")"));
          }
          return (
            A &&
              z.push("rotate(".concat(A, ", ").concat(I, ", ").concat(R, ")")),
            z.length && (N.transform = z.join(" ")),
            n.createElement(
              "text",
              M({}, (0, l.L6)(N, !0), {
                x: I,
                y: R,
                className: (0, a.Z)("recharts-text", T),
                textAnchor: v,
                fill: x.includes("url") ? L : x,
              }),
              O.map(function (t, e) {
                var r = t.words.join(C ? "" : " ");
                return n.createElement(
                  "tspan",
                  { x: I, dy: 0 === e ? D : s, key: r },
                  r,
                );
              }),
            )
          );
        };
    },
    72236: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => X });
      var n = r(47427),
        o = r(2045),
        i = r.n(o),
        a = r(38716),
        u = r.n(a),
        c = r(84148),
        l = r(76325);
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
            var r =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != r) {
              var n,
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
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
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== s(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== s(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === s(e) ? e : String(e);
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
      function v(t) {
        return Array.isArray(t) && (0, l.P2)(t[0]) && (0, l.P2)(t[1])
          ? t.join(" ~ ")
          : t;
      }
      var m = function (t) {
          var e = t.separator,
            r = void 0 === e ? " : " : e,
            o = t.contentStyle,
            a = void 0 === o ? {} : o,
            s = t.itemStyle,
            p = void 0 === s ? {} : s,
            h = t.labelStyle,
            y = void 0 === h ? {} : h,
            m = t.payload,
            b = t.formatter,
            g = t.itemSorter,
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
            A = d({ margin: 0 }, y),
            E = !u()(O),
            P = E ? O : "",
            k = (0, c.Z)("recharts-default-tooltip", x),
            M = (0, c.Z)("recharts-tooltip-label", w);
          return (
            E && j && null != m && (P = j(O, m)),
            n.createElement(
              "div",
              { className: k, style: S },
              n.createElement(
                "p",
                { className: M, style: A },
                n.isValidElement(P) ? P : "".concat(P),
              ),
              (function () {
                if (m && m.length) {
                  var t = (g ? i()(m, g) : m).map(function (t, e) {
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
                      i = t.formatter || b || v,
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
                    return n.createElement(
                      "li",
                      {
                        className: "recharts-tooltip-item",
                        key: "tooltip-item-".concat(e),
                        style: o,
                      },
                      (0, l.P2)(s)
                        ? n.createElement(
                            "span",
                            { className: "recharts-tooltip-item-name" },
                            s,
                          )
                        : null,
                      (0, l.P2)(s)
                        ? n.createElement(
                            "span",
                            { className: "recharts-tooltip-item-separator" },
                            r,
                          )
                        : null,
                      n.createElement(
                        "span",
                        { className: "recharts-tooltip-item-value" },
                        c,
                      ),
                      n.createElement(
                        "span",
                        { className: "recharts-tooltip-item-unit" },
                        t.unit || "",
                      ),
                    );
                  });
                  return n.createElement(
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
        b = r(15819);
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
      function x(t, e, r) {
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
      var w = "recharts-tooltip-wrapper",
        O = { visibility: "hidden" };
      function j(t) {
        var e,
          r = t.coordinate,
          n = t.translateX,
          o = t.translateY;
        return (0, c.Z)(
          w,
          (x(
            (e = {}),
            "".concat(w, "-right"),
            (0, l.hj)(n) && r && (0, l.hj)(r.x) && n >= r.x,
          ),
          x(
            e,
            "".concat(w, "-left"),
            (0, l.hj)(n) && r && (0, l.hj)(r.x) && n < r.x,
          ),
          x(
            e,
            "".concat(w, "-bottom"),
            (0, l.hj)(o) && r && (0, l.hj)(r.y) && o >= r.y,
          ),
          x(
            e,
            "".concat(w, "-top"),
            (0, l.hj)(o) && r && (0, l.hj)(r.y) && o < r.y,
          ),
          e),
        );
      }
      function S(t) {
        var e = t.allowEscapeViewBox,
          r = t.coordinate,
          n = t.key,
          o = t.offsetTopLeft,
          i = t.position,
          a = t.reverseDirection,
          u = t.tooltipDimension,
          c = t.viewBox,
          s = t.viewBoxDimension;
        if (i && (0, l.hj)(i[n])) return i[n];
        var f = r[n] - u - o,
          p = r[n] + o;
        return e[n]
          ? a[n]
            ? f
            : p
          : a[n]
          ? f < c[n]
            ? Math.max(p, c[n])
            : Math.max(f, c[n])
          : p + u > c[n] + s
          ? Math.max(f, c[n])
          : Math.max(p, c[n]);
      }
      function A(t) {
        var e,
          r,
          n,
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
                    r = t.translateY,
                    n = t.useTranslate3d;
                  return (0, b.bO)({
                    transform: n
                      ? "translate3d(".concat(e, "px, ").concat(r, "px, 0)")
                      : "translate(".concat(e, "px, ").concat(r, "px)"),
                  });
                })({
                  translateX: (r = S({
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
                  translateY: (n = S({
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
            cssClasses: j({ translateX: r, translateY: n, coordinate: i }),
          }
        );
      }
      function E(t) {
        return (
          (E =
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
          E(t)
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
      function M(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, I(n.key), n);
        }
      }
      function _(t, e) {
        return (
          (_ = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          _(t, e)
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
            n = N(t);
          if (e) {
            var o = N(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === E(e) || "function" == typeof e)) return e;
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
          (e = I(e)) in t
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
      function I(t) {
        var e = (function (t, e) {
          if ("object" !== E(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== E(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === E(e) ? e : String(e);
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
              e && _(t, e);
          })(a, t);
          var e,
            r,
            o,
            i = T(a);
          function a() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
              r[n] = arguments[n];
            return (
              D(C((t = i.call.apply(i, [this].concat(r)))), "state", {
                dismissed: !1,
                dismissedAtCoordinate: { x: 0, y: 0 },
              }),
              D(C(t), "lastBoundingBox", { width: -1, height: -1 }),
              D(C(t), "handleKeyDown", function (e) {
                var r, n, o, i;
                "Escape" === e.key &&
                  t.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: {
                      x:
                        null !==
                          (r =
                            null === (n = t.props.coordinate) || void 0 === n
                              ? void 0
                              : n.x) && void 0 !== r
                          ? r
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
            (r = [
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
                    r = e.active,
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
                    m = A({
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
                    g = m.cssClasses,
                    x = m.cssProperties,
                    w = k(
                      k(
                        k(
                          {},
                          s &&
                            r &&
                            (0, b.bO)({
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
                          !this.state.dismissed && r && l
                            ? "visible"
                            : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      },
                      v,
                    );
                  return n.createElement(
                    "div",
                    {
                      tabIndex: -1,
                      role: "dialog",
                      className: g,
                      style: w,
                      ref: function (e) {
                        t.wrapperNode = e;
                      },
                    },
                    u,
                  );
                },
              },
            ]) && M(e.prototype, r),
            o && M(e, o),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(n.PureComponent),
        L = r(77125),
        R = r(60674);
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
      function F(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? U(Object(r), !0).forEach(function (e) {
                G(t, e, r[e]);
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
      function $(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, H(n.key), n);
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
          var r,
            n = q(t);
          if (e) {
            var o = q(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
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
          })(this, r);
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
      function G(t, e, r) {
        return (
          (e = H(e)) in t
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
      function H(t) {
        var e = (function (t, e) {
          if ("object" !== z(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== z(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === z(e) ? e : String(e);
      }
      function V(t) {
        return t.dataKey;
      }
      var X = (function (t) {
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
          r,
          o,
          i = Z(a);
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
          (r = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.active,
                  r = t.allowEscapeViewBox,
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
                  b = t.wrapperStyle,
                  g = null != f ? f : [];
                c &&
                  g.length &&
                  (g = (0, R.z)(
                    f.filter(function (t) {
                      return null != t.value;
                    }),
                    p,
                    V,
                  ));
                var x = g.length > 0;
                return n.createElement(
                  B,
                  {
                    allowEscapeViewBox: r,
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
                    wrapperStyle: b,
                  },
                  (function (t, e) {
                    return n.isValidElement(t)
                      ? n.cloneElement(t, e)
                      : "function" == typeof t
                      ? n.createElement(t, e)
                      : n.createElement(m, e);
                  })(a, F(F({}, this.props), {}, { payload: g })),
                );
              },
            },
          ]) && $(e.prototype, r),
          o && $(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(n.PureComponent);
      G(X, "displayName", "Tooltip"),
        G(X, "defaultProps", {
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
    47430: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => l });
      var n = r(47427),
        o = r(84148),
        i = r(94797),
        a = ["children", "className"];
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
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      var l = n.forwardRef(function (t, e) {
        var r = t.children,
          l = t.className,
          s = c(t, a),
          f = (0, o.Z)("recharts-layer", l);
        return n.createElement(
          "g",
          u({ className: f }, (0, i.L6)(s, !0), { ref: e }),
          r,
        );
      });
    },
    82440: (t, e, r) => {
      "use strict";
      r.d(e, { T: () => l });
      var n = r(47427),
        o = r(84148),
        i = r(94797),
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
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function l(t) {
        var e = t.children,
          r = t.width,
          l = t.height,
          s = t.viewBox,
          f = t.className,
          p = t.style,
          h = t.title,
          d = t.desc,
          y = c(t, a),
          v = s || { width: r, height: l, x: 0, y: 0 },
          m = (0, o.Z)("recharts-surface", f);
        return n.createElement(
          "svg",
          u({}, (0, i.L6)(y, !0, "svg"), {
            className: m,
            width: r,
            height: l,
            style: p,
            viewBox: ""
              .concat(v.x, " ")
              .concat(v.y, " ")
              .concat(v.width, " ")
              .concat(v.height),
          }),
          n.createElement("title", null, h),
          n.createElement("desc", null, d),
          e,
        );
      }
    },
    84223: (t, e, r) => {
      "use strict";
      r.d(e, { H: () => V });
      var n = r(47427);
      function o() {}
      function i(t, e, r) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + e) / 6,
          (t._y0 + 4 * t._y1 + r) / 6,
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
                var r = (this._x0 + 4 * this._x1 + t) / 6,
                  n = (this._y0 + 4 * this._y1 + e) / 6;
                this._line
                  ? this._context.lineTo(r, n)
                  : this._context.moveTo(r, n);
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
      function d(t, e, r) {
        var n = t._x1 - t._x0,
          o = e - t._x1,
          i = (t._y1 - t._y0) / (n || (o < 0 && -0)),
          a = (r - t._y1) / (o || (n < 0 && -0)),
          u = (i * o + a * n) / (n + o);
        return (
          (h(i) + h(a)) *
            Math.min(Math.abs(i), Math.abs(a), 0.5 * Math.abs(u)) || 0
        );
      }
      function y(t, e) {
        var r = t._x1 - t._x0;
        return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e;
      }
      function v(t, e, r) {
        var n = t._x0,
          o = t._y0,
          i = t._x1,
          a = t._y1,
          u = (i - n) / 3;
        t._context.bezierCurveTo(n + u, o + u * e, i - u, a - u * r, i, a);
      }
      function m(t) {
        this._context = t;
      }
      function b(t) {
        this._context = new g(t);
      }
      function g(t) {
        this._context = t;
      }
      function x(t) {
        this._context = t;
      }
      function w(t) {
        var e,
          r,
          n = t.length - 1,
          o = new Array(n),
          i = new Array(n),
          a = new Array(n);
        for (o[0] = 0, i[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e)
          (o[e] = 1), (i[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
        for (
          o[n - 1] = 2, i[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1;
          e < n;
          ++e
        )
          (r = o[e] / i[e - 1]), (i[e] -= r), (a[e] -= r * a[e - 1]);
        for (o[n - 1] = a[n - 1] / i[n - 1], e = n - 2; e >= 0; --e)
          o[e] = (a[e] - o[e + 1]) / i[e];
        for (i[n - 1] = (t[n] + o[n - 1]) / 2, e = 0; e < n - 1; ++e)
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
                  (this._point = 3), v(this, y(this, (r = d(this, t, e))), r);
                  break;
                default:
                  v(this, this._t0, (r = d(this, t, e)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = e),
                (this._t0 = r);
            }
          },
        }),
        ((b.prototype = Object.create(m.prototype)).point = function (t, e) {
          m.prototype.point.call(this, e, t);
        }),
        (g.prototype = {
          moveTo: function (t, e) {
            this._context.moveTo(e, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, e) {
            this._context.lineTo(e, t);
          },
          bezierCurveTo: function (t, e, r, n, o, i) {
            this._context.bezierCurveTo(e, t, n, r, i, o);
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
                for (var n = w(t), o = w(e), i = 0, a = 1; a < r; ++i, ++a)
                  this._context.bezierCurveTo(
                    n[0][i],
                    o[0][i],
                    n[1][i],
                    o[1][i],
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
                  var r = this._x * (1 - this._t) + t * this._t;
                  this._context.lineTo(r, this._y), this._context.lineTo(r, e);
                }
            }
            (this._x = t), (this._y = e);
          },
        });
      var j = r(70479),
        S = r(22015),
        A = r(79221);
      function E(t) {
        return t[0];
      }
      function P(t) {
        return t[1];
      }
      function k(t, e) {
        var r = (0, S.Z)(!0),
          n = null,
          o = p,
          i = null,
          a = (0, A.d)(u);
        function u(u) {
          var c,
            l,
            s,
            f = (u = (0, j.Z)(u)).length,
            p = !1;
          for (null == n && (i = o((s = a()))), c = 0; c <= f; ++c)
            !(c < f && r((l = u[c]), c, u)) === p &&
              ((p = !p) ? i.lineStart() : i.lineEnd()),
              p && i.point(+t(l, c, u), +e(l, c, u));
          if (s) return (i = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? E : (0, S.Z)(t)),
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
              ? ((r = "function" == typeof t ? t : (0, S.Z)(!!t)), u)
              : r;
          }),
          (u.curve = function (t) {
            return arguments.length ? ((o = t), null != n && (i = o(n)), u) : o;
          }),
          (u.context = function (t) {
            return arguments.length
              ? (null == t ? (n = i = null) : (i = o((n = t))), u)
              : n;
          }),
          u
        );
      }
      function M(t, e, r) {
        var n = null,
          o = (0, S.Z)(!0),
          i = null,
          a = p,
          u = null,
          c = (0, A.d)(l);
        function l(l) {
          var s,
            f,
            p,
            h,
            d,
            y = (l = (0, j.Z)(l)).length,
            v = !1,
            m = new Array(y),
            b = new Array(y);
          for (null == i && (u = a((d = c()))), s = 0; s <= y; ++s) {
            if (!(s < y && o((h = l[s]), s, l)) === v)
              if ((v = !v)) (f = s), u.areaStart(), u.lineStart();
              else {
                for (u.lineEnd(), u.lineStart(), p = s - 1; p >= f; --p)
                  u.point(m[p], b[p]);
                u.lineEnd(), u.areaEnd();
              }
            v &&
              ((m[s] = +t(h, s, l)),
              (b[s] = +e(h, s, l)),
              u.point(n ? +n(h, s, l) : m[s], r ? +r(h, s, l) : b[s]));
          }
          if (d) return (u = null), d + "" || null;
        }
        function s() {
          return k().defined(o).curve(a).context(i);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? E : (0, S.Z)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
              ? (0, S.Z)(0)
              : (0, S.Z)(+e)),
          (r = "function" == typeof r ? r : void 0 === r ? P : (0, S.Z)(+r)),
          (l.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, S.Z)(+e)), (n = null), l)
              : t;
          }),
          (l.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, S.Z)(+e)), l)
              : t;
          }),
          (l.x1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, S.Z)(+t)),
                l)
              : n;
          }),
          (l.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, S.Z)(+t)), (r = null), l)
              : e;
          }),
          (l.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, S.Z)(+t)), l)
              : e;
          }),
          (l.y1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, S.Z)(+t)),
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
              ? ((o = "function" == typeof t ? t : (0, S.Z)(!!t)), l)
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
      var _ = r(70758),
        T = r.n(_),
        C = r(8889),
        N = r.n(C),
        D = r(84148),
        I = r(81156),
        B = r(94797),
        L = r(76325);
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
      function F(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? U(Object(r), !0).forEach(function (e) {
                $(t, e, r[e]);
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
      function $(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== R(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== R(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === R(e) ? e : String(e);
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
            return new b(t);
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
        G = function (t) {
          return t.y;
        },
        H = function (t) {
          var e,
            r = t.type,
            n = void 0 === r ? "linear" : r,
            o = t.points,
            i = void 0 === o ? [] : o,
            a = t.baseLine,
            u = t.layout,
            c = t.connectNulls,
            l = void 0 !== c && c,
            s = (function (t, e) {
              if (N()(t)) return t;
              var r = "curve".concat(T()(t));
              return ("curveMonotone" !== r && "curveBump" !== r) || !e
                ? W[r] || p
                : W["".concat(r).concat("vertical" === e ? "Y" : "X")];
            })(n, u),
            f = l
              ? i.filter(function (t) {
                  return Z(t);
                })
              : i;
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
                .defined(Z)
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
              .defined(Z)
              .curve(s),
            e(f)
          );
        },
        V = function (t) {
          var e = t.className,
            r = t.points,
            o = t.path,
            i = t.pathRef;
          if (!((r && r.length) || o)) return null;
          var a = r && r.length ? H(t) : o;
          return n.createElement(
            "path",
            z({}, (0, B.L6)(t), (0, I.Ym)(t), {
              className: (0, D.Z)("recharts-curve", e),
              d: a,
              ref: i,
            }),
          );
        };
    },
    14166: (t, e, r) => {
      "use strict";
      r.d(e, { o: () => c });
      var n = r(47427),
        o = r(84148),
        i = r(81156),
        a = r(94797);
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
      var c = function (t) {
        var e = t.cx,
          r = t.cy,
          c = t.r,
          l = t.className,
          s = (0, o.Z)("recharts-dot", l);
        return e === +e && r === +r && c === +c
          ? n.createElement(
              "circle",
              u({}, (0, a.L6)(t), (0, i.Ym)(t), {
                className: s,
                cx: e,
                cy: r,
                r: c,
              }),
            )
          : null;
      };
    },
    83821: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => m, X: () => y });
      var n = r(47427),
        o = r(84148),
        i = r(15819),
        a = r(94797);
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function f(t, e) {
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
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(r), !0).forEach(function (e) {
                h(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function h(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== u(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== u(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === u(e) ? e : String(e);
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
      var d = function (t, e, r, n, o) {
          var i,
            a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
            u = n >= 0 ? 1 : -1,
            c = r >= 0 ? 1 : -1,
            l = (n >= 0 && r >= 0) || (n < 0 && r < 0) ? 1 : 0;
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
              (i += "L ".concat(t + r - c * s[1], ",").concat(e)),
              s[1] > 0 &&
                (i += "A "
                  .concat(s[1], ",")
                  .concat(s[1], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + r, ",")
                  .concat(e + u * s[1])),
              (i += "L ".concat(t + r, ",").concat(e + n - u * s[2])),
              s[2] > 0 &&
                (i += "A "
                  .concat(s[2], ",")
                  .concat(s[2], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + r - c * s[2], ",")
                  .concat(e + n)),
              (i += "L ".concat(t + c * s[3], ",").concat(e + n)),
              s[3] > 0 &&
                (i += "A "
                  .concat(s[3], ",")
                  .concat(s[3], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t, ",")
                  .concat(e + n - u * s[3])),
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
            i = "M "
              .concat(t, ",")
              .concat(e, " h ")
              .concat(r, " v ")
              .concat(n, " h ")
              .concat(-r, " Z");
          return i;
        },
        y = function (t, e) {
          if (!t || !e) return !1;
          var r = t.x,
            n = t.y,
            o = e.x,
            i = e.y,
            a = e.width,
            u = e.height;
          if (Math.abs(a) > 0 && Math.abs(u) > 0) {
            var c = Math.min(o, o + a),
              l = Math.max(o, o + a),
              s = Math.min(i, i + u),
              f = Math.max(i, i + u);
            return r >= c && r <= l && n >= s && n <= f;
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
            r = (0, n.useRef)(),
            u = l((0, n.useState)(-1), 2),
            s = u[0],
            f = u[1];
          (0, n.useEffect)(function () {
            if (r.current && r.current.getTotalLength)
              try {
                var t = r.current.getTotalLength();
                t && f(t);
              } catch (t) {}
          }, []);
          var h = e.x,
            y = e.y,
            m = e.width,
            b = e.height,
            g = e.radius,
            x = e.className,
            w = e.animationEasing,
            O = e.animationDuration,
            j = e.animationBegin,
            S = e.isAnimationActive,
            A = e.isUpdateAnimationActive;
          if (
            h !== +h ||
            y !== +y ||
            m !== +m ||
            b !== +b ||
            0 === m ||
            0 === b
          )
            return null;
          var E = (0, o.Z)("recharts-rectangle", x);
          return A
            ? n.createElement(
                i.ZP,
                {
                  canBegin: s > 0,
                  from: { width: m, height: b, x: h, y },
                  to: { width: m, height: b, x: h, y },
                  duration: O,
                  animationEasing: w,
                  isActive: A,
                },
                function (t) {
                  var o = t.width,
                    u = t.height,
                    l = t.x,
                    f = t.y;
                  return n.createElement(
                    i.ZP,
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
                    n.createElement(
                      "path",
                      c({}, (0, a.L6)(e, !0), {
                        className: E,
                        d: d(l, f, o, u, g),
                        ref: r,
                      }),
                    ),
                  );
                },
              )
            : n.createElement(
                "path",
                c({}, (0, a.L6)(e, !0), { className: E, d: d(h, y, m, b, g) }),
              );
        };
    },
    55287: (t, e, r) => {
      "use strict";
      r.d(e, { L: () => v });
      var n = r(47427),
        o = r(84148),
        i = r(94797),
        a = r(53460),
        u = r(76325);
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
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(r), !0).forEach(function (e) {
                p(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function p(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
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
            })(t, "string");
            return "symbol" === c(e) ? e : String(e);
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
      var h = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.radius,
            o = t.angle,
            i = t.sign,
            u = t.isExternal,
            c = t.cornerRadius,
            l = t.cornerIsExternal,
            s = c * (u ? 1 : -1) + n,
            f = Math.asin(c / s) / a.Wk,
            p = l ? o : o + i * f,
            h = l ? o - i * f : o;
          return {
            center: (0, a.op)(e, r, s, p),
            circleTangency: (0, a.op)(e, r, n, p),
            lineTangency: (0, a.op)(e, r, s * Math.cos(f * a.Wk), h),
            theta: f,
          };
        },
        d = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.innerRadius,
            o = t.outerRadius,
            i = t.startAngle,
            c = (function (t, e) {
              return (0, u.uY)(e - t) * Math.min(Math.abs(e - t), 359.999);
            })(i, t.endAngle),
            l = i + c,
            s = (0, a.op)(e, r, o, i),
            f = (0, a.op)(e, r, o, l),
            p = "M "
              .concat(s.x, ",")
              .concat(s.y, "\n    A ")
              .concat(o, ",")
              .concat(o, ",0,\n    ")
              .concat(+(Math.abs(c) > 180), ",")
              .concat(+(i > l), ",\n    ")
              .concat(f.x, ",")
              .concat(f.y, "\n  ");
          if (n > 0) {
            var h = (0, a.op)(e, r, n, i),
              d = (0, a.op)(e, r, n, l);
            p += "L "
              .concat(d.x, ",")
              .concat(d.y, "\n            A ")
              .concat(n, ",")
              .concat(n, ",0,\n            ")
              .concat(+(Math.abs(c) > 180), ",")
              .concat(+(i <= l), ",\n            ")
              .concat(h.x, ",")
              .concat(h.y, " Z");
          } else p += "L ".concat(e, ",").concat(r, " Z");
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
            r = e.cx,
            a = e.cy,
            c = e.innerRadius,
            s = e.outerRadius,
            p = e.cornerRadius,
            v = e.forceCornerRadius,
            m = e.cornerIsExternal,
            b = e.startAngle,
            g = e.endAngle,
            x = e.className;
          if (s < c || b === g) return null;
          var w,
            O = (0, o.Z)("recharts-sector", x),
            j = s - c,
            S = (0, u.h1)(p, j, 0, !0);
          return (
            (w =
              S > 0 && Math.abs(b - g) < 360
                ? (function (t) {
                    var e = t.cx,
                      r = t.cy,
                      n = t.innerRadius,
                      o = t.outerRadius,
                      i = t.cornerRadius,
                      a = t.forceCornerRadius,
                      c = t.cornerIsExternal,
                      l = t.startAngle,
                      s = t.endAngle,
                      f = (0, u.uY)(s - l),
                      p = h({
                        cx: e,
                        cy: r,
                        radius: o,
                        angle: l,
                        sign: f,
                        cornerRadius: i,
                        cornerIsExternal: c,
                      }),
                      y = p.circleTangency,
                      v = p.lineTangency,
                      m = p.theta,
                      b = h({
                        cx: e,
                        cy: r,
                        radius: o,
                        angle: s,
                        sign: -f,
                        cornerRadius: i,
                        cornerIsExternal: c,
                      }),
                      g = b.circleTangency,
                      x = b.lineTangency,
                      w = b.theta,
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
                            cy: r,
                            innerRadius: n,
                            outerRadius: o,
                            startAngle: l,
                            endAngle: s,
                          });
                    var j = "M "
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
                      .concat(g.x, ",")
                      .concat(g.y, "\n    A")
                      .concat(i, ",")
                      .concat(i, ",0,0,")
                      .concat(+(f < 0), ",")
                      .concat(x.x, ",")
                      .concat(x.y, "\n  ");
                    if (n > 0) {
                      var S = h({
                          cx: e,
                          cy: r,
                          radius: n,
                          angle: l,
                          sign: f,
                          isExternal: !0,
                          cornerRadius: i,
                          cornerIsExternal: c,
                        }),
                        A = S.circleTangency,
                        E = S.lineTangency,
                        P = S.theta,
                        k = h({
                          cx: e,
                          cy: r,
                          radius: n,
                          angle: s,
                          sign: -f,
                          isExternal: !0,
                          cornerRadius: i,
                          cornerIsExternal: c,
                        }),
                        M = k.circleTangency,
                        _ = k.lineTangency,
                        T = k.theta,
                        C = c ? Math.abs(l - s) : Math.abs(l - s) - P - T;
                      if (C < 0 && 0 === i)
                        return "".concat(j, "L").concat(e, ",").concat(r, "Z");
                      j += "L"
                        .concat(_.x, ",")
                        .concat(_.y, "\n      A")
                        .concat(i, ",")
                        .concat(i, ",0,0,")
                        .concat(+(f < 0), ",")
                        .concat(M.x, ",")
                        .concat(M.y, "\n      A")
                        .concat(n, ",")
                        .concat(n, ",0,")
                        .concat(+(C > 180), ",")
                        .concat(+(f > 0), ",")
                        .concat(A.x, ",")
                        .concat(A.y, "\n      A")
                        .concat(i, ",")
                        .concat(i, ",0,0,")
                        .concat(+(f < 0), ",")
                        .concat(E.x, ",")
                        .concat(E.y, "Z");
                    } else j += "L".concat(e, ",").concat(r, "Z");
                    return j;
                  })({
                    cx: r,
                    cy: a,
                    innerRadius: c,
                    outerRadius: s,
                    cornerRadius: Math.min(S, j / 2),
                    forceCornerRadius: v,
                    cornerIsExternal: m,
                    startAngle: b,
                    endAngle: g,
                  })
                : d({
                    cx: r,
                    cy: a,
                    innerRadius: c,
                    outerRadius: s,
                    startAngle: b,
                    endAngle: g,
                  })),
            n.createElement(
              "path",
              l({}, (0, i.L6)(e, !0), { className: O, d: w, role: "img" }),
            )
          );
        };
    },
    58054: (t, e, r) => {
      "use strict";
      r.d(e, { v: () => F });
      var n = r(47427),
        o = r(70758),
        i = r.n(o);
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
        b = u(s / 10) * m,
        g = -a(s / 10) * m,
        x = {
          draw(t, e) {
            const r = c(0.8908130915292852 * e),
              n = b * r,
              o = g * r;
            t.moveTo(0, -r), t.lineTo(n, o);
            for (let e = 1; e < 5; ++e) {
              const i = (s * e) / 5,
                c = a(i),
                l = u(i);
              t.lineTo(l * r, -c * r), t.lineTo(c * n - l * o, l * n + c * o);
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
        j = -0.5,
        S = c(3) / 2,
        A = 1 / c(12),
        E = 3 * (A / 2 + 1),
        P = {
          draw(t, e) {
            const r = c(e / E),
              n = r / 2,
              o = r * A,
              i = n,
              a = r * A + r,
              u = -i,
              l = a;
            t.moveTo(n, o),
              t.lineTo(i, a),
              t.lineTo(u, l),
              t.lineTo(j * n - S * o, S * n + j * o),
              t.lineTo(j * i - S * a, S * i + j * a),
              t.lineTo(j * u - S * l, S * u + j * l),
              t.lineTo(j * n + S * o, j * o - S * n),
              t.lineTo(j * i + S * a, j * a - S * i),
              t.lineTo(j * u + S * l, j * l - S * u),
              t.closePath();
          },
        };
      var k = r(22015),
        M = r(79221);
      c(3), c(3);
      var _ = r(84148),
        T = r(94797);
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
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          D.apply(this, arguments)
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
      function B(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? I(Object(r), !0).forEach(function (e) {
                L(t, e, r[e]);
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
      function L(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== C(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== C(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === C(e) ? e : String(e);
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
      function R(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
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
            r,
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
            v = (0, T.L6)(p, !0);
          return d === +d && y === +y && c === +c
            ? n.createElement(
                "path",
                D({}, v, {
                  className: (0, _.Z)("recharts-symbols", h),
                  transform: "translate(".concat(d, ", ").concat(y, ")"),
                  d:
                    ((e = (function (t) {
                      var e = "symbol".concat(i()(t));
                      return z[e] || f;
                    })(a)),
                    (r = (function (t, e) {
                      let r = null,
                        n = (0, M.d)(o);
                      function o() {
                        let o;
                        if (
                          (r || (r = o = n()),
                          t
                            .apply(this, arguments)
                            .draw(r, +e.apply(this, arguments)),
                          o)
                        )
                          return (r = null), o + "" || null;
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
                            ? ((r = null == t ? null : t), o)
                            : r;
                        }),
                        o
                      );
                    })()
                      .type(e)
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
                        })(c, s, a),
                      )),
                    r()),
                }),
              )
            : null;
        };
      F.registerSymbol = function (t, e) {
        z["symbol".concat(i()(t))] = e;
      };
    },
    37350: (t, e, r) => {
      "use strict";
      r.d(e, {
        bn: () => L,
        a3: () => Z,
        lT: () => R,
        V$: () => z,
        w7: () => U,
      });
      var n = r(47427),
        o = r(8889),
        i = r.n(o),
        a = r(38655),
        u = r.n(a),
        c = r(62588),
        l = r.n(c),
        s = r(49198),
        f = r.n(s),
        p = r(83821),
        h = r(84148),
        d = r(15819),
        y = r(94797);
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
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          m.apply(this, arguments)
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
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
            if ("string" == typeof t) return g(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return g(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function x(t, e) {
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
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(r), !0).forEach(function (e) {
                O(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function O(t, e, r) {
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
      var j = function (t, e, r, n, o) {
          var i,
            a = r - n;
          return (
            (i = "M ".concat(t, ",").concat(e)),
            (i += "L ".concat(t + r, ",").concat(e)),
            (i += "L ".concat(t + r - a / 2, ",").concat(e + o)),
            (i += "L ".concat(t + r - a / 2 - n, ",").concat(e + o)),
            (i += "L ".concat(t, ",").concat(e, " Z"))
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
        A = function (t) {
          var e = w(w({}, S), t),
            r = (0, n.useRef)(),
            o = b((0, n.useState)(-1), 2),
            i = o[0],
            a = o[1];
          (0, n.useEffect)(function () {
            if (r.current && r.current.getTotalLength)
              try {
                var t = r.current.getTotalLength();
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
            g = e.animationDuration,
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
          var A = (0, h.Z)("recharts-trapezoid", p);
          return O
            ? n.createElement(
                d.ZP,
                {
                  canBegin: i > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: f, x: u, y: c },
                  to: { upperWidth: l, lowerWidth: s, height: f, x: u, y: c },
                  duration: g,
                  animationEasing: v,
                  isActive: O,
                },
                function (t) {
                  var o = t.upperWidth,
                    a = t.lowerWidth,
                    u = t.height,
                    c = t.x,
                    l = t.y;
                  return n.createElement(
                    d.ZP,
                    {
                      canBegin: i > 0,
                      from: "0px ".concat(-1 === i ? 1 : i, "px"),
                      to: "".concat(i, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: x,
                      duration: g,
                      easing: v,
                    },
                    n.createElement(
                      "path",
                      m({}, (0, y.L6)(e, !0), {
                        className: A,
                        d: j(c, l, o, a, u),
                        ref: r,
                      }),
                    ),
                  );
                },
              )
            : n.createElement(
                "g",
                null,
                n.createElement(
                  "path",
                  m({}, (0, y.L6)(e, !0), {
                    className: A,
                    d: j(u, c, l, s, f),
                  }),
                ),
              );
        },
        E = r(55287),
        P = r(47430),
        k = r(58054),
        M = [
          "option",
          "shapeType",
          "propTransformer",
          "activeClassName",
          "isActive",
        ];
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
      function T(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      function C(t, e) {
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
            ? C(Object(r), !0).forEach(function (e) {
                D(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : C(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function D(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== _(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== _(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === _(e) ? e : String(e);
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
      function I(t, e) {
        return N(N({}, e), t);
      }
      function B(t) {
        var e = t.shapeType,
          r = t.elementProps;
        switch (e) {
          case "rectangle":
            return n.createElement(p.A, r);
          case "trapezoid":
            return n.createElement(A, r);
          case "sector":
            return n.createElement(E.L, r);
          case "symbols":
            if (
              (function (t, e) {
                return "symbols" === t;
              })(e)
            )
              return n.createElement(k.v, r);
            break;
          default:
            return null;
        }
      }
      function L(t) {
        var e,
          r = t.option,
          o = t.shapeType,
          a = t.propTransformer,
          c = void 0 === a ? I : a,
          s = t.activeClassName,
          f = void 0 === s ? "recharts-active-shape" : s,
          p = t.isActive,
          h = T(t, M);
        if ((0, n.isValidElement)(r))
          e = (0, n.cloneElement)(
            r,
            N(
              N({}, h),
              (function (t) {
                return (0, n.isValidElement)(t) ? t.props : t;
              })(r),
            ),
          );
        else if (i()(r)) e = r(h);
        else if (u()(r) && !l()(r)) {
          var d = c(r, h);
          e = n.createElement(B, { shapeType: o, elementProps: d });
        } else {
          var y = h;
          e = n.createElement(B, { shapeType: o, elementProps: y });
        }
        return p ? n.createElement(P.m, { className: f }, e) : e;
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
        var r,
          n,
          o =
            t.x ===
              (null == e || null === (r = e.labelViewBox) || void 0 === r
                ? void 0
                : r.x) || t.x === e.x,
          i =
            t.y ===
              (null == e || null === (n = e.labelViewBox) || void 0 === n
                ? void 0
                : n.y) || t.y === e.y;
        return o && i;
      }
      function $(t, e) {
        var r = t.endAngle === e.endAngle,
          n = t.startAngle === e.startAngle;
        return r && n;
      }
      function W(t, e) {
        var r = t.x === e.x,
          n = t.y === e.y,
          o = t.z === e.z;
        return r && n && o;
      }
      function Z(t) {
        var e = t.activeTooltipItem,
          r = t.graphicalItem,
          n = t.itemData,
          o = (function (t, e) {
            var r;
            return (
              R(t, e)
                ? (r = "trapezoids")
                : z(t, e)
                ? (r = "sectors")
                : U(t, e) && (r = "points"),
              r
            );
          })(r, e),
          i = (function (t, e) {
            var r, n;
            return R(t, e)
              ? null === (r = e.tooltipPayload) ||
                void 0 === r ||
                null === (r = r[0]) ||
                void 0 === r ||
                null === (r = r.payload) ||
                void 0 === r
                ? void 0
                : r.payload
              : z(t, e)
              ? null === (n = e.tooltipPayload) ||
                void 0 === n ||
                null === (n = n[0]) ||
                void 0 === n ||
                null === (n = n.payload) ||
                void 0 === n
                ? void 0
                : n.payload
              : U(t, e)
              ? e.payload
              : {};
          })(r, e),
          a = n.filter(function (t, n) {
            var a = f()(i, t),
              u = r.props[o].filter(function (t) {
                var n = (function (t, e) {
                  var r;
                  return (
                    R(t, e) ? (r = F) : z(t, e) ? (r = $) : U(t, e) && (r = W),
                    r
                  );
                })(r, e);
                return n(t, e);
              }),
              c = r.props[o].indexOf(u[u.length - 1]);
            return a && n === c;
          });
        return n.indexOf(a[a.length - 1]);
      }
    },
    52871: (t, e, r) => {
      "use strict";
      r.d(e, {
        Ky: () => w,
        O1: () => b,
        _b: () => g,
        t9: () => m,
        xE: () => O,
      });
      var n = r(11217),
        o = r.n(n),
        i = r(55084),
        a = r.n(i),
        u = r(70416),
        c = r(94797),
        l = r(76325),
        s = r(28531);
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
      var m = function (t, e, r, n, o) {
          var i = t.width,
            a = t.height,
            f = t.layout,
            p = t.children,
            h = Object.keys(e),
            v = {
              left: r.left,
              leftMirror: r.left,
              right: i - r.right,
              rightMirror: i - r.right,
              top: r.top,
              topMirror: r.top,
              bottom: a - r.bottom,
              bottomMirror: a - r.bottom,
            },
            m = !!(0, c.sP)(p, s.$);
          return h.reduce(function (i, a) {
            var c,
              s,
              p,
              h,
              b,
              g = e[a],
              x = g.orientation,
              w = g.domain,
              O = g.padding,
              j = void 0 === O ? {} : O,
              S = g.mirror,
              A = g.reversed,
              E = "".concat(x).concat(S ? "Mirror" : "");
            if (
              "number" === g.type &&
              ("gap" === g.padding || "no-gap" === g.padding)
            ) {
              var P = w[1] - w[0],
                k = 1 / 0,
                M = g.categoricalDomain.sort();
              M.forEach(function (t, e) {
                e > 0 && (k = Math.min((t || 0) - (M[e - 1] || 0), k));
              });
              var _ = k / P,
                T = "vertical" === g.layout ? r.height : r.width;
              if (
                ("gap" === g.padding && (c = (_ * T) / 2),
                "no-gap" === g.padding)
              ) {
                var C = (0, l.h1)(t.barCategoryGap, _ * T),
                  N = (_ * T) / 2;
                c = N - C - ((N - C) / T) * C;
              }
            }
            (s =
              "xAxis" === n
                ? [
                    r.left + (j.left || 0) + (c || 0),
                    r.left + r.width - (j.right || 0) - (c || 0),
                  ]
                : "yAxis" === n
                ? "horizontal" === f
                  ? [r.top + r.height - (j.bottom || 0), r.top + (j.top || 0)]
                  : [
                      r.top + (j.top || 0) + (c || 0),
                      r.top + r.height - (j.bottom || 0) - (c || 0),
                    ]
                : g.range),
              A && (s = [s[1], s[0]]);
            var D = (0, u.Hq)(g, o, m),
              I = D.scale,
              B = D.realScaleType;
            I.domain(w).range(s), (0, u.zF)(I);
            var L = (0, u.g$)(I, d(d({}, g), {}, { realScaleType: B }));
            "xAxis" === n
              ? ((b = ("top" === x && !S) || ("bottom" === x && S)),
                (p = r.left),
                (h = v[E] - b * g.height))
              : "yAxis" === n &&
                ((b = ("left" === x && !S) || ("right" === x && S)),
                (p = v[E] - b * g.width),
                (h = r.top));
            var R = d(
              d(d({}, g), L),
              {},
              {
                realScaleType: B,
                x: p,
                y: h,
                scale: I,
                width: "xAxis" === n ? r.width : g.width,
                height: "yAxis" === n ? r.height : g.height,
              },
            );
            return (
              (R.bandSize = (0, u.zT)(R, L)),
              g.hide || "xAxis" !== n
                ? g.hide || (v[E] += (b ? -1 : 1) * R.width)
                : (v[E] += (b ? -1 : 1) * R.height),
              d(d({}, i), {}, y({}, a, R))
            );
          }, {});
        },
        b = function (t, e) {
          var r = t.x,
            n = t.y,
            o = e.x,
            i = e.y;
          return {
            x: Math.min(r, o),
            y: Math.min(n, i),
            width: Math.abs(o - r),
            height: Math.abs(i - n),
          };
        },
        g = function (t) {
          var e = t.x1,
            r = t.y1,
            n = t.x2,
            o = t.y2;
          return b({ x: e, y: r }, { x: n, y: o });
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
                          var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                          return this.scale(t) + o;
                        case "end":
                          var i = this.bandwidth ? this.bandwidth() : 0;
                          return this.scale(t) + i;
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
              return o()(t, function (t, r) {
                return e[r].apply(t, { bandAware: n, position: i });
              });
            },
            isInRange: function (t) {
              return a()(t, function (t, r) {
                return e[r].isInRange(t);
              });
            },
          },
        );
      };
      var O = function (t) {
        var e = t.width,
          r = t.height,
          n = (function (t) {
            return ((t % 180) + 180) % 180;
          })(
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ),
          o = (n * Math.PI) / 180,
          i = Math.atan(r / e),
          a = o > i && o < Math.PI - i ? r / Math.sin(o) : e / Math.cos(o);
        return Math.abs(a);
      };
    },
    70416: (t, e, r) => {
      "use strict";
      r.d(e, {
        By: () => wi,
        VO: () => mi,
        zF: () => Ci,
        DO: () => Mi,
        Bu: () => Ni,
        zT: () => Hi,
        qz: () => xi,
        pt: () => gi,
        Yj: () => Fi,
        Fy: () => Ui,
        Hv: () => zi,
        Rf: () => Ei,
        gF: () => vi,
        s6: () => Si,
        EB: () => Wi,
        fk: () => bi,
        wh: () => Li,
        O3: () => $i,
        uY: () => Pi,
        g$: () => Ri,
        Qo: () => Xi,
        F$: () => yi,
        NA: () => Ai,
        ko: () => Vi,
        ZI: () => ji,
        Hq: () => _i,
        LG: () => Gi,
        Vv: () => Di,
      });
      var n = {};
      r.r(n),
        r.d(n, {
          scaleBand: () => o.Z,
          scaleDiverging: () => Qn,
          scaleDivergingLog: () => to,
          scaleDivergingPow: () => ro,
          scaleDivergingSqrt: () => no,
          scaleDivergingSymlog: () => eo,
          scaleIdentity: () => qt,
          scaleImplicit: () => ie.O,
          scaleLinear: () => Zt,
          scaleLog: () => te,
          scaleOrdinal: () => ie.Z,
          scalePoint: () => o.x,
          scalePow: () => se,
          scaleQuantile: () => Oe,
          scaleQuantize: () => je,
          scaleRadial: () => he,
          scaleSequential: () => Gn,
          scaleSequentialLog: () => Hn,
          scaleSequentialPow: () => Xn,
          scaleSequentialQuantile: () => Kn,
          scaleSequentialSqrt: () => Yn,
          scaleSequentialSymlog: () => Vn,
          scaleSqrt: () => fe,
          scaleSymlog: () => oe,
          scaleThreshold: () => Se,
          scaleTime: () => $n,
          scaleUtc: () => Wn,
          tickFormat: () => $t,
        });
      var o = r(9756);
      const i = Math.sqrt(50),
        a = Math.sqrt(10),
        u = Math.sqrt(2);
      function c(t, e, r) {
        const n = (e - t) / Math.max(0, r),
          o = Math.floor(Math.log10(n)),
          l = n / Math.pow(10, o),
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
          p < f && 0.5 <= r && r < 2 ? c(t, e, 2 * r) : [f, p, h]
        );
      }
      function l(t, e, r) {
        if (!((r = +r) > 0)) return [];
        if ((t = +t) === (e = +e)) return [t];
        const n = e < t,
          [o, i, a] = n ? c(e, t, r) : c(t, e, r);
        if (!(i >= o)) return [];
        const u = i - o + 1,
          l = new Array(u);
        if (n)
          if (a < 0) for (let t = 0; t < u; ++t) l[t] = (i - t) / -a;
          else for (let t = 0; t < u; ++t) l[t] = (i - t) * a;
        else if (a < 0) for (let t = 0; t < u; ++t) l[t] = (o + t) / -a;
        else for (let t = 0; t < u; ++t) l[t] = (o + t) * a;
        return l;
      }
      function s(t, e, r) {
        return c((t = +t), (e = +e), (r = +r))[2];
      }
      function f(t, e, r) {
        r = +r;
        const n = (e = +e) < (t = +t),
          o = n ? s(e, t, r) : s(t, e, r);
        return (n ? -1 : 1) * (o < 0 ? 1 / -o : o);
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
        let e, r, n;
        function o(t, n, o = 0, i = t.length) {
          if (o < i) {
            if (0 !== e(n, n)) return i;
            do {
              const e = (o + i) >>> 1;
              r(t[e], n) < 0 ? (o = e + 1) : (i = e);
            } while (o < i);
          }
          return o;
        }
        return (
          2 !== t.length
            ? ((e = p), (r = (e, r) => p(t(e), r)), (n = (e, r) => t(e) - r))
            : ((e = t === p || t === h ? t : y), (r = t), (n = t)),
          {
            left: o,
            center: function (t, e, r = 0, i = t.length) {
              const a = o(t, e, r, i - 1);
              return a > r && n(t[a - 1], e) > -n(t[a], e) ? a - 1 : a;
            },
            right: function (t, n, o = 0, i = t.length) {
              if (o < i) {
                if (0 !== e(n, n)) return i;
                do {
                  const e = (o + i) >>> 1;
                  r(t[e], n) <= 0 ? (o = e + 1) : (i = e);
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
        b = m.right,
        g = (m.left, d(v).center, b);
      function x(t, e, r) {
        (t.prototype = e.prototype = r), (r.constructor = t);
      }
      function w(t, e) {
        var r = Object.create(t.prototype);
        for (var n in e) r[n] = e[n];
        return r;
      }
      function O() {}
      var j = 0.7,
        S = 1 / j,
        A = "\\s*([+-]?\\d+)\\s*",
        E = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        P = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        k = /^#([0-9a-f]{3,8})$/,
        M = new RegExp(`^rgb\\(${A},${A},${A}\\)$`),
        _ = new RegExp(`^rgb\\(${P},${P},${P}\\)$`),
        T = new RegExp(`^rgba\\(${A},${A},${A},${E}\\)$`),
        C = new RegExp(`^rgba\\(${P},${P},${P},${E}\\)$`),
        N = new RegExp(`^hsl\\(${E},${P},${P}\\)$`),
        D = new RegExp(`^hsla\\(${E},${P},${P},${E}\\)$`),
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
        var e, r;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = k.exec(t))
            ? ((r = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === r
                ? z(e)
                : 3 === r
                ? new $(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1,
                  )
                : 8 === r
                ? U(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255,
                  )
                : 4 === r
                ? U(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255,
                  )
                : null)
            : (e = M.exec(t))
            ? new $(e[1], e[2], e[3], 1)
            : (e = _.exec(t))
            ? new $(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1,
              )
            : (e = T.exec(t))
            ? U(e[1], e[2], e[3], e[4])
            : (e = C.exec(t))
            ? U(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4],
              )
            : (e = N.exec(t))
            ? V(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = D.exec(t))
            ? V(e[1], e[2] / 100, e[3] / 100, e[4])
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
      function U(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN), new $(t, e, r, n);
      }
      function F(t, e, r, n) {
        return 1 === arguments.length
          ? ((o = t) instanceof O || (o = R(o)),
            o ? new $((o = o.rgb()).r, o.g, o.b, o.opacity) : new $())
          : new $(t, e, r, null == n ? 1 : n);
        var o;
      }
      function $(t, e, r, n) {
        (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
      }
      function W() {
        return `#${H(this.r)}${H(this.g)}${H(this.b)}`;
      }
      function Z() {
        const t = q(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${G(this.r)}, ${G(this.g)}, ${G(
          this.b,
        )}${1 === t ? ")" : `, ${t})`}`;
      }
      function q(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function G(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function H(t) {
        return ((t = G(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function V(t, e, r, n) {
        return (
          n <= 0
            ? (t = e = r = NaN)
            : r <= 0 || r >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new Y(t, e, r, n)
        );
      }
      function X(t) {
        if (t instanceof Y) return new Y(t.h, t.s, t.l, t.opacity);
        if ((t instanceof O || (t = R(t)), !t)) return new Y();
        if (t instanceof Y) return t;
        var e = (t = t.rgb()).r / 255,
          r = t.g / 255,
          n = t.b / 255,
          o = Math.min(e, r, n),
          i = Math.max(e, r, n),
          a = NaN,
          u = i - o,
          c = (i + o) / 2;
        return (
          u
            ? ((a =
                e === i
                  ? (r - n) / u + 6 * (r < n)
                  : r === i
                  ? (n - e) / u + 2
                  : (e - r) / u + 4),
              (u /= c < 0.5 ? i + o : 2 - i - o),
              (a *= 60))
            : (u = c > 0 && c < 1 ? 0 : a),
          new Y(a, u, c, t.opacity)
        );
      }
      function Y(t, e, r, n) {
        (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
      }
      function K(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function J(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function Q(t, e, r) {
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
      function tt(t, e, r, n, o) {
        var i = t * t,
          a = i * t;
        return (
          ((1 - 3 * t + 3 * i - a) * e +
            (4 - 6 * i + 3 * a) * r +
            (1 + 3 * t + 3 * i - 3 * a) * n +
            a * o) /
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
          return X(this).formatHsl();
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
              return new $(G(this.r), G(this.g), G(this.b), q(this.opacity));
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
              return `#${H(this.r)}${H(this.g)}${H(this.b)}${H(
                255 * (isNaN(this.opacity) ? 1 : this.opacity),
              )}`;
            },
            formatRgb: Z,
            toString: Z,
          }),
        ),
        x(
          Y,
          function (t, e, r, n) {
            return 1 === arguments.length
              ? X(t)
              : new Y(t, e, r, null == n ? 1 : n);
          },
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? S : Math.pow(S, t)),
                new Y(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? j : Math.pow(j, t)),
                new Y(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < 0.5 ? r : 1 - r) * e,
                o = 2 * r - n;
              return new $(
                Q(t >= 240 ? t - 240 : t + 120, o, n),
                Q(t, o, n),
                Q(t < 120 ? t + 240 : t - 120, o, n),
                this.opacity,
              );
            },
            clamp() {
              return new Y(K(this.h), J(this.s), J(this.l), q(this.opacity));
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
              return `${1 === t ? "hsl(" : "hsla("}${K(this.h)}, ${
                100 * J(this.s)
              }%, ${100 * J(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          }),
        );
      const et = (t) => () => t;
      function rt(t, e) {
        return function (r) {
          return t + r * e;
        };
      }
      function nt(t) {
        return 1 == (t = +t)
          ? ot
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
                : et(isNaN(e) ? r : e);
            };
      }
      function ot(t, e) {
        var r = e - t;
        return r ? rt(t, r) : et(isNaN(t) ? e : t);
      }
      const it = (function t(e) {
        var r = nt(e);
        function n(t, e) {
          var n = r((t = F(t)).r, (e = F(e)).r),
            o = r(t.g, e.g),
            i = r(t.b, e.b),
            a = ot(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = n(e)),
              (t.g = o(e)),
              (t.b = i(e)),
              (t.opacity = a(e)),
              t + ""
            );
          };
        }
        return (n.gamma = t), n;
      })(1);
      function at(t) {
        return function (e) {
          var r,
            n,
            o = e.length,
            i = new Array(o),
            a = new Array(o),
            u = new Array(o);
          for (r = 0; r < o; ++r)
            (n = F(e[r])),
              (i[r] = n.r || 0),
              (a[r] = n.g || 0),
              (u[r] = n.b || 0);
          return (
            (i = t(i)),
            (a = t(a)),
            (u = t(u)),
            (n.opacity = 1),
            function (t) {
              return (n.r = i(t)), (n.g = a(t)), (n.b = u(t)), n + "";
            }
          );
        };
      }
      at(function (t) {
        var e = t.length - 1;
        return function (r) {
          var n =
              r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), e - 1) : Math.floor(r * e),
            o = t[n],
            i = t[n + 1],
            a = n > 0 ? t[n - 1] : 2 * o - i,
            u = n < e - 1 ? t[n + 2] : 2 * i - o;
          return tt((r - n / e) * e, a, o, i, u);
        };
      }),
        at(function (t) {
          var e = t.length;
          return function (r) {
            var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
              o = t[(n + e - 1) % e],
              i = t[n % e],
              a = t[(n + 1) % e],
              u = t[(n + 2) % e];
            return tt((r - n / e) * e, o, i, a, u);
          };
        });
      function ut(t, e) {
        var r,
          n = e ? e.length : 0,
          o = t ? Math.min(n, t.length) : 0,
          i = new Array(o),
          a = new Array(n);
        for (r = 0; r < o; ++r) i[r] = yt(t[r], e[r]);
        for (; r < n; ++r) a[r] = e[r];
        return function (t) {
          for (r = 0; r < o; ++r) a[r] = i[r](t);
          return a;
        };
      }
      function ct(t, e) {
        var r = new Date();
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return r.setTime(t * (1 - n) + e * n), r;
          }
        );
      }
      function lt(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (r) {
            return t * (1 - r) + e * r;
          }
        );
      }
      function st(t, e) {
        var r,
          n = {},
          o = {};
        for (r in ((null !== t && "object" == typeof t) || (t = {}),
        (null !== e && "object" == typeof e) || (e = {}),
        e))
          r in t ? (n[r] = yt(t[r], e[r])) : (o[r] = e[r]);
        return function (t) {
          for (r in n) o[r] = n[r](t);
          return o;
        };
      }
      var ft = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        pt = new RegExp(ft.source, "g");
      function ht(t, e) {
        var r,
          n,
          o,
          i = (ft.lastIndex = pt.lastIndex = 0),
          a = -1,
          u = [],
          c = [];
        for (t += "", e += ""; (r = ft.exec(t)) && (n = pt.exec(e)); )
          (o = n.index) > i &&
            ((o = e.slice(i, o)), u[a] ? (u[a] += o) : (u[++a] = o)),
            (r = r[0]) === (n = n[0])
              ? u[a]
                ? (u[a] += n)
                : (u[++a] = n)
              : ((u[++a] = null), c.push({ i: a, x: lt(r, n) })),
            (i = pt.lastIndex);
        return (
          i < e.length && ((o = e.slice(i)), u[a] ? (u[a] += o) : (u[++a] = o)),
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
                for (var r, n = 0; n < e; ++n) u[(r = c[n]).i] = r.x(t);
                return u.join("");
              })
        );
      }
      function dt(t, e) {
        e || (e = []);
        var r,
          n = t ? Math.min(e.length, t.length) : 0,
          o = e.slice();
        return function (i) {
          for (r = 0; r < n; ++r) o[r] = t[r] * (1 - i) + e[r] * i;
          return o;
        };
      }
      function yt(t, e) {
        var r,
          n,
          o = typeof e;
        return null == e || "boolean" === o
          ? et(e)
          : ("number" === o
              ? lt
              : "string" === o
              ? (r = R(e))
                ? ((e = r), it)
                : ht
              : e instanceof R
              ? it
              : e instanceof Date
              ? ct
              : ((n = e),
                !ArrayBuffer.isView(n) || n instanceof DataView
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
          function (r) {
            return Math.round(t * (1 - r) + e * r);
          }
        );
      }
      function mt(t) {
        return +t;
      }
      var bt = [0, 1];
      function gt(t) {
        return t;
      }
      function xt(t, e) {
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
      function wt(t, e, r) {
        var n = t[0],
          o = t[1],
          i = e[0],
          a = e[1];
        return (
          o < n
            ? ((n = xt(o, n)), (i = r(a, i)))
            : ((n = xt(n, o)), (i = r(i, a))),
          function (t) {
            return i(n(t));
          }
        );
      }
      function Ot(t, e, r) {
        var n = Math.min(t.length, e.length) - 1,
          o = new Array(n),
          i = new Array(n),
          a = -1;
        for (
          t[n] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < n;

        )
          (o[a] = xt(t[a], t[a + 1])), (i[a] = r(e[a], e[a + 1]));
        return function (e) {
          var r = g(t, e, 1, n) - 1;
          return i[r](o[r](e));
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
          r,
          n,
          o,
          i,
          a = bt,
          u = bt,
          c = yt,
          l = gt;
        function s() {
          var t,
            e,
            r,
            c = Math.min(a.length, u.length);
          return (
            l !== gt &&
              ((t = a[0]),
              (e = a[c - 1]),
              t > e && ((r = t), (t = e), (e = r)),
              (l = function (r) {
                return Math.max(t, Math.min(e, r));
              })),
            (n = c > 2 ? Ot : wt),
            (o = i = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e = +e))
            ? r
            : (o || (o = n(a.map(t), u, c)))(t(l(e)));
        }
        return (
          (f.invert = function (r) {
            return l(e((i || (i = n(u, a.map(t), lt)))(r)));
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
            return arguments.length ? ((l = !!t || gt), s()) : l !== gt;
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
      function At() {
        return St()(gt, gt);
      }
      var Et,
        Pt = r(80560),
        kt =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function Mt(t) {
        if (!(e = kt.exec(t))) throw new Error("invalid format: " + t);
        var e;
        return new _t({
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
      function _t(t) {
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
      function Tt(t, e) {
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
      function Ct(t) {
        return (t = Tt(Math.abs(t))) ? t[1] : NaN;
      }
      function Nt(t, e) {
        var r = Tt(t, e);
        if (!r) return t + "";
        var n = r[0],
          o = r[1];
        return o < 0
          ? "0." + new Array(-o).join("0") + n
          : n.length > o + 1
          ? n.slice(0, o + 1) + "." + n.slice(o + 1)
          : n + new Array(o - n.length + 2).join("0");
      }
      (Mt.prototype = _t.prototype),
        (_t.prototype.toString = function () {
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
          var r = Tt(t, e);
          if (!r) return t + "";
          var n = r[0],
            o = r[1],
            i = o - (Et = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
            a = n.length;
          return i === a
            ? n
            : i > a
            ? n + new Array(i - a + 1).join("0")
            : i > 0
            ? n.slice(0, i) + "." + n.slice(i)
            : "0." +
              new Array(1 - i).join("0") +
              Tt(t, Math.max(0, e + i - 1))[0];
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
          r,
          n =
            void 0 === t.grouping || void 0 === t.thousands
              ? It
              : ((e = zt.call(t.grouping, Number)),
                (r = t.thousands + ""),
                function (t, n) {
                  for (
                    var o = t.length, i = [], a = 0, u = e[0], c = 0;
                    o > 0 &&
                    u > 0 &&
                    (c + u + 1 > n && (u = Math.max(1, n - c)),
                    i.push(t.substring((o -= u), o + u)),
                    !((c += u + 1) > n));

                  )
                    u = e[(a = (a + 1) % e.length)];
                  return i.reverse().join(r);
                }),
          o = void 0 === t.currency ? "" : t.currency[0] + "",
          i = void 0 === t.currency ? "" : t.currency[1] + "",
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
            r = t.align,
            f = t.sign,
            p = t.symbol,
            h = t.zero,
            d = t.width,
            y = t.comma,
            v = t.precision,
            m = t.trim,
            b = t.type;
          "n" === b
            ? ((y = !0), (b = "g"))
            : Dt[b] || (void 0 === v && (v = 12), (m = !0), (b = "g")),
            (h || ("0" === e && "=" === r)) && ((h = !0), (e = "0"), (r = "="));
          var g =
              "$" === p
                ? o
                : "#" === p && /[boxX]/.test(b)
                ? "0" + b.toLowerCase()
                : "",
            x = "$" === p ? i : /[%p]/.test(b) ? c : "",
            w = Dt[b],
            O = /[defgprs%]/.test(b);
          function j(t) {
            var o,
              i,
              c,
              p = g,
              j = x;
            if ("c" === b) (j = w(t) + j), (t = "");
            else {
              var S = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? s : w(Math.abs(t), v)),
                m &&
                  (t = (function (t) {
                    t: for (var e, r = t.length, n = 1, o = -1; n < r; ++n)
                      switch (t[n]) {
                        case ".":
                          o = e = n;
                          break;
                        case "0":
                          0 === o && (o = n), (e = n);
                          break;
                        default:
                          if (!+t[n]) break t;
                          o > 0 && (o = 0);
                      }
                    return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
                  })(t)),
                S && 0 == +t && "+" !== f && (S = !1),
                (p =
                  (S ? ("(" === f ? f : l) : "-" === f || "(" === f ? "" : f) +
                  p),
                (j =
                  ("s" === b ? Ut[8 + Et / 3] : "") +
                  j +
                  (S && "(" === f ? ")" : "")),
                O)
              )
                for (o = -1, i = t.length; ++o < i; )
                  if (48 > (c = t.charCodeAt(o)) || c > 57) {
                    (j = (46 === c ? a + t.slice(o + 1) : t.slice(o)) + j),
                      (t = t.slice(0, o));
                    break;
                  }
            }
            y && !h && (t = n(t, 1 / 0));
            var A = p.length + t.length + j.length,
              E = A < d ? new Array(d - A + 1).join(e) : "";
            switch (
              (y &&
                h &&
                ((t = n(E + t, E.length ? d - j.length : 1 / 0)), (E = "")),
              r)
            ) {
              case "<":
                t = p + t + j + E;
                break;
              case "=":
                t = p + E + t + j;
                break;
              case "^":
                t = E.slice(0, (A = E.length >> 1)) + p + t + j + E.slice(A);
                break;
              default:
                t = E + p + t + j;
            }
            return u(t);
          }
          return (
            (v =
              void 0 === v
                ? 6
                : /[gprs]/.test(b)
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
            var r = f((((t = Mt(t)).type = "f"), t)),
              n = 3 * Math.max(-8, Math.min(8, Math.floor(Ct(e) / 3))),
              o = Math.pow(10, -n),
              i = Ut[8 + n / 3];
            return function (t) {
              return r(o * t) + i;
            };
          },
        };
      }
      function $t(t, e, r, n) {
        var o,
          i = f(t, e, r);
        switch ((n = Mt(null == n ? ",f" : n)).type) {
          case "s":
            var a = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != n.precision ||
                isNaN(
                  (o = (function (t, e) {
                    return Math.max(
                      0,
                      3 * Math.max(-8, Math.min(8, Math.floor(Ct(e) / 3))) -
                        Ct(Math.abs(t)),
                    );
                  })(i, a)),
                ) ||
                (n.precision = o),
              Rt(n, a)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != n.precision ||
              isNaN(
                (o = (function (t, e) {
                  return (
                    (t = Math.abs(t)),
                    (e = Math.abs(e) - t),
                    Math.max(0, Ct(e) - Ct(t)) + 1
                  );
                })(i, Math.max(Math.abs(t), Math.abs(e)))),
              ) ||
              (n.precision = o - ("e" === n.type));
            break;
          case "f":
          case "%":
            null != n.precision ||
              isNaN(
                (o = (function (t) {
                  return Math.max(0, -Ct(Math.abs(t)));
                })(i)),
              ) ||
              (n.precision = o - 2 * ("%" === n.type));
        }
        return Lt(n);
      }
      function Wt(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var r = e();
            return l(r[0], r[r.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, r) {
            var n = e();
            return $t(n[0], n[n.length - 1], null == t ? 10 : t, r);
          }),
          (t.nice = function (r) {
            null == r && (r = 10);
            var n,
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
              if ((o = s(c, l, r)) === n) return (i[a] = c), (i[u] = l), e(i);
              if (o > 0)
                (c = Math.floor(c / o) * o), (l = Math.ceil(l / o) * o);
              else {
                if (!(o < 0)) break;
                (c = Math.ceil(c * o) / o), (l = Math.floor(l * o) / o);
              }
              n = o;
            }
            return t;
          }),
          t
        );
      }
      function Zt() {
        var t = At();
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
        function r(t) {
          return null == t || isNaN((t = +t)) ? e : t;
        }
        return (
          (r.invert = r),
          (r.domain = r.range =
            function (e) {
              return arguments.length
                ? ((t = Array.from(e, mt)), r)
                : t.slice();
            }),
          (r.unknown = function (t) {
            return arguments.length ? ((e = t), r) : e;
          }),
          (r.copy = function () {
            return qt(t).unknown(e);
          }),
          (t = arguments.length ? Array.from(t, mt) : [0, 1]),
          Wt(r)
        );
      }
      function Gt(t, e) {
        var r,
          n = 0,
          o = (t = t.slice()).length - 1,
          i = t[n],
          a = t[o];
        return (
          a < i && ((r = n), (n = o), (o = r), (r = i), (i = a), (a = r)),
          (t[n] = e.floor(i)),
          (t[o] = e.ceil(a)),
          t
        );
      }
      function Ht(t) {
        return Math.log(t);
      }
      function Vt(t) {
        return Math.exp(t);
      }
      function Xt(t) {
        return -Math.log(-t);
      }
      function Yt(t) {
        return -Math.exp(-t);
      }
      function Kt(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function Jt(t) {
        return (e, r) => -t(-e, r);
      }
      function Qt(t) {
        const e = t(Ht, Vt),
          r = e.domain;
        let n,
          o,
          i = 10;
        function a() {
          return (
            (n = (function (t) {
              return t === Math.E
                ? Math.log
                : (10 === t && Math.log10) ||
                    (2 === t && Math.log2) ||
                    ((t = Math.log(t)), (e) => Math.log(e) / t);
            })(i)),
            (o = (function (t) {
              return 10 === t
                ? Kt
                : t === Math.E
                ? Math.exp
                : (e) => Math.pow(t, e);
            })(i)),
            r()[0] < 0 ? ((n = Jt(n)), (o = Jt(o)), t(Xt, Yt)) : t(Ht, Vt),
            e
          );
        }
        return (
          (e.base = function (t) {
            return arguments.length ? ((i = +t), a()) : i;
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
            let s,
              f,
              p = n(a),
              h = n(u);
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
          (e.tickFormat = (t, r) => {
            if (
              (null == t && (t = 10),
              null == r && (r = 10 === i ? "s" : ","),
              "function" != typeof r &&
                (i % 1 || null != (r = Mt(r)).precision || (r.trim = !0),
                (r = Lt(r))),
              t === 1 / 0)
            )
              return r;
            const a = Math.max(1, (i * t) / e.ticks().length);
            return (t) => {
              let e = t / o(Math.round(n(t)));
              return e * i < i - 0.5 && (e *= i), e <= a ? r(t) : "";
            };
          }),
          (e.nice = () =>
            r(
              Gt(r(), {
                floor: (t) => o(Math.floor(n(t))),
                ceil: (t) => o(Math.ceil(n(t))),
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
      function re(t) {
        return function (e) {
          return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
        };
      }
      function ne(t) {
        var e = 1,
          r = t(ee(e), re(e));
        return (
          (r.constant = function (r) {
            return arguments.length ? t(ee((e = +r)), re(e)) : e;
          }),
          Wt(r)
        );
      }
      function oe() {
        var t = ne(St());
        return (
          (t.copy = function () {
            return jt(t, oe()).constant(t.constant());
          }),
          Pt.o.apply(t, arguments)
        );
      }
      (Bt = Ft({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (Lt = Bt.format),
        (Rt = Bt.formatPrefix);
      var ie = r(54328);
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
        var e = t(gt, gt),
          r = 1;
        return (
          (e.exponent = function (e) {
            return arguments.length
              ? 1 === (r = +e)
                ? t(gt, gt)
                : 0.5 === r
                ? t(ue, ce)
                : t(ae(r), ae(1 / r))
              : r;
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
          e = At(),
          r = [0, 1],
          n = !1;
        function o(r) {
          var o = (function (t) {
            return Math.sign(t) * Math.sqrt(Math.abs(t));
          })(e(r));
          return isNaN(o) ? t : n ? Math.round(o) : o;
        }
        return (
          (o.invert = function (t) {
            return e.invert(pe(t));
          }),
          (o.domain = function (t) {
            return arguments.length ? (e.domain(t), o) : e.domain();
          }),
          (o.range = function (t) {
            return arguments.length
              ? (e.range((r = Array.from(t, mt)).map(pe)), o)
              : r.slice();
          }),
          (o.rangeRound = function (t) {
            return o.range(t).round(!0);
          }),
          (o.round = function (t) {
            return arguments.length ? ((n = !!t), o) : n;
          }),
          (o.clamp = function (t) {
            return arguments.length ? (e.clamp(t), o) : e.clamp();
          }),
          (o.unknown = function (e) {
            return arguments.length ? ((t = e), o) : t;
          }),
          (o.copy = function () {
            return he(e.domain(), r).round(n).clamp(e.clamp()).unknown(t);
          }),
          Pt.o.apply(o, arguments),
          Wt(o)
        );
      }
      function de(t, e) {
        let r;
        if (void 0 === e)
          for (const e of t)
            null != e && (r < e || (void 0 === r && e >= e)) && (r = e);
        else {
          let n = -1;
          for (let o of t)
            null != (o = e(o, ++n, t)) &&
              (r < o || (void 0 === r && o >= o)) &&
              (r = o);
        }
        return r;
      }
      function ye(t, e) {
        let r;
        if (void 0 === e)
          for (const e of t)
            null != e && (r > e || (void 0 === r && e >= e)) && (r = e);
        else {
          let n = -1;
          for (let o of t)
            null != (o = e(o, ++n, t)) &&
              (r > o || (void 0 === r && o >= o)) &&
              (r = o);
        }
        return r;
      }
      function ve(t = p) {
        if (t === p) return me;
        if ("function" != typeof t)
          throw new TypeError("compare is not a function");
        return (e, r) => {
          const n = t(e, r);
          return n || 0 === n ? n : (0 === t(r, r)) - (0 === t(e, e));
        };
      }
      function me(t, e) {
        return (
          (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
          (t < e ? -1 : t > e ? 1 : 0)
        );
      }
      function be(t, e, r = 0, n = 1 / 0, o) {
        if (
          ((e = Math.floor(e)),
          (r = Math.floor(Math.max(0, r))),
          (n = Math.floor(Math.min(t.length - 1, n))),
          !(r <= e && e <= n))
        )
          return t;
        for (o = void 0 === o ? me : ve(o); n > r; ) {
          if (n - r > 600) {
            const i = n - r + 1,
              a = e - r + 1,
              u = Math.log(i),
              c = 0.5 * Math.exp((2 * u) / 3),
              l =
                0.5 *
                Math.sqrt((u * c * (i - c)) / i) *
                (a - i / 2 < 0 ? -1 : 1);
            be(
              t,
              e,
              Math.max(r, Math.floor(e - (a * c) / i + l)),
              Math.min(n, Math.floor(e + ((i - a) * c) / i + l)),
              o,
            );
          }
          const i = t[e];
          let a = r,
            u = n;
          for (ge(t, r, e), o(t[n], i) > 0 && ge(t, r, n); a < u; ) {
            for (ge(t, a, u), ++a, --u; o(t[a], i) < 0; ) ++a;
            for (; o(t[u], i) > 0; ) --u;
          }
          0 === o(t[r], i) ? ge(t, r, u) : (++u, ge(t, u, n)),
            u <= e && (r = u + 1),
            e <= u && (n = u - 1);
        }
        return t;
      }
      function ge(t, e, r) {
        const n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function xe(t, e, r) {
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
          if (e <= 0 || n < 2) return ye(t);
          if (e >= 1) return de(t);
          var n,
            o = (n - 1) * e,
            i = Math.floor(o),
            a = de(be(t, i).subarray(0, i + 1));
          return a + (ye(t.subarray(i + 1)) - a) * (o - i);
        }
      }
      function we(t, e, r = v) {
        if ((n = t.length) && !isNaN((e = +e))) {
          if (e <= 0 || n < 2) return +r(t[0], 0, t);
          if (e >= 1) return +r(t[n - 1], n - 1, t);
          var n,
            o = (n - 1) * e,
            i = Math.floor(o),
            a = +r(t[i], i, t);
          return a + (+r(t[i + 1], i + 1, t) - a) * (o - i);
        }
      }
      function Oe() {
        var t,
          e = [],
          r = [],
          n = [];
        function o() {
          var t = 0,
            o = Math.max(1, r.length);
          for (n = new Array(o - 1); ++t < o; ) n[t - 1] = we(e, t / o);
          return i;
        }
        function i(e) {
          return null == e || isNaN((e = +e)) ? t : r[g(n, e)];
        }
        return (
          (i.invertExtent = function (t) {
            var o = r.indexOf(t);
            return o < 0
              ? [NaN, NaN]
              : [
                  o > 0 ? n[o - 1] : e[0],
                  o < n.length ? n[o] : e[e.length - 1],
                ];
          }),
          (i.domain = function (t) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let r of t) null == r || isNaN((r = +r)) || e.push(r);
            return e.sort(p), o();
          }),
          (i.range = function (t) {
            return arguments.length ? ((r = Array.from(t)), o()) : r.slice();
          }),
          (i.unknown = function (e) {
            return arguments.length ? ((t = e), i) : t;
          }),
          (i.quantiles = function () {
            return n.slice();
          }),
          (i.copy = function () {
            return Oe().domain(e).range(r).unknown(t);
          }),
          Pt.o.apply(i, arguments)
        );
      }
      function je() {
        var t,
          e = 0,
          r = 1,
          n = 1,
          o = [0.5],
          i = [0, 1];
        function a(e) {
          return null != e && e <= e ? i[g(o, e, 0, n)] : t;
        }
        function u() {
          var t = -1;
          for (o = new Array(n); ++t < n; )
            o[t] = ((t + 1) * r - (t - n) * e) / (n + 1);
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
              ? ((n = (i = Array.from(t)).length - 1), u())
              : i.slice();
          }),
          (a.invertExtent = function (t) {
            var a = i.indexOf(t);
            return a < 0
              ? [NaN, NaN]
              : a < 1
              ? [e, o[0]]
              : a >= n
              ? [o[n - 1], r]
              : [o[a - 1], o[a]];
          }),
          (a.unknown = function (e) {
            return arguments.length ? ((t = e), a) : a;
          }),
          (a.thresholds = function () {
            return o.slice();
          }),
          (a.copy = function () {
            return je().domain([e, r]).range(i).unknown(t);
          }),
          Pt.o.apply(Wt(a), arguments)
        );
      }
      function Se() {
        var t,
          e = [0.5],
          r = [0, 1],
          n = 1;
        function o(o) {
          return null != o && o <= o ? r[g(e, o, 0, n)] : t;
        }
        return (
          (o.domain = function (t) {
            return arguments.length
              ? ((e = Array.from(t)), (n = Math.min(e.length, r.length - 1)), o)
              : e.slice();
          }),
          (o.range = function (t) {
            return arguments.length
              ? ((r = Array.from(t)), (n = Math.min(e.length, r.length - 1)), o)
              : r.slice();
          }),
          (o.invertExtent = function (t) {
            var n = r.indexOf(t);
            return [e[n - 1], e[n]];
          }),
          (o.unknown = function (e) {
            return arguments.length ? ((t = e), o) : t;
          }),
          (o.copy = function () {
            return Se().domain(e).range(r).unknown(t);
          }),
          Pt.o.apply(o, arguments)
        );
      }
      const Ae = 1e3,
        Ee = 6e4,
        Pe = 36e5,
        ke = 864e5,
        Me = 6048e5,
        _e = 2592e6,
        Te = 31536e6,
        Ce = new Date(),
        Ne = new Date();
      function De(t, e, r, n) {
        function o(e) {
          return t((e = 0 === arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (o.floor = (e) => (t((e = new Date(+e))), e)),
          (o.ceil = (r) => (t((r = new Date(r - 1))), e(r, 1), t(r), r)),
          (o.round = (t) => {
            const e = o(t),
              r = o.ceil(t);
            return t - e < r - t ? e : r;
          }),
          (o.offset = (t, r) => (
            e((t = new Date(+t)), null == r ? 1 : Math.floor(r)), t
          )),
          (o.range = (r, n, i) => {
            const a = [];
            if (
              ((r = o.ceil(r)),
              (i = null == i ? 1 : Math.floor(i)),
              !(r < n && i > 0))
            )
              return a;
            let u;
            do {
              a.push((u = new Date(+r))), e(r, i), t(r);
            } while (u < r && r < n);
            return a;
          }),
          (o.filter = (r) =>
            De(
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
            ((o.count = (e, n) => (
              Ce.setTime(+e),
              Ne.setTime(+n),
              t(Ce),
              t(Ne),
              Math.floor(r(Ce, Ne))
            )),
            (o.every = (t) => (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? o.filter(
                      n ? (e) => n(e) % t == 0 : (e) => o.count(0, e) % t == 0,
                    )
                  : o
                : null
            ))),
          o
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
                (e, r) => {
                  e.setTime(+e + r * t);
                },
                (e, r) => (r - e) / t,
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
            t.setTime(+t + e * Ae);
          },
          (t, e) => (e - t) / Ae,
          (t) => t.getUTCSeconds(),
        ),
        Le =
          (Be.range,
          De(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ae);
            },
            (t, e) => {
              t.setTime(+t + e * Ee);
            },
            (t, e) => (e - t) / Ee,
            (t) => t.getMinutes(),
          )),
        Re =
          (Le.range,
          De(
            (t) => {
              t.setUTCSeconds(0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * Ee);
            },
            (t, e) => (e - t) / Ee,
            (t) => t.getUTCMinutes(),
          )),
        ze =
          (Re.range,
          De(
            (t) => {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  t.getSeconds() * Ae -
                  t.getMinutes() * Ee,
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
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Ee) /
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
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Ee) / Me,
        );
      }
      const qe = Ze(0),
        Ge = Ze(1),
        He = Ze(2),
        Ve = Ze(3),
        Xe = Ze(4),
        Ye = Ze(5),
        Ke = Ze(6);
      qe.range, Ge.range, He.range, Ve.range, Xe.range, Ye.range, Ke.range;
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
        tr = Je(1),
        er = Je(2),
        rr = Je(3),
        nr = Je(4),
        or = Je(5),
        ir = Je(6),
        ar =
          (Qe.range,
          tr.range,
          er.range,
          rr.range,
          nr.range,
          or.range,
          ir.range,
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
        ur =
          (ar.range,
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
        cr =
          (ur.range,
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
      cr.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? De(
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
      cr.range;
      const lr = De(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear(),
      );
      lr.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? De(
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
      lr.range;
      function sr(t, e, r, n, o, i) {
        const a = [
          [Be, 1, Ae],
          [Be, 5, 5e3],
          [Be, 15, 15e3],
          [Be, 30, 3e4],
          [i, 1, Ee],
          [i, 5, 3e5],
          [i, 15, 9e5],
          [i, 30, 18e5],
          [o, 1, Pe],
          [o, 3, 108e5],
          [o, 6, 216e5],
          [o, 12, 432e5],
          [n, 1, ke],
          [n, 2, 1728e5],
          [r, 1, Me],
          [e, 1, _e],
          [e, 3, 7776e6],
          [t, 1, Te],
        ];
        function u(e, r, n) {
          const o = Math.abs(r - e) / n,
            i = d(([, , t]) => t).right(a, o);
          if (i === a.length) return t.every(f(e / Te, r / Te, n));
          if (0 === i) return Ie.every(Math.max(f(e, r, n), 1));
          const [u, c] = a[o / a[i - 1][2] < a[i][2] / o ? i - 1 : i];
          return u.every(c);
        }
        return [
          function (t, e, r) {
            const n = e < t;
            n && ([t, e] = [e, t]);
            const o = r && "function" == typeof r.range ? r : u(t, e, r),
              i = o ? o.range(t, +e + 1) : [];
            return n ? i.reverse() : i;
          },
          u,
        ];
      }
      const [fr, pr] = sr(lr, ur, Qe, We, Ue, Re),
        [hr, dr] = sr(cr, ar, qe, Fe, ze, Le);
      function yr(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function vr(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function mr(t, e, r) {
        return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
      }
      var br,
        gr,
        xr,
        wr = { "-": "", _: " ", 0: "0" },
        Or = /^\s*\d+/,
        jr = /^%/,
        Sr = /[\\^$*+?|[\]().{}]/g;
      function Ar(t, e, r) {
        var n = t < 0 ? "-" : "",
          o = (n ? -t : t) + "",
          i = o.length;
        return n + (i < r ? new Array(r - i + 1).join(e) + o : o);
      }
      function Er(t) {
        return t.replace(Sr, "\\$&");
      }
      function Pr(t) {
        return new RegExp("^(?:" + t.map(Er).join("|") + ")", "i");
      }
      function kr(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function Mr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 1));
        return n ? ((t.w = +n[0]), r + n[0].length) : -1;
      }
      function _r(t, e, r) {
        var n = Or.exec(e.slice(r, r + 1));
        return n ? ((t.u = +n[0]), r + n[0].length) : -1;
      }
      function Tr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.U = +n[0]), r + n[0].length) : -1;
      }
      function Cr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.V = +n[0]), r + n[0].length) : -1;
      }
      function Nr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.W = +n[0]), r + n[0].length) : -1;
      }
      function Dr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 4));
        return n ? ((t.y = +n[0]), r + n[0].length) : -1;
      }
      function Ir(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n
          ? ((t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
          : -1;
      }
      function Br(t, e, r) {
        var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
        return n
          ? ((t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
          : -1;
      }
      function Lr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 1));
        return n ? ((t.q = 3 * n[0] - 3), r + n[0].length) : -1;
      }
      function Rr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.m = n[0] - 1), r + n[0].length) : -1;
      }
      function zr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.d = +n[0]), r + n[0].length) : -1;
      }
      function Ur(t, e, r) {
        var n = Or.exec(e.slice(r, r + 3));
        return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1;
      }
      function Fr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.H = +n[0]), r + n[0].length) : -1;
      }
      function $r(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.M = +n[0]), r + n[0].length) : -1;
      }
      function Wr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.S = +n[0]), r + n[0].length) : -1;
      }
      function Zr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 3));
        return n ? ((t.L = +n[0]), r + n[0].length) : -1;
      }
      function qr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 6));
        return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
      }
      function Gr(t, e, r) {
        var n = jr.exec(e.slice(r, r + 1));
        return n ? r + n[0].length : -1;
      }
      function Hr(t, e, r) {
        var n = Or.exec(e.slice(r));
        return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
      }
      function Vr(t, e, r) {
        var n = Or.exec(e.slice(r));
        return n ? ((t.s = +n[0]), r + n[0].length) : -1;
      }
      function Xr(t, e) {
        return Ar(t.getDate(), e, 2);
      }
      function Yr(t, e) {
        return Ar(t.getHours(), e, 2);
      }
      function Kr(t, e) {
        return Ar(t.getHours() % 12 || 12, e, 2);
      }
      function Jr(t, e) {
        return Ar(1 + Fe.count(cr(t), t), e, 3);
      }
      function Qr(t, e) {
        return Ar(t.getMilliseconds(), e, 3);
      }
      function tn(t, e) {
        return Qr(t, e) + "000";
      }
      function en(t, e) {
        return Ar(t.getMonth() + 1, e, 2);
      }
      function rn(t, e) {
        return Ar(t.getMinutes(), e, 2);
      }
      function nn(t, e) {
        return Ar(t.getSeconds(), e, 2);
      }
      function on(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function an(t, e) {
        return Ar(qe.count(cr(t) - 1, t), e, 2);
      }
      function un(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? Xe(t) : Xe.ceil(t);
      }
      function cn(t, e) {
        return (
          (t = un(t)), Ar(Xe.count(cr(t), t) + (4 === cr(t).getDay()), e, 2)
        );
      }
      function ln(t) {
        return t.getDay();
      }
      function sn(t, e) {
        return Ar(Ge.count(cr(t) - 1, t), e, 2);
      }
      function fn(t, e) {
        return Ar(t.getFullYear() % 100, e, 2);
      }
      function pn(t, e) {
        return Ar((t = un(t)).getFullYear() % 100, e, 2);
      }
      function hn(t, e) {
        return Ar(t.getFullYear() % 1e4, e, 4);
      }
      function dn(t, e) {
        var r = t.getDay();
        return Ar(
          (t = r >= 4 || 0 === r ? Xe(t) : Xe.ceil(t)).getFullYear() % 1e4,
          e,
          4,
        );
      }
      function yn(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          Ar((e / 60) | 0, "0", 2) +
          Ar(e % 60, "0", 2)
        );
      }
      function vn(t, e) {
        return Ar(t.getUTCDate(), e, 2);
      }
      function mn(t, e) {
        return Ar(t.getUTCHours(), e, 2);
      }
      function bn(t, e) {
        return Ar(t.getUTCHours() % 12 || 12, e, 2);
      }
      function gn(t, e) {
        return Ar(1 + $e.count(lr(t), t), e, 3);
      }
      function xn(t, e) {
        return Ar(t.getUTCMilliseconds(), e, 3);
      }
      function wn(t, e) {
        return xn(t, e) + "000";
      }
      function On(t, e) {
        return Ar(t.getUTCMonth() + 1, e, 2);
      }
      function jn(t, e) {
        return Ar(t.getUTCMinutes(), e, 2);
      }
      function Sn(t, e) {
        return Ar(t.getUTCSeconds(), e, 2);
      }
      function An(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function En(t, e) {
        return Ar(Qe.count(lr(t) - 1, t), e, 2);
      }
      function Pn(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? nr(t) : nr.ceil(t);
      }
      function kn(t, e) {
        return (
          (t = Pn(t)), Ar(nr.count(lr(t), t) + (4 === lr(t).getUTCDay()), e, 2)
        );
      }
      function Mn(t) {
        return t.getUTCDay();
      }
      function _n(t, e) {
        return Ar(tr.count(lr(t) - 1, t), e, 2);
      }
      function Tn(t, e) {
        return Ar(t.getUTCFullYear() % 100, e, 2);
      }
      function Cn(t, e) {
        return Ar((t = Pn(t)).getUTCFullYear() % 100, e, 2);
      }
      function Nn(t, e) {
        return Ar(t.getUTCFullYear() % 1e4, e, 4);
      }
      function Dn(t, e) {
        var r = t.getUTCDay();
        return Ar(
          (t = r >= 4 || 0 === r ? nr(t) : nr.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4,
        );
      }
      function In() {
        return "+0000";
      }
      function Bn() {
        return "%";
      }
      function Ln(t) {
        return +t;
      }
      function Rn(t) {
        return Math.floor(+t / 1e3);
      }
      function zn(t) {
        return new Date(t);
      }
      function Un(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function Fn(t, e, r, n, o, i, a, u, c, l) {
        var s = At(),
          f = s.invert,
          p = s.domain,
          h = l(".%L"),
          d = l(":%S"),
          y = l("%I:%M"),
          v = l("%I %p"),
          m = l("%a %d"),
          b = l("%b %d"),
          g = l("%B"),
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
              : n(t) < t
              ? o(t) < t
                ? m
                : b
              : r(t) < t
              ? g
              : x
          )(t);
        }
        return (
          (s.invert = function (t) {
            return new Date(f(t));
          }),
          (s.domain = function (t) {
            return arguments.length ? p(Array.from(t, Un)) : p().map(zn);
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
              t ? p(Gt(r, t)) : s
            );
          }),
          (s.copy = function () {
            return jt(s, Fn(t, e, r, n, o, i, a, u, c, l));
          }),
          s
        );
      }
      function $n() {
        return Pt.o.apply(
          Fn(hr, dr, cr, ar, qe, Fe, ze, Le, Be, gr).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function Wn() {
        return Pt.o.apply(
          Fn(fr, pr, lr, ur, Qe, $e, Ue, Re, Be, xr).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function Zn() {
        var t,
          e,
          r,
          n,
          o,
          i = 0,
          a = 1,
          u = gt,
          c = !1;
        function l(e) {
          return null == e || isNaN((e = +e))
            ? o
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
          (l.domain = function (o) {
            return arguments.length
              ? (([i, a] = o),
                (t = n((i = +i))),
                (e = n((a = +a))),
                (r = t === e ? 0 : 1 / (e - t)),
                l)
              : [i, a];
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
            return arguments.length ? ((o = t), l) : o;
          }),
          function (o) {
            return (
              (n = o),
              (t = o(i)),
              (e = o(a)),
              (r = t === e ? 0 : 1 / (e - t)),
              l
            );
          }
        );
      }
      function qn(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function Gn() {
        var t = Wt(Zn()(gt));
        return (
          (t.copy = function () {
            return qn(t, Gn());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function Hn() {
        var t = Qt(Zn()).domain([1, 10]);
        return (
          (t.copy = function () {
            return qn(t, Hn()).base(t.base());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function Vn() {
        var t = ne(Zn());
        return (
          (t.copy = function () {
            return qn(t, Vn()).constant(t.constant());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function Xn() {
        var t = le(Zn());
        return (
          (t.copy = function () {
            return qn(t, Xn()).exponent(t.exponent());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function Yn() {
        return Xn.apply(null, arguments).exponent(0.5);
      }
      function Kn() {
        var t = [],
          e = gt;
        function r(r) {
          if (null != r && !isNaN((r = +r)))
            return e((g(t, r, 1) - 1) / (t.length - 1));
        }
        return (
          (r.domain = function (e) {
            if (!arguments.length) return t.slice();
            t = [];
            for (let r of e) null == r || isNaN((r = +r)) || t.push(r);
            return t.sort(p), r;
          }),
          (r.interpolator = function (t) {
            return arguments.length ? ((e = t), r) : e;
          }),
          (r.range = function () {
            return t.map((r, n) => e(n / (t.length - 1)));
          }),
          (r.quantiles = function (e) {
            return Array.from({ length: e + 1 }, (r, n) => xe(t, n / e));
          }),
          (r.copy = function () {
            return Kn(e).domain(t);
          }),
          Pt.O.apply(r, arguments)
        );
      }
      function Jn() {
        var t,
          e,
          r,
          n,
          o,
          i,
          a,
          u = 0,
          c = 0.5,
          l = 1,
          s = 1,
          f = gt,
          p = !1;
        function h(t) {
          return isNaN((t = +t))
            ? a
            : ((t = 0.5 + ((t = +i(t)) - e) * (s * t < s * e ? n : o)),
              f(p ? Math.max(0, Math.min(1, t)) : t));
        }
        function d(t) {
          return function (e) {
            var r, n, o;
            return arguments.length
              ? (([r, n, o] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = yt));
                  for (
                    var r = 0,
                      n = e.length - 1,
                      o = e[0],
                      i = new Array(n < 0 ? 0 : n);
                    r < n;

                  )
                    i[r] = t(o, (o = e[++r]));
                  return function (t) {
                    var e = Math.max(0, Math.min(n - 1, Math.floor((t *= n))));
                    return i[e](t - e);
                  };
                })(t, [r, n, o])),
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
                (r = i((l = +l))),
                (n = t === e ? 0 : 0.5 / (e - t)),
                (o = e === r ? 0 : 0.5 / (r - e)),
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
              (i = a),
              (t = a(u)),
              (e = a(c)),
              (r = a(l)),
              (n = t === e ? 0 : 0.5 / (e - t)),
              (o = e === r ? 0 : 0.5 / (r - e)),
              (s = e < t ? -1 : 1),
              h
            );
          }
        );
      }
      function Qn() {
        var t = Wt(Jn()(gt));
        return (
          (t.copy = function () {
            return qn(t, Qn());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function to() {
        var t = Qt(Jn()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return qn(t, to()).base(t.base());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function eo() {
        var t = ne(Jn());
        return (
          (t.copy = function () {
            return qn(t, eo()).constant(t.constant());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function ro() {
        var t = le(Jn());
        return (
          (t.copy = function () {
            return qn(t, ro()).exponent(t.exponent());
          }),
          Pt.O.apply(t, arguments)
        );
      }
      function no() {
        return ro.apply(null, arguments).exponent(0.5);
      }
      function oo(t, e) {
        if ((o = t.length) > 1)
          for (var r, n, o, i = 1, a = t[e[0]], u = a.length; i < o; ++i)
            for (n = a, a = t[e[i]], r = 0; r < u; ++r)
              a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
      }
      !(function (t) {
        (br = (function (t) {
          var e = t.dateTime,
            r = t.date,
            n = t.time,
            o = t.periods,
            i = t.days,
            a = t.shortDays,
            u = t.months,
            c = t.shortMonths,
            l = Pr(o),
            s = kr(o),
            f = Pr(i),
            p = kr(i),
            h = Pr(a),
            d = kr(a),
            y = Pr(u),
            v = kr(u),
            m = Pr(c),
            b = kr(c),
            g = {
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
              d: Xr,
              e: Xr,
              f: tn,
              g: pn,
              G: dn,
              H: Yr,
              I: Kr,
              j: Jr,
              L: Qr,
              m: en,
              M: rn,
              p: function (t) {
                return o[+(t.getHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getMonth() / 3);
              },
              Q: Ln,
              s: Rn,
              S: nn,
              u: on,
              U: an,
              V: cn,
              w: ln,
              W: sn,
              x: null,
              X: null,
              y: fn,
              Y: hn,
              Z: yn,
              "%": Bn,
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
              d: vn,
              e: vn,
              f: wn,
              g: Cn,
              G: Dn,
              H: mn,
              I: bn,
              j: gn,
              L: xn,
              m: On,
              M: jn,
              p: function (t) {
                return o[+(t.getUTCHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getUTCMonth() / 3);
              },
              Q: Ln,
              s: Rn,
              S: Sn,
              u: An,
              U: En,
              V: kn,
              w: Mn,
              W: _n,
              x: null,
              X: null,
              y: Tn,
              Y: Nn,
              Z: In,
              "%": Bn,
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
                  ? ((t.m = b.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              B: function (t, e, r) {
                var n = y.exec(e.slice(r));
                return n
                  ? ((t.m = v.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              c: function (t, r, n) {
                return S(t, e, r, n);
              },
              d: zr,
              e: zr,
              f: qr,
              g: Ir,
              G: Dr,
              H: Fr,
              I: Fr,
              j: Ur,
              L: Zr,
              m: Rr,
              M: $r,
              p: function (t, e, r) {
                var n = l.exec(e.slice(r));
                return n
                  ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              q: Lr,
              Q: Hr,
              s: Vr,
              S: Wr,
              u: _r,
              U: Tr,
              V: Cr,
              w: Mr,
              W: Nr,
              x: function (t, e, n) {
                return S(t, r, e, n);
              },
              X: function (t, e, r) {
                return S(t, n, e, r);
              },
              y: Ir,
              Y: Dr,
              Z: Br,
              "%": Gr,
            };
          function O(t, e) {
            return function (r) {
              var n,
                o,
                i,
                a = [],
                u = -1,
                c = 0,
                l = t.length;
              for (r instanceof Date || (r = new Date(+r)); ++u < l; )
                37 === t.charCodeAt(u) &&
                  (a.push(t.slice(c, u)),
                  null != (o = wr[(n = t.charAt(++u))])
                    ? (n = t.charAt(++u))
                    : (o = "e" === n ? " " : "0"),
                  (i = e[n]) && (n = i(r, o)),
                  a.push(n),
                  (c = u + 1));
              return a.push(t.slice(c, u)), a.join("");
            };
          }
          function j(t, e) {
            return function (r) {
              var n,
                o,
                i = mr(1900, void 0, 1);
              if (S(i, t, (r += ""), 0) != r.length) return null;
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
                    ? ((o = (n = vr(mr(i.y, 0, 1))).getUTCDay()),
                      (n = o > 4 || 0 === o ? tr.ceil(n) : tr(n)),
                      (n = $e.offset(n, 7 * (i.V - 1))),
                      (i.y = n.getUTCFullYear()),
                      (i.m = n.getUTCMonth()),
                      (i.d = n.getUTCDate() + ((i.w + 6) % 7)))
                    : ((o = (n = yr(mr(i.y, 0, 1))).getDay()),
                      (n = o > 4 || 0 === o ? Ge.ceil(n) : Ge(n)),
                      (n = Fe.offset(n, 7 * (i.V - 1))),
                      (i.y = n.getFullYear()),
                      (i.m = n.getMonth()),
                      (i.d = n.getDate() + ((i.w + 6) % 7)));
              } else
                ("W" in i || "U" in i) &&
                  ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0),
                  (o =
                    "Z" in i
                      ? vr(mr(i.y, 0, 1)).getUTCDay()
                      : yr(mr(i.y, 0, 1)).getDay()),
                  (i.m = 0),
                  (i.d =
                    "W" in i
                      ? ((i.w + 6) % 7) + 7 * i.W - ((o + 5) % 7)
                      : i.w + 7 * i.U - ((o + 6) % 7)));
              return "Z" in i
                ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), vr(i))
                : yr(i);
            };
          }
          function S(t, e, r, n) {
            for (var o, i, a = 0, u = e.length, c = r.length; a < u; ) {
              if (n >= c) return -1;
              if (37 === (o = e.charCodeAt(a++))) {
                if (
                  ((o = e.charAt(a++)),
                  !(i = w[o in wr ? e.charAt(a++) : o]) || (n = i(t, r, n)) < 0)
                )
                  return -1;
              } else if (o != r.charCodeAt(n++)) return -1;
            }
            return n;
          }
          return (
            (g.x = O(r, g)),
            (g.X = O(n, g)),
            (g.c = O(e, g)),
            (x.x = O(r, x)),
            (x.X = O(n, x)),
            (x.c = O(e, x)),
            {
              format: function (t) {
                var e = O((t += ""), g);
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
          (gr = br.format),
          br.parse,
          (xr = br.utcFormat),
          br.utcParse;
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
      var io = r(70479),
        ao = r(22015);
      function uo(t) {
        for (var e = t.length, r = new Array(e); --e >= 0; ) r[e] = e;
        return r;
      }
      function co(t, e) {
        return t[e];
      }
      function lo(t) {
        const e = [];
        return (e.key = t), e;
      }
      var so = r(24149),
        fo = r.n(so),
        po = r(65793),
        ho = r.n(po),
        yo = r(38716),
        vo = r.n(yo),
        mo = r(8889),
        bo = r.n(mo),
        go = r(30392),
        xo = r.n(go),
        wo = r(18310),
        Oo = r.n(wo),
        jo = r(6392),
        So = r.n(jo),
        Ao = r(98176),
        Eo = r.n(Ao),
        Po = r(70758),
        ko = r.n(Po),
        Mo = r(49198),
        _o = r.n(Mo),
        To = r(2045),
        Co = r.n(To),
        No = r(41721),
        Do = r.n(No);
      function Io(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Bo(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return Bo(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Bo(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Bo(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var Lo = function (t) {
          return t;
        },
        Ro = { "@@functional/placeholder": !0 },
        zo = function (t) {
          return t === Ro;
        },
        Uo = function (t) {
          return function e() {
            return 0 === arguments.length ||
              (1 === arguments.length &&
                zo(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t.apply(void 0, arguments);
          };
        },
        Fo = function t(e, r) {
          return 1 === e
            ? r
            : Uo(function () {
                for (
                  var n = arguments.length, o = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  o[i] = arguments[i];
                var a = o.filter(function (t) {
                  return t !== Ro;
                }).length;
                return a >= e
                  ? r.apply(void 0, o)
                  : t(
                      e - a,
                      Uo(function () {
                        for (
                          var t = arguments.length, e = new Array(t), n = 0;
                          n < t;
                          n++
                        )
                          e[n] = arguments[n];
                        var i = o.map(function (t) {
                          return zo(t) ? e.shift() : t;
                        });
                        return r.apply(void 0, Io(i).concat(e));
                      }),
                    );
              });
        },
        $o = function (t) {
          return Fo(t.length, t);
        },
        Wo = function (t, e) {
          for (var r = [], n = t; n < e; ++n) r[n - t] = n;
          return r;
        },
        Zo = $o(function (t, e) {
          return Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map(function (t) {
                  return e[t];
                })
                .map(t);
        }),
        qo = function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          if (!e.length) return Lo;
          var n = e.reverse(),
            o = n[0],
            i = n.slice(1);
          return function () {
            return i.reduce(
              function (t, e) {
                return e(t);
              },
              o.apply(void 0, arguments),
            );
          };
        },
        Go = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        Ho = function (t) {
          var e = null,
            r = null;
          return function () {
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
              o[i] = arguments[i];
            return e &&
              o.every(function (t, r) {
                return t === e[r];
              })
              ? r
              : ((e = o), (r = t.apply(void 0, o)));
          };
        };
      const Vo = {
        rangeStep: function (t, e, r) {
          for (var n = new (Do())(t), o = 0, i = []; n.lt(e) && o < 1e5; )
            i.push(n.toNumber()), (n = n.add(r)), o++;
          return i;
        },
        getDigitCount: function (t) {
          return 0 === t
            ? 1
            : Math.floor(new (Do())(t).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: $o(function (t, e, r) {
          var n = +t;
          return n + r * (+e - n);
        }),
        uninterpolateNumber: $o(function (t, e, r) {
          var n = e - +t;
          return (r - t) / (n = n || 1 / 0);
        }),
        uninterpolateTruncation: $o(function (t, e, r) {
          var n = e - +t;
          return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - t) / n));
        }),
      };
      function Xo(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Jo(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          Ko(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Yo(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
              return;
            var r = [],
              n = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, u = t[Symbol.iterator]();
                !(n = (a = u.next()).done) &&
                (r.push(a.value), !e || r.length !== e);
                n = !0
              );
            } catch (t) {
              (o = !0), (i = t);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (o) throw i;
              }
            }
            return r;
          })(t, e) ||
          Ko(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Ko(t, e) {
        if (t) {
          if ("string" == typeof t) return Jo(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Jo(t, e)
              : void 0
          );
        }
      }
      function Jo(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function Qo(t) {
        var e = Yo(t, 2),
          r = e[0],
          n = e[1],
          o = r,
          i = n;
        return r > n && ((o = n), (i = r)), [o, i];
      }
      function ti(t, e, r) {
        if (t.lte(0)) return new (Do())(0);
        var n = Vo.getDigitCount(t.toNumber()),
          o = new (Do())(10).pow(n),
          i = t.div(o),
          a = 1 !== n ? 0.05 : 0.1,
          u = new (Do())(Math.ceil(i.div(a).toNumber())).add(r).mul(a).mul(o);
        return e ? u : new (Do())(Math.ceil(u));
      }
      function ei(t, e, r) {
        var n = 1,
          o = new (Do())(t);
        if (!o.isint() && r) {
          var i = Math.abs(t);
          i < 1
            ? ((n = new (Do())(10).pow(Vo.getDigitCount(t) - 1)),
              (o = new (Do())(Math.floor(o.div(n).toNumber())).mul(n)))
            : i > 1 && (o = new (Do())(Math.floor(t)));
        } else
          0 === t
            ? (o = new (Do())(Math.floor((e - 1) / 2)))
            : r || (o = new (Do())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return qo(
          Zo(function (t) {
            return o.add(new (Do())(t - a).mul(n)).toNumber();
          }),
          Wo,
        )(0, e);
      }
      function ri(t, e, r, n) {
        var o =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((e - t) / (r - 1)))
          return {
            step: new (Do())(0),
            tickMin: new (Do())(0),
            tickMax: new (Do())(0),
          };
        var i,
          a = ti(new (Do())(e).sub(t).div(r - 1), n, o);
        i =
          t <= 0 && e >= 0
            ? new (Do())(0)
            : (i = new (Do())(t).add(e).div(2)).sub(new (Do())(i).mod(a));
        var u = Math.ceil(i.sub(t).div(a).toNumber()),
          c = Math.ceil(new (Do())(e).sub(i).div(a).toNumber()),
          l = u + c + 1;
        return l > r
          ? ri(t, e, r, n, o + 1)
          : (l < r &&
              ((c = e > 0 ? c + (r - l) : c), (u = e > 0 ? u : u + (r - l))),
            {
              step: a,
              tickMin: i.sub(new (Do())(u).mul(a)),
              tickMax: i.add(new (Do())(c).mul(a)),
            });
      }
      var ni = Ho(function (t) {
          var e = Yo(t, 2),
            r = e[0],
            n = e[1],
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 6,
            i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = Math.max(o, 2),
            u = Yo(Qo([r, n]), 2),
            c = u[0],
            l = u[1];
          if (c === -1 / 0 || l === 1 / 0) {
            var s =
              l === 1 / 0
                ? [c].concat(
                    Xo(
                      Wo(0, o - 1).map(function () {
                        return 1 / 0;
                      }),
                    ),
                  )
                : [].concat(
                    Xo(
                      Wo(0, o - 1).map(function () {
                        return -1 / 0;
                      }),
                    ),
                    [l],
                  );
            return r > n ? Go(s) : s;
          }
          if (c === l) return ei(c, o, i);
          var f = ri(c, l, a, i),
            p = f.step,
            h = f.tickMin,
            d = f.tickMax,
            y = Vo.rangeStep(h, d.add(new (Do())(0.1).mul(p)), p);
          return r > n ? Go(y) : y;
        }),
        oi =
          (Ho(function (t) {
            var e = Yo(t, 2),
              r = e[0],
              n = e[1],
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 6,
              i =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Math.max(o, 2),
              u = Yo(Qo([r, n]), 2),
              c = u[0],
              l = u[1];
            if (c === -1 / 0 || l === 1 / 0) return [r, n];
            if (c === l) return ei(c, o, i);
            var s = ti(new (Do())(l).sub(c).div(a - 1), i, 0),
              f = qo(
                Zo(function (t) {
                  return new (Do())(c).add(new (Do())(t).mul(s)).toNumber();
                }),
                Wo,
              )(0, a).filter(function (t) {
                return t >= c && t <= l;
              });
            return r > n ? Go(f) : f;
          }),
          Ho(function (t, e) {
            var r = Yo(t, 2),
              n = r[0],
              o = r[1],
              i =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Yo(Qo([n, o]), 2),
              u = a[0],
              c = a[1];
            if (u === -1 / 0 || c === 1 / 0) return [n, o];
            if (u === c) return [u];
            var l = Math.max(e, 2),
              s = ti(new (Do())(c).sub(u).div(l - 1), i, 0),
              f = [].concat(
                Xo(
                  Vo.rangeStep(
                    new (Do())(u),
                    new (Do())(c).sub(new (Do())(0.99).mul(s)),
                    s,
                  ),
                ),
                [c],
              );
            return n > o ? Go(f) : f;
          })),
        ii = r(85458),
        ai = r(76325),
        ui = r(94797),
        ci = r(52255);
      function li(t) {
        return (
          (li =
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
          li(t)
        );
      }
      function si(t, e) {
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
      function fi(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? si(Object(r), !0).forEach(function (e) {
                pi(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : si(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function pi(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== li(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== li(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === li(e) ? e : String(e);
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
      function hi(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return di(t);
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
            if ("string" == typeof t) return di(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return di(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function di(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function yi(t, e, r) {
        return vo()(t) || vo()(e)
          ? r
          : (0, ai.P2)(e)
          ? Oo()(t, e, r)
          : bo()(e)
          ? e(t)
          : r;
      }
      function vi(t, e, r, n) {
        var o = So()(t, function (t) {
          return yi(t, e);
        });
        if ("number" === r) {
          var i = o.filter(function (t) {
            return (0, ai.hj)(t) || parseFloat(t);
          });
          return i.length ? [ho()(i), fo()(i)] : [1 / 0, -1 / 0];
        }
        return (
          n
            ? o.filter(function (t) {
                return !vo()(t);
              })
            : o
        ).map(function (t) {
          return (0, ai.P2)(t) || t instanceof Date ? t : "";
        });
      }
      var mi = function (t) {
          var e,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 ? arguments[3] : void 0,
            i = -1,
            a =
              null !== (e = null == r ? void 0 : r.length) && void 0 !== e
                ? e
                : 0;
          if (a <= 1) return 0;
          if (
            o &&
            "angleAxis" === o.axisType &&
            Math.abs(Math.abs(o.range[1] - o.range[0]) - 360) <= 1e-6
          )
            for (var u = o.range, c = 0; c < a; c++) {
              var l = c > 0 ? n[c - 1].coordinate : n[a - 1].coordinate,
                s = n[c].coordinate,
                f = c >= a - 1 ? n[0].coordinate : n[c + 1].coordinate,
                p = void 0;
              if ((0, ai.uY)(s - l) !== (0, ai.uY)(f - s)) {
                var h = [];
                if ((0, ai.uY)(f - s) === (0, ai.uY)(u[1] - u[0])) {
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
                  i = n[c].index;
                  break;
                }
              } else {
                var m = Math.min(l, f),
                  b = Math.max(l, f);
                if (t > (m + s) / 2 && t <= (b + s) / 2) {
                  i = n[c].index;
                  break;
                }
              }
            }
          else
            for (var g = 0; g < a; g++)
              if (
                (0 === g && t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
                (g > 0 &&
                  g < a - 1 &&
                  t > (r[g].coordinate + r[g - 1].coordinate) / 2 &&
                  t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
                (g === a - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2)
              ) {
                i = r[g].index;
                break;
              }
          return i;
        },
        bi = function (t) {
          var e,
            r = t.type.displayName,
            n = t.props,
            o = n.stroke,
            i = n.fill;
          switch (r) {
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
        gi = function (t) {
          var e = t.barSize,
            r = t.stackGroups,
            n = void 0 === r ? {} : r;
          if (!n) return {};
          for (var o = {}, i = Object.keys(n), a = 0, u = i.length; a < u; a++)
            for (
              var c = n[i[a]].stackGroups,
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
                  return (0, ui.Gf)(t.type).indexOf("Bar") >= 0;
                });
              if (y && y.length) {
                var v = y[0].props.barSize,
                  m = y[0].props[d];
                o[m] || (o[m] = []),
                  o[m].push({
                    item: y[0],
                    stackList: y.slice(1),
                    barSize: vo()(v) ? e : v,
                  });
              }
            }
          return o;
        },
        xi = function (t) {
          var e = t.barGap,
            r = t.barCategoryGap,
            n = t.bandSize,
            o = t.sizeList,
            i = void 0 === o ? [] : o,
            a = t.maxBarSize,
            u = i.length;
          if (u < 1) return null;
          var c,
            l = (0, ai.h1)(e, n, 0, !0),
            s = [];
          if (i[0].barSize === +i[0].barSize) {
            var f = !1,
              p = n / u,
              h = i.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (h += (u - 1) * l) >= n && ((h -= (u - 1) * l), (l = 0)),
              h >= n && p > 0 && ((f = !0), (h = u * (p *= 0.9)));
            var d = { offset: (((n - h) / 2) >> 0) - l, size: 0 };
            c = i.reduce(function (t, e) {
              var r = {
                  item: e.item,
                  position: {
                    offset: d.offset + d.size + l,
                    size: f ? p : e.barSize,
                  },
                },
                n = [].concat(hi(t), [r]);
              return (
                (d = n[n.length - 1].position),
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    n.push({ item: t, position: d });
                  }),
                n
              );
            }, s);
          } else {
            var y = (0, ai.h1)(r, n, 0, !0);
            n - 2 * y - (u - 1) * l <= 0 && (l = 0);
            var v = (n - 2 * y - (u - 1) * l) / u;
            v > 1 && (v >>= 0);
            var m = a === +a ? Math.min(v, a) : v;
            c = i.reduce(function (t, e, r) {
              var n = [].concat(hi(t), [
                {
                  item: e.item,
                  position: { offset: y + (v + l) * r + (v - m) / 2, size: m },
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
            }, s);
          }
          return c;
        },
        wi = function (t, e, r, n) {
          var o = r.children,
            i = r.width,
            a = r.margin,
            u = i - (a.left || 0) - (a.right || 0),
            c = (0, ci.z)({ children: o, legendWidth: u });
          if (c) {
            var l = n || {},
              s = l.width,
              f = l.height,
              p = c.align,
              h = c.verticalAlign,
              d = c.layout;
            if (
              ("vertical" === d || ("horizontal" === d && "middle" === h)) &&
              "center" !== p &&
              (0, ai.hj)(t[p])
            )
              return fi(fi({}, t), {}, pi({}, p, t[p] + (s || 0)));
            if (
              ("horizontal" === d || ("vertical" === d && "center" === p)) &&
              "middle" !== h &&
              (0, ai.hj)(t[h])
            )
              return fi(fi({}, t), {}, pi({}, h, t[h] + (f || 0)));
          }
          return t;
        },
        Oi = function (t, e, r, n, o) {
          var i = e.props.children,
            a = (0, ui.NN)(i, ii.W).filter(function (t) {
              return (function (t, e, r) {
                return (
                  !!vo()(e) ||
                  ("horizontal" === t
                    ? "yAxis" === e
                    : "vertical" === t || "x" === r
                    ? "xAxis" === e
                    : "y" !== r || "yAxis" === e)
                );
              })(n, o, t.props.direction);
            });
          if (a && a.length) {
            var u = a.map(function (t) {
              return t.props.dataKey;
            });
            return t.reduce(
              function (t, e) {
                var n = yi(e, r, 0),
                  o = Array.isArray(n) ? [ho()(n), fo()(n)] : [n, n],
                  i = u.reduce(
                    function (t, r) {
                      var n = yi(e, r, 0),
                        i = o[0] - Math.abs(Array.isArray(n) ? n[0] : n),
                        a = o[1] + Math.abs(Array.isArray(n) ? n[1] : n);
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
        ji = function (t, e, r, n, o) {
          var i = e
            .map(function (e) {
              return Oi(t, e, r, o, n);
            })
            .filter(function (t) {
              return !vo()(t);
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
        Si = function (t, e, r, n, o) {
          var i = e.map(function (e) {
            var i = e.props.dataKey;
            return ("number" === r && i && Oi(t, e, i, n)) || vi(t, i, r, o);
          });
          if ("number" === r)
            return i.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0],
            );
          var a = {};
          return i.reduce(function (t, e) {
            for (var r = 0, n = e.length; r < n; r++)
              a[e[r]] || ((a[e[r]] = !0), t.push(e[r]));
            return t;
          }, []);
        },
        Ai = function (t, e) {
          return (
            ("horizontal" === t && "xAxis" === e) ||
            ("vertical" === t && "yAxis" === e) ||
            ("centric" === t && "angleAxis" === e) ||
            ("radial" === t && "radiusAxis" === e)
          );
        },
        Ei = function (t, e, r, n) {
          if (n)
            return t.map(function (t) {
              return t.coordinate;
            });
          var o,
            i,
            a = t.map(function (t) {
              return (
                t.coordinate === e && (o = !0),
                t.coordinate === r && (i = !0),
                t.coordinate
              );
            });
          return o || a.push(e), i || a.push(r), a;
        },
        Pi = function (t, e, r) {
          if (!t) return null;
          var n = t.scale,
            o = t.duplicateDomain,
            i = t.type,
            a = t.range,
            u = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
            c =
              (e || r) && "category" === i && n.bandwidth
                ? n.bandwidth() / u
                : 0;
          return (
            (c =
              "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2
                ? 2 * (0, ai.uY)(a[0] - a[1]) * c
                : c),
            e && (t.ticks || t.niceTicks)
              ? (t.ticks || t.niceTicks)
                  .map(function (t) {
                    var e = o ? o.indexOf(t) : t;
                    return { coordinate: n(e) + c, value: t, offset: c };
                  })
                  .filter(function (t) {
                    return !Eo()(t.coordinate);
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
                    value: o ? o[t] : t,
                    index: e,
                    offset: c,
                  };
                })
          );
        },
        ki = new WeakMap(),
        Mi = function (t, e) {
          if ("function" != typeof e) return t;
          ki.has(t) || ki.set(t, new WeakMap());
          var r = ki.get(t);
          if (r.has(e)) return r.get(e);
          var n = function () {
            t.apply(void 0, arguments), e.apply(void 0, arguments);
          };
          return r.set(e, n), n;
        },
        _i = function (t, e, r) {
          var i = t.scale,
            a = t.type,
            u = t.layout,
            c = t.axisType;
          if ("auto" === i)
            return "radial" === u && "radiusAxis" === c
              ? { scale: o.Z(), realScaleType: "band" }
              : "radial" === u && "angleAxis" === c
              ? { scale: Zt(), realScaleType: "linear" }
              : "category" === a &&
                e &&
                (e.indexOf("LineChart") >= 0 ||
                  e.indexOf("AreaChart") >= 0 ||
                  (e.indexOf("ComposedChart") >= 0 && !r))
              ? { scale: o.x(), realScaleType: "point" }
              : "category" === a
              ? { scale: o.Z(), realScaleType: "band" }
              : { scale: Zt(), realScaleType: "linear" };
          if (xo()(i)) {
            var l = "scale".concat(ko()(i));
            return {
              scale: (n[l] || o.x)(),
              realScaleType: n[l] ? l : "point",
            };
          }
          return bo()(i)
            ? { scale: i }
            : { scale: o.x(), realScaleType: "point" };
        },
        Ti = 1e-4,
        Ci = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var r = e.length,
              n = t.range(),
              o = Math.min(n[0], n[1]) - Ti,
              i = Math.max(n[0], n[1]) + Ti,
              a = t(e[0]),
              u = t(e[r - 1]);
            (a < o || a > i || u < o || u > i) && t.domain([e[0], e[r - 1]]);
          }
        },
        Ni = function (t, e) {
          if (!t) return null;
          for (var r = 0, n = t.length; r < n; r++)
            if (t[r].item === e) return t[r].position;
          return null;
        },
        Di = function (t, e) {
          if (!e || 2 !== e.length || !(0, ai.hj)(e[0]) || !(0, ai.hj)(e[1]))
            return t;
          var r = Math.min(e[0], e[1]),
            n = Math.max(e[0], e[1]),
            o = [t[0], t[1]];
          return (
            (!(0, ai.hj)(t[0]) || t[0] < r) && (o[0] = r),
            (!(0, ai.hj)(t[1]) || t[1] > n) && (o[1] = n),
            o[0] > n && (o[0] = n),
            o[1] < r && (o[1] = r),
            o
          );
        },
        Ii = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var o = 0, i = 0, a = 0; a < e; ++a) {
                  var u = Eo()(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                  u >= 0
                    ? ((t[a][r][0] = o), (t[a][r][1] = o + u), (o = t[a][r][1]))
                    : ((t[a][r][0] = i),
                      (t[a][r][1] = i + u),
                      (i = t[a][r][1]));
                }
          },
          expand: function (t, e) {
            if ((n = t.length) > 0) {
              for (var r, n, o, i = 0, a = t[0].length; i < a; ++i) {
                for (o = r = 0; r < n; ++r) o += t[r][i][1] || 0;
                if (o) for (r = 0; r < n; ++r) t[r][i][1] /= o;
              }
              oo(t, e);
            }
          },
          none: oo,
          silhouette: function (t, e) {
            if ((r = t.length) > 0) {
              for (var r, n = 0, o = t[e[0]], i = o.length; n < i; ++n) {
                for (var a = 0, u = 0; a < r; ++a) u += t[a][n][1] || 0;
                o[n][1] += o[n][0] = -u / 2;
              }
              oo(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((o = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
              for (var r, n, o, i = 0, a = 1; a < n; ++a) {
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
                (r[a - 1][1] += r[a - 1][0] = i), c && (i -= l / c);
              }
              (r[a - 1][1] += r[a - 1][0] = i), oo(t, e);
            }
          },
          positive: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var o = 0, i = 0; i < e; ++i) {
                  var a = Eo()(t[i][r][1]) ? t[i][r][0] : t[i][r][1];
                  a >= 0
                    ? ((t[i][r][0] = o), (t[i][r][1] = o + a), (o = t[i][r][1]))
                    : ((t[i][r][0] = 0), (t[i][r][1] = 0));
                }
          },
        },
        Bi = function (t, e, r) {
          var n = e.map(function (t) {
              return t.props.dataKey;
            }),
            o = Ii[r],
            i = (function () {
              var t = (0, ao.Z)([]),
                e = uo,
                r = oo,
                n = co;
              function o(o) {
                var i,
                  a,
                  u = Array.from(t.apply(this, arguments), lo),
                  c = u.length,
                  l = -1;
                for (const t of o)
                  for (i = 0, ++l; i < c; ++i)
                    (u[i][l] = [0, +n(t, u[i].key, l, o)]).data = t;
                for (i = 0, a = (0, io.Z)(e(u)); i < c; ++i) u[a[i]].index = i;
                return r(u, a), u;
              }
              return (
                (o.keys = function (e) {
                  return arguments.length
                    ? ((t =
                        "function" == typeof e ? e : (0, ao.Z)(Array.from(e))),
                      o)
                    : t;
                }),
                (o.value = function (t) {
                  return arguments.length
                    ? ((n = "function" == typeof t ? t : (0, ao.Z)(+t)), o)
                    : n;
                }),
                (o.order = function (t) {
                  return arguments.length
                    ? ((e =
                        null == t
                          ? uo
                          : "function" == typeof t
                          ? t
                          : (0, ao.Z)(Array.from(t))),
                      o)
                    : e;
                }),
                (o.offset = function (t) {
                  return arguments.length ? ((r = null == t ? oo : t), o) : r;
                }),
                o
              );
            })()
              .keys(n)
              .value(function (t, e) {
                return +yi(t, e, 0);
              })
              .order(uo)
              .offset(o);
          return i(t);
        },
        Li = function (t, e, r, n, o, i) {
          if (!t) return null;
          var a = (i ? e.reverse() : e).reduce(function (t, e) {
            var o = e.props,
              i = o.stackId;
            if (o.hide) return t;
            var a = e.props[r],
              u = t[a] || { hasStack: !1, stackGroups: {} };
            if ((0, ai.P2)(i)) {
              var c = u.stackGroups[i] || {
                numericAxisId: r,
                cateAxisId: n,
                items: [],
              };
              c.items.push(e), (u.hasStack = !0), (u.stackGroups[i] = c);
            } else
              u.stackGroups[(0, ai.EL)("_stackId_")] = {
                numericAxisId: r,
                cateAxisId: n,
                items: [e],
              };
            return fi(fi({}, t), {}, pi({}, a, u));
          }, {});
          return Object.keys(a).reduce(function (e, i) {
            var u = a[i];
            if (u.hasStack) {
              u.stackGroups = Object.keys(u.stackGroups).reduce(function (
                e,
                i,
              ) {
                var a = u.stackGroups[i];
                return fi(
                  fi({}, e),
                  {},
                  pi({}, i, {
                    numericAxisId: r,
                    cateAxisId: n,
                    items: a.items,
                    stackedData: Bi(t, a.items, o),
                  }),
                );
              }, {});
            }
            return fi(fi({}, e), {}, pi({}, i, u));
          }, {});
        },
        Ri = function (t, e) {
          var r = e.realScaleType,
            n = e.type,
            o = e.tickCount,
            i = e.originalDomain,
            a = e.allowDecimals,
            u = r || e.scale;
          if ("auto" !== u && "linear" !== u) return null;
          if (
            o &&
            "number" === n &&
            i &&
            ("auto" === i[0] || "auto" === i[1])
          ) {
            var c = t.domain();
            if (!c.length) return null;
            var l = ni(c, o, a);
            return t.domain([ho()(l), fo()(l)]), { niceTicks: l };
          }
          if (o && "number" === n) {
            var s = t.domain();
            return { niceTicks: oi(s, o, a) };
          }
          return null;
        },
        zi = function (t) {
          var e = t.axis,
            r = t.ticks,
            n = t.bandSize,
            o = t.entry,
            i = t.index,
            a = t.dataKey;
          if ("category" === e.type) {
            if (
              !e.allowDuplicatedCategory &&
              e.dataKey &&
              !vo()(o[e.dataKey])
            ) {
              var u = (0, ai.Ap)(r, "value", o[e.dataKey]);
              if (u) return u.coordinate + n / 2;
            }
            return r[i] ? r[i].coordinate + n / 2 : null;
          }
          var c = yi(o, vo()(a) ? e.dataKey : a);
          return vo()(c) ? null : e.scale(c);
        },
        Ui = function (t) {
          var e = t.axis,
            r = t.ticks,
            n = t.offset,
            o = t.bandSize,
            i = t.entry,
            a = t.index;
          if ("category" === e.type) return r[a] ? r[a].coordinate + n : null;
          var u = yi(i, e.dataKey, e.domain[a]);
          return vo()(u) ? null : e.scale(u) - o / 2 + n;
        },
        Fi = function (t) {
          var e = t.numericAxis,
            r = e.scale.domain();
          if ("number" === e.type) {
            var n = Math.min(r[0], r[1]),
              o = Math.max(r[0], r[1]);
            return n <= 0 && o >= 0 ? 0 : o < 0 ? o : n;
          }
          return r[0];
        },
        $i = function (t, e) {
          var r = t.props.stackId;
          if ((0, ai.P2)(r)) {
            var n = e[r];
            if (n) {
              var o = n.items.indexOf(t);
              return o >= 0 ? n.stackedData[o] : null;
            }
          }
          return null;
        },
        Wi = function (t, e, r) {
          return Object.keys(t)
            .reduce(
              function (n, o) {
                var i = t[o].stackedData.reduce(
                  function (t, n) {
                    var o = n.slice(e, r + 1).reduce(
                      function (t, e) {
                        return [
                          ho()(e.concat([t[0]]).filter(ai.hj)),
                          fo()(e.concat([t[1]]).filter(ai.hj)),
                        ];
                      },
                      [1 / 0, -1 / 0],
                    );
                    return [Math.min(t[0], o[0]), Math.max(t[1], o[1])];
                  },
                  [1 / 0, -1 / 0],
                );
                return [Math.min(i[0], n[0]), Math.max(i[1], n[1])];
              },
              [1 / 0, -1 / 0],
            )
            .map(function (t) {
              return t === 1 / 0 || t === -1 / 0 ? 0 : t;
            });
        },
        Zi = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        qi = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        Gi = function (t, e, r) {
          if (bo()(t)) return t(e, r);
          if (!Array.isArray(t)) return e;
          var n = [];
          if ((0, ai.hj)(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
          else if (Zi.test(t[0])) {
            var o = +Zi.exec(t[0])[1];
            n[0] = e[0] - o;
          } else bo()(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
          if ((0, ai.hj)(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
          else if (qi.test(t[1])) {
            var i = +qi.exec(t[1])[1];
            n[1] = e[1] + i;
          } else bo()(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
          return n;
        },
        Hi = function (t, e, r) {
          if (t && t.scale && t.scale.bandwidth) {
            var n = t.scale.bandwidth();
            if (!r || n > 0) return n;
          }
          if (t && e && e.length >= 2) {
            for (
              var o = Co()(e, function (t) {
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
          return r ? void 0 : 0;
        },
        Vi = function (t, e, r) {
          return t && t.length
            ? _o()(t, Oo()(r, "type.defaultProps.domain"))
              ? e
              : t
            : e;
        },
        Xi = function (t, e) {
          var r = t.props,
            n = r.dataKey,
            o = r.name,
            i = r.unit,
            a = r.formatter,
            u = r.tooltipType,
            c = r.chartType;
          return fi(
            fi({}, (0, ui.L6)(t)),
            {},
            {
              dataKey: n,
              unit: i,
              formatter: a,
              name: o || n,
              color: bi(t),
              value: yi(e, n),
              type: u,
              payload: e,
              chartType: c,
            },
          );
        };
    },
    12605: (t, e, r) => {
      "use strict";
      r.d(e, { os: () => p, xE: () => f });
      var n = r(77125);
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
            ? i(Object(r), !0).forEach(function (e) {
                u(t, e, r[e]);
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
      function u(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== o(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== o(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === o(e) ? e : String(e);
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
          if (null == t || n.x.isSsr) return { width: 0, height: 0 };
          var r,
            o =
              ((r = a({}, e)),
              Object.keys(r).forEach(function (t) {
                r[t] || delete r[t];
              }),
              r),
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
    76325: (t, e, r) => {
      "use strict";
      r.d(e, {
        Ap: () => w,
        EL: () => v,
        Kt: () => b,
        P2: () => d,
        bv: () => g,
        h1: () => m,
        hU: () => p,
        hj: () => h,
        k4: () => x,
        uY: () => f,
        wr: () => O,
      });
      var n = r(30392),
        o = r.n(n),
        i = r(98176),
        a = r.n(i),
        u = r(18310),
        c = r.n(u),
        l = r(554),
        s = r.n(l),
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
          var r,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!h(t) && !o()(t)) return n;
          if (p(t)) {
            var u = t.indexOf("%");
            r = (e * parseFloat(t.slice(0, u))) / 100;
          } else r = +t;
          return a()(r) && (r = n), i && r > e && (r = e), r;
        },
        b = function (t) {
          if (!t) return null;
          var e = Object.keys(t);
          return e && e.length ? t[e[0]] : null;
        },
        g = function (t) {
          if (!Array.isArray(t)) return !1;
          for (var e = t.length, r = {}, n = 0; n < e; n++) {
            if (r[t[n]]) return !0;
            r[t[n]] = !0;
          }
          return !1;
        },
        x = function (t, e) {
          return h(t) && h(e)
            ? function (r) {
                return t + r * (e - t);
              }
            : function () {
                return e;
              };
        };
      function w(t, e, r) {
        return t && t.length
          ? t.find(function (t) {
              return t && ("function" == typeof e ? e(t) : c()(t, e)) === r;
            })
          : null;
      }
      var O = function (t) {
        if (!t || !t.length) return null;
        for (
          var e = t.length,
            r = 0,
            n = 0,
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
          (r += c = t[s].cx || 0),
            (n += l = t[s].cy || 0),
            (o += c * l),
            (i += c * c),
            (a = Math.min(a, c)),
            (u = Math.max(u, c));
        var f = e * i != r * r ? (e * o - r * n) / (e * i - r * r) : 0;
        return { xmin: a, xmax: u, a: f, b: (n - f * r) / e };
      };
    },
    77125: (t, e, r) => {
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
    75658: (t, e, r) => {
      "use strict";
      r.d(e, { B: () => n });
      var n = function (t, e) {
        var r = t.alwaysShow,
          n = t.ifOverflow;
        return r && (n = "extendDomain"), n === e;
      };
    },
    90481: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      var n = function (t, e) {
        for (
          var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2;
          o < r;
          o++
        )
          n[o - 2] = arguments[o];
      };
    },
    53460: (t, e, r) => {
      "use strict";
      r.d(e, {
        $4: () => v,
        Wk: () => h,
        op: () => y,
        t9: () => m,
        z3: () => x,
      });
      var n = r(38716),
        o = r.n(n),
        i = r(76325),
        a = r(70416);
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
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(r), !0).forEach(function (e) {
                s(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function s(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== u(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== u(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === u(e) ? e : String(e);
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
      function f(t, e) {
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
                o,
                i,
                a,
                u = [],
                c = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== e);
                    c = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !c &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var h = Math.PI / 180,
        d = function (t) {
          return (180 * t) / Math.PI;
        },
        y = function (t, e, r, n) {
          return { x: t + Math.cos(-h * n) * r, y: e + Math.sin(-h * n) * r };
        },
        v = function (t, e) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { top: 0, right: 0, bottom: 0, left: 0 };
          return (
            Math.min(
              Math.abs(t - (r.left || 0) - (r.right || 0)),
              Math.abs(e - (r.top || 0) - (r.bottom || 0)),
            ) / 2
          );
        },
        m = function (t, e, r, n, u) {
          var c = t.width,
            p = t.height,
            h = t.startAngle,
            d = t.endAngle,
            y = (0, i.h1)(t.cx, c, c / 2),
            m = (0, i.h1)(t.cy, p, p / 2),
            b = v(c, p, r),
            g = (0, i.h1)(t.innerRadius, b, 0),
            x = (0, i.h1)(t.outerRadius, b, 0.8 * b);
          return Object.keys(e).reduce(function (t, r) {
            var i,
              c = e[r],
              p = c.domain,
              v = c.reversed;
            if (o()(c.range))
              "angleAxis" === n
                ? (i = [h, d])
                : "radiusAxis" === n && (i = [g, x]),
                v && (i = [i[1], i[0]]);
            else {
              var b = f((i = c.range), 2);
              (h = b[0]), (d = b[1]);
            }
            var w = (0, a.Hq)(c, u),
              O = w.realScaleType,
              j = w.scale;
            j.domain(p).range(i), (0, a.zF)(j);
            var S = (0, a.g$)(j, l(l({}, c), {}, { realScaleType: O })),
              A = l(
                l(l({}, c), S),
                {},
                {
                  range: i,
                  radius: x,
                  realScaleType: O,
                  scale: j,
                  cx: y,
                  cy: m,
                  innerRadius: g,
                  outerRadius: x,
                  startAngle: h,
                  endAngle: d,
                },
              );
            return l(l({}, t), {}, s({}, r, A));
          }, {});
        },
        b = function (t, e) {
          var r,
            n,
            o,
            i,
            a,
            u,
            c = t.x,
            l = t.y,
            s = e.cx,
            f = e.cy,
            p =
              ((n = { x: s, y: f }),
              (o = (r = { x: c, y: l }).x),
              (i = r.y),
              (a = n.x),
              (u = n.y),
              Math.sqrt(Math.pow(o - a, 2) + Math.pow(i - u, 2)));
          if (p <= 0) return { radius: p };
          var h = (c - s) / p,
            y = Math.acos(h);
          return (
            l > f && (y = 2 * Math.PI - y),
            { radius: p, angle: d(y), angleInRadian: y }
          );
        },
        g = function (t, e) {
          var r = e.startAngle,
            n = e.endAngle,
            o = Math.floor(r / 360),
            i = Math.floor(n / 360);
          return t + 360 * Math.min(o, i);
        },
        x = function (t, e) {
          var r = t.x,
            n = t.y,
            o = b({ x: r, y: n }, e),
            i = o.radius,
            a = o.angle,
            u = e.innerRadius,
            c = e.outerRadius;
          if (i < u || i > c) return !1;
          if (0 === i) return !0;
          var s,
            f = (function (t) {
              var e = t.startAngle,
                r = t.endAngle,
                n = Math.floor(e / 360),
                o = Math.floor(r / 360),
                i = Math.min(n, o);
              return { startAngle: e - 360 * i, endAngle: r - 360 * i };
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
          return s ? l(l({}, e), {}, { radius: i, angle: g(d, e) }) : null;
        };
    },
    94797: (t, e, r) => {
      "use strict";
      r.d(e, {
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
      var n = r(18310),
        o = r.n(n),
        i = r(38716),
        a = r.n(i),
        u = r(30392),
        c = r.n(u),
        l = r(8889),
        s = r.n(l),
        f = r(60486),
        p = r.n(f),
        h = r(47427),
        d = r(5502),
        y = r(76325),
        v = r(31917),
        m = r(81156),
        b = ["children"],
        g = ["children"];
      function x(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
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
        j = function (t) {
          return "string" == typeof t
            ? t
            : t
            ? t.displayName || t.name || "Component"
            : "";
        },
        S = null,
        A = null,
        E = function t(e) {
          if (e === S && Array.isArray(A)) return A;
          var r = [];
          return (
            h.Children.forEach(e, function (e) {
              a()(e) ||
                ((0, d.isFragment)(e)
                  ? (r = r.concat(t(e.props.children)))
                  : r.push(e));
            }),
            (A = r),
            (S = e),
            r
          );
        };
      function P(t, e) {
        var r = [],
          n = [];
        return (
          (n = Array.isArray(e)
            ? e.map(function (t) {
                return j(t);
              })
            : [j(e)]),
          E(t).forEach(function (t) {
            var e = o()(t, "type.displayName") || o()(t, "type.name");
            -1 !== n.indexOf(e) && r.push(t);
          }),
          r
        );
      }
      function k(t, e) {
        var r = P(t, e);
        return r && r[0];
      }
      var M = function (t) {
          if (!t || !t.props) return !1;
          var e = t.props,
            r = e.width,
            n = e.height;
          return !(!(0, y.hj)(r) || r <= 0 || !(0, y.hj)(n) || n <= 0);
        },
        _ = [
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
        T = function (t) {
          return t && t.type && c()(t.type) && _.indexOf(t.type) >= 0;
        },
        C = function (t) {
          return t && "object" === w(t) && "cx" in t && "cy" in t && "r" in t;
        },
        N = function (t, e, r) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var n = t;
          if (((0, h.isValidElement)(t) && (n = t.props), !p()(n))) return null;
          var o = {};
          return (
            Object.keys(n).forEach(function (t) {
              var i;
              (function (t, e, r, n) {
                var o,
                  i =
                    null !==
                      (o =
                        null === m.ry || void 0 === m.ry ? void 0 : m.ry[n]) &&
                    void 0 !== o
                      ? o
                      : [];
                return (
                  (!s()(t) && ((n && i.includes(e)) || m.Yh.includes(e))) ||
                  (r && m.nv.includes(e))
                );
              })(null === (i = n) || void 0 === i ? void 0 : i[t], t, e, r) &&
                (o[t] = n[t]);
            }),
            o
          );
        },
        D = function t(e, r) {
          if (e === r) return !0;
          var n = h.Children.count(e);
          if (n !== h.Children.count(r)) return !1;
          if (0 === n) return !0;
          if (1 === n)
            return I(Array.isArray(e) ? e[0] : e, Array.isArray(r) ? r[0] : r);
          for (var o = 0; o < n; o++) {
            var i = e[o],
              a = r[o];
            if (Array.isArray(i) || Array.isArray(a)) {
              if (!t(i, a)) return !1;
            } else if (!I(i, a)) return !1;
          }
          return !0;
        },
        I = function (t, e) {
          if (a()(t) && a()(e)) return !0;
          if (!a()(t) && !a()(e)) {
            var r = t.props || {},
              n = r.children,
              o = x(r, b),
              i = e.props || {},
              u = i.children,
              c = x(i, g);
            return n && u
              ? (0, v.w)(o, c) && D(n, u)
              : !n && !u && (0, v.w)(o, c);
          }
          return !1;
        },
        B = function (t, e) {
          var r = [],
            n = {};
          return (
            E(t).forEach(function (t, o) {
              if (T(t)) r.push(t);
              else if (t) {
                var i = j(t.type),
                  a = e[i] || {},
                  u = a.handler,
                  c = a.once;
                if (u && (!c || !n[i])) {
                  var l = u(t, i, o);
                  r.push(l), (n[i] = !0);
                }
              }
            }),
            r
          );
        },
        L = function (t) {
          var e = t && t.type;
          return e && O[e] ? O[e] : null;
        },
        R = function (t, e) {
          return E(e).indexOf(t);
        };
    },
    31917: (t, e, r) => {
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
    52255: (t, e, r) => {
      "use strict";
      r.d(e, { z: () => s });
      var n = r(88579),
        o = r(70416),
        i = r(94797);
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
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(r), !0).forEach(function (e) {
                l(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function l(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== a(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== a(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === a(e) ? e : String(e);
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
      var s = function (t) {
        var e,
          r = t.children,
          a = t.formattedGraphicalItems,
          u = t.legendWidth,
          l = t.legendContent,
          s = (0, i.sP)(r, n.D);
        return s
          ? ((e =
              s.props && s.props.payload
                ? s.props && s.props.payload
                : "children" === l
                ? (a || []).reduce(function (t, e) {
                    var r = e.item,
                      n = e.props,
                      o = n.sectors || n.data || [];
                    return t.concat(
                      o.map(function (t) {
                        return {
                          type: s.props.iconType || r.props.legendType,
                          value: t.name,
                          color: t.fill,
                          payload: t,
                        };
                      }),
                    );
                  }, [])
                : (a || []).map(function (t) {
                    var e = t.item,
                      r = e.props,
                      n = r.dataKey,
                      i = r.name,
                      a = r.legendType;
                    return {
                      inactive: r.hide,
                      dataKey: n,
                      type: s.props.iconType || a || "square",
                      color: (0, o.fk)(e),
                      value: i || n,
                      payload: e.props,
                    };
                  })),
            c(
              c(c({}, s.props), n.D.getWithHeight(s, u)),
              {},
              { payload: e, item: s },
            ))
          : null;
      };
    },
    60674: (t, e, r) => {
      "use strict";
      r.d(e, { z: () => u });
      var n = r(87518),
        o = r.n(n),
        i = r(8889),
        a = r.n(i);
      function u(t, e, r) {
        return !0 === e ? o()(t, r) : a()(e) ? o()(t, e) : t;
      }
    },
    81156: (t, e, r) => {
      "use strict";
      r.d(e, {
        Yh: () => u,
        Ym: () => f,
        bw: () => p,
        nv: () => s,
        ry: () => l,
      });
      var n = r(47427),
        o = r(60486),
        i = r.n(o);
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
          if (((0, n.isValidElement)(t) && (r = t.props), !i()(r))) return null;
          var o = {};
          return (
            Object.keys(r).forEach(function (t) {
              s.includes(t) &&
                (o[t] =
                  e ||
                  function (e) {
                    return r[t](r, e);
                  });
            }),
            o
          );
        },
        p = function (t, e, r) {
          if (!i()(t) || "object" !== a(t)) return null;
          var n = null;
          return (
            Object.keys(t).forEach(function (o) {
              var i = t[o];
              s.includes(o) &&
                "function" == typeof i &&
                (n || (n = {}),
                (n[o] = (function (t, e, r) {
                  return function (n) {
                    return t(e, r, n), null;
                  };
                })(i, e, r)));
            }),
            n
          );
        };
    },
    22025: (t, e) => {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        u = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        s = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        y = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        m = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        g = r ? Symbol.for("react.responder") : 60118,
        x = r ? Symbol.for("react.scope") : 60119;
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
            case n:
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
        return "object" == typeof t && null !== t && t.$$typeof === n;
      }),
        (e.isFragment = function (t) {
          return w(t) === i;
        });
    },
    5502: (t, e, r) => {
      "use strict";
      t.exports = r(22025);
    },
    32224: (t) => {
      (t.exports = function (t) {
        return t && t.__esModule ? t : { default: t };
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    84148: (t, e, r) => {
      "use strict";
      function n(t) {
        var e,
          r,
          o = "";
        if ("string" == typeof t || "number" == typeof t) o += t;
        else if ("object" == typeof t)
          if (Array.isArray(t))
            for (e = 0; e < t.length; e++)
              t[e] && (r = n(t[e])) && (o && (o += " "), (o += r));
          else for (e in t) t[e] && (o && (o += " "), (o += e));
        return o;
      }
      r.d(e, { Z: () => o });
      const o = function () {
        for (var t, e, r = 0, o = ""; r < arguments.length; )
          (t = arguments[r++]) && (e = n(t)) && (o && (o += " "), (o += e));
        return o;
      };
    },
    9756: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => i, x: () => u });
      var n = r(80560),
        o = r(54328);
      function i() {
        var t,
          e,
          r = (0, o.Z)().unknown(void 0),
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
            o = n ? l : c,
            i = n ? c : l;
          (t = (i - o) / Math.max(1, r - f + 2 * p)),
            s && (t = Math.floor(t)),
            (o += (i - o - t * (r - f)) * h),
            (e = t * (1 - f)),
            s && ((o = Math.round(o)), (e = Math.round(e)));
          var d = (function (t, e, r) {
            (t = +t),
              (e = +e),
              (r =
                (o = arguments.length) < 2
                  ? ((e = t), (t = 0), 1)
                  : o < 3
                  ? 1
                  : +r);
            for (
              var n = -1,
                o = 0 | Math.max(0, Math.ceil((e - t) / r)),
                i = new Array(o);
              ++n < o;

            )
              i[n] = t + n * r;
            return i;
          })(r).map(function (e) {
            return o + t * e;
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
            return i(a(), [c, l])
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
        return a(i.apply(null, arguments).paddingInner(1));
      }
    },
    80560: (t, e, r) => {
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
      r.d(e, { O: () => o, o: () => n });
    },
    54328: (t, e, r) => {
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
      function o({ _intern: t, _key: e }, r) {
        const n = e(r);
        return t.has(n) ? t.get(n) : r;
      }
      function i({ _intern: t, _key: e }, r) {
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
      var c = r(80560);
      const l = Symbol("implicit");
      function s() {
        var t = new n(),
          e = [],
          r = [],
          o = l;
        function i(n) {
          let i = t.get(n);
          if (void 0 === i) {
            if (o !== l) return o;
            t.set(n, (i = e.push(n) - 1));
          }
          return r[i % r.length];
        }
        return (
          (i.domain = function (r) {
            if (!arguments.length) return e.slice();
            (e = []), (t = new n());
            for (const n of r) t.has(n) || t.set(n, e.push(n) - 1);
            return i;
          }),
          (i.range = function (t) {
            return arguments.length ? ((r = Array.from(t)), i) : r.slice();
          }),
          (i.unknown = function (t) {
            return arguments.length ? ((o = t), i) : o;
          }),
          (i.copy = function () {
            return s(e, r).unknown(o);
          }),
          c.o.apply(i, arguments),
          i
        );
      }
    },
    70479: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => n });
      Array.prototype.slice;
      function n(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
    },
    22015: (t, e, r) => {
      "use strict";
      function n(t) {
        return function () {
          return t;
        };
      }
      r.d(e, { Z: () => n });
    },
    79221: (t, e, r) => {
      "use strict";
      r.d(e, { d: () => l });
      const n = Math.PI,
        o = 2 * n,
        i = 1e-6,
        a = o - i;
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
        bezierCurveTo(t, e, r, n, o, i) {
          this._append`C${+t},${+e},${+r},${+n},${(this._x1 = +o)},${(this._y1 =
            +i)}`;
        }
        arcTo(t, e, r, o, a) {
          if (((t = +t), (e = +e), (r = +r), (o = +o), (a = +a) < 0))
            throw new Error(`negative radius: ${a}`);
          let u = this._x1,
            c = this._y1,
            l = r - t,
            s = o - e,
            f = u - t,
            p = c - e,
            h = f * f + p * p;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
          else if (h > i)
            if (Math.abs(p * l - s * f) > i && a) {
              let d = r - u,
                y = o - c,
                v = l * l + s * s,
                m = d * d + y * y,
                b = Math.sqrt(v),
                g = Math.sqrt(h),
                x =
                  a * Math.tan((n - Math.acos((v + h - m) / (2 * b * g))) / 2),
                w = x / g,
                O = x / b;
              Math.abs(w - 1) > i && this._append`L${t + w * f},${e + w * p}`,
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
            : (Math.abs(this._x1 - p) > i || Math.abs(this._y1 - h) > i) &&
              this._append`L${p},${h}`,
            r &&
              (y < 0 && (y = (y % o) + o),
              y > a
                ? this._append`A${r},${r},0,1,${d},${t - s},${
                    e - f
                  }A${r},${r},0,1,${d},${(this._x1 = p)},${(this._y1 = h)}`
                : y > i &&
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

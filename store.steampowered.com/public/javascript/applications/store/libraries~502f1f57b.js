/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9790],
  {
    14469: function (t, e, r) {
      var n; /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */
      !(function (o) {
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
          y = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          d = 1e7,
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
            (r = ((l[--i] = l[i] + s[i] + r) / d) | 0), (l[i] %= d);
          for (r && (l.unshift(r), ++o), u = l.length; 0 == l[--u]; ) l.pop();
          return (e.d = l), (e.e = o), c ? T(e, p) : e;
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
              (n = t[e] + ""), (r = v - n.length) && (i += E(r)), (i += n);
            (a = t[e]), (r = v - (n = a + "").length) && (i += E(r));
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
              return T(j(this, new e(t), 0, 1), e.precision);
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
                : ((c = !1), (e = j(k(r, a), k(t, a), a)), (c = !0), T(e, o));
            }),
          (g.minus = g.sub =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? _(e, t) : x(e, ((t.s = -t.s), t))
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
                : T(new n(r), o);
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
                e.s == t.s ? x(e, t) : _(e, ((t.s = -t.s), t))
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
                    if ((T(i, r + 1, 0), i.times(i).eq(u))) {
                      n = i;
                      break;
                    }
                  } else if ("9999" != e) break;
                  a += 4;
                }
              return (c = !0), T(n, r);
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
                y = (t = new p(t)).d;
              if (!f.s || !t.s) return new p(0);
              for (
                t.s *= f.s,
                  r = f.e + t.e,
                  (l = h.length) < (s = y.length) &&
                    ((i = h), (h = y), (y = i), (a = l), (l = s), (s = a)),
                  i = [],
                  n = a = l + s;
                n--;
              )
                i.push(0);
              for (n = s; --n >= 0; ) {
                for (e = 0, o = l + n; o > n; )
                  (u = i[o] + y[n] * h[o - n - 1] + e),
                    (i[o--] = (u % d) | 0),
                    (e = (u / d) | 0);
                i[o] = ((i[o] + e) % d) | 0;
              }
              for (; !i[--a]; ) i.pop();
              return (
                e ? ++r : i.shift(),
                (t.d = i),
                (t.e = r),
                c ? T(t, p.precision) : t
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
                    T(r, t + A(r) + 1, e))
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
                  (r = C((n = T(new o(n), t + 1, e)), !0, t + 1))),
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
                  (n = T(new i(o), t + A(o) + 1, e)).abs(),
                  !1,
                  t + A(n) + 1,
                )),
                o.isneg() && !o.isZero() ? "-" + r : r);
          }),
          (g.toInteger = g.toint =
            function () {
              var t = this,
                e = t.constructor;
              return T(new e(t), A(t) + 1, e.rounding);
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
              if (((n = f.precision), t.eq(i))) return T(s, n);
              if (((u = (e = t.e) >= (r = t.d.length - 1)), (a = s.s), u)) {
                if ((r = h < 0 ? -h : h) <= m) {
                  for (
                    o = new f(i), e = Math.ceil(n / v + 4), c = !1;
                    r % 2 && D((o = o.times(s)).d, e), 0 !== (r = p(r / 2));
                  )
                    D((s = s.times(s)).d, e);
                  return (c = !0), t.s < 0 ? new f(i).div(o) : T(o, n);
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
                    (o = T(new i(o), t, e)),
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
                T(new r(this), t, e)
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
              (r = t[o] * e + n), (t[o] = (r % d) | 0), (n = (r / d) | 0);
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
                (t[r] = n * d + t[r] - e[r]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (n, o, i, a) {
            var u,
              c,
              s,
              f,
              p,
              h,
              y,
              m,
              b,
              g,
              x,
              w,
              O,
              j,
              S,
              P,
              E,
              k,
              M = n.constructor,
              _ = n.s == o.s ? 1 : -1,
              C = n.d,
              D = o.d;
            if (!n.s) return new M(n);
            if (!o.s) throw Error(l + "Division by zero");
            for (
              c = n.e - o.e,
                E = D.length,
                S = C.length,
                m = (y = new M(_)).d = [],
                s = 0;
              D[s] == (C[s] || 0);
            )
              ++s;
            if (
              (D[s] > (C[s] || 0) && --c,
              (w =
                null == i ? (i = M.precision) : a ? i + (A(n) - A(o)) + 1 : i) <
                0)
            )
              return new M(0);
            if (((w = (w / v + 2) | 0), (s = 0), 1 == E))
              for (f = 0, D = D[0], w++; (s < S || f) && w--; s++)
                (O = f * d + (C[s] || 0)),
                  (m[s] = (O / D) | 0),
                  (f = (O % D) | 0);
            else {
              for (
                (f = (d / (D[0] + 1)) | 0) > 1 &&
                  ((D = t(D, f)),
                  (C = t(C, f)),
                  (E = D.length),
                  (S = C.length)),
                  j = E,
                  g = (b = C.slice(0, E)).length;
                g < E;
              )
                b[g++] = 0;
              (k = D.slice()).unshift(0), (P = D[0]), D[1] >= d / 2 && ++P;
              do {
                (f = 0),
                  (u = e(D, b, E, g)) < 0
                    ? ((x = b[0]),
                      E != g && (x = x * d + (b[1] || 0)),
                      (f = (x / P) | 0) > 1
                        ? (f >= d && (f = d - 1),
                          1 ==
                            (u = e(
                              (p = t(D, f)),
                              b,
                              (h = p.length),
                              (g = b.length),
                            )) && (f--, r(p, E < h ? k : D, h)))
                        : (0 == f && (u = f = 1), (p = D.slice())),
                      (h = p.length) < g && p.unshift(0),
                      r(b, p, g),
                      -1 == u &&
                        (u = e(D, b, E, (g = b.length))) < 1 &&
                        (f++, r(b, E < g ? k : D, g)),
                      (g = b.length))
                    : 0 === u && (f++, (b = [0])),
                  (m[s++] = f),
                  u && b[0] ? (b[g++] = C[j] || 0) : ((b = [C[j]]), (g = 1));
              } while ((j++ < S || void 0 !== b[0]) && w--);
            }
            return m[0] || m.shift(), (y.e = c), T(y, a ? i + A(y) + 1 : i);
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
            y = p.precision;
          if (A(t) > 16) throw Error(f + A(t));
          if (!t.s) return new p(i);
          for (
            null == e ? ((c = !1), (u = y)) : (u = e), a = new p(0.03125);
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
              ((n = T(n.times(t), u)),
              (r = r.times(++l)),
              O((a = o.plus(j(n, r, u))).d).slice(0, u) === O(o.d).slice(0, u))
            ) {
              for (; s--; ) o = T(o.times(o), u);
              return (p.precision = y), null == e ? ((c = !0), T(o, y)) : o;
            }
            o = a;
          }
        }
        function A(t) {
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
          return T(new t(t.LN10), e);
        }
        function E(t) {
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
            y = 1,
            d = t,
            v = d.d,
            m = d.constructor,
            b = m.precision;
          if (d.s < 1) throw Error(l + (d.s ? "NaN" : "-Infinity"));
          if (d.eq(i)) return new m(0);
          if ((null == e ? ((c = !1), (p = b)) : (p = e), d.eq(10)))
            return null == e && (c = !0), P(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (n = (r = O(v)).charAt(0)),
            (a = A(d)),
            !(Math.abs(a) < 15e14))
          )
            return (
              (f = P(m, p + 2, b).times(a + "")),
              (d = k(new m(n + "." + r.slice(1)), p - 10).plus(f)),
              (m.precision = b),
              null == e ? ((c = !0), T(d, b)) : d
            );
          for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
            (n = (r = O((d = d.times(t)).d)).charAt(0)), y++;
          for (
            a = A(d),
              n > 1
                ? ((d = new m("0." + r)), a++)
                : (d = new m(n + "." + r.slice(1))),
              s = u = d = j(d.minus(i), d.plus(i), p),
              h = T(d.times(d), p),
              o = 3;
            ;
          ) {
            if (
              ((u = T(u.times(h), p)),
              O((f = s.plus(j(u, new m(o), p))).d).slice(0, p) ===
                O(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== a && (s = s.plus(P(m, p + 2, b).times(a + ""))),
                (s = j(s, new m(y), p)),
                (m.precision = b),
                null == e ? ((c = !0), T(s, b)) : s
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
        function T(t, e, r) {
          var n,
            o,
            i,
            a,
            u,
            l,
            s,
            y,
            m = t.d;
          for (a = 1, i = m[0]; i >= 10; i /= 10) a++;
          if ((n = e - a) < 0) (n += v), (o = e), (s = m[(y = 0)]);
          else {
            if ((y = Math.ceil((n + 1) / v)) >= (i = m.length)) return t;
            for (s = i = m[y], a = 1; i >= 10; i /= 10) a++;
            o = (n %= v) - v + a;
          }
          if (
            (void 0 !== r &&
              ((u = ((s / (i = h(10, a - o - 1))) % 10) | 0),
              (l = e < 0 || void 0 !== m[y + 1] || s % i),
              (l =
                r < 4
                  ? (u || l) && (0 == r || r == (t.s < 0 ? 3 : 2))
                  : u > 5 ||
                    (5 == u &&
                      (4 == r ||
                        l ||
                        (6 == r &&
                          ((n > 0 ? (o > 0 ? s / h(10, a - o) : 0) : m[y - 1]) %
                            10) &
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
              ? ((m.length = y), (i = 1), y--)
              : ((m.length = y + 1),
                (i = h(10, v - n)),
                (m[y] = o > 0 ? (((s / h(10, a - o)) % h(10, o)) | 0) * i : 0)),
            l)
          )
            for (;;) {
              if (0 == y) {
                (m[0] += i) == d && ((m[0] = 1), ++t.e);
                break;
              }
              if (((m[y] += i), m[y] != d)) break;
              (m[y--] = 0), (i = 1);
            }
          for (n = m.length; 0 === m[--n]; ) m.pop();
          if (c && (t.e > b || t.e < -b)) throw Error(f + A(t));
          return t;
        }
        function _(t, e) {
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
            y = h.precision;
          if (!t.s || !e.s)
            return e.s ? (e.s = -e.s) : (e = new h(t)), c ? T(e, y) : e;
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
                a > (o = Math.max(Math.ceil(y / v), u) + 2) &&
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
              for (i = o; i && 0 === l[--i]; ) l[i] = d - 1;
              --l[i], (l[o] += d);
            }
            l[o] -= p[o];
          }
          for (; 0 === l[--u]; ) l.pop();
          for (; 0 === l[0]; l.shift()) --n;
          return l[0] ? ((e.d = l), (e.e = n), c ? T(e, y) : e) : new h(0);
        }
        function C(t, e, r) {
          var n,
            o = A(t),
            i = O(t.d),
            a = i.length;
          return (
            e
              ? (r && (n = r - a) > 0
                  ? (i = i.charAt(0) + "." + i.slice(1) + E(n))
                  : a > 1 && (i = i.charAt(0) + "." + i.slice(1)),
                (i = i + (o < 0 ? "e" : "e+") + o))
              : o < 0
                ? ((i = "0." + E(-o - 1) + i),
                  r && (n = r - a) > 0 && (i += E(n)))
                : o >= a
                  ? ((i += E(o + 1 - a)),
                    r && (n = r - o - 1) > 0 && (i = i + "." + E(n)))
                  : ((n = o + 1) < a && (i = i.slice(0, n) + "." + i.slice(n)),
                    r &&
                      (n = r - a) > 0 &&
                      (o + 1 === a && (i += "."), (i += E(n)))),
            t.s < 0 ? "-" + i : i
          );
        }
        function D(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function I(t) {
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
              !y.test(t))
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
            (i.config = i.set = I),
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
    29570: (t) => {
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
    34231: (t) => {
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
    28383: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
          if (!e(t[r], r, t)) return !1;
        return !0;
      };
    },
    77223: (t, e, r) => {
      var n = r(74021);
      t.exports = function (t, e) {
        return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1;
      };
    },
    64959: (t) => {
      t.exports = function (t, e, r) {
        for (var n = -1, o = null == t ? 0 : t.length; ++n < o; )
          if (r(e, t[n])) return !0;
        return !1;
      };
    },
    18296: (t) => {
      t.exports = function (t) {
        return t.split("");
      };
    },
    22503: (t, e, r) => {
      var n = r(39155);
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
    16869: (t, e, r) => {
      var n = r(4036);
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
    75509: (t) => {
      t.exports = function (t, e, r, n) {
        for (var o = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
          if (e(t[i], i, t)) return i;
        return -1;
      };
    },
    18174: (t, e, r) => {
      var n = r(49666),
        o = r(4497);
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
    31517: (t) => {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    74021: (t, e, r) => {
      var n = r(75509),
        o = r(57929),
        i = r(79989);
      t.exports = function (t, e, r) {
        return e == e ? i(t, e, r) : n(t, o, r);
      };
    },
    57929: (t) => {
      t.exports = function (t) {
        return t != t;
      };
    },
    40106: (t) => {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    82401: (t, e, r) => {
      var n = r(27742),
        o = r(93328),
        i = r(12507),
        a = r(47014),
        u = r(75323),
        c = r(97371),
        l = r(9756),
        s = r(91398),
        f = r(83491);
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
    32849: (t) => {
      var e = Math.ceil,
        r = Math.max;
      t.exports = function (t, n, o, i) {
        for (var a = -1, u = r(e((n - t) / (o || 1)), 0), c = Array(u); u--; )
          (c[i ? u : ++a] = t), (t += o);
        return c;
      };
    },
    5456: (t, e, r) => {
      var n = r(91398),
        o = r(28979),
        i = r(81271);
      t.exports = function (t, e) {
        return i(o(t, e, n), t + "");
      };
    },
    59576: (t, e, r) => {
      var n = r(12732),
        o = r(47489),
        i = r(91398),
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
    35270: (t) => {
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
    41190: (t, e, r) => {
      var n = r(39155);
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
    75323: (t) => {
      t.exports = function (t, e) {
        var r = t.length;
        for (t.sort(e); r--; ) t[r] = t[r].value;
        return t;
      };
    },
    38846: (t, e, r) => {
      var n = r(44658),
        o = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, n(t) + 1).replace(o, "") : t;
      };
    },
    3507: (t, e, r) => {
      var n = r(99177),
        o = r(77223),
        i = r(64959),
        a = r(5713),
        u = r(23119),
        c = r(73697);
      t.exports = function (t, e, r) {
        var l = -1,
          s = o,
          f = t.length,
          p = !0,
          h = [],
          y = h;
        if (r) (p = !1), (s = i);
        else if (f >= 200) {
          var d = e ? null : u(t);
          if (d) return c(d);
          (p = !1), (s = a), (y = new n());
        } else y = e ? [] : h;
        t: for (; ++l < f; ) {
          var v = t[l],
            m = e ? e(v) : v;
          if (((v = r || 0 !== v ? v : 0), p && m == m)) {
            for (var b = y.length; b--; ) if (y[b] === m) continue t;
            e && y.push(m), h.push(v);
          } else s(y, m, r) || (y !== h && y.push(m), h.push(v));
        }
        return h;
      };
    },
    30440: (t, e, r) => {
      var n = r(35270);
      t.exports = function (t, e, r) {
        var o = t.length;
        return (r = void 0 === r ? o : r), !e && r >= o ? t : n(t, e, r);
      };
    },
    20292: (t, e, r) => {
      var n = r(4036);
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
    9756: (t, e, r) => {
      var n = r(20292);
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
    94829: (t, e, r) => {
      var n = r(30440),
        o = r(6076),
        i = r(96402),
        a = r(6468);
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
    25200: (t, e, r) => {
      var n = r(12507),
        o = r(97244),
        i = r(33640);
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
    35966: (t, e, r) => {
      var n = r(32849),
        o = r(6238),
        i = r(5598);
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
    23119: (t, e, r) => {
      var n = r(64507),
        o = r(7204),
        i = r(73697),
        a =
          n && 1 / i(new n([, -0]))[1] == 1 / 0
            ? function (t) {
                return new n(t);
              }
            : o;
      t.exports = a;
    },
    6076: (t) => {
      var e = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    4497: (t, e, r) => {
      var n = r(38039),
        o = r(69214),
        i = r(83491),
        a = n ? n.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return i(t) || o(t) || !!(a && t && t[a]);
      };
    },
    6238: (t, e, r) => {
      var n = r(31722),
        o = r(97244),
        i = r(62439),
        a = r(97827);
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
    28979: (t, e, r) => {
      var n = r(34231),
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
    81271: (t, e, r) => {
      var n = r(59576),
        o = r(89997)(n);
      t.exports = o;
    },
    89997: (t) => {
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
    79989: (t) => {
      t.exports = function (t, e, r) {
        for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
        return -1;
      };
    },
    96402: (t, e, r) => {
      var n = r(18296),
        o = r(6076),
        i = r(52512);
      t.exports = function (t) {
        return o(t) ? i(t) : n(t);
      };
    },
    44658: (t) => {
      var e = /\s/;
      t.exports = function (t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)); );
        return r;
      };
    },
    52512: (t) => {
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
    12732: (t) => {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    41044: (t, e, r) => {
      var n = r(97827),
        o = r(26846),
        i = r(52352),
        a = Math.max,
        u = Math.min;
      t.exports = function (t, e, r) {
        var c,
          l,
          s,
          f,
          p,
          h,
          y = 0,
          d = !1,
          v = !1,
          m = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function b(e) {
          var r = c,
            n = l;
          return (c = l = void 0), (y = e), (f = t.apply(n, r));
        }
        function g(t) {
          var r = t - h;
          return void 0 === h || r >= e || r < 0 || (v && t - y >= s);
        }
        function x() {
          var t = o();
          if (g(t)) return w(t);
          p = setTimeout(
            x,
            (function (t) {
              var r = e - (t - h);
              return v ? u(r, s - (t - y)) : r;
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
                return (y = t), (p = setTimeout(x, e)), d ? b(t) : f;
              })(h);
            if (v) return clearTimeout(p), (p = setTimeout(x, e)), b(h);
          }
          return void 0 === p && (p = setTimeout(x, e)), f;
        }
        return (
          (e = i(e) || 0),
          n(r) &&
            ((d = !!r.leading),
            (s = (v = "maxWait" in r) ? a(i(r.maxWait) || 0, e) : s),
            (m = "trailing" in r ? !!r.trailing : m)),
          (O.cancel = function () {
            void 0 !== p && clearTimeout(p), (y = 0), (c = h = l = p = void 0);
          }),
          (O.flush = function () {
            return void 0 === p ? f : w(o());
          }),
          O
        );
      };
    },
    17489: (t, e, r) => {
      var n = r(28383),
        o = r(22503),
        i = r(12507),
        a = r(83491),
        u = r(6238);
      t.exports = function (t, e, r) {
        var c = a(t) ? n : o;
        return r && u(t, e, r) && (e = void 0), c(t, i(e, 3));
      };
    },
    81639: (t, e, r) => {
      var n = r(25200)(r(45323));
      t.exports = n;
    },
    45323: (t, e, r) => {
      var n = r(75509),
        o = r(12507),
        i = r(41703),
        a = Math.max;
      t.exports = function (t, e, r) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == r ? 0 : i(r);
        return c < 0 && (c = a(u + c, 0)), n(t, o(e, 3), c);
      };
    },
    21205: (t, e, r) => {
      var n = r(18174),
        o = r(67160);
      t.exports = function (t, e) {
        return n(o(t, e), 1);
      };
    },
    23734: (t, e, r) => {
      var n = r(78714),
        o = r(34172);
      t.exports = function (t) {
        return !0 === t || !1 === t || (o(t) && "[object Boolean]" == n(t));
      };
    },
    58782: (t, e, r) => {
      var n = r(16536);
      t.exports = function (t, e) {
        return n(t, e);
      };
    },
    27367: (t, e, r) => {
      var n = r(2017);
      t.exports = function (t) {
        return n(t) && t != +t;
      };
    },
    64609: (t) => {
      t.exports = function (t) {
        return null == t;
      };
    },
    2017: (t, e, r) => {
      var n = r(78714),
        o = r(34172);
      t.exports = function (t) {
        return "number" == typeof t || (o(t) && "[object Number]" == n(t));
      };
    },
    73912: (t) => {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    90338: (t, e, r) => {
      var n = r(51458),
        o = r(17707),
        i = r(12507);
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
    82544: (t, e, r) => {
      var n = r(16869),
        o = r(31517),
        i = r(91398);
      t.exports = function (t) {
        return t && t.length ? n(t, i, o) : void 0;
      };
    },
    6702: (t, e, r) => {
      var n = r(16869),
        o = r(40106),
        i = r(91398);
      t.exports = function (t) {
        return t && t.length ? n(t, i, o) : void 0;
      };
    },
    7204: (t) => {
      t.exports = function () {};
    },
    26846: (t, e, r) => {
      var n = r(26467);
      t.exports = function () {
        return n.Date.now();
      };
    },
    50199: (t, e, r) => {
      var n = r(35966)();
      t.exports = n;
    },
    49556: (t, e, r) => {
      var n = r(17214),
        o = r(12507),
        i = r(41190),
        a = r(83491),
        u = r(6238);
      t.exports = function (t, e, r) {
        var c = a(t) ? n : i;
        return r && u(t, e, r) && (e = void 0), c(t, o(e, 3));
      };
    },
    97825: (t, e, r) => {
      var n = r(18174),
        o = r(82401),
        i = r(5456),
        a = r(6238),
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
    51504: (t, e, r) => {
      var n = r(41044),
        o = r(97827);
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
    5598: (t, e, r) => {
      var n = r(52352),
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
    41703: (t, e, r) => {
      var n = r(5598);
      t.exports = function (t) {
        var e = n(t),
          r = e % 1;
        return e == e ? (r ? e - r : e) : 0;
      };
    },
    52352: (t, e, r) => {
      var n = r(38846),
        o = r(97827),
        i = r(4036),
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
    17744: (t, e, r) => {
      var n = r(12507),
        o = r(3507);
      t.exports = function (t, e) {
        return t && t.length ? o(t, n(e, 2)) : [];
      };
    },
    4842: (t, e, r) => {
      var n = r(94829)("toUpperCase");
      t.exports = n;
    },
    38877: (t, e) => {
      "use strict";
      var r,
        n = Symbol.for("react.element"),
        o = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        s = Symbol.for("react.server_context"),
        f = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        h = Symbol.for("react.suspense_list"),
        y = Symbol.for("react.memo"),
        d = Symbol.for("react.lazy"),
        v = Symbol.for("react.offscreen");
      /**
       * @license React
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function m(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case n:
              switch ((t = t.type)) {
                case i:
                case u:
                case a:
                case p:
                case h:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case s:
                    case l:
                    case f:
                    case d:
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
      (r = Symbol.for("react.module.reference")),
        (e.isFragment = function (t) {
          return m(t) === i;
        });
    },
    98193: (t, e, r) => {
      "use strict";
      t.exports = r(38877);
    },
    57487: (t, e, r) => {
      "use strict";
      r.d(e, { Ay: () => Ht });
      var n = r(90626),
        o = r(61410),
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
        return t === e || (!t && !e && t != t && e != e);
      }
      var y = "__v",
        d = "__o",
        v = "_owner",
        m = Object.getOwnPropertyDescriptor,
        b = Object.keys;
      function g(t, e, r) {
        var n = t.length;
        if (e.length !== n) return !1;
        for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
        return !0;
      }
      function x(t, e) {
        return h(t.getTime(), e.getTime());
      }
      function w(t, e) {
        return (
          t.name === e.name &&
          t.message === e.message &&
          t.cause === e.cause &&
          t.stack === e.stack
        );
      }
      function O(t, e) {
        return t === e;
      }
      function j(t, e, r) {
        var n = t.size;
        if (n !== e.size) return !1;
        if (!n) return !0;
        for (
          var o, i, a = new Array(n), u = t.entries(), c = 0;
          (o = u.next()) && !o.done;
        ) {
          for (var l = e.entries(), s = !1, f = 0; (i = l.next()) && !i.done; )
            if (a[f]) f++;
            else {
              var p = o.value,
                h = i.value;
              if (
                r.equals(p[0], h[0], c, f, t, e, r) &&
                r.equals(p[1], h[1], p[0], h[0], t, e, r)
              ) {
                s = a[f] = !0;
                break;
              }
              f++;
            }
          if (!s) return !1;
          c++;
        }
        return !0;
      }
      var S = h;
      function A(t, e, r) {
        var n = b(t),
          o = n.length;
        if (b(e).length !== o) return !1;
        for (; o-- > 0; ) if (!C(t, e, r, n[o])) return !1;
        return !0;
      }
      function P(t, e, r) {
        var n,
          o,
          i,
          a = f(t),
          u = a.length;
        if (f(e).length !== u) return !1;
        for (; u-- > 0; ) {
          if (!C(t, e, r, (n = a[u]))) return !1;
          if (
            ((o = m(t, n)),
            (i = m(e, n)),
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
      function E(t, e) {
        return h(t.valueOf(), e.valueOf());
      }
      function k(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function M(t, e, r) {
        var n = t.size;
        if (n !== e.size) return !1;
        if (!n) return !0;
        for (
          var o, i, a = new Array(n), u = t.values();
          (o = u.next()) && !o.done;
        ) {
          for (var c = e.values(), l = !1, s = 0; (i = c.next()) && !i.done; ) {
            if (
              !a[s] &&
              r.equals(o.value, i.value, o.value, i.value, t, e, r)
            ) {
              l = a[s] = !0;
              break;
            }
            s++;
          }
          if (!l) return !1;
        }
        return !0;
      }
      function T(t, e) {
        var r = t.length;
        if (e.length !== r) return !1;
        for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function _(t, e) {
        return (
          t.hostname === e.hostname &&
          t.pathname === e.pathname &&
          t.protocol === e.protocol &&
          t.port === e.port &&
          t.hash === e.hash &&
          t.username === e.username &&
          t.password === e.password
        );
      }
      function C(t, e, r, n) {
        return (
          !((n !== v && n !== d && n !== y) || (!t.$$typeof && !e.$$typeof)) ||
          (p(e, n) && r.equals(t[n], e[n], n, n, t, e, r))
        );
      }
      var D = "[object Arguments]",
        I = "[object Boolean]",
        N = "[object Date]",
        B = "[object Error]",
        R = "[object Map]",
        L = "[object Number]",
        z = "[object Object]",
        U = "[object RegExp]",
        F = "[object Set]",
        W = "[object String]",
        $ = "[object URL]",
        q = Array.isArray,
        X =
          "function" == typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView
            : null,
        H = Object.assign,
        K = Object.prototype.toString.call.bind(Object.prototype.toString);
      var V = G();
      G({ strict: !0 }),
        G({ circular: !0 }),
        G({ circular: !0, strict: !0 }),
        G({
          createInternalComparator: function () {
            return h;
          },
        }),
        G({
          strict: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        G({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
        }),
        G({
          circular: !0,
          createInternalComparator: function () {
            return h;
          },
          strict: !0,
        });
      function G(t) {
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
                areArraysEqual: n ? P : g,
                areDatesEqual: x,
                areErrorsEqual: w,
                areFunctionsEqual: O,
                areMapsEqual: n ? l(j, P) : j,
                areNumbersEqual: S,
                areObjectsEqual: n ? P : A,
                arePrimitiveWrappersEqual: E,
                areRegExpsEqual: k,
                areSetsEqual: n ? l(M, P) : M,
                areTypedArraysEqual: n ? P : T,
                areUrlsEqual: _,
              };
            if ((r && (o = H({}, o, r(o))), e)) {
              var i = s(o.areArraysEqual),
                a = s(o.areMapsEqual),
                u = s(o.areObjectsEqual),
                c = s(o.areSetsEqual);
              o = H({}, o, {
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
              n = t.areErrorsEqual,
              o = t.areFunctionsEqual,
              i = t.areMapsEqual,
              a = t.areNumbersEqual,
              u = t.areObjectsEqual,
              c = t.arePrimitiveWrappersEqual,
              l = t.areRegExpsEqual,
              s = t.areSetsEqual,
              f = t.areTypedArraysEqual,
              p = t.areUrlsEqual;
            return function (t, h, y) {
              if (t === h) return !0;
              if (null == t || null == h) return !1;
              var d = typeof t;
              if (d !== typeof h) return !1;
              if ("object" !== d)
                return "number" === d
                  ? a(t, h, y)
                  : "function" === d && o(t, h, y);
              var v = t.constructor;
              if (v !== h.constructor) return !1;
              if (v === Object) return u(t, h, y);
              if (q(t)) return e(t, h, y);
              if (null != X && X(t)) return f(t, h, y);
              if (v === Date) return r(t, h, y);
              if (v === RegExp) return l(t, h, y);
              if (v === Map) return i(t, h, y);
              if (v === Set) return s(t, h, y);
              var m = K(t);
              return m === N
                ? r(t, h, y)
                : m === U
                  ? l(t, h, y)
                  : m === R
                    ? i(t, h, y)
                    : m === F
                      ? s(t, h, y)
                      : m === z
                        ? "function" != typeof t.then &&
                          "function" != typeof h.then &&
                          u(t, h, y)
                        : m === $
                          ? p(t, h, y)
                          : m === B
                            ? n(t, h, y)
                            : m === D
                              ? u(t, h, y)
                              : (m === I || m === L || m === W) && c(t, h, y);
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
      function Y(t) {
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
            if ("string" == typeof t) return Q(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Q(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Q(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function tt() {
        var t = function () {
            return null;
          },
          e = !1,
          r = function r(n) {
            if (!e) {
              if (Array.isArray(n)) {
                if (!n.length) return;
                var o = Z(n),
                  i = o[0],
                  a = o.slice(1);
                return "number" == typeof i
                  ? void Y(r.bind(null, a), i)
                  : (r(i), void Y(r.bind(null, a)));
              }
              "object" === J(n) && t(n), "function" == typeof n && n();
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
      function et(t) {
        return (
          (et =
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
          et(t)
        );
      }
      function rt(t, e) {
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
      function nt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? rt(Object(r), !0).forEach(function (e) {
                ot(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : rt(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function ot(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== et(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== et(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === et(e) ? e : String(e);
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
      var it = function (t) {
          return t;
        },
        at = function (t, e) {
          return Object.keys(e).reduce(function (r, n) {
            return nt(nt({}, r), {}, ot({}, n, t(n, e[n])));
          }, {});
        },
        ut = function (t, e, r) {
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
      function ct(t, e) {
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
          st(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function lt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ft(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          st(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function st(t, e) {
        if (t) {
          if ("string" == typeof t) return ft(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? ft(t, e)
                : void 0
          );
        }
      }
      function ft(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var pt = 1e-4,
        ht = function (t, e) {
          return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
        },
        yt = function (t, e) {
          return t
            .map(function (t, r) {
              return t * Math.pow(e, r);
            })
            .reduce(function (t, e) {
              return t + e;
            });
        },
        dt = function (t, e) {
          return function (r) {
            var n = ht(t, e);
            return yt(n, r);
          };
        },
        vt = function () {
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
                  var c = ct(
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
            f = dt(n, i),
            p = dt(o, a),
            h =
              ((l = n),
              (s = i),
              function (t) {
                var e = ht(l, s),
                  r = [].concat(
                    lt(
                      e
                        .map(function (t, e) {
                          return t * e;
                        })
                        .slice(1),
                    ),
                    [0],
                  );
                return yt(r, t);
              }),
            y = function (t) {
              for (var e, r = t > 1 ? 1 : t, n = r, o = 0; o < 8; ++o) {
                var i = f(n) - r,
                  a = h(n);
                if (Math.abs(i - r) < pt || a < pt) return p(n);
                n = (e = n - i / a) > 1 ? 1 : e < 0 ? 0 : e;
              }
              return p(n);
            };
          return (y.isStepper = !1), y;
        },
        mt = function () {
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
                return vt(n);
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
                      return Math.abs(u - e) < pt && Math.abs(i) < pt
                        ? [e, 0]
                        : [u, i];
                    };
                  return (u.isStepper = !0), (u.dt = a), u;
                })();
              default:
                if ("cubic-bezier" === n.split("(")[0]) return vt(n);
            }
          return "function" == typeof n ? n : null;
        };
      function bt(t) {
        return (
          (bt =
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
          bt(t)
        );
      }
      function gt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return At(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          St(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
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
              if ("object" !== bt(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== bt(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === bt(e) ? e : String(e);
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
      function jt(t, e) {
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
          St(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function St(t, e) {
        if (t) {
          if ("string" == typeof t) return At(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? At(t, e)
                : void 0
          );
        }
      }
      function At(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var Pt = function (t, e, r) {
          return t + (e - t) * r;
        },
        Et = function (t) {
          return t.from !== t.to;
        },
        kt = function t(e, r, n) {
          var o = at(function (t, r) {
            if (Et(r)) {
              var n = jt(e(r.from, r.to, r.velocity), 2),
                o = n[0],
                i = n[1];
              return wt(wt({}, r), {}, { from: o, velocity: i });
            }
            return r;
          }, r);
          return n < 1
            ? at(function (t, e) {
                return Et(e)
                  ? wt(
                      wt({}, e),
                      {},
                      {
                        velocity: Pt(e.velocity, o[t].velocity, n),
                        from: Pt(e.from, o[t].from, n),
                      },
                    )
                  : e;
              }, r)
            : t(e, o, n - 1);
        };
      const Mt = function (t, e, r, n, o) {
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
            return wt(wt({}, r), {}, Ot({}, n, [t[n], e[n]]));
          }, {}),
          f = l.reduce(function (r, n) {
            return wt(
              wt({}, r),
              {},
              Ot({}, n, { from: t[n], velocity: 0, to: e[n] }),
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
                (f = kt(r, f, i)),
                  o(
                    wt(
                      wt(wt({}, t), e),
                      at(function (t, e) {
                        return e.from;
                      }, f),
                    ),
                  ),
                  (u = n),
                  Object.values(f).filter(Et).length &&
                    (p = requestAnimationFrame(h));
              }
            : function (i) {
                c || (c = i);
                var a = (i - c) / n,
                  u = at(function (t, e) {
                    return Pt.apply(void 0, gt(e).concat([r(a)]));
                  }, s);
                if ((o(wt(wt(wt({}, t), e), u)), a < 1))
                  p = requestAnimationFrame(h);
                else {
                  var l = at(function (t, e) {
                    return Pt.apply(void 0, gt(e).concat([r(1)]));
                  }, s);
                  o(wt(wt(wt({}, t), e), l));
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
      var _t = [
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
      function Ct(t, e) {
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
      function Dt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return It(t);
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
            if ("string" == typeof t) return It(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return It(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function It(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function Nt(t, e) {
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
      function Bt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Nt(Object(r), !0).forEach(function (e) {
                Rt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Nt(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function Rt(t, e, r) {
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
      function Lt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, zt(n.key), n);
        }
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
      function Ut(t, e) {
        return (
          (Ut = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Ut(t, e)
        );
      }
      function Ft(t) {
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
            n = qt(t);
          if (e) {
            var o = qt(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Wt(this, r);
        };
      }
      function Wt(t, e) {
        if (e && ("object" === Tt(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return $t(t);
      }
      function $t(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function qt(t) {
        return (
          (qt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          qt(t)
        );
      }
      var Xt = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && Ut(t, e);
        })(a, t);
        var e,
          r,
          o,
          i = Ft(a);
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
            ((r.handleStyleChange = r.handleStyleChange.bind($t(r))),
            (r.changeStyle = r.changeStyle.bind($t(r))),
            !o || p <= 0)
          )
            return (
              (r.state = { style: {} }),
              "function" == typeof f && (r.state = { style: l }),
              Wt(r)
            );
          if (s && s.length) r.state = { style: s[0].style };
          else if (c) {
            if ("function" == typeof f) return (r.state = { style: c }), Wt(r);
            r.state = { style: u ? Rt({}, u, c) : c };
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
                    if (!(V(t.to, a) && t.canBegin && t.isActive)) {
                      var l = !t.canBegin || !t.isActive;
                      this.manager && this.manager.stop(),
                        this.stopJSAnimation && this.stopJSAnimation();
                      var s = l || i ? u : t.to;
                      if (this.state && c) {
                        var f = { style: o ? Rt({}, o, s) : s };
                        ((o && c[o] !== s) || (!o && c !== s)) &&
                          this.setState(f);
                      }
                      this.runAnimation(
                        Bt(Bt({}, this.props), {}, { from: s, begin: 0 }),
                      );
                    }
                  } else {
                    var p = { style: o ? Rt({}, o, a) : a };
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
                  l = Mt(r, n, mt(i), o, this.changeStyle);
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
                    Dt(
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
                            return [].concat(Dt(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: c,
                                duration: i,
                                easing: u,
                              }),
                              i,
                            ]);
                          var h = ut(p, i, u),
                            y = Bt(
                              Bt(Bt({}, f.style), c),
                              {},
                              { transition: h },
                            );
                          return [].concat(Dt(t), [y, i, s]).filter(it);
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
                this.manager || (this.manager = tt());
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
                    var f = n ? Rt({}, n, o) : o,
                      p = ut(Object.keys(f), r, i);
                    s.start([a, e, Bt(Bt({}, f), {}, { transition: p }), r, u]);
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
                    Ct(t, _t)),
                  a = n.Children.count(e),
                  u = this.state.style;
                if ("function" == typeof e) return e(u);
                if (!o || 0 === a || r <= 0) return e;
                var c = function (t) {
                  var e = t.props,
                    r = e.style,
                    o = void 0 === r ? {} : r,
                    a = e.className;
                  return (0, n.cloneElement)(
                    t,
                    Bt(
                      Bt({}, i),
                      {},
                      { style: Bt(Bt({}, o), u), className: a },
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
          ]) && Lt(e.prototype, r),
          o && Lt(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(n.PureComponent);
      (Xt.displayName = "Animate"),
        (Xt.defaultProps = {
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
        (Xt.propTypes = {
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
      const Ht = Xt;
    },
    62059: (t, e, r) => {
      "use strict";
      r.d(e, { y: () => q });
      var n = r(90626),
        o = r(90018),
        i = r(57487),
        a = r(58782),
        u = r.n(a),
        c = r(64609),
        l = r.n(c),
        s = r(49891),
        f = r(82780),
        p = r(49404),
        h = r(94816),
        y = r(91038),
        d = r(50247),
        v = r(1036),
        m = r(89998),
        b = r(62426),
        g = r(68841),
        x = r(17798),
        w = ["x", "y"];
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
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? S(Object(r), !0).forEach(function (e) {
                P(t, e, r[e]);
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
      function P(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != O(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != O(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == O(n) ? n : n + "") in t
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
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      function k(t, e) {
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
        return A(
          A(A(A(A({}, e), o), a ? { x: a } : {}), c ? { y: c } : {}),
          {},
          { height: s, width: p, name: e.name, radius: e.radius },
        );
      }
      function M(t) {
        return n.createElement(
          x.yp,
          j(
            {
              shapeType: "rectangle",
              propTransformer: k,
              activeClassName: "recharts-active-bar",
            },
            t,
          ),
        );
      }
      var T,
        _ = ["value", "background"];
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
      function D(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      function I() {
        return (
          (I = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          I.apply(this, arguments)
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
      function B(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(r), !0).forEach(function (e) {
                W(t, e, r[e]);
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
      function R(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, $(n.key), n);
        }
      }
      function L(t, e, r) {
        return (
          (e = U(e)),
          (function (t, e) {
            if (e && ("object" === C(e) || "function" == typeof e)) return e;
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
          })(
            t,
            z()
              ? Reflect.construct(e, r || [], U(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function z() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (z = function () {
          return !!t;
        })();
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
      function F(t, e) {
        return (
          (F = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          F(t, e)
        );
      }
      function W(t, e, r) {
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
          if ("object" != C(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != C(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == C(e) ? e : e + "";
      }
      var q = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            W((t = L(this, e, [].concat(n))), "state", {
              isAnimationFinished: !1,
            }),
            W(t, "id", (0, y.NF)("recharts-bar-")),
            W(t, "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), e && e();
            }),
            W(t, "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), e && e();
            }),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && F(t, e);
          })(e, t),
          (r = e),
          (c = [
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
          (a = [
            {
              key: "renderRectanglesStatically",
              value: function (t) {
                var e = this,
                  r = this.props,
                  o = r.shape,
                  i = r.dataKey,
                  a = r.activeIndex,
                  u = r.activeBar,
                  c = (0, d.J9)(this.props, !1);
                return (
                  t &&
                  t.map(function (t, r) {
                    var l = r === a,
                      f = l ? u : o,
                      p = B(
                        B(B({}, c), t),
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
                      s.W,
                      I(
                        { className: "recharts-bar-rectangle" },
                        (0, b.XC)(e.props, t, r),
                        {
                          key: "rectangle-"
                            .concat(null == t ? void 0 : t.x, "-")
                            .concat(null == t ? void 0 : t.y, "-")
                            .concat(null == t ? void 0 : t.value),
                        },
                      ),
                      n.createElement(M, p),
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
                  i.Ay,
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
                          var n = (0, y.Dj)(r.x, t.x),
                            a = (0, y.Dj)(r.y, t.y),
                            u = (0, y.Dj)(r.width, t.width),
                            c = (0, y.Dj)(r.height, t.height);
                          return B(
                            B({}, t),
                            {},
                            { x: n(i), y: a(i), width: u(i), height: c(i) },
                          );
                        }
                        if ("horizontal" === o) {
                          var l = (0, y.Dj)(0, t.height)(i);
                          return B(
                            B({}, t),
                            {},
                            { y: t.y + t.height - l, height: l },
                          );
                        }
                        var s = (0, y.Dj)(0, t.width)(i);
                        return B(B({}, t), {}, { width: s });
                      });
                    return n.createElement(
                      s.W,
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
                  a = (0, d.J9)(this.props.background, !1);
                return r.map(function (e, r) {
                  e.value;
                  var u = e.background,
                    c = D(e, _);
                  if (!u) return null;
                  var l = B(
                    B(
                      B(B(B({}, c), {}, { fill: "#eee" }, u), a),
                      (0, b.XC)(t.props, e, r),
                    ),
                    {},
                    {
                      onAnimationStart: t.handleAnimationStart,
                      onAnimationEnd: t.handleAnimationEnd,
                      dataKey: o,
                      index: r,
                      className: "recharts-bar-background-rectangle",
                    },
                  );
                  return n.createElement(
                    M,
                    I(
                      {
                        key: "background-bar-".concat(r),
                        option: t.props.background,
                        isActive: r === i,
                      },
                      l,
                    ),
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
                  l = (0, d.aS)(c, f.u);
                if (!l) return null;
                var p = "vertical" === u ? o[0].height / 2 : o[0].width / 2,
                  h = function (t, e) {
                    var r = Array.isArray(t.value) ? t.value[1] : t.value;
                    return {
                      x: t.x,
                      y: t.y,
                      value: r,
                      errorVal: (0, m.kr)(t, e),
                    };
                  },
                  y = { clipPath: t ? "url(#clipPath-".concat(e, ")") : null };
                return n.createElement(
                  s.W,
                  y,
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
                  y = t.height,
                  d = t.isAnimationActive,
                  v = t.background,
                  m = t.id;
                if (e || !r || !r.length) return null;
                var b = this.state.isAnimationFinished,
                  g = (0, o.A)("recharts-bar", i),
                  x = a && a.allowDataOverflow,
                  w = u && u.allowDataOverflow,
                  O = x || w,
                  j = l()(m) ? this.id : m;
                return n.createElement(
                  s.W,
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
                            y: w ? f : f - y / 2,
                            width: x ? p : 2 * p,
                            height: w ? y : 2 * y,
                          }),
                        ),
                      )
                    : null,
                  n.createElement(
                    s.W,
                    {
                      className: "recharts-bar-rectangles",
                      clipPath: O ? "url(#clipPath-".concat(j, ")") : null,
                    },
                    v ? this.renderBackground() : null,
                    this.renderRectangles(),
                  ),
                  this.renderErrorBar(O, j),
                  (!d || b) && h.Z.renderCallByParent(this.props, r),
                );
              },
            },
          ]) && R(r.prototype, a),
          c && R(r, c),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, a, c;
      })(n.PureComponent);
      (T = q),
        W(q, "displayName", "Bar"),
        W(q, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          legendType: "rect",
          minPointSize: 0,
          hide: !1,
          data: [],
          layout: "vertical",
          activeBar: !1,
          isAnimationActive: !v.m.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "ease",
        }),
        W(q, "getComposedData", function (t) {
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
            v = (0, m.xi)(n, r);
          if (!v) return null;
          var b = e.layout,
            x = r.type.defaultProps,
            w = void 0 !== x ? B(B({}, x), r.props) : r.props,
            O = w.dataKey,
            j = w.children,
            S = w.minPointSize,
            A = "horizontal" === b ? a : i,
            P = l ? A.scale.domain() : null,
            E = (0, m.DW)({ numericAxis: A }),
            k = (0, d.aS)(j, p.f),
            M = f.map(function (t, e) {
              var n, f, p, h, d, x;
              l
                ? (n = (0, m._f)(l[s + e], P))
                : ((n = (0, m.kr)(t, O)), Array.isArray(n) || (n = [E, n]));
              var w = (function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                return function (r, n) {
                  if ("number" == typeof t) return t;
                  var o = "number" == typeof r;
                  return o ? t(r, n) : (o || (0, g.A)(!1), e);
                };
              })(S, T.defaultProps.minPointSize)(n[1], e);
              if ("horizontal" === b) {
                var j,
                  A = [a.scale(n[0]), a.scale(n[1])],
                  M = A[0],
                  _ = A[1];
                (f = (0, m.y2)({
                  axis: i,
                  ticks: u,
                  bandSize: o,
                  offset: v.offset,
                  entry: t,
                  index: e,
                })),
                  (p =
                    null !== (j = null != _ ? _ : M) && void 0 !== j
                      ? j
                      : void 0),
                  (h = v.size);
                var C = M - _;
                if (
                  ((d = Number.isNaN(C) ? 0 : C),
                  (x = { x: f, y: a.y, width: h, height: a.height }),
                  Math.abs(w) > 0 && Math.abs(d) < Math.abs(w))
                ) {
                  var D = (0, y.sA)(d || w) * (Math.abs(w) - Math.abs(d));
                  (p -= D), (d += D);
                }
              } else {
                var I = [i.scale(n[0]), i.scale(n[1])],
                  N = I[0],
                  R = I[1];
                if (
                  ((f = N),
                  (p = (0, m.y2)({
                    axis: a,
                    ticks: c,
                    bandSize: o,
                    offset: v.offset,
                    entry: t,
                    index: e,
                  })),
                  (h = R - N),
                  (d = v.size),
                  (x = { x: i.x, y: p, width: i.width, height: d }),
                  Math.abs(w) > 0 && Math.abs(h) < Math.abs(w))
                )
                  h += (0, y.sA)(h || w) * (Math.abs(w) - Math.abs(h));
              }
              return B(
                B(
                  B({}, t),
                  {},
                  {
                    x: f,
                    y: p,
                    width: h,
                    height: d,
                    value: l ? n : n[1],
                    payload: t,
                    background: x,
                  },
                  k && k[e] && k[e].props,
                ),
                {},
                {
                  tooltipPayload: [(0, m.zb)(r, t)],
                  tooltipPosition: { x: f + h / 2, y: p + d / 2 },
                },
              );
            });
          return B({ data: M, layout: b }, h);
        });
    },
    38475: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => C });
      var n = r(90626),
        o = r(3316),
        i = r.n(o),
        a = r(52686),
        u = r.n(a),
        c = r(90018),
        l = r(16339),
        s = r(49891),
        f = r(9675),
        p = r(39864),
        h = r(91038),
        y = r(62426),
        d = r(50247),
        v = r(25655),
        m = ["viewBox"],
        b = ["viewBox"],
        g = ["ticks"];
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
                T(t, e, r[e]);
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
      function S(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      function A(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, _(n.key), n);
        }
      }
      function P(t, e, r) {
        return (
          (e = k(e)),
          (function (t, e) {
            if (e && ("object" === x(e) || "function" == typeof e)) return e;
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
          })(
            t,
            E()
              ? Reflect.construct(e, r || [], k(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function E() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (E = function () {
          return !!t;
        })();
      }
      function k(t) {
        return (
          (k = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          k(t)
        );
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
      function T(t, e, r) {
        return (
          (e = _(e)) in t
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
      function _(t) {
        var e = (function (t, e) {
          if ("object" != x(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != x(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == x(e) ? e : e + "";
      }
      var C = (function (t) {
        function e(t) {
          var r;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ((r = P(this, e, [t])).state = { fontSize: "", letterSpacing: "" }),
            r
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && M(t, e);
          })(e, t),
          (r = e),
          (a = [
            {
              key: "renderTickItem",
              value: function (t, e, r) {
                return n.isValidElement(t)
                  ? n.cloneElement(t, e)
                  : i()(t)
                    ? t(e)
                    : n.createElement(
                        f.E,
                        w({}, e, {
                          className: "recharts-cartesian-axis-tick-value",
                        }),
                        r,
                      );
              },
            },
          ]),
          (o = [
            {
              key: "shouldComponentUpdate",
              value: function (t, e) {
                var r = t.viewBox,
                  n = S(t, m),
                  o = this.props,
                  i = o.viewBox,
                  a = S(o, b);
                return (
                  !(0, l.b)(r, i) || !(0, l.b)(n, a) || !(0, l.b)(e, this.state)
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
                  y = u.tickSize,
                  d = u.mirror,
                  v = u.tickMargin,
                  m = d ? -1 : 1,
                  b = t.tickSize || y,
                  g = (0, h.Et)(t.tickCoord) ? t.tickCoord : t.coordinate;
                switch (p) {
                  case "top":
                    (e = r = t.coordinate),
                      (a = (n = (o = l + +!d * f) - m * b) - m * v),
                      (i = g);
                    break;
                  case "left":
                    (n = o = t.coordinate),
                      (i = (e = (r = c + +!d * s) - m * b) - m * v),
                      (a = g);
                    break;
                  case "right":
                    (n = o = t.coordinate),
                      (i = (e = (r = c + +d * s) + m * b) + m * v),
                      (a = g);
                    break;
                  default:
                    (e = r = t.coordinate),
                      (a = (n = (o = l + +d * f) + m * b) + m * v),
                      (i = g);
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
                  l = t.mirror,
                  s = t.axisLine,
                  f = j(
                    j(j({}, (0, d.J9)(this.props, !1)), (0, d.J9)(s, !1)),
                    {},
                    { fill: "none" },
                  );
                if ("top" === a || "bottom" === a) {
                  var p = +(("top" === a && !l) || ("bottom" === a && l));
                  f = j(
                    j({}, f),
                    {},
                    { x1: e, y1: r + p * i, x2: e + o, y2: r + p * i },
                  );
                } else {
                  var h = +(("left" === a && !l) || ("right" === a && l));
                  f = j(
                    j({}, f),
                    {},
                    { x1: e + h * o, y1: r, x2: e + h * o, y2: r + i },
                  );
                }
                return n.createElement(
                  "line",
                  w({}, f, {
                    className: (0, c.A)(
                      "recharts-cartesian-axis-line",
                      u()(s, "className"),
                    ),
                  }),
                );
              },
            },
            {
              key: "renderTicks",
              value: function (t, r, o) {
                var a = this,
                  l = this.props,
                  f = l.tickLine,
                  p = l.stroke,
                  h = l.tick,
                  m = l.tickFormatter,
                  b = l.unit,
                  g = (0, v.f)(j(j({}, this.props), {}, { ticks: t }), r, o),
                  x = this.getTickTextAnchor(),
                  O = this.getTickVerticalAnchor(),
                  S = (0, d.J9)(this.props, !1),
                  A = (0, d.J9)(h, !1),
                  P = j(j({}, S), {}, { fill: "none" }, (0, d.J9)(f, !1)),
                  E = g.map(function (t, r) {
                    var o = a.getTickLineCoord(t),
                      l = o.line,
                      d = o.tick,
                      v = j(
                        j(
                          j(
                            j({ textAnchor: x, verticalAnchor: O }, S),
                            {},
                            { stroke: "none", fill: p },
                            A,
                          ),
                          d,
                        ),
                        {},
                        {
                          index: r,
                          payload: t,
                          visibleTicksCount: g.length,
                          tickFormatter: m,
                        },
                      );
                    return n.createElement(
                      s.W,
                      w(
                        {
                          className: "recharts-cartesian-axis-tick",
                          key: "tick-"
                            .concat(t.value, "-")
                            .concat(t.coordinate, "-")
                            .concat(t.tickCoord),
                        },
                        (0, y.XC)(a.props, t, r),
                      ),
                      f &&
                        n.createElement(
                          "line",
                          w({}, P, l, {
                            className: (0, c.A)(
                              "recharts-cartesian-axis-tick-line",
                              u()(f, "className"),
                            ),
                          }),
                        ),
                      h &&
                        e.renderTickItem(
                          h,
                          v,
                          ""
                            .concat(i()(m) ? m(t.value, r) : t.value)
                            .concat(b || ""),
                        ),
                    );
                  });
                return n.createElement(
                  "g",
                  { className: "recharts-cartesian-axis-ticks" },
                  E,
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
                  a = e.height,
                  u = e.ticksGenerator,
                  l = e.className;
                if (e.hide) return null;
                var f = this.props,
                  h = f.ticks,
                  y = S(f, g),
                  d = h;
                return (
                  i()(u) && (d = h && h.length > 0 ? u(this.props) : u(y)),
                  o <= 0 || a <= 0 || !d || !d.length
                    ? null
                    : n.createElement(
                        s.W,
                        {
                          className: (0, c.A)("recharts-cartesian-axis", l),
                          ref: function (e) {
                            t.layerReference = e;
                          },
                        },
                        r && this.renderAxisLine(),
                        this.renderTicks(
                          d,
                          this.state.fontSize,
                          this.state.letterSpacing,
                        ),
                        p.J.renderCallByParent(this.props),
                      )
                );
              },
            },
          ]) && A(r.prototype, o),
          a && A(r, a),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, a;
      })(n.Component);
      T(C, "displayName", "CartesianAxis"),
        T(C, "defaultProps", {
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
    49953: (t, e, r) => {
      "use strict";
      r.d(e, { d: () => T });
      var n = r(90626),
        o = r(3316),
        i = r.n(o),
        a = r(97380),
        u = r(91038),
        c = r(50247),
        l = r(89998),
        s = r(25655),
        f = r(38475),
        p = r(58847),
        h = ["x1", "y1", "x2", "y2", "key"],
        y = ["offset"];
      function d(t) {
        return (
          (d =
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
          d(t)
        );
      }
      function v(t, e) {
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
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? v(Object(r), !0).forEach(function (e) {
                b(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function b(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != d(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != d(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == d(n) ? n : n + "") in t
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
      function g() {
        return (
          (g = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          g.apply(this, arguments)
        );
      }
      function x(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      var w = function (t) {
        var e = t.fill;
        if (!e || "none" === e) return null;
        var r = t.fillOpacity,
          o = t.x,
          i = t.y,
          a = t.width,
          u = t.height,
          c = t.ry;
        return n.createElement("rect", {
          x: o,
          y: i,
          ry: c,
          width: a,
          height: u,
          stroke: "none",
          fill: e,
          fillOpacity: r,
          className: "recharts-cartesian-grid-bg",
        });
      };
      function O(t, e) {
        var r;
        if (n.isValidElement(t)) r = n.cloneElement(t, e);
        else if (i()(t)) r = t(e);
        else {
          var o = e.x1,
            a = e.y1,
            u = e.x2,
            l = e.y2,
            s = e.key,
            f = x(e, h),
            p = (0, c.J9)(f, !1),
            d = (p.offset, x(p, y));
          r = n.createElement(
            "line",
            g({}, d, { x1: o, y1: a, x2: u, y2: l, fill: "none", key: s }),
          );
        }
        return r;
      }
      function j(t) {
        var e = t.x,
          r = t.width,
          o = t.horizontal,
          i = void 0 === o || o,
          a = t.horizontalPoints;
        if (!i || !a || !a.length) return null;
        var u = a.map(function (n, o) {
          var a = m(
            m({}, t),
            {},
            {
              x1: e,
              y1: n,
              x2: e + r,
              y2: n,
              key: "line-".concat(o),
              index: o,
            },
          );
          return O(i, a);
        });
        return n.createElement(
          "g",
          { className: "recharts-cartesian-grid-horizontal" },
          u,
        );
      }
      function S(t) {
        var e = t.y,
          r = t.height,
          o = t.vertical,
          i = void 0 === o || o,
          a = t.verticalPoints;
        if (!i || !a || !a.length) return null;
        var u = a.map(function (n, o) {
          var a = m(
            m({}, t),
            {},
            {
              x1: n,
              y1: e,
              x2: n,
              y2: e + r,
              key: "line-".concat(o),
              index: o,
            },
          );
          return O(i, a);
        });
        return n.createElement(
          "g",
          { className: "recharts-cartesian-grid-vertical" },
          u,
        );
      }
      function A(t) {
        var e = t.horizontalFill,
          r = t.fillOpacity,
          o = t.x,
          i = t.y,
          a = t.width,
          u = t.height,
          c = t.horizontalPoints,
          l = t.horizontal;
        if (!(void 0 === l || l) || !e || !e.length) return null;
        var s = c
          .map(function (t) {
            return Math.round(t + i - i);
          })
          .sort(function (t, e) {
            return t - e;
          });
        i !== s[0] && s.unshift(0);
        var f = s.map(function (t, c) {
          var l = !s[c + 1] ? i + u - t : s[c + 1] - t;
          if (l <= 0) return null;
          var f = c % e.length;
          return n.createElement("rect", {
            key: "react-".concat(c),
            y: t,
            x: o,
            height: l,
            width: a,
            stroke: "none",
            fill: e[f],
            fillOpacity: r,
            className: "recharts-cartesian-grid-bg",
          });
        });
        return n.createElement(
          "g",
          { className: "recharts-cartesian-gridstripes-horizontal" },
          f,
        );
      }
      function P(t) {
        var e = t.vertical,
          r = void 0 === e || e,
          o = t.verticalFill,
          i = t.fillOpacity,
          a = t.x,
          u = t.y,
          c = t.width,
          l = t.height,
          s = t.verticalPoints;
        if (!r || !o || !o.length) return null;
        var f = s
          .map(function (t) {
            return Math.round(t + a - a);
          })
          .sort(function (t, e) {
            return t - e;
          });
        a !== f[0] && f.unshift(0);
        var p = f.map(function (t, e) {
          var r = !f[e + 1] ? a + c - t : f[e + 1] - t;
          if (r <= 0) return null;
          var s = e % o.length;
          return n.createElement("rect", {
            key: "react-".concat(e),
            x: t,
            y: u,
            width: r,
            height: l,
            stroke: "none",
            fill: o[s],
            fillOpacity: i,
            className: "recharts-cartesian-grid-bg",
          });
        });
        return n.createElement(
          "g",
          { className: "recharts-cartesian-gridstripes-vertical" },
          p,
        );
      }
      var E = function (t, e) {
          var r = t.xAxis,
            n = t.width,
            o = t.height,
            i = t.offset;
          return (0, l.PW)(
            (0, s.f)(
              m(
                m(m({}, f.u.defaultProps), r),
                {},
                {
                  ticks: (0, l.Rh)(r, !0),
                  viewBox: { x: 0, y: 0, width: n, height: o },
                },
              ),
            ),
            i.left,
            i.left + i.width,
            e,
          );
        },
        k = function (t, e) {
          var r = t.yAxis,
            n = t.width,
            o = t.height,
            i = t.offset;
          return (0, l.PW)(
            (0, s.f)(
              m(
                m(m({}, f.u.defaultProps), r),
                {},
                {
                  ticks: (0, l.Rh)(r, !0),
                  viewBox: { x: 0, y: 0, width: n, height: o },
                },
              ),
            ),
            i.top,
            i.top + i.height,
            e,
          );
        },
        M = {
          horizontal: !0,
          vertical: !0,
          horizontalPoints: [],
          verticalPoints: [],
          stroke: "#ccc",
          fill: "none",
          verticalFill: [],
          horizontalFill: [],
        };
      function T(t) {
        var e,
          r,
          o,
          c,
          l,
          s,
          f = (0, p.yi)(),
          h = (0, p.rY)(),
          y = (0, p.hj)(),
          v = m(
            m({}, t),
            {},
            {
              stroke: null !== (e = t.stroke) && void 0 !== e ? e : M.stroke,
              fill: null !== (r = t.fill) && void 0 !== r ? r : M.fill,
              horizontal:
                null !== (o = t.horizontal) && void 0 !== o ? o : M.horizontal,
              horizontalFill:
                null !== (c = t.horizontalFill) && void 0 !== c
                  ? c
                  : M.horizontalFill,
              vertical:
                null !== (l = t.vertical) && void 0 !== l ? l : M.vertical,
              verticalFill:
                null !== (s = t.verticalFill) && void 0 !== s
                  ? s
                  : M.verticalFill,
              x: (0, u.Et)(t.x) ? t.x : y.left,
              y: (0, u.Et)(t.y) ? t.y : y.top,
              width: (0, u.Et)(t.width) ? t.width : y.width,
              height: (0, u.Et)(t.height) ? t.height : y.height,
            },
          ),
          b = v.x,
          x = v.y,
          O = v.width,
          T = v.height,
          _ = v.syncWithTicks,
          C = v.horizontalValues,
          D = v.verticalValues,
          I = (0, p.pj)(),
          N = (0, p.$G)();
        if (
          !(0, u.Et)(O) ||
          O <= 0 ||
          !(0, u.Et)(T) ||
          T <= 0 ||
          !(0, u.Et)(b) ||
          b !== +b ||
          !(0, u.Et)(x) ||
          x !== +x
        )
          return null;
        var B = v.verticalCoordinatesGenerator || E,
          R = v.horizontalCoordinatesGenerator || k,
          L = v.horizontalPoints,
          z = v.verticalPoints;
        if ((!L || !L.length) && i()(R)) {
          var U = C && C.length,
            F = R(
              {
                yAxis: N ? m(m({}, N), {}, { ticks: U ? C : N.ticks }) : void 0,
                width: f,
                height: h,
                offset: y,
              },
              !!U || _,
            );
          (0, a.R)(
            Array.isArray(F),
            "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
              d(F),
              "]",
            ),
          ),
            Array.isArray(F) && (L = F);
        }
        if ((!z || !z.length) && i()(B)) {
          var W = D && D.length,
            $ = B(
              {
                xAxis: I ? m(m({}, I), {}, { ticks: W ? D : I.ticks }) : void 0,
                width: f,
                height: h,
                offset: y,
              },
              !!W || _,
            );
          (0, a.R)(
            Array.isArray($),
            "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
              d($),
              "]",
            ),
          ),
            Array.isArray($) && (z = $);
        }
        return n.createElement(
          "g",
          { className: "recharts-cartesian-grid" },
          n.createElement(w, {
            fill: v.fill,
            fillOpacity: v.fillOpacity,
            x: v.x,
            y: v.y,
            width: v.width,
            height: v.height,
            ry: v.ry,
          }),
          n.createElement(
            j,
            g({}, v, { offset: y, horizontalPoints: L, xAxis: I, yAxis: N }),
          ),
          n.createElement(
            S,
            g({}, v, { offset: y, verticalPoints: z, xAxis: I, yAxis: N }),
          ),
          n.createElement(A, g({}, v, { horizontalPoints: L })),
          n.createElement(P, g({}, v, { verticalPoints: z })),
        );
      }
      T.displayName = "CartesianGrid";
    },
    82780: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => x });
      var n = r(90626),
        o = r(68841),
        i = r(49891),
        a = r(50247),
        u = [
          "offset",
          "layout",
          "width",
          "dataKey",
          "data",
          "dataPointFormatter",
          "xAxis",
          "yAxis",
        ];
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
            if ("string" == typeof t) return f(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return f(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function p(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, g(n.key), n);
        }
      }
      function y(t, e, r) {
        return (
          (e = v(e)),
          (function (t, e) {
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
          })(
            t,
            d()
              ? Reflect.construct(e, r || [], v(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function d() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (d = function () {
          return !!t;
        })();
      }
      function v(t) {
        return (
          (v = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          v(t)
        );
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
          if ("object" != c(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != c(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == c(e) ? e : e + "";
      }
      var x = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            y(this, e, arguments)
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && m(t, e);
          })(e, t),
          (r = e),
          (c = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.offset,
                  r = t.layout,
                  c = t.width,
                  f = t.dataKey,
                  h = t.data,
                  y = t.dataPointFormatter,
                  d = t.xAxis,
                  v = t.yAxis,
                  m = p(t, u),
                  b = (0, a.J9)(m, !1);
                "x" === this.props.direction &&
                  "number" !== d.type &&
                  (0, o.A)(!1);
                var g = h.map(function (t) {
                  var o = y(t, f),
                    a = o.x,
                    u = o.y,
                    p = o.value,
                    h = o.errorVal;
                  if (!h) return null;
                  var m,
                    g,
                    x = [];
                  if (Array.isArray(h)) {
                    var w = s(h, 2);
                    (m = w[0]), (g = w[1]);
                  } else m = g = h;
                  if ("vertical" === r) {
                    var O = d.scale,
                      j = u + e,
                      S = j + c,
                      A = j - c,
                      P = O(p - m),
                      E = O(p + g);
                    x.push({ x1: E, y1: S, x2: E, y2: A }),
                      x.push({ x1: P, y1: j, x2: E, y2: j }),
                      x.push({ x1: P, y1: S, x2: P, y2: A });
                  } else if ("horizontal" === r) {
                    var k = v.scale,
                      M = a + e,
                      T = M - c,
                      _ = M + c,
                      C = k(p - m),
                      D = k(p + g);
                    x.push({ x1: T, y1: D, x2: _, y2: D }),
                      x.push({ x1: M, y1: C, x2: M, y2: D }),
                      x.push({ x1: T, y1: C, x2: _, y2: C });
                  }
                  return n.createElement(
                    i.W,
                    l(
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
                      b,
                    ),
                    x.map(function (t) {
                      return n.createElement(
                        "line",
                        l({}, t, {
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
                return n.createElement(
                  i.W,
                  { className: "recharts-errorBars" },
                  g,
                );
              },
            },
          ]) && h(r.prototype, c),
          f && h(r, f),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, c, f;
      })(n.Component);
      b(x, "defaultProps", {
        stroke: "black",
        strokeWidth: 1.5,
        width: 5,
        offset: 0,
        layout: "horizontal",
      }),
        b(x, "displayName", "ErrorBar");
    },
    76549: (t, e, r) => {
      "use strict";
      r.d(e, { N: () => R });
      var n = r(90626),
        o = r(57487),
        i = r(3316),
        a = r.n(i),
        u = r(64609),
        c = r.n(u),
        l = r(58782),
        s = r.n(l),
        f = r(90018),
        p = r(68428),
        h = r(17891),
        y = r(49891),
        d = r(94816),
        v = r(82780),
        m = r(91038),
        b = r(50247),
        g = r(1036),
        x = r(89998),
        w = ["type", "layout", "connectNulls", "ref"],
        O = ["key"];
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
      function S(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      function E(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? P(Object(r), !0).forEach(function (e) {
                N(t, e, r[e]);
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
      function k(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return M(t);
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
            if ("string" == typeof t) return M(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return M(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function M(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function T(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, B(n.key), n);
        }
      }
      function _(t, e, r) {
        return (
          (e = D(e)),
          (function (t, e) {
            if (e && ("object" === j(e) || "function" == typeof e)) return e;
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
          })(
            t,
            C()
              ? Reflect.construct(e, r || [], D(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function C() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (C = function () {
          return !!t;
        })();
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
      function I(t, e) {
        return (
          (I = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          I(t, e)
        );
      }
      function N(t, e, r) {
        return (
          (e = B(e)) in t
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
      function B(t) {
        var e = (function (t, e) {
          if ("object" != j(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != j(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == j(e) ? e : e + "";
      }
      var R = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            N((t = _(this, e, [].concat(n))), "state", {
              isAnimationFinished: !0,
              totalLength: 0,
            }),
            N(t, "generateSimpleStrokeDasharray", function (t, e) {
              return "".concat(e, "px ").concat(t - e, "px");
            }),
            N(t, "getStrokeDasharray", function (r, n, o) {
              var i = o.reduce(function (t, e) {
                return t + e;
              });
              if (!i) return t.generateSimpleStrokeDasharray(n, r);
              for (
                var a = Math.floor(r / i),
                  u = r % i,
                  c = n - r,
                  l = [],
                  s = 0,
                  f = 0;
                s < o.length;
                f += o[s], ++s
              )
                if (f + o[s] > u) {
                  l = [].concat(k(o.slice(0, s)), [u - f]);
                  break;
                }
              var p = l.length % 2 == 0 ? [0, c] : [c];
              return []
                .concat(k(e.repeat(o, a)), k(l), p)
                .map(function (t) {
                  return "".concat(t, "px");
                })
                .join(", ");
            }),
            N(t, "id", (0, m.NF)("recharts-line-")),
            N(t, "pathRef", function (e) {
              t.mainCurve = e;
            }),
            N(t, "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 }),
                t.props.onAnimationEnd && t.props.onAnimationEnd();
            }),
            N(t, "handleAnimationStart", function () {
              t.setState({ isAnimationFinished: !1 }),
                t.props.onAnimationStart && t.props.onAnimationStart();
            }),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && I(t, e);
          })(e, t),
          (r = e),
          (u = [
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
                  var r = t.length % 2 != 0 ? [].concat(k(t), [0]) : t,
                    n = [],
                    o = 0;
                  o < e;
                  ++o
                )
                  n = [].concat(k(n), k(r));
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
                  var o = e.key,
                    i = S(e, O),
                    u = (0, f.A)(
                      "recharts-line-dot",
                      "boolean" != typeof t ? t.className : "",
                    );
                  r = n.createElement(h.c, A({ key: o }, i, { className: u }));
                }
                return r;
              },
            },
          ]),
          (i = [
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
                  l = (0, b.aS)(c, v.u);
                if (!l) return null;
                var s = function (t, e) {
                    return {
                      x: t.x,
                      y: t.y,
                      value: t.value,
                      errorVal: (0, x.kr)(t.payload, e),
                    };
                  },
                  f = { clipPath: t ? "url(#clipPath-".concat(e, ")") : null };
                return n.createElement(
                  y.W,
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
              value: function (t, r, o) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var i = this.props,
                  a = i.dot,
                  u = i.points,
                  c = i.dataKey,
                  l = (0, b.J9)(this.props, !1),
                  s = (0, b.J9)(a, !0),
                  f = u.map(function (t, r) {
                    var n = E(
                      E(E({ key: "dot-".concat(r), r: 3 }, l), s),
                      {},
                      {
                        value: t.value,
                        dataKey: c,
                        cx: t.x,
                        cy: t.y,
                        index: r,
                        payload: t.payload,
                      },
                    );
                    return e.renderDotItem(a, n);
                  }),
                  p = {
                    clipPath: t
                      ? "url(#clipPath-".concat(r ? "" : "dots-").concat(o, ")")
                      : null,
                  };
                return n.createElement(
                  y.W,
                  A({ className: "recharts-line-dots", key: "dots" }, p),
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
                  l = (i.ref, S(i, w)),
                  s = E(
                    E(
                      E({}, (0, b.J9)(l, !0)),
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
                  p.I,
                  A({}, s, { pathRef: this.pathRef }),
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
                  y = i.width,
                  d = i.height,
                  v = this.state,
                  b = v.prevPoints,
                  g = v.totalLength;
                return n.createElement(
                  o.Ay,
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
                              a = (0, m.Dj)(n.x, t.x),
                              u = (0, m.Dj)(n.y, t.y);
                            return E(E({}, t), {}, { x: a(o), y: u(o) });
                          }
                          if (h) {
                            var c = (0, m.Dj)(2 * y, t.x),
                              l = (0, m.Dj)(d / 2, t.y);
                            return E(E({}, t), {}, { x: c(o), y: l(o) });
                          }
                          return E(E({}, t), {}, { x: t.x, y: t.y });
                        });
                      return r.renderCurveStatically(c, t, e);
                    }
                    var l,
                      s = (0, m.Dj)(0, g)(o);
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
                  O = (0, f.A)("recharts-line", a),
                  j = u && u.allowDataOverflow,
                  S = l && l.allowDataOverflow,
                  A = j || S,
                  P = c()(g) ? this.id : g,
                  E =
                    null !== (t = (0, b.J9)(o, !1)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = E.r,
                  M = void 0 === k ? 3 : k,
                  T = E.strokeWidth,
                  _ = void 0 === T ? 2 : T,
                  C = ((0, b.sT)(o) ? o : {}).clipDot,
                  D = void 0 === C || C,
                  I = 2 * M + _;
                return n.createElement(
                  y.W,
                  { className: O },
                  j || S
                    ? n.createElement(
                        "defs",
                        null,
                        n.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(P) },
                          n.createElement("rect", {
                            x: j ? p : p - h / 2,
                            y: S ? s : s - v / 2,
                            width: j ? h : 2 * h,
                            height: S ? v : 2 * v,
                          }),
                        ),
                        !D &&
                          n.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(P) },
                            n.createElement("rect", {
                              x: p - I / 2,
                              y: s - I / 2,
                              width: h + I,
                              height: v + I,
                            }),
                          ),
                      )
                    : null,
                  !w && this.renderCurve(A, P),
                  this.renderErrorBar(A, P),
                  (w || o) && this.renderDots(A, D, P),
                  (!m || x) && d.Z.renderCallByParent(this.props, i),
                );
              },
            },
          ]) && T(r.prototype, i),
          u && T(r, u),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, i, u;
      })(n.PureComponent);
      N(R, "displayName", "Line"),
        N(R, "defaultProps", {
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
          isAnimationActive: !g.m.isSsr,
          animateNewValues: !0,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
          hide: !1,
          label: !1,
        }),
        N(R, "getComposedData", function (t) {
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
                var l = (0, x.kr)(t, a);
                return "horizontal" === f
                  ? {
                      x: (0, x.nb)({
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
                      y: (0, x.nb)({
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
    15708: (t, e, r) => {
      "use strict";
      r.d(e, { e: () => _ });
      var n = r(90626),
        o = r(3316),
        i = r.n(o),
        a = r(49556),
        u = r.n(a),
        c = r(90018),
        l = r(49891),
        s = r(39864),
        f = r(61353),
        p = r(91038),
        h = r(5608),
        y = r(97380),
        d = r(50247),
        v = r(58847);
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
      function b(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, P(n.key), n);
        }
      }
      function g(t, e, r) {
        return (
          (e = w(e)),
          (function (t, e) {
            if (e && ("object" === m(e) || "function" == typeof e)) return e;
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
          })(
            t,
            x()
              ? Reflect.construct(e, r || [], w(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function x() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (x = function () {
          return !!t;
        })();
      }
      function w(t) {
        return (
          (w = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          w(t)
        );
      }
      function O(t, e) {
        return (
          (O = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          O(t, e)
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
          (e = P(e)) in t
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
      function P(t) {
        var e = (function (t, e) {
          if ("object" != m(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != m(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == m(e) ? e : e + "";
      }
      function E(t, e) {
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
            if ("string" == typeof t) return k(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return k(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function k(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
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
      function T(t) {
        var e = t.x,
          r = t.y,
          o = t.segment,
          a = t.xAxisId,
          m = t.yAxisId,
          b = t.shape,
          g = t.className,
          x = t.alwaysShow,
          w = (0, v.Yp)(),
          O = (0, v.AF)(a),
          j = (0, v.Nk)(m),
          A = (0, v.sk)();
        if (!w || !A) return null;
        (0, y.R)(
          void 0 === x,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var P = (function (t, e, r, n, o, i, a, c, l) {
          var s = o.x,
            p = o.y,
            h = o.width,
            y = o.height;
          if (r) {
            var d = l.y,
              v = t.y.apply(d, { position: i });
            if ((0, f.R)(l, "discard") && !t.y.isInRange(v)) return null;
            var m = [
              { x: s + h, y: v },
              { x: s, y: v },
            ];
            return "left" === c ? m.reverse() : m;
          }
          if (e) {
            var b = l.x,
              g = t.x.apply(b, { position: i });
            if ((0, f.R)(l, "discard") && !t.x.isInRange(g)) return null;
            var x = [
              { x: g, y: p + y },
              { x: g, y: p },
            ];
            return "top" === a ? x.reverse() : x;
          }
          if (n) {
            var w = l.segment.map(function (e) {
              return t.apply(e, { position: i });
            });
            return (0, f.R)(l, "discard") &&
              u()(w, function (e) {
                return !t.isInRange(e);
              })
              ? null
              : w;
          }
          return null;
        })(
          (0, h.P2)({ x: O.scale, y: j.scale }),
          (0, p.vh)(e),
          (0, p.vh)(r),
          o && 2 === o.length,
          A,
          t.position,
          O.orientation,
          j.orientation,
          t,
        );
        if (!P) return null;
        var k = E(P, 2),
          T = k[0],
          _ = T.x,
          C = T.y,
          D = k[1],
          I = D.x,
          N = D.y,
          B = S(
            S(
              {
                clipPath: (0, f.R)(t, "hidden")
                  ? "url(#".concat(w, ")")
                  : void 0,
              },
              (0, d.J9)(t, !0),
            ),
            {},
            { x1: _, y1: C, x2: I, y2: N },
          );
        return n.createElement(
          l.W,
          { className: (0, c.A)("recharts-reference-line", g) },
          (function (t, e) {
            return n.isValidElement(t)
              ? n.cloneElement(t, e)
              : i()(t)
                ? t(e)
                : n.createElement(
                    "line",
                    M({}, e, { className: "recharts-reference-line-line" }),
                  );
          })(b, B),
          s.J.renderCallByParent(t, (0, h.vh)({ x1: _, y1: C, x2: I, y2: N })),
        );
      }
      var _ = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            g(this, e, arguments)
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && O(t, e);
          })(e, t),
          (r = e),
          (o = [
            {
              key: "render",
              value: function () {
                return n.createElement(T, this.props);
              },
            },
          ]) && b(r.prototype, o),
          i && b(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, i;
      })(n.Component);
      A(_, "displayName", "ReferenceLine"),
        A(_, "defaultProps", {
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
    36058: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => b });
      var n = r(90626),
        o = r(90018),
        i = r(58847),
        a = r(38475),
        u = r(89998);
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
      function l(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, d(n.key), n);
        }
      }
      function s(t, e, r) {
        return (
          (e = p(e)),
          (function (t, e) {
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
          })(
            t,
            f()
              ? Reflect.construct(e, r || [], p(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function f() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (f = function () {
          return !!t;
        })();
      }
      function p(t) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          p(t)
        );
      }
      function h(t, e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          h(t, e)
        );
      }
      function y(t, e, r) {
        return (
          (e = d(e)) in t
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
      function d(t) {
        var e = (function (t, e) {
          if ("object" != c(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != c(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == c(e) ? e : e + "";
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
      function m(t) {
        var e = t.xAxisId,
          r = (0, i.yi)(),
          c = (0, i.rY)(),
          l = (0, i.AF)(e);
        return null == l
          ? null
          : n.createElement(
              a.u,
              v({}, l, {
                className: (0, o.A)(
                  "recharts-".concat(l.axisType, " ").concat(l.axisType),
                  l.className,
                ),
                viewBox: { x: 0, y: 0, width: r, height: c },
                ticksGenerator: function (t) {
                  return (0, u.Rh)(t, !0);
                },
              }),
            );
      }
      var b = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            s(this, e, arguments)
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && h(t, e);
          })(e, t),
          (r = e),
          (o = [
            {
              key: "render",
              value: function () {
                return n.createElement(m, this.props);
              },
            },
          ]) && l(r.prototype, o),
          i && l(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, i;
      })(n.Component);
      y(b, "displayName", "XAxis"),
        y(b, "defaultProps", {
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
    55241: (t, e, r) => {
      "use strict";
      r.d(e, { h: () => b });
      var n = r(90626),
        o = r(90018),
        i = r(58847),
        a = r(38475),
        u = r(89998);
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
      function l(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, d(n.key), n);
        }
      }
      function s(t, e, r) {
        return (
          (e = p(e)),
          (function (t, e) {
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
          })(
            t,
            f()
              ? Reflect.construct(e, r || [], p(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function f() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (f = function () {
          return !!t;
        })();
      }
      function p(t) {
        return (
          (p = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          p(t)
        );
      }
      function h(t, e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          h(t, e)
        );
      }
      function y(t, e, r) {
        return (
          (e = d(e)) in t
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
      function d(t) {
        var e = (function (t, e) {
          if ("object" != c(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != c(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == c(e) ? e : e + "";
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
      var m = function (t) {
          var e = t.yAxisId,
            r = (0, i.yi)(),
            c = (0, i.rY)(),
            l = (0, i.Nk)(e);
          return null == l
            ? null
            : n.createElement(
                a.u,
                v({}, l, {
                  className: (0, o.A)(
                    "recharts-".concat(l.axisType, " ").concat(l.axisType),
                    l.className,
                  ),
                  viewBox: { x: 0, y: 0, width: r, height: c },
                  ticksGenerator: function (t) {
                    return (0, u.Rh)(t, !0);
                  },
                }),
              );
        },
        b = (function (t) {
          function e() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              s(this, e, arguments)
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && h(t, e);
            })(e, t),
            (r = e),
            (o = [
              {
                key: "render",
                value: function () {
                  return n.createElement(m, this.props);
                },
              },
            ]) && l(r.prototype, o),
            i && l(r, i),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, o, i;
        })(n.Component);
      y(b, "displayName", "YAxis"),
        y(b, "defaultProps", {
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
    25655: (t, e, r) => {
      "use strict";
      r.d(e, { f: () => d });
      var n = r(3316),
        o = r.n(n),
        i = r(91038),
        a = r(41242),
        u = r(1036),
        c = r(5608);
      function l(t, e, r) {
        if (e < 1) return [];
        if (1 === e && void 0 === r) return t;
        for (var n = [], o = 0; o < t.length; o += e) {
          if (void 0 !== r && !0 !== r(t[o])) return;
          n.push(t[o]);
        }
        return n;
      }
      function s(t, e, r, n, o) {
        if (t * e < t * n || t * e > t * o) return !1;
        var i = r();
        return t * (e - (t * i) / 2 - n) >= 0 && t * (e + (t * i) / 2 - o) <= 0;
      }
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
                y(t, e, r[e]);
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
      function y(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != f(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != f(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == f(n) ? n : n + "") in t
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
      function d(t, e, r) {
        var n = t.tick,
          f = t.ticks,
          p = t.viewBox,
          y = t.minTickGap,
          d = t.orientation,
          v = t.interval,
          m = t.tickFormatter,
          b = t.unit,
          g = t.angle;
        if (!f || !f.length || !n) return [];
        if ((0, i.Et)(v) || u.m.isSsr)
          return (function (t, e) {
            return l(t, e + 1);
          })(f, "number" == typeof v && (0, i.Et)(v) ? v : 0);
        var x = [],
          w = "top" === d || "bottom" === d ? "width" : "height",
          O =
            b && "width" === w
              ? (0, a.Pu)(b, { fontSize: e, letterSpacing: r })
              : { width: 0, height: 0 },
          j = function (t, n) {
            var i = o()(m) ? m(t.value, n) : t.value;
            return "width" === w
              ? (function (t, e, r) {
                  var n = {
                    width: t.width + e.width,
                    height: t.height + e.height,
                  };
                  return (0, c.bx)(n, r);
                })((0, a.Pu)(i, { fontSize: e, letterSpacing: r }), O, g)
              : (0, a.Pu)(i, { fontSize: e, letterSpacing: r })[w];
          },
          S = f.length >= 2 ? (0, i.sA)(f[1].coordinate - f[0].coordinate) : 1,
          A = (function (t, e, r) {
            var n = "width" === r,
              o = t.x,
              i = t.y,
              a = t.width,
              u = t.height;
            return 1 === e
              ? { start: n ? o : i, end: n ? o + a : i + u }
              : { start: n ? o + a : i + u, end: n ? o : i };
          })(p, S, w);
        return "equidistantPreserveStart" === v
          ? (function (t, e, r, n, o) {
              for (
                var i,
                  a = (n || []).slice(),
                  u = e.start,
                  c = e.end,
                  f = 0,
                  p = 1,
                  h = u,
                  y = function () {
                    var e = null == n ? void 0 : n[f];
                    if (void 0 === e) return { v: l(n, p) };
                    var i,
                      a = f,
                      y = function () {
                        return void 0 === i && (i = r(e, a)), i;
                      },
                      d = e.coordinate,
                      v = 0 === f || s(t, d, y, h, c);
                    v || ((f = 0), (h = u), (p += 1)),
                      v && ((h = d + t * (y() / 2 + o)), (f += p));
                  };
                p <= a.length;
              )
                if ((i = y())) return i.v;
              return [];
            })(S, A, j, f, y)
          : ((x =
              "preserveStart" === v || "preserveStartEnd" === v
                ? (function (t, e, r, n, o, i) {
                    var a = (n || []).slice(),
                      u = a.length,
                      c = e.start,
                      l = e.end;
                    if (i) {
                      var f = n[u - 1],
                        p = r(f, u - 1),
                        y = t * (f.coordinate + (t * p) / 2 - l);
                      (a[u - 1] = f =
                        h(
                          h({}, f),
                          {},
                          {
                            tickCoord:
                              y > 0 ? f.coordinate - y * t : f.coordinate,
                          },
                        )),
                        s(
                          t,
                          f.tickCoord,
                          function () {
                            return p;
                          },
                          c,
                          l,
                        ) &&
                          ((l = f.tickCoord - t * (p / 2 + o)),
                          (a[u - 1] = h(h({}, f), {}, { isShow: !0 })));
                    }
                    for (
                      var d = i ? u - 1 : u,
                        v = function (e) {
                          var n,
                            i = a[e],
                            u = function () {
                              return void 0 === n && (n = r(i, e)), n;
                            };
                          if (0 === e) {
                            var f = t * (i.coordinate - (t * u()) / 2 - c);
                            a[e] = i = h(
                              h({}, i),
                              {},
                              {
                                tickCoord:
                                  f < 0 ? i.coordinate - f * t : i.coordinate,
                              },
                            );
                          } else
                            a[e] = i = h(
                              h({}, i),
                              {},
                              { tickCoord: i.coordinate },
                            );
                          s(t, i.tickCoord, u, c, l) &&
                            ((c = i.tickCoord + t * (u() / 2 + o)),
                            (a[e] = h(h({}, i), {}, { isShow: !0 })));
                        },
                        m = 0;
                      m < d;
                      m++
                    )
                      v(m);
                    return a;
                  })(S, A, j, f, y, "preserveStartEnd" === v)
                : (function (t, e, r, n, o) {
                    for (
                      var i = (n || []).slice(),
                        a = i.length,
                        u = e.start,
                        c = e.end,
                        l = function (e) {
                          var n,
                            l = i[e],
                            f = function () {
                              return void 0 === n && (n = r(l, e)), n;
                            };
                          if (e === a - 1) {
                            var p = t * (l.coordinate + (t * f()) / 2 - c);
                            i[e] = l = h(
                              h({}, l),
                              {},
                              {
                                tickCoord:
                                  p > 0 ? l.coordinate - p * t : l.coordinate,
                              },
                            );
                          } else
                            i[e] = l = h(
                              h({}, l),
                              {},
                              { tickCoord: l.coordinate },
                            );
                          s(t, l.tickCoord, f, u, c) &&
                            ((c = l.tickCoord - t * (f() / 2 + o)),
                            (i[e] = h(h({}, l), {}, { isShow: !0 })));
                        },
                        f = a - 1;
                      f >= 0;
                      f--
                    )
                      l(f);
                    return i;
                  })(S, A, j, f, y)),
            x.filter(function (t) {
              return t.isShow;
            }));
      }
    },
    56555: (t, e, r) => {
      "use strict";
      r.d(e, { X: () => Ot });
      var n,
        o = r(1839),
        i = r(90626),
        a = r(90018),
        u = r(57487),
        c = r(3316),
        l = r.n(c),
        s = r(82544),
        f = r.n(s),
        p = r(64609),
        h = r.n(p),
        y = r(27367),
        d = r.n(y),
        v = r(58782),
        m = r.n(v),
        b = r(68428),
        g = r(17891),
        x = r(49891),
        w = r(94816),
        O = r(1036),
        j = r(91038),
        S = r(89998),
        A = r(50247),
        P = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
        E = ["key"];
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
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      function T() {
        return (
          (T = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          T.apply(this, arguments)
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
      function C(t) {
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
      function D(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, z(n.key), n);
        }
      }
      function I(t, e, r) {
        return (
          (e = B(e)),
          (function (t, e) {
            if (e && ("object" === k(e) || "function" == typeof e)) return e;
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
          })(
            t,
            N()
              ? Reflect.construct(e, r || [], B(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function N() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (N = function () {
          return !!t;
        })();
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
      function L(t, e, r) {
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
          if ("object" != k(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != k(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == k(e) ? e : e + "";
      }
      var U = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            L((t = I(this, e, [].concat(n))), "state", {
              isAnimationFinished: !0,
            }),
            L(t, "id", (0, j.NF)("recharts-area-")),
            L(t, "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), l()(e) && e();
            }),
            L(t, "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), l()(e) && e();
            }),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && R(t, e);
          })(e, t),
          (r = e),
          (o = [
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
              value: function (t, r, n) {
                var o = this.props.isAnimationActive,
                  a = this.state.isAnimationFinished;
                if (o && !a) return null;
                var u = this.props,
                  c = u.dot,
                  l = u.points,
                  s = u.dataKey,
                  f = (0, A.J9)(this.props, !1),
                  p = (0, A.J9)(c, !0),
                  h = l.map(function (t, r) {
                    var n = C(
                      C(C({ key: "dot-".concat(r), r: 3 }, f), p),
                      {},
                      {
                        index: r,
                        cx: t.x,
                        cy: t.y,
                        dataKey: s,
                        value: t.value,
                        payload: t.payload,
                        points: l,
                      },
                    );
                    return e.renderDotItem(c, n);
                  }),
                  y = {
                    clipPath: t
                      ? "url(#clipPath-".concat(r ? "" : "dots-").concat(n, ")")
                      : null,
                  };
                return i.createElement(
                  x.W,
                  T({ className: "recharts-area-dots" }, y),
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
                  (0, j.Et)(r) && "number" == typeof r
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
                  (0, j.Et)(l)
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
                  (0, j.Et)(r) && "number" == typeof r
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
                  (0, j.Et)(l)
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
                  f = (o.ref, M(o, P));
                return i.createElement(
                  x.W,
                  { clipPath: r ? "url(#clipPath-".concat(n, ")") : null },
                  i.createElement(
                    b.I,
                    T({}, (0, A.J9)(f, !0), {
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
                      b.I,
                      T({}, (0, A.J9)(this.props, !1), {
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
                      b.I,
                      T({}, (0, A.J9)(this.props, !1), {
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
                  y = this.state,
                  v = y.prevPoints,
                  m = y.prevBaseLine;
                return i.createElement(
                  u.Ay,
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
                              o = (0, j.Dj)(n.x, t.x),
                              i = (0, j.Dj)(n.y, t.y);
                            return C(C({}, t), {}, { x: o(u), y: i(u) });
                          }
                          return t;
                        });
                      return (
                        (c =
                          (0, j.Et)(a) && "number" == typeof a
                            ? (0, j.Dj)(m, a)(u)
                            : h()(a) || d()(a)
                              ? (0, j.Dj)(m, 0)(u)
                              : a.map(function (t, e) {
                                  var r = Math.floor(e * l);
                                  if (m[r]) {
                                    var n = m[r],
                                      o = (0, j.Dj)(n.x, t.x),
                                      i = (0, j.Dj)(n.y, t.y);
                                    return C(
                                      C({}, t),
                                      {},
                                      { x: o(u), y: i(u) },
                                    );
                                  }
                                  return t;
                                })),
                        r.renderAreaStatically(s, c, t, e)
                      );
                    }
                    return i.createElement(
                      x.W,
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
                        x.W,
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
                  y = e.height,
                  d = e.isAnimationActive,
                  v = e.id;
                if (r || !o || !o.length) return null;
                var m = this.state.isAnimationFinished,
                  b = 1 === o.length,
                  g = (0, a.A)("recharts-area", u),
                  O = s && s.allowDataOverflow,
                  j = f && f.allowDataOverflow,
                  S = O || j,
                  P = h()(v) ? this.id : v,
                  E =
                    null !== (t = (0, A.J9)(n, !1)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = E.r,
                  M = void 0 === k ? 3 : k,
                  T = E.strokeWidth,
                  _ = void 0 === T ? 2 : T,
                  C = ((0, A.sT)(n) ? n : {}).clipDot,
                  D = void 0 === C || C,
                  I = 2 * M + _;
                return i.createElement(
                  x.W,
                  { className: g },
                  O || j
                    ? i.createElement(
                        "defs",
                        null,
                        i.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(P) },
                          i.createElement("rect", {
                            x: O ? l : l - p / 2,
                            y: j ? c : c - y / 2,
                            width: O ? p : 2 * p,
                            height: j ? y : 2 * y,
                          }),
                        ),
                        !D &&
                          i.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(P) },
                            i.createElement("rect", {
                              x: l - I / 2,
                              y: c - I / 2,
                              width: p + I,
                              height: y + I,
                            }),
                          ),
                      )
                    : null,
                  b ? null : this.renderArea(S, P),
                  (n || b) && this.renderDots(S, D, P),
                  (!d || m) && w.Z.renderCallByParent(this.props, o),
                );
              },
            },
          ]) && D(r.prototype, n),
          o && D(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(i.PureComponent);
      (n = U),
        L(U, "displayName", "Area"),
        L(U, "defaultProps", {
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
          isAnimationActive: !O.m.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        L(U, "getBaseValue", function (t, e, r, n) {
          var o = t.layout,
            i = t.baseValue,
            a = e.props.baseValue,
            u = null != a ? a : i;
          if ((0, j.Et)(u) && "number" == typeof u) return u;
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
        L(U, "getComposedData", function (t) {
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
            y = t.offset,
            d = r.layout,
            v = f && f.length,
            m = n.getBaseValue(r, o, i, a),
            b = "horizontal" === d,
            g = !1,
            x = h.map(function (t, e) {
              var r;
              v
                ? (r = f[p + e])
                : ((r = (0, S.kr)(t, s)),
                  Array.isArray(r) ? (g = !0) : (r = [m, r]));
              var n = null == r[1] || (v && null == (0, S.kr)(t, s));
              return b
                ? {
                    x: (0, S.nb)({
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
                    y: (0, S.nb)({
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
            C({ points: x, baseLine: e, layout: d, isRange: g }, y)
          );
        }),
        L(U, "renderDotItem", function (t, e) {
          var r;
          if (i.isValidElement(t)) r = i.cloneElement(t, e);
          else if (l()(t)) r = t(e);
          else {
            var n = (0, a.A)(
                "recharts-area-dot",
                "boolean" != typeof t ? t.className : "",
              ),
              o = e.key,
              u = M(e, E);
            r = i.createElement(g.c, T({}, u, { key: o, className: n }));
          }
          return r;
        });
      var F = r(62059),
        W = r(76549);
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
      function q(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Y(n.key), n);
        }
      }
      function X(t, e, r) {
        return (
          (e = K(e)),
          (function (t, e) {
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
          })(
            t,
            H()
              ? Reflect.construct(e, r || [], K(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function H() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (H = function () {
          return !!t;
        })();
      }
      function K(t) {
        return (
          (K = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          K(t)
        );
      }
      function V(t, e) {
        return (
          (V = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          V(t, e)
        );
      }
      function G(t, e, r) {
        return (
          (e = Y(e)) in t
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
      function Y(t) {
        var e = (function (t, e) {
          if ("object" != $(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != $(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == $(e) ? e : e + "";
      }
      var J = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            X(this, e, arguments)
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && V(t, e);
          })(e, t),
          (r = e),
          (n = [
            {
              key: "render",
              value: function () {
                return null;
              },
            },
          ]) && q(r.prototype, n),
          o && q(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(i.Component);
      G(J, "displayName", "ZAxis"),
        G(J, "defaultProps", {
          zAxisId: 0,
          range: [64, 64],
          scale: "auto",
          type: "number",
        });
      var Z = r(82780),
        Q = r(49404),
        tt = r(62426),
        et = r(59098),
        rt = r(17798),
        nt = ["option", "isActive"];
      function ot() {
        return (
          (ot = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          ot.apply(this, arguments)
        );
      }
      function it(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      function at(t) {
        var e = t.option,
          r = t.isActive,
          n = it(t, nt);
        return "string" == typeof e
          ? i.createElement(
              rt.yp,
              ot(
                {
                  option: i.createElement(et.i, ot({ type: e }, n)),
                  isActive: r,
                  shapeType: "symbols",
                },
                n,
              ),
            )
          : i.createElement(
              rt.yp,
              ot({ option: e, isActive: r, shapeType: "symbols" }, n),
            );
      }
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
      function ct() {
        return (
          (ct = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          ct.apply(this, arguments)
        );
      }
      function lt(t, e) {
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
      function st(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? lt(Object(r), !0).forEach(function (e) {
                vt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : lt(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function ft(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, mt(n.key), n);
        }
      }
      function pt(t, e, r) {
        return (
          (e = yt(e)),
          (function (t, e) {
            if (e && ("object" === ut(e) || "function" == typeof e)) return e;
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
          })(
            t,
            ht()
              ? Reflect.construct(e, r || [], yt(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function ht() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (ht = function () {
          return !!t;
        })();
      }
      function yt(t) {
        return (
          (yt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          yt(t)
        );
      }
      function dt(t, e) {
        return (
          (dt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          dt(t, e)
        );
      }
      function vt(t, e, r) {
        return (
          (e = mt(e)) in t
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
      function mt(t) {
        var e = (function (t, e) {
          if ("object" != ut(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != ut(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == ut(e) ? e : e + "";
      }
      var bt = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            vt((t = pt(this, e, [].concat(n))), "state", {
              isAnimationFinished: !1,
            }),
            vt(t, "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 });
            }),
            vt(t, "handleAnimationStart", function () {
              t.setState({ isAnimationFinished: !1 });
            }),
            vt(t, "id", (0, j.NF)("recharts-scatter-")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && dt(t, e);
          })(e, t),
          (r = e),
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
          ]),
          (n = [
            {
              key: "renderSymbolsStatically",
              value: function (t) {
                var e = this,
                  r = this.props,
                  n = r.shape,
                  o = r.activeShape,
                  a = r.activeIndex,
                  u = (0, A.J9)(this.props, !1);
                return t.map(function (t, r) {
                  var c = a === r,
                    l = c ? o : n,
                    s = st(st({}, u), t);
                  return i.createElement(
                    x.W,
                    ct(
                      {
                        className: "recharts-scatter-symbol",
                        key: "symbol-"
                          .concat(null == t ? void 0 : t.cx, "-")
                          .concat(null == t ? void 0 : t.cy, "-")
                          .concat(null == t ? void 0 : t.size, "-")
                          .concat(r),
                      },
                      (0, tt.XC)(e.props, t, r),
                      { role: "img" },
                    ),
                    i.createElement(
                      at,
                      ct(
                        { option: l, isActive: c, key: "symbol-".concat(r) },
                        s,
                      ),
                    ),
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
                  u.Ay,
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
                          var o = (0, j.Dj)(r.cx, t.cx),
                            i = (0, j.Dj)(r.cy, t.cy),
                            a = (0, j.Dj)(r.size, t.size);
                          return st(
                            st({}, t),
                            {},
                            { cx: o(n), cy: i(n), size: a(n) },
                          );
                        }
                        var u = (0, j.Dj)(0, t.size);
                        return st(st({}, t), {}, { size: u(n) });
                      });
                    return i.createElement(
                      x.W,
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
                  a = (0, A.aS)(o, Z.u);
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
                            errorVal: (0, S.kr)(t, e),
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
                  c = (0, A.J9)(this.props, !1),
                  s = (0, A.J9)(o, !1);
                if ("joint" === a)
                  t = n.map(function (t) {
                    return { x: t.cx, y: t.cy };
                  });
                else if ("fitting" === a) {
                  var f = (0, j.jG)(n),
                    p = f.xmin,
                    h = f.xmax,
                    y = f.a,
                    d = f.b,
                    v = function (t) {
                      return y * t + d;
                    };
                  t = [
                    { x: p, y: v(p) },
                    { x: h, y: v(h) },
                  ];
                }
                var m = st(
                  st(st({}, c), {}, { fill: "none", stroke: c && c.fill }, s),
                  {},
                  { points: t },
                );
                return (
                  (e = i.isValidElement(o)
                    ? i.cloneElement(o, m)
                    : l()(o)
                      ? o(m)
                      : i.createElement(b.I, ct({}, m, { type: u }))),
                  i.createElement(
                    x.W,
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
                  y = t.id,
                  d = t.isAnimationActive;
                if (e || !r || !r.length) return null;
                var v = this.state.isAnimationFinished,
                  m = (0, a.A)("recharts-scatter", o),
                  b = u && u.allowDataOverflow,
                  g = c && c.allowDataOverflow,
                  O = b || g,
                  j = h()(y) ? this.id : y;
                return i.createElement(
                  x.W,
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
                    x.W,
                    { key: "recharts-scatter-symbols" },
                    this.renderSymbols(),
                  ),
                  (!d || v) && w.Z.renderCallByParent(this.props, r),
                );
              },
            },
          ]) && ft(r.prototype, n),
          o && ft(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(i.PureComponent);
      vt(bt, "displayName", "Scatter"),
        vt(bt, "defaultProps", {
          xAxisId: 0,
          yAxisId: 0,
          zAxisId: 0,
          legendType: "circle",
          lineType: "joint",
          lineJointType: "linear",
          data: [],
          shape: "circle",
          hide: !1,
          isAnimationActive: !O.m.isSsr,
          animationBegin: 0,
          animationDuration: 400,
          animationEasing: "linear",
        }),
        vt(bt, "getComposedData", function (t) {
          var e = t.xAxis,
            r = t.yAxis,
            n = t.zAxis,
            o = t.item,
            i = t.displayedData,
            a = t.xAxisTicks,
            u = t.yAxisTicks,
            c = t.offset,
            l = o.props.tooltipType,
            s = (0, A.aS)(o.props.children, Q.f),
            f = h()(e.dataKey) ? o.props.dataKey : e.dataKey,
            p = h()(r.dataKey) ? o.props.dataKey : r.dataKey,
            y = n && n.dataKey,
            d = n ? n.range : J.defaultProps.range,
            v = d && d[0],
            m = e.scale.bandwidth ? e.scale.bandwidth() : 0,
            b = r.scale.bandwidth ? r.scale.bandwidth() : 0,
            g = i.map(function (t, i) {
              var c = (0, S.kr)(t, f),
                d = (0, S.kr)(t, p),
                g = (!h()(y) && (0, S.kr)(t, y)) || "-",
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
                    value: d,
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
                  dataKey: y,
                  type: l,
                });
              var w = (0, S.nb)({
                  axis: e,
                  ticks: a,
                  bandSize: m,
                  entry: t,
                  index: i,
                  dataKey: f,
                }),
                O = (0, S.nb)({
                  axis: r,
                  ticks: u,
                  bandSize: b,
                  entry: t,
                  index: i,
                  dataKey: p,
                }),
                j = "-" !== g ? n.scale(g) : v,
                A = Math.sqrt(Math.max(j, 0) / Math.PI);
              return st(
                st({}, t),
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
                  node: { x: c, y: d, z: g },
                  tooltipPayload: x,
                  tooltipPosition: { x: w, y: O },
                  payload: t,
                },
                s && s[i] && s[i].props,
              );
            });
          return st({ points: g }, c);
        });
      var gt = r(36058),
        xt = r(55241),
        wt = r(5608),
        Ot = (0, o.gu)({
          chartName: "ComposedChart",
          GraphicalChild: [W.N, U, F.y, bt],
          axisComponents: [
            { axisType: "xAxis", AxisComp: gt.W },
            { axisType: "yAxis", AxisComp: xt.h },
            { axisType: "zAxis", AxisComp: J },
          ],
          formatAxisMap: wt.pr,
        });
    },
    1839: (t, e, r) => {
      "use strict";
      r.d(e, { gu: () => Ie });
      var n = r(90626),
        o = r(64609),
        i = r.n(o),
        a = r(3316),
        u = r.n(a),
        c = r(50199),
        l = r.n(c),
        s = r(52686),
        f = r.n(s),
        p = r(97825),
        h = r.n(p),
        y = r(51504),
        d = r.n(y),
        v = r(90018),
        m = r(68841),
        b = r(83457),
        g = r(49891),
        x = r(85010),
        w = r(94075),
        O = r(17891),
        j = r(33501),
        S = r(50247),
        A = r(28583),
        P = r(9675),
        E = r(89998),
        k = r(91038);
      function M(t) {
        return (
          (M =
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
          M(t)
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
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? T(Object(r), !0).forEach(function (e) {
                C(t, e, r[e]);
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
      function C(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != M(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != M(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == M(n) ? n : n + "") in t
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
      var D = ["Webkit", "Moz", "O", "ms"];
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
      function B(t, e) {
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
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? B(Object(r), !0).forEach(function (e) {
                $(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : B(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function L(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, q(n.key), n);
        }
      }
      function z(t, e, r) {
        return (
          (e = F(e)),
          (function (t, e) {
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
          })(
            t,
            U()
              ? Reflect.construct(e, r || [], F(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function U() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (U = function () {
          return !!t;
        })();
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
      function $(t, e, r) {
        return (
          (e = q(e)) in t
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
      function q(t) {
        var e = (function (t, e) {
          if ("object" != I(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != I(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == I(e) ? e : e + "";
      }
      var X = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        H = (function (t) {
          function e(t) {
            var r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              $((r = z(this, e, [t])), "handleDrag", function (t) {
                r.leaveTimer &&
                  (clearTimeout(r.leaveTimer), (r.leaveTimer = null)),
                  r.state.isTravellerMoving
                    ? r.handleTravellerMove(t)
                    : r.state.isSlideMoving && r.handleSlideDrag(t);
              }),
              $(r, "handleTouchMove", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  r.handleDrag(t.changedTouches[0]);
              }),
              $(r, "handleDragEnd", function () {
                r.setState(
                  { isTravellerMoving: !1, isSlideMoving: !1 },
                  function () {
                    var t = r.props,
                      e = t.endIndex,
                      n = t.onDragEnd,
                      o = t.startIndex;
                    null == n || n({ endIndex: e, startIndex: o });
                  },
                ),
                  r.detachDragEndListener();
              }),
              $(r, "handleLeaveWrapper", function () {
                (r.state.isTravellerMoving || r.state.isSlideMoving) &&
                  (r.leaveTimer = window.setTimeout(
                    r.handleDragEnd,
                    r.props.leaveTimeOut,
                  ));
              }),
              $(r, "handleEnterSlideOrTraveller", function () {
                r.setState({ isTextActive: !0 });
              }),
              $(r, "handleLeaveSlideOrTraveller", function () {
                r.setState({ isTextActive: !1 });
              }),
              $(r, "handleSlideDragStart", function (t) {
                var e = X(t) ? t.changedTouches[0] : t;
                r.setState({
                  isTravellerMoving: !1,
                  isSlideMoving: !0,
                  slideMoveStartX: e.pageX,
                }),
                  r.attachDragEndListener();
              }),
              (r.travellerDragStartHandlers = {
                startX: r.handleTravellerDragStart.bind(r, "startX"),
                endX: r.handleTravellerDragStart.bind(r, "endX"),
              }),
              (r.state = {}),
              r
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && W(t, e);
            })(e, t),
            (r = e),
            (i = [
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
                value: function (t, r) {
                  return n.isValidElement(t)
                    ? n.cloneElement(t, r)
                    : u()(t)
                      ? t(r)
                      : e.renderDefaultTraveller(r);
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
                    return R(
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
                              c = (0, A.z)()
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
            (o = [
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
                  var r = t.startX,
                    n = t.endX,
                    o = this.state.scaleValues,
                    i = this.props,
                    a = i.gap,
                    u = i.data.length - 1,
                    c = Math.min(r, n),
                    l = Math.max(r, n),
                    s = e.getIndexInRange(o, c),
                    f = e.getIndexInRange(o, l);
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
                    o = e.dataKey,
                    i = (0, E.kr)(r[t], o, t);
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
                  var r = X(e) ? e.changedTouches[0] : e;
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
                  var e = this.state,
                    r = e.brushMoveStartX,
                    n = e.movingTravellerId,
                    o = e.endX,
                    i = e.startX,
                    a = this.state[n],
                    u = this.props,
                    c = u.x,
                    l = u.width,
                    s = u.travellerWidth,
                    f = u.onChange,
                    p = u.gap,
                    h = u.data,
                    y = { startX: this.state.startX, endX: this.state.endX },
                    d = t.pageX - r;
                  d > 0
                    ? (d = Math.min(d, c + l - s - a))
                    : d < 0 && (d = Math.max(d, c - a)),
                    (y[n] = a + d);
                  var v = this.getIndex(y),
                    m = v.startIndex,
                    b = v.endIndex;
                  this.setState(
                    $($({}, n, a + d), "brushMoveStartX", t.pageX),
                    function () {
                      var t;
                      f &&
                        ((t = h.length - 1),
                        (("startX" === n &&
                          (o > i ? m % p == 0 : b % p == 0)) ||
                          (o < i && b === t) ||
                          ("endX" === n && (o > i ? b % p == 0 : m % p == 0)) ||
                          (o > i && b === t)) &&
                          f(v));
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
                        this.setState($({}, e, s), function () {
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
                value: function (t, r) {
                  var o,
                    i,
                    a = this,
                    u = this.props,
                    c = u.y,
                    l = u.travellerWidth,
                    s = u.height,
                    f = u.traveller,
                    p = u.ariaLabel,
                    h = u.data,
                    y = u.startIndex,
                    d = u.endIndex,
                    v = Math.max(t, this.props.x),
                    m = R(
                      R({}, (0, S.J9)(this.props, !1)),
                      {},
                      { x: v, y: c, width: l, height: s },
                    ),
                    b =
                      p ||
                      "Min value: "
                        .concat(
                          null === (o = h[y]) || void 0 === o ? void 0 : o.name,
                          ", Max value: ",
                        )
                        .concat(
                          null === (i = h[d]) || void 0 === i ? void 0 : i.name,
                        );
                  return n.createElement(
                    g.W,
                    {
                      tabIndex: 0,
                      role: "slider",
                      "aria-label": b,
                      "aria-valuenow": t,
                      className: "recharts-brush-traveller",
                      onMouseEnter: this.handleEnterSlideOrTraveller,
                      onMouseLeave: this.handleLeaveSlideOrTraveller,
                      onMouseDown: this.travellerDragStartHandlers[r],
                      onTouchStart: this.travellerDragStartHandlers[r],
                      onKeyDown: function (t) {
                        ["ArrowLeft", "ArrowRight"].includes(t.key) &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          a.handleTravellerMoveKeyboard(
                            "ArrowRight" === t.key ? 1 : -1,
                            r,
                          ));
                      },
                      onFocus: function () {
                        a.setState({ isTravellerFocused: !0 });
                      },
                      onBlur: function () {
                        a.setState({ isTravellerFocused: !1 });
                      },
                      style: { cursor: "col-resize" },
                    },
                    e.renderTraveller(f, m),
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
                    g.W,
                    { className: "recharts-brush-texts" },
                    n.createElement(
                      P.E,
                      N(
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
                      P.E,
                      N(
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
                    y = s.isSlideMoving,
                    d = s.isTravellerMoving,
                    m = s.isTravellerFocused;
                  if (
                    !e ||
                    !e.length ||
                    !(0, k.Et)(i) ||
                    !(0, k.Et)(a) ||
                    !(0, k.Et)(u) ||
                    !(0, k.Et)(c) ||
                    u <= 0 ||
                    c <= 0
                  )
                    return null;
                  var b = (0, v.A)("recharts-brush", r),
                    x = 1 === n.Children.count(o),
                    w = (function (t, e) {
                      if (!t) return null;
                      var r = t.replace(/(\w)/, function (t) {
                          return t.toUpperCase();
                        }),
                        n = D.reduce(function (t, n) {
                          return _(_({}, t), {}, C({}, n + r, e));
                        }, {});
                      return (n[t] = e), n;
                    })("userSelect", "none");
                  return n.createElement(
                    g.W,
                    {
                      className: b,
                      onMouseLeave: this.handleLeaveWrapper,
                      onTouchMove: this.handleTouchMove,
                      style: w,
                    },
                    this.renderBackground(),
                    x && this.renderPanorama(),
                    this.renderSlide(f, p),
                    this.renderTravellerLayer(f, "startX"),
                    this.renderTravellerLayer(p, "endX"),
                    (h || y || d || m || l) && this.renderText(),
                  );
                },
              },
            ]) && L(r.prototype, o),
            i && L(r, i),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, o, i;
        })(n.PureComponent);
      $(H, "displayName", "Brush"),
        $(H, "defaultProps", {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: "#fff",
          stroke: "#666",
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1,
        });
      var K = r(41242),
        V = r(29690),
        G = r(39864),
        Y = r(61353),
        J = r(5608),
        Z = r(97380);
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
      function tt(t) {
        return (
          (tt =
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
          tt(t)
        );
      }
      function et(t, e) {
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
      function rt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? et(Object(r), !0).forEach(function (e) {
                ct(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : et(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function nt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, lt(n.key), n);
        }
      }
      function ot(t, e, r) {
        return (
          (e = at(e)),
          (function (t, e) {
            if (e && ("object" === tt(e) || "function" == typeof e)) return e;
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
          })(
            t,
            it()
              ? Reflect.construct(e, r || [], at(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function it() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (it = function () {
          return !!t;
        })();
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
      function ut(t, e) {
        return (
          (ut = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          ut(t, e)
        );
      }
      function ct(t, e, r) {
        return (
          (e = lt(e)) in t
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
      function lt(t) {
        var e = (function (t, e) {
          if ("object" != tt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != tt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == tt(e) ? e : e + "";
      }
      var st = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ot(this, e, arguments)
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && ut(t, e);
          })(e, t),
          (r = e),
          (o = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  r = t.x,
                  o = t.y,
                  i = t.r,
                  a = t.alwaysShow,
                  u = t.clipPathId,
                  c = (0, k.vh)(r),
                  l = (0, k.vh)(o);
                if (
                  ((0, Z.R)(
                    void 0 === a,
                    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
                  ),
                  !c || !l)
                )
                  return null;
                var s = (function (t) {
                  var e = t.x,
                    r = t.y,
                    n = t.xAxis,
                    o = t.yAxis,
                    i = (0, J.P2)({ x: n.scale, y: o.scale }),
                    a = i.apply({ x: e, y: r }, { bandAware: !0 });
                  return (0, Y.R)(t, "discard") && !i.isInRange(a) ? null : a;
                })(this.props);
                if (!s) return null;
                var f = s.x,
                  p = s.y,
                  h = this.props,
                  y = h.shape,
                  d = h.className,
                  m = rt(
                    rt(
                      {
                        clipPath: (0, Y.R)(this.props, "hidden")
                          ? "url(#".concat(u, ")")
                          : void 0,
                      },
                      (0, S.J9)(this.props, !0),
                    ),
                    {},
                    { cx: f, cy: p },
                  );
                return n.createElement(
                  g.W,
                  { className: (0, v.A)("recharts-reference-dot", d) },
                  e.renderDot(y, m),
                  G.J.renderCallByParent(this.props, {
                    x: f - i,
                    y: p - i,
                    width: 2 * i,
                    height: 2 * i,
                  }),
                );
              },
            },
          ]) && nt(r.prototype, o),
          i && nt(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, i;
      })(n.Component);
      ct(st, "displayName", "ReferenceDot"),
        ct(st, "defaultProps", {
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
        ct(st, "renderDot", function (t, e) {
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : u()(t)
              ? t(e)
              : n.createElement(
                  O.c,
                  Q({}, e, {
                    cx: e.cx,
                    cy: e.cy,
                    className: "recharts-reference-dot-dot",
                  }),
                );
        });
      var ft = r(15708);
      function pt() {
        return (
          (pt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          pt.apply(this, arguments)
        );
      }
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
      function dt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? yt(Object(r), !0).forEach(function (e) {
                wt(t, e, r[e]);
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
      function vt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Ot(n.key), n);
        }
      }
      function mt(t, e, r) {
        return (
          (e = gt(e)),
          (function (t, e) {
            if (e && ("object" === ht(e) || "function" == typeof e)) return e;
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
          })(
            t,
            bt()
              ? Reflect.construct(e, r || [], gt(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function bt() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (bt = function () {
          return !!t;
        })();
      }
      function gt(t) {
        return (
          (gt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          gt(t)
        );
      }
      function xt(t, e) {
        return (
          (xt = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          xt(t, e)
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
          if ("object" != ht(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != ht(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == ht(e) ? e : e + "";
      }
      var jt = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            mt(this, e, arguments)
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && xt(t, e);
          })(e, t),
          (r = e),
          (o = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  r = t.x1,
                  o = t.x2,
                  i = t.y1,
                  a = t.y2,
                  u = t.className,
                  c = t.alwaysShow,
                  l = t.clipPathId;
                (0, Z.R)(
                  void 0 === c,
                  'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
                );
                var s = (0, k.vh)(r),
                  f = (0, k.vh)(o),
                  p = (0, k.vh)(i),
                  h = (0, k.vh)(a),
                  y = this.props.shape;
                if (!(s || f || p || h || y)) return null;
                var d = (function (t, e, r, n, o) {
                  var i = o.x1,
                    a = o.x2,
                    u = o.y1,
                    c = o.y2,
                    l = o.xAxis,
                    s = o.yAxis;
                  if (!l || !s) return null;
                  var f = (0, J.P2)({ x: l.scale, y: s.scale }),
                    p = {
                      x: t ? f.x.apply(i, { position: "start" }) : f.x.rangeMin,
                      y: r ? f.y.apply(u, { position: "start" }) : f.y.rangeMin,
                    },
                    h = {
                      x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
                      y: n ? f.y.apply(c, { position: "end" }) : f.y.rangeMax,
                    };
                  return !(0, Y.R)(o, "discard") ||
                    (f.isInRange(p) && f.isInRange(h))
                    ? (0, J.sl)(p, h)
                    : null;
                })(s, f, p, h, this.props);
                if (!d && !y) return null;
                var m = (0, Y.R)(this.props, "hidden")
                  ? "url(#".concat(l, ")")
                  : void 0;
                return n.createElement(
                  g.W,
                  { className: (0, v.A)("recharts-reference-area", u) },
                  e.renderRect(
                    y,
                    dt(dt({ clipPath: m }, (0, S.J9)(this.props, !0)), d),
                  ),
                  G.J.renderCallByParent(this.props, d),
                );
              },
            },
          ]) && vt(r.prototype, o),
          i && vt(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, i;
      })(n.Component);
      function St(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return At(t);
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
            if ("string" == typeof t) return At(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return At(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function At(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      wt(jt, "displayName", "ReferenceArea"),
        wt(jt, "defaultProps", {
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
        wt(jt, "renderRect", function (t, e) {
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : u()(t)
              ? t(e)
              : n.createElement(
                  j.M,
                  pt({}, e, { className: "recharts-reference-area-rect" }),
                );
        });
      var Pt = function (t, e, r, n, o) {
          var i = (0, S.aS)(t, ft.e),
            a = (0, S.aS)(t, st),
            u = [].concat(St(i), St(a)),
            c = (0, S.aS)(t, jt),
            l = "".concat(n, "Id"),
            s = n[0],
            f = e;
          if (
            (u.length &&
              (f = u.reduce(function (t, e) {
                if (
                  e.props[l] === r &&
                  (0, Y.R)(e.props, "extendDomain") &&
                  (0, k.Et)(e.props[s])
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
                (0, Y.R)(e.props, "extendDomain") &&
                (0, k.Et)(e.props[p]) &&
                (0, k.Et)(e.props[h])
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
                return (0, k.Et)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        Et = r(50322),
        kt = r(16339),
        Mt = r(29570),
        Tt = new (r.n(Mt)())(),
        _t = "recharts.syncMouseEvents",
        Ct = r(62426);
      function Dt(t) {
        return (
          (Dt =
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
          Dt(t)
        );
      }
      function It(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Bt(n.key), n);
        }
      }
      function Nt(t, e, r) {
        return (
          (e = Bt(e)) in t
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
      function Bt(t) {
        var e = (function (t, e) {
          if ("object" != Dt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Dt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Dt(e) ? e : e + "";
      }
      var Rt = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Nt(this, "activeIndex", 0),
              Nt(this, "coordinateList", []),
              Nt(this, "layout", "horizontal");
          }),
          (e = [
            {
              key: "setDetails",
              value: function (t) {
                var e,
                  r = t.coordinateList,
                  n = void 0 === r ? null : r,
                  o = t.container,
                  i = void 0 === o ? null : o,
                  a = t.layout,
                  u = void 0 === a ? null : a,
                  c = t.offset,
                  l = void 0 === c ? null : c,
                  s = t.mouseHandlerCallback,
                  f = void 0 === s ? null : s;
                (this.coordinateList =
                  null !== (e = null != n ? n : this.coordinateList) &&
                  void 0 !== e
                    ? e
                    : []),
                  (this.container = null != i ? i : this.container),
                  (this.layout = null != u ? u : this.layout),
                  (this.offset = null != l ? l : this.offset),
                  (this.mouseHandlerCallback =
                    null != f ? f : this.mouseHandlerCallback),
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
              key: "setIndex",
              value: function (t) {
                this.activeIndex = t;
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
          ]) && It(t.prototype, e),
          r && It(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, r;
      })();
      var Lt = r(17798),
        zt = r(68428);
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
      var Ft = ["x", "y", "top", "left", "width", "height", "className"];
      function Wt() {
        return (
          (Wt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          Wt.apply(this, arguments)
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
      function qt(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != Ut(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != Ut(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == Ut(n) ? n : n + "") in t
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
      function Xt(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      var Ht = function (t, e, r, n, o, i) {
          return "M"
            .concat(t, ",")
            .concat(o, "v")
            .concat(n, "M")
            .concat(i, ",")
            .concat(e, "h")
            .concat(r);
        },
        Kt = function (t) {
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
            y = t.className,
            d = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? $t(Object(r), !0).forEach(function (e) {
                      qt(t, e, r[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(r),
                      )
                    : $t(Object(r)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(r, e),
                        );
                      });
              }
              return t;
            })({ x: r, y: i, top: u, left: l, width: f, height: h }, Xt(t, Ft));
          return (0, k.Et)(r) &&
            (0, k.Et)(i) &&
            (0, k.Et)(f) &&
            (0, k.Et)(h) &&
            (0, k.Et)(u) &&
            (0, k.Et)(l)
            ? n.createElement(
                "path",
                Wt({}, (0, S.J9)(d, !0), {
                  className: (0, v.A)("recharts-cross", y),
                  d: Ht(r, i, f, h, u, l),
                }),
              )
            : null;
        };
      function Vt(t) {
        var e = t.cx,
          r = t.cy,
          n = t.radius,
          o = t.startAngle,
          i = t.endAngle;
        return {
          points: [(0, Et.IZ)(e, r, n, o), (0, Et.IZ)(e, r, n, i)],
          cx: e,
          cy: r,
          radius: n,
          startAngle: o,
          endAngle: i,
        };
      }
      var Gt = r(7216);
      function Yt(t, e, r) {
        var n, o, i, a;
        if ("horizontal" === t)
          (i = n = e.x), (o = r.top), (a = r.top + r.height);
        else if ("vertical" === t)
          (a = o = e.y), (n = r.left), (i = r.left + r.width);
        else if (null != e.cx && null != e.cy) {
          if ("centric" !== t) return Vt(e);
          var u = e.cx,
            c = e.cy,
            l = e.innerRadius,
            s = e.outerRadius,
            f = e.angle,
            p = (0, Et.IZ)(u, c, l, f),
            h = (0, Et.IZ)(u, c, s, f);
          (n = p.x), (o = p.y), (i = h.x), (a = h.y);
        }
        return [
          { x: n, y: o },
          { x: i, y: a },
        ];
      }
      function Jt(t) {
        return (
          (Jt =
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
          Jt(t)
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
      function Qt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Zt(Object(r), !0).forEach(function (e) {
                te(t, e, r[e]);
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
      function te(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != Jt(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != Jt(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == Jt(n) ? n : n + "") in t
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
        var e,
          r,
          o,
          i = t.element,
          a = t.tooltipEventType,
          u = t.isActive,
          c = t.activeCoordinate,
          l = t.activePayload,
          s = t.offset,
          f = t.activeTooltipIndex,
          p = t.tooltipAxisBandSize,
          h = t.layout,
          y = t.chartName,
          d =
            null !== (e = i.props.cursor) && void 0 !== e
              ? e
              : null === (r = i.type.defaultProps) || void 0 === r
                ? void 0
                : r.cursor;
        if (!i || !d || !u || !c || ("ScatterChart" !== y && "axis" !== a))
          return null;
        var m = zt.I;
        if ("ScatterChart" === y) (o = c), (m = Kt);
        else if ("BarChart" === y)
          (o = (function (t, e, r, n) {
            var o = n / 2;
            return {
              stroke: "none",
              fill: "#ccc",
              x: "horizontal" === t ? e.x - o : r.left + 0.5,
              y: "horizontal" === t ? r.top + 0.5 : e.y - o,
              width: "horizontal" === t ? n : r.width - 1,
              height: "horizontal" === t ? r.height - 1 : n,
            };
          })(h, c, s, p)),
            (m = j.M);
        else if ("radial" === h) {
          var b = Vt(c),
            g = b.cx,
            x = b.cy,
            w = b.radius;
          (o = {
            cx: g,
            cy: x,
            startAngle: b.startAngle,
            endAngle: b.endAngle,
            innerRadius: w,
            outerRadius: w,
          }),
            (m = Gt.h);
        } else (o = { points: Yt(h, c, s) }), (m = zt.I);
        var O = Qt(
          Qt(
            Qt(Qt({ stroke: "#ccc", pointerEvents: "none" }, s), o),
            (0, S.J9)(d, !1),
          ),
          {},
          {
            payload: l,
            payloadIndex: f,
            className: (0, v.A)("recharts-tooltip-cursor", d.className),
          },
        );
        return (0, n.isValidElement)(d)
          ? (0, n.cloneElement)(d, O)
          : (0, n.createElement)(m, O);
      }
      var re = r(58847),
        ne = ["item"],
        oe = [
          "children",
          "className",
          "width",
          "height",
          "style",
          "compact",
          "title",
          "desc",
        ];
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
      function ae() {
        return (
          (ae = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          ae.apply(this, arguments)
        );
      }
      function ue(t, e) {
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
          de(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ce(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      function le(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, xe(n.key), n);
        }
      }
      function se(t, e, r) {
        return (
          (e = pe(e)),
          (function (t, e) {
            if (e && ("object" === ie(e) || "function" == typeof e)) return e;
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
          })(
            t,
            fe()
              ? Reflect.construct(e, r || [], pe(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function fe() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (fe = function () {
          return !!t;
        })();
      }
      function pe(t) {
        return (
          (pe = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          pe(t)
        );
      }
      function he(t, e) {
        return (
          (he = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          he(t, e)
        );
      }
      function ye(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return ve(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          de(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function de(t, e) {
        if (t) {
          if ("string" == typeof t) return ve(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? ve(t, e)
                : void 0
          );
        }
      }
      function ve(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function me(t, e) {
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
      function be(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? me(Object(r), !0).forEach(function (e) {
                ge(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : me(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function ge(t, e, r) {
        return (
          (e = xe(e)) in t
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
      function xe(t) {
        var e = (function (t, e) {
          if ("object" != ie(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != ie(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == ie(e) ? e : e + "";
      }
      var we = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
        Oe = { width: "100%", height: "100%" },
        je = { x: 0, y: 0 };
      function Se(t) {
        return t;
      }
      var Ae = function (t, e) {
        var r = e.graphicalItems,
          n = e.dataStartIndex,
          o = e.dataEndIndex,
          i = (null != r ? r : []).reduce(function (t, e) {
            var r = e.props.data;
            return r && r.length ? [].concat(ye(t), ye(r)) : t;
          }, []);
        return i.length > 0
          ? i
          : t && t.length && (0, k.Et)(n) && (0, k.Et)(o)
            ? t.slice(n, o + 1)
            : [];
      };
      function Pe(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var Ee = function (t, e, r, n) {
          var o = t.graphicalItems,
            i = t.tooltipAxis,
            a = Ae(e, t);
          return r < 0 || !o || !o.length || r >= a.length
            ? null
            : o.reduce(function (o, u) {
                var c,
                  l,
                  s = null !== (c = u.props.data) && void 0 !== c ? c : e;
                if (
                  (s &&
                    t.dataStartIndex + t.dataEndIndex !== 0 &&
                    t.dataEndIndex - t.dataStartIndex >= r &&
                    (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
                  i.dataKey && !i.allowDuplicatedCategory)
                ) {
                  var f = void 0 === s ? a : s;
                  l = (0, k.eP)(f, i.dataKey, n);
                } else l = (s && s[r]) || a[r];
                return l ? [].concat(ye(o), [(0, E.zb)(u, l)]) : o;
              }, []);
        },
        ke = function (t, e, r, n) {
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
            l = (0, E.gH)(i, a, c, u);
          if (l >= 0 && c) {
            var s = c[l] && c[l].value,
              f = Ee(t, e, l, s),
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
                    return be(
                      be(be({}, n), (0, Et.IZ)(n.cx, n.cy, a, i)),
                      {},
                      { angle: i, radius: a },
                    );
                  }
                  var u = o.coordinate,
                    c = n.angle;
                  return be(
                    be(be({}, n), (0, Et.IZ)(n.cx, n.cy, u, c)),
                    {},
                    { angle: c, radius: u },
                  );
                }
                return je;
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
        Me = function (t, e) {
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
            y = (0, E._L)(f, o);
          return r.reduce(function (e, r) {
            var d,
              v =
                void 0 !== r.type.defaultProps
                  ? be(be({}, r.type.defaultProps), r.props)
                  : r.props,
              m = v.type,
              b = v.dataKey,
              g = v.allowDataOverflow,
              x = v.allowDuplicatedCategory,
              w = v.scale,
              O = v.ticks,
              j = v.includeHidden,
              S = v[a];
            if (e[S]) return e;
            var A,
              P,
              M,
              T = Ae(t.data, {
                graphicalItems: n.filter(function (t) {
                  var e;
                  return (
                    (a in t.props
                      ? t.props[a]
                      : null === (e = t.type.defaultProps) || void 0 === e
                        ? void 0
                        : e[a]) === S
                  );
                }),
                dataStartIndex: c,
                dataEndIndex: s,
              }),
              _ = T.length;
            (function (t, e, r) {
              if ("number" === r && !0 === e && Array.isArray(t)) {
                var n = null == t ? void 0 : t[0],
                  o = null == t ? void 0 : t[1];
                if (n && o && (0, k.Et)(n) && (0, k.Et)(o)) return !0;
              }
              return !1;
            })(v.domain, g, m) &&
              ((A = (0, E.AQ)(v.domain, null, g)),
              !y ||
                ("number" !== m && "auto" === w) ||
                (M = (0, E.Ay)(T, b, "category")));
            var C = Pe(m);
            if (!A || 0 === A.length) {
              var D,
                I = null !== (D = v.domain) && void 0 !== D ? D : C;
              if (b) {
                if (((A = (0, E.Ay)(T, b, m)), "category" === m && y)) {
                  var N = (0, k.CG)(A);
                  x && N
                    ? ((P = A), (A = l()(0, _)))
                    : x ||
                      (A = (0, E.KC)(I, A, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(ye(t), [e]);
                      }, []));
                } else if ("category" === m)
                  A = x
                    ? A.filter(function (t) {
                        return "" !== t && !i()(t);
                      })
                    : (0, E.KC)(I, A, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || "" === e || i()(e)
                          ? t
                          : [].concat(ye(t), [e]);
                      }, []);
                else if ("number" === m) {
                  var B = (0, E.A1)(
                    T,
                    n.filter(function (t) {
                      var e,
                        r,
                        n =
                          a in t.props
                            ? t.props[a]
                            : null === (e = t.type.defaultProps) || void 0 === e
                              ? void 0
                              : e[a],
                        o =
                          "hide" in t.props
                            ? t.props.hide
                            : null === (r = t.type.defaultProps) || void 0 === r
                              ? void 0
                              : r.hide;
                      return n === S && (j || !o);
                    }),
                    b,
                    o,
                    f,
                  );
                  B && (A = B);
                }
                !y ||
                  ("number" !== m && "auto" === w) ||
                  (M = (0, E.Ay)(T, b, "category"));
              } else
                A = y
                  ? l()(0, _)
                  : u && u[S] && u[S].hasStack && "number" === m
                    ? "expand" === h
                      ? [0, 1]
                      : (0, E.Mk)(u[S].stackGroups, c, s)
                    : (0, E.vf)(
                        T,
                        n.filter(function (t) {
                          var e =
                              a in t.props
                                ? t.props[a]
                                : t.type.defaultProps[a],
                            r =
                              "hide" in t.props
                                ? t.props.hide
                                : t.type.defaultProps.hide;
                          return e === S && (j || !r);
                        }),
                        m,
                        f,
                        !0,
                      );
              if ("number" === m)
                (A = Pt(p, A, S, o, O)), I && (A = (0, E.AQ)(I, A, g));
              else if ("category" === m && I) {
                var R = I;
                A.every(function (t) {
                  return R.indexOf(t) >= 0;
                }) && (A = R);
              }
            }
            return be(
              be({}, e),
              {},
              ge(
                {},
                S,
                be(
                  be({}, v),
                  {},
                  {
                    axisType: o,
                    domain: A,
                    categoricalDomain: M,
                    duplicateDomain: P,
                    originalDomain:
                      null !== (d = v.domain) && void 0 !== d ? d : C,
                    isCategorical: y,
                    layout: f,
                  },
                ),
              ),
            );
          }, {});
        },
        Te = function (t, e) {
          var r = e.axisType,
            n = void 0 === r ? "xAxis" : r,
            o = e.AxisComp,
            i = e.graphicalItems,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            s = t.children,
            p = "".concat(n, "Id"),
            h = (0, S.aS)(s, o),
            y = {};
          return (
            h && h.length
              ? (y = Me(t, {
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
                (y = (function (t, e) {
                  var r = e.graphicalItems,
                    n = e.Axis,
                    o = e.axisType,
                    i = e.axisIdKey,
                    a = e.stackGroups,
                    u = e.dataStartIndex,
                    c = e.dataEndIndex,
                    s = t.layout,
                    p = t.children,
                    h = Ae(t.data, {
                      graphicalItems: r,
                      dataStartIndex: u,
                      dataEndIndex: c,
                    }),
                    y = h.length,
                    d = (0, E._L)(s, o),
                    v = -1;
                  return r.reduce(function (t, e) {
                    var m,
                      b = (
                        void 0 !== e.type.defaultProps
                          ? be(be({}, e.type.defaultProps), e.props)
                          : e.props
                      )[i],
                      g = Pe("number");
                    return t[b]
                      ? t
                      : (v++,
                        d
                          ? (m = l()(0, y))
                          : a && a[b] && a[b].hasStack
                            ? ((m = (0, E.Mk)(a[b].stackGroups, u, c)),
                              (m = Pt(p, m, b, o)))
                            : ((m = (0, E.AQ)(
                                g,
                                (0, E.vf)(
                                  h,
                                  r.filter(function (t) {
                                    var e,
                                      r,
                                      n =
                                        i in t.props
                                          ? t.props[i]
                                          : null ===
                                                (e = t.type.defaultProps) ||
                                              void 0 === e
                                            ? void 0
                                            : e[i],
                                      o =
                                        "hide" in t.props
                                          ? t.props.hide
                                          : null ===
                                                (r = t.type.defaultProps) ||
                                              void 0 === r
                                            ? void 0
                                            : r.hide;
                                    return n === b && !o;
                                  }),
                                  "number",
                                  s,
                                ),
                                n.defaultProps.allowDataOverflow,
                              )),
                              (m = Pt(p, m, b, o))),
                        be(
                          be({}, t),
                          {},
                          ge(
                            {},
                            b,
                            be(
                              be({ axisType: o }, n.defaultProps),
                              {},
                              {
                                hide: !0,
                                orientation: f()(
                                  we,
                                  "".concat(o, ".").concat(v % 2),
                                  null,
                                ),
                                domain: m,
                                originalDomain: g,
                                isCategorical: d,
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
            y
          );
        },
        _e = function (t) {
          var e = t.children,
            r = t.defaultShowTooltip,
            n = (0, S.BU)(e, H),
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
        Ce = function (t) {
          return "horizontal" === t
            ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
            : "vertical" === t
              ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
              : "centric" === t
                ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
                : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
        },
        De = function (t, e) {
          return "xAxis" === e
            ? t[e].width
            : "yAxis" === e
              ? t[e].height
              : void 0;
        },
        Ie = function (t) {
          var e = t.chartName,
            r = t.GraphicalChild,
            o = t.defaultTooltipEventType,
            a = void 0 === o ? "axis" : o,
            c = t.validateTooltipEventTypes,
            l = void 0 === c ? ["axis"] : c,
            s = t.axisComponents,
            p = t.legendContent,
            y = t.formatAxisMap,
            A = t.defaultProps,
            P = function (t, e) {
              var r = e.graphicalItems,
                n = e.stackGroups,
                o = e.offset,
                a = e.updateId,
                u = e.dataStartIndex,
                c = e.dataEndIndex,
                l = t.barSize,
                f = t.layout,
                p = t.barGap,
                h = t.barCategoryGap,
                y = t.maxBarSize,
                d = Ce(f),
                v = d.numericAxisName,
                b = d.cateAxisName,
                g = (function (t) {
                  return (
                    !(!t || !t.length) &&
                    t.some(function (t) {
                      var e = (0, S.Mn)(t && t.type);
                      return e && e.indexOf("Bar") >= 0;
                    })
                  );
                })(r),
                x = [];
              return (
                r.forEach(function (r, d) {
                  var w = Ae(t.data, {
                      graphicalItems: [r],
                      dataStartIndex: u,
                      dataEndIndex: c,
                    }),
                    O =
                      void 0 !== r.type.defaultProps
                        ? be(be({}, r.type.defaultProps), r.props)
                        : r.props,
                    j = O.dataKey,
                    A = O.maxBarSize,
                    P = O["".concat(v, "Id")],
                    k = O["".concat(b, "Id")],
                    M = s.reduce(function (t, r) {
                      var n = e["".concat(r.axisType, "Map")],
                        o = O["".concat(r.axisType, "Id")];
                      (n && n[o]) || "zAxis" === r.axisType || (0, m.A)(!1);
                      var i = n[o];
                      return be(
                        be({}, t),
                        {},
                        ge(
                          ge({}, r.axisType, i),
                          "".concat(r.axisType, "Ticks"),
                          (0, E.Rh)(i),
                        ),
                      );
                    }, {}),
                    T = M[b],
                    _ = M["".concat(b, "Ticks")],
                    C =
                      n &&
                      n[P] &&
                      n[P].hasStack &&
                      (0, E.kA)(r, n[P].stackGroups),
                    D = (0, S.Mn)(r.type).indexOf("Bar") >= 0,
                    I = (0, E.Hj)(T, _),
                    N = [],
                    B =
                      g &&
                      (0, E.tA)({
                        barSize: l,
                        stackGroups: n,
                        totalSize: De(M, b),
                      });
                  if (D) {
                    var R,
                      L,
                      z = i()(A) ? y : A,
                      U =
                        null !==
                          (R =
                            null !== (L = (0, E.Hj)(T, _, !0)) && void 0 !== L
                              ? L
                              : z) && void 0 !== R
                          ? R
                          : 0;
                    (N = (0, E.BX)({
                      barGap: p,
                      barCategoryGap: h,
                      bandSize: U !== I ? U : I,
                      sizeList: B[k],
                      maxBarSize: z,
                    })),
                      U !== I &&
                        (N = N.map(function (t) {
                          return be(
                            be({}, t),
                            {},
                            {
                              position: be(
                                be({}, t.position),
                                {},
                                { offset: t.position.offset - U / 2 },
                              ),
                            },
                          );
                        }));
                  }
                  var F = r && r.type && r.type.getComposedData;
                  F &&
                    x.push({
                      props: be(
                        be(
                          {},
                          F(
                            be(
                              be({}, M),
                              {},
                              {
                                displayedData: w,
                                props: t,
                                dataKey: j,
                                item: r,
                                bandSize: I,
                                barPosition: N,
                                offset: o,
                                stackedData: C,
                                layout: f,
                                dataStartIndex: u,
                                dataEndIndex: c,
                              },
                            ),
                          ),
                        ),
                        {},
                        ge(
                          ge(
                            ge({ key: r.key || "item-".concat(d) }, v, M[v]),
                            b,
                            M[b],
                          ),
                          "animationId",
                          a,
                        ),
                      ),
                      childIndex: (0, S.AW)(r, t.children),
                      item: r,
                    });
                }),
                x
              );
            },
            M = function (t, n) {
              var o = t.props,
                i = t.dataStartIndex,
                a = t.dataEndIndex,
                u = t.updateId;
              if (!(0, S.Me)({ props: o })) return null;
              var c = o.children,
                l = o.layout,
                p = o.stackOffset,
                d = o.data,
                v = o.reverseStackOrder,
                m = Ce(l),
                b = m.numericAxisName,
                g = m.cateAxisName,
                x = (0, S.aS)(c, r),
                O = (0, E.Mn)(
                  d,
                  x,
                  "".concat(b, "Id"),
                  "".concat(g, "Id"),
                  p,
                  v,
                ),
                j = s.reduce(function (t, e) {
                  var r = "".concat(e.axisType, "Map");
                  return be(
                    be({}, t),
                    {},
                    ge(
                      {},
                      r,
                      Te(
                        o,
                        be(
                          be({}, e),
                          {},
                          {
                            graphicalItems: x,
                            stackGroups: e.axisType === b && O,
                            dataStartIndex: i,
                            dataEndIndex: a,
                          },
                        ),
                      ),
                    ),
                  );
                }, {}),
                A = (function (t, e) {
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
                    h = (0, S.BU)(s, H),
                    y = (0, S.BU)(s, w.s),
                    d = Object.keys(u).reduce(
                      function (t, e) {
                        var r = u[e],
                          n = r.orientation;
                        return r.mirror || r.hide
                          ? t
                          : be(be({}, t), {}, ge({}, n, t[n] + r.width));
                      },
                      { left: p.left || 0, right: p.right || 0 },
                    ),
                    v = Object.keys(i).reduce(
                      function (t, e) {
                        var r = i[e],
                          n = r.orientation;
                        return r.mirror || r.hide
                          ? t
                          : be(
                              be({}, t),
                              {},
                              ge({}, n, f()(t, "".concat(n)) + r.height),
                            );
                      },
                      { top: p.top || 0, bottom: p.bottom || 0 },
                    ),
                    m = be(be({}, v), d),
                    b = m.bottom;
                  h && (m.bottom += h.props.height || H.defaultProps.height),
                    y && e && (m = (0, E.s0)(m, n, r, e));
                  var g = c - m.left - m.right,
                    x = l - m.top - m.bottom;
                  return be(
                    be({ brushBottom: b }, m),
                    {},
                    { width: Math.max(g, 0), height: Math.max(x, 0) },
                  );
                })(
                  be(be({}, j), {}, { props: o, graphicalItems: x }),
                  null == n ? void 0 : n.legendBBox,
                );
              Object.keys(j).forEach(function (t) {
                j[t] = y(o, j[t], A, t.replace("Map", ""), e);
              });
              var M,
                T,
                _,
                C = j["".concat(g, "Map")],
                D =
                  ((M = C),
                  (T = (0, k.lX)(M)),
                  {
                    tooltipTicks: (_ = (0, E.Rh)(T, !1, !0)),
                    orderedTooltipTicks: h()(_, function (t) {
                      return t.coordinate;
                    }),
                    tooltipAxis: T,
                    tooltipAxisBandSize: (0, E.Hj)(T, _),
                  }),
                I = P(
                  o,
                  be(
                    be({}, j),
                    {},
                    {
                      dataStartIndex: i,
                      dataEndIndex: a,
                      updateId: u,
                      graphicalItems: x,
                      stackGroups: O,
                      offset: A,
                    },
                  ),
                );
              return be(
                be(
                  {
                    formattedGraphicalItems: I,
                    graphicalItems: x,
                    offset: A,
                    stackGroups: O,
                  },
                  D,
                ),
                j,
              );
            },
            T = (function (t) {
              function r(t) {
                var o, a, c;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, r),
                  ge(
                    (c = se(this, r, [t])),
                    "eventEmitterSymbol",
                    Symbol("rechartsEventEmitter"),
                  ),
                  ge(c, "accessibilityManager", new Rt()),
                  ge(c, "handleLegendBBoxUpdate", function (t) {
                    if (t) {
                      var e = c.state,
                        r = e.dataStartIndex,
                        n = e.dataEndIndex,
                        o = e.updateId;
                      c.setState(
                        be(
                          { legendBBox: t },
                          M(
                            {
                              props: c.props,
                              dataStartIndex: r,
                              dataEndIndex: n,
                              updateId: o,
                            },
                            be(be({}, c.state), {}, { legendBBox: t }),
                          ),
                        ),
                      );
                    }
                  }),
                  ge(c, "handleReceiveSyncEvent", function (t, e, r) {
                    if (c.props.syncId === t) {
                      if (
                        r === c.eventEmitterSymbol &&
                        "function" != typeof c.props.syncMethod
                      )
                        return;
                      c.applySyncEvent(e);
                    }
                  }),
                  ge(c, "handleBrushChange", function (t) {
                    var e = t.startIndex,
                      r = t.endIndex;
                    if (
                      e !== c.state.dataStartIndex ||
                      r !== c.state.dataEndIndex
                    ) {
                      var n = c.state.updateId;
                      c.setState(function () {
                        return be(
                          { dataStartIndex: e, dataEndIndex: r },
                          M(
                            {
                              props: c.props,
                              dataStartIndex: e,
                              dataEndIndex: r,
                              updateId: n,
                            },
                            c.state,
                          ),
                        );
                      }),
                        c.triggerSyncEvent({
                          dataStartIndex: e,
                          dataEndIndex: r,
                        });
                    }
                  }),
                  ge(c, "handleMouseEnter", function (t) {
                    var e = c.getMouseInfo(t);
                    if (e) {
                      var r = be(be({}, e), {}, { isTooltipActive: !0 });
                      c.setState(r), c.triggerSyncEvent(r);
                      var n = c.props.onMouseEnter;
                      u()(n) && n(r, t);
                    }
                  }),
                  ge(c, "triggeredAfterMouseMove", function (t) {
                    var e = c.getMouseInfo(t),
                      r = e
                        ? be(be({}, e), {}, { isTooltipActive: !0 })
                        : { isTooltipActive: !1 };
                    c.setState(r), c.triggerSyncEvent(r);
                    var n = c.props.onMouseMove;
                    u()(n) && n(r, t);
                  }),
                  ge(c, "handleItemMouseEnter", function (t) {
                    c.setState(function () {
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
                  ge(c, "handleItemMouseLeave", function () {
                    c.setState(function () {
                      return { isTooltipActive: !1 };
                    });
                  }),
                  ge(c, "handleMouseMove", function (t) {
                    t.persist(), c.throttleTriggeredAfterMouseMove(t);
                  }),
                  ge(c, "handleMouseLeave", function (t) {
                    c.throttleTriggeredAfterMouseMove.cancel();
                    var e = { isTooltipActive: !1 };
                    c.setState(e), c.triggerSyncEvent(e);
                    var r = c.props.onMouseLeave;
                    u()(r) && r(e, t);
                  }),
                  ge(c, "handleOuterEvent", function (t) {
                    var e,
                      r = (0, S.X_)(t),
                      n = f()(c.props, "".concat(r));
                    r &&
                      u()(n) &&
                      n(
                        null !==
                          (e = /.*touch.*/i.test(r)
                            ? c.getMouseInfo(t.changedTouches[0])
                            : c.getMouseInfo(t)) && void 0 !== e
                          ? e
                          : {},
                        t,
                      );
                  }),
                  ge(c, "handleClick", function (t) {
                    var e = c.getMouseInfo(t);
                    if (e) {
                      var r = be(be({}, e), {}, { isTooltipActive: !0 });
                      c.setState(r), c.triggerSyncEvent(r);
                      var n = c.props.onClick;
                      u()(n) && n(r, t);
                    }
                  }),
                  ge(c, "handleMouseDown", function (t) {
                    var e = c.props.onMouseDown;
                    u()(e) && e(c.getMouseInfo(t), t);
                  }),
                  ge(c, "handleMouseUp", function (t) {
                    var e = c.props.onMouseUp;
                    u()(e) && e(c.getMouseInfo(t), t);
                  }),
                  ge(c, "handleTouchMove", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      c.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                  }),
                  ge(c, "handleTouchStart", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      c.handleMouseDown(t.changedTouches[0]);
                  }),
                  ge(c, "handleTouchEnd", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      c.handleMouseUp(t.changedTouches[0]);
                  }),
                  ge(c, "handleDoubleClick", function (t) {
                    var e = c.props.onDoubleClick;
                    u()(e) && e(c.getMouseInfo(t), t);
                  }),
                  ge(c, "handleContextMenu", function (t) {
                    var e = c.props.onContextMenu;
                    u()(e) && e(c.getMouseInfo(t), t);
                  }),
                  ge(c, "triggerSyncEvent", function (t) {
                    void 0 !== c.props.syncId &&
                      Tt.emit(_t, c.props.syncId, t, c.eventEmitterSymbol);
                  }),
                  ge(c, "applySyncEvent", function (t) {
                    var e = c.props,
                      r = e.layout,
                      n = e.syncMethod,
                      o = c.state.updateId,
                      i = t.dataStartIndex,
                      a = t.dataEndIndex;
                    if (
                      void 0 !== t.dataStartIndex ||
                      void 0 !== t.dataEndIndex
                    )
                      c.setState(
                        be(
                          { dataStartIndex: i, dataEndIndex: a },
                          M(
                            {
                              props: c.props,
                              dataStartIndex: i,
                              dataEndIndex: a,
                              updateId: o,
                            },
                            c.state,
                          ),
                        ),
                      );
                    else if (void 0 !== t.activeTooltipIndex) {
                      var u = t.chartX,
                        l = t.chartY,
                        s = t.activeTooltipIndex,
                        f = c.state,
                        p = f.offset,
                        h = f.tooltipTicks;
                      if (!p) return;
                      if ("function" == typeof n) s = n(h, t);
                      else if ("value" === n) {
                        s = -1;
                        for (var y = 0; y < h.length; y++)
                          if (h[y].value === t.activeLabel) {
                            s = y;
                            break;
                          }
                      }
                      var d = be(be({}, p), {}, { x: p.left, y: p.top }),
                        v = Math.min(u, d.x + d.width),
                        m = Math.min(l, d.y + d.height),
                        b = h[s] && h[s].value,
                        g = Ee(c.state, c.props.data, s),
                        x = h[s]
                          ? {
                              x: "horizontal" === r ? h[s].coordinate : v,
                              y: "horizontal" === r ? m : h[s].coordinate,
                            }
                          : je;
                      c.setState(
                        be(
                          be({}, t),
                          {},
                          {
                            activeLabel: b,
                            activeCoordinate: x,
                            activePayload: g,
                            activeTooltipIndex: s,
                          },
                        ),
                      );
                    } else c.setState(t);
                  }),
                  ge(c, "renderCursor", function (t) {
                    var r,
                      o = c.state,
                      i = o.isTooltipActive,
                      a = o.activeCoordinate,
                      u = o.activePayload,
                      l = o.offset,
                      s = o.activeTooltipIndex,
                      f = o.tooltipAxisBandSize,
                      p = c.getTooltipEventType(),
                      h = null !== (r = t.props.active) && void 0 !== r ? r : i,
                      y = c.props.layout,
                      d = t.key || "_recharts-cursor";
                    return n.createElement(ee, {
                      key: d,
                      activeCoordinate: a,
                      activePayload: u,
                      activeTooltipIndex: s,
                      chartName: e,
                      element: t,
                      isActive: h,
                      layout: y,
                      offset: l,
                      tooltipAxisBandSize: f,
                      tooltipEventType: p,
                    });
                  }),
                  ge(c, "renderPolarAxis", function (t, e, r) {
                    var o = f()(t, "type.axisType"),
                      i = f()(c.state, "".concat(o, "Map")),
                      a = t.type.defaultProps,
                      u = void 0 !== a ? be(be({}, a), t.props) : t.props,
                      l = i && i[u["".concat(o, "Id")]];
                    return (0, n.cloneElement)(
                      t,
                      be(
                        be({}, l),
                        {},
                        {
                          className: (0, v.A)(o, l.className),
                          key: t.key || "".concat(e, "-").concat(r),
                          ticks: (0, E.Rh)(l, !0),
                        },
                      ),
                    );
                  }),
                  ge(c, "renderPolarGrid", function (t) {
                    var e = t.props,
                      r = e.radialLines,
                      o = e.polarAngles,
                      i = e.polarRadius,
                      a = c.state,
                      u = a.radiusAxisMap,
                      l = a.angleAxisMap,
                      s = (0, k.lX)(u),
                      f = (0, k.lX)(l),
                      p = f.cx,
                      h = f.cy,
                      y = f.innerRadius,
                      d = f.outerRadius;
                    return (0, n.cloneElement)(t, {
                      polarAngles: Array.isArray(o)
                        ? o
                        : (0, E.Rh)(f, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      polarRadius: Array.isArray(i)
                        ? i
                        : (0, E.Rh)(s, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      cx: p,
                      cy: h,
                      innerRadius: y,
                      outerRadius: d,
                      key: t.key || "polar-grid",
                      radialLines: r,
                    });
                  }),
                  ge(c, "renderLegend", function () {
                    var t = c.state.formattedGraphicalItems,
                      e = c.props,
                      r = e.children,
                      o = e.width,
                      i = e.height,
                      a = c.props.margin || {},
                      u = o - (a.left || 0) - (a.right || 0),
                      l = (0, V.g)({
                        children: r,
                        formattedGraphicalItems: t,
                        legendWidth: u,
                        legendContent: p,
                      });
                    if (!l) return null;
                    var s = l.item,
                      f = ce(l, ne);
                    return (0, n.cloneElement)(
                      s,
                      be(
                        be({}, f),
                        {},
                        {
                          chartWidth: o,
                          chartHeight: i,
                          margin: a,
                          onBBoxUpdate: c.handleLegendBBoxUpdate,
                        },
                      ),
                    );
                  }),
                  ge(c, "renderTooltip", function () {
                    var t,
                      e = c.props,
                      r = e.children,
                      o = e.accessibilityLayer,
                      i = (0, S.BU)(r, x.m);
                    if (!i) return null;
                    var a = c.state,
                      u = a.isTooltipActive,
                      l = a.activeCoordinate,
                      s = a.activePayload,
                      f = a.activeLabel,
                      p = a.offset,
                      h = null !== (t = i.props.active) && void 0 !== t ? t : u;
                    return (0, n.cloneElement)(i, {
                      viewBox: be(be({}, p), {}, { x: p.left, y: p.top }),
                      active: h,
                      label: f,
                      payload: h ? s : [],
                      coordinate: l,
                      accessibilityLayer: o,
                    });
                  }),
                  ge(c, "renderBrush", function (t) {
                    var e = c.props,
                      r = e.margin,
                      o = e.data,
                      i = c.state,
                      a = i.offset,
                      u = i.dataStartIndex,
                      l = i.dataEndIndex,
                      s = i.updateId;
                    return (0, n.cloneElement)(t, {
                      key: t.key || "_recharts-brush",
                      onChange: (0, E.HQ)(
                        c.handleBrushChange,
                        t.props.onChange,
                      ),
                      data: o,
                      x: (0, k.Et)(t.props.x) ? t.props.x : a.left,
                      y: (0, k.Et)(t.props.y)
                        ? t.props.y
                        : a.top + a.height + a.brushBottom - (r.bottom || 0),
                      width: (0, k.Et)(t.props.width) ? t.props.width : a.width,
                      startIndex: u,
                      endIndex: l,
                      updateId: "brush-".concat(s),
                    });
                  }),
                  ge(c, "renderReferenceElement", function (t, e, r) {
                    if (!t) return null;
                    var o = c.clipPathId,
                      i = c.state,
                      a = i.xAxisMap,
                      u = i.yAxisMap,
                      l = i.offset,
                      s = t.type.defaultProps || {},
                      f = t.props,
                      p = f.xAxisId,
                      h = void 0 === p ? s.xAxisId : p,
                      y = f.yAxisId,
                      d = void 0 === y ? s.yAxisId : y;
                    return (0, n.cloneElement)(t, {
                      key: t.key || "".concat(e, "-").concat(r),
                      xAxis: a[h],
                      yAxis: u[d],
                      viewBox: {
                        x: l.left,
                        y: l.top,
                        width: l.width,
                        height: l.height,
                      },
                      clipPathId: o,
                    });
                  }),
                  ge(c, "renderActivePoints", function (t) {
                    var e = t.item,
                      n = t.activePoint,
                      o = t.basePoint,
                      i = t.childIndex,
                      a = t.isRange,
                      u = [],
                      c = e.props.key,
                      l =
                        void 0 !== e.item.type.defaultProps
                          ? be(be({}, e.item.type.defaultProps), e.item.props)
                          : e.item.props,
                      s = l.activeDot,
                      f = be(
                        be(
                          {
                            index: i,
                            dataKey: l.dataKey,
                            cx: n.x,
                            cy: n.y,
                            r: 4,
                            fill: (0, E.Ps)(e.item),
                            strokeWidth: 2,
                            stroke: "#fff",
                            payload: n.payload,
                            value: n.value,
                          },
                          (0, S.J9)(s, !1),
                        ),
                        (0, Ct._U)(s),
                      );
                    return (
                      u.push(
                        r.renderActiveDot(
                          s,
                          f,
                          "".concat(c, "-activePoint-").concat(i),
                        ),
                      ),
                      o
                        ? u.push(
                            r.renderActiveDot(
                              s,
                              be(be({}, f), {}, { cx: o.x, cy: o.y }),
                              "".concat(c, "-basePoint-").concat(i),
                            ),
                          )
                        : a && u.push(null),
                      u
                    );
                  }),
                  ge(c, "renderGraphicChild", function (t, e, r) {
                    var o = c.filterFormatItem(t, e, r);
                    if (!o) return null;
                    var a = c.getTooltipEventType(),
                      u = c.state,
                      l = u.isTooltipActive,
                      s = u.tooltipAxis,
                      f = u.activeTooltipIndex,
                      p = u.activeLabel,
                      h = c.props.children,
                      y = (0, S.BU)(h, x.m),
                      d = o.props,
                      v = d.points,
                      m = d.isRange,
                      b = d.baseLine,
                      g =
                        void 0 !== o.item.type.defaultProps
                          ? be(be({}, o.item.type.defaultProps), o.item.props)
                          : o.item.props,
                      w = g.activeDot,
                      O = g.hide,
                      j = g.activeBar,
                      A = g.activeShape,
                      P = Boolean(!O && l && y && (w || j || A)),
                      M = {};
                    "axis" !== a && y && "click" === y.props.trigger
                      ? (M = {
                          onClick: (0, E.HQ)(
                            c.handleItemMouseEnter,
                            t.props.onClick,
                          ),
                        })
                      : "axis" !== a &&
                        (M = {
                          onMouseLeave: (0, E.HQ)(
                            c.handleItemMouseLeave,
                            t.props.onMouseLeave,
                          ),
                          onMouseEnter: (0, E.HQ)(
                            c.handleItemMouseEnter,
                            t.props.onMouseEnter,
                          ),
                        });
                    var T = (0, n.cloneElement)(t, be(be({}, o.props), M));
                    if (P) {
                      if (!(f >= 0)) {
                        var _,
                          C = (
                            null !==
                              (_ = c.getItemByXY(c.state.activeCoordinate)) &&
                            void 0 !== _
                              ? _
                              : { graphicalItem: T }
                          ).graphicalItem,
                          D = C.item,
                          I = void 0 === D ? t : D,
                          N = C.childIndex,
                          B = be(
                            be(be({}, o.props), M),
                            {},
                            { activeIndex: N },
                          );
                        return [(0, n.cloneElement)(I, B), null, null];
                      }
                      var R, L;
                      if (s.dataKey && !s.allowDuplicatedCategory) {
                        var z =
                          "function" == typeof s.dataKey
                            ? function (t) {
                                return "function" == typeof s.dataKey
                                  ? s.dataKey(t.payload)
                                  : null;
                              }
                            : "payload.".concat(s.dataKey.toString());
                        (R = (0, k.eP)(v, z, p)),
                          (L = m && b && (0, k.eP)(b, z, p));
                      } else
                        (R = null == v ? void 0 : v[f]), (L = m && b && b[f]);
                      if (A || j) {
                        var U =
                          void 0 !== t.props.activeIndex
                            ? t.props.activeIndex
                            : f;
                        return [
                          (0, n.cloneElement)(
                            t,
                            be(be(be({}, o.props), M), {}, { activeIndex: U }),
                          ),
                          null,
                          null,
                        ];
                      }
                      if (!i()(R))
                        return [T].concat(
                          ye(
                            c.renderActivePoints({
                              item: o,
                              activePoint: R,
                              basePoint: L,
                              childIndex: f,
                              isRange: m,
                            }),
                          ),
                        );
                    }
                    return m ? [T, null, null] : [T, null];
                  }),
                  ge(c, "renderCustomized", function (t, e, r) {
                    return (0, n.cloneElement)(
                      t,
                      be(
                        be({ key: "recharts-customized-".concat(r) }, c.props),
                        c.state,
                      ),
                    );
                  }),
                  ge(c, "renderMap", {
                    CartesianGrid: { handler: Se, once: !0 },
                    ReferenceArea: { handler: c.renderReferenceElement },
                    ReferenceLine: { handler: Se },
                    ReferenceDot: { handler: c.renderReferenceElement },
                    XAxis: { handler: Se },
                    YAxis: { handler: Se },
                    Brush: { handler: c.renderBrush, once: !0 },
                    Bar: { handler: c.renderGraphicChild },
                    Line: { handler: c.renderGraphicChild },
                    Area: { handler: c.renderGraphicChild },
                    Radar: { handler: c.renderGraphicChild },
                    RadialBar: { handler: c.renderGraphicChild },
                    Scatter: { handler: c.renderGraphicChild },
                    Pie: { handler: c.renderGraphicChild },
                    Funnel: { handler: c.renderGraphicChild },
                    Tooltip: { handler: c.renderCursor, once: !0 },
                    PolarGrid: { handler: c.renderPolarGrid, once: !0 },
                    PolarAngleAxis: { handler: c.renderPolarAxis },
                    PolarRadiusAxis: { handler: c.renderPolarAxis },
                    Customized: { handler: c.renderCustomized },
                  }),
                  (c.clipPathId = "".concat(
                    null !== (o = t.id) && void 0 !== o
                      ? o
                      : (0, k.NF)("recharts"),
                    "-clip",
                  )),
                  (c.throttleTriggeredAfterMouseMove = d()(
                    c.triggeredAfterMouseMove,
                    null !== (a = t.throttleDelay) && void 0 !== a
                      ? a
                      : 1e3 / 60,
                  )),
                  (c.state = {}),
                  c
                );
              }
              return (
                (function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function",
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e && he(t, e);
                })(r, t),
                (o = r),
                (c = [
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
                        }),
                        this.displayDefaultTooltip();
                    },
                  },
                  {
                    key: "displayDefaultTooltip",
                    value: function () {
                      var t = this.props,
                        e = t.children,
                        r = t.data,
                        n = t.height,
                        o = t.layout,
                        i = (0, S.BU)(e, x.m);
                      if (i) {
                        var a = i.props.defaultIndex;
                        if (
                          !(
                            "number" != typeof a ||
                            a < 0 ||
                            a > this.state.tooltipTicks.length - 1
                          )
                        ) {
                          var u =
                              this.state.tooltipTicks[a] &&
                              this.state.tooltipTicks[a].value,
                            c = Ee(this.state, r, a, u),
                            l = this.state.tooltipTicks[a].coordinate,
                            s = (this.state.offset.top + n) / 2,
                            f =
                              "horizontal" === o
                                ? { x: l, y: s }
                                : { y: l, x: s },
                            p = this.state.formattedGraphicalItems.find(
                              function (t) {
                                return "Scatter" === t.item.type.name;
                              },
                            );
                          p &&
                            ((f = be(
                              be({}, f),
                              p.props.points[a].tooltipPosition,
                            )),
                            (c = p.props.points[a].tooltipPayload));
                          var h = {
                            activeTooltipIndex: a,
                            isTooltipActive: !0,
                            activeLabel: u,
                            activePayload: c,
                            activeCoordinate: f,
                          };
                          this.setState(h),
                            this.renderCursor(i),
                            this.accessibilityManager.setIndex(a);
                        }
                      }
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
                  {
                    key: "componentDidUpdate",
                    value: function (t) {
                      (0, S.OV)(
                        [(0, S.BU)(t.children, x.m)],
                        [(0, S.BU)(this.props.children, x.m)],
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
                      var t = (0, S.BU)(this.props.children, x.m);
                      if (t && "boolean" == typeof t.props.shared) {
                        var e = t.props.shared ? "axis" : "item";
                        return l.indexOf(e) >= 0 ? e : a;
                      }
                      return a;
                    },
                  },
                  {
                    key: "getMouseInfo",
                    value: function (t) {
                      if (!this.container) return null;
                      var e = this.container,
                        r = e.getBoundingClientRect(),
                        n = (0, K.A3)(r),
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
                        var s = (0, k.lX)(c).scale,
                          f = (0, k.lX)(l).scale,
                          p = s && s.invert ? s.invert(o.chartX) : null,
                          h = f && f.invert ? f.invert(o.chartY) : null;
                        return be(be({}, o), {}, { xValue: p, yValue: h });
                      }
                      var y = ke(
                        this.state,
                        this.props.data,
                        this.props.layout,
                        a,
                      );
                      return y ? be(be({}, o), y) : null;
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
                        var s = (0, k.lX)(c);
                        return (0, Et.yy)({ x: o, y: i }, s);
                      }
                      return null;
                    },
                  },
                  {
                    key: "parseEventsOfWrapper",
                    value: function () {
                      var t = this.props.children,
                        e = this.getTooltipEventType(),
                        r = (0, S.BU)(t, x.m),
                        n = {};
                      return (
                        r &&
                          "axis" === e &&
                          (n =
                            "click" === r.props.trigger
                              ? { onClick: this.handleClick }
                              : {
                                  onMouseEnter: this.handleMouseEnter,
                                  onDoubleClick: this.handleDoubleClick,
                                  onMouseMove: this.handleMouseMove,
                                  onMouseLeave: this.handleMouseLeave,
                                  onTouchMove: this.handleTouchMove,
                                  onTouchStart: this.handleTouchStart,
                                  onTouchEnd: this.handleTouchEnd,
                                  onContextMenu: this.handleContextMenu,
                                }),
                        be(
                          be({}, (0, Ct._U)(this.props, this.handleOuterEvent)),
                          n,
                        )
                      );
                    },
                  },
                  {
                    key: "addListener",
                    value: function () {
                      Tt.on(_t, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "removeListener",
                    value: function () {
                      Tt.removeListener(_t, this.handleReceiveSyncEvent);
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
                          (e === (0, S.Mn)(a.item.type) && r === a.childIndex)
                        )
                          return a;
                      }
                      return null;
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
                            var r = ue(e, 2),
                              n = r[0],
                              o = r[1];
                            return be(be({}, t), {}, ge({}, n, o.scale));
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
                            var r = ue(e, 2),
                              n = r[0],
                              o = r[1];
                            return be(be({}, t), {}, ge({}, n, o.scale));
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
                            l =
                              void 0 !== c.type.defaultProps
                                ? be(be({}, c.type.defaultProps), c.props)
                                : c.props,
                            s = (0, S.Mn)(c.type);
                          if ("Bar" === s) {
                            var f = (u.data || []).find(function (e) {
                              return (0, j.J)(t, e);
                            });
                            if (f) return { graphicalItem: a, payload: f };
                          } else if ("RadialBar" === s) {
                            var p = (u.data || []).find(function (e) {
                              return (0, Et.yy)(t, e);
                            });
                            if (p) return { graphicalItem: a, payload: p };
                          } else if (
                            (0, Lt.NE)(a, n) ||
                            (0, Lt.nZ)(a, n) ||
                            (0, Lt.xQ)(a, n)
                          ) {
                            var h = (0, Lt.GG)({
                                graphicalItem: a,
                                activeTooltipItem: n,
                                itemData: l.data,
                              }),
                              y = void 0 === l.activeIndex ? h : l.activeIndex;
                            return {
                              graphicalItem: be(
                                be({}, a),
                                {},
                                { childIndex: y },
                              ),
                              payload: (0, Lt.xQ)(a, n)
                                ? l.data[h]
                                : a.props.data[h],
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
                      if (!(0, S.Me)(this)) return null;
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
                        h = ce(o, oe),
                        y = (0, S.J9)(h, !1);
                      if (s)
                        return n.createElement(
                          re.DR,
                          {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId,
                          },
                          n.createElement(
                            b.u,
                            ae({}, y, {
                              width: u,
                              height: c,
                              title: f,
                              desc: p,
                            }),
                            this.renderClipPath(),
                            (0, S.ee)(i, this.renderMap),
                          ),
                        );
                      this.props.accessibilityLayer &&
                        ((y.tabIndex =
                          null !== (e = this.props.tabIndex) && void 0 !== e
                            ? e
                            : 0),
                        (y.role =
                          null !== (r = this.props.role) && void 0 !== r
                            ? r
                            : "application"),
                        (y.onKeyDown = function (e) {
                          t.accessibilityManager.keyboardEvent(e);
                        }),
                        (y.onFocus = function () {
                          t.accessibilityManager.focus();
                        }));
                      var d = this.parseEventsOfWrapper();
                      return n.createElement(
                        re.DR,
                        {
                          state: this.state,
                          width: this.props.width,
                          height: this.props.height,
                          clipPathId: this.clipPathId,
                        },
                        n.createElement(
                          "div",
                          ae(
                            {
                              className: (0, v.A)("recharts-wrapper", a),
                              style: be(
                                {
                                  position: "relative",
                                  cursor: "default",
                                  width: u,
                                  height: c,
                                },
                                l,
                              ),
                            },
                            d,
                            {
                              ref: function (e) {
                                t.container = e;
                              },
                            },
                          ),
                          n.createElement(
                            b.u,
                            ae({}, y, {
                              width: u,
                              height: c,
                              title: f,
                              desc: p,
                              style: Oe,
                            }),
                            this.renderClipPath(),
                            (0, S.ee)(i, this.renderMap),
                          ),
                          this.renderLegend(),
                          this.renderTooltip(),
                        ),
                      );
                    },
                  },
                ]),
                c && le(o.prototype, c),
                s && le(o, s),
                Object.defineProperty(o, "prototype", { writable: !1 }),
                o
              );
              var o, c, s;
            })(n.Component);
          ge(T, "displayName", e),
            ge(
              T,
              "defaultProps",
              be(
                {
                  layout: "horizontal",
                  stackOffset: "none",
                  barCategoryGap: "10%",
                  barGap: 4,
                  margin: { top: 5, right: 5, bottom: 5, left: 5 },
                  reverseStackOrder: !1,
                  syncMethod: "index",
                },
                A,
              ),
            ),
            ge(T, "getDerivedStateFromProps", function (t, e) {
              var r = t.dataKey,
                n = t.data,
                o = t.children,
                a = t.width,
                u = t.height,
                c = t.layout,
                l = t.stackOffset,
                s = t.margin,
                f = e.dataStartIndex,
                p = e.dataEndIndex;
              if (void 0 === e.updateId) {
                var h = _e(t);
                return be(
                  be(
                    be({}, h),
                    {},
                    { updateId: 0 },
                    M(be(be({ props: t }, h), {}, { updateId: 0 }), e),
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
                !(0, kt.b)(s, e.prevMargin)
              ) {
                var y = _e(t),
                  d = {
                    chartX: e.chartX,
                    chartY: e.chartY,
                    isTooltipActive: e.isTooltipActive,
                  },
                  v = be(be({}, ke(e, n, c)), {}, { updateId: e.updateId + 1 }),
                  m = be(be(be({}, y), d), v);
                return be(
                  be(be({}, m), M(be({ props: t }, m), e)),
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
              if (!(0, S.OV)(o, e.prevChildren)) {
                var b,
                  g,
                  x,
                  w,
                  O = (0, S.BU)(o, H),
                  j =
                    O &&
                    null !==
                      (b =
                        null === (g = O.props) || void 0 === g
                          ? void 0
                          : g.startIndex) &&
                    void 0 !== b
                      ? b
                      : f,
                  A =
                    O &&
                    null !==
                      (x =
                        null === (w = O.props) || void 0 === w
                          ? void 0
                          : w.endIndex) &&
                    void 0 !== x
                      ? x
                      : p,
                  P = j !== f || A !== p,
                  E = !i()(n) && !P ? e.updateId : e.updateId + 1;
                return be(
                  be(
                    { updateId: E },
                    M(
                      be(
                        be({ props: t }, e),
                        {},
                        { updateId: E, dataStartIndex: j, dataEndIndex: A },
                      ),
                      e,
                    ),
                  ),
                  {},
                  { prevChildren: o, dataStartIndex: j, dataEndIndex: A },
                );
              }
              return null;
            }),
            ge(T, "renderActiveDot", function (t, e, r) {
              var o;
              return (
                (o = (0, n.isValidElement)(t)
                  ? (0, n.cloneElement)(t, e)
                  : u()(t)
                    ? t(e)
                    : n.createElement(O.c, e)),
                n.createElement(
                  g.W,
                  { className: "recharts-active-dot", key: r },
                  o,
                )
              );
            });
          var _ = (0, n.forwardRef)(function (t, e) {
            return n.createElement(T, ae({}, t, { ref: e }));
          });
          return (_.displayName = T.displayName), _;
        };
    },
    49404: (t, e, r) => {
      "use strict";
      r.d(e, { f: () => n });
      var n = function (t) {
        return null;
      };
      n.displayName = "Cell";
    },
    39864: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => M });
      var n = r(90626),
        o = r(64609),
        i = r.n(o),
        a = r(3316),
        u = r.n(a),
        c = r(97827),
        l = r.n(c),
        s = r(90018),
        f = r(9675),
        p = r(50247),
        h = r(91038),
        y = r(50322);
      function d(t) {
        return (
          (d =
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
          d(t)
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
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != d(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != d(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == d(n) ? n : n + "") in t
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
            d = p.cx,
            v = p.cy,
            m = p.innerRadius,
            b = p.outerRadius,
            g = p.startAngle,
            x = p.endAngle,
            w = p.clockWise,
            O = (m + b) / 2,
            S = (function (t, e) {
              return (0, h.sA)(e - t) * Math.min(Math.abs(e - t), 360);
            })(g, x),
            A = S >= 0 ? 1 : -1;
          "insideStart" === u
            ? ((o = g + A * l), (a = w))
            : "insideEnd" === u
              ? ((o = x - A * l), (a = !w))
              : "end" === u && ((o = x + A * l), (a = w)),
            (a = S <= 0 ? a : !a);
          var P = (0, y.IZ)(d, v, O, o),
            E = (0, y.IZ)(d, v, O, o + 359 * (a ? 1 : -1)),
            k = "M"
              .concat(P.x, ",")
              .concat(P.y, "\n    A")
              .concat(O, ",")
              .concat(O, ",0,1,")
              .concat(a ? 0 : 1, ",\n    ")
              .concat(E.x, ",")
              .concat(E.y),
            M = i()(t.id) ? (0, h.NF)("recharts-radial-line-") : t.id;
          return n.createElement(
            "text",
            j({}, r, {
              dominantBaseline: "central",
              className: (0, s.A)("recharts-radial-bar-label", f),
            }),
            n.createElement(
              "defs",
              null,
              n.createElement("path", { id: M, d: k }),
            ),
            n.createElement("textPath", { xlinkHref: "#".concat(M) }, e),
          );
        },
        P = function (t) {
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
            var s = (0, y.IZ)(i, a, c + r, l),
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
            h = (0, y.IZ)(i, a, p, l);
          return {
            x: h.x,
            y: h.y,
            textAnchor: "middle",
            verticalAnchor: "middle",
          };
        },
        E = function (t) {
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
            y = f > 0 ? "end" : "start",
            d = f > 0 ? "start" : "end",
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
                  verticalAnchor: y,
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
                  verticalAnchor: d,
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
                      verticalAnchor: d,
                    },
                    j,
                  )
                : "insideBottom" === o
                  ? w(
                      {
                        x: a + c / 2,
                        y: u + s - p,
                        textAnchor: "middle",
                        verticalAnchor: y,
                      },
                      j,
                    )
                  : "insideTopLeft" === o
                    ? w(
                        {
                          x: a + m,
                          y: u + p,
                          textAnchor: g,
                          verticalAnchor: d,
                        },
                        j,
                      )
                    : "insideTopRight" === o
                      ? w(
                          {
                            x: a + c - m,
                            y: u + p,
                            textAnchor: b,
                            verticalAnchor: d,
                          },
                          j,
                        )
                      : "insideBottomLeft" === o
                        ? w(
                            {
                              x: a + m,
                              y: u + s - p,
                              textAnchor: g,
                              verticalAnchor: y,
                            },
                            j,
                          )
                        : "insideBottomRight" === o
                          ? w(
                              {
                                x: a + c - m,
                                y: u + s - p,
                                textAnchor: b,
                                verticalAnchor: y,
                              },
                              j,
                            )
                          : l()(o) &&
                              ((0, h.Et)(o.x) || (0, h._3)(o.x)) &&
                              ((0, h.Et)(o.y) || (0, h._3)(o.y))
                            ? w(
                                {
                                  x: a + (0, h.F4)(o.x, c),
                                  y: u + (0, h.F4)(o.y, s),
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
          return "cx" in t && (0, h.Et)(t.cx);
        };
      function M(t) {
        var e,
          r = t.offset,
          o = w({ offset: void 0 === r ? 5 : r }, g(t, v)),
          a = o.viewBox,
          c = o.position,
          l = o.value,
          h = o.children,
          y = o.content,
          d = o.className,
          m = void 0 === d ? "" : d,
          b = o.textBreakAll;
        if (!a || (i()(l) && i()(h) && !(0, n.isValidElement)(y) && !u()(y)))
          return null;
        if ((0, n.isValidElement)(y)) return (0, n.cloneElement)(y, o);
        if (u()(y)) {
          if (((e = (0, n.createElement)(y, o)), (0, n.isValidElement)(e)))
            return e;
        } else e = S(o);
        var x = k(a),
          O = (0, p.J9)(o, !0);
        if (x && ("insideStart" === c || "insideEnd" === c || "end" === c))
          return A(o, e, O);
        var M = x ? P(o) : E(o);
        return n.createElement(
          f.E,
          j({ className: (0, s.A)("recharts-label", m) }, O, M, {
            breakAll: b,
          }),
          e,
        );
      }
      M.displayName = "Label";
      var T = function (t) {
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
          y = t.left,
          d = t.width,
          v = t.height,
          m = t.clockWise,
          b = t.labelViewBox;
        if (b) return b;
        if ((0, h.Et)(d) && (0, h.Et)(v)) {
          if ((0, h.Et)(s) && (0, h.Et)(f))
            return { x: s, y: f, width: d, height: v };
          if ((0, h.Et)(p) && (0, h.Et)(y))
            return { x: p, y, width: d, height: v };
        }
        return (0, h.Et)(s) && (0, h.Et)(f)
          ? { x: s, y: f, width: 0, height: 0 }
          : (0, h.Et)(e) && (0, h.Et)(r)
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
      (M.parseViewBox = T),
        (M.renderCallByParent = function (t, e) {
          var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && r && !t.label)) return null;
          var o = t.children,
            i = T(t),
            a = (0, p.aS)(o, M).map(function (t, r) {
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
                : (0, h.vh)(t)
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
    94816: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => E });
      var n = r(90626),
        o = r(64609),
        i = r.n(o),
        a = r(97827),
        u = r.n(a),
        c = r(3316),
        l = r.n(c),
        s = r(73912),
        f = r.n(s),
        p = r(39864),
        h = r(49891),
        y = r(50247),
        d = r(89998);
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
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != v(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != v(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == v(n) ? n : n + "") in t
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
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      var P = function (t) {
        return Array.isArray(t.value) ? f()(t.value) : t.value;
      };
      function E(t) {
        var e = t.valueAccessor,
          r = void 0 === e ? P : e,
          o = A(t, m),
          a = o.data,
          u = o.dataKey,
          c = o.clockWise,
          l = o.id,
          s = o.textBreakAll,
          f = A(o, b);
        return a && a.length
          ? n.createElement(
              h.W,
              { className: "recharts-label-list" },
              a.map(function (t, e) {
                var o = i()(u) ? r(t, e) : (0, d.kr)(t && t.payload, u),
                  a = i()(l) ? {} : { id: "".concat(l, "-").concat(e) };
                return n.createElement(
                  p.J,
                  w({}, (0, y.J9)(t, !0), f, a, {
                    parentViewBox: t.parentViewBox,
                    value: o,
                    textBreakAll: s,
                    viewBox: p.J.parseViewBox(
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
      (E.displayName = "LabelList"),
        (E.renderCallByParent = function (t, e) {
          var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && r && !t.label)) return null;
          var o = t.children,
            i = (0, y.aS)(o, E).map(function (t, r) {
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
                      ? n.createElement(E, {
                          key: "labelList-implicit",
                          data: e,
                        })
                      : n.isValidElement(t) || l()(t)
                        ? n.createElement(E, {
                            key: "labelList-implicit",
                            data: e,
                            content: t,
                          })
                        : u()(t)
                          ? n.createElement(
                              E,
                              w({ data: e }, t, { key: "labelList-implicit" }),
                            )
                          : null
                    : null;
                })(t.label, e),
              ].concat(g(i))
            : i;
        });
    },
    94075: (t, e, r) => {
      "use strict";
      r.d(e, { s: () => L });
      var n = r(90626),
        o = r(3316),
        i = r.n(o),
        a = r(90018),
        u = r(97380),
        c = r(83457),
        l = r(59098),
        s = r(62426);
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
      function y(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, x(n.key), n);
        }
      }
      function d(t, e, r) {
        return (
          (e = m(e)),
          (function (t, e) {
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
          })(
            t,
            v()
              ? Reflect.construct(e, r || [], m(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function v() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (v = function () {
          return !!t;
        })();
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
          if ("object" != f(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != f(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == f(e) ? e : e + "";
      }
      var w = 32,
        O = (function (t) {
          function e() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              d(this, e, arguments)
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && b(t, e);
            })(e, t),
            (r = e),
            (o = [
              {
                key: "renderIcon",
                value: function (t) {
                  var e = this.props.inactiveColor,
                    r = 16,
                    o = w / 6,
                    i = w / 3,
                    a = t.inactive ? e : t.color;
                  if ("plainline" === t.type)
                    return n.createElement("line", {
                      strokeWidth: 4,
                      fill: "none",
                      stroke: a,
                      strokeDasharray: t.payload.strokeDasharray,
                      x1: 0,
                      y1: r,
                      x2: w,
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
                        .concat(w, "M")
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
                        .concat(w, "v")
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
                              g(t, e, r[e]);
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
                  return n.createElement(l.i, {
                    fill: a,
                    cx: r,
                    cy: r,
                    size: w,
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
                    y = { x: 0, y: 0, width: w, height: w },
                    d = {
                      display: "horizontal" === l ? "inline-block" : "block",
                      marginRight: 10,
                    },
                    v = {
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: 4,
                    };
                  return r.map(function (e, r) {
                    var l = e.formatter || f,
                      m = (0, a.A)(
                        g(
                          g(
                            { "recharts-legend-item": !0 },
                            "legend-item-".concat(r),
                            !0,
                          ),
                          "inactive",
                          e.inactive,
                        ),
                      );
                    if ("none" === e.type) return null;
                    var b = i()(e.value) ? null : e.value;
                    (0, u.R)(
                      !i()(e.value),
                      'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>',
                    );
                    var x = e.inactive ? h : e.color;
                    return n.createElement(
                      "li",
                      p(
                        {
                          className: m,
                          style: d,
                          key: "legend-item-".concat(r),
                        },
                        (0, s.XC)(t.props, e, r),
                      ),
                      n.createElement(
                        c.u,
                        { width: o, height: o, viewBox: y, style: v },
                        t.renderIcon(e),
                      ),
                      n.createElement(
                        "span",
                        {
                          className: "recharts-legend-item-text",
                          style: { color: x },
                        },
                        l ? l(b, e, r) : b,
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
            o && y(r.prototype, o),
            f && y(r, f),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, o, f;
        })(n.PureComponent);
      g(O, "displayName", "Legend"),
        g(O, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "middle",
          inactiveColor: "#ccc",
        });
      var j = r(91038),
        S = r(46337);
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
      var P = ["ref"];
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
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? E(Object(r), !0).forEach(function (e) {
                I(t, e, r[e]);
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
      function M(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, N(n.key), n);
        }
      }
      function T(t, e, r) {
        return (
          (e = C(e)),
          (function (t, e) {
            if (e && ("object" === A(e) || "function" == typeof e)) return e;
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
          })(
            t,
            _()
              ? Reflect.construct(e, r || [], C(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function _() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (_ = function () {
          return !!t;
        })();
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
      function D(t, e) {
        return (
          (D = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          D(t, e)
        );
      }
      function I(t, e, r) {
        return (
          (e = N(e)) in t
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
      function N(t) {
        var e = (function (t, e) {
          if ("object" != A(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != A(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == A(e) ? e : e + "";
      }
      function B(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      function R(t) {
        return t.value;
      }
      var L = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            I((t = T(this, e, [].concat(n))), "lastBoundingBox", {
              width: -1,
              height: -1,
            }),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && D(t, e);
          })(e, t),
          (r = e),
          (i = [
            {
              key: "getWithHeight",
              value: function (t, e) {
                var r = k(k({}, this.defaultProps), t.props).layout;
                return "vertical" === r && (0, j.Et)(t.props.height)
                  ? { height: t.props.height }
                  : "horizontal" === r
                    ? { width: t.props.width || e }
                    : null;
              },
            },
          ]),
          (o = [
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
                  var t = this.wrapperNode.getBoundingClientRect();
                  return (
                    (t.height = this.wrapperNode.offsetHeight),
                    (t.width = this.wrapperNode.offsetWidth),
                    t
                  );
                }
                return null;
              },
            },
            {
              key: "updateBBox",
              value: function () {
                var t = this.props.onBBoxUpdate,
                  e = this.getBBox();
                e
                  ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
                      Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
                    ((this.lastBoundingBox.width = e.width),
                    (this.lastBoundingBox.height = e.height),
                    t && t(e))
                  : (-1 === this.lastBoundingBox.width &&
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
                  ? k({}, this.lastBoundingBox)
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
                  k(k({}, e), r)
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
                  l = k(
                    k(
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
                    var r = B(e, P);
                    return n.createElement(O, r);
                  })(
                    r,
                    k(k({}, this.props), {}, { payload: (0, S.s)(c, u, R) }),
                  ),
                );
              },
            },
          ]) && M(r.prototype, o),
          i && M(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, i;
      })(n.PureComponent);
      I(L, "displayName", "Legend"),
        I(L, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
        });
    },
    69235: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => v });
      var n = r(90018),
        o = r(90626),
        i = r(51504),
        a = r.n(i),
        u = r(91038),
        c = r(97380),
        l = r(50247);
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
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != s(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != s(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == s(n) ? n : n + "") in t
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
            if ("string" == typeof t) return d(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return d(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var v = (0, o.forwardRef)(function (t, e) {
        var r = t.aspect,
          i = t.initialDimension,
          s = void 0 === i ? { width: -1, height: -1 } : i,
          f = t.width,
          h = void 0 === f ? "100%" : f,
          d = t.height,
          v = void 0 === d ? "100%" : d,
          m = t.minWidth,
          b = void 0 === m ? 0 : m,
          g = t.minHeight,
          x = t.maxHeight,
          w = t.children,
          O = t.debounce,
          j = void 0 === O ? 0 : O,
          S = t.id,
          A = t.className,
          P = t.onResize,
          E = t.style,
          k = void 0 === E ? {} : E,
          M = (0, o.useRef)(null),
          T = (0, o.useRef)();
        (T.current = P),
          (0, o.useImperativeHandle)(e, function () {
            return Object.defineProperty(M.current, "current", {
              get: function () {
                return (
                  console.warn(
                    "The usage of ref.current.current is deprecated and will no longer be supported.",
                  ),
                  M.current
                );
              },
              configurable: !0,
            });
          });
        var _ = y(
            (0, o.useState)({
              containerWidth: s.width,
              containerHeight: s.height,
            }),
            2,
          ),
          C = _[0],
          D = _[1],
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
            j > 0 && (t = a()(t, j, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              r = M.current.getBoundingClientRect(),
              n = r.width,
              o = r.height;
            return (
              I(n, o),
              e.observe(M.current),
              function () {
                e.disconnect();
              }
            );
          },
          [I, j],
        );
        var N = (0, o.useMemo)(
          function () {
            var t = C.containerWidth,
              e = C.containerHeight;
            if (t < 0 || e < 0) return null;
            (0, c.R)(
              (0, u._3)(h) || (0, u._3)(v),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              h,
              v,
            ),
              (0, c.R)(
                !r || r > 0,
                "The aspect(%s) must be greater than zero.",
                r,
              );
            var n = (0, u._3)(h) ? t : h,
              i = (0, u._3)(v) ? e : v;
            r &&
              r > 0 &&
              (n ? (i = n / r) : i && (n = i * r), x && i > x && (i = x)),
              (0, c.R)(
                n > 0 || i > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                n,
                i,
                h,
                v,
                b,
                g,
                r,
              );
            var a = !Array.isArray(w) && (0, l.Mn)(w.type).endsWith("Chart");
            return o.Children.map(w, function (t) {
              return o.isValidElement(t)
                ? (0, o.cloneElement)(
                    t,
                    p(
                      { width: n, height: i },
                      a
                        ? {
                            style: p(
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
          [r, w, v, x, g, b, C, h],
        );
        return o.createElement(
          "div",
          {
            id: S ? "".concat(S) : void 0,
            className: (0, n.A)("recharts-responsive-container", A),
            style: p(
              p({}, k),
              {},
              { width: h, height: v, minWidth: b, minHeight: g, maxHeight: x },
            ),
            ref: M,
          },
          N,
        );
      });
    },
    9675: (t, e, r) => {
      "use strict";
      r.d(e, { E: () => z });
      var n = r(90626),
        o = r(64609),
        i = r.n(o),
        a = r(90018),
        u = r(91038),
        c = r(1036),
        l = r(50247),
        s = r(41242);
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
      function y(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, d(n.key), n);
        }
      }
      function d(t) {
        var e = (function (t, e) {
          if ("object" != f(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != f(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == f(e) ? e : e + "";
      }
      var v = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        m = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        b = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
        g = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
        x = {
          cm: 96 / 2.54,
          mm: 96 / 25.4,
          pt: 96 / 72,
          pc: 16,
          in: 96,
          Q: 96 / 101.6,
          px: 1,
        },
        w = Object.keys(x),
        O = "NaN";
      var j = (function () {
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
            "" === r || b.test(r) || ((this.num = NaN), (this.unit = "")),
            w.includes(r) &&
              ((this.num = (function (t, e) {
                return t * x[e];
              })(e, r)),
              (this.unit = "px"));
        }
        return (
          (e = t),
          (n = [
            {
              key: "parse",
              value: function (e) {
                var r,
                  n = p(null !== (r = g.exec(e)) && void 0 !== r ? r : [], 3),
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
          ]) && y(e.prototype, r),
          n && y(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, r, n;
      })();
      function S(t) {
        if (t.includes(O)) return O;
        for (var e = t; e.includes("*") || e.includes("/"); ) {
          var r,
            n = p(null !== (r = v.exec(e)) && void 0 !== r ? r : [], 4),
            o = n[1],
            i = n[2],
            a = n[3],
            u = j.parse(null != o ? o : ""),
            c = j.parse(null != a ? a : ""),
            l = "*" === i ? u.multiply(c) : u.divide(c);
          if (l.isNaN()) return O;
          e = e.replace(v, l.toString());
        }
        for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
          var s,
            f = p(null !== (s = m.exec(e)) && void 0 !== s ? s : [], 4),
            h = f[1],
            y = f[2],
            d = f[3],
            b = j.parse(null != h ? h : ""),
            g = j.parse(null != d ? d : ""),
            x = "+" === y ? b.add(g) : b.subtract(g);
          if (x.isNaN()) return O;
          e = e.replace(m, x.toString());
        }
        return e;
      }
      var A = /\(([^()]*)\)/;
      function P(t) {
        var e = t.replace(/\s+/g, "");
        return (
          (e = (function (t) {
            for (var e = t; e.includes("("); ) {
              var r = p(A.exec(e), 2)[1];
              e = e.replace(A, S(r));
            }
            return e;
          })(e)),
          (e = S(e))
        );
      }
      function E(t) {
        var e = (function (t) {
          try {
            return P(t);
          } catch (t) {
            return O;
          }
        })(t.slice(5, -1));
        return e === O ? "" : e;
      }
      var k = [
          "x",
          "y",
          "lineHeight",
          "capHeight",
          "scaleToFit",
          "textAnchor",
          "verticalAnchor",
          "fill",
        ],
        M = ["dx", "dy", "angle", "className", "breakAll"];
      function T() {
        return (
          (T = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          T.apply(this, arguments)
        );
      }
      function _(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
            if ("string" == typeof t) return D(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return D(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function D(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var I = /[ \f\n\r\t\v\u2028\u2029]+/,
        N = function (t) {
          var e = t.children,
            r = t.breakAll,
            n = t.style;
          try {
            var o = [];
            return (
              i()(e) ||
                (o = r ? e.toString().split("") : e.toString().split(I)),
              {
                wordsWithComputedWidth: o.map(function (t) {
                  return { word: t, width: (0, s.Pu)(t, n).width };
                }),
                spaceWidth: r ? 0 : (0, s.Pu)(" ", n).width,
              }
            );
          } catch (t) {
            return null;
          }
        },
        B = function (t) {
          return [{ words: i()(t) ? [] : t.toString().split(I) }];
        },
        R = function (t) {
          var e = t.width,
            r = t.scaleToFit,
            n = t.children,
            o = t.style,
            i = t.breakAll,
            a = t.maxLines;
          if ((e || r) && !c.m.isSsr) {
            var l = N({ breakAll: i, children: n, style: o });
            return l
              ? (function (t, e, r, n, o) {
                  var i = t.maxLines,
                    a = t.children,
                    c = t.style,
                    l = t.breakAll,
                    s = (0, u.Et)(i),
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
                    var y,
                      d = function (t) {
                        var e = f.slice(0, t),
                          r = N({
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
                      x = C(d(g - 1), 2),
                      w = x[0],
                      O = x[1],
                      j = C(d(g), 1)[0];
                    if (
                      (w || j || (v = g + 1), w && j && (m = g - 1), !w && j)
                    ) {
                      y = O;
                      break;
                    }
                    b++;
                  }
                  return y || h;
                })(
                  { breakAll: i, children: n, maxLines: a, style: o },
                  l.wordsWithComputedWidth,
                  l.spaceWidth,
                  e,
                  r,
                )
              : B(n);
          }
          return B(n);
        },
        L = "#808080",
        z = function (t) {
          var e = t.x,
            r = void 0 === e ? 0 : e,
            o = t.y,
            i = void 0 === o ? 0 : o,
            c = t.lineHeight,
            s = void 0 === c ? "1em" : c,
            f = t.capHeight,
            p = void 0 === f ? "0.71em" : f,
            h = t.scaleToFit,
            y = void 0 !== h && h,
            d = t.textAnchor,
            v = void 0 === d ? "start" : d,
            m = t.verticalAnchor,
            b = void 0 === m ? "end" : m,
            g = t.fill,
            x = void 0 === g ? L : g,
            w = _(t, k),
            O = (0, n.useMemo)(
              function () {
                return R({
                  breakAll: w.breakAll,
                  children: w.children,
                  maxLines: w.maxLines,
                  scaleToFit: y,
                  style: w.style,
                  width: w.width,
                });
              },
              [w.breakAll, w.children, w.maxLines, y, w.style, w.width],
            ),
            j = w.dx,
            S = w.dy,
            A = w.angle,
            P = w.className,
            C = w.breakAll,
            D = _(w, M);
          if (!(0, u.vh)(r) || !(0, u.vh)(i)) return null;
          var I,
            N = r + ((0, u.Et)(j) ? j : 0),
            B = i + ((0, u.Et)(S) ? S : 0);
          switch (b) {
            case "start":
              I = E("calc(".concat(p, ")"));
              break;
            case "middle":
              I = E(
                "calc("
                  .concat((O.length - 1) / 2, " * -")
                  .concat(s, " + (")
                  .concat(p, " / 2))"),
              );
              break;
            default:
              I = E("calc(".concat(O.length - 1, " * -").concat(s, ")"));
          }
          var z = [];
          if (y) {
            var U = O[0].width,
              F = w.width;
            z.push("scale(".concat(((0, u.Et)(F) ? F / U : 1) / U, ")"));
          }
          return (
            A &&
              z.push("rotate(".concat(A, ", ").concat(N, ", ").concat(B, ")")),
            z.length && (D.transform = z.join(" ")),
            n.createElement(
              "text",
              T({}, (0, l.J9)(D, !0), {
                x: N,
                y: B,
                className: (0, a.A)("recharts-text", P),
                textAnchor: v,
                fill: x.includes("url") ? L : x,
              }),
              O.map(function (t, e) {
                var r = t.words.join(C ? "" : " ");
                return n.createElement(
                  "tspan",
                  {
                    x: N,
                    dy: 0 === e ? I : s,
                    key: "".concat(r, "-").concat(e),
                  },
                  r,
                );
              }),
            )
          );
        };
    },
    85010: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => G });
      var n = r(90626),
        o = r(97825),
        i = r.n(o),
        a = r(64609),
        u = r.n(a),
        c = r(90018),
        l = r(91038);
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
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(r), !0).forEach(function (e) {
                v(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : y(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function v(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != s(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != s(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == s(n) ? n : n + "") in t
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
      function m(t) {
        return Array.isArray(t) && (0, l.vh)(t[0]) && (0, l.vh)(t[1])
          ? t.join(" ~ ")
          : t;
      }
      var b = function (t) {
        var e = t.separator,
          r = void 0 === e ? " : " : e,
          o = t.contentStyle,
          a = void 0 === o ? {} : o,
          s = t.itemStyle,
          h = void 0 === s ? {} : s,
          y = t.labelStyle,
          v = void 0 === y ? {} : y,
          b = t.payload,
          g = t.formatter,
          x = t.itemSorter,
          w = t.wrapperClassName,
          O = t.labelClassName,
          j = t.label,
          S = t.labelFormatter,
          A = t.accessibilityLayer,
          P = void 0 !== A && A,
          E = d(
            {
              margin: 0,
              padding: 10,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              whiteSpace: "nowrap",
            },
            a,
          ),
          k = d({ margin: 0 }, v),
          M = !u()(j),
          T = M ? j : "",
          _ = (0, c.A)("recharts-default-tooltip", w),
          C = (0, c.A)("recharts-tooltip-label", O);
        M && S && null != b && (T = S(j, b));
        var D = P ? { role: "status", "aria-live": "assertive" } : {};
        return n.createElement(
          "div",
          f({ className: _, style: E }, D),
          n.createElement(
            "p",
            { className: C, style: k },
            n.isValidElement(T) ? T : "".concat(T),
          ),
          (function () {
            if (b && b.length) {
              var t = (x ? i()(b, x) : b).map(function (t, e) {
                if ("none" === t.type) return null;
                var o = d(
                    {
                      display: "block",
                      paddingTop: 4,
                      paddingBottom: 4,
                      color: t.color || "#000",
                    },
                    h,
                  ),
                  i = t.formatter || g || m,
                  a = t.value,
                  u = t.name,
                  c = a,
                  s = u;
                if (i && null != c && null != s) {
                  var f = i(a, u, t, e, b);
                  if (Array.isArray(f)) {
                    var y = p(f, 2);
                    (c = y[0]), (s = y[1]);
                  } else c = f;
                }
                return n.createElement(
                  "li",
                  {
                    className: "recharts-tooltip-item",
                    key: "tooltip-item-".concat(e),
                    style: o,
                  },
                  (0, l.vh)(s)
                    ? n.createElement(
                        "span",
                        { className: "recharts-tooltip-item-name" },
                        s,
                      )
                    : null,
                  (0, l.vh)(s)
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
        );
      };
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
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != g(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != g(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == g(n) ? n : n + "") in t
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
        var e = t.coordinate,
          r = t.translateX,
          n = t.translateY;
        return (0, c.A)(
          w,
          x(
            x(
              x(
                x(
                  {},
                  "".concat(w, "-right"),
                  (0, l.Et)(r) && e && (0, l.Et)(e.x) && r >= e.x,
                ),
                "".concat(w, "-left"),
                (0, l.Et)(r) && e && (0, l.Et)(e.x) && r < e.x,
              ),
              "".concat(w, "-bottom"),
              (0, l.Et)(n) && e && (0, l.Et)(e.y) && n >= e.y,
            ),
            "".concat(w, "-top"),
            (0, l.Et)(n) && e && (0, l.Et)(e.y) && n < e.y,
          ),
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
        if (i && (0, l.Et)(i[n])) return i[n];
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
      function k(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, I(n.key), n);
        }
      }
      function M(t, e, r) {
        return (
          (e = _(e)),
          (function (t, e) {
            if (e && ("object" === A(e) || "function" == typeof e)) return e;
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
          })(
            t,
            T()
              ? Reflect.construct(e, r || [], _(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function T() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (T = function () {
          return !!t;
        })();
      }
      function _(t) {
        return (
          (_ = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          _(t)
        );
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
          if ("object" != A(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != A(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == A(e) ? e : e + "";
      }
      var N = (function (t) {
          function e() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
              n[o] = arguments[o];
            return (
              D((t = M(this, e, [].concat(n))), "state", {
                dismissed: !1,
                dismissedAtCoordinate: { x: 0, y: 0 },
                lastBoundingBox: { width: -1, height: -1 },
              }),
              D(t, "handleKeyDown", function (e) {
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
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && C(t, e);
            })(e, t),
            (r = e),
            (o = [
              {
                key: "updateBBox",
                value: function () {
                  if (
                    this.wrapperNode &&
                    this.wrapperNode.getBoundingClientRect
                  ) {
                    var t = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(t.width - this.state.lastBoundingBox.width) > 1 ||
                      Math.abs(t.height - this.state.lastBoundingBox.height) >
                        1) &&
                      this.setState({
                        lastBoundingBox: { width: t.width, height: t.height },
                      });
                  } else
                    (-1 === this.state.lastBoundingBox.width &&
                      -1 === this.state.lastBoundingBox.height) ||
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
                    y = e.useTranslate3d,
                    d = e.viewBox,
                    v = e.wrapperStyle,
                    m = (function (t) {
                      var e,
                        r,
                        n = t.allowEscapeViewBox,
                        o = t.coordinate,
                        i = t.offsetTopLeft,
                        a = t.position,
                        u = t.reverseDirection,
                        c = t.tooltipBox,
                        l = t.useTranslate3d,
                        s = t.viewBox;
                      return {
                        cssProperties:
                          c.height > 0 && c.width > 0 && o
                            ? (function (t) {
                                var e = t.translateX,
                                  r = t.translateY;
                                return {
                                  transform: t.useTranslate3d
                                    ? "translate3d("
                                        .concat(e, "px, ")
                                        .concat(r, "px, 0)")
                                    : "translate("
                                        .concat(e, "px, ")
                                        .concat(r, "px)"),
                                };
                              })({
                                translateX: (e = S({
                                  allowEscapeViewBox: n,
                                  coordinate: o,
                                  key: "x",
                                  offsetTopLeft: i,
                                  position: a,
                                  reverseDirection: u,
                                  tooltipDimension: c.width,
                                  viewBox: s,
                                  viewBoxDimension: s.width,
                                })),
                                translateY: (r = S({
                                  allowEscapeViewBox: n,
                                  coordinate: o,
                                  key: "y",
                                  offsetTopLeft: i,
                                  position: a,
                                  reverseDirection: u,
                                  tooltipDimension: c.height,
                                  viewBox: s,
                                  viewBoxDimension: s.height,
                                })),
                                useTranslate3d: l,
                              })
                            : O,
                        cssClasses: j({
                          translateX: e,
                          translateY: r,
                          coordinate: o,
                        }),
                      };
                    })({
                      allowEscapeViewBox: o,
                      coordinate: c,
                      offsetTopLeft: f,
                      position: p,
                      reverseDirection: h,
                      tooltipBox: this.state.lastBoundingBox,
                      useTranslate3d: y,
                      viewBox: d,
                    }),
                    b = m.cssClasses,
                    g = m.cssProperties,
                    x = E(
                      E(
                        {
                          transition:
                            s && r
                              ? "transform ".concat(i, "ms ").concat(a)
                              : void 0,
                        },
                        g,
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
                      className: b,
                      style: x,
                      ref: function (e) {
                        t.wrapperNode = e;
                      },
                    },
                    u,
                  );
                },
              },
            ]) && k(r.prototype, o),
            i && k(r, i),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, o, i;
        })(n.PureComponent),
        B = r(1036),
        R = r(46337);
      function L(t) {
        return (
          (L =
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
          L(t)
        );
      }
      function z(t, e) {
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
      function U(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? z(Object(r), !0).forEach(function (e) {
                H(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : z(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function F(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, K(n.key), n);
        }
      }
      function W(t, e, r) {
        return (
          (e = q(e)),
          (function (t, e) {
            if (e && ("object" === L(e) || "function" == typeof e)) return e;
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
          })(
            t,
            $()
              ? Reflect.construct(e, r || [], q(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function $() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return ($ = function () {
          return !!t;
        })();
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
      function X(t, e) {
        return (
          (X = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          X(t, e)
        );
      }
      function H(t, e, r) {
        return (
          (e = K(e)) in t
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
      function K(t) {
        var e = (function (t, e) {
          if ("object" != L(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != L(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == L(e) ? e : e + "";
      }
      function V(t) {
        return t.dataKey;
      }
      var G = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            W(this, e, arguments)
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && X(t, e);
          })(e, t),
          (r = e),
          (o = [
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.active,
                  o = e.allowEscapeViewBox,
                  i = e.animationDuration,
                  a = e.animationEasing,
                  u = e.content,
                  c = e.coordinate,
                  l = e.filterNull,
                  s = e.isAnimationActive,
                  f = e.offset,
                  p = e.payload,
                  h = e.payloadUniqBy,
                  y = e.position,
                  d = e.reverseDirection,
                  v = e.useTranslate3d,
                  m = e.viewBox,
                  g = e.wrapperStyle,
                  x = null != p ? p : [];
                l &&
                  x.length &&
                  (x = (0, R.s)(
                    p.filter(function (e) {
                      return (
                        null != e.value &&
                        (!0 !== e.hide || t.props.includeHidden)
                      );
                    }),
                    h,
                    V,
                  ));
                var w = x.length > 0;
                return n.createElement(
                  N,
                  {
                    allowEscapeViewBox: o,
                    animationDuration: i,
                    animationEasing: a,
                    isAnimationActive: s,
                    active: r,
                    coordinate: c,
                    hasPayload: w,
                    offset: f,
                    position: y,
                    reverseDirection: d,
                    useTranslate3d: v,
                    viewBox: m,
                    wrapperStyle: g,
                  },
                  (function (t, e) {
                    return n.isValidElement(t)
                      ? n.cloneElement(t, e)
                      : "function" == typeof t
                        ? n.createElement(t, e)
                        : n.createElement(b, e);
                  })(u, U(U({}, this.props), {}, { payload: x })),
                );
              },
            },
          ]) && F(r.prototype, o),
          i && F(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, i;
      })(n.PureComponent);
      H(G, "displayName", "Tooltip"),
        H(G, "defaultProps", {
          accessibilityLayer: !1,
          allowEscapeViewBox: { x: !1, y: !1 },
          animationDuration: 400,
          animationEasing: "ease",
          contentStyle: {},
          coordinate: { x: 0, y: 0 },
          cursor: !0,
          cursorStyle: {},
          filterNull: !0,
          isAnimationActive: !B.m.isSsr,
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
    49891: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => l });
      var n = r(90626),
        o = r(90018),
        i = r(50247),
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
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
          f = (0, o.A)("recharts-layer", l);
        return n.createElement(
          "g",
          u({ className: f }, (0, i.J9)(s, !0), { ref: e }),
          r,
        );
      });
    },
    83457: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => l });
      var n = r(90626),
        o = r(90018),
        i = r(50247),
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
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
          y = t.desc,
          d = c(t, a),
          v = s || { width: r, height: l, x: 0, y: 0 },
          m = (0, o.A)("recharts-surface", f);
        return n.createElement(
          "svg",
          u({}, (0, i.J9)(d, !0, "svg"), {
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
          n.createElement("desc", null, y),
          e,
        );
      }
    },
    58847: (t, e, r) => {
      "use strict";
      r.d(e, {
        DR: () => g,
        pj: () => O,
        rY: () => k,
        yi: () => E,
        Yp: () => x,
        hj: () => P,
        sk: () => A,
        AF: () => w,
        Nk: () => S,
        $G: () => j,
      });
      var n = r(90626),
        o = r(68841),
        i = r(81639),
        a = r.n(i),
        u = r(17489),
        c = r.n(u),
        l = r(81334),
        s = r.n(l)()(
          function (t) {
            return { x: t.left, y: t.top, width: t.width, height: t.height };
          },
          function (t) {
            return ["l", t.left, "t", t.top, "w", t.width, "h", t.height].join(
              "",
            );
          },
        ),
        f = r(91038);
      var p = (0, n.createContext)(void 0),
        h = (0, n.createContext)(void 0),
        y = (0, n.createContext)(void 0),
        d = (0, n.createContext)({}),
        v = (0, n.createContext)(void 0),
        m = (0, n.createContext)(0),
        b = (0, n.createContext)(0),
        g = function (t) {
          var e = t.state,
            r = e.xAxisMap,
            o = e.yAxisMap,
            i = e.offset,
            a = t.clipPathId,
            u = t.children,
            c = t.width,
            l = t.height,
            f = s(i);
          return n.createElement(
            p.Provider,
            { value: r },
            n.createElement(
              h.Provider,
              { value: o },
              n.createElement(
                d.Provider,
                { value: i },
                n.createElement(
                  y.Provider,
                  { value: f },
                  n.createElement(
                    v.Provider,
                    { value: a },
                    n.createElement(
                      m.Provider,
                      { value: l },
                      n.createElement(b.Provider, { value: c }, u),
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        x = function () {
          return (0, n.useContext)(v);
        };
      var w = function (t) {
          var e = (0, n.useContext)(p);
          null == e && (0, o.A)(!1);
          var r = e[t];
          return null == r && (0, o.A)(!1), r;
        },
        O = function () {
          var t = (0, n.useContext)(p);
          return (0, f.lX)(t);
        },
        j = function () {
          var t = (0, n.useContext)(h);
          return (
            a()(t, function (t) {
              return c()(t.domain, Number.isFinite);
            }) || (0, f.lX)(t)
          );
        },
        S = function (t) {
          var e = (0, n.useContext)(h);
          null == e && (0, o.A)(!1);
          var r = e[t];
          return null == r && (0, o.A)(!1), r;
        },
        A = function () {
          return (0, n.useContext)(y);
        },
        P = function () {
          return (0, n.useContext)(d);
        },
        E = function () {
          return (0, n.useContext)(b);
        },
        k = function () {
          return (0, n.useContext)(m);
        };
    },
    68428: (t, e, r) => {
      "use strict";
      r.d(e, { I: () => V });
      var n = r(90626);
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
      function y(t, e, r) {
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
      function d(t, e) {
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
                v(this, this._t0, d(this, this._t0));
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
                  (this._point = 3), v(this, d(this, (r = y(this, t, e))), r);
                  break;
                default:
                  v(this, this._t0, (r = y(this, t, e)));
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
      var j = r(57949),
        S = r(94770),
        A = r(5823);
      function P(t) {
        return t[0];
      }
      function E(t) {
        return t[1];
      }
      function k(t, e) {
        var r = (0, S.A)(!0),
          n = null,
          o = p,
          i = null,
          a = (0, A.i)(u);
        function u(u) {
          var c,
            l,
            s,
            f = (u = (0, j.A)(u)).length,
            p = !1;
          for (null == n && (i = o((s = a()))), c = 0; c <= f; ++c)
            !(c < f && r((l = u[c]), c, u)) === p &&
              ((p = !p) ? i.lineStart() : i.lineEnd()),
              p && i.point(+t(l, c, u), +e(l, c, u));
          if (s) return (i = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? P : (0, S.A)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? E : (0, S.A)(e)),
          (u.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, S.A)(+e)), u)
              : t;
          }),
          (u.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, S.A)(+t)), u)
              : e;
          }),
          (u.defined = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : (0, S.A)(!!t)), u)
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
          o = (0, S.A)(!0),
          i = null,
          a = p,
          u = null,
          c = (0, A.i)(l);
        function l(l) {
          var s,
            f,
            p,
            h,
            y,
            d = (l = (0, j.A)(l)).length,
            v = !1,
            m = new Array(d),
            b = new Array(d);
          for (null == i && (u = a((y = c()))), s = 0; s <= d; ++s) {
            if (!(s < d && o((h = l[s]), s, l)) === v)
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
          if (y) return (u = null), y + "" || null;
        }
        function s() {
          return k().defined(o).curve(a).context(i);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? P : (0, S.A)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
                ? (0, S.A)(0)
                : (0, S.A)(+e)),
          (r = "function" == typeof r ? r : void 0 === r ? E : (0, S.A)(+r)),
          (l.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, S.A)(+e)), (n = null), l)
              : t;
          }),
          (l.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, S.A)(+e)), l)
              : t;
          }),
          (l.x1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, S.A)(+t)),
                l)
              : n;
          }),
          (l.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, S.A)(+t)), (r = null), l)
              : e;
          }),
          (l.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, S.A)(+t)), l)
              : e;
          }),
          (l.y1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, S.A)(+t)),
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
              ? ((o = "function" == typeof t ? t : (0, S.A)(!!t)), l)
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
      var T = r(4842),
        _ = r.n(T),
        C = r(3316),
        D = r.n(C),
        I = r(90018),
        N = r(62426),
        B = r(50247),
        R = r(91038);
      function L(t) {
        return (
          (L =
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
          L(t)
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
                W(t, e, r[e]);
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
      function W(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != L(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != L(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == L(n) ? n : n + "") in t
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
      var $ = {
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
        q = function (t) {
          return t.x === +t.x && t.y === +t.y;
        },
        X = function (t) {
          return t.x;
        },
        H = function (t) {
          return t.y;
        },
        K = function (t) {
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
              if (D()(t)) return t;
              var r = "curve".concat(_()(t));
              return ("curveMonotone" !== r && "curveBump" !== r) || !e
                ? $[r] || p
                : $["".concat(r).concat("vertical" === e ? "Y" : "X")];
            })(n, u),
            f = l
              ? i.filter(function (t) {
                  return q(t);
                })
              : i;
          if (Array.isArray(a)) {
            var h = l
                ? a.filter(function (t) {
                    return q(t);
                  })
                : a,
              y = f.map(function (t, e) {
                return F(F({}, t), {}, { base: h[e] });
              });
            return (
              (e =
                "vertical" === u
                  ? M()
                      .y(H)
                      .x1(X)
                      .x0(function (t) {
                        return t.base.x;
                      })
                  : M()
                      .x(X)
                      .y1(H)
                      .y0(function (t) {
                        return t.base.y;
                      }))
                .defined(q)
                .curve(s),
              e(y)
            );
          }
          return (
            (e =
              "vertical" === u && (0, R.Et)(a)
                ? M().y(H).x1(X).x0(a)
                : (0, R.Et)(a)
                  ? M().x(X).y1(H).y0(a)
                  : k().x(X).y(H))
              .defined(q)
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
          var a = r && r.length ? K(t) : o;
          return n.createElement(
            "path",
            z({}, (0, B.J9)(t, !1), (0, N._U)(t), {
              className: (0, I.A)("recharts-curve", e),
              d: a,
              ref: i,
            }),
          );
        };
    },
    17891: (t, e, r) => {
      "use strict";
      r.d(e, { c: () => c });
      var n = r(90626),
        o = r(90018),
        i = r(62426),
        a = r(50247);
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
          s = (0, o.A)("recharts-dot", l);
        return e === +e && r === +r && c === +c
          ? n.createElement(
              "circle",
              u({}, (0, a.J9)(t, !1), (0, i._U)(t), {
                className: s,
                cx: e,
                cy: r,
                r: c,
              }),
            )
          : null;
      };
    },
    33501: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => d, M: () => m });
      var n = r(90626),
        o = r(90018),
        i = r(57487),
        a = r(50247);
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
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != u(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != u(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == u(n) ? n : n + "") in t
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
      var y = function (t, e, r, n, o) {
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
        d = function (t, e) {
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
            d = e.y,
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
            d !== +d ||
            m !== +m ||
            b !== +b ||
            0 === m ||
            0 === b
          )
            return null;
          var P = (0, o.A)("recharts-rectangle", x);
          return A
            ? n.createElement(
                i.Ay,
                {
                  canBegin: s > 0,
                  from: { width: m, height: b, x: h, y: d },
                  to: { width: m, height: b, x: h, y: d },
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
                    i.Ay,
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
                      c({}, (0, a.J9)(e, !0), {
                        className: P,
                        d: y(l, f, o, u, g),
                        ref: r,
                      }),
                    ),
                  );
                },
              )
            : n.createElement(
                "path",
                c({}, (0, a.J9)(e, !0), { className: P, d: y(h, d, m, b, g) }),
              );
        };
    },
    7216: (t, e, r) => {
      "use strict";
      r.d(e, { h: () => v });
      var n = r(90626),
        o = r(90018),
        i = r(50247),
        a = r(50322),
        u = r(91038);
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
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != c(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != c(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == c(n) ? n : n + "") in t
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
            f = Math.asin(c / s) / a.Kg,
            p = l ? o : o + i * f,
            h = l ? o - i * f : o;
          return {
            center: (0, a.IZ)(e, r, s, p),
            circleTangency: (0, a.IZ)(e, r, n, p),
            lineTangency: (0, a.IZ)(e, r, s * Math.cos(f * a.Kg), h),
            theta: f,
          };
        },
        y = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.innerRadius,
            o = t.outerRadius,
            i = t.startAngle,
            c = (function (t, e) {
              return (0, u.sA)(e - t) * Math.min(Math.abs(e - t), 359.999);
            })(i, t.endAngle),
            l = i + c,
            s = (0, a.IZ)(e, r, o, i),
            f = (0, a.IZ)(e, r, o, l),
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
            var h = (0, a.IZ)(e, r, n, i),
              y = (0, a.IZ)(e, r, n, l);
            p += "L "
              .concat(y.x, ",")
              .concat(y.y, "\n            A ")
              .concat(n, ",")
              .concat(n, ",0,\n            ")
              .concat(+(Math.abs(c) > 180), ",")
              .concat(+(i <= l), ",\n            ")
              .concat(h.x, ",")
              .concat(h.y, " Z");
          } else p += "L ".concat(e, ",").concat(r, " Z");
          return p;
        },
        d = {
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
          var e = f(f({}, d), t),
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
            O = (0, o.A)("recharts-sector", x),
            j = s - c,
            S = (0, u.F4)(p, j, 0, !0);
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
                      f = (0, u.sA)(s - l),
                      p = h({
                        cx: e,
                        cy: r,
                        radius: o,
                        angle: l,
                        sign: f,
                        cornerRadius: i,
                        cornerIsExternal: c,
                      }),
                      d = p.circleTangency,
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
                        : y({
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
                      .concat(d.x, ",")
                      .concat(d.y, "\n    A")
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
                        P = S.lineTangency,
                        E = S.theta,
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
                        T = k.lineTangency,
                        _ = k.theta,
                        C = c ? Math.abs(l - s) : Math.abs(l - s) - E - _;
                      if (C < 0 && 0 === i)
                        return "".concat(j, "L").concat(e, ",").concat(r, "Z");
                      j += "L"
                        .concat(T.x, ",")
                        .concat(T.y, "\n      A")
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
                        .concat(P.x, ",")
                        .concat(P.y, "Z");
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
                : y({
                    cx: r,
                    cy: a,
                    innerRadius: c,
                    outerRadius: s,
                    startAngle: b,
                    endAngle: g,
                  })),
            n.createElement(
              "path",
              l({}, (0, i.J9)(e, !0), { className: O, d: w, role: "img" }),
            )
          );
        };
    },
    59098: (t, e, r) => {
      "use strict";
      r.d(e, { i: () => F });
      var n = r(90626),
        o = r(4842),
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
        y = 2 * h,
        d = {
          draw(t, e) {
            const r = c(e / y),
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
        P = 3 * (A / 2 + 1),
        E = {
          draw(t, e) {
            const r = c(e / P),
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
      var k = r(94770),
        M = r(5823);
      c(3), c(3);
      var T = r(90018),
        _ = r(50247);
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
      var D = ["type", "size", "sizeType"];
      function I() {
        return (
          (I = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          I.apply(this, arguments)
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
      function B(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(r), !0).forEach(function (e) {
                R(t, e, r[e]);
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
      function R(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != C(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != C(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == C(n) ? n : n + "") in t
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
      function L(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
          symbolDiamond: d,
          symbolSquare: v,
          symbolStar: x,
          symbolTriangle: O,
          symbolWye: E,
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
            p = B(B({}, L(t, D)), {}, { type: a, size: c, sizeType: s }),
            h = p.className,
            y = p.cx,
            d = p.cy,
            v = (0, _.J9)(p, !0);
          return y === +y && d === +d && c === +c
            ? n.createElement(
                "path",
                I({}, v, {
                  className: (0, T.A)("recharts-symbols", h),
                  transform: "translate(".concat(y, ", ").concat(d, ")"),
                  d:
                    ((e = (function (t) {
                      var e = "symbol".concat(i()(t));
                      return z[e] || f;
                    })(a)),
                    (r = (function (t, e) {
                      let r = null,
                        n = (0, M.i)(o);
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
                        (t = "function" == typeof t ? t : (0, k.A)(t || f)),
                        (e =
                          "function" == typeof e
                            ? e
                            : (0, k.A)(void 0 === e ? 64 : +e)),
                        (o.type = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : (0, k.A)(e)),
                              o)
                            : t;
                        }),
                        (o.size = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : (0, k.A)(+t)),
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
    17798: (t, e, r) => {
      "use strict";
      r.d(e, {
        yp: () => R,
        GG: () => q,
        NE: () => L,
        nZ: () => z,
        xQ: () => U,
      });
      var n = r(90626),
        o = r(3316),
        i = r.n(o),
        a = r(23449),
        u = r.n(a),
        c = r(23734),
        l = r.n(c),
        s = r(58782),
        f = r.n(s),
        p = r(33501),
        h = r(90018),
        y = r(57487),
        d = r(50247);
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
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != v(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != v(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == v(n) ? n : n + "") in t
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
          var A = (0, h.A)("recharts-trapezoid", p);
          return O
            ? n.createElement(
                y.Ay,
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
                    y.Ay,
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
                      m({}, (0, d.J9)(e, !0), {
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
                  m({}, (0, d.J9)(e, !0), {
                    className: A,
                    d: j(u, c, l, s, f),
                  }),
                ),
              );
        },
        P = r(7216),
        E = r(49891),
        k = r(59098),
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
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? C(Object(r), !0).forEach(function (e) {
                I(t, e, r[e]);
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
      function I(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != T(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != T(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == T(n) ? n : n + "") in t
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
      function N(t, e) {
        return D(D({}, e), t);
      }
      function B(t) {
        var e = t.shapeType,
          r = t.elementProps;
        switch (e) {
          case "rectangle":
            return n.createElement(p.M, r);
          case "trapezoid":
            return n.createElement(A, r);
          case "sector":
            return n.createElement(P.h, r);
          case "symbols":
            if (
              (function (t, e) {
                return "symbols" === t;
              })(e)
            )
              return n.createElement(k.i, r);
            break;
          default:
            return null;
        }
      }
      function R(t) {
        var e,
          r = t.option,
          o = t.shapeType,
          a = t.propTransformer,
          c = void 0 === a ? N : a,
          s = t.activeClassName,
          f = void 0 === s ? "recharts-active-shape" : s,
          p = t.isActive,
          h = _(t, M);
        if ((0, n.isValidElement)(r))
          e = (0, n.cloneElement)(
            r,
            D(
              D({}, h),
              (function (t) {
                return (0, n.isValidElement)(t) ? t.props : t;
              })(r),
            ),
          );
        else if (i()(r)) e = r(h);
        else if (u()(r) && !l()(r)) {
          var y = c(r, h);
          e = n.createElement(B, { shapeType: o, elementProps: y });
        } else {
          var d = h;
          e = n.createElement(B, { shapeType: o, elementProps: d });
        }
        return p ? n.createElement(E.W, { className: f }, e) : e;
      }
      function L(t, e) {
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
      function W(t, e) {
        var r = t.endAngle === e.endAngle,
          n = t.startAngle === e.startAngle;
        return r && n;
      }
      function $(t, e) {
        var r = t.x === e.x,
          n = t.y === e.y,
          o = t.z === e.z;
        return r && n && o;
      }
      function q(t) {
        var e = t.activeTooltipItem,
          r = t.graphicalItem,
          n = t.itemData,
          o = (function (t, e) {
            var r;
            return (
              L(t, e)
                ? (r = "trapezoids")
                : z(t, e)
                  ? (r = "sectors")
                  : U(t, e) && (r = "points"),
              r
            );
          })(r, e),
          i = (function (t, e) {
            var r, n;
            return L(t, e)
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
                    L(t, e) ? (r = F) : z(t, e) ? (r = W) : U(t, e) && (r = $),
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
    5608: (t, e, r) => {
      "use strict";
      r.d(e, {
        P2: () => w,
        bx: () => O,
        pr: () => m,
        sl: () => b,
        vh: () => g,
      });
      var n = r(90338),
        o = r.n(n),
        i = r(17489),
        a = r.n(i),
        u = r(89998),
        c = r(50247),
        l = r(91038),
        s = r(62059);
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
      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(r), !0).forEach(function (e) {
                d(t, e, r[e]);
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
      function d(t, e, r) {
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
          if ("object" != f(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != f(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == f(e) ? e : e + "";
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
            m = !!(0, c.BU)(p, s.y);
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
              P = "".concat(x).concat(S ? "Mirror" : "");
            if (
              "number" === g.type &&
              ("gap" === g.padding || "no-gap" === g.padding)
            ) {
              var E = w[1] - w[0],
                k = 1 / 0,
                M = g.categoricalDomain.sort();
              if (
                (M.forEach(function (t, e) {
                  e > 0 && (k = Math.min((t || 0) - (M[e - 1] || 0), k));
                }),
                Number.isFinite(k))
              ) {
                var T = k / E,
                  _ = "vertical" === g.layout ? r.height : r.width;
                if (
                  ("gap" === g.padding && (c = (T * _) / 2),
                  "no-gap" === g.padding)
                ) {
                  var C = (0, l.F4)(t.barCategoryGap, T * _),
                    D = (T * _) / 2;
                  c = D - C - ((D - C) / _) * C;
                }
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
            var I = (0, u.W7)(g, o, m),
              N = I.scale,
              B = I.realScaleType;
            N.domain(w).range(s), (0, u.YB)(N);
            var R = (0, u.w7)(N, y(y({}, g), {}, { realScaleType: B }));
            "xAxis" === n
              ? ((b = ("top" === x && !S) || ("bottom" === x && S)),
                (p = r.left),
                (h = v[P] - b * g.height))
              : "yAxis" === n &&
                ((b = ("left" === x && !S) || ("right" === x && S)),
                (p = v[P] - b * g.width),
                (h = r.top));
            var L = y(
              y(y({}, g), R),
              {},
              {
                realScaleType: B,
                x: p,
                y: h,
                scale: N,
                width: "xAxis" === n ? r.width : g.width,
                height: "yAxis" === n ? r.height : g.height,
              },
            );
            return (
              (L.bandSize = (0, u.Hj)(L, R)),
              g.hide || "xAxis" !== n
                ? g.hide || (v[P] += (b ? -1 : 1) * L.width)
                : (v[P] += (b ? -1 : 1) * L.height),
              y(y({}, i), {}, d({}, a, L))
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
            e
          );
          var e, r, n;
        })();
      d(x, "EPS", 1e-4);
      var w = function (t) {
        var e = Object.keys(t).reduce(function (e, r) {
          return y(y({}, e), {}, d({}, r, x.create(t[r])));
        }, {});
        return y(
          y({}, e),
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
    89998: (t, e, r) => {
      "use strict";
      r.d(e, {
        s0: () => wi,
        gH: () => mi,
        YB: () => Ci,
        HQ: () => Mi,
        xi: () => Di,
        Hj: () => Ki,
        BX: () => xi,
        tA: () => gi,
        DW: () => Fi,
        y2: () => Ui,
        nb: () => zi,
        PW: () => Pi,
        Ay: () => vi,
        vf: () => Si,
        Mk: () => $i,
        Ps: () => bi,
        Mn: () => Ri,
        kA: () => Wi,
        Rh: () => Ei,
        w7: () => Li,
        zb: () => Gi,
        kr: () => di,
        _L: () => Ai,
        KC: () => Vi,
        A1: () => ji,
        W7: () => Ti,
        AQ: () => Hi,
        _f: () => Ii,
      });
      var n = {};
      r.r(n),
        r.d(n, {
          scaleBand: () => o.A,
          scaleDiverging: () => Qn,
          scaleDivergingLog: () => to,
          scaleDivergingPow: () => ro,
          scaleDivergingSqrt: () => no,
          scaleDivergingSymlog: () => eo,
          scaleIdentity: () => Xt,
          scaleImplicit: () => ie.h,
          scaleLinear: () => qt,
          scaleLog: () => te,
          scaleOrdinal: () => ie.A,
          scalePoint: () => o.z,
          scalePow: () => se,
          scaleQuantile: () => Oe,
          scaleQuantize: () => je,
          scaleRadial: () => he,
          scaleSequential: () => Hn,
          scaleSequentialLog: () => Kn,
          scaleSequentialPow: () => Gn,
          scaleSequentialQuantile: () => Jn,
          scaleSequentialSqrt: () => Yn,
          scaleSequentialSymlog: () => Vn,
          scaleSqrt: () => fe,
          scaleSymlog: () => oe,
          scaleThreshold: () => Se,
          scaleTime: () => Wn,
          scaleUtc: () => $n,
          tickFormat: () => Wt,
        });
      var o = r(28583);
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
      function y(t) {
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
            : ((e = t === p || t === h ? t : d), (r = t), (n = t)),
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
      function d() {
        return 0;
      }
      function v(t) {
        return null === t ? NaN : +t;
      }
      const m = y(p),
        b = m.right,
        g = (m.left, y(v).center, b);
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
        P = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        E = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        k = /^#([0-9a-f]{3,8})$/,
        M = new RegExp(`^rgb\\(${A},${A},${A}\\)$`),
        T = new RegExp(`^rgb\\(${E},${E},${E}\\)$`),
        _ = new RegExp(`^rgba\\(${A},${A},${A},${P}\\)$`),
        C = new RegExp(`^rgba\\(${E},${E},${E},${P}\\)$`),
        D = new RegExp(`^hsl\\(${P},${E},${E}\\)$`),
        I = new RegExp(`^hsla\\(${P},${E},${E},${P}\\)$`),
        N = {
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
      function R() {
        return this.rgb().formatRgb();
      }
      function L(t) {
        var e, r;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = k.exec(t))
            ? ((r = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === r
                ? z(e)
                : 3 === r
                  ? new W(
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
              ? new W(e[1], e[2], e[3], 1)
              : (e = T.exec(t))
                ? new W(
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
                    : (e = D.exec(t))
                      ? V(e[1], e[2] / 100, e[3] / 100, 1)
                      : (e = I.exec(t))
                        ? V(e[1], e[2] / 100, e[3] / 100, e[4])
                        : N.hasOwnProperty(t)
                          ? z(N[t])
                          : "transparent" === t
                            ? new W(NaN, NaN, NaN, 0)
                            : null
        );
      }
      function z(t) {
        return new W((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function U(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN), new W(t, e, r, n);
      }
      function F(t, e, r, n) {
        return 1 === arguments.length
          ? ((o = t) instanceof O || (o = L(o)),
            o ? new W((o = o.rgb()).r, o.g, o.b, o.opacity) : new W())
          : new W(t, e, r, null == n ? 1 : n);
        var o;
      }
      function W(t, e, r, n) {
        (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
      }
      function $() {
        return `#${K(this.r)}${K(this.g)}${K(this.b)}`;
      }
      function q() {
        const t = X(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${H(this.r)}, ${H(this.g)}, ${H(this.b)}${1 === t ? ")" : `, ${t})`}`;
      }
      function X(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function H(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function K(t) {
        return ((t = H(t)) < 16 ? "0" : "") + t.toString(16);
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
      function G(t) {
        if (t instanceof Y) return new Y(t.h, t.s, t.l, t.opacity);
        if ((t instanceof O || (t = L(t)), !t)) return new Y();
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
      function J(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function Z(t) {
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
      x(O, L, {
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
          return G(this).formatHsl();
        },
        formatRgb: R,
        toString: R,
      }),
        x(
          W,
          F,
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? S : Math.pow(S, t)),
                new W(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? j : Math.pow(j, t)),
                new W(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new W(H(this.r), H(this.g), H(this.b), X(this.opacity));
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
            hex: $,
            formatHex: $,
            formatHex8: function () {
              return `#${K(this.r)}${K(this.g)}${K(this.b)}${K(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
            },
            formatRgb: q,
            toString: q,
          }),
        ),
        x(
          Y,
          function (t, e, r, n) {
            return 1 === arguments.length
              ? G(t)
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
              return new W(
                Q(t >= 240 ? t - 240 : t + 120, o, n),
                Q(t, o, n),
                Q(t < 120 ? t + 240 : t - 120, o, n),
                this.opacity,
              );
            },
            clamp() {
              return new Y(J(this.h), Z(this.s), Z(this.l), X(this.opacity));
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
              const t = X(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${J(this.h)}, ${100 * Z(this.s)}%, ${100 * Z(this.l)}%${1 === t ? ")" : `, ${t})`}`;
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
        for (r = 0; r < o; ++r) i[r] = dt(t[r], e[r]);
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
          r in t ? (n[r] = dt(t[r], e[r])) : (o[r] = e[r]);
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
      function yt(t, e) {
        e || (e = []);
        var r,
          n = t ? Math.min(e.length, t.length) : 0,
          o = e.slice();
        return function (i) {
          for (r = 0; r < n; ++r) o[r] = t[r] * (1 - i) + e[r] * i;
          return o;
        };
      }
      function dt(t, e) {
        var r,
          n,
          o = typeof e;
        return null == e || "boolean" === o
          ? et(e)
          : ("number" === o
              ? lt
              : "string" === o
                ? (r = L(e))
                  ? ((e = r), it)
                  : ht
                : e instanceof L
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
                        : yt))(t, e);
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
          c = dt,
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
      var Pt,
        Et = r(34777),
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
        return (t = _t(Math.abs(t))) ? t[1] : NaN;
      }
      function Dt(t, e) {
        var r = _t(t, e);
        if (!r) return t + "";
        var n = r[0],
          o = r[1];
        return o < 0
          ? "0." + new Array(-o).join("0") + n
          : n.length > o + 1
            ? n.slice(0, o + 1) + "." + n.slice(o + 1)
            : n + new Array(o - n.length + 2).join("0");
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
      const It = {
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
        p: (t, e) => Dt(100 * t, e),
        r: Dt,
        s: function (t, e) {
          var r = _t(t, e);
          if (!r) return t + "";
          var n = r[0],
            o = r[1],
            i = o - (Pt = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
            a = n.length;
          return i === a
            ? n
            : i > a
              ? n + new Array(i - a + 1).join("0")
              : i > 0
                ? n.slice(0, i) + "." + n.slice(i)
                : "0." +
                  new Array(1 - i).join("0") +
                  _t(t, Math.max(0, e + i - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function Nt(t) {
        return t;
      }
      var Bt,
        Rt,
        Lt,
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
              ? Nt
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
              ? Nt
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
            y = t.width,
            d = t.comma,
            v = t.precision,
            m = t.trim,
            b = t.type;
          "n" === b
            ? ((d = !0), (b = "g"))
            : It[b] || (void 0 === v && (v = 12), (m = !0), (b = "g")),
            (h || ("0" === e && "=" === r)) && ((h = !0), (e = "0"), (r = "="));
          var g =
              "$" === p
                ? o
                : "#" === p && /[boxX]/.test(b)
                  ? "0" + b.toLowerCase()
                  : "",
            x = "$" === p ? i : /[%p]/.test(b) ? c : "",
            w = It[b],
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
                  ("s" === b ? Ut[8 + Pt / 3] : "") +
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
            d && !h && (t = n(t, 1 / 0));
            var A = p.length + t.length + j.length,
              P = A < y ? new Array(y - A + 1).join(e) : "";
            switch (
              (d &&
                h &&
                ((t = n(P + t, P.length ? y - j.length : 1 / 0)), (P = "")),
              r)
            ) {
              case "<":
                t = p + t + j + P;
                break;
              case "=":
                t = p + P + t + j;
                break;
              case "^":
                t = P.slice(0, (A = P.length >> 1)) + p + t + j + P.slice(A);
                break;
              default:
                t = P + p + t + j;
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
      function Wt(t, e, r, n) {
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
              Lt(n, a)
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
        return Rt(n);
      }
      function $t(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var r = e();
            return l(r[0], r[r.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, r) {
            var n = e();
            return Wt(n[0], n[n.length - 1], null == t ? 10 : t, r);
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
      function qt() {
        var t = At();
        return (
          (t.copy = function () {
            return jt(t, qt());
          }),
          Et.C.apply(t, arguments),
          $t(t)
        );
      }
      function Xt(t) {
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
            return Xt(t).unknown(e);
          }),
          (t = arguments.length ? Array.from(t, mt) : [0, 1]),
          $t(r)
        );
      }
      function Ht(t, e) {
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
      function Kt(t) {
        return Math.log(t);
      }
      function Vt(t) {
        return Math.exp(t);
      }
      function Gt(t) {
        return -Math.log(-t);
      }
      function Yt(t) {
        return -Math.exp(-t);
      }
      function Jt(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function Zt(t) {
        return (e, r) => -t(-e, r);
      }
      function Qt(t) {
        const e = t(Kt, Vt),
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
                ? Jt
                : t === Math.E
                  ? Math.exp
                  : (e) => Math.pow(t, e);
            })(i)),
            r()[0] < 0 ? ((n = Zt(n)), (o = Zt(o)), t(Gt, Yt)) : t(Kt, Vt),
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
            const y = null == t ? 10 : +t;
            let d = [];
            if (!(i % 1) && h - p < y) {
              if (((p = Math.floor(p)), (h = Math.ceil(h)), a > 0)) {
                for (; p <= h; ++p)
                  for (s = 1; s < i; ++s)
                    if (((f = p < 0 ? s / o(-p) : s * o(p)), !(f < a))) {
                      if (f > u) break;
                      d.push(f);
                    }
              } else
                for (; p <= h; ++p)
                  for (s = i - 1; s >= 1; --s)
                    if (((f = p > 0 ? s / o(-p) : s * o(p)), !(f < a))) {
                      if (f > u) break;
                      d.push(f);
                    }
              2 * d.length < y && (d = l(a, u, y));
            } else d = l(p, h, Math.min(h - p, y)).map(o);
            return c ? d.reverse() : d;
          }),
          (e.tickFormat = (t, r) => {
            if (
              (null == t && (t = 10),
              null == r && (r = 10 === i ? "s" : ","),
              "function" != typeof r &&
                (i % 1 || null != (r = Mt(r)).precision || (r.trim = !0),
                (r = Rt(r))),
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
              Ht(r(), {
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
          Et.C.apply(t, arguments),
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
          $t(r)
        );
      }
      function oe() {
        var t = ne(St());
        return (
          (t.copy = function () {
            return jt(t, oe()).constant(t.constant());
          }),
          Et.C.apply(t, arguments)
        );
      }
      (Bt = Ft({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (Rt = Bt.format),
        (Lt = Bt.formatPrefix);
      var ie = r(97458);
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
          $t(e)
        );
      }
      function se() {
        var t = le(St());
        return (
          (t.copy = function () {
            return jt(t, se()).exponent(t.exponent());
          }),
          Et.C.apply(t, arguments),
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
          Et.C.apply(o, arguments),
          $t(o)
        );
      }
      function ye(t, e) {
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
      function de(t, e) {
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
          if (e <= 0 || n < 2) return de(t);
          if (e >= 1) return ye(t);
          var n,
            o = (n - 1) * e,
            i = Math.floor(o),
            a = ye(be(t, i).subarray(0, i + 1));
          return a + (de(t.subarray(i + 1)) - a) * (o - i);
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
          Et.C.apply(i, arguments)
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
          Et.C.apply($t(a), arguments)
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
          Et.C.apply(o, arguments)
        );
      }
      const Ae = 1e3,
        Pe = 6e4,
        Ee = 36e5,
        ke = 864e5,
        Me = 6048e5,
        Te = 2592e6,
        _e = 31536e6,
        Ce = new Date(),
        De = new Date();
      function Ie(t, e, r, n) {
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
            Ie(
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
              De.setTime(+n),
              t(Ce),
              t(De),
              Math.floor(r(Ce, De))
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
      const Ne = Ie(
        () => {},
        (t, e) => {
          t.setTime(+t + e);
        },
        (t, e) => e - t,
      );
      Ne.every = (t) => (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? Ie(
                (e) => {
                  e.setTime(Math.floor(e / t) * t);
                },
                (e, r) => {
                  e.setTime(+e + r * t);
                },
                (e, r) => (r - e) / t,
              )
            : Ne
          : null
      );
      Ne.range;
      const Be = Ie(
          (t) => {
            t.setTime(t - t.getMilliseconds());
          },
          (t, e) => {
            t.setTime(+t + e * Ae);
          },
          (t, e) => (e - t) / Ae,
          (t) => t.getUTCSeconds(),
        ),
        Re =
          (Be.range,
          Ie(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ae);
            },
            (t, e) => {
              t.setTime(+t + e * Pe);
            },
            (t, e) => (e - t) / Pe,
            (t) => t.getMinutes(),
          )),
        Le =
          (Re.range,
          Ie(
            (t) => {
              t.setUTCSeconds(0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * Pe);
            },
            (t, e) => (e - t) / Pe,
            (t) => t.getUTCMinutes(),
          )),
        ze =
          (Le.range,
          Ie(
            (t) => {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  t.getSeconds() * Ae -
                  t.getMinutes() * Pe,
              );
            },
            (t, e) => {
              t.setTime(+t + e * Ee);
            },
            (t, e) => (e - t) / Ee,
            (t) => t.getHours(),
          )),
        Ue =
          (ze.range,
          Ie(
            (t) => {
              t.setUTCMinutes(0, 0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * Ee);
            },
            (t, e) => (e - t) / Ee,
            (t) => t.getUTCHours(),
          )),
        Fe =
          (Ue.range,
          Ie(
            (t) => t.setHours(0, 0, 0, 0),
            (t, e) => t.setDate(t.getDate() + e),
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Pe) /
              ke,
            (t) => t.getDate() - 1,
          )),
        We =
          (Fe.range,
          Ie(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / ke,
            (t) => t.getUTCDate() - 1,
          )),
        $e =
          (We.range,
          Ie(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / ke,
            (t) => Math.floor(t / ke),
          ));
      $e.range;
      function qe(t) {
        return Ie(
          (e) => {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
              e.setHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setDate(t.getDate() + 7 * e);
          },
          (t, e) =>
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Pe) / Me,
        );
      }
      const Xe = qe(0),
        He = qe(1),
        Ke = qe(2),
        Ve = qe(3),
        Ge = qe(4),
        Ye = qe(5),
        Je = qe(6);
      Xe.range, He.range, Ke.range, Ve.range, Ge.range, Ye.range, Je.range;
      function Ze(t) {
        return Ie(
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
      const Qe = Ze(0),
        tr = Ze(1),
        er = Ze(2),
        rr = Ze(3),
        nr = Ze(4),
        or = Ze(5),
        ir = Ze(6),
        ar =
          (Qe.range,
          tr.range,
          er.range,
          rr.range,
          nr.range,
          or.range,
          ir.range,
          Ie(
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
          Ie(
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
          Ie(
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
          ? Ie(
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
      const lr = Ie(
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
          ? Ie(
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
          [i, 1, Pe],
          [i, 5, 3e5],
          [i, 15, 9e5],
          [i, 30, 18e5],
          [o, 1, Ee],
          [o, 3, 108e5],
          [o, 6, 216e5],
          [o, 12, 432e5],
          [n, 1, ke],
          [n, 2, 1728e5],
          [r, 1, Me],
          [e, 1, Te],
          [e, 3, 7776e6],
          [t, 1, _e],
        ];
        function u(e, r, n) {
          const o = Math.abs(r - e) / n,
            i = y(([, , t]) => t).right(a, o);
          if (i === a.length) return t.every(f(e / _e, r / _e, n));
          if (0 === i) return Ne.every(Math.max(f(e, r, n), 1));
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
      const [fr, pr] = sr(lr, ur, Qe, $e, Ue, Le),
        [hr, yr] = sr(cr, ar, Xe, Fe, ze, Re);
      function dr(t) {
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
      function Pr(t) {
        return t.replace(Sr, "\\$&");
      }
      function Er(t) {
        return new RegExp("^(?:" + t.map(Pr).join("|") + ")", "i");
      }
      function kr(t) {
        return new Map(t.map((t, e) => [t.toLowerCase(), e]));
      }
      function Mr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 1));
        return n ? ((t.w = +n[0]), r + n[0].length) : -1;
      }
      function Tr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 1));
        return n ? ((t.u = +n[0]), r + n[0].length) : -1;
      }
      function _r(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.U = +n[0]), r + n[0].length) : -1;
      }
      function Cr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.V = +n[0]), r + n[0].length) : -1;
      }
      function Dr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.W = +n[0]), r + n[0].length) : -1;
      }
      function Ir(t, e, r) {
        var n = Or.exec(e.slice(r, r + 4));
        return n ? ((t.y = +n[0]), r + n[0].length) : -1;
      }
      function Nr(t, e, r) {
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
      function Rr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 1));
        return n ? ((t.q = 3 * n[0] - 3), r + n[0].length) : -1;
      }
      function Lr(t, e, r) {
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
      function Wr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.M = +n[0]), r + n[0].length) : -1;
      }
      function $r(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.S = +n[0]), r + n[0].length) : -1;
      }
      function qr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 3));
        return n ? ((t.L = +n[0]), r + n[0].length) : -1;
      }
      function Xr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 6));
        return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
      }
      function Hr(t, e, r) {
        var n = jr.exec(e.slice(r, r + 1));
        return n ? r + n[0].length : -1;
      }
      function Kr(t, e, r) {
        var n = Or.exec(e.slice(r));
        return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
      }
      function Vr(t, e, r) {
        var n = Or.exec(e.slice(r));
        return n ? ((t.s = +n[0]), r + n[0].length) : -1;
      }
      function Gr(t, e) {
        return Ar(t.getDate(), e, 2);
      }
      function Yr(t, e) {
        return Ar(t.getHours(), e, 2);
      }
      function Jr(t, e) {
        return Ar(t.getHours() % 12 || 12, e, 2);
      }
      function Zr(t, e) {
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
        return Ar(Xe.count(cr(t) - 1, t), e, 2);
      }
      function un(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? Ge(t) : Ge.ceil(t);
      }
      function cn(t, e) {
        return (
          (t = un(t)), Ar(Ge.count(cr(t), t) + (4 === cr(t).getDay()), e, 2)
        );
      }
      function ln(t) {
        return t.getDay();
      }
      function sn(t, e) {
        return Ar(He.count(cr(t) - 1, t), e, 2);
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
      function yn(t, e) {
        var r = t.getDay();
        return Ar(
          (t = r >= 4 || 0 === r ? Ge(t) : Ge.ceil(t)).getFullYear() % 1e4,
          e,
          4,
        );
      }
      function dn(t) {
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
        return Ar(1 + We.count(lr(t), t), e, 3);
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
      function Pn(t, e) {
        return Ar(Qe.count(lr(t) - 1, t), e, 2);
      }
      function En(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? nr(t) : nr.ceil(t);
      }
      function kn(t, e) {
        return (
          (t = En(t)), Ar(nr.count(lr(t), t) + (4 === lr(t).getUTCDay()), e, 2)
        );
      }
      function Mn(t) {
        return t.getUTCDay();
      }
      function Tn(t, e) {
        return Ar(tr.count(lr(t) - 1, t), e, 2);
      }
      function _n(t, e) {
        return Ar(t.getUTCFullYear() % 100, e, 2);
      }
      function Cn(t, e) {
        return Ar((t = En(t)).getUTCFullYear() % 100, e, 2);
      }
      function Dn(t, e) {
        return Ar(t.getUTCFullYear() % 1e4, e, 4);
      }
      function In(t, e) {
        var r = t.getUTCDay();
        return Ar(
          (t = r >= 4 || 0 === r ? nr(t) : nr.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4,
        );
      }
      function Nn() {
        return "+0000";
      }
      function Bn() {
        return "%";
      }
      function Rn(t) {
        return +t;
      }
      function Ln(t) {
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
          y = l(":%S"),
          d = l("%I:%M"),
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
                ? y
                : a(t) < t
                  ? d
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
              t ? p(Ht(r, t)) : s
            );
          }),
          (s.copy = function () {
            return jt(s, Fn(t, e, r, n, o, i, a, u, c, l));
          }),
          s
        );
      }
      function Wn() {
        return Et.C.apply(
          Fn(hr, yr, cr, ar, Xe, Fe, ze, Re, Be, gr).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function $n() {
        return Et.C.apply(
          Fn(fr, pr, lr, ur, Qe, We, Ue, Le, Be, xr).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function qn() {
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
          (l.range = s(dt)),
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
      function Xn(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function Hn() {
        var t = $t(qn()(gt));
        return (
          (t.copy = function () {
            return Xn(t, Hn());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Kn() {
        var t = Qt(qn()).domain([1, 10]);
        return (
          (t.copy = function () {
            return Xn(t, Kn()).base(t.base());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Vn() {
        var t = ne(qn());
        return (
          (t.copy = function () {
            return Xn(t, Vn()).constant(t.constant());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Gn() {
        var t = le(qn());
        return (
          (t.copy = function () {
            return Xn(t, Gn()).exponent(t.exponent());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Yn() {
        return Gn.apply(null, arguments).exponent(0.5);
      }
      function Jn() {
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
            return Jn(e).domain(t);
          }),
          Et.K.apply(r, arguments)
        );
      }
      function Zn() {
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
        function y(t) {
          return function (e) {
            var r, n, o;
            return arguments.length
              ? (([r, n, o] = e),
                (f = (function (t, e) {
                  void 0 === e && ((e = t), (t = dt));
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
          (h.range = y(dt)),
          (h.rangeRound = y(vt)),
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
        var t = $t(Zn()(gt));
        return (
          (t.copy = function () {
            return Xn(t, Qn());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function to() {
        var t = Qt(Zn()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return Xn(t, to()).base(t.base());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function eo() {
        var t = ne(Zn());
        return (
          (t.copy = function () {
            return Xn(t, eo()).constant(t.constant());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function ro() {
        var t = le(Zn());
        return (
          (t.copy = function () {
            return Xn(t, ro()).exponent(t.exponent());
          }),
          Et.K.apply(t, arguments)
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
            l = Er(o),
            s = kr(o),
            f = Er(i),
            p = kr(i),
            h = Er(a),
            y = kr(a),
            d = Er(u),
            v = kr(u),
            m = Er(c),
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
              d: Gr,
              e: Gr,
              f: tn,
              g: pn,
              G: yn,
              H: Yr,
              I: Jr,
              j: Zr,
              L: Qr,
              m: en,
              M: rn,
              p: function (t) {
                return o[+(t.getHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getMonth() / 3);
              },
              Q: Rn,
              s: Ln,
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
              Z: dn,
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
              G: In,
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
              Q: Rn,
              s: Ln,
              S: Sn,
              u: An,
              U: Pn,
              V: kn,
              w: Mn,
              W: Tn,
              x: null,
              X: null,
              y: _n,
              Y: Dn,
              Z: Nn,
              "%": Bn,
            },
            w = {
              a: function (t, e, r) {
                var n = h.exec(e.slice(r));
                return n
                  ? ((t.w = y.get(n[0].toLowerCase())), r + n[0].length)
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
                var n = d.exec(e.slice(r));
                return n
                  ? ((t.m = v.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              c: function (t, r, n) {
                return S(t, e, r, n);
              },
              d: zr,
              e: zr,
              f: Xr,
              g: Nr,
              G: Ir,
              H: Fr,
              I: Fr,
              j: Ur,
              L: qr,
              m: Lr,
              M: Wr,
              p: function (t, e, r) {
                var n = l.exec(e.slice(r));
                return n
                  ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              q: Rr,
              Q: Kr,
              s: Vr,
              S: $r,
              u: Tr,
              U: _r,
              V: Cr,
              w: Mr,
              W: Dr,
              x: function (t, e, n) {
                return S(t, r, e, n);
              },
              X: function (t, e, r) {
                return S(t, n, e, r);
              },
              y: Nr,
              Y: Ir,
              Z: Br,
              "%": Hr,
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
                      (n = We.offset(n, 7 * (i.V - 1))),
                      (i.y = n.getUTCFullYear()),
                      (i.m = n.getUTCMonth()),
                      (i.d = n.getUTCDate() + ((i.w + 6) % 7)))
                    : ((o = (n = dr(mr(i.y, 0, 1))).getDay()),
                      (n = o > 4 || 0 === o ? He.ceil(n) : He(n)),
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
                      : dr(mr(i.y, 0, 1)).getDay()),
                  (i.m = 0),
                  (i.d =
                    "W" in i
                      ? ((i.w + 6) % 7) + 7 * i.W - ((o + 5) % 7)
                      : i.w + 7 * i.U - ((o + 6) % 7)));
              return "Z" in i
                ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), vr(i))
                : dr(i);
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
      var io = r(57949),
        ao = r(94770);
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
      var so = r(82544),
        fo = r.n(so),
        po = r(6702),
        ho = r.n(po),
        yo = r(64609),
        vo = r.n(yo),
        mo = r(3316),
        bo = r.n(mo),
        go = r(77837),
        xo = r.n(go),
        wo = r(52686),
        Oo = r.n(wo),
        jo = r(21205),
        So = r.n(jo),
        Ao = r(27367),
        Po = r.n(Ao),
        Eo = r(4842),
        ko = r.n(Eo),
        Mo = r(58782),
        To = r.n(Mo),
        _o = r(97825),
        Co = r.n(_o),
        Do = r(14469),
        Io = r.n(Do);
      function No(t) {
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
      var Ro = function (t) {
          return t;
        },
        Lo = { "@@functional/placeholder": !0 },
        zo = function (t) {
          return t === Lo;
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
                  return t !== Lo;
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
                        return r.apply(void 0, No(i).concat(e));
                      }),
                    );
              });
        },
        Wo = function (t) {
          return Fo(t.length, t);
        },
        $o = function (t, e) {
          for (var r = [], n = t; n < e; ++n) r[n - t] = n;
          return r;
        },
        qo = Wo(function (t, e) {
          return Array.isArray(e)
            ? e.map(t)
            : Object.keys(e)
                .map(function (t) {
                  return e[t];
                })
                .map(t);
        }),
        Xo = function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          if (!e.length) return Ro;
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
        Ho = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        Ko = function (t) {
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
          for (var n = new (Io())(t), o = 0, i = []; n.lt(e) && o < 1e5; )
            i.push(n.toNumber()), (n = n.add(r)), o++;
          return i;
        },
        getDigitCount: function (t) {
          return 0 === t
            ? 1
            : Math.floor(new (Io())(t).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: Wo(function (t, e, r) {
          var n = +t;
          return n + r * (+e - n);
        }),
        uninterpolateNumber: Wo(function (t, e, r) {
          var n = e - +t;
          return (r - t) / (n = n || 1 / 0);
        }),
        uninterpolateTruncation: Wo(function (t, e, r) {
          var n = e - +t;
          return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - t) / n));
        }),
      };
      function Go(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Zo(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          Jo(t) ||
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
          Jo(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Jo(t, e) {
        if (t) {
          if ("string" == typeof t) return Zo(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? Zo(t, e)
                : void 0
          );
        }
      }
      function Zo(t, e) {
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
        if (t.lte(0)) return new (Io())(0);
        var n = Vo.getDigitCount(t.toNumber()),
          o = new (Io())(10).pow(n),
          i = t.div(o),
          a = 1 !== n ? 0.05 : 0.1,
          u = new (Io())(Math.ceil(i.div(a).toNumber())).add(r).mul(a).mul(o);
        return e ? u : new (Io())(Math.ceil(u));
      }
      function ei(t, e, r) {
        var n = 1,
          o = new (Io())(t);
        if (!o.isint() && r) {
          var i = Math.abs(t);
          i < 1
            ? ((n = new (Io())(10).pow(Vo.getDigitCount(t) - 1)),
              (o = new (Io())(Math.floor(o.div(n).toNumber())).mul(n)))
            : i > 1 && (o = new (Io())(Math.floor(t)));
        } else
          0 === t
            ? (o = new (Io())(Math.floor((e - 1) / 2)))
            : r || (o = new (Io())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return Xo(
          qo(function (t) {
            return o.add(new (Io())(t - a).mul(n)).toNumber();
          }),
          $o,
        )(0, e);
      }
      function ri(t, e, r, n) {
        var o =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((e - t) / (r - 1)))
          return {
            step: new (Io())(0),
            tickMin: new (Io())(0),
            tickMax: new (Io())(0),
          };
        var i,
          a = ti(new (Io())(e).sub(t).div(r - 1), n, o);
        i =
          t <= 0 && e >= 0
            ? new (Io())(0)
            : (i = new (Io())(t).add(e).div(2)).sub(new (Io())(i).mod(a));
        var u = Math.ceil(i.sub(t).div(a).toNumber()),
          c = Math.ceil(new (Io())(e).sub(i).div(a).toNumber()),
          l = u + c + 1;
        return l > r
          ? ri(t, e, r, n, o + 1)
          : (l < r &&
              ((c = e > 0 ? c + (r - l) : c), (u = e > 0 ? u : u + (r - l))),
            {
              step: a,
              tickMin: i.sub(new (Io())(u).mul(a)),
              tickMax: i.add(new (Io())(c).mul(a)),
            });
      }
      var ni = Ko(function (t) {
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
                    Go(
                      $o(0, o - 1).map(function () {
                        return 1 / 0;
                      }),
                    ),
                  )
                : [].concat(
                    Go(
                      $o(0, o - 1).map(function () {
                        return -1 / 0;
                      }),
                    ),
                    [l],
                  );
            return r > n ? Ho(s) : s;
          }
          if (c === l) return ei(c, o, i);
          var f = ri(c, l, a, i),
            p = f.step,
            h = f.tickMin,
            y = f.tickMax,
            d = Vo.rangeStep(h, y.add(new (Io())(0.1).mul(p)), p);
          return r > n ? Ho(d) : d;
        }),
        oi =
          (Ko(function (t) {
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
            var s = ti(new (Io())(l).sub(c).div(a - 1), i, 0),
              f = Xo(
                qo(function (t) {
                  return new (Io())(c).add(new (Io())(t).mul(s)).toNumber();
                }),
                $o,
              )(0, a).filter(function (t) {
                return t >= c && t <= l;
              });
            return r > n ? Ho(f) : f;
          }),
          Ko(function (t, e) {
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
              s = ti(new (Io())(c).sub(u).div(l - 1), i, 0),
              f = [].concat(
                Go(
                  Vo.rangeStep(
                    new (Io())(u),
                    new (Io())(c).sub(new (Io())(0.99).mul(s)),
                    s,
                  ),
                ),
                [c],
              );
            return n > o ? Ho(f) : f;
          })),
        ii = r(82780),
        ai = r(91038),
        ui = r(50247),
        ci = r(29690);
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
      function si(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return fi(t);
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
            if ("string" == typeof t) return fi(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return fi(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function fi(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function pi(t, e) {
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
      function hi(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? pi(Object(r), !0).forEach(function (e) {
                yi(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : pi(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function yi(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != li(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != li(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == li(n) ? n : n + "") in t
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
      function di(t, e, r) {
        return vo()(t) || vo()(e)
          ? r
          : (0, ai.vh)(e)
            ? Oo()(t, e, r)
            : bo()(e)
              ? e(t)
              : r;
      }
      function vi(t, e, r, n) {
        var o = So()(t, function (t) {
          return di(t, e);
        });
        if ("number" === r) {
          var i = o.filter(function (t) {
            return (0, ai.Et)(t) || parseFloat(t);
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
          return (0, ai.vh)(t) || t instanceof Date ? t : "";
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
              if ((0, ai.sA)(s - l) !== (0, ai.sA)(f - s)) {
                var h = [];
                if ((0, ai.sA)(f - s) === (0, ai.sA)(u[1] - u[0])) {
                  p = f;
                  var y = s + u[1] - u[0];
                  (h[0] = Math.min(y, (y + l) / 2)),
                    (h[1] = Math.max(y, (y + l) / 2));
                } else {
                  p = l;
                  var d = f + u[1] - u[0];
                  (h[0] = Math.min(s, (d + s) / 2)),
                    (h[1] = Math.max(s, (d + s) / 2));
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
            r,
            n = t.type.displayName,
            o =
              null !== (e = t.type) && void 0 !== e && e.defaultProps
                ? hi(hi({}, t.type.defaultProps), t.props)
                : t.props,
            i = o.stroke,
            a = o.fill;
          switch (n) {
            case "Line":
              r = i;
              break;
            case "Area":
            case "Radar":
              r = i && "none" !== i ? i : a;
              break;
            default:
              r = a;
          }
          return r;
        },
        gi = function (t) {
          var e = t.barSize,
            r = t.totalSize,
            n = t.stackGroups,
            o = void 0 === n ? {} : n;
          if (!o) return {};
          for (var i = {}, a = Object.keys(o), u = 0, c = a.length; u < c; u++)
            for (
              var l = o[a[u]].stackGroups,
                s = Object.keys(l),
                f = 0,
                p = s.length;
              f < p;
              f++
            ) {
              var h = l[s[f]],
                y = h.items,
                d = h.cateAxisId,
                v = y.filter(function (t) {
                  return (0, ui.Mn)(t.type).indexOf("Bar") >= 0;
                });
              if (v && v.length) {
                var m = v[0].type.defaultProps,
                  b = void 0 !== m ? hi(hi({}, m), v[0].props) : v[0].props,
                  g = b.barSize,
                  x = b[d];
                i[x] || (i[x] = []);
                var w = vo()(g) ? e : g;
                i[x].push({
                  item: v[0],
                  stackList: v.slice(1),
                  barSize: vo()(w) ? void 0 : (0, ai.F4)(w, r, 0),
                });
              }
            }
          return i;
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
            l = (0, ai.F4)(e, n, 0, !0),
            s = [];
          if (i[0].barSize === +i[0].barSize) {
            var f = !1,
              p = n / u,
              h = i.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (h += (u - 1) * l) >= n && ((h -= (u - 1) * l), (l = 0)),
              h >= n && p > 0 && ((f = !0), (h = u * (p *= 0.9)));
            var y = { offset: (((n - h) / 2) >> 0) - l, size: 0 };
            c = i.reduce(function (t, e) {
              var r = {
                  item: e.item,
                  position: {
                    offset: y.offset + y.size + l,
                    size: f ? p : e.barSize,
                  },
                },
                n = [].concat(si(t), [r]);
              return (
                (y = n[n.length - 1].position),
                e.stackList &&
                  e.stackList.length &&
                  e.stackList.forEach(function (t) {
                    n.push({ item: t, position: y });
                  }),
                n
              );
            }, s);
          } else {
            var d = (0, ai.F4)(r, n, 0, !0);
            n - 2 * d - (u - 1) * l <= 0 && (l = 0);
            var v = (n - 2 * d - (u - 1) * l) / u;
            v > 1 && (v >>= 0);
            var m = a === +a ? Math.min(v, a) : v;
            c = i.reduce(function (t, e, r) {
              var n = [].concat(si(t), [
                {
                  item: e.item,
                  position: { offset: d + (v + l) * r + (v - m) / 2, size: m },
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
            c = (0, ci.g)({ children: o, legendWidth: u });
          if (c) {
            var l = n || {},
              s = l.width,
              f = l.height,
              p = c.align,
              h = c.verticalAlign,
              y = c.layout;
            if (
              ("vertical" === y || ("horizontal" === y && "middle" === h)) &&
              "center" !== p &&
              (0, ai.Et)(t[p])
            )
              return hi(hi({}, t), {}, yi({}, p, t[p] + (s || 0)));
            if (
              ("horizontal" === y || ("vertical" === y && "center" === p)) &&
              "middle" !== h &&
              (0, ai.Et)(t[h])
            )
              return hi(hi({}, t), {}, yi({}, h, t[h] + (f || 0)));
          }
          return t;
        },
        Oi = function (t, e, r, n, o) {
          var i = e.props.children,
            a = (0, ui.aS)(i, ii.u).filter(function (t) {
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
                var n = di(e, r);
                if (vo()(n)) return t;
                var o = Array.isArray(n) ? [ho()(n), fo()(n)] : [n, n],
                  i = u.reduce(
                    function (t, r) {
                      var n = di(e, r, 0),
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
        Pi = function (t, e, r, n) {
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
        Ei = function (t, e, r) {
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
                ? 2 * (0, ai.sA)(a[0] - a[1]) * c
                : c),
            e && (t.ticks || t.niceTicks)
              ? (t.ticks || t.niceTicks)
                  .map(function (t) {
                    var e = o ? o.indexOf(t) : t;
                    return { coordinate: n(e) + c, value: t, offset: c };
                  })
                  .filter(function (t) {
                    return !Po()(t.coordinate);
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
        Ti = function (t, e, r) {
          var i = t.scale,
            a = t.type,
            u = t.layout,
            c = t.axisType;
          if ("auto" === i)
            return "radial" === u && "radiusAxis" === c
              ? { scale: o.A(), realScaleType: "band" }
              : "radial" === u && "angleAxis" === c
                ? { scale: qt(), realScaleType: "linear" }
                : "category" === a &&
                    e &&
                    (e.indexOf("LineChart") >= 0 ||
                      e.indexOf("AreaChart") >= 0 ||
                      (e.indexOf("ComposedChart") >= 0 && !r))
                  ? { scale: o.z(), realScaleType: "point" }
                  : "category" === a
                    ? { scale: o.A(), realScaleType: "band" }
                    : { scale: qt(), realScaleType: "linear" };
          if (xo()(i)) {
            var l = "scale".concat(ko()(i));
            return {
              scale: (n[l] || o.z)(),
              realScaleType: n[l] ? l : "point",
            };
          }
          return bo()(i)
            ? { scale: i }
            : { scale: o.z(), realScaleType: "point" };
        },
        _i = 1e-4,
        Ci = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var r = e.length,
              n = t.range(),
              o = Math.min(n[0], n[1]) - _i,
              i = Math.max(n[0], n[1]) + _i,
              a = t(e[0]),
              u = t(e[r - 1]);
            (a < o || a > i || u < o || u > i) && t.domain([e[0], e[r - 1]]);
          }
        },
        Di = function (t, e) {
          if (!t) return null;
          for (var r = 0, n = t.length; r < n; r++)
            if (t[r].item === e) return t[r].position;
          return null;
        },
        Ii = function (t, e) {
          if (!e || 2 !== e.length || !(0, ai.Et)(e[0]) || !(0, ai.Et)(e[1]))
            return t;
          var r = Math.min(e[0], e[1]),
            n = Math.max(e[0], e[1]),
            o = [t[0], t[1]];
          return (
            (!(0, ai.Et)(t[0]) || t[0] < r) && (o[0] = r),
            (!(0, ai.Et)(t[1]) || t[1] > n) && (o[1] = n),
            o[0] > n && (o[0] = n),
            o[1] < r && (o[1] = r),
            o
          );
        },
        Ni = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var o = 0, i = 0, a = 0; a < e; ++a) {
                  var u = Po()(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
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
                    var y = t[e[h]];
                    p += (y[a][1] || 0) - (y[a - 1][1] || 0);
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
                  var a = Po()(t[i][r][1]) ? t[i][r][0] : t[i][r][1];
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
            o = Ni[r],
            i = (function () {
              var t = (0, ao.A)([]),
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
                for (i = 0, a = (0, io.A)(e(u)); i < c; ++i) u[a[i]].index = i;
                return r(u, a), u;
              }
              return (
                (o.keys = function (e) {
                  return arguments.length
                    ? ((t =
                        "function" == typeof e ? e : (0, ao.A)(Array.from(e))),
                      o)
                    : t;
                }),
                (o.value = function (t) {
                  return arguments.length
                    ? ((n = "function" == typeof t ? t : (0, ao.A)(+t)), o)
                    : n;
                }),
                (o.order = function (t) {
                  return arguments.length
                    ? ((e =
                        null == t
                          ? uo
                          : "function" == typeof t
                            ? t
                            : (0, ao.A)(Array.from(t))),
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
                return +di(t, e, 0);
              })
              .order(uo)
              .offset(o);
          return i(t);
        },
        Ri = function (t, e, r, n, o, i) {
          if (!t) return null;
          var a = (i ? e.reverse() : e).reduce(function (t, e) {
            var o,
              i =
                null !== (o = e.type) && void 0 !== o && o.defaultProps
                  ? hi(hi({}, e.type.defaultProps), e.props)
                  : e.props,
              a = i.stackId;
            if (i.hide) return t;
            var u = i[r],
              c = t[u] || { hasStack: !1, stackGroups: {} };
            if ((0, ai.vh)(a)) {
              var l = c.stackGroups[a] || {
                numericAxisId: r,
                cateAxisId: n,
                items: [],
              };
              l.items.push(e), (c.hasStack = !0), (c.stackGroups[a] = l);
            } else
              c.stackGroups[(0, ai.NF)("_stackId_")] = {
                numericAxisId: r,
                cateAxisId: n,
                items: [e],
              };
            return hi(hi({}, t), {}, yi({}, u, c));
          }, {});
          return Object.keys(a).reduce(function (e, i) {
            var u = a[i];
            if (u.hasStack) {
              u.stackGroups = Object.keys(u.stackGroups).reduce(function (
                e,
                i,
              ) {
                var a = u.stackGroups[i];
                return hi(
                  hi({}, e),
                  {},
                  yi({}, i, {
                    numericAxisId: r,
                    cateAxisId: n,
                    items: a.items,
                    stackedData: Bi(t, a.items, o),
                  }),
                );
              }, {});
            }
            return hi(hi({}, e), {}, yi({}, i, u));
          }, {});
        },
        Li = function (t, e) {
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
        };
      function zi(t) {
        var e = t.axis,
          r = t.ticks,
          n = t.bandSize,
          o = t.entry,
          i = t.index,
          a = t.dataKey;
        if ("category" === e.type) {
          if (!e.allowDuplicatedCategory && e.dataKey && !vo()(o[e.dataKey])) {
            var u = (0, ai.eP)(r, "value", o[e.dataKey]);
            if (u) return u.coordinate + n / 2;
          }
          return r[i] ? r[i].coordinate + n / 2 : null;
        }
        var c = di(o, vo()(a) ? e.dataKey : a);
        return vo()(c) ? null : e.scale(c);
      }
      var Ui = function (t) {
          var e = t.axis,
            r = t.ticks,
            n = t.offset,
            o = t.bandSize,
            i = t.entry,
            a = t.index;
          if ("category" === e.type) return r[a] ? r[a].coordinate + n : null;
          var u = di(i, e.dataKey, e.domain[a]);
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
        Wi = function (t, e) {
          var r,
            n = (
              null !== (r = t.type) && void 0 !== r && r.defaultProps
                ? hi(hi({}, t.type.defaultProps), t.props)
                : t.props
            ).stackId;
          if ((0, ai.vh)(n)) {
            var o = e[n];
            if (o) {
              var i = o.items.indexOf(t);
              return i >= 0 ? o.stackedData[i] : null;
            }
          }
          return null;
        },
        $i = function (t, e, r) {
          return Object.keys(t)
            .reduce(
              function (n, o) {
                var i = t[o].stackedData.reduce(
                  function (t, n) {
                    var o = n.slice(e, r + 1).reduce(
                      function (t, e) {
                        return [
                          ho()(e.concat([t[0]]).filter(ai.Et)),
                          fo()(e.concat([t[1]]).filter(ai.Et)),
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
        qi = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        Xi = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        Hi = function (t, e, r) {
          if (bo()(t)) return t(e, r);
          if (!Array.isArray(t)) return e;
          var n = [];
          if ((0, ai.Et)(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
          else if (qi.test(t[0])) {
            var o = +qi.exec(t[0])[1];
            n[0] = e[0] - o;
          } else bo()(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
          if ((0, ai.Et)(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
          else if (Xi.test(t[1])) {
            var i = +Xi.exec(t[1])[1];
            n[1] = e[1] + i;
          } else bo()(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
          return n;
        },
        Ki = function (t, e, r) {
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
            ? To()(t, Oo()(r, "type.defaultProps.domain"))
              ? e
              : t
            : e;
        },
        Gi = function (t, e) {
          var r = t.type.defaultProps
              ? hi(hi({}, t.type.defaultProps), t.props)
              : t.props,
            n = r.dataKey,
            o = r.name,
            i = r.unit,
            a = r.formatter,
            u = r.tooltipType,
            c = r.chartType,
            l = r.hide;
          return hi(
            hi({}, (0, ui.J9)(t, !1)),
            {},
            {
              dataKey: n,
              unit: i,
              formatter: a,
              name: o || n,
              color: bi(t),
              value: di(e, n),
              type: u,
              payload: e,
              chartType: c,
              hide: l,
            },
          );
        };
    },
    41242: (t, e, r) => {
      "use strict";
      r.d(e, { A3: () => p, Pu: () => f });
      var n = r(1036);
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
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != o(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != o(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == o(n) ? n : n + "") in t
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
          if (null == t || n.m.isSsr) return { width: 0, height: 0 };
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
    91038: (t, e, r) => {
      "use strict";
      r.d(e, {
        CG: () => g,
        Dj: () => x,
        Et: () => h,
        F4: () => m,
        NF: () => v,
        _3: () => p,
        eP: () => w,
        jG: () => O,
        lX: () => b,
        sA: () => f,
        vh: () => y,
      });
      var n = r(77837),
        o = r.n(n),
        i = r(27367),
        a = r.n(i),
        u = r(52686),
        c = r.n(u),
        l = r(2017),
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
        y = function (t) {
          return h(t) || o()(t);
        },
        d = 0,
        v = function (t) {
          var e = ++d;
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
    1036: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => n });
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
    61353: (t, e, r) => {
      "use strict";
      r.d(e, { R: () => n });
      var n = function (t, e) {
        var r = t.alwaysShow,
          n = t.ifOverflow;
        return r && (n = "extendDomain"), n === e;
      };
    },
    97380: (t, e, r) => {
      "use strict";
      r.d(e, { R: () => n });
      var n = function (t, e) {
        for (
          var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2;
          o < r;
          o++
        )
          n[o - 2] = arguments[o];
      };
    },
    50322: (t, e, r) => {
      "use strict";
      r.d(e, {
        IZ: () => b,
        Kg: () => v,
        Zk: () => S,
        lY: () => g,
        pr: () => x,
        yy: () => j,
      });
      var n = r(64609),
        o = r.n(n),
        i = r(90626),
        a = r(3316),
        u = r.n(a),
        c = r(91038),
        l = r(89998);
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
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != s(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != s(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == s(n) ? n : n + "") in t
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
            if ("string" == typeof t) return d(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return d(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var v = Math.PI / 180,
        m = function (t) {
          return (180 * t) / Math.PI;
        },
        b = function (t, e, r, n) {
          return { x: t + Math.cos(-v * n) * r, y: e + Math.sin(-v * n) * r };
        },
        g = function (t, e) {
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
        x = function (t, e, r, n, i) {
          var a = t.width,
            u = t.height,
            s = t.startAngle,
            f = t.endAngle,
            d = (0, c.F4)(t.cx, a, a / 2),
            v = (0, c.F4)(t.cy, u, u / 2),
            m = g(a, u, r),
            b = (0, c.F4)(t.innerRadius, m, 0),
            x = (0, c.F4)(t.outerRadius, m, 0.8 * m);
          return Object.keys(e).reduce(function (t, r) {
            var a,
              u = e[r],
              c = u.domain,
              m = u.reversed;
            if (o()(u.range))
              "angleAxis" === n
                ? (a = [s, f])
                : "radiusAxis" === n && (a = [b, x]),
                m && (a = [a[1], a[0]]);
            else {
              var g = y((a = u.range), 2);
              (s = g[0]), (f = g[1]);
            }
            var w = (0, l.W7)(u, i),
              O = w.realScaleType,
              j = w.scale;
            j.domain(c).range(a), (0, l.YB)(j);
            var S = (0, l.w7)(j, p(p({}, u), {}, { realScaleType: O })),
              A = p(
                p(p({}, u), S),
                {},
                {
                  range: a,
                  radius: x,
                  realScaleType: O,
                  scale: j,
                  cx: d,
                  cy: v,
                  innerRadius: b,
                  outerRadius: x,
                  startAngle: s,
                  endAngle: f,
                },
              );
            return p(p({}, t), {}, h({}, r, A));
          }, {});
        },
        w = function (t, e) {
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
            { radius: p, angle: m(y), angleInRadian: y }
          );
        },
        O = function (t, e) {
          var r = e.startAngle,
            n = e.endAngle,
            o = Math.floor(r / 360),
            i = Math.floor(n / 360);
          return t + 360 * Math.min(o, i);
        },
        j = function (t, e) {
          var r = t.x,
            n = t.y,
            o = w({ x: r, y: n }, e),
            i = o.radius,
            a = o.angle,
            u = e.innerRadius,
            c = e.outerRadius;
          if (i < u || i > c) return !1;
          if (0 === i) return !0;
          var l,
            s = (function (t) {
              var e = t.startAngle,
                r = t.endAngle,
                n = Math.floor(e / 360),
                o = Math.floor(r / 360),
                i = Math.min(n, o);
              return { startAngle: e - 360 * i, endAngle: r - 360 * i };
            })(e),
            f = s.startAngle,
            h = s.endAngle,
            y = a;
          if (f <= h) {
            for (; y > h; ) y -= 360;
            for (; y < f; ) y += 360;
            l = y >= f && y <= h;
          } else {
            for (; y > f; ) y -= 360;
            for (; y < h; ) y += 360;
            l = y >= h && y <= f;
          }
          return l ? p(p({}, e), {}, { radius: i, angle: O(y, e) }) : null;
        },
        S = function (t) {
          return (0, i.isValidElement)(t) || u()(t) || "boolean" == typeof t
            ? ""
            : t.className;
        };
    },
    50247: (t, e, r) => {
      "use strict";
      r.d(e, {
        AW: () => L,
        BU: () => k,
        J9: () => D,
        Me: () => M,
        Mn: () => j,
        OV: () => I,
        X_: () => R,
        aS: () => E,
        ee: () => B,
        sT: () => C,
      });
      var n = r(52686),
        o = r.n(n),
        i = r(64609),
        a = r.n(i),
        u = r(77837),
        c = r.n(u),
        l = r(3316),
        s = r.n(l),
        f = r(97827),
        p = r.n(f),
        h = r(90626),
        y = r(98193),
        d = r(91038),
        v = r(16339),
        m = r(62426),
        b = ["children"],
        g = ["children"];
      function x(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r = {};
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n];
              }
            return r;
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
          contextmenu: "onContextMenu",
          dblclick: "onDoubleClick",
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
        P = function t(e) {
          if (e === S && Array.isArray(A)) return A;
          var r = [];
          return (
            h.Children.forEach(e, function (e) {
              a()(e) ||
                ((0, y.isFragment)(e)
                  ? (r = r.concat(t(e.props.children)))
                  : r.push(e));
            }),
            (A = r),
            (S = e),
            r
          );
        };
      function E(t, e) {
        var r = [],
          n = [];
        return (
          (n = Array.isArray(e)
            ? e.map(function (t) {
                return j(t);
              })
            : [j(e)]),
          P(t).forEach(function (t) {
            var e = o()(t, "type.displayName") || o()(t, "type.name");
            -1 !== n.indexOf(e) && r.push(t);
          }),
          r
        );
      }
      function k(t, e) {
        var r = E(t, e);
        return r && r[0];
      }
      var M = function (t) {
          if (!t || !t.props) return !1;
          var e = t.props,
            r = e.width,
            n = e.height;
          return !(!(0, d.Et)(r) || r <= 0 || !(0, d.Et)(n) || n <= 0);
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
          return t && "object" === w(t) && "clipDot" in t;
        },
        D = function (t, e, r) {
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
                        null === m.VU || void 0 === m.VU ? void 0 : m.VU[n]) &&
                    void 0 !== o
                      ? o
                      : [];
                return (
                  (!s()(t) && ((n && i.includes(e)) || m.QQ.includes(e))) ||
                  (r && m.j2.includes(e))
                );
              })(null === (i = n) || void 0 === i ? void 0 : i[t], t, e, r) &&
                (o[t] = n[t]);
            }),
            o
          );
        },
        I = function t(e, r) {
          if (e === r) return !0;
          var n = h.Children.count(e);
          if (n !== h.Children.count(r)) return !1;
          if (0 === n) return !0;
          if (1 === n)
            return N(Array.isArray(e) ? e[0] : e, Array.isArray(r) ? r[0] : r);
          for (var o = 0; o < n; o++) {
            var i = e[o],
              a = r[o];
            if (Array.isArray(i) || Array.isArray(a)) {
              if (!t(i, a)) return !1;
            } else if (!N(i, a)) return !1;
          }
          return !0;
        },
        N = function (t, e) {
          if (a()(t) && a()(e)) return !0;
          if (!a()(t) && !a()(e)) {
            var r = t.props || {},
              n = r.children,
              o = x(r, b),
              i = e.props || {},
              u = i.children,
              c = x(i, g);
            return n && u
              ? (0, v.b)(o, c) && I(n, u)
              : !n && !u && (0, v.b)(o, c);
          }
          return !1;
        },
        B = function (t, e) {
          var r = [],
            n = {};
          return (
            P(t).forEach(function (t, o) {
              if (_(t)) r.push(t);
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
        R = function (t) {
          var e = t && t.type;
          return e && O[e] ? O[e] : null;
        },
        L = function (t, e) {
          return P(e).indexOf(t);
        };
    },
    16339: (t, e, r) => {
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
      r.d(e, { b: () => n });
    },
    29690: (t, e, r) => {
      "use strict";
      r.d(e, { g: () => s });
      var n = r(94075),
        o = r(89998),
        i = r(50247);
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
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != a(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != a(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == a(n) ? n : n + "") in t
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
        var e = t.children,
          r = t.formattedGraphicalItems,
          a = t.legendWidth,
          u = t.legendContent,
          l = (0, i.BU)(e, n.s);
        if (!l) return null;
        var s,
          f = n.s.defaultProps,
          p = void 0 !== f ? c(c({}, f), l.props) : {};
        return (
          (s =
            l.props && l.props.payload
              ? l.props && l.props.payload
              : "children" === u
                ? (r || []).reduce(function (t, e) {
                    var r = e.item,
                      n = e.props,
                      o = n.sectors || n.data || [];
                    return t.concat(
                      o.map(function (t) {
                        return {
                          type: l.props.iconType || r.props.legendType,
                          value: t.name,
                          color: t.fill,
                          payload: t,
                        };
                      }),
                    );
                  }, [])
                : (r || []).map(function (t) {
                    var e = t.item,
                      r = e.type.defaultProps,
                      n = void 0 !== r ? c(c({}, r), e.props) : {},
                      i = n.dataKey,
                      a = n.name,
                      u = n.legendType;
                    return {
                      inactive: n.hide,
                      dataKey: i,
                      type: p.iconType || u || "square",
                      color: (0, o.Ps)(e),
                      value: a || i,
                      payload: n,
                    };
                  })),
          c(c(c({}, p), n.s.getWithHeight(l, a)), {}, { payload: s, item: l })
        );
      };
    },
    46337: (t, e, r) => {
      "use strict";
      r.d(e, { s: () => u });
      var n = r(17744),
        o = r.n(n),
        i = r(3316),
        a = r.n(i);
      function u(t, e, r) {
        return !0 === e ? o()(t, r) : a()(e) ? o()(t, e) : t;
      }
    },
    62426: (t, e, r) => {
      "use strict";
      r.d(e, {
        QQ: () => u,
        VU: () => l,
        XC: () => p,
        _U: () => f,
        j2: () => s,
      });
      var n = r(90626),
        o = r(97827),
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
    90018: (t, e, r) => {
      "use strict";
      function n(t) {
        var e,
          r,
          o = "";
        if ("string" == typeof t || "number" == typeof t) o += t;
        else if ("object" == typeof t)
          if (Array.isArray(t)) {
            var i = t.length;
            for (e = 0; e < i; e++)
              t[e] && (r = n(t[e])) && (o && (o += " "), (o += r));
          } else for (r in t) t[r] && (o && (o += " "), (o += r));
        return o;
      }
      r.d(e, { A: () => o });
      const o = function () {
        for (var t, e, r = 0, o = "", i = arguments.length; r < i; r++)
          (t = arguments[r]) && (e = n(t)) && (o && (o += " "), (o += e));
        return o;
      };
    },
    28583: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => i, z: () => u });
      var n = r(34777),
        o = r(97458);
      function i() {
        var t,
          e,
          r = (0, o.A)().unknown(void 0),
          a = r.domain,
          u = r.range,
          c = 0,
          l = 1,
          s = !1,
          f = 0,
          p = 0,
          h = 0.5;
        function y() {
          var r = a().length,
            n = l < c,
            o = n ? l : c,
            i = n ? c : l;
          (t = (i - o) / Math.max(1, r - f + 2 * p)),
            s && (t = Math.floor(t)),
            (o += (i - o - t * (r - f)) * h),
            (e = t * (1 - f)),
            s && ((o = Math.round(o)), (e = Math.round(e)));
          var y = (function (t, e, r) {
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
          return u(n ? y.reverse() : y);
        }
        return (
          delete r.unknown,
          (r.domain = function (t) {
            return arguments.length ? (a(t), y()) : a();
          }),
          (r.range = function (t) {
            return arguments.length
              ? (([c, l] = t), (c = +c), (l = +l), y())
              : [c, l];
          }),
          (r.rangeRound = function (t) {
            return ([c, l] = t), (c = +c), (l = +l), (s = !0), y();
          }),
          (r.bandwidth = function () {
            return e;
          }),
          (r.step = function () {
            return t;
          }),
          (r.round = function (t) {
            return arguments.length ? ((s = !!t), y()) : s;
          }),
          (r.padding = function (t) {
            return arguments.length ? ((f = Math.min(1, (p = +t))), y()) : f;
          }),
          (r.paddingInner = function (t) {
            return arguments.length ? ((f = Math.min(1, t)), y()) : f;
          }),
          (r.paddingOuter = function (t) {
            return arguments.length ? ((p = +t), y()) : p;
          }),
          (r.align = function (t) {
            return arguments.length
              ? ((h = Math.max(0, Math.min(1, t))), y())
              : h;
          }),
          (r.copy = function () {
            return i(a(), [c, l])
              .round(s)
              .paddingInner(f)
              .paddingOuter(p)
              .align(h);
          }),
          n.C.apply(y(), arguments)
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
    34777: (t, e, r) => {
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
      r.d(e, { C: () => n, K: () => o });
    },
    97458: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => s, h: () => l });
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
      Set;
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
      var c = r(34777);
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
          c.C.apply(i, arguments),
          i
        );
      }
    },
    57949: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => n });
      Array.prototype.slice;
      function n(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
    },
    94770: (t, e, r) => {
      "use strict";
      function n(t) {
        return function () {
          return t;
        };
      }
      r.d(e, { A: () => n });
    },
    5823: (t, e, r) => {
      "use strict";
      r.d(e, { i: () => l });
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
        quadraticCurveTo(t, e, r, n) {
          this._append`Q${+t},${+e},${(this._x1 = +r)},${(this._y1 = +n)}`;
        }
        bezierCurveTo(t, e, r, n, o, i) {
          this
            ._append`C${+t},${+e},${+r},${+n},${(this._x1 = +o)},${(this._y1 = +i)}`;
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
              let y = r - u,
                d = o - c,
                v = l * l + s * s,
                m = y * y + d * d,
                b = Math.sqrt(v),
                g = Math.sqrt(h),
                x =
                  a * Math.tan((n - Math.acos((v + h - m) / (2 * b * g))) / 2),
                w = x / g,
                O = x / b;
              Math.abs(w - 1) > i && this._append`L${t + w * f},${e + w * p}`,
                this
                  ._append`A${a},${a},0,0,${+(p * y > f * d)},${(this._x1 = t + O * l)},${(this._y1 = e + O * s)}`;
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
            y = 1 ^ l,
            d = l ? u - c : c - u;
          null === this._x1
            ? this._append`M${p},${h}`
            : (Math.abs(this._x1 - p) > i || Math.abs(this._y1 - h) > i) &&
              this._append`L${p},${h}`,
            r &&
              (d < 0 && (d = (d % o) + o),
              d > a
                ? this
                    ._append`A${r},${r},0,1,${y},${t - s},${e - f}A${r},${r},0,1,${y},${(this._x1 = p)},${(this._y1 = h)}`
                : d > i &&
                  this
                    ._append`A${r},${r},0,${+(d >= n)},${y},${(this._x1 = t + r * Math.cos(c))},${(this._y1 = e + r * Math.sin(c))}`);
        }
        rect(t, e, r, n) {
          this
            ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}h${(r = +r)}v${+n}h${-r}Z`;
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

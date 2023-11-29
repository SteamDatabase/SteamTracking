/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3807],
  {
    23060: (t, e, r) => {
      "use strict";
      function n(t) {
        var e,
          r,
          i = "";
        if ("string" == typeof t || "number" == typeof t) i += t;
        else if ("object" == typeof t)
          if (Array.isArray(t))
            for (e = 0; e < t.length; e++)
              t[e] && (r = n(t[e])) && (i && (i += " "), (i += r));
          else for (e in t) t[e] && (i && (i += " "), (i += e));
        return i;
      }
      r.d(e, { Z: () => i });
      const i = function () {
        for (var t, e, r = 0, i = ""; r < arguments.length; )
          (t = arguments[r++]) && (e = n(t)) && (i && (i += " "), (i += e));
        return i;
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
          b = p(m / v),
          g = {};
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
          return (e.d = l), (e.e = i), c ? T(e, p) : e;
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
              (n = t[e] + ""), (r = v - n.length) && (o += E(r)), (o += n);
            (a = t[e]), (r = v - (n = a + "").length) && (o += E(r));
          } else if (0 === a) return "0";
          for (; a % 10 == 0; ) a /= 10;
          return o + a;
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
                i = n.precision,
                a = i + 5;
              if (void 0 === t) t = new n(10);
              else if ((t = new n(t)).s < 1 || t.eq(o)) throw Error(l + "NaN");
              if (r.s < 1) throw Error(l + (r.s ? "NaN" : "-Infinity"));
              return r.eq(o)
                ? new n(0)
                : ((c = !1), (e = j(k(r, a), k(t, a), a)), (c = !0), T(e, i));
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
                i = n.precision;
              if (!(t = new n(t)).s) throw Error(l + "NaN");
              return r.s
                ? ((c = !1), (e = j(r, t, 0, 1).times(t)), (c = !0), r.minus(e))
                : T(new n(r), i);
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
                i = this;
              if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
                throw Error(s + t);
              if (
                ((e = A(i) + 1),
                (r = (n = i.d.length - 1) * v + 1),
                (n = i.d[n]))
              ) {
                for (; n % 10 == 0; n /= 10) r--;
                for (n = i.d[0]; n >= 10; n /= 10) r++;
              }
              return t && e > r ? e : r;
            }),
          (g.squareRoot = g.sqrt =
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
                t = A(u),
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
                  ((n = (o = n).plus(j(u, o, a + 2)).times(0.5)),
                  O(o.d).slice(0, a) === (e = O(n.d)).slice(0, a))
                ) {
                  if (((e = e.slice(a - 3, a + 1)), i == a && "4999" == e)) {
                    if ((T(o, r + 1, 0), o.times(o).eq(u))) {
                      n = o;
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
              i = n.constructor;
            return (
              void 0 === t
                ? (r = D(n, !0))
                : (w(t, 0, a),
                  void 0 === e ? (e = i.rounding) : w(e, 0, 8),
                  (r = D((n = T(new i(n), t + 1, e)), !0, t + 1))),
              r
            );
          }),
          (g.toFixed = function (t, e) {
            var r,
              n,
              i = this,
              o = i.constructor;
            return void 0 === t
              ? D(i)
              : (w(t, 0, a),
                void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                (r = D(
                  (n = T(new o(i), t + A(i) + 1, e)).abs(),
                  !1,
                  t + A(n) + 1,
                )),
                i.isneg() && !i.isZero() ? "-" + r : r);
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
              if (((n = f.precision), t.eq(o))) return T(s, n);
              if (((u = (e = t.e) >= (r = t.d.length - 1)), (a = s.s), u)) {
                if ((r = h < 0 ? -h : h) <= m) {
                  for (
                    i = new f(o), e = Math.ceil(n / v + 4), c = !1;
                    r % 2 && C((i = i.times(s)).d, e), 0 !== (r = p(r / 2));

                  )
                    C((s = s.times(s)).d, e);
                  return (c = !0), t.s < 0 ? new f(o).div(i) : T(i, n);
                }
              } else if (a < 0) throw Error(l + "NaN");
              return (
                (a = a < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
                (s.s = 1),
                (c = !1),
                (i = t.times(k(s, n + 12))),
                (c = !0),
                ((i = S(i)).s = a),
                i
              );
            }),
          (g.toPrecision = function (t, e) {
            var r,
              n,
              i = this,
              o = i.constructor;
            return (
              void 0 === t
                ? (n = D(i, (r = A(i)) <= o.toExpNeg || r >= o.toExpPos))
                : (w(t, 1, a),
                  void 0 === e ? (e = o.rounding) : w(e, 0, 8),
                  (n = D(
                    (i = T(new o(i), t, e)),
                    t <= (r = A(i)) || r <= o.toExpNeg,
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
                return D(t, e <= r.toExpNeg || e >= r.toExpPos);
              });
        var j = (function () {
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
              _ = n.s == i.s ? 1 : -1,
              D = n.d,
              C = i.d;
            if (!n.s) return new M(n);
            if (!i.s) throw Error(l + "Division by zero");
            for (
              c = n.e - i.e,
                E = C.length,
                S = D.length,
                m = (d = new M(_)).d = [],
                s = 0;
              C[s] == (D[s] || 0);

            )
              ++s;
            if (
              (C[s] > (D[s] || 0) && --c,
              (w =
                null == o ? (o = M.precision) : a ? o + (A(n) - A(i)) + 1 : o) <
                0)
            )
              return new M(0);
            if (((w = (w / v + 2) | 0), (s = 0), 1 == E))
              for (f = 0, C = C[0], w++; (s < S || f) && w--; s++)
                (O = f * y + (D[s] || 0)),
                  (m[s] = (O / C) | 0),
                  (f = O % C | 0);
            else {
              for (
                (f = (y / (C[0] + 1)) | 0) > 1 &&
                  ((C = t(C, f)),
                  (D = t(D, f)),
                  (E = C.length),
                  (S = D.length)),
                  j = E,
                  g = (b = D.slice(0, E)).length;
                g < E;

              )
                b[g++] = 0;
              (k = C.slice()).unshift(0), (P = C[0]), C[1] >= y / 2 && ++P;
              do {
                (f = 0),
                  (u = e(C, b, E, g)) < 0
                    ? ((x = b[0]),
                      E != g && (x = x * y + (b[1] || 0)),
                      (f = (x / P) | 0) > 1
                        ? (f >= y && (f = y - 1),
                          1 ==
                            (u = e(
                              (p = t(C, f)),
                              b,
                              (h = p.length),
                              (g = b.length),
                            )) && (f--, r(p, E < h ? k : C, h)))
                        : (0 == f && (u = f = 1), (p = C.slice())),
                      (h = p.length) < g && p.unshift(0),
                      r(b, p, g),
                      -1 == u &&
                        (u = e(C, b, E, (g = b.length))) < 1 &&
                        (f++, r(b, E < g ? k : C, g)),
                      (g = b.length))
                    : 0 === u && (f++, (b = [0])),
                  (m[s++] = f),
                  u && b[0] ? (b[g++] = D[j] || 0) : ((b = [D[j]]), (g = 1));
              } while ((j++ < S || void 0 !== b[0]) && w--);
            }
            return m[0] || m.shift(), (d.e = c), T(d, a ? o + A(d) + 1 : o);
          };
        })();
        function S(t, e) {
          var r,
            n,
            i,
            a,
            u,
            l = 0,
            s = 0,
            p = t.constructor,
            d = p.precision;
          if (A(t) > 16) throw Error(f + A(t));
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
              ((n = T(n.times(t), u)),
              (r = r.times(++l)),
              O((a = i.plus(j(n, r, u))).d).slice(0, u) === O(i.d).slice(0, u))
            ) {
              for (; s--; ) i = T(i.times(i), u);
              return (p.precision = d), null == e ? ((c = !0), T(i, d)) : i;
            }
            i = a;
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
            b = m.precision;
          if (y.s < 1) throw Error(l + (y.s ? "NaN" : "-Infinity"));
          if (y.eq(o)) return new m(0);
          if ((null == e ? ((c = !1), (p = b)) : (p = e), y.eq(10)))
            return null == e && (c = !0), P(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (n = (r = O(v)).charAt(0)),
            (a = A(y)),
            !(Math.abs(a) < 15e14))
          )
            return (
              (f = P(m, p + 2, b).times(a + "")),
              (y = k(new m(n + "." + r.slice(1)), p - 10).plus(f)),
              (m.precision = b),
              null == e ? ((c = !0), T(y, b)) : y
            );
          for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
            (n = (r = O((y = y.times(t)).d)).charAt(0)), d++;
          for (
            a = A(y),
              n > 1
                ? ((y = new m("0." + r)), a++)
                : (y = new m(n + "." + r.slice(1))),
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
                0 !== a && (s = s.plus(P(m, p + 2, b).times(a + ""))),
                (s = j(s, new m(d), p)),
                (m.precision = b),
                null == e ? ((c = !0), T(s, b)) : s
              );
            (s = f), (i += 2);
          }
        }
        function M(t, e) {
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
            if ((t.d.push(+e), c && (t.e > b || t.e < -b))) throw Error(f + r);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function T(t, e, r) {
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
                ? ((o = A(t)),
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
          if (c && (t.e > b || t.e < -b)) throw Error(f + A(t));
          return t;
        }
        function _(t, e) {
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
            return e.s ? (e.s = -e.s) : (e = new h(t)), c ? T(e, d) : e;
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
          return l[0] ? ((e.d = l), (e.e = n), c ? T(e, d) : e) : new h(0);
        }
        function D(t, e, r) {
          var n,
            i = A(t),
            o = O(t.d),
            a = o.length;
          return (
            e
              ? (r && (n = r - a) > 0
                  ? (o = o.charAt(0) + "." + o.slice(1) + E(n))
                  : a > 1 && (o = o.charAt(0) + "." + o.slice(1)),
                (o = o + (i < 0 ? "e" : "e+") + i))
              : i < 0
              ? ((o = "0." + E(-i - 1) + o),
                r && (n = r - a) > 0 && (o += E(n)))
              : i >= a
              ? ((o += E(i + 1 - a)),
                r && (n = r - i - 1) > 0 && (o = o + "." + E(n)))
              : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)),
                r &&
                  (n = r - a) > 0 &&
                  (i + 1 === a && (o += "."), (o += E(n)))),
            t.s < 0 ? "-" + o : o
          );
        }
        function C(t, e) {
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
            ((o.prototype = g),
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
    24081: (t, e, r) => {
      var n = r(21059)(r(158), "DataView");
      t.exports = n;
    },
    15999: (t, e, r) => {
      var n = r(13387),
        i = r(69252),
        o = r(31125),
        a = r(9021),
        u = r(68131);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = i),
        (c.prototype.get = o),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    26811: (t, e, r) => {
      var n = r(72215),
        i = r(56105),
        o = r(30484),
        a = r(8046),
        u = r(30603);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = i),
        (c.prototype.get = o),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    60945: (t, e, r) => {
      var n = r(21059)(r(158), "Map");
      t.exports = n;
    },
    25835: (t, e, r) => {
      var n = r(73633),
        i = r(39382),
        o = r(28850),
        a = r(70756),
        u = r(2769);
      function c(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      (c.prototype.clear = n),
        (c.prototype.delete = i),
        (c.prototype.get = o),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    27540: (t, e, r) => {
      var n = r(21059)(r(158), "Promise");
      t.exports = n;
    },
    80476: (t, e, r) => {
      var n = r(21059)(r(158), "Set");
      t.exports = n;
    },
    74868: (t, e, r) => {
      var n = r(25835),
        i = r(57554),
        o = r(18800);
      function a(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.__data__ = new n(); ++e < r; ) this.add(t[e]);
      }
      (a.prototype.add = a.prototype.push = i),
        (a.prototype.has = o),
        (t.exports = a);
    },
    34987: (t, e, r) => {
      var n = r(26811),
        i = r(73832),
        o = r(31676),
        a = r(33577),
        u = r(43343),
        c = r(20488);
      function l(t) {
        var e = (this.__data__ = new n(t));
        this.size = e.size;
      }
      (l.prototype.clear = i),
        (l.prototype.delete = o),
        (l.prototype.get = a),
        (l.prototype.has = u),
        (l.prototype.set = c),
        (t.exports = l);
    },
    44937: (t, e, r) => {
      var n = r(158).Symbol;
      t.exports = n;
    },
    48596: (t, e, r) => {
      var n = r(158).Uint8Array;
      t.exports = n;
    },
    18307: (t, e, r) => {
      var n = r(21059)(r(158), "WeakMap");
      t.exports = n;
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
    5680: (t) => {
      t.exports = function (t, e) {
        for (
          var r = -1, n = null == t ? 0 : t.length, i = 0, o = [];
          ++r < n;

        ) {
          var a = t[r];
          e(a, r, t) && (o[i++] = a);
        }
        return o;
      };
    },
    1418: (t, e, r) => {
      var n = r(49537);
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
    92554: (t, e, r) => {
      var n = r(65086),
        i = r(67016),
        o = r(93706),
        a = r(77638),
        u = r(49699),
        c = r(70094),
        l = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var r = o(t),
          s = !r && i(t),
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
    57041: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; )
          i[r] = e(t[r], r, t);
        return i;
      };
    },
    52824: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r];
        return t;
      };
    },
    99280: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
          if (e(t[r], r, t)) return !0;
        return !1;
      };
    },
    49333: (t) => {
      t.exports = function (t) {
        return t.split("");
      };
    },
    33993: (t, e, r) => {
      var n = r(1316);
      t.exports = function (t, e) {
        for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
        return -1;
      };
    },
    88039: (t, e, r) => {
      var n = r(88689);
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
    5534: (t, e, r) => {
      var n = r(29415),
        i = r(84728)(n);
      t.exports = i;
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
    10284: (t, e, r) => {
      var n = r(43793)();
      t.exports = n;
    },
    29415: (t, e, r) => {
      var n = r(10284),
        i = r(23150);
      t.exports = function (t, e) {
        return t && n(t, e, i);
      };
    },
    51845: (t, e, r) => {
      var n = r(49160),
        i = r(46384);
      t.exports = function (t, e) {
        for (var r = 0, o = (e = n(e, t)).length; null != t && r < o; )
          t = t[i(e[r++])];
        return r && r == o ? t : void 0;
      };
    },
    45328: (t, e, r) => {
      var n = r(52824),
        i = r(93706);
      t.exports = function (t, e, r) {
        var o = e(t);
        return i(t) ? o : n(o, r(t));
      };
    },
    20194: (t, e, r) => {
      var n = r(44937),
        i = r(15401),
        o = r(92445),
        a = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : a && a in Object(t)
          ? i(t)
          : o(t);
      };
    },
    75806: (t) => {
      t.exports = function (t, e) {
        return t > e;
      };
    },
    56640: (t) => {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    49537: (t, e, r) => {
      var n = r(3670),
        i = r(148),
        o = r(60218);
      t.exports = function (t, e, r) {
        return e == e ? o(t, e, r) : n(t, i, r);
      };
    },
    64634: (t, e, r) => {
      var n = r(20194),
        i = r(81653);
      t.exports = function (t) {
        return i(t) && "[object Arguments]" == n(t);
      };
    },
    95372: (t, e, r) => {
      var n = r(55365),
        i = r(81653);
      t.exports = function t(e, r, o, a, u) {
        return (
          e === r ||
          (null == e || null == r || (!i(e) && !i(r))
            ? e != e && r != r
            : n(e, r, o, a, t, u))
        );
      };
    },
    55365: (t, e, r) => {
      var n = r(34987),
        i = r(95428),
        o = r(1108),
        a = r(71711),
        u = r(35551),
        c = r(93706),
        l = r(77638),
        s = r(70094),
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
            b || s(t) ? i(t, e, r, y, v, m) : o(t, e, x, r, y, v, m)
          );
        if (!(1 & r)) {
          var A = O && d.call(t, "__wrapped__"),
            P = j && d.call(e, "__wrapped__");
          if (A || P) {
            var E = A ? t.value() : t,
              k = P ? e.value() : e;
            return m || (m = new n()), v(E, k, r, y, m);
          }
        }
        return !!S && (m || (m = new n()), a(t, e, r, y, v, m));
      };
    },
    64652: (t, e, r) => {
      var n = r(34987),
        i = r(95372);
      t.exports = function (t, e, r, o) {
        var a = r.length,
          u = a,
          c = !o;
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
            if (o) var d = o(f, p, s, t, e, h);
            if (!(void 0 === d ? i(p, f, 3, o, h) : d)) return !1;
          }
        }
        return !0;
      };
    },
    148: (t) => {
      t.exports = function (t) {
        return t != t;
      };
    },
    4249: (t, e, r) => {
      var n = r(39277),
        i = r(83481),
        o = r(23619),
        a = r(91223),
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
        return !(!o(t) || i(t)) && (n(t) ? p : u).test(a(t));
      };
    },
    88595: (t, e, r) => {
      var n = r(20194),
        i = r(62008),
        o = r(81653),
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
          return o(t) && i(t.length) && !!a[n(t)];
        });
    },
    27159: (t, e, r) => {
      var n = r(377),
        i = r(63079),
        o = r(41549),
        a = r(93706),
        u = r(72659);
      t.exports = function (t) {
        return "function" == typeof t
          ? t
          : null == t
          ? o
          : "object" == typeof t
          ? a(t)
            ? i(t[0], t[1])
            : n(t)
          : u(t);
      };
    },
    76324: (t, e, r) => {
      var n = r(3067),
        i = r(32501),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!n(t)) return i(t);
        var e = [];
        for (var r in Object(t))
          o.call(t, r) && "constructor" != r && e.push(r);
        return e;
      };
    },
    30277: (t) => {
      t.exports = function (t, e) {
        return t < e;
      };
    },
    20472: (t, e, r) => {
      var n = r(5534),
        i = r(51528);
      t.exports = function (t, e) {
        var r = -1,
          o = i(t) ? Array(t.length) : [];
        return (
          n(t, function (t, n, i) {
            o[++r] = e(t, n, i);
          }),
          o
        );
      };
    },
    377: (t, e, r) => {
      var n = r(64652),
        i = r(49582),
        o = r(95498);
      t.exports = function (t) {
        var e = i(t);
        return 1 == e.length && e[0][2]
          ? o(e[0][0], e[0][1])
          : function (r) {
              return r === t || n(r, t, e);
            };
      };
    },
    63079: (t, e, r) => {
      var n = r(95372),
        i = r(80089),
        o = r(47975),
        a = r(63140),
        u = r(88255),
        c = r(95498),
        l = r(46384);
      t.exports = function (t, e) {
        return a(t) && u(e)
          ? c(l(t), e)
          : function (r) {
              var a = i(r, t);
              return void 0 === a && a === e ? o(r, t) : n(e, a, 3);
            };
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
    39238: (t) => {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    40612: (t, e, r) => {
      var n = r(51845);
      t.exports = function (t) {
        return function (e) {
          return n(e, t);
        };
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
    65086: (t) => {
      t.exports = function (t, e) {
        for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
        return n;
      };
    },
    80430: (t, e, r) => {
      var n = r(44937),
        i = r(57041),
        o = r(93706),
        a = r(81878),
        u = n ? n.prototype : void 0,
        c = u ? u.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (a(e)) return c ? c.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -Infinity ? "-0" : r;
      };
    },
    12383: (t, e, r) => {
      var n = r(38725),
        i = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, n(t) + 1).replace(i, "") : t;
      };
    },
    2723: (t) => {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
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
            for (var b = d.length; b--; ) if (d[b] === m) continue t;
            e && d.push(m), h.push(v);
          } else s(d, m, r) || (d !== h && d.push(m), h.push(v));
        }
        return h;
      };
    },
    67446: (t) => {
      t.exports = function (t, e) {
        return t.has(e);
      };
    },
    49160: (t, e, r) => {
      var n = r(93706),
        i = r(63140),
        o = r(39230),
        a = r(33270);
      t.exports = function (t, e) {
        return n(t) ? t : i(t, e) ? [t] : o(a(t));
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
    38728: (t, e, r) => {
      var n = r(158)["__core-js_shared__"];
      t.exports = n;
    },
    84728: (t, e, r) => {
      var n = r(51528);
      t.exports = function (t, e) {
        return function (r, i) {
          if (null == r) return r;
          if (!n(r)) return t(r, i);
          for (
            var o = r.length, a = e ? o : -1, u = Object(r);
            (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);

          );
          return r;
        };
      };
    },
    43793: (t) => {
      t.exports = function (t) {
        return function (e, r, n) {
          for (var i = -1, o = Object(e), a = n(e), u = a.length; u--; ) {
            var c = a[t ? u : ++i];
            if (!1 === r(o[c], c, o)) break;
          }
          return e;
        };
      };
    },
    30847: (t, e, r) => {
      var n = r(26253),
        i = r(44481),
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
    88689: (t, e, r) => {
      var n = r(21059),
        i = (function () {
          try {
            var t = n(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      t.exports = i;
    },
    95428: (t, e, r) => {
      var n = r(74868),
        i = r(99280),
        o = r(67446);
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
              !i(e, function (t, e) {
                if (!o(v, e) && (m === t || u(m, t, r, a, c))) return v.push(e);
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
    1108: (t, e, r) => {
      var n = r(44937),
        i = r(48596),
        o = r(1316),
        a = r(95428),
        u = r(11382),
        c = r(76680),
        l = n ? n.prototype : void 0,
        s = l ? l.valueOf : void 0;
      t.exports = function (t, e, r, n, l, f, p) {
        switch (r) {
          case "[object DataView]":
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            (t = t.buffer), (e = e.buffer);
          case "[object ArrayBuffer]":
            return !(t.byteLength != e.byteLength || !f(new i(t), new i(e)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return o(+t, +e);
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
    71711: (t, e, r) => {
      var n = r(47461),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, r, o, a, u) {
        var c = 1 & r,
          l = n(t),
          s = l.length;
        if (s != n(e).length && !c) return !1;
        for (var f = s; f--; ) {
          var p = l[f];
          if (!(c ? p in e : i.call(e, p))) return !1;
        }
        var h = u.get(t),
          d = u.get(e);
        if (h && d) return h == e && d == t;
        var y = !0;
        u.set(t, e), u.set(e, t);
        for (var v = c; ++f < s; ) {
          var m = t[(p = l[f])],
            b = e[p];
          if (o) var g = c ? o(b, m, p, e, t, u) : o(m, b, p, t, e, u);
          if (!(void 0 === g ? m === b || a(m, b, r, o, u) : g)) {
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
    14528: (t, e, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      t.exports = n;
    },
    47461: (t, e, r) => {
      var n = r(45328),
        i = r(45278),
        o = r(23150);
      t.exports = function (t) {
        return n(t, o, i);
      };
    },
    5662: (t, e, r) => {
      var n = r(10205);
      t.exports = function (t, e) {
        var r = t.__data__;
        return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      };
    },
    49582: (t, e, r) => {
      var n = r(88255),
        i = r(23150);
      t.exports = function (t) {
        for (var e = i(t), r = e.length; r--; ) {
          var o = e[r],
            a = t[o];
          e[r] = [o, a, n(a)];
        }
        return e;
      };
    },
    21059: (t, e, r) => {
      var n = r(4249),
        i = r(4759);
      t.exports = function (t, e) {
        var r = i(t, e);
        return n(r) ? r : void 0;
      };
    },
    97959: (t, e, r) => {
      var n = r(78579)(Object.getPrototypeOf, Object);
      t.exports = n;
    },
    15401: (t, e, r) => {
      var n = r(44937),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = n ? n.toStringTag : void 0;
      t.exports = function (t) {
        var e = o.call(t, u),
          r = t[u];
        try {
          t[u] = void 0;
          var n = !0;
        } catch (t) {}
        var i = a.call(t);
        return n && (e ? (t[u] = r) : delete t[u]), i;
      };
    },
    45278: (t, e, r) => {
      var n = r(5680),
        i = r(59174),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  n(a(t), function (e) {
                    return o.call(t, e);
                  }));
            }
          : i;
      t.exports = u;
    },
    35551: (t, e, r) => {
      var n = r(24081),
        i = r(60945),
        o = r(27540),
        a = r(80476),
        u = r(18307),
        c = r(20194),
        l = r(91223),
        s = "[object Map]",
        f = "[object Promise]",
        p = "[object Set]",
        h = "[object WeakMap]",
        d = "[object DataView]",
        y = l(n),
        v = l(i),
        m = l(o),
        b = l(a),
        g = l(u),
        x = c;
      ((n && x(new n(new ArrayBuffer(1))) != d) ||
        (i && x(new i()) != s) ||
        (o && x(o.resolve()) != f) ||
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
    4759: (t) => {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    96919: (t, e, r) => {
      var n = r(49160),
        i = r(67016),
        o = r(93706),
        a = r(49699),
        u = r(62008),
        c = r(46384);
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
              (o(t) || i(t));
      };
    },
    44481: (t) => {
      var e = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
      );
      t.exports = function (t) {
        return e.test(t);
      };
    },
    13387: (t, e, r) => {
      var n = r(45155);
      t.exports = function () {
        (this.__data__ = n ? n(null) : {}), (this.size = 0);
      };
    },
    69252: (t) => {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    31125: (t, e, r) => {
      var n = r(45155),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (n) {
          var r = e[t];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return i.call(e, t) ? e[t] : void 0;
      };
    },
    9021: (t, e, r) => {
      var n = r(45155),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : i.call(e, t);
      };
    },
    68131: (t, e, r) => {
      var n = r(45155);
      t.exports = function (t, e) {
        var r = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
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
    49699: (t) => {
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
    63140: (t, e, r) => {
      var n = r(93706),
        i = r(81878),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
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
            !i(t)
          ) ||
          a.test(t) ||
          !o.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    10205: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    83481: (t, e, r) => {
      var n,
        i = r(38728),
        o = (n = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + n
          : "";
      t.exports = function (t) {
        return !!o && o in t;
      };
    },
    3067: (t) => {
      var e = Object.prototype;
      t.exports = function (t) {
        var r = t && t.constructor;
        return t === (("function" == typeof r && r.prototype) || e);
      };
    },
    88255: (t, e, r) => {
      var n = r(23619);
      t.exports = function (t) {
        return t == t && !n(t);
      };
    },
    72215: (t) => {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    56105: (t, e, r) => {
      var n = r(33993),
        i = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return (
          !(r < 0) &&
          (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, !0)
        );
      };
    },
    30484: (t, e, r) => {
      var n = r(33993);
      t.exports = function (t) {
        var e = this.__data__,
          r = n(e, t);
        return r < 0 ? void 0 : e[r][1];
      };
    },
    8046: (t, e, r) => {
      var n = r(33993);
      t.exports = function (t) {
        return n(this.__data__, t) > -1;
      };
    },
    30603: (t, e, r) => {
      var n = r(33993);
      t.exports = function (t, e) {
        var r = this.__data__,
          i = n(r, t);
        return i < 0 ? (++this.size, r.push([t, e])) : (r[i][1] = e), this;
      };
    },
    73633: (t, e, r) => {
      var n = r(15999),
        i = r(26811),
        o = r(60945);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new n(),
            map: new (o || i)(),
            string: new n(),
          });
      };
    },
    39382: (t, e, r) => {
      var n = r(5662);
      t.exports = function (t) {
        var e = n(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    28850: (t, e, r) => {
      var n = r(5662);
      t.exports = function (t) {
        return n(this, t).get(t);
      };
    },
    70756: (t, e, r) => {
      var n = r(5662);
      t.exports = function (t) {
        return n(this, t).has(t);
      };
    },
    2769: (t, e, r) => {
      var n = r(5662);
      t.exports = function (t, e) {
        var r = n(this, t),
          i = r.size;
        return r.set(t, e), (this.size += r.size == i ? 0 : 1), this;
      };
    },
    11382: (t) => {
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
    95498: (t) => {
      t.exports = function (t, e) {
        return function (r) {
          return null != r && r[t] === e && (void 0 !== e || t in Object(r));
        };
      };
    },
    32202: (t, e, r) => {
      var n = r(54883);
      t.exports = function (t) {
        var e = n(t, function (t) {
            return 500 === r.size && r.clear(), t;
          }),
          r = e.cache;
        return e;
      };
    },
    45155: (t, e, r) => {
      var n = r(21059)(Object, "create");
      t.exports = n;
    },
    32501: (t, e, r) => {
      var n = r(78579)(Object.keys, Object);
      t.exports = n;
    },
    41771: (t, e, r) => {
      t = r.nmd(t);
      var n = r(14528),
        i = e && !e.nodeType && e,
        o = i && t && !t.nodeType && t,
        a = o && o.exports === i && n.process,
        u = (function () {
          try {
            var t = o && o.require && o.require("util").types;
            return t || (a && a.binding && a.binding("util"));
          } catch (t) {}
        })();
      t.exports = u;
    },
    92445: (t) => {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    78579: (t) => {
      t.exports = function (t, e) {
        return function (r) {
          return t(e(r));
        };
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
    158: (t, e, r) => {
      var n = r(14528),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = n || i || Function("return this")();
      t.exports = o;
    },
    57554: (t) => {
      t.exports = function (t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this;
      };
    },
    18800: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    76680: (t) => {
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
    73832: (t, e, r) => {
      var n = r(26811);
      t.exports = function () {
        (this.__data__ = new n()), (this.size = 0);
      };
    },
    31676: (t) => {
      t.exports = function (t) {
        var e = this.__data__,
          r = e.delete(t);
        return (this.size = e.size), r;
      };
    },
    33577: (t) => {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    43343: (t) => {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    20488: (t, e, r) => {
      var n = r(26811),
        i = r(60945),
        o = r(25835);
      t.exports = function (t, e) {
        var r = this.__data__;
        if (r instanceof n) {
          var a = r.__data__;
          if (!i || a.length < 199)
            return a.push([t, e]), (this.size = ++r.size), this;
          r = this.__data__ = new o(a);
        }
        return r.set(t, e), (this.size = r.size), this;
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
        i = r(44481),
        o = r(35642);
      t.exports = function (t) {
        return i(t) ? o(t) : n(t);
      };
    },
    39230: (t, e, r) => {
      var n = r(32202),
        i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = n(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(i, function (t, r, n, i) {
              e.push(n ? i.replace(o, "$1") : r || t);
            }),
            e
          );
        });
      t.exports = a;
    },
    46384: (t, e, r) => {
      var n = r(81878);
      t.exports = function (t) {
        if ("string" == typeof t || n(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -Infinity ? "-0" : e;
      };
    },
    91223: (t) => {
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
          var t = i();
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
          var t = i(),
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
    1316: (t) => {
      t.exports = function (t, e) {
        return t === e || (t != t && e != e);
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
    80089: (t, e, r) => {
      var n = r(51845);
      t.exports = function (t, e, r) {
        var i = null == t ? void 0 : n(t, e);
        return void 0 === i ? r : i;
      };
    },
    47975: (t, e, r) => {
      var n = r(56640),
        i = r(96919);
      t.exports = function (t, e) {
        return null != t && i(t, e, n);
      };
    },
    41549: (t) => {
      t.exports = function (t) {
        return t;
      };
    },
    67016: (t, e, r) => {
      var n = r(64634),
        i = r(81653),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        c = n(
          (function () {
            return arguments;
          })(),
        )
          ? n
          : function (t) {
              return i(t) && a.call(t, "callee") && !u.call(t, "callee");
            };
      t.exports = c;
    },
    93706: (t) => {
      var e = Array.isArray;
      t.exports = e;
    },
    51528: (t, e, r) => {
      var n = r(39277),
        i = r(62008);
      t.exports = function (t) {
        return null != t && i(t.length) && !n(t);
      };
    },
    23079: (t, e, r) => {
      var n = r(20194),
        i = r(81653);
      t.exports = function (t) {
        return !0 === t || !1 === t || (i(t) && "[object Boolean]" == n(t));
      };
    },
    77638: (t, e, r) => {
      t = r.nmd(t);
      var n = r(158),
        i = r(30647),
        o = e && !e.nodeType && e,
        a = o && t && !t.nodeType && t,
        u = a && a.exports === o ? n.Buffer : void 0,
        c = (u ? u.isBuffer : void 0) || i;
      t.exports = c;
    },
    47184: (t, e, r) => {
      var n = r(95372);
      t.exports = function (t, e) {
        return n(t, e);
      };
    },
    39277: (t, e, r) => {
      var n = r(20194),
        i = r(23619);
      t.exports = function (t) {
        if (!i(t)) return !1;
        var e = n(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    62008: (t) => {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
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
    23619: (t) => {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    81653: (t) => {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    82678: (t, e, r) => {
      var n = r(20194),
        i = r(97959),
        o = r(81653),
        a = Function.prototype,
        u = Object.prototype,
        c = a.toString,
        l = u.hasOwnProperty,
        s = c.call(Object);
      t.exports = function (t) {
        if (!o(t) || "[object Object]" != n(t)) return !1;
        var e = i(t);
        if (null === e) return !0;
        var r = l.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && c.call(r) == s;
      };
    },
    72139: (t, e, r) => {
      var n = r(20194),
        i = r(93706),
        o = r(81653);
      t.exports = function (t) {
        return (
          "string" == typeof t || (!i(t) && o(t) && "[object String]" == n(t))
        );
      };
    },
    81878: (t, e, r) => {
      var n = r(20194),
        i = r(81653);
      t.exports = function (t) {
        return "symbol" == typeof t || (i(t) && "[object Symbol]" == n(t));
      };
    },
    70094: (t, e, r) => {
      var n = r(88595),
        i = r(2723),
        o = r(41771),
        a = o && o.isTypedArray,
        u = a ? i(a) : n;
      t.exports = u;
    },
    23150: (t, e, r) => {
      var n = r(92554),
        i = r(76324),
        o = r(51528);
      t.exports = function (t) {
        return o(t) ? n(t) : i(t);
      };
    },
    80275: (t) => {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    34118: (t, e, r) => {
      var n = r(57041),
        i = r(27159),
        o = r(20472),
        a = r(93706);
      t.exports = function (t, e) {
        return (a(t) ? n : o)(t, i(e, 3));
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
    54883: (t, e, r) => {
      var n = r(25835);
      function i(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError("Expected a function");
        var r = function () {
          var n = arguments,
            i = e ? e.apply(this, n) : n[0],
            o = r.cache;
          if (o.has(i)) return o.get(i);
          var a = t.apply(this, n);
          return (r.cache = o.set(i, a) || o), a;
        };
        return (r.cache = new (i.Cache || n)()), r;
      }
      (i.Cache = n), (t.exports = i);
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
    72659: (t, e, r) => {
      var n = r(39238),
        i = r(40612),
        o = r(63140),
        a = r(46384);
      t.exports = function (t) {
        return o(t) ? n(a(t)) : i(t);
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
    59174: (t) => {
      t.exports = function () {
        return [];
      };
    },
    30647: (t) => {
      t.exports = function () {
        return !1;
      };
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
    33270: (t, e, r) => {
      var n = r(80430);
      t.exports = function (t) {
        return null == t ? "" : n(t);
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
      function b(t, e) {
        return h(t.getTime(), e.getTime());
      }
      function g(t, e, r) {
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
      function j(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function S(t, e, r) {
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
      function A(t, e) {
        var r = t.length;
        if (e.length !== r) return !1;
        for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var P = "[object Arguments]",
        E = "[object Boolean]",
        k = "[object Date]",
        M = "[object Map]",
        T = "[object Number]",
        _ = "[object Object]",
        D = "[object RegExp]",
        C = "[object Set]",
        N = "[object String]",
        I = Array.isArray,
        B =
          "function" == typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView
            : null,
        L = Object.assign,
        R = Object.prototype.toString.call.bind(Object.prototype.toString);
      var z = $();
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
                areDatesEqual: b,
                areMapsEqual: n ? l(g, w) : g,
                areObjectsEqual: n ? w : x,
                arePrimitiveWrappersEqual: O,
                areRegExpsEqual: j,
                areSetsEqual: n ? l(S, w) : S,
                areTypedArraysEqual: n ? w : A,
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
              if (I(t)) return e(t, l, s);
              if (null != B && B(t)) return c(t, l, s);
              if (f === Date) return r(t, l, s);
              if (f === RegExp) return a(t, l, s);
              if (f === Map) return n(t, l, s);
              if (f === Set) return u(t, l, s);
              var p = R(t);
              return p === k
                ? r(t, l, s)
                : p === D
                ? a(t, l, s)
                : p === M
                ? n(t, l, s)
                : p === C
                ? u(t, l, s)
                : p === _
                ? "function" != typeof t.then &&
                  "function" != typeof l.then &&
                  i(t, l, s)
                : p === P
                ? i(t, l, s)
                : (p === E || p === T || p === N) && o(t, l, s);
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
      function F(t) {
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
                var i = W(n),
                  o = i[0],
                  a = i.slice(1);
                return "number" == typeof o
                  ? void F(r.bind(null, a), o)
                  : (r(o), void F(r.bind(null, a)));
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
      function Y(t, e) {
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
      function X(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Y(Object(r), !0).forEach(function (e) {
                V(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Y(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function V(t, e, r) {
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
      var G = ["Webkit", "Moz", "O", "ms"],
        K = ["-webkit-", "-moz-", "-o-", "-ms-"],
        J = ["transform", "transformOrigin", "transition"],
        Q = function (t) {
          return t;
        },
        tt = function (t, e) {
          return Object.keys(e).reduce(function (r, n) {
            return X(X({}, r), {}, V({}, n, t(n, e[n])));
          }, {});
        },
        et = function (t) {
          return Object.keys(t).reduce(function (t, e) {
            return X(
              X({}, t),
              (function (t, e) {
                if (-1 === J.indexOf(t))
                  return V({}, t, Number.isNaN(e) ? 0 : e);
                var r = "transition" === t,
                  n = t.replace(/(\w)/, function (t) {
                    return t.toUpperCase();
                  }),
                  i = e;
                return G.reduce(function (t, o, a) {
                  return (
                    r &&
                      (i = e.replace(
                        /(transform|transform-origin)/gim,
                        "".concat(K[a], "$1"),
                      )),
                    X(X({}, t), {}, V({}, o + n, i))
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
          var i = tt(function (t, r) {
            if (Ot(r)) {
              var n = bt(e(r.from, r.to, r.velocity), 2),
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
      const St = function (t, e, r, n, i) {
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
                (f = jt(r, f, o)),
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
      function Et(t, e) {
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
      function Tt(t, e) {
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
      function _t(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Tt(Object(r), !0).forEach(function (e) {
                Dt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Tt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function Dt(t, e, r) {
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
      function Ct(t, e) {
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
            var i = zt(this).constructor;
            r = Reflect.construct(n, arguments, i);
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
            e && It(t, e);
        })(a, t);
        var e,
          r,
          i,
          o = Bt(a);
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
            ((r.handleStyleChange = r.handleStyleChange.bind(Rt(r))),
            (r.changeStyle = r.changeStyle.bind(Rt(r))),
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
            r.state = { style: u ? Dt({}, u, c) : c };
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
                    if (!(z(t.to, a) && t.canBegin && t.isActive)) {
                      var l = !t.canBegin || !t.isActive;
                      this.manager && this.manager.stop(),
                        this.stopJSAnimation && this.stopJSAnimation();
                      var s = l || o ? u : t.to;
                      if (this.state && c) {
                        var f = { style: i ? Dt({}, i, s) : s };
                        ((i && [i] !== s) || (!i && c !== s)) &&
                          this.setState(f);
                      }
                      this.runAnimation(
                        _t(_t({}, this.props), {}, { from: s, begin: 0 }),
                      );
                    }
                  } else {
                    var p = { style: i ? Dt({}, i, a) : a };
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
                  l = St(r, n, pt(o), i, this.changeStyle);
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
                    kt(
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
                            return [].concat(kt(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: c,
                                duration: o,
                                easing: u,
                              }),
                              o,
                            ]);
                          var h = rt(p, o, u),
                            d = _t(
                              _t(_t({}, f.style), c),
                              {},
                              { transition: h },
                            );
                          return [].concat(kt(t), [d, o, s]).filter(Q);
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
                    var f = n ? Dt({}, n, i) : i,
                      p = rt(Object.keys(f), r, o);
                    s.start([a, e, _t(_t({}, f), {}, { transition: p }), r, u]);
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
                    Et(t, Pt)),
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
                    _t(
                      _t({}, o),
                      {},
                      { style: _t(_t({}, i), u), className: a },
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
          ]) && Ct(e.prototype, r),
          i && Ct(e, i),
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
      const Ft = $t;
      var Ut = r(32873),
        Wt = r(24561),
        Zt = ["children", "appearOptions", "enterOptions", "leaveOptions"];
      function qt(t) {
        return (
          (qt =
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
          qt(t)
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
      function Yt(t, e) {
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
      function Vt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Xt(Object(r), !0).forEach(function (e) {
                ee(t, e, r[e]);
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
      function Gt(t, e) {
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
            if (e && ("object" === qt(e) || "function" == typeof e)) return e;
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
          if ("object" !== qt(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== qt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === qt(e) ? e : String(e);
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
                      Yt(e, Zt));
                  return n.createElement(
                    Wt.ZP,
                    Ht({}, i, {
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
            ]) && Gt(e.prototype, r),
            i && Gt(e, i),
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
      const ue = Ft;
    },
    48218: (t, e, r) => {
      "use strict";
      r.d(e, { $: () => U });
      var n = r(89526),
        i = r(23060),
        o = r(5722),
        a = r(47184),
        u = r.n(a),
        c = r(51391),
        l = r.n(c),
        s = r(61452),
        f = r(65370),
        p = r(32214),
        h = r(34324),
        d = r(16171),
        y = r(9410),
        v = r(59509),
        m = r(37287),
        b = r(33790),
        g = r(5579);
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
      function E(t, e) {
        var r = t.x,
          n = t.y,
          i = P(t, w),
          o = "".concat(r),
          a = parseInt(o, 10),
          u = "".concat(n),
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
        return n.createElement(
          g.bn,
          O(
            {
              shapeType: "rectangle",
              propTransformer: E,
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
                $(t, e, r[e]);
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
            var i = z(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === T(e) || "function" == typeof e)) return e;
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
      function $(t, e, r) {
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
          if ("object" !== T(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== T(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === T(e) ? e : String(e);
      }
      var U = (function (t) {
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
            $(R((t = c.call.apply(c, [this].concat(r)))), "state", {
              isAnimationFinished: !1,
            }),
            $(R(t), "id", (0, d.EL)("recharts-bar-")),
            $(R(t), "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), e && e();
            }),
            $(R(t), "handleAnimationStart", function () {
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
                  i = r.shape,
                  o = r.dataKey,
                  a = r.activeIndex,
                  u = r.activeBar,
                  c = (0, y.L6)(this.props);
                return (
                  t &&
                  t.map(function (t, r) {
                    var l = r === a,
                      f = l ? u : i,
                      p = N(
                        N(N({}, c), t),
                        {},
                        {
                          isActive: l,
                          option: f,
                          index: r,
                          dataKey: o,
                          onAnimationStart: e.handleAnimationStart,
                          onAnimationEnd: e.handleAnimationEnd,
                        },
                      );
                    return n.createElement(
                      s.m,
                      D(
                        { className: "recharts-bar-rectangle" },
                        (0, b.bw)(e.props, t, r),
                        { key: "rectangle-".concat(r) },
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
                  i = e.layout,
                  a = e.isAnimationActive,
                  u = e.animationBegin,
                  c = e.animationDuration,
                  l = e.animationEasing,
                  f = e.animationId,
                  p = this.state.prevData;
                return n.createElement(
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
                      a = r.map(function (t, e) {
                        var r = p && p[e];
                        if (r) {
                          var n = (0, d.k4)(r.x, t.x),
                            a = (0, d.k4)(r.y, t.y),
                            u = (0, d.k4)(r.width, t.width),
                            c = (0, d.k4)(r.height, t.height);
                          return N(
                            N({}, t),
                            {},
                            { x: n(o), y: a(o), width: u(o), height: c(o) },
                          );
                        }
                        if ("horizontal" === i) {
                          var l = (0, d.k4)(0, t.height)(o);
                          return N(
                            N({}, t),
                            {},
                            { y: t.y + t.height - l, height: l },
                          );
                        }
                        var s = (0, d.k4)(0, t.width)(o);
                        return N(N({}, t), {}, { width: s });
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
                  i = e.dataKey,
                  o = e.activeIndex,
                  a = (0, y.L6)(this.props.background);
                return r.map(function (e, r) {
                  e.value;
                  var u = e.background,
                    c = _(e, M);
                  if (!u) return null;
                  var l = N(
                    N(
                      N(N(N({}, c), {}, { fill: "#eee" }, u), a),
                      (0, b.bw)(t.props, e, r),
                    ),
                    {},
                    {
                      onAnimationStart: t.handleAnimationStart,
                      onAnimationEnd: t.handleAnimationEnd,
                      dataKey: i,
                      index: r,
                      key: "background-bar-".concat(r),
                      className: "recharts-bar-background-rectangle",
                    },
                  );
                  return n.createElement(
                    k,
                    D({ option: t.props.background, isActive: r === o }, l),
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
                  i = r.data,
                  o = r.xAxis,
                  a = r.yAxis,
                  u = r.layout,
                  c = r.children,
                  l = (0, y.NN)(c, f.W);
                if (!l) return null;
                var p = "vertical" === u ? i[0].height / 2 : i[0].width / 2,
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
                  l.map(function (t, e) {
                    return n.cloneElement(t, {
                      key: "error-bar-".concat(e),
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
                  r = t.data,
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
                if (e || !r || !r.length) return null;
                var b = this.state.isAnimationFinished,
                  g = (0, i.Z)("recharts-bar", o),
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
      $(U, "displayName", "Bar"),
        $(U, "defaultProps", {
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
        $(U, "getComposedData", function (t) {
          var e = t.props,
            r = t.item,
            n = t.barPosition,
            i = t.bandSize,
            o = t.xAxis,
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
            j = "horizontal" === b ? a : o,
            S = l ? j.scale.domain() : null,
            A = (0, m.Yj)({ numericAxis: j }),
            P = (0, y.NN)(w, p.b),
            E = f.map(function (t, e) {
              var n, f, p, h, y, g;
              if (
                (l
                  ? (n = (0, m.Vv)(l[s + e], S))
                  : ((n = (0, m.F$)(t, x)), Array.isArray(n) || (n = [A, n])),
                "horizontal" === b)
              ) {
                var w,
                  j = [a.scale(n[0]), a.scale(n[1])],
                  E = j[0],
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
                    null !== (w = null != k ? k : E) && void 0 !== w
                      ? w
                      : void 0),
                  (h = v.size);
                var M = E - k;
                if (
                  ((y = Number.isNaN(M) ? 0 : M),
                  (g = { x: f, y: a.y, width: h, height: a.height }),
                  Math.abs(O) > 0 && Math.abs(y) < Math.abs(O))
                ) {
                  var T = (0, d.uY)(y || O) * (Math.abs(O) - Math.abs(y));
                  (p -= T), (y += T);
                }
              } else {
                var _ = [o.scale(n[0]), o.scale(n[1])],
                  D = _[0],
                  C = _[1];
                if (
                  ((f = D),
                  (p = (0, m.Fy)({
                    axis: a,
                    ticks: c,
                    bandSize: i,
                    offset: v.offset,
                    entry: t,
                    index: e,
                  })),
                  (h = C - D),
                  (y = v.size),
                  (g = { x: o.x, y: p, width: o.width, height: y }),
                  Math.abs(O) > 0 && Math.abs(h) < Math.abs(O))
                )
                  h += (0, d.uY)(h || O) * (Math.abs(O) - Math.abs(h));
              }
              return N(
                N(
                  N({}, t),
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
                  P && P[e] && P[e].props,
                ),
                {},
                {
                  tooltipPayload: [(0, m.Qo)(r, t)],
                  tooltipPosition: { x: f + h / 2, y: p + y / 2 },
                },
              );
            });
          return N({ data: E, layout: b }, h);
        });
    },
    42333: (t, e, r) => {
      "use strict";
      r.d(e, { q: () => w });
      var n = r(89526),
        i = r(39277),
        o = r.n(i),
        a = r(16171),
        u = r(9410),
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
            var i = b(this).constructor;
            r = Reflect.construct(n, arguments, i);
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
                var r;
                if (n.isValidElement(t)) r = n.cloneElement(t, e);
                else if (o()(t)) r = t(e);
                else {
                  var i = e.x1,
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
                      x1: i,
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
                  i = r.x,
                  o = r.width,
                  a = r.horizontal;
                if (!t || !t.length) return null;
                var u = t.map(function (t, r) {
                  var n = d(
                    d({}, e.props),
                    {},
                    {
                      x1: i,
                      y1: t,
                      x2: i + o,
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
                  i = r.y,
                  o = r.height,
                  a = r.vertical;
                if (!t || !t.length) return null;
                var u = t.map(function (t, r) {
                  var n = d(
                    d({}, e.props),
                    {},
                    {
                      x1: t,
                      y1: i,
                      x2: t,
                      y2: i + o,
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
                  i = r.fillOpacity,
                  o = r.x,
                  a = r.y,
                  u = r.width,
                  c = r.height,
                  l = t
                    .map(function (t) {
                      return Math.round(t + o - o);
                    })
                    .sort(function (t, e) {
                      return t - e;
                    });
                o !== l[0] && l.unshift(0);
                var s = l.map(function (t, r) {
                  var s = l[r + 1] ? l[r + 1] - t : o + u - t;
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
                    fillOpacity: i,
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
                  i = r.fillOpacity,
                  o = r.x,
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
                    x: o,
                    height: s,
                    width: u,
                    stroke: "none",
                    fill: e[f],
                    fillOpacity: i,
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
                  i = e.x,
                  o = e.y,
                  a = e.width,
                  u = e.height;
                return n.createElement("rect", {
                  x: i,
                  y: o,
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
                  b = t.syncWithTicks,
                  g = t.horizontalValues,
                  x = t.verticalValues;
                if (
                  !(0, a.hj)(i) ||
                  i <= 0 ||
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
                if ((!O || !O.length) && o()(s)) {
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
                if ((!j || !j.length) && o()(f)) {
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
          i && y(e, i),
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
          b = p.map(function (t, o) {
            var a = h(t, f),
              s = a.x,
              p = a.y,
              v = a.value,
              b = a.errorVal;
            if (!b) return null;
            var g,
              x,
              w = [];
            if (Array.isArray(b)) {
              var O = c(b, 2);
              (g = O[0]), (x = O[1]);
            } else g = x = b;
            if ("vertical" === r) {
              var j = d.scale,
                S = p + e,
                A = S + l,
                P = S - l,
                E = j(v - g),
                k = j(v + x);
              w.push({ x1: k, y1: A, x2: k, y2: P }),
                w.push({ x1: E, y1: S, x2: k, y2: S }),
                w.push({ x1: E, y1: A, x2: E, y2: P });
            } else if ("horizontal" === r) {
              var M = y.scale,
                T = s + e,
                _ = T - l,
                D = T + l,
                C = M(v - g),
                N = M(v + x);
              w.push({ x1: _, y1: N, x2: D, y2: N }),
                w.push({ x1: T, y1: C, x2: T, y2: N }),
                w.push({ x1: _, y1: C, x2: D, y2: C });
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
        return n.createElement(i.m, { className: "recharts-errorBars" }, b);
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
      r.d(e, { x: () => B });
      var n = r(89526),
        i = r(5722),
        o = r(39277),
        a = r.n(o),
        u = r(51391),
        c = r.n(u),
        l = r(47184),
        s = r.n(l),
        f = r(23060),
        p = r(47990),
        h = r(96963),
        d = r(61452),
        y = r(34324),
        v = r(65370),
        m = r(16171),
        b = r(9410),
        g = r(59509),
        x = r(37287),
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
      function P(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(r), !0).forEach(function (e) {
                N(t, e, r[e]);
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
      function E(t) {
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
          var r,
            n = C(t);
          if (e) {
            var i = C(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === O(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return D(t);
          })(this, r);
        };
      }
      function D(t) {
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
            e && T(t, e);
        })(l, t);
        var e,
          r,
          o,
          u = _(l);
        function l() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, l);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            N(D((t = u.call.apply(u, [this].concat(r)))), "state", {
              isAnimationFinished: !0,
              totalLength: 0,
            }),
            N(D(t), "generateSimpleStrokeDasharray", function (t, e) {
              return "".concat(e, "px ").concat(t - e, "px");
            }),
            N(D(t), "getStrokeDasharray", function (e, r, n) {
              var i = n.reduce(function (t, e) {
                return t + e;
              });
              if (!i) return t.generateSimpleStrokeDasharray(r, e);
              for (
                var o = Math.floor(e / i),
                  a = e % i,
                  u = r - e,
                  c = [],
                  s = 0,
                  f = 0;
                s < n.length;
                f += n[s], ++s
              )
                if (f + n[s] > a) {
                  c = [].concat(E(n.slice(0, s)), [a - f]);
                  break;
                }
              var p = c.length % 2 == 0 ? [0, u] : [u];
              return []
                .concat(E(l.repeat(n, o)), E(c), p)
                .map(function (t) {
                  return "".concat(t, "px");
                })
                .join(", ");
            }),
            N(D(t), "id", (0, m.EL)("recharts-line-")),
            N(D(t), "pathRef", function (e) {
              t.mainCurve = e;
            }),
            N(D(t), "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 }),
                t.props.onAnimationEnd && t.props.onAnimationEnd();
            }),
            N(D(t), "handleAnimationStart", function () {
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
                  var r = t.length % 2 != 0 ? [].concat(E(t), [0]) : t,
                    n = [],
                    i = 0;
                  i < e;
                  ++i
                )
                  n = [].concat(E(n), E(r));
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
                  var i = (0, f.Z)("recharts-line-dot", t ? t.className : "");
                  r = n.createElement(h.o, S({}, e, { className: i }));
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
                  i = r.points,
                  o = r.xAxis,
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
                  l.map(function (t, e) {
                    return n.cloneElement(t, {
                      key: "bar-".concat(e),
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
              value: function (t, e, r) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var i = this.props,
                  o = i.dot,
                  a = i.points,
                  u = i.dataKey,
                  c = (0, b.L6)(this.props),
                  s = (0, b.L6)(o, !0),
                  f = a.map(function (t, e) {
                    var r = P(
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
                    return l.renderDotItem(o, r);
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
              value: function (t, e, r, i) {
                var o = this.props,
                  a = o.type,
                  u = o.layout,
                  c = o.connectNulls,
                  l = (o.ref, j(o, w)),
                  s = P(
                    P(
                      P({}, (0, b.L6)(l, !0)),
                      {},
                      {
                        fill: "none",
                        className: "recharts-line-curve",
                        clipPath: e ? "url(#clipPath-".concat(r, ")") : null,
                        points: t,
                      },
                      i,
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
                  b = v.prevPoints,
                  g = v.totalLength;
                return n.createElement(
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
                  function (n) {
                    var i = n.t;
                    if (b) {
                      var o = b.length / a.length,
                        c = a.map(function (t, e) {
                          var r = Math.floor(e * o);
                          if (b[r]) {
                            var n = b[r],
                              a = (0, m.k4)(n.x, t.x),
                              u = (0, m.k4)(n.y, t.y);
                            return P(P({}, t), {}, { x: a(i), y: u(i) });
                          }
                          if (h) {
                            var c = (0, m.k4)(2 * d, t.x),
                              l = (0, m.k4)(y / 2, t.y);
                            return P(P({}, t), {}, { x: c(i), y: l(i) });
                          }
                          return P(P({}, t), {}, { x: t.x, y: t.y });
                        });
                      return r.renderCurveStatically(c, t, e);
                    }
                    var l,
                      s = (0, m.k4)(0, g)(i);
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
                  i = r.isAnimationActive,
                  o = this.state,
                  a = o.prevPoints,
                  u = o.totalLength;
                return i && n && n.length && ((!a && u > 0) || !s()(a, n))
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
                  g = e.id;
                if (r || !o || !o.length) return null;
                var x = this.state.isAnimationFinished,
                  w = 1 === o.length,
                  O = (0, f.Z)("recharts-line", a),
                  j = u && u.allowDataOverflow,
                  S = l && l.allowDataOverflow,
                  A = j || S,
                  P = c()(g) ? this.id : g,
                  E =
                    null !== (t = (0, b.L6)(i)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = E.r,
                  M = void 0 === k ? 3 : k,
                  T = E.strokeWidth,
                  _ = void 0 === T ? 2 : T,
                  D = ((0, b.$k)(i) ? i : {}).clipDot,
                  C = void 0 === D || D,
                  N = 2 * M + _;
                return n.createElement(
                  d.m,
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
                        !C &&
                          n.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(P) },
                            n.createElement("rect", {
                              x: p - N / 2,
                              y: s - N / 2,
                              width: h + N,
                              height: v + N,
                            }),
                          ),
                      )
                    : null,
                  !w && this.renderCurve(A, P),
                  this.renderErrorBar(A, P),
                  (w || i) && this.renderDots(A, C, P),
                  (!m || x) && y.e.renderCallByParent(this.props, o),
                );
              },
            },
          ]) && M(e.prototype, r),
          o && M(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          l
        );
      })(n.PureComponent);
      N(B, "displayName", "Line"),
        N(B, "defaultProps", {
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
        N(B, "getComposedData", function (t) {
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
          return P(
            {
              points: l.map(function (t, e) {
                var l = (0, x.F$)(t, a);
                return "horizontal" === f
                  ? {
                      x: (0, x.Hv)({
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
                      y: (0, x.Hv)({
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
      var n = r(89526),
        i = r(39277),
        o = r.n(i),
        a = r(60479),
        u = r.n(a),
        c = r(23060),
        l = r(61452),
        s = r(43774),
        f = r(94694),
        p = r(16171),
        h = r(87210),
        d = r(78706),
        y = r(9410);
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
            : o()(t)
            ? t(e)
            : n.createElement(
                "line",
                O({}, e, { className: "recharts-reference-line-line" }),
              );
        },
        S = function (t, e, r, n, i) {
          var o = i.viewBox,
            a = o.x,
            c = o.y,
            l = o.width,
            s = o.height,
            p = i.position;
          if (r) {
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
              b = i.xAxis.orientation,
              g = t.x.apply(m, { position: p });
            if ((0, f.B)(i, "discard") && !t.x.isInRange(g)) return null;
            var x = [
              { x: g, y: c + s },
              { x: g, y: c },
            ];
            return "top" === b ? x.reverse() : x;
          }
          if (n) {
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
      function A(t) {
        var e = t.x,
          r = t.y,
          i = t.segment,
          o = t.xAxis,
          a = t.yAxis,
          u = t.shape,
          v = t.className,
          m = t.alwaysShow,
          g = t.clipPathId;
        (0, d.Z)(
          void 0 === m,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var w = (0, h.Ky)({ x: o.scale, y: a.scale }),
          O = (0, p.P2)(e),
          A = (0, p.P2)(r),
          P = i && 2 === i.length,
          E = S(w, O, A, P, t);
        if (!E) return null;
        var k = x(E, 2),
          M = k[0],
          T = M.x,
          _ = M.y,
          D = k[1],
          C = D.x,
          N = D.y,
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
            { x1: T, y1: _, x2: C, y2: N },
          );
        return n.createElement(
          l.m,
          { className: (0, c.Z)("recharts-reference-line", v) },
          j(u, I),
          s._.renderCallByParent(t, (0, h._b)({ x1: T, y1: _, x2: C, y2: N })),
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
    97225: (t, e, r) => {
      "use strict";
      r.d(e, { c: () => ht });
      var n,
        i = r(92787),
        o = r(89526),
        a = r(23060),
        u = r(5722),
        c = r(39277),
        l = r.n(c),
        s = r(14019),
        f = r.n(s),
        p = r(51391),
        h = r.n(p),
        d = r(35813),
        y = r.n(d),
        v = r(47184),
        m = r.n(v),
        b = r(47990),
        g = r(96963),
        x = r(61452),
        w = r(34324),
        O = r(59509),
        j = r(16171),
        S = r(37287),
        A = r(9410),
        P = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"];
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
                L(t, e, r[e]);
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
      function D(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, R(n.key), n);
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
      function N(t) {
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
            if (e && ("object" === E(e) || "function" == typeof e)) return e;
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
            e && C(t, e);
        })(c, t);
        var e,
          r,
          n,
          i = N(c);
        function c() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, c);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            L(I((t = i.call.apply(i, [this].concat(r)))), "state", {
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
                  i = this.state.isAnimationFinished;
                if (n && !i) return null;
                var a = this.props,
                  u = a.dot,
                  l = a.points,
                  s = a.dataKey,
                  f = (0, A.L6)(this.props),
                  p = (0, A.L6)(u, !0),
                  h = l.map(function (t, e) {
                    var r = _(
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
                    return c.renderDotItem(u, r);
                  }),
                  d = {
                    clipPath: t
                      ? "url(#clipPath-".concat(e ? "" : "dots-").concat(r, ")")
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
                  r = e.baseLine,
                  n = e.points,
                  i = e.strokeWidth,
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
                  r = e.baseLine,
                  n = e.points,
                  i = e.strokeWidth,
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
              value: function (t, e, r, n) {
                var i = this.props,
                  a = i.layout,
                  u = i.type,
                  c = i.stroke,
                  l = i.connectNulls,
                  s = i.isRange,
                  f = (i.ref, k(i, P));
                return o.createElement(
                  x.m,
                  { clipPath: r ? "url(#clipPath-".concat(n, ")") : null },
                  o.createElement(
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
                    o.createElement(
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
                    o.createElement(
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
                  i = n.points,
                  a = n.baseLine,
                  c = n.isAnimationActive,
                  l = n.animationBegin,
                  s = n.animationDuration,
                  f = n.animationEasing,
                  p = n.animationId,
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
                  function (n) {
                    var u = n.t;
                    if (v) {
                      var c,
                        l = v.length / i.length,
                        s = i.map(function (t, e) {
                          var r = Math.floor(e * l);
                          if (v[r]) {
                            var n = v[r],
                              i = (0, j.k4)(n.x, t.x),
                              o = (0, j.k4)(n.y, t.y);
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
                                var r = Math.floor(e * l);
                                if (m[r]) {
                                  var n = m[r],
                                    i = (0, j.k4)(n.x, t.x),
                                    o = (0, j.k4)(n.y, t.y);
                                  return _(_({}, t), {}, { x: i(u), y: o(u) });
                                }
                                return t;
                              })),
                        r.renderAreaStatically(s, c, t, e)
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
                          r.renderClipRect(u),
                        ),
                      ),
                      o.createElement(
                        x.m,
                        { clipPath: "url(#animationClipPath-".concat(e, ")") },
                        r.renderAreaStatically(i, a, t, e),
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
                  i = r.baseLine,
                  o = r.isAnimationActive,
                  a = this.state,
                  u = a.prevPoints,
                  c = a.prevBaseLine,
                  l = a.totalLength;
                return o &&
                  n &&
                  n.length &&
                  ((!u && l > 0) || !m()(u, n) || !m()(c, i))
                  ? this.renderAreaWithAnimation(t, e)
                  : this.renderAreaStatically(n, i, t, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  r = e.hide,
                  n = e.dot,
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
                if (r || !i || !i.length) return null;
                var m = this.state.isAnimationFinished,
                  b = 1 === i.length,
                  g = (0, a.Z)("recharts-area", u),
                  O = s && s.allowDataOverflow,
                  j = f && f.allowDataOverflow,
                  S = O || j,
                  P = h()(v) ? this.id : v,
                  E =
                    null !== (t = (0, A.L6)(n)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = E.r,
                  M = void 0 === k ? 3 : k,
                  T = E.strokeWidth,
                  _ = void 0 === T ? 2 : T,
                  D = ((0, A.$k)(n) ? n : {}).clipDot,
                  C = void 0 === D || D,
                  N = 2 * M + _;
                return o.createElement(
                  x.m,
                  { className: g },
                  O || j
                    ? o.createElement(
                        "defs",
                        null,
                        o.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(P) },
                          o.createElement("rect", {
                            x: O ? l : l - p / 2,
                            y: j ? c : c - d / 2,
                            width: O ? p : 2 * p,
                            height: j ? d : 2 * d,
                          }),
                        ),
                        !C &&
                          o.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(P) },
                            o.createElement("rect", {
                              x: l - N / 2,
                              y: c - N / 2,
                              width: p + N,
                              height: d + N,
                            }),
                          ),
                      )
                    : null,
                  b ? null : this.renderArea(S, P),
                  (n || b) && this.renderDots(S, C, P),
                  (!y || m) && w.e.renderCallByParent(this.props, i),
                );
              },
            },
          ]) && D(e.prototype, r),
          n && D(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          c
        );
      })(o.PureComponent);
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
          var i = t.layout,
            o = t.baseValue,
            a = e.props.baseValue,
            u = null != a ? a : o;
          if ((0, j.hj)(u) && "number" == typeof u) return u;
          var c = "horizontal" === i ? n : r,
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
            y = r.layout,
            v = f && f.length,
            m = n.getBaseValue(r, i, o, a),
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
                      axis: o,
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
                    x: n ? null : o.scale(r[1]),
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
                      : { x: null != e ? o.scale(e) : null, y: t.y };
                  })
                : b
                ? a.scale(m)
                : o.scale(m)),
            _({ points: x, baseLine: e, layout: y, isRange: g }, d)
          );
        }),
        L(z, "renderDotItem", function (t, e) {
          return o.isValidElement(t)
            ? o.cloneElement(t, e)
            : l()(t)
            ? t(e)
            : o.createElement(
                g.o,
                M({}, e, { className: "recharts-area-dot" }),
              );
        });
      var $ = r(48218),
        F = r(52339),
        U = function () {
          return null;
        };
      (U.displayName = "ZAxis"),
        (U.defaultProps = {
          zAxisId: 0,
          range: [64, 64],
          scale: "auto",
          type: "number",
        });
      var W = r(65370),
        Z = r(32214),
        q = r(33790),
        H = r(16667),
        Y = r(5579),
        X = ["option", "isActive"];
      function V() {
        return (
          (V = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          V.apply(this, arguments)
        );
      }
      function G(t, e) {
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
      function K(t) {
        var e = t.option,
          r = t.isActive,
          n = G(t, X);
        return "string" == typeof e
          ? o.createElement(
              Y.bn,
              V(
                {
                  option: o.createElement(H.v, V({ type: e }, n)),
                  isActive: r,
                  shapeType: "symbols",
                },
                n,
              ),
            )
          : o.createElement(
              Y.bn,
              V({ option: e, isActive: r, shapeType: "symbols" }, n),
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
          var r,
            n = at(t);
          if (e) {
            var i = at(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === J(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return ot(t);
          })(this, r);
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
          i = it(c);
        function c() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, c);
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
            r[n] = arguments[n];
          return (
            ut(ot((t = i.call.apply(i, [this].concat(r)))), "state", {
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
                  i = r.activeShape,
                  a = r.activeIndex,
                  u = (0, A.L6)(this.props);
                return t.map(function (t, r) {
                  var c = a === r,
                    l = c ? i : n,
                    s = et(et({ key: "symbol-".concat(r) }, u), t);
                  return o.createElement(
                    x.m,
                    Q(
                      { className: "recharts-scatter-symbol" },
                      (0, q.bw)(e.props, t, r),
                      { key: "symbol-".concat(r), role: "img" },
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
                  r = e.points,
                  n = e.isAnimationActive,
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
                      i = r.map(function (t, e) {
                        var r = s && s[e];
                        if (r) {
                          var i = (0, j.k4)(r.cx, t.cx),
                            o = (0, j.k4)(r.cy, t.cy),
                            a = (0, j.k4)(r.size, t.size);
                          return et(
                            et({}, t),
                            {},
                            { cx: i(n), cy: o(n), size: a(n) },
                          );
                        }
                        var u = (0, j.k4)(0, t.size);
                        return et(et({}, t), {}, { size: u(n) });
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
                  i = t.children,
                  a = (0, A.NN)(i, W.W);
                return a
                  ? a.map(function (t, i) {
                      var a = t.props.direction;
                      return o.cloneElement(t, {
                        key: i,
                        data: e,
                        xAxis: r,
                        yAxis: n,
                        layout: "x" === a ? "vertical" : "horizontal",
                        dataPointFormatter: function (t, e) {
                          return {
                            x: t.cx,
                            y: t.cy,
                            value: "x" === a ? +t.node.x : +t.node.y,
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
                  i = r.line,
                  a = r.lineType,
                  u = r.lineJointType,
                  c = (0, A.L6)(this.props),
                  s = (0, A.L6)(i);
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
                  (e = o.isValidElement(i)
                    ? o.cloneElement(i, m)
                    : l()(i)
                    ? i(m)
                    : o.createElement(b.H, Q({}, m, { type: u }))),
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
                  r = t.points,
                  n = t.line,
                  i = t.className,
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
                  m = (0, a.Z)("recharts-scatter", i),
                  b = u && u.allowDataOverflow,
                  g = c && c.allowDataOverflow,
                  O = b || g,
                  j = h()(d) ? this.id : d;
                return o.createElement(
                  x.m,
                  {
                    className: m,
                    clipPath: O ? "url(#clipPath-".concat(j, ")") : null,
                  },
                  b || g
                    ? o.createElement(
                        "defs",
                        null,
                        o.createElement(
                          "clipPath",
                          { id: "clipPath-".concat(j) },
                          o.createElement("rect", {
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
                  o.createElement(
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
            r = t.yAxis,
            n = t.zAxis,
            i = t.item,
            o = t.displayedData,
            a = t.xAxisTicks,
            u = t.yAxisTicks,
            c = t.offset,
            l = i.props.tooltipType,
            s = (0, A.NN)(i.props.children, Z.b),
            f = h()(e.dataKey) ? i.props.dataKey : e.dataKey,
            p = h()(r.dataKey) ? i.props.dataKey : r.dataKey,
            d = n && n.dataKey,
            y = n ? n.range : U.defaultProps.range,
            v = y && y[0],
            m = e.scale.bandwidth ? e.scale.bandwidth() : 0,
            b = r.scale.bandwidth ? r.scale.bandwidth() : 0,
            g = o.map(function (t, o) {
              var c = (0, S.F$)(t, f),
                y = (0, S.F$)(t, p),
                g = (!h()(d) && (0, S.F$)(t, d)) || "-",
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
                    name: h()(r.dataKey) ? i.props.name : r.name || r.dataKey,
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
                  index: o,
                  dataKey: f,
                }),
                O = (0, S.Hv)({
                  axis: r,
                  ticks: u,
                  bandSize: b,
                  entry: t,
                  index: o,
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
                s && s[o] && s[o].props,
              );
            });
          return et({ points: g }, c);
        });
      var st = r(23007),
        ft = r(58104),
        pt = r(87210),
        ht = (0, i.z)({
          chartName: "ComposedChart",
          GraphicalChild: [F.x, z, $.$, lt],
          axisComponents: [
            { axisType: "xAxis", AxisComp: st.K },
            { axisType: "yAxis", AxisComp: ft.B },
            { axisType: "zAxis", AxisComp: U },
          ],
          formatAxisMap: pt.t9,
        });
    },
    92787: (t, e, r) => {
      "use strict";
      r.d(e, { z: () => Fe });
      var n = r(89526),
        i = r(51391),
        o = r.n(i),
        a = r(39277),
        u = r.n(a),
        c = r(58120),
        l = r.n(c),
        s = r(80089),
        f = r.n(s),
        p = r(65853),
        h = r.n(p),
        d = r(38172),
        y = r.n(d),
        v = r(92210),
        m = r.n(v),
        b = r(70826),
        g = r.n(b),
        x = r(23060),
        w = r(78109),
        O = r(80072);
      function j(t) {
        var e = t.cx,
          r = t.cy,
          n = t.radius,
          i = t.startAngle,
          o = t.endAngle;
        return {
          points: [(0, O.op)(e, r, n, i), (0, O.op)(e, r, n, o)],
          cx: e,
          cy: r,
          radius: n,
          startAngle: i,
          endAngle: o,
        };
      }
      var S = r(16171),
        A = r(99875),
        P = r(59509),
        E = r(87210);
      function k(t, e, r) {
        if (e < 1) return [];
        if (1 === e && void 0 === r) return t;
        for (var n = [], i = 0; i < t.length; i += e) {
          if (void 0 !== r && !0 !== r(t[i])) return;
          n.push(t[i]);
        }
        return n;
      }
      function M(t, e, r, n, i) {
        if (t * e < t * n || t * e > t * i) return !1;
        var o = r();
        return t * (e - (t * o) / 2 - n) >= 0 && t * (e + (t * o) / 2 - i) <= 0;
      }
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
            ? _(Object(r), !0).forEach(function (e) {
                C(t, e, r[e]);
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
      function C(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== T(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== T(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === T(e) ? e : String(e);
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
      function N(t, e, r) {
        var n = t.tick,
          i = t.ticks,
          o = t.viewBox,
          a = t.minTickGap,
          c = t.orientation,
          l = t.interval,
          s = t.tickFormatter,
          f = t.unit,
          p = t.angle;
        if (!i || !i.length || !n) return [];
        if ((0, S.hj)(l) || P.x.isSsr)
          return (function (t, e) {
            return k(t, e + 1);
          })(i, "number" == typeof l && (0, S.hj)(l) ? l : 0);
        var h = [],
          d = "top" === c || "bottom" === c ? "width" : "height",
          y =
            f && "width" === d
              ? (0, A.xE)(f, { fontSize: e, letterSpacing: r })
              : { width: 0, height: 0 },
          v = function (t, n) {
            var i = u()(s) ? s(t.value, n) : t.value;
            return "width" === d
              ? (function (t, e, r) {
                  var n = {
                    width: t.width + e.width,
                    height: t.height + e.height,
                  };
                  return (0, E.xE)(n, r);
                })((0, A.xE)(i, { fontSize: e, letterSpacing: r }), y, p)
              : (0, A.xE)(i, { fontSize: e, letterSpacing: r })[d];
          },
          m = i.length >= 2 ? (0, S.uY)(i[1].coordinate - i[0].coordinate) : 1,
          b = (function (t, e, r) {
            var n = "width" === r,
              i = t.x,
              o = t.y,
              a = t.width,
              u = t.height;
            return 1 === e
              ? { start: n ? i : o, end: n ? i + a : o + u }
              : { start: n ? i + a : o + u, end: n ? i : o };
          })(o, m, d);
        return "equidistantPreserveStart" === l
          ? (function (t, e, r, n, i) {
              for (
                var o,
                  a = (n || []).slice(),
                  u = e.start,
                  c = e.end,
                  l = 0,
                  s = 1,
                  f = u,
                  p = function () {
                    var e = null == n ? void 0 : n[l];
                    if (void 0 === e) return { v: k(n, s) };
                    var o,
                      a = l,
                      p = function () {
                        return void 0 === o && (o = r(e, a)), o;
                      },
                      h = e.coordinate,
                      d = 0 === l || M(t, h, p, f, c);
                    d || ((l = 0), (f = u), (s += 1)),
                      d && ((f = h + t * (p() / 2 + i)), (l += s));
                  };
                s <= a.length;

              )
                if ((o = p())) return o.v;
              return [];
            })(m, b, v, i, a)
          : ((h =
              "preserveStart" === l || "preserveStartEnd" === l
                ? (function (t, e, r, n, i, o) {
                    var a = (n || []).slice(),
                      u = a.length,
                      c = e.start,
                      l = e.end;
                    if (o) {
                      var s = n[u - 1],
                        f = r(s, u - 1),
                        p = t * (s.coordinate + (t * f) / 2 - l);
                      (a[u - 1] = s =
                        D(
                          D({}, s),
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
                          ((l = s.tickCoord - t * (f / 2 + i)),
                          (a[u - 1] = D(D({}, s), {}, { isShow: !0 })));
                    }
                    for (
                      var h = o ? u - 1 : u,
                        d = function (e) {
                          var n,
                            o = a[e],
                            u = function () {
                              return void 0 === n && (n = r(o, e)), n;
                            };
                          if (0 === e) {
                            var s = t * (o.coordinate - (t * u()) / 2 - c);
                            a[e] = o = D(
                              D({}, o),
                              {},
                              {
                                tickCoord:
                                  s < 0 ? o.coordinate - s * t : o.coordinate,
                              },
                            );
                          } else
                            a[e] = o = D(
                              D({}, o),
                              {},
                              { tickCoord: o.coordinate },
                            );
                          M(t, o.tickCoord, u, c, l) &&
                            ((c = o.tickCoord + t * (u() / 2 + i)),
                            (a[e] = D(D({}, o), {}, { isShow: !0 })));
                        },
                        y = 0;
                      y < h;
                      y++
                    )
                      d(y);
                    return a;
                  })(m, b, v, i, a, "preserveStartEnd" === l)
                : (function (t, e, r, n, i) {
                    for (
                      var o = (n || []).slice(),
                        a = o.length,
                        u = e.start,
                        c = e.end,
                        l = function (e) {
                          var n,
                            l = o[e],
                            s = function () {
                              return void 0 === n && (n = r(l, e)), n;
                            };
                          if (e === a - 1) {
                            var f = t * (l.coordinate + (t * s()) / 2 - c);
                            o[e] = l = D(
                              D({}, l),
                              {},
                              {
                                tickCoord:
                                  f > 0 ? l.coordinate - f * t : l.coordinate,
                              },
                            );
                          } else
                            o[e] = l = D(
                              D({}, l),
                              {},
                              { tickCoord: l.coordinate },
                            );
                          M(t, l.tickCoord, s, u, c) &&
                            ((c = l.tickCoord - t * (s() / 2 + i)),
                            (o[e] = D(D({}, l), {}, { isShow: !0 })));
                        },
                        s = a - 1;
                      s >= 0;
                      s--
                    )
                      l(s);
                    return o;
                  })(m, b, v, i, a)),
            h.filter(function (t) {
              return t.isShow;
            }));
      }
      var I = r(93386),
        B = r(61452),
        L = r(68537),
        R = r(98241),
        z = r(47990),
        $ = r(9410);
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
      var U = ["x", "y", "top", "left", "width", "height", "className"];
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
      function H(t, e) {
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
      var Y = function (t, e, r, n, i, o) {
          return "M"
            .concat(t, ",")
            .concat(i, "v")
            .concat(n, "M")
            .concat(o, ",")
            .concat(e, "h")
            .concat(r);
        },
        X = function (t) {
          var e = t.x,
            r = void 0 === e ? 0 : e,
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
            })({ x: r, y: o, top: u, left: l, width: f, height: h }, H(t, U));
          return (0, S.hj)(r) &&
            (0, S.hj)(o) &&
            (0, S.hj)(f) &&
            (0, S.hj)(h) &&
            (0, S.hj)(u) &&
            (0, S.hj)(l)
            ? n.createElement(
                "path",
                W({}, (0, $.L6)(y, !0), {
                  className: (0, x.Z)("recharts-cross", d),
                  d: Y(r, o, f, h, u, l),
                }),
              )
            : null;
        },
        V = r(61001),
        G = r(96963),
        K = r(33951),
        J = r(68201),
        Q = r(49266),
        tt = r(43774),
        et = r(33790),
        rt = ["viewBox"],
        nt = ["viewBox"],
        it = ["ticks"];
      function ot(t) {
        return (
          (ot =
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
          ot(t)
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
            var i = ht(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === ot(e) || "function" == typeof e)) return e;
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
          if ("object" !== ot(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== ot(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === ot(e) ? e : String(e);
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
          i,
          o = pt(a);
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
                  i = this.props,
                  o = i.viewBox,
                  a = lt(i, nt);
                return (
                  !(0, J.w)(r, o) || !(0, J.w)(n, a) || !(0, J.w)(e, this.state)
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
                  b = (0, S.hj)(t.tickCoord) ? t.tickCoord : t.coordinate;
                switch (p) {
                  case "top":
                    (e = r = t.coordinate),
                      (a = (n = (i = l + +!d * f) - v * m) - v * y),
                      (o = b);
                    break;
                  case "left":
                    (n = i = t.coordinate),
                      (o = (e = (r = c + +!d * s) - v * m) - v * y),
                      (a = b);
                    break;
                  case "right":
                    (n = i = t.coordinate),
                      (o = (e = (r = c + +d * s) + v * m) + v * y),
                      (a = b);
                    break;
                  default:
                    (e = r = t.coordinate),
                      (a = (n = (i = l + +d * f) + v * m) + v * y),
                      (o = b);
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
                  i = t.width,
                  o = t.height,
                  a = t.orientation,
                  u = t.mirror,
                  c = t.axisLine,
                  l = ct(
                    ct(ct({}, (0, $.L6)(this.props)), (0, $.L6)(c)),
                    {},
                    { fill: "none" },
                  );
                if ("top" === a || "bottom" === a) {
                  var s = +(("top" === a && !u) || ("bottom" === a && u));
                  l = ct(
                    ct({}, l),
                    {},
                    { x1: e, y1: r + s * o, x2: e + i, y2: r + s * o },
                  );
                } else {
                  var p = +(("left" === a && !u) || ("right" === a && u));
                  l = ct(
                    ct({}, l),
                    {},
                    { x1: e + p * i, y1: r, x2: e + p * i, y2: r + o },
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
                var i = this,
                  o = this.props,
                  c = o.tickLine,
                  l = o.stroke,
                  s = o.tick,
                  p = o.tickFormatter,
                  h = o.unit,
                  d = N(ct(ct({}, this.props), {}, { ticks: t }), e, r),
                  y = this.getTickTextAnchor(),
                  v = this.getTickVerticalAnchor(),
                  m = (0, $.L6)(this.props),
                  b = (0, $.L6)(s),
                  g = ct(ct({}, m), {}, { fill: "none" }, (0, $.L6)(c)),
                  w = d.map(function (t, e) {
                    var r = i.getTickLineCoord(t),
                      o = r.line,
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
                          key: "tick-".concat(e),
                        },
                        (0, et.bw)(i.props, t, e),
                      ),
                      c &&
                        n.createElement(
                          "line",
                          at({}, g, o, {
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
                  i = e.width,
                  o = e.height,
                  a = e.ticksGenerator,
                  c = e.className;
                if (e.hide) return null;
                var l = this.props,
                  s = l.ticks,
                  f = lt(l, it),
                  p = s;
                return (
                  u()(a) && (p = s && s.length > 0 ? a(this.props) : a(f)),
                  i <= 0 || o <= 0 || !p || !p.length
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
          i && st(e, i),
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
      var mt = r(2514),
        bt = r(37287);
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
      function Pt(t, e) {
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
      function Et(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Pt(Object(r), !0).forEach(function (e) {
                Ct(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Pt(Object(r)).forEach(function (e) {
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
            Object.defineProperty(t, Nt(n.key), n);
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
      function Tt(t) {
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
            n = Dt(t);
          if (e) {
            var i = Dt(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === St(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return _t(t);
          })(this, r);
        };
      }
      function _t(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function Dt(t) {
        return (
          (Dt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Dt(t)
        );
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
      function Nt(t) {
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
            i,
            o = Tt(a);
          function a(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              Ct(_t((e = o.call(this, t))), "handleDrag", function (t) {
                e.leaveTimer &&
                  (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
                  e.state.isTravellerMoving
                    ? e.handleTravellerMove(t)
                    : e.state.isSlideMoving && e.handleSlideDrag(t);
              }),
              Ct(_t(e), "handleTouchMove", function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  e.handleDrag(t.changedTouches[0]);
              }),
              Ct(_t(e), "handleDragEnd", function () {
                e.setState(
                  { isTravellerMoving: !1, isSlideMoving: !1 },
                  function () {
                    var t = e.props,
                      r = t.endIndex,
                      n = t.onDragEnd,
                      i = t.startIndex;
                    null == n || n({ endIndex: r, startIndex: i });
                  },
                ),
                  e.detachDragEndListener();
              }),
              Ct(_t(e), "handleLeaveWrapper", function () {
                (e.state.isTravellerMoving || e.state.isSlideMoving) &&
                  (e.leaveTimer = window.setTimeout(
                    e.handleDragEnd,
                    e.props.leaveTimeOut,
                  ));
              }),
              Ct(_t(e), "handleEnterSlideOrTraveller", function () {
                e.setState({ isTextActive: !0 });
              }),
              Ct(_t(e), "handleLeaveSlideOrTraveller", function () {
                e.setState({ isTextActive: !1 });
              }),
              Ct(_t(e), "handleSlideDragStart", function (t) {
                var r = It(t) ? t.changedTouches[0] : t;
                e.setState({
                  isTravellerMoving: !1,
                  isSlideMoving: !0,
                  slideMoveStartX: r.pageX,
                }),
                  e.attachDragEndListener();
              }),
              (e.travellerDragStartHandlers = {
                startX: e.handleTravellerDragStart.bind(_t(e), "startX"),
                endX: e.handleTravellerDragStart.bind(_t(e), "endX"),
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
                    r = t.y,
                    i = t.width,
                    o = t.height,
                    a = t.stroke,
                    u = Math.floor(r + o / 2) - 1;
                  return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement("rect", {
                      x: e,
                      y: r,
                      width: i,
                      height: o,
                      fill: a,
                      stroke: "none",
                    }),
                    n.createElement("line", {
                      x1: e + 1,
                      y1: u,
                      x2: e + i - 1,
                      y2: u,
                      fill: "none",
                      stroke: "#fff",
                    }),
                    n.createElement("line", {
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
                    i = t.x,
                    o = t.travellerWidth,
                    a = t.updateId,
                    u = t.startIndex,
                    c = t.endIndex;
                  if (r !== e.prevData || a !== e.prevUpdateId)
                    return Et(
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
                              c = (0, mt.x)()
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
                              startX: c(r),
                              endX: c(n),
                              scale: c,
                              scaleValues: s,
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
                    var s = e.scale.domain().map(function (t) {
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
                    var i = Math.floor((r + n) / 2);
                    t[i] > e ? (n = i) : (r = i);
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
                    i = this.props,
                    o = i.gap,
                    u = i.data.length - 1,
                    c = Math.min(e, r),
                    l = Math.max(e, r),
                    s = a.getIndexInRange(n, c),
                    f = a.getIndexInRange(n, l);
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
                    r = e.data,
                    n = e.tickFormatter,
                    i = e.dataKey,
                    o = (0, bt.F$)(r[t], i, t);
                  return u()(n) ? n(o, t) : o;
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
                    b = m.startIndex,
                    g = m.endIndex;
                  this.setState(
                    (Ct((e = {}), i, u + v),
                    Ct(e, "brushMoveStartX", t.pageX),
                    e),
                    function () {
                      var t;
                      p &&
                        ((t = d.length - 1),
                        (("startX" === i &&
                          (o > a ? b % h == 0 : g % h == 0)) ||
                          (o < a && g === t) ||
                          ("endX" === i && (o > a ? g % h == 0 : b % h == 0)) ||
                          (o > a && g === t)) &&
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
                    i = n.scaleValues,
                    o = n.startX,
                    a = n.endX,
                    u = this.state[e],
                    c = i.indexOf(u);
                  if (-1 !== c) {
                    var l = c + t;
                    if (!(-1 === l || l >= i.length)) {
                      var s = i[l];
                      ("startX" === e && s >= a) ||
                        ("endX" === e && s <= o) ||
                        this.setState(Ct({}, e, s), function () {
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
                    i = t.width,
                    o = t.height,
                    a = t.fill,
                    u = t.stroke;
                  return n.createElement("rect", {
                    stroke: u,
                    fill: a,
                    x: e,
                    y: r,
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
                    r = t.y,
                    i = t.width,
                    o = t.height,
                    a = t.data,
                    u = t.children,
                    c = t.padding,
                    l = n.Children.only(u);
                  return l
                    ? n.cloneElement(l, {
                        x: e,
                        y: r,
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
                  var r = this,
                    i = this.props,
                    o = i.y,
                    u = i.travellerWidth,
                    c = i.height,
                    l = i.traveller,
                    s = Math.max(t, this.props.x),
                    f = Et(
                      Et({}, (0, $.L6)(this.props)),
                      {},
                      { x: s, y: o, width: u, height: c },
                    );
                  return n.createElement(
                    B.m,
                    {
                      tabIndex: 0,
                      role: "slider",
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
                    a.renderTraveller(l, f),
                  );
                },
              },
              {
                key: "renderSlide",
                value: function (t, e) {
                  var r = this.props,
                    i = r.y,
                    o = r.height,
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
                    r = t.endIndex,
                    i = t.y,
                    o = t.height,
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
                          y: i + o / 2,
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
                          y: i + o / 2,
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
                    !(0, S.hj)(o) ||
                    !(0, S.hj)(a) ||
                    !(0, S.hj)(u) ||
                    !(0, S.hj)(c) ||
                    u <= 0 ||
                    c <= 0
                  )
                    return null;
                  var m = (0, x.Z)("recharts-brush", r),
                    b = 1 === n.Children.count(i),
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
            i && kt(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(n.PureComponent);
      Ct(Bt, "displayName", "Brush"),
        Ct(Bt, "defaultProps", {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: "#fff",
          stroke: "#666",
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1,
        });
      var Lt = r(65436),
        Rt = r(94694),
        zt = r(78706);
      function $t(t) {
        return (
          ($t =
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
          $t(t)
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
      function Ut(t, e) {
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
            ? Ut(Object(r), !0).forEach(function (e) {
                Zt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Ut(Object(r)).forEach(function (e) {
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
              if ("object" !== $t(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== $t(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === $t(e) ? e : String(e);
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
          i = t.r,
          o = t.alwaysShow,
          a = t.clipPathId,
          u = (0, S.P2)(e),
          c = (0, S.P2)(r);
        if (
          ((0, zt.Z)(
            void 0 === o,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
          ),
          !u || !c)
        )
          return null;
        var l = (function (t) {
          var e = t.x,
            r = t.y,
            n = t.xAxis,
            i = t.yAxis,
            o = (0, E.Ky)({ x: n.scale, y: i.scale }),
            a = o.apply({ x: e, y: r }, { bandAware: !0 });
          return (0, Rt.B)(t, "discard") && !o.isInRange(a) ? null : a;
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
              (0, $.L6)(t, !0),
            ),
            {},
            { cx: s, cy: f },
          );
        return n.createElement(
          B.m,
          { className: (0, x.Z)("recharts-reference-dot", h) },
          qt.renderDot(p, d),
          tt._.renderCallByParent(t, {
            x: s - i,
            y: f - i,
            width: 2 * i,
            height: 2 * i,
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
                G.o,
                Ft({}, e, {
                  cx: e.cx,
                  cy: e.cy,
                  className: "recharts-reference-dot-dot",
                }),
              );
        });
      var Ht = r(48586);
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
      function Xt() {
        return (
          (Xt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          Xt.apply(this, arguments)
        );
      }
      function Vt(t, e) {
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
      function Gt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Vt(Object(r), !0).forEach(function (e) {
                Kt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Vt(Object(r)).forEach(function (e) {
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
              if ("object" !== Yt(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== Yt(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === Yt(e) ? e : String(e);
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
          i = t.y1,
          o = t.y2,
          a = t.className,
          u = t.alwaysShow,
          c = t.clipPathId;
        (0, zt.Z)(
          void 0 === u,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var l = (0, S.P2)(e),
          s = (0, S.P2)(r),
          f = (0, S.P2)(i),
          p = (0, S.P2)(o),
          h = t.shape;
        if (!(l || s || f || p || h)) return null;
        var d = (function (t, e, r, n, i) {
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
              y: r ? f.y.apply(u, { position: "start" }) : f.y.rangeMin,
            },
            h = {
              x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
              y: n ? f.y.apply(c, { position: "end" }) : f.y.rangeMax,
            };
          return !(0, Rt.B)(i, "discard") || (f.isInRange(p) && f.isInRange(h))
            ? (0, E.O1)(p, h)
            : null;
        })(l, s, f, p, t);
        if (!d && !h) return null;
        var y = (0, Rt.B)(t, "hidden") ? "url(#".concat(c, ")") : void 0;
        return n.createElement(
          B.m,
          { className: (0, x.Z)("recharts-reference-area", a) },
          Jt.renderRect(h, Gt(Gt({ clipPath: y }, (0, $.L6)(t, !0)), d)),
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
                Xt({}, e, { className: "recharts-reference-area-rect" }),
              );
        });
      var ee = function (t, e, r, n, i) {
          var o = (0, $.NN)(t, Ht.d),
            a = (0, $.NN)(t, qt),
            u = [].concat(Qt(o), Qt(a)),
            c = (0, $.NN)(t, Jt),
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
                return (0, S.hj)(e)
                  ? [Math.min(t[0], e), Math.max(t[1], e)]
                  : t;
              }, f)),
            f
          );
        },
        re = r(33034),
        ne = new (r.n(re)())(),
        ie = "recharts.syncMouseEvents";
      function oe(t) {
        return (
          (oe =
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
          oe(t)
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
          if ("object" !== oe(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== oe(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === oe(e) ? e : String(e);
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
                  i = void 0 === n ? null : n,
                  o = t.layout,
                  a = void 0 === o ? null : o,
                  u = t.offset,
                  c = void 0 === u ? null : u,
                  l = t.mouseHandlerCallback,
                  s = void 0 === l ? null : l;
                (this.coordinateList = null != r ? r : this.coordinateList),
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
                  var r = this.container.getBoundingClientRect(),
                    n = r.x,
                    i = r.y,
                    o = r.height,
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
                    s = i + this.offset.top + o / 2 + c;
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
      var se = r(5579);
      function fe(t, e, r) {
        var n, i, o, a;
        if ("horizontal" === t)
          (o = n = e.x), (i = r.top), (a = r.top + r.height);
        else if ("vertical" === t)
          (a = i = e.y), (n = r.left), (o = r.left + r.width);
        else if (null != e.cx && null != e.cy) {
          if ("centric" !== t) return j(e);
          var u = e.cx,
            c = e.cy,
            l = e.innerRadius,
            s = e.outerRadius,
            f = e.angle,
            p = (0, O.op)(u, c, l, f),
            h = (0, O.op)(u, c, s, f);
          (n = p.x), (i = p.y), (o = h.x), (a = h.y);
        }
        return [
          { x: n, y: i },
          { x: o, y: a },
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
            var i = Oe(this).constructor;
            r = Reflect.construct(n, arguments, i);
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
      function Pe(t, e) {
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
            ? Pe(Object(r), !0).forEach(function (e) {
                ke(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Pe(Object(r)).forEach(function (e) {
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
      var Te = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
        _e = { width: "100%", height: "100%" },
        De = { x: 0, y: 0 },
        Ce = function (t, e) {
          var r = e.graphicalItems,
            n = e.dataStartIndex,
            i = e.dataEndIndex,
            o = (null != r ? r : []).reduce(function (t, e) {
              var r = e.props.data;
              return r && r.length ? [].concat(je(t), je(r)) : t;
            }, []);
          return o.length > 0
            ? o
            : t && t.length && (0, S.hj)(n) && (0, S.hj)(i)
            ? t.slice(n, i + 1)
            : [];
        };
      function Ne(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var Ie = function (t, e, r, n) {
          var i = t.graphicalItems,
            o = t.tooltipAxis,
            a = Ce(e, t);
          return r < 0 || !i || !i.length || r >= a.length
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
                  l = (0, S.Ap)(f, o.dataKey, n);
                } else l = (s && s[r]) || a[r];
                return l ? [].concat(je(i), [(0, bt.Qo)(u, l)]) : i;
              }, []);
        },
        Be = function (t, e, r, n) {
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
            l = (0, bt.VO)(o, a, c, u);
          if (l >= 0 && c) {
            var s = c[l] && c[l].value,
              f = Ie(t, e, l, s),
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
                      Ee(Ee({}, n), (0, O.op)(n.cx, n.cy, a, o)),
                      {},
                      { angle: o, radius: a },
                    );
                  }
                  var u = i.coordinate,
                    c = n.angle;
                  return Ee(
                    Ee(Ee({}, n), (0, O.op)(n.cx, n.cy, u, c)),
                    {},
                    { angle: c, radius: u },
                  );
                }
                return De;
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
        Le = function (t, e) {
          var r = e.axes,
            n = e.graphicalItems,
            i = e.axisType,
            a = e.axisIdKey,
            u = e.stackGroups,
            c = e.dataStartIndex,
            s = e.dataEndIndex,
            f = t.layout,
            p = t.children,
            h = t.stackOffset,
            d = (0, bt.NA)(f, i);
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
            var P,
              E,
              k,
              M = Ce(t.data, {
                graphicalItems: n.filter(function (t) {
                  return t.props[a] === A;
                }),
                dataStartIndex: c,
                dataEndIndex: s,
              }),
              T = M.length;
            (function (t, e, r) {
              if ("number" === r && !0 === e && Array.isArray(t)) {
                var n = null == t ? void 0 : t[0],
                  i = null == t ? void 0 : t[1];
                if (n && i && (0, S.hj)(n) && (0, S.hj)(i)) return !0;
              }
              return !1;
            })(r.props.domain, g, m) &&
              ((P = (0, bt.LG)(r.props.domain, null, g)),
              !d ||
                ("number" !== m && "auto" === w) ||
                (k = (0, bt.gF)(M, b, "category")));
            var _ = Ne(m);
            if (!P || 0 === P.length) {
              var D,
                C = null !== (D = r.props.domain) && void 0 !== D ? D : _;
              if (b) {
                if (((P = (0, bt.gF)(M, b, m)), "category" === m && d)) {
                  var N = (0, S.bv)(P);
                  x && N
                    ? ((E = P), (P = l()(0, T)))
                    : x ||
                      (P = (0, bt.ko)(C, P, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(je(t), [e]);
                      }, []));
                } else if ("category" === m)
                  P = x
                    ? P.filter(function (t) {
                        return "" !== t && !o()(t);
                      })
                    : (0, bt.ko)(C, P, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || "" === e || o()(e)
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
                    i,
                    f,
                  );
                  I && (P = I);
                }
                !d ||
                  ("number" !== m && "auto" === w) ||
                  (k = (0, bt.gF)(M, b, "category"));
              } else
                P = d
                  ? l()(0, T)
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
                (P = ee(p, P, A, i, O)), C && (P = (0, bt.LG)(C, P, g));
              else if ("category" === m && C) {
                var B = C;
                P.every(function (t) {
                  return B.indexOf(t) >= 0;
                }) && (P = B);
              }
            }
            return Ee(
              Ee({}, e),
              {},
              ke(
                {},
                A,
                Ee(
                  Ee({}, r.props),
                  {},
                  {
                    axisType: i,
                    domain: P,
                    categoricalDomain: k,
                    duplicateDomain: E,
                    originalDomain:
                      null !== (y = r.props.domain) && void 0 !== y ? y : _,
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
            i = e.AxisComp,
            o = e.graphicalItems,
            a = e.stackGroups,
            u = e.dataStartIndex,
            c = e.dataEndIndex,
            s = t.children,
            p = "".concat(n, "Id"),
            h = (0, $.NN)(s, i),
            d = {};
          return (
            h && h.length
              ? (d = Le(t, {
                  axes: h,
                  graphicalItems: o,
                  axisType: n,
                  axisIdKey: p,
                  stackGroups: a,
                  dataStartIndex: u,
                  dataEndIndex: c,
                }))
              : o &&
                o.length &&
                (d = (function (t, e) {
                  var r = e.graphicalItems,
                    n = e.Axis,
                    i = e.axisType,
                    o = e.axisIdKey,
                    a = e.stackGroups,
                    u = e.dataStartIndex,
                    c = e.dataEndIndex,
                    s = t.layout,
                    p = t.children,
                    h = Ce(t.data, {
                      graphicalItems: r,
                      dataStartIndex: u,
                      dataEndIndex: c,
                    }),
                    d = h.length,
                    y = (0, bt.NA)(s, i),
                    v = -1;
                  return r.reduce(function (t, e) {
                    var m,
                      b = e.props[o],
                      g = Ne("number");
                    return t[b]
                      ? t
                      : (v++,
                        y
                          ? (m = l()(0, d))
                          : a && a[b] && a[b].hasStack
                          ? ((m = (0, bt.EB)(a[b].stackGroups, u, c)),
                            (m = ee(p, m, b, i)))
                          : ((m = (0, bt.LG)(
                              g,
                              (0, bt.s6)(
                                h,
                                r.filter(function (t) {
                                  return t.props[o] === b && !t.props.hide;
                                }),
                                "number",
                                s,
                              ),
                              n.defaultProps.allowDataOverflow,
                            )),
                            (m = ee(p, m, b, i))),
                        Ee(
                          Ee({}, t),
                          {},
                          ke(
                            {},
                            b,
                            Ee(
                              Ee({ axisType: i }, n.defaultProps),
                              {},
                              {
                                hide: !0,
                                orientation: f()(
                                  Te,
                                  "".concat(i, ".").concat(v % 2),
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
                  Axis: i,
                  graphicalItems: o,
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
          var e,
            r,
            n = t.children,
            i = t.defaultShowTooltip,
            o = (0, $.sP)(n, Bt);
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
            isTooltipActive: Boolean(i),
          };
        },
        $e = function (t) {
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
            i = t.GraphicalChild,
            a = t.defaultTooltipEventType,
            c = void 0 === a ? "axis" : a,
            l = t.validateTooltipEventTypes,
            s = void 0 === l ? ["axis"] : l,
            p = t.axisComponents,
            d = t.legendContent,
            v = t.formatAxisMap,
            b = t.defaultProps,
            P = function (t, e) {
              var r = e.graphicalItems,
                n = e.stackGroups,
                i = e.offset,
                a = e.updateId,
                u = e.dataStartIndex,
                c = e.dataEndIndex,
                l = t.barSize,
                s = t.layout,
                f = t.barGap,
                h = t.barCategoryGap,
                d = t.maxBarSize,
                y = $e(s),
                v = y.numericAxisName,
                m = y.cateAxisName,
                b = (function (t) {
                  return (
                    !(!t || !t.length) &&
                    t.some(function (t) {
                      var e = (0, $.Gf)(t && t.type);
                      return e && e.indexOf("Bar") >= 0;
                    })
                  );
                })(r),
                g = b && (0, bt.pt)({ barSize: l, stackGroups: n }),
                x = [];
              return (
                r.forEach(function (r, l) {
                  var y = Ce(t.data, {
                      graphicalItems: [r],
                      dataStartIndex: u,
                      dataEndIndex: c,
                    }),
                    b = r.props,
                    O = b.dataKey,
                    j = b.maxBarSize,
                    S = r.props["".concat(v, "Id")],
                    A = r.props["".concat(m, "Id")],
                    P = p.reduce(function (t, n) {
                      var i,
                        o = e["".concat(n.axisType, "Map")],
                        a = r.props["".concat(n.axisType, "Id")];
                      (o && o[a]) || "zAxis" === n.axisType || (0, w.Z)(!1);
                      var u = o[a];
                      return Ee(
                        Ee({}, t),
                        {},
                        (ke((i = {}), n.axisType, u),
                        ke(i, "".concat(n.axisType, "Ticks"), (0, bt.uY)(u)),
                        i),
                      );
                    }, {}),
                    E = P[m],
                    k = P["".concat(m, "Ticks")],
                    M =
                      n &&
                      n[S] &&
                      n[S].hasStack &&
                      (0, bt.O3)(r, n[S].stackGroups),
                    T = (0, $.Gf)(r.type).indexOf("Bar") >= 0,
                    _ = (0, bt.zT)(E, k),
                    D = [];
                  if (T) {
                    var C,
                      N,
                      I = o()(j) ? d : j,
                      B =
                        null !==
                          (C =
                            null !== (N = (0, bt.zT)(E, k, !0)) && void 0 !== N
                              ? N
                              : I) && void 0 !== C
                          ? C
                          : 0;
                    (D = (0, bt.qz)({
                      barGap: f,
                      barCategoryGap: h,
                      bandSize: B !== _ ? B : _,
                      sizeList: g[A],
                      maxBarSize: I,
                    })),
                      B !== _ &&
                        (D = D.map(function (t) {
                          return Ee(
                            Ee({}, t),
                            {},
                            {
                              position: Ee(
                                Ee({}, t.position),
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
                      props: Ee(
                        Ee(
                          {},
                          R(
                            Ee(
                              Ee({}, P),
                              {},
                              {
                                displayedData: y,
                                props: t,
                                dataKey: O,
                                item: r,
                                bandSize: _,
                                barPosition: D,
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
                        ((L = { key: r.key || "item-".concat(l) }),
                        ke(L, v, P[v]),
                        ke(L, m, P[m]),
                        ke(L, "animationId", a),
                        L),
                      ),
                      childIndex: (0, $.$R)(r, t.children),
                      item: r,
                    });
                }),
                x
              );
            },
            E = function (t, e) {
              var n = t.props,
                o = t.dataStartIndex,
                a = t.dataEndIndex,
                u = t.updateId;
              if (!(0, $.TT)({ props: n })) return null;
              var c = n.children,
                l = n.layout,
                s = n.stackOffset,
                d = n.data,
                y = n.reverseStackOrder,
                m = $e(l),
                b = m.numericAxisName,
                g = m.cateAxisName,
                x = (0, $.NN)(c, i),
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
                  return Ee(
                    Ee({}, t),
                    {},
                    ke(
                      {},
                      r,
                      Re(
                        n,
                        Ee(
                          Ee({}, e),
                          {},
                          {
                            graphicalItems: x,
                            stackGroups: e.axisType === b && w,
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
                    p = r.margin || {},
                    h = (0, $.sP)(s, Bt),
                    d = (0, $.sP)(s, R.D),
                    y = Object.keys(u).reduce(
                      function (t, e) {
                        var r = u[e],
                          n = r.orientation;
                        return r.mirror || r.hide
                          ? t
                          : Ee(Ee({}, t), {}, ke({}, n, t[n] + r.width));
                      },
                      { left: p.left || 0, right: p.right || 0 },
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
                              ke({}, n, f()(t, "".concat(n)) + r.height),
                            );
                      },
                      { top: p.top || 0, bottom: p.bottom || 0 },
                    ),
                    m = Ee(Ee({}, v), y),
                    b = m.bottom;
                  h && (m.bottom += h.props.height || Bt.defaultProps.height),
                    d && e && (m = (0, bt.By)(m, n, r, e));
                  var g = c - m.left - m.right,
                    x = l - m.top - m.bottom;
                  return Ee(
                    Ee({ brushBottom: b }, m),
                    {},
                    { width: Math.max(g, 0), height: Math.max(x, 0) },
                  );
                })(
                  Ee(Ee({}, O), {}, { props: n, graphicalItems: x }),
                  null == e ? void 0 : e.legendBBox,
                );
              Object.keys(O).forEach(function (t) {
                O[t] = v(n, O[t], j, t.replace("Map", ""), r);
              });
              var A,
                E,
                k,
                M = O["".concat(g, "Map")],
                T =
                  ((A = M),
                  (E = (0, S.Kt)(A)),
                  {
                    tooltipTicks: (k = (0, bt.uY)(E, !1, !0)),
                    orderedTooltipTicks: h()(k, function (t) {
                      return t.coordinate;
                    }),
                    tooltipAxis: E,
                    tooltipAxisBandSize: (0, bt.zT)(E, k),
                  }),
                _ = P(
                  n,
                  Ee(
                    Ee({}, O),
                    {},
                    {
                      dataStartIndex: o,
                      dataEndIndex: a,
                      updateId: u,
                      graphicalItems: x,
                      stackGroups: w,
                      offset: j,
                    },
                  ),
                );
              return Ee(
                Ee(
                  {
                    formattedGraphicalItems: _,
                    graphicalItems: x,
                    offset: j,
                    stackGroups: w,
                  },
                  T,
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
                i,
                a,
                l = xe(p);
              function p(t) {
                var e, i, a;
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
                        i = e.updateId;
                      a.setState(
                        Ee(
                          { legendBBox: t },
                          E(
                            {
                              props: a.props,
                              dataStartIndex: r,
                              dataEndIndex: n,
                              updateId: i,
                            },
                            Ee(Ee({}, a.state), {}, { legendBBox: t }),
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
                        return Ee(
                          { dataStartIndex: e, dataEndIndex: r },
                          E(
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
                      var r = Ee(Ee({}, e), {}, { isTooltipActive: !0 });
                      a.setState(r), a.triggerSyncEvent(r);
                      var n = a.props.onMouseEnter;
                      u()(n) && n(r, t);
                    }
                  }),
                  ke(we(a), "triggeredAfterMouseMove", function (t) {
                    var e = a.getMouseInfo(t),
                      r = e
                        ? Ee(Ee({}, e), {}, { isTooltipActive: !0 })
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
                      r = (0, $.Bh)(t),
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
                      var r = Ee(Ee({}, e), {}, { isTooltipActive: !0 });
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
                      ne.emit(ie, a.props.syncId, t, a.eventEmitterSymbol);
                  }),
                  ke(we(a), "applySyncEvent", function (t) {
                    var e = a.props,
                      r = e.layout,
                      n = e.syncMethod,
                      i = a.state.updateId,
                      o = t.dataStartIndex,
                      u = t.dataEndIndex;
                    if (
                      void 0 !== t.dataStartIndex ||
                      void 0 !== t.dataEndIndex
                    )
                      a.setState(
                        Ee(
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
                      if ("function" == typeof n) s = n(h, t);
                      else if ("value" === n) {
                        s = -1;
                        for (var d = 0; d < h.length; d++)
                          if (h[d].value === t.activeLabel) {
                            s = d;
                            break;
                          }
                      }
                      var y = Ee(Ee({}, p), {}, { x: p.left, y: p.top }),
                        v = Math.min(c, y.x + y.width),
                        m = Math.min(l, y.y + y.height),
                        b = h[s] && h[s].value,
                        g = Ie(a.state, a.props.data, s),
                        x = h[s]
                          ? {
                              x: "horizontal" === r ? h[s].coordinate : v,
                              y: "horizontal" === r ? m : h[s].coordinate,
                            }
                          : De;
                      a.setState(
                        Ee(
                          Ee({}, t),
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
                      i = t.height,
                      o = t.offset;
                    return (0, bt.Rf)(
                      N(
                        Ee(
                          Ee(Ee({}, vt.defaultProps), r),
                          {},
                          {
                            ticks: (0, bt.uY)(r, !0),
                            viewBox: { x: 0, y: 0, width: n, height: i },
                          },
                        ),
                      ),
                      o.left,
                      o.left + o.width,
                      e,
                    );
                  }),
                  ke(we(a), "horizontalCoordinatesGenerator", function (t, e) {
                    var r = t.yAxis,
                      n = t.width,
                      i = t.height,
                      o = t.offset;
                    return (0, bt.Rf)(
                      N(
                        Ee(
                          Ee(Ee({}, vt.defaultProps), r),
                          {},
                          {
                            ticks: (0, bt.uY)(r, !0),
                            viewBox: { x: 0, y: 0, width: n, height: i },
                          },
                        ),
                      ),
                      o.top,
                      o.top + o.height,
                      e,
                    );
                  }),
                  ke(we(a), "axesTicksGenerator", function (t) {
                    return (0, bt.uY)(t, !0);
                  }),
                  ke(we(a), "renderCursor", function (t) {
                    var e,
                      i = a.state,
                      o = i.isTooltipActive,
                      u = i.activeCoordinate,
                      c = i.activePayload,
                      l = i.offset,
                      s = i.activeTooltipIndex,
                      f = i.tooltipAxisBandSize,
                      p = a.getTooltipEventType(),
                      h = null !== (e = t.props.active) && void 0 !== e ? e : o;
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
                    if ("ScatterChart" === r) (d = u), (v = X);
                    else if ("BarChart" === r)
                      (d = (function (t, e, r, n) {
                        var i = n / 2;
                        return {
                          stroke: "none",
                          fill: "#ccc",
                          x: "horizontal" === t ? e.x - i : r.left + 0.5,
                          y: "horizontal" === t ? r.top + 0.5 : e.y - i,
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
                        (v = V.L);
                    } else (d = { points: fe(y, u, l) }), (v = z.H);
                    var w = t.key || "_recharts-cursor",
                      O = Ee(
                        Ee(
                          Ee(
                            Ee({ stroke: "#ccc", pointerEvents: "none" }, l),
                            d,
                          ),
                          (0, $.L6)(t.props.cursor),
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
                    var i = f()(t, "type.axisType"),
                      o = f()(a.state, "".concat(i, "Map")),
                      u = o && o[t.props["".concat(i, "Id")]];
                    return (0, n.cloneElement)(
                      t,
                      Ee(
                        Ee({}, u),
                        {},
                        {
                          className: i,
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
                      i = e.yAxisMap,
                      o = e.offset,
                      u = a.props,
                      c = u.width,
                      l = u.height,
                      s = (0, S.Kt)(r),
                      f =
                        m()(i, function (t) {
                          return g()(t.domain, Number.isFinite);
                        }) || (0, S.Kt)(i),
                      p = t.props || {};
                    return (0, n.cloneElement)(t, {
                      key: t.key || "grid",
                      x: (0, S.hj)(p.x) ? p.x : o.left,
                      y: (0, S.hj)(p.y) ? p.y : o.top,
                      width: (0, S.hj)(p.width) ? p.width : o.width,
                      height: (0, S.hj)(p.height) ? p.height : o.height,
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
                  ke(we(a), "renderPolarGrid", function (t) {
                    var e = t.props,
                      r = e.radialLines,
                      i = e.polarAngles,
                      o = e.polarRadius,
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
                      polarAngles: Array.isArray(i)
                        ? i
                        : (0, bt.uY)(f, !0).map(function (t) {
                            return t.coordinate;
                          }),
                      polarRadius: Array.isArray(o)
                        ? o
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
                      i = e.width,
                      o = e.height,
                      u = a.props.margin || {},
                      c = i - (u.left || 0) - (u.right || 0),
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
                      Ee(
                        Ee({}, f),
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
                  ke(we(a), "renderTooltip", function () {
                    var t,
                      e = a.props.children,
                      r = (0, $.sP)(e, L.u);
                    if (!r) return null;
                    var i = a.state,
                      o = i.isTooltipActive,
                      u = i.activeCoordinate,
                      c = i.activePayload,
                      l = i.activeLabel,
                      s = i.offset,
                      f = null !== (t = r.props.active) && void 0 !== t ? t : o;
                    return (0, n.cloneElement)(r, {
                      viewBox: Ee(Ee({}, s), {}, { x: s.left, y: s.top }),
                      active: f,
                      label: l,
                      payload: f ? c : [],
                      coordinate: u,
                    });
                  }),
                  ke(we(a), "renderBrush", function (t) {
                    var e = a.props,
                      r = e.margin,
                      i = e.data,
                      o = a.state,
                      u = o.offset,
                      c = o.dataStartIndex,
                      l = o.dataEndIndex,
                      s = o.updateId;
                    return (0, n.cloneElement)(t, {
                      key: t.key || "_recharts-brush",
                      onChange: (0, bt.DO)(
                        a.handleBrushChange,
                        t.props.onChange,
                      ),
                      data: i,
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
                    var i = we(a).clipPathId,
                      o = a.state,
                      u = o.xAxisMap,
                      c = o.yAxisMap,
                      l = o.offset,
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
                      clipPathId: i,
                    });
                  }),
                  ke(we(a), "renderActivePoints", function (t) {
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
                            fill: (0, bt.fk)(e.item),
                            strokeWidth: 2,
                            stroke: "#fff",
                            payload: r.payload,
                            value: r.value,
                            key: "".concat(u, "-activePoint-").concat(i),
                          },
                          (0, $.L6)(l),
                        ),
                        (0, et.Ym)(l),
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
                  ke(we(a), "renderGraphicChild", function (t, e, r) {
                    var i = a.filterFormatItem(t, e, r);
                    if (!i) return null;
                    var u = a.getTooltipEventType(),
                      c = a.state,
                      l = c.isTooltipActive,
                      s = c.tooltipAxis,
                      f = c.activeTooltipIndex,
                      p = c.activeLabel,
                      h = a.props.children,
                      d = (0, $.sP)(h, L.u),
                      y = i.props,
                      v = y.points,
                      m = y.isRange,
                      b = y.baseLine,
                      g = i.item.props,
                      x = g.activeDot,
                      w = g.hide,
                      O = g.activeBar,
                      j = g.activeShape,
                      A = Boolean(!w && l && d && (x || O || j)),
                      P = {};
                    "axis" !== u && d && "click" === d.props.trigger
                      ? (P = {
                          onClick: (0, bt.DO)(
                            a.handleItemMouseEnter,
                            t.props.onClick,
                          ),
                        })
                      : "axis" !== u &&
                        (P = {
                          onMouseLeave: (0, bt.DO)(
                            a.handleItemMouseLeave,
                            t.props.onMouseLeave,
                          ),
                          onMouseEnter: (0, bt.DO)(
                            a.handleItemMouseEnter,
                            t.props.onMouseEnter,
                          ),
                        });
                    var E = (0, n.cloneElement)(t, Ee(Ee({}, i.props), P));
                    if (A) {
                      if (!(f >= 0)) {
                        var k,
                          M = (
                            null !==
                              (k = a.getItemByXY(a.state.activeCoordinate)) &&
                            void 0 !== k
                              ? k
                              : { graphicalItem: E }
                          ).graphicalItem,
                          T = M.item,
                          _ = void 0 === T ? t : T,
                          D = M.childIndex,
                          C = Ee(
                            Ee(Ee({}, i.props), P),
                            {},
                            { activeIndex: D },
                          );
                        return [(0, n.cloneElement)(_, C), null, null];
                      }
                      var N, I;
                      if (s.dataKey && !s.allowDuplicatedCategory) {
                        var B =
                          "function" == typeof s.dataKey
                            ? function (t) {
                                return "function" == typeof s.dataKey
                                  ? s.dataKey(t.payload)
                                  : null;
                              }
                            : "payload.".concat(s.dataKey.toString());
                        (N = (0, S.Ap)(v, B, p)),
                          (I = m && b && (0, S.Ap)(b, B, p));
                      } else
                        (N = null == v ? void 0 : v[f]), (I = m && b && b[f]);
                      if (j || O) {
                        var R =
                          void 0 !== t.props.activeIndex
                            ? t.props.activeIndex
                            : f;
                        return [
                          (0, n.cloneElement)(
                            t,
                            Ee(Ee(Ee({}, i.props), P), {}, { activeIndex: R }),
                          ),
                          null,
                          null,
                        ];
                      }
                      if (!o()(N))
                        return [E].concat(
                          je(
                            a.renderActivePoints({
                              item: i,
                              activePoint: N,
                              basePoint: I,
                              childIndex: f,
                              isRange: m,
                            }),
                          ),
                        );
                    }
                    return m ? [E, null, null] : [E, null];
                  }),
                  ke(we(a), "renderCustomized", function (t, e, r) {
                    return (0, n.cloneElement)(
                      t,
                      Ee(
                        Ee({ key: "recharts-customized-".concat(r) }, a.props),
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
                      var t = (0, $.sP)(this.props.children, L.u);
                      if (t && Boolean(t.props.shared)) {
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
                        i = {
                          chartX: Math.round(t.pageX - n.left),
                          chartY: Math.round(t.pageY - n.top),
                        },
                        o = r.width / e.offsetWidth || 1,
                        a = this.inRange(i.chartX, i.chartY, o);
                      if (!a) return null;
                      var u = this.state,
                        c = u.xAxisMap,
                        l = u.yAxisMap;
                      if ("axis" !== this.getTooltipEventType() && c && l) {
                        var s = (0, S.Kt)(c).scale,
                          f = (0, S.Kt)(l).scale,
                          p = s && s.invert ? s.invert(i.chartX) : null,
                          h = f && f.invert ? f.invert(i.chartY) : null;
                        return Ee(Ee({}, i), {}, { xValue: p, yValue: h });
                      }
                      var d = Be(
                        this.state,
                        this.props.data,
                        this.props.layout,
                        a,
                      );
                      return d ? Ee(Ee({}, i), d) : null;
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
                        i = t / r,
                        o = e / r;
                      if ("horizontal" === n || "vertical" === n) {
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
                        var s = (0, S.Kt)(c);
                        return (0, O.z3)({ x: i, y: o }, s);
                      }
                      return null;
                    },
                  },
                  {
                    key: "parseEventsOfWrapper",
                    value: function () {
                      var t = this.props.children,
                        e = this.getTooltipEventType(),
                        r = (0, $.sP)(t, L.u),
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
                          Ee({}, (0, et.Ym)(this.props, this.handleOuterEvent)),
                          n,
                        )
                      );
                    },
                  },
                  {
                    key: "addListener",
                    value: function () {
                      ne.on(ie, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "removeListener",
                    value: function () {
                      ne.removeListener(ie, this.handleReceiveSyncEvent);
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
                          (e === (0, $.Gf)(a.item.type) && r === a.childIndex)
                        )
                          return a;
                      }
                      return null;
                    },
                  },
                  {
                    key: "renderAxis",
                    value: function (t, e, r, i) {
                      var o = this.props,
                        a = o.width,
                        u = o.height;
                      return n.createElement(
                        vt,
                        ve({}, t, {
                          className: (0, x.Z)(
                            "recharts-"
                              .concat(t.axisType, " ")
                              .concat(t.axisType),
                            t.className,
                          ),
                          key: e.key || "".concat(r, "-").concat(i),
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
                        i = e.top,
                        o = e.height,
                        a = e.width;
                      return n.createElement(
                        "defs",
                        null,
                        n.createElement(
                          "clipPath",
                          { id: t },
                          n.createElement("rect", {
                            x: r,
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
                            var r = ye(e, 2),
                              n = r[0],
                              i = r[1];
                            return Ee(Ee({}, t), {}, ke({}, n, i.scale));
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
                              i = r[1];
                            return Ee(Ee({}, t), {}, ke({}, n, i.scale));
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
                        for (var i = 0, o = r.length; i < o; i++) {
                          var a = r[i],
                            u = a.props,
                            c = a.item,
                            l = (0, $.Gf)(c.type);
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
                              graphicalItem: Ee(
                                Ee({}, a),
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
                      if (!(0, $.TT)(this)) return null;
                      var e,
                        r,
                        i = this.props,
                        o = i.children,
                        a = i.className,
                        u = i.width,
                        c = i.height,
                        l = i.style,
                        s = i.compact,
                        f = i.title,
                        p = i.desc,
                        h = me(i, he),
                        d = (0, $.L6)(h);
                      if (s)
                        return n.createElement(
                          I.T,
                          ve({}, d, { width: u, height: c, title: f, desc: p }),
                          this.renderClipPath(),
                          (0, $.eu)(o, this.renderMap),
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
                            style: Ee(
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
                            style: _e,
                          }),
                          this.renderClipPath(),
                          (0, $.eu)(o, this.renderMap),
                        ),
                        this.renderLegend(),
                        this.renderTooltip(),
                      );
                    },
                  },
                ]),
                i && be(e.prototype, i),
                a && be(e, a),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                p
              );
            })(n.Component)),
            ke(e, "displayName", r),
            ke(
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
                b,
              ),
            ),
            ke(e, "getDerivedStateFromProps", function (t, e) {
              var r = t.dataKey,
                n = t.data,
                i = t.children,
                a = t.width,
                u = t.height,
                c = t.layout,
                l = t.stackOffset,
                s = t.margin;
              if (void 0 === e.updateId) {
                var f = ze(t);
                return Ee(
                  Ee(
                    Ee({}, f),
                    {},
                    { updateId: 0 },
                    E(Ee(Ee({ props: t }, f), {}, { updateId: 0 }), e),
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
                    prevChildren: i,
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
                  d = Ee(Ee({}, Be(e, n, c)), {}, { updateId: e.updateId + 1 }),
                  y = Ee(Ee(Ee({}, p), h), d);
                return Ee(
                  Ee(Ee({}, y), E(Ee({ props: t }, y), e)),
                  {},
                  {
                    prevDataKey: r,
                    prevData: n,
                    prevWidth: a,
                    prevHeight: u,
                    prevLayout: c,
                    prevStackOffset: l,
                    prevMargin: s,
                    prevChildren: i,
                  },
                );
              }
              if (!(0, $.rL)(i, e.prevChildren)) {
                var v = !o()(n) ? e.updateId : e.updateId + 1;
                return Ee(
                  Ee(
                    { updateId: v },
                    E(Ee(Ee({ props: t }, e), {}, { updateId: v }), e),
                  ),
                  {},
                  { prevChildren: i },
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
                  : n.createElement(G.o, e)),
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
      r.d(e, { _: () => M });
      var n = r(89526),
        i = r(51391),
        o = r.n(i),
        a = r(39277),
        u = r.n(a),
        c = r(23619),
        l = r.n(c),
        s = r(23060),
        f = r(49266),
        p = r(9410),
        h = r(16171),
        d = r(80072);
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
            n = o()(t.children) ? e : t.children;
          return u()(r) ? r(n) : n;
        },
        A = function (t, e, r) {
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
            ? ((i = g + A * l), (a = w))
            : "insideEnd" === u
            ? ((i = x - A * l), (a = !w))
            : "end" === u && ((i = x + A * l), (a = w)),
            (a = S <= 0 ? a : !a);
          var P = (0, d.op)(y, v, O, i),
            E = (0, d.op)(y, v, O, i + 359 * (a ? 1 : -1)),
            k = "M"
              .concat(P.x, ",")
              .concat(P.y, "\n    A")
              .concat(O, ",")
              .concat(O, ",0,1,")
              .concat(a ? 0 : 1, ",\n    ")
              .concat(E.x, ",")
              .concat(E.y),
            M = o()(t.id) ? (0, h.EL)("recharts-radial-line-") : t.id;
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
        P = function (t) {
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
            var s = (0, d.op)(o, a, c + r, l),
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
            h = (0, d.op)(o, a, p, l);
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
            i = t.position,
            o = e,
            a = o.x,
            u = o.y,
            c = o.width,
            s = o.height,
            f = s >= 0 ? 1 : -1,
            p = f * n,
            d = f > 0 ? "end" : "start",
            y = f > 0 ? "start" : "end",
            v = c >= 0 ? 1 : -1,
            m = v * n,
            b = v > 0 ? "end" : "start",
            g = v > 0 ? "start" : "end";
          if ("top" === i)
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
              r
                ? { height: Math.max(r.y + r.height - (u + s), 0), width: c }
                : {},
            );
          if ("left" === i) {
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
          if ("right" === i) {
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
          return "insideLeft" === i
            ? w(
                {
                  x: a + m,
                  y: u + s / 2,
                  textAnchor: g,
                  verticalAnchor: "middle",
                },
                j,
              )
            : "insideRight" === i
            ? w(
                {
                  x: a + c - m,
                  y: u + s / 2,
                  textAnchor: b,
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
            ? w({ x: a + m, y: u + p, textAnchor: g, verticalAnchor: y }, j)
            : "insideTopRight" === i
            ? w({ x: a + c - m, y: u + p, textAnchor: b, verticalAnchor: y }, j)
            : "insideBottomLeft" === i
            ? w({ x: a + m, y: u + s - p, textAnchor: g, verticalAnchor: d }, j)
            : "insideBottomRight" === i
            ? w(
                {
                  x: a + c - m,
                  y: u + s - p,
                  textAnchor: b,
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
          r = t.offset,
          i = w({ offset: void 0 === r ? 5 : r }, g(t, v)),
          a = i.viewBox,
          c = i.position,
          l = i.value,
          h = i.children,
          d = i.content,
          y = i.className,
          m = void 0 === y ? "" : y,
          b = i.textBreakAll;
        if (!a || (o()(l) && o()(h) && !(0, n.isValidElement)(d) && !u()(d)))
          return null;
        if ((0, n.isValidElement)(d)) return (0, n.cloneElement)(d, i);
        if (u()(d)) {
          if (((e = (0, n.createElement)(d, i)), (0, n.isValidElement)(e)))
            return e;
        } else e = S(i);
        var x = k(a),
          O = (0, p.L6)(i, !0);
        if (x && ("insideStart" === c || "insideEnd" === c || "end" === c))
          return A(i, e, O);
        var M = x ? P(i) : E(i);
        return n.createElement(
          f.x,
          j({ className: (0, s.Z)("recharts-label", m) }, O, M, {
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
      (M.parseViewBox = T),
        (M.renderCallByParent = function (t, e) {
          var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && r && !t.label)) return null;
          var i = t.children,
            o = T(t),
            a = (0, p.NN)(i, M).map(function (t, r) {
              return (0, n.cloneElement)(t, {
                viewBox: e || o,
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
          })(t.label, e || o);
          return [c].concat(m(a));
        });
    },
    34324: (t, e, r) => {
      "use strict";
      r.d(e, { e: () => E });
      var n = r(89526),
        i = r(51391),
        o = r.n(i),
        a = r(23619),
        u = r.n(a),
        c = r(39277),
        l = r.n(c),
        s = r(80275),
        f = r.n(s),
        p = r(43774),
        h = r(61452),
        d = r(9410),
        y = r(37287);
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
      var P = function (t) {
        return Array.isArray(t.value) ? f()(t.value) : t.value;
      };
      function E(t) {
        var e = t.valueAccessor,
          r = void 0 === e ? P : e,
          i = A(t, m),
          a = i.data,
          u = i.dataKey,
          c = i.clockWise,
          l = i.id,
          s = i.textBreakAll,
          f = A(i, b);
        return a && a.length
          ? n.createElement(
              h.m,
              { className: "recharts-label-list" },
              a.map(function (t, e) {
                var i = o()(u) ? r(t, e) : (0, y.F$)(t && t.payload, u),
                  a = o()(l) ? {} : { id: "".concat(l, "-").concat(e) };
                return n.createElement(
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
      (E.displayName = "LabelList"),
        (E.renderCallByParent = function (t, e) {
          var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (!t || (!t.children && r && !t.label)) return null;
          var i = t.children,
            o = (0, d.NN)(i, E).map(function (t, r) {
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
              ].concat(g(o))
            : o;
        });
    },
    98241: (t, e, r) => {
      "use strict";
      r.d(e, { D: () => L });
      var n = r(89526),
        i = r(39277),
        o = r.n(i),
        a = r(23060),
        u = r(78706),
        c = r(93386),
        l = r(16667),
        s = r(33790);
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
            var i = m(this).constructor;
            r = Reflect.construct(n, arguments, i);
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
            (r = [
              {
                key: "renderIcon",
                value: function (t) {
                  var e = this.props.inactiveColor,
                    r = 16,
                    i = x / 6,
                    o = x / 3,
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
                        .concat(o, "\n            A")
                        .concat(i, ",")
                        .concat(i, ",0,1,1,")
                        .concat(2 * o, ",")
                        .concat(r, "\n            H")
                        .concat(x, "M")
                        .concat(2 * o, ",")
                        .concat(r, "\n            A")
                        .concat(i, ",")
                        .concat(i, ",0,1,1,")
                        .concat(o, ",")
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
                    var x = o()(e.value) ? null : e.value;
                    (0, u.Z)(
                      !o()(e.value),
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
                        { width: i, height: i, viewBox: d, style: v },
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
                    i = t.align;
                  if (!e || !e.length) return null;
                  var o = {
                    padding: 0,
                    margin: 0,
                    textAlign: "horizontal" === r ? i : "left",
                  };
                  return n.createElement(
                    "ul",
                    { className: "recharts-default-legend", style: o },
                    this.renderItems(),
                  );
                },
              },
            ]),
            r && d(e.prototype, r),
            i && d(e, i),
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
      var O = r(16171),
        j = r(56062);
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
                C(t, e, r[e]);
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
            Object.defineProperty(t, N(n.key), n);
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
            n = D(t);
          if (e) {
            var i = D(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === S(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return _(t);
          })(this, r);
        };
      }
      function _(t) {
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
      function C(t, e, r) {
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
          i,
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
            C(_((t = o.call.apply(o, [this].concat(r)))), "lastBoundingBox", {
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
                  ? E({}, this.lastBoundingBox)
                  : { width: 0, height: 0 };
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
                            left: ((c || 0) - this.getBBoxSnapshot().width) / 2,
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
                            top: ((l || 0) - this.getBBoxSnapshot().height) / 2,
                          }
                        : "bottom" === a
                        ? { bottom: (u && u.bottom) || 0 }
                        : { top: (u && u.top) || 0 }),
                  E(E({}, e), r)
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.content,
                  i = e.width,
                  o = e.height,
                  a = e.wrapperStyle,
                  u = e.payloadUniqBy,
                  c = e.payload,
                  l = E(
                    E(
                      {
                        position: "absolute",
                        width: i || "auto",
                        height: o || "auto",
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
                    E(E({}, this.props), {}, { payload: (0, j.z)(c, u, B) }),
                  ),
                );
              },
            },
          ]) && k(e.prototype, r),
          i && k(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(n.PureComponent);
      C(L, "displayName", "Legend"),
        C(L, "defaultProps", {
          iconSize: 14,
          layout: "horizontal",
          align: "center",
          verticalAlign: "bottom",
        });
    },
    71824: (t, e, r) => {
      "use strict";
      r.d(e, { h: () => m });
      var n = r(23060),
        i = r(89526),
        o = r(38172),
        a = r.n(o),
        u = r(338),
        c = r(16171),
        l = r(78706),
        s = r(9410);
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
      var m = (0, i.forwardRef)(function (t, e) {
        var r = t.aspect,
          o = t.initialDimension,
          f = void 0 === o ? { width: -1, height: -1 } : o,
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
          P = t.className,
          E = t.onResize,
          k = t.style,
          M = void 0 === k ? {} : k,
          T = (0, i.useRef)(null),
          _ = (0, i.useRef)();
        (_.current = E),
          (0, i.useImperativeHandle)(e, function () {
            return T;
          });
        var D = y(
            (0, i.useState)({
              containerWidth: f.width,
              containerHeight: f.height,
            }),
            2,
          ),
          C = D[0],
          N = D[1],
          I = (0, i.useCallback)(function (t, e) {
            N(function (r) {
              var n = Math.round(t),
                i = Math.round(e);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []);
        (0, i.useEffect)(
          function () {
            var t = function (t) {
              var e,
                r = t[0].contentRect,
                n = r.width,
                i = r.height;
              I(n, i),
                null === (e = _.current) || void 0 === e || e.call(_, n, i);
            };
            S > 0 && (t = a()(t, S, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              r = T.current.getBoundingClientRect(),
              n = r.width,
              i = r.height;
            return (
              I(n, i),
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
            var t = C.containerWidth,
              e = C.containerHeight;
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
              o = (0, c.hU)(m) ? e : m;
            r &&
              r > 0 &&
              (n ? (o = n / r) : o && (n = o * r), w && o > w && (o = w)),
              (0, l.Z)(
                n > 0 || o > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                n,
                o,
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
            return i.Children.map(O, function (t) {
              return (0, u.isElement)(t)
                ? (0, i.cloneElement)(
                    t,
                    h(
                      { width: n, height: o },
                      a
                        ? {
                            style: h(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: o,
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
          [r, O, m, w, x, g, C, d],
        );
        return i.createElement(
          "div",
          {
            id: A ? "".concat(A) : void 0,
            className: (0, n.Z)("recharts-responsive-container", P),
            style: h(
              h({}, M),
              {},
              { width: d, height: m, minWidth: g, minHeight: x, maxHeight: w },
            ),
            ref: T,
          },
          B,
        );
      });
    },
    49266: (t, e, r) => {
      "use strict";
      r.d(e, { x: () => R });
      var n = r(89526),
        i = r(51391),
        o = r.n(i),
        a = r(23060),
        u = r(16171),
        c = r(59509),
        l = r(9410),
        s = r(99875);
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
              ((i = n.key),
              (o = void 0),
              (o = (function (t, e) {
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
              })(i, "string")),
              "symbol" === f(o) ? o : String(o)),
              n,
            );
        }
        var i, o;
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
                  i = n[1],
                  o = n[2];
                return new t(parseFloat(i), null != o ? o : "");
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
            i = n[1],
            o = n[2],
            a = n[3],
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
      function P(t) {
        var e = (function (t) {
          try {
            return A(t);
          } catch (t) {
            return w;
          }
        })(t.slice(5, -1));
        return e === w ? "" : e;
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
      function T(t, e) {
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
      function _(t, e) {
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
      var C = /[ \f\n\r\t\v\u2028\u2029]+/,
        N = function (t) {
          var e = t.children,
            r = t.breakAll,
            n = t.style;
          try {
            var i = [];
            return (
              o()(e) ||
                (i = r ? e.toString().split("") : e.toString().split(C)),
              {
                wordsWithComputedWidth: i.map(function (t) {
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
          return [{ words: o()(t) ? [] : t.toString().split(C) }];
        },
        B = function (t) {
          var e = t.width,
            r = t.scaleToFit,
            n = t.children,
            i = t.style,
            o = t.breakAll,
            a = t.maxLines;
          if ((e || r) && !c.x.isSsr) {
            var l = N({ breakAll: o, children: n, style: i });
            return l
              ? (function (t, e, r, n, i) {
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
                          (null == n || i || u.width + a + r < Number(n))
                        )
                          u.words.push(o), (u.width += a + r);
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
                          r = N({
                            breakAll: l,
                            style: c,
                            children: e + "…",
                          }).wordsWithComputedWidth,
                          i = p(r),
                          a =
                            i.length > o ||
                            (function (t) {
                              return t.reduce(function (t, e) {
                                return t.width > e.width ? t : e;
                              });
                            })(i).width > Number(n);
                        return [a, i];
                      },
                      v = 0,
                      m = f.length - 1,
                      b = 0;
                    v <= m && b <= f.length - 1;

                  ) {
                    var g = Math.floor((v + m) / 2),
                      x = _(y(g - 1), 2),
                      w = x[0],
                      O = x[1],
                      j = _(y(g), 1)[0];
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
                  { breakAll: o, children: n, maxLines: a, style: i },
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
            b = void 0 === m ? "end" : m,
            g = t.fill,
            x = void 0 === g ? L : g,
            w = T(t, E),
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
            _ = w.className,
            D = w.breakAll,
            C = T(w, k);
          if (!(0, u.P2)(r) || !(0, u.P2)(o)) return null;
          var N,
            I = r + ((0, u.hj)(j) ? j : 0),
            R = o + ((0, u.hj)(S) ? S : 0);
          switch (b) {
            case "start":
              N = P("calc(".concat(p, ")"));
              break;
            case "middle":
              N = P(
                "calc("
                  .concat((O.length - 1) / 2, " * -")
                  .concat(s, " + (")
                  .concat(p, " / 2))"),
              );
              break;
            default:
              N = P("calc(".concat(O.length - 1, " * -").concat(s, ")"));
          }
          var z = [];
          if (d) {
            var $ = O[0].width,
              F = w.width;
            z.push("scale(".concat(((0, u.hj)(F) ? F / $ : 1) / $, ")"));
          }
          return (
            A &&
              z.push("rotate(".concat(A, ", ").concat(I, ", ").concat(R, ")")),
            z.length && (C.transform = z.join(" ")),
            n.createElement(
              "text",
              M({}, (0, l.L6)(C, !0), {
                x: I,
                y: R,
                className: (0, a.Z)("recharts-text", _),
                textAnchor: v,
                fill: x.includes("url") ? L : x,
              }),
              O.map(function (t, e) {
                return n.createElement(
                  "tspan",
                  { x: I, dy: 0 === e ? N : s, key: e },
                  t.words.join(D ? "" : " "),
                );
              }),
            )
          );
        };
    },
    68537: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => V });
      var n = r(89526),
        i = r(65853),
        o = r.n(i),
        a = r(51391),
        u = r.n(a),
        c = r(23060),
        l = r(16171);
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
            i = t.contentStyle,
            a = void 0 === i ? {} : i,
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
            P = !u()(O),
            E = P ? O : "",
            k = (0, c.Z)("recharts-default-tooltip", x),
            M = (0, c.Z)("recharts-tooltip-label", w);
          return (
            P && j && null != m && (E = j(O, m)),
            n.createElement(
              "div",
              { className: k, style: S },
              n.createElement(
                "p",
                { className: M, style: A },
                n.isValidElement(E) ? E : "".concat(E),
              ),
              (function () {
                if (m && m.length) {
                  var t = (g ? o()(m, g) : m).map(function (t, e) {
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
                      o = t.formatter || b || v,
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
                    return n.createElement(
                      "li",
                      {
                        className: "recharts-tooltip-item",
                        key: "tooltip-item-".concat(e),
                        style: i,
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
        b = r(5722);
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
          i = t.translateY;
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
            (0, l.hj)(i) && r && (0, l.hj)(r.y) && i >= r.y,
          ),
          x(
            e,
            "".concat(w, "-top"),
            (0, l.hj)(i) && r && (0, l.hj)(r.y) && i < r.y,
          ),
          e),
        );
      }
      function S(t) {
        var e = t.allowEscapeViewBox,
          r = t.coordinate,
          n = t.key,
          i = t.offsetTopLeft,
          o = t.position,
          a = t.reverseDirection,
          u = t.tooltipDimension,
          c = t.viewBox,
          s = t.viewBoxDimension;
        if (o && (0, l.hj)(o[n])) return o[n];
        var f = r[n] - u - i,
          p = r[n] + i;
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
                    r = t.translateY,
                    n = t.useTranslate3d;
                  return (0, b.bO)({
                    transform: n
                      ? "translate3d(".concat(e, "px, ").concat(r, "px, 0)")
                      : "translate(".concat(e, "px, ").concat(r, "px)"),
                  });
                })({
                  translateX: (r = S({
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
                  translateY: (n = S({
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
            cssClasses: j({ translateX: r, translateY: n, coordinate: o }),
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
      function M(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, I(n.key), n);
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
          var r,
            n = C(t);
          if (e) {
            var i = C(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === P(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return D(t);
          })(this, r);
        };
      }
      function D(t) {
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
              e && T(t, e);
          })(a, t);
          var e,
            r,
            i,
            o = _(a);
          function a() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
              r[n] = arguments[n];
            return (
              N(D((t = o.call.apply(o, [this].concat(r)))), "state", {
                dismissed: !1,
                dismissedAtCoordinate: { x: 0, y: 0 },
              }),
              N(D(t), "lastBoundingBox", { width: -1, height: -1 }),
              N(D(t), "handleKeyDown", function (e) {
                var r, n, i, o;
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
                    m = A({
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
            i && M(e, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(n.PureComponent),
        L = r(59509),
        R = r(56062);
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
      function $(t, e) {
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
            ? $(Object(r), !0).forEach(function (e) {
                H(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : $(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function U(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Y(n.key), n);
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
            var i = q(this).constructor;
            r = Reflect.construct(n, arguments, i);
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
      function H(t, e, r) {
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
      function X(t) {
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
            e && W(t, e);
        })(a, t);
        var e,
          r,
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
          (r = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.active,
                  r = t.allowEscapeViewBox,
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
                  b = t.wrapperStyle,
                  g = null != f ? f : [];
                c &&
                  g.length &&
                  (g = (0, R.z)(
                    f.filter(function (t) {
                      return null != t.value;
                    }),
                    p,
                    X,
                  ));
                var x = g.length > 0;
                return n.createElement(
                  B,
                  {
                    allowEscapeViewBox: r,
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
          ]) && U(e.prototype, r),
          i && U(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(n.PureComponent);
      H(V, "displayName", "Tooltip"),
        H(V, "defaultProps", {
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
    61452: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => l });
      var n = r(89526),
        i = r(23060),
        o = r(9410),
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
      var l = n.forwardRef(function (t, e) {
        var r = t.children,
          l = t.className,
          s = c(t, a),
          f = (0, i.Z)("recharts-layer", l);
        return n.createElement(
          "g",
          u({ className: f }, (0, o.L6)(s, !0), { ref: e }),
          r,
        );
      });
    },
    93386: (t, e, r) => {
      "use strict";
      r.d(e, { T: () => l });
      var n = r(89526),
        i = r(23060),
        o = r(9410),
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
          m = (0, i.Z)("recharts-surface", f);
        return n.createElement(
          "svg",
          u({}, (0, o.L6)(y, !0, "svg"), {
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
    47990: (t, e, r) => {
      "use strict";
      r.d(e, { H: () => X });
      var n = r(89526);
      function i() {}
      function o(t, e, r) {
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
                var r = (this._x0 + 4 * this._x1 + t) / 6,
                  n = (this._y0 + 4 * this._y1 + e) / 6;
                this._line
                  ? this._context.lineTo(r, n)
                  : this._context.moveTo(r, n);
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
      function d(t, e, r) {
        var n = t._x1 - t._x0,
          i = e - t._x1,
          o = (t._y1 - t._y0) / (n || (i < 0 && -0)),
          a = (r - t._y1) / (i || (n < 0 && -0)),
          u = (o * i + a * n) / (n + i);
        return (
          (h(o) + h(a)) *
            Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) || 0
        );
      }
      function y(t, e) {
        var r = t._x1 - t._x0;
        return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e;
      }
      function v(t, e, r) {
        var n = t._x0,
          i = t._y0,
          o = t._x1,
          a = t._y1,
          u = (o - n) / 3;
        t._context.bezierCurveTo(n + u, i + u * e, o - u, a - u * r, o, a);
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
          bezierCurveTo: function (t, e, r, n, i, o) {
            this._context.bezierCurveTo(e, t, n, r, o, i);
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
                for (var n = w(t), i = w(e), o = 0, a = 1; a < r; ++o, ++a)
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
      var j = r(62478),
        S = r(24792),
        A = r(88097);
      function P(t) {
        return t[0];
      }
      function E(t) {
        return t[1];
      }
      function k(t, e) {
        var r = (0, S.Z)(!0),
          n = null,
          i = p,
          o = null,
          a = (0, A.d)(u);
        function u(u) {
          var c,
            l,
            s,
            f = (u = (0, j.Z)(u)).length,
            p = !1;
          for (null == n && (o = i((s = a()))), c = 0; c <= f; ++c)
            !(c < f && r((l = u[c]), c, u)) === p &&
              ((p = !p) ? o.lineStart() : o.lineEnd()),
              p && o.point(+t(l, c, u), +e(l, c, u));
          if (s) return (o = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? P : (0, S.Z)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? E : (0, S.Z)(e)),
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
      function M(t, e, r) {
        var n = null,
          i = (0, S.Z)(!0),
          o = null,
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
          for (null == o && (u = a((d = c()))), s = 0; s <= y; ++s) {
            if (!(s < y && i((h = l[s]), s, l)) === v)
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
          return k().defined(i).curve(a).context(o);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? P : (0, S.Z)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
              ? (0, S.Z)(0)
              : (0, S.Z)(+e)),
          (r = "function" == typeof r ? r : void 0 === r ? E : (0, S.Z)(+r)),
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
      var T = r(43483),
        _ = r.n(T),
        D = r(39277),
        C = r.n(D),
        N = r(23060),
        I = r(33790),
        B = r(9410),
        L = r(16171);
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
      function $(t, e) {
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
            ? $(Object(r), !0).forEach(function (e) {
                U(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : $(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function U(t, e, r) {
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
        H = function (t) {
          return t.y;
        },
        Y = function (t) {
          var e,
            r = t.type,
            n = void 0 === r ? "linear" : r,
            i = t.points,
            o = void 0 === i ? [] : i,
            a = t.baseLine,
            u = t.layout,
            c = t.connectNulls,
            l = void 0 !== c && c,
            s = (function (t, e) {
              if (C()(t)) return t;
              var r = "curve".concat(_()(t));
              return ("curveMonotone" !== r && "curveBump" !== r) || !e
                ? W[r] || p
                : W["".concat(r).concat("vertical" === e ? "Y" : "X")];
            })(n, u),
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
            r = t.points,
            i = t.path,
            o = t.pathRef;
          if (!((r && r.length) || i)) return null;
          var a = r && r.length ? Y(t) : i;
          return n.createElement(
            "path",
            z({}, (0, B.L6)(t), (0, I.Ym)(t), {
              className: (0, N.Z)("recharts-curve", e),
              d: a,
              ref: o,
            }),
          );
        };
    },
    96963: (t, e, r) => {
      "use strict";
      r.d(e, { o: () => c });
      var n = r(89526),
        i = r(23060),
        o = r(33790),
        a = r(9410);
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
          s = (0, i.Z)("recharts-dot", l);
        return e === +e && r === +r && c === +c
          ? n.createElement(
              "circle",
              u({}, (0, a.L6)(t), (0, o.Ym)(t), {
                className: s,
                cx: e,
                cy: r,
                r: c,
              }),
            )
          : null;
      };
    },
    33951: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => m, X: () => y });
      var n = r(89526),
        i = r(23060),
        o = r(5722),
        a = r(9410);
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
      var d = function (t, e, r, n, i) {
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
        y = function (t, e) {
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
          var P = (0, i.Z)("recharts-rectangle", x);
          return A
            ? n.createElement(
                o.ZP,
                {
                  canBegin: s > 0,
                  from: { width: m, height: b, x: h, y },
                  to: { width: m, height: b, x: h, y },
                  duration: O,
                  animationEasing: w,
                  isActive: A,
                },
                function (t) {
                  var i = t.width,
                    u = t.height,
                    l = t.x,
                    f = t.y;
                  return n.createElement(
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
                    n.createElement(
                      "path",
                      c({}, (0, a.L6)(e, !0), {
                        className: P,
                        d: d(l, f, i, u, g),
                        ref: r,
                      }),
                    ),
                  );
                },
              )
            : n.createElement(
                "path",
                c({}, (0, a.L6)(e, !0), { className: P, d: d(h, y, m, b, g) }),
              );
        };
    },
    61001: (t, e, r) => {
      "use strict";
      r.d(e, { L: () => v });
      var n = r(89526),
        i = r(23060),
        o = r(9410),
        a = r(80072),
        u = r(16171);
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
            i = t.angle,
            o = t.sign,
            u = t.isExternal,
            c = t.cornerRadius,
            l = t.cornerIsExternal,
            s = c * (u ? 1 : -1) + n,
            f = Math.asin(c / s) / a.Wk,
            p = l ? i : i + o * f,
            h = l ? i - o * f : i;
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
            i = t.outerRadius,
            o = t.startAngle,
            c = (function (t, e) {
              return (0, u.uY)(e - t) * Math.min(Math.abs(e - t), 359.999);
            })(o, t.endAngle),
            l = o + c,
            s = (0, a.op)(e, r, i, o),
            f = (0, a.op)(e, r, i, l),
            p = "M "
              .concat(s.x, ",")
              .concat(s.y, "\n    A ")
              .concat(i, ",")
              .concat(i, ",0,\n    ")
              .concat(+(Math.abs(c) > 180), ",")
              .concat(+(o > l), ",\n    ")
              .concat(f.x, ",")
              .concat(f.y, "\n  ");
          if (n > 0) {
            var h = (0, a.op)(e, r, n, o),
              d = (0, a.op)(e, r, n, l);
            p += "L "
              .concat(d.x, ",")
              .concat(d.y, "\n            A ")
              .concat(n, ",")
              .concat(n, ",0,\n            ")
              .concat(+(Math.abs(c) > 180), ",")
              .concat(+(o <= l), ",\n            ")
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
            O = (0, i.Z)("recharts-sector", x),
            j = s - c,
            S = (0, u.h1)(p, j, 0, !0);
          return (
            (w =
              S > 0 && Math.abs(b - g) < 360
                ? (function (t) {
                    var e = t.cx,
                      r = t.cy,
                      n = t.innerRadius,
                      i = t.outerRadius,
                      o = t.cornerRadius,
                      a = t.forceCornerRadius,
                      c = t.cornerIsExternal,
                      l = t.startAngle,
                      s = t.endAngle,
                      f = (0, u.uY)(s - l),
                      p = h({
                        cx: e,
                        cy: r,
                        radius: i,
                        angle: l,
                        sign: f,
                        cornerRadius: o,
                        cornerIsExternal: c,
                      }),
                      y = p.circleTangency,
                      v = p.lineTangency,
                      m = p.theta,
                      b = h({
                        cx: e,
                        cy: r,
                        radius: i,
                        angle: s,
                        sign: -f,
                        cornerRadius: o,
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
                            .concat(o, ",")
                            .concat(o, ",0,0,1,")
                            .concat(2 * o, ",0\n        a")
                            .concat(o, ",")
                            .concat(o, ",0,0,1,")
                            .concat(2 * -o, ",0\n      ")
                        : d({
                            cx: e,
                            cy: r,
                            innerRadius: n,
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
                      .concat(g.x, ",")
                      .concat(g.y, "\n    A")
                      .concat(o, ",")
                      .concat(o, ",0,0,")
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
                          cornerRadius: o,
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
                          cornerRadius: o,
                          cornerIsExternal: c,
                        }),
                        M = k.circleTangency,
                        T = k.lineTangency,
                        _ = k.theta,
                        D = c ? Math.abs(l - s) : Math.abs(l - s) - E - _;
                      if (D < 0 && 0 === o)
                        return "".concat(j, "L").concat(e, ",").concat(r, "Z");
                      j += "L"
                        .concat(T.x, ",")
                        .concat(T.y, "\n      A")
                        .concat(o, ",")
                        .concat(o, ",0,0,")
                        .concat(+(f < 0), ",")
                        .concat(M.x, ",")
                        .concat(M.y, "\n      A")
                        .concat(n, ",")
                        .concat(n, ",0,")
                        .concat(+(D > 180), ",")
                        .concat(+(f > 0), ",")
                        .concat(A.x, ",")
                        .concat(A.y, "\n      A")
                        .concat(o, ",")
                        .concat(o, ",0,0,")
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
              l({}, (0, o.L6)(e, !0), { className: O, d: w, role: "img" }),
            )
          );
        };
    },
    16667: (t, e, r) => {
      "use strict";
      r.d(e, { v: () => F });
      var n = r(89526),
        i = r(43483),
        o = r.n(i);
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
              i = g * r;
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
        j = -0.5,
        S = c(3) / 2,
        A = 1 / c(12),
        P = 3 * (A / 2 + 1),
        E = {
          draw(t, e) {
            const r = c(e / P),
              n = r / 2,
              i = r * A,
              o = n,
              a = r * A + r,
              u = -o,
              l = a;
            t.moveTo(n, i),
              t.lineTo(o, a),
              t.lineTo(u, l),
              t.lineTo(j * n - S * i, S * n + j * i),
              t.lineTo(j * o - S * a, S * o + j * a),
              t.lineTo(j * u - S * l, S * u + j * l),
              t.lineTo(j * n + S * i, j * i - S * n),
              t.lineTo(j * o + S * a, j * a - S * o),
              t.lineTo(j * u + S * l, j * l - S * u),
              t.closePath();
          },
        };
      var k = r(24792),
        M = r(88097);
      c(3), c(3);
      var T = r(23060),
        _ = r(9410);
      function D(t) {
        return (
          (D =
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
          D(t)
        );
      }
      var C = ["type", "size", "sizeType"];
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
              if ("object" !== D(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== D(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === D(e) ? e : String(e);
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
      var z = {
          symbolCircle: f,
          symbolCross: p,
          symbolDiamond: y,
          symbolSquare: v,
          symbolStar: x,
          symbolTriangle: O,
          symbolWye: E,
        },
        $ = Math.PI / 180,
        F = function (t) {
          var e,
            r,
            i = t.type,
            a = void 0 === i ? "circle" : i,
            u = t.size,
            c = void 0 === u ? 64 : u,
            l = t.sizeType,
            s = void 0 === l ? "area" : l,
            p = B(B({}, R(t, C)), {}, { type: a, size: c, sizeType: s }),
            h = p.className,
            d = p.cx,
            y = p.cy,
            v = (0, _.L6)(p, !0);
          return d === +d && y === +y && c === +c
            ? n.createElement(
                "path",
                N({}, v, {
                  className: (0, T.Z)("recharts-symbols", h),
                  transform: "translate(".concat(d, ", ").concat(y, ")"),
                  d:
                    ((e = (function (t) {
                      var e = "symbol".concat(o()(t));
                      return z[e] || f;
                    })(a)),
                    (r = (function (t, e) {
                      let r = null,
                        n = (0, M.d)(i);
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
                            ? ((r = null == t ? null : t), i)
                            : r;
                        }),
                        i
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
                              var n = 18 * $;
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
        z["symbol".concat(o()(t))] = e;
      };
    },
    5579: (t, e, r) => {
      "use strict";
      r.d(e, {
        bn: () => L,
        a3: () => Z,
        lT: () => R,
        V$: () => z,
        w7: () => $,
      });
      var n = r(89526),
        i = r(39277),
        o = r.n(i),
        a = r(82678),
        u = r.n(a),
        c = r(23079),
        l = r.n(c),
        s = r(47184),
        f = r.n(s),
        p = r(33951),
        h = r(23060),
        d = r(5722),
        y = r(9410);
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
      var j = function (t, e, r, n, i) {
          var o,
            a = r - n;
          return (
            (o = "M ".concat(t, ",").concat(e)),
            (o += "L ".concat(t + r, ",").concat(e)),
            (o += "L ".concat(t + r - a / 2, ",").concat(e + i)),
            (o += "L ".concat(t + r - a / 2 - n, ",").concat(e + i)),
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
        A = function (t) {
          var e = w(w({}, S), t),
            r = (0, n.useRef)(),
            i = b((0, n.useState)(-1), 2),
            o = i[0],
            a = i[1];
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
                  canBegin: o > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: f, x: u, y: c },
                  to: { upperWidth: l, lowerWidth: s, height: f, x: u, y: c },
                  duration: g,
                  animationEasing: v,
                  isActive: O,
                },
                function (t) {
                  var i = t.upperWidth,
                    a = t.lowerWidth,
                    u = t.height,
                    c = t.x,
                    l = t.y;
                  return n.createElement(
                    d.ZP,
                    {
                      canBegin: o > 0,
                      from: "0px ".concat(-1 === o ? 1 : o, "px"),
                      to: "".concat(o, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: x,
                      duration: g,
                      easing: v,
                    },
                    n.createElement(
                      "path",
                      m({}, (0, y.L6)(e, !0), {
                        className: A,
                        d: j(c, l, i, a, u),
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
        P = r(61001),
        E = r(61452),
        k = r(16667),
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
      function D(t, e) {
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
            ? D(Object(r), !0).forEach(function (e) {
                N(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function (e) {
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
              if ("object" !== T(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== T(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === T(e) ? e : String(e);
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
        return C(C({}, e), t);
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
            return n.createElement(P.L, r);
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
          i = t.shapeType,
          a = t.propTransformer,
          c = void 0 === a ? I : a,
          s = t.activeClassName,
          f = void 0 === s ? "recharts-active-shape" : s,
          p = t.isActive,
          h = _(t, M);
        if ((0, n.isValidElement)(r))
          e = (0, n.cloneElement)(
            r,
            C(
              C({}, h),
              (function (t) {
                return (0, n.isValidElement)(t) ? t.props : t;
              })(r),
            ),
          );
        else if (o()(r)) e = r(h);
        else if (u()(r) && !l()(r)) {
          var d = c(r, h);
          e = n.createElement(B, { shapeType: i, elementProps: d });
        } else {
          var y = h;
          e = n.createElement(B, { shapeType: i, elementProps: y });
        }
        return p ? n.createElement(E.m, { className: f }, e) : e;
      }
      function R(t, e) {
        return "trapezoids" in t.props;
      }
      function z(t, e) {
        return "sectors" in t.props;
      }
      function $(t, e) {
        return "points" in t.props;
      }
      function F(t, e) {
        var r,
          n,
          i =
            t.x ===
              (null == e || null === (r = e.labelViewBox) || void 0 === r
                ? void 0
                : r.x) || t.x === e.x,
          o =
            t.y ===
              (null == e || null === (n = e.labelViewBox) || void 0 === n
                ? void 0
                : n.y) || t.y === e.y;
        return i && o;
      }
      function U(t, e) {
        var r = t.endAngle === e.endAngle,
          n = t.startAngle === e.startAngle;
        return r && n;
      }
      function W(t, e) {
        var r = t.x === e.x,
          n = t.y === e.y,
          i = t.z === e.z;
        return r && n && i;
      }
      function Z(t) {
        var e = t.activeTooltipItem,
          r = t.graphicalItem,
          n = t.itemData,
          i = (function (t, e) {
            var r;
            return (
              R(t)
                ? (r = "trapezoids")
                : z(t)
                ? (r = "sectors")
                : $(t) && (r = "points"),
              r
            );
          })(r),
          o = (function (t, e) {
            var r, n;
            return R(t)
              ? null === (r = e.tooltipPayload) ||
                void 0 === r ||
                null === (r = r[0]) ||
                void 0 === r ||
                null === (r = r.payload) ||
                void 0 === r
                ? void 0
                : r.payload
              : z(t)
              ? null === (n = e.tooltipPayload) ||
                void 0 === n ||
                null === (n = n[0]) ||
                void 0 === n ||
                null === (n = n.payload) ||
                void 0 === n
                ? void 0
                : n.payload
              : $(t)
              ? e.payload
              : {};
          })(r, e),
          a = n.filter(function (t, n) {
            var a = f()(o, t),
              u = r.props[i].filter(function (t) {
                var n = (function (t, e) {
                  var r;
                  return R(t) ? (r = F) : z(t) ? (r = U) : $(t) && (r = W), r;
                })(r);
                return n(t, e);
              }),
              c = r.props[i].indexOf(u[u.length - 1]);
            return a && n === c;
          });
        return n.indexOf(a[a.length - 1]);
      }
    },
    87210: (t, e, r) => {
      "use strict";
      r.d(e, {
        Ky: () => w,
        O1: () => b,
        _b: () => g,
        t9: () => m,
        xE: () => O,
      });
      var n = r(40508),
        i = r.n(n),
        o = r(70826),
        a = r.n(o),
        u = r(37287),
        c = r(9410),
        l = r(16171),
        s = r(48218);
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
              M.forEach(function (t, e) {
                e > 0 && (k = Math.min((t || 0) - (M[e - 1] || 0), k));
              });
              var T = k / E,
                _ = "vertical" === g.layout ? r.height : r.width;
              if (
                ("gap" === g.padding && (c = (T * _) / 2),
                "no-gap" === g.padding)
              ) {
                var D = (0, l.h1)(t.barCategoryGap, T * _),
                  C = (T * _) / 2;
                c = C - D - ((C - D) / _) * D;
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
            var N = (0, u.Hq)(g, i, m),
              I = N.scale,
              B = N.realScaleType;
            I.domain(w).range(s), (0, u.zF)(I);
            var L = (0, u.g$)(I, d(d({}, g), {}, { realScaleType: B }));
            "xAxis" === n
              ? ((b = ("top" === x && !S) || ("bottom" === x && S)),
                (p = r.left),
                (h = v[P] - b * g.height))
              : "yAxis" === n &&
                ((b = ("left" === x && !S) || ("right" === x && S)),
                (p = v[P] - b * g.width),
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
                ? g.hide || (v[P] += (b ? -1 : 1) * R.width)
                : (v[P] += (b ? -1 : 1) * R.height),
              d(d({}, o), {}, y({}, a, R))
            );
          }, {});
        },
        b = function (t, e) {
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
        g = function (t) {
          var e = t.x1,
            r = t.y1,
            n = t.x2,
            i = t.y2;
          return b({ x: e, y: r }, { x: n, y: i });
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
                o = r.position;
              return i()(t, function (t, r) {
                return e[r].apply(t, { bandAware: n, position: o });
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
          i = (n * Math.PI) / 180,
          o = Math.atan(r / e),
          a = i > o && i < Math.PI - o ? r / Math.sin(i) : e / Math.cos(i);
        return Math.abs(a);
      };
    },
    37287: (t, e, r) => {
      "use strict";
      r.d(e, {
        By: () => wo,
        VO: () => mo,
        zF: () => Do,
        DO: () => Mo,
        Bu: () => Co,
        zT: () => Yo,
        qz: () => xo,
        pt: () => go,
        Yj: () => Fo,
        Fy: () => $o,
        Hv: () => zo,
        Rf: () => Po,
        gF: () => vo,
        s6: () => So,
        EB: () => Wo,
        fk: () => bo,
        wh: () => Lo,
        O3: () => Uo,
        uY: () => Eo,
        g$: () => Ro,
        Qo: () => Vo,
        F$: () => yo,
        NA: () => Ao,
        ko: () => Xo,
        ZI: () => jo,
        Hq: () => To,
        LG: () => Ho,
        Vv: () => No,
      });
      var n = {};
      r.r(n),
        r.d(n, {
          scaleBand: () => i.Z,
          scaleDiverging: () => Qn,
          scaleDivergingLog: () => ti,
          scaleDivergingPow: () => ri,
          scaleDivergingSqrt: () => ni,
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
          scaleSequential: () => Hn,
          scaleSequentialLog: () => Yn,
          scaleSequentialPow: () => Vn,
          scaleSequentialQuantile: () => Kn,
          scaleSequentialSqrt: () => Gn,
          scaleSequentialSymlog: () => Xn,
          scaleSqrt: () => fe,
          scaleSymlog: () => ie,
          scaleThreshold: () => Se,
          scaleTime: () => Un,
          scaleUtc: () => Wn,
          tickFormat: () => Ut,
        });
      var i = r(2514);
      const o = Math.sqrt(50),
        a = Math.sqrt(10),
        u = Math.sqrt(2);
      function c(t, e, r) {
        const n = (e - t) / Math.max(0, r),
          i = Math.floor(Math.log10(n)),
          l = n / Math.pow(10, i),
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
          p < f && 0.5 <= r && r < 2 ? c(t, e, 2 * r) : [f, p, h]
        );
      }
      function l(t, e, r) {
        if (!((r = +r) > 0)) return [];
        if ((t = +t) === (e = +e)) return [t];
        const n = e < t,
          [i, o, a] = n ? c(e, t, r) : c(t, e, r);
        if (!(o >= i)) return [];
        const u = o - i + 1,
          l = new Array(u);
        if (n)
          if (a < 0) for (let t = 0; t < u; ++t) l[t] = (o - t) / -a;
          else for (let t = 0; t < u; ++t) l[t] = (o - t) * a;
        else if (a < 0) for (let t = 0; t < u; ++t) l[t] = (i + t) / -a;
        else for (let t = 0; t < u; ++t) l[t] = (i + t) * a;
        return l;
      }
      function s(t, e, r) {
        return c((t = +t), (e = +e), (r = +r))[2];
      }
      function f(t, e, r) {
        r = +r;
        const n = (e = +e) < (t = +t),
          i = n ? s(e, t, r) : s(t, e, r);
        return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
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
            ? ((e = p), (r = (e, r) => p(t(e), r)), (n = (e, r) => t(e) - r))
            : ((e = t === p || t === h ? t : y), (r = t), (n = t)),
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
        P = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        E = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        k = /^#([0-9a-f]{3,8})$/,
        M = new RegExp(`^rgb\\(${A},${A},${A}\\)$`),
        T = new RegExp(`^rgb\\(${E},${E},${E}\\)$`),
        _ = new RegExp(`^rgba\\(${A},${A},${A},${P}\\)$`),
        D = new RegExp(`^rgba\\(${E},${E},${E},${P}\\)$`),
        C = new RegExp(`^hsl\\(${P},${E},${E}\\)$`),
        N = new RegExp(`^hsla\\(${P},${E},${E},${P}\\)$`),
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
                ? new U(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1,
                  )
                : 8 === r
                ? $(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255,
                  )
                : 4 === r
                ? $(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255,
                  )
                : null)
            : (e = M.exec(t))
            ? new U(e[1], e[2], e[3], 1)
            : (e = T.exec(t))
            ? new U(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1,
              )
            : (e = _.exec(t))
            ? $(e[1], e[2], e[3], e[4])
            : (e = D.exec(t))
            ? $(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4],
              )
            : (e = C.exec(t))
            ? X(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = N.exec(t))
            ? X(e[1], e[2] / 100, e[3] / 100, e[4])
            : I.hasOwnProperty(t)
            ? z(I[t])
            : "transparent" === t
            ? new U(NaN, NaN, NaN, 0)
            : null
        );
      }
      function z(t) {
        return new U((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function $(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN), new U(t, e, r, n);
      }
      function F(t, e, r, n) {
        return 1 === arguments.length
          ? ((i = t) instanceof O || (i = R(i)),
            i ? new U((i = i.rgb()).r, i.g, i.b, i.opacity) : new U())
          : new U(t, e, r, null == n ? 1 : n);
        var i;
      }
      function U(t, e, r, n) {
        (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
      }
      function W() {
        return `#${Y(this.r)}${Y(this.g)}${Y(this.b)}`;
      }
      function Z() {
        const t = q(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${H(this.r)}, ${H(this.g)}, ${H(
          this.b,
        )}${1 === t ? ")" : `, ${t})`}`;
      }
      function q(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function H(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function Y(t) {
        return ((t = H(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function X(t, e, r, n) {
        return (
          n <= 0
            ? (t = e = r = NaN)
            : r <= 0 || r >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new G(t, e, r, n)
        );
      }
      function V(t) {
        if (t instanceof G) return new G(t.h, t.s, t.l, t.opacity);
        if ((t instanceof O || (t = R(t)), !t)) return new G();
        if (t instanceof G) return t;
        var e = (t = t.rgb()).r / 255,
          r = t.g / 255,
          n = t.b / 255,
          i = Math.min(e, r, n),
          o = Math.max(e, r, n),
          a = NaN,
          u = o - i,
          c = (o + i) / 2;
        return (
          u
            ? ((a =
                e === o
                  ? (r - n) / u + 6 * (r < n)
                  : r === o
                  ? (n - e) / u + 2
                  : (e - r) / u + 4),
              (u /= c < 0.5 ? o + i : 2 - o - i),
              (a *= 60))
            : (u = c > 0 && c < 1 ? 0 : a),
          new G(a, u, c, t.opacity)
        );
      }
      function G(t, e, r, n) {
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
      function tt(t, e, r, n, i) {
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
          return V(this).formatHsl();
        },
        formatRgb: L,
        toString: L,
      }),
        x(
          U,
          F,
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? S : Math.pow(S, t)),
                new U(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? j : Math.pow(j, t)),
                new U(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new U(H(this.r), H(this.g), H(this.b), q(this.opacity));
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
              return `#${Y(this.r)}${Y(this.g)}${Y(this.b)}${Y(
                255 * (isNaN(this.opacity) ? 1 : this.opacity),
              )}`;
            },
            formatRgb: Z,
            toString: Z,
          }),
        ),
        x(
          G,
          function (t, e, r, n) {
            return 1 === arguments.length
              ? V(t)
              : new G(t, e, r, null == n ? 1 : n);
          },
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? S : Math.pow(S, t)),
                new G(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? j : Math.pow(j, t)),
                new G(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < 0.5 ? r : 1 - r) * e,
                i = 2 * r - n;
              return new U(
                Q(t >= 240 ? t - 240 : t + 120, i, n),
                Q(t, i, n),
                Q(t < 120 ? t + 240 : t - 120, i, n),
                this.opacity,
              );
            },
            clamp() {
              return new G(K(this.h), J(this.s), J(this.l), q(this.opacity));
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
          ? it
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
      function it(t, e) {
        var r = e - t;
        return r ? rt(t, r) : et(isNaN(t) ? e : t);
      }
      const ot = (function t(e) {
        var r = nt(e);
        function n(t, e) {
          var n = r((t = F(t)).r, (e = F(e)).r),
            i = r(t.g, e.g),
            o = r(t.b, e.b),
            a = it(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = n(e)),
              (t.g = i(e)),
              (t.b = o(e)),
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
            i = e.length,
            o = new Array(i),
            a = new Array(i),
            u = new Array(i);
          for (r = 0; r < i; ++r)
            (n = F(e[r])),
              (o[r] = n.r || 0),
              (a[r] = n.g || 0),
              (u[r] = n.b || 0);
          return (
            (o = t(o)),
            (a = t(a)),
            (u = t(u)),
            (n.opacity = 1),
            function (t) {
              return (n.r = o(t)), (n.g = a(t)), (n.b = u(t)), n + "";
            }
          );
        };
      }
      at(function (t) {
        var e = t.length - 1;
        return function (r) {
          var n =
              r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), e - 1) : Math.floor(r * e),
            i = t[n],
            o = t[n + 1],
            a = n > 0 ? t[n - 1] : 2 * i - o,
            u = n < e - 1 ? t[n + 2] : 2 * o - i;
          return tt((r - n / e) * e, a, i, o, u);
        };
      }),
        at(function (t) {
          var e = t.length;
          return function (r) {
            var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
              i = t[(n + e - 1) % e],
              o = t[n % e],
              a = t[(n + 1) % e],
              u = t[(n + 2) % e];
            return tt((r - n / e) * e, i, o, a, u);
          };
        });
      function ut(t, e) {
        var r,
          n = e ? e.length : 0,
          i = t ? Math.min(n, t.length) : 0,
          o = new Array(i),
          a = new Array(n);
        for (r = 0; r < i; ++r) o[r] = yt(t[r], e[r]);
        for (; r < n; ++r) a[r] = e[r];
        return function (t) {
          for (r = 0; r < i; ++r) a[r] = o[r](t);
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
          i = {};
        for (r in ((null !== t && "object" == typeof t) || (t = {}),
        (null !== e && "object" == typeof e) || (e = {}),
        e))
          r in t ? (n[r] = yt(t[r], e[r])) : (i[r] = e[r]);
        return function (t) {
          for (r in n) i[r] = n[r](t);
          return i;
        };
      }
      var ft = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        pt = new RegExp(ft.source, "g");
      function ht(t, e) {
        var r,
          n,
          i,
          o = (ft.lastIndex = pt.lastIndex = 0),
          a = -1,
          u = [],
          c = [];
        for (t += "", e += ""; (r = ft.exec(t)) && (n = pt.exec(e)); )
          (i = n.index) > o &&
            ((i = e.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)),
            (r = r[0]) === (n = n[0])
              ? u[a]
                ? (u[a] += n)
                : (u[++a] = n)
              : ((u[++a] = null), c.push({ i: a, x: lt(r, n) })),
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
                for (var r, n = 0; n < e; ++n) u[(r = c[n]).i] = r.x(t);
                return u.join("");
              })
        );
      }
      function dt(t, e) {
        e || (e = []);
        var r,
          n = t ? Math.min(e.length, t.length) : 0,
          i = e.slice();
        return function (o) {
          for (r = 0; r < n; ++r) i[r] = t[r] * (1 - o) + e[r] * o;
          return i;
        };
      }
      function yt(t, e) {
        var r,
          n,
          i = typeof e;
        return null == e || "boolean" === i
          ? et(e)
          : ("number" === i
              ? lt
              : "string" === i
              ? (r = R(e))
                ? ((e = r), ot)
                : ht
              : e instanceof R
              ? ot
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
          i = t[1],
          o = e[0],
          a = e[1];
        return (
          i < n
            ? ((n = xt(i, n)), (o = r(a, o)))
            : ((n = xt(n, i)), (o = r(o, a))),
          function (t) {
            return o(n(t));
          }
        );
      }
      function Ot(t, e, r) {
        var n = Math.min(t.length, e.length) - 1,
          i = new Array(n),
          o = new Array(n),
          a = -1;
        for (
          t[n] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < n;

        )
          (i[a] = xt(t[a], t[a + 1])), (o[a] = r(e[a], e[a + 1]));
        return function (e) {
          var r = g(t, e, 1, n) - 1;
          return o[r](i[r](e));
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
          i,
          o,
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
            return l(e((o || (o = n(u, a.map(t), lt)))(r)));
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
        Et = r(24701),
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
      function Dt(t) {
        return (t = _t(Math.abs(t))) ? t[1] : NaN;
      }
      function Ct(t, e) {
        var r = _t(t, e);
        if (!r) return t + "";
        var n = r[0],
          i = r[1];
        return i < 0
          ? "0." + new Array(-i).join("0") + n
          : n.length > i + 1
          ? n.slice(0, i + 1) + "." + n.slice(i + 1)
          : n + new Array(i - n.length + 2).join("0");
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
      const Nt = {
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
        p: (t, e) => Ct(100 * t, e),
        r: Ct,
        s: function (t, e) {
          var r = _t(t, e);
          if (!r) return t + "";
          var n = r[0],
            i = r[1],
            o = i - (Pt = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            a = n.length;
          return o === a
            ? n
            : o > a
            ? n + new Array(o - a + 1).join("0")
            : o > 0
            ? n.slice(0, o) + "." + n.slice(o)
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
        $t = [
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
            : Nt[b] || (void 0 === v && (v = 12), (m = !0), (b = "g")),
            (h || ("0" === e && "=" === r)) && ((h = !0), (e = "0"), (r = "="));
          var g =
              "$" === p
                ? i
                : "#" === p && /[boxX]/.test(b)
                ? "0" + b.toLowerCase()
                : "",
            x = "$" === p ? o : /[%p]/.test(b) ? c : "",
            w = Nt[b],
            O = /[defgprs%]/.test(b);
          function j(t) {
            var i,
              o,
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
                S && 0 == +t && "+" !== f && (S = !1),
                (p =
                  (S ? ("(" === f ? f : l) : "-" === f || "(" === f ? "" : f) +
                  p),
                (j =
                  ("s" === b ? $t[8 + Pt / 3] : "") +
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
            y && !h && (t = n(t, 1 / 0));
            var A = p.length + t.length + j.length,
              P = A < d ? new Array(d - A + 1).join(e) : "";
            switch (
              (y &&
                h &&
                ((t = n(P + t, P.length ? d - j.length : 1 / 0)), (P = "")),
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
              n = 3 * Math.max(-8, Math.min(8, Math.floor(Dt(e) / 3))),
              i = Math.pow(10, -n),
              o = $t[8 + n / 3];
            return function (t) {
              return r(i * t) + o;
            };
          },
        };
      }
      function Ut(t, e, r, n) {
        var i,
          o = f(t, e, r);
        switch ((n = Mt(null == n ? ",f" : n)).type) {
          case "s":
            var a = Math.max(Math.abs(t), Math.abs(e));
            return (
              null != n.precision ||
                isNaN(
                  (i = (function (t, e) {
                    return Math.max(
                      0,
                      3 * Math.max(-8, Math.min(8, Math.floor(Dt(e) / 3))) -
                        Dt(Math.abs(t)),
                    );
                  })(o, a)),
                ) ||
                (n.precision = i),
              Rt(n, a)
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
                    Math.max(0, Dt(e) - Dt(t)) + 1
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
                  return Math.max(0, -Dt(Math.abs(t)));
                })(o)),
              ) ||
              (n.precision = i - 2 * ("%" === n.type));
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
            return Ut(n[0], n[n.length - 1], null == t ? 10 : t, r);
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
              f = 10;
            for (
              l < c && ((i = c), (c = l), (l = i), (i = a), (a = u), (u = i));
              f-- > 0;

            ) {
              if ((i = s(c, l, r)) === n) return (o[a] = c), (o[u] = l), e(o);
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
      function Zt() {
        var t = At();
        return (
          (t.copy = function () {
            return jt(t, Zt());
          }),
          Et.o.apply(t, arguments),
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
      function Ht(t, e) {
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
      function Yt(t) {
        return Math.log(t);
      }
      function Xt(t) {
        return Math.exp(t);
      }
      function Vt(t) {
        return -Math.log(-t);
      }
      function Gt(t) {
        return -Math.exp(-t);
      }
      function Kt(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function Jt(t) {
        return (e, r) => -t(-e, r);
      }
      function Qt(t) {
        const e = t(Yt, Xt),
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
                ? Kt
                : t === Math.E
                ? Math.exp
                : (e) => Math.pow(t, e);
            })(o)),
            r()[0] < 0 ? ((n = Jt(n)), (i = Jt(i)), t(Vt, Gt)) : t(Yt, Xt),
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
            let s,
              f,
              p = n(a),
              h = n(u);
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
          (e.tickFormat = (t, r) => {
            if (
              (null == t && (t = 10),
              null == r && (r = 10 === o ? "s" : ","),
              "function" != typeof r &&
                (o % 1 || null != (r = Mt(r)).precision || (r.trim = !0),
                (r = Lt(r))),
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
              Ht(r(), {
                floor: (t) => i(Math.floor(n(t))),
                ceil: (t) => i(Math.ceil(n(t))),
              }),
            )),
          e
        );
      }
      function te() {
        const t = Qt(St()).domain([1, 10]);
        return (
          (t.copy = () => jt(t, te()).base(t.base())),
          Et.o.apply(t, arguments),
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
      function ie() {
        var t = ne(St());
        return (
          (t.copy = function () {
            return jt(t, ie()).constant(t.constant());
          }),
          Et.o.apply(t, arguments)
        );
      }
      (Bt = Ft({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (Lt = Bt.format),
        (Rt = Bt.formatPrefix);
      var oe = r(63051);
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
          Et.o.apply(t, arguments),
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
        function i(r) {
          var i = (function (t) {
            return Math.sign(t) * Math.sqrt(Math.abs(t));
          })(e(r));
          return isNaN(i) ? t : n ? Math.round(i) : i;
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
              ? (e.range((r = Array.from(t, mt)).map(pe)), i)
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
            return he(e.domain(), r).round(n).clamp(e.clamp()).unknown(t);
          }),
          Et.o.apply(i, arguments),
          Wt(i)
        );
      }
      function de(t, e) {
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
      function ye(t, e) {
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
      function be(t, e, r = 0, n = 1 / 0, i) {
        if (
          ((e = Math.floor(e)),
          (r = Math.floor(Math.max(0, r))),
          (n = Math.floor(Math.min(t.length - 1, n))),
          !(r <= e && e <= n))
        )
          return t;
        for (i = void 0 === i ? me : ve(i); n > r; ) {
          if (n - r > 600) {
            const o = n - r + 1,
              a = e - r + 1,
              u = Math.log(o),
              c = 0.5 * Math.exp((2 * u) / 3),
              l =
                0.5 *
                Math.sqrt((u * c * (o - c)) / o) *
                (a - o / 2 < 0 ? -1 : 1);
            be(
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
          for (ge(t, r, e), i(t[n], o) > 0 && ge(t, r, n); a < u; ) {
            for (ge(t, a, u), ++a, --u; i(t[a], o) < 0; ) ++a;
            for (; i(t[u], o) > 0; ) --u;
          }
          0 === i(t[r], o) ? ge(t, r, u) : (++u, ge(t, u, n)),
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
            i = (n - 1) * e,
            o = Math.floor(i),
            a = de(be(t, o).subarray(0, o + 1));
          return a + (ye(t.subarray(o + 1)) - a) * (i - o);
        }
      }
      function we(t, e, r = v) {
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
      function Oe() {
        var t,
          e = [],
          r = [],
          n = [];
        function i() {
          var t = 0,
            i = Math.max(1, r.length);
          for (n = new Array(i - 1); ++t < i; ) n[t - 1] = we(e, t / i);
          return o;
        }
        function o(e) {
          return null == e || isNaN((e = +e)) ? t : r[g(n, e)];
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
            return e.sort(p), i();
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
            return Oe().domain(e).range(r).unknown(t);
          }),
          Et.o.apply(o, arguments)
        );
      }
      function je() {
        var t,
          e = 0,
          r = 1,
          n = 1,
          i = [0.5],
          o = [0, 1];
        function a(e) {
          return null != e && e <= e ? o[g(i, e, 0, n)] : t;
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
            return je().domain([e, r]).range(o).unknown(t);
          }),
          Et.o.apply(Wt(a), arguments)
        );
      }
      function Se() {
        var t,
          e = [0.5],
          r = [0, 1],
          n = 1;
        function i(i) {
          return null != i && i <= i ? r[g(e, i, 0, n)] : t;
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
            return Se().domain(e).range(r).unknown(t);
          }),
          Et.o.apply(i, arguments)
        );
      }
      const Ae = 1e3,
        Pe = 6e4,
        Ee = 36e5,
        ke = 864e5,
        Me = 6048e5,
        Te = 2592e6,
        _e = 31536e6,
        De = new Date(),
        Ce = new Date();
      function Ne(t, e, r, n) {
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
            Ne(
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
              De.setTime(+e),
              Ce.setTime(+n),
              t(De),
              t(Ce),
              Math.floor(r(De, Ce))
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
      const Ie = Ne(
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
            ? Ne(
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
      const Be = Ne(
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
          Ne(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ae);
            },
            (t, e) => {
              t.setTime(+t + e * Pe);
            },
            (t, e) => (e - t) / Pe,
            (t) => t.getMinutes(),
          )),
        Re =
          (Le.range,
          Ne(
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
          (Re.range,
          Ne(
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
        $e =
          (ze.range,
          Ne(
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
          ($e.range,
          Ne(
            (t) => t.setHours(0, 0, 0, 0),
            (t, e) => t.setDate(t.getDate() + e),
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Pe) /
              ke,
            (t) => t.getDate() - 1,
          )),
        Ue =
          (Fe.range,
          Ne(
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
          (Ue.range,
          Ne(
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
        return Ne(
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
      const qe = Ze(0),
        He = Ze(1),
        Ye = Ze(2),
        Xe = Ze(3),
        Ve = Ze(4),
        Ge = Ze(5),
        Ke = Ze(6);
      qe.range, He.range, Ye.range, Xe.range, Ve.range, Ge.range, Ke.range;
      function Je(t) {
        return Ne(
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
        ir = Je(5),
        or = Je(6),
        ar =
          (Qe.range,
          tr.range,
          er.range,
          rr.range,
          nr.range,
          ir.range,
          or.range,
          Ne(
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
          Ne(
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
          Ne(
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
          ? Ne(
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
      const lr = Ne(
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
          ? Ne(
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
      function sr(t, e, r, n, i, o) {
        const a = [
          [Be, 1, Ae],
          [Be, 5, 5e3],
          [Be, 15, 15e3],
          [Be, 30, 3e4],
          [o, 1, Pe],
          [o, 5, 3e5],
          [o, 15, 9e5],
          [o, 30, 18e5],
          [i, 1, Ee],
          [i, 3, 108e5],
          [i, 6, 216e5],
          [i, 12, 432e5],
          [n, 1, ke],
          [n, 2, 1728e5],
          [r, 1, Me],
          [e, 1, Te],
          [e, 3, 7776e6],
          [t, 1, _e],
        ];
        function u(e, r, n) {
          const i = Math.abs(r - e) / n,
            o = d(([, , t]) => t).right(a, i);
          if (o === a.length) return t.every(f(e / _e, r / _e, n));
          if (0 === o) return Ie.every(Math.max(f(e, r, n), 1));
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
      const [fr, pr] = sr(lr, ur, Qe, We, $e, Re),
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
          i = (n ? -t : t) + "",
          o = i.length;
        return n + (o < r ? new Array(r - o + 1).join(e) + i : i);
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
      function Dr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.V = +n[0]), r + n[0].length) : -1;
      }
      function Cr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.W = +n[0]), r + n[0].length) : -1;
      }
      function Nr(t, e, r) {
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
      function $r(t, e, r) {
        var n = Or.exec(e.slice(r, r + 3));
        return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1;
      }
      function Fr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 2));
        return n ? ((t.H = +n[0]), r + n[0].length) : -1;
      }
      function Ur(t, e, r) {
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
      function Hr(t, e, r) {
        var n = jr.exec(e.slice(r, r + 1));
        return n ? r + n[0].length : -1;
      }
      function Yr(t, e, r) {
        var n = Or.exec(e.slice(r));
        return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
      }
      function Xr(t, e, r) {
        var n = Or.exec(e.slice(r));
        return n ? ((t.s = +n[0]), r + n[0].length) : -1;
      }
      function Vr(t, e) {
        return Ar(t.getDate(), e, 2);
      }
      function Gr(t, e) {
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
        return e >= 4 || 0 === e ? Ve(t) : Ve.ceil(t);
      }
      function cn(t, e) {
        return (
          (t = un(t)), Ar(Ve.count(cr(t), t) + (4 === cr(t).getDay()), e, 2)
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
      function dn(t, e) {
        var r = t.getDay();
        return Ar(
          (t = r >= 4 || 0 === r ? Ve(t) : Ve.ceil(t)).getFullYear() % 1e4,
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
        return Ar(1 + Ue.count(lr(t), t), e, 3);
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
      function Dn(t, e) {
        return Ar((t = En(t)).getUTCFullYear() % 100, e, 2);
      }
      function Cn(t, e) {
        return Ar(t.getUTCFullYear() % 1e4, e, 4);
      }
      function Nn(t, e) {
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
      function $n(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function Fn(t, e, r, n, i, o, a, u, c, l) {
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
              : o(t) < t
              ? v
              : n(t) < t
              ? i(t) < t
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
            return arguments.length ? p(Array.from(t, $n)) : p().map(zn);
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
            return jt(s, Fn(t, e, r, n, i, o, a, u, c, l));
          }),
          s
        );
      }
      function Un() {
        return Et.o.apply(
          Fn(hr, dr, cr, ar, qe, Fe, ze, Le, Be, gr).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function Wn() {
        return Et.o.apply(
          Fn(fr, pr, lr, ur, Qe, Ue, $e, Re, Be, xr).domain([
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
          i,
          o = 0,
          a = 1,
          u = gt,
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
          (l.range = s(yt)),
          (l.rangeRound = s(vt)),
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
      function qn(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function Hn() {
        var t = Wt(Zn()(gt));
        return (
          (t.copy = function () {
            return qn(t, Hn());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function Yn() {
        var t = Qt(Zn()).domain([1, 10]);
        return (
          (t.copy = function () {
            return qn(t, Yn()).base(t.base());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function Xn() {
        var t = ne(Zn());
        return (
          (t.copy = function () {
            return qn(t, Xn()).constant(t.constant());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function Vn() {
        var t = le(Zn());
        return (
          (t.copy = function () {
            return qn(t, Vn()).exponent(t.exponent());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function Gn() {
        return Vn.apply(null, arguments).exponent(0.5);
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
          Et.O.apply(r, arguments)
        );
      }
      function Jn() {
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
          f = gt,
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
                  void 0 === e && ((e = t), (t = yt));
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
              (r = a(l)),
              (n = t === e ? 0 : 0.5 / (e - t)),
              (i = e === r ? 0 : 0.5 / (r - e)),
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
          Et.O.apply(t, arguments)
        );
      }
      function ti() {
        var t = Qt(Jn()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return qn(t, ti()).base(t.base());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function ei() {
        var t = ne(Jn());
        return (
          (t.copy = function () {
            return qn(t, ei()).constant(t.constant());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function ri() {
        var t = le(Jn());
        return (
          (t.copy = function () {
            return qn(t, ri()).exponent(t.exponent());
          }),
          Et.O.apply(t, arguments)
        );
      }
      function ni() {
        return ri.apply(null, arguments).exponent(0.5);
      }
      function ii(t, e) {
        if ((i = t.length) > 1)
          for (var r, n, i, o = 1, a = t[e[0]], u = a.length; o < i; ++o)
            for (n = a, a = t[e[o]], r = 0; r < u; ++r)
              a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
      }
      !(function (t) {
        (br = (function (t) {
          var e = t.dateTime,
            r = t.date,
            n = t.time,
            i = t.periods,
            o = t.days,
            a = t.shortDays,
            u = t.months,
            c = t.shortMonths,
            l = Er(i),
            s = kr(i),
            f = Er(o),
            p = kr(o),
            h = Er(a),
            d = kr(a),
            y = Er(u),
            v = kr(u),
            m = Er(c),
            b = kr(c),
            g = {
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
              d: Vr,
              e: Vr,
              f: tn,
              g: pn,
              G: dn,
              H: Gr,
              I: Kr,
              j: Jr,
              L: Qr,
              m: en,
              M: rn,
              p: function (t) {
                return i[+(t.getHours() >= 12)];
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
                return o[t.getUTCDay()];
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
              g: Dn,
              G: Nn,
              H: mn,
              I: bn,
              j: gn,
              L: xn,
              m: On,
              M: jn,
              p: function (t) {
                return i[+(t.getUTCHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getUTCMonth() / 3);
              },
              Q: Ln,
              s: Rn,
              S: Sn,
              u: An,
              U: Pn,
              V: kn,
              w: Mn,
              W: Tn,
              x: null,
              X: null,
              y: _n,
              Y: Cn,
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
              G: Nr,
              H: Fr,
              I: Fr,
              j: $r,
              L: Zr,
              m: Rr,
              M: Ur,
              p: function (t, e, r) {
                var n = l.exec(e.slice(r));
                return n
                  ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length)
                  : -1;
              },
              q: Lr,
              Q: Yr,
              s: Xr,
              S: Wr,
              u: Tr,
              U: _r,
              V: Dr,
              w: Mr,
              W: Cr,
              x: function (t, e, n) {
                return S(t, r, e, n);
              },
              X: function (t, e, r) {
                return S(t, n, e, r);
              },
              y: Ir,
              Y: Nr,
              Z: Br,
              "%": Hr,
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
                  null != (i = wr[(n = t.charAt(++u))])
                    ? (n = t.charAt(++u))
                    : (i = "e" === n ? " " : "0"),
                  (o = e[n]) && (n = o(r, i)),
                  a.push(n),
                  (c = u + 1));
              return a.push(t.slice(c, u)), a.join("");
            };
          }
          function j(t, e) {
            return function (r) {
              var n,
                i,
                o = mr(1900, void 0, 1);
              if (S(o, t, (r += ""), 0) != r.length) return null;
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
                    ? ((i = (n = vr(mr(o.y, 0, 1))).getUTCDay()),
                      (n = i > 4 || 0 === i ? tr.ceil(n) : tr(n)),
                      (n = Ue.offset(n, 7 * (o.V - 1))),
                      (o.y = n.getUTCFullYear()),
                      (o.m = n.getUTCMonth()),
                      (o.d = n.getUTCDate() + ((o.w + 6) % 7)))
                    : ((i = (n = yr(mr(o.y, 0, 1))).getDay()),
                      (n = i > 4 || 0 === i ? He.ceil(n) : He(n)),
                      (n = Fe.offset(n, 7 * (o.V - 1))),
                      (o.y = n.getFullYear()),
                      (o.m = n.getMonth()),
                      (o.d = n.getDate() + ((o.w + 6) % 7)));
              } else
                ("W" in o || "U" in o) &&
                  ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0),
                  (i =
                    "Z" in o
                      ? vr(mr(o.y, 0, 1)).getUTCDay()
                      : yr(mr(o.y, 0, 1)).getDay()),
                  (o.m = 0),
                  (o.d =
                    "W" in o
                      ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                      : o.w + 7 * o.U - ((i + 6) % 7)));
              return "Z" in o
                ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), vr(o))
                : yr(o);
            };
          }
          function S(t, e, r, n) {
            for (var i, o, a = 0, u = e.length, c = r.length; a < u; ) {
              if (n >= c) return -1;
              if (37 === (i = e.charCodeAt(a++))) {
                if (
                  ((i = e.charAt(a++)),
                  !(o = w[i in wr ? e.charAt(a++) : i]) || (n = o(t, r, n)) < 0)
                )
                  return -1;
              } else if (i != r.charCodeAt(n++)) return -1;
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
      var oi = r(62478),
        ai = r(24792);
      function ui(t) {
        for (var e = t.length, r = new Array(e); --e >= 0; ) r[e] = e;
        return r;
      }
      function ci(t, e) {
        return t[e];
      }
      function li(t) {
        const e = [];
        return (e.key = t), e;
      }
      var si = r(14019),
        fi = r.n(si),
        pi = r(73398),
        hi = r.n(pi),
        di = r(51391),
        yi = r.n(di),
        vi = r(39277),
        mi = r.n(vi),
        bi = r(72139),
        gi = r.n(bi),
        xi = r(80089),
        wi = r.n(xi),
        Oi = r(22610),
        ji = r.n(Oi),
        Si = r(35813),
        Ai = r.n(Si),
        Pi = r(43483),
        Ei = r.n(Pi),
        ki = r(47184),
        Mi = r.n(ki),
        Ti = r(65853),
        _i = r.n(Ti),
        Di = r(26058),
        Ci = r.n(Di);
      function Ni(t) {
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
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
        $i = function t(e, r) {
          return 1 === e
            ? r
            : zi(function () {
                for (
                  var n = arguments.length, i = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  i[o] = arguments[o];
                var a = i.filter(function (t) {
                  return t !== Li;
                }).length;
                return a >= e
                  ? r.apply(void 0, i)
                  : t(
                      e - a,
                      zi(function () {
                        for (
                          var t = arguments.length, e = new Array(t), n = 0;
                          n < t;
                          n++
                        )
                          e[n] = arguments[n];
                        var o = i.map(function (t) {
                          return Ri(t) ? e.shift() : t;
                        });
                        return r.apply(void 0, Ni(o).concat(e));
                      }),
                    );
              });
        },
        Fi = function (t) {
          return $i(t.length, t);
        },
        Ui = function (t, e) {
          for (var r = [], n = t; n < e; ++n) r[n - t] = n;
          return r;
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
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          if (!e.length) return Bi;
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
        qi = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        Hi = function (t) {
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
      const Yi = {
        rangeStep: function (t, e, r) {
          for (var n = new (Ci())(t), i = 0, o = []; n.lt(e) && i < 1e5; )
            o.push(n.toNumber()), (n = n.add(r)), i++;
          return o;
        },
        getDigitCount: function (t) {
          return 0 === t
            ? 1
            : Math.floor(new (Ci())(t).abs().log(10).toNumber()) + 1;
        },
        interpolateNumber: Fi(function (t, e, r) {
          var n = +t;
          return n + r * (+e - n);
        }),
        uninterpolateNumber: Fi(function (t, e, r) {
          var n = e - +t;
          return (r - t) / (n = n || 1 / 0);
        }),
        uninterpolateTruncation: Fi(function (t, e, r) {
          var n = e - +t;
          return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - t) / n));
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
          Gi(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Vi(t, e) {
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
          Gi(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Gi(t, e) {
        if (t) {
          if ("string" == typeof t) return Ki(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Ki(t, e)
              : void 0
          );
        }
      }
      function Ki(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function Ji(t) {
        var e = Vi(t, 2),
          r = e[0],
          n = e[1],
          i = r,
          o = n;
        return r > n && ((i = n), (o = r)), [i, o];
      }
      function Qi(t, e, r) {
        if (t.lte(0)) return new (Ci())(0);
        var n = Yi.getDigitCount(t.toNumber()),
          i = new (Ci())(10).pow(n),
          o = t.div(i),
          a = 1 !== n ? 0.05 : 0.1,
          u = new (Ci())(Math.ceil(o.div(a).toNumber())).add(r).mul(a).mul(i);
        return e ? u : new (Ci())(Math.ceil(u));
      }
      function to(t, e, r) {
        var n = 1,
          i = new (Ci())(t);
        if (!i.isint() && r) {
          var o = Math.abs(t);
          o < 1
            ? ((n = new (Ci())(10).pow(Yi.getDigitCount(t) - 1)),
              (i = new (Ci())(Math.floor(i.div(n).toNumber())).mul(n)))
            : o > 1 && (i = new (Ci())(Math.floor(t)));
        } else
          0 === t
            ? (i = new (Ci())(Math.floor((e - 1) / 2)))
            : r || (i = new (Ci())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return Zi(
          Wi(function (t) {
            return i.add(new (Ci())(t - a).mul(n)).toNumber();
          }),
          Ui,
        )(0, e);
      }
      function eo(t, e, r, n) {
        var i =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        if (!Number.isFinite((e - t) / (r - 1)))
          return {
            step: new (Ci())(0),
            tickMin: new (Ci())(0),
            tickMax: new (Ci())(0),
          };
        var o,
          a = Qi(new (Ci())(e).sub(t).div(r - 1), n, i);
        o =
          t <= 0 && e >= 0
            ? new (Ci())(0)
            : (o = new (Ci())(t).add(e).div(2)).sub(new (Ci())(o).mod(a));
        var u = Math.ceil(o.sub(t).div(a).toNumber()),
          c = Math.ceil(new (Ci())(e).sub(o).div(a).toNumber()),
          l = u + c + 1;
        return l > r
          ? eo(t, e, r, n, i + 1)
          : (l < r &&
              ((c = e > 0 ? c + (r - l) : c), (u = e > 0 ? u : u + (r - l))),
            {
              step: a,
              tickMin: o.sub(new (Ci())(u).mul(a)),
              tickMax: o.add(new (Ci())(c).mul(a)),
            });
      }
      var ro = Hi(function (t) {
          var e = Vi(t, 2),
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
            u = Vi(Ji([r, n]), 2),
            c = u[0],
            l = u[1];
          if (c === -1 / 0 || l === 1 / 0) {
            var s =
              l === 1 / 0
                ? [c].concat(
                    Xi(
                      Ui(0, i - 1).map(function () {
                        return 1 / 0;
                      }),
                    ),
                  )
                : [].concat(
                    Xi(
                      Ui(0, i - 1).map(function () {
                        return -1 / 0;
                      }),
                    ),
                    [l],
                  );
            return r > n ? qi(s) : s;
          }
          if (c === l) return to(c, i, o);
          var f = eo(c, l, a, o),
            p = f.step,
            h = f.tickMin,
            d = f.tickMax,
            y = Yi.rangeStep(h, d.add(new (Ci())(0.1).mul(p)), p);
          return r > n ? qi(y) : y;
        }),
        no =
          (Hi(function (t) {
            var e = Vi(t, 2),
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
              u = Vi(Ji([r, n]), 2),
              c = u[0],
              l = u[1];
            if (c === -1 / 0 || l === 1 / 0) return [r, n];
            if (c === l) return to(c, i, o);
            var s = Qi(new (Ci())(l).sub(c).div(a - 1), o, 0),
              f = Zi(
                Wi(function (t) {
                  return new (Ci())(c).add(new (Ci())(t).mul(s)).toNumber();
                }),
                Ui,
              )(0, a).filter(function (t) {
                return t >= c && t <= l;
              });
            return r > n ? qi(f) : f;
          }),
          Hi(function (t, e) {
            var r = Vi(t, 2),
              n = r[0],
              i = r[1],
              o =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Vi(Ji([n, i]), 2),
              u = a[0],
              c = a[1];
            if (u === -1 / 0 || c === 1 / 0) return [n, i];
            if (u === c) return [u];
            var l = Math.max(e, 2),
              s = Qi(new (Ci())(c).sub(u).div(l - 1), o, 0),
              f = [].concat(
                Xi(
                  Yi.rangeStep(
                    new (Ci())(u),
                    new (Ci())(c).sub(new (Ci())(0.99).mul(s)),
                    s,
                  ),
                ),
                [c],
              );
            return n > i ? qi(f) : f;
          })),
        io = r(65370),
        oo = r(16171),
        ao = r(9410),
        uo = r(65436);
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
      function so(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? lo(Object(r), !0).forEach(function (e) {
                fo(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : lo(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
        }
        return t;
      }
      function fo(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== co(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== co(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === co(e) ? e : String(e);
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
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
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
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function yo(t, e, r) {
        return yi()(t) || yi()(e)
          ? r
          : (0, oo.P2)(e)
          ? wi()(t, e, r)
          : mi()(e)
          ? e(t)
          : r;
      }
      function vo(t, e, r, n) {
        var i = ji()(t, function (t) {
          return yo(t, e);
        });
        if ("number" === r) {
          var o = i.filter(function (t) {
            return (0, oo.hj)(t) || parseFloat(t);
          });
          return o.length ? [hi()(o), fi()(o)] : [1 / 0, -1 / 0];
        }
        return (
          n
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
                  o = n[c].index;
                  break;
                }
              } else {
                var m = Math.min(l, f),
                  b = Math.max(l, f);
                if (t > (m + s) / 2 && t <= (b + s) / 2) {
                  o = n[c].index;
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
                o = r[g].index;
                break;
              }
          return o;
        },
        bo = function (t) {
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
        go = function (t) {
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
            r = t.barCategoryGap,
            n = t.bandSize,
            i = t.sizeList,
            o = void 0 === i ? [] : i,
            a = t.maxBarSize,
            u = o.length;
          if (u < 1) return null;
          var c,
            l = (0, oo.h1)(e, n, 0, !0),
            s = [];
          if (o[0].barSize === +o[0].barSize) {
            var f = !1,
              p = n / u,
              h = o.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (h += (u - 1) * l) >= n && ((h -= (u - 1) * l), (l = 0)),
              h >= n && p > 0 && ((f = !0), (h = u * (p *= 0.9)));
            var d = { offset: (((n - h) / 2) >> 0) - l, size: 0 };
            c = o.reduce(function (t, e) {
              var r = {
                  item: e.item,
                  position: {
                    offset: d.offset + d.size + l,
                    size: f ? p : e.barSize,
                  },
                },
                n = [].concat(po(t), [r]);
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
            var y = (0, oo.h1)(r, n, 0, !0);
            n - 2 * y - (u - 1) * l <= 0 && (l = 0);
            var v = (n - 2 * y - (u - 1) * l) / u;
            v > 1 && (v >>= 0);
            var m = a === +a ? Math.min(v, a) : v;
            c = o.reduce(function (t, e, r) {
              var n = [].concat(po(t), [
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
        wo = function (t, e, r, n) {
          var i = r.children,
            o = r.width,
            a = r.margin,
            u = o - (a.left || 0) - (a.right || 0),
            c = (0, uo.z)({ children: i, legendWidth: u });
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
        Oo = function (t, e, r, n, i) {
          var o = e.props.children,
            a = (0, ao.NN)(o, io.W).filter(function (t) {
              return (function (t, e, r) {
                return (
                  !!yi()(e) ||
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
                var n = yo(e, r, 0),
                  i = Array.isArray(n) ? [hi()(n), fi()(n)] : [n, n],
                  o = u.reduce(
                    function (t, r) {
                      var n = yo(e, r, 0),
                        o = i[0] - Math.abs(Array.isArray(n) ? n[0] : n),
                        a = i[1] + Math.abs(Array.isArray(n) ? n[1] : n);
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
        jo = function (t, e, r, n, i) {
          var o = e
            .map(function (e) {
              return Oo(t, e, r, i, n);
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
        So = function (t, e, r, n, i) {
          var o = e.map(function (e) {
            var o = e.props.dataKey;
            return ("number" === r && o && Oo(t, e, o, n)) || vo(t, o, r, i);
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
        Ao = function (t, e) {
          return (
            ("horizontal" === t && "xAxis" === e) ||
            ("vertical" === t && "yAxis" === e) ||
            ("centric" === t && "angleAxis" === e) ||
            ("radial" === t && "radiusAxis" === e)
          );
        },
        Po = function (t, e, r, n) {
          if (n)
            return t.map(function (t) {
              return t.coordinate;
            });
          var i,
            o,
            a = t.map(function (t) {
              return (
                t.coordinate === e && (i = !0),
                t.coordinate === r && (o = !0),
                t.coordinate
              );
            });
          return i || a.push(e), o || a.push(r), a;
        },
        Eo = function (t, e, r) {
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
              "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2
                ? 2 * (0, oo.uY)(a[0] - a[1]) * c
                : c),
            e && (t.ticks || t.niceTicks)
              ? (t.ticks || t.niceTicks)
                  .map(function (t) {
                    var e = i ? i.indexOf(t) : t;
                    return { coordinate: n(e) + c, value: t, offset: c };
                  })
                  .filter(function (t) {
                    return !Ai()(t.coordinate);
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
        ko = new WeakMap(),
        Mo = function (t, e) {
          if ("function" != typeof e) return t;
          ko.has(t) || ko.set(t, new WeakMap());
          var r = ko.get(t);
          if (r.has(e)) return r.get(e);
          var n = function () {
            t.apply(void 0, arguments), e.apply(void 0, arguments);
          };
          return r.set(e, n), n;
        },
        To = function (t, e, r) {
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
                  (e.indexOf("ComposedChart") >= 0 && !r))
              ? { scale: i.x(), realScaleType: "point" }
              : "category" === a
              ? { scale: i.Z(), realScaleType: "band" }
              : { scale: Zt(), realScaleType: "linear" };
          if (gi()(o)) {
            var l = "scale".concat(Ei()(o));
            return {
              scale: (n[l] || i.x)(),
              realScaleType: n[l] ? l : "point",
            };
          }
          return mi()(o)
            ? { scale: o }
            : { scale: i.x(), realScaleType: "point" };
        },
        _o = 1e-4,
        Do = function (t) {
          var e = t.domain();
          if (e && !(e.length <= 2)) {
            var r = e.length,
              n = t.range(),
              i = Math.min(n[0], n[1]) - _o,
              o = Math.max(n[0], n[1]) + _o,
              a = t(e[0]),
              u = t(e[r - 1]);
            (a < i || a > o || u < i || u > o) && t.domain([e[0], e[r - 1]]);
          }
        },
        Co = function (t, e) {
          if (!t) return null;
          for (var r = 0, n = t.length; r < n; r++)
            if (t[r].item === e) return t[r].position;
          return null;
        },
        No = function (t, e) {
          if (!e || 2 !== e.length || !(0, oo.hj)(e[0]) || !(0, oo.hj)(e[1]))
            return t;
          var r = Math.min(e[0], e[1]),
            n = Math.max(e[0], e[1]),
            i = [t[0], t[1]];
          return (
            (!(0, oo.hj)(t[0]) || t[0] < r) && (i[0] = r),
            (!(0, oo.hj)(t[1]) || t[1] > n) && (i[1] = n),
            i[0] > n && (i[0] = n),
            i[1] < r && (i[1] = r),
            i
          );
        },
        Io = {
          sign: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var i = 0, o = 0, a = 0; a < e; ++a) {
                  var u = Ai()(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
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
              ii(t, e);
            }
          },
          none: ii,
          silhouette: function (t, e) {
            if ((r = t.length) > 0) {
              for (var r, n = 0, i = t[e[0]], o = i.length; n < o; ++n) {
                for (var a = 0, u = 0; a < r; ++a) u += t[a][n][1] || 0;
                i[n][1] += i[n][0] = -u / 2;
              }
              ii(t, e);
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
              (r[a - 1][1] += r[a - 1][0] = o), ii(t, e);
            }
          },
          positive: function (t) {
            var e = t.length;
            if (!(e <= 0))
              for (var r = 0, n = t[0].length; r < n; ++r)
                for (var i = 0, o = 0; o < e; ++o) {
                  var a = Ai()(t[o][r][1]) ? t[o][r][0] : t[o][r][1];
                  a >= 0
                    ? ((t[o][r][0] = i), (t[o][r][1] = i + a), (i = t[o][r][1]))
                    : ((t[o][r][0] = 0), (t[o][r][1] = 0));
                }
          },
        },
        Bo = function (t, e, r) {
          var n = e.map(function (t) {
              return t.props.dataKey;
            }),
            i = Io[r],
            o = (function () {
              var t = (0, ai.Z)([]),
                e = ui,
                r = ii,
                n = ci;
              function i(i) {
                var o,
                  a,
                  u = Array.from(t.apply(this, arguments), li),
                  c = u.length,
                  l = -1;
                for (const t of i)
                  for (o = 0, ++l; o < c; ++o)
                    (u[o][l] = [0, +n(t, u[o].key, l, i)]).data = t;
                for (o = 0, a = (0, oi.Z)(e(u)); o < c; ++o) u[a[o]].index = o;
                return r(u, a), u;
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
                    ? ((n = "function" == typeof t ? t : (0, ai.Z)(+t)), i)
                    : n;
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
                  return arguments.length ? ((r = null == t ? ii : t), i) : r;
                }),
                i
              );
            })()
              .keys(n)
              .value(function (t, e) {
                return +yo(t, e, 0);
              })
              .order(ui)
              .offset(i);
          return o(t);
        },
        Lo = function (t, e, r, n, i, o) {
          if (!t) return null;
          var a = (o ? e.reverse() : e).reduce(function (t, e) {
            var i = e.props,
              o = i.stackId;
            if (i.hide) return t;
            var a = e.props[r],
              u = t[a] || { hasStack: !1, stackGroups: {} };
            if ((0, oo.P2)(o)) {
              var c = u.stackGroups[o] || {
                numericAxisId: r,
                cateAxisId: n,
                items: [],
              };
              c.items.push(e), (u.hasStack = !0), (u.stackGroups[o] = c);
            } else
              u.stackGroups[(0, oo.EL)("_stackId_")] = {
                numericAxisId: r,
                cateAxisId: n,
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
                    numericAxisId: r,
                    cateAxisId: n,
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
            var l = ro(c, i, a);
            return t.domain([hi()(l), fi()(l)]), { niceTicks: l };
          }
          if (i && "number" === n) {
            var s = t.domain();
            return { niceTicks: no(s, i, a) };
          }
          return null;
        },
        zo = function (t) {
          var e = t.axis,
            r = t.ticks,
            n = t.bandSize,
            i = t.entry,
            o = t.index,
            a = t.dataKey;
          if ("category" === e.type) {
            if (
              !e.allowDuplicatedCategory &&
              e.dataKey &&
              !yi()(i[e.dataKey])
            ) {
              var u = (0, oo.Ap)(r, "value", i[e.dataKey]);
              if (u) return u.coordinate + n / 2;
            }
            return r[o] ? r[o].coordinate + n / 2 : null;
          }
          var c = yo(i, yi()(a) ? e.dataKey : a);
          return yi()(c) ? null : e.scale(c);
        },
        $o = function (t) {
          var e = t.axis,
            r = t.ticks,
            n = t.offset,
            i = t.bandSize,
            o = t.entry,
            a = t.index;
          if ("category" === e.type) return r[a] ? r[a].coordinate + n : null;
          var u = yo(o, e.dataKey, e.domain[a]);
          return yi()(u) ? null : e.scale(u) - i / 2 + n;
        },
        Fo = function (t) {
          var e = t.numericAxis,
            r = e.scale.domain();
          if ("number" === e.type) {
            var n = Math.min(r[0], r[1]),
              i = Math.max(r[0], r[1]);
            return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
          }
          return r[0];
        },
        Uo = function (t, e) {
          var r = t.props.stackId;
          if ((0, oo.P2)(r)) {
            var n = e[r];
            if (n) {
              var i = n.items.indexOf(t);
              return i >= 0 ? n.stackedData[i] : null;
            }
          }
          return null;
        },
        Wo = function (t, e, r) {
          return Object.keys(t)
            .reduce(
              function (n, i) {
                var o = t[i].stackedData.reduce(
                  function (t, n) {
                    var i = n.slice(e, r + 1).reduce(
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
                return [Math.min(o[0], n[0]), Math.max(o[1], n[1])];
              },
              [1 / 0, -1 / 0],
            )
            .map(function (t) {
              return t === 1 / 0 || t === -1 / 0 ? 0 : t;
            });
        },
        Zo = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        qo = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        Ho = function (t, e, r) {
          if (mi()(t)) return t(e, r);
          if (!Array.isArray(t)) return e;
          var n = [];
          if ((0, oo.hj)(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
          else if (Zo.test(t[0])) {
            var i = +Zo.exec(t[0])[1];
            n[0] = e[0] - i;
          } else mi()(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
          if ((0, oo.hj)(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
          else if (qo.test(t[1])) {
            var o = +qo.exec(t[1])[1];
            n[1] = e[1] + o;
          } else mi()(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
          return n;
        },
        Yo = function (t, e, r) {
          if (t && t.scale && t.scale.bandwidth) {
            var n = t.scale.bandwidth();
            if (!r || n > 0) return n;
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
          return r ? void 0 : 0;
        },
        Xo = function (t, e, r) {
          return t && t.length
            ? Mi()(t, wi()(r, "type.defaultProps.domain"))
              ? e
              : t
            : e;
        },
        Vo = function (t, e) {
          var r = t.props,
            n = r.dataKey,
            i = r.name,
            o = r.unit,
            a = r.formatter,
            u = r.tooltipType,
            c = r.chartType;
          return so(
            so({}, (0, ao.L6)(t)),
            {},
            {
              dataKey: n,
              unit: o,
              formatter: a,
              name: i || n,
              color: bo(t),
              value: yo(e, n),
              type: u,
              payload: e,
              chartType: c,
            },
          );
        };
    },
    99875: (t, e, r) => {
      "use strict";
      r.d(e, { os: () => p, xE: () => f });
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
            i =
              ((r = a({}, e)),
              Object.keys(r).forEach(function (t) {
                r[t] || delete r[t];
              }),
              r),
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
    16171: (t, e, r) => {
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
      var n = r(72139),
        i = r.n(n),
        o = r(35813),
        a = r.n(o),
        u = r(80089),
        c = r.n(u),
        l = r(47315),
        s = r.n(l),
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
          var r,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!h(t) && !i()(t)) return n;
          if (p(t)) {
            var u = t.indexOf("%");
            r = (e * parseFloat(t.slice(0, u))) / 100;
          } else r = +t;
          return a()(r) && (r = n), o && r > e && (r = e), r;
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
      r.d(e, {
        $4: () => v,
        Wk: () => h,
        op: () => y,
        t9: () => m,
        z3: () => x,
      });
      var n = r(51391),
        i = r.n(n),
        o = r(16171),
        a = r(37287);
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
            y = (0, o.h1)(t.cx, c, c / 2),
            m = (0, o.h1)(t.cy, p, p / 2),
            b = v(c, p, r),
            g = (0, o.h1)(t.innerRadius, b, 0),
            x = (0, o.h1)(t.outerRadius, b, 0.8 * b);
          return Object.keys(e).reduce(function (t, r) {
            var o,
              c = e[r],
              p = c.domain,
              v = c.reversed;
            if (i()(c.range))
              "angleAxis" === n
                ? (o = [h, d])
                : "radiusAxis" === n && (o = [g, x]),
                v && (o = [o[1], o[0]]);
            else {
              var b = f((o = c.range), 2);
              (h = b[0]), (d = b[1]);
            }
            var w = (0, a.Hq)(c, u),
              O = w.realScaleType,
              j = w.scale;
            j.domain(p).range(o), (0, a.zF)(j);
            var S = (0, a.g$)(j, l(l({}, c), {}, { realScaleType: O })),
              A = l(
                l(l({}, c), S),
                {},
                {
                  range: o,
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
            i,
            o,
            a,
            u,
            c = t.x,
            l = t.y,
            s = e.cx,
            f = e.cy,
            p =
              ((n = { x: s, y: f }),
              (i = (r = { x: c, y: l }).x),
              (o = r.y),
              (a = n.x),
              (u = n.y),
              Math.sqrt(Math.pow(i - a, 2) + Math.pow(o - u, 2)));
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
            i = Math.floor(r / 360),
            o = Math.floor(n / 360);
          return t + 360 * Math.min(i, o);
        },
        x = function (t, e) {
          var r = t.x,
            n = t.y,
            i = b({ x: r, y: n }, e),
            o = i.radius,
            a = i.angle,
            u = e.innerRadius,
            c = e.outerRadius;
          if (o < u || o > c) return !1;
          if (0 === o) return !0;
          var s,
            f = (function (t) {
              var e = t.startAngle,
                r = t.endAngle,
                n = Math.floor(e / 360),
                i = Math.floor(r / 360),
                o = Math.min(n, i);
              return { startAngle: e - 360 * o, endAngle: r - 360 * o };
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
          return s ? l(l({}, e), {}, { radius: o, angle: g(d, e) }) : null;
        };
    },
    9410: (t, e, r) => {
      "use strict";
      r.d(e, {
        $R: () => R,
        $k: () => D,
        Bh: () => L,
        Gf: () => j,
        L6: () => C,
        NN: () => E,
        TT: () => M,
        eu: () => B,
        rL: () => N,
        sP: () => k,
      });
      var n = r(80089),
        i = r.n(n),
        o = r(51391),
        a = r.n(o),
        u = r(72139),
        c = r.n(u),
        l = r(39277),
        s = r.n(l),
        f = r(23619),
        p = r.n(f),
        h = r(89526),
        d = r(338),
        y = r(16171),
        v = r(68201),
        m = r(33790),
        b = ["children"],
        g = ["children"];
      function x(t, e) {
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
        P = function t(e) {
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
            var e = i()(t, "type.displayName") || i()(t, "type.name");
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
          return !(!(0, y.hj)(r) || r <= 0 || !(0, y.hj)(n) || n <= 0);
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
        D = function (t) {
          return t && "object" === w(t) && "cx" in t && "cy" in t && "r" in t;
        },
        C = function (t, e, r) {
          if (!t || "function" == typeof t || "boolean" == typeof t)
            return null;
          var n = t;
          if (((0, h.isValidElement)(t) && (n = t.props), !p()(n))) return null;
          var i = {};
          return (
            Object.keys(n).forEach(function (t) {
              var o;
              (function (t, e, r, n) {
                var i,
                  o =
                    null !==
                      (i =
                        null === m.ry || void 0 === m.ry ? void 0 : m.ry[n]) &&
                    void 0 !== i
                      ? i
                      : [];
                return (
                  (!s()(t) && ((n && o.includes(e)) || m.Yh.includes(e))) ||
                  (r && m.nv.includes(e))
                );
              })(null === (o = n) || void 0 === o ? void 0 : o[t], t, e, r) &&
                (i[t] = n[t]);
            }),
            i
          );
        },
        N = function t(e, r) {
          if (e === r) return !0;
          var n = h.Children.count(e);
          if (n !== h.Children.count(r)) return !1;
          if (0 === n) return !0;
          if (1 === n)
            return I(Array.isArray(e) ? e[0] : e, Array.isArray(r) ? r[0] : r);
          for (var i = 0; i < n; i++) {
            var o = e[i],
              a = r[i];
            if (Array.isArray(o) || Array.isArray(a)) {
              if (!t(o, a)) return !1;
            } else if (!I(o, a)) return !1;
          }
          return !0;
        },
        I = function (t, e) {
          if (a()(t) && a()(e)) return !0;
          if (!a()(t) && !a()(e)) {
            var r = t.props || {},
              n = r.children,
              i = x(r, b),
              o = e.props || {},
              u = o.children,
              c = x(o, g);
            return n && u
              ? (0, v.w)(i, c) && N(n, u)
              : !n && !u && (0, v.w)(i, c);
          }
          return !1;
        },
        B = function (t, e) {
          var r = [],
            n = {};
          return (
            P(t).forEach(function (t, i) {
              if (_(t)) r.push(t);
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
          return e && O[e] ? O[e] : null;
        },
        R = function (t, e) {
          return P(e).indexOf(t);
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
    65436: (t, e, r) => {
      "use strict";
      r.d(e, { z: () => s });
      var n = r(98241),
        i = r(37287),
        o = r(9410);
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
          s = (0, o.sP)(r, n.D);
        return s
          ? ((e =
              s.props && s.props.payload
                ? s.props && s.props.payload
                : "children" === l
                ? (a || []).reduce(function (t, e) {
                    var r = e.item,
                      n = e.props,
                      i = n.sectors || n.data || [];
                    return t.concat(
                      i.map(function (t) {
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
                      o = r.name,
                      a = r.legendType;
                    return {
                      inactive: r.hide,
                      dataKey: n,
                      type: s.props.iconType || a || "square",
                      color: (0, i.fk)(e),
                      value: o || n,
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
    56062: (t, e, r) => {
      "use strict";
      r.d(e, { z: () => u });
      var n = r(80971),
        i = r.n(n),
        o = r(39277),
        a = r.n(o);
      function u(t, e, r) {
        return !0 === e ? i()(t, r) : a()(e) ? i()(t, e) : t;
      }
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
      var n = r(89526),
        i = r(23619),
        o = r.n(i);
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
          if (((0, n.isValidElement)(t) && (r = t.props), !o()(r))) return null;
          var i = {};
          return (
            Object.keys(r).forEach(function (t) {
              s.includes(t) &&
                (i[t] =
                  e ||
                  function (e) {
                    return r[t](r, e);
                  });
            }),
            i
          );
        },
        p = function (t, e, r) {
          if (!o()(t) || "object" !== a(t)) return null;
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
                b = Math.sqrt(v),
                g = Math.sqrt(h),
                x =
                  a * Math.tan((n - Math.acos((v + h - m) / (2 * b * g))) / 2),
                w = x / g,
                O = x / b;
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

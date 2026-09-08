/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [18680],
  {
    14469: function (t, e, r) {
      var n; /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */
      !(function () {
        "use strict";
        var o,
          i = 1e9,
          a = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
          },
          c = !0,
          u = "[DecimalError] ",
          l = u + "Invalid argument: ",
          s = u + "Exponent out of range: ",
          f = Math.floor,
          p = Math.pow,
          h = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          y = 1e7,
          d = 9007199254740991,
          v = f(1286742750677284.5),
          m = {};
        function b(t, e) {
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
          if (!t.s || !e.s) return e.s || (e = new f(t)), c ? k(e, p) : e;
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
                i > (u = (a = Math.ceil(p / 7)) > u ? a + 1 : u + 1) &&
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
          return (e.d = l), (e.e = o), c ? k(e, p) : e;
        }
        function g(t, e, r) {
          if (t !== ~~t || t < e || t > r) throw Error(l + t);
        }
        function x(t) {
          var e,
            r,
            n,
            o = t.length - 1,
            i = "",
            a = t[0];
          if (o > 0) {
            for (i += a, e = 1; e < o; e++)
              (r = 7 - (n = t[e] + "").length) && (i += S(r)), (i += n);
            (r = 7 - (n = (a = t[e]) + "").length) && (i += S(r));
          } else if (0 === a) return "0";
          for (; a % 10 == 0; ) a /= 10;
          return i + a;
        }
        (m.absoluteValue = m.abs =
          function () {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
          }),
          (m.comparedTo = m.cmp =
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
          (m.decimalPlaces = m.dp =
            function () {
              var t = this,
                e = t.d.length - 1,
                r = 7 * (e - t.e);
              if ((e = t.d[e])) for (; e % 10 == 0; e /= 10) r--;
              return r < 0 ? 0 : r;
            }),
          (m.dividedBy = m.div =
            function (t) {
              return w(this, new this.constructor(t));
            }),
          (m.dividedToIntegerBy = m.idiv =
            function (t) {
              var e = this.constructor;
              return k(w(this, new e(t), 0, 1), e.precision);
            }),
          (m.equals = m.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (m.exponent = function () {
            return j(this);
          }),
          (m.greaterThan = m.gt =
            function (t) {
              return this.cmp(t) > 0;
            }),
          (m.greaterThanOrEqualTo = m.gte =
            function (t) {
              return this.cmp(t) >= 0;
            }),
          (m.isInteger = m.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (m.isNegative = m.isneg =
            function () {
              return this.s < 0;
            }),
          (m.isPositive = m.ispos =
            function () {
              return this.s > 0;
            }),
          (m.isZero = function () {
            return 0 === this.s;
          }),
          (m.lessThan = m.lt =
            function (t) {
              return this.cmp(t) < 0;
            }),
          (m.lessThanOrEqualTo = m.lte =
            function (t) {
              return this.cmp(t) < 1;
            }),
          (m.logarithm = m.log =
            function (t) {
              var e,
                r = this,
                n = r.constructor,
                i = n.precision,
                a = i + 5;
              if (void 0 === t) t = new n(10);
              else if ((t = new n(t)).s < 1 || t.eq(o)) throw Error(u + "NaN");
              if (r.s < 1) throw Error(u + (r.s ? "NaN" : "-Infinity"));
              return r.eq(o)
                ? new n(0)
                : ((c = !1), (e = w(P(r, a), P(t, a), a)), (c = !0), k(e, i));
            }),
          (m.minus = m.sub =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? M(e, t) : b(e, ((t.s = -t.s), t))
              );
            }),
          (m.modulo = m.mod =
            function (t) {
              var e,
                r = this,
                n = r.constructor,
                o = n.precision;
              if (!(t = new n(t)).s) throw Error(u + "NaN");
              return r.s
                ? ((c = !1), (e = w(r, t, 0, 1).times(t)), (c = !0), r.minus(e))
                : k(new n(r), o);
            }),
          (m.naturalExponential = m.exp =
            function () {
              return O(this);
            }),
          (m.naturalLogarithm = m.ln =
            function () {
              return P(this);
            }),
          (m.negated = m.neg =
            function () {
              var t = new this.constructor(this);
              return (t.s = -t.s || 0), t;
            }),
          (m.plus = m.add =
            function (t) {
              var e = this;
              return (
                (t = new e.constructor(t)),
                e.s == t.s ? b(e, t) : M(e, ((t.s = -t.s), t))
              );
            }),
          (m.precision = m.sd =
            function (t) {
              var e,
                r,
                n,
                o = this;
              if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
                throw Error(l + t);
              if (
                ((e = j(o) + 1),
                (r = 7 * (n = o.d.length - 1) + 1),
                (n = o.d[n]))
              ) {
                for (; n % 10 == 0; n /= 10) r--;
                for (n = o.d[0]; n >= 10; n /= 10) r++;
              }
              return t && e > r ? e : r;
            }),
          (m.squareRoot = m.sqrt =
            function () {
              var t,
                e,
                r,
                n,
                o,
                i,
                a,
                l = this,
                s = l.constructor;
              if (l.s < 1) {
                if (!l.s) return new s(0);
                throw Error(u + "NaN");
              }
              for (
                t = j(l),
                  c = !1,
                  0 == (o = Math.sqrt(+l)) || o == 1 / 0
                    ? (((e = x(l.d)).length + t) % 2 == 0 && (e += "0"),
                      (o = Math.sqrt(e)),
                      (t = f((t + 1) / 2) - (t < 0 || t % 2)),
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
                  ((n = (i = n).plus(w(l, i, a + 2)).times(0.5)),
                  x(i.d).slice(0, a) === (e = x(n.d)).slice(0, a))
                ) {
                  if (((e = e.slice(a - 3, a + 1)), o == a && "4999" == e)) {
                    if ((k(i, r + 1, 0), i.times(i).eq(l))) {
                      n = i;
                      break;
                    }
                  } else if ("9999" != e) break;
                  a += 4;
                }
              return (c = !0), k(n, r);
            }),
          (m.times = m.mul =
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
                    (i[o--] = (u % y) | 0),
                    (e = (u / y) | 0);
                i[o] = ((i[o] + e) % y) | 0;
              }
              for (; !i[--a]; ) i.pop();
              return (
                e ? ++r : i.shift(),
                (t.d = i),
                (t.e = r),
                c ? k(t, p.precision) : t
              );
            }),
          (m.toDecimalPlaces = m.todp =
            function (t, e) {
              var r = this,
                n = r.constructor;
              return (
                (r = new n(r)),
                void 0 === t
                  ? r
                  : (g(t, 0, i),
                    void 0 === e ? (e = n.rounding) : g(e, 0, 8),
                    k(r, t + j(r) + 1, e))
              );
            }),
          (m.toExponential = function (t, e) {
            var r,
              n = this,
              o = n.constructor;
            return (
              void 0 === t
                ? (r = T(n, !0))
                : (g(t, 0, i),
                  void 0 === e ? (e = o.rounding) : g(e, 0, 8),
                  (r = T((n = k(new o(n), t + 1, e)), !0, t + 1))),
              r
            );
          }),
          (m.toFixed = function (t, e) {
            var r,
              n,
              o = this,
              a = o.constructor;
            return void 0 === t
              ? T(o)
              : (g(t, 0, i),
                void 0 === e ? (e = a.rounding) : g(e, 0, 8),
                (r = T(
                  (n = k(new a(o), t + j(o) + 1, e)).abs(),
                  !1,
                  t + j(n) + 1,
                )),
                o.isneg() && !o.isZero() ? "-" + r : r);
          }),
          (m.toInteger = m.toint =
            function () {
              var t = this,
                e = t.constructor;
              return k(new e(t), j(t) + 1, e.rounding);
            }),
          (m.toNumber = function () {
            return +this;
          }),
          (m.toPower = m.pow =
            function (t) {
              var e,
                r,
                n,
                i,
                a,
                l,
                s = this,
                p = s.constructor,
                h = +(t = new p(t));
              if (!t.s) return new p(o);
              if (!(s = new p(s)).s) {
                if (t.s < 1) throw Error(u + "Infinity");
                return s;
              }
              if (s.eq(o)) return s;
              if (((n = p.precision), t.eq(o))) return k(s, n);
              if (((l = (e = t.e) >= (r = t.d.length - 1)), (a = s.s), l)) {
                if ((r = h < 0 ? -h : h) <= d) {
                  for (
                    i = new p(o), e = Math.ceil(n / 7 + 4), c = !1;
                    r % 2 && _((i = i.times(s)).d, e), 0 !== (r = f(r / 2));
                  )
                    _((s = s.times(s)).d, e);
                  return (c = !0), t.s < 0 ? new p(o).div(i) : k(i, n);
                }
              } else if (a < 0) throw Error(u + "NaN");
              return (
                (a = a < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
                (s.s = 1),
                (c = !1),
                (i = t.times(P(s, n + 12))),
                (c = !0),
                ((i = O(i)).s = a),
                i
              );
            }),
          (m.toPrecision = function (t, e) {
            var r,
              n,
              o = this,
              a = o.constructor;
            return (
              void 0 === t
                ? (n = T(o, (r = j(o)) <= a.toExpNeg || r >= a.toExpPos))
                : (g(t, 1, i),
                  void 0 === e ? (e = a.rounding) : g(e, 0, 8),
                  (n = T(
                    (o = k(new a(o), t, e)),
                    t <= (r = j(o)) || r <= a.toExpNeg,
                    t,
                  ))),
              n
            );
          }),
          (m.toSignificantDigits = m.tosd =
            function (t, e) {
              var r = this.constructor;
              return (
                void 0 === t
                  ? ((t = r.precision), (e = r.rounding))
                  : (g(t, 1, i), void 0 === e ? (e = r.rounding) : g(e, 0, 8)),
                k(new r(this), t, e)
              );
            }),
          (m.toString =
            m.valueOf =
            m.val =
            m.toJSON =
              function () {
                var t = this,
                  e = j(t),
                  r = t.constructor;
                return T(t, e <= r.toExpNeg || e >= r.toExpPos);
              });
        var w = (function () {
          function t(t, e) {
            var r,
              n = 0,
              o = t.length;
            for (t = t.slice(); o--; )
              (r = t[o] * e + n), (t[o] = (r % y) | 0), (n = (r / y) | 0);
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
            var c,
              l,
              s,
              f,
              p,
              h,
              d,
              v,
              m,
              b,
              g,
              x,
              w,
              O,
              A,
              S,
              P,
              E,
              M = n.constructor,
              T = n.s == o.s ? 1 : -1,
              _ = n.d,
              C = o.d;
            if (!n.s) return new M(n);
            if (!o.s) throw Error(u + "Division by zero");
            for (
              l = n.e - o.e,
                P = C.length,
                A = _.length,
                v = (d = new M(T)).d = [],
                s = 0;
              C[s] == (_[s] || 0);
            )
              ++s;
            if (
              (C[s] > (_[s] || 0) && --l,
              (x =
                null == i ? (i = M.precision) : a ? i + (j(n) - j(o)) + 1 : i) <
                0)
            )
              return new M(0);
            if (((x = (x / 7 + 2) | 0), (s = 0), 1 == P))
              for (f = 0, C = C[0], x++; (s < A || f) && x--; s++)
                (w = f * y + (_[s] || 0)),
                  (v[s] = (w / C) | 0),
                  (f = (w % C) | 0);
            else {
              for (
                (f = (y / (C[0] + 1)) | 0) > 1 &&
                  ((C = t(C, f)),
                  (_ = t(_, f)),
                  (P = C.length),
                  (A = _.length)),
                  O = P,
                  b = (m = _.slice(0, P)).length;
                b < P;
              )
                m[b++] = 0;
              (E = C.slice()).unshift(0), (S = C[0]), C[1] >= y / 2 && ++S;
              do {
                (f = 0),
                  (c = e(C, m, P, b)) < 0
                    ? ((g = m[0]),
                      P != b && (g = g * y + (m[1] || 0)),
                      (f = (g / S) | 0) > 1
                        ? (f >= y && (f = y - 1),
                          1 ==
                            (c = e(
                              (p = t(C, f)),
                              m,
                              (h = p.length),
                              (b = m.length),
                            )) && (f--, r(p, P < h ? E : C, h)))
                        : (0 == f && (c = f = 1), (p = C.slice())),
                      (h = p.length) < b && p.unshift(0),
                      r(m, p, b),
                      -1 == c &&
                        (c = e(C, m, P, (b = m.length))) < 1 &&
                        (f++, r(m, P < b ? E : C, b)),
                      (b = m.length))
                    : 0 === c && (f++, (m = [0])),
                  (v[s++] = f),
                  c && m[0] ? (m[b++] = _[O] || 0) : ((m = [_[O]]), (b = 1));
              } while ((O++ < A || void 0 !== m[0]) && x--);
            }
            return v[0] || v.shift(), (d.e = l), k(d, a ? i + j(d) + 1 : i);
          };
        })();
        function O(t, e) {
          var r,
            n,
            i,
            a,
            u,
            l = 0,
            f = 0,
            h = t.constructor,
            y = h.precision;
          if (j(t) > 16) throw Error(s + j(t));
          if (!t.s) return new h(o);
          for (
            null == e ? ((c = !1), (u = y)) : (u = e), a = new h(0.03125);
            t.abs().gte(0.1);
          )
            (t = t.times(a)), (f += 5);
          for (
            u += ((Math.log(p(2, f)) / Math.LN10) * 2 + 5) | 0,
              r = n = i = new h(o),
              h.precision = u;
            ;
          ) {
            if (
              ((n = k(n.times(t), u)),
              (r = r.times(++l)),
              x((a = i.plus(w(n, r, u))).d).slice(0, u) === x(i.d).slice(0, u))
            ) {
              for (; f--; ) i = k(i.times(i), u);
              return (h.precision = y), null == e ? ((c = !0), k(i, y)) : i;
            }
            i = a;
          }
        }
        function j(t) {
          for (var e = 7 * t.e, r = t.d[0]; r >= 10; r /= 10) e++;
          return e;
        }
        function A(t, e, r) {
          if (e > t.LN10.sd())
            throw (
              ((c = !0),
              r && (t.precision = r),
              Error(u + "LN10 precision limit exceeded"))
            );
          return k(new t(t.LN10), e);
        }
        function S(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function P(t, e) {
          var r,
            n,
            i,
            a,
            l,
            s,
            f,
            p,
            h,
            y = 1,
            d = t,
            v = d.d,
            m = d.constructor,
            b = m.precision;
          if (d.s < 1) throw Error(u + (d.s ? "NaN" : "-Infinity"));
          if (d.eq(o)) return new m(0);
          if ((null == e ? ((c = !1), (p = b)) : (p = e), d.eq(10)))
            return null == e && (c = !0), A(m, p);
          if (
            ((p += 10),
            (m.precision = p),
            (n = (r = x(v)).charAt(0)),
            (a = j(d)),
            !(Math.abs(a) < 15e14))
          )
            return (
              (f = A(m, p + 2, b).times(a + "")),
              (d = P(new m(n + "." + r.slice(1)), p - 10).plus(f)),
              (m.precision = b),
              null == e ? ((c = !0), k(d, b)) : d
            );
          for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
            (n = (r = x((d = d.times(t)).d)).charAt(0)), y++;
          for (
            a = j(d),
              n > 1
                ? ((d = new m("0." + r)), a++)
                : (d = new m(n + "." + r.slice(1))),
              s = l = d = w(d.minus(o), d.plus(o), p),
              h = k(d.times(d), p),
              i = 3;
            ;
          ) {
            if (
              ((l = k(l.times(h), p)),
              x((f = s.plus(w(l, new m(i), p))).d).slice(0, p) ===
                x(s.d).slice(0, p))
            )
              return (
                (s = s.times(2)),
                0 !== a && (s = s.plus(A(m, p + 2, b).times(a + ""))),
                (s = w(s, new m(y), p)),
                (m.precision = b),
                null == e ? ((c = !0), k(s, b)) : s
              );
            (s = f), (i += 2);
          }
        }
        function E(t, e) {
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
              (t.e = f(r / 7)),
              (t.d = []),
              (n = (r + 1) % 7),
              r < 0 && (n += 7),
              n < o)
            ) {
              for (n && t.d.push(+e.slice(0, n)), o -= 7; n < o; )
                t.d.push(+e.slice(n, (n += 7)));
              n = 7 - (e = e.slice(n)).length;
            } else n -= o;
            for (; n--; ) e += "0";
            if ((t.d.push(+e), c && (t.e > v || t.e < -v))) throw Error(s + r);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function k(t, e, r) {
          var n,
            o,
            i,
            a,
            u,
            l,
            h,
            d,
            m = t.d;
          for (a = 1, i = m[0]; i >= 10; i /= 10) a++;
          if ((n = e - a) < 0) (n += 7), (o = e), (h = m[(d = 0)]);
          else {
            if ((d = Math.ceil((n + 1) / 7)) >= (i = m.length)) return t;
            for (h = i = m[d], a = 1; i >= 10; i /= 10) a++;
            o = (n %= 7) - 7 + a;
          }
          if (
            (void 0 !== r &&
              ((u = ((h / (i = p(10, a - o - 1))) % 10) | 0),
              (l = e < 0 || void 0 !== m[d + 1] || h % i),
              (l =
                r < 4
                  ? (u || l) && (0 == r || r == (t.s < 0 ? 3 : 2))
                  : u > 5 ||
                    (5 == u &&
                      (4 == r ||
                        l ||
                        (6 == r &&
                          ((n > 0 ? (o > 0 ? h / p(10, a - o) : 0) : m[d - 1]) %
                            10) &
                            1) ||
                        r == (t.s < 0 ? 8 : 7))))),
            e < 1 || !m[0])
          )
            return (
              l
                ? ((i = j(t)),
                  (m.length = 1),
                  (e = e - i - 1),
                  (m[0] = p(10, (7 - (e % 7)) % 7)),
                  (t.e = f(-e / 7) || 0))
                : ((m.length = 1), (m[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == n
              ? ((m.length = d), (i = 1), d--)
              : ((m.length = d + 1),
                (i = p(10, 7 - n)),
                (m[d] = o > 0 ? (((h / p(10, a - o)) % p(10, o)) | 0) * i : 0)),
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
          if (c && (t.e > v || t.e < -v)) throw Error(s + j(t));
          return t;
        }
        function M(t, e) {
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
            return e.s ? (e.s = -e.s) : (e = new h(t)), c ? k(e, d) : e;
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
                a > (o = Math.max(Math.ceil(d / 7), u) + 2) &&
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
          return l[0] ? ((e.d = l), (e.e = n), c ? k(e, d) : e) : new h(0);
        }
        function T(t, e, r) {
          var n,
            o = j(t),
            i = x(t.d),
            a = i.length;
          return (
            e
              ? (r && (n = r - a) > 0
                  ? (i = i.charAt(0) + "." + i.slice(1) + S(n))
                  : a > 1 && (i = i.charAt(0) + "." + i.slice(1)),
                (i = i + (o < 0 ? "e" : "e+") + o))
              : o < 0
                ? ((i = "0." + S(-o - 1) + i),
                  r && (n = r - a) > 0 && (i += S(n)))
                : o >= a
                  ? ((i += S(o + 1 - a)),
                    r && (n = r - o - 1) > 0 && (i = i + "." + S(n)))
                  : ((n = o + 1) < a && (i = i.slice(0, n) + "." + i.slice(n)),
                    r &&
                      (n = r - a) > 0 &&
                      (o + 1 === a && (i += "."), (i += S(n)))),
            t.s < 0 ? "-" + i : i
          );
        }
        function _(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function C(t) {
          if (!t || "object" != typeof t) throw Error(u + "Object expected");
          var e,
            r,
            n,
            o = [
              "precision",
              1,
              i,
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
              if (!(f(n) === n && n >= o[e + 1] && n <= o[e + 2]))
                throw Error(l + r + ": " + n);
              this[r] = n;
            }
          if (void 0 !== (n = t[(r = "LN10")])) {
            if (n != Math.LN10) throw Error(l + r + ": " + n);
            this[r] = new this(n);
          }
          return this;
        }
        (a = (function t(e) {
          var r, n, o;
          function i(t) {
            var e = this;
            if (!(e instanceof i)) return new i(t);
            if (((e.constructor = i), t instanceof i))
              return (
                (e.s = t.s), (e.e = t.e), void (e.d = (t = t.d) ? t.slice() : t)
              );
            if ("number" == typeof t) {
              if (0 * t != 0) throw Error(l + t);
              if (t > 0) e.s = 1;
              else {
                if (!(t < 0)) return (e.s = 0), (e.e = 0), void (e.d = [0]);
                (t = -t), (e.s = -1);
              }
              return t === ~~t && t < 1e7
                ? ((e.e = 0), void (e.d = [t]))
                : E(e, t.toString());
            }
            if ("string" != typeof t) throw Error(l + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (e.s = -1))
                : (e.s = 1),
              !h.test(t))
            )
              throw Error(l + t);
            E(e, t);
          }
          if (
            ((i.prototype = m),
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
            (i.config = i.set = C),
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
        })(a)),
          (a.default = a.Decimal = a),
          (o = new a(1)),
          void 0 ===
            (n = function () {
              return a;
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
        var c = new o(n, i || t, a),
          u = r ? r + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], c])
              : t._events[u].push(c)
            : ((t._events[u] = c), t._eventsCount++),
          t
        );
      }
      function a(t, e) {
        0 === --t._eventsCount ? (t._events = new n()) : delete t._events[e];
      }
      function c() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (c.prototype.eventNames = function () {
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
        (c.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var o = 0, i = n.length, a = new Array(i); o < i; o++)
            a[o] = n[o].fn;
          return a;
        }),
        (c.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (c.prototype.emit = function (t, e, n, o, i, a) {
          var c = r ? r + t : t;
          if (!this._events[c]) return !1;
          var u,
            l,
            s = this._events[c],
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
            for (l = 1, u = new Array(f - 1); l < f; l++)
              u[l - 1] = arguments[l];
            s.fn.apply(s.context, u);
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
                  if (!u)
                    for (p = 1, u = new Array(f - 1); p < f; p++)
                      u[p - 1] = arguments[p];
                  s[l].fn.apply(s[l].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (t, e, r) {
          return i(this, t, e, r, !1);
        }),
        (c.prototype.once = function (t, e, r) {
          return i(this, t, e, r, !0);
        }),
        (c.prototype.removeListener = function (t, e, n, o) {
          var i = r ? r + t : t;
          if (!this._events[i]) return this;
          if (!e) return a(this, i), this;
          var c = this._events[i];
          if (c.fn)
            c.fn !== e ||
              (o && !c.once) ||
              (n && c.context !== n) ||
              a(this, i);
          else {
            for (var u = 0, l = [], s = c.length; u < s; u++)
              (c[u].fn !== e ||
                (o && !c[u].once) ||
                (n && c[u].context !== n)) &&
                l.push(c[u]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : a(this, i);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = r ? r + t : t), this._events[e] && a(this, e))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = r),
        (c.EventEmitter = c),
        (t.exports = c);
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
            c = e(a);
          if (null != c && (void 0 === u ? c == c && !n(c) : r(c, u)))
            var u = c,
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
      t.exports = function t(e, r, i, a, c) {
        var u = -1,
          l = e.length;
        for (i || (i = o), c || (c = []); ++u < l; ) {
          var s = e[u];
          r > 0 && i(s)
            ? r > 1
              ? t(s, r - 1, i, a, c)
              : n(c, s)
            : a || (c[c.length] = s);
        }
        return c;
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
        c = r(75323),
        u = r(97371),
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
        e = n(e, u(i));
        var h = a(t, function (t, r, o) {
          return {
            criteria: n(e, function (e) {
              return e(t);
            }),
            index: ++p,
            value: t,
          };
        });
        return c(h, function (t, e) {
          return l(t, e, r);
        });
      };
    },
    32849: (t) => {
      var e = Math.ceil,
        r = Math.max;
      t.exports = function (t, n, o, i) {
        for (var a = -1, c = r(e((n - t) / (o || 1)), 0), u = Array(c); c--; )
          (u[i ? c : ++a] = t), (t += o);
        return u;
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
        c = r(23119),
        u = r(73697);
      t.exports = function (t, e, r) {
        var l = -1,
          s = o,
          f = t.length,
          p = !0,
          h = [],
          y = h;
        if (r) (p = !1), (s = i);
        else if (f >= 200) {
          var d = e ? null : c(t);
          if (d) return u(d);
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
            c = void 0 !== e,
            u = null === e,
            l = e == e,
            s = n(e);
          if (
            (!u && !s && !a && t > e) ||
            (a && c && l && !u && !s) ||
            (o && c && l) ||
            (!r && l) ||
            !i
          )
            return 1;
          if (
            (!o && !a && !s && t < e) ||
            (s && r && i && !o && !a) ||
            (u && r && i) ||
            (!c && i) ||
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
            c = i.length,
            u = r.length;
          ++o < c;
        ) {
          var l = n(i[o], a[o]);
          if (l) return o >= u ? l : l * ("desc" == r[o] ? -1 : 1);
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
            c = r ? r[0] : e.charAt(0),
            u = r ? n(r, 1).join("") : e.slice(1);
          return c[t]() + u;
        };
      };
    },
    25200: (t, e, r) => {
      var n = r(12507),
        o = r(97244),
        i = r(33640);
      t.exports = function (t) {
        return function (e, r, a) {
          var c = Object(e);
          if (!o(e)) {
            var u = n(r, 3);
            (e = i(e)),
              (r = function (t) {
                return u(c[t], t, c);
              });
          }
          var l = t(e, r, a);
          return l > -1 ? c[u ? e[l] : l] : void 0;
        };
      };
    },
    35966: (t, e, r) => {
      var n = r(32849),
        o = r(6238),
        i = r(83217);
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
        var c = typeof e;
        return (
          !!("number" == c
            ? o(r) && i(e, r.length)
            : "string" == c && e in r) && n(r[e], t)
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
              var i = arguments, a = -1, c = o(i.length - e, 0), u = Array(c);
              ++a < c;
            )
              u[a] = i[e + a];
            a = -1;
            for (var l = Array(e + 1); ++a < e; ) l[a] = i[a];
            return (l[e] = r(u)), n(t, this, l);
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
        c = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        u = "(?:" + n + "|" + o + ")" + "?",
        l = "[\\ufe0e\\ufe0f]?",
        s =
          l + u + ("(?:\\u200d(?:" + [i, a, c].join("|") + ")" + l + u + ")*"),
        f = "(?:" + [i + n + "?", n, a, c, r].join("|") + ")",
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
        c = Math.min;
      t.exports = function (t, e, r) {
        var u,
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
          var r = u,
            n = l;
          return (u = l = void 0), (y = e), (f = t.apply(n, r));
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
              return v ? c(r, s - (t - y)) : r;
            })(t),
          );
        }
        function w(t) {
          return (p = void 0), m && u ? b(t) : ((u = l = void 0), f);
        }
        function O() {
          var t = o(),
            r = g(t);
          if (((u = arguments), (l = this), (h = t), r)) {
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
            void 0 !== p && clearTimeout(p), (y = 0), (u = h = l = p = void 0);
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
        c = r(6238);
      t.exports = function (t, e, r) {
        var u = a(t) ? n : o;
        return r && c(t, e, r) && (e = void 0), u(t, i(e, 3));
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
        var c = null == t ? 0 : t.length;
        if (!c) return -1;
        var u = null == r ? 0 : i(r);
        return u < 0 && (u = a(c + u, 0)), n(t, o(e, 3), u);
      };
    },
    90540: (t, e, r) => {
      t.exports = r(54722);
    },
    21205: (t, e, r) => {
      var n = r(18174),
        o = r(67160);
      t.exports = function (t, e) {
        return n(o(t, e), 1);
      };
    },
    54722: (t) => {
      t.exports = function (t) {
        return t && t.length ? t[0] : void 0;
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
    42529: (t, e, r) => {
      var n = r(16869),
        o = r(31517),
        i = r(12507);
      t.exports = function (t, e) {
        return t && t.length ? n(t, i(e, 2), o) : void 0;
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
    11027: (t, e, r) => {
      var n = r(16869),
        o = r(12507),
        i = r(40106);
      t.exports = function (t, e) {
        return t && t.length ? n(t, o(e, 2), i) : void 0;
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
        c = r(6238);
      t.exports = function (t, e, r) {
        var u = a(t) ? n : i;
        return r && c(t, e, r) && (e = void 0), u(t, o(e, 3));
      };
    },
    97825: (t, e, r) => {
      var n = r(18174),
        o = r(82401),
        i = r(5456),
        a = r(6238),
        c = i(function (t, e) {
          if (null == t) return [];
          var r = e.length;
          return (
            r > 1 && a(t, e[0], e[1])
              ? (e = [])
              : r > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
            o(t, n(e, 1), [])
          );
        });
      t.exports = c;
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
    83217: (t, e, r) => {
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
      var n = r(83217);
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
        c = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
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
        var r = c.test(t);
        return r || u.test(t) ? l(t.slice(2), r ? 2 : 8) : a.test(t) ? NaN : +t;
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
        c = Symbol.for("react.profiler"),
        u = Symbol.for("react.provider"),
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
                case c:
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
                    case u:
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
    86356: (t, e, r) => {
      "use strict";
      r.d(e, { Ay: () => Dt });
      var n = r(90626),
        o = r(61410),
        i = r.n(o);
      const { getOwnPropertyNames: a, getOwnPropertySymbols: c } = Object,
        { hasOwnProperty: u } = Object.prototype;
      function l(t, e) {
        return function (r, n, o) {
          return t(r, n, o) && e(r, n, o);
        };
      }
      function s(t) {
        return function (e, r, n) {
          if (!e || !r || "object" != typeof e || "object" != typeof r)
            return t(e, r, n);
          const { cache: o } = n,
            i = o.get(e),
            a = o.get(r);
          if (i && a) return i === r && a === e;
          o.set(e, r), o.set(r, e);
          const c = t(e, r, n);
          return o.delete(e), o.delete(r), c;
        };
      }
      function f(t) {
        return a(t).concat(c(t));
      }
      const p = Object.hasOwn || ((t, e) => u.call(t, e));
      function h(t, e) {
        return t === e || (!t && !e && t != t && e != e);
      }
      const { getOwnPropertyDescriptor: y, keys: d } = Object;
      function v(t, e) {
        return (
          t.byteLength === e.byteLength &&
          M(new Uint8Array(t), new Uint8Array(e))
        );
      }
      function m(t, e, r) {
        let n = t.length;
        if (e.length !== n) return !1;
        for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
        return !0;
      }
      function b(t, e) {
        return (
          t.byteLength === e.byteLength &&
          M(
            new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
            new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
          )
        );
      }
      function g(t, e) {
        return h(t.getTime(), e.getTime());
      }
      function x(t, e) {
        return (
          t.name === e.name &&
          t.message === e.message &&
          t.cause === e.cause &&
          t.stack === e.stack
        );
      }
      function w(t, e) {
        return t === e;
      }
      function O(t, e, r) {
        const n = t.size;
        if (n !== e.size) return !1;
        if (!n) return !0;
        const o = new Array(n),
          i = t.entries();
        let a,
          c,
          u = 0;
        for (; (a = i.next()) && !a.done; ) {
          const n = e.entries();
          let i = !1,
            l = 0;
          for (; (c = n.next()) && !c.done; ) {
            if (o[l]) {
              l++;
              continue;
            }
            const n = a.value,
              s = c.value;
            if (
              r.equals(n[0], s[0], u, l, t, e, r) &&
              r.equals(n[1], s[1], n[0], s[0], t, e, r)
            ) {
              i = o[l] = !0;
              break;
            }
            l++;
          }
          if (!i) return !1;
          u++;
        }
        return !0;
      }
      const j = h;
      function A(t, e, r) {
        const n = d(t);
        let o = n.length;
        if (d(e).length !== o) return !1;
        for (; o-- > 0; ) if (!_(t, e, r, n[o])) return !1;
        return !0;
      }
      function S(t, e, r) {
        const n = f(t);
        let o,
          i,
          a,
          c = n.length;
        if (f(e).length !== c) return !1;
        for (; c-- > 0; ) {
          if (((o = n[c]), !_(t, e, r, o))) return !1;
          if (
            ((i = y(t, o)),
            (a = y(e, o)),
            (i || a) &&
              (!i ||
                !a ||
                i.configurable !== a.configurable ||
                i.enumerable !== a.enumerable ||
                i.writable !== a.writable))
          )
            return !1;
        }
        return !0;
      }
      function P(t, e) {
        return h(t.valueOf(), e.valueOf());
      }
      function E(t, e) {
        return t.source === e.source && t.flags === e.flags;
      }
      function k(t, e, r) {
        const n = t.size;
        if (n !== e.size) return !1;
        if (!n) return !0;
        const o = new Array(n),
          i = t.values();
        let a, c;
        for (; (a = i.next()) && !a.done; ) {
          const n = e.values();
          let i = !1,
            u = 0;
          for (; (c = n.next()) && !c.done; ) {
            if (
              !o[u] &&
              r.equals(a.value, c.value, a.value, c.value, t, e, r)
            ) {
              i = o[u] = !0;
              break;
            }
            u++;
          }
          if (!i) return !1;
        }
        return !0;
      }
      function M(t, e) {
        let r = t.byteLength;
        if (e.byteLength !== r || t.byteOffset !== e.byteOffset) return !1;
        for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function T(t, e) {
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
      function _(t, e, r, n) {
        return (
          !(
            ("_owner" !== n && "__o" !== n && "__v" !== n) ||
            (!t.$$typeof && !e.$$typeof)
          ) ||
          (p(e, n) && r.equals(t[n], e[n], n, n, t, e, r))
        );
      }
      const C = {
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
        D = Object.prototype.toString;
      function I({
        areArrayBuffersEqual: t,
        areArraysEqual: e,
        areDataViewsEqual: r,
        areDatesEqual: n,
        areErrorsEqual: o,
        areFunctionsEqual: i,
        areMapsEqual: a,
        areNumbersEqual: c,
        areObjectsEqual: u,
        arePrimitiveWrappersEqual: l,
        areRegExpsEqual: s,
        areSetsEqual: f,
        areTypedArraysEqual: p,
        areUrlsEqual: h,
        unknownTagComparators: y,
      }) {
        return function (d, v, m) {
          if (d === v) return !0;
          if (null == d || null == v) return !1;
          const b = typeof d;
          if (b !== typeof v) return !1;
          if ("object" !== b)
            return "number" === b ? c(d, v, m) : "function" === b && i(d, v, m);
          const g = d.constructor;
          if (g !== v.constructor) return !1;
          if (g === Object) return u(d, v, m);
          if (Array.isArray(d)) return e(d, v, m);
          if (g === Date) return n(d, v, m);
          if (g === RegExp) return s(d, v, m);
          if (g === Map) return a(d, v, m);
          if (g === Set) return f(d, v, m);
          const x = D.call(d);
          if ("[object Date]" === x) return n(d, v, m);
          if ("[object RegExp]" === x) return s(d, v, m);
          if ("[object Map]" === x) return a(d, v, m);
          if ("[object Set]" === x) return f(d, v, m);
          if ("[object Object]" === x)
            return (
              "function" != typeof d.then &&
              "function" != typeof v.then &&
              u(d, v, m)
            );
          if ("[object URL]" === x) return h(d, v, m);
          if ("[object Error]" === x) return o(d, v, m);
          if ("[object Arguments]" === x) return u(d, v, m);
          if (C[x]) return p(d, v, m);
          if ("[object ArrayBuffer]" === x) return t(d, v, m);
          if ("[object DataView]" === x) return r(d, v, m);
          if (
            "[object Boolean]" === x ||
            "[object Number]" === x ||
            "[object String]" === x
          )
            return l(d, v, m);
          if (y) {
            let t = y[x];
            if (!t) {
              const e = null != (w = d) ? w[Symbol.toStringTag] : void 0;
              e && (t = y[e]);
            }
            if (t) return t(d, v, m);
          }
          var w;
          return !1;
        };
      }
      const N = B();
      B({ strict: !0 }),
        B({ circular: !0 }),
        B({ circular: !0, strict: !0 }),
        B({ createInternalComparator: () => h }),
        B({ strict: !0, createInternalComparator: () => h }),
        B({ circular: !0, createInternalComparator: () => h }),
        B({ circular: !0, createInternalComparator: () => h, strict: !0 });
      function B(t = {}) {
        const {
            circular: e = !1,
            createInternalComparator: r,
            createState: n,
            strict: o = !1,
          } = t,
          i = (function ({ circular: t, createCustomConfig: e, strict: r }) {
            let n = {
              areArrayBuffersEqual: v,
              areArraysEqual: r ? S : m,
              areDataViewsEqual: b,
              areDatesEqual: g,
              areErrorsEqual: x,
              areFunctionsEqual: w,
              areMapsEqual: r ? l(O, S) : O,
              areNumbersEqual: j,
              areObjectsEqual: r ? S : A,
              arePrimitiveWrappersEqual: P,
              areRegExpsEqual: E,
              areSetsEqual: r ? l(k, S) : k,
              areTypedArraysEqual: r ? l(M, S) : M,
              areUrlsEqual: T,
              unknownTagComparators: void 0,
            };
            if ((e && (n = Object.assign({}, n, e(n))), t)) {
              const t = s(n.areArraysEqual),
                e = s(n.areMapsEqual),
                r = s(n.areObjectsEqual),
                o = s(n.areSetsEqual);
              n = Object.assign({}, n, {
                areArraysEqual: t,
                areMapsEqual: e,
                areObjectsEqual: r,
                areSetsEqual: o,
              });
            }
            return n;
          })(t),
          a = I(i);
        var c;
        return (function ({
          circular: t,
          comparator: e,
          createState: r,
          equals: n,
          strict: o,
        }) {
          if (r)
            return function (i, a) {
              const { cache: c = t ? new WeakMap() : void 0, meta: u } = r();
              return e(i, a, { cache: c, equals: n, meta: u, strict: o });
            };
          if (t)
            return function (t, r) {
              return e(t, r, {
                cache: new WeakMap(),
                equals: n,
                meta: void 0,
                strict: o,
              });
            };
          const i = { cache: void 0, equals: n, meta: void 0, strict: o };
          return function (t, r) {
            return e(t, r, i);
          };
        })({
          circular: e,
          comparator: a,
          createState: n,
          equals: r
            ? r(a)
            : ((c = a),
              function (t, e, r, n, o, i, a) {
                return c(t, e, a);
              }),
          strict: o,
        });
      }
      function R(t) {
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
      function z(t) {
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
            if ("string" == typeof t) return F(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return F(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function F(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function U() {
        var t = function () {
            return null;
          },
          e = !1,
          r = function r(n) {
            if (!e) {
              if (Array.isArray(n)) {
                if (!n.length) return;
                var o = z(n),
                  i = o[0],
                  a = o.slice(1);
                return "number" == typeof i
                  ? void R(r.bind(null, a), i)
                  : (r(i), void R(r.bind(null, a)));
              }
              "object" === L(n) && t(n), "function" == typeof n && n();
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
      function q(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? $(Object(r), !0).forEach(function (e) {
                K(t, e, r[e]);
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
      function K(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== W(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== W(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === W(e) ? e : String(e);
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
      var X = function (t) {
          return t;
        },
        V = function (t, e) {
          return Object.keys(e).reduce(function (r, n) {
            return q(q({}, r), {}, K({}, n, t(n, e[n])));
          }, {});
        },
        H = function (t, e, r) {
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
      function J(t, e) {
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          Y(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function G(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Z(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          Y(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Y(t, e) {
        if (t) {
          if ("string" == typeof t) return Z(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? Z(t, e)
                : void 0
          );
        }
      }
      function Z(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var Q = 1e-4,
        tt = function (t, e) {
          return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
        },
        et = function (t, e) {
          return t
            .map(function (t, r) {
              return t * Math.pow(e, r);
            })
            .reduce(function (t, e) {
              return t + e;
            });
        },
        rt = function (t, e) {
          return function (r) {
            var n = tt(t, e);
            return et(n, r);
          };
        },
        nt = function () {
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
                var c = e[0].split("(");
                if (
                  "cubic-bezier" === c[0] &&
                  4 === c[1].split(")")[0].split(",").length
                ) {
                  var u = J(
                    c[1]
                      .split(")")[0]
                      .split(",")
                      .map(function (t) {
                        return parseFloat(t);
                      }),
                    4,
                  );
                  (n = u[0]), (o = u[1]), (i = u[2]), (a = u[3]);
                }
            }
          [n, i, o, a].every(function (t) {
            return "number" == typeof t && t >= 0 && t <= 1;
          });
          var l,
            s,
            f = rt(n, i),
            p = rt(o, a),
            h =
              ((l = n),
              (s = i),
              function (t) {
                var e = tt(l, s),
                  r = [].concat(
                    G(
                      e
                        .map(function (t, e) {
                          return t * e;
                        })
                        .slice(1),
                    ),
                    [0],
                  );
                return et(r, t);
              }),
            y = function (t) {
              return t > 1 ? 1 : t < 0 ? 0 : t;
            },
            d = function (t) {
              for (var e = t > 1 ? 1 : t, r = e, n = 0; n < 8; ++n) {
                var o = f(r) - e,
                  i = h(r);
                if (Math.abs(o - e) < Q || i < Q) return p(r);
                r = y(r - o / i);
              }
              return p(r);
            };
          return (d.isStepper = !1), d;
        },
        ot = function () {
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
                return nt(n);
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
                    c = function (t, e, n) {
                      var i = n + ((-(t - e) * r - n * o) * a) / 1e3,
                        c = (n * a) / 1e3 + t;
                      return Math.abs(c - e) < Q && Math.abs(i) < Q
                        ? [e, 0]
                        : [c, i];
                    };
                  return (c.isStepper = !0), (c.dt = a), c;
                })();
              default:
                if ("cubic-bezier" === n.split("(")[0]) return nt(n);
            }
          return "function" == typeof n ? n : null;
        };
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
      function at(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return pt(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          ft(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ct(t, e) {
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
      function ut(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ct(Object(r), !0).forEach(function (e) {
                lt(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : ct(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function lt(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== it(t) || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== it(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === it(e) ? e : String(e);
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
      function st(t, e) {
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          ft(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ft(t, e) {
        if (t) {
          if ("string" == typeof t) return pt(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? pt(t, e)
                : void 0
          );
        }
      }
      function pt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var ht = function (t, e, r) {
          return t + (e - t) * r;
        },
        yt = function (t) {
          return t.from !== t.to;
        },
        dt = function t(e, r, n) {
          var o = V(function (t, r) {
            if (yt(r)) {
              var n = st(e(r.from, r.to, r.velocity), 2),
                o = n[0],
                i = n[1];
              return ut(ut({}, r), {}, { from: o, velocity: i });
            }
            return r;
          }, r);
          return n < 1
            ? V(function (t, e) {
                return yt(e)
                  ? ut(
                      ut({}, e),
                      {},
                      {
                        velocity: ht(e.velocity, o[t].velocity, n),
                        from: ht(e.from, o[t].from, n),
                      },
                    )
                  : e;
              }, r)
            : t(e, o, n - 1);
        };
      const vt = function (t, e, r, n, o) {
        var i,
          a,
          c,
          u,
          l =
            ((i = t),
            (a = e),
            [Object.keys(i), Object.keys(a)].reduce(function (t, e) {
              return t.filter(function (t) {
                return e.includes(t);
              });
            })),
          s = l.reduce(function (r, n) {
            return ut(ut({}, r), {}, lt({}, n, [t[n], e[n]]));
          }, {}),
          f = l.reduce(function (r, n) {
            return ut(
              ut({}, r),
              {},
              lt({}, n, { from: t[n], velocity: 0, to: e[n] }),
            );
          }, {}),
          p = -1,
          h = function () {
            return null;
          };
        return (
          (h = r.isStepper
            ? function (n) {
                c || (c = n);
                var i = (n - c) / r.dt;
                (f = dt(r, f, i)),
                  o(
                    ut(
                      ut(ut({}, t), e),
                      V(function (t, e) {
                        return e.from;
                      }, f),
                    ),
                  ),
                  (c = n),
                  Object.values(f).filter(yt).length &&
                    (p = requestAnimationFrame(h));
              }
            : function (i) {
                u || (u = i);
                var a = (i - u) / n,
                  c = V(function (t, e) {
                    return ht.apply(void 0, at(e).concat([r(a)]));
                  }, s);
                if ((o(ut(ut(ut({}, t), e), c)), a < 1))
                  p = requestAnimationFrame(h);
                else {
                  var l = V(function (t, e) {
                    return ht.apply(void 0, at(e).concat([r(1)]));
                  }, s);
                  o(ut(ut(ut({}, t), e), l));
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
      function mt(t) {
        return (
          (mt =
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
          mt(t)
        );
      }
      var bt = [
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
      function gt(t, e) {
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
      function xt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return wt(t);
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
            if ("string" == typeof t) return wt(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return wt(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function wt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function Ot(t, e) {
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
      function jt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ot(Object(r), !0).forEach(function (e) {
                At(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : Ot(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function At(t, e, r) {
        return (
          (e = Pt(e)) in t
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
      function St(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Pt(n.key), n);
        }
      }
      function Pt(t) {
        var e = (function (t, e) {
          if ("object" !== mt(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== mt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === mt(e) ? e : String(e);
      }
      function Et(t, e) {
        return (
          (Et = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Et(t, e)
        );
      }
      function kt(t) {
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
            n = _t(t);
          if (e) {
            var o = _t(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Mt(this, r);
        };
      }
      function Mt(t, e) {
        if (e && ("object" === mt(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return Tt(t);
      }
      function Tt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      function _t(t) {
        return (
          (_t = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          _t(t)
        );
      }
      var Ct = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && Et(t, e);
        })(a, t);
        var e,
          r,
          o,
          i = kt(a);
        function a(t, e) {
          var r;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          var n = (r = i.call(this, t, e)).props,
            o = n.isActive,
            c = n.attributeName,
            u = n.from,
            l = n.to,
            s = n.steps,
            f = n.children,
            p = n.duration;
          if (
            ((r.handleStyleChange = r.handleStyleChange.bind(Tt(r))),
            (r.changeStyle = r.changeStyle.bind(Tt(r))),
            !o || p <= 0)
          )
            return (
              (r.state = { style: {} }),
              "function" == typeof f && (r.state = { style: l }),
              Mt(r)
            );
          if (s && s.length) r.state = { style: s[0].style };
          else if (u) {
            if ("function" == typeof f) return (r.state = { style: u }), Mt(r);
            r.state = { style: c ? At({}, c, u) : u };
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
                  c = e.from,
                  u = this.state.style;
                if (n)
                  if (r) {
                    if (!(N(t.to, a) && t.canBegin && t.isActive)) {
                      var l = !t.canBegin || !t.isActive;
                      this.manager && this.manager.stop(),
                        this.stopJSAnimation && this.stopJSAnimation();
                      var s = l || i ? c : t.to;
                      if (this.state && u) {
                        var f = { style: o ? At({}, o, s) : s };
                        ((o && u[o] !== s) || (!o && u !== s)) &&
                          this.setState(f);
                      }
                      this.runAnimation(
                        jt(jt({}, this.props), {}, { from: s, begin: 0 }),
                      );
                    }
                  } else {
                    var p = { style: o ? At({}, o, a) : a };
                    this.state &&
                      u &&
                      ((o && u[o] !== a) || (!o && u !== a)) &&
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
                  c = t.onAnimationEnd,
                  u = t.onAnimationStart,
                  l = vt(r, n, ot(i), o, this.changeStyle);
                this.manager.start([
                  u,
                  a,
                  function () {
                    e.stopJSAnimation = l();
                  },
                  o,
                  c,
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
                  c = i.duration,
                  u = void 0 === c ? 0 : c;
                return this.manager.start(
                  [o].concat(
                    xt(
                      r.reduce(
                        function (t, n, o) {
                          if (0 === o) return t;
                          var i = n.duration,
                            a = n.easing,
                            c = void 0 === a ? "ease" : a,
                            u = n.style,
                            l = n.properties,
                            s = n.onAnimationEnd,
                            f = o > 0 ? r[o - 1] : n,
                            p = l || Object.keys(u);
                          if ("function" == typeof c || "spring" === c)
                            return [].concat(xt(t), [
                              e.runJSAnimation.bind(e, {
                                from: f.style,
                                to: u,
                                duration: i,
                                easing: c,
                              }),
                              i,
                            ]);
                          var h = H(p, i, c),
                            y = jt(
                              jt(jt({}, f.style), u),
                              {},
                              { transition: h },
                            );
                          return [].concat(xt(t), [y, i, s]).filter(X);
                        },
                        [a, Math.max(u, n)],
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
                this.manager || (this.manager = U());
                var e = t.begin,
                  r = t.duration,
                  n = t.attributeName,
                  o = t.to,
                  i = t.easing,
                  a = t.onAnimationStart,
                  c = t.onAnimationEnd,
                  u = t.steps,
                  l = t.children,
                  s = this.manager;
                if (
                  ((this.unSubscribe = s.subscribe(this.handleStyleChange)),
                  "function" != typeof i &&
                    "function" != typeof l &&
                    "spring" !== i)
                )
                  if (u.length > 1) this.runStepAnimation(t);
                  else {
                    var f = n ? At({}, n, o) : o,
                      p = H(Object.keys(f), r, i);
                    s.start([a, e, jt(jt({}, f), {}, { transition: p }), r, c]);
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
                    gt(t, bt)),
                  a = n.Children.count(e),
                  c = this.state.style;
                if ("function" == typeof e) return e(c);
                if (!o || 0 === a || r <= 0) return e;
                var u = function (t) {
                  var e = t.props,
                    r = e.style,
                    o = void 0 === r ? {} : r,
                    a = e.className;
                  return (0, n.cloneElement)(
                    t,
                    jt(
                      jt({}, i),
                      {},
                      { style: jt(jt({}, o), c), className: a },
                    ),
                  );
                };
                return 1 === a
                  ? u(n.Children.only(e))
                  : n.createElement(
                      "div",
                      null,
                      n.Children.map(e, function (t) {
                        return u(t);
                      }),
                    );
              },
            },
          ]) && St(e.prototype, r),
          o && St(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          a
        );
      })(n.PureComponent);
      (Ct.displayName = "Animate"),
        (Ct.defaultProps = {
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
        (Ct.propTypes = {
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
      const Dt = Ct;
    },
    20283: (t, e, r) => {
      "use strict";
      r.d(e, { y: () => q });
      var n = r(90626),
        o = r(34164),
        i = r(86356),
        a = r(58782),
        c = r.n(a),
        u = r(64609),
        l = r.n(u),
        s = r(75055),
        f = r(10800),
        p = r(72040),
        h = r(12244),
        y = r(96714),
        d = r(93563),
        v = r(59640),
        m = r(61195),
        b = r(43998),
        g = r(68841),
        x = r(53818),
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
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(r), !0).forEach(function (e) {
                P(t, e, r[e]);
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
          c = "".concat(n),
          u = parseInt(c, 10),
          l = "".concat(e.height || o.height),
          s = parseInt(l, 10),
          f = "".concat(e.width || o.width),
          p = parseInt(f, 10);
        return S(
          S(S(S(S({}, e), o), a ? { x: a } : {}), u ? { y: u } : {}),
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
          (e = F(e)),
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
              ? Reflect.construct(e, r || [], F(t).constructor)
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
      function U(t, e) {
        return (
          (U = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          U(t, e)
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
              e && U(t, e);
          })(e, t),
          (r = e),
          (u = [
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
                  c = r.activeBar,
                  u = (0, d.J9)(this.props, !1);
                return (
                  t &&
                  t.map(function (t, r) {
                    var l = r === a,
                      f = l ? c : o,
                      p = B(
                        B(B({}, u), t),
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
                            .concat(null == t ? void 0 : t.value, "-")
                            .concat(r),
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
                  c = e.animationBegin,
                  u = e.animationDuration,
                  l = e.animationEasing,
                  f = e.animationId,
                  p = this.state.prevData;
                return n.createElement(
                  i.Ay,
                  {
                    begin: c,
                    duration: u,
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
                            c = (0, y.Dj)(r.width, t.width),
                            u = (0, y.Dj)(r.height, t.height);
                          return B(
                            B({}, t),
                            {},
                            { x: n(i), y: a(i), width: c(i), height: u(i) },
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
                return !(r && e && e.length) || (n && c()(n, e))
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
                  var c = e.background,
                    u = D(e, _);
                  if (!c) return null;
                  var l = B(
                    B(
                      B(B(B({}, u), {}, { fill: "#eee" }, c), a),
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
                  c = r.layout,
                  u = r.children,
                  l = (0, d.aS)(u, f.u);
                if (!l) return null;
                var p = "vertical" === c ? o[0].height / 2 : o[0].width / 2,
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
                      layout: c,
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
                  c = t.yAxis,
                  u = t.left,
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
                  w = c && c.allowDataOverflow,
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
                            x: x ? u : u - p / 2,
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
          u && R(r, u),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, a, u;
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
            c = t.xAxisTicks,
            u = t.yAxisTicks,
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
            A = w.minPointSize,
            S = "horizontal" === b ? a : i,
            P = l ? S.scale.domain() : null,
            E = (0, m.DW)({ numericAxis: S }),
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
                  var o = (0, y.Et)(r) || (0, y.uy)(r);
                  return o ? t(r, n) : (o || (0, g.A)(!1), e);
                };
              })(A, T.defaultProps.minPointSize)(n[1], e);
              if ("horizontal" === b) {
                var j,
                  S = [a.scale(n[0]), a.scale(n[1])],
                  M = S[0],
                  _ = S[1];
                (f = (0, m.y2)({
                  axis: i,
                  ticks: c,
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
                    ticks: u,
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
    23884: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => C });
      var n = r(90626),
        o = r(3316),
        i = r.n(o),
        a = r(52686),
        c = r.n(a),
        u = r(34164),
        l = r(80103),
        s = r(75055),
        f = r(34656),
        p = r(25068),
        h = r(96714),
        y = r(43998),
        d = r(93563),
        v = r(81887),
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
      function S(t, e) {
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
                var o = (0, u.A)(
                  e.className,
                  "recharts-cartesian-axis-tick-value",
                );
                return n.isValidElement(t)
                  ? n.cloneElement(t, j(j({}, e), {}, { className: o }))
                  : i()(t)
                    ? t(j(j({}, e), {}, { className: o }))
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
                  n = A(t, m),
                  o = this.props,
                  i = o.viewBox,
                  a = A(o, b);
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
                  c = this.props,
                  u = c.x,
                  l = c.y,
                  s = c.width,
                  f = c.height,
                  p = c.orientation,
                  y = c.tickSize,
                  d = c.mirror,
                  v = c.tickMargin,
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
                      (i = (e = (r = u + +!d * s) - m * b) - m * v),
                      (a = g);
                    break;
                  case "right":
                    (n = o = t.coordinate),
                      (i = (e = (r = u + +d * s) + m * b) + m * v),
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
                    className: (0, u.A)(
                      "recharts-cartesian-axis-line",
                      c()(s, "className"),
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
                  A = (0, d.J9)(this.props, !1),
                  S = (0, d.J9)(h, !1),
                  P = j(j({}, A), {}, { fill: "none" }, (0, d.J9)(f, !1)),
                  E = g.map(function (t, r) {
                    var o = a.getTickLineCoord(t),
                      l = o.line,
                      d = o.tick,
                      v = j(
                        j(
                          j(
                            j({ textAnchor: x, verticalAnchor: O }, A),
                            {},
                            { stroke: "none", fill: p },
                            S,
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
                            className: (0, u.A)(
                              "recharts-cartesian-axis-tick-line",
                              c()(f, "className"),
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
                  c = e.ticksGenerator,
                  l = e.className;
                if (e.hide) return null;
                var f = this.props,
                  h = f.ticks,
                  y = A(f, g),
                  d = h;
                return (
                  i()(c) && (d = h && h.length > 0 ? c(this.props) : c(y)),
                  o <= 0 || a <= 0 || !d || !d.length
                    ? null
                    : n.createElement(
                        s.W,
                        {
                          className: (0, u.A)("recharts-cartesian-axis", l),
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
          ]) && S(r.prototype, o),
          a && S(r, a),
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
    58661: (t, e, r) => {
      "use strict";
      r.d(e, { d: () => T });
      var n = r(90626),
        o = r(3316),
        i = r.n(o),
        a = r(27664),
        c = r(96714),
        u = r(93563),
        l = r(61195),
        s = r(81887),
        f = r(23884),
        p = r(7351),
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
          c = t.height,
          u = t.ry;
        return n.createElement("rect", {
          x: o,
          y: i,
          ry: u,
          width: a,
          height: c,
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
            c = e.x2,
            l = e.y2,
            s = e.key,
            f = x(e, h),
            p = (0, u.J9)(f, !1),
            d = (p.offset, x(p, y));
          r = n.createElement(
            "line",
            g({}, d, { x1: o, y1: a, x2: c, y2: l, fill: "none", key: s }),
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
        var c = a.map(function (n, o) {
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
          c,
        );
      }
      function A(t) {
        var e = t.y,
          r = t.height,
          o = t.vertical,
          i = void 0 === o || o,
          a = t.verticalPoints;
        if (!i || !a || !a.length) return null;
        var c = a.map(function (n, o) {
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
          c,
        );
      }
      function S(t) {
        var e = t.horizontalFill,
          r = t.fillOpacity,
          o = t.x,
          i = t.y,
          a = t.width,
          c = t.height,
          u = t.horizontalPoints,
          l = t.horizontal;
        if (!(void 0 === l || l) || !e || !e.length) return null;
        var s = u
          .map(function (t) {
            return Math.round(t + i - i);
          })
          .sort(function (t, e) {
            return t - e;
          });
        i !== s[0] && s.unshift(0);
        var f = s.map(function (t, u) {
          var l = !s[u + 1] ? i + c - t : s[u + 1] - t;
          if (l <= 0) return null;
          var f = u % e.length;
          return n.createElement("rect", {
            key: "react-".concat(u),
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
          c = t.y,
          u = t.width,
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
          var r = !f[e + 1] ? a + u - t : f[e + 1] - t;
          if (r <= 0) return null;
          var s = e % o.length;
          return n.createElement("rect", {
            key: "react-".concat(e),
            x: t,
            y: c,
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
          u,
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
                null !== (u = t.horizontalFill) && void 0 !== u
                  ? u
                  : M.horizontalFill,
              vertical:
                null !== (l = t.vertical) && void 0 !== l ? l : M.vertical,
              verticalFill:
                null !== (s = t.verticalFill) && void 0 !== s
                  ? s
                  : M.verticalFill,
              x: (0, c.Et)(t.x) ? t.x : y.left,
              y: (0, c.Et)(t.y) ? t.y : y.top,
              width: (0, c.Et)(t.width) ? t.width : y.width,
              height: (0, c.Et)(t.height) ? t.height : y.height,
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
          !(0, c.Et)(O) ||
          O <= 0 ||
          !(0, c.Et)(T) ||
          T <= 0 ||
          !(0, c.Et)(b) ||
          b !== +b ||
          !(0, c.Et)(x) ||
          x !== +x
        )
          return null;
        var B = v.verticalCoordinatesGenerator || E,
          R = v.horizontalCoordinatesGenerator || k,
          L = v.horizontalPoints,
          z = v.verticalPoints;
        if ((!L || !L.length) && i()(R)) {
          var F = C && C.length,
            U = R(
              {
                yAxis: N ? m(m({}, N), {}, { ticks: F ? C : N.ticks }) : void 0,
                width: f,
                height: h,
                offset: y,
              },
              !!F || _,
            );
          (0, a.R)(
            Array.isArray(U),
            "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
              d(U),
              "]",
            ),
          ),
            Array.isArray(U) && (L = U);
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
            A,
            g({}, v, { offset: y, verticalPoints: z, xAxis: I, yAxis: N }),
          ),
          n.createElement(S, g({}, v, { horizontalPoints: L })),
          n.createElement(P, g({}, v, { verticalPoints: z })),
        );
      }
      T.displayName = "CartesianGrid";
    },
    10800: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => x });
      var n = r(90626),
        o = r(68841),
        i = r(75055),
        a = r(93563),
        c = [
          "offset",
          "layout",
          "width",
          "dataKey",
          "data",
          "dataPointFormatter",
          "xAxis",
          "yAxis",
        ];
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
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
            if (e && ("object" === u(e) || "function" == typeof e)) return e;
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
          if ("object" != u(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != u(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == u(e) ? e : e + "";
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
          (u = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.offset,
                  r = t.layout,
                  u = t.width,
                  f = t.dataKey,
                  h = t.data,
                  y = t.dataPointFormatter,
                  d = t.xAxis,
                  v = t.yAxis,
                  m = p(t, c),
                  b = (0, a.J9)(m, !1);
                "x" === this.props.direction &&
                  "number" !== d.type &&
                  (0, o.A)(!1);
                var g = h.map(function (t) {
                  var o = y(t, f),
                    a = o.x,
                    c = o.y,
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
                      j = c + e,
                      A = j + u,
                      S = j - u,
                      P = O(p - m),
                      E = O(p + g);
                    x.push({ x1: E, y1: A, x2: E, y2: S }),
                      x.push({ x1: P, y1: j, x2: E, y2: j }),
                      x.push({ x1: P, y1: A, x2: P, y2: S });
                  } else if ("horizontal" === r) {
                    var k = v.scale,
                      M = a + e,
                      T = M - u,
                      _ = M + u,
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
          ]) && h(r.prototype, u),
          f && h(r, f),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, u, f;
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
    90150: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => b });
      var n = r(90626),
        o = r(34164),
        i = r(7351),
        a = r(23884),
        c = r(61195);
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
            if (e && ("object" === u(e) || "function" == typeof e)) return e;
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
          if ("object" != u(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != u(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == u(e) ? e : e + "";
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
          u = (0, i.rY)(),
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
                viewBox: { x: 0, y: 0, width: r, height: u },
                ticksGenerator: function (t) {
                  return (0, c.Rh)(t, !0);
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
    73077: (t, e, r) => {
      "use strict";
      r.d(e, { h: () => b });
      var n = r(90626),
        o = r(34164),
        i = r(7351),
        a = r(23884),
        c = r(61195);
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
            if (e && ("object" === u(e) || "function" == typeof e)) return e;
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
          if ("object" != u(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != u(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == u(e) ? e : e + "";
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
            u = (0, i.rY)(),
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
                  viewBox: { x: 0, y: 0, width: r, height: u },
                  ticksGenerator: function (t) {
                    return (0, c.Rh)(t, !0);
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
    81887: (t, e, r) => {
      "use strict";
      r.d(e, { f: () => d });
      var n = r(3316),
        o = r.n(n),
        i = r(96714),
        a = r(15654),
        c = r(59640),
        u = r(12260);
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
        if ((0, i.Et)(v) || c.m.isSsr)
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
                  return (0, u.bx)(n, r);
                })((0, a.Pu)(i, { fontSize: e, letterSpacing: r }), O, g)
              : (0, a.Pu)(i, { fontSize: e, letterSpacing: r })[w];
          },
          A = f.length >= 2 ? (0, i.sA)(f[1].coordinate - f[0].coordinate) : 1,
          S = (function (t, e, r) {
            var n = "width" === r,
              o = t.x,
              i = t.y,
              a = t.width,
              c = t.height;
            return 1 === e
              ? { start: n ? o : i, end: n ? o + a : i + c }
              : { start: n ? o + a : i + c, end: n ? o : i };
          })(p, A, w);
        return "equidistantPreserveStart" === v
          ? (function (t, e, r, n, o) {
              for (
                var i,
                  a = (n || []).slice(),
                  c = e.start,
                  u = e.end,
                  f = 0,
                  p = 1,
                  h = c,
                  y = function () {
                    var e = null == n ? void 0 : n[f];
                    if (void 0 === e) return { v: l(n, p) };
                    var i,
                      a = f,
                      y = function () {
                        return void 0 === i && (i = r(e, a)), i;
                      },
                      d = e.coordinate,
                      v = 0 === f || s(t, d, y, h, u);
                    v || ((f = 0), (h = c), (p += 1)),
                      v && ((h = d + t * (y() / 2 + o)), (f += p));
                  };
                p <= a.length;
              )
                if ((i = y())) return i.v;
              return [];
            })(A, S, j, f, y)
          : ((x =
              "preserveStart" === v || "preserveStartEnd" === v
                ? (function (t, e, r, n, o, i) {
                    var a = (n || []).slice(),
                      c = a.length,
                      u = e.start,
                      l = e.end;
                    if (i) {
                      var f = n[c - 1],
                        p = r(f, c - 1),
                        y = t * (f.coordinate + (t * p) / 2 - l);
                      (a[c - 1] = f =
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
                          u,
                          l,
                        ) &&
                          ((l = f.tickCoord - t * (p / 2 + o)),
                          (a[c - 1] = h(h({}, f), {}, { isShow: !0 })));
                    }
                    for (
                      var d = i ? c - 1 : c,
                        v = function (e) {
                          var n,
                            i = a[e],
                            c = function () {
                              return void 0 === n && (n = r(i, e)), n;
                            };
                          if (0 === e) {
                            var f = t * (i.coordinate - (t * c()) / 2 - u);
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
                          s(t, i.tickCoord, c, u, l) &&
                            ((u = i.tickCoord + t * (c() / 2 + o)),
                            (a[e] = h(h({}, i), {}, { isShow: !0 })));
                        },
                        m = 0;
                      m < d;
                      m++
                    )
                      v(m);
                    return a;
                  })(A, S, j, f, y, "preserveStartEnd" === v)
                : (function (t, e, r, n, o) {
                    for (
                      var i = (n || []).slice(),
                        a = i.length,
                        c = e.start,
                        u = e.end,
                        l = function (e) {
                          var n,
                            l = i[e],
                            f = function () {
                              return void 0 === n && (n = r(l, e)), n;
                            };
                          if (e === a - 1) {
                            var p = t * (l.coordinate + (t * f()) / 2 - u);
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
                          s(t, l.tickCoord, f, c, u) &&
                            ((u = l.tickCoord - t * (f() / 2 + o)),
                            (i[e] = h(h({}, l), {}, { isShow: !0 })));
                        },
                        f = a - 1;
                      f >= 0;
                      f--
                    )
                      l(f);
                    return i;
                  })(A, S, j, f, y)),
            x.filter(function (t) {
              return t.isShow;
            }));
      }
    },
    45608: (t, e, r) => {
      "use strict";
      r.d(e, { X: () => Lt });
      var n,
        o = r(71764),
        i = r(90626),
        a = r(34164),
        c = r(86356),
        u = r(3316),
        l = r.n(u),
        s = r(82544),
        f = r.n(s),
        p = r(64609),
        h = r.n(p),
        y = r(27367),
        d = r.n(y),
        v = r(58782),
        m = r.n(v),
        b = r(33487),
        g = r(21687),
        x = r(75055),
        w = r(12244),
        O = r(59640),
        j = r(96714),
        A = r(61195),
        S = r(93563),
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
      var F = (function (t) {
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
                var c = this.props,
                  u = c.dot,
                  l = c.points,
                  s = c.dataKey,
                  f = (0, S.J9)(this.props, !1),
                  p = (0, S.J9)(u, !0),
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
                    return e.renderDotItem(u, n);
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
                  c = n[n.length - 1].x,
                  u = t * Math.abs(a - c),
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
                        x: a < c ? a : a - u,
                        y: 0,
                        width: u,
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
                  c = n[n.length - 1].y,
                  u = t * Math.abs(a - c),
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
                        y: a < c ? a : a - u,
                        width: l + (o ? parseInt("".concat(o), 10) : 1),
                        height: Math.floor(u),
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
                  c = o.type,
                  u = o.stroke,
                  l = o.connectNulls,
                  s = o.isRange,
                  f = (o.ref, M(o, P));
                return i.createElement(
                  x.W,
                  { clipPath: r ? "url(#clipPath-".concat(n, ")") : null },
                  i.createElement(
                    b.I,
                    T({}, (0, S.J9)(f, !0), {
                      points: t,
                      connectNulls: l,
                      type: c,
                      baseLine: e,
                      layout: a,
                      stroke: "none",
                      className: "recharts-area-area",
                    }),
                  ),
                  "none" !== u &&
                    i.createElement(
                      b.I,
                      T({}, (0, S.J9)(this.props, !1), {
                        className: "recharts-area-curve",
                        layout: a,
                        type: c,
                        connectNulls: l,
                        fill: "none",
                        points: t,
                      }),
                    ),
                  "none" !== u &&
                    s &&
                    i.createElement(
                      b.I,
                      T({}, (0, S.J9)(this.props, !1), {
                        className: "recharts-area-curve",
                        layout: a,
                        type: c,
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
                  u = n.isAnimationActive,
                  l = n.animationBegin,
                  s = n.animationDuration,
                  f = n.animationEasing,
                  p = n.animationId,
                  y = this.state,
                  v = y.prevPoints,
                  m = y.prevBaseLine;
                return i.createElement(
                  c.Ay,
                  {
                    begin: l,
                    duration: s,
                    isActive: u,
                    easing: f,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "area-".concat(p),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (n) {
                    var c = n.t;
                    if (v) {
                      var u,
                        l = v.length / o.length,
                        s = o.map(function (t, e) {
                          var r = Math.floor(e * l);
                          if (v[r]) {
                            var n = v[r],
                              o = (0, j.Dj)(n.x, t.x),
                              i = (0, j.Dj)(n.y, t.y);
                            return C(C({}, t), {}, { x: o(c), y: i(c) });
                          }
                          return t;
                        });
                      return (
                        (u =
                          (0, j.Et)(a) && "number" == typeof a
                            ? (0, j.Dj)(m, a)(c)
                            : h()(a) || d()(a)
                              ? (0, j.Dj)(m, 0)(c)
                              : a.map(function (t, e) {
                                  var r = Math.floor(e * l);
                                  if (m[r]) {
                                    var n = m[r],
                                      o = (0, j.Dj)(n.x, t.x),
                                      i = (0, j.Dj)(n.y, t.y);
                                    return C(
                                      C({}, t),
                                      {},
                                      { x: o(c), y: i(c) },
                                    );
                                  }
                                  return t;
                                })),
                        r.renderAreaStatically(s, u, t, e)
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
                          r.renderClipRect(c),
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
                  c = a.prevPoints,
                  u = a.prevBaseLine,
                  l = a.totalLength;
                return i &&
                  n &&
                  n.length &&
                  ((!c && l > 0) || !m()(c, n) || !m()(u, o))
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
                  c = e.className,
                  u = e.top,
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
                  g = (0, a.A)("recharts-area", c),
                  O = s && s.allowDataOverflow,
                  j = f && f.allowDataOverflow,
                  A = O || j,
                  P = h()(v) ? this.id : v,
                  E =
                    null !== (t = (0, S.J9)(n, !1)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = E.r,
                  M = void 0 === k ? 3 : k,
                  T = E.strokeWidth,
                  _ = void 0 === T ? 2 : T,
                  C = ((0, S.sT)(n) ? n : {}).clipDot,
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
                            y: j ? u : u - y / 2,
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
                              y: u - I / 2,
                              width: p + I,
                              height: y + I,
                            }),
                          ),
                      )
                    : null,
                  b ? null : this.renderArea(A, P),
                  (n || b) && this.renderDots(A, D, P),
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
      (n = F),
        L(F, "displayName", "Area"),
        L(F, "defaultProps", {
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
        L(F, "getBaseValue", function (t, e, r, n) {
          var o = t.layout,
            i = t.baseValue,
            a = e.props.baseValue,
            c = null != a ? a : i;
          if ((0, j.Et)(c) && "number" == typeof c) return c;
          var u = "horizontal" === o ? n : r,
            l = u.scale.domain();
          if ("number" === u.type) {
            var s = Math.max(l[0], l[1]),
              f = Math.min(l[0], l[1]);
            return "dataMin" === c
              ? f
              : "dataMax" === c || s < 0
                ? s
                : Math.max(Math.min(l[0], l[1]), 0);
          }
          return "dataMin" === c ? l[0] : "dataMax" === c ? l[1] : l[0];
        }),
        L(F, "getComposedData", function (t) {
          var e,
            r = t.props,
            o = t.item,
            i = t.xAxis,
            a = t.yAxis,
            c = t.xAxisTicks,
            u = t.yAxisTicks,
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
                : ((r = (0, A.kr)(t, s)),
                  Array.isArray(r) ? (g = !0) : (r = [m, r]));
              var n = null == r[1] || (v && null == (0, A.kr)(t, s));
              return b
                ? {
                    x: (0, A.nb)({
                      axis: i,
                      ticks: c,
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
                    y: (0, A.nb)({
                      axis: a,
                      ticks: u,
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
        L(F, "renderDotItem", function (t, e) {
          var r;
          if (i.isValidElement(t)) r = i.cloneElement(t, e);
          else if (l()(t)) r = t(e);
          else {
            var n = (0, a.A)(
                "recharts-area-dot",
                "boolean" != typeof t ? t.className : "",
              ),
              o = e.key,
              c = M(e, E);
            r = i.createElement(g.c, T({}, c, { key: o, className: n }));
          }
          return r;
        });
      var U = r(20283),
        W = r(10800),
        $ = ["type", "layout", "connectNulls", "ref"],
        q = ["key"];
      function K(t) {
        return (
          (K =
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
          K(t)
        );
      }
      function X(t, e) {
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
      function J(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? H(Object(r), !0).forEach(function (e) {
                nt(t, e, r[e]);
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
      function G(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Y(t);
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
            if ("string" == typeof t) return Y(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Y(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function Z(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, ot(n.key), n);
        }
      }
      function Q(t, e, r) {
        return (
          (e = et(e)),
          (function (t, e) {
            if (e && ("object" === K(e) || "function" == typeof e)) return e;
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
            tt()
              ? Reflect.construct(e, r || [], et(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function tt() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (tt = function () {
          return !!t;
        })();
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
      function nt(t, e, r) {
        return (
          (e = ot(e)) in t
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
      function ot(t) {
        var e = (function (t, e) {
          if ("object" != K(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != K(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == K(e) ? e : e + "";
      }
      var it = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            nt((t = Q(this, e, [].concat(n))), "state", {
              isAnimationFinished: !0,
              totalLength: 0,
            }),
            nt(t, "generateSimpleStrokeDasharray", function (t, e) {
              return "".concat(e, "px ").concat(t - e, "px");
            }),
            nt(t, "getStrokeDasharray", function (r, n, o) {
              var i = o.reduce(function (t, e) {
                return t + e;
              });
              if (!i) return t.generateSimpleStrokeDasharray(n, r);
              for (
                var a = Math.floor(r / i),
                  c = r % i,
                  u = n - r,
                  l = [],
                  s = 0,
                  f = 0;
                s < o.length;
                f += o[s], ++s
              )
                if (f + o[s] > c) {
                  l = [].concat(G(o.slice(0, s)), [c - f]);
                  break;
                }
              var p = l.length % 2 == 0 ? [0, u] : [u];
              return []
                .concat(G(e.repeat(o, a)), G(l), p)
                .map(function (t) {
                  return "".concat(t, "px");
                })
                .join(", ");
            }),
            nt(t, "id", (0, j.NF)("recharts-line-")),
            nt(t, "pathRef", function (e) {
              t.mainCurve = e;
            }),
            nt(t, "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 }),
                t.props.onAnimationEnd && t.props.onAnimationEnd();
            }),
            nt(t, "handleAnimationStart", function () {
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
              e && rt(t, e);
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
            {
              key: "repeat",
              value: function (t, e) {
                for (
                  var r = t.length % 2 != 0 ? [].concat(G(t), [0]) : t,
                    n = [],
                    o = 0;
                  o < e;
                  ++o
                )
                  n = [].concat(G(n), G(r));
                return n;
              },
            },
            {
              key: "renderDotItem",
              value: function (t, e) {
                var r;
                if (i.isValidElement(t)) r = i.cloneElement(t, e);
                else if (l()(t)) r = t(e);
                else {
                  var n = e.key,
                    o = X(e, q),
                    c = (0, a.A)(
                      "recharts-line-dot",
                      "boolean" != typeof t ? t.className : "",
                    );
                  r = i.createElement(g.c, V({ key: n }, o, { className: c }));
                }
                return r;
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
                var r = this.props,
                  n = r.points,
                  o = r.xAxis,
                  a = r.yAxis,
                  c = r.layout,
                  u = r.children,
                  l = (0, S.aS)(u, W.u);
                if (!l) return null;
                var s = function (t, e) {
                    return {
                      x: t.x,
                      y: t.y,
                      value: t.value,
                      errorVal: (0, A.kr)(t.payload, e),
                    };
                  },
                  f = { clipPath: t ? "url(#clipPath-".concat(e, ")") : null };
                return i.createElement(
                  x.W,
                  f,
                  l.map(function (t) {
                    return i.cloneElement(t, {
                      key: "bar-".concat(t.props.dataKey),
                      data: n,
                      xAxis: o,
                      yAxis: a,
                      layout: c,
                      dataPointFormatter: s,
                    });
                  }),
                );
              },
            },
            {
              key: "renderDots",
              value: function (t, r, n) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var o = this.props,
                  a = o.dot,
                  c = o.points,
                  u = o.dataKey,
                  l = (0, S.J9)(this.props, !1),
                  s = (0, S.J9)(a, !0),
                  f = c.map(function (t, r) {
                    var n = J(
                      J(J({ key: "dot-".concat(r), r: 3 }, l), s),
                      {},
                      {
                        index: r,
                        cx: t.x,
                        cy: t.y,
                        value: t.value,
                        dataKey: u,
                        payload: t.payload,
                        points: c,
                      },
                    );
                    return e.renderDotItem(a, n);
                  }),
                  p = {
                    clipPath: t
                      ? "url(#clipPath-".concat(r ? "" : "dots-").concat(n, ")")
                      : null,
                  };
                return i.createElement(
                  x.W,
                  V({ className: "recharts-line-dots", key: "dots" }, p),
                  f,
                );
              },
            },
            {
              key: "renderCurveStatically",
              value: function (t, e, r, n) {
                var o = this.props,
                  a = o.type,
                  c = o.layout,
                  u = o.connectNulls,
                  l = (o.ref, X(o, $)),
                  s = J(
                    J(
                      J({}, (0, S.J9)(l, !0)),
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
                    { type: a, layout: c, connectNulls: u },
                  );
                return i.createElement(
                  b.I,
                  V({}, s, { pathRef: this.pathRef }),
                );
              },
            },
            {
              key: "renderCurveWithAnimation",
              value: function (t, e) {
                var r = this,
                  n = this.props,
                  o = n.points,
                  a = n.strokeDasharray,
                  u = n.isAnimationActive,
                  l = n.animationBegin,
                  s = n.animationDuration,
                  f = n.animationEasing,
                  p = n.animationId,
                  h = n.animateNewValues,
                  y = n.width,
                  d = n.height,
                  v = this.state,
                  m = v.prevPoints,
                  b = v.totalLength;
                return i.createElement(
                  c.Ay,
                  {
                    begin: l,
                    duration: s,
                    isActive: u,
                    easing: f,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "line-".concat(p),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (n) {
                    var i = n.t;
                    if (m) {
                      var c = m.length / o.length,
                        u = o.map(function (t, e) {
                          var r = Math.floor(e * c);
                          if (m[r]) {
                            var n = m[r],
                              o = (0, j.Dj)(n.x, t.x),
                              a = (0, j.Dj)(n.y, t.y);
                            return J(J({}, t), {}, { x: o(i), y: a(i) });
                          }
                          if (h) {
                            var u = (0, j.Dj)(2 * y, t.x),
                              l = (0, j.Dj)(d / 2, t.y);
                            return J(J({}, t), {}, { x: u(i), y: l(i) });
                          }
                          return J(J({}, t), {}, { x: t.x, y: t.y });
                        });
                      return r.renderCurveStatically(u, t, e);
                    }
                    var l,
                      s = (0, j.Dj)(0, b)(i);
                    if (a) {
                      var f = ""
                        .concat(a)
                        .split(/[,\s]+/gim)
                        .map(function (t) {
                          return parseFloat(t);
                        });
                      l = r.getStrokeDasharray(s, b, f);
                    } else l = r.generateSimpleStrokeDasharray(b, s);
                    return r.renderCurveStatically(o, t, e, {
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
                  c = i.totalLength;
                return o && n && n.length && ((!a && c > 0) || !m()(a, n))
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
                  n = e.dot,
                  o = e.points,
                  c = e.className,
                  u = e.xAxis,
                  l = e.yAxis,
                  s = e.top,
                  f = e.left,
                  p = e.width,
                  y = e.height,
                  d = e.isAnimationActive,
                  v = e.id;
                if (r || !o || !o.length) return null;
                var m = this.state.isAnimationFinished,
                  b = 1 === o.length,
                  g = (0, a.A)("recharts-line", c),
                  O = u && u.allowDataOverflow,
                  j = l && l.allowDataOverflow,
                  A = O || j,
                  P = h()(v) ? this.id : v,
                  E =
                    null !== (t = (0, S.J9)(n, !1)) && void 0 !== t
                      ? t
                      : { r: 3, strokeWidth: 2 },
                  k = E.r,
                  M = void 0 === k ? 3 : k,
                  T = E.strokeWidth,
                  _ = void 0 === T ? 2 : T,
                  C = ((0, S.sT)(n) ? n : {}).clipDot,
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
                            x: O ? f : f - p / 2,
                            y: j ? s : s - y / 2,
                            width: O ? p : 2 * p,
                            height: j ? y : 2 * y,
                          }),
                        ),
                        !D &&
                          i.createElement(
                            "clipPath",
                            { id: "clipPath-dots-".concat(P) },
                            i.createElement("rect", {
                              x: f - I / 2,
                              y: s - I / 2,
                              width: p + I,
                              height: y + I,
                            }),
                          ),
                      )
                    : null,
                  !b && this.renderCurve(A, P),
                  this.renderErrorBar(A, P),
                  (b || n) && this.renderDots(A, D, P),
                  (!d || m) && w.Z.renderCallByParent(this.props, o),
                );
              },
            },
          ]) && Z(r.prototype, n),
          o && Z(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(i.PureComponent);
      function at(t) {
        return (
          (at =
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
          at(t)
        );
      }
      function ct(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, ht(n.key), n);
        }
      }
      function ut(t, e, r) {
        return (
          (e = st(e)),
          (function (t, e) {
            if (e && ("object" === at(e) || "function" == typeof e)) return e;
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
            lt()
              ? Reflect.construct(e, r || [], st(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function lt() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (lt = function () {
          return !!t;
        })();
      }
      function st(t) {
        return (
          (st = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          st(t)
        );
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
      function pt(t, e, r) {
        return (
          (e = ht(e)) in t
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
      function ht(t) {
        var e = (function (t, e) {
          if ("object" != at(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != at(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == at(e) ? e : e + "";
      }
      nt(it, "displayName", "Line"),
        nt(it, "defaultProps", {
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
          isAnimationActive: !O.m.isSsr,
          animateNewValues: !0,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
          hide: !1,
          label: !1,
        }),
        nt(it, "getComposedData", function (t) {
          var e = t.props,
            r = t.xAxis,
            n = t.yAxis,
            o = t.xAxisTicks,
            i = t.yAxisTicks,
            a = t.dataKey,
            c = t.bandSize,
            u = t.displayedData,
            l = t.offset,
            s = e.layout;
          return J(
            {
              points: u.map(function (t, e) {
                var u = (0, A.kr)(t, a);
                return "horizontal" === s
                  ? {
                      x: (0, A.nb)({
                        axis: r,
                        ticks: o,
                        bandSize: c,
                        entry: t,
                        index: e,
                      }),
                      y: h()(u) ? null : n.scale(u),
                      value: u,
                      payload: t,
                    }
                  : {
                      x: h()(u) ? null : r.scale(u),
                      y: (0, A.nb)({
                        axis: n,
                        ticks: i,
                        bandSize: c,
                        entry: t,
                        index: e,
                      }),
                      value: u,
                      payload: t,
                    };
              }),
              layout: s,
            },
            l,
          );
        });
      var yt = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ut(this, e, arguments)
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
              e && ft(t, e);
          })(e, t),
          (r = e),
          (n = [
            {
              key: "render",
              value: function () {
                return null;
              },
            },
          ]) && ct(r.prototype, n),
          o && ct(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(i.Component);
      pt(yt, "displayName", "ZAxis"),
        pt(yt, "defaultProps", {
          zAxisId: 0,
          range: [64, 64],
          scale: "auto",
          type: "number",
        });
      var dt = r(72040),
        vt = r(43998),
        mt = r(17134),
        bt = r(53818),
        gt = ["option", "isActive"];
      function xt() {
        return (
          (xt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          xt.apply(this, arguments)
        );
      }
      function wt(t, e) {
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
      function Ot(t) {
        var e = t.option,
          r = t.isActive,
          n = wt(t, gt);
        return "string" == typeof e
          ? i.createElement(
              bt.yp,
              xt(
                {
                  option: i.createElement(mt.i, xt({ type: e }, n)),
                  isActive: r,
                  shapeType: "symbols",
                },
                n,
              ),
            )
          : i.createElement(
              bt.yp,
              xt({ option: e, isActive: r, shapeType: "symbols" }, n),
            );
      }
      function jt(t) {
        return (
          (jt =
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
          jt(t)
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
      function St(t, e) {
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
            ? St(Object(r), !0).forEach(function (e) {
                Ct(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : St(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function Et(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Dt(n.key), n);
        }
      }
      function kt(t, e, r) {
        return (
          (e = Tt(e)),
          (function (t, e) {
            if (e && ("object" === jt(e) || "function" == typeof e)) return e;
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
            Mt()
              ? Reflect.construct(e, r || [], Tt(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function Mt() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Mt = function () {
          return !!t;
        })();
      }
      function Tt(t) {
        return (
          (Tt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Tt(t)
        );
      }
      function _t(t, e) {
        return (
          (_t = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          _t(t, e)
        );
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
      function Dt(t) {
        var e = (function (t, e) {
          if ("object" != jt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != jt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == jt(e) ? e : e + "";
      }
      var It = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            Ct((t = kt(this, e, [].concat(n))), "state", {
              isAnimationFinished: !1,
            }),
            Ct(t, "handleAnimationEnd", function () {
              t.setState({ isAnimationFinished: !0 });
            }),
            Ct(t, "handleAnimationStart", function () {
              t.setState({ isAnimationFinished: !1 });
            }),
            Ct(t, "id", (0, j.NF)("recharts-scatter-")),
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
              e && _t(t, e);
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
                  c = (0, S.J9)(this.props, !1);
                return t.map(function (t, r) {
                  var u = a === r,
                    l = u ? o : n,
                    s = Pt(Pt({}, c), t);
                  return i.createElement(
                    x.W,
                    At(
                      {
                        className: "recharts-scatter-symbol",
                        key: "symbol-"
                          .concat(null == t ? void 0 : t.cx, "-")
                          .concat(null == t ? void 0 : t.cy, "-")
                          .concat(null == t ? void 0 : t.size, "-")
                          .concat(r),
                      },
                      (0, vt.XC)(e.props, t, r),
                      { role: "img" },
                    ),
                    i.createElement(
                      Ot,
                      At(
                        { option: l, isActive: u, key: "symbol-".concat(r) },
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
                  u = e.animationEasing,
                  l = e.animationId,
                  s = this.state.prevPoints;
                return i.createElement(
                  c.Ay,
                  {
                    begin: o,
                    duration: a,
                    isActive: n,
                    easing: u,
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
                          return Pt(
                            Pt({}, t),
                            {},
                            { cx: o(n), cy: i(n), size: a(n) },
                          );
                        }
                        var c = (0, j.Dj)(0, t.size);
                        return Pt(Pt({}, t), {}, { size: c(n) });
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
                  a = (0, S.aS)(o, W.u);
                return a
                  ? a.map(function (t, o) {
                      var a = t.props,
                        c = a.direction,
                        u = a.dataKey;
                      return i.cloneElement(t, {
                        key: "".concat(c, "-").concat(u, "-").concat(e[o]),
                        data: e,
                        xAxis: r,
                        yAxis: n,
                        layout: "x" === c ? "vertical" : "horizontal",
                        dataPointFormatter: function (t, e) {
                          return {
                            x: t.cx,
                            y: t.cy,
                            value: "x" === c ? +t.node.x : +t.node.y,
                            errorVal: (0, A.kr)(t, e),
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
                  c = r.lineJointType,
                  u = (0, S.J9)(this.props, !1),
                  s = (0, S.J9)(o, !1);
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
                var m = Pt(
                  Pt(Pt({}, u), {}, { fill: "none", stroke: u && u.fill }, s),
                  {},
                  { points: t },
                );
                return (
                  (e = i.isValidElement(o)
                    ? i.cloneElement(o, m)
                    : l()(o)
                      ? o(m)
                      : i.createElement(b.I, At({}, m, { type: c }))),
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
                  c = t.xAxis,
                  u = t.yAxis,
                  l = t.left,
                  s = t.top,
                  f = t.width,
                  p = t.height,
                  y = t.id,
                  d = t.isAnimationActive;
                if (e || !r || !r.length) return null;
                var v = this.state.isAnimationFinished,
                  m = (0, a.A)("recharts-scatter", o),
                  b = c && c.allowDataOverflow,
                  g = u && u.allowDataOverflow,
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
          ]) && Et(r.prototype, n),
          o && Et(r, o),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, o;
      })(i.PureComponent);
      Ct(It, "displayName", "Scatter"),
        Ct(It, "defaultProps", {
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
        Ct(It, "getComposedData", function (t) {
          var e = t.xAxis,
            r = t.yAxis,
            n = t.zAxis,
            o = t.item,
            i = t.displayedData,
            a = t.xAxisTicks,
            c = t.yAxisTicks,
            u = t.offset,
            l = o.props.tooltipType,
            s = (0, S.aS)(o.props.children, dt.f),
            f = h()(e.dataKey) ? o.props.dataKey : e.dataKey,
            p = h()(r.dataKey) ? o.props.dataKey : r.dataKey,
            y = n && n.dataKey,
            d = n ? n.range : yt.defaultProps.range,
            v = d && d[0],
            m = e.scale.bandwidth ? e.scale.bandwidth() : 0,
            b = r.scale.bandwidth ? r.scale.bandwidth() : 0,
            g = i.map(function (t, i) {
              var u = (0, A.kr)(t, f),
                d = (0, A.kr)(t, p),
                g = (!h()(y) && (0, A.kr)(t, y)) || "-",
                x = [
                  {
                    name: h()(e.dataKey) ? o.props.name : e.name || e.dataKey,
                    unit: e.unit || "",
                    value: u,
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
              var w = (0, A.nb)({
                  axis: e,
                  ticks: a,
                  bandSize: m,
                  entry: t,
                  index: i,
                  dataKey: f,
                }),
                O = (0, A.nb)({
                  axis: r,
                  ticks: c,
                  bandSize: b,
                  entry: t,
                  index: i,
                  dataKey: p,
                }),
                j = "-" !== g ? n.scale(g) : v,
                S = Math.sqrt(Math.max(j, 0) / Math.PI);
              return Pt(
                Pt({}, t),
                {},
                {
                  cx: w,
                  cy: O,
                  x: w - S,
                  y: O - S,
                  xAxis: e,
                  yAxis: r,
                  zAxis: n,
                  width: 2 * S,
                  height: 2 * S,
                  size: j,
                  node: { x: u, y: d, z: g },
                  tooltipPayload: x,
                  tooltipPosition: { x: w, y: O },
                  payload: t,
                },
                s && s[i] && s[i].props,
              );
            });
          return Pt({ points: g }, u);
        });
      var Nt = r(90150),
        Bt = r(73077),
        Rt = r(12260),
        Lt = (0, o.gu)({
          chartName: "ComposedChart",
          GraphicalChild: [it, F, U.y, It],
          axisComponents: [
            { axisType: "xAxis", AxisComp: Nt.W },
            { axisType: "yAxis", AxisComp: Bt.h },
            { axisType: "zAxis", AxisComp: yt },
          ],
          formatAxisMap: Rt.pr,
        });
    },
    74295: (t, e, r) => {
      "use strict";
      r.d(e, { r: () => u });
      var n = r(71764),
        o = r(66579),
        i = r(80446),
        a = r(90134),
        c = r(6435),
        u = (0, n.gu)({
          chartName: "PieChart",
          GraphicalChild: c.F,
          validateTooltipEventTypes: ["item"],
          defaultTooltipEventType: "item",
          legendContent: "children",
          axisComponents: [
            { axisType: "angleAxis", AxisComp: o.r },
            { axisType: "radiusAxis", AxisComp: i.E },
          ],
          formatAxisMap: a.pr,
          defaultProps: {
            layout: "centric",
            startAngle: 0,
            endAngle: 360,
            cx: "50%",
            cy: "50%",
            innerRadius: 0,
            outerRadius: "80%",
          },
        });
    },
    76721: (t, e, r) => {
      "use strict";
      r.d(e, { V: () => u });
      var n = r(71764),
        o = r(92665),
        i = r(66579),
        a = r(80446),
        c = r(90134),
        u = (0, n.gu)({
          chartName: "RadarChart",
          GraphicalChild: o.V,
          axisComponents: [
            { axisType: "angleAxis", AxisComp: i.r },
            { axisType: "radiusAxis", AxisComp: a.E },
          ],
          formatAxisMap: c.pr,
          defaultProps: {
            layout: "centric",
            startAngle: 90,
            endAngle: -270,
            cx: "50%",
            cy: "50%",
            innerRadius: 0,
            outerRadius: "80%",
          },
        });
    },
    71764: (t, e, r) => {
      "use strict";
      r.d(e, { gu: () => Ge });
      var n = r(90626),
        o = r(64609),
        i = r.n(o),
        a = r(3316),
        c = r.n(a),
        u = r(50199),
        l = r.n(u),
        s = r(52686),
        f = r.n(s),
        p = r(97825),
        h = r.n(p),
        y = r(51504),
        d = r.n(y),
        v = r(34164),
        m = r(68841),
        b = r(67125),
        g = r(75055),
        x = r(30230),
        w = r(75620),
        O = r(21687),
        j = r(52857),
        A = r(93563),
        S = r(28583),
        P = r(34656),
        E = r(61195),
        k = r(96714);
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
          (e = U(e)),
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
            F()
              ? Reflect.construct(e, r || [], U(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function F() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (F = function () {
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
      var K = function (t) {
          return t.changedTouches && !!t.changedTouches.length;
        },
        X = (function (t) {
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
                var e = K(t) ? t.changedTouches[0] : t;
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
                    c = Math.floor(r + i / 2) - 1;
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
                      y1: c,
                      x2: e + o - 1,
                      y2: c,
                      fill: "none",
                      stroke: "#fff",
                    }),
                    n.createElement("line", {
                      x1: e + 1,
                      y1: c + 2,
                      x2: e + o - 1,
                      y2: c + 2,
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
                    : c()(t)
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
                    c = t.startIndex,
                    u = t.endIndex;
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
                            var c = e.length,
                              u = (0, S.z)()
                                .domain(l()(0, c))
                                .range([o, o + i - a]),
                              s = u.domain().map(function (t) {
                                return u(t);
                              });
                            return {
                              isTextActive: !1,
                              isSlideMoving: !1,
                              isTravellerMoving: !1,
                              isTravellerFocused: !1,
                              startX: u(r),
                              endX: u(n),
                              scale: u,
                              scaleValues: s,
                            };
                          })({
                            data: r,
                            width: n,
                            x: o,
                            travellerWidth: i,
                            startIndex: c,
                            endIndex: u,
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
                    c = i.data.length - 1,
                    u = Math.min(r, n),
                    l = Math.max(r, n),
                    s = e.getIndexInRange(o, u),
                    f = e.getIndexInRange(o, l);
                  return {
                    startIndex: s - (s % a),
                    endIndex: f === c ? c : f - (f % a),
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
                  return c()(n) ? n(i, t) : i;
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
                    c = i.width,
                    u = i.travellerWidth,
                    l = i.startIndex,
                    s = i.endIndex,
                    f = i.onChange,
                    p = t.pageX - r;
                  p > 0
                    ? (p = Math.min(p, a + c - u - o, a + c - u - n))
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
                  var r = K(e) ? e.changedTouches[0] : e;
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
                    c = this.props,
                    u = c.x,
                    l = c.width,
                    s = c.travellerWidth,
                    f = c.onChange,
                    p = c.gap,
                    h = c.data,
                    y = { startX: this.state.startX, endX: this.state.endX },
                    d = t.pageX - r;
                  d > 0
                    ? (d = Math.min(d, u + l - s - a))
                    : d < 0 && (d = Math.max(d, u - a)),
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
                          (o > i ? m % p === 0 : b % p === 0)) ||
                          (o < i && b === t) ||
                          ("endX" === n &&
                            (o > i ? b % p === 0 : m % p === 0)) ||
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
                    c = this.state[e],
                    u = o.indexOf(c);
                  if (-1 !== u) {
                    var l = u + t;
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
                    c = t.stroke;
                  return n.createElement("rect", {
                    stroke: c,
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
                    c = t.children,
                    u = t.padding,
                    l = n.Children.only(c);
                  return l
                    ? n.cloneElement(l, {
                        x: e,
                        y: r,
                        width: o,
                        height: i,
                        margin: u,
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
                    c = this.props,
                    u = c.y,
                    l = c.travellerWidth,
                    s = c.height,
                    f = c.traveller,
                    p = c.ariaLabel,
                    h = c.data,
                    y = c.startIndex,
                    d = c.endIndex,
                    v = Math.max(t, this.props.x),
                    m = R(
                      R({}, (0, A.J9)(this.props, !1)),
                      {},
                      { x: v, y: u, width: l, height: s },
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
                    c = r.travellerWidth,
                    u = Math.min(t, e) + c,
                    l = Math.max(Math.abs(e - t) - c, 0);
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
                    x: u,
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
                    c = t.stroke,
                    u = this.state,
                    l = u.startX,
                    s = u.endX,
                    f = { pointerEvents: "none", fill: c };
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
                    c = t.width,
                    u = t.height,
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
                    !(0, k.Et)(c) ||
                    !(0, k.Et)(u) ||
                    c <= 0 ||
                    u <= 0
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
      $(X, "displayName", "Brush"),
        $(X, "defaultProps", {
          height: 40,
          travellerWidth: 5,
          gap: 1,
          fill: "#fff",
          stroke: "#666",
          padding: { top: 1, right: 1, bottom: 1, left: 1 },
          leaveTimeOut: 1e3,
          alwaysShowText: !1,
        });
      var V = r(15654),
        H = r(11766),
        J = r(25068),
        G = function (t, e) {
          var r = t.alwaysShow,
            n = t.ifOverflow;
          return r && (n = "extendDomain"), n === e;
        },
        Y = r(12260),
        Z = r(27664);
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
                ut(t, e, r[e]);
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
      function ct(t, e) {
        return (
          (ct = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          ct(t, e)
        );
      }
      function ut(t, e, r) {
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
              e && ct(t, e);
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
                  c = t.clipPathId,
                  u = (0, k.vh)(r),
                  l = (0, k.vh)(o);
                if (
                  ((0, Z.R)(
                    void 0 === a,
                    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
                  ),
                  !u || !l)
                )
                  return null;
                var s = (function (t) {
                  var e = t.x,
                    r = t.y,
                    n = t.xAxis,
                    o = t.yAxis,
                    i = (0, Y.P2)({ x: n.scale, y: o.scale }),
                    a = i.apply({ x: e, y: r }, { bandAware: !0 });
                  return G(t, "discard") && !i.isInRange(a) ? null : a;
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
                        clipPath: G(this.props, "hidden")
                          ? "url(#".concat(c, ")")
                          : void 0,
                      },
                      (0, A.J9)(this.props, !0),
                    ),
                    {},
                    { cx: f, cy: p },
                  );
                return n.createElement(
                  g.W,
                  { className: (0, v.A)("recharts-reference-dot", d) },
                  e.renderDot(y, m),
                  J.J.renderCallByParent(this.props, {
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
      ut(st, "displayName", "ReferenceDot"),
        ut(st, "defaultProps", {
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
        ut(st, "renderDot", function (t, e) {
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : c()(t)
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
      var ft = r(49556),
        pt = r.n(ft),
        ht = r(7351);
      function yt(t) {
        return (
          (yt =
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
          yt(t)
        );
      }
      function dt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, jt(n.key), n);
        }
      }
      function vt(t, e, r) {
        return (
          (e = bt(e)),
          (function (t, e) {
            if (e && ("object" === yt(e) || "function" == typeof e)) return e;
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
            mt()
              ? Reflect.construct(e, r || [], bt(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function mt() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (mt = function () {
          return !!t;
        })();
      }
      function bt(t) {
        return (
          (bt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          bt(t)
        );
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
          (e = jt(e)) in t
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
      function jt(t) {
        var e = (function (t, e) {
          if ("object" != yt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != yt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == yt(e) ? e : e + "";
      }
      function At(t, e) {
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return St(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return St(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function St(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function Pt() {
        return (
          (Pt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          Pt.apply(this, arguments)
        );
      }
      function Et(t) {
        var e = t.x,
          r = t.y,
          o = t.segment,
          i = t.xAxisId,
          a = t.yAxisId,
          u = t.shape,
          l = t.className,
          s = t.alwaysShow,
          f = (0, ht.Yp)(),
          p = (0, ht.AF)(i),
          h = (0, ht.Nk)(a),
          y = (0, ht.sk)();
        if (!f || !y) return null;
        (0, Z.R)(
          void 0 === s,
          'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
        );
        var d = (function (t, e, r, n, o, i, a, c, u) {
          var l = o.x,
            s = o.y,
            f = o.width,
            p = o.height;
          if (r) {
            var h = u.y,
              y = t.y.apply(h, { position: i });
            if (G(u, "discard") && !t.y.isInRange(y)) return null;
            var d = [
              { x: l + f, y },
              { x: l, y },
            ];
            return "left" === c ? d.reverse() : d;
          }
          if (e) {
            var v = u.x,
              m = t.x.apply(v, { position: i });
            if (G(u, "discard") && !t.x.isInRange(m)) return null;
            var b = [
              { x: m, y: s + p },
              { x: m, y: s },
            ];
            return "top" === a ? b.reverse() : b;
          }
          if (n) {
            var g = u.segment.map(function (e) {
              return t.apply(e, { position: i });
            });
            return G(u, "discard") &&
              pt()(g, function (e) {
                return !t.isInRange(e);
              })
              ? null
              : g;
          }
          return null;
        })(
          (0, Y.P2)({ x: p.scale, y: h.scale }),
          (0, k.vh)(e),
          (0, k.vh)(r),
          o && 2 === o.length,
          y,
          t.position,
          p.orientation,
          h.orientation,
          t,
        );
        if (!d) return null;
        var m = At(d, 2),
          b = m[0],
          x = b.x,
          w = b.y,
          O = m[1],
          j = O.x,
          S = O.y,
          P = wt(
            wt(
              { clipPath: G(t, "hidden") ? "url(#".concat(f, ")") : void 0 },
              (0, A.J9)(t, !0),
            ),
            {},
            { x1: x, y1: w, x2: j, y2: S },
          );
        return n.createElement(
          g.W,
          { className: (0, v.A)("recharts-reference-line", l) },
          (function (t, e) {
            return n.isValidElement(t)
              ? n.cloneElement(t, e)
              : c()(t)
                ? t(e)
                : n.createElement(
                    "line",
                    Pt({}, e, { className: "recharts-reference-line-line" }),
                  );
          })(u, P),
          J.J.renderCallByParent(t, (0, Y.vh)({ x1: x, y1: w, x2: j, y2: S })),
        );
      }
      var kt = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            vt(this, e, arguments)
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
              e && gt(t, e);
          })(e, t),
          (r = e),
          (o = [
            {
              key: "render",
              value: function () {
                return n.createElement(Et, this.props);
              },
            },
          ]) && dt(r.prototype, o),
          i && dt(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, i;
      })(n.Component);
      function Mt() {
        return (
          (Mt = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          Mt.apply(this, arguments)
        );
      }
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
      function Ct(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _t(Object(r), !0).forEach(function (e) {
                Lt(t, e, r[e]);
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
      function Dt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, zt(n.key), n);
        }
      }
      function It(t, e, r) {
        return (
          (e = Bt(e)),
          (function (t, e) {
            if (e && ("object" === Tt(e) || "function" == typeof e)) return e;
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
            Nt()
              ? Reflect.construct(e, r || [], Bt(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function Nt() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Nt = function () {
          return !!t;
        })();
      }
      function Bt(t) {
        return (
          (Bt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Bt(t)
        );
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
      function Lt(t, e, r) {
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
          if ("object" != Tt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Tt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Tt(e) ? e : e + "";
      }
      Ot(kt, "displayName", "ReferenceLine"),
        Ot(kt, "defaultProps", {
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
      var Ft = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            It(this, e, arguments)
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
              e && Rt(t, e);
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
                  c = t.className,
                  u = t.alwaysShow,
                  l = t.clipPathId;
                (0, Z.R)(
                  void 0 === u,
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
                    c = o.y1,
                    u = o.y2,
                    l = o.xAxis,
                    s = o.yAxis;
                  if (!l || !s) return null;
                  var f = (0, Y.P2)({ x: l.scale, y: s.scale }),
                    p = {
                      x: t ? f.x.apply(i, { position: "start" }) : f.x.rangeMin,
                      y: r ? f.y.apply(c, { position: "start" }) : f.y.rangeMin,
                    },
                    h = {
                      x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
                      y: n ? f.y.apply(u, { position: "end" }) : f.y.rangeMax,
                    };
                  return !G(o, "discard") || (f.isInRange(p) && f.isInRange(h))
                    ? (0, Y.sl)(p, h)
                    : null;
                })(s, f, p, h, this.props);
                if (!d && !y) return null;
                var m = G(this.props, "hidden")
                  ? "url(#".concat(l, ")")
                  : void 0;
                return n.createElement(
                  g.W,
                  { className: (0, v.A)("recharts-reference-area", c) },
                  e.renderRect(
                    y,
                    Ct(Ct({ clipPath: m }, (0, A.J9)(this.props, !0)), d),
                  ),
                  J.J.renderCallByParent(this.props, d),
                );
              },
            },
          ]) && Dt(r.prototype, o),
          i && Dt(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, i;
      })(n.Component);
      function Ut(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Wt(t);
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
            if ("string" == typeof t) return Wt(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Wt(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Wt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      Lt(Ft, "displayName", "ReferenceArea"),
        Lt(Ft, "defaultProps", {
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
        Lt(Ft, "renderRect", function (t, e) {
          return n.isValidElement(t)
            ? n.cloneElement(t, e)
            : c()(t)
              ? t(e)
              : n.createElement(
                  j.M,
                  Mt({}, e, { className: "recharts-reference-area-rect" }),
                );
        });
      var $t = function (t, e, r, n, o) {
          var i = (0, A.aS)(t, kt),
            a = (0, A.aS)(t, st),
            c = [].concat(Ut(i), Ut(a)),
            u = (0, A.aS)(t, Ft),
            l = "".concat(n, "Id"),
            s = n[0],
            f = e;
          if (
            (c.length &&
              (f = c.reduce(function (t, e) {
                if (
                  e.props[l] === r &&
                  G(e.props, "extendDomain") &&
                  (0, k.Et)(e.props[s])
                ) {
                  var n = e.props[s];
                  return [Math.min(t[0], n), Math.max(t[1], n)];
                }
                return t;
              }, f)),
            u.length)
          ) {
            var p = "".concat(s, "1"),
              h = "".concat(s, "2");
            f = u.reduce(function (t, e) {
              if (
                e.props[l] === r &&
                G(e.props, "extendDomain") &&
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
        qt = r(90134),
        Kt = r(80103),
        Xt = r(29570),
        Vt = new (r.n(Xt)())(),
        Ht = "recharts.syncMouseEvents",
        Jt = r(43998);
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
      function Yt(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Qt(n.key), n);
        }
      }
      function Zt(t, e, r) {
        return (
          (e = Qt(e)) in t
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
      function Qt(t) {
        var e = (function (t, e) {
          if ("object" != Gt(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Gt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == Gt(e) ? e : e + "";
      }
      var te = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Zt(this, "activeIndex", 0),
              Zt(this, "coordinateList", []),
              Zt(this, "layout", "horizontal");
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
                  c = void 0 === a ? null : a,
                  u = t.offset,
                  l = void 0 === u ? null : u,
                  s = t.mouseHandlerCallback,
                  f = void 0 === s ? null : s;
                (this.coordinateList =
                  null !== (e = null != n ? n : this.coordinateList) &&
                  void 0 !== e
                    ? e
                    : []),
                  (this.container = null != i ? i : this.container),
                  (this.layout = null != c ? c : this.layout),
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
                    c =
                      (null === (t = window) || void 0 === t
                        ? void 0
                        : t.scrollX) || 0,
                    u =
                      (null === (e = window) || void 0 === e
                        ? void 0
                        : e.scrollY) || 0,
                    l = n + a + c,
                    s = o + this.offset.top + i / 2 + u;
                  this.mouseHandlerCallback({ pageX: l, pageY: s });
                }
              },
            },
          ]) && Yt(t.prototype, e),
          r && Yt(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, r;
      })();
      var ee = r(53818),
        re = r(33487);
      function ne(t) {
        return (
          (ne =
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
          ne(t)
        );
      }
      var oe = ["x", "y", "top", "left", "width", "height", "className"];
      function ie() {
        return (
          (ie = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          ie.apply(this, arguments)
        );
      }
      function ae(t, e) {
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
      function ce(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != ne(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != ne(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == ne(n) ? n : n + "") in t
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
      function ue(t, e) {
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
      var le = function (t, e, r, n, o, i) {
          return "M"
            .concat(t, ",")
            .concat(o, "v")
            .concat(n, "M")
            .concat(i, ",")
            .concat(e, "h")
            .concat(r);
        },
        se = function (t) {
          var e = t.x,
            r = void 0 === e ? 0 : e,
            o = t.y,
            i = void 0 === o ? 0 : o,
            a = t.top,
            c = void 0 === a ? 0 : a,
            u = t.left,
            l = void 0 === u ? 0 : u,
            s = t.width,
            f = void 0 === s ? 0 : s,
            p = t.height,
            h = void 0 === p ? 0 : p,
            y = t.className,
            d = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? ae(Object(r), !0).forEach(function (e) {
                      ce(t, e, r[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(r),
                      )
                    : ae(Object(r)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(r, e),
                        );
                      });
              }
              return t;
            })({ x: r, y: i, top: c, left: l, width: f, height: h }, ue(t, oe));
          return (0, k.Et)(r) &&
            (0, k.Et)(i) &&
            (0, k.Et)(f) &&
            (0, k.Et)(h) &&
            (0, k.Et)(c) &&
            (0, k.Et)(l)
            ? n.createElement(
                "path",
                ie({}, (0, A.J9)(d, !0), {
                  className: (0, v.A)("recharts-cross", y),
                  d: le(r, i, f, h, c, l),
                }),
              )
            : null;
        };
      function fe(t) {
        var e = t.cx,
          r = t.cy,
          n = t.radius,
          o = t.startAngle,
          i = t.endAngle;
        return {
          points: [(0, qt.IZ)(e, r, n, o), (0, qt.IZ)(e, r, n, i)],
          cx: e,
          cy: r,
          radius: n,
          startAngle: o,
          endAngle: i,
        };
      }
      var pe = r(24588);
      function he(t, e, r) {
        var n, o, i, a;
        if ("horizontal" === t)
          (i = n = e.x), (o = r.top), (a = r.top + r.height);
        else if ("vertical" === t)
          (a = o = e.y), (n = r.left), (i = r.left + r.width);
        else if (null != e.cx && null != e.cy) {
          if ("centric" !== t) return fe(e);
          var c = e.cx,
            u = e.cy,
            l = e.innerRadius,
            s = e.outerRadius,
            f = e.angle,
            p = (0, qt.IZ)(c, u, l, f),
            h = (0, qt.IZ)(c, u, s, f);
          (n = p.x), (o = p.y), (i = h.x), (a = h.y);
        }
        return [
          { x: n, y: o },
          { x: i, y: a },
        ];
      }
      function ye(t) {
        return (
          (ye =
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
          ye(t)
        );
      }
      function de(t, e) {
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
      function ve(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? de(Object(r), !0).forEach(function (e) {
                me(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : de(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function me(t, e, r) {
        var n;
        return (
          (n = (function (t, e) {
            if ("object" != ye(t) || !t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, e || "default");
              if ("object" != ye(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          })(e, "string")),
          (e = "symbol" == ye(n) ? n : n + "") in t
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
      function be(t) {
        var e,
          r,
          o,
          i = t.element,
          a = t.tooltipEventType,
          c = t.isActive,
          u = t.activeCoordinate,
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
        if (!i || !d || !c || !u || ("ScatterChart" !== y && "axis" !== a))
          return null;
        var m = re.I;
        if ("ScatterChart" === y) (o = u), (m = se);
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
          })(h, u, s, p)),
            (m = j.M);
        else if ("radial" === h) {
          var b = fe(u),
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
            (m = pe.h);
        } else (o = { points: he(h, u, s) }), (m = re.I);
        var O = ve(
          ve(
            ve(ve({ stroke: "#ccc", pointerEvents: "none" }, s), o),
            (0, A.J9)(d, !1),
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
      var ge = ["item"],
        xe = [
          "children",
          "className",
          "width",
          "height",
          "style",
          "compact",
          "title",
          "desc",
        ];
      function we(t) {
        return (
          (we =
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
          we(t)
        );
      }
      function Oe() {
        return (
          (Oe = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          Oe.apply(this, arguments)
        );
      }
      function je(t, e) {
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          _e(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Ae(t, e) {
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
      function Se(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, Be(n.key), n);
        }
      }
      function Pe(t, e, r) {
        return (
          (e = ke(e)),
          (function (t, e) {
            if (e && ("object" === we(e) || "function" == typeof e)) return e;
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
            Ee()
              ? Reflect.construct(e, r || [], ke(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function Ee() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Ee = function () {
          return !!t;
        })();
      }
      function ke(t) {
        return (
          (ke = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ke(t)
        );
      }
      function Me(t, e) {
        return (
          (Me = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          Me(t, e)
        );
      }
      function Te(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Ce(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          _e(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _e(t, e) {
        if (t) {
          if ("string" == typeof t) return Ce(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? Ce(t, e)
                : void 0
          );
        }
      }
      function Ce(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function De(t, e) {
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
      function Ie(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? De(Object(r), !0).forEach(function (e) {
                Ne(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : De(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function Ne(t, e, r) {
        return (
          (e = Be(e)) in t
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
      function Be(t) {
        var e = (function (t, e) {
          if ("object" != we(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != we(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == we(e) ? e : e + "";
      }
      var Re = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
        Le = { width: "100%", height: "100%" },
        ze = { x: 0, y: 0 };
      function Fe(t) {
        return t;
      }
      var Ue = function (t, e) {
        var r = e.graphicalItems,
          n = e.dataStartIndex,
          o = e.dataEndIndex,
          i = (null != r ? r : []).reduce(function (t, e) {
            var r = e.props.data;
            return r && r.length ? [].concat(Te(t), Te(r)) : t;
          }, []);
        return i.length > 0
          ? i
          : t && t.length && (0, k.Et)(n) && (0, k.Et)(o)
            ? t.slice(n, o + 1)
            : [];
      };
      function We(t) {
        return "number" === t ? [0, "auto"] : void 0;
      }
      var $e = function (t, e, r, n) {
          var o = t.graphicalItems,
            i = t.tooltipAxis,
            a = Ue(e, t);
          return r < 0 || !o || !o.length || r >= a.length
            ? null
            : o.reduce(function (o, c) {
                var u,
                  l,
                  s = null !== (u = c.props.data) && void 0 !== u ? u : e;
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
                return l ? [].concat(Te(o), [(0, E.zb)(c, l)]) : o;
              }, []);
        },
        qe = function (t, e, r, n) {
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
            c = t.tooltipAxis,
            u = t.tooltipTicks,
            l = (0, E.gH)(i, a, u, c);
          if (l >= 0 && u) {
            var s = u[l] && u[l].value,
              f = $e(t, e, l, s),
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
                    return Ie(
                      Ie(Ie({}, n), (0, qt.IZ)(n.cx, n.cy, a, i)),
                      {},
                      { angle: i, radius: a },
                    );
                  }
                  var c = o.coordinate,
                    u = n.angle;
                  return Ie(
                    Ie(Ie({}, n), (0, qt.IZ)(n.cx, n.cy, c, u)),
                    {},
                    { angle: u, radius: c },
                  );
                }
                return ze;
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
        Ke = function (t, e) {
          var r = e.axes,
            n = e.graphicalItems,
            o = e.axisType,
            a = e.axisIdKey,
            c = e.stackGroups,
            u = e.dataStartIndex,
            s = e.dataEndIndex,
            f = t.layout,
            p = t.children,
            h = t.stackOffset,
            y = (0, E._L)(f, o);
          return r.reduce(function (e, r) {
            var d,
              v =
                void 0 !== r.type.defaultProps
                  ? Ie(Ie({}, r.type.defaultProps), r.props)
                  : r.props,
              m = v.type,
              b = v.dataKey,
              g = v.allowDataOverflow,
              x = v.allowDuplicatedCategory,
              w = v.scale,
              O = v.ticks,
              j = v.includeHidden,
              A = v[a];
            if (e[A]) return e;
            var S,
              P,
              M,
              T = Ue(t.data, {
                graphicalItems: n.filter(function (t) {
                  var e;
                  return (
                    (a in t.props
                      ? t.props[a]
                      : null === (e = t.type.defaultProps) || void 0 === e
                        ? void 0
                        : e[a]) === A
                  );
                }),
                dataStartIndex: u,
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
              ((S = (0, E.AQ)(v.domain, null, g)),
              !y ||
                ("number" !== m && "auto" === w) ||
                (M = (0, E.Ay)(T, b, "category")));
            var C = We(m);
            if (!S || 0 === S.length) {
              var D,
                I = null !== (D = v.domain) && void 0 !== D ? D : C;
              if (b) {
                if (((S = (0, E.Ay)(T, b, m)), "category" === m && y)) {
                  var N = (0, k.CG)(S);
                  x && N
                    ? ((P = S), (S = l()(0, _)))
                    : x ||
                      (S = (0, E.KC)(I, S, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 ? t : [].concat(Te(t), [e]);
                      }, []));
                } else if ("category" === m)
                  S = x
                    ? S.filter(function (t) {
                        return "" !== t && !i()(t);
                      })
                    : (0, E.KC)(I, S, r).reduce(function (t, e) {
                        return t.indexOf(e) >= 0 || "" === e || i()(e)
                          ? t
                          : [].concat(Te(t), [e]);
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
                      return n === A && (j || !o);
                    }),
                    b,
                    o,
                    f,
                  );
                  B && (S = B);
                }
                !y ||
                  ("number" !== m && "auto" === w) ||
                  (M = (0, E.Ay)(T, b, "category"));
              } else
                S = y
                  ? l()(0, _)
                  : c && c[A] && c[A].hasStack && "number" === m
                    ? "expand" === h
                      ? [0, 1]
                      : (0, E.Mk)(c[A].stackGroups, u, s)
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
                          return e === A && (j || !r);
                        }),
                        m,
                        f,
                        !0,
                      );
              if ("number" === m)
                (S = $t(p, S, A, o, O)), I && (S = (0, E.AQ)(I, S, g));
              else if ("category" === m && I) {
                var R = I;
                S.every(function (t) {
                  return R.indexOf(t) >= 0;
                }) && (S = R);
              }
            }
            return Ie(
              Ie({}, e),
              {},
              Ne(
                {},
                A,
                Ie(
                  Ie({}, v),
                  {},
                  {
                    axisType: o,
                    domain: S,
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
        Xe = function (t, e) {
          var r = e.axisType,
            n = void 0 === r ? "xAxis" : r,
            o = e.AxisComp,
            i = e.graphicalItems,
            a = e.stackGroups,
            c = e.dataStartIndex,
            u = e.dataEndIndex,
            s = t.children,
            p = "".concat(n, "Id"),
            h = (0, A.aS)(s, o),
            y = {};
          return (
            h && h.length
              ? (y = Ke(t, {
                  axes: h,
                  graphicalItems: i,
                  axisType: n,
                  axisIdKey: p,
                  stackGroups: a,
                  dataStartIndex: c,
                  dataEndIndex: u,
                }))
              : i &&
                i.length &&
                (y = (function (t, e) {
                  var r = e.graphicalItems,
                    n = e.Axis,
                    o = e.axisType,
                    i = e.axisIdKey,
                    a = e.stackGroups,
                    c = e.dataStartIndex,
                    u = e.dataEndIndex,
                    s = t.layout,
                    p = t.children,
                    h = Ue(t.data, {
                      graphicalItems: r,
                      dataStartIndex: c,
                      dataEndIndex: u,
                    }),
                    y = h.length,
                    d = (0, E._L)(s, o),
                    v = -1;
                  return r.reduce(function (t, e) {
                    var m,
                      b = (
                        void 0 !== e.type.defaultProps
                          ? Ie(Ie({}, e.type.defaultProps), e.props)
                          : e.props
                      )[i],
                      g = We("number");
                    return t[b]
                      ? t
                      : (v++,
                        d
                          ? (m = l()(0, y))
                          : a && a[b] && a[b].hasStack
                            ? ((m = (0, E.Mk)(a[b].stackGroups, c, u)),
                              (m = $t(p, m, b, o)))
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
                              (m = $t(p, m, b, o))),
                        Ie(
                          Ie({}, t),
                          {},
                          Ne(
                            {},
                            b,
                            Ie(
                              Ie({ axisType: o }, n.defaultProps),
                              {},
                              {
                                hide: !0,
                                orientation: f()(
                                  Re,
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
                  dataStartIndex: c,
                  dataEndIndex: u,
                })),
            y
          );
        },
        Ve = function (t) {
          var e = t.children,
            r = t.defaultShowTooltip,
            n = (0, A.BU)(e, X),
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
        He = function (t) {
          return "horizontal" === t
            ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
            : "vertical" === t
              ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
              : "centric" === t
                ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
                : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
        },
        Je = function (t, e) {
          return "xAxis" === e
            ? t[e].width
            : "yAxis" === e
              ? t[e].height
              : void 0;
        },
        Ge = function (t) {
          var e = t.chartName,
            r = t.GraphicalChild,
            o = t.defaultTooltipEventType,
            a = void 0 === o ? "axis" : o,
            u = t.validateTooltipEventTypes,
            l = void 0 === u ? ["axis"] : u,
            s = t.axisComponents,
            p = t.legendContent,
            y = t.formatAxisMap,
            S = t.defaultProps,
            P = function (t, e) {
              var r = e.graphicalItems,
                n = e.stackGroups,
                o = e.offset,
                a = e.updateId,
                c = e.dataStartIndex,
                u = e.dataEndIndex,
                l = t.barSize,
                f = t.layout,
                p = t.barGap,
                h = t.barCategoryGap,
                y = t.maxBarSize,
                d = He(f),
                v = d.numericAxisName,
                b = d.cateAxisName,
                g = (function (t) {
                  return (
                    !(!t || !t.length) &&
                    t.some(function (t) {
                      var e = (0, A.Mn)(t && t.type);
                      return e && e.indexOf("Bar") >= 0;
                    })
                  );
                })(r),
                x = [];
              return (
                r.forEach(function (r, d) {
                  var w = Ue(t.data, {
                      graphicalItems: [r],
                      dataStartIndex: c,
                      dataEndIndex: u,
                    }),
                    O =
                      void 0 !== r.type.defaultProps
                        ? Ie(Ie({}, r.type.defaultProps), r.props)
                        : r.props,
                    j = O.dataKey,
                    S = O.maxBarSize,
                    P = O["".concat(v, "Id")],
                    k = O["".concat(b, "Id")],
                    M = s.reduce(function (t, r) {
                      var n = e["".concat(r.axisType, "Map")],
                        o = O["".concat(r.axisType, "Id")];
                      (n && n[o]) || "zAxis" === r.axisType || (0, m.A)(!1);
                      var i = n[o];
                      return Ie(
                        Ie({}, t),
                        {},
                        Ne(
                          Ne({}, r.axisType, i),
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
                    D = (0, A.Mn)(r.type).indexOf("Bar") >= 0,
                    I = (0, E.Hj)(T, _),
                    N = [],
                    B =
                      g &&
                      (0, E.tA)({
                        barSize: l,
                        stackGroups: n,
                        totalSize: Je(M, b),
                      });
                  if (D) {
                    var R,
                      L,
                      z = i()(S) ? y : S,
                      F =
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
                      bandSize: F !== I ? F : I,
                      sizeList: B[k],
                      maxBarSize: z,
                    })),
                      F !== I &&
                        (N = N.map(function (t) {
                          return Ie(
                            Ie({}, t),
                            {},
                            {
                              position: Ie(
                                Ie({}, t.position),
                                {},
                                { offset: t.position.offset - F / 2 },
                              ),
                            },
                          );
                        }));
                  }
                  var U = r && r.type && r.type.getComposedData;
                  U &&
                    x.push({
                      props: Ie(
                        Ie(
                          {},
                          U(
                            Ie(
                              Ie({}, M),
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
                                dataStartIndex: c,
                                dataEndIndex: u,
                              },
                            ),
                          ),
                        ),
                        {},
                        Ne(
                          Ne(
                            Ne({ key: r.key || "item-".concat(d) }, v, M[v]),
                            b,
                            M[b],
                          ),
                          "animationId",
                          a,
                        ),
                      ),
                      childIndex: (0, A.AW)(r, t.children),
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
                c = t.updateId;
              if (!(0, A.Me)({ props: o })) return null;
              var u = o.children,
                l = o.layout,
                p = o.stackOffset,
                d = o.data,
                v = o.reverseStackOrder,
                m = He(l),
                b = m.numericAxisName,
                g = m.cateAxisName,
                x = (0, A.aS)(u, r),
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
                  return Ie(
                    Ie({}, t),
                    {},
                    Ne(
                      {},
                      r,
                      Xe(
                        o,
                        Ie(
                          Ie({}, e),
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
                S = (function (t, e) {
                  var r = t.props,
                    n = t.graphicalItems,
                    o = t.xAxisMap,
                    i = void 0 === o ? {} : o,
                    a = t.yAxisMap,
                    c = void 0 === a ? {} : a,
                    u = r.width,
                    l = r.height,
                    s = r.children,
                    p = r.margin || {},
                    h = (0, A.BU)(s, X),
                    y = (0, A.BU)(s, w.s),
                    d = Object.keys(c).reduce(
                      function (t, e) {
                        var r = c[e],
                          n = r.orientation;
                        return r.mirror || r.hide
                          ? t
                          : Ie(Ie({}, t), {}, Ne({}, n, t[n] + r.width));
                      },
                      { left: p.left || 0, right: p.right || 0 },
                    ),
                    v = Object.keys(i).reduce(
                      function (t, e) {
                        var r = i[e],
                          n = r.orientation;
                        return r.mirror || r.hide
                          ? t
                          : Ie(
                              Ie({}, t),
                              {},
                              Ne({}, n, f()(t, "".concat(n)) + r.height),
                            );
                      },
                      { top: p.top || 0, bottom: p.bottom || 0 },
                    ),
                    m = Ie(Ie({}, v), d),
                    b = m.bottom;
                  h && (m.bottom += h.props.height || X.defaultProps.height),
                    y && e && (m = (0, E.s0)(m, n, r, e));
                  var g = u - m.left - m.right,
                    x = l - m.top - m.bottom;
                  return Ie(
                    Ie({ brushBottom: b }, m),
                    {},
                    { width: Math.max(g, 0), height: Math.max(x, 0) },
                  );
                })(
                  Ie(Ie({}, j), {}, { props: o, graphicalItems: x }),
                  null == n ? void 0 : n.legendBBox,
                );
              Object.keys(j).forEach(function (t) {
                j[t] = y(o, j[t], S, t.replace("Map", ""), e);
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
                  Ie(
                    Ie({}, j),
                    {},
                    {
                      dataStartIndex: i,
                      dataEndIndex: a,
                      updateId: c,
                      graphicalItems: x,
                      stackGroups: O,
                      offset: S,
                    },
                  ),
                );
              return Ie(
                Ie(
                  {
                    formattedGraphicalItems: I,
                    graphicalItems: x,
                    offset: S,
                    stackGroups: O,
                  },
                  D,
                ),
                j,
              );
            },
            T = (function (t) {
              function r(t) {
                var o, a, u;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, r),
                  Ne(
                    (u = Pe(this, r, [t])),
                    "eventEmitterSymbol",
                    Symbol("rechartsEventEmitter"),
                  ),
                  Ne(u, "accessibilityManager", new te()),
                  Ne(u, "handleLegendBBoxUpdate", function (t) {
                    if (t) {
                      var e = u.state,
                        r = e.dataStartIndex,
                        n = e.dataEndIndex,
                        o = e.updateId;
                      u.setState(
                        Ie(
                          { legendBBox: t },
                          M(
                            {
                              props: u.props,
                              dataStartIndex: r,
                              dataEndIndex: n,
                              updateId: o,
                            },
                            Ie(Ie({}, u.state), {}, { legendBBox: t }),
                          ),
                        ),
                      );
                    }
                  }),
                  Ne(u, "handleReceiveSyncEvent", function (t, e, r) {
                    if (u.props.syncId === t) {
                      if (
                        r === u.eventEmitterSymbol &&
                        "function" != typeof u.props.syncMethod
                      )
                        return;
                      u.applySyncEvent(e);
                    }
                  }),
                  Ne(u, "handleBrushChange", function (t) {
                    var e = t.startIndex,
                      r = t.endIndex;
                    if (
                      e !== u.state.dataStartIndex ||
                      r !== u.state.dataEndIndex
                    ) {
                      var n = u.state.updateId;
                      u.setState(function () {
                        return Ie(
                          { dataStartIndex: e, dataEndIndex: r },
                          M(
                            {
                              props: u.props,
                              dataStartIndex: e,
                              dataEndIndex: r,
                              updateId: n,
                            },
                            u.state,
                          ),
                        );
                      }),
                        u.triggerSyncEvent({
                          dataStartIndex: e,
                          dataEndIndex: r,
                        });
                    }
                  }),
                  Ne(u, "handleMouseEnter", function (t) {
                    var e = u.getMouseInfo(t);
                    if (e) {
                      var r = Ie(Ie({}, e), {}, { isTooltipActive: !0 });
                      u.setState(r), u.triggerSyncEvent(r);
                      var n = u.props.onMouseEnter;
                      c()(n) && n(r, t);
                    }
                  }),
                  Ne(u, "triggeredAfterMouseMove", function (t) {
                    var e = u.getMouseInfo(t),
                      r = e
                        ? Ie(Ie({}, e), {}, { isTooltipActive: !0 })
                        : { isTooltipActive: !1 };
                    u.setState(r), u.triggerSyncEvent(r);
                    var n = u.props.onMouseMove;
                    c()(n) && n(r, t);
                  }),
                  Ne(u, "handleItemMouseEnter", function (t) {
                    u.setState(function () {
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
                  Ne(u, "handleItemMouseLeave", function () {
                    u.setState(function () {
                      return { isTooltipActive: !1 };
                    });
                  }),
                  Ne(u, "handleMouseMove", function (t) {
                    t.persist(), u.throttleTriggeredAfterMouseMove(t);
                  }),
                  Ne(u, "handleMouseLeave", function (t) {
                    u.throttleTriggeredAfterMouseMove.cancel();
                    var e = { isTooltipActive: !1 };
                    u.setState(e), u.triggerSyncEvent(e);
                    var r = u.props.onMouseLeave;
                    c()(r) && r(e, t);
                  }),
                  Ne(u, "handleOuterEvent", function (t) {
                    var e,
                      r = (0, A.X_)(t),
                      n = f()(u.props, "".concat(r));
                    r &&
                      c()(n) &&
                      n(
                        null !==
                          (e = /.*touch.*/i.test(r)
                            ? u.getMouseInfo(t.changedTouches[0])
                            : u.getMouseInfo(t)) && void 0 !== e
                          ? e
                          : {},
                        t,
                      );
                  }),
                  Ne(u, "handleClick", function (t) {
                    var e = u.getMouseInfo(t);
                    if (e) {
                      var r = Ie(Ie({}, e), {}, { isTooltipActive: !0 });
                      u.setState(r), u.triggerSyncEvent(r);
                      var n = u.props.onClick;
                      c()(n) && n(r, t);
                    }
                  }),
                  Ne(u, "handleMouseDown", function (t) {
                    var e = u.props.onMouseDown;
                    c()(e) && e(u.getMouseInfo(t), t);
                  }),
                  Ne(u, "handleMouseUp", function (t) {
                    var e = u.props.onMouseUp;
                    c()(e) && e(u.getMouseInfo(t), t);
                  }),
                  Ne(u, "handleTouchMove", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      u.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                  }),
                  Ne(u, "handleTouchStart", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      u.handleMouseDown(t.changedTouches[0]);
                  }),
                  Ne(u, "handleTouchEnd", function (t) {
                    null != t.changedTouches &&
                      t.changedTouches.length > 0 &&
                      u.handleMouseUp(t.changedTouches[0]);
                  }),
                  Ne(u, "handleDoubleClick", function (t) {
                    var e = u.props.onDoubleClick;
                    c()(e) && e(u.getMouseInfo(t), t);
                  }),
                  Ne(u, "handleContextMenu", function (t) {
                    var e = u.props.onContextMenu;
                    c()(e) && e(u.getMouseInfo(t), t);
                  }),
                  Ne(u, "triggerSyncEvent", function (t) {
                    void 0 !== u.props.syncId &&
                      Vt.emit(Ht, u.props.syncId, t, u.eventEmitterSymbol);
                  }),
                  Ne(u, "applySyncEvent", function (t) {
                    var e = u.props,
                      r = e.layout,
                      n = e.syncMethod,
                      o = u.state.updateId,
                      i = t.dataStartIndex,
                      a = t.dataEndIndex;
                    if (
                      void 0 !== t.dataStartIndex ||
                      void 0 !== t.dataEndIndex
                    )
                      u.setState(
                        Ie(
                          { dataStartIndex: i, dataEndIndex: a },
                          M(
                            {
                              props: u.props,
                              dataStartIndex: i,
                              dataEndIndex: a,
                              updateId: o,
                            },
                            u.state,
                          ),
                        ),
                      );
                    else if (void 0 !== t.activeTooltipIndex) {
                      var c = t.chartX,
                        l = t.chartY,
                        s = t.activeTooltipIndex,
                        f = u.state,
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
                      var d = Ie(Ie({}, p), {}, { x: p.left, y: p.top }),
                        v = Math.min(c, d.x + d.width),
                        m = Math.min(l, d.y + d.height),
                        b = h[s] && h[s].value,
                        g = $e(u.state, u.props.data, s),
                        x = h[s]
                          ? {
                              x: "horizontal" === r ? h[s].coordinate : v,
                              y: "horizontal" === r ? m : h[s].coordinate,
                            }
                          : ze;
                      u.setState(
                        Ie(
                          Ie({}, t),
                          {},
                          {
                            activeLabel: b,
                            activeCoordinate: x,
                            activePayload: g,
                            activeTooltipIndex: s,
                          },
                        ),
                      );
                    } else u.setState(t);
                  }),
                  Ne(u, "renderCursor", function (t) {
                    var r,
                      o = u.state,
                      i = o.isTooltipActive,
                      a = o.activeCoordinate,
                      c = o.activePayload,
                      l = o.offset,
                      s = o.activeTooltipIndex,
                      f = o.tooltipAxisBandSize,
                      p = u.getTooltipEventType(),
                      h = null !== (r = t.props.active) && void 0 !== r ? r : i,
                      y = u.props.layout,
                      d = t.key || "_recharts-cursor";
                    return n.createElement(be, {
                      key: d,
                      activeCoordinate: a,
                      activePayload: c,
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
                  Ne(u, "renderPolarAxis", function (t, e, r) {
                    var o = f()(t, "type.axisType"),
                      i = f()(u.state, "".concat(o, "Map")),
                      a = t.type.defaultProps,
                      c = void 0 !== a ? Ie(Ie({}, a), t.props) : t.props,
                      l = i && i[c["".concat(o, "Id")]];
                    return (0, n.cloneElement)(
                      t,
                      Ie(
                        Ie({}, l),
                        {},
                        {
                          className: (0, v.A)(o, l.className),
                          key: t.key || "".concat(e, "-").concat(r),
                          ticks: (0, E.Rh)(l, !0),
                        },
                      ),
                    );
                  }),
                  Ne(u, "renderPolarGrid", function (t) {
                    var e = t.props,
                      r = e.radialLines,
                      o = e.polarAngles,
                      i = e.polarRadius,
                      a = u.state,
                      c = a.radiusAxisMap,
                      l = a.angleAxisMap,
                      s = (0, k.lX)(c),
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
                  Ne(u, "renderLegend", function () {
                    var t = u.state.formattedGraphicalItems,
                      e = u.props,
                      r = e.children,
                      o = e.width,
                      i = e.height,
                      a = u.props.margin || {},
                      c = o - (a.left || 0) - (a.right || 0),
                      l = (0, H.g)({
                        children: r,
                        formattedGraphicalItems: t,
                        legendWidth: c,
                        legendContent: p,
                      });
                    if (!l) return null;
                    var s = l.item,
                      f = Ae(l, ge);
                    return (0, n.cloneElement)(
                      s,
                      Ie(
                        Ie({}, f),
                        {},
                        {
                          chartWidth: o,
                          chartHeight: i,
                          margin: a,
                          onBBoxUpdate: u.handleLegendBBoxUpdate,
                        },
                      ),
                    );
                  }),
                  Ne(u, "renderTooltip", function () {
                    var t,
                      e = u.props,
                      r = e.children,
                      o = e.accessibilityLayer,
                      i = (0, A.BU)(r, x.m);
                    if (!i) return null;
                    var a = u.state,
                      c = a.isTooltipActive,
                      l = a.activeCoordinate,
                      s = a.activePayload,
                      f = a.activeLabel,
                      p = a.offset,
                      h = null !== (t = i.props.active) && void 0 !== t ? t : c;
                    return (0, n.cloneElement)(i, {
                      viewBox: Ie(Ie({}, p), {}, { x: p.left, y: p.top }),
                      active: h,
                      label: f,
                      payload: h ? s : [],
                      coordinate: l,
                      accessibilityLayer: o,
                    });
                  }),
                  Ne(u, "renderBrush", function (t) {
                    var e = u.props,
                      r = e.margin,
                      o = e.data,
                      i = u.state,
                      a = i.offset,
                      c = i.dataStartIndex,
                      l = i.dataEndIndex,
                      s = i.updateId;
                    return (0, n.cloneElement)(t, {
                      key: t.key || "_recharts-brush",
                      onChange: (0, E.HQ)(
                        u.handleBrushChange,
                        t.props.onChange,
                      ),
                      data: o,
                      x: (0, k.Et)(t.props.x) ? t.props.x : a.left,
                      y: (0, k.Et)(t.props.y)
                        ? t.props.y
                        : a.top + a.height + a.brushBottom - (r.bottom || 0),
                      width: (0, k.Et)(t.props.width) ? t.props.width : a.width,
                      startIndex: c,
                      endIndex: l,
                      updateId: "brush-".concat(s),
                    });
                  }),
                  Ne(u, "renderReferenceElement", function (t, e, r) {
                    if (!t) return null;
                    var o = u.clipPathId,
                      i = u.state,
                      a = i.xAxisMap,
                      c = i.yAxisMap,
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
                      yAxis: c[d],
                      viewBox: {
                        x: l.left,
                        y: l.top,
                        width: l.width,
                        height: l.height,
                      },
                      clipPathId: o,
                    });
                  }),
                  Ne(u, "renderActivePoints", function (t) {
                    var e = t.item,
                      n = t.activePoint,
                      o = t.basePoint,
                      i = t.childIndex,
                      a = t.isRange,
                      c = [],
                      u = e.props.key,
                      l =
                        void 0 !== e.item.type.defaultProps
                          ? Ie(Ie({}, e.item.type.defaultProps), e.item.props)
                          : e.item.props,
                      s = l.activeDot,
                      f = Ie(
                        Ie(
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
                          (0, A.J9)(s, !1),
                        ),
                        (0, Jt._U)(s),
                      );
                    return (
                      c.push(
                        r.renderActiveDot(
                          s,
                          f,
                          "".concat(u, "-activePoint-").concat(i),
                        ),
                      ),
                      o
                        ? c.push(
                            r.renderActiveDot(
                              s,
                              Ie(Ie({}, f), {}, { cx: o.x, cy: o.y }),
                              "".concat(u, "-basePoint-").concat(i),
                            ),
                          )
                        : a && c.push(null),
                      c
                    );
                  }),
                  Ne(u, "renderGraphicChild", function (t, e, r) {
                    var o = u.filterFormatItem(t, e, r);
                    if (!o) return null;
                    var a = u.getTooltipEventType(),
                      c = u.state,
                      l = c.isTooltipActive,
                      s = c.tooltipAxis,
                      f = c.activeTooltipIndex,
                      p = c.activeLabel,
                      h = u.props.children,
                      y = (0, A.BU)(h, x.m),
                      d = o.props,
                      v = d.points,
                      m = d.isRange,
                      b = d.baseLine,
                      g =
                        void 0 !== o.item.type.defaultProps
                          ? Ie(Ie({}, o.item.type.defaultProps), o.item.props)
                          : o.item.props,
                      w = g.activeDot,
                      O = g.hide,
                      j = g.activeBar,
                      S = g.activeShape,
                      P = Boolean(!O && l && y && (w || j || S)),
                      M = {};
                    "axis" !== a && y && "click" === y.props.trigger
                      ? (M = {
                          onClick: (0, E.HQ)(
                            u.handleItemMouseEnter,
                            t.props.onClick,
                          ),
                        })
                      : "axis" !== a &&
                        (M = {
                          onMouseLeave: (0, E.HQ)(
                            u.handleItemMouseLeave,
                            t.props.onMouseLeave,
                          ),
                          onMouseEnter: (0, E.HQ)(
                            u.handleItemMouseEnter,
                            t.props.onMouseEnter,
                          ),
                        });
                    var T = (0, n.cloneElement)(t, Ie(Ie({}, o.props), M));
                    if (P) {
                      if (!(f >= 0)) {
                        var _,
                          C = (
                            null !==
                              (_ = u.getItemByXY(u.state.activeCoordinate)) &&
                            void 0 !== _
                              ? _
                              : { graphicalItem: T }
                          ).graphicalItem,
                          D = C.item,
                          I = void 0 === D ? t : D,
                          N = C.childIndex,
                          B = Ie(
                            Ie(Ie({}, o.props), M),
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
                      if (S || j) {
                        var F =
                          void 0 !== t.props.activeIndex
                            ? t.props.activeIndex
                            : f;
                        return [
                          (0, n.cloneElement)(
                            t,
                            Ie(Ie(Ie({}, o.props), M), {}, { activeIndex: F }),
                          ),
                          null,
                          null,
                        ];
                      }
                      if (!i()(R))
                        return [T].concat(
                          Te(
                            u.renderActivePoints({
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
                  Ne(u, "renderCustomized", function (t, e, r) {
                    return (0, n.cloneElement)(
                      t,
                      Ie(
                        Ie({ key: "recharts-customized-".concat(r) }, u.props),
                        u.state,
                      ),
                    );
                  }),
                  Ne(u, "renderMap", {
                    CartesianGrid: { handler: Fe, once: !0 },
                    ReferenceArea: { handler: u.renderReferenceElement },
                    ReferenceLine: { handler: Fe },
                    ReferenceDot: { handler: u.renderReferenceElement },
                    XAxis: { handler: Fe },
                    YAxis: { handler: Fe },
                    Brush: { handler: u.renderBrush, once: !0 },
                    Bar: { handler: u.renderGraphicChild },
                    Line: { handler: u.renderGraphicChild },
                    Area: { handler: u.renderGraphicChild },
                    Radar: { handler: u.renderGraphicChild },
                    RadialBar: { handler: u.renderGraphicChild },
                    Scatter: { handler: u.renderGraphicChild },
                    Pie: { handler: u.renderGraphicChild },
                    Funnel: { handler: u.renderGraphicChild },
                    Tooltip: { handler: u.renderCursor, once: !0 },
                    PolarGrid: { handler: u.renderPolarGrid, once: !0 },
                    PolarAngleAxis: { handler: u.renderPolarAxis },
                    PolarRadiusAxis: { handler: u.renderPolarAxis },
                    Customized: { handler: u.renderCustomized },
                  }),
                  (u.clipPathId = "".concat(
                    null !== (o = t.id) && void 0 !== o
                      ? o
                      : (0, k.NF)("recharts"),
                    "-clip",
                  )),
                  (u.throttleTriggeredAfterMouseMove = d()(
                    u.triggeredAfterMouseMove,
                    null !== (a = t.throttleDelay) && void 0 !== a
                      ? a
                      : 1e3 / 60,
                  )),
                  (u.state = {}),
                  u
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
                    e && Me(t, e);
                })(r, t),
                (o = r),
                (u = [
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
                        i = (0, A.BU)(e, x.m);
                      if (i) {
                        var a = i.props.defaultIndex;
                        if (
                          !(
                            "number" != typeof a ||
                            a < 0 ||
                            a > this.state.tooltipTicks.length - 1
                          )
                        ) {
                          var c =
                              this.state.tooltipTicks[a] &&
                              this.state.tooltipTicks[a].value,
                            u = $e(this.state, r, a, c),
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
                            ((f = Ie(
                              Ie({}, f),
                              p.props.points[a].tooltipPosition,
                            )),
                            (u = p.props.points[a].tooltipPayload));
                          var h = {
                            activeTooltipIndex: a,
                            isTooltipActive: !0,
                            activeLabel: c,
                            activePayload: u,
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
                      (0, A.OV)(
                        [(0, A.BU)(t.children, x.m)],
                        [(0, A.BU)(this.props.children, x.m)],
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
                      var t = (0, A.BU)(this.props.children, x.m);
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
                        n = (0, V.A3)(r),
                        o = {
                          chartX: Math.round(t.pageX - n.left),
                          chartY: Math.round(t.pageY - n.top),
                        },
                        i = r.width / e.offsetWidth || 1,
                        a = this.inRange(o.chartX, o.chartY, i);
                      if (!a) return null;
                      var c = this.state,
                        u = c.xAxisMap,
                        l = c.yAxisMap,
                        s = this.getTooltipEventType(),
                        f = qe(
                          this.state,
                          this.props.data,
                          this.props.layout,
                          a,
                        );
                      if ("axis" !== s && u && l) {
                        var p = (0, k.lX)(u).scale,
                          h = (0, k.lX)(l).scale,
                          y = p && p.invert ? p.invert(o.chartX) : null,
                          d = h && h.invert ? h.invert(o.chartY) : null;
                        return Ie(Ie({}, o), {}, { xValue: y, yValue: d }, f);
                      }
                      return f ? Ie(Ie({}, o), f) : null;
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
                      var c = this.state,
                        u = c.angleAxisMap,
                        l = c.radiusAxisMap;
                      if (u && l) {
                        var s = (0, k.lX)(u);
                        return (0, qt.yy)({ x: o, y: i }, s);
                      }
                      return null;
                    },
                  },
                  {
                    key: "parseEventsOfWrapper",
                    value: function () {
                      var t = this.props.children,
                        e = this.getTooltipEventType(),
                        r = (0, A.BU)(t, x.m),
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
                        Ie(
                          Ie({}, (0, Jt._U)(this.props, this.handleOuterEvent)),
                          n,
                        )
                      );
                    },
                  },
                  {
                    key: "addListener",
                    value: function () {
                      Vt.on(Ht, this.handleReceiveSyncEvent);
                    },
                  },
                  {
                    key: "removeListener",
                    value: function () {
                      Vt.removeListener(Ht, this.handleReceiveSyncEvent);
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
                          (e === (0, A.Mn)(a.item.type) && r === a.childIndex)
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
                            var r = je(e, 2),
                              n = r[0],
                              o = r[1];
                            return Ie(Ie({}, t), {}, Ne({}, n, o.scale));
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
                            var r = je(e, 2),
                              n = r[0],
                              o = r[1];
                            return Ie(Ie({}, t), {}, Ne({}, n, o.scale));
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
                            c = a.props,
                            u = a.item,
                            l =
                              void 0 !== u.type.defaultProps
                                ? Ie(Ie({}, u.type.defaultProps), u.props)
                                : u.props,
                            s = (0, A.Mn)(u.type);
                          if ("Bar" === s) {
                            var f = (c.data || []).find(function (e) {
                              return (0, j.J)(t, e);
                            });
                            if (f) return { graphicalItem: a, payload: f };
                          } else if ("RadialBar" === s) {
                            var p = (c.data || []).find(function (e) {
                              return (0, qt.yy)(t, e);
                            });
                            if (p) return { graphicalItem: a, payload: p };
                          } else if (
                            (0, ee.NE)(a, n) ||
                            (0, ee.nZ)(a, n) ||
                            (0, ee.xQ)(a, n)
                          ) {
                            var h = (0, ee.GG)({
                                graphicalItem: a,
                                activeTooltipItem: n,
                                itemData: l.data,
                              }),
                              y = void 0 === l.activeIndex ? h : l.activeIndex;
                            return {
                              graphicalItem: Ie(
                                Ie({}, a),
                                {},
                                { childIndex: y },
                              ),
                              payload: (0, ee.xQ)(a, n)
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
                      if (!(0, A.Me)(this)) return null;
                      var e,
                        r,
                        o = this.props,
                        i = o.children,
                        a = o.className,
                        c = o.width,
                        u = o.height,
                        l = o.style,
                        s = o.compact,
                        f = o.title,
                        p = o.desc,
                        h = Ae(o, xe),
                        y = (0, A.J9)(h, !1);
                      if (s)
                        return n.createElement(
                          ht.DR,
                          {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId,
                          },
                          n.createElement(
                            b.u,
                            Oe({}, y, {
                              width: c,
                              height: u,
                              title: f,
                              desc: p,
                            }),
                            this.renderClipPath(),
                            (0, A.ee)(i, this.renderMap),
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
                        ht.DR,
                        {
                          state: this.state,
                          width: this.props.width,
                          height: this.props.height,
                          clipPathId: this.clipPathId,
                        },
                        n.createElement(
                          "div",
                          Oe(
                            {
                              className: (0, v.A)("recharts-wrapper", a),
                              style: Ie(
                                {
                                  position: "relative",
                                  cursor: "default",
                                  width: c,
                                  height: u,
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
                            Oe({}, y, {
                              width: c,
                              height: u,
                              title: f,
                              desc: p,
                              style: Le,
                            }),
                            this.renderClipPath(),
                            (0, A.ee)(i, this.renderMap),
                          ),
                          this.renderLegend(),
                          this.renderTooltip(),
                        ),
                      );
                    },
                  },
                ]),
                u && Se(o.prototype, u),
                s && Se(o, s),
                Object.defineProperty(o, "prototype", { writable: !1 }),
                o
              );
              var o, u, s;
            })(n.Component);
          Ne(T, "displayName", e),
            Ne(
              T,
              "defaultProps",
              Ie(
                {
                  layout: "horizontal",
                  stackOffset: "none",
                  barCategoryGap: "10%",
                  barGap: 4,
                  margin: { top: 5, right: 5, bottom: 5, left: 5 },
                  reverseStackOrder: !1,
                  syncMethod: "index",
                },
                S,
              ),
            ),
            Ne(T, "getDerivedStateFromProps", function (t, e) {
              var r = t.dataKey,
                n = t.data,
                o = t.children,
                a = t.width,
                c = t.height,
                u = t.layout,
                l = t.stackOffset,
                s = t.margin,
                f = e.dataStartIndex,
                p = e.dataEndIndex;
              if (void 0 === e.updateId) {
                var h = Ve(t);
                return Ie(
                  Ie(
                    Ie({}, h),
                    {},
                    { updateId: 0 },
                    M(Ie(Ie({ props: t }, h), {}, { updateId: 0 }), e),
                  ),
                  {},
                  {
                    prevDataKey: r,
                    prevData: n,
                    prevWidth: a,
                    prevHeight: c,
                    prevLayout: u,
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
                c !== e.prevHeight ||
                u !== e.prevLayout ||
                l !== e.prevStackOffset ||
                !(0, Kt.b)(s, e.prevMargin)
              ) {
                var y = Ve(t),
                  d = {
                    chartX: e.chartX,
                    chartY: e.chartY,
                    isTooltipActive: e.isTooltipActive,
                  },
                  v = Ie(Ie({}, qe(e, n, u)), {}, { updateId: e.updateId + 1 }),
                  m = Ie(Ie(Ie({}, y), d), v);
                return Ie(
                  Ie(Ie({}, m), M(Ie({ props: t }, m), e)),
                  {},
                  {
                    prevDataKey: r,
                    prevData: n,
                    prevWidth: a,
                    prevHeight: c,
                    prevLayout: u,
                    prevStackOffset: l,
                    prevMargin: s,
                    prevChildren: o,
                  },
                );
              }
              if (!(0, A.OV)(o, e.prevChildren)) {
                var b,
                  g,
                  x,
                  w,
                  O = (0, A.BU)(o, X),
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
                  P = j !== f || S !== p,
                  E = !i()(n) && !P ? e.updateId : e.updateId + 1;
                return Ie(
                  Ie(
                    { updateId: E },
                    M(
                      Ie(
                        Ie({ props: t }, e),
                        {},
                        { updateId: E, dataStartIndex: j, dataEndIndex: S },
                      ),
                      e,
                    ),
                  ),
                  {},
                  { prevChildren: o, dataStartIndex: j, dataEndIndex: S },
                );
              }
              return null;
            }),
            Ne(T, "renderActiveDot", function (t, e, r) {
              var o;
              return (
                (o = (0, n.isValidElement)(t)
                  ? (0, n.cloneElement)(t, e)
                  : c()(t)
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
            return n.createElement(T, Oe({}, t, { ref: e }));
          });
          return (_.displayName = T.displayName), _;
        };
    },
    72040: (t, e, r) => {
      "use strict";
      r.d(e, { f: () => n });
      var n = function (t) {
        return null;
      };
      n.displayName = "Cell";
    },
    25068: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => M });
      var n = r(90626),
        o = r(64609),
        i = r.n(o),
        a = r(3316),
        c = r.n(a),
        u = r(97827),
        l = r.n(u),
        s = r(34164),
        f = r(34656),
        p = r(93563),
        h = r(96714),
        y = r(90134);
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
      var A = function (t) {
          var e = t.value,
            r = t.formatter,
            n = i()(t.children) ? e : t.children;
          return c()(r) ? r(n) : n;
        },
        S = function (t, e, r) {
          var o,
            a,
            c = t.position,
            u = t.viewBox,
            l = t.offset,
            f = t.className,
            p = u,
            d = p.cx,
            v = p.cy,
            m = p.innerRadius,
            b = p.outerRadius,
            g = p.startAngle,
            x = p.endAngle,
            w = p.clockWise,
            O = (m + b) / 2,
            A = (function (t, e) {
              return (0, h.sA)(e - t) * Math.min(Math.abs(e - t), 360);
            })(g, x),
            S = A >= 0 ? 1 : -1;
          "insideStart" === c
            ? ((o = g + S * l), (a = w))
            : "insideEnd" === c
              ? ((o = x - S * l), (a = !w))
              : "end" === c && ((o = x + S * l), (a = w)),
            (a = A <= 0 ? a : !a);
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
            c = o.innerRadius,
            u = o.outerRadius,
            l = (o.startAngle + o.endAngle) / 2;
          if ("outside" === n) {
            var s = (0, y.IZ)(i, a, u + r, l),
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
          var p = (c + u) / 2,
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
            c = i.y,
            u = i.width,
            s = i.height,
            f = s >= 0 ? 1 : -1,
            p = f * n,
            y = f > 0 ? "end" : "start",
            d = f > 0 ? "start" : "end",
            v = u >= 0 ? 1 : -1,
            m = v * n,
            b = v > 0 ? "end" : "start",
            g = v > 0 ? "start" : "end";
          if ("top" === o)
            return w(
              w(
                {},
                {
                  x: a + u / 2,
                  y: c - f * n,
                  textAnchor: "middle",
                  verticalAnchor: y,
                },
              ),
              r ? { height: Math.max(c - r.y, 0), width: u } : {},
            );
          if ("bottom" === o)
            return w(
              w(
                {},
                {
                  x: a + u / 2,
                  y: c + s + p,
                  textAnchor: "middle",
                  verticalAnchor: d,
                },
              ),
              r
                ? { height: Math.max(r.y + r.height - (c + s), 0), width: u }
                : {},
            );
          if ("left" === o) {
            var x = {
              x: a - m,
              y: c + s / 2,
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
              x: a + u + m,
              y: c + s / 2,
              textAnchor: g,
              verticalAnchor: "middle",
            };
            return w(
              w({}, O),
              r ? { width: Math.max(r.x + r.width - O.x, 0), height: s } : {},
            );
          }
          var j = r ? { width: u, height: s } : {};
          return "insideLeft" === o
            ? w(
                {
                  x: a + m,
                  y: c + s / 2,
                  textAnchor: g,
                  verticalAnchor: "middle",
                },
                j,
              )
            : "insideRight" === o
              ? w(
                  {
                    x: a + u - m,
                    y: c + s / 2,
                    textAnchor: b,
                    verticalAnchor: "middle",
                  },
                  j,
                )
              : "insideTop" === o
                ? w(
                    {
                      x: a + u / 2,
                      y: c + p,
                      textAnchor: "middle",
                      verticalAnchor: d,
                    },
                    j,
                  )
                : "insideBottom" === o
                  ? w(
                      {
                        x: a + u / 2,
                        y: c + s - p,
                        textAnchor: "middle",
                        verticalAnchor: y,
                      },
                      j,
                    )
                  : "insideTopLeft" === o
                    ? w(
                        {
                          x: a + m,
                          y: c + p,
                          textAnchor: g,
                          verticalAnchor: d,
                        },
                        j,
                      )
                    : "insideTopRight" === o
                      ? w(
                          {
                            x: a + u - m,
                            y: c + p,
                            textAnchor: b,
                            verticalAnchor: d,
                          },
                          j,
                        )
                      : "insideBottomLeft" === o
                        ? w(
                            {
                              x: a + m,
                              y: c + s - p,
                              textAnchor: g,
                              verticalAnchor: y,
                            },
                            j,
                          )
                        : "insideBottomRight" === o
                          ? w(
                              {
                                x: a + u - m,
                                y: c + s - p,
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
                                  x: a + (0, h.F4)(o.x, u),
                                  y: c + (0, h.F4)(o.y, s),
                                  textAnchor: "end",
                                  verticalAnchor: "end",
                                },
                                j,
                              )
                            : w(
                                {
                                  x: a + u / 2,
                                  y: c + s / 2,
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
          u = o.position,
          l = o.value,
          h = o.children,
          y = o.content,
          d = o.className,
          m = void 0 === d ? "" : d,
          b = o.textBreakAll;
        if (!a || (i()(l) && i()(h) && !(0, n.isValidElement)(y) && !c()(y)))
          return null;
        if ((0, n.isValidElement)(y)) return (0, n.cloneElement)(y, o);
        if (c()(y)) {
          if (((e = (0, n.createElement)(y, o)), (0, n.isValidElement)(e)))
            return e;
        } else e = A(o);
        var x = k(a),
          O = (0, p.J9)(o, !0);
        if (x && ("insideStart" === u || "insideEnd" === u || "end" === u))
          return S(o, e, O);
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
          c = t.radius,
          u = t.innerRadius,
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
                innerRadius: u || 0,
                outerRadius: l || c || a || 0,
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
          var u = (function (t, e) {
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
                    : c()(t)
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
          return [u].concat(m(a));
        });
    },
    12244: (t, e, r) => {
      "use strict";
      r.d(e, { Z: () => E });
      var n = r(90626),
        o = r(64609),
        i = r.n(o),
        a = r(97827),
        c = r.n(a),
        u = r(3316),
        l = r.n(u),
        s = r(73912),
        f = r.n(s),
        p = r(25068),
        h = r(75055),
        y = r(93563),
        d = r(61195);
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
                A(t, e, r[e]);
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
      function A(t, e, r) {
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
      var P = function (t) {
        return Array.isArray(t.value) ? f()(t.value) : t.value;
      };
      function E(t) {
        var e = t.valueAccessor,
          r = void 0 === e ? P : e,
          o = S(t, m),
          a = o.data,
          c = o.dataKey,
          u = o.clockWise,
          l = o.id,
          s = o.textBreakAll,
          f = S(o, b);
        return a && a.length
          ? n.createElement(
              h.W,
              { className: "recharts-label-list" },
              a.map(function (t, e) {
                var o = i()(c) ? r(t, e) : (0, d.kr)(t && t.payload, c),
                  a = i()(l) ? {} : { id: "".concat(l, "-").concat(e) };
                return n.createElement(
                  p.J,
                  w({}, (0, y.J9)(t, !0), f, a, {
                    parentViewBox: t.parentViewBox,
                    value: o,
                    textBreakAll: s,
                    viewBox: p.J.parseViewBox(
                      i()(u) ? t : j(j({}, t), {}, { clockWise: u }),
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
                        : c()(t)
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
    75620: (t, e, r) => {
      "use strict";
      r.d(e, { s: () => L });
      var n = r(90626),
        o = r(3316),
        i = r.n(o),
        a = r(34164),
        c = r(27664),
        u = r(67125),
        l = r(17134),
        s = r(43998);
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
                    var c = (function (t) {
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
                    return delete c.legendIcon, n.cloneElement(t.legendIcon, c);
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
                    (0, c.R)(
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
                        u.u,
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
      var j = r(96714),
        A = r(43149);
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
            if (e && ("object" === S(e) || "function" == typeof e)) return e;
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
          if ("object" != S(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != S(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == S(e) ? e : e + "";
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
                  c = n.margin,
                  u = n.chartWidth,
                  l = n.chartHeight;
                return (
                  (t &&
                    ((void 0 !== t.left && null !== t.left) ||
                      (void 0 !== t.right && null !== t.right))) ||
                    (e =
                      "center" === i && "vertical" === o
                        ? {
                            left: ((u || 0) - this.getBBoxSnapshot().width) / 2,
                          }
                        : "right" === i
                          ? { right: (c && c.right) || 0 }
                          : { left: (c && c.left) || 0 }),
                  (t &&
                    ((void 0 !== t.top && null !== t.top) ||
                      (void 0 !== t.bottom && null !== t.bottom))) ||
                    (r =
                      "middle" === a
                        ? {
                            top: ((l || 0) - this.getBBoxSnapshot().height) / 2,
                          }
                        : "bottom" === a
                          ? { bottom: (c && c.bottom) || 0 }
                          : { top: (c && c.top) || 0 }),
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
                  c = e.payloadUniqBy,
                  u = e.payload,
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
                    k(k({}, this.props), {}, { payload: (0, A.s)(u, c, R) }),
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
    32671: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => v });
      var n = r(34164),
        o = r(90626),
        i = r(51504),
        a = r.n(i),
        c = r(96714),
        u = r(27664),
        l = r(93563);
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
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
          A = t.id,
          S = t.className,
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
            (0, u.R)(
              (0, c._3)(h) || (0, c._3)(v),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              h,
              v,
            ),
              (0, u.R)(
                !r || r > 0,
                "The aspect(%s) must be greater than zero.",
                r,
              );
            var n = (0, c._3)(h) ? t : h,
              i = (0, c._3)(v) ? e : v;
            r &&
              r > 0 &&
              (n ? (i = n / r) : i && (n = i * r), x && i > x && (i = x)),
              (0, u.R)(
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
            id: A ? "".concat(A) : void 0,
            className: (0, n.A)("recharts-responsive-container", S),
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
    34656: (t, e, r) => {
      "use strict";
      r.d(e, { E: () => z });
      var n = r(90626),
        o = r(64609),
        i = r.n(o),
        a = r(34164),
        c = r(96714),
        u = r(59640),
        l = r(93563),
        s = r(15654);
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
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
      function A(t) {
        if (t.includes(O)) return O;
        for (var e = t; e.includes("*") || e.includes("/"); ) {
          var r,
            n = p(null !== (r = v.exec(e)) && void 0 !== r ? r : [], 4),
            o = n[1],
            i = n[2],
            a = n[3],
            c = j.parse(null != o ? o : ""),
            u = j.parse(null != a ? a : ""),
            l = "*" === i ? c.multiply(u) : c.divide(u);
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
      var S = /\(([^()]*)\)/;
      function P(t) {
        var e = t.replace(/\s+/g, "");
        return (
          (e = (function (t) {
            for (var e = t; e.includes("("); ) {
              var r = p(S.exec(e), 2)[1];
              e = e.replace(S, A(r));
            }
            return e;
          })(e)),
          (e = A(e))
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
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
          if ((e || r) && !u.m.isSsr) {
            var l = N({ breakAll: i, children: n, style: o });
            return l
              ? (function (t, e, r, n, o) {
                  var i = t.maxLines,
                    a = t.children,
                    u = t.style,
                    l = t.breakAll,
                    s = (0, c.Et)(i),
                    f = a,
                    p = function () {
                      return (
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : []
                      ).reduce(function (t, e) {
                        var i = e.word,
                          a = e.width,
                          c = t[t.length - 1];
                        if (
                          c &&
                          (null == n || o || c.width + a + r < Number(n))
                        )
                          c.words.push(i), (c.width += a + r);
                        else {
                          var u = { words: [i], width: a };
                          t.push(u);
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
                            style: u,
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
            u = t.lineHeight,
            s = void 0 === u ? "1em" : u,
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
            A = w.dy,
            S = w.angle,
            P = w.className,
            C = w.breakAll,
            D = _(w, M);
          if (!(0, c.vh)(r) || !(0, c.vh)(i)) return null;
          var I,
            N = r + ((0, c.Et)(j) ? j : 0),
            B = i + ((0, c.Et)(A) ? A : 0);
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
            var F = O[0].width,
              U = w.width;
            z.push("scale(".concat(((0, c.Et)(U) ? U / F : 1) / F, ")"));
          }
          return (
            S &&
              z.push("rotate(".concat(S, ", ").concat(N, ", ").concat(B, ")")),
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
    30230: (t, e, r) => {
      "use strict";
      r.d(e, { m: () => J });
      var n = r(90626),
        o = r(97825),
        i = r.n(o),
        a = r(64609),
        c = r.n(a),
        u = r(34164),
        l = r(96714);
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
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
          A = t.labelFormatter,
          S = t.accessibilityLayer,
          P = void 0 !== S && S,
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
          M = !c()(j),
          T = M ? j : "",
          _ = (0, u.A)("recharts-default-tooltip", w),
          C = (0, u.A)("recharts-tooltip-label", O);
        M && A && null != b && (T = A(j, b));
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
                  c = t.name,
                  u = a,
                  s = c;
                if (i && null != u && null != s) {
                  var f = i(a, c, t, e, b);
                  if (Array.isArray(f)) {
                    var y = p(f, 2);
                    (u = y[0]), (s = y[1]);
                  } else u = f;
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
                    u,
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
        return (0, u.A)(
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
      function A(t) {
        var e = t.allowEscapeViewBox,
          r = t.coordinate,
          n = t.key,
          o = t.offsetTopLeft,
          i = t.position,
          a = t.reverseDirection,
          c = t.tooltipDimension,
          u = t.viewBox,
          s = t.viewBoxDimension;
        if (i && (0, l.Et)(i[n])) return i[n];
        var f = r[n] - c - o,
          p = r[n] + o;
        return e[n]
          ? a[n]
            ? f
            : p
          : a[n]
            ? f < u[n]
              ? Math.max(p, u[n])
              : Math.max(f, u[n])
            : p + c > u[n] + s
              ? Math.max(f, u[n])
              : Math.max(p, u[n]);
      }
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
            if (e && ("object" === S(e) || "function" == typeof e)) return e;
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
          if ("object" != S(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != S(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == S(e) ? e : e + "";
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
                    c = e.children,
                    u = e.coordinate,
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
                        c = t.reverseDirection,
                        u = t.tooltipBox,
                        l = t.useTranslate3d,
                        s = t.viewBox;
                      return {
                        cssProperties:
                          u.height > 0 && u.width > 0 && o
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
                                translateX: (e = A({
                                  allowEscapeViewBox: n,
                                  coordinate: o,
                                  key: "x",
                                  offsetTopLeft: i,
                                  position: a,
                                  reverseDirection: c,
                                  tooltipDimension: u.width,
                                  viewBox: s,
                                  viewBoxDimension: s.width,
                                })),
                                translateY: (r = A({
                                  allowEscapeViewBox: n,
                                  coordinate: o,
                                  key: "y",
                                  offsetTopLeft: i,
                                  position: a,
                                  reverseDirection: c,
                                  tooltipDimension: u.height,
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
                      coordinate: u,
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
                    c,
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
        B = r(59640),
        R = r(43149);
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
      function F(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? z(Object(r), !0).forEach(function (e) {
                X(t, e, r[e]);
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
      function U(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, V(n.key), n);
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
      function K(t, e) {
        return (
          (K = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          K(t, e)
        );
      }
      function X(t, e, r) {
        return (
          (e = V(e)) in t
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
      function V(t) {
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
      function H(t) {
        return t.dataKey;
      }
      var J = (function (t) {
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
              e && K(t, e);
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
                  c = e.content,
                  u = e.coordinate,
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
                    H,
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
                    coordinate: u,
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
                  })(c, F(F({}, this.props), {}, { payload: x })),
                );
              },
            },
          ]) && U(r.prototype, o),
          i && U(r, i),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, i;
      })(n.PureComponent);
      X(J, "displayName", "Tooltip"),
        X(J, "defaultProps", {
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
    75055: (t, e, r) => {
      "use strict";
      r.d(e, { W: () => l });
      var n = r(90626),
        o = r(34164),
        i = r(93563),
        a = ["children", "className"];
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
      function u(t, e) {
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
          s = u(t, a),
          f = (0, o.A)("recharts-layer", l);
        return n.createElement(
          "g",
          c({ className: f }, (0, i.J9)(s, !0), { ref: e }),
          r,
        );
      });
    },
    67125: (t, e, r) => {
      "use strict";
      r.d(e, { u: () => l });
      var n = r(90626),
        o = r(34164),
        i = r(93563),
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
      function u(t, e) {
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
          d = u(t, a),
          v = s || { width: r, height: l, x: 0, y: 0 },
          m = (0, o.A)("recharts-surface", f);
        return n.createElement(
          "svg",
          c({}, (0, i.J9)(d, !0, "svg"), {
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
    7351: (t, e, r) => {
      "use strict";
      r.d(e, {
        DR: () => g,
        pj: () => O,
        rY: () => k,
        yi: () => E,
        Yp: () => x,
        hj: () => P,
        sk: () => S,
        AF: () => w,
        Nk: () => A,
        $G: () => j,
      });
      var n = r(90626),
        o = r(68841),
        i = r(81639),
        a = r.n(i),
        c = r(17489),
        u = r.n(c),
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
        f = r(96714);
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
            c = t.children,
            u = t.width,
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
                      n.createElement(b.Provider, { value: u }, c),
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
              return u()(t.domain, Number.isFinite);
            }) || (0, f.lX)(t)
          );
        },
        A = function (t) {
          var e = (0, n.useContext)(h);
          null == e && (0, o.A)(!1);
          var r = e[t];
          return null == r && (0, o.A)(!1), r;
        },
        S = function () {
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
    6435: (t, e, r) => {
      "use strict";
      r.d(e, { F: () => F });
      var n,
        o = r(90626),
        i = r(86356),
        a = r(52686),
        c = r.n(a),
        u = r(58782),
        l = r.n(u),
        s = r(64609),
        f = r.n(s),
        p = r(3316),
        h = r.n(p),
        y = r(34164),
        d = r(75055),
        v = r(33487),
        m = r(34656),
        b = r(25068),
        g = r(12244),
        x = r(72040),
        w = r(93563),
        O = r(59640),
        j = r(90134),
        A = r(96714),
        S = r(61195),
        P = r(27664),
        E = r(43998),
        k = r(53818);
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
            if (e && ("object" === M(e) || "function" == typeof e)) return e;
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
          if ("object" != M(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != M(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == M(e) ? e : e + "";
      }
      var F = (function (t) {
        function e(t) {
          var r;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            L((r = I(this, e, [t])), "pieRef", null),
            L(r, "sectorRefs", []),
            L(r, "id", (0, A.NF)("recharts-pie-")),
            L(r, "handleAnimationEnd", function () {
              var t = r.props.onAnimationEnd;
              r.setState({ isAnimationFinished: !0 }), h()(t) && t();
            }),
            L(r, "handleAnimationStart", function () {
              var t = r.props.onAnimationStart;
              r.setState({ isAnimationFinished: !1 }), h()(t) && t();
            }),
            (r.state = {
              isAnimationFinished: !t.isAnimationActive,
              prevIsAnimationActive: t.isAnimationActive,
              prevAnimationId: t.animationId,
              sectorToFocus: 0,
            }),
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
              e && R(t, e);
          })(e, t),
          (r = e),
          (a = [
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                return e.prevIsAnimationActive !== t.isAnimationActive
                  ? {
                      prevIsAnimationActive: t.isAnimationActive,
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: [],
                      isAnimationFinished: !0,
                    }
                  : t.isAnimationActive && t.animationId !== e.prevAnimationId
                    ? {
                        prevAnimationId: t.animationId,
                        curSectors: t.sectors,
                        prevSectors: e.curSectors,
                        isAnimationFinished: !0,
                      }
                    : t.sectors !== e.curSectors
                      ? { curSectors: t.sectors, isAnimationFinished: !0 }
                      : null;
              },
            },
            {
              key: "getTextAnchor",
              value: function (t, e) {
                return t > e ? "start" : t < e ? "end" : "middle";
              },
            },
            {
              key: "renderLabelLineItem",
              value: function (t, e, r) {
                if (o.isValidElement(t)) return o.cloneElement(t, e);
                if (h()(t)) return t(e);
                var n = (0, y.A)(
                  "recharts-pie-label-line",
                  "boolean" != typeof t ? t.className : "",
                );
                return o.createElement(
                  v.I,
                  T({}, e, { key: r, type: "linear", className: n }),
                );
              },
            },
            {
              key: "renderLabelItem",
              value: function (t, e, r) {
                if (o.isValidElement(t)) return o.cloneElement(t, e);
                var n = r;
                if (h()(t) && ((n = t(e)), o.isValidElement(n))) return n;
                var i = (0, y.A)(
                  "recharts-pie-label-text",
                  "boolean" == typeof t || h()(t) ? "" : t.className,
                );
                return o.createElement(
                  m.E,
                  T({}, e, { alignmentBaseline: "middle", className: i }),
                  n,
                );
              },
            },
          ]),
          (n = [
            {
              key: "isActiveIndex",
              value: function (t) {
                var e = this.props.activeIndex;
                return Array.isArray(e) ? -1 !== e.indexOf(t) : t === e;
              },
            },
            {
              key: "hasActiveIndex",
              value: function () {
                var t = this.props.activeIndex;
                return Array.isArray(t) ? 0 !== t.length : t || 0 === t;
              },
            },
            {
              key: "renderLabels",
              value: function (t) {
                if (
                  this.props.isAnimationActive &&
                  !this.state.isAnimationFinished
                )
                  return null;
                var r = this.props,
                  n = r.label,
                  i = r.labelLine,
                  a = r.dataKey,
                  c = r.valueKey,
                  u = (0, w.J9)(this.props, !1),
                  l = (0, w.J9)(n, !1),
                  s = (0, w.J9)(i, !1),
                  p = (n && n.offsetRadius) || 20,
                  h = t.map(function (t, r) {
                    var h = (t.startAngle + t.endAngle) / 2,
                      y = (0, j.IZ)(t.cx, t.cy, t.outerRadius + p, h),
                      v = C(
                        C(C(C({}, u), t), {}, { stroke: "none" }, l),
                        {},
                        { index: r, textAnchor: e.getTextAnchor(y.x, t.cx) },
                        y,
                      ),
                      m = C(
                        C(
                          C(C({}, u), t),
                          {},
                          { fill: "none", stroke: t.fill },
                          s,
                        ),
                        {},
                        {
                          index: r,
                          points: [(0, j.IZ)(t.cx, t.cy, t.outerRadius, h), y],
                        },
                      ),
                      b = a;
                    return (
                      f()(a) && f()(c) ? (b = "value") : f()(a) && (b = c),
                      o.createElement(
                        d.W,
                        {
                          key: "label-"
                            .concat(t.startAngle, "-")
                            .concat(t.endAngle, "-")
                            .concat(t.midAngle, "-")
                            .concat(r),
                        },
                        i && e.renderLabelLineItem(i, m, "line"),
                        e.renderLabelItem(n, v, (0, S.kr)(t, b)),
                      )
                    );
                  });
                return o.createElement(
                  d.W,
                  { className: "recharts-pie-labels" },
                  h,
                );
              },
            },
            {
              key: "renderSectorsStatically",
              value: function (t) {
                var e = this,
                  r = this.props,
                  n = r.activeShape,
                  i = r.blendStroke,
                  a = r.inactiveShape;
                return t.map(function (r, c) {
                  if (
                    0 === (null == r ? void 0 : r.startAngle) &&
                    0 === (null == r ? void 0 : r.endAngle) &&
                    1 !== t.length
                  )
                    return null;
                  var u = e.isActiveIndex(c),
                    l = a && e.hasActiveIndex() ? a : null,
                    s = u ? n : l,
                    f = C(
                      C({}, r),
                      {},
                      { stroke: i ? r.fill : r.stroke, tabIndex: -1 },
                    );
                  return o.createElement(
                    d.W,
                    T(
                      {
                        ref: function (t) {
                          t &&
                            !e.sectorRefs.includes(t) &&
                            e.sectorRefs.push(t);
                        },
                        tabIndex: -1,
                        className: "recharts-pie-sector",
                      },
                      (0, E.XC)(e.props, r, c),
                      {
                        key: "sector-"
                          .concat(null == r ? void 0 : r.startAngle, "-")
                          .concat(null == r ? void 0 : r.endAngle, "-")
                          .concat(r.midAngle, "-")
                          .concat(c),
                      },
                    ),
                    o.createElement(
                      k.yp,
                      T({ option: s, isActive: u, shapeType: "sector" }, f),
                    ),
                  );
                });
              },
            },
            {
              key: "renderSectorsWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.sectors,
                  n = e.isAnimationActive,
                  a = e.animationBegin,
                  u = e.animationDuration,
                  l = e.animationEasing,
                  s = e.animationId,
                  f = this.state,
                  p = f.prevSectors,
                  h = f.prevIsAnimationActive;
                return o.createElement(
                  i.Ay,
                  {
                    begin: a,
                    duration: u,
                    isActive: n,
                    easing: l,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "pie-".concat(s, "-").concat(h),
                    onAnimationStart: this.handleAnimationStart,
                    onAnimationEnd: this.handleAnimationEnd,
                  },
                  function (e) {
                    var n = e.t,
                      i = [],
                      a = (r && r[0]).startAngle;
                    return (
                      r.forEach(function (t, e) {
                        var r = p && p[e],
                          o = e > 0 ? c()(t, "paddingAngle", 0) : 0;
                        if (r) {
                          var u = (0, A.Dj)(
                              r.endAngle - r.startAngle,
                              t.endAngle - t.startAngle,
                            ),
                            l = C(
                              C({}, t),
                              {},
                              { startAngle: a + o, endAngle: a + u(n) + o },
                            );
                          i.push(l), (a = l.endAngle);
                        } else {
                          var s = t.endAngle,
                            f = t.startAngle,
                            h = (0, A.Dj)(0, s - f)(n),
                            y = C(
                              C({}, t),
                              {},
                              { startAngle: a + o, endAngle: a + h + o },
                            );
                          i.push(y), (a = y.endAngle);
                        }
                      }),
                      o.createElement(d.W, null, t.renderSectorsStatically(i))
                    );
                  },
                );
              },
            },
            {
              key: "attachKeyboardHandlers",
              value: function (t) {
                var e = this;
                t.onkeydown = function (t) {
                  if (!t.altKey)
                    switch (t.key) {
                      case "ArrowLeft":
                        var r = ++e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[r].focus(),
                          e.setState({ sectorToFocus: r });
                        break;
                      case "ArrowRight":
                        var n =
                          --e.state.sectorToFocus < 0
                            ? e.sectorRefs.length - 1
                            : e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[n].focus(),
                          e.setState({ sectorToFocus: n });
                        break;
                      case "Escape":
                        e.sectorRefs[e.state.sectorToFocus].blur(),
                          e.setState({ sectorToFocus: 0 });
                    }
                };
              },
            },
            {
              key: "renderSectors",
              value: function () {
                var t = this.props,
                  e = t.sectors,
                  r = t.isAnimationActive,
                  n = this.state.prevSectors;
                return !(r && e && e.length) || (n && l()(n, e))
                  ? this.renderSectorsStatically(e)
                  : this.renderSectorsWithAnimation();
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this.pieRef && this.attachKeyboardHandlers(this.pieRef);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.hide,
                  n = e.sectors,
                  i = e.className,
                  a = e.label,
                  c = e.cx,
                  u = e.cy,
                  l = e.innerRadius,
                  s = e.outerRadius,
                  f = e.isAnimationActive,
                  p = this.state.isAnimationFinished;
                if (
                  r ||
                  !n ||
                  !n.length ||
                  !(0, A.Et)(c) ||
                  !(0, A.Et)(u) ||
                  !(0, A.Et)(l) ||
                  !(0, A.Et)(s)
                )
                  return null;
                var h = (0, y.A)("recharts-pie", i);
                return o.createElement(
                  d.W,
                  {
                    tabIndex: this.props.rootTabIndex,
                    className: h,
                    ref: function (e) {
                      t.pieRef = e;
                    },
                  },
                  this.renderSectors(),
                  a && this.renderLabels(n),
                  b.J.renderCallByParent(this.props, null, !1),
                  (!f || p) && g.Z.renderCallByParent(this.props, n, !1),
                );
              },
            },
          ]) && D(r.prototype, n),
          a && D(r, a),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, n, a;
      })(o.PureComponent);
      (n = F),
        L(F, "displayName", "Pie"),
        L(F, "defaultProps", {
          stroke: "#fff",
          fill: "#808080",
          legendType: "rect",
          cx: "50%",
          cy: "50%",
          startAngle: 0,
          endAngle: 360,
          innerRadius: 0,
          outerRadius: "80%",
          paddingAngle: 0,
          labelLine: !0,
          hide: !1,
          minAngle: 0,
          isAnimationActive: !O.m.isSsr,
          animationBegin: 400,
          animationDuration: 1500,
          animationEasing: "ease",
          nameKey: "name",
          blendStroke: !1,
          rootTabIndex: 0,
        }),
        L(F, "parseDeltaAngle", function (t, e) {
          return (0, A.sA)(e - t) * Math.min(Math.abs(e - t), 360);
        }),
        L(F, "getRealPieData", function (t) {
          var e = t.data,
            r = t.children,
            n = (0, w.J9)(t, !1),
            o = (0, w.aS)(r, x.f);
          return e && e.length
            ? e.map(function (t, e) {
                return C(C(C({ payload: t }, n), t), o && o[e] && o[e].props);
              })
            : o && o.length
              ? o.map(function (t) {
                  return C(C({}, n), t.props);
                })
              : [];
        }),
        L(F, "parseCoordinateOfPie", function (t, e) {
          var r = e.top,
            n = e.left,
            o = e.width,
            i = e.height,
            a = (0, j.lY)(o, i);
          return {
            cx: n + (0, A.F4)(t.cx, o, o / 2),
            cy: r + (0, A.F4)(t.cy, i, i / 2),
            innerRadius: (0, A.F4)(t.innerRadius, a, 0),
            outerRadius: (0, A.F4)(t.outerRadius, a, 0.8 * a),
            maxRadius: t.maxRadius || Math.sqrt(o * o + i * i) / 2,
          };
        }),
        L(F, "getComposedData", function (t) {
          var e = t.item,
            r = t.offset,
            o =
              void 0 !== e.type.defaultProps
                ? C(C({}, e.type.defaultProps), e.props)
                : e.props,
            i = n.getRealPieData(o);
          if (!i || !i.length) return null;
          var a = o.cornerRadius,
            c = o.startAngle,
            u = o.endAngle,
            l = o.paddingAngle,
            s = o.dataKey,
            p = o.nameKey,
            h = o.valueKey,
            y = o.tooltipType,
            d = Math.abs(o.minAngle),
            v = n.parseCoordinateOfPie(o, r),
            m = n.parseDeltaAngle(c, u),
            b = Math.abs(m),
            g = s;
          f()(s) && f()(h)
            ? ((0, P.R)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
              ),
              (g = "value"))
            : f()(s) &&
              ((0, P.R)(
                !1,
                'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
              ),
              (g = h));
          var x,
            w,
            O = i.filter(function (t) {
              return 0 !== (0, S.kr)(t, g, 0);
            }).length,
            E = b - O * d - (b >= 360 ? O : O - 1) * l,
            k = i.reduce(function (t, e) {
              var r = (0, S.kr)(e, g, 0);
              return t + ((0, A.Et)(r) ? r : 0);
            }, 0);
          k > 0 &&
            (x = i.map(function (t, e) {
              var r,
                n = (0, S.kr)(t, g, 0),
                o = (0, S.kr)(t, p, e),
                i = ((0, A.Et)(n) ? n : 0) / k,
                u =
                  (r = e
                    ? w.endAngle + (0, A.sA)(m) * l * (0 !== n ? 1 : 0)
                    : c) +
                  (0, A.sA)(m) * ((0 !== n ? d : 0) + i * E),
                s = (r + u) / 2,
                f = (v.innerRadius + v.outerRadius) / 2,
                h = [{ name: o, value: n, payload: t, dataKey: g, type: y }],
                b = (0, j.IZ)(v.cx, v.cy, f, s);
              return (w = C(
                C(
                  C(
                    {
                      percent: i,
                      cornerRadius: a,
                      name: o,
                      tooltipPayload: h,
                      midAngle: s,
                      middleRadius: f,
                      tooltipPosition: b,
                    },
                    t,
                  ),
                  v,
                ),
                {},
                {
                  value: (0, S.kr)(t, g),
                  startAngle: r,
                  endAngle: u,
                  payload: t,
                  paddingAngle: (0, A.sA)(m) * l,
                },
              ));
            }));
          return C(C({}, v), {}, { sectors: x, data: i });
        });
    },
    66579: (t, e, r) => {
      "use strict";
      r.d(e, { r: () => E });
      var n = r(90626),
        o = r(3316),
        i = r.n(o),
        a = r(34164),
        c = r(75055),
        u = r(21687),
        l = r(27690),
        s = r(34656),
        f = r(43998),
        p = r(93563),
        h = r(90134);
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
                j(t, e, r[e]);
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
      function b(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, A(n.key), n);
        }
      }
      function g(t, e, r) {
        return (
          (e = w(e)),
          (function (t, e) {
            if (e && ("object" === y(e) || "function" == typeof e)) return e;
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
      function j(t, e, r) {
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
          if ("object" != y(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != y(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == y(e) ? e : e + "";
      }
      var S = Math.PI / 180,
        P = 1e-5,
        E = (function (t) {
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
            (y = [
              {
                key: "renderTickItem",
                value: function (t, e, r) {
                  return n.isValidElement(t)
                    ? n.cloneElement(t, e)
                    : i()(t)
                      ? t(e)
                      : n.createElement(
                          s.E,
                          d({}, e, {
                            className: "recharts-polar-angle-axis-tick-value",
                          }),
                          r,
                        );
                },
              },
            ]),
            (o = [
              {
                key: "getTickLineCoord",
                value: function (t) {
                  var e = this.props,
                    r = e.cx,
                    n = e.cy,
                    o = e.radius,
                    i = e.orientation,
                    a = e.tickSize || 8,
                    c = (0, h.IZ)(r, n, o, t.coordinate),
                    u = (0, h.IZ)(
                      r,
                      n,
                      o + ("inner" === i ? -1 : 1) * a,
                      t.coordinate,
                    );
                  return { x1: c.x, y1: c.y, x2: u.x, y2: u.y };
                },
              },
              {
                key: "getTickTextAnchor",
                value: function (t) {
                  var e = this.props.orientation,
                    r = Math.cos(-t.coordinate * S);
                  return r > P
                    ? "outer" === e
                      ? "start"
                      : "end"
                    : r < -P
                      ? "outer" === e
                        ? "end"
                        : "start"
                      : "middle";
                },
              },
              {
                key: "renderAxisLine",
                value: function () {
                  var t = this.props,
                    e = t.cx,
                    r = t.cy,
                    o = t.radius,
                    i = t.axisLine,
                    a = t.axisLineType,
                    c = m(
                      m({}, (0, p.J9)(this.props, !1)),
                      {},
                      { fill: "none" },
                      (0, p.J9)(i, !1),
                    );
                  if ("circle" === a)
                    return n.createElement(
                      u.c,
                      d({ className: "recharts-polar-angle-axis-line" }, c, {
                        cx: e,
                        cy: r,
                        r: o,
                      }),
                    );
                  var s = this.props.ticks.map(function (t) {
                    return (0, h.IZ)(e, r, o, t.coordinate);
                  });
                  return n.createElement(
                    l.t,
                    d({ className: "recharts-polar-angle-axis-line" }, c, {
                      points: s,
                    }),
                  );
                },
              },
              {
                key: "renderTicks",
                value: function () {
                  var t = this,
                    r = this.props,
                    o = r.ticks,
                    i = r.tick,
                    u = r.tickLine,
                    l = r.tickFormatter,
                    s = r.stroke,
                    y = (0, p.J9)(this.props, !1),
                    v = (0, p.J9)(i, !1),
                    b = m(m({}, y), {}, { fill: "none" }, (0, p.J9)(u, !1)),
                    g = o.map(function (r, o) {
                      var p = t.getTickLineCoord(r),
                        g = m(
                          m(
                            m({ textAnchor: t.getTickTextAnchor(r) }, y),
                            {},
                            { stroke: "none", fill: s },
                            v,
                          ),
                          {},
                          { index: o, payload: r, x: p.x2, y: p.y2 },
                        );
                      return n.createElement(
                        c.W,
                        d(
                          {
                            className: (0, a.A)(
                              "recharts-polar-angle-axis-tick",
                              (0, h.Zk)(i),
                            ),
                            key: "tick-".concat(r.coordinate),
                          },
                          (0, f.XC)(t.props, r, o),
                        ),
                        u &&
                          n.createElement(
                            "line",
                            d(
                              {
                                className:
                                  "recharts-polar-angle-axis-tick-line",
                              },
                              b,
                              p,
                            ),
                          ),
                        i &&
                          e.renderTickItem(i, g, l ? l(r.value, o) : r.value),
                      );
                    });
                  return n.createElement(
                    c.W,
                    { className: "recharts-polar-angle-axis-ticks" },
                    g,
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.ticks,
                    r = t.radius,
                    o = t.axisLine;
                  return r <= 0 || !e || !e.length
                    ? null
                    : n.createElement(
                        c.W,
                        {
                          className: (0, a.A)(
                            "recharts-polar-angle-axis",
                            this.props.className,
                          ),
                        },
                        o && this.renderAxisLine(),
                        this.renderTicks(),
                      );
                },
              },
            ]) && b(r.prototype, o),
            y && b(r, y),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            r
          );
          var r, o, y;
        })(n.PureComponent);
      j(E, "displayName", "PolarAngleAxis"),
        j(E, "axisType", "angleAxis"),
        j(E, "defaultProps", {
          type: "category",
          angleAxisId: 0,
          scale: "auto",
          cx: 0,
          cy: 0,
          orientation: "outer",
          axisLine: !0,
          tickLine: !0,
          tickSize: 8,
          tick: !0,
          hide: !1,
          allowDuplicatedCategory: !0,
        });
    },
    5585: (t, e, r) => {
      "use strict";
      r.d(e, { z: () => g });
      var n = r(90626),
        o = r(34164),
        i = r(90134),
        a = r(93563),
        c = [
          "cx",
          "cy",
          "innerRadius",
          "outerRadius",
          "gridType",
          "radialLines",
        ];
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
      function l(t, e) {
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
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          s.apply(this, arguments)
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
      var y = function (t, e, r, n) {
          var o = "";
          return (
            n.forEach(function (n, a) {
              var c = (0, i.IZ)(e, r, t, n);
              o += a
                ? "L ".concat(c.x, ",").concat(c.y)
                : "M ".concat(c.x, ",").concat(c.y);
            }),
            (o += "Z")
          );
        },
        d = function (t) {
          var e = t.cx,
            r = t.cy,
            o = t.innerRadius,
            c = t.outerRadius,
            u = t.polarAngles,
            l = t.radialLines;
          if (!u || !u.length || !l) return null;
          var f = p({ stroke: "#ccc" }, (0, a.J9)(t, !1));
          return n.createElement(
            "g",
            { className: "recharts-polar-grid-angle" },
            u.map(function (t) {
              var a = (0, i.IZ)(e, r, o, t),
                u = (0, i.IZ)(e, r, c, t);
              return n.createElement(
                "line",
                s({}, f, {
                  key: "line-".concat(t),
                  x1: a.x,
                  y1: a.y,
                  x2: u.x,
                  y2: u.y,
                }),
              );
            }),
          );
        },
        v = function (t) {
          var e = t.cx,
            r = t.cy,
            i = t.radius,
            c = t.index,
            u = p(
              p({ stroke: "#ccc" }, (0, a.J9)(t, !1)),
              {},
              { fill: "none" },
            );
          return n.createElement(
            "circle",
            s({}, u, {
              className: (0, o.A)(
                "recharts-polar-grid-concentric-circle",
                t.className,
              ),
              key: "circle-".concat(c),
              cx: e,
              cy: r,
              r: i,
            }),
          );
        },
        m = function (t) {
          var e = t.radius,
            r = t.index,
            i = p(
              p({ stroke: "#ccc" }, (0, a.J9)(t, !1)),
              {},
              { fill: "none" },
            );
          return n.createElement(
            "path",
            s({}, i, {
              className: (0, o.A)(
                "recharts-polar-grid-concentric-polygon",
                t.className,
              ),
              key: "path-".concat(r),
              d: y(e, t.cx, t.cy, t.polarAngles),
            }),
          );
        },
        b = function (t) {
          var e = t.polarRadius,
            r = t.gridType;
          return e && e.length
            ? n.createElement(
                "g",
                { className: "recharts-polar-grid-concentric" },
                e.map(function (e, o) {
                  var i = o;
                  return "circle" === r
                    ? n.createElement(
                        v,
                        s({ key: i }, t, { radius: e, index: o }),
                      )
                    : n.createElement(
                        m,
                        s({ key: i }, t, { radius: e, index: o }),
                      );
                }),
              )
            : null;
        },
        g = function (t) {
          var e = t.cx,
            r = void 0 === e ? 0 : e,
            o = t.cy,
            i = void 0 === o ? 0 : o,
            a = t.innerRadius,
            u = void 0 === a ? 0 : a,
            f = t.outerRadius,
            p = void 0 === f ? 0 : f,
            h = t.gridType,
            y = void 0 === h ? "polygon" : h,
            v = t.radialLines,
            m = void 0 === v || v,
            g = l(t, c);
          return p <= 0
            ? null
            : n.createElement(
                "g",
                { className: "recharts-polar-grid" },
                n.createElement(
                  d,
                  s(
                    {
                      cx: r,
                      cy: i,
                      innerRadius: u,
                      outerRadius: p,
                      gridType: y,
                      radialLines: m,
                    },
                    g,
                  ),
                ),
                n.createElement(
                  b,
                  s(
                    {
                      cx: r,
                      cy: i,
                      innerRadius: u,
                      outerRadius: p,
                      gridType: y,
                      radialLines: m,
                    },
                    g,
                  ),
                ),
              );
        };
      g.displayName = "PolarGrid";
    },
    80446: (t, e, r) => {
      "use strict";
      r.d(e, { E: () => _ });
      var n = r(90626),
        o = r(42529),
        i = r.n(o),
        a = r(11027),
        c = r.n(a),
        u = r(3316),
        l = r.n(u),
        s = r(34164),
        f = r(34656),
        p = r(25068),
        h = r(75055),
        y = r(90134),
        d = r(43998),
        v = r(93563),
        m = ["cx", "cy", "angle", "ticks", "axisLine"],
        b = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
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
      function x() {
        return (
          (x = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          x.apply(this, arguments)
        );
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
                M(t, e, r[e]);
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
      function j(t, e) {
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
            Object.defineProperty(t, T(n.key), n);
        }
      }
      function S(t, e, r) {
        return (
          (e = E(e)),
          (function (t, e) {
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
          })(
            t,
            P()
              ? Reflect.construct(e, r || [], E(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function P() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (P = function () {
          return !!t;
        })();
      }
      function E(t) {
        return (
          (E = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          E(t)
        );
      }
      function k(t, e) {
        return (
          (k = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          k(t, e)
        );
      }
      function M(t, e, r) {
        return (
          (e = T(e)) in t
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
      function T(t) {
        var e = (function (t, e) {
          if ("object" != g(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != g(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == g(e) ? e : e + "";
      }
      var _ = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            S(this, e, arguments)
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
              e && k(t, e);
          })(e, t),
          (r = e),
          (a = [
            {
              key: "renderTickItem",
              value: function (t, e, r) {
                return n.isValidElement(t)
                  ? n.cloneElement(t, e)
                  : l()(t)
                    ? t(e)
                    : n.createElement(
                        f.E,
                        x({}, e, {
                          className: "recharts-polar-radius-axis-tick-value",
                        }),
                        r,
                      );
              },
            },
          ]),
          (o = [
            {
              key: "getTickValueCoord",
              value: function (t) {
                var e = t.coordinate,
                  r = this.props,
                  n = r.angle,
                  o = r.cx,
                  i = r.cy;
                return (0, y.IZ)(o, i, e, n);
              },
            },
            {
              key: "getTickTextAnchor",
              value: function () {
                var t;
                switch (this.props.orientation) {
                  case "left":
                    t = "end";
                    break;
                  case "right":
                    t = "start";
                    break;
                  default:
                    t = "middle";
                }
                return t;
              },
            },
            {
              key: "getViewBox",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  r = t.cy,
                  n = t.angle,
                  o = t.ticks,
                  a = i()(o, function (t) {
                    return t.coordinate || 0;
                  });
                return {
                  cx: e,
                  cy: r,
                  startAngle: n,
                  endAngle: n,
                  innerRadius:
                    c()(o, function (t) {
                      return t.coordinate || 0;
                    }).coordinate || 0,
                  outerRadius: a.coordinate || 0,
                };
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  r = t.cy,
                  o = t.angle,
                  i = t.ticks,
                  a = t.axisLine,
                  c = j(t, m),
                  u = i.reduce(
                    function (t, e) {
                      return [
                        Math.min(t[0], e.coordinate),
                        Math.max(t[1], e.coordinate),
                      ];
                    },
                    [1 / 0, -1 / 0],
                  ),
                  l = (0, y.IZ)(e, r, u[0], o),
                  s = (0, y.IZ)(e, r, u[1], o),
                  f = O(
                    O(
                      O({}, (0, v.J9)(c, !1)),
                      {},
                      { fill: "none" },
                      (0, v.J9)(a, !1),
                    ),
                    {},
                    { x1: l.x, y1: l.y, x2: s.x, y2: s.y },
                  );
                return n.createElement(
                  "line",
                  x({ className: "recharts-polar-radius-axis-line" }, f),
                );
              },
            },
            {
              key: "renderTicks",
              value: function () {
                var t = this,
                  r = this.props,
                  o = r.ticks,
                  i = r.tick,
                  a = r.angle,
                  c = r.tickFormatter,
                  u = r.stroke,
                  l = j(r, b),
                  f = this.getTickTextAnchor(),
                  p = (0, v.J9)(l, !1),
                  m = (0, v.J9)(i, !1),
                  g = o.map(function (r, o) {
                    var l = t.getTickValueCoord(r),
                      v = O(
                        O(
                          O(
                            O(
                              {
                                textAnchor: f,
                                transform: "rotate("
                                  .concat(90 - a, ", ")
                                  .concat(l.x, ", ")
                                  .concat(l.y, ")"),
                              },
                              p,
                            ),
                            {},
                            { stroke: "none", fill: u },
                            m,
                          ),
                          {},
                          { index: o },
                          l,
                        ),
                        {},
                        { payload: r },
                      );
                    return n.createElement(
                      h.W,
                      x(
                        {
                          className: (0, s.A)(
                            "recharts-polar-radius-axis-tick",
                            (0, y.Zk)(i),
                          ),
                          key: "tick-".concat(r.coordinate),
                        },
                        (0, d.XC)(t.props, r, o),
                      ),
                      e.renderTickItem(i, v, c ? c(r.value, o) : r.value),
                    );
                  });
                return n.createElement(
                  h.W,
                  { className: "recharts-polar-radius-axis-ticks" },
                  g,
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.ticks,
                  r = t.axisLine,
                  o = t.tick;
                return e && e.length
                  ? n.createElement(
                      h.W,
                      {
                        className: (0, s.A)(
                          "recharts-polar-radius-axis",
                          this.props.className,
                        ),
                      },
                      r && this.renderAxisLine(),
                      o && this.renderTicks(),
                      p.J.renderCallByParent(this.props, this.getViewBox()),
                    )
                  : null;
              },
            },
          ]) && A(r.prototype, o),
          a && A(r, a),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, o, a;
      })(n.PureComponent);
      M(_, "displayName", "PolarRadiusAxis"),
        M(_, "axisType", "radiusAxis"),
        M(_, "defaultProps", {
          type: "number",
          radiusAxisId: 0,
          cx: 0,
          cy: 0,
          angle: 0,
          orientation: "right",
          stroke: "#ccc",
          axisLine: !0,
          tick: !0,
          tickCount: 5,
          allowDataOverflow: !1,
          scale: "auto",
          allowDuplicatedCategory: !0,
        });
    },
    92665: (t, e, r) => {
      "use strict";
      r.d(e, { V: () => L });
      var n = r(90626),
        o = r(86356),
        i = r(64609),
        a = r.n(i),
        c = r(73912),
        u = r.n(c),
        l = r(90540),
        s = r.n(l),
        f = r(58782),
        p = r.n(f),
        h = r(3316),
        y = r.n(h),
        d = r(34164),
        v = r(96714),
        m = r(59640),
        b = r(90134),
        g = r(61195),
        x = r(27690),
        w = r(21687),
        O = r(75055),
        j = r(12244),
        A = r(93563),
        S = ["key"];
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
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          k.apply(this, arguments)
        );
      }
      function M(t, e) {
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
            ? M(Object(r), !0).forEach(function (e) {
                B(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : M(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e),
                  );
                });
        }
        return t;
      }
      function _(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, R(n.key), n);
        }
      }
      function C(t, e, r) {
        return (
          (e = I(e)),
          (function (t, e) {
            if (e && ("object" === P(e) || "function" == typeof e)) return e;
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
            D()
              ? Reflect.construct(e, r || [], I(t).constructor)
              : e.apply(t, r),
          )
        );
      }
      function D() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (D = function () {
          return !!t;
        })();
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
      function B(t, e, r) {
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
          if ("object" != P(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != P(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == P(e) ? e : e + "";
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
            B((t = C(this, e, [].concat(n))), "state", {
              isAnimationFinished: !1,
            }),
            B(t, "handleAnimationEnd", function () {
              var e = t.props.onAnimationEnd;
              t.setState({ isAnimationFinished: !0 }), y()(e) && e();
            }),
            B(t, "handleAnimationStart", function () {
              var e = t.props.onAnimationStart;
              t.setState({ isAnimationFinished: !1 }), y()(e) && e();
            }),
            B(t, "handleMouseEnter", function (e) {
              var r = t.props.onMouseEnter;
              r && r(t.props, e);
            }),
            B(t, "handleMouseLeave", function (e) {
              var r = t.props.onMouseLeave;
              r && r(t.props, e);
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
              e && N(t, e);
          })(e, t),
          (r = e),
          (a = [
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
              key: "renderDotItem",
              value: function (t, e) {
                var r;
                if (n.isValidElement(t)) r = n.cloneElement(t, e);
                else if (y()(t)) r = t(e);
                else {
                  var o = e.key,
                    i = E(e, S);
                  r = n.createElement(
                    w.c,
                    k({}, i, {
                      key: o,
                      className: (0, d.A)(
                        "recharts-radar-dot",
                        "boolean" != typeof t ? t.className : "",
                      ),
                    }),
                  );
                }
                return r;
              },
            },
          ]),
          (i = [
            {
              key: "renderDots",
              value: function (t) {
                var r = this.props,
                  o = r.dot,
                  i = r.dataKey,
                  a = (0, A.J9)(this.props, !1),
                  c = (0, A.J9)(o, !0),
                  u = t.map(function (t, r) {
                    var n = T(
                      T(T({ key: "dot-".concat(r), r: 3 }, a), c),
                      {},
                      { dataKey: i, cx: t.x, cy: t.y, index: r, payload: t },
                    );
                    return e.renderDotItem(o, n);
                  });
                return n.createElement(
                  O.W,
                  { className: "recharts-radar-dots" },
                  u,
                );
              },
            },
            {
              key: "renderPolygonStatically",
              value: function (t) {
                var e,
                  r = this.props,
                  o = r.shape,
                  i = r.dot,
                  a = r.isRange,
                  c = r.baseLinePoints,
                  u = r.connectNulls;
                return (
                  (e = n.isValidElement(o)
                    ? n.cloneElement(o, T(T({}, this.props), {}, { points: t }))
                    : y()(o)
                      ? o(T(T({}, this.props), {}, { points: t }))
                      : n.createElement(
                          x.t,
                          k({}, (0, A.J9)(this.props, !0), {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave,
                            points: t,
                            baseLinePoints: a ? c : null,
                            connectNulls: u,
                          }),
                        )),
                  n.createElement(
                    O.W,
                    { className: "recharts-radar-polygon" },
                    e,
                    i ? this.renderDots(t) : null,
                  )
                );
              },
            },
            {
              key: "renderPolygonWithAnimation",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.points,
                  i = e.isAnimationActive,
                  a = e.animationBegin,
                  c = e.animationDuration,
                  u = e.animationEasing,
                  l = e.animationId,
                  s = this.state.prevPoints;
                return n.createElement(
                  o.Ay,
                  {
                    begin: a,
                    duration: c,
                    isActive: i,
                    easing: u,
                    from: { t: 0 },
                    to: { t: 1 },
                    key: "radar-".concat(l),
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart,
                  },
                  function (e) {
                    var n = e.t,
                      o = s && s.length / r.length,
                      i = r.map(function (t, e) {
                        var r = s && s[Math.floor(e * o)];
                        if (r) {
                          var i = (0, v.Dj)(r.x, t.x),
                            a = (0, v.Dj)(r.y, t.y);
                          return T(T({}, t), {}, { x: i(n), y: a(n) });
                        }
                        var c = (0, v.Dj)(t.cx, t.x),
                          u = (0, v.Dj)(t.cy, t.y);
                        return T(T({}, t), {}, { x: c(n), y: u(n) });
                      });
                    return t.renderPolygonStatically(i);
                  },
                );
              },
            },
            {
              key: "renderPolygon",
              value: function () {
                var t = this.props,
                  e = t.points,
                  r = t.isAnimationActive,
                  n = t.isRange,
                  o = this.state.prevPoints;
                return !(r && e && e.length) || n || (o && p()(o, e))
                  ? this.renderPolygonStatically(e)
                  : this.renderPolygonWithAnimation();
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.hide,
                  r = t.className,
                  o = t.points,
                  i = t.isAnimationActive;
                if (e || !o || !o.length) return null;
                var a = this.state.isAnimationFinished,
                  c = (0, d.A)("recharts-radar", r);
                return n.createElement(
                  O.W,
                  { className: c },
                  this.renderPolygon(),
                  (!i || a) && j.Z.renderCallByParent(this.props, o),
                );
              },
            },
          ]) && _(r.prototype, i),
          a && _(r, a),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
        var r, i, a;
      })(n.PureComponent);
      B(L, "displayName", "Radar"),
        B(L, "defaultProps", {
          angleAxisId: 0,
          radiusAxisId: 0,
          hide: !1,
          activeDot: !0,
          dot: !1,
          legendType: "rect",
          isAnimationActive: !m.m.isSsr,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        }),
        B(L, "getComposedData", function (t) {
          var e = t.radiusAxis,
            r = t.angleAxis,
            n = t.displayedData,
            o = t.dataKey,
            i = t.bandSize,
            c = r.cx,
            l = r.cy,
            f = !1,
            p = [],
            h = "number" !== r.type && null != i ? i : 0;
          n.forEach(function (t, n) {
            var i = (0, g.kr)(t, r.dataKey, n),
              s = (0, g.kr)(t, o),
              y = r.scale(i) + h,
              d = Array.isArray(s) ? u()(s) : s,
              v = a()(d) ? void 0 : e.scale(d);
            Array.isArray(s) && s.length >= 2 && (f = !0),
              p.push(
                T(
                  T({}, (0, b.IZ)(c, l, v, y)),
                  {},
                  {
                    name: i,
                    value: s,
                    cx: c,
                    cy: l,
                    radius: v,
                    angle: y,
                    payload: t,
                  },
                ),
              );
          });
          var y = [];
          return (
            f &&
              p.forEach(function (t) {
                if (Array.isArray(t.value)) {
                  var r = s()(t.value),
                    n = a()(r) ? void 0 : e.scale(r);
                  y.push(
                    T(T({}, t), {}, { radius: n }, (0, b.IZ)(c, l, n, t.angle)),
                  );
                } else y.push(t);
              }),
            { points: p, isRange: f, baseLinePoints: y }
          );
        });
    },
    33487: (t, e, r) => {
      "use strict";
      r.d(e, { I: () => H });
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
      function c(t) {
        this._context = t;
      }
      function u(t) {
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
        (c.prototype = {
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
        (u.prototype = {
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
          c = (i * o + a * n) / (n + o);
        return (
          (h(i) + h(a)) *
            Math.min(Math.abs(i), Math.abs(a), 0.5 * Math.abs(c)) || 0
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
          c = (i - n) / 3;
        t._context.bezierCurveTo(n + c, o + c * e, i - c, a - c * r, i, a);
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
        A = r(94770),
        S = r(5823);
      function P(t) {
        return t[0];
      }
      function E(t) {
        return t[1];
      }
      function k(t, e) {
        var r = (0, A.A)(!0),
          n = null,
          o = p,
          i = null,
          a = (0, S.i)(c);
        function c(c) {
          var u,
            l,
            s,
            f = (c = (0, j.A)(c)).length,
            p = !1;
          for (null == n && (i = o((s = a()))), u = 0; u <= f; ++u)
            !(u < f && r((l = c[u]), u, c)) === p &&
              ((p = !p) ? i.lineStart() : i.lineEnd()),
              p && i.point(+t(l, u, c), +e(l, u, c));
          if (s) return (i = null), s + "" || null;
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? P : (0, A.A)(t)),
          (e = "function" == typeof e ? e : void 0 === e ? E : (0, A.A)(e)),
          (c.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, A.A)(+e)), c)
              : t;
          }),
          (c.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, A.A)(+t)), c)
              : e;
          }),
          (c.defined = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : (0, A.A)(!!t)), c)
              : r;
          }),
          (c.curve = function (t) {
            return arguments.length ? ((o = t), null != n && (i = o(n)), c) : o;
          }),
          (c.context = function (t) {
            return arguments.length
              ? (null == t ? (n = i = null) : (i = o((n = t))), c)
              : n;
          }),
          c
        );
      }
      function M(t, e, r) {
        var n = null,
          o = (0, A.A)(!0),
          i = null,
          a = p,
          c = null,
          u = (0, S.i)(l);
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
          for (null == i && (c = a((y = u()))), s = 0; s <= d; ++s) {
            if (!(s < d && o((h = l[s]), s, l)) === v)
              if ((v = !v)) (f = s), c.areaStart(), c.lineStart();
              else {
                for (c.lineEnd(), c.lineStart(), p = s - 1; p >= f; --p)
                  c.point(m[p], b[p]);
                c.lineEnd(), c.areaEnd();
              }
            v &&
              ((m[s] = +t(h, s, l)),
              (b[s] = +e(h, s, l)),
              c.point(n ? +n(h, s, l) : m[s], r ? +r(h, s, l) : b[s]));
          }
          if (y) return (c = null), y + "" || null;
        }
        function s() {
          return k().defined(o).curve(a).context(i);
        }
        return (
          (t = "function" == typeof t ? t : void 0 === t ? P : (0, A.A)(+t)),
          (e =
            "function" == typeof e
              ? e
              : void 0 === e
                ? (0, A.A)(0)
                : (0, A.A)(+e)),
          (r = "function" == typeof r ? r : void 0 === r ? E : (0, A.A)(+r)),
          (l.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, A.A)(+e)), (n = null), l)
              : t;
          }),
          (l.x0 = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, A.A)(+e)), l)
              : t;
          }),
          (l.x1 = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? null : "function" == typeof t ? t : (0, A.A)(+t)),
                l)
              : n;
          }),
          (l.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, A.A)(+t)), (r = null), l)
              : e;
          }),
          (l.y0 = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, A.A)(+t)), l)
              : e;
          }),
          (l.y1 = function (t) {
            return arguments.length
              ? ((r =
                  null == t ? null : "function" == typeof t ? t : (0, A.A)(+t)),
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
              ? ((o = "function" == typeof t ? t : (0, A.A)(!!t)), l)
              : o;
          }),
          (l.curve = function (t) {
            return arguments.length ? ((a = t), null != i && (c = a(i)), l) : a;
          }),
          (l.context = function (t) {
            return arguments.length
              ? (null == t ? (i = c = null) : (c = a((i = t))), l)
              : i;
          }),
          l
        );
      }
      var T = r(4842),
        _ = r.n(T),
        C = r(3316),
        D = r.n(C),
        I = r(34164),
        N = r(43998),
        B = r(93563),
        R = r(96714);
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
      function F(t, e) {
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
            ? F(Object(r), !0).forEach(function (e) {
                W(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : F(Object(r)).forEach(function (e) {
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
            return new c(t);
          },
          curveBasisOpen: function (t) {
            return new u(t);
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
        K = function (t) {
          return t.x;
        },
        X = function (t) {
          return t.y;
        },
        V = function (t) {
          var e,
            r = t.type,
            n = void 0 === r ? "linear" : r,
            o = t.points,
            i = void 0 === o ? [] : o,
            a = t.baseLine,
            c = t.layout,
            u = t.connectNulls,
            l = void 0 !== u && u,
            s = (function (t, e) {
              if (D()(t)) return t;
              var r = "curve".concat(_()(t));
              return ("curveMonotone" !== r && "curveBump" !== r) || !e
                ? $[r] || p
                : $["".concat(r).concat("vertical" === e ? "Y" : "X")];
            })(n, c),
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
                return U(U({}, t), {}, { base: h[e] });
              });
            return (
              (e =
                "vertical" === c
                  ? M()
                      .y(X)
                      .x1(K)
                      .x0(function (t) {
                        return t.base.x;
                      })
                  : M()
                      .x(K)
                      .y1(X)
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
              "vertical" === c && (0, R.Et)(a)
                ? M().y(X).x1(K).x0(a)
                : (0, R.Et)(a)
                  ? M().x(K).y1(X).y0(a)
                  : k().x(K).y(X))
              .defined(q)
              .curve(s),
            e(f)
          );
        },
        H = function (t) {
          var e = t.className,
            r = t.points,
            o = t.path,
            i = t.pathRef;
          if (!((r && r.length) || o)) return null;
          var a = r && r.length ? V(t) : o;
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
    21687: (t, e, r) => {
      "use strict";
      r.d(e, { c: () => u });
      var n = r(90626),
        o = r(34164),
        i = r(43998),
        a = r(93563);
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
      var u = function (t) {
        var e = t.cx,
          r = t.cy,
          u = t.r,
          l = t.className,
          s = (0, o.A)("recharts-dot", l);
        return e === +e && r === +r && u === +u
          ? n.createElement(
              "circle",
              c({}, (0, a.J9)(t, !1), (0, i._U)(t), {
                className: s,
                cx: e,
                cy: r,
                r: u,
              }),
            )
          : null;
      };
    },
    27690: (t, e, r) => {
      "use strict";
      r.d(e, { t: () => h });
      var n = r(90626),
        o = r(34164),
        i = r(93563),
        a = ["points", "className", "baseLinePoints", "connectNulls"];
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
      function u(t, e) {
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
        return (
          (function (t) {
            if (Array.isArray(t)) return s(t);
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
            if ("string" == typeof t) return s(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return s(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var f = function (t) {
          return t && t.x === +t.x && t.y === +t.y;
        },
        p = function (t, e) {
          var r = (function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              e = [[]];
            return (
              t.forEach(function (t) {
                f(t)
                  ? e[e.length - 1].push(t)
                  : e[e.length - 1].length > 0 && e.push([]);
              }),
              f(t[0]) && e[e.length - 1].push(t[0]),
              e[e.length - 1].length <= 0 && (e = e.slice(0, -1)),
              e
            );
          })(t);
          e &&
            (r = [
              r.reduce(function (t, e) {
                return [].concat(l(t), l(e));
              }, []),
            ]);
          var n = r
            .map(function (t) {
              return t.reduce(function (t, e, r) {
                return ""
                  .concat(t)
                  .concat(0 === r ? "M" : "L")
                  .concat(e.x, ",")
                  .concat(e.y);
              }, "");
            })
            .join("");
          return 1 === r.length ? "".concat(n, "Z") : n;
        },
        h = function (t) {
          var e = t.points,
            r = t.className,
            l = t.baseLinePoints,
            s = t.connectNulls,
            f = u(t, a);
          if (!e || !e.length) return null;
          var h = (0, o.A)("recharts-polygon", r);
          if (l && l.length) {
            var y = f.stroke && "none" !== f.stroke,
              d = (function (t, e, r) {
                var n = p(t, r);
                return ""
                  .concat("Z" === n.slice(-1) ? n.slice(0, -1) : n, "L")
                  .concat(p(e.reverse(), r).slice(1));
              })(e, l, s);
            return n.createElement(
              "g",
              { className: h },
              n.createElement(
                "path",
                c({}, (0, i.J9)(f, !0), {
                  fill: "Z" === d.slice(-1) ? f.fill : "none",
                  stroke: "none",
                  d,
                }),
              ),
              y
                ? n.createElement(
                    "path",
                    c({}, (0, i.J9)(f, !0), { fill: "none", d: p(e, s) }),
                  )
                : null,
              y
                ? n.createElement(
                    "path",
                    c({}, (0, i.J9)(f, !0), { fill: "none", d: p(l, s) }),
                  )
                : null,
            );
          }
          var v = p(e, s);
          return n.createElement(
            "path",
            c({}, (0, i.J9)(f, !0), {
              fill: "Z" === v.slice(-1) ? f.fill : "none",
              className: h,
              d: v,
            }),
          );
        };
    },
    52857: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => d, M: () => m });
      var n = r(90626),
        o = r(34164),
        i = r(86356),
        a = r(93563);
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
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
      var y = function (t, e, r, n, o) {
          var i,
            a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
            c = n >= 0 ? 1 : -1,
            u = r >= 0 ? 1 : -1,
            l = (n >= 0 && r >= 0) || (n < 0 && r < 0) ? 1 : 0;
          if (a > 0 && o instanceof Array) {
            for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
              s[f] = o[f] > a ? a : o[f];
            (i = "M".concat(t, ",").concat(e + c * s[0])),
              s[0] > 0 &&
                (i += "A "
                  .concat(s[0], ",")
                  .concat(s[0], ",0,0,")
                  .concat(l, ",")
                  .concat(t + u * s[0], ",")
                  .concat(e)),
              (i += "L ".concat(t + r - u * s[1], ",").concat(e)),
              s[1] > 0 &&
                (i += "A "
                  .concat(s[1], ",")
                  .concat(s[1], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + r, ",")
                  .concat(e + c * s[1])),
              (i += "L ".concat(t + r, ",").concat(e + n - c * s[2])),
              s[2] > 0 &&
                (i += "A "
                  .concat(s[2], ",")
                  .concat(s[2], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t + r - u * s[2], ",")
                  .concat(e + n)),
              (i += "L ".concat(t + u * s[3], ",").concat(e + n)),
              s[3] > 0 &&
                (i += "A "
                  .concat(s[3], ",")
                  .concat(s[3], ",0,0,")
                  .concat(l, ",\n        ")
                  .concat(t, ",")
                  .concat(e + n - c * s[3])),
              (i += "Z");
          } else if (a > 0 && o === +o && o > 0) {
            var p = Math.min(a, o);
            i = "M "
              .concat(t, ",")
              .concat(e + c * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + u * p, ",")
              .concat(e, "\n            L ")
              .concat(t + r - u * p, ",")
              .concat(e, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + r, ",")
              .concat(e + c * p, "\n            L ")
              .concat(t + r, ",")
              .concat(e + n - c * p, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t + r - u * p, ",")
              .concat(e + n, "\n            L ")
              .concat(t + u * p, ",")
              .concat(e + n, "\n            A ")
              .concat(p, ",")
              .concat(p, ",0,0,")
              .concat(l, ",")
              .concat(t, ",")
              .concat(e + n - c * p, " Z");
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
            c = e.height;
          if (Math.abs(a) > 0 && Math.abs(c) > 0) {
            var u = Math.min(o, o + a),
              l = Math.max(o, o + a),
              s = Math.min(i, i + c),
              f = Math.max(i, i + c);
            return r >= u && r <= l && n >= s && n <= f;
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
            c = l((0, n.useState)(-1), 2),
            s = c[0],
            f = c[1];
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
            A = e.isAnimationActive,
            S = e.isUpdateAnimationActive;
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
          return S
            ? n.createElement(
                i.Ay,
                {
                  canBegin: s > 0,
                  from: { width: m, height: b, x: h, y: d },
                  to: { width: m, height: b, x: h, y: d },
                  duration: O,
                  animationEasing: w,
                  isActive: S,
                },
                function (t) {
                  var o = t.width,
                    c = t.height,
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
                      isActive: A,
                      easing: w,
                    },
                    n.createElement(
                      "path",
                      u({}, (0, a.J9)(e, !0), {
                        className: P,
                        d: y(l, f, o, c, g),
                        ref: r,
                      }),
                    ),
                  );
                },
              )
            : n.createElement(
                "path",
                u({}, (0, a.J9)(e, !0), { className: P, d: y(h, d, m, b, g) }),
              );
        };
    },
    24588: (t, e, r) => {
      "use strict";
      r.d(e, { h: () => v });
      var n = r(90626),
        o = r(34164),
        i = r(93563),
        a = r(90134),
        c = r(96714);
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
      var h = function (t) {
          var e = t.cx,
            r = t.cy,
            n = t.radius,
            o = t.angle,
            i = t.sign,
            c = t.isExternal,
            u = t.cornerRadius,
            l = t.cornerIsExternal,
            s = u * (c ? 1 : -1) + n,
            f = Math.asin(u / s) / a.Kg,
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
            u = (function (t, e) {
              return (0, c.sA)(e - t) * Math.min(Math.abs(e - t), 359.999);
            })(i, t.endAngle),
            l = i + u,
            s = (0, a.IZ)(e, r, o, i),
            f = (0, a.IZ)(e, r, o, l),
            p = "M "
              .concat(s.x, ",")
              .concat(s.y, "\n    A ")
              .concat(o, ",")
              .concat(o, ",0,\n    ")
              .concat(+(Math.abs(u) > 180), ",")
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
              .concat(+(Math.abs(u) > 180), ",")
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
            u = e.innerRadius,
            s = e.outerRadius,
            p = e.cornerRadius,
            v = e.forceCornerRadius,
            m = e.cornerIsExternal,
            b = e.startAngle,
            g = e.endAngle,
            x = e.className;
          if (s < u || b === g) return null;
          var w,
            O = (0, o.A)("recharts-sector", x),
            j = s - u,
            A = (0, c.F4)(p, j, 0, !0);
          return (
            (w =
              A > 0 && Math.abs(b - g) < 360
                ? (function (t) {
                    var e = t.cx,
                      r = t.cy,
                      n = t.innerRadius,
                      o = t.outerRadius,
                      i = t.cornerRadius,
                      a = t.forceCornerRadius,
                      u = t.cornerIsExternal,
                      l = t.startAngle,
                      s = t.endAngle,
                      f = (0, c.sA)(s - l),
                      p = h({
                        cx: e,
                        cy: r,
                        radius: o,
                        angle: l,
                        sign: f,
                        cornerRadius: i,
                        cornerIsExternal: u,
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
                        cornerIsExternal: u,
                      }),
                      g = b.circleTangency,
                      x = b.lineTangency,
                      w = b.theta,
                      O = u ? Math.abs(l - s) : Math.abs(l - s) - m - w;
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
                      var A = h({
                          cx: e,
                          cy: r,
                          radius: n,
                          angle: l,
                          sign: f,
                          isExternal: !0,
                          cornerRadius: i,
                          cornerIsExternal: u,
                        }),
                        S = A.circleTangency,
                        P = A.lineTangency,
                        E = A.theta,
                        k = h({
                          cx: e,
                          cy: r,
                          radius: n,
                          angle: s,
                          sign: -f,
                          isExternal: !0,
                          cornerRadius: i,
                          cornerIsExternal: u,
                        }),
                        M = k.circleTangency,
                        T = k.lineTangency,
                        _ = k.theta,
                        C = u ? Math.abs(l - s) : Math.abs(l - s) - E - _;
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
                        .concat(S.x, ",")
                        .concat(S.y, "\n      A")
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
                    innerRadius: u,
                    outerRadius: s,
                    cornerRadius: Math.min(A, j / 2),
                    forceCornerRadius: v,
                    cornerIsExternal: m,
                    startAngle: b,
                    endAngle: g,
                  })
                : y({
                    cx: r,
                    cy: a,
                    innerRadius: u,
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
    17134: (t, e, r) => {
      "use strict";
      r.d(e, { i: () => U });
      var n = r(90626),
        o = r(4842),
        i = r.n(o);
      Math.abs, Math.atan2;
      const a = Math.cos,
        c = (Math.max, Math.min, Math.sin),
        u = Math.sqrt,
        l = Math.PI,
        s = 2 * l;
      const f = {
          draw(t, e) {
            const r = u(e / l);
            t.moveTo(r, 0), t.arc(0, 0, r, 0, s);
          },
        },
        p = {
          draw(t, e) {
            const r = u(e / 5) / 2;
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
        h = u(1 / 3),
        y = 2 * h,
        d = {
          draw(t, e) {
            const r = u(e / y),
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
            const r = u(e),
              n = -r / 2;
            t.rect(n, n, r, r);
          },
        },
        m = c(l / 10) / c((7 * l) / 10),
        b = c(s / 10) * m,
        g = -a(s / 10) * m,
        x = {
          draw(t, e) {
            const r = u(0.8908130915292852 * e),
              n = b * r,
              o = g * r;
            t.moveTo(0, -r), t.lineTo(n, o);
            for (let e = 1; e < 5; ++e) {
              const i = (s * e) / 5,
                u = a(i),
                l = c(i);
              t.lineTo(l * r, -u * r), t.lineTo(u * n - l * o, l * n + u * o);
            }
            t.closePath();
          },
        },
        w = u(3),
        O = {
          draw(t, e) {
            const r = -u(e / (3 * w));
            t.moveTo(0, 2 * r),
              t.lineTo(-w * r, -r),
              t.lineTo(w * r, -r),
              t.closePath();
          },
        },
        j = -0.5,
        A = u(3) / 2,
        S = 1 / u(12),
        P = 3 * (S / 2 + 1),
        E = {
          draw(t, e) {
            const r = u(e / P),
              n = r / 2,
              o = r * S,
              i = n,
              a = r * S + r,
              c = -i,
              l = a;
            t.moveTo(n, o),
              t.lineTo(i, a),
              t.lineTo(c, l),
              t.lineTo(j * n - A * o, A * n + j * o),
              t.lineTo(j * i - A * a, A * i + j * a),
              t.lineTo(j * c - A * l, A * c + j * l),
              t.lineTo(j * n + A * o, j * o - A * n),
              t.lineTo(j * i + A * a, j * a - A * i),
              t.lineTo(j * c + A * l, j * l - A * c),
              t.closePath();
          },
        };
      var k = r(94770),
        M = r(5823);
      u(3), u(3);
      var T = r(34164),
        _ = r(93563);
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
        F = Math.PI / 180,
        U = function (t) {
          var e,
            r,
            o = t.type,
            a = void 0 === o ? "circle" : o,
            c = t.size,
            u = void 0 === c ? 64 : c,
            l = t.sizeType,
            s = void 0 === l ? "area" : l,
            p = B(B({}, L(t, D)), {}, { type: a, size: u, sizeType: s }),
            h = p.className,
            y = p.cx,
            d = p.cy,
            v = (0, _.J9)(p, !0);
          return y === +y && d === +d && u === +u
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
                              var n = 18 * F;
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
                        })(u, s, a),
                      )),
                    r()),
                }),
              )
            : null;
        };
      U.registerSymbol = function (t, e) {
        z["symbol".concat(i()(t))] = e;
      };
    },
    53818: (t, e, r) => {
      "use strict";
      r.d(e, {
        yp: () => R,
        GG: () => q,
        NE: () => L,
        nZ: () => z,
        xQ: () => F,
      });
      var n = r(90626),
        o = r(3316),
        i = r.n(o),
        a = r(23449),
        c = r.n(a),
        u = r(23734),
        l = r.n(u),
        s = r(58782),
        f = r.n(s),
        p = r(52857),
        h = r(34164),
        y = r(86356),
        d = r(93563);
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
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
        A = {
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
        S = function (t) {
          var e = w(w({}, A), t),
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
          var c = e.x,
            u = e.y,
            l = e.upperWidth,
            s = e.lowerWidth,
            f = e.height,
            p = e.className,
            v = e.animationEasing,
            g = e.animationDuration,
            x = e.animationBegin,
            O = e.isUpdateAnimationActive;
          if (
            c !== +c ||
            u !== +u ||
            l !== +l ||
            s !== +s ||
            f !== +f ||
            (0 === l && 0 === s) ||
            0 === f
          )
            return null;
          var S = (0, h.A)("recharts-trapezoid", p);
          return O
            ? n.createElement(
                y.Ay,
                {
                  canBegin: i > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: f, x: c, y: u },
                  to: { upperWidth: l, lowerWidth: s, height: f, x: c, y: u },
                  duration: g,
                  animationEasing: v,
                  isActive: O,
                },
                function (t) {
                  var o = t.upperWidth,
                    a = t.lowerWidth,
                    c = t.height,
                    u = t.x,
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
                        className: S,
                        d: j(u, l, o, a, c),
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
                    className: S,
                    d: j(c, u, l, s, f),
                  }),
                ),
              );
        },
        P = r(24588),
        E = r(75055),
        k = r(17134),
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
            return n.createElement(S, r);
          case "sector":
            return n.createElement(P.h, r);
          case "symbols":
            if (
              (function (t) {
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
          u = void 0 === a ? N : a,
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
        else if (c()(r) && !l()(r)) {
          var y = u(r, h);
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
      function F(t, e) {
        return null != e && "points" in t.props;
      }
      function U(t, e) {
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
                  : F(t, e) && (r = "points"),
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
                : F(t, e)
                  ? e.payload
                  : {};
          })(r, e),
          a = n.filter(function (t, n) {
            var a = f()(i, t),
              c = r.props[o].filter(function (t) {
                var n = (function (t, e) {
                  var r;
                  return (
                    L(t, e) ? (r = U) : z(t, e) ? (r = W) : F(t, e) && (r = $),
                    r
                  );
                })(r, e);
                return n(t, e);
              }),
              u = r.props[o].indexOf(c[c.length - 1]);
            return a && n === u;
          });
        return n.indexOf(a[a.length - 1]);
      }
    },
    12260: (t, e, r) => {
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
        c = r(61195),
        u = r(93563),
        l = r(96714),
        s = r(20283);
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
            m = !!(0, u.BU)(p, s.y);
          return h.reduce(function (i, a) {
            var u,
              s,
              p,
              h,
              b,
              g = e[a],
              x = g.orientation,
              w = g.domain,
              O = g.padding,
              j = void 0 === O ? {} : O,
              A = g.mirror,
              S = g.reversed,
              P = "".concat(x).concat(A ? "Mirror" : "");
            if (
              "number" === g.type &&
              ("gap" === g.padding || "no-gap" === g.padding)
            ) {
              var E = w[1] - w[0],
                k = 1 / 0,
                M = g.categoricalDomain.sort(l.ck);
              if (
                (M.forEach(function (t, e) {
                  e > 0 && (k = Math.min((t || 0) - (M[e - 1] || 0), k));
                }),
                Number.isFinite(k))
              ) {
                var T = k / E,
                  _ = "vertical" === g.layout ? r.height : r.width;
                if (
                  ("gap" === g.padding && (u = (T * _) / 2),
                  "no-gap" === g.padding)
                ) {
                  var C = (0, l.F4)(t.barCategoryGap, T * _),
                    D = (T * _) / 2;
                  u = D - C - ((D - C) / _) * C;
                }
              }
            }
            (s =
              "xAxis" === n
                ? [
                    r.left + (j.left || 0) + (u || 0),
                    r.left + r.width - (j.right || 0) - (u || 0),
                  ]
                : "yAxis" === n
                  ? "horizontal" === f
                    ? [r.top + r.height - (j.bottom || 0), r.top + (j.top || 0)]
                    : [
                        r.top + (j.top || 0) + (u || 0),
                        r.top + r.height - (j.bottom || 0) - (u || 0),
                      ]
                  : g.range),
              S && (s = [s[1], s[0]]);
            var I = (0, c.W7)(g, o, m),
              N = I.scale,
              B = I.realScaleType;
            N.domain(w).range(s), (0, c.YB)(N);
            var R = (0, c.w7)(N, y(y({}, g), {}, { realScaleType: B }));
            "xAxis" === n
              ? ((b = ("top" === x && !A) || ("bottom" === x && A)),
                (p = r.left),
                (h = v[P] - b * g.height))
              : "yAxis" === n &&
                ((b = ("left" === x && !A) || ("right" === x && A)),
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
              (L.bandSize = (0, c.Hj)(L, R)),
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
    61195: (t, e, r) => {
      "use strict";
      r.d(e, {
        s0: () => wi,
        gH: () => mi,
        YB: () => Ci,
        HQ: () => Mi,
        xi: () => Di,
        Hj: () => Vi,
        BX: () => xi,
        tA: () => gi,
        DW: () => Ui,
        y2: () => Fi,
        nb: () => zi,
        PW: () => Pi,
        Ay: () => vi,
        vf: () => Ai,
        Mk: () => $i,
        Ps: () => bi,
        Mn: () => Ri,
        kA: () => Wi,
        Rh: () => Ei,
        w7: () => Li,
        zb: () => Ji,
        kr: () => di,
        _L: () => Si,
        KC: () => Hi,
        A1: () => ji,
        W7: () => Ti,
        AQ: () => Xi,
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
          scaleIdentity: () => Kt,
          scaleImplicit: () => ie.h,
          scaleLinear: () => qt,
          scaleLog: () => te,
          scaleOrdinal: () => ie.A,
          scalePoint: () => o.z,
          scalePow: () => se,
          scaleQuantile: () => Oe,
          scaleQuantize: () => je,
          scaleRadial: () => he,
          scaleSequential: () => Xn,
          scaleSequentialLog: () => Vn,
          scaleSequentialPow: () => Jn,
          scaleSequentialQuantile: () => Yn,
          scaleSequentialSqrt: () => Gn,
          scaleSequentialSymlog: () => Hn,
          scaleSqrt: () => fe,
          scaleSymlog: () => oe,
          scaleThreshold: () => Ae,
          scaleTime: () => Wn,
          scaleUtc: () => $n,
          tickFormat: () => Wt,
        });
      var o = r(28583);
      const i = Math.sqrt(50),
        a = Math.sqrt(10),
        c = Math.sqrt(2);
      function u(t, e, r) {
        const n = (e - t) / Math.max(0, r),
          o = Math.floor(Math.log10(n)),
          l = n / Math.pow(10, o),
          s = l >= i ? 10 : l >= a ? 5 : l >= c ? 2 : 1;
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
          p < f && 0.5 <= r && r < 2 ? u(t, e, 2 * r) : [f, p, h]
        );
      }
      function l(t, e, r) {
        if (!((r = +r) > 0)) return [];
        if ((t = +t) === (e = +e)) return [t];
        const n = e < t,
          [o, i, a] = n ? u(e, t, r) : u(t, e, r);
        if (!(i >= o)) return [];
        const c = i - o + 1,
          l = new Array(c);
        if (n)
          if (a < 0) for (let t = 0; t < c; ++t) l[t] = (i - t) / -a;
          else for (let t = 0; t < c; ++t) l[t] = (i - t) * a;
        else if (a < 0) for (let t = 0; t < c; ++t) l[t] = (o + t) / -a;
        else for (let t = 0; t < c; ++t) l[t] = (o + t) * a;
        return l;
      }
      function s(t, e, r) {
        return u((t = +t), (e = +e), (r = +r))[2];
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
        A = 1 / j,
        S = "\\s*([+-]?\\d+)\\s*",
        P = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        E = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        k = /^#([0-9a-f]{3,8})$/,
        M = new RegExp(`^rgb\\(${S},${S},${S}\\)$`),
        T = new RegExp(`^rgb\\(${E},${E},${E}\\)$`),
        _ = new RegExp(`^rgba\\(${S},${S},${S},${P}\\)$`),
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
                    ? F(
                        (e >> 24) & 255,
                        (e >> 16) & 255,
                        (e >> 8) & 255,
                        (255 & e) / 255,
                      )
                    : 4 === r
                      ? F(
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
                  ? F(e[1], e[2], e[3], e[4])
                  : (e = C.exec(t))
                    ? F(
                        (255 * e[1]) / 100,
                        (255 * e[2]) / 100,
                        (255 * e[3]) / 100,
                        e[4],
                      )
                    : (e = D.exec(t))
                      ? H(e[1], e[2] / 100, e[3] / 100, 1)
                      : (e = I.exec(t))
                        ? H(e[1], e[2] / 100, e[3] / 100, e[4])
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
      function F(t, e, r, n) {
        return n <= 0 && (t = e = r = NaN), new W(t, e, r, n);
      }
      function U(t, e, r, n) {
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
        return `#${V(this.r)}${V(this.g)}${V(this.b)}`;
      }
      function q() {
        const t = K(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${X(this.r)}, ${X(this.g)}, ${X(this.b)}${1 === t ? ")" : `, ${t})`}`;
      }
      function K(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function X(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function V(t) {
        return ((t = X(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function H(t, e, r, n) {
        return (
          n <= 0
            ? (t = e = r = NaN)
            : r <= 0 || r >= 1
              ? (t = e = NaN)
              : e <= 0 && (t = NaN),
          new G(t, e, r, n)
        );
      }
      function J(t) {
        if (t instanceof G) return new G(t.h, t.s, t.l, t.opacity);
        if ((t instanceof O || (t = L(t)), !t)) return new G();
        if (t instanceof G) return t;
        var e = (t = t.rgb()).r / 255,
          r = t.g / 255,
          n = t.b / 255,
          o = Math.min(e, r, n),
          i = Math.max(e, r, n),
          a = NaN,
          c = i - o,
          u = (i + o) / 2;
        return (
          c
            ? ((a =
                e === i
                  ? (r - n) / c + 6 * (r < n)
                  : r === i
                    ? (n - e) / c + 2
                    : (e - r) / c + 4),
              (c /= u < 0.5 ? i + o : 2 - i - o),
              (a *= 60))
            : (c = u > 0 && u < 1 ? 0 : a),
          new G(a, c, u, t.opacity)
        );
      }
      function G(t, e, r, n) {
        (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
      }
      function Y(t) {
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
          return J(this).formatHsl();
        },
        formatRgb: R,
        toString: R,
      }),
        x(
          W,
          U,
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? A : Math.pow(A, t)),
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
              return new W(X(this.r), X(this.g), X(this.b), K(this.opacity));
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
              return `#${V(this.r)}${V(this.g)}${V(this.b)}${V(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
            },
            formatRgb: q,
            toString: q,
          }),
        ),
        x(
          G,
          function (t, e, r, n) {
            return 1 === arguments.length
              ? J(t)
              : new G(t, e, r, null == n ? 1 : n);
          },
          w(O, {
            brighter(t) {
              return (
                (t = null == t ? A : Math.pow(A, t)),
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
                o = 2 * r - n;
              return new W(
                Q(t >= 240 ? t - 240 : t + 120, o, n),
                Q(t, o, n),
                Q(t < 120 ? t + 240 : t - 120, o, n),
                this.opacity,
              );
            },
            clamp() {
              return new G(Y(this.h), Z(this.s), Z(this.l), K(this.opacity));
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
              const t = K(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${Y(this.h)}, ${100 * Z(this.s)}%, ${100 * Z(this.l)}%${1 === t ? ")" : `, ${t})`}`;
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
        return 1 === (t = +t)
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
          var n = r((t = U(t)).r, (e = U(e)).r),
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
            c = new Array(o);
          for (r = 0; r < o; ++r)
            (n = U(e[r])),
              (i[r] = n.r || 0),
              (a[r] = n.g || 0),
              (c[r] = n.b || 0);
          return (
            (i = t(i)),
            (a = t(a)),
            (c = t(c)),
            (n.opacity = 1),
            function (t) {
              return (n.r = i(t)), (n.g = a(t)), (n.b = c(t)), n + "";
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
            c = n < e - 1 ? t[n + 2] : 2 * i - o;
          return tt((r - n / e) * e, a, o, i, c);
        };
      }),
        at(function (t) {
          var e = t.length;
          return function (r) {
            var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
              o = t[(n + e - 1) % e],
              i = t[n % e],
              a = t[(n + 1) % e],
              c = t[(n + 2) % e];
            return tt((r - n / e) * e, o, i, a, c);
          };
        });
      function ct(t, e) {
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
      function ut(t, e) {
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
          c = [],
          u = [];
        for (t += "", e += ""; (r = ft.exec(t)) && (n = pt.exec(e)); )
          (o = n.index) > i &&
            ((o = e.slice(i, o)), c[a] ? (c[a] += o) : (c[++a] = o)),
            (r = r[0]) === (n = n[0])
              ? c[a]
                ? (c[a] += n)
                : (c[++a] = n)
              : ((c[++a] = null), u.push({ i: a, x: lt(r, n) })),
            (i = pt.lastIndex);
        return (
          i < e.length && ((o = e.slice(i)), c[a] ? (c[a] += o) : (c[++a] = o)),
          c.length < 2
            ? u[0]
              ? (function (t) {
                  return function (e) {
                    return t(e) + "";
                  };
                })(u[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(e)
            : ((e = u.length),
              function (t) {
                for (var r, n = 0; n < e; ++n) c[(r = u[n]).i] = r.x(t);
                return c.join("");
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
                    ? ut
                    : ((n = e),
                      !ArrayBuffer.isView(n) || n instanceof DataView
                        ? Array.isArray(e)
                          ? ct
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
      function At() {
        var t,
          e,
          r,
          n,
          o,
          i,
          a = bt,
          c = bt,
          u = dt,
          l = gt;
        function s() {
          var t,
            e,
            r,
            u = Math.min(a.length, c.length);
          return (
            l !== gt &&
              ((t = a[0]),
              (e = a[u - 1]),
              t > e && ((r = t), (t = e), (e = r)),
              (l = function (r) {
                return Math.max(t, Math.min(e, r));
              })),
            (n = u > 2 ? Ot : wt),
            (o = i = null),
            f
          );
        }
        function f(e) {
          return null == e || isNaN((e = +e))
            ? r
            : (o || (o = n(a.map(t), c, u)))(t(l(e)));
        }
        return (
          (f.invert = function (r) {
            return l(e((i || (i = n(c, a.map(t), lt)))(r)));
          }),
          (f.domain = function (t) {
            return arguments.length
              ? ((a = Array.from(t, mt)), s())
              : a.slice();
          }),
          (f.range = function (t) {
            return arguments.length ? ((c = Array.from(t)), s()) : c.slice();
          }),
          (f.rangeRound = function (t) {
            return (c = Array.from(t)), (u = vt), s();
          }),
          (f.clamp = function (t) {
            return arguments.length ? ((l = !!t || gt), s()) : l !== gt;
          }),
          (f.interpolate = function (t) {
            return arguments.length ? ((u = t), s()) : u;
          }),
          (f.unknown = function (t) {
            return arguments.length ? ((r = t), f) : r;
          }),
          function (r, n) {
            return (t = r), (e = n), s();
          }
        );
      }
      function St() {
        return At()(gt, gt);
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
        if (!isFinite(t) || 0 === t) return null;
        var r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e",
          ),
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
          if (!r) return (Pt = void 0), t.toPrecision(e);
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
        Ft = [
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
      function Ut(t) {
        var e,
          r,
          n =
            void 0 === t.grouping || void 0 === t.thousands
              ? Nt
              : ((e = zt.call(t.grouping, Number)),
                (r = t.thousands + ""),
                function (t, n) {
                  for (
                    var o = t.length, i = [], a = 0, c = e[0], u = 0;
                    o > 0 &&
                    c > 0 &&
                    (u + c + 1 > n && (c = Math.max(1, n - u)),
                    i.push(t.substring((o -= c), o + c)),
                    !((u += c + 1) > n));
                  )
                    c = e[(a = (a + 1) % e.length)];
                  return i.reverse().join(r);
                }),
          o = void 0 === t.currency ? "" : t.currency[0] + "",
          i = void 0 === t.currency ? "" : t.currency[1] + "",
          a = void 0 === t.decimal ? "." : t.decimal + "",
          c =
            void 0 === t.numerals
              ? Nt
              : (function (t) {
                  return function (e) {
                    return e.replace(/[0-9]/g, function (e) {
                      return t[+e];
                    });
                  };
                })(zt.call(t.numerals, String)),
          u = void 0 === t.percent ? "%" : t.percent + "",
          l = void 0 === t.minus ? "−" : t.minus + "",
          s = void 0 === t.nan ? "NaN" : t.nan + "";
        function f(t, e) {
          var r = (t = Mt(t)).fill,
            f = t.align,
            p = t.sign,
            h = t.symbol,
            y = t.zero,
            d = t.width,
            v = t.comma,
            m = t.precision,
            b = t.trim,
            g = t.type;
          "n" === g
            ? ((v = !0), (g = "g"))
            : It[g] || (void 0 === m && (m = 12), (b = !0), (g = "g")),
            (y || ("0" === r && "=" === f)) && ((y = !0), (r = "0"), (f = "="));
          var x =
              (e && void 0 !== e.prefix ? e.prefix : "") +
              ("$" === h
                ? o
                : "#" === h && /[boxX]/.test(g)
                  ? "0" + g.toLowerCase()
                  : ""),
            w =
              ("$" === h ? i : /[%p]/.test(g) ? u : "") +
              (e && void 0 !== e.suffix ? e.suffix : ""),
            O = It[g],
            j = /[defgprs%]/.test(g);
          function A(t) {
            var e,
              o,
              i,
              u = x,
              h = w;
            if ("c" === g) (h = O(t) + h), (t = "");
            else {
              var A = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? s : O(Math.abs(t), m)),
                b &&
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
                A && 0 === +t && "+" !== p && (A = !1),
                (u =
                  (A ? ("(" === p ? p : l) : "-" === p || "(" === p ? "" : p) +
                  u),
                (h =
                  ("s" !== g || isNaN(t) || void 0 === Pt
                    ? ""
                    : Ft[8 + Pt / 3]) +
                  h +
                  (A && "(" === p ? ")" : "")),
                j)
              )
                for (e = -1, o = t.length; ++e < o; )
                  if (48 > (i = t.charCodeAt(e)) || i > 57) {
                    (h = (46 === i ? a + t.slice(e + 1) : t.slice(e)) + h),
                      (t = t.slice(0, e));
                    break;
                  }
            }
            v && !y && (t = n(t, 1 / 0));
            var S = u.length + t.length + h.length,
              P = S < d ? new Array(d - S + 1).join(r) : "";
            switch (
              (v &&
                y &&
                ((t = n(P + t, P.length ? d - h.length : 1 / 0)), (P = "")),
              f)
            ) {
              case "<":
                t = u + t + h + P;
                break;
              case "=":
                t = u + P + t + h;
                break;
              case "^":
                t = P.slice(0, (S = P.length >> 1)) + u + t + h + P.slice(S);
                break;
              default:
                t = P + u + t + h;
            }
            return c(t);
          }
          return (
            (m =
              void 0 === m
                ? 6
                : /[gprs]/.test(g)
                  ? Math.max(1, Math.min(21, m))
                  : Math.max(0, Math.min(20, m))),
            (A.toString = function () {
              return t + "";
            }),
            A
          );
        }
        return {
          format: f,
          formatPrefix: function (t, e) {
            var r = 3 * Math.max(-8, Math.min(8, Math.floor(Ct(e) / 3))),
              n = Math.pow(10, -r),
              o = f((((t = Mt(t)).type = "f"), t), { suffix: Ft[8 + r / 3] });
            return function (t) {
              return o(n * t);
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
              c = i.length - 1,
              u = i[a],
              l = i[c],
              f = 10;
            for (
              l < u && ((o = u), (u = l), (l = o), (o = a), (a = c), (c = o));
              f-- > 0;
            ) {
              if ((o = s(u, l, r)) === n) return (i[a] = u), (i[c] = l), e(i);
              if (o > 0)
                (u = Math.floor(u / o) * o), (l = Math.ceil(l / o) * o);
              else {
                if (!(o < 0)) break;
                (u = Math.ceil(u * o) / o), (l = Math.floor(l * o) / o);
              }
              n = o;
            }
            return t;
          }),
          t
        );
      }
      function qt() {
        var t = St();
        return (
          (t.copy = function () {
            return jt(t, qt());
          }),
          Et.C.apply(t, arguments),
          $t(t)
        );
      }
      function Kt(t) {
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
            return Kt(t).unknown(e);
          }),
          (t = arguments.length ? Array.from(t, mt) : [0, 1]),
          $t(r)
        );
      }
      function Xt(t, e) {
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
      function Vt(t) {
        return Math.log(t);
      }
      function Ht(t) {
        return Math.exp(t);
      }
      function Jt(t) {
        return -Math.log(-t);
      }
      function Gt(t) {
        return -Math.exp(-t);
      }
      function Yt(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
      }
      function Zt(t) {
        return (e, r) => -t(-e, r);
      }
      function Qt(t) {
        const e = t(Vt, Ht),
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
                ? Yt
                : t === Math.E
                  ? Math.exp
                  : (e) => Math.pow(t, e);
            })(i)),
            r()[0] < 0 ? ((n = Zt(n)), (o = Zt(o)), t(Jt, Gt)) : t(Vt, Ht),
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
              c = e[e.length - 1];
            const u = c < a;
            u && ([a, c] = [c, a]);
            let s,
              f,
              p = n(a),
              h = n(c);
            const y = null == t ? 10 : +t;
            let d = [];
            if (!(i % 1) && h - p < y) {
              if (((p = Math.floor(p)), (h = Math.ceil(h)), a > 0)) {
                for (; p <= h; ++p)
                  for (s = 1; s < i; ++s)
                    if (((f = p < 0 ? s / o(-p) : s * o(p)), !(f < a))) {
                      if (f > c) break;
                      d.push(f);
                    }
              } else
                for (; p <= h; ++p)
                  for (s = i - 1; s >= 1; --s)
                    if (((f = p > 0 ? s / o(-p) : s * o(p)), !(f < a))) {
                      if (f > c) break;
                      d.push(f);
                    }
              2 * d.length < y && (d = l(a, c, y));
            } else d = l(p, h, Math.min(h - p, y)).map(o);
            return u ? d.reverse() : d;
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
              Xt(r(), {
                floor: (t) => o(Math.floor(n(t))),
                ceil: (t) => o(Math.ceil(n(t))),
              }),
            )),
          e
        );
      }
      function te() {
        const t = Qt(At()).domain([1, 10]);
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
        var t = ne(At());
        return (
          (t.copy = function () {
            return jt(t, oe()).constant(t.constant());
          }),
          Et.C.apply(t, arguments)
        );
      }
      (Bt = Ut({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (Rt = Bt.format),
        (Lt = Bt.formatPrefix);
      var ie = r(97458);
      function ae(t) {
        return function (e) {
          return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
        };
      }
      function ce(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function ue(t) {
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
                  ? t(ce, ue)
                  : t(ae(r), ae(1 / r))
              : r;
          }),
          $t(e)
        );
      }
      function se() {
        var t = le(At());
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
          e = St(),
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
              c = Math.log(i),
              u = 0.5 * Math.exp((2 * c) / 3),
              l =
                0.5 *
                Math.sqrt((c * u * (i - u)) / i) *
                (a - i / 2 < 0 ? -1 : 1);
            be(
              t,
              e,
              Math.max(r, Math.floor(e - (a * u) / i + l)),
              Math.min(n, Math.floor(e + ((i - a) * u) / i + l)),
              o,
            );
          }
          const i = t[e];
          let a = r,
            c = n;
          for (ge(t, r, e), o(t[n], i) > 0 && ge(t, r, n); a < c; ) {
            for (ge(t, a, c), ++a, --c; o(t[a], i) < 0; ) ++a;
            for (; o(t[c], i) > 0; ) --c;
          }
          0 === o(t[r], i) ? ge(t, r, c) : (++c, ge(t, c, n)),
            c <= e && (r = c + 1),
            e <= c && (n = c - 1);
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
        function c() {
          var t = -1;
          for (o = new Array(n); ++t < n; )
            o[t] = ((t + 1) * r - (t - n) * e) / (n + 1);
          return a;
        }
        return (
          (a.domain = function (t) {
            return arguments.length
              ? (([e, r] = t), (e = +e), (r = +r), c())
              : [e, r];
          }),
          (a.range = function (t) {
            return arguments.length
              ? ((n = (i = Array.from(t)).length - 1), c())
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
      function Ae() {
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
            return Ae().domain(e).range(r).unknown(t);
          }),
          Et.C.apply(o, arguments)
        );
      }
      const Se = 1e3,
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
            let c;
            do {
              a.push((c = new Date(+r))), e(r, i), t(r);
            } while (c < r && r < n);
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
                      n
                        ? (e) => n(e) % t === 0
                        : (e) => o.count(0, e) % t === 0,
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
            t.setTime(+t + e * Se);
          },
          (t, e) => (e - t) / Se,
          (t) => t.getUTCSeconds(),
        ),
        Re =
          (Be.range,
          Ie(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * Se);
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
                  t.getSeconds() * Se -
                  t.getMinutes() * Pe,
              );
            },
            (t, e) => {
              t.setTime(+t + e * Ee);
            },
            (t, e) => (e - t) / Ee,
            (t) => t.getHours(),
          )),
        Fe =
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
        Ue =
          (Fe.range,
          Ie(
            (t) => t.setHours(0, 0, 0, 0),
            (t, e) => t.setDate(t.getDate() + e),
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Pe) /
              ke,
            (t) => t.getDate() - 1,
          )),
        We =
          (Ue.range,
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
      const Ke = qe(0),
        Xe = qe(1),
        Ve = qe(2),
        He = qe(3),
        Je = qe(4),
        Ge = qe(5),
        Ye = qe(6);
      Ke.range, Xe.range, Ve.range, He.range, Je.range, Ge.range, Ye.range;
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
        cr =
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
        ur =
          (cr.range,
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
      ur.every = (t) =>
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
      ur.range;
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
          [Be, 1, Se],
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
        function c(e, r, n) {
          const o = Math.abs(r - e) / n,
            i = y(([, , t]) => t).right(a, o);
          if (i === a.length) return t.every(f(e / _e, r / _e, n));
          if (0 === i) return Ne.every(Math.max(f(e, r, n), 1));
          const [c, u] = a[o / a[i - 1][2] < a[i][2] / o ? i - 1 : i];
          return c.every(u);
        }
        return [
          function (t, e, r) {
            const n = e < t;
            n && ([t, e] = [e, t]);
            const o = r && "function" == typeof r.range ? r : c(t, e, r),
              i = o ? o.range(t, +e + 1) : [];
            return n ? i.reverse() : i;
          },
          c,
        ];
      }
      const [fr, pr] = sr(lr, cr, Qe, $e, Fe, Le),
        [hr, yr] = sr(ur, ar, Ke, Ue, ze, Re);
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
        Ar = /[\\^$*+?|[\]().{}]/g;
      function Sr(t, e, r) {
        var n = t < 0 ? "-" : "",
          o = (n ? -t : t) + "",
          i = o.length;
        return n + (i < r ? new Array(r - i + 1).join(e) + o : o);
      }
      function Pr(t) {
        return t.replace(Ar, "\\$&");
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
      function Fr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 3));
        return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1;
      }
      function Ur(t, e, r) {
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
      function Kr(t, e, r) {
        var n = Or.exec(e.slice(r, r + 6));
        return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
      }
      function Xr(t, e, r) {
        var n = jr.exec(e.slice(r, r + 1));
        return n ? r + n[0].length : -1;
      }
      function Vr(t, e, r) {
        var n = Or.exec(e.slice(r));
        return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
      }
      function Hr(t, e, r) {
        var n = Or.exec(e.slice(r));
        return n ? ((t.s = +n[0]), r + n[0].length) : -1;
      }
      function Jr(t, e) {
        return Sr(t.getDate(), e, 2);
      }
      function Gr(t, e) {
        return Sr(t.getHours(), e, 2);
      }
      function Yr(t, e) {
        return Sr(t.getHours() % 12 || 12, e, 2);
      }
      function Zr(t, e) {
        return Sr(1 + Ue.count(ur(t), t), e, 3);
      }
      function Qr(t, e) {
        return Sr(t.getMilliseconds(), e, 3);
      }
      function tn(t, e) {
        return Qr(t, e) + "000";
      }
      function en(t, e) {
        return Sr(t.getMonth() + 1, e, 2);
      }
      function rn(t, e) {
        return Sr(t.getMinutes(), e, 2);
      }
      function nn(t, e) {
        return Sr(t.getSeconds(), e, 2);
      }
      function on(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function an(t, e) {
        return Sr(Ke.count(ur(t) - 1, t), e, 2);
      }
      function cn(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? Je(t) : Je.ceil(t);
      }
      function un(t, e) {
        return (
          (t = cn(t)), Sr(Je.count(ur(t), t) + (4 === ur(t).getDay()), e, 2)
        );
      }
      function ln(t) {
        return t.getDay();
      }
      function sn(t, e) {
        return Sr(Xe.count(ur(t) - 1, t), e, 2);
      }
      function fn(t, e) {
        return Sr(t.getFullYear() % 100, e, 2);
      }
      function pn(t, e) {
        return Sr((t = cn(t)).getFullYear() % 100, e, 2);
      }
      function hn(t, e) {
        return Sr(t.getFullYear() % 1e4, e, 4);
      }
      function yn(t, e) {
        var r = t.getDay();
        return Sr(
          (t = r >= 4 || 0 === r ? Je(t) : Je.ceil(t)).getFullYear() % 1e4,
          e,
          4,
        );
      }
      function dn(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          Sr((e / 60) | 0, "0", 2) +
          Sr(e % 60, "0", 2)
        );
      }
      function vn(t, e) {
        return Sr(t.getUTCDate(), e, 2);
      }
      function mn(t, e) {
        return Sr(t.getUTCHours(), e, 2);
      }
      function bn(t, e) {
        return Sr(t.getUTCHours() % 12 || 12, e, 2);
      }
      function gn(t, e) {
        return Sr(1 + We.count(lr(t), t), e, 3);
      }
      function xn(t, e) {
        return Sr(t.getUTCMilliseconds(), e, 3);
      }
      function wn(t, e) {
        return xn(t, e) + "000";
      }
      function On(t, e) {
        return Sr(t.getUTCMonth() + 1, e, 2);
      }
      function jn(t, e) {
        return Sr(t.getUTCMinutes(), e, 2);
      }
      function An(t, e) {
        return Sr(t.getUTCSeconds(), e, 2);
      }
      function Sn(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function Pn(t, e) {
        return Sr(Qe.count(lr(t) - 1, t), e, 2);
      }
      function En(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? nr(t) : nr.ceil(t);
      }
      function kn(t, e) {
        return (
          (t = En(t)), Sr(nr.count(lr(t), t) + (4 === lr(t).getUTCDay()), e, 2)
        );
      }
      function Mn(t) {
        return t.getUTCDay();
      }
      function Tn(t, e) {
        return Sr(tr.count(lr(t) - 1, t), e, 2);
      }
      function _n(t, e) {
        return Sr(t.getUTCFullYear() % 100, e, 2);
      }
      function Cn(t, e) {
        return Sr((t = En(t)).getUTCFullYear() % 100, e, 2);
      }
      function Dn(t, e) {
        return Sr(t.getUTCFullYear() % 1e4, e, 4);
      }
      function In(t, e) {
        var r = t.getUTCDay();
        return Sr(
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
      function Fn(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function Un(t, e, r, n, o, i, a, c, u, l) {
        var s = St(),
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
            u(t) < t
              ? h
              : c(t) < t
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
            return arguments.length ? p(Array.from(t, Fn)) : p().map(zn);
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
              t ? p(Xt(r, t)) : s
            );
          }),
          (s.copy = function () {
            return jt(s, Un(t, e, r, n, o, i, a, c, u, l));
          }),
          s
        );
      }
      function Wn() {
        return Et.C.apply(
          Un(hr, yr, ur, ar, Ke, Ue, ze, Re, Be, gr).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments,
        );
      }
      function $n() {
        return Et.C.apply(
          Un(fr, pr, lr, cr, Qe, We, Fe, Le, Be, xr).domain([
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
          c = gt,
          u = !1;
        function l(e) {
          return null == e || isNaN((e = +e))
            ? o
            : c(
                0 === r
                  ? 0.5
                  : ((e = (n(e) - t) * r), u ? Math.max(0, Math.min(1, e)) : e),
              );
        }
        function s(t) {
          return function (e) {
            var r, n;
            return arguments.length
              ? (([r, n] = e), (c = t(r, n)), l)
              : [c(0), c(1)];
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
            return arguments.length ? ((u = !!t), l) : u;
          }),
          (l.interpolator = function (t) {
            return arguments.length ? ((c = t), l) : c;
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
      function Kn(t, e) {
        return e
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function Xn() {
        var t = $t(qn()(gt));
        return (
          (t.copy = function () {
            return Kn(t, Xn());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Vn() {
        var t = Qt(qn()).domain([1, 10]);
        return (
          (t.copy = function () {
            return Kn(t, Vn()).base(t.base());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Hn() {
        var t = ne(qn());
        return (
          (t.copy = function () {
            return Kn(t, Hn()).constant(t.constant());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Jn() {
        var t = le(qn());
        return (
          (t.copy = function () {
            return Kn(t, Jn()).exponent(t.exponent());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function Gn() {
        return Jn.apply(null, arguments).exponent(0.5);
      }
      function Yn() {
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
            return Yn(e).domain(t);
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
          c = 0,
          u = 0.5,
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
              ? (([c, u, l] = a),
                (t = i((c = +c))),
                (e = i((u = +u))),
                (r = i((l = +l))),
                (n = t === e ? 0 : 0.5 / (e - t)),
                (o = e === r ? 0 : 0.5 / (r - e)),
                (s = e < t ? -1 : 1),
                h)
              : [c, u, l];
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
              (t = a(c)),
              (e = a(u)),
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
            return Kn(t, Qn());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function to() {
        var t = Qt(Zn()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return Kn(t, to()).base(t.base());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function eo() {
        var t = ne(Zn());
        return (
          (t.copy = function () {
            return Kn(t, eo()).constant(t.constant());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function ro() {
        var t = le(Zn());
        return (
          (t.copy = function () {
            return Kn(t, ro()).exponent(t.exponent());
          }),
          Et.K.apply(t, arguments)
        );
      }
      function no() {
        return ro.apply(null, arguments).exponent(0.5);
      }
      function oo(t, e) {
        if ((o = t.length) > 1)
          for (var r, n, o, i = 1, a = t[e[0]], c = a.length; i < o; ++i)
            for (n = a, a = t[e[i]], r = 0; r < c; ++r)
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
            c = t.months,
            u = t.shortMonths,
            l = Er(o),
            s = kr(o),
            f = Er(i),
            p = kr(i),
            h = Er(a),
            y = kr(a),
            d = Er(c),
            v = kr(c),
            m = Er(u),
            b = kr(u),
            g = {
              a: function (t) {
                return a[t.getDay()];
              },
              A: function (t) {
                return i[t.getDay()];
              },
              b: function (t) {
                return u[t.getMonth()];
              },
              B: function (t) {
                return c[t.getMonth()];
              },
              c: null,
              d: Jr,
              e: Jr,
              f: tn,
              g: pn,
              G: yn,
              H: Gr,
              I: Yr,
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
              V: un,
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
                return u[t.getUTCMonth()];
              },
              B: function (t) {
                return c[t.getUTCMonth()];
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
              S: An,
              u: Sn,
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
                return A(t, e, r, n);
              },
              d: zr,
              e: zr,
              f: Kr,
              g: Nr,
              G: Ir,
              H: Ur,
              I: Ur,
              j: Fr,
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
              Q: Vr,
              s: Hr,
              S: $r,
              u: Tr,
              U: _r,
              V: Cr,
              w: Mr,
              W: Dr,
              x: function (t, e, n) {
                return A(t, r, e, n);
              },
              X: function (t, e, r) {
                return A(t, n, e, r);
              },
              y: Nr,
              Y: Ir,
              Z: Br,
              "%": Xr,
            };
          function O(t, e) {
            return function (r) {
              var n,
                o,
                i,
                a = [],
                c = -1,
                u = 0,
                l = t.length;
              for (r instanceof Date || (r = new Date(+r)); ++c < l; )
                37 === t.charCodeAt(c) &&
                  (a.push(t.slice(u, c)),
                  null != (o = wr[(n = t.charAt(++c))])
                    ? (n = t.charAt(++c))
                    : (o = "e" === n ? " " : "0"),
                  (i = e[n]) && (n = i(r, o)),
                  a.push(n),
                  (u = c + 1));
              return a.push(t.slice(u, c)), a.join("");
            };
          }
          function j(t, e) {
            return function (r) {
              var n,
                o,
                i = mr(1900, void 0, 1);
              if (A(i, t, (r += ""), 0) != r.length) return null;
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
                      (n = o > 4 || 0 === o ? Xe.ceil(n) : Xe(n)),
                      (n = Ue.offset(n, 7 * (i.V - 1))),
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
          function A(t, e, r, n) {
            for (var o, i, a = 0, c = e.length, u = r.length; a < c; ) {
              if (n >= u) return -1;
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
      function co(t) {
        for (var e = t.length, r = new Array(e); --e >= 0; ) r[e] = e;
        return r;
      }
      function uo(t, e) {
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
        Ao = r.n(jo),
        So = r(27367),
        Po = r.n(So),
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
        Fo = function (t) {
          return function e() {
            return 0 === arguments.length ||
              (1 === arguments.length &&
                zo(arguments.length <= 0 ? void 0 : arguments[0]))
              ? e
              : t.apply(void 0, arguments);
          };
        },
        Uo = function t(e, r) {
          return 1 === e
            ? r
            : Fo(function () {
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
                      Fo(function () {
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
          return Uo(t.length, t);
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
        Ko = function () {
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
        Xo = function (t) {
          return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
        },
        Vo = function (t) {
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
      const Ho = {
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
      function Jo(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Zo(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          Yo(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Go(t, e) {
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
                var a, c = t[Symbol.iterator]();
                !(n = (a = c.next()).done) &&
                (r.push(a.value), !e || r.length !== e);
                n = !0
              );
            } catch (t) {
              (o = !0), (i = t);
            } finally {
              try {
                n || null == c.return || c.return();
              } finally {
                if (o) throw i;
              }
            }
            return r;
          })(t, e) ||
          Yo(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Yo(t, e) {
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
        var e = Go(t, 2),
          r = e[0],
          n = e[1],
          o = r,
          i = n;
        return r > n && ((o = n), (i = r)), [o, i];
      }
      function ti(t, e, r) {
        if (t.lte(0)) return new (Io())(0);
        var n = Ho.getDigitCount(t.toNumber()),
          o = new (Io())(10).pow(n),
          i = t.div(o),
          a = 1 !== n ? 0.05 : 0.1,
          c = new (Io())(Math.ceil(i.div(a).toNumber())).add(r).mul(a).mul(o);
        return e ? c : new (Io())(Math.ceil(c));
      }
      function ei(t, e, r) {
        var n = 1,
          o = new (Io())(t);
        if (!o.isint() && r) {
          var i = Math.abs(t);
          i < 1
            ? ((n = new (Io())(10).pow(Ho.getDigitCount(t) - 1)),
              (o = new (Io())(Math.floor(o.div(n).toNumber())).mul(n)))
            : i > 1 && (o = new (Io())(Math.floor(t)));
        } else
          0 === t
            ? (o = new (Io())(Math.floor((e - 1) / 2)))
            : r || (o = new (Io())(Math.floor(t)));
        var a = Math.floor((e - 1) / 2);
        return Ko(
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
        var c = Math.ceil(i.sub(t).div(a).toNumber()),
          u = Math.ceil(new (Io())(e).sub(i).div(a).toNumber()),
          l = c + u + 1;
        return l > r
          ? ri(t, e, r, n, o + 1)
          : (l < r &&
              ((u = e > 0 ? u + (r - l) : u), (c = e > 0 ? c : c + (r - l))),
            {
              step: a,
              tickMin: i.sub(new (Io())(c).mul(a)),
              tickMax: i.add(new (Io())(u).mul(a)),
            });
      }
      var ni = Vo(function (t) {
          var e = Go(t, 2),
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
            c = Go(Qo([r, n]), 2),
            u = c[0],
            l = c[1];
          if (u === -1 / 0 || l === 1 / 0) {
            var s =
              l === 1 / 0
                ? [u].concat(
                    Jo(
                      $o(0, o - 1).map(function () {
                        return 1 / 0;
                      }),
                    ),
                  )
                : [].concat(
                    Jo(
                      $o(0, o - 1).map(function () {
                        return -1 / 0;
                      }),
                    ),
                    [l],
                  );
            return r > n ? Xo(s) : s;
          }
          if (u === l) return ei(u, o, i);
          var f = ri(u, l, a, i),
            p = f.step,
            h = f.tickMin,
            y = f.tickMax,
            d = Ho.rangeStep(h, y.add(new (Io())(0.1).mul(p)), p);
          return r > n ? Xo(d) : d;
        }),
        oi =
          (Vo(function (t) {
            var e = Go(t, 2),
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
              c = Go(Qo([r, n]), 2),
              u = c[0],
              l = c[1];
            if (u === -1 / 0 || l === 1 / 0) return [r, n];
            if (u === l) return ei(u, o, i);
            var s = ti(new (Io())(l).sub(u).div(a - 1), i, 0),
              f = Ko(
                qo(function (t) {
                  return new (Io())(u).add(new (Io())(t).mul(s)).toNumber();
                }),
                $o,
              )(0, a).filter(function (t) {
                return t >= u && t <= l;
              });
            return r > n ? Xo(f) : f;
          }),
          Vo(function (t, e) {
            var r = Go(t, 2),
              n = r[0],
              o = r[1],
              i =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              a = Go(Qo([n, o]), 2),
              c = a[0],
              u = a[1];
            if (c === -1 / 0 || u === 1 / 0) return [n, o];
            if (c === u) return [c];
            var l = Math.max(e, 2),
              s = ti(new (Io())(u).sub(c).div(l - 1), i, 0),
              f = [].concat(
                Jo(
                  Ho.rangeStep(
                    new (Io())(c),
                    new (Io())(u).sub(new (Io())(0.99).mul(s)),
                    s,
                  ),
                ),
                [u],
              );
            return n > o ? Xo(f) : f;
          })),
        ii = r(10800),
        ai = r(96714),
        ci = r(93563),
        ui = r(11766);
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
        var o = Ao()(t, function (t) {
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
            for (var c = o.range, u = 0; u < a; u++) {
              var l = u > 0 ? n[u - 1].coordinate : n[a - 1].coordinate,
                s = n[u].coordinate,
                f = u >= a - 1 ? n[0].coordinate : n[u + 1].coordinate,
                p = void 0;
              if ((0, ai.sA)(s - l) !== (0, ai.sA)(f - s)) {
                var h = [];
                if ((0, ai.sA)(f - s) === (0, ai.sA)(c[1] - c[0])) {
                  p = f;
                  var y = s + c[1] - c[0];
                  (h[0] = Math.min(y, (y + l) / 2)),
                    (h[1] = Math.max(y, (y + l) / 2));
                } else {
                  p = l;
                  var d = f + c[1] - c[0];
                  (h[0] = Math.min(s, (d + s) / 2)),
                    (h[1] = Math.max(s, (d + s) / 2));
                }
                var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
                if ((t > v[0] && t <= v[1]) || (t >= h[0] && t <= h[1])) {
                  i = n[u].index;
                  break;
                }
              } else {
                var m = Math.min(l, f),
                  b = Math.max(l, f);
                if (t > (m + s) / 2 && t <= (b + s) / 2) {
                  i = n[u].index;
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
          for (var i = {}, a = Object.keys(o), c = 0, u = a.length; c < u; c++)
            for (
              var l = o[a[c]].stackGroups,
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
                  return (0, ci.Mn)(t.type).indexOf("Bar") >= 0;
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
            c = i.length;
          if (c < 1) return null;
          var u,
            l = (0, ai.F4)(e, n, 0, !0),
            s = [];
          if (i[0].barSize === +i[0].barSize) {
            var f = !1,
              p = n / c,
              h = i.reduce(function (t, e) {
                return t + e.barSize || 0;
              }, 0);
            (h += (c - 1) * l) >= n && ((h -= (c - 1) * l), (l = 0)),
              h >= n && p > 0 && ((f = !0), (h = c * (p *= 0.9)));
            var y = { offset: (((n - h) / 2) | 0) - l, size: 0 };
            u = i.reduce(function (t, e) {
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
            n - 2 * d - (c - 1) * l <= 0 && (l = 0);
            var v = (n - 2 * d - (c - 1) * l) / c;
            v > 1 && (v >>= 0);
            var m = a === +a ? Math.min(v, a) : v;
            u = i.reduce(function (t, e, r) {
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
          return u;
        },
        wi = function (t, e, r, n) {
          var o = r.children,
            i = r.width,
            a = r.margin,
            c = i - (a.left || 0) - (a.right || 0),
            u = (0, ui.g)({ children: o, legendWidth: c });
          if (u) {
            var l = n || {},
              s = l.width,
              f = l.height,
              p = u.align,
              h = u.verticalAlign,
              y = u.layout;
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
            a = (0, ci.aS)(i, ii.u).filter(function (t) {
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
            var c = a.map(function (t) {
              return t.props.dataKey;
            });
            return t.reduce(
              function (t, e) {
                var n = di(e, r);
                if (vo()(n)) return t;
                var o = Array.isArray(n) ? [ho()(n), fo()(n)] : [n, n],
                  i = c.reduce(
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
        Ai = function (t, e, r, n, o) {
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
        Si = function (t, e) {
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
            c = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
            u =
              (e || r) && "category" === i && n.bandwidth
                ? n.bandwidth() / c
                : 0;
          return (
            (u =
              "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2
                ? 2 * (0, ai.sA)(a[0] - a[1]) * u
                : u),
            e && (t.ticks || t.niceTicks)
              ? (t.ticks || t.niceTicks)
                  .map(function (t) {
                    var e = o ? o.indexOf(t) : t;
                    return { coordinate: n(e) + u, value: t, offset: u };
                  })
                  .filter(function (t) {
                    return !Po()(t.coordinate);
                  })
              : t.isCategorical && t.categoricalDomain
                ? t.categoricalDomain.map(function (t, e) {
                    return {
                      coordinate: n(t) + u,
                      value: t,
                      index: e,
                      offset: u,
                    };
                  })
                : n.ticks && !r
                  ? n.ticks(t.tickCount).map(function (t) {
                      return { coordinate: n(t) + u, value: t, offset: u };
                    })
                  : n.domain().map(function (t, e) {
                      return {
                        coordinate: n(t) + u,
                        value: o ? o[t] : t,
                        index: e,
                        offset: u,
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
            c = t.layout,
            u = t.axisType;
          if ("auto" === i)
            return "radial" === c && "radiusAxis" === u
              ? { scale: o.A(), realScaleType: "band" }
              : "radial" === c && "angleAxis" === u
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
              c = t(e[r - 1]);
            (a < o || a > i || c < o || c > i) && t.domain([e[0], e[r - 1]]);
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
                  var c = Po()(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                  c >= 0
                    ? ((t[a][r][0] = o), (t[a][r][1] = o + c), (o = t[a][r][1]))
                    : ((t[a][r][0] = i),
                      (t[a][r][1] = i + c),
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
                for (var a = 0, c = 0; a < r; ++a) c += t[a][n][1] || 0;
                o[n][1] += o[n][0] = -c / 2;
              }
              oo(t, e);
            }
          },
          wiggle: function (t, e) {
            if ((o = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
              for (var r, n, o, i = 0, a = 1; a < n; ++a) {
                for (var c = 0, u = 0, l = 0; c < o; ++c) {
                  for (
                    var s = t[e[c]],
                      f = s[a][1] || 0,
                      p = (f - (s[a - 1][1] || 0)) / 2,
                      h = 0;
                    h < c;
                    ++h
                  ) {
                    var y = t[e[h]];
                    p += (y[a][1] || 0) - (y[a - 1][1] || 0);
                  }
                  (u += f), (l += p * f);
                }
                (r[a - 1][1] += r[a - 1][0] = i), u && (i -= l / u);
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
                e = co,
                r = oo,
                n = uo;
              function o(o) {
                var i,
                  a,
                  c = Array.from(t.apply(this, arguments), lo),
                  u = c.length,
                  l = -1;
                for (const t of o)
                  for (i = 0, ++l; i < u; ++i)
                    (c[i][l] = [0, +n(t, c[i].key, l, o)]).data = t;
                for (i = 0, a = (0, io.A)(e(c)); i < u; ++i) c[a[i]].index = i;
                return r(c, a), c;
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
                          ? co
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
              .order(co)
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
            var c = i[r],
              u = t[c] || { hasStack: !1, stackGroups: {} };
            if ((0, ai.vh)(a)) {
              var l = u.stackGroups[a] || {
                numericAxisId: r,
                cateAxisId: n,
                items: [],
              };
              l.items.push(e), (u.hasStack = !0), (u.stackGroups[a] = l);
            } else
              u.stackGroups[(0, ai.NF)("_stackId_")] = {
                numericAxisId: r,
                cateAxisId: n,
                items: [e],
              };
            return hi(hi({}, t), {}, yi({}, c, u));
          }, {});
          return Object.keys(a).reduce(function (e, i) {
            var c = a[i];
            if (c.hasStack) {
              c.stackGroups = Object.keys(c.stackGroups).reduce(function (
                e,
                i,
              ) {
                var a = c.stackGroups[i];
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
            return hi(hi({}, e), {}, yi({}, i, c));
          }, {});
        },
        Li = function (t, e) {
          var r = e.realScaleType,
            n = e.type,
            o = e.tickCount,
            i = e.originalDomain,
            a = e.allowDecimals,
            c = r || e.scale;
          if ("auto" !== c && "linear" !== c) return null;
          if (
            o &&
            "number" === n &&
            i &&
            ("auto" === i[0] || "auto" === i[1])
          ) {
            var u = t.domain();
            if (!u.length) return null;
            var l = ni(u, o, a);
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
            var c = (0, ai.eP)(r, "value", o[e.dataKey]);
            if (c) return c.coordinate + n / 2;
          }
          return r[i] ? r[i].coordinate + n / 2 : null;
        }
        var u = di(o, vo()(a) ? e.dataKey : a);
        return vo()(u) ? null : e.scale(u);
      }
      var Fi = function (t) {
          var e = t.axis,
            r = t.ticks,
            n = t.offset,
            o = t.bandSize,
            i = t.entry,
            a = t.index;
          if ("category" === e.type) return r[a] ? r[a].coordinate + n : null;
          var c = di(i, e.dataKey, e.domain[a]);
          return vo()(c) ? null : e.scale(c) - o / 2 + n;
        },
        Ui = function (t) {
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
        Ki = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        Xi = function (t, e, r) {
          if (bo()(t)) return t(e, r);
          if (!Array.isArray(t)) return e;
          var n = [];
          if ((0, ai.Et)(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
          else if (qi.test(t[0])) {
            var o = +qi.exec(t[0])[1];
            n[0] = e[0] - o;
          } else bo()(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
          if ((0, ai.Et)(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
          else if (Ki.test(t[1])) {
            var i = +Ki.exec(t[1])[1];
            n[1] = e[1] + i;
          } else bo()(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
          return n;
        },
        Vi = function (t, e, r) {
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
                c = o.length;
              a < c;
              a++
            ) {
              var u = o[a],
                l = o[a - 1];
              i = Math.min((u.coordinate || 0) - (l.coordinate || 0), i);
            }
            return i === 1 / 0 ? 0 : i;
          }
          return r ? void 0 : 0;
        },
        Hi = function (t, e, r) {
          return t && t.length
            ? To()(t, Oo()(r, "type.defaultProps.domain"))
              ? e
              : t
            : e;
        },
        Ji = function (t, e) {
          var r = t.type.defaultProps
              ? hi(hi({}, t.type.defaultProps), t.props)
              : t.props,
            n = r.dataKey,
            o = r.name,
            i = r.unit,
            a = r.formatter,
            c = r.tooltipType,
            u = r.chartType,
            l = r.hide;
          return hi(
            hi({}, (0, ci.J9)(t, !1)),
            {},
            {
              dataKey: n,
              unit: i,
              formatter: a,
              name: o || n,
              color: bi(t),
              value: di(e, n),
              type: c,
              payload: e,
              chartType: u,
              hide: l,
            },
          );
        };
    },
    15654: (t, e, r) => {
      "use strict";
      r.d(e, { A3: () => p, Pu: () => f });
      var n = r(59640);
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
                c(t, e, r[e]);
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
      function c(t, e, r) {
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
      var u = { widthCache: {}, cacheCount: 0 },
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
          if (u.widthCache[i]) return u.widthCache[i];
          try {
            var c = document.getElementById(s);
            c ||
              ((c = document.createElement("span")).setAttribute("id", s),
              c.setAttribute("aria-hidden", "true"),
              document.body.appendChild(c));
            var f = a(a({}, l), o);
            Object.assign(c.style, f), (c.textContent = "".concat(t));
            var p = c.getBoundingClientRect(),
              h = { width: p.width, height: p.height };
            return (
              (u.widthCache[i] = h),
              ++u.cacheCount > 2e3 && ((u.cacheCount = 0), (u.widthCache = {})),
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
    96714: (t, e, r) => {
      "use strict";
      r.d(e, {
        CG: () => O,
        Dj: () => j,
        Et: () => d,
        F4: () => x,
        NF: () => g,
        _3: () => y,
        ck: () => P,
        eP: () => A,
        jG: () => S,
        lX: () => w,
        sA: () => h,
        uy: () => v,
        vh: () => m,
      });
      var n = r(77837),
        o = r.n(n),
        i = r(27367),
        a = r.n(i),
        c = r(52686),
        u = r.n(c),
        l = r(2017),
        s = r.n(l),
        f = r(64609),
        p = r.n(f),
        h = function (t) {
          return 0 === t ? 0 : t > 0 ? 1 : -1;
        },
        y = function (t) {
          return o()(t) && t.indexOf("%") === t.length - 1;
        },
        d = function (t) {
          return s()(t) && !a()(t);
        },
        v = function (t) {
          return p()(t);
        },
        m = function (t) {
          return d(t) || o()(t);
        },
        b = 0,
        g = function (t) {
          var e = ++b;
          return "".concat(t || "").concat(e);
        },
        x = function (t, e) {
          var r,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!d(t) && !o()(t)) return n;
          if (y(t)) {
            var c = t.indexOf("%");
            r = (e * parseFloat(t.slice(0, c))) / 100;
          } else r = +t;
          return a()(r) && (r = n), i && r > e && (r = e), r;
        },
        w = function (t) {
          if (!t) return null;
          var e = Object.keys(t);
          return e && e.length ? t[e[0]] : null;
        },
        O = function (t) {
          if (!Array.isArray(t)) return !1;
          for (var e = t.length, r = {}, n = 0; n < e; n++) {
            if (r[t[n]]) return !0;
            r[t[n]] = !0;
          }
          return !1;
        },
        j = function (t, e) {
          return d(t) && d(e)
            ? function (r) {
                return t + r * (e - t);
              }
            : function () {
                return e;
              };
        };
      function A(t, e, r) {
        return t && t.length
          ? t.find(function (t) {
              return t && ("function" == typeof e ? e(t) : u()(t, e)) === r;
            })
          : null;
      }
      var S = function (t) {
          if (!t || !t.length) return null;
          for (
            var e = t.length,
              r = 0,
              n = 0,
              o = 0,
              i = 0,
              a = 1 / 0,
              c = -1 / 0,
              u = 0,
              l = 0,
              s = 0;
            s < e;
            s++
          )
            (r += u = t[s].cx || 0),
              (n += l = t[s].cy || 0),
              (o += u * l),
              (i += u * u),
              (a = Math.min(a, u)),
              (c = Math.max(c, u));
          var f = e * i !== r * r ? (e * o - r * n) / (e * i - r * r) : 0;
          return { xmin: a, xmax: c, a: f, b: (n - f * r) / e };
        },
        P = function (t, e) {
          return d(t) && d(e)
            ? t - e
            : o()(t) && o()(e)
              ? t.localeCompare(e)
              : t instanceof Date && e instanceof Date
                ? t.getTime() - e.getTime()
                : String(t).localeCompare(String(e));
        };
    },
    59640: (t, e, r) => {
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
    27664: (t, e, r) => {
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
    90134: (t, e, r) => {
      "use strict";
      r.d(e, {
        IZ: () => b,
        Kg: () => v,
        Zk: () => A,
        lY: () => g,
        pr: () => x,
        yy: () => j,
      });
      var n = r(64609),
        o = r.n(n),
        i = r(90626),
        a = r(3316),
        c = r.n(a),
        u = r(96714),
        l = r(61195);
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
                c = [],
                u = !0,
                l = !1;
              try {
                if (((i = (r = r.call(t)).next), 0 === e)) {
                  if (Object(r) !== r) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (n = i.call(r)).done) &&
                    (c.push(n.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                (l = !0), (o = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return c;
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
            c = t.height,
            s = t.startAngle,
            f = t.endAngle,
            d = (0, u.F4)(t.cx, a, a / 2),
            v = (0, u.F4)(t.cy, c, c / 2),
            m = g(a, c, r),
            b = (0, u.F4)(t.innerRadius, m, 0),
            x = (0, u.F4)(t.outerRadius, m, 0.8 * m);
          return Object.keys(e).reduce(function (t, r) {
            var a,
              c = e[r],
              u = c.domain,
              m = c.reversed;
            if (o()(c.range))
              "angleAxis" === n
                ? (a = [s, f])
                : "radiusAxis" === n && (a = [b, x]),
                m && (a = [a[1], a[0]]);
            else {
              var g = y((a = c.range), 2);
              (s = g[0]), (f = g[1]);
            }
            var w = (0, l.W7)(c, i),
              O = w.realScaleType,
              j = w.scale;
            j.domain(u).range(a), (0, l.YB)(j);
            var A = (0, l.w7)(j, p(p({}, c), {}, { realScaleType: O })),
              S = p(
                p(p({}, c), A),
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
            return p(p({}, t), {}, h({}, r, S));
          }, {});
        },
        w = function (t, e) {
          var r,
            n,
            o,
            i,
            a,
            c,
            u = t.x,
            l = t.y,
            s = e.cx,
            f = e.cy,
            p =
              ((n = { x: s, y: f }),
              (o = (r = { x: u, y: l }).x),
              (i = r.y),
              (a = n.x),
              (c = n.y),
              Math.sqrt(Math.pow(o - a, 2) + Math.pow(i - c, 2)));
          if (p <= 0) return { radius: p };
          var h = (u - s) / p,
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
            c = e.innerRadius,
            u = e.outerRadius;
          if (i < c || i > u) return !1;
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
        A = function (t) {
          return (0, i.isValidElement)(t) || c()(t) || "boolean" == typeof t
            ? ""
            : t.className;
        };
    },
    93563: (t, e, r) => {
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
        c = r(77837),
        u = r.n(c),
        l = r(3316),
        s = r.n(l),
        f = r(97827),
        p = r.n(f),
        h = r(90626),
        y = r(98193),
        d = r(96714),
        v = r(80103),
        m = r(43998),
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
        A = null,
        S = null,
        P = function t(e) {
          if (e === A && Array.isArray(S)) return S;
          var r = [];
          return (
            h.Children.forEach(e, function (e) {
              a()(e) ||
                ((0, y.isFragment)(e)
                  ? (r = r.concat(t(e.props.children)))
                  : r.push(e));
            }),
            (S = r),
            (A = e),
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
          return t && t.type && u()(t.type) && T.indexOf(t.type) >= 0;
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
                  e.startsWith("data-") ||
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
              c = i.children,
              u = x(i, g);
            return n && c
              ? (0, v.b)(o, u) && I(n, c)
              : !n && !c && (0, v.b)(o, u);
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
                  c = a.handler,
                  u = a.once;
                if (c && (!u || !n[i])) {
                  var l = c(t, i, o);
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
    80103: (t, e, r) => {
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
    11766: (t, e, r) => {
      "use strict";
      r.d(e, { g: () => s });
      var n = r(75620),
        o = r(61195),
        i = r(93563);
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
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(r), !0).forEach(function (e) {
                l(t, e, r[e]);
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
          c = t.legendContent,
          l = (0, i.BU)(e, n.s);
        if (!l) return null;
        var s,
          f = n.s.defaultProps,
          p = void 0 !== f ? u(u({}, f), l.props) : {};
        return (
          (s =
            l.props && l.props.payload
              ? l.props && l.props.payload
              : "children" === c
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
                      n = void 0 !== r ? u(u({}, r), e.props) : {},
                      i = n.dataKey,
                      a = n.name,
                      c = n.legendType;
                    return {
                      inactive: n.hide,
                      dataKey: i,
                      type: p.iconType || c || "square",
                      color: (0, o.Ps)(e),
                      value: a || i,
                      payload: n,
                    };
                  })),
          u(u(u({}, p), n.s.getWithHeight(l, a)), {}, { payload: s, item: l })
        );
      };
    },
    43149: (t, e, r) => {
      "use strict";
      r.d(e, { s: () => c });
      var n = r(17744),
        o = r.n(n),
        i = r(3316),
        a = r.n(i);
      function c(t, e, r) {
        return !0 === e ? o()(t, r) : a()(e) ? o()(t, e) : t;
      }
    },
    43998: (t, e, r) => {
      "use strict";
      r.d(e, {
        QQ: () => c,
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
      var c = [
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
        u = ["points", "pathLength"],
        l = { svg: ["viewBox", "children"], polygon: u, polyline: u },
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
    28583: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => i, z: () => c });
      var n = r(34777),
        o = r(97458);
      function i() {
        var t,
          e,
          r = (0, o.A)().unknown(void 0),
          a = r.domain,
          c = r.range,
          u = 0,
          l = 1,
          s = !1,
          f = 0,
          p = 0,
          h = 0.5;
        function y() {
          var r = a().length,
            n = l < u,
            o = n ? l : u,
            i = n ? u : l;
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
          return c(n ? y.reverse() : y);
        }
        return (
          delete r.unknown,
          (r.domain = function (t) {
            return arguments.length ? (a(t), y()) : a();
          }),
          (r.range = function (t) {
            return arguments.length
              ? (([u, l] = t), (u = +u), (l = +l), y())
              : [u, l];
          }),
          (r.rangeRound = function (t) {
            return ([u, l] = t), (u = +u), (l = +l), (s = !0), y();
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
            return i(a(), [u, l])
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
      function c() {
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
        constructor(t, e = c) {
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
      function c(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t;
      }
      var u = r(34777);
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
          u.C.apply(i, arguments),
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
      function c(t) {
        this._ += t[0];
        for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e];
      }
      class u {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == t
                ? c
                : (function (t) {
                    let e = Math.floor(t);
                    if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
                    if (e > 15) return c;
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
          let c = this._x1,
            u = this._y1,
            l = r - t,
            s = o - e,
            f = c - t,
            p = u - e,
            h = f * f + p * p;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
          else if (h > i)
            if (Math.abs(p * l - s * f) > i && a) {
              let y = r - c,
                d = o - u,
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
        arc(t, e, r, c, u, l) {
          if (((t = +t), (e = +e), (l = !!l), (r = +r) < 0))
            throw new Error(`negative radius: ${r}`);
          let s = r * Math.cos(c),
            f = r * Math.sin(c),
            p = t + s,
            h = e + f,
            y = 1 ^ l,
            d = l ? c - u : u - c;
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
                    ._append`A${r},${r},0,${+(d >= n)},${y},${(this._x1 = t + r * Math.cos(u))},${(this._y1 = e + r * Math.sin(u))}`);
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
          () => new u(e)
        );
      }
      u.prototype;
    },
    34164: (t, e, r) => {
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
  },
]);

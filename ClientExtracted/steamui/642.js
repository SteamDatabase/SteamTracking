/* Third-party software licenses can be found at licenses.txt */
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [642],
  {
    97590: (e, t, r) => {
      "use strict";
      var i;
      r.d(t, { Z: () => A });
      function n(e, t, r) {
        null != e &&
          ("number" == typeof e
            ? this.fromNumber(e, t, r)
            : null == t && "string" != typeof e
            ? this.fromString(e, 256)
            : this.fromString(e, t));
      }
      function s() {
        return new n(null);
      }
      "Microsoft Internet Explorer" == navigator.appName
        ? ((n.prototype.am = function (e, t, r, i, n, s) {
            for (var a = 32767 & t, o = t >> 15; --s >= 0; ) {
              var u = 32767 & this[e],
                c = this[e++] >> 15,
                l = o * u + c * a;
              (n =
                ((u = a * u + ((32767 & l) << 15) + r[i] + (1073741823 & n)) >>>
                  30) +
                (l >>> 15) +
                o * c +
                (n >>> 30)),
                (r[i++] = 1073741823 & u);
            }
            return n;
          }),
          (i = 30))
        : "Netscape" != navigator.appName
        ? ((n.prototype.am = function (e, t, r, i, n, s) {
            for (; --s >= 0; ) {
              var a = t * this[e++] + r[i] + n;
              (n = Math.floor(a / 67108864)), (r[i++] = 67108863 & a);
            }
            return n;
          }),
          (i = 26))
        : ((n.prototype.am = function (e, t, r, i, n, s) {
            for (var a = 16383 & t, o = t >> 14; --s >= 0; ) {
              var u = 16383 & this[e],
                c = this[e++] >> 14,
                l = o * u + c * a;
              (n =
                ((u = a * u + ((16383 & l) << 14) + r[i] + n) >> 28) +
                (l >> 14) +
                o * c),
                (r[i++] = 268435455 & u);
            }
            return n;
          }),
          (i = 28)),
        (n.prototype.DB = i),
        (n.prototype.DM = (1 << i) - 1),
        (n.prototype.DV = 1 << i);
      (n.prototype.FV = Math.pow(2, 52)),
        (n.prototype.F1 = 52 - i),
        (n.prototype.F2 = 2 * i - 52);
      var a,
        o,
        u = new Array();
      for (a = "0".charCodeAt(0), o = 0; o <= 9; ++o) u[a++] = o;
      for (a = "a".charCodeAt(0), o = 10; o < 36; ++o) u[a++] = o;
      for (a = "A".charCodeAt(0), o = 10; o < 36; ++o) u[a++] = o;
      function c(e) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e);
      }
      function l(e, t) {
        var r = u[e.charCodeAt(t)];
        return null == r ? -1 : r;
      }
      function h(e) {
        var t = s();
        return t.fromInt(e), t;
      }
      function m(e) {
        var t,
          r = 1;
        return (
          0 != (t = e >>> 16) && ((e = t), (r += 16)),
          0 != (t = e >> 8) && ((e = t), (r += 8)),
          0 != (t = e >> 4) && ((e = t), (r += 4)),
          0 != (t = e >> 2) && ((e = t), (r += 2)),
          0 != (t = e >> 1) && ((e = t), (r += 1)),
          r
        );
      }
      function d(e) {
        this.m = e;
      }
      function f(e) {
        (this.m = e),
          (this.mp = e.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (e.DB - 15)) - 1),
          (this.mt2 = 2 * e.t);
      }
      function b(e, t) {
        return e & t;
      }
      function p(e, t) {
        return e | t;
      }
      function y(e, t) {
        return e ^ t;
      }
      function B(e, t) {
        return e & ~t;
      }
      function g(e) {
        if (0 == e) return -1;
        var t = 0;
        return (
          0 == (65535 & e) && ((e >>= 16), (t += 16)),
          0 == (255 & e) && ((e >>= 8), (t += 8)),
          0 == (15 & e) && ((e >>= 4), (t += 4)),
          0 == (3 & e) && ((e >>= 2), (t += 2)),
          0 == (1 & e) && ++t,
          t
        );
      }
      function _(e) {
        for (var t = 0; 0 != e; ) (e &= e - 1), ++t;
        return t;
      }
      function w() {}
      function S(e) {
        return e;
      }
      function v(e) {
        (this.r2 = s()),
          (this.q3 = s()),
          n.ONE.dlShiftTo(2 * e.t, this.r2),
          (this.mu = this.r2.divide(e)),
          (this.m = e);
      }
      (d.prototype.convert = function (e) {
        return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
      }),
        (d.prototype.revert = function (e) {
          return e;
        }),
        (d.prototype.reduce = function (e) {
          e.divRemTo(this.m, null, e);
        }),
        (d.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (d.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (f.prototype.convert = function (e) {
          var t = s();
          return (
            e.abs().dlShiftTo(this.m.t, t),
            t.divRemTo(this.m, null, t),
            e.s < 0 && t.compareTo(n.ZERO) > 0 && this.m.subTo(t, t),
            t
          );
        }),
        (f.prototype.revert = function (e) {
          var t = s();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (f.prototype.reduce = function (e) {
          for (; e.t <= this.mt2; ) e[e.t++] = 0;
          for (var t = 0; t < this.m.t; ++t) {
            var r = 32767 & e[t],
              i =
                (r * this.mpl +
                  (((r * this.mph + (e[t] >> 15) * this.mpl) & this.um) <<
                    15)) &
                e.DM;
            for (
              e[(r = t + this.m.t)] += this.m.am(0, i, e, t, 0, this.m.t);
              e[r] >= e.DV;

            )
              (e[r] -= e.DV), e[++r]++;
          }
          e.clamp(),
            e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
        }),
        (f.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (f.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        }),
        (n.prototype.copyTo = function (e) {
          for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
          (e.t = this.t), (e.s = this.s);
        }),
        (n.prototype.fromInt = function (e) {
          (this.t = 1),
            (this.s = e < 0 ? -1 : 0),
            e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + DV) : (this.t = 0);
        }),
        (n.prototype.fromString = function (e, t) {
          var r;
          if (16 == t) r = 4;
          else if (8 == t) r = 3;
          else if (256 == t) r = 8;
          else if (2 == t) r = 1;
          else if (32 == t) r = 5;
          else {
            if (4 != t) return void this.fromRadix(e, t);
            r = 2;
          }
          (this.t = 0), (this.s = 0);
          for (var i = e.length, s = !1, a = 0; --i >= 0; ) {
            var o = 8 == r ? 255 & e[i] : l(e, i);
            o < 0
              ? "-" == e.charAt(i) && (s = !0)
              : ((s = !1),
                0 == a
                  ? (this[this.t++] = o)
                  : a + r > this.DB
                  ? ((this[this.t - 1] |=
                      (o & ((1 << (this.DB - a)) - 1)) << a),
                    (this[this.t++] = o >> (this.DB - a)))
                  : (this[this.t - 1] |= o << a),
                (a += r) >= this.DB && (a -= this.DB));
          }
          8 == r &&
            0 != (128 & e[0]) &&
            ((this.s = -1),
            a > 0 && (this[this.t - 1] |= ((1 << (this.DB - a)) - 1) << a)),
            this.clamp(),
            s && n.ZERO.subTo(this, this);
        }),
        (n.prototype.clamp = function () {
          for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
            --this.t;
        }),
        (n.prototype.dlShiftTo = function (e, t) {
          var r;
          for (r = this.t - 1; r >= 0; --r) t[r + e] = this[r];
          for (r = e - 1; r >= 0; --r) t[r] = 0;
          (t.t = this.t + e), (t.s = this.s);
        }),
        (n.prototype.drShiftTo = function (e, t) {
          for (var r = e; r < this.t; ++r) t[r - e] = this[r];
          (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
        }),
        (n.prototype.lShiftTo = function (e, t) {
          var r,
            i = e % this.DB,
            n = this.DB - i,
            s = (1 << n) - 1,
            a = Math.floor(e / this.DB),
            o = (this.s << i) & this.DM;
          for (r = this.t - 1; r >= 0; --r)
            (t[r + a + 1] = (this[r] >> n) | o), (o = (this[r] & s) << i);
          for (r = a - 1; r >= 0; --r) t[r] = 0;
          (t[a] = o), (t.t = this.t + a + 1), (t.s = this.s), t.clamp();
        }),
        (n.prototype.rShiftTo = function (e, t) {
          t.s = this.s;
          var r = Math.floor(e / this.DB);
          if (r >= this.t) t.t = 0;
          else {
            var i = e % this.DB,
              n = this.DB - i,
              s = (1 << i) - 1;
            t[0] = this[r] >> i;
            for (var a = r + 1; a < this.t; ++a)
              (t[a - r - 1] |= (this[a] & s) << n), (t[a - r] = this[a] >> i);
            i > 0 && (t[this.t - r - 1] |= (this.s & s) << n),
              (t.t = this.t - r),
              t.clamp();
          }
        }),
        (n.prototype.subTo = function (e, t) {
          for (var r = 0, i = 0, n = Math.min(e.t, this.t); r < n; )
            (i += this[r] - e[r]), (t[r++] = i & this.DM), (i >>= this.DB);
          if (e.t < this.t) {
            for (i -= e.s; r < this.t; )
              (i += this[r]), (t[r++] = i & this.DM), (i >>= this.DB);
            i += this.s;
          } else {
            for (i += this.s; r < e.t; )
              (i -= e[r]), (t[r++] = i & this.DM), (i >>= this.DB);
            i -= e.s;
          }
          (t.s = i < 0 ? -1 : 0),
            i < -1 ? (t[r++] = this.DV + i) : i > 0 && (t[r++] = i),
            (t.t = r),
            t.clamp();
        }),
        (n.prototype.multiplyTo = function (e, t) {
          var r = this.abs(),
            i = e.abs(),
            s = r.t;
          for (t.t = s + i.t; --s >= 0; ) t[s] = 0;
          for (s = 0; s < i.t; ++s) t[s + r.t] = r.am(0, i[s], t, s, 0, r.t);
          (t.s = 0), t.clamp(), this.s != e.s && n.ZERO.subTo(t, t);
        }),
        (n.prototype.squareTo = function (e) {
          for (var t = this.abs(), r = (e.t = 2 * t.t); --r >= 0; ) e[r] = 0;
          for (r = 0; r < t.t - 1; ++r) {
            var i = t.am(r, t[r], e, 2 * r, 0, 1);
            (e[r + t.t] += t.am(
              r + 1,
              2 * t[r],
              e,
              2 * r + 1,
              i,
              t.t - r - 1
            )) >= t.DV && ((e[r + t.t] -= t.DV), (e[r + t.t + 1] = 1));
          }
          e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)),
            (e.s = 0),
            e.clamp();
        }),
        (n.prototype.divRemTo = function (e, t, r) {
          var i = e.abs();
          if (!(i.t <= 0)) {
            var a = this.abs();
            if (a.t < i.t)
              return (
                null != t && t.fromInt(0), void (null != r && this.copyTo(r))
              );
            null == r && (r = s());
            var o = s(),
              u = this.s,
              c = e.s,
              l = this.DB - m(i[i.t - 1]);
            l > 0
              ? (i.lShiftTo(l, o), a.lShiftTo(l, r))
              : (i.copyTo(o), a.copyTo(r));
            var h = o.t,
              d = o[h - 1];
            if (0 != d) {
              var f = d * (1 << this.F1) + (h > 1 ? o[h - 2] >> this.F2 : 0),
                b = this.FV / f,
                p = (1 << this.F1) / f,
                y = 1 << this.F2,
                B = r.t,
                g = B - h,
                _ = null == t ? s() : t;
              for (
                o.dlShiftTo(g, _),
                  r.compareTo(_) >= 0 && ((r[r.t++] = 1), r.subTo(_, r)),
                  n.ONE.dlShiftTo(h, _),
                  _.subTo(o, o);
                o.t < h;

              )
                o[o.t++] = 0;
              for (; --g >= 0; ) {
                var w =
                  r[--B] == d
                    ? this.DM
                    : Math.floor(r[B] * b + (r[B - 1] + y) * p);
                if ((r[B] += o.am(0, w, r, g, 0, h)) < w)
                  for (o.dlShiftTo(g, _), r.subTo(_, r); r[B] < --w; )
                    r.subTo(_, r);
              }
              null != t && (r.drShiftTo(h, t), u != c && n.ZERO.subTo(t, t)),
                (r.t = h),
                r.clamp(),
                l > 0 && r.rShiftTo(l, r),
                u < 0 && n.ZERO.subTo(r, r);
            }
          }
        }),
        (n.prototype.invDigit = function () {
          if (this.t < 1) return 0;
          var e = this[0];
          if (0 == (1 & e)) return 0;
          var t = 3 & e;
          return (t =
            ((t =
              ((t =
                ((t = (t * (2 - (15 & e) * t)) & 15) * (2 - (255 & e) * t)) &
                255) *
                (2 - (((65535 & e) * t) & 65535))) &
              65535) *
              (2 - ((e * t) % this.DV))) %
            this.DV) > 0
            ? this.DV - t
            : -t;
        }),
        (n.prototype.isEven = function () {
          return 0 == (this.t > 0 ? 1 & this[0] : this.s);
        }),
        (n.prototype.exp = function (e, t) {
          if (e > 4294967295 || e < 1) return n.ONE;
          var r = s(),
            i = s(),
            a = t.convert(this),
            o = m(e) - 1;
          for (a.copyTo(r); --o >= 0; )
            if ((t.sqrTo(r, i), (e & (1 << o)) > 0)) t.mulTo(i, a, r);
            else {
              var u = r;
              (r = i), (i = u);
            }
          return t.revert(r);
        }),
        (n.prototype.toString = function (e) {
          if (this.s < 0) return "-" + this.negate().toString(e);
          var t;
          if (16 == e) t = 4;
          else if (8 == e) t = 3;
          else if (2 == e) t = 1;
          else if (32 == e) t = 5;
          else {
            if (4 != e) return this.toRadix(e);
            t = 2;
          }
          var r,
            i = (1 << t) - 1,
            n = !1,
            s = "",
            a = this.t,
            o = this.DB - ((a * this.DB) % t);
          if (a-- > 0)
            for (
              o < this.DB && (r = this[a] >> o) > 0 && ((n = !0), (s = c(r)));
              a >= 0;

            )
              o < t
                ? ((r = (this[a] & ((1 << o) - 1)) << (t - o)),
                  (r |= this[--a] >> (o += this.DB - t)))
                : ((r = (this[a] >> (o -= t)) & i),
                  o <= 0 && ((o += this.DB), --a)),
                r > 0 && (n = !0),
                n && (s += c(r));
          return n ? s : "0";
        }),
        (n.prototype.negate = function () {
          var e = s();
          return n.ZERO.subTo(this, e), e;
        }),
        (n.prototype.abs = function () {
          return this.s < 0 ? this.negate() : this;
        }),
        (n.prototype.compareTo = function (e) {
          var t = this.s - e.s;
          if (0 != t) return t;
          var r = this.t;
          if (0 != (t = r - e.t)) return t;
          for (; --r >= 0; ) if (0 != (t = this[r] - e[r])) return t;
          return 0;
        }),
        (n.prototype.bitLength = function () {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + m(this[this.t - 1] ^ (this.s & this.DM));
        }),
        (n.prototype.mod = function (e) {
          var t = s();
          return (
            this.abs().divRemTo(e, null, t),
            this.s < 0 && t.compareTo(n.ZERO) > 0 && e.subTo(t, t),
            t
          );
        }),
        (n.prototype.modPowInt = function (e, t) {
          var r;
          return (
            (r = e < 256 || t.isEven() ? new d(t) : new f(t)), this.exp(e, r)
          );
        }),
        (n.ZERO = h(0)),
        (n.ONE = h(1)),
        (w.prototype.convert = S),
        (w.prototype.revert = S),
        (w.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r);
        }),
        (w.prototype.sqrTo = function (e, t) {
          e.squareTo(t);
        }),
        (v.prototype.convert = function (e) {
          if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
          if (e.compareTo(this.m) < 0) return e;
          var t = s();
          return e.copyTo(t), this.reduce(t), t;
        }),
        (v.prototype.revert = function (e) {
          return e;
        }),
        (v.prototype.reduce = function (e) {
          for (
            e.drShiftTo(this.m.t - 1, this.r2),
              e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            e.compareTo(this.r2) < 0;

          )
            e.dAddOffset(1, this.m.t + 1);
          for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; )
            e.subTo(this.m, e);
        }),
        (v.prototype.mulTo = function (e, t, r) {
          e.multiplyTo(t, r), this.reduce(r);
        }),
        (v.prototype.sqrTo = function (e, t) {
          e.squareTo(t), this.reduce(t);
        });
      var T = [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
          139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
          223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
          293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
          383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
          463, 467, 479, 487, 491, 499, 503, 509,
        ],
        F = (1 << 26) / T[T.length - 1];
      (n.prototype.chunkSize = function (e) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(e));
      }),
        (n.prototype.toRadix = function (e) {
          if ((null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36))
            return "0";
          var t = this.chunkSize(e),
            r = Math.pow(e, t),
            i = h(r),
            n = s(),
            a = s(),
            o = "";
          for (this.divRemTo(i, n, a); n.signum() > 0; )
            (o = (r + a.intValue()).toString(e).substr(1) + o),
              n.divRemTo(i, n, a);
          return a.intValue().toString(e) + o;
        }),
        (n.prototype.fromRadix = function (e, t) {
          this.fromInt(0), null == t && (t = 10);
          for (
            var r = this.chunkSize(t),
              i = Math.pow(t, r),
              s = !1,
              a = 0,
              o = 0,
              u = 0;
            u < e.length;
            ++u
          ) {
            var c = l(e, u);
            c < 0
              ? "-" == e.charAt(u) && 0 == this.signum() && (s = !0)
              : ((o = t * o + c),
                ++a >= r &&
                  (this.dMultiply(i), this.dAddOffset(o, 0), (a = 0), (o = 0)));
          }
          a > 0 && (this.dMultiply(Math.pow(t, a)), this.dAddOffset(o, 0)),
            s && n.ZERO.subTo(this, this);
        }),
        (n.prototype.fromNumber = function (e, t, r) {
          if ("number" == typeof t)
            if (e < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(e, r),
                  this.testBit(e - 1) ||
                    this.bitwiseTo(n.ONE.shiftLeft(e - 1), p, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(t);

              )
                this.dAddOffset(2, 0),
                  this.bitLength() > e &&
                    this.subTo(n.ONE.shiftLeft(e - 1), this);
          else {
            var i = new Array(),
              s = 7 & e;
            (i.length = 1 + (e >> 3)),
              t.nextBytes(i),
              s > 0 ? (i[0] &= (1 << s) - 1) : (i[0] = 0),
              this.fromString(i, 256);
          }
        }),
        (n.prototype.bitwiseTo = function (e, t, r) {
          var i,
            n,
            s = Math.min(e.t, this.t);
          for (i = 0; i < s; ++i) r[i] = t(this[i], e[i]);
          if (e.t < this.t) {
            for (n = e.s & this.DM, i = s; i < this.t; ++i)
              r[i] = t(this[i], n);
            r.t = this.t;
          } else {
            for (n = this.s & this.DM, i = s; i < e.t; ++i) r[i] = t(n, e[i]);
            r.t = e.t;
          }
          (r.s = t(this.s, e.s)), r.clamp();
        }),
        (n.prototype.changeBit = function (e, t) {
          var r = n.ONE.shiftLeft(e);
          return this.bitwiseTo(r, t, r), r;
        }),
        (n.prototype.addTo = function (e, t) {
          for (var r = 0, i = 0, n = Math.min(e.t, this.t); r < n; )
            (i += this[r] + e[r]), (t[r++] = i & this.DM), (i >>= this.DB);
          if (e.t < this.t) {
            for (i += e.s; r < this.t; )
              (i += this[r]), (t[r++] = i & this.DM), (i >>= this.DB);
            i += this.s;
          } else {
            for (i += this.s; r < e.t; )
              (i += e[r]), (t[r++] = i & this.DM), (i >>= this.DB);
            i += e.s;
          }
          (t.s = i < 0 ? -1 : 0),
            i > 0 ? (t[r++] = i) : i < -1 && (t[r++] = this.DV + i),
            (t.t = r),
            t.clamp();
        }),
        (n.prototype.dMultiply = function (e) {
          (this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }),
        (n.prototype.dAddOffset = function (e, t) {
          for (; this.t <= t; ) this[this.t++] = 0;
          for (this[t] += e; this[t] >= this.DV; )
            (this[t] -= this.DV),
              ++t >= this.t && (this[this.t++] = 0),
              ++this[t];
        }),
        (n.prototype.multiplyLowerTo = function (e, t, r) {
          var i,
            n = Math.min(this.t + e.t, t);
          for (r.s = 0, r.t = n; n > 0; ) r[--n] = 0;
          for (i = r.t - this.t; n < i; ++n)
            r[n + this.t] = this.am(0, e[n], r, n, 0, this.t);
          for (i = Math.min(e.t, t); n < i; ++n)
            this.am(0, e[n], r, n, 0, t - n);
          r.clamp();
        }),
        (n.prototype.multiplyUpperTo = function (e, t, r) {
          --t;
          var i = (r.t = this.t + e.t - t);
          for (r.s = 0; --i >= 0; ) r[i] = 0;
          for (i = Math.max(t - this.t, 0); i < e.t; ++i)
            r[this.t + i - t] = this.am(t - i, e[i], r, 0, 0, this.t + i - t);
          r.clamp(), r.drShiftTo(1, r);
        }),
        (n.prototype.modInt = function (e) {
          if (e <= 0) return 0;
          var t = this.DV % e,
            r = this.s < 0 ? e - 1 : 0;
          if (this.t > 0)
            if (0 == t) r = this[0] % e;
            else
              for (var i = this.t - 1; i >= 0; --i) r = (t * r + this[i]) % e;
          return r;
        }),
        (n.prototype.millerRabin = function (e) {
          var t = this.subtract(n.ONE),
            r = t.getLowestSetBit();
          if (r <= 0) return !1;
          var i = t.shiftRight(r);
          (e = (e + 1) >> 1) > T.length && (e = T.length);
          for (var a = s(), o = 0; o < e; ++o) {
            a.fromInt(T[o]);
            var u = a.modPow(i, this);
            if (0 != u.compareTo(n.ONE) && 0 != u.compareTo(t)) {
              for (var c = 1; c++ < r && 0 != u.compareTo(t); )
                if (0 == (u = u.modPowInt(2, this)).compareTo(n.ONE)) return !1;
              if (0 != u.compareTo(t)) return !1;
            }
          }
          return !0;
        }),
        (n.prototype.clone = function () {
          var e = s();
          return this.copyTo(e), e;
        }),
        (n.prototype.intValue = function () {
          if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1;
          } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }),
        (n.prototype.byteValue = function () {
          return 0 == this.t ? this.s : (this[0] << 24) >> 24;
        }),
        (n.prototype.shortValue = function () {
          return 0 == this.t ? this.s : (this[0] << 16) >> 16;
        }),
        (n.prototype.signum = function () {
          return this.s < 0
            ? -1
            : this.t <= 0 || (1 == this.t && this[0] <= 0)
            ? 0
            : 1;
        }),
        (n.prototype.toByteArray = function () {
          var e = this.t,
            t = new Array();
          t[0] = this.s;
          var r,
            i = this.DB - ((e * this.DB) % 8),
            n = 0;
          if (e-- > 0)
            for (
              i < this.DB &&
              (r = this[e] >> i) != (this.s & this.DM) >> i &&
              (t[n++] = r | (this.s << (this.DB - i)));
              e >= 0;

            )
              i < 8
                ? ((r = (this[e] & ((1 << i) - 1)) << (8 - i)),
                  (r |= this[--e] >> (i += this.DB - 8)))
                : ((r = (this[e] >> (i -= 8)) & 255),
                  i <= 0 && ((i += this.DB), --e)),
                0 != (128 & r) && (r |= -256),
                0 == n && (128 & this.s) != (128 & r) && ++n,
                (n > 0 || r != this.s) && (t[n++] = r);
          return t;
        }),
        (n.prototype.equals = function (e) {
          return 0 == this.compareTo(e);
        }),
        (n.prototype.min = function (e) {
          return this.compareTo(e) < 0 ? this : e;
        }),
        (n.prototype.max = function (e) {
          return this.compareTo(e) > 0 ? this : e;
        }),
        (n.prototype.and = function (e) {
          var t = s();
          return this.bitwiseTo(e, b, t), t;
        }),
        (n.prototype.or = function (e) {
          var t = s();
          return this.bitwiseTo(e, p, t), t;
        }),
        (n.prototype.xor = function (e) {
          var t = s();
          return this.bitwiseTo(e, y, t), t;
        }),
        (n.prototype.andNot = function (e) {
          var t = s();
          return this.bitwiseTo(e, B, t), t;
        }),
        (n.prototype.not = function () {
          for (var e = s(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
          return (e.t = this.t), (e.s = ~this.s), e;
        }),
        (n.prototype.shiftLeft = function (e) {
          var t = s();
          return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
        }),
        (n.prototype.shiftRight = function (e) {
          var t = s();
          return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
        }),
        (n.prototype.getLowestSetBit = function () {
          for (var e = 0; e < this.t; ++e)
            if (0 != this[e]) return e * this.DB + g(this[e]);
          return this.s < 0 ? this.t * this.DB : -1;
        }),
        (n.prototype.bitCount = function () {
          for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r)
            e += _(this[r] ^ t);
          return e;
        }),
        (n.prototype.testBit = function (e) {
          var t = Math.floor(e / this.DB);
          return t >= this.t
            ? 0 != this.s
            : 0 != (this[t] & (1 << e % this.DB));
        }),
        (n.prototype.setBit = function (e) {
          return this.changeBit(e, p);
        }),
        (n.prototype.clearBit = function (e) {
          return this.changeBit(e, B);
        }),
        (n.prototype.flipBit = function (e) {
          return this.changeBit(e, y);
        }),
        (n.prototype.add = function (e) {
          var t = s();
          return this.addTo(e, t), t;
        }),
        (n.prototype.subtract = function (e) {
          var t = s();
          return this.subTo(e, t), t;
        }),
        (n.prototype.multiply = function (e) {
          var t = s();
          return this.multiplyTo(e, t), t;
        }),
        (n.prototype.divide = function (e) {
          var t = s();
          return this.divRemTo(e, t, null), t;
        }),
        (n.prototype.remainder = function (e) {
          var t = s();
          return this.divRemTo(e, null, t), t;
        }),
        (n.prototype.divideAndRemainder = function (e) {
          var t = s(),
            r = s();
          return this.divRemTo(e, t, r), new Array(t, r);
        }),
        (n.prototype.modPow = function (e, t) {
          var r,
            i,
            n = e.bitLength(),
            a = h(1);
          if (n <= 0) return a;
          (r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6),
            (i = n < 8 ? new d(t) : t.isEven() ? new v(t) : new f(t));
          var o = new Array(),
            u = 3,
            c = r - 1,
            l = (1 << r) - 1;
          if (((o[1] = i.convert(this)), r > 1)) {
            var b = s();
            for (i.sqrTo(o[1], b); u <= l; )
              (o[u] = s()), i.mulTo(b, o[u - 2], o[u]), (u += 2);
          }
          var p,
            y,
            B = e.t - 1,
            g = !0,
            _ = s();
          for (n = m(e[B]) - 1; B >= 0; ) {
            for (
              n >= c
                ? (p = (e[B] >> (n - c)) & l)
                : ((p = (e[B] & ((1 << (n + 1)) - 1)) << (c - n)),
                  B > 0 && (p |= e[B - 1] >> (this.DB + n - c))),
                u = r;
              0 == (1 & p);

            )
              (p >>= 1), --u;
            if (((n -= u) < 0 && ((n += this.DB), --B), g))
              o[p].copyTo(a), (g = !1);
            else {
              for (; u > 1; ) i.sqrTo(a, _), i.sqrTo(_, a), (u -= 2);
              u > 0 ? i.sqrTo(a, _) : ((y = a), (a = _), (_ = y)),
                i.mulTo(_, o[p], a);
            }
            for (; B >= 0 && 0 == (e[B] & (1 << n)); )
              i.sqrTo(a, _),
                (y = a),
                (a = _),
                (_ = y),
                --n < 0 && ((n = this.DB - 1), --B);
          }
          return i.revert(a);
        }),
        (n.prototype.modInverse = function (e) {
          var t = e.isEven();
          if ((this.isEven() && t) || 0 == e.signum()) return n.ZERO;
          for (
            var r = e.clone(),
              i = this.clone(),
              s = h(1),
              a = h(0),
              o = h(0),
              u = h(1);
            0 != r.signum();

          ) {
            for (; r.isEven(); )
              r.rShiftTo(1, r),
                t
                  ? ((s.isEven() && a.isEven()) ||
                      (s.addTo(this, s), a.subTo(e, a)),
                    s.rShiftTo(1, s))
                  : a.isEven() || a.subTo(e, a),
                a.rShiftTo(1, a);
            for (; i.isEven(); )
              i.rShiftTo(1, i),
                t
                  ? ((o.isEven() && u.isEven()) ||
                      (o.addTo(this, o), u.subTo(e, u)),
                    o.rShiftTo(1, o))
                  : u.isEven() || u.subTo(e, u),
                u.rShiftTo(1, u);
            r.compareTo(i) >= 0
              ? (r.subTo(i, r), t && s.subTo(o, s), a.subTo(u, a))
              : (i.subTo(r, i), t && o.subTo(s, o), u.subTo(a, u));
          }
          return 0 != i.compareTo(n.ONE)
            ? n.ZERO
            : u.compareTo(e) >= 0
            ? u.subtract(e)
            : u.signum() < 0
            ? (u.addTo(e, u), u.signum() < 0 ? u.add(e) : u)
            : u;
        }),
        (n.prototype.pow = function (e) {
          return this.exp(e, new w());
        }),
        (n.prototype.gcd = function (e) {
          var t = this.s < 0 ? this.negate() : this.clone(),
            r = e.s < 0 ? e.negate() : e.clone();
          if (t.compareTo(r) < 0) {
            var i = t;
            (t = r), (r = i);
          }
          var n = t.getLowestSetBit(),
            s = r.getLowestSetBit();
          if (s < 0) return t;
          for (
            n < s && (s = n), s > 0 && (t.rShiftTo(s, t), r.rShiftTo(s, r));
            t.signum() > 0;

          )
            (n = t.getLowestSetBit()) > 0 && t.rShiftTo(n, t),
              (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r),
              t.compareTo(r) >= 0
                ? (t.subTo(r, t), t.rShiftTo(1, t))
                : (r.subTo(t, r), r.rShiftTo(1, r));
          return s > 0 && r.lShiftTo(s, r), r;
        }),
        (n.prototype.isProbablePrime = function (e) {
          var t,
            r = this.abs();
          if (1 == r.t && r[0] <= T[T.length - 1]) {
            for (t = 0; t < T.length; ++t) if (r[0] == T[t]) return !0;
            return !1;
          }
          if (r.isEven()) return !1;
          for (t = 1; t < T.length; ) {
            for (var i = T[t], n = t + 1; n < T.length && i < F; ) i *= T[n++];
            for (i = r.modInt(i); t < n; ) if (i % T[t++] == 0) return !1;
          }
          return r.millerRabin(e);
        });
      const R = n;
      var M = function (e, t) {
          (this.modulus = new R(e, 16)),
            (this.encryptionExponent = new R(t, 16));
        },
        z = {
          base64:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode: function (e) {
            if (!e) return !1;
            var t,
              r,
              i,
              n,
              s,
              a,
              o,
              u = "",
              c = 0;
            do {
              (n = (t = e.charCodeAt(c++)) >> 2),
                (s = ((3 & t) << 4) | ((r = e.charCodeAt(c++)) >> 4)),
                (a = ((15 & r) << 2) | ((i = e.charCodeAt(c++)) >> 6)),
                (o = 63 & i),
                isNaN(r) ? (a = o = 64) : isNaN(i) && (o = 64),
                (u +=
                  this.base64.charAt(n) +
                  this.base64.charAt(s) +
                  this.base64.charAt(a) +
                  this.base64.charAt(o));
            } while (c < e.length);
            return u;
          },
          decode: function (e) {
            if (!e) return !1;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            var t,
              r,
              i,
              n,
              s = "",
              a = 0;
            do {
              (t = this.base64.indexOf(e.charAt(a++))),
                (r = this.base64.indexOf(e.charAt(a++))),
                (i = this.base64.indexOf(e.charAt(a++))),
                (n = this.base64.indexOf(e.charAt(a++))),
                (s += String.fromCharCode((t << 2) | (r >> 4))),
                64 != i &&
                  (s += String.fromCharCode(((15 & r) << 4) | (i >> 2))),
                64 != n && (s += String.fromCharCode(((3 & i) << 6) | n));
            } while (a < e.length);
            return s;
          },
        },
        j = {
          hex: "0123456789abcdef",
          encode: function (e) {
            if (!e) return !1;
            var t,
              r = "",
              i = 0;
            do {
              (t = e.charCodeAt(i++)),
                (r += this.hex.charAt((t >> 4) & 15) + this.hex.charAt(15 & t));
            } while (i < e.length);
            return r;
          },
          decode: function (e) {
            if (!e) return !1;
            e = e.replace(/[^0-9abcdef]/g, "");
            var t = "",
              r = 0;
            do {
              t += String.fromCharCode(
                ((this.hex.indexOf(e.charAt(r++)) << 4) & 240) |
                  (15 & this.hex.indexOf(e.charAt(r++)))
              );
            } while (r < e.length);
            return t;
          },
        };
      const A = {
        getPublicKey: function (e, t) {
          return new M(e, t);
        },
        encrypt: function (e, t) {
          return (
            !!t &&
            !!(e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)) &&
            !!(e = e.modPowInt(t.encryptionExponent, t.modulus)) &&
            (1 == (1 & (e = e.toString(16)).length) && (e = "0" + e),
            z.encode(j.decode(e)))
          );
        },
        pkcs1pad2: function (e, t) {
          if (t < e.length + 11) return null;
          for (var r = [], i = e.length - 1; i >= 0 && t > 0; )
            r[--t] = e.charCodeAt(i--);
          for (r[--t] = 0; t > 2; )
            r[--t] = Math.floor(254 * Math.random()) + 1;
          return (r[--t] = 2), (r[--t] = 0), new R(r);
        },
      };
    },
    61673: (e, t, r) => {
      "use strict";
      r.d(t, { NZ: () => i, io: () => m, tY: () => h });
      var i,
        n,
        s = r(70655),
        a = r(22188),
        o = (r(9669), r(10708)),
        u = r(29786),
        c = (r(65030), r(78869), r(36378)),
        l = (r(62689), r(79742));
      function h(e) {
        const {
            shared_secret: t,
            identity_secret: r,
            secret_1: i,
            status: n,
            uri: a,
            server_time: o,
          } = e,
          u = (0, s._T)(e, [
            "shared_secret",
            "identity_secret",
            "secret_1",
            "status",
            "uri",
            "server_time",
          ]);
        return Object.assign(
          {
            shared_secret: l.JQ(t),
            identity_secret: l.JQ(r),
            secret_1: l.JQ(i),
          },
          u
        );
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Generic = 1)] = "Generic"),
          (e[(e.Expired = 2)] = "Expired");
      })(i || (i = {})),
        (function (e) {
          (e[(e.k_Success = 0)] = "k_Success"),
            (e[(e.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
            (e[(e.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail");
        })(n || (n = {}));
      class m {
        constructor(e, t, r) {
          (this.m_bRemoteInteraction = !1),
            (this.m_eFailureState = i.None),
            (this.m_transport = e),
            (this.m_onCompleteCallback = t),
            (this.m_ePlatformType = r);
        }
        StartPolling(e = !0) {
          e
            ? this.PollForUpdate()
            : (this.m_activeTimerID = window.setTimeout(
                this.PollForUpdate,
                this.m_msPollInterval
              ));
        }
        StopPolling() {
          window.clearTimeout(this.m_activeTimerID),
            (this.m_activeTimerID = void 0);
        }
        PollForUpdate() {
          return (0, s.mG)(this, void 0, void 0, function* () {
            try {
              const e = o.gA.Init(c.Uy);
              e.Body().set_client_id(this.m_strClientID),
                e.Body().set_request_id(this.m_rgRequestID);
              const t = yield c.$h.PollAuthSessionStatus(this.m_transport, e),
                r = t.GetEResult();
              if (1 !== r) {
                if (2 === r) {
                  const e = t.Hdr().transport_error();
                  if (
                    (console.error(
                      `Failed to poll auth session. Result ${r}. Transport Error: ${e}`
                    ),
                    2 === e || 3 === e)
                  )
                    return (
                      window.setTimeout(
                        this.PollForUpdate,
                        this.m_msPollInterval
                      ),
                      1
                    );
                }
                return (
                  9 === r || 27 === r
                    ? (this.m_eFailureState = i.Expired)
                    : (console.error(
                        `Failed to poll auth session. Result: ${r}`
                      ),
                      (this.m_eFailureState = i.Generic)),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  r
                );
              }
              const {
                new_challenge_url: n,
                new_client_id: s,
                refresh_token: a,
                access_token: u,
                account_name: l,
                had_remote_interaction: h,
              } = t.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!h),
                a
                  ? (this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: a,
                      strAccessToken: u,
                      strAccountName: l,
                    }),
                    r)
                  : (n && (this.m_strChallengeURL = n),
                    s && (this.m_strClientID = s),
                    (this.m_activeTimerID = window.setTimeout(
                      this.PollForUpdate,
                      this.m_msPollInterval
                    )),
                    r)
              );
            } catch (e) {
              return (
                console.error(`Failed to poll auth session. ${e}`),
                (this.m_eFailureState = i.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                2
              );
            }
          });
        }
        GetFailureState() {
          return this.m_eFailureState;
        }
        BHadRemoteInteraction() {
          return this.m_bRemoteInteraction;
        }
      }
      (0, s.gn)([a.LO], m.prototype, "m_strChallengeURL", void 0),
        (0, s.gn)([a.LO], m.prototype, "m_bRemoteInteraction", void 0),
        (0, s.gn)([a.LO], m.prototype, "m_eFailureState", void 0),
        (0, s.gn)([u.a], m.prototype, "PollForUpdate", null);
    },
    12369: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => h });
      var i = r(70655),
        n = r(67294),
        s = r(22188),
        a = r(10708),
        o = (r(65030), r(36378)),
        u = r(13271),
        c = r(61673);
      class l extends c.io {
        constructor(e) {
          super(
            e.transport,
            (t) => {
              (this.m_eStatus = t.bSuccess ? 3 : 4), e.onComplete(t);
            },
            e.ePlatformType
          ),
            (this.m_eStatus = 0);
        }
        Start() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (0 !== this.m_eStatus)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance."
                ),
                2
              );
            this.m_eStatus = 1;
            try {
              const e = a.gA.Init(o.oZ);
              e.Body().set_platform_type(this.m_ePlatformType),
                e.Body().set_device_friendly_name(window.navigator.userAgent);
              const t = yield o.$h.BeginAuthSessionViaQR(this.m_transport, e),
                r = t.GetEResult(),
                i = t.Hdr().transport_error();
              if (1 !== r)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${r} Transport: ${i}`
                  ),
                  (this.m_eFailureState = c.NZ.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  r
                );
              const {
                client_id: n,
                challenge_url: s,
                interval: u,
                request_id: l,
              } = t.Body().toObject();
              return (
                (this.m_strClientID = n),
                (this.m_strChallengeURL = s),
                (this.m_msPollInterval = 1e3 * u),
                (this.m_rgRequestID = l),
                (this.m_eStatus = 2),
                this.StartPolling(!1),
                r
              );
            } catch (e) {
              return (
                console.error(`Failed to start auth session. ${e}`),
                (this.m_eFailureState = c.NZ.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                2
              );
            }
          });
        }
        Stop() {
          this.StopPolling(), (this.m_eStatus = 5);
        }
        GetChallengeURL() {
          return this.m_strChallengeURL;
        }
        GetStatus() {
          return this.m_eStatus;
        }
      }
      function h(e) {
        const [t, r] = (0, n.useState)(new l(e));
        return (
          (0, n.useEffect)(
            () => (
              t.Start(),
              () => {
                t.Stop();
              }
            ),
            [t]
          ),
          (0, u.SZ)(() => ({
            strChallengeURL: t.GetChallengeURL(),
            eFailureStatue: t.GetFailureState(),
            eStatus: t.GetStatus(),
            bHadRemoteInteraction: t.BHadRemoteInteraction(),
            reset: () => r(new l(e)),
          }))
        );
      }
      (0, i.gn)([s.LO], l.prototype, "m_eStatus", void 0);
    },
    14838: (e, t, r) => {
      "use strict";
      r.d(t, { He: () => m, IC: () => h, p1: () => c, yI: () => l });
      var i = r(70655),
        n = r(9669),
        s = r.n(n);
      const a = r(97590).Z;
      function o(e, t) {
        return e.endsWith("/") || (e += "/"), `${e}login/${t}/`;
      }
      function u() {
        let e = new FormData();
        return e.append("donotcache", new Date().getTime().toString()), e;
      }
      function c(e) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          let t = u(),
            r = o(e, "refreshcaptcha"),
            i = "";
          try {
            let e = yield s().post(r, t);
            if (200 != e.status) return !1;
            i = e.data.gid;
          } catch (e) {
            return !1;
          }
          return i;
        });
      }
      function l(e, t) {
        return o(e, "rendercaptcha") + `?gid=${t}`;
      }
      function h(e, t) {
        let r = a.getPublicKey(t.publickey_mod, t.publickey_exp),
          i = a.encrypt(e, r);
        return !1 === i ? null : i;
      }
      function m(e, t, r) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (
            ((r = Object.assign({}, r)).strUserName &&
              (r.strUserName = r.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !r.strPassword || r.strPassword.match(/[^\x00-\x7F]/))
          )
            return null;
          if (!r.strUserName) return null;
          let n = yield (function (e, t) {
            return (0, i.mG)(this, void 0, void 0, function* () {
              let r = u();
              r.append("username", t);
              let i,
                n = o(e, "getrsakey");
              try {
                let e = yield s().post(n, r);
                if (200 != e.status) return null;
                let t = e.data;
                if (
                  !(
                    t &&
                    t.success &&
                    t.publickey_mod &&
                    t.publickey_exp &&
                    t.timestamp
                  )
                )
                  return null;
                i = t;
              } catch (e) {
                return null;
              }
              return i;
            });
          })(e, r.strUserName);
          if (!n) return console.log("Failed to get RSA key"), null;
          let a = yield (function (e, t, r, n) {
            return (0, i.mG)(this, void 0, void 0, function* () {
              const i = h(r.strPassword, n);
              if (!i) return null;
              let a = u();
              a.append("password", i),
                a.append("username", r.strUserName),
                a.append("twofactorcode", r.strTwoFactorCode || ""),
                a.append("emailauth", r.strEmailAuthCode || ""),
                a.append("loginfriendlyname", ""),
                a.append("captchagid", r.gidCaptcha || ""),
                a.append("captcha_text", r.strCaptchaText || ""),
                a.append("emailsteamid", r.emailSteamID || ""),
                a.append("rsatimestamp", n.timestamp),
                a.append("remember_login", r.bRememberLogin ? "true" : "false");
              let c = {};
              t &&
                (a.append("oauth_client_id", t),
                a.append("mobile_chat_client", "true"));
              let l,
                m = o(e, "dologin");
              try {
                let e = yield s().post(m, a, c);
                if (200 != e.status) return null;
                let t = e.data;
                if (!t) return null;
                t.oauth && (t.oauth = JSON.parse(t.oauth)), (l = t);
              } catch (e) {
                return null;
              }
              return l;
            });
          })(e, t, r, n);
          return a;
        });
      }
    },
    38440: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => m });
      var i = r(70655),
        n = r(79742),
        s = r(33019),
        a = r(10708),
        o = r(29786),
        u = r(9669),
        c = r.n(u),
        l = (r(65030), r(84242)),
        h = (r(71993), r(79571));
      r(27255);
      s.Message;
      class m {
        constructor(e, t, r = !1) {
          (this.m_webApiAccessToken = ""),
            (this.m_bJsonMode = !1),
            (this.m_strWebAPIBaseURL = e),
            (this.m_webApiAccessToken = t),
            (this.m_bJsonMode = r),
            this.ConstructServiceTransport();
        }
        WaitUntilLoggedOn() {
          return Promise.resolve();
        }
        GetServerRTime32() {
          return Number(new Date());
        }
        get steamid() {
          return new h.K();
        }
        RTime32ToDate(e) {
          return new Date(1e3 * e);
        }
        GetServiceTransport() {
          return this.m_ServiceTransport;
        }
        GetWebAPIAccessToken() {
          return this.m_webApiAccessToken;
        }
        GetAnonymousServiceTransport() {
          return this.m_AnonymousServiceTransport;
        }
        ConstructServiceTransport() {
          (this.m_ServiceTransport = {
            SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
            SendNotification: this.SendNotification.bind(this, {
              bSendAuth: !0,
            }),
          }),
            (this.m_AnonymousServiceTransport = {
              SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
                bSendAuth: !1,
              }),
              SendNotification: this.SendNotification.bind(this, {
                bSendAuth: !1,
              }),
            });
        }
        SendMsgAndAwaitResponse(e, t, r, n, o) {
          var u;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              let u = yield this.Send(e, t, r, o);
              if (200 != u.status || !u.data) throw new Error("Request Error");
              if (
                ((i = a.gA.Init(n, 147)),
                u.headers &&
                  (u.headers["x-eresult"] &&
                    i.Hdr().set_eresult(parseInt(u.headers["x-eresult"])),
                  u.headers["x-error_message"] &&
                    i.Hdr().set_error_message(u.headers["x-error_message"])),
                this.m_bJsonMode)
              )
                i.SetBodyJSON(u.data.response);
              else {
                let e = new l.At(u.data),
                  t = new s.BinaryReader(
                    e.GetPacket(),
                    e.TellGet(),
                    e.GetCountBytesRemaining()
                  );
                n.deserializeBinaryFromReader(i.Body(), t);
              }
              0;
            } catch (e) {
              const t =
                401 ===
                (null === (u = null == e ? void 0 : e.response) || void 0 === u
                  ? void 0
                  : u.status)
                  ? "Unauthorized"
                  : null;
              i = this.CreateFailedMsgProtobuf(n, 3, t);
            }
            return i;
          });
        }
        SendNotification(e, t, r, i) {
          return this.Send(e, t, r, i), !0;
        }
        Send(e, t, r, i) {
          let s = this.CreateWebAPIURL(t),
            a = r.SerializeBody(),
            o = n.JQ(a);
          const u = i.eWebAPIKeyRequirement;
          let l = 0 == i.ePrivilege && 1 == u,
            h = {
              responseType: this.m_bJsonMode ? "json" : "arraybuffer",
              params: {},
              headers: i.bConstMethod
                ? {}
                : { "Content-Type": "multipart/form-data" },
            };
          if (
            (e.bSendAuth ||
              1 == u ||
              console.error(
                `Attempting to invoke service ${t} without auth, but auth is required.`
              ),
            this.m_webApiAccessToken &&
              e.bSendAuth &&
              !l &&
              (h.params.access_token = this.m_webApiAccessToken),
            !i.bConstMethod)
          ) {
            const e = new FormData();
            return (
              this.m_bJsonMode
                ? e.append("input_json", JSON.stringify(r.Body().toObject()))
                : e.append("input_protobuf_encoded", o),
              c().post(s, e, h)
            );
          }
          return (
            this.m_bJsonMode
              ? (h.params = Object.assign(Object.assign({}, h.params), {
                  input_json: JSON.stringify(r.Body().toObject()),
                }))
              : (h.params = Object.assign(Object.assign({}, h.params), {
                  input_protobuf_encoded: o,
                })),
            c().get(s, h)
          );
        }
        CreateWebAPIURL(e) {
          let t = e.match(/([^\.]+)\.(.+)#(\d+)/);
          return t && 4 == t.length
            ? `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`
            : null;
        }
        CreateFailedMsgProtobuf(e, t, r) {
          let i = a.gA.Init(e);
          return (
            i.Hdr().set_eresult(2),
            i.Hdr().set_transport_error(t),
            r && i.Hdr().set_error_message(r),
            i
          );
        }
      }
      (0, i.gn)([o.a], m.prototype, "SendMsgAndAwaitResponse", null),
        (0, i.gn)([o.a], m.prototype, "SendNotification", null),
        (0, i.gn)([o.a], m.prototype, "Send", null);
    },
    36378: (e, t, r) => {
      "use strict";
      r.d(t, {
        $h: () => F,
        Am: () => B,
        Uy: () => d,
        _u: () => h,
        kp: () => a,
        oZ: () => c,
      });
      var i = r(33019),
        n = r(27255);
      r(21151);
      const s = i.Message;
      class a extends s {
        constructor(e = null) {
          super(),
            a.prototype.account_name || n.aR(a.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  account_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = n.Bh(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(a.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new a();
          return a.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Request";
        }
      }
      class o extends s {
        constructor(e = null) {
          super(),
            o.prototype.publickey_mod || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  publickey_mod: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  publickey_exp: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  timestamp: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetPasswordRSAPublicKey_Response";
        }
      }
      class u extends s {
        constructor(e = null) {
          super(),
            u.prototype.confirmation_type || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  confirmation_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  associated_message: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AllowedConfirmation";
        }
      }
      class c extends s {
        constructor(e = null) {
          super(),
            c.prototype.device_friendly_name || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  platform_type: {
                    n: 2,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Request";
        }
      }
      class l extends s {
        constructor(e = null) {
          super(),
            l.prototype.client_id || n.aR(l.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  challenge_url: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  request_id: { n: 3, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  interval: { n: 4, br: n.FE.readFloat, bw: n.Xc.writeFloat },
                  allowed_confirmations: { n: 5, c: u, r: !0, q: !0 },
                  version: { n: 6, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaQR_Response";
        }
      }
      class h extends s {
        constructor(e = null) {
          super(),
            h.prototype.device_friendly_name || n.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  device_friendly_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  account_name: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  encrypted_password: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  encryption_timestamp: {
                    n: 4,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  remember_login: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  platform_type: {
                    n: 6,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  persistence: {
                    n: 7,
                    d: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Request";
        }
      }
      class m extends s {
        constructor(e = null) {
          super(),
            m.prototype.client_id || n.aR(m.M()),
            s.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  request_id: { n: 2, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  interval: { n: 3, br: n.FE.readFloat, bw: n.Xc.writeFloat },
                  allowed_confirmations: { n: 4, c: u, r: !0, q: !0 },
                  steamid: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  weak_token: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_BeginAuthSessionViaCredentials_Response";
        }
      }
      class d extends s {
        constructor(e = null) {
          super(),
            d.prototype.client_id || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  request_id: { n: 2, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Request";
        }
      }
      class f extends s {
        constructor(e = null) {
          super(),
            f.prototype.new_client_id || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  new_client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  new_challenge_url: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  refresh_token: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  access_token: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  had_remote_interaction: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  account_name: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_PollAuthSessionStatus_Response";
        }
      }
      class b extends s {
        constructor(e = null) {
          super(),
            b.prototype.ip || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  ip: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  geoloc: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  city: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  state: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  country: { n: 5, br: n.FE.readString, bw: n.Xc.writeString },
                  platform_type: {
                    n: 6,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  device_friendly_name: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  version: { n: 8, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  login_history: {
                    n: 9,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  requestor_location_mismatch: {
                    n: 10,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  high_usage_login: {
                    n: 11,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  requested_persistence: {
                    n: 12,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionInfo_Response";
        }
      }
      class p extends s {
        constructor(e = null) {
          super(),
            p.prototype.client_ids || n.aR(p.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  client_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_GetAuthSessionsForAccount_Response";
        }
      }
      class y extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
        }
      }
      class B extends s {
        constructor(e = null) {
          super(),
            B.prototype.client_id || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  client_id: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  code: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  code_type: { n: 4, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
        }
      }
      class g extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
        }
      }
      class _ extends s {
        constructor(e = null) {
          super(),
            _.prototype.access_token || n.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  access_token: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_AccessToken_GenerateForApp_Response";
        }
      }
      class w extends s {
        constructor(e = null) {
          super(),
            w.prototype.refresh_token || n.aR(w.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  refresh_token: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  access_token: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAuthentication_MigrateMobileSession_Response";
        }
      }
      class S extends s {
        constructor(e = null) {
          super(),
            S.prototype.nonce || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  nonce: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  expiry: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_CreateNonce_Response";
        }
      }
      class v extends s {
        constructor(e = null) {
          super(),
            v.prototype.appid || n.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  minutes_remaining: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_TimeRemaining";
        }
      }
      class T extends s {
        constructor(e = null) {
          super(),
            T.prototype.entries || n.aR(T.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { entries: { n: 2, c: v, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCloudGaming_GetTimeRemaining_Response";
        }
      }
      var F, R;
      !(function (e) {
        (e.GetPasswordRSAPublicKey = function (e, t) {
          return e.SendMsg("Authentication.GetPasswordRSAPublicKey#1", t, o, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.BeginAuthSessionViaQR = function (e, t) {
            return e.SendMsg("Authentication.BeginAuthSessionViaQR#1", t, l, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.BeginAuthSessionViaCredentials = function (e, t) {
            return e.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              t,
              m,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.PollAuthSessionStatus = function (e, t) {
            return e.SendMsg("Authentication.PollAuthSessionStatus#1", t, f, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetAuthSessionInfo = function (e, t) {
            return e.SendMsg("Authentication.GetAuthSessionInfo#1", t, b, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateAuthSessionWithMobileConfirmation = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              t,
              y,
              { ePrivilege: 1 }
            );
          }),
          (e.UpdateAuthSessionWithSteamGuardCode = function (e, t) {
            return e.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              t,
              g,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GenerateAccessTokenForApp = function (e, t) {
            return e.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              t,
              _,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetAuthSessionsForAccount = function (e, t) {
            return e.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              t,
              p,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (e.MigrateMobileSession = function (e, t) {
            return e.SendMsg("Authentication.MigrateMobileSession#1", t, w, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(F || (F = {})),
        (function (e) {
          (e.CreateNonce = function (e, t) {
            return e.SendMsg("CloudGaming.CreateNonce#1", t, S, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
            (e.GetTimeRemaining = function (e, t) {
              return e.SendMsg("CloudGaming.GetTimeRemaining#1", t, T, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            });
        })(R || (R = {}));
    },
    62689: (e, t, r) => {
      "use strict";
      r.d(t, { AX: () => p, Sz: () => _, _w: () => f });
      var i = r(33019),
        n = r(27255);
      const s = i.Message;
      class a extends s {
        constructor(e = null) {
          super(),
            a.prototype.state || n.aR(a.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  state: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  inactivation_reason: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  authenticator_type: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  authenticator_allowed: {
                    n: 4,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  steamguard_scheme: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  token_gid: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  email_validated: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  device_identifier: {
                    n: 8,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  time_created: {
                    n: 9,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  revocation_attempts_remaining: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  classified_agent: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  allow_external_authenticator: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  time_transferred: {
                    n: 13,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = n.Bh(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(a.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new a();
          return a.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_Status_Response";
        }
      }
      class o extends s {
        constructor(e = null) {
          super(),
            o.prototype.shared_secret || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  shared_secret: {
                    n: 1,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  serial_number: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  revocation_code: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  uri: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  server_time: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  account_name: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  token_gid: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  identity_secret: {
                    n: 8,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  secret_1: { n: 9, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  status: { n: 10, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  phone_number_hint: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_AddAuthenticator_Response";
        }
      }
      class u extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new u();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_SendEmail_Response";
        }
      }
      class c extends s {
        constructor(e = null) {
          super(),
            c.prototype.success || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  want_more: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  server_time: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  status: { n: 4, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_FinalizeAddAuthenticator_Response";
        }
      }
      class l extends s {
        constructor(e = null) {
          super(),
            l.prototype.success || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  server_time: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  revocation_attempts_remaining: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticator_Response";
        }
      }
      class h extends s {
        constructor(e = null) {
          super(),
            h.prototype.codes || n.aR(h.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  codes: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_CreateEmergencyCodes_Response";
        }
      }
      class m extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new m();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_DestroyEmergencyCodes_Response";
        }
      }
      class d extends s {
        constructor(e = null) {
          super(),
            d.prototype.valid || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  valid: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_ValidateToken_Response";
        }
      }
      class f extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
        }
      }
      class b extends s {
        constructor(e = null) {
          super(),
            b.prototype.success || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
        }
      }
      class p extends s {
        constructor(e = null) {
          super(),
            p.prototype.sms_code || n.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  sms_code: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  generate_new_token: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
        }
      }
      class y extends s {
        constructor(e = null) {
          super(),
            y.prototype.shared_secret || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  shared_secret: {
                    n: 1,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  serial_number: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  revocation_code: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  uri: { n: 4, br: n.FE.readString, bw: n.Xc.writeString },
                  server_time: {
                    n: 5,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  account_name: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  token_gid: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  identity_secret: {
                    n: 8,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  secret_1: { n: 9, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  status: { n: 10, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  steamguard_scheme: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  steamid: {
                    n: 12,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
        }
      }
      class B extends s {
        constructor(e = null) {
          super(),
            B.prototype.success || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  success: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  replacement_token: { n: 2, c: y },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
        }
      }
      class g extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTwoFactor_UpdateTokenVersion_Response";
        }
      }
      var _;
      !(function (e) {
        (e.QueryStatus = function (e, t) {
          return e.SendMsg("TwoFactor.QueryStatus#1", t, a, { ePrivilege: 1 });
        }),
          (e.AddAuthenticator = function (e, t) {
            return e.SendMsg("TwoFactor.AddAuthenticator#1", t, o, {
              ePrivilege: 1,
            });
          }),
          (e.SendEmail = function (e, t) {
            return e.SendMsg("TwoFactor.SendEmail#1", t, u, { ePrivilege: 1 });
          }),
          (e.FinalizeAddAuthenticator = function (e, t) {
            return e.SendMsg("TwoFactor.FinalizeAddAuthenticator#1", t, c, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateTokenVersion = function (e, t) {
            return e.SendMsg("TwoFactor.UpdateTokenVersion#1", t, g, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.RemoveAuthenticator = function (e, t) {
            return e.SendMsg("TwoFactor.RemoveAuthenticator#1", t, l, {
              ePrivilege: 9,
            });
          }),
          (e.CreateEmergencyCodes = function (e, t) {
            return e.SendMsg("TwoFactor.CreateEmergencyCodes#1", t, h, {
              ePrivilege: 1,
            });
          }),
          (e.DestroyEmergencyCodes = function (e, t) {
            return e.SendMsg("TwoFactor.DestroyEmergencyCodes#1", t, m, {
              ePrivilege: 1,
            });
          }),
          (e.ValidateToken = function (e, t) {
            return e.SendMsg("TwoFactor.ValidateToken#1", t, d, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveAuthenticatorViaChallengeStart = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              t,
              b,
              { ePrivilege: 9, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.RemoveAuthenticatorViaChallengeContinue = function (e, t) {
            return e.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              t,
              B,
              { ePrivilege: 9, eWebAPIKeyRequirement: 1 }
            );
          });
      })(_ || (_ = {}));
    },
    29669: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => o });
      var i = r(70655),
        n = r(27194),
        s = r(65030);
      function a(e) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          const t = [];
          for (let r = 0; r < 30; r++) {
            const i = (0, s.j_)(r);
            t.push(e(i));
          }
          return (function (e) {
            const t = {},
              r = {},
              i = window.document.createElement("canvas");
            (i.style.position = "absolute"),
              (i.style.visibility = "hidden"),
              window.document.body.appendChild(i);
            const n = i.getContext("2d");
            for (const i of e)
              for (const e of Object.keys(i)) {
                const s = n.measureText(i[e]).width;
                (!(e in t) || r[e] < s) && ((t[e] = i[e]), (r[e] = s));
              }
            return window.document.body.removeChild(i), t;
          })(yield Promise.all(t));
        });
      }
      function o(e, ...t) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          let r = yield a(e);
          for (const e of t) {
            const t = yield a(e);
            r = Object.assign(Object.assign({}, t), r);
          }
          n.Yt.AddTokens(r);
        });
      }
    },
    86487: (e, t, r) => {
      "use strict";
      r.d(t, {
        CK: () => l,
        I2: () => u,
        Mw: () => d,
        Yn: () => c,
        fh: () => m,
        hx: () => h,
        lS: () => o,
      });
      var i = r(70655),
        n = (r(21645), r(93035), r(27194)),
        s = r(29669),
        a = r(82155);
      function o(e) {
        return r(73763)(`./steamui_${e}.json`);
      }
      function u(e) {
        return r(71574)(`./shared_${e}.json`);
      }
      function c() {
        return (0, i.mG)(this, void 0, void 0, function* () {
          yield (0, s.p)(
            (e) => o(e),
            (e) => u(e)
          );
        });
      }
      function l(e) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          console.log("Init localization", e);
          const t = n.LJ.GetLanguageFallback(e),
            r = e === t,
            [i, s, a, c] = yield Promise.all([
              o(e),
              r ? null : o(t),
              u(e),
              r ? null : u(t),
            ]);
          n.Yt.InitFromObjects(i, s, a, c);
        });
      }
      function h(e, t) {
        const r = t ? "#DisplayStatus_Compact_" : "#DisplayStatus_";
        let i = "";
        switch (e) {
          case 0:
            i = "Invalid";
            break;
          case 1:
            i = "Launching";
            break;
          case 2:
            i = "Uninstalling";
            break;
          case 3:
            i = "Installing";
            break;
          case 4:
            i = "Running";
            break;
          case 5:
            i = "Validating";
            break;
          case 6:
            i = "Updating";
            break;
          case 7:
            i = "Downloading";
            break;
          case 8:
            i = "Synchronizing";
            break;
          case 9:
            i = "ReadyToInstall";
            break;
          case 10:
            i = "ReadyToPreload";
            break;
          case 11:
            i = "ReadyToLaunch";
            break;
          case 12:
            i = "RegionRestricted";
            break;
          case 13:
            i = "PresaleOnly";
            break;
          case 14:
            i = "InvalidPlatform";
            break;
          case 16:
            i = "PreloadComplete";
            break;
          case 17:
            i = "BorrowerLocked";
            break;
          case 18:
            i = "UpdatePaused";
            break;
          case 19:
            i = "UpdateQueued";
            break;
          case 20:
            i = "UpdateRequired";
            break;
          case 21:
            i = "UpdateDisabled";
            break;
          case 22:
            i = "DownloadPaused";
            break;
          case 23:
            i = "DownloadQueued";
            break;
          case 24:
            i = "DownloadRequired";
            break;
          case 25:
            i = "DownloadDisabled";
            break;
          case 26:
            i = "LicensePending";
            break;
          case 27:
            i = "LicenseExpired";
            break;
          case 28:
            i = "AvailForFree";
            break;
          case 29:
            i = "AvailToBorrow";
            break;
          case 30:
            i = "AvailGuestPass";
            break;
          case 31:
            i = "Purchase";
            break;
          case 32:
            i = "Unavailable";
            break;
          case 33:
            i = "NotLaunchable";
            break;
          case 34:
            i = "CloudError";
            break;
          case 35:
            i = "CloudOutOfDate";
            break;
          case 36:
            i = "Terminating";
        }
        return (0, n.Xx)(r + i);
      }
      function m(e, t) {
        const r = t > 1;
        return (0, n.Xx)((r ? "#GameActionPlural_" : "#GameAction_") + e);
      }
      function d() {
        let e = (0, a.NW)();
        (0, a.Qg)(n.Yt.GetTokensChangedCallbackList(), e);
      }
    },
    71574: (e, t, r) => {
      var i = {
        "./shared_arabic.json": [90802, 7832],
        "./shared_brazilian.json": [28519, 3298],
        "./shared_bulgarian.json": [86079, 7781],
        "./shared_czech.json": [71548, 8085],
        "./shared_danish.json": [87597, 4183],
        "./shared_dutch.json": [60346, 3602],
        "./shared_english.json": [96941, 131],
        "./shared_finnish.json": [70225, 1953],
        "./shared_french.json": [15606, 4729],
        "./shared_german.json": [40665, 4445],
        "./shared_greek.json": [2681, 2822],
        "./shared_hungarian.json": [51665, 5279],
        "./shared_italian.json": [6470, 4513],
        "./shared_japanese.json": [37988, 27],
        "./shared_koreana.json": [22843, 4469],
        "./shared_latam.json": [5896, 9951],
        "./shared_norwegian.json": [96497, 1261],
        "./shared_polish.json": [21455, 6844],
        "./shared_portuguese.json": [42804, 9854],
        "./shared_romanian.json": [33057, 7660],
        "./shared_russian.json": [89425, 6403],
        "./shared_sc_schinese.json": [6296, 4358],
        "./shared_schinese.json": [94401, 755],
        "./shared_spanish.json": [48634, 4097],
        "./shared_swedish.json": [33095, 4487],
        "./shared_tchinese.json": [80058, 9547],
        "./shared_thai.json": [99706, 2138],
        "./shared_turkish.json": [37, 8282],
        "./shared_ukrainian.json": [69403, 1579],
        "./shared_vietnamese.json": [19382, 8433],
      };
      function n(e) {
        if (!r.o(i, e))
          return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = i[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 19));
      }
      (n.keys = () => Object.keys(i)), (n.id = 71574), (e.exports = n);
    },
    73763: (e, t, r) => {
      var i = {
        "./steamui_arabic.json": [31879, 1879],
        "./steamui_brazilian.json": [4761, 4761],
        "./steamui_bulgarian.json": [54689, 4689],
        "./steamui_czech.json": [40303, 303],
        "./steamui_danish.json": [4979, 4979],
        "./steamui_dutch.json": [4625, 4625],
        "./steamui_english.json": [59442, 9442],
        "./steamui_finnish.json": [41623, 1623],
        "./steamui_french.json": [70060, 60],
        "./steamui_german.json": [72028, 2028],
        "./steamui_greek.json": [89393, 9393],
        "./steamui_hungarian.json": [97338, 7338],
        "./steamui_italian.json": [2203, 2203],
        "./steamui_japanese.json": [40760, 760],
        "./steamui_koreana.json": [46736, 6736],
        "./steamui_latam.json": [16168, 6168],
        "./steamui_norwegian.json": [47107, 7107],
        "./steamui_polish.json": [43065, 3065],
        "./steamui_portuguese.json": [43287, 3287],
        "./steamui_romanian.json": [58620, 8620],
        "./steamui_russian.json": [18821, 8821],
        "./steamui_sc_schinese.json": [37021, 7021],
        "./steamui_schinese.json": [51202, 1202],
        "./steamui_spanish.json": [86881, 6881],
        "./steamui_swedish.json": [80395, 395],
        "./steamui_tchinese.json": [27172, 7172],
        "./steamui_thai.json": [88332, 8332],
        "./steamui_turkish.json": [15152, 5152],
        "./steamui_ukrainian.json": [96376, 6376],
        "./steamui_vietnamese.json": [97897, 7897],
      };
      function n(e) {
        if (!r.o(i, e))
          return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = i[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 19));
      }
      (n.keys = () => Object.keys(i)), (n.id = 73763), (e.exports = n);
    },
  },
]);
//# sourceMappingURL=642.js.map
